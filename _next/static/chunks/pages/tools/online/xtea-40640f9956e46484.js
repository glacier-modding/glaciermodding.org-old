(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[109],{9696:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/online/xtea",function(){return n(3063)}])},7645:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=i.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};o=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](o):o instanceof l)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=a({},r,e));var o,l;var u=r=a({},r,t);if(u.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(u.suspense)return n(u);r.loadableGenerated&&delete(r=a({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,s(n,r);delete r.ssr}return n(r)};o(n(7294));var i=o(n(4588));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}},3644:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=a},4588:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s=(o=n(7294))&&o.__esModule?o:{default:o},l=n(7161),u=n(3644);var c=[],d=[],f=!1;function h(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var m=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,a;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var a=this;this._timeout=setTimeout((function(){a._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),a&&r(t,a),e}();function p(e){return function(e,t){var n=function(){if(!a){var t=new m(e,r);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=s.default.lazy(r.loader));var a=null;if(!f&&!r.suspense){var o=r.webpack?r.webpack():r.modules;o&&d.push((function(e){var t=!0,r=!1,a=void 0;try{for(var i,s=o[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var l=i.value;if(-1!==e.indexOf(l))return n()}}catch(u){r=!0,a=u}finally{try{t||null==s.return||s.return()}finally{if(r)throw a}}}))}var c=r.suspense?function(e,t){return s.default.createElement(r.lazy,i({},e,{ref:t}))}:function(e,t){n();var i=s.default.useContext(u.LoadableContext),o=l.useSubscription(a);return s.default.useImperativeHandle(t,(function(){return{retry:a.retry}}),[]),i&&Array.isArray(r.modules)&&r.modules.forEach((function(e){i(e)})),s.default.useMemo((function(){return o.loading||o.error?s.default.createElement(r.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:a.retry}):o.loaded?s.default.createElement(function(e){return e&&e.__esModule?e.default:e}(o.loaded),e):null}),[e,o])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",s.default.forwardRef(c)}(h,e)}function v(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return v(e,t)}))}p.preloadAll=function(){return new Promise((function(e,t){v(c).then(e,t)}))},p.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return f=!0,t()};v(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=p.preloadReady;var b=p;t.default=b},3063:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(5893),a=(n(7294),n(8136)),i=n(5152),o=n(8470),s=(0,i.default)((function(){return n.e(523).then(n.bind(n,9523))}),{loadableGenerated:{webpack:function(){return[9523]}}});function l(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(o.Z,{title:"XTEA Online Tool",description:"An online tool built to encode and decode files that use IOI's modified XTEA algorithm.",pageUrl:"/tools/online/xtea"}),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(a.Z,{logo:(0,r.jsx)(s,{})}),(0,r.jsx)("p",{id:"failed-load-notif",children:"You may need to reload the page unless you see the big box below. Sorry about that."}),(0,r.jsxs)("a",{href:"/xtea/prepatched",className:"description",style:{color:"white",cursor:"pointer"},children:["Looking for a version of ",(0,r.jsx)("code",{children:"packagedefinition.txt"})," ","that is already patched? Click here!"]}),(0,r.jsx)("main",{className:"main"})]})]})}},8136:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893),a=n(1664),i=(n(7294),n(3321));function o(e){var t=e.logo;return(0,r.jsx)("header",{className:"header",children:(0,r.jsxs)("span",{className:"header-inner",children:[void 0!==t?t:(0,r.jsx)(a.default,{href:"/",children:"glaciermodding.org"}),(0,r.jsxs)("span",{className:"header-right",children:[(0,r.jsx)("nav",{className:"menu",children:(0,r.jsxs)("ul",{className:"menu-inner",children:[(0,r.jsx)(i.Z,{style:{fontSize:"1rem",textTransform:"none"},variant:"text",color:"inherit",children:(0,r.jsx)(a.default,{href:"/rpkg",children:"RPKG Tool"})}),(0,r.jsx)(i.Z,{style:{fontSize:"1rem",textTransform:"none"},variant:"text",color:"inherit",children:(0,r.jsx)(a.default,{href:"/xtea",children:"XTEA Tool"})}),(0,r.jsx)(i.Z,{style:{fontSize:"1rem",textTransform:"none"},variant:"text",color:"inherit",children:(0,r.jsx)("a",{href:"https://hitmandb.glaciermodding.org",children:"HitmanDB"})})]})}),(0,r.jsx)("a",{href:"https://discord.gg/6UDtuYhZP6",children:(0,r.jsx)("span",{className:"discord-icon",children:(0,r.jsxs)("svg",{className:"discord-icon",width:"100",height:"34",viewBox:"0 0 800 272.1",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{className:"st0",d:"M142.8 120.1c-5.7 0-10.2 4.9-10.2 11s4.6 11 10.2 11c5.7 0 10.2-4.9 10.2-11s-4.6-11-10.2-11zM106.3 120.1c-5.7 0-10.2 4.9-10.2 11s4.6 11 10.2 11c5.7 0 10.2-4.9 10.2-11 .1-6.1-4.5-11-10.2-11z"}),(0,r.jsx)("path",{className:"st0",d:"M191.4 36.9h-134c-11.3 0-20.5 9.2-20.5 20.5v134c0 11.3 9.2 20.5 20.5 20.5h113.4l-5.3-18.3 12.8 11.8 12.1 11.1 21.6 18.7V57.4c-.1-11.3-9.3-20.5-20.6-20.5zm-38.6 129.5s-3.6-4.3-6.6-8c13.1-3.7 18.1-11.8 18.1-11.8-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.4-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.6-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.2-1.8-1-2.8-1.7-2.8-1.7s4.8 7.9 17.5 11.7c-3 3.8-6.7 8.2-6.7 8.2-22.1-.7-30.5-15.1-30.5-15.1 0-31.9 14.4-57.8 14.4-57.8 14.4-10.7 28-10.4 28-10.4l1 1.2c-18 5.1-26.2 13-26.2 13s2.2-1.2 5.9-2.8c10.7-4.7 19.2-5.9 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.5 0 0-7.9-7.5-24.9-12.6l1.4-1.6s13.7-.3 28 10.4c0 0 14.4 25.9 14.4 57.8 0-.1-8.4 14.3-30.5 15zM303.8 79.7h-33.2V117l22.1 19.9v-36.2h11.8c7.5 0 11.2 3.6 11.2 9.4v27.7c0 5.8-3.5 9.7-11.2 9.7h-34v21.1h33.2c17.8.1 34.5-8.8 34.5-29.2v-29.8c.1-20.8-16.6-29.9-34.4-29.9zm174 59.7v-30.6c0-11 19.8-13.5 25.8-2.5l18.3-7.4c-7.2-15.8-20.3-20.4-31.2-20.4-17.8 0-35.4 10.3-35.4 30.3v30.6c0 20.2 17.6 30.3 35 30.3 11.2 0 24.6-5.5 32-19.9l-19.6-9c-4.8 12.3-24.9 9.3-24.9-1.4zM417.3 113c-6.9-1.5-11.5-4-11.8-8.3.4-10.3 16.3-10.7 25.6-.8l14.7-11.3c-9.2-11.2-19.6-14.2-30.3-14.2-16.3 0-32.1 9.2-32.1 26.6 0 16.9 13 26 27.3 28.2 7.3 1 15.4 3.9 15.2 8.9-.6 9.5-20.2 9-29.1-1.8l-14.2 13.3c8.3 10.7 19.6 16.1 30.2 16.1 16.3 0 34.4-9.4 35.1-26.6 1-21.7-14.8-27.2-30.6-30.1zm-67 55.5h22.4V79.7h-22.4v88.8zM728 79.7h-33.2V117l22.1 19.9v-36.2h11.8c7.5 0 11.2 3.6 11.2 9.4v27.7c0 5.8-3.5 9.7-11.2 9.7h-34v21.1H728c17.8.1 34.5-8.8 34.5-29.2v-29.8c0-20.8-16.7-29.9-34.5-29.9zm-162.9-1.2c-18.4 0-36.7 10-36.7 30.5v30.3c0 20.3 18.4 30.5 36.9 30.5 18.4 0 36.7-10.2 36.7-30.5V109c0-20.4-18.5-30.5-36.9-30.5zm14.4 60.8c0 6.4-7.2 9.7-14.3 9.7-7.2 0-14.4-3.1-14.4-9.7V109c0-6.5 7-10 14-10 7.3 0 14.7 3.1 14.7 10v30.3zM682.4 109c-.5-20.8-14.7-29.2-33-29.2h-35.5v88.8h22.7v-28.2h4l20.6 28.2h28L665 138.1c10.7-3.4 17.4-12.7 17.4-29.1zm-32.6 12h-13.2v-20.3h13.2c14.1 0 14.1 20.3 0 20.3z"})]})})})]})]})})}},8470:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),a=(n(7294),n(9008));function i(e){var t=e.pageUrl,n=e.title,i=e.description,o="".concat(n," - glaciermodding.org");return(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:o}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"description",content:i}),(0,r.jsx)("meta",{name:"keywords",content:"glacier engine, hitman, tools, resources, modding, mod, rpkg, locr, rtlv, dlge, gfxf, unpack, pack, discord, 007, ioi, io interactive"}),(0,r.jsx)("meta",{name:"twitter:creator",content:"@Notex_"}),(0,r.jsx)("meta",{name:"twitter:title",content:o}),(0,r.jsx)("meta",{name:"twitter:description",content:i}),(0,r.jsx)("meta",{name:"twitter:dnt",content:"on"}),(0,r.jsx)("meta",{name:"twitter:url",content:"https://glaciermodding.org".concat(t)}),(0,r.jsx)("link",{rel:"author",href:"https://twitter.com/Notex_"}),(0,r.jsx)("link",{rel:"publisher",href:"https://rdil.rocks"}),(0,r.jsx)("link",{rel:"canonical",href:"https://glaciermodding.org/".concat(t)}),(0,r.jsx)("meta",{itemProp:"name",content:o})]})}},5152:function(e,t,n){e.exports=n(7645)},8217:function(e,t,n){"use strict";var r=n(6086),a=n(7294);t.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,i=a.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}}));e=i[0];var o=i[1];return i=e.value,e.getCurrentValue===t&&e.subscribe===n||(i=t(),o({getCurrentValue:t,subscribe:n,value:i})),a.useDebugValue(i),a.useEffect((function(){function e(){if(!a){var e=t();o((function(a){return a.getCurrentValue!==t||a.subscribe!==n||a.value===e?a:r({},a,{value:e})}))}}var a=!1,i=n(e);return e(),function(){a=!0,i()}}),[t,n]),i}},7161:function(e,t,n){"use strict";e.exports=n(8217)}},function(e){e.O(0,[633,774,888,179],(function(){return t=9696,e(e.s=t);var t}));var t=e.O();_N_E=t}]);