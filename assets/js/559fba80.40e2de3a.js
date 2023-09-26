"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1821],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43450:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},i="Roadmap",l={unversionedId:"arrowjs/roadmap",id:"arrowjs/roadmap",title:"Roadmap",description:"What's Next for Apache Arrow in Javascript",source:"@site/../docs/arrowjs/roadmap.md",sourceDirName:"arrowjs",slug:"/arrowjs/roadmap",permalink:"/docs/arrowjs/roadmap",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/arrowjs/roadmap.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Feature Completeness",id:"feature-completeness",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"roadmap"},"Roadmap"),(0,a.kt)("p",null,"What's Next for Apache Arrow in Javascript"),(0,a.kt)("p",null,"There are a lot of features we'd like to add over the next few Javascript releases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Inline predicates"),": Function calls in the inner loop of a scan over millions of records can be very expensive. We can potentially save that time by generating a new scan function with the predicates inlined when a filter is created.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Cache filter results"),": Right now every time we do a scan on a filtered DataFrame we re-check the predicate on every row. There should be an (optional?) lazily computed index to store the predicate results for subsequent re-use.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Friendlier API"),": I shouldn't have to write a custom scan function just to take a look at the results of a filter! Every DataFrame should have a toJSON() function (See ARROW-2202).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"node.js \u2194 (Python, C++, Java, ...) interaction"),": A big benefit of Arrow's common in-memory format is that different tools can operate on the same memory. Unfortunately we're pretty closed off in the browser, but node doesn't have that problem! Finishing ARROW-1700, node.js Plasma store client should make this type of interaction possible."))),(0,a.kt)("p",null,"Have an idea? Tell us! Generally JIRAs are preferred but we'll take GitHub issues too. If you just want to discuss something, reach out on the mailing list or slack. But PRs are the best of all, we can always use more contributors!"),(0,a.kt)("h2",{id:"feature-completeness"},"Feature Completeness"),(0,a.kt)("p",null,"Ideally each Apache Arrow language binding would offer the same set of features, at least to the extent that the language/platform in question allows. In practice however, not all features have been implemented in all language bindings."),(0,a.kt)("p",null,"In comparison with the C++ Arrow API bindings, there are some missing features in the JavaScript bindings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tensors are not yet supported."),(0,a.kt)("li",{parentName:"ul"},"No explicit support for Apache Arrow Flight")))}m.isMDXComponent=!0}}]);