!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=72)}([function(t,e,r){(function(e){function r(t){return t&&t.Math==Math&&t}t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||Function("return this")()}).call(this,r(38))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e,r){var n=r(1);t.exports=!n((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,r){var n=r(4),i=r(7),o=r(8);t.exports=n?function(t,e,r){return i.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var n=r(0),i=r(16).f,o=r(5),a=r(41),c=r(11),s=r(47),u=r(56);t.exports=function(t,e){var r,l,d,f,p,g=t.target,m=t.global,v=t.stat;if(r=m?n:v?n[g]||c(g,{}):(n[g]||{}).prototype)for(l in e){if(f=e[l],d=t.noTargetGet?(p=i(r,l))&&p.value:r[l],!u(m?l:g+(v?".":"#")+l,t.forced)&&void 0!==d){if(typeof f==typeof d)continue;s(f,d)}(t.sham||d&&d.sham)&&o(f,"sham",!0),a(r,l,f,t)}}},function(t,e,r){var n=r(4),i=r(20),o=r(21),a=r(10),c=Object.defineProperty;e.f=n?c:function(t,e,r){if(o(t),e=a(e,!0),o(r),i)try{return c(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){var n=r(17),i=r(19);t.exports=function(t){return n(i(t))}},function(t,e,r){var n=r(2);t.exports=function(t,e){if(!n(t))return t;var r,i;if(e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!n(i=r.call(t)))return i;if(!e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){var n=r(0),i=r(5);t.exports=function(t,e){try{i(n,t,e)}catch(r){n[t]=e}return e}},function(t,e,r){var n=r(42),i=r(43);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.4.7",mode:n?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,r){var n=r(26),i=Math.min;t.exports=function(t){return 0<t?i(n(t),9007199254740991):0}},function(t,e,r){var n=r(19);t.exports=function(t){return Object(n(t))}},function(t,e,r){var n=r(0),i=r(12),o=r(3),a=r(23),c=r(31),s=r(59),u=i("wks"),l=n.Symbol,d=s?l:a;t.exports=function(t){return o(u,t)||(c&&o(l,t)?u[t]=l[t]:u[t]=d("Symbol."+t)),u[t]}},function(t,e,r){var n=r(4),i=r(39),o=r(8),a=r(9),c=r(10),s=r(3),u=r(20),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=a(t),e=c(e,!0),u)try{return l(t,e)}catch(t){}if(s(t,e))return o(!i.f.call(t,e),t[e])}},function(t,e,r){var n=r(1),i=r(18),o="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,r){var n=r(4),i=r(1),o=r(40);t.exports=!n&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},function(t,e,r){var n=r(2);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,r){var n=r(12),i=Function.toString;t.exports=n("inspectSource",(function(t){return i.call(t)}))},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+n).toString(36)}},function(t,e){t.exports={}},function(t,e,r){function n(t){return"function"==typeof t?t:void 0}var i=r(49),o=r(0);t.exports=function(t,e){return arguments.length<2?n(i[t])||n(o[t]):i[t]&&i[t][e]||o[t]&&o[t][e]}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?n:r)(t)}},function(t,e,r){"use strict";var n=r(57).forEach,i=r(32);t.exports=i("forEach")?function(t,e){return n(this,t,1<arguments.length?e:void 0)}:[].forEach},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,r){var n=r(2),i=r(30),o=r(15)("species");t.exports=function(t,e){var r;return i(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!i(r.prototype)?n(r)&&null===(r=r[o])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},function(t,e,r){var n=r(18);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,e,r){var n=r(1);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},function(t,e,r){"use strict";var n=r(1);t.exports=function(t,e){var r=[][t];return!r||!n((function(){r.call(null,e||function(){throw 1},1)}))}},function(t,e,r){"use strict";var n,i,o={},a=(i={},function(t){if(void 0===i[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}i[t]=e}return i[t]});function c(t,e){for(var r=[],n={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],c={css:o[1],media:o[2],sourceMap:o[3]};n[a]?n[a].parts.push(c):r.push(n[a]={id:a,parts:[c]})}return r}function s(t,e){for(var r=0;r<t.length;r++){var n=t[r],i=o[n.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(m(n.parts[a],e))}else{for(var c=[];a<n.parts.length;a++)c.push(m(n.parts[a],e));o[n.id]={id:n.id,refs:1,parts:c}}}}function u(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var n=r.nc;n&&(t.attributes.nonce=n)}if(Object.keys(t.attributes).forEach((function(r){e.setAttribute(r,t.attributes[r])})),"function"==typeof t.insert)t.insert(e);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,d=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function f(t,e,r,n){var i=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=d(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}var p=null,g=0;function m(t,e){var r,n,i;if(e.singleton){var o=g++;r=p=p||u(e),n=f.bind(null,r,o,!1),i=f.bind(null,r,o,!0)}else r=u(e),n=function(t,e,r){var n=r.css,i=r.media,o=r.sourceMap;if(i&&t.setAttribute("media",i),o&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r,e),i=function(){!function(t){null!==t.parentNode&&t.parentNode.removeChild(t)}(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=c(t,e);return s(r,e),function(t){for(var n=[],i=0;i<r.length;i++){var a=r[i],u=o[a.id];u&&(u.refs--,n.push(u))}t&&s(c(t,e),e);for(var l=0;l<n.length;l++){var d=n[l];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete o[d.id]}}}}},function(t,e,r){"use strict";function n(t){if(!c(t))return!1;var e=t[m];return void 0!==e?!!e:a(t)}var i=r(6),o=r(1),a=r(30),c=r(2),s=r(14),u=r(13),l=r(67),d=r(29),f=r(68),p=r(15),g=r(35),m=p("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",y=51<=g||!o((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),S=f("concat");i({target:"Array",proto:!0,forced:!y||!S},{concat:function(t){var e,r,i,o,a,c=s(this),f=d(c,0),p=0;for(e=-1,i=arguments.length;e<i;e++)if(n(a=-1===e?c:arguments[e])){if(o=u(a.length),v<p+o)throw TypeError(h);for(r=0;r<o;r++,p++)r in a&&l(f,p,a[r])}else{if(v<=p)throw TypeError(h);l(f,p++,a)}return f.length=p,f}})},function(t,e,r){var n,i,o=r(0),a=r(69),c=o.process,s=c&&c.versions,u=s&&s.v8;u?i=(n=u.split("."))[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||74<=n[1])&&(n=a.match(/Chrome\/(\d+)/))&&(i=n[1]),t.exports=i&&+i},function(t,e,r){var n=r(6),i=r(4);n({target:"Object",stat:!0,forced:!i,sham:!i},{defineProperty:r(7).f})},function(t,e,r){"use strict";var n=r(6),i=r(27);n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!n.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:n},function(t,e,r){var n=r(0),i=r(2),o=n.document,a=i(o)&&i(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},function(t,e,r){var n=r(0),i=r(5),o=r(3),a=r(11),c=r(22),s=r(44),u=s.get,l=s.enforce,d=String(String).split("String");(t.exports=function(t,e,r,c){var s=!!c&&!!c.unsafe,u=!!c&&!!c.enumerable,f=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof e||o(r,"name")||i(r,"name",e),l(r).source=d.join("string"==typeof e?e:"")),t!==n?(s?!f&&t[e]&&(u=!0):delete t[e],u?t[e]=r:i(t,e,r)):u?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||c(this)}))},function(t,e){t.exports=!1},function(t,e,r){var n=r(0),i=r(11),o="__core-js_shared__",a=n[o]||i(o,{});t.exports=a},function(t,e,r){var n,i,o,a=r(45),c=r(0),s=r(2),u=r(5),l=r(3),d=r(46),f=r(24),p=c.WeakMap;if(a){var g=new p,m=g.get,v=g.has,h=g.set;n=function(t,e){return h.call(g,t,e),e},i=function(t){return m.call(g,t)||{}},o=function(t){return v.call(g,t)}}else{var y=d("state");f[y]=!0,n=function(t,e){return u(t,y,e),e},i=function(t){return l(t,y)?t[y]:{}},o=function(t){return l(t,y)}}t.exports={set:n,get:i,has:o,enforce:function(t){return o(t)?i(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!s(e)||(r=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,e,r){var n=r(0),i=r(22),o=n.WeakMap;t.exports="function"==typeof o&&/native code/.test(i(o))},function(t,e,r){var n=r(12),i=r(23),o=n("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},function(t,e,r){var n=r(3),i=r(48),o=r(16),a=r(7);t.exports=function(t,e){for(var r=i(e),c=a.f,s=o.f,u=0;u<r.length;u++){var l=r[u];n(t,l)||c(t,l,s(e,l))}}},function(t,e,r){var n=r(25),i=r(50),o=r(55),a=r(21);t.exports=n("Reflect","ownKeys")||function(t){var e=i.f(a(t)),r=o.f;return r?e.concat(r(t)):e}},function(t,e,r){var n=r(0);t.exports=n},function(t,e,r){var n=r(51),i=r(54).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},function(t,e,r){var n=r(3),i=r(9),o=r(52).indexOf,a=r(24);t.exports=function(t,e){var r,c=i(t),s=0,u=[];for(r in c)!n(a,r)&&n(c,r)&&u.push(r);for(;e.length>s;)n(c,r=e[s++])&&(~o(u,r)||u.push(r));return u}},function(t,e,r){function n(t){return function(e,r,n){var c,s=i(e),u=o(s.length),l=a(n,u);if(t&&r!=r){for(;l<u;)if((c=s[l++])!=c)return!0}else for(;l<u;l++)if((t||l in s)&&s[l]===r)return t||l||0;return!t&&-1}}var i=r(9),o=r(13),a=r(53);t.exports={includes:n(!0),indexOf:n(!1)}},function(t,e,r){var n=r(26),i=Math.max,o=Math.min;t.exports=function(t,e){var r=n(t);return r<0?i(r+e,0):o(r,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,r){function n(t,e){var r=c[a(t)];return r==u||r!=s&&("function"==typeof e?i(e):!!e)}var i=r(1),o=/#|\.prototype\./,a=n.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=n.data={},s=n.NATIVE="N",u=n.POLYFILL="P";t.exports=n},function(t,e,r){function n(t){var e=1==t,r=2==t,n=3==t,l=4==t,d=6==t,f=5==t||d;return function(p,g,m,v){for(var h,y,S=a(p),b=o(S),w=i(g,m,3),j=c(b.length),L=0,E=v||s,x=e?E(p,j):r?E(p,0):void 0;L<j;L++)if((f||L in b)&&(y=w(h=b[L],L,S),t))if(e)x[L]=y;else if(y)switch(t){case 3:return!0;case 5:return h;case 6:return L;case 2:u.call(x,h)}else if(l)return!1;return d?-1:n||l?l:x}}var i=r(58),o=r(17),a=r(14),c=r(13),s=r(29),u=[].push;t.exports={forEach:n(0),map:n(1),filter:n(2),some:n(3),every:n(4),find:n(5),findIndex:n(6)}},function(t,e,r){var n=r(28);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,i){return t.call(e,r,n,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){var n=r(31);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol()},function(t,e,r){"use strict";var n=r(6),i=r(28),o=r(14),a=r(1),c=r(32),s=[],u=s.sort,l=a((function(){s.sort(void 0)})),d=a((function(){s.sort(null)})),f=c("sort");n({target:"Array",proto:!0,forced:l||!d||f},{sort:function(t){return void 0===t?u.call(o(this)):u.call(o(this),i(t))}})},function(t,e,r){var n=r(0),i=r(62),o=r(27),a=r(5);for(var c in i){var s=n[c],u=s&&s.prototype;if(u&&u.forEach!==o)try{a(u,"forEach",o)}catch(t){u.forEach=o}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,r){var n=r(64);"string"==typeof n&&(n=[[t.i,n,""]]);r(33)(n,{insert:"head",singleton:!1}),n.locals&&(t.exports=n.locals)},function(t,e,r){},function(t,e,r){var n=r(66);"string"==typeof n&&(n=[[t.i,n,""]]);r(33)(n,{insert:"head",singleton:!1}),n.locals&&(t.exports=n.locals)},function(t,e,r){},function(t,e,r){"use strict";var n=r(10),i=r(7),o=r(8);t.exports=function(t,e,r){var a=n(e);a in t?i.f(t,a,o(0,r)):t[a]=r}},function(t,e,r){var n=r(1),i=r(15),o=r(35),a=i("species");t.exports=function(t){return 51<=o||!n((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,r){var n=r(25);t.exports=n("navigator","userAgent")||""},function(t,e){t.exports=[[{word:"cry",translation:"плакать",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{word:"dance",translation:"танцевать",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{word:"dive",translation:"нырять",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{word:"draw",translation:"рисовать",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{word:"fish",translation:"ловить рыбу",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{word:"fly",translation:"летать",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{word:"hug",translation:"обнимать",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{word:"jump",translation:"прыгать",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],[{word:"open",translation:"открывать",image:"img/open.jpg",audioSrc:"audio/open.mp3"},{word:"eat",translation:"ecть",image:"img/eat.jpg",audioSrc:"audio/eat.mp3"},{word:"point",translation:"указывать",image:"img/point.jpg",audioSrc:"audio/point.mp3"},{word:"ride",translation:"ездить",image:"img/ride.jpg",audioSrc:"audio/ride.mp3"},{word:"run",translation:"бегать",image:"img/run.jpg",audioSrc:"audio/run.mp3"},{word:"sing",translation:"петь",image:"img/sing.jpg",audioSrc:"audio/sing.mp3"},{word:"skip",translation:"пропускать, прыгать",image:"img/skip.jpg",audioSrc:"audio/skip.mp3"},{word:"swim",translation:"плавать",image:"img/swim.jpg",audioSrc:"audio/swim.mp3"}],[{word:"break",translation:"ломать",image:"img/break.jpg",audioSrc:"audio/break.mp3"},{word:"build",translation:"строить",image:"img/build.jpg",audioSrc:"audio/build.mp3"},{word:"cut",translation:"резать",image:"img/cut.jpg",audioSrc:"audio/cut.mp3"},{word:"play",translation:"играть",image:"img/play.jpg",audioSrc:"audio/play.mp3"},{word:"read",translation:"читать",image:"img/read.jpg",audioSrc:"audio/read.mp3"},{word:"sit",translation:"сидеть",image:"img/sit.jpg",audioSrc:"audio/sit.mp3"},{word:"stop",translation:"останавливать",image:"img/stop.jpg",audioSrc:"audio/stop.mp3"},{word:"teach",translation:"учить",image:"img/teach.jpg",audioSrc:"audio/teach.mp3"}],[{word:"big",translation:"большой",image:"img/big.jpg",audioSrc:"audio/big.mp3"},{word:"clever",translation:"умный",image:"img/clever.jpg",audioSrc:"audio/clever.mp3"},{word:"cold",translation:"холодный",image:"img/cold.jpg",audioSrc:"audio/cold.mp3"},{word:"dirty",translation:"грязный",image:"img/dirty.jpg",audioSrc:"audio/dirty.mp3"},{word:"small",translation:"маленький",image:"img/small.jpg",audioSrc:"audio/small.mp3"},{word:"hot",translation:"горячий",image:"img/hot.jpg",audioSrc:"audio/hot.mp3"},{word:"rich",translation:"богатый",image:"img/rich.jpg",audioSrc:"audio/rich.mp3"},{word:"strong",translation:"сильный",image:"img/strong.jpg",audioSrc:"audio/strong.mp3"}],[{word:"cat",translation:"кот",image:"img/cat.jpg",audioSrc:"audio/cat.mp3"},{word:"chick",translation:"цыплёнок",image:"img/chick.jpg",audioSrc:"audio/chick.mp3"},{word:"chicken",translation:"курица",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3"},{word:"dog",translation:"собака",image:"img/dog.jpg",audioSrc:"audio/dog.mp3"},{word:"horse",translation:"лошадь",image:"img/horse.jpg",audioSrc:"audio/horse.mp3"},{word:"pig",translation:"свинья",image:"img/pig.jpg",audioSrc:"audio/pig.mp3"},{word:"frog",translation:"жаба",image:"img/frog.jpg",audioSrc:"audio/frog.mp3"},{word:"sheep",translation:"овца",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3"}],[{word:"bird",translation:"птица",image:"img/bird.jpg",audioSrc:"audio/bird.mp3"},{word:"fish",translation:"рыба",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3"},{word:"rabbit",translation:"кролик",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3"},{word:"giraffe",translation:"жирафа",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3"},{word:"lion",translation:"лев",image:"img/lion.jpg",audioSrc:"audio/lion.mp3"},{word:"mouse",translation:"мышь",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3"},{word:"turtle",translation:"черепаха",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3"},{word:"dolphin",translation:"дельфин",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3"}],[{word:"skirt",translation:"юбка",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3"},{word:"pants",translation:"брюки",image:"img/pants.jpg",audioSrc:"audio/pants.mp3"},{word:"blouse",translation:"блузка",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3"},{word:"dress",translation:"платье",image:"img/dress.jpg",audioSrc:"audio/dress.mp3"},{word:"boot",translation:"ботинок",image:"img/boot.jpg",audioSrc:"audio/boot.mp3"},{word:"shirt",translation:"рубашка",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3"},{word:"coat",translation:"пальто",image:"img/coat.jpg",audioSrc:"audio/coat.mp3"},{word:"shoe",translation:"туфли",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3"}],[{word:"sad",translation:"грустный",image:"img/sad.jpg",audioSrc:"audio/sad.mp3"},{word:"angry",translation:"сердитый",image:"img/angry.jpg",audioSrc:"audio/angry.mp3"},{word:"happy",translation:"счастливый",image:"img/happy.jpg",audioSrc:"audio/happy.mp3"},{word:"tired",translation:"уставший",image:"img/tired.jpg",audioSrc:"audio/tired.mp3"},{word:"surprised",translation:"удивлённый",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3"},{word:"scared",translation:"испуганный",image:"img/scared.jpg",audioSrc:"audio/scared.mp3"},{word:"smile",translation:"улыбка",image:"img/smile.jpg",audioSrc:"audio/smile.mp3"},{word:"laugh",translation:"смех",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3"}]]},function(t,e){t.exports=[{id:0,title:"Action (set A)",image:"img/hug.jpg"},{id:1,title:"Action (set B)",image:"img/eat.jpg"},{id:2,title:"Action (set C)",image:"img/read.jpg"},{id:3,title:"Adjective",image:"img/clever.jpg"},{id:4,title:"Animals (set A)",image:"img/dog.jpg"},{id:5,title:"Animals (set B)",image:"img/rabbit.jpg"},{id:6,title:"Clothes",image:"img/dress.jpg"},{id:7,title:"Emotions",image:"img/surprised.jpg"}]},function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}r.r(e),r(37),r(60),r(61),r(63),r(65),r(34),r(36);var i=function(){function t(e){var r=e.id,n=e.title,i=e.image;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=r,this.title=n,this.image=i}return function(t,e,r){e&&n(t.prototype,e)}(t,[{key:"generateCardCategories",value:function(){var t="",e=document.createElement("div");return e.className="card card-categories",e.setAttribute("data-id",this.id),t+="<img src=".concat(this.image,' alt="card">\n      <p>').concat(this.title.toUpperCase(),"</p>"),e.innerHTML=t,e}}]),t}();function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(){function t(e){var r=e.word,n=e.translation,i=e.image,o=e.audioSrc;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.word=r,this.translation=n,this.image=i,this.audioSrc=o}return function(t,e,r){e&&o(t.prototype,e)}(t,[{key:"generateCard",value:function(){var t="",e=document.createElement("div");return e.className="card card-instance",t+="<div class = 'card-inner'>\n       <div class= 'card-overlay'></div>\n      <div class = 'card-front'>\n      <img src=".concat(this.image," alt=").concat(this.word,">\n          <p>").concat(this.word.toUpperCase(),"<i class=\"icon-reverse fas fa-sync-alt\"></i></p>\n      </div>\n      <div class = 'card-back'>\n         <img src=").concat(this.image," alt=").concat(this.word,">\n          <p>").concat(this.translation.toUpperCase(),'</p>\n      </div>\n        </div>\n        <audio> <sourse src="').concat(this.audioSrc,'" type="audio/mp3"</audio>'),e.innerHTML=t,e}}]),t}(),c=r(70),s=r(71),u=document.querySelector(".checkbox"),l=document.querySelector(".button-play"),d=document.querySelector(".button-repeat"),f=document.querySelector(".stars"),p=document.querySelector("body");function g(){var t=document.querySelector(".cards");return t.innerHTML="",t}function m(){var t=g();(function(t){var e=[];return t.forEach((function(t){e.push(new i(t))})),e})(s).forEach((function(e){t.append(e.generateCardCategories())}))}function v(){var t=document.querySelectorAll(".card"),e=document.querySelectorAll(".card-instance");t.forEach((function(t){if(u.checked){if(t.classList.contains("card-instance"))return;t.classList.add("card-categories-play")}else t.classList.remove("card-categories-play")})),e.forEach((function(t){t.classList.contains("card-categories")||(u.checked?t.classList.add("card-play"):t.classList.remove("card-play"))}))}function h(){var t=document.querySelector(".cards");l.innerHTML="Start Game!",t.firstChild.classList.contains("card-categories")&&l.classList.remove("button-play-on"),t.firstChild.classList.contains("card-instance")&&(u.checked?l.classList.add("button-play-on"):l.classList.remove("button-play-on"))}function y(){var t=document.querySelector(".cards"),e=document.querySelectorAll("sourse"),r=[];e.forEach((function(t){r.push(t.getAttribute("src"))}));var n,i,o=0;function a(t){if(!t.target.classList.contains("card")&&!t.target.classList.contains("cards")&&0!==n.length){var e=t.target.parentElement.parentElement.nextSibling.nextSibling.firstChild.nextSibling;if(t.target.parentElement.parentElement.classList.contains("card-play"))return;var r=e.getAttribute("src"),i=t.target.parentElement.previousSibling.previousSibling;if(r===n[0]){!function(){var t=document.createElement("i");t.className="fas fa-star fa-2x solid",f.append(t)}(),i.classList.add("card-overlay-on");var a=new Audio;a.src="audio/correct.mp3",a.play(),n.shift(),0===n.length&&(0===o?function(){var t=document.createElement("div");t.innerHTML='\n  <p>WIN!</p>\n  <img src="img/success.png">\n ',t.className="final",p.append(t),setTimeout((function(){var t=new Audio;t.src="audio/success.mp3",t.play()}),500)}():function(t){var e=document.createElement("div");e.innerHTML="\n  <p> errors: ".concat(t,'</p>\n  <img src="img/fail.jpeg">\n '),e.className="final",p.append(e),setTimeout((function(){var t=new Audio;t.src="audio/failure.mp3",t.play()}),500)}(o),setTimeout((function(){document.location.reload(!0)}),3e3)),setTimeout((function(){var t=new Audio;t.src=n[0],t.play(),d.onclick=function(){t.play()}}),800)}else{!function(){var t=document.createElement("i");t.className="far fa-star fa-2x",f.append(t)}();var c=new Audio;c.src="audio/error.mp3",c.play(),o+=1}}}u.checked&&(n=r.sort((function(){return.5-Math.random()})),(i=new Audio).src=n[0],i.play(),d.onclick=function(){i.play()},u.checked?t.addEventListener("click",a):t.removeEventListener("click",a))}function S(t){var e=g();(function(t,e){var r=[];return t[e].forEach((function(t){r.push(new a(t))})),r})(c,t).forEach((function(t){e.append(t.generateCard()),v()}))}window.onload=function(){localStorage.setItem("count","0"),u.addEventListener("change",v),u.addEventListener("change",(function(){document.querySelector(".navigation__list").classList.toggle("navigation__list-play")})),m(),u.addEventListener("change",h),l.addEventListener("click",y),l.addEventListener("click",(function(){l.classList.remove("button-play-on"),d.classList.add("button-play-on"),u.addEventListener("change",(function(){document.location.reload(!0)})),document.querySelector(".navigation__list").addEventListener("click",(function(){document.location.reload(!0)}))})),function(){var t=document.querySelector(".hamburger"),e=document.querySelector(".navigation__list"),r=document.querySelector(".overlay");function n(){e.classList.toggle("navigation__list-showed"),r.classList.toggle("overlay-on"),t.firstElementChild.classList.contains("hamburger-open")?(t.firstElementChild.classList.remove("hamburger-open"),t.firstElementChild.classList.add("hamburger-close")):(t.firstElementChild.classList.remove("hamburger-close"),t.firstElementChild.classList.add("hamburger-open"))}r.addEventListener("click",(function(){e.classList.remove("navigation__list-showed"),r.classList.remove("overlay-on"),t.firstElementChild.classList.remove("hamburger-close"),t.firstElementChild.classList.add("hamburger-open")})),t.addEventListener("click",n),e.addEventListener("click",(function(t){if(e.querySelectorAll("a").forEach((function(e){e.classList.remove("active"),t.target.classList.add("active")})),"A"===t.target.tagName){n();for(var r=0;r<8;r++)t.target.getAttribute("href")==="#".concat(r)&&(S(r),h());"#main"===t.target.getAttribute("href")&&(m(),h())}}))}(),function(){var t=document.querySelector(".cards"),e=document.querySelectorAll(".card-categories"),r=document.querySelectorAll(".navigation-links");t.addEventListener("click",(function(t){e.forEach((function(e){var n=e.getAttribute("data-id");t.target.parentElement.getAttribute("data-id")===n&&(S(n),h(),r.forEach((function(t){t.getAttribute("href")==="#".concat(n)&&(t.classList.remove("active"),t.classList.add("active")),"#main"===t.getAttribute("href")&&t.classList.remove("active")})))}))})),function(){var t=document.querySelector(".cards");function e(t){if(t.target.parentElement.classList.contains("card-front")){var e=new Audio;e.src=t.target.parentElement.parentElement.nextSibling.nextSibling.firstChild.nextSibling.getAttribute("src"),e.play()}}u.checked?t.removeEventListener("click",e):t.addEventListener("click",e),u.addEventListener("change",(function(){u.checked?t.removeEventListener("click",e):t.addEventListener("click",e)}))}()}(),document.querySelector(".cards").addEventListener("click",(function(t){t.target.classList.contains("icon-reverse")&&t.target.parentElement.parentElement.parentElement.classList.add("card-reverse")})),document.querySelector(".cards").addEventListener("mouseout",(function(t){t.target.parentElement.parentElement.classList.contains("card-reverse")&&t.target.parentElement.parentElement.classList.remove("card-reverse")}))}}]);