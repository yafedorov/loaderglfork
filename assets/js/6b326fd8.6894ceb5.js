"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[143],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(r),f=a,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},93579:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={},o="Predicates",c={unversionedId:"arrowjs/api-reference/predicates",id:"arrowjs/api-reference/predicates",title:"Predicates",description:"This documentation reflects Arrow JS v4.0. Needs to be updated for the new Arrow API in v9.0 +.",source:"@site/../docs/arrowjs/api-reference/predicates.md",sourceDirName:"arrowjs/api-reference",slug:"/arrowjs/api-reference/predicates",permalink:"/docs/arrowjs/api-reference/predicates",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/arrowjs/api-reference/predicates.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Field",permalink:"/docs/arrowjs/api-reference/field"},next:{title:"RecordBatchReader",permalink:"/docs/arrowjs/api-reference/record-batch-reader"}},l={},d=[{value:"Value",id:"value",level:2},{value:"Literal",id:"literal",level:2},{value:"Col",id:"col",level:2},{value:"bind(batch : RecordBatch) : Function",id:"bindbatch--recordbatch--function",level:3},{value:"ComparisonPredicate",id:"comparisonpredicate",level:2},{value:"And",id:"and",level:2},{value:"Or",id:"or",level:2},{value:"Equals",id:"equals",level:2},{value:"LTEq",id:"lteq",level:2},{value:"GTEq",id:"gteq",level:2},{value:"Not",id:"not",level:2},{value:"CustomPredicate",id:"custompredicate",level:2}],s={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"predicates"},"Predicates"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This documentation reflects Arrow JS v4.0. Needs to be updated for the new Arrow API in v9.0 +.")),(0,a.kt)("h2",{id:"value"},"Value"),(0,a.kt)("h2",{id:"literal"},"Literal"),(0,a.kt)("h2",{id:"col"},"Col"),(0,a.kt)("p",null,"The Col predicate gets the value of the specified column"),(0,a.kt)("h3",{id:"bindbatch--recordbatch--function"},"bind(batch : RecordBatch) : Function"),(0,a.kt)("p",null,"Returns a more efficient accessor for the column values in this batch, taking local indices."),(0,a.kt)("p",null,"Note: These accessors are typically created in the ",(0,a.kt)("inlineCode",{parentName:"p"},"DataFrame.scan")," bind method, and then used in the the ",(0,a.kt)("inlineCode",{parentName:"p"},"DataFrame.next")," method."),(0,a.kt)("h2",{id:"comparisonpredicate"},"ComparisonPredicate"),(0,a.kt)("h2",{id:"and"},"And"),(0,a.kt)("h2",{id:"or"},"Or"),(0,a.kt)("h2",{id:"equals"},"Equals"),(0,a.kt)("h2",{id:"lteq"},"LTEq"),(0,a.kt)("h2",{id:"gteq"},"GTEq"),(0,a.kt)("h2",{id:"not"},"Not"),(0,a.kt)("h2",{id:"custompredicate"},"CustomPredicate"))}u.isMDXComponent=!0}}]);