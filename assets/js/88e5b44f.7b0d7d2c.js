"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8354],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=n,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},97379:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={},i="XMLLoader",o={unversionedId:"modules/xml/api-reference/xml-loader",id:"modules/xml/api-reference/xml-loader",title:"XMLLoader",description:"The XMLLoader parses XML-encoded data.",source:"@site/../docs/modules/xml/api-reference/xml-loader.md",sourceDirName:"modules/xml/api-reference",slug:"/modules/xml/api-reference/xml-loader",permalink:"/docs/modules/xml/api-reference/xml-loader",draft:!1,editUrl:"https://github.com/uber-web/loaders.gl/tree/master/website/../docs/modules/xml/api-reference/xml-loader.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WMSCapabilitiesLoader",permalink:"/docs/modules/wms/api-reference/wms-capabilities-loader"},next:{title:"ZipLoader",permalink:"/docs/modules/zip/api-reference/zip-loader"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Data Format",id:"data-format",level:2},{value:"Options",id:"options",level:2},{value:"Attributions",id:"attributions",level:2}],s={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"xmlloader"},"XMLLoader"),(0,n.kt)("p",{class:"badges"},(0,n.kt)("img",{src:"https://img.shields.io/badge/From-v3.3-blue.svg?style=flat-square",alt:"From-v3.3"}),(0,n.kt)("img",{src:"https://img.shields.io/badge/-BETA-teal.svg",alt:"BETA"})),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"XMLLoader")," parses XML-encoded data."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Loader"),(0,n.kt)("th",{parentName:"tr",align:null},"Characteristic"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"File Extension"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},".xml"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MIME Type"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"application/xml"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"text/xml"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"File Type"),(0,n.kt)("td",{parentName:"tr",align:null},"Text")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"File Format"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/xml/"},"eXtensible Markup Language"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Data Format"),(0,n.kt)("td",{parentName:"tr",align:null},"Free format data structure")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Decoder Type"),(0,n.kt)("td",{parentName:"tr",align:null},"Synchronous")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Worker Thread Support"),(0,n.kt)("td",{parentName:"tr",align:null},"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Streaming Support"),(0,n.kt)("td",{parentName:"tr",align:null},"No")))),(0,n.kt)("p",null,"The goal of the ",(0,n.kt)("inlineCode",{parentName:"p"},"XMLLoader")," is to make it easy for JavaScript applications to access XML formatted data.\nIt is not intended to be a tool for advanced manipulation of XML data, and options provided are focused\non making the returned data easier to use in JavaScript applications."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Load XML data into a javascript data structure and preserve the original structure"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import {XMLLoader} from '@loaders.gl/xml';\nimport {load} from '@loaders.gl/core';\n\nconst data = await load(url, XMLLoader);\n")),(0,n.kt)("p",null,'Load XML data into a javascript data structure and set options that make the returned data more "JavaScript friendly":'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import {XMLLoader} from '@loaders.gl/xml';\nimport {load} from '@loaders.gl/core';\n\nconst data = await load(url, XMLLoader, {xml: {uncapitalizeKeys: true, removeNSPrefix: true}});\n")),(0,n.kt)("h2",{id:"data-format"},"Data Format"),(0,n.kt)("p",null,"Unstructured, untyped data in the form a tree of JavaScrip objects representing the hierarchy of tags in the XML file."),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Option"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"uncapitalizeKeys")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:null},'XML tags are typically "PascalCase", JavaScript and JSON prefers "camelCase" fields. This setting uncapitalizes all keys in the parsed data (e.g. ',(0,n.kt)("inlineCode",{parentName:"td"},"ValueList")," => ",(0,n.kt)("inlineCode",{parentName:"td"},"valueList"),").")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"removeNSPrefix")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:null},"XML tags sometimes have namespace prefixes. These namespaces are inconvenient in JavaScript field names and can be stripped by setting this option (e.g. ",(0,n.kt)("inlineCode",{parentName:"td"},"ogc:Feature")," -> ",(0,n.kt)("inlineCode",{parentName:"td"},"Feature"),").")))),(0,n.kt)("p",null,"Remarks:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It is possible to pass options to the underlying parser, currently ",(0,n.kt)("inlineCode",{parentName:"li"},"fast-xml-parser"),", however there are no guarantees that loaders.gl will continue to use this underlying parser or continue to support those options.")),(0,n.kt)("h2",{id:"attributions"},"Attributions"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"XMLLoader")," is a wrapper around ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/NaturalIntelligence/fast-xml-parser"},(0,n.kt)("inlineCode",{parentName:"a"},"fast-xml-parser")),"."))}u.isMDXComponent=!0}}]);