"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5054],{7506:function(e,t,l){l.r(t),l.d(t,{default:function(){return v}});var s=l(7437),a=l(2265),n=function(e){let t,{selectedImage:l,setSelectedImage:a}=e;t=l instanceof File?URL.createObjectURL(l):l;let n=()=>{a(void 0)};return(0,s.jsxs)("div",{className:"relative rounded p-2",children:[(0,s.jsx)("img",{src:t,alt:"your_image",onLoad:()=>URL.revokeObjectURL(t)}),(0,s.jsx)("div",{className:"btn btn-sm btn-circle absolute right-2 top-2",onClick:()=>n(),children:"✕"})]})},i=function(e){let{setSelectedImage:t}=e,l=e=>{e.target.files&&e.target.files.length>0&&/image/.test(e.target.files[0].type)?t(e.target.files[0]):toast.warn("Only accept images")};return(0,s.jsxs)("label",{htmlFor:"file",className:"cursor-pointer",children:[(0,s.jsx)("i",{className:"ri-image-line text-xl"}),(0,s.jsx)("input",{className:"hidden",type:"file",accept:"image/*",id:"file",name:"myfiles[]",onClick:e=>e.target.value=null,onChange:e=>l(e),multiple:!0})]})},o=l(6932),r=l(848);l(3979);var c=l(4897),u=l(6816),d=l(4016),m=l(171);let x=["sport","j4f","meme","important","event"];function h(e){let{className:t="",selectedText:l,setSelectedText:n}=e,[i,o]=(0,a.useState)(""),r=e=>[void 0,"insertFromYank","insertFromDrop","insertFromPasteAsQuotation","insertTranspose","insertCompositionText","insertLink"].includes(e),c=(e,t,l)=>{let{inputType:s}=e.nativeEvent,{value:a}=e.target;r(s)?null==t||t(a):null==l||l(a)},u=e=>{o(""),n([...l,e])},d=e=>o(e);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"flex justify-between items-center w-full mt-2 py-2 px-4 border-neutral input rounded-full",children:[l.map((e,t)=>(0,s.jsx)("span",{className:"leading-8 badge badge-neutral mr-1",children:e},t)),(0,s.jsx)("input",{className:"flex-1 outline-none",list:"tags",name:"tag",id:"tag",value:i,onChange:e=>c(e,u,d)})]}),(0,s.jsx)("datalist",{id:"tags",children:x.map((e,t)=>(0,s.jsx)("option",{value:e},"tag-".concat(t)))})]})}var p=l(8625),v=function(e){var t,l;let{className:x="",isChannel:v=!1}=e,[f,g]=(0,a.useState)(!1),[j,b]=(0,a.useState)({name:"Select a channel",id:""}),[N,w]=(0,a.useState)(void 0),[y,C]=(0,a.useState)(""),[S,k]=(0,a.useState)(!1),[F,_]=(0,a.useState)([]),L=(0,a.useRef)(null),{dataPosts:T,setLoadingAdd:I,setDataPosts:P}=(0,p.NV)(),{profile:Z}=(0,p.LM)(),{channels:R,isLoading:U,isError:E}=u.Z.SearchChannelSchool("","",0,"",v),A=(0,o.jE)({extensions:[r.Z],content:""});if(!A)return null;let O=async()=>{k(!0),I(!0);let e=A.getText();if(0!==e.length||N){var t,l,s,a,n;let i=await (v?u.Z.CreatePostChannel(j.id,y,e,F):d.Z.CreatePostSchool(y,e,F));if(null==i?void 0:i.status){if(N&&await d.Z.UploadImagePost(null==i?void 0:null===(s=i.data)||void 0===s?void 0:null===(l=s.post)||void 0===l?void 0:l.uuid,N,""),!v){let e={comments:0,is_public:!0,last_comment:null,subject:y,author:Z,tags:F,thumps_up:0,uuid:null==i?void 0:null===(n=i.data)||void 0===n?void 0:null===(a=n.post)||void 0===a?void 0:a.uuid},t={count:T.count+1,results:[e,...T.results]};P(t)}m.toast.success((null==i?void 0:null===(t=i.data)||void 0===t?void 0:t.message)||(null==i?void 0:i.message))}else m.toast.error(null==i?void 0:i.message);w(void 0),k(!1),I(!1)}else m.toast.warn("Content is empty"),k(!1)};return(0,s.jsxs)(c.Z,{className:"btn btn-sm btn-primary hover:text-base-300 rounded-full ".concat(x),classNameForm:"overflow-y-visible px-0 pt-0",classNameFooter:"mr-6 mt-4",title:"New Post",handleSubmit:O,children:[(0,s.jsxs)("div",{className:"p-6 pb-3 max-h-96 ".concat(N&&"overflow-auto"),children:[(0,s.jsx)("h3",{className:"font-bold text-lg",children:"Create A Post"}),v&&(0,s.jsxs)("details",{className:"dropdown",ref:L,children:[(0,s.jsxs)("summary",{tabIndex:"0",className:"list-none cursor-pointer my-auto whitespace-nowrap font-medium text-sm hover:text-accent-focus",children:[j.name,(0,s.jsx)("i",{className:"ri-arrow-drop-down-line"})]}),(0,s.jsx)("ul",{tabIndex:"0",className:"z-50 overflow-y-scroll max-h-56 dropdown-content menu block shadow-lg bg-base-100 rounded-md",children:(null==R?void 0:null===(t=R.results)||void 0===t?void 0:t.length)>0?null==R?void 0:null===(l=R.results)||void 0===l?void 0:l.map((e,t)=>(0,s.jsx)("li",{className:"flex items-center py-1",children:(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)("i",{className:"ri-hashtag text-2xl"}),(0,s.jsx)("button",{className:"capitalize hover:text-accent-focus",onClick:()=>{L.current.removeAttribute("open"),b({id:e.id,name:e.name})},children:e.name})]})},"channel-".concat(t))):(0,s.jsx)("li",{className:"flex items-center py-1",children:(0,s.jsx)("div",{className:"w-full",children:"No channel in this school"})})})]}),(0,s.jsx)(o.kg,{editor:A,required:!0,className:"my-2 text-base overflow-y-auto w-full bg-transparent"}),N&&(0,s.jsx)(n,{selectedImage:N,setSelectedImage:w})]}),(0,s.jsx)("div",{className:"px-5 py-4 space-x-5 bg-neutral",children:(0,s.jsx)(i,{setSelectedImage:w})}),(0,s.jsxs)("div",{className:"py-3 px-4 flex flex-col",children:[(0,s.jsx)("label",{className:"text-sm font-medium inline",htmlFor:"title",children:"Title"}),(0,s.jsx)("input",{className:"w-full mt-2 py-2 px-4 border-neutral input h-auto rounded-full",name:"title",id:"title",value:y,required:!0,onChange:e=>C(e.target.value)})]}),(0,s.jsxs)("div",{className:"py-3 px-4 flex flex-col",children:[(0,s.jsx)("label",{className:"text-sm font-medium inline",htmlFor:"tag",children:"Message Tags"}),(0,s.jsx)(h,{selectedText:F,setSelectedText:_})]})]})}}}]);