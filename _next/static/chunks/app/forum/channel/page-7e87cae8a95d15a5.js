(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1162],{8632:function(e,t,n){Promise.resolve().then(n.bind(n,4306))},4306:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var l=n(7437);n(2265);var r=n(1104),a=n(8673),o=n(8864),u=n.n(o),s=n(4033);let c=u()(()=>Promise.all([n.e(713),n.e(3222),n.e(8629),n.e(701)]).then(n.bind(n,701)),{loadableGenerated:{webpack:()=>[701]},ssr:!1}),i=u()(()=>Promise.all([n.e(2172),n.e(3572),n.e(2010),n.e(7384),n.e(1932),n.e(4897)]).then(n.bind(n,1932)),{loadableGenerated:{webpack:()=>[1932]},ssr:!1});function f(){let e=(0,s.useSearchParams)();e.get("channelId");let t=(0,s.usePathname)(),n=[{label:"posts",href:"/forum/posts",active:t.match(/\/forum\/posts/)},{label:"channels",href:"/forum",active:"/forum"===t},{label:"you",href:"/forum/you/your-posts",active:t.match(/\/forum\/you\/(profile|your-posts|your-channels|friends-list)/g)}];return(0,l.jsxs)("main",{className:"relative flex-1 text-xs overflow-y-auto",children:[(0,l.jsx)(a.Z,{className:"pb-0"}),(0,l.jsx)("div",{className:"w-full overflow-y-auto",children:(0,l.jsxs)("div",{className:"container mx-auto p-4",children:[(0,l.jsxs)("div",{className:"flex flex-col sm:flex-row justify-between mb-4",children:[(0,l.jsx)(r.Z,{items:n}),(0,l.jsx)(i,{})]}),(0,l.jsx)(c,{})]})})]})}},1104:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var l=n(7437),r=n(1396),a=n.n(r);function o(e){let{className:t="",items:n}=e;return(0,l.jsx)("div",{className:"space-x-4 mb-4 flex justify-between sm:justify-normal ".concat(t),children:n.map((e,t)=>(0,l.jsx)(a(),{href:e.href,className:"btn btn-sm ".concat(!e.active&&"btn-outline"),children:e.label},"tab_badge-".concat(t)))})}n(2265)},8673:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var l=n(7437);function r(e){let{className:t=""}=e;return(0,l.jsx)("div",{className:"container mx-auto p-4 block md:hidden ".concat(t),children:(0,l.jsxs)("div",{className:"relative w-full",children:[(0,l.jsx)("button",{className:"btn btn-sm btn-ghost btn-circle absolute top-2 left-2",children:(0,l.jsx)("i",{className:"ri-search-line text-xl opacity-80"})}),(0,l.jsx)("input",{className:"w-full input border-base-300/80 rounded-full pl-10",placeholder:"Search"})]})})}},8864:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let l=n(1024);n(2265);let r=l._(n(533));function a(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){let n=r.default,l={loading:e=>{let{error:t,isLoading:n,pastDelay:l}=e;return null}};"function"==typeof e&&(l.loader=e),Object.assign(l,t);let o=l.loader;return n({...l,loader:()=>null!=o?o().then(a):Promise.resolve(a(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3699:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{suspense:function(){return r},NoSSR:function(){return a}}),n(1024),n(2265);let l=n(7669);function r(){let e=Error(l.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=l.NEXT_DYNAMIC_NO_SSR_CODE,e}function a(e){let{children:t}=e;return t}},533:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let l=n(1024),r=l._(n(2265)),a=n(3699),o=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function n(e){let n=t.loading,l=r.default.createElement(n,{isLoading:!0,pastDelay:!0,error:null}),o=t.ssr?r.default.Fragment:a.NoSSR,u=t.lazy;return r.default.createElement(r.default.Suspense,{fallback:l},r.default.createElement(o,null,r.default.createElement(u,e)))}return t.lazy=r.default.lazy(t.loader),n.displayName="LoadableComponent",n}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=n(2265),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,u=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var l,a={},c=null,i=null;for(l in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(i=t.ref),t)o.call(t,l)&&!s.hasOwnProperty(l)&&(a[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===a[l]&&(a[l]=t[l]);return{$$typeof:r,type:e,key:c,ref:i,props:a,_owner:u.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},7437:function(e,t,n){"use strict";e.exports=n(622)},1396:function(e,t,n){e.exports=n(6685)},4033:function(e,t,n){e.exports=n(8165)}},function(e){e.O(0,[6685,2971,596,1744],function(){return e(e.s=8632)}),_N_E=e.O()}]);