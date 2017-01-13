define(['dojo/dom',
    'dojo/on',
    'dojo/_base/declare',
    'dijit/_WidgetsInTemplateMixin',     
    'dojo/_base/lang',
    'dojo/dom-class',    
    'jimu/BaseWidget', 
    'dijit/form/HorizontalSlider', 
    'dijit/form/HorizontalRule', 
    'dijit/form/HorizontalRuleLabels',
    'dijit/form/VerticalSlider',
    'dijit/form/VerticalRule',
    'dijit/form/VerticalRuleLabels',
    './jquery.knob.min',
    'esri/map',
    'esri/layers/GraphicsLayer',
    'esri/tasks/Geoprocessor',
    'esri/tasks/FeatureSet',
    'esri/tasks/LinearUnit',
    'esri/graphicsUtils',
    'esri/symbols/SimpleFillSymbol',
    'esri/symbols/SimpleLineSymbol',
    'esri/symbols/SimpleMarkerSymbol',
    'esri/config',
    'esri/Color',
    'esri/symbols/jsonUtils',
	  './RangeSlider/nouislider.min',
    'jimu/dijit/DrawBox'
	
	],

function(dom, on, declare, _WidgetsInTemplateMixin, lang, dojoDomClass, BaseWidget, HorizontalSlider, HorizontalRule, HorizontalRuleLabels, VerticalSlider, VerticalRule, VerticalRuleLabels, knob, Map, GraphicsLayer, Geoprocessor, FeatureSet, LinearUnit, graphicsUtils,SimpleFillSymbol, SimpleLineSymbol, SimpleMarkerSymbol, esriConfig, Color, jsonUtils, noUiSlider){
	return declare([BaseWidget, _WidgetsInTemplateMixin], {    
		FOV: 180,
		LA: 180,
					
		startup: function(){
		  updateValues = lang.hitch(this,function(a,b) {this.LA = a;this.FOV = b});
		  $("input.fov").knob({
			  'min':0,
			  'max':360,
			  'cursor':90,
			  'inputColor': '#ccc',
			  'width': 170,
			  'height': 170,
			  'draw': function(){updateValues(this.v,this.o.cursor)}
		  });
		  
    var viewshedServiceURL = this.config.viewshedService.url ? 
      this.config.viewshedService.url : 
      "https://airc2.esri.com/ags/rest/services/AirC2/Viewshed/GPServer/Viewshed"
		gp = new Geoprocessor(viewshedServiceURL);
		gp.setOutputSpatialReference({wkid: 102100});
		
		var distanceSlider = dom.byId('distanceSlider');

    noUiSlider.create(distanceSlider, {
      start: [3, 5],
      behaviour: 'drag',
      step: 0.5,
      connect: true,
      range: {
        'min': 0,
        'max': 10
      },
      pips: {
      mode: 'count',
      values: 3,
      density: 10
      }
    });
   
    var obsHeightSlider = dom.byId('obsHeightSlider');
    
    noUiSlider.create(obsHeightSlider, {
      start: 2,
      step: 1,
      orientation: 'vertical',
      direction: 'rtl', //put 0 to bottom
      range: {
        'min': 0,
        'max': 20
      },
      pips: {
      mode: 'count',
      values: 5,
      density: 5
      }
    });

    },
    
    postCreate: function () {            
      //Bind the click events for execute and clear buttons
      this.own(on(this.btnClear, "click", lang.hitch(this, this.onClearBtnClicked)));
      this._initGL();
      on(this.drawBox, "icon-selected", lang.hitch(this, function(){
          this.drawBox.clear();
        }));
      this.own(on(this.drawBox, 'DrawEnd', lang.hitch(this, function (graphic) {
          graphic.name = "remove_me";
          this.viewshed(graphic);
        })));
      this.drawBox.setMap(this.map);
      var symbol = new SimpleMarkerSymbol({
        "color": [255,0,0,64],
        "size": 12,
        "type": "esriSMS",
        "style": "esriSMSCircle",
        "outline": {
          "color": [0,0,0,255],
          "width": 1,
          "type": "esriSLS",
          "style": "esriSLSSolid"
        }
      });
      this.drawBox.setPointSymbol(symbol);            
    },
    
    _initGL: function () {        
        this.graphicsLayer = new GraphicsLayer(),
		this.graphicsLayer.name = "Viewshed Layer";
        this.map.addLayer(this.graphicsLayer);
      },
    
    viewshed: function (graphic) { 
      this.map.setMapCursor("wait");
        var Azimuth1 = parseInt(this.LA - (this.FOV / 2));
        if(Azimuth1 < 0)
        {
            Azimuth1 = Azimuth1 + 360;
        }
        var Azimuth2 = parseInt(this.LA + (this.FOV / 2));
        if(Azimuth2 > 360)
        {
            Azimuth2 = Azimuth2 - 360;
        }
        if(this.FOV == 360)
        {
            Azimuth1 = 0;
            Azimuth2 = 360;
        }
        var features = [];
        features.push(graphic);
        var featureSet = new FeatureSet();
        featureSet.features = features;

        var vsDistance = new LinearUnit();
        vsDistance.distance = 5;
        vsDistance.units = "esriMiles";
        var params = {
              "Observer": featureSet,
              "Radius1": parseInt((dom.byId("distanceSlider").noUiSlider.get()[0])*1000),
              "Radius2": parseInt((dom.byId("distanceSlider").noUiSlider.get()[1])*1000),
              "Azimuth1": Azimuth1,
              "Azimuth2": Azimuth2,
              "OffsetA": parseInt(dom.byId("obsHeightSlider").noUiSlider.get())
            };
        gp.execute(params, lang.hitch(this,this.drawViewshed));      
    },
    
    drawViewshed: function (results, messages) {          
		  var visibleArea = new SimpleFillSymbol();
          visibleArea.setOutline(new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0, 0, 0, 0]), 1));
          visibleArea.setColor(new Color([0, 255, 0, 0.5]));
		  var notVisibleArea = new SimpleFillSymbol();
          notVisibleArea.setOutline(new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0, 0, 0, 0]), 1));
          notVisibleArea.setColor(new Color([255, 0, 0, 0.5]));
		  var viewshed = results[0].value.features;
		  for (var w = 0, wl = viewshed.length; w < wl; w++) {
            var feature = viewshed[w];
			if(feature.attributes.gridcode != 0)
			{
				feature.setSymbol(visibleArea);
				this.graphicsLayer.add(feature);
			}
			else
			{
				feature.setSymbol(notVisibleArea);
				this.graphicsLayer.add(feature);
			}            
          }		  
		  var fullWedge = new SimpleFillSymbol();
          fullWedge.setOutline(new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASH, new Color([0, 0, 0, 1]), 1));
          fullWedge.setColor(new Color([0, 0, 0, 0]));
          var fullWedgeGraphics = results[2].value.features;
		  for (var w = 0, wl = fullWedgeGraphics.length; w < wl; w++) {
            var feature = fullWedgeGraphics[w];
            feature.setSymbol(fullWedge);
            this.graphicsLayer.add(feature);
          }
		  var wedge = new SimpleFillSymbol();
          wedge.setOutline(new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 0, 0, 1]), 1));
          wedge.setColor(new Color([0, 0, 0, 0]));
          var wedgeGraphics = results[1].value.features;
		  for (var w = 0, wl = wedgeGraphics.length; w < wl; w++) {
            var feature = wedgeGraphics[w];
            feature.setSymbol(wedge);
            this.graphicsLayer.add(feature);
          }
		  
          this.map.setExtent(graphicsUtils.graphicsExtent(this.graphicsLayer.graphics), true);
		  this.map.setMapCursor("default");
        },        
    onClearBtnClicked: function () {
    this.graphicsLayer.clear();     
    }    
  });
});