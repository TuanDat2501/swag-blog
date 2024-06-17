(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[671],{3943:function(e,t,r){"use strict";r.d(t,{$s:function(){return D},BH:function(){return b},L:function(){return u},LL:function(){return S},P0:function(){return g},Sg:function(){return y},ZR:function(){return A},aH:function(){return _},eu:function(){return E},hl:function(){return w},m9:function(){return k},ru:function(){return v},vZ:function(){return function e(t,r){if(t===r)return!0;let i=Object.keys(t),n=Object.keys(r);for(let a of i){if(!n.includes(a))return!1;let i=t[a],s=r[a];if(C(i)&&C(s)){if(!e(i,s))return!1}else if(i!==s)return!1}for(let e of n)if(!i.includes(e))return!1;return!0}},zI:function(){return T}});var i=r(357);/**
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
 */let n=function(e){let t=[],r=0;for(let i=0;i<e.length;i++){let n=e.charCodeAt(i);n<128?t[r++]=n:(n<2048?t[r++]=n>>6|192:((64512&n)==55296&&i+1<e.length&&(64512&e.charCodeAt(i+1))==56320?(n=65536+((1023&n)<<10)+(1023&e.charCodeAt(++i)),t[r++]=n>>18|240,t[r++]=n>>12&63|128):t[r++]=n>>12|224,t[r++]=n>>6&63|128),t[r++]=63&n|128)}return t},a=function(e){let t=[],r=0,i=0;for(;r<e.length;){let n=e[r++];if(n<128)t[i++]=String.fromCharCode(n);else if(n>191&&n<224){let a=e[r++];t[i++]=String.fromCharCode((31&n)<<6|63&a)}else if(n>239&&n<365){let a=((7&n)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[i++]=String.fromCharCode(55296+(a>>10)),t[i++]=String.fromCharCode(56320+(1023&a))}else{let a=e[r++],s=e[r++];t[i++]=String.fromCharCode((15&n)<<12|(63&a)<<6|63&s)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){let n=e[t],a=t+1<e.length,s=a?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,u=n>>2,c=(3&n)<<4|s>>4,h=(15&s)<<2|l>>6,d=63&l;o||(d=64,a||(h=64)),i.push(r[u],r[c],r[h],r[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(n(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){let n=r[e.charAt(t++)],a=t<e.length?r[e.charAt(t)]:0,s=++t<e.length?r[e.charAt(t)]:64,l=++t<e.length?r[e.charAt(t)]:64;if(++t,null==n||null==a||null==s||null==l)throw new o;let u=n<<2|a>>4;if(i.push(u),64!==s){let e=a<<4&240|s>>2;if(i.push(e),64!==l){let e=s<<6&192|l;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let l=function(e){let t=n(e);return s.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},h=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,d=()=>{if(void 0===i||void 0===i.env)return;let e=i.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},f=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&c(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},m=e=>{var t,r;return null===(r=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},g=e=>{let t=m(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let i=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),i]:[t.substring(0,r),i]},_=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config};/**
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
 */class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
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
 */function y(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",i=e.iat||0,n=e.sub||e.user_id;if(!n)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:n,user_id:n,firebase:{sign_in_provider:"custom",identities:{}}},e);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(a)),""].join(".")}function v(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function w(){try{return"object"==typeof indexedDB}catch(e){return!1}}function E(){return new Promise((e,t)=>{try{let r=!0,i="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(i);n.onsuccess=()=>{n.result.close(),r||self.indexedDB.deleteDatabase(i),e(!0)},n.onupgradeneeded=()=>{r=!1},n.onerror=()=>{var e;t((null===(e=n.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function T(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}class A extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,n=this.errors[e],a=n?n.replace(I,(e,t)=>{let i=r[t];return null!=i?String(i):`<${t}?>`}):"Error",s=`${this.serviceName}: ${a} (${i}).`;return new A(i,s,r)}}let I=/\{\$([^}]+)}/g;function C(e){return null!==e&&"object"==typeof e}function D(e,t=1e3,r=2){let i=t*Math.pow(r,e);return Math.min(144e5,i+Math.round(.5*i*(Math.random()-.5)*2))}/**
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
 */function k(e){return e&&e._delegate?e._delegate:e}},357:function(e,t,r){"use strict";var i,n;e.exports=(null==(i=r.g.process)?void 0:i.env)&&"object"==typeof(null==(n=r.g.process)?void 0:n.env)?r.g.process:r(8081)},8081:function(e){!function(){var t={229:function(e){var t,r,i,n=e.exports={};function a(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var l=[],u=!1,c=-1;function h(){u&&i&&(u=!1,i.length?l=i.concat(l):c=-1,l.length&&d())}function d(){if(!u){var e=o(h);u=!0;for(var t=l.length;t;){for(i=l,l=[];++c<t;)i&&i[c].run();c=-1,t=l.length}i=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}n.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||u||o(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(e){return[]},n.binding=function(e){throw Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function i(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}},s=!0;try{t[e](a,a.exports,i),s=!1}finally{s&&delete r[e]}return a.exports}i.ab="//";var n=i(229);e.exports=n}()},8885:function(e,t,r){"use strict";r.d(t,{Jn:function(){return w},KN:function(){return A},Mq:function(){return T},Xd:function(){return _},ZF:function(){return E},qX:function(){return b}});var i=r(2680),n=r(9053),a=r(3943),s=r(6512);/**
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
 */class o{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let l="@firebase/app",u="0.10.5",c=new n.Yd("@firebase/app"),h="[DEFAULT]",d={[l]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},f=new Map,p=new Map,m=new Map;function g(e,t){try{e.container.addComponent(t)}catch(r){c.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function _(e){let t=e.name;if(m.has(t))return c.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(m.set(t,e),f.values()))g(r,e);for(let t of p.values())g(t,e);return!0}function b(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}let y=new a.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
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
 */class v{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new i.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw y.create("app-deleted",{appName:this._name})}}/**
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
 */let w="10.12.2";function E(e,t={}){let r=e;"object"!=typeof t&&(t={name:t});let n=Object.assign({name:h,automaticDataCollectionEnabled:!1},t),s=n.name;if("string"!=typeof s||!s)throw y.create("bad-app-name",{appName:String(s)});if(r||(r=(0,a.aH)()),!r)throw y.create("no-options");let o=f.get(s);if(o){if((0,a.vZ)(r,o.options)&&(0,a.vZ)(n,o.config))return o;throw y.create("duplicate-app",{appName:s})}let l=new i.H0(s);for(let e of m.values())l.addComponent(e);let u=new v(r,n,l);return f.set(s,u),u}function T(e=h){let t=f.get(e);if(!t&&e===h&&(0,a.aH)())return E();if(!t)throw y.create("no-app",{appName:e});return t}function A(e,t,r){var n;let a=null!==(n=d[e])&&void 0!==n?n:e;r&&(a+=`-${r}`);let s=a.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${a}" with version "${t}":`];s&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),c.warn(e.join(" "));return}_(new i.wA(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}let S="firebase-heartbeat-store",I=null;function C(){return I||(I=(0,s.X3)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(S)}catch(e){console.warn(e)}}}).catch(e=>{throw y.create("idb-open",{originalErrorMessage:e.message})})),I}async function D(e){try{let t=(await C()).transaction(S),r=await t.objectStore(S).get(O(e));return await t.done,r}catch(e){if(e instanceof a.ZR)c.warn(e.message);else{let t=y.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});c.warn(t.message)}}}async function k(e,t){try{let r=(await C()).transaction(S,"readwrite"),i=r.objectStore(S);await i.put(t,O(e)),await r.done}catch(e){if(e instanceof a.ZR)c.warn(e.message);else{let t=y.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});c.warn(t.message)}}}function O(e){return`${e.name}!${e.options.appId}`}class R{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new N(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=x();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=x(),{heartbeatsToSend:r,unsentEntries:i}=function(e,t=1024){let r=[],i=e.slice();for(let n of e){let e=r.find(e=>e.agent===n.agent);if(e){if(e.dates.push(n.date),L(r)>t){e.dates.pop();break}}else if(r.push({agent:n.agent,dates:[n.date]}),L(r)>t){r.pop();break}i=i.slice(1)}return{heartbeatsToSend:r,unsentEntries:i}}(this._heartbeatsCache.heartbeats),n=(0,a.L)(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function x(){return new Date().toISOString().substring(0,10)}class N{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,a.hl)()&&(0,a.eu)().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await D(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return k(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return k(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function L(e){return(0,a.L)(JSON.stringify({version:2,heartbeats:e})).length}_(new i.wA("platform-logger",e=>new o(e),"PRIVATE")),_(new i.wA("heartbeat",e=>new R(e),"PRIVATE")),A(l,u,""),A(l,u,"esm2017"),A("fire-js","")},2680:function(e,t,r){"use strict";r.d(t,{H0:function(){return o},wA:function(){return n}});var i=r(3943);class n{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */let a="[DEFAULT]";/**
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
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new i.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(i)return null;throw e}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:a})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=a){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=a){return this.instances.has(e)}getOptions(e=a){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(i);return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),n=null!==(r=this.onInitCallbacks.get(i))&&void 0!==r?r:new Set;n.add(e),this.onInitCallbacks.set(i,n);let a=this.instances.get(i);return a&&e(a,i),()=>{n.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===a?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=a){return this.component?this.component.multipleInstances?e:a:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},9053:function(e,t,r){"use strict";var i,n;r.d(t,{Yd:function(){return c}});/**
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
 */let a=[];(n=i||(i={}))[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT";let s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,l={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},u=(e,t,...r)=>{if(t<e.logLevel)return;let i=new Date().toISOString(),n=l[t];if(n)console[n](`[${i}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class c{constructor(e){this.name=e,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,a.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},7175:function(e,t,r){"use strict";let i,n,a,s;var o=r(8885),l=r(9053),u=r(3943),c=r(2680),h=r(6512);let d="@firebase/installations",f="0.6.7",p=`w:${f}`,m="FIS_v2",g=new u.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function _(e){return e instanceof u.ZR&&e.code.includes("request-failed")}/**
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
 */function b({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function y(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function v(e,t){let r=(await t.json()).error;return g.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function w({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function E(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
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
 */async function T({appConfig:e,heartbeatServiceProvider:t},{fid:r}){let i=b(e),n=w(e),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&n.append("x-firebase-client",e)}let s={method:"POST",headers:n,body:JSON.stringify({fid:r,authVersion:m,appId:e.appId,sdkVersion:p})},o=await E(()=>fetch(i,s));if(o.ok){let e=await o.json();return{fid:e.fid||r,registrationStatus:2,refreshToken:e.refreshToken,authToken:y(e.authToken)}}throw await v("Create Installation",o)}/**
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
 */function A(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */let S=/^[cdef][\w-]{21}$/;/**
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
 */function I(e){return`${e.appName}!${e.appId}`}/**
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
 */let C=new Map;function D(e,t){let r=I(e);k(r,t),function(e,t){let r=(!O&&"BroadcastChannel"in self&&((O=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{k(e.data.key,e.data.fid)}),O);r&&r.postMessage({key:e,fid:t}),0===C.size&&O&&(O.close(),O=null)}(r,t)}function k(e,t){let r=C.get(e);if(r)for(let e of r)e(t)}let O=null,R="firebase-installations-store",x=null;function N(){return x||(x=(0,h.X3)("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(R)}})),x}async function L(e,t){let r=I(e),i=(await N()).transaction(R,"readwrite"),n=i.objectStore(R),a=await n.get(r);return await n.put(t,r),await i.done,a&&a.fid===t.fid||D(e,t.fid),t}async function F(e){let t=I(e),r=(await N()).transaction(R,"readwrite");await r.objectStore(R).delete(t),await r.done}async function U(e,t){let r=I(e),i=(await N()).transaction(R,"readwrite"),n=i.objectStore(R),a=await n.get(r),s=t(a);return void 0===s?await n.delete(r):await n.put(s,r),await i.done,s&&(!a||a.fid!==s.fid)&&D(e,s.fid),s}/**
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
 */async function P(e){let t;let r=await U(e.appConfig,r=>{let i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(g.create("app-offline"))};let r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=B(e,r);return{installationEntry:r,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:V(e)}:{installationEntry:t}}(e,j(r||{fid:function(){try{let e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;let t=btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_").substr(0,22);return S.test(t)?t:""}catch(e){return""}}(),registrationStatus:0}));return t=i.registrationPromise,i.installationEntry});return""===r.fid?{installationEntry:await t}:{installationEntry:r,registrationPromise:t}}async function B(e,t){try{let r=await T(e,t);return L(e.appConfig,r)}catch(r){throw _(r)&&409===r.customData.serverCode?await F(e.appConfig):await L(e.appConfig,{fid:t.fid,registrationStatus:0}),r}}async function V(e){let t=await M(e.appConfig);for(;1===t.registrationStatus;)await A(100),t=await M(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:r}=await P(e);return r||t}return t}function M(e){return U(e,e=>{if(!e)throw g.create("installation-not-found");return j(e)})}function j(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
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
 */async function $({appConfig:e,heartbeatServiceProvider:t},r){let i=function(e,{fid:t}){return`${b(e)}/${t}/authTokens:generate`}(e,r),n=function(e,{refreshToken:t}){let r=w(e);return r.append("Authorization",`${m} ${t}`),r}(e,r),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&n.append("x-firebase-client",e)}let s={method:"POST",headers:n,body:JSON.stringify({installation:{sdkVersion:p,appId:e.appId}})},o=await E(()=>fetch(i,s));if(o.ok)return y(await o.json());throw await v("Generate Auth Token",o)}/**
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
 */async function H(e,t=!1){let r;let i=await U(e.appConfig,i=>{var n;if(!X(i))throw g.create("not-registered");let a=i.authToken;if(!t&&2===(n=a).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(n))return i;if(1===a.requestStatus)return r=q(e,t),i;{if(!navigator.onLine)throw g.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return r=W(e,t),t}});return r?await r:i.authToken}async function q(e,t){let r=await z(e.appConfig);for(;1===r.authToken.requestStatus;)await A(100),r=await z(e.appConfig);let i=r.authToken;return 0===i.requestStatus?H(e,t):i}function z(e){return U(e,e=>{var t;if(!X(e))throw g.create("not-registered");return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function W(e,t){try{let r=await $(e,t),i=Object.assign(Object.assign({},t),{authToken:r});return await L(e.appConfig,i),r}catch(r){if(_(r)&&(401===r.customData.serverCode||404===r.customData.serverCode))await F(e.appConfig);else{let r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await L(e.appConfig,r)}throw r}}function X(e){return void 0!==e&&2===e.registrationStatus}/**
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
 */async function G(e){let{installationEntry:t,registrationPromise:r}=await P(e);return r?r.catch(console.error):H(e).catch(console.error),t.fid}/**
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
 */async function K(e,t=!1){return await Z(e),(await H(e,t)).token}async function Z(e){let{registrationPromise:t}=await P(e);t&&await t}function J(e){return g.create("missing-app-config-values",{valueName:e})}/**
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
 */let Y="installations";(0,o.Xd)(new c.wA(Y,e=>{let t=e.getProvider("app").getImmediate(),r=/**
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
 */function(e){if(!e||!e.options)throw J("App Configuration");if(!e.name)throw J("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw J(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),i=(0,o.qX)(t,"heartbeat");return{app:t,appConfig:r,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},"PUBLIC")),(0,o.Xd)(new c.wA("installations-internal",e=>{let t=e.getProvider("app").getImmediate(),r=(0,o.qX)(t,Y).getImmediate();return{getId:()=>G(r),getToken:e=>K(r,e)}},"PRIVATE")),(0,o.KN)(d,f),(0,o.KN)(d,f,"esm2017");/**
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
 */let Q="analytics",ee="https://www.googletagmanager.com/gtag/js",et=new l.Yd("@firebase/analytics"),er=new u.LL("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
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
 */function ei(e){if(!e.startsWith(ee)){let t=er.create("invalid-gtag-resource",{gtagURL:e});return et.warn(t.message),""}return e}function en(e){return Promise.all(e.map(e=>e.catch(e=>e)))}async function ea(e,t,r,i,n,a){let s=i[n];try{if(s)await t[s];else{let e=(await en(r)).find(e=>e.measurementId===n);e&&await t[e.appId]}}catch(e){et.error(e)}e("config",n,a)}async function es(e,t,r,i,n){try{let a=[];if(n&&n.send_to){let e=n.send_to;Array.isArray(e)||(e=[e]);let i=await en(r);for(let r of e){let e=i.find(e=>e.measurementId===r),n=e&&t[e.appId];if(n)a.push(n);else{a=[];break}}}0===a.length&&(a=Object.values(t)),await Promise.all(a),e("event",i,n||{})}catch(e){et.error(e)}}class eo{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}let el=new eo;async function eu(e){var t;let{appId:r,apiKey:i}=e,n={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":i})},a="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",r),s=await fetch(a,n);if(200!==s.status&&304!==s.status){let e="";try{let r=await s.json();(null===(t=r.error)||void 0===t?void 0:t.message)&&(e=r.error.message)}catch(e){}throw er.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}async function ec(e,t=el,r){let{appId:i,apiKey:n,measurementId:a}=e.options;if(!i)throw er.create("no-app-id");if(!n){if(a)return{measurementId:a,appId:i};throw er.create("no-api-key")}let s=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new ed;return setTimeout(async()=>{o.abort()},void 0!==r?r:6e4),eh({appId:i,apiKey:n,measurementId:a},s,o,t)}async function eh(e,{throttleEndTimeMillis:t,backoffCount:r},i,n=el){var a;let{appId:s,measurementId:o}=e;try{await new Promise((e,r)=>{let n=setTimeout(e,Math.max(t-Date.now(),0));i.addEventListener(()=>{clearTimeout(n),r(er.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}catch(e){if(o)return et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:s,measurementId:o};throw e}try{let t=await eu(e);return n.deleteThrottleMetadata(s),t}catch(c){if(!function(e){if(!(e instanceof u.ZR)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(c)){if(n.deleteThrottleMetadata(s),o)return et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:s,measurementId:o};throw c}let t=503===Number(null===(a=null==c?void 0:c.customData)||void 0===a?void 0:a.httpStatus)?(0,u.$s)(r,n.intervalMillis,30):(0,u.$s)(r,n.intervalMillis),l={throttleEndTimeMillis:Date.now()+t,backoffCount:r+1};return n.setThrottleMetadata(s,l),et.debug(`Calling attemptFetch again in ${t} millis`),eh(e,l,i,n)}}class ed{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ef(e,t,r,i,n){if(n&&n.global){e("event",r,i);return}{let n=await t;e("event",r,Object.assign(Object.assign({},i),{send_to:n}))}}/**
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
 */async function ep(){if(!(0,u.hl)())return et.warn(er.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await (0,u.eu)()}catch(e){return et.warn(er.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}async function em(e,t,r,a,s,o,l){var u;let c=ec(e);c.then(t=>{r[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&et.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>et.error(e)),t.push(c);let h=ep().then(e=>e?a.getId():void 0),[d,f]=await Promise.all([c,h]);!function(e){for(let t of Object.values(window.document.getElementsByTagName("script")))if(t.src&&t.src.includes(ee)&&t.src.includes(e))return t;return null}(o)&&function(e,t){var r,i;let n;let a=(r="firebase-js-sdk-policy",i={createScriptURL:ei},window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,i)),n),s=document.createElement("script"),o=`${ee}?l=${e}&id=${t}`;s.src=a?null==a?void 0:a.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}(o,d.measurementId),n&&(s("consent","default",n),n=void 0),s("js",new Date);let p=null!==(u=null==l?void 0:l.config)&&void 0!==u?u:{};return p.origin="firebase",p.update=!0,null!=f&&(p.firebase_id=f),s("config",d.measurementId,p),i&&(s("set",i),i=void 0),d.measurementId}/**
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
 */class eg{constructor(e){this.app=e}_delete(){return delete e_[this.app.options.appId],Promise.resolve()}}let e_={},eb=[],ey={},ev="dataLayer",ew=!1,eE="@firebase/analytics",eT="0.10.4";(0,o.Xd)(new c.wA(Q,(e,{options:t})=>(function(e,t,r){!function(){let e=[];if((0,u.ru)()&&e.push("This is a browser extension environment."),(0,u.zI)()||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),r=er.create("invalid-analytics-context",{errorInfo:t});et.warn(r.message)}}();let i=e.options.appId;if(!i)throw er.create("no-app-id");if(!e.options.apiKey){if(e.options.measurementId)et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw er.create("no-api-key")}if(null!=e_[i])throw er.create("already-exists",{id:i});if(!ew){var n,o;let e,t;e=[],Array.isArray(window[ev])?e=window[ev]:window[ev]=e;let{wrappedGtag:r,gtagCore:i}=(n="gtag",t=function(...e){window[ev].push(arguments)},window[n]&&"function"==typeof window[n]&&(t=window[n]),window[n]=(o=t,async function(e,...t){try{if("event"===e){let[e,r]=t;await es(o,e_,eb,e,r)}else if("config"===e){let[e,r]=t;await ea(o,e_,eb,ey,e,r)}else if("consent"===e){let[e,r]=t;o("consent",e,r)}else if("get"===e){let[e,r,i]=t;o("get",e,r,i)}else if("set"===e){let[e]=t;o("set",e)}else o(e,...t)}catch(e){et.error(e)}}),{gtagCore:t,wrappedGtag:window[n]});s=r,a=i,ew=!0}return e_[i]=em(e,eb,ey,t,a,ev,r),new eg(e)})(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),(0,o.Xd)(new c.wA("analytics-internal",function(e){try{let t=e.getProvider(Q).getImmediate();return{logEvent:(e,r,i)=>{var n;return n=t,void(n=(0,u.m9)(n),ef(s,e_[n.app.options.appId],e,r,i).catch(e=>et.error(e)))}}}catch(e){throw er.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),(0,o.KN)(eE,eT),(0,o.KN)(eE,eT,"esm2017")},5236:function(e,t,r){"use strict";r.d(t,{ZF:function(){return i.ZF}});var i=r(8885);/**
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
 */(0,i.KN)("firebase","10.12.2","app")},9854:function(e,t,r){"use strict";r.d(t,{cF:function(){return ef},iH:function(){return ed},B0:function(){return eh}});var i,n,a,s,o=r(8885),l=r(3943),u=r(2680);/**
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
 */let c="firebasestorage.googleapis.com",h="storageBucket";/**
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
 */class d extends l.ZR{constructor(e,t,r=0){super(f(e),`Firebase Storage: ${t} (${f(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return f(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function f(e){return"storage/"+e}function p(){return new d(a.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function m(){return new d(a.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function g(){return new d(a.CANCELED,"User canceled the upload/download.")}function _(){return new d(a.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function b(e){return new d(a.INVALID_ARGUMENT,e)}function y(){return new d(a.APP_DELETED,"The Firebase app was deleted.")}function v(e,t){return new d(a.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function w(e){throw new d(a.INTERNAL_ERROR,"Internal error: "+e)}(i=a||(a={})).UNKNOWN="unknown",i.OBJECT_NOT_FOUND="object-not-found",i.BUCKET_NOT_FOUND="bucket-not-found",i.PROJECT_NOT_FOUND="project-not-found",i.QUOTA_EXCEEDED="quota-exceeded",i.UNAUTHENTICATED="unauthenticated",i.UNAUTHORIZED="unauthorized",i.UNAUTHORIZED_APP="unauthorized-app",i.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",i.INVALID_CHECKSUM="invalid-checksum",i.CANCELED="canceled",i.INVALID_EVENT_NAME="invalid-event-name",i.INVALID_URL="invalid-url",i.INVALID_DEFAULT_BUCKET="invalid-default-bucket",i.NO_DEFAULT_BUCKET="no-default-bucket",i.CANNOT_SLICE_BLOB="cannot-slice-blob",i.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",i.NO_DOWNLOAD_URL="no-download-url",i.INVALID_ARGUMENT="invalid-argument",i.INVALID_ARGUMENT_COUNT="invalid-argument-count",i.APP_DELETED="app-deleted",i.INVALID_ROOT_OPERATION="invalid-root-operation",i.INVALID_FORMAT="invalid-format",i.INTERNAL_ERROR="internal-error",i.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
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
 */class E{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=E.makeFromUrl(e,t)}catch(t){return new E(e,"")}if(""===r.path)return r;throw new d(a.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let r=null,i="([A-Za-z0-9.\\-_]+)",n=RegExp("^gs://"+i+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}let o=t.replace(/[.]/g,"\\."),l=[{regex:n,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${i}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:RegExp(`^https?://${t===c?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${i}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let t=0;t<l.length;t++){let i=l[t],n=i.regex.exec(e);if(n){let e=n[i.indices.bucket],t=n[i.indices.path];t||(t=""),r=new E(e,t),i.postModify(r);break}}if(null==r)throw new d(a.INVALID_URL,"Invalid URL '"+e+"'.");return r}}class T{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function A(e){return"string"==typeof e||e instanceof String}function S(e){return I()&&e instanceof Blob}function I(){return"undefined"!=typeof Blob}function C(e,t,r,i){if(i<t)throw b(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>r)throw b(`Invalid value for '${e}'. Expected ${r} or less.`)}/**
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
 */function D(e,t,r){let i=t;return null==r&&(i=`https://${t}`),`${r}://${i}/v0${e}`}/**
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
 */function k(e,t){let r=e>=500&&e<600,i=-1!==[408,429].indexOf(e),n=-1!==t.indexOf(e);return r||i||n}(n=s||(s={}))[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT";/**
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
 */class O{constructor(e,t,r,i,n,a,s,o,l,u,c,h=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=n,this.additionalRetryCodes_=a,this.callback_=s,this.errorCallback_=o,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=c,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let e=(e,t)=>{let r=this.resolve_,i=this.reject_,n=t.connection;if(t.wasSuccessCode)try{let e=this.callback_(n,n.getResponse());void 0!==e?r(e):r()}catch(e){i(e)}else if(null!==n){let e=p();e.serverResponse=n.getErrorText(),i(this.errorCallback_?this.errorCallback_(n,e):e)}else i(t.canceled?this.appDelete_?y():g():m())};this.canceled_?e(!1,new R(!1,null,!0)):this.backoffId_=/**
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
 */function(e,t,r){let i=1,n=null,a=null,s=!1,o=0,l=!1;function u(...e){l||(l=!0,t.apply(null,e))}function c(t){n=setTimeout(()=>{n=null,e(d,2===o)},t)}function h(){a&&clearTimeout(a)}function d(e,...t){let r;if(l){h();return}if(e||2===o||s){h(),u.call(null,e,...t);return}i<64&&(i*=2),1===o?(o=2,r=0):r=(i+Math.random())*1e3,c(r)}let f=!1;function p(e){!f&&(f=!0,h(),!l&&(null!==n?(e||(o=2),clearTimeout(n),c(0)):e||(o=1)))}return c(0),a=setTimeout(()=>{s=!0,p(!0)},r),p}((e,t)=>{if(t){e(!1,new R(!1,null,!0));return}let r=this.connectionFactory_();this.pendingConnection_=r;let i=e=>{let t=e.loaded,r=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,r)};null!==this.progressCallback_&&r.addUploadProgressListener(i),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&r.removeUploadProgressListener(i),this.pendingConnection_=null;let t=r.getErrorCode()===s.NO_ERROR,n=r.getStatus();if(!t||k(n,this.additionalRetryCodes_)&&this.retry){e(!1,new R(!1,null,r.getErrorCode()===s.ABORT));return}e(!0,new R(-1!==this.successCodes_.indexOf(n),r))})},e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class R{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function x(...e){let t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){let r=new t;for(let t=0;t<e.length;t++)r.append(e[t]);return r.getBlob()}if(I())return new Blob(e);throw new d(a.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}/**
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
 */let N={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class L{constructor(e,t){this.data=e,this.contentType=t||null}}function F(e){let t=[];for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<=127?t.push(i):i<=2047?t.push(192|i>>6,128|63&i):(64512&i)==55296?r<e.length-1&&(64512&e.charCodeAt(r+1))==56320?(i=65536|(1023&i)<<10|1023&e.charCodeAt(++r),t.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)):t.push(239,191,189):(64512&i)==56320?t.push(239,191,189):t.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(t)}function U(e,t){let r;switch(e){case N.BASE64:{let r=-1!==t.indexOf("-"),i=-1!==t.indexOf("_");if(r||i)throw v(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case N.BASE64URL:{let r=-1!==t.indexOf("+"),i=-1!==t.indexOf("/");if(r||i)throw v(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}}try{r=/**
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
 */function(e){if("undefined"==typeof atob)throw new d(a.UNSUPPORTED_ENVIRONMENT,"base-64 is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.");return atob(e)}(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw v(e,"Invalid character found")}let i=new Uint8Array(r.length);for(let e=0;e<r.length;e++)i[e]=r.charCodeAt(e);return i}class P{constructor(e){var t;this.base64=!1,this.contentType=null;let r=e.match(/^data:([^,]+)?,/);if(null===r)throw v(N.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let i=r[1]||null;null!=i&&(this.base64=(t=";base64",i.length>=t.length&&i.substring(i.length-t.length)===t),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}/**
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
 */class B{constructor(e,t){let r=0,i="";S(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(!S(this.data_))return new B(new Uint8Array(this.data_.buffer,e,t-e),!0);{var r;let i=(r=this.data_).webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null;return null===i?null:new B(i)}}static getBlob(...e){if(I()){let t=e.map(e=>e instanceof B?e.data_:e);return new B(x.apply(null,t))}{let t=e.map(e=>A(e)?function(e,t){switch(e){case N.RAW:return new L(F(t));case N.BASE64:case N.BASE64URL:return new L(U(e,t));case N.DATA_URL:return new L(function(e){let t=new P(e);return t.base64?U(N.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw v(N.DATA_URL,"Malformed data URL.")}return F(t)}(t.rest)}(t),new P(t).contentType)}throw p()}(N.RAW,e).data:e.data_),r=0;t.forEach(e=>{r+=e.byteLength});let i=new Uint8Array(r),n=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)i[n++]=e[t]}),new B(i,!0)}}uploadData(){return this.data_}}function V(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}/**
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
 */function M(e,t){return t}class j{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||M}}let $=null;function H(e,t){let r={},i=t.length;for(let n=0;n<i;n++){let i=t[n];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}class q{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function z(e){if(!e)throw p()}function W(e,t){return function(r,i){let n=function(e,t,r){let i=/**
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
 */function(e){var t;let r;try{r=JSON.parse(e)}catch(e){return null}return"object"!=typeof(t=r)||Array.isArray(t)?null:r}(t);return null===i?null:function(e,t,r){let i={};i.type="file";let n=r.length;for(let e=0;e<n;e++){let n=r[e];i[n.local]=n.xform(i,t[n.server])}return Object.defineProperty(i,"ref",{get:function(){let t=new E(i.bucket,i.fullPath);return e._makeStorageReference(t)}}),i}(e,i,r)}(e,i,t);return z(null!==n),n}}function X(e){return function(t,r){var i,n;let s;return 401===t.getStatus()?s=t.getErrorText().includes("Firebase App Check token is invalid")?new d(a.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new d(a.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(i=e.bucket,s=new d(a.QUOTA_EXCEEDED,"Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(n=e.path,s=new d(a.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}}function G(e,t,r){let i=Object.assign({},r);return i.fullPath=e.path,i.size=t.size(),!i.contentType&&(i.contentType=t&&t.type()||"application/octet-stream"),i}class K{constructor(e,t,r,i){this.current=e,this.total=t,this.finalized=!!r,this.metadata=i||null}}function Z(e,t){let r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){z(!1)}return z(!!r&&-1!==(t||["active"]).indexOf(r)),r}let J={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Y(e){switch(e){case"running":case"pausing":case"canceling":return J.RUNNING;case"paused":return J.PAUSED;case"success":return J.SUCCESS;case"canceled":return J.CANCELED;default:return J.ERROR}}/**
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
 */class Q{constructor(e,t,r){"function"==typeof e||null!=t||null!=r?(this.next=e,this.error=null!=t?t:void 0,this.complete=null!=r?r:void 0):(this.next=e.next,this.error=e.error,this.complete=e.complete)}}/**
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
 */function ee(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class et{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=s.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=s.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=s.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw w("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==i)for(let e in i)i.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,i[e].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw w("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw w("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return -1}}getResponse(){if(!this.sent_)throw w("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw w("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class er extends et{initXhr(){this.xhr_.responseType="text"}}function ei(){return new er}/**
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
 */class en{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=function(){if($)return $;let e=[];e.push(new j("bucket")),e.push(new j("generation")),e.push(new j("metageneration")),e.push(new j("name","fullPath",!0));let t=new j("name");t.xform=function(e,t){return!A(t)||t.length<2?t:V(t)},e.push(t);let r=new j("size");return r.xform=function(e,t){return void 0!==t?Number(t):t},e.push(r),e.push(new j("timeCreated")),e.push(new j("updated")),e.push(new j("md5Hash",null,!0)),e.push(new j("cacheControl",null,!0)),e.push(new j("contentDisposition",null,!0)),e.push(new j("contentEncoding",null,!0)),e.push(new j("contentLanguage",null,!0)),e.push(new j("contentType",null,!0)),e.push(new j("metadata","customMetadata",!0)),$=e}(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(a.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{let t=this.isExponentialBackoffExpired();if(k(e.status,[])){if(t)e=m();else{this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,this.completeTransitions_();return}}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(a.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){let e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}})}_createResumable(){this._resolveToken((e,t)=>{let r=function(e,t,r,i,n){let a=t.bucketOnlyServerUrl(),s=G(t,i,n),o={name:s.fullPath},l=D(a,e.host,e._protocol),u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${i.size()}`,"X-Goog-Upload-Header-Content-Type":s.contentType,"Content-Type":"application/json; charset=utf-8"},c=H(s,r),h=new q(l,"POST",function(e){let t;Z(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){z(!1)}return z(A(t)),t},e.maxUploadRetryTime);return h.urlParams=o,h.headers=u,h.body=c,h.errorHandler=X(t),h}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,ei,e,t);this._request=i,i.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){let e=this._uploadUrl;this._resolveToken((t,r)=>{let i=function(e,t,r,i){let n=new q(r,"POST",function(e){let t=Z(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){z(!1)}r||z(!1);let n=Number(r);return z(!isNaN(n)),new K(n,i.size(),"final"===t)},e.maxUploadRetryTime);return n.headers={"X-Goog-Upload-Command":"query"},n.errorHandler=X(t),n}(this._ref.storage,this._ref._location,e,this._blob),n=this._ref.storage._makeRequest(i,ei,t,r);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){let e=262144*this._chunkMultiplier,t=new K(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,n)=>{let s;try{s=function(e,t,r,i,n,s,o,l){let u=new K(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=i.size()),i.size()!==u.total)throw new d(a.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");let c=u.total-u.current,h=c;n>0&&(h=Math.min(h,n));let f=u.current,p=f+h,m={"X-Goog-Upload-Command":0===h?"finalize":c===h?"upload, finalize":"upload","X-Goog-Upload-Offset":`${u.current}`},g=i.slice(f,p);if(null===g)throw _();let b=new q(r,"POST",function(e,r){let n;let a=Z(e,["active","final"]),o=u.current+h,l=i.size();return n="final"===a?W(t,s)(e,r):null,new K(o,l,"final"===a,n)},t.maxUploadRetryTime);return b.headers=m,b.body=g.uploadData(),b.progressCallback=l||null,b.errorHandler=X(e),b}(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){this._error=e,this._transition("error");return}let o=this._ref.storage._makeRequest(s,ei,i,n,!1);this._request=o,o.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){262144*this._chunkMultiplier*2<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{let r=function(e,t,r){let i=D(t.fullServerUrl(),e.host,e._protocol),n=e.maxOperationRetryTime,s=new q(i,"GET",W(e,r),n);return s.errorHandler=function(e){let t=X(e);return function(r,i){let n=t(r,i);if(404===r.getStatus()){var s;s=e.path,n=new d(a.OBJECT_NOT_FOUND,"Object '"+s+"' does not exist.")}return n.serverResponse=i.serverResponse,n}}(t),s}(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,ei,e,t);this._request=i,i.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{let r=function(e,t,r,i,n){let a=t.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"},o=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();s["Content-Type"]="multipart/related; boundary="+o;let l=G(t,i,n),u="--"+o+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+H(l,r)+"\r\n--"+o+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",c=B.getBlob(u,i,"\r\n--"+o+"--");if(null===c)throw _();let h={name:l.fullPath},d=D(a,e.host,e._protocol),f=e.maxUploadRetryTime,p=new q(d,"POST",W(e,r),f);return p.urlParams=h,p.headers=s,p.body=c.uploadData(),p.errorHandler=X(t),p}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,ei,e,t);this._request=i,i.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){let t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":let t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=g(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){let e=Y(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,i){let n=new Q(t||void 0,r||void 0,i||void 0);return this._addObserver(n),()=>{this._removeObserver(n)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){let t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(Y(this._state)){case J.SUCCESS:ee(this._resolve.bind(null,this.snapshot))();break;case J.CANCELED:case J.ERROR:ee(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Y(this._state)){case J.RUNNING:case J.PAUSED:e.next&&ee(e.next.bind(e,this.snapshot))();break;case J.SUCCESS:e.complete&&ee(e.complete.bind(e))();break;case J.CANCELED:case J.ERROR:default:e.error&&ee(e.error.bind(e,this._error))()}}resume(){let e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){let e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){let e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}/**
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
 */class ea{constructor(e,t){this._service=e,t instanceof E?this._location=t:this._location=E.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ea(e,t)}get root(){let e=new E(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return V(this._location.path)}get storage(){return this._service}get parent(){let e=/**
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
 */function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");return -1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;let t=new E(this._location.bucket,e);return new ea(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw new d(a.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}function es(e,t){let r=null==t?void 0:t[h];return null==r?null:E.makeFromBucketSpec(r,e)}class eo{constructor(e,t,r,i,n){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=n,this._bucket=null,this._host=c,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=i?this._bucket=E.makeFromBucketSpec(i,this._host):this._bucket=es(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=E.makeFromBucketSpec(this._url,e):this._bucket=es(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){C("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){C("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ea(this,e)}_makeRequest(e,t,r,i,n=!0){if(this._deleted)return new T(y());{let a=function(e,t,r,i,n,a,s=!0){let o=function(e){let t=encodeURIComponent,r="?";for(let i in e)e.hasOwnProperty(i)&&(r=r+(t(i)+"=")+t(e[i])+"&");return r.slice(0,-1)}(e.urlParams),l=e.url+o,u=Object.assign({},e.headers);return t&&(u["X-Firebase-GMPID"]=t),null!==r&&r.length>0&&(u.Authorization="Firebase "+r),u["X-Firebase-Storage-Version"]="webjs/"+(null!=a?a:"AppManager"),null!==i&&(u["X-Firebase-AppCheck"]=i),new O(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n,s)}(e,this._appId,r,i,t,this._firebaseVersion,n);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){let[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}let el="@firebase/storage",eu="0.12.5",ec="storage";function eh(e,t,r){var i;return(i=e=(0,l.m9)(e))._throwIfRoot("uploadBytesResumable"),new en(i,new B(t),r)}function ed(e,t){return function(e,t){if(!(t&&/^[A-Za-z]+:\/\//.test(t)))return function e(t,r){if(t instanceof eo){if(null==t._bucket)throw new d(a.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+h+"' property when initializing the app?");let i=new ea(t,t._bucket);return null!=r?e(i,r):i}return void 0!==r?function(e,t){let r=function(e,t){let r=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?r:e+"/"+r}(e._location.path,t),i=new E(e._location.bucket,r);return new ea(e.storage,i)}(t,r):t}(e,t);if(e instanceof eo)return new ea(e,t);throw b("To use ref(service, url), the first argument must be a Storage instance.")}(e=(0,l.m9)(e),t)}function ef(e=(0,o.Mq)(),t){e=(0,l.m9)(e);let r=(0,o.qX)(e,ec).getImmediate({identifier:t}),i=(0,l.P0)("storage");return i&&function(e,t,r,i={}){!function(e,t,r,i={}){e.host=`${t}:${r}`,e._protocol="http";let{mockUserToken:n}=i;n&&(e._overrideAuthToken="string"==typeof n?n:(0,l.Sg)(n,e.app.options.projectId))}(e,t,r,i)}(r,...i),r}(0,o.Xd)(new u.wA(ec,function(e,{instanceIdentifier:t}){return new eo(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t,o.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,o.KN)(el,eu,""),(0,o.KN)(el,eu,"esm2017")},6512:function(e,t,r){"use strict";let i,n,a;r.d(t,{X3:function(){return m}});let s=(e,t)=>t.some(t=>e instanceof t),o=new WeakMap,l=new WeakMap,u=new WeakMap,c=new WeakMap,h=new WeakMap,d={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return l.get(e);if("objectStoreNames"===t)return e.objectStoreNames||u.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return f(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function f(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let i=()=>{e.removeEventListener("success",n),e.removeEventListener("error",a)},n=()=>{t(f(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",n),e.addEventListener("error",a)});return t.then(t=>{t instanceof IDBCursor&&o.set(t,e)}).catch(()=>{}),h.set(t,e),t}(e);if(c.has(e))return c.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(n||(n=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(p(this),e),f(o.get(this))}:function(...e){return f(t.apply(p(this),e))}:function(e,...r){let i=t.call(p(this),e,...r);return u.set(i,e.sort?e.sort():[e]),f(i)}:(t instanceof IDBTransaction&&function(e){if(l.has(e))return;let t=new Promise((t,r)=>{let i=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",a),e.removeEventListener("abort",a)},n=()=>{t(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",n),e.addEventListener("error",a),e.addEventListener("abort",a)});l.set(e,t)}(t),s(t,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,d):t;return r!==e&&(c.set(e,r),h.set(r,e)),r}let p=e=>h.get(e);function m(e,t,{blocked:r,upgrade:i,blocking:n,terminated:a}={}){let s=indexedDB.open(e,t),o=f(s);return i&&s.addEventListener("upgradeneeded",e=>{i(f(s.result),e.oldVersion,e.newVersion,f(s.transaction),e)}),r&&s.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),o.then(e=>{a&&e.addEventListener("close",()=>a()),n&&e.addEventListener("versionchange",e=>n(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}let g=["get","getKey","getAll","getAllKeys","count"],_=["put","add","delete","clear"],b=new Map;function y(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(b.get(t))return b.get(t);let r=t.replace(/FromIndex$/,""),i=t!==r,n=_.includes(r);if(!(r in(i?IDBIndex:IDBObjectStore).prototype)||!(n||g.includes(r)))return;let a=async function(e,...t){let a=this.transaction(e,n?"readwrite":"readonly"),s=a.store;return i&&(s=s.index(t.shift())),(await Promise.all([s[r](...t),n&&a.done]))[0]};return b.set(t,a),a}d={...a=d,get:(e,t,r)=>y(e,t)||a.get(e,t,r),has:(e,t)=>!!y(e,t)||a.has(e,t)}},9343:function(e,t,r){"use strict";r.d(t,{cI:function(){return em}});var i=r(2265),n=e=>"checkbox"===e.type,a=e=>e instanceof Date,s=e=>null==e;let o=e=>"object"==typeof e;var l=e=>!s(e)&&!Array.isArray(e)&&o(e)&&!a(e),u=e=>l(e)&&e.target?n(e.target)?e.target.checked:e.target.value:e,c=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,h=(e,t)=>e.has(c(t)),d=e=>{let t=e.constructor&&e.constructor.prototype;return l(t)&&t.hasOwnProperty("isPrototypeOf")},f="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function p(e){let t;let r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(!(f&&(e instanceof Blob||e instanceof FileList))&&(r||l(e))))return e;else if(t=r?[]:{},r||d(e))for(let r in e)e.hasOwnProperty(r)&&(t[r]=p(e[r]));else t=e;return t}var m=e=>Array.isArray(e)?e.filter(Boolean):[],g=e=>void 0===e,_=(e,t,r)=>{if(!t||!l(e))return r;let i=m(t.split(/[,[\].]+?/)).reduce((e,t)=>s(e)?e:e[t],e);return g(i)||i===e?g(e[t])?r:e[t]:i},b=e=>"boolean"==typeof e,y=e=>/^\w*$/.test(e),v=e=>m(e.replace(/["|']|\]/g,"").split(/\.|\[/)),w=(e,t,r)=>{let i=-1,n=y(t)?[t]:v(t),a=n.length,s=a-1;for(;++i<a;){let t=n[i],a=r;if(i!==s){let r=e[t];a=l(r)||Array.isArray(r)?r:isNaN(+n[i+1])?{}:[]}if("__proto__"===t)return;e[t]=a,e=e[t]}return e};let E={BLUR:"blur",FOCUS_OUT:"focusout"},T={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},A={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};i.createContext(null);var S=(e,t,r,i=!0)=>{let n={defaultValues:t._defaultValues};for(let a in e)Object.defineProperty(n,a,{get:()=>(t._proxyFormState[a]!==T.all&&(t._proxyFormState[a]=!i||T.all),r&&(r[a]=!0),e[a])});return n},I=e=>l(e)&&!Object.keys(e).length,C=(e,t,r,i)=>{r(e);let{name:n,...a}=e;return I(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find(e=>t[e]===(!i||T.all))},D=e=>Array.isArray(e)?e:[e],k=e=>"string"==typeof e,O=(e,t,r,i,n)=>k(e)?(i&&t.watch.add(e),_(r,e,n)):Array.isArray(e)?e.map(e=>(i&&t.watch.add(e),_(r,e))):(i&&(t.watchAll=!0),r),R=(e,t,r,i,n)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[i]:n||!0}}:{},x=e=>({isOnSubmit:!e||e===T.onSubmit,isOnBlur:e===T.onBlur,isOnChange:e===T.onChange,isOnAll:e===T.all,isOnTouch:e===T.onTouched}),N=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));let L=(e,t,r,i)=>{for(let n of r||Object.keys(e)){let r=_(e,n);if(r){let{_f:e,...a}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],n)&&!i||e.ref&&t(e.ref,e.name)&&!i)break;L(a,t)}else l(a)&&L(a,t)}}};var F=(e,t,r)=>{let i=m(_(e,r));return w(i,"root",t[r]),w(e,r,i),e},U=e=>"file"===e.type,P=e=>"function"==typeof e,B=e=>{if(!f)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},V=e=>k(e),M=e=>"radio"===e.type,j=e=>e instanceof RegExp;let $={value:!1,isValid:!1},H={value:!0,isValid:!0};var q=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!g(e[0].attributes.value)?g(e[0].value)||""===e[0].value?H:{value:e[0].value,isValid:!0}:H:$}return $};let z={isValid:!1,value:null};var W=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,z):z;function X(e,t,r="validate"){if(V(e)||Array.isArray(e)&&e.every(V)||b(e)&&!e)return{type:r,message:V(e)?e:"",ref:t}}var G=e=>l(e)&&!j(e)?e:{value:e,message:""},K=async(e,t,r,i,a)=>{let{ref:o,refs:u,required:c,maxLength:h,minLength:d,min:f,max:p,pattern:m,validate:y,name:v,valueAsNumber:w,mount:E,disabled:T}=e._f,S=_(t,v);if(!E||T)return{};let C=u?u[0]:o,D=e=>{i&&C.reportValidity&&(C.setCustomValidity(b(e)?"":e||""),C.reportValidity())},O={},x=M(o),N=n(o),L=(w||U(o))&&g(o.value)&&g(S)||B(o)&&""===o.value||""===S||Array.isArray(S)&&!S.length,F=R.bind(null,v,r,O),$=(e,t,r,i=A.maxLength,n=A.minLength)=>{let a=e?t:r;O[v]={type:e?i:n,message:a,ref:o,...F(e?i:n,a)}};if(a?!Array.isArray(S)||!S.length:c&&(!(x||N)&&(L||s(S))||b(S)&&!S||N&&!q(u).isValid||x&&!W(u).isValid)){let{value:e,message:t}=V(c)?{value:!!c,message:c}:G(c);if(e&&(O[v]={type:A.required,message:t,ref:C,...F(A.required,t)},!r))return D(t),O}if(!L&&(!s(f)||!s(p))){let e,t;let i=G(p),n=G(f);if(s(S)||isNaN(S)){let r=o.valueAsDate||new Date(S),a=e=>new Date(new Date().toDateString()+" "+e),s="time"==o.type,l="week"==o.type;k(i.value)&&S&&(e=s?a(S)>a(i.value):l?S>i.value:r>new Date(i.value)),k(n.value)&&S&&(t=s?a(S)<a(n.value):l?S<n.value:r<new Date(n.value))}else{let r=o.valueAsNumber||(S?+S:S);s(i.value)||(e=r>i.value),s(n.value)||(t=r<n.value)}if((e||t)&&($(!!e,i.message,n.message,A.max,A.min),!r))return D(O[v].message),O}if((h||d)&&!L&&(k(S)||a&&Array.isArray(S))){let e=G(h),t=G(d),i=!s(e.value)&&S.length>+e.value,n=!s(t.value)&&S.length<+t.value;if((i||n)&&($(i,e.message,t.message),!r))return D(O[v].message),O}if(m&&!L&&k(S)){let{value:e,message:t}=G(m);if(j(e)&&!S.match(e)&&(O[v]={type:A.pattern,message:t,ref:o,...F(A.pattern,t)},!r))return D(t),O}if(y){if(P(y)){let e=X(await y(S,t),C);if(e&&(O[v]={...e,...F(A.validate,e.message)},!r))return D(e.message),O}else if(l(y)){let e={};for(let i in y){if(!I(e)&&!r)break;let n=X(await y[i](S,t),C,i);n&&(e={...n,...F(i,n.message)},D(n.message),r&&(O[v]=e))}if(!I(e)&&(O[v]={ref:C,...e},!r))return O}}return D(!0),O};function Z(e,t){let r=Array.isArray(t)?t:y(t)?[t]:v(t),i=1===r.length?e:function(e,t){let r=t.slice(0,-1).length,i=0;for(;i<r;)e=g(e)?i++:e[t[i++]];return e}(e,r),n=r.length-1,a=r[n];return i&&delete i[a],0!==n&&(l(i)&&I(i)||Array.isArray(i)&&function(e){for(let t in e)if(e.hasOwnProperty(t)&&!g(e[t]))return!1;return!0}(i))&&Z(e,r.slice(0,-1)),e}var J=()=>{let e=[];return{get observers(){return e},next:t=>{for(let r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}},Y=e=>s(e)||!o(e);function Q(e,t){if(Y(e)||Y(t))return e===t;if(a(e)&&a(t))return e.getTime()===t.getTime();let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(let n of r){let r=e[n];if(!i.includes(n))return!1;if("ref"!==n){let e=t[n];if(a(r)&&a(e)||l(r)&&l(e)||Array.isArray(r)&&Array.isArray(e)?!Q(r,e):r!==e)return!1}}return!0}var ee=e=>"select-multiple"===e.type,et=e=>M(e)||n(e),er=e=>B(e)&&e.isConnected,ei=e=>{for(let t in e)if(P(e[t]))return!0;return!1};function en(e,t={}){let r=Array.isArray(e);if(l(e)||r)for(let r in e)Array.isArray(e[r])||l(e[r])&&!ei(e[r])?(t[r]=Array.isArray(e[r])?[]:{},en(e[r],t[r])):s(e[r])||(t[r]=!0);return t}var ea=(e,t)=>(function e(t,r,i){let n=Array.isArray(t);if(l(t)||n)for(let n in t)Array.isArray(t[n])||l(t[n])&&!ei(t[n])?g(r)||Y(i[n])?i[n]=Array.isArray(t[n])?en(t[n],[]):{...en(t[n])}:e(t[n],s(r)?{}:r[n],i[n]):i[n]=!Q(t[n],r[n]);return i})(e,t,en(t)),es=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:i})=>g(e)?e:t?""===e?NaN:e?+e:e:r&&k(e)?new Date(e):i?i(e):e;function eo(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:U(t)?t.files:M(t)?W(e.refs).value:ee(t)?[...t.selectedOptions].map(({value:e})=>e):n(t)?q(e.refs).value:es(g(t.value)?e.ref.value:t.value,e)}var el=(e,t,r,i)=>{let n={};for(let r of e){let e=_(t,r);e&&w(n,r,e._f)}return{criteriaMode:r,names:[...e],fields:n,shouldUseNativeValidation:i}},eu=e=>g(e)?e:j(e)?e.source:l(e)?j(e.value)?e.value.source:e.value:e,ec=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function eh(e,t,r){let i=_(e,r);if(i||y(r))return{error:i,name:r};let n=r.split(".");for(;n.length;){let i=n.join("."),a=_(t,i),s=_(e,i);if(a&&!Array.isArray(a)&&r!==i)break;if(s&&s.type)return{name:i,error:s};n.pop()}return{name:r}}var ed=(e,t,r,i,n)=>!n.isOnAll&&(!r&&n.isOnTouch?!(t||e):(r?i.isOnBlur:n.isOnBlur)?!e:(r?!i.isOnChange:!n.isOnChange)||e),ef=(e,t)=>!m(_(e,t)).length&&Z(e,t);let ep={mode:T.onSubmit,reValidateMode:T.onChange,shouldFocusError:!0};function em(e={}){let t=i.useRef(),r=i.useRef(),[o,c]=i.useState({isDirty:!1,isValidating:!1,isLoading:P(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:P(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...function(e={}){let t,r={...ep,...e},i={submitCount:0,isDirty:!1,isLoading:P(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},o={},c=(l(r.defaultValues)||l(r.values))&&p(r.defaultValues||r.values)||{},d=r.shouldUnregister?{}:p(c),y={action:!1,mount:!1,watch:!1},v={mount:new Set,unMount:new Set,array:new Set,watch:new Set},A=0,S={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},C={values:J(),array:J(),state:J()},R=x(r.mode),V=x(r.reValidateMode),M=r.criteriaMode===T.all,j=e=>t=>{clearTimeout(A),A=setTimeout(e,t)},$=async e=>{if(S.isValid||e){let e=r.resolver?I((await G()).errors):await en(o,!0);e!==i.isValid&&C.state.next({isValid:e})}},H=(e,t)=>{(S.isValidating||S.validatingFields)&&((e||Array.from(v.mount)).forEach(e=>{e&&(t?w(i.validatingFields,e,t):Z(i.validatingFields,e))}),C.state.next({validatingFields:i.validatingFields,isValidating:!I(i.validatingFields)}))},q=(e,t)=>{w(i.errors,e,t),C.state.next({errors:i.errors})},z=(e,t,r,i)=>{let n=_(o,e);if(n){let a=_(d,e,g(r)?_(c,e):r);g(a)||i&&i.defaultChecked||t?w(d,e,t?a:eo(n._f)):e_(e,a),y.mount&&$()}},W=(e,t,r,n,a)=>{let s=!1,l=!1,u={name:e},h=!!(_(o,e)&&_(o,e)._f.disabled);if(!r||n){S.isDirty&&(l=i.isDirty,i.isDirty=u.isDirty=em(),s=l!==u.isDirty);let r=h||Q(_(c,e),t);l=!!(!h&&_(i.dirtyFields,e)),r||h?Z(i.dirtyFields,e):w(i.dirtyFields,e,!0),u.dirtyFields=i.dirtyFields,s=s||S.dirtyFields&&!r!==l}if(r){let t=_(i.touchedFields,e);t||(w(i.touchedFields,e,r),u.touchedFields=i.touchedFields,s=s||S.touchedFields&&t!==r)}return s&&a&&C.state.next(u),s?u:{}},X=(r,n,a,s)=>{let o=_(i.errors,r),l=S.isValid&&b(n)&&i.isValid!==n;if(e.delayError&&a?(t=j(()=>q(r,a)))(e.delayError):(clearTimeout(A),t=null,a?w(i.errors,r,a):Z(i.errors,r)),(a?!Q(o,a):o)||!I(s)||l){let e={...s,...l&&b(n)?{isValid:n}:{},errors:i.errors,name:r};i={...i,...e},C.state.next(e)}},G=async e=>{H(e,!0);let t=await r.resolver(d,r.context,el(e||v.mount,o,r.criteriaMode,r.shouldUseNativeValidation));return H(e),t},ei=async e=>{let{errors:t}=await G(e);if(e)for(let r of e){let e=_(t,r);e?w(i.errors,r,e):Z(i.errors,r)}else i.errors=t;return t},en=async(e,t,n={valid:!0})=>{for(let a in e){let s=e[a];if(s){let{_f:e,...o}=s;if(e){let o=v.array.has(e.name);H([a],!0);let l=await K(s,d,M,r.shouldUseNativeValidation&&!t,o);if(H([a]),l[e.name]&&(n.valid=!1,t))break;t||(_(l,e.name)?o?F(i.errors,l,e.name):w(i.errors,e.name,l[e.name]):Z(i.errors,e.name))}o&&await en(o,t,n)}}return n.valid},em=(e,t)=>(e&&t&&w(d,e,t),!Q(eT(),c)),eg=(e,t,r)=>O(e,v,{...y.mount?d:g(t)?c:k(e)?{[e]:t}:t},r,t),e_=(e,t,r={})=>{let i=_(o,e),a=t;if(i){let r=i._f;r&&(r.disabled||w(d,e,es(t,r)),a=B(r.ref)&&s(t)?"":t,ee(r.ref)?[...r.ref.options].forEach(e=>e.selected=a.includes(e.value)):r.refs?n(r.ref)?r.refs.length>1?r.refs.forEach(e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(a)?!!a.find(t=>t===e.value):a===e.value)):r.refs[0]&&(r.refs[0].checked=!!a):r.refs.forEach(e=>e.checked=e.value===a):U(r.ref)?r.ref.value="":(r.ref.value=a,r.ref.type||C.values.next({name:e,values:{...d}})))}(r.shouldDirty||r.shouldTouch)&&W(e,a,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&eE(e)},eb=(e,t,r)=>{for(let i in t){let n=t[i],s=`${e}.${i}`,l=_(o,s);!v.array.has(e)&&Y(n)&&(!l||l._f)||a(n)?e_(s,n,r):eb(s,n,r)}},ey=(e,t,r={})=>{let n=_(o,e),a=v.array.has(e),l=p(t);w(d,e,l),a?(C.array.next({name:e,values:{...d}}),(S.isDirty||S.dirtyFields)&&r.shouldDirty&&C.state.next({name:e,dirtyFields:ea(c,d),isDirty:em(e,l)})):!n||n._f||s(l)?e_(e,l,r):eb(e,l,r),N(e,v)&&C.state.next({...i}),C.values.next({name:y.mount?e:void 0,values:{...d}})},ev=async e=>{y.mount=!0;let n=e.target,a=n.name,s=!0,l=_(o,a),c=e=>{s=Number.isNaN(e)||e===_(d,a,e)};if(l){let h,f;let p=n.type?eo(l._f):u(e),m=e.type===E.BLUR||e.type===E.FOCUS_OUT,g=!ec(l._f)&&!r.resolver&&!_(i.errors,a)&&!l._f.deps||ed(m,_(i.touchedFields,a),i.isSubmitted,V,R),b=N(a,v,m);w(d,a,p),m?(l._f.onBlur&&l._f.onBlur(e),t&&t(0)):l._f.onChange&&l._f.onChange(e);let y=W(a,p,m,!1),T=!I(y)||b;if(m||C.values.next({name:a,type:e.type,values:{...d}}),g)return S.isValid&&$(),T&&C.state.next({name:a,...b?{}:y});if(!m&&b&&C.state.next({...i}),r.resolver){let{errors:e}=await G([a]);if(c(p),s){let t=eh(i.errors,o,a),r=eh(e,o,t.name||a);h=r.error,a=r.name,f=I(e)}}else H([a],!0),h=(await K(l,d,M,r.shouldUseNativeValidation))[a],H([a]),c(p),s&&(h?f=!1:S.isValid&&(f=await en(o,!0)));s&&(l._f.deps&&eE(l._f.deps),X(a,f,h,y))}},ew=(e,t)=>{if(_(i.errors,t)&&e.focus)return e.focus(),1},eE=async(e,t={})=>{let n,a;let s=D(e);if(r.resolver){let t=await ei(g(e)?e:s);n=I(t),a=e?!s.some(e=>_(t,e)):n}else e?((a=(await Promise.all(s.map(async e=>{let t=_(o,e);return await en(t&&t._f?{[e]:t}:t)}))).every(Boolean))||i.isValid)&&$():a=n=await en(o);return C.state.next({...!k(e)||S.isValid&&n!==i.isValid?{}:{name:e},...r.resolver||!e?{isValid:n}:{},errors:i.errors}),t.shouldFocus&&!a&&L(o,ew,e?s:v.mount),a},eT=e=>{let t={...y.mount?d:c};return g(e)?t:k(e)?_(t,e):e.map(e=>_(t,e))},eA=(e,t)=>({invalid:!!_((t||i).errors,e),isDirty:!!_((t||i).dirtyFields,e),isTouched:!!_((t||i).touchedFields,e),isValidating:!!_((t||i).validatingFields,e),error:_((t||i).errors,e)}),eS=(e,t,r)=>{let n=(_(o,e,{_f:{}})._f||{}).ref,{ref:a,message:s,type:l,...u}=_(i.errors,e)||{};w(i.errors,e,{...u,...t,ref:n}),C.state.next({name:e,errors:i.errors,isValid:!1}),r&&r.shouldFocus&&n&&n.focus&&n.focus()},eI=(e,t={})=>{for(let n of e?D(e):v.mount)v.mount.delete(n),v.array.delete(n),t.keepValue||(Z(o,n),Z(d,n)),t.keepError||Z(i.errors,n),t.keepDirty||Z(i.dirtyFields,n),t.keepTouched||Z(i.touchedFields,n),t.keepIsValidating||Z(i.validatingFields,n),r.shouldUnregister||t.keepDefaultValue||Z(c,n);C.values.next({values:{...d}}),C.state.next({...i,...t.keepDirty?{isDirty:em()}:{}}),t.keepIsValid||$()},eC=({disabled:e,name:t,field:r,fields:i,value:n})=>{if(b(e)&&y.mount||e){let a=e?void 0:g(n)?eo(r?r._f:_(i,t)._f):n;w(d,t,a),W(t,a,!1,!1,!0)}},eD=(e,t={})=>{let i=_(o,e),n=b(t.disabled);return w(o,e,{...i||{},_f:{...i&&i._f?i._f:{ref:{name:e}},name:e,mount:!0,...t}}),v.mount.add(e),i?eC({field:i,disabled:t.disabled,name:e,value:t.value}):z(e,!0,t.value),{...n?{disabled:t.disabled}:{},...r.progressive?{required:!!t.required,min:eu(t.min),max:eu(t.max),minLength:eu(t.minLength),maxLength:eu(t.maxLength),pattern:eu(t.pattern)}:{},name:e,onChange:ev,onBlur:ev,ref:n=>{if(n){eD(e,t),i=_(o,e);let r=g(n.value)&&n.querySelectorAll&&n.querySelectorAll("input,select,textarea")[0]||n,a=et(r),s=i._f.refs||[];(a?s.find(e=>e===r):r===i._f.ref)||(w(o,e,{_f:{...i._f,...a?{refs:[...s.filter(er),r,...Array.isArray(_(c,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),z(e,!1,void 0,r))}else(i=_(o,e,{}))._f&&(i._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&!(h(v.array,e)&&y.action)&&v.unMount.add(e)}}},ek=()=>r.shouldFocusError&&L(o,ew,v.mount),eO=(e,t)=>async n=>{let a;n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let s=p(d);if(C.state.next({isSubmitting:!0}),r.resolver){let{errors:e,values:t}=await G();i.errors=e,s=t}else await en(o);if(Z(i.errors,"root"),I(i.errors)){C.state.next({errors:{}});try{await e(s,n)}catch(e){a=e}}else t&&await t({...i.errors},n),ek(),setTimeout(ek);if(C.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:I(i.errors)&&!a,submitCount:i.submitCount+1,errors:i.errors}),a)throw a},eR=(t,r={})=>{let n=t?p(t):c,a=p(n),s=I(t),l=s?c:a;if(r.keepDefaultValues||(c=n),!r.keepValues){if(r.keepDirtyValues)for(let e of v.mount)_(i.dirtyFields,e)?w(l,e,_(d,e)):ey(e,_(l,e));else{if(f&&g(t))for(let e of v.mount){let t=_(o,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(B(e)){let t=e.closest("form");if(t){t.reset();break}}}}o={}}d=e.shouldUnregister?r.keepDefaultValues?p(c):{}:p(l),C.array.next({values:{...l}}),C.values.next({values:{...l}})}v={mount:r.keepDirtyValues?v.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},y.mount=!S.isValid||!!r.keepIsValid||!!r.keepDirtyValues,y.watch=!!e.shouldUnregister,C.state.next({submitCount:r.keepSubmitCount?i.submitCount:0,isDirty:!s&&(r.keepDirty?i.isDirty:!!(r.keepDefaultValues&&!Q(t,c))),isSubmitted:!!r.keepIsSubmitted&&i.isSubmitted,dirtyFields:s?[]:r.keepDirtyValues?r.keepDefaultValues&&d?ea(c,d):i.dirtyFields:r.keepDefaultValues&&t?ea(c,t):{},touchedFields:r.keepTouched?i.touchedFields:{},errors:r.keepErrors?i.errors:{},isSubmitSuccessful:!!r.keepIsSubmitSuccessful&&i.isSubmitSuccessful,isSubmitting:!1})},ex=(e,t)=>eR(P(e)?e(d):e,t);return{control:{register:eD,unregister:eI,getFieldState:eA,handleSubmit:eO,setError:eS,_executeSchema:G,_getWatch:eg,_getDirty:em,_updateValid:$,_removeUnmounted:()=>{for(let e of v.unMount){let t=_(o,e);t&&(t._f.refs?t._f.refs.every(e=>!er(e)):!er(t._f.ref))&&eI(e)}v.unMount=new Set},_updateFieldArray:(e,t=[],r,n,a=!0,s=!0)=>{if(n&&r){if(y.action=!0,s&&Array.isArray(_(o,e))){let t=r(_(o,e),n.argA,n.argB);a&&w(o,e,t)}if(s&&Array.isArray(_(i.errors,e))){let t=r(_(i.errors,e),n.argA,n.argB);a&&w(i.errors,e,t),ef(i.errors,e)}if(S.touchedFields&&s&&Array.isArray(_(i.touchedFields,e))){let t=r(_(i.touchedFields,e),n.argA,n.argB);a&&w(i.touchedFields,e,t)}S.dirtyFields&&(i.dirtyFields=ea(c,d)),C.state.next({name:e,isDirty:em(e,t),dirtyFields:i.dirtyFields,errors:i.errors,isValid:i.isValid})}else w(d,e,t)},_updateDisabledField:eC,_getFieldArray:t=>m(_(y.mount?d:c,t,e.shouldUnregister?_(c,t,[]):[])),_reset:eR,_resetDefaultValues:()=>P(r.defaultValues)&&r.defaultValues().then(e=>{ex(e,r.resetOptions),C.state.next({isLoading:!1})}),_updateFormState:e=>{i={...i,...e}},_disableForm:e=>{b(e)&&(C.state.next({disabled:e}),L(o,(t,r)=>{let i=_(o,r);i&&(t.disabled=i._f.disabled||e,Array.isArray(i._f.refs)&&i._f.refs.forEach(t=>{t.disabled=i._f.disabled||e}))},0,!1))},_subjects:C,_proxyFormState:S,_setErrors:e=>{i.errors=e,C.state.next({errors:i.errors,isValid:!1})},get _fields(){return o},get _formValues(){return d},get _state(){return y},set _state(value){y=value},get _defaultValues(){return c},get _names(){return v},set _names(value){v=value},get _formState(){return i},set _formState(value){i=value},get _options(){return r},set _options(value){r={...r,...value}}},trigger:eE,register:eD,handleSubmit:eO,watch:(e,t)=>P(e)?C.values.subscribe({next:r=>e(eg(void 0,t),r)}):eg(e,t,!0),setValue:ey,getValues:eT,reset:ex,resetField:(e,t={})=>{_(o,e)&&(g(t.defaultValue)?ey(e,p(_(c,e))):(ey(e,t.defaultValue),w(c,e,p(t.defaultValue))),t.keepTouched||Z(i.touchedFields,e),t.keepDirty||(Z(i.dirtyFields,e),i.isDirty=t.defaultValue?em(e,p(_(c,e))):em()),!t.keepError&&(Z(i.errors,e),S.isValid&&$()),C.state.next({...i}))},clearErrors:e=>{e&&D(e).forEach(e=>Z(i.errors,e)),C.state.next({errors:e?i.errors:{}})},unregister:eI,setError:eS,setFocus:(e,t={})=>{let r=_(o,e),i=r&&r._f;if(i){let e=i.refs?i.refs[0]:i.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:eA}}(e),formState:o});let d=t.current.control;return d._options=e,!function(e){let t=i.useRef(e);t.current=e,i.useEffect(()=>{let r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}({subject:d._subjects.state,next:e=>{C(e,d._proxyFormState,d._updateFormState,!0)&&c({...d._formState})}}),i.useEffect(()=>d._disableForm(e.disabled),[d,e.disabled]),i.useEffect(()=>{if(d._proxyFormState.isDirty){let e=d._getDirty();e!==o.isDirty&&d._subjects.state.next({isDirty:e})}},[d,o.isDirty]),i.useEffect(()=>{e.values&&!Q(e.values,r.current)?(d._reset(e.values,d._options.resetOptions),r.current=e.values,c(e=>({...e}))):d._resetDefaultValues()},[e.values,d]),i.useEffect(()=>{e.errors&&d._setErrors(e.errors)},[e.errors,d]),i.useEffect(()=>{d._state.mount||(d._updateValid(),d._state.mount=!0),d._state.watch&&(d._state.watch=!1,d._subjects.state.next({...d._formState})),d._removeUnmounted()}),i.useEffect(()=>{e.shouldUnregister&&d._subjects.values.next({values:d._getWatch()})},[e.shouldUnregister,d]),t.current.formState=S(o,d),t.current}}}]);