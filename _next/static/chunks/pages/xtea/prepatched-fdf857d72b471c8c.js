(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[105],{9162:function(e,t,n){"use strict";n.d(t,{ZP:function(){return y}});var r=n(3366),i=n(7462),a=n(7294),o=(n(5697),n(6010)),s=n(9766),c=n(8528);const l=["sx"];function d(e){const{sx:t}=e,n=(0,r.Z)(e,l),{systemProps:a,otherProps:o}=(e=>{const t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((n=>{c.G[n]?t.systemProps[n]=e[n]:t.otherProps[n]=e[n]})),t})(n);let d;return d=Array.isArray(t)?[a,...t]:"function"===typeof t?(...e)=>{const n=t(...e);return(0,s.P)(n)?(0,i.Z)({},a,n):a}:(0,i.Z)({},a,t),(0,i.Z)({},o,{sx:d})}var p=n(5408),m=n(7463),h=n(2151),u=n(7623);var x=a.createContext(),f=n(6843);function g(e){return(0,f.Z)("MuiGrid",e)}const w=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var v=(0,n(1271).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...w.map((e=>`grid-xs-${e}`)),...w.map((e=>`grid-sm-${e}`)),...w.map((e=>`grid-md-${e}`)),...w.map((e=>`grid-lg-${e}`)),...w.map((e=>`grid-xl-${e}`))]),j=n(5893);const S=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function k(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}const $=(0,h.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{container:n,direction:r,item:i,lg:a,md:o,sm:s,spacing:c,wrap:l,xl:d,xs:p,zeroMinWidth:m}=e.ownerState;return[t.root,n&&t.container,i&&t.item,m&&t.zeroMinWidth,n&&0!==c&&t[`spacing-xs-${String(c)}`],"row"!==r&&t[`direction-xs-${String(r)}`],"wrap"!==l&&t[`wrap-xs-${String(l)}`],!1!==p&&t[`grid-xs-${String(p)}`],!1!==s&&t[`grid-sm-${String(s)}`],!1!==o&&t[`grid-md-${String(o)}`],!1!==a&&t[`grid-lg-${String(a)}`],!1!==d&&t[`grid-xl-${String(d)}`]]}})((({ownerState:e})=>(0,i.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"nowrap"===e.wrap&&{flexWrap:"nowrap"},"reverse"===e.wrap&&{flexWrap:"wrap-reverse"})),(function({theme:e,ownerState:t}){const n=(0,p.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,p.k9)({theme:e},n,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${v.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:n,rowSpacing:r}=t;let i={};if(n&&0!==r){const t=(0,p.P$)({values:r,breakpoints:e.breakpoints.values});i=(0,p.k9)({theme:e},t,(t=>{const n=e.spacing(t);return"0px"!==n?{marginTop:`-${k(n)}`,[`& > .${v.item}`]:{paddingTop:k(n)}}:{}}))}return i}),(function({theme:e,ownerState:t}){const{container:n,columnSpacing:r}=t;let i={};if(n&&0!==r){const t=(0,p.P$)({values:r,breakpoints:e.breakpoints.values});i=(0,p.k9)({theme:e},t,(t=>{const n=e.spacing(t);return"0px"!==n?{width:`calc(100% + ${k(n)})`,marginLeft:`-${k(n)}`,[`& > .${v.item}`]:{paddingLeft:k(n)}}:{}}))}return i}),(({theme:e,ownerState:t})=>e.breakpoints.keys.reduce(((n,r)=>(function(e,t,n,r){const a=r[n];if(!a)return;let o={};if(!0===a)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===a)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const e=(0,p.P$)({values:r.columns,breakpoints:t.breakpoints.values}),s="object"===typeof e?e[n]:e,c=Math.round(a/s*1e8)/1e6+"%";let l={};if(r.container&&r.item&&0!==r.columnSpacing){const e=t.spacing(r.columnSpacing);if("0px"!==e){const t=`calc(${c} + ${k(e)})`;l={flexBasis:t,maxWidth:t}}}o=(0,i.Z)({flexBasis:c,flexGrow:0,maxWidth:c},l)}0===t.breakpoints.values[n]?Object.assign(e,o):e[t.breakpoints.up(n)]=o}(n,e,r,t),n)),{})));var y=a.forwardRef((function(e,t){const n=d((0,u.Z)({props:e,name:"MuiGrid"})),{className:s,columns:c,columnSpacing:l,component:p="div",container:h=!1,direction:f="row",item:w=!1,lg:v=!1,md:k=!1,rowSpacing:y,sm:b=!1,spacing:Z=0,wrap:N="wrap",xl:z=!1,xs:P=!1,zeroMinWidth:M=!1}=n,W=(0,r.Z)(n,S),_=y||Z,T=l||Z,A=a.useContext(x),G=c||A||12,E=(0,i.Z)({},n,{columns:G,container:h,direction:f,item:w,lg:v,md:k,sm:b,rowSpacing:_,columnSpacing:T,wrap:N,xl:z,xs:P,zeroMinWidth:M}),B=(e=>{const{classes:t,container:n,direction:r,item:i,lg:a,md:o,sm:s,spacing:c,wrap:l,xl:d,xs:p,zeroMinWidth:h}=e,u={root:["root",n&&"container",i&&"item",h&&"zeroMinWidth",n&&0!==c&&`spacing-xs-${String(c)}`,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==l&&`wrap-xs-${String(l)}`,!1!==p&&`grid-xs-${String(p)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==o&&`grid-md-${String(o)}`,!1!==a&&`grid-lg-${String(a)}`,!1!==d&&`grid-xl-${String(d)}`]};return(0,m.Z)(u,g,t)})(E);return O=(0,j.jsx)($,(0,i.Z)({ownerState:E,className:(0,o.Z)(B.root,s),as:p,ref:t},W)),12!==G?(0,j.jsx)(x.Provider,{value:G,children:O}):O;var O}))},9173:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/xtea/prepatched",function(){return n(2764)}])},2764:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),i=n(8136),a=n(9162),o=n(3321),s=n(8470);function c(){return(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(s.Z,{title:"Pre-patched Package Definitions",description:"Pre-patched package definition files, to make installing mods faster.",pageUrl:"/xtea/prepatched"}),(0,r.jsx)(i.Z,{}),(0,r.jsxs)("main",{className:"main",children:[(0,r.jsx)("h1",{className:"title",children:"Pre-patched package definitions"}),(0,r.jsxs)("h2",{className:"description no-top",children:["If a mod requires you to patch your"," ",(0,r.jsx)("code",{children:"packagedefinition.txt"})," file, fear not. Here are some already patched for you to download."]}),(0,r.jsxs)(a.ZP,{container:!0,justifyContent:"center",children:[(0,r.jsxs)(a.ZP,{item:!0,xs:3,children:[(0,r.jsx)("h3",{children:"HITMAN\u2122 3"}),(0,r.jsx)("a",{href:"/prepatched/h3/packagedefinition.txt",target:"_blank",rel:"noopener noreferrer",download:!0,children:(0,r.jsx)(o.Z,{variant:"contained",children:"Download for 3.110.1"})})]}),(0,r.jsxs)(a.ZP,{item:!0,xs:3,children:[(0,r.jsx)("h3",{children:"HITMAN\u2122 2"}),(0,r.jsx)("a",{href:"/prepatched/h2/packagedefinition.txt",target:"_blank",rel:"noopener noreferrer",download:!0,children:(0,r.jsx)(o.Z,{variant:"contained",children:"Download for 2.72.0"})})]})]})]})]})}},8136:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(5893),i=n(1664),a=n(7294),o=n(3321);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(c){s=!0,i=c}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){var t=e.logo,n=c(a.useState(null),2),s=n[0];n[1],Boolean(s);return(0,r.jsx)("header",{className:"header",children:(0,r.jsxs)("span",{className:"header-inner",children:[void 0!==t?t:(0,r.jsx)(i.default,{href:"/",children:"Notex.app"}),(0,r.jsxs)("span",{className:"header-right",children:[(0,r.jsx)("nav",{className:"menu",children:(0,r.jsxs)("ul",{className:"menu-inner",children:[(0,r.jsx)(o.Z,{style:{fontSize:"1rem",textTransform:"none"},variant:"text",color:"inherit",children:(0,r.jsx)(i.default,{href:"/rpkg",children:"RPKG Tool"})}),(0,r.jsx)(o.Z,{style:{fontSize:"1rem",textTransform:"none"},variant:"text",color:"inherit",children:(0,r.jsx)(i.default,{href:"/xtea",children:"XTEA Tool"})}),(0,r.jsx)(o.Z,{style:{fontSize:"1rem",textTransform:"none"},variant:"text",color:"inherit",children:(0,r.jsx)("a",{href:"https://hitmandb.notex.app",children:"HitmanDB"})})]})}),(0,r.jsx)("a",{href:"https://discord.gg/6UDtuYhZP6",children:(0,r.jsx)("span",{className:"discord-icon",children:(0,r.jsxs)("svg",{className:"discord-icon",width:"100",height:"34",viewBox:"0 0 800 272.1",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{className:"st0",d:"M142.8 120.1c-5.7 0-10.2 4.9-10.2 11s4.6 11 10.2 11c5.7 0 10.2-4.9 10.2-11s-4.6-11-10.2-11zM106.3 120.1c-5.7 0-10.2 4.9-10.2 11s4.6 11 10.2 11c5.7 0 10.2-4.9 10.2-11 .1-6.1-4.5-11-10.2-11z"}),(0,r.jsx)("path",{className:"st0",d:"M191.4 36.9h-134c-11.3 0-20.5 9.2-20.5 20.5v134c0 11.3 9.2 20.5 20.5 20.5h113.4l-5.3-18.3 12.8 11.8 12.1 11.1 21.6 18.7V57.4c-.1-11.3-9.3-20.5-20.6-20.5zm-38.6 129.5s-3.6-4.3-6.6-8c13.1-3.7 18.1-11.8 18.1-11.8-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.4-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.6-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.2-1.8-1-2.8-1.7-2.8-1.7s4.8 7.9 17.5 11.7c-3 3.8-6.7 8.2-6.7 8.2-22.1-.7-30.5-15.1-30.5-15.1 0-31.9 14.4-57.8 14.4-57.8 14.4-10.7 28-10.4 28-10.4l1 1.2c-18 5.1-26.2 13-26.2 13s2.2-1.2 5.9-2.8c10.7-4.7 19.2-5.9 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.5 0 0-7.9-7.5-24.9-12.6l1.4-1.6s13.7-.3 28 10.4c0 0 14.4 25.9 14.4 57.8 0-.1-8.4 14.3-30.5 15zM303.8 79.7h-33.2V117l22.1 19.9v-36.2h11.8c7.5 0 11.2 3.6 11.2 9.4v27.7c0 5.8-3.5 9.7-11.2 9.7h-34v21.1h33.2c17.8.1 34.5-8.8 34.5-29.2v-29.8c.1-20.8-16.6-29.9-34.4-29.9zm174 59.7v-30.6c0-11 19.8-13.5 25.8-2.5l18.3-7.4c-7.2-15.8-20.3-20.4-31.2-20.4-17.8 0-35.4 10.3-35.4 30.3v30.6c0 20.2 17.6 30.3 35 30.3 11.2 0 24.6-5.5 32-19.9l-19.6-9c-4.8 12.3-24.9 9.3-24.9-1.4zM417.3 113c-6.9-1.5-11.5-4-11.8-8.3.4-10.3 16.3-10.7 25.6-.8l14.7-11.3c-9.2-11.2-19.6-14.2-30.3-14.2-16.3 0-32.1 9.2-32.1 26.6 0 16.9 13 26 27.3 28.2 7.3 1 15.4 3.9 15.2 8.9-.6 9.5-20.2 9-29.1-1.8l-14.2 13.3c8.3 10.7 19.6 16.1 30.2 16.1 16.3 0 34.4-9.4 35.1-26.6 1-21.7-14.8-27.2-30.6-30.1zm-67 55.5h22.4V79.7h-22.4v88.8zM728 79.7h-33.2V117l22.1 19.9v-36.2h11.8c7.5 0 11.2 3.6 11.2 9.4v27.7c0 5.8-3.5 9.7-11.2 9.7h-34v21.1H728c17.8.1 34.5-8.8 34.5-29.2v-29.8c0-20.8-16.7-29.9-34.5-29.9zm-162.9-1.2c-18.4 0-36.7 10-36.7 30.5v30.3c0 20.3 18.4 30.5 36.9 30.5 18.4 0 36.7-10.2 36.7-30.5V109c0-20.4-18.5-30.5-36.9-30.5zm14.4 60.8c0 6.4-7.2 9.7-14.3 9.7-7.2 0-14.4-3.1-14.4-9.7V109c0-6.5 7-10 14-10 7.3 0 14.7 3.1 14.7 10v30.3zM682.4 109c-.5-20.8-14.7-29.2-33-29.2h-35.5v88.8h22.7v-28.2h4l20.6 28.2h28L665 138.1c10.7-3.4 17.4-12.7 17.4-29.1zm-32.6 12h-13.2v-20.3h13.2c14.1 0 14.1 20.3 0 20.3z"})]})})})]})]})})}},8470:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893),i=(n(7294),n(9008));function a(e){var t=e.pageUrl,n=e.title,a=e.description,o="".concat(n," - Notex.app");return(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:o}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"description",content:a}),(0,r.jsx)("meta",{name:"keywords",content:"glacier engine, hitman, tools, resources, modding, mod, rpkg, locr, rtlv, dlge, gfxf, unpack, pack, discord, 007, ioi, io interactive"}),(0,r.jsx)("meta",{name:"twitter:creator",content:"@Notex_"}),(0,r.jsx)("meta",{name:"twitter:title",content:o}),(0,r.jsx)("meta",{name:"twitter:description",content:a}),(0,r.jsx)("meta",{name:"twitter:dnt",content:"on"}),(0,r.jsx)("meta",{name:"twitter:url",content:"https://notex.app".concat(t)}),(0,r.jsx)("link",{rel:"author",href:"https://twitter.com/Notex_"}),(0,r.jsx)("link",{rel:"publisher",href:"https://rdil.rocks"}),(0,r.jsx)("link",{rel:"canonical",href:"https://notex.app/".concat(t)}),(0,r.jsx)("meta",{itemProp:"name",content:o})]})}}},function(e){e.O(0,[633,774,888,179],(function(){return t=9173,e(e.s=t);var t}));var t=e.O();_N_E=t}]);