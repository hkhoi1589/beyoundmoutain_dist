(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9765],{5445:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},unstable_getImgProps:function(){return l}});let n=r(6927),i=r(529),a=r(6731),u=r(3029),o=n._(r(5296)),l=e=>{(0,a.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},s=u.Image},6394:function(e,t,r){e.exports=r(5445)},5846:function(e,t,r){e.exports=r(7095)},730:function(e,t,r){"use strict";r.d(t,{ZP:function(){return ee}});var n,i=r(6006),a=r(3276);let u=()=>{},o=u(),l=Object,s=e=>e===o,d=e=>"function"==typeof e,c=(e,t)=>({...e,...t}),f=e=>d(e.then),g=new WeakMap,E=0,p=e=>{let t,r;let n=typeof e,i=e&&e.constructor,a=i==Date;if(l(e)!==e||a||i==RegExp)t=a?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(t=g.get(e))return t;if(t=++E+"~",g.set(e,t),i==Array){for(r=0,t="@";r<e.length;r++)t+=p(e[r])+",";g.set(e,t)}if(i==l){t="#";let n=l.keys(e).sort();for(;!s(r=n.pop());)s(e[r])||(t+=r+":"+p(e[r])+",");g.set(e,t)}}return t},_=new WeakMap,w={},h={},m="undefined",y=typeof window!=m,v=typeof document!=m,b=()=>y&&typeof window.requestAnimationFrame!=m,R=(e,t)=>{let r=_.get(e);return[()=>!s(t)&&e.get(t)||w,n=>{if(!s(t)){let i=e.get(t);t in h||(h[t]=i),r[5](t,c(i,n),i||w)}},r[6],()=>!s(t)&&t in h?h[t]:!s(t)&&e.get(t)||w]},T=!0,[O,V]=y&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[u,u],S={initFocus:e=>(v&&document.addEventListener("visibilitychange",e),O("focus",e),()=>{v&&document.removeEventListener("visibilitychange",e),V("focus",e)}),initReconnect:e=>{let t=()=>{T=!0,e()},r=()=>{T=!1};return O("online",t),O("offline",r),()=>{V("online",t),V("offline",r)}}},L=!i.useId,k=!y||"Deno"in window,C=e=>b()?window.requestAnimationFrame(e):setTimeout(e,1),N=k?i.useEffect:i.useLayoutEffect,A="undefined"!=typeof navigator&&navigator.connection,D=!k&&A&&(["slow-2g","2g"].includes(A.effectiveType)||A.saveData),I=e=>{if(d(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?p(e):"",t]},P=0,x=()=>++P;var M={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function F(...e){let[t,r,n,i]=e,a=c({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{}),u=a.populateCache,l=a.rollbackOnError,g=a.optimisticData,E=!1!==a.revalidate,p=e=>"function"==typeof l?l(e):!1!==l,w=a.throwOnError;if(d(r)){let e=[],n=t.keys();for(let i of n)!/^\$(inf|sub)\$/.test(i)&&r(t.get(i)._k)&&e.push(i);return Promise.all(e.map(h))}return h(r);async function h(r){let i;let[a]=I(r);if(!a)return;let[l,c]=R(t,a),[h,m,y,v]=_.get(t),b=h[a],T=()=>E&&(delete y[a],delete v[a],b&&b[0])?b[0](2).then(()=>l().data):l().data;if(e.length<3)return T();let O=n,V=x();m[a]=[V,0];let S=!s(g),L=l(),k=L.data,C=L._c,N=s(C)?k:C;if(S&&c({data:g=d(g)?g(N,k):g,_c:N}),d(O))try{O=O(N)}catch(e){i=e}if(O&&f(O)){if(O=await O.catch(e=>{i=e}),V!==m[a][0]){if(i)throw i;return O}i&&S&&p(i)&&(u=!0,c({data:O=N,_c:o}))}u&&!i&&(d(u)&&(O=u(O,N)),c({data:O,error:o,_c:o})),m[a][1]=x();let A=await T();if(c({_c:o}),i){if(w)throw i;return}return u?A:O}}let U=(e,t)=>{for(let r in e)e[r][0]&&e[r][0](t)},j=(e,t)=>{if(!_.has(e)){let r=c(S,t),n={},i=F.bind(o,e),a=u,l={},s=(e,t)=>{let r=l[e]||[];return l[e]=r,r.push(t),()=>r.splice(r.indexOf(t),1)},d=(t,r,n)=>{e.set(t,r);let i=l[t];if(i)for(let e of i)e(r,n)},f=()=>{if(!_.has(e)&&(_.set(e,[n,{},{},{},i,d,s]),!k)){let t=r.initFocus(setTimeout.bind(o,U.bind(o,n,0))),i=r.initReconnect(setTimeout.bind(o,U.bind(o,n,1)));a=()=>{t&&t(),i&&i(),_.delete(e)}}};return f(),[e,i,f,a]}return[e,_.get(e)[4]]},[W,q]=j(new Map),z=c({onLoadingSlow:u,onSuccess:u,onError:u,onErrorRetry:(e,t,r,n,i)=>{let a=r.errorRetryCount,u=i.retryCount,o=~~((Math.random()+.5)*(1<<(u<8?u:8)))*r.errorRetryInterval;(s(a)||!(u>a))&&setTimeout(n,o,i)},onDiscarded:u,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:D?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:D?5e3:3e3,compare:(e,t)=>p(e)==p(t),isPaused:()=>!1,cache:W,mutate:q,fallback:{}},{isOnline:()=>T,isVisible:()=>{let e=v&&document.visibilityState;return s(e)||"hidden"!==e}}),J=(e,t)=>{let r=c(e,t);if(t){let{use:n,fallback:i}=e,{use:a,fallback:u}=t;n&&a&&(r.use=n.concat(a)),i&&u&&(r.fallback=c(i,u))}return r},$=(0,i.createContext)({}),G=y&&window.__SWR_DEVTOOLS_USE__,Z=G?window.__SWR_DEVTOOLS_USE__:[],B=e=>d(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],H=()=>c(z,(0,i.useContext)($)),K=Z.concat(e=>(t,r,n)=>{let i=r&&((...e)=>{let[n]=I(t),[,,,i]=_.get(W),a=i[n];return s(a)?r(...e):(delete i[n],a)});return e(t,i,n)}),Q=(e,t,r)=>{let n=t[e]||(t[e]=[]);return n.push(r),()=>{let e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}};G&&(window.__SWR_DEVTOOLS_REACT__=i);let X=i.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),Y={dedupe:!0};l.defineProperty(e=>{let{value:t}=e,r=(0,i.useContext)($),n=d(t),a=(0,i.useMemo)(()=>n?t(r):t,[n,r,t]),u=(0,i.useMemo)(()=>n?a:J(r,a),[n,r,a]),l=a&&a.provider,s=(0,i.useRef)(o);l&&!s.current&&(s.current=j(l(u.cache||W),a));let f=s.current;return f&&(u.cache=f[0],u.mutate=f[1]),N(()=>{if(f)return f[2]&&f[2](),f[3]},[]),(0,i.createElement)($.Provider,c(e,{value:u}))},"defaultValue",{value:z});let ee=(n=(e,t,r)=>{let{cache:n,compare:u,suspense:l,fallbackData:f,revalidateOnMount:g,revalidateIfStale:E,refreshInterval:p,refreshWhenHidden:w,refreshWhenOffline:h,keepPreviousData:m}=r,[y,v,b,T]=_.get(n),[O,V]=I(e),S=(0,i.useRef)(!1),A=(0,i.useRef)(!1),D=(0,i.useRef)(O),P=(0,i.useRef)(t),U=(0,i.useRef)(r),j=()=>U.current,W=()=>j().isVisible()&&j().isOnline(),[q,z,J,$]=R(n,O),G=(0,i.useRef)({}).current,Z=s(f)?r.fallback[O]:f,B=(e,t)=>{for(let r in G)if("data"===r){if(!u(e[r],t[r])&&(!s(e[r])||!u(eu,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},H=(0,i.useMemo)(()=>{let e=!!O&&!!t&&(s(g)?!j().isPaused()&&!l&&(!!s(E)||E):g),r=t=>{let r=c(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=q(),i=$(),a=r(n),u=n===i?a:r(i),o=a;return[()=>{let e=r(q()),t=B(e,o);return t?(o.data=e.data,o.isLoading=e.isLoading,o.isValidating=e.isValidating,o.error=e.error,o):(o=e,e)},()=>u]},[n,O]),K=(0,a.useSyncExternalStore)((0,i.useCallback)(e=>J(O,(t,r)=>{B(r,t)||e()}),[n,O]),H[0],H[1]),ee=!S.current,et=y[O]&&y[O].length>0,er=K.data,en=s(er)?Z:er,ei=K.error,ea=(0,i.useRef)(en),eu=m?s(er)?ea.current:er:en,eo=(!et||!!s(ei))&&(ee&&!s(g)?g:!j().isPaused()&&(l?!s(en)&&E:s(en)||E)),el=!!(O&&t&&ee&&eo),es=s(K.isValidating)?el:K.isValidating,ed=s(K.isLoading)?el:K.isLoading,ec=(0,i.useCallback)(async e=>{let t,n;let i=P.current;if(!O||!i||A.current||j().isPaused())return!1;let a=!0,l=e||{},c=!b[O]||!l.dedupe,f=()=>L?!A.current&&O===D.current&&S.current:O===D.current,g={isValidating:!1,isLoading:!1},E=()=>{z(g)},p=()=>{let e=b[O];e&&e[1]===n&&delete b[O]},_={isValidating:!0};s(q().data)&&(_.isLoading=!0);try{if(c&&(z(_),r.loadingTimeout&&s(q().data)&&setTimeout(()=>{a&&f()&&j().onLoadingSlow(O,r)},r.loadingTimeout),b[O]=[i(V),x()]),[t,n]=b[O],t=await t,c&&setTimeout(p,r.dedupingInterval),!b[O]||b[O][1]!==n)return c&&f()&&j().onDiscarded(O),!1;g.error=o;let e=v[O];if(!s(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return E(),c&&f()&&j().onDiscarded(O),!1;let l=q().data;g.data=u(l,t)?l:t,c&&f()&&j().onSuccess(t,O,r)}catch(r){p();let e=j(),{shouldRetryOnError:t}=e;!e.isPaused()&&(g.error=r,c&&f()&&(e.onError(r,O,e),(!0===t||d(t)&&t(r))&&W()&&e.onErrorRetry(r,O,e,e=>{let t=y[O];t&&t[0]&&t[0](M.ERROR_REVALIDATE_EVENT,e)},{retryCount:(l.retryCount||0)+1,dedupe:!0})))}return a=!1,E(),!0},[O,n]),ef=(0,i.useCallback)((...e)=>F(n,D.current,...e),[]);if(N(()=>{P.current=t,U.current=r,s(er)||(ea.current=er)}),N(()=>{if(!O)return;let e=ec.bind(o,Y),t=0,r=Q(O,y,(r,n={})=>{if(r==M.FOCUS_EVENT){let r=Date.now();j().revalidateOnFocus&&r>t&&W()&&(t=r+j().focusThrottleInterval,e())}else if(r==M.RECONNECT_EVENT)j().revalidateOnReconnect&&W()&&e();else if(r==M.MUTATE_EVENT)return ec();else if(r==M.ERROR_REVALIDATE_EVENT)return ec(n)});return A.current=!1,D.current=O,S.current=!0,z({_k:V}),eo&&(s(en)||k?e():C(e)),()=>{A.current=!0,r()}},[O]),N(()=>{let e;function t(){let t=d(p)?p(q().data):p;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!q().error&&(w||j().isVisible())&&(h||j().isOnline())?ec(Y).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[p,w,h,O]),(0,i.useDebugValue)(eu),l&&s(en)&&O){if(!L&&k)throw Error("Fallback data is required when using suspense in SSR.");P.current=t,U.current=r,A.current=!1;let e=T[O];if(!s(e)){let t=ef(e);X(t)}if(s(ei)){let e=ec(Y);s(eu)||(e.status="fulfilled",e.value=!0),X(e)}else throw ei}return{mutate:ef,get data(){return G.data=!0,eu},get error(){return G.error=!0,ei},get isValidating(){return G.isValidating=!0,es},get isLoading(){return G.isLoading=!0,ed}}},function(...e){let t=H(),[r,i,a]=B(e),u=J(t,a),o=n,{use:l}=u,s=(l||[]).concat(K);for(let e=s.length;e--;)o=s[e](o);return o(r,i||u.fetcher||null,u)})}}]);