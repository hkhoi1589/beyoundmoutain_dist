"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4403],{4403:function(e,s,a){a.r(s),a.d(s,{default:function(){return k}});var l=a(7437),t=a(2265);a(6691);var n=a(5493),i=a(6457),r=a(7217),c=a(713),o=a(2601),d=a(8625),u=a(4548),m=a.n(u),x=a(8100),h=a.n(x),v=a(171);function f(e){var s;let{uuid:a}=e,[c,o]=(0,t.useState)(""),{dataComments:u,setDataComments:x,setLoadingAdd:h}=(0,d.ww)(),{profile:f}=(0,d.LM)(),j=async()=>{var e,s;h(!0);let l=await ((e,s,a)=>{let l="".concat(i.bl,"/api/v1/posts/").concat(e,"/comments");return(0,r.Z)(l,"POST",{content:s,reply_comment:void 0})})(a,c);if(null==l?void 0:l.status){let a={author:{avatar:null==f?void 0:f.avatar,full_name:"".concat(null==f?void 0:f.last_name," ").concat(null==f?void 0:f.first_name),uuid:null==f?void 0:f.user_id},content:c,id:null==l?void 0:null===(e=l.data)||void 0===e?void 0:e.id,created:m().utc().format(),modified:m().utc().format(),parent:null,replies:[],status:"C",thumps_up:[]},t={count:u.count+1,results:[a,...u.results]};x(t),o(""),v.toast.success(null==l?void 0:null===(s=l.data)||void 0===s?void 0:s.message)}else v.toast.error(null==l?void 0:l.message);h(!1)};return(0,l.jsxs)("div",{className:"mt-2 flex items-start",children:[(0,l.jsx)("div",{className:"flex-shrink-0 mr-3",children:(0,l.jsx)(n.default,{url:null==f?void 0:f.avatar,name:null==f?void 0:null===(s=f.first_name)||void 0===s?void 0:s.charAt(0),className:"w-10 h-10 font-normal"})}),(0,l.jsxs)("div",{className:"flex-1",children:[(0,l.jsx)("input",{type:"text",name:"q",id:"comment",value:c,onChange:e=>o(e.target.value),className:"outline-none placeholder:truncate h-8 text-base bg-transparent border-solid border-b-neutral border-b-2 input-sm w-full focus-within:border-primary",placeholder:"Add a comment..."}),(0,l.jsx)("div",{className:"flex justify-end mt-2",children:(0,l.jsx)("button",{className:"badge whitespace-nowrap px-2 py-3 hover:bg-neutral-focus bg-[#6A6A6A] text-base-300 font-bold text-xs tracking-wider",onClick:j,children:"Comment"})})]})]})}function j(){return(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("div",{className:"flex-shrink-0 mr-3",children:(0,l.jsx)("div",{className:"animate-skeleton rounded-full w-10 h-10"})}),(0,l.jsxs)("div",{className:"flex-1 pb-2",children:[(0,l.jsx)("div",{className:"animate-skeleton w-32 h-4 mb-2"}),(0,l.jsx)("div",{className:"animate-skeleton w-96 h-4 mb-2"})]}),(0,l.jsx)("div",{className:"animate-skeleton w-10 h-10 rounded-full"})]})}m().extend(h()),a(5590);var p=a(1577);function N(e){var s;let{idComment:a,value:c,img:o,author:u,time:x,text:h}=e,[f,N]=(0,t.useState)(!1),[b,w]=(0,t.useState)(!1),[g,k]=(0,t.useState)(h),[y,C]=(0,t.useState)(!1),A=(0,t.useRef)(null),{dataComments:_,setDataComments:Z}=(0,d.ww)(),{profile:M}=(0,d.LM)(),H=async()=>{w(!0);let e=await ((e,s,a,l,t)=>{let n="".concat(i.bl,"/api/v1/comments/").concat(e);return(0,r.Z)(n,"PUT",{content:s,author:void 0,status:void 0,parent:void 0})})(a,g);if(null==e?void 0:e.status){let{data:s}=e,a={count:_.count,results:_.results.map(e=>e.id===s.id?s:e)};Z(a)}else v.toast.error(null==e?void 0:e.message);w(!1)},V=async()=>{w(!0);let e=await (e=>{let s="".concat(i.bl,"/api/v1/comments/").concat(e);return(0,r.Z)(s,"DELETE")})(a);if(null==e?void 0:e.status){let e={count:_.count-1,results:_.results.filter(e=>e.id!==a)};Z(e)}else v.toast.error(null==e?void 0:e.message);w(!1)};return b||!g?(0,l.jsx)(j,{}):(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("div",{className:"flex-shrink-0 mr-3",children:(0,l.jsx)(n.default,{url:o,name:null==M?void 0:null===(s=M.first_name)||void 0===s?void 0:s.charAt(0),className:"rounded-full w-10 h-10 font-normal"})}),(0,l.jsxs)("div",{className:"flex-1 pb-2",children:[(0,l.jsx)("strong",{children:u}),(0,l.jsx)("span",{className:"ml-2 text-xs opacity-50",children:m()(x).format("DD/MM/YYYY hh:mm:ssA")}),y?(0,l.jsxs)("div",{className:"flex-1",children:[(0,l.jsx)("input",{type:"text",name:"q",id:"comment",value:g,onChange:e=>k(e.target.value),className:"outline-none placeholder:truncate h-8 text-base bg-transparent border-solid border-b-neutral border-b-2 input-sm w-full focus-within:border-primary",placeholder:"Add a comment..."}),(0,l.jsxs)("div",{className:"flex justify-end mt-2",children:[(0,l.jsx)("button",{className:"badge whitespace-nowrap mr-4 px-2 py-3 hover:bg-neutral-focus bg-[#6A6A6A] text-base-300 font-bold text-xs tracking-wider",onClick:()=>C(!1),children:"Cancel"}),(0,l.jsx)("button",{className:"badge whitespace-nowrap px-2 py-3 hover:bg-neutral-focus bg-[#6A6A6A] text-base-300 font-bold text-xs tracking-wider",onClick:()=>{C(!1),H()},children:"Edit"})]})]}):(0,l.jsx)(p.Z,{content:g})]}),(0,l.jsxs)("details",{className:"dropdown dropdown-end",ref:A,children:[(0,l.jsx)("summary",{tabIndex:"0",className:"list-none cursor-pointer my-auto whitespace-nowrap font-medium text-sm hover:text-accent-focus",children:(0,l.jsx)("i",{className:"ri-more-fill"})}),(0,l.jsxs)("ul",{tabIndex:"0",className:"z-50 dropdown-content menu shadow-lg bg-base-100 rounded-md",children:[(0,l.jsx)("li",{children:(0,l.jsx)("button",{className:"whitespace-nowrap",onClick:()=>{C(!0),A.current.removeAttribute("open")},children:"Edit"})},"action-edit"),(0,l.jsx)("li",{children:(0,l.jsx)("button",{className:"whitespace-nowrap",onClick:()=>{V(),A.current.removeAttribute("open")},children:"Delete"})},"action-delete")]})]})]})}function b(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"flex py-3",children:(0,l.jsxs)("div",{className:"flex items-center mr-2",children:[(0,l.jsx)("div",{className:"animate-skeleton w-6 h-6 mr-2"}),(0,l.jsx)("div",{className:"animate-skeleton w-28 h-6"})]})}),(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsxs)("div",{className:"mt-2 flex items-start",children:[(0,l.jsx)("div",{className:"flex-shrink-0 mr-3",children:(0,l.jsx)("div",{className:"animate-skeleton rounded-full w-8 h-8"})}),(0,l.jsxs)("div",{className:"flex-1",children:[(0,l.jsx)("div",{className:"animate-skeleton w-full h-8"}),(0,l.jsx)("div",{className:"flex justify-end mt-2",children:(0,l.jsx)("div",{className:"animate-skeleton rounded w-20 h-7"})})]})]}),(0,l.jsx)("ul",{children:Array.from({length:i.nj},(e,s)=>s+1).map(e=>(0,l.jsxs)("li",{className:"flex",children:[(0,l.jsx)("div",{className:"flex-shrink-0 mr-3",children:(0,l.jsx)("div",{className:"animate-skeleton rounded-full w-10 h-10"})}),(0,l.jsxs)("div",{className:"flex-1 pb-2",children:[(0,l.jsx)("div",{className:"animate-skeleton w-32 h-4 mb-2"}),(0,l.jsx)("div",{className:"animate-skeleton w-96 h-4 mb-2"})]}),(0,l.jsx)("div",{className:"animate-skeleton w-10 h-10 rounded-full"})]},"loading-cmt-".concat(e)))})]})]})}var w=a(184),g=a(4016);function k(e){var s;let{idPost:a}=e,[n,r]=(0,t.useState)(0),{dataComments:c,setDataComments:o,loadingAdd:u,errorAdd:m}=(0,d.ww)(),{comments_post:x,isLoading:h,isError:j}=g.Z.ListCommentPost(a,i.nj,i.nj*n);return((0,t.useEffect)(()=>{(j||m)&&(v.toast.error(m||j),console.log("ListComment",m||j))},[j,m]),(0,t.useEffect)(()=>{o(x)},[x]),h||!c)?(0,l.jsx)(b,{}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"flex py-3",children:(0,l.jsxs)("div",{className:"flex items-center mr-2",children:[(0,l.jsx)("svg",{className:"w-6 h-6 mr-2",viewBox:"0 0 20 21",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M4 12.7598H16V10.7964H4V12.7598ZM4 9.81464H16V7.85119H4V9.81464ZM4 6.86947H16V4.90602H4V6.86947ZM20 20.6136L16 16.6867H2C1.45 16.6867 0.979002 16.4943 0.587002 16.1094C0.195002 15.7246 -0.000664969 15.2625 1.69779e-06 14.7233V2.94257C1.69779e-06 2.40263 0.196002 1.94023 0.588002 1.5554C0.980002 1.17056 1.45067 0.978473 2 0.979128H18C18.55 0.979128 19.021 1.17155 19.413 1.55638C19.805 1.94122 20.0007 2.40328 20 2.94257V20.6136ZM16.85 14.7233L18 15.8277V2.94257H2V14.7233H16.85Z"})}),(0,l.jsx)("p",{children:"".concat(null==c?void 0:c.count," ").concat((null==c?void 0:c.count)>1?"comments":"comment")})]})}),(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsx)(f,{uuid:a}),(0,l.jsxs)("ul",{children:[u&&(0,l.jsxs)("li",{className:"flex",children:[(0,l.jsx)("div",{className:"flex-shrink-0 mr-3",children:(0,l.jsx)("div",{className:"animate-skeleton rounded-full w-10 h-10"})}),(0,l.jsxs)("div",{className:"flex-1 pb-2",children:[(0,l.jsx)("div",{className:"animate-skeleton w-32 h-4 mb-2"}),(0,l.jsx)("div",{className:"animate-skeleton w-96 h-4 mb-2"})]}),(0,l.jsx)("div",{className:"animate-skeleton w-10 h-10 rounded-full"})]},"loading-add-cmt"),c&&(null==c?void 0:null===(s=c.results)||void 0===s?void 0:s.map(e=>{var s,a;return(0,l.jsx)("li",{children:(0,l.jsx)(N,{idComment:null==e?void 0:e.id,value:null==e?void 0:e.thumps_up,img:null==e?void 0:null===(s=e.author)||void 0===s?void 0:s.avatar,author:null==e?void 0:null===(a=e.author)||void 0===a?void 0:a.full_name,time:null==e?void 0:e.created,text:null==e?void 0:e.content})},"user-".concat(e.id,".jpg"))}))]})]}),(0,l.jsx)(w.Z,{page:n,total:null==c?void 0:c.count,limit:i.nj,setPage:r})]})}},184:function(e,s,a){a.d(s,{Z:function(){return n}});var l=a(7437);let t=function(e){window.scrollTo({top:e,behavior:"smooth"})};a(2265);var n=function(e){let{page:s,total:a,limit:n,setPage:i}=e,r=e=>{t(0),i(e-1)};return(0,l.jsx)("div",{className:"join flex flex-wrap justify-center mb-8 max-w-full",children:Array.from({length:0===Math.ceil(a/n)?1:Math.ceil(a/n)},(e,s)=>s+1).map(e=>(0,l.jsx)("button",{onClick:()=>r(e),className:"join-item !rounded-full bg-neutral hover:btn-accent w-10 h-10 p-2 m-2 ".concat(e===s+1?"btn-active btn-accent":""),children:e},"page-".concat(e)))})}},5493:function(e,s,a){a.r(s),a.d(s,{default:function(){return i}});var l=a(7437),t=a(6691),n=a.n(t);function i(e){let{className:s,url:a,name:t}=e;return(0,l.jsx)("div",{className:"avatar placeholder",children:(0,l.jsx)("div",{className:"bg-base-300/60 rounded-full ".concat(s),children:a?(0,l.jsx)(n(),{src:a,alt:"avatar.jpg",width:0,height:0,style:{width:"100%",height:"auto"}}):(0,l.jsx)("span",{className:"text-2xl uppercase",children:t})})})}}}]);