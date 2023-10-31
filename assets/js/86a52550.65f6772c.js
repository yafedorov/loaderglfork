"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[3478],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,l=function(e,t){if(null==e)return{};var r,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=p(r),f=l,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||n;return r?o.createElement(m,i(i({ref:t},d),{},{components:r})):o.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:l,i[1]=a;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},24792:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>p});var o=r(87462),l=(r(67294),r(3905));const n={},i="Node.js support",a={unversionedId:"developer-guide/node",id:"developer-guide/node",title:"Node.js support",description:"Firstly, to run loaders.gl on Node.js you want to import the @loaders.gl/polyfills module.",source:"@site/../docs/developer-guide/node.md",sourceDirName:"developer-guide",slug:"/developer-guide/node",permalink:"/docs/developer-guide/node",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/developer-guide/node.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Batched Loaders",permalink:"/docs/developer-guide/using-streaming-loaders"},next:{title:"Managing Dependencies",permalink:"/docs/developer-guide/dependencies"}},s={},p=[{value:"Polyfills",id:"polyfills",level:2},{value:"Combining with other Polyfills",id:"combining-with-other-polyfills",level:2},{value:"Provided Polyfills",id:"provided-polyfills",level:2},{value:"Remarks",id:"remarks",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nodejs-support"},"Node.js support"),(0,l.kt)("p",null,"Firstly, to run loaders.gl on Node.js you want to import the ",(0,l.kt)("inlineCode",{parentName:"p"},"@loaders.gl/polyfills")," module."),(0,l.kt)("p",null,"Also it is good to understand that loaders.gl avoids using Node.js specific APIs (such as Buffer, path, util, fs, streams etc) instead favoring browser compatible equivalents. loaders.gl is optimized for cross-platform compatible APIs. "),(0,l.kt)("p",null,"However, if your goal is to write Node.js-idiomatic code rather than browser-portable code, you may find that working with loaders.gl can require some extra work."),(0,l.kt)("h2",{id:"polyfills"},"Polyfills"),(0,l.kt)("p",null,"To install these polyfills, just ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," the polyfills module before start using loaders.gl."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import '@loaders.gl/polyfills';\nimport {parse} from '@loaders.gl/core';\n")),(0,l.kt)("h2",{id:"combining-with-other-polyfills"},"Combining with other Polyfills"),(0,l.kt)("p",null,"loaders.gl only installs polyfills if the corresponding global symbol is ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),". This means that if another polyfill is already installed when ",(0,l.kt)("inlineCode",{parentName:"p"},"@loaders.gl/polyfills")," is imported, the other polyfill will remain in effect. Since most polyfill libraries work this way, applications can mix and match polyfills by ordering the polyfill import statements appropriately (but see the remarks below for a possible caveat)."),(0,l.kt)("h2",{id:"provided-polyfills"},"Provided Polyfills"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/modules/polyfills/api-reference"},"API Reference"),"."),(0,l.kt)("h2",{id:"remarks"},"Remarks"))}u.isMDXComponent=!0}}]);