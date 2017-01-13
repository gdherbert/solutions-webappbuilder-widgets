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
//
///////////////////////////////////////////////////////////////////////////

define([
  'dojo/_base/declare',
  'dojo/_base/connect',
  'dojo/has',
  'dojo/on',
  'dojo/_base/lang',
  'dojo/topic',
  'esri/geometry/Point',
  'esri/geometry/Polyline',
  'esri/geometry/Polygon',
  'esri/geometry/geometryEngine',
  'esri/geometry/geodesicUtils',
  'esri/units',
  'esri/symbols/SimpleMarkerSymbol', 
  'esri/Color',
  'esri/graphic',
  'esri/geometry/webMercatorUtils',
  './Feedback',
  '../util'
], function (
  dojoDeclare,
  dojoConnect,
  dojoHas,
  dojoOn,
  dojoLang,
  dojoTopic,
  EsriPoint,
  EsriPolyLine,
  EsriPolygon,
  esriGeometryEngine,
  geodesicUtils,
  Units,
  SimpleMarkerSymbol, 
  Color,
  EsriGraphic,
  EsriWebMercatorUtils,
  drawFeedback,
  Utils
) {
    var clz = dojoDeclare([drawFeedback], {
        orientationAngle: null,
        majorAxisLength: [],
        minorAxisLength: [],
        
        /*
         * Class Constructor
         */
        constructor: function () {
            this._utils = new Utils();
            this.syncEvents();
            this._majGraphic = new EsriGraphic();
            this._majGraphicB = new EsriGraphic();
            this._minGraphic = new EsriGraphic();
            this._minGraphicB = new EsriGraphic();
         },

        /*

        */
        syncEvents: function () {
            dojoTopic.subscribe(
                'manual-ellipse-major-axis-input',
                dojoLang.hitch(this, this.onMajorAxisManualInputHandler)
            );

            dojoTopic.subscribe(
                'manual-ellipse-minor-axis-input',
                dojoLang.hitch(this, this.onMinorAxisManualInputHandler)
            );

            dojoTopic.subscribe(
                'manual-ellipse-orientation-angle-input',
                dojoLang.hitch(this, this.onOrientationAngleManualInputHandler)
            );

            dojoTopic.subscribe(
                'manual-ellipse-center-point-input',
                dojoLang.hitch(this, this.onCenterPointManualInputHandler)
            );
        },

        /*
        Handler for major axis manual input
        */
        onMajorAxisManualInputHandler: function (majorLength) {
            if(majorLength.isValid()){
                //Check if we have a center point
                if (this._points.length >= 1) {
                    var centerPoint = this._points[0];
                    if (centerPoint.spatialReference.wkid === 4326) {
                        centerPoint = EsriWebMercatorUtils.geographicToWebMercator(centerPoint);
                    }
                    //Convert to meters
                    var lengthInMeters = this._utils.convertToMeters(Number(majorLength), this.lengthUnit);
                    this.majorAxisLength = lengthInMeters;
                    //We do have a center point. Get the end point
                    var endPoint = this.getEndPoint(centerPoint, 0, lengthInMeters);
                    //Add major length point to array
                    this._points.splice(1, 0, endPoint);
                    while (this._points.length > 2)
                    {
                      this._points.pop();
                    }
                    //Clear major length graphic first
                    if (this._majGraphic) {
                        this.map.graphics.remove(this._majGraphic);
                    }
                    if (this._majGraphicB) {
                        this.map.graphics.remove(this._majGraphicB);
                    }
                    // create and add our major graphic
                    var majorLine = new EsriPolyLine({
                        paths: [[
                          [centerPoint.x, centerPoint.y],
                          [endPoint.x, endPoint.y]]
                        ],
                        spatialReference: this.map.spatialReference
                    });

                    this._majGraphic = new EsriGraphic(majorLine, this.lineSymbol);
                    this.map.graphics.add(this._majGraphic);
                    
                    
                    this._majGraphicB = new EsriGraphic(majorLine, this.lineSymbol);
                    this._majGraphicB.geometry = esriGeometryEngine.rotate(majorLine,180,centerPoint);
                    this.map.graphics.add(this._majGraphicB);
                    
                    
                }
              }
        },

        /*
        Handler for minor axis manual input
        */
        onMinorAxisManualInputHandler: function (minorLength) {
            if(minorLength.isValid()){
            //Check if we have a center point and max point
                if (this._points.length >= 2) {
                    var centerPoint = this._points[0];
                    if (centerPoint.spatialReference.wkid === 4326) {
                        centerPoint = EsriWebMercatorUtils.geographicToWebMercator(centerPoint);
                    }
                    //Convert to meters
                    var lengthInMeters = this._utils.convertToMeters(Number(minorLength), this.lengthUnit);
                    this.minorAxisLength = lengthInMeters;
                    //We do have a center point. Get the end point
                    var endPoint = this.getEndPoint(centerPoint, 90, lengthInMeters);
                    //Add major length point to array
                    this._points.splice(2, 0, endPoint);
                    while (this._points.length > 3)
                    {
                      this._points.pop();
                    }
                    //Clear major length graphic first
                    if (this._minGraphic) {
                        this.map.graphics.remove(this._minGraphic);
                    }
                    if (this._minGraphicB) {
                        this.map.graphics.remove(this._minGraphicB);
                    }
                    // create and add our minor graphic
                    var minorLine = new EsriPolyLine({
                        paths: [[
                          [centerPoint.x, centerPoint.y],
                          [endPoint.x, endPoint.y]]
                        ],
                        spatialReference: this.map.spatialReference
                    });

                    this._minGraphic = new EsriGraphic(minorLine, this.lineSymbol);
                    this.map.graphics.add(this._minGraphic);
                    
                    this._minGraphicB = new EsriGraphic(minorLine, this.lineSymbol);
                    this._minGraphicB.geometry = esriGeometryEngine.rotate(minorLine,180,centerPoint);
                    this.map.graphics.add(this._minGraphicB);
                }
            }
        },

        /*
        Handler for orientation angle manual input
        */
        onOrientationAngleManualInputHandler: function (orientationAngle) {
            this.orientationAngle = Number(orientationAngle);
            //Check if we have a center, major and minor points
            if (this._points.length >= 3) {
                this._onDoubleClickHandler();
            }
        },

        /*
        Handler for the manual input of a center point
        */
        onCenterPointManualInputHandler: function (centerPoint) {
            this._points = [];
            this._points.push(centerPoint.offset(0, 0));
            this.set('startPoint', this._points[0]);
            this.map.centerAt(centerPoint);
        },

        /*
        Retrieves the end point of a line given a start point and length
        */
        getEndPoint: function (startPoint, angle, distance) {
            var rotation = angle ? angle : 0;
            var result = {};
            result.x = Math.round(Math.cos(rotation * Math.PI / 180) * distance + startPoint.x);
            result.y = Math.round(Math.sin(rotation * Math.PI / 180) * distance + startPoint.y);
            return new EsriPoint({
                x: result.x,
                y: result.y,
                spatialReference: {
                    wkid: startPoint.spatialReference.wkid
                }
            });
        },

        /*
         *
         */
        _onClickHandler: function (evt) {
            var snapPoint;
            if (this.map.snappingManager) {
                snapPoint = this.map.snappingManager._snappingPoint;
            }

            var start = snapPoint || evt.mapPoint;
            this._points.push(start.offset(0, 0));
            
            switch(this._points.length)
            {
                case 1:
                    this.set('startPoint', this._points[0]);
                    // create and add our major / minor graphics
                    var maxLine = new EsriPolyLine({
                        paths: [[
                          [start.x, start.y],
                          [start.x, start.y]]
                        ], spatialReference: this.map.spatialReference
                    });
                    
                    var minLine = new EsriPolyLine({
                        paths: [[
                          [start.x, start.y],
                          [start.x, start.y]]
                        ], spatialReference: this.map.spatialReference
                    });
                    
                                        
                    this._majGraphic = new EsriGraphic(maxLine, this.lineSymbol);
                    this._majGraphicB = new EsriGraphic(maxLine, this.lineSymbol);
                    this._minGraphic = new EsriGraphic(minLine, this.lineSymbol);
                    this._minGraphicB = new EsriGraphic(minLine, this.lineSymbol);
                    this.map.graphics.add(this._majGraphic);
                    this.map.graphics.add(this._majGraphicB);
                    this.map.graphics.add(this._minGraphic);
                    this.map.graphics.add(this._minGraphicB);
                    
                    // connect the mouse move event
                    this._onMouseMoveHandlerConnect = dojoConnect.connect(
                        this.map,
                        'onMouseMove',
                        this._onMouseMoveHandler
                    );
                    
                    // connect a double click event to handle user double clicking
                    this._onDoubleClickHandler_connect = dojoConnect.connect(this.map, 'onDblClick', dojoLang.hitch(this, this._onDoubleClickHandler));
                                        
                    var tooltip = this._tooltip;
                    if (tooltip) {
                        tooltip.innerHTML = 'Click length of major axis';
                    }
                    break;
                    
                case 2:
                    var tooltip = this._tooltip;
                    if (tooltip) {
                        tooltip.innerHTML = 'Move mouse back to start position to set minor axis & finish drawing ellipse';
                    }
                    break;
                    
                case 3:
                    this._onDoubleClickHandler();
                    break;              
            }            
        },

        /*
         *
         */
        _onMouseMoveHandler: function (evt) {            

            var snapPoint;
            if (this.map.snappingManager) {
                snapPoint = this.map.snappingManager._snappingPoint;
            }

            var end = snapPoint || evt.mapPoint;
            
            if (this._points.length === 1) {
                this._majGraphic.geometry.setPoint(0, 1, end);
                
                this._majGraphicB.geometry = esriGeometryEngine.rotate(this._majGraphic.geometry,180,this._points[0]);
                
                
                this._majGraphic.setGeometry(this._majGraphic.geometry).setSymbol(this.lineSymbol);
                this._majGraphicB.setGeometry(this._majGraphicB.geometry).setSymbol(this.lineSymbol);
                
                this.majorAxisLength = esriGeometryEngine.geodesicLength(this._majGraphic.geometry, 9001);          
                var majorUnitLength = this._utils.convertMetersToUnits(this.majorAxisLength, this.lengthUnit);
                dojoTopic.publish('DD_ELLIPSE_MAJOR_LENGTH_CHANGE', majorUnitLength);
                
                var angleDegrees = this.getAngle(
                    EsriWebMercatorUtils.webMercatorToGeographic(this._points[0]),
                    EsriWebMercatorUtils.webMercatorToGeographic(end)
                  );
                
                if(this.angleUnit == 'mils'){
                  angleDegrees *= 17.777777778; 
                }
                
                dojoTopic.publish('DD_ELLIPSE_ANGLE_CHANGE', angleDegrees);

            } else {
                if (this._minGraphic !== null){
                  var prevgeom = dojoLang.clone(this._minGraphic.geometry);
                  
                  var nearest = esriGeometryEngine.nearestCoordinate(this._majGraphic.geometry, end)
                  var nearestGraphic =  new EsriPoint(nearest.coordinate.x, nearest.coordinate.y,102100);
                  
                  this._minGraphic.geometry.setPoint(0, 1, nearestGraphic);
                  this._minGraphicB.geometry.setPoint(0, 1, nearestGraphic);
                  
                  this._minGraphic.geometry = esriGeometryEngine.rotate(this._minGraphic.geometry,-90,this._points[0]);
                  this._minGraphicB.geometry = esriGeometryEngine.rotate(this._minGraphicB.geometry,90,this._points[0]);
                  
                  this._minGraphic.setGeometry(this._minGraphic.geometry).setSymbol(this.lineSymbol);
                  this._minGraphicB.setGeometry(this._minGraphicB.geometry).setSymbol(this.lineSymbol);
                  
                  var minGraphicGeo = EsriWebMercatorUtils.webMercatorToGeographic(this._minGraphic.geometry);
                  this.minorAxisLength = geodesicUtils.geodesicLengths([minGraphicGeo], Units.METERS);
                  
                  var minorUnitLength = this._utils.convertMetersToUnits(this.minorAxisLength[0], this.lengthUnit);
                  
                  if (this.minorAxisLength[0] > this.majorAxisLength || this.minorAxisLength[0] == 0) {
                    this._minGraphic.setGeometry(prevgeom);
                    return; 
                  }                  
                  
                  dojoTopic.publish('DD_ELLIPSE_MINOR_LENGTH_CHANGE', minorUnitLength);
                  
                }                
            }
        },

        /*
        Gets length of line based on two points
        */
        getLineLength: function (x, y, x0, y0) {
            return Math.sqrt((x -= x0) * x + (y -= y0) * y);
        },

        /*
        Gets angle based on two points
        */
        getAngle: function (pointA, pointB) {
            var deltaX = pointB.y - pointA.y;
            var deltaY = pointB.x - pointA.x;
            var azi = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
            return ((azi + 360) % 360);
        },

        /*
        Convert normal angle to esri angle so geometryEngine
        can rotate accordingly
        */
        convertAngle: function (angle) {
            if ((0 <= angle && angle < 90) || (180 <= angle && angle < 270)) {
                return 90 - angle;
            }
            if ((90 <= angle && angle < 180) || (270 <= angle && angle < 360)) {
                return (180 - angle) + 270;
            }
            return angle;
        },

        /*
         *
         */
        _onDoubleClickHandler: function (evt) {
            
            if (this._points.length >= 3)  {
              
              var elipseGeom = new EsriPolygon(this.map.spatialReference);
 
              var centerScreen = this.map.toScreen(this._majGraphic.geometry.getPoint(0,0));
              var majorScreen = this.map.toScreen(this._majGraphic.geometry.getPoint(0,1));
              var minorScreen = this.map.toScreen(this._minGraphic.geometry.getPoint(0,1));

              var majorRadius = this.getLineLength(centerScreen.x, centerScreen.y, majorScreen.x, majorScreen.y);
              var minorRadius = this.getLineLength(centerScreen.x, centerScreen.y, minorScreen.x, minorScreen.y);

              

              var ellipseParams = {
                  center: centerScreen,
                  longAxis: majorRadius,
                  shortAxis: minorRadius,
                  numberOfPoints: 60,
                  map: this.map
              };

              var ellipse = EsriPolygon.createEllipse(ellipseParams);
              
              this.orientationAngle = this.angle;
              
              if(this.angleUnit == 'mils'){
                  this.orientationAngle = this.orientationAngle / 17.777777778; 
                }
              
              elipseGeom.geometry = esriGeometryEngine.rotate(ellipse,this.convertAngle(this.orientationAngle),this._majGraphic.geometry.getPoint(0,0));

              elipseGeom = dojoLang.mixin(elipseGeom, {
                  majorAxisLength: this._utils.convertMetersToUnits(this.majorAxisLength, this.lengthUnit),
                  minorAxisLength: this._utils.convertMetersToUnits(this.minorAxisLength, this.lengthUnit),
                  angle: this.angle,
                  drawType: 'ellipse',
                  center: this._points[0]
              });
            }
            
            this.disconnectOnMouseMoveHandler();
            this._setTooltipMessage(0);
            this._drawEnd(elipseGeom);
            this.cleanup();
            
            this.orientationAngle = null;
        },
        
        /*
         *
         */
        cleanup: function () {
          this.map.graphics.clear();
          //this.map.graphics.remove(this._minGraphic);
          this._majGraphic = null;
          this._minGraphic = null;
          majorAxisLength = [];
          minorAxisLength = [];
        },
        
        /**
         *
         **/
        disconnectOnMouseMoveHandler: function () {
          dojoConnect.disconnect(this._onMouseMoveHandlerConnect);
        }
    });
    clz.DD_ELLIPSE_MAJOR_LENGTH_CHANGE = 'DD_ELLIPSE_MAJOR_LENGTH_CHANGE';
    clz.DD_ELLIPSE_MINOR_LENGTH_CHANGE = 'DD_ELLIPSE_MINOR_LENGTH_CHANGE';
    clz.DD_ELLIPSE_ANGLE_CHANGE = 'DD_ELLIPSE_ANGLE_CHANGE';
    return clz;
});
