(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[159],{4712:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return g}});let n=r(6927),i=r(5909),o=i._(r(6006)),a=n._(r(2930)),l=r(2017),u=r(6374),s=r(168);r(7653);let d=n._(r(5840)),c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e,t,r,n,i,o){let a=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===a)return;e["data-loaded-src"]=a;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function p(e){let[t,r]=o.version.split("."),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let m=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:a,width:l,decoding:u,className:s,style:d,fetchPriority:c,placeholder:m,loading:g,unoptimized:h,fill:y,onLoadRef:b,onLoadingCompleteRef:v,setBlurComplete:_,setShowAltText:w,onLoad:S,onError:O,...P}=e;return o.default.createElement("img",{...P,...p(c),loading:g,width:l,height:a,decoding:u,"data-nimg":y?"fill":"1",className:s,style:d,sizes:i,srcSet:n,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(O&&(e.src=e.src),e.complete&&f(e,m,b,v,_,h))},[r,m,b,v,_,O,h,t]),onLoad:e=>{let t=e.currentTarget;f(t,m,b,v,_,h)},onError:e=>{w(!0),"blur"===m&&_(!0),O&&O(e)}})}),g=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(s.ImageConfigContext),n=(0,o.useMemo)(()=>{let e=c||r||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:i,onLoadingComplete:f}=e,g=(0,o.useRef)(i);(0,o.useEffect)(()=>{g.current=i},[i]);let h=(0,o.useRef)(f);(0,o.useEffect)(()=>{h.current=f},[f]);let[y,b]=(0,o.useState)(!1),[v,_]=(0,o.useState)(!1),{props:w,meta:S}=(0,l.getImgProps)(e,{defaultLoader:d.default,imgConf:n,blurComplete:y,showAltText:v});return o.default.createElement(o.default.Fragment,null,o.default.createElement(m,{...w,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:b,setShowAltText:_,ref:t}),S.priority?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+w.src+w.srcSet+w.sizes,rel:"preload",as:"image",href:w.srcSet?void 0:w.src,imageSrcSet:w.srcSet,imageSizes:w.sizes,crossOrigin:w.crossOrigin,referrerPolicy:w.referrerPolicy,...p(w.fetchPriority)})):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4626:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return o}});let n=r(6927),i=n._(r(6006)),o=i.default.createContext({})},7290:function(e,t){"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},2017:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),r(7653);let n=r(2325),i=r(6374),o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function a(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var r;let u,s,d,{src:c,sizes:f,unoptimized:p=!1,priority:m=!1,loading:g,className:h,quality:y,width:b,height:v,fill:_=!1,style:w,onLoad:S,onLoadingComplete:O,placeholder:P="empty",blurDataURL:j,fetchPriority:C,layout:E,objectFit:x,objectPosition:z,lazyBoundary:k,lazyRoot:M,...I}=e,{imgConf:A,showAltText:R,blurComplete:D,defaultLoader:N}=t,L=A||o||i.imageConfigDefault;if("allSizes"in L)u=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);u={...L,allSizes:e,deviceSizes:t}}let T=I.loader||N;delete I.loader,delete I.srcSet;let U="__next_img_default"in T;if(U){if("custom"===u.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=T;T=t=>{let{config:r,...n}=t;return e(n)}}if(E){"fill"===E&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!f&&(f=t)}let F="",B=l(b),W=l(v);if("object"==typeof(r=c)&&(a(r)||void 0!==r.src)){let e=a(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,d=e.blurHeight,j=j||e.blurDataURL,F=e.src,!_){if(B||W){if(B&&!W){let t=B/e.width;W=Math.round(e.height*t)}else if(!B&&W){let t=W/e.height;B=Math.round(e.width*t)}}else B=e.width,W=e.height}}let G=!m&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:F)||c.startsWith("data:")||c.startsWith("blob:"))&&(p=!0,G=!1),u.unoptimized&&(p=!0),U&&c.endsWith(".svg")&&!u.dangerouslyAllowSVG&&(p=!0),m&&(C="high");let V=l(y),$=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:x,objectPosition:z}:{},R?{}:{color:"transparent"},w),H="blur"===P&&j&&!D?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:B,heightInt:W,blurWidth:s,blurHeight:d,blurDataURL:j,objectFit:$.objectFit})+'")'}:{},q=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,a),d=u.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:u.map((e,n)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:l({config:t,src:r,quality:o,width:u[d]})}}({config:u,src:c,unoptimized:p,width:B,quality:V,sizes:f,loader:T}),Y={...I,loading:G?"lazy":g,fetchPriority:C,width:B,height:W,decoding:"async",className:h,style:{...$,...H},sizes:q.sizes,srcSet:q.srcSet,src:q.src},J={unoptimized:p,priority:m,placeholder:P,fill:_};return{props:Y,meta:J}}},2930:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return d},default:function(){return m}});let n=r(6927),i=r(5909),o=i._(r(6006)),a=n._(r(9488)),l=r(4626),u=r(6436),s=r(7290);function d(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(7653);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:r}=t;return e.reduce(c,[]).reverse().concat(d(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,o.useContext)(l.AmpStateContext),n=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2325:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=n||t,u=i||r,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&u?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+l+" "+u+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&i?"1":"20")+"'/%3E"+s+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},168:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let n=r(6927),i=n._(r(6006)),o=r(6374),a=i.default.createContext(o.imageConfigDefault)},6374:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},5840:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},9488:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(5909),i=n._(r(6006)),o=i.useLayoutEffect,a=i.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function n(){if(t&&t.mountedInstances){let n=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(n,e))}}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=n),()=>{t&&(t._pendingUpdate=n)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7653:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},3177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(6006),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,o={},s=null,d=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,n)&&!u.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:i,type:e,key:s,ref:d,props:o,_owner:l.current}}t.Fragment=o,t.jsx=s,t.jsxs=s},9268:function(e,t,r){"use strict";e.exports=r(3177)},5846:function(e,t,r){e.exports=r(7477)}}]);