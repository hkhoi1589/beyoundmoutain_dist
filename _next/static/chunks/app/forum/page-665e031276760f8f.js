(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3575],{9035:function(e,t,n){Promise.resolve().then(n.bind(n,9520))},9520:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var l=n(9268),r=n(1412),a=n(1375),s=n(5952),o=n.n(s),u=n(6008);let c=o()(()=>Promise.all([n.e(730),n.e(5748),n.e(4e3)]).then(n.bind(n,5869)),{loadableGenerated:{webpack:()=>[5869]},ssr:!1}),i=o()(()=>n.e(5145).then(n.bind(n,5145)),{loadableGenerated:{webpack:()=>[5145]},ssr:!1}),f=o()(()=>Promise.all([n.e(6228),n.e(9764),n.e(8211),n.e(3808),n.e(6990),n.e(7113)]).then(n.bind(n,6990)),{loadableGenerated:{webpack:()=>[6990]},ssr:!1});function d(){let e=(0,u.usePathname)(),t=[{label:"posts",href:"/forum/posts",active:e.match(/\/forum\/posts/)},{label:"channels",href:"/forum",active:"/forum"===e},{label:"you",href:"/forum/you/your-posts",active:e.match(/\/forum\/you\/(profile|your-posts|your-channels|friends-list)/g)}];return(0,l.jsxs)("div",{className:"relative flex-1 text-xs overflow-y-auto",children:[(0,l.jsx)(a.Z,{className:"pb-0"}),(0,l.jsx)("div",{className:"w-full overflow-y-auto",children:(0,l.jsxs)("div",{className:"container mx-auto p-4",children:[(0,l.jsxs)("div",{className:"flex flex-col lg:flex-row justify-between mb-4",children:[(0,l.jsx)(r.Z,{items:t}),(0,l.jsxs)("div",{className:"flex flex-col justify-end sm:flex-row",children:[(0,l.jsx)(i,{className:"mr-0 sm:mr-4 mb-4 sm:mb-0"}),(0,l.jsx)(f,{})]})]}),(0,l.jsx)(c,{})]})})]})}},1412:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var l=n(9268),r=n(5846),a=n.n(r);function s(e){let{className:t="",items:n}=e;return(0,l.jsx)("div",{className:"space-x-4 mb-4 flex justify-between sm:justify-normal ".concat(t),children:n.map((e,t)=>(0,l.jsx)(a(),{href:e.href,className:"btn btn-sm ".concat(!e.active&&"btn-outline"),children:e.label},"tab_badge-".concat(t)))})}n(6006)},1375:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var l=n(9268);function r(e){let{className:t=""}=e;return(0,l.jsx)("div",{className:"container mx-auto p-4 block md:hidden ".concat(t),children:(0,l.jsxs)("div",{className:"relative w-full",children:[(0,l.jsx)("button",{className:"btn btn-sm btn-ghost btn-circle absolute top-2 left-2",children:(0,l.jsx)("i",{className:"ri-search-line text-xl opacity-80"})}),(0,l.jsx)("input",{className:"w-full input border-base-300/80 rounded-full pl-10",placeholder:"Search"})]})})}},5952:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let l=n(6927);n(6006);let r=l._(n(6353));function a(e){return{default:(null==e?void 0:e.default)||e}}function s(e,t){let n=r.default,l={loading:e=>{let{error:t,isLoading:n,pastDelay:l}=e;return null}};"function"==typeof e&&(l.loader=e),Object.assign(l,t);let s=l.loader;return n({...l,loader:()=>null!=s?s().then(a):Promise.resolve(a(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},761:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{suspense:function(){return r},NoSSR:function(){return a}}),n(6927),n(6006);let l=n(8687);function r(){let e=Error(l.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=l.NEXT_DYNAMIC_NO_SSR_CODE,e}function a(e){let{children:t}=e;return t}},6353:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let l=n(6927),r=l._(n(6006)),a=n(761),s=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function n(e){let n=t.loading,l=r.default.createElement(n,{isLoading:!0,pastDelay:!0,error:null}),s=t.ssr?r.default.Fragment:a.NoSSR,o=t.lazy;return r.default.createElement(r.default.Suspense,{fallback:l},r.default.createElement(s,null,r.default.createElement(o,e)))}return t.lazy=r.default.lazy(t.loader),n.displayName="LoadableComponent",n}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=n(6006),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var l,a={},c=null,i=null;for(l in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(i=t.ref),t)s.call(t,l)&&!u.hasOwnProperty(l)&&(a[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===a[l]&&(a[l]=t[l]);return{$$typeof:r,type:e,key:c,ref:i,props:a,_owner:o.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},9268:function(e,t,n){"use strict";e.exports=n(3177)},5846:function(e,t,n){e.exports=n(7095)},6008:function(e,t,n){e.exports=n(4e3)}},function(e){e.O(0,[7095,9253,7698,1744],function(){return e(e.s=9035)}),_N_E=e.O()}]);