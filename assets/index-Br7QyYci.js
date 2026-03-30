(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();const Qt="/assets/logo-Dg_tNx_y.svg";(function(o){var t={};function e(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return o[s].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=o,e.c=t,e.d=function(s,r,a){e.o(s,r)||Object.defineProperty(s,r,{enumerable:!0,get:a})},e.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},e.t=function(s,r){if(1&r&&(s=e(s)),8&r||4&r&&typeof s=="object"&&s&&s.__esModule)return s;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:s}),2&r&&typeof s!="string")for(var i in s)e.d(a,i,(function(c){return s[c]}).bind(null,i));return a},e.n=function(s){var r=s&&s.__esModule?function(){return s.default}:function(){return s};return e.d(r,"a",r),r},e.o=function(s,r){return Object.prototype.hasOwnProperty.call(s,r)},e.p="",e(e.s=0)})([function(o,t){function e(h){return(e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(h)}function s(h,n){for(var p=0;p<n.length;p++){var g=n[p];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(h,g.key,g)}}function r(h,n){return!n||e(n)!=="object"&&typeof n!="function"?function(p){if(p===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p}(h):n}function a(h){var n=typeof Map=="function"?new Map:void 0;return(a=function(p){if(p===null||(g=p,Function.toString.call(g).indexOf("[native code]")===-1))return p;var g;if(typeof p!="function")throw new TypeError("Super expression must either be null or a function");if(n!==void 0){if(n.has(p))return n.get(p);n.set(p,w)}function w(){return i(p,arguments,x(this).constructor)}return w.prototype=Object.create(p.prototype,{constructor:{value:w,enumerable:!1,writable:!0,configurable:!0}}),l(w,p)})(h)}function i(h,n,p){return(i=c()?Reflect.construct:function(g,w,L){var S=[null];S.push.apply(S,w);var b=new(Function.bind.apply(g,S));return L&&l(b,L.prototype),b}).apply(null,arguments)}function c(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function l(h,n){return(l=Object.setPrototypeOf||function(p,g){return p.__proto__=g,p})(h,n)}function x(h){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(h)}var m=document.createElement("template");m.innerHTML=`
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
`);var u=function(h){(function(b,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(_&&_.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),_&&l(b,_)})(S,h);var n,p,g,w,L=(n=S,p=c(),function(){var b,_=x(n);if(p){var Gt=x(this).constructor;b=Reflect.construct(_,arguments,Gt)}else b=_.apply(this,arguments);return r(this,b)});function S(){return function(b,_){if(!(b instanceof _))throw new TypeError("Cannot call a class as a function")}(this,S),L.call(this)}return g=S,(w=[{key:"connectedCallback",value:function(){var b=this.attachShadow({mode:"open"});b.appendChild(m.content.cloneNode(!0)),this.getAttribute("year")===null?b.getElementById("year").innerHTML=new Date().getFullYear():b.getElementById("year").innerHTML=this.getAttribute("year")}}])&&s(g.prototype,w),S}(a(HTMLElement));window.customElements.define("copyright-x",u)}]);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=globalThis,yt=nt.ShadowRoot&&(nt.ShadyCSS===void 0||nt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wt=Symbol(),Et=new WeakMap;let It=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==wt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(yt&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Et.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Et.set(e,t))}return t}toString(){return this.cssText}};const Zt=o=>new It(typeof o=="string"?o:o+"",void 0,wt),$=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((s,r,a)=>s+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[a+1],o[0]);return new It(e,o,wt)},Yt=(o,t)=>{if(yt)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),r=nt.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,o.appendChild(s)}},Pt=yt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Zt(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Kt,defineProperty:Xt,getOwnPropertyDescriptor:te,getOwnPropertyNames:ee,getOwnPropertySymbols:re,getPrototypeOf:se}=Object,j=globalThis,Ct=j.trustedTypes,oe=Ct?Ct.emptyScript:"",xt=j.reactiveElementPolyfillSupport,X=(o,t)=>o,lt={toAttribute(o,t){switch(t){case Boolean:o=o?oe:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},$t=(o,t)=>!Kt(o,t),zt={attribute:!0,type:String,converter:lt,reflect:!1,useDefault:!1,hasChanged:$t};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),j.litPropertyMetadata??(j.litPropertyMetadata=new WeakMap);let W=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=zt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Xt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:a}=te(this.prototype,t)??{get(){return this[e]},set(i){this[e]=i}};return{get:r,set(i){const c=r==null?void 0:r.call(this);a==null||a.call(this,i),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??zt}static _$Ei(){if(this.hasOwnProperty(X("elementProperties")))return;const t=se(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(X("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(X("properties"))){const e=this.properties,s=[...ee(e),...re(e)];for(const r of s)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)e.unshift(Pt(r))}else t!==void 0&&e.push(Pt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Yt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var a;const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const i=(((a=s.converter)==null?void 0:a.toAttribute)!==void 0?s.converter:lt).toAttribute(e,s.type);this._$Em=t,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){var a,i;const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const c=s.getPropertyOptions(r),l=typeof c.converter=="function"?{fromAttribute:c.converter}:((a=c.converter)==null?void 0:a.fromAttribute)!==void 0?c.converter:lt;this._$Em=r;const x=l.fromAttribute(e,c.type);this[r]=x??((i=this._$Ej)==null?void 0:i.get(r))??x,this._$Em=null}}requestUpdate(t,e,s,r=!1,a){var i;if(t!==void 0){const c=this.constructor;if(r===!1&&(a=this[t]),s??(s=c.getPropertyOptions(t)),!((s.hasChanged??$t)(a,e)||s.useDefault&&s.reflect&&a===((i=this._$Ej)==null?void 0:i.get(t))&&!this.hasAttribute(c._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:a},i){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,i??e??this[t]),a!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,i]of this._$Ep)this[a]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[a,i]of r){const{wrapped:c}=i,l=this[a];c!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,i,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(r=>{var a;return(a=r.hostUpdate)==null?void 0:a.call(r)}),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};W.elementStyles=[],W.shadowRootOptions={mode:"open"},W[X("elementProperties")]=new Map,W[X("finalized")]=new Map,xt==null||xt({ReactiveElement:W}),(j.reactiveElementVersions??(j.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=globalThis,Mt=o=>o,ct=tt.trustedTypes,Ot=ct?ct.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ht="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,Nt="?"+O,ae=`<${Nt}>`,I=document,et=()=>I.createComment(""),rt=o=>o===null||typeof o!="object"&&typeof o!="function",_t=Array.isArray,ie=o=>_t(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",ft=`[ 	
\f\r]`,K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jt=/-->/g,Bt=/>/g,T=RegExp(`>|${ft}(?:([^\\s"'>=/]+)(${ft}*=${ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Lt=/'/g,Tt=/"/g,Rt=/^(?:script|style|textarea|title)$/i,ne=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),f=ne(1),q=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Dt=new WeakMap,D=I.createTreeWalker(I,129);function Ut(o,t){if(!_t(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ot!==void 0?Ot.createHTML(t):t}const le=(o,t)=>{const e=o.length-1,s=[];let r,a=t===2?"<svg>":t===3?"<math>":"",i=K;for(let c=0;c<e;c++){const l=o[c];let x,m,u=-1,h=0;for(;h<l.length&&(i.lastIndex=h,m=i.exec(l),m!==null);)h=i.lastIndex,i===K?m[1]==="!--"?i=jt:m[1]!==void 0?i=Bt:m[2]!==void 0?(Rt.test(m[2])&&(r=RegExp("</"+m[2],"g")),i=T):m[3]!==void 0&&(i=T):i===T?m[0]===">"?(i=r??K,u=-1):m[1]===void 0?u=-2:(u=i.lastIndex-m[2].length,x=m[1],i=m[3]===void 0?T:m[3]==='"'?Tt:Lt):i===Tt||i===Lt?i=T:i===jt||i===Bt?i=K:(i=T,r=void 0);const n=i===T&&o[c+1].startsWith("/>")?" ":"";a+=i===K?l+ae:u>=0?(s.push(x),l.slice(0,u)+Ht+l.slice(u)+O+n):l+O+(u===-2?c:n)}return[Ut(o,a+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};let bt=class Vt{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let a=0,i=0;const c=t.length-1,l=this.parts,[x,m]=le(t,e);if(this.el=Vt.createElement(x,s),D.currentNode=this.el.content,e===2||e===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=D.nextNode())!==null&&l.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(Ht)){const h=m[i++],n=r.getAttribute(u).split(O),p=/([.?@])?(.*)/.exec(h);l.push({type:1,index:a,name:p[2],strings:n,ctor:p[1]==="."?de:p[1]==="?"?pe:p[1]==="@"?he:dt}),r.removeAttribute(u)}else u.startsWith(O)&&(l.push({type:6,index:a}),r.removeAttribute(u));if(Rt.test(r.tagName)){const u=r.textContent.split(O),h=u.length-1;if(h>0){r.textContent=ct?ct.emptyScript:"";for(let n=0;n<h;n++)r.append(u[n],et()),D.nextNode(),l.push({type:2,index:++a});r.append(u[h],et())}}}else if(r.nodeType===8)if(r.data===Nt)l.push({type:2,index:a});else{let u=-1;for(;(u=r.data.indexOf(O,u+1))!==-1;)l.push({type:7,index:a}),u+=O.length-1}a++}}static createElement(t,e){const s=I.createElement("template");return s.innerHTML=t,s}};function J(o,t,e=o,s){var i,c;if(t===q)return t;let r=s!==void 0?(i=e._$Co)==null?void 0:i[s]:e._$Cl;const a=rt(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==a&&((c=r==null?void 0:r._$AO)==null||c.call(r,!1),a===void 0?r=void 0:(r=new a(o),r._$AT(o,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=r:e._$Cl=r),r!==void 0&&(t=J(o,r._$AS(o,t.values),r,s)),t}let ce=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=((t==null?void 0:t.creationScope)??I).importNode(e,!0);D.currentNode=r;let a=D.nextNode(),i=0,c=0,l=s[0];for(;l!==void 0;){if(i===l.index){let x;l.type===2?x=new kt(a,a.nextSibling,this,t):l.type===1?x=new l.ctor(a,l.name,l.strings,this,t):l.type===6&&(x=new ue(a,this,t)),this._$AV.push(x),l=s[++c]}i!==(l==null?void 0:l.index)&&(a=D.nextNode(),i++)}return D.currentNode=I,r}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},kt=class Wt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),rt(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==q&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ie(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==v&&rt(this._$AH)?this._$AA.nextSibling.data=t:this.T(I.createTextNode(t)),this._$AH=t}$(t){var a;const{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=bt.createElement(Ut(s.h,s.h[0]),this.options)),s);if(((a=this._$AH)==null?void 0:a._$AD)===r)this._$AH.p(e);else{const i=new ce(r,this),c=i.u(this.options);i.p(e),this.T(c),this._$AH=i}}_$AC(t){let e=Dt.get(t.strings);return e===void 0&&Dt.set(t.strings,e=new bt(t)),e}k(t){_t(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const a of t)r===e.length?e.push(s=new Wt(this.O(et()),this.O(et()),this,this.options)):s=e[r],s._$AI(a),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t!==this._$AB;){const r=Mt(t).nextSibling;Mt(t).remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},dt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,a){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=v}_$AI(t,e=this,s,r){const a=this.strings;let i=!1;if(a===void 0)t=J(this,t,e,0),i=!rt(t)||t!==this._$AH&&t!==q,i&&(this._$AH=t);else{const c=t;let l,x;for(t=a[0],l=0;l<a.length-1;l++)x=J(this,c[s+l],e,l),x===q&&(x=this._$AH[l]),i||(i=!rt(x)||x!==this._$AH[l]),x===v?t=v:t!==v&&(t+=(x??"")+a[l+1]),this._$AH[l]=x}i&&!r&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},de=class extends dt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}},pe=class extends dt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}},he=class extends dt{constructor(t,e,s,r,a){super(t,e,s,r,a),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??v)===q)return;const s=this._$AH,r=t===v&&s!==v||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==v&&(s===v||r);r&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},ue=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}};const mt=tt.litHtmlPolyfillSupport;mt==null||mt(bt,kt),(tt.litHtmlVersions??(tt.litHtmlVersions=[])).push("3.3.2");const xe=(o,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let r=s._$litPart$;if(r===void 0){const a=(e==null?void 0:e.renderBefore)??null;s._$litPart$=r=new kt(t.insertBefore(et(),a),a,void 0,e??{})}return r._$AI(o),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=globalThis;class y extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xe(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return q}}var Ft;y._$litElement$=!0,y.finalized=!0,(Ft=F.litElementHydrateSupport)==null||Ft.call(F,{LitElement:y});const gt=F.litElementPolyfillSupport;gt==null||gt({LitElement:y});(F.litElementVersions??(F.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe={attribute:!0,type:String,converter:lt,reflect:!1,hasChanged:$t},me=(o=fe,t,e)=>{const{kind:s,metadata:r}=e;let a=globalThis.litPropertyMetadata.get(r);if(a===void 0&&globalThis.litPropertyMetadata.set(r,a=new Map),s==="setter"&&((o=Object.create(o)).wrapped=!0),a.set(e.name,o),s==="accessor"){const{name:i}=e;return{set(c){const l=t.get.call(this);t.set.call(this,c),this.requestUpdate(i,l,o,!0,c)},init(c){return c!==void 0&&this.C(i,void 0,o,c),c}}}if(s==="setter"){const{name:i}=e;return function(c){const l=this[i];t.call(this,c),this.requestUpdate(i,l,o,!0,c)}}throw Error("Unsupported decorator location: "+s)};function d(o){return(t,e)=>typeof e=="object"?me(o,t,e):((s,r,a)=>{const i=r.hasOwnProperty(a);return r.constructor.createProperty(a,s),i?Object.getOwnPropertyDescriptor(r,a):void 0})(o,t,e)}if(typeof document<"u"&&!document.getElementById("tx-defaults")){const o=document.createElement("style");o.id="tx-defaults",o.textContent=`
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
  `,document.head.prepend(o)}const A=$`
  :host {
    font-family: var(--tx-font);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;var ge=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,Y=(o,t,e,s)=>{for(var r=s>1?void 0:s?ve(t,e):t,a=o.length-1,i;a>=0;a--)(i=o[a])&&(r=(s?i(t,e,r):i(r))||r);return s&&r&&ge(t,e,r),r};let B=class extends y{constructor(){super(...arguments),this.disabled=!1,this.variant="default",this.size="md",this.pill=!1,this.iconOnly=!1}render(){return f`
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
    `];Y([d({type:Boolean,reflect:!0})],B.prototype,"disabled",2);Y([d({type:String,reflect:!0})],B.prototype,"variant",2);Y([d({type:String,reflect:!0})],B.prototype,"size",2);Y([d({type:Boolean,reflect:!0})],B.prototype,"pill",2);Y([d({type:Boolean,reflect:!0,attribute:"icon-only"})],B.prototype,"iconOnly",2);B=Y([k("tx-button")],B);var be=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,R=(o,t,e,s)=>{for(var r=s>1?void 0:s?ye(t,e):t,a=o.length-1,i;a>=0;a--)(i=o[a])&&(r=(s?i(t,e,r):i(r))||r);return s&&r&&be(t,e,r),r};let P=class extends y{constructor(){super(...arguments),this.label="",this.name="",this.placeholder="",this.value="",this.type="text",this.search=!1}_handleInput(o){const t=o.target;this.value=t.value,this.dispatchEvent(new CustomEvent("tx-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){var o;return f`
      <div class="wrapper">
        ${this.label?f`<label>${this.label}</label>`:""}
        <div class="field">
          <input
            part="input"
            type=${this.search?"search":this.type}
            name=${this.name||((o=this.label)==null?void 0:o.toLowerCase().replaceAll(/\s+/g,"-"))||"input"}
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
    `];R([d({type:String})],P.prototype,"label",2);R([d({type:String})],P.prototype,"name",2);R([d({type:String})],P.prototype,"placeholder",2);R([d({type:String})],P.prototype,"value",2);R([d({type:String})],P.prototype,"type",2);R([d({type:Boolean,reflect:!0})],P.prototype,"search",2);P=R([k("tx-input")],P);var we=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,At=(o,t,e,s)=>{for(var r=s>1?void 0:s?$e(t,e):t,a=o.length-1,i;a>=0;a--)(i=o[a])&&(r=(s?i(t,e,r):i(r))||r);return s&&r&&we(t,e,r),r};let st=class extends y{constructor(){super(...arguments),this.checked=!1,this.label=""}_toggle(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("tx-change",{detail:{checked:this.checked},bubbles:!0,composed:!0}))}render(){return f`
      <div
        class="track"
        role="switch"
        tabindex="0"
        aria-checked=${this.checked}
        @click=${this._toggle}
        @keydown=${o=>{(o.key===" "||o.key==="Enter")&&(o.preventDefault(),this._toggle())}}
      >
        <div class="thumb"></div>
      </div>
      ${this.label?f`<span class="label" @click=${this._toggle}>${this.label}</span>`:""}
    `}};st.styles=[A,$`
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
    `];At([d({type:Boolean,reflect:!0})],st.prototype,"checked",2);At([d({type:String})],st.prototype,"label",2);st=At([k("tx-toggle")],st);var _e=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,St=(o,t,e,s)=>{for(var r=s>1?void 0:s?ke(t,e):t,a=o.length-1,i;a>=0;a--)(i=o[a])&&(r=(s?i(t,e,r):i(r))||r);return s&&r&&_e(t,e,r),r};let ot=class extends y{constructor(){super(...arguments),this.checked=!1,this.label=""}_toggle(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("tx-change",{detail:{checked:this.checked},bubbles:!0,composed:!0}))}render(){return f`
      <div
        class="box"
        role="checkbox"
        tabindex="0"
        aria-checked=${this.checked}
        @click=${this._toggle}
        @keydown=${o=>{(o.key===" "||o.key==="Enter")&&(o.preventDefault(),this._toggle())}}
      >
        <span class="checkmark">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 12 10 18 20 6"></polyline>
          </svg>
        </span>
      </div>
      ${this.label?f`<span class="label" @click=${this._toggle}>${this.label}</span>`:""}
    `}};ot.styles=[A,$`
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
    `];St([d({type:Boolean,reflect:!0})],ot.prototype,"checked",2);St([d({type:String})],ot.prototype,"label",2);ot=St([k("tx-checkbox")],ot);var Ae=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,U=(o,t,e,s)=>{for(var r=s>1?void 0:s?Se(t,e):t,a=o.length-1,i;a>=0;a--)(i=o[a])&&(r=(s?i(t,e,r):i(r))||r);return s&&r&&Ae(t,e,r),r};let C=class extends y{constructor(){super(...arguments),this.value=50,this.min=0,this.max=100,this.step=1,this.label="",this.showValue=!1}_renderHeader(){if(!this.label&&!this.showValue)return"";const o=this.label?f`<label>${this.label}</label>`:f`<span></span>`,t=this.showValue?f`<span class="value-display">${this.value}</span>`:"";return f`<div class="header">${o}${t}</div>`}_handleInput(o){this.value=Number(o.target.value),this.dispatchEvent(new CustomEvent("tx-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return f`
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
    `];U([d({type:Number})],C.prototype,"value",2);U([d({type:Number})],C.prototype,"min",2);U([d({type:Number})],C.prototype,"max",2);U([d({type:Number})],C.prototype,"step",2);U([d({type:String})],C.prototype,"label",2);U([d({type:Boolean,attribute:"show-value"})],C.prototype,"showValue",2);C=U([k("tx-slider")],C);var Ee=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,at=(o,t,e,s)=>{for(var r=s>1?void 0:s?Pe(t,e):t,a=o.length-1,i;a>=0;a--)(i=o[a])&&(r=(s?i(t,e,r):i(r))||r);return s&&r&&Ee(t,e,r),r};let H=class extends y{constructor(){super(...arguments),this.interactive=!1,this.flat=!1,this.compact=!1,this.accent="",this._hasHeader=!1,this._hasFooter=!1}_checkSlot(o){const t=o.target,e=t.name,s=t.assignedNodes({flatten:!0}).length>0;e==="header"&&(this._hasHeader=s),e==="footer"&&(this._hasFooter=s),this.requestUpdate()}render(){return f`
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
    `}};H.styles=[A,$`
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
    `];at([d({type:Boolean,reflect:!0})],H.prototype,"interactive",2);at([d({type:Boolean,reflect:!0})],H.prototype,"flat",2);at([d({type:Boolean,reflect:!0})],H.prototype,"compact",2);at([d({type:String,reflect:!0})],H.prototype,"accent",2);H=at([k("tx-card")],H);var Ce=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,pt=(o,t,e,s)=>{for(var r=s>1?void 0:s?ze(t,e):t,a=o.length-1,i;a>=0;a--)(i=o[a])&&(r=(s?i(t,e,r):i(r))||r);return s&&r&&Ce(t,e,r),r};let G=class extends y{constructor(){super(...arguments),this.color="default",this.dot=!1,this.size="md"}render(){return f`
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
    `];pt([d({type:String,reflect:!0})],G.prototype,"color",2);pt([d({type:Boolean})],G.prototype,"dot",2);pt([d({type:String,reflect:!0})],G.prototype,"size",2);G=pt([k("tx-badge")],G);var Me=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor,it=(o,t,e,s)=>{for(var r=s>1?void 0:s?Oe(t,e):t,a=o.length-1,i;a>=0;a--)(i=o[a])&&(r=(s?i(t,e,r):i(r))||r);return s&&r&&Me(t,e,r),r};let N=class extends y{constructor(){super(...arguments),this.src="",this.initials="",this.status="",this.size="md"}render(){return f`
      <div class="avatar" part="avatar">
        ${this.src?f`<img src=${this.src} alt=${this.initials||"avatar"} />`:f`${this.initials||""}`}
      </div>
      ${this.status?f`<span class="status"></span>`:""}
    `}};N.styles=[A,$`
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
    `];it([d({type:String})],N.prototype,"src",2);it([d({type:String})],N.prototype,"initials",2);it([d({type:String,reflect:!0})],N.prototype,"status",2);it([d({type:String,reflect:!0})],N.prototype,"size",2);N=it([k("tx-avatar")],N);var je=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,V=(o,t,e,s)=>{for(var r=s>1?void 0:s?Be(t,e):t,a=o.length-1,i;a>=0;a--)(i=o[a])&&(r=(s?i(t,e,r):i(r))||r);return s&&r&&je(t,e,r),r};let z=class extends y{constructor(){super(...arguments),this.value=0,this.max=100,this.label="",this.showValue=!1,this.color="primary",this.size="md"}get _percent(){return Math.min(100,Math.max(0,this.value/this.max*100))}render(){const o=this.label||this.showValue;return f`
      <div class="wrapper">
        ${o?f`
          <div class="header">
            <span class="label">${this.label}</span>
            ${this.showValue?f`<span class="value">${Math.round(this._percent)}%</span>`:""}
          </div>
        `:""}
        <div class="track" role="progressbar" aria-valuenow=${this.value} aria-valuemin="0" aria-valuemax=${this.max}>
          <div class="fill" style="width: ${this._percent}%"></div>
        </div>
      </div>
    `}};z.styles=[A,$`
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
    `];V([d({type:Number})],z.prototype,"value",2);V([d({type:Number})],z.prototype,"max",2);V([d({type:String})],z.prototype,"label",2);V([d({type:Boolean,attribute:"show-value"})],z.prototype,"showValue",2);V([d({type:String,reflect:!0})],z.prototype,"color",2);V([d({type:String,reflect:!0})],z.prototype,"size",2);z=V([k("tx-progress")],z);var Le=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,ht=(o,t,e,s)=>{for(var r=s>1?void 0:s?Te(t,e):t,a=o.length-1,i;a>=0;a--)(i=o[a])&&(r=(s?i(t,e,r):i(r))||r);return s&&r&&Le(t,e,r),r};let Q=class extends y{constructor(){super(...arguments),this.color="default",this.removable=!1,this.size="md"}_remove(){this.dispatchEvent(new CustomEvent("tx-remove",{bubbles:!0,composed:!0}))}render(){return f`
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
    `];ht([d({type:String,reflect:!0})],Q.prototype,"color",2);ht([d({type:Boolean})],Q.prototype,"removable",2);ht([d({type:String,reflect:!0})],Q.prototype,"size",2);Q=ht([k("tx-tag")],Q);var De=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,ut=(o,t,e,s)=>{for(var r=s>1?void 0:s?Fe(t,e):t,a=o.length-1,i;a>=0;a--)(i=o[a])&&(r=(s?i(t,e,r):i(r))||r);return s&&r&&De(t,e,r),r};let Z=class extends y{constructor(){super(...arguments),this.label="",this.vertical=!1,this.spacing="none"}render(){return f`
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
    `];ut([d({type:String})],Z.prototype,"label",2);ut([d({type:Boolean,reflect:!0})],Z.prototype,"vertical",2);ut([d({type:String,reflect:!0})],Z.prototype,"spacing",2);Z=ut([k("tx-divider")],Z);const Ie={light:{bg:"#F5F6FA",surface:"#FFFFFF",surfaceAlt:"#F8F9FC",accent:"#F3B23A",primary:"#4A7CFF",text:"#111827",textSecondary:"#4B5563",textMuted:"#9CA3AF",border:"#E5E7EB"},dark:{bg:"#0F1117",surface:"#1A1D2B",surfaceAlt:"#242737",accent:"#F3B23A",primary:"#6B9AFF",text:"#F3F4F6",textSecondary:"#9CA3AF",textMuted:"#6B7280",border:"#2D3142"},ocean:{bg:"#F0F7FF",surface:"#FFFFFF",surfaceAlt:"#F0F7FF",accent:"#0EA5E9",primary:"#0284C7",text:"#0C2340",textSecondary:"#3D5A74",textMuted:"#94A3B8",border:"#E0EAFF"}},He={bg:"--tx-bg",surface:"--tx-surface",surfaceAlt:"--tx-surface-alt",accent:"--tx-accent",primary:"--tx-primary",text:"--tx-text",textSecondary:"--tx-text-secondary",textMuted:"--tx-text-muted",border:"--tx-border",radius:"--tx-radius"};function qt(o,t=document.documentElement){const e=typeof o=="string"?Ie[o]:o;if(e)for(const[s,r]of Object.entries(e)){const a=He[s];a&&r&&t.style.setProperty(a,r)}}const E={name:"Deepesh Padmanabhan Nair",avatar_url:"https://avatars.githubusercontent.com/u/12994292?v=4",html_url:"https://github.com/hybridx",location:"Pune, India",twitter_username:"_deepeshnair",public_repos:69,followers:47,following:80},Ne=[{name:"WebScraper",description:"A modern, full-featured web scraper built with Next.js and Supabase. Crawl directory listings, classify files, and search through media collections with a beautiful UI.",language:"TypeScript",stargazers_count:6,forks_count:4,html_url:"https://github.com/hybridx/WebScraper"},{name:"WebSocket_RAT",description:"Remote Access Trojan using websockets",language:"JavaScript",stargazers_count:5,forks_count:1,html_url:"https://github.com/hybridx/WebSocket_RAT"},{name:"ai-slack-companion",description:"This is an AI slackbot which you can talk to for FREEE",language:"JavaScript",stargazers_count:4,forks_count:3,html_url:"https://github.com/hybridx/ai-slack-companion"},{name:"Whatsapp_bomb",description:"To automatically send whatsapp messages in a loop through WhatsAppWeb using selenium",language:"Python",stargazers_count:2,forks_count:1,html_url:"https://github.com/hybridx/Whatsapp_bomb"},{name:"REST-java-example",description:"Web application with rest web services to add, update, get the data from database and integrated these services with UI application built using angularJS.",language:"Java",stargazers_count:2,forks_count:0,html_url:"https://github.com/hybridx/REST-java-example"},{name:"CyBot",description:"chatbot application with custom functions for slack api",language:"JavaScript",stargazers_count:2,forks_count:0,html_url:"https://github.com/hybridx/CyBot"}];function Re(){const o=document.documentElement,e=(o.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";o.setAttribute("data-theme",e),localStorage.setItem("theme",e),qt(e),Jt(e)}function Jt(o){const t=document.getElementById("theme-toggle");t&&(t.innerHTML=o==="dark"?'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>':'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>')}function Ue(){const o=new IntersectionObserver(t=>t.forEach(e=>{e.isIntersecting&&e.target.classList.add("visible")}),{threshold:.1});document.querySelectorAll(".fade-in").forEach(t=>o.observe(t))}function Ve(){const o=["Platform Engineer","Infrastructure Builder","Systems Thinker","DevConf India Organizer"],t=document.querySelector(".typing-text");if(!t)return;let e=0,s=0,r=!1;function a(){const i=o[e];r?t.textContent=i.substring(0,--s):t.textContent=i.substring(0,++s),!r&&s===i.length?setTimeout(()=>r=!0,2e3):r&&s===0&&(r=!1,e=(e+1)%o.length),setTimeout(a,r?50:100)}a()}function We(o){return o=o.replace("#",""),o.length===3&&(o=o.split("").map(t=>t+t).join("")),o.length!==6?"100,108,255":`${Number.parseInt(o.substring(0,2),16)},${Number.parseInt(o.substring(2,4),16)},${Number.parseInt(o.substring(4,6),16)}`}function qe(){if(window.innerWidth<768||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const o=document.createElement("canvas");o.id="particle-canvas",Object.assign(o.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"1"}),document.body.insertBefore(o,document.body.firstChild);const t=o.getContext("2d");let e=[],s,r=0;const a=1e3/30;function i(){o.width=window.innerWidth,o.height=window.innerHeight}function c(){return{x:Math.random()*o.width,y:Math.random()*o.height,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,size:Math.random()*1.5+.5,opacity:Math.random()*.4+.1}}function l(){e=Array.from({length:Math.min(25,Math.floor(window.innerWidth/60))},c)}function x(){if(!t)return;t.clearRect(0,0,o.width,o.height);const h=We(getComputedStyle(document.documentElement).getPropertyValue("--tx-primary").trim());for(const n of e)n.x+=n.vx,n.y+=n.vy,(n.x<0||n.x>o.width)&&(n.vx*=-1),(n.y<0||n.y>o.height)&&(n.vy*=-1),t.beginPath(),t.arc(n.x,n.y,n.size,0,Math.PI*2),t.fillStyle=`rgba(${h},${n.opacity})`,t.fill();for(let n=0;n<e.length-1;n++)for(let p=n+1;p<e.length;p++){const g=e[n].x-e[p].x,w=e[n].y-e[p].y,L=g*g+w*w;L<8100&&(t.beginPath(),t.moveTo(e[n].x,e[n].y),t.lineTo(e[p].x,e[p].y),t.strokeStyle=`rgba(${h},${.08*(1-L/8100)})`,t.lineWidth=.5,t.stroke())}}function m(h){s=requestAnimationFrame(m),!(h-r<a)&&(r=h-(h-r)%a,x())}i(),l(),s=requestAnimationFrame(m);let u;window.addEventListener("resize",()=>{clearTimeout(u),u=setTimeout(()=>{if(window.innerWidth<768){cancelAnimationFrame(s),o.remove();return}i(),l()},200)},{passive:!0})}function Je(){const o=new IntersectionObserver(t=>t.forEach(e=>{e.isIntersecting&&e.target.classList.add("visible")}),{threshold:.3});document.querySelectorAll(".timeline-item").forEach(t=>o.observe(t))}function Ge(){document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",t=>{var r;t.preventDefault();const e=o.getAttribute("href");if(!e)return;const s=document.querySelector(e);if(s){const a=((r=document.querySelector("header"))==null?void 0:r.offsetHeight)||80;window.scrollTo({top:s.getBoundingClientRect().top+window.scrollY-a,behavior:"smooth"})}})})}function Qe(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.style.setProperty("--animation-duration","0s");const t=document.getElementById("particle-canvas");t&&(t.style.display="none")}document.addEventListener("keydown",t=>{t.key==="Tab"&&document.body.classList.add("keyboard-navigation")}),document.addEventListener("mousedown",()=>document.body.classList.remove("keyboard-navigation"));const o=document.createElement("a");o.href="#hero",o.className="skip-link",o.textContent="Skip to main content",document.body.insertBefore(o,document.body.firstChild)}function vt(o,t){return`
    <tx-card>
      <h3 slot="header" class="text-tx-primary font-semibold text-lg m-0">${o}</h3>
      <div class="flex flex-col gap-3">
        ${t.map(e=>`
          <div class="flex items-center gap-3 p-3 rounded-tx bg-tx-surface-alt hover:translate-x-1 transition-transform">
            <div class="w-10 h-10 rounded-tx bg-tx-primary flex items-center justify-center text-white font-bold text-sm shrink-0">${e.icon}</div>
            <span class="font-medium flex-1">${e.name}</span>
            <tx-progress value="${e.progress}" show-value size="sm" color="primary" style="width:120px;flex-shrink:0"></tx-progress>
          </div>
        `).join("")}
      </div>
    </tx-card>
  `}function M(o,t,e,s,r){return`
    <tx-card accent="${r}" interactive>
      <div class="w-14 h-14 rounded-tx-lg bg-tx-primary flex items-center justify-center text-white mb-4 shadow-tx-sm">${o}</div>
      <h3 class="text-tx-text text-xl font-semibold mb-2">${t}</h3>
      <p class="text-tx-text-secondary leading-relaxed mb-4">${e}</p>
      <div class="flex flex-wrap gap-2">
        ${s.map(a=>`<tx-badge color="primary">${a}</tx-badge>`).join("")}
      </div>
    </tx-card>
  `}function Ze(o){return`
    <tx-card accent="primary" interactive>
      <h3 slot="header" class="text-tx-text text-xl font-semibold m-0">${o.name}</h3>
      <p class="text-tx-text-secondary leading-relaxed mb-4">${o.description||"No description available"}</p>
      <div class="mb-3">
        <tx-badge color="primary">${o.language||"Various"}</tx-badge>
      </div>
      <div class="flex gap-4 items-center p-3 bg-tx-surface-alt rounded-tx border border-tx-border mb-4">
        <span class="flex items-center gap-1 text-sm text-tx-text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          ${o.stargazers_count}
        </span>
        <span class="flex items-center gap-1 text-sm text-tx-text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v12"></path><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
          ${o.forks_count}
        </span>
      </div>
      <div slot="footer">
        <a href="${o.html_url}" target="_blank" class="no-underline">
          <tx-button variant="primary" size="sm">View Project</tx-button>
        </a>
      </div>
    </tx-card>
  `}async function Ye(){var t;const o=localStorage.getItem("theme")||"dark";document.documentElement.setAttribute("data-theme",o),qt(o),document.querySelector("#app").innerHTML=`
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
            ${M('<svg width="40" height="40" viewBox="0 0 100 100" fill="currentColor"><circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="8" fill="none"/><text x="50" y="58" text-anchor="middle" font-size="20" font-weight="bold">PVE</text></svg>',"Proxmox VE Cluster","Multi-node setup with high availability, automated backups, and ZFS storage pools.",["Proxmox VE","Clustering"],"primary")}
            ${M('<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15 11.5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Z"/></svg>',"Containers & Services","Podman-first deployment with systemd integration, rootless containers, databases, APIs, and reverse proxies.",["Podman","systemd","PostgreSQL"],"primary")}
            ${M('<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>',"Backups & Recovery","Automated backup strategies, failure recovery, and monitoring. Systems designed to be restored, not rebuilt.",["Backups","Monitoring","Automation"],"primary")}
            ${M('<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',"DNS & Networking","Custom DDNS, reverse proxy with automatic TLS, domain management, and network segmentation.",["DDNS","TLS"],"primary")}
          </div>
          <tx-card flat>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6">
              <div class="text-center p-4 rounded-tx bg-tx-surface-alt"><span class="block text-2xl font-bold text-tx-primary mb-1">Proxmox</span><span class="text-sm text-tx-text-muted">Hypervisor</span></div>
              <div class="text-center p-4 rounded-tx bg-tx-surface-alt"><span class="block text-2xl font-bold text-tx-primary mb-1">Podman</span><span class="text-sm text-tx-text-muted">Containers</span></div>
              <div class="text-center p-4 rounded-tx bg-tx-surface-alt"><span class="block text-2xl font-bold text-tx-primary mb-1">PostgreSQL</span><span class="text-sm text-tx-text-muted">Primary DB</span></div>
              <div class="text-center p-4 rounded-tx bg-tx-surface-alt"><span class="block text-2xl font-bold text-tx-primary mb-1">Custom DDNS</span><span class="text-sm text-tx-text-muted">DNS Management</span></div>
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
            ${M('<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/></svg>',"Natural Language → SQL","LLM-powered query generation. Schema-aware, read-only by design, with explain plans and safety checks.",["PostgreSQL","FastAPI","LLMs"],"primary")}
            ${M('<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/></svg>',"MCP Servers","Model Context Protocol servers using FastAPI. Exposes schemas, file systems, and tools to LLMs in a structured way.",["MCP","FastAPI","Tools"],"primary")}
            ${M('<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',"Vector Search & Embeddings","pgvector for similarity search over text, code, and documentation. Experimenting with RAG and semantic search.",["pgvector","Embeddings","RAG"],"primary")}
            ${M('<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>',"POCs & Internal Demos","Working prototypes for schema exposure APIs, tool-based LLM interactions, and AI integration patterns.",["FastAPI","Design","Systems"],"primary")}
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
              ${[{title:"DevConf India Organizer",company:"Community Leadership",date:"2024 - Present",desc:"Core organizing member for DevConf India 2025 & 2026 (~2000 attendees). Focus on operational readiness, crowd control systems, communication tooling.",tags:["Event Ops","Leadership","Coordination","Community"],color:"primary",icon:'<path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>'},{title:"Platform & Backend Engineering",company:"Various Roles",date:"2020 - Present",desc:"Building backend systems, infrastructure tooling, and developer platforms. API design, database architecture, containerization with Podman.",tags:["FastAPI","PostgreSQL","Podman","Python","Linux"],color:"primary",icon:'<path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>'},{title:"AI Experiments & MCP Development",company:"Personal R&D",date:"2023 - Ongoing",desc:"Built MCP-compatible servers, NL→SQL systems, and vector search prototypes. Focus on practical integration patterns.",tags:["MCP","FastAPI","pgvector","LLMs"],color:"success",icon:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>'},{title:"Proxmox Lab & Self-Hosting",company:"Infrastructure Learning",date:"2021 - Ongoing",desc:"Built production-like infrastructure at home: Proxmox virtualization, Podman containers, custom DDNS, automated backups.",tags:["Proxmox VE","Podman","DDNS","Backups"],color:"primary",icon:'<path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>'}].map(e=>`
                <div class="timeline-item">
                  <div class="timeline-marker">
                    <div class="w-12 h-12 rounded-full bg-tx-primary flex items-center justify-center text-white shadow-tx-md border-4 border-tx-bg hover:scale-110 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">${e.icon}</svg>
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
                        ${e.tags.map(s=>`<tx-badge color="${e.color}">${s}</tx-badge>`).join("")}
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
            ${Ne.map(e=>Ze(e)).join("")}
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
