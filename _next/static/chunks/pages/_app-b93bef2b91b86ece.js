(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,n){"use strict";var r,a;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(a=n.g.process)?void 0:a.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5964)}])},5964:function(e,t,n){"use strict";let r,a,i,o;n.r(t),n.d(t,{default:function(){return nM}});var s,l,c,u,d,f,p,h,g=n(5893),m=n(1176),v=n(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=63&a|128):(64512&a)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++r)),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=63&a|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=63&a|128)}return t},y=function(e){let t=[],n=0,r=0;for(;n<e.length;){let a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){let i=e[n++];t[r++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){let i=e[n++],o=e[n++],s=e[n++],l=((7&a)<<18|(63&i)<<12|(63&o)<<6|63&s)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{let i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&o)}}return t.join("")},w={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let a=e[t],i=t+1<e.length,o=i?e[t+1]:0,s=t+2<e.length,l=s?e[t+2]:0,c=a>>2,u=(3&a)<<4|o>>4,d=(15&o)<<2|l>>6,f=63&l;s||(f=64,i||(d=64)),r.push(n[c],n[u],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(b(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):y(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let a=n[e.charAt(t++)],i=t<e.length,o=i?n[e.charAt(t)]:0;++t;let s=t<e.length,l=s?n[e.charAt(t)]:64;++t;let c=t<e.length,u=c?n[e.charAt(t)]:64;if(++t,null==a||null==o||null==l||null==u)throw new E;let d=a<<2|o>>4;if(r.push(d),64!==l){let e=o<<4&240|l>>2;if(r.push(e),64!==u){let e=l<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class E extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let I=function(e){let t=b(e);return w.encodeByteArray(t,!0)},S=function(e){return I(e).replace(/\./g,"")},T=function(e){try{return w.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},_=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,C=()=>{if(void 0===v||void 0===v.env)return;let e=v.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},D=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&T(e[1]);return t&&JSON.parse(t)},k=()=>{try{return _()||C()||D()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},O=()=>{var e;return null===(e=k())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}function L(){try{return"object"==typeof indexedDB}catch(e){return!1}}function N(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class B extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,B.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,M.prototype.create)}}class M{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,a=this.errors[e],i=a?a.replace(P,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",o=`${this.serviceName}: ${i} (${r}).`,s=new B(r,o,n);return s}}let P=/\{\$([^}]+)}/g;function j(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let a of n){if(!r.includes(a))return!1;let n=e[a],i=t[a];if(R(n)&&R(i)){if(!j(n,i))return!1}else if(n!==i)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}function R(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){return e&&e._delegate?e._delegate:e}class ${constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let H="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new A;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:H})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=H){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=H){return this.instances.has(e)}getOptions(e=H){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(e);n===a&&t.resolve(r)}return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),a=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;a.add(e),this.onInitCallbacks.set(r,a);let i=this.instances.get(r);return i&&e(i,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===H?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=H){return this.component?this.component.multipleInstances?e:H:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new F(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let V=[];(c=f||(f={}))[c.DEBUG=0]="DEBUG",c[c.VERBOSE=1]="VERBOSE",c[c.INFO=2]="INFO",c[c.WARN=3]="WARN",c[c.ERROR=4]="ERROR",c[c.SILENT=5]="SILENT";let K={debug:f.DEBUG,verbose:f.VERBOSE,info:f.INFO,warn:f.WARN,error:f.ERROR,silent:f.SILENT},W=f.INFO,U={[f.DEBUG]:"log",[f.VERBOSE]:"log",[f.INFO]:"info",[f.WARN]:"warn",[f.ERROR]:"error"},q=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),a=U[t];if(a)console[a](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)},G=(e,t)=>t.some(t=>e instanceof t),J=new WeakMap,Q=new WeakMap,Y=new WeakMap,X=new WeakMap,Z=new WeakMap,ee={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Q.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Y.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return et(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function et(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(et(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&J.set(t,e)}).catch(()=>{}),Z.set(t,e),t}(e);if(X.has(e))return X.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(en(this),e),et(J.get(this))}:function(...e){return et(t.apply(en(this),e))}:function(e,...n){let r=t.call(en(this),e,...n);return Y.set(r,e.sort?e.sort():[e]),et(r)}:(t instanceof IDBTransaction&&function(e){if(Q.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)});Q.set(e,t)}(t),G(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,ee):t;return n!==e&&(X.set(e,n),Z.set(n,e)),n}let en=e=>Z.get(e),er=["get","getKey","getAll","getAllKeys","count"],ea=["put","add","delete","clear"],ei=new Map;function eo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(ei.get(t))return ei.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,a=ea.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||er.includes(n)))return;let i=async function(e,...t){let i=this.transaction(e,a?"readwrite":"readonly"),o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),a&&i.done]))[0]};return ei.set(t,i),i}ee={...s=ee,get:(e,t,n)=>eo(e,t)||s.get(e,t,n),has:(e,t)=>!!eo(e,t)||s.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let el="@firebase/app",ec="0.9.12",eu=new class{constructor(e){this.name=e,this._logLevel=W,this._logHandler=q,this._userLogHandler=null,V.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in f))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?K[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,f.DEBUG,...e),this._logHandler(this,f.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,f.VERBOSE,...e),this._logHandler(this,f.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,f.INFO,...e),this._logHandler(this,f.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,f.WARN,...e),this._logHandler(this,f.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,f.ERROR,...e),this._logHandler(this,f.ERROR,...e)}}("@firebase/app"),ed="[DEFAULT]",ef={[el]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ep=new Map,eh=new Map;function eg(e){let t=e.name;if(eh.has(t))return eu.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(eh.set(t,e),ep.values()))!function(e,t){try{e.container.addComponent(t)}catch(n){eu.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}(n,e);return!0}function em(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}let ev=new M("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new $("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ev.create("app-deleted",{appName:this._name})}}function ey(e,t={}){let n=e;if("object"!=typeof t){let e=t;t={name:e}}let r=Object.assign({name:ed,automaticDataCollectionEnabled:!1},t),a=r.name;if("string"!=typeof a||!a)throw ev.create("bad-app-name",{appName:String(a)});if(n||(n=O()),!n)throw ev.create("no-options");let i=ep.get(a);if(i){if(j(n,i.options)&&j(r,i.config))return i;throw ev.create("duplicate-app",{appName:a})}let o=new z(a);for(let e of eh.values())o.addComponent(e);let s=new eb(n,r,o);return ep.set(a,s),s}function ew(){return Array.from(ep.values())}function eE(e,t,n){var r;let a=null!==(r=ef[e])&&void 0!==r?r:e;n&&(a+=`-${n}`);let i=a.match(/\s|\//),o=t.match(/\s|\//);if(i||o){let e=[`Unable to register library "${a}" with version "${t}":`];i&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eu.warn(e.join(" "));return}eg(new $(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}let eI="firebase-heartbeat-store",eS=null;function eT(){return eS||(eS=(function(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){let o=indexedDB.open(e,1),s=et(o);return r&&o.addEventListener("upgradeneeded",e=>{r(et(o.result),e.oldVersion,e.newVersion,et(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{i&&e.addEventListener("close",()=>i()),a&&e.addEventListener("versionchange",e=>a(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(eI)}}).catch(e=>{throw ev.create("idb-open",{originalErrorMessage:e.message})})),eS}async function e_(e){try{let t=await eT(),n=await t.transaction(eI).objectStore(eI).get(eD(e));return n}catch(e){if(e instanceof B)eu.warn(e.message);else{let t=ev.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});eu.warn(t.message)}}}async function eC(e,t){try{let n=await eT(),r=n.transaction(eI,"readwrite"),a=r.objectStore(eI);await a.put(t,eD(e)),await r.done}catch(e){if(e instanceof B)eu.warn(e.message);else{let t=ev.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});eu.warn(t.message)}}}function eD(e){return`${e.name}!${e.options.appId}`}class ek{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new eA(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=eO();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=eO(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){let n=[],r=e.slice();for(let a of e){let e=n.find(e=>e.agent===a.agent);if(e){if(e.dates.push(a.date),eL(n)>t){e.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),eL(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=S(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function eO(){let e=new Date;return e.toISOString().substring(0,10)}class eA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!L()&&N().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await e_(this.app);return e||{heartbeats:[]}}}async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return eC(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return eC(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function eL(e){return S(JSON.stringify({version:2,heartbeats:e})).length}eg(new $("platform-logger",e=>new es(e),"PRIVATE")),eg(new $("heartbeat",e=>new ek(e),"PRIVATE")),eE(el,ec,""),eE(el,ec,"esm2017"),eE("fire-js",""),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */eE("firebase","9.22.2","app");let eN=(e,t)=>t.some(t=>e instanceof t),eB=new WeakMap,eM=new WeakMap,eP=new WeakMap,ej=new WeakMap,eR=new WeakMap,ex={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return eM.get(e);if("objectStoreNames"===t)return e.objectStoreNames||eP.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return e$(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function e$(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(e$(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&eB.set(t,e)}).catch(()=>{}),eR.set(t,e),t}(e);if(ej.has(e))return ej.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(eH(this),e),e$(eB.get(this))}:function(...e){return e$(t.apply(eH(this),e))}:function(e,...n){let r=t.call(eH(this),e,...n);return eP.set(r,e.sort?e.sort():[e]),e$(r)}:(t instanceof IDBTransaction&&function(e){if(eM.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)});eM.set(e,t)}(t),eN(t,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,ex):t;return n!==e&&(ej.set(e,n),eR.set(n,e)),n}let eH=e=>eR.get(e);function eF(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){let o=indexedDB.open(e,t),s=e$(o);return r&&o.addEventListener("upgradeneeded",e=>{r(e$(o.result),e.oldVersion,e.newVersion,e$(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),s.then(e=>{i&&e.addEventListener("close",()=>i()),a&&e.addEventListener("versionchange",()=>a())}).catch(()=>{}),s}function ez(e,{blocked:t}={}){let n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",()=>t()),e$(n).then(()=>void 0)}let eV=["get","getKey","getAll","getAllKeys","count"],eK=["put","add","delete","clear"],eW=new Map;function eU(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(eW.get(t))return eW.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,a=eK.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||eV.includes(n)))return;let i=async function(e,...t){let i=this.transaction(e,a?"readwrite":"readonly"),o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),a&&i.done]))[0]};return eW.set(t,i),i}ex={...l=ex,get:(e,t,n)=>eU(e,t)||l.get(e,t,n),has:(e,t)=>!!eU(e,t)||l.has(e,t)};let eq="@firebase/installations",eG="0.6.4",eJ=`w:${eG}`,eQ="FIS_v2",eY=new M("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function eX(e){return e instanceof B&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eZ({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function e0(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function e1(e,t){let n=await t.json(),r=n.error;return eY.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function e2({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function e4(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e5({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let r=eZ(e),a=e2(e),i=t.getImmediate({optional:!0});if(i){let e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}let o={fid:n,authVersion:eQ,appId:e.appId,sdkVersion:eJ},s={method:"POST",headers:a,body:JSON.stringify(o)},l=await e4(()=>fetch(r,s));if(l.ok){let e=await l.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:e0(e.authToken)};return t}throw await e1("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e6(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e3=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e8(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e7=new Map;function e9(e,t){let n=e8(e);te(n,t),function(e,t){let n=(!tt&&"BroadcastChannel"in self&&((tt=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{te(e.data.key,e.data.fid)}),tt);n&&n.postMessage({key:e,fid:t}),0===e7.size&&tt&&(tt.close(),tt=null)}(n,t)}function te(e,t){let n=e7.get(e);if(n)for(let e of n)e(t)}let tt=null,tn="firebase-installations-store",tr=null;function ta(){return tr||(tr=eF("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(tn)}})),tr}async function ti(e,t){let n=e8(e),r=await ta(),a=r.transaction(tn,"readwrite"),i=a.objectStore(tn),o=await i.get(n);return await i.put(t,n),await a.done,o&&o.fid===t.fid||e9(e,t.fid),t}async function to(e){let t=e8(e),n=await ta(),r=n.transaction(tn,"readwrite");await r.objectStore(tn).delete(t),await r.done}async function ts(e,t){let n=e8(e),r=await ta(),a=r.transaction(tn,"readwrite"),i=a.objectStore(tn),o=await i.get(n),s=t(o);return void 0===s?await i.delete(n):await i.put(s,n),await a.done,s&&(!o||o.fid!==s.fid)&&e9(e,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tl(e){let t;let n=await ts(e.appConfig,n=>{let r=function(e){let t=e||{fid:function(){try{let e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;let n=function(e){let t=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}(e);return t.substr(0,22)}(e);return e3.test(n)?n:""}catch(e){return""}}(),registrationStatus:0};return tf(t)}(n),a=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){let e=Promise.reject(eY.create("app-offline"));return{installationEntry:t,registrationPromise:e}}let n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=tc(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:tu(e)}:{installationEntry:t}}(e,r);return t=a.registrationPromise,a.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function tc(e,t){try{let n=await e5(e,t);return ti(e.appConfig,n)}catch(n){throw eX(n)&&409===n.customData.serverCode?await to(e.appConfig):await ti(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function tu(e){let t=await td(e.appConfig);for(;1===t.registrationStatus;)await e6(100),t=await td(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:n}=await tl(e);return n||t}return t}function td(e){return ts(e,e=>{if(!e)throw eY.create("installation-not-found");return tf(e)})}function tf(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tp({appConfig:e,heartbeatServiceProvider:t},n){let r=function(e,{fid:t}){return`${eZ(e)}/${t}/authTokens:generate`}(e,n),a=function(e,{refreshToken:t}){let n=e2(e);return n.append("Authorization",`${eQ} ${t}`),n}(e,n),i=t.getImmediate({optional:!0});if(i){let e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}let o={installation:{sdkVersion:eJ,appId:e.appId}},s={method:"POST",headers:a,body:JSON.stringify(o)},l=await e4(()=>fetch(r,s));if(l.ok){let e=await l.json(),t=e0(e);return t}throw await e1("Generate Auth Token",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function th(e,t=!1){let n;let r=await ts(e.appConfig,r=>{var a;if(!tb(r))throw eY.create("not-registered");let i=r.authToken;if(!t&&2===(a=i).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(a))return r;if(1===i.requestStatus)return n=tg(e,t),r;{if(!navigator.onLine)throw eY.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=tv(e,t),t}}),a=n?await n:r.authToken;return a}async function tg(e,t){let n=await tm(e.appConfig);for(;1===n.authToken.requestStatus;)await e6(100),n=await tm(e.appConfig);let r=n.authToken;return 0===r.requestStatus?th(e,t):r}function tm(e){return ts(e,e=>{if(!tb(e))throw eY.create("not-registered");let t=e.authToken;return 1===t.requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function tv(e,t){try{let n=await tp(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ti(e.appConfig,r),n}catch(n){if(eX(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))await to(e.appConfig);else{let n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ti(e.appConfig,n)}throw n}}function tb(e){return void 0!==e&&2===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ty(e){let{installationEntry:t,registrationPromise:n}=await tl(e);return n?n.catch(console.error):th(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tw(e,t=!1){await tE(e);let n=await th(e,t);return n.token}async function tE(e){let{registrationPromise:t}=await tl(e);t&&await t}function tI(e){return eY.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tS="installations",tT=e=>{let t=e.getProvider("app").getImmediate(),n=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw tI("App Configuration");if(!e.name)throw tI("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw tI(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),r=em(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},t_=e=>{let t=e.getProvider("app").getImmediate(),n=em(t,tS).getImmediate();return{getId:()=>ty(n),getToken:e=>tw(n,e)}};eg(new $(tS,tT,"PUBLIC")),eg(new $("installations-internal",t_,"PRIVATE")),eE(eq,eG),eE(eq,eG,"esm2017");let tC="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",tD="google.c.a.c_id";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(e){let t=new Uint8Array(e),n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}(u=p||(p={}))[u.DATA_MESSAGE=1]="DATA_MESSAGE",u[u.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION",(d=h||(h={})).PUSH_RECEIVED="push-received",d.NOTIFICATION_CLICKED="notification-clicked";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tO="fcm_token_details_db",tA="fcm_token_object_Store";async function tL(e){if("databases"in indexedDB){let e=await indexedDB.databases(),t=e.map(e=>e.name);if(!t.includes(tO))return null}let t=null,n=await eF(tO,5,{upgrade:async(n,r,a,i)=>{var o;if(r<2||!n.objectStoreNames.contains(tA))return;let s=i.objectStore(tA),l=await s.index("fcmSenderId").get(e);if(await s.clear(),l){if(2===r){if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:null!==(o=l.createTime)&&void 0!==o?o:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:"string"==typeof l.vapidKey?l.vapidKey:tk(l.vapidKey)}}}else 3===r?t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:tk(l.auth),p256dh:tk(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:tk(l.vapidKey)}}:4===r&&(t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:tk(l.auth),p256dh:tk(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:tk(l.vapidKey)}})}}});return n.close(),await ez(tO),await ez("fcm_vapid_details_db"),await ez("undefined"),!function(e){if(!e||!e.subscriptionOptions)return!1;let{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?null:t}let tN="firebase-messaging-store",tB=null;function tM(){return tB||(tB=eF("firebase-messaging-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(tN)}})),tB}async function tP(e){let t=function({appConfig:e}){return e.appId}(e),n=await tM(),r=await n.transaction(tN).objectStore(tN).get(t);if(r)return r;{let t=await tL(e.appConfig.senderId);if(t)return await tj(e,t),t}}async function tj(e,t){let n=function({appConfig:e}){return e.appId}(e),r=await tM(),a=r.transaction(tN,"readwrite");return await a.objectStore(tN).put(t,n),await a.done,t}async function tR(e){let t=function({appConfig:e}){return e.appId}(e),n=await tM(),r=n.transaction(tN,"readwrite");await r.objectStore(tN).delete(t),await r.done}let tx=new M("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t$(e,t){let n;let r=await tV(e),a=tK(t),i={method:"POST",headers:r,body:JSON.stringify(a)};try{let t=await fetch(tz(e.appConfig),i);n=await t.json()}catch(e){throw tx.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(n.error){let e=n.error.message;throw tx.create("token-subscribe-failed",{errorInfo:e})}if(!n.token)throw tx.create("token-subscribe-no-token");return n.token}async function tH(e,t){let n;let r=await tV(e),a=tK(t.subscriptionOptions),i={method:"PATCH",headers:r,body:JSON.stringify(a)};try{let r=await fetch(`${tz(e.appConfig)}/${t.token}`,i);n=await r.json()}catch(e){throw tx.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(n.error){let e=n.error.message;throw tx.create("token-update-failed",{errorInfo:e})}if(!n.token)throw tx.create("token-update-no-token");return n.token}async function tF(e,t){let n=await tV(e);try{let r=await fetch(`${tz(e.appConfig)}/${t}`,{method:"DELETE",headers:n}),a=await r.json();if(a.error){let e=a.error.message;throw tx.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw tx.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function tz({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}async function tV({appConfig:e,installations:t}){let n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function tK({p256dh:e,auth:t,endpoint:n,vapidKey:r}){let a={web:{endpoint:n,auth:t,p256dh:e}};return r!==tC&&(a.web.applicationPubKey=r),a}async function tW(e){let t=await tJ(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:tk(t.getKey("auth")),p256dh:tk(t.getKey("p256dh"))},r=await tP(e.firebaseDependencies);if(!r)return tG(e.firebaseDependencies,n);if(function(e,t){let n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,a=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&r&&a&&i}(r.subscriptionOptions,n))return Date.now()>=r.createTime+6048e5?tq(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await tF(e.firebaseDependencies,r.token)}catch(e){console.warn(e)}return tG(e.firebaseDependencies,n)}async function tU(e){let t=await tP(e.firebaseDependencies);t&&(await tF(e.firebaseDependencies,t.token),await tR(e.firebaseDependencies));let n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function tq(e,t){try{let n=await tH(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await tj(e.firebaseDependencies,r),n}catch(t){throw await tU(e),t}}async function tG(e,t){let n=await t$(e,t),r={token:n,createTime:Date.now(),subscriptionOptions:t};return await tj(e,r),r.token}async function tJ(e,t){let n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:function(e){let t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),a=new Uint8Array(r.length);for(let e=0;e<r.length;++e)a[e]=r.charCodeAt(e);return a}(t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tQ(e){var t;let n={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};let n=t.notification.title;n&&(e.notification.title=n);let r=t.notification.body;r&&(e.notification.body=r);let a=t.notification.image;a&&(e.notification.image=a);let i=t.notification.icon;i&&(e.notification.icon=i)}(n,e),t=n,e.data&&(t.data=e.data),function(e,t){var n,r,a,i,o;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};let s=null!==(a=null===(r=t.fcmOptions)||void 0===r?void 0:r.link)&&void 0!==a?a:null===(i=t.notification)||void 0===i?void 0:i.click_action;s&&(e.fcmOptions.link=s);let l=null===(o=t.fcmOptions)||void 0===o?void 0:o.analytics_label;l&&(e.fcmOptions.analyticsLabel=l)}(n,e),n}function tY(e,t){let n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}function tX(e){return tx.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tY("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),tY("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tZ{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;let r=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw tX("App Configuration Object");if(!e.name)throw tX("App Name");let{options:t}=e;for(let e of["projectId","apiKey","appId","messagingSenderId"])if(!t[e])throw tX(e);return{appName:e.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:r,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0(e){try{e.swRegistration=await navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}),e.swRegistration.update().catch(()=>{})}catch(e){throw tx.create("failed-service-worker-registration",{browserErrorMessage:null==e?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t1(e,t){if(t||e.swRegistration||await t0(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw tx.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t2(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=tC)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t4(e,t){if(!navigator)throw tx.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw tx.create("permission-blocked");return await t2(e,null==t?void 0:t.vapidKey),await t1(e,null==t?void 0:t.serviceWorkerRegistration),tW(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t5(e,t,n){let r=function(e){switch(e){case h.NOTIFICATION_CLICKED:return"notification_open";case h.PUSH_RECEIVED:return"notification_foreground";default:throw Error()}}(t),a=await e.firebaseDependencies.analyticsProvider.get();a.logEvent(r,{message_id:n[tD],message_name:n["google.c.a.c_l"],message_time:n["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t6(e,t){let n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===h.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler(tQ(n)):e.onMessageHandler.next(tQ(n)));let r=n.data;"object"==typeof r&&r&&tD in r&&"1"===r["google.c.a.e"]&&await t5(e,n.messageType,r)}let t3="@firebase/messaging",t8="0.12.4",t7=e=>{let t=new tZ(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",e=>t6(t,e)),t},t9=e=>{let t=e.getProvider("messaging").getImmediate();return{getToken:e=>t4(t,e)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(){try{await N()}catch(e){return!1}return"undefined"!=typeof window&&L()&&"undefined"!=typeof navigator&&!!navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(e=function(e=ed){let t=ep.get(e);if(!t&&e===ed&&O())return ey();if(!t)throw ev.create("no-app",{appName:e});return t}()){return ne().then(e=>{if(!e)throw tx.create("unsupported-browser")},e=>{throw tx.create("indexed-db-unsupported")}),em(x(e),"messaging").getImmediate()}async function nn(e,t){return t4(e=x(e),t)}eg(new $("messaging",t7,"PUBLIC")),eg(new $("messaging-internal",t9,"PRIVATE")),eE(t3,t8),eE(t3,t8,"esm2017");let nr={apiKey:"AIzaSyAkfHBzGYQcUZL0S76E3TukmzFuzCidge4",authDomain:"koolyard-84a4a.firebaseapp.com",projectId:"koolyard-84a4a",storageBucket:"koolyard-84a4a.appspot.com",messagingSenderId:"669707854180",appId:"1:669707854180:web:8a5e8aa2dd09025df95a71",measurementId:"G-PG9PCKGMHY"},na={init:async function(){try{let e=0===ew().length?ey(nr):ew()[0],t=nt(e),n=await Notification.requestPermission();if(n&&"granted"===n){let e=await m.tO.getItem("fcm_token");if(e)return{messaging:t,tokenInLocal:e};let n=await nn(t,{vapidKey:"BKsc3xU_8UlCKISztvYhJHM94W0aJfqVB2DqSgXUCkKAf42PT-t4UGBam2UbT7xTLojKwagmZncErhko2TTz49c"});if(n)return await m.tO.setItem("fcm_token",n),{messaging:t,fcm_token:n};console.log("No registration token available. Request permission to generate one.")}else console.log("Please grant notification permission!")}catch(e){return console.log("An error occurred while retrieving token. ",e),null}}};var ni=n(7294),no=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(a&&(a+=" "),a+=r);else for(n in t)t[n]&&(a&&(a+=" "),a+=n)}return a}(e))&&(r&&(r+=" "),r+=t);return r};let ns=e=>"number"==typeof e&&!isNaN(e),nl=e=>"string"==typeof e,nc=e=>"function"==typeof e,nu=e=>nl(e)||nc(e)?e:null,nd=e=>(0,ni.isValidElement)(e)||nl(e)||nc(e)||ns(e);function nf(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:a=!0,collapseDuration:i=300}=e;return function(e){let{children:o,position:s,preventExitTransition:l,done:c,nodeRef:u,isIn:d}=e,f=r?`${t}--${s}`:t,p=r?`${n}--${s}`:n,h=(0,ni.useRef)(0);return(0,ni.useLayoutEffect)(()=>{let e=u.current,t=f.split(" "),n=r=>{r.target===u.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===h.current&&"animationcancel"!==r.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,ni.useEffect)(()=>{let e=u.current,t=()=>{e.removeEventListener("animationend",t),a?function(e,t,n){void 0===n&&(n=300);let{scrollHeight:r,style:a}=e;requestAnimationFrame(()=>{a.minHeight="initial",a.height=r+"px",a.transition=`all ${n}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)})})}(e,c,i):c()};d||(l?t():(h.current=1,e.className+=` ${p}`,e.addEventListener("animationend",t)))},[d]),ni.createElement(ni.Fragment,null,o)}}function np(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}let nh={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){let n=this.list.get(e).filter(e=>e!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){let t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{let n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},ng=e=>{let{theme:t,type:n,...r}=e;return ni.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...r})},nm={info:function(e){return ni.createElement(ng,{...e},ni.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return ni.createElement(ng,{...e},ni.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return ni.createElement(ng,{...e},ni.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return ni.createElement(ng,{...e},ni.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return ni.createElement("div",{className:"Toastify__spinner"})}};function nv(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function nb(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function ny(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return ni.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":r},ni.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},ni.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function nw(e){let{delay:t,isRunning:n,closeToast:r,type:a="default",hide:i,className:o,style:s,controlledProgress:l,progress:c,rtl:u,isIn:d,theme:f}=e,p=i||l&&0===c,h={...s,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:p?0:1};l&&(h.transform=`scaleX(${c})`);let g=no("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":u}),m=nc(o)?o({rtl:u,type:a,defaultClassName:g}):no(g,o);return ni.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer",className:m,style:h,[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{d&&r()}})}let nE=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:a}=function(e){let[t,n]=(0,ni.useState)(!1),[r,a]=(0,ni.useState)(!1),i=(0,ni.useRef)(null),o=(0,ni.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,s=(0,ni.useRef)(e),{autoClose:l,pauseOnHover:c,closeToast:u,onClick:d,closeOnClick:f}=e;function p(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",v),document.addEventListener("mouseup",b),document.addEventListener("touchmove",v),document.addEventListener("touchend",b);let n=i.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=n.getBoundingClientRect(),n.style.transition="",o.x=nv(t.nativeEvent),o.y=nb(t.nativeEvent),"x"===e.draggableDirection?(o.start=o.x,o.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(o.start=o.y,o.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function h(t){if(o.boundingRect){let{top:n,bottom:r,left:a,right:i}=o.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&o.x>=a&&o.x<=i&&o.y>=n&&o.y<=r?m():g()}}function g(){n(!0)}function m(){n(!1)}function v(n){let r=i.current;o.canDrag&&r&&(o.didMove=!0,t&&m(),o.x=nv(n),o.y=nb(n),o.delta="x"===e.draggableDirection?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),r.style.transform=`translate${e.draggableDirection}(${o.delta}px)`,r.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function b(){document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",b),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",b);let t=i.current;if(o.canDrag&&o.didMove&&t){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return a(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,ni.useEffect)(()=>{s.current=e}),(0,ni.useEffect)(()=>(i.current&&i.current.addEventListener("d",g,{once:!0}),nc(e.onOpen)&&e.onOpen((0,ni.isValidElement)(e.children)&&e.children.props),()=>{let e=s.current;nc(e.onClose)&&e.onClose((0,ni.isValidElement)(e.children)&&e.children.props)}),[]),(0,ni.useEffect)(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||m(),window.addEventListener("focus",g),window.addEventListener("blur",m)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",g),window.removeEventListener("blur",m))}),[e.pauseOnFocusLoss]);let y={onMouseDown:p,onTouchStart:p,onMouseUp:h,onTouchEnd:h};return l&&c&&(y.onMouseEnter=m,y.onMouseLeave=g),f&&(y.onClick=e=>{d&&d(e),o.canCloseOnClick&&u()}),{playToast:g,pauseToast:m,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:y}}(e),{closeButton:i,children:o,autoClose:s,onClick:l,type:c,hideProgressBar:u,closeToast:d,transition:f,position:p,className:h,style:g,bodyClassName:m,bodyStyle:v,progressClassName:b,progressStyle:y,updateId:w,role:E,progress:I,rtl:S,toastId:T,deleteToast:_,isIn:C,isLoading:D,iconOut:k,closeOnClick:O,theme:A}=e,L=no("Toastify__toast",`Toastify__toast-theme--${A}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":S},{"Toastify__toast--close-on-click":O}),N=nc(h)?h({rtl:S,position:p,type:c,defaultClassName:L}):no(L,h),B=!!I||!s,M={closeToast:d,type:c,theme:A},P=null;return!1===i||(P=nc(i)?i(M):(0,ni.isValidElement)(i)?(0,ni.cloneElement)(i,M):ny(M)),ni.createElement(f,{isIn:C,done:_,position:p,preventExitTransition:n,nodeRef:r},ni.createElement("div",{id:T,onClick:l,className:N,...a,style:g,ref:r},ni.createElement("div",{...C&&{role:E},className:nc(m)?m({type:c}):no("Toastify__toast-body",m),style:v},null!=k&&ni.createElement("div",{className:no("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},k),ni.createElement("div",null,o)),P,ni.createElement(nw,{...w&&!B?{key:`pb-${w}`}:{},rtl:S,theme:A,delay:s,isRunning:t,isIn:C,closeToast:d,hide:u,type:c,style:y,className:b,controlledProgress:B,progress:I||0})))},nI=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},nS=nf(nI("bounce",!0)),nT=(nf(nI("slide",!0)),nf(nI("zoom")),nf(nI("flip")),(0,ni.forwardRef)((e,t)=>{let{getToastToRender:n,containerRef:r,isToastActive:a}=function(e){let[,t]=(0,ni.useReducer)(e=>e+1,0),[n,r]=(0,ni.useState)([]),a=(0,ni.useRef)(null),i=(0,ni.useRef)(new Map).current,o=e=>-1!==n.indexOf(e),s=(0,ni.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:o,getToast:e=>i.get(e)}).current;function l(e){let{containerId:t}=e,{limit:n}=s.props;!n||t&&s.containerId!==t||(s.count-=s.queue.length,s.queue=[])}function c(e){r(t=>null==e?[]:t.filter(t=>t!==e))}function u(){let{toastContent:e,toastProps:t,staleId:n}=s.queue.shift();f(e,t,n)}function d(e,n){var r,o;let{delay:l,staleId:d,...p}=n;if(!nd(e)||!a.current||s.props.enableMultiContainer&&p.containerId!==s.props.containerId||i.has(p.toastId)&&null==p.updateId)return;let{toastId:h,updateId:g,data:m}=p,{props:v}=s,b=()=>c(h),y=null==g;y&&s.count++;let w={...v,style:v.toastStyle,key:s.toastKey++,...Object.fromEntries(Object.entries(p).filter(e=>{let[t,n]=e;return null!=n})),toastId:h,updateId:g,data:m,closeToast:b,isIn:!1,className:nu(p.className||v.toastClassName),bodyClassName:nu(p.bodyClassName||v.bodyClassName),progressClassName:nu(p.progressClassName||v.progressClassName),autoClose:!p.isLoading&&(r=p.autoClose,o=v.autoClose,!1===r||ns(r)&&r>0?r:o),deleteToast(){let e=np(i.get(h),"removed");i.delete(h),nh.emit(4,e);let n=s.queue.length;if(s.count=null==h?s.count-s.displayedToast:s.count-1,s.count<0&&(s.count=0),n>0){let e=null==h?s.props.limit:1;if(1===n||1===e)s.displayedToast++,u();else{let t=e>n?n:e;s.displayedToast=t;for(let e=0;e<t;e++)u()}}else t()}};w.iconOut=function(e){let{theme:t,type:n,isLoading:r,icon:a}=e,i=null,o={theme:t,type:n};return!1===a||(nc(a)?i=a(o):(0,ni.isValidElement)(a)?i=(0,ni.cloneElement)(a,o):nl(a)||ns(a)?i=a:r?i=nm.spinner():n in nm&&(i=nm[n](o))),i}(w),nc(p.onOpen)&&(w.onOpen=p.onOpen),nc(p.onClose)&&(w.onClose=p.onClose),w.closeButton=v.closeButton,!1===p.closeButton||nd(p.closeButton)?w.closeButton=p.closeButton:!0===p.closeButton&&(w.closeButton=!nd(v.closeButton)||v.closeButton);let E=e;(0,ni.isValidElement)(e)&&!nl(e.type)?E=(0,ni.cloneElement)(e,{closeToast:b,toastProps:w,data:m}):nc(e)&&(E=e({closeToast:b,toastProps:w,data:m})),v.limit&&v.limit>0&&s.count>v.limit&&y?s.queue.push({toastContent:E,toastProps:w,staleId:d}):ns(l)?setTimeout(()=>{f(E,w,d)},l):f(E,w,d)}function f(e,t,n){let{toastId:a}=t;n&&i.delete(n);let o={content:e,props:t};i.set(a,o),r(e=>[...e,a].filter(e=>e!==n)),nh.emit(4,np(o,null==o.props.updateId?"added":"updated"))}return(0,ni.useEffect)(()=>(s.containerId=e.containerId,nh.cancelEmit(3).on(0,d).on(1,e=>a.current&&c(e)).on(5,l).emit(2,s),()=>{i.clear(),nh.emit(3,s)}),[]),(0,ni.useEffect)(()=>{s.props=e,s.isToastActive=o,s.displayedToast=n.length}),{getToastToRender:function(t){let n=new Map,r=Array.from(i.values());return e.newestOnTop&&r.reverse(),r.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))},containerRef:a,isToastActive:o}}(e),{className:i,style:o,rtl:s,containerId:l}=e;return(0,ni.useEffect)(()=>{t&&(t.current=r.current)},[]),ni.createElement("div",{ref:r,className:"Toastify",id:l},n((e,t)=>{let n=t.length?{...o}:{...o,pointerEvents:"none"};return ni.createElement("div",{className:function(e){let t=no("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":s});return nc(i)?i({position:e,rtl:s,defaultClassName:t}):no(t,nu(i))}(e),style:n,key:`container-${e}`},t.map((e,n)=>{let{content:r,props:i}=e;return ni.createElement(nE,{...i,isIn:a(i.toastId),style:{...i.style,"--nth":n+1,"--len":t.length},key:`toast-${i.key}`},r)}))}))}));nT.displayName="ToastContainer",nT.defaultProps={position:"top-right",transition:nS,autoClose:5e3,closeButton:ny,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let n_,nC=new Map,nD=[],nk=1;function nO(e,t){return nC.size>0?nh.emit(0,e,t):nD.push({content:e,options:t}),t.toastId}function nA(e,t){return{...t,type:t&&t.type||e,toastId:t&&(nl(t.toastId)||ns(t.toastId))?t.toastId:""+nk++}}function nL(e){return(t,n)=>nO(t,nA(e,n))}function nN(e,t){return nO(e,nA("default",t))}nN.loading=(e,t)=>nO(e,nA("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),nN.promise=function(e,t,n){let r,{pending:a,error:i,success:o}=t;a&&(r=nl(a)?nN.loading(a,n):nN.loading(a.render,{...n,...a}));let s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(e,t,a)=>{if(null==t)return void nN.dismiss(r);let i={type:e,...s,...n,data:a},o=nl(t)?{render:t}:t;return r?nN.update(r,{...i,...o}):nN(o.render,{...i,...o}),a},c=nc(e)?e():e;return c.then(e=>l("success",o,e)).catch(e=>l("error",i,e)),c},nN.success=nL("success"),nN.info=nL("info"),nN.error=nL("error"),nN.warning=nL("warning"),nN.warn=nN.warning,nN.dark=(e,t)=>nO(e,nA("default",{theme:"dark",...t})),nN.dismiss=e=>{nC.size>0?nh.emit(1,e):nD=nD.filter(t=>null!=e&&t.options.toastId!==e)},nN.clearWaitingQueue=function(e){return void 0===e&&(e={}),nh.emit(5,e)},nN.isActive=e=>{let t=!1;return nC.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},nN.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{let n=function(e,t){let{containerId:n}=t,r=nC.get(n||n_);return r&&r.getToast(e)}(e,t);if(n){let{props:r,content:a}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:""+nk++};i.toastId!==e&&(i.staleId=e);let o=i.render||a;delete i.render,nO(o,i)}},0)},nN.done=e=>{nN.update(e,{progress:1})},nN.onChange=e=>(nh.on(4,e),()=>{nh.off(4,e)}),nN.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},nN.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},nh.on(2,e=>{n_=e.containerId||e,nC.set(n_,e),nD.forEach(e=>{nh.emit(0,e.content,e.options)}),nD=[]}).on(3,e=>{nC.delete(e.containerId||e),0===nC.size&&nh.off(0).off(1).off(5)});var nB=function(e){let{children:t}=e,[n,r]=(0,ni.useState)({title:"",body:""}),a=()=>nN((0,g.jsx)(i,{}));function i(){return(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{children:(0,g.jsx)("b",{children:null==n?void 0:n.title})}),(0,g.jsx)("p",{children:null==n?void 0:n.body})]})}return(0,ni.useEffect)(()=>{(async function(){try{await na.init()}catch(e){console.log(e)}})(),function(e){var t,n;let r=nt();t=r,n=t=>{e(t)},/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){if(!navigator)throw tx.create("only-available-in-window");e.onMessageHandler=t,()=>{e.onMessageHandler=null}}(t=x(t),n)}(e=>{var t,n;return r({title:null==e?void 0:null===(t=e.notification)||void 0===t?void 0:t.title,body:null==e?void 0:null===(n=e.notification)||void 0===n?void 0:n.body})})},[]),(0,ni.useEffect)(()=>{(null==n?void 0:n.title)&&a()},[n]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(nT,{}),t]})};function nM(e){let{Component:t,pageProps:n}=e,r=t.getLayout||(e=>e);return(0,g.jsx)(nB,{children:r((0,g.jsx)(t,{...n}))})}n(3814),n(1399)},1176:function(e,t,n){"use strict";let r;n.d(t,{tO:function(){return b},FK:function(){return y},Fg:function(){return w}});let a=e=>{let t;let n=new Set,r=(e,r)=>{let a="function"==typeof e?e(t):e;if(!Object.is(a,t)){let e=t;t=(null!=r?r:"object"!=typeof a)?a:Object.assign({},t,a),n.forEach(n=>n(t,e))}},a=()=>t,i=e=>(n.add(e),()=>n.delete(e)),o=()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()},s={setState:r,getState:a,subscribe:i,destroy:o};return t=e(r,a,s),s},i=e=>e?a(e):a;var o=n(7294),s=n(2798);let{useSyncExternalStoreWithSelector:l}=s,c=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?i(e):e,n=(e,n)=>(function(e,t=e.getState,n){let r=l(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return(0,o.useDebugValue)(r),r})(t,e,n);return Object.assign(n,t),n},u=e=>e?c(e):c;function d(e,t){let n;try{n=e()}catch(e){return}return{getItem:e=>{var r;let a=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),i=null!=(r=n.getItem(e))?r:null;return i instanceof Promise?i.then(a):a(i)},setItem:(e,r)=>n.setItem(e,JSON.stringify(r,null==t?void 0:t.replacer)),removeItem:e=>n.removeItem(e)}}let f=e=>t=>{try{let n=e(t);if(n instanceof Promise)return n;return{then:e=>f(e)(n),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>f(t)(e)}}},p=(e,t)=>(n,r,a)=>{let i,o,s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},l=!1,c=new Set,u=new Set;try{i=s.getStorage()}catch(e){}if(!i)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...e)},r,a);let d=f(s.serialize),p=()=>{let e;let t=s.partialize({...r()}),n=d({state:t,version:s.version}).then(e=>i.setItem(s.name,e)).catch(t=>{e=t});if(e)throw e;return n},h=a.setState;a.setState=(e,t)=>{h(e,t),p()};let g=e((...e)=>{n(...e),p()},r,a),m=()=>{var e;if(!i)return;l=!1,c.forEach(e=>e(r()));let t=(null==(e=s.onRehydrateStorage)?void 0:e.call(s,r()))||void 0;return f(i.getItem.bind(i))(s.name).then(e=>{if(e)return s.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===s.version)return e.state;if(s.migrate)return s.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return n(o=s.merge(e,null!=(t=r())?t:g),!0),p()}).then(()=>{null==t||t(o,void 0),l=!0,u.forEach(e=>e(o))}).catch(e=>{null==t||t(void 0,e)})};return a.persist={setOptions:e=>{s={...s,...e},e.getStorage&&(i=e.getStorage())},clearStorage:()=>{null==i||i.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>m(),hasHydrated:()=>l,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(u.add(e),()=>{u.delete(e)})},m(),o||g},h=(e,t)=>(n,r,a)=>{let i,o={storage:d(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},s=!1,l=new Set,c=new Set,u=o.storage;if(!u)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...e)},r,a);let p=()=>{let e=o.partialize({...r()});return u.setItem(o.name,{state:e,version:o.version})},h=a.setState;a.setState=(e,t)=>{h(e,t),p()};let g=e((...e)=>{n(...e),p()},r,a),m=()=>{var e,t;if(!u)return;s=!1,l.forEach(e=>{var t;return e(null!=(t=r())?t:g)});let a=(null==(t=o.onRehydrateStorage)?void 0:t.call(o,null!=(e=r())?e:g))||void 0;return f(u.getItem.bind(u))(o.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===o.version)return e.state;if(o.migrate)return o.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return n(i=o.merge(e,null!=(t=r())?t:g),!0),p()}).then(()=>{null==a||a(i,void 0),i=r(),s=!0,c.forEach(e=>e(i))}).catch(e=>{null==a||a(void 0,e)})};return a.persist={setOptions:e=>{o={...o,...e},e.storage&&(u=e.storage)},clearStorage:()=>{null==u||u.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>m(),hasHydrated:()=>s,onHydrate:e=>(l.add(e),()=>{l.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},o.skipHydration||m(),i||g},g=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),p(e,t)):h(e,t);function m(e){return new Promise((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)})}function v(){return r||(r=function(e,t){let n=indexedDB.open(e);n.onupgradeneeded=()=>n.result.createObjectStore(t);let r=m(n);return(e,n)=>r.then(r=>n(r.transaction(t,e).objectStore(t)))}("keyval-store","keyval")),r}let b={getItem:async e=>(function(e,t=v()){return t("readonly",t=>m(t.get(e)))})(e).then(e=>e).catch(e=>{}),setItem:async(e,t)=>{await function(e,t,n=v()){return n("readwrite",n=>(n.put(t,e),m(n.transaction)))}(e,t)},removeItem:async e=>{await function(e,t=v()){return t("readwrite",t=>(t.delete(e),m(t.transaction)))}(e)}};u(g((e,t)=>({count:0,increment:()=>e(()=>({count:t().count+1})),decrement:()=>e(e=>({count:e.count-1}))}),{name:"istore",storage:d(()=>b)}));let y=u(g((e,t)=>({sidebar:!0,sidebarToggle:()=>e(()=>({sidebar:!t().sidebar}))}),{name:"sidebar",storage:d(()=>b)})),w=u(g((e,t)=>({dark:!1,darkToggle:()=>e(()=>({dark:!t().dark}))}),{name:"theme",storage:d(()=>b)}))},1399:function(){},3814:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,a=e.exports={};function i(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l=[],c=!1,u=-1;function d(){c&&r&&(c=!1,r.length?l=r.concat(l):u=-1,l.length&&f())}function f(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(r=l,l=[];++u<t;)r&&r[u].run();u=-1,t=l.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||c||s(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var i=n[e]={exports:{}},o=!0;try{t[e](i,i.exports,r),o=!1}finally{o&&delete n[e]}return i.exports}r.ab="//";var a=r(229);e.exports=a}()},3250:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(7294),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=r.useState,o=r.useEffect,s=r.useLayoutEffect,l=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!a(e,n)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),a=r[0].inst,u=r[1];return s(function(){a.value=n,a.getSnapshot=t,c(a)&&u({inst:a})},[e,n,t]),o(function(){return c(a)&&u({inst:a}),e(function(){c(a)&&u({inst:a})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:u},139:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(7294),a=n(1688),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=a.useSyncExternalStore,s=r.useRef,l=r.useEffect,c=r.useMemo,u=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,a){var d=s(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=c(function(){function e(e){if(!l){if(l=!0,o=e,e=r(e),void 0!==a&&f.hasValue){var t=f.value;if(a(t,e))return s=t}return s=e}if(t=s,i(o,e))return t;var n=r(e);return void 0!==a&&a(t,n)?t:(o=e,s=n)}var o,s,l=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,n,r,a]);var p=o(e,d[0],d[1]);return l(function(){f.hasValue=!0,f.value=p},[p]),u(p),p}},1688:function(e,t,n){"use strict";e.exports=n(3250)},2798:function(e,t,n){"use strict";e.exports=n(139)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);