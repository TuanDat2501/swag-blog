(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[478],{3943:function(e,t,r){"use strict";r.d(t,{$s:function(){return D},BH:function(){return b},L:function(){return u},LL:function(){return S},P0:function(){return g},Sg:function(){return v},ZR:function(){return A},aH:function(){return _},eu:function(){return E},hl:function(){return w},m9:function(){return k},ru:function(){return y},vZ:function(){return function e(t,r){if(t===r)return!0;let n=Object.keys(t),i=Object.keys(r);for(let a of n){if(!i.includes(a))return!1;let n=t[a],s=r[a];if(C(n)&&C(s)){if(!e(n,s))return!1}else if(n!==s)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}},zI:function(){return T}});var n=r(357);/**
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
 */let i=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},a=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){let a=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))}else{let a=e[r++],s=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&s)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],a=t+1<e.length,s=a?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,u=i>>2,c=(3&i)<<4|s>>4,h=(15&s)<<2|l>>6,d=63&l;o||(d=64,a||(h=64)),n.push(r[u],r[c],r[h],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],a=t<e.length?r[e.charAt(t)]:0,s=++t<e.length?r[e.charAt(t)]:64,l=++t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==a||null==s||null==l)throw new o;let u=i<<2|a>>4;if(n.push(u),64!==s){let e=a<<4&240|s>>2;if(n.push(e),64!==l){let e=s<<6&192|l;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let l=function(e){let t=i(e);return s.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},h=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,d=()=>{if(void 0===n||void 0===n.env)return;let e=n.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},f=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&c(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},m=e=>{var t,r;return null===(r=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},g=e=>{let t=m(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},_=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config};/**
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
 */function v(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(a)),""].join(".")}function y(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function w(){try{return"object"==typeof indexedDB}catch(e){return!1}}function E(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function T(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}class A extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],a=i?i.replace(I,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",s=`${this.serviceName}: ${a} (${n}).`;return new A(n,s,r)}}let I=/\{\$([^}]+)}/g;function C(e){return null!==e&&"object"==typeof e}function D(e,t=1e3,r=2){let n=t*Math.pow(r,e);return Math.min(144e5,n+Math.round(.5*n*(Math.random()-.5)*2))}/**
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
 */function k(e){return e&&e._delegate?e._delegate:e}},2151:function(e,t,r){var n=0/0,i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,o=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,c="object"==typeof self&&self&&self.Object===Object&&self,h=u||c||Function("return this")(),d=Object.prototype.toString,f=Math.max,p=Math.min,m=function(){return h.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function _(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return n;if(g(e)){var t,r="function"==typeof e.valueOf?e.valueOf():e;e=g(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var u=s.test(e);return u||o.test(e)?l(e.slice(2),u?2:8):a.test(e)?n:+e}e.exports=function(e,t,r){var n,i,a,s,o,l,u=0,c=!1,h=!1,d=!0;if("function"!=typeof e)throw TypeError("Expected a function");function b(t){var r=n,a=i;return n=i=void 0,u=t,s=e.apply(a,r)}function v(e){var r=e-l,n=e-u;return void 0===l||r>=t||r<0||h&&n>=a}function y(){var e,r,n,i=m();if(v(i))return w(i);o=setTimeout(y,(e=i-l,r=i-u,n=t-e,h?p(n,a-r):n))}function w(e){return(o=void 0,d&&n)?b(e):(n=i=void 0,s)}function E(){var e,r=m(),a=v(r);if(n=arguments,i=this,l=r,a){if(void 0===o)return u=e=l,o=setTimeout(y,t),c?b(e):s;if(h)return o=setTimeout(y,t),b(l)}return void 0===o&&(o=setTimeout(y,t)),s}return t=_(t)||0,g(r)&&(c=!!r.leading,a=(h="maxWait"in r)?f(_(r.maxWait)||0,t):a,d="trailing"in r?!!r.trailing:d),E.cancel=function(){void 0!==o&&clearTimeout(o),u=0,n=l=i=o=void 0},E.flush=function(){return void 0===o?s:w(m())},E}},357:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(8081)},8081:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function a(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var l=[],u=!1,c=-1;function h(){u&&n&&(u=!1,n.length?l=n.concat(l):c=-1,l.length&&d())}function d(){if(!u){var e=o(h);u=!0;for(var t=l.length;t;){for(n=l,l=[];++c<t;)n&&n[c].run();c=-1,t=l.length}n=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||u||o(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var a=r[e]={exports:{}},s=!0;try{t[e](a,a.exports,n),s=!1}finally{s&&delete r[e]}return a.exports}n.ab="//";var i=n(229);e.exports=i}()},8885:function(e,t,r){"use strict";r.d(t,{Jn:function(){return w},KN:function(){return A},Mq:function(){return T},Xd:function(){return _},ZF:function(){return E},qX:function(){return b}});var n=r(2680),i=r(9053),a=r(3943),s=r(6512);/**
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
 */class o{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let l="@firebase/app",u="0.10.5",c=new i.Yd("@firebase/app"),h="[DEFAULT]",d={[l]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},f=new Map,p=new Map,m=new Map;function g(e,t){try{e.container.addComponent(t)}catch(r){c.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function _(e){let t=e.name;if(m.has(t))return c.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(m.set(t,e),f.values()))g(r,e);for(let t of p.values())g(t,e);return!0}function b(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}let v=new a.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
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
 */class y{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new n.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw v.create("app-deleted",{appName:this._name})}}/**
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
 */let w="10.12.2";function E(e,t={}){let r=e;"object"!=typeof t&&(t={name:t});let i=Object.assign({name:h,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw v.create("bad-app-name",{appName:String(s)});if(r||(r=(0,a.aH)()),!r)throw v.create("no-options");let o=f.get(s);if(o){if((0,a.vZ)(r,o.options)&&(0,a.vZ)(i,o.config))return o;throw v.create("duplicate-app",{appName:s})}let l=new n.H0(s);for(let e of m.values())l.addComponent(e);let u=new y(r,i,l);return f.set(s,u),u}function T(e=h){let t=f.get(e);if(!t&&e===h&&(0,a.aH)())return E();if(!t)throw v.create("no-app",{appName:e});return t}function A(e,t,r){var i;let a=null!==(i=d[e])&&void 0!==i?i:e;r&&(a+=`-${r}`);let s=a.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${a}" with version "${t}":`];s&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),c.warn(e.join(" "));return}_(new n.wA(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}let S="firebase-heartbeat-store",I=null;function C(){return I||(I=(0,s.X3)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(S)}catch(e){console.warn(e)}}}).catch(e=>{throw v.create("idb-open",{originalErrorMessage:e.message})})),I}async function D(e){try{let t=(await C()).transaction(S),r=await t.objectStore(S).get(O(e));return await t.done,r}catch(e){if(e instanceof a.ZR)c.warn(e.message);else{let t=v.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});c.warn(t.message)}}}async function k(e,t){try{let r=(await C()).transaction(S,"readwrite"),n=r.objectStore(S);await n.put(t,O(e)),await r.done}catch(e){if(e instanceof a.ZR)c.warn(e.message);else{let t=v.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});c.warn(t.message)}}}function O(e){return`${e.name}!${e.options.appId}`}class R{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new N(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=x();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n)?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=x(),{heartbeatsToSend:r,unsentEntries:n}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),L(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),L(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),i=(0,a.L)(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function x(){return new Date().toISOString().substring(0,10)}class N{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,a.hl)()&&(0,a.eu)().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await D(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return k(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return k(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function L(e){return(0,a.L)(JSON.stringify({version:2,heartbeats:e})).length}_(new n.wA("platform-logger",e=>new o(e),"PRIVATE")),_(new n.wA("heartbeat",e=>new R(e),"PRIVATE")),A(l,u,""),A(l,u,"esm2017"),A("fire-js","")},2680:function(e,t,r){"use strict";r.d(t,{H0:function(){return o},wA:function(){return i}});var n=r(3943);class i{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new n.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:a})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=a){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=a){return this.instances.has(e)}getOptions(e=a){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let a=this.instances.get(n);return a&&e(a,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===a?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=a){return this.component?this.component.multipleInstances?e:a:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},9053:function(e,t,r){"use strict";var n,i;r.d(t,{Yd:function(){return c}});/**
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
 */let a=[];(i=n||(n={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let s={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},o=n.INFO,l={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},u=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=l[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class c{constructor(e){this.name=e,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,a.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...e),this._logHandler(this,n.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...e),this._logHandler(this,n.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.INFO,...e),this._logHandler(this,n.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.WARN,...e),this._logHandler(this,n.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...e),this._logHandler(this,n.ERROR,...e)}}},7175:function(e,t,r){"use strict";let n,i,a,s;var o=r(8885),l=r(9053),u=r(3943),c=r(2680),h=r(6512);let d="@firebase/installations",f="0.6.7",p=`w:${f}`,m="FIS_v2",g=new u.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function _(e){return e instanceof u.ZR&&e.code.includes("request-failed")}/**
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
 */function b({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function v(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function y(e,t){let r=(await t.json()).error;return g.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function w({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function E(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
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
 */async function T({appConfig:e,heartbeatServiceProvider:t},{fid:r}){let n=b(e),i=w(e),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let s={method:"POST",headers:i,body:JSON.stringify({fid:r,authVersion:m,appId:e.appId,sdkVersion:p})},o=await E(()=>fetch(n,s));if(o.ok){let e=await o.json();return{fid:e.fid||r,registrationStatus:2,refreshToken:e.refreshToken,authToken:v(e.authToken)}}throw await y("Create Installation",o)}/**
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
 */let C=new Map;function D(e,t){let r=I(e);k(r,t),function(e,t){let r=(!O&&"BroadcastChannel"in self&&((O=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{k(e.data.key,e.data.fid)}),O);r&&r.postMessage({key:e,fid:t}),0===C.size&&O&&(O.close(),O=null)}(r,t)}function k(e,t){let r=C.get(e);if(r)for(let e of r)e(t)}let O=null,R="firebase-installations-store",x=null;function N(){return x||(x=(0,h.X3)("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(R)}})),x}async function L(e,t){let r=I(e),n=(await N()).transaction(R,"readwrite"),i=n.objectStore(R),a=await i.get(r);return await i.put(t,r),await n.done,a&&a.fid===t.fid||D(e,t.fid),t}async function U(e){let t=I(e),r=(await N()).transaction(R,"readwrite");await r.objectStore(R).delete(t),await r.done}async function F(e,t){let r=I(e),n=(await N()).transaction(R,"readwrite"),i=n.objectStore(R),a=await i.get(r),s=t(a);return void 0===s?await i.delete(r):await i.put(s,r),await n.done,s&&(!a||a.fid!==s.fid)&&D(e,s.fid),s}/**
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
 */async function P(e){let t;let r=await F(e.appConfig,r=>{let n=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(g.create("app-offline"))};let r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=B(e,r);return{installationEntry:r,registrationPromise:n}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:M(e)}:{installationEntry:t}}(e,j(r||{fid:function(){try{let e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;let t=btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_").substr(0,22);return S.test(t)?t:""}catch(e){return""}}(),registrationStatus:0}));return t=n.registrationPromise,n.installationEntry});return""===r.fid?{installationEntry:await t}:{installationEntry:r,registrationPromise:t}}async function B(e,t){try{let r=await T(e,t);return L(e.appConfig,r)}catch(r){throw _(r)&&409===r.customData.serverCode?await U(e.appConfig):await L(e.appConfig,{fid:t.fid,registrationStatus:0}),r}}async function M(e){let t=await V(e.appConfig);for(;1===t.registrationStatus;)await A(100),t=await V(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:r}=await P(e);return r||t}return t}function V(e){return F(e,e=>{if(!e)throw g.create("installation-not-found");return j(e)})}function j(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
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
 */async function $({appConfig:e,heartbeatServiceProvider:t},r){let n=function(e,{fid:t}){return`${b(e)}/${t}/authTokens:generate`}(e,r),i=function(e,{refreshToken:t}){let r=w(e);return r.append("Authorization",`${m} ${t}`),r}(e,r),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let s={method:"POST",headers:i,body:JSON.stringify({installation:{sdkVersion:p,appId:e.appId}})},o=await E(()=>fetch(n,s));if(o.ok)return v(await o.json());throw await y("Generate Auth Token",o)}/**
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
 */async function H(e,t=!1){let r;let n=await F(e.appConfig,n=>{var i;if(!X(n))throw g.create("not-registered");let a=n.authToken;if(!t&&2===(i=a).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(i))return n;if(1===a.requestStatus)return r=q(e,t),n;{if(!navigator.onLine)throw g.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(n);return r=W(e,t),t}});return r?await r:n.authToken}async function q(e,t){let r=await z(e.appConfig);for(;1===r.authToken.requestStatus;)await A(100),r=await z(e.appConfig);let n=r.authToken;return 0===n.requestStatus?H(e,t):n}function z(e){return F(e,e=>{var t;if(!X(e))throw g.create("not-registered");return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function W(e,t){try{let r=await $(e,t),n=Object.assign(Object.assign({},t),{authToken:r});return await L(e.appConfig,n),r}catch(r){if(_(r)&&(401===r.customData.serverCode||404===r.customData.serverCode))await U(e.appConfig);else{let r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await L(e.appConfig,r)}throw r}}function X(e){return void 0!==e&&2===e.registrationStatus}/**
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
 */function(e){if(!e||!e.options)throw J("App Configuration");if(!e.name)throw J("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw J(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),n=(0,o.qX)(t,"heartbeat");return{app:t,appConfig:r,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},"PUBLIC")),(0,o.Xd)(new c.wA("installations-internal",e=>{let t=e.getProvider("app").getImmediate(),r=(0,o.qX)(t,Y).getImmediate();return{getId:()=>G(r),getToken:e=>K(r,e)}},"PRIVATE")),(0,o.KN)(d,f),(0,o.KN)(d,f,"esm2017");/**
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
 */function en(e){if(!e.startsWith(ee)){let t=er.create("invalid-gtag-resource",{gtagURL:e});return et.warn(t.message),""}return e}function ei(e){return Promise.all(e.map(e=>e.catch(e=>e)))}async function ea(e,t,r,n,i,a){let s=n[i];try{if(s)await t[s];else{let e=(await ei(r)).find(e=>e.measurementId===i);e&&await t[e.appId]}}catch(e){et.error(e)}e("config",i,a)}async function es(e,t,r,n,i){try{let a=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);let n=await ei(r);for(let r of e){let e=n.find(e=>e.measurementId===r),i=e&&t[e.appId];if(i)a.push(i);else{a=[];break}}}0===a.length&&(a=Object.values(t)),await Promise.all(a),e("event",n,i||{})}catch(e){et.error(e)}}class eo{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}let el=new eo;async function eu(e){var t;let{appId:r,apiKey:n}=e,i={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":n})},a="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",r),s=await fetch(a,i);if(200!==s.status&&304!==s.status){let e="";try{let r=await s.json();(null===(t=r.error)||void 0===t?void 0:t.message)&&(e=r.error.message)}catch(e){}throw er.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}async function ec(e,t=el,r){let{appId:n,apiKey:i,measurementId:a}=e.options;if(!n)throw er.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:n};throw er.create("no-api-key")}let s=t.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new ed;return setTimeout(async()=>{o.abort()},void 0!==r?r:6e4),eh({appId:n,apiKey:i,measurementId:a},s,o,t)}async function eh(e,{throttleEndTimeMillis:t,backoffCount:r},n,i=el){var a;let{appId:s,measurementId:o}=e;try{await new Promise((e,r)=>{let i=setTimeout(e,Math.max(t-Date.now(),0));n.addEventListener(()=>{clearTimeout(i),r(er.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}catch(e){if(o)return et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:s,measurementId:o};throw e}try{let t=await eu(e);return i.deleteThrottleMetadata(s),t}catch(c){if(!function(e){if(!(e instanceof u.ZR)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(c)){if(i.deleteThrottleMetadata(s),o)return et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:s,measurementId:o};throw c}let t=503===Number(null===(a=null==c?void 0:c.customData)||void 0===a?void 0:a.httpStatus)?(0,u.$s)(r,i.intervalMillis,30):(0,u.$s)(r,i.intervalMillis),l={throttleEndTimeMillis:Date.now()+t,backoffCount:r+1};return i.setThrottleMetadata(s,l),et.debug(`Calling attemptFetch again in ${t} millis`),eh(e,l,n,i)}}class ed{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ef(e,t,r,n,i){if(i&&i.global){e("event",r,n);return}{let i=await t;e("event",r,Object.assign(Object.assign({},n),{send_to:i}))}}/**
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
 */async function ep(){if(!(0,u.hl)())return et.warn(er.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await (0,u.eu)()}catch(e){return et.warn(er.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}async function em(e,t,r,a,s,o,l){var u;let c=ec(e);c.then(t=>{r[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&et.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>et.error(e)),t.push(c);let h=ep().then(e=>e?a.getId():void 0),[d,f]=await Promise.all([c,h]);!function(e){for(let t of Object.values(window.document.getElementsByTagName("script")))if(t.src&&t.src.includes(ee)&&t.src.includes(e))return t;return null}(o)&&function(e,t){var r,n;let i;let a=(r="firebase-js-sdk-policy",n={createScriptURL:en},window.trustedTypes&&(i=window.trustedTypes.createPolicy(r,n)),i),s=document.createElement("script"),o=`${ee}?l=${e}&id=${t}`;s.src=a?null==a?void 0:a.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}(o,d.measurementId),i&&(s("consent","default",i),i=void 0),s("js",new Date);let p=null!==(u=null==l?void 0:l.config)&&void 0!==u?u:{};return p.origin="firebase",p.update=!0,null!=f&&(p.firebase_id=f),s("config",d.measurementId,p),n&&(s("set",n),n=void 0),d.measurementId}/**
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
 */class eg{constructor(e){this.app=e}_delete(){return delete e_[this.app.options.appId],Promise.resolve()}}let e_={},eb=[],ev={},ey="dataLayer",ew=!1,eE="@firebase/analytics",eT="0.10.4";(0,o.Xd)(new c.wA(Q,(e,{options:t})=>(function(e,t,r){!function(){let e=[];if((0,u.ru)()&&e.push("This is a browser extension environment."),(0,u.zI)()||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),r=er.create("invalid-analytics-context",{errorInfo:t});et.warn(r.message)}}();let n=e.options.appId;if(!n)throw er.create("no-app-id");if(!e.options.apiKey){if(e.options.measurementId)et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw er.create("no-api-key")}if(null!=e_[n])throw er.create("already-exists",{id:n});if(!ew){var i,o;let e,t;e=[],Array.isArray(window[ey])?e=window[ey]:window[ey]=e;let{wrappedGtag:r,gtagCore:n}=(i="gtag",t=function(...e){window[ey].push(arguments)},window[i]&&"function"==typeof window[i]&&(t=window[i]),window[i]=(o=t,async function(e,...t){try{if("event"===e){let[e,r]=t;await es(o,e_,eb,e,r)}else if("config"===e){let[e,r]=t;await ea(o,e_,eb,ev,e,r)}else if("consent"===e){let[e,r]=t;o("consent",e,r)}else if("get"===e){let[e,r,n]=t;o("get",e,r,n)}else if("set"===e){let[e]=t;o("set",e)}else o(e,...t)}catch(e){et.error(e)}}),{gtagCore:t,wrappedGtag:window[i]});s=r,a=n,ew=!0}return e_[n]=em(e,eb,ev,t,a,ey,r),new eg(e)})(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),(0,o.Xd)(new c.wA("analytics-internal",function(e){try{let t=e.getProvider(Q).getImmediate();return{logEvent:(e,r,n)=>{var i;return i=t,void(i=(0,u.m9)(i),ef(s,e_[i.app.options.appId],e,r,n).catch(e=>et.error(e)))}}}catch(e){throw er.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),(0,o.KN)(eE,eT),(0,o.KN)(eE,eT,"esm2017")},5236:function(e,t,r){"use strict";r.d(t,{ZF:function(){return n.ZF}});var n=r(8885);/**
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
 */(0,n.KN)("firebase","10.12.2","app")},9854:function(e,t,r){"use strict";r.d(t,{Jt:function(){return e_},cF:function(){return ev},iH:function(){return eb},B0:function(){return eg}});var n,i,a,s,o=r(8885),l=r(3943),u=r(2680);/**
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
${this.customData.serverResponse}`:this.message=this._baseMessage}}function f(e){return"storage/"+e}function p(){return new d(a.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function m(){return new d(a.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function g(){return new d(a.CANCELED,"User canceled the upload/download.")}function _(){return new d(a.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function b(e){return new d(a.INVALID_ARGUMENT,e)}function v(){return new d(a.APP_DELETED,"The Firebase app was deleted.")}function y(e,t){return new d(a.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function w(e){throw new d(a.INTERNAL_ERROR,"Internal error: "+e)}(n=a||(a={})).UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
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
 */class E{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=E.makeFromUrl(e,t)}catch(t){return new E(e,"")}if(""===r.path)return r;throw new d(a.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let r=null,n="([A-Za-z0-9.\\-_]+)",i=RegExp("^gs://"+n+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}let o=t.replace(/[.]/g,"\\."),l=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${n}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:RegExp(`^https?://${t===c?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${n}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let t=0;t<l.length;t++){let n=l[t],i=n.regex.exec(e);if(i){let e=i[n.indices.bucket],t=i[n.indices.path];t||(t=""),r=new E(e,t),n.postModify(r);break}}if(null==r)throw new d(a.INVALID_URL,"Invalid URL '"+e+"'.");return r}}class T{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function A(e){return"string"==typeof e||e instanceof String}function S(e){return I()&&e instanceof Blob}function I(){return"undefined"!=typeof Blob}function C(e,t,r,n){if(n<t)throw b(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>r)throw b(`Invalid value for '${e}'. Expected ${r} or less.`)}/**
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
 */function D(e,t,r){let n=t;return null==r&&(n=`https://${t}`),`${r}://${n}/v0${e}`}function k(e){let t=encodeURIComponent,r="?";for(let n in e)e.hasOwnProperty(n)&&(r=r+(t(n)+"=")+t(e[n])+"&");return r.slice(0,-1)}/**
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
 */function O(e,t){let r=e>=500&&e<600,n=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return r||n||i}(i=s||(s={}))[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT";/**
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
 */class R{constructor(e,t,r,n,i,a,s,o,l,u,c,h=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=s,this.errorCallback_=o,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=c,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let e=(e,t)=>{let r=this.resolve_,n=this.reject_,i=t.connection;if(t.wasSuccessCode)try{let e=this.callback_(i,i.getResponse());void 0!==e?r(e):r()}catch(e){n(e)}else if(null!==i){let e=p();e.serverResponse=i.getErrorText(),n(this.errorCallback_?this.errorCallback_(i,e):e)}else n(t.canceled?this.appDelete_?v():g():m())};this.canceled_?e(!1,new x(!1,null,!0)):this.backoffId_=/**
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
 */function(e,t,r){let n=1,i=null,a=null,s=!1,o=0,l=!1;function u(...e){l||(l=!0,t.apply(null,e))}function c(t){i=setTimeout(()=>{i=null,e(d,2===o)},t)}function h(){a&&clearTimeout(a)}function d(e,...t){let r;if(l){h();return}if(e||2===o||s){h(),u.call(null,e,...t);return}n<64&&(n*=2),1===o?(o=2,r=0):r=(n+Math.random())*1e3,c(r)}let f=!1;function p(e){!f&&(f=!0,h(),!l&&(null!==i?(e||(o=2),clearTimeout(i),c(0)):e||(o=1)))}return c(0),a=setTimeout(()=>{s=!0,p(!0)},r),p}((e,t)=>{if(t){e(!1,new x(!1,null,!0));return}let r=this.connectionFactory_();this.pendingConnection_=r;let n=e=>{let t=e.loaded,r=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,r)};null!==this.progressCallback_&&r.addUploadProgressListener(n),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&r.removeUploadProgressListener(n),this.pendingConnection_=null;let t=r.getErrorCode()===s.NO_ERROR,i=r.getStatus();if(!t||O(i,this.additionalRetryCodes_)&&this.retry){e(!1,new x(!1,null,r.getErrorCode()===s.ABORT));return}e(!0,new x(-1!==this.successCodes_.indexOf(i),r))})},e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class x{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function N(...e){let t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){let r=new t;for(let t=0;t<e.length;t++)r.append(e[t]);return r.getBlob()}if(I())return new Blob(e);throw new d(a.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}/**
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
 */let L={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class U{constructor(e,t){this.data=e,this.contentType=t||null}}function F(e){let t=[];for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);n<=127?t.push(n):n<=2047?t.push(192|n>>6,128|63&n):(64512&n)==55296?r<e.length-1&&(64512&e.charCodeAt(r+1))==56320?(n=65536|(1023&n)<<10|1023&e.charCodeAt(++r),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)):t.push(239,191,189):(64512&n)==56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function P(e,t){let r;switch(e){case L.BASE64:{let r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n)throw y(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case L.BASE64URL:{let r=-1!==t.indexOf("+"),n=-1!==t.indexOf("/");if(r||n)throw y(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}}try{r=/**
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
 */function(e){if("undefined"==typeof atob)throw new d(a.UNSUPPORTED_ENVIRONMENT,"base-64 is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.");return atob(e)}(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw y(e,"Invalid character found")}let n=new Uint8Array(r.length);for(let e=0;e<r.length;e++)n[e]=r.charCodeAt(e);return n}class B{constructor(e){var t;this.base64=!1,this.contentType=null;let r=e.match(/^data:([^,]+)?,/);if(null===r)throw y(L.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let n=r[1]||null;null!=n&&(this.base64=(t=";base64",n.length>=t.length&&n.substring(n.length-t.length)===t),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}/**
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
 */class M{constructor(e,t){let r=0,n="";S(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}size(){return this.size_}type(){return this.type_}slice(e,t){if(!S(this.data_))return new M(new Uint8Array(this.data_.buffer,e,t-e),!0);{var r;let n=(r=this.data_).webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null;return null===n?null:new M(n)}}static getBlob(...e){if(I()){let t=e.map(e=>e instanceof M?e.data_:e);return new M(N.apply(null,t))}{let t=e.map(e=>A(e)?function(e,t){switch(e){case L.RAW:return new U(F(t));case L.BASE64:case L.BASE64URL:return new U(P(e,t));case L.DATA_URL:return new U(function(e){let t=new B(e);return t.base64?P(L.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw y(L.DATA_URL,"Malformed data URL.")}return F(t)}(t.rest)}(t),new B(t).contentType)}throw p()}(L.RAW,e).data:e.data_),r=0;t.forEach(e=>{r+=e.byteLength});let n=new Uint8Array(r),i=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)n[i++]=e[t]}),new M(n,!0)}}uploadData(){return this.data_}}/**
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
 */function V(e){var t;let r;try{r=JSON.parse(e)}catch(e){return null}return"object"!=typeof(t=r)||Array.isArray(t)?null:r}function j(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}/**
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
 */function $(e,t){return t}class H{constructor(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||$}}let q=null;function z(){if(q)return q;let e=[];e.push(new H("bucket")),e.push(new H("generation")),e.push(new H("metageneration")),e.push(new H("name","fullPath",!0));let t=new H("name");t.xform=function(e,t){return!A(t)||t.length<2?t:j(t)},e.push(t);let r=new H("size");return r.xform=function(e,t){return void 0!==t?Number(t):t},e.push(r),e.push(new H("timeCreated")),e.push(new H("updated")),e.push(new H("md5Hash",null,!0)),e.push(new H("cacheControl",null,!0)),e.push(new H("contentDisposition",null,!0)),e.push(new H("contentEncoding",null,!0)),e.push(new H("contentLanguage",null,!0)),e.push(new H("contentType",null,!0)),e.push(new H("metadata","customMetadata",!0)),q=e}function W(e,t,r){let n=V(t);return null===n?null:function(e,t,r){let n={};n.type="file";let i=r.length;for(let e=0;e<i;e++){let i=r[e];n[i.local]=i.xform(n,t[i.server])}return Object.defineProperty(n,"ref",{get:function(){let t=new E(n.bucket,n.fullPath);return e._makeStorageReference(t)}}),n}(e,n,r)}function X(e,t){let r={},n=t.length;for(let i=0;i<n;i++){let n=t[i];n.writable&&(r[n.server]=e[n.local])}return JSON.stringify(r)}class G{constructor(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function K(e){if(!e)throw p()}function Z(e,t){return function(r,n){let i=W(e,n,t);return K(null!==i),i}}function J(e){return function(t,r){var n,i;let s;return 401===t.getStatus()?s=t.getErrorText().includes("Firebase App Check token is invalid")?new d(a.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new d(a.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(n=e.bucket,s=new d(a.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,s=new d(a.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}}function Y(e){let t=J(e);return function(r,n){let i=t(r,n);if(404===r.getStatus()){var s;s=e.path,i=new d(a.OBJECT_NOT_FOUND,"Object '"+s+"' does not exist.")}return i.serverResponse=n.serverResponse,i}}function Q(e,t,r){let n=Object.assign({},r);return n.fullPath=e.path,n.size=t.size(),!n.contentType&&(n.contentType=t&&t.type()||"application/octet-stream"),n}class ee{constructor(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null}}function et(e,t){let r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){K(!1)}return K(!!r&&-1!==(t||["active"]).indexOf(r)),r}let er={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function en(e){switch(e){case"running":case"pausing":case"canceling":return er.RUNNING;case"paused":return er.PAUSED;case"success":return er.SUCCESS;case"canceled":return er.CANCELED;default:return er.ERROR}}/**
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
 */class ei{constructor(e,t,r){"function"==typeof e||null!=t||null!=r?(this.next=e,this.error=null!=t?t:void 0,this.complete=null!=r?r:void 0):(this.next=e.next,this.error=e.error,this.complete=e.complete)}}/**
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
 */function ea(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class es{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=s.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=s.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=s.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,n){if(this.sent_)throw w("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(let e in n)n.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,n[e].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw w("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw w("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return -1}}getResponse(){if(!this.sent_)throw w("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw w("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class eo extends es{initXhr(){this.xhr_.responseType="text"}}function el(){return new eo}/**
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
 */class eu{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=z(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(a.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{let t=this.isExponentialBackoffExpired();if(O(e.status,[])){if(t)e=m();else{this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,this.completeTransitions_();return}}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(a.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){let e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}})}_createResumable(){this._resolveToken((e,t)=>{let r=function(e,t,r,n,i){let a=t.bucketOnlyServerUrl(),s=Q(t,n,i),o={name:s.fullPath},l=D(a,e.host,e._protocol),u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${n.size()}`,"X-Goog-Upload-Header-Content-Type":s.contentType,"Content-Type":"application/json; charset=utf-8"},c=X(s,r),h=new G(l,"POST",function(e){let t;et(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){K(!1)}return K(A(t)),t},e.maxUploadRetryTime);return h.urlParams=o,h.headers=u,h.body=c,h.errorHandler=J(t),h}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(r,el,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){let e=this._uploadUrl;this._resolveToken((t,r)=>{let n=function(e,t,r,n){let i=new G(r,"POST",function(e){let t=et(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){K(!1)}r||K(!1);let i=Number(r);return K(!isNaN(i)),new ee(i,n.size(),"final"===t)},e.maxUploadRetryTime);return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=J(t),i}(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(n,el,t,r);this._request=i,i.getPromise().then(e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){let e=262144*this._chunkMultiplier,t=new ee(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((n,i)=>{let s;try{s=function(e,t,r,n,i,s,o,l){let u=new ee(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=n.size()),n.size()!==u.total)throw new d(a.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");let c=u.total-u.current,h=c;i>0&&(h=Math.min(h,i));let f=u.current,p=f+h,m={"X-Goog-Upload-Command":0===h?"finalize":c===h?"upload, finalize":"upload","X-Goog-Upload-Offset":`${u.current}`},g=n.slice(f,p);if(null===g)throw _();let b=new G(r,"POST",function(e,r){let i;let a=et(e,["active","final"]),o=u.current+h,l=n.size();return i="final"===a?Z(t,s)(e,r):null,new ee(o,l,"final"===a,i)},t.maxUploadRetryTime);return b.headers=m,b.body=g.uploadData(),b.progressCallback=l||null,b.errorHandler=J(e),b}(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){this._error=e,this._transition("error");return}let o=this._ref.storage._makeRequest(s,el,n,i,!1);this._request=o,o.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){262144*this._chunkMultiplier*2<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{let r=function(e,t,r){let n=D(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,a=new G(n,"GET",Z(e,r),i);return a.errorHandler=Y(t),a}(this._ref.storage,this._ref._location,this._mappings),n=this._ref.storage._makeRequest(r,el,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{let r=function(e,t,r,n,i){let a=t.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"},o=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();s["Content-Type"]="multipart/related; boundary="+o;let l=Q(t,n,i),u="--"+o+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+X(l,r)+"\r\n--"+o+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",c=M.getBlob(u,n,"\r\n--"+o+"--");if(null===c)throw _();let h={name:l.fullPath},d=D(a,e.host,e._protocol),f=e.maxUploadRetryTime,p=new G(d,"POST",Z(e,r),f);return p.urlParams=h,p.headers=s,p.body=c.uploadData(),p.errorHandler=J(t),p}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(r,el,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){let t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":let t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=g(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){let e=en(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,n){let i=new ei(t||void 0,r||void 0,n||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){let t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(en(this._state)){case er.SUCCESS:ea(this._resolve.bind(null,this.snapshot))();break;case er.CANCELED:case er.ERROR:ea(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(en(this._state)){case er.RUNNING:case er.PAUSED:e.next&&ea(e.next.bind(e,this.snapshot))();break;case er.SUCCESS:e.complete&&ea(e.complete.bind(e))();break;case er.CANCELED:case er.ERROR:default:e.error&&ea(e.error.bind(e,this._error))()}}resume(){let e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){let e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){let e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}/**
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
 */class ec{constructor(e,t){this._service=e,t instanceof E?this._location=t:this._location=E.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ec(e,t)}get root(){let e=new E(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return j(this._location.path)}get storage(){return this._service}get parent(){let e=/**
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
 */function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");return -1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;let t=new E(this._location.bucket,e);return new ec(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw new d(a.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}function eh(e,t){let r=null==t?void 0:t[h];return null==r?null:E.makeFromBucketSpec(r,e)}class ed{constructor(e,t,r,n,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=n,this._firebaseVersion=i,this._bucket=null,this._host=c,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=n?this._bucket=E.makeFromBucketSpec(n,this._host):this._bucket=eh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=E.makeFromBucketSpec(this._url,e):this._bucket=eh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){C("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){C("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ec(this,e)}_makeRequest(e,t,r,n,i=!0){if(this._deleted)return new T(v());{let a=function(e,t,r,n,i,a,s=!0){let o=k(e.urlParams),l=e.url+o,u=Object.assign({},e.headers);return t&&(u["X-Firebase-GMPID"]=t),null!==r&&r.length>0&&(u.Authorization="Firebase "+r),u["X-Firebase-Storage-Version"]="webjs/"+(null!=a?a:"AppManager"),null!==n&&(u["X-Firebase-AppCheck"]=n),new R(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,s)}(e,this._appId,r,n,t,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){let[r,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,n).getPromise()}}let ef="@firebase/storage",ep="0.12.5",em="storage";function eg(e,t,r){var n;return(n=e=(0,l.m9)(e))._throwIfRoot("uploadBytesResumable"),new eu(n,new M(t),r)}function e_(e){return function(e){e._throwIfRoot("getDownloadURL");let t=function(e,t,r){let n=new G(D(t.fullServerUrl(),e.host,e._protocol),"GET",function(t,n){let i=W(e,n,r);return K(null!==i),function(e,t,r,n){let i=V(t);if(null===i||!A(i.downloadTokens))return null;let a=i.downloadTokens;if(0===a.length)return null;let s=encodeURIComponent;return a.split(",").map(t=>{let i=e.bucket,a=e.fullPath;return D("/b/"+s(i)+"/o/"+s(a),r,n)+k({alt:"media",token:t})})[0]}(i,n,e.host,e._protocol)},e.maxOperationRetryTime);return n.errorHandler=Y(t),n}(e.storage,e._location,z());return e.storage.makeRequestWithTokens(t,el).then(e=>{if(null===e)throw new d(a.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e})}(e=(0,l.m9)(e))}function eb(e,t){return function(e,t){if(!(t&&/^[A-Za-z]+:\/\//.test(t)))return function e(t,r){if(t instanceof ed){if(null==t._bucket)throw new d(a.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+h+"' property when initializing the app?");let n=new ec(t,t._bucket);return null!=r?e(n,r):n}return void 0!==r?function(e,t){let r=function(e,t){let r=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?r:e+"/"+r}(e._location.path,t),n=new E(e._location.bucket,r);return new ec(e.storage,n)}(t,r):t}(e,t);if(e instanceof ed)return new ec(e,t);throw b("To use ref(service, url), the first argument must be a Storage instance.")}(e=(0,l.m9)(e),t)}function ev(e=(0,o.Mq)(),t){e=(0,l.m9)(e);let r=(0,o.qX)(e,em).getImmediate({identifier:t}),n=(0,l.P0)("storage");return n&&function(e,t,r,n={}){!function(e,t,r,n={}){e.host=`${t}:${r}`,e._protocol="http";let{mockUserToken:i}=n;i&&(e._overrideAuthToken="string"==typeof i?i:(0,l.Sg)(i,e.app.options.projectId))}(e,t,r,n)}(r,...n),r}(0,o.Xd)(new u.wA(em,function(e,{instanceIdentifier:t}){return new ed(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t,o.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,o.KN)(ef,ep,""),(0,o.KN)(ef,ep,"esm2017")},6512:function(e,t,r){"use strict";let n,i,a;r.d(t,{X3:function(){return m}});let s=(e,t)=>t.some(t=>e instanceof t),o=new WeakMap,l=new WeakMap,u=new WeakMap,c=new WeakMap,h=new WeakMap,d={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return l.get(e);if("objectStoreNames"===t)return e.objectStoreNames||u.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return f(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function f(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(f(e.result)),n()},a=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{t instanceof IDBCursor&&o.set(t,e)}).catch(()=>{}),h.set(t,e),t}(e);if(c.has(e))return c.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(p(this),e),f(o.get(this))}:function(...e){return f(t.apply(p(this),e))}:function(e,...r){let n=t.call(p(this),e,...r);return u.set(n,e.sort?e.sort():[e]),f(n)}:(t instanceof IDBTransaction&&function(e){if(l.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),n()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});l.set(e,t)}(t),s(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,d):t;return r!==e&&(c.set(e,r),h.set(r,e)),r}let p=e=>h.get(e);function m(e,t,{blocked:r,upgrade:n,blocking:i,terminated:a}={}){let s=indexedDB.open(e,t),o=f(s);return n&&s.addEventListener("upgradeneeded",e=>{n(f(s.result),e.oldVersion,e.newVersion,f(s.transaction),e)}),r&&s.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),o.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}let g=["get","getKey","getAll","getAllKeys","count"],_=["put","add","delete","clear"],b=new Map;function v(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(b.get(t))return b.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=_.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||g.includes(r)))return;let a=async function(e,...t){let a=this.transaction(e,i?"readwrite":"readonly"),s=a.store;return n&&(s=s.index(t.shift())),(await Promise.all([s[r](...t),i&&a.done]))[0]};return b.set(t,a),a}d={...a=d,get:(e,t,r)=>v(e,t)||a.get(e,t,r),has:(e,t)=>!!v(e,t)||a.has(e,t)}},9343:function(e,t,r){"use strict";r.d(t,{cI:function(){return em}});var n=r(2265),i=e=>"checkbox"===e.type,a=e=>e instanceof Date,s=e=>null==e;let o=e=>"object"==typeof e;var l=e=>!s(e)&&!Array.isArray(e)&&o(e)&&!a(e),u=e=>l(e)&&e.target?i(e.target)?e.target.checked:e.target.value:e,c=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,h=(e,t)=>e.has(c(t)),d=e=>{let t=e.constructor&&e.constructor.prototype;return l(t)&&t.hasOwnProperty("isPrototypeOf")},f="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function p(e){let t;let r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(!(f&&(e instanceof Blob||e instanceof FileList))&&(r||l(e))))return e;else if(t=r?[]:{},r||d(e))for(let r in e)e.hasOwnProperty(r)&&(t[r]=p(e[r]));else t=e;return t}var m=e=>Array.isArray(e)?e.filter(Boolean):[],g=e=>void 0===e,_=(e,t,r)=>{if(!t||!l(e))return r;let n=m(t.split(/[,[\].]+?/)).reduce((e,t)=>s(e)?e:e[t],e);return g(n)||n===e?g(e[t])?r:e[t]:n},b=e=>"boolean"==typeof e,v=e=>/^\w*$/.test(e),y=e=>m(e.replace(/["|']|\]/g,"").split(/\.|\[/)),w=(e,t,r)=>{let n=-1,i=v(t)?[t]:y(t),a=i.length,s=a-1;for(;++n<a;){let t=i[n],a=r;if(n!==s){let r=e[t];a=l(r)||Array.isArray(r)?r:isNaN(+i[n+1])?{}:[]}if("__proto__"===t)return;e[t]=a,e=e[t]}return e};let E={BLUR:"blur",FOCUS_OUT:"focusout"},T={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},A={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};n.createContext(null);var S=(e,t,r,n=!0)=>{let i={defaultValues:t._defaultValues};for(let a in e)Object.defineProperty(i,a,{get:()=>(t._proxyFormState[a]!==T.all&&(t._proxyFormState[a]=!n||T.all),r&&(r[a]=!0),e[a])});return i},I=e=>l(e)&&!Object.keys(e).length,C=(e,t,r,n)=>{r(e);let{name:i,...a}=e;return I(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find(e=>t[e]===(!n||T.all))},D=e=>Array.isArray(e)?e:[e],k=e=>"string"==typeof e,O=(e,t,r,n,i)=>k(e)?(n&&t.watch.add(e),_(r,e,i)):Array.isArray(e)?e.map(e=>(n&&t.watch.add(e),_(r,e))):(n&&(t.watchAll=!0),r),R=(e,t,r,n,i)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:i||!0}}:{},x=e=>({isOnSubmit:!e||e===T.onSubmit,isOnBlur:e===T.onBlur,isOnChange:e===T.onChange,isOnAll:e===T.all,isOnTouch:e===T.onTouched}),N=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));let L=(e,t,r,n)=>{for(let i of r||Object.keys(e)){let r=_(e,i);if(r){let{_f:e,...a}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],i)&&!n||e.ref&&t(e.ref,e.name)&&!n)break;L(a,t)}else l(a)&&L(a,t)}}};var U=(e,t,r)=>{let n=m(_(e,r));return w(n,"root",t[r]),w(e,r,n),e},F=e=>"file"===e.type,P=e=>"function"==typeof e,B=e=>{if(!f)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},M=e=>k(e),V=e=>"radio"===e.type,j=e=>e instanceof RegExp;let $={value:!1,isValid:!1},H={value:!0,isValid:!0};var q=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!g(e[0].attributes.value)?g(e[0].value)||""===e[0].value?H:{value:e[0].value,isValid:!0}:H:$}return $};let z={isValid:!1,value:null};var W=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,z):z;function X(e,t,r="validate"){if(M(e)||Array.isArray(e)&&e.every(M)||b(e)&&!e)return{type:r,message:M(e)?e:"",ref:t}}var G=e=>l(e)&&!j(e)?e:{value:e,message:""},K=async(e,t,r,n,a)=>{let{ref:o,refs:u,required:c,maxLength:h,minLength:d,min:f,max:p,pattern:m,validate:v,name:y,valueAsNumber:w,mount:E,disabled:T}=e._f,S=_(t,y);if(!E||T)return{};let C=u?u[0]:o,D=e=>{n&&C.reportValidity&&(C.setCustomValidity(b(e)?"":e||""),C.reportValidity())},O={},x=V(o),N=i(o),L=(w||F(o))&&g(o.value)&&g(S)||B(o)&&""===o.value||""===S||Array.isArray(S)&&!S.length,U=R.bind(null,y,r,O),$=(e,t,r,n=A.maxLength,i=A.minLength)=>{let a=e?t:r;O[y]={type:e?n:i,message:a,ref:o,...U(e?n:i,a)}};if(a?!Array.isArray(S)||!S.length:c&&(!(x||N)&&(L||s(S))||b(S)&&!S||N&&!q(u).isValid||x&&!W(u).isValid)){let{value:e,message:t}=M(c)?{value:!!c,message:c}:G(c);if(e&&(O[y]={type:A.required,message:t,ref:C,...U(A.required,t)},!r))return D(t),O}if(!L&&(!s(f)||!s(p))){let e,t;let n=G(p),i=G(f);if(s(S)||isNaN(S)){let r=o.valueAsDate||new Date(S),a=e=>new Date(new Date().toDateString()+" "+e),s="time"==o.type,l="week"==o.type;k(n.value)&&S&&(e=s?a(S)>a(n.value):l?S>n.value:r>new Date(n.value)),k(i.value)&&S&&(t=s?a(S)<a(i.value):l?S<i.value:r<new Date(i.value))}else{let r=o.valueAsNumber||(S?+S:S);s(n.value)||(e=r>n.value),s(i.value)||(t=r<i.value)}if((e||t)&&($(!!e,n.message,i.message,A.max,A.min),!r))return D(O[y].message),O}if((h||d)&&!L&&(k(S)||a&&Array.isArray(S))){let e=G(h),t=G(d),n=!s(e.value)&&S.length>+e.value,i=!s(t.value)&&S.length<+t.value;if((n||i)&&($(n,e.message,t.message),!r))return D(O[y].message),O}if(m&&!L&&k(S)){let{value:e,message:t}=G(m);if(j(e)&&!S.match(e)&&(O[y]={type:A.pattern,message:t,ref:o,...U(A.pattern,t)},!r))return D(t),O}if(v){if(P(v)){let e=X(await v(S,t),C);if(e&&(O[y]={...e,...U(A.validate,e.message)},!r))return D(e.message),O}else if(l(v)){let e={};for(let n in v){if(!I(e)&&!r)break;let i=X(await v[n](S,t),C,n);i&&(e={...i,...U(n,i.message)},D(i.message),r&&(O[y]=e))}if(!I(e)&&(O[y]={ref:C,...e},!r))return O}}return D(!0),O};function Z(e,t){let r=Array.isArray(t)?t:v(t)?[t]:y(t),n=1===r.length?e:function(e,t){let r=t.slice(0,-1).length,n=0;for(;n<r;)e=g(e)?n++:e[t[n++]];return e}(e,r),i=r.length-1,a=r[i];return n&&delete n[a],0!==i&&(l(n)&&I(n)||Array.isArray(n)&&function(e){for(let t in e)if(e.hasOwnProperty(t)&&!g(e[t]))return!1;return!0}(n))&&Z(e,r.slice(0,-1)),e}var J=()=>{let e=[];return{get observers(){return e},next:t=>{for(let r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}},Y=e=>s(e)||!o(e);function Q(e,t){if(Y(e)||Y(t))return e===t;if(a(e)&&a(t))return e.getTime()===t.getTime();let r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let i of r){let r=e[i];if(!n.includes(i))return!1;if("ref"!==i){let e=t[i];if(a(r)&&a(e)||l(r)&&l(e)||Array.isArray(r)&&Array.isArray(e)?!Q(r,e):r!==e)return!1}}return!0}var ee=e=>"select-multiple"===e.type,et=e=>V(e)||i(e),er=e=>B(e)&&e.isConnected,en=e=>{for(let t in e)if(P(e[t]))return!0;return!1};function ei(e,t={}){let r=Array.isArray(e);if(l(e)||r)for(let r in e)Array.isArray(e[r])||l(e[r])&&!en(e[r])?(t[r]=Array.isArray(e[r])?[]:{},ei(e[r],t[r])):s(e[r])||(t[r]=!0);return t}var ea=(e,t)=>(function e(t,r,n){let i=Array.isArray(t);if(l(t)||i)for(let i in t)Array.isArray(t[i])||l(t[i])&&!en(t[i])?g(r)||Y(n[i])?n[i]=Array.isArray(t[i])?ei(t[i],[]):{...ei(t[i])}:e(t[i],s(r)?{}:r[i],n[i]):n[i]=!Q(t[i],r[i]);return n})(e,t,ei(t)),es=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>g(e)?e:t?""===e?NaN:e?+e:e:r&&k(e)?new Date(e):n?n(e):e;function eo(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:F(t)?t.files:V(t)?W(e.refs).value:ee(t)?[...t.selectedOptions].map(({value:e})=>e):i(t)?q(e.refs).value:es(g(t.value)?e.ref.value:t.value,e)}var el=(e,t,r,n)=>{let i={};for(let r of e){let e=_(t,r);e&&w(i,r,e._f)}return{criteriaMode:r,names:[...e],fields:i,shouldUseNativeValidation:n}},eu=e=>g(e)?e:j(e)?e.source:l(e)?j(e.value)?e.value.source:e.value:e,ec=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function eh(e,t,r){let n=_(e,r);if(n||v(r))return{error:n,name:r};let i=r.split(".");for(;i.length;){let n=i.join("."),a=_(t,n),s=_(e,n);if(a&&!Array.isArray(a)&&r!==n)break;if(s&&s.type)return{name:n,error:s};i.pop()}return{name:r}}var ed=(e,t,r,n,i)=>!i.isOnAll&&(!r&&i.isOnTouch?!(t||e):(r?n.isOnBlur:i.isOnBlur)?!e:(r?!n.isOnChange:!i.isOnChange)||e),ef=(e,t)=>!m(_(e,t)).length&&Z(e,t);let ep={mode:T.onSubmit,reValidateMode:T.onChange,shouldFocusError:!0};function em(e={}){let t=n.useRef(),r=n.useRef(),[o,c]=n.useState({isDirty:!1,isValidating:!1,isLoading:P(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:P(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...function(e={}){let t,r={...ep,...e},n={submitCount:0,isDirty:!1,isLoading:P(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},o={},c=(l(r.defaultValues)||l(r.values))&&p(r.defaultValues||r.values)||{},d=r.shouldUnregister?{}:p(c),v={action:!1,mount:!1,watch:!1},y={mount:new Set,unMount:new Set,array:new Set,watch:new Set},A=0,S={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},C={values:J(),array:J(),state:J()},R=x(r.mode),M=x(r.reValidateMode),V=r.criteriaMode===T.all,j=e=>t=>{clearTimeout(A),A=setTimeout(e,t)},$=async e=>{if(S.isValid||e){let e=r.resolver?I((await G()).errors):await ei(o,!0);e!==n.isValid&&C.state.next({isValid:e})}},H=(e,t)=>{(S.isValidating||S.validatingFields)&&((e||Array.from(y.mount)).forEach(e=>{e&&(t?w(n.validatingFields,e,t):Z(n.validatingFields,e))}),C.state.next({validatingFields:n.validatingFields,isValidating:!I(n.validatingFields)}))},q=(e,t)=>{w(n.errors,e,t),C.state.next({errors:n.errors})},z=(e,t,r,n)=>{let i=_(o,e);if(i){let a=_(d,e,g(r)?_(c,e):r);g(a)||n&&n.defaultChecked||t?w(d,e,t?a:eo(i._f)):e_(e,a),v.mount&&$()}},W=(e,t,r,i,a)=>{let s=!1,l=!1,u={name:e},h=!!(_(o,e)&&_(o,e)._f.disabled);if(!r||i){S.isDirty&&(l=n.isDirty,n.isDirty=u.isDirty=em(),s=l!==u.isDirty);let r=h||Q(_(c,e),t);l=!!(!h&&_(n.dirtyFields,e)),r||h?Z(n.dirtyFields,e):w(n.dirtyFields,e,!0),u.dirtyFields=n.dirtyFields,s=s||S.dirtyFields&&!r!==l}if(r){let t=_(n.touchedFields,e);t||(w(n.touchedFields,e,r),u.touchedFields=n.touchedFields,s=s||S.touchedFields&&t!==r)}return s&&a&&C.state.next(u),s?u:{}},X=(r,i,a,s)=>{let o=_(n.errors,r),l=S.isValid&&b(i)&&n.isValid!==i;if(e.delayError&&a?(t=j(()=>q(r,a)))(e.delayError):(clearTimeout(A),t=null,a?w(n.errors,r,a):Z(n.errors,r)),(a?!Q(o,a):o)||!I(s)||l){let e={...s,...l&&b(i)?{isValid:i}:{},errors:n.errors,name:r};n={...n,...e},C.state.next(e)}},G=async e=>{H(e,!0);let t=await r.resolver(d,r.context,el(e||y.mount,o,r.criteriaMode,r.shouldUseNativeValidation));return H(e),t},en=async e=>{let{errors:t}=await G(e);if(e)for(let r of e){let e=_(t,r);e?w(n.errors,r,e):Z(n.errors,r)}else n.errors=t;return t},ei=async(e,t,i={valid:!0})=>{for(let a in e){let s=e[a];if(s){let{_f:e,...o}=s;if(e){let o=y.array.has(e.name);H([a],!0);let l=await K(s,d,V,r.shouldUseNativeValidation&&!t,o);if(H([a]),l[e.name]&&(i.valid=!1,t))break;t||(_(l,e.name)?o?U(n.errors,l,e.name):w(n.errors,e.name,l[e.name]):Z(n.errors,e.name))}o&&await ei(o,t,i)}}return i.valid},em=(e,t)=>(e&&t&&w(d,e,t),!Q(eT(),c)),eg=(e,t,r)=>O(e,y,{...v.mount?d:g(t)?c:k(e)?{[e]:t}:t},r,t),e_=(e,t,r={})=>{let n=_(o,e),a=t;if(n){let r=n._f;r&&(r.disabled||w(d,e,es(t,r)),a=B(r.ref)&&s(t)?"":t,ee(r.ref)?[...r.ref.options].forEach(e=>e.selected=a.includes(e.value)):r.refs?i(r.ref)?r.refs.length>1?r.refs.forEach(e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(a)?!!a.find(t=>t===e.value):a===e.value)):r.refs[0]&&(r.refs[0].checked=!!a):r.refs.forEach(e=>e.checked=e.value===a):F(r.ref)?r.ref.value="":(r.ref.value=a,r.ref.type||C.values.next({name:e,values:{...d}})))}(r.shouldDirty||r.shouldTouch)&&W(e,a,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&eE(e)},eb=(e,t,r)=>{for(let n in t){let i=t[n],s=`${e}.${n}`,l=_(o,s);!y.array.has(e)&&Y(i)&&(!l||l._f)||a(i)?e_(s,i,r):eb(s,i,r)}},ev=(e,t,r={})=>{let i=_(o,e),a=y.array.has(e),l=p(t);w(d,e,l),a?(C.array.next({name:e,values:{...d}}),(S.isDirty||S.dirtyFields)&&r.shouldDirty&&C.state.next({name:e,dirtyFields:ea(c,d),isDirty:em(e,l)})):!i||i._f||s(l)?e_(e,l,r):eb(e,l,r),N(e,y)&&C.state.next({...n}),C.values.next({name:v.mount?e:void 0,values:{...d}})},ey=async e=>{v.mount=!0;let i=e.target,a=i.name,s=!0,l=_(o,a),c=e=>{s=Number.isNaN(e)||e===_(d,a,e)};if(l){let h,f;let p=i.type?eo(l._f):u(e),m=e.type===E.BLUR||e.type===E.FOCUS_OUT,g=!ec(l._f)&&!r.resolver&&!_(n.errors,a)&&!l._f.deps||ed(m,_(n.touchedFields,a),n.isSubmitted,M,R),b=N(a,y,m);w(d,a,p),m?(l._f.onBlur&&l._f.onBlur(e),t&&t(0)):l._f.onChange&&l._f.onChange(e);let v=W(a,p,m,!1),T=!I(v)||b;if(m||C.values.next({name:a,type:e.type,values:{...d}}),g)return S.isValid&&$(),T&&C.state.next({name:a,...b?{}:v});if(!m&&b&&C.state.next({...n}),r.resolver){let{errors:e}=await G([a]);if(c(p),s){let t=eh(n.errors,o,a),r=eh(e,o,t.name||a);h=r.error,a=r.name,f=I(e)}}else H([a],!0),h=(await K(l,d,V,r.shouldUseNativeValidation))[a],H([a]),c(p),s&&(h?f=!1:S.isValid&&(f=await ei(o,!0)));s&&(l._f.deps&&eE(l._f.deps),X(a,f,h,v))}},ew=(e,t)=>{if(_(n.errors,t)&&e.focus)return e.focus(),1},eE=async(e,t={})=>{let i,a;let s=D(e);if(r.resolver){let t=await en(g(e)?e:s);i=I(t),a=e?!s.some(e=>_(t,e)):i}else e?((a=(await Promise.all(s.map(async e=>{let t=_(o,e);return await ei(t&&t._f?{[e]:t}:t)}))).every(Boolean))||n.isValid)&&$():a=i=await ei(o);return C.state.next({...!k(e)||S.isValid&&i!==n.isValid?{}:{name:e},...r.resolver||!e?{isValid:i}:{},errors:n.errors}),t.shouldFocus&&!a&&L(o,ew,e?s:y.mount),a},eT=e=>{let t={...v.mount?d:c};return g(e)?t:k(e)?_(t,e):e.map(e=>_(t,e))},eA=(e,t)=>({invalid:!!_((t||n).errors,e),isDirty:!!_((t||n).dirtyFields,e),isTouched:!!_((t||n).touchedFields,e),isValidating:!!_((t||n).validatingFields,e),error:_((t||n).errors,e)}),eS=(e,t,r)=>{let i=(_(o,e,{_f:{}})._f||{}).ref,{ref:a,message:s,type:l,...u}=_(n.errors,e)||{};w(n.errors,e,{...u,...t,ref:i}),C.state.next({name:e,errors:n.errors,isValid:!1}),r&&r.shouldFocus&&i&&i.focus&&i.focus()},eI=(e,t={})=>{for(let i of e?D(e):y.mount)y.mount.delete(i),y.array.delete(i),t.keepValue||(Z(o,i),Z(d,i)),t.keepError||Z(n.errors,i),t.keepDirty||Z(n.dirtyFields,i),t.keepTouched||Z(n.touchedFields,i),t.keepIsValidating||Z(n.validatingFields,i),r.shouldUnregister||t.keepDefaultValue||Z(c,i);C.values.next({values:{...d}}),C.state.next({...n,...t.keepDirty?{isDirty:em()}:{}}),t.keepIsValid||$()},eC=({disabled:e,name:t,field:r,fields:n,value:i})=>{if(b(e)&&v.mount||e){let a=e?void 0:g(i)?eo(r?r._f:_(n,t)._f):i;w(d,t,a),W(t,a,!1,!1,!0)}},eD=(e,t={})=>{let n=_(o,e),i=b(t.disabled);return w(o,e,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:e}},name:e,mount:!0,...t}}),y.mount.add(e),n?eC({field:n,disabled:t.disabled,name:e,value:t.value}):z(e,!0,t.value),{...i?{disabled:t.disabled}:{},...r.progressive?{required:!!t.required,min:eu(t.min),max:eu(t.max),minLength:eu(t.minLength),maxLength:eu(t.maxLength),pattern:eu(t.pattern)}:{},name:e,onChange:ey,onBlur:ey,ref:i=>{if(i){eD(e,t),n=_(o,e);let r=g(i.value)&&i.querySelectorAll&&i.querySelectorAll("input,select,textarea")[0]||i,a=et(r),s=n._f.refs||[];(a?s.find(e=>e===r):r===n._f.ref)||(w(o,e,{_f:{...n._f,...a?{refs:[...s.filter(er),r,...Array.isArray(_(c,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),z(e,!1,void 0,r))}else(n=_(o,e,{}))._f&&(n._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&!(h(y.array,e)&&v.action)&&y.unMount.add(e)}}},ek=()=>r.shouldFocusError&&L(o,ew,y.mount),eO=(e,t)=>async i=>{let a;i&&(i.preventDefault&&i.preventDefault(),i.persist&&i.persist());let s=p(d);if(C.state.next({isSubmitting:!0}),r.resolver){let{errors:e,values:t}=await G();n.errors=e,s=t}else await ei(o);if(Z(n.errors,"root"),I(n.errors)){C.state.next({errors:{}});try{await e(s,i)}catch(e){a=e}}else t&&await t({...n.errors},i),ek(),setTimeout(ek);if(C.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:I(n.errors)&&!a,submitCount:n.submitCount+1,errors:n.errors}),a)throw a},eR=(t,r={})=>{let i=t?p(t):c,a=p(i),s=I(t),l=s?c:a;if(r.keepDefaultValues||(c=i),!r.keepValues){if(r.keepDirtyValues)for(let e of y.mount)_(n.dirtyFields,e)?w(l,e,_(d,e)):ev(e,_(l,e));else{if(f&&g(t))for(let e of y.mount){let t=_(o,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(B(e)){let t=e.closest("form");if(t){t.reset();break}}}}o={}}d=e.shouldUnregister?r.keepDefaultValues?p(c):{}:p(l),C.array.next({values:{...l}}),C.values.next({values:{...l}})}y={mount:r.keepDirtyValues?y.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},v.mount=!S.isValid||!!r.keepIsValid||!!r.keepDirtyValues,v.watch=!!e.shouldUnregister,C.state.next({submitCount:r.keepSubmitCount?n.submitCount:0,isDirty:!s&&(r.keepDirty?n.isDirty:!!(r.keepDefaultValues&&!Q(t,c))),isSubmitted:!!r.keepIsSubmitted&&n.isSubmitted,dirtyFields:s?[]:r.keepDirtyValues?r.keepDefaultValues&&d?ea(c,d):n.dirtyFields:r.keepDefaultValues&&t?ea(c,t):{},touchedFields:r.keepTouched?n.touchedFields:{},errors:r.keepErrors?n.errors:{},isSubmitSuccessful:!!r.keepIsSubmitSuccessful&&n.isSubmitSuccessful,isSubmitting:!1})},ex=(e,t)=>eR(P(e)?e(d):e,t);return{control:{register:eD,unregister:eI,getFieldState:eA,handleSubmit:eO,setError:eS,_executeSchema:G,_getWatch:eg,_getDirty:em,_updateValid:$,_removeUnmounted:()=>{for(let e of y.unMount){let t=_(o,e);t&&(t._f.refs?t._f.refs.every(e=>!er(e)):!er(t._f.ref))&&eI(e)}y.unMount=new Set},_updateFieldArray:(e,t=[],r,i,a=!0,s=!0)=>{if(i&&r){if(v.action=!0,s&&Array.isArray(_(o,e))){let t=r(_(o,e),i.argA,i.argB);a&&w(o,e,t)}if(s&&Array.isArray(_(n.errors,e))){let t=r(_(n.errors,e),i.argA,i.argB);a&&w(n.errors,e,t),ef(n.errors,e)}if(S.touchedFields&&s&&Array.isArray(_(n.touchedFields,e))){let t=r(_(n.touchedFields,e),i.argA,i.argB);a&&w(n.touchedFields,e,t)}S.dirtyFields&&(n.dirtyFields=ea(c,d)),C.state.next({name:e,isDirty:em(e,t),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else w(d,e,t)},_updateDisabledField:eC,_getFieldArray:t=>m(_(v.mount?d:c,t,e.shouldUnregister?_(c,t,[]):[])),_reset:eR,_resetDefaultValues:()=>P(r.defaultValues)&&r.defaultValues().then(e=>{ex(e,r.resetOptions),C.state.next({isLoading:!1})}),_updateFormState:e=>{n={...n,...e}},_disableForm:e=>{b(e)&&(C.state.next({disabled:e}),L(o,(t,r)=>{let n=_(o,r);n&&(t.disabled=n._f.disabled||e,Array.isArray(n._f.refs)&&n._f.refs.forEach(t=>{t.disabled=n._f.disabled||e}))},0,!1))},_subjects:C,_proxyFormState:S,_setErrors:e=>{n.errors=e,C.state.next({errors:n.errors,isValid:!1})},get _fields(){return o},get _formValues(){return d},get _state(){return v},set _state(value){v=value},get _defaultValues(){return c},get _names(){return y},set _names(value){y=value},get _formState(){return n},set _formState(value){n=value},get _options(){return r},set _options(value){r={...r,...value}}},trigger:eE,register:eD,handleSubmit:eO,watch:(e,t)=>P(e)?C.values.subscribe({next:r=>e(eg(void 0,t),r)}):eg(e,t,!0),setValue:ev,getValues:eT,reset:ex,resetField:(e,t={})=>{_(o,e)&&(g(t.defaultValue)?ev(e,p(_(c,e))):(ev(e,t.defaultValue),w(c,e,p(t.defaultValue))),t.keepTouched||Z(n.touchedFields,e),t.keepDirty||(Z(n.dirtyFields,e),n.isDirty=t.defaultValue?em(e,p(_(c,e))):em()),!t.keepError&&(Z(n.errors,e),S.isValid&&$()),C.state.next({...n}))},clearErrors:e=>{e&&D(e).forEach(e=>Z(n.errors,e)),C.state.next({errors:e?n.errors:{}})},unregister:eI,setError:eS,setFocus:(e,t={})=>{let r=_(o,e),n=r&&r._f;if(n){let e=n.refs?n.refs[0]:n.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:eA}}(e),formState:o});let d=t.current.control;return d._options=e,!function(e){let t=n.useRef(e);t.current=e,n.useEffect(()=>{let r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}({subject:d._subjects.state,next:e=>{C(e,d._proxyFormState,d._updateFormState,!0)&&c({...d._formState})}}),n.useEffect(()=>d._disableForm(e.disabled),[d,e.disabled]),n.useEffect(()=>{if(d._proxyFormState.isDirty){let e=d._getDirty();e!==o.isDirty&&d._subjects.state.next({isDirty:e})}},[d,o.isDirty]),n.useEffect(()=>{e.values&&!Q(e.values,r.current)?(d._reset(e.values,d._options.resetOptions),r.current=e.values,c(e=>({...e}))):d._resetDefaultValues()},[e.values,d]),n.useEffect(()=>{e.errors&&d._setErrors(e.errors)},[e.errors,d]),n.useEffect(()=>{d._state.mount||(d._updateValid(),d._state.mount=!0),d._state.watch&&(d._state.watch=!1,d._subjects.state.next({...d._formState})),d._removeUnmounted()}),n.useEffect(()=>{e.shouldUnregister&&d._subjects.values.next({values:d._getWatch()})},[e.shouldUnregister,d]),t.current.formState=S(o,d),t.current}},750:function(e,t,r){"use strict";r.d(t,{ac:function(){return s}});var n=r(2265);r(2151);var i="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,a="undefined"==typeof window;function s(e,{defaultValue:t=!1,initializeWithValue:r=!0}={}){let s=e=>a?t:window.matchMedia(e).matches,[o,l]=(0,n.useState)(()=>r?s(e):t);function u(){l(s(e))}return i(()=>{let t=window.matchMedia(e);return u(),t.addListener?t.addListener(u):t.addEventListener("change",u),()=>{t.removeListener?t.removeListener(u):t.removeEventListener("change",u)}},[e]),o}}}]);