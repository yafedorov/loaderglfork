"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[6353],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},63533:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},i="save",s={unversionedId:"modules/core/api-reference/save",id:"modules/core/api-reference/save",title:"save",description:"Needs update",source:"@site/../docs/modules/core/api-reference/save.md",sourceDirName:"modules/core/api-reference",slug:"/modules/core/api-reference/save",permalink:"/docs/modules/core/api-reference/save",draft:!1,editUrl:"https://github.com/uber-web/loaders.gl/tree/master/website/../docs/modules/core/api-reference/save.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"encode",permalink:"/docs/modules/core/api-reference/encode"},next:{title:"fetchFile",permalink:"/docs/modules/core/api-reference/fetch-file"}},l={},p=[{value:"Functions",id:"functions",level:2},{value:"save(url : String | File, writer : Object , options : Object) : Promise.ArrayBuffer| Promi",id:"saveurl--string--file-writer--object--options--object--promisearraybuffer-promi",level:3},{value:"saveSync(url : String , options : Object) : ArrayBuffer | String",id:"savesyncurl--string--options--object--arraybuffer--string",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"save"},"save"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Needs update")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"save")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"saveSync")," function can be used with any writer. ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," takes a ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," and a writer object, checks what type of data that writer prefers to work on (e.g. text, JSON, binary, stream, ...), saves the data in the appropriate way, and passes it to the writer."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"saveurl--string--file-writer--object--options--object--promisearraybuffer-promi"},"save(url : String | File, writer : Object ","[, options : Object]",") : Promise.ArrayBuffer| Promi"),(0,a.kt)("p",null,"se.String"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," function can be used with any writer."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"save")," takes a ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," and a writer object, checks what type of data that writer prefers to work on (e.g. text, JSON, binary, stream, ...), saves the data in the appropriate way, and passes it to the writer."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"url")," - Can be a string, either a data url or a request url, or in Node.js, a file name, or in the browser, a File object."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data")," - saveed data, either in binary or text format."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"writer")," - can be a single writer or an array of writers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," - optional, contains both options for the read process and options for the writer (see documentation of the specific writer)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options.dataType"),"=",(0,a.kt)("inlineCode",{parentName:"li"},"arraybuffer")," - By default reads as binary. Set to 'text' to read as text.")),(0,a.kt)("p",null,"Returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Return value depends on the category")),(0,a.kt)("p",null,"Notes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Any path prefix set by ",(0,a.kt)("inlineCode",{parentName:"li"},"setPathPrefix")," will be appended to relative urls.")),(0,a.kt)("h3",{id:"savesyncurl--string--options--object--arraybuffer--string"},"saveSync(url : String ","[, options : Object]",") : ArrayBuffer | String"),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," except saves and parses data synchronously."),(0,a.kt)("p",null,"Note that for ",(0,a.kt)("inlineCode",{parentName:"p"},"saveSync")," to work, the ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," needs to be saveable synchronously ",(0,a.kt)("em",{parentName:"p"},"and")," the writer used must support synchronous parsing. Synchronous saveing only works on data URLs or files in Node.js. In many cases, the asynchronous ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," is more appropriate."))}d.isMDXComponent=!0}}]);