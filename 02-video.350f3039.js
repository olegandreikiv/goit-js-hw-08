!function(){var e,t,n,r,o,i,a,u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function c(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){m(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function f(){f=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function l(e,t,n,o){var i,a,u=Object.create((t&&t.prototype instanceof h?t:h).prototype);return r(u,"_invoke",{value:(i=new T(o||[]),a="suspendedStart",function(t,r){if("executing"===a)throw Error("Generator is already running");if("completed"===a){if("throw"===t)throw r;return j()}for(i.method=t,i.arg=r;;){var o=i.delegate;if(o){var u=function e(t,n){var r=n.method,o=t.iterator[r];if(void 0===o)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=void 0,e(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+r+"' method")),d;var i=s(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,d;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,d):a:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,d)}(o,i);if(u){if(u===d)continue;return u}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===a)throw a="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);a="executing";var c=s(e,n,i);if("normal"===c.type){if(a=i.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(a="completed",i.method="throw",i.arg=c.arg)}})}),u}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d={};function h(){}function p(){}function v(){}var y={};c(y,i,function(){return this});var m=Object.getPrototypeOf,g=m&&m(m(P([])));g&&g!==t&&n.call(g,i)&&(y=g);var b=v.prototype=h.prototype=Object.create(y);function w(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function k(e,t){var o;r(this,"_invoke",{value:function(r,i){function a(){return new t(function(o,a){!function r(o,i,a,u){var c=s(e[o],e,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,a,u)},function(e){r("throw",e,a,u)}):t.resolve(f).then(function(e){l.value=e,a(l)},function(e){return r("throw",e,a,u)})}u(c.arg)}(r,i,o,a)})}return o=o?o.then(a,a):a()}})}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function P(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=v,r(b,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:p,configurable:!0}),p.displayName=c(v,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,u,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(k.prototype),c(k.prototype,a,function(){return this}),e.AsyncIterator=k,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new k(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then(function(e){return e.done?e.value:a.next()})},w(b),c(b,u,"Generator"),c(b,i,function(){return this}),c(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=P,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:P(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}function d(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){n(e);return}u.done?t(c):Promise.resolve(c).then(r,o)}function h(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){d(i,r,o,a,u,"next",e)}function u(e){d(i,r,o,a,u,"throw",e)}a(void 0)})}}function p(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,T(r.key),r)}}function y(e,t,n){return t&&v(e.prototype,t),n&&v(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function m(e,t,n){return(t=T(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function w(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function k(e,t,n){return(k=w()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&b(o,n.prototype),o}).apply(null,arguments)}function E(e){var t="function"==typeof Map?new Map:void 0;return(E=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return k(e,arguments,g(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),b(n,e)})(e)}function x(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return(void 0===t?"undefined":c(t))==="symbol"?t:String(t)}var P=void 0!==u&&"[object global]"===({}).toString.call(u);function j(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function O(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function _(e){return/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e)}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(!isNaN(parseFloat(r))&&isFinite(r)&&Math.floor(r)==r)return"https://vimeo.com/".concat(r);if(O(r))return r.replace("http:","https:");if(t)throw TypeError("“".concat(t,"” is not a valid video id."));throw TypeError("“".concat(r,"” is not a vimeo.com url."))}var M=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"addEventListener",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"removeEventListener",i="string"==typeof t?[t]:t;return i.forEach(function(t){e[r](t,n)}),{cancel:function(){return i.forEach(function(t){return e[o](t,n)})}}},C=void 0!==Array.prototype.indexOf,F="undefined"!=typeof window&&void 0!==window.postMessage;if(!P&&(!C||!F))throw Error("Sorry, the Vimeo Player API is not available in this browser.");var N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==u?u:"undefined"!=typeof self?self:{};!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),r=function(e,t,r){n?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:r}):e[t]=r};e.WeakMap=function(){function e(){if(void 0===this)throw TypeError("Constructor WeakMap requires 'new'");if(r(this,"_id","_WeakMap_"+i()+"."+i()),arguments.length>0)throw TypeError("WeakMap iterable is not supported")}function n(e,n){if(!o(e)||!t.call(e,"_id"))throw TypeError(n+" method called on incompatible receiver "+(void 0===e?"undefined":c(e)))}function i(){return Math.random().toString().substring(2)}return r(e.prototype,"delete",function(e){if(n(this,"delete"),!o(e))return!1;var t=e[this._id];return!!t&&t[0]===e&&(delete e[this._id],!0)}),r(e.prototype,"get",function(e){if(n(this,"get"),o(e)){var t=e[this._id];if(t&&t[0]===e)return t[1]}}),r(e.prototype,"has",function(e){if(n(this,"has"),!o(e))return!1;var t=e[this._id];return!!t&&t[0]===e}),r(e.prototype,"set",function(e,t){if(n(this,"set"),!o(e))throw TypeError("Invalid value used as weak map key");var i=e[this._id];return i&&i[0]===e?(i[1]=t,this):(r(e,this._id,[e,t]),this)}),r(e,"_polyfill",!0),e}()}function o(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:N);var L=(e=n={exports:{}},n.exports,N[t="Promise"]=N[t]||function(){var e,t,n,r=Object.prototype.toString,o="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(t){e=function(e,t,n){return e[t]=n,e}}function i(e,r){n.add(e,r),t||(t=o(n.drain))}function a(e){var t,n=void 0===e?"undefined":c(e);return null!=e&&("object"==n||"function"==n)&&(t=e.then),"function"==typeof t&&t}function u(){for(var e=0;e<this.chain.length;e++)(function(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=a(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}})(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function l(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=a(e))?i(function(){var r=new d(n);try{t.call(e,function(){l.apply(r,arguments)},function(){s.apply(r,arguments)})}catch(e){s.call(r,e)}}):(n.msg=e,n.state=1,n.chain.length>0&&i(u,n))}catch(e){s.call(new d(n),e)}}}function s(e){var t=this;!t.triggered&&(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&i(u,t))}function f(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then(function(e){n(o,e)},r)}(o)}function d(e){this.def=e,this.triggered=!1}function h(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function p(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new h(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t}),t.chain.push(r),0!==t.state&&i(u,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,function(e){l.call(t,e)},function(e){s.call(t,e)})}catch(e){s.call(t,e)}}n=function(){var e,n,r;function o(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,i){r=new o(t,i),n?n.next=r:e=r,n=r,r=void 0},drain:function(){var r=e;for(e=n=t=void 0;r;)r.fn.call(r.self),r=r.next}}}();var v=e({},"constructor",p,!1);return p.prototype=v,e(v,"__NPO__",0,!1),e(p,"resolve",function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)})}),e(p,"reject",function(e){return new this(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)})}),e(p,"all",function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t(function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;f(t,e,function(e,t){i[e]=t,++a===o&&n(i)},r)})}),e(p,"race",function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):new t(function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");f(t,e,function(e,t){n(t)},r)})}),p}(),e.exports&&(e.exports=N[t]),n.exports),A=new WeakMap;function R(e,t,n){var r=A.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),A.set(e.element,r)}function I(e,t){return(A.get(e.element)||{})[t]||[]}function q(e,t,n){var r=A.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],A.set(e.element,r),!0;var o=r[t].indexOf(n);return -1!==o&&r[t].splice(o,1),A.set(e.element,r),r[t]&&0===r[t].length}function V(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function W(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}var D=["autopause","autoplay","background","byline","color","colors","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return D.reduce(function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t},t)}function U(e,t){var n=e.html;if(!t)throw TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise(function(r,o){if(!O(e))throw TypeError("“".concat(e,"” is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var a in t)t.hasOwnProperty(a)&&(i+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var u="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;u.open("GET",i,!0),u.onload=function(){if(404===u.status){o(Error("“".concat(e,"” was not found.")));return}if(403===u.status){o(Error("“".concat(e,"” is not embeddable.")));return}try{var t=JSON.parse(u.responseText);if(403===t.domain_status_code){U(t,n),o(Error("“".concat(e,"” is not embeddable.")));return}r(t)}catch(e){o(e)}},u.onerror=function(){var e=u.status?" (".concat(u.status,")"):"";o(Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},u.send()})}var H={role:"viewer",autoPlayMuted:!0,allowedDrift:.3,maxAllowedDrift:1,minCheckInterval:.1,maxRateAdjustment:.2,maxTimeToCatchUp:1},Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(a,e);var t,n,r,o,i=(t=w(),function(){var e,n=g(a);if(t){var r=g(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return x(e)}(this,e)});function a(e,t){var n,r,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=arguments.length>3?arguments[3]:void 0;return p(this,a),m(x(r=i.call(this)),"logger",void 0),m(x(r),"speedAdjustment",0),m(x(r),"adjustSpeed",(n=h(f().mark(function e(t,n){var o;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r.speedAdjustment!==n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.getPlaybackRate();case 4:return e.t0=e.sent,e.t1=r.speedAdjustment,e.t2=e.t0-e.t1,e.t3=n,o=e.t2+e.t3,r.log("New playbackRate:  ".concat(o)),e.next=12,t.setPlaybackRate(o);case 12:r.speedAdjustment=n;case 13:case"end":return e.stop()}},e)})),function(e,t){return n.apply(this,arguments)})),r.logger=u,r.init(t,e,s(s({},H),o)),r}return y(a,[{key:"disconnect",value:function(){this.dispatchEvent(new Event("disconnect"))}},{key:"init",value:(n=h(f().mark(function e(t,n,r){var o,i,a,u=this;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.waitForTOReadyState(t,"open");case 2:if("viewer"!==r.role){e.next=10;break}return e.next=5,this.updatePlayer(t,n,r);case 5:o=M(t,"change",function(){return u.updatePlayer(t,n,r)}),i=this.maintainPlaybackPosition(t,n,r),this.addEventListener("disconnect",function(){i.cancel(),o.cancel()}),e.next=14;break;case 10:return e.next=12,this.updateTimingObject(t,n);case 12:a=M(n,["seeked","play","pause","ratechange"],function(){return u.updateTimingObject(t,n)},"on","off"),this.addEventListener("disconnect",function(){return a.cancel()});case 14:case"end":return e.stop()}},e,this)})),function(e,t,r){return n.apply(this,arguments)})},{key:"updateTimingObject",value:(r=h(f().mark(function e(t,n){return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,n.getCurrentTime();case 3:return e.t1=e.sent,e.next=6,n.getPaused();case 6:if(!e.sent){e.next=10;break}e.t2=0,e.next=13;break;case 10:return e.next=12,n.getPlaybackRate();case 12:e.t2=e.sent;case 13:e.t3=e.t2,e.t4={position:e.t1,velocity:e.t3},e.t0.update.call(e.t0,e.t4);case 16:case"end":return e.stop()}},e)})),function(e,t){return r.apply(this,arguments)})},{key:"updatePlayer",value:(o=h(f().mark(function e(t,n,r){var o,i,a;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=(o=t.query()).position,a=o.velocity,"number"==typeof i&&n.setCurrentTime(i),"number"!=typeof a){e.next=25;break}if(0!==a){e.next=11;break}return e.next=6,n.getPaused();case 6:if(e.t0=e.sent,!1!==e.t0){e.next=9;break}n.pause();case 9:e.next=25;break;case 11:if(!(a>0)){e.next=25;break}return e.next=14,n.getPaused();case 14:if(e.t1=e.sent,!0!==e.t1){e.next=19;break}return e.next=18,n.play().catch(function(){var e=h(f().mark(function e(t){return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!("NotAllowedError"===t.name&&r.autoPlayMuted)){e.next=5;break}return e.next=3,n.setMuted(!0);case 3:return e.next=5,n.play().catch(function(e){return console.error("Couldn't play the video from TimingSrcConnector. Error:",e)});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 18:this.updatePlayer(t,n,r);case 19:return e.next=21,n.getPlaybackRate();case 21:if(e.t2=e.sent,e.t3=a,!(e.t2!==e.t3)){e.next=25;break}n.setPlaybackRate(a);case 25:case"end":return e.stop()}},e,this)})),function(e,t,n){return o.apply(this,arguments)})},{key:"maintainPlaybackPosition",value:function(e,t,n){var r,o=this,i=n.allowedDrift,a=n.maxAllowedDrift,u=n.minCheckInterval,c=n.maxRateAdjustment,l=n.maxTimeToCatchUp,s=(r=h(f().mark(function n(){var r,u,s,d,h;return f().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=0===e.query().velocity,n.t0){n.next=6;break}return n.next=4,t.getPaused();case 4:n.t1=n.sent,n.t0=!0===n.t1;case 6:if(!n.t0){n.next=8;break}return n.abrupt("return");case 8:return n.t2=e.query().position,n.next=11,t.getCurrentTime();case 11:if(n.t3=n.sent,u=Math.abs(r=n.t2-n.t3),o.log("Drift: ".concat(r)),!(u>a)){n.next=22;break}return n.next=18,o.adjustSpeed(t,0);case 18:t.setCurrentTime(e.query().position),o.log("Resync by currentTime"),n.next=29;break;case 22:if(!(u>i)){n.next=29;break}return h=(s=u/l)<(d=c)?(d-s)/2:d,n.next=28,o.adjustSpeed(t,h*Math.sign(r));case 28:o.log("Resync by playbackRate");case 29:case"end":return n.stop()}},n)})),function(){return r.apply(this,arguments)}),d=setInterval(function(){return s()},1e3*Math.min(l,Math.max(u,a)));return{cancel:function(){return clearInterval(d)}}}},{key:"log",value:function(e){var t;null===(t=this.logger)||void 0===t||t.call(this,"TimingSrcConnector: ".concat(e))}},{key:"waitForTOReadyState",value:function(e,t){return new Promise(function(n){!function r(){e.readyState===t?n():e.addEventListener("readystatechange",r,{once:!0})}()})}}]),a}(E(EventTarget)),$=new WeakMap,Q=new WeakMap,B={},J=function(){var e;function t(e){var n,r=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(p(this,t),window.jQuery&&e instanceof jQuery&&(e.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),e=e[0]),"undefined"!=typeof document&&"string"==typeof e&&(e=document.getElementById(e)),!((n=e)&&1===n.nodeType&&"nodeName"in n&&n.ownerDocument&&n.ownerDocument.defaultView))throw TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==e.nodeName){var i=e.querySelector("iframe");i&&(e=i)}if("IFRAME"===e.nodeName&&!O(e.getAttribute("src")||""))throw Error("The player element passed isn’t a Vimeo embed.");if($.has(e))return $.get(e);this._window=e.ownerDocument.defaultView,this.element=e,this.origin="*";var a=new L(function(t,n){if(r._onMessage=function(e){if(O(e.origin)&&r.element.contentWindow===e.source){"*"===r.origin&&(r.origin=e.origin);var o=V(e.data);if(o&&"error"===o.event&&o.data&&"ready"===o.data.method){var i=Error(o.data.message);i.name=o.data.name,n(i);return}var a=o&&"ready"===o.event,u=o&&"ping"===o.method;if(a||u){r.element.setAttribute("data-ready","true"),t();return}!function(e,t){t=V(t);var n,r=[];if(t.event)"error"===t.event&&I(e,t.data.method).forEach(function(n){var r=Error(t.data.message);r.name=t.data.name,n.reject(r),q(e,t.data.method,n)}),r=I(e,"event:".concat(t.event)),n=t.data;else if(t.method){var o=function(e,t){var n=I(e,t);if(n.length<1)return!1;var r=n.shift();return q(e,t,r),r}(e,t.method);o&&(r.push(o),n=t.value)}r.forEach(function(t){try{if("function"==typeof t){t.call(e,n);return}t.resolve(n)}catch(e){}})}(r,o)}},r._window.addEventListener("message",r._onMessage),"IFRAME"!==r.element.nodeName){var i=z(e,o);G(S(i),i,e).then(function(t){var n,o,i=U(t,e);return r.element=i,r._originalElement=e,n=e,o=A.get(n),A.set(i,o),A.delete(n),$.set(r.element,r),t}).catch(n)}});if(Q.set(this,a),$.set(this.element,this),"IFRAME"===this.element.nodeName&&W(this,"ping"),B.isEnabled){var u=function(){return B.exit()};this.fullscreenchangeHandler=function(){B.isFullscreen?R(r,"event:exitFullscreen",u):q(r,"event:exitFullscreen",u),r.ready().then(function(){W(r,"fullscreenchange",B.isFullscreen)})},B.on("fullscreenchange",this.fullscreenchangeHandler)}return this}return y(t,[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new L(function(r,o){return t.ready().then(function(){R(t,e,{resolve:r,reject:o}),W(t,e,n)}).catch(o)})}},{key:"get",value:function(e){var t=this;return new L(function(n,r){return e=j(e,"get"),t.ready().then(function(){R(t,e,{resolve:n,reject:r}),W(t,e)}).catch(r)})}},{key:"set",value:function(e,t){var n=this;return new L(function(r,o){if(e=j(e,"set"),null==t)throw TypeError("There must be a value to set.");return n.ready().then(function(){R(n,e,{resolve:r,reject:o}),W(n,e,t)}).catch(o)})}},{key:"on",value:function(e,t){if(!e)throw TypeError("You must pass an event name.");if(!t)throw TypeError("You must pass a callback function.");if("function"!=typeof t)throw TypeError("The callback must be a function.");0===I(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch(function(){}),R(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw TypeError("The callback must be a function.");q(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch(function(e){})}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=Q.get(this)||new L(function(e,t){t(Error("Unknown player. Probably unloaded."))});return L.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return B.isEnabled?B.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return B.isEnabled?B.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return B.isEnabled?L.resolve(B.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"remotePlaybackPrompt",value:function(){return this.callMethod("remotePlaybackPrompt")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new L(function(t){if(Q.delete(e),$.delete(e.element),e._originalElement&&($.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var n=e.element.querySelector("iframe");n&&n.parentNode&&(n.parentNode.parentNode&&e._originalElement&&e._originalElement!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))}e._window.removeEventListener("message",e._onMessage),B.isEnabled&&B.off("fullscreenchange",e.fullscreenchangeHandler),t()})}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"getColors",value:function(){return L.all([this.get("colorOne"),this.get("colorTwo"),this.get("colorThree"),this.get("colorFour")])}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"setColors",value:function(e){if(!Array.isArray(e))return new L(function(e,t){return t(TypeError("Argument must be an array."))});var t=new L(function(e){return e(null)}),n=[e[0]?this.set("colorOne",e[0]):t,e[1]?this.set("colorTwo",e[1]):t,e[2]?this.set("colorThree",e[2]):t,e[3]?this.set("colorFour",e[3]):t];return L.all(n)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getRemotePlaybackAvailability",value:function(){return this.get("remotePlaybackAvailability")}},{key:"getRemotePlaybackState",value:function(){return this.get("remotePlaybackState")}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}},{key:"setTimingSrc",value:(e=h(f().mark(function e(t,n){var r,o=this;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw TypeError("A Timing Object must be provided.");case 2:return e.next=4,this.ready();case 4:return r=new Y(this,t,n),W(this,"notifyTimingObjectConnect"),r.addEventListener("disconnect",function(){return W(o,"notifyTimingObjectDisconnect")}),e.abrupt("return",r);case 8:case"end":return e.stop()}},e,this)})),function(t,n){return e.apply(this,arguments)})}]),t}();P||(o={fullscreenchange:(r=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}()).fullscreenchange,fullscreenerror:r.fullscreenerror},Object.defineProperties(i={request:function(e){return new Promise(function(t,n){var o=function e(){i.off("fullscreenchange",e),t()};i.on("fullscreenchange",o);var a=(e=e||document.documentElement)[r.requestFullscreen]();a instanceof Promise&&a.then(o).catch(n)})},exit:function(){return new Promise(function(e,t){if(!i.isFullscreen){e();return}var n=function t(){i.off("fullscreenchange",t),e()};i.on("fullscreenchange",n);var o=document[r.exitFullscreen]();o instanceof Promise&&o.then(n).catch(t)})},on:function(e,t){var n=o[e];n&&document.addEventListener(n,t)},off:function(e,t){var n=o[e];n&&document.removeEventListener(n,t)}},{isFullscreen:{get:function(){return!!document[r.fullscreenElement]}},element:{enumerable:!0,get:function(){return document[r.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return!!document[r.fullscreenEnabled]}}}),B=i,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach(function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=z(e),r=S(t);G(r,t,e).then(function(t){return U(t,e)}).catch(n)}catch(e){n(e)}})}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;window.VimeoPlayerResizeEmbeds_||(window.VimeoPlayerResizeEmbeds_=!0,window.addEventListener("message",function(t){if(O(t.origin)&&t.data&&"spacechange"===t.data.event){for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){n[r].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;window.VimeoSeoMetadataAppended||(window.VimeoSeoMetadataAppended=!0,window.addEventListener("message",function(t){if(O(t.origin)){var n=V(t.data);if(n&&"ready"===n.event)for(var r=e.querySelectorAll("iframe"),o=0;o<r.length;o++){var i=r[o],a=i.contentWindow===t.source;_(i.src)&&a&&new J(i).callMethod("appendVideoMetadata",window.location.href)}}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoCheckedUrlTimeParam){window.VimeoCheckedUrlTimeParam=!0;var t=function(e){"console"in window&&console.error&&console.error("There was an error getting video Id: ".concat(e))};window.addEventListener("message",function(n){if(O(n.origin)){var r=V(n.data);if(r&&"ready"===r.event)for(var o=e.querySelectorAll("iframe"),i=0;i<o.length;i++)!function(){var e=o[i],r=e.contentWindow===n.source;if(_(e.src)&&r){var a=new J(e);a.getVideoId().then(function(e){var t=new RegExp("[?&]vimeo_t_".concat(e,"=([^&#]*)")).exec(window.location.href);if(t&&t[1]){var n=decodeURI(t[1]);a.setCurrentTime(n)}}).catch(t)}}()}})}}());var X={},K="Expected a function",Z=0/0,ee=/^\s+|\s+$/g,et=/^[-+]0x[0-9a-f]+$/i,en=/^0b[01]+$/i,er=/^0o[0-7]+$/i,eo=parseInt,ei="object"==typeof u&&u&&u.Object===Object&&u,ea="object"==typeof self&&self&&self.Object===Object&&self,eu=ei||ea||Function("return this")(),ec=Object.prototype.toString,el=Math.max,es=Math.min,ef=function(){return eu.Date.now()};function ed(e){var t=void 0===e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function eh(e){if("number"==typeof e)return e;if((void 0===(t=e)?"undefined":c(t))=="symbol"||t&&"object"==typeof t&&"[object Symbol]"==ec.call(t))return Z;if(ed(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=ed(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(ee,"");var r=en.test(e);return r||er.test(e)?eo(e.slice(2),r?2:8):et.test(e)?Z:+e}X=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw TypeError(K);return ed(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),function(e,t,n){var r,o,i,a,u,c,l=0,s=!1,f=!1,d=!0;if("function"!=typeof e)throw TypeError(K);function h(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function p(e){var n=e-c,r=e-l;return void 0===c||n>=t||n<0||f&&r>=i}function v(){var e,n,r,o=ef();if(p(o))return y(o);u=setTimeout(v,(e=o-c,n=o-l,r=t-e,f?es(r,i-n):r))}function y(e){return(u=void 0,d&&r)?h(e):(r=o=void 0,a)}function m(){var e,n=ef(),i=p(n);if(r=arguments,o=this,c=n,i){if(void 0===u)return l=e=c,u=setTimeout(v,t),s?h(e):a;if(f)return u=setTimeout(v,t),h(c)}return void 0===u&&(u=setTimeout(v,t)),a}return t=eh(t)||0,ed(n)&&(s=!!n.leading,i=(f="maxWait"in n)?el(eh(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),m.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=o=u=void 0},m.flush=function(){return void 0===u?a:y(ef())},m}(e,t,{leading:r,maxWait:t,trailing:o})};var ep=new J("vimeo-player");ep.on("timeupdate",((a=X)&&a.__esModule?a.default:a)(function(){ep.getCurrentTime().then(function(e){localStorage.setItem("videoplayer-current-time",e)})},1e3));var ev=localStorage.getItem("videoplayer-current-time");ev&&ep.setCurrentTime(ev)}();
//# sourceMappingURL=02-video.350f3039.js.map
