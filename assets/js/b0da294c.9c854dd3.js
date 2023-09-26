"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9087],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,h=u["".concat(o,".").concat(c)]||u[c]||d[c]||l;return a?n.createElement(h,s(s({ref:t},m),{},{components:a})):n.createElement(h,s({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9625:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},s="glTF - gl Transfer Format",i={unversionedId:"modules/gltf/formats/gltf",id:"modules/gltf/formats/gltf",title:"glTF - gl Transfer Format",description:"- @loaders.gl/gltf",source:"@site/../docs/modules/gltf/formats/gltf.md",sourceDirName:"modules/gltf/formats",slug:"/modules/gltf/formats/gltf",permalink:"/docs/modules/gltf/formats/gltf",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/gltf/formats/gltf.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GLB - glTF Binary Format",permalink:"/docs/modules/gltf/formats/glb"},next:{title:"Parquet",permalink:"/docs/modules/parquet/formats/parquet"}},o={},p=[{value:"Variants",id:"variants",level:2},{value:"Version History",id:"version-history",level:2},{value:"glTF 2.0",id:"gltf-20",level:3},{value:"glTF 1.0",id:"gltf-10",level:3},{value:"glTF Extensions",id:"gltf-extensions",level:2},{value:"Official Extensions",id:"official-extensions",level:2},{value:"KHR_draco_mesh_compression",id:"khr_draco_mesh_compression",level:3},{value:"KHR_lights_punctual",id:"khr_lights_punctual",level:3},{value:"KHR_materials_unlit",id:"khr_materials_unlit",level:3},{value:"KHR_texture_basisu",id:"khr_texture_basisu",level:3},{value:"KHR_texture_transform",id:"khr_texture_transform",level:3},{value:"Custom Extensions",id:"custom-extensions",level:2},{value:"EXT_meshopt_compression",id:"ext_meshopt_compression",level:3},{value:"EXT_feature_metadata",id:"ext_feature_metadata",level:3},{value:"EXT_mesh_features",id:"ext_mesh_features",level:3}],m={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gltf---gl-transfer-format"},"glTF - gl Transfer Format"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"/docs/modules/gltf"},(0,r.kt)("inlineCode",{parentName:"a"},"@loaders.gl/gltf")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html"},"glTF specification"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/GlTF"},"Wikipedia article")))),(0,r.kt)("p",null,'glTF is a standard file format for three-dimensional scenes and models, intended to be a streamlined, interoperable format for the delivery of 3D assets, while minimizing file size and runtime processing by apps. Sometimes described as the "JPEG of 3D."'),(0,r.kt)("p",null,"An open standard developed and maintained by the Khronos Group, it supports 3D model geometry, appearance, scene graph hierarchy, and animation."),(0,r.kt)("h2",{id:"variants"},"Variants"),(0,r.kt)("p",null,"A glTF file uses one of two possible file extensions: .gltf (JSON/ASCII) or .glb (binary). Both .gltf and .glb files may reference external binary and texture resources. Alternatively, both formats may be self-contained by directly embedding binary data buffers (as base64-encoded strings in .gltf files or as raw byte arrays in .glb files)."),(0,r.kt)("h2",{id:"version-history"},"Version History"),(0,r.kt)("h3",{id:"gltf-20"},"glTF 2.0"),(0,r.kt)("p",null,"-GLB was incorporated directly into glTF 2.0."),(0,r.kt)("h3",{id:"gltf-10"},"glTF 1.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GLB was introduced as an extension.")),(0,r.kt)("h2",{id:"gltf-extensions"},"glTF Extensions"),(0,r.kt)("p",null,"glTF extensions can be present in glTF files, and will be present in the parsed JSON. glTF extensions can supported by applications by inspecting the ",(0,r.kt)("inlineCode",{parentName:"p"},"extensions")," fields inside glTF objects, and it is up to each application to handle or ignore them."),(0,r.kt)("p",null,"loaders.gl aims to provide support for glTF extensions that can be handled completely or partially during loading, and article describes glTF extensions that are fully or partially processed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"@loaders.gl/gltf")," classes."),(0,r.kt)("p",null,"Note that many glTF extensions affect aspects that are firmly outside of the scope of loaders.gl (e.g. rendering), and no attempt is made to process those extensions in loaders.gl."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Extension"),(0,r.kt)("th",{parentName:"tr",align:null},"Preprocessed"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#khr_draco_mesh_compression"},"KHR_draco_mesh_compression")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Decompresses draco-compressed geometries")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#ext_meshopt_compression"},"EXT_meshopt_compression")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Decompresses meshopt-compressed geometries")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#khr_texture_basisu"},"KHR_texture_basisu")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds the ability to specify textures using KTX v2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#khr_texture_transform"},"KHR_texture_transform")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds transformation properties (translation, rotation, scale) for TEXCOORD","_"," mesh attribute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KHR_texture_webp"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#ext_mesh_features"},"EXT_mesh_features")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"(In progress) 3D tiles extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#khr_lights_punctual"},"KHR_lights_punctual")),(0,r.kt)("td",{parentName:"tr",align:null},"Y","*"),(0,r.kt)("td",{parentName:"tr",align:null},"Deprecated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#khr_materials_unlit"},"KHR_materials_unlit")),(0,r.kt)("td",{parentName:"tr",align:null},"Y","*"),(0,r.kt)("td",{parentName:"tr",align:null},"Deprecated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#ext_feature_metadata"},"EXT_feature_metadata")),(0,r.kt)("td",{parentName:"tr",align:null},"Y","*"),(0,r.kt)("td",{parentName:"tr",align:null},"Deprecated. 3D tiles extension")))),(0,r.kt)("h2",{id:"official-extensions"},"Official Extensions"),(0,r.kt)("h3",{id:"khr_draco_mesh_compression"},"KHR_draco_mesh_compression"),(0,r.kt)("p",null,"Supports compression of mesh attributes (geometry)."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"GLTFLoader")," by default fully decompresses draco compressed geometries, removing the draco extension and the compressed data from the parsed glTF data structure."),(0,r.kt)("p",null,"Specification: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression"},"KHR_draco_mesh_compression"),"."),(0,r.kt)("p",null,"Parsing Support:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"By adding the ",(0,r.kt)("inlineCode",{parentName:"li"},"decompress: true")," options to the ",(0,r.kt)("inlineCode",{parentName:"li"},"GLTFParser")," any decompressed by the ",(0,r.kt)("inlineCode",{parentName:"li"},"GLTFParser"),"."),(0,r.kt)("li",{parentName:"ul"},"The expanded attributes are placed in the mesh object (effectively making it look as if it had never been compressed)."),(0,r.kt)("li",{parentName:"ul"},"The extension objects are removed from the glTF file.")),(0,r.kt)("p",null,"Encoding Support:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Meshes can be compressed as they are added to the ",(0,r.kt)("inlineCode",{parentName:"li"},"GLTFBuilder"),".")),(0,r.kt)("h3",{id:"khr_lights_punctual"},"KHR_lights_punctual"),(0,r.kt)("p",null,"Supports specification of point light sources and addition of such sources to the scenegraph node."),(0,r.kt)("p",null,"Specification: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_lights_punctual"},"KHR_lights_punctual")),(0,r.kt)("p",null,"Parsing Support:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Any nodes with a ",(0,r.kt)("inlineCode",{parentName:"li"},"KHR_lights_punctual")," extension will get a ",(0,r.kt)("inlineCode",{parentName:"li"},"light")," field with value containing a light definition object with properties defining the light (this object will be resolved by index from the global ",(0,r.kt)("inlineCode",{parentName:"li"},"KHR_lights_punctual")," extension object's ",(0,r.kt)("inlineCode",{parentName:"li"},"lights")," array) ."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"KHR_lights_punctual")," extensions will be removed from all nodes."),(0,r.kt)("li",{parentName:"ul"},"Finally, the global ",(0,r.kt)("inlineCode",{parentName:"li"},"KHR_lights_punctual")," extension (including its light list)) will be removed.")),(0,r.kt)("p",null,"Encoding Support:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"N/A")),(0,r.kt)("h3",{id:"khr_materials_unlit"},"KHR_materials_unlit"),(0,r.kt)("p",null,"Specifies that a material should not be affected by light. Useful for pre-lit materials (e.g. photogrammetry)."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit"},"KHR_materials_unlit")),(0,r.kt)("h3",{id:"khr_texture_basisu"},"KHR_texture_basisu"),(0,r.kt)("p",null,"This extension adds the ability to specify textures using KTX v2 images with Basis Universal supercompression."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"GLTFLoader")," by default fully decompresses compressed textures, removing the basisu extension and the compressed data from the parsed glTF data structure."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_texture_basisu"},"KHR_texture_basisu")),(0,r.kt)("h3",{id:"khr_texture_transform"},"KHR_texture_transform"),(0,r.kt)("p",null,"Many techniques can be used to optimize resource usage for a 3d scene. Chief among them is the ability to minimize the number of textures the GPU must load. To achieve this, many engines encourage packing many objects' low-resolution textures into a single large texture atlas. The region of the resulting atlas that corresponds with each object is then defined by vertical and horizontal offsets, and the width and height of the region."),(0,r.kt)("p",null,"To support this use case, this extension adds offset, rotation, and scale properties to textureInfo structures."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KhronosGroup/glTF/blob/de6db2d6f817586bce9965d320acf03935580b34/extensions/2.0/Khronos/KHR_texture_transform/README.md"},"KHR_texture_transform")),(0,r.kt)("h2",{id:"custom-extensions"},"Custom Extensions"),(0,r.kt)("h3",{id:"ext_meshopt_compression"},"EXT_meshopt_compression"),(0,r.kt)("p",null,"This extension provides a support for the meshopt binary geometry data compression format that is tailored to the common types of data seen in glTF buffers.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"GLTFLoader")," by default fully decompresses meshopt compressed geometries, removing the meshopt extension and the compressed data from the parsed glTF data structure."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_meshopt_compression"},"EXT_meshopt_compression")),(0,r.kt)("h3",{id:"ext_feature_metadata"},"EXT_feature_metadata"),(0,r.kt)("p",null,"3D tiles extension by Cesium. This extension allows batching features for efficient streaming to a client for rendering and interaction."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/CesiumGS/glTF/tree/c38f7f37e894004353c15cd0481bc5b7381ce841/extensions/2.0/Vendor/EXT_feature_metadata"},"EXT_feature_metadata")),(0,r.kt)("h3",{id:"ext_mesh_features"},"EXT_mesh_features"),(0,r.kt)("p",null,"3D tiles extension by Cesium. This extension defines a means of assigning identifiers to geometry and subcomponents of geometry within a glTF 2.0 asset."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/CesiumGS/glTF/tree/c38f7f37e894004353c15cd0481bc5b7381ce841/extensions/2.0/Vendor/EXT_mesh_features"},"EXT_mesh_features")))}d.isMDXComponent=!0}}]);