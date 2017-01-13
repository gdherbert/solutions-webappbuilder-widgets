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
    'dojo/query',
    'dojo/keys',
    'dojo/Stateful',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dijit/TooltipDialog',
    'dijit/popup',
    'jimu/dijit/Message',
    'esri/layers/GraphicsLayer',
    'esri/layers/FeatureLayer',
    'esri/layers/LabelClass',
    'esri/tasks/FeatureSet',
    'esri/geometry/geometryEngine',
    'esri/geometry/Polyline',
    'esri/geometry/Circle',
    'esri/geometry/Point',
    'esri/symbols/SimpleLineSymbol',
    'esri/symbols/SimpleMarkerSymbol',
    'esri/symbols/TextSymbol',
    'esri/graphic',
    'esri/units',
    'esri/geometry/webMercatorUtils',
    '../models/LineFeedback',
    '../models/ShapeModel',
    '../views/CoordinateInput',
    '../views/EditOutputCoordinate',
    '../models/DirectionalLineSymbol',
    'dojo/text!../templates/TabLine.html',
    'dijit/form/NumberTextBox'
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
    dojoQuery,
    dojoKeys,
    dojoStateful,
    dijitWidgetBase,
    dijitTemplatedMixin,
    dijitWidgetsInTemplate,
    DijitTooltipDialog,
    DijitPopup,
    Message,
    EsriGraphicsLayer,
    EsriFeatureLayer,
    EsriLabelClass,
    EsriFeatureSet,
    esriGeometryEngine,
    EsriPolyline,
    EsriCircle,
    EsriPoint,
    EsriSimpleLineSymbol,
    EsriSimpleMarkerSymbol,
    EsriTextSymbol,
    EsriGraphic,
    esriUnits,
    esriWMUtils,
    DrawFeedBack,
    ShapeModel,
    CoordInput,
    EditOutputCoordinate,
    DirectionalLineSymbol,
    templateStr
) {
    'use strict';
    return dojoDeclare([dijitWidgetBase, dijitTemplatedMixin, dijitWidgetsInTemplate], {
        templateString: templateStr,
        baseClass: 'jimu-widget-TabLine',

        /*
         * class constructor
         */
        constructor: function (args) {
          dojoDeclare.safeMixin(this, args);
        },

        /*
         * dijit post create
         */
        postCreate: function () {

          this.currentLengthUnit = this.lengthUnitDD.get('value');

          this.currentAngleUnit = this.angleUnitDD.get('value');

          //Create the directional line symbol with basic polyline params
          var basicOptions = {
              directionSymbol: "arrow1",
              directionPixelBuffer: 100000,
              showStartSymbol: true,
              showEndSymbol: true
          };            
          basicOptions = dojoLang.mixin(basicOptions, this.lineSymbol);
          this._lineSym = new DirectionalLineSymbol(basicOptions);

          this._ptSym = new EsriSimpleMarkerSymbol(this.pointSymbol);

          this._labelSym = new EsriTextSymbol(this.labelSymbol);

          this.map.addLayer(this.getLayer());

          // add extended toolbar
          this.dt = new DrawFeedBack(this.map);
          this.dt.setLineSymbol(this._lineSym);

          this.coordToolStart = new CoordInput({
            appConfig: this.appConfig}, this.startPointCoordsLine);
          this.coordToolStart.inputCoordinate.formatType = 'DD';

          this.coordToolEnd = new CoordInput({
            appConfig: this.appConfig}, this.endPointCoordsLine);
          this.coordToolEnd.inputCoordinate.formatTyp = 'DD';

          this.coordinateFormatStart = new DijitTooltipDialog({
            content: new EditOutputCoordinate(),
            style: 'width: 400px'
          });

          this.lineTypeDDDidChange();
          this.syncEvents();
        },

        /*
         * upgrade graphicslayer so we can use the label params
         */
        getLayer: function () {
              if (!this._gl) {
                var layerDefinition = {
                  'geometryType': 'esriGeometryPolyline',
                  'extent': {
                    'xmin': 0,
                    'ymin': 0,
                    'xmax': 0,
                    'ymax': 0,
                    'spatialReference': {
                        'wkid': 102100,
                        'latestWkid': 102100
                    }
                  },
                  'fields': [{
                    'name': 'GeoLength',
                    'type': 'esriFieldTypeString',
                    'alias': 'GeoLength'
                  }, {
                    'name': 'LineAngle',
                    'type': 'esriFieldTypeString',
                    'alias': 'LineAngle'
                  }]
                };

                  var lblexp = {'labelExpressionInfo': {'value': 'Length: {GeoLength}, Angle: {LineAngle}'}};
                  var lblClass = new EsriLabelClass(lblexp);
                  lblClass.labelPlacement = 'above-along';
                  lblClass.where = "GeoLength > 0"
                  lblClass.symbol = this._labelSym;

                  var featureCollection = {
                    layerDefinition: layerDefinition,
                    featureSet: new EsriFeatureSet()
                  };

                  this._gl = new EsriFeatureLayer(featureCollection, {
                    showLabels: true
                  });

                  this._gl.setLabelingInfo([lblClass]);

                  return this._gl;
              }
        },

        /*
         * length value change
         */
        lineLengthDidChange: function (r) {
          var frmtdLength = dojoNumber.format(r,{places:2});
          this.lengthInput.set('value', frmtdLength);
        },

        /*
         * angle value change
         */
        lineAngleDidChange: function (r) {
          this.angleInput.set('value', r);
        },

        /*
         * start listening for events
         */
        syncEvents: function () {
          
          dojoTopic.subscribe('DD_CLEAR_GRAPHICS',dojoLang.hitch(this, this.clearGraphics));
          //commented out as we want the graphics to remain when the widget is closed
          /*dojoTopic.subscribe('DD_WIDGET_OPEN',dojoLang.hitch(this, this.setGraphicsShown));
          dojoTopic.subscribe('DD_WIDGET_CLOSE',dojoLang.hitch(this, this.setGraphicsHidden));*/
          dojoTopic.subscribe('TAB_SWITCHED', dojoLang.hitch(this, this.tabSwitched));
          dojoTopic.subscribe(DrawFeedBack.drawnLineLengthDidChange,dojoLang.hitch(this, this.lineLengthDidChange));
          dojoTopic.subscribe(DrawFeedBack.drawnLineAngleDidChange,dojoLang.hitch(this, this.lineAngleDidChange));
                   
          this.dt.watch('startPoint' , dojoLang.hitch(this, function (r, ov, nv) {
            this.coordToolStart.inputCoordinate.set('coordinateEsriGeometry', nv);
            this.dt.addStartGraphic(nv, this._ptSym);
          }));

          this.dt.watch('endPoint' , dojoLang.hitch(this, function (r, ov, nv) {
            this.coordToolEnd.inputCoordinate.set('coordinateEsriGeometry',  nv);
          }));

          this.dt.watch('currentEndPoint', dojoLang.hitch(this, function (r, ov, nv) {
            this.coordToolEnd.inputCoordinate.set('coordinateEsriGeometry', nv);
          }));

          this.coordToolStart.inputCoordinate.watch(
            'outputString',
            dojoLang.hitch(
              this,
              function (r, ov, nv) {
                this.coordToolStart.set('value', nv);
              }
            )
          );

          this.coordToolEnd.inputCoordinate.watch(
            'outputString',
            dojoLang.hitch(
              this,
              function (r, ov, nv) {
                this.coordToolEnd.set('value', nv);
              }
            )
          );

          this.own(
            this.dt.on(
              'draw-complete',
              dojoLang.hitch(this, this.feedbackDidComplete)
            ),

            dojoOn(this.coordinateFormatButtonLine, 'click',
              dojoLang.hitch(this, this.coordinateFormatButtonLineWasClicked)
            ),

            dojoOn(
              this.coordinateFormatStart.content.applyButton,
              'click',
              dojoLang.hitch(
                this,
                function () {
                  var fs = this.coordinateFormatStart.content.formats[this.coordinateFormatStart.content.ct];
                  var cfs = fs.defaultFormat;
                  var fv = this.coordinateFormatStart.content.frmtSelect.get('value');
                  if (fs.useCustom) {cfs = fs.customFormat;}
                  this.coordToolStart.inputCoordinate.set(
                    'formatPrefix',
                    this.coordinateFormatStart.content.addSignChkBox.checked
                  );
                  this.coordToolStart.inputCoordinate.set('formatString', cfs);
                  this.coordToolStart.inputCoordinate.set('formatType', fv);
                  this.coordToolEnd.inputCoordinate.set(
                    'formatPrefix',
                    this.coordinateFormatStart.content.addSignChkBox.checked
                  );
                  this.coordToolEnd.inputCoordinate.set('formatString', cfs);
                  this.coordToolEnd.inputCoordinate.set('formatType', fv);
                  this.setCoordLabelStart(fv);
                  this.setCoordLabelEnd(fv);
                  DijitPopup.close(this.coordinateFormatStart);
                }
              )
            ),

            dojoOn(
              this.coordinateFormatStart.content.cancelButton,
              'click',
              dojoLang.hitch(
                this,
                function () {
                  DijitPopup.close(this.coordinateFormatStart);
                }
              )
            ),

            dojoOn(
              this.coordToolEnd,
              'keyup',
              dojoLang.hitch(this, this.coordToolEndKeyWasPressed)
            ),

            dojoOn(
              this.angleInput,
                'keyup',
                dojoLang.hitch(this, this.createManualGraphicDistanceAndBearing)
            ),

            dojoOn(
              this.addPointBtnLine,
              'click',
              dojoLang.hitch(this, this.pointButtonWasClicked)
            ),

            this.lengthUnitDD.on(
              'change',
              dojoLang.hitch(this, this.lengthUnitDDDidChange)
            ),

            this.angleUnitDD.on(
              'change',
              dojoLang.hitch(this, this.angleUnitDDDidChange)
            ),

            this.lineTypeDD.on(
              'change',
              dojoLang.hitch(this, this.lineTypeDDDidChange)
            ),

            this.coordToolStart.on('blur',
              dojoLang.hitch(this, this.coordToolStartDidLoseFocus)
            ),
            
            this.coordToolStart.on('keyup',
              dojoLang.hitch(this, this.coordToolKeyWasPressed)
            ),

            this.coordToolEnd.on('blur',
              dojoLang.hitch(this, this.coordToolEndDidLoseFocus)
            )
          );
        },

        /*
         *
         */
        coordinateFormatButtonLineWasClicked: function () {
          this.coordinateFormatStart.content.set('ct', this.coordToolStart.inputCoordinate.formatType);
          DijitPopup.open({
            popup: this.coordinateFormatStart,
            around: this.coordinateFormatButtonLine
          });
        },

        /*
         * catch key press in start point
         */
        coordToolEndKeyWasPressed: function (evt) {
          if (this.lineTypeDD.get('value') !== 'Points') {
            return;
          }

          if (evt.keyCode === dojoKeys.ENTER ) {
            if(this.coordToolEnd.isValid() && this.coordToolStart.isValid() && this.coordToolStart.value != "") {
              this.coordToolEnd.inputCoordinate.getInputType().then(dojoLang.hitch(this, function (r) {
                dojoTopic.publish(
                  'manual-line-end-point-input',
                  this.coordToolEnd.inputCoordinate.coordinateEsriGeometry
                );                
                this.createManualGraphic();
              }));
            }
            else {
              var alertMessage = new Message({
                message: '<p>The line creation form contains invalid parameters. Please check the start and end points contain a valid values.</p>'
              });
            }
          }
        },

        /*
         * get formatted coordinate type
         */
        coordToolStartDidLoseFocus: function () {
          this.coordToolStart.inputCoordinate.isManual = true;
          this.coordToolStart.inputCoordinate.getInputType().then(dojoLang.hitch(this, function (r){
           this.setCoordLabelStart(r.inputType);
           this.dt.addStartGraphic(r.coordinateEsriGeometry, this._ptSym);
         }));
        },
        
        /*
         * catch key press in start point
         */
        coordToolKeyWasPressed: function (evt) {
          if (evt.keyCode === dojoKeys.ENTER) {              
            this.coordToolStart.inputCoordinate.getInputType().then(dojoLang.hitch(this, function (r) {
              dojoTopic.publish(
                'manual-linestart-point-input',
                this.coordToolStart.inputCoordinate.coordinateEsriGeometry
              );
              this.setCoordLabelStart(r.inputType);
              this.dt.addStartGraphic(r.coordinateEsriGeometry, this._ptSym);
            }));
          }
        },

        /*
         *
         */
        coordToolEndDidLoseFocus: function () {
          this.coordToolEnd.inputCoordinate.isManual = true;
          this.coordToolEnd.inputCoordinate.getInputType().then(
            dojoLang.hitch(this, function (r) {
              this.setCoordLabelEnd(r.inputType);
            }
          ));
        },

        /*
         *
         */
        setCoordLabelEnd: function (toType) {

          this.lineEndPointLabel.innerHTML = dojoString.substitute(
            'End Point (${crdType})', {
              crdType: toType
            }
          );
        },

        /*
         *
         */
        setCoordLabelStart: function (toType) {
          this.lineStartPointLabel.innerHTML = dojoString.substitute(
            'Start Point (${crdType})', {
              crdType: toType
            }
          );
        },

        /*
         * update the UI to reflect current state
         */
        lineTypeDDDidChange: function () {
          if (this.lineTypeDD.get('value') === 'Points') {
            this.coordToolEnd.set('disabled', false);
            this.angleInput.set('disabled', true);
            this.lengthInput.set('disabled', true);
          } else {
            this.coordToolEnd.set('disabled', true);
            this.angleInput.set('disabled', false);
            this.lengthInput.set('disabled', false);
          }
        },

        /*
         * Button click event, activate feedback tool
         */
        pointButtonWasClicked: function () {
          this.map.disableMapNavigation();
          this.dt.activate('polyline');
          dojoDomClass.toggle(this.addPointBtnLine, 'jimu-state-active');
        },

        /*
         *
         */
        lengthUnitDDDidChange: function () {
          this.currentLengthUnit = this.lengthUnitDD.get('value');
          this.dt.set('lengthUnit', this.currentLengthUnit);
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
         * pass results of feedback to the shapemodel
         */
        feedbackDidComplete: function (results) {
          if (this.lengthInput.get('value') !== undefined || this.angleInput.get('value') !== undefined) {
            this.currentLine = new ShapeModel(results);
            
            this.currentLine.graphic = new EsriGraphic(
              this.currentLine.wmGeometry,
              this._lineSym, {
                'GeoLength': this.lengthInput.get('value').toString() + " " + this.lengthUnitDD.get('value').charAt(0).toUpperCase() + this.lengthUnitDD.get('value').slice(1),
                'LineAngle': this.angleInput.get('value').toString() + " " + this.angleUnitDD.get('value').charAt(0).toUpperCase() + this.angleUnitDD.get('value').slice(1),
              }
            );

            this._gl.add(this.currentLine.graphic);
            this._gl.refresh();
            this.emit('graphic_created', this.currentLine);

            this.map.enableMapNavigation();

            this.dt.deactivate();
            this.dt.removeStartGraphic();
          }
          dojoDomClass.toggle(this.addPointBtnLine, 'jimu-state-active');
        },

        /*
        *
        */
        createManualGraphic: function () {
          this._gl.remove(this.startGraphic);

          var stPt = this.coordToolStart.inputCoordinate.coordinateEsriGeometry;
          var endPt = this.coordToolEnd.inputCoordinate.coordinateEsriGeometry;

          var newLine = new EsriPolyline();
          newLine.addPath([stPt, endPt]);

          var lineLengthMeters = esriGeometryEngine.geodesicLength(newLine, 9001);

          this.lengthInput.set('value',this.dt._utils.convertMetersToUnits(lineLengthMeters, this.lengthUnitDD.get('value')));
          this.angleInput.set('value',this.dt.getAngle(stPt, endPt));

          this.map.setExtent(newLine.getExtent().expand(3));

          this.feedbackDidComplete({geometry: newLine, geographicGeometry: newLine});
        },

        /*
        *
        */
        createManualGraphicDistanceAndBearing: function (evt) {
          if (evt.keyCode !== dojoKeys.ENTER ) {return;}

          this._gl.remove(this.startGraphic);

          var stPt = this.coordToolStart.inputCoordinate.coordinateEsriGeometry;

          var l = this.dt._utils.convertToMeters(this.lengthInput.get('value'), this.lengthUnitDD.get('value'));            

          var tempcircle = new EsriCircle(stPt, {
            geodesic:true,
            radius: l,
            numberOfPoints: this.angleInput.constraints.max              
          });

          var fpc =  new EsriPoint(
            tempcircle.rings[0][parseInt(this.angleInput.get('value'))][0],
            tempcircle.rings[0][parseInt(this.angleInput.get('value'))][1],
            tempcircle.spatialReference
          );

          var newLine = new EsriPolyline();
          newLine.addPath([stPt, fpc]);

          this.feedbackDidComplete({
            geometry: newLine,
            geographicGeometry: newLine
          });
        },

        /*
         *
         */
        clearGraphics: function () {
          if (this._gl) {
            this._gl.clear();
            this.dt.removeStartGraphic();
            this.coordToolStart.clear();
            this.coordToolEnd.clear();
            this.lengthInput.set('value', 0);
            this.angleInput.set('value', 0);
          }
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
         * Make sure any active tools are deselected to prevent multiple actions being performed
         */
        tabSwitched: function () {
          this.dt.deactivate();
          this.map.enableMapNavigation();
          this.dt.removeStartGraphic();
          dojoHTML.removeClass(this.addPointBtnLine, 'jimu-state-active');
        }
    });
});
