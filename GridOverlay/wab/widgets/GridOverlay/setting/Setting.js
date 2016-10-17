/**
 *  @fileOverview The GridOverlay Settings widget
 *  @author Esri
 *
 *  @todo Add and cleanup the code comments (including JSDoc comments)
 *  @todo Revisit all getters/setters for latest GridOverlay logic
 */

///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 Esri. All Rights Reserved.
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

define([
  'dojo/_base/declare',
  'jimu/BaseWidgetSetting',
  'dojo/_base/lang',
  'dojo/_base/array',
  'dijit/_WidgetsInTemplateMixin',
  'dojo/_base/Color',
  'dojo/dom-geometry',
  '../lib/GridOverlay',
  'esri/map',
  'dijit/form/HorizontalSlider',
  'dijit/ColorPalette',
  'dijit/form/NumberSpinner',
  'jimu/dijit/ColorPicker'
],
function(
  declare,
  BaseWidgetSetting,
  lang,
  array,
  _WidgetsInTemplateMixin,
  Color,
  domGeometry,
  GridOverlay,
  Map
) {

  var setColorText = function(domNode, color) {
    if (!(color instanceof Color)) {
      color = new Color(color);
    }
    var text = color.toHex();
    var textColor = (0.2126*color.r + 0.7152*color.g + 0.0722*color.b) > 128 ? new Color([0,0,0]) : new Color([255,255,255]);
    var height = domGeometry.position(domNode).h + 'px';
    var style = 'color:' + textColor + ';';
    var domNodeClass = 'grid-overlay-setting-color-picker-text';
    domNode.innerHTML = "<div class='" + domNodeClass + "' style='" + style + "'>" + text +"</div>";
  };


  return declare([BaseWidgetSetting, _WidgetsInTemplateMixin], {
    baseClass: 'grid-overlay-setting',

    postCreate: function(){
      //the config object is passed in
      this.setConfig(this.config);

      var map = new Map(this.sampleMap,{
        basemap: 'satellite',
        center: [-96.01118799999999,41.32155100080983],
        zoom: 9
      });
      window.gridOverlaySettings = this; // delete this line... it is for debugging only
      var grid = new GridOverlay(lang.mixin({map:map, enabled: true}, this.config));
      this.sampleGrid = grid;
      this.minIntervalSpacing.onChange = lang.hitch(this, function(val) {
        var width = val +'px';
        this.minIntervalSpacingVal.innerHTML = width;
        this.minIntervalDisplay.style.width = width;
        grid.setMinIntervalSpacing(val);
      });
      this.lineOpacity.onChange = lang.hitch(this, function(val) {this.lineOpacityVal.innerHTML = Math.round(val*100) +'%'; grid.setLineOpacity(val);});
      this.labelOpacity.onChange = lang.hitch(this, function(val) {this.labelOpacityVal.innerHTML = Math.round(val*100) +'%'; grid.setLabelOpacity(val);});
      this.centerLabelOpacity.onChange = lang.hitch(this, function(val) {this.centerLabelOpacityVal.innerHTML = Math.round(val*100) +'%'; grid.setCenterLabelOpacity(val);});
      this.colorPicker0.onChange = function(val) {setColorText(this.domNode, val); grid.setColor(0, val.toHex());};
      this.colorPicker1.onChange = function(val) {setColorText(this.domNode, val); grid.setColor(1, val.toHex());};
      this.colorPicker2.onChange = function(val) {setColorText(this.domNode, val); grid.setColor(2, val.toHex());};
      this.colorPicker3.onChange = function(val) {setColorText(this.domNode, val); grid.setColor(3, val.toHex());};
      this.colorPicker4.onChange = function(val) {setColorText(this.domNode, val); grid.setColor(4, val.toHex());};
      this.colorPicker5.onChange = function(val) {setColorText(this.domNode, val); grid.setColor(5, val.toHex());};
      this.fontSize0.onChange = function(val) {grid.setFontSize(0, val);};
      this.fontSize1.onChange = function(val) {grid.setFontSize(1, val);};
      this.fontSize2.onChange = function(val) {grid.setFontSize(2, val);};
      this.fontSize3.onChange = function(val) {grid.setFontSize(3, val);};
      this.fontSize4.onChange = function(val) {grid.setFontSize(4, val);};
      this.fontSize5.onChange = function(val) {grid.setFontSize(5, val);};
      this.lineSize0.onChange = function(val) {grid.setLineWidth(0, val);};
      this.lineSize1.onChange = function(val) {grid.setLineWidth(1, val);};
      this.lineSize2.onChange = function(val) {grid.setLineWidth(2, val);};
      this.lineSize3.onChange = function(val) {grid.setLineWidth(3, val);};
      this.lineSize4.onChange = function(val) {grid.setLineWidth(4, val);};
      this.lineSize5.onChange = function(val) {grid.setLineWidth(5, val);};
      this.topLeft.onchange = function() {grid.setLabelPlacement('upper-left', this.checked);};
      this.topRight.onchange = function() {grid.setLabelPlacement('upper-right', this.checked);};
      this.btmLeft.onchange = function() {grid.setLabelPlacement('lower-left', this.checked);};
      this.btmRight.onchange = function() {grid.setLabelPlacement('lower-right', this.checked);};
      this.center.onchange = function() {grid.setLabelPlacement('center', this.checked);};
      this.verticalLabels.onchange = function() { grid.setVerticalLabels(this.checked);};
      this.horizontalLabels.onchange = function() { grid.setVerticalLabels(!this.checked);};
    },

    setConfig: function(config){
      this.minIntervalSpacing.set('value', this.config.minIntervalSpacing);
      this.minIntervalSpacingVal.innerHTML = this.config.minIntervalSpacing +'px';
      this.minIntervalDisplay.style.width = this.config.minIntervalSpacing +'px';
      this.lineOpacity.set('value', this.config.lineOpacity);
      this.lineOpacityVal.innerHTML = Math.round(this.config.lineOpacity*100) +'%';
      this.labelOpacity.set('value', this.config.labelOpacity);
      this.labelOpacityVal.innerHTML = Math.round(this.config.labelOpacity*100) +'%';
      this.centerLabelOpacity.set('value', this.config.centerLabelOpacity);
      this.centerLabelOpacityVal.innerHTML = Math.round(this.config.centerLabelOpacity*100) +'%';
      for (var i=0; i< 6; i++) {
        this['colorPicker'+i].setColor(new Color(this.config.colors[i]));
        this['colorPicker'+i].picker.setColor(this.config.colors[i]);
        setColorText(this['colorPicker'+i].domNode, this.config.colors[i]);
      }
      this.fontSize0.setValue(this.config.fontSizes[0]);
      this.fontSize1.setValue(this.config.fontSizes[1]);
      this.fontSize2.setValue(this.config.fontSizes[2]);
      this.fontSize3.setValue(this.config.fontSizes[3]);
      this.fontSize4.setValue(this.config.fontSizes[4]);
      this.fontSize5.setValue(this.config.fontSizes[5]);
      this.lineSize0.setValue(this.config.lineWidths[0]);
      this.lineSize1.setValue(this.config.lineWidths[1]);
      this.lineSize2.setValue(this.config.lineWidths[2]);
      this.lineSize3.setValue(this.config.lineWidths[3]);
      this.lineSize4.setValue(this.config.lineWidths[4]);
      this.lineSize5.setValue(this.config.lineWidths[5]);
      var corners = this.config.labelPlacement;
      this.topLeft.checked = corners.upperLeft;
      this.topRight.checked = corners.upperRight;
      this.btmLeft.checked = corners.lowerLeft;
      this.btmRight.checked = corners.lowerRight;
      this.center.checked = corners.center;
      this.verticalLabels.checked = this.config.verticalLabels;
      this.horizontalLabels.checked = !this.config.verticalLabels;
    },

    getConfig: function(){
      //WAB will get config object through this method
      this.config = this.sampleGrid.getSettings();
      return this.config;
    }
  });
});
