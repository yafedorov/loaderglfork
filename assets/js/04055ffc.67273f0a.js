"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9665],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var n=i(67294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(i),c=l,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||a;return i?n.createElement(h,r(r({ref:t},p),{},{components:i})):n.createElement(h,r({ref:t},p))}));function h(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=i.length,r=new Array(a);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:l,r[1]=o;for(var d=2;d<a;d++)r[d]=i[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},24433:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=i(87462),l=(i(67294),i(3905));const a={},r="Tileset3D",o={unversionedId:"modules/tiles/api-reference/tileset-3d",id:"modules/tiles/api-reference/tileset-3d",title:"Tileset3D",description:"The Tileset3D class is being generalized to handle more use cases. Since this may require modifying some APIs, this class should be considered experiemental.",source:"@site/../docs/modules/tiles/api-reference/tileset-3d.md",sourceDirName:"modules/tiles/api-reference",slug:"/modules/tiles/api-reference/tileset-3d",permalink:"/docs/modules/tiles/api-reference/tileset-3d",draft:!1,editUrl:"https://github.com/uber-web/loaders.gl/tree/master/website/../docs/modules/tiles/api-reference/tileset-3d.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/modules/tiles/"},next:{title:"Tile3D",permalink:"/docs/modules/tiles/api-reference/tile-3d"}},s={},d=[{value:"Usage",id:"usage",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>boundingVolume</code> (BoundingVolume)",id:"boundingvolume-boundingvolume",level:6},{value:"<code>cartesianCenter</code> (Number3)",id:"cartesiancenter-number3",level:6},{value:"<code>cartographicCenter</code> (Number3)",id:"cartographiccenter-number3",level:6},{value:"<code>ellipsoid</code> (<code>Ellipsoid</code>)",id:"ellipsoid-ellipsoid",level:6},{value:"<code>modelMatrix</code> (Matrix4)",id:"modelmatrix-matrix4",level:5},{value:"<code>root</code> (Tile3D)",id:"root-tile3d",level:6},{value:"<code>tiles</code> (Tile3D[])",id:"tiles-tile3d",level:6},{value:"<code>stats</code> (<code>Stats</code>)",id:"stats-stats",level:6},{value:"<code>tileset</code> (Object)",id:"tileset-object",level:6},{value:"<code>tilesLoaded</code> (Boolean)",id:"tilesloaded-boolean",level:6},{value:"<code>gpuMemoryUsageInBytes</code> (Number)",id:"gpumemoryusageinbytes-number",level:6},{value:"<code>url</code> (String)",id:"url-string",level:6},{value:"<code>zoom</code> (Number3)",id:"zoom-number3",level:6},{value:"<code>tilesLoaded</code> : boolean",id:"tilesloaded--boolean",level:5},{value:"Cesium 3D Tiles properties",id:"cesium-3d-tiles-properties",level:3},{value:"asset : Object",id:"asset--object",level:3},{value:"properties : Object",id:"properties--object",level:3},{value:"maximumScreenSpaceError : Number",id:"maximumscreenspaceerror--number",level:3},{value:"maximumMemoryUsage : Number",id:"maximummemoryusage--number",level:3},{value:"root : Tile3D",id:"root--tile3d",level:3},{value:"boundingSphere : BoundingSphere",id:"boundingsphere--boundingsphere",level:3},{value:"modelMatrix : Matrix4",id:"modelmatrix--matrix4",level:3},{value:"maximumMemoryUsage : Number",id:"maximummemoryusage--number-1",level:3},{value:"gpuMemoryUsageInBytes : Number",id:"gpumemoryusageinbytes--number",level:3},{value:"stats : Stats",id:"stats--stats",level:3},{value:"ellipsoid : Ellipsoid",id:"ellipsoid--ellipsoid",level:3},{value:"unloadTileset",id:"unloadtileset",level:3},{value:"isDestroyed() : Boolean",id:"isdestroyed--boolean",level:3},{value:"destroy()",id:"destroy",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>setOptions</code>",id:"setoptions",level:5},{value:"<code>update</code>",id:"update",level:5}],p={toc:d},m="wrapper";function u(e){let{components:t,...i}=e;return(0,l.kt)(m,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tileset3d"},"Tileset3D"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Tileset3D")," class is being generalized to handle more use cases. Since this may require modifying some APIs, this class should be considered experiemental.")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Tileset3D")," class can be instantiated with tileset data formatted according to the ",(0,l.kt)("a",{parentName:"p",href:"docs/specifications/3d-tiles"},"3D Tiles Category"),", which is supported by the ",(0,l.kt)("a",{parentName:"p",href:"docs/api-reference/3d-tiles/tileset-3d-loader"},"Tiles3DLoader"),"."),(0,l.kt)("p",null,"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/AnalyticalGraphicsInc/3d-tiles/tree/master/specification"},"3D Tiles"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Esri/i3s-spec"},"I3S Tiles"),".")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Loading a tileset and instantiating a ",(0,l.kt)("inlineCode",{parentName:"p"},"Tileset3D")," instance."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {load} from '@loaders.gl/core';\nimport {Tileset3D} from '@loaders.gl/tiles';\nimport {Tiles3DLoader} from '@loaders.gl/3d-tiles';\n\nconst tilesetUrl = 'https://assets.cesium.com/43978/tileset.json';\nconst tilesetJson = await load(tilesetUrl, Tiles3DLoader);\nconst tileset3d = new Tileset3D(tilesetJson, {\n  onTileLoad: (tile) => console.log(tile)\n});\n")),(0,l.kt)("p",null,"Loading a tileset and dynamically load/unload with viewport."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {load} from '@loaders.gl/core';\nimport {Tileset3D} from '@loaders.gl/tiles';\nimport {I3SLoader} from '@loaders.gl/i3s';\nimport {WebMercatorViewport} from '@deck.gl/web-mercator';\n\nconst tileseturl =\n  'https://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/SanFrancisco_Bldgs/SceneServer/layers/0';\nconst tilesetJson = await load(tilesetUrl, I3SLoader);\nconst tileset3d = new Tileset3D(tilesetJson, {\n  onTileLoad: (tile) => console.log(tile)\n});\n\nconst viewport = new WebMercatorViewport({latitude, longitude, zoom});\ntileset3d.update(viewport);\n")),(0,l.kt)("p",null,"Since ",(0,l.kt)("inlineCode",{parentName:"p"},"Tileset3D's update")," is a synchronized call, which selects the tiles qualified for rendering based on current viewport and available tiles, user can trigger another ",(0,l.kt)("inlineCode",{parentName:"p"},"update")," when new tiles are loaded."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {Tileset3D} from '@loaders.gl/tiles';\n\nconst viewport = new WebMercatorViewport({latitude, longitude, zoom});\n\nconst tileset3d = new Tileset3D(tilesetJson, {\n  onTileLoad: (tile) => tileset3d.update(viewport)\n});\n")),(0,l.kt)("h2",{id:"constructor"},"Constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Tileset3D(tilesetJson, {\n  onTileLoad: (tile) => console.log(tile)\n});\n")),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"json"),": loaded tileset json object, should follow the format ",(0,l.kt)("a",{parentName:"li",href:"https://loaders.gl/docs/specifications/category-3d-tiles"},"tiles format")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options.ellipsoid"),"=",(0,l.kt)("inlineCode",{parentName:"li"},"Ellipsoid.WGS84")," (",(0,l.kt)("inlineCode",{parentName:"li"},"Ellipsoid"),") - The ellipsoid determining the size and shape of the globe."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options.throttleRequests"),"=",(0,l.kt)("inlineCode",{parentName:"li"},"true")," (",(0,l.kt)("inlineCode",{parentName:"li"},"Boolean"),") - Determines whether or not to throttle tile fetching requests. Throttled requests are prioritized according to tile visibility."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options.maxRequests"),"=",(0,l.kt)("inlineCode",{parentName:"li"},"64")," (",(0,l.kt)("inlineCode",{parentName:"li"},"Number"),") - When throttling tile fetching, the maximum number of simultaneous requests."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options.modelMatrix"),"=",(0,l.kt)("inlineCode",{parentName:"li"},"Matrix4.IDENTITY")," (",(0,l.kt)("inlineCode",{parentName:"li"},"Matrix4"),") - A 4x4 transformation matrix this transforms the entire tileset."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options.maximumMemoryUsage"),"=",(0,l.kt)("inlineCode",{parentName:"li"},"512")," (",(0,l.kt)("inlineCode",{parentName:"li"},"Number"),") - The maximum amount of memory in MB that can be used by the tileset."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options.viewDistanceScale"),"=",(0,l.kt)("inlineCode",{parentName:"li"},"1.0")," (",(0,l.kt)("inlineCode",{parentName:"li"},"Number"),") - A scaling factor for tile refinement. A lower value would cause lower level tiles to load. Useful for debugging and for restricting resource usage."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options.updateTransforms"),"=",(0,l.kt)("inlineCode",{parentName:"li"},"true")," (",(0,l.kt)("inlineCode",{parentName:"li"},"Boolean"),") - Always check if the tileset ",(0,l.kt)("inlineCode",{parentName:"li"},"modelMatrix")," was updated. Set to ",(0,l.kt)("inlineCode",{parentName:"li"},"false")," to improve performance when the tileset remains stationary in the scene."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options.loadOptions")," - ",(0,l.kt)("em",{parentName:"li"},"loaders.gl")," options used when loading tiles from the tiling server. Includes ",(0,l.kt)("inlineCode",{parentName:"li"},"fetch")," options such as authentication ",(0,l.kt)("inlineCode",{parentName:"li"},"headers"),", worker options such as ",(0,l.kt)("inlineCode",{parentName:"li"},"maxConcurrency"),", and options to other loaders such as ",(0,l.kt)("inlineCode",{parentName:"li"},"3d-tiles"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"gltf"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"draco"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options.contentLoader")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"null")," (",(0,l.kt)("inlineCode",{parentName:"li"},"Promise"),") - An optional external async content loader for the tile. Once the promise resolves, a tile is regarded as ",(0,l.kt)("em",{parentName:"li"},"READY")," to be displayed on the viewport."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options.loadTiles"),"=",(0,l.kt)("inlineCode",{parentName:"li"},"true")," (",(0,l.kt)("inlineCode",{parentName:"li"},"Boolean"),") - Whether the tileset traverse and update tiles. Set this options to ",(0,l.kt)("inlineCode",{parentName:"li"},"false")," during the run time to freeze the scene.")))),(0,l.kt)("p",null,"Callbacks:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"onTileLoad")," (",(0,l.kt)("inlineCode",{parentName:"li"},"(tileHeader : Tile3D) : void"),") - callback when a tile node is fully loaded during the tileset traversal."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"onTileUnload")," (",(0,l.kt)("inlineCode",{parentName:"li"},"(tileHeader : Tile3D) : void"),") - callback when a tile node is unloaded during the tileset traversal."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"onTileError")," (",(0,l.kt)("inlineCode",{parentName:"li"},"(tileHeader : Tile3D, message : String) : void"),") - callback when a tile faile to load during the tileset traversal."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"onTraversalComplete")," (",(0,l.kt)("inlineCode",{parentName:"li"},"(selectedTiles : Tile3D[]) : Tile3D[]"),") - callback post-process selectedTiles right after traversal.")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Tileset3D")," allows callbacks (",(0,l.kt)("inlineCode",{parentName:"p"},"onTileLoad"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"onTileUnload"),") to be registered that notify the app when the set of tiles available for rendering has changed. This is important because tile loads complete asynchronously, after the ",(0,l.kt)("inlineCode",{parentName:"p"},"tileset3D.update(...)")," call has returned."),(0,l.kt)("p",null,"Cesium 3D tiles specific options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options.maximumScreenSpaceError"),"=",(0,l.kt)("inlineCode",{parentName:"li"},"16"),"] (",(0,l.kt)("inlineCode",{parentName:"li"},"Number"),") - The maximum screen space error used to drive level of detail refinement.")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h6",{id:"boundingvolume-boundingvolume"},(0,l.kt)("inlineCode",{parentName:"h6"},"boundingVolume")," (BoundingVolume)"),(0,l.kt)("p",null,"The root tile's bounding volume, which is also the bouding volume of the entire tileset. Check ",(0,l.kt)("inlineCode",{parentName:"p"},"Tile3D#boundingVolume")),(0,l.kt)("h6",{id:"cartesiancenter-number3"},(0,l.kt)("inlineCode",{parentName:"h6"},"cartesianCenter")," (Number","[3]",")"),(0,l.kt)("p",null,"Center of tileset in fixed frame coordinates."),(0,l.kt)("h6",{id:"cartographiccenter-number3"},(0,l.kt)("inlineCode",{parentName:"h6"},"cartographicCenter")," (Number","[3]",")"),(0,l.kt)("p",null,"Center of tileset in cartographic coordinates ",(0,l.kt)("inlineCode",{parentName:"p"},"[long, lat, elevation]")),(0,l.kt)("h6",{id:"ellipsoid-ellipsoid"},(0,l.kt)("inlineCode",{parentName:"h6"},"ellipsoid")," (",(0,l.kt)("a",{parentName:"h6",href:"https://math.gl/modules/geospatial/docs/api-reference/ellipsoid"},(0,l.kt)("inlineCode",{parentName:"a"},"Ellipsoid")),")"),(0,l.kt)("p",null,"Gets an ellipsoid describing the shape of the globe."),(0,l.kt)("h5",{id:"modelmatrix-matrix4"},(0,l.kt)("inlineCode",{parentName:"h5"},"modelMatrix")," (Matrix4)"),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"https://math.gl/modules/core/docs/api-reference/matrix4"},"Matrix4")," instance (4x4 transformation matrix) that transforms the entire tileset."),(0,l.kt)("h6",{id:"root-tile3d"},(0,l.kt)("inlineCode",{parentName:"h6"},"root")," (Tile3D)"),(0,l.kt)("p",null,"The root tile header."),(0,l.kt)("h6",{id:"tiles-tile3d"},(0,l.kt)("inlineCode",{parentName:"h6"},"tiles")," (Tile3D[])"),(0,l.kt)("p",null,"All the tiles that have been traversed."),(0,l.kt)("h6",{id:"stats-stats"},(0,l.kt)("inlineCode",{parentName:"h6"},"stats")," (",(0,l.kt)("a",{parentName:"h6",href:"https://uber-web.github.io/probe.gl/docs/api-reference/log/stats"},(0,l.kt)("inlineCode",{parentName:"a"},"Stats")),")"),(0,l.kt)("p",null,"An instance of a probe.gl ",(0,l.kt)("inlineCode",{parentName:"p"},"Stats")," object that contains information on how many tiles have been loaded etc. Easy to display using a probe.gl ",(0,l.kt)("inlineCode",{parentName:"p"},"StatsWidget"),"."),(0,l.kt)("h6",{id:"tileset-object"},(0,l.kt)("inlineCode",{parentName:"h6"},"tileset")," (Object)"),(0,l.kt)("p",null,"The original tileset data this object instanced from."),(0,l.kt)("h6",{id:"tilesloaded-boolean"},(0,l.kt)("inlineCode",{parentName:"h6"},"tilesLoaded")," (Boolean)"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", all tiles that meet the screen space error this frame are loaded. The tileset is completely loaded for this view."),(0,l.kt)("h6",{id:"gpumemoryusageinbytes-number"},(0,l.kt)("inlineCode",{parentName:"h6"},"gpuMemoryUsageInBytes")," (Number)"),(0,l.kt)("p",null,"The total amount of GPU memory in bytes used by the tileset. This value is estimated from geometry, texture, and batch table textures of loaded tiles. For point clouds, this value also includes per-point metadata."),(0,l.kt)("h6",{id:"url-string"},(0,l.kt)("inlineCode",{parentName:"h6"},"url")," (String)"),(0,l.kt)("p",null,"The url to a tileset JSON file."),(0,l.kt)("h6",{id:"zoom-number3"},(0,l.kt)("inlineCode",{parentName:"h6"},"zoom")," (Number","[3]",")"),(0,l.kt)("p",null,"A web mercator zoom level that displays the entire tile set bounding volume"),(0,l.kt)("h5",{id:"tilesloaded--boolean"},(0,l.kt)("inlineCode",{parentName:"h5"},"tilesLoaded")," : boolean"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", all tiles that meet the screen space error this frame are loaded. The tileset is\ncompletely loaded for this view."),(0,l.kt)("p",null,"See Tileset3D#allTilesLoaded"),(0,l.kt)("h3",{id:"cesium-3d-tiles-properties"},"Cesium 3D Tiles properties"),(0,l.kt)("h3",{id:"asset--object"},"asset : Object"),(0,l.kt)("p",null,"Gets the tileset's asset object property, which contains metadata about the tileset."),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AnalyticalGraphicsInc/3d-tiles/tree/master/specification#reference-asset"},"asset schema reference")," in the 3D Tiles spec for the full set of properties."),(0,l.kt)("h3",{id:"properties--object"},"properties : Object"),(0,l.kt)("p",null,"Gets the tileset's properties dictionary object, which contains metadata about per-feature properties."),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AnalyticalGraphicsInc/3d-tiles/tree/master/specification#reference-properties"},"properties schema reference")," in the 3D Tiles spec for the full set of properties."),(0,l.kt)("h3",{id:"maximumscreenspaceerror--number"},"maximumScreenSpaceError : Number"),(0,l.kt)("p",null,"The maximum screen space error used to drive level of detail refinement. This value helps determine when a tile refines to its descendants, and therefore plays a major role in balancing performance with visual quality."),(0,l.kt)("p",null,"A tile's screen space error is roughly equivalent to the number of pixels wide that would be drawn if a sphere with a\nradius equal to the tile's ",(0,l.kt)("b",null,"geometric error")," were rendered at the tile's position. If this value exceeds\n",(0,l.kt)("inlineCode",{parentName:"p"},"maximumScreenSpaceError")," the tile refines to its descendants."),(0,l.kt)("p",null,"Depending on the tileset, ",(0,l.kt)("inlineCode",{parentName:"p"},"maximumScreenSpaceError")," may need to be tweaked to achieve the right balance. Higher values provide better performance but lower visual quality. ","*"),(0,l.kt)("h3",{id:"maximummemoryusage--number"},"maximumMemoryUsage : Number"),(0,l.kt)("p",null,"^default 16 ","*","\n^exception ",(0,l.kt)("inlineCode",{parentName:"p"},"maximumScreenSpaceError")," must be greater than or equal to zero."),(0,l.kt)("p",null,"The maximum amount of GPU memory (in MB) that may be used to cache tiles. This value is estimated from\ngeometry, textures, and batch table textures of loaded tiles. For point clouds, this value also\nincludes per-point metadata."),(0,l.kt)("p",null,"Tiles not in view are unloaded to enforce this."),(0,l.kt)("p",null,"If decreasing this value results in unloading tiles, the tiles are unloaded the next frame."),(0,l.kt)("p",null,"If tiles sized more than ",(0,l.kt)("inlineCode",{parentName:"p"},"maximumMemoryUsage")," are needed\nto meet the desired screen space error, determined by ",(0,l.kt)("inlineCode",{parentName:"p"},"Tileset3D.maximumScreenSpaceError"),",\nfor the current view, then the memory usage of the tiles loaded will exceed\n",(0,l.kt)("inlineCode",{parentName:"p"},"maximumMemoryUsage"),". For example, if the maximum is 256 MB, but\n300 MB of tiles are needed to meet the screen space error, then 300 MB of tiles may be loaded. When\nthese tiles go out of view, they will be unloaded."),(0,l.kt)("p",null,"^default 512 ","*","\n^exception ",(0,l.kt)("inlineCode",{parentName:"p"},"maximumMemoryUsage")," must be greater than or equal to zero.\n^see Tileset3D#gpuMemoryUsageInBytes"),(0,l.kt)("h3",{id:"root--tile3d"},"root : Tile3D"),(0,l.kt)("p",null,"The root tile header."),(0,l.kt)("h3",{id:"boundingsphere--boundingsphere"},"boundingSphere : BoundingSphere"),(0,l.kt)("p",null,"The tileset's bounding sphere."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var tileset = viewer.scene.primitives.add(\n  new Tileset3D({\n    url: 'http://localhost:8002/tilesets/Seattle/tileset.json'\n  })\n);\n\ntileset.readyPromise.then(function (tileset) {\n  // Set the camera to view the newly added tileset\n  viewer.camera.viewBoundingSphere(tileset.boundingSphere, new HeadingPitchRange(0, -0.5, 0));\n});\n")),(0,l.kt)("h3",{id:"modelmatrix--matrix4"},"modelMatrix : Matrix4"),(0,l.kt)("p",null,"A 4x4 transformation matrix that transforms the entire tileset."),(0,l.kt)("h3",{id:"maximummemoryusage--number-1"},"maximumMemoryUsage : Number"),(0,l.kt)("h3",{id:"gpumemoryusageinbytes--number"},"gpuMemoryUsageInBytes : Number"),(0,l.kt)("p",null,"The total amount of GPU memory in bytes used by the tileset. This value is estimated from\ngeometry, texture, and batch table textures of loaded tiles. For point clouds, this value also\nincludes per-point metadata."),(0,l.kt)("h3",{id:"stats--stats"},"stats : Stats"),(0,l.kt)("p",null,"An instance of a probe.gl ",(0,l.kt)("inlineCode",{parentName:"p"},"Stats")," object that contains information on how many tiles have been loaded etc. Easy to display using a probe.gl ",(0,l.kt)("inlineCode",{parentName:"p"},"StatsWidget"),"."),(0,l.kt)("h3",{id:"ellipsoid--ellipsoid"},"ellipsoid : Ellipsoid"),(0,l.kt)("p",null,"Gets an ellipsoid describing the shape of the globe."),(0,l.kt)("p",null,"Returns the ",(0,l.kt)("inlineCode",{parentName:"p"},"extras")," property at the top-level of the tileset JSON, which contains application specific metadata.\nReturns ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," if ",(0,l.kt)("inlineCode",{parentName:"p"},"extras")," does not exist."),(0,l.kt)("p",null,"Exception The tileset is not loaded. Use Tileset3D.readyPromise or wait for Tileset3D.ready to be true."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AnalyticalGraphicsInc/3d-tiles/tree/master/specification#specifying-extensions-and-application-specific-extras"},"Extras")," in the 3D Tiles specification.}"),(0,l.kt)("h3",{id:"unloadtileset"},"unloadTileset"),(0,l.kt)("p",null,"Unloads all tiles that weren't selected the previous frame. This can be used to\nexplicitly manage the tile cache and reduce the total number of tiles loaded below\n",(0,l.kt)("inlineCode",{parentName:"p"},"Tileset3D.maximumMemoryUsage"),"."),(0,l.kt)("p",null,"Tile unloads occur at the next frame to keep all the WebGL delete calls\nwithin the render loop."),(0,l.kt)("h3",{id:"isdestroyed--boolean"},"isDestroyed() : Boolean"),(0,l.kt)("p",null,"Returns true if this object was destroyed; otherwise, false."),(0,l.kt)("p",null,"If this object was destroyed, it should not be used; calling any function other than\n",(0,l.kt)("inlineCode",{parentName:"p"},"isDestroyed")," will result in an exception."),(0,l.kt)("p",null,"^returns ",(0,l.kt)("inlineCode",{parentName:"p"},"Boolean"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if this object was destroyed; otherwise, ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("h3",{id:"destroy"},"destroy()"),(0,l.kt)("p",null,"Destroys the WebGL resources held by this object. Destroying an object allows for deterministic\nrelease of WebGL resources, instead of relying on the garbage collector to destroy this object."),(0,l.kt)("p",null,"Once an object is destroyed, it should not be used; calling any function other than ",(0,l.kt)("inlineCode",{parentName:"p"},"isDestroyed")," will result in an exception. Therefore, assign the return value ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," to the object as done in the example."),(0,l.kt)("p",null,"Wxception This object was destroyed, i.e., destroy() was called."),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h5",{id:"setoptions"},(0,l.kt)("inlineCode",{parentName:"h5"},"setOptions")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"setOptions(options: Object) : void"),":"),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),": the options map to apply")),(0,l.kt)("p",null,"Apply new options to an instance of the class. Use this method to update options of the tileset during the run time."),(0,l.kt)("h5",{id:"update"},(0,l.kt)("inlineCode",{parentName:"h5"},"update")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"update(viewport: WebMercatorViewport) : Number"),":"),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"viewport"),": a ",(0,l.kt)("a",{parentName:"li",href:"https://deck.gl/#/documentation/deckgl-api-reference/viewports/web-mercator-viewport"},(0,l.kt)("inlineCode",{parentName:"a"},"WebMercatorViewport")))),(0,l.kt)("p",null,"Execute traversal under current viewport and fetch tiles needed for current viewport and update ",(0,l.kt)("inlineCode",{parentName:"p"},"selectedTiles"),". Return ",(0,l.kt)("inlineCode",{parentName:"p"},"frameNumber")," of this update frame."))}u.isMDXComponent=!0}}]);