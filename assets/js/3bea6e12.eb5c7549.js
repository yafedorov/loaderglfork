"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2971],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},99800:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={},i="Notes on Memory Management",s={unversionedId:"arrowjs/developer-guide/memory-management",id:"arrowjs/developer-guide/memory-management",title:"Notes on Memory Management",description:"Apache Arrow is a performance-optimized architecture, and the foundation of that performance is the approach to memory management. It can be useful to have an understanding of how.",source:"@site/../docs/arrowjs/developer-guide/memory-management.md",sourceDirName:"arrowjs/developer-guide",slug:"/arrowjs/developer-guide/memory-management",permalink:"/docs/arrowjs/developer-guide/memory-management",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/arrowjs/developer-guide/memory-management.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Types",permalink:"/docs/arrowjs/developer-guide/data-types"},next:{title:"Using Predicates",permalink:"/docs/arrowjs/developer-guide/predicates"}},c={},l=[{value:"How Arrow Stores Data",id:"how-arrow-stores-data",level:2}],p={toc:l},d="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"notes-on-memory-management"},"Notes on Memory Management"),(0,a.kt)("p",null,"Apache Arrow is a performance-optimized architecture, and the foundation of that performance is the approach to memory management. It can be useful to have an understanding of how."),(0,a.kt)("h2",{id:"how-arrow-stores-data"},"How Arrow Stores Data"),(0,a.kt)("p",null,'Arrow reads in arrow data as arraybuffer(s) and then creates chunks that are "sub array views" into that big array buffer, and lists of those chunks are then composed into "logical" arrays.'),(0,a.kt)("p",null,"Chunks are created for each column in each RecordBatch."),(0,a.kt)("p",null,'The chunks can be "sliced and diced" by operations on ',(0,a.kt)("inlineCode",{parentName:"p"},"Column"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Table")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"DataFrame")," objects, but are never copied (as long as flattening is not requested) and are conceptually immutable. (There is a low-level ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector.set()")," method however given that it could modify data that is used by multiple objects its use should be reserved for cases where implications are fully understood)."))}m.isMDXComponent=!0}}]);