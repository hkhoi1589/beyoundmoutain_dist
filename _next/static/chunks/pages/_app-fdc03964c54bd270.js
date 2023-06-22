(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5964)}])},5964:function(e,t,n){"use strict";let r,i,a,o,s;n.r(t),n.d(t,{default:function(){return nM}});var l,c,u,d,f,p,h,g,m=n(5893),b=n(7294),y=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(i&&(i+=" "),i+=r);else for(n in t)t[n]&&(i&&(i+=" "),i+=n)}return i}(e))&&(r&&(r+=" "),r+=t);return r};let v=e=>"number"==typeof e&&!isNaN(e),w=e=>"string"==typeof e,E=e=>"function"==typeof e,I=e=>w(e)||E(e)?e:null,T=e=>(0,b.isValidElement)(e)||w(e)||E(e)||v(e);function _(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:a=300}=e;return function(e){let{children:o,position:s,preventExitTransition:l,done:c,nodeRef:u,isIn:d}=e,f=r?`${t}--${s}`:t,p=r?`${n}--${s}`:n,h=(0,b.useRef)(0);return(0,b.useLayoutEffect)(()=>{let e=u.current,t=f.split(" "),n=r=>{r.target===u.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===h.current&&"animationcancel"!==r.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,b.useEffect)(()=>{let e=u.current,t=()=>{e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}(e,c,a):c()};d||(l?t():(h.current=1,e.className+=` ${p}`,e.addEventListener("animationend",t)))},[d]),b.createElement(b.Fragment,null,o)}}function C(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}let S={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){let n=this.list.get(e).filter(e=>e!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){let t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{let n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},D=e=>{let{theme:t,type:n,...r}=e;return b.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...r})},k={info:function(e){return b.createElement(D,{...e},b.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return b.createElement(D,{...e},b.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return b.createElement(D,{...e},b.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return b.createElement(D,{...e},b.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return b.createElement("div",{className:"Toastify__spinner"})}};function O(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function A(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function L(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return b.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":r},b.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},b.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function N(e){let{delay:t,isRunning:n,closeToast:r,type:i="default",hide:a,className:o,style:s,controlledProgress:l,progress:c,rtl:u,isIn:d,theme:f}=e,p=a||l&&0===c,h={...s,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:p?0:1};l&&(h.transform=`scaleX(${c})`);let g=y("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":u}),m=E(o)?o({rtl:u,type:i,defaultClassName:g}):y(g,o);return b.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer",className:m,style:h,[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{d&&r()}})}let B=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i}=function(e){let[t,n]=(0,b.useState)(!1),[r,i]=(0,b.useState)(!1),a=(0,b.useRef)(null),o=(0,b.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,s=(0,b.useRef)(e),{autoClose:l,pauseOnHover:c,closeToast:u,onClick:d,closeOnClick:f}=e;function p(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",y),document.addEventListener("mouseup",v),document.addEventListener("touchmove",y),document.addEventListener("touchend",v);let n=a.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=n.getBoundingClientRect(),n.style.transition="",o.x=O(t.nativeEvent),o.y=A(t.nativeEvent),"x"===e.draggableDirection?(o.start=o.x,o.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(o.start=o.y,o.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function h(t){if(o.boundingRect){let{top:n,bottom:r,left:i,right:a}=o.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&o.x>=i&&o.x<=a&&o.y>=n&&o.y<=r?m():g()}}function g(){n(!0)}function m(){n(!1)}function y(n){let r=a.current;o.canDrag&&r&&(o.didMove=!0,t&&m(),o.x=O(n),o.y=A(n),o.delta="x"===e.draggableDirection?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),r.style.transform=`translate${e.draggableDirection}(${o.delta}px)`,r.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function v(){document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",v),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",v);let t=a.current;if(o.canDrag&&o.didMove&&t){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,b.useEffect)(()=>{s.current=e}),(0,b.useEffect)(()=>(a.current&&a.current.addEventListener("d",g,{once:!0}),E(e.onOpen)&&e.onOpen((0,b.isValidElement)(e.children)&&e.children.props),()=>{let e=s.current;E(e.onClose)&&e.onClose((0,b.isValidElement)(e.children)&&e.children.props)}),[]),(0,b.useEffect)(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||m(),window.addEventListener("focus",g),window.addEventListener("blur",m)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",g),window.removeEventListener("blur",m))}),[e.pauseOnFocusLoss]);let w={onMouseDown:p,onTouchStart:p,onMouseUp:h,onTouchEnd:h};return l&&c&&(w.onMouseEnter=m,w.onMouseLeave=g),f&&(w.onClick=e=>{d&&d(e),o.canCloseOnClick&&u()}),{playToast:g,pauseToast:m,isRunning:t,preventExitTransition:r,toastRef:a,eventHandlers:w}}(e),{closeButton:a,children:o,autoClose:s,onClick:l,type:c,hideProgressBar:u,closeToast:d,transition:f,position:p,className:h,style:g,bodyClassName:m,bodyStyle:v,progressClassName:w,progressStyle:I,updateId:T,role:_,progress:C,rtl:S,toastId:D,deleteToast:k,isIn:B,isLoading:M,iconOut:P,closeOnClick:j,theme:R}=e,x=y("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":S},{"Toastify__toast--close-on-click":j}),$=E(h)?h({rtl:S,position:p,type:c,defaultClassName:x}):y(x,h),H=!!C||!s,F={closeToast:d,type:c,theme:R},V=null;return!1===a||(V=E(a)?a(F):(0,b.isValidElement)(a)?(0,b.cloneElement)(a,F):L(F)),b.createElement(f,{isIn:B,done:k,position:p,preventExitTransition:n,nodeRef:r},b.createElement("div",{id:D,onClick:l,className:$,...i,style:g,ref:r},b.createElement("div",{...B&&{role:_},className:E(m)?m({type:c}):y("Toastify__toast-body",m),style:v},null!=P&&b.createElement("div",{className:y("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},P),b.createElement("div",null,o)),V,b.createElement(N,{...T&&!H?{key:`pb-${T}`}:{},rtl:S,theme:R,delay:s,isRunning:t,isIn:B,closeToast:d,hide:u,type:c,style:I,className:w,controlledProgress:H,progress:C||0})))},M=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},P=_(M("bounce",!0)),j=(_(M("slide",!0)),_(M("zoom")),_(M("flip")),(0,b.forwardRef)((e,t)=>{let{getToastToRender:n,containerRef:r,isToastActive:i}=function(e){let[,t]=(0,b.useReducer)(e=>e+1,0),[n,r]=(0,b.useState)([]),i=(0,b.useRef)(null),a=(0,b.useRef)(new Map).current,o=e=>-1!==n.indexOf(e),s=(0,b.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:o,getToast:e=>a.get(e)}).current;function l(e){let{containerId:t}=e,{limit:n}=s.props;!n||t&&s.containerId!==t||(s.count-=s.queue.length,s.queue=[])}function c(e){r(t=>null==e?[]:t.filter(t=>t!==e))}function u(){let{toastContent:e,toastProps:t,staleId:n}=s.queue.shift();f(e,t,n)}function d(e,n){var r,o;let{delay:l,staleId:d,...p}=n;if(!T(e)||!i.current||s.props.enableMultiContainer&&p.containerId!==s.props.containerId||a.has(p.toastId)&&null==p.updateId)return;let{toastId:h,updateId:g,data:m}=p,{props:y}=s,_=()=>c(h),D=null==g;D&&s.count++;let O={...y,style:y.toastStyle,key:s.toastKey++,...Object.fromEntries(Object.entries(p).filter(e=>{let[t,n]=e;return null!=n})),toastId:h,updateId:g,data:m,closeToast:_,isIn:!1,className:I(p.className||y.toastClassName),bodyClassName:I(p.bodyClassName||y.bodyClassName),progressClassName:I(p.progressClassName||y.progressClassName),autoClose:!p.isLoading&&(r=p.autoClose,o=y.autoClose,!1===r||v(r)&&r>0?r:o),deleteToast(){let e=C(a.get(h),"removed");a.delete(h),S.emit(4,e);let n=s.queue.length;if(s.count=null==h?s.count-s.displayedToast:s.count-1,s.count<0&&(s.count=0),n>0){let e=null==h?s.props.limit:1;if(1===n||1===e)s.displayedToast++,u();else{let t=e>n?n:e;s.displayedToast=t;for(let e=0;e<t;e++)u()}}else t()}};O.iconOut=function(e){let{theme:t,type:n,isLoading:r,icon:i}=e,a=null,o={theme:t,type:n};return!1===i||(E(i)?a=i(o):(0,b.isValidElement)(i)?a=(0,b.cloneElement)(i,o):w(i)||v(i)?a=i:r?a=k.spinner():n in k&&(a=k[n](o))),a}(O),E(p.onOpen)&&(O.onOpen=p.onOpen),E(p.onClose)&&(O.onClose=p.onClose),O.closeButton=y.closeButton,!1===p.closeButton||T(p.closeButton)?O.closeButton=p.closeButton:!0===p.closeButton&&(O.closeButton=!T(y.closeButton)||y.closeButton);let A=e;(0,b.isValidElement)(e)&&!w(e.type)?A=(0,b.cloneElement)(e,{closeToast:_,toastProps:O,data:m}):E(e)&&(A=e({closeToast:_,toastProps:O,data:m})),y.limit&&y.limit>0&&s.count>y.limit&&D?s.queue.push({toastContent:A,toastProps:O,staleId:d}):v(l)?setTimeout(()=>{f(A,O,d)},l):f(A,O,d)}function f(e,t,n){let{toastId:i}=t;n&&a.delete(n);let o={content:e,props:t};a.set(i,o),r(e=>[...e,i].filter(e=>e!==n)),S.emit(4,C(o,null==o.props.updateId?"added":"updated"))}return(0,b.useEffect)(()=>(s.containerId=e.containerId,S.cancelEmit(3).on(0,d).on(1,e=>i.current&&c(e)).on(5,l).emit(2,s),()=>{a.clear(),S.emit(3,s)}),[]),(0,b.useEffect)(()=>{s.props=e,s.isToastActive=o,s.displayedToast=n.length}),{getToastToRender:function(t){let n=new Map,r=Array.from(a.values());return e.newestOnTop&&r.reverse(),r.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))},containerRef:i,isToastActive:o}}(e),{className:a,style:o,rtl:s,containerId:l}=e;return(0,b.useEffect)(()=>{t&&(t.current=r.current)},[]),b.createElement("div",{ref:r,className:"Toastify",id:l},n((e,t)=>{let n=t.length?{...o}:{...o,pointerEvents:"none"};return b.createElement("div",{className:function(e){let t=y("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":s});return E(a)?a({position:e,rtl:s,defaultClassName:t}):y(t,I(a))}(e),style:n,key:`container-${e}`},t.map((e,n)=>{let{content:r,props:a}=e;return b.createElement(B,{...a,isIn:i(a.toastId),style:{...a.style,"--nth":n+1,"--len":t.length},key:`toast-${a.key}`},r)}))}))}));j.displayName="ToastContainer",j.defaultProps={position:"top-right",transition:P,autoClose:5e3,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let R,x=new Map,$=[],H=1;function F(e,t){return x.size>0?S.emit(0,e,t):$.push({content:e,options:t}),t.toastId}function V(e,t){return{...t,type:t&&t.type||e,toastId:t&&(w(t.toastId)||v(t.toastId))?t.toastId:""+H++}}function z(e){return(t,n)=>F(t,V(e,n))}function K(e,t){return F(e,V("default",t))}K.loading=(e,t)=>F(e,V("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),K.promise=function(e,t,n){let r,{pending:i,error:a,success:o}=t;i&&(r=w(i)?K.loading(i,n):K.loading(i.render,{...n,...i}));let s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(e,t,i)=>{if(null==t)return void K.dismiss(r);let a={type:e,...s,...n,data:i},o=w(t)?{render:t}:t;return r?K.update(r,{...a,...o}):K(o.render,{...a,...o}),i},c=E(e)?e():e;return c.then(e=>l("success",o,e)).catch(e=>l("error",a,e)),c},K.success=z("success"),K.info=z("info"),K.error=z("error"),K.warning=z("warning"),K.warn=K.warning,K.dark=(e,t)=>F(e,V("default",{theme:"dark",...t})),K.dismiss=e=>{x.size>0?S.emit(1,e):$=$.filter(t=>null!=e&&t.options.toastId!==e)},K.clearWaitingQueue=function(e){return void 0===e&&(e={}),S.emit(5,e)},K.isActive=e=>{let t=!1;return x.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},K.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{let n=function(e,t){let{containerId:n}=t,r=x.get(n||R);return r&&r.getToast(e)}(e,t);if(n){let{props:r,content:i}=n,a={delay:100,...r,...t,toastId:t.toastId||e,updateId:""+H++};a.toastId!==e&&(a.staleId=e);let o=a.render||i;delete a.render,F(o,a)}},0)},K.done=e=>{K.update(e,{progress:1})},K.onChange=e=>(S.on(4,e),()=>{S.off(4,e)}),K.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},K.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},S.on(2,e=>{R=e.containerId||e,x.set(R,e),$.forEach(e=>{S.emit(0,e.content,e.options)}),$=[]}).on(3,e=>{x.delete(e.containerId||e),0===x.size&&S.off(0).off(1).off(5)});var W=n(3454);/**
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
 */let U=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):(64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},q=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){let a=e[n++],o=e[n++],s=e[n++],l=((7&i)<<18|(63&a)<<12|(63&o)<<6|63&s)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{let a=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&o)}}return t.join("")},G={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],a=t+1<e.length,o=a?e[t+1]:0,s=t+2<e.length,l=s?e[t+2]:0,c=i>>2,u=(3&i)<<4|o>>4,d=(15&o)<<2|l>>6,f=63&l;s||(f=64,a||(d=64)),r.push(n[c],n[u],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(U(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):q(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],a=t<e.length,o=a?n[e.charAt(t)]:0;++t;let s=t<e.length,l=s?n[e.charAt(t)]:64;++t;let c=t<e.length,u=c?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==l||null==u)throw new J;let d=i<<2|o>>4;if(r.push(d),64!==l){let e=o<<4&240|l>>2;if(r.push(e),64!==u){let e=l<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class J extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let Q=function(e){let t=U(e);return G.encodeByteArray(t,!0)},Y=function(e){return Q(e).replace(/\./g,"")},X=function(e){try{return G.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},Z=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,ee=()=>{if(void 0===W||void 0===W.env)return;let e=W.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},et=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&X(e[1]);return t&&JSON.parse(t)},en=()=>{try{return Z()||ee()||et()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},er=()=>{var e;return null===(e=en())||void 0===e?void 0:e.config};/**
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
 */class ei{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}function ea(){try{return"object"==typeof indexedDB}catch(e){return!1}}function eo(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class es extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,es.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,el.prototype.create)}}class el{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?i.replace(ec,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",o=`${this.serviceName}: ${a} (${r}).`,s=new es(r,o,n);return s}}let ec=/\{\$([^}]+)}/g;function eu(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let n=e[i],a=t[i];if(ed(n)&&ed(a)){if(!eu(n,a))return!1}else if(n!==a)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}function ed(e){return null!==e&&"object"==typeof e}/**
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
 */function ef(e){return e&&e._delegate?e._delegate:e}class ep{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */let eh="[DEFAULT]";/**
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
 */class eg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new ei;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:eh})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=eh){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=eh){return this.instances.has(e)}getOptions(e=eh){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);n===i&&t.resolve(r)}return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===eh?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=eh){return this.component?this.component.multipleInstances?e:eh:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class em{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new eg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */let eb=[];(u=p||(p={}))[u.DEBUG=0]="DEBUG",u[u.VERBOSE=1]="VERBOSE",u[u.INFO=2]="INFO",u[u.WARN=3]="WARN",u[u.ERROR=4]="ERROR",u[u.SILENT=5]="SILENT";let ey={debug:p.DEBUG,verbose:p.VERBOSE,info:p.INFO,warn:p.WARN,error:p.ERROR,silent:p.SILENT},ev=p.INFO,ew={[p.DEBUG]:"log",[p.VERBOSE]:"log",[p.INFO]:"info",[p.WARN]:"warn",[p.ERROR]:"error"},eE=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=ew[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)},eI=(e,t)=>t.some(t=>e instanceof t),eT=new WeakMap,e_=new WeakMap,eC=new WeakMap,eS=new WeakMap,eD=new WeakMap,ek={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return e_.get(e);if("objectStoreNames"===t)return e.objectStoreNames||eC.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return eO(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eO(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(eO(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{t instanceof IDBCursor&&eT.set(t,e)}).catch(()=>{}),eD.set(t,e),t}(e);if(eS.has(e))return eS.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(eA(this),e),eO(eT.get(this))}:function(...e){return eO(t.apply(eA(this),e))}:function(e,...n){let r=t.call(eA(this),e,...n);return eC.set(r,e.sort?e.sort():[e]),eO(r)}:(t instanceof IDBTransaction&&function(e){if(e_.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});e_.set(e,t)}(t),eI(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,ek):t;return n!==e&&(eS.set(e,n),eD.set(n,e)),n}let eA=e=>eD.get(e),eL=["get","getKey","getAll","getAllKeys","count"],eN=["put","add","delete","clear"],eB=new Map;function eM(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(eB.get(t))return eB.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=eN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eL.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?"readwrite":"readonly"),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return eB.set(t,a),a}ek={...l=ek,get:(e,t,n)=>eM(e,t)||l.get(e,t,n),has:(e,t)=>!!eM(e,t)||l.has(e,t)};/**
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
 */class eP{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let ej="@firebase/app",eR="0.9.12",ex=new class{constructor(e){this.name=e,this._logLevel=ev,this._logHandler=eE,this._userLogHandler=null,eb.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in p))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ey[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,p.DEBUG,...e),this._logHandler(this,p.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,p.VERBOSE,...e),this._logHandler(this,p.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,p.INFO,...e),this._logHandler(this,p.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,p.WARN,...e),this._logHandler(this,p.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,p.ERROR,...e),this._logHandler(this,p.ERROR,...e)}}("@firebase/app"),e$="[DEFAULT]",eH={[ej]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},eF=new Map,eV=new Map;function ez(e){let t=e.name;if(eV.has(t))return ex.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(eV.set(t,e),eF.values()))!function(e,t){try{e.container.addComponent(t)}catch(n){ex.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}(n,e);return!0}function eK(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}let eW=new el("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
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
 */class eU{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ep("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw eW.create("app-deleted",{appName:this._name})}}function eq(e,t={}){let n=e;if("object"!=typeof t){let e=t;t={name:e}}let r=Object.assign({name:e$,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw eW.create("bad-app-name",{appName:String(i)});if(n||(n=er()),!n)throw eW.create("no-options");let a=eF.get(i);if(a){if(eu(n,a.options)&&eu(r,a.config))return a;throw eW.create("duplicate-app",{appName:i})}let o=new em(i);for(let e of eV.values())o.addComponent(e);let s=new eU(n,r,o);return eF.set(i,s),s}function eG(e,t,n){var r;let i=null!==(r=eH[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);let a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){let e=[`Unable to register library "${i}" with version "${t}":`];a&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ex.warn(e.join(" "));return}ez(new ep(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let eJ="firebase-heartbeat-store",eQ=null;function eY(){return eQ||(eQ=(function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,1),s=eO(o);return r&&o.addEventListener("upgradeneeded",e=>{r(eO(o.result),e.oldVersion,e.newVersion,eO(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(eJ)}}).catch(e=>{throw eW.create("idb-open",{originalErrorMessage:e.message})})),eQ}async function eX(e){try{let t=await eY(),n=await t.transaction(eJ).objectStore(eJ).get(e0(e));return n}catch(e){if(e instanceof es)ex.warn(e.message);else{let t=eW.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});ex.warn(t.message)}}}async function eZ(e,t){try{let n=await eY(),r=n.transaction(eJ,"readwrite"),i=r.objectStore(eJ);await i.put(t,e0(e)),await r.done}catch(e){if(e instanceof es)ex.warn(e.message);else{let t=eW.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});ex.warn(t.message)}}}function e0(e){return`${e.name}!${e.options.appId}`}class e1{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new e4(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=e2();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=e2(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),e5(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),e5(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Y(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function e2(){let e=new Date;return e.toISOString().substring(0,10)}class e4{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!ea()&&eo().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await eX(this.app);return e||{heartbeats:[]}}}async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return eZ(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return eZ(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function e5(e){return Y(JSON.stringify({version:2,heartbeats:e})).length}ez(new ep("platform-logger",e=>new eP(e),"PRIVATE")),ez(new ep("heartbeat",e=>new e1(e),"PRIVATE")),eG(ej,eR,""),eG(ej,eR,"esm2017"),eG("fire-js",""),/**
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
 */eG("firebase","9.22.2","app");let e6=(e,t)=>t.some(t=>e instanceof t),e3=new WeakMap,e8=new WeakMap,e7=new WeakMap,e9=new WeakMap,te=new WeakMap,tt={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return e8.get(e);if("objectStoreNames"===t)return e.objectStoreNames||e7.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tn(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function tn(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(tn(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{t instanceof IDBCursor&&e3.set(t,e)}).catch(()=>{}),te.set(t,e),t}(e);if(e9.has(e))return e9.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(tr(this),e),tn(e3.get(this))}:function(...e){return tn(t.apply(tr(this),e))}:function(e,...n){let r=t.call(tr(this),e,...n);return e7.set(r,e.sort?e.sort():[e]),tn(r)}:(t instanceof IDBTransaction&&function(e){if(e8.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});e8.set(e,t)}(t),e6(t,a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,tt):t;return n!==e&&(e9.set(e,n),te.set(n,e)),n}let tr=e=>te.get(e);function ti(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=tn(o);return r&&o.addEventListener("upgradeneeded",e=>{r(tn(o.result),e.oldVersion,e.newVersion,tn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),s.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),s}function ta(e,{blocked:t}={}){let n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",()=>t()),tn(n).then(()=>void 0)}let to=["get","getKey","getAll","getAllKeys","count"],ts=["put","add","delete","clear"],tl=new Map;function tc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(tl.get(t))return tl.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=ts.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||to.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?"readwrite":"readonly"),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return tl.set(t,a),a}tt={...c=tt,get:(e,t,n)=>tc(e,t)||c.get(e,t,n),has:(e,t)=>!!tc(e,t)||c.has(e,t)};let tu="@firebase/installations",td="0.6.4",tf=`w:${td}`,tp="FIS_v2",th=new el("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function tg(e){return e instanceof es&&e.code.includes("request-failed")}/**
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
 */function tm({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function tb(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function ty(e,t){let n=await t.json(),r=n.error;return th.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function tv({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function tw(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
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
 */async function tE({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let r=tm(e),i=tv(e),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let o={fid:n,authVersion:tp,appId:e.appId,sdkVersion:tf},s={method:"POST",headers:i,body:JSON.stringify(o)},l=await tw(()=>fetch(r,s));if(l.ok){let e=await l.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:tb(e.authToken)};return t}throw await ty("Create Installation",l)}/**
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
 */function tI(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */let tT=/^[cdef][\w-]{21}$/;/**
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
 */function t_(e){return`${e.appName}!${e.appId}`}/**
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
 */let tC=new Map;function tS(e,t){let n=t_(e);tD(n,t),function(e,t){let n=(!tk&&"BroadcastChannel"in self&&((tk=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{tD(e.data.key,e.data.fid)}),tk);n&&n.postMessage({key:e,fid:t}),0===tC.size&&tk&&(tk.close(),tk=null)}(n,t)}function tD(e,t){let n=tC.get(e);if(n)for(let e of n)e(t)}let tk=null,tO="firebase-installations-store",tA=null;function tL(){return tA||(tA=ti("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(tO)}})),tA}async function tN(e,t){let n=t_(e),r=await tL(),i=r.transaction(tO,"readwrite"),a=i.objectStore(tO),o=await a.get(n);return await a.put(t,n),await i.done,o&&o.fid===t.fid||tS(e,t.fid),t}async function tB(e){let t=t_(e),n=await tL(),r=n.transaction(tO,"readwrite");await r.objectStore(tO).delete(t),await r.done}async function tM(e,t){let n=t_(e),r=await tL(),i=r.transaction(tO,"readwrite"),a=i.objectStore(tO),o=await a.get(n),s=t(o);return void 0===s?await a.delete(n):await a.put(s,n),await i.done,s&&(!o||o.fid!==s.fid)&&tS(e,s.fid),s}/**
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
 */async function tP(e){let t;let n=await tM(e.appConfig,n=>{let r=function(e){let t=e||{fid:function(){try{let e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;let n=function(e){let t=/**
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
 */function(e){let t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}(e);return t.substr(0,22)}(e);return tT.test(n)?n:""}catch(e){return""}}(),registrationStatus:0};return t$(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){let e=Promise.reject(th.create("app-offline"));return{installationEntry:t,registrationPromise:e}}let n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=tj(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:tR(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function tj(e,t){try{let n=await tE(e,t);return tN(e.appConfig,n)}catch(n){throw tg(n)&&409===n.customData.serverCode?await tB(e.appConfig):await tN(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function tR(e){let t=await tx(e.appConfig);for(;1===t.registrationStatus;)await tI(100),t=await tx(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:n}=await tP(e);return n||t}return t}function tx(e){return tM(e,e=>{if(!e)throw th.create("installation-not-found");return t$(e)})}function t$(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
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
 */async function tH({appConfig:e,heartbeatServiceProvider:t},n){let r=function(e,{fid:t}){return`${tm(e)}/${t}/authTokens:generate`}(e,n),i=function(e,{refreshToken:t}){let n=tv(e);return n.append("Authorization",`${tp} ${t}`),n}(e,n),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let o={installation:{sdkVersion:tf,appId:e.appId}},s={method:"POST",headers:i,body:JSON.stringify(o)},l=await tw(()=>fetch(r,s));if(l.ok){let e=await l.json(),t=tb(e);return t}throw await ty("Generate Auth Token",l)}/**
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
 */async function tF(e,t=!1){let n;let r=await tM(e.appConfig,r=>{var i;if(!tW(r))throw th.create("not-registered");let a=r.authToken;if(!t&&2===(i=a).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(i))return r;if(1===a.requestStatus)return n=tV(e,t),r;{if(!navigator.onLine)throw th.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=tK(e,t),t}}),i=n?await n:r.authToken;return i}async function tV(e,t){let n=await tz(e.appConfig);for(;1===n.authToken.requestStatus;)await tI(100),n=await tz(e.appConfig);let r=n.authToken;return 0===r.requestStatus?tF(e,t):r}function tz(e){return tM(e,e=>{if(!tW(e))throw th.create("not-registered");let t=e.authToken;return 1===t.requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function tK(e,t){try{let n=await tH(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await tN(e.appConfig,r),n}catch(n){if(tg(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))await tB(e.appConfig);else{let n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await tN(e.appConfig,n)}throw n}}function tW(e){return void 0!==e&&2===e.registrationStatus}/**
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
 */async function tU(e){let{installationEntry:t,registrationPromise:n}=await tP(e);return n?n.catch(console.error):tF(e).catch(console.error),t.fid}/**
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
 */async function tq(e,t=!1){await tG(e);let n=await tF(e,t);return n.token}async function tG(e){let{registrationPromise:t}=await tP(e);t&&await t}function tJ(e){return th.create("missing-app-config-values",{valueName:e})}/**
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
 */let tQ="installations",tY=e=>{let t=e.getProvider("app").getImmediate(),n=/**
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
 */function(e){if(!e||!e.options)throw tJ("App Configuration");if(!e.name)throw tJ("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw tJ(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),r=eK(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},tX=e=>{let t=e.getProvider("app").getImmediate(),n=eK(t,tQ).getImmediate();return{getId:()=>tU(n),getToken:e=>tq(n,e)}};ez(new ep(tQ,tY,"PUBLIC")),ez(new ep("installations-internal",tX,"PRIVATE")),eG(tu,td),eG(tu,td,"esm2017");let tZ="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",t0="google.c.a.c_id";/**
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
 */function t1(e){let t=new Uint8Array(e),n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}(d=h||(h={}))[d.DATA_MESSAGE=1]="DATA_MESSAGE",d[d.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION",(f=g||(g={})).PUSH_RECEIVED="push-received",f.NOTIFICATION_CLICKED="notification-clicked";/**
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
 */let t2="fcm_token_details_db",t4="fcm_token_object_Store";async function t5(e){if("databases"in indexedDB){let e=await indexedDB.databases(),t=e.map(e=>e.name);if(!t.includes(t2))return null}let t=null,n=await ti(t2,5,{upgrade:async(n,r,i,a)=>{var o;if(r<2||!n.objectStoreNames.contains(t4))return;let s=a.objectStore(t4),l=await s.index("fcmSenderId").get(e);if(await s.clear(),l){if(2===r){if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:null!==(o=l.createTime)&&void 0!==o?o:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:"string"==typeof l.vapidKey?l.vapidKey:t1(l.vapidKey)}}}else 3===r?t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:t1(l.auth),p256dh:t1(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:t1(l.vapidKey)}}:4===r&&(t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:t1(l.auth),p256dh:t1(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:t1(l.vapidKey)}})}}});return n.close(),await ta(t2),await ta("fcm_vapid_details_db"),await ta("undefined"),!function(e){if(!e||!e.subscriptionOptions)return!1;let{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?null:t}let t6="firebase-messaging-store",t3=null;function t8(){return t3||(t3=ti("firebase-messaging-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(t6)}})),t3}async function t7(e){let t=function({appConfig:e}){return e.appId}(e),n=await t8(),r=await n.transaction(t6).objectStore(t6).get(t);if(r)return r;{let t=await t5(e.appConfig.senderId);if(t)return await t9(e,t),t}}async function t9(e,t){let n=function({appConfig:e}){return e.appId}(e),r=await t8(),i=r.transaction(t6,"readwrite");return await i.objectStore(t6).put(t,n),await i.done,t}async function ne(e){let t=function({appConfig:e}){return e.appId}(e),n=await t8(),r=n.transaction(t6,"readwrite");await r.objectStore(t6).delete(t),await r.done}let nt=new el("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});/**
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
 */async function nn(e,t){let n;let r=await no(e),i=ns(t),a={method:"POST",headers:r,body:JSON.stringify(i)};try{let t=await fetch(na(e.appConfig),a);n=await t.json()}catch(e){throw nt.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(n.error){let e=n.error.message;throw nt.create("token-subscribe-failed",{errorInfo:e})}if(!n.token)throw nt.create("token-subscribe-no-token");return n.token}async function nr(e,t){let n;let r=await no(e),i=ns(t.subscriptionOptions),a={method:"PATCH",headers:r,body:JSON.stringify(i)};try{let r=await fetch(`${na(e.appConfig)}/${t.token}`,a);n=await r.json()}catch(e){throw nt.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(n.error){let e=n.error.message;throw nt.create("token-update-failed",{errorInfo:e})}if(!n.token)throw nt.create("token-update-no-token");return n.token}async function ni(e,t){let n=await no(e);try{let r=await fetch(`${na(e.appConfig)}/${t}`,{method:"DELETE",headers:n}),i=await r.json();if(i.error){let e=i.error.message;throw nt.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw nt.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function na({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}async function no({appConfig:e,installations:t}){let n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function ns({p256dh:e,auth:t,endpoint:n,vapidKey:r}){let i={web:{endpoint:n,auth:t,p256dh:e}};return r!==tZ&&(i.web.applicationPubKey=r),i}async function nl(e){let t=await nf(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:t1(t.getKey("auth")),p256dh:t1(t.getKey("p256dh"))},r=await t7(e.firebaseDependencies);if(!r)return nd(e.firebaseDependencies,n);if(function(e,t){let n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,a=t.p256dh===e.p256dh;return n&&r&&i&&a}(r.subscriptionOptions,n))return Date.now()>=r.createTime+6048e5?nu(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await ni(e.firebaseDependencies,r.token)}catch(e){console.warn(e)}return nd(e.firebaseDependencies,n)}async function nc(e){let t=await t7(e.firebaseDependencies);t&&(await ni(e.firebaseDependencies,t.token),await ne(e.firebaseDependencies));let n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function nu(e,t){try{let n=await nr(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await t9(e.firebaseDependencies,r),n}catch(t){throw await nc(e),t}}async function nd(e,t){let n=await nn(e,t),r={token:n,createTime:Date.now(),subscriptionOptions:t};return await t9(e,r),r.token}async function nf(e,t){let n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:function(e){let t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let e=0;e<r.length;++e)i[e]=r.charCodeAt(e);return i}(t)})}/**
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
 */function np(e){var t;let n={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};let n=t.notification.title;n&&(e.notification.title=n);let r=t.notification.body;r&&(e.notification.body=r);let i=t.notification.image;i&&(e.notification.image=i);let a=t.notification.icon;a&&(e.notification.icon=a)}(n,e),t=n,e.data&&(t.data=e.data),function(e,t){var n,r,i,a,o;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};let s=null!==(i=null===(r=t.fcmOptions)||void 0===r?void 0:r.link)&&void 0!==i?i:null===(a=t.notification)||void 0===a?void 0:a.click_action;s&&(e.fcmOptions.link=s);let l=null===(o=t.fcmOptions)||void 0===o?void 0:o.analytics_label;l&&(e.fcmOptions.analyticsLabel=l)}(n,e),n}function nh(e,t){let n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}function ng(e){return nt.create("missing-app-config-values",{valueName:e})}/**
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
 */nh("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),nh("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");/**
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
 */class nm{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;let r=/**
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
 */function(e){if(!e||!e.options)throw ng("App Configuration Object");if(!e.name)throw ng("App Name");let{options:t}=e;for(let e of["projectId","apiKey","appId","messagingSenderId"])if(!t[e])throw ng(e);return{appName:e.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:r,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}/**
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
 */async function nb(e){try{e.swRegistration=await navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}),e.swRegistration.update().catch(()=>{})}catch(e){throw nt.create("failed-service-worker-registration",{browserErrorMessage:null==e?void 0:e.message})}}/**
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
 */async function ny(e,t){if(t||e.swRegistration||await nb(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw nt.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function nv(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=tZ)}/**
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
 */async function nw(e,t){if(!navigator)throw nt.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw nt.create("permission-blocked");return await nv(e,null==t?void 0:t.vapidKey),await ny(e,null==t?void 0:t.serviceWorkerRegistration),nl(e)}/**
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
 */async function nE(e,t,n){let r=function(e){switch(e){case g.NOTIFICATION_CLICKED:return"notification_open";case g.PUSH_RECEIVED:return"notification_foreground";default:throw Error()}}(t),i=await e.firebaseDependencies.analyticsProvider.get();i.logEvent(r,{message_id:n[t0],message_name:n["google.c.a.c_l"],message_time:n["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}/**
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
 */async function nI(e,t){let n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===g.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler(np(n)):e.onMessageHandler.next(np(n)));let r=n.data;"object"==typeof r&&r&&t0 in r&&"1"===r["google.c.a.e"]&&await nE(e,n.messageType,r)}let nT="@firebase/messaging",n_="0.12.4",nC=e=>{let t=new nm(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",e=>nI(t,e)),t},nS=e=>{let t=e.getProvider("messaging").getImmediate();return{getToken:e=>nw(t,e)}};/**
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
 */async function nD(){try{await eo()}catch(e){return!1}return"undefined"!=typeof window&&ea()&&"undefined"!=typeof navigator&&!!navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function nk(e=function(e=e$){let t=eF.get(e);if(!t&&e===e$&&er())return eq();if(!t)throw eW.create("no-app",{appName:e});return t}()){return nD().then(e=>{if(!e)throw nt.create("unsupported-browser")},e=>{throw nt.create("indexed-db-unsupported")}),eK(ef(e),"messaging").getImmediate()}async function nO(e,t){return nw(e=ef(e),t)}ez(new ep("messaging",nC,"PUBLIC")),ez(new ep("messaging-internal",nS,"PRIVATE")),eG(nT,n_),eG(nT,n_,"esm2017");let nA={apiKey:"AIzaSyAkfHBzGYQcUZL0S76E3TukmzFuzCidge4",authDomain:"koolyard-84a4a.firebaseapp.com",projectId:"koolyard-84a4a",storageBucket:"koolyard-84a4a.appspot.com",messagingSenderId:"669707854180",appId:"1:669707854180:web:8a5e8aa2dd09025df95a71",measurementId:"G-PG9PCKGMHY"},nL=()=>{let e=nk();return nO(e,{vapidKey:"BKsc3xU_8UlCKISztvYhJHM94W0aJfqVB2DqSgXUCkKAf42PT-t4UGBam2UbT7xTLojKwagmZncErhko2TTz49c"}).then(e=>{e?console.log("current token for client: ",e):console.log("No registration token available. Request permission to generate one.")}).catch(e=>{console.log("An error occurred while retrieving token. ",e)})},nN=()=>new Promise(e=>{var t,n;let r=nk();t=r,n=t=>{e(t)},/**
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
 */function(e,t){if(!navigator)throw nt.create("only-available-in-window");e.onMessageHandler=t,()=>{e.onMessageHandler=null}}(t=ef(t),n)});var nB=function(e){let{children:t}=e,[n,r]=(0,b.useState)({title:"",body:""}),i=()=>K((0,m.jsx)(a,{}));function a(){return(0,m.jsxs)("div",{children:[(0,m.jsxs)("p",{children:[(0,m.jsx)("b",{children:"RODD"}),(0,m.jsx)("b",{children:null==n?void 0:n.title})]}),(0,m.jsx)("p",{children:null==n?void 0:n.body})]})}return(0,b.useEffect)(()=>{console.log("here"),void 0!==window&&(s=eq(nA),nL())},[]),(0,b.useEffect)(()=>{(null==n?void 0:n.title)&&i()},[n]),s&&nN().then(e=>{var t,n;r({title:null==e?void 0:null===(t=e.notification)||void 0===t?void 0:t.title,body:null==e?void 0:null===(n=e.notification)||void 0===n?void 0:n.body})}).catch(e=>console.log("failed: ",e)),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(j,{}),t]})};function nM(e){let{Component:t,pageProps:n}=e,r=t.getLayout||(e=>e);return(0,m.jsx)(nB,{children:r((0,m.jsx)(t,{...n}))})}n(3814),n(1399)},1399:function(){},3814:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l=[],c=!1,u=-1;function d(){c&&r&&(c=!1,r.length?l=r.concat(l):u=-1,l.length&&f())}function f(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(r=l,l=[];++u<t;)r&&r[u].run();u=-1,t=l.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||c||s(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}},o=!0;try{t[e](a,a.exports,r),o=!1}finally{o&&delete n[e]}return a.exports}r.ab="//";var i=r(229);e.exports=i}()}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);