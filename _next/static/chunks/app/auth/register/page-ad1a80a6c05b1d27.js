(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8454],{1501:function(e,t,s){Promise.resolve().then(s.bind(s,4164))},4164:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return l}});var r=s(9268);s(5577);var o=s(6008),a=s(9700),n=s(4461),i=s(6006);function l(){let e=(0,o.useRouter)(),{access:t}=(0,n.LM)();(0,i.useEffect)(()=>{if(t)return e.push("/forum")},[t]);let{register:s,handleSubmit:l,formState:{errors:d},watch:c}=(0,a.cI)(),u=(0,i.useRef)({});u.current=c("password","");let p=async t=>{let s={};s&&!s.errors&&e.push("/auth/login")};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("form",{onSubmit:l(p),className:"max-w-xl bg-base-100 mx-auto mt-12 rounded-lg overflow-hidden p-12 sm:py-20 sm:px-24 space-y-6",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold text-center",children:"Join HIGH Schoozl community"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-lg",children:"Get more features and priviliges by joining to the most helpful community"}),(0,r.jsxs)("div",{className:"form-input",children:[(0,r.jsx)("input",{...s("email",{required:"This field is required"}),type:"text",placeholder:" "}),(0,r.jsx)("label",{for:"email",children:"Email"})]}),d.email&&(0,r.jsx)("div",{className:"text-error",children:d.email.message})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"form-input",children:[(0,r.jsx)("input",{...s("password",{required:"You must specify a password",minLength:{value:8,message:"Password must have at least 8 characters"}}),type:"password",placeholder:" "}),(0,r.jsx)("label",{for:"password",children:"Password"})]}),d.password&&(0,r.jsx)("div",{className:"text-error",children:d.password.message})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"form-input",children:[(0,r.jsx)("input",{...s("repeatPassword",{required:"This field is required",validate:e=>e===u.current||"The passwords do not match"}),type:"password",placeholder:" "}),(0,r.jsx)("label",{for:"repeat-password",children:"Repeat password"})]}),d.repeatPassword&&(0,r.jsx)("div",{className:"text-error",children:d.repeatPassword.message})]}),(0,r.jsx)("button",{className:"btn btn-primary w-full",children:"Register"})]})})}},6137:function(e,t,s){"use strict";var r=s(5577),o=s(730);t.Z={ListPost:e=>{let t="".concat("https://jsonserver-i5n0.onrender.com","/posts_list?_page=").concat(e,"&_limit=6"),{data:s,error:a,isLoading:n}=(0,o.ZP)(t,r.Z);return{posts:s,isLoading:n,isError:a}},GetDetailPost:e=>{let t="".concat("https://jsonserver-i5n0.onrender.com","/posts/").concat(e),{data:s,error:a,isLoading:n}=(0,o.ZP)(t,r.Z);return{post:s,isLoading:n,isError:a}},TotalPost:()=>(0,r.Z)("".concat("https://jsonserver-i5n0.onrender.com","/stats"))}},4461:function(e,t,s){"use strict";s.d(t,{qr:function(){return n},sK:function(){return l},LM:function(){return i}});var r=s(2561),o=s(4475),a=s(4328);let n=(0,r.Ue)((0,o.tJ)((e,t)=>({dark:!1,toggleDark:()=>e({dark:!t().dark}),sidebar:!1,toggleSidebar:()=>e({sidebar:!t().sidebar}),open:!1,openRequestModal:t=>e({open:t})}),{name:"forumApp",storage:(0,o.FL)(()=>a.Z)})),i=(0,r.Ue)((0,o.tJ)((e,t)=>({access:null,refresh:null,profile:{},setAccess:t=>e(()=>({access:t})),setRefresh:t=>e(()=>({refresh:t})),setProfile:t=>e(()=>({profile:t}))}),{name:"forumUser",storage:(0,o.FL)(()=>a.Z),onRehydrateStorage:e=>{a.Z.getItem("forumUser").then(t=>{t?e.setNoti(JSON.parse(t)):e.setNoti(JSON.parse([]))}).catch(e=>{})}})),l=(0,r.Ue)((0,o.tJ)((e,t)=>({noties:[],setNoti:t=>e(()=>({noties:t})),addNoti:t=>e(e=>{var s,r,o;return{noties:[{link:"/student",img:(null==t?void 0:null===(s=t.notification)||void 0===s?void 0:s.image)||"/avatar/kimthiendung.jpg",title:null==t?void 0:null===(r=t.notification)||void 0===r?void 0:r.title,body:null==t?void 0:null===(o=t.notification)||void 0===o?void 0:o.body,isSeen:!1},...e.noties]}})}),{name:"forumNoti",storage:(0,o.FL)(()=>a.Z),onRehydrateStorage:e=>{a.Z.getItem("forumNoti").then(t=>{t?e.setNoti(JSON.parse(t)):e.setNoti(JSON.parse([]))}).catch(e=>{})}}));var d=s(6137);(0,r.Ue)((e,t)=>({loading:!1,error:"",page:1,data:[],postsCount:0,setPage:t=>e(()=>({page:t})),fetchPostListPage:async t=>{try{e({loading:!0,page:t});let s=d.Z.ListPost(t,6),r=await d.Z.TotalPost();e({loading:!1,data:s,postsCount:r.postsCount})}catch(t){e({loading:!1,error:t})}}}))},4328:function(e,t,s){"use strict";var r=s(2486);t.Z={getItem:async e=>(0,r.U2)(e).then(e=>e).catch(e=>{}),setItem:async(e,t)=>{await (0,r.t8)(e,t)},removeItem:async e=>{await (0,r.IV)(e)}}},5577:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var r=s(4328);async function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a={method:t?String(t||"").toUpperCase():"GET"};"GET"!==a.method&&(s.files?a.body=s.files:a.body=JSON.stringify(s||{})),a.headers={"Content-Type":"application/json",...o},s.files&&delete a.headers["Content-Type"];let n=await r.Z.getItem("forumUser");if(n){var i;let e=JSON.parse(n),t=null==e?void 0:null===(i=e.state)||void 0===i?void 0:i.access;t&&(a.headers.Authorization="Bearer ".concat(t))}return fetch(e,a).then(e=>e.json())}}},function(e){e.O(0,[4753,730,5265,9253,7698,1744],function(){return e(e.s=1501)}),_N_E=e.O()}]);