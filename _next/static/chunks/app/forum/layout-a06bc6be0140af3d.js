(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4589],{6740:function(e,t,s){Promise.resolve().then(s.t.bind(s,761,23)),Promise.resolve().then(s.bind(s,474)),Promise.resolve().then(s.bind(s,7949)),Promise.resolve().then(s.bind(s,2123)),Promise.resolve().then(s.bind(s,4793)),Promise.resolve().then(s.t.bind(s,2657,23))},4793:function(e,t,s){"use strict";let n,a;s.r(t),s.d(t,{default:function(){return u}});var o=s(9268),i=s(4461),r=s(6006),l=s(474),c=s(4328),d=s(1313),h=s(1362);h.Gb&&(n=0===(0,d.C6)().length?(0,d.ZF)({apiKey:"AIzaSyD1KuEyGhDPD-fZ8zABZCqQwhFKWIvB0SE",authDomain:"koolyard-a7d0e.firebaseapp.com",projectId:"koolyard-a7d0e",storageBucket:"koolyard-a7d0e.appspot.com",messagingSenderId:"605848801648",appId:"1:605848801648:web:c48808d1f960b00d223fb5",measurementId:"G-J25HN3JGSE"}):(0,d.C6)()[0],a=(0,h.KL)(n));let m={init:async function(){try{let e=await c.Z.getItem("fcm_token");if(e)return e;let t=await (0,h.LP)(a,{vapidKey:"BCHyWU_hZHoBYlca-pQmtlIhFRFzMjd9TM0jOFlTFqOQUh2WhoquHS30RTrZZCpnUDuatV3WS2LO8wWFn5_TGQ0"});if(t)return await c.Z.setItem("fcm_token",t),t;l.toast.warn("No registration token available. Request permission to generate one.")}catch(e){return console.log("An error occurred while retrieving token. ",e),null}}};var u=function(){let{open:e,openRequestModal:t}=(0,i.qr)(e=>({open:e.open,openRequestModal:e.openRequestModal})),{addNoti:s}=(0,i.sK)(e=>({addNoti:e.addNoti})),[n,d]=(0,r.useState)("");c.Z.getItem("fcm_token").then(e=>d(e));let u=async()=>{var e;t(!1),await m.init(),e=e=>s(e),(0,h.ps)(a,t=>{e(t)})};return(0,r.useEffect)(()=>{Reflect.has(window,"Notification")||l.toast.warn("This browser does not support notifications.")},[]),(0,r.useEffect)(()=>{console.log("Notification.permission",Notification.permission),console.log(n),Reflect.has(Notification,"permission")||(Notification.permission=permission),"granted"===Notification.permission?t(!1):"denied"===Notification.permission?l.toast.warn("Your notification permission was blocked. Please grant this permission to use this app!"):t(!0)},[n,Notification.permission]),(0,o.jsx)("div",{className:"modal sm:modal-middle backdrop:hidden ".concat(e?"modal-open":"hidden"),children:(0,o.jsxs)("div",{className:"modal-box",children:[(0,o.jsx)("h3",{className:"font-bold text-lg",children:"Hello!"}),(0,o.jsx)("p",{className:"py-4",children:"We need your notification permission to run this app real-time"}),(0,o.jsxs)("div",{className:"modal-action",children:[(0,o.jsx)("button",{className:"btn btn-sm btn-neutral rounded-2xl text-sm font-semibold",onClick:e=>{t(!1),l.toast.warn("Please grant notification permission to use this app!")},children:"Cancel"}),(0,o.jsx)("button",{className:"btn btn-sm btn-primary rounded-2xl text-sm font-semibold",onClick:u,children:"Create"})]})]})})}},7949:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var n=s(9268),a=s(4461),o=s(6006);function i(){let{dark:e,toggleDark:t}=(0,a.qr)();return(0,o.useEffect)(()=>{let t=document.body;t.setAttribute("data-theme",e?"dark":"light")},[e]),(0,n.jsx)("div",{className:"w-8 sm:w-12 h-8 sm:h-12 flex justify-center items-center",children:(0,n.jsxs)("label",{className:"swap swap-rotate",children:[(0,n.jsx)("input",{type:"checkbox",onClick:t}),(0,n.jsx)("svg",{className:"swap-on fill-current w-6 h-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{d:"M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"})}),(0,n.jsx)("svg",{className:"swap-off fill-current w-6 h-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{d:"M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"})})]})})}var r=s(5846),l=s.n(r);function c(){let{noties:e,setNoti:t}=(0,a.sK)(e=>({noties:e.noties,setNoti:e.setNoti})),[s,i]=(0,o.useState)(0),r=(0,o.useRef)();(0,o.useEffect)(()=>{let t=e&&(null==e?void 0:e.filter(e=>!e.isSeen).length);i(t)},[e]);let c=(0,o.useCallback)(()=>{let s=null==e?void 0:e.map(e=>({...e,isSeen:!0}));t(s)},[e]),d=(0,o.useCallback)(()=>{r.current.removeAttribute("open")},[e]);return(0,n.jsx)("div",{className:"flex items-center justify-center w-8 sm:w-12 h-8 sm:h-12",children:(0,n.jsxs)("details",{className:"z-50 h-6 dropdown dropdown-end",ref:r,children:[(0,n.jsxs)("summary",{tabIndex:"1",onClick:c,className:"relative indicator h-full inline-flex items-center cursor-pointer",children:[s>0&&(0,n.jsx)("span",{className:"indicator-item badge badge-sm px-1 badge-secondary",children:s<99?s:"99+"}),(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})})]}),(0,n.jsxs)("ul",{tabIndex:"0",className:"z-50 dropdown-content menu font-normal shadow-2xl bg-base-300 rounded-xl w-96",children:[(0,n.jsx)("li",{className:"font-bold border-b border-neutral-focus",children:(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsx)("span",{children:"Notifications"}),(0,n.jsx)("span",{children:(0,n.jsxs)("svg",{className:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:[(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"}),(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})})]})}),e&&(null==e?void 0:e.length)!==0?null==e?void 0:e.map((e,t)=>(0,n.jsx)("li",{children:(0,n.jsxs)(l(),{href:e.link,onClick:d,className:"flex items-center text-left",children:[(0,n.jsx)("div",{className:"flex-1",children:e.body}),!(null==e?void 0:e.isSeen)&&(0,n.jsx)("span",{className:"rounded-full bg-accent p-1"})]})},"noty-".concat(t))):(0,n.jsx)("li",{className:"text-center p-4",children:"No notification"})]})]})})}function d(e){let{className:t=""}=e,{toggleSidebar:s}=(0,a.qr)();return(0,n.jsx)("div",{className:"backdrop-blur ".concat(t),children:(0,n.jsxs)("nav",{className:"w-full px-1 flex justify-between min-h-16",children:[(0,n.jsxs)("div",{className:"flex items-center px-1",children:[(0,n.jsx)("button",{className:"btn btn-ghost btn-circle mr-2",onClick:s,children:(0,n.jsx)("i",{className:"ri-menu-line text-2xl"})}),(0,n.jsx)("a",{href:"/",className:"overflow-hidden max-h-[69px] relative",children:(0,n.jsx)("img",{className:"logo-mono",height:48,src:"/img/svg/beyond-full.svg"})})]}),(0,n.jsx)("div",{className:"flex-1 items-center px-12 hidden md:flex",children:(0,n.jsxs)("div",{className:"relative w-full",children:[(0,n.jsx)("button",{className:"btn btn-sm btn-ghost btn-circle absolute top-2 left-2",children:(0,n.jsx)("i",{className:"ri-search-line text-xl opacity-80"})}),(0,n.jsx)("input",{className:"w-full input border-base-300/80 rounded-full pl-10",placeholder:"Search"})]})}),(0,n.jsxs)("div",{className:"inline-flex items-center space-x-3",children:[(0,n.jsx)(i,{}),(0,n.jsx)(c,{}),(0,n.jsxs)("div",{className:"dropdown dropdown-end",children:[(0,n.jsx)("label",{tabIndex:0,className:"btn btn-ghost btn-circle avatar",children:(0,n.jsx)("div",{className:"w-10 rounded-full",children:(0,n.jsx)("img",{src:"/img/avatar/kimthiendung.jpg"})})}),(0,n.jsxs)("ul",{tabIndex:0,className:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{children:"Settings"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{children:"Logout"})})]})]})]})]})})}},2123:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var n=s(9268),a=s(5846),o=s.n(a),i=s(4461),r=s(6006),l=s(6008);function c(e){let{className:t=""}=e,{sidebar:s}=(0,i.qr)(),[a,c]=(0,r.useState)(!0),d=(0,l.usePathname)(),h=[{label:"Channels",href:"/forum",icon:(0,n.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"min-w-[24px]",children:[(0,n.jsx)("path",{d:"M12 22C6.47699 22 1.99999 17.523 1.99999 12C1.99999 6.477 6.47699 2 12 2C17.523 2 22 6.477 22 12C22.0022 13.978 21.4161 15.9121 20.316 17.556C20.194 17.7375 20.4225 18.886 21 21C18.8855 20.4225 17.7375 20.194 17.556 20.316C15.9121 21.4161 13.978 22.0023 12 22Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M15.6973 9.9099H7.30775M13.0763 7.8689L14.5333 16.1309M9.57625 7.8689L11.0333 16.1309M16.6978 13.9999H8.30775",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),active:"/forum"===d},{label:"Posts",href:"/forum/posts",icon:(0,n.jsx)("i",{className:"ri-file-search-line text-2xl"}),active:d.match(/\/forum\/posts/)},{label:"You",href:"/forum/you/your-posts",icon:(0,n.jsx)("i",{className:"ri-home-line text-2xl"}),active:d.match(/\/forum\/you\/(profile|your-posts|your-channels|your-friends)/g)}],m=[{label:"Announcements",href:"/forum/channel?schoolId=1&channelId=2",icon:(0,n.jsx)("i",{className:"ri-hashtag text-2xl"}),active:d.match(/\/forum\/announcements/)},{label:"School Principal",href:"/forum/channel?schoolId=1&channelId=2",icon:(0,n.jsx)("i",{className:"ri-hashtag text-2xl"}),active:d.match(/\/forum\/school-principal/)},{label:"Teacher",href:"/forum/channel?schoolId=1&channelId=2",icon:(0,n.jsx)("i",{className:"ri-hashtag text-2xl"}),active:d.match(/\/forum\/teacher/)},{label:"Student",href:"/forum/channel?schoolId=1&channelId=2",icon:(0,n.jsx)("i",{className:"ri-hashtag text-2xl"}),active:d.match(/\/forum\/student/)},{label:"Parent",href:"/forum/channel?schoolId=1&channelId=2",icon:(0,n.jsx)("i",{className:"ri-hashtag text-2xl"}),active:d.match(/\/forum\/parent/)},{label:"Staff",href:"/forum/channel?schoolId=1&channelId=2",icon:(0,n.jsx)("i",{className:"ri-hashtag text-2xl"}),active:d.match(/\/forum\/staff\/(profile|my_friends|my_posts)/g)}];return(0,n.jsx)("div",{className:"sidebar ".concat(s?"sidebar-full":"w-[64px]"," flex flex-col items-center h-full bg-base-100 overflow-y-auto ").concat(t," scrollbar-hide pt-2"),children:(0,n.jsxs)("div",{className:"w-full",children:[h.map((e,t)=>(0,n.jsxs)(o(),{className:"flex items-center w-full h-12 px-5 mt-2 hover:bg-neutral-focus border-solid border-r-base-content ".concat(e.active?"bg-neutral text-base-content border-r-4":"hover:bg-neutral hover:text-base-content"),href:e.href,"data-tippy-content":e.label,"data-tippy-placement":"right",children:[e.icon,(0,n.jsx)("span",{className:"sidebar-text ml-5 text-sm font-medium",children:e.label})]},"sidebar-".concat(t))),(0,n.jsxs)("div",{className:"flex items-center w-full h-12 px-5 mt-2 hover:bg-neutral-focus cursor-pointer",onClick:()=>c(!a),children:[(0,n.jsx)("i",{className:"ri-arrow-right-s-line text-2xl transform duration-100 ".concat(a?"rotate-90":"")}),(0,n.jsx)("span",{className:"sidebar-text ml-5 text-sm font-medium",children:"Your Channels"})]}),(0,n.jsx)("div",{className:"".concat(a?"sidebar-more":"hidden"),children:m.map((e,t)=>(0,n.jsxs)(o(),{className:"flex items-center w-full h-12 px-5 mt-2 hover:bg-neutral-focus ".concat(e.active?"bg-neutral text-base-content border-r-4":"hover:bg-neutral hover:text-base-content"),href:e.href,"data-tippy-content":e.label,"data-tippy-placement":"right",children:[e.icon,(0,n.jsx)("span",{className:"sidebar-text ml-5 text-sm font-medium",children:e.label})]},"channel-".concat(t)))})]})})}},6137:function(e,t,s){"use strict";var n=s(5577),a=s(730);t.Z={ListPost:e=>{let t="".concat("https://jsonserver-i5n0.onrender.com","/posts_list?_page=").concat(e,"&_limit=6"),{data:s,error:o,isLoading:i}=(0,a.ZP)(t,n.Z);return{posts:s,isLoading:i,isError:o}},GetDetailPost:e=>{let t="".concat("https://jsonserver-i5n0.onrender.com","/posts/").concat(e),{data:s,error:o,isLoading:i}=(0,a.ZP)(t,n.Z);return{post:s,isLoading:i,isError:o}},TotalPost:()=>(0,n.Z)("".concat("https://jsonserver-i5n0.onrender.com","/stats"))}},4461:function(e,t,s){"use strict";s.d(t,{qr:function(){return i},sK:function(){return l},LM:function(){return r}});var n=s(2561),a=s(4475),o=s(4328);let i=(0,n.Ue)((0,a.tJ)((e,t)=>({dark:!1,toggleDark:()=>e({dark:!t().dark}),sidebar:!1,toggleSidebar:()=>e({sidebar:!t().sidebar}),open:!1,openRequestModal:t=>e({open:t})}),{name:"forumApp",storage:(0,a.FL)(()=>o.Z)})),r=(0,n.Ue)((0,a.tJ)((e,t)=>({access:null,refresh:null,profile:{},setAccess:t=>e(()=>({access:t})),setRefresh:t=>e(()=>({refresh:t})),setProfile:t=>e(()=>({profile:t}))}),{name:"forumUser",storage:(0,a.FL)(()=>o.Z),onRehydrateStorage:e=>{o.Z.getItem("forumUser").then(t=>{t?e.setNoti(JSON.parse(t)):e.setNoti(JSON.parse([]))}).catch(e=>{})}})),l=(0,n.Ue)((0,a.tJ)((e,t)=>({noties:[],setNoti:t=>e(()=>({noties:t})),addNoti:t=>e(e=>{var s,n,a;return{noties:[{link:"/student",img:(null==t?void 0:null===(s=t.notification)||void 0===s?void 0:s.image)||"/avatar/kimthiendung.jpg",title:null==t?void 0:null===(n=t.notification)||void 0===n?void 0:n.title,body:null==t?void 0:null===(a=t.notification)||void 0===a?void 0:a.body,isSeen:!1},...e.noties]}})}),{name:"forumNoti",storage:(0,a.FL)(()=>o.Z),onRehydrateStorage:e=>{o.Z.getItem("forumNoti").then(t=>{t?e.setNoti(JSON.parse(t)):e.setNoti(JSON.parse([]))}).catch(e=>{})}}));var c=s(6137);(0,n.Ue)((e,t)=>({loading:!1,error:"",page:1,data:[],postsCount:0,setPage:t=>e(()=>({page:t})),fetchPostListPage:async t=>{try{e({loading:!0,page:t});let s=c.Z.ListPost(t,6),n=await c.Z.TotalPost();e({loading:!1,data:s,postsCount:n.postsCount})}catch(t){e({loading:!1,error:t})}}}))},4328:function(e,t,s){"use strict";var n=s(2486);t.Z={getItem:async e=>(0,n.U2)(e).then(e=>e).catch(e=>{}),setItem:async(e,t)=>{await (0,n.t8)(e,t)},removeItem:async e=>{await (0,n.IV)(e)}}},5577:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var n=s(4328);async function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o={method:t?String(t||"").toUpperCase():"GET"};"GET"!==o.method&&(s.files?o.body=s.files:o.body=JSON.stringify(s||{})),o.headers={"Content-Type":"application/json",...a},s.files&&delete o.headers["Content-Type"];let i=await n.Z.getItem("forumUser");if(i){var r;let e=JSON.parse(i),t=null==e?void 0:null===(r=e.state)||void 0===r?void 0:r.access;t&&(o.headers.Authorization="Bearer ".concat(t))}return fetch(e,o).then(e=>e.json())}}},function(e){e.O(0,[7095,4753,730,9784,9253,7698,1744],function(){return e(e.s=6740)}),_N_E=e.O()}]);