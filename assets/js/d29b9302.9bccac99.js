"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[6881],{3905:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>g});var n=a(67294);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function t(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?t(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,n,o=function(e,r){if(null==e)return{};var a,n,o={},t=Object.keys(e);for(n=0;n<t.length;n++)a=t[n],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)a=t[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var r=n.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},p=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var a=e.components,o=e.mdxType,t=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),k=o,g=c["".concat(s,".").concat(k)]||c[k]||u[k]||t;return a?n.createElement(g,i(i({ref:r},p),{},{components:a})):n.createElement(g,i({ref:r},p))}));function g(e,r){var a=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var t=a.length,i=new Array(t);i[0]=k;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<t;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},95469:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const t={},i="Using Worker Loaders",l={unversionedId:"developer-guide/using-worker-loaders",id:"developer-guide/using-worker-loaders",title:"Using Worker Loaders",description:"Most loaders.gl loaders can perform parsing on JavaScript worker threads.",source:"@site/../docs/developer-guide/using-worker-loaders.md",sourceDirName:"developer-guide",slug:"/developer-guide/using-worker-loaders",permalink:"/docs/developer-guide/using-worker-loaders",draft:!1,editUrl:"https://github.com/uber-web/loaders.gl/tree/master/website/../docs/developer-guide/using-worker-loaders.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Loaders",permalink:"/docs/developer-guide/using-loaders"},next:{title:"Using Batched Loaders",permalink:"/docs/developer-guide/using-streaming-loaders"}},s={},d=[{value:"Processing Data on Workers",id:"processing-data-on-workers",level:2},{value:"Parsing data on Workers",id:"parsing-data-on-workers",level:2},{value:"Loading Files in Parallel using Worker Loaders",id:"loading-files-in-parallel-using-worker-loaders",level:2},{value:"Disabling Worker Loaders",id:"disabling-worker-loaders",level:2},{value:"Disabling Reuse of Workers",id:"disabling-reuse-of-workers",level:2},{value:"Concurrency Level and Worker Reuse",id:"concurrency-level-and-worker-reuse",level:2},{value:"ArrayBuffer Neutering",id:"arraybuffer-neutering",level:2},{value:"Specifying Worker Script URLs (Advanced)",id:"specifying-worker-script-urls-advanced",level:2},{value:"Composite Loaders and Workers (Advanced)",id:"composite-loaders-and-workers-advanced",level:2},{value:"Debugging Worker Loaders (Advanced)",id:"debugging-worker-loaders-advanced",level:2}],p={toc:d},c="wrapper";function u(e){let{components:r,...a}=e;return(0,o.kt)(c,(0,n.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-worker-loaders"},"Using Worker Loaders"),(0,o.kt)("p",null,"Most loaders.gl loaders can perform parsing on JavaScript worker threads.\nThis means that the main thread will not block during parsing and can continue\nto respond to user interactions or do parallel processing."),(0,o.kt)("p",null,"Worker threads can also run in parallel, increasing your application's performance\nwhen loading parsing many files in parallel."),(0,o.kt)("p",null,"Note that worker thread loading is not always the best choice since the transfer of\ndata between workers and the main thread is only efficient if the data is predominantly\nbinary."),(0,o.kt)("p",null,"When worker thread loading is not offered in a specific loader it is usually\nbecause it would not provide any performance benefits."),(0,o.kt)("p",null,"Another advantage when using pure worker loaders is that the code required to\nparse a format is not bundled into the application but loaded on demand. This is\nparticularly useful when adding loaders that are only used occasionally by your\napplication."),(0,o.kt)("p",null,"More details on advantages and complications with worker thread based loading the\n",(0,o.kt)("a",{parentName:"p",href:"./concepts/worker-threads"},"Worker Threads")," article in the concepts section."),(0,o.kt)("h2",{id:"processing-data-on-workers"},"Processing Data on Workers"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"processOnWorker")," function in ",(0,o.kt)("inlineCode",{parentName:"p"},"@loaders.gl/worker-utils")," is used with worker objects\nexported by modules like ",(0,o.kt)("inlineCode",{parentName:"p"},"@loaders.gl/compression")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@loaders.gl/crypto")," to move\nprocessing intensive tasks to workers."),(0,o.kt)("h2",{id:"parsing-data-on-workers"},"Parsing data on Workers"),(0,o.kt)("h2",{id:"loading-files-in-parallel-using-worker-loaders"},"Loading Files in Parallel using Worker Loaders"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DracoLoader")," is an example of a worker enabled loader.\nIt parses data on worker threads by default. To load two Draco encoded meshes\n",(0,o.kt)("em",{parentName:"p"},"in parallel")," on worker threads, just use the ",(0,o.kt)("inlineCode",{parentName:"p"},"DracoLoader")," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {load} from '@loaders.gl/core';\nimport {DracoLoader} from '@loaders.gl/draco';\n\nasync function loadInParallel(url1, url2) {\n  const [data1, data2] = await Promise.all([load(url1, DracoLoader), load(url2, DracoLoader)]);\n}\n")),(0,o.kt)("h2",{id:"disabling-worker-loaders"},"Disabling Worker Loaders"),(0,o.kt)("p",null,"Applications can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"worker: false")," option to disable worker loaders, for instance to simplify debugging of parsing issues:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"async function loadWithoutWorker(url1) {\n  const data = await load(url1, DracoLoader, {worker: false});\n}\n")),(0,o.kt)("h2",{id:"disabling-reuse-of-workers"},"Disabling Reuse of Workers"),(0,o.kt)("p",null,"Applications reuse already created workers by default. To avoid ",(0,o.kt)("inlineCode",{parentName:"p"},"enlarge memory arrays")," error it is really nesessary to disable it if you need to load multiple datasets in a sequence.\nThis functionality can be disabled by ",(0,o.kt)("inlineCode",{parentName:"p"},"reuseWorkers: false")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"async function loadwWithoutWorker(url1) {\n  const data = await load(url1, DracoLoader, {worker: true, reuseWorkers: false});\n}\n")),(0,o.kt)("h2",{id:"concurrency-level-and-worker-reuse"},"Concurrency Level and Worker Reuse"),(0,o.kt)("p",null,"Concurrency - The ",(0,o.kt)("inlineCode",{parentName:"p"},"options.maxConcurrency")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"option.maxMobileConcurrency")," options can be adjusted to define how many worker instances should be created for each format. Note that setting this higher than roughly the number CPU cores on your current machine will not provide much benefit and may create extra overhead."),(0,o.kt)("p",null,"Worker reuse - Workers threads can occupy memoery and"),(0,o.kt)("h2",{id:"arraybuffer-neutering"},"ArrayBuffer Neutering"),(0,o.kt)("p",null,"Be aware that when calling worker loaders, binary data is transferred from the calling thread to the worker thread. This means that if you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"parse"),", any ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrayBuffer"),' parameter you pass in to the will be "neutered" and no longer be accessible in the calling thread.'),(0,o.kt)("p",null,"Most applications will not need to do further processing on the raw binary data after it has been parsed so this is rarely an issue, but if you do, you may need to copy the data before parsing, or disable worker loading (see above)."),(0,o.kt)("h2",{id:"specifying-worker-script-urls-advanced"},"Specifying Worker Script URLs (Advanced)"),(0,o.kt)("p",null,"In JavaScript, worker threads are loaded from separate scripts files and are typically not part of the main application bundle. For ease-of-use, loaders.gl provides a default set of pre-built worker threads which are published on loaders.gl npm distribution from ",(0,o.kt)("inlineCode",{parentName:"p"},"unpck.com")," CDN (Content Delivery Network)."),(0,o.kt)("p",null,"As an advanced option, it is possible to for application to specify alternate URLs for loading a pre-built worker loader instance."),(0,o.kt)("p",null,"This can be useful e.g. when building applications that cannot access CDNs or when creating highly customized application builds, or doing in-depth debugging."),(0,o.kt)("h2",{id:"composite-loaders-and-workers-advanced"},"Composite Loaders and Workers (Advanced)"),(0,o.kt)("p",null,"loaders.gl supports sub-loader invocation from worker loaders. This is somewhat experimental"),(0,o.kt)("p",null,"A worker loader starts a seperate thread with a javascript bundle that only contains the code for that loader, so a worker loader needs to call the main thread (and indirectly, potentially another worker thread with another worrker loader) to parse using a sub-loader, properly transferring data into and back from the other thread."),(0,o.kt)("h2",{id:"debugging-worker-loaders-advanced"},"Debugging Worker Loaders (Advanced)"),(0,o.kt)("p",null,"Debugging worker loaders is tricky. While it is always possible to specify ",(0,o.kt)("inlineCode",{parentName:"p"},"options.worker: false")," which helps in many situations, there are cases where the worker loader itself must be debugged."),(0,o.kt)("p",null,"TBA - There is an ambition to provide better support for debugging worker loaders:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pre-build non-minified versions of workers, and provide option to easily select those."),(0,o.kt)("li",{parentName:"ul"},"Let loaders.gl developers easily switch between CDN and locally built workers."),(0,o.kt)("li",{parentName:"ul"},"...")))}u.isMDXComponent=!0}}]);