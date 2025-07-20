const rt = () => {}
;
/**
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
 */
const Ee = function(e) {
    const t = [];
    let n = 0;
    for (let r = 0; r < e.length; r++) {
        let a = e.charCodeAt(r);
        a < 128 ? t[n++] = a : a < 2048 ? (t[n++] = a >> 6 | 192,
        t[n++] = a & 63 | 128) : (a & 64512) === 55296 && r + 1 < e.length && (e.charCodeAt(r + 1) & 64512) === 56320 ? (a = 65536 + ((a & 1023) << 10) + (e.charCodeAt(++r) & 1023),
        t[n++] = a >> 18 | 240,
        t[n++] = a >> 12 & 63 | 128,
        t[n++] = a >> 6 & 63 | 128,
        t[n++] = a & 63 | 128) : (t[n++] = a >> 12 | 224,
        t[n++] = a >> 6 & 63 | 128,
        t[n++] = a & 63 | 128)
    }
    return t
}
  , at = function(e) {
    const t = [];
    let n = 0
      , r = 0;
    for (; n < e.length; ) {
        const a = e[n++];
        if (a < 128)
            t[r++] = String.fromCharCode(a);
        else if (a > 191 && a < 224) {
            const s = e[n++];
            t[r++] = String.fromCharCode((a & 31) << 6 | s & 63)
        } else if (a > 239 && a < 365) {
            const s = e[n++]
              , i = e[n++]
              , o = e[n++]
              , c = ((a & 7) << 18 | (s & 63) << 12 | (i & 63) << 6 | o & 63) - 65536;
            t[r++] = String.fromCharCode(55296 + (c >> 10)),
            t[r++] = String.fromCharCode(56320 + (c & 1023))
        } else {
            const s = e[n++]
              , i = e[n++];
            t[r++] = String.fromCharCode((a & 15) << 12 | (s & 63) << 6 | i & 63)
        }
    }
    return t.join("")
}
  , _e = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + "+/="
    },
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + "-_."
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(e, t) {
        if (!Array.isArray(e))
            throw Error("encodeByteArray takes an array as a parameter");
        this.init_();
        const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_
          , r = [];
        for (let a = 0; a < e.length; a += 3) {
            const s = e[a]
              , i = a + 1 < e.length
              , o = i ? e[a + 1] : 0
              , c = a + 2 < e.length
              , l = c ? e[a + 2] : 0
              , h = s >> 2
              , u = (s & 3) << 4 | o >> 4;
            let p = (o & 15) << 2 | l >> 6
              , R = l & 63;
            c || (R = 64,
            i || (p = 64)),
            r.push(n[h], n[u], n[p], n[R])
        }
        return r.join("")
    },
    encodeString(e, t) {
        return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(Ee(e), t)
    },
    decodeString(e, t) {
        return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : at(this.decodeStringToByteArray(e, t))
    },
    decodeStringToByteArray(e, t) {
        this.init_();
        const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_
          , r = [];
        for (let a = 0; a < e.length; ) {
            const s = n[e.charAt(a++)]
              , o = a < e.length ? n[e.charAt(a)] : 0;
            ++a;
            const l = a < e.length ? n[e.charAt(a)] : 64;
            ++a;
            const u = a < e.length ? n[e.charAt(a)] : 64;
            if (++a,
            s == null || o == null || l == null || u == null)
                throw new st;
            const p = s << 2 | o >> 4;
            if (r.push(p),
            l !== 64) {
                const R = o << 4 & 240 | l >> 2;
                if (r.push(R),
                u !== 64) {
                    const nt = l << 6 & 192 | u;
                    r.push(nt)
                }
            }
        }
        return r
    },
    init_() {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {},
            this.charToByteMap_ = {},
            this.byteToCharMapWebSafe_ = {},
            this.charToByteMapWebSafe_ = {};
            for (let e = 0; e < this.ENCODED_VALS.length; e++)
                this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e),
                this.charToByteMap_[this.byteToCharMap_[e]] = e,
                this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e),
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e,
                e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e,
                this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
        }
    }
};
class st extends Error {
    constructor() {
        super(...arguments),
        this.name = "DecodeBase64StringError"
    }
}
const it = function(e) {
    const t = Ee(e);
    return _e.encodeByteArray(t, !0)
}
  , Ae = function(e) {
    return it(e).replace(/\./g, "")
}
  , ot = function(e) {
    try {
        return _e.decodeString(e, !0)
    } catch (t) {
        console.error("base64Decode failed: ", t)
    }
    return null
};
/**
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
 */
function ct() {
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("Unable to locate global object.")
}
/**
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
 */
const lt = () => ct().__FIREBASE_DEFAULTS__
  , dt = () => {
    if (typeof process > "u" || typeof process.env > "u")
        return;
    const e = {}.__FIREBASE_DEFAULTS__;
    if (e)
        return JSON.parse(e)
}
  , ut = () => {
    if (typeof document > "u")
        return;
    let e;
    try {
        e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
    } catch {
        return
    }
    const t = e && ot(e[1]);
    return t && JSON.parse(t)
}
  , ft = () => {
    try {
        return rt() || lt() || dt() || ut()
    } catch (e) {
        console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
        return
    }
}
  , Se = () => {
    var e;
    return (e = ft()) == null ? void 0 : e.config
}
;
/**
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
 */
class ht {
    constructor() {
        this.reject = () => {}
        ,
        this.resolve = () => {}
        ,
        this.promise = new Promise( (t, n) => {
            this.resolve = t,
            this.reject = n
        }
        )
    }
    wrapCallback(t) {
        return (n, r) => {
            n ? this.reject(n) : this.resolve(r),
            typeof t == "function" && (this.promise.catch( () => {}
            ),
            t.length === 1 ? t(n) : t(n, r))
        }
    }
}
function pt() {
    const e = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
    return typeof e == "object" && e.id !== void 0
}
function Te() {
    try {
        return typeof indexedDB == "object"
    } catch {
        return !1
    }
}
function De() {
    return new Promise( (e, t) => {
        try {
            let n = !0;
            const r = "validate-browser-context-for-indexeddb-analytics-module"
              , a = self.indexedDB.open(r);
            a.onsuccess = () => {
                a.result.close(),
                n || self.indexedDB.deleteDatabase(r),
                e(!0)
            }
            ,
            a.onupgradeneeded = () => {
                n = !1
            }
            ,
            a.onerror = () => {
                var s;
                t(((s = a.error) == null ? void 0 : s.message) || "")
            }
        } catch (n) {
            t(n)
        }
    }
    )
}
function gt() {
    return !(typeof navigator > "u" || !navigator.cookieEnabled)
}
/**
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
 */
const mt = "FirebaseError";
class D extends Error {
    constructor(t, n, r) {
        super(n),
        this.code = t,
        this.customData = r,
        this.name = mt,
        Object.setPrototypeOf(this, D.prototype),
        Error.captureStackTrace && Error.captureStackTrace(this, P.prototype.create)
    }
}
class P {
    constructor(t, n, r) {
        this.service = t,
        this.serviceName = n,
        this.errors = r
    }
    create(t, ...n) {
        const r = n[0] || {}
          , a = `${this.service}/${t}`
          , s = this.errors[t]
          , i = s ? bt(s, r) : "Error"
          , o = `${this.serviceName}: ${i} (${a}).`;
        return new D(a,o,r)
    }
}
function bt(e, t) {
    return e.replace(yt, (n, r) => {
        const a = t[r];
        return a != null ? String(a) : `<${r}?>`
    }
    )
}
const yt = /\{\$([^}]+)}/g;
function B(e, t) {
    if (e === t)
        return !0;
    const n = Object.keys(e)
      , r = Object.keys(t);
    for (const a of n) {
        if (!r.includes(a))
            return !1;
        const s = e[a]
          , i = t[a];
        if (re(s) && re(i)) {
            if (!B(s, i))
                return !1
        } else if (s !== i)
            return !1
    }
    for (const a of r)
        if (!n.includes(a))
            return !1;
    return !0
}
function re(e) {
    return e !== null && typeof e == "object"
}
/**
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
 */
const It = 1e3
  , wt = 2
  , Et = 4 * 60 * 60 * 1e3
  , _t = .5;
function ae(e, t=It, n=wt) {
    const r = t * Math.pow(n, e)
      , a = Math.round(_t * r * (Math.random() - .5) * 2);
    return Math.min(Et, r + a)
}
/**
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
 */
function Ce(e) {
    return e && e._delegate ? e._delegate : e
}
class w {
    constructor(t, n, r) {
        this.name = t,
        this.instanceFactory = n,
        this.type = r,
        this.multipleInstances = !1,
        this.serviceProps = {},
        this.instantiationMode = "LAZY",
        this.onInstanceCreated = null
    }
    setInstantiationMode(t) {
        return this.instantiationMode = t,
        this
    }
    setMultipleInstances(t) {
        return this.multipleInstances = t,
        this
    }
    setServiceProps(t) {
        return this.serviceProps = t,
        this
    }
    setInstanceCreatedCallback(t) {
        return this.onInstanceCreated = t,
        this
    }
}
/**
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
 */
const E = "[DEFAULT]";
/**
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
 */
class At {
    constructor(t, n) {
        this.name = t,
        this.container = n,
        this.component = null,
        this.instances = new Map,
        this.instancesDeferred = new Map,
        this.instancesOptions = new Map,
        this.onInitCallbacks = new Map
    }
    get(t) {
        const n = this.normalizeInstanceIdentifier(t);
        if (!this.instancesDeferred.has(n)) {
            const r = new ht;
            if (this.instancesDeferred.set(n, r),
            this.isInitialized(n) || this.shouldAutoInitialize())
                try {
                    const a = this.getOrInitializeService({
                        instanceIdentifier: n
                    });
                    a && r.resolve(a)
                } catch {}
        }
        return this.instancesDeferred.get(n).promise
    }
    getImmediate(t) {
        const n = this.normalizeInstanceIdentifier(t == null ? void 0 : t.identifier)
          , r = (t == null ? void 0 : t.optional) ?? !1;
        if (this.isInitialized(n) || this.shouldAutoInitialize())
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: n
                })
            } catch (a) {
                if (r)
                    return null;
                throw a
            }
        else {
            if (r)
                return null;
            throw Error(`Service ${this.name} is not available`)
        }
    }
    getComponent() {
        return this.component
    }
    setComponent(t) {
        if (t.name !== this.name)
            throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
        if (this.component)
            throw Error(`Component for ${this.name} has already been provided`);
        if (this.component = t,
        !!this.shouldAutoInitialize()) {
            if (Tt(t))
                try {
                    this.getOrInitializeService({
                        instanceIdentifier: E
                    })
                } catch {}
            for (const [n,r] of this.instancesDeferred.entries()) {
                const a = this.normalizeInstanceIdentifier(n);
                try {
                    const s = this.getOrInitializeService({
                        instanceIdentifier: a
                    });
                    r.resolve(s)
                } catch {}
            }
        }
    }
    clearInstance(t=E) {
        this.instancesDeferred.delete(t),
        this.instancesOptions.delete(t),
        this.instances.delete(t)
    }
    async delete() {
        const t = Array.from(this.instances.values());
        await Promise.all([...t.filter(n => "INTERNAL"in n).map(n => n.INTERNAL.delete()), ...t.filter(n => "_delete"in n).map(n => n._delete())])
    }
    isComponentSet() {
        return this.component != null
    }
    isInitialized(t=E) {
        return this.instances.has(t)
    }
    getOptions(t=E) {
        return this.instancesOptions.get(t) || {}
    }
    initialize(t={}) {
        const {options: n={}} = t
          , r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
        if (this.isInitialized(r))
            throw Error(`${this.name}(${r}) has already been initialized`);
        if (!this.isComponentSet())
            throw Error(`Component ${this.name} has not been registered yet`);
        const a = this.getOrInitializeService({
            instanceIdentifier: r,
            options: n
        });
        for (const [s,i] of this.instancesDeferred.entries()) {
            const o = this.normalizeInstanceIdentifier(s);
            r === o && i.resolve(a)
        }
        return a
    }
    onInit(t, n) {
        const r = this.normalizeInstanceIdentifier(n)
          , a = this.onInitCallbacks.get(r) ?? new Set;
        a.add(t),
        this.onInitCallbacks.set(r, a);
        const s = this.instances.get(r);
        return s && t(s, r),
        () => {
            a.delete(t)
        }
    }
    invokeOnInitCallbacks(t, n) {
        const r = this.onInitCallbacks.get(n);
        if (r)
            for (const a of r)
                try {
                    a(t, n)
                } catch {}
    }
    getOrInitializeService({instanceIdentifier: t, options: n={}}) {
        let r = this.instances.get(t);
        if (!r && this.component && (r = this.component.instanceFactory(this.container, {
            instanceIdentifier: St(t),
            options: n
        }),
        this.instances.set(t, r),
        this.instancesOptions.set(t, n),
        this.invokeOnInitCallbacks(r, t),
        this.component.onInstanceCreated))
            try {
                this.component.onInstanceCreated(this.container, t, r)
            } catch {}
        return r || null
    }
    normalizeInstanceIdentifier(t=E) {
        return this.component ? this.component.multipleInstances ? t : E : t
    }
    shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT"
    }
}
function St(e) {
    return e === E ? void 0 : e
}
function Tt(e) {
    return e.instantiationMode === "EAGER"
}
/**
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
 */
class Dt {
    constructor(t) {
        this.name = t,
        this.providers = new Map
    }
    addComponent(t) {
        const n = this.getProvider(t.name);
        if (n.isComponentSet())
            throw new Error(`Component ${t.name} has already been registered with ${this.name}`);
        n.setComponent(t)
    }
    addOrOverwriteComponent(t) {
        this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
        this.addComponent(t)
    }
    getProvider(t) {
        if (this.providers.has(t))
            return this.providers.get(t);
        const n = new At(t,this);
        return this.providers.set(t, n),
        n
    }
    getProviders() {
        return Array.from(this.providers.values())
    }
}
/**
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
 */
var d;
(function(e) {
    e[e.DEBUG = 0] = "DEBUG",
    e[e.VERBOSE = 1] = "VERBOSE",
    e[e.INFO = 2] = "INFO",
    e[e.WARN = 3] = "WARN",
    e[e.ERROR = 4] = "ERROR",
    e[e.SILENT = 5] = "SILENT"
}
)(d || (d = {}));
const Ct = {
    debug: d.DEBUG,
    verbose: d.VERBOSE,
    info: d.INFO,
    warn: d.WARN,
    error: d.ERROR,
    silent: d.SILENT
}
  , vt = d.INFO
  , Rt = {
    [d.DEBUG]: "log",
    [d.VERBOSE]: "log",
    [d.INFO]: "info",
    [d.WARN]: "warn",
    [d.ERROR]: "error"
}
  , Bt = (e, t, ...n) => {
    if (t < e.logLevel)
        return;
    const r = new Date().toISOString()
      , a = Rt[t];
    if (a)
        console[a](`[${r}]  ${e.name}:`, ...n);
    else
        throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)
}
;
class ve {
    constructor(t) {
        this.name = t,
        this._logLevel = vt,
        this._logHandler = Bt,
        this._userLogHandler = null
    }
    get logLevel() {
        return this._logLevel
    }
    set logLevel(t) {
        if (!(t in d))
            throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
        this._logLevel = t
    }
    setLogLevel(t) {
        this._logLevel = typeof t == "string" ? Ct[t] : t
    }
    get logHandler() {
        return this._logHandler
    }
    set logHandler(t) {
        if (typeof t != "function")
            throw new TypeError("Value assigned to `logHandler` must be a function");
        this._logHandler = t
    }
    get userLogHandler() {
        return this._userLogHandler
    }
    set userLogHandler(t) {
        this._userLogHandler = t
    }
    debug(...t) {
        this._userLogHandler && this._userLogHandler(this, d.DEBUG, ...t),
        this._logHandler(this, d.DEBUG, ...t)
    }
    log(...t) {
        this._userLogHandler && this._userLogHandler(this, d.VERBOSE, ...t),
        this._logHandler(this, d.VERBOSE, ...t)
    }
    info(...t) {
        this._userLogHandler && this._userLogHandler(this, d.INFO, ...t),
        this._logHandler(this, d.INFO, ...t)
    }
    warn(...t) {
        this._userLogHandler && this._userLogHandler(this, d.WARN, ...t),
        this._logHandler(this, d.WARN, ...t)
    }
    error(...t) {
        this._userLogHandler && this._userLogHandler(this, d.ERROR, ...t),
        this._logHandler(this, d.ERROR, ...t)
    }
}
const Mt = (e, t) => t.some(n => e instanceof n);
let se, ie;
function Ot() {
    return se || (se = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
}
function $t() {
    return ie || (ie = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
}
const Re = new WeakMap
  , W = new WeakMap
  , Be = new WeakMap
  , L = new WeakMap
  , X = new WeakMap;
function Pt(e) {
    const t = new Promise( (n, r) => {
        const a = () => {
            e.removeEventListener("success", s),
            e.removeEventListener("error", i)
        }
          , s = () => {
            n(b(e.result)),
            a()
        }
          , i = () => {
            r(e.error),
            a()
        }
        ;
        e.addEventListener("success", s),
        e.addEventListener("error", i)
    }
    );
    return t.then(n => {
        n instanceof IDBCursor && Re.set(n, e)
    }
    ).catch( () => {}
    ),
    X.set(t, e),
    t
}
function Nt(e) {
    if (W.has(e))
        return;
    const t = new Promise( (n, r) => {
        const a = () => {
            e.removeEventListener("complete", s),
            e.removeEventListener("error", i),
            e.removeEventListener("abort", i)
        }
          , s = () => {
            n(),
            a()
        }
          , i = () => {
            r(e.error || new DOMException("AbortError","AbortError")),
            a()
        }
        ;
        e.addEventListener("complete", s),
        e.addEventListener("error", i),
        e.addEventListener("abort", i)
    }
    );
    W.set(e, t)
}
let q = {
    get(e, t, n) {
        if (e instanceof IDBTransaction) {
            if (t === "done")
                return W.get(e);
            if (t === "objectStoreNames")
                return e.objectStoreNames || Be.get(e);
            if (t === "store")
                return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
        }
        return b(e[t])
    },
    set(e, t, n) {
        return e[t] = n,
        !0
    },
    has(e, t) {
        return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e
    }
};
function kt(e) {
    q = e(q)
}
function Ft(e) {
    return e === IDBDatabase.prototype.transaction && !("objectStoreNames"in IDBTransaction.prototype) ? function(t, ...n) {
        const r = e.call(x(this), t, ...n);
        return Be.set(r, t.sort ? t.sort() : [t]),
        b(r)
    }
    : $t().includes(e) ? function(...t) {
        return e.apply(x(this), t),
        b(Re.get(this))
    }
    : function(...t) {
        return b(e.apply(x(this), t))
    }
}
function Lt(e) {
    return typeof e == "function" ? Ft(e) : (e instanceof IDBTransaction && Nt(e),
    Mt(e, Ot()) ? new Proxy(e,q) : e)
}
function b(e) {
    if (e instanceof IDBRequest)
        return Pt(e);
    if (L.has(e))
        return L.get(e);
    const t = Lt(e);
    return t !== e && (L.set(e, t),
    X.set(t, e)),
    t
}
const x = e => X.get(e);
function Me(e, t, {blocked: n, upgrade: r, blocking: a, terminated: s}={}) {
    const i = indexedDB.open(e, t)
      , o = b(i);
    return r && i.addEventListener("upgradeneeded", c => {
        r(b(i.result), c.oldVersion, c.newVersion, b(i.transaction), c)
    }
    ),
    n && i.addEventListener("blocked", c => n(c.oldVersion, c.newVersion, c)),
    o.then(c => {
        s && c.addEventListener("close", () => s()),
        a && c.addEventListener("versionchange", l => a(l.oldVersion, l.newVersion, l))
    }
    ).catch( () => {}
    ),
    o
}
const xt = ["get", "getKey", "getAll", "getAllKeys", "count"]
  , Ht = ["put", "add", "delete", "clear"]
  , H = new Map;
function oe(e, t) {
    if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string"))
        return;
    if (H.get(t))
        return H.get(t);
    const n = t.replace(/FromIndex$/, "")
      , r = t !== n
      , a = Ht.includes(n);
    if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(a || xt.includes(n)))
        return;
    const s = async function(i, ...o) {
        const c = this.transaction(i, a ? "readwrite" : "readonly");
        let l = c.store;
        return r && (l = l.index(o.shift())),
        (await Promise.all([l[n](...o), a && c.done]))[0]
    };
    return H.set(t, s),
    s
}
kt(e => ({
    ...e,
    get: (t, n, r) => oe(t, n) || e.get(t, n, r),
    has: (t, n) => !!oe(t, n) || e.has(t, n)
}));
/**
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
 */
class Vt {
    constructor(t) {
        this.container = t
    }
    getPlatformInfoString() {
        return this.container.getProviders().map(n => {
            if (jt(n)) {
                const r = n.getImmediate();
                return `${r.library}/${r.version}`
            } else
                return null
        }
        ).filter(n => n).join(" ")
    }
}
function jt(e) {
    const t = e.getComponent();
    return (t == null ? void 0 : t.type) === "VERSION"
}
const G = "@firebase/app"
  , ce = "0.14.0";
/**
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
 */
const m = new ve("@firebase/app")
  , Ut = "@firebase/app-compat"
  , zt = "@firebase/analytics-compat"
  , Wt = "@firebase/analytics"
  , qt = "@firebase/app-check-compat"
  , Gt = "@firebase/app-check"
  , Kt = "@firebase/auth"
  , Yt = "@firebase/auth-compat"
  , Jt = "@firebase/database"
  , Xt = "@firebase/data-connect"
  , Zt = "@firebase/database-compat"
  , Qt = "@firebase/functions"
  , en = "@firebase/functions-compat"
  , tn = "@firebase/installations"
  , nn = "@firebase/installations-compat"
  , rn = "@firebase/messaging"
  , an = "@firebase/messaging-compat"
  , sn = "@firebase/performance"
  , on = "@firebase/performance-compat"
  , cn = "@firebase/remote-config"
  , ln = "@firebase/remote-config-compat"
  , dn = "@firebase/storage"
  , un = "@firebase/storage-compat"
  , fn = "@firebase/firestore"
  , hn = "@firebase/ai"
  , pn = "@firebase/firestore-compat"
  , gn = "firebase";
/**
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
 */
const K = "[DEFAULT]"
  , mn = {
    [G]: "fire-core",
    [Ut]: "fire-core-compat",
    [Wt]: "fire-analytics",
    [zt]: "fire-analytics-compat",
    [Gt]: "fire-app-check",
    [qt]: "fire-app-check-compat",
    [Kt]: "fire-auth",
    [Yt]: "fire-auth-compat",
    [Jt]: "fire-rtdb",
    [Xt]: "fire-data-connect",
    [Zt]: "fire-rtdb-compat",
    [Qt]: "fire-fn",
    [en]: "fire-fn-compat",
    [tn]: "fire-iid",
    [nn]: "fire-iid-compat",
    [rn]: "fire-fcm",
    [an]: "fire-fcm-compat",
    [sn]: "fire-perf",
    [on]: "fire-perf-compat",
    [cn]: "fire-rc",
    [ln]: "fire-rc-compat",
    [dn]: "fire-gcs",
    [un]: "fire-gcs-compat",
    [fn]: "fire-fst",
    [pn]: "fire-fst-compat",
    [hn]: "fire-vertex",
    "fire-js": "fire-js",
    [gn]: "fire-js-all"
};
/**
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
 */
const M = new Map
  , bn = new Map
  , Y = new Map;
function le(e, t) {
    try {
        e.container.addComponent(t)
    } catch (n) {
        m.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n)
    }
}
function A(e) {
    const t = e.name;
    if (Y.has(t))
        return m.debug(`There were multiple attempts to register component ${t}.`),
        !1;
    Y.set(t, e);
    for (const n of M.values())
        le(n, e);
    for (const n of bn.values())
        le(n, e);
    return !0
}
function N(e, t) {
    const n = e.container.getProvider("heartbeat").getImmediate({
        optional: !0
    });
    return n && n.triggerHeartbeat(),
    e.container.getProvider(t)
}
/**
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
 */
const yn = {
    "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options": "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument": "First argument to `onLog` must be null or a function.",
    "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
}
  , y = new P("app","Firebase",yn);
/**
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
 */
class In {
    constructor(t, n, r) {
        this._isDeleted = !1,
        this._options = {
            ...t
        },
        this._config = {
            ...n
        },
        this._name = n.name,
        this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled,
        this._container = r,
        this.container.addComponent(new w("app", () => this,"PUBLIC"))
    }
    get automaticDataCollectionEnabled() {
        return this.checkDestroyed(),
        this._automaticDataCollectionEnabled
    }
    set automaticDataCollectionEnabled(t) {
        this.checkDestroyed(),
        this._automaticDataCollectionEnabled = t
    }
    get name() {
        return this.checkDestroyed(),
        this._name
    }
    get options() {
        return this.checkDestroyed(),
        this._options
    }
    get config() {
        return this.checkDestroyed(),
        this._config
    }
    get container() {
        return this._container
    }
    get isDeleted() {
        return this._isDeleted
    }
    set isDeleted(t) {
        this._isDeleted = t
    }
    checkDestroyed() {
        if (this.isDeleted)
            throw y.create("app-deleted", {
                appName: this._name
            })
    }
}
function wn(e, t={}) {
    let n = e;
    typeof t != "object" && (t = {
        name: t
    });
    const r = {
        name: K,
        automaticDataCollectionEnabled: !0,
        ...t
    }
      , a = r.name;
    if (typeof a != "string" || !a)
        throw y.create("bad-app-name", {
            appName: String(a)
        });
    if (n || (n = Se()),
    !n)
        throw y.create("no-options");
    const s = M.get(a);
    if (s) {
        if (B(n, s.options) && B(r, s.config))
            return s;
        throw y.create("duplicate-app", {
            appName: a
        })
    }
    const i = new Dt(a);
    for (const c of Y.values())
        i.addComponent(c);
    const o = new In(n,r,i);
    return M.set(a, o),
    o
}
function En(e=K) {
    const t = M.get(e);
    if (!t && e === K && Se())
        return wn();
    if (!t)
        throw y.create("no-app", {
            appName: e
        });
    return t
}
function I(e, t, n) {
    let r = mn[e] ?? e;
    n && (r += `-${n}`);
    const a = r.match(/\s|\//)
      , s = t.match(/\s|\//);
    if (a || s) {
        const i = [`Unable to register library "${r}" with version "${t}":`];
        a && i.push(`library name "${r}" contains illegal characters (whitespace or "/")`),
        a && s && i.push("and"),
        s && i.push(`version name "${t}" contains illegal characters (whitespace or "/")`),
        m.warn(i.join(" "));
        return
    }
    A(new w(`${r}-version`, () => ({
        library: r,
        version: t
    }),"VERSION"))
}
/**
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
 */
const _n = "firebase-heartbeat-database"
  , An = 1
  , v = "firebase-heartbeat-store";
let V = null;
function Oe() {
    return V || (V = Me(_n, An, {
        upgrade: (e, t) => {
            switch (t) {
            case 0:
                try {
                    e.createObjectStore(v)
                } catch (n) {
                    console.warn(n)
                }
            }
        }
    }).catch(e => {
        throw y.create("idb-open", {
            originalErrorMessage: e.message
        })
    }
    )),
    V
}
async function Sn(e) {
    try {
        const n = (await Oe()).transaction(v)
          , r = await n.objectStore(v).get($e(e));
        return await n.done,
        r
    } catch (t) {
        if (t instanceof D)
            m.warn(t.message);
        else {
            const n = y.create("idb-get", {
                originalErrorMessage: t == null ? void 0 : t.message
            });
            m.warn(n.message)
        }
    }
}
async function de(e, t) {
    try {
        const r = (await Oe()).transaction(v, "readwrite");
        await r.objectStore(v).put(t, $e(e)),
        await r.done
    } catch (n) {
        if (n instanceof D)
            m.warn(n.message);
        else {
            const r = y.create("idb-set", {
                originalErrorMessage: n == null ? void 0 : n.message
            });
            m.warn(r.message)
        }
    }
}
function $e(e) {
    return `${e.name}!${e.options.appId}`
}
/**
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
 */
const Tn = 1024
  , Dn = 30;
class Cn {
    constructor(t) {
        this.container = t,
        this._heartbeatsCache = null;
        const n = this.container.getProvider("app").getImmediate();
        this._storage = new Rn(n),
        this._heartbeatsCachePromise = this._storage.read().then(r => (this._heartbeatsCache = r,
        r))
    }
    async triggerHeartbeat() {
        var t, n;
        try {
            const a = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString()
              , s = ue();
            if (((t = this._heartbeatsCache) == null ? void 0 : t.heartbeats) == null && (this._heartbeatsCache = await this._heartbeatsCachePromise,
            ((n = this._heartbeatsCache) == null ? void 0 : n.heartbeats) == null) || this._heartbeatsCache.lastSentHeartbeatDate === s || this._heartbeatsCache.heartbeats.some(i => i.date === s))
                return;
            if (this._heartbeatsCache.heartbeats.push({
                date: s,
                agent: a
            }),
            this._heartbeatsCache.heartbeats.length > Dn) {
                const i = Bn(this._heartbeatsCache.heartbeats);
                this._heartbeatsCache.heartbeats.splice(i, 1)
            }
            return this._storage.overwrite(this._heartbeatsCache)
        } catch (r) {
            m.warn(r)
        }
    }
    async getHeartbeatsHeader() {
        var t;
        try {
            if (this._heartbeatsCache === null && await this._heartbeatsCachePromise,
            ((t = this._heartbeatsCache) == null ? void 0 : t.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0)
                return "";
            const n = ue()
              , {heartbeatsToSend: r, unsentEntries: a} = vn(this._heartbeatsCache.heartbeats)
              , s = Ae(JSON.stringify({
                version: 2,
                heartbeats: r
            }));
            return this._heartbeatsCache.lastSentHeartbeatDate = n,
            a.length > 0 ? (this._heartbeatsCache.heartbeats = a,
            await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [],
            this._storage.overwrite(this._heartbeatsCache)),
            s
        } catch (n) {
            return m.warn(n),
            ""
        }
    }
}
function ue() {
    return new Date().toISOString().substring(0, 10)
}
function vn(e, t=Tn) {
    const n = [];
    let r = e.slice();
    for (const a of e) {
        const s = n.find(i => i.agent === a.agent);
        if (s) {
            if (s.dates.push(a.date),
            fe(n) > t) {
                s.dates.pop();
                break
            }
        } else if (n.push({
            agent: a.agent,
            dates: [a.date]
        }),
        fe(n) > t) {
            n.pop();
            break
        }
        r = r.slice(1)
    }
    return {
        heartbeatsToSend: n,
        unsentEntries: r
    }
}
class Rn {
    constructor(t) {
        this.app = t,
        this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
    }
    async runIndexedDBEnvironmentCheck() {
        return Te() ? De().then( () => !0).catch( () => !1) : !1
    }
    async read() {
        if (await this._canUseIndexedDBPromise) {
            const n = await Sn(this.app);
            return n != null && n.heartbeats ? n : {
                heartbeats: []
            }
        } else
            return {
                heartbeats: []
            }
    }
    async overwrite(t) {
        if (await this._canUseIndexedDBPromise) {
            const r = await this.read();
            return de(this.app, {
                lastSentHeartbeatDate: t.lastSentHeartbeatDate ?? r.lastSentHeartbeatDate,
                heartbeats: t.heartbeats
            })
        } else
            return
    }
    async add(t) {
        if (await this._canUseIndexedDBPromise) {
            const r = await this.read();
            return de(this.app, {
                lastSentHeartbeatDate: t.lastSentHeartbeatDate ?? r.lastSentHeartbeatDate,
                heartbeats: [...r.heartbeats, ...t.heartbeats]
            })
        } else
            return
    }
}
function fe(e) {
    return Ae(JSON.stringify({
        version: 2,
        heartbeats: e
    })).length
}
function Bn(e) {
    if (e.length === 0)
        return -1;
    let t = 0
      , n = e[0].date;
    for (let r = 1; r < e.length; r++)
        e[r].date < n && (n = e[r].date,
        t = r);
    return t
}
/**
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
 */
function Mn(e) {
    A(new w("platform-logger",t => new Vt(t),"PRIVATE")),
    A(new w("heartbeat",t => new Cn(t),"PRIVATE")),
    I(G, ce, e),
    I(G, ce, "esm2020"),
    I("fire-js", "")
}
Mn("");
var On = "firebase"
  , $n = "12.0.0";
/**
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
 */
I(On, $n, "app");
const Pe = "@firebase/installations"
  , Z = "0.6.19";
/**
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
 */
const Ne = 1e4
  , ke = `w:${Z}`
  , Fe = "FIS_v2"
  , Pn = "https://firebaseinstallations.googleapis.com/v1"
  , Nn = 60 * 60 * 1e3
  , kn = "installations"
  , Fn = "Installations";
/**
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
 */
const Ln = {
    "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
    "not-registered": "Firebase Installation is not registered.",
    "installation-not-found": "Firebase Installation not found.",
    "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
    "app-offline": "Could not process request. Application offline.",
    "delete-pending-registration": "Can't delete installation while there is a pending registration request."
}
  , S = new P(kn,Fn,Ln);
function Le(e) {
    return e instanceof D && e.code.includes("request-failed")
}
/**
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
 */
function xe({projectId: e}) {
    return `${Pn}/projects/${e}/installations`
}
function He(e) {
    return {
        token: e.token,
        requestStatus: 2,
        expiresIn: Hn(e.expiresIn),
        creationTime: Date.now()
    }
}
async function Ve(e, t) {
    const r = (await t.json()).error;
    return S.create("request-failed", {
        requestName: e,
        serverCode: r.code,
        serverMessage: r.message,
        serverStatus: r.status
    })
}
function je({apiKey: e}) {
    return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": e
    })
}
function xn(e, {refreshToken: t}) {
    const n = je(e);
    return n.append("Authorization", Vn(t)),
    n
}
async function Ue(e) {
    const t = await e();
    return t.status >= 500 && t.status < 600 ? e() : t
}
function Hn(e) {
    return Number(e.replace("s", "000"))
}
function Vn(e) {
    return `${Fe} ${e}`
}
/**
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
 */
async function jn({appConfig: e, heartbeatServiceProvider: t}, {fid: n}) {
    const r = xe(e)
      , a = je(e)
      , s = t.getImmediate({
        optional: !0
    });
    if (s) {
        const l = await s.getHeartbeatsHeader();
        l && a.append("x-firebase-client", l)
    }
    const i = {
        fid: n,
        authVersion: Fe,
        appId: e.appId,
        sdkVersion: ke
    }
      , o = {
        method: "POST",
        headers: a,
        body: JSON.stringify(i)
    }
      , c = await Ue( () => fetch(r, o));
    if (c.ok) {
        const l = await c.json();
        return {
            fid: l.fid || n,
            registrationStatus: 2,
            refreshToken: l.refreshToken,
            authToken: He(l.authToken)
        }
    } else
        throw await Ve("Create Installation", c)
}
/**
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
 */
function ze(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
/**
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
 */
function Un(e) {
    return btoa(String.fromCharCode(...e)).replace(/\+/g, "-").replace(/\//g, "_")
}
/**
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
 */
const zn = /^[cdef][\w-]{21}$/
  , J = "";
function Wn() {
    try {
        const e = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(e),
        e[0] = 112 + e[0] % 16;
        const n = qn(e);
        return zn.test(n) ? n : J
    } catch {
        return J
    }
}
function qn(e) {
    return Un(e).substr(0, 22)
}
/**
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
 */
function k(e) {
    return `${e.appName}!${e.appId}`
}
/**
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
 */
const We = new Map;
function qe(e, t) {
    const n = k(e);
    Ge(n, t),
    Gn(n, t)
}
function Ge(e, t) {
    const n = We.get(e);
    if (n)
        for (const r of n)
            r(t)
}
function Gn(e, t) {
    const n = Kn();
    n && n.postMessage({
        key: e,
        fid: t
    }),
    Yn()
}
let _ = null;
function Kn() {
    return !_ && "BroadcastChannel"in self && (_ = new BroadcastChannel("[Firebase] FID Change"),
    _.onmessage = e => {
        Ge(e.data.key, e.data.fid)
    }
    ),
    _
}
function Yn() {
    We.size === 0 && _ && (_.close(),
    _ = null)
}
/**
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
 */
const Jn = "firebase-installations-database"
  , Xn = 1
  , T = "firebase-installations-store";
let j = null;
function Q() {
    return j || (j = Me(Jn, Xn, {
        upgrade: (e, t) => {
            switch (t) {
            case 0:
                e.createObjectStore(T)
            }
        }
    })),
    j
}
async function O(e, t) {
    const n = k(e)
      , a = (await Q()).transaction(T, "readwrite")
      , s = a.objectStore(T)
      , i = await s.get(n);
    return await s.put(t, n),
    await a.done,
    (!i || i.fid !== t.fid) && qe(e, t.fid),
    t
}
async function Ke(e) {
    const t = k(e)
      , r = (await Q()).transaction(T, "readwrite");
    await r.objectStore(T).delete(t),
    await r.done
}
async function F(e, t) {
    const n = k(e)
      , a = (await Q()).transaction(T, "readwrite")
      , s = a.objectStore(T)
      , i = await s.get(n)
      , o = t(i);
    return o === void 0 ? await s.delete(n) : await s.put(o, n),
    await a.done,
    o && (!i || i.fid !== o.fid) && qe(e, o.fid),
    o
}
/**
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
 */
async function ee(e) {
    let t;
    const n = await F(e.appConfig, r => {
        const a = Zn(r)
          , s = Qn(e, a);
        return t = s.registrationPromise,
        s.installationEntry
    }
    );
    return n.fid === J ? {
        installationEntry: await t
    } : {
        installationEntry: n,
        registrationPromise: t
    }
}
function Zn(e) {
    const t = e || {
        fid: Wn(),
        registrationStatus: 0
    };
    return Ye(t)
}
function Qn(e, t) {
    if (t.registrationStatus === 0) {
        if (!navigator.onLine) {
            const a = Promise.reject(S.create("app-offline"));
            return {
                installationEntry: t,
                registrationPromise: a
            }
        }
        const n = {
            fid: t.fid,
            registrationStatus: 1,
            registrationTime: Date.now()
        }
          , r = er(e, n);
        return {
            installationEntry: n,
            registrationPromise: r
        }
    } else
        return t.registrationStatus === 1 ? {
            installationEntry: t,
            registrationPromise: tr(e)
        } : {
            installationEntry: t
        }
}
async function er(e, t) {
    try {
        const n = await jn(e, t);
        return O(e.appConfig, n)
    } catch (n) {
        throw Le(n) && n.customData.serverCode === 409 ? await Ke(e.appConfig) : await O(e.appConfig, {
            fid: t.fid,
            registrationStatus: 0
        }),
        n
    }
}
async function tr(e) {
    let t = await he(e.appConfig);
    for (; t.registrationStatus === 1; )
        await ze(100),
        t = await he(e.appConfig);
    if (t.registrationStatus === 0) {
        const {installationEntry: n, registrationPromise: r} = await ee(e);
        return r || n
    }
    return t
}
function he(e) {
    return F(e, t => {
        if (!t)
            throw S.create("installation-not-found");
        return Ye(t)
    }
    )
}
function Ye(e) {
    return nr(e) ? {
        fid: e.fid,
        registrationStatus: 0
    } : e
}
function nr(e) {
    return e.registrationStatus === 1 && e.registrationTime + Ne < Date.now()
}
/**
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
 */
async function rr({appConfig: e, heartbeatServiceProvider: t}, n) {
    const r = ar(e, n)
      , a = xn(e, n)
      , s = t.getImmediate({
        optional: !0
    });
    if (s) {
        const l = await s.getHeartbeatsHeader();
        l && a.append("x-firebase-client", l)
    }
    const i = {
        installation: {
            sdkVersion: ke,
            appId: e.appId
        }
    }
      , o = {
        method: "POST",
        headers: a,
        body: JSON.stringify(i)
    }
      , c = await Ue( () => fetch(r, o));
    if (c.ok) {
        const l = await c.json();
        return He(l)
    } else
        throw await Ve("Generate Auth Token", c)
}
function ar(e, {fid: t}) {
    return `${xe(e)}/${t}/authTokens:generate`
}
/**
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
 */
async function te(e, t=!1) {
    let n;
    const r = await F(e.appConfig, s => {
        if (!Je(s))
            throw S.create("not-registered");
        const i = s.authToken;
        if (!t && or(i))
            return s;
        if (i.requestStatus === 1)
            return n = sr(e, t),
            s;
        {
            if (!navigator.onLine)
                throw S.create("app-offline");
            const o = lr(s);
            return n = ir(e, o),
            o
        }
    }
    );
    return n ? await n : r.authToken
}
async function sr(e, t) {
    let n = await pe(e.appConfig);
    for (; n.authToken.requestStatus === 1; )
        await ze(100),
        n = await pe(e.appConfig);
    const r = n.authToken;
    return r.requestStatus === 0 ? te(e, t) : r
}
function pe(e) {
    return F(e, t => {
        if (!Je(t))
            throw S.create("not-registered");
        const n = t.authToken;
        return dr(n) ? {
            ...t,
            authToken: {
                requestStatus: 0
            }
        } : t
    }
    )
}
async function ir(e, t) {
    try {
        const n = await rr(e, t)
          , r = {
            ...t,
            authToken: n
        };
        return await O(e.appConfig, r),
        n
    } catch (n) {
        if (Le(n) && (n.customData.serverCode === 401 || n.customData.serverCode === 404))
            await Ke(e.appConfig);
        else {
            const r = {
                ...t,
                authToken: {
                    requestStatus: 0
                }
            };
            await O(e.appConfig, r)
        }
        throw n
    }
}
function Je(e) {
    return e !== void 0 && e.registrationStatus === 2
}
function or(e) {
    return e.requestStatus === 2 && !cr(e)
}
function cr(e) {
    const t = Date.now();
    return t < e.creationTime || e.creationTime + e.expiresIn < t + Nn
}
function lr(e) {
    const t = {
        requestStatus: 1,
        requestTime: Date.now()
    };
    return {
        ...e,
        authToken: t
    }
}
function dr(e) {
    return e.requestStatus === 1 && e.requestTime + Ne < Date.now()
}
/**
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
 */
async function ur(e) {
    const t = e
      , {installationEntry: n, registrationPromise: r} = await ee(t);
    return r ? r.catch(console.error) : te(t).catch(console.error),
    n.fid
}
/**
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
 */
async function fr(e, t=!1) {
    const n = e;
    return await hr(n),
    (await te(n, t)).token
}
async function hr(e) {
    const {registrationPromise: t} = await ee(e);
    t && await t
}
/**
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
 */
function pr(e) {
    if (!e || !e.options)
        throw U("App Configuration");
    if (!e.name)
        throw U("App Name");
    const t = ["projectId", "apiKey", "appId"];
    for (const n of t)
        if (!e.options[n])
            throw U(n);
    return {
        appName: e.name,
        projectId: e.options.projectId,
        apiKey: e.options.apiKey,
        appId: e.options.appId
    }
}
function U(e) {
    return S.create("missing-app-config-values", {
        valueName: e
    })
}
/**
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
 */
const Xe = "installations"
  , gr = "installations-internal"
  , mr = e => {
    const t = e.getProvider("app").getImmediate()
      , n = pr(t)
      , r = N(t, "heartbeat");
    return {
        app: t,
        appConfig: n,
        heartbeatServiceProvider: r,
        _delete: () => Promise.resolve()
    }
}
  , br = e => {
    const t = e.getProvider("app").getImmediate()
      , n = N(t, Xe).getImmediate();
    return {
        getId: () => ur(n),
        getToken: a => fr(n, a)
    }
}
;
function yr() {
    A(new w(Xe,mr,"PUBLIC")),
    A(new w(gr,br,"PRIVATE"))
}
yr();
I(Pe, Z);
I(Pe, Z, "esm2020");
/**
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
 */
const $ = "analytics"
  , Ir = "firebase_id"
  , wr = "origin"
  , Er = 60 * 1e3
  , _r = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig"
  , ne = "https://www.googletagmanager.com/gtag/js";
/**
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
 */
const f = new ve("@firebase/analytics");
/**
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
 */
const Ar = {
    "already-exists": "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
    "already-initialized": "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.",
    "already-initialized-settings": "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
    "interop-component-reg-failed": "Firebase Analytics Interop Component failed to instantiate: {$reason}",
    "invalid-analytics-context": "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
    "indexeddb-unavailable": "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
    "fetch-throttle": "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
    "config-fetch-failed": "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
    "no-api-key": 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
    "no-app-id": 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
    "no-client-id": 'The "client_id" field is empty.',
    "invalid-gtag-resource": "Trusted Types detected an invalid gtag resource: {$gtagURL}."
}
  , g = new P("analytics","Analytics",Ar);
/**
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
 */
function Sr(e) {
    if (!e.startsWith(ne)) {
        const t = g.create("invalid-gtag-resource", {
            gtagURL: e
        });
        return f.warn(t.message),
        ""
    }
    return e
}
function Ze(e) {
    return Promise.all(e.map(t => t.catch(n => n)))
}
function Tr(e, t) {
    let n;
    return window.trustedTypes && (n = window.trustedTypes.createPolicy(e, t)),
    n
}
function Dr(e, t) {
    const n = Tr("firebase-js-sdk-policy", {
        createScriptURL: Sr
    })
      , r = document.createElement("script")
      , a = `${ne}?l=${e}&id=${t}`;
    r.src = n ? n == null ? void 0 : n.createScriptURL(a) : a,
    r.async = !0,
    document.head.appendChild(r)
}
function Cr(e) {
    let t = [];
    return Array.isArray(window[e]) ? t = window[e] : window[e] = t,
    t
}
async function vr(e, t, n, r, a, s) {
    const i = r[a];
    try {
        if (i)
            await t[i];
        else {
            const c = (await Ze(n)).find(l => l.measurementId === a);
            c && await t[c.appId]
        }
    } catch (o) {
        f.error(o)
    }
    e("config", a, s)
}
async function Rr(e, t, n, r, a) {
    try {
        let s = [];
        if (a && a.send_to) {
            let i = a.send_to;
            Array.isArray(i) || (i = [i]);
            const o = await Ze(n);
            for (const c of i) {
                const l = o.find(u => u.measurementId === c)
                  , h = l && t[l.appId];
                if (h)
                    s.push(h);
                else {
                    s = [];
                    break
                }
            }
        }
        s.length === 0 && (s = Object.values(t)),
        await Promise.all(s),
        e("event", r, a || {})
    } catch (s) {
        f.error(s)
    }
}
function Br(e, t, n, r) {
    async function a(s, ...i) {
        try {
            if (s === "event") {
                const [o,c] = i;
                await Rr(e, t, n, o, c)
            } else if (s === "config") {
                const [o,c] = i;
                await vr(e, t, n, r, o, c)
            } else if (s === "consent") {
                const [o,c] = i;
                e("consent", o, c)
            } else if (s === "get") {
                const [o,c,l] = i;
                e("get", o, c, l)
            } else if (s === "set") {
                const [o] = i;
                e("set", o)
            } else
                e(s, ...i)
        } catch (o) {
            f.error(o)
        }
    }
    return a
}
function Mr(e, t, n, r, a) {
    let s = function(...i) {
        window[r].push(arguments)
    };
    return window[a] && typeof window[a] == "function" && (s = window[a]),
    window[a] = Br(s, e, t, n),
    {
        gtagCore: s,
        wrappedGtag: window[a]
    }
}
function Or(e) {
    const t = window.document.getElementsByTagName("script");
    for (const n of Object.values(t))
        if (n.src && n.src.includes(ne) && n.src.includes(e))
            return n;
    return null
}
/**
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
 */
const $r = 30
  , Pr = 1e3;
class Nr {
    constructor(t={}, n=Pr) {
        this.throttleMetadata = t,
        this.intervalMillis = n
    }
    getThrottleMetadata(t) {
        return this.throttleMetadata[t]
    }
    setThrottleMetadata(t, n) {
        this.throttleMetadata[t] = n
    }
    deleteThrottleMetadata(t) {
        delete this.throttleMetadata[t]
    }
}
const Qe = new Nr;
function kr(e) {
    return new Headers({
        Accept: "application/json",
        "x-goog-api-key": e
    })
}
async function Fr(e) {
    var i;
    const {appId: t, apiKey: n} = e
      , r = {
        method: "GET",
        headers: kr(n)
    }
      , a = _r.replace("{app-id}", t)
      , s = await fetch(a, r);
    if (s.status !== 200 && s.status !== 304) {
        let o = "";
        try {
            const c = await s.json();
            (i = c.error) != null && i.message && (o = c.error.message)
        } catch {}
        throw g.create("config-fetch-failed", {
            httpStatus: s.status,
            responseMessage: o
        })
    }
    return s.json()
}
async function Lr(e, t=Qe, n) {
    const {appId: r, apiKey: a, measurementId: s} = e.options;
    if (!r)
        throw g.create("no-app-id");
    if (!a) {
        if (s)
            return {
                measurementId: s,
                appId: r
            };
        throw g.create("no-api-key")
    }
    const i = t.getThrottleMetadata(r) || {
        backoffCount: 0,
        throttleEndTimeMillis: Date.now()
    }
      , o = new Vr;
    return setTimeout(async () => {
        o.abort()
    }
    , n !== void 0 ? n : Er),
    et({
        appId: r,
        apiKey: a,
        measurementId: s
    }, i, o, t)
}
async function et(e, {throttleEndTimeMillis: t, backoffCount: n}, r, a=Qe) {
    var o;
    const {appId: s, measurementId: i} = e;
    try {
        await xr(r, t)
    } catch (c) {
        if (i)
            return f.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${i} provided in the "measurementId" field in the local Firebase config. [${c == null ? void 0 : c.message}]`),
            {
                appId: s,
                measurementId: i
            };
        throw c
    }
    try {
        const c = await Fr(e);
        return a.deleteThrottleMetadata(s),
        c
    } catch (c) {
        const l = c;
        if (!Hr(l)) {
            if (a.deleteThrottleMetadata(s),
            i)
                return f.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${i} provided in the "measurementId" field in the local Firebase config. [${l == null ? void 0 : l.message}]`),
                {
                    appId: s,
                    measurementId: i
                };
            throw c
        }
        const h = Number((o = l == null ? void 0 : l.customData) == null ? void 0 : o.httpStatus) === 503 ? ae(n, a.intervalMillis, $r) : ae(n, a.intervalMillis)
          , u = {
            throttleEndTimeMillis: Date.now() + h,
            backoffCount: n + 1
        };
        return a.setThrottleMetadata(s, u),
        f.debug(`Calling attemptFetch again in ${h} millis`),
        et(e, u, r, a)
    }
}
function xr(e, t) {
    return new Promise( (n, r) => {
        const a = Math.max(t - Date.now(), 0)
          , s = setTimeout(n, a);
        e.addEventListener( () => {
            clearTimeout(s),
            r(g.create("fetch-throttle", {
                throttleEndTimeMillis: t
            }))
        }
        )
    }
    )
}
function Hr(e) {
    if (!(e instanceof D) || !e.customData)
        return !1;
    const t = Number(e.customData.httpStatus);
    return t === 429 || t === 500 || t === 503 || t === 504
}
class Vr {
    constructor() {
        this.listeners = []
    }
    addEventListener(t) {
        this.listeners.push(t)
    }
    abort() {
        this.listeners.forEach(t => t())
    }
}
async function jr(e, t, n, r, a) {
    if (a && a.global) {
        e("event", n, r);
        return
    } else {
        const s = await t
          , i = {
            ...r,
            send_to: s
        };
        e("event", n, i)
    }
}
/**
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
 */
async function Ur() {
    if (Te())
        try {
            await De()
        } catch (e) {
            return f.warn(g.create("indexeddb-unavailable", {
                errorInfo: e == null ? void 0 : e.toString()
            }).message),
            !1
        }
    else
        return f.warn(g.create("indexeddb-unavailable", {
            errorInfo: "IndexedDB is not available in this environment."
        }).message),
        !1;
    return !0
}
async function zr(e, t, n, r, a, s, i) {
    const o = Lr(e);
    o.then(p => {
        n[p.measurementId] = p.appId,
        e.options.measurementId && p.measurementId !== e.options.measurementId && f.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
    }
    ).catch(p => f.error(p)),
    t.push(o);
    const c = Ur().then(p => {
        if (p)
            return r.getId()
    }
    )
      , [l,h] = await Promise.all([o, c]);
    Or(s) || Dr(s, l.measurementId),
    a("js", new Date);
    const u = (i == null ? void 0 : i.config) ?? {};
    return u[wr] = "firebase",
    u.update = !0,
    h != null && (u[Ir] = h),
    a("config", l.measurementId, u),
    l.measurementId
}
/**
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
 */
class Wr {
    constructor(t) {
        this.app = t
    }
    _delete() {
        return delete C[this.app.options.appId],
        Promise.resolve()
    }
}
let C = {}
  , ge = [];
const me = {};
let z = "dataLayer", qr = "gtag", be, tt, ye = !1;
function Gr() {
    const e = [];
    if (pt() && e.push("This is a browser extension environment."),
    gt() || e.push("Cookies are not available."),
    e.length > 0) {
        const t = e.map( (r, a) => `(${a + 1}) ${r}`).join(" ")
          , n = g.create("invalid-analytics-context", {
            errorInfo: t
        });
        f.warn(n.message)
    }
}
function Kr(e, t, n) {
    Gr();
    const r = e.options.appId;
    if (!r)
        throw g.create("no-app-id");
    if (!e.options.apiKey)
        if (e.options.measurementId)
            f.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);
        else
            throw g.create("no-api-key");
    if (C[r] != null)
        throw g.create("already-exists", {
            id: r
        });
    if (!ye) {
        Cr(z);
        const {wrappedGtag: s, gtagCore: i} = Mr(C, ge, me, z, qr);
        tt = s,
        be = i,
        ye = !0
    }
    return C[r] = zr(e, ge, me, t, be, z, n),
    new Wr(e)
}
function Zr(e=En()) {
    e = Ce(e);
    const t = N(e, $);
    return t.isInitialized() ? t.getImmediate() : Yr(e)
}
function Yr(e, t={}) {
    const n = N(e, $);
    if (n.isInitialized()) {
        const a = n.getImmediate();
        if (B(t, n.getOptions()))
            return a;
        throw g.create("already-initialized")
    }
    return n.initialize({
        options: t
    })
}
function Jr(e, t, n, r) {
    e = Ce(e),
    jr(tt, C[e.app.options.appId], t, n, r).catch(a => f.error(a))
}
const Ie = "@firebase/analytics"
  , we = "0.10.18";
function Xr() {
    A(new w($, (t, {options: n}) => {
        const r = t.getProvider("app").getImmediate()
          , a = t.getProvider("installations-internal").getImmediate();
        return Kr(r, a, n)
    }
    ,"PUBLIC")),
    A(new w("analytics-internal",e,"PRIVATE")),
    I(Ie, we),
    I(Ie, we, "esm2020");
    function e(t) {
        try {
            const n = t.getProvider($).getImmediate();
            return {
                logEvent: (r, a, s) => Jr(n, r, a, s)
            }
        } catch (n) {
            throw g.create("interop-component-reg-failed", {
                reason: n
            })
        }
    }
}
Xr();
export {Zr as g, wn as i, Jr as l};
//# sourceMappingURL=firebase-2b487b29.js.map
