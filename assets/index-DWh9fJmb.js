(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        r(s);
    new MutationObserver(s => {
        for (const i of s)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(s) {
        const i = {};
        return s.integrity && (i.integrity = s.integrity),
        s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const i = n(s);
        fetch(s.href, i)
    }
}
)();
var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Lh(t) {
    if (t.__esModule)
        return t;
    var e = t.default;
    if (typeof e == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
        };
        n.prototype = e.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(t).forEach(function(r) {
        var s = Object.getOwnPropertyDescriptor(t, r);
        Object.defineProperty(n, r, s.get ? s : {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    }),
    n
}
var Xu = {
    exports: {}
}
  , li = {}
  , Zu = {
    exports: {}
}
  , M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hr = Symbol.for("react.element")
  , Dh = Symbol.for("react.portal")
  , Mh = Symbol.for("react.fragment")
  , Uh = Symbol.for("react.strict_mode")
  , zh = Symbol.for("react.profiler")
  , Fh = Symbol.for("react.provider")
  , Bh = Symbol.for("react.context")
  , Wh = Symbol.for("react.forward_ref")
  , Vh = Symbol.for("react.suspense")
  , Hh = Symbol.for("react.memo")
  , qh = Symbol.for("react.lazy")
  , yl = Symbol.iterator;
function Kh(t) {
    return t === null || typeof t != "object" ? null : (t = yl && t[yl] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var ec = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , tc = Object.assign
  , nc = {};
function Kn(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = nc,
    this.updater = n || ec
}
Kn.prototype.isReactComponent = {};
Kn.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
}
;
Kn.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
}
;
function rc() {}
rc.prototype = Kn.prototype;
function ma(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = nc,
    this.updater = n || ec
}
var ga = ma.prototype = new rc;
ga.constructor = ma;
tc(ga, Kn.prototype);
ga.isPureReactComponent = !0;
var wl = Array.isArray
  , sc = Object.prototype.hasOwnProperty
  , va = {
    current: null
}
  , ic = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function oc(t, e, n) {
    var r, s = {}, i = null, o = null;
    if (e != null)
        for (r in e.ref !== void 0 && (o = e.ref),
        e.key !== void 0 && (i = "" + e.key),
        e)
            sc.call(e, r) && !ic.hasOwnProperty(r) && (s[r] = e[r]);
    var a = arguments.length - 2;
    if (a === 1)
        s.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        s.children = l
    }
    if (t && t.defaultProps)
        for (r in a = t.defaultProps,
        a)
            s[r] === void 0 && (s[r] = a[r]);
    return {
        $$typeof: Hr,
        type: t,
        key: i,
        ref: o,
        props: s,
        _owner: va.current
    }
}
function Gh(t, e) {
    return {
        $$typeof: Hr,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner
    }
}
function ya(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Hr
}
function Jh(t) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(n) {
        return e[n]
    })
}
var _l = /\/+/g;
function Pi(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? Jh("" + t.key) : e.toString(36)
}
function Ss(t, e, n, r, s) {
    var i = typeof t;
    (i === "undefined" || i === "boolean") && (t = null);
    var o = !1;
    if (t === null)
        o = !0;
    else
        switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (t.$$typeof) {
            case Hr:
            case Dh:
                o = !0
            }
        }
    if (o)
        return o = t,
        s = s(o),
        t = r === "" ? "." + Pi(o, 0) : r,
        wl(s) ? (n = "",
        t != null && (n = t.replace(_l, "$&/") + "/"),
        Ss(s, e, n, "", function(u) {
            return u
        })) : s != null && (ya(s) && (s = Gh(s, n + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(_l, "$&/") + "/") + t)),
        e.push(s)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    wl(t))
        for (var a = 0; a < t.length; a++) {
            i = t[a];
            var l = r + Pi(i, a);
            o += Ss(i, e, n, l, s)
        }
    else if (l = Kh(t),
    typeof l == "function")
        for (t = l.call(t),
        a = 0; !(i = t.next()).done; )
            i = i.value,
            l = r + Pi(i, a++),
            o += Ss(i, e, n, l, s);
    else if (i === "object")
        throw e = String(t),
        Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function es(t, e, n) {
    if (t == null)
        return t;
    var r = []
      , s = 0;
    return Ss(t, r, "", "", function(i) {
        return e.call(n, i, s++)
    }),
    r
}
function Qh(t) {
    if (t._status === -1) {
        var e = t._result;
        e = e(),
        e.then(function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 1,
            t._result = n)
        }, function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 2,
            t._result = n)
        }),
        t._status === -1 && (t._status = 0,
        t._result = e)
    }
    if (t._status === 1)
        return t._result.default;
    throw t._result
}
var xe = {
    current: null
}
  , Es = {
    transition: null
}
  , Yh = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: Es,
    ReactCurrentOwner: va
};
function ac() {
    throw Error("act(...) is not supported in production builds of React.")
}
M.Children = {
    map: es,
    forEach: function(t, e, n) {
        es(t, function() {
            e.apply(this, arguments)
        }, n)
    },
    count: function(t) {
        var e = 0;
        return es(t, function() {
            e++
        }),
        e
    },
    toArray: function(t) {
        return es(t, function(e) {
            return e
        }) || []
    },
    only: function(t) {
        if (!ya(t))
            throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
};
M.Component = Kn;
M.Fragment = Mh;
M.Profiler = zh;
M.PureComponent = ma;
M.StrictMode = Uh;
M.Suspense = Vh;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yh;
M.act = ac;
M.cloneElement = function(t, e, n) {
    if (t == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var r = tc({}, t.props)
      , s = t.key
      , i = t.ref
      , o = t._owner;
    if (e != null) {
        if (e.ref !== void 0 && (i = e.ref,
        o = va.current),
        e.key !== void 0 && (s = "" + e.key),
        t.type && t.type.defaultProps)
            var a = t.type.defaultProps;
        for (l in e)
            sc.call(e, l) && !ic.hasOwnProperty(l) && (r[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: Hr,
        type: t.type,
        key: s,
        ref: i,
        props: r,
        _owner: o
    }
}
;
M.createContext = function(t) {
    return t = {
        $$typeof: Bh,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    t.Provider = {
        $$typeof: Fh,
        _context: t
    },
    t.Consumer = t
}
;
M.createElement = oc;
M.createFactory = function(t) {
    var e = oc.bind(null, t);
    return e.type = t,
    e
}
;
M.createRef = function() {
    return {
        current: null
    }
}
;
M.forwardRef = function(t) {
    return {
        $$typeof: Wh,
        render: t
    }
}
;
M.isValidElement = ya;
M.lazy = function(t) {
    return {
        $$typeof: qh,
        _payload: {
            _status: -1,
            _result: t
        },
        _init: Qh
    }
}
;
M.memo = function(t, e) {
    return {
        $$typeof: Hh,
        type: t,
        compare: e === void 0 ? null : e
    }
}
;
M.startTransition = function(t) {
    var e = Es.transition;
    Es.transition = {};
    try {
        t()
    } finally {
        Es.transition = e
    }
}
;
M.unstable_act = ac;
M.useCallback = function(t, e) {
    return xe.current.useCallback(t, e)
}
;
M.useContext = function(t) {
    return xe.current.useContext(t)
}
;
M.useDebugValue = function() {}
;
M.useDeferredValue = function(t) {
    return xe.current.useDeferredValue(t)
}
;
M.useEffect = function(t, e) {
    return xe.current.useEffect(t, e)
}
;
M.useId = function() {
    return xe.current.useId()
}
;
M.useImperativeHandle = function(t, e, n) {
    return xe.current.useImperativeHandle(t, e, n)
}
;
M.useInsertionEffect = function(t, e) {
    return xe.current.useInsertionEffect(t, e)
}
;
M.useLayoutEffect = function(t, e) {
    return xe.current.useLayoutEffect(t, e)
}
;
M.useMemo = function(t, e) {
    return xe.current.useMemo(t, e)
}
;
M.useReducer = function(t, e, n) {
    return xe.current.useReducer(t, e, n)
}
;
M.useRef = function(t) {
    return xe.current.useRef(t)
}
;
M.useState = function(t) {
    return xe.current.useState(t)
}
;
M.useSyncExternalStore = function(t, e, n) {
    return xe.current.useSyncExternalStore(t, e, n)
}
;
M.useTransition = function() {
    return xe.current.useTransition()
}
;
M.version = "18.3.1";
Zu.exports = M;
var j = Zu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xh = j
  , Zh = Symbol.for("react.element")
  , ef = Symbol.for("react.fragment")
  , tf = Object.prototype.hasOwnProperty
  , nf = Xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , rf = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function lc(t, e, n) {
    var r, s = {}, i = null, o = null;
    n !== void 0 && (i = "" + n),
    e.key !== void 0 && (i = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
    for (r in e)
        tf.call(e, r) && !rf.hasOwnProperty(r) && (s[r] = e[r]);
    if (t && t.defaultProps)
        for (r in e = t.defaultProps,
        e)
            s[r] === void 0 && (s[r] = e[r]);
    return {
        $$typeof: Zh,
        type: t,
        key: i,
        ref: o,
        props: s,
        _owner: nf.current
    }
}
li.Fragment = ef;
li.jsx = lc;
li.jsxs = lc;
Xu.exports = li;
var g = Xu.exports
  , uc = {
    exports: {}
}
  , $e = {}
  , cc = {
    exports: {}
}
  , dc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
    function e(C, O) {
        var R = C.length;
        C.push(O);
        e: for (; 0 < R; ) {
            var ee = R - 1 >>> 1
              , V = C[ee];
            if (0 < s(V, O))
                C[ee] = O,
                C[R] = V,
                R = ee;
            else
                break e
        }
    }
    function n(C) {
        return C.length === 0 ? null : C[0]
    }
    function r(C) {
        if (C.length === 0)
            return null;
        var O = C[0]
          , R = C.pop();
        if (R !== O) {
            C[0] = R;
            e: for (var ee = 0, V = C.length, fe = V >>> 1; ee < fe; ) {
                var Me = 2 * (ee + 1) - 1
                  , Ht = C[Me]
                  , qt = Me + 1
                  , Zr = C[qt];
                if (0 > s(Ht, R))
                    qt < V && 0 > s(Zr, Ht) ? (C[ee] = Zr,
                    C[qt] = R,
                    ee = qt) : (C[ee] = Ht,
                    C[Me] = R,
                    ee = Me);
                else if (qt < V && 0 > s(Zr, R))
                    C[ee] = Zr,
                    C[qt] = R,
                    ee = qt;
                else
                    break e
            }
        }
        return O
    }
    function s(C, O) {
        var R = C.sortIndex - O.sortIndex;
        return R !== 0 ? R : C.id - O.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        t.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date
          , a = o.now();
        t.unstable_now = function() {
            return o.now() - a
        }
    }
    var l = []
      , u = []
      , c = 1
      , d = null
      , h = 3
      , v = !1
      , y = !1
      , w = !1
      , k = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , f = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(C) {
        for (var O = n(u); O !== null; ) {
            if (O.callback === null)
                r(u);
            else if (O.startTime <= C)
                r(u),
                O.sortIndex = O.expirationTime,
                e(l, O);
            else
                break;
            O = n(u)
        }
    }
    function _(C) {
        if (w = !1,
        p(C),
        !y)
            if (n(l) !== null)
                y = !0,
                J(E);
            else {
                var O = n(u);
                O !== null && De(_, O.startTime - C)
            }
    }
    function E(C, O) {
        y = !1,
        w && (w = !1,
        m(T),
        T = -1),
        v = !0;
        var R = h;
        try {
            for (p(O),
            d = n(l); d !== null && (!(d.expirationTime > O) || C && !$()); ) {
                var ee = d.callback;
                if (typeof ee == "function") {
                    d.callback = null,
                    h = d.priorityLevel;
                    var V = ee(d.expirationTime <= O);
                    O = t.unstable_now(),
                    typeof V == "function" ? d.callback = V : d === n(l) && r(l),
                    p(O)
                } else
                    r(l);
                d = n(l)
            }
            if (d !== null)
                var fe = !0;
            else {
                var Me = n(u);
                Me !== null && De(_, Me.startTime - O),
                fe = !1
            }
            return fe
        } finally {
            d = null,
            h = R,
            v = !1
        }
    }
    var S = !1
      , b = null
      , T = -1
      , z = 5
      , N = -1;
    function $() {
        return !(t.unstable_now() - N < z)
    }
    function L() {
        if (b !== null) {
            var C = t.unstable_now();
            N = C;
            var O = !0;
            try {
                O = b(!0, C)
            } finally {
                O ? W() : (S = !1,
                b = null)
            }
        } else
            S = !1
    }
    var W;
    if (typeof f == "function")
        W = function() {
            f(L)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var F = new MessageChannel
          , A = F.port2;
        F.port1.onmessage = L,
        W = function() {
            A.postMessage(null)
        }
    } else
        W = function() {
            k(L, 0)
        }
        ;
    function J(C) {
        b = C,
        S || (S = !0,
        W())
    }
    function De(C, O) {
        T = k(function() {
            C(t.unstable_now())
        }, O)
    }
    t.unstable_IdlePriority = 5,
    t.unstable_ImmediatePriority = 1,
    t.unstable_LowPriority = 4,
    t.unstable_NormalPriority = 3,
    t.unstable_Profiling = null,
    t.unstable_UserBlockingPriority = 2,
    t.unstable_cancelCallback = function(C) {
        C.callback = null
    }
    ,
    t.unstable_continueExecution = function() {
        y || v || (y = !0,
        J(E))
    }
    ,
    t.unstable_forceFrameRate = function(C) {
        0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : z = 0 < C ? Math.floor(1e3 / C) : 5
    }
    ,
    t.unstable_getCurrentPriorityLevel = function() {
        return h
    }
    ,
    t.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    t.unstable_next = function(C) {
        switch (h) {
        case 1:
        case 2:
        case 3:
            var O = 3;
            break;
        default:
            O = h
        }
        var R = h;
        h = O;
        try {
            return C()
        } finally {
            h = R
        }
    }
    ,
    t.unstable_pauseExecution = function() {}
    ,
    t.unstable_requestPaint = function() {}
    ,
    t.unstable_runWithPriority = function(C, O) {
        switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            C = 3
        }
        var R = h;
        h = C;
        try {
            return O()
        } finally {
            h = R
        }
    }
    ,
    t.unstable_scheduleCallback = function(C, O, R) {
        var ee = t.unstable_now();
        switch (typeof R == "object" && R !== null ? (R = R.delay,
        R = typeof R == "number" && 0 < R ? ee + R : ee) : R = ee,
        C) {
        case 1:
            var V = -1;
            break;
        case 2:
            V = 250;
            break;
        case 5:
            V = 1073741823;
            break;
        case 4:
            V = 1e4;
            break;
        default:
            V = 5e3
        }
        return V = R + V,
        C = {
            id: c++,
            callback: O,
            priorityLevel: C,
            startTime: R,
            expirationTime: V,
            sortIndex: -1
        },
        R > ee ? (C.sortIndex = R,
        e(u, C),
        n(l) === null && C === n(u) && (w ? (m(T),
        T = -1) : w = !0,
        De(_, R - ee))) : (C.sortIndex = V,
        e(l, C),
        y || v || (y = !0,
        J(E))),
        C
    }
    ,
    t.unstable_shouldYield = $,
    t.unstable_wrapCallback = function(C) {
        var O = h;
        return function() {
            var R = h;
            h = O;
            try {
                return C.apply(this, arguments)
            } finally {
                h = R
            }
        }
    }
}
)(dc);
cc.exports = dc;
var sf = cc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var of = j
  , Ie = sf;
function x(t) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var hc = new Set
  , Cr = {};
function cn(t, e) {
    Un(t, e),
    Un(t + "Capture", e)
}
function Un(t, e) {
    for (Cr[t] = e,
    t = 0; t < e.length; t++)
        hc.add(e[t])
}
var mt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , co = Object.prototype.hasOwnProperty
  , af = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , kl = {}
  , xl = {};
function lf(t) {
    return co.call(xl, t) ? !0 : co.call(kl, t) ? !1 : af.test(t) ? xl[t] = !0 : (kl[t] = !0,
    !1)
}
function uf(t, e, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof e) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (t = t.toLowerCase().slice(0, 5),
        t !== "data-" && t !== "aria-");
    default:
        return !1
    }
}
function cf(t, e, n, r) {
    if (e === null || typeof e > "u" || uf(t, e, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !e;
        case 4:
            return e === !1;
        case 5:
            return isNaN(e);
        case 6:
            return isNaN(e) || 1 > e
        }
    return !1
}
function Se(t, e, n, r, s, i, o) {
    this.acceptsBooleans = e === 2 || e === 3 || e === 4,
    this.attributeName = r,
    this.attributeNamespace = s,
    this.mustUseProperty = n,
    this.propertyName = t,
    this.type = e,
    this.sanitizeURL = i,
    this.removeEmptyString = o
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    he[t] = new Se(t,0,!1,t,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var e = t[0];
    he[e] = new Se(e,1,!1,t[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    he[t] = new Se(t,2,!1,t.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    he[t] = new Se(t,2,!1,t,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    he[t] = new Se(t,3,!1,t.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
    he[t] = new Se(t,3,!0,t,null,!1,!1)
});
["capture", "download"].forEach(function(t) {
    he[t] = new Se(t,4,!1,t,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(t) {
    he[t] = new Se(t,6,!1,t,null,!1,!1)
});
["rowSpan", "start"].forEach(function(t) {
    he[t] = new Se(t,5,!1,t.toLowerCase(),null,!1,!1)
});
var wa = /[\-:]([a-z])/g;
function _a(t) {
    return t[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var e = t.replace(wa, _a);
    he[e] = new Se(e,1,!1,t,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var e = t.replace(wa, _a);
    he[e] = new Se(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var e = t.replace(wa, _a);
    he[e] = new Se(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(t) {
    he[t] = new Se(t,1,!1,t.toLowerCase(),null,!1,!1)
});
he.xlinkHref = new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(t) {
    he[t] = new Se(t,1,!1,t.toLowerCase(),null,!0,!0)
});
function ka(t, e, n, r) {
    var s = he.hasOwnProperty(e) ? he[e] : null;
    (s !== null ? s.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (cf(e, n, s, r) && (n = null),
    r || s === null ? lf(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : s.mustUseProperty ? t[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (e = s.attributeName,
    r = s.attributeNamespace,
    n === null ? t.removeAttribute(e) : (s = s.type,
    n = s === 3 || s === 4 && n === !0 ? "" : "" + n,
    r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
}
var wt = of.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , ts = Symbol.for("react.element")
  , kn = Symbol.for("react.portal")
  , xn = Symbol.for("react.fragment")
  , xa = Symbol.for("react.strict_mode")
  , ho = Symbol.for("react.profiler")
  , fc = Symbol.for("react.provider")
  , pc = Symbol.for("react.context")
  , Sa = Symbol.for("react.forward_ref")
  , fo = Symbol.for("react.suspense")
  , po = Symbol.for("react.suspense_list")
  , Ea = Symbol.for("react.memo")
  , St = Symbol.for("react.lazy")
  , mc = Symbol.for("react.offscreen")
  , Sl = Symbol.iterator;
function Xn(t) {
    return t === null || typeof t != "object" ? null : (t = Sl && t[Sl] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var Z = Object.assign, Ni;
function cr(t) {
    if (Ni === void 0)
        try {
            throw Error()
        } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/);
            Ni = e && e[1] || ""
        }
    return `
` + Ni + t
}
var Oi = !1;
function Ri(t, e) {
    if (!t || Oi)
        return "";
    Oi = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (e = function() {
                throw Error()
            }
            ,
            Object.defineProperty(e.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(e, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(t, [], e)
            } else {
                try {
                    e.call()
                } catch (u) {
                    r = u
                }
                t.call(e.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            t()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var s = u.stack.split(`
`), i = r.stack.split(`
`), o = s.length - 1, a = i.length - 1; 1 <= o && 0 <= a && s[o] !== i[a]; )
                a--;
            for (; 1 <= o && 0 <= a; o--,
            a--)
                if (s[o] !== i[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--,
                            a--,
                            0 > a || s[o] !== i[a]) {
                                var l = `
` + s[o].replace(" at new ", " at ");
                                return t.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", t.displayName)),
                                l
                            }
                        while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        Oi = !1,
        Error.prepareStackTrace = n
    }
    return (t = t ? t.displayName || t.name : "") ? cr(t) : ""
}
function df(t) {
    switch (t.tag) {
    case 5:
        return cr(t.type);
    case 16:
        return cr("Lazy");
    case 13:
        return cr("Suspense");
    case 19:
        return cr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return t = Ri(t.type, !1),
        t;
    case 11:
        return t = Ri(t.type.render, !1),
        t;
    case 1:
        return t = Ri(t.type, !0),
        t;
    default:
        return ""
    }
}
function mo(t) {
    if (t == null)
        return null;
    if (typeof t == "function")
        return t.displayName || t.name || null;
    if (typeof t == "string")
        return t;
    switch (t) {
    case xn:
        return "Fragment";
    case kn:
        return "Portal";
    case ho:
        return "Profiler";
    case xa:
        return "StrictMode";
    case fo:
        return "Suspense";
    case po:
        return "SuspenseList"
    }
    if (typeof t == "object")
        switch (t.$$typeof) {
        case pc:
            return (t.displayName || "Context") + ".Consumer";
        case fc:
            return (t._context.displayName || "Context") + ".Provider";
        case Sa:
            var e = t.render;
            return t = t.displayName,
            t || (t = e.displayName || e.name || "",
            t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
            t;
        case Ea:
            return e = t.displayName || null,
            e !== null ? e : mo(t.type) || "Memo";
        case St:
            e = t._payload,
            t = t._init;
            try {
                return mo(t(e))
            } catch {}
        }
    return null
}
function hf(t) {
    var e = t.type;
    switch (t.tag) {
    case 24:
        return "Cache";
    case 9:
        return (e.displayName || "Context") + ".Consumer";
    case 10:
        return (e._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return t = e.render,
        t = t.displayName || t.name || "",
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return e;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return mo(e);
    case 8:
        return e === xa ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e
    }
    return null
}
function Mt(t) {
    switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return t;
    case "object":
        return t;
    default:
        return ""
    }
}
function gc(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}
function ff(t) {
    var e = gc(t) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e)
      , r = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var s = n.get
          , i = n.set;
        return Object.defineProperty(t, e, {
            configurable: !0,
            get: function() {
                return s.call(this)
            },
            set: function(o) {
                r = "" + o,
                i.call(this, o)
            }
        }),
        Object.defineProperty(t, e, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                t._valueTracker = null,
                delete t[e]
            }
        }
    }
}
function ns(t) {
    t._valueTracker || (t._valueTracker = ff(t))
}
function vc(t) {
    if (!t)
        return !1;
    var e = t._valueTracker;
    if (!e)
        return !0;
    var n = e.getValue()
      , r = "";
    return t && (r = gc(t) ? t.checked ? "true" : "false" : t.value),
    t = r,
    t !== n ? (e.setValue(t),
    !0) : !1
}
function Ls(t) {
    if (t = t || (typeof document < "u" ? document : void 0),
    typeof t > "u")
        return null;
    try {
        return t.activeElement || t.body
    } catch {
        return t.body
    }
}
function go(t, e) {
    var n = e.checked;
    return Z({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? t._wrapperState.initialChecked
    })
}
function El(t, e) {
    var n = e.defaultValue == null ? "" : e.defaultValue
      , r = e.checked != null ? e.checked : e.defaultChecked;
    n = Mt(e.value != null ? e.value : n),
    t._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
    }
}
function yc(t, e) {
    e = e.checked,
    e != null && ka(t, "checked", e, !1)
}
function vo(t, e) {
    yc(t, e);
    var n = Mt(e.value)
      , r = e.type;
    if (n != null)
        r === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
    else if (r === "submit" || r === "reset") {
        t.removeAttribute("value");
        return
    }
    e.hasOwnProperty("value") ? yo(t, e.type, n) : e.hasOwnProperty("defaultValue") && yo(t, e.type, Mt(e.defaultValue)),
    e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked)
}
function bl(t, e, n) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var r = e.type;
        if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null))
            return;
        e = "" + t._wrapperState.initialValue,
        n || e === t.value || (t.value = e),
        t.defaultValue = e
    }
    n = t.name,
    n !== "" && (t.name = ""),
    t.defaultChecked = !!t._wrapperState.initialChecked,
    n !== "" && (t.name = n)
}
function yo(t, e, n) {
    (e !== "number" || Ls(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
}
var dr = Array.isArray;
function An(t, e, n, r) {
    if (t = t.options,
    e) {
        e = {};
        for (var s = 0; s < n.length; s++)
            e["$" + n[s]] = !0;
        for (n = 0; n < t.length; n++)
            s = e.hasOwnProperty("$" + t[n].value),
            t[n].selected !== s && (t[n].selected = s),
            s && r && (t[n].defaultSelected = !0)
    } else {
        for (n = "" + Mt(n),
        e = null,
        s = 0; s < t.length; s++) {
            if (t[s].value === n) {
                t[s].selected = !0,
                r && (t[s].defaultSelected = !0);
                return
            }
            e !== null || t[s].disabled || (e = t[s])
        }
        e !== null && (e.selected = !0)
    }
}
function wo(t, e) {
    if (e.dangerouslySetInnerHTML != null)
        throw Error(x(91));
    return Z({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
    })
}
function jl(t, e) {
    var n = e.value;
    if (n == null) {
        if (n = e.children,
        e = e.defaultValue,
        n != null) {
            if (e != null)
                throw Error(x(92));
            if (dr(n)) {
                if (1 < n.length)
                    throw Error(x(93));
                n = n[0]
            }
            e = n
        }
        e == null && (e = ""),
        n = e
    }
    t._wrapperState = {
        initialValue: Mt(n)
    }
}
function wc(t, e) {
    var n = Mt(e.value)
      , r = Mt(e.defaultValue);
    n != null && (n = "" + n,
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r)
}
function Cl(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e)
}
function _c(t) {
    switch (t) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function _o(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? _c(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
}
var rs, kc = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, r, s) {
        MSApp.execUnsafeLocalFunction(function() {
            return t(e, n, r, s)
        })
    }
    : t
}(function(t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in t)
        t.innerHTML = e;
    else {
        for (rs = rs || document.createElement("div"),
        rs.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
        e = rs.firstChild; t.firstChild; )
            t.removeChild(t.firstChild);
        for (; e.firstChild; )
            t.appendChild(e.firstChild)
    }
});
function Tr(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return
        }
    }
    t.textContent = e
}
var mr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , pf = ["Webkit", "ms", "Moz", "O"];
Object.keys(mr).forEach(function(t) {
    pf.forEach(function(e) {
        e = e + t.charAt(0).toUpperCase() + t.substring(1),
        mr[e] = mr[t]
    })
});
function xc(t, e, n) {
    return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || mr.hasOwnProperty(t) && mr[t] ? ("" + e).trim() : e + "px"
}
function Sc(t, e) {
    t = t.style;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , s = xc(n, e[n], r);
            n === "float" && (n = "cssFloat"),
            r ? t.setProperty(n, s) : t[n] = s
        }
}
var mf = Z({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ko(t, e) {
    if (e) {
        if (mf[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
            throw Error(x(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null)
                throw Error(x(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html"in e.dangerouslySetInnerHTML))
                throw Error(x(61))
        }
        if (e.style != null && typeof e.style != "object")
            throw Error(x(62))
    }
}
function xo(t, e) {
    if (t.indexOf("-") === -1)
        return typeof e.is == "string";
    switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var So = null;
function ba(t) {
    return t = t.target || t.srcElement || window,
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
}
var Eo = null
  , In = null
  , $n = null;
function Tl(t) {
    if (t = Gr(t)) {
        if (typeof Eo != "function")
            throw Error(x(280));
        var e = t.stateNode;
        e && (e = fi(e),
        Eo(t.stateNode, t.type, e))
    }
}
function Ec(t) {
    In ? $n ? $n.push(t) : $n = [t] : In = t
}
function bc() {
    if (In) {
        var t = In
          , e = $n;
        if ($n = In = null,
        Tl(t),
        e)
            for (t = 0; t < e.length; t++)
                Tl(e[t])
    }
}
function jc(t, e) {
    return t(e)
}
function Cc() {}
var Ai = !1;
function Tc(t, e, n) {
    if (Ai)
        return t(e, n);
    Ai = !0;
    try {
        return jc(t, e, n)
    } finally {
        Ai = !1,
        (In !== null || $n !== null) && (Cc(),
        bc())
    }
}
function Pr(t, e) {
    var n = t.stateNode;
    if (n === null)
        return null;
    var r = fi(n);
    if (r === null)
        return null;
    n = r[e];
    e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (t = t.type,
        r = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
        t = !r;
        break e;
    default:
        t = !1
    }
    if (t)
        return null;
    if (n && typeof n != "function")
        throw Error(x(231, e, typeof n));
    return n
}
var bo = !1;
if (mt)
    try {
        var Zn = {};
        Object.defineProperty(Zn, "passive", {
            get: function() {
                bo = !0
            }
        }),
        window.addEventListener("test", Zn, Zn),
        window.removeEventListener("test", Zn, Zn)
    } catch {
        bo = !1
    }
function gf(t, e, n, r, s, i, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var gr = !1
  , Ds = null
  , Ms = !1
  , jo = null
  , vf = {
    onError: function(t) {
        gr = !0,
        Ds = t
    }
};
function yf(t, e, n, r, s, i, o, a, l) {
    gr = !1,
    Ds = null,
    gf.apply(vf, arguments)
}
function wf(t, e, n, r, s, i, o, a, l) {
    if (yf.apply(this, arguments),
    gr) {
        if (gr) {
            var u = Ds;
            gr = !1,
            Ds = null
        } else
            throw Error(x(198));
        Ms || (Ms = !0,
        jo = u)
    }
}
function dn(t) {
    var e = t
      , n = t;
    if (t.alternate)
        for (; e.return; )
            e = e.return;
    else {
        t = e;
        do
            e = t,
            e.flags & 4098 && (n = e.return),
            t = e.return;
        while (t)
    }
    return e.tag === 3 ? n : null
}
function Pc(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate,
        t !== null && (e = t.memoizedState)),
        e !== null)
            return e.dehydrated
    }
    return null
}
function Pl(t) {
    if (dn(t) !== t)
        throw Error(x(188))
}
function _f(t) {
    var e = t.alternate;
    if (!e) {
        if (e = dn(t),
        e === null)
            throw Error(x(188));
        return e !== t ? null : t
    }
    for (var n = t, r = e; ; ) {
        var s = n.return;
        if (s === null)
            break;
        var i = s.alternate;
        if (i === null) {
            if (r = s.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (s.child === i.child) {
            for (i = s.child; i; ) {
                if (i === n)
                    return Pl(s),
                    t;
                if (i === r)
                    return Pl(s),
                    e;
                i = i.sibling
            }
            throw Error(x(188))
        }
        if (n.return !== r.return)
            n = s,
            r = i;
        else {
            for (var o = !1, a = s.child; a; ) {
                if (a === n) {
                    o = !0,
                    n = s,
                    r = i;
                    break
                }
                if (a === r) {
                    o = !0,
                    r = s,
                    n = i;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        o = !0,
                        n = i,
                        r = s;
                        break
                    }
                    if (a === r) {
                        o = !0,
                        r = i,
                        n = s;
                        break
                    }
                    a = a.sibling
                }
                if (!o)
                    throw Error(x(189))
            }
        }
        if (n.alternate !== r)
            throw Error(x(190))
    }
    if (n.tag !== 3)
        throw Error(x(188));
    return n.stateNode.current === n ? t : e
}
function Nc(t) {
    return t = _f(t),
    t !== null ? Oc(t) : null
}
function Oc(t) {
    if (t.tag === 5 || t.tag === 6)
        return t;
    for (t = t.child; t !== null; ) {
        var e = Oc(t);
        if (e !== null)
            return e;
        t = t.sibling
    }
    return null
}
var Rc = Ie.unstable_scheduleCallback
  , Nl = Ie.unstable_cancelCallback
  , kf = Ie.unstable_shouldYield
  , xf = Ie.unstable_requestPaint
  , ne = Ie.unstable_now
  , Sf = Ie.unstable_getCurrentPriorityLevel
  , ja = Ie.unstable_ImmediatePriority
  , Ac = Ie.unstable_UserBlockingPriority
  , Us = Ie.unstable_NormalPriority
  , Ef = Ie.unstable_LowPriority
  , Ic = Ie.unstable_IdlePriority
  , ui = null
  , ot = null;
function bf(t) {
    if (ot && typeof ot.onCommitFiberRoot == "function")
        try {
            ot.onCommitFiberRoot(ui, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
}
var Xe = Math.clz32 ? Math.clz32 : Tf
  , jf = Math.log
  , Cf = Math.LN2;
function Tf(t) {
    return t >>>= 0,
    t === 0 ? 32 : 31 - (jf(t) / Cf | 0) | 0
}
var ss = 64
  , is = 4194304;
function hr(t) {
    switch (t & -t) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return t & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return t
    }
}
function zs(t, e) {
    var n = t.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , s = t.suspendedLanes
      , i = t.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var a = o & ~s;
        a !== 0 ? r = hr(a) : (i &= o,
        i !== 0 && (r = hr(i)))
    } else
        o = n & ~s,
        o !== 0 ? r = hr(o) : i !== 0 && (r = hr(i));
    if (r === 0)
        return 0;
    if (e !== 0 && e !== r && !(e & s) && (s = r & -r,
    i = e & -e,
    s >= i || s === 16 && (i & 4194240) !== 0))
        return e;
    if (r & 4 && (r |= n & 16),
    e = t.entangledLanes,
    e !== 0)
        for (t = t.entanglements,
        e &= r; 0 < e; )
            n = 31 - Xe(e),
            s = 1 << n,
            r |= t[n],
            e &= ~s;
    return r
}
function Pf(t, e) {
    switch (t) {
    case 1:
    case 2:
    case 4:
        return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Nf(t, e) {
    for (var n = t.suspendedLanes, r = t.pingedLanes, s = t.expirationTimes, i = t.pendingLanes; 0 < i; ) {
        var o = 31 - Xe(i)
          , a = 1 << o
          , l = s[o];
        l === -1 ? (!(a & n) || a & r) && (s[o] = Pf(a, e)) : l <= e && (t.expiredLanes |= a),
        i &= ~a
    }
}
function Co(t) {
    return t = t.pendingLanes & -1073741825,
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
}
function $c() {
    var t = ss;
    return ss <<= 1,
    !(ss & 4194240) && (ss = 64),
    t
}
function Ii(t) {
    for (var e = [], n = 0; 31 > n; n++)
        e.push(t);
    return e
}
function qr(t, e, n) {
    t.pendingLanes |= e,
    e !== 536870912 && (t.suspendedLanes = 0,
    t.pingedLanes = 0),
    t = t.eventTimes,
    e = 31 - Xe(e),
    t[e] = n
}
function Of(t, e) {
    var n = t.pendingLanes & ~e;
    t.pendingLanes = e,
    t.suspendedLanes = 0,
    t.pingedLanes = 0,
    t.expiredLanes &= e,
    t.mutableReadLanes &= e,
    t.entangledLanes &= e,
    e = t.entanglements;
    var r = t.eventTimes;
    for (t = t.expirationTimes; 0 < n; ) {
        var s = 31 - Xe(n)
          , i = 1 << s;
        e[s] = 0,
        r[s] = -1,
        t[s] = -1,
        n &= ~i
    }
}
function Ca(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
        var r = 31 - Xe(n)
          , s = 1 << r;
        s & e | t[r] & e && (t[r] |= e),
        n &= ~s
    }
}
var B = 0;
function Lc(t) {
    return t &= -t,
    1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
}
var Dc, Ta, Mc, Uc, zc, To = !1, os = [], Nt = null, Ot = null, Rt = null, Nr = new Map, Or = new Map, bt = [], Rf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ol(t, e) {
    switch (t) {
    case "focusin":
    case "focusout":
        Nt = null;
        break;
    case "dragenter":
    case "dragleave":
        Ot = null;
        break;
    case "mouseover":
    case "mouseout":
        Rt = null;
        break;
    case "pointerover":
    case "pointerout":
        Nr.delete(e.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Or.delete(e.pointerId)
    }
}
function er(t, e, n, r, s, i) {
    return t === null || t.nativeEvent !== i ? (t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s]
    },
    e !== null && (e = Gr(e),
    e !== null && Ta(e)),
    t) : (t.eventSystemFlags |= r,
    e = t.targetContainers,
    s !== null && e.indexOf(s) === -1 && e.push(s),
    t)
}
function Af(t, e, n, r, s) {
    switch (e) {
    case "focusin":
        return Nt = er(Nt, t, e, n, r, s),
        !0;
    case "dragenter":
        return Ot = er(Ot, t, e, n, r, s),
        !0;
    case "mouseover":
        return Rt = er(Rt, t, e, n, r, s),
        !0;
    case "pointerover":
        var i = s.pointerId;
        return Nr.set(i, er(Nr.get(i) || null, t, e, n, r, s)),
        !0;
    case "gotpointercapture":
        return i = s.pointerId,
        Or.set(i, er(Or.get(i) || null, t, e, n, r, s)),
        !0
    }
    return !1
}
function Fc(t) {
    var e = Zt(t.target);
    if (e !== null) {
        var n = dn(e);
        if (n !== null) {
            if (e = n.tag,
            e === 13) {
                if (e = Pc(n),
                e !== null) {
                    t.blockedOn = e,
                    zc(t.priority, function() {
                        Mc(n)
                    });
                    return
                }
            } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    t.blockedOn = null
}
function bs(t) {
    if (t.blockedOn !== null)
        return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
        var n = Po(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var r = new n.constructor(n.type,n);
            So = r,
            n.target.dispatchEvent(r),
            So = null
        } else
            return e = Gr(n),
            e !== null && Ta(e),
            t.blockedOn = n,
            !1;
        e.shift()
    }
    return !0
}
function Rl(t, e, n) {
    bs(t) && n.delete(e)
}
function If() {
    To = !1,
    Nt !== null && bs(Nt) && (Nt = null),
    Ot !== null && bs(Ot) && (Ot = null),
    Rt !== null && bs(Rt) && (Rt = null),
    Nr.forEach(Rl),
    Or.forEach(Rl)
}
function tr(t, e) {
    t.blockedOn === e && (t.blockedOn = null,
    To || (To = !0,
    Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, If)))
}
function Rr(t) {
    function e(s) {
        return tr(s, t)
    }
    if (0 < os.length) {
        tr(os[0], t);
        for (var n = 1; n < os.length; n++) {
            var r = os[n];
            r.blockedOn === t && (r.blockedOn = null)
        }
    }
    for (Nt !== null && tr(Nt, t),
    Ot !== null && tr(Ot, t),
    Rt !== null && tr(Rt, t),
    Nr.forEach(e),
    Or.forEach(e),
    n = 0; n < bt.length; n++)
        r = bt[n],
        r.blockedOn === t && (r.blockedOn = null);
    for (; 0 < bt.length && (n = bt[0],
    n.blockedOn === null); )
        Fc(n),
        n.blockedOn === null && bt.shift()
}
var Ln = wt.ReactCurrentBatchConfig
  , Fs = !0;
function $f(t, e, n, r) {
    var s = B
      , i = Ln.transition;
    Ln.transition = null;
    try {
        B = 1,
        Pa(t, e, n, r)
    } finally {
        B = s,
        Ln.transition = i
    }
}
function Lf(t, e, n, r) {
    var s = B
      , i = Ln.transition;
    Ln.transition = null;
    try {
        B = 4,
        Pa(t, e, n, r)
    } finally {
        B = s,
        Ln.transition = i
    }
}
function Pa(t, e, n, r) {
    if (Fs) {
        var s = Po(t, e, n, r);
        if (s === null)
            Vi(t, e, r, Bs, n),
            Ol(t, r);
        else if (Af(s, t, e, n, r))
            r.stopPropagation();
        else if (Ol(t, r),
        e & 4 && -1 < Rf.indexOf(t)) {
            for (; s !== null; ) {
                var i = Gr(s);
                if (i !== null && Dc(i),
                i = Po(t, e, n, r),
                i === null && Vi(t, e, r, Bs, n),
                i === s)
                    break;
                s = i
            }
            s !== null && r.stopPropagation()
        } else
            Vi(t, e, r, null, n)
    }
}
var Bs = null;
function Po(t, e, n, r) {
    if (Bs = null,
    t = ba(r),
    t = Zt(t),
    t !== null)
        if (e = dn(t),
        e === null)
            t = null;
        else if (n = e.tag,
        n === 13) {
            if (t = Pc(e),
            t !== null)
                return t;
            t = null
        } else if (n === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
                return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null
        } else
            e !== t && (t = null);
    return Bs = t,
    null
}
function Bc(t) {
    switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Sf()) {
        case ja:
            return 1;
        case Ac:
            return 4;
        case Us:
        case Ef:
            return 16;
        case Ic:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Tt = null
  , Na = null
  , js = null;
function Wc() {
    if (js)
        return js;
    var t, e = Na, n = e.length, r, s = "value"in Tt ? Tt.value : Tt.textContent, i = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++)
        ;
    var o = n - t;
    for (r = 1; r <= o && e[n - r] === s[i - r]; r++)
        ;
    return js = s.slice(t, 1 < r ? 1 - r : void 0)
}
function Cs(t) {
    var e = t.keyCode;
    return "charCode"in t ? (t = t.charCode,
    t === 0 && e === 13 && (t = 13)) : t = e,
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
}
function as() {
    return !0
}
function Al() {
    return !1
}
function Le(t) {
    function e(n, r, s, i, o) {
        this._reactName = n,
        this._targetInst = s,
        this.type = r,
        this.nativeEvent = i,
        this.target = o,
        this.currentTarget = null;
        for (var a in t)
            t.hasOwnProperty(a) && (n = t[a],
            this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? as : Al,
        this.isPropagationStopped = Al,
        this
    }
    return Z(e.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = as)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = as)
        },
        persist: function() {},
        isPersistent: as
    }),
    e
}
var Gn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
        return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Oa = Le(Gn), Kr = Z({}, Gn, {
    view: 0,
    detail: 0
}), Df = Le(Kr), $i, Li, nr, ci = Z({}, Kr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ra,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
    },
    movementX: function(t) {
        return "movementX"in t ? t.movementX : (t !== nr && (nr && t.type === "mousemove" ? ($i = t.screenX - nr.screenX,
        Li = t.screenY - nr.screenY) : Li = $i = 0,
        nr = t),
        $i)
    },
    movementY: function(t) {
        return "movementY"in t ? t.movementY : Li
    }
}), Il = Le(ci), Mf = Z({}, ci, {
    dataTransfer: 0
}), Uf = Le(Mf), zf = Z({}, Kr, {
    relatedTarget: 0
}), Di = Le(zf), Ff = Z({}, Gn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Bf = Le(Ff), Wf = Z({}, Gn, {
    clipboardData: function(t) {
        return "clipboardData"in t ? t.clipboardData : window.clipboardData
    }
}), Vf = Le(Wf), Hf = Z({}, Gn, {
    data: 0
}), $l = Le(Hf), qf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Kf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Gf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Jf(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Gf[t]) ? !!e[t] : !1
}
function Ra() {
    return Jf
}
var Qf = Z({}, Kr, {
    key: function(t) {
        if (t.key) {
            var e = qf[t.key] || t.key;
            if (e !== "Unidentified")
                return e
        }
        return t.type === "keypress" ? (t = Cs(t),
        t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Kf[t.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ra,
    charCode: function(t) {
        return t.type === "keypress" ? Cs(t) : 0
    },
    keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    },
    which: function(t) {
        return t.type === "keypress" ? Cs(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    }
})
  , Yf = Le(Qf)
  , Xf = Z({}, ci, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Ll = Le(Xf)
  , Zf = Z({}, Kr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ra
})
  , ep = Le(Zf)
  , tp = Z({}, Gn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , np = Le(tp)
  , rp = Z({}, ci, {
    deltaX: function(t) {
        return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
    },
    deltaY: function(t) {
        return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , sp = Le(rp)
  , ip = [9, 13, 27, 32]
  , Aa = mt && "CompositionEvent"in window
  , vr = null;
mt && "documentMode"in document && (vr = document.documentMode);
var op = mt && "TextEvent"in window && !vr
  , Vc = mt && (!Aa || vr && 8 < vr && 11 >= vr)
  , Dl = " "
  , Ml = !1;
function Hc(t, e) {
    switch (t) {
    case "keyup":
        return ip.indexOf(e.keyCode) !== -1;
    case "keydown":
        return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function qc(t) {
    return t = t.detail,
    typeof t == "object" && "data"in t ? t.data : null
}
var Sn = !1;
function ap(t, e) {
    switch (t) {
    case "compositionend":
        return qc(e);
    case "keypress":
        return e.which !== 32 ? null : (Ml = !0,
        Dl);
    case "textInput":
        return t = e.data,
        t === Dl && Ml ? null : t;
    default:
        return null
    }
}
function lp(t, e) {
    if (Sn)
        return t === "compositionend" || !Aa && Hc(t, e) ? (t = Wc(),
        js = Na = Tt = null,
        Sn = !1,
        t) : null;
    switch (t) {
    case "paste":
        return null;
    case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length)
                return e.char;
            if (e.which)
                return String.fromCharCode(e.which)
        }
        return null;
    case "compositionend":
        return Vc && e.locale !== "ko" ? null : e.data;
    default:
        return null
    }
}
var up = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Ul(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!up[t.type] : e === "textarea"
}
function Kc(t, e, n, r) {
    Ec(r),
    e = Ws(e, "onChange"),
    0 < e.length && (n = new Oa("onChange","change",null,n,r),
    t.push({
        event: n,
        listeners: e
    }))
}
var yr = null
  , Ar = null;
function cp(t) {
    sd(t, 0)
}
function di(t) {
    var e = jn(t);
    if (vc(e))
        return t
}
function dp(t, e) {
    if (t === "change")
        return e
}
var Gc = !1;
if (mt) {
    var Mi;
    if (mt) {
        var Ui = "oninput"in document;
        if (!Ui) {
            var zl = document.createElement("div");
            zl.setAttribute("oninput", "return;"),
            Ui = typeof zl.oninput == "function"
        }
        Mi = Ui
    } else
        Mi = !1;
    Gc = Mi && (!document.documentMode || 9 < document.documentMode)
}
function Fl() {
    yr && (yr.detachEvent("onpropertychange", Jc),
    Ar = yr = null)
}
function Jc(t) {
    if (t.propertyName === "value" && di(Ar)) {
        var e = [];
        Kc(e, Ar, t, ba(t)),
        Tc(cp, e)
    }
}
function hp(t, e, n) {
    t === "focusin" ? (Fl(),
    yr = e,
    Ar = n,
    yr.attachEvent("onpropertychange", Jc)) : t === "focusout" && Fl()
}
function fp(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return di(Ar)
}
function pp(t, e) {
    if (t === "click")
        return di(e)
}
function mp(t, e) {
    if (t === "input" || t === "change")
        return di(e)
}
function gp(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var et = typeof Object.is == "function" ? Object.is : gp;
function Ir(t, e) {
    if (et(t, e))
        return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
    var n = Object.keys(t)
      , r = Object.keys(e);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var s = n[r];
        if (!co.call(e, s) || !et(t[s], e[s]))
            return !1
    }
    return !0
}
function Bl(t) {
    for (; t && t.firstChild; )
        t = t.firstChild;
    return t
}
function Wl(t, e) {
    var n = Bl(t);
    t = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = t + n.textContent.length,
            t <= e && r >= e)
                return {
                    node: n,
                    offset: e - t
                };
            t = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Bl(n)
    }
}
function Qc(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Qc(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}
function Yc() {
    for (var t = window, e = Ls(); e instanceof t.HTMLIFrameElement; ) {
        try {
            var n = typeof e.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            t = e.contentWindow;
        else
            break;
        e = Ls(t.document)
    }
    return e
}
function Ia(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}
function vp(t) {
    var e = Yc()
      , n = t.focusedElem
      , r = t.selectionRange;
    if (e !== n && n && n.ownerDocument && Qc(n.ownerDocument.documentElement, n)) {
        if (r !== null && Ia(n)) {
            if (e = r.start,
            t = r.end,
            t === void 0 && (t = e),
            "selectionStart"in n)
                n.selectionStart = e,
                n.selectionEnd = Math.min(t, n.value.length);
            else if (t = (e = n.ownerDocument || document) && e.defaultView || window,
            t.getSelection) {
                t = t.getSelection();
                var s = n.textContent.length
                  , i = Math.min(r.start, s);
                r = r.end === void 0 ? i : Math.min(r.end, s),
                !t.extend && i > r && (s = r,
                r = i,
                i = s),
                s = Wl(n, i);
                var o = Wl(n, r);
                s && o && (t.rangeCount !== 1 || t.anchorNode !== s.node || t.anchorOffset !== s.offset || t.focusNode !== o.node || t.focusOffset !== o.offset) && (e = e.createRange(),
                e.setStart(s.node, s.offset),
                t.removeAllRanges(),
                i > r ? (t.addRange(e),
                t.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset),
                t.addRange(e)))
            }
        }
        for (e = [],
        t = n; t = t.parentNode; )
            t.nodeType === 1 && e.push({
                element: t,
                left: t.scrollLeft,
                top: t.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < e.length; n++)
            t = e[n],
            t.element.scrollLeft = t.left,
            t.element.scrollTop = t.top
    }
}
var yp = mt && "documentMode"in document && 11 >= document.documentMode
  , En = null
  , No = null
  , wr = null
  , Oo = !1;
function Vl(t, e, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Oo || En == null || En !== Ls(r) || (r = En,
    "selectionStart"in r && Ia(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    wr && Ir(wr, r) || (wr = r,
    r = Ws(No, "onSelect"),
    0 < r.length && (e = new Oa("onSelect","select",null,e,n),
    t.push({
        event: e,
        listeners: r
    }),
    e.target = En)))
}
function ls(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(),
    n["Webkit" + t] = "webkit" + e,
    n["Moz" + t] = "moz" + e,
    n
}
var bn = {
    animationend: ls("Animation", "AnimationEnd"),
    animationiteration: ls("Animation", "AnimationIteration"),
    animationstart: ls("Animation", "AnimationStart"),
    transitionend: ls("Transition", "TransitionEnd")
}
  , zi = {}
  , Xc = {};
mt && (Xc = document.createElement("div").style,
"AnimationEvent"in window || (delete bn.animationend.animation,
delete bn.animationiteration.animation,
delete bn.animationstart.animation),
"TransitionEvent"in window || delete bn.transitionend.transition);
function hi(t) {
    if (zi[t])
        return zi[t];
    if (!bn[t])
        return t;
    var e = bn[t], n;
    for (n in e)
        if (e.hasOwnProperty(n) && n in Xc)
            return zi[t] = e[n];
    return t
}
var Zc = hi("animationend")
  , ed = hi("animationiteration")
  , td = hi("animationstart")
  , nd = hi("transitionend")
  , rd = new Map
  , Hl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ft(t, e) {
    rd.set(t, e),
    cn(e, [t])
}
for (var Fi = 0; Fi < Hl.length; Fi++) {
    var Bi = Hl[Fi]
      , wp = Bi.toLowerCase()
      , _p = Bi[0].toUpperCase() + Bi.slice(1);
    Ft(wp, "on" + _p)
}
Ft(Zc, "onAnimationEnd");
Ft(ed, "onAnimationIteration");
Ft(td, "onAnimationStart");
Ft("dblclick", "onDoubleClick");
Ft("focusin", "onFocus");
Ft("focusout", "onBlur");
Ft(nd, "onTransitionEnd");
Un("onMouseEnter", ["mouseout", "mouseover"]);
Un("onMouseLeave", ["mouseout", "mouseover"]);
Un("onPointerEnter", ["pointerout", "pointerover"]);
Un("onPointerLeave", ["pointerout", "pointerover"]);
cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
cn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , kp = new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));
function ql(t, e, n) {
    var r = t.type || "unknown-event";
    t.currentTarget = n,
    wf(r, e, void 0, t),
    t.currentTarget = null
}
function sd(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
        var r = t[n]
          , s = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (e)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== i && s.isPropagationStopped())
                        break e;
                    ql(s, a, u),
                    i = l
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (a = r[o],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== i && s.isPropagationStopped())
                        break e;
                    ql(s, a, u),
                    i = l
                }
        }
    }
    if (Ms)
        throw t = jo,
        Ms = !1,
        jo = null,
        t
}
function K(t, e) {
    var n = e[Lo];
    n === void 0 && (n = e[Lo] = new Set);
    var r = t + "__bubble";
    n.has(r) || (id(e, t, 2, !1),
    n.add(r))
}
function Wi(t, e, n) {
    var r = 0;
    e && (r |= 4),
    id(n, t, r, e)
}
var us = "_reactListening" + Math.random().toString(36).slice(2);
function $r(t) {
    if (!t[us]) {
        t[us] = !0,
        hc.forEach(function(n) {
            n !== "selectionchange" && (kp.has(n) || Wi(n, !1, t),
            Wi(n, !0, t))
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[us] || (e[us] = !0,
        Wi("selectionchange", !1, e))
    }
}
function id(t, e, n, r) {
    switch (Bc(e)) {
    case 1:
        var s = $f;
        break;
    case 4:
        s = Lf;
        break;
    default:
        s = Pa
    }
    n = s.bind(null, e, n, t),
    s = void 0,
    !bo || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0),
    r ? s !== void 0 ? t.addEventListener(e, n, {
        capture: !0,
        passive: s
    }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
        passive: s
    }) : t.addEventListener(e, n, !1)
}
function Vi(t, e, n, r, s) {
    var i = r;
    if (!(e & 1) && !(e & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var a = r.stateNode.containerInfo;
                if (a === s || a.nodeType === 8 && a.parentNode === s)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var l = o.tag;
                        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo,
                        l === s || l.nodeType === 8 && l.parentNode === s))
                            return;
                        o = o.return
                    }
                for (; a !== null; ) {
                    if (o = Zt(a),
                    o === null)
                        return;
                    if (l = o.tag,
                    l === 5 || l === 6) {
                        r = i = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    Tc(function() {
        var u = i
          , c = ba(n)
          , d = [];
        e: {
            var h = rd.get(t);
            if (h !== void 0) {
                var v = Oa
                  , y = t;
                switch (t) {
                case "keypress":
                    if (Cs(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    v = Yf;
                    break;
                case "focusin":
                    y = "focus",
                    v = Di;
                    break;
                case "focusout":
                    y = "blur",
                    v = Di;
                    break;
                case "beforeblur":
                case "afterblur":
                    v = Di;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    v = Il;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    v = Uf;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    v = ep;
                    break;
                case Zc:
                case ed:
                case td:
                    v = Bf;
                    break;
                case nd:
                    v = np;
                    break;
                case "scroll":
                    v = Df;
                    break;
                case "wheel":
                    v = sp;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    v = Vf;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    v = Ll
                }
                var w = (e & 4) !== 0
                  , k = !w && t === "scroll"
                  , m = w ? h !== null ? h + "Capture" : null : h;
                w = [];
                for (var f = u, p; f !== null; ) {
                    p = f;
                    var _ = p.stateNode;
                    if (p.tag === 5 && _ !== null && (p = _,
                    m !== null && (_ = Pr(f, m),
                    _ != null && w.push(Lr(f, _, p)))),
                    k)
                        break;
                    f = f.return
                }
                0 < w.length && (h = new v(h,y,null,n,c),
                d.push({
                    event: h,
                    listeners: w
                }))
            }
        }
        if (!(e & 7)) {
            e: {
                if (h = t === "mouseover" || t === "pointerover",
                v = t === "mouseout" || t === "pointerout",
                h && n !== So && (y = n.relatedTarget || n.fromElement) && (Zt(y) || y[gt]))
                    break e;
                if ((v || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window,
                v ? (y = n.relatedTarget || n.toElement,
                v = u,
                y = y ? Zt(y) : null,
                y !== null && (k = dn(y),
                y !== k || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null,
                y = u),
                v !== y)) {
                    if (w = Il,
                    _ = "onMouseLeave",
                    m = "onMouseEnter",
                    f = "mouse",
                    (t === "pointerout" || t === "pointerover") && (w = Ll,
                    _ = "onPointerLeave",
                    m = "onPointerEnter",
                    f = "pointer"),
                    k = v == null ? h : jn(v),
                    p = y == null ? h : jn(y),
                    h = new w(_,f + "leave",v,n,c),
                    h.target = k,
                    h.relatedTarget = p,
                    _ = null,
                    Zt(c) === u && (w = new w(m,f + "enter",y,n,c),
                    w.target = p,
                    w.relatedTarget = k,
                    _ = w),
                    k = _,
                    v && y)
                        t: {
                            for (w = v,
                            m = y,
                            f = 0,
                            p = w; p; p = fn(p))
                                f++;
                            for (p = 0,
                            _ = m; _; _ = fn(_))
                                p++;
                            for (; 0 < f - p; )
                                w = fn(w),
                                f--;
                            for (; 0 < p - f; )
                                m = fn(m),
                                p--;
                            for (; f--; ) {
                                if (w === m || m !== null && w === m.alternate)
                                    break t;
                                w = fn(w),
                                m = fn(m)
                            }
                            w = null
                        }
                    else
                        w = null;
                    v !== null && Kl(d, h, v, w, !1),
                    y !== null && k !== null && Kl(d, k, y, w, !0)
                }
            }
            e: {
                if (h = u ? jn(u) : window,
                v = h.nodeName && h.nodeName.toLowerCase(),
                v === "select" || v === "input" && h.type === "file")
                    var E = dp;
                else if (Ul(h))
                    if (Gc)
                        E = mp;
                    else {
                        E = fp;
                        var S = hp
                    }
                else
                    (v = h.nodeName) && v.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (E = pp);
                if (E && (E = E(t, u))) {
                    Kc(d, E, n, c);
                    break e
                }
                S && S(t, h, u),
                t === "focusout" && (S = h._wrapperState) && S.controlled && h.type === "number" && yo(h, "number", h.value)
            }
            switch (S = u ? jn(u) : window,
            t) {
            case "focusin":
                (Ul(S) || S.contentEditable === "true") && (En = S,
                No = u,
                wr = null);
                break;
            case "focusout":
                wr = No = En = null;
                break;
            case "mousedown":
                Oo = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Oo = !1,
                Vl(d, n, c);
                break;
            case "selectionchange":
                if (yp)
                    break;
            case "keydown":
            case "keyup":
                Vl(d, n, c)
            }
            var b;
            if (Aa)
                e: {
                    switch (t) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                    }
                    T = void 0
                }
            else
                Sn ? Hc(t, n) && (T = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
            T && (Vc && n.locale !== "ko" && (Sn || T !== "onCompositionStart" ? T === "onCompositionEnd" && Sn && (b = Wc()) : (Tt = c,
            Na = "value"in Tt ? Tt.value : Tt.textContent,
            Sn = !0)),
            S = Ws(u, T),
            0 < S.length && (T = new $l(T,t,null,n,c),
            d.push({
                event: T,
                listeners: S
            }),
            b ? T.data = b : (b = qc(n),
            b !== null && (T.data = b)))),
            (b = op ? ap(t, n) : lp(t, n)) && (u = Ws(u, "onBeforeInput"),
            0 < u.length && (c = new $l("onBeforeInput","beforeinput",null,n,c),
            d.push({
                event: c,
                listeners: u
            }),
            c.data = b))
        }
        sd(d, e)
    })
}
function Lr(t, e, n) {
    return {
        instance: t,
        listener: e,
        currentTarget: n
    }
}
function Ws(t, e) {
    for (var n = e + "Capture", r = []; t !== null; ) {
        var s = t
          , i = s.stateNode;
        s.tag === 5 && i !== null && (s = i,
        i = Pr(t, n),
        i != null && r.unshift(Lr(t, i, s)),
        i = Pr(t, e),
        i != null && r.push(Lr(t, i, s))),
        t = t.return
    }
    return r
}
function fn(t) {
    if (t === null)
        return null;
    do
        t = t.return;
    while (t && t.tag !== 5);
    return t || null
}
function Kl(t, e, n, r, s) {
    for (var i = e._reactName, o = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        s ? (l = Pr(n, i),
        l != null && o.unshift(Lr(n, l, a))) : s || (l = Pr(n, i),
        l != null && o.push(Lr(n, l, a)))),
        n = n.return
    }
    o.length !== 0 && t.push({
        event: e,
        listeners: o
    })
}
var xp = /\r\n?/g
  , Sp = /\u0000|\uFFFD/g;
function Gl(t) {
    return (typeof t == "string" ? t : "" + t).replace(xp, `
`).replace(Sp, "")
}
function cs(t, e, n) {
    if (e = Gl(e),
    Gl(t) !== e && n)
        throw Error(x(425))
}
function Vs() {}
var Ro = null
  , Ao = null;
function Io(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var $o = typeof setTimeout == "function" ? setTimeout : void 0
  , Ep = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Jl = typeof Promise == "function" ? Promise : void 0
  , bp = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jl < "u" ? function(t) {
    return Jl.resolve(null).then(t).catch(jp)
}
: $o;
function jp(t) {
    setTimeout(function() {
        throw t
    })
}
function Hi(t, e) {
    var n = e
      , r = 0;
    do {
        var s = n.nextSibling;
        if (t.removeChild(n),
        s && s.nodeType === 8)
            if (n = s.data,
            n === "/$") {
                if (r === 0) {
                    t.removeChild(s),
                    Rr(e);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = s
    } while (n);
    Rr(e)
}
function At(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3)
            break;
        if (e === 8) {
            if (e = t.data,
            e === "$" || e === "$!" || e === "$?")
                break;
            if (e === "/$")
                return null
        }
    }
    return t
}
function Ql(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (e === 0)
                    return t;
                e--
            } else
                n === "/$" && e++
        }
        t = t.previousSibling
    }
    return null
}
var Jn = Math.random().toString(36).slice(2)
  , it = "__reactFiber$" + Jn
  , Dr = "__reactProps$" + Jn
  , gt = "__reactContainer$" + Jn
  , Lo = "__reactEvents$" + Jn
  , Cp = "__reactListeners$" + Jn
  , Tp = "__reactHandles$" + Jn;
function Zt(t) {
    var e = t[it];
    if (e)
        return e;
    for (var n = t.parentNode; n; ) {
        if (e = n[gt] || n[it]) {
            if (n = e.alternate,
            e.child !== null || n !== null && n.child !== null)
                for (t = Ql(t); t !== null; ) {
                    if (n = t[it])
                        return n;
                    t = Ql(t)
                }
            return e
        }
        t = n,
        n = t.parentNode
    }
    return null
}
function Gr(t) {
    return t = t[it] || t[gt],
    !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
}
function jn(t) {
    if (t.tag === 5 || t.tag === 6)
        return t.stateNode;
    throw Error(x(33))
}
function fi(t) {
    return t[Dr] || null
}
var Do = []
  , Cn = -1;
function Bt(t) {
    return {
        current: t
    }
}
function G(t) {
    0 > Cn || (t.current = Do[Cn],
    Do[Cn] = null,
    Cn--)
}
function q(t, e) {
    Cn++,
    Do[Cn] = t.current,
    t.current = e
}
var Ut = {}
  , ve = Bt(Ut)
  , Te = Bt(!1)
  , sn = Ut;
function zn(t, e) {
    var n = t.type.contextTypes;
    if (!n)
        return Ut;
    var r = t.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
        return r.__reactInternalMemoizedMaskedChildContext;
    var s = {}, i;
    for (i in n)
        s[i] = e[i];
    return r && (t = t.stateNode,
    t.__reactInternalMemoizedUnmaskedChildContext = e,
    t.__reactInternalMemoizedMaskedChildContext = s),
    s
}
function Pe(t) {
    return t = t.childContextTypes,
    t != null
}
function Hs() {
    G(Te),
    G(ve)
}
function Yl(t, e, n) {
    if (ve.current !== Ut)
        throw Error(x(168));
    q(ve, e),
    q(Te, n)
}
function od(t, e, n) {
    var r = t.stateNode;
    if (e = e.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var s in r)
        if (!(s in e))
            throw Error(x(108, hf(t) || "Unknown", s));
    return Z({}, n, r)
}
function qs(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || Ut,
    sn = ve.current,
    q(ve, t),
    q(Te, Te.current),
    !0
}
function Xl(t, e, n) {
    var r = t.stateNode;
    if (!r)
        throw Error(x(169));
    n ? (t = od(t, e, sn),
    r.__reactInternalMemoizedMergedChildContext = t,
    G(Te),
    G(ve),
    q(ve, t)) : G(Te),
    q(Te, n)
}
var dt = null
  , pi = !1
  , qi = !1;
function ad(t) {
    dt === null ? dt = [t] : dt.push(t)
}
function Pp(t) {
    pi = !0,
    ad(t)
}
function Wt() {
    if (!qi && dt !== null) {
        qi = !0;
        var t = 0
          , e = B;
        try {
            var n = dt;
            for (B = 1; t < n.length; t++) {
                var r = n[t];
                do
                    r = r(!0);
                while (r !== null)
            }
            dt = null,
            pi = !1
        } catch (s) {
            throw dt !== null && (dt = dt.slice(t + 1)),
            Rc(ja, Wt),
            s
        } finally {
            B = e,
            qi = !1
        }
    }
    return null
}
var Tn = []
  , Pn = 0
  , Ks = null
  , Gs = 0
  , Ue = []
  , ze = 0
  , on = null
  , ht = 1
  , ft = "";
function Jt(t, e) {
    Tn[Pn++] = Gs,
    Tn[Pn++] = Ks,
    Ks = t,
    Gs = e
}
function ld(t, e, n) {
    Ue[ze++] = ht,
    Ue[ze++] = ft,
    Ue[ze++] = on,
    on = t;
    var r = ht;
    t = ft;
    var s = 32 - Xe(r) - 1;
    r &= ~(1 << s),
    n += 1;
    var i = 32 - Xe(e) + s;
    if (30 < i) {
        var o = s - s % 5;
        i = (r & (1 << o) - 1).toString(32),
        r >>= o,
        s -= o,
        ht = 1 << 32 - Xe(e) + s | n << s | r,
        ft = i + t
    } else
        ht = 1 << i | n << s | r,
        ft = t
}
function $a(t) {
    t.return !== null && (Jt(t, 1),
    ld(t, 1, 0))
}
function La(t) {
    for (; t === Ks; )
        Ks = Tn[--Pn],
        Tn[Pn] = null,
        Gs = Tn[--Pn],
        Tn[Pn] = null;
    for (; t === on; )
        on = Ue[--ze],
        Ue[ze] = null,
        ft = Ue[--ze],
        Ue[ze] = null,
        ht = Ue[--ze],
        Ue[ze] = null
}
var Ae = null
  , Re = null
  , Q = !1
  , Ye = null;
function ud(t, e) {
    var n = Fe(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = e,
    n.return = t,
    e = t.deletions,
    e === null ? (t.deletions = [n],
    t.flags |= 16) : e.push(n)
}
function Zl(t, e) {
    switch (t.tag) {
    case 5:
        var n = t.type;
        return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e,
        e !== null ? (t.stateNode = e,
        Ae = t,
        Re = At(e.firstChild),
        !0) : !1;
    case 6:
        return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e,
        e !== null ? (t.stateNode = e,
        Ae = t,
        Re = null,
        !0) : !1;
    case 13:
        return e = e.nodeType !== 8 ? null : e,
        e !== null ? (n = on !== null ? {
            id: ht,
            overflow: ft
        } : null,
        t.memoizedState = {
            dehydrated: e,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Fe(18, null, null, 0),
        n.stateNode = e,
        n.return = t,
        t.child = n,
        Ae = t,
        Re = null,
        !0) : !1;
    default:
        return !1
    }
}
function Mo(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}
function Uo(t) {
    if (Q) {
        var e = Re;
        if (e) {
            var n = e;
            if (!Zl(t, e)) {
                if (Mo(t))
                    throw Error(x(418));
                e = At(n.nextSibling);
                var r = Ae;
                e && Zl(t, e) ? ud(r, n) : (t.flags = t.flags & -4097 | 2,
                Q = !1,
                Ae = t)
            }
        } else {
            if (Mo(t))
                throw Error(x(418));
            t.flags = t.flags & -4097 | 2,
            Q = !1,
            Ae = t
        }
    }
}
function eu(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
        t = t.return;
    Ae = t
}
function ds(t) {
    if (t !== Ae)
        return !1;
    if (!Q)
        return eu(t),
        Q = !0,
        !1;
    var e;
    if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type,
    e = e !== "head" && e !== "body" && !Io(t.type, t.memoizedProps)),
    e && (e = Re)) {
        if (Mo(t))
            throw cd(),
            Error(x(418));
        for (; e; )
            ud(t, e),
            e = At(e.nextSibling)
    }
    if (eu(t),
    t.tag === 13) {
        if (t = t.memoizedState,
        t = t !== null ? t.dehydrated : null,
        !t)
            throw Error(x(317));
        e: {
            for (t = t.nextSibling,
            e = 0; t; ) {
                if (t.nodeType === 8) {
                    var n = t.data;
                    if (n === "/$") {
                        if (e === 0) {
                            Re = At(t.nextSibling);
                            break e
                        }
                        e--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || e++
                }
                t = t.nextSibling
            }
            Re = null
        }
    } else
        Re = Ae ? At(t.stateNode.nextSibling) : null;
    return !0
}
function cd() {
    for (var t = Re; t; )
        t = At(t.nextSibling)
}
function Fn() {
    Re = Ae = null,
    Q = !1
}
function Da(t) {
    Ye === null ? Ye = [t] : Ye.push(t)
}
var Np = wt.ReactCurrentBatchConfig;
function rr(t, e, n) {
    if (t = n.ref,
    t !== null && typeof t != "function" && typeof t != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(x(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(x(147, t));
            var s = r
              , i = "" + t;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === i ? e.ref : (e = function(o) {
                var a = s.refs;
                o === null ? delete a[i] : a[i] = o
            }
            ,
            e._stringRef = i,
            e)
        }
        if (typeof t != "string")
            throw Error(x(284));
        if (!n._owner)
            throw Error(x(290, t))
    }
    return t
}
function hs(t, e) {
    throw t = Object.prototype.toString.call(e),
    Error(x(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
}
function tu(t) {
    var e = t._init;
    return e(t._payload)
}
function dd(t) {
    function e(m, f) {
        if (t) {
            var p = m.deletions;
            p === null ? (m.deletions = [f],
            m.flags |= 16) : p.push(f)
        }
    }
    function n(m, f) {
        if (!t)
            return null;
        for (; f !== null; )
            e(m, f),
            f = f.sibling;
        return null
    }
    function r(m, f) {
        for (m = new Map; f !== null; )
            f.key !== null ? m.set(f.key, f) : m.set(f.index, f),
            f = f.sibling;
        return m
    }
    function s(m, f) {
        return m = Dt(m, f),
        m.index = 0,
        m.sibling = null,
        m
    }
    function i(m, f, p) {
        return m.index = p,
        t ? (p = m.alternate,
        p !== null ? (p = p.index,
        p < f ? (m.flags |= 2,
        f) : p) : (m.flags |= 2,
        f)) : (m.flags |= 1048576,
        f)
    }
    function o(m) {
        return t && m.alternate === null && (m.flags |= 2),
        m
    }
    function a(m, f, p, _) {
        return f === null || f.tag !== 6 ? (f = Zi(p, m.mode, _),
        f.return = m,
        f) : (f = s(f, p),
        f.return = m,
        f)
    }
    function l(m, f, p, _) {
        var E = p.type;
        return E === xn ? c(m, f, p.props.children, _, p.key) : f !== null && (f.elementType === E || typeof E == "object" && E !== null && E.$$typeof === St && tu(E) === f.type) ? (_ = s(f, p.props),
        _.ref = rr(m, f, p),
        _.return = m,
        _) : (_ = Is(p.type, p.key, p.props, null, m.mode, _),
        _.ref = rr(m, f, p),
        _.return = m,
        _)
    }
    function u(m, f, p, _) {
        return f === null || f.tag !== 4 || f.stateNode.containerInfo !== p.containerInfo || f.stateNode.implementation !== p.implementation ? (f = eo(p, m.mode, _),
        f.return = m,
        f) : (f = s(f, p.children || []),
        f.return = m,
        f)
    }
    function c(m, f, p, _, E) {
        return f === null || f.tag !== 7 ? (f = rn(p, m.mode, _, E),
        f.return = m,
        f) : (f = s(f, p),
        f.return = m,
        f)
    }
    function d(m, f, p) {
        if (typeof f == "string" && f !== "" || typeof f == "number")
            return f = Zi("" + f, m.mode, p),
            f.return = m,
            f;
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
            case ts:
                return p = Is(f.type, f.key, f.props, null, m.mode, p),
                p.ref = rr(m, null, f),
                p.return = m,
                p;
            case kn:
                return f = eo(f, m.mode, p),
                f.return = m,
                f;
            case St:
                var _ = f._init;
                return d(m, _(f._payload), p)
            }
            if (dr(f) || Xn(f))
                return f = rn(f, m.mode, p, null),
                f.return = m,
                f;
            hs(m, f)
        }
        return null
    }
    function h(m, f, p, _) {
        var E = f !== null ? f.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return E !== null ? null : a(m, f, "" + p, _);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case ts:
                return p.key === E ? l(m, f, p, _) : null;
            case kn:
                return p.key === E ? u(m, f, p, _) : null;
            case St:
                return E = p._init,
                h(m, f, E(p._payload), _)
            }
            if (dr(p) || Xn(p))
                return E !== null ? null : c(m, f, p, _, null);
            hs(m, p)
        }
        return null
    }
    function v(m, f, p, _, E) {
        if (typeof _ == "string" && _ !== "" || typeof _ == "number")
            return m = m.get(p) || null,
            a(f, m, "" + _, E);
        if (typeof _ == "object" && _ !== null) {
            switch (_.$$typeof) {
            case ts:
                return m = m.get(_.key === null ? p : _.key) || null,
                l(f, m, _, E);
            case kn:
                return m = m.get(_.key === null ? p : _.key) || null,
                u(f, m, _, E);
            case St:
                var S = _._init;
                return v(m, f, p, S(_._payload), E)
            }
            if (dr(_) || Xn(_))
                return m = m.get(p) || null,
                c(f, m, _, E, null);
            hs(f, _)
        }
        return null
    }
    function y(m, f, p, _) {
        for (var E = null, S = null, b = f, T = f = 0, z = null; b !== null && T < p.length; T++) {
            b.index > T ? (z = b,
            b = null) : z = b.sibling;
            var N = h(m, b, p[T], _);
            if (N === null) {
                b === null && (b = z);
                break
            }
            t && b && N.alternate === null && e(m, b),
            f = i(N, f, T),
            S === null ? E = N : S.sibling = N,
            S = N,
            b = z
        }
        if (T === p.length)
            return n(m, b),
            Q && Jt(m, T),
            E;
        if (b === null) {
            for (; T < p.length; T++)
                b = d(m, p[T], _),
                b !== null && (f = i(b, f, T),
                S === null ? E = b : S.sibling = b,
                S = b);
            return Q && Jt(m, T),
            E
        }
        for (b = r(m, b); T < p.length; T++)
            z = v(b, m, T, p[T], _),
            z !== null && (t && z.alternate !== null && b.delete(z.key === null ? T : z.key),
            f = i(z, f, T),
            S === null ? E = z : S.sibling = z,
            S = z);
        return t && b.forEach(function($) {
            return e(m, $)
        }),
        Q && Jt(m, T),
        E
    }
    function w(m, f, p, _) {
        var E = Xn(p);
        if (typeof E != "function")
            throw Error(x(150));
        if (p = E.call(p),
        p == null)
            throw Error(x(151));
        for (var S = E = null, b = f, T = f = 0, z = null, N = p.next(); b !== null && !N.done; T++,
        N = p.next()) {
            b.index > T ? (z = b,
            b = null) : z = b.sibling;
            var $ = h(m, b, N.value, _);
            if ($ === null) {
                b === null && (b = z);
                break
            }
            t && b && $.alternate === null && e(m, b),
            f = i($, f, T),
            S === null ? E = $ : S.sibling = $,
            S = $,
            b = z
        }
        if (N.done)
            return n(m, b),
            Q && Jt(m, T),
            E;
        if (b === null) {
            for (; !N.done; T++,
            N = p.next())
                N = d(m, N.value, _),
                N !== null && (f = i(N, f, T),
                S === null ? E = N : S.sibling = N,
                S = N);
            return Q && Jt(m, T),
            E
        }
        for (b = r(m, b); !N.done; T++,
        N = p.next())
            N = v(b, m, T, N.value, _),
            N !== null && (t && N.alternate !== null && b.delete(N.key === null ? T : N.key),
            f = i(N, f, T),
            S === null ? E = N : S.sibling = N,
            S = N);
        return t && b.forEach(function(L) {
            return e(m, L)
        }),
        Q && Jt(m, T),
        E
    }
    function k(m, f, p, _) {
        if (typeof p == "object" && p !== null && p.type === xn && p.key === null && (p = p.props.children),
        typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case ts:
                e: {
                    for (var E = p.key, S = f; S !== null; ) {
                        if (S.key === E) {
                            if (E = p.type,
                            E === xn) {
                                if (S.tag === 7) {
                                    n(m, S.sibling),
                                    f = s(S, p.props.children),
                                    f.return = m,
                                    m = f;
                                    break e
                                }
                            } else if (S.elementType === E || typeof E == "object" && E !== null && E.$$typeof === St && tu(E) === S.type) {
                                n(m, S.sibling),
                                f = s(S, p.props),
                                f.ref = rr(m, S, p),
                                f.return = m,
                                m = f;
                                break e
                            }
                            n(m, S);
                            break
                        } else
                            e(m, S);
                        S = S.sibling
                    }
                    p.type === xn ? (f = rn(p.props.children, m.mode, _, p.key),
                    f.return = m,
                    m = f) : (_ = Is(p.type, p.key, p.props, null, m.mode, _),
                    _.ref = rr(m, f, p),
                    _.return = m,
                    m = _)
                }
                return o(m);
            case kn:
                e: {
                    for (S = p.key; f !== null; ) {
                        if (f.key === S)
                            if (f.tag === 4 && f.stateNode.containerInfo === p.containerInfo && f.stateNode.implementation === p.implementation) {
                                n(m, f.sibling),
                                f = s(f, p.children || []),
                                f.return = m,
                                m = f;
                                break e
                            } else {
                                n(m, f);
                                break
                            }
                        else
                            e(m, f);
                        f = f.sibling
                    }
                    f = eo(p, m.mode, _),
                    f.return = m,
                    m = f
                }
                return o(m);
            case St:
                return S = p._init,
                k(m, f, S(p._payload), _)
            }
            if (dr(p))
                return y(m, f, p, _);
            if (Xn(p))
                return w(m, f, p, _);
            hs(m, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p,
        f !== null && f.tag === 6 ? (n(m, f.sibling),
        f = s(f, p),
        f.return = m,
        m = f) : (n(m, f),
        f = Zi(p, m.mode, _),
        f.return = m,
        m = f),
        o(m)) : n(m, f)
    }
    return k
}
var Bn = dd(!0)
  , hd = dd(!1)
  , Js = Bt(null)
  , Qs = null
  , Nn = null
  , Ma = null;
function Ua() {
    Ma = Nn = Qs = null
}
function za(t) {
    var e = Js.current;
    G(Js),
    t._currentValue = e
}
function zo(t, e, n) {
    for (; t !== null; ) {
        var r = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e,
        r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
        t === n)
            break;
        t = t.return
    }
}
function Dn(t, e) {
    Qs = t,
    Ma = Nn = null,
    t = t.dependencies,
    t !== null && t.firstContext !== null && (t.lanes & e && (Ce = !0),
    t.firstContext = null)
}
function Ve(t) {
    var e = t._currentValue;
    if (Ma !== t)
        if (t = {
            context: t,
            memoizedValue: e,
            next: null
        },
        Nn === null) {
            if (Qs === null)
                throw Error(x(308));
            Nn = t,
            Qs.dependencies = {
                lanes: 0,
                firstContext: t
            }
        } else
            Nn = Nn.next = t;
    return e
}
var en = null;
function Fa(t) {
    en === null ? en = [t] : en.push(t)
}
function fd(t, e, n, r) {
    var s = e.interleaved;
    return s === null ? (n.next = n,
    Fa(e)) : (n.next = s.next,
    s.next = n),
    e.interleaved = n,
    vt(t, r)
}
function vt(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e),
    n = t,
    t = t.return; t !== null; )
        t.childLanes |= e,
        n = t.alternate,
        n !== null && (n.childLanes |= e),
        n = t,
        t = t.return;
    return n.tag === 3 ? n.stateNode : null
}
var Et = !1;
function Ba(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function pd(t, e) {
    t = t.updateQueue,
    e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
    })
}
function pt(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function It(t, e, n) {
    var r = t.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    U & 2) {
        var s = r.pending;
        return s === null ? e.next = e : (e.next = s.next,
        s.next = e),
        r.pending = e,
        vt(t, n)
    }
    return s = r.interleaved,
    s === null ? (e.next = e,
    Fa(r)) : (e.next = s.next,
    s.next = e),
    r.interleaved = e,
    vt(t, n)
}
function Ts(t, e, n) {
    if (e = e.updateQueue,
    e !== null && (e = e.shared,
    (n & 4194240) !== 0)) {
        var r = e.lanes;
        r &= t.pendingLanes,
        n |= r,
        e.lanes = n,
        Ca(t, n)
    }
}
function nu(t, e) {
    var n = t.updateQueue
      , r = t.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var s = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? s = i = o : i = i.next = o,
                n = n.next
            } while (n !== null);
            i === null ? s = i = e : i = i.next = e
        } else
            s = i = e;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        t.updateQueue = n;
        return
    }
    t = n.lastBaseUpdate,
    t === null ? n.firstBaseUpdate = e : t.next = e,
    n.lastBaseUpdate = e
}
function Ys(t, e, n, r) {
    var s = t.updateQueue;
    Et = !1;
    var i = s.firstBaseUpdate
      , o = s.lastBaseUpdate
      , a = s.shared.pending;
    if (a !== null) {
        s.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        o === null ? i = u : o.next = u,
        o = l;
        var c = t.alternate;
        c !== null && (c = c.updateQueue,
        a = c.lastBaseUpdate,
        a !== o && (a === null ? c.firstBaseUpdate = u : a.next = u,
        c.lastBaseUpdate = l))
    }
    if (i !== null) {
        var d = s.baseState;
        o = 0,
        c = u = l = null,
        a = i;
        do {
            var h = a.lane
              , v = a.eventTime;
            if ((r & h) === h) {
                c !== null && (c = c.next = {
                    eventTime: v,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var y = t
                      , w = a;
                    switch (h = e,
                    v = n,
                    w.tag) {
                    case 1:
                        if (y = w.payload,
                        typeof y == "function") {
                            d = y.call(v, d, h);
                            break e
                        }
                        d = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = w.payload,
                        h = typeof y == "function" ? y.call(v, d, h) : y,
                        h == null)
                            break e;
                        d = Z({}, d, h);
                        break e;
                    case 2:
                        Et = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (t.flags |= 64,
                h = s.effects,
                h === null ? s.effects = [a] : h.push(a))
            } else
                v = {
                    eventTime: v,
                    lane: h,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = v,
                l = d) : c = c.next = v,
                o |= h;
            if (a = a.next,
            a === null) {
                if (a = s.shared.pending,
                a === null)
                    break;
                h = a,
                a = h.next,
                h.next = null,
                s.lastBaseUpdate = h,
                s.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = d),
        s.baseState = l,
        s.firstBaseUpdate = u,
        s.lastBaseUpdate = c,
        e = s.shared.interleaved,
        e !== null) {
            s = e;
            do
                o |= s.lane,
                s = s.next;
            while (s !== e)
        } else
            i === null && (s.shared.lanes = 0);
        ln |= o,
        t.lanes = o,
        t.memoizedState = d
    }
}
function ru(t, e, n) {
    if (t = e.effects,
    e.effects = null,
    t !== null)
        for (e = 0; e < t.length; e++) {
            var r = t[e]
              , s = r.callback;
            if (s !== null) {
                if (r.callback = null,
                r = n,
                typeof s != "function")
                    throw Error(x(191, s));
                s.call(r)
            }
        }
}
var Jr = {}
  , at = Bt(Jr)
  , Mr = Bt(Jr)
  , Ur = Bt(Jr);
function tn(t) {
    if (t === Jr)
        throw Error(x(174));
    return t
}
function Wa(t, e) {
    switch (q(Ur, e),
    q(Mr, t),
    q(at, Jr),
    t = e.nodeType,
    t) {
    case 9:
    case 11:
        e = (e = e.documentElement) ? e.namespaceURI : _o(null, "");
        break;
    default:
        t = t === 8 ? e.parentNode : e,
        e = t.namespaceURI || null,
        t = t.tagName,
        e = _o(e, t)
    }
    G(at),
    q(at, e)
}
function Wn() {
    G(at),
    G(Mr),
    G(Ur)
}
function md(t) {
    tn(Ur.current);
    var e = tn(at.current)
      , n = _o(e, t.type);
    e !== n && (q(Mr, t),
    q(at, n))
}
function Va(t) {
    Mr.current === t && (G(at),
    G(Mr))
}
var Y = Bt(0);
function Xs(t) {
    for (var e = t; e !== null; ) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return e
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128)
                return e
        } else if (e.child !== null) {
            e.child.return = e,
            e = e.child;
            continue
        }
        if (e === t)
            break;
        for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
                return null;
            e = e.return
        }
        e.sibling.return = e.return,
        e = e.sibling
    }
    return null
}
var Ki = [];
function Ha() {
    for (var t = 0; t < Ki.length; t++)
        Ki[t]._workInProgressVersionPrimary = null;
    Ki.length = 0
}
var Ps = wt.ReactCurrentDispatcher
  , Gi = wt.ReactCurrentBatchConfig
  , an = 0
  , X = null
  , oe = null
  , le = null
  , Zs = !1
  , _r = !1
  , zr = 0
  , Op = 0;
function pe() {
    throw Error(x(321))
}
function qa(t, e) {
    if (e === null)
        return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
        if (!et(t[n], e[n]))
            return !1;
    return !0
}
function Ka(t, e, n, r, s, i) {
    if (an = i,
    X = e,
    e.memoizedState = null,
    e.updateQueue = null,
    e.lanes = 0,
    Ps.current = t === null || t.memoizedState === null ? $p : Lp,
    t = n(r, s),
    _r) {
        i = 0;
        do {
            if (_r = !1,
            zr = 0,
            25 <= i)
                throw Error(x(301));
            i += 1,
            le = oe = null,
            e.updateQueue = null,
            Ps.current = Dp,
            t = n(r, s)
        } while (_r)
    }
    if (Ps.current = ei,
    e = oe !== null && oe.next !== null,
    an = 0,
    le = oe = X = null,
    Zs = !1,
    e)
        throw Error(x(300));
    return t
}
function Ga() {
    var t = zr !== 0;
    return zr = 0,
    t
}
function rt() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return le === null ? X.memoizedState = le = t : le = le.next = t,
    le
}
function He() {
    if (oe === null) {
        var t = X.alternate;
        t = t !== null ? t.memoizedState : null
    } else
        t = oe.next;
    var e = le === null ? X.memoizedState : le.next;
    if (e !== null)
        le = e,
        oe = t;
    else {
        if (t === null)
            throw Error(x(310));
        oe = t,
        t = {
            memoizedState: oe.memoizedState,
            baseState: oe.baseState,
            baseQueue: oe.baseQueue,
            queue: oe.queue,
            next: null
        },
        le === null ? X.memoizedState = le = t : le = le.next = t
    }
    return le
}
function Fr(t, e) {
    return typeof e == "function" ? e(t) : e
}
function Ji(t) {
    var e = He()
      , n = e.queue;
    if (n === null)
        throw Error(x(311));
    n.lastRenderedReducer = t;
    var r = oe
      , s = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (s !== null) {
            var o = s.next;
            s.next = i.next,
            i.next = o
        }
        r.baseQueue = s = i,
        n.pending = null
    }
    if (s !== null) {
        i = s.next,
        r = r.baseState;
        var a = o = null
          , l = null
          , u = i;
        do {
            var c = u.lane;
            if ((an & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : t(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d,
                o = r) : l = l.next = d,
                X.lanes |= c,
                ln |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? o = r : l.next = a,
        et(r, e.memoizedState) || (Ce = !0),
        e.memoizedState = r,
        e.baseState = o,
        e.baseQueue = l,
        n.lastRenderedState = r
    }
    if (t = n.interleaved,
    t !== null) {
        s = t;
        do
            i = s.lane,
            X.lanes |= i,
            ln |= i,
            s = s.next;
        while (s !== t)
    } else
        s === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch]
}
function Qi(t) {
    var e = He()
      , n = e.queue;
    if (n === null)
        throw Error(x(311));
    n.lastRenderedReducer = t;
    var r = n.dispatch
      , s = n.pending
      , i = e.memoizedState;
    if (s !== null) {
        n.pending = null;
        var o = s = s.next;
        do
            i = t(i, o.action),
            o = o.next;
        while (o !== s);
        et(i, e.memoizedState) || (Ce = !0),
        e.memoizedState = i,
        e.baseQueue === null && (e.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function gd() {}
function vd(t, e) {
    var n = X
      , r = He()
      , s = e()
      , i = !et(r.memoizedState, s);
    if (i && (r.memoizedState = s,
    Ce = !0),
    r = r.queue,
    Ja(_d.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || i || le !== null && le.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Br(9, wd.bind(null, n, r, s, e), void 0, null),
        ue === null)
            throw Error(x(349));
        an & 30 || yd(n, e, s)
    }
    return s
}
function yd(t, e, n) {
    t.flags |= 16384,
    t = {
        getSnapshot: e,
        value: n
    },
    e = X.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    X.updateQueue = e,
    e.stores = [t]) : (n = e.stores,
    n === null ? e.stores = [t] : n.push(t))
}
function wd(t, e, n, r) {
    e.value = n,
    e.getSnapshot = r,
    kd(e) && xd(t)
}
function _d(t, e, n) {
    return n(function() {
        kd(e) && xd(t)
    })
}
function kd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !et(t, n)
    } catch {
        return !0
    }
}
function xd(t) {
    var e = vt(t, 1);
    e !== null && Ze(e, t, 1, -1)
}
function su(t) {
    var e = rt();
    return typeof t == "function" && (t = t()),
    e.memoizedState = e.baseState = t,
    t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fr,
        lastRenderedState: t
    },
    e.queue = t,
    t = t.dispatch = Ip.bind(null, X, t),
    [e.memoizedState, t]
}
function Br(t, e, n, r) {
    return t = {
        tag: t,
        create: e,
        destroy: n,
        deps: r,
        next: null
    },
    e = X.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    X.updateQueue = e,
    e.lastEffect = t.next = t) : (n = e.lastEffect,
    n === null ? e.lastEffect = t.next = t : (r = n.next,
    n.next = t,
    t.next = r,
    e.lastEffect = t)),
    t
}
function Sd() {
    return He().memoizedState
}
function Ns(t, e, n, r) {
    var s = rt();
    X.flags |= t,
    s.memoizedState = Br(1 | e, n, void 0, r === void 0 ? null : r)
}
function mi(t, e, n, r) {
    var s = He();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (oe !== null) {
        var o = oe.memoizedState;
        if (i = o.destroy,
        r !== null && qa(r, o.deps)) {
            s.memoizedState = Br(e, n, i, r);
            return
        }
    }
    X.flags |= t,
    s.memoizedState = Br(1 | e, n, i, r)
}
function iu(t, e) {
    return Ns(8390656, 8, t, e)
}
function Ja(t, e) {
    return mi(2048, 8, t, e)
}
function Ed(t, e) {
    return mi(4, 2, t, e)
}
function bd(t, e) {
    return mi(4, 4, t, e)
}
function jd(t, e) {
    if (typeof e == "function")
        return t = t(),
        e(t),
        function() {
            e(null)
        }
        ;
    if (e != null)
        return t = t(),
        e.current = t,
        function() {
            e.current = null
        }
}
function Cd(t, e, n) {
    return n = n != null ? n.concat([t]) : null,
    mi(4, 4, jd.bind(null, e, t), n)
}
function Qa() {}
function Td(t, e) {
    var n = He();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && qa(e, r[1]) ? r[0] : (n.memoizedState = [t, e],
    t)
}
function Pd(t, e) {
    var n = He();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && qa(e, r[1]) ? r[0] : (t = t(),
    n.memoizedState = [t, e],
    t)
}
function Nd(t, e, n) {
    return an & 21 ? (et(n, e) || (n = $c(),
    X.lanes |= n,
    ln |= n,
    t.baseState = !0),
    e) : (t.baseState && (t.baseState = !1,
    Ce = !0),
    t.memoizedState = n)
}
function Rp(t, e) {
    var n = B;
    B = n !== 0 && 4 > n ? n : 4,
    t(!0);
    var r = Gi.transition;
    Gi.transition = {};
    try {
        t(!1),
        e()
    } finally {
        B = n,
        Gi.transition = r
    }
}
function Od() {
    return He().memoizedState
}
function Ap(t, e, n) {
    var r = Lt(t);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Rd(t))
        Ad(e, n);
    else if (n = fd(t, e, n, r),
    n !== null) {
        var s = ke();
        Ze(n, t, r, s),
        Id(n, e, r)
    }
}
function Ip(t, e, n) {
    var r = Lt(t)
      , s = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Rd(t))
        Ad(e, s);
    else {
        var i = t.alternate;
        if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer,
        i !== null))
            try {
                var o = e.lastRenderedState
                  , a = i(o, n);
                if (s.hasEagerState = !0,
                s.eagerState = a,
                et(a, o)) {
                    var l = e.interleaved;
                    l === null ? (s.next = s,
                    Fa(e)) : (s.next = l.next,
                    l.next = s),
                    e.interleaved = s;
                    return
                }
            } catch {} finally {}
        n = fd(t, e, s, r),
        n !== null && (s = ke(),
        Ze(n, t, r, s),
        Id(n, e, r))
    }
}
function Rd(t) {
    var e = t.alternate;
    return t === X || e !== null && e === X
}
function Ad(t, e) {
    _r = Zs = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next,
    n.next = e),
    t.pending = e
}
function Id(t, e, n) {
    if (n & 4194240) {
        var r = e.lanes;
        r &= t.pendingLanes,
        n |= r,
        e.lanes = n,
        Ca(t, n)
    }
}
var ei = {
    readContext: Ve,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1
}
  , $p = {
    readContext: Ve,
    useCallback: function(t, e) {
        return rt().memoizedState = [t, e === void 0 ? null : e],
        t
    },
    useContext: Ve,
    useEffect: iu,
    useImperativeHandle: function(t, e, n) {
        return n = n != null ? n.concat([t]) : null,
        Ns(4194308, 4, jd.bind(null, e, t), n)
    },
    useLayoutEffect: function(t, e) {
        return Ns(4194308, 4, t, e)
    },
    useInsertionEffect: function(t, e) {
        return Ns(4, 2, t, e)
    },
    useMemo: function(t, e) {
        var n = rt();
        return e = e === void 0 ? null : e,
        t = t(),
        n.memoizedState = [t, e],
        t
    },
    useReducer: function(t, e, n) {
        var r = rt();
        return e = n !== void 0 ? n(e) : e,
        r.memoizedState = r.baseState = e,
        t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: e
        },
        r.queue = t,
        t = t.dispatch = Ap.bind(null, X, t),
        [r.memoizedState, t]
    },
    useRef: function(t) {
        var e = rt();
        return t = {
            current: t
        },
        e.memoizedState = t
    },
    useState: su,
    useDebugValue: Qa,
    useDeferredValue: function(t) {
        return rt().memoizedState = t
    },
    useTransition: function() {
        var t = su(!1)
          , e = t[0];
        return t = Rp.bind(null, t[1]),
        rt().memoizedState = t,
        [e, t]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(t, e, n) {
        var r = X
          , s = rt();
        if (Q) {
            if (n === void 0)
                throw Error(x(407));
            n = n()
        } else {
            if (n = e(),
            ue === null)
                throw Error(x(349));
            an & 30 || yd(r, e, n)
        }
        s.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: e
        };
        return s.queue = i,
        iu(_d.bind(null, r, i, t), [t]),
        r.flags |= 2048,
        Br(9, wd.bind(null, r, i, n, e), void 0, null),
        n
    },
    useId: function() {
        var t = rt()
          , e = ue.identifierPrefix;
        if (Q) {
            var n = ft
              , r = ht;
            n = (r & ~(1 << 32 - Xe(r) - 1)).toString(32) + n,
            e = ":" + e + "R" + n,
            n = zr++,
            0 < n && (e += "H" + n.toString(32)),
            e += ":"
        } else
            n = Op++,
            e = ":" + e + "r" + n.toString(32) + ":";
        return t.memoizedState = e
    },
    unstable_isNewReconciler: !1
}
  , Lp = {
    readContext: Ve,
    useCallback: Td,
    useContext: Ve,
    useEffect: Ja,
    useImperativeHandle: Cd,
    useInsertionEffect: Ed,
    useLayoutEffect: bd,
    useMemo: Pd,
    useReducer: Ji,
    useRef: Sd,
    useState: function() {
        return Ji(Fr)
    },
    useDebugValue: Qa,
    useDeferredValue: function(t) {
        var e = He();
        return Nd(e, oe.memoizedState, t)
    },
    useTransition: function() {
        var t = Ji(Fr)[0]
          , e = He().memoizedState;
        return [t, e]
    },
    useMutableSource: gd,
    useSyncExternalStore: vd,
    useId: Od,
    unstable_isNewReconciler: !1
}
  , Dp = {
    readContext: Ve,
    useCallback: Td,
    useContext: Ve,
    useEffect: Ja,
    useImperativeHandle: Cd,
    useInsertionEffect: Ed,
    useLayoutEffect: bd,
    useMemo: Pd,
    useReducer: Qi,
    useRef: Sd,
    useState: function() {
        return Qi(Fr)
    },
    useDebugValue: Qa,
    useDeferredValue: function(t) {
        var e = He();
        return oe === null ? e.memoizedState = t : Nd(e, oe.memoizedState, t)
    },
    useTransition: function() {
        var t = Qi(Fr)[0]
          , e = He().memoizedState;
        return [t, e]
    },
    useMutableSource: gd,
    useSyncExternalStore: vd,
    useId: Od,
    unstable_isNewReconciler: !1
};
function Ge(t, e) {
    if (t && t.defaultProps) {
        e = Z({}, e),
        t = t.defaultProps;
        for (var n in t)
            e[n] === void 0 && (e[n] = t[n]);
        return e
    }
    return e
}
function Fo(t, e, n, r) {
    e = t.memoizedState,
    n = n(r, e),
    n = n == null ? e : Z({}, e, n),
    t.memoizedState = n,
    t.lanes === 0 && (t.updateQueue.baseState = n)
}
var gi = {
    isMounted: function(t) {
        return (t = t._reactInternals) ? dn(t) === t : !1
    },
    enqueueSetState: function(t, e, n) {
        t = t._reactInternals;
        var r = ke()
          , s = Lt(t)
          , i = pt(r, s);
        i.payload = e,
        n != null && (i.callback = n),
        e = It(t, i, s),
        e !== null && (Ze(e, t, s, r),
        Ts(e, t, s))
    },
    enqueueReplaceState: function(t, e, n) {
        t = t._reactInternals;
        var r = ke()
          , s = Lt(t)
          , i = pt(r, s);
        i.tag = 1,
        i.payload = e,
        n != null && (i.callback = n),
        e = It(t, i, s),
        e !== null && (Ze(e, t, s, r),
        Ts(e, t, s))
    },
    enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var n = ke()
          , r = Lt(t)
          , s = pt(n, r);
        s.tag = 2,
        e != null && (s.callback = e),
        e = It(t, s, r),
        e !== null && (Ze(e, t, r, n),
        Ts(e, t, r))
    }
};
function ou(t, e, n, r, s, i, o) {
    return t = t.stateNode,
    typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, i, o) : e.prototype && e.prototype.isPureReactComponent ? !Ir(n, r) || !Ir(s, i) : !0
}
function $d(t, e, n) {
    var r = !1
      , s = Ut
      , i = e.contextType;
    return typeof i == "object" && i !== null ? i = Ve(i) : (s = Pe(e) ? sn : ve.current,
    r = e.contextTypes,
    i = (r = r != null) ? zn(t, s) : Ut),
    e = new e(n,i),
    t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null,
    e.updater = gi,
    t.stateNode = e,
    e._reactInternals = t,
    r && (t = t.stateNode,
    t.__reactInternalMemoizedUnmaskedChildContext = s,
    t.__reactInternalMemoizedMaskedChildContext = i),
    e
}
function au(t, e, n, r) {
    t = e.state,
    typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && gi.enqueueReplaceState(e, e.state, null)
}
function Bo(t, e, n, r) {
    var s = t.stateNode;
    s.props = n,
    s.state = t.memoizedState,
    s.refs = {},
    Ba(t);
    var i = e.contextType;
    typeof i == "object" && i !== null ? s.context = Ve(i) : (i = Pe(e) ? sn : ve.current,
    s.context = zn(t, i)),
    s.state = t.memoizedState,
    i = e.getDerivedStateFromProps,
    typeof i == "function" && (Fo(t, e, i, n),
    s.state = t.memoizedState),
    typeof e.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (e = s.state,
    typeof s.componentWillMount == "function" && s.componentWillMount(),
    typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
    e !== s.state && gi.enqueueReplaceState(s, s.state, null),
    Ys(t, n, s, r),
    s.state = t.memoizedState),
    typeof s.componentDidMount == "function" && (t.flags |= 4194308)
}
function Vn(t, e) {
    try {
        var n = ""
          , r = e;
        do
            n += df(r),
            r = r.return;
        while (r);
        var s = n
    } catch (i) {
        s = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: t,
        source: e,
        stack: s,
        digest: null
    }
}
function Yi(t, e, n) {
    return {
        value: t,
        source: null,
        stack: n ?? null,
        digest: e ?? null
    }
}
function Wo(t, e) {
    try {
        console.error(e.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Mp = typeof WeakMap == "function" ? WeakMap : Map;
function Ld(t, e, n) {
    n = pt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = e.value;
    return n.callback = function() {
        ni || (ni = !0,
        Zo = r),
        Wo(t, e)
    }
    ,
    n
}
function Dd(t, e, n) {
    n = pt(-1, n),
    n.tag = 3;
    var r = t.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var s = e.value;
        n.payload = function() {
            return r(s)
        }
        ,
        n.callback = function() {
            Wo(t, e)
        }
    }
    var i = t.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Wo(t, e),
        typeof r != "function" && ($t === null ? $t = new Set([this]) : $t.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function lu(t, e, n) {
    var r = t.pingCache;
    if (r === null) {
        r = t.pingCache = new Mp;
        var s = new Set;
        r.set(e, s)
    } else
        s = r.get(e),
        s === void 0 && (s = new Set,
        r.set(e, s));
    s.has(n) || (s.add(n),
    t = Xp.bind(null, t, e, n),
    e.then(t, t))
}
function uu(t) {
    do {
        var e;
        if ((e = t.tag === 13) && (e = t.memoizedState,
        e = e !== null ? e.dehydrated !== null : !0),
        e)
            return t;
        t = t.return
    } while (t !== null);
    return null
}
function cu(t, e, n, r, s) {
    return t.mode & 1 ? (t.flags |= 65536,
    t.lanes = s,
    t) : (t === e ? t.flags |= 65536 : (t.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = pt(-1, 1),
    e.tag = 2,
    It(n, e, 1))),
    n.lanes |= 1),
    t)
}
var Up = wt.ReactCurrentOwner
  , Ce = !1;
function _e(t, e, n, r) {
    e.child = t === null ? hd(e, null, n, r) : Bn(e, t.child, n, r)
}
function du(t, e, n, r, s) {
    n = n.render;
    var i = e.ref;
    return Dn(e, s),
    r = Ka(t, e, n, r, i, s),
    n = Ga(),
    t !== null && !Ce ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~s,
    yt(t, e, s)) : (Q && n && $a(e),
    e.flags |= 1,
    _e(t, e, r, s),
    e.child)
}
function hu(t, e, n, r, s) {
    if (t === null) {
        var i = n.type;
        return typeof i == "function" && !sl(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15,
        e.type = i,
        Md(t, e, i, r, s)) : (t = Is(n.type, null, r, e, e.mode, s),
        t.ref = e.ref,
        t.return = e,
        e.child = t)
    }
    if (i = t.child,
    !(t.lanes & s)) {
        var o = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Ir,
        n(o, r) && t.ref === e.ref)
            return yt(t, e, s)
    }
    return e.flags |= 1,
    t = Dt(i, r),
    t.ref = e.ref,
    t.return = e,
    e.child = t
}
function Md(t, e, n, r, s) {
    if (t !== null) {
        var i = t.memoizedProps;
        if (Ir(i, r) && t.ref === e.ref)
            if (Ce = !1,
            e.pendingProps = r = i,
            (t.lanes & s) !== 0)
                t.flags & 131072 && (Ce = !0);
            else
                return e.lanes = t.lanes,
                yt(t, e, s)
    }
    return Vo(t, e, n, r, s)
}
function Ud(t, e, n) {
    var r = e.pendingProps
      , s = r.children
      , i = t !== null ? t.memoizedState : null;
    if (r.mode === "hidden")
        if (!(e.mode & 1))
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            q(Rn, Oe),
            Oe |= n;
        else {
            if (!(n & 1073741824))
                return t = i !== null ? i.baseLanes | n : n,
                e.lanes = e.childLanes = 1073741824,
                e.memoizedState = {
                    baseLanes: t,
                    cachePool: null,
                    transitions: null
                },
                e.updateQueue = null,
                q(Rn, Oe),
                Oe |= t,
                null;
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            q(Rn, Oe),
            Oe |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        e.memoizedState = null) : r = n,
        q(Rn, Oe),
        Oe |= r;
    return _e(t, e, s, n),
    e.child
}
function zd(t, e) {
    var n = e.ref;
    (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512,
    e.flags |= 2097152)
}
function Vo(t, e, n, r, s) {
    var i = Pe(n) ? sn : ve.current;
    return i = zn(e, i),
    Dn(e, s),
    n = Ka(t, e, n, r, i, s),
    r = Ga(),
    t !== null && !Ce ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~s,
    yt(t, e, s)) : (Q && r && $a(e),
    e.flags |= 1,
    _e(t, e, n, s),
    e.child)
}
function fu(t, e, n, r, s) {
    if (Pe(n)) {
        var i = !0;
        qs(e)
    } else
        i = !1;
    if (Dn(e, s),
    e.stateNode === null)
        Os(t, e),
        $d(e, n, r),
        Bo(e, n, r, s),
        r = !0;
    else if (t === null) {
        var o = e.stateNode
          , a = e.memoizedProps;
        o.props = a;
        var l = o.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = Ve(u) : (u = Pe(n) ? sn : ve.current,
        u = zn(e, u));
        var c = n.getDerivedStateFromProps
          , d = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || l !== u) && au(e, o, r, u),
        Et = !1;
        var h = e.memoizedState;
        o.state = h,
        Ys(e, r, o, s),
        l = e.memoizedState,
        a !== r || h !== l || Te.current || Et ? (typeof c == "function" && (Fo(e, n, c, r),
        l = e.memoizedState),
        (a = Et || ou(e, n, a, r, h, l, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        e.memoizedProps = r,
        e.memoizedState = l),
        o.props = r,
        o.state = l,
        o.context = u,
        r = a) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        r = !1)
    } else {
        o = e.stateNode,
        pd(t, e),
        a = e.memoizedProps,
        u = e.type === e.elementType ? a : Ge(e.type, a),
        o.props = u,
        d = e.pendingProps,
        h = o.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = Ve(l) : (l = Pe(n) ? sn : ve.current,
        l = zn(e, l));
        var v = n.getDerivedStateFromProps;
        (c = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== d || h !== l) && au(e, o, r, l),
        Et = !1,
        h = e.memoizedState,
        o.state = h,
        Ys(e, r, o, s);
        var y = e.memoizedState;
        a !== d || h !== y || Te.current || Et ? (typeof v == "function" && (Fo(e, n, v, r),
        y = e.memoizedState),
        (u = Et || ou(e, n, u, r, h, y, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, l),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, l)),
        typeof o.componentDidUpdate == "function" && (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === t.memoizedProps && h === t.memoizedState || (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024),
        e.memoizedProps = r,
        e.memoizedState = y),
        o.props = r,
        o.state = y,
        o.context = l,
        r = u) : (typeof o.componentDidUpdate != "function" || a === t.memoizedProps && h === t.memoizedState || (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024),
        r = !1)
    }
    return Ho(t, e, n, r, i, s)
}
function Ho(t, e, n, r, s, i) {
    zd(t, e);
    var o = (e.flags & 128) !== 0;
    if (!r && !o)
        return s && Xl(e, n, !1),
        yt(t, e, i);
    r = e.stateNode,
    Up.current = e;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return e.flags |= 1,
    t !== null && o ? (e.child = Bn(e, t.child, null, i),
    e.child = Bn(e, null, a, i)) : _e(t, e, a, i),
    e.memoizedState = r.state,
    s && Xl(e, n, !0),
    e.child
}
function Fd(t) {
    var e = t.stateNode;
    e.pendingContext ? Yl(t, e.pendingContext, e.pendingContext !== e.context) : e.context && Yl(t, e.context, !1),
    Wa(t, e.containerInfo)
}
function pu(t, e, n, r, s) {
    return Fn(),
    Da(s),
    e.flags |= 256,
    _e(t, e, n, r),
    e.child
}
var qo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Ko(t) {
    return {
        baseLanes: t,
        cachePool: null,
        transitions: null
    }
}
function Bd(t, e, n) {
    var r = e.pendingProps, s = Y.current, i = !1, o = (e.flags & 128) !== 0, a;
    if ((a = o) || (a = t !== null && t.memoizedState === null ? !1 : (s & 2) !== 0),
    a ? (i = !0,
    e.flags &= -129) : (t === null || t.memoizedState !== null) && (s |= 1),
    q(Y, s & 1),
    t === null)
        return Uo(e),
        t = e.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1,
        null) : (o = r.children,
        t = r.fallback,
        i ? (r = e.mode,
        i = e.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = o) : i = wi(o, r, 0, null),
        t = rn(t, r, n, null),
        i.return = e,
        t.return = e,
        i.sibling = t,
        e.child = i,
        e.child.memoizedState = Ko(n),
        e.memoizedState = qo,
        t) : Ya(e, o));
    if (s = t.memoizedState,
    s !== null && (a = s.dehydrated,
    a !== null))
        return zp(t, e, o, r, a, s, n);
    if (i) {
        i = r.fallback,
        o = e.mode,
        s = t.child,
        a = s.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && e.child !== s ? (r = e.child,
        r.childLanes = 0,
        r.pendingProps = l,
        e.deletions = null) : (r = Dt(s, l),
        r.subtreeFlags = s.subtreeFlags & 14680064),
        a !== null ? i = Dt(a, i) : (i = rn(i, o, n, null),
        i.flags |= 2),
        i.return = e,
        r.return = e,
        r.sibling = i,
        e.child = r,
        r = i,
        i = e.child,
        o = t.child.memoizedState,
        o = o === null ? Ko(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        i.memoizedState = o,
        i.childLanes = t.childLanes & ~n,
        e.memoizedState = qo,
        r
    }
    return i = t.child,
    t = i.sibling,
    r = Dt(i, {
        mode: "visible",
        children: r.children
    }),
    !(e.mode & 1) && (r.lanes = n),
    r.return = e,
    r.sibling = null,
    t !== null && (n = e.deletions,
    n === null ? (e.deletions = [t],
    e.flags |= 16) : n.push(t)),
    e.child = r,
    e.memoizedState = null,
    r
}
function Ya(t, e) {
    return e = wi({
        mode: "visible",
        children: e
    }, t.mode, 0, null),
    e.return = t,
    t.child = e
}
function fs(t, e, n, r) {
    return r !== null && Da(r),
    Bn(e, t.child, null, n),
    t = Ya(e, e.pendingProps.children),
    t.flags |= 2,
    e.memoizedState = null,
    t
}
function zp(t, e, n, r, s, i, o) {
    if (n)
        return e.flags & 256 ? (e.flags &= -257,
        r = Yi(Error(x(422))),
        fs(t, e, o, r)) : e.memoizedState !== null ? (e.child = t.child,
        e.flags |= 128,
        null) : (i = r.fallback,
        s = e.mode,
        r = wi({
            mode: "visible",
            children: r.children
        }, s, 0, null),
        i = rn(i, s, o, null),
        i.flags |= 2,
        r.return = e,
        i.return = e,
        r.sibling = i,
        e.child = r,
        e.mode & 1 && Bn(e, t.child, null, o),
        e.child.memoizedState = Ko(o),
        e.memoizedState = qo,
        i);
    if (!(e.mode & 1))
        return fs(t, e, o, null);
    if (s.data === "$!") {
        if (r = s.nextSibling && s.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        i = Error(x(419)),
        r = Yi(i, r, void 0),
        fs(t, e, o, r)
    }
    if (a = (o & t.childLanes) !== 0,
    Ce || a) {
        if (r = ue,
        r !== null) {
            switch (o & -o) {
            case 4:
                s = 2;
                break;
            case 16:
                s = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                s = 32;
                break;
            case 536870912:
                s = 268435456;
                break;
            default:
                s = 0
            }
            s = s & (r.suspendedLanes | o) ? 0 : s,
            s !== 0 && s !== i.retryLane && (i.retryLane = s,
            vt(t, s),
            Ze(r, t, s, -1))
        }
        return rl(),
        r = Yi(Error(x(421))),
        fs(t, e, o, r)
    }
    return s.data === "$?" ? (e.flags |= 128,
    e.child = t.child,
    e = Zp.bind(null, t),
    s._reactRetry = e,
    null) : (t = i.treeContext,
    Re = At(s.nextSibling),
    Ae = e,
    Q = !0,
    Ye = null,
    t !== null && (Ue[ze++] = ht,
    Ue[ze++] = ft,
    Ue[ze++] = on,
    ht = t.id,
    ft = t.overflow,
    on = e),
    e = Ya(e, r.children),
    e.flags |= 4096,
    e)
}
function mu(t, e, n) {
    t.lanes |= e;
    var r = t.alternate;
    r !== null && (r.lanes |= e),
    zo(t.return, e, n)
}
function Xi(t, e, n, r, s) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s
    } : (i.isBackwards = e,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = s)
}
function Wd(t, e, n) {
    var r = e.pendingProps
      , s = r.revealOrder
      , i = r.tail;
    if (_e(t, e, r.children, n),
    r = Y.current,
    r & 2)
        r = r & 1 | 2,
        e.flags |= 128;
    else {
        if (t !== null && t.flags & 128)
            e: for (t = e.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && mu(t, n, e);
                else if (t.tag === 19)
                    mu(t, n, e);
                else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break e;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        break e;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        r &= 1
    }
    if (q(Y, r),
    !(e.mode & 1))
        e.memoizedState = null;
    else
        switch (s) {
        case "forwards":
            for (n = e.child,
            s = null; n !== null; )
                t = n.alternate,
                t !== null && Xs(t) === null && (s = n),
                n = n.sibling;
            n = s,
            n === null ? (s = e.child,
            e.child = null) : (s = n.sibling,
            n.sibling = null),
            Xi(e, !1, s, n, i);
            break;
        case "backwards":
            for (n = null,
            s = e.child,
            e.child = null; s !== null; ) {
                if (t = s.alternate,
                t !== null && Xs(t) === null) {
                    e.child = s;
                    break
                }
                t = s.sibling,
                s.sibling = n,
                n = s,
                s = t
            }
            Xi(e, !0, n, null, i);
            break;
        case "together":
            Xi(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
        }
    return e.child
}
function Os(t, e) {
    !(e.mode & 1) && t !== null && (t.alternate = null,
    e.alternate = null,
    e.flags |= 2)
}
function yt(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies),
    ln |= e.lanes,
    !(n & e.childLanes))
        return null;
    if (t !== null && e.child !== t.child)
        throw Error(x(153));
    if (e.child !== null) {
        for (t = e.child,
        n = Dt(t, t.pendingProps),
        e.child = n,
        n.return = e; t.sibling !== null; )
            t = t.sibling,
            n = n.sibling = Dt(t, t.pendingProps),
            n.return = e;
        n.sibling = null
    }
    return e.child
}
function Fp(t, e, n) {
    switch (e.tag) {
    case 3:
        Fd(e),
        Fn();
        break;
    case 5:
        md(e);
        break;
    case 1:
        Pe(e.type) && qs(e);
        break;
    case 4:
        Wa(e, e.stateNode.containerInfo);
        break;
    case 10:
        var r = e.type._context
          , s = e.memoizedProps.value;
        q(Js, r._currentValue),
        r._currentValue = s;
        break;
    case 13:
        if (r = e.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (q(Y, Y.current & 1),
            e.flags |= 128,
            null) : n & e.child.childLanes ? Bd(t, e, n) : (q(Y, Y.current & 1),
            t = yt(t, e, n),
            t !== null ? t.sibling : null);
        q(Y, Y.current & 1);
        break;
    case 19:
        if (r = (n & e.childLanes) !== 0,
        t.flags & 128) {
            if (r)
                return Wd(t, e, n);
            e.flags |= 128
        }
        if (s = e.memoizedState,
        s !== null && (s.rendering = null,
        s.tail = null,
        s.lastEffect = null),
        q(Y, Y.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return e.lanes = 0,
        Ud(t, e, n)
    }
    return yt(t, e, n)
}
var Vd, Go, Hd, qd;
Vd = function(t, e) {
    for (var n = e.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            t.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === e)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === e)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Go = function() {}
;
Hd = function(t, e, n, r) {
    var s = t.memoizedProps;
    if (s !== r) {
        t = e.stateNode,
        tn(at.current);
        var i = null;
        switch (n) {
        case "input":
            s = go(t, s),
            r = go(t, r),
            i = [];
            break;
        case "select":
            s = Z({}, s, {
                value: void 0
            }),
            r = Z({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            s = wo(t, s),
            r = wo(t, r),
            i = [];
            break;
        default:
            typeof s.onClick != "function" && typeof r.onClick == "function" && (t.onclick = Vs)
        }
        ko(n, r);
        var o;
        n = null;
        for (u in s)
            if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
                if (u === "style") {
                    var a = s[u];
                    for (o in a)
                        a.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Cr.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = s != null ? s[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in l)
                            l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}),
                            n[o] = l[o])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Cr.hasOwnProperty(u) ? (l != null && u === "onScroll" && K("scroll", t),
                    i || a === l || (i = [])) : (i = i || []).push(u, l))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (e.updateQueue = u) && (e.flags |= 4)
    }
}
;
qd = function(t, e, n, r) {
    n !== r && (e.flags |= 4)
}
;
function sr(t, e) {
    if (!Q)
        switch (t.tailMode) {
        case "hidden":
            e = t.tail;
            for (var n = null; e !== null; )
                e.alternate !== null && (n = e),
                e = e.sibling;
            n === null ? t.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = t.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null
        }
}
function me(t) {
    var e = t.alternate !== null && t.alternate.child === t.child
      , n = 0
      , r = 0;
    if (e)
        for (var s = t.child; s !== null; )
            n |= s.lanes | s.childLanes,
            r |= s.subtreeFlags & 14680064,
            r |= s.flags & 14680064,
            s.return = t,
            s = s.sibling;
    else
        for (s = t.child; s !== null; )
            n |= s.lanes | s.childLanes,
            r |= s.subtreeFlags,
            r |= s.flags,
            s.return = t,
            s = s.sibling;
    return t.subtreeFlags |= r,
    t.childLanes = n,
    e
}
function Bp(t, e, n) {
    var r = e.pendingProps;
    switch (La(e),
    e.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return me(e),
        null;
    case 1:
        return Pe(e.type) && Hs(),
        me(e),
        null;
    case 3:
        return r = e.stateNode,
        Wn(),
        G(Te),
        G(ve),
        Ha(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (t === null || t.child === null) && (ds(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024,
        Ye !== null && (na(Ye),
        Ye = null))),
        Go(t, e),
        me(e),
        null;
    case 5:
        Va(e);
        var s = tn(Ur.current);
        if (n = e.type,
        t !== null && e.stateNode != null)
            Hd(t, e, n, r, s),
            t.ref !== e.ref && (e.flags |= 512,
            e.flags |= 2097152);
        else {
            if (!r) {
                if (e.stateNode === null)
                    throw Error(x(166));
                return me(e),
                null
            }
            if (t = tn(at.current),
            ds(e)) {
                r = e.stateNode,
                n = e.type;
                var i = e.memoizedProps;
                switch (r[it] = e,
                r[Dr] = i,
                t = (e.mode & 1) !== 0,
                n) {
                case "dialog":
                    K("cancel", r),
                    K("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    K("load", r);
                    break;
                case "video":
                case "audio":
                    for (s = 0; s < fr.length; s++)
                        K(fr[s], r);
                    break;
                case "source":
                    K("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    K("error", r),
                    K("load", r);
                    break;
                case "details":
                    K("toggle", r);
                    break;
                case "input":
                    El(r, i),
                    K("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    K("invalid", r);
                    break;
                case "textarea":
                    jl(r, i),
                    K("invalid", r)
                }
                ko(n, i),
                s = null;
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var a = i[o];
                        o === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && cs(r.textContent, a, t),
                        s = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && cs(r.textContent, a, t),
                        s = ["children", "" + a]) : Cr.hasOwnProperty(o) && a != null && o === "onScroll" && K("scroll", r)
                    }
                switch (n) {
                case "input":
                    ns(r),
                    bl(r, i, !0);
                    break;
                case "textarea":
                    ns(r),
                    Cl(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = Vs)
                }
                r = s,
                e.updateQueue = r,
                r !== null && (e.flags |= 4)
            } else {
                o = s.nodeType === 9 ? s : s.ownerDocument,
                t === "http://www.w3.org/1999/xhtml" && (t = _c(n)),
                t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = o.createElement("div"),
                t.innerHTML = "<script><\/script>",
                t = t.removeChild(t.firstChild)) : typeof r.is == "string" ? t = o.createElement(n, {
                    is: r.is
                }) : (t = o.createElement(n),
                n === "select" && (o = t,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : t = o.createElementNS(t, n),
                t[it] = e,
                t[Dr] = r,
                Vd(t, e, !1, !1),
                e.stateNode = t;
                e: {
                    switch (o = xo(n, r),
                    n) {
                    case "dialog":
                        K("cancel", t),
                        K("close", t),
                        s = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        K("load", t),
                        s = r;
                        break;
                    case "video":
                    case "audio":
                        for (s = 0; s < fr.length; s++)
                            K(fr[s], t);
                        s = r;
                        break;
                    case "source":
                        K("error", t),
                        s = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        K("error", t),
                        K("load", t),
                        s = r;
                        break;
                    case "details":
                        K("toggle", t),
                        s = r;
                        break;
                    case "input":
                        El(t, r),
                        s = go(t, r),
                        K("invalid", t);
                        break;
                    case "option":
                        s = r;
                        break;
                    case "select":
                        t._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        s = Z({}, r, {
                            value: void 0
                        }),
                        K("invalid", t);
                        break;
                    case "textarea":
                        jl(t, r),
                        s = wo(t, r),
                        K("invalid", t);
                        break;
                    default:
                        s = r
                    }
                    ko(n, s),
                    a = s;
                    for (i in a)
                        if (a.hasOwnProperty(i)) {
                            var l = a[i];
                            i === "style" ? Sc(t, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && kc(t, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Tr(t, l) : typeof l == "number" && Tr(t, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Cr.hasOwnProperty(i) ? l != null && i === "onScroll" && K("scroll", t) : l != null && ka(t, i, l, o))
                        }
                    switch (n) {
                    case "input":
                        ns(t),
                        bl(t, r, !1);
                        break;
                    case "textarea":
                        ns(t),
                        Cl(t);
                        break;
                    case "option":
                        r.value != null && t.setAttribute("value", "" + Mt(r.value));
                        break;
                    case "select":
                        t.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? An(t, !!r.multiple, i, !1) : r.defaultValue != null && An(t, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof s.onClick == "function" && (t.onclick = Vs)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (e.flags |= 4)
            }
            e.ref !== null && (e.flags |= 512,
            e.flags |= 2097152)
        }
        return me(e),
        null;
    case 6:
        if (t && e.stateNode != null)
            qd(t, e, t.memoizedProps, r);
        else {
            if (typeof r != "string" && e.stateNode === null)
                throw Error(x(166));
            if (n = tn(Ur.current),
            tn(at.current),
            ds(e)) {
                if (r = e.stateNode,
                n = e.memoizedProps,
                r[it] = e,
                (i = r.nodeValue !== n) && (t = Ae,
                t !== null))
                    switch (t.tag) {
                    case 3:
                        cs(r.nodeValue, n, (t.mode & 1) !== 0);
                        break;
                    case 5:
                        t.memoizedProps.suppressHydrationWarning !== !0 && cs(r.nodeValue, n, (t.mode & 1) !== 0)
                    }
                i && (e.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[it] = e,
                e.stateNode = r
        }
        return me(e),
        null;
    case 13:
        if (G(Y),
        r = e.memoizedState,
        t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (Q && Re !== null && e.mode & 1 && !(e.flags & 128))
                cd(),
                Fn(),
                e.flags |= 98560,
                i = !1;
            else if (i = ds(e),
            r !== null && r.dehydrated !== null) {
                if (t === null) {
                    if (!i)
                        throw Error(x(318));
                    if (i = e.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(x(317));
                    i[it] = e
                } else
                    Fn(),
                    !(e.flags & 128) && (e.memoizedState = null),
                    e.flags |= 4;
                me(e),
                i = !1
            } else
                Ye !== null && (na(Ye),
                Ye = null),
                i = !0;
            if (!i)
                return e.flags & 65536 ? e : null
        }
        return e.flags & 128 ? (e.lanes = n,
        e) : (r = r !== null,
        r !== (t !== null && t.memoizedState !== null) && r && (e.child.flags |= 8192,
        e.mode & 1 && (t === null || Y.current & 1 ? ae === 0 && (ae = 3) : rl())),
        e.updateQueue !== null && (e.flags |= 4),
        me(e),
        null);
    case 4:
        return Wn(),
        Go(t, e),
        t === null && $r(e.stateNode.containerInfo),
        me(e),
        null;
    case 10:
        return za(e.type._context),
        me(e),
        null;
    case 17:
        return Pe(e.type) && Hs(),
        me(e),
        null;
    case 19:
        if (G(Y),
        i = e.memoizedState,
        i === null)
            return me(e),
            null;
        if (r = (e.flags & 128) !== 0,
        o = i.rendering,
        o === null)
            if (r)
                sr(i, !1);
            else {
                if (ae !== 0 || t !== null && t.flags & 128)
                    for (t = e.child; t !== null; ) {
                        if (o = Xs(t),
                        o !== null) {
                            for (e.flags |= 128,
                            sr(i, !1),
                            r = o.updateQueue,
                            r !== null && (e.updateQueue = r,
                            e.flags |= 4),
                            e.subtreeFlags = 0,
                            r = n,
                            n = e.child; n !== null; )
                                i = n,
                                t = r,
                                i.flags &= 14680066,
                                o = i.alternate,
                                o === null ? (i.childLanes = 0,
                                i.lanes = t,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = o.childLanes,
                                i.lanes = o.lanes,
                                i.child = o.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = o.memoizedProps,
                                i.memoizedState = o.memoizedState,
                                i.updateQueue = o.updateQueue,
                                i.type = o.type,
                                t = o.dependencies,
                                i.dependencies = t === null ? null : {
                                    lanes: t.lanes,
                                    firstContext: t.firstContext
                                }),
                                n = n.sibling;
                            return q(Y, Y.current & 1 | 2),
                            e.child
                        }
                        t = t.sibling
                    }
                i.tail !== null && ne() > Hn && (e.flags |= 128,
                r = !0,
                sr(i, !1),
                e.lanes = 4194304)
            }
        else {
            if (!r)
                if (t = Xs(o),
                t !== null) {
                    if (e.flags |= 128,
                    r = !0,
                    n = t.updateQueue,
                    n !== null && (e.updateQueue = n,
                    e.flags |= 4),
                    sr(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !o.alternate && !Q)
                        return me(e),
                        null
                } else
                    2 * ne() - i.renderingStartTime > Hn && n !== 1073741824 && (e.flags |= 128,
                    r = !0,
                    sr(i, !1),
                    e.lanes = 4194304);
            i.isBackwards ? (o.sibling = e.child,
            e.child = o) : (n = i.last,
            n !== null ? n.sibling = o : e.child = o,
            i.last = o)
        }
        return i.tail !== null ? (e = i.tail,
        i.rendering = e,
        i.tail = e.sibling,
        i.renderingStartTime = ne(),
        e.sibling = null,
        n = Y.current,
        q(Y, r ? n & 1 | 2 : n & 1),
        e) : (me(e),
        null);
    case 22:
    case 23:
        return nl(),
        r = e.memoizedState !== null,
        t !== null && t.memoizedState !== null !== r && (e.flags |= 8192),
        r && e.mode & 1 ? Oe & 1073741824 && (me(e),
        e.subtreeFlags & 6 && (e.flags |= 8192)) : me(e),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(x(156, e.tag))
}
function Wp(t, e) {
    switch (La(e),
    e.tag) {
    case 1:
        return Pe(e.type) && Hs(),
        t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 3:
        return Wn(),
        G(Te),
        G(ve),
        Ha(),
        t = e.flags,
        t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128,
        e) : null;
    case 5:
        return Va(e),
        null;
    case 13:
        if (G(Y),
        t = e.memoizedState,
        t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
                throw Error(x(340));
            Fn()
        }
        return t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 19:
        return G(Y),
        null;
    case 4:
        return Wn(),
        null;
    case 10:
        return za(e.type._context),
        null;
    case 22:
    case 23:
        return nl(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ps = !1
  , ge = !1
  , Vp = typeof WeakSet == "function" ? WeakSet : Set
  , P = null;
function On(t, e) {
    var n = t.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                te(t, e, r)
            }
        else
            n.current = null
}
function Jo(t, e, n) {
    try {
        n()
    } catch (r) {
        te(t, e, r)
    }
}
var gu = !1;
function Hp(t, e) {
    if (Ro = Fs,
    t = Yc(),
    Ia(t)) {
        if ("selectionStart"in t)
            var n = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
        else
            e: {
                n = (n = t.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var s = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , d = t
                      , h = null;
                    t: for (; ; ) {
                        for (var v; d !== n || s !== 0 && d.nodeType !== 3 || (a = o + s),
                        d !== i || r !== 0 && d.nodeType !== 3 || (l = o + r),
                        d.nodeType === 3 && (o += d.nodeValue.length),
                        (v = d.firstChild) !== null; )
                            h = d,
                            d = v;
                        for (; ; ) {
                            if (d === t)
                                break t;
                            if (h === n && ++u === s && (a = o),
                            h === i && ++c === r && (l = o),
                            (v = d.nextSibling) !== null)
                                break;
                            d = h,
                            h = d.parentNode
                        }
                        d = v
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Ao = {
        focusedElem: t,
        selectionRange: n
    },
    Fs = !1,
    P = e; P !== null; )
        if (e = P,
        t = e.child,
        (e.subtreeFlags & 1028) !== 0 && t !== null)
            t.return = e,
            P = t;
        else
            for (; P !== null; ) {
                e = P;
                try {
                    var y = e.alternate;
                    if (e.flags & 1024)
                        switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var w = y.memoizedProps
                                  , k = y.memoizedState
                                  , m = e.stateNode
                                  , f = m.getSnapshotBeforeUpdate(e.elementType === e.type ? w : Ge(e.type, w), k);
                                m.__reactInternalSnapshotBeforeUpdate = f
                            }
                            break;
                        case 3:
                            var p = e.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(x(163))
                        }
                } catch (_) {
                    te(e, e.return, _)
                }
                if (t = e.sibling,
                t !== null) {
                    t.return = e.return,
                    P = t;
                    break
                }
                P = e.return
            }
    return y = gu,
    gu = !1,
    y
}
function kr(t, e, n) {
    var r = e.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var s = r = r.next;
        do {
            if ((s.tag & t) === t) {
                var i = s.destroy;
                s.destroy = void 0,
                i !== void 0 && Jo(e, n, i)
            }
            s = s.next
        } while (s !== r)
    }
}
function vi(t, e) {
    if (e = e.updateQueue,
    e = e !== null ? e.lastEffect : null,
    e !== null) {
        var n = e = e.next;
        do {
            if ((n.tag & t) === t) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== e)
    }
}
function Qo(t) {
    var e = t.ref;
    if (e !== null) {
        var n = t.stateNode;
        switch (t.tag) {
        case 5:
            t = n;
            break;
        default:
            t = n
        }
        typeof e == "function" ? e(t) : e.current = t
    }
}
function Kd(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null,
    Kd(e)),
    t.child = null,
    t.deletions = null,
    t.sibling = null,
    t.tag === 5 && (e = t.stateNode,
    e !== null && (delete e[it],
    delete e[Dr],
    delete e[Lo],
    delete e[Cp],
    delete e[Tp])),
    t.stateNode = null,
    t.return = null,
    t.dependencies = null,
    t.memoizedProps = null,
    t.memoizedState = null,
    t.pendingProps = null,
    t.stateNode = null,
    t.updateQueue = null
}
function Gd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4
}
function vu(t) {
    e: for (; ; ) {
        for (; t.sibling === null; ) {
            if (t.return === null || Gd(t.return))
                return null;
            t = t.return
        }
        for (t.sibling.return = t.return,
        t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
            if (t.flags & 2 || t.child === null || t.tag === 4)
                continue e;
            t.child.return = t,
            t = t.child
        }
        if (!(t.flags & 2))
            return t.stateNode
    }
}
function Yo(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
        t = t.stateNode,
        e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode,
        e.insertBefore(t, n)) : (e = n,
        e.appendChild(t)),
        n = n._reactRootContainer,
        n != null || e.onclick !== null || (e.onclick = Vs));
    else if (r !== 4 && (t = t.child,
    t !== null))
        for (Yo(t, e, n),
        t = t.sibling; t !== null; )
            Yo(t, e, n),
            t = t.sibling
}
function Xo(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
        t = t.stateNode,
        e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (r !== 4 && (t = t.child,
    t !== null))
        for (Xo(t, e, n),
        t = t.sibling; t !== null; )
            Xo(t, e, n),
            t = t.sibling
}
var ce = null
  , Je = !1;
function _t(t, e, n) {
    for (n = n.child; n !== null; )
        Jd(t, e, n),
        n = n.sibling
}
function Jd(t, e, n) {
    if (ot && typeof ot.onCommitFiberUnmount == "function")
        try {
            ot.onCommitFiberUnmount(ui, n)
        } catch {}
    switch (n.tag) {
    case 5:
        ge || On(n, e);
    case 6:
        var r = ce
          , s = Je;
        ce = null,
        _t(t, e, n),
        ce = r,
        Je = s,
        ce !== null && (Je ? (t = ce,
        n = n.stateNode,
        t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : ce.removeChild(n.stateNode));
        break;
    case 18:
        ce !== null && (Je ? (t = ce,
        n = n.stateNode,
        t.nodeType === 8 ? Hi(t.parentNode, n) : t.nodeType === 1 && Hi(t, n),
        Rr(t)) : Hi(ce, n.stateNode));
        break;
    case 4:
        r = ce,
        s = Je,
        ce = n.stateNode.containerInfo,
        Je = !0,
        _t(t, e, n),
        ce = r,
        Je = s;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!ge && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            s = r = r.next;
            do {
                var i = s
                  , o = i.destroy;
                i = i.tag,
                o !== void 0 && (i & 2 || i & 4) && Jo(n, e, o),
                s = s.next
            } while (s !== r)
        }
        _t(t, e, n);
        break;
    case 1:
        if (!ge && (On(n, e),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                te(n, e, a)
            }
        _t(t, e, n);
        break;
    case 21:
        _t(t, e, n);
        break;
    case 22:
        n.mode & 1 ? (ge = (r = ge) || n.memoizedState !== null,
        _t(t, e, n),
        ge = r) : _t(t, e, n);
        break;
    default:
        _t(t, e, n)
    }
}
function yu(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var n = t.stateNode;
        n === null && (n = t.stateNode = new Vp),
        e.forEach(function(r) {
            var s = em.bind(null, t, r);
            n.has(r) || (n.add(r),
            r.then(s, s))
        })
    }
}
function qe(t, e) {
    var n = e.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var s = n[r];
            try {
                var i = t
                  , o = e
                  , a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        ce = a.stateNode,
                        Je = !1;
                        break e;
                    case 3:
                        ce = a.stateNode.containerInfo,
                        Je = !0;
                        break e;
                    case 4:
                        ce = a.stateNode.containerInfo,
                        Je = !0;
                        break e
                    }
                    a = a.return
                }
                if (ce === null)
                    throw Error(x(160));
                Jd(i, o, s),
                ce = null,
                Je = !1;
                var l = s.alternate;
                l !== null && (l.return = null),
                s.return = null
            } catch (u) {
                te(s, e, u)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null; )
            Qd(e, t),
            e = e.sibling
}
function Qd(t, e) {
    var n = t.alternate
      , r = t.flags;
    switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (qe(e, t),
        tt(t),
        r & 4) {
            try {
                kr(3, t, t.return),
                vi(3, t)
            } catch (w) {
                te(t, t.return, w)
            }
            try {
                kr(5, t, t.return)
            } catch (w) {
                te(t, t.return, w)
            }
        }
        break;
    case 1:
        qe(e, t),
        tt(t),
        r & 512 && n !== null && On(n, n.return);
        break;
    case 5:
        if (qe(e, t),
        tt(t),
        r & 512 && n !== null && On(n, n.return),
        t.flags & 32) {
            var s = t.stateNode;
            try {
                Tr(s, "")
            } catch (w) {
                te(t, t.return, w)
            }
        }
        if (r & 4 && (s = t.stateNode,
        s != null)) {
            var i = t.memoizedProps
              , o = n !== null ? n.memoizedProps : i
              , a = t.type
              , l = t.updateQueue;
            if (t.updateQueue = null,
            l !== null)
                try {
                    a === "input" && i.type === "radio" && i.name != null && yc(s, i),
                    xo(a, o);
                    var u = xo(a, i);
                    for (o = 0; o < l.length; o += 2) {
                        var c = l[o]
                          , d = l[o + 1];
                        c === "style" ? Sc(s, d) : c === "dangerouslySetInnerHTML" ? kc(s, d) : c === "children" ? Tr(s, d) : ka(s, c, d, u)
                    }
                    switch (a) {
                    case "input":
                        vo(s, i);
                        break;
                    case "textarea":
                        wc(s, i);
                        break;
                    case "select":
                        var h = s._wrapperState.wasMultiple;
                        s._wrapperState.wasMultiple = !!i.multiple;
                        var v = i.value;
                        v != null ? An(s, !!i.multiple, v, !1) : h !== !!i.multiple && (i.defaultValue != null ? An(s, !!i.multiple, i.defaultValue, !0) : An(s, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    s[Dr] = i
                } catch (w) {
                    te(t, t.return, w)
                }
        }
        break;
    case 6:
        if (qe(e, t),
        tt(t),
        r & 4) {
            if (t.stateNode === null)
                throw Error(x(162));
            s = t.stateNode,
            i = t.memoizedProps;
            try {
                s.nodeValue = i
            } catch (w) {
                te(t, t.return, w)
            }
        }
        break;
    case 3:
        if (qe(e, t),
        tt(t),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Rr(e.containerInfo)
            } catch (w) {
                te(t, t.return, w)
            }
        break;
    case 4:
        qe(e, t),
        tt(t);
        break;
    case 13:
        qe(e, t),
        tt(t),
        s = t.child,
        s.flags & 8192 && (i = s.memoizedState !== null,
        s.stateNode.isHidden = i,
        !i || s.alternate !== null && s.alternate.memoizedState !== null || (el = ne())),
        r & 4 && yu(t);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        t.mode & 1 ? (ge = (u = ge) || c,
        qe(e, t),
        ge = u) : qe(e, t),
        tt(t),
        r & 8192) {
            if (u = t.memoizedState !== null,
            (t.stateNode.isHidden = u) && !c && t.mode & 1)
                for (P = t,
                c = t.child; c !== null; ) {
                    for (d = P = c; P !== null; ) {
                        switch (h = P,
                        v = h.child,
                        h.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            kr(4, h, h.return);
                            break;
                        case 1:
                            On(h, h.return);
                            var y = h.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                r = h,
                                n = h.return;
                                try {
                                    e = r,
                                    y.props = e.memoizedProps,
                                    y.state = e.memoizedState,
                                    y.componentWillUnmount()
                                } catch (w) {
                                    te(r, n, w)
                                }
                            }
                            break;
                        case 5:
                            On(h, h.return);
                            break;
                        case 22:
                            if (h.memoizedState !== null) {
                                _u(d);
                                continue
                            }
                        }
                        v !== null ? (v.return = h,
                        P = v) : _u(d)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            d = t; ; ) {
                if (d.tag === 5) {
                    if (c === null) {
                        c = d;
                        try {
                            s = d.stateNode,
                            u ? (i = s.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = d.stateNode,
                            l = d.memoizedProps.style,
                            o = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = xc("display", o))
                        } catch (w) {
                            te(t, t.return, w)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (w) {
                            te(t, t.return, w)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === t) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === t)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === t)
                        break e;
                    c === d && (c = null),
                    d = d.return
                }
                c === d && (c = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        qe(e, t),
        tt(t),
        r & 4 && yu(t);
        break;
    case 21:
        break;
    default:
        qe(e, t),
        tt(t)
    }
}
function tt(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null; ) {
                    if (Gd(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(x(160))
            }
            switch (r.tag) {
            case 5:
                var s = r.stateNode;
                r.flags & 32 && (Tr(s, ""),
                r.flags &= -33);
                var i = vu(t);
                Xo(t, i, s);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , a = vu(t);
                Yo(t, a, o);
                break;
            default:
                throw Error(x(161))
            }
        } catch (l) {
            te(t, t.return, l)
        }
        t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
}
function qp(t, e, n) {
    P = t,
    Yd(t)
}
function Yd(t, e, n) {
    for (var r = (t.mode & 1) !== 0; P !== null; ) {
        var s = P
          , i = s.child;
        if (s.tag === 22 && r) {
            var o = s.memoizedState !== null || ps;
            if (!o) {
                var a = s.alternate
                  , l = a !== null && a.memoizedState !== null || ge;
                a = ps;
                var u = ge;
                if (ps = o,
                (ge = l) && !u)
                    for (P = s; P !== null; )
                        o = P,
                        l = o.child,
                        o.tag === 22 && o.memoizedState !== null ? ku(s) : l !== null ? (l.return = o,
                        P = l) : ku(s);
                for (; i !== null; )
                    P = i,
                    Yd(i),
                    i = i.sibling;
                P = s,
                ps = a,
                ge = u
            }
            wu(t)
        } else
            s.subtreeFlags & 8772 && i !== null ? (i.return = s,
            P = i) : wu(t)
    }
}
function wu(t) {
    for (; P !== null; ) {
        var e = P;
        if (e.flags & 8772) {
            var n = e.alternate;
            try {
                if (e.flags & 8772)
                    switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ge || vi(5, e);
                        break;
                    case 1:
                        var r = e.stateNode;
                        if (e.flags & 4 && !ge)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var s = e.elementType === e.type ? n.memoizedProps : Ge(e.type, n.memoizedProps);
                                r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = e.updateQueue;
                        i !== null && ru(e, i, r);
                        break;
                    case 3:
                        var o = e.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            e.child !== null)
                                switch (e.child.tag) {
                                case 5:
                                    n = e.child.stateNode;
                                    break;
                                case 1:
                                    n = e.child.stateNode
                                }
                            ru(e, o, n)
                        }
                        break;
                    case 5:
                        var a = e.stateNode;
                        if (n === null && e.flags & 4) {
                            n = a;
                            var l = e.memoizedProps;
                            switch (e.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (e.memoizedState === null) {
                            var u = e.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && Rr(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(x(163))
                    }
                ge || e.flags & 512 && Qo(e)
            } catch (h) {
                te(e, e.return, h)
            }
        }
        if (e === t) {
            P = null;
            break
        }
        if (n = e.sibling,
        n !== null) {
            n.return = e.return,
            P = n;
            break
        }
        P = e.return
    }
}
function _u(t) {
    for (; P !== null; ) {
        var e = P;
        if (e === t) {
            P = null;
            break
        }
        var n = e.sibling;
        if (n !== null) {
            n.return = e.return,
            P = n;
            break
        }
        P = e.return
    }
}
function ku(t) {
    for (; P !== null; ) {
        var e = P;
        try {
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                var n = e.return;
                try {
                    vi(4, e)
                } catch (l) {
                    te(e, n, l)
                }
                break;
            case 1:
                var r = e.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var s = e.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        te(e, s, l)
                    }
                }
                var i = e.return;
                try {
                    Qo(e)
                } catch (l) {
                    te(e, i, l)
                }
                break;
            case 5:
                var o = e.return;
                try {
                    Qo(e)
                } catch (l) {
                    te(e, o, l)
                }
            }
        } catch (l) {
            te(e, e.return, l)
        }
        if (e === t) {
            P = null;
            break
        }
        var a = e.sibling;
        if (a !== null) {
            a.return = e.return,
            P = a;
            break
        }
        P = e.return
    }
}
var Kp = Math.ceil
  , ti = wt.ReactCurrentDispatcher
  , Xa = wt.ReactCurrentOwner
  , Be = wt.ReactCurrentBatchConfig
  , U = 0
  , ue = null
  , re = null
  , de = 0
  , Oe = 0
  , Rn = Bt(0)
  , ae = 0
  , Wr = null
  , ln = 0
  , yi = 0
  , Za = 0
  , xr = null
  , be = null
  , el = 0
  , Hn = 1 / 0
  , ut = null
  , ni = !1
  , Zo = null
  , $t = null
  , ms = !1
  , Pt = null
  , ri = 0
  , Sr = 0
  , ea = null
  , Rs = -1
  , As = 0;
function ke() {
    return U & 6 ? ne() : Rs !== -1 ? Rs : Rs = ne()
}
function Lt(t) {
    return t.mode & 1 ? U & 2 && de !== 0 ? de & -de : Np.transition !== null ? (As === 0 && (As = $c()),
    As) : (t = B,
    t !== 0 || (t = window.event,
    t = t === void 0 ? 16 : Bc(t.type)),
    t) : 1
}
function Ze(t, e, n, r) {
    if (50 < Sr)
        throw Sr = 0,
        ea = null,
        Error(x(185));
    qr(t, n, r),
    (!(U & 2) || t !== ue) && (t === ue && (!(U & 2) && (yi |= n),
    ae === 4 && jt(t, de)),
    Ne(t, r),
    n === 1 && U === 0 && !(e.mode & 1) && (Hn = ne() + 500,
    pi && Wt()))
}
function Ne(t, e) {
    var n = t.callbackNode;
    Nf(t, e);
    var r = zs(t, t === ue ? de : 0);
    if (r === 0)
        n !== null && Nl(n),
        t.callbackNode = null,
        t.callbackPriority = 0;
    else if (e = r & -r,
    t.callbackPriority !== e) {
        if (n != null && Nl(n),
        e === 1)
            t.tag === 0 ? Pp(xu.bind(null, t)) : ad(xu.bind(null, t)),
            bp(function() {
                !(U & 6) && Wt()
            }),
            n = null;
        else {
            switch (Lc(r)) {
            case 1:
                n = ja;
                break;
            case 4:
                n = Ac;
                break;
            case 16:
                n = Us;
                break;
            case 536870912:
                n = Ic;
                break;
            default:
                n = Us
            }
            n = ih(n, Xd.bind(null, t))
        }
        t.callbackPriority = e,
        t.callbackNode = n
    }
}
function Xd(t, e) {
    if (Rs = -1,
    As = 0,
    U & 6)
        throw Error(x(327));
    var n = t.callbackNode;
    if (Mn() && t.callbackNode !== n)
        return null;
    var r = zs(t, t === ue ? de : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & t.expiredLanes || e)
        e = si(t, r);
    else {
        e = r;
        var s = U;
        U |= 2;
        var i = eh();
        (ue !== t || de !== e) && (ut = null,
        Hn = ne() + 500,
        nn(t, e));
        do
            try {
                Qp();
                break
            } catch (a) {
                Zd(t, a)
            }
        while (!0);
        Ua(),
        ti.current = i,
        U = s,
        re !== null ? e = 0 : (ue = null,
        de = 0,
        e = ae)
    }
    if (e !== 0) {
        if (e === 2 && (s = Co(t),
        s !== 0 && (r = s,
        e = ta(t, s))),
        e === 1)
            throw n = Wr,
            nn(t, 0),
            jt(t, r),
            Ne(t, ne()),
            n;
        if (e === 6)
            jt(t, r);
        else {
            if (s = t.current.alternate,
            !(r & 30) && !Gp(s) && (e = si(t, r),
            e === 2 && (i = Co(t),
            i !== 0 && (r = i,
            e = ta(t, i))),
            e === 1))
                throw n = Wr,
                nn(t, 0),
                jt(t, r),
                Ne(t, ne()),
                n;
            switch (t.finishedWork = s,
            t.finishedLanes = r,
            e) {
            case 0:
            case 1:
                throw Error(x(345));
            case 2:
                Qt(t, be, ut);
                break;
            case 3:
                if (jt(t, r),
                (r & 130023424) === r && (e = el + 500 - ne(),
                10 < e)) {
                    if (zs(t, 0) !== 0)
                        break;
                    if (s = t.suspendedLanes,
                    (s & r) !== r) {
                        ke(),
                        t.pingedLanes |= t.suspendedLanes & s;
                        break
                    }
                    t.timeoutHandle = $o(Qt.bind(null, t, be, ut), e);
                    break
                }
                Qt(t, be, ut);
                break;
            case 4:
                if (jt(t, r),
                (r & 4194240) === r)
                    break;
                for (e = t.eventTimes,
                s = -1; 0 < r; ) {
                    var o = 31 - Xe(r);
                    i = 1 << o,
                    o = e[o],
                    o > s && (s = o),
                    r &= ~i
                }
                if (r = s,
                r = ne() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Kp(r / 1960)) - r,
                10 < r) {
                    t.timeoutHandle = $o(Qt.bind(null, t, be, ut), r);
                    break
                }
                Qt(t, be, ut);
                break;
            case 5:
                Qt(t, be, ut);
                break;
            default:
                throw Error(x(329))
            }
        }
    }
    return Ne(t, ne()),
    t.callbackNode === n ? Xd.bind(null, t) : null
}
function ta(t, e) {
    var n = xr;
    return t.current.memoizedState.isDehydrated && (nn(t, e).flags |= 256),
    t = si(t, e),
    t !== 2 && (e = be,
    be = n,
    e !== null && na(e)),
    t
}
function na(t) {
    be === null ? be = t : be.push.apply(be, t)
}
function Gp(t) {
    for (var e = t; ; ) {
        if (e.flags & 16384) {
            var n = e.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var s = n[r]
                      , i = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!et(i(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = e.child,
        e.subtreeFlags & 16384 && n !== null)
            n.return = e,
            e = n;
        else {
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return !0;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
    }
    return !0
}
function jt(t, e) {
    for (e &= ~Za,
    e &= ~yi,
    t.suspendedLanes |= e,
    t.pingedLanes &= ~e,
    t = t.expirationTimes; 0 < e; ) {
        var n = 31 - Xe(e)
          , r = 1 << n;
        t[n] = -1,
        e &= ~r
    }
}
function xu(t) {
    if (U & 6)
        throw Error(x(327));
    Mn();
    var e = zs(t, 0);
    if (!(e & 1))
        return Ne(t, ne()),
        null;
    var n = si(t, e);
    if (t.tag !== 0 && n === 2) {
        var r = Co(t);
        r !== 0 && (e = r,
        n = ta(t, r))
    }
    if (n === 1)
        throw n = Wr,
        nn(t, 0),
        jt(t, e),
        Ne(t, ne()),
        n;
    if (n === 6)
        throw Error(x(345));
    return t.finishedWork = t.current.alternate,
    t.finishedLanes = e,
    Qt(t, be, ut),
    Ne(t, ne()),
    null
}
function tl(t, e) {
    var n = U;
    U |= 1;
    try {
        return t(e)
    } finally {
        U = n,
        U === 0 && (Hn = ne() + 500,
        pi && Wt())
    }
}
function un(t) {
    Pt !== null && Pt.tag === 0 && !(U & 6) && Mn();
    var e = U;
    U |= 1;
    var n = Be.transition
      , r = B;
    try {
        if (Be.transition = null,
        B = 1,
        t)
            return t()
    } finally {
        B = r,
        Be.transition = n,
        U = e,
        !(U & 6) && Wt()
    }
}
function nl() {
    Oe = Rn.current,
    G(Rn)
}
function nn(t, e) {
    t.finishedWork = null,
    t.finishedLanes = 0;
    var n = t.timeoutHandle;
    if (n !== -1 && (t.timeoutHandle = -1,
    Ep(n)),
    re !== null)
        for (n = re.return; n !== null; ) {
            var r = n;
            switch (La(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Hs();
                break;
            case 3:
                Wn(),
                G(Te),
                G(ve),
                Ha();
                break;
            case 5:
                Va(r);
                break;
            case 4:
                Wn();
                break;
            case 13:
                G(Y);
                break;
            case 19:
                G(Y);
                break;
            case 10:
                za(r.type._context);
                break;
            case 22:
            case 23:
                nl()
            }
            n = n.return
        }
    if (ue = t,
    re = t = Dt(t.current, null),
    de = Oe = e,
    ae = 0,
    Wr = null,
    Za = yi = ln = 0,
    be = xr = null,
    en !== null) {
        for (e = 0; e < en.length; e++)
            if (n = en[e],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var s = r.next
                  , i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = s,
                    r.next = o
                }
                n.pending = r
            }
        en = null
    }
    return t
}
function Zd(t, e) {
    do {
        var n = re;
        try {
            if (Ua(),
            Ps.current = ei,
            Zs) {
                for (var r = X.memoizedState; r !== null; ) {
                    var s = r.queue;
                    s !== null && (s.pending = null),
                    r = r.next
                }
                Zs = !1
            }
            if (an = 0,
            le = oe = X = null,
            _r = !1,
            zr = 0,
            Xa.current = null,
            n === null || n.return === null) {
                ae = 1,
                Wr = e,
                re = null;
                break
            }
            e: {
                var i = t
                  , o = n.return
                  , a = n
                  , l = e;
                if (e = de,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var h = c.alternate;
                        h ? (c.updateQueue = h.updateQueue,
                        c.memoizedState = h.memoizedState,
                        c.lanes = h.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var v = uu(o);
                    if (v !== null) {
                        v.flags &= -257,
                        cu(v, o, a, i, e),
                        v.mode & 1 && lu(i, u, e),
                        e = v,
                        l = u;
                        var y = e.updateQueue;
                        if (y === null) {
                            var w = new Set;
                            w.add(l),
                            e.updateQueue = w
                        } else
                            y.add(l);
                        break e
                    } else {
                        if (!(e & 1)) {
                            lu(i, u, e),
                            rl();
                            break e
                        }
                        l = Error(x(426))
                    }
                } else if (Q && a.mode & 1) {
                    var k = uu(o);
                    if (k !== null) {
                        !(k.flags & 65536) && (k.flags |= 256),
                        cu(k, o, a, i, e),
                        Da(Vn(l, a));
                        break e
                    }
                }
                i = l = Vn(l, a),
                ae !== 4 && (ae = 2),
                xr === null ? xr = [i] : xr.push(i),
                i = o;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        e &= -e,
                        i.lanes |= e;
                        var m = Ld(i, l, e);
                        nu(i, m);
                        break e;
                    case 1:
                        a = l;
                        var f = i.type
                          , p = i.stateNode;
                        if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && ($t === null || !$t.has(p)))) {
                            i.flags |= 65536,
                            e &= -e,
                            i.lanes |= e;
                            var _ = Dd(i, a, e);
                            nu(i, _);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            nh(n)
        } catch (E) {
            e = E,
            re === n && n !== null && (re = n = n.return);
            continue
        }
        break
    } while (!0)
}
function eh() {
    var t = ti.current;
    return ti.current = ei,
    t === null ? ei : t
}
function rl() {
    (ae === 0 || ae === 3 || ae === 2) && (ae = 4),
    ue === null || !(ln & 268435455) && !(yi & 268435455) || jt(ue, de)
}
function si(t, e) {
    var n = U;
    U |= 2;
    var r = eh();
    (ue !== t || de !== e) && (ut = null,
    nn(t, e));
    do
        try {
            Jp();
            break
        } catch (s) {
            Zd(t, s)
        }
    while (!0);
    if (Ua(),
    U = n,
    ti.current = r,
    re !== null)
        throw Error(x(261));
    return ue = null,
    de = 0,
    ae
}
function Jp() {
    for (; re !== null; )
        th(re)
}
function Qp() {
    for (; re !== null && !kf(); )
        th(re)
}
function th(t) {
    var e = sh(t.alternate, t, Oe);
    t.memoizedProps = t.pendingProps,
    e === null ? nh(t) : re = e,
    Xa.current = null
}
function nh(t) {
    var e = t;
    do {
        var n = e.alternate;
        if (t = e.return,
        e.flags & 32768) {
            if (n = Wp(n, e),
            n !== null) {
                n.flags &= 32767,
                re = n;
                return
            }
            if (t !== null)
                t.flags |= 32768,
                t.subtreeFlags = 0,
                t.deletions = null;
            else {
                ae = 6,
                re = null;
                return
            }
        } else if (n = Bp(n, e, Oe),
        n !== null) {
            re = n;
            return
        }
        if (e = e.sibling,
        e !== null) {
            re = e;
            return
        }
        re = e = t
    } while (e !== null);
    ae === 0 && (ae = 5)
}
function Qt(t, e, n) {
    var r = B
      , s = Be.transition;
    try {
        Be.transition = null,
        B = 1,
        Yp(t, e, n, r)
    } finally {
        Be.transition = s,
        B = r
    }
    return null
}
function Yp(t, e, n, r) {
    do
        Mn();
    while (Pt !== null);
    if (U & 6)
        throw Error(x(327));
    n = t.finishedWork;
    var s = t.finishedLanes;
    if (n === null)
        return null;
    if (t.finishedWork = null,
    t.finishedLanes = 0,
    n === t.current)
        throw Error(x(177));
    t.callbackNode = null,
    t.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Of(t, i),
    t === ue && (re = ue = null,
    de = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ms || (ms = !0,
    ih(Us, function() {
        return Mn(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = Be.transition,
        Be.transition = null;
        var o = B;
        B = 1;
        var a = U;
        U |= 4,
        Xa.current = null,
        Hp(t, n),
        Qd(n, t),
        vp(Ao),
        Fs = !!Ro,
        Ao = Ro = null,
        t.current = n,
        qp(n),
        xf(),
        U = a,
        B = o,
        Be.transition = i
    } else
        t.current = n;
    if (ms && (ms = !1,
    Pt = t,
    ri = s),
    i = t.pendingLanes,
    i === 0 && ($t = null),
    bf(n.stateNode),
    Ne(t, ne()),
    e !== null)
        for (r = t.onRecoverableError,
        n = 0; n < e.length; n++)
            s = e[n],
            r(s.value, {
                componentStack: s.stack,
                digest: s.digest
            });
    if (ni)
        throw ni = !1,
        t = Zo,
        Zo = null,
        t;
    return ri & 1 && t.tag !== 0 && Mn(),
    i = t.pendingLanes,
    i & 1 ? t === ea ? Sr++ : (Sr = 0,
    ea = t) : Sr = 0,
    Wt(),
    null
}
function Mn() {
    if (Pt !== null) {
        var t = Lc(ri)
          , e = Be.transition
          , n = B;
        try {
            if (Be.transition = null,
            B = 16 > t ? 16 : t,
            Pt === null)
                var r = !1;
            else {
                if (t = Pt,
                Pt = null,
                ri = 0,
                U & 6)
                    throw Error(x(331));
                var s = U;
                for (U |= 4,
                P = t.current; P !== null; ) {
                    var i = P
                      , o = i.child;
                    if (P.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (P = u; P !== null; ) {
                                    var c = P;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        kr(8, c, i)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        P = d;
                                    else
                                        for (; P !== null; ) {
                                            c = P;
                                            var h = c.sibling
                                              , v = c.return;
                                            if (Kd(c),
                                            c === u) {
                                                P = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = v,
                                                P = h;
                                                break
                                            }
                                            P = v
                                        }
                                }
                            }
                            var y = i.alternate;
                            if (y !== null) {
                                var w = y.child;
                                if (w !== null) {
                                    y.child = null;
                                    do {
                                        var k = w.sibling;
                                        w.sibling = null,
                                        w = k
                                    } while (w !== null)
                                }
                            }
                            P = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        o.return = i,
                        P = o;
                    else
                        e: for (; P !== null; ) {
                            if (i = P,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    kr(9, i, i.return)
                                }
                            var m = i.sibling;
                            if (m !== null) {
                                m.return = i.return,
                                P = m;
                                break e
                            }
                            P = i.return
                        }
                }
                var f = t.current;
                for (P = f; P !== null; ) {
                    o = P;
                    var p = o.child;
                    if (o.subtreeFlags & 2064 && p !== null)
                        p.return = o,
                        P = p;
                    else
                        e: for (o = f; P !== null; ) {
                            if (a = P,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        vi(9, a)
                                    }
                                } catch (E) {
                                    te(a, a.return, E)
                                }
                            if (a === o) {
                                P = null;
                                break e
                            }
                            var _ = a.sibling;
                            if (_ !== null) {
                                _.return = a.return,
                                P = _;
                                break e
                            }
                            P = a.return
                        }
                }
                if (U = s,
                Wt(),
                ot && typeof ot.onPostCommitFiberRoot == "function")
                    try {
                        ot.onPostCommitFiberRoot(ui, t)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            B = n,
            Be.transition = e
        }
    }
    return !1
}
function Su(t, e, n) {
    e = Vn(n, e),
    e = Ld(t, e, 1),
    t = It(t, e, 1),
    e = ke(),
    t !== null && (qr(t, 1, e),
    Ne(t, e))
}
function te(t, e, n) {
    if (t.tag === 3)
        Su(t, t, n);
    else
        for (; e !== null; ) {
            if (e.tag === 3) {
                Su(e, t, n);
                break
            } else if (e.tag === 1) {
                var r = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && ($t === null || !$t.has(r))) {
                    t = Vn(n, t),
                    t = Dd(e, t, 1),
                    e = It(e, t, 1),
                    t = ke(),
                    e !== null && (qr(e, 1, t),
                    Ne(e, t));
                    break
                }
            }
            e = e.return
        }
}
function Xp(t, e, n) {
    var r = t.pingCache;
    r !== null && r.delete(e),
    e = ke(),
    t.pingedLanes |= t.suspendedLanes & n,
    ue === t && (de & n) === n && (ae === 4 || ae === 3 && (de & 130023424) === de && 500 > ne() - el ? nn(t, 0) : Za |= n),
    Ne(t, e)
}
function rh(t, e) {
    e === 0 && (t.mode & 1 ? (e = is,
    is <<= 1,
    !(is & 130023424) && (is = 4194304)) : e = 1);
    var n = ke();
    t = vt(t, e),
    t !== null && (qr(t, e, n),
    Ne(t, n))
}
function Zp(t) {
    var e = t.memoizedState
      , n = 0;
    e !== null && (n = e.retryLane),
    rh(t, n)
}
function em(t, e) {
    var n = 0;
    switch (t.tag) {
    case 13:
        var r = t.stateNode
          , s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
    case 19:
        r = t.stateNode;
        break;
    default:
        throw Error(x(314))
    }
    r !== null && r.delete(e),
    rh(t, n)
}
var sh;
sh = function(t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || Te.current)
            Ce = !0;
        else {
            if (!(t.lanes & n) && !(e.flags & 128))
                return Ce = !1,
                Fp(t, e, n);
            Ce = !!(t.flags & 131072)
        }
    else
        Ce = !1,
        Q && e.flags & 1048576 && ld(e, Gs, e.index);
    switch (e.lanes = 0,
    e.tag) {
    case 2:
        var r = e.type;
        Os(t, e),
        t = e.pendingProps;
        var s = zn(e, ve.current);
        Dn(e, n),
        s = Ka(null, e, r, t, s, n);
        var i = Ga();
        return e.flags |= 1,
        typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (e.tag = 1,
        e.memoizedState = null,
        e.updateQueue = null,
        Pe(r) ? (i = !0,
        qs(e)) : i = !1,
        e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        Ba(e),
        s.updater = gi,
        e.stateNode = s,
        s._reactInternals = e,
        Bo(e, r, t, n),
        e = Ho(null, e, r, !0, i, n)) : (e.tag = 0,
        Q && i && $a(e),
        _e(null, e, s, n),
        e = e.child),
        e;
    case 16:
        r = e.elementType;
        e: {
            switch (Os(t, e),
            t = e.pendingProps,
            s = r._init,
            r = s(r._payload),
            e.type = r,
            s = e.tag = nm(r),
            t = Ge(r, t),
            s) {
            case 0:
                e = Vo(null, e, r, t, n);
                break e;
            case 1:
                e = fu(null, e, r, t, n);
                break e;
            case 11:
                e = du(null, e, r, t, n);
                break e;
            case 14:
                e = hu(null, e, r, Ge(r.type, t), n);
                break e
            }
            throw Error(x(306, r, ""))
        }
        return e;
    case 0:
        return r = e.type,
        s = e.pendingProps,
        s = e.elementType === r ? s : Ge(r, s),
        Vo(t, e, r, s, n);
    case 1:
        return r = e.type,
        s = e.pendingProps,
        s = e.elementType === r ? s : Ge(r, s),
        fu(t, e, r, s, n);
    case 3:
        e: {
            if (Fd(e),
            t === null)
                throw Error(x(387));
            r = e.pendingProps,
            i = e.memoizedState,
            s = i.element,
            pd(t, e),
            Ys(e, r, null, n);
            var o = e.memoizedState;
            if (r = o.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                e.updateQueue.baseState = i,
                e.memoizedState = i,
                e.flags & 256) {
                    s = Vn(Error(x(423)), e),
                    e = pu(t, e, r, n, s);
                    break e
                } else if (r !== s) {
                    s = Vn(Error(x(424)), e),
                    e = pu(t, e, r, n, s);
                    break e
                } else
                    for (Re = At(e.stateNode.containerInfo.firstChild),
                    Ae = e,
                    Q = !0,
                    Ye = null,
                    n = hd(e, null, r, n),
                    e.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Fn(),
                r === s) {
                    e = yt(t, e, n);
                    break e
                }
                _e(t, e, r, n)
            }
            e = e.child
        }
        return e;
    case 5:
        return md(e),
        t === null && Uo(e),
        r = e.type,
        s = e.pendingProps,
        i = t !== null ? t.memoizedProps : null,
        o = s.children,
        Io(r, s) ? o = null : i !== null && Io(r, i) && (e.flags |= 32),
        zd(t, e),
        _e(t, e, o, n),
        e.child;
    case 6:
        return t === null && Uo(e),
        null;
    case 13:
        return Bd(t, e, n);
    case 4:
        return Wa(e, e.stateNode.containerInfo),
        r = e.pendingProps,
        t === null ? e.child = Bn(e, null, r, n) : _e(t, e, r, n),
        e.child;
    case 11:
        return r = e.type,
        s = e.pendingProps,
        s = e.elementType === r ? s : Ge(r, s),
        du(t, e, r, s, n);
    case 7:
        return _e(t, e, e.pendingProps, n),
        e.child;
    case 8:
        return _e(t, e, e.pendingProps.children, n),
        e.child;
    case 12:
        return _e(t, e, e.pendingProps.children, n),
        e.child;
    case 10:
        e: {
            if (r = e.type._context,
            s = e.pendingProps,
            i = e.memoizedProps,
            o = s.value,
            q(Js, r._currentValue),
            r._currentValue = o,
            i !== null)
                if (et(i.value, o)) {
                    if (i.children === s.children && !Te.current) {
                        e = yt(t, e, n);
                        break e
                    }
                } else
                    for (i = e.child,
                    i !== null && (i.return = e); i !== null; ) {
                        var a = i.dependencies;
                        if (a !== null) {
                            o = i.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (i.tag === 1) {
                                        l = pt(-1, n & -n),
                                        l.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    i.lanes |= n,
                                    l = i.alternate,
                                    l !== null && (l.lanes |= n),
                                    zo(i.return, n, e),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (i.tag === 10)
                            o = i.type === e.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (o = i.return,
                            o === null)
                                throw Error(x(341));
                            o.lanes |= n,
                            a = o.alternate,
                            a !== null && (a.lanes |= n),
                            zo(o, n, e),
                            o = i.sibling
                        } else
                            o = i.child;
                        if (o !== null)
                            o.return = i;
                        else
                            for (o = i; o !== null; ) {
                                if (o === e) {
                                    o = null;
                                    break
                                }
                                if (i = o.sibling,
                                i !== null) {
                                    i.return = o.return,
                                    o = i;
                                    break
                                }
                                o = o.return
                            }
                        i = o
                    }
            _e(t, e, s.children, n),
            e = e.child
        }
        return e;
    case 9:
        return s = e.type,
        r = e.pendingProps.children,
        Dn(e, n),
        s = Ve(s),
        r = r(s),
        e.flags |= 1,
        _e(t, e, r, n),
        e.child;
    case 14:
        return r = e.type,
        s = Ge(r, e.pendingProps),
        s = Ge(r.type, s),
        hu(t, e, r, s, n);
    case 15:
        return Md(t, e, e.type, e.pendingProps, n);
    case 17:
        return r = e.type,
        s = e.pendingProps,
        s = e.elementType === r ? s : Ge(r, s),
        Os(t, e),
        e.tag = 1,
        Pe(r) ? (t = !0,
        qs(e)) : t = !1,
        Dn(e, n),
        $d(e, r, s),
        Bo(e, r, s, n),
        Ho(null, e, r, !0, t, n);
    case 19:
        return Wd(t, e, n);
    case 22:
        return Ud(t, e, n)
    }
    throw Error(x(156, e.tag))
}
;
function ih(t, e) {
    return Rc(t, e)
}
function tm(t, e, n, r) {
    this.tag = t,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = e,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Fe(t, e, n, r) {
    return new tm(t,e,n,r)
}
function sl(t) {
    return t = t.prototype,
    !(!t || !t.isReactComponent)
}
function nm(t) {
    if (typeof t == "function")
        return sl(t) ? 1 : 0;
    if (t != null) {
        if (t = t.$$typeof,
        t === Sa)
            return 11;
        if (t === Ea)
            return 14
    }
    return 2
}
function Dt(t, e) {
    var n = t.alternate;
    return n === null ? (n = Fe(t.tag, e, t.key, t.mode),
    n.elementType = t.elementType,
    n.type = t.type,
    n.stateNode = t.stateNode,
    n.alternate = t,
    t.alternate = n) : (n.pendingProps = e,
    n.type = t.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = t.flags & 14680064,
    n.childLanes = t.childLanes,
    n.lanes = t.lanes,
    n.child = t.child,
    n.memoizedProps = t.memoizedProps,
    n.memoizedState = t.memoizedState,
    n.updateQueue = t.updateQueue,
    e = t.dependencies,
    n.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
    },
    n.sibling = t.sibling,
    n.index = t.index,
    n.ref = t.ref,
    n
}
function Is(t, e, n, r, s, i) {
    var o = 2;
    if (r = t,
    typeof t == "function")
        sl(t) && (o = 1);
    else if (typeof t == "string")
        o = 5;
    else
        e: switch (t) {
        case xn:
            return rn(n.children, s, i, e);
        case xa:
            o = 8,
            s |= 8;
            break;
        case ho:
            return t = Fe(12, n, e, s | 2),
            t.elementType = ho,
            t.lanes = i,
            t;
        case fo:
            return t = Fe(13, n, e, s),
            t.elementType = fo,
            t.lanes = i,
            t;
        case po:
            return t = Fe(19, n, e, s),
            t.elementType = po,
            t.lanes = i,
            t;
        case mc:
            return wi(n, s, i, e);
        default:
            if (typeof t == "object" && t !== null)
                switch (t.$$typeof) {
                case fc:
                    o = 10;
                    break e;
                case pc:
                    o = 9;
                    break e;
                case Sa:
                    o = 11;
                    break e;
                case Ea:
                    o = 14;
                    break e;
                case St:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(x(130, t == null ? t : typeof t, ""))
        }
    return e = Fe(o, n, e, s),
    e.elementType = t,
    e.type = r,
    e.lanes = i,
    e
}
function rn(t, e, n, r) {
    return t = Fe(7, t, r, e),
    t.lanes = n,
    t
}
function wi(t, e, n, r) {
    return t = Fe(22, t, r, e),
    t.elementType = mc,
    t.lanes = n,
    t.stateNode = {
        isHidden: !1
    },
    t
}
function Zi(t, e, n) {
    return t = Fe(6, t, null, e),
    t.lanes = n,
    t
}
function eo(t, e, n) {
    return e = Fe(4, t.children !== null ? t.children : [], t.key, e),
    e.lanes = n,
    e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
    },
    e
}
function rm(t, e, n, r, s) {
    this.tag = e,
    this.containerInfo = t,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Ii(0),
    this.expirationTimes = Ii(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Ii(0),
    this.identifierPrefix = r,
    this.onRecoverableError = s,
    this.mutableSourceEagerHydrationData = null
}
function il(t, e, n, r, s, i, o, a, l) {
    return t = new rm(t,e,n,a,l),
    e === 1 ? (e = 1,
    i === !0 && (e |= 8)) : e = 0,
    i = Fe(3, null, null, e),
    t.current = i,
    i.stateNode = t,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Ba(i),
    t
}
function sm(t, e, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: kn,
        key: r == null ? null : "" + r,
        children: t,
        containerInfo: e,
        implementation: n
    }
}
function oh(t) {
    if (!t)
        return Ut;
    t = t._reactInternals;
    e: {
        if (dn(t) !== t || t.tag !== 1)
            throw Error(x(170));
        var e = t;
        do {
            switch (e.tag) {
            case 3:
                e = e.stateNode.context;
                break e;
            case 1:
                if (Pe(e.type)) {
                    e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            e = e.return
        } while (e !== null);
        throw Error(x(171))
    }
    if (t.tag === 1) {
        var n = t.type;
        if (Pe(n))
            return od(t, n, e)
    }
    return e
}
function ah(t, e, n, r, s, i, o, a, l) {
    return t = il(n, r, !0, t, s, i, o, a, l),
    t.context = oh(null),
    n = t.current,
    r = ke(),
    s = Lt(n),
    i = pt(r, s),
    i.callback = e ?? null,
    It(n, i, s),
    t.current.lanes = s,
    qr(t, s, r),
    Ne(t, r),
    t
}
function _i(t, e, n, r) {
    var s = e.current
      , i = ke()
      , o = Lt(s);
    return n = oh(n),
    e.context === null ? e.context = n : e.pendingContext = n,
    e = pt(i, o),
    e.payload = {
        element: t
    },
    r = r === void 0 ? null : r,
    r !== null && (e.callback = r),
    t = It(s, e, o),
    t !== null && (Ze(t, s, o, i),
    Ts(t, s, o)),
    o
}
function ii(t) {
    if (t = t.current,
    !t.child)
        return null;
    switch (t.child.tag) {
    case 5:
        return t.child.stateNode;
    default:
        return t.child.stateNode
    }
}
function Eu(t, e) {
    if (t = t.memoizedState,
    t !== null && t.dehydrated !== null) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e
    }
}
function ol(t, e) {
    Eu(t, e),
    (t = t.alternate) && Eu(t, e)
}
function im() {
    return null
}
var lh = typeof reportError == "function" ? reportError : function(t) {
    console.error(t)
}
;
function al(t) {
    this._internalRoot = t
}
ki.prototype.render = al.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null)
        throw Error(x(409));
    _i(t, e, null, null)
}
;
ki.prototype.unmount = al.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        un(function() {
            _i(null, t, null, null)
        }),
        e[gt] = null
    }
}
;
function ki(t) {
    this._internalRoot = t
}
ki.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
        var e = Uc();
        t = {
            blockedOn: null,
            target: t,
            priority: e
        };
        for (var n = 0; n < bt.length && e !== 0 && e < bt[n].priority; n++)
            ;
        bt.splice(n, 0, t),
        n === 0 && Fc(t)
    }
}
;
function ll(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
}
function xi(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
}
function bu() {}
function om(t, e, n, r, s) {
    if (s) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = ii(o);
                i.call(u)
            }
        }
        var o = ah(e, r, t, 0, null, !1, !1, "", bu);
        return t._reactRootContainer = o,
        t[gt] = o.current,
        $r(t.nodeType === 8 ? t.parentNode : t),
        un(),
        o
    }
    for (; s = t.lastChild; )
        t.removeChild(s);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = ii(l);
            a.call(u)
        }
    }
    var l = il(t, 0, !1, null, null, !1, !1, "", bu);
    return t._reactRootContainer = l,
    t[gt] = l.current,
    $r(t.nodeType === 8 ? t.parentNode : t),
    un(function() {
        _i(e, l, n, r)
    }),
    l
}
function Si(t, e, n, r, s) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof s == "function") {
            var a = s;
            s = function() {
                var l = ii(o);
                a.call(l)
            }
        }
        _i(e, o, t, s)
    } else
        o = om(n, e, t, s, r);
    return ii(o)
}
Dc = function(t) {
    switch (t.tag) {
    case 3:
        var e = t.stateNode;
        if (e.current.memoizedState.isDehydrated) {
            var n = hr(e.pendingLanes);
            n !== 0 && (Ca(e, n | 1),
            Ne(e, ne()),
            !(U & 6) && (Hn = ne() + 500,
            Wt()))
        }
        break;
    case 13:
        un(function() {
            var r = vt(t, 1);
            if (r !== null) {
                var s = ke();
                Ze(r, t, 1, s)
            }
        }),
        ol(t, 1)
    }
}
;
Ta = function(t) {
    if (t.tag === 13) {
        var e = vt(t, 134217728);
        if (e !== null) {
            var n = ke();
            Ze(e, t, 134217728, n)
        }
        ol(t, 134217728)
    }
}
;
Mc = function(t) {
    if (t.tag === 13) {
        var e = Lt(t)
          , n = vt(t, e);
        if (n !== null) {
            var r = ke();
            Ze(n, t, e, r)
        }
        ol(t, e)
    }
}
;
Uc = function() {
    return B
}
;
zc = function(t, e) {
    var n = B;
    try {
        return B = t,
        e()
    } finally {
        B = n
    }
}
;
Eo = function(t, e, n) {
    switch (e) {
    case "input":
        if (vo(t, n),
        e = n.name,
        n.type === "radio" && e != null) {
            for (n = t; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'),
            e = 0; e < n.length; e++) {
                var r = n[e];
                if (r !== t && r.form === t.form) {
                    var s = fi(r);
                    if (!s)
                        throw Error(x(90));
                    vc(r),
                    vo(r, s)
                }
            }
        }
        break;
    case "textarea":
        wc(t, n);
        break;
    case "select":
        e = n.value,
        e != null && An(t, !!n.multiple, e, !1)
    }
}
;
jc = tl;
Cc = un;
var am = {
    usingClientEntryPoint: !1,
    Events: [Gr, jn, fi, Ec, bc, tl]
}
  , ir = {
    findFiberByHostInstance: Zt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , lm = {
    bundleType: ir.bundleType,
    version: ir.version,
    rendererPackageName: ir.rendererPackageName,
    rendererConfig: ir.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: wt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(t) {
        return t = Nc(t),
        t === null ? null : t.stateNode
    },
    findFiberByHostInstance: ir.findFiberByHostInstance || im,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gs.isDisabled && gs.supportsFiber)
        try {
            ui = gs.inject(lm),
            ot = gs
        } catch {}
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = am;
$e.createPortal = function(t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ll(e))
        throw Error(x(200));
    return sm(t, e, null, n)
}
;
$e.createRoot = function(t, e) {
    if (!ll(t))
        throw Error(x(299));
    var n = !1
      , r = ""
      , s = lh;
    return e != null && (e.unstable_strictMode === !0 && (n = !0),
    e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
    e.onRecoverableError !== void 0 && (s = e.onRecoverableError)),
    e = il(t, 1, !1, null, null, n, !1, r, s),
    t[gt] = e.current,
    $r(t.nodeType === 8 ? t.parentNode : t),
    new al(e)
}
;
$e.findDOMNode = function(t) {
    if (t == null)
        return null;
    if (t.nodeType === 1)
        return t;
    var e = t._reactInternals;
    if (e === void 0)
        throw typeof t.render == "function" ? Error(x(188)) : (t = Object.keys(t).join(","),
        Error(x(268, t)));
    return t = Nc(e),
    t = t === null ? null : t.stateNode,
    t
}
;
$e.flushSync = function(t) {
    return un(t)
}
;
$e.hydrate = function(t, e, n) {
    if (!xi(e))
        throw Error(x(200));
    return Si(null, t, e, !0, n)
}
;
$e.hydrateRoot = function(t, e, n) {
    if (!ll(t))
        throw Error(x(405));
    var r = n != null && n.hydratedSources || null
      , s = !1
      , i = ""
      , o = lh;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    e = ah(e, null, t, 1, n ?? null, s, !1, i, o),
    t[gt] = e.current,
    $r(t),
    r)
        for (t = 0; t < r.length; t++)
            n = r[t],
            s = n._getVersion,
            s = s(n._source),
            e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, s] : e.mutableSourceEagerHydrationData.push(n, s);
    return new ki(e)
}
;
$e.render = function(t, e, n) {
    if (!xi(e))
        throw Error(x(200));
    return Si(null, t, e, !1, n)
}
;
$e.unmountComponentAtNode = function(t) {
    if (!xi(t))
        throw Error(x(40));
    return t._reactRootContainer ? (un(function() {
        Si(null, null, t, !1, function() {
            t._reactRootContainer = null,
            t[gt] = null
        })
    }),
    !0) : !1
}
;
$e.unstable_batchedUpdates = tl;
$e.unstable_renderSubtreeIntoContainer = function(t, e, n, r) {
    if (!xi(n))
        throw Error(x(200));
    if (t == null || t._reactInternals === void 0)
        throw Error(x(38));
    return Si(t, e, n, !1, r)
}
;
$e.version = "18.3.1-next-f1338f8080-20240426";
function uh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uh)
        } catch (t) {
            console.error(t)
        }
}
uh(),
uc.exports = $e;
var um = uc.exports, ch, ju = um;
ch = ju.createRoot,
ju.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var cm = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dm = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , Ee = (t, e) => {
    const n = j.forwardRef( ({color: r="currentColor", size: s=24, strokeWidth: i=2, absoluteStrokeWidth: o, className: a="", children: l, ...u}, c) => j.createElement("svg", {
        ref: c,
        ...cm,
        width: s,
        height: s,
        stroke: r,
        strokeWidth: o ? Number(i) * 24 / Number(s) : i,
        className: ["lucide", `lucide-${dm(t)}`, a].join(" "),
        ...u
    }, [...e.map( ([d,h]) => j.createElement(d, h)), ...Array.isArray(l) ? l : [l]]));
    return n.displayName = `${t}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hm = Ee("AlertCircle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ul = Ee("Eye", [["path", {
    d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
    key: "rwhkz3"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fm = Ee("Maximize2", [["polyline", {
    points: "15 3 21 3 21 9",
    key: "mznyad"
}], ["polyline", {
    points: "9 21 3 21 3 15",
    key: "1avn1i"
}], ["line", {
    x1: "21",
    x2: "14",
    y1: "3",
    y2: "10",
    key: "ota7mn"
}], ["line", {
    x1: "3",
    x2: "10",
    y1: "21",
    y2: "14",
    key: "1atl0r"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cu = Ee("MessageCircle", [["path", {
    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
    key: "vv11sd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pm = Ee("Play", [["polygon", {
    points: "5 3 19 12 5 21 5 3",
    key: "191637"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mm = Ee("Radio", [["path", {
    d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9",
    key: "1vaf9d"
}], ["path", {
    d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",
    key: "u1ii0m"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "2",
    key: "1c9p78"
}], ["path", {
    d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",
    key: "1j5fej"
}], ["path", {
    d: "M19.1 4.9C23 8.8 23 15.1 19.1 19",
    key: "10b0cb"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ra = Ee("RefreshCw", [["path", {
    d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
    key: "v9h5vc"
}], ["path", {
    d: "M21 3v5h-5",
    key: "1q7to0"
}], ["path", {
    d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
    key: "3uifl3"
}], ["path", {
    d: "M8 16H3v5",
    key: "1cv678"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tu = Ee("RotateCcw", [["path", {
    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
    key: "1357e3"
}], ["path", {
    d: "M3 3v5h5",
    key: "1xhq8a"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gm = Ee("Send", [["path", {
    d: "m22 2-7 20-4-9-9-4Z",
    key: "1q3vgg"
}], ["path", {
    d: "M22 2 11 13",
    key: "nzbqef"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dh = Ee("Share2", [["circle", {
    cx: "18",
    cy: "5",
    r: "3",
    key: "gq8acd"
}], ["circle", {
    cx: "6",
    cy: "12",
    r: "3",
    key: "w7nqdw"
}], ["circle", {
    cx: "18",
    cy: "19",
    r: "3",
    key: "1xt0gg"
}], ["line", {
    x1: "8.59",
    x2: "15.42",
    y1: "13.51",
    y2: "17.49",
    key: "47mynk"
}], ["line", {
    x1: "15.41",
    x2: "8.59",
    y1: "6.51",
    y2: "10.49",
    key: "1n3mei"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vm = Ee("Smile", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M8 14s1.5 2 4 2 4-2 4-2",
    key: "1y1vjs"
}], ["line", {
    x1: "9",
    x2: "9.01",
    y1: "9",
    y2: "9",
    key: "yxxnd0"
}], ["line", {
    x1: "15",
    x2: "15.01",
    y1: "9",
    y2: "9",
    key: "1p4y9e"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ym = Ee("TrendingUp", [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17",
    key: "126l90"
}], ["polyline", {
    points: "16 7 22 7 22 13",
    key: "kwv8wd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pu = Ee("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nu = Ee("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hh = Ee("Zap", [["polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
    key: "45s27k"
}]])
  , wm = "https://i.postimg.cc/J4m9Dz70/Gemini-Generated-Image-4zvnud4zvnud4zvn-Picsart-Background-Remover.png";
function _m() {
    return g.jsx("header", {
        className: "sticky top-0 z-40 px-3 sm:px-6 lg:px-8 py-3 sm:py-4 border-b border-orange-500/10 backdrop-blur-md bg-gradient-to-b from-gray-950/95 to-gray-950/80 shadow-lg shadow-black/20",
        children: g.jsxs("div", {
            className: "max-w-7xl mx-auto flex items-center justify-between",
            children: [g.jsxs("div", {
                className: "flex items-center gap-2 sm:gap-4 min-w-0",
                children: [g.jsx("div", {
                    className: "relative flex-shrink-0",
                    children: g.jsx("img", {
                        src: wm,
                        alt: "NY Cricket Live",
                        className: "h-8 sm:h-10 w-auto object-contain drop-shadow-lg"
                    })
                }), g.jsxs("div", {
                    children: [g.jsx("h1", {
                        className: "text-white font-black text-sm sm:text-lg leading-tight tracking-tight",
                        children: "NY Cricket"
                    }), g.jsx("p", {
                        className: "text-orange-400 text-xs font-bold tracking-widest uppercase hidden sm:block",
                        children: "Live"
                    })]
                })]
            }), g.jsx("div", {
                className: "flex items-center gap-2 sm:gap-3 flex-shrink-0",
                children: g.jsxs("div", {
                    className: "flex items-center gap-1.5 bg-gradient-to-r from-red-600/20 to-red-500/10 border border-red-500/40 rounded-full px-2.5 sm:px-3 py-1.5 hover:border-red-500/60 transition-all duration-200",
                    children: [g.jsx(mm, {
                        size: 11,
                        className: "sm:w-3 sm:h-3 text-red-400 animate-pulse flex-shrink-0"
                    }), g.jsx("span", {
                        className: "text-red-400 text-xs font-black tracking-wider uppercase",
                        children: "Live"
                    })]
                })
            })]
        })
    })
}
function km({channel: t, onClick: e, viewCount: n, liveViewers: r, peakViewers: s}) {
    const [i,o] = j.useState(!1)
      , a = `${window.location.origin}?channel=${t.id}`
      , l = u => {
        u.stopPropagation(),
        navigator.clipboard.writeText(a),
        o(!0),
        setTimeout( () => o(!1), 2e3)
    }
    ;
    return g.jsxs("button", {
        onClick: () => e(t),
        className: "group relative h-full bg-gradient-to-br from-gray-900 via-gray-920 to-gray-950 border border-orange-500/20 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:border-orange-500/60 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2 text-left w-full flex flex-col active:scale-95 sm:active:scale-100",
        children: [g.jsxs("div", {
            className: "relative flex-1 flex flex-col p-3 sm:p-4",
            children: [g.jsxs("div", {
                className: "relative w-full aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg sm:rounded-xl overflow-hidden mb-3 flex-shrink-0",
                children: [t.logo ? g.jsx("img", {
                    src: t.logo,
                    alt: t.name,
                    className: "w-full h-full object-contain p-2 sm:p-4 transition-transform duration-500 group-hover:scale-110",
                    onError: u => {
                        u.target.style.display = "none"
                    }
                }) : null, g.jsx("div", {
                    className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-200 bg-black/40",
                    children: g.jsx("div", {
                        className: "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50 scale-75 sm:scale-100 group-hover:scale-110 transition-transform duration-300",
                        children: g.jsx(pm, {
                            size: 18,
                            className: "text-white ml-0.5 sm:ml-1",
                            fill: "white"
                        })
                    })
                }), g.jsxs("div", {
                    className: "absolute top-2 left-2 flex items-center gap-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full px-2 py-1 shadow-lg shadow-red-500/40 animate-pulse",
                    children: [g.jsx("div", {
                        className: "w-1.5 h-1.5 bg-white rounded-full animate-pulse"
                    }), g.jsx("span", {
                        className: "text-white text-xs font-bold",
                        children: "LIVE"
                    })]
                }), g.jsxs("div", {
                    className: "absolute top-2 right-2 bg-gradient-to-r from-gray-900/90 to-gray-900/60 backdrop-blur-sm border border-orange-500/30 rounded-lg px-2 py-1 flex items-center gap-1",
                    children: [g.jsx(hh, {
                        size: 12,
                        className: "text-yellow-400 animate-pulse"
                    }), g.jsx("span", {
                        className: "text-white text-xs font-bold",
                        children: r
                    })]
                })]
            }), g.jsxs("div", {
                className: "flex-1 flex flex-col justify-between gap-2",
                children: [g.jsxs("div", {
                    className: "min-w-0",
                    children: [g.jsx("h3", {
                        className: "text-white font-bold text-sm sm:text-base leading-tight truncate group-hover:text-orange-300 transition-colors duration-200 line-clamp-2",
                        children: t.name
                    }), g.jsx("p", {
                        className: "text-gray-500 text-xs mt-0.5 font-mono",
                        children: t.id.toUpperCase()
                    })]
                }), g.jsxs("div", {
                    className: "flex items-center justify-between pt-2 sm:pt-3 border-t border-gray-800/50 gap-2",
                    children: [g.jsxs("div", {
                        className: "flex items-center gap-1 text-gray-400 text-xs",
                        children: [g.jsx(ul, {
                            size: 12,
                            className: "flex-shrink-0"
                        }), g.jsx("span", {
                            className: "font-semibold tabular-nums",
                            children: n.toLocaleString()
                        })]
                    }), g.jsxs("button", {
                        onClick: l,
                        className: "flex items-center gap-1 px-2 py-1 bg-orange-500/10 hover:bg-orange-500/20 active:bg-orange-500/30 border border-orange-500/20 hover:border-orange-500/50 rounded-lg transition-all duration-200 flex-shrink-0",
                        title: "Copy share link",
                        children: [g.jsx(dh, {
                            size: 11,
                            className: "text-orange-400 flex-shrink-0"
                        }), g.jsx("span", {
                            className: "text-orange-400 text-xs font-bold whitespace-nowrap hidden sm:inline",
                            children: i ? "Copied!" : "Share"
                        })]
                    })]
                })]
            })]
        }), g.jsx("div", {
            className: "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        })]
    })
}
function xm({channels: t, loading: e, error: n, onSelect: r, viewCounts: s, liveViewers: i, peakViewers: o}) {
    return e ? g.jsxs("div", {
        className: "flex flex-col items-center justify-center py-16 sm:py-32 gap-3 sm:gap-4",
        children: [g.jsxs("div", {
            className: "relative w-12 h-12 sm:w-16 sm:h-16",
            children: [g.jsx("div", {
                className: "absolute inset-0 border-4 border-orange-500/20 rounded-full animate-spin"
            }), g.jsx("div", {
                className: "absolute inset-1 border-4 border-transparent border-t-orange-500 rounded-full animate-spin",
                style: {
                    animationDirection: "reverse"
                }
            })]
        }), g.jsx("p", {
            className: "text-gray-400 text-xs sm:text-sm font-medium",
            children: "Loading channels..."
        })]
    }) : n ? g.jsxs("div", {
        className: "flex flex-col items-center justify-center py-16 sm:py-32 gap-3 sm:gap-4 px-4",
        children: [g.jsx("div", {
            className: "w-12 h-12 sm:w-16 sm:h-16 bg-orange-500/10 rounded-full flex items-center justify-center border border-orange-500/20",
            children: g.jsx(hm, {
                size: 24,
                className: "sm:w-8 sm:h-8 text-orange-400"
            })
        }), g.jsx("p", {
            className: "text-orange-400 text-sm font-medium text-center",
            children: n
        }), g.jsxs("button", {
            onClick: () => window.location.reload(),
            className: "flex items-center gap-2 px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 active:bg-orange-500/30 border border-orange-500/30 text-orange-400 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200",
            children: [g.jsx(ra, {
                size: 14
            }), "Retry"]
        })]
    }) : t.length === 0 ? g.jsx("div", {
        className: "flex flex-col items-center justify-center py-16 sm:py-32 gap-2",
        children: g.jsx("p", {
            className: "text-gray-500 text-sm",
            children: "No channels available"
        })
    }) : g.jsx("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5",
        children: t.map( (a, l) => g.jsx("div", {
            className: "animate-slide-up",
            style: {
                animationDelay: `${l * 50}ms`
            },
            children: g.jsx(km, {
                channel: a,
                onClick: r,
                viewCount: s[a.id] || 0,
                liveViewers: i[a.id] || 0,
                peakViewers: o[a.id] || 0
            })
        }, a.id))
    })
}
const vs = 43200
  , Ou = 1440
  , Ru = Symbol.for("constructDateFrom");
function cl(t, e) {
    return typeof t == "function" ? t(e) : t && typeof t == "object" && Ru in t ? t[Ru](e) : t instanceof Date ? new t.constructor(e) : new Date(e)
}
function zt(t, e) {
    return cl(t, t)
}
let Sm = {};
function Em() {
    return Sm
}
function Au(t) {
    const e = zt(t)
      , n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
    return n.setUTCFullYear(e.getFullYear()),
    +t - +n
}
function dl(t, ...e) {
    const n = cl.bind(null, t || e.find(r => typeof r == "object"));
    return e.map(n)
}
function $s(t, e) {
    const n = +zt(t) - +zt(e);
    return n < 0 ? -1 : n > 0 ? 1 : n
}
function bm(t) {
    return cl(t, Date.now())
}
function jm(t, e, n) {
    const [r,s] = dl(n == null ? void 0 : n.in, t, e)
      , i = r.getFullYear() - s.getFullYear()
      , o = r.getMonth() - s.getMonth();
    return i * 12 + o
}
function Cm(t) {
    return e => {
        const r = (t ? Math[t] : Math.trunc)(e);
        return r === 0 ? 0 : r
    }
}
function Tm(t, e) {
    return +zt(t) - +zt(e)
}
function Pm(t, e) {
    const n = zt(t);
    return n.setHours(23, 59, 59, 999),
    n
}
function Nm(t, e) {
    const n = zt(t)
      , r = n.getMonth();
    return n.setFullYear(n.getFullYear(), r + 1, 0),
    n.setHours(23, 59, 59, 999),
    n
}
function Om(t, e) {
    const n = zt(t);
    return +Pm(n) == +Nm(n)
}
function Rm(t, e, n) {
    const [r,s,i] = dl(n == null ? void 0 : n.in, t, t, e)
      , o = $s(s, i)
      , a = Math.abs(jm(s, i));
    if (a < 1)
        return 0;
    s.getMonth() === 1 && s.getDate() > 27 && s.setDate(30),
    s.setMonth(s.getMonth() - o * a);
    let l = $s(s, i) === -o;
    Om(r) && a === 1 && $s(r, i) === 1 && (l = !1);
    const u = o * (a - +l);
    return u === 0 ? 0 : u
}
function Am(t, e, n) {
    const r = Tm(t, e) / 1e3;
    return Cm(n == null ? void 0 : n.roundingMethod)(r)
}
const Im = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
}
  , $m = (t, e, n) => {
    let r;
    const s = Im[t];
    return typeof s == "string" ? r = s : e === 1 ? r = s.one : r = s.other.replace("{{count}}", e.toString()),
    n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r
}
;
function to(t) {
    return (e={}) => {
        const n = e.width ? String(e.width) : t.defaultWidth;
        return t.formats[n] || t.formats[t.defaultWidth]
    }
}
const Lm = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
}
  , Dm = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
}
  , Mm = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
}
  , Um = {
    date: to({
        formats: Lm,
        defaultWidth: "full"
    }),
    time: to({
        formats: Dm,
        defaultWidth: "full"
    }),
    dateTime: to({
        formats: Mm,
        defaultWidth: "full"
    })
}
  , zm = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
}
  , Fm = (t, e, n, r) => zm[t];
function or(t) {
    return (e, n) => {
        const r = n != null && n.context ? String(n.context) : "standalone";
        let s;
        if (r === "formatting" && t.formattingValues) {
            const o = t.defaultFormattingWidth || t.defaultWidth
              , a = n != null && n.width ? String(n.width) : o;
            s = t.formattingValues[a] || t.formattingValues[o]
        } else {
            const o = t.defaultWidth
              , a = n != null && n.width ? String(n.width) : t.defaultWidth;
            s = t.values[a] || t.values[o]
        }
        const i = t.argumentCallback ? t.argumentCallback(e) : e;
        return s[i]
    }
}
const Bm = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
}
  , Wm = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}
  , Vm = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}
  , Hm = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}
  , qm = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
}
  , Km = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
}
  , Gm = (t, e) => {
    const n = Number(t)
      , r = n % 100;
    if (r > 20 || r < 10)
        switch (r % 10) {
        case 1:
            return n + "st";
        case 2:
            return n + "nd";
        case 3:
            return n + "rd"
        }
    return n + "th"
}
  , Jm = {
    ordinalNumber: Gm,
    era: or({
        values: Bm,
        defaultWidth: "wide"
    }),
    quarter: or({
        values: Wm,
        defaultWidth: "wide",
        argumentCallback: t => t - 1
    }),
    month: or({
        values: Vm,
        defaultWidth: "wide"
    }),
    day: or({
        values: Hm,
        defaultWidth: "wide"
    }),
    dayPeriod: or({
        values: qm,
        defaultWidth: "wide",
        formattingValues: Km,
        defaultFormattingWidth: "wide"
    })
};
function ar(t) {
    return (e, n={}) => {
        const r = n.width
          , s = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth]
          , i = e.match(s);
        if (!i)
            return null;
        const o = i[0]
          , a = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth]
          , l = Array.isArray(a) ? Ym(a, d => d.test(o)) : Qm(a, d => d.test(o));
        let u;
        u = t.valueCallback ? t.valueCallback(l) : l,
        u = n.valueCallback ? n.valueCallback(u) : u;
        const c = e.slice(o.length);
        return {
            value: u,
            rest: c
        }
    }
}
function Qm(t, e) {
    for (const n in t)
        if (Object.prototype.hasOwnProperty.call(t, n) && e(t[n]))
            return n
}
function Ym(t, e) {
    for (let n = 0; n < t.length; n++)
        if (e(t[n]))
            return n
}
function Xm(t) {
    return (e, n={}) => {
        const r = e.match(t.matchPattern);
        if (!r)
            return null;
        const s = r[0]
          , i = e.match(t.parsePattern);
        if (!i)
            return null;
        let o = t.valueCallback ? t.valueCallback(i[0]) : i[0];
        o = n.valueCallback ? n.valueCallback(o) : o;
        const a = e.slice(s.length);
        return {
            value: o,
            rest: a
        }
    }
}
const Zm = /^(\d+)(th|st|nd|rd)?/i
  , eg = /\d+/i
  , tg = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
}
  , ng = {
    any: [/^b/i, /^(a|c)/i]
}
  , rg = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
}
  , sg = {
    any: [/1/i, /2/i, /3/i, /4/i]
}
  , ig = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}
  , og = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}
  , ag = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}
  , lg = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}
  , ug = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}
  , cg = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
}
  , dg = {
    ordinalNumber: Xm({
        matchPattern: Zm,
        parsePattern: eg,
        valueCallback: t => parseInt(t, 10)
    }),
    era: ar({
        matchPatterns: tg,
        defaultMatchWidth: "wide",
        parsePatterns: ng,
        defaultParseWidth: "any"
    }),
    quarter: ar({
        matchPatterns: rg,
        defaultMatchWidth: "wide",
        parsePatterns: sg,
        defaultParseWidth: "any",
        valueCallback: t => t + 1
    }),
    month: ar({
        matchPatterns: ig,
        defaultMatchWidth: "wide",
        parsePatterns: og,
        defaultParseWidth: "any"
    }),
    day: ar({
        matchPatterns: ag,
        defaultMatchWidth: "wide",
        parsePatterns: lg,
        defaultParseWidth: "any"
    }),
    dayPeriod: ar({
        matchPatterns: ug,
        defaultMatchWidth: "any",
        parsePatterns: cg,
        defaultParseWidth: "any"
    })
}
  , hg = {
    code: "en-US",
    formatDistance: $m,
    formatLong: Um,
    formatRelative: Fm,
    localize: Jm,
    match: dg,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
function fg(t, e, n) {
    const r = Em()
      , s = (n == null ? void 0 : n.locale) ?? r.locale ?? hg
      , i = 2520
      , o = $s(t, e);
    if (isNaN(o))
        throw new RangeError("Invalid time value");
    const a = Object.assign({}, n, {
        addSuffix: n == null ? void 0 : n.addSuffix,
        comparison: o
    })
      , [l,u] = dl(n == null ? void 0 : n.in, ...o > 0 ? [e, t] : [t, e])
      , c = Am(u, l)
      , d = (Au(u) - Au(l)) / 1e3
      , h = Math.round((c - d) / 60);
    let v;
    if (h < 2)
        return n != null && n.includeSeconds ? c < 5 ? s.formatDistance("lessThanXSeconds", 5, a) : c < 10 ? s.formatDistance("lessThanXSeconds", 10, a) : c < 20 ? s.formatDistance("lessThanXSeconds", 20, a) : c < 40 ? s.formatDistance("halfAMinute", 0, a) : c < 60 ? s.formatDistance("lessThanXMinutes", 1, a) : s.formatDistance("xMinutes", 1, a) : h === 0 ? s.formatDistance("lessThanXMinutes", 1, a) : s.formatDistance("xMinutes", h, a);
    if (h < 45)
        return s.formatDistance("xMinutes", h, a);
    if (h < 90)
        return s.formatDistance("aboutXHours", 1, a);
    if (h < Ou) {
        const y = Math.round(h / 60);
        return s.formatDistance("aboutXHours", y, a)
    } else {
        if (h < i)
            return s.formatDistance("xDays", 1, a);
        if (h < vs) {
            const y = Math.round(h / Ou);
            return s.formatDistance("xDays", y, a)
        } else if (h < vs * 2)
            return v = Math.round(h / vs),
            s.formatDistance("aboutXMonths", v, a)
    }
    if (v = Rm(u, l),
    v < 12) {
        const y = Math.round(h / vs);
        return s.formatDistance("xMonths", y, a)
    } else {
        const y = v % 12
          , w = Math.trunc(v / 12);
        return y < 3 ? s.formatDistance("aboutXYears", w, a) : y < 9 ? s.formatDistance("overXYears", w, a) : s.formatDistance("almostXYears", w + 1, a)
    }
}
function pg(t, e) {
    return fg(t, bm(t), e)
}
function mg({username: t, message: e, userColor: n, timestamp: r, isCurrentUser: s}) {
    const i = pg(new Date(r), {
        addSuffix: !0
    });
    return g.jsxs("div", {
        className: `flex gap-2 sm:gap-3 animate-slide-up ${s ? "flex-row-reverse" : ""}`,
        children: [g.jsx("div", {
            className: "w-7 h-7 sm:w-8 sm:h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg",
            style: {
                backgroundColor: n
            },
            children: t.charAt(0).toUpperCase()
        }), g.jsxs("div", {
            className: `flex flex-col gap-0.5 flex-1 min-w-0 ${s ? "items-end" : "items-start"}`,
            children: [g.jsxs("div", {
                className: "flex items-center gap-2",
                children: [g.jsx("span", {
                    className: `text-xs sm:text-sm font-bold ${s ? "text-orange-300" : "text-gray-200"}`,
                    children: t
                }), g.jsx("span", {
                    className: "text-xs text-gray-500",
                    children: i
                })]
            }), g.jsx("div", {
                className: `px-3 py-1.5 rounded-lg text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-sm break-words ${s ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-br-none" : "bg-gray-800 text-gray-100 rounded-bl-none border border-gray-700"}`,
                children: e
            })]
        })]
    })
}
const gg = ["😂", "🔥", "👏", "❤️", "🎉", "⚡", "🏏", "✨", "🎯", "🔔"];
function vg({onSendMessage: t, onTyping: e, disabled: n, placeholder: r="Say something about the match..."}) {
    const s = j.useRef(null)
      , [i,o] = j.useState(!1)
      , a = () => {
        var h;
        const d = ((h = s.current) == null ? void 0 : h.value) || "";
        d.trim() && (console.log("Sending from ChatInput:", d),
        t(d),
        s.current && (s.current.value = "",
        s.current.focus()))
    }
      , l = d => {
        d.key === "Enter" && !d.shiftKey && (d.preventDefault(),
        a())
    }
      , u = () => {
        e()
    }
      , c = d => {
        if (s.current) {
            const h = s.current.selectionStart || 0
              , v = s.current.selectionEnd || 0
              , y = s.current.value
              , w = y.substring(0, h) + d + y.substring(v);
            s.current.value = w,
            s.current.selectionStart = s.current.selectionEnd = h + d.length,
            s.current.focus()
        }
        o(!1)
    }
    ;
    return g.jsxs("div", {
        className: "flex flex-col gap-2 p-3 sm:p-4 border-t border-gray-800 bg-gradient-to-t from-gray-900 to-transparent",
        children: [i && g.jsx("div", {
            className: "grid grid-cols-5 gap-2 p-2 bg-gray-800/50 rounded-lg animate-slide-up",
            children: gg.map(d => g.jsx("button", {
                onClick: () => c(d),
                className: "text-xl sm:text-2xl hover:scale-125 transition-transform duration-200 active:scale-110",
                title: d,
                children: d
            }, d))
        }), g.jsxs("div", {
            className: "flex gap-2 items-end",
            children: [g.jsx("button", {
                onClick: () => o(!i),
                className: "w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 hover:bg-gray-800 active:bg-gray-700 rounded-lg transition-colors duration-200 flex items-center justify-center",
                disabled: n,
                title: "Add emoji",
                children: g.jsx(vm, {
                    size: 18,
                    className: "text-orange-400"
                })
            }), g.jsx("input", {
                ref: s,
                type: "text",
                placeholder: r,
                onKeyPress: l,
                onInput: u,
                disabled: n,
                className: "flex-1 bg-gray-800/80 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            }), g.jsx("button", {
                onClick: a,
                disabled: n,
                className: "w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-yellow-500 active:from-orange-700 active:to-orange-600 rounded-lg transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-orange-500/30",
                title: "Send message",
                children: g.jsx(gm, {
                    size: 16,
                    className: "text-white"
                })
            })]
        })]
    })
}
const yg = "modulepreload"
  , wg = function(t) {
    return "/" + t
}
  , Iu = {}
  , Qr = function(e, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
        document.getElementsByTagName("link");
        const o = document.querySelector("meta[property=csp-nonce]")
          , a = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
        s = Promise.allSettled(n.map(l => {
            if (l = wg(l),
            l in Iu)
                return;
            Iu[l] = !0;
            const u = l.endsWith(".css")
              , c = u ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${l}"]${c}`))
                return;
            const d = document.createElement("link");
            if (d.rel = u ? "stylesheet" : yg,
            u || (d.as = "script"),
            d.crossOrigin = "",
            d.href = l,
            a && d.setAttribute("nonce", a),
            document.head.appendChild(d),
            u)
                return new Promise( (h, v) => {
                    d.addEventListener("load", h),
                    d.addEventListener("error", () => v(new Error(`Unable to preload CSS for ${l}`)))
                }
                )
        }
        ))
    }
    function i(o) {
        const a = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (a.payload = o,
        window.dispatchEvent(a),
        !a.defaultPrevented)
            throw o
    }
    return s.then(o => {
        for (const a of o || [])
            a.status === "rejected" && i(a.reason);
        return e().catch(i)
    }
    )
}
  , _g = t => {
    let e;
    return t ? e = t : typeof fetch > "u" ? e = (...n) => Qr(async () => {
        const {default: r} = await Promise.resolve().then( () => Qn);
        return {
            default: r
        }
    }
    , void 0).then( ({default: r}) => r(...n)) : e = fetch,
    (...n) => e(...n)
}
;
class hl extends Error {
    constructor(e, n="FunctionsError", r) {
        super(e),
        this.name = n,
        this.context = r
    }
}
class kg extends hl {
    constructor(e) {
        super("Failed to send a request to the Edge Function", "FunctionsFetchError", e)
    }
}
class $u extends hl {
    constructor(e) {
        super("Relay Error invoking the Edge Function", "FunctionsRelayError", e)
    }
}
class Lu extends hl {
    constructor(e) {
        super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e)
    }
}
var sa;
(function(t) {
    t.Any = "any",
    t.ApNortheast1 = "ap-northeast-1",
    t.ApNortheast2 = "ap-northeast-2",
    t.ApSouth1 = "ap-south-1",
    t.ApSoutheast1 = "ap-southeast-1",
    t.ApSoutheast2 = "ap-southeast-2",
    t.CaCentral1 = "ca-central-1",
    t.EuCentral1 = "eu-central-1",
    t.EuWest1 = "eu-west-1",
    t.EuWest2 = "eu-west-2",
    t.EuWest3 = "eu-west-3",
    t.SaEast1 = "sa-east-1",
    t.UsEast1 = "us-east-1",
    t.UsWest1 = "us-west-1",
    t.UsWest2 = "us-west-2"
}
)(sa || (sa = {}));
var xg = function(t, e, n, r) {
    function s(i) {
        return i instanceof n ? i : new n(function(o) {
            o(i)
        }
        )
    }
    return new (n || (n = Promise))(function(i, o) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (d) {
                o(d)
            }
        }
        function l(c) {
            try {
                u(r.throw(c))
            } catch (d) {
                o(d)
            }
        }
        function u(c) {
            c.done ? i(c.value) : s(c.value).then(a, l)
        }
        u((r = r.apply(t, e || [])).next())
    }
    )
};
class Sg {
    constructor(e, {headers: n={}, customFetch: r, region: s=sa.Any}={}) {
        this.url = e,
        this.headers = n,
        this.region = s,
        this.fetch = _g(r)
    }
    setAuth(e) {
        this.headers.Authorization = `Bearer ${e}`
    }
    invoke(e, n={}) {
        var r;
        return xg(this, void 0, void 0, function*() {
            try {
                const {headers: s, method: i, body: o} = n;
                let a = {}
                  , {region: l} = n;
                l || (l = this.region);
                const u = new URL(`${this.url}/${e}`);
                l && l !== "any" && (a["x-region"] = l,
                u.searchParams.set("forceFunctionRegion", l));
                let c;
                o && (s && !Object.prototype.hasOwnProperty.call(s, "Content-Type") || !s) && (typeof Blob < "u" && o instanceof Blob || o instanceof ArrayBuffer ? (a["Content-Type"] = "application/octet-stream",
                c = o) : typeof o == "string" ? (a["Content-Type"] = "text/plain",
                c = o) : typeof FormData < "u" && o instanceof FormData ? c = o : (a["Content-Type"] = "application/json",
                c = JSON.stringify(o)));
                const d = yield this.fetch(u.toString(), {
                    method: i || "POST",
                    headers: Object.assign(Object.assign(Object.assign({}, a), this.headers), s),
                    body: c
                }).catch(w => {
                    throw new kg(w)
                }
                )
                  , h = d.headers.get("x-relay-error");
                if (h && h === "true")
                    throw new $u(d);
                if (!d.ok)
                    throw new Lu(d);
                let v = ((r = d.headers.get("Content-Type")) !== null && r !== void 0 ? r : "text/plain").split(";")[0].trim(), y;
                return v === "application/json" ? y = yield d.json() : v === "application/octet-stream" ? y = yield d.blob() : v === "text/event-stream" ? y = d : v === "multipart/form-data" ? y = yield d.formData() : y = yield d.text(),
                {
                    data: y,
                    error: null,
                    response: d
                }
            } catch (s) {
                return {
                    data: null,
                    error: s,
                    response: s instanceof Lu || s instanceof $u ? s.context : void 0
                }
            }
        })
    }
}
var je = {}
  , fl = {}
  , Ei = {}
  , Yr = {}
  , bi = {}
  , ji = {}
  , Eg = function() {
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}
  , qn = Eg();
const bg = qn.fetch
  , fh = qn.fetch.bind(qn)
  , ph = qn.Headers
  , jg = qn.Request
  , Cg = qn.Response
  , Qn = Object.freeze(Object.defineProperty({
    __proto__: null,
    Headers: ph,
    Request: jg,
    Response: Cg,
    default: fh,
    fetch: bg
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Tg = Lh(Qn);
var Ci = {};
Object.defineProperty(Ci, "__esModule", {
    value: !0
});
let Pg = class extends Error {
    constructor(e) {
        super(e.message),
        this.name = "PostgrestError",
        this.details = e.details,
        this.hint = e.hint,
        this.code = e.code
    }
}
;
Ci.default = Pg;
var mh = We && We.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
;
Object.defineProperty(ji, "__esModule", {
    value: !0
});
const Ng = mh(Tg)
  , Og = mh(Ci);
let Rg = class {
    constructor(e) {
        var n, r;
        this.shouldThrowOnError = !1,
        this.method = e.method,
        this.url = e.url,
        this.headers = new Headers(e.headers),
        this.schema = e.schema,
        this.body = e.body,
        this.shouldThrowOnError = (n = e.shouldThrowOnError) !== null && n !== void 0 ? n : !1,
        this.signal = e.signal,
        this.isMaybeSingle = (r = e.isMaybeSingle) !== null && r !== void 0 ? r : !1,
        e.fetch ? this.fetch = e.fetch : typeof fetch > "u" ? this.fetch = Ng.default : this.fetch = fetch
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    setHeader(e, n) {
        return this.headers = new Headers(this.headers),
        this.headers.set(e, n),
        this
    }
    then(e, n) {
        this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)),
        this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json");
        const r = this.fetch;
        let s = r(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
        }).then(async i => {
            var o, a, l, u;
            let c = null
              , d = null
              , h = null
              , v = i.status
              , y = i.statusText;
            if (i.ok) {
                if (this.method !== "HEAD") {
                    const f = await i.text();
                    f === "" || (this.headers.get("Accept") === "text/csv" || this.headers.get("Accept") && (!((o = this.headers.get("Accept")) === null || o === void 0) && o.includes("application/vnd.pgrst.plan+text")) ? d = f : d = JSON.parse(f))
                }
                const k = (a = this.headers.get("Prefer")) === null || a === void 0 ? void 0 : a.match(/count=(exact|planned|estimated)/)
                  , m = (l = i.headers.get("content-range")) === null || l === void 0 ? void 0 : l.split("/");
                k && m && m.length > 1 && (h = parseInt(m[1])),
                this.isMaybeSingle && this.method === "GET" && Array.isArray(d) && (d.length > 1 ? (c = {
                    code: "PGRST116",
                    details: `Results contain ${d.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message: "JSON object requested, multiple (or no) rows returned"
                },
                d = null,
                h = null,
                v = 406,
                y = "Not Acceptable") : d.length === 1 ? d = d[0] : d = null)
            } else {
                const k = await i.text();
                try {
                    c = JSON.parse(k),
                    Array.isArray(c) && i.status === 404 && (d = [],
                    c = null,
                    v = 200,
                    y = "OK")
                } catch {
                    i.status === 404 && k === "" ? (v = 204,
                    y = "No Content") : c = {
                        message: k
                    }
                }
                if (c && this.isMaybeSingle && (!((u = c == null ? void 0 : c.details) === null || u === void 0) && u.includes("0 rows")) && (c = null,
                v = 200,
                y = "OK"),
                c && this.shouldThrowOnError)
                    throw new Og.default(c)
            }
            return {
                error: c,
                data: d,
                count: h,
                status: v,
                statusText: y
            }
        }
        );
        return this.shouldThrowOnError || (s = s.catch(i => {
            var o, a, l;
            return {
                error: {
                    message: `${(o = i == null ? void 0 : i.name) !== null && o !== void 0 ? o : "FetchError"}: ${i == null ? void 0 : i.message}`,
                    details: `${(a = i == null ? void 0 : i.stack) !== null && a !== void 0 ? a : ""}`,
                    hint: "",
                    code: `${(l = i == null ? void 0 : i.code) !== null && l !== void 0 ? l : ""}`
                },
                data: null,
                count: null,
                status: 0,
                statusText: ""
            }
        }
        )),
        s.then(e, n)
    }
    returns() {
        return this
    }
    overrideTypes() {
        return this
    }
}
;
ji.default = Rg;
var Ag = We && We.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
;
Object.defineProperty(bi, "__esModule", {
    value: !0
});
const Ig = Ag(ji);
let $g = class extends Ig.default {
    select(e) {
        let n = !1;
        const r = (e ?? "*").split("").map(s => /\s/.test(s) && !n ? "" : (s === '"' && (n = !n),
        s)).join("");
        return this.url.searchParams.set("select", r),
        this.headers.append("Prefer", "return=representation"),
        this
    }
    order(e, {ascending: n=!0, nullsFirst: r, foreignTable: s, referencedTable: i=s}={}) {
        const o = i ? `${i}.order` : "order"
          , a = this.url.searchParams.get(o);
        return this.url.searchParams.set(o, `${a ? `${a},` : ""}${e}.${n ? "asc" : "desc"}${r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"}`),
        this
    }
    limit(e, {foreignTable: n, referencedTable: r=n}={}) {
        const s = typeof r > "u" ? "limit" : `${r}.limit`;
        return this.url.searchParams.set(s, `${e}`),
        this
    }
    range(e, n, {foreignTable: r, referencedTable: s=r}={}) {
        const i = typeof s > "u" ? "offset" : `${s}.offset`
          , o = typeof s > "u" ? "limit" : `${s}.limit`;
        return this.url.searchParams.set(i, `${e}`),
        this.url.searchParams.set(o, `${n - e + 1}`),
        this
    }
    abortSignal(e) {
        return this.signal = e,
        this
    }
    single() {
        return this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        this
    }
    maybeSingle() {
        return this.method === "GET" ? this.headers.set("Accept", "application/json") : this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        this.isMaybeSingle = !0,
        this
    }
    csv() {
        return this.headers.set("Accept", "text/csv"),
        this
    }
    geojson() {
        return this.headers.set("Accept", "application/geo+json"),
        this
    }
    explain({analyze: e=!1, verbose: n=!1, settings: r=!1, buffers: s=!1, wal: i=!1, format: o="text"}={}) {
        var a;
        const l = [e ? "analyze" : null, n ? "verbose" : null, r ? "settings" : null, s ? "buffers" : null, i ? "wal" : null].filter(Boolean).join("|")
          , u = (a = this.headers.get("Accept")) !== null && a !== void 0 ? a : "application/json";
        return this.headers.set("Accept", `application/vnd.pgrst.plan+${o}; for="${u}"; options=${l};`),
        o === "json" ? this : this
    }
    rollback() {
        return this.headers.append("Prefer", "tx=rollback"),
        this
    }
    returns() {
        return this
    }
    maxAffected(e) {
        return this.headers.append("Prefer", "handling=strict"),
        this.headers.append("Prefer", `max-affected=${e}`),
        this
    }
}
;
bi.default = $g;
var Lg = We && We.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
;
Object.defineProperty(Yr, "__esModule", {
    value: !0
});
const Dg = Lg(bi);
let Mg = class extends Dg.default {
    eq(e, n) {
        return this.url.searchParams.append(e, `eq.${n}`),
        this
    }
    neq(e, n) {
        return this.url.searchParams.append(e, `neq.${n}`),
        this
    }
    gt(e, n) {
        return this.url.searchParams.append(e, `gt.${n}`),
        this
    }
    gte(e, n) {
        return this.url.searchParams.append(e, `gte.${n}`),
        this
    }
    lt(e, n) {
        return this.url.searchParams.append(e, `lt.${n}`),
        this
    }
    lte(e, n) {
        return this.url.searchParams.append(e, `lte.${n}`),
        this
    }
    like(e, n) {
        return this.url.searchParams.append(e, `like.${n}`),
        this
    }
    likeAllOf(e, n) {
        return this.url.searchParams.append(e, `like(all).{${n.join(",")}}`),
        this
    }
    likeAnyOf(e, n) {
        return this.url.searchParams.append(e, `like(any).{${n.join(",")}}`),
        this
    }
    ilike(e, n) {
        return this.url.searchParams.append(e, `ilike.${n}`),
        this
    }
    ilikeAllOf(e, n) {
        return this.url.searchParams.append(e, `ilike(all).{${n.join(",")}}`),
        this
    }
    ilikeAnyOf(e, n) {
        return this.url.searchParams.append(e, `ilike(any).{${n.join(",")}}`),
        this
    }
    is(e, n) {
        return this.url.searchParams.append(e, `is.${n}`),
        this
    }
    in(e, n) {
        const r = Array.from(new Set(n)).map(s => typeof s == "string" && new RegExp("[,()]").test(s) ? `"${s}"` : `${s}`).join(",");
        return this.url.searchParams.append(e, `in.(${r})`),
        this
    }
    contains(e, n) {
        return typeof n == "string" ? this.url.searchParams.append(e, `cs.${n}`) : Array.isArray(n) ? this.url.searchParams.append(e, `cs.{${n.join(",")}}`) : this.url.searchParams.append(e, `cs.${JSON.stringify(n)}`),
        this
    }
    containedBy(e, n) {
        return typeof n == "string" ? this.url.searchParams.append(e, `cd.${n}`) : Array.isArray(n) ? this.url.searchParams.append(e, `cd.{${n.join(",")}}`) : this.url.searchParams.append(e, `cd.${JSON.stringify(n)}`),
        this
    }
    rangeGt(e, n) {
        return this.url.searchParams.append(e, `sr.${n}`),
        this
    }
    rangeGte(e, n) {
        return this.url.searchParams.append(e, `nxl.${n}`),
        this
    }
    rangeLt(e, n) {
        return this.url.searchParams.append(e, `sl.${n}`),
        this
    }
    rangeLte(e, n) {
        return this.url.searchParams.append(e, `nxr.${n}`),
        this
    }
    rangeAdjacent(e, n) {
        return this.url.searchParams.append(e, `adj.${n}`),
        this
    }
    overlaps(e, n) {
        return typeof n == "string" ? this.url.searchParams.append(e, `ov.${n}`) : this.url.searchParams.append(e, `ov.{${n.join(",")}}`),
        this
    }
    textSearch(e, n, {config: r, type: s}={}) {
        let i = "";
        s === "plain" ? i = "pl" : s === "phrase" ? i = "ph" : s === "websearch" && (i = "w");
        const o = r === void 0 ? "" : `(${r})`;
        return this.url.searchParams.append(e, `${i}fts${o}.${n}`),
        this
    }
    match(e) {
        return Object.entries(e).forEach( ([n,r]) => {
            this.url.searchParams.append(n, `eq.${r}`)
        }
        ),
        this
    }
    not(e, n, r) {
        return this.url.searchParams.append(e, `not.${n}.${r}`),
        this
    }
    or(e, {foreignTable: n, referencedTable: r=n}={}) {
        const s = r ? `${r}.or` : "or";
        return this.url.searchParams.append(s, `(${e})`),
        this
    }
    filter(e, n, r) {
        return this.url.searchParams.append(e, `${n}.${r}`),
        this
    }
}
;
Yr.default = Mg;
var Ug = We && We.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
;
Object.defineProperty(Ei, "__esModule", {
    value: !0
});
const lr = Ug(Yr);
let zg = class {
    constructor(e, {headers: n={}, schema: r, fetch: s}) {
        this.url = e,
        this.headers = new Headers(n),
        this.schema = r,
        this.fetch = s
    }
    select(e, {head: n=!1, count: r}={}) {
        const s = n ? "HEAD" : "GET";
        let i = !1;
        const o = (e ?? "*").split("").map(a => /\s/.test(a) && !i ? "" : (a === '"' && (i = !i),
        a)).join("");
        return this.url.searchParams.set("select", o),
        r && this.headers.append("Prefer", `count=${r}`),
        new lr.default({
            method: s,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch
        })
    }
    insert(e, {count: n, defaultToNull: r=!0}={}) {
        var s;
        const i = "POST";
        if (n && this.headers.append("Prefer", `count=${n}`),
        r || this.headers.append("Prefer", "missing=default"),
        Array.isArray(e)) {
            const o = e.reduce( (a, l) => a.concat(Object.keys(l)), []);
            if (o.length > 0) {
                const a = [...new Set(o)].map(l => `"${l}"`);
                this.url.searchParams.set("columns", a.join(","))
            }
        }
        return new lr.default({
            method: i,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: (s = this.fetch) !== null && s !== void 0 ? s : fetch
        })
    }
    upsert(e, {onConflict: n, ignoreDuplicates: r=!1, count: s, defaultToNull: i=!0}={}) {
        var o;
        const a = "POST";
        if (this.headers.append("Prefer", `resolution=${r ? "ignore" : "merge"}-duplicates`),
        n !== void 0 && this.url.searchParams.set("on_conflict", n),
        s && this.headers.append("Prefer", `count=${s}`),
        i || this.headers.append("Prefer", "missing=default"),
        Array.isArray(e)) {
            const l = e.reduce( (u, c) => u.concat(Object.keys(c)), []);
            if (l.length > 0) {
                const u = [...new Set(l)].map(c => `"${c}"`);
                this.url.searchParams.set("columns", u.join(","))
            }
        }
        return new lr.default({
            method: a,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch
        })
    }
    update(e, {count: n}={}) {
        var r;
        const s = "PATCH";
        return n && this.headers.append("Prefer", `count=${n}`),
        new lr.default({
            method: s,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch
        })
    }
    delete({count: e}={}) {
        var n;
        const r = "DELETE";
        return e && this.headers.append("Prefer", `count=${e}`),
        new lr.default({
            method: r,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch
        })
    }
}
;
Ei.default = zg;
var gh = We && We.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
;
Object.defineProperty(fl, "__esModule", {
    value: !0
});
const Fg = gh(Ei)
  , Bg = gh(Yr);
let Wg = class vh {
    constructor(e, {headers: n={}, schema: r, fetch: s}={}) {
        this.url = e,
        this.headers = new Headers(n),
        this.schemaName = r,
        this.fetch = s
    }
    from(e) {
        const n = new URL(`${this.url}/${e}`);
        return new Fg.default(n,{
            headers: new Headers(this.headers),
            schema: this.schemaName,
            fetch: this.fetch
        })
    }
    schema(e) {
        return new vh(this.url,{
            headers: this.headers,
            schema: e,
            fetch: this.fetch
        })
    }
    rpc(e, n={}, {head: r=!1, get: s=!1, count: i}={}) {
        var o;
        let a;
        const l = new URL(`${this.url}/rpc/${e}`);
        let u;
        r || s ? (a = r ? "HEAD" : "GET",
        Object.entries(n).filter( ([d,h]) => h !== void 0).map( ([d,h]) => [d, Array.isArray(h) ? `{${h.join(",")}}` : `${h}`]).forEach( ([d,h]) => {
            l.searchParams.append(d, h)
        }
        )) : (a = "POST",
        u = n);
        const c = new Headers(this.headers);
        return i && c.set("Prefer", `count=${i}`),
        new Bg.default({
            method: a,
            url: l,
            headers: c,
            schema: this.schemaName,
            body: u,
            fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch
        })
    }
}
;
fl.default = Wg;
var Yn = We && We.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
;
Object.defineProperty(je, "__esModule", {
    value: !0
});
je.PostgrestError = je.PostgrestBuilder = je.PostgrestTransformBuilder = je.PostgrestFilterBuilder = je.PostgrestQueryBuilder = je.PostgrestClient = void 0;
const yh = Yn(fl);
je.PostgrestClient = yh.default;
const wh = Yn(Ei);
je.PostgrestQueryBuilder = wh.default;
const _h = Yn(Yr);
je.PostgrestFilterBuilder = _h.default;
const kh = Yn(bi);
je.PostgrestTransformBuilder = kh.default;
const xh = Yn(ji);
je.PostgrestBuilder = xh.default;
const Sh = Yn(Ci);
je.PostgrestError = Sh.default;
var Vg = je.default = {
    PostgrestClient: yh.default,
    PostgrestQueryBuilder: wh.default,
    PostgrestFilterBuilder: _h.default,
    PostgrestTransformBuilder: kh.default,
    PostgrestBuilder: xh.default,
    PostgrestError: Sh.default
};
const {PostgrestClient: Hg, PostgrestQueryBuilder: Yv, PostgrestFilterBuilder: Xv, PostgrestTransformBuilder: Zv, PostgrestBuilder: ey, PostgrestError: ty} = Vg;
class qg {
    static detectEnvironment() {
        var e;
        if (typeof WebSocket < "u")
            return {
                type: "native",
                constructor: WebSocket
            };
        if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
            return {
                type: "native",
                constructor: globalThis.WebSocket
            };
        if (typeof global < "u" && typeof global.WebSocket < "u")
            return {
                type: "native",
                constructor: global.WebSocket
            };
        if (typeof globalThis < "u" && typeof globalThis.WebSocketPair < "u" && typeof globalThis.WebSocket > "u")
            return {
                type: "cloudflare",
                error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
                workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
            };
        if (typeof globalThis < "u" && globalThis.EdgeRuntime || typeof navigator < "u" && (!((e = navigator.userAgent) === null || e === void 0) && e.includes("Vercel-Edge")))
            return {
                type: "unsupported",
                error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
                workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
            };
        if (typeof process < "u") {
            const n = process.versions;
            if (n && n.node) {
                const r = n.node
                  , s = parseInt(r.replace(/^v/, "").split(".")[0]);
                return s >= 22 ? typeof globalThis.WebSocket < "u" ? {
                    type: "native",
                    constructor: globalThis.WebSocket
                } : {
                    type: "unsupported",
                    error: `Node.js ${s} detected but native WebSocket not found.`,
                    workaround: "Provide a WebSocket implementation via the transport option."
                } : {
                    type: "unsupported",
                    error: `Node.js ${s} detected without native WebSocket support.`,
                    workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`
                }
            }
        }
        return {
            type: "unsupported",
            error: "Unknown JavaScript runtime without WebSocket support.",
            workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
        }
    }
    static getWebSocketConstructor() {
        const e = this.detectEnvironment();
        if (e.constructor)
            return e.constructor;
        let n = e.error || "WebSocket not supported in this environment.";
        throw e.workaround && (n += `

Suggested solution: ${e.workaround}`),
        new Error(n)
    }
    static createWebSocket(e, n) {
        const r = this.getWebSocketConstructor();
        return new r(e,n)
    }
    static isWebSocketSupported() {
        try {
            const e = this.detectEnvironment();
            return e.type === "native" || e.type === "ws"
        } catch {
            return !1
        }
    }
}
const Kg = "2.15.5"
  , Gg = `realtime-js/${Kg}`
  , Jg = "1.0.0"
  , ia = 1e4
  , Qg = 1e3
  , Yg = 100;
var Er;
(function(t) {
    t[t.connecting = 0] = "connecting",
    t[t.open = 1] = "open",
    t[t.closing = 2] = "closing",
    t[t.closed = 3] = "closed"
}
)(Er || (Er = {}));
var se;
(function(t) {
    t.closed = "closed",
    t.errored = "errored",
    t.joined = "joined",
    t.joining = "joining",
    t.leaving = "leaving"
}
)(se || (se = {}));
var Qe;
(function(t) {
    t.close = "phx_close",
    t.error = "phx_error",
    t.join = "phx_join",
    t.reply = "phx_reply",
    t.leave = "phx_leave",
    t.access_token = "access_token"
}
)(Qe || (Qe = {}));
var oa;
(function(t) {
    t.websocket = "websocket"
}
)(oa || (oa = {}));
var Xt;
(function(t) {
    t.Connecting = "connecting",
    t.Open = "open",
    t.Closing = "closing",
    t.Closed = "closed"
}
)(Xt || (Xt = {}));
class Xg {
    constructor() {
        this.HEADER_LENGTH = 1
    }
    decode(e, n) {
        return e.constructor === ArrayBuffer ? n(this._binaryDecode(e)) : n(typeof e == "string" ? JSON.parse(e) : {})
    }
    _binaryDecode(e) {
        const n = new DataView(e)
          , r = new TextDecoder;
        return this._decodeBroadcast(e, n, r)
    }
    _decodeBroadcast(e, n, r) {
        const s = n.getUint8(1)
          , i = n.getUint8(2);
        let o = this.HEADER_LENGTH + 2;
        const a = r.decode(e.slice(o, o + s));
        o = o + s;
        const l = r.decode(e.slice(o, o + i));
        o = o + i;
        const u = JSON.parse(r.decode(e.slice(o, e.byteLength)));
        return {
            ref: null,
            topic: a,
            event: l,
            payload: u
        }
    }
}
class Eh {
    constructor(e, n) {
        this.callback = e,
        this.timerCalc = n,
        this.timer = void 0,
        this.tries = 0,
        this.callback = e,
        this.timerCalc = n
    }
    reset() {
        this.tries = 0,
        clearTimeout(this.timer),
        this.timer = void 0
    }
    scheduleTimeout() {
        clearTimeout(this.timer),
        this.timer = setTimeout( () => {
            this.tries = this.tries + 1,
            this.callback()
        }
        , this.timerCalc(this.tries + 1))
    }
}
var H;
(function(t) {
    t.abstime = "abstime",
    t.bool = "bool",
    t.date = "date",
    t.daterange = "daterange",
    t.float4 = "float4",
    t.float8 = "float8",
    t.int2 = "int2",
    t.int4 = "int4",
    t.int4range = "int4range",
    t.int8 = "int8",
    t.int8range = "int8range",
    t.json = "json",
    t.jsonb = "jsonb",
    t.money = "money",
    t.numeric = "numeric",
    t.oid = "oid",
    t.reltime = "reltime",
    t.text = "text",
    t.time = "time",
    t.timestamp = "timestamp",
    t.timestamptz = "timestamptz",
    t.timetz = "timetz",
    t.tsrange = "tsrange",
    t.tstzrange = "tstzrange"
}
)(H || (H = {}));
const Du = (t, e, n={}) => {
    var r;
    const s = (r = n.skipTypes) !== null && r !== void 0 ? r : [];
    return Object.keys(e).reduce( (i, o) => (i[o] = Zg(o, t, e, s),
    i), {})
}
  , Zg = (t, e, n, r) => {
    const s = e.find(a => a.name === t)
      , i = s == null ? void 0 : s.type
      , o = n[t];
    return i && !r.includes(i) ? bh(i, o) : aa(o)
}
  , bh = (t, e) => {
    if (t.charAt(0) === "_") {
        const n = t.slice(1, t.length);
        return r0(e, n)
    }
    switch (t) {
    case H.bool:
        return e0(e);
    case H.float4:
    case H.float8:
    case H.int2:
    case H.int4:
    case H.int8:
    case H.numeric:
    case H.oid:
        return t0(e);
    case H.json:
    case H.jsonb:
        return n0(e);
    case H.timestamp:
        return s0(e);
    case H.abstime:
    case H.date:
    case H.daterange:
    case H.int4range:
    case H.int8range:
    case H.money:
    case H.reltime:
    case H.text:
    case H.time:
    case H.timestamptz:
    case H.timetz:
    case H.tsrange:
    case H.tstzrange:
        return aa(e);
    default:
        return aa(e)
    }
}
  , aa = t => t
  , e0 = t => {
    switch (t) {
    case "t":
        return !0;
    case "f":
        return !1;
    default:
        return t
    }
}
  , t0 = t => {
    if (typeof t == "string") {
        const e = parseFloat(t);
        if (!Number.isNaN(e))
            return e
    }
    return t
}
  , n0 = t => {
    if (typeof t == "string")
        try {
            return JSON.parse(t)
        } catch (e) {
            return console.log(`JSON parse error: ${e}`),
            t
        }
    return t
}
  , r0 = (t, e) => {
    if (typeof t != "string")
        return t;
    const n = t.length - 1
      , r = t[n];
    if (t[0] === "{" && r === "}") {
        let i;
        const o = t.slice(1, n);
        try {
            i = JSON.parse("[" + o + "]")
        } catch {
            i = o ? o.split(",") : []
        }
        return i.map(a => bh(e, a))
    }
    return t
}
  , s0 = t => typeof t == "string" ? t.replace(" ", "T") : t
  , jh = t => {
    let e = t;
    return e = e.replace(/^ws/i, "http"),
    e = e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""),
    e.replace(/\/+$/, "") + "/api/broadcast"
}
;
class no {
    constructor(e, n, r={}, s=ia) {
        this.channel = e,
        this.event = n,
        this.payload = r,
        this.timeout = s,
        this.sent = !1,
        this.timeoutTimer = void 0,
        this.ref = "",
        this.receivedResp = null,
        this.recHooks = [],
        this.refEvent = null
    }
    resend(e) {
        this.timeout = e,
        this._cancelRefEvent(),
        this.ref = "",
        this.refEvent = null,
        this.receivedResp = null,
        this.sent = !1,
        this.send()
    }
    send() {
        this._hasReceived("timeout") || (this.startTimeout(),
        this.sent = !0,
        this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel._joinRef()
        }))
    }
    updatePayload(e) {
        this.payload = Object.assign(Object.assign({}, this.payload), e)
    }
    receive(e, n) {
        var r;
        return this._hasReceived(e) && n((r = this.receivedResp) === null || r === void 0 ? void 0 : r.response),
        this.recHooks.push({
            status: e,
            callback: n
        }),
        this
    }
    startTimeout() {
        if (this.timeoutTimer)
            return;
        this.ref = this.channel.socket._makeRef(),
        this.refEvent = this.channel._replyEventName(this.ref);
        const e = n => {
            this._cancelRefEvent(),
            this._cancelTimeout(),
            this.receivedResp = n,
            this._matchReceive(n)
        }
        ;
        this.channel._on(this.refEvent, {}, e),
        this.timeoutTimer = setTimeout( () => {
            this.trigger("timeout", {})
        }
        , this.timeout)
    }
    trigger(e, n) {
        this.refEvent && this.channel._trigger(this.refEvent, {
            status: e,
            response: n
        })
    }
    destroy() {
        this._cancelRefEvent(),
        this._cancelTimeout()
    }
    _cancelRefEvent() {
        this.refEvent && this.channel._off(this.refEvent, {})
    }
    _cancelTimeout() {
        clearTimeout(this.timeoutTimer),
        this.timeoutTimer = void 0
    }
    _matchReceive({status: e, response: n}) {
        this.recHooks.filter(r => r.status === e).forEach(r => r.callback(n))
    }
    _hasReceived(e) {
        return this.receivedResp && this.receivedResp.status === e
    }
}
var Mu;
(function(t) {
    t.SYNC = "sync",
    t.JOIN = "join",
    t.LEAVE = "leave"
}
)(Mu || (Mu = {}));
class br {
    constructor(e, n) {
        this.channel = e,
        this.state = {},
        this.pendingDiffs = [],
        this.joinRef = null,
        this.enabled = !1,
        this.caller = {
            onJoin: () => {}
            ,
            onLeave: () => {}
            ,
            onSync: () => {}
        };
        const r = (n == null ? void 0 : n.events) || {
            state: "presence_state",
            diff: "presence_diff"
        };
        this.channel._on(r.state, {}, s => {
            const {onJoin: i, onLeave: o, onSync: a} = this.caller;
            this.joinRef = this.channel._joinRef(),
            this.state = br.syncState(this.state, s, i, o),
            this.pendingDiffs.forEach(l => {
                this.state = br.syncDiff(this.state, l, i, o)
            }
            ),
            this.pendingDiffs = [],
            a()
        }
        ),
        this.channel._on(r.diff, {}, s => {
            const {onJoin: i, onLeave: o, onSync: a} = this.caller;
            this.inPendingSyncState() ? this.pendingDiffs.push(s) : (this.state = br.syncDiff(this.state, s, i, o),
            a())
        }
        ),
        this.onJoin( (s, i, o) => {
            this.channel._trigger("presence", {
                event: "join",
                key: s,
                currentPresences: i,
                newPresences: o
            })
        }
        ),
        this.onLeave( (s, i, o) => {
            this.channel._trigger("presence", {
                event: "leave",
                key: s,
                currentPresences: i,
                leftPresences: o
            })
        }
        ),
        this.onSync( () => {
            this.channel._trigger("presence", {
                event: "sync"
            })
        }
        )
    }
    static syncState(e, n, r, s) {
        const i = this.cloneDeep(e)
          , o = this.transformState(n)
          , a = {}
          , l = {};
        return this.map(i, (u, c) => {
            o[u] || (l[u] = c)
        }
        ),
        this.map(o, (u, c) => {
            const d = i[u];
            if (d) {
                const h = c.map(k => k.presence_ref)
                  , v = d.map(k => k.presence_ref)
                  , y = c.filter(k => v.indexOf(k.presence_ref) < 0)
                  , w = d.filter(k => h.indexOf(k.presence_ref) < 0);
                y.length > 0 && (a[u] = y),
                w.length > 0 && (l[u] = w)
            } else
                a[u] = c
        }
        ),
        this.syncDiff(i, {
            joins: a,
            leaves: l
        }, r, s)
    }
    static syncDiff(e, n, r, s) {
        const {joins: i, leaves: o} = {
            joins: this.transformState(n.joins),
            leaves: this.transformState(n.leaves)
        };
        return r || (r = () => {}
        ),
        s || (s = () => {}
        ),
        this.map(i, (a, l) => {
            var u;
            const c = (u = e[a]) !== null && u !== void 0 ? u : [];
            if (e[a] = this.cloneDeep(l),
            c.length > 0) {
                const d = e[a].map(v => v.presence_ref)
                  , h = c.filter(v => d.indexOf(v.presence_ref) < 0);
                e[a].unshift(...h)
            }
            r(a, c, l)
        }
        ),
        this.map(o, (a, l) => {
            let u = e[a];
            if (!u)
                return;
            const c = l.map(d => d.presence_ref);
            u = u.filter(d => c.indexOf(d.presence_ref) < 0),
            e[a] = u,
            s(a, u, l),
            u.length === 0 && delete e[a]
        }
        ),
        e
    }
    static map(e, n) {
        return Object.getOwnPropertyNames(e).map(r => n(r, e[r]))
    }
    static transformState(e) {
        return e = this.cloneDeep(e),
        Object.getOwnPropertyNames(e).reduce( (n, r) => {
            const s = e[r];
            return "metas"in s ? n[r] = s.metas.map(i => (i.presence_ref = i.phx_ref,
            delete i.phx_ref,
            delete i.phx_ref_prev,
            i)) : n[r] = s,
            n
        }
        , {})
    }
    static cloneDeep(e) {
        return JSON.parse(JSON.stringify(e))
    }
    onJoin(e) {
        this.caller.onJoin = e
    }
    onLeave(e) {
        this.caller.onLeave = e
    }
    onSync(e) {
        this.caller.onSync = e
    }
    inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel._joinRef()
    }
}
var Uu;
(function(t) {
    t.ALL = "*",
    t.INSERT = "INSERT",
    t.UPDATE = "UPDATE",
    t.DELETE = "DELETE"
}
)(Uu || (Uu = {}));
var jr;
(function(t) {
    t.BROADCAST = "broadcast",
    t.PRESENCE = "presence",
    t.POSTGRES_CHANGES = "postgres_changes",
    t.SYSTEM = "system"
}
)(jr || (jr = {}));
var ct;
(function(t) {
    t.SUBSCRIBED = "SUBSCRIBED",
    t.TIMED_OUT = "TIMED_OUT",
    t.CLOSED = "CLOSED",
    t.CHANNEL_ERROR = "CHANNEL_ERROR"
}
)(ct || (ct = {}));
class pl {
    constructor(e, n={
        config: {}
    }, r) {
        this.topic = e,
        this.params = n,
        this.socket = r,
        this.bindings = {},
        this.state = se.closed,
        this.joinedOnce = !1,
        this.pushBuffer = [],
        this.subTopic = e.replace(/^realtime:/i, ""),
        this.params.config = Object.assign({
            broadcast: {
                ack: !1,
                self: !1
            },
            presence: {
                key: "",
                enabled: !1
            },
            private: !1
        }, n.config),
        this.timeout = this.socket.timeout,
        this.joinPush = new no(this,Qe.join,this.params,this.timeout),
        this.rejoinTimer = new Eh( () => this._rejoinUntilConnected(),this.socket.reconnectAfterMs),
        this.joinPush.receive("ok", () => {
            this.state = se.joined,
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach(s => s.send()),
            this.pushBuffer = []
        }
        ),
        this._onClose( () => {
            this.rejoinTimer.reset(),
            this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
            this.state = se.closed,
            this.socket._remove(this)
        }
        ),
        this._onError(s => {
            this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, s),
            this.state = se.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this.joinPush.receive("timeout", () => {
            this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout),
            this.state = se.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this.joinPush.receive("error", s => {
            this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, s),
            this.state = se.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this._on(Qe.reply, {}, (s, i) => {
            this._trigger(this._replyEventName(i), s)
        }
        ),
        this.presence = new br(this),
        this.broadcastEndpointURL = jh(this.socket.endPoint),
        this.private = this.params.config.private || !1
    }
    subscribe(e, n=this.timeout) {
        var r, s, i;
        if (this.socket.isConnected() || this.socket.connect(),
        this.state == se.closed) {
            const {config: {broadcast: o, presence: a, private: l}} = this.params
              , u = (s = (r = this.bindings.postgres_changes) === null || r === void 0 ? void 0 : r.map(v => v.filter)) !== null && s !== void 0 ? s : []
              , c = !!this.bindings[jr.PRESENCE] && this.bindings[jr.PRESENCE].length > 0 || ((i = this.params.config.presence) === null || i === void 0 ? void 0 : i.enabled) === !0
              , d = {}
              , h = {
                broadcast: o,
                presence: Object.assign(Object.assign({}, a), {
                    enabled: c
                }),
                postgres_changes: u,
                private: l
            };
            this.socket.accessTokenValue && (d.access_token = this.socket.accessTokenValue),
            this._onError(v => e == null ? void 0 : e(ct.CHANNEL_ERROR, v)),
            this._onClose( () => e == null ? void 0 : e(ct.CLOSED)),
            this.updateJoinPayload(Object.assign({
                config: h
            }, d)),
            this.joinedOnce = !0,
            this._rejoin(n),
            this.joinPush.receive("ok", async ({postgres_changes: v}) => {
                var y;
                if (this.socket.setAuth(),
                v === void 0) {
                    e == null || e(ct.SUBSCRIBED);
                    return
                } else {
                    const w = this.bindings.postgres_changes
                      , k = (y = w == null ? void 0 : w.length) !== null && y !== void 0 ? y : 0
                      , m = [];
                    for (let f = 0; f < k; f++) {
                        const p = w[f]
                          , {filter: {event: _, schema: E, table: S, filter: b}} = p
                          , T = v && v[f];
                        if (T && T.event === _ && T.schema === E && T.table === S && T.filter === b)
                            m.push(Object.assign(Object.assign({}, p), {
                                id: T.id
                            }));
                        else {
                            this.unsubscribe(),
                            this.state = se.errored,
                            e == null || e(ct.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
                            return
                        }
                    }
                    this.bindings.postgres_changes = m,
                    e && e(ct.SUBSCRIBED);
                    return
                }
            }
            ).receive("error", v => {
                this.state = se.errored,
                e == null || e(ct.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(v).join(", ") || "error")))
            }
            ).receive("timeout", () => {
                e == null || e(ct.TIMED_OUT)
            }
            )
        }
        return this
    }
    presenceState() {
        return this.presence.state
    }
    async track(e, n={}) {
        return await this.send({
            type: "presence",
            event: "track",
            payload: e
        }, n.timeout || this.timeout)
    }
    async untrack(e={}) {
        return await this.send({
            type: "presence",
            event: "untrack"
        }, e)
    }
    on(e, n, r) {
        return this.state === se.joined && e === jr.PRESENCE && (this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),
        this.unsubscribe().then( () => this.subscribe())),
        this._on(e, n, r)
    }
    async send(e, n={}) {
        var r, s;
        if (!this._canPush() && e.type === "broadcast") {
            const {event: i, payload: o} = e
              , l = {
                method: "POST",
                headers: {
                    Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
                    apikey: this.socket.apiKey ? this.socket.apiKey : "",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messages: [{
                        topic: this.subTopic,
                        event: i,
                        payload: o,
                        private: this.private
                    }]
                })
            };
            try {
                const u = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (r = n.timeout) !== null && r !== void 0 ? r : this.timeout);
                return await ((s = u.body) === null || s === void 0 ? void 0 : s.cancel()),
                u.ok ? "ok" : "error"
            } catch (u) {
                return u.name === "AbortError" ? "timed out" : "error"
            }
        } else
            return new Promise(i => {
                var o, a, l;
                const u = this._push(e.type, e, n.timeout || this.timeout);
                e.type === "broadcast" && !(!((l = (a = (o = this.params) === null || o === void 0 ? void 0 : o.config) === null || a === void 0 ? void 0 : a.broadcast) === null || l === void 0) && l.ack) && i("ok"),
                u.receive("ok", () => i("ok")),
                u.receive("error", () => i("error")),
                u.receive("timeout", () => i("timed out"))
            }
            )
    }
    updateJoinPayload(e) {
        this.joinPush.updatePayload(e)
    }
    unsubscribe(e=this.timeout) {
        this.state = se.leaving;
        const n = () => {
            this.socket.log("channel", `leave ${this.topic}`),
            this._trigger(Qe.close, "leave", this._joinRef())
        }
        ;
        this.joinPush.destroy();
        let r = null;
        return new Promise(s => {
            r = new no(this,Qe.leave,{},e),
            r.receive("ok", () => {
                n(),
                s("ok")
            }
            ).receive("timeout", () => {
                n(),
                s("timed out")
            }
            ).receive("error", () => {
                s("error")
            }
            ),
            r.send(),
            this._canPush() || r.trigger("ok", {})
        }
        ).finally( () => {
            r == null || r.destroy()
        }
        )
    }
    teardown() {
        this.pushBuffer.forEach(e => e.destroy()),
        this.pushBuffer = [],
        this.rejoinTimer.reset(),
        this.joinPush.destroy(),
        this.state = se.closed,
        this.bindings = {}
    }
    async _fetchWithTimeout(e, n, r) {
        const s = new AbortController
          , i = setTimeout( () => s.abort(), r)
          , o = await this.socket.fetch(e, Object.assign(Object.assign({}, n), {
            signal: s.signal
        }));
        return clearTimeout(i),
        o
    }
    _push(e, n, r=this.timeout) {
        if (!this.joinedOnce)
            throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        let s = new no(this,e,n,r);
        return this._canPush() ? s.send() : this._addToPushBuffer(s),
        s
    }
    _addToPushBuffer(e) {
        if (e.startTimeout(),
        this.pushBuffer.push(e),
        this.pushBuffer.length > Yg) {
            const n = this.pushBuffer.shift();
            n && (n.destroy(),
            this.socket.log("channel", `discarded push due to buffer overflow: ${n.event}`, n.payload))
        }
    }
    _onMessage(e, n, r) {
        return n
    }
    _isMember(e) {
        return this.topic === e
    }
    _joinRef() {
        return this.joinPush.ref
    }
    _trigger(e, n, r) {
        var s, i;
        const o = e.toLocaleLowerCase()
          , {close: a, error: l, leave: u, join: c} = Qe;
        if (r && [a, l, u, c].indexOf(o) >= 0 && r !== this._joinRef())
            return;
        let h = this._onMessage(o, n, r);
        if (n && !h)
            throw "channel onMessage callbacks must return the payload, modified or unmodified";
        ["insert", "update", "delete"].includes(o) ? (s = this.bindings.postgres_changes) === null || s === void 0 || s.filter(v => {
            var y, w, k;
            return ((y = v.filter) === null || y === void 0 ? void 0 : y.event) === "*" || ((k = (w = v.filter) === null || w === void 0 ? void 0 : w.event) === null || k === void 0 ? void 0 : k.toLocaleLowerCase()) === o
        }
        ).map(v => v.callback(h, r)) : (i = this.bindings[o]) === null || i === void 0 || i.filter(v => {
            var y, w, k, m, f, p;
            if (["broadcast", "presence", "postgres_changes"].includes(o))
                if ("id"in v) {
                    const _ = v.id
                      , E = (y = v.filter) === null || y === void 0 ? void 0 : y.event;
                    return _ && ((w = n.ids) === null || w === void 0 ? void 0 : w.includes(_)) && (E === "*" || (E == null ? void 0 : E.toLocaleLowerCase()) === ((k = n.data) === null || k === void 0 ? void 0 : k.type.toLocaleLowerCase()))
                } else {
                    const _ = (f = (m = v == null ? void 0 : v.filter) === null || m === void 0 ? void 0 : m.event) === null || f === void 0 ? void 0 : f.toLocaleLowerCase();
                    return _ === "*" || _ === ((p = n == null ? void 0 : n.event) === null || p === void 0 ? void 0 : p.toLocaleLowerCase())
                }
            else
                return v.type.toLocaleLowerCase() === o
        }
        ).map(v => {
            if (typeof h == "object" && "ids"in h) {
                const y = h.data
                  , {schema: w, table: k, commit_timestamp: m, type: f, errors: p} = y;
                h = Object.assign(Object.assign({}, {
                    schema: w,
                    table: k,
                    commit_timestamp: m,
                    eventType: f,
                    new: {},
                    old: {},
                    errors: p
                }), this._getPayloadRecords(y))
            }
            v.callback(h, r)
        }
        )
    }
    _isClosed() {
        return this.state === se.closed
    }
    _isJoined() {
        return this.state === se.joined
    }
    _isJoining() {
        return this.state === se.joining
    }
    _isLeaving() {
        return this.state === se.leaving
    }
    _replyEventName(e) {
        return `chan_reply_${e}`
    }
    _on(e, n, r) {
        const s = e.toLocaleLowerCase()
          , i = {
            type: s,
            filter: n,
            callback: r
        };
        return this.bindings[s] ? this.bindings[s].push(i) : this.bindings[s] = [i],
        this
    }
    _off(e, n) {
        const r = e.toLocaleLowerCase();
        return this.bindings[r] && (this.bindings[r] = this.bindings[r].filter(s => {
            var i;
            return !(((i = s.type) === null || i === void 0 ? void 0 : i.toLocaleLowerCase()) === r && pl.isEqual(s.filter, n))
        }
        )),
        this
    }
    static isEqual(e, n) {
        if (Object.keys(e).length !== Object.keys(n).length)
            return !1;
        for (const r in e)
            if (e[r] !== n[r])
                return !1;
        return !0
    }
    _rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout(),
        this.socket.isConnected() && this._rejoin()
    }
    _onClose(e) {
        this._on(Qe.close, {}, e)
    }
    _onError(e) {
        this._on(Qe.error, {}, n => e(n))
    }
    _canPush() {
        return this.socket.isConnected() && this._isJoined()
    }
    _rejoin(e=this.timeout) {
        this._isLeaving() || (this.socket._leaveOpenTopic(this.topic),
        this.state = se.joining,
        this.joinPush.resend(e))
    }
    _getPayloadRecords(e) {
        const n = {
            new: {},
            old: {}
        };
        return (e.type === "INSERT" || e.type === "UPDATE") && (n.new = Du(e.columns, e.record)),
        (e.type === "UPDATE" || e.type === "DELETE") && (n.old = Du(e.columns, e.old_record)),
        n
    }
}
const ro = () => {}
  , ys = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100
}
  , i0 = [1e3, 2e3, 5e3, 1e4]
  , o0 = 1e4
  , a0 = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class l0 {
    constructor(e, n) {
        var r;
        if (this.accessTokenValue = null,
        this.apiKey = null,
        this.channels = new Array,
        this.endPoint = "",
        this.httpEndpoint = "",
        this.headers = {},
        this.params = {},
        this.timeout = ia,
        this.transport = null,
        this.heartbeatIntervalMs = ys.HEARTBEAT_INTERVAL,
        this.heartbeatTimer = void 0,
        this.pendingHeartbeatRef = null,
        this.heartbeatCallback = ro,
        this.ref = 0,
        this.reconnectTimer = null,
        this.logger = ro,
        this.conn = null,
        this.sendBuffer = [],
        this.serializer = new Xg,
        this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
        },
        this.accessToken = null,
        this._connectionState = "disconnected",
        this._wasManualDisconnect = !1,
        this._authPromise = null,
        this._resolveFetch = s => {
            let i;
            return s ? i = s : typeof fetch > "u" ? i = (...o) => Qr(async () => {
                const {default: a} = await Promise.resolve().then( () => Qn);
                return {
                    default: a
                }
            }
            , void 0).then( ({default: a}) => a(...o)).catch(a => {
                throw new Error(`Failed to load @supabase/node-fetch: ${a.message}. This is required for HTTP requests in Node.js environments without native fetch.`)
            }
            ) : i = fetch,
            (...o) => i(...o)
        }
        ,
        !(!((r = n == null ? void 0 : n.params) === null || r === void 0) && r.apikey))
            throw new Error("API key is required to connect to Realtime");
        this.apiKey = n.params.apikey,
        this.endPoint = `${e}/${oa.websocket}`,
        this.httpEndpoint = jh(e),
        this._initializeOptions(n),
        this._setupReconnectionTimer(),
        this.fetch = this._resolveFetch(n == null ? void 0 : n.fetch)
    }
    connect() {
        if (!(this.isConnecting() || this.isDisconnecting() || this.conn !== null && this.isConnected())) {
            if (this._setConnectionState("connecting"),
            this._setAuthSafely("connect"),
            this.transport)
                this.conn = new this.transport(this.endpointURL());
            else
                try {
                    this.conn = qg.createWebSocket(this.endpointURL())
                } catch (e) {
                    this._setConnectionState("disconnected");
                    const n = e.message;
                    throw n.includes("Node.js") ? new Error(`${n}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : new Error(`WebSocket not available: ${n}`)
                }
            this._setupConnectionHandlers()
        }
    }
    endpointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, {
            vsn: Jg
        }))
    }
    disconnect(e, n) {
        if (!this.isDisconnecting())
            if (this._setConnectionState("disconnecting", !0),
            this.conn) {
                const r = setTimeout( () => {
                    this._setConnectionState("disconnected")
                }
                , 100);
                this.conn.onclose = () => {
                    clearTimeout(r),
                    this._setConnectionState("disconnected")
                }
                ,
                e ? this.conn.close(e, n ?? "") : this.conn.close(),
                this._teardownConnection()
            } else
                this._setConnectionState("disconnected")
    }
    getChannels() {
        return this.channels
    }
    async removeChannel(e) {
        const n = await e.unsubscribe();
        return this.channels.length === 0 && this.disconnect(),
        n
    }
    async removeAllChannels() {
        const e = await Promise.all(this.channels.map(n => n.unsubscribe()));
        return this.channels = [],
        this.disconnect(),
        e
    }
    log(e, n, r) {
        this.logger(e, n, r)
    }
    connectionState() {
        switch (this.conn && this.conn.readyState) {
        case Er.connecting:
            return Xt.Connecting;
        case Er.open:
            return Xt.Open;
        case Er.closing:
            return Xt.Closing;
        default:
            return Xt.Closed
        }
    }
    isConnected() {
        return this.connectionState() === Xt.Open
    }
    isConnecting() {
        return this._connectionState === "connecting"
    }
    isDisconnecting() {
        return this._connectionState === "disconnecting"
    }
    channel(e, n={
        config: {}
    }) {
        const r = `realtime:${e}`
          , s = this.getChannels().find(i => i.topic === r);
        if (s)
            return s;
        {
            const i = new pl(`realtime:${e}`,n,this);
            return this.channels.push(i),
            i
        }
    }
    push(e) {
        const {topic: n, event: r, payload: s, ref: i} = e
          , o = () => {
            this.encode(e, a => {
                var l;
                (l = this.conn) === null || l === void 0 || l.send(a)
            }
            )
        }
        ;
        this.log("push", `${n} ${r} (${i})`, s),
        this.isConnected() ? o() : this.sendBuffer.push(o)
    }
    async setAuth(e=null) {
        this._authPromise = this._performAuth(e);
        try {
            await this._authPromise
        } finally {
            this._authPromise = null
        }
    }
    async sendHeartbeat() {
        var e;
        if (!this.isConnected()) {
            try {
                this.heartbeatCallback("disconnected")
            } catch (n) {
                this.log("error", "error in heartbeat callback", n)
            }
            return
        }
        if (this.pendingHeartbeatRef) {
            this.pendingHeartbeatRef = null,
            this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
            try {
                this.heartbeatCallback("timeout")
            } catch (n) {
                this.log("error", "error in heartbeat callback", n)
            }
            this._wasManualDisconnect = !1,
            (e = this.conn) === null || e === void 0 || e.close(Qg, "heartbeat timeout"),
            setTimeout( () => {
                var n;
                this.isConnected() || (n = this.reconnectTimer) === null || n === void 0 || n.scheduleTimeout()
            }
            , ys.HEARTBEAT_TIMEOUT_FALLBACK);
            return
        }
        this.pendingHeartbeatRef = this._makeRef(),
        this.push({
            topic: "phoenix",
            event: "heartbeat",
            payload: {},
            ref: this.pendingHeartbeatRef
        });
        try {
            this.heartbeatCallback("sent")
        } catch (n) {
            this.log("error", "error in heartbeat callback", n)
        }
        this._setAuthSafely("heartbeat")
    }
    onHeartbeat(e) {
        this.heartbeatCallback = e
    }
    flushSendBuffer() {
        this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(e => e()),
        this.sendBuffer = [])
    }
    _makeRef() {
        let e = this.ref + 1;
        return e === this.ref ? this.ref = 0 : this.ref = e,
        this.ref.toString()
    }
    _leaveOpenTopic(e) {
        let n = this.channels.find(r => r.topic === e && (r._isJoined() || r._isJoining()));
        n && (this.log("transport", `leaving duplicate topic "${e}"`),
        n.unsubscribe())
    }
    _remove(e) {
        this.channels = this.channels.filter(n => n.topic !== e.topic)
    }
    _onConnMessage(e) {
        this.decode(e.data, n => {
            if (n.topic === "phoenix" && n.event === "phx_reply")
                try {
                    this.heartbeatCallback(n.payload.status === "ok" ? "ok" : "error")
                } catch (u) {
                    this.log("error", "error in heartbeat callback", u)
                }
            n.ref && n.ref === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null);
            const {topic: r, event: s, payload: i, ref: o} = n
              , a = o ? `(${o})` : ""
              , l = i.status || "";
            this.log("receive", `${l} ${r} ${s} ${a}`.trim(), i),
            this.channels.filter(u => u._isMember(r)).forEach(u => u._trigger(s, i, o)),
            this._triggerStateCallbacks("message", n)
        }
        )
    }
    _clearTimer(e) {
        var n;
        e === "heartbeat" && this.heartbeatTimer ? (clearInterval(this.heartbeatTimer),
        this.heartbeatTimer = void 0) : e === "reconnect" && ((n = this.reconnectTimer) === null || n === void 0 || n.reset())
    }
    _clearAllTimers() {
        this._clearTimer("heartbeat"),
        this._clearTimer("reconnect")
    }
    _setupConnectionHandlers() {
        this.conn && ("binaryType"in this.conn && (this.conn.binaryType = "arraybuffer"),
        this.conn.onopen = () => this._onConnOpen(),
        this.conn.onerror = e => this._onConnError(e),
        this.conn.onmessage = e => this._onConnMessage(e),
        this.conn.onclose = e => this._onConnClose(e))
    }
    _teardownConnection() {
        this.conn && (this.conn.onopen = null,
        this.conn.onerror = null,
        this.conn.onmessage = null,
        this.conn.onclose = null,
        this.conn = null),
        this._clearAllTimers(),
        this.channels.forEach(e => e.teardown())
    }
    _onConnOpen() {
        this._setConnectionState("connected"),
        this.log("transport", `connected to ${this.endpointURL()}`),
        this.flushSendBuffer(),
        this._clearTimer("reconnect"),
        this.worker ? this.workerRef || this._startWorkerHeartbeat() : this._startHeartbeat(),
        this._triggerStateCallbacks("open")
    }
    _startHeartbeat() {
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
        this.heartbeatTimer = setInterval( () => this.sendHeartbeat(), this.heartbeatIntervalMs)
    }
    _startWorkerHeartbeat() {
        this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
        const e = this._workerObjectUrl(this.workerUrl);
        this.workerRef = new Worker(e),
        this.workerRef.onerror = n => {
            this.log("worker", "worker error", n.message),
            this.workerRef.terminate()
        }
        ,
        this.workerRef.onmessage = n => {
            n.data.event === "keepAlive" && this.sendHeartbeat()
        }
        ,
        this.workerRef.postMessage({
            event: "start",
            interval: this.heartbeatIntervalMs
        })
    }
    _onConnClose(e) {
        var n;
        this._setConnectionState("disconnected"),
        this.log("transport", "close", e),
        this._triggerChanError(),
        this._clearTimer("heartbeat"),
        this._wasManualDisconnect || (n = this.reconnectTimer) === null || n === void 0 || n.scheduleTimeout(),
        this._triggerStateCallbacks("close", e)
    }
    _onConnError(e) {
        this._setConnectionState("disconnected"),
        this.log("transport", `${e}`),
        this._triggerChanError(),
        this._triggerStateCallbacks("error", e)
    }
    _triggerChanError() {
        this.channels.forEach(e => e._trigger(Qe.error))
    }
    _appendParams(e, n) {
        if (Object.keys(n).length === 0)
            return e;
        const r = e.match(/\?/) ? "&" : "?"
          , s = new URLSearchParams(n);
        return `${e}${r}${s}`
    }
    _workerObjectUrl(e) {
        let n;
        if (e)
            n = e;
        else {
            const r = new Blob([a0],{
                type: "application/javascript"
            });
            n = URL.createObjectURL(r)
        }
        return n
    }
    _setConnectionState(e, n=!1) {
        this._connectionState = e,
        e === "connecting" ? this._wasManualDisconnect = !1 : e === "disconnecting" && (this._wasManualDisconnect = n)
    }
    async _performAuth(e=null) {
        let n;
        e ? n = e : this.accessToken ? n = await this.accessToken() : n = this.accessTokenValue,
        this.accessTokenValue != n && (this.accessTokenValue = n,
        this.channels.forEach(r => {
            const s = {
                access_token: n,
                version: Gg
            };
            n && r.updateJoinPayload(s),
            r.joinedOnce && r._isJoined() && r._push(Qe.access_token, {
                access_token: n
            })
        }
        ))
    }
    async _waitForAuthIfNeeded() {
        this._authPromise && await this._authPromise
    }
    _setAuthSafely(e="general") {
        this.setAuth().catch(n => {
            this.log("error", `error setting auth in ${e}`, n)
        }
        )
    }
    _triggerStateCallbacks(e, n) {
        try {
            this.stateChangeCallbacks[e].forEach(r => {
                try {
                    r(n)
                } catch (s) {
                    this.log("error", `error in ${e} callback`, s)
                }
            }
            )
        } catch (r) {
            this.log("error", `error triggering ${e} callbacks`, r)
        }
    }
    _setupReconnectionTimer() {
        this.reconnectTimer = new Eh(async () => {
            setTimeout(async () => {
                await this._waitForAuthIfNeeded(),
                this.isConnected() || this.connect()
            }
            , ys.RECONNECT_DELAY)
        }
        ,this.reconnectAfterMs)
    }
    _initializeOptions(e) {
        var n, r, s, i, o, a, l, u, c;
        if (this.transport = (n = e == null ? void 0 : e.transport) !== null && n !== void 0 ? n : null,
        this.timeout = (r = e == null ? void 0 : e.timeout) !== null && r !== void 0 ? r : ia,
        this.heartbeatIntervalMs = (s = e == null ? void 0 : e.heartbeatIntervalMs) !== null && s !== void 0 ? s : ys.HEARTBEAT_INTERVAL,
        this.worker = (i = e == null ? void 0 : e.worker) !== null && i !== void 0 ? i : !1,
        this.accessToken = (o = e == null ? void 0 : e.accessToken) !== null && o !== void 0 ? o : null,
        this.heartbeatCallback = (a = e == null ? void 0 : e.heartbeatCallback) !== null && a !== void 0 ? a : ro,
        e != null && e.params && (this.params = e.params),
        e != null && e.logger && (this.logger = e.logger),
        (e != null && e.logLevel || e != null && e.log_level) && (this.logLevel = e.logLevel || e.log_level,
        this.params = Object.assign(Object.assign({}, this.params), {
            log_level: this.logLevel
        })),
        this.reconnectAfterMs = (l = e == null ? void 0 : e.reconnectAfterMs) !== null && l !== void 0 ? l : d => i0[d - 1] || o0,
        this.encode = (u = e == null ? void 0 : e.encode) !== null && u !== void 0 ? u : (d, h) => h(JSON.stringify(d)),
        this.decode = (c = e == null ? void 0 : e.decode) !== null && c !== void 0 ? c : this.serializer.decode.bind(this.serializer),
        this.worker) {
            if (typeof window < "u" && !window.Worker)
                throw new Error("Web Worker is not supported");
            this.workerUrl = e == null ? void 0 : e.workerUrl
        }
    }
}
class ml extends Error {
    constructor(e) {
        super(e),
        this.__isStorageError = !0,
        this.name = "StorageError"
    }
}
function ie(t) {
    return typeof t == "object" && t !== null && "__isStorageError"in t
}
class u0 extends ml {
    constructor(e, n, r) {
        super(e),
        this.name = "StorageApiError",
        this.status = n,
        this.statusCode = r
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            statusCode: this.statusCode
        }
    }
}
class la extends ml {
    constructor(e, n) {
        super(e),
        this.name = "StorageUnknownError",
        this.originalError = n
    }
}
var c0 = function(t, e, n, r) {
    function s(i) {
        return i instanceof n ? i : new n(function(o) {
            o(i)
        }
        )
    }
    return new (n || (n = Promise))(function(i, o) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (d) {
                o(d)
            }
        }
        function l(c) {
            try {
                u(r.throw(c))
            } catch (d) {
                o(d)
            }
        }
        function u(c) {
            c.done ? i(c.value) : s(c.value).then(a, l)
        }
        u((r = r.apply(t, e || [])).next())
    }
    )
};
const Ch = t => {
    let e;
    return t ? e = t : typeof fetch > "u" ? e = (...n) => Qr(async () => {
        const {default: r} = await Promise.resolve().then( () => Qn);
        return {
            default: r
        }
    }
    , void 0).then( ({default: r}) => r(...n)) : e = fetch,
    (...n) => e(...n)
}
  , d0 = () => c0(void 0, void 0, void 0, function*() {
    return typeof Response > "u" ? (yield Qr( () => Promise.resolve().then( () => Qn), void 0)).Response : Response
})
  , ua = t => {
    if (Array.isArray(t))
        return t.map(n => ua(n));
    if (typeof t == "function" || t !== Object(t))
        return t;
    const e = {};
    return Object.entries(t).forEach( ([n,r]) => {
        const s = n.replace(/([-_][a-z])/gi, i => i.toUpperCase().replace(/[-_]/g, ""));
        e[s] = ua(r)
    }
    ),
    e
}
  , h0 = t => {
    if (typeof t != "object" || t === null)
        return !1;
    const e = Object.getPrototypeOf(t);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t)
}
;
var hn = function(t, e, n, r) {
    function s(i) {
        return i instanceof n ? i : new n(function(o) {
            o(i)
        }
        )
    }
    return new (n || (n = Promise))(function(i, o) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (d) {
                o(d)
            }
        }
        function l(c) {
            try {
                u(r.throw(c))
            } catch (d) {
                o(d)
            }
        }
        function u(c) {
            c.done ? i(c.value) : s(c.value).then(a, l)
        }
        u((r = r.apply(t, e || [])).next())
    }
    )
};
const so = t => t.msg || t.message || t.error_description || t.error || JSON.stringify(t)
  , f0 = (t, e, n) => hn(void 0, void 0, void 0, function*() {
    const r = yield d0();
    t instanceof r && !(n != null && n.noResolveJson) ? t.json().then(s => {
        const i = t.status || 500
          , o = (s == null ? void 0 : s.statusCode) || i + "";
        e(new u0(so(s),i,o))
    }
    ).catch(s => {
        e(new la(so(s),s))
    }
    ) : e(new la(so(t),t))
})
  , p0 = (t, e, n, r) => {
    const s = {
        method: t,
        headers: (e == null ? void 0 : e.headers) || {}
    };
    return t === "GET" || !r ? s : (h0(r) ? (s.headers = Object.assign({
        "Content-Type": "application/json"
    }, e == null ? void 0 : e.headers),
    s.body = JSON.stringify(r)) : s.body = r,
    e != null && e.duplex && (s.duplex = e.duplex),
    Object.assign(Object.assign({}, s), n))
}
;
function Xr(t, e, n, r, s, i) {
    return hn(this, void 0, void 0, function*() {
        return new Promise( (o, a) => {
            t(n, p0(e, r, s, i)).then(l => {
                if (!l.ok)
                    throw l;
                return r != null && r.noResolveJson ? l : l.json()
            }
            ).then(l => o(l)).catch(l => f0(l, a, r))
        }
        )
    })
}
function oi(t, e, n, r) {
    return hn(this, void 0, void 0, function*() {
        return Xr(t, "GET", e, n, r)
    })
}
function st(t, e, n, r, s) {
    return hn(this, void 0, void 0, function*() {
        return Xr(t, "POST", e, r, s, n)
    })
}
function ca(t, e, n, r, s) {
    return hn(this, void 0, void 0, function*() {
        return Xr(t, "PUT", e, r, s, n)
    })
}
function m0(t, e, n, r) {
    return hn(this, void 0, void 0, function*() {
        return Xr(t, "HEAD", e, Object.assign(Object.assign({}, n), {
            noResolveJson: !0
        }), r)
    })
}
function Th(t, e, n, r, s) {
    return hn(this, void 0, void 0, function*() {
        return Xr(t, "DELETE", e, r, s, n)
    })
}
var ye = function(t, e, n, r) {
    function s(i) {
        return i instanceof n ? i : new n(function(o) {
            o(i)
        }
        )
    }
    return new (n || (n = Promise))(function(i, o) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (d) {
                o(d)
            }
        }
        function l(c) {
            try {
                u(r.throw(c))
            } catch (d) {
                o(d)
            }
        }
        function u(c) {
            c.done ? i(c.value) : s(c.value).then(a, l)
        }
        u((r = r.apply(t, e || [])).next())
    }
    )
};
const g0 = {
    limit: 100,
    offset: 0,
    sortBy: {
        column: "name",
        order: "asc"
    }
}
  , zu = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1
};
class v0 {
    constructor(e, n={}, r, s) {
        this.shouldThrowOnError = !1,
        this.url = e,
        this.headers = n,
        this.bucketId = r,
        this.fetch = Ch(s)
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    uploadOrUpdate(e, n, r, s) {
        return ye(this, void 0, void 0, function*() {
            try {
                let i;
                const o = Object.assign(Object.assign({}, zu), s);
                let a = Object.assign(Object.assign({}, this.headers), e === "POST" && {
                    "x-upsert": String(o.upsert)
                });
                const l = o.metadata;
                typeof Blob < "u" && r instanceof Blob ? (i = new FormData,
                i.append("cacheControl", o.cacheControl),
                l && i.append("metadata", this.encodeMetadata(l)),
                i.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (i = r,
                i.append("cacheControl", o.cacheControl),
                l && i.append("metadata", this.encodeMetadata(l))) : (i = r,
                a["cache-control"] = `max-age=${o.cacheControl}`,
                a["content-type"] = o.contentType,
                l && (a["x-metadata"] = this.toBase64(this.encodeMetadata(l)))),
                s != null && s.headers && (a = Object.assign(Object.assign({}, a), s.headers));
                const u = this._removeEmptyFolders(n)
                  , c = this._getFinalPath(u)
                  , d = yield(e == "PUT" ? ca : st)(this.fetch, `${this.url}/object/${c}`, i, Object.assign({
                    headers: a
                }, o != null && o.duplex ? {
                    duplex: o.duplex
                } : {}));
                return {
                    data: {
                        path: u,
                        id: d.Id,
                        fullPath: d.Key
                    },
                    error: null
                }
            } catch (i) {
                if (this.shouldThrowOnError)
                    throw i;
                if (ie(i))
                    return {
                        data: null,
                        error: i
                    };
                throw i
            }
        })
    }
    upload(e, n, r) {
        return ye(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("POST", e, n, r)
        })
    }
    uploadToSignedUrl(e, n, r, s) {
        return ye(this, void 0, void 0, function*() {
            const i = this._removeEmptyFolders(e)
              , o = this._getFinalPath(i)
              , a = new URL(this.url + `/object/upload/sign/${o}`);
            a.searchParams.set("token", n);
            try {
                let l;
                const u = Object.assign({
                    upsert: zu.upsert
                }, s)
                  , c = Object.assign(Object.assign({}, this.headers), {
                    "x-upsert": String(u.upsert)
                });
                typeof Blob < "u" && r instanceof Blob ? (l = new FormData,
                l.append("cacheControl", u.cacheControl),
                l.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (l = r,
                l.append("cacheControl", u.cacheControl)) : (l = r,
                c["cache-control"] = `max-age=${u.cacheControl}`,
                c["content-type"] = u.contentType);
                const d = yield ca(this.fetch, a.toString(), l, {
                    headers: c
                });
                return {
                    data: {
                        path: i,
                        fullPath: d.Key
                    },
                    error: null
                }
            } catch (l) {
                if (this.shouldThrowOnError)
                    throw l;
                if (ie(l))
                    return {
                        data: null,
                        error: l
                    };
                throw l
            }
        })
    }
    createSignedUploadUrl(e, n) {
        return ye(this, void 0, void 0, function*() {
            try {
                let r = this._getFinalPath(e);
                const s = Object.assign({}, this.headers);
                n != null && n.upsert && (s["x-upsert"] = "true");
                const i = yield st(this.fetch, `${this.url}/object/upload/sign/${r}`, {}, {
                    headers: s
                })
                  , o = new URL(this.url + i.url)
                  , a = o.searchParams.get("token");
                if (!a)
                    throw new ml("No token returned by API");
                return {
                    data: {
                        signedUrl: o.toString(),
                        path: e,
                        token: a
                    },
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (ie(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    update(e, n, r) {
        return ye(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("PUT", e, n, r)
        })
    }
    move(e, n, r) {
        return ye(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield st(this.fetch, `${this.url}/object/move`, {
                        bucketId: this.bucketId,
                        sourceKey: e,
                        destinationKey: n,
                        destinationBucket: r == null ? void 0 : r.destinationBucket
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError)
                    throw s;
                if (ie(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    copy(e, n, r) {
        return ye(this, void 0, void 0, function*() {
            try {
                return {
                    data: {
                        path: (yield st(this.fetch, `${this.url}/object/copy`, {
                            bucketId: this.bucketId,
                            sourceKey: e,
                            destinationKey: n,
                            destinationBucket: r == null ? void 0 : r.destinationBucket
                        }, {
                            headers: this.headers
                        })).Key
                    },
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError)
                    throw s;
                if (ie(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    createSignedUrl(e, n, r) {
        return ye(this, void 0, void 0, function*() {
            try {
                let s = this._getFinalPath(e)
                  , i = yield st(this.fetch, `${this.url}/object/sign/${s}`, Object.assign({
                    expiresIn: n
                }, r != null && r.transform ? {
                    transform: r.transform
                } : {}), {
                    headers: this.headers
                });
                const o = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
                return i = {
                    signedUrl: encodeURI(`${this.url}${i.signedURL}${o}`)
                },
                {
                    data: i,
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError)
                    throw s;
                if (ie(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    createSignedUrls(e, n, r) {
        return ye(this, void 0, void 0, function*() {
            try {
                const s = yield st(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                    expiresIn: n,
                    paths: e
                }, {
                    headers: this.headers
                })
                  , i = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
                return {
                    data: s.map(o => Object.assign(Object.assign({}, o), {
                        signedUrl: o.signedURL ? encodeURI(`${this.url}${o.signedURL}${i}`) : null
                    })),
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError)
                    throw s;
                if (ie(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    download(e, n) {
        return ye(this, void 0, void 0, function*() {
            const s = typeof (n == null ? void 0 : n.transform) < "u" ? "render/image/authenticated" : "object"
              , i = this.transformOptsToQueryString((n == null ? void 0 : n.transform) || {})
              , o = i ? `?${i}` : "";
            try {
                const a = this._getFinalPath(e);
                return {
                    data: yield(yield oi(this.fetch, `${this.url}/${s}/${a}${o}`, {
                        headers: this.headers,
                        noResolveJson: !0
                    })).blob(),
                    error: null
                }
            } catch (a) {
                if (this.shouldThrowOnError)
                    throw a;
                if (ie(a))
                    return {
                        data: null,
                        error: a
                    };
                throw a
            }
        })
    }
    info(e) {
        return ye(this, void 0, void 0, function*() {
            const n = this._getFinalPath(e);
            try {
                const r = yield oi(this.fetch, `${this.url}/object/info/${n}`, {
                    headers: this.headers
                });
                return {
                    data: ua(r),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (ie(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    exists(e) {
        return ye(this, void 0, void 0, function*() {
            const n = this._getFinalPath(e);
            try {
                return yield m0(this.fetch, `${this.url}/object/${n}`, {
                    headers: this.headers
                }),
                {
                    data: !0,
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (ie(r) && r instanceof la) {
                    const s = r.originalError;
                    if ([400, 404].includes(s == null ? void 0 : s.status))
                        return {
                            data: !1,
                            error: r
                        }
                }
                throw r
            }
        })
    }
    getPublicUrl(e, n) {
        const r = this._getFinalPath(e)
          , s = []
          , i = n != null && n.download ? `download=${n.download === !0 ? "" : n.download}` : "";
        i !== "" && s.push(i);
        const a = typeof (n == null ? void 0 : n.transform) < "u" ? "render/image" : "object"
          , l = this.transformOptsToQueryString((n == null ? void 0 : n.transform) || {});
        l !== "" && s.push(l);
        let u = s.join("&");
        return u !== "" && (u = `?${u}`),
        {
            data: {
                publicUrl: encodeURI(`${this.url}/${a}/public/${r}${u}`)
            }
        }
    }
    remove(e) {
        return ye(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Th(this.fetch, `${this.url}/object/${this.bucketId}`, {
                        prefixes: e
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError)
                    throw n;
                if (ie(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    list(e, n, r) {
        return ye(this, void 0, void 0, function*() {
            try {
                const s = Object.assign(Object.assign(Object.assign({}, g0), n), {
                    prefix: e || ""
                });
                return {
                    data: yield st(this.fetch, `${this.url}/object/list/${this.bucketId}`, s, {
                        headers: this.headers
                    }, r),
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError)
                    throw s;
                if (ie(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    listV2(e, n) {
        return ye(this, void 0, void 0, function*() {
            try {
                const r = Object.assign({}, e);
                return {
                    data: yield st(this.fetch, `${this.url}/object/list-v2/${this.bucketId}`, r, {
                        headers: this.headers
                    }, n),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (ie(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    encodeMetadata(e) {
        return JSON.stringify(e)
    }
    toBase64(e) {
        return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e)
    }
    _getFinalPath(e) {
        return `${this.bucketId}/${e.replace(/^\/+/, "")}`
    }
    _removeEmptyFolders(e) {
        return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
    }
    transformOptsToQueryString(e) {
        const n = [];
        return e.width && n.push(`width=${e.width}`),
        e.height && n.push(`height=${e.height}`),
        e.resize && n.push(`resize=${e.resize}`),
        e.format && n.push(`format=${e.format}`),
        e.quality && n.push(`quality=${e.quality}`),
        n.join("&")
    }
}
const y0 = "2.12.1"
  , w0 = {
    "X-Client-Info": `storage-js/${y0}`
};
var pn = function(t, e, n, r) {
    function s(i) {
        return i instanceof n ? i : new n(function(o) {
            o(i)
        }
        )
    }
    return new (n || (n = Promise))(function(i, o) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (d) {
                o(d)
            }
        }
        function l(c) {
            try {
                u(r.throw(c))
            } catch (d) {
                o(d)
            }
        }
        function u(c) {
            c.done ? i(c.value) : s(c.value).then(a, l)
        }
        u((r = r.apply(t, e || [])).next())
    }
    )
};
class _0 {
    constructor(e, n={}, r, s) {
        this.shouldThrowOnError = !1;
        const i = new URL(e);
        s != null && s.useNewHostname && /supabase\.(co|in|red)$/.test(i.hostname) && !i.hostname.includes("storage.supabase.") && (i.hostname = i.hostname.replace("supabase.", "storage.supabase.")),
        this.url = i.href,
        this.headers = Object.assign(Object.assign({}, w0), n),
        this.fetch = Ch(r)
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    listBuckets() {
        return pn(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield oi(this.fetch, `${this.url}/bucket`, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (e) {
                if (this.shouldThrowOnError)
                    throw e;
                if (ie(e))
                    return {
                        data: null,
                        error: e
                    };
                throw e
            }
        })
    }
    getBucket(e) {
        return pn(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield oi(this.fetch, `${this.url}/bucket/${e}`, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError)
                    throw n;
                if (ie(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    createBucket(e, n={
        public: !1
    }) {
        return pn(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield st(this.fetch, `${this.url}/bucket`, {
                        id: e,
                        name: e,
                        type: n.type,
                        public: n.public,
                        file_size_limit: n.fileSizeLimit,
                        allowed_mime_types: n.allowedMimeTypes
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (ie(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    updateBucket(e, n) {
        return pn(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield ca(this.fetch, `${this.url}/bucket/${e}`, {
                        id: e,
                        name: e,
                        public: n.public,
                        file_size_limit: n.fileSizeLimit,
                        allowed_mime_types: n.allowedMimeTypes
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (ie(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    emptyBucket(e) {
        return pn(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield st(this.fetch, `${this.url}/bucket/${e}/empty`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError)
                    throw n;
                if (ie(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    deleteBucket(e) {
        return pn(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Th(this.fetch, `${this.url}/bucket/${e}`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError)
                    throw n;
                if (ie(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
}
class k0 extends _0 {
    constructor(e, n={}, r, s) {
        super(e, n, r, s)
    }
    from(e) {
        return new v0(this.url,this.headers,e,this.fetch)
    }
}
const x0 = "2.57.4";
let pr = "";
typeof Deno < "u" ? pr = "deno" : typeof document < "u" ? pr = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? pr = "react-native" : pr = "node";
const S0 = {
    "X-Client-Info": `supabase-js-${pr}/${x0}`
}
  , E0 = {
    headers: S0
}
  , b0 = {
    schema: "public"
}
  , j0 = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit"
}
  , C0 = {};
var T0 = function(t, e, n, r) {
    function s(i) {
        return i instanceof n ? i : new n(function(o) {
            o(i)
        }
        )
    }
    return new (n || (n = Promise))(function(i, o) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (d) {
                o(d)
            }
        }
        function l(c) {
            try {
                u(r.throw(c))
            } catch (d) {
                o(d)
            }
        }
        function u(c) {
            c.done ? i(c.value) : s(c.value).then(a, l)
        }
        u((r = r.apply(t, e || [])).next())
    }
    )
};
const P0 = t => {
    let e;
    return t ? e = t : typeof fetch > "u" ? e = fh : e = fetch,
    (...n) => e(...n)
}
  , N0 = () => typeof Headers > "u" ? ph : Headers
  , O0 = (t, e, n) => {
    const r = P0(n)
      , s = N0();
    return (i, o) => T0(void 0, void 0, void 0, function*() {
        var a;
        const l = (a = yield e()) !== null && a !== void 0 ? a : t;
        let u = new s(o == null ? void 0 : o.headers);
        return u.has("apikey") || u.set("apikey", t),
        u.has("Authorization") || u.set("Authorization", `Bearer ${l}`),
        r(i, Object.assign(Object.assign({}, o), {
            headers: u
        }))
    })
}
;
var R0 = function(t, e, n, r) {
    function s(i) {
        return i instanceof n ? i : new n(function(o) {
            o(i)
        }
        )
    }
    return new (n || (n = Promise))(function(i, o) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (d) {
                o(d)
            }
        }
        function l(c) {
            try {
                u(r.throw(c))
            } catch (d) {
                o(d)
            }
        }
        function u(c) {
            c.done ? i(c.value) : s(c.value).then(a, l)
        }
        u((r = r.apply(t, e || [])).next())
    }
    )
};
function A0(t) {
    return t.endsWith("/") ? t : t + "/"
}
function I0(t, e) {
    var n, r;
    const {db: s, auth: i, realtime: o, global: a} = t
      , {db: l, auth: u, realtime: c, global: d} = e
      , h = {
        db: Object.assign(Object.assign({}, l), s),
        auth: Object.assign(Object.assign({}, u), i),
        realtime: Object.assign(Object.assign({}, c), o),
        storage: {},
        global: Object.assign(Object.assign(Object.assign({}, d), a), {
            headers: Object.assign(Object.assign({}, (n = d == null ? void 0 : d.headers) !== null && n !== void 0 ? n : {}), (r = a == null ? void 0 : a.headers) !== null && r !== void 0 ? r : {})
        }),
        accessToken: () => R0(this, void 0, void 0, function*() {
            return ""
        })
    };
    return t.accessToken ? h.accessToken = t.accessToken : delete h.accessToken,
    h
}
function $0(t) {
    const e = t == null ? void 0 : t.trim();
    if (!e)
        throw new Error("supabaseUrl is required.");
    if (!e.match(/^https?:\/\//i))
        throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
    try {
        return new URL(A0(e))
    } catch {
        throw Error("Invalid supabaseUrl: Provided URL is malformed.")
    }
}
const Ph = "2.71.1"
  , wn = 30 * 1e3
  , da = 3
  , io = da * wn
  , L0 = "http://localhost:9999"
  , D0 = "supabase.auth.token"
  , M0 = {
    "X-Client-Info": `gotrue-js/${Ph}`
}
  , ha = "X-Supabase-Api-Version"
  , Nh = {
    "2024-01-01": {
        timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
        name: "2024-01-01"
    }
}
  , U0 = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i
  , z0 = 10 * 60 * 1e3;
class gl extends Error {
    constructor(e, n, r) {
        super(e),
        this.__isAuthError = !0,
        this.name = "AuthError",
        this.status = n,
        this.code = r
    }
}
function I(t) {
    return typeof t == "object" && t !== null && "__isAuthError"in t
}
class F0 extends gl {
    constructor(e, n, r) {
        super(e, n, r),
        this.name = "AuthApiError",
        this.status = n,
        this.code = r
    }
}
function B0(t) {
    return I(t) && t.name === "AuthApiError"
}
class Oh extends gl {
    constructor(e, n) {
        super(e),
        this.name = "AuthUnknownError",
        this.originalError = n
    }
}
class Vt extends gl {
    constructor(e, n, r, s) {
        super(e, r, s),
        this.name = n,
        this.status = r
    }
}
class xt extends Vt {
    constructor() {
        super("Auth session missing!", "AuthSessionMissingError", 400, void 0)
    }
}
function W0(t) {
    return I(t) && t.name === "AuthSessionMissingError"
}
class ws extends Vt {
    constructor() {
        super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0)
    }
}
class _s extends Vt {
    constructor(e) {
        super(e, "AuthInvalidCredentialsError", 400, void 0)
    }
}
class ks extends Vt {
    constructor(e, n=null) {
        super(e, "AuthImplicitGrantRedirectError", 500, void 0),
        this.details = null,
        this.details = n
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}
function V0(t) {
    return I(t) && t.name === "AuthImplicitGrantRedirectError"
}
class Fu extends Vt {
    constructor(e, n=null) {
        super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0),
        this.details = null,
        this.details = n
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}
class fa extends Vt {
    constructor(e, n) {
        super(e, "AuthRetryableFetchError", n, void 0)
    }
}
function oo(t) {
    return I(t) && t.name === "AuthRetryableFetchError"
}
class Bu extends Vt {
    constructor(e, n, r) {
        super(e, "AuthWeakPasswordError", n, "weak_password"),
        this.reasons = r
    }
}
class pa extends Vt {
    constructor(e) {
        super(e, "AuthInvalidJwtError", 400, "invalid_jwt")
    }
}
const ai = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("")
  , Wu = ` 	
\r=`.split("")
  , H0 = ( () => {
    const t = new Array(128);
    for (let e = 0; e < t.length; e += 1)
        t[e] = -1;
    for (let e = 0; e < Wu.length; e += 1)
        t[Wu[e].charCodeAt(0)] = -2;
    for (let e = 0; e < ai.length; e += 1)
        t[ai[e].charCodeAt(0)] = e;
    return t
}
)();
function Vu(t, e, n) {
    if (t !== null)
        for (e.queue = e.queue << 8 | t,
        e.queuedBits += 8; e.queuedBits >= 6; ) {
            const r = e.queue >> e.queuedBits - 6 & 63;
            n(ai[r]),
            e.queuedBits -= 6
        }
    else if (e.queuedBits > 0)
        for (e.queue = e.queue << 6 - e.queuedBits,
        e.queuedBits = 6; e.queuedBits >= 6; ) {
            const r = e.queue >> e.queuedBits - 6 & 63;
            n(ai[r]),
            e.queuedBits -= 6
        }
}
function Rh(t, e, n) {
    const r = H0[t];
    if (r > -1)
        for (e.queue = e.queue << 6 | r,
        e.queuedBits += 6; e.queuedBits >= 8; )
            n(e.queue >> e.queuedBits - 8 & 255),
            e.queuedBits -= 8;
    else {
        if (r === -2)
            return;
        throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`)
    }
}
function Hu(t) {
    const e = []
      , n = o => {
        e.push(String.fromCodePoint(o))
    }
      , r = {
        utf8seq: 0,
        codepoint: 0
    }
      , s = {
        queue: 0,
        queuedBits: 0
    }
      , i = o => {
        G0(o, r, n)
    }
    ;
    for (let o = 0; o < t.length; o += 1)
        Rh(t.charCodeAt(o), s, i);
    return e.join("")
}
function q0(t, e) {
    if (t <= 127) {
        e(t);
        return
    } else if (t <= 2047) {
        e(192 | t >> 6),
        e(128 | t & 63);
        return
    } else if (t <= 65535) {
        e(224 | t >> 12),
        e(128 | t >> 6 & 63),
        e(128 | t & 63);
        return
    } else if (t <= 1114111) {
        e(240 | t >> 18),
        e(128 | t >> 12 & 63),
        e(128 | t >> 6 & 63),
        e(128 | t & 63);
        return
    }
    throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`)
}
function K0(t, e) {
    for (let n = 0; n < t.length; n += 1) {
        let r = t.charCodeAt(n);
        if (r > 55295 && r <= 56319) {
            const s = (r - 55296) * 1024 & 65535;
            r = (t.charCodeAt(n + 1) - 56320 & 65535 | s) + 65536,
            n += 1
        }
        q0(r, e)
    }
}
function G0(t, e, n) {
    if (e.utf8seq === 0) {
        if (t <= 127) {
            n(t);
            return
        }
        for (let r = 1; r < 6; r += 1)
            if (!(t >> 7 - r & 1)) {
                e.utf8seq = r;
                break
            }
        if (e.utf8seq === 2)
            e.codepoint = t & 31;
        else if (e.utf8seq === 3)
            e.codepoint = t & 15;
        else if (e.utf8seq === 4)
            e.codepoint = t & 7;
        else
            throw new Error("Invalid UTF-8 sequence");
        e.utf8seq -= 1
    } else if (e.utf8seq > 0) {
        if (t <= 127)
            throw new Error("Invalid UTF-8 sequence");
        e.codepoint = e.codepoint << 6 | t & 63,
        e.utf8seq -= 1,
        e.utf8seq === 0 && n(e.codepoint)
    }
}
function J0(t) {
    const e = []
      , n = {
        queue: 0,
        queuedBits: 0
    }
      , r = s => {
        e.push(s)
    }
    ;
    for (let s = 0; s < t.length; s += 1)
        Rh(t.charCodeAt(s), n, r);
    return new Uint8Array(e)
}
function Q0(t) {
    const e = [];
    return K0(t, n => e.push(n)),
    new Uint8Array(e)
}
function Y0(t) {
    const e = []
      , n = {
        queue: 0,
        queuedBits: 0
    }
      , r = s => {
        e.push(s)
    }
    ;
    return t.forEach(s => Vu(s, n, r)),
    Vu(null, n, r),
    e.join("")
}
function X0(t) {
    return Math.round(Date.now() / 1e3) + t
}
function Z0() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
        const e = Math.random() * 16 | 0;
        return (t == "x" ? e : e & 3 | 8).toString(16)
    })
}
const Ke = () => typeof window < "u" && typeof document < "u"
  , Kt = {
    tested: !1,
    writable: !1
}
  , Ah = () => {
    if (!Ke())
        return !1;
    try {
        if (typeof globalThis.localStorage != "object")
            return !1
    } catch {
        return !1
    }
    if (Kt.tested)
        return Kt.writable;
    const t = `lswt-${Math.random()}${Math.random()}`;
    try {
        globalThis.localStorage.setItem(t, t),
        globalThis.localStorage.removeItem(t),
        Kt.tested = !0,
        Kt.writable = !0
    } catch {
        Kt.tested = !0,
        Kt.writable = !1
    }
    return Kt.writable
}
;
function ev(t) {
    const e = {}
      , n = new URL(t);
    if (n.hash && n.hash[0] === "#")
        try {
            new URLSearchParams(n.hash.substring(1)).forEach( (s, i) => {
                e[i] = s
            }
            )
        } catch {}
    return n.searchParams.forEach( (r, s) => {
        e[s] = r
    }
    ),
    e
}
const Ih = t => {
    let e;
    return t ? e = t : typeof fetch > "u" ? e = (...n) => Qr(async () => {
        const {default: r} = await Promise.resolve().then( () => Qn);
        return {
            default: r
        }
    }
    , void 0).then( ({default: r}) => r(...n)) : e = fetch,
    (...n) => e(...n)
}
  , tv = t => typeof t == "object" && t !== null && "status"in t && "ok"in t && "json"in t && typeof t.json == "function"
  , _n = async (t, e, n) => {
    await t.setItem(e, JSON.stringify(n))
}
  , Gt = async (t, e) => {
    const n = await t.getItem(e);
    if (!n)
        return null;
    try {
        return JSON.parse(n)
    } catch {
        return n
    }
}
  , kt = async (t, e) => {
    await t.removeItem(e)
}
;
class Ti {
    constructor() {
        this.promise = new Ti.promiseConstructor( (e, n) => {
            this.resolve = e,
            this.reject = n
        }
        )
    }
}
Ti.promiseConstructor = Promise;
function ao(t) {
    const e = t.split(".");
    if (e.length !== 3)
        throw new pa("Invalid JWT structure");
    for (let r = 0; r < e.length; r++)
        if (!U0.test(e[r]))
            throw new pa("JWT not in base64url format");
    return {
        header: JSON.parse(Hu(e[0])),
        payload: JSON.parse(Hu(e[1])),
        signature: J0(e[2]),
        raw: {
            header: e[0],
            payload: e[1]
        }
    }
}
async function nv(t) {
    return await new Promise(e => {
        setTimeout( () => e(null), t)
    }
    )
}
function rv(t, e) {
    return new Promise( (r, s) => {
        (async () => {
            for (let i = 0; i < 1 / 0; i++)
                try {
                    const o = await t(i);
                    if (!e(i, null, o)) {
                        r(o);
                        return
                    }
                } catch (o) {
                    if (!e(i, o)) {
                        s(o);
                        return
                    }
                }
        }
        )()
    }
    )
}
function sv(t) {
    return ("0" + t.toString(16)).substr(-2)
}
function iv() {
    const e = new Uint32Array(56);
    if (typeof crypto > "u") {
        const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
          , r = n.length;
        let s = "";
        for (let i = 0; i < 56; i++)
            s += n.charAt(Math.floor(Math.random() * r));
        return s
    }
    return crypto.getRandomValues(e),
    Array.from(e, sv).join("")
}
async function ov(t) {
    const n = new TextEncoder().encode(t)
      , r = await crypto.subtle.digest("SHA-256", n)
      , s = new Uint8Array(r);
    return Array.from(s).map(i => String.fromCharCode(i)).join("")
}
async function av(t) {
    if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
        return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),
        t;
    const n = await ov(t);
    return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}
async function mn(t, e, n=!1) {
    const r = iv();
    let s = r;
    n && (s += "/PASSWORD_RECOVERY"),
    await _n(t, `${e}-code-verifier`, s);
    const i = await av(r);
    return [i, r === i ? "plain" : "s256"]
}
const lv = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function uv(t) {
    const e = t.headers.get(ha);
    if (!e || !e.match(lv))
        return null;
    try {
        return new Date(`${e}T00:00:00.0Z`)
    } catch {
        return null
    }
}
function cv(t) {
    if (!t)
        throw new Error("Missing exp claim");
    const e = Math.floor(Date.now() / 1e3);
    if (t <= e)
        throw new Error("JWT has expired")
}
function dv(t) {
    switch (t) {
    case "RS256":
        return {
            name: "RSASSA-PKCS1-v1_5",
            hash: {
                name: "SHA-256"
            }
        };
    case "ES256":
        return {
            name: "ECDSA",
            namedCurve: "P-256",
            hash: {
                name: "SHA-256"
            }
        };
    default:
        throw new Error("Invalid alg claim")
    }
}
const hv = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function gn(t) {
    if (!hv.test(t))
        throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")
}
function lo() {
    const t = {};
    return new Proxy(t,{
        get: (e, n) => {
            if (n === "__isUserNotAvailableProxy")
                return !0;
            if (typeof n == "symbol") {
                const r = n.toString();
                if (r === "Symbol(Symbol.toPrimitive)" || r === "Symbol(Symbol.toStringTag)" || r === "Symbol(util.inspect.custom)")
                    return
            }
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${n}" property of the session object is not supported. Please use getUser() instead.`)
        }
        ,
        set: (e, n) => {
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)
        }
        ,
        deleteProperty: (e, n) => {
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)
        }
    })
}
function qu(t) {
    return JSON.parse(JSON.stringify(t))
}
var fv = function(t, e) {
    var n = {};
    for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, r = Object.getOwnPropertySymbols(t); s < r.length; s++)
            e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[s]) && (n[r[s]] = t[r[s]]);
    return n
};
const Yt = t => t.msg || t.message || t.error_description || t.error || JSON.stringify(t)
  , pv = [502, 503, 504];
async function Ku(t) {
    var e;
    if (!tv(t))
        throw new fa(Yt(t),0);
    if (pv.includes(t.status))
        throw new fa(Yt(t),t.status);
    let n;
    try {
        n = await t.json()
    } catch (i) {
        throw new Oh(Yt(i),i)
    }
    let r;
    const s = uv(t);
    if (s && s.getTime() >= Nh["2024-01-01"].timestamp && typeof n == "object" && n && typeof n.code == "string" ? r = n.code : typeof n == "object" && n && typeof n.error_code == "string" && (r = n.error_code),
    r) {
        if (r === "weak_password")
            throw new Bu(Yt(n),t.status,((e = n.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
        if (r === "session_not_found")
            throw new xt
    } else if (typeof n == "object" && n && typeof n.weak_password == "object" && n.weak_password && Array.isArray(n.weak_password.reasons) && n.weak_password.reasons.length && n.weak_password.reasons.reduce( (i, o) => i && typeof o == "string", !0))
        throw new Bu(Yt(n),t.status,n.weak_password.reasons);
    throw new F0(Yt(n),t.status || 500,r)
}
const mv = (t, e, n, r) => {
    const s = {
        method: t,
        headers: (e == null ? void 0 : e.headers) || {}
    };
    return t === "GET" ? s : (s.headers = Object.assign({
        "Content-Type": "application/json;charset=UTF-8"
    }, e == null ? void 0 : e.headers),
    s.body = JSON.stringify(r),
    Object.assign(Object.assign({}, s), n))
}
;
async function D(t, e, n, r) {
    var s;
    const i = Object.assign({}, r == null ? void 0 : r.headers);
    i[ha] || (i[ha] = Nh["2024-01-01"].name),
    r != null && r.jwt && (i.Authorization = `Bearer ${r.jwt}`);
    const o = (s = r == null ? void 0 : r.query) !== null && s !== void 0 ? s : {};
    r != null && r.redirectTo && (o.redirect_to = r.redirectTo);
    const a = Object.keys(o).length ? "?" + new URLSearchParams(o).toString() : ""
      , l = await gv(t, e, n + a, {
        headers: i,
        noResolveJson: r == null ? void 0 : r.noResolveJson
    }, {}, r == null ? void 0 : r.body);
    return r != null && r.xform ? r == null ? void 0 : r.xform(l) : {
        data: Object.assign({}, l),
        error: null
    }
}
async function gv(t, e, n, r, s, i) {
    const o = mv(e, r, s, i);
    let a;
    try {
        a = await t(n, Object.assign({}, o))
    } catch (l) {
        throw console.error(l),
        new fa(Yt(l),0)
    }
    if (a.ok || await Ku(a),
    r != null && r.noResolveJson)
        return a;
    try {
        return await a.json()
    } catch (l) {
        await Ku(l)
    }
}
function lt(t) {
    var e;
    let n = null;
    _v(t) && (n = Object.assign({}, t),
    t.expires_at || (n.expires_at = X0(t.expires_in)));
    const r = (e = t.user) !== null && e !== void 0 ? e : t;
    return {
        data: {
            session: n,
            user: r
        },
        error: null
    }
}
function Gu(t) {
    const e = lt(t);
    return !e.error && t.weak_password && typeof t.weak_password == "object" && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.message && typeof t.weak_password.message == "string" && t.weak_password.reasons.reduce( (n, r) => n && typeof r == "string", !0) && (e.data.weak_password = t.weak_password),
    e
}
function Ct(t) {
    var e;
    return {
        data: {
            user: (e = t.user) !== null && e !== void 0 ? e : t
        },
        error: null
    }
}
function vv(t) {
    return {
        data: t,
        error: null
    }
}
function yv(t) {
    const {action_link: e, email_otp: n, hashed_token: r, redirect_to: s, verification_type: i} = t
      , o = fv(t, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"])
      , a = {
        action_link: e,
        email_otp: n,
        hashed_token: r,
        redirect_to: s,
        verification_type: i
    }
      , l = Object.assign({}, o);
    return {
        data: {
            properties: a,
            user: l
        },
        error: null
    }
}
function wv(t) {
    return t
}
function _v(t) {
    return t.access_token && t.refresh_token && t.expires_in
}
const uo = ["global", "local", "others"];
var kv = function(t, e) {
    var n = {};
    for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, r = Object.getOwnPropertySymbols(t); s < r.length; s++)
            e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[s]) && (n[r[s]] = t[r[s]]);
    return n
};
class xv {
    constructor({url: e="", headers: n={}, fetch: r}) {
        this.url = e,
        this.headers = n,
        this.fetch = Ih(r),
        this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this)
        }
    }
    async signOut(e, n=uo[0]) {
        if (uo.indexOf(n) < 0)
            throw new Error(`@supabase/auth-js: Parameter scope must be one of ${uo.join(", ")}`);
        try {
            return await D(this.fetch, "POST", `${this.url}/logout?scope=${n}`, {
                headers: this.headers,
                jwt: e,
                noResolveJson: !0
            }),
            {
                data: null,
                error: null
            }
        } catch (r) {
            if (I(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async inviteUserByEmail(e, n={}) {
        try {
            return await D(this.fetch, "POST", `${this.url}/invite`, {
                body: {
                    email: e,
                    data: n.data
                },
                headers: this.headers,
                redirectTo: n.redirectTo,
                xform: Ct
            })
        } catch (r) {
            if (I(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async generateLink(e) {
        try {
            const {options: n} = e
              , r = kv(e, ["options"])
              , s = Object.assign(Object.assign({}, r), n);
            return "newEmail"in r && (s.new_email = r == null ? void 0 : r.newEmail,
            delete s.newEmail),
            await D(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: s,
                headers: this.headers,
                xform: yv,
                redirectTo: n == null ? void 0 : n.redirectTo
            })
        } catch (n) {
            if (I(n))
                return {
                    data: {
                        properties: null,
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async createUser(e) {
        try {
            return await D(this.fetch, "POST", `${this.url}/admin/users`, {
                body: e,
                headers: this.headers,
                xform: Ct
            })
        } catch (n) {
            if (I(n))
                return {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async listUsers(e) {
        var n, r, s, i, o, a, l;
        try {
            const u = {
                nextPage: null,
                lastPage: 0,
                total: 0
            }
              , c = await D(this.fetch, "GET", `${this.url}/admin/users`, {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                    page: (r = (n = e == null ? void 0 : e.page) === null || n === void 0 ? void 0 : n.toString()) !== null && r !== void 0 ? r : "",
                    per_page: (i = (s = e == null ? void 0 : e.perPage) === null || s === void 0 ? void 0 : s.toString()) !== null && i !== void 0 ? i : ""
                },
                xform: wv
            });
            if (c.error)
                throw c.error;
            const d = await c.json()
              , h = (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0
              , v = (l = (a = c.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
            return v.length > 0 && (v.forEach(y => {
                const w = parseInt(y.split(";")[0].split("=")[1].substring(0, 1))
                  , k = JSON.parse(y.split(";")[1].split("=")[1]);
                u[`${k}Page`] = w
            }
            ),
            u.total = parseInt(h)),
            {
                data: Object.assign(Object.assign({}, d), u),
                error: null
            }
        } catch (u) {
            if (I(u))
                return {
                    data: {
                        users: []
                    },
                    error: u
                };
            throw u
        }
    }
    async getUserById(e) {
        gn(e);
        try {
            return await D(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
                headers: this.headers,
                xform: Ct
            })
        } catch (n) {
            if (I(n))
                return {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async updateUserById(e, n) {
        gn(e);
        try {
            return await D(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
                body: n,
                headers: this.headers,
                xform: Ct
            })
        } catch (r) {
            if (I(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async deleteUser(e, n=!1) {
        gn(e);
        try {
            return await D(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
                headers: this.headers,
                body: {
                    should_soft_delete: n
                },
                xform: Ct
            })
        } catch (r) {
            if (I(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async _listFactors(e) {
        gn(e.userId);
        try {
            const {data: n, error: r} = await D(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
                headers: this.headers,
                xform: s => ({
                    data: {
                        factors: s
                    },
                    error: null
                })
            });
            return {
                data: n,
                error: r
            }
        } catch (n) {
            if (I(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async _deleteFactor(e) {
        gn(e.userId),
        gn(e.id);
        try {
            return {
                data: await D(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
                    headers: this.headers
                }),
                error: null
            }
        } catch (n) {
            if (I(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
}
function Ju(t={}) {
    return {
        getItem: e => t[e] || null,
        setItem: (e, n) => {
            t[e] = n
        }
        ,
        removeItem: e => {
            delete t[e]
        }
    }
}
function Sv() {
    if (typeof globalThis != "object")
        try {
            Object.defineProperty(Object.prototype, "__magic__", {
                get: function() {
                    return this
                },
                configurable: !0
            }),
            __magic__.globalThis = __magic__,
            delete Object.prototype.__magic__
        } catch {
            typeof self < "u" && (self.globalThis = self)
        }
}
const vn = {
    debug: !!(globalThis && Ah() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class $h extends Error {
    constructor(e) {
        super(e),
        this.isAcquireTimeout = !0
    }
}
class Ev extends $h {
}
async function bv(t, e, n) {
    vn.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", t, e);
    const r = new globalThis.AbortController;
    return e > 0 && setTimeout( () => {
        r.abort(),
        vn.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", t)
    }
    , e),
    await Promise.resolve().then( () => globalThis.navigator.locks.request(t, e === 0 ? {
        mode: "exclusive",
        ifAvailable: !0
    } : {
        mode: "exclusive",
        signal: r.signal
    }, async s => {
        if (s) {
            vn.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", t, s.name);
            try {
                return await n()
            } finally {
                vn.debug && console.log("@supabase/gotrue-js: navigatorLock: released", t, s.name)
            }
        } else {
            if (e === 0)
                throw vn.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", t),
                new Ev(`Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`);
            if (vn.debug)
                try {
                    const i = await globalThis.navigator.locks.query();
                    console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(i, null, "  "))
                } catch (i) {
                    console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", i)
                }
            return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),
            await n()
        }
    }
    ))
}
Sv();
const jv = {
    url: L0,
    storageKey: D0,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: M0,
    flowType: "implicit",
    debug: !1,
    hasCustomAuthorizationHeader: !1
};
async function Qu(t, e, n) {
    return await n()
}
const yn = {};
class Vr {
    constructor(e) {
        var n, r;
        this.userStorage = null,
        this.memoryStorage = null,
        this.stateChangeEmitters = new Map,
        this.autoRefreshTicker = null,
        this.visibilityChangedCallback = null,
        this.refreshingDeferred = null,
        this.initializePromise = null,
        this.detectSessionInUrl = !0,
        this.hasCustomAuthorizationHeader = !1,
        this.suppressGetSessionWarning = !1,
        this.lockAcquired = !1,
        this.pendingInLock = [],
        this.broadcastChannel = null,
        this.logger = console.log,
        this.instanceID = Vr.nextInstanceID,
        Vr.nextInstanceID += 1,
        this.instanceID > 0 && Ke() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
        const s = Object.assign(Object.assign({}, jv), e);
        if (this.logDebugMessages = !!s.debug,
        typeof s.debug == "function" && (this.logger = s.debug),
        this.persistSession = s.persistSession,
        this.storageKey = s.storageKey,
        this.autoRefreshToken = s.autoRefreshToken,
        this.admin = new xv({
            url: s.url,
            headers: s.headers,
            fetch: s.fetch
        }),
        this.url = s.url,
        this.headers = s.headers,
        this.fetch = Ih(s.fetch),
        this.lock = s.lock || Qu,
        this.detectSessionInUrl = s.detectSessionInUrl,
        this.flowType = s.flowType,
        this.hasCustomAuthorizationHeader = s.hasCustomAuthorizationHeader,
        s.lock ? this.lock = s.lock : Ke() && (!((n = globalThis == null ? void 0 : globalThis.navigator) === null || n === void 0) && n.locks) ? this.lock = bv : this.lock = Qu,
        this.jwks || (this.jwks = {
            keys: []
        },
        this.jwks_cached_at = Number.MIN_SAFE_INTEGER),
        this.mfa = {
            verify: this._verify.bind(this),
            enroll: this._enroll.bind(this),
            unenroll: this._unenroll.bind(this),
            challenge: this._challenge.bind(this),
            listFactors: this._listFactors.bind(this),
            challengeAndVerify: this._challengeAndVerify.bind(this),
            getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
        },
        this.persistSession ? (s.storage ? this.storage = s.storage : Ah() ? this.storage = globalThis.localStorage : (this.memoryStorage = {},
        this.storage = Ju(this.memoryStorage)),
        s.userStorage && (this.userStorage = s.userStorage)) : (this.memoryStorage = {},
        this.storage = Ju(this.memoryStorage)),
        Ke() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
            try {
                this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
            } catch (i) {
                console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", i)
            }
            (r = this.broadcastChannel) === null || r === void 0 || r.addEventListener("message", async i => {
                this._debug("received broadcast notification from other tab or client", i),
                await this._notifyAllSubscribers(i.data.event, i.data.session, !1)
            }
            )
        }
        this.initialize()
    }
    get jwks() {
        var e, n;
        return (n = (e = yn[this.storageKey]) === null || e === void 0 ? void 0 : e.jwks) !== null && n !== void 0 ? n : {
            keys: []
        }
    }
    set jwks(e) {
        yn[this.storageKey] = Object.assign(Object.assign({}, yn[this.storageKey]), {
            jwks: e
        })
    }
    get jwks_cached_at() {
        var e, n;
        return (n = (e = yn[this.storageKey]) === null || e === void 0 ? void 0 : e.cachedAt) !== null && n !== void 0 ? n : Number.MIN_SAFE_INTEGER
    }
    set jwks_cached_at(e) {
        yn[this.storageKey] = Object.assign(Object.assign({}, yn[this.storageKey]), {
            cachedAt: e
        })
    }
    _debug(...e) {
        return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${Ph}) ${new Date().toISOString()}`, ...e),
        this
    }
    async initialize() {
        return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(),
        await this.initializePromise)
    }
    async _initialize() {
        var e;
        try {
            const n = ev(window.location.href);
            let r = "none";
            if (this._isImplicitGrantCallback(n) ? r = "implicit" : await this._isPKCECallback(n) && (r = "pkce"),
            Ke() && this.detectSessionInUrl && r !== "none") {
                const {data: s, error: i} = await this._getSessionFromURL(n, r);
                if (i) {
                    if (this._debug("#_initialize()", "error detecting session from URL", i),
                    V0(i)) {
                        const l = (e = i.details) === null || e === void 0 ? void 0 : e.code;
                        if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
                            return {
                                error: i
                            }
                    }
                    return await this._removeSession(),
                    {
                        error: i
                    }
                }
                const {session: o, redirectType: a} = s;
                return this._debug("#_initialize()", "detected session in URL", o, "redirect type", a),
                await this._saveSession(o),
                setTimeout(async () => {
                    a === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", o) : await this._notifyAllSubscribers("SIGNED_IN", o)
                }
                , 0),
                {
                    error: null
                }
            }
            return await this._recoverAndRefresh(),
            {
                error: null
            }
        } catch (n) {
            return I(n) ? {
                error: n
            } : {
                error: new Oh("Unexpected error during initialization",n)
            }
        } finally {
            await this._handleVisibilityChange(),
            this._debug("#_initialize()", "end")
        }
    }
    async signInAnonymously(e) {
        var n, r, s;
        try {
            const i = await D(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                body: {
                    data: (r = (n = e == null ? void 0 : e.options) === null || n === void 0 ? void 0 : n.data) !== null && r !== void 0 ? r : {},
                    gotrue_meta_security: {
                        captcha_token: (s = e == null ? void 0 : e.options) === null || s === void 0 ? void 0 : s.captchaToken
                    }
                },
                xform: lt
            })
              , {data: o, error: a} = i;
            if (a || !o)
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                };
            const l = o.session
              , u = o.user;
            return o.session && (await this._saveSession(o.session),
            await this._notifyAllSubscribers("SIGNED_IN", l)),
            {
                data: {
                    user: u,
                    session: l
                },
                error: null
            }
        } catch (i) {
            if (I(i))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                };
            throw i
        }
    }
    async signUp(e) {
        var n, r, s;
        try {
            let i;
            if ("email"in e) {
                const {email: c, password: d, options: h} = e;
                let v = null
                  , y = null;
                this.flowType === "pkce" && ([v,y] = await mn(this.storage, this.storageKey)),
                i = await D(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    redirectTo: h == null ? void 0 : h.emailRedirectTo,
                    body: {
                        email: c,
                        password: d,
                        data: (n = h == null ? void 0 : h.data) !== null && n !== void 0 ? n : {},
                        gotrue_meta_security: {
                            captcha_token: h == null ? void 0 : h.captchaToken
                        },
                        code_challenge: v,
                        code_challenge_method: y
                    },
                    xform: lt
                })
            } else if ("phone"in e) {
                const {phone: c, password: d, options: h} = e;
                i = await D(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        phone: c,
                        password: d,
                        data: (r = h == null ? void 0 : h.data) !== null && r !== void 0 ? r : {},
                        channel: (s = h == null ? void 0 : h.channel) !== null && s !== void 0 ? s : "sms",
                        gotrue_meta_security: {
                            captcha_token: h == null ? void 0 : h.captchaToken
                        }
                    },
                    xform: lt
                })
            } else
                throw new _s("You must provide either an email or phone number and a password");
            const {data: o, error: a} = i;
            if (a || !o)
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                };
            const l = o.session
              , u = o.user;
            return o.session && (await this._saveSession(o.session),
            await this._notifyAllSubscribers("SIGNED_IN", l)),
            {
                data: {
                    user: u,
                    session: l
                },
                error: null
            }
        } catch (i) {
            if (I(i))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                };
            throw i
        }
    }
    async signInWithPassword(e) {
        try {
            let n;
            if ("email"in e) {
                const {email: i, password: o, options: a} = e;
                n = await D(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        email: i,
                        password: o,
                        gotrue_meta_security: {
                            captcha_token: a == null ? void 0 : a.captchaToken
                        }
                    },
                    xform: Gu
                })
            } else if ("phone"in e) {
                const {phone: i, password: o, options: a} = e;
                n = await D(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        phone: i,
                        password: o,
                        gotrue_meta_security: {
                            captcha_token: a == null ? void 0 : a.captchaToken
                        }
                    },
                    xform: Gu
                })
            } else
                throw new _s("You must provide either an email or phone number and a password");
            const {data: r, error: s} = n;
            return s ? {
                data: {
                    user: null,
                    session: null
                },
                error: s
            } : !r || !r.session || !r.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new ws
            } : (r.session && (await this._saveSession(r.session),
            await this._notifyAllSubscribers("SIGNED_IN", r.session)),
            {
                data: Object.assign({
                    user: r.user,
                    session: r.session
                }, r.weak_password ? {
                    weakPassword: r.weak_password
                } : null),
                error: s
            })
        } catch (n) {
            if (I(n))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                };
            throw n
        }
    }
    async signInWithOAuth(e) {
        var n, r, s, i;
        return await this._handleProviderSignIn(e.provider, {
            redirectTo: (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo,
            scopes: (r = e.options) === null || r === void 0 ? void 0 : r.scopes,
            queryParams: (s = e.options) === null || s === void 0 ? void 0 : s.queryParams,
            skipBrowserRedirect: (i = e.options) === null || i === void 0 ? void 0 : i.skipBrowserRedirect
        })
    }
    async exchangeCodeForSession(e) {
        return await this.initializePromise,
        this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
    }
    async signInWithWeb3(e) {
        const {chain: n} = e;
        if (n === "solana")
            return await this.signInWithSolana(e);
        throw new Error(`@supabase/auth-js: Unsupported chain "${n}"`)
    }
    async signInWithSolana(e) {
        var n, r, s, i, o, a, l, u, c, d, h, v;
        let y, w;
        if ("message"in e)
            y = e.message,
            w = e.signature;
        else {
            const {chain: k, wallet: m, statement: f, options: p} = e;
            let _;
            if (Ke())
                if (typeof m == "object")
                    _ = m;
                else {
                    const S = window;
                    if ("solana"in S && typeof S.solana == "object" && ("signIn"in S.solana && typeof S.solana.signIn == "function" || "signMessage"in S.solana && typeof S.solana.signMessage == "function"))
                        _ = S.solana;
                    else
                        throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")
                }
            else {
                if (typeof m != "object" || !(p != null && p.url))
                    throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
                _ = m
            }
            const E = new URL((n = p == null ? void 0 : p.url) !== null && n !== void 0 ? n : window.location.href);
            if ("signIn"in _ && _.signIn) {
                const S = await _.signIn(Object.assign(Object.assign(Object.assign({
                    issuedAt: new Date().toISOString()
                }, p == null ? void 0 : p.signInWithSolana), {
                    version: "1",
                    domain: E.host,
                    uri: E.href
                }), f ? {
                    statement: f
                } : null));
                let b;
                if (Array.isArray(S) && S[0] && typeof S[0] == "object")
                    b = S[0];
                else if (S && typeof S == "object" && "signedMessage"in S && "signature"in S)
                    b = S;
                else
                    throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
                if ("signedMessage"in b && "signature"in b && (typeof b.signedMessage == "string" || b.signedMessage instanceof Uint8Array) && b.signature instanceof Uint8Array)
                    y = typeof b.signedMessage == "string" ? b.signedMessage : new TextDecoder().decode(b.signedMessage),
                    w = b.signature;
                else
                    throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")
            } else {
                if (!("signMessage"in _) || typeof _.signMessage != "function" || !("publicKey"in _) || typeof _ != "object" || !_.publicKey || !("toBase58"in _.publicKey) || typeof _.publicKey.toBase58 != "function")
                    throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
                y = [`${E.host} wants you to sign in with your Solana account:`, _.publicKey.toBase58(), ...f ? ["", f, ""] : [""], "Version: 1", `URI: ${E.href}`, `Issued At: ${(s = (r = p == null ? void 0 : p.signInWithSolana) === null || r === void 0 ? void 0 : r.issuedAt) !== null && s !== void 0 ? s : new Date().toISOString()}`, ...!((i = p == null ? void 0 : p.signInWithSolana) === null || i === void 0) && i.notBefore ? [`Not Before: ${p.signInWithSolana.notBefore}`] : [], ...!((o = p == null ? void 0 : p.signInWithSolana) === null || o === void 0) && o.expirationTime ? [`Expiration Time: ${p.signInWithSolana.expirationTime}`] : [], ...!((a = p == null ? void 0 : p.signInWithSolana) === null || a === void 0) && a.chainId ? [`Chain ID: ${p.signInWithSolana.chainId}`] : [], ...!((l = p == null ? void 0 : p.signInWithSolana) === null || l === void 0) && l.nonce ? [`Nonce: ${p.signInWithSolana.nonce}`] : [], ...!((u = p == null ? void 0 : p.signInWithSolana) === null || u === void 0) && u.requestId ? [`Request ID: ${p.signInWithSolana.requestId}`] : [], ...!((d = (c = p == null ? void 0 : p.signInWithSolana) === null || c === void 0 ? void 0 : c.resources) === null || d === void 0) && d.length ? ["Resources", ...p.signInWithSolana.resources.map(b => `- ${b}`)] : []].join(`
`);
                const S = await _.signMessage(new TextEncoder().encode(y), "utf8");
                if (!S || !(S instanceof Uint8Array))
                    throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
                w = S
            }
        }
        try {
            const {data: k, error: m} = await D(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
                headers: this.headers,
                body: Object.assign({
                    chain: "solana",
                    message: y,
                    signature: Y0(w)
                }, !((h = e.options) === null || h === void 0) && h.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: (v = e.options) === null || v === void 0 ? void 0 : v.captchaToken
                    }
                } : null),
                xform: lt
            });
            if (m)
                throw m;
            return !k || !k.session || !k.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new ws
            } : (k.session && (await this._saveSession(k.session),
            await this._notifyAllSubscribers("SIGNED_IN", k.session)),
            {
                data: Object.assign({}, k),
                error: m
            })
        } catch (k) {
            if (I(k))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: k
                };
            throw k
        }
    }
    async _exchangeCodeForSession(e) {
        const n = await Gt(this.storage, `${this.storageKey}-code-verifier`)
          , [r,s] = (n ?? "").split("/");
        try {
            const {data: i, error: o} = await D(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                headers: this.headers,
                body: {
                    auth_code: e,
                    code_verifier: r
                },
                xform: lt
            });
            if (await kt(this.storage, `${this.storageKey}-code-verifier`),
            o)
                throw o;
            return !i || !i.session || !i.user ? {
                data: {
                    user: null,
                    session: null,
                    redirectType: null
                },
                error: new ws
            } : (i.session && (await this._saveSession(i.session),
            await this._notifyAllSubscribers("SIGNED_IN", i.session)),
            {
                data: Object.assign(Object.assign({}, i), {
                    redirectType: s ?? null
                }),
                error: o
            })
        } catch (i) {
            if (I(i))
                return {
                    data: {
                        user: null,
                        session: null,
                        redirectType: null
                    },
                    error: i
                };
            throw i
        }
    }
    async signInWithIdToken(e) {
        try {
            const {options: n, provider: r, token: s, access_token: i, nonce: o} = e
              , a = await D(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                headers: this.headers,
                body: {
                    provider: r,
                    id_token: s,
                    access_token: i,
                    nonce: o,
                    gotrue_meta_security: {
                        captcha_token: n == null ? void 0 : n.captchaToken
                    }
                },
                xform: lt
            })
              , {data: l, error: u} = a;
            return u ? {
                data: {
                    user: null,
                    session: null
                },
                error: u
            } : !l || !l.session || !l.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new ws
            } : (l.session && (await this._saveSession(l.session),
            await this._notifyAllSubscribers("SIGNED_IN", l.session)),
            {
                data: l,
                error: u
            })
        } catch (n) {
            if (I(n))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                };
            throw n
        }
    }
    async signInWithOtp(e) {
        var n, r, s, i, o;
        try {
            if ("email"in e) {
                const {email: a, options: l} = e;
                let u = null
                  , c = null;
                this.flowType === "pkce" && ([u,c] = await mn(this.storage, this.storageKey));
                const {error: d} = await D(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        email: a,
                        data: (n = l == null ? void 0 : l.data) !== null && n !== void 0 ? n : {},
                        create_user: (r = l == null ? void 0 : l.shouldCreateUser) !== null && r !== void 0 ? r : !0,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        },
                        code_challenge: u,
                        code_challenge_method: c
                    },
                    redirectTo: l == null ? void 0 : l.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: d
                }
            }
            if ("phone"in e) {
                const {phone: a, options: l} = e
                  , {data: u, error: c} = await D(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        phone: a,
                        data: (s = l == null ? void 0 : l.data) !== null && s !== void 0 ? s : {},
                        create_user: (i = l == null ? void 0 : l.shouldCreateUser) !== null && i !== void 0 ? i : !0,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        },
                        channel: (o = l == null ? void 0 : l.channel) !== null && o !== void 0 ? o : "sms"
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: u == null ? void 0 : u.message_id
                    },
                    error: c
                }
            }
            throw new _s("You must provide either an email or phone number.")
        } catch (a) {
            if (I(a))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                };
            throw a
        }
    }
    async verifyOtp(e) {
        var n, r;
        try {
            let s, i;
            "options"in e && (s = (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo,
            i = (r = e.options) === null || r === void 0 ? void 0 : r.captchaToken);
            const {data: o, error: a} = await D(this.fetch, "POST", `${this.url}/verify`, {
                headers: this.headers,
                body: Object.assign(Object.assign({}, e), {
                    gotrue_meta_security: {
                        captcha_token: i
                    }
                }),
                redirectTo: s,
                xform: lt
            });
            if (a)
                throw a;
            if (!o)
                throw new Error("An error occurred on token verification.");
            const l = o.session
              , u = o.user;
            return l != null && l.access_token && (await this._saveSession(l),
            await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)),
            {
                data: {
                    user: u,
                    session: l
                },
                error: null
            }
        } catch (s) {
            if (I(s))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                };
            throw s
        }
    }
    async signInWithSSO(e) {
        var n, r, s;
        try {
            let i = null
              , o = null;
            return this.flowType === "pkce" && ([i,o] = await mn(this.storage, this.storageKey)),
            await D(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId"in e ? {
                    provider_id: e.providerId
                } : null), "domain"in e ? {
                    domain: e.domain
                } : null), {
                    redirect_to: (r = (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo) !== null && r !== void 0 ? r : void 0
                }), !((s = e == null ? void 0 : e.options) === null || s === void 0) && s.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: e.options.captchaToken
                    }
                } : null), {
                    skip_http_redirect: !0,
                    code_challenge: i,
                    code_challenge_method: o
                }),
                headers: this.headers,
                xform: vv
            })
        } catch (i) {
            if (I(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async reauthenticate() {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._reauthenticate())
    }
    async _reauthenticate() {
        try {
            return await this._useSession(async e => {
                const {data: {session: n}, error: r} = e;
                if (r)
                    throw r;
                if (!n)
                    throw new xt;
                const {error: s} = await D(this.fetch, "GET", `${this.url}/reauthenticate`, {
                    headers: this.headers,
                    jwt: n.access_token
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                }
            }
            )
        } catch (e) {
            if (I(e))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                };
            throw e
        }
    }
    async resend(e) {
        try {
            const n = `${this.url}/resend`;
            if ("email"in e) {
                const {email: r, type: s, options: i} = e
                  , {error: o} = await D(this.fetch, "POST", n, {
                    headers: this.headers,
                    body: {
                        email: r,
                        type: s,
                        gotrue_meta_security: {
                            captcha_token: i == null ? void 0 : i.captchaToken
                        }
                    },
                    redirectTo: i == null ? void 0 : i.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: o
                }
            } else if ("phone"in e) {
                const {phone: r, type: s, options: i} = e
                  , {data: o, error: a} = await D(this.fetch, "POST", n, {
                    headers: this.headers,
                    body: {
                        phone: r,
                        type: s,
                        gotrue_meta_security: {
                            captcha_token: i == null ? void 0 : i.captchaToken
                        }
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: o == null ? void 0 : o.message_id
                    },
                    error: a
                }
            }
            throw new _s("You must provide either an email or phone number and a type")
        } catch (n) {
            if (I(n))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                };
            throw n
        }
    }
    async getSession() {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => this._useSession(async n => n))
    }
    async _acquireLock(e, n) {
        this._debug("#_acquireLock", "begin", e);
        try {
            if (this.lockAcquired) {
                const r = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve()
                  , s = (async () => (await r,
                await n()))();
                return this.pendingInLock.push((async () => {
                    try {
                        await s
                    } catch {}
                }
                )()),
                s
            }
            return await this.lock(`lock:${this.storageKey}`, e, async () => {
                this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                try {
                    this.lockAcquired = !0;
                    const r = n();
                    for (this.pendingInLock.push((async () => {
                        try {
                            await r
                        } catch {}
                    }
                    )()),
                    await r; this.pendingInLock.length; ) {
                        const s = [...this.pendingInLock];
                        await Promise.all(s),
                        this.pendingInLock.splice(0, s.length)
                    }
                    return await r
                } finally {
                    this._debug("#_acquireLock", "lock released for storage key", this.storageKey),
                    this.lockAcquired = !1
                }
            }
            )
        } finally {
            this._debug("#_acquireLock", "end")
        }
    }
    async _useSession(e) {
        this._debug("#_useSession", "begin");
        try {
            const n = await this.__loadSession();
            return await e(n)
        } finally {
            this._debug("#_useSession", "end")
        }
    }
    async __loadSession() {
        this._debug("#__loadSession()", "begin"),
        this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
        try {
            let e = null;
            const n = await Gt(this.storage, this.storageKey);
            if (this._debug("#getSession()", "session from storage", n),
            n !== null && (this._isValidSession(n) ? e = n : (this._debug("#getSession()", "session from storage is not valid"),
            await this._removeSession())),
            !e)
                return {
                    data: {
                        session: null
                    },
                    error: null
                };
            const r = e.expires_at ? e.expires_at * 1e3 - Date.now() < io : !1;
            if (this._debug("#__loadSession()", `session has${r ? "" : " not"} expired`, "expires_at", e.expires_at),
            !r) {
                if (this.userStorage) {
                    const o = await Gt(this.userStorage, this.storageKey + "-user");
                    o != null && o.user ? e.user = o.user : e.user = lo()
                }
                if (this.storage.isServer && e.user) {
                    let o = this.suppressGetSessionWarning;
                    e = new Proxy(e,{
                        get: (l, u, c) => (!o && u === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),
                        o = !0,
                        this.suppressGetSessionWarning = !0),
                        Reflect.get(l, u, c))
                    })
                }
                return {
                    data: {
                        session: e
                    },
                    error: null
                }
            }
            const {session: s, error: i} = await this._callRefreshToken(e.refresh_token);
            return i ? {
                data: {
                    session: null
                },
                error: i
            } : {
                data: {
                    session: s
                },
                error: null
            }
        } finally {
            this._debug("#__loadSession()", "end")
        }
    }
    async getUser(e) {
        return e ? await this._getUser(e) : (await this.initializePromise,
        await this._acquireLock(-1, async () => await this._getUser()))
    }
    async _getUser(e) {
        try {
            return e ? await D(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: e,
                xform: Ct
            }) : await this._useSession(async n => {
                var r, s, i;
                const {data: o, error: a} = n;
                if (a)
                    throw a;
                return !(!((r = o.session) === null || r === void 0) && r.access_token) && !this.hasCustomAuthorizationHeader ? {
                    data: {
                        user: null
                    },
                    error: new xt
                } : await D(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt: (i = (s = o.session) === null || s === void 0 ? void 0 : s.access_token) !== null && i !== void 0 ? i : void 0,
                    xform: Ct
                })
            }
            )
        } catch (n) {
            if (I(n))
                return W0(n) && (await this._removeSession(),
                await kt(this.storage, `${this.storageKey}-code-verifier`)),
                {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async updateUser(e, n={}) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._updateUser(e, n))
    }
    async _updateUser(e, n={}) {
        try {
            return await this._useSession(async r => {
                const {data: s, error: i} = r;
                if (i)
                    throw i;
                if (!s.session)
                    throw new xt;
                const o = s.session;
                let a = null
                  , l = null;
                this.flowType === "pkce" && e.email != null && ([a,l] = await mn(this.storage, this.storageKey));
                const {data: u, error: c} = await D(this.fetch, "PUT", `${this.url}/user`, {
                    headers: this.headers,
                    redirectTo: n == null ? void 0 : n.emailRedirectTo,
                    body: Object.assign(Object.assign({}, e), {
                        code_challenge: a,
                        code_challenge_method: l
                    }),
                    jwt: o.access_token,
                    xform: Ct
                });
                if (c)
                    throw c;
                return o.user = u.user,
                await this._saveSession(o),
                await this._notifyAllSubscribers("USER_UPDATED", o),
                {
                    data: {
                        user: o.user
                    },
                    error: null
                }
            }
            )
        } catch (r) {
            if (I(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async setSession(e) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._setSession(e))
    }
    async _setSession(e) {
        try {
            if (!e.access_token || !e.refresh_token)
                throw new xt;
            const n = Date.now() / 1e3;
            let r = n
              , s = !0
              , i = null;
            const {payload: o} = ao(e.access_token);
            if (o.exp && (r = o.exp,
            s = r <= n),
            s) {
                const {session: a, error: l} = await this._callRefreshToken(e.refresh_token);
                if (l)
                    return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: l
                    };
                if (!a)
                    return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: null
                    };
                i = a
            } else {
                const {data: a, error: l} = await this._getUser(e.access_token);
                if (l)
                    throw l;
                i = {
                    access_token: e.access_token,
                    refresh_token: e.refresh_token,
                    user: a.user,
                    token_type: "bearer",
                    expires_in: r - n,
                    expires_at: r
                },
                await this._saveSession(i),
                await this._notifyAllSubscribers("SIGNED_IN", i)
            }
            return {
                data: {
                    user: i.user,
                    session: i
                },
                error: null
            }
        } catch (n) {
            if (I(n))
                return {
                    data: {
                        session: null,
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async refreshSession(e) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._refreshSession(e))
    }
    async _refreshSession(e) {
        try {
            return await this._useSession(async n => {
                var r;
                if (!e) {
                    const {data: o, error: a} = n;
                    if (a)
                        throw a;
                    e = (r = o.session) !== null && r !== void 0 ? r : void 0
                }
                if (!(e != null && e.refresh_token))
                    throw new xt;
                const {session: s, error: i} = await this._callRefreshToken(e.refresh_token);
                return i ? {
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                } : s ? {
                    data: {
                        user: s.user,
                        session: s
                    },
                    error: null
                } : {
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                }
            }
            )
        } catch (n) {
            if (I(n))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                };
            throw n
        }
    }
    async _getSessionFromURL(e, n) {
        try {
            if (!Ke())
                throw new ks("No browser detected.");
            if (e.error || e.error_description || e.error_code)
                throw new ks(e.error_description || "Error in URL with unspecified error_description",{
                    error: e.error || "unspecified_error",
                    code: e.error_code || "unspecified_code"
                });
            switch (n) {
            case "implicit":
                if (this.flowType === "pkce")
                    throw new Fu("Not a valid PKCE flow url.");
                break;
            case "pkce":
                if (this.flowType === "implicit")
                    throw new ks("Not a valid implicit grant flow url.");
                break;
            default:
            }
            if (n === "pkce") {
                if (this._debug("#_initialize()", "begin", "is PKCE flow", !0),
                !e.code)
                    throw new Fu("No code detected.");
                const {data: f, error: p} = await this._exchangeCodeForSession(e.code);
                if (p)
                    throw p;
                const _ = new URL(window.location.href);
                return _.searchParams.delete("code"),
                window.history.replaceState(window.history.state, "", _.toString()),
                {
                    data: {
                        session: f.session,
                        redirectType: null
                    },
                    error: null
                }
            }
            const {provider_token: r, provider_refresh_token: s, access_token: i, refresh_token: o, expires_in: a, expires_at: l, token_type: u} = e;
            if (!i || !a || !o || !u)
                throw new ks("No session defined in URL");
            const c = Math.round(Date.now() / 1e3)
              , d = parseInt(a);
            let h = c + d;
            l && (h = parseInt(l));
            const v = h - c;
            v * 1e3 <= wn && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${v}s, should have been closer to ${d}s`);
            const y = h - d;
            c - y >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", y, h, c) : c - y < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", y, h, c);
            const {data: w, error: k} = await this._getUser(i);
            if (k)
                throw k;
            const m = {
                provider_token: r,
                provider_refresh_token: s,
                access_token: i,
                expires_in: d,
                expires_at: h,
                refresh_token: o,
                token_type: u,
                user: w.user
            };
            return window.location.hash = "",
            this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
            {
                data: {
                    session: m,
                    redirectType: e.type
                },
                error: null
            }
        } catch (r) {
            if (I(r))
                return {
                    data: {
                        session: null,
                        redirectType: null
                    },
                    error: r
                };
            throw r
        }
    }
    _isImplicitGrantCallback(e) {
        return !!(e.access_token || e.error_description)
    }
    async _isPKCECallback(e) {
        const n = await Gt(this.storage, `${this.storageKey}-code-verifier`);
        return !!(e.code && n)
    }
    async signOut(e={
        scope: "global"
    }) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._signOut(e))
    }
    async _signOut({scope: e}={
        scope: "global"
    }) {
        return await this._useSession(async n => {
            var r;
            const {data: s, error: i} = n;
            if (i)
                return {
                    error: i
                };
            const o = (r = s.session) === null || r === void 0 ? void 0 : r.access_token;
            if (o) {
                const {error: a} = await this.admin.signOut(o, e);
                if (a && !(B0(a) && (a.status === 404 || a.status === 401 || a.status === 403)))
                    return {
                        error: a
                    }
            }
            return e !== "others" && (await this._removeSession(),
            await kt(this.storage, `${this.storageKey}-code-verifier`)),
            {
                error: null
            }
        }
        )
    }
    onAuthStateChange(e) {
        const n = Z0()
          , r = {
            id: n,
            callback: e,
            unsubscribe: () => {
                this._debug("#unsubscribe()", "state change callback with id removed", n),
                this.stateChangeEmitters.delete(n)
            }
        };
        return this._debug("#onAuthStateChange()", "registered callback with id", n),
        this.stateChangeEmitters.set(n, r),
        (async () => (await this.initializePromise,
        await this._acquireLock(-1, async () => {
            this._emitInitialSession(n)
        }
        )))(),
        {
            data: {
                subscription: r
            }
        }
    }
    async _emitInitialSession(e) {
        return await this._useSession(async n => {
            var r, s;
            try {
                const {data: {session: i}, error: o} = n;
                if (o)
                    throw o;
                await ((r = this.stateChangeEmitters.get(e)) === null || r === void 0 ? void 0 : r.callback("INITIAL_SESSION", i)),
                this._debug("INITIAL_SESSION", "callback id", e, "session", i)
            } catch (i) {
                await ((s = this.stateChangeEmitters.get(e)) === null || s === void 0 ? void 0 : s.callback("INITIAL_SESSION", null)),
                this._debug("INITIAL_SESSION", "callback id", e, "error", i),
                console.error(i)
            }
        }
        )
    }
    async resetPasswordForEmail(e, n={}) {
        let r = null
          , s = null;
        this.flowType === "pkce" && ([r,s] = await mn(this.storage, this.storageKey, !0));
        try {
            return await D(this.fetch, "POST", `${this.url}/recover`, {
                body: {
                    email: e,
                    code_challenge: r,
                    code_challenge_method: s,
                    gotrue_meta_security: {
                        captcha_token: n.captchaToken
                    }
                },
                headers: this.headers,
                redirectTo: n.redirectTo
            })
        } catch (i) {
            if (I(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async getUserIdentities() {
        var e;
        try {
            const {data: n, error: r} = await this.getUser();
            if (r)
                throw r;
            return {
                data: {
                    identities: (e = n.user.identities) !== null && e !== void 0 ? e : []
                },
                error: null
            }
        } catch (n) {
            if (I(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async linkIdentity(e) {
        var n;
        try {
            const {data: r, error: s} = await this._useSession(async i => {
                var o, a, l, u, c;
                const {data: d, error: h} = i;
                if (h)
                    throw h;
                const v = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
                    redirectTo: (o = e.options) === null || o === void 0 ? void 0 : o.redirectTo,
                    scopes: (a = e.options) === null || a === void 0 ? void 0 : a.scopes,
                    queryParams: (l = e.options) === null || l === void 0 ? void 0 : l.queryParams,
                    skipBrowserRedirect: !0
                });
                return await D(this.fetch, "GET", v, {
                    headers: this.headers,
                    jwt: (c = (u = d.session) === null || u === void 0 ? void 0 : u.access_token) !== null && c !== void 0 ? c : void 0
                })
            }
            );
            if (s)
                throw s;
            return Ke() && !(!((n = e.options) === null || n === void 0) && n.skipBrowserRedirect) && window.location.assign(r == null ? void 0 : r.url),
            {
                data: {
                    provider: e.provider,
                    url: r == null ? void 0 : r.url
                },
                error: null
            }
        } catch (r) {
            if (I(r))
                return {
                    data: {
                        provider: e.provider,
                        url: null
                    },
                    error: r
                };
            throw r
        }
    }
    async unlinkIdentity(e) {
        try {
            return await this._useSession(async n => {
                var r, s;
                const {data: i, error: o} = n;
                if (o)
                    throw o;
                return await D(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
                    headers: this.headers,
                    jwt: (s = (r = i.session) === null || r === void 0 ? void 0 : r.access_token) !== null && s !== void 0 ? s : void 0
                })
            }
            )
        } catch (n) {
            if (I(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async _refreshAccessToken(e) {
        const n = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
        this._debug(n, "begin");
        try {
            const r = Date.now();
            return await rv(async s => (s > 0 && await nv(200 * Math.pow(2, s - 1)),
            this._debug(n, "refreshing attempt", s),
            await D(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                body: {
                    refresh_token: e
                },
                headers: this.headers,
                xform: lt
            })), (s, i) => {
                const o = 200 * Math.pow(2, s);
                return i && oo(i) && Date.now() + o - r < wn
            }
            )
        } catch (r) {
            if (this._debug(n, "error", r),
            I(r))
                return {
                    data: {
                        session: null,
                        user: null
                    },
                    error: r
                };
            throw r
        } finally {
            this._debug(n, "end")
        }
    }
    _isValidSession(e) {
        return typeof e == "object" && e !== null && "access_token"in e && "refresh_token"in e && "expires_at"in e
    }
    async _handleProviderSignIn(e, n) {
        const r = await this._getUrlForProvider(`${this.url}/authorize`, e, {
            redirectTo: n.redirectTo,
            scopes: n.scopes,
            queryParams: n.queryParams
        });
        return this._debug("#_handleProviderSignIn()", "provider", e, "options", n, "url", r),
        Ke() && !n.skipBrowserRedirect && window.location.assign(r),
        {
            data: {
                provider: e,
                url: r
            },
            error: null
        }
    }
    async _recoverAndRefresh() {
        var e, n;
        const r = "#_recoverAndRefresh()";
        this._debug(r, "begin");
        try {
            const s = await Gt(this.storage, this.storageKey);
            if (s && this.userStorage) {
                let o = await Gt(this.userStorage, this.storageKey + "-user");
                !this.storage.isServer && Object.is(this.storage, this.userStorage) && !o && (o = {
                    user: s.user
                },
                await _n(this.userStorage, this.storageKey + "-user", o)),
                s.user = (e = o == null ? void 0 : o.user) !== null && e !== void 0 ? e : lo()
            } else if (s && !s.user && !s.user) {
                const o = await Gt(this.storage, this.storageKey + "-user");
                o && (o != null && o.user) ? (s.user = o.user,
                await kt(this.storage, this.storageKey + "-user"),
                await _n(this.storage, this.storageKey, s)) : s.user = lo()
            }
            if (this._debug(r, "session from storage", s),
            !this._isValidSession(s)) {
                this._debug(r, "session is not valid"),
                s !== null && await this._removeSession();
                return
            }
            const i = ((n = s.expires_at) !== null && n !== void 0 ? n : 1 / 0) * 1e3 - Date.now() < io;
            if (this._debug(r, `session has${i ? "" : " not"} expired with margin of ${io}s`),
            i) {
                if (this.autoRefreshToken && s.refresh_token) {
                    const {error: o} = await this._callRefreshToken(s.refresh_token);
                    o && (console.error(o),
                    oo(o) || (this._debug(r, "refresh failed with a non-retryable error, removing the session", o),
                    await this._removeSession()))
                }
            } else if (s.user && s.user.__isUserNotAvailableProxy === !0)
                try {
                    const {data: o, error: a} = await this._getUser(s.access_token);
                    !a && (o != null && o.user) ? (s.user = o.user,
                    await this._saveSession(s),
                    await this._notifyAllSubscribers("SIGNED_IN", s)) : this._debug(r, "could not get user data, skipping SIGNED_IN notification")
                } catch (o) {
                    console.error("Error getting user data:", o),
                    this._debug(r, "error getting user data, skipping SIGNED_IN notification", o)
                }
            else
                await this._notifyAllSubscribers("SIGNED_IN", s)
        } catch (s) {
            this._debug(r, "error", s),
            console.error(s);
            return
        } finally {
            this._debug(r, "end")
        }
    }
    async _callRefreshToken(e) {
        var n, r;
        if (!e)
            throw new xt;
        if (this.refreshingDeferred)
            return this.refreshingDeferred.promise;
        const s = `#_callRefreshToken(${e.substring(0, 5)}...)`;
        this._debug(s, "begin");
        try {
            this.refreshingDeferred = new Ti;
            const {data: i, error: o} = await this._refreshAccessToken(e);
            if (o)
                throw o;
            if (!i.session)
                throw new xt;
            await this._saveSession(i.session),
            await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
            const a = {
                session: i.session,
                error: null
            };
            return this.refreshingDeferred.resolve(a),
            a
        } catch (i) {
            if (this._debug(s, "error", i),
            I(i)) {
                const o = {
                    session: null,
                    error: i
                };
                return oo(i) || await this._removeSession(),
                (n = this.refreshingDeferred) === null || n === void 0 || n.resolve(o),
                o
            }
            throw (r = this.refreshingDeferred) === null || r === void 0 || r.reject(i),
            i
        } finally {
            this.refreshingDeferred = null,
            this._debug(s, "end")
        }
    }
    async _notifyAllSubscribers(e, n, r=!0) {
        const s = `#_notifyAllSubscribers(${e})`;
        this._debug(s, "begin", n, `broadcast = ${r}`);
        try {
            this.broadcastChannel && r && this.broadcastChannel.postMessage({
                event: e,
                session: n
            });
            const i = []
              , o = Array.from(this.stateChangeEmitters.values()).map(async a => {
                try {
                    await a.callback(e, n)
                } catch (l) {
                    i.push(l)
                }
            }
            );
            if (await Promise.all(o),
            i.length > 0) {
                for (let a = 0; a < i.length; a += 1)
                    console.error(i[a]);
                throw i[0]
            }
        } finally {
            this._debug(s, "end")
        }
    }
    async _saveSession(e) {
        this._debug("#_saveSession()", e),
        this.suppressGetSessionWarning = !0;
        const n = Object.assign({}, e)
          , r = n.user && n.user.__isUserNotAvailableProxy === !0;
        if (this.userStorage) {
            !r && n.user && await _n(this.userStorage, this.storageKey + "-user", {
                user: n.user
            });
            const s = Object.assign({}, n);
            delete s.user;
            const i = qu(s);
            await _n(this.storage, this.storageKey, i)
        } else {
            const s = qu(n);
            await _n(this.storage, this.storageKey, s)
        }
    }
    async _removeSession() {
        this._debug("#_removeSession()"),
        await kt(this.storage, this.storageKey),
        await kt(this.storage, this.storageKey + "-code-verifier"),
        await kt(this.storage, this.storageKey + "-user"),
        this.userStorage && await kt(this.userStorage, this.storageKey + "-user"),
        await this._notifyAllSubscribers("SIGNED_OUT", null)
    }
    _removeVisibilityChangedCallback() {
        this._debug("#_removeVisibilityChangedCallback()");
        const e = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
            e && Ke() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", e)
        } catch (n) {
            console.error("removing visibilitychange callback failed", n)
        }
    }
    async _startAutoRefresh() {
        await this._stopAutoRefresh(),
        this._debug("#_startAutoRefresh()");
        const e = setInterval( () => this._autoRefreshTokenTick(), wn);
        this.autoRefreshTicker = e,
        e && typeof e == "object" && typeof e.unref == "function" ? e.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e),
        setTimeout(async () => {
            await this.initializePromise,
            await this._autoRefreshTokenTick()
        }
        , 0)
    }
    async _stopAutoRefresh() {
        this._debug("#_stopAutoRefresh()");
        const e = this.autoRefreshTicker;
        this.autoRefreshTicker = null,
        e && clearInterval(e)
    }
    async startAutoRefresh() {
        this._removeVisibilityChangedCallback(),
        await this._startAutoRefresh()
    }
    async stopAutoRefresh() {
        this._removeVisibilityChangedCallback(),
        await this._stopAutoRefresh()
    }
    async _autoRefreshTokenTick() {
        this._debug("#_autoRefreshTokenTick()", "begin");
        try {
            await this._acquireLock(0, async () => {
                try {
                    const e = Date.now();
                    try {
                        return await this._useSession(async n => {
                            const {data: {session: r}} = n;
                            if (!r || !r.refresh_token || !r.expires_at) {
                                this._debug("#_autoRefreshTokenTick()", "no session");
                                return
                            }
                            const s = Math.floor((r.expires_at * 1e3 - e) / wn);
                            this._debug("#_autoRefreshTokenTick()", `access token expires in ${s} ticks, a tick lasts ${wn}ms, refresh threshold is ${da} ticks`),
                            s <= da && await this._callRefreshToken(r.refresh_token)
                        }
                        )
                    } catch (n) {
                        console.error("Auto refresh tick failed with error. This is likely a transient error.", n)
                    }
                } finally {
                    this._debug("#_autoRefreshTokenTick()", "end")
                }
            }
            )
        } catch (e) {
            if (e.isAcquireTimeout || e instanceof $h)
                this._debug("auto refresh token tick lock not available");
            else
                throw e
        }
    }
    async _handleVisibilityChange() {
        if (this._debug("#_handleVisibilityChange()"),
        !Ke() || !(window != null && window.addEventListener))
            return this.autoRefreshToken && this.startAutoRefresh(),
            !1;
        try {
            this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1),
            window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback),
            await this._onVisibilityChanged(!0)
        } catch (e) {
            console.error("_handleVisibilityChange", e)
        }
    }
    async _onVisibilityChanged(e) {
        const n = `#_onVisibilityChanged(${e})`;
        this._debug(n, "visibilityState", document.visibilityState),
        document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(),
        e || (await this.initializePromise,
        await this._acquireLock(-1, async () => {
            if (document.visibilityState !== "visible") {
                this._debug(n, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                return
            }
            await this._recoverAndRefresh()
        }
        ))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh()
    }
    async _getUrlForProvider(e, n, r) {
        const s = [`provider=${encodeURIComponent(n)}`];
        if (r != null && r.redirectTo && s.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
        r != null && r.scopes && s.push(`scopes=${encodeURIComponent(r.scopes)}`),
        this.flowType === "pkce") {
            const [i,o] = await mn(this.storage, this.storageKey)
              , a = new URLSearchParams({
                code_challenge: `${encodeURIComponent(i)}`,
                code_challenge_method: `${encodeURIComponent(o)}`
            });
            s.push(a.toString())
        }
        if (r != null && r.queryParams) {
            const i = new URLSearchParams(r.queryParams);
            s.push(i.toString())
        }
        return r != null && r.skipBrowserRedirect && s.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
        `${e}?${s.join("&")}`
    }
    async _unenroll(e) {
        try {
            return await this._useSession(async n => {
                var r;
                const {data: s, error: i} = n;
                return i ? {
                    data: null,
                    error: i
                } : await D(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
                    headers: this.headers,
                    jwt: (r = s == null ? void 0 : s.session) === null || r === void 0 ? void 0 : r.access_token
                })
            }
            )
        } catch (n) {
            if (I(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async _enroll(e) {
        try {
            return await this._useSession(async n => {
                var r, s;
                const {data: i, error: o} = n;
                if (o)
                    return {
                        data: null,
                        error: o
                    };
                const a = Object.assign({
                    friendly_name: e.friendlyName,
                    factor_type: e.factorType
                }, e.factorType === "phone" ? {
                    phone: e.phone
                } : {
                    issuer: e.issuer
                })
                  , {data: l, error: u} = await D(this.fetch, "POST", `${this.url}/factors`, {
                    body: a,
                    headers: this.headers,
                    jwt: (r = i == null ? void 0 : i.session) === null || r === void 0 ? void 0 : r.access_token
                });
                return u ? {
                    data: null,
                    error: u
                } : (e.factorType === "totp" && (!((s = l == null ? void 0 : l.totp) === null || s === void 0) && s.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`),
                {
                    data: l,
                    error: null
                })
            }
            )
        } catch (n) {
            if (I(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async _verify(e) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async n => {
                    var r;
                    const {data: s, error: i} = n;
                    if (i)
                        return {
                            data: null,
                            error: i
                        };
                    const {data: o, error: a} = await D(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
                        body: {
                            code: e.code,
                            challenge_id: e.challengeId
                        },
                        headers: this.headers,
                        jwt: (r = s == null ? void 0 : s.session) === null || r === void 0 ? void 0 : r.access_token
                    });
                    return a ? {
                        data: null,
                        error: a
                    } : (await this._saveSession(Object.assign({
                        expires_at: Math.round(Date.now() / 1e3) + o.expires_in
                    }, o)),
                    await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", o),
                    {
                        data: o,
                        error: a
                    })
                }
                )
            } catch (n) {
                if (I(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        }
        )
    }
    async _challenge(e) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async n => {
                    var r;
                    const {data: s, error: i} = n;
                    return i ? {
                        data: null,
                        error: i
                    } : await D(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
                        body: {
                            channel: e.channel
                        },
                        headers: this.headers,
                        jwt: (r = s == null ? void 0 : s.session) === null || r === void 0 ? void 0 : r.access_token
                    })
                }
                )
            } catch (n) {
                if (I(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        }
        )
    }
    async _challengeAndVerify(e) {
        const {data: n, error: r} = await this._challenge({
            factorId: e.factorId
        });
        return r ? {
            data: null,
            error: r
        } : await this._verify({
            factorId: e.factorId,
            challengeId: n.id,
            code: e.code
        })
    }
    async _listFactors() {
        const {data: {user: e}, error: n} = await this.getUser();
        if (n)
            return {
                data: null,
                error: n
            };
        const r = (e == null ? void 0 : e.factors) || []
          , s = r.filter(o => o.factor_type === "totp" && o.status === "verified")
          , i = r.filter(o => o.factor_type === "phone" && o.status === "verified");
        return {
            data: {
                all: r,
                totp: s,
                phone: i
            },
            error: null
        }
    }
    async _getAuthenticatorAssuranceLevel() {
        return this._acquireLock(-1, async () => await this._useSession(async e => {
            var n, r;
            const {data: {session: s}, error: i} = e;
            if (i)
                return {
                    data: null,
                    error: i
                };
            if (!s)
                return {
                    data: {
                        currentLevel: null,
                        nextLevel: null,
                        currentAuthenticationMethods: []
                    },
                    error: null
                };
            const {payload: o} = ao(s.access_token);
            let a = null;
            o.aal && (a = o.aal);
            let l = a;
            ((r = (n = s.user.factors) === null || n === void 0 ? void 0 : n.filter(d => d.status === "verified")) !== null && r !== void 0 ? r : []).length > 0 && (l = "aal2");
            const c = o.amr || [];
            return {
                data: {
                    currentLevel: a,
                    nextLevel: l,
                    currentAuthenticationMethods: c
                },
                error: null
            }
        }
        ))
    }
    async fetchJwk(e, n={
        keys: []
    }) {
        let r = n.keys.find(a => a.kid === e);
        if (r)
            return r;
        const s = Date.now();
        if (r = this.jwks.keys.find(a => a.kid === e),
        r && this.jwks_cached_at + z0 > s)
            return r;
        const {data: i, error: o} = await D(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
            headers: this.headers
        });
        if (o)
            throw o;
        return !i.keys || i.keys.length === 0 || (this.jwks = i,
        this.jwks_cached_at = s,
        r = i.keys.find(a => a.kid === e),
        !r) ? null : r
    }
    async getClaims(e, n={}) {
        try {
            let r = e;
            if (!r) {
                const {data: v, error: y} = await this.getSession();
                if (y || !v.session)
                    return {
                        data: null,
                        error: y
                    };
                r = v.session.access_token
            }
            const {header: s, payload: i, signature: o, raw: {header: a, payload: l}} = ao(r);
            n != null && n.allowExpired || cv(i.exp);
            const u = !s.alg || s.alg.startsWith("HS") || !s.kid || !("crypto"in globalThis && "subtle"in globalThis.crypto) ? null : await this.fetchJwk(s.kid, n != null && n.keys ? {
                keys: n.keys
            } : n == null ? void 0 : n.jwks);
            if (!u) {
                const {error: v} = await this.getUser(r);
                if (v)
                    throw v;
                return {
                    data: {
                        claims: i,
                        header: s,
                        signature: o
                    },
                    error: null
                }
            }
            const c = dv(s.alg)
              , d = await crypto.subtle.importKey("jwk", u, c, !0, ["verify"]);
            if (!await crypto.subtle.verify(c, d, o, Q0(`${a}.${l}`)))
                throw new pa("Invalid JWT signature");
            return {
                data: {
                    claims: i,
                    header: s,
                    signature: o
                },
                error: null
            }
        } catch (r) {
            if (I(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
}
Vr.nextInstanceID = 0;
const Cv = Vr;
class Tv extends Cv {
    constructor(e) {
        super(e)
    }
}
var Pv = function(t, e, n, r) {
    function s(i) {
        return i instanceof n ? i : new n(function(o) {
            o(i)
        }
        )
    }
    return new (n || (n = Promise))(function(i, o) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (d) {
                o(d)
            }
        }
        function l(c) {
            try {
                u(r.throw(c))
            } catch (d) {
                o(d)
            }
        }
        function u(c) {
            c.done ? i(c.value) : s(c.value).then(a, l)
        }
        u((r = r.apply(t, e || [])).next())
    }
    )
};
class Nv {
    constructor(e, n, r) {
        var s, i, o;
        this.supabaseUrl = e,
        this.supabaseKey = n;
        const a = $0(e);
        if (!n)
            throw new Error("supabaseKey is required.");
        this.realtimeUrl = new URL("realtime/v1",a),
        this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"),
        this.authUrl = new URL("auth/v1",a),
        this.storageUrl = new URL("storage/v1",a),
        this.functionsUrl = new URL("functions/v1",a);
        const l = `sb-${a.hostname.split(".")[0]}-auth-token`
          , u = {
            db: b0,
            realtime: C0,
            auth: Object.assign(Object.assign({}, j0), {
                storageKey: l
            }),
            global: E0
        }
          , c = I0(r ?? {}, u);
        this.storageKey = (s = c.auth.storageKey) !== null && s !== void 0 ? s : "",
        this.headers = (i = c.global.headers) !== null && i !== void 0 ? i : {},
        c.accessToken ? (this.accessToken = c.accessToken,
        this.auth = new Proxy({},{
            get: (d, h) => {
                throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(h)} is not possible`)
            }
        })) : this.auth = this._initSupabaseAuthClient((o = c.auth) !== null && o !== void 0 ? o : {}, this.headers, c.global.fetch),
        this.fetch = O0(n, this._getAccessToken.bind(this), c.global.fetch),
        this.realtime = this._initRealtimeClient(Object.assign({
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this)
        }, c.realtime)),
        this.rest = new Hg(new URL("rest/v1",a).href,{
            headers: this.headers,
            schema: c.db.schema,
            fetch: this.fetch
        }),
        this.storage = new k0(this.storageUrl.href,this.headers,this.fetch,r == null ? void 0 : r.storage),
        c.accessToken || this._listenForAuthEvents()
    }
    get functions() {
        return new Sg(this.functionsUrl.href,{
            headers: this.headers,
            customFetch: this.fetch
        })
    }
    from(e) {
        return this.rest.from(e)
    }
    schema(e) {
        return this.rest.schema(e)
    }
    rpc(e, n={}, r={}) {
        return this.rest.rpc(e, n, r)
    }
    channel(e, n={
        config: {}
    }) {
        return this.realtime.channel(e, n)
    }
    getChannels() {
        return this.realtime.getChannels()
    }
    removeChannel(e) {
        return this.realtime.removeChannel(e)
    }
    removeAllChannels() {
        return this.realtime.removeAllChannels()
    }
    _getAccessToken() {
        var e, n;
        return Pv(this, void 0, void 0, function*() {
            if (this.accessToken)
                return yield this.accessToken();
            const {data: r} = yield this.auth.getSession();
            return (n = (e = r.session) === null || e === void 0 ? void 0 : e.access_token) !== null && n !== void 0 ? n : this.supabaseKey
        })
    }
    _initSupabaseAuthClient({autoRefreshToken: e, persistSession: n, detectSessionInUrl: r, storage: s, userStorage: i, storageKey: o, flowType: a, lock: l, debug: u}, c, d) {
        const h = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new Tv({
            url: this.authUrl.href,
            headers: Object.assign(Object.assign({}, h), c),
            storageKey: o,
            autoRefreshToken: e,
            persistSession: n,
            detectSessionInUrl: r,
            storage: s,
            userStorage: i,
            flowType: a,
            lock: l,
            debug: u,
            fetch: d,
            hasCustomAuthorizationHeader: Object.keys(this.headers).some(v => v.toLowerCase() === "authorization")
        })
    }
    _initRealtimeClient(e) {
        return new l0(this.realtimeUrl.href,Object.assign(Object.assign({}, e), {
            params: Object.assign({
                apikey: this.supabaseKey
            }, e == null ? void 0 : e.params)
        }))
    }
    _listenForAuthEvents() {
        return this.auth.onAuthStateChange( (n, r) => {
            this._handleTokenChanged(n, "CLIENT", r == null ? void 0 : r.access_token)
        }
        )
    }
    _handleTokenChanged(e, n, r) {
        (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== r ? this.changedAccessToken = r : e === "SIGNED_OUT" && (this.realtime.setAuth(),
        n == "STORAGE" && this.auth.signOut(),
        this.changedAccessToken = void 0)
    }
}
const vl = (t, e, n) => new Nv(t,e,n);
function Ov() {
    if (typeof window < "u" || typeof process > "u")
        return !1;
    const t = process.version;
    if (t == null)
        return !1;
    const e = t.match(/^v(\d+)\./);
    return e ? parseInt(e[1], 10) <= 18 : !1
}
Ov() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
const we = vl("https://vflvgyobnsfbszhadxfb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmbHZneW9ibnNmYnN6aGFkeGZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2ODk3MTMsImV4cCI6MjA5MjI2NTcxM30.Ao6wFZ-pLoKQ0eNY4iOUjXzvgDtLlewLHEyaG4Kp9tA")
  , Rv = () => {
    let t = sessionStorage.getItem("ny-cricket-chat-session");
    return t || (t = `chat-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    sessionStorage.setItem("ny-cricket-chat-session", t)),
    t
}
  , Yu = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899", "#f43f5e", "#14b8a6"]
  , Av = () => Yu[Math.floor(Math.random() * Yu.length)];
function Iv(t) {
    const [e,n] = j.useState([])
      , [r,s] = j.useState([])
      , [i,o] = j.useState(null)
      , [a,l] = j.useState("")
      , [u,c] = j.useState(null)
      , [d,h] = j.useState(!1)
      , [v,y] = j.useState(!1)
      , w = j.useRef(Rv())
      , k = j.useRef(null)
      , m = j.useRef(null)
      , f = j.useRef(null)
      , p = j.useRef(null)
      , _ = j.useRef(null)
      , E = j.useCallback( () => {
        const N = async () => {
            if (t) {
                try {
                    await we.from("chat_messages").delete().eq("channel_id", t),
                    n([]),
                    console.log(`Chat reset at 12:00 PM for channel: ${t}`)
                } catch (F) {
                    console.error("Daily reset error:", F)
                }
                $()
            }
        }
          , $ = () => {
            const F = new Date
              , A = new Date(F);
            A.setDate(A.getDate() + 1),
            A.setHours(12, 0, 0, 0);
            const J = A.getTime() - F.getTime();
            _.current && clearTimeout(_.current),
            _.current = setTimeout(N, J)
        }
          , L = new Date
          , W = new Date(L);
        if (W.setHours(12, 0, 0, 0),
        L >= W)
            $();
        else {
            const F = W.getTime() - L.getTime();
            _.current && clearTimeout(_.current),
            _.current = setTimeout(N, F)
        }
    }
    , [t]);
    j.useEffect( () => {
        if (!t) {
            n([]),
            s([]),
            o(null),
            y(!1),
            _.current && clearTimeout(_.current);
            return
        }
        return (async () => {
            try {
                let $ = localStorage.getItem(`ny-cricket-username-${t}`)
                  , L = localStorage.getItem(`ny-cricket-color-${t}`);
                $ || ($ = `User${Math.floor(Math.random() * 9e3) + 1e3}`,
                localStorage.setItem(`ny-cricket-username-${t}`, $)),
                L || (L = Av(),
                localStorage.setItem(`ny-cricket-color-${t}`, L)),
                o($),
                l(L);
                const {data: W, error: F} = await we.from("chat_users").insert({
                    session_id: w.current,
                    channel_id: t,
                    username: $,
                    user_color: L
                }).select().maybeSingle();
                if (F) {
                    console.error("User insert error:", F);
                    return
                }
                W && c(W.id),
                y(!0);
                const {data: A, error: J} = await we.from("chat_messages").select("*").eq("channel_id", t).order("created_at", {
                    ascending: !0
                }).limit(100);
                J ? console.error("Messages load error:", J) : A && n(A);
                const {data: De, error: C} = await we.from("chat_users").select("*").eq("channel_id", t);
                C ? console.error("Users load error:", C) : De && s(De.filter(O => O.session_id !== w.current)),
                E()
            } catch ($) {
                console.error("Chat setup error:", $)
            }
        }
        )(),
        () => {
            m.current && (we.removeChannel(m.current),
            m.current = null),
            f.current && (we.removeChannel(f.current),
            f.current = null),
            p.current && (we.removeChannel(p.current),
            p.current = null),
            _.current && clearTimeout(_.current)
        }
    }
    , [t, E]),
    j.useEffect( () => {
        if (!t)
            return;
        const N = `messages:${t}:${Date.now()}`
          , $ = we.channel(N).on("postgres_changes", {
            event: "INSERT",
            schema: "public",
            table: "chat_messages",
            filter: `channel_id=eq.${t}`
        }, L => {
            console.log("New message received:", L.new);
            const W = L.new;
            n(F => F.some(A => A.id === W.id) ? F : [...F, W])
        }
        ).subscribe(L => {
            console.log(`Message subscription status: ${L}`)
        }
        );
        return p.current = $,
        () => {
            p.current && (we.removeChannel(p.current),
            p.current = null)
        }
    }
    , [t]),
    j.useEffect( () => {
        if (!t)
            return;
        const N = `users:${t}:${Date.now()}`
          , $ = we.channel(N).on("postgres_changes", {
            event: "INSERT",
            schema: "public",
            table: "chat_users",
            filter: `channel_id=eq.${t}`
        }, L => {
            console.log("User joined:", L.new);
            const W = L.new;
            W.session_id !== w.current && s(F => F.some(J => J.id === W.id) ? F : [...F, W])
        }
        ).on("postgres_changes", {
            event: "UPDATE",
            schema: "public",
            table: "chat_users",
            filter: `channel_id=eq.${t}`
        }, L => {
            console.log("User updated:", L.new);
            const W = L.new;
            W.session_id !== w.current && s(F => F.map(A => A.id === W.id ? W : A))
        }
        ).on("postgres_changes", {
            event: "DELETE",
            schema: "public",
            table: "chat_users",
            filter: `channel_id=eq.${t}`
        }, L => {
            console.log("User left:", L.old);
            const W = L.old;
            s(F => F.filter(A => A.id !== W.id))
        }
        ).subscribe(L => {
            console.log(`Users subscription status: ${L}`)
        }
        );
        return f.current = $,
        () => {
            f.current && (we.removeChannel(f.current),
            f.current = null)
        }
    }
    , [t]);
    const S = j.useCallback(async N => {
        if (!t || !i || !N.trim() || !v) {
            console.warn("Cannot send message:", {
                channelId: t,
                currentUsername: i,
                text: N.trim(),
                canChat: v
            });
            return
        }
        try {
            console.log("Sending message:", N),
            u && await we.from("chat_users").update({
                is_typing: !1
            }).eq("id", u);
            const {data: $, error: L} = await we.from("chat_messages").insert({
                channel_id: t,
                username: i,
                message: N.trim(),
                user_color: a
            });
            if (L) {
                console.error("Message insert error:", L);
                return
            }
            console.log("Message sent successfully:", $),
            h(!1)
        } catch ($) {
            console.error("Failed to send message:", $)
        }
    }
    , [t, i, a, u, v])
      , b = j.useCallback(async N => {
        if (!(!u || !t))
            try {
                await we.from("chat_users").update({
                    is_typing: N,
                    last_activity: new Date().toISOString()
                }).eq("id", u),
                h(N)
            } catch ($) {
                console.error("Failed to update typing status:", $)
            }
    }
    , [u, t])
      , T = j.useCallback( () => {
        d || b(!0),
        k.current && clearTimeout(k.current),
        k.current = setTimeout( () => {
            b(!1)
        }
        , 3e3)
    }
    , [d, b])
      , z = j.useCallback(async () => {
        if (u)
            try {
                await we.from("chat_users").delete().eq("id", u),
                y(!1)
            } catch (N) {
                console.error("Failed to leave chat:", N)
            }
    }
    , [u]);
    return {
        messages: e,
        onlineUsers: r,
        currentUsername: i,
        currentUserColor: a,
        isTyping: d,
        canChat: v,
        sendMessage: S,
        handleTyping: T,
        leaveChat: z,
        onlineCount: r.length + 1
    }
}
function $v({channelId: t, isEmbedded: e=!0}) {
    const {messages: n, onlineUsers: r, currentUsername: s, sendMessage: i, handleTyping: o, canChat: a, onlineCount: l} = Iv(t)
      , u = j.useRef(null)
      , c = j.useRef(null)
      , [d,h] = j.useState(!0)
      , v = () => {
        d && u.current && u.current.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    j.useEffect( () => {
        console.log("Messages updated:", n.length),
        v()
    }
    , [n, d]);
    const y = () => {
        if (!c.current)
            return;
        const {scrollTop: w, scrollHeight: k, clientHeight: m} = c.current
          , f = k - w - m < 100;
        h(f)
    }
    ;
    return t ? g.jsxs("div", {
        className: `flex flex-col bg-gradient-to-b from-gray-900 to-gray-950 border-t border-orange-500/20 ${e ? "h-96 sm:h-[500px]" : "h-screen"}`,
        children: [g.jsxs("div", {
            className: "flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-gradient-to-r from-gray-900 via-gray-850 to-gray-900 flex-shrink-0",
            children: [g.jsxs("div", {
                className: "flex items-center gap-3",
                children: [g.jsx(Cu, {
                    size: 20,
                    className: "text-orange-400"
                }), g.jsxs("div", {
                    children: [g.jsx("h3", {
                        className: "text-sm font-bold text-white",
                        children: "Live Chat"
                    }), g.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [g.jsx("div", {
                            className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                        }), g.jsxs("span", {
                            className: "text-xs text-gray-400",
                            children: [l, " online"]
                        })]
                    })]
                })]
            }), g.jsxs("div", {
                className: "flex items-center gap-2",
                children: [g.jsx(Pu, {
                    size: 16,
                    className: "text-gray-400"
                }), g.jsx("span", {
                    className: "text-xs font-medium text-gray-300",
                    children: l
                })]
            })]
        }), g.jsxs("div", {
            ref: c,
            onScroll: y,
            className: "flex-1 overflow-y-auto flex flex-col gap-3 p-4 scrollbar-thin scrollbar-thumb-orange-500/30 scrollbar-track-gray-800/20",
            children: [n.length === 0 ? g.jsxs("div", {
                className: "flex flex-col items-center justify-center h-full gap-2 text-center",
                children: [g.jsx(Cu, {
                    size: 32,
                    className: "text-orange-400/30"
                }), g.jsxs("div", {
                    children: [g.jsx("p", {
                        className: "text-sm font-semibold text-gray-300",
                        children: "No messages yet"
                    }), g.jsx("p", {
                        className: "text-xs text-gray-500",
                        children: "Be the first to chat!"
                    })]
                })]
            }) : n.map(w => g.jsx(mg, {
                username: w.username,
                message: w.message,
                userColor: w.user_color,
                timestamp: w.created_at,
                isCurrentUser: w.username === s
            }, w.id)), g.jsx("div", {
                ref: u
            })]
        }), g.jsxs("div", {
            className: "px-4 py-2 border-t border-gray-800 bg-gray-950/50 max-h-16 overflow-y-auto flex-shrink-0",
            children: [g.jsxs("div", {
                className: "flex items-center gap-2 mb-1.5",
                children: [g.jsx(Pu, {
                    size: 13,
                    className: "text-orange-400"
                }), g.jsxs("span", {
                    className: "text-xs font-bold text-gray-300",
                    children: ["Online (", l, ")"]
                })]
            }), g.jsxs("div", {
                className: "flex flex-wrap gap-1",
                children: [s && g.jsxs("div", {
                    className: "inline-flex items-center gap-1 px-2 py-0.5 bg-orange-500/20 border border-orange-500/40 rounded-full text-xs text-orange-300 font-medium",
                    children: [g.jsx("div", {
                        className: "w-1 h-1 bg-green-400 rounded-full animate-pulse"
                    }), "You"]
                }), r.map(w => g.jsxs("div", {
                    className: "inline-flex items-center gap-1 px-2 py-0.5 bg-gray-800 border border-gray-700 rounded-full text-xs text-gray-300",
                    children: [g.jsx("div", {
                        className: "w-1 h-1 rounded-full animate-pulse",
                        style: {
                            backgroundColor: w.user_color
                        }
                    }), w.username]
                }, w.id))]
            })]
        }), g.jsx(vg, {
            onSendMessage: i,
            onTyping: o,
            disabled: !a,
            placeholder: "Message about the match..."
        })]
    }) : null
}
const xs = 3;
function Lv({channel: t, onClose: e, onViewTrack: n, currentViewCount: r, totalViews: s}) {
    const i = j.useRef(null)
      , o = j.useRef(null)
      , a = j.useRef(null)
      , l = j.useRef(0)
      , u = j.useRef(null)
      , c = j.useRef(!1)
      , d = j.useRef(!1)
      , [h,v] = j.useState("loading")
      , [y,w] = j.useState("")
      , [k,m] = j.useState("Loading stream…")
      , [f,p] = j.useState(!0)
      , [_,E] = j.useState(!1)
      , [S,b] = j.useState(!1)
      , T = j.useCallback(A => {
        w(A),
        v("error"),
        p(!0)
    }
    , [])
      , z = j.useCallback( () => {
        p(!1),
        v("playing"),
        c.current || (c.current = !0,
        n())
    }
    , [n])
      , N = j.useCallback(async () => {
        const A = i.current;
        if (!(!A || h !== "ready"))
            try {
                A.muted = !1,
                A.volume = .8,
                await A.play(),
                z()
            } catch {
                try {
                    A.muted = !0,
                    await A.play(),
                    z()
                } catch {
                    m("Tap again to play")
                }
            }
    }
    , [h, z])
      , $ = j.useCallback(async A => {
        if (d.current)
            return;
        d.current = !0;
        const J = i.current;
        if (!J) {
            d.current = !1;
            return
        }
        try {
            await A.load(t.url),
            l.current = 0,
            v("ready"),
            m("Tap to Play");
            try {
                J.muted = !0,
                await J.play(),
                z()
            } catch {
                v("ready"),
                m("Tap to Play")
            }
            d.current = !1
        } catch (De) {
            if (console.error("Load error:", De),
            d.current = !1,
            l.current < xs) {
                l.current++;
                const C = l.current * 4e3;
                v("retrying"),
                m(`Connecting… (${l.current}/${xs})`),
                u.current = setTimeout( () => $(A), C)
            } else
                T("Stream unavailable. Check link or try again.")
        }
    }
    , [t.url, z, T])
      , L = j.useCallback( () => {
        l.current = 0,
        d.current = !1,
        v("loading"),
        m("Reconnecting…"),
        p(!0),
        a.current && $(a.current)
    }
    , [$])
      , W = () => {
        const A = `${window.location.origin}?channel=${t.id}`;
        navigator.clipboard.writeText(A),
        E(!0),
        setTimeout( () => E(!1), 2e3)
    }
      , F = async () => {
        const A = o.current;
        if (A)
            try {
                S ? (document.fullscreenElement && await document.exitFullscreen(),
                b(!1)) : (A.requestFullscreen && await A.requestFullscreen(),
                b(!0))
            } catch (J) {
                console.error("Fullscreen error:", J)
            }
    }
    ;
    return j.useEffect(() => {
  const A = i.current,
    J = o.current;
  if (!A || !J) return;

  let isMounted = true;
  let playerInstance = null;

  const initPlayer = async () => {
    try {
      const O = window.shaka;
      if (!O) {
        T("Player library not loaded");
        return;
      }

      O.polyfill.installAll();
      if (!O.Player.isBrowserSupported()) {
        T("Browser not supported");
        return;
      }

      const R = new O.Player();
      playerInstance = R;
      a.current = R;

      await R.attach(A);

      // UI config
      const ui = new O.ui.Overlay(R, J, A);
      ui.configure({
        addBigPlayButton: true,
        controlPanelElements: [
          "mute", "play_pause", "time_and_duration", "spacer", 
          "quality", "picture_in_picture", "fullscreen"
        ],
        seekBarColors: { base: "white", buffered: "red", played: "green" }
      });

      // Player config
      R.configure({
        drm: { clearKeys: { [t.keyId]: t.key } },
        manifest: { defaultPresentationDelay: 5 },
        streaming: {
          lowLatencyMode: true,
          bufferingGoal: 10,
          rebufferingGoal: 2,
          safeSeekOffset: 5,
          // ✅ PREVENT API INTERFERENCE
          retryParameters: {
            timeout: 30000,
            maxAttempts: 5,
            baseDelay: 2000,
            backoffFactor: 1.2,
            fuzzFactor: 0.1
          }
        }
      });

      // ✅ FIXED: ONLY JioTV URLs - ignore Supabase API
      if (t.cookie) {
        R.getNetworkingEngine().registerRequestFilter((type, request) => {
          // Skip non-JioTV requests (Supabase API)
          if (!request.uris[0]?.includes('jiotv') && 
              !request.uris[0]?.includes('cdn.jio')) {
            return;
          }

          request.headers["Referer"] = "https://www.jiotv.com/";
          request.headers["User-Agent"] = "plaYtv/7.1.5 (Linux;Android 13) ExoPlayerLib/2.11.6";
          request.headers["Cookie"] = t.cookie;

          let urlCookie = t.cookie.startsWith("__hdnea__=") ? 
            t.cookie.substring(10) : t.cookie;
          
          if ((type === O.net.NetworkingEngine.RequestType.MANIFEST ||
               type === O.net.NetworkingEngine.RequestType.SEGMENT) &&
              request.uris[0] && !request.uris[0].includes("__hdnea__")) {
            const sep = request.uris[0].includes("?") ? "&" : "?";
            request.uris[0] += sep + "__hdnea__=" + urlCookie;
          }
        });
      }

      // ✅ FIXED: Ignore Supabase  API responses
      R.getNetworkingEngine().registerResponseFilter((type, response) => {
        // Skip Supabase API responses
        if (response.headers?.['content-type']?.includes('application/json') ||
            response.uris?.[0]?.includes('supabase')) {
          return;
        }
        
        if (response.status === 429) {
          const retry = parseInt(response.headers["retry-after"] || "5", 10) * 1000;
          return new Promise(resolve => setTimeout(resolve, retry));
        }
      });

      // ✅ ROBUST ERROR HANDLER - ignores API errors
      R.addEventListener("error", V => {
        if (!isMounted || V.detail.severity === 1) return;
        
        const error = V.detail;
        console.error("Shaka error:", error);
        
        // ✅ ONLY retry JioTV stream errors, ignore API
        if (error.category === 1 && ( // NETWORK_ERROR
            error.uris?.[0]?.includes('jiotv') || 
            error.uris?.[0]?.includes('cdn.jio'))) {
          
          if (l.current < xs) {
            l.current++;
            const delay = Math.min(l.current * 3000, 15000);
            v("retrying");
            m(`Connecting… (${l.current}/${xs})`);
            p(true);
            u.current = setTimeout(() => {
              if (isMounted && a.current === R) {
                d.current = false;
                $(R);
              }
            }, delay);
          } else {
            T("Stream unavailable");
          }
        }
      });

      // Loading states
      R.addEventListener("loading.complete", () => {
        if (isMounted) {
          v("ready");
          m("Tap to Play");
        }
      });

      R.addEventListener("buffering", event => {
        if (isMounted && event.buffering) {
          v("loading");
          m("Buffering…");
        }
      });

      // Load stream
      await $(R);

      // ✅ STABLE AUTO-PLAY - won't pause on API calls
      A.addEventListener("loadeddata", () => {
        if (isMounted && h !== "playing") {
          A.muted = true;
          A.play().catch(() => {});
        }
      }, { once: true });

      A.addEventListener("play", () => {
        if (isMounted && !c.current) {
          A.muted = false;
          c.current = true;
          z();
        }
      });

      // ✅ PREVENT PAUSE on API calls
      A.addEventListener("pause", () => {
        // Auto-resume if buffering or API interference
        if (h === "playing" && A.currentTime > 0) {
          setTimeout(() => {
            if (isMounted && A.paused) {
              A.play().catch(() => {});
            }
          }, 500);
        }
      });

    } catch (error) {
      console.error("Player init:", error);
      if (isMounted) T("Player initialization failed");
    }
  };

  initPlayer();

  return () => {
    isMounted = false;
    if (u.current) {
      clearTimeout(u.current);
      u.current = null;
    }
    
    if (a.current && playerInstance === a.current) {
      a.current.detach()
        .then(() => a.current?.destroy().catch(console.error))
        .catch(console.error)
        .finally(() => { a.current = null; });
    }
  };
}, [t, $, T, z, h]),
    j.useEffect( () => {
        const A = J => {
            J.key === "Escape" && S && F(),
            J.key === " " && (J.preventDefault(),
            i.current && (i.current.paused ? i.current.play() : i.current.pause())),
            J.key === "f" && F()
        }
        ;
        return document.addEventListener("keydown", A),
        () => document.removeEventListener("keydown", A)
    }
    , [S]),
    S ? g.jsxs("div", {
        className: "fixed inset-0 z-50 bg-black flex flex-col",
        children: [g.jsxs("div", {
            ref: o,
            className: "shaka-video-container youtube-theme absolute inset-0 w-full h-full",
            "data-shaka-player": !0,
            children: [g.jsx("video", {
                ref: i,
                className: "w-full h-full bg-black object-contain",
                playsInline: !0,
                preload: "auto"
            }), f && g.jsxs("div", {
                className: `absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 sm:gap-6 cursor-pointer backdrop-blur-sm transition-all duration-500 ${h === "playing" ? "opacity-0 pointer-events-none" : "opacity-100"}`,
                onClick: N,
                children: [(h === "loading" || h === "retrying") && g.jsxs("div", {
                    className: "relative w-12 h-12 sm:w-16 sm:h-16",
                    children: [g.jsx("div", {
                        className: "absolute inset-0 border-4 border-orange-500/20 rounded-full animate-spin"
                    }), g.jsx("div", {
                        className: "absolute inset-1 border-4 border-transparent border-t-orange-500 rounded-full animate-spin",
                        style: {
                            animationDirection: "reverse",
                            animationDuration: "1.5s"
                        }
                    }), g.jsx("div", {
                        className: "absolute inset-3 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full animate-pulse"
                    })]
                }), h === "ready" && g.jsxs("button", {
                    className: "relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden group",
                    onClick: N,
                    "aria-label": "Play",
                    children: [g.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 animate-pulse group-hover:from-orange-400 group-hover:to-yellow-400 transition-all"
                    }), g.jsx("div", {
                        className: "absolute inset-1 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                        children: g.jsx("svg", {
                            viewBox: "0 0 24 24",
                            className: "w-6 h-6 sm:w-8 sm:h-8 fill-orange-400 ml-1.5 group-hover:fill-orange-300",
                            children: g.jsx("path", {
                                d: "M8 5v14l11-7z"
                            })
                        })
                    })]
                }), h !== "error" && g.jsx("p", {
                    className: "text-white/90 text-xs sm:text-sm tracking-wide drop-shadow-xl font-medium animate-pulse",
                    children: k
                })]
            }), h === "error" && g.jsxs("div", {
                className: "absolute inset-0 z-40 bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm flex flex-col items-center justify-center gap-3 sm:gap-5 p-4 sm:p-6 text-center",
                children: [g.jsx("div", {
                    className: "w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500/30 to-red-500/20 rounded-full flex items-center justify-center border-2 border-orange-500/40 animate-pulse",
                    children: g.jsx(Tu, {
                        size: 24,
                        className: "sm:w-8 sm:h-8 text-orange-400 animate-spin"
                    })
                }), g.jsxs("div", {
                    children: [g.jsx("p", {
                        className: "text-orange-300 font-bold text-xs sm:text-sm mb-1",
                        children: "Stream Error"
                    }), g.jsx("p", {
                        className: "text-gray-400 text-xs leading-relaxed max-w-xs",
                        children: y
                    })]
                }), g.jsxs("button", {
                    onClick: L,
                    className: "flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-yellow-500 active:from-orange-700 active:to-orange-600 text-white rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-lg hover:shadow-orange-400/50",
                    children: [g.jsx(ra, {
                        size: 14,
                        className: "sm:w-4 sm:h-4"
                    }), "Retry Stream"]
                })]
            })]
        }), g.jsx("button", {
            onClick: () => F(),
            className: "absolute top-4 right-4 z-50 w-10 h-10 bg-gray-800/80 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-200",
            "aria-label": "Exit fullscreen",
            children: g.jsx(Nu, {
                size: 20,
                className: "text-white"
            })
        })]
    }) : g.jsxs("div", {
        className: "fixed inset-0 z-50 bg-black flex flex-col overflow-y-auto",
        children: [g.jsxs("div", {
            className: "flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 backdrop-blur-md border-b border-orange-500/20 flex-shrink-0 gap-1.5 sm:gap-3",
            children: [g.jsxs("div", {
                className: "flex items-center gap-2 min-w-0 flex-1",
                children: [t.logo && g.jsx("img", {
                    src: t.logo,
                    alt: t.name,
                    className: "h-6 sm:h-8 w-auto object-contain flex-shrink-0"
                }), g.jsx("div", {
                    className: "min-w-0",
                    children: g.jsx("h2", {
                        className: "text-white font-bold text-xs sm:text-sm truncate",
                        children: t.name
                    })
                })]
            }), g.jsxs("div", {
                className: "flex items-center gap-1 sm:gap-2 flex-shrink-0",
                children: [g.jsxs("div", {
                    className: "flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-red-600/30 to-red-500/20 border border-red-500/40 rounded-full text-xs font-bold text-red-300 hidden sm:flex",
                    children: [g.jsx(ul, {
                        size: 12,
                        className: "animate-pulse flex-shrink-0"
                    }), g.jsx("span", {
                        className: "tabular-nums",
                        children: r.toLocaleString()
                    })]
                }), g.jsx("button", {
                    onClick: W,
                    className: "w-7 h-7 sm:w-8 sm:h-8 hover:bg-orange-500/20 active:bg-orange-500/30 rounded-full flex items-center justify-center transition-colors duration-200 border border-orange-500/10 hover:border-orange-500/30 flex-shrink-0",
                    title: "Copy share link",
                    children: g.jsx(dh, {
                        size: 14,
                        className: _ ? "text-orange-300" : "text-orange-400"
                    })
                }), g.jsx("button", {
                    onClick: () => F(),
                    className: "w-7 h-7 sm:w-8 sm:h-8 hover:bg-blue-500/20 active:bg-blue-500/30 rounded-full flex items-center justify-center transition-colors duration-200 border border-blue-500/10 hover:border-blue-500/30 flex-shrink-0",
                    title: "Fullscreen",
                    children: g.jsx(fm, {
                        size: 14,
                        className: "text-blue-400"
                    })
                }), g.jsx("button", {
                    onClick: e,
                    className: "w-7 h-7 sm:w-8 sm:h-8 bg-gray-800/80 hover:bg-red-500 active:bg-red-600 rounded-full flex items-center justify-center transition-all duration-200 border border-gray-700 hover:border-red-500 flex-shrink-0",
                    "aria-label": "Close",
                    children: g.jsx(Nu, {
                        size: 15,
                        className: "text-gray-300 hover:text-white"
                    })
                })]
            })]
        }), g.jsx("div", {
            className: "relative w-full bg-black aspect-video flex-shrink-0",
            children: g.jsxs("div", {
                ref: o,
                className: "shaka-video-container youtube-theme absolute inset-0 w-full h-full",
                "data-shaka-player": !0,
                children: [g.jsx("video", {
                    ref: i,
                    className: "w-full h-full bg-black object-contain",
                    playsInline: !0,
                    preload: "auto"
                }), f && g.jsxs("div", {
                    className: `absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 cursor-pointer backdrop-blur-sm transition-all duration-500 ${h === "playing" ? "opacity-0 pointer-events-none" : "opacity-100"}`,
                    onClick: N,
                    children: [(h === "loading" || h === "retrying") && g.jsxs("div", {
                        className: "relative w-12 h-12 sm:w-14 sm:h-14",
                        children: [g.jsx("div", {
                            className: "absolute inset-0 border-4 border-orange-500/20 rounded-full animate-spin"
                        }), g.jsx("div", {
                            className: "absolute inset-1 border-4 border-transparent border-t-orange-500 rounded-full animate-spin",
                            style: {
                                animationDirection: "reverse",
                                animationDuration: "1.5s"
                            }
                        })]
                    }), h === "ready" && g.jsxs("button", {
                        className: "relative w-14 h-14 rounded-full overflow-hidden group",
                        onClick: N,
                        "aria-label": "Play",
                        children: [g.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 animate-pulse group-hover:from-orange-400 group-hover:to-yellow-400 transition-all"
                        }), g.jsx("div", {
                            className: "absolute inset-1 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                            children: g.jsx("svg", {
                                viewBox: "0 0 24 24",
                                className: "w-5 h-5 fill-orange-400 ml-1 group-hover:fill-orange-300",
                                children: g.jsx("path", {
                                    d: "M8 5v14l11-7z"
                                })
                            })
                        })]
                    }), h !== "error" && g.jsx("p", {
                        className: "text-white/90 text-xs tracking-wide drop-shadow-xl font-medium animate-pulse",
                        children: k
                    })]
                }), h === "error" && g.jsxs("div", {
                    className: "absolute inset-0 z-40 bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm flex flex-col items-center justify-center gap-3 p-4 text-center",
                    children: [g.jsx("div", {
                        className: "w-12 h-12 bg-gradient-to-br from-orange-500/30 to-red-500/20 rounded-full flex items-center justify-center border-2 border-orange-500/40 animate-pulse",
                        children: g.jsx(Tu, {
                            size: 20,
                            className: "text-orange-400 animate-spin"
                        })
                    }), g.jsxs("div", {
                        children: [g.jsx("p", {
                            className: "text-orange-300 font-bold text-xs mb-1",
                            children: "Stream Error"
                        }), g.jsx("p", {
                            className: "text-gray-400 text-xs leading-relaxed max-w-xs",
                            children: y
                        })]
                    }), g.jsxs("button", {
                        onClick: L,
                        className: "flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-yellow-500 text-white rounded-full text-xs font-bold transition-all duration-300 shadow-lg shadow-orange-500/30",
                        children: [g.jsx(ra, {
                            size: 12
                        }), "Retry"]
                    })]
                })]
            })
        }), g.jsx($v, {
            channelId: t.id,
            isEmbedded: !0
        }), g.jsx("div", {
            className: "text-center py-2 text-xs text-gray-500 flex-shrink-0",
            children: "Press ESC or click X to close"
        })]
    })
}
function Dv({liveViewers: t, peakViewers: e, totalViews: n}) {
    const [r,s] = j.useState(0)
      , [i,o] = j.useState(0)
      , [a,l] = j.useState(0);
    return j.useEffect( () => {
        ( (c, d, h, v=600) => {
            const y = Date.now()
              , w = d - c
              , k = () => {
                const m = Date.now() - y
                  , f = Math.min(m / v, 1);
                h(Math.floor(c + w * f)),
                f < 1 && requestAnimationFrame(k)
            }
            ;
            k()
        }
        )(r, t, s)
    }
    , [t]),
    j.useEffect( () => {
        ( (c, d, h, v=800) => {
            const y = Date.now()
              , w = d - c
              , k = () => {
                const m = Date.now() - y
                  , f = Math.min(m / v, 1);
                h(Math.floor(c + w * f)),
                f < 1 && requestAnimationFrame(k)
            }
            ;
            k()
        }
        )(i, e, o)
    }
    , [e]),
    j.useEffect( () => {
        ( (c, d, h, v=1e3) => {
            const y = Date.now()
              , w = d - c
              , k = () => {
                const m = Date.now() - y
                  , f = Math.min(m / v, 1);
                h(Math.floor(c + w * f)),
                f < 1 && requestAnimationFrame(k)
            }
            ;
            k()
        }
        )(a, n, l)
    }
    , [n]),
    g.jsxs("div", {
        className: "grid grid-cols-3 gap-2 sm:gap-3",
        children: [g.jsxs("div", {
            className: "relative group",
            children: [g.jsx("div", {
                className: "absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200"
            }), g.jsxs("div", {
                className: "relative bg-gradient-to-br from-gray-900 to-gray-950 border border-red-500/30 rounded-lg p-3 sm:p-4 overflow-hidden",
                children: [g.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                }), g.jsxs("div", {
                    className: "relative flex flex-col items-center gap-1.5 sm:gap-2",
                    children: [g.jsxs("div", {
                        className: "flex items-center gap-1.5 text-red-400",
                        children: [g.jsx(ul, {
                            size: 14,
                            className: "sm:w-4 sm:h-4 animate-pulse"
                        }), g.jsx("span", {
                            className: "text-xs sm:text-sm font-bold",
                            children: "LIVE"
                        })]
                    }), g.jsx("div", {
                        className: "text-2xl sm:text-3xl font-black text-red-400 tabular-nums",
                        children: r.toLocaleString()
                    }), g.jsx("span", {
                        className: "text-xs text-gray-500 font-medium",
                        children: "watching now"
                    })]
                })]
            })]
        }), g.jsxs("div", {
            className: "relative group",
            children: [g.jsx("div", {
                className: "absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200"
            }), g.jsxs("div", {
                className: "relative bg-gradient-to-br from-gray-900 to-gray-950 border border-yellow-500/30 rounded-lg p-3 sm:p-4 overflow-hidden",
                children: [g.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                }), g.jsxs("div", {
                    className: "relative flex flex-col items-center gap-1.5 sm:gap-2",
                    children: [g.jsxs("div", {
                        className: "flex items-center gap-1.5 text-yellow-400",
                        children: [g.jsx(hh, {
                            size: 14,
                            className: "sm:w-4 sm:h-4"
                        }), g.jsx("span", {
                            className: "text-xs sm:text-sm font-bold",
                            children: "PEAK"
                        })]
                    }), g.jsx("div", {
                        className: "text-2xl sm:text-3xl font-black text-yellow-400 tabular-nums",
                        children: i.toLocaleString()
                    }), g.jsx("span", {
                        className: "text-xs text-gray-500 font-medium",
                        children: "peak viewers"
                    })]
                })]
            })]
        }), g.jsxs("div", {
            className: "relative group",
            children: [g.jsx("div", {
                className: "absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200"
            }), g.jsxs("div", {
                className: "relative bg-gradient-to-br from-gray-900 to-gray-950 border border-orange-500/30 rounded-lg p-3 sm:p-4 overflow-hidden",
                children: [g.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                }), g.jsxs("div", {
                    className: "relative flex flex-col items-center gap-1.5 sm:gap-2",
                    children: [g.jsxs("div", {
                        className: "flex items-center gap-1.5 text-orange-400",
                        children: [g.jsx(ym, {
                            size: 14,
                            className: "sm:w-4 sm:h-4"
                        }), g.jsx("span", {
                            className: "text-xs sm:text-sm font-bold",
                            children: "TODAY"
                        })]
                    }), g.jsx("div", {
                        className: "text-2xl sm:text-3xl font-black text-orange-400 tabular-nums",
                        children: a.toLocaleString()
                    }), g.jsx("span", {
                        className: "text-xs text-gray-500 font-medium",
                        children: "total views"
                    })]
                })]
            })]
        })]
    })
}
const Mv = "https://binge-jiotv.pages.dev/data/id.json";
function Uv() {
    const [t,e] = j.useState([])
      , [n,r] = j.useState(!0)
      , [s,i] = j.useState(null);
    return j.useEffect( () => {
        fetch(Mv).then(o => {
            if (!o.ok)
                throw new Error(`HTTP ${o.status}`);
            return o.json()
        }
        ).then(o => {
            let a = [];
            if (Array.isArray(o) ? a = o : o && typeof o == "object" && "channels"in o && Array.isArray(o.channels) && (a = o.channels),
            a.length === 0)
                throw new Error("No channels found in response");
            e(a),
            r(!1)
        }
        ).catch(o => {
            console.error("Failed to load channels:", o),
            i("Failed to load channels. Please try again."),
            r(!1)
        }
        )
    }
    , []),
    {
        channels: t,
        loading: n,
        error: s
    }
}
const ur = vl("https://vflvgyobnsfbszhadxfb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmbHZneW9ibnNmYnN6aGFkeGZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2ODk3MTMsImV4cCI6MjA5MjI2NTcxM30.Ao6wFZ-pLoKQ0eNY4iOUjXzvgDtLlewLHEyaG4Kp9tA")
  , zv = () => {
    let t = sessionStorage.getItem("ny-cricket-session");
    return t || (t = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    sessionStorage.setItem("ny-cricket-session", t)),
    t
}
;
function Fv() {
    const [t,e] = j.useState({})
      , n = j.useRef(new Set);
    j.useEffect( () => {
        r()
    }
    , []);
    const r = async () => {
        try {
            const {data: o, error: a} = await ur.from("daily_channel_stats").select("channel_id, total_views").eq("view_date", new Date().toISOString().split("T")[0]);
            if (a) {
                console.error("Failed to load view counts:", a);
                return
            }
            const l = {};
            o == null || o.forEach(u => {
                l[u.channel_id] = u.total_views || 0
            }
            ),
            e(l)
        } catch (o) {
            console.error("Failed to load view counts:", o)
        }
    }
    ;
    return {
        viewCounts: t,
        trackView: async (o, a) => {
            if (!n.current.has(o)) {
                n.current.add(o);
                try {
                    const l = zv()
                      , u = new Date().toISOString().split("T")[0];
                    await ur.from("channel_views").insert({
                        channel_id: o,
                        channel_name: a,
                        session_id: l,
                        viewed_at: new Date().toISOString()
                    });
                    const {data: c, error: d} = await ur.from("daily_channel_stats").select("id, total_views").eq("channel_id", o).eq("view_date", u).maybeSingle();
                    if (d && d.code !== "PGRST116") {
                        console.error("Fetch error:", d);
                        return
                    }
                    if (c) {
                        const h = (c.total_views || 0) + 1;
                        await ur.from("daily_channel_stats").update({
                            total_views: h
                        }).eq("id", c.id),
                        e(v => ({
                            ...v,
                            [o]: h
                        }))
                    } else
                        await ur.from("daily_channel_stats").insert({
                            channel_id: o,
                            view_date: u,
                            total_views: 1,
                            unique_viewers: 1
                        }),
                        e(h => ({
                            ...h,
                            [o]: 1
                        }))
                } catch (l) {
                    console.error("Failed to track view:", l),
                    n.current.delete(o)
                }
            }
        }
        ,
        loadViewCounts: async () => {
            await r()
        }
    }
}
const nt = vl("https://vflvgyobnsfbszhadxfb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmbHZneW9ibnNmYnN6aGFkeGZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2ODk3MTMsImV4cCI6MjA5MjI2NTcxM30.Ao6wFZ-pLoKQ0eNY4iOUjXzvgDtLlewLHEyaG4Kp9tA")
  , Bv = () => {
    let t = sessionStorage.getItem("ny-cricket-viewer-session");
    return t || (t = `viewer-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    sessionStorage.setItem("ny-cricket-viewer-session", t)),
    t
}
  , Wv = () => {
    const t = window.innerWidth;
    return t < 768 ? "mobile" : t < 1024 ? "tablet" : "desktop"
}
;
function Vv() {
    const [t,e] = j.useState({})
      , [n,r] = j.useState({})
      , [s,i] = j.useState(!1)
      , o = j.useRef(null)
      , a = j.useRef("")
      , l = j.useRef(Bv());
    j.useEffect( () => {
        u();
        const h = setInterval(u, 3e3);
        return () => clearInterval(h)
    }
    , []);
    const u = async () => {
        try {
            const {data: h, error: v} = await nt.from("channel_stats_live").select("channel_id, current_viewers, peak_viewers");
            if (v) {
                console.error("Failed to load live stats:", v);
                return
            }
            const y = {}
              , w = {};
            h == null || h.forEach(k => {
                y[k.channel_id] = k.current_viewers || 0,
                w[k.channel_id] = k.peak_viewers || 0
            }
            ),
            e(y),
            r(w)
        } catch (h) {
            console.error("Error loading live stats:", h)
        }
    }
    ;
    return {
        liveViewers: t,
        peakViewers: n,
        isWatching: s,
        startWatching: async h => {
            a.current = h;
            const v = l.current
              , y = Wv();
            try {
                await nt.from("active_viewers").insert({
                    channel_id: h,
                    session_id: v,
                    device_type: y
                });
                const {data: w} = await nt.from("channel_stats_live").select("current_viewers, peak_viewers").eq("channel_id", h).maybeSingle();
                if (w) {
                    const k = (w.current_viewers || 0) + 1
                      , m = Math.max(w.peak_viewers || 0, k);
                    await nt.from("channel_stats_live").update({
                        current_viewers: k,
                        peak_viewers: m
                    }).eq("channel_id", h),
                    e(f => ({
                        ...f,
                        [h]: k
                    })),
                    r(f => ({
                        ...f,
                        [h]: m
                    }))
                } else
                    await nt.from("channel_stats_live").insert({
                        channel_id: h,
                        current_viewers: 1,
                        peak_viewers: 1
                    }),
                    e(k => ({
                        ...k,
                        [h]: 1
                    })),
                    r(k => ({
                        ...k,
                        [h]: 1
                    }));
                i(!0),
                o.current && clearInterval(o.current),
                o.current = setInterval(async () => {
                    try {
                        await nt.from("active_viewers").update({
                            last_heartbeat: new Date().toISOString()
                        }).eq("session_id", v)
                    } catch (k) {
                        console.error("Heartbeat failed:", k)
                    }
                }
                , 2e4)
            } catch (w) {
                console.error("Failed to start watching:", w)
            }
        }
        ,
        stopWatching: async () => {
            const h = l.current
              , v = a.current;
            o.current && (clearInterval(o.current),
            o.current = null);
            try {
                const {data: y} = await nt.from("active_viewers").select("id").eq("session_id", h).maybeSingle();
                if (y && await nt.from("active_viewers").delete().eq("id", y.id),
                v) {
                    const {data: w} = await nt.from("channel_stats_live").select("current_viewers").eq("channel_id", v).maybeSingle();
                    w && w.current_viewers > 0 && (await nt.from("channel_stats_live").update({
                        current_viewers: w.current_viewers - 1
                    }).eq("channel_id", v),
                    e(k => ({
                        ...k,
                        [v]: Math.max(0, (k[v] || 1) - 1)
                    })))
                }
                i(!1),
                a.current = ""
            } catch (y) {
                console.error("Failed to stop watching:", y)
            }
        }
        ,
        loadLiveStats: u
    }
}
function Hv() {
    const {channels: t, loading: e, error: n} = Uv()
      , {viewCounts: r, trackView: s} = Fv()
      , {liveViewers: i, peakViewers: o, startWatching: a, stopWatching: l} = Vv()
      , [u,c] = j.useState(null)
      , d = j.useRef(!1);
    j.useEffect( () => {
        const f = new URLSearchParams(window.location.search).get("channel");
        if (f && t.length > 0 && !d.current) {
            const p = t.find(_ => _.id === f);
            p && (d.current = !0,
            c(p),
            s(p.id, p.name),
            a(p.id))
        }
    }
    , [t, s, a]);
    const h = m => {
        (u == null ? void 0 : u.id) !== m.id && (l(),
        c(m),
        window.history.replaceState(null, "", `?channel=${m.id}`),
        a(m.id))
    }
      , v = () => {
        u && s(u.id, u.name)
    }
      , y = () => {
        l(),
        c(null),
        window.history.replaceState(null, "", window.location.pathname)
    }
      , k = u ? {
        views: r[u.id] || 0,
        live: i[u.id] || 0,
        peak: o[u.id] || 0
    } : {
        views: 0,
        live: 0,
        peak: 0
    };
    return g.jsxs("div", {
        className: "min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white font-inter overflow-x-hidden",
        children: [g.jsxs("div", {
            className: "relative",
            children: [g.jsxs("div", {
                className: "fixed inset-0 overflow-hidden pointer-events-none opacity-30 z-0",
                children: [g.jsx("div", {
                    className: "absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full blur-3xl mix-blend-multiply",
                    style: {
                        animation: "float 12s ease-in-out infinite"
                    }
                }), g.jsx("div", {
                    className: "absolute top-1/3 -left-32 w-64 h-64 bg-orange-600/40 rounded-full blur-3xl mix-blend-multiply animate-pulse",
                    style: {
                        animationDuration: "8s"
                    }
                }), g.jsx("div", {
                    className: "absolute bottom-0 right-1/4 w-72 h-72 bg-yellow-600/20 rounded-full blur-3xl mix-blend-multiply animate-pulse",
                    style: {
                        animationDuration: "12s"
                    }
                })]
            }), g.jsx(_m, {}), g.jsxs("main", {
                className: "relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-12 sm:pb-16 pt-4 sm:pt-8 lg:pt-12 z-10",
                children: [g.jsxs("div", {
                    className: "mb-6 sm:mb-8 lg:mb-12 animate-fade-in",
                    children: [g.jsxs("div", {
                        className: "flex flex-col gap-2 sm:gap-3 mb-4 sm:mb-6",
                        children: [g.jsx("h2", {
                            className: "text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight",
                            children: g.jsx("span", {
                                className: "bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent",
                                children: "Live Cricket"
                            })
                        }), g.jsx("p", {
                            className: "text-gray-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl",
                            children: "Watch high-quality live streams. Share with friends and see real-time viewer counts."
                        })]
                    }), g.jsx(Dv, {
                        liveViewers: Object.values(i).reduce( (m, f) => m + f, 0),
                        peakViewers: Math.max(0, ...Object.values(o)),
                        totalViews: Object.values(r).reduce( (m, f) => m + f, 0)
                    })]
                }), g.jsx(xm, {
                    channels: t,
                    loading: e,
                    error: n,
                    onSelect: h,
                    viewCounts: r,
                    liveViewers: i,
                    peakViewers: o
                })]
            })]
        }), u && g.jsx(Lv, {
            channel: u,
            onClose: y,
            onViewTrack: v,
            currentViewCount: k.live,
            totalViews: k.views
        })]
    })
}
ch(document.getElementById("root")).render(g.jsx(j.StrictMode, {
    children: g.jsx(Hv, {})
}));
