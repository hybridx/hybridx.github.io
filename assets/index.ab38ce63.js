(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();const S="/assets/logo.17c5626f.svg";(function(d){var a={};function o(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return d[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=d,o.c=a,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e||4&e&&typeof t=="object"&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&typeof t!="string")for(var s in t)o.d(i,s,function(b){return t[b]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)})([function(d,a){function o(l){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(l)}function t(l,n){for(var r=0;r<n.length;r++){var u=n[r];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function e(l,n){return!n||o(n)!=="object"&&typeof n!="function"?function(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(l):n}function i(l){var n=typeof Map=="function"?new Map:void 0;return(i=function(r){if(r===null||(u=r,Function.toString.call(u).indexOf("[native code]")===-1))return r;var u;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(n!==void 0){if(n.has(r))return n.get(r);n.set(r,p)}function p(){return s(r,arguments,g(this).constructor)}return p.prototype=Object.create(r.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),m(p,r)})(l)}function s(l,n,r){return(s=b()?Reflect.construct:function(u,p,h){var y=[null];y.push.apply(y,p);var c=new(Function.bind.apply(u,y));return h&&m(c,h.prototype),c}).apply(null,arguments)}function b(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function m(l,n){return(m=Object.setPrototypeOf||function(r,u){return r.__proto__=u,r})(l,n)}function g(l){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(l)}var v=document.createElement("template");v.innerHTML=`
`.concat(`
<style>
:root {
  --fontSize: 14px;
  --fontColor: #72767B;
}
.copyright-section {
	font-size: var(--fontSize, 14px);
	color: var(--fontColor, #72767B);
}
</style>`,`
`).concat(`
<div class="copyright-section">
	<span class="copyright">
			Copyright &copy; <span id="year"></span> <slot name="name">All rights reserved.</slot>
</div>`,`
`);var O=function(l){(function(c,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function");c.prototype=Object.create(f&&f.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),f&&m(c,f)})(y,l);var n,r,u,p,h=(n=y,r=b(),function(){var c,f=g(n);if(r){var w=g(this).constructor;c=Reflect.construct(f,arguments,w)}else c=f.apply(this,arguments);return e(this,c)});function y(){return function(c,f){if(!(c instanceof f))throw new TypeError("Cannot call a class as a function")}(this,y),h.call(this)}return u=y,(p=[{key:"connectedCallback",value:function(){var c=this.attachShadow({mode:"open"});c.appendChild(v.content.cloneNode(!0)),this.getAttribute("year")===null?c.getElementById("year").innerHTML=new Date().getFullYear():c.getElementById("year").innerHTML=this.getAttribute("year")}}])&&t(u.prototype,p),y}(i(HTMLElement));window.customElements.define("copyright-x",O)}]);document.querySelector("#app").innerHTML=`
  <div>
    <img src="${S}" class="logo vanilla" alt="Hybridx logo" />
    <p>
      Coming soon!
    </p>
    <copyright-x />
  </div>
`;
