(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();const Qt="/assets/logo-Dg_tNx_y.svg";(function(s){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return s[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=s,e.c=t,e.d=function(o,r,i){e.o(o,r)||Object.defineProperty(o,r,{enumerable:!0,get:i})},e.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},e.t=function(o,r){if(1&r&&(o=e(o)),8&r||4&r&&typeof o=="object"&&o&&o.__esModule)return o;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:o}),2&r&&typeof o!="string")for(var a in o)e.d(i,a,(function(c){return o[c]}).bind(null,a));return i},e.n=function(o){var r=o&&o.__esModule?function(){return o.default}:function(){return o};return e.d(r,"a",r),r},e.o=function(o,r){return Object.prototype.hasOwnProperty.call(o,r)},e.p="",e(e.s=0)})([function(s,t){function e(h){return(e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(h)}function o(h,n){for(var p=0;p<n.length;p++){var g=n[p];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(h,g.key,g)}}function r(h,n){return!n||e(n)!=="object"&&typeof n!="function"?function(p){if(p===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p}(h):n}function i(h){var n=typeof Map=="function"?new Map:void 0;return(i=function(p){if(p===null||(g=p,Function.toString.call(g).indexOf("[native code]")===-1))return p;var g;if(typeof p!="function")throw new TypeError("Super expression must either be null or a function");if(n!==void 0){if(n.has(p))return n.get(p);n.set(p,w)}function w(){return a(p,arguments,x(this).constructor)}return w.prototype=Object.create(p.prototype,{constructor:{value:w,enumerable:!1,writable:!0,configurable:!0}}),l(w,p)})(h)}function a(h,n,p){return(a=c()?Reflect.construct:function(g,w,T){var S=[null];S.push.apply(S,w);var b=new(Function.bind.apply(g,S));return T&&l(b,T.prototype),b}).apply(null,arguments)}function c(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function l(h,n){return(l=Object.setPrototypeOf||function(p,g){return p.__proto__=g,p})(h,n)}function x(h){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(h)}var m=document.createElement("template");m.innerHTML=`
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
`);var u=function(h){(function(b,k){if(typeof k!="function"&&k!==null)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(k&&k.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),k&&l(b,k)})(S,h);var n,p,g,w,T=(n=S,p=c(),function(){var b,k=x(n);if(p){var Gt=x(this).constructor;b=Reflect.construct(k,arguments,Gt)}else b=k.apply(this,arguments);return r(this,b)});function S(){return function(b,k){if(!(b instanceof k))throw new TypeError("Cannot call a class as a function")}(this,S),T.call(this)}return g=S,(w=[{key:"connectedCallback",value:function(){var b=this.attachShadow({mode:"open"});b.appendChild(m.content.cloneNode(!0)),this.getAttribute("year")===null?b.getElementById("year").innerHTML=new Date().getFullYear():b.getElementById("year").innerHTML=this.getAttribute("year")}}])&&o(g.prototype,w),S}(i(HTMLElement));window.customElements.define("copyright-x",u)}]);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=globalThis,yt=nt.ShadowRoot&&(nt.ShadyCSS===void 0||nt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wt=Symbol(),Et=new WeakMap;let Lt=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==wt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(yt&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=Et.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Et.set(e,t))}return t}toString(){return this.cssText}};const Zt=s=>new Lt(typeof s=="string"?s:s+"",void 0,wt),$=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((o,r,i)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[i+1],s[0]);return new Lt(e,s,wt)},Yt=(s,t)=>{if(yt)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const o=document.createElement("style"),r=nt.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=e.cssText,s.appendChild(o)}},Pt=yt?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return Zt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Kt,defineProperty:Xt,getOwnPropertyDescriptor:te,getOwnPropertyNames:ee,getOwnPropertySymbols:re,getPrototypeOf:oe}=Object,z=globalThis,Ct=z.trustedTypes,se=Ct?Ct.emptyScript:"",xt=z.reactiveElementPolyfillSupport,X=(s,t)=>s,lt={toAttribute(s,t){switch(t){case Boolean:s=s?se:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},$t=(s,t)=>!Kt(s,t),Mt={attribute:!0,type:String,converter:lt,reflect:!1,useDefault:!1,hasChanged:$t};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),z.litPropertyMetadata??(z.litPropertyMetadata=new WeakMap);let W=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Mt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(t,o,e);r!==void 0&&Xt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){const{get:r,set:i}=te(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:r,set(a){const c=r==null?void 0:r.call(this);i==null||i.call(this,a),this.requestUpdate(t,c,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Mt}static _$Ei(){if(this.hasOwnProperty(X("elementProperties")))return;const t=oe(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(X("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(X("properties"))){const e=this.properties,o=[...ee(e),...re(e)];for(const r of o)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,r]of e)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const r=this._$Eu(e,o);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)e.unshift(Pt(r))}else t!==void 0&&e.push(Pt(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Yt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostConnected)==null?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostDisconnected)==null?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){var i;const o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(r!==void 0&&o.reflect===!0){const a=(((i=o.converter)==null?void 0:i.toAttribute)!==void 0?o.converter:lt).toAttribute(e,o.type);this._$Em=t,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(t,e){var i,a;const o=this.constructor,r=o._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const c=o.getPropertyOptions(r),l=typeof c.converter=="function"?{fromAttribute:c.converter}:((i=c.converter)==null?void 0:i.fromAttribute)!==void 0?c.converter:lt;this._$Em=r;const x=l.fromAttribute(e,c.type);this[r]=x??((a=this._$Ej)==null?void 0:a.get(r))??x,this._$Em=null}}requestUpdate(t,e,o,r=!1,i){var a;if(t!==void 0){const c=this.constructor;if(r===!1&&(i=this[t]),o??(o=c.getPropertyOptions(t)),!((o.hasChanged??$t)(i,e)||o.useDefault&&o.reflect&&i===((a=this._$Ej)==null?void 0:a.get(t))&&!this.hasAttribute(c._$Eu(t,o))))return;this.C(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:r,wrapped:i},a){o&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,a??e??this[t]),i!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,a]of r){const{wrapped:c}=a,l=this[i];c!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,a,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(o=this._$EO)==null||o.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(o=>{var r;return(r=o.hostUpdated)==null?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};W.elementStyles=[],W.shadowRootOptions={mode:"open"},W[X("elementProperties")]=new Map,W[X("finalized")]=new Map,xt==null||xt({ReactiveElement:W}),(z.reactiveElementVersions??(z.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=globalThis,jt=s=>s,ct=tt.trustedTypes,Ot=ct?ct.createPolicy("lit-html",{createHTML:s=>s}):void 0,Nt="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,Ht="?"+O,ie=`<${Ht}>`,L=document,et=()=>L.createComment(""),rt=s=>s===null||typeof s!="object"&&typeof s!="function",kt=Array.isArray,ae=s=>kt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",ft=`[ 	
\f\r]`,K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zt=/-->/g,Bt=/>/g,D=RegExp(`>|${ft}(?:([^\\s"'>=/]+)(${ft}*=${ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Tt=/'/g,Dt=/"/g,Rt=/^(?:script|style|textarea|title)$/i,ne=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),f=ne(1),q=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Ft=new WeakMap,F=L.createTreeWalker(L,129);function Ut(s,t){if(!kt(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ot!==void 0?Ot.createHTML(t):t}const le=(s,t)=>{const e=s.length-1,o=[];let r,i=t===2?"<svg>":t===3?"<math>":"",a=K;for(let c=0;c<e;c++){const l=s[c];let x,m,u=-1,h=0;for(;h<l.length&&(a.lastIndex=h,m=a.exec(l),m!==null);)h=a.lastIndex,a===K?m[1]==="!--"?a=zt:m[1]!==void 0?a=Bt:m[2]!==void 0?(Rt.test(m[2])&&(r=RegExp("</"+m[2],"g")),a=D):m[3]!==void 0&&(a=D):a===D?m[0]===">"?(a=r??K,u=-1):m[1]===void 0?u=-2:(u=a.lastIndex-m[2].length,x=m[1],a=m[3]===void 0?D:m[3]==='"'?Dt:Tt):a===Dt||a===Tt?a=D:a===zt||a===Bt?a=K:(a=D,r=void 0);const n=a===D&&s[c+1].startsWith("/>")?" ":"";i+=a===K?l+ie:u>=0?(o.push(x),l.slice(0,u)+Nt+l.slice(u)+O+n):l+O+(u===-2?c:n)}return[Ut(s,i+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};let bt=class Vt{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let i=0,a=0;const c=t.length-1,l=this.parts,[x,m]=le(t,e);if(this.el=Vt.createElement(x,o),F.currentNode=this.el.content,e===2||e===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=F.nextNode())!==null&&l.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(Nt)){const h=m[a++],n=r.getAttribute(u).split(O),p=/([.?@])?(.*)/.exec(h);l.push({type:1,index:i,name:p[2],strings:n,ctor:p[1]==="."?de:p[1]==="?"?pe:p[1]==="@"?he:dt}),r.removeAttribute(u)}else u.startsWith(O)&&(l.push({type:6,index:i}),r.removeAttribute(u));if(Rt.test(r.tagName)){const u=r.textContent.split(O),h=u.length-1;if(h>0){r.textContent=ct?ct.emptyScript:"";for(let n=0;n<h;n++)r.append(u[n],et()),F.nextNode(),l.push({type:2,index:++i});r.append(u[h],et())}}}else if(r.nodeType===8)if(r.data===Ht)l.push({type:2,index:i});else{let u=-1;for(;(u=r.data.indexOf(O,u+1))!==-1;)l.push({type:7,index:i}),u+=O.length-1}i++}}static createElement(t,e){const o=L.createElement("template");return o.innerHTML=t,o}};function J(s,t,e=s,o){var a,c;if(t===q)return t;let r=o!==void 0?(a=e._$Co)==null?void 0:a[o]:e._$Cl;const i=rt(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((c=r==null?void 0:r._$AO)==null||c.call(r,!1),i===void 0?r=void 0:(r=new i(s),r._$AT(s,e,o)),o!==void 0?(e._$Co??(e._$Co=[]))[o]=r:e._$Cl=r),r!==void 0&&(t=J(s,r._$AS(s,t.values),r,o)),t}let ce=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,r=((t==null?void 0:t.creationScope)??L).importNode(e,!0);F.currentNode=r;let i=F.nextNode(),a=0,c=0,l=o[0];for(;l!==void 0;){if(a===l.index){let x;l.type===2?x=new _t(i,i.nextSibling,this,t):l.type===1?x=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(x=new ue(i,this,t)),this._$AV.push(x),l=o[++c]}a!==(l==null?void 0:l.index)&&(i=F.nextNode(),a++)}return F.currentNode=L,r}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}},_t=class Wt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,o,r){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),rt(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==q&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ae(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==v&&rt(this._$AH)?this._$AA.nextSibling.data=t:this.T(L.createTextNode(t)),this._$AH=t}$(t){var i;const{values:e,_$litType$:o}=t,r=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=bt.createElement(Ut(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(e);else{const a=new ce(r,this),c=a.u(this.options);a.p(e),this.T(c),this._$AH=a}}_$AC(t){let e=Ft.get(t.strings);return e===void 0&&Ft.set(t.strings,e=new bt(t)),e}k(t){kt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const i of t)r===e.length?e.push(o=new Wt(this.O(et()),this.O(et()),this,this.options)):o=e[r],o._$AI(i),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,e);t!==this._$AB;){const r=jt(t).nextSibling;jt(t).remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},dt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,r,i){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=v}_$AI(t,e=this,o,r){const i=this.strings;let a=!1;if(i===void 0)t=J(this,t,e,0),a=!rt(t)||t!==this._$AH&&t!==q,a&&(this._$AH=t);else{const c=t;let l,x;for(t=i[0],l=0;l<i.length-1;l++)x=J(this,c[o+l],e,l),x===q&&(x=this._$AH[l]),a||(a=!rt(x)||x!==this._$AH[l]),x===v?t=v:t!==v&&(t+=(x??"")+i[l+1]),this._$AH[l]=x}a&&!r&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},de=class extends dt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}},pe=class extends dt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}},he=class extends dt{constructor(t,e,o,r,i){super(t,e,o,r,i),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??v)===q)return;const o=this._$AH,r=t===v&&o!==v||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==v&&(o===v||r);r&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},ue=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}};const mt=tt.litHtmlPolyfillSupport;mt==null||mt(bt,_t),(tt.litHtmlVersions??(tt.litHtmlVersions=[])).push("3.3.2");const xe=(s,t,e)=>{const o=(e==null?void 0:e.renderBefore)??t;let r=o._$litPart$;if(r===void 0){const i=(e==null?void 0:e.renderBefore)??null;o._$litPart$=r=new _t(t.insertBefore(et(),i),i,void 0,e??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis;class y extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xe(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return q}}var It;y._$litElement$=!0,y.finalized=!0,(It=I.litElementHydrateSupport)==null||It.call(I,{LitElement:y});const gt=I.litElementPolyfillSupport;gt==null||gt({LitElement:y});(I.litElementVersions??(I.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe={attribute:!0,type:String,converter:lt,reflect:!1,hasChanged:$t},me=(s=fe,t,e)=>{const{kind:o,metadata:r}=e;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),o==="setter"&&((s=Object.create(s)).wrapped=!0),i.set(e.name,s),o==="accessor"){const{name:a}=e;return{set(c){const l=t.get.call(this);t.set.call(this,c),this.requestUpdate(a,l,s,!0,c)},init(c){return c!==void 0&&this.C(a,void 0,s,c),c}}}if(o==="setter"){const{name:a}=e;return function(c){const l=this[a];t.call(this,c),this.requestUpdate(a,l,s,!0,c)}}throw Error("Unsupported decorator location: "+o)};function d(s){return(t,e)=>typeof e=="object"?me(s,t,e):((o,r,i)=>{const a=r.hasOwnProperty(i);return r.constructor.createProperty(i,o),a?Object.getOwnPropertyDescriptor(r,i):void 0})(s,t,e)}if(typeof document<"u"&&!document.getElementById("tx-defaults")){const s=document.createElement("style");s.id="tx-defaults",s.textContent=`
    :root {
      /* ── Surface ── */
      --tx-bg: #F5F6FA;
      --tx-surface: #FFFFFF;
      --tx-surface-alt: #F8F9FC;

      /* ── Palette ── */
      --tx-accent: #F3B23A;
      --tx-accent-soft: rgba(243, 178, 58, 0.10);
      --tx-primary: #4A7CFF;
      --tx-primary-soft: rgba(74, 124, 255, 0.08);
      --tx-success: #22C55E;
      --tx-success-soft: rgba(34, 197, 94, 0.08);
      --tx-danger: #EF4444;
      --tx-danger-soft: rgba(239, 68, 68, 0.08);

      /* ── Text ── */
      --tx-text: #111827;
      --tx-text-secondary: #4B5563;
      --tx-text-muted: #9CA3AF;

      /* ── Border ── */
      --tx-border: #E5E7EB;
      --tx-border-focus: var(--tx-primary);

      /* ── Shadows ── */
      --tx-shadow-xs: 0 1px 2px rgba(0,0,0,0.05);
      --tx-shadow-sm: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
      --tx-shadow-md: 0 4px 6px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.04);
      --tx-shadow-lg: 0 10px 15px rgba(0,0,0,0.06), 0 4px 6px rgba(0,0,0,0.03);
      --tx-shadow-xl: 0 20px 25px rgba(0,0,0,0.07), 0 8px 10px rgba(0,0,0,0.03);
      --tx-ring-focus: 0 0 0 3px var(--tx-primary-soft);

      /* ── Radius ── */
      --tx-radius-sm: 6px;
      --tx-radius: 8px;
      --tx-radius-lg: 12px;
      --tx-radius-xl: 16px;
      --tx-radius-pill: 999px;

      /* ── Spacing ── */
      --tx-space-1: 4px;
      --tx-space-2: 8px;
      --tx-space-3: 12px;
      --tx-space-4: 16px;
      --tx-space-5: 20px;
      --tx-space-6: 24px;
      --tx-space-8: 32px;
      --tx-space-10: 40px;
      --tx-space-12: 48px;
      --tx-space-16: 64px;

      /* ── Typography ── */
      --tx-text-xs: 0.75rem;
      --tx-text-sm: 0.875rem;
      --tx-text-base: 1rem;
      --tx-text-lg: 1.125rem;
      --tx-text-xl: 1.25rem;
      --tx-text-2xl: 1.5rem;
      --tx-text-3xl: 1.875rem;
      --tx-text-4xl: 2.25rem;

      /* ── Motion ── */
      --tx-transition: all 0.15s ease;
      --tx-transition-slow: all 0.25s ease;

      /* ── Font ── */
      --tx-font: 'Red Hat Text', system-ui, -apple-system, sans-serif;
      --tx-font-mono: 'Red Hat Mono', 'JetBrains Mono', monospace;
    }
  `,document.head.prepend(s)}const A=$`
  :host {
    font-family: var(--tx-font);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;var ge=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,Y=(s,t,e,o)=>{for(var r=o>1?void 0:o?ve(t,e):t,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&ge(t,e,r),r};let B=class extends y{constructor(){super(...arguments),this.disabled=!1,this.variant="default",this.size="md",this.pill=!1,this.iconOnly=!1}render(){return f`
      <button ?disabled=${this.disabled} part="button">
        <slot></slot>
      </button>
    `}};B.styles=[A,$`
      :host {
        display: inline-block;
      }

      button {
        all: unset;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 8px 16px;
        background: var(--tx-surface);
        color: var(--tx-text);
        font-family: var(--tx-font);
        font-size: var(--tx-text-sm);
        font-weight: 500;
        border-radius: var(--tx-radius);
        border: 1px solid var(--tx-border);
        cursor: pointer;
        transition: var(--tx-transition);
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        white-space: nowrap;
      }

      button:hover {
        background: var(--tx-surface-alt);
        border-color: #D1D5DB;
      }

      button:active {
        background: var(--tx-surface-alt);
      }

      button:focus-visible {
        outline: 2px solid var(--tx-primary);
        outline-offset: 2px;
      }

      button[disabled] {
        opacity: 0.5;
        pointer-events: none;
      }

      :host([variant='primary']) button {
        background: var(--tx-primary);
        color: #fff;
        border-color: transparent;
        box-shadow: var(--tx-shadow-xs);
      }

      :host([variant='primary']) button:hover {
        filter: brightness(1.08);
        box-shadow: var(--tx-shadow-sm);
      }

      :host([variant='primary']) button:active {
        filter: brightness(0.95);
        box-shadow: none;
      }

      :host([variant='accent']) button {
        background: var(--tx-accent);
        color: #fff;
        border-color: transparent;
        box-shadow: var(--tx-shadow-xs);
      }

      :host([variant='accent']) button:hover {
        filter: brightness(1.08);
        box-shadow: var(--tx-shadow-sm);
      }

      :host([variant='accent']) button:active {
        filter: brightness(0.95);
        box-shadow: none;
      }

      :host([variant='ghost']) button {
        background: transparent;
        border-color: transparent;
        color: var(--tx-text-secondary);
      }

      :host([variant='ghost']) button:hover {
        background: var(--tx-surface-alt);
        color: var(--tx-text);
      }

      :host([size='sm']) button {
        padding: 5px 10px;
        font-size: var(--tx-text-xs);
        border-radius: var(--tx-radius-sm);
      }

      :host([size='lg']) button {
        padding: 12px 24px;
        font-size: var(--tx-text-base);
        border-radius: var(--tx-radius);
      }

      :host([pill]) button {
        border-radius: var(--tx-radius-pill);
      }

      :host([icon-only]) button {
        padding: 8px;
        border-radius: 50%;
        aspect-ratio: 1;
      }

      :host([icon-only][size='sm']) button {
        padding: 5px;
      }
    `];Y([d({type:Boolean,reflect:!0})],B.prototype,"disabled",2);Y([d({type:String,reflect:!0})],B.prototype,"variant",2);Y([d({type:String,reflect:!0})],B.prototype,"size",2);Y([d({type:Boolean,reflect:!0})],B.prototype,"pill",2);Y([d({type:Boolean,reflect:!0,attribute:"icon-only"})],B.prototype,"iconOnly",2);B=Y([_("tx-button")],B);var be=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,R=(s,t,e,o)=>{for(var r=o>1?void 0:o?ye(t,e):t,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&be(t,e,r),r};let P=class extends y{constructor(){super(...arguments),this.label="",this.name="",this.placeholder="",this.value="",this.type="text",this.search=!1}_handleInput(s){const t=s.target;this.value=t.value,this.dispatchEvent(new CustomEvent("tx-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){var s;return f`
      <div class="wrapper">
        ${this.label?f`<label>${this.label}</label>`:""}
        <div class="field">
          <input
            part="input"
            type=${this.search?"search":this.type}
            name=${this.name||((s=this.label)==null?void 0:s.toLowerCase().replaceAll(/\s+/g,"-"))||"input"}
            .value=${this.value}
            placeholder=${this.placeholder}
            @input=${this._handleInput}
          />
        </div>
      </div>
    `}};P.styles=[A,$`
      :host {
        display: block;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      label {
        font-size: var(--tx-text-xs);
        font-weight: 600;
        color: var(--tx-text-secondary);
        letter-spacing: 0.01em;
      }

      .field {
        position: relative;
        display: flex;
        align-items: center;
      }

      input {
        all: unset;
        width: 100%;
        padding: 8px 12px;
        background: var(--tx-surface);
        color: var(--tx-text);
        font-family: var(--tx-font);
        font-size: var(--tx-text-sm);
        border-radius: var(--tx-radius);
        border: 1px solid var(--tx-border);
        transition: var(--tx-transition);
      }

      input::placeholder {
        color: var(--tx-text-muted);
      }

      input:hover {
        border-color: #D1D5DB;
      }

      input:focus {
        border-color: var(--tx-border-focus);
        box-shadow: var(--tx-ring-focus);
      }

      :host([search]) .field::before {
        content: '';
        position: absolute;
        left: 12px;
        width: 13px;
        height: 13px;
        border: 2px solid var(--tx-text-muted);
        border-radius: 50%;
        pointer-events: none;
      }

      :host([search]) .field::after {
        content: '';
        position: absolute;
        left: 23px;
        top: calc(50% + 4px);
        width: 2px;
        height: 5px;
        background: var(--tx-text-muted);
        transform: rotate(-45deg);
        pointer-events: none;
      }

      :host([search]) input {
        padding-left: 36px;
      }
    `];R([d({type:String})],P.prototype,"label",2);R([d({type:String})],P.prototype,"name",2);R([d({type:String})],P.prototype,"placeholder",2);R([d({type:String})],P.prototype,"value",2);R([d({type:String})],P.prototype,"type",2);R([d({type:Boolean,reflect:!0})],P.prototype,"search",2);P=R([_("tx-input")],P);var we=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,At=(s,t,e,o)=>{for(var r=o>1?void 0:o?$e(t,e):t,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&we(t,e,r),r};let ot=class extends y{constructor(){super(...arguments),this.checked=!1,this.label=""}_toggle(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("tx-change",{detail:{checked:this.checked},bubbles:!0,composed:!0}))}render(){return f`
      <div
        class="track"
        role="switch"
        tabindex="0"
        aria-checked=${this.checked}
        @click=${this._toggle}
        @keydown=${s=>{(s.key===" "||s.key==="Enter")&&(s.preventDefault(),this._toggle())}}
      >
        <div class="thumb"></div>
      </div>
      ${this.label?f`<span class="label" @click=${this._toggle}>${this.label}</span>`:""}
    `}};ot.styles=[A,$`
      :host {
        display: inline-flex;
        align-items: center;
        gap: 10px;
      }

      .track {
        position: relative;
        width: 40px;
        height: 22px;
        background: #D1D5DB;
        border-radius: var(--tx-radius-pill);
        cursor: pointer;
        transition: var(--tx-transition);
        -webkit-tap-highlight-color: transparent;
      }

      :host([checked]) .track {
        background: var(--tx-primary);
      }

      .thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #fff;
        box-shadow: var(--tx-shadow-xs);
        transition: var(--tx-transition);
      }

      :host([checked]) .thumb {
        left: 20px;
      }

      .track:focus-visible {
        outline: 2px solid var(--tx-primary);
        outline-offset: 2px;
      }

      .label {
        font-size: var(--tx-text-sm);
        font-weight: 500;
        color: var(--tx-text);
        user-select: none;
        cursor: pointer;
      }
    `];At([d({type:Boolean,reflect:!0})],ot.prototype,"checked",2);At([d({type:String})],ot.prototype,"label",2);ot=At([_("tx-toggle")],ot);var ke=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,St=(s,t,e,o)=>{for(var r=o>1?void 0:o?_e(t,e):t,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&ke(t,e,r),r};let st=class extends y{constructor(){super(...arguments),this.checked=!1,this.label=""}_toggle(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("tx-change",{detail:{checked:this.checked},bubbles:!0,composed:!0}))}render(){return f`
      <div
        class="box"
        role="checkbox"
        tabindex="0"
        aria-checked=${this.checked}
        @click=${this._toggle}
        @keydown=${s=>{(s.key===" "||s.key==="Enter")&&(s.preventDefault(),this._toggle())}}
      >
        <span class="checkmark">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 12 10 18 20 6"></polyline>
          </svg>
        </span>
      </div>
      ${this.label?f`<span class="label" @click=${this._toggle}>${this.label}</span>`:""}
    `}};st.styles=[A,$`
      :host {
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }

      .box {
        position: relative;
        width: 18px;
        height: 18px;
        background: var(--tx-surface);
        border-radius: 4px;
        border: 1.5px solid #D1D5DB;
        cursor: pointer;
        transition: var(--tx-transition);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        -webkit-tap-highlight-color: transparent;
      }

      :host([checked]) .box {
        background: var(--tx-primary);
        border-color: var(--tx-primary);
      }

      .checkmark {
        width: 12px;
        height: 12px;
        opacity: 0;
        transform: scale(0.5);
        transition: var(--tx-transition);
      }

      .checkmark svg {
        width: 100%;
        height: 100%;
      }

      :host([checked]) .checkmark {
        opacity: 1;
        transform: scale(1);
      }

      .box:hover {
        border-color: var(--tx-primary);
      }

      .box:focus-visible {
        outline: 2px solid var(--tx-primary);
        outline-offset: 2px;
      }

      .label {
        font-size: var(--tx-text-sm);
        font-weight: 500;
        color: var(--tx-text);
        user-select: none;
        cursor: pointer;
      }
    `];St([d({type:Boolean,reflect:!0})],st.prototype,"checked",2);St([d({type:String})],st.prototype,"label",2);st=St([_("tx-checkbox")],st);var Ae=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,U=(s,t,e,o)=>{for(var r=o>1?void 0:o?Se(t,e):t,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&Ae(t,e,r),r};let C=class extends y{constructor(){super(...arguments),this.value=50,this.min=0,this.max=100,this.step=1,this.label="",this.showValue=!1}_renderHeader(){if(!this.label&&!this.showValue)return"";const s=this.label?f`<label>${this.label}</label>`:f`<span></span>`,t=this.showValue?f`<span class="value-display">${this.value}</span>`:"";return f`<div class="header">${s}${t}</div>`}_handleInput(s){this.value=Number(s.target.value),this.dispatchEvent(new CustomEvent("tx-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return f`
      <div class="wrapper">
        ${this._renderHeader()}
        <div class="track-container">
          <input
            part="input"
            type="range"
            .value=${String(this.value)}
            min=${this.min}
            max=${this.max}
            step=${this.step}
            @input=${this._handleInput}
          />
        </div>
      </div>
    `}};C.styles=[A,$`
      :host {
        display: block;
        width: 100%;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      label {
        font-size: var(--tx-text-xs);
        font-weight: 600;
        color: var(--tx-text-secondary);
      }

      .value-display {
        font-size: var(--tx-text-xs);
        font-weight: 600;
        color: var(--tx-text);
        font-variant-numeric: tabular-nums;
      }

      .track-container {
        position: relative;
        height: 32px;
        display: flex;
        align-items: center;
      }

      input[type='range'] {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 4px;
        background: var(--tx-border);
        border-radius: var(--tx-radius-pill);
        outline: none;
        cursor: pointer;
      }

      input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--tx-surface);
        box-shadow: var(--tx-shadow-sm), 0 0 0 2px var(--tx-primary);
        cursor: grab;
        transition: var(--tx-transition);
      }

      input[type='range']::-moz-range-thumb {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--tx-surface);
        box-shadow: var(--tx-shadow-sm), 0 0 0 2px var(--tx-primary);
        border: none;
        cursor: grab;
        transition: var(--tx-transition);
      }

      input[type='range']:active::-webkit-slider-thumb {
        box-shadow: var(--tx-shadow-sm), 0 0 0 2px var(--tx-primary), var(--tx-ring-focus);
        cursor: grabbing;
      }

      input[type='range']:active::-moz-range-thumb {
        box-shadow: var(--tx-shadow-sm), 0 0 0 2px var(--tx-primary), var(--tx-ring-focus);
        cursor: grabbing;
      }

      input[type='range']:focus-visible {
        outline: 2px solid var(--tx-primary);
        outline-offset: 4px;
        border-radius: var(--tx-radius-pill);
      }
    `];U([d({type:Number})],C.prototype,"value",2);U([d({type:Number})],C.prototype,"min",2);U([d({type:Number})],C.prototype,"max",2);U([d({type:Number})],C.prototype,"step",2);U([d({type:String})],C.prototype,"label",2);U([d({type:Boolean,attribute:"show-value"})],C.prototype,"showValue",2);C=U([_("tx-slider")],C);var Ee=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,it=(s,t,e,o)=>{for(var r=o>1?void 0:o?Pe(t,e):t,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&Ee(t,e,r),r};let N=class extends y{constructor(){super(...arguments),this.interactive=!1,this.flat=!1,this.compact=!1,this.accent="",this._hasHeader=!1,this._hasFooter=!1}_checkSlot(s){const t=s.target,e=t.name,o=t.assignedNodes({flatten:!0}).length>0;e==="header"&&(this._hasHeader=o),e==="footer"&&(this._hasFooter=o),this.requestUpdate()}render(){return f`
      <div class="card" part="card">
        <div class="card-header" ?hidden=${!this._hasHeader}>
          <slot name="header" @slotchange=${this._checkSlot}></slot>
        </div>
        <div class="card-body">
          <slot></slot>
        </div>
        <div class="card-footer" ?hidden=${!this._hasFooter}>
          <slot name="footer" @slotchange=${this._checkSlot}></slot>
        </div>
      </div>
    `}};N.styles=[A,$`
      :host {
        display: block;
      }

      .card {
        position: relative;
        background: var(--tx-surface);
        border-radius: var(--tx-radius-lg);
        border: 1px solid var(--tx-border);
        box-shadow: var(--tx-shadow-sm);
        padding: 20px;
        transition: var(--tx-transition);
        overflow: hidden;
      }

      :host([accent]) .card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: var(--_accent-color, var(--tx-accent));
      }

      :host([accent='primary']) .card::before { --_accent-color: var(--tx-primary); }
      :host([accent='success']) .card::before { --_accent-color: var(--tx-success); }
      :host([accent='danger']) .card::before  { --_accent-color: var(--tx-danger); }
      :host([accent='accent']) .card::before  { --_accent-color: var(--tx-accent); }

      :host([interactive]) .card {
        cursor: pointer;
      }

      :host([interactive]) .card:hover {
        box-shadow: var(--tx-shadow-md);
        transform: translateY(-1px);
      }

      :host([interactive]) .card:active {
        box-shadow: var(--tx-shadow-xs);
        transform: translateY(0);
      }

      .card-header {
        margin-bottom: 12px;
      }

      .card-header ::slotted(*) {
        margin: 0;
        font-weight: 600;
        font-size: var(--tx-text-sm);
        color: var(--tx-text);
      }

      .card-body {
        color: var(--tx-text-secondary);
        font-size: var(--tx-text-sm);
        line-height: 1.6;
      }

      .card-footer {
        margin-top: 16px;
        padding-top: 12px;
        border-top: 1px solid var(--tx-border);
        display: flex;
        gap: 8px;
        align-items: center;
      }

      :host([flat]) .card {
        background: var(--tx-surface-alt);
        box-shadow: none;
        border-color: transparent;
      }

      :host([compact]) .card {
        padding: 14px;
      }
    `];it([d({type:Boolean,reflect:!0})],N.prototype,"interactive",2);it([d({type:Boolean,reflect:!0})],N.prototype,"flat",2);it([d({type:Boolean,reflect:!0})],N.prototype,"compact",2);it([d({type:String,reflect:!0})],N.prototype,"accent",2);N=it([_("tx-card")],N);var Ce=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,pt=(s,t,e,o)=>{for(var r=o>1?void 0:o?Me(t,e):t,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&Ce(t,e,r),r};let G=class extends y{constructor(){super(...arguments),this.color="default",this.dot=!1,this.size="md"}render(){return f`
      <span class="badge" part="badge">
        ${this.dot?f`<span class="dot"></span>`:""}
        <slot></slot>
      </span>
    `}};G.styles=[A,$`
      :host {
        display: inline-flex;
      }

      .badge {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 2px 8px;
        font-family: var(--tx-font);
        font-size: var(--tx-text-xs);
        font-weight: 600;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        border-radius: var(--tx-radius-pill);
        white-space: nowrap;
        line-height: 1.6;
        background: var(--tx-surface-alt);
        color: var(--tx-text-secondary);
        border: 1px solid var(--tx-border);
      }

      .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: currentColor;
        flex-shrink: 0;
      }

      :host([color='primary']) .badge { background: var(--tx-primary-soft); color: #3B63CC; border-color: transparent; }
      :host([color='accent']) .badge  { background: var(--tx-accent-soft); color: #B8891E; border-color: transparent; }
      :host([color='success']) .badge { background: var(--tx-success-soft); color: #16803C; border-color: transparent; }
      :host([color='danger']) .badge  { background: var(--tx-danger-soft); color: #DC2626; border-color: transparent; }

      :host([size='lg']) .badge {
        padding: 3px 12px;
        font-size: 0.78rem;
      }
    `];pt([d({type:String,reflect:!0})],G.prototype,"color",2);pt([d({type:Boolean})],G.prototype,"dot",2);pt([d({type:String,reflect:!0})],G.prototype,"size",2);G=pt([_("tx-badge")],G);var je=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor,at=(s,t,e,o)=>{for(var r=o>1?void 0:o?Oe(t,e):t,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&je(t,e,r),r};let H=class extends y{constructor(){super(...arguments),this.src="",this.initials="",this.status="",this.size="md"}render(){return f`
      <div class="avatar" part="avatar">
        ${this.src?f`<img src=${this.src} alt=${this.initials||"avatar"} />`:f`${this.initials||""}`}
      </div>
      ${this.status?f`<span class="status"></span>`:""}
    `}};H.styles=[A,$`
      :host {
        display: inline-flex;
        position: relative;
      }

      .avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: var(--tx-primary-soft);
        color: var(--tx-primary);
        font-family: var(--tx-font);
        font-size: var(--tx-text-xs);
        font-weight: 700;
        overflow: hidden;
        border: 2px solid var(--tx-surface);
        box-shadow: var(--tx-shadow-xs);
        user-select: none;
      }

      .avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      :host([size='sm']) .avatar { width: 28px; height: 28px; font-size: 0.65rem; }
      :host([size='lg']) .avatar { width: 44px; height: 44px; font-size: var(--tx-text-sm); }
      :host([size='xl']) .avatar { width: 56px; height: 56px; font-size: var(--tx-text-base); }

      .status {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 2px solid var(--tx-surface);
        background: #D1D5DB;
      }

      :host([size='sm']) .status { width: 8px; height: 8px; }
      :host([size='lg']) .status, :host([size='xl']) .status { width: 12px; height: 12px; }

      :host([status='online']) .status  { background: var(--tx-success); }
      :host([status='busy']) .status    { background: var(--tx-danger); }
      :host([status='away']) .status    { background: var(--tx-accent); }
      :host([status='offline']) .status { background: #D1D5DB; }
    `];at([d({type:String})],H.prototype,"src",2);at([d({type:String})],H.prototype,"initials",2);at([d({type:String,reflect:!0})],H.prototype,"status",2);at([d({type:String,reflect:!0})],H.prototype,"size",2);H=at([_("tx-avatar")],H);var ze=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,V=(s,t,e,o)=>{for(var r=o>1?void 0:o?Be(t,e):t,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&ze(t,e,r),r};let M=class extends y{constructor(){super(...arguments),this.value=0,this.max=100,this.label="",this.showValue=!1,this.color="primary",this.size="md"}get _percent(){return Math.min(100,Math.max(0,this.value/this.max*100))}render(){const s=this.label||this.showValue;return f`
      <div class="wrapper">
        ${s?f`
          <div class="header">
            <span class="label">${this.label}</span>
            ${this.showValue?f`<span class="value">${Math.round(this._percent)}%</span>`:""}
          </div>
        `:""}
        <div class="track" role="progressbar" aria-valuenow=${this.value} aria-valuemin="0" aria-valuemax=${this.max}>
          <div class="fill" style="width: ${this._percent}%"></div>
        </div>
      </div>
    `}};M.styles=[A,$`
      :host {
        display: block;
        width: 100%;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }

      .label {
        font-size: var(--tx-text-xs);
        font-weight: 600;
        color: var(--tx-text-secondary);
      }

      .value {
        font-size: var(--tx-text-xs);
        font-weight: 600;
        color: var(--tx-text);
        font-variant-numeric: tabular-nums;
      }

      .track {
        width: 100%;
        height: 6px;
        background: var(--tx-surface-alt);
        border-radius: var(--tx-radius-pill);
        overflow: hidden;
        border: 1px solid var(--tx-border);
      }

      .fill {
        height: 100%;
        border-radius: var(--tx-radius-pill);
        background: var(--tx-primary);
        transition: width 0.4s ease;
        min-width: 0;
      }

      :host([color='accent']) .fill  { background: var(--tx-accent); }
      :host([color='success']) .fill { background: var(--tx-success); }
      :host([color='danger']) .fill  { background: var(--tx-danger); }

      :host([size='sm']) .track { height: 4px; }
      :host([size='lg']) .track { height: 8px; }
    `];V([d({type:Number})],M.prototype,"value",2);V([d({type:Number})],M.prototype,"max",2);V([d({type:String})],M.prototype,"label",2);V([d({type:Boolean,attribute:"show-value"})],M.prototype,"showValue",2);V([d({type:String,reflect:!0})],M.prototype,"color",2);V([d({type:String,reflect:!0})],M.prototype,"size",2);M=V([_("tx-progress")],M);var Te=Object.defineProperty,De=Object.getOwnPropertyDescriptor,ht=(s,t,e,o)=>{for(var r=o>1?void 0:o?De(t,e):t,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&Te(t,e,r),r};let Q=class extends y{constructor(){super(...arguments),this.color="default",this.removable=!1,this.size="md"}_remove(){this.dispatchEvent(new CustomEvent("tx-remove",{bubbles:!0,composed:!0}))}render(){return f`
      <span class="tag" part="tag">
        <slot></slot>
        ${this.removable?f`
          <button class="close" @click=${this._remove} aria-label="Remove">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        `:""}
      </span>
    `}};Q.styles=[A,$`
      :host {
        display: inline-flex;
      }

      .tag {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        font-family: var(--tx-font);
        font-size: var(--tx-text-xs);
        font-weight: 500;
        border-radius: var(--tx-radius-sm);
        background: var(--tx-surface);
        color: var(--tx-text);
        border: 1px solid var(--tx-border);
        transition: var(--tx-transition);
        white-space: nowrap;
      }

      :host([color='primary']) .tag { background: var(--tx-primary-soft); color: #3B63CC; border-color: transparent; }
      :host([color='accent']) .tag  { background: var(--tx-accent-soft); color: #B8891E; border-color: transparent; }
      :host([color='success']) .tag { background: var(--tx-success-soft); color: #16803C; border-color: transparent; }
      :host([color='danger']) .tag  { background: var(--tx-danger-soft); color: #DC2626; border-color: transparent; }

      .close {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        font-size: 0.65rem;
        line-height: 1;
        color: currentColor;
        opacity: 0.5;
        transition: var(--tx-transition);
      }

      .close:hover {
        opacity: 1;
        background: rgba(0, 0, 0, 0.06);
      }

      .close svg {
        width: 10px;
        height: 10px;
      }

      :host([size='sm']) .tag {
        padding: 2px 6px;
        font-size: 0.7rem;
      }
    `];ht([d({type:String,reflect:!0})],Q.prototype,"color",2);ht([d({type:Boolean})],Q.prototype,"removable",2);ht([d({type:String,reflect:!0})],Q.prototype,"size",2);Q=ht([_("tx-tag")],Q);var Fe=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,ut=(s,t,e,o)=>{for(var r=o>1?void 0:o?Ie(t,e):t,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&Fe(t,e,r),r};let Z=class extends y{constructor(){super(...arguments),this.label="",this.vertical=!1,this.spacing="none"}render(){return f`
      <div class="divider" role="separator" part="divider">
        <div class="line"></div>
        ${this.label?f`<span class="label">${this.label}</span><div class="line"></div>`:""}
      </div>
    `}};Z.styles=[A,$`
      :host {
        display: block;
      }

      .divider {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .line {
        flex: 1;
        height: 1px;
        background: var(--tx-border);
      }

      .label {
        font-size: var(--tx-text-xs);
        font-weight: 500;
        color: var(--tx-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        white-space: nowrap;
      }

      :host([vertical]) {
        display: inline-flex;
        height: 100%;
        align-self: stretch;
      }

      :host([vertical]) .divider {
        flex-direction: column;
        height: 100%;
        min-height: 20px;
      }

      :host([vertical]) .line {
        width: 1px;
        height: auto;
        flex: 1;
      }

      :host([spacing='sm']) { margin: 8px 0; }
      :host([spacing='md']) { margin: 16px 0; }
      :host([spacing='lg']) { margin: 28px 0; }
    `];ut([d({type:String})],Z.prototype,"label",2);ut([d({type:Boolean,reflect:!0})],Z.prototype,"vertical",2);ut([d({type:String,reflect:!0})],Z.prototype,"spacing",2);Z=ut([_("tx-divider")],Z);const Le={light:{bg:"#F5F6FA",surface:"#FFFFFF",surfaceAlt:"#F8F9FC",accent:"#F3B23A",primary:"#4A7CFF",text:"#111827",textSecondary:"#4B5563",textMuted:"#9CA3AF",border:"#E5E7EB"},dark:{bg:"#0F1117",surface:"#1A1D2B",surfaceAlt:"#242737",accent:"#F3B23A",primary:"#6B9AFF",text:"#F3F4F6",textSecondary:"#9CA3AF",textMuted:"#6B7280",border:"#2D3142"},ocean:{bg:"#F0F7FF",surface:"#FFFFFF",surfaceAlt:"#F0F7FF",accent:"#0EA5E9",primary:"#0284C7",text:"#0C2340",textSecondary:"#3D5A74",textMuted:"#94A3B8",border:"#E0EAFF"}},Ne={bg:"--tx-bg",surface:"--tx-surface",surfaceAlt:"--tx-surface-alt",accent:"--tx-accent",primary:"--tx-primary",text:"--tx-text",textSecondary:"--tx-text-secondary",textMuted:"--tx-text-muted",border:"--tx-border",radius:"--tx-radius"};function qt(s,t=document.documentElement){const e=typeof s=="string"?Le[s]:s;if(e)for(const[o,r]of Object.entries(e)){const i=Ne[o];i&&r&&t.style.setProperty(i,r)}}const E={name:"Deepesh Padmanabhan Nair",avatar_url:"https://avatars.githubusercontent.com/u/12994292?v=4",html_url:"https://github.com/hybridx",location:"Pune, India",twitter_username:"_deepeshnair",public_repos:69,followers:47,following:80},He=[{name:"WebScraper",description:"A modern, full-featured web scraper built with Next.js and Supabase. Crawl directory listings, classify files, and search through media collections with a beautiful UI.",language:"TypeScript",stargazers_count:6,forks_count:4,html_url:"https://github.com/hybridx/WebScraper"},{name:"WebSocket_RAT",description:"Remote Access Trojan using websockets",language:"JavaScript",stargazers_count:5,forks_count:1,html_url:"https://github.com/hybridx/WebSocket_RAT"},{name:"ai-slack-companion",description:"This is an AI slackbot which you can talk to for FREEE",language:"JavaScript",stargazers_count:4,forks_count:3,html_url:"https://github.com/hybridx/ai-slack-companion"},{name:"Whatsapp_bomb",description:"To automatically send whatsapp messages in a loop through WhatsAppWeb using selenium",language:"Python",stargazers_count:2,forks_count:1,html_url:"https://github.com/hybridx/Whatsapp_bomb"},{name:"REST-java-example",description:"Web application with rest web services to add, update, get the data from database and integrated these services with UI application built using angularJS.",language:"Java",stargazers_count:2,forks_count:0,html_url:"https://github.com/hybridx/REST-java-example"},{name:"CyBot",description:"chatbot application with custom functions for slack api",language:"JavaScript",stargazers_count:2,forks_count:0,html_url:"https://github.com/hybridx/CyBot"}];function Re(){const s=document.documentElement,e=(s.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";s.setAttribute("data-theme",e),localStorage.setItem("theme",e),qt(e),Jt(e)}function Jt(s){const t=document.getElementById("theme-toggle");t&&(t.innerHTML=s==="dark"?'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>':'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>')}function Ue(){const s=new IntersectionObserver(t=>t.forEach(e=>{e.isIntersecting&&e.target.classList.add("visible")}),{threshold:.1});document.querySelectorAll(".fade-in").forEach(t=>s.observe(t))}function Ve(){const s=["Platform Engineer","Infrastructure Builder","Systems Thinker","DevConf India Organizer"],t=document.querySelector(".typing-text");if(!t)return;let e=0,o=0,r=!1;function i(){const a=s[e];r?t.textContent=a.substring(0,--o):t.textContent=a.substring(0,++o),!r&&o===a.length?setTimeout(()=>r=!0,2e3):r&&o===0&&(r=!1,e=(e+1)%s.length),setTimeout(i,r?50:100)}i()}function We(s){return s=s.replace("#",""),s.length===3&&(s=s.split("").map(t=>t+t).join("")),s.length!==6?"100,108,255":`${Number.parseInt(s.substring(0,2),16)},${Number.parseInt(s.substring(2,4),16)},${Number.parseInt(s.substring(4,6),16)}`}function qe(){if(window.innerWidth<768||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const s=document.createElement("canvas");s.id="particle-canvas",Object.assign(s.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"1"}),document.body.insertBefore(s,document.body.firstChild);const t=s.getContext("2d");let e=[],o,r=0;const i=1e3/30;function a(){s.width=window.innerWidth,s.height=window.innerHeight}function c(){return{x:Math.random()*s.width,y:Math.random()*s.height,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,size:Math.random()*1.5+.5,opacity:Math.random()*.4+.1}}function l(){e=Array.from({length:Math.min(25,Math.floor(window.innerWidth/60))},c)}function x(){if(!t)return;t.clearRect(0,0,s.width,s.height);const h=We(getComputedStyle(document.documentElement).getPropertyValue("--tx-primary").trim());for(const n of e)n.x+=n.vx,n.y+=n.vy,(n.x<0||n.x>s.width)&&(n.vx*=-1),(n.y<0||n.y>s.height)&&(n.vy*=-1),t.beginPath(),t.arc(n.x,n.y,n.size,0,Math.PI*2),t.fillStyle=`rgba(${h},${n.opacity})`,t.fill();for(let n=0;n<e.length-1;n++)for(let p=n+1;p<e.length;p++){const g=e[n].x-e[p].x,w=e[n].y-e[p].y,T=g*g+w*w;T<8100&&(t.beginPath(),t.moveTo(e[n].x,e[n].y),t.lineTo(e[p].x,e[p].y),t.strokeStyle=`rgba(${h},${.08*(1-T/8100)})`,t.lineWidth=.5,t.stroke())}}function m(h){o=requestAnimationFrame(m),!(h-r<i)&&(r=h-(h-r)%i,x())}a(),l(),o=requestAnimationFrame(m);let u;window.addEventListener("resize",()=>{clearTimeout(u),u=setTimeout(()=>{if(window.innerWidth<768){cancelAnimationFrame(o),s.remove();return}a(),l()},200)},{passive:!0})}function Je(){const s=new IntersectionObserver(t=>t.forEach(e=>{e.isIntersecting&&e.target.classList.add("visible")}),{threshold:.3});document.querySelectorAll(".timeline-item").forEach(t=>s.observe(t))}function Ge(){document.querySelectorAll('a[href^="#"]').forEach(s=>{s.addEventListener("click",t=>{var r;t.preventDefault();const e=s.getAttribute("href");if(!e)return;const o=document.querySelector(e);if(o){const i=((r=document.querySelector("header"))==null?void 0:r.offsetHeight)||80;window.scrollTo({top:o.getBoundingClientRect().top+window.scrollY-i,behavior:"smooth"})}})})}function Qe(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.style.setProperty("--animation-duration","0s");const t=document.getElementById("particle-canvas");t&&(t.style.display="none")}document.addEventListener("keydown",t=>{t.key==="Tab"&&document.body.classList.add("keyboard-navigation")}),document.addEventListener("mousedown",()=>document.body.classList.remove("keyboard-navigation"));const s=document.createElement("a");s.href="#hero",s.className="skip-link",s.textContent="Skip to main content",document.body.insertBefore(s,document.body.firstChild)}function vt(s,t){return`
    <tx-card>
      <h3 slot="header" class="text-tx-primary font-semibold text-lg m-0">${s}</h3>
      <div class="flex flex-col gap-3">
        ${t.map(e=>`
          <div class="flex items-center gap-3 p-3 rounded-tx bg-tx-surface-alt hover:translate-x-1 transition-transform">
            <div class="w-10 h-10 rounded-tx bg-tx-primary/10 border border-tx-primary/20 flex items-center justify-center text-tx-primary font-bold text-sm shrink-0">${e.icon}</div>
            <span class="font-medium flex-1">${e.name}</span>
            <tx-progress value="${e.progress}" show-value size="sm" color="primary" style="width:120px;flex-shrink:0"></tx-progress>
          </div>
        `).join("")}
      </div>
    </tx-card>
  `}function j(s,t,e,o,r){return`
    <tx-card accent="${r}" interactive>
      <div class="w-14 h-14 rounded-tx-lg bg-tx-primary/10 border border-tx-primary/20 flex items-center justify-center text-tx-primary mb-4 shadow-tx-sm">${s}</div>
      <h3 class="text-tx-text text-xl font-semibold mb-2">${t}</h3>
      <p class="text-tx-text-secondary leading-relaxed mb-4">${e}</p>
      <div class="flex flex-wrap gap-2">
        ${o.map(i=>`<tx-badge color="primary">${i}</tx-badge>`).join("")}
      </div>
    </tx-card>
  `}function Ze(s){return`
    <tx-card accent="primary" interactive>
      <h3 slot="header" class="text-tx-text text-xl font-semibold m-0">${s.name}</h3>
      <p class="text-tx-text-secondary leading-relaxed mb-4">${s.description||"No description available"}</p>
      <div class="mb-3">
        <tx-badge color="primary">${s.language||"Various"}</tx-badge>
      </div>
      <div class="flex gap-4 items-center p-3 bg-tx-surface-alt rounded-tx border border-tx-border mb-4">
        <span class="flex items-center gap-1 text-sm text-tx-text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          ${s.stargazers_count}
        </span>
        <span class="flex items-center gap-1 text-sm text-tx-text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v12"></path><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
          ${s.forks_count}
        </span>
      </div>
      <div slot="footer">
        <a href="${s.html_url}" target="_blank" class="no-underline">
          <tx-button variant="primary" size="sm">View Project</tx-button>
        </a>
      </div>
    </tx-card>
  `}async function Ye(){var t;const s=localStorage.getItem("theme")||"dark";document.documentElement.setAttribute("data-theme",s),qt(s),document.querySelector("#app").innerHTML=`
    <div class="font-tx bg-tx-bg text-tx-text transition-colors duration-300">

      <!-- Header -->
      <header class="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-tx-sm transition-colors duration-300" style="background-color:var(--header-bg)">
        <div class="w-full mx-auto flex justify-between items-center px-8 py-3">
          <a href="/" class="bg-white rounded-[20px] px-4 inline-flex items-center">
            <img src="${Qt}" class="h-12 hover:scale-110 transition-transform" alt="Hybridx logo" width="104" height="26" />
          </a>
          <nav class="flex items-center gap-6 flex-wrap">
            <a href="#about" class="text-tx-text font-medium hover:text-tx-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-tx-primary after:transition-all hover:after:w-full">About</a>
            <a href="#homelab" class="text-tx-text font-medium hover:text-tx-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-tx-primary after:transition-all hover:after:w-full">Infrastructure</a>
            <a href="#ai-experiments" class="text-tx-text font-medium hover:text-tx-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-tx-primary after:transition-all hover:after:w-full">AI & Experiments</a>
            <a href="#experience" class="text-tx-text font-medium hover:text-tx-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-tx-primary after:transition-all hover:after:w-full">Experience</a>
            <a href="#projects" class="text-tx-text font-medium hover:text-tx-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-tx-primary after:transition-all hover:after:w-full">Projects</a>
            <a href="#contact" class="text-tx-text font-medium hover:text-tx-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-tx-primary after:transition-all hover:after:w-full">Contact</a>
            <button id="theme-toggle" class="p-2 rounded-full border-none cursor-pointer bg-transparent text-tx-text hover:bg-tx-surface-alt hover:scale-110 hover:rotate-15 transition-all" aria-label="Toggle theme"></button>
          </nav>
        </div>
      </header>

      <!-- Hero -->
      <section id="hero" class="min-h-screen flex items-center pt-24 px-8">
        <div class="max-w-[1200px] mx-auto w-full flex items-center justify-between gap-16 max-lg:flex-col">
          <div class="flex-1 text-left">
            <h1 class="text-5xl font-bold mb-4 max-md:text-3xl">Hi, I'm <span class="text-tx-primary">${E.name}</span></h1>
            <p class="text-xl text-tx-text-secondary mb-4 flex items-center gap-1">
              <span class="typing-text">Software Engineer</span>
              <span class="cursor-blink text-tx-primary font-bold">|</span>
            </p>
            <p class="text-base text-tx-text-secondary mb-6">
              <a href="https://181094.xyz" target="_blank" rel="noopener noreferrer" class="text-tx-primary font-medium hover:text-tx-accent transition-colors inline-flex items-center gap-1 no-underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                181094.xyz
              </a>
            </p>
            <div class="flex gap-3 max-sm:flex-col">
              <a href="#projects" class="no-underline"><tx-button variant="primary" size="lg">View My Work</tx-button></a>
              <a href="#contact" class="no-underline"><tx-button variant="ghost" size="lg">Get in Touch</tx-button></a>
            </div>
          </div>
          <div class="flex-1 flex justify-center min-h-[310px]">
            <img src="${E.avatar_url}" class="w-72 h-72 rounded-full object-cover border-4 border-tx-primary shadow-tx-lg bg-tx-surface" alt="Profile picture" width="300" height="300" fetchpriority="high" style="animation:float 6s ease-in-out infinite" />
          </div>
        </div>
        <div class="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <div class="mouse"><div class="wheel"></div></div>
          <div class="arrow flex flex-col items-center gap-1"><span></span><span></span><span></span></div>
        </div>
      </section>

      <tx-divider spacing="lg"></tx-divider>

      <!-- About -->
      <section id="about" class="min-h-screen flex items-center py-20 px-8">
        <div class="max-w-[1200px] mx-auto w-full fade-in">
          <h2 class="text-4xl font-bold text-center mb-12 relative inline-block w-full after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-tx-primary">About Me</h2>
          <div class="flex gap-16 text-left max-lg:flex-col">
            <div class="flex-1">
              <p class="text-xl leading-relaxed mb-6">I build backend systems, infrastructure tooling, and practical AI integrations. Based in ${E.location}.</p>
              <p class="text-tx-text-secondary leading-relaxed mb-4">My work centers on platform engineering—designing systems that are understandable, repairable, and observable. I run production-like infrastructure at home, experiment with LLM-based tooling (MCP servers, NL→SQL), and help organize DevConf India.</p>
              <p class="text-tx-text-secondary leading-relaxed mb-6">I prefer Podman over Docker, run my own Proxmox lab with proper backups and DNS, and believe good systems should explain themselves. No buzzwords, no exaggeration—just honest engineering.</p>
              <div class="flex gap-3 mt-6">
                <a href="${E.html_url}" target="_blank" class="w-10 h-10 rounded-full bg-tx-surface flex items-center justify-center text-tx-text hover:bg-tx-primary hover:text-white hover:-translate-y-1 transition-all shadow-tx-xs" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                ${`<a href="https://twitter.com/${E.twitter_username}" target="_blank" class="w-10 h-10 rounded-full bg-tx-surface flex items-center justify-center text-tx-text hover:bg-tx-primary hover:text-white hover:-translate-y-1 transition-all shadow-tx-xs" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>`}
              </div>
            </div>
            <div class="flex-1">
              <div class="grid grid-cols-3 gap-4 max-md:grid-cols-1">
                <tx-card compact accent="primary">
                  <div class="text-center py-2">
                    <span class="block text-4xl font-bold text-tx-primary mb-1">${E.public_repos}</span>
                    <span class="text-sm text-tx-text-muted">Repositories</span>
                  </div>
                </tx-card>
                <tx-card compact accent="primary">
                  <div class="text-center py-2">
                    <span class="block text-4xl font-bold text-tx-primary mb-1">${E.followers}</span>
                    <span class="text-sm text-tx-text-muted">Followers</span>
                  </div>
                </tx-card>
                <tx-card compact accent="primary">
                  <div class="text-center py-2">
                    <span class="block text-4xl font-bold text-tx-primary mb-1">${E.following}</span>
                    <span class="text-sm text-tx-text-muted">Following</span>
                  </div>
                </tx-card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <tx-divider spacing="lg"></tx-divider>

      <!-- Skills -->
      <section id="skills" class="min-h-screen flex items-center py-20 px-8 bg-tx-surface-alt">
        <div class="max-w-[1200px] mx-auto w-full fade-in">
          <h2 class="text-4xl font-bold text-center mb-12 relative inline-block w-full after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-tx-primary">Skills & Technologies</h2>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 text-left max-md:grid-cols-1">
            ${vt("Languages",[{icon:"JS",name:"JavaScript",progress:90},{icon:"TS",name:"TypeScript",progress:85},{icon:"Py",name:"Python",progress:88},{icon:"Go",name:"Go",progress:75}])}
            ${vt("Backend & APIs",[{icon:"FA",name:"FastAPI",progress:92},{icon:"PG",name:"PostgreSQL",progress:88},{icon:"MG",name:"MongoDB",progress:80},{icon:"MC",name:"MCP Servers",progress:85}])}
            ${vt("Infrastructure & Platform",[{icon:"PM",name:"Podman",progress:90},{icon:"PX",name:"Proxmox VE",progress:85},{icon:"LX",name:"Linux",progress:92},{icon:"NT",name:"DNS/TLS/Net",progress:80}])}
          </div>
        </div>
      </section>

      <tx-divider spacing="lg"></tx-divider>

      <!-- Homelab -->
      <section id="homelab" class="min-h-screen flex items-center py-20 px-8">
        <div class="max-w-[1200px] mx-auto w-full fade-in">
          <h2 class="text-4xl font-bold text-center mb-12 relative inline-block w-full after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-tx-primary">Homelab & Infrastructure</h2>
          <div class="text-center max-w-3xl mx-auto mb-16">
            <p class="text-xl leading-relaxed mb-4">Production-like infrastructure at home</p>
            <p class="text-tx-text-secondary leading-relaxed">My Proxmox lab runs services the way real infrastructure does: proper backups, automated recovery, reverse proxies with TLS, custom DDNS, and monitoring.</p>
          </div>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mb-12">
            ${j('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',"Proxmox VE Cluster","Multi-node setup with high availability, automated backups, and ZFS storage pools.",["Proxmox VE","Clustering"],"primary")}
            ${j('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',"Containers & Services","Podman-first deployment with systemd integration, rootless containers, databases, APIs, and reverse proxies.",["Podman","systemd","PostgreSQL"],"primary")}
            ${j('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',"Backups & Recovery","Automated backup strategies, failure recovery, and monitoring. Systems designed to be restored, not rebuilt.",["Backups","Monitoring","Automation"],"primary")}
            ${j('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',"DNS & Networking","Custom DDNS, reverse proxy with automatic TLS, domain management, and network segmentation.",["DDNS","TLS"],"primary")}
          </div>
          <tx-card flat>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6">
              <div class="text-center p-4 rounded-tx bg-tx-surface-alt border border-tx-border hover:border-tx-primary/40 transition-colors">
                <svg class="mx-auto mb-2 text-tx-primary" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
                <span class="block text-lg font-bold text-tx-primary mb-0.5">Proxmox</span><span class="text-sm text-tx-text-muted">Hypervisor</span>
              </div>
              <div class="text-center p-4 rounded-tx bg-tx-surface-alt border border-tx-border hover:border-tx-primary/40 transition-colors">
                <svg class="mx-auto mb-2 text-tx-primary" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                <span class="block text-lg font-bold text-tx-primary mb-0.5">Podman</span><span class="text-sm text-tx-text-muted">Containers</span>
              </div>
              <div class="text-center p-4 rounded-tx bg-tx-surface-alt border border-tx-border hover:border-tx-primary/40 transition-colors">
                <svg class="mx-auto mb-2 text-tx-primary" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                <span class="block text-lg font-bold text-tx-primary mb-0.5">PostgreSQL</span><span class="text-sm text-tx-text-muted">Primary DB</span>
              </div>
              <div class="text-center p-4 rounded-tx bg-tx-surface-alt border border-tx-border hover:border-tx-primary/40 transition-colors">
                <svg class="mx-auto mb-2 text-tx-primary" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <span class="block text-lg font-bold text-tx-primary mb-0.5">Custom DDNS</span><span class="text-sm text-tx-text-muted">DNS Management</span>
              </div>
            </div>
          </tx-card>
        </div>
      </section>

      <tx-divider spacing="lg"></tx-divider>

      <!-- AI & Experiments -->
      <section id="ai-experiments" class="min-h-screen flex items-center py-20 px-8 bg-tx-surface-alt">
        <div class="max-w-[1200px] mx-auto w-full fade-in">
          <h2 class="text-4xl font-bold text-center mb-12 relative inline-block w-full after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-tx-primary">AI & Experiments</h2>
          <div class="text-center max-w-3xl mx-auto mb-16">
            <p class="text-xl leading-relaxed mb-4">Practical AI integration, not hype</p>
            <p class="text-tx-text-secondary leading-relaxed">I experiment with LLM-based systems that solve real problems: natural language to SQL, MCP servers for tool integration, vector search with pgvector, and schema-aware APIs.</p>
          </div>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            ${j('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',"Natural Language → SQL","LLM-powered query generation. Schema-aware, read-only by design, with explain plans and safety checks.",["PostgreSQL","FastAPI","LLMs"],"primary")}
            ${j('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',"MCP Servers","Model Context Protocol servers using FastAPI. Exposes schemas, file systems, and tools to LLMs in a structured way.",["MCP","FastAPI","Tools"],"primary")}
            ${j('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',"Vector Search & Embeddings","pgvector for similarity search over text, code, and documentation. Experimenting with RAG and semantic search.",["pgvector","Embeddings","RAG"],"primary")}
            ${j('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',"POCs & Internal Demos","Working prototypes for schema exposure APIs, tool-based LLM interactions, and AI integration patterns.",["FastAPI","Design","Systems"],"primary")}
          </div>
        </div>
      </section>

      <tx-divider spacing="lg"></tx-divider>

      <!-- Experience -->
      <section id="experience" class="min-h-screen flex items-center py-20 px-8">
        <div class="max-w-[1200px] mx-auto w-full fade-in">
          <h2 class="text-4xl font-bold text-center mb-12 relative inline-block w-full after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-tx-primary">Experience & Journey</h2>
          <div class="max-w-4xl mx-auto py-8">
            <div class="timeline">
              ${[{title:"DevConf India Organizer",company:"Community Leadership",date:"2024 - Present",desc:"Core organizing member for DevConf India 2025 & 2026 (~2000 attendees). Focus on operational readiness, crowd control systems, communication tooling.",tags:["Event Ops","Leadership","Coordination","Community"],color:"primary",icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="9" cy="7" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 3.13a4 4 0 0 1 0 7.75" fill="none" stroke="currentColor" stroke-width="2"/>'},{title:"Platform & Backend Engineering",company:"Various Roles",date:"2020 - Present",desc:"Building backend systems, infrastructure tooling, and developer platforms. API design, database architecture, containerization with Podman.",tags:["FastAPI","PostgreSQL","Podman","Python","Linux"],color:"primary",icon:'<rect x="2" y="7" width="20" height="14" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" fill="none" stroke="currentColor" stroke-width="2"/>'},{title:"AI Experiments & MCP Development",company:"Personal R&D",date:"2023 - Ongoing",desc:"Built MCP-compatible servers, NL→SQL systems, and vector search prototypes. Focus on practical integration patterns.",tags:["MCP","FastAPI","pgvector","LLMs"],color:"primary",icon:'<path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.57-3.25 3.93" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.57 3.25 3.93" fill="none" stroke="currentColor" stroke-width="2"/><line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" stroke-width="2"/><line x1="8" y1="22" x2="16" y2="22" stroke="currentColor" stroke-width="2"/><path d="M9 18h6" stroke="currentColor" stroke-width="2"/><path d="M9 14h6" stroke="currentColor" stroke-width="2"/>'},{title:"Proxmox Lab & Self-Hosting",company:"Infrastructure Learning",date:"2021 - Ongoing",desc:"Built production-like infrastructure at home: Proxmox virtualization, Podman containers, custom DDNS, automated backups.",tags:["Proxmox VE","Podman","DDNS","Backups"],color:"primary",icon:'<rect x="2" y="2" width="20" height="8" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><rect x="2" y="14" width="20" height="8" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><line x1="6" y1="6" x2="6.01" y2="6" stroke="currentColor" stroke-width="2"/><line x1="6" y1="18" x2="6.01" y2="18" stroke="currentColor" stroke-width="2"/>'}].map(e=>`
                <div class="timeline-item">
                  <div class="timeline-marker">
                    <div class="w-12 h-12 rounded-full bg-tx-primary flex items-center justify-center text-white shadow-tx-md border-4 border-tx-bg hover:scale-110 transition-transform">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">${e.icon}</svg>
                    </div>
                  </div>
                  <div class="timeline-content-wrapper w-[45%]">
                    <tx-card interactive>
                      <div class="mb-3">
                        <h3 class="text-lg font-semibold text-tx-text mb-1">${e.title}</h3>
                        <div class="text-tx-primary font-medium text-base mb-1">${e.company}</div>
                        <div class="text-sm text-tx-text-muted uppercase tracking-wider">${e.date}</div>
                      </div>
                      <p class="text-tx-text-secondary leading-relaxed mb-3">${e.desc}</p>
                      <div class="flex flex-wrap gap-2">
                        ${e.tags.map(o=>`<tx-badge color="${e.color}">${o}</tx-badge>`).join("")}
                      </div>
                    </tx-card>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </section>

      <tx-divider spacing="lg"></tx-divider>

      <!-- Projects -->
      <section id="projects" class="min-h-screen flex items-center py-20 px-8 bg-tx-surface-alt">
        <div class="max-w-[1200px] mx-auto w-full fade-in">
          <h2 class="text-4xl font-bold text-center mb-12 relative inline-block w-full after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-tx-primary">Selected Projects</h2>
          <div class="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6 max-md:grid-cols-1">
            ${He.map(e=>Ze(e)).join("")}
          </div>
          <div class="text-center mt-12">
            <a href="${E.html_url}?tab=repositories" target="_blank" class="no-underline">
              <tx-button variant="ghost" size="lg">View All Projects</tx-button>
            </a>
          </div>
        </div>
      </section>

      <tx-divider spacing="lg"></tx-divider>

      <!-- Contact -->
      <section id="contact" class="min-h-screen flex items-center py-20 px-8">
        <div class="max-w-3xl mx-auto w-full text-center fade-in">
          <h2 class="text-4xl font-bold mb-12 relative inline-block after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-tx-primary">Get in Touch</h2>
          <p class="text-xl leading-relaxed mb-4">Interested in collaborating?</p>
          <p class="text-tx-text-secondary leading-relaxed mb-8">I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
          <div class="flex gap-4 justify-center max-sm:flex-col">
            <a href="https://calendly.com/hybridx" target="_blank" class="no-underline">
              <tx-button variant="primary" size="lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:0.5rem;vertical-align:middle"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                Schedule a Meeting
              </tx-button>
            </a>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-8 mt-8 text-center">
        <a href="https://181094.xyz" target="_blank" rel="noopener noreferrer" class="text-tx-primary font-medium text-lg hover:text-tx-accent transition-colors no-underline">181094.xyz</a>
        <div class="mt-4"><copyright-x /></div>
      </footer>
    </div>
  `,(t=document.getElementById("theme-toggle"))==null||t.addEventListener("click",Re),Jt(document.documentElement.getAttribute("data-theme")||"dark"),Ge(),Ue(),Ve(),qe(),Je(),Qe(),window.addEventListener("error",e=>console.error("Portfolio Error:",e.error)),window.addEventListener("unhandledrejection",e=>console.error("Unhandled Promise Rejection:",e.reason))}Ye();
