"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1084],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),o=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},u="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=o(n),k=r,s=u["".concat(d,".").concat(k)]||u[k]||N[k]||l;return n?a.createElement(s,i(i({ref:e},m),{},{components:n})):a.createElement(s,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[u]="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},59884:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={},i="Supported features",p={unversionedId:"modules/tile-converter/cli-reference/supported-features",id:"modules/tile-converter/cli-reference/supported-features",title:"Supported features",description:"The tile-converter is capable to convert 3D tiles data of formats 3DTiles and I3S. Both 3DTiles and I3S are wide specifications which include many internal formats and data types. The tile-converter doesn't cover all features described in those specifications. This sheet summarises the compatibility of the tile-converter with different parts and features of 3DTiles and I3S.",source:"@site/../docs/modules/tile-converter/cli-reference/supported-features.md",sourceDirName:"modules/tile-converter/cli-reference",slug:"/modules/tile-converter/cli-reference/supported-features",permalink:"/docs/modules/tile-converter/cli-reference/supported-features",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/tile-converter/cli-reference/supported-features.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SLPK extractor",permalink:"/docs/modules/tile-converter/cli-reference/slpk-extractor"},next:{title:"Introduction",permalink:"/docs/arrowjs/"}},d={},o=[{value:"Layer types",id:"layer-types",level:2},{value:"Input data source types",id:"input-data-source-types",level:2},{value:"Versions",id:"versions",level:2},{value:"3DTiles vNext support",id:"3dtiles-vnext-support",level:2},{value:"Internal data types",id:"internal-data-types",level:2},{value:"Mesh topology types",id:"mesh-topology-types",level:2}],m={toc:o},u="wrapper";function N(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"supported-features"},"Supported features"),(0,r.kt)("p",null,"The tile-converter is capable to convert 3D tiles data of formats ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CesiumGS/3d-tiles/tree/main/specification"},"3DTiles")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Esri/i3s-spec"},"I3S"),". Both ",(0,r.kt)("inlineCode",{parentName:"p"},"3DTiles")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"I3S")," are wide specifications which include many internal formats and data types. The tile-converter doesn't cover all features described in those specifications. This sheet summarises the compatibility of the tile-converter with different parts and features of ",(0,r.kt)("inlineCode",{parentName:"p"},"3DTiles")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"I3S"),"."),(0,r.kt)("h2",{id:"layer-types"},"Layer types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Specification"),(0,r.kt)("th",{parentName:"tr",align:null},"Layer type"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"I3S")),(0,r.kt)("td",{parentName:"tr",align:null},"3D objects"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"I3S")),(0,r.kt)("td",{parentName:"tr",align:null},"Integrated mesh"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"I3S")),(0,r.kt)("td",{parentName:"tr",align:null},"Point"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"I3S")),(0,r.kt)("td",{parentName:"tr",align:null},"Point cloud"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"I3S")),(0,r.kt)("td",{parentName:"tr",align:null},"Building scene layer"),(0,r.kt)("td",{parentName:"tr",align:null},"It is possible to convert a single sublayer (if it is of 3D objects of Integrated mesh layer type)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")),(0,r.kt)("td",{parentName:"tr",align:null},"Batched 3D Model"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")),(0,r.kt)("td",{parentName:"tr",align:null},"Instanced 3D Model"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")),(0,r.kt)("td",{parentName:"tr",align:null},"Point Cloud"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")),(0,r.kt)("td",{parentName:"tr",align:null},"Composite"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported")))),(0,r.kt)("h2",{id:"input-data-source-types"},"Input data source types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Specification"),(0,r.kt)("th",{parentName:"tr",align:null},"Data source type"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"I3S")),(0,r.kt)("td",{parentName:"tr",align:null},"SLPK"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported as local HTTP service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"I3S")),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP REST service"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")),(0,r.kt)("td",{parentName:"tr",align:null},"Local file system folder"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")),(0,r.kt)("td",{parentName:"tr",align:null},"Cesium ION URL"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported")))),(0,r.kt)("h2",{id:"versions"},"Versions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Specification"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"I3S")),(0,r.kt)("td",{parentName:"tr",align:null},"1.6, 1.7"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported only as input data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"I3S")),(0,r.kt)("td",{parentName:"tr",align:null},"1.8"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")),(0,r.kt)("td",{parentName:"tr",align:null},"1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")),(0,r.kt)("td",{parentName:"tr",align:null},"vNext"),(0,r.kt)("td",{parentName:"tr",align:null},"Partial support (see ",(0,r.kt)("a",{parentName:"td",href:"#3dtiles-vnext-support"},"3DTiles vNext support"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")),(0,r.kt)("td",{parentName:"tr",align:null},"1.1"),(0,r.kt)("td",{parentName:"tr",align:null},"In progress")))),(0,r.kt)("h2",{id:"3dtiles-vnext-support"},"3DTiles vNext support"),(0,r.kt)("p",null,"Some 3DTiles vNext extensions are supported as input data."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Belongs to"),(0,r.kt)("th",{parentName:"tr",align:null},"Extension"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTILES_content_gltf")),(0,r.kt)("td",{parentName:"tr",align:null},"Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTILES_multiple_contents")),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTILES_implicit_tiling")),(0,r.kt)("td",{parentName:"tr",align:null},"Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTILES_bounding_volume_S2")),(0,r.kt)("td",{parentName:"tr",align:null},"Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTIles")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTILES_metadata")),(0,r.kt)("td",{parentName:"tr",align:null},"Not applicable for ",(0,r.kt)("inlineCode",{parentName:"td"},"I3S"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"glTF")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EXT_mesh_features")),(0,r.kt)("td",{parentName:"tr",align:null},"Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"glTF")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EXT_feature_metadata")),(0,r.kt)("td",{parentName:"tr",align:null},"Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"glTF")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EXT_structural_metadata")),(0,r.kt)("td",{parentName:"tr",align:null},"Supported")))),(0,r.kt)("h2",{id:"internal-data-types"},"Internal data types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Specification"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"I3S")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Draco")),(0,r.kt)("td",{parentName:"tr",align:null},"Compressed geometry"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")," (",(0,r.kt)("inlineCode",{parentName:"td"},"glTF"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KHR_draco_mesh_compression")),(0,r.kt)("td",{parentName:"tr",align:null},"Draco Compressed geometry"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported as input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")," (",(0,r.kt)("inlineCode",{parentName:"td"},"glTF"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EXT_meshopt_compression")),(0,r.kt)("td",{parentName:"tr",align:null},"Optimized geometry"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported as input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")," (",(0,r.kt)("inlineCode",{parentName:"td"},"glTF"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KHR_texture_transform")),(0,r.kt)("td",{parentName:"tr",align:null},"UV coordinates transformation"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported as input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"I3S"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PNG"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"JPEG")),(0,r.kt)("td",{parentName:"tr",align:null},"Texture formats"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"I3S")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KTX2")," with ",(0,r.kt)("inlineCode",{parentName:"td"},"Basis")," texture"),(0,r.kt)("td",{parentName:"tr",align:null},"Compressed texture format"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"I3S")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DDS")),(0,r.kt)("td",{parentName:"tr",align:null},"Compressed texture format"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported as input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTIles")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KTX2")," with ",(0,r.kt)("inlineCode",{parentName:"td"},"Basis")," texture"),(0,r.kt)("td",{parentName:"tr",align:null},"Compressed texture format"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported as input")))),(0,r.kt)("h2",{id:"mesh-topology-types"},"Mesh topology types"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"I3S")," specification supports only ",(0,r.kt)("inlineCode",{parentName:"p"},"TRIANGLE")," mesh topology type."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Specification"),(0,r.kt)("th",{parentName:"tr",align:null},"Mesh type"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"POINTS")),(0,r.kt)("td",{parentName:"tr",align:null},"Not applicable in ",(0,r.kt)("inlineCode",{parentName:"td"},"I3S"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LINES")),(0,r.kt)("td",{parentName:"tr",align:null},"Not applicable in ",(0,r.kt)("inlineCode",{parentName:"td"},"I3S"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LINE_LOOP")),(0,r.kt)("td",{parentName:"tr",align:null},"Not applicable in ",(0,r.kt)("inlineCode",{parentName:"td"},"I3S"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LINE_STRIP")),(0,r.kt)("td",{parentName:"tr",align:null},"Not applicable in ",(0,r.kt)("inlineCode",{parentName:"td"},"I3S"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TRIANGLES")),(0,r.kt)("td",{parentName:"tr",align:null},"Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TRIANGLE_STRIP")),(0,r.kt)("td",{parentName:"tr",align:null},"Supported as input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3DTiles")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TRIANGLE_FAN")),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported")))))}N.isMDXComponent=!0}}]);