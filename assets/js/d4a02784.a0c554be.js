"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[3400],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,h=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return r?a.createElement(h,c(c({ref:t},m),{},{components:r})):a.createElement(h,c({ref:t},m))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},53148:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={},c="Schema",s={unversionedId:"modules/schema/api-reference/schema",id:"modules/schema/api-reference/schema",title:"Schema",description:"loaders.gl provides a simple serializable schema class to help describe tables and table like data.",source:"@site/../docs/modules/schema/api-reference/schema.md",sourceDirName:"modules/schema/api-reference",slug:"/modules/schema/api-reference/schema",permalink:"/docs/modules/schema/api-reference/schema",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/schema/api-reference/schema.md",tags:[],version:"current",frontMatter:{}},i={},l=[{value:"Schema Deduction",id:"schema-deduction",level:2},{value:"Schema Serialization",id:"schema-serialization",level:2},{value:"Apache Arrow Schemas",id:"apache-arrow-schemas",level:2}],m={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"schema"},"Schema"),(0,n.kt)("p",null,"loaders.gl provides a simple serializable schema class to help describe tables and table like data.\nThe Schema is modelled after Arrow."),(0,n.kt)("h2",{id:"schema-deduction"},"Schema Deduction"),(0,n.kt)("p",null,"Schemas can be deduced, but unless the data format is binary, this can lead to mistakes."),(0,n.kt)("p",null,"For instance, should a column with zip codes in a CSV be treated as strings or numbers? (Most auto detection systems would classify the type as numbers, but most users would prefer for that column to be classified as string, to avoid potential dropping of leading zeroes among other things.)"),(0,n.kt)("h2",{id:"schema-serialization"},"Schema Serialization"),(0,n.kt)("p",null,".."),(0,n.kt)("h2",{id:"apache-arrow-schemas"},"Apache Arrow Schemas"),(0,n.kt)("p",null,"..."))}u.isMDXComponent=!0}}]);