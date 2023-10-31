"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[7082],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(r),u=n,m=h["".concat(i,".").concat(u)]||h[u]||d[u]||s;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[h]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<s;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},25087:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const s={},o="Hash",l={unversionedId:"modules/crypto/api-reference/hash",id:"modules/crypto/api-reference/hash",title:"Hash",description:"Hash is the abstract base class for loaders.gl hash classes.",source:"@site/../docs/modules/crypto/api-reference/hash.md",sourceDirName:"modules/crypto/api-reference",slug:"/modules/crypto/api-reference/hash",permalink:"/docs/modules/crypto/api-reference/hash",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/crypto/api-reference/hash.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/modules/crypto/"},next:{title:"CRC32CHash",permalink:"/docs/modules/crypto/api-reference/crc32-hash"}},i={},c=[{value:"Fields",id:"fields",level:2},{value:"<code>name</code>: string",id:"name-string",level:4},{value:"<code>isSupported</code>: boolean",id:"issupported-boolean",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>preload()</code>",id:"preload",level:4},{value:"<code>hash()</code>",id:"hash-1",level:4},{value:"<code>hashSync()</code>",id:"hashsync",level:4},{value:"<code>hashInBactches()</code>",id:"hashinbactches",level:4}],p={toc:c},h="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hash"},"Hash"),(0,n.kt)("p",{class:"badges"},(0,n.kt)("img",{src:"https://img.shields.io/badge/From-v2.3-blue.svg?style=flat-square",alt:"From-v3.0"})),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Hash")," is the abstract base class for loaders.gl hash classes."),(0,n.kt)("h2",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"name-string"},(0,n.kt)("inlineCode",{parentName:"h4"},"name"),": string"),(0,n.kt)("p",null,"The name of the hash algorithm"),(0,n.kt)("h4",{id:"issupported-boolean"},(0,n.kt)("inlineCode",{parentName:"h4"},"isSupported"),": boolean"),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h4",{id:"preload"},(0,n.kt)("inlineCode",{parentName:"h4"},"preload()")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"preload(): Promise<void>")),(0,n.kt)("p",null,"Asynchronously loads required libraries. For some hash classes this must be completed before\n",(0,n.kt)("inlineCode",{parentName:"p"},"hashSync()")," is available."),(0,n.kt)("h4",{id:"hash-1"},(0,n.kt)("inlineCode",{parentName:"h4"},"hash()")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"  hash.hash(data: ArrayBuffer, encoding: 'hex' | 'base64'): Promise<ArrayBuffer>\n")),(0,n.kt)("p",null,"Asynchronously hashes data."),(0,n.kt)("h4",{id:"hashsync"},(0,n.kt)("inlineCode",{parentName:"h4"},"hashSync()")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"  hash.hashSync(data: ArrayBuffer, encoding: 'hex' | 'base64'): ArrayBuffer\n")),(0,n.kt)("p",null,"Synchronously hashes data."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"For some hash sub classes, ",(0,n.kt)("inlineCode",{parentName:"p"},"preload()")," must have been called and completed before\nsynchronous operations are available.")),(0,n.kt)("h4",{id:"hashinbactches"},(0,n.kt)("inlineCode",{parentName:"h4"},"hashInBactches()")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"  hash.hashBatches(data: AsyncIterable<ArrayBuffer>, encoding: 'hex' | 'base64'): AsyncIterable<ArrayBuffer>\n")),(0,n.kt)("p",null,"Asynchronously hashes data in batches."),(0,n.kt)("p",null,"If the underlying hashion does not support streaming hashion,\nthe incoming data will be concatenated into a single ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrayBuffer"),"\nand a single hashed batch will be yielded."))}d.isMDXComponent=!0}}]);