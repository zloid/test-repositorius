!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";(function(e,r){var o,i=n(1);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var a=Object(i.a)(o);t.a=a}).call(this,n(2),n(3)(e))},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return r}))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){var r=n(5),o=n(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],u=t.base?i[0]+t.base:i[0],l=n[u]||0,s="".concat(u," ").concat(l);n[u]=l+1;var d=c(s),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:s,updater:v(f,t),references:1}),r.push(s)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(e,t){var n,r,o;if(t.singleton){var i=m++;n=h||(h=l(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=l(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=u(e,t),l=0;l<n.length;l++){var s=c(n[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=i}}}},function(e,t,n){(t=n(7)(!1)).push([e.i,"body {\n    background: papayawhip;\n}\n\n.row,\n.container {\n    border: 1px solid tomato;\n}\n\n.row {\n    border: 1px solid green;\n}\n\n.col {\n    border: 1px solid #ccc;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){"use strict";n.r(t);
/*! Reef v7.3.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/reef */
var r,o=["checked","selected","value"],i={},a=!1,c=function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()};i.trueTypeOf=c;var u=function(e){if(a)throw new Error(e)};i.err=u;var l=function(e,t){var n=c(e);if("object"===n){var r={};for(var o in e)e.hasOwnProperty(o)&&(r[o]=l(e[o],t));return r}if("array"===n)return e.map((function(e){return l(e,t)}));if("string"===n&&!t){var i=document.createElement("div");return i.textContent=e,i.innerHTML}return e},s=function(e){e.debounce&&window.cancelAnimationFrame(e.debounce),e.debounce=window.requestAnimationFrame((function(){e.render()}))},d=function(e){return{get:function(t,n){return["object","array"].indexOf(c(t[n]))>-1?new Proxy(t[n],d(e)):t[n]},set:function(t,n,r){return t[n]===r||(t[n]=r,s(e)),!0}}},f=function(e,t){var n=e.filter(t);return n.length<1?null:n[0]},p=function(e,t){if(!(e||t&&t.lagoon))return u("You did not provide an element to make into a component.");if(!t||!t.template&&!t.lagoon)return u("You did not provide a template for this component.");var n=this,r=function(e,t){return e.setters?e.store?null:e.data:e.data&&!e.store?new Proxy(e.data,d(t)):null}(t,n),o=t.store,i=t.router,a=t.setters,f=t.getters;n.debounce=null,Object.defineProperties(n,{elem:{value:e},template:{value:t.template},allowHTML:{value:t.allowHTML},lagoon:{value:t.lagoon},store:{value:o},attached:{value:[]},router:{value:i}}),Object.defineProperty(n,"data",{get:function(){return a?l(r,!0):r},set:function(e){return o||a||(r=new Proxy(e,d(n)),s(n)),!0}}),a&&!o&&Object.defineProperty(n,"do",{value:function(e){if(!a[e])return u("There is no setter with this name.");var t=Array.prototype.slice.call(arguments);t[0]=r,a[e].apply(n,t),s(n)}}),f&&!o&&Object.defineProperty(n,"get",{value:function(e){return f[e]?f[e](r):u("There is no getter with this name.")}}),i&&"addComponent"in i&&i.addComponent(n),o&&"attach"in o&&o.attach(n),t.attachTo&&("array"===c(t.attachTo)?t.attachTo:[t.attachTo]).forEach((function(e){"attach"in e&&e.attach(n)}))};p.Store=function(e){return e.lagoon=!0,new p(null,e)};var h=function(e,t){t.forEach((function(t){e.style[t]=""}))},m=function(e,t){t.forEach((function(t){if("class"===t.att)e.className=t.value;else if("style"===t.att)!function(e,t){var n=function(e){return e.split(";").reduce((function(e,t){var n=t.indexOf(":");return n&&e.push({name:t.slice(0,n).trim(),value:t.slice(n+1).trim()}),e}),[])}(t),r=Array.prototype.filter.call(e.style,(function(t){return null===f(n,(function(n){return n.name===t&&n.value===e.style[t]}))}));h(e,r),function(e,t){t.forEach((function(t){e.style[t.name]=t.value}))}(e,n)}(e,t.value);else{if(t.att in e)try{e[t.att]=t.value,e[t.att]||0===e[t.att]||(e[t.att]=!0)}catch(e){}try{e.setAttribute(t.att,t.value)}catch(e){}}}))},v=function(e,t){t.forEach((function(t){if("class"===t.att)e.className="";else if("style"===t.att)h(e,Array.prototype.slice.call(e.style));else{if(t.att in e)try{e[t.att]=""}catch(e){}try{e.removeAttribute(t.att)}catch(e){}}}))},y=function(e,t){return{att:e,value:t}},b=function(e,t){if(1!==e.nodeType)return[];var n=function(e,t){return Array.prototype.reduce.call(e.attributes,(function(e,n){return!(o.indexOf(n.name)<0||t&&"selected"===n.name)||n.name.length>7&&"default"===n.name.slice(0,7)||e.push(y(n.name,n.value)),e}),[])}(e,t);return function(e,t,n){o.forEach((function(r){!e[r]&&0!==e[r]||n&&"option"===e.tagName.toLowerCase()&&"selected"===r||n&&"select"===e.tagName.toLowerCase()&&"value"===r||t.push(y(r,e[r]))}))}(e,n,t),n},g=function(e){return 3===e.nodeType?"text":8===e.nodeType?"comment":e.tagName.toLowerCase()},w=function(e){return e.childNodes&&e.childNodes.length>0?null:e.textContent},x=function(e){1===e.nodeType&&(Array.prototype.forEach.call(e.attributes,(function(t){t.name.length<8||"default"!==t.name.slice(0,7)||(m(e,[y(t.name.slice(7).toLowerCase(),t.value)]),v(e,[y(t.name,t.value)]))})),e.childNodes&&Array.prototype.forEach.call(e.childNodes,(function(e){x(e)})))},O=function(e,t,n){var r=Array.prototype.slice.call(t.childNodes),i=Array.prototype.slice.call(e.childNodes),a=r.length-i.length;if(a>0)for(;a>0;a--)r[r.length-a].parentNode.removeChild(r[r.length-a]);i.forEach((function(e,i){if(!r[i])return x(e),void t.appendChild(e.cloneNode(!0));if(g(e)===g(r[i])){if(function(e,t){var n=b(e,!0),r=b(t),i=r.filter((function(e){return!(o.indexOf(e.att)>-1)&&null===f(n,(function(t){return e.att===t.att}))})),a=n.filter((function(e){var t=f(r,(function(t){return e.att===t.att}));return null===t||t.value!==e.value}));m(t,a),v(t,i)}(e,r[i]),!(n.filter((function(t){return 3!==e.nodeType&&function(e,t){return Element.prototype.matches&&e.matches(t)||Element.prototype.msMatchesSelector&&e.msMatchesSelector(t)||Element.prototype.webkitMatchesSelector&&e.webkitMatchesSelector(t)}(e,t)})).length>0)){var a=w(e);if(a&&a!==w(r[i])&&(r[i].textContent=a),r[i].childNodes.length>0&&e.childNodes.length<1)r[i].innerHTML="";else{if(r[i].childNodes.length<1&&e.childNodes.length>0){var c=document.createDocumentFragment();return O(e,c,n),void r[i].appendChild(c)}e.childNodes.length>0&&O(e,r[i],n)}}}else r[i].parentNode.replaceChild(e.cloneNode(!0),r[i])}))},E=function(e,t){e&&e.forEach((function(e){if(e.attached.indexOf(t)>-1)return u(t.elem+" has attached nodes that it is also attached to, creating an infinite loop.");"render"in e&&e.render()}))};p.emit=function(e,t,n){var r;if(!e||!t)return u("You did not provide an element or event name.");r=new CustomEvent(t,{bubbles:!0,detail:n}),e.dispatchEvent(r)},p.prototype.render=function(){if(this.lagoon)E(this.attached,this);else{if(!this.template)return u("No template was provided.");var e="string"===c(this.elem)?document.querySelector(this.elem):this.elem;if(!e)return u("The DOM element to render your template into was not found.");var t=l((this.store?this.store.data:this.data)||{},this.allowHTML),n="function"===c(this.template)?this.template(t,this.router?this.router.current:null):this.template;if(!(["string","number"].indexOf(c(n))<0)){var o=this.attached.map((function(e){return e.elem}));return O(function(e){if(r){var t=(new DOMParser).parseFromString(e,"text/html");return"head"in t&&"childNodes"in t.head&&t.head.childNodes.length>0&&Array.prototype.slice.call(t.head.childNodes).reverse().forEach((function(e){t.body.insertBefore(e,t.body.firstChild)})),t.body}var n=document.createElement("div");return n.innerHTML=e,n}(n),e,o),p.emit(e,"render",t),E(this.attached,this),e}}},p.prototype.attach=function(e){"array"===c(e)?this.attached.concat(e):this.attached.push(e)},p.prototype.detach=function(e){var t="array"===c(e)?e:[e],n=this;t.forEach((function(e){var t=n.attached.indexOf(e);t<0||n.attached.splice(t,1)}))},p.debug=function(e){a=!!e},p.clone=l,p._=i,r=function(){if(!window.DOMParser)return!1;var e=new DOMParser;try{e.parseFromString("x","text/html")}catch(e){return!1}return!0}();var T=p;function j(e){var t=e.tag,n=void 0===t?"div":t,r=e.only,o=void 0!==r&&r,i=e.inner,a=void 0===i?"<i>my custom HTMLElement is ...</i>":i,c=e.className,u=void 0===c?"defaultClass":c,l=e.id,s=void 0===l?"":l,d=e.parentId,f=void 0===d?"":d,p=e.cut,h=void 0===p?"default":p;if(o){var m=document.createElement(n.trim());return"<i>my custom HTMLElement is ...</i>"!==a&&(m.innerHTML=a),void(""===f?document.body.appendChild(m):document.querySelector(f).appendChild(m))}var v=document.createElement(n.trim());switch(""!==s&&(v.id=s.trim()),v.className=u.trim(),v.innerHTML=a,""===f?document.body.appendChild(v):document.querySelector(f).appendChild(v),h){case"default":break;case"all":if(arguments[0].id){var y=document.getElementById(s);"<i>my custom HTMLElement is ...</i>"===a&&(y.innerHTML=""),y.removeAttribute("class")}break;case"class":if(arguments[0].id){var b=document.getElementById(s);b.removeAttribute("class")}}}var S=n(0),N=function(){return Math.random().toString(36).substring(7).split("").join(".")},C={INIT:"@@redux/INIT"+N(),REPLACE:"@@redux/REPLACE"+N(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+N()}};function M(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}var A=function e(t,n,r){var o;if("function"==typeof n&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof n&&void 0===r&&(r=n,n=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(e)(t,n)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var i=t,a=n,c=[],u=c,l=!1;function s(){u===c&&(u=c.slice())}function d(){if(l)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return a}function f(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(l)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return s(),u.push(e),function(){if(t){if(l)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,s();var n=u.indexOf(e);u.splice(n,1),c=null}}}function p(e){if(!M(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,a=i(a,e)}finally{l=!1}for(var t=c=u,n=0;n<t.length;n++){(0,t[n])()}return e}function h(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");i=e,p({type:C.REPLACE})}function m(){var e,t=f;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(d())}return n(),{unsubscribe:t(n)}}})[S.a]=function(){return this},e}return p({type:C.INIT}),(o={dispatch:p,subscribe:f,getState:d,replaceReducer:h})[S.a]=m,o}((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return e.concat([t.text]);default:return e}}));console.log("store.state~>: ",A.getState()),A.dispatch({type:"ADD_TODO",text:"Read the docs"}),console.log("store.state~>: ",A.getState()),A.dispatch({type:"ADD_TODO",text:"Read the docs"}),console.log("store.state~>: ",A.getState().join("")),A.dispatch({type:"ADD_TODO",text:"store.js 987654 tst"}),console.log("store.state~>: ",A.getState());var L=A.getState();A.subscribe((function(){console.log(A.getState()),L=A.getState()}));var P=new T.Store({data:{heading:"My Todos",todos:["Swim","Climb","Jump","Play"],tsttt:"my tstatstst",store:L},getters:{total:function(e){for(var t in console.log("whole store's data: ",e),console.log("all sore's keys: "),e)console.log(t)}}}),D={iRnd:function(){return alert(Math.random())},create:j,strTest:function(){return j({})},doRdx:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:123123123;console.log(e),A.dispatch({type:"ADD_TODO",text:"myLib.js - ".concat(e.trim())})}};console.log(77654);window.myLib=D;A.dispatch({type:"ADD_TODO",text:"CalcUi - 213454"}),console.log("store.state~>: CalcUi.js >>",A.getState());var _=function(){return'\n    <p>\n        CalcUi_9832\n    </p>\n    <div class="row">\n        <div class="col">\n            <div \n                role="calcMainScreen"\n                onclick="window.myLib.iRnd()"\n            >\n                calcScreen\n                '.concat(A.getState().map((function(e){return"<li>".concat(e,"</li>")})).join(""),'\n            </div>\n            <input\n                    value="3"\n                onmousemove="window.myLib.doRdx(this.value)"\n            />\n                999999977\n            \n             \n        </div>    \n    </div>\n')};A.dispatch({type:"ADD_TODO",text:"789978987"});var k=new T("#root",{store:P,template:function(e){return'\n        <div class="container">\n            ========\n        '.concat(e.store.join(" <~~> "),"\n            =======\n            ").concat(_(),"   \n\n            ---<br />\n            ").concat(console.log(e),"\n            ---<br />\n            ").concat(A.getState().map((function(e){return"<li>".concat(e,"</li>")})).join(""),'\n            ---<br />\n            <button\n                onClick="window.myLib.strTest()"\n                class="btn btn-primary"\n            >\n                ibtn hello\n            </button>\n            <button\n                onClick="myLib.create({tag: \'button\'})"\n                class="btn btn-warning"\n            >\n                ibtn hello\n            </button>\n            \n        </div>\n        \n    ')}});A.dispatch({type:"ADD_TODO",text:"App.js - 78945621"});n(4);window.myLib.create({id:"root",cut:"all"}),k.render(),A.subscribe((function(){console.log(11111,A),k.render()}))}]);