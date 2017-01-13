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
    'dojo',
    'dijit/registry',
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/_base/array',    
    'dojo/dom-class',
    'dojo/on',
    'dojo/topic',
    'dojo/_base/html',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'jimu/dijit/Message',
    'esri/IdentityManager',
    'esri/arcgis/OAuthInfo',
    'esri/arcgis/Portal',
    'esri/layers/GraphicsLayer',
    'esri/layers/FeatureLayer',
    'esri/layers/LabelClass',
    'esri/symbols/SimpleFillSymbol',
    'esri/symbols/SimpleLineSymbol',
    'esri/symbols/SimpleMarkerSymbol',
    'esri/renderers/SimpleRenderer',
    'esri/symbols/Font',
    'esri/Color',
    'esri/graphic',
    'esri/toolbars/draw',
    'esri/symbols/TextSymbol',
    './drawGRG',
    'esri/toolbars/edit',
    'dojo/text!../templates/TabCreatePointGRG.html'
], function (
    dojo,
    registry,
    dojoDeclare,
    dojoLang,
    dojoArray,
    dojoClass,
    dojoOn,
    dojoTopic,
    html,
    dijitWidgetBase,    
    dijitTemplatedMixin,
    dijitWidgetsInTemplate,
    Message,
    esriId,
    OAuthInfo,
    arcgisPortal,
    GraphicsLayer,
    FeatureLayer,
    LabelClass,
    SimpleFillSymbol,
    SimpleLineSymbol,
    SimpleMarkerSymbol,
    SimpleRenderer,
    Font,
    Color,
    Graphic,
    Draw,
    TextSymbol,
    drawGRG,
    Edit,
    templateStr    
) {
    'use strict';
    return dojoDeclare([dijitWidgetBase, dijitTemplatedMixin, dijitWidgetsInTemplate], {
        templateString: templateStr,
        baseClass: 'jimu-widget-TabLine',

        constructor: function (args) {
          dojoDeclare.safeMixin(this, args);
        },

        postCreate: function () {
          
          this.currentPointUnit = 'meters';
          
          // create graphics layer for grid extent and add to map
          this._graphicsLayerPointOfOrigin = new GraphicsLayer();
          this._pointSym = new SimpleMarkerSymbol(this.pointSymbol);
                    
          // create a renderer for the grg layer to override default symbology
          var gridSymbol = new SimpleFillSymbol(this.cellAreaFillSymbol);
          var gridRenderer = new SimpleRenderer(gridSymbol);
          
          var featureCollection = {
            "layerDefinition": {
              "geometryType": "esriGeometryPolygon",
              "objectIdField": "ObjectID",
              "fields": [{
              "name": "ObjectID",
              "alias": "ObjectID",
              "type": "esriFieldTypeOID"
              }, {
              "name": "grid",
              "alias": "grid",
              "type": "esriFieldTypeString"
              }]
            }
          };

          this.GRGPoint = new FeatureLayer(featureCollection,{
            outFields: ["*"]
          });
          this.GRGPoint.setRenderer(gridRenderer);
         
          var json = {
            "labelExpressionInfo": {"value": "{grid}"}
          };
          
          // create a text symbol to define the style of labels
          var labelClass = new LabelClass(json);
          labelClass.symbol = new TextSymbol(this.cellTextSymbol || {
            font: new Font("11", Font.STYLE_NORMAL, Font.VARIANT_NORMAL, Font.WEIGHT_BOLD, "Helvetica"),
            color: new Color("#666633")
          });
          this.GRGPoint.setLabelingInfo([labelClass]);
          
          this.map.addLayers([this.GRGPoint,this._graphicsLayerPointOfOrigin]);

          // add draw toolbar
          this.dtPoint = new Draw(this.map);
          
          this.syncEvents();
          dojoLang.hitch(this,this.initSaveToPortal());
        },
        
        syncEvents: function () {
          
          dojoTopic.subscribe('DD_WIDGET_OPEN', dojoLang.hitch(this, this.setGraphicsShown));
          dojoTopic.subscribe('DD_WIDGET_CLOSE', dojoLang.hitch(this, this.setGraphicsHidden));
          dojoTopic.subscribe('TAB_SWITCHED', dojoLang.hitch(this, this.tabSwitched));

          this.own(
            this.dtPoint.on(
              'draw-complete',
              dojoLang.hitch(this, this.drawPointComplete)
          ));

          this.own(dojoOn(
            this.addGRGPointBtn,
            'click',
            dojoLang.hitch(this, this.addGRGPointClicked)
          ));
          
          this.own(dojoOn(
            this.deleteGRGPointBtn,
            'click',
            dojoLang.hitch(this, this.deleteGRGPointButtonClicked)
          ));  
          
          this.own(dojoOn(
            this.createPointGRGButton, 
            'click', dojoLang.hitch(this, this.createPointGRG)
          ));

          this.own(dojoOn(
            this.pointCellUnits, 
            'change',
            dojoLang.hitch(this, this.cellPointUnitsChange)
          ));
        },
        
        addGRGPointClicked: function () {
          this.GRGPoint.clear();
          this._graphicsLayerPointOfOrigin.clear();
          //refresh each of the feature/graphic layers to enusre labels are removed
          for(var j = 0; j < this.map.graphicsLayerIds.length; j++) {
            this.map.getLayer(this.map.graphicsLayerIds[j]).refresh();
          }
          this.map.disableMapNavigation();
          this.dtPoint.activate('point');
          html.addClass(this.addGRGPointBtn, 'jimu-state-active');
          html.addClass(this.saveGRGPointButton, 'controlGroupHidden');
        },
        
        cellPointUnitsChange: function () {
          this.pointCellWidth.setValue(drawGRG.convertUnits(this.currentPointUnit,this.pointCellUnits.value,this.pointCellWidth.value));
          this.pointCellHeight.setValue(drawGRG.convertUnits(this.currentPointUnit,this.pointCellUnits.value,this.pointCellHeight.value));
          this.currentPointUnit = this.pointCellUnits.value;
        },
        
        deleteGRGPointButtonClicked: function () {
          this._graphicsLayerPointOfOrigin.clear();
          
          html.removeClass(this.addGRGPointBtn, 'jimu-state-active');          
          html.removeClass(this.addGRGPoint, 'controlGroupHidden');
          html.addClass(this.addGRGPoint, 'controlGroup');
          html.removeClass(this.deleteGRGPoint, 'controlGroup');
          html.addClass(this.deleteGRGPoint, 'controlGroupHidden');          
        },

        drawPointComplete: function (evt) {          
          var graphic = new Graphic(evt.geometry, this._pointSym);
          this._graphicsLayerPointOfOrigin.add(graphic);
          this.map.enableMapNavigation();      
          this.dtPoint.deactivate();
          
          dojoClass.toggle(this.addGRGPoint, "controlGroupHidden");
          dojoClass.toggle(this.deleteGRGPoint, "controlGroupHidden");
        },
        
        createPointGRG: function () {
        //check form inouts for validity
        if ( this._graphicsLayerPointOfOrigin.graphics[0] && this.addGRGPointName.isValid() && this.pointCellWidth.isValid() && this.pointCellHeight.isValid() && this.gridAnglePoint.isValid()) {
          
          //get center point of AOI
          var centerPoint = this._graphicsLayerPointOfOrigin.graphics[0].geometry;
          
          var cellWidth = drawGRG.convertUnits(this.pointCellUnits.value,"meters",this.pointCellWidth.value);
          var cellHeight = drawGRG.convertUnits(this.pointCellUnits.value,"meters",this.pointCellHeight.value);
          
          if(drawGRG.checkGridSize(this.pointCellHorizontal.value,this.pointCellVertical.value))
          {
            var features = drawGRG.createGRG(this.pointCellHorizontal.value,this.pointCellVertical.value,centerPoint,cellWidth,cellHeight,this.gridAnglePoint.value,this.pointLabelStartPosition.value,this.pointLabelStyle.value); 
            //apply the edits to the feature layer
            this.GRGPoint.applyEdits(features, null, null);
            this.deleteGRGPointButtonClicked();
            html.removeClass(this.saveGRGPointButton, 'controlGroupHidden');            
          }
          
        } else {
          // Invalid entry
          var alertMessage = new Message({
            message: '<p>The GRG creation form has missing or invalid parameters, Please ensure:</p><ul><li>The GRG Name is not blank.</li><li>A GRG point has been drawn.</li><li>The cell width and height contain valid values.</li><li>The grid angle is valid.</li></ul>'
          });          
        }
      },
        
        setGraphicsHidden: function () {
          if (this._graphicsLayerPointOfOrigin) {
            this._graphicsLayerPointOfOrigin.hide();
          }
        },
        
        setGraphicsShown: function () {
          if (this._graphicsLayerPointOfOrigin) {
            this._graphicsLayerPointOfOrigin.show();
          }          
        },
        
        tabSwitched: function () {
          this.GRGPoint.clear();          
          this.dtPoint.deactivate();
          this.deleteGRGPointButtonClicked();
          html.addClass(this.saveGRGPointButton, 'controlGroupHidden');
        },
        
        initSaveToPortal: function() {          
          
          esriId.registerOAuthInfos();
          
          this.own(dojoOn(this.saveGRGPointButton, "click", dojoLang.hitch(this, function(evt) {
          
            var featureServiceName = this.addGRGPointName.value;
          
            esriId.getCredential(this.appConfig.portalUrl + "/sharing", { oAuthPopupConfirmation: false }).then(dojoLang.hitch(this, function() {
              //sign in
              new arcgisPortal.Portal(this.appConfig.portalUrl).signIn().then(dojoLang.hitch(this, function(portalUser) {
               //Get the token
                var token = portalUser.credential.token;
                var orgId = portalUser.orgId;
                var userName = portalUser.username;
                
                var checkServiceNameUrl = this.appConfig.portalUrl + "sharing/rest/portals/" + orgId + "/isServiceNameAvailable";
                var createServiceUrl = this.appConfig.portalUrl + "sharing/content/users/" + userName + "/createService"; 

                drawGRG.isNameAvailable(checkServiceNameUrl, token, featureServiceName).then(dojoLang.hitch(this, function(response0) {
                  if (response0.available) {
                    //set the map to busy
                    dojoTopic.publish('SHOW_BUSY');
                    drawGRG.createFeatureService(createServiceUrl, token, 
                      drawGRG.getFeatureServiceParams(featureServiceName, this.map)).then(dojoLang.hitch(this, function(response1) {
                        if (response1.success) {
                          var addToDefinitionUrl = response1.serviceurl.replace(new RegExp('rest', 'g'), "rest/admin") + "/addToDefinition";
                          drawGRG.addDefinitionToService(addToDefinitionUrl, token, drawGRG.getLayerParams(featureServiceName, this.map, this.cellTextSymbol, this.cellAreaFillSymbol)).then(dojoLang.hitch(this, function(response2) {
                            if (response2.success) {
                              //Push features to new layer
                              var newFeatureLayer = new FeatureLayer(response1.serviceurl + "/0?token=" + token, {
                                mode: FeatureLayer.MODE_SNAPSHOT,
                                outFields: ["*"]                                  
                               });
                              this.map.addLayer(newFeatureLayer);

                              var newGraphics = [];
                              dojoArray.forEach(this.GRGPoint.graphics, function (g) {
                                newGraphics.push(new Graphic(g.geometry, null, {grid: g.attributes["grid"]}));
                              }, this);

                              newFeatureLayer.applyEdits(newGraphics, null, null).then(dojoLang.hitch(this, function(){
                                this.tabSwitched();                                
                              })).otherwise(dojoLang.hitch(this,function(){
                                this.tabSwitched();
                              })); 
                              dojoTopic.publish('HIDE_BUSY');
                            }
                          }), function(err2) {
                            dojoTopic.publish('HIDE_BUSY');
                            new Message({
                              message: "Add to definition: " + err2.message
                            });                              
                          });
                        } else {
                          dojoTopic.publish('HIDE_BUSY');
                          new Message({
                            message: "Unable to create " + featureServiceName
                          });
                        }
                      }), function(err1) {
                        dojoTopic.publish('HIDE_BUSY');
                        new Message({
                          message: "Create Service: " + err1.message
                        });
                      });
                  } else {
                    dojoTopic.publish('HIDE_BUSY');
                    new Message({
                      message: "You already have a feature service named " + featureServiceName + ". Please choose another name."
                    });                    
                  }
                }), function(err0) {
                  dojoTopic.publish('HIDE_BUSY');
                  new Message({
                    message: "Check Service: " + err0.message
                  });
                });
              }))
            }));
        })));
      }      
    });
});
