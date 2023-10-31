"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[3608],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},97553:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={},i="Data Frame Operations",l={unversionedId:"arrowjs/developer-guide/data-frame-operations",id:"arrowjs/developer-guide/data-frame-operations",title:"Data Frame Operations",description:'Part of the power of data frame operations is that they typically do not actually perform any modifications (copying etc) of the underlying data, and ultimately only impact how iteration over that data is done, and what "view" of the data is presented. This allows data frame operations to be extremely performant, even when applied on very big (multi-gigabyte) data aset.',source:"@site/../docs/arrowjs/developer-guide/data-frame-operations.md",sourceDirName:"arrowjs/developer-guide",slug:"/arrowjs/developer-guide/data-frame-operations",permalink:"/docs/arrowjs/developer-guide/data-frame-operations",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/arrowjs/developer-guide/data-frame-operations.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Extracting Data",permalink:"/docs/arrowjs/developer-guide/converting-data"},next:{title:"Data Sources and Sinks",permalink:"/docs/arrowjs/developer-guide/data-sources"}},s={},p=[{value:"Removing Rows",id:"removing-rows",level:2},{value:"Removing Columns",id:"removing-columns",level:2},{value:"Filtering Rows",id:"filtering-rows",level:2},{value:"Counting Rows",id:"counting-rows",level:2},{value:"Sorting",id:"sorting",level:2},{value:"Iterating over a DataFrame (Scanning)",id:"iterating-over-a-dataframe-scanning",level:2},{value:"Writing a <code>next</code> callback for <code>scan()</code>",id:"writing-a-next-callback-for-scan",level:3},{value:"Optimizing <code>scan()</code> performance with <code>bind()</code> callbacks",id:"optimizing-scan-performance-with-bind-callbacks",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-frame-operations"},"Data Frame Operations"),(0,r.kt)("p",null,'Part of the power of data frame operations is that they typically do not actually perform any modifications (copying etc) of the underlying data, and ultimately only impact how iteration over that data is done, and what "view" of the data is presented. This allows data frame operations to be extremely performant, even when applied on very big (multi-gigabyte) data aset.'),(0,r.kt)("p",null,"Note that the Arrow JS ",(0,r.kt)("inlineCode",{parentName:"p"},"Table")," class inherits from the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataFrame")," class which is why the examples in this section can use ",(0,r.kt)("inlineCode",{parentName:"p"},"DataFrame")," methods to ",(0,r.kt)("inlineCode",{parentName:"p"},"Table")," instances."),(0,r.kt)("p",null,"Also, most of the data frame operations do not modify the original ",(0,r.kt)("inlineCode",{parentName:"p"},"Table")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"DataFrame"),', but rather return a new similar object with new filtering or "iteration constraints" applied. So memory is usually not changed or modified during these operations.'),(0,r.kt)("p",null,"References:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Much of the text in this section is adapted from Brian Hulette's ",(0,r.kt)("a",{parentName:"li",href:"https://observablehq.com/@theneuralbit/introduction-to-apache-arrow"},"Introduction to Apache Arrow"))),(0,r.kt)("h2",{id:"removing-rows"},"Removing Rows"),(0,r.kt)("p",null,"A simplest way to remove rows from a data frame mey be use ",(0,r.kt)("inlineCode",{parentName:"p"},"Table.slice(start, end)"),". As usual, rather than actually modifying memory, this operation returns a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Table"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"DataFrame")," with iteration constrained to a sub set of the rows in the original frame."),(0,r.kt)("h2",{id:"removing-columns"},"Removing Columns"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Table.select(keys: String[])")," method drops all columns except the columns with names that match the supplied ",(0,r.kt)("inlineCode",{parentName:"p"},"keys"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"table.select(['name', 'age']); // Drop all colums except name and age\n")),(0,r.kt)("h2",{id:"filtering-rows"},"Filtering Rows"),(0,r.kt)("p",null,'Another way to "remove" rows from data frames is to apply filters. Filters effectively "removes" rows that don\'t fullfill the predicates in the filter. For details see the note below.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const selectedName = 'myname';\n// Remove all rows with name === 'myname'\nconst dataFrame = table.filter(arrow.predicate.col('name').eq(selectedName));\n")),(0,r.kt)("p",null,"The predicates classes provided by arrow allows for the comparison of column values against literals or javascript values (equality, greater or equal than, less or equal than) as well as the creation of composite logical expressions (",(0,r.kt)("inlineCode",{parentName:"p"},"and"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"or")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"not"),") out of individual column comparisons."),(0,r.kt)("p",null,"It is also possible to write custom predicates by supplying an arbitrary JavaScript function to filter a row, however performance is usually best when using the built-in comparison predicates."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that calling ",(0,r.kt)("inlineCode",{parentName:"p"},"filter()")," on a ",(0,r.kt)("inlineCode",{parentName:"p"},"DataFrame")," doesn't actually remove any rows from the underlying data store (it just stores the predicates). It's not until you iterate over the date, e.g. by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"countBy()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"scan()")," that we actually apply the filter on the rows.")),(0,r.kt)("h2",{id:"counting-rows"},"Counting Rows"),(0,r.kt)("p",null,"To count the number of times different values appear in a table, use ",(0,r.kt)("inlineCode",{parentName:"p"},"countBy()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const newTable = table.countBy('column_name');\n")),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"countBy()")," does not return a modified data frame or table, but instead returns a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Table")," that contains two columns, ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"count"),". Each distinct value in the specified column in the original table is listed once in ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),", and the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," field in the same row indicates how many times it was present in the original table."),(0,r.kt)("p",null,"Note that the results are not sorted."),(0,r.kt)("h2",{id:"sorting"},"Sorting"),(0,r.kt)("p",null,"DataFrames do not currently support sorting. To sort you need to move the data back to JavaScript arrays."),(0,r.kt)("h2",{id:"iterating-over-a-dataframe-scanning"},"Iterating over a DataFrame (Scanning)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DataFrame.scan()")," method lets you define a custom function that will be called for each (non-filtered) record in the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataFrame"),"."),(0,r.kt)("p",null,"Note: For simpler use cases, it is recommended to use the Arrow API provided predicates etc rather than writing a custom scan function, as performance will often be better."),(0,r.kt)("h3",{id:"writing-a-next-callback-for-scan"},"Writing a ",(0,r.kt)("inlineCode",{parentName:"h3"},"next")," callback for ",(0,r.kt)("inlineCode",{parentName:"h3"},"scan()")),(0,r.kt)("p",null,"In order to be more efficient, Arrow data is broken up into batches of records (which is what makes it possible to do concatenations despite the columnar layout, and ",(0,r.kt)("inlineCode",{parentName:"p"},"DataFrame.scan()")," does not hide this implementation detail from you."),(0,r.kt)("h3",{id:"optimizing-scan-performance-with-bind-callbacks"},"Optimizing ",(0,r.kt)("inlineCode",{parentName:"h3"},"scan()")," performance with ",(0,r.kt)("inlineCode",{parentName:"h3"},"bind()")," callbacks"),(0,r.kt)("p",null,"In addition to the ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," callback, you can supply a ",(0,r.kt)("inlineCode",{parentName:"p"},"bind")," function for scan to call each time it starts reading from a new ",(0,r.kt)("inlineCode",{parentName:"p"},"RecordBatch"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"scan")," will call these functions as illustrated in the following pseudo-code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"for (const batch of batches) {\n  bind(batch);\n  for (const index in batch) {\n    next(index, batch);\n  }\n}\n")),(0,r.kt)("p",null,"Note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"index")," passed to next only applies to the current RecordBatch, it is not a global index."),(0,r.kt)("li",{parentName:"ul"},"The current ",(0,r.kt)("inlineCode",{parentName:"li"},"RecordBatch")," is passed to ",(0,r.kt)("inlineCode",{parentName:"li"},"next"),", so it is possible to access data without writing a bind function, but there will be a performance penalty if your data has a lot of batches.")))}m.isMDXComponent=!0}}]);