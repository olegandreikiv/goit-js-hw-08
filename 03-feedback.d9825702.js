!function(){var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};function i(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var o="Expected a function",r=0/0,a=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,v=s||d||Function("return this")(),m=Object.prototype.toString,p=Math.max,y=Math.min,b=function(){return v.Date.now()};function g(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if((void 0===(t=e)?"undefined":i(t))=="symbol"||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return r;if(g(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var o=u.test(e);return o||l.test(e)?c(e.slice(2),o?2:8):f.test(e)?r:+e}n=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw TypeError(o);return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),function(e,t,n){var i,r,a,f,u,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw TypeError(o);function m(t){var n=i,o=r;return i=r=void 0,c=t,f=e.apply(o,n)}function j(e){var n=e-l,i=e-c;return void 0===l||n>=t||n<0||d&&i>=a}function h(){var e,n,i,o=b();if(j(o))return O(o);u=setTimeout(h,(e=o-l,n=o-c,i=t-e,d?y(i,a-n):i))}function O(e){return(u=void 0,v&&i)?m(e):(i=r=void 0,f)}function T(){var e,n=b(),o=j(n);if(i=arguments,r=this,l=n,o){if(void 0===u)return c=e=l,u=setTimeout(h,t),s?m(e):f;if(d)return u=setTimeout(h,t),m(l)}return void 0===u&&(u=setTimeout(h,t)),f}return t=S(t)||0,g(n)&&(s=!!n.leading,a=(d="maxWait"in n)?p(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=l=r=u=void 0},T.flush=function(){return void 0===u?f:O(b())},T}(e,t,{leading:i,maxWait:t,trailing:r})};var j=document.querySelector(".feedback-form"),h=j.querySelector('input[name="email"]'),O=j.querySelector('textarea[name="message"]');j.addEventListener("input",((e=n)&&e.__esModule?e.default:e)(function(){var e={email:h.value,message:O.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))},500)),j.addEventListener("submit",function(e){e.preventDefault(),console.log({email:h.value,message:O.value}),localStorage.removeItem("feedback-form-state"),j.reset()}),function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e);h.value=t.email,O.value=t.message}}()}();
//# sourceMappingURL=03-feedback.d9825702.js.map
