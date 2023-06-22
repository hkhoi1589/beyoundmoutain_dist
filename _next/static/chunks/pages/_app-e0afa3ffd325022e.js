(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(2212)}])},2212:function(e,t,r){"use strict";let n,i,a,o,s,c,l;r.r(t),r.d(t,{default:function(){return r7}});var u,d,p,f,h,g,m,b,w,y=r(5893);r(3814);var v=r(7294);let I={data:""},E=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||I,S=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,_=/\/\*[^]*?\*\/|  +/g,D=/\n+/g,C=(e,t)=>{let r="",n="",i="";for(let a in e){let o=e[a];"@"==a[0]?"i"==a[1]?r=a+" "+o+";":n+="f"==a[1]?C(o,a):a+"{"+C(o,"k"==a[1]?"":t)+"}":"object"==typeof o?n+=C(o,t?t.replace(/([^,])+/g,e=>a.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):a):null!=o&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=C.p?C.p(a,o):a+":"+o+";")}return r+(t&&i?t+"{"+i+"}":i)+n},k={},T=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+T(e[r]);return t}return e},A=(e,t,r,n,i)=>{var a,o;let s=T(e),c=k[s]||(k[s]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(s));if(!k[c]){let t=s!==e?e:(e=>{let t,r,n=[{}];for(;t=S.exec(e.replace(_,""));)t[4]?n.shift():t[3]?(r=t[3].replace(D," ").trim(),n.unshift(n[0][r]=n[0][r]||{})):n[0][t[1]]=t[2].replace(D," ").trim();return n[0]})(e);k[c]=C(i?{["@keyframes "+c]:t}:t,r?"":"."+c)}let l=r&&k.g?k.g:null;return r&&(k.g=k[c]),a=k[c],o=t,l?o.data=o.data.replace(l,a):-1===o.data.indexOf(a)&&(o.data=n?a+o.data:o.data+a),c},O=(e,t,r)=>e.reduce((e,n,i)=>{let a=t[i];if(a&&a.call){let e=a(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?"."+t:e&&"object"==typeof e?e.props?"":C(e,""):!1===e?"":e}return e+n+(null==a?"":a)},"");function x(e){let t=this||{},r=e.call?e(t.p):e;return A(r.unshift?r.raw?O(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,E(t.target),t.g,t.o,t.k)}x.bind({g:1});let j,B,N,L=x.bind({k:1});function M(e,t){let r=this||{};return function(){let n=arguments;function i(a,o){let s=Object.assign({},a),c=s.className||i.className;r.p=Object.assign({theme:B&&B()},s),r.o=/ *go\d+/.test(c),s.className=x.apply(r,n)+(c?" "+c:""),t&&(s.ref=o);let l=e;return e[0]&&(l=s.as||e,delete s.as),N&&l[0]&&N(s),j(l,s)}return t?t(i):i}}var P=e=>"function"==typeof e,$=(e,t)=>P(e)?e(t):e,R=(c=0,()=>(++c).toString()),H=()=>{if(void 0===l&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");l=!e||e.matches}return l},F=new Map,K=e=>{if(F.has(e))return;let t=setTimeout(()=>{F.delete(e),q({type:4,toastId:e})},1e3);F.set(e,t)},V=e=>{let t=F.get(e);t&&clearTimeout(t)},z=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&V(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?z(e,{type:1,toast:r}):z(e,{type:0,toast:r});case 3:let{toastId:n}=t;return n?K(n):e.toasts.forEach(e=>{K(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===n||void 0===n?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},W=[],U={toasts:[],pausedAt:void 0},q=e=>{U=z(U,e),W.forEach(e=>{e(U)})},G={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},J=(e={})=>{let[t,r]=(0,v.useState)(U);(0,v.useEffect)(()=>(W.push(r),()=>{let e=W.indexOf(r);e>-1&&W.splice(e,1)}),[t]);let n=t.toasts.map(t=>{var r,n;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||G[t.type],style:{...e.style,...null==(n=e[t.type])?void 0:n.style,...t.style}}});return{...t,toasts:n}},Y=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||R()}),X=e=>(t,r)=>{let n=Y(t,e,r);return q({type:2,toast:n}),n.id},Z=(e,t)=>X("blank")(e,t);Z.error=X("error"),Z.success=X("success"),Z.loading=X("loading"),Z.custom=X("custom"),Z.dismiss=e=>{q({type:3,toastId:e})},Z.remove=e=>q({type:4,toastId:e}),Z.promise=(e,t,r)=>{let n=Z.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(Z.success($(t.success,e),{id:n,...r,...null==r?void 0:r.success}),e)).catch(e=>{Z.error($(t.error,e),{id:n,...r,...null==r?void 0:r.error})}),e};var Q=(e,t)=>{q({type:1,toast:{id:e,height:t}})},ee=()=>{q({type:5,time:Date.now()})},et=e=>{let{toasts:t,pausedAt:r}=J(e);(0,v.useEffect)(()=>{if(r)return;let e=Date.now(),n=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&Z.dismiss(t.id);return}return setTimeout(()=>Z.dismiss(t.id),r)});return()=>{n.forEach(e=>e&&clearTimeout(e))}},[t,r]);let n=(0,v.useCallback)(()=>{r&&q({type:6,time:Date.now()})},[r]),i=(0,v.useCallback)((e,r)=>{let{reverseOrder:n=!1,gutter:i=8,defaultPosition:a}=r||{},o=t.filter(t=>(t.position||a)===(e.position||a)&&t.height),s=o.findIndex(t=>t.id===e.id),c=o.filter((e,t)=>t<s&&e.visible).length;return o.filter(e=>e.visible).slice(...n?[c+1]:[0,c]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return{toasts:t,handlers:{updateHeight:Q,startPause:ee,endPause:n,calculateOffset:i}}},er=M("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${L`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${L`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,en=M("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${L`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,ei=M("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${L`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ea=M("div")`
  position: absolute;
`,eo=M("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,es=M("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${L`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ec=({toast:e})=>{let{icon:t,type:r,iconTheme:n}=e;return void 0!==t?"string"==typeof t?v.createElement(es,null,t):t:"blank"===r?null:v.createElement(eo,null,v.createElement(en,{...n}),"loading"!==r&&v.createElement(ea,null,"error"===r?v.createElement(er,{...n}):v.createElement(ei,{...n})))},el=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,eu=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ed=M("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ep=M("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ef=(e,t)=>{let r=e.includes("top")?1:-1,[n,i]=H()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[el(r),eu(r)];return{animation:t?`${L(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${L(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},eh=v.memo(({toast:e,position:t,style:r,children:n})=>{let i=e.height?ef(e.position||t||"top-center",e.visible):{opacity:0},a=v.createElement(ec,{toast:e}),o=v.createElement(ep,{...e.ariaProps},$(e.message,e));return v.createElement(ed,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof n?n({icon:a,message:o}):v.createElement(v.Fragment,null,a,o))});p=v.createElement,C.p=void 0,j=p,B=void 0,N=void 0;var eg=({id:e,className:t,style:r,onHeightUpdate:n,children:i})=>{let a=v.useCallback(t=>{if(t){let r=()=>{n(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return v.createElement("div",{ref:a,className:t,style:r},i)},em=(e,t)=>{let r=e.includes("top"),n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:H()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...n}},eb=x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ew=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:n,children:i,containerStyle:a,containerClassName:o})=>{let{toasts:s,handlers:c}=et(r);return v.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...a},className:o,onMouseEnter:c.startPause,onMouseLeave:c.endPause},s.map(r=>{let a=r.position||t,o=em(a,c.calculateOffset(r,{reverseOrder:e,gutter:n,defaultPosition:t}));return v.createElement(eg,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?eb:"",style:o},"custom"===r.type?$(r.message,r):i?i(r):v.createElement(eh,{toast:r,position:a}))}))},ey=r(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ev=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):(64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},eI=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){let a=e[r++],o=e[r++],s=e[r++],c=((7&i)<<18|(63&a)<<12|(63&o)<<6|63&s)-65536;t[n++]=String.fromCharCode(55296+(c>>10)),t[n++]=String.fromCharCode(56320+(1023&c))}else{let a=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&o)}}return t.join("")},eE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],a=t+1<e.length,o=a?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,l=i>>2,u=(3&i)<<4|o>>4,d=(15&o)<<2|c>>6,p=63&c;s||(p=64,a||(d=64)),n.push(r[l],r[u],r[d],r[p])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ev(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):eI(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],a=t<e.length,o=a?r[e.charAt(t)]:0;++t;let s=t<e.length,c=s?r[e.charAt(t)]:64;++t;let l=t<e.length,u=l?r[e.charAt(t)]:64;if(++t,null==i||null==o||null==c||null==u)throw new eS;let d=i<<2|o>>4;if(n.push(d),64!==c){let e=o<<4&240|c>>2;if(n.push(e),64!==u){let e=c<<6&192|u;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class eS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let e_=function(e){let t=ev(e);return eE.encodeByteArray(t,!0)},eD=function(e){return e_(e).replace(/\./g,"")},eC=function(e){try{return eE.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},ek=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,eT=()=>{if(void 0===ey||void 0===ey.env)return;let e=ey.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},eA=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&eC(e[1]);return t&&JSON.parse(t)},eO=()=>{try{return ek()||eT()||eA()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ex=()=>{var e;return null===(e=eO())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}function eB(){try{return"object"==typeof indexedDB}catch(e){return!1}}function eN(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class eL extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,eL.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eM.prototype.create)}}class eM{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],a=i?i.replace(eP,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${a} (${n}).`,s=new eL(n,o,r);return s}}let eP=/\{\$([^}]+)}/g;function e$(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);for(let i of r){if(!n.includes(i))return!1;let r=e[i],a=t[i];if(eR(r)&&eR(a)){if(!e$(r,a))return!1}else if(r!==a)return!1}for(let e of n)if(!r.includes(e))return!1;return!0}function eR(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eH(e){return e&&e._delegate?e._delegate:e}class eF{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eK="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new ej;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:eK})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=eK){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=eK){return this.instances.has(e)}getOptions(e=eK){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);r===i&&t.resolve(n)}return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let a=this.instances.get(n);return a&&e(a,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===eK?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=eK){return this.component?this.component.multipleInstances?e:eK:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ez{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new eV(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eW=[];(f=m||(m={}))[f.DEBUG=0]="DEBUG",f[f.VERBOSE=1]="VERBOSE",f[f.INFO=2]="INFO",f[f.WARN=3]="WARN",f[f.ERROR=4]="ERROR",f[f.SILENT=5]="SILENT";let eU={debug:m.DEBUG,verbose:m.VERBOSE,info:m.INFO,warn:m.WARN,error:m.ERROR,silent:m.SILENT},eq=m.INFO,eG={[m.DEBUG]:"log",[m.VERBOSE]:"log",[m.INFO]:"info",[m.WARN]:"warn",[m.ERROR]:"error"},eJ=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=eG[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)},eY=(e,t)=>t.some(t=>e instanceof t),eX=new WeakMap,eZ=new WeakMap,eQ=new WeakMap,e0=new WeakMap,e1=new WeakMap,e2={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return eZ.get(e);if("objectStoreNames"===t)return e.objectStoreNames||eQ.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return e6(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function e6(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(e6(e.result)),n()},a=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{t instanceof IDBCursor&&eX.set(t,e)}).catch(()=>{}),e1.set(t,e),t}(e);if(e0.has(e))return e0.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(e4(this),e),e6(eX.get(this))}:function(...e){return e6(t.apply(e4(this),e))}:function(e,...r){let n=t.call(e4(this),e,...r);return eQ.set(n,e.sort?e.sort():[e]),e6(n)}:(t instanceof IDBTransaction&&function(e){if(eZ.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),n()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});eZ.set(e,t)}(t),eY(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,e2):t;return r!==e&&(e0.set(e,r),e1.set(r,e)),r}let e4=e=>e1.get(e),e3=["get","getKey","getAll","getAllKeys","count"],e5=["put","add","delete","clear"],e8=new Map;function e9(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(e8.get(t))return e8.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=e5.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||e3.includes(r)))return;let a=async function(e,...t){let a=this.transaction(e,i?"readwrite":"readonly"),o=a.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&a.done]))[0]};return e8.set(t,a),a}e2={...u=e2,get:(e,t,r)=>e9(e,t)||u.get(e,t,r),has:(e,t)=>!!e9(e,t)||u.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e7{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let te="@firebase/app",tt="0.9.12",tr=new class{constructor(e){this.name=e,this._logLevel=eq,this._logHandler=eJ,this._userLogHandler=null,eW.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in m))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?eU[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,m.DEBUG,...e),this._logHandler(this,m.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,m.VERBOSE,...e),this._logHandler(this,m.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,m.INFO,...e),this._logHandler(this,m.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,m.WARN,...e),this._logHandler(this,m.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,m.ERROR,...e),this._logHandler(this,m.ERROR,...e)}}("@firebase/app"),tn="[DEFAULT]",ti={[te]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ta=new Map,to=new Map;function ts(e){let t=e.name;if(to.has(t))return tr.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(to.set(t,e),ta.values()))!function(e,t){try{e.container.addComponent(t)}catch(r){tr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}(r,e);return!0}function tc(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}let tl=new eM("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new eF("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tl.create("app-deleted",{appName:this._name})}}function td(e,t={}){let r=e;if("object"!=typeof t){let e=t;t={name:e}}let n=Object.assign({name:tn,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw tl.create("bad-app-name",{appName:String(i)});if(r||(r=ex()),!r)throw tl.create("no-options");let a=ta.get(i);if(a){if(e$(r,a.options)&&e$(n,a.config))return a;throw tl.create("duplicate-app",{appName:i})}let o=new ez(i);for(let e of to.values())o.addComponent(e);let s=new tu(r,n,o);return ta.set(i,s),s}function tp(){return Array.from(ta.values())}function tf(e,t,r){var n;let i=null!==(n=ti[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){let e=[`Unable to register library "${i}" with version "${t}":`];a&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),tr.warn(e.join(" "));return}ts(new eF(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let th="firebase-heartbeat-store",tg=null;function tm(){return tg||(tg=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:a}={}){let o=indexedDB.open(e,1),s=e6(o);return n&&o.addEventListener("upgradeneeded",e=>{n(e6(o.result),e.oldVersion,e.newVersion,e6(o.transaction),e)}),r&&o.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(th)}}).catch(e=>{throw tl.create("idb-open",{originalErrorMessage:e.message})})),tg}async function tb(e){try{let t=await tm(),r=await t.transaction(th).objectStore(th).get(ty(e));return r}catch(e){if(e instanceof eL)tr.warn(e.message);else{let t=tl.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});tr.warn(t.message)}}}async function tw(e,t){try{let r=await tm(),n=r.transaction(th,"readwrite"),i=n.objectStore(th);await i.put(t,ty(e)),await n.done}catch(e){if(e instanceof eL)tr.warn(e.message);else{let t=tl.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});tr.warn(t.message)}}}function ty(e){return`${e.name}!${e.options.appId}`}class tv{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new tE(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),r=tI();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),r=Date.now();return r-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=tI(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),tS(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),tS(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=eD(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function tI(){let e=new Date;return e.toISOString().substring(0,10)}class tE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!eB()&&eN().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await tb(this.app);return e||{heartbeats:[]}}}async overwrite(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return tw(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return tw(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function tS(e){return eD(JSON.stringify({version:2,heartbeats:e})).length}ts(new eF("platform-logger",e=>new e7(e),"PRIVATE")),ts(new eF("heartbeat",e=>new tv(e),"PRIVATE")),tf(te,tt,""),tf(te,tt,"esm2017"),tf("fire-js",""),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tf("firebase","9.22.2","app");let t_=(e,t)=>t.some(t=>e instanceof t),tD=new WeakMap,tC=new WeakMap,tk=new WeakMap,tT=new WeakMap,tA=new WeakMap,tO={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return tC.get(e);if("objectStoreNames"===t)return e.objectStoreNames||tk.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return tx(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function tx(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(tx(e.result)),n()},a=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{t instanceof IDBCursor&&tD.set(t,e)}).catch(()=>{}),tA.set(t,e),t}(e);if(tT.has(e))return tT.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(tj(this),e),tx(tD.get(this))}:function(...e){return tx(t.apply(tj(this),e))}:function(e,...r){let n=t.call(tj(this),e,...r);return tk.set(n,e.sort?e.sort():[e]),tx(n)}:(t instanceof IDBTransaction&&function(e){if(tC.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),n()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});tC.set(e,t)}(t),t_(t,a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,tO):t;return r!==e&&(tT.set(e,r),tA.set(r,e)),r}let tj=e=>tA.get(e);function tB(e,t,{blocked:r,upgrade:n,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=tx(o);return n&&o.addEventListener("upgradeneeded",e=>{n(tx(o.result),e.oldVersion,e.newVersion,tx(o.transaction))}),r&&o.addEventListener("blocked",()=>r()),s.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),s}function tN(e,{blocked:t}={}){let r=indexedDB.deleteDatabase(e);return t&&r.addEventListener("blocked",()=>t()),tx(r).then(()=>void 0)}let tL=["get","getKey","getAll","getAllKeys","count"],tM=["put","add","delete","clear"],tP=new Map;function t$(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(tP.get(t))return tP.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=tM.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||tL.includes(r)))return;let a=async function(e,...t){let a=this.transaction(e,i?"readwrite":"readonly"),o=a.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&a.done]))[0]};return tP.set(t,a),a}tO={...d=tO,get:(e,t,r)=>t$(e,t)||d.get(e,t,r),has:(e,t)=>!!t$(e,t)||d.has(e,t)};let tR="@firebase/installations",tH="0.6.4",tF=`w:${tH}`,tK="FIS_v2",tV=new eM("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function tz(e){return e instanceof eL&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tW({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function tU(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function tq(e,t){let r=await t.json(),n=r.error;return tV.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function tG({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function tJ(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tY({appConfig:e,heartbeatServiceProvider:t},{fid:r}){let n=tW(e),i=tG(e),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let o={fid:r,authVersion:tK,appId:e.appId,sdkVersion:tF},s={method:"POST",headers:i,body:JSON.stringify(o)},c=await tJ(()=>fetch(n,s));if(c.ok){let e=await c.json(),t={fid:e.fid||r,registrationStatus:2,refreshToken:e.refreshToken,authToken:tU(e.authToken)};return t}throw await tq("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tX(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tZ=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tQ(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t0=new Map;function t1(e,t){let r=tQ(e);t2(r,t),function(e,t){let r=(!t6&&"BroadcastChannel"in self&&((t6=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{t2(e.data.key,e.data.fid)}),t6);r&&r.postMessage({key:e,fid:t}),0===t0.size&&t6&&(t6.close(),t6=null)}(r,t)}function t2(e,t){let r=t0.get(e);if(r)for(let e of r)e(t)}let t6=null,t4="firebase-installations-store",t3=null;function t5(){return t3||(t3=tB("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(t4)}})),t3}async function t8(e,t){let r=tQ(e),n=await t5(),i=n.transaction(t4,"readwrite"),a=i.objectStore(t4),o=await a.get(r);return await a.put(t,r),await i.done,o&&o.fid===t.fid||t1(e,t.fid),t}async function t9(e){let t=tQ(e),r=await t5(),n=r.transaction(t4,"readwrite");await n.objectStore(t4).delete(t),await n.done}async function t7(e,t){let r=tQ(e),n=await t5(),i=n.transaction(t4,"readwrite"),a=i.objectStore(t4),o=await a.get(r),s=t(o);return void 0===s?await a.delete(r):await a.put(s,r),await i.done,s&&(!o||o.fid!==s.fid)&&t1(e,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(e){let t;let r=await t7(e.appConfig,r=>{let n=function(e){let t=e||{fid:function(){try{let e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;let r=function(e){let t=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}(e);return t.substr(0,22)}(e);return tZ.test(r)?r:""}catch(e){return""}}(),registrationStatus:0};return ri(t)}(r),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){let e=Promise.reject(tV.create("app-offline"));return{installationEntry:t,registrationPromise:e}}let r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=rt(e,r);return{installationEntry:r,registrationPromise:n}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:rr(e)}:{installationEntry:t}}(e,n);return t=i.registrationPromise,i.installationEntry});return""===r.fid?{installationEntry:await t}:{installationEntry:r,registrationPromise:t}}async function rt(e,t){try{let r=await tY(e,t);return t8(e.appConfig,r)}catch(r){throw tz(r)&&409===r.customData.serverCode?await t9(e.appConfig):await t8(e.appConfig,{fid:t.fid,registrationStatus:0}),r}}async function rr(e){let t=await rn(e.appConfig);for(;1===t.registrationStatus;)await tX(100),t=await rn(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:r}=await re(e);return r||t}return t}function rn(e){return t7(e,e=>{if(!e)throw tV.create("installation-not-found");return ri(e)})}function ri(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra({appConfig:e,heartbeatServiceProvider:t},r){let n=function(e,{fid:t}){return`${tW(e)}/${t}/authTokens:generate`}(e,r),i=function(e,{refreshToken:t}){let r=tG(e);return r.append("Authorization",`${tK} ${t}`),r}(e,r),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let o={installation:{sdkVersion:tF,appId:e.appId}},s={method:"POST",headers:i,body:JSON.stringify(o)},c=await tJ(()=>fetch(n,s));if(c.ok){let e=await c.json(),t=tU(e);return t}throw await tq("Generate Auth Token",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(e,t=!1){let r;let n=await t7(e.appConfig,n=>{var i;if(!ru(n))throw tV.create("not-registered");let a=n.authToken;if(!t&&2===(i=a).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(i))return n;if(1===a.requestStatus)return r=rs(e,t),n;{if(!navigator.onLine)throw tV.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(n);return r=rl(e,t),t}}),i=r?await r:n.authToken;return i}async function rs(e,t){let r=await rc(e.appConfig);for(;1===r.authToken.requestStatus;)await tX(100),r=await rc(e.appConfig);let n=r.authToken;return 0===n.requestStatus?ro(e,t):n}function rc(e){return t7(e,e=>{if(!ru(e))throw tV.create("not-registered");let t=e.authToken;return 1===t.requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function rl(e,t){try{let r=await ra(e,t),n=Object.assign(Object.assign({},t),{authToken:r});return await t8(e.appConfig,n),r}catch(r){if(tz(r)&&(401===r.customData.serverCode||404===r.customData.serverCode))await t9(e.appConfig);else{let r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await t8(e.appConfig,r)}throw r}}function ru(e){return void 0!==e&&2===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rd(e){let{installationEntry:t,registrationPromise:r}=await re(e);return r?r.catch(console.error):ro(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rp(e,t=!1){await rf(e);let r=await ro(e,t);return r.token}async function rf(e){let{registrationPromise:t}=await re(e);t&&await t}function rh(e){return tV.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rg="installations",rm=e=>{let t=e.getProvider("app").getImmediate(),r=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw rh("App Configuration");if(!e.name)throw rh("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw rh(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),n=tc(t,"heartbeat");return{app:t,appConfig:r,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},rb=e=>{let t=e.getProvider("app").getImmediate(),r=tc(t,rg).getImmediate();return{getId:()=>rd(r),getToken:e=>rp(r,e)}};ts(new eF(rg,rm,"PUBLIC")),ts(new eF("installations-internal",rb,"PRIVATE")),tf(tR,tH),tf(tR,tH,"esm2017");let rw="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ry="google.c.a.c_id";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(e){let t=new Uint8Array(e),r=btoa(String.fromCharCode(...t));return r.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}(h=b||(b={}))[h.DATA_MESSAGE=1]="DATA_MESSAGE",h[h.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION",(g=w||(w={})).PUSH_RECEIVED="push-received",g.NOTIFICATION_CLICKED="notification-clicked";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rI="fcm_token_details_db",rE="fcm_token_object_Store";async function rS(e){if("databases"in indexedDB){let e=await indexedDB.databases(),t=e.map(e=>e.name);if(!t.includes(rI))return null}let t=null,r=await tB(rI,5,{upgrade:async(r,n,i,a)=>{var o;if(n<2||!r.objectStoreNames.contains(rE))return;let s=a.objectStore(rE),c=await s.index("fcmSenderId").get(e);if(await s.clear(),c){if(2===n){if(!c.auth||!c.p256dh||!c.endpoint)return;t={token:c.fcmToken,createTime:null!==(o=c.createTime)&&void 0!==o?o:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:"string"==typeof c.vapidKey?c.vapidKey:rv(c.vapidKey)}}}else 3===n?t={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:rv(c.auth),p256dh:rv(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:rv(c.vapidKey)}}:4===n&&(t={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:rv(c.auth),p256dh:rv(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:rv(c.vapidKey)}})}}});return r.close(),await tN(rI),await tN("fcm_vapid_details_db"),await tN("undefined"),!function(e){if(!e||!e.subscriptionOptions)return!1;let{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?null:t}let r_="firebase-messaging-store",rD=null;function rC(){return rD||(rD=tB("firebase-messaging-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(r_)}})),rD}async function rk(e){let t=function({appConfig:e}){return e.appId}(e),r=await rC(),n=await r.transaction(r_).objectStore(r_).get(t);if(n)return n;{let t=await rS(e.appConfig.senderId);if(t)return await rT(e,t),t}}async function rT(e,t){let r=function({appConfig:e}){return e.appId}(e),n=await rC(),i=n.transaction(r_,"readwrite");return await i.objectStore(r_).put(t,r),await i.done,t}async function rA(e){let t=function({appConfig:e}){return e.appId}(e),r=await rC(),n=r.transaction(r_,"readwrite");await n.objectStore(r_).delete(t),await n.done}let rO=new eM("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rx(e,t){let r;let n=await rL(e),i=rM(t),a={method:"POST",headers:n,body:JSON.stringify(i)};try{let t=await fetch(rN(e.appConfig),a);r=await t.json()}catch(e){throw rO.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(r.error){let e=r.error.message;throw rO.create("token-subscribe-failed",{errorInfo:e})}if(!r.token)throw rO.create("token-subscribe-no-token");return r.token}async function rj(e,t){let r;let n=await rL(e),i=rM(t.subscriptionOptions),a={method:"PATCH",headers:n,body:JSON.stringify(i)};try{let n=await fetch(`${rN(e.appConfig)}/${t.token}`,a);r=await n.json()}catch(e){throw rO.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(r.error){let e=r.error.message;throw rO.create("token-update-failed",{errorInfo:e})}if(!r.token)throw rO.create("token-update-no-token");return r.token}async function rB(e,t){let r=await rL(e);try{let n=await fetch(`${rN(e.appConfig)}/${t}`,{method:"DELETE",headers:r}),i=await n.json();if(i.error){let e=i.error.message;throw rO.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw rO.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function rN({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}async function rL({appConfig:e,installations:t}){let r=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${r}`})}function rM({p256dh:e,auth:t,endpoint:r,vapidKey:n}){let i={web:{endpoint:r,auth:t,p256dh:e}};return n!==rw&&(i.web.applicationPubKey=n),i}async function rP(e){let t=await rF(e.swRegistration,e.vapidKey),r={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:rv(t.getKey("auth")),p256dh:rv(t.getKey("p256dh"))},n=await rk(e.firebaseDependencies);if(!n)return rH(e.firebaseDependencies,r);if(function(e,t){let r=t.vapidKey===e.vapidKey,n=t.endpoint===e.endpoint,i=t.auth===e.auth,a=t.p256dh===e.p256dh;return r&&n&&i&&a}(n.subscriptionOptions,r))return Date.now()>=n.createTime+6048e5?rR(e,{token:n.token,createTime:Date.now(),subscriptionOptions:r}):n.token;try{await rB(e.firebaseDependencies,n.token)}catch(e){console.warn(e)}return rH(e.firebaseDependencies,r)}async function r$(e){let t=await rk(e.firebaseDependencies);t&&(await rB(e.firebaseDependencies,t.token),await rA(e.firebaseDependencies));let r=await e.swRegistration.pushManager.getSubscription();return!r||r.unsubscribe()}async function rR(e,t){try{let r=await rj(e.firebaseDependencies,t),n=Object.assign(Object.assign({},t),{token:r,createTime:Date.now()});return await rT(e.firebaseDependencies,n),r}catch(t){throw await r$(e),t}}async function rH(e,t){let r=await rx(e,t),n={token:r,createTime:Date.now(),subscriptionOptions:t};return await rT(e,n),n.token}async function rF(e,t){let r=await e.pushManager.getSubscription();return r||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:function(e){let t="=".repeat((4-e.length%4)%4),r=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(r),i=new Uint8Array(n.length);for(let e=0;e<n.length;++e)i[e]=n.charCodeAt(e);return i}(t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rK(e){var t;let r={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};let r=t.notification.title;r&&(e.notification.title=r);let n=t.notification.body;n&&(e.notification.body=n);let i=t.notification.image;i&&(e.notification.image=i);let a=t.notification.icon;a&&(e.notification.icon=a)}(r,e),t=r,e.data&&(t.data=e.data),function(e,t){var r,n,i,a,o;if(!t.fcmOptions&&!(null===(r=t.notification)||void 0===r?void 0:r.click_action))return;e.fcmOptions={};let s=null!==(i=null===(n=t.fcmOptions)||void 0===n?void 0:n.link)&&void 0!==i?i:null===(a=t.notification)||void 0===a?void 0:a.click_action;s&&(e.fcmOptions.link=s);let c=null===(o=t.fcmOptions)||void 0===o?void 0:o.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}(r,e),r}function rV(e,t){let r=[];for(let n=0;n<e.length;n++)r.push(e.charAt(n)),n<t.length&&r.push(t.charAt(n));return r.join("")}function rz(e){return rO.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rV("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),rV("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rW{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;let n=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw rz("App Configuration Object");if(!e.name)throw rz("App Name");let{options:t}=e;for(let e of["projectId","apiKey","appId","messagingSenderId"])if(!t[e])throw rz(e);return{appName:e.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:n,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rU(e){try{e.swRegistration=await navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}),e.swRegistration.update().catch(()=>{})}catch(e){throw rO.create("failed-service-worker-registration",{browserErrorMessage:null==e?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rq(e,t){if(t||e.swRegistration||await rU(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw rO.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rG(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=rw)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rJ(e,t){if(!navigator)throw rO.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw rO.create("permission-blocked");return await rG(e,null==t?void 0:t.vapidKey),await rq(e,null==t?void 0:t.serviceWorkerRegistration),rP(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rY(e,t,r){let n=function(e){switch(e){case w.NOTIFICATION_CLICKED:return"notification_open";case w.PUSH_RECEIVED:return"notification_foreground";default:throw Error()}}(t),i=await e.firebaseDependencies.analyticsProvider.get();i.logEvent(n,{message_id:r[ry],message_name:r["google.c.a.c_l"],message_time:r["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rX(e,t){let r=t.data;if(!r.isFirebaseMessaging)return;e.onMessageHandler&&r.messageType===w.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler(rK(r)):e.onMessageHandler.next(rK(r)));let n=r.data;"object"==typeof n&&n&&ry in n&&"1"===n["google.c.a.e"]&&await rY(e,r.messageType,n)}let rZ="@firebase/messaging",rQ="0.12.4",r0=e=>{let t=new rW(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",e=>rX(t,e)),t},r1=e=>{let t=e.getProvider("messaging").getImmediate();return{getToken:e=>rJ(t,e)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r2(){try{await eN()}catch(e){return!1}return"undefined"!=typeof window&&eB()&&"undefined"!=typeof navigator&&!!navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r6(e=function(e=tn){let t=ta.get(e);if(!t&&e===tn&&ex())return td();if(!t)throw tl.create("no-app",{appName:e});return t}()){return r2().then(e=>{if(!e)throw rO.create("unsupported-browser")},e=>{throw rO.create("indexed-db-unsupported")}),tc(eH(e),"messaging").getImmediate()}async function r4(e,t){return rJ(e=eH(e),t)}ts(new eF("messaging",r0,"PUBLIC")),ts(new eF("messaging-internal",r1,"PRIVATE")),tf(rZ,rQ),tf(rZ,rQ,"esm2017");let r3={apiKey:"AIzaSyAkfHBzGYQcUZL0S76E3TukmzFuzCidge4",authDomain:"koolyard-84a4a.firebaseapp.com",projectId:"koolyard-84a4a",storageBucket:"koolyard-84a4a.appspot.com",messagingSenderId:"669707854180",appId:"1:669707854180:web:8a5e8aa2dd09025df95a71",measurementId:"G-PG9PCKGMHY"},r5=e=>{let t=r6(e);return r4(t,{vapidKey:"BKsc3xU_8UlCKISztvYhJHM94W0aJfqVB2DqSgXUCkKAf42PT-t4UGBam2UbT7xTLojKwagmZncErhko2TTz49c"}).then(e=>{e?console.log("current token for client: ",e):console.log("No registration token available. Request permission to generate one.")}).catch(e=>{console.log("An error occurred while retrieving token. ",e)})},r8=e=>new Promise(t=>{let r=r6(e);onMessage(r,e=>{t(e)})}),r9=()=>{let[e,t]=(0,v.useState)({title:"",body:""}),r=()=>Z((0,y.jsx)(n,{}));function n(){return(0,y.jsxs)("div",{children:[(0,y.jsxs)("p",{children:[(0,y.jsx)("b",{children:"RODD"}),(0,y.jsx)("b",{children:null==e?void 0:e.title})]}),(0,y.jsx)("p",{children:null==e?void 0:e.body})]})}return(0,v.useEffect)(()=>{void 0!==window&&(console.log("here"),r5(s=0===tp().length?td(r3):tp()[0]))},[]),(0,v.useEffect)(()=>{(null==e?void 0:e.title)&&r()},[e]),s&&r8(s).then(e=>{var r,n;t({title:null==e?void 0:null===(r=e.notification)||void 0===r?void 0:r.title,body:null==e?void 0:null===(n=e.notification)||void 0===n?void 0:n.body})}).catch(e=>console.log("failed: ",e)),(0,y.jsx)(ew,{})};function r7(e){let{Component:t,pageProps:r}=e,n=t.getLayout||(e=>e);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(r9,{}),n((0,y.jsx)(t,{...r}))]})}},3814:function(){},7663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c=[],l=!1,u=-1;function d(){l&&n&&(l=!1,n.length?c=n.concat(c):u=-1,c.length&&p())}function p(){if(!l){var e=s(d);l=!0;for(var t=c.length;t;){for(n=c,c=[];++u<t;)n&&n[u].run();u=-1,t=c.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new f(e,t)),1!==c.length||l||s(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var a=r[e]={exports:{}},o=!0;try{t[e](a,a.exports,n),o=!1}finally{o&&delete r[e]}return a.exports}n.ab="//";var i=n(229);e.exports=i}()}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);