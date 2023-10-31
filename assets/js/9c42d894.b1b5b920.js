"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8151],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,d=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return r?o.createElement(d,i(i({ref:t},m),{},{components:r})):o.createElement(d,i({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37961:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={},i="Mapbox Vector Tile",l={unversionedId:"modules/mvt/formats/mvt",id:"modules/mvt/formats/mvt",title:"Mapbox Vector Tile",description:"- Mapbox Vector Tile Specification",source:"@site/../docs/modules/mvt/formats/mvt.md",sourceDirName:"modules/mvt/formats",slug:"/modules/mvt/formats/mvt",permalink:"/docs/modules/mvt/formats/mvt",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/mvt/formats/mvt.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LAS / LAZ",permalink:"/docs/modules/las/formats/las"},next:{title:"TileJSON / Tilestats",permalink:"/docs/modules/mvt/formats/tilejson"}},c={},s=[{value:"Metadata",id:"metadata",level:2}],m={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mapbox-vector-tile"},"Mapbox Vector Tile"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},(0,n.kt)("a",{parentName:"em",href:"https://github.com/mapbox/vector-tile-spec"},"Mapbox Vector Tile Specification")))),(0,n.kt)("p",null,"A specification for encoding tiled vector data."),(0,n.kt)("p",null,"MVT is a protobuf-encoded format that defines geospatial geometries."),(0,n.kt)("h2",{id:"metadata"},"Metadata"),(0,n.kt)("p",null,"It is often useful to have global metadata about a tileset. A common complementary format for encoding tileset metadata is ",(0,n.kt)("a",{parentName:"p",href:"./tilejson"},"TileJSON"),"."))}u.isMDXComponent=!0}}]);