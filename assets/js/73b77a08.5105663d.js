"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[6501],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},21753:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={},s="TWKB",i={unversionedId:"modules/wkt/formats/twkb",id:"modules/wkt/formats/twkb",title:"TWKB",description:"- @loaders.gl/wkt",source:"@site/../docs/modules/wkt/formats/twkb.md",sourceDirName:"modules/wkt/formats",slug:"/modules/wkt/formats/twkb",permalink:"/docs/modules/wkt/formats/twkb",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/wkt/formats/twkb.md",tags:[],version:"current",frontMatter:{}},l={},u=[{value:"Memory Layout",id:"memory-layout",level:2},{value:"Ecosystem Support",id:"ecosystem-support",level:2},{value:"Versions / History",id:"versions--history",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"twkb"},"TWKB"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},(0,o.kt)("a",{parentName:"em",href:"/docs/modules/wkt"},(0,o.kt)("inlineCode",{parentName:"a"},"@loaders.gl/wkt")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},(0,o.kt)("a",{parentName:"em",href:"https://github.com/TWKB/Specification/blob/master/twkb.md"},"TWKB specification")))),(0,o.kt)("p",null,"TWKB is a format for serializing vector geometry data into a binary byte buffer, similar to ",(0,o.kt)("a",{parentName:"p",href:"./wkb"},"WKB")," but with an emphasis on minimizing size of the buffer."),(0,o.kt)("h2",{id:"memory-layout"},"Memory Layout"),(0,o.kt)("p",null,"WKB uses IEEE doubles as the coordinate storage format, so for data with lots of spatially adjacent coordinates (typical for GIS data) it wastes precision, i.e. space on redundant coordinate information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TWKB only stores the absolute position once, and stores all other positions as delta values relative to the preceding position."),(0,o.kt)("li",{parentName:"ul"},'TWKB Only use as much address space as is necessary for any given value. Practically this means that "variable length integers" or "varints" are used throughout the specification for storing values in any situation where numbers greater than 128 might be encountered.')),(0,o.kt)("h2",{id:"ecosystem-support"},"Ecosystem Support"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PostGIS offers a function to return geometries in TWKB format: ",(0,o.kt)("a",{parentName:"li",href:"https://postgis.net/docs/ST_AsTWKB.html"},"ST_AsTWKB"),".")),(0,o.kt)("h2",{id:"versions--history"},"Versions / History"),(0,o.kt)("p",null,"Unknown."))}m.isMDXComponent=!0}}]);