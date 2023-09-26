"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1992],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),l=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,v=d["".concat(o,".").concat(m)]||d[m]||u[m]||s;return r?a.createElement(v,i(i({ref:t},p),{},{components:r})):a.createElement(v,i({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[d]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<s;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57670:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const s={},i="CSWService",c={unversionedId:"modules/wms/api-reference/csw-service",id:"modules/wms/api-reference/csw-service",title:"CSWService",description:"ogc-logo",source:"@site/../docs/modules/wms/api-reference/csw-service.md",sourceDirName:"modules/wms/api-reference",slug:"/modules/wms/api-reference/csw-service",permalink:"/docs/modules/wms/api-reference/csw-service",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/wms/api-reference/csw-service.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/modules/wms/"},next:{title:"WMSService",permalink:"/docs/modules/wms/api-reference/wms-service"}},o={},l=[{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"constructor()",id:"constructor",level:3},{value:"getCapabilities()",id:"getcapabilities",level:3},{value:"getServiceDirectory()",id:"getservicedirectory",level:3}],p={toc:l},d="wrapper";function u(e){let{components:t,...s}=e;return(0,n.kt)(d,(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cswservice"},"CSWService"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ogc-logo",src:r(63411).Z,width:"119",height:"60"})),(0,n.kt)("p",{class:"badges"},(0,n.kt)("img",{src:"https://img.shields.io/badge/From-v3.4-blue.svg?style=flat-square",alt:"From-3.4"}),"\xa0",(0,n.kt)("img",{src:"https://img.shields.io/badge/-BETA-teal.svg",alt:"BETA"})),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"CSWService")," class provides a type safe API for what "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type safe methods to call and parse results (and errors) from a CSW service's endpoints"),(0,n.kt)("li",{parentName:"ul"},"In particular the big ",(0,n.kt)("inlineCode",{parentName:"li"},"GetCapabilities")," metadata is normalized into a fully typed data structure.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"CSWService")," generates URLs with URL parameters intended to be used with HTTP GET requests against a CSW server. The OGC CSW standard also allows CSW services to accept XML payloads with HTTP POST messages, however generation of such XML payloads is not supported by this class.")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"CSWService")," instance provides type safe methods that make calls to the service and parse the responses."),(0,n.kt)("p",null,"Get a normalized array of all the services and resources referenced by this catalog server:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"  const cswService = new CSWService({url: CSW_SERVICE_URL});\n  const serviceDirectory = await cswService.getServiceDirectory({includeUnknown: true});\n  console.log(serviceDirectory);\n")),(0,n.kt)("p",null,"Capabilities metadata can be queried: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"  const cswService = new CSWService({url: CSW_SERVICE_URL});\n  const capabilities = await cswService.getCapabilities({});\n  // Check capabilities\n")),(0,n.kt)("p",null,"Custom fetch options, such as HTTP headers, and loader-specific options can be specified via the\nstandard loaders.gl ",(0,n.kt)("inlineCode",{parentName:"p"},"loadOptions")," argument, which is forwarded to all load and parse operations:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"  const cswService = new CSWService({url: CSW_SERVICE_URL, loadOptions: {\n    fetch: {\n      headers: {\n        Authentication: 'Bearer abc...'\n      }\n    }\n  }});\n\n  const serviceDirectory = await cswService.getServiceDirectory();\n")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"constructor"},"constructor()"),(0,n.kt)("p",null,"Creates a ",(0,n.kt)("inlineCode",{parentName:"p"},"CSWService")," instance"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export type CSWServiceProps = {\n  url: string; // Base URL to the service\n  loadOptions?: LoaderOptions; // Passed to loaders used by CSWService methods\n};\n\nconstructor(props: CSWServiceProps)\n")),(0,n.kt)("h3",{id:"getcapabilities"},"getCapabilities()"),(0,n.kt)("p",null,"Get Capabilities"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"async getCapabilities(\n  cswParameters?: CSWGetCapabilitiesParameters,\n  vendorParameters?: Record<string, unknown>\n): Promise<CSWCapabilities>\n")),(0,n.kt)("h3",{id:"getservicedirectory"},"getServiceDirectory()"),(0,n.kt)("p",null,"Get a list of all service exposed by this catalog server."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"async getServiceDirectory(\n  options: CSWGetMapParameters, \n  vendorParameters?: Record<string, unknown>\n): Promise<Service[]>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export type CSWGetMapParameters = {\n  includeUnknown: boolean; // Include services and resources that loaders.gl cannot handle\n};\n")))}u.isMDXComponent=!0},63411:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ogc-logo-60-8ee2c25a50ccc14293453512c707a0c4.png"}}]);