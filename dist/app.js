!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3);n(4)(),n(5)},function(e,t,n){},function(e,t,n){},function(e,t,n){var o,r,i;r=[],void 0===(i="function"==typeof(o=()=>{let e,t,n;const o={sel:[],el:[]};let r=!1,i=!1;function l(){}function a(e,t){Array.prototype.forEach.call(e,t)}function s(){this.reset()}function c(e){return t.some(t=>t.start<e&&e<t.end)}function d(e,o,r){if(0===r)e.style.whiteSpace=o,n=0,t=[],function e(o,r){if(o.nodeType===o.ELEMENT_NODE)if("nowrap"===window.getComputedStyle(o).whiteSpace){const e=o.outerHTML.length;t.push({start:n,end:n+e}),n+=e}else a(o.childNodes,t=>{e(t,!0)}),r&&(n+=o.outerHTML.length-o.innerHTML.length);else o.nodeType===o.COMMENT_NODE?n+=o.length+7:o.nodeType===o.PROCESSING_INSTRUCTION_NODE?n+=o.length+2:n+=o.length}(e,!1),e.style.whiteSpace="nowrap";else{const e=[];t.forEach(t=>{t.start>r&&e.push({start:t.start-r,end:t.end-r})}),t=e}}function u(e,t,n){const o=(t=t.trim()).split(" ").length;if(t+=" ",o<2)return t;const r=document.createElement("span");r.innerHTML=t,e.appendChild(r);const i=r.offsetWidth;r.parentNode.removeChild(r);const l=Math.floor((n-i)/(o-1));r.style.wordSpacing=l+"px",r.setAttribute("data-owner","balance-text-justify");const a=document.createElement("div");return a.appendChild(r),a.innerHTML}function f(t,n){const o=/([^\S\u00a0]|-|\u2014|\u2013|\u00ad)(?![^<]*>)/g;let r;if(!e)for(e=[],r=o.exec(t);null!==r;)c(r.index)||e.push(r.index),r=o.exec(t);return-1!==e.indexOf(n)}function p(e,t){return 0===t||t===e.length||f(e,t-1)&&!f(e,t)}function h(e,t,n,o,r,i,l){let a;if(t&&"string"==typeof t)for(;;){for(;!p(t,i);)i+=r;if(e.innerHTML=t.substr(0,i),a=e.offsetWidth,r<0){if(a<=o||a<=0||0===i)break}else if(o<=a||n<=a||i===t.length)break;i+=r}l.index=i,l.width=a}function y(e){return e?"string"==typeof e?document.querySelectorAll(e):e.tagName&&e.querySelectorAll?[e]:e:[]}function g(t){a(y(t),t=>{!function(e){let t=e.querySelectorAll('br[data-owner="balance-text-hyphen"]');a(t,e=>{e.outerHTML=""}),t=e.querySelectorAll('br[data-owner="balance-text"]'),a(t,e=>{e.outerHTML=" "});let n=e.querySelectorAll('span[data-owner="balance-text-softhyphen"]');if(n.length>0&&a(n,e=>{const t=document.createTextNode("­");e.parentNode.insertBefore(t,e),e.parentNode.removeChild(e)}),n=e.querySelectorAll('span[data-owner="balance-text-justify"]'),n.length>0){let t="";a(n,e=>{t+=e.textContent,e.parentNode.removeChild(e)}),e.innerHTML=t}}(t);const n=t.style.whiteSpace,o=t.style.float,r=t.style.display,i=t.style.position,l=t.style.lineHeight;t.style.lineHeight="normal";const c=t.offsetWidth,f=t.offsetHeight;t.style.whiteSpace="nowrap",t.style.float="none",t.style.display="inline",t.style.position="static";let p=t.offsetWidth;const y=t.offsetHeight,g="pre-wrap"===n?0:function(e,t){const n=document.createElement("div");n.style.display="block",n.style.position="absolute",n.style.bottom=0,n.style.right=0,n.style.width=0,n.style.height=0,n.style.margin=0,n.style.padding=0,n.style.visibility="hidden",n.style.overflow="hidden";const o=document.createElement("span");o.style.fontSize="2000px",o.innerHTML="&nbsp;",n.appendChild(o),e.appendChild(n);const r=o.getBoundingClientRect();return n.parentNode.removeChild(n),t/(r.height/r.width)}(t,y);if(c>0&&p>c&&p<5e3){let o=t.innerHTML,r="",i="";const l=function(e){return"justify"===(e.currentStyle||window.getComputedStyle(e,null)).textAlign}(t);let a,m,b,w,x,M,v,S=Math.round(f/y),T=0;for(;S>1;)e=null,d(t,n,T),a=Math.round((p+g)/S-g),m=Math.round((o.length+1)/S)-1,b=new s,h(t,o,c,a,-1,m,b),w=new s,m=b.index,h(t,o,c,a,1,m,w),b.reset(),m=w.index,h(t,o,c,a,-1,m,b),x=0===b.index?w.index:c<w.width||b.index===w.index||Math.abs(a-b.width)<Math.abs(w.width-a)?b.index:w.index,i=o.substr(0,x).replace(/\s$/,""),v=Boolean(i.match(/\u00ad$/)),v&&(i=i.replace(/\u00ad$/,'<span data-owner="balance-text-softhyphen">-</span>')),l?r+=u(t,i,c):(r+=i,M=v||Boolean(i.match(/(-|\u2014|\u2013)$/)),r+=M?'<br data-owner="balance-text-hyphen" />':'<br data-owner="balance-text" />'),o=o.substr(x),T=x,S--,t.innerHTML=o,p=t.offsetWidth;t.innerHTML=l?r+u(t,o,c):r+o}t.style.whiteSpace=n,t.style.float=o,t.style.display=r,t.style.position=i,t.style.lineHeight=l})}function m(){const e=y(o.sel.join(","));g(Array.prototype.concat.apply(o.el,e))}function b(){var e;r||(e=m,"loading"!==document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",()=>{"loading"!==document.readyState&&e()}),window.addEventListener("load",m),window.addEventListener("resize",function(e,t,n,...o){let r;return function(){const i=this;r?clearTimeout(r):n&&e.apply(i,o),r=setTimeout((function(){n||e.apply(i,o),r=null}),t||100)}}(m)),r=!0)}function w(e,t){e?t&&!0===t.watch?function(e){"string"==typeof e?o.sel.push(e):a(y(e),e=>{o.el.push(e)}),b(),m()}(e):t&&!1===t.watch?function(e){"string"==typeof e?o.sel=o.sel.filter(t=>t!==e):(e=y(e),o.el=o.el.filter(t=>-1===e.indexOf(t)))}(e):g(e):i||(o.sel.push(".balance-text"),b(),i=!0)}return s.prototype.reset=function(){this.index=0,this.width=0},w.updateWatched=m,function(){if("undefined"==typeof window)return!1;const{style:e}=document.documentElement;return e.textWrap||e.WebkitTextWrap||e.MozTextWrap||e.MsTextWrap}()?(l.updateWatched=l,l):w})?o.apply(t,r):o)||(e.exports=i)},function(e,t){document.addEventListener("DOMContentLoaded",()=>{const e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.target,n=document.getElementById(t);e.classList.toggle("is-active"),n.classList.toggle("is-active")})})})}]);