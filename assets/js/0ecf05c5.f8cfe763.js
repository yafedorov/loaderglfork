"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[5521],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},74505:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={},i="LERC - Limited Error Raster Compression",s={unversionedId:"modules/lerc/formats/lerc",id:"modules/lerc/formats/lerc",title:"LERC - Limited Error Raster Compression",description:"- loaders.gl/wms",source:"@site/../docs/modules/lerc/formats/lerc.md",sourceDirName:"modules/lerc/formats",slug:"/modules/lerc/formats/lerc",permalink:"/docs/modules/lerc/formats/lerc",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/lerc/formats/lerc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GML - Geography Markup Language",permalink:"/docs/modules/wms/formats/gml"},next:{title:"WKT - Well-Known Text",permalink:"/docs/modules/wkt/formats/wkt"}},l={},c=[],p={toc:c},m="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(m,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lerc---limited-error-raster-compression"},"LERC - Limited Error Raster Compression"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},(0,o.kt)("a",{parentName:"em",href:"/docs/modules/wms"},(0,o.kt)("inlineCode",{parentName:"a"},"loaders.gl/wms")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},(0,o.kt)("a",{parentName:"em",href:"http://esri.github.io/lerc/"},"LERC specification")))),(0,o.kt)("p",null,"LERC is an open-source image or raster format which supports rapid encoding and decoding for any pixel type (not just RGB or Byte). Users set the maximum compression error per pixel while encoding, so the precision of the original input image is preserved (within user defined error bounds)."))}u.isMDXComponent=!0}}]);