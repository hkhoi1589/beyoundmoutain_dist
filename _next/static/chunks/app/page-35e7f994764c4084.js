(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{8535:function(e,t,r){Promise.resolve().then(r.t.bind(r,6685,23)),Promise.resolve().then(r.bind(r,7857)),Promise.resolve().then(r.bind(r,6383))},7857:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(7437);function o(e){let{className:t=""}=e;try{let e=document.body;e.addEventListener("mousemove",function(e){r(e,"#paral-1",1.2),r(e,"#paral-2",-.5),r(e,"#paral-3",-1.2)})}catch(e){}function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#paral-1",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.3,n=e.clientX*r/8,o=e.clientY*r/8,l=document.querySelector(t);l&&l.style&&(l.style.transform="translate(".concat(n,"px, ").concat(o,"px)"))}return(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"fixed inset-0 blur-[86px] flex items-center justify-center",children:[(0,n.jsx)("div",{id:"paral-1",className:"bg-orange-500 opacity-50 w-56 h-56 rounded-full",style:{transform:"translate3d(0px, 60px, 0px)"}}),(0,n.jsx)("div",{id:"paral-2",className:"bg-pink-500 opacity-50 w-96 h-96 rounded-full will-change-transform transform-gpu",style:{transform:"translate3d(0px, 0px, 0px)"}}),(0,n.jsx)("div",{id:"paral-3",className:"bg-teal-500 opacity-50 w-72 h-72 rounded-full",style:{transform:"translate3d(0px, -60px, 0px)"}})]})})}},6383:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(2265);let o=e=>e,l={some:0,all:1};var s=e=>{let{children:t,className:r,isInviewState:{trueState:s="",falseState:a=""}}=e,c=(0,n.useRef)(null),i=function(e,{root:t,margin:r,amount:s,once:a=!1}={}){let[c,i]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if(!e.current||a&&c)return;let n={root:t&&t.current||void 0,margin:r,amount:s};return function(e,t,{root:r,margin:n,amount:s="some"}={}){let a=function(e,t,r){var n;if("string"==typeof e){let l=document;t&&(o(!!t.current,"Scope provided, but no element detected."),l=t.current),r?(null!==(n=r[e])&&void 0!==n||(r[e]=l.querySelectorAll(e)),e=r[e]):e=l.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e),c=new WeakMap,i=new IntersectionObserver(e=>{e.forEach(e=>{let r=c.get(e.target);if(!!r!==e.isIntersecting){if(e.isIntersecting){let r=t(e);"function"==typeof r?c.set(e.target,r):i.unobserve(e.target)}else r&&(r(e),c.delete(e.target))}})},{root:r,rootMargin:n,threshold:"number"==typeof s?s:l[s]});return a.forEach(e=>i.observe(e)),()=>i.disconnect()}(e.current,()=>(i(!0),a?void 0:()=>i(!1)),n)},[t,e,r,a]),c}(c,{once:!0});return(0,n.cloneElement)(t,{ref:c,className:"".concat(t.props.className||""," ").concat(r||""," ").concat(i?s:a)})}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,l={},i=null,u=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:o,type:e,key:i,ref:u,props:l,_owner:a.current}}t.Fragment=l,t.jsx=i,t.jsxs=i},7437:function(e,t,r){"use strict";e.exports=r(622)}},function(e){e.O(0,[6685,2971,596,1744],function(){return e(e.s=8535)}),_N_E=e.O()}]);