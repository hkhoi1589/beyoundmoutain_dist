(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8454],{7352:function(e,t,s){Promise.resolve().then(s.bind(s,2876))},2876:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var r=s(7437);s(7217);var n=s(4033),o=s(1865),a=s(8625),i=s(2265);function d(){let e=(0,n.useRouter)(),{access:t}=(0,a.LM)();(0,i.useEffect)(()=>{if(t)return e.push("/forum")},[t]);let{register:s,handleSubmit:d,formState:{errors:l},watch:u}=(0,o.cI)(),c=(0,i.useRef)({});c.current=u("password","");let f=async t=>{let s={};s&&!s.errors&&e.push("/auth/login")};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("form",{onSubmit:d(f),className:"max-w-xl bg-base-100 mx-auto mt-12 rounded-lg overflow-hidden p-12 sm:py-20 sm:px-24 space-y-6",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold text-center",children:"Join HIGH Schoozl community"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-lg",children:"Get more features and priviliges by joining to the most helpful community"}),(0,r.jsxs)("div",{className:"form-input",children:[(0,r.jsx)("input",{...s("email",{required:"This field is required"}),type:"text",placeholder:" "}),(0,r.jsx)("label",{for:"email",children:"Email"})]}),l.email&&(0,r.jsx)("div",{className:"text-error",children:l.email.message})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"form-input",children:[(0,r.jsx)("input",{...s("password",{required:"You must specify a password",minLength:{value:8,message:"Password must have at least 8 characters"}}),type:"password",placeholder:" "}),(0,r.jsx)("label",{for:"password",children:"Password"})]}),l.password&&(0,r.jsx)("div",{className:"text-error",children:l.password.message})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"form-input",children:[(0,r.jsx)("input",{...s("repeatPassword",{required:"This field is required",validate:e=>e===c.current||"The passwords do not match"}),type:"password",placeholder:" "}),(0,r.jsx)("label",{for:"repeat-password",children:"Repeat password"})]}),l.repeatPassword&&(0,r.jsx)("div",{className:"text-error",children:l.repeatPassword.message})]}),(0,r.jsx)("button",{className:"btn btn-primary w-full",children:"Register"})]})})}},8625:function(e,t,s){"use strict";s.d(t,{qr:function(){return a},t_:function(){return u},ww:function(){return c},sK:function(){return d},NV:function(){return l},LM:function(){return i}});var r=s(4660),n=s(4810),o=s(5039);let a=(0,r.Ue)((0,n.tJ)((e,t)=>({dark:!1,toggleDark:()=>e({dark:!t().dark}),sidebar:!1,toggleSidebar:()=>e({sidebar:!t().sidebar}),open:!1,openRequestModal:t=>e({open:t})}),{name:"forumApp",storage:(0,n.FL)(()=>o.Z)})),i=(0,r.Ue)((0,n.tJ)((e,t)=>({access:null,refresh:null,profile:{},friendsRequests:[],setAccess:t=>e(()=>({access:t})),setRefresh:t=>e(()=>({refresh:t})),setProfile:t=>e(()=>({profile:t})),setFriendRequests:t=>e(()=>({friendsRequests:t}))}),{name:"forumUser",storage:(0,n.FL)(()=>o.Z)})),d=(0,r.Ue)((0,n.tJ)((e,t)=>({noties:[],fcmToken:"",setFCMToken:t=>e(()=>({fcmToken:t})),setNoti:t=>e(()=>({noties:t})),addNoti:t=>e(e=>{var s,r,n;return{noties:[{link:"/",img:null==t?void 0:null===(s=t.notification)||void 0===s?void 0:s.image,title:null==t?void 0:null===(r=t.notification)||void 0===r?void 0:r.title,body:null==t?void 0:null===(n=t.notification)||void 0===n?void 0:n.body,isSeen:!1},...e.noties]}})}),{name:"forumNoti",storage:(0,n.FL)(()=>o.Z),onRehydrateStorage:e=>{o.Z.getItem("forumNoti").then(t=>{let s=JSON.parse(t),{noties:r,fcmToken:n}=null==s?void 0:s.state;t?(e.setNoti(r),e.setFCMToken(n)):(e.setNoti([]),e.setFCMToken(""))}).catch(e=>{})}})),l=(0,r.Ue)((e,t)=>({dataPosts:[],dataPinPosts:[],loadingAdd:!1,errorAdd:"",loadingAddChannel:!1,errorAddChannel:"",setDataPosts:t=>e(()=>({dataPosts:t})),setDataPinPosts:t=>e(()=>({dataPinPosts:t})),setLoadingAdd:t=>e(()=>({loadingAdd:t})),setErrorAdd:t=>e(()=>({errorAdd:t})),setLoadingAddChannel:t=>e(()=>({loadingAddChannel:t})),setErrorAddChannel:t=>e(()=>({errorAddChannel:t}))})),u=(0,r.Ue)((e,t)=>({dataChannels:[],loadingAdd:!1,errorAdd:"",setDataChannels:t=>e(()=>({dataChannels:t})),setLoadingAdd:t=>e(()=>({loadingAdd:t})),setErrorAdd:t=>e(()=>({errorAdd:t}))})),c=(0,r.Ue)((e,t)=>({dataComments:[],loadingAdd:!1,errorAdd:"",setDataComments:t=>e(()=>({dataComments:t})),setLoadingAdd:t=>e(()=>({loadingAdd:t})),setErrorAdd:t=>e(()=>({errorAdd:t}))}))},5039:function(e,t,s){"use strict";var r=s(5484);t.Z={getItem:async e=>(0,r.U2)(e).then(e=>e).catch(e=>{}),setItem:async(e,t)=>{await (0,r.t8)(e,t)},removeItem:async e=>{await (0,r.IV)(e)}}},7217:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var r=s(5039);async function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o={method:t?String(t||"").toUpperCase():"GET"};"GET"!==o.method&&(s.files?o.body=s.files:o.body=JSON.stringify(s||{})),o.headers={"Content-Type":"application/json",...n},s.files&&delete o.headers["Content-Type"];let a=await r.Z.getItem("forumUser");if(a){var i;let e=JSON.parse(a),t=null==e?void 0:null===(i=e.state)||void 0===i?void 0:i.access;t&&(o.headers.Authorization="Bearer ".concat(t))}return fetch(e,o).then(e=>(403===e.status?window&&(window.location.href="/error/403/"):404===e.status?window&&(window.location.href="/error/404/"):401===e.status&&r.Z.removeItem("forumUser"),e.json()))}},1853:function(e,t,s){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=s(2265),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,a=r.useEffect,i=r.useLayoutEffect,d=r.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!n(e,s)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var s=t(),r=o({inst:{value:s,getSnapshot:t}}),n=r[0].inst,u=r[1];return i(function(){n.value=s,n.getSnapshot=t,l(n)&&u({inst:n})},[e,s,t]),a(function(){return l(n)&&u({inst:n}),e(function(){l(n)&&u({inst:n})})},[e]),d(s),s};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:u},6272:function(e,t,s){"use strict";e.exports=s(1853)}},function(e){e.O(0,[5166,4338,2971,596,1744],function(){return e(e.s=7352)}),_N_E=e.O()}]);