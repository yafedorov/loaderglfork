"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1401],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(a),f=n,c=m["".concat(p,".").concat(f)]||m[f]||u[f]||l;return a?r.createElement(c,o(o({ref:t},d),{},{components:a})):r.createElement(c,o({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},49766:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={},o="DBFLoader",i={unversionedId:"modules/shapefile/api-reference/dbf-loader",id:"modules/shapefile/api-reference/dbf-loader",title:"DBFLoader",description:"A sub loader for the .dbf (attributes/properties) file component of a shapefile. This is essentially a loader for the legacy dBase 7 database format.",source:"@site/../docs/modules/shapefile/api-reference/dbf-loader.md",sourceDirName:"modules/shapefile/api-reference",slug:"/modules/shapefile/api-reference/dbf-loader",permalink:"/docs/modules/shapefile/api-reference/dbf-loader",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/shapefile/api-reference/dbf-loader.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SHPLoader",permalink:"/docs/modules/shapefile/api-reference/shp-loader"},next:{title:"Overview",permalink:"/docs/modules/tiles/"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Format Summary",id:"format-summary",level:2}],d={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dbfloader"},"DBFLoader"),(0,n.kt)("p",{class:"badges"},(0,n.kt)("img",{src:"https://img.shields.io/badge/From-v2.3-blue.svg?style=flat-square",alt:"From-v2.3"})),(0,n.kt)("p",null,"A sub loader for the ",(0,n.kt)("inlineCode",{parentName:"p"},".dbf")," (attributes/properties) file component of a shapefile. This is essentially a loader for the legacy dBase 7 database format."),(0,n.kt)("p",null,"Note: Most applications will want to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"ShapefileLoader")," instead of this loader."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Loader"),(0,n.kt)("th",{parentName:"tr",align:null},"Characteristic"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"File Format"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/modules/shapefile/formats/shapefile"},"Shapefile"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Data Format"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/specifications/category-table"},"Table"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"File Extension"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},".dbf"),",")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"File Type"),(0,n.kt)("td",{parentName:"tr",align:null},"Binary")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Supported APIs"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"load"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"parse"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"parseSync"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Decoder Type"),(0,n.kt)("td",{parentName:"tr",align:null},"Synchronous")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Worker Thread Support"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"DBFLoader")," parses feature attributes from the Shapefile format."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import {DBFLoader} from '@loaders.gl/shapefile';\nimport {load} from '@loaders.gl/core';\n\nconst options = {\n  dbf: {\n    encoding: 'utf8'\n  }\n};\nconst data = await load(url, DBFLoader, options);\n// [{foo: null}, {foo: 'blue'}, {foo: 'green'}];\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"encoding"),": text encoding of DBF file: usually either ",(0,n.kt)("inlineCode",{parentName:"li"},"utf8"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"ascii"),"/",(0,n.kt)("inlineCode",{parentName:"li"},"windows-1252"),". For Shapefiles, there's often a ",(0,n.kt)("inlineCode",{parentName:"li"},".cpg")," file designating the encoding used.")),(0,n.kt)("h2",{id:"format-summary"},"Format Summary"),(0,n.kt)("p",null,"ESRI Shapefiles are a popular file format for storing geospatial vector data.\nThe format consists of a number of files that must be stored together and with\nthe same file name. Files with extensions ",(0,n.kt)("inlineCode",{parentName:"p"},".shp"),", ",(0,n.kt)("inlineCode",{parentName:"p"},".shx"),", ",(0,n.kt)("inlineCode",{parentName:"p"},".dbf")," must exist;\nadditional files with other extensions such as ",(0,n.kt)("inlineCode",{parentName:"p"},".prj")," and ",(0,n.kt)("inlineCode",{parentName:"p"},".cpg")," may exist."))}u.isMDXComponent=!0}}]);