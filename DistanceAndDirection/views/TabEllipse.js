///////////////////////////////////////////////////////////////////////////
// Copyright (c) 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

/*global define*/
define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/on',
    'dojo/topic',
    'dojo/_base/html',
    'dojo/dom-attr',
    'dojo/dom-class',
    'dojo/dom-style',
    'dojo/string',
    'dojo/number',
    'dojo/keys',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/TitlePane',
    'dijit/TooltipDialog',
    'dijit/_WidgetsInTemplateMixin',
    'dijit/popup',
    'jimu/dijit/Message',
    'esri/layers/GraphicsLayer',
    'esri/layers/FeatureLayer',
    'esri/layers/LabelClass',
    'esri/geometry/geometryEngine',
    'esri/symbols/SimpleMarkerSymbol',
    'esri/symbols/SimpleLineSymbol',
    'esri/symbols/SimpleFillSymbol',
    'esri/symbols/TextSymbol',
    'esri/graphic',
    'esri/units',
    'esri/geometry/webMercatorUtils',
    'esri/tasks/FeatureSet',
    '../util',
    '../models/EllipseFeedback',
    '../models/ShapeModel',
    '../views/CoordinateInput',
    '../views/EditOutputCoordinate',
    'dojo/text!../templates/TabEllipse.html',
    'dijit/form/NumberSpinner'
], function (
    dojoDeclare,
    dojoLang,
    dojoOn,
    dojoTopic,
    dojoHTML,
    dojoDomAttr,
    dojoDomClass,
    dojoDomStyle,
    dojoString,
    dojoNumber,
    dojoKeys,
    dijitWidgetBase,
    dijitTemplatedMixin,
    dijitTitlePane,
    DijitTooltipDialog,
    dijitWidgetsInTemplate,
    DijitPopup,
    Message,
    EsriGraphicsLayer,
    EsriFeatureLayer,
    EsriLabelClass,
    esriGeometryEngine,
    EsriSimpleMarkerSymbol,
    EsriSimpleLineSymbol,
    EsriSimpleFillSymbol,
    EsriTextSymbol,
    EsriGraphic,
    esriUnits,
    esriWMUtils,
    EsriFeatureSet,
    Utils,
    DrawFeedBack,
    ShapeModel,
    CoordInput,
    EditOutputCoordinate,
    templateStr
) {
    'use strict';
    return dojoDeclare([dijitWidgetBase, dijitTemplatedMixin, dijitWidgetsInTemplate], {
        templateString: templateStr,
        baseClass: 'jimu-widget-TabEllipse',

        centerPointGraphic: null,
        
        /*
         * class constructor
         */
        constructor: function (args) {
            dojoDeclare.safeMixin(this, args);
            this._utils = new Utils();
        },

        /*
         * upgrade graphicslayer so we can use the label params
         */
        getLayer: function () {
          if (!this._gl) {
            var layerDefinition = {
              'extent': {
                'xmin': 0,
                'ymin': 0,
                'xmax': 0,
                'ymax': 0,
                'spatialReference': {
                    'wkid': 102100,
                    'latestWkid': 102100
                }},
              'geometryType': 'esriGeometryPolygon',
              'fields': [{
                  'name': 'MAJOR',
                  'type': 'esriFieldTypeText',
                  'alias': 'Major'
                }, {
                    'name': 'MINOR',
                    'type': 'esriFieldTypeText',
                    'alias': 'Minor'
                }, {
                    'name': 'ORIENTATION_ANGLE',
                    'type': 'esriFieldTypeText',
                    'alias': 'Orientation Angle'
                }
              ]
            };

            var lblexp = {'labelExpressionInfo': {'value': 'Major: {MAJOR} Minor: {MINOR} Angle: {ORIENTATION_ANGLE}'}};
            var lblClass = new EsriLabelClass(lblexp);
            lblClass.symbol = this._labelSym;

            var fs = new EsriFeatureSet();
            var featureCollection = {
              layerDefinition: layerDefinition,
              featureSet: fs
            };

            this._gl = new EsriFeatureLayer(featureCollection, {
              showLabels: true
            });

            this._gl.setLabelingInfo([lblClass]);

            return this._gl;
          }
        },
        /*
         * widget is alive, initilize our stuff
         */
        postCreate: function () {
            this.currentAngleUnit = this.angleUnitDD.get('value');
            this.currentLengthUnit = this.lengthUnitDD.get('value');

            this._labelSym = new EsriTextSymbol(this.labelSymbol);
            this._ptSym = new EsriSimpleMarkerSymbol(this.pointSymbol);
            this._ellipseSym = new EsriSimpleFillSymbol(this.ellipseSymbol);

            this.map.addLayer(this.getLayer());
            this.coordTool = new CoordInput({
                appConfig: this.appConfig
            }, this.startPointCoords);
            this.coordTool.inputCoordinate.formatType = 'DD';

            this.coordinateFormat = new DijitTooltipDialog({
                content: new EditOutputCoordinate(),
                style: 'width: 400px'
            });

            // add extended toolbar
            this.dt = new DrawFeedBack(this.map);
            this.dt.setLineSymbol(this._ellipseSym);
            this.dt.set('lengthUnit', 'feet');
            this.dt.set('angle', 0);
            this.dt.set('ellipseType', 'semi');

            this.syncEvents();
        },

        /*
          *
          */
        syncEvents: function () {
          
            dojoTopic.subscribe('DD_CLEAR_GRAPHICS',dojoLang.hitch(this, this.clearGraphics));
            //commented out as we want the graphics to remain when the widget is closed
            /*dojoTopic.subscribe('DD_WIDGET_OPEN',dojoLang.hitch(this, this.setGraphicsShown));
            dojoTopic.subscribe('DD_WIDGET_CLOSE',dojoLang.hitch(this, this.setGraphicsHidden));*/              
            dojoTopic.subscribe('TAB_SWITCHED', dojoLang.hitch(this, this.tabSwitched));
            dojoTopic.subscribe(DrawFeedBack.DD_ELLIPSE_MINOR_LENGTH_CHANGE,dojoLang.hitch(this,this.minorLengthDidChange));
            dojoTopic.subscribe(DrawFeedBack.DD_ELLIPSE_MAJOR_LENGTH_CHANGE,dojoLang.hitch(this,this.majorLengthDidChange));            
            dojoTopic.subscribe(DrawFeedBack.DD_ELLIPSE_ANGLE_CHANGE,dojoLang.hitch(this,this.angleDidChange));
          
            this.dt.watch('startPoint', dojoLang.hitch(this, function (r, ov, nv) {
                this.coordTool.inputCoordinate.set('coordinateEsriGeometry', nv);
                this.dt.addStartGraphic(nv, this._ptSym);
            }));
            
            this.coordTool.inputCoordinate.watch(
              'outputString', dojoLang.hitch(
                this, function (r, ov, nv) {
                this.coordTool.set('value', nv);
            }));            

            this.own(
              this.dt.on(
                'draw-complete',
                dojoLang.hitch(this, this.feedbackDidComplete)
              ),
              
              this.angleUnitDD.on(
                'change',
                dojoLang.hitch(this, this.angleUnitDDDidChange)
              ),
              this.lengthUnitDD.on(
                'change',
                dojoLang.hitch(this, this.lengthUnitDDDidChange)
              ),
              dojoOn(this.coordinateFormatButton, 'click',
                dojoLang.hitch(this, this.coordinateFormatButtonWasClicked)
              ),
              dojoOn(this.coordinateFormat.content.applyButton, 'click',
                  dojoLang.hitch(this, function () {
                      var fs = this.coordinateFormat.content.formats[this.coordinateFormat.content.ct];
                      var cfs = fs.defaultFormat;
                      var fv = this.coordinateFormat.content.frmtSelect.get('value');
                      if (fs.useCustom) {
                          cfs = fs.customFormat;
                      }
                      this.coordTool.inputCoordinate.set(
                        'formatPrefix',
                        this.coordinateFormat.content.addSignChkBox.checked
                      );
                      this.coordTool.inputCoordinate.set('formatString', cfs);
                      this.coordTool.inputCoordinate.set('formatType', fv);
                      this.setCoordLabel(fv);

                      DijitPopup.close(this.coordinateFormat);
                  }
              )),
              dojoOn(this.addPointBtn, 'click',
                dojoLang.hitch(this, this.pointButtonWasClicked)
              ),
              dojoOn(this.coordTool, 'keyup',
                dojoLang.hitch(this, this.coordToolKeyWasPressed)
              ),
              dojoOn(this.majorAxisInput, 'keyup',
                dojoLang.hitch(this, this.onMajorAxisInputKeyupHandler)
              ),
              dojoOn(this.minorAxisInput, 'keyup',
                dojoLang.hitch(this, this.onMinorAxisInputKeyupHandler)
              ),
              dojoOn(this.angleInput, 'keyup',
                dojoLang.hitch(this, this.onOrientationAngleKeyupHandler)
              ),
              dojoOn(this.angleInput, 'change',
                dojoLang.hitch(this, this.angleDidChange)
              ),              
              dojoOn(this.coordinateFormat.content.cancelButton, 'click',
                dojoLang.hitch(this, function () {
                    DijitPopup.close(this.coordinateFormat);
                }
              ))
            );
        },

        /*
         *
         */
        onMajorAxisInputKeyupHandler: function (evt) {
            dojoTopic.publish('manual-ellipse-major-axis-input', this.majorAxisInput);
        },

        /*
         *
         */
        onMinorAxisInputKeyupHandler: function (evt) {
            dojoTopic.publish('manual-ellipse-minor-axis-input', this.minorAxisInput);
        },        
        
        /*
         *
         */
        onOrientationAngleKeyupHandler: function (evt) {
            this.dt.set('angle', this.angleInput.displayedValue);
            if (evt.keyCode === dojoKeys.ENTER) {
                if (this.angleInput.isValid() && this.minorAxisInput.isValid() && this.majorAxisInput.isValid()) {                
                    dojoTopic.publish('manual-ellipse-orientation-angle-input', this.angleInput.displayedValue);
                } else {
                  var alertMessage = new Message({
                    message: '<p>The ellipse creation form contains invalid parameters. Please check your Orientation Angle, Major axis and Minor axis contain valid values.</p>'
                  });
                }
            }
        },

        /*
         * update the gui with the major axis length
         */
        majorLengthDidChange: function (number) {
            this.majorAxisInput.setValue(number);
        },

        /*
         * update the gui with the min axis length
         */
        minorLengthDidChange: function (number) {
            this.minorAxisInput.setValue(number);            
        },
        
        /*
         * update the gui with angle
         */
        angleDidChange: function (number) {
            this.angleInput.setValue(number);
            this.dt.set('angle', number);
        },
        
        /*
         * catch key press in start point
         */
        coordToolKeyWasPressed: function (evt) {
            if (evt.keyCode === dojoKeys.ENTER) {
                this.coordTool.inputCoordinate.getInputType().then(dojoLang.hitch(this, function (r) {
                    dojoTopic.publish(
                      'manual-ellipse-center-point-input',
                      this.coordTool.inputCoordinate.coordinateEsriGeometry
                    );
                    this.setCoordLabel(r.inputType);
                    this.dt.addStartGraphic(r.coordinateEsriGeometry, this._ptSym);
                }));
            }
        },

        /*
         *
        */
        coordinateFormatButtonWasClicked: function () {
            this.coordinateFormat.content.set('ct', this.coordTool.inputCoordinate.formatType);
            DijitPopup.open({
                popup: this.coordinateFormat,
                around: this.coordinateFormatButton
            });
        },

        /*
         * Button click event, activate feedback tool
         */
        pointButtonWasClicked: function () {
            this.map.disableMapNavigation();
            this.dt.activate('polyline');
            dojoDomClass.toggle(this.addPointBtn, 'jimu-state-active');
        },

        /*
         *
         */
        lengthUnitDDDidChange: function () {
            this.currentLengthUnit = this.lengthUnitDD.get('value');
            this.dt.set('lengthUnit', this.currentLengthUnit);
            this.onMajorAxisInputKeyupHandler();
            this.onMinorAxisInputKeyupHandler();
        },

        /*
         *
         */
        angleUnitDDDidChange: function () {
            this.currentAngleUnit = this.angleUnitDD.get('value');
            this.dt.set('angleUnit', this.currentAngleUnit);
            
            if (this.currentAngleUnit == "degrees")
            {
              this.angleInput.constraints.max = 360;
            this.angleInput.rangeMessage = "Value must be between 0 and 360";
              
            } else {
            this.angleInput.constraints.max = 6400;
            this.angleInput.rangeMessage = "Value must be between 0 and 6400";
            }

        },

        /*
         *
         */
        feedbackDidComplete: function (results) {
          this.currentEllipse = new ShapeModel(results);
          this.currentEllipse.graphic = new EsriGraphic(
            this.currentEllipse.geodesicGeometry,
            this._ellipseSym
          );
          
          var unitForDistance = dijit.byId('lengthUnitDD').get('displayedValue');
          var unitForAngle = dijit.byId('angleUnitDD').get('displayedValue');
          
          var majorValue = dojoDomAttr.get(this.majorAxisInput, 'value'); 
          if ((dojoDomAttr.get(this.ellipseType, 'value') == "full")) {
              majorValue = majorValue * 2;
          }

          this.currentEllipse.graphic.setAttributes({
            'MINOR': dojoDomAttr.get(this.minorAxisInput, 'value').toString() + " " + unitForDistance,
            'MAJOR': majorValue.toString() + " " + unitForDistance,
            'ORIENTATION_ANGLE': this.angleInput.displayedValue.toString() + " " + unitForAngle,
          });

          this._gl.add(this.currentEllipse.graphic);
          this._gl.refresh();
          this.emit('graphic_created', this.currentEllipse);

          this.map.enableMapNavigation();
          this.dt.deactivate();
          this.dt.removeStartGraphic();
          dojoDomClass.remove(this.addPointBtn, 'jimu-state-active');
        },

        /*
         *
         */
        clearGraphics: function () {
          if (this._gl) {
            this._gl.clear();
            this.coordTool.clear();
            this.majorAxisInput.set('value', '');
            this.minorAxisInput.set('value', '');
            this.angleInput.set('value', '');
          }
          dojoDomClass.remove(this.addPointBtn, 'jimu-state-active');
        },

        /*
         *
         */
        setGraphicsHidden: function () {
          if (this._gl) {
            this._gl.hide();
          }
        },

        /*
         *
         */
        setGraphicsShown: function () {
          if (this._gl) {
            this._gl.show();
          }
        },

        /*
         * Creates a temporary center point on the map
         */
        createCenterPointGraphic: function () {
          if (this.centerPointGraphic !== null) {
            this._gl.remove(this.centerPointGraphic);
          }
          var centerPoint = this.coordTool.inputCoordinate.coordinateEsriGeometry;
          if (centerPoint) {
            this.centerPointGraphic = new EsriGraphic(
              centerPoint, new EsriSimpleMarkerSymbol()
            );
            this._gl.add(this.centerPointGraphic);
          }
        },

        /*
         * Removes the center point graphic
         */
        removeCenterPointGraphic: function () {
          if (this.centerPointGraphic) {
            this._gl.remove(this.centerPointGraphic);
          }
        },

        /*
        *
        */
        setCoordLabel: function (toType) {
          this.coordInputLabel.innerHTML = dojoString.substitute(
            'Center Point (${crdType})', {
                crdType: toType
            }
          );
        },
    
        /*
         * Make sure any active tools are deselected to prevent multiple actions being performed
         */
        tabSwitched: function () {
            this.dt.deactivate();
            this.dt.cleanup();
            this.dt.disconnectOnMouseMoveHandler();
            this.map.enableMapNavigation();
            this.dt.removeStartGraphic();
            dojoHTML.removeClass(this.addPointBtn, 'jimu-state-active');
        }
    });
});
