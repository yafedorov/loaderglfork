"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[480],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,k=m["".concat(d,".").concat(u)]||m[u]||N[u]||l;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7348:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>N,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},o="Overview",i={unversionedId:"modules/json/README",id:"modules/json/README",title:"Overview",description:"The @loaders.gl/json module parses JSON. It can parse arbitrary JSON data but is optimized for:",source:"@site/../docs/modules/json/README.md",sourceDirName:"modules/json",slug:"/modules/json/",permalink:"/docs/modules/json/",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/json/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Binary Image Utilities",permalink:"/docs/modules/images/api-reference/binary-image-api"},next:{title:"Overview",permalink:"/docs/modules/kml/"}},d={},p=[{value:"Installation",id:"installation",level:2},{value:"Loaders and Writers",id:"loaders-and-writers",level:2},{value:"Additional APIs",id:"additional-apis",level:2},{value:"JSON Format Notes",id:"json-format-notes",level:2}],s={toc:p},m="wrapper";function N(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@loaders.gl/json")," module parses JSON. It can parse arbitrary JSON data but is optimized for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"loading tabular data stored in JSON arrays."),(0,r.kt)("li",{parentName:"ul"},"loading tabular geospatial data stored in GeoJSON."),(0,r.kt)("li",{parentName:"ul"},"loading tabular data from various streaming JSON and GeoJSON formats, such as new-line delimited JSON.")),(0,r.kt)("p",null,"The JSON loaders also support batched parsing which can be useful when loading very large tabular JSON files\nto avoid blocking for tens of seconds."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @loaders.gl/core @loaders.gl/json\n")),(0,r.kt)("h2",{id:"loaders-and-writers"},"Loaders and Writers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Exports"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/modules/json/api-reference/json-loader"},(0,r.kt)("inlineCode",{parentName:"a"},"JSONLoader")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/modules/json/api-reference/ndjson-loader"},(0,r.kt)("inlineCode",{parentName:"a"},"NDJSONLoader")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/modules/json/api-reference/geojson-loader"},(0,r.kt)("inlineCode",{parentName:"a"},"GeoJSONLoader")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/modules/json/api-reference/ndgeojson-loader"},(0,r.kt)("inlineCode",{parentName:"a"},"NDGeoJSONLoader")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/modules/json/api-reference/json-writer"},(0,r.kt)("inlineCode",{parentName:"a"},"JSONWriter")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/modules/json/api-reference/geojson-writer"},(0,r.kt)("inlineCode",{parentName:"a"},"GeoJSONWriter")))))),(0,r.kt)("h2",{id:"additional-apis"},"Additional APIs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"/docs/specifications/category-table"},"table category"),"."),(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"/docs/specifications/category-gis"},"GIS category"),".")),(0,r.kt)("h2",{id:"json-format-notes"},"JSON Format Notes"),(0,r.kt)("p",null,"The classic JSON format was designed for simplicity and is supported by standard libraries in many programming languages."),(0,r.kt)("p",null,"Several ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON_streaming"},"JSON Streaming Formats")," (Wikipedia) have emerged, that typically\nplace one JSON object on each line of a file. These are convenient to use when streaming data and are\nsupported by via the ",(0,r.kt)("inlineCode",{parentName:"p"},"NDJSONLoader")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"NDGeoJSONLoader"),"."),(0,r.kt)("p",null,"At the moment, auto-detection between streaming and classic JSON based on file contents\nis not implemented, so two separate loaders are provided.\nThe two loaders look for different file extensions or MIME types as specified in the table below,\nallowing correct distinctions to be made in usage."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Extension"),(0,r.kt)("th",{parentName:"tr",align:null},"MIME Media Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Support"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.json.org/json-en.html"},"JSON")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".json")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"application/json")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"JSONLoader")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://ndjson.org/"},"NewLine Delimited JSON")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".ndjson")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"application/x-ndjson")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NDJSONLoader")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://jsonlines.org/"},"JSON Lines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".jsonl")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"application/x-ldjson")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NDJSONLoader")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc7464"},"JSON Text Sequences")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"application/json-seq")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NDJSONLoader"),". Partial records must not span multiple lines."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://geojson.org/"},"GeoJSON")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".json")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"application/geo+json")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"JSONLoader")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://stevage.github.io/ndgeojson/"},"Newline Delimited GeoJSON")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".ndgeojson")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NDJSONLoader")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://geojson.org/"},"GeoJSON Lines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".geojsonl")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NDJSONLoader")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc8142"},"GeoJSON Text Sequences")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"application/geo+json-seq")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NDJSONLoader")),(0,r.kt)("td",{parentName:"tr",align:null})))))}N.isMDXComponent=!0}}]);