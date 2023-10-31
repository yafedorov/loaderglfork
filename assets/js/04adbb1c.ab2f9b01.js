"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[4440],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,g=m["".concat(l,".").concat(c)]||m[c]||u[c]||s;return r?a.createElement(g,o(o({ref:t},d),{},{components:r})):a.createElement(g,o({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},11553:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={},o="Compressed Textures",i={unversionedId:"modules/textures/formats/compressed-textures",id:"modules/textures/formats/compressed-textures",title:"Compressed Textures",description:'Compressed textures are different from compressed images in that they do not have to be decompressed, they can be used directly by a supporting GPU. However, a compressed texture typically consists of a collection of compressed subimages, representing mipmaps etc. These compressed subimages are stored as an array of "binary blobs" in a container file. Only the container file is parsed, extracting metadata and the binary buffers representing subimages. The binary subimages can then be passed directly to a GPU that understands how to read pixels directly from them without decompressing them first.',source:"@site/../docs/modules/textures/formats/compressed-textures.md",sourceDirName:"modules/textures/formats",slug:"/modules/textures/formats/compressed-textures",permalink:"/docs/modules/textures/formats/compressed-textures",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/textures/formats/compressed-textures.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Shapefile",permalink:"/docs/modules/shapefile/formats/shapefile"},next:{title:"CSW - Catalog Service - Web",permalink:"/docs/modules/wms/formats/csw"}},l={},p=[{value:"Performance Considerations",id:"performance-considerations",level:2},{value:"Container Formats",id:"container-formats",level:2},{value:"KTX (Khronos Texture)",id:"ktx-khronos-texture",level:3},{value:"DDS (DirectDraw Surface)",id:"dds-directdraw-surface",level:3},{value:"PVR (PowerVR)",id:"pvr-powervr",level:3},{value:"Compression Formats",id:"compression-formats",level:2},{value:"Recommnended Formats",id:"recommnended-formats",level:3},{value:"Using Compressed Textures",id:"using-compressed-textures",level:2},{value:"Using compressed textures in JS",id:"using-compressed-textures-in-js",level:3},{value:"Using Compressed Textures in luma.gl",id:"using-compressed-textures-in-lumagl",level:3},{value:"Using Compressed Textures in raw WebGL",id:"using-compressed-textures-in-raw-webgl",level:3},{value:"WebGL Extensions",id:"webgl-extensions",level:3},{value:"Using Compressed Textures in WebGPU",id:"using-compressed-textures-in-webgpu",level:3},{value:"Creating Compressed Textures",id:"creating-compressed-textures",level:2},{value:"IP and Patent Considerations",id:"ip-and-patent-considerations",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"compressed-textures"},"Compressed Textures"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Compressed textures"),' are different from compressed images in that they do not have to be decompressed, they can be used directly by a supporting GPU. However, a compressed texture typically consists of a collection of compressed subimages, representing mipmaps etc. These compressed subimages are stored as an array of "binary blobs" in a container file. Only the container file is parsed, extracting metadata and the binary buffers representing subimages. The binary subimages can then be passed directly to a GPU that understands how to read pixels directly from them without decompressing them first.'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Supercompressed textures")," are an intermediate format whose subimages are compressed in a common format. This format can be cheaply transcoded on to a real compressed texture format supported on the current client, without decompressing and recompressing the texture. This allows a single supercompressed texture to be portably used on multiple platforms even though those platforms do not support the same compressed texture formats."),(0,n.kt)("h2",{id:"performance-considerations"},"Performance Considerations"),(0,n.kt)("p",null,"Advantages:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Compressed textures can allow a lot more textures (~4x) to be stored in the same amount of GPU memory, which can make a big difference, decreasing memory bandwidth use, or allowing more detail, also mobile devices tend to crash when memory fills up."),(0,n.kt)("li",{parentName:"ul"},"Compressed textures do not need to be decoded before use which reduces CPU load, noticable when many textures are loaded."),(0,n.kt)("li",{parentName:"ul"},"Compressed textures include mipmaps, further reducing CPU load by avoiding mipmap generation step, noticable when many textures are loaded.")),(0,n.kt)("p",null,"On the downside:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Compressed textures can be somewhat bigger and slower than JPEGs to load over the network. Actual number should be verified but as an example, compressed texture formats might achieve about 4-6x compression, compared to say 15x compression for JPEG."),(0,n.kt)("li",{parentName:"ul"},"Compression tends to be relatively slow. In combination with some IP issues this usually makes it impractical to create GPU compressed textures on the fly."),(0,n.kt)("li",{parentName:"ul"},"Since different devices have different GPUs that support different compressed texture formats, one typically has to provide compressed textures in multiple formats and decide which ones to load at runtime (although basis avoids this problem).")),(0,n.kt)("h2",{id:"container-formats"},"Container Formats"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"http://www.devans.xyz/2017/04/04/texture-containers.html"},"Texture Containers")," This section is based on the information in Dave Evan's helpful Texture Containers article, please refer to it for additional details.")),(0,n.kt)("p",null,"Non-texture image formats do not support storing mipmap chains. When loading a JPG or a PNG, mipmaps must be generated by resizing the original image repeatedly for each required mipmap level."),(0,n.kt)("p",null,"In contrast, a single texture container can store all the data required for an entire texture, mipmaps, array layers or cubemap faces. Generating mipmaps offline is important if you use compressed textures, as it\u2019s generally impractical to generate compressed textures at runtime."),(0,n.kt)("p",null,"The main container formats for compressed textures are the Khronos Texture format (KTX) and Microsoft's DirectDraw Surface (DDS). KTX, being a standard, is better specified and therefore recommended."),(0,n.kt)("h3",{id:"ktx-khronos-texture"},"KTX (Khronos Texture)"),(0,n.kt)("p",null,"The KTX format is a Khronos Group standard for storing textures. It can store 1D, 2D, 3D, Cubemaps and Array Textures, along with any number of mipmaps for these textures. This makes it ideal for storing almost any kind of texture you could want."),(0,n.kt)("p",null,"The fields in the KTX header are directly compatible with other Khronos standards such as WebGL. The texture data is described in the ",(0,n.kt)("inlineCode",{parentName:"p"},"glType"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"glFormat"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"glInternalFormat"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"glBaseInternalFormat")," header fields. These should match up with the parameters to the ",(0,n.kt)("inlineCode",{parentName:"p"},"gl[Compressed]Tex[Sub]Image*")," calls used to submit each texture mipmap level\u2019s data."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://github.khronos.org/KTX-Specification"},"Khronos KTX Specification")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/KhronosGroup/KTX-Software"},"Khronos KTX Software"))),(0,n.kt)("h3",{id:"dds-directdraw-surface"},"DDS (DirectDraw Surface)"),(0,n.kt)("p",null,"The DDS format is in common use for storing textures (despite DirectDraw being long deprecated). Originally only 2D textures were supported, but the D3D10 header extension added support for texture arrays and D3D10+ features. The format is partially documented on MSDN."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/win32/direct3ddds/dx-graphics-dds-pguide"},"MSDN: Programming Guide for DDS"))),(0,n.kt)("h3",{id:"pvr-powervr"},"PVR (PowerVR)"),(0,n.kt)("p",null,"The PVR texture compression format defines its own container"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://cdn.imgtec.com/sdk-documentation/PVR+File+Format.Specification.pdf"},"http://cdn.imgtec.com/sdk-documentation/PVR+File+Format.Specification.pdf")),(0,n.kt)("h2",{id:"compression-formats"},"Compression Formats"),(0,n.kt)("p",null,"As mentioned the actual compressed subimages are not parsed or modified by loaders.gl, however loaders.gl attempts to identify the formats using metadata and return the appropiate format fields to facilitate use in WebGL and WebGPU."),(0,n.kt)("p",null,"The following is a list of the most common compressed texture formats, which loaders.gl can properly tag:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Format"),(0,n.kt)("th",{parentName:"tr",align:null},"aka"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/S3_Texture_Compression"},(0,n.kt)("inlineCode",{parentName:"a"},"S3TC"))),(0,n.kt)("td",{parentName:"tr",align:null},"DXTn, DXTC, or BCn")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/PVRTC"},(0,n.kt)("inlineCode",{parentName:"a"},"PVRTC"))),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Ericsson_Texture_Compression"},(0,n.kt)("inlineCode",{parentName:"a"},"ETC"))),(0,n.kt)("td",{parentName:"tr",align:null},"ETC1, ETC2, EAC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.khronos.org/opengl/wiki/ASTC_Texture_Compression"},(0,n.kt)("inlineCode",{parentName:"a"},"ASTC"))),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ATC")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"recommnended-formats"},"Recommnended Formats"),(0,n.kt)("p",null,"The following could be a starting point for choosing texture formats"),(0,n.kt)("p",null,"Desktop:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"BC3"),"(",(0,n.kt)("inlineCode",{parentName:"li"},"DXT5"),") - transparent textures with full alpha range"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"BC1"),"(",(0,n.kt)("inlineCode",{parentName:"li"},"DXT1"),") - opaque textures")),(0,n.kt)("p",null,"iOS:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"PVR4")," - transparent textures with alpha"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"PVR2")," - opaque textures")),(0,n.kt)("p",null,"Android:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ASTC_4x4"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"ASTC8x8")," - transparent textures with full alpha range"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ETC1")," - opaque textures")),(0,n.kt)("h2",{id:"using-compressed-textures"},"Using Compressed Textures"),(0,n.kt)("p",null,"Compressed textures are designed to be directly uploaded to GPUs that have the required decoding support implemented in hardware."),(0,n.kt)("h3",{id:"using-compressed-textures-in-js"},"Using compressed textures in JS"),(0,n.kt)("p",null,"loaders.gl currently does not provide CPU-side decoding capabilities for compressed textures, meaning that they can only be uploaded directly to supporting GPUs. Use a WebGL context and read back the rendered texture to the client."),(0,n.kt)("h3",{id:"using-compressed-textures-in-lumagl"},"Using Compressed Textures in luma.gl"),(0,n.kt)("p",null,"While loaders.gl itself is framework-independent, luma.gl (and other vis.gl frameworks like deck.gl) are designed to seamless consume data loaded by loaders.gl."),(0,n.kt)("p",null,'Data returned by any loaders.gl "image" category loader (including texture loaders) can be passed directly to luma.gl ',(0,n.kt)("inlineCode",{parentName:"p"},"Texture2D")," class."),(0,n.kt)("h3",{id:"using-compressed-textures-in-raw-webgl"},"Using Compressed Textures in raw WebGL"),(0,n.kt)("p",null,"To use compressed textures in WebGL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const texture = gl.createTexture();\ngl.bindTexture(gl.TEXTURE_2D, texture);\n\ngl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);\ngl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);\n\nfor (let index = 0; index < images.length; ++index) {\n  const image = images[index];\n  const {width, height, format, data} = image;\n\n  gl.compressedTexImage2D(gl.TEXTURE_2D, index, format, width, height, 0, data);\n}\n\nif (images.length > 1) {\n  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);\n  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);\n} else {\n  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);\n  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);\n}\n")),(0,n.kt)("h3",{id:"webgl-extensions"},"WebGL Extensions"),(0,n.kt)("p",null,"Used to query if the GPU supports specific proprietary compressed texture formats."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Extension"),(0,n.kt)("th",{parentName:"tr",align:null},"Enables"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[",(0,n.kt)("inlineCode",{parentName:"td"},"WEBGL_compressed_texture_s3tc"),"(",(0,n.kt)("a",{parentName:"td",href:"https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc"},"https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"S3 texture compression formats")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[",(0,n.kt)("inlineCode",{parentName:"td"},"WEBGL_compressed_texture_s3tc_srgb"),"(",(0,n.kt)("a",{parentName:"td",href:"https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb"},"https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"S3 SRGB texture compression formats")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[",(0,n.kt)("inlineCode",{parentName:"td"},"WEBGL_compressed_texture_atc"),"(",(0,n.kt)("a",{parentName:"td",href:"https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_atc"},"https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_atc"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"AMD texture compression formats")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[",(0,n.kt)("inlineCode",{parentName:"td"},"WEBGL_compressed_texture_pvrtc"),"(",(0,n.kt)("a",{parentName:"td",href:"https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc"},"https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"PowerVR texture compression formats")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[",(0,n.kt)("inlineCode",{parentName:"td"},"WEBGL_compressed_texture_etc1"),"(",(0,n.kt)("a",{parentName:"td",href:"https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc1"},"https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc1"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"texture compression formats")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[",(0,n.kt)("inlineCode",{parentName:"td"},"WEBGL_compressed_texture_etc"),"(",(0,n.kt)("a",{parentName:"td",href:"https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc"},"https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"texture compression formats")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[",(0,n.kt)("inlineCode",{parentName:"td"},"WEBGL_compressed_texture_astc"),"(",(0,n.kt)("a",{parentName:"td",href:"https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc"},"https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"texture compression formats")))),(0,n.kt)("h3",{id:"using-compressed-textures-in-webgpu"},"Using Compressed Textures in WebGPU"),(0,n.kt)("p",null,"Support for compressed textures is a work in progress in the ",(0,n.kt)("a",{parentName:"p",href:"https://gpuweb.github.io/gpuweb/#texture-formats"},"WebGPU standard"),"."),(0,n.kt)("p",null,"At the time of writing, only S3 texture compression has been specified:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'    // BC compressed formats usable if "texture-compression-bc" is both\n    // supported by the device/user agent and enabled in requestDevice.\n    "bc1-rgba-unorm",\n    "bc1-rgba-unorm-srgb",\n    "bc2-rgba-unorm",\n    "bc2-rgba-unorm-srgb",\n    "bc3-rgba-unorm",\n    "bc3-rgba-unorm-srgb",\n    "bc4-r-unorm",\n    "bc4-r-snorm",\n    "bc5-rg-unorm",\n    "bc5-rg-snorm",\n    "bc6h-rgb-ufloat",\n    "bc6h-rgb-float",\n    "bc7-rgba-unorm",\n    "bc7-rgba-unorm-srgb",\n')),(0,n.kt)("h2",{id:"creating-compressed-textures"},"Creating Compressed Textures"),(0,n.kt)("p",null,"Texture compression code is usually not readily available, particulary not in JavaScript. Compression is typically done by binary programs, e.g. ",(0,n.kt)("a",{parentName:"p",href:"https://www.imaginationtech.com/developers/powervr-sdk-tools/pvrtextool/"},"PVRTexTool"),"."),(0,n.kt)("p",null,"The loaders.gl ",(0,n.kt)("inlineCode",{parentName:"p"},"CompressedTextureWriter")," can compress textures (under Node.js only) by executing a binary with the appropriate command line, and then loading back the output."),(0,n.kt)("h2",{id:"ip-and-patent-considerations"},"IP and Patent Considerations"),(0,n.kt)("p",null,"An issue with compressed texture formats is that they tend to be highly propietary and patent-encumbered, and while it is usually no longer an issue, there can be cases where e.g. royalty requirements come into play when using them."),(0,n.kt)("p",null,"To side-step patent issues when using these formats an application would typically:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Generate compressed textures in external applications (which should already have licensed any required formats and libraries)."),(0,n.kt)("li",{parentName:"ol"},"Load them in binary form without touching the content."),(0,n.kt)("li",{parentName:"ol"},"Pass them directly to a texture, so that they are processed inside the GPU driver (which should also habe licensed the supported formats and libraries).")))}u.isMDXComponent=!0}}]);