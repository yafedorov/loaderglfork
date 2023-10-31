"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1798],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8258:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i="parseWithContext",s={unversionedId:"modules/loader-utils/api-reference/parse-with-context",id:"modules/loader-utils/api-reference/parse-with-context",title:"parseWithContext",description:"Use when invoking a sub-loader from a loader, to parse embedded data or perhaps an associated resource.",source:"@site/../docs/modules/loader-utils/api-reference/parse-with-context.md",sourceDirName:"modules/loader-utils/api-reference",slug:"/modules/loader-utils/api-reference/parse-with-context",permalink:"/docs/modules/loader-utils/api-reference/parse-with-context",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/loader-utils/api-reference/parse-with-context.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Request Scheduler",permalink:"/docs/modules/loader-utils/api-reference/request-scheduler"},next:{title:"Overview",permalink:"/docs/modules/3d-tiles/"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Functions",id:"functions",level:2},{value:"parse",id:"parse",level:3},{value:"parseSyncWithContext",id:"parsesyncwithcontext",level:3},{value:"parseInBatchesWithContext",id:"parseinbatcheswithcontext",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"parsewithcontext"},"parseWithContext"),(0,a.kt)("p",null,"Use when invoking a sub-loader from a loader, to parse embedded data or perhaps an associated resource."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {parseWithContext} from '@loaders.gl/loader-utils';\nimport {OBJLoader} from '@loaders.gl/obj';\n\nparse(data: ArrayBuffer, options: LoaderOptions, context?: LoaderContext) {\n  const subData = data.slice(100, 200);\n  data = await parseWithContext(subData, OBJLoader, options, context);\n}\n...\n")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"parse"},"parse"),(0,a.kt)("h3",{id:"parsesyncwithcontext"},"parseSyncWithContext"),(0,a.kt)("h3",{id:"parseinbatcheswithcontext"},"parseInBatchesWithContext"))}d.isMDXComponent=!0}}]);