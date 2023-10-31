"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9553],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60388:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={},o="WFS - Web Feature Service",i={unversionedId:"modules/wms/formats/wfs",id:"modules/wms/formats/wfs",title:"WFS - Web Feature Service",description:"ogc-logo",source:"@site/../docs/modules/wms/formats/wfs.md",sourceDirName:"modules/wms/formats",slug:"/modules/wms/formats/wfs",permalink:"/docs/modules/wms/formats/wfs",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/wms/formats/wfs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WMTS - Web Map Tiling Service",permalink:"/docs/modules/wms/formats/wmts"},next:{title:"GML - Geography Markup Language",permalink:"/docs/modules/wms/formats/gml"}},l={},p=[{value:"Characteristics",id:"characteristics",level:2},{value:"Profiles",id:"profiles",level:2},{value:"Request Types",id:"request-types",level:2},{value:"Features",id:"features",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...s}=e;return(0,n.kt)(c,(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"wfs---web-feature-service"},"WFS - Web Feature Service"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ogc-logo",src:r(63411).Z,width:"119",height:"60"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},(0,n.kt)("a",{parentName:"em",href:"/docs/modules/wms"},(0,n.kt)("inlineCode",{parentName:"a"},"@loaders.gl/wms")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},(0,n.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Web_Feature_Service"},"Wikipedia article")))),(0,n.kt)("p",null,"WFS (Web Feature Service) is a standardized protocol for serving geographical features (points, lines and polygons) over the internet."),(0,n.kt)("h2",{id:"characteristics"},"Characteristics"),(0,n.kt)("p",null,"WFS is not a single file format but rather a protocol, specifying a number of required and optional requests. Some requests return binary images, and some return metadata formatted as XML (text) responses. The XML responses are fairly detailed and some variations exists, so when working with WFS it is typically useful to have access to pre-tested parsers for each response type."),(0,n.kt)("h2",{id:"profiles"},"Profiles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Basic WFS (",(0,n.kt)("inlineCode",{parentName:"li"},"WFS-Basic"),") - A READ-ONLY WFS. Unable to service transaction requests necessary for data manipulation"),(0,n.kt)("li",{parentName:"ul"},"Transaction WFS (",(0,n.kt)("inlineCode",{parentName:"li"},"WFS-T"),") - Supports all the operations of basic WFS including the ability to manipulate the data (create, edit, delete, and update features).")),(0,n.kt)("h2",{id:"request-types"},"Request Types"),(0,n.kt)("p",null,'The WFS standard specifies a number of "request types" that a standards-compliant WFS server should support. loaders.gl provides loaders for all WFS request responses:'),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"WFS Request")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Response Loader")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Description"))))),(0,n.kt)("p",null,"| Basic WFS\n| ",(0,n.kt)("inlineCode",{parentName:"p"},"GetCapabilities"),"     | ",(0,n.kt)("inlineCode",{parentName:"p"},"WFSCapabilitiesLoader"),"     | Returns parameters about the WFS (such as map image format and WFS version compatibility) and the available layers (map bounding box, coordinate reference systems, URI of the data and whether the layer is mostly opaque or not) |\n| ",(0,n.kt)("inlineCode",{parentName:"p"},"DescribeFeatureType")," | ",(0,n.kt)("inlineCode",{parentName:"p"},"WFSFeatureTypeLoader"),"      | if a layer is marked as 'queryable' then you can request data about a coordinate of the map image.                                                                                                                                 |\n| ",(0,n.kt)("inlineCode",{parentName:"p"},"GetFeature"),"          | ",(0,n.kt)("inlineCode",{parentName:"p"},"WFSFeatureLoader"),"               | returns a map image. Parameters include: width and height of the map, coordinate reference system, rendering style, image format                                                                                                   |\n| Transaction WFS\n| ",(0,n.kt)("inlineCode",{parentName:"p"},"Transaction"),"       | Not yet supported | Enables data manipulation (editing) of features via CRUD operations.                                      |\n| ",(0,n.kt)("inlineCode",{parentName:"p"},"LockFeature"),"    | Not yet supported              | A lock request on one or more instances of a feature type elements.                                                                                                                                                               |"),(0,n.kt)("p",null,"Note that the response to ",(0,n.kt)("inlineCode",{parentName:"p"},"GetCapabilities")," contains information about which request types are supported"),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("p",null,"A WFS server usually serves the map in a bitmap format, e.g. PNG, GIF, JPEG. In addition, vector graphics can be included, such as points, lines, curves and text, expressed in SVG or WebCGM format. The MIME types of the ",(0,n.kt)("inlineCode",{parentName:"p"},"GetMap")," request can be inspected in the response to the ",(0,n.kt)("inlineCode",{parentName:"p"},"GetCapabilities")," request."))}m.isMDXComponent=!0},63411:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ogc-logo-60-8ee2c25a50ccc14293453512c707a0c4.png"}}]);