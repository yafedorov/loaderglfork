(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{TwbF:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return pe})),r.d(t,"renderToDOM",(function(){return he}));var n=r("rePB"),i=r("KQm4"),a=r("o0o1"),s=r.n(a),o=(r("wcNg"),r("HaE+")),l=r("JX7q"),u=r("dI71"),c=r("q1tI"),d=r.n(c),p=r("i8i4"),h=r("UP1k"),f=r("vOnD"),b=r("rta6"),y=r("yYqN"),v=r("08OO"),m=r("Wium"),g=r("V3d6"),S=r("BENj"),w=r("Ai+L"),O=r("G8qk"),T=r("NUiX"),_=r("AQfu"),j=r("xszv"),x=r("B6CW");function P(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function k(e,t){return C.apply(this,arguments)}function C(){return(C=Object(o.a)(s.a.mark((function e(t,r){var n,i,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.attributeName,a=r.attributeType,i){e.next=3;break}return e.abrupt("return",{});case 3:return e.abrupt("return",((n={})[i]=a?M(a,t):null,n));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t){switch(e){case x.f:return function(e){var t=[];try{for(var r,n=new DataView(e,0,4).getUint32(0,!0),i=new Uint32Array(e,8,n),a=8+4*n,s=P(i);!(r=s()).done;){var o=r.value,l=new TextDecoder("utf-8"),u=new Uint8Array(e,a,o);t.push(l.decode(u)),a+=o}}catch(c){console.error("Parse string attribute error: ",c.message)}return t}(t);case x.e:return I(t);case x.b:return function(e){return new Float64Array(e,8)}(t);case x.d:return function(e){return new Int16Array(e,4)}(t);default:return I(t)}}function I(e){return new Uint32Array(e,4)}var A=r("Ow3C");function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U="undefined"!=typeof __VERSION__?__VERSION__:"latest",D={name:"I3S Attribute",id:"i3s-attribute",module:"i3s",version:U,mimeTypes:["application/binary"],parse:function(e,t){return V.apply(this,arguments)},extensions:["bin"],options:{},binary:!0};function V(){return(V=Object(o.a)(s.a.mark((function e(t,r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=k(t,r),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e,t,r){return F.apply(this,arguments)}function F(){return(F=Object(o.a)(s.a.mark((function e(t,r,n){var i,a,o,l,u,c,d,p,h,f,b,y,v;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===n&&(n={}),i=N(t),a=i.attributeStorageInfo,o=i.attributeUrls,l=i.tilesetFields,a&&o&&!(r<0)){e.next=4;break}return e.abrupt("return",null);case 4:for(u=[],c=[],d=0;d<a.length;d++)h=Object(A.c)(o[d],null===(p=n.i3s)||void 0===p?void 0:p.token),f=a[d].name,b=z(a[d]),y=B(B({},n),{},{attributeName:f,attributeType:b}),v=Object(j.a)(h,D,y),c.push(v);return e.prev=7,e.next=10,Promise.allSettled(c);case 10:u=e.sent,e.next=15;break;case 13:e.prev=13,e.t0=e.catch(7);case 15:if(u.length){e.next=17;break}return e.abrupt("return",null);case 17:return e.abrupt("return",J(u,a,r,l));case 18:case"end":return e.stop()}}),e,null,[[7,13]])})))).apply(this,arguments)}function N(e){var t,r,n,i,a;return{attributeStorageInfo:null===(t=e.tileset)||void 0===t||null===(r=t.tileset)||void 0===r?void 0:r.attributeStorageInfo,attributeUrls:null===(n=e.header)||void 0===n?void 0:n.attributeUrls,tilesetFields:(null===(i=e.tileset)||void 0===i||null===(a=i.tileset)||void 0===a?void 0:a.fields)||[]}}function z(e){return e.hasOwnProperty("objectIds")?"Oid32":e.hasOwnProperty("attributeValues")?e.attributeValues.valueType:""}function J(e,t,r,n){var i=function(e){var t=e.find((function(e){return e.name.includes("OBJECTID")}));return null==t?void 0:t.name}(t),a=e.find((function(e){return e.value[i]}));if(!a)return null;var s=a.value[i].indexOf(r);return s<0?null:function(e,t,r,n){for(var i={},a=0;a<r.length;a++){var s=r[a].name,o=Z(s,n),l=H(e,a,s);i[s]=q(l,t,o)}return i}(e,s,t,n)}function Z(e,t){var r,n=t.find((function(t){return t.name===e||t.alias===e}));return(null==n||null===(r=n.domain)||void 0===r?void 0:r.codedValues)||[]}function H(e,t,r){var n=e[t];return"rejected"===n.status?null:n.value[r]}function q(e,t,r){var n="";if(e&&t in e&&(n=String(e[t]).replace(/\u0000|NaN/g,"").trim()),r.length){var i=r.find((function(e){return e.code===Number(n)}));n=(null==i?void 0:i.name)||""}return n}var G=r("J4mz"),R=r("6HD/"),Q=r("B3sY"),X=r("SeV4"),Y=r("IP2g"),K=r("wHSu"),$=r("u5z7"),ee=r("4Hn1"),te=r("UIIf"),re=r("x9r0"),ne=r("p4fj"),ie=r("dBUD");function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var oe={longitude:-120,latitude:34,height:600,width:800,pitch:45,maxPitch:90,bearing:0,minZoom:2,maxZoom:30,zoom:14.5},le=new v.a({id:"main",controller:{inertia:!0},farZMultiplier:2.02}),ue={rScaler:256,gScaler:1,bScaler:1/256,offset:-32768},ce=f.c.div.withConfig({displayName:"app__StatsWidgetWrapper",componentId:"sc-5dl3tw-0"})(["display:flex;@media (max-width:768px){display:none;}"]),de=f.c.div.withConfig({displayName:"app__StatsWidgetContainer",componentId:"sc-5dl3tw-1"})([""," "," "," color:rgba(255,255,255,.6);z-index:3;bottom:15px;word-break:break-word;padding:24px;border-radius:8px;line-height:135%;bottom:auto;width:277px;left:10px;max-height:calc(100% - 125px);overflow:auto;"],te.c,te.a,te.d),pe=function(e){function t(t){var r;return(r=e.call(this,t)||this)._tilesetStatsWidget=null,r._loadedTilesets=[],r.state={tileset:null,url:null,token:null,name:$.b,viewState:oe,selectedMapStyle:ee.h,selectedFeatureAttributes:null,selectedFeatureIndex:-1,selectedTilesetBasePath:null,isAttributesLoading:!1,showBuildingExplorer:!1,flattenedSublayers:[],sublayers:[],sublayersUpdateCounter:0,tilesetsStats:Object(ne.a)(),useTerrainLayer:!1,terrainTiles:{}},r.needTransitionToTileset=!0,r._onSelectTileset=r._onSelectTileset.bind(Object(l.a)(r)),r.handleClosePanel=r.handleClosePanel.bind(Object(l.a)(r)),r._onToggleBuildingExplorer=r._onToggleBuildingExplorer.bind(Object(l.a)(r)),r._updateSublayerVisibility=r._updateSublayerVisibility.bind(Object(l.a)(r)),r._toggleTerrain=r._toggleTerrain.bind(Object(l.a)(r)),r}Object(u.a)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e;this._memWidget=new G.a(b.a.get("Memory Usage"),{framesPerUpdate:1,formatters:{"GPU Memory":"memory","Buffer Memory":"memory","Renderbuffer Memory":"memory","Texture Memory":"memory"},container:this._statsWidgetContainer}),this._tilesetStatsWidget=new G.a(null,{container:this._statsWidgetContainer});var t=Object(X.a)();e=t?{url:t}:$.a[$.b],this.setState({tilesetsStats:Object(ne.a)(t)}),this._onSelectTileset(e)},r.getFlattenedSublayers=function(){var e=Object(o.a)(s.a.mark((function e(t){var r,n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(j.a)(t,T.a);case 3:return r=e.sent,n=Object(re.a)(r.header.sublayers),this.setState({sublayers:n.sublayers}),i=null==r?void 0:r.sublayers.filter((function(e){return"Overview"!==e.name})),e.abrupt("return",i);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",[{url:t,visibility:!0}]);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),r._onSelectTileset=function(){var e=Object(o.a)(s.a.mark((function e(t){var r,n,i,a,o,l,u,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(X.b)(t.url,t),n=r.tilesetUrl,i=r.token,a=r.name,o=r.metadataUrl,this.setState({tilesetUrl:n,name:a,token:i,sublayers:[]}),e.next=5,fetch(o).then((function(e){return e.json()}));case 5:return l=e.sent,e.next=8,this.getFlattenedSublayers(n);case 8:u=e.sent,this.setState({metadata:l,selectedFeatureAttributes:null,flattenedSublayers:u}),this._loadedTilesets=[],this.needTransitionToTileset=!0,c=Object(ne.a)(n),this._tilesetStatsWidget.setStats(c),this.setState({tilesetsStats:c,showBuildingExplorer:!1});case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),r._updateStatWidgets=function(){this._memWidget.update();var e=this.state.tilesetsStats;Object(ne.b)(this._loadedTilesets,e),this._tilesetStatsWidget.update()},r._onTilesetLoad=function(e){if(this._loadedTilesets=[].concat(Object(i.a)(this._loadedTilesets),[e]),this.needTransitionToTileset){var t=e.zoom,r=e.cartographicCenter,n=r[0],a=r[1],s=this.currentViewport,o=n,l=a;if(s){var u,c,d=this.state,p=d.metadata,h=d.viewState,f=h.pitch,b=h.bearing,y=((null==p||null===(u=p.layers)||void 0===u||null===(c=u[0])||void 0===c?void 0:c.fullExtent)||{}).zmin,v=(void 0===y?0:y)*Math.tan(f*Math.PI/180),g=s.projectPosition([n,a]);g[0]+=v*Math.sin(b*Math.PI/180)*s.distanceScales.unitsPerMeter[0],g[1]+=v*Math.cos(b*Math.PI/180)*s.distanceScales.unitsPerMeter[1];var S=s.unprojectPosition(g);o=S[0],l=S[1]}var w=se(se({},this.state.viewState),{},{zoom:t+2.5,longitude:o,latitude:l});this.setState({tileset:e,viewState:se(se({},w),{},{transitionDuration:4e3,transitionInterpolator:new m.a})}),this.needTransitionToTileset=!1}},r._onViewStateChange=function(e){var t=e.interactionState,r=e.viewState,n=r.longitude,i=r.latitude,a=r.position,s=(a[0],a[1],a[2]),o=this.state.terrainTiles,l=Object(ie.a)(n,i,o)||0,u=null;if(this.currentViewport){var c=this.currentViewport.unprojectPosition(this.currentViewport.cameraPosition);u=Object(ie.a)(c[0],c[1],o)||0}var d=null===u||l>u?l:u;t.isZooming||(s-d>5?d=s-5:d-s>5&&(d=s+5)),this.setState({viewState:se(se({},r),{},{position:[0,0,d]})})},r._onSelectMapStyle=function(e){var t=e.selectedMapStyle;this.setState({selectedMapStyle:t})},r._toggleTerrain=function(){var e=this.state.useTerrainLayer;this.setState({useTerrainLayer:!e})},r._onTerrainTileLoad=function(e){var t,r=this.state.terrainTiles,n=e.bbox,i=n.east,a=n.north,s=n.south,o=n.west;this.setState({terrainTiles:se(se({},r),{},(t={},t[i+";"+a+";"+s+";"+o]=e,t))})},r._renderTerrainLayer=function(){var e=this;return new w.a({id:"terrain",maxZoom:15,elevationDecoder:ue,elevationData:"https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png",texture:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",onTileLoad:function(t){return e._onTerrainTileLoad(t)},color:[255,255,255]})},r._isLayerPickable=function(){var e,t=this.state.tileset;switch(null==t||null===(e=t.tileset)||void 0===e?void 0:e.layerType){case"IntegratedMesh":return!1;default:return!0}},r._renderLayers=function(){var e=this,t=this.state,r=t.flattenedSublayers,n=t.token,i=t.selectedFeatureIndex,a=t.selectedTilesetBasePath,s=t.useTerrainLayer,o={i3s:{coordinateSystem:g.a.LNGLAT_OFFSETS}};n&&(o.i3s=se(se({},o.i3s),{},{token:n}));var l=r.filter((function(e){return e.visibility})).map((function(t){return new O.a({id:"tile-layer-"+t.id,data:t.url,loader:_.a,onTilesetLoad:e._onTilesetLoad.bind(e),onTileLoad:function(){return e._updateStatWidgets()},onTileUnload:function(){return e._updateStatWidgets()},pickable:e._isLayerPickable(),loadOptions:o,highlightedObjectIndex:t.url===a?i:-1})}));if(s){var u=this._renderTerrainLayer();l.push(u)}return l},r.handleClick=function(){var e=Object(o.a)(s.a.mark((function e(t){var r,n,i,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.object&&!(t.index<0)&&t.layer){e.next=3;break}return this.handleClosePanel(),e.abrupt("return");case 3:return r=this.state.token,n={},r&&(n.i3s={token:r}),this.setState({isAttributesLoading:!0}),e.next=9,W(t.object,t.index,n);case 9:i=e.sent,this.setState({isAttributesLoading:!1}),a=t.object.tileset.basePath,this.setState({selectedFeatureAttributes:i,selectedFeatureIndex:t.index,selectedTilesetBasePath:a});case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),r._renderStats=function(){var e=this,t=this.state,r=t.showBuildingExplorer,n=t.sublayers,i={display:"flex",top:"150px"};return r&&(i.display="none"),n.length&&(i.top="200px"),d.a.createElement(de,{style:i,ref:function(t){return e._statsWidgetContainer=t}})},r._updateSublayerVisibility=function(e){if("3DObject"===e.layerType){var t=this.state,r=t.flattenedSublayers,n=t.sublayersUpdateCounter,i=r.find((function(t){return t.id===e.id}));i&&(i.visibility=e.visibility,this.setState({sublayersUpdateCounter:n+1}),e.visibility||(this._loadedTilesets=this._loadedTilesets.filter((function(e){return e.basePath!==i.url}))))}},r._renderControlPanel=function(){var e=this.state,t=e.name,r=e.selectedMapStyle,n=e.sublayers,i=e.showBuildingExplorer,a=e.useTerrainLayer;return d.a.createElement(R.a,{name:t,onExampleChange:this._onSelectTileset,onMapStyleChange:this._onSelectMapStyle.bind(this),onToggleBuildingExplorer:this._onToggleBuildingExplorer,onUpdateSublayerVisibility:this._updateSublayerVisibility,selectedMapStyle:r,sublayers:n,isBuildingExplorerShown:i,useTerrainLayer:a,toggleTerrain:this._toggleTerrain})},r.getTooltip=function(){if(this.state.isAttributesLoading){var e=document.createElement("div");return Object(p.render)(d.a.createElement(Y.a,{icon:K.i}),e),{html:e.innerHTML}}return null},r.handleClosePanel=function(){this.setState({selectedFeatureAttributes:null,selectedFeatureIndex:-1})},r.renderAttributesPanel=function(){var e=this.state.selectedFeatureAttributes,t=e.NAME||e.OBJECTID;return d.a.createElement(Q.a,{title:t,handleClosePanel:this.handleClosePanel,attributesObject:e,isControlPanelShown:!0})},r._renderMemory=function(){var e=this.state.showBuildingExplorer;return d.a.createElement(ce,{showMemory:!e},this._renderStats())},r._onToggleBuildingExplorer=function(e){this.setState({showBuildingExplorer:e})},r.render=function(){var e=this,t=this._renderLayers(),r=this.state,n=r.viewState,i=r.selectedMapStyle,a=r.selectedFeatureAttributes,s=r.useTerrainLayer;return d.a.createElement("div",{style:{position:"relative",height:"100%"}},this._renderControlPanel(),a&&this.renderAttributesPanel(),this._renderMemory(),d.a.createElement(y.a,{layers:t,viewState:n,views:[le],onViewStateChange:this._onViewStateChange.bind(this),controller:{type:S.a,maxPitch:60,inertia:!0,scrollZoom:{speed:.01,smooth:!0}},onAfterRender:function(){return e._updateStatWidgets()},getTooltip:function(t){return e.getTooltip(t)},onClick:function(t){return e.handleClick(t)}},(function(t){var r=t.viewport;e.currentViewport=r}),!s&&d.a.createElement(h.a,{mapStyle:i,preventStyleDiffing:!0})))},t}(c.PureComponent);function he(e){Object(p.render)(d.a.createElement(pe,null),e)}}}]);