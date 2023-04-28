(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[371],{77045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var s=n(81180),r=n(66507),i=n(14034),o=n(78866);const a=["bearing","pitch"],l={speed:1.2,curve:1.414};class h extends r.Z{constructor(e={}){super({compare:["longitude","latitude","zoom","bearing","pitch"],extract:["width","height","longitude","latitude","zoom","bearing","pitch"],required:["width","height","latitude","longitude","zoom"]}),(0,s.Z)(this,"opts",void 0),this.opts={...l,...e}}interpolateProps(e,t,n){const s=(0,o.if)(e,t,n,this.opts);for(const r of a)s[r]=(0,i.t7)(e[r]||0,t[r]||0,n);return s}getDuration(e,t){let{transitionDuration:n}=t;return"auto"===n&&(n=(0,o.up)(e,t,this.opts)),n}}},45137:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var s=n(5976),r=n(8551),i=n(73613);const o="https://api.cesium.com/v1/assets";async function a(e,t){if(!t){const n=await async function(e){(0,i.h)(e);const t=o,n={Authorization:"Bearer ".concat(e)},s=await(0,r.d)(t,{fetch:{headers:n}});if(!s.ok)throw new Error(s.statusText);return await s.json()}(e);for(const e of n.items)"3DTILES"===e.type&&(t=e.id)}const n=await async function(e,t){(0,i.h)(e,t);const n={Authorization:"Bearer ".concat(e)},s="".concat(o,"/").concat(t);let a=await(0,r.d)("".concat(s),{fetch:{headers:n}});if(!a.ok)throw new Error(a.statusText);let l=await a.json();if(a=await(0,r.d)("".concat(s,"/endpoint"),{fetch:{headers:n}}),!a.ok)throw new Error(a.statusText);const h=await a.json();return l={...l,...h},l}(e,t),{type:s,url:a}=n;return(0,i.h)("3DTILES"===s&&a),n.headers={Authorization:"Bearer ".concat(n.accessToken)},n}const l={...s.u,id:"cesium-ion",name:"Cesium Ion",preload:async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=t["cesium-ion"]||{};const{accessToken:n}=t;let s=t.assetId;if(!Number.isFinite(s)){const t=e.match(/\/([0-9]+)\/tileset.json/);s=t&&t[1]}return a(n,s)},parse:async(e,t,n)=>((t={...t})["3d-tiles"]=t["cesium-ion"],t.loader=l,s.u.parse(e,t,n)),options:{"cesium-ion":{...s.u.options["3d-tiles"],accessToken:null}}}},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>g});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),h=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=h(e.components);return s.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=h(n),d=r,g=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return n?s.createElement(g,o(o({ref:t},c),{},{components:n})):s.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:r,o[1]=a;for(var h=2;h<i;h++)o[h]=n[h];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47084:function(e,t,n){!function(t){"use strict";var n={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:m,table:m,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/};function s(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||w.defaults,this.rules=n.normal,this.options.pedantic?this.rules=n.pedantic:this.options.gfm&&(this.rules=n.gfm)}n._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,n._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,n.def=u(n.def).replace("label",n._label).replace("title",n._title).getRegex(),n.bullet=/(?:[*+-]|\d{1,9}\.)/,n.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,n.item=u(n.item,"gm").replace(/bull/g,n.bullet).getRegex(),n.list=u(n.list).replace(/bull/g,n.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+n.def.source+")").getRegex(),n._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",n._comment=/<!--(?!-?>)[\s\S]*?-->/,n.html=u(n.html,"i").replace("comment",n._comment).replace("tag",n._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),n.paragraph=u(n._paragraph).replace("hr",n.hr).replace("heading"," {0,3}#{1,6} +").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",n._tag).getRegex(),n.blockquote=u(n.blockquote).replace("paragraph",n.paragraph).getRegex(),n.normal=b({},n),n.gfm=b({},n.normal,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),n.pedantic=b({},n.normal,{html:u("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",n._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:m,paragraph:u(n.normal._paragraph).replace("hr",n.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",n.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()}),s.rules=n,s.lex=function(e,t){return new s(t).lex(e)},s.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},s.prototype.token=function(e,t){var s,r,i,o,a,l,h,p,u,d,g,f,m,b,x,y;for(e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e)){var w=this.tokens[this.tokens.length-1];e=e.substring(i[0].length),w&&"paragraph"===w.type?w.text+="\n"+i[0].trimRight():(i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?i:k(i,"\n")}))}else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2]?i[2].trim():i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if((i=this.rules.nptable.exec(e))&&(l={type:"table",header:_(i[1].replace(/^ *| *\| *$/g,"")),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3]?i[3].replace(/\n$/,"").split("\n"):[]}).header.length===l.align.length){for(e=e.substring(i[0].length),g=0;g<l.align.length;g++)/^ *-+: *$/.test(l.align[g])?l.align[g]="right":/^ *:-+: *$/.test(l.align[g])?l.align[g]="center":/^ *:-+ *$/.test(l.align[g])?l.align[g]="left":l.align[g]=null;for(g=0;g<l.cells.length;g++)l.cells[g]=_(l.cells[g],l.header.length);this.tokens.push(l)}else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),h={type:"list_start",ordered:b=(o=i[2]).length>1,start:b?+o:"",loose:!1},this.tokens.push(h),p=[],s=!1,m=(i=i[0].match(this.rules.item)).length,g=0;g<m;g++)d=(l=i[g]).length,~(l=l.replace(/^ *([*+-]|\d+\.) */,"")).indexOf("\n ")&&(d-=l.length,l=this.options.pedantic?l.replace(/^ {1,4}/gm,""):l.replace(new RegExp("^ {1,"+d+"}","gm"),"")),g!==m-1&&(a=n.bullet.exec(i[g+1])[0],(o.length>1?1===a.length:a.length>1||this.options.smartLists&&a!==o)&&(e=i.slice(g+1).join("\n")+e,g=m-1)),r=s||/\n\n(?!\s*$)/.test(l),g!==m-1&&(s="\n"===l.charAt(l.length-1),r||(r=s)),r&&(h.loose=!0),y=void 0,(x=/^\[[ xX]\] /.test(l))&&(y=" "!==l[1],l=l.replace(/^\[[ xX]\] +/,"")),u={type:"list_item_start",task:x,checked:y,loose:r},p.push(u),this.tokens.push(u),this.token(l,!1),this.tokens.push({type:"list_item_end"});if(h.loose)for(m=p.length,g=0;g<m;g++)p[g].loose=!0;this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):c(i[0]):i[0]});else if(t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),i[3]&&(i[3]=i[3].substring(1,i[3].length-1)),f=i[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[f]||(this.tokens.links[f]={href:i[2],title:i[3]});else if((i=this.rules.table.exec(e))&&(l={type:"table",header:_(i[1].replace(/^ *| *\| *$/g,"")),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3]?i[3].replace(/\n$/,"").split("\n"):[]}).header.length===l.align.length){for(e=e.substring(i[0].length),g=0;g<l.align.length;g++)/^ *-+: *$/.test(l.align[g])?l.align[g]="right":/^ *:-+: *$/.test(l.align[g])?l.align[g]="center":/^ *:-+ *$/.test(l.align[g])?l.align[g]="left":l.align[g]=null;for(g=0;g<l.cells.length;g++)l.cells[g]=_(l.cells[g].replace(/^ *\| *| *\| *$/g,""),l.header.length);this.tokens.push(l)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2].charAt(0)?1:2,text:i[1]});else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var r={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:m,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:m,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/};function i(e,t){if(this.options=t||w.defaults,this.links=e,this.rules=r.normal,this.renderer=this.options.renderer||new o,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=r.pedantic:this.options.gfm&&(this.options.breaks?this.rules=r.breaks:this.rules=r.gfm)}function o(e){this.options=e||w.defaults}function a(){}function l(e){this.tokens=[],this.token=null,this.options=e||w.defaults,this.options.renderer=this.options.renderer||new o,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new h}function h(){this.seen={}}function c(e,t){if(t){if(c.escapeTest.test(e))return e.replace(c.escapeReplace,(function(e){return c.replacements[e]}))}else if(c.escapeTestNoEncode.test(e))return e.replace(c.escapeReplaceNoEncode,(function(e){return c.replacements[e]}));return e}function p(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}function u(e,t){return e=e.source||e,t=t||"",{replace:function(t,n){return n=(n=n.source||n).replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,n),this},getRegex:function(){return new RegExp(e,t)}}}function d(e,t,n){if(e){try{var s=decodeURIComponent(p(n)).replace(/[^\w:]/g,"").toLowerCase()}catch(r){return null}if(0===s.indexOf("javascript:")||0===s.indexOf("vbscript:")||0===s.indexOf("data:"))return null}t&&!f.test(n)&&(n=function(e,t){g[" "+e]||(/^[^:]+:\/*[^/]*$/.test(e)?g[" "+e]=e+"/":g[" "+e]=k(e,"/",!0));return e=g[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^/]*)[\s\S]*/,"$1")+t:e+t}(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(r){return null}return n}r._punctuation="!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~",r.em=u(r.em).replace(/punctuation/g,r._punctuation).getRegex(),r._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,r._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,r._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,r.autolink=u(r.autolink).replace("scheme",r._scheme).replace("email",r._email).getRegex(),r._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,r.tag=u(r.tag).replace("comment",n._comment).replace("attribute",r._attribute).getRegex(),r._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,r._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,r._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,r.link=u(r.link).replace("label",r._label).replace("href",r._href).replace("title",r._title).getRegex(),r.reflink=u(r.reflink).replace("label",r._label).getRegex(),r.normal=b({},r),r.pedantic=b({},r.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:u(/^!?\[(label)\]\((.*?)\)/).replace("label",r._label).getRegex(),reflink:u(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",r._label).getRegex()}),r.gfm=b({},r.normal,{escape:u(r.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),r.gfm.url=u(r.gfm.url,"i").replace("email",r.gfm._extended_email).getRegex(),r.breaks=b({},r.gfm,{br:u(r.br).replace("{2,}","*").getRegex(),text:u(r.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),i.rules=r,i.output=function(e,t,n){return new i(t,n).output(e)},i.prototype.output=function(e){for(var t,n,s,r,o,a,l="";e;)if(o=this.rules.escape.exec(e))e=e.substring(o[0].length),l+=c(o[1]);else if(o=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(o[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(o[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(o[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(o[0])&&(this.inRawBlock=!1),e=e.substring(o[0].length),l+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):c(o[0]):o[0];else if(o=this.rules.link.exec(e)){var h=x(o[2],"()");if(h>-1){var p=4+o[1].length+h;o[2]=o[2].substring(0,h),o[0]=o[0].substring(0,p).trim(),o[3]=""}e=e.substring(o[0].length),this.inLink=!0,s=o[2],this.options.pedantic?(t=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s))?(s=t[1],r=t[3]):r="":r=o[3]?o[3].slice(1,-1):"",s=s.trim().replace(/^<([\s\S]*)>$/,"$1"),l+=this.outputLink(o,{href:i.escapes(s),title:i.escapes(r)}),this.inLink=!1}else if((o=this.rules.reflink.exec(e))||(o=this.rules.nolink.exec(e))){if(e=e.substring(o[0].length),t=(o[2]||o[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){l+=o[0].charAt(0),e=o[0].substring(1)+e;continue}this.inLink=!0,l+=this.outputLink(o,t),this.inLink=!1}else if(o=this.rules.strong.exec(e))e=e.substring(o[0].length),l+=this.renderer.strong(this.output(o[4]||o[3]||o[2]||o[1]));else if(o=this.rules.em.exec(e))e=e.substring(o[0].length),l+=this.renderer.em(this.output(o[6]||o[5]||o[4]||o[3]||o[2]||o[1]));else if(o=this.rules.code.exec(e))e=e.substring(o[0].length),l+=this.renderer.codespan(c(o[2].trim(),!0));else if(o=this.rules.br.exec(e))e=e.substring(o[0].length),l+=this.renderer.br();else if(o=this.rules.del.exec(e))e=e.substring(o[0].length),l+=this.renderer.del(this.output(o[1]));else if(o=this.rules.autolink.exec(e))e=e.substring(o[0].length),s="@"===o[2]?"mailto:"+(n=c(this.mangle(o[1]))):n=c(o[1]),l+=this.renderer.link(s,null,n);else if(this.inLink||!(o=this.rules.url.exec(e))){if(o=this.rules.text.exec(e))e=e.substring(o[0].length),this.inRawBlock?l+=this.renderer.text(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):c(o[0]):o[0]):l+=this.renderer.text(c(this.smartypants(o[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else{if("@"===o[2])s="mailto:"+(n=c(o[0]));else{do{a=o[0],o[0]=this.rules._backpedal.exec(o[0])[0]}while(a!==o[0]);n=c(o[0]),s="www."===o[1]?"http://"+n:n}e=e.substring(o[0].length),l+=this.renderer.link(s,null,n)}return l},i.escapes=function(e){return e?e.replace(i.rules._escapes,"$1"):e},i.prototype.outputLink=function(e,t){var n=t.href,s=t.title?c(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,s,this.output(e[1])):this.renderer.image(n,s,c(e[1]))},i.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201c").replace(/"/g,"\u201d").replace(/\.{3}/g,"\u2026"):e},i.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",s=e.length,r=0;r<s;r++)t=e.charCodeAt(r),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},o.prototype.code=function(e,t,n){var s=(t||"").match(/\S*/)[0];if(this.options.highlight){var r=this.options.highlight(e,s);null!=r&&r!==e&&(n=!0,e=r)}return s?'<pre><code class="'+this.options.langPrefix+c(s,!0)+'">'+(n?e:c(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:c(e,!0))+"</code></pre>"},o.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},o.prototype.html=function(e){return e},o.prototype.heading=function(e,t,n,s){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+s.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},o.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},o.prototype.list=function(e,t,n){var s=t?"ol":"ul";return"<"+s+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+s+">\n"},o.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},o.prototype.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},o.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},o.prototype.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},o.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},o.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},o.prototype.strong=function(e){return"<strong>"+e+"</strong>"},o.prototype.em=function(e){return"<em>"+e+"</em>"},o.prototype.codespan=function(e){return"<code>"+e+"</code>"},o.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},o.prototype.del=function(e){return"<del>"+e+"</del>"},o.prototype.link=function(e,t,n){if(null===(e=d(this.options.sanitize,this.options.baseUrl,e)))return n;var s='<a href="'+c(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>"},o.prototype.image=function(e,t,n){if(null===(e=d(this.options.sanitize,this.options.baseUrl,e)))return n;var s='<img src="'+e+'" alt="'+n+'"';return t&&(s+=' title="'+t+'"'),s+=this.options.xhtml?"/>":">"},o.prototype.text=function(e){return e},a.prototype.strong=a.prototype.em=a.prototype.codespan=a.prototype.del=a.prototype.text=function(e){return e},a.prototype.link=a.prototype.image=function(e,t,n){return""+n},a.prototype.br=function(){return""},l.parse=function(e,t){return new l(t).parse(e)},l.prototype.parse=function(e){this.inline=new i(e.links,this.options),this.inlineText=new i(e.links,b({},this.options,{renderer:new a})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},l.prototype.next=function(){return this.token=this.tokens.pop(),this.token},l.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},l.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},l.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,p(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,s,r="",i="";for(n="",e=0;e<this.token.header.length;e++)n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(r+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",s=0;s<t.length;s++)n+=this.renderer.tablecell(this.inline.output(t[s]),{header:!1,align:this.token.align[s]});i+=this.renderer.tablerow(n)}return this.renderer.table(r,i);case"blockquote_start":for(i="";"blockquote_end"!==this.next().type;)i+=this.tok();return this.renderer.blockquote(i);case"list_start":i="";for(var o=this.token.ordered,a=this.token.start;"list_end"!==this.next().type;)i+=this.tok();return this.renderer.list(i,o,a);case"list_item_start":i="";var l=this.token.loose,h=this.token.checked,c=this.token.task;for(this.token.task&&(i+=this.renderer.checkbox(h));"list_item_end"!==this.next().type;)i+=l||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(i,c,h);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:var u='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(u);console.log(u)}},h.prototype.slug=function(e){var t=e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){var n=t;do{this.seen[n]++,t=n+"-"+this.seen[n]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t},c.escapeTest=/[&<>"']/,c.escapeReplace=/[&<>"']/g,c.replacements={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},c.escapeTestNoEncode=/[<>"']|&(?!#?\w+;)/,c.escapeReplaceNoEncode=/[<>"']|&(?!#?\w+;)/g;var g={},f=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function m(){}function b(e){for(var t,n,s=1;s<arguments.length;s++)for(n in t=arguments[s])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function _(e,t){var n=e.replace(/\|/g,(function(e,t,n){for(var s=!1,r=t;--r>=0&&"\\"===n[r];)s=!s;return s?"|":" |"})).split(/ \|/),s=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function k(e,t,n){if(0===e.length)return"";for(var s=0;s<e.length;){var r=e.charAt(e.length-s-1);if(r!==t||n){if(r===t||!n)break;s++}else s++}return e.substr(0,e.length-s)}function x(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=0,s=0;s<e.length;s++)if("\\"===e[s])s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&--n<0)return s;return-1}function y(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function w(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"==typeof t){n||(n=t,t=null),y(t=b({},w.defaults,t||{}));var r,i,o=t.highlight,a=0;try{r=s.lex(e,t)}catch(p){return n(p)}i=r.length;var h=function(e){if(e)return t.highlight=o,n(e);var s;try{s=l.parse(r,t)}catch(p){e=p}return t.highlight=o,e?n(e):n(null,s)};if(!o||o.length<3)return h();if(delete t.highlight,!i)return h();for(;a<r.length;a++)!function(e){"code"!==e.type?--i||h():o(e.text,e.lang,(function(t,n){return t?h(t):null==n||n===e.text?--i||h():(e.text=n,e.escaped=!0,void(--i||h()))}))}(r[a])}else try{return t&&(t=b({},w.defaults,t)),y(t),l.parse(s.lex(e,t),t)}catch(p){if(p.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||w.defaults).silent)return"<p>An error occurred:</p><pre>"+c(p.message+"",!0)+"</pre>";throw p}}m.exec=m,w.options=w.setOptions=function(e){return b(w.defaults,e),w},w.getDefaults=function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:new o,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}},w.defaults=w.getDefaults(),w.Parser=l,w.parser=l.parse,w.Renderer=o,w.TextRenderer=a,w.Lexer=s,w.lexer=s.lex,w.InlineLexer=i,w.inlineLexer=i.output,w.Slugger=h,w.parse=w,e.exports=w}(this||("undefined"!=typeof window?window:n.g))},33562:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var s=n(81180);const r=1024,i=1048576,o=1024*i;function a(e){let t,n,s;return e<1?(t=1e3*e,n="\u03bcs",s=0):e<1e3?(t=e,n="ms",s=2):(t=e/1e3,n="s",s=2),"".concat(t.toFixed(s)).concat(n)}var l=n(23881);const h={position:"fixed",zIndex:1e4,color:"#ccc",background:"#000",fontFamily:"Helvetica,Arial,sans-serif",padding:"8px",fontSize:"12px",lineSpacing:6},c={fontSize:"16px",cursor:"pointer"},p={paddingLeft:"8px"},u=e=>"".concat(e.name,": ").concat(e.count),d={count:u,averageTime:e=>"".concat(e.name,": ").concat(a(e.getAverageTime())),totalTime:e=>"".concat(e.name,": ").concat(a(e.time)),fps:e=>"".concat(e.name,": ").concat(Math.round(e.getHz()),"fps"),memory:e=>"".concat(e.name,": ").concat(function(e){let t,n,s;return e<r?(t=e,n=" bytes",s=0):e<i?(t=e/r,n="kB",s=2):e<o?(t=e/i,n="MB",s=2):(t=e/o,n="GB",s=2),"".concat(t.toFixed(s)).concat(n)}(e.count))};class g{constructor(e,t){(0,s.Z)(this,"stats",void 0),(0,s.Z)(this,"title",void 0),(0,s.Z)(this,"collapsed",!1),(0,s.Z)(this,"_framesPerUpdate",void 0),(0,s.Z)(this,"_formatters",d),(0,s.Z)(this,"_css",void 0),(0,s.Z)(this,"_headerCSS",void 0),(0,s.Z)(this,"_itemCSS",void 0),(0,s.Z)(this,"_container",document.body),(0,s.Z)(this,"_innerContainer",null),(0,s.Z)(this,"_statsContainer",null),(0,s.Z)(this,"_header",null),(0,s.Z)(this,"_resetOnUpdate",{}),(0,s.Z)(this,"_counter",0),(0,s.Z)(this,"_items",{}),(0,s.Z)(this,"_added",!1),this.stats=e,this.title=null==t?void 0:t.title,this._framesPerUpdate=Math.round(Math.max((null==t?void 0:t.framesPerUpdate)||1,1)),this._initializeFormatters(t),this._initializeUpdateConfigs(t),this._css=Object.assign({},h,null==t?void 0:t.css),this._headerCSS=Object.assign({},c,this._css.header),this._itemCSS=Object.assign({},p,this._css.item),delete this._css.header,delete this._css.item,this._createDOM(null==t?void 0:t.container),this._createDOMStats()}setStats(e){this.stats=e,this._createDOMStats(),this._setHeaderContent(),this.update()}update(){const e=this.stats&&this.stats.stats;e&&0!==Object.keys(e).length&&this._counter++%this._framesPerUpdate==0&&this._update()}remove(){this._innerContainer&&this._container.removeChild(this._innerContainer)}setCollapsed(e){this.collapsed=e,this._statsContainer&&(this._statsContainer.style.display=this.collapsed?"none":"block"),this._setHeaderContent()}_update(){this.stats.forEach((e=>{this._createDOMItem(e.name),this._items[e.name].innerHTML=this._getLines(e).join("<BR>"),this._resetOnUpdate[e.name]&&e.reset()}))}_initializeFormatters(e){if(null!=e&&e.formatters)for(const t in e.formatters){let n=e.formatters[t];"string"==typeof n&&(n=d[n]),n&&(this._formatters[t]=n)}}_initializeUpdateConfigs(e){if(null!=e&&e.resetOnUpdate)for(const t in e.resetOnUpdate)this._resetOnUpdate[t]=e.resetOnUpdate[t]||!1}_createDOM(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;if("undefined"!=typeof document&&document){this._container=e,this._innerContainer=document.createElement("div");for(const e in this._css)this._innerContainer.style[e]=this._css[e];this._container.appendChild(this._innerContainer),this._createDOMHeader(),this._statsContainer=document.createElement("div"),this._statsContainer.style.display="block",this._innerContainer.appendChild(this._statsContainer)}}_createDOMHeader(){if(!this._header){var e;this._header=document.createElement("div");for(const e in this._headerCSS)this._header.style[e]=this._headerCSS[e];this._header.onclick=this._toggleCollapsed.bind(this),null===(e=this._innerContainer)||void 0===e||e.appendChild(this._header)}this._setHeaderContent()}_setHeaderContent(){if(this._header){const e=this.collapsed?"\u25b6":"\u2b07",t=this.title||this.stats&&this.stats.id||"Stats";this._header.innerText="".concat(e," ").concat(t)}}_toggleCollapsed(){this.setCollapsed(!this.collapsed)}_createDOMStats(){this.stats instanceof l.Z&&this.stats.forEach((e=>{this._createDOMItem(e.name)}))}_createDOMItem(e){if(this._statsContainer&&!this._items[e]){this._items[e]=document.createElement("div");for(const t in this._itemCSS)this._items[e].style[t]=this._itemCSS[t];this._statsContainer.appendChild(this._items[e])}}_getLines(e){const t=this._formatters[e.name]||this._formatters[e.type||""]||u;return e?t(e).split("\n"):[]}}}}]);