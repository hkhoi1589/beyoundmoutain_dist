(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4494],{4885:function(e,t,n){Promise.resolve().then(n.t.bind(n,6685,23)),Promise.resolve().then(n.bind(n,6383))},6383:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(2265);let o=e=>e,c={some:0,all:1};var u=e=>{let{children:t,className:n,isInviewState:{trueState:u="",falseState:s=""}}=e,l=(0,r.useRef)(null),i=function(e,{root:t,margin:n,amount:u,once:s=!1}={}){let[l,i]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!e.current||s&&l)return;let r={root:t&&t.current||void 0,margin:n,amount:u};return function(e,t,{root:n,margin:r,amount:u="some"}={}){let s=function(e,t,n){var r;if("string"==typeof e){let c=document;t&&(o(!!t.current,"Scope provided, but no element detected."),c=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=c.querySelectorAll(e)),e=n[e]):e=c.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e),l=new WeakMap,i=new IntersectionObserver(e=>{e.forEach(e=>{let n=l.get(e.target);if(!!n!==e.isIntersecting){if(e.isIntersecting){let n=t(e);"function"==typeof n?l.set(e.target,n):i.unobserve(e.target)}else n&&(n(e),l.delete(e.target))}})},{root:n,rootMargin:r,threshold:"number"==typeof u?u:c[u]});return s.forEach(e=>i.observe(e)),()=>i.disconnect()}(e.current,()=>(i(!0),s?void 0:()=>i(!1)),r)},[t,e,n,s]),l}(l,{once:!0});return(0,r.cloneElement)(t,{ref:l,className:"".concat(t.props.className||""," ").concat(n||""," ").concat(i?u:s)})}}},function(e){e.O(0,[6685,2971,596,1744],function(){return e(e.s=4885)}),_N_E=e.O()}]);