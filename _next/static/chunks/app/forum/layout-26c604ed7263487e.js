(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4589],{2452:function(e,t,n){Promise.resolve().then(n.bind(n,171)),Promise.resolve().then(n.t.bind(n,3699,23)),Promise.resolve().then(n.bind(n,7817)),Promise.resolve().then(n.bind(n,6668)),Promise.resolve().then(n.bind(n,8003)),Promise.resolve().then(n.t.bind(n,6518,23))},8003:function(e,t,n){"use strict";let a,s;n.r(t),n.d(t,{default:function(){return m}});var o=n(7437),l=n(9279),i=n(2265),c=n(171),r=n(5039),d=n(994),u=n(9531);u.Gb&&(a=0===(0,d.C6)().length?(0,d.ZF)({apiKey:"AIzaSyD1KuEyGhDPD-fZ8zABZCqQwhFKWIvB0SE",authDomain:"koolyard-a7d0e.firebaseapp.com",projectId:"koolyard-a7d0e",storageBucket:"koolyard-a7d0e.appspot.com",messagingSenderId:"605848801648",appId:"1:605848801648:web:c48808d1f960b00d223fb5",measurementId:"G-J25HN3JGSE"}):(0,d.C6)()[0],s=(0,u.KL)(a));let h={init:async function(){try{let e=await r.Z.getItem("fcm_token");if(e)return e;let t=await (0,u.LP)(s,{vapidKey:"BCHyWU_hZHoBYlca-pQmtlIhFRFzMjd9TM0jOFlTFqOQUh2WhoquHS30RTrZZCpnUDuatV3WS2LO8wWFn5_TGQ0"});if(t)return await r.Z.setItem("fcm_token",t),t;c.toast.warn("No registration token available. Request permission to generate one.")}catch(e){return console.log("An error occurred while retrieving token. ",e),null}}};var m=function(){let{open:e,openRequestModal:t}=(0,l.qr)(e=>({open:e.open,openRequestModal:e.openRequestModal})),{addNoti:n}=(0,l.sK)(e=>({addNoti:e.addNoti})),[a,d]=(0,i.useState)("");r.Z.getItem("fcm_token").then(e=>d(e));let m=async()=>{var e;t(!1),await h.init(),e=e=>n(e),(0,u.ps)(s,t=>{e(t)})};return(0,i.useEffect)(()=>{Reflect.has(window,"Notification")||c.toast.warn("This browser does not support notifications.")},[]),(0,i.useEffect)(()=>{Reflect.has(Notification,"permission")||(Notification.permission=permission),"granted"===Notification.permission?t(!1):"denied"===Notification.permission?c.toast.warn("Your notification permission was blocked. Please grant this permission to use this app!"):t(!0)},[a,Notification.permission]),(0,o.jsx)("div",{className:"modal sm:modal-middle backdrop:hidden ".concat(e?"modal-open":"hidden"),children:(0,o.jsxs)("div",{className:"modal-box",children:[(0,o.jsx)("h3",{className:"font-bold text-lg",children:"Hello!"}),(0,o.jsx)("p",{className:"py-4",children:"We need your notification permission to run this app real-time"}),(0,o.jsxs)("div",{className:"modal-action",children:[(0,o.jsx)("button",{className:"btn btn-sm btn-neutral rounded-2xl text-sm font-semibold",onClick:e=>{t(!1),c.toast.warn("Please grant notification permission to use this app!")},children:"Cancel"}),(0,o.jsx)("button",{className:"btn btn-sm btn-primary rounded-2xl text-sm font-semibold",onClick:m,children:"Create"})]})]})})}},7817:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n(7437),s=n(9279),o=n(4033),l=n(2265);function i(){let{dark:e,toggleDark:t}=(0,s.qr)();return(0,l.useEffect)(()=>{let t=document.body;t.setAttribute("data-theme",e?"dark":"light")},[e]),(0,a.jsx)("div",{className:"w-8 sm:w-12 h-8 sm:h-12 flex justify-center items-center",children:(0,a.jsxs)("label",{className:"swap swap-rotate",children:[(0,a.jsx)("input",{type:"checkbox",onClick:t}),(0,a.jsx)("svg",{className:"swap-on fill-current w-6 h-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"})}),(0,a.jsx)("svg",{className:"swap-off fill-current w-6 h-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"})})]})})}var c=n(1396),r=n.n(c);function d(){let{noties:e,setNoti:t}=(0,s.sK)(e=>({noties:e.noties,setNoti:e.setNoti})),[n,o]=(0,l.useState)(0),i=(0,l.useRef)();(0,l.useEffect)(()=>{let t=e&&(null==e?void 0:e.filter(e=>!e.isSeen).length);o(t)},[e]);let c=(0,l.useCallback)(()=>{let n=null==e?void 0:e.map(e=>({...e,isSeen:!0}));t(n)},[e]),d=(0,l.useCallback)(()=>{i.current.removeAttribute("open")},[e]);return(0,a.jsx)("div",{className:"flex items-center justify-center w-8 sm:w-12 h-8 sm:h-12",children:(0,a.jsxs)("details",{className:"z-50 h-6 dropdown dropdown-end",ref:i,children:[(0,a.jsxs)("summary",{tabIndex:"1",onClick:c,className:"relative indicator h-full inline-flex items-center cursor-pointer",children:[n>0&&(0,a.jsx)("span",{className:"indicator-item badge badge-sm px-1 badge-secondary",children:n<99?n:"99+"}),(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})})]}),(0,a.jsxs)("ul",{tabIndex:"0",className:"z-50 dropdown-content menu font-normal shadow-2xl bg-base-300 rounded-xl w-96",children:[(0,a.jsx)("li",{className:"font-bold border-b border-neutral-focus",children:(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("span",{children:"Notifications"}),(0,a.jsx)("span",{children:(0,a.jsxs)("svg",{className:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:[(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"}),(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})})]})}),e&&(null==e?void 0:e.length)!==0?null==e?void 0:e.map((e,t)=>(0,a.jsx)("li",{children:(0,a.jsxs)(r(),{href:e.link,onClick:d,className:"flex items-center text-left",children:[(0,a.jsx)("div",{className:"flex-1",children:e.body}),!(null==e?void 0:e.isSeen)&&(0,a.jsx)("span",{className:"rounded-full bg-accent p-1"})]})},"noty-".concat(t))):(0,a.jsx)("li",{className:"text-center p-4",children:"No notification"})]})]})})}function u(e){let{className:t=""}=e,{toggleSidebar:n}=(0,s.qr)(),{setAccess:l,setRefresh:c,setProfile:r}=(0,s.LM)(),u=(0,o.useRouter)();return(0,a.jsx)("div",{className:"backdrop-blur ".concat(t),children:(0,a.jsxs)("nav",{className:"w-full px-1 flex justify-between min-h-16",children:[(0,a.jsxs)("div",{className:"flex items-center px-1",children:[(0,a.jsx)("button",{className:"btn btn-ghost btn-circle mr-2",onClick:n,children:(0,a.jsx)("i",{className:"ri-menu-line text-2xl"})}),(0,a.jsx)("a",{href:"/",className:"overflow-hidden max-h-[69px] relative",children:(0,a.jsx)("img",{className:"logo-mono",height:48,src:"/img/svg/beyond-full.svg"})})]}),(0,a.jsx)("div",{className:"flex-1 items-center px-12 hidden md:flex",children:(0,a.jsxs)("div",{className:"relative w-full",children:[(0,a.jsx)("button",{className:"btn btn-sm btn-ghost btn-circle absolute top-2 left-2",children:(0,a.jsx)("i",{className:"ri-search-line text-xl opacity-80"})}),(0,a.jsx)("input",{className:"w-full input border-base-300/80 rounded-full pl-10",placeholder:"Search"})]})}),(0,a.jsxs)("div",{className:"inline-flex items-center space-x-3",children:[(0,a.jsx)(i,{}),(0,a.jsx)(d,{}),(0,a.jsxs)("div",{className:"dropdown dropdown-end",children:[(0,a.jsx)("label",{tabIndex:0,className:"btn btn-ghost btn-circle avatar",children:(0,a.jsx)("div",{className:"w-10 rounded-full",children:(0,a.jsx)("img",{src:"/img/avatar/kimthiendung.jpg"})})}),(0,a.jsxs)("ul",{tabIndex:0,className:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{children:"Settings"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{onClick:()=>{l(""),c(""),r({}),u.push("/auth/login")},children:"Logout"})})]})]})]})]})})}},6668:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n(7437),s=n(1396),o=n.n(s),l=n(9279),i=n(2265),c=n(4033),r=n(6816),d=n(171);function u(e){let{className:t=""}=e,{sidebar:n}=(0,l.qr)(),[s,u]=(0,i.useState)(!0),[h,m]=(0,i.useState)(0),[p,f]=(0,i.useState)([]),v=(0,c.usePathname)(),x=(0,c.useSearchParams)(),b=x.get("channelId"),{channels:g,isLoading:j,isError:w}=r.Z.SearchChannelSchool(6,6*h,"");(0,i.useEffect)(()=>{w&&(d.toast.error(w),console.log("Sidebar",w))},[w]),(0,i.useEffect)(()=>{var e;let t=null==g?void 0:null===(e=g.results)||void 0===e?void 0:e.map(e=>({...e,href:"/forum/channel?channelId=".concat(e.id),icon:(0,a.jsx)("i",{className:"ri-hashtag text-2xl"}),active:b===e.id.toString()}));f(t)},[g]);let N=[{label:"Channels",href:"/forum",icon:(0,a.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"min-w-[24px]",children:[(0,a.jsx)("path",{d:"M12 22C6.47699 22 1.99999 17.523 1.99999 12C1.99999 6.477 6.47699 2 12 2C17.523 2 22 6.477 22 12C22.0022 13.978 21.4161 15.9121 20.316 17.556C20.194 17.7375 20.4225 18.886 21 21C18.8855 20.4225 17.7375 20.194 17.556 20.316C15.9121 21.4161 13.978 22.0023 12 22Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M15.6973 9.9099H7.30775M13.0763 7.8689L14.5333 16.1309M9.57625 7.8689L11.0333 16.1309M16.6978 13.9999H8.30775",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),active:"/forum"===v},{label:"Posts",href:"/forum/posts",icon:(0,a.jsx)("i",{className:"ri-file-search-line text-2xl"}),active:v.match(/\/forum\/posts/)},{label:"You",href:"/forum/you/your-posts",icon:(0,a.jsx)("i",{className:"ri-home-line text-2xl"}),active:v.match(/\/forum\/you\/(profile|your-posts|your-channels|your-friends)/g)}];return(0,a.jsx)("div",{className:"sidebar ".concat(n?"sidebar-full":"w-[64px]"," flex flex-col items-center h-full bg-base-100 overflow-y-auto ").concat(t," scrollbar-hide pt-2"),children:(0,a.jsxs)("div",{className:"w-full",children:[N.map((e,t)=>(0,a.jsxs)(o(),{className:"flex items-center w-full h-12 px-5 mt-2 hover:bg-neutral-focus border-solid border-r-base-content ".concat(e.active?"bg-neutral text-base-content border-r-4":"hover:bg-neutral hover:text-base-content"),href:e.href,"data-tippy-content":e.label,"data-tippy-placement":"right",children:[e.icon,(0,a.jsx)("span",{className:"sidebar-text ml-5 text-sm font-medium",children:e.label})]},"sidebar-".concat(t))),(0,a.jsxs)("div",{className:"flex items-center w-full h-12 px-5 mt-2 hover:bg-neutral-focus cursor-pointer",onClick:()=>u(!s),children:[(0,a.jsx)("i",{className:"ri-arrow-right-s-line text-2xl transform duration-100 ".concat(s?"rotate-90":"")}),(0,a.jsx)("span",{className:"sidebar-text ml-5 text-sm font-medium",children:"Your Channels"})]}),(0,a.jsx)("div",{className:"".concat(s?"sidebar-more":"hidden"),children:j||!g?Array.from({length:6},(e,t)=>t+1).map(e=>(0,a.jsxs)("div",{className:"flex items-center w-full h-10 px-5 mb-2",children:[(0,a.jsx)("div",{className:"animate-skeleton w-6 h-6 rounded-full"}),(0,a.jsx)("div",{className:"ml-4 flex-1 flex flex-col",children:(0,a.jsx)("div",{className:"animate-skeleton w-28 h-6"})})]},"loading-item-".concat(e))):null==p?void 0:p.map((e,t)=>(0,a.jsxs)(o(),{className:"flex items-center w-full h-12 px-5 mt-2 hover:bg-neutral-focus ".concat(e.active?"bg-neutral text-base-content border-r-4":"hover:bg-neutral hover:text-base-content"),href:e.href,"data-tippy-content":e.name,"data-tippy-placement":"right",children:[e.icon,(0,a.jsx)("span",{className:"sidebar-text ml-5 text-sm font-medium",children:e.name})]},"channel-".concat(t)))})]})})}},6816:function(e,t,n){"use strict";var a=n(6457),s=n(7217),o=n(713);t.Z={GetDetailCommentChannel:(e,t)=>{let n="".concat(a.bl,"/api/v1/channel/").concat(e,"/comments/").concat(t),{data:l,isLoading:i}=(0,o.ZP)(n,s.Z);return{detail_comment:l,isLoading:i,isError:(null==l?void 0:l.status)===!1&&(null==l?void 0:l.message)}},SearchChannelSchool:(e,t,n)=>{let l="".concat(a.bl,"/api/v1/channels/search?limit=").concat(e,"&offset=").concat(t,"&q=").concat(n),{data:i,isLoading:c}=(0,o.ZP)(l,s.Z);return{channels:null==i?void 0:i.data,isLoading:c,isError:(null==i?void 0:i.status)===!1&&(null==i?void 0:i.message)}},SearchMemberChannel:(e,t,n,l)=>{let i="".concat(a.bl,"/api/v1/channels/").concat(e,"/members/search?limit=").concat(t,"&offset=").concat(n,"&q=").concat(l),{data:c,isLoading:r}=(0,o.ZP)(i,s.Z);return{members:c,isLoading:r,isError:(null==c?void 0:c.status)===!1&&(null==c?void 0:c.message)}},ListPinnedPostsChannel:(e,t,n)=>{let l="".concat(a.bl,"/api/v1/channels/").concat(e,"/posts/pinned?limit=").concat(t,"&offset=").concat(n),{data:i,isLoading:c}=(0,o.ZP)(l,s.Z);return{pin_posts:i,isLoading:c,isError:(null==i?void 0:i.status)===!1&&(null==i?void 0:i.message)}},SearchPostChannel:(e,t,n,l)=>{let i="".concat(a.bl,"/api/v1/channels/").concat(e,"/posts/search?limit=").concat(t,"&offset=").concat(n,"&q=").concat(l),{data:c,isLoading:r}=(0,o.ZP)(i,s.Z);return{posts:c,isLoading:r,isError:(null==c?void 0:c.status)===!1&&(null==c?void 0:c.message)}},CreateChannelSchool:(e,t)=>{let n="".concat(a.bl,"/api/v1/channel");return(0,s.Z)(n,"POST",{name:e,description:t})},InviteUsersChannel:(e,t,n)=>{let o="".concat(a.bl,"/api/v1/channels/").concat(e,"/invitations");return(0,s.Z)(o,"POST",{members:t,message:n})},CreatePostChannel:(e,t,n,o)=>{let l="".concat(a.bl,"/api/v1/channels/").concat(e,"/posts");return(0,s.Z)(l,"POST",{subject:t,content:n,tags:o})},RequestJoinChannel:(e,t)=>{let n="".concat(a.bl,"/api/v1/channels/").concat(e,"/request");return(0,s.Z)(n,"POST",{message:t})},UpdateCommentChannel:(e,t,n,o,l,i)=>{let c="".concat(a.bl,"/api/v1/channel/").concat(e,"/comments/").concat(t);return(0,s.Z)(c,"PUT",{content:n,author:o,status:l,parent:i})},UpdateChannel:(e,t,n)=>{let o="".concat(a.bl,"/api/v1/channels/").concat(e);return(0,s.Z)(o,"PUT",{name:t,description:n})},PinPostChannel:(e,t)=>{let n="".concat(a.bl,"/api/v1/channels/").concat(e,"/posts/pinned/").concat(t);return(0,s.Z)(n,"PUT")},AcceptRequestJoinChannel:(e,t)=>{let n="".concat(a.bl,"/api/v1/channels/").concat(e,"/request/").concat(t);return(0,s.Z)(n,"PUT")},PartialUpdateCommentChannel:(e,t,n,o,l,i)=>{let c="".concat(a.bl,"/api/v1/channel/").concat(e,"/comments/").concat(t);return(0,s.Z)(c,"PATCH",{content:n,author:o,status:l,parent:i})},ChangeStatusChannel:(e,t)=>{let n="".concat(a.bl,"/api/v1/channels/").concat(e);return(0,s.Z)(n,"PATCH",{status:t})},JoinUsersChannel:e=>{let t="".concat(a.bl,"/api/v1/channels/").concat(e,"/invitations");return(0,s.Z)(t,"PATCH")},UpdatePostChannel:(e,t,n,o,l,i)=>{let c="".concat(a.bl,"/api/v1/channels/").concat(e,"/posts/").concat(t);return(0,s.Z)(c,"PATCH",{subject:n,content:o,is_public:l,tags:i})},DestroyCommentChannel:(e,t)=>{let n="".concat(a.bl,"/api/v1/channel/").concat(e,"/comments/").concat(t);return(0,s.Z)(n,"DELETE")},RemoveChannel:e=>{let t="".concat(a.bl,"/api/v1/channels/").concat(e);return(0,s.Z)(t,"DELETE")},RejectChannel:e=>{let t="".concat(a.bl,"/api/v1/channels/").concat(e,"/invitations");return(0,s.Z)(t,"DELETE")},RemovePinPostChannel:(e,t)=>{let n="".concat(a.bl,"/api/v1/channels/").concat(e,"/posts/pinned/").concat(t);return(0,s.Z)(n,"DELETE")},DeletePostChannel:(e,t)=>{let n="".concat(a.bl,"/api/v1/channels/").concat(e,"/posts/").concat(t);return(0,s.Z)(n,"DELETE")},ListChannel:e=>{let t="".concat("https://jsonserver-i5n0.onrender.com","/channels?_page=").concat(e,"&_limit=6"),{data:n,isLoading:a}=(0,o.ZP)(t,s.Z);return{channels:n,isLoading:a,isError:(null==n?void 0:n.status)===!1&&(null==n?void 0:n.message)}}}},4016:function(e,t,n){"use strict";var a=n(6457),s=n(7217),o=n(713);t.Z={ListPinPostForSchool:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,t=arguments.length>1?arguments[1]:void 0,n="".concat(a.bl,"/api/v1/posts-pinned?limit=").concat(e,"&offset=").concat(t),{data:l,isLoading:i}=(0,o.ZP)(n,s.Z);return{pin_posts:null==l?void 0:l.data,isLoadingPinPost:i,isErrorPinPost:(null==l?void 0:l.status)===!1&&(null==l?void 0:l.message)}},SearchPostSchool:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,l="".concat(a.bl,"/api/v1/posts/search?limit=").concat(e,"&offset=").concat(t,"&q=").concat(n),{data:i,isLoading:c}=(0,o.ZP)(l,s.Z);return{posts:i,isLoading:c,isError:(null==i?void 0:i.status)===!1&&(null==i?void 0:i.message)}},GetDetailPost:e=>{let t="".concat(a.bl,"/api/v1/posts/").concat(e),{data:n,isLoading:l}=(0,o.ZP)(t,s.Z);return{detail_post:n,isLoading:l,isError:(null==n?void 0:n.status)===!1&&(null==n?void 0:n.message)}},ListCommentPost:(e,t,n)=>{let l="".concat(a.bl,"/api/v1/posts/").concat(e,"/comments?limit=").concat(t,"&offset=").concat(n),{data:i,isLoading:c}=(0,o.ZP)(l,s.Z);return{comments_post:i,isLoading:c,isError:(null==i?void 0:i.status)===!1&&(null==i?void 0:i.message)}},CreatePostSchool:(e,t,n)=>{let o="".concat(a.bl,"/api/v1/posts");return(0,s.Z)(o,"POST",{subject:e,content:t,tags:n})},UploadImagePost:(e,t,n)=>{let o="".concat(a.bl,"/api/v1/posts/").concat(e,"/images");return(0,s.Z)(o,"POST",{image:t,caption:n})},CreateLocationPost:(e,t,n,o,l)=>{let i="".concat(a.bl,"/api/v1/post/").concat(e,"/location");return(0,s.Z)(i,"PUT",{primary_street_name:t,secondary_street_name:n,primary_location:o,secondary_location:l})},PinPostSchool:e=>{let t="".concat(a.bl,"/api/v1/posts/pinned/").concat(e);return(0,s.Z)(t,"PUT")},LikePost:e=>{let t="".concat(a.bl,"/api/v1/posts/").concat(e,"/");return(0,s.Z)(t,"PUT")},RemovePinPostSchool:e=>{let t="".concat(a.bl,"/api/v1/posts/pinned/").concat(e);return(0,s.Z)(t,"DELETE")},RemoveLikePost:e=>{let t="".concat(a.bl,"/api/v1/posts/").concat(e,"/");return(0,s.Z)(t,"DELETE")},TotalPost:()=>(0,s.Z)("".concat("https://jsonserver-i5n0.onrender.com","/stats"))}},9279:function(e,t,n){"use strict";n.d(t,{qr:function(){return l},sK:function(){return c},LM:function(){return i}});var a=n(4660),s=n(4810),o=n(5039);let l=(0,a.Ue)((0,s.tJ)((e,t)=>({dark:!1,toggleDark:()=>e({dark:!t().dark}),sidebar:!1,toggleSidebar:()=>e({sidebar:!t().sidebar}),open:!1,openRequestModal:t=>e({open:t})}),{name:"forumApp",storage:(0,s.FL)(()=>o.Z)})),i=(0,a.Ue)((0,s.tJ)((e,t)=>({access:null,refresh:null,profile:{},setAccess:t=>e(()=>({access:t})),setRefresh:t=>e(()=>({refresh:t})),setProfile:t=>e(()=>({profile:t}))}),{name:"forumUser",storage:(0,s.FL)(()=>o.Z)})),c=(0,a.Ue)((0,s.tJ)((e,t)=>({noties:[],setNoti:t=>e(()=>({noties:t})),addNoti:t=>e(e=>{var n,a,s;return{noties:[{link:"/student",img:(null==t?void 0:null===(n=t.notification)||void 0===n?void 0:n.image)||"/avatar/kimthiendung.jpg",title:null==t?void 0:null===(a=t.notification)||void 0===a?void 0:a.title,body:null==t?void 0:null===(s=t.notification)||void 0===s?void 0:s.body,isSeen:!1},...e.noties]}})}),{name:"forumNoti",storage:(0,s.FL)(()=>o.Z),onRehydrateStorage:e=>{o.Z.getItem("forumNoti").then(t=>{t?e.setNoti(JSON.parse(t)):e.setNoti(JSON.parse([]))}).catch(e=>{})}}));var r=n(4016);(0,a.Ue)((e,t)=>({loading:!1,error:"",page:1,data:[],postsCount:0,setPage:t=>e(()=>({page:t})),fetchPostListPage:async t=>{try{e({loading:!0,page:t});let n=r.Z.ListPost(t,6),a=await r.Z.TotalPost();e({loading:!1,data:n,postsCount:a.postsCount})}catch(t){e({loading:!1,error:t})}}}))},5039:function(e,t,n){"use strict";var a=n(5484);t.Z={getItem:async e=>(0,a.U2)(e).then(e=>e).catch(e=>{}),setItem:async(e,t)=>{await (0,a.t8)(e,t)},removeItem:async e=>{await (0,a.IV)(e)}}},6457:function(e,t,n){"use strict";n.d(t,{Cx:function(){return a},DN:function(){return s},bl:function(){return o}});let a="w3iggrA5WlOIoKGqvfjTJzdqdYWSsG3dCcUYpVT8",s="VDBAYgCdkAkrIxamKXptPSMrvvNKZFMLEs9Z7hhO4QUbkUR1iKntEXaIlZLiyaZ8wRnEIENbBJBF9PnthzI73LUtYqBmk2qI9yDmAGMKS3yushSzkQewdpTJy4k9O6iT",o="http://ky-de-appli-1fdbxk808lvu0-550379223.us-east-1.elb.amazonaws.com"},7217:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(5039);async function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o={method:t?String(t||"").toUpperCase():"GET"};"GET"!==o.method&&(n.files?o.body=n.files:o.body=JSON.stringify(n||{})),o.headers={"Content-Type":"application/json",...s},n.files&&delete o.headers["Content-Type"];let l=await a.Z.getItem("forumUser");if(l){var i;let e=JSON.parse(l),t=null==e?void 0:null===(i=e.state)||void 0===i?void 0:i.access;t&&(o.headers.Authorization="Bearer ".concat(t))}return fetch(e,o).then(e=>e.json())}}},function(e){e.O(0,[6685,1501,713,1736,2971,596,1744],function(){return e(e.s=2452)}),_N_E=e.O()}]);