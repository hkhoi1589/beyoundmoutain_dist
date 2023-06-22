(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,n){"use strict";var r,a;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(a=n.g.process)?void 0:a.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1110)}])},1110:function(e,t,n){"use strict";let r,a,i,o,s;n.r(t),n.d(t,{default:function(){return nP}});var l,c,u,d,f,p,h,g,m=n(5893),b=n(7294),y=n(3454);/**
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
 */let v=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=63&a|128):(64512&a)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++r)),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=63&a|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=63&a|128)}return t},w=function(e){let t=[],n=0,r=0;for(;n<e.length;){let a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){let i=e[n++];t[r++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){let i=e[n++],o=e[n++],s=e[n++],l=((7&a)<<18|(63&i)<<12|(63&o)<<6|63&s)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{let i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&o)}}return t.join("")},E={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let a=e[t],i=t+1<e.length,o=i?e[t+1]:0,s=t+2<e.length,l=s?e[t+2]:0,c=a>>2,u=(3&a)<<4|o>>4,d=(15&o)<<2|l>>6,f=63&l;s||(f=64,i||(d=64)),r.push(n[c],n[u],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(v(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):w(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let a=n[e.charAt(t++)],i=t<e.length,o=i?n[e.charAt(t)]:0;++t;let s=t<e.length,l=s?n[e.charAt(t)]:64;++t;let c=t<e.length,u=c?n[e.charAt(t)]:64;if(++t,null==a||null==o||null==l||null==u)throw new I;let d=a<<2|o>>4;if(r.push(d),64!==l){let e=o<<4&240|l>>2;if(r.push(e),64!==u){let e=l<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class I extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let T=function(e){let t=v(e);return E.encodeByteArray(t,!0)},_=function(e){return T(e).replace(/\./g,"")},C=function(e){try{return E.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},S=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,D=()=>{if(void 0===y||void 0===y.env)return;let e=y.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},k=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&C(e[1]);return t&&JSON.parse(t)},O=()=>{try{return S()||D()||k()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},A=()=>{var e;return null===(e=O())||void 0===e?void 0:e.config};/**
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
 */class L{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}function N(){try{return"object"==typeof indexedDB}catch(e){return!1}}function B(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class M extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,M.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,a=this.errors[e],i=a?a.replace(R,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",o=`${this.serviceName}: ${i} (${r}).`,s=new M(r,o,n);return s}}let R=/\{\$([^}]+)}/g;function j(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let a of n){if(!r.includes(a))return!1;let n=e[a],i=t[a];if(x(n)&&x(i)){if(!j(n,i))return!1}else if(n!==i)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}function x(e){return null!==e&&"object"==typeof e}/**
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
 */function $(e){return e&&e._delegate?e._delegate:e}class H{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */let F="[DEFAULT]";/**
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
 */class V{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new L;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:F})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=F){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=F){return this.instances.has(e)}getOptions(e=F){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(e);n===a&&t.resolve(r)}return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),a=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;a.add(e),this.onInitCallbacks.set(r,a);let i=this.instances.get(r);return i&&e(i,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===F?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=F){return this.component?this.component.multipleInstances?e:F:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class z{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new V(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */let K=[];(u=p||(p={}))[u.DEBUG=0]="DEBUG",u[u.VERBOSE=1]="VERBOSE",u[u.INFO=2]="INFO",u[u.WARN=3]="WARN",u[u.ERROR=4]="ERROR",u[u.SILENT=5]="SILENT";let W={debug:p.DEBUG,verbose:p.VERBOSE,info:p.INFO,warn:p.WARN,error:p.ERROR,silent:p.SILENT},U=p.INFO,q={[p.DEBUG]:"log",[p.VERBOSE]:"log",[p.INFO]:"info",[p.WARN]:"warn",[p.ERROR]:"error"},G=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),a=q[t];if(a)console[a](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)},J=(e,t)=>t.some(t=>e instanceof t),Q=new WeakMap,Y=new WeakMap,X=new WeakMap,Z=new WeakMap,ee=new WeakMap,et={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Y.get(e);if("objectStoreNames"===t)return e.objectStoreNames||X.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return en(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function en(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(en(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&Q.set(t,e)}).catch(()=>{}),ee.set(t,e),t}(e);if(Z.has(e))return Z.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(er(this),e),en(Q.get(this))}:function(...e){return en(t.apply(er(this),e))}:function(e,...n){let r=t.call(er(this),e,...n);return X.set(r,e.sort?e.sort():[e]),en(r)}:(t instanceof IDBTransaction&&function(e){if(Y.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)});Y.set(e,t)}(t),J(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,et):t;return n!==e&&(Z.set(e,n),ee.set(n,e)),n}let er=e=>ee.get(e),ea=["get","getKey","getAll","getAllKeys","count"],ei=["put","add","delete","clear"],eo=new Map;function es(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(eo.get(t))return eo.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,a=ei.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||ea.includes(n)))return;let i=async function(e,...t){let i=this.transaction(e,a?"readwrite":"readonly"),o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),a&&i.done]))[0]};return eo.set(t,i),i}et={...l=et,get:(e,t,n)=>es(e,t)||l.get(e,t,n),has:(e,t)=>!!es(e,t)||l.has(e,t)};/**
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
 */class el{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let ec="@firebase/app",eu="0.9.12",ed=new class{constructor(e){this.name=e,this._logLevel=U,this._logHandler=G,this._userLogHandler=null,K.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in p))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?W[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,p.DEBUG,...e),this._logHandler(this,p.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,p.VERBOSE,...e),this._logHandler(this,p.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,p.INFO,...e),this._logHandler(this,p.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,p.WARN,...e),this._logHandler(this,p.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,p.ERROR,...e),this._logHandler(this,p.ERROR,...e)}}("@firebase/app"),ef="[DEFAULT]",ep={[ec]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},eh=new Map,eg=new Map;function em(e){let t=e.name;if(eg.has(t))return ed.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(eg.set(t,e),eh.values()))!function(e,t){try{e.container.addComponent(t)}catch(n){ed.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}(n,e);return!0}function eb(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}let ey=new P("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
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
 */class ev{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new H("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ey.create("app-deleted",{appName:this._name})}}function ew(e,t={}){let n=e;if("object"!=typeof t){let e=t;t={name:e}}let r=Object.assign({name:ef,automaticDataCollectionEnabled:!1},t),a=r.name;if("string"!=typeof a||!a)throw ey.create("bad-app-name",{appName:String(a)});if(n||(n=A()),!n)throw ey.create("no-options");let i=eh.get(a);if(i){if(j(n,i.options)&&j(r,i.config))return i;throw ey.create("duplicate-app",{appName:a})}let o=new z(a);for(let e of eg.values())o.addComponent(e);let s=new ev(n,r,o);return eh.set(a,s),s}function eE(){return Array.from(eh.values())}function eI(e,t,n){var r;let a=null!==(r=ep[e])&&void 0!==r?r:e;n&&(a+=`-${n}`);let i=a.match(/\s|\//),o=t.match(/\s|\//);if(i||o){let e=[`Unable to register library "${a}" with version "${t}":`];i&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ed.warn(e.join(" "));return}em(new H(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}let eT="firebase-heartbeat-store",e_=null;function eC(){return e_||(e_=(function(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){let o=indexedDB.open(e,1),s=en(o);return r&&o.addEventListener("upgradeneeded",e=>{r(en(o.result),e.oldVersion,e.newVersion,en(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{i&&e.addEventListener("close",()=>i()),a&&e.addEventListener("versionchange",e=>a(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(eT)}}).catch(e=>{throw ey.create("idb-open",{originalErrorMessage:e.message})})),e_}async function eS(e){try{let t=await eC(),n=await t.transaction(eT).objectStore(eT).get(ek(e));return n}catch(e){if(e instanceof M)ed.warn(e.message);else{let t=ey.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});ed.warn(t.message)}}}async function eD(e,t){try{let n=await eC(),r=n.transaction(eT,"readwrite"),a=r.objectStore(eT);await a.put(t,ek(e)),await r.done}catch(e){if(e instanceof M)ed.warn(e.message);else{let t=ey.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});ed.warn(t.message)}}}function ek(e){return`${e.name}!${e.options.appId}`}class eO{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new eL(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=eA();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=eA(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){let n=[],r=e.slice();for(let a of e){let e=n.find(e=>e.agent===a.agent);if(e){if(e.dates.push(a.date),eN(n)>t){e.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),eN(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=_(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function eA(){let e=new Date;return e.toISOString().substring(0,10)}class eL{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!N()&&B().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await eS(this.app);return e||{heartbeats:[]}}}async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return eD(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return eD(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function eN(e){return _(JSON.stringify({version:2,heartbeats:e})).length}em(new H("platform-logger",e=>new el(e),"PRIVATE")),em(new H("heartbeat",e=>new eO(e),"PRIVATE")),eI(ec,eu,""),eI(ec,eu,"esm2017"),eI("fire-js",""),/**
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
 */eI("firebase","9.22.2","app");let eB=(e,t)=>t.some(t=>e instanceof t),eM=new WeakMap,eP=new WeakMap,eR=new WeakMap,ej=new WeakMap,ex=new WeakMap,e$={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return eP.get(e);if("objectStoreNames"===t)return e.objectStoreNames||eR.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return eH(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eH(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(eH(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&eM.set(t,e)}).catch(()=>{}),ex.set(t,e),t}(e);if(ej.has(e))return ej.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(eF(this),e),eH(eM.get(this))}:function(...e){return eH(t.apply(eF(this),e))}:function(e,...n){let r=t.call(eF(this),e,...n);return eR.set(r,e.sort?e.sort():[e]),eH(r)}:(t instanceof IDBTransaction&&function(e){if(eP.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)});eP.set(e,t)}(t),eB(t,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,e$):t;return n!==e&&(ej.set(e,n),ex.set(n,e)),n}let eF=e=>ex.get(e);function eV(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){let o=indexedDB.open(e,t),s=eH(o);return r&&o.addEventListener("upgradeneeded",e=>{r(eH(o.result),e.oldVersion,e.newVersion,eH(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),s.then(e=>{i&&e.addEventListener("close",()=>i()),a&&e.addEventListener("versionchange",()=>a())}).catch(()=>{}),s}function ez(e,{blocked:t}={}){let n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",()=>t()),eH(n).then(()=>void 0)}let eK=["get","getKey","getAll","getAllKeys","count"],eW=["put","add","delete","clear"],eU=new Map;function eq(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(eU.get(t))return eU.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,a=eW.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||eK.includes(n)))return;let i=async function(e,...t){let i=this.transaction(e,a?"readwrite":"readonly"),o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),a&&i.done]))[0]};return eU.set(t,i),i}e$={...c=e$,get:(e,t,n)=>eq(e,t)||c.get(e,t,n),has:(e,t)=>!!eq(e,t)||c.has(e,t)};let eG="@firebase/installations",eJ="0.6.4",eQ=`w:${eJ}`,eY="FIS_v2",eX=new P("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function eZ(e){return e instanceof M&&e.code.includes("request-failed")}/**
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
 */function e0({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function e1(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function e2(e,t){let n=await t.json(),r=n.error;return eX.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function e4({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function e5(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
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
 */async function e6({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let r=e0(e),a=e4(e),i=t.getImmediate({optional:!0});if(i){let e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}let o={fid:n,authVersion:eY,appId:e.appId,sdkVersion:eQ},s={method:"POST",headers:a,body:JSON.stringify(o)},l=await e5(()=>fetch(r,s));if(l.ok){let e=await l.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:e1(e.authToken)};return t}throw await e2("Create Installation",l)}/**
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
 */function e3(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */let e8=/^[cdef][\w-]{21}$/;/**
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
 */function e7(e){return`${e.appName}!${e.appId}`}/**
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
 */let e9=new Map;function te(e,t){let n=e7(e);tt(n,t),function(e,t){let n=(!tn&&"BroadcastChannel"in self&&((tn=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{tt(e.data.key,e.data.fid)}),tn);n&&n.postMessage({key:e,fid:t}),0===e9.size&&tn&&(tn.close(),tn=null)}(n,t)}function tt(e,t){let n=e9.get(e);if(n)for(let e of n)e(t)}let tn=null,tr="firebase-installations-store",ta=null;function ti(){return ta||(ta=eV("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(tr)}})),ta}async function to(e,t){let n=e7(e),r=await ti(),a=r.transaction(tr,"readwrite"),i=a.objectStore(tr),o=await i.get(n);return await i.put(t,n),await a.done,o&&o.fid===t.fid||te(e,t.fid),t}async function ts(e){let t=e7(e),n=await ti(),r=n.transaction(tr,"readwrite");await r.objectStore(tr).delete(t),await r.done}async function tl(e,t){let n=e7(e),r=await ti(),a=r.transaction(tr,"readwrite"),i=a.objectStore(tr),o=await i.get(n),s=t(o);return void 0===s?await i.delete(n):await i.put(s,n),await a.done,s&&(!o||o.fid!==s.fid)&&te(e,s.fid),s}/**
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
 */async function tc(e){let t;let n=await tl(e.appConfig,n=>{let r=function(e){let t=e||{fid:function(){try{let e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;let n=function(e){let t=/**
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
 */function(e){let t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}(e);return t.substr(0,22)}(e);return e8.test(n)?n:""}catch(e){return""}}(),registrationStatus:0};return tp(t)}(n),a=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){let e=Promise.reject(eX.create("app-offline"));return{installationEntry:t,registrationPromise:e}}let n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=tu(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:td(e)}:{installationEntry:t}}(e,r);return t=a.registrationPromise,a.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function tu(e,t){try{let n=await e6(e,t);return to(e.appConfig,n)}catch(n){throw eZ(n)&&409===n.customData.serverCode?await ts(e.appConfig):await to(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function td(e){let t=await tf(e.appConfig);for(;1===t.registrationStatus;)await e3(100),t=await tf(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:n}=await tc(e);return n||t}return t}function tf(e){return tl(e,e=>{if(!e)throw eX.create("installation-not-found");return tp(e)})}function tp(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
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
 */async function th({appConfig:e,heartbeatServiceProvider:t},n){let r=function(e,{fid:t}){return`${e0(e)}/${t}/authTokens:generate`}(e,n),a=function(e,{refreshToken:t}){let n=e4(e);return n.append("Authorization",`${eY} ${t}`),n}(e,n),i=t.getImmediate({optional:!0});if(i){let e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}let o={installation:{sdkVersion:eQ,appId:e.appId}},s={method:"POST",headers:a,body:JSON.stringify(o)},l=await e5(()=>fetch(r,s));if(l.ok){let e=await l.json(),t=e1(e);return t}throw await e2("Generate Auth Token",l)}/**
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
 */async function tg(e,t=!1){let n;let r=await tl(e.appConfig,r=>{var a;if(!tv(r))throw eX.create("not-registered");let i=r.authToken;if(!t&&2===(a=i).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(a))return r;if(1===i.requestStatus)return n=tm(e,t),r;{if(!navigator.onLine)throw eX.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=ty(e,t),t}}),a=n?await n:r.authToken;return a}async function tm(e,t){let n=await tb(e.appConfig);for(;1===n.authToken.requestStatus;)await e3(100),n=await tb(e.appConfig);let r=n.authToken;return 0===r.requestStatus?tg(e,t):r}function tb(e){return tl(e,e=>{if(!tv(e))throw eX.create("not-registered");let t=e.authToken;return 1===t.requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ty(e,t){try{let n=await th(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await to(e.appConfig,r),n}catch(n){if(eZ(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))await ts(e.appConfig);else{let n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await to(e.appConfig,n)}throw n}}function tv(e){return void 0!==e&&2===e.registrationStatus}/**
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
 */async function tw(e){let{installationEntry:t,registrationPromise:n}=await tc(e);return n?n.catch(console.error):tg(e).catch(console.error),t.fid}/**
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
 */async function tE(e,t=!1){await tI(e);let n=await tg(e,t);return n.token}async function tI(e){let{registrationPromise:t}=await tc(e);t&&await t}function tT(e){return eX.create("missing-app-config-values",{valueName:e})}/**
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
 */let t_="installations",tC=e=>{let t=e.getProvider("app").getImmediate(),n=/**
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
 */function(e){if(!e||!e.options)throw tT("App Configuration");if(!e.name)throw tT("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw tT(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),r=eb(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},tS=e=>{let t=e.getProvider("app").getImmediate(),n=eb(t,t_).getImmediate();return{getId:()=>tw(n),getToken:e=>tE(n,e)}};em(new H(t_,tC,"PUBLIC")),em(new H("installations-internal",tS,"PRIVATE")),eI(eG,eJ),eI(eG,eJ,"esm2017");let tD="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",tk="google.c.a.c_id";/**
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
 */function tO(e){let t=new Uint8Array(e),n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}(d=h||(h={}))[d.DATA_MESSAGE=1]="DATA_MESSAGE",d[d.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION",(f=g||(g={})).PUSH_RECEIVED="push-received",f.NOTIFICATION_CLICKED="notification-clicked";/**
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
 */let tA="fcm_token_details_db",tL="fcm_token_object_Store";async function tN(e){if("databases"in indexedDB){let e=await indexedDB.databases(),t=e.map(e=>e.name);if(!t.includes(tA))return null}let t=null,n=await eV(tA,5,{upgrade:async(n,r,a,i)=>{var o;if(r<2||!n.objectStoreNames.contains(tL))return;let s=i.objectStore(tL),l=await s.index("fcmSenderId").get(e);if(await s.clear(),l){if(2===r){if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:null!==(o=l.createTime)&&void 0!==o?o:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:"string"==typeof l.vapidKey?l.vapidKey:tO(l.vapidKey)}}}else 3===r?t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:tO(l.auth),p256dh:tO(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:tO(l.vapidKey)}}:4===r&&(t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:tO(l.auth),p256dh:tO(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:tO(l.vapidKey)}})}}});return n.close(),await ez(tA),await ez("fcm_vapid_details_db"),await ez("undefined"),!function(e){if(!e||!e.subscriptionOptions)return!1;let{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?null:t}let tB="firebase-messaging-store",tM=null;function tP(){return tM||(tM=eV("firebase-messaging-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(tB)}})),tM}async function tR(e){let t=function({appConfig:e}){return e.appId}(e),n=await tP(),r=await n.transaction(tB).objectStore(tB).get(t);if(r)return r;{let t=await tN(e.appConfig.senderId);if(t)return await tj(e,t),t}}async function tj(e,t){let n=function({appConfig:e}){return e.appId}(e),r=await tP(),a=r.transaction(tB,"readwrite");return await a.objectStore(tB).put(t,n),await a.done,t}async function tx(e){let t=function({appConfig:e}){return e.appId}(e),n=await tP(),r=n.transaction(tB,"readwrite");await r.objectStore(tB).delete(t),await r.done}let t$=new P("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});/**
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
 */async function tH(e,t){let n;let r=await tK(e),a=tW(t),i={method:"POST",headers:r,body:JSON.stringify(a)};try{let t=await fetch(tz(e.appConfig),i);n=await t.json()}catch(e){throw t$.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(n.error){let e=n.error.message;throw t$.create("token-subscribe-failed",{errorInfo:e})}if(!n.token)throw t$.create("token-subscribe-no-token");return n.token}async function tF(e,t){let n;let r=await tK(e),a=tW(t.subscriptionOptions),i={method:"PATCH",headers:r,body:JSON.stringify(a)};try{let r=await fetch(`${tz(e.appConfig)}/${t.token}`,i);n=await r.json()}catch(e){throw t$.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(n.error){let e=n.error.message;throw t$.create("token-update-failed",{errorInfo:e})}if(!n.token)throw t$.create("token-update-no-token");return n.token}async function tV(e,t){let n=await tK(e);try{let r=await fetch(`${tz(e.appConfig)}/${t}`,{method:"DELETE",headers:n}),a=await r.json();if(a.error){let e=a.error.message;throw t$.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw t$.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function tz({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}async function tK({appConfig:e,installations:t}){let n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function tW({p256dh:e,auth:t,endpoint:n,vapidKey:r}){let a={web:{endpoint:n,auth:t,p256dh:e}};return r!==tD&&(a.web.applicationPubKey=r),a}async function tU(e){let t=await tQ(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:tO(t.getKey("auth")),p256dh:tO(t.getKey("p256dh"))},r=await tR(e.firebaseDependencies);if(!r)return tJ(e.firebaseDependencies,n);if(function(e,t){let n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,a=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&r&&a&&i}(r.subscriptionOptions,n))return Date.now()>=r.createTime+6048e5?tG(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await tV(e.firebaseDependencies,r.token)}catch(e){console.warn(e)}return tJ(e.firebaseDependencies,n)}async function tq(e){let t=await tR(e.firebaseDependencies);t&&(await tV(e.firebaseDependencies,t.token),await tx(e.firebaseDependencies));let n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function tG(e,t){try{let n=await tF(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await tj(e.firebaseDependencies,r),n}catch(t){throw await tq(e),t}}async function tJ(e,t){let n=await tH(e,t),r={token:n,createTime:Date.now(),subscriptionOptions:t};return await tj(e,r),r.token}async function tQ(e,t){let n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:function(e){let t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),a=new Uint8Array(r.length);for(let e=0;e<r.length;++e)a[e]=r.charCodeAt(e);return a}(t)})}/**
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
 */function tY(e){var t;let n={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};let n=t.notification.title;n&&(e.notification.title=n);let r=t.notification.body;r&&(e.notification.body=r);let a=t.notification.image;a&&(e.notification.image=a);let i=t.notification.icon;i&&(e.notification.icon=i)}(n,e),t=n,e.data&&(t.data=e.data),function(e,t){var n,r,a,i,o;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};let s=null!==(a=null===(r=t.fcmOptions)||void 0===r?void 0:r.link)&&void 0!==a?a:null===(i=t.notification)||void 0===i?void 0:i.click_action;s&&(e.fcmOptions.link=s);let l=null===(o=t.fcmOptions)||void 0===o?void 0:o.analytics_label;l&&(e.fcmOptions.analyticsLabel=l)}(n,e),n}function tX(e,t){let n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}function tZ(e){return t$.create("missing-app-config-values",{valueName:e})}/**
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
 */tX("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),tX("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");/**
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
 */class t0{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;let r=/**
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
 */function(e){if(!e||!e.options)throw tZ("App Configuration Object");if(!e.name)throw tZ("App Name");let{options:t}=e;for(let e of["projectId","apiKey","appId","messagingSenderId"])if(!t[e])throw tZ(e);return{appName:e.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:r,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}/**
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
 */async function t1(e){try{e.swRegistration=await navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}),e.swRegistration.update().catch(()=>{})}catch(e){throw t$.create("failed-service-worker-registration",{browserErrorMessage:null==e?void 0:e.message})}}/**
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
 */async function t2(e,t){if(t||e.swRegistration||await t1(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw t$.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function t4(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=tD)}/**
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
 */async function t5(e,t){if(!navigator)throw t$.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw t$.create("permission-blocked");return await t4(e,null==t?void 0:t.vapidKey),await t2(e,null==t?void 0:t.serviceWorkerRegistration),tU(e)}/**
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
 */async function t6(e,t,n){let r=function(e){switch(e){case g.NOTIFICATION_CLICKED:return"notification_open";case g.PUSH_RECEIVED:return"notification_foreground";default:throw Error()}}(t),a=await e.firebaseDependencies.analyticsProvider.get();a.logEvent(r,{message_id:n[tk],message_name:n["google.c.a.c_l"],message_time:n["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}/**
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
 */async function t3(e,t){let n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===g.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler(tY(n)):e.onMessageHandler.next(tY(n)));let r=n.data;"object"==typeof r&&r&&tk in r&&"1"===r["google.c.a.e"]&&await t6(e,n.messageType,r)}let t8="@firebase/messaging",t7="0.12.4",t9=e=>{let t=new t0(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",e=>t3(t,e)),t},ne=e=>{let t=e.getProvider("messaging").getImmediate();return{getToken:e=>t5(t,e)}};/**
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
 */async function nt(){try{await B()}catch(e){return!1}return"undefined"!=typeof window&&N()&&"undefined"!=typeof navigator&&!!navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function nn(e=function(e=ef){let t=eh.get(e);if(!t&&e===ef&&A())return ew();if(!t)throw ey.create("no-app",{appName:e});return t}()){return nt().then(e=>{if(!e)throw t$.create("unsupported-browser")},e=>{throw t$.create("indexed-db-unsupported")}),eb($(e),"messaging").getImmediate()}async function nr(e,t){return t5(e=$(e),t)}em(new H("messaging",t9,"PUBLIC")),em(new H("messaging-internal",ne,"PRIVATE")),eI(t8,t7),eI(t8,t7,"esm2017");let na={apiKey:"AIzaSyAkfHBzGYQcUZL0S76E3TukmzFuzCidge4",authDomain:"koolyard-84a4a.firebaseapp.com",projectId:"koolyard-84a4a",storageBucket:"koolyard-84a4a.appspot.com",messagingSenderId:"669707854180",appId:"1:669707854180:web:8a5e8aa2dd09025df95a71",measurementId:"G-PG9PCKGMHY"},ni=e=>{let t=nn(e);return nr(t,{vapidKey:"BKsc3xU_8UlCKISztvYhJHM94W0aJfqVB2DqSgXUCkKAf42PT-t4UGBam2UbT7xTLojKwagmZncErhko2TTz49c"}).then(e=>{e?console.log("current token for client: ",e):console.log("No registration token available. Request permission to generate one.")}).catch(e=>{console.log("An error occurred while retrieving token. ",e)})},no=()=>{var e,t;let n=nn();e=n,t=e=>{console.log("Message received. ",e)},/**
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
 */function(e,t){if(!navigator)throw t$.create("only-available-in-window");e.onMessageHandler=t,()=>{e.onMessageHandler=null}}(e=$(e),t)};var ns=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(a&&(a+=" "),a+=r);else for(n in t)t[n]&&(a&&(a+=" "),a+=n)}return a}(e))&&(r&&(r+=" "),r+=t);return r};let nl=e=>"number"==typeof e&&!isNaN(e),nc=e=>"string"==typeof e,nu=e=>"function"==typeof e,nd=e=>nc(e)||nu(e)?e:null,nf=e=>(0,b.isValidElement)(e)||nc(e)||nu(e)||nl(e);function np(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:a=!0,collapseDuration:i=300}=e;return function(e){let{children:o,position:s,preventExitTransition:l,done:c,nodeRef:u,isIn:d}=e,f=r?`${t}--${s}`:t,p=r?`${n}--${s}`:n,h=(0,b.useRef)(0);return(0,b.useLayoutEffect)(()=>{let e=u.current,t=f.split(" "),n=r=>{r.target===u.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===h.current&&"animationcancel"!==r.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,b.useEffect)(()=>{let e=u.current,t=()=>{e.removeEventListener("animationend",t),a?function(e,t,n){void 0===n&&(n=300);let{scrollHeight:r,style:a}=e;requestAnimationFrame(()=>{a.minHeight="initial",a.height=r+"px",a.transition=`all ${n}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)})})}(e,c,i):c()};d||(l?t():(h.current=1,e.className+=` ${p}`,e.addEventListener("animationend",t)))},[d]),b.createElement(b.Fragment,null,o)}}function nh(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}let ng={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){let n=this.list.get(e).filter(e=>e!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){let t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{let n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},nm=e=>{let{theme:t,type:n,...r}=e;return b.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...r})},nb={info:function(e){return b.createElement(nm,{...e},b.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return b.createElement(nm,{...e},b.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return b.createElement(nm,{...e},b.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return b.createElement(nm,{...e},b.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return b.createElement("div",{className:"Toastify__spinner"})}};function ny(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function nv(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function nw(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return b.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":r},b.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},b.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function nE(e){let{delay:t,isRunning:n,closeToast:r,type:a="default",hide:i,className:o,style:s,controlledProgress:l,progress:c,rtl:u,isIn:d,theme:f}=e,p=i||l&&0===c,h={...s,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:p?0:1};l&&(h.transform=`scaleX(${c})`);let g=ns("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":u}),m=nu(o)?o({rtl:u,type:a,defaultClassName:g}):ns(g,o);return b.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer",className:m,style:h,[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{d&&r()}})}let nI=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:a}=function(e){let[t,n]=(0,b.useState)(!1),[r,a]=(0,b.useState)(!1),i=(0,b.useRef)(null),o=(0,b.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,s=(0,b.useRef)(e),{autoClose:l,pauseOnHover:c,closeToast:u,onClick:d,closeOnClick:f}=e;function p(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",y),document.addEventListener("mouseup",v),document.addEventListener("touchmove",y),document.addEventListener("touchend",v);let n=i.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=n.getBoundingClientRect(),n.style.transition="",o.x=ny(t.nativeEvent),o.y=nv(t.nativeEvent),"x"===e.draggableDirection?(o.start=o.x,o.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(o.start=o.y,o.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function h(t){if(o.boundingRect){let{top:n,bottom:r,left:a,right:i}=o.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&o.x>=a&&o.x<=i&&o.y>=n&&o.y<=r?m():g()}}function g(){n(!0)}function m(){n(!1)}function y(n){let r=i.current;o.canDrag&&r&&(o.didMove=!0,t&&m(),o.x=ny(n),o.y=nv(n),o.delta="x"===e.draggableDirection?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),r.style.transform=`translate${e.draggableDirection}(${o.delta}px)`,r.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function v(){document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",v),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",v);let t=i.current;if(o.canDrag&&o.didMove&&t){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return a(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,b.useEffect)(()=>{s.current=e}),(0,b.useEffect)(()=>(i.current&&i.current.addEventListener("d",g,{once:!0}),nu(e.onOpen)&&e.onOpen((0,b.isValidElement)(e.children)&&e.children.props),()=>{let e=s.current;nu(e.onClose)&&e.onClose((0,b.isValidElement)(e.children)&&e.children.props)}),[]),(0,b.useEffect)(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||m(),window.addEventListener("focus",g),window.addEventListener("blur",m)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",g),window.removeEventListener("blur",m))}),[e.pauseOnFocusLoss]);let w={onMouseDown:p,onTouchStart:p,onMouseUp:h,onTouchEnd:h};return l&&c&&(w.onMouseEnter=m,w.onMouseLeave=g),f&&(w.onClick=e=>{d&&d(e),o.canCloseOnClick&&u()}),{playToast:g,pauseToast:m,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:w}}(e),{closeButton:i,children:o,autoClose:s,onClick:l,type:c,hideProgressBar:u,closeToast:d,transition:f,position:p,className:h,style:g,bodyClassName:m,bodyStyle:y,progressClassName:v,progressStyle:w,updateId:E,role:I,progress:T,rtl:_,toastId:C,deleteToast:S,isIn:D,isLoading:k,iconOut:O,closeOnClick:A,theme:L}=e,N=ns("Toastify__toast",`Toastify__toast-theme--${L}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":_},{"Toastify__toast--close-on-click":A}),B=nu(h)?h({rtl:_,position:p,type:c,defaultClassName:N}):ns(N,h),M=!!T||!s,P={closeToast:d,type:c,theme:L},R=null;return!1===i||(R=nu(i)?i(P):(0,b.isValidElement)(i)?(0,b.cloneElement)(i,P):nw(P)),b.createElement(f,{isIn:D,done:S,position:p,preventExitTransition:n,nodeRef:r},b.createElement("div",{id:C,onClick:l,className:B,...a,style:g,ref:r},b.createElement("div",{...D&&{role:I},className:nu(m)?m({type:c}):ns("Toastify__toast-body",m),style:y},null!=O&&b.createElement("div",{className:ns("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!k})},O),b.createElement("div",null,o)),R,b.createElement(nE,{...E&&!M?{key:`pb-${E}`}:{},rtl:_,theme:L,delay:s,isRunning:t,isIn:D,closeToast:d,hide:u,type:c,style:w,className:v,controlledProgress:M,progress:T||0})))},nT=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},n_=np(nT("bounce",!0)),nC=(np(nT("slide",!0)),np(nT("zoom")),np(nT("flip")),(0,b.forwardRef)((e,t)=>{let{getToastToRender:n,containerRef:r,isToastActive:a}=function(e){let[,t]=(0,b.useReducer)(e=>e+1,0),[n,r]=(0,b.useState)([]),a=(0,b.useRef)(null),i=(0,b.useRef)(new Map).current,o=e=>-1!==n.indexOf(e),s=(0,b.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:o,getToast:e=>i.get(e)}).current;function l(e){let{containerId:t}=e,{limit:n}=s.props;!n||t&&s.containerId!==t||(s.count-=s.queue.length,s.queue=[])}function c(e){r(t=>null==e?[]:t.filter(t=>t!==e))}function u(){let{toastContent:e,toastProps:t,staleId:n}=s.queue.shift();f(e,t,n)}function d(e,n){var r,o;let{delay:l,staleId:d,...p}=n;if(!nf(e)||!a.current||s.props.enableMultiContainer&&p.containerId!==s.props.containerId||i.has(p.toastId)&&null==p.updateId)return;let{toastId:h,updateId:g,data:m}=p,{props:y}=s,v=()=>c(h),w=null==g;w&&s.count++;let E={...y,style:y.toastStyle,key:s.toastKey++,...Object.fromEntries(Object.entries(p).filter(e=>{let[t,n]=e;return null!=n})),toastId:h,updateId:g,data:m,closeToast:v,isIn:!1,className:nd(p.className||y.toastClassName),bodyClassName:nd(p.bodyClassName||y.bodyClassName),progressClassName:nd(p.progressClassName||y.progressClassName),autoClose:!p.isLoading&&(r=p.autoClose,o=y.autoClose,!1===r||nl(r)&&r>0?r:o),deleteToast(){let e=nh(i.get(h),"removed");i.delete(h),ng.emit(4,e);let n=s.queue.length;if(s.count=null==h?s.count-s.displayedToast:s.count-1,s.count<0&&(s.count=0),n>0){let e=null==h?s.props.limit:1;if(1===n||1===e)s.displayedToast++,u();else{let t=e>n?n:e;s.displayedToast=t;for(let e=0;e<t;e++)u()}}else t()}};E.iconOut=function(e){let{theme:t,type:n,isLoading:r,icon:a}=e,i=null,o={theme:t,type:n};return!1===a||(nu(a)?i=a(o):(0,b.isValidElement)(a)?i=(0,b.cloneElement)(a,o):nc(a)||nl(a)?i=a:r?i=nb.spinner():n in nb&&(i=nb[n](o))),i}(E),nu(p.onOpen)&&(E.onOpen=p.onOpen),nu(p.onClose)&&(E.onClose=p.onClose),E.closeButton=y.closeButton,!1===p.closeButton||nf(p.closeButton)?E.closeButton=p.closeButton:!0===p.closeButton&&(E.closeButton=!nf(y.closeButton)||y.closeButton);let I=e;(0,b.isValidElement)(e)&&!nc(e.type)?I=(0,b.cloneElement)(e,{closeToast:v,toastProps:E,data:m}):nu(e)&&(I=e({closeToast:v,toastProps:E,data:m})),y.limit&&y.limit>0&&s.count>y.limit&&w?s.queue.push({toastContent:I,toastProps:E,staleId:d}):nl(l)?setTimeout(()=>{f(I,E,d)},l):f(I,E,d)}function f(e,t,n){let{toastId:a}=t;n&&i.delete(n);let o={content:e,props:t};i.set(a,o),r(e=>[...e,a].filter(e=>e!==n)),ng.emit(4,nh(o,null==o.props.updateId?"added":"updated"))}return(0,b.useEffect)(()=>(s.containerId=e.containerId,ng.cancelEmit(3).on(0,d).on(1,e=>a.current&&c(e)).on(5,l).emit(2,s),()=>{i.clear(),ng.emit(3,s)}),[]),(0,b.useEffect)(()=>{s.props=e,s.isToastActive=o,s.displayedToast=n.length}),{getToastToRender:function(t){let n=new Map,r=Array.from(i.values());return e.newestOnTop&&r.reverse(),r.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))},containerRef:a,isToastActive:o}}(e),{className:i,style:o,rtl:s,containerId:l}=e;return(0,b.useEffect)(()=>{t&&(t.current=r.current)},[]),b.createElement("div",{ref:r,className:"Toastify",id:l},n((e,t)=>{let n=t.length?{...o}:{...o,pointerEvents:"none"};return b.createElement("div",{className:function(e){let t=ns("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":s});return nu(i)?i({position:e,rtl:s,defaultClassName:t}):ns(t,nd(i))}(e),style:n,key:`container-${e}`},t.map((e,n)=>{let{content:r,props:i}=e;return b.createElement(nI,{...i,isIn:a(i.toastId),style:{...i.style,"--nth":n+1,"--len":t.length},key:`toast-${i.key}`},r)}))}))}));nC.displayName="ToastContainer",nC.defaultProps={position:"top-right",transition:n_,autoClose:5e3,closeButton:nw,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let nS,nD=new Map,nk=[],nO=1;function nA(e,t){return nD.size>0?ng.emit(0,e,t):nk.push({content:e,options:t}),t.toastId}function nL(e,t){return{...t,type:t&&t.type||e,toastId:t&&(nc(t.toastId)||nl(t.toastId))?t.toastId:""+nO++}}function nN(e){return(t,n)=>nA(t,nL(e,n))}function nB(e,t){return nA(e,nL("default",t))}nB.loading=(e,t)=>nA(e,nL("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),nB.promise=function(e,t,n){let r,{pending:a,error:i,success:o}=t;a&&(r=nc(a)?nB.loading(a,n):nB.loading(a.render,{...n,...a}));let s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(e,t,a)=>{if(null==t)return void nB.dismiss(r);let i={type:e,...s,...n,data:a},o=nc(t)?{render:t}:t;return r?nB.update(r,{...i,...o}):nB(o.render,{...i,...o}),a},c=nu(e)?e():e;return c.then(e=>l("success",o,e)).catch(e=>l("error",i,e)),c},nB.success=nN("success"),nB.info=nN("info"),nB.error=nN("error"),nB.warning=nN("warning"),nB.warn=nB.warning,nB.dark=(e,t)=>nA(e,nL("default",{theme:"dark",...t})),nB.dismiss=e=>{nD.size>0?ng.emit(1,e):nk=nk.filter(t=>null!=e&&t.options.toastId!==e)},nB.clearWaitingQueue=function(e){return void 0===e&&(e={}),ng.emit(5,e)},nB.isActive=e=>{let t=!1;return nD.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},nB.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{let n=function(e,t){let{containerId:n}=t,r=nD.get(n||nS);return r&&r.getToast(e)}(e,t);if(n){let{props:r,content:a}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:""+nO++};i.toastId!==e&&(i.staleId=e);let o=i.render||a;delete i.render,nA(o,i)}},0)},nB.done=e=>{nB.update(e,{progress:1})},nB.onChange=e=>(ng.on(4,e),()=>{ng.off(4,e)}),nB.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},nB.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},ng.on(2,e=>{nS=e.containerId||e,nD.set(nS,e),nk.forEach(e=>{ng.emit(0,e.content,e.options)}),nk=[]}).on(3,e=>{nD.delete(e.containerId||e),0===nD.size&&ng.off(0).off(1).off(5)});var nM=function(e){let{children:t}=e,[n,r]=(0,b.useState)({title:"",body:""});return(0,b.useEffect)(()=>{void 0!==window&&(console.log("here"),ni(s=0===eE().length?ew(na):eE()[0]))},[]),s&&no(s).then(e=>{var t,n;console.log("payload",e),r({title:null==e?void 0:null===(t=e.notification)||void 0===t?void 0:t.title,body:null==e?void 0:null===(n=e.notification)||void 0===n?void 0:n.body})}).catch(e=>console.log("failed: ",e)),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(nC,{}),t]})};function nP(e){let{Component:t,pageProps:n}=e,r=t.getLayout||(e=>e);return(0,m.jsx)(nM,{children:r((0,m.jsx)(t,{...n}))})}n(3814),n(1399)},1399:function(){},3814:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,a=e.exports={};function i(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l=[],c=!1,u=-1;function d(){c&&r&&(c=!1,r.length?l=r.concat(l):u=-1,l.length&&f())}function f(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(r=l,l=[];++u<t;)r&&r[u].run();u=-1,t=l.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||c||s(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var i=n[e]={exports:{}},o=!0;try{t[e](i,i.exports,r),o=!1}finally{o&&delete n[e]}return i.exports}r.ab="//";var a=r(229);e.exports=a}()}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);