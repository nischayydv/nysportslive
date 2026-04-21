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
var Fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Qu = {
    exports: {}
}
  , li = {}
  , Yu = {
    exports: {}
}
  , L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr = Symbol.for("react.element")
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
var Xu = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Zu = Object.assign
  , ec = {};
function qn(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = ec,
    this.updater = n || Xu
}
qn.prototype.isReactComponent = {};
qn.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
}
;
qn.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
}
;
function tc() {}
tc.prototype = qn.prototype;
function ma(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = ec,
    this.updater = n || Xu
}
var ga = ma.prototype = new tc;
ga.constructor = ma;
Zu(ga, qn.prototype);
ga.isPureReactComponent = !0;
var wl = Array.isArray
  , nc = Object.prototype.hasOwnProperty
  , va = {
    current: null
}
  , rc = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function sc(t, e, n) {
    var r, s = {}, i = null, o = null;
    if (e != null)
        for (r in e.ref !== void 0 && (o = e.ref),
        e.key !== void 0 && (i = "" + e.key),
        e)
            nc.call(e, r) && !rc.hasOwnProperty(r) && (s[r] = e[r]);
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
        $$typeof: Vr,
        type: t,
        key: i,
        ref: o,
        props: s,
        _owner: va.current
    }
}
function Gh(t, e) {
    return {
        $$typeof: Vr,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner
    }
}
function ya(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Vr
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
function Ni(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? Jh("" + t.key) : e.toString(36)
}
function xs(t, e, n, r, s) {
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
            case Vr:
            case Dh:
                o = !0
            }
        }
    if (o)
        return o = t,
        s = s(o),
        t = r === "" ? "." + Ni(o, 0) : r,
        wl(s) ? (n = "",
        t != null && (n = t.replace(_l, "$&/") + "/"),
        xs(s, e, n, "", function(u) {
            return u
        })) : s != null && (ya(s) && (s = Gh(s, n + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(_l, "$&/") + "/") + t)),
        e.push(s)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    wl(t))
        for (var a = 0; a < t.length; a++) {
            i = t[a];
            var l = r + Ni(i, a);
            o += xs(i, e, n, l, s)
        }
    else if (l = Kh(t),
    typeof l == "function")
        for (t = l.call(t),
        a = 0; !(i = t.next()).done; )
            i = i.value,
            l = r + Ni(i, a++),
            o += xs(i, e, n, l, s);
    else if (i === "object")
        throw e = String(t),
        Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function Zr(t, e, n) {
    if (t == null)
        return t;
    var r = []
      , s = 0;
    return xs(t, r, "", "", function(i) {
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
var ye = {
    current: null
}
  , Ss = {
    transition: null
}
  , Yh = {
    ReactCurrentDispatcher: ye,
    ReactCurrentBatchConfig: Ss,
    ReactCurrentOwner: va
};
function ic() {
    throw Error("act(...) is not supported in production builds of React.")
}
L.Children = {
    map: Zr,
    forEach: function(t, e, n) {
        Zr(t, function() {
            e.apply(this, arguments)
        }, n)
    },
    count: function(t) {
        var e = 0;
        return Zr(t, function() {
            e++
        }),
        e
    },
    toArray: function(t) {
        return Zr(t, function(e) {
            return e
        }) || []
    },
    only: function(t) {
        if (!ya(t))
            throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
};
L.Component = qn;
L.Fragment = Mh;
L.Profiler = zh;
L.PureComponent = ma;
L.StrictMode = Uh;
L.Suspense = Vh;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yh;
L.act = ic;
L.cloneElement = function(t, e, n) {
    if (t == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var r = Zu({}, t.props)
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
            nc.call(e, l) && !rc.hasOwnProperty(l) && (r[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l])
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
        $$typeof: Vr,
        type: t.type,
        key: s,
        ref: i,
        props: r,
        _owner: o
    }
}
;
L.createContext = function(t) {
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
L.createElement = sc;
L.createFactory = function(t) {
    var e = sc.bind(null, t);
    return e.type = t,
    e
}
;
L.createRef = function() {
    return {
        current: null
    }
}
;
L.forwardRef = function(t) {
    return {
        $$typeof: Wh,
        render: t
    }
}
;
L.isValidElement = ya;
L.lazy = function(t) {
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
L.memo = function(t, e) {
    return {
        $$typeof: Hh,
        type: t,
        compare: e === void 0 ? null : e
    }
}
;
L.startTransition = function(t) {
    var e = Ss.transition;
    Ss.transition = {};
    try {
        t()
    } finally {
        Ss.transition = e
    }
}
;
L.unstable_act = ic;
L.useCallback = function(t, e) {
    return ye.current.useCallback(t, e)
}
;
L.useContext = function(t) {
    return ye.current.useContext(t)
}
;
L.useDebugValue = function() {}
;
L.useDeferredValue = function(t) {
    return ye.current.useDeferredValue(t)
}
;
L.useEffect = function(t, e) {
    return ye.current.useEffect(t, e)
}
;
L.useId = function() {
    return ye.current.useId()
}
;
L.useImperativeHandle = function(t, e, n) {
    return ye.current.useImperativeHandle(t, e, n)
}
;
L.useInsertionEffect = function(t, e) {
    return ye.current.useInsertionEffect(t, e)
}
;
L.useLayoutEffect = function(t, e) {
    return ye.current.useLayoutEffect(t, e)
}
;
L.useMemo = function(t, e) {
    return ye.current.useMemo(t, e)
}
;
L.useReducer = function(t, e, n) {
    return ye.current.useReducer(t, e, n)
}
;
L.useRef = function(t) {
    return ye.current.useRef(t)
}
;
L.useState = function(t) {
    return ye.current.useState(t)
}
;
L.useSyncExternalStore = function(t, e, n) {
    return ye.current.useSyncExternalStore(t, e, n)
}
;
L.useTransition = function() {
    return ye.current.useTransition()
}
;
L.version = "18.3.1";
Yu.exports = L;
var C = Yu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xh = C
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
function oc(t, e, n) {
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
li.jsx = oc;
li.jsxs = oc;
Qu.exports = li;
var g = Qu.exports
  , ac = {
    exports: {}
}
  , Ae = {}
  , lc = {
    exports: {}
}
  , uc = {};
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
    function e(T, R) {
        var O = T.length;
        T.push(R);
        e: for (; 0 < O; ) {
            var M = O - 1 >>> 1
              , Z = T[M];
            if (0 < s(Z, R))
                T[M] = R,
                T[O] = Z,
                O = M;
            else
                break e
        }
    }
    function n(T) {
        return T.length === 0 ? null : T[0]
    }
    function r(T) {
        if (T.length === 0)
            return null;
        var R = T[0]
          , O = T.pop();
        if (O !== R) {
            T[0] = O;
            e: for (var M = 0, Z = T.length, Le = Z >>> 1; M < Le; ) {
                var ee = 2 * (M + 1) - 1
                  , wt = T[ee]
                  , Ve = ee + 1
                  , Xr = T[Ve];
                if (0 > s(wt, O))
                    Ve < Z && 0 > s(Xr, wt) ? (T[M] = Xr,
                    T[Ve] = O,
                    M = Ve) : (T[M] = wt,
                    T[ee] = O,
                    M = ee);
                else if (Ve < Z && 0 > s(Xr, O))
                    T[M] = Xr,
                    T[Ve] = O,
                    M = Ve;
                else
                    break e
            }
        }
        return R
    }
    function s(T, R) {
        var O = T.sortIndex - R.sortIndex;
        return O !== 0 ? O : T.id - R.id
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
      , f = 3
      , v = !1
      , y = !1
      , w = !1
      , k = typeof setTimeout == "function" ? setTimeout : null
      , p = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(T) {
        for (var R = n(u); R !== null; ) {
            if (R.callback === null)
                r(u);
            else if (R.startTime <= T)
                r(u),
                R.sortIndex = R.expirationTime,
                e(l, R);
            else
                break;
            R = n(u)
        }
    }
    function _(T) {
        if (w = !1,
        m(T),
        !y)
            if (n(l) !== null)
                y = !0,
                H(j);
            else {
                var R = n(u);
                R !== null && ke(_, R.startTime - T)
            }
    }
    function j(T, R) {
        y = !1,
        w && (w = !1,
        p(b),
        b = -1),
        v = !0;
        var O = f;
        try {
            for (m(R),
            d = n(l); d !== null && (!(d.expirationTime > R) || T && !z()); ) {
                var M = d.callback;
                if (typeof M == "function") {
                    d.callback = null,
                    f = d.priorityLevel;
                    var Z = M(d.expirationTime <= R);
                    R = t.unstable_now(),
                    typeof Z == "function" ? d.callback = Z : d === n(l) && r(l),
                    m(R)
                } else
                    r(l);
                d = n(l)
            }
            if (d !== null)
                var Le = !0;
            else {
                var ee = n(u);
                ee !== null && ke(_, ee.startTime - R),
                Le = !1
            }
            return Le
        } finally {
            d = null,
            f = O,
            v = !1
        }
    }
    var E = !1
      , S = null
      , b = -1
      , A = 5
      , N = -1;
    function z() {
        return !(t.unstable_now() - N < A)
    }
    function Te() {
        if (S !== null) {
            var T = t.unstable_now();
            N = T;
            var R = !0;
            try {
                R = S(!0, T)
            } finally {
                R ? pe() : (E = !1,
                S = null)
            }
        } else
            E = !1
    }
    var pe;
    if (typeof h == "function")
        pe = function() {
            h(Te)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var dn = new MessageChannel
          , Pi = dn.port2;
        dn.port1.onmessage = Te,
        pe = function() {
            Pi.postMessage(null)
        }
    } else
        pe = function() {
            k(Te, 0)
        }
        ;
    function H(T) {
        S = T,
        E || (E = !0,
        pe())
    }
    function ke(T, R) {
        b = k(function() {
            T(t.unstable_now())
        }, R)
    }
    t.unstable_IdlePriority = 5,
    t.unstable_ImmediatePriority = 1,
    t.unstable_LowPriority = 4,
    t.unstable_NormalPriority = 3,
    t.unstable_Profiling = null,
    t.unstable_UserBlockingPriority = 2,
    t.unstable_cancelCallback = function(T) {
        T.callback = null
    }
    ,
    t.unstable_continueExecution = function() {
        y || v || (y = !0,
        H(j))
    }
    ,
    t.unstable_forceFrameRate = function(T) {
        0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < T ? Math.floor(1e3 / T) : 5
    }
    ,
    t.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    t.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    t.unstable_next = function(T) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var R = 3;
            break;
        default:
            R = f
        }
        var O = f;
        f = R;
        try {
            return T()
        } finally {
            f = O
        }
    }
    ,
    t.unstable_pauseExecution = function() {}
    ,
    t.unstable_requestPaint = function() {}
    ,
    t.unstable_runWithPriority = function(T, R) {
        switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            T = 3
        }
        var O = f;
        f = T;
        try {
            return R()
        } finally {
            f = O
        }
    }
    ,
    t.unstable_scheduleCallback = function(T, R, O) {
        var M = t.unstable_now();
        switch (typeof O == "object" && O !== null ? (O = O.delay,
        O = typeof O == "number" && 0 < O ? M + O : M) : O = M,
        T) {
        case 1:
            var Z = -1;
            break;
        case 2:
            Z = 250;
            break;
        case 5:
            Z = 1073741823;
            break;
        case 4:
            Z = 1e4;
            break;
        default:
            Z = 5e3
        }
        return Z = O + Z,
        T = {
            id: c++,
            callback: R,
            priorityLevel: T,
            startTime: O,
            expirationTime: Z,
            sortIndex: -1
        },
        O > M ? (T.sortIndex = O,
        e(u, T),
        n(l) === null && T === n(u) && (w ? (p(b),
        b = -1) : w = !0,
        ke(_, O - M))) : (T.sortIndex = Z,
        e(l, T),
        y || v || (y = !0,
        H(j))),
        T
    }
    ,
    t.unstable_shouldYield = z,
    t.unstable_wrapCallback = function(T) {
        var R = f;
        return function() {
            var O = f;
            f = R;
            try {
                return T.apply(this, arguments)
            } finally {
                f = O
            }
        }
    }
}
)(uc);
lc.exports = uc;
var sf = lc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var of = C
  , Ie = sf;
function x(t) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var cc = new Set
  , jr = {};
function ln(t, e) {
    Mn(t, e),
    Mn(t + "Capture", e)
}
function Mn(t, e) {
    for (jr[t] = e,
    t = 0; t < e.length; t++)
        cc.add(e[t])
}
var pt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , ho = Object.prototype.hasOwnProperty
  , af = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , kl = {}
  , xl = {};
function lf(t) {
    return ho.call(xl, t) ? !0 : ho.call(kl, t) ? !1 : af.test(t) ? xl[t] = !0 : (kl[t] = !0,
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
function we(t, e, n, r, s, i, o) {
    this.acceptsBooleans = e === 2 || e === 3 || e === 4,
    this.attributeName = r,
    this.attributeNamespace = s,
    this.mustUseProperty = n,
    this.propertyName = t,
    this.type = e,
    this.sanitizeURL = i,
    this.removeEmptyString = o
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    ue[t] = new we(t,0,!1,t,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var e = t[0];
    ue[e] = new we(e,1,!1,t[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    ue[t] = new we(t,2,!1,t.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    ue[t] = new we(t,2,!1,t,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    ue[t] = new we(t,3,!1,t.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
    ue[t] = new we(t,3,!0,t,null,!1,!1)
});
["capture", "download"].forEach(function(t) {
    ue[t] = new we(t,4,!1,t,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(t) {
    ue[t] = new we(t,6,!1,t,null,!1,!1)
});
["rowSpan", "start"].forEach(function(t) {
    ue[t] = new we(t,5,!1,t.toLowerCase(),null,!1,!1)
});
var wa = /[\-:]([a-z])/g;
function _a(t) {
    return t[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var e = t.replace(wa, _a);
    ue[e] = new we(e,1,!1,t,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var e = t.replace(wa, _a);
    ue[e] = new we(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var e = t.replace(wa, _a);
    ue[e] = new we(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(t) {
    ue[t] = new we(t,1,!1,t.toLowerCase(),null,!1,!1)
});
ue.xlinkHref = new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(t) {
    ue[t] = new we(t,1,!1,t.toLowerCase(),null,!0,!0)
});
function ka(t, e, n, r) {
    var s = ue.hasOwnProperty(e) ? ue[e] : null;
    (s !== null ? s.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (cf(e, n, s, r) && (n = null),
    r || s === null ? lf(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : s.mustUseProperty ? t[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (e = s.attributeName,
    r = s.attributeNamespace,
    n === null ? t.removeAttribute(e) : (s = s.type,
    n = s === 3 || s === 4 && n === !0 ? "" : "" + n,
    r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
}
var yt = of.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , es = Symbol.for("react.element")
  , _n = Symbol.for("react.portal")
  , kn = Symbol.for("react.fragment")
  , xa = Symbol.for("react.strict_mode")
  , fo = Symbol.for("react.profiler")
  , dc = Symbol.for("react.provider")
  , hc = Symbol.for("react.context")
  , Sa = Symbol.for("react.forward_ref")
  , po = Symbol.for("react.suspense")
  , mo = Symbol.for("react.suspense_list")
  , Ea = Symbol.for("react.memo")
  , St = Symbol.for("react.lazy")
  , fc = Symbol.for("react.offscreen")
  , Sl = Symbol.iterator;
function Yn(t) {
    return t === null || typeof t != "object" ? null : (t = Sl && t[Sl] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var J = Object.assign, Oi;
function ur(t) {
    if (Oi === void 0)
        try {
            throw Error()
        } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/);
            Oi = e && e[1] || ""
        }
    return `
` + Oi + t
}
var Ri = !1;
function Ii(t, e) {
    if (!t || Ri)
        return "";
    Ri = !0;
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
        Ri = !1,
        Error.prepareStackTrace = n
    }
    return (t = t ? t.displayName || t.name : "") ? ur(t) : ""
}
function df(t) {
    switch (t.tag) {
    case 5:
        return ur(t.type);
    case 16:
        return ur("Lazy");
    case 13:
        return ur("Suspense");
    case 19:
        return ur("SuspenseList");
    case 0:
    case 2:
    case 15:
        return t = Ii(t.type, !1),
        t;
    case 11:
        return t = Ii(t.type.render, !1),
        t;
    case 1:
        return t = Ii(t.type, !0),
        t;
    default:
        return ""
    }
}
function go(t) {
    if (t == null)
        return null;
    if (typeof t == "function")
        return t.displayName || t.name || null;
    if (typeof t == "string")
        return t;
    switch (t) {
    case kn:
        return "Fragment";
    case _n:
        return "Portal";
    case fo:
        return "Profiler";
    case xa:
        return "StrictMode";
    case po:
        return "Suspense";
    case mo:
        return "SuspenseList"
    }
    if (typeof t == "object")
        switch (t.$$typeof) {
        case hc:
            return (t.displayName || "Context") + ".Consumer";
        case dc:
            return (t._context.displayName || "Context") + ".Provider";
        case Sa:
            var e = t.render;
            return t = t.displayName,
            t || (t = e.displayName || e.name || "",
            t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
            t;
        case Ea:
            return e = t.displayName || null,
            e !== null ? e : go(t.type) || "Memo";
        case St:
            e = t._payload,
            t = t._init;
            try {
                return go(t(e))
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
        return go(e);
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
function pc(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}
function ff(t) {
    var e = pc(t) ? "checked" : "value"
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
function ts(t) {
    t._valueTracker || (t._valueTracker = ff(t))
}
function mc(t) {
    if (!t)
        return !1;
    var e = t._valueTracker;
    if (!e)
        return !0;
    var n = e.getValue()
      , r = "";
    return t && (r = pc(t) ? t.checked ? "true" : "false" : t.value),
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
function vo(t, e) {
    var n = e.checked;
    return J({}, e, {
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
function gc(t, e) {
    e = e.checked,
    e != null && ka(t, "checked", e, !1)
}
function yo(t, e) {
    gc(t, e);
    var n = Mt(e.value)
      , r = e.type;
    if (n != null)
        r === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
    else if (r === "submit" || r === "reset") {
        t.removeAttribute("value");
        return
    }
    e.hasOwnProperty("value") ? wo(t, e.type, n) : e.hasOwnProperty("defaultValue") && wo(t, e.type, Mt(e.defaultValue)),
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
function wo(t, e, n) {
    (e !== "number" || Ls(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
}
var cr = Array.isArray;
function Rn(t, e, n, r) {
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
function _o(t, e) {
    if (e.dangerouslySetInnerHTML != null)
        throw Error(x(91));
    return J({}, e, {
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
            if (cr(n)) {
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
function vc(t, e) {
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
function yc(t) {
    switch (t) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function ko(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? yc(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
}
var ns, wc = function(t) {
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
        for (ns = ns || document.createElement("div"),
        ns.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
        e = ns.firstChild; t.firstChild; )
            t.removeChild(t.firstChild);
        for (; e.firstChild; )
            t.appendChild(e.firstChild)
    }
});
function Cr(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return
        }
    }
    t.textContent = e
}
var pr = {
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
Object.keys(pr).forEach(function(t) {
    pf.forEach(function(e) {
        e = e + t.charAt(0).toUpperCase() + t.substring(1),
        pr[e] = pr[t]
    })
});
function _c(t, e, n) {
    return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || pr.hasOwnProperty(t) && pr[t] ? ("" + e).trim() : e + "px"
}
function kc(t, e) {
    t = t.style;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , s = _c(n, e[n], r);
            n === "float" && (n = "cssFloat"),
            r ? t.setProperty(n, s) : t[n] = s
        }
}
var mf = J({
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
function xo(t, e) {
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
function So(t, e) {
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
var Eo = null;
function ba(t) {
    return t = t.target || t.srcElement || window,
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
}
var bo = null
  , In = null
  , An = null;
function Tl(t) {
    if (t = Kr(t)) {
        if (typeof bo != "function")
            throw Error(x(280));
        var e = t.stateNode;
        e && (e = fi(e),
        bo(t.stateNode, t.type, e))
    }
}
function xc(t) {
    In ? An ? An.push(t) : An = [t] : In = t
}
function Sc() {
    if (In) {
        var t = In
          , e = An;
        if (An = In = null,
        Tl(t),
        e)
            for (t = 0; t < e.length; t++)
                Tl(e[t])
    }
}
function Ec(t, e) {
    return t(e)
}
function bc() {}
var Ai = !1;
function jc(t, e, n) {
    if (Ai)
        return t(e, n);
    Ai = !0;
    try {
        return Ec(t, e, n)
    } finally {
        Ai = !1,
        (In !== null || An !== null) && (bc(),
        Sc())
    }
}
function Tr(t, e) {
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
var jo = !1;
if (pt)
    try {
        var Xn = {};
        Object.defineProperty(Xn, "passive", {
            get: function() {
                jo = !0
            }
        }),
        window.addEventListener("test", Xn, Xn),
        window.removeEventListener("test", Xn, Xn)
    } catch {
        jo = !1
    }
function gf(t, e, n, r, s, i, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var mr = !1
  , Ds = null
  , Ms = !1
  , Co = null
  , vf = {
    onError: function(t) {
        mr = !0,
        Ds = t
    }
};
function yf(t, e, n, r, s, i, o, a, l) {
    mr = !1,
    Ds = null,
    gf.apply(vf, arguments)
}
function wf(t, e, n, r, s, i, o, a, l) {
    if (yf.apply(this, arguments),
    mr) {
        if (mr) {
            var u = Ds;
            mr = !1,
            Ds = null
        } else
            throw Error(x(198));
        Ms || (Ms = !0,
        Co = u)
    }
}
function un(t) {
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
function Cc(t) {
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
    if (un(t) !== t)
        throw Error(x(188))
}
function _f(t) {
    var e = t.alternate;
    if (!e) {
        if (e = un(t),
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
function Tc(t) {
    return t = _f(t),
    t !== null ? Pc(t) : null
}
function Pc(t) {
    if (t.tag === 5 || t.tag === 6)
        return t;
    for (t = t.child; t !== null; ) {
        var e = Pc(t);
        if (e !== null)
            return e;
        t = t.sibling
    }
    return null
}
var Nc = Ie.unstable_scheduleCallback
  , Nl = Ie.unstable_cancelCallback
  , kf = Ie.unstable_shouldYield
  , xf = Ie.unstable_requestPaint
  , Y = Ie.unstable_now
  , Sf = Ie.unstable_getCurrentPriorityLevel
  , ja = Ie.unstable_ImmediatePriority
  , Oc = Ie.unstable_UserBlockingPriority
  , Us = Ie.unstable_NormalPriority
  , Ef = Ie.unstable_LowPriority
  , Rc = Ie.unstable_IdlePriority
  , ui = null
  , it = null;
function bf(t) {
    if (it && typeof it.onCommitFiberRoot == "function")
        try {
            it.onCommitFiberRoot(ui, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
}
var Ye = Math.clz32 ? Math.clz32 : Tf
  , jf = Math.log
  , Cf = Math.LN2;
function Tf(t) {
    return t >>>= 0,
    t === 0 ? 32 : 31 - (jf(t) / Cf | 0) | 0
}
var rs = 64
  , ss = 4194304;
function dr(t) {
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
        a !== 0 ? r = dr(a) : (i &= o,
        i !== 0 && (r = dr(i)))
    } else
        o = n & ~s,
        o !== 0 ? r = dr(o) : i !== 0 && (r = dr(i));
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
            n = 31 - Ye(e),
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
        var o = 31 - Ye(i)
          , a = 1 << o
          , l = s[o];
        l === -1 ? (!(a & n) || a & r) && (s[o] = Pf(a, e)) : l <= e && (t.expiredLanes |= a),
        i &= ~a
    }
}
function To(t) {
    return t = t.pendingLanes & -1073741825,
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
}
function Ic() {
    var t = rs;
    return rs <<= 1,
    !(rs & 4194240) && (rs = 64),
    t
}
function $i(t) {
    for (var e = [], n = 0; 31 > n; n++)
        e.push(t);
    return e
}
function Hr(t, e, n) {
    t.pendingLanes |= e,
    e !== 536870912 && (t.suspendedLanes = 0,
    t.pingedLanes = 0),
    t = t.eventTimes,
    e = 31 - Ye(e),
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
        var s = 31 - Ye(n)
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
        var r = 31 - Ye(n)
          , s = 1 << r;
        s & e | t[r] & e && (t[r] |= e),
        n &= ~s
    }
}
var U = 0;
function Ac(t) {
    return t &= -t,
    1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
}
var $c, Ta, Lc, Dc, Mc, Po = !1, is = [], Nt = null, Ot = null, Rt = null, Pr = new Map, Nr = new Map, bt = [], Rf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        Pr.delete(e.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Nr.delete(e.pointerId)
    }
}
function Zn(t, e, n, r, s, i) {
    return t === null || t.nativeEvent !== i ? (t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s]
    },
    e !== null && (e = Kr(e),
    e !== null && Ta(e)),
    t) : (t.eventSystemFlags |= r,
    e = t.targetContainers,
    s !== null && e.indexOf(s) === -1 && e.push(s),
    t)
}
function If(t, e, n, r, s) {
    switch (e) {
    case "focusin":
        return Nt = Zn(Nt, t, e, n, r, s),
        !0;
    case "dragenter":
        return Ot = Zn(Ot, t, e, n, r, s),
        !0;
    case "mouseover":
        return Rt = Zn(Rt, t, e, n, r, s),
        !0;
    case "pointerover":
        var i = s.pointerId;
        return Pr.set(i, Zn(Pr.get(i) || null, t, e, n, r, s)),
        !0;
    case "gotpointercapture":
        return i = s.pointerId,
        Nr.set(i, Zn(Nr.get(i) || null, t, e, n, r, s)),
        !0
    }
    return !1
}
function Uc(t) {
    var e = Yt(t.target);
    if (e !== null) {
        var n = un(e);
        if (n !== null) {
            if (e = n.tag,
            e === 13) {
                if (e = Cc(n),
                e !== null) {
                    t.blockedOn = e,
                    Mc(t.priority, function() {
                        Lc(n)
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
function Es(t) {
    if (t.blockedOn !== null)
        return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
        var n = No(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var r = new n.constructor(n.type,n);
            Eo = r,
            n.target.dispatchEvent(r),
            Eo = null
        } else
            return e = Kr(n),
            e !== null && Ta(e),
            t.blockedOn = n,
            !1;
        e.shift()
    }
    return !0
}
function Rl(t, e, n) {
    Es(t) && n.delete(e)
}
function Af() {
    Po = !1,
    Nt !== null && Es(Nt) && (Nt = null),
    Ot !== null && Es(Ot) && (Ot = null),
    Rt !== null && Es(Rt) && (Rt = null),
    Pr.forEach(Rl),
    Nr.forEach(Rl)
}
function er(t, e) {
    t.blockedOn === e && (t.blockedOn = null,
    Po || (Po = !0,
    Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, Af)))
}
function Or(t) {
    function e(s) {
        return er(s, t)
    }
    if (0 < is.length) {
        er(is[0], t);
        for (var n = 1; n < is.length; n++) {
            var r = is[n];
            r.blockedOn === t && (r.blockedOn = null)
        }
    }
    for (Nt !== null && er(Nt, t),
    Ot !== null && er(Ot, t),
    Rt !== null && er(Rt, t),
    Pr.forEach(e),
    Nr.forEach(e),
    n = 0; n < bt.length; n++)
        r = bt[n],
        r.blockedOn === t && (r.blockedOn = null);
    for (; 0 < bt.length && (n = bt[0],
    n.blockedOn === null); )
        Uc(n),
        n.blockedOn === null && bt.shift()
}
var $n = yt.ReactCurrentBatchConfig
  , Fs = !0;
function $f(t, e, n, r) {
    var s = U
      , i = $n.transition;
    $n.transition = null;
    try {
        U = 1,
        Pa(t, e, n, r)
    } finally {
        U = s,
        $n.transition = i
    }
}
function Lf(t, e, n, r) {
    var s = U
      , i = $n.transition;
    $n.transition = null;
    try {
        U = 4,
        Pa(t, e, n, r)
    } finally {
        U = s,
        $n.transition = i
    }
}
function Pa(t, e, n, r) {
    if (Fs) {
        var s = No(t, e, n, r);
        if (s === null)
            Hi(t, e, r, Bs, n),
            Ol(t, r);
        else if (If(s, t, e, n, r))
            r.stopPropagation();
        else if (Ol(t, r),
        e & 4 && -1 < Rf.indexOf(t)) {
            for (; s !== null; ) {
                var i = Kr(s);
                if (i !== null && $c(i),
                i = No(t, e, n, r),
                i === null && Hi(t, e, r, Bs, n),
                i === s)
                    break;
                s = i
            }
            s !== null && r.stopPropagation()
        } else
            Hi(t, e, r, null, n)
    }
}
var Bs = null;
function No(t, e, n, r) {
    if (Bs = null,
    t = ba(r),
    t = Yt(t),
    t !== null)
        if (e = un(t),
        e === null)
            t = null;
        else if (n = e.tag,
        n === 13) {
            if (t = Cc(e),
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
function zc(t) {
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
        case Oc:
            return 4;
        case Us:
        case Ef:
            return 16;
        case Rc:
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
  , bs = null;
function Fc() {
    if (bs)
        return bs;
    var t, e = Na, n = e.length, r, s = "value"in Tt ? Tt.value : Tt.textContent, i = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++)
        ;
    var o = n - t;
    for (r = 1; r <= o && e[n - r] === s[i - r]; r++)
        ;
    return bs = s.slice(t, 1 < r ? 1 - r : void 0)
}
function js(t) {
    var e = t.keyCode;
    return "charCode"in t ? (t = t.charCode,
    t === 0 && e === 13 && (t = 13)) : t = e,
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
}
function os() {
    return !0
}
function Il() {
    return !1
}
function $e(t) {
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
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? os : Il,
        this.isPropagationStopped = Il,
        this
    }
    return J(e.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = os)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = os)
        },
        persist: function() {},
        isPersistent: os
    }),
    e
}
var Kn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
        return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Oa = $e(Kn), qr = J({}, Kn, {
    view: 0,
    detail: 0
}), Df = $e(qr), Li, Di, tr, ci = J({}, qr, {
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
        return "movementX"in t ? t.movementX : (t !== tr && (tr && t.type === "mousemove" ? (Li = t.screenX - tr.screenX,
        Di = t.screenY - tr.screenY) : Di = Li = 0,
        tr = t),
        Li)
    },
    movementY: function(t) {
        return "movementY"in t ? t.movementY : Di
    }
}), Al = $e(ci), Mf = J({}, ci, {
    dataTransfer: 0
}), Uf = $e(Mf), zf = J({}, qr, {
    relatedTarget: 0
}), Mi = $e(zf), Ff = J({}, Kn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Bf = $e(Ff), Wf = J({}, Kn, {
    clipboardData: function(t) {
        return "clipboardData"in t ? t.clipboardData : window.clipboardData
    }
}), Vf = $e(Wf), Hf = J({}, Kn, {
    data: 0
}), $l = $e(Hf), qf = {
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
var Qf = J({}, qr, {
    key: function(t) {
        if (t.key) {
            var e = qf[t.key] || t.key;
            if (e !== "Unidentified")
                return e
        }
        return t.type === "keypress" ? (t = js(t),
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
        return t.type === "keypress" ? js(t) : 0
    },
    keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    },
    which: function(t) {
        return t.type === "keypress" ? js(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    }
})
  , Yf = $e(Qf)
  , Xf = J({}, ci, {
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
  , Ll = $e(Xf)
  , Zf = J({}, qr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ra
})
  , ep = $e(Zf)
  , tp = J({}, Kn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , np = $e(tp)
  , rp = J({}, ci, {
    deltaX: function(t) {
        return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
    },
    deltaY: function(t) {
        return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , sp = $e(rp)
  , ip = [9, 13, 27, 32]
  , Ia = pt && "CompositionEvent"in window
  , gr = null;
pt && "documentMode"in document && (gr = document.documentMode);
var op = pt && "TextEvent"in window && !gr
  , Bc = pt && (!Ia || gr && 8 < gr && 11 >= gr)
  , Dl = " "
  , Ml = !1;
function Wc(t, e) {
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
function Vc(t) {
    return t = t.detail,
    typeof t == "object" && "data"in t ? t.data : null
}
var xn = !1;
function ap(t, e) {
    switch (t) {
    case "compositionend":
        return Vc(e);
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
    if (xn)
        return t === "compositionend" || !Ia && Wc(t, e) ? (t = Fc(),
        bs = Na = Tt = null,
        xn = !1,
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
        return Bc && e.locale !== "ko" ? null : e.data;
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
function Hc(t, e, n, r) {
    xc(r),
    e = Ws(e, "onChange"),
    0 < e.length && (n = new Oa("onChange","change",null,n,r),
    t.push({
        event: n,
        listeners: e
    }))
}
var vr = null
  , Rr = null;
function cp(t) {
    nd(t, 0)
}
function di(t) {
    var e = bn(t);
    if (mc(e))
        return t
}
function dp(t, e) {
    if (t === "change")
        return e
}
var qc = !1;
if (pt) {
    var Ui;
    if (pt) {
        var zi = "oninput"in document;
        if (!zi) {
            var zl = document.createElement("div");
            zl.setAttribute("oninput", "return;"),
            zi = typeof zl.oninput == "function"
        }
        Ui = zi
    } else
        Ui = !1;
    qc = Ui && (!document.documentMode || 9 < document.documentMode)
}
function Fl() {
    vr && (vr.detachEvent("onpropertychange", Kc),
    Rr = vr = null)
}
function Kc(t) {
    if (t.propertyName === "value" && di(Rr)) {
        var e = [];
        Hc(e, Rr, t, ba(t)),
        jc(cp, e)
    }
}
function hp(t, e, n) {
    t === "focusin" ? (Fl(),
    vr = e,
    Rr = n,
    vr.attachEvent("onpropertychange", Kc)) : t === "focusout" && Fl()
}
function fp(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return di(Rr)
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
var Ze = typeof Object.is == "function" ? Object.is : gp;
function Ir(t, e) {
    if (Ze(t, e))
        return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
    var n = Object.keys(t)
      , r = Object.keys(e);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var s = n[r];
        if (!ho.call(e, s) || !Ze(t[s], e[s]))
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
function Gc(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Gc(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}
function Jc() {
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
function Aa(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}
function vp(t) {
    var e = Jc()
      , n = t.focusedElem
      , r = t.selectionRange;
    if (e !== n && n && n.ownerDocument && Gc(n.ownerDocument.documentElement, n)) {
        if (r !== null && Aa(n)) {
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
var yp = pt && "documentMode"in document && 11 >= document.documentMode
  , Sn = null
  , Oo = null
  , yr = null
  , Ro = !1;
function Vl(t, e, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ro || Sn == null || Sn !== Ls(r) || (r = Sn,
    "selectionStart"in r && Aa(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    yr && Ir(yr, r) || (yr = r,
    r = Ws(Oo, "onSelect"),
    0 < r.length && (e = new Oa("onSelect","select",null,e,n),
    t.push({
        event: e,
        listeners: r
    }),
    e.target = Sn)))
}
function as(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(),
    n["Webkit" + t] = "webkit" + e,
    n["Moz" + t] = "moz" + e,
    n
}
var En = {
    animationend: as("Animation", "AnimationEnd"),
    animationiteration: as("Animation", "AnimationIteration"),
    animationstart: as("Animation", "AnimationStart"),
    transitionend: as("Transition", "TransitionEnd")
}
  , Fi = {}
  , Qc = {};
pt && (Qc = document.createElement("div").style,
"AnimationEvent"in window || (delete En.animationend.animation,
delete En.animationiteration.animation,
delete En.animationstart.animation),
"TransitionEvent"in window || delete En.transitionend.transition);
function hi(t) {
    if (Fi[t])
        return Fi[t];
    if (!En[t])
        return t;
    var e = En[t], n;
    for (n in e)
        if (e.hasOwnProperty(n) && n in Qc)
            return Fi[t] = e[n];
    return t
}
var Yc = hi("animationend")
  , Xc = hi("animationiteration")
  , Zc = hi("animationstart")
  , ed = hi("transitionend")
  , td = new Map
  , Hl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ft(t, e) {
    td.set(t, e),
    ln(e, [t])
}
for (var Bi = 0; Bi < Hl.length; Bi++) {
    var Wi = Hl[Bi]
      , wp = Wi.toLowerCase()
      , _p = Wi[0].toUpperCase() + Wi.slice(1);
    Ft(wp, "on" + _p)
}
Ft(Yc, "onAnimationEnd");
Ft(Xc, "onAnimationIteration");
Ft(Zc, "onAnimationStart");
Ft("dblclick", "onDoubleClick");
Ft("focusin", "onFocus");
Ft("focusout", "onBlur");
Ft(ed, "onTransitionEnd");
Mn("onMouseEnter", ["mouseout", "mouseover"]);
Mn("onMouseLeave", ["mouseout", "mouseover"]);
Mn("onPointerEnter", ["pointerout", "pointerover"]);
Mn("onPointerLeave", ["pointerout", "pointerover"]);
ln("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ln("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ln("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ln("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ln("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var hr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , kp = new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));
function ql(t, e, n) {
    var r = t.type || "unknown-event";
    t.currentTarget = n,
    wf(r, e, void 0, t),
    t.currentTarget = null
}
function nd(t, e) {
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
        throw t = Co,
        Ms = !1,
        Co = null,
        t
}
function W(t, e) {
    var n = e[Do];
    n === void 0 && (n = e[Do] = new Set);
    var r = t + "__bubble";
    n.has(r) || (rd(e, t, 2, !1),
    n.add(r))
}
function Vi(t, e, n) {
    var r = 0;
    e && (r |= 4),
    rd(n, t, r, e)
}
var ls = "_reactListening" + Math.random().toString(36).slice(2);
function Ar(t) {
    if (!t[ls]) {
        t[ls] = !0,
        cc.forEach(function(n) {
            n !== "selectionchange" && (kp.has(n) || Vi(n, !1, t),
            Vi(n, !0, t))
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[ls] || (e[ls] = !0,
        Vi("selectionchange", !1, e))
    }
}
function rd(t, e, n, r) {
    switch (zc(e)) {
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
    !jo || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0),
    r ? s !== void 0 ? t.addEventListener(e, n, {
        capture: !0,
        passive: s
    }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
        passive: s
    }) : t.addEventListener(e, n, !1)
}
function Hi(t, e, n, r, s) {
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
                    if (o = Yt(a),
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
    jc(function() {
        var u = i
          , c = ba(n)
          , d = [];
        e: {
            var f = td.get(t);
            if (f !== void 0) {
                var v = Oa
                  , y = t;
                switch (t) {
                case "keypress":
                    if (js(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    v = Yf;
                    break;
                case "focusin":
                    y = "focus",
                    v = Mi;
                    break;
                case "focusout":
                    y = "blur",
                    v = Mi;
                    break;
                case "beforeblur":
                case "afterblur":
                    v = Mi;
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
                    v = Al;
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
                case Yc:
                case Xc:
                case Zc:
                    v = Bf;
                    break;
                case ed:
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
                  , p = w ? f !== null ? f + "Capture" : null : f;
                w = [];
                for (var h = u, m; h !== null; ) {
                    m = h;
                    var _ = m.stateNode;
                    if (m.tag === 5 && _ !== null && (m = _,
                    p !== null && (_ = Tr(h, p),
                    _ != null && w.push($r(h, _, m)))),
                    k)
                        break;
                    h = h.return
                }
                0 < w.length && (f = new v(f,y,null,n,c),
                d.push({
                    event: f,
                    listeners: w
                }))
            }
        }
        if (!(e & 7)) {
            e: {
                if (f = t === "mouseover" || t === "pointerover",
                v = t === "mouseout" || t === "pointerout",
                f && n !== Eo && (y = n.relatedTarget || n.fromElement) && (Yt(y) || y[mt]))
                    break e;
                if ((v || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                v ? (y = n.relatedTarget || n.toElement,
                v = u,
                y = y ? Yt(y) : null,
                y !== null && (k = un(y),
                y !== k || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null,
                y = u),
                v !== y)) {
                    if (w = Al,
                    _ = "onMouseLeave",
                    p = "onMouseEnter",
                    h = "mouse",
                    (t === "pointerout" || t === "pointerover") && (w = Ll,
                    _ = "onPointerLeave",
                    p = "onPointerEnter",
                    h = "pointer"),
                    k = v == null ? f : bn(v),
                    m = y == null ? f : bn(y),
                    f = new w(_,h + "leave",v,n,c),
                    f.target = k,
                    f.relatedTarget = m,
                    _ = null,
                    Yt(c) === u && (w = new w(p,h + "enter",y,n,c),
                    w.target = m,
                    w.relatedTarget = k,
                    _ = w),
                    k = _,
                    v && y)
                        t: {
                            for (w = v,
                            p = y,
                            h = 0,
                            m = w; m; m = hn(m))
                                h++;
                            for (m = 0,
                            _ = p; _; _ = hn(_))
                                m++;
                            for (; 0 < h - m; )
                                w = hn(w),
                                h--;
                            for (; 0 < m - h; )
                                p = hn(p),
                                m--;
                            for (; h--; ) {
                                if (w === p || p !== null && w === p.alternate)
                                    break t;
                                w = hn(w),
                                p = hn(p)
                            }
                            w = null
                        }
                    else
                        w = null;
                    v !== null && Kl(d, f, v, w, !1),
                    y !== null && k !== null && Kl(d, k, y, w, !0)
                }
            }
            e: {
                if (f = u ? bn(u) : window,
                v = f.nodeName && f.nodeName.toLowerCase(),
                v === "select" || v === "input" && f.type === "file")
                    var j = dp;
                else if (Ul(f))
                    if (qc)
                        j = mp;
                    else {
                        j = fp;
                        var E = hp
                    }
                else
                    (v = f.nodeName) && v.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (j = pp);
                if (j && (j = j(t, u))) {
                    Hc(d, j, n, c);
                    break e
                }
                E && E(t, f, u),
                t === "focusout" && (E = f._wrapperState) && E.controlled && f.type === "number" && wo(f, "number", f.value)
            }
            switch (E = u ? bn(u) : window,
            t) {
            case "focusin":
                (Ul(E) || E.contentEditable === "true") && (Sn = E,
                Oo = u,
                yr = null);
                break;
            case "focusout":
                yr = Oo = Sn = null;
                break;
            case "mousedown":
                Ro = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Ro = !1,
                Vl(d, n, c);
                break;
            case "selectionchange":
                if (yp)
                    break;
            case "keydown":
            case "keyup":
                Vl(d, n, c)
            }
            var S;
            if (Ia)
                e: {
                    switch (t) {
                    case "compositionstart":
                        var b = "onCompositionStart";
                        break e;
                    case "compositionend":
                        b = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        b = "onCompositionUpdate";
                        break e
                    }
                    b = void 0
                }
            else
                xn ? Wc(t, n) && (b = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
            b && (Bc && n.locale !== "ko" && (xn || b !== "onCompositionStart" ? b === "onCompositionEnd" && xn && (S = Fc()) : (Tt = c,
            Na = "value"in Tt ? Tt.value : Tt.textContent,
            xn = !0)),
            E = Ws(u, b),
            0 < E.length && (b = new $l(b,t,null,n,c),
            d.push({
                event: b,
                listeners: E
            }),
            S ? b.data = S : (S = Vc(n),
            S !== null && (b.data = S)))),
            (S = op ? ap(t, n) : lp(t, n)) && (u = Ws(u, "onBeforeInput"),
            0 < u.length && (c = new $l("onBeforeInput","beforeinput",null,n,c),
            d.push({
                event: c,
                listeners: u
            }),
            c.data = S))
        }
        nd(d, e)
    })
}
function $r(t, e, n) {
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
        i = Tr(t, n),
        i != null && r.unshift($r(t, i, s)),
        i = Tr(t, e),
        i != null && r.push($r(t, i, s))),
        t = t.return
    }
    return r
}
function hn(t) {
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
        s ? (l = Tr(n, i),
        l != null && o.unshift($r(n, l, a))) : s || (l = Tr(n, i),
        l != null && o.push($r(n, l, a)))),
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
function us(t, e, n) {
    if (e = Gl(e),
    Gl(t) !== e && n)
        throw Error(x(425))
}
function Vs() {}
var Io = null
  , Ao = null;
function $o(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var Lo = typeof setTimeout == "function" ? setTimeout : void 0
  , Ep = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Jl = typeof Promise == "function" ? Promise : void 0
  , bp = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jl < "u" ? function(t) {
    return Jl.resolve(null).then(t).catch(jp)
}
: Lo;
function jp(t) {
    setTimeout(function() {
        throw t
    })
}
function qi(t, e) {
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
                    Or(e);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = s
    } while (n);
    Or(e)
}
function It(t) {
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
var Gn = Math.random().toString(36).slice(2)
  , st = "__reactFiber$" + Gn
  , Lr = "__reactProps$" + Gn
  , mt = "__reactContainer$" + Gn
  , Do = "__reactEvents$" + Gn
  , Cp = "__reactListeners$" + Gn
  , Tp = "__reactHandles$" + Gn;
function Yt(t) {
    var e = t[st];
    if (e)
        return e;
    for (var n = t.parentNode; n; ) {
        if (e = n[mt] || n[st]) {
            if (n = e.alternate,
            e.child !== null || n !== null && n.child !== null)
                for (t = Ql(t); t !== null; ) {
                    if (n = t[st])
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
function Kr(t) {
    return t = t[st] || t[mt],
    !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
}
function bn(t) {
    if (t.tag === 5 || t.tag === 6)
        return t.stateNode;
    throw Error(x(33))
}
function fi(t) {
    return t[Lr] || null
}
var Mo = []
  , jn = -1;
function Bt(t) {
    return {
        current: t
    }
}
function V(t) {
    0 > jn || (t.current = Mo[jn],
    Mo[jn] = null,
    jn--)
}
function B(t, e) {
    jn++,
    Mo[jn] = t.current,
    t.current = e
}
var Ut = {}
  , fe = Bt(Ut)
  , be = Bt(!1)
  , nn = Ut;
function Un(t, e) {
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
function je(t) {
    return t = t.childContextTypes,
    t != null
}
function Hs() {
    V(be),
    V(fe)
}
function Yl(t, e, n) {
    if (fe.current !== Ut)
        throw Error(x(168));
    B(fe, e),
    B(be, n)
}
function sd(t, e, n) {
    var r = t.stateNode;
    if (e = e.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var s in r)
        if (!(s in e))
            throw Error(x(108, hf(t) || "Unknown", s));
    return J({}, n, r)
}
function qs(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || Ut,
    nn = fe.current,
    B(fe, t),
    B(be, be.current),
    !0
}
function Xl(t, e, n) {
    var r = t.stateNode;
    if (!r)
        throw Error(x(169));
    n ? (t = sd(t, e, nn),
    r.__reactInternalMemoizedMergedChildContext = t,
    V(be),
    V(fe),
    B(fe, t)) : V(be),
    B(be, n)
}
var ct = null
  , pi = !1
  , Ki = !1;
function id(t) {
    ct === null ? ct = [t] : ct.push(t)
}
function Pp(t) {
    pi = !0,
    id(t)
}
function Wt() {
    if (!Ki && ct !== null) {
        Ki = !0;
        var t = 0
          , e = U;
        try {
            var n = ct;
            for (U = 1; t < n.length; t++) {
                var r = n[t];
                do
                    r = r(!0);
                while (r !== null)
            }
            ct = null,
            pi = !1
        } catch (s) {
            throw ct !== null && (ct = ct.slice(t + 1)),
            Nc(ja, Wt),
            s
        } finally {
            U = e,
            Ki = !1
        }
    }
    return null
}
var Cn = []
  , Tn = 0
  , Ks = null
  , Gs = 0
  , De = []
  , Me = 0
  , rn = null
  , dt = 1
  , ht = "";
function Kt(t, e) {
    Cn[Tn++] = Gs,
    Cn[Tn++] = Ks,
    Ks = t,
    Gs = e
}
function od(t, e, n) {
    De[Me++] = dt,
    De[Me++] = ht,
    De[Me++] = rn,
    rn = t;
    var r = dt;
    t = ht;
    var s = 32 - Ye(r) - 1;
    r &= ~(1 << s),
    n += 1;
    var i = 32 - Ye(e) + s;
    if (30 < i) {
        var o = s - s % 5;
        i = (r & (1 << o) - 1).toString(32),
        r >>= o,
        s -= o,
        dt = 1 << 32 - Ye(e) + s | n << s | r,
        ht = i + t
    } else
        dt = 1 << i | n << s | r,
        ht = t
}
function $a(t) {
    t.return !== null && (Kt(t, 1),
    od(t, 1, 0))
}
function La(t) {
    for (; t === Ks; )
        Ks = Cn[--Tn],
        Cn[Tn] = null,
        Gs = Cn[--Tn],
        Cn[Tn] = null;
    for (; t === rn; )
        rn = De[--Me],
        De[Me] = null,
        ht = De[--Me],
        De[Me] = null,
        dt = De[--Me],
        De[Me] = null
}
var Re = null
  , Oe = null
  , q = !1
  , Qe = null;
function ad(t, e) {
    var n = Ue(5, null, null, 0);
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
        Re = t,
        Oe = It(e.firstChild),
        !0) : !1;
    case 6:
        return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e,
        e !== null ? (t.stateNode = e,
        Re = t,
        Oe = null,
        !0) : !1;
    case 13:
        return e = e.nodeType !== 8 ? null : e,
        e !== null ? (n = rn !== null ? {
            id: dt,
            overflow: ht
        } : null,
        t.memoizedState = {
            dehydrated: e,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Ue(18, null, null, 0),
        n.stateNode = e,
        n.return = t,
        t.child = n,
        Re = t,
        Oe = null,
        !0) : !1;
    default:
        return !1
    }
}
function Uo(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}
function zo(t) {
    if (q) {
        var e = Oe;
        if (e) {
            var n = e;
            if (!Zl(t, e)) {
                if (Uo(t))
                    throw Error(x(418));
                e = It(n.nextSibling);
                var r = Re;
                e && Zl(t, e) ? ad(r, n) : (t.flags = t.flags & -4097 | 2,
                q = !1,
                Re = t)
            }
        } else {
            if (Uo(t))
                throw Error(x(418));
            t.flags = t.flags & -4097 | 2,
            q = !1,
            Re = t
        }
    }
}
function eu(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
        t = t.return;
    Re = t
}
function cs(t) {
    if (t !== Re)
        return !1;
    if (!q)
        return eu(t),
        q = !0,
        !1;
    var e;
    if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type,
    e = e !== "head" && e !== "body" && !$o(t.type, t.memoizedProps)),
    e && (e = Oe)) {
        if (Uo(t))
            throw ld(),
            Error(x(418));
        for (; e; )
            ad(t, e),
            e = It(e.nextSibling)
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
                            Oe = It(t.nextSibling);
                            break e
                        }
                        e--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || e++
                }
                t = t.nextSibling
            }
            Oe = null
        }
    } else
        Oe = Re ? It(t.stateNode.nextSibling) : null;
    return !0
}
function ld() {
    for (var t = Oe; t; )
        t = It(t.nextSibling)
}
function zn() {
    Oe = Re = null,
    q = !1
}
function Da(t) {
    Qe === null ? Qe = [t] : Qe.push(t)
}
var Np = yt.ReactCurrentBatchConfig;
function nr(t, e, n) {
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
function ds(t, e) {
    throw t = Object.prototype.toString.call(e),
    Error(x(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
}
function tu(t) {
    var e = t._init;
    return e(t._payload)
}
function ud(t) {
    function e(p, h) {
        if (t) {
            var m = p.deletions;
            m === null ? (p.deletions = [h],
            p.flags |= 16) : m.push(h)
        }
    }
    function n(p, h) {
        if (!t)
            return null;
        for (; h !== null; )
            e(p, h),
            h = h.sibling;
        return null
    }
    function r(p, h) {
        for (p = new Map; h !== null; )
            h.key !== null ? p.set(h.key, h) : p.set(h.index, h),
            h = h.sibling;
        return p
    }
    function s(p, h) {
        return p = Dt(p, h),
        p.index = 0,
        p.sibling = null,
        p
    }
    function i(p, h, m) {
        return p.index = m,
        t ? (m = p.alternate,
        m !== null ? (m = m.index,
        m < h ? (p.flags |= 2,
        h) : m) : (p.flags |= 2,
        h)) : (p.flags |= 1048576,
        h)
    }
    function o(p) {
        return t && p.alternate === null && (p.flags |= 2),
        p
    }
    function a(p, h, m, _) {
        return h === null || h.tag !== 6 ? (h = eo(m, p.mode, _),
        h.return = p,
        h) : (h = s(h, m),
        h.return = p,
        h)
    }
    function l(p, h, m, _) {
        var j = m.type;
        return j === kn ? c(p, h, m.props.children, _, m.key) : h !== null && (h.elementType === j || typeof j == "object" && j !== null && j.$$typeof === St && tu(j) === h.type) ? (_ = s(h, m.props),
        _.ref = nr(p, h, m),
        _.return = p,
        _) : (_ = Is(m.type, m.key, m.props, null, p.mode, _),
        _.ref = nr(p, h, m),
        _.return = p,
        _)
    }
    function u(p, h, m, _) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = to(m, p.mode, _),
        h.return = p,
        h) : (h = s(h, m.children || []),
        h.return = p,
        h)
    }
    function c(p, h, m, _, j) {
        return h === null || h.tag !== 7 ? (h = tn(m, p.mode, _, j),
        h.return = p,
        h) : (h = s(h, m),
        h.return = p,
        h)
    }
    function d(p, h, m) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = eo("" + h, p.mode, m),
            h.return = p,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case es:
                return m = Is(h.type, h.key, h.props, null, p.mode, m),
                m.ref = nr(p, null, h),
                m.return = p,
                m;
            case _n:
                return h = to(h, p.mode, m),
                h.return = p,
                h;
            case St:
                var _ = h._init;
                return d(p, _(h._payload), m)
            }
            if (cr(h) || Yn(h))
                return h = tn(h, p.mode, m, null),
                h.return = p,
                h;
            ds(p, h)
        }
        return null
    }
    function f(p, h, m, _) {
        var j = h !== null ? h.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return j !== null ? null : a(p, h, "" + m, _);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case es:
                return m.key === j ? l(p, h, m, _) : null;
            case _n:
                return m.key === j ? u(p, h, m, _) : null;
            case St:
                return j = m._init,
                f(p, h, j(m._payload), _)
            }
            if (cr(m) || Yn(m))
                return j !== null ? null : c(p, h, m, _, null);
            ds(p, m)
        }
        return null
    }
    function v(p, h, m, _, j) {
        if (typeof _ == "string" && _ !== "" || typeof _ == "number")
            return p = p.get(m) || null,
            a(h, p, "" + _, j);
        if (typeof _ == "object" && _ !== null) {
            switch (_.$$typeof) {
            case es:
                return p = p.get(_.key === null ? m : _.key) || null,
                l(h, p, _, j);
            case _n:
                return p = p.get(_.key === null ? m : _.key) || null,
                u(h, p, _, j);
            case St:
                var E = _._init;
                return v(p, h, m, E(_._payload), j)
            }
            if (cr(_) || Yn(_))
                return p = p.get(m) || null,
                c(h, p, _, j, null);
            ds(h, _)
        }
        return null
    }
    function y(p, h, m, _) {
        for (var j = null, E = null, S = h, b = h = 0, A = null; S !== null && b < m.length; b++) {
            S.index > b ? (A = S,
            S = null) : A = S.sibling;
            var N = f(p, S, m[b], _);
            if (N === null) {
                S === null && (S = A);
                break
            }
            t && S && N.alternate === null && e(p, S),
            h = i(N, h, b),
            E === null ? j = N : E.sibling = N,
            E = N,
            S = A
        }
        if (b === m.length)
            return n(p, S),
            q && Kt(p, b),
            j;
        if (S === null) {
            for (; b < m.length; b++)
                S = d(p, m[b], _),
                S !== null && (h = i(S, h, b),
                E === null ? j = S : E.sibling = S,
                E = S);
            return q && Kt(p, b),
            j
        }
        for (S = r(p, S); b < m.length; b++)
            A = v(S, p, b, m[b], _),
            A !== null && (t && A.alternate !== null && S.delete(A.key === null ? b : A.key),
            h = i(A, h, b),
            E === null ? j = A : E.sibling = A,
            E = A);
        return t && S.forEach(function(z) {
            return e(p, z)
        }),
        q && Kt(p, b),
        j
    }
    function w(p, h, m, _) {
        var j = Yn(m);
        if (typeof j != "function")
            throw Error(x(150));
        if (m = j.call(m),
        m == null)
            throw Error(x(151));
        for (var E = j = null, S = h, b = h = 0, A = null, N = m.next(); S !== null && !N.done; b++,
        N = m.next()) {
            S.index > b ? (A = S,
            S = null) : A = S.sibling;
            var z = f(p, S, N.value, _);
            if (z === null) {
                S === null && (S = A);
                break
            }
            t && S && z.alternate === null && e(p, S),
            h = i(z, h, b),
            E === null ? j = z : E.sibling = z,
            E = z,
            S = A
        }
        if (N.done)
            return n(p, S),
            q && Kt(p, b),
            j;
        if (S === null) {
            for (; !N.done; b++,
            N = m.next())
                N = d(p, N.value, _),
                N !== null && (h = i(N, h, b),
                E === null ? j = N : E.sibling = N,
                E = N);
            return q && Kt(p, b),
            j
        }
        for (S = r(p, S); !N.done; b++,
        N = m.next())
            N = v(S, p, b, N.value, _),
            N !== null && (t && N.alternate !== null && S.delete(N.key === null ? b : N.key),
            h = i(N, h, b),
            E === null ? j = N : E.sibling = N,
            E = N);
        return t && S.forEach(function(Te) {
            return e(p, Te)
        }),
        q && Kt(p, b),
        j
    }
    function k(p, h, m, _) {
        if (typeof m == "object" && m !== null && m.type === kn && m.key === null && (m = m.props.children),
        typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case es:
                e: {
                    for (var j = m.key, E = h; E !== null; ) {
                        if (E.key === j) {
                            if (j = m.type,
                            j === kn) {
                                if (E.tag === 7) {
                                    n(p, E.sibling),
                                    h = s(E, m.props.children),
                                    h.return = p,
                                    p = h;
                                    break e
                                }
                            } else if (E.elementType === j || typeof j == "object" && j !== null && j.$$typeof === St && tu(j) === E.type) {
                                n(p, E.sibling),
                                h = s(E, m.props),
                                h.ref = nr(p, E, m),
                                h.return = p,
                                p = h;
                                break e
                            }
                            n(p, E);
                            break
                        } else
                            e(p, E);
                        E = E.sibling
                    }
                    m.type === kn ? (h = tn(m.props.children, p.mode, _, m.key),
                    h.return = p,
                    p = h) : (_ = Is(m.type, m.key, m.props, null, p.mode, _),
                    _.ref = nr(p, h, m),
                    _.return = p,
                    p = _)
                }
                return o(p);
            case _n:
                e: {
                    for (E = m.key; h !== null; ) {
                        if (h.key === E)
                            if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                                n(p, h.sibling),
                                h = s(h, m.children || []),
                                h.return = p,
                                p = h;
                                break e
                            } else {
                                n(p, h);
                                break
                            }
                        else
                            e(p, h);
                        h = h.sibling
                    }
                    h = to(m, p.mode, _),
                    h.return = p,
                    p = h
                }
                return o(p);
            case St:
                return E = m._init,
                k(p, h, E(m._payload), _)
            }
            if (cr(m))
                return y(p, h, m, _);
            if (Yn(m))
                return w(p, h, m, _);
            ds(p, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
        h !== null && h.tag === 6 ? (n(p, h.sibling),
        h = s(h, m),
        h.return = p,
        p = h) : (n(p, h),
        h = eo(m, p.mode, _),
        h.return = p,
        p = h),
        o(p)) : n(p, h)
    }
    return k
}
var Fn = ud(!0)
  , cd = ud(!1)
  , Js = Bt(null)
  , Qs = null
  , Pn = null
  , Ma = null;
function Ua() {
    Ma = Pn = Qs = null
}
function za(t) {
    var e = Js.current;
    V(Js),
    t._currentValue = e
}
function Fo(t, e, n) {
    for (; t !== null; ) {
        var r = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e,
        r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
        t === n)
            break;
        t = t.return
    }
}
function Ln(t, e) {
    Qs = t,
    Ma = Pn = null,
    t = t.dependencies,
    t !== null && t.firstContext !== null && (t.lanes & e && (Ee = !0),
    t.firstContext = null)
}
function Be(t) {
    var e = t._currentValue;
    if (Ma !== t)
        if (t = {
            context: t,
            memoizedValue: e,
            next: null
        },
        Pn === null) {
            if (Qs === null)
                throw Error(x(308));
            Pn = t,
            Qs.dependencies = {
                lanes: 0,
                firstContext: t
            }
        } else
            Pn = Pn.next = t;
    return e
}
var Xt = null;
function Fa(t) {
    Xt === null ? Xt = [t] : Xt.push(t)
}
function dd(t, e, n, r) {
    var s = e.interleaved;
    return s === null ? (n.next = n,
    Fa(e)) : (n.next = s.next,
    s.next = n),
    e.interleaved = n,
    gt(t, r)
}
function gt(t, e) {
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
function hd(t, e) {
    t = t.updateQueue,
    e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
    })
}
function ft(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function At(t, e, n) {
    var r = t.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    D & 2) {
        var s = r.pending;
        return s === null ? e.next = e : (e.next = s.next,
        s.next = e),
        r.pending = e,
        gt(t, n)
    }
    return s = r.interleaved,
    s === null ? (e.next = e,
    Fa(r)) : (e.next = s.next,
    s.next = e),
    r.interleaved = e,
    gt(t, n)
}
function Cs(t, e, n) {
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
            var f = a.lane
              , v = a.eventTime;
            if ((r & f) === f) {
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
                    switch (f = e,
                    v = n,
                    w.tag) {
                    case 1:
                        if (y = w.payload,
                        typeof y == "function") {
                            d = y.call(v, d, f);
                            break e
                        }
                        d = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = w.payload,
                        f = typeof y == "function" ? y.call(v, d, f) : y,
                        f == null)
                            break e;
                        d = J({}, d, f);
                        break e;
                    case 2:
                        Et = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (t.flags |= 64,
                f = s.effects,
                f === null ? s.effects = [a] : f.push(a))
            } else
                v = {
                    eventTime: v,
                    lane: f,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = v,
                l = d) : c = c.next = v,
                o |= f;
            if (a = a.next,
            a === null) {
                if (a = s.shared.pending,
                a === null)
                    break;
                f = a,
                a = f.next,
                f.next = null,
                s.lastBaseUpdate = f,
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
        on |= o,
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
var Gr = {}
  , ot = Bt(Gr)
  , Dr = Bt(Gr)
  , Mr = Bt(Gr);
function Zt(t) {
    if (t === Gr)
        throw Error(x(174));
    return t
}
function Wa(t, e) {
    switch (B(Mr, e),
    B(Dr, t),
    B(ot, Gr),
    t = e.nodeType,
    t) {
    case 9:
    case 11:
        e = (e = e.documentElement) ? e.namespaceURI : ko(null, "");
        break;
    default:
        t = t === 8 ? e.parentNode : e,
        e = t.namespaceURI || null,
        t = t.tagName,
        e = ko(e, t)
    }
    V(ot),
    B(ot, e)
}
function Bn() {
    V(ot),
    V(Dr),
    V(Mr)
}
function fd(t) {
    Zt(Mr.current);
    var e = Zt(ot.current)
      , n = ko(e, t.type);
    e !== n && (B(Dr, t),
    B(ot, n))
}
function Va(t) {
    Dr.current === t && (V(ot),
    V(Dr))
}
var K = Bt(0);
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
var Gi = [];
function Ha() {
    for (var t = 0; t < Gi.length; t++)
        Gi[t]._workInProgressVersionPrimary = null;
    Gi.length = 0
}
var Ts = yt.ReactCurrentDispatcher
  , Ji = yt.ReactCurrentBatchConfig
  , sn = 0
  , G = null
  , re = null
  , ie = null
  , Zs = !1
  , wr = !1
  , Ur = 0
  , Op = 0;
function ce() {
    throw Error(x(321))
}
function qa(t, e) {
    if (e === null)
        return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
        if (!Ze(t[n], e[n]))
            return !1;
    return !0
}
function Ka(t, e, n, r, s, i) {
    if (sn = i,
    G = e,
    e.memoizedState = null,
    e.updateQueue = null,
    e.lanes = 0,
    Ts.current = t === null || t.memoizedState === null ? $p : Lp,
    t = n(r, s),
    wr) {
        i = 0;
        do {
            if (wr = !1,
            Ur = 0,
            25 <= i)
                throw Error(x(301));
            i += 1,
            ie = re = null,
            e.updateQueue = null,
            Ts.current = Dp,
            t = n(r, s)
        } while (wr)
    }
    if (Ts.current = ei,
    e = re !== null && re.next !== null,
    sn = 0,
    ie = re = G = null,
    Zs = !1,
    e)
        throw Error(x(300));
    return t
}
function Ga() {
    var t = Ur !== 0;
    return Ur = 0,
    t
}
function nt() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ie === null ? G.memoizedState = ie = t : ie = ie.next = t,
    ie
}
function We() {
    if (re === null) {
        var t = G.alternate;
        t = t !== null ? t.memoizedState : null
    } else
        t = re.next;
    var e = ie === null ? G.memoizedState : ie.next;
    if (e !== null)
        ie = e,
        re = t;
    else {
        if (t === null)
            throw Error(x(310));
        re = t,
        t = {
            memoizedState: re.memoizedState,
            baseState: re.baseState,
            baseQueue: re.baseQueue,
            queue: re.queue,
            next: null
        },
        ie === null ? G.memoizedState = ie = t : ie = ie.next = t
    }
    return ie
}
function zr(t, e) {
    return typeof e == "function" ? e(t) : e
}
function Qi(t) {
    var e = We()
      , n = e.queue;
    if (n === null)
        throw Error(x(311));
    n.lastRenderedReducer = t;
    var r = re
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
            if ((sn & c) === c)
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
                G.lanes |= c,
                on |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? o = r : l.next = a,
        Ze(r, e.memoizedState) || (Ee = !0),
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
            G.lanes |= i,
            on |= i,
            s = s.next;
        while (s !== t)
    } else
        s === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch]
}
function Yi(t) {
    var e = We()
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
        Ze(i, e.memoizedState) || (Ee = !0),
        e.memoizedState = i,
        e.baseQueue === null && (e.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function pd() {}
function md(t, e) {
    var n = G
      , r = We()
      , s = e()
      , i = !Ze(r.memoizedState, s);
    if (i && (r.memoizedState = s,
    Ee = !0),
    r = r.queue,
    Ja(yd.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || i || ie !== null && ie.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Fr(9, vd.bind(null, n, r, s, e), void 0, null),
        oe === null)
            throw Error(x(349));
        sn & 30 || gd(n, e, s)
    }
    return s
}
function gd(t, e, n) {
    t.flags |= 16384,
    t = {
        getSnapshot: e,
        value: n
    },
    e = G.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    G.updateQueue = e,
    e.stores = [t]) : (n = e.stores,
    n === null ? e.stores = [t] : n.push(t))
}
function vd(t, e, n, r) {
    e.value = n,
    e.getSnapshot = r,
    wd(e) && _d(t)
}
function yd(t, e, n) {
    return n(function() {
        wd(e) && _d(t)
    })
}
function wd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !Ze(t, n)
    } catch {
        return !0
    }
}
function _d(t) {
    var e = gt(t, 1);
    e !== null && Xe(e, t, 1, -1)
}
function su(t) {
    var e = nt();
    return typeof t == "function" && (t = t()),
    e.memoizedState = e.baseState = t,
    t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zr,
        lastRenderedState: t
    },
    e.queue = t,
    t = t.dispatch = Ap.bind(null, G, t),
    [e.memoizedState, t]
}
function Fr(t, e, n, r) {
    return t = {
        tag: t,
        create: e,
        destroy: n,
        deps: r,
        next: null
    },
    e = G.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    G.updateQueue = e,
    e.lastEffect = t.next = t) : (n = e.lastEffect,
    n === null ? e.lastEffect = t.next = t : (r = n.next,
    n.next = t,
    t.next = r,
    e.lastEffect = t)),
    t
}
function kd() {
    return We().memoizedState
}
function Ps(t, e, n, r) {
    var s = nt();
    G.flags |= t,
    s.memoizedState = Fr(1 | e, n, void 0, r === void 0 ? null : r)
}
function mi(t, e, n, r) {
    var s = We();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (re !== null) {
        var o = re.memoizedState;
        if (i = o.destroy,
        r !== null && qa(r, o.deps)) {
            s.memoizedState = Fr(e, n, i, r);
            return
        }
    }
    G.flags |= t,
    s.memoizedState = Fr(1 | e, n, i, r)
}
function iu(t, e) {
    return Ps(8390656, 8, t, e)
}
function Ja(t, e) {
    return mi(2048, 8, t, e)
}
function xd(t, e) {
    return mi(4, 2, t, e)
}
function Sd(t, e) {
    return mi(4, 4, t, e)
}
function Ed(t, e) {
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
function bd(t, e, n) {
    return n = n != null ? n.concat([t]) : null,
    mi(4, 4, Ed.bind(null, e, t), n)
}
function Qa() {}
function jd(t, e) {
    var n = We();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && qa(e, r[1]) ? r[0] : (n.memoizedState = [t, e],
    t)
}
function Cd(t, e) {
    var n = We();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && qa(e, r[1]) ? r[0] : (t = t(),
    n.memoizedState = [t, e],
    t)
}
function Td(t, e, n) {
    return sn & 21 ? (Ze(n, e) || (n = Ic(),
    G.lanes |= n,
    on |= n,
    t.baseState = !0),
    e) : (t.baseState && (t.baseState = !1,
    Ee = !0),
    t.memoizedState = n)
}
function Rp(t, e) {
    var n = U;
    U = n !== 0 && 4 > n ? n : 4,
    t(!0);
    var r = Ji.transition;
    Ji.transition = {};
    try {
        t(!1),
        e()
    } finally {
        U = n,
        Ji.transition = r
    }
}
function Pd() {
    return We().memoizedState
}
function Ip(t, e, n) {
    var r = Lt(t);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Nd(t))
        Od(e, n);
    else if (n = dd(t, e, n, r),
    n !== null) {
        var s = ve();
        Xe(n, t, r, s),
        Rd(n, e, r)
    }
}
function Ap(t, e, n) {
    var r = Lt(t)
      , s = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Nd(t))
        Od(e, s);
    else {
        var i = t.alternate;
        if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer,
        i !== null))
            try {
                var o = e.lastRenderedState
                  , a = i(o, n);
                if (s.hasEagerState = !0,
                s.eagerState = a,
                Ze(a, o)) {
                    var l = e.interleaved;
                    l === null ? (s.next = s,
                    Fa(e)) : (s.next = l.next,
                    l.next = s),
                    e.interleaved = s;
                    return
                }
            } catch {} finally {}
        n = dd(t, e, s, r),
        n !== null && (s = ve(),
        Xe(n, t, r, s),
        Rd(n, e, r))
    }
}
function Nd(t) {
    var e = t.alternate;
    return t === G || e !== null && e === G
}
function Od(t, e) {
    wr = Zs = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next,
    n.next = e),
    t.pending = e
}
function Rd(t, e, n) {
    if (n & 4194240) {
        var r = e.lanes;
        r &= t.pendingLanes,
        n |= r,
        e.lanes = n,
        Ca(t, n)
    }
}
var ei = {
    readContext: Be,
    useCallback: ce,
    useContext: ce,
    useEffect: ce,
    useImperativeHandle: ce,
    useInsertionEffect: ce,
    useLayoutEffect: ce,
    useMemo: ce,
    useReducer: ce,
    useRef: ce,
    useState: ce,
    useDebugValue: ce,
    useDeferredValue: ce,
    useTransition: ce,
    useMutableSource: ce,
    useSyncExternalStore: ce,
    useId: ce,
    unstable_isNewReconciler: !1
}
  , $p = {
    readContext: Be,
    useCallback: function(t, e) {
        return nt().memoizedState = [t, e === void 0 ? null : e],
        t
    },
    useContext: Be,
    useEffect: iu,
    useImperativeHandle: function(t, e, n) {
        return n = n != null ? n.concat([t]) : null,
        Ps(4194308, 4, Ed.bind(null, e, t), n)
    },
    useLayoutEffect: function(t, e) {
        return Ps(4194308, 4, t, e)
    },
    useInsertionEffect: function(t, e) {
        return Ps(4, 2, t, e)
    },
    useMemo: function(t, e) {
        var n = nt();
        return e = e === void 0 ? null : e,
        t = t(),
        n.memoizedState = [t, e],
        t
    },
    useReducer: function(t, e, n) {
        var r = nt();
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
        t = t.dispatch = Ip.bind(null, G, t),
        [r.memoizedState, t]
    },
    useRef: function(t) {
        var e = nt();
        return t = {
            current: t
        },
        e.memoizedState = t
    },
    useState: su,
    useDebugValue: Qa,
    useDeferredValue: function(t) {
        return nt().memoizedState = t
    },
    useTransition: function() {
        var t = su(!1)
          , e = t[0];
        return t = Rp.bind(null, t[1]),
        nt().memoizedState = t,
        [e, t]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(t, e, n) {
        var r = G
          , s = nt();
        if (q) {
            if (n === void 0)
                throw Error(x(407));
            n = n()
        } else {
            if (n = e(),
            oe === null)
                throw Error(x(349));
            sn & 30 || gd(r, e, n)
        }
        s.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: e
        };
        return s.queue = i,
        iu(yd.bind(null, r, i, t), [t]),
        r.flags |= 2048,
        Fr(9, vd.bind(null, r, i, n, e), void 0, null),
        n
    },
    useId: function() {
        var t = nt()
          , e = oe.identifierPrefix;
        if (q) {
            var n = ht
              , r = dt;
            n = (r & ~(1 << 32 - Ye(r) - 1)).toString(32) + n,
            e = ":" + e + "R" + n,
            n = Ur++,
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
    readContext: Be,
    useCallback: jd,
    useContext: Be,
    useEffect: Ja,
    useImperativeHandle: bd,
    useInsertionEffect: xd,
    useLayoutEffect: Sd,
    useMemo: Cd,
    useReducer: Qi,
    useRef: kd,
    useState: function() {
        return Qi(zr)
    },
    useDebugValue: Qa,
    useDeferredValue: function(t) {
        var e = We();
        return Td(e, re.memoizedState, t)
    },
    useTransition: function() {
        var t = Qi(zr)[0]
          , e = We().memoizedState;
        return [t, e]
    },
    useMutableSource: pd,
    useSyncExternalStore: md,
    useId: Pd,
    unstable_isNewReconciler: !1
}
  , Dp = {
    readContext: Be,
    useCallback: jd,
    useContext: Be,
    useEffect: Ja,
    useImperativeHandle: bd,
    useInsertionEffect: xd,
    useLayoutEffect: Sd,
    useMemo: Cd,
    useReducer: Yi,
    useRef: kd,
    useState: function() {
        return Yi(zr)
    },
    useDebugValue: Qa,
    useDeferredValue: function(t) {
        var e = We();
        return re === null ? e.memoizedState = t : Td(e, re.memoizedState, t)
    },
    useTransition: function() {
        var t = Yi(zr)[0]
          , e = We().memoizedState;
        return [t, e]
    },
    useMutableSource: pd,
    useSyncExternalStore: md,
    useId: Pd,
    unstable_isNewReconciler: !1
};
function Ke(t, e) {
    if (t && t.defaultProps) {
        e = J({}, e),
        t = t.defaultProps;
        for (var n in t)
            e[n] === void 0 && (e[n] = t[n]);
        return e
    }
    return e
}
function Bo(t, e, n, r) {
    e = t.memoizedState,
    n = n(r, e),
    n = n == null ? e : J({}, e, n),
    t.memoizedState = n,
    t.lanes === 0 && (t.updateQueue.baseState = n)
}
var gi = {
    isMounted: function(t) {
        return (t = t._reactInternals) ? un(t) === t : !1
    },
    enqueueSetState: function(t, e, n) {
        t = t._reactInternals;
        var r = ve()
          , s = Lt(t)
          , i = ft(r, s);
        i.payload = e,
        n != null && (i.callback = n),
        e = At(t, i, s),
        e !== null && (Xe(e, t, s, r),
        Cs(e, t, s))
    },
    enqueueReplaceState: function(t, e, n) {
        t = t._reactInternals;
        var r = ve()
          , s = Lt(t)
          , i = ft(r, s);
        i.tag = 1,
        i.payload = e,
        n != null && (i.callback = n),
        e = At(t, i, s),
        e !== null && (Xe(e, t, s, r),
        Cs(e, t, s))
    },
    enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var n = ve()
          , r = Lt(t)
          , s = ft(n, r);
        s.tag = 2,
        e != null && (s.callback = e),
        e = At(t, s, r),
        e !== null && (Xe(e, t, r, n),
        Cs(e, t, r))
    }
};
function ou(t, e, n, r, s, i, o) {
    return t = t.stateNode,
    typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, i, o) : e.prototype && e.prototype.isPureReactComponent ? !Ir(n, r) || !Ir(s, i) : !0
}
function Id(t, e, n) {
    var r = !1
      , s = Ut
      , i = e.contextType;
    return typeof i == "object" && i !== null ? i = Be(i) : (s = je(e) ? nn : fe.current,
    r = e.contextTypes,
    i = (r = r != null) ? Un(t, s) : Ut),
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
function Wo(t, e, n, r) {
    var s = t.stateNode;
    s.props = n,
    s.state = t.memoizedState,
    s.refs = {},
    Ba(t);
    var i = e.contextType;
    typeof i == "object" && i !== null ? s.context = Be(i) : (i = je(e) ? nn : fe.current,
    s.context = Un(t, i)),
    s.state = t.memoizedState,
    i = e.getDerivedStateFromProps,
    typeof i == "function" && (Bo(t, e, i, n),
    s.state = t.memoizedState),
    typeof e.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (e = s.state,
    typeof s.componentWillMount == "function" && s.componentWillMount(),
    typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
    e !== s.state && gi.enqueueReplaceState(s, s.state, null),
    Ys(t, n, s, r),
    s.state = t.memoizedState),
    typeof s.componentDidMount == "function" && (t.flags |= 4194308)
}
function Wn(t, e) {
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
function Xi(t, e, n) {
    return {
        value: t,
        source: null,
        stack: n ?? null,
        digest: e ?? null
    }
}
function Vo(t, e) {
    try {
        console.error(e.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Mp = typeof WeakMap == "function" ? WeakMap : Map;
function Ad(t, e, n) {
    n = ft(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = e.value;
    return n.callback = function() {
        ni || (ni = !0,
        ea = r),
        Vo(t, e)
    }
    ,
    n
}
function $d(t, e, n) {
    n = ft(-1, n),
    n.tag = 3;
    var r = t.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var s = e.value;
        n.payload = function() {
            return r(s)
        }
        ,
        n.callback = function() {
            Vo(t, e)
        }
    }
    var i = t.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Vo(t, e),
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
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = ft(-1, 1),
    e.tag = 2,
    At(n, e, 1))),
    n.lanes |= 1),
    t)
}
var Up = yt.ReactCurrentOwner
  , Ee = !1;
function ge(t, e, n, r) {
    e.child = t === null ? cd(e, null, n, r) : Fn(e, t.child, n, r)
}
function du(t, e, n, r, s) {
    n = n.render;
    var i = e.ref;
    return Ln(e, s),
    r = Ka(t, e, n, r, i, s),
    n = Ga(),
    t !== null && !Ee ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~s,
    vt(t, e, s)) : (q && n && $a(e),
    e.flags |= 1,
    ge(t, e, r, s),
    e.child)
}
function hu(t, e, n, r, s) {
    if (t === null) {
        var i = n.type;
        return typeof i == "function" && !sl(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15,
        e.type = i,
        Ld(t, e, i, r, s)) : (t = Is(n.type, null, r, e, e.mode, s),
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
            return vt(t, e, s)
    }
    return e.flags |= 1,
    t = Dt(i, r),
    t.ref = e.ref,
    t.return = e,
    e.child = t
}
function Ld(t, e, n, r, s) {
    if (t !== null) {
        var i = t.memoizedProps;
        if (Ir(i, r) && t.ref === e.ref)
            if (Ee = !1,
            e.pendingProps = r = i,
            (t.lanes & s) !== 0)
                t.flags & 131072 && (Ee = !0);
            else
                return e.lanes = t.lanes,
                vt(t, e, s)
    }
    return Ho(t, e, n, r, s)
}
function Dd(t, e, n) {
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
            B(On, Ne),
            Ne |= n;
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
                B(On, Ne),
                Ne |= t,
                null;
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            B(On, Ne),
            Ne |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        e.memoizedState = null) : r = n,
        B(On, Ne),
        Ne |= r;
    return ge(t, e, s, n),
    e.child
}
function Md(t, e) {
    var n = e.ref;
    (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512,
    e.flags |= 2097152)
}
function Ho(t, e, n, r, s) {
    var i = je(n) ? nn : fe.current;
    return i = Un(e, i),
    Ln(e, s),
    n = Ka(t, e, n, r, i, s),
    r = Ga(),
    t !== null && !Ee ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~s,
    vt(t, e, s)) : (q && r && $a(e),
    e.flags |= 1,
    ge(t, e, n, s),
    e.child)
}
function fu(t, e, n, r, s) {
    if (je(n)) {
        var i = !0;
        qs(e)
    } else
        i = !1;
    if (Ln(e, s),
    e.stateNode === null)
        Ns(t, e),
        Id(e, n, r),
        Wo(e, n, r, s),
        r = !0;
    else if (t === null) {
        var o = e.stateNode
          , a = e.memoizedProps;
        o.props = a;
        var l = o.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = Be(u) : (u = je(n) ? nn : fe.current,
        u = Un(e, u));
        var c = n.getDerivedStateFromProps
          , d = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || l !== u) && au(e, o, r, u),
        Et = !1;
        var f = e.memoizedState;
        o.state = f,
        Ys(e, r, o, s),
        l = e.memoizedState,
        a !== r || f !== l || be.current || Et ? (typeof c == "function" && (Bo(e, n, c, r),
        l = e.memoizedState),
        (a = Et || ou(e, n, a, r, f, l, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
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
        hd(t, e),
        a = e.memoizedProps,
        u = e.type === e.elementType ? a : Ke(e.type, a),
        o.props = u,
        d = e.pendingProps,
        f = o.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = Be(l) : (l = je(n) ? nn : fe.current,
        l = Un(e, l));
        var v = n.getDerivedStateFromProps;
        (c = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== d || f !== l) && au(e, o, r, l),
        Et = !1,
        f = e.memoizedState,
        o.state = f,
        Ys(e, r, o, s);
        var y = e.memoizedState;
        a !== d || f !== y || be.current || Et ? (typeof v == "function" && (Bo(e, n, v, r),
        y = e.memoizedState),
        (u = Et || ou(e, n, u, r, f, y, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, l),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, l)),
        typeof o.componentDidUpdate == "function" && (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === t.memoizedProps && f === t.memoizedState || (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && f === t.memoizedState || (e.flags |= 1024),
        e.memoizedProps = r,
        e.memoizedState = y),
        o.props = r,
        o.state = y,
        o.context = l,
        r = u) : (typeof o.componentDidUpdate != "function" || a === t.memoizedProps && f === t.memoizedState || (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && f === t.memoizedState || (e.flags |= 1024),
        r = !1)
    }
    return qo(t, e, n, r, i, s)
}
function qo(t, e, n, r, s, i) {
    Md(t, e);
    var o = (e.flags & 128) !== 0;
    if (!r && !o)
        return s && Xl(e, n, !1),
        vt(t, e, i);
    r = e.stateNode,
    Up.current = e;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return e.flags |= 1,
    t !== null && o ? (e.child = Fn(e, t.child, null, i),
    e.child = Fn(e, null, a, i)) : ge(t, e, a, i),
    e.memoizedState = r.state,
    s && Xl(e, n, !0),
    e.child
}
function Ud(t) {
    var e = t.stateNode;
    e.pendingContext ? Yl(t, e.pendingContext, e.pendingContext !== e.context) : e.context && Yl(t, e.context, !1),
    Wa(t, e.containerInfo)
}
function pu(t, e, n, r, s) {
    return zn(),
    Da(s),
    e.flags |= 256,
    ge(t, e, n, r),
    e.child
}
var Ko = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Go(t) {
    return {
        baseLanes: t,
        cachePool: null,
        transitions: null
    }
}
function zd(t, e, n) {
    var r = e.pendingProps, s = K.current, i = !1, o = (e.flags & 128) !== 0, a;
    if ((a = o) || (a = t !== null && t.memoizedState === null ? !1 : (s & 2) !== 0),
    a ? (i = !0,
    e.flags &= -129) : (t === null || t.memoizedState !== null) && (s |= 1),
    B(K, s & 1),
    t === null)
        return zo(e),
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
        t = tn(t, r, n, null),
        i.return = e,
        t.return = e,
        i.sibling = t,
        e.child = i,
        e.child.memoizedState = Go(n),
        e.memoizedState = Ko,
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
        a !== null ? i = Dt(a, i) : (i = tn(i, o, n, null),
        i.flags |= 2),
        i.return = e,
        r.return = e,
        r.sibling = i,
        e.child = r,
        r = i,
        i = e.child,
        o = t.child.memoizedState,
        o = o === null ? Go(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        i.memoizedState = o,
        i.childLanes = t.childLanes & ~n,
        e.memoizedState = Ko,
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
function hs(t, e, n, r) {
    return r !== null && Da(r),
    Fn(e, t.child, null, n),
    t = Ya(e, e.pendingProps.children),
    t.flags |= 2,
    e.memoizedState = null,
    t
}
function zp(t, e, n, r, s, i, o) {
    if (n)
        return e.flags & 256 ? (e.flags &= -257,
        r = Xi(Error(x(422))),
        hs(t, e, o, r)) : e.memoizedState !== null ? (e.child = t.child,
        e.flags |= 128,
        null) : (i = r.fallback,
        s = e.mode,
        r = wi({
            mode: "visible",
            children: r.children
        }, s, 0, null),
        i = tn(i, s, o, null),
        i.flags |= 2,
        r.return = e,
        i.return = e,
        r.sibling = i,
        e.child = r,
        e.mode & 1 && Fn(e, t.child, null, o),
        e.child.memoizedState = Go(o),
        e.memoizedState = Ko,
        i);
    if (!(e.mode & 1))
        return hs(t, e, o, null);
    if (s.data === "$!") {
        if (r = s.nextSibling && s.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        i = Error(x(419)),
        r = Xi(i, r, void 0),
        hs(t, e, o, r)
    }
    if (a = (o & t.childLanes) !== 0,
    Ee || a) {
        if (r = oe,
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
            gt(t, s),
            Xe(r, t, s, -1))
        }
        return rl(),
        r = Xi(Error(x(421))),
        hs(t, e, o, r)
    }
    return s.data === "$?" ? (e.flags |= 128,
    e.child = t.child,
    e = Zp.bind(null, t),
    s._reactRetry = e,
    null) : (t = i.treeContext,
    Oe = It(s.nextSibling),
    Re = e,
    q = !0,
    Qe = null,
    t !== null && (De[Me++] = dt,
    De[Me++] = ht,
    De[Me++] = rn,
    dt = t.id,
    ht = t.overflow,
    rn = e),
    e = Ya(e, r.children),
    e.flags |= 4096,
    e)
}
function mu(t, e, n) {
    t.lanes |= e;
    var r = t.alternate;
    r !== null && (r.lanes |= e),
    Fo(t.return, e, n)
}
function Zi(t, e, n, r, s) {
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
function Fd(t, e, n) {
    var r = e.pendingProps
      , s = r.revealOrder
      , i = r.tail;
    if (ge(t, e, r.children, n),
    r = K.current,
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
    if (B(K, r),
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
            Zi(e, !1, s, n, i);
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
            Zi(e, !0, n, null, i);
            break;
        case "together":
            Zi(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
        }
    return e.child
}
function Ns(t, e) {
    !(e.mode & 1) && t !== null && (t.alternate = null,
    e.alternate = null,
    e.flags |= 2)
}
function vt(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies),
    on |= e.lanes,
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
        Ud(e),
        zn();
        break;
    case 5:
        fd(e);
        break;
    case 1:
        je(e.type) && qs(e);
        break;
    case 4:
        Wa(e, e.stateNode.containerInfo);
        break;
    case 10:
        var r = e.type._context
          , s = e.memoizedProps.value;
        B(Js, r._currentValue),
        r._currentValue = s;
        break;
    case 13:
        if (r = e.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (B(K, K.current & 1),
            e.flags |= 128,
            null) : n & e.child.childLanes ? zd(t, e, n) : (B(K, K.current & 1),
            t = vt(t, e, n),
            t !== null ? t.sibling : null);
        B(K, K.current & 1);
        break;
    case 19:
        if (r = (n & e.childLanes) !== 0,
        t.flags & 128) {
            if (r)
                return Fd(t, e, n);
            e.flags |= 128
        }
        if (s = e.memoizedState,
        s !== null && (s.rendering = null,
        s.tail = null,
        s.lastEffect = null),
        B(K, K.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return e.lanes = 0,
        Dd(t, e, n)
    }
    return vt(t, e, n)
}
var Bd, Jo, Wd, Vd;
Bd = function(t, e) {
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
Jo = function() {}
;
Wd = function(t, e, n, r) {
    var s = t.memoizedProps;
    if (s !== r) {
        t = e.stateNode,
        Zt(ot.current);
        var i = null;
        switch (n) {
        case "input":
            s = vo(t, s),
            r = vo(t, r),
            i = [];
            break;
        case "select":
            s = J({}, s, {
                value: void 0
            }),
            r = J({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            s = _o(t, s),
            r = _o(t, r),
            i = [];
            break;
        default:
            typeof s.onClick != "function" && typeof r.onClick == "function" && (t.onclick = Vs)
        }
        xo(n, r);
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
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (jr.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
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
                    l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (jr.hasOwnProperty(u) ? (l != null && u === "onScroll" && W("scroll", t),
                    i || a === l || (i = [])) : (i = i || []).push(u, l))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (e.updateQueue = u) && (e.flags |= 4)
    }
}
;
Vd = function(t, e, n, r) {
    n !== r && (e.flags |= 4)
}
;
function rr(t, e) {
    if (!q)
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
function de(t) {
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
        return de(e),
        null;
    case 1:
        return je(e.type) && Hs(),
        de(e),
        null;
    case 3:
        return r = e.stateNode,
        Bn(),
        V(be),
        V(fe),
        Ha(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (t === null || t.child === null) && (cs(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024,
        Qe !== null && (ra(Qe),
        Qe = null))),
        Jo(t, e),
        de(e),
        null;
    case 5:
        Va(e);
        var s = Zt(Mr.current);
        if (n = e.type,
        t !== null && e.stateNode != null)
            Wd(t, e, n, r, s),
            t.ref !== e.ref && (e.flags |= 512,
            e.flags |= 2097152);
        else {
            if (!r) {
                if (e.stateNode === null)
                    throw Error(x(166));
                return de(e),
                null
            }
            if (t = Zt(ot.current),
            cs(e)) {
                r = e.stateNode,
                n = e.type;
                var i = e.memoizedProps;
                switch (r[st] = e,
                r[Lr] = i,
                t = (e.mode & 1) !== 0,
                n) {
                case "dialog":
                    W("cancel", r),
                    W("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    W("load", r);
                    break;
                case "video":
                case "audio":
                    for (s = 0; s < hr.length; s++)
                        W(hr[s], r);
                    break;
                case "source":
                    W("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    W("error", r),
                    W("load", r);
                    break;
                case "details":
                    W("toggle", r);
                    break;
                case "input":
                    El(r, i),
                    W("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    W("invalid", r);
                    break;
                case "textarea":
                    jl(r, i),
                    W("invalid", r)
                }
                xo(n, i),
                s = null;
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var a = i[o];
                        o === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && us(r.textContent, a, t),
                        s = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && us(r.textContent, a, t),
                        s = ["children", "" + a]) : jr.hasOwnProperty(o) && a != null && o === "onScroll" && W("scroll", r)
                    }
                switch (n) {
                case "input":
                    ts(r),
                    bl(r, i, !0);
                    break;
                case "textarea":
                    ts(r),
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
                t === "http://www.w3.org/1999/xhtml" && (t = yc(n)),
                t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = o.createElement("div"),
                t.innerHTML = "<script><\/script>",
                t = t.removeChild(t.firstChild)) : typeof r.is == "string" ? t = o.createElement(n, {
                    is: r.is
                }) : (t = o.createElement(n),
                n === "select" && (o = t,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : t = o.createElementNS(t, n),
                t[st] = e,
                t[Lr] = r,
                Bd(t, e, !1, !1),
                e.stateNode = t;
                e: {
                    switch (o = So(n, r),
                    n) {
                    case "dialog":
                        W("cancel", t),
                        W("close", t),
                        s = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        W("load", t),
                        s = r;
                        break;
                    case "video":
                    case "audio":
                        for (s = 0; s < hr.length; s++)
                            W(hr[s], t);
                        s = r;
                        break;
                    case "source":
                        W("error", t),
                        s = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        W("error", t),
                        W("load", t),
                        s = r;
                        break;
                    case "details":
                        W("toggle", t),
                        s = r;
                        break;
                    case "input":
                        El(t, r),
                        s = vo(t, r),
                        W("invalid", t);
                        break;
                    case "option":
                        s = r;
                        break;
                    case "select":
                        t._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        s = J({}, r, {
                            value: void 0
                        }),
                        W("invalid", t);
                        break;
                    case "textarea":
                        jl(t, r),
                        s = _o(t, r),
                        W("invalid", t);
                        break;
                    default:
                        s = r
                    }
                    xo(n, s),
                    a = s;
                    for (i in a)
                        if (a.hasOwnProperty(i)) {
                            var l = a[i];
                            i === "style" ? kc(t, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && wc(t, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Cr(t, l) : typeof l == "number" && Cr(t, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (jr.hasOwnProperty(i) ? l != null && i === "onScroll" && W("scroll", t) : l != null && ka(t, i, l, o))
                        }
                    switch (n) {
                    case "input":
                        ts(t),
                        bl(t, r, !1);
                        break;
                    case "textarea":
                        ts(t),
                        Cl(t);
                        break;
                    case "option":
                        r.value != null && t.setAttribute("value", "" + Mt(r.value));
                        break;
                    case "select":
                        t.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? Rn(t, !!r.multiple, i, !1) : r.defaultValue != null && Rn(t, !!r.multiple, r.defaultValue, !0);
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
        return de(e),
        null;
    case 6:
        if (t && e.stateNode != null)
            Vd(t, e, t.memoizedProps, r);
        else {
            if (typeof r != "string" && e.stateNode === null)
                throw Error(x(166));
            if (n = Zt(Mr.current),
            Zt(ot.current),
            cs(e)) {
                if (r = e.stateNode,
                n = e.memoizedProps,
                r[st] = e,
                (i = r.nodeValue !== n) && (t = Re,
                t !== null))
                    switch (t.tag) {
                    case 3:
                        us(r.nodeValue, n, (t.mode & 1) !== 0);
                        break;
                    case 5:
                        t.memoizedProps.suppressHydrationWarning !== !0 && us(r.nodeValue, n, (t.mode & 1) !== 0)
                    }
                i && (e.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[st] = e,
                e.stateNode = r
        }
        return de(e),
        null;
    case 13:
        if (V(K),
        r = e.memoizedState,
        t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (q && Oe !== null && e.mode & 1 && !(e.flags & 128))
                ld(),
                zn(),
                e.flags |= 98560,
                i = !1;
            else if (i = cs(e),
            r !== null && r.dehydrated !== null) {
                if (t === null) {
                    if (!i)
                        throw Error(x(318));
                    if (i = e.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(x(317));
                    i[st] = e
                } else
                    zn(),
                    !(e.flags & 128) && (e.memoizedState = null),
                    e.flags |= 4;
                de(e),
                i = !1
            } else
                Qe !== null && (ra(Qe),
                Qe = null),
                i = !0;
            if (!i)
                return e.flags & 65536 ? e : null
        }
        return e.flags & 128 ? (e.lanes = n,
        e) : (r = r !== null,
        r !== (t !== null && t.memoizedState !== null) && r && (e.child.flags |= 8192,
        e.mode & 1 && (t === null || K.current & 1 ? se === 0 && (se = 3) : rl())),
        e.updateQueue !== null && (e.flags |= 4),
        de(e),
        null);
    case 4:
        return Bn(),
        Jo(t, e),
        t === null && Ar(e.stateNode.containerInfo),
        de(e),
        null;
    case 10:
        return za(e.type._context),
        de(e),
        null;
    case 17:
        return je(e.type) && Hs(),
        de(e),
        null;
    case 19:
        if (V(K),
        i = e.memoizedState,
        i === null)
            return de(e),
            null;
        if (r = (e.flags & 128) !== 0,
        o = i.rendering,
        o === null)
            if (r)
                rr(i, !1);
            else {
                if (se !== 0 || t !== null && t.flags & 128)
                    for (t = e.child; t !== null; ) {
                        if (o = Xs(t),
                        o !== null) {
                            for (e.flags |= 128,
                            rr(i, !1),
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
                            return B(K, K.current & 1 | 2),
                            e.child
                        }
                        t = t.sibling
                    }
                i.tail !== null && Y() > Vn && (e.flags |= 128,
                r = !0,
                rr(i, !1),
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
                    rr(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !o.alternate && !q)
                        return de(e),
                        null
                } else
                    2 * Y() - i.renderingStartTime > Vn && n !== 1073741824 && (e.flags |= 128,
                    r = !0,
                    rr(i, !1),
                    e.lanes = 4194304);
            i.isBackwards ? (o.sibling = e.child,
            e.child = o) : (n = i.last,
            n !== null ? n.sibling = o : e.child = o,
            i.last = o)
        }
        return i.tail !== null ? (e = i.tail,
        i.rendering = e,
        i.tail = e.sibling,
        i.renderingStartTime = Y(),
        e.sibling = null,
        n = K.current,
        B(K, r ? n & 1 | 2 : n & 1),
        e) : (de(e),
        null);
    case 22:
    case 23:
        return nl(),
        r = e.memoizedState !== null,
        t !== null && t.memoizedState !== null !== r && (e.flags |= 8192),
        r && e.mode & 1 ? Ne & 1073741824 && (de(e),
        e.subtreeFlags & 6 && (e.flags |= 8192)) : de(e),
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
        return je(e.type) && Hs(),
        t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 3:
        return Bn(),
        V(be),
        V(fe),
        Ha(),
        t = e.flags,
        t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128,
        e) : null;
    case 5:
        return Va(e),
        null;
    case 13:
        if (V(K),
        t = e.memoizedState,
        t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
                throw Error(x(340));
            zn()
        }
        return t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 19:
        return V(K),
        null;
    case 4:
        return Bn(),
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
var fs = !1
  , he = !1
  , Vp = typeof WeakSet == "function" ? WeakSet : Set
  , P = null;
function Nn(t, e) {
    var n = t.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Q(t, e, r)
            }
        else
            n.current = null
}
function Qo(t, e, n) {
    try {
        n()
    } catch (r) {
        Q(t, e, r)
    }
}
var gu = !1;
function Hp(t, e) {
    if (Io = Fs,
    t = Jc(),
    Aa(t)) {
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
                      , f = null;
                    t: for (; ; ) {
                        for (var v; d !== n || s !== 0 && d.nodeType !== 3 || (a = o + s),
                        d !== i || r !== 0 && d.nodeType !== 3 || (l = o + r),
                        d.nodeType === 3 && (o += d.nodeValue.length),
                        (v = d.firstChild) !== null; )
                            f = d,
                            d = v;
                        for (; ; ) {
                            if (d === t)
                                break t;
                            if (f === n && ++u === s && (a = o),
                            f === i && ++c === r && (l = o),
                            (v = d.nextSibling) !== null)
                                break;
                            d = f,
                            f = d.parentNode
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
                                  , p = e.stateNode
                                  , h = p.getSnapshotBeforeUpdate(e.elementType === e.type ? w : Ke(e.type, w), k);
                                p.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var m = e.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
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
                    Q(e, e.return, _)
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
function _r(t, e, n) {
    var r = e.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var s = r = r.next;
        do {
            if ((s.tag & t) === t) {
                var i = s.destroy;
                s.destroy = void 0,
                i !== void 0 && Qo(e, n, i)
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
function Yo(t) {
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
function Hd(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null,
    Hd(e)),
    t.child = null,
    t.deletions = null,
    t.sibling = null,
    t.tag === 5 && (e = t.stateNode,
    e !== null && (delete e[st],
    delete e[Lr],
    delete e[Do],
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
function qd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4
}
function vu(t) {
    e: for (; ; ) {
        for (; t.sibling === null; ) {
            if (t.return === null || qd(t.return))
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
function Xo(t, e, n) {
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
        for (Xo(t, e, n),
        t = t.sibling; t !== null; )
            Xo(t, e, n),
            t = t.sibling
}
function Zo(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
        t = t.stateNode,
        e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (r !== 4 && (t = t.child,
    t !== null))
        for (Zo(t, e, n),
        t = t.sibling; t !== null; )
            Zo(t, e, n),
            t = t.sibling
}
var ae = null
  , Ge = !1;
function _t(t, e, n) {
    for (n = n.child; n !== null; )
        Kd(t, e, n),
        n = n.sibling
}
function Kd(t, e, n) {
    if (it && typeof it.onCommitFiberUnmount == "function")
        try {
            it.onCommitFiberUnmount(ui, n)
        } catch {}
    switch (n.tag) {
    case 5:
        he || Nn(n, e);
    case 6:
        var r = ae
          , s = Ge;
        ae = null,
        _t(t, e, n),
        ae = r,
        Ge = s,
        ae !== null && (Ge ? (t = ae,
        n = n.stateNode,
        t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : ae.removeChild(n.stateNode));
        break;
    case 18:
        ae !== null && (Ge ? (t = ae,
        n = n.stateNode,
        t.nodeType === 8 ? qi(t.parentNode, n) : t.nodeType === 1 && qi(t, n),
        Or(t)) : qi(ae, n.stateNode));
        break;
    case 4:
        r = ae,
        s = Ge,
        ae = n.stateNode.containerInfo,
        Ge = !0,
        _t(t, e, n),
        ae = r,
        Ge = s;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!he && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            s = r = r.next;
            do {
                var i = s
                  , o = i.destroy;
                i = i.tag,
                o !== void 0 && (i & 2 || i & 4) && Qo(n, e, o),
                s = s.next
            } while (s !== r)
        }
        _t(t, e, n);
        break;
    case 1:
        if (!he && (Nn(n, e),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                Q(n, e, a)
            }
        _t(t, e, n);
        break;
    case 21:
        _t(t, e, n);
        break;
    case 22:
        n.mode & 1 ? (he = (r = he) || n.memoizedState !== null,
        _t(t, e, n),
        he = r) : _t(t, e, n);
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
function He(t, e) {
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
                        ae = a.stateNode,
                        Ge = !1;
                        break e;
                    case 3:
                        ae = a.stateNode.containerInfo,
                        Ge = !0;
                        break e;
                    case 4:
                        ae = a.stateNode.containerInfo,
                        Ge = !0;
                        break e
                    }
                    a = a.return
                }
                if (ae === null)
                    throw Error(x(160));
                Kd(i, o, s),
                ae = null,
                Ge = !1;
                var l = s.alternate;
                l !== null && (l.return = null),
                s.return = null
            } catch (u) {
                Q(s, e, u)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null; )
            Gd(e, t),
            e = e.sibling
}
function Gd(t, e) {
    var n = t.alternate
      , r = t.flags;
    switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (He(e, t),
        et(t),
        r & 4) {
            try {
                _r(3, t, t.return),
                vi(3, t)
            } catch (w) {
                Q(t, t.return, w)
            }
            try {
                _r(5, t, t.return)
            } catch (w) {
                Q(t, t.return, w)
            }
        }
        break;
    case 1:
        He(e, t),
        et(t),
        r & 512 && n !== null && Nn(n, n.return);
        break;
    case 5:
        if (He(e, t),
        et(t),
        r & 512 && n !== null && Nn(n, n.return),
        t.flags & 32) {
            var s = t.stateNode;
            try {
                Cr(s, "")
            } catch (w) {
                Q(t, t.return, w)
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
                    a === "input" && i.type === "radio" && i.name != null && gc(s, i),
                    So(a, o);
                    var u = So(a, i);
                    for (o = 0; o < l.length; o += 2) {
                        var c = l[o]
                          , d = l[o + 1];
                        c === "style" ? kc(s, d) : c === "dangerouslySetInnerHTML" ? wc(s, d) : c === "children" ? Cr(s, d) : ka(s, c, d, u)
                    }
                    switch (a) {
                    case "input":
                        yo(s, i);
                        break;
                    case "textarea":
                        vc(s, i);
                        break;
                    case "select":
                        var f = s._wrapperState.wasMultiple;
                        s._wrapperState.wasMultiple = !!i.multiple;
                        var v = i.value;
                        v != null ? Rn(s, !!i.multiple, v, !1) : f !== !!i.multiple && (i.defaultValue != null ? Rn(s, !!i.multiple, i.defaultValue, !0) : Rn(s, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    s[Lr] = i
                } catch (w) {
                    Q(t, t.return, w)
                }
        }
        break;
    case 6:
        if (He(e, t),
        et(t),
        r & 4) {
            if (t.stateNode === null)
                throw Error(x(162));
            s = t.stateNode,
            i = t.memoizedProps;
            try {
                s.nodeValue = i
            } catch (w) {
                Q(t, t.return, w)
            }
        }
        break;
    case 3:
        if (He(e, t),
        et(t),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Or(e.containerInfo)
            } catch (w) {
                Q(t, t.return, w)
            }
        break;
    case 4:
        He(e, t),
        et(t);
        break;
    case 13:
        He(e, t),
        et(t),
        s = t.child,
        s.flags & 8192 && (i = s.memoizedState !== null,
        s.stateNode.isHidden = i,
        !i || s.alternate !== null && s.alternate.memoizedState !== null || (el = Y())),
        r & 4 && yu(t);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        t.mode & 1 ? (he = (u = he) || c,
        He(e, t),
        he = u) : He(e, t),
        et(t),
        r & 8192) {
            if (u = t.memoizedState !== null,
            (t.stateNode.isHidden = u) && !c && t.mode & 1)
                for (P = t,
                c = t.child; c !== null; ) {
                    for (d = P = c; P !== null; ) {
                        switch (f = P,
                        v = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            _r(4, f, f.return);
                            break;
                        case 1:
                            Nn(f, f.return);
                            var y = f.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    e = r,
                                    y.props = e.memoizedProps,
                                    y.state = e.memoizedState,
                                    y.componentWillUnmount()
                                } catch (w) {
                                    Q(r, n, w)
                                }
                            }
                            break;
                        case 5:
                            Nn(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                _u(d);
                                continue
                            }
                        }
                        v !== null ? (v.return = f,
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
                            a.style.display = _c("display", o))
                        } catch (w) {
                            Q(t, t.return, w)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (w) {
                            Q(t, t.return, w)
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
        He(e, t),
        et(t),
        r & 4 && yu(t);
        break;
    case 21:
        break;
    default:
        He(e, t),
        et(t)
    }
}
function et(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null; ) {
                    if (qd(n)) {
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
                r.flags & 32 && (Cr(s, ""),
                r.flags &= -33);
                var i = vu(t);
                Zo(t, i, s);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , a = vu(t);
                Xo(t, a, o);
                break;
            default:
                throw Error(x(161))
            }
        } catch (l) {
            Q(t, t.return, l)
        }
        t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
}
function qp(t, e, n) {
    P = t,
    Jd(t)
}
function Jd(t, e, n) {
    for (var r = (t.mode & 1) !== 0; P !== null; ) {
        var s = P
          , i = s.child;
        if (s.tag === 22 && r) {
            var o = s.memoizedState !== null || fs;
            if (!o) {
                var a = s.alternate
                  , l = a !== null && a.memoizedState !== null || he;
                a = fs;
                var u = he;
                if (fs = o,
                (he = l) && !u)
                    for (P = s; P !== null; )
                        o = P,
                        l = o.child,
                        o.tag === 22 && o.memoizedState !== null ? ku(s) : l !== null ? (l.return = o,
                        P = l) : ku(s);
                for (; i !== null; )
                    P = i,
                    Jd(i),
                    i = i.sibling;
                P = s,
                fs = a,
                he = u
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
                        he || vi(5, e);
                        break;
                    case 1:
                        var r = e.stateNode;
                        if (e.flags & 4 && !he)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var s = e.elementType === e.type ? n.memoizedProps : Ke(e.type, n.memoizedProps);
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
                                    d !== null && Or(d)
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
                he || e.flags & 512 && Yo(e)
            } catch (f) {
                Q(e, e.return, f)
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
                    Q(e, n, l)
                }
                break;
            case 1:
                var r = e.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var s = e.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        Q(e, s, l)
                    }
                }
                var i = e.return;
                try {
                    Yo(e)
                } catch (l) {
                    Q(e, i, l)
                }
                break;
            case 5:
                var o = e.return;
                try {
                    Yo(e)
                } catch (l) {
                    Q(e, o, l)
                }
            }
        } catch (l) {
            Q(e, e.return, l)
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
  , ti = yt.ReactCurrentDispatcher
  , Xa = yt.ReactCurrentOwner
  , ze = yt.ReactCurrentBatchConfig
  , D = 0
  , oe = null
  , X = null
  , le = 0
  , Ne = 0
  , On = Bt(0)
  , se = 0
  , Br = null
  , on = 0
  , yi = 0
  , Za = 0
  , kr = null
  , xe = null
  , el = 0
  , Vn = 1 / 0
  , lt = null
  , ni = !1
  , ea = null
  , $t = null
  , ps = !1
  , Pt = null
  , ri = 0
  , xr = 0
  , ta = null
  , Os = -1
  , Rs = 0;
function ve() {
    return D & 6 ? Y() : Os !== -1 ? Os : Os = Y()
}
function Lt(t) {
    return t.mode & 1 ? D & 2 && le !== 0 ? le & -le : Np.transition !== null ? (Rs === 0 && (Rs = Ic()),
    Rs) : (t = U,
    t !== 0 || (t = window.event,
    t = t === void 0 ? 16 : zc(t.type)),
    t) : 1
}
function Xe(t, e, n, r) {
    if (50 < xr)
        throw xr = 0,
        ta = null,
        Error(x(185));
    Hr(t, n, r),
    (!(D & 2) || t !== oe) && (t === oe && (!(D & 2) && (yi |= n),
    se === 4 && jt(t, le)),
    Ce(t, r),
    n === 1 && D === 0 && !(e.mode & 1) && (Vn = Y() + 500,
    pi && Wt()))
}
function Ce(t, e) {
    var n = t.callbackNode;
    Nf(t, e);
    var r = zs(t, t === oe ? le : 0);
    if (r === 0)
        n !== null && Nl(n),
        t.callbackNode = null,
        t.callbackPriority = 0;
    else if (e = r & -r,
    t.callbackPriority !== e) {
        if (n != null && Nl(n),
        e === 1)
            t.tag === 0 ? Pp(xu.bind(null, t)) : id(xu.bind(null, t)),
            bp(function() {
                !(D & 6) && Wt()
            }),
            n = null;
        else {
            switch (Ac(r)) {
            case 1:
                n = ja;
                break;
            case 4:
                n = Oc;
                break;
            case 16:
                n = Us;
                break;
            case 536870912:
                n = Rc;
                break;
            default:
                n = Us
            }
            n = rh(n, Qd.bind(null, t))
        }
        t.callbackPriority = e,
        t.callbackNode = n
    }
}
function Qd(t, e) {
    if (Os = -1,
    Rs = 0,
    D & 6)
        throw Error(x(327));
    var n = t.callbackNode;
    if (Dn() && t.callbackNode !== n)
        return null;
    var r = zs(t, t === oe ? le : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & t.expiredLanes || e)
        e = si(t, r);
    else {
        e = r;
        var s = D;
        D |= 2;
        var i = Xd();
        (oe !== t || le !== e) && (lt = null,
        Vn = Y() + 500,
        en(t, e));
        do
            try {
                Qp();
                break
            } catch (a) {
                Yd(t, a)
            }
        while (!0);
        Ua(),
        ti.current = i,
        D = s,
        X !== null ? e = 0 : (oe = null,
        le = 0,
        e = se)
    }
    if (e !== 0) {
        if (e === 2 && (s = To(t),
        s !== 0 && (r = s,
        e = na(t, s))),
        e === 1)
            throw n = Br,
            en(t, 0),
            jt(t, r),
            Ce(t, Y()),
            n;
        if (e === 6)
            jt(t, r);
        else {
            if (s = t.current.alternate,
            !(r & 30) && !Gp(s) && (e = si(t, r),
            e === 2 && (i = To(t),
            i !== 0 && (r = i,
            e = na(t, i))),
            e === 1))
                throw n = Br,
                en(t, 0),
                jt(t, r),
                Ce(t, Y()),
                n;
            switch (t.finishedWork = s,
            t.finishedLanes = r,
            e) {
            case 0:
            case 1:
                throw Error(x(345));
            case 2:
                Gt(t, xe, lt);
                break;
            case 3:
                if (jt(t, r),
                (r & 130023424) === r && (e = el + 500 - Y(),
                10 < e)) {
                    if (zs(t, 0) !== 0)
                        break;
                    if (s = t.suspendedLanes,
                    (s & r) !== r) {
                        ve(),
                        t.pingedLanes |= t.suspendedLanes & s;
                        break
                    }
                    t.timeoutHandle = Lo(Gt.bind(null, t, xe, lt), e);
                    break
                }
                Gt(t, xe, lt);
                break;
            case 4:
                if (jt(t, r),
                (r & 4194240) === r)
                    break;
                for (e = t.eventTimes,
                s = -1; 0 < r; ) {
                    var o = 31 - Ye(r);
                    i = 1 << o,
                    o = e[o],
                    o > s && (s = o),
                    r &= ~i
                }
                if (r = s,
                r = Y() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Kp(r / 1960)) - r,
                10 < r) {
                    t.timeoutHandle = Lo(Gt.bind(null, t, xe, lt), r);
                    break
                }
                Gt(t, xe, lt);
                break;
            case 5:
                Gt(t, xe, lt);
                break;
            default:
                throw Error(x(329))
            }
        }
    }
    return Ce(t, Y()),
    t.callbackNode === n ? Qd.bind(null, t) : null
}
function na(t, e) {
    var n = kr;
    return t.current.memoizedState.isDehydrated && (en(t, e).flags |= 256),
    t = si(t, e),
    t !== 2 && (e = xe,
    xe = n,
    e !== null && ra(e)),
    t
}
function ra(t) {
    xe === null ? xe = t : xe.push.apply(xe, t)
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
                        if (!Ze(i(), s))
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
        var n = 31 - Ye(e)
          , r = 1 << n;
        t[n] = -1,
        e &= ~r
    }
}
function xu(t) {
    if (D & 6)
        throw Error(x(327));
    Dn();
    var e = zs(t, 0);
    if (!(e & 1))
        return Ce(t, Y()),
        null;
    var n = si(t, e);
    if (t.tag !== 0 && n === 2) {
        var r = To(t);
        r !== 0 && (e = r,
        n = na(t, r))
    }
    if (n === 1)
        throw n = Br,
        en(t, 0),
        jt(t, e),
        Ce(t, Y()),
        n;
    if (n === 6)
        throw Error(x(345));
    return t.finishedWork = t.current.alternate,
    t.finishedLanes = e,
    Gt(t, xe, lt),
    Ce(t, Y()),
    null
}
function tl(t, e) {
    var n = D;
    D |= 1;
    try {
        return t(e)
    } finally {
        D = n,
        D === 0 && (Vn = Y() + 500,
        pi && Wt())
    }
}
function an(t) {
    Pt !== null && Pt.tag === 0 && !(D & 6) && Dn();
    var e = D;
    D |= 1;
    var n = ze.transition
      , r = U;
    try {
        if (ze.transition = null,
        U = 1,
        t)
            return t()
    } finally {
        U = r,
        ze.transition = n,
        D = e,
        !(D & 6) && Wt()
    }
}
function nl() {
    Ne = On.current,
    V(On)
}
function en(t, e) {
    t.finishedWork = null,
    t.finishedLanes = 0;
    var n = t.timeoutHandle;
    if (n !== -1 && (t.timeoutHandle = -1,
    Ep(n)),
    X !== null)
        for (n = X.return; n !== null; ) {
            var r = n;
            switch (La(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Hs();
                break;
            case 3:
                Bn(),
                V(be),
                V(fe),
                Ha();
                break;
            case 5:
                Va(r);
                break;
            case 4:
                Bn();
                break;
            case 13:
                V(K);
                break;
            case 19:
                V(K);
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
    if (oe = t,
    X = t = Dt(t.current, null),
    le = Ne = e,
    se = 0,
    Br = null,
    Za = yi = on = 0,
    xe = kr = null,
    Xt !== null) {
        for (e = 0; e < Xt.length; e++)
            if (n = Xt[e],
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
        Xt = null
    }
    return t
}
function Yd(t, e) {
    do {
        var n = X;
        try {
            if (Ua(),
            Ts.current = ei,
            Zs) {
                for (var r = G.memoizedState; r !== null; ) {
                    var s = r.queue;
                    s !== null && (s.pending = null),
                    r = r.next
                }
                Zs = !1
            }
            if (sn = 0,
            ie = re = G = null,
            wr = !1,
            Ur = 0,
            Xa.current = null,
            n === null || n.return === null) {
                se = 1,
                Br = e,
                X = null;
                break
            }
            e: {
                var i = t
                  , o = n.return
                  , a = n
                  , l = e;
                if (e = le,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue,
                        c.memoizedState = f.memoizedState,
                        c.lanes = f.lanes) : (c.updateQueue = null,
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
                } else if (q && a.mode & 1) {
                    var k = uu(o);
                    if (k !== null) {
                        !(k.flags & 65536) && (k.flags |= 256),
                        cu(k, o, a, i, e),
                        Da(Wn(l, a));
                        break e
                    }
                }
                i = l = Wn(l, a),
                se !== 4 && (se = 2),
                kr === null ? kr = [i] : kr.push(i),
                i = o;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        e &= -e,
                        i.lanes |= e;
                        var p = Ad(i, l, e);
                        nu(i, p);
                        break e;
                    case 1:
                        a = l;
                        var h = i.type
                          , m = i.stateNode;
                        if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && ($t === null || !$t.has(m)))) {
                            i.flags |= 65536,
                            e &= -e,
                            i.lanes |= e;
                            var _ = $d(i, a, e);
                            nu(i, _);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            eh(n)
        } catch (j) {
            e = j,
            X === n && n !== null && (X = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Xd() {
    var t = ti.current;
    return ti.current = ei,
    t === null ? ei : t
}
function rl() {
    (se === 0 || se === 3 || se === 2) && (se = 4),
    oe === null || !(on & 268435455) && !(yi & 268435455) || jt(oe, le)
}
function si(t, e) {
    var n = D;
    D |= 2;
    var r = Xd();
    (oe !== t || le !== e) && (lt = null,
    en(t, e));
    do
        try {
            Jp();
            break
        } catch (s) {
            Yd(t, s)
        }
    while (!0);
    if (Ua(),
    D = n,
    ti.current = r,
    X !== null)
        throw Error(x(261));
    return oe = null,
    le = 0,
    se
}
function Jp() {
    for (; X !== null; )
        Zd(X)
}
function Qp() {
    for (; X !== null && !kf(); )
        Zd(X)
}
function Zd(t) {
    var e = nh(t.alternate, t, Ne);
    t.memoizedProps = t.pendingProps,
    e === null ? eh(t) : X = e,
    Xa.current = null
}
function eh(t) {
    var e = t;
    do {
        var n = e.alternate;
        if (t = e.return,
        e.flags & 32768) {
            if (n = Wp(n, e),
            n !== null) {
                n.flags &= 32767,
                X = n;
                return
            }
            if (t !== null)
                t.flags |= 32768,
                t.subtreeFlags = 0,
                t.deletions = null;
            else {
                se = 6,
                X = null;
                return
            }
        } else if (n = Bp(n, e, Ne),
        n !== null) {
            X = n;
            return
        }
        if (e = e.sibling,
        e !== null) {
            X = e;
            return
        }
        X = e = t
    } while (e !== null);
    se === 0 && (se = 5)
}
function Gt(t, e, n) {
    var r = U
      , s = ze.transition;
    try {
        ze.transition = null,
        U = 1,
        Yp(t, e, n, r)
    } finally {
        ze.transition = s,
        U = r
    }
    return null
}
function Yp(t, e, n, r) {
    do
        Dn();
    while (Pt !== null);
    if (D & 6)
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
    t === oe && (X = oe = null,
    le = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ps || (ps = !0,
    rh(Us, function() {
        return Dn(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = ze.transition,
        ze.transition = null;
        var o = U;
        U = 1;
        var a = D;
        D |= 4,
        Xa.current = null,
        Hp(t, n),
        Gd(n, t),
        vp(Ao),
        Fs = !!Io,
        Ao = Io = null,
        t.current = n,
        qp(n),
        xf(),
        D = a,
        U = o,
        ze.transition = i
    } else
        t.current = n;
    if (ps && (ps = !1,
    Pt = t,
    ri = s),
    i = t.pendingLanes,
    i === 0 && ($t = null),
    bf(n.stateNode),
    Ce(t, Y()),
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
        t = ea,
        ea = null,
        t;
    return ri & 1 && t.tag !== 0 && Dn(),
    i = t.pendingLanes,
    i & 1 ? t === ta ? xr++ : (xr = 0,
    ta = t) : xr = 0,
    Wt(),
    null
}
function Dn() {
    if (Pt !== null) {
        var t = Ac(ri)
          , e = ze.transition
          , n = U;
        try {
            if (ze.transition = null,
            U = 16 > t ? 16 : t,
            Pt === null)
                var r = !1;
            else {
                if (t = Pt,
                Pt = null,
                ri = 0,
                D & 6)
                    throw Error(x(331));
                var s = D;
                for (D |= 4,
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
                                        _r(8, c, i)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        P = d;
                                    else
                                        for (; P !== null; ) {
                                            c = P;
                                            var f = c.sibling
                                              , v = c.return;
                                            if (Hd(c),
                                            c === u) {
                                                P = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = v,
                                                P = f;
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
                                    _r(9, i, i.return)
                                }
                            var p = i.sibling;
                            if (p !== null) {
                                p.return = i.return,
                                P = p;
                                break e
                            }
                            P = i.return
                        }
                }
                var h = t.current;
                for (P = h; P !== null; ) {
                    o = P;
                    var m = o.child;
                    if (o.subtreeFlags & 2064 && m !== null)
                        m.return = o,
                        P = m;
                    else
                        e: for (o = h; P !== null; ) {
                            if (a = P,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        vi(9, a)
                                    }
                                } catch (j) {
                                    Q(a, a.return, j)
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
                if (D = s,
                Wt(),
                it && typeof it.onPostCommitFiberRoot == "function")
                    try {
                        it.onPostCommitFiberRoot(ui, t)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            U = n,
            ze.transition = e
        }
    }
    return !1
}
function Su(t, e, n) {
    e = Wn(n, e),
    e = Ad(t, e, 1),
    t = At(t, e, 1),
    e = ve(),
    t !== null && (Hr(t, 1, e),
    Ce(t, e))
}
function Q(t, e, n) {
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
                    t = Wn(n, t),
                    t = $d(e, t, 1),
                    e = At(e, t, 1),
                    t = ve(),
                    e !== null && (Hr(e, 1, t),
                    Ce(e, t));
                    break
                }
            }
            e = e.return
        }
}
function Xp(t, e, n) {
    var r = t.pingCache;
    r !== null && r.delete(e),
    e = ve(),
    t.pingedLanes |= t.suspendedLanes & n,
    oe === t && (le & n) === n && (se === 4 || se === 3 && (le & 130023424) === le && 500 > Y() - el ? en(t, 0) : Za |= n),
    Ce(t, e)
}
function th(t, e) {
    e === 0 && (t.mode & 1 ? (e = ss,
    ss <<= 1,
    !(ss & 130023424) && (ss = 4194304)) : e = 1);
    var n = ve();
    t = gt(t, e),
    t !== null && (Hr(t, e, n),
    Ce(t, n))
}
function Zp(t) {
    var e = t.memoizedState
      , n = 0;
    e !== null && (n = e.retryLane),
    th(t, n)
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
    th(t, n)
}
var nh;
nh = function(t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || be.current)
            Ee = !0;
        else {
            if (!(t.lanes & n) && !(e.flags & 128))
                return Ee = !1,
                Fp(t, e, n);
            Ee = !!(t.flags & 131072)
        }
    else
        Ee = !1,
        q && e.flags & 1048576 && od(e, Gs, e.index);
    switch (e.lanes = 0,
    e.tag) {
    case 2:
        var r = e.type;
        Ns(t, e),
        t = e.pendingProps;
        var s = Un(e, fe.current);
        Ln(e, n),
        s = Ka(null, e, r, t, s, n);
        var i = Ga();
        return e.flags |= 1,
        typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (e.tag = 1,
        e.memoizedState = null,
        e.updateQueue = null,
        je(r) ? (i = !0,
        qs(e)) : i = !1,
        e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        Ba(e),
        s.updater = gi,
        e.stateNode = s,
        s._reactInternals = e,
        Wo(e, r, t, n),
        e = qo(null, e, r, !0, i, n)) : (e.tag = 0,
        q && i && $a(e),
        ge(null, e, s, n),
        e = e.child),
        e;
    case 16:
        r = e.elementType;
        e: {
            switch (Ns(t, e),
            t = e.pendingProps,
            s = r._init,
            r = s(r._payload),
            e.type = r,
            s = e.tag = nm(r),
            t = Ke(r, t),
            s) {
            case 0:
                e = Ho(null, e, r, t, n);
                break e;
            case 1:
                e = fu(null, e, r, t, n);
                break e;
            case 11:
                e = du(null, e, r, t, n);
                break e;
            case 14:
                e = hu(null, e, r, Ke(r.type, t), n);
                break e
            }
            throw Error(x(306, r, ""))
        }
        return e;
    case 0:
        return r = e.type,
        s = e.pendingProps,
        s = e.elementType === r ? s : Ke(r, s),
        Ho(t, e, r, s, n);
    case 1:
        return r = e.type,
        s = e.pendingProps,
        s = e.elementType === r ? s : Ke(r, s),
        fu(t, e, r, s, n);
    case 3:
        e: {
            if (Ud(e),
            t === null)
                throw Error(x(387));
            r = e.pendingProps,
            i = e.memoizedState,
            s = i.element,
            hd(t, e),
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
                    s = Wn(Error(x(423)), e),
                    e = pu(t, e, r, n, s);
                    break e
                } else if (r !== s) {
                    s = Wn(Error(x(424)), e),
                    e = pu(t, e, r, n, s);
                    break e
                } else
                    for (Oe = It(e.stateNode.containerInfo.firstChild),
                    Re = e,
                    q = !0,
                    Qe = null,
                    n = cd(e, null, r, n),
                    e.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (zn(),
                r === s) {
                    e = vt(t, e, n);
                    break e
                }
                ge(t, e, r, n)
            }
            e = e.child
        }
        return e;
    case 5:
        return fd(e),
        t === null && zo(e),
        r = e.type,
        s = e.pendingProps,
        i = t !== null ? t.memoizedProps : null,
        o = s.children,
        $o(r, s) ? o = null : i !== null && $o(r, i) && (e.flags |= 32),
        Md(t, e),
        ge(t, e, o, n),
        e.child;
    case 6:
        return t === null && zo(e),
        null;
    case 13:
        return zd(t, e, n);
    case 4:
        return Wa(e, e.stateNode.containerInfo),
        r = e.pendingProps,
        t === null ? e.child = Fn(e, null, r, n) : ge(t, e, r, n),
        e.child;
    case 11:
        return r = e.type,
        s = e.pendingProps,
        s = e.elementType === r ? s : Ke(r, s),
        du(t, e, r, s, n);
    case 7:
        return ge(t, e, e.pendingProps, n),
        e.child;
    case 8:
        return ge(t, e, e.pendingProps.children, n),
        e.child;
    case 12:
        return ge(t, e, e.pendingProps.children, n),
        e.child;
    case 10:
        e: {
            if (r = e.type._context,
            s = e.pendingProps,
            i = e.memoizedProps,
            o = s.value,
            B(Js, r._currentValue),
            r._currentValue = o,
            i !== null)
                if (Ze(i.value, o)) {
                    if (i.children === s.children && !be.current) {
                        e = vt(t, e, n);
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
                                        l = ft(-1, n & -n),
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
                                    Fo(i.return, n, e),
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
                            Fo(o, n, e),
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
            ge(t, e, s.children, n),
            e = e.child
        }
        return e;
    case 9:
        return s = e.type,
        r = e.pendingProps.children,
        Ln(e, n),
        s = Be(s),
        r = r(s),
        e.flags |= 1,
        ge(t, e, r, n),
        e.child;
    case 14:
        return r = e.type,
        s = Ke(r, e.pendingProps),
        s = Ke(r.type, s),
        hu(t, e, r, s, n);
    case 15:
        return Ld(t, e, e.type, e.pendingProps, n);
    case 17:
        return r = e.type,
        s = e.pendingProps,
        s = e.elementType === r ? s : Ke(r, s),
        Ns(t, e),
        e.tag = 1,
        je(r) ? (t = !0,
        qs(e)) : t = !1,
        Ln(e, n),
        Id(e, r, s),
        Wo(e, r, s, n),
        qo(null, e, r, !0, t, n);
    case 19:
        return Fd(t, e, n);
    case 22:
        return Dd(t, e, n)
    }
    throw Error(x(156, e.tag))
}
;
function rh(t, e) {
    return Nc(t, e)
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
function Ue(t, e, n, r) {
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
    return n === null ? (n = Ue(t.tag, e, t.key, t.mode),
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
        case kn:
            return tn(n.children, s, i, e);
        case xa:
            o = 8,
            s |= 8;
            break;
        case fo:
            return t = Ue(12, n, e, s | 2),
            t.elementType = fo,
            t.lanes = i,
            t;
        case po:
            return t = Ue(13, n, e, s),
            t.elementType = po,
            t.lanes = i,
            t;
        case mo:
            return t = Ue(19, n, e, s),
            t.elementType = mo,
            t.lanes = i,
            t;
        case fc:
            return wi(n, s, i, e);
        default:
            if (typeof t == "object" && t !== null)
                switch (t.$$typeof) {
                case dc:
                    o = 10;
                    break e;
                case hc:
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
    return e = Ue(o, n, e, s),
    e.elementType = t,
    e.type = r,
    e.lanes = i,
    e
}
function tn(t, e, n, r) {
    return t = Ue(7, t, r, e),
    t.lanes = n,
    t
}
function wi(t, e, n, r) {
    return t = Ue(22, t, r, e),
    t.elementType = fc,
    t.lanes = n,
    t.stateNode = {
        isHidden: !1
    },
    t
}
function eo(t, e, n) {
    return t = Ue(6, t, null, e),
    t.lanes = n,
    t
}
function to(t, e, n) {
    return e = Ue(4, t.children !== null ? t.children : [], t.key, e),
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
    this.eventTimes = $i(0),
    this.expirationTimes = $i(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = $i(0),
    this.identifierPrefix = r,
    this.onRecoverableError = s,
    this.mutableSourceEagerHydrationData = null
}
function il(t, e, n, r, s, i, o, a, l) {
    return t = new rm(t,e,n,a,l),
    e === 1 ? (e = 1,
    i === !0 && (e |= 8)) : e = 0,
    i = Ue(3, null, null, e),
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
        $$typeof: _n,
        key: r == null ? null : "" + r,
        children: t,
        containerInfo: e,
        implementation: n
    }
}
function sh(t) {
    if (!t)
        return Ut;
    t = t._reactInternals;
    e: {
        if (un(t) !== t || t.tag !== 1)
            throw Error(x(170));
        var e = t;
        do {
            switch (e.tag) {
            case 3:
                e = e.stateNode.context;
                break e;
            case 1:
                if (je(e.type)) {
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
        if (je(n))
            return sd(t, n, e)
    }
    return e
}
function ih(t, e, n, r, s, i, o, a, l) {
    return t = il(n, r, !0, t, s, i, o, a, l),
    t.context = sh(null),
    n = t.current,
    r = ve(),
    s = Lt(n),
    i = ft(r, s),
    i.callback = e ?? null,
    At(n, i, s),
    t.current.lanes = s,
    Hr(t, s, r),
    Ce(t, r),
    t
}
function _i(t, e, n, r) {
    var s = e.current
      , i = ve()
      , o = Lt(s);
    return n = sh(n),
    e.context === null ? e.context = n : e.pendingContext = n,
    e = ft(i, o),
    e.payload = {
        element: t
    },
    r = r === void 0 ? null : r,
    r !== null && (e.callback = r),
    t = At(s, e, o),
    t !== null && (Xe(t, s, o, i),
    Cs(t, s, o)),
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
var oh = typeof reportError == "function" ? reportError : function(t) {
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
        an(function() {
            _i(null, t, null, null)
        }),
        e[mt] = null
    }
}
;
function ki(t) {
    this._internalRoot = t
}
ki.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
        var e = Dc();
        t = {
            blockedOn: null,
            target: t,
            priority: e
        };
        for (var n = 0; n < bt.length && e !== 0 && e < bt[n].priority; n++)
            ;
        bt.splice(n, 0, t),
        n === 0 && Uc(t)
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
        var o = ih(e, r, t, 0, null, !1, !1, "", bu);
        return t._reactRootContainer = o,
        t[mt] = o.current,
        Ar(t.nodeType === 8 ? t.parentNode : t),
        an(),
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
    t[mt] = l.current,
    Ar(t.nodeType === 8 ? t.parentNode : t),
    an(function() {
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
$c = function(t) {
    switch (t.tag) {
    case 3:
        var e = t.stateNode;
        if (e.current.memoizedState.isDehydrated) {
            var n = dr(e.pendingLanes);
            n !== 0 && (Ca(e, n | 1),
            Ce(e, Y()),
            !(D & 6) && (Vn = Y() + 500,
            Wt()))
        }
        break;
    case 13:
        an(function() {
            var r = gt(t, 1);
            if (r !== null) {
                var s = ve();
                Xe(r, t, 1, s)
            }
        }),
        ol(t, 1)
    }
}
;
Ta = function(t) {
    if (t.tag === 13) {
        var e = gt(t, 134217728);
        if (e !== null) {
            var n = ve();
            Xe(e, t, 134217728, n)
        }
        ol(t, 134217728)
    }
}
;
Lc = function(t) {
    if (t.tag === 13) {
        var e = Lt(t)
          , n = gt(t, e);
        if (n !== null) {
            var r = ve();
            Xe(n, t, e, r)
        }
        ol(t, e)
    }
}
;
Dc = function() {
    return U
}
;
Mc = function(t, e) {
    var n = U;
    try {
        return U = t,
        e()
    } finally {
        U = n
    }
}
;
bo = function(t, e, n) {
    switch (e) {
    case "input":
        if (yo(t, n),
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
                    mc(r),
                    yo(r, s)
                }
            }
        }
        break;
    case "textarea":
        vc(t, n);
        break;
    case "select":
        e = n.value,
        e != null && Rn(t, !!n.multiple, e, !1)
    }
}
;
Ec = tl;
bc = an;
var am = {
    usingClientEntryPoint: !1,
    Events: [Kr, bn, fi, xc, Sc, tl]
}
  , sr = {
    findFiberByHostInstance: Yt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , lm = {
    bundleType: sr.bundleType,
    version: sr.version,
    rendererPackageName: sr.rendererPackageName,
    rendererConfig: sr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(t) {
        return t = Tc(t),
        t === null ? null : t.stateNode
    },
    findFiberByHostInstance: sr.findFiberByHostInstance || im,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ms = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ms.isDisabled && ms.supportsFiber)
        try {
            ui = ms.inject(lm),
            it = ms
        } catch {}
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = am;
Ae.createPortal = function(t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ll(e))
        throw Error(x(200));
    return sm(t, e, null, n)
}
;
Ae.createRoot = function(t, e) {
    if (!ll(t))
        throw Error(x(299));
    var n = !1
      , r = ""
      , s = oh;
    return e != null && (e.unstable_strictMode === !0 && (n = !0),
    e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
    e.onRecoverableError !== void 0 && (s = e.onRecoverableError)),
    e = il(t, 1, !1, null, null, n, !1, r, s),
    t[mt] = e.current,
    Ar(t.nodeType === 8 ? t.parentNode : t),
    new al(e)
}
;
Ae.findDOMNode = function(t) {
    if (t == null)
        return null;
    if (t.nodeType === 1)
        return t;
    var e = t._reactInternals;
    if (e === void 0)
        throw typeof t.render == "function" ? Error(x(188)) : (t = Object.keys(t).join(","),
        Error(x(268, t)));
    return t = Tc(e),
    t = t === null ? null : t.stateNode,
    t
}
;
Ae.flushSync = function(t) {
    return an(t)
}
;
Ae.hydrate = function(t, e, n) {
    if (!xi(e))
        throw Error(x(200));
    return Si(null, t, e, !0, n)
}
;
Ae.hydrateRoot = function(t, e, n) {
    if (!ll(t))
        throw Error(x(405));
    var r = n != null && n.hydratedSources || null
      , s = !1
      , i = ""
      , o = oh;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    e = ih(e, null, t, 1, n ?? null, s, !1, i, o),
    t[mt] = e.current,
    Ar(t),
    r)
        for (t = 0; t < r.length; t++)
            n = r[t],
            s = n._getVersion,
            s = s(n._source),
            e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, s] : e.mutableSourceEagerHydrationData.push(n, s);
    return new ki(e)
}
;
Ae.render = function(t, e, n) {
    if (!xi(e))
        throw Error(x(200));
    return Si(null, t, e, !1, n)
}
;
Ae.unmountComponentAtNode = function(t) {
    if (!xi(t))
        throw Error(x(40));
    return t._reactRootContainer ? (an(function() {
        Si(null, null, t, !1, function() {
            t._reactRootContainer = null,
            t[mt] = null
        })
    }),
    !0) : !1
}
;
Ae.unstable_batchedUpdates = tl;
Ae.unstable_renderSubtreeIntoContainer = function(t, e, n, r) {
    if (!xi(n))
        throw Error(x(200));
    if (t == null || t._reactInternals === void 0)
        throw Error(x(38));
    return Si(t, e, n, !1, r)
}
;
Ae.version = "18.3.1-next-f1338f8080-20240426";
function ah() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ah)
        } catch (t) {
            console.error(t)
        }
}
ah(),
ac.exports = Ae;
var um = ac.exports, lh, ju = um;
lh = ju.createRoot,
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
  , _e = (t, e) => {
    const n = C.forwardRef( ({color: r="currentColor", size: s=24, strokeWidth: i=2, absoluteStrokeWidth: o, className: a="", children: l, ...u}, c) => C.createElement("svg", {
        ref: c,
        ...cm,
        width: s,
        height: s,
        stroke: r,
        strokeWidth: o ? Number(i) * 24 / Number(s) : i,
        className: ["lucide", `lucide-${dm(t)}`, a].join(" "),
        ...u
    }, [...e.map( ([d,f]) => C.createElement(d, f)), ...Array.isArray(l) ? l : [l]]));
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
const hm = _e("AlertCircle", [["circle", {
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
const fm = _e("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ul = _e("Eye", [["path", {
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
const As = _e("MessageCircle", [["path", {
    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
    key: "vv11sd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pm = _e("Play", [["polygon", {
    points: "5 3 19 12 5 21 5 3",
    key: "191637"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mm = _e("Radio", [["path", {
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
const uh = _e("RefreshCw", [["path", {
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
const gm = _e("RotateCcw", [["path", {
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
const vm = _e("Send", [["path", {
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
const ch = _e("Share2", [["circle", {
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
const ym = _e("Smile", [["circle", {
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
const wm = _e("TrendingUp", [["polyline", {
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
const _m = _e("Users", [["path", {
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
const km = _e("X", [["path", {
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
const dh = _e("Zap", [["polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
    key: "45s27k"
}]])
  , xm = "https://i.postimg.cc/J4m9Dz70/Gemini-Generated-Image-4zvnud4zvnud4zvn-Picsart-Background-Remover.png";
function Sm() {
    return g.jsx("header", {
        className: "sticky top-0 z-40 px-3 sm:px-6 lg:px-8 py-3 sm:py-4 border-b border-orange-500/10 backdrop-blur-md bg-gradient-to-b from-gray-950/95 to-gray-950/80 shadow-lg shadow-black/20",
        children: g.jsxs("div", {
            className: "max-w-7xl mx-auto flex items-center justify-between",
            children: [g.jsxs("div", {
                className: "flex items-center gap-2 sm:gap-4 min-w-0",
                children: [g.jsx("div", {
                    className: "relative flex-shrink-0",
                    children: g.jsx("img", {
                        src: xm,
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
function Em({channel: t, onClick: e, viewCount: n, liveViewers: r, peakViewers: s}) {
    const [i,o] = C.useState(!1)
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
                    children: [g.jsx(dh, {
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
                        children: [g.jsx(ch, {
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
function bm({channels: t, loading: e, error: n, onSelect: r, viewCounts: s, liveViewers: i, peakViewers: o}) {
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
            children: [g.jsx(uh, {
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
            children: g.jsx(Em, {
                channel: a,
                onClick: r,
                viewCount: s[a.id] || 0,
                liveViewers: i[a.id] || 0,
                peakViewers: o[a.id] || 0
            })
        }, a.id))
    })
}
const gs = 43200
  , Cu = 1440
  , Tu = Symbol.for("constructDateFrom");
function cl(t, e) {
    return typeof t == "function" ? t(e) : t && typeof t == "object" && Tu in t ? t[Tu](e) : t instanceof Date ? new t.constructor(e) : new Date(e)
}
function zt(t, e) {
    return cl(t, t)
}
let jm = {};
function Cm() {
    return jm
}
function Pu(t) {
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
function Tm(t) {
    return cl(t, Date.now())
}
function Pm(t, e, n) {
    const [r,s] = dl(n == null ? void 0 : n.in, t, e)
      , i = r.getFullYear() - s.getFullYear()
      , o = r.getMonth() - s.getMonth();
    return i * 12 + o
}
function Nm(t) {
    return e => {
        const r = (t ? Math[t] : Math.trunc)(e);
        return r === 0 ? 0 : r
    }
}
function Om(t, e) {
    return +zt(t) - +zt(e)
}
function Rm(t, e) {
    const n = zt(t);
    return n.setHours(23, 59, 59, 999),
    n
}
function Im(t, e) {
    const n = zt(t)
      , r = n.getMonth();
    return n.setFullYear(n.getFullYear(), r + 1, 0),
    n.setHours(23, 59, 59, 999),
    n
}
function Am(t, e) {
    const n = zt(t);
    return +Rm(n) == +Im(n)
}
function $m(t, e, n) {
    const [r,s,i] = dl(n == null ? void 0 : n.in, t, t, e)
      , o = $s(s, i)
      , a = Math.abs(Pm(s, i));
    if (a < 1)
        return 0;
    s.getMonth() === 1 && s.getDate() > 27 && s.setDate(30),
    s.setMonth(s.getMonth() - o * a);
    let l = $s(s, i) === -o;
    Am(r) && a === 1 && $s(r, i) === 1 && (l = !1);
    const u = o * (a - +l);
    return u === 0 ? 0 : u
}
function Lm(t, e, n) {
    const r = Om(t, e) / 1e3;
    return Nm(n == null ? void 0 : n.roundingMethod)(r)
}
const Dm = {
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
  , Mm = (t, e, n) => {
    let r;
    const s = Dm[t];
    return typeof s == "string" ? r = s : e === 1 ? r = s.one : r = s.other.replace("{{count}}", e.toString()),
    n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r
}
;
function no(t) {
    return (e={}) => {
        const n = e.width ? String(e.width) : t.defaultWidth;
        return t.formats[n] || t.formats[t.defaultWidth]
    }
}
const Um = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
}
  , zm = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
}
  , Fm = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
}
  , Bm = {
    date: no({
        formats: Um,
        defaultWidth: "full"
    }),
    time: no({
        formats: zm,
        defaultWidth: "full"
    }),
    dateTime: no({
        formats: Fm,
        defaultWidth: "full"
    })
}
  , Wm = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
}
  , Vm = (t, e, n, r) => Wm[t];
function ir(t) {
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
const Hm = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
}
  , qm = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}
  , Km = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}
  , Gm = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}
  , Jm = {
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
  , Qm = {
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
  , Ym = (t, e) => {
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
  , Xm = {
    ordinalNumber: Ym,
    era: ir({
        values: Hm,
        defaultWidth: "wide"
    }),
    quarter: ir({
        values: qm,
        defaultWidth: "wide",
        argumentCallback: t => t - 1
    }),
    month: ir({
        values: Km,
        defaultWidth: "wide"
    }),
    day: ir({
        values: Gm,
        defaultWidth: "wide"
    }),
    dayPeriod: ir({
        values: Jm,
        defaultWidth: "wide",
        formattingValues: Qm,
        defaultFormattingWidth: "wide"
    })
};
function or(t) {
    return (e, n={}) => {
        const r = n.width
          , s = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth]
          , i = e.match(s);
        if (!i)
            return null;
        const o = i[0]
          , a = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth]
          , l = Array.isArray(a) ? eg(a, d => d.test(o)) : Zm(a, d => d.test(o));
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
function Zm(t, e) {
    for (const n in t)
        if (Object.prototype.hasOwnProperty.call(t, n) && e(t[n]))
            return n
}
function eg(t, e) {
    for (let n = 0; n < t.length; n++)
        if (e(t[n]))
            return n
}
function tg(t) {
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
const ng = /^(\d+)(th|st|nd|rd)?/i
  , rg = /\d+/i
  , sg = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
}
  , ig = {
    any: [/^b/i, /^(a|c)/i]
}
  , og = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
}
  , ag = {
    any: [/1/i, /2/i, /3/i, /4/i]
}
  , lg = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}
  , ug = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}
  , cg = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}
  , dg = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}
  , hg = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}
  , fg = {
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
  , pg = {
    ordinalNumber: tg({
        matchPattern: ng,
        parsePattern: rg,
        valueCallback: t => parseInt(t, 10)
    }),
    era: or({
        matchPatterns: sg,
        defaultMatchWidth: "wide",
        parsePatterns: ig,
        defaultParseWidth: "any"
    }),
    quarter: or({
        matchPatterns: og,
        defaultMatchWidth: "wide",
        parsePatterns: ag,
        defaultParseWidth: "any",
        valueCallback: t => t + 1
    }),
    month: or({
        matchPatterns: lg,
        defaultMatchWidth: "wide",
        parsePatterns: ug,
        defaultParseWidth: "any"
    }),
    day: or({
        matchPatterns: cg,
        defaultMatchWidth: "wide",
        parsePatterns: dg,
        defaultParseWidth: "any"
    }),
    dayPeriod: or({
        matchPatterns: hg,
        defaultMatchWidth: "any",
        parsePatterns: fg,
        defaultParseWidth: "any"
    })
}
  , mg = {
    code: "en-US",
    formatDistance: Mm,
    formatLong: Bm,
    formatRelative: Vm,
    localize: Xm,
    match: pg,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
function gg(t, e, n) {
    const r = Cm()
      , s = (n == null ? void 0 : n.locale) ?? r.locale ?? mg
      , i = 2520
      , o = $s(t, e);
    if (isNaN(o))
        throw new RangeError("Invalid time value");
    const a = Object.assign({}, n, {
        addSuffix: n == null ? void 0 : n.addSuffix,
        comparison: o
    })
      , [l,u] = dl(n == null ? void 0 : n.in, ...o > 0 ? [e, t] : [t, e])
      , c = Lm(u, l)
      , d = (Pu(u) - Pu(l)) / 1e3
      , f = Math.round((c - d) / 60);
    let v;
    if (f < 2)
        return n != null && n.includeSeconds ? c < 5 ? s.formatDistance("lessThanXSeconds", 5, a) : c < 10 ? s.formatDistance("lessThanXSeconds", 10, a) : c < 20 ? s.formatDistance("lessThanXSeconds", 20, a) : c < 40 ? s.formatDistance("halfAMinute", 0, a) : c < 60 ? s.formatDistance("lessThanXMinutes", 1, a) : s.formatDistance("xMinutes", 1, a) : f === 0 ? s.formatDistance("lessThanXMinutes", 1, a) : s.formatDistance("xMinutes", f, a);
    if (f < 45)
        return s.formatDistance("xMinutes", f, a);
    if (f < 90)
        return s.formatDistance("aboutXHours", 1, a);
    if (f < Cu) {
        const y = Math.round(f / 60);
        return s.formatDistance("aboutXHours", y, a)
    } else {
        if (f < i)
            return s.formatDistance("xDays", 1, a);
        if (f < gs) {
            const y = Math.round(f / Cu);
            return s.formatDistance("xDays", y, a)
        } else if (f < gs * 2)
            return v = Math.round(f / gs),
            s.formatDistance("aboutXMonths", v, a)
    }
    if (v = $m(u, l),
    v < 12) {
        const y = Math.round(f / gs);
        return s.formatDistance("xMonths", y, a)
    } else {
        const y = v % 12
          , w = Math.trunc(v / 12);
        return y < 3 ? s.formatDistance("aboutXYears", w, a) : y < 9 ? s.formatDistance("overXYears", w, a) : s.formatDistance("almostXYears", w + 1, a)
    }
}
function vg(t, e) {
    return gg(t, Tm(t), e)
}
function Nu({username: t, message: e, userColor: n, timestamp: r, isCurrentUser: s}) {
    const i = vg(new Date(r), {
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
const yg = ["😂", "🔥", "👏", "❤️", "🎉", "⚡", "🏏", "✨", "🎯", "🔔"];
function Ou({onSendMessage: t, onTyping: e, disabled: n, placeholder: r="Say something about the match..."}) {
    const s = C.useRef(null)
      , [i,o] = C.useState(!1)
      , a = () => {
        var f;
        const d = ((f = s.current) == null ? void 0 : f.value) || "";
        d.trim() && (t(d),
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
            const f = s.current.selectionStart || 0
              , v = s.current.selectionEnd || 0
              , y = s.current.value
              , w = y.substring(0, f) + d + y.substring(v);
            s.current.value = w,
            s.current.selectionStart = s.current.selectionEnd = f + d.length,
            s.current.focus()
        }
        o(!1)
    }
    ;
    return g.jsxs("div", {
        className: "flex flex-col gap-2 p-3 sm:p-4 border-t border-gray-800 bg-gradient-to-t from-gray-900 to-transparent",
        children: [i && g.jsx("div", {
            className: "grid grid-cols-5 gap-2 p-2 bg-gray-800/50 rounded-lg animate-slide-up",
            children: yg.map(d => g.jsx("button", {
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
                children: g.jsx(ym, {
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
                children: g.jsx(vm, {
                    size: 16,
                    className: "text-white"
                })
            })]
        })]
    })
}
const wg = "modulepreload"
  , _g = function(t) {
    return "/" + t
}
  , Ru = {}
  , Jr = function(e, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
        document.getElementsByTagName("link");
        const o = document.querySelector("meta[property=csp-nonce]")
          , a = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
        s = Promise.allSettled(n.map(l => {
            if (l = _g(l),
            l in Ru)
                return;
            Ru[l] = !0;
            const u = l.endsWith(".css")
              , c = u ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${l}"]${c}`))
                return;
            const d = document.createElement("link");
            if (d.rel = u ? "stylesheet" : wg,
            u || (d.as = "script"),
            d.crossOrigin = "",
            d.href = l,
            a && d.setAttribute("nonce", a),
            document.head.appendChild(d),
            u)
                return new Promise( (f, v) => {
                    d.addEventListener("load", f),
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
  , kg = t => {
    let e;
    return t ? e = t : typeof fetch > "u" ? e = (...n) => Jr(async () => {
        const {default: r} = await Promise.resolve().then( () => Jn);
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
class xg extends hl {
    constructor(e) {
        super("Failed to send a request to the Edge Function", "FunctionsFetchError", e)
    }
}
class Iu extends hl {
    constructor(e) {
        super("Relay Error invoking the Edge Function", "FunctionsRelayError", e)
    }
}
class Au extends hl {
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
var Sg = function(t, e, n, r) {
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
class Eg {
    constructor(e, {headers: n={}, customFetch: r, region: s=sa.Any}={}) {
        this.url = e,
        this.headers = n,
        this.region = s,
        this.fetch = kg(r)
    }
    setAuth(e) {
        this.headers.Authorization = `Bearer ${e}`
    }
    invoke(e, n={}) {
        var r;
        return Sg(this, void 0, void 0, function*() {
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
                    throw new xg(w)
                }
                )
                  , f = d.headers.get("x-relay-error");
                if (f && f === "true")
                    throw new Iu(d);
                if (!d.ok)
                    throw new Au(d);
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
                    response: s instanceof Au || s instanceof Iu ? s.context : void 0
                }
            }
        })
    }
}
var Se = {}
  , fl = {}
  , Ei = {}
  , Qr = {}
  , bi = {}
  , ji = {}
  , bg = function() {
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}
  , Hn = bg();
const jg = Hn.fetch
  , hh = Hn.fetch.bind(Hn)
  , fh = Hn.Headers
  , Cg = Hn.Request
  , Tg = Hn.Response
  , Jn = Object.freeze(Object.defineProperty({
    __proto__: null,
    Headers: fh,
    Request: Cg,
    Response: Tg,
    default: hh,
    fetch: jg
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Pg = Lh(Jn);
var Ci = {};
Object.defineProperty(Ci, "__esModule", {
    value: !0
});
let Ng = class extends Error {
    constructor(e) {
        super(e.message),
        this.name = "PostgrestError",
        this.details = e.details,
        this.hint = e.hint,
        this.code = e.code
    }
}
;
Ci.default = Ng;
var ph = Fe && Fe.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
;
Object.defineProperty(ji, "__esModule", {
    value: !0
});
const Og = ph(Pg)
  , Rg = ph(Ci);
let Ig = class {
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
        e.fetch ? this.fetch = e.fetch : typeof fetch > "u" ? this.fetch = Og.default : this.fetch = fetch
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
              , f = null
              , v = i.status
              , y = i.statusText;
            if (i.ok) {
                if (this.method !== "HEAD") {
                    const h = await i.text();
                    h === "" || (this.headers.get("Accept") === "text/csv" || this.headers.get("Accept") && (!((o = this.headers.get("Accept")) === null || o === void 0) && o.includes("application/vnd.pgrst.plan+text")) ? d = h : d = JSON.parse(h))
                }
                const k = (a = this.headers.get("Prefer")) === null || a === void 0 ? void 0 : a.match(/count=(exact|planned|estimated)/)
                  , p = (l = i.headers.get("content-range")) === null || l === void 0 ? void 0 : l.split("/");
                k && p && p.length > 1 && (f = parseInt(p[1])),
                this.isMaybeSingle && this.method === "GET" && Array.isArray(d) && (d.length > 1 ? (c = {
                    code: "PGRST116",
                    details: `Results contain ${d.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message: "JSON object requested, multiple (or no) rows returned"
                },
                d = null,
                f = null,
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
                    throw new Rg.default(c)
            }
            return {
                error: c,
                data: d,
                count: f,
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
ji.default = Ig;
var Ag = Fe && Fe.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
;
Object.defineProperty(bi, "__esModule", {
    value: !0
});
const $g = Ag(ji);
let Lg = class extends $g.default {
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
bi.default = Lg;
var Dg = Fe && Fe.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
;
Object.defineProperty(Qr, "__esModule", {
    value: !0
});
const Mg = Dg(bi);
let Ug = class extends Mg.default {
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
Qr.default = Ug;
var zg = Fe && Fe.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
;
Object.defineProperty(Ei, "__esModule", {
    value: !0
});
const ar = zg(Qr);
let Fg = class {
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
        new ar.default({
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
        return new ar.default({
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
        return new ar.default({
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
        new ar.default({
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
        new ar.default({
            method: r,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch
        })
    }
}
;
Ei.default = Fg;
var mh = Fe && Fe.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
;
Object.defineProperty(fl, "__esModule", {
    value: !0
});
const Bg = mh(Ei)
  , Wg = mh(Qr);
let Vg = class gh {
    constructor(e, {headers: n={}, schema: r, fetch: s}={}) {
        this.url = e,
        this.headers = new Headers(n),
        this.schemaName = r,
        this.fetch = s
    }
    from(e) {
        const n = new URL(`${this.url}/${e}`);
        return new Bg.default(n,{
            headers: new Headers(this.headers),
            schema: this.schemaName,
            fetch: this.fetch
        })
    }
    schema(e) {
        return new gh(this.url,{
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
        Object.entries(n).filter( ([d,f]) => f !== void 0).map( ([d,f]) => [d, Array.isArray(f) ? `{${f.join(",")}}` : `${f}`]).forEach( ([d,f]) => {
            l.searchParams.append(d, f)
        }
        )) : (a = "POST",
        u = n);
        const c = new Headers(this.headers);
        return i && c.set("Prefer", `count=${i}`),
        new Wg.default({
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
fl.default = Vg;
var Qn = Fe && Fe.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
;
Object.defineProperty(Se, "__esModule", {
    value: !0
});
Se.PostgrestError = Se.PostgrestBuilder = Se.PostgrestTransformBuilder = Se.PostgrestFilterBuilder = Se.PostgrestQueryBuilder = Se.PostgrestClient = void 0;
const vh = Qn(fl);
Se.PostgrestClient = vh.default;
const yh = Qn(Ei);
Se.PostgrestQueryBuilder = yh.default;
const wh = Qn(Qr);
Se.PostgrestFilterBuilder = wh.default;
const _h = Qn(bi);
Se.PostgrestTransformBuilder = _h.default;
const kh = Qn(ji);
Se.PostgrestBuilder = kh.default;
const xh = Qn(Ci);
Se.PostgrestError = xh.default;
var Hg = Se.default = {
    PostgrestClient: vh.default,
    PostgrestQueryBuilder: yh.default,
    PostgrestFilterBuilder: wh.default,
    PostgrestTransformBuilder: _h.default,
    PostgrestBuilder: kh.default,
    PostgrestError: xh.default
};
const {PostgrestClient: qg, PostgrestQueryBuilder: Yv, PostgrestFilterBuilder: Xv, PostgrestTransformBuilder: Zv, PostgrestBuilder: ey, PostgrestError: ty} = Hg;
class Kg {
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
const Gg = "2.15.5"
  , Jg = `realtime-js/${Gg}`
  , Qg = "1.0.0"
  , ia = 1e4
  , Yg = 1e3
  , Xg = 100;
var Sr;
(function(t) {
    t[t.connecting = 0] = "connecting",
    t[t.open = 1] = "open",
    t[t.closing = 2] = "closing",
    t[t.closed = 3] = "closed"
}
)(Sr || (Sr = {}));
var te;
(function(t) {
    t.closed = "closed",
    t.errored = "errored",
    t.joined = "joined",
    t.joining = "joining",
    t.leaving = "leaving"
}
)(te || (te = {}));
var Je;
(function(t) {
    t.close = "phx_close",
    t.error = "phx_error",
    t.join = "phx_join",
    t.reply = "phx_reply",
    t.leave = "phx_leave",
    t.access_token = "access_token"
}
)(Je || (Je = {}));
var oa;
(function(t) {
    t.websocket = "websocket"
}
)(oa || (oa = {}));
var Qt;
(function(t) {
    t.Connecting = "connecting",
    t.Open = "open",
    t.Closing = "closing",
    t.Closed = "closed"
}
)(Qt || (Qt = {}));
class Zg {
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
class Sh {
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
var F;
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
)(F || (F = {}));
const $u = (t, e, n={}) => {
    var r;
    const s = (r = n.skipTypes) !== null && r !== void 0 ? r : [];
    return Object.keys(e).reduce( (i, o) => (i[o] = e0(o, t, e, s),
    i), {})
}
  , e0 = (t, e, n, r) => {
    const s = e.find(a => a.name === t)
      , i = s == null ? void 0 : s.type
      , o = n[t];
    return i && !r.includes(i) ? Eh(i, o) : aa(o)
}
  , Eh = (t, e) => {
    if (t.charAt(0) === "_") {
        const n = t.slice(1, t.length);
        return s0(e, n)
    }
    switch (t) {
    case F.bool:
        return t0(e);
    case F.float4:
    case F.float8:
    case F.int2:
    case F.int4:
    case F.int8:
    case F.numeric:
    case F.oid:
        return n0(e);
    case F.json:
    case F.jsonb:
        return r0(e);
    case F.timestamp:
        return i0(e);
    case F.abstime:
    case F.date:
    case F.daterange:
    case F.int4range:
    case F.int8range:
    case F.money:
    case F.reltime:
    case F.text:
    case F.time:
    case F.timestamptz:
    case F.timetz:
    case F.tsrange:
    case F.tstzrange:
        return aa(e);
    default:
        return aa(e)
    }
}
  , aa = t => t
  , t0 = t => {
    switch (t) {
    case "t":
        return !0;
    case "f":
        return !1;
    default:
        return t
    }
}
  , n0 = t => {
    if (typeof t == "string") {
        const e = parseFloat(t);
        if (!Number.isNaN(e))
            return e
    }
    return t
}
  , r0 = t => {
    if (typeof t == "string")
        try {
            return JSON.parse(t)
        } catch (e) {
            return console.log(`JSON parse error: ${e}`),
            t
        }
    return t
}
  , s0 = (t, e) => {
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
        return i.map(a => Eh(e, a))
    }
    return t
}
  , i0 = t => typeof t == "string" ? t.replace(" ", "T") : t
  , bh = t => {
    let e = t;
    return e = e.replace(/^ws/i, "http"),
    e = e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""),
    e.replace(/\/+$/, "") + "/api/broadcast"
}
;
class ro {
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
var Lu;
(function(t) {
    t.SYNC = "sync",
    t.JOIN = "join",
    t.LEAVE = "leave"
}
)(Lu || (Lu = {}));
class Er {
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
            this.state = Er.syncState(this.state, s, i, o),
            this.pendingDiffs.forEach(l => {
                this.state = Er.syncDiff(this.state, l, i, o)
            }
            ),
            this.pendingDiffs = [],
            a()
        }
        ),
        this.channel._on(r.diff, {}, s => {
            const {onJoin: i, onLeave: o, onSync: a} = this.caller;
            this.inPendingSyncState() ? this.pendingDiffs.push(s) : (this.state = Er.syncDiff(this.state, s, i, o),
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
                const f = c.map(k => k.presence_ref)
                  , v = d.map(k => k.presence_ref)
                  , y = c.filter(k => v.indexOf(k.presence_ref) < 0)
                  , w = d.filter(k => f.indexOf(k.presence_ref) < 0);
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
                  , f = c.filter(v => d.indexOf(v.presence_ref) < 0);
                e[a].unshift(...f)
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
var Du;
(function(t) {
    t.ALL = "*",
    t.INSERT = "INSERT",
    t.UPDATE = "UPDATE",
    t.DELETE = "DELETE"
}
)(Du || (Du = {}));
var br;
(function(t) {
    t.BROADCAST = "broadcast",
    t.PRESENCE = "presence",
    t.POSTGRES_CHANGES = "postgres_changes",
    t.SYSTEM = "system"
}
)(br || (br = {}));
var ut;
(function(t) {
    t.SUBSCRIBED = "SUBSCRIBED",
    t.TIMED_OUT = "TIMED_OUT",
    t.CLOSED = "CLOSED",
    t.CHANNEL_ERROR = "CHANNEL_ERROR"
}
)(ut || (ut = {}));
class pl {
    constructor(e, n={
        config: {}
    }, r) {
        this.topic = e,
        this.params = n,
        this.socket = r,
        this.bindings = {},
        this.state = te.closed,
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
        this.joinPush = new ro(this,Je.join,this.params,this.timeout),
        this.rejoinTimer = new Sh( () => this._rejoinUntilConnected(),this.socket.reconnectAfterMs),
        this.joinPush.receive("ok", () => {
            this.state = te.joined,
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach(s => s.send()),
            this.pushBuffer = []
        }
        ),
        this._onClose( () => {
            this.rejoinTimer.reset(),
            this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
            this.state = te.closed,
            this.socket._remove(this)
        }
        ),
        this._onError(s => {
            this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, s),
            this.state = te.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this.joinPush.receive("timeout", () => {
            this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout),
            this.state = te.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this.joinPush.receive("error", s => {
            this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, s),
            this.state = te.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this._on(Je.reply, {}, (s, i) => {
            this._trigger(this._replyEventName(i), s)
        }
        ),
        this.presence = new Er(this),
        this.broadcastEndpointURL = bh(this.socket.endPoint),
        this.private = this.params.config.private || !1
    }
    subscribe(e, n=this.timeout) {
        var r, s, i;
        if (this.socket.isConnected() || this.socket.connect(),
        this.state == te.closed) {
            const {config: {broadcast: o, presence: a, private: l}} = this.params
              , u = (s = (r = this.bindings.postgres_changes) === null || r === void 0 ? void 0 : r.map(v => v.filter)) !== null && s !== void 0 ? s : []
              , c = !!this.bindings[br.PRESENCE] && this.bindings[br.PRESENCE].length > 0 || ((i = this.params.config.presence) === null || i === void 0 ? void 0 : i.enabled) === !0
              , d = {}
              , f = {
                broadcast: o,
                presence: Object.assign(Object.assign({}, a), {
                    enabled: c
                }),
                postgres_changes: u,
                private: l
            };
            this.socket.accessTokenValue && (d.access_token = this.socket.accessTokenValue),
            this._onError(v => e == null ? void 0 : e(ut.CHANNEL_ERROR, v)),
            this._onClose( () => e == null ? void 0 : e(ut.CLOSED)),
            this.updateJoinPayload(Object.assign({
                config: f
            }, d)),
            this.joinedOnce = !0,
            this._rejoin(n),
            this.joinPush.receive("ok", async ({postgres_changes: v}) => {
                var y;
                if (this.socket.setAuth(),
                v === void 0) {
                    e == null || e(ut.SUBSCRIBED);
                    return
                } else {
                    const w = this.bindings.postgres_changes
                      , k = (y = w == null ? void 0 : w.length) !== null && y !== void 0 ? y : 0
                      , p = [];
                    for (let h = 0; h < k; h++) {
                        const m = w[h]
                          , {filter: {event: _, schema: j, table: E, filter: S}} = m
                          , b = v && v[h];
                        if (b && b.event === _ && b.schema === j && b.table === E && b.filter === S)
                            p.push(Object.assign(Object.assign({}, m), {
                                id: b.id
                            }));
                        else {
                            this.unsubscribe(),
                            this.state = te.errored,
                            e == null || e(ut.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
                            return
                        }
                    }
                    this.bindings.postgres_changes = p,
                    e && e(ut.SUBSCRIBED);
                    return
                }
            }
            ).receive("error", v => {
                this.state = te.errored,
                e == null || e(ut.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(v).join(", ") || "error")))
            }
            ).receive("timeout", () => {
                e == null || e(ut.TIMED_OUT)
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
        return this.state === te.joined && e === br.PRESENCE && (this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),
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
        this.state = te.leaving;
        const n = () => {
            this.socket.log("channel", `leave ${this.topic}`),
            this._trigger(Je.close, "leave", this._joinRef())
        }
        ;
        this.joinPush.destroy();
        let r = null;
        return new Promise(s => {
            r = new ro(this,Je.leave,{},e),
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
        this.state = te.closed,
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
        let s = new ro(this,e,n,r);
        return this._canPush() ? s.send() : this._addToPushBuffer(s),
        s
    }
    _addToPushBuffer(e) {
        if (e.startTimeout(),
        this.pushBuffer.push(e),
        this.pushBuffer.length > Xg) {
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
          , {close: a, error: l, leave: u, join: c} = Je;
        if (r && [a, l, u, c].indexOf(o) >= 0 && r !== this._joinRef())
            return;
        let f = this._onMessage(o, n, r);
        if (n && !f)
            throw "channel onMessage callbacks must return the payload, modified or unmodified";
        ["insert", "update", "delete"].includes(o) ? (s = this.bindings.postgres_changes) === null || s === void 0 || s.filter(v => {
            var y, w, k;
            return ((y = v.filter) === null || y === void 0 ? void 0 : y.event) === "*" || ((k = (w = v.filter) === null || w === void 0 ? void 0 : w.event) === null || k === void 0 ? void 0 : k.toLocaleLowerCase()) === o
        }
        ).map(v => v.callback(f, r)) : (i = this.bindings[o]) === null || i === void 0 || i.filter(v => {
            var y, w, k, p, h, m;
            if (["broadcast", "presence", "postgres_changes"].includes(o))
                if ("id"in v) {
                    const _ = v.id
                      , j = (y = v.filter) === null || y === void 0 ? void 0 : y.event;
                    return _ && ((w = n.ids) === null || w === void 0 ? void 0 : w.includes(_)) && (j === "*" || (j == null ? void 0 : j.toLocaleLowerCase()) === ((k = n.data) === null || k === void 0 ? void 0 : k.type.toLocaleLowerCase()))
                } else {
                    const _ = (h = (p = v == null ? void 0 : v.filter) === null || p === void 0 ? void 0 : p.event) === null || h === void 0 ? void 0 : h.toLocaleLowerCase();
                    return _ === "*" || _ === ((m = n == null ? void 0 : n.event) === null || m === void 0 ? void 0 : m.toLocaleLowerCase())
                }
            else
                return v.type.toLocaleLowerCase() === o
        }
        ).map(v => {
            if (typeof f == "object" && "ids"in f) {
                const y = f.data
                  , {schema: w, table: k, commit_timestamp: p, type: h, errors: m} = y;
                f = Object.assign(Object.assign({}, {
                    schema: w,
                    table: k,
                    commit_timestamp: p,
                    eventType: h,
                    new: {},
                    old: {},
                    errors: m
                }), this._getPayloadRecords(y))
            }
            v.callback(f, r)
        }
        )
    }
    _isClosed() {
        return this.state === te.closed
    }
    _isJoined() {
        return this.state === te.joined
    }
    _isJoining() {
        return this.state === te.joining
    }
    _isLeaving() {
        return this.state === te.leaving
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
        this._on(Je.close, {}, e)
    }
    _onError(e) {
        this._on(Je.error, {}, n => e(n))
    }
    _canPush() {
        return this.socket.isConnected() && this._isJoined()
    }
    _rejoin(e=this.timeout) {
        this._isLeaving() || (this.socket._leaveOpenTopic(this.topic),
        this.state = te.joining,
        this.joinPush.resend(e))
    }
    _getPayloadRecords(e) {
        const n = {
            new: {},
            old: {}
        };
        return (e.type === "INSERT" || e.type === "UPDATE") && (n.new = $u(e.columns, e.record)),
        (e.type === "UPDATE" || e.type === "DELETE") && (n.old = $u(e.columns, e.old_record)),
        n
    }
}
const so = () => {}
  , vs = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100
}
  , o0 = [1e3, 2e3, 5e3, 1e4]
  , a0 = 1e4
  , l0 = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class u0 {
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
        this.heartbeatIntervalMs = vs.HEARTBEAT_INTERVAL,
        this.heartbeatTimer = void 0,
        this.pendingHeartbeatRef = null,
        this.heartbeatCallback = so,
        this.ref = 0,
        this.reconnectTimer = null,
        this.logger = so,
        this.conn = null,
        this.sendBuffer = [],
        this.serializer = new Zg,
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
            return s ? i = s : typeof fetch > "u" ? i = (...o) => Jr(async () => {
                const {default: a} = await Promise.resolve().then( () => Jn);
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
        this.httpEndpoint = bh(e),
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
                    this.conn = Kg.createWebSocket(this.endpointURL())
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
            vsn: Qg
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
        case Sr.connecting:
            return Qt.Connecting;
        case Sr.open:
            return Qt.Open;
        case Sr.closing:
            return Qt.Closing;
        default:
            return Qt.Closed
        }
    }
    isConnected() {
        return this.connectionState() === Qt.Open
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
            (e = this.conn) === null || e === void 0 || e.close(Yg, "heartbeat timeout"),
            setTimeout( () => {
                var n;
                this.isConnected() || (n = this.reconnectTimer) === null || n === void 0 || n.scheduleTimeout()
            }
            , vs.HEARTBEAT_TIMEOUT_FALLBACK);
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
        this.channels.forEach(e => e._trigger(Je.error))
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
            const r = new Blob([l0],{
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
                version: Jg
            };
            n && r.updateJoinPayload(s),
            r.joinedOnce && r._isJoined() && r._push(Je.access_token, {
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
        this.reconnectTimer = new Sh(async () => {
            setTimeout(async () => {
                await this._waitForAuthIfNeeded(),
                this.isConnected() || this.connect()
            }
            , vs.RECONNECT_DELAY)
        }
        ,this.reconnectAfterMs)
    }
    _initializeOptions(e) {
        var n, r, s, i, o, a, l, u, c;
        if (this.transport = (n = e == null ? void 0 : e.transport) !== null && n !== void 0 ? n : null,
        this.timeout = (r = e == null ? void 0 : e.timeout) !== null && r !== void 0 ? r : ia,
        this.heartbeatIntervalMs = (s = e == null ? void 0 : e.heartbeatIntervalMs) !== null && s !== void 0 ? s : vs.HEARTBEAT_INTERVAL,
        this.worker = (i = e == null ? void 0 : e.worker) !== null && i !== void 0 ? i : !1,
        this.accessToken = (o = e == null ? void 0 : e.accessToken) !== null && o !== void 0 ? o : null,
        this.heartbeatCallback = (a = e == null ? void 0 : e.heartbeatCallback) !== null && a !== void 0 ? a : so,
        e != null && e.params && (this.params = e.params),
        e != null && e.logger && (this.logger = e.logger),
        (e != null && e.logLevel || e != null && e.log_level) && (this.logLevel = e.logLevel || e.log_level,
        this.params = Object.assign(Object.assign({}, this.params), {
            log_level: this.logLevel
        })),
        this.reconnectAfterMs = (l = e == null ? void 0 : e.reconnectAfterMs) !== null && l !== void 0 ? l : d => o0[d - 1] || a0,
        this.encode = (u = e == null ? void 0 : e.encode) !== null && u !== void 0 ? u : (d, f) => f(JSON.stringify(d)),
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
function ne(t) {
    return typeof t == "object" && t !== null && "__isStorageError"in t
}
class c0 extends ml {
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
var d0 = function(t, e, n, r) {
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
const jh = t => {
    let e;
    return t ? e = t : typeof fetch > "u" ? e = (...n) => Jr(async () => {
        const {default: r} = await Promise.resolve().then( () => Jn);
        return {
            default: r
        }
    }
    , void 0).then( ({default: r}) => r(...n)) : e = fetch,
    (...n) => e(...n)
}
  , h0 = () => d0(void 0, void 0, void 0, function*() {
    return typeof Response > "u" ? (yield Jr( () => Promise.resolve().then( () => Jn), void 0)).Response : Response
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
  , f0 = t => {
    if (typeof t != "object" || t === null)
        return !1;
    const e = Object.getPrototypeOf(t);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t)
}
;
var cn = function(t, e, n, r) {
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
const io = t => t.msg || t.message || t.error_description || t.error || JSON.stringify(t)
  , p0 = (t, e, n) => cn(void 0, void 0, void 0, function*() {
    const r = yield h0();
    t instanceof r && !(n != null && n.noResolveJson) ? t.json().then(s => {
        const i = t.status || 500
          , o = (s == null ? void 0 : s.statusCode) || i + "";
        e(new c0(io(s),i,o))
    }
    ).catch(s => {
        e(new la(io(s),s))
    }
    ) : e(new la(io(t),t))
})
  , m0 = (t, e, n, r) => {
    const s = {
        method: t,
        headers: (e == null ? void 0 : e.headers) || {}
    };
    return t === "GET" || !r ? s : (f0(r) ? (s.headers = Object.assign({
        "Content-Type": "application/json"
    }, e == null ? void 0 : e.headers),
    s.body = JSON.stringify(r)) : s.body = r,
    e != null && e.duplex && (s.duplex = e.duplex),
    Object.assign(Object.assign({}, s), n))
}
;
function Yr(t, e, n, r, s, i) {
    return cn(this, void 0, void 0, function*() {
        return new Promise( (o, a) => {
            t(n, m0(e, r, s, i)).then(l => {
                if (!l.ok)
                    throw l;
                return r != null && r.noResolveJson ? l : l.json()
            }
            ).then(l => o(l)).catch(l => p0(l, a, r))
        }
        )
    })
}
function oi(t, e, n, r) {
    return cn(this, void 0, void 0, function*() {
        return Yr(t, "GET", e, n, r)
    })
}
function rt(t, e, n, r, s) {
    return cn(this, void 0, void 0, function*() {
        return Yr(t, "POST", e, r, s, n)
    })
}
function ca(t, e, n, r, s) {
    return cn(this, void 0, void 0, function*() {
        return Yr(t, "PUT", e, r, s, n)
    })
}
function g0(t, e, n, r) {
    return cn(this, void 0, void 0, function*() {
        return Yr(t, "HEAD", e, Object.assign(Object.assign({}, n), {
            noResolveJson: !0
        }), r)
    })
}
function Ch(t, e, n, r, s) {
    return cn(this, void 0, void 0, function*() {
        return Yr(t, "DELETE", e, r, s, n)
    })
}
var me = function(t, e, n, r) {
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
const v0 = {
    limit: 100,
    offset: 0,
    sortBy: {
        column: "name",
        order: "asc"
    }
}
  , Mu = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1
};
class y0 {
    constructor(e, n={}, r, s) {
        this.shouldThrowOnError = !1,
        this.url = e,
        this.headers = n,
        this.bucketId = r,
        this.fetch = jh(s)
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    uploadOrUpdate(e, n, r, s) {
        return me(this, void 0, void 0, function*() {
            try {
                let i;
                const o = Object.assign(Object.assign({}, Mu), s);
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
                  , d = yield(e == "PUT" ? ca : rt)(this.fetch, `${this.url}/object/${c}`, i, Object.assign({
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
                if (ne(i))
                    return {
                        data: null,
                        error: i
                    };
                throw i
            }
        })
    }
    upload(e, n, r) {
        return me(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("POST", e, n, r)
        })
    }
    uploadToSignedUrl(e, n, r, s) {
        return me(this, void 0, void 0, function*() {
            const i = this._removeEmptyFolders(e)
              , o = this._getFinalPath(i)
              , a = new URL(this.url + `/object/upload/sign/${o}`);
            a.searchParams.set("token", n);
            try {
                let l;
                const u = Object.assign({
                    upsert: Mu.upsert
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
                if (ne(l))
                    return {
                        data: null,
                        error: l
                    };
                throw l
            }
        })
    }
    createSignedUploadUrl(e, n) {
        return me(this, void 0, void 0, function*() {
            try {
                let r = this._getFinalPath(e);
                const s = Object.assign({}, this.headers);
                n != null && n.upsert && (s["x-upsert"] = "true");
                const i = yield rt(this.fetch, `${this.url}/object/upload/sign/${r}`, {}, {
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
                if (ne(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    update(e, n, r) {
        return me(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("PUT", e, n, r)
        })
    }
    move(e, n, r) {
        return me(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield rt(this.fetch, `${this.url}/object/move`, {
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
                if (ne(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    copy(e, n, r) {
        return me(this, void 0, void 0, function*() {
            try {
                return {
                    data: {
                        path: (yield rt(this.fetch, `${this.url}/object/copy`, {
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
                if (ne(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    createSignedUrl(e, n, r) {
        return me(this, void 0, void 0, function*() {
            try {
                let s = this._getFinalPath(e)
                  , i = yield rt(this.fetch, `${this.url}/object/sign/${s}`, Object.assign({
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
                if (ne(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    createSignedUrls(e, n, r) {
        return me(this, void 0, void 0, function*() {
            try {
                const s = yield rt(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
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
                if (ne(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    download(e, n) {
        return me(this, void 0, void 0, function*() {
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
                if (ne(a))
                    return {
                        data: null,
                        error: a
                    };
                throw a
            }
        })
    }
    info(e) {
        return me(this, void 0, void 0, function*() {
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
                if (ne(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    exists(e) {
        return me(this, void 0, void 0, function*() {
            const n = this._getFinalPath(e);
            try {
                return yield g0(this.fetch, `${this.url}/object/${n}`, {
                    headers: this.headers
                }),
                {
                    data: !0,
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (ne(r) && r instanceof la) {
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
        return me(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Ch(this.fetch, `${this.url}/object/${this.bucketId}`, {
                        prefixes: e
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError)
                    throw n;
                if (ne(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    list(e, n, r) {
        return me(this, void 0, void 0, function*() {
            try {
                const s = Object.assign(Object.assign(Object.assign({}, v0), n), {
                    prefix: e || ""
                });
                return {
                    data: yield rt(this.fetch, `${this.url}/object/list/${this.bucketId}`, s, {
                        headers: this.headers
                    }, r),
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError)
                    throw s;
                if (ne(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    listV2(e, n) {
        return me(this, void 0, void 0, function*() {
            try {
                const r = Object.assign({}, e);
                return {
                    data: yield rt(this.fetch, `${this.url}/object/list-v2/${this.bucketId}`, r, {
                        headers: this.headers
                    }, n),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (ne(r))
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
const w0 = "2.12.1"
  , _0 = {
    "X-Client-Info": `storage-js/${w0}`
};
var fn = function(t, e, n, r) {
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
class k0 {
    constructor(e, n={}, r, s) {
        this.shouldThrowOnError = !1;
        const i = new URL(e);
        s != null && s.useNewHostname && /supabase\.(co|in|red)$/.test(i.hostname) && !i.hostname.includes("storage.supabase.") && (i.hostname = i.hostname.replace("supabase.", "storage.supabase.")),
        this.url = i.href,
        this.headers = Object.assign(Object.assign({}, _0), n),
        this.fetch = jh(r)
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    listBuckets() {
        return fn(this, void 0, void 0, function*() {
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
                if (ne(e))
                    return {
                        data: null,
                        error: e
                    };
                throw e
            }
        })
    }
    getBucket(e) {
        return fn(this, void 0, void 0, function*() {
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
                if (ne(n))
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
        return fn(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield rt(this.fetch, `${this.url}/bucket`, {
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
                if (ne(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    updateBucket(e, n) {
        return fn(this, void 0, void 0, function*() {
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
                if (ne(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    emptyBucket(e) {
        return fn(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield rt(this.fetch, `${this.url}/bucket/${e}/empty`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError)
                    throw n;
                if (ne(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    deleteBucket(e) {
        return fn(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Ch(this.fetch, `${this.url}/bucket/${e}`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError)
                    throw n;
                if (ne(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
}
class x0 extends k0 {
    constructor(e, n={}, r, s) {
        super(e, n, r, s)
    }
    from(e) {
        return new y0(this.url,this.headers,e,this.fetch)
    }
}
const S0 = "2.57.4";
let fr = "";
typeof Deno < "u" ? fr = "deno" : typeof document < "u" ? fr = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? fr = "react-native" : fr = "node";
const E0 = {
    "X-Client-Info": `supabase-js-${fr}/${S0}`
}
  , b0 = {
    headers: E0
}
  , j0 = {
    schema: "public"
}
  , C0 = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit"
}
  , T0 = {};
var P0 = function(t, e, n, r) {
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
const N0 = t => {
    let e;
    return t ? e = t : typeof fetch > "u" ? e = hh : e = fetch,
    (...n) => e(...n)
}
  , O0 = () => typeof Headers > "u" ? fh : Headers
  , R0 = (t, e, n) => {
    const r = N0(n)
      , s = O0();
    return (i, o) => P0(void 0, void 0, void 0, function*() {
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
var I0 = function(t, e, n, r) {
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
function $0(t, e) {
    var n, r;
    const {db: s, auth: i, realtime: o, global: a} = t
      , {db: l, auth: u, realtime: c, global: d} = e
      , f = {
        db: Object.assign(Object.assign({}, l), s),
        auth: Object.assign(Object.assign({}, u), i),
        realtime: Object.assign(Object.assign({}, c), o),
        storage: {},
        global: Object.assign(Object.assign(Object.assign({}, d), a), {
            headers: Object.assign(Object.assign({}, (n = d == null ? void 0 : d.headers) !== null && n !== void 0 ? n : {}), (r = a == null ? void 0 : a.headers) !== null && r !== void 0 ? r : {})
        }),
        accessToken: () => I0(this, void 0, void 0, function*() {
            return ""
        })
    };
    return t.accessToken ? f.accessToken = t.accessToken : delete f.accessToken,
    f
}
function L0(t) {
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
const Th = "2.71.1"
  , yn = 30 * 1e3
  , da = 3
  , oo = da * yn
  , D0 = "http://localhost:9999"
  , M0 = "supabase.auth.token"
  , U0 = {
    "X-Client-Info": `gotrue-js/${Th}`
}
  , ha = "X-Supabase-Api-Version"
  , Ph = {
    "2024-01-01": {
        timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
        name: "2024-01-01"
    }
}
  , z0 = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i
  , F0 = 10 * 60 * 1e3;
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
class B0 extends gl {
    constructor(e, n, r) {
        super(e, n, r),
        this.name = "AuthApiError",
        this.status = n,
        this.code = r
    }
}
function W0(t) {
    return I(t) && t.name === "AuthApiError"
}
class Nh extends gl {
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
function V0(t) {
    return I(t) && t.name === "AuthSessionMissingError"
}
class ys extends Vt {
    constructor() {
        super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0)
    }
}
class ws extends Vt {
    constructor(e) {
        super(e, "AuthInvalidCredentialsError", 400, void 0)
    }
}
class _s extends Vt {
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
function H0(t) {
    return I(t) && t.name === "AuthImplicitGrantRedirectError"
}
class Uu extends Vt {
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
function ao(t) {
    return I(t) && t.name === "AuthRetryableFetchError"
}
class zu extends Vt {
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
  , Fu = ` 	
\r=`.split("")
  , q0 = ( () => {
    const t = new Array(128);
    for (let e = 0; e < t.length; e += 1)
        t[e] = -1;
    for (let e = 0; e < Fu.length; e += 1)
        t[Fu[e].charCodeAt(0)] = -2;
    for (let e = 0; e < ai.length; e += 1)
        t[ai[e].charCodeAt(0)] = e;
    return t
}
)();
function Bu(t, e, n) {
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
function Oh(t, e, n) {
    const r = q0[t];
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
function Wu(t) {
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
        J0(o, r, n)
    }
    ;
    for (let o = 0; o < t.length; o += 1)
        Oh(t.charCodeAt(o), s, i);
    return e.join("")
}
function K0(t, e) {
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
function G0(t, e) {
    for (let n = 0; n < t.length; n += 1) {
        let r = t.charCodeAt(n);
        if (r > 55295 && r <= 56319) {
            const s = (r - 55296) * 1024 & 65535;
            r = (t.charCodeAt(n + 1) - 56320 & 65535 | s) + 65536,
            n += 1
        }
        K0(r, e)
    }
}
function J0(t, e, n) {
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
function Q0(t) {
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
        Oh(t.charCodeAt(s), n, r);
    return new Uint8Array(e)
}
function Y0(t) {
    const e = [];
    return G0(t, n => e.push(n)),
    new Uint8Array(e)
}
function X0(t) {
    const e = []
      , n = {
        queue: 0,
        queuedBits: 0
    }
      , r = s => {
        e.push(s)
    }
    ;
    return t.forEach(s => Bu(s, n, r)),
    Bu(null, n, r),
    e.join("")
}
function Z0(t) {
    return Math.round(Date.now() / 1e3) + t
}
function ev() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
        const e = Math.random() * 16 | 0;
        return (t == "x" ? e : e & 3 | 8).toString(16)
    })
}
const qe = () => typeof window < "u" && typeof document < "u"
  , Ht = {
    tested: !1,
    writable: !1
}
  , Rh = () => {
    if (!qe())
        return !1;
    try {
        if (typeof globalThis.localStorage != "object")
            return !1
    } catch {
        return !1
    }
    if (Ht.tested)
        return Ht.writable;
    const t = `lswt-${Math.random()}${Math.random()}`;
    try {
        globalThis.localStorage.setItem(t, t),
        globalThis.localStorage.removeItem(t),
        Ht.tested = !0,
        Ht.writable = !0
    } catch {
        Ht.tested = !0,
        Ht.writable = !1
    }
    return Ht.writable
}
;
function tv(t) {
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
    return t ? e = t : typeof fetch > "u" ? e = (...n) => Jr(async () => {
        const {default: r} = await Promise.resolve().then( () => Jn);
        return {
            default: r
        }
    }
    , void 0).then( ({default: r}) => r(...n)) : e = fetch,
    (...n) => e(...n)
}
  , nv = t => typeof t == "object" && t !== null && "status"in t && "ok"in t && "json"in t && typeof t.json == "function"
  , wn = async (t, e, n) => {
    await t.setItem(e, JSON.stringify(n))
}
  , qt = async (t, e) => {
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
function lo(t) {
    const e = t.split(".");
    if (e.length !== 3)
        throw new pa("Invalid JWT structure");
    for (let r = 0; r < e.length; r++)
        if (!z0.test(e[r]))
            throw new pa("JWT not in base64url format");
    return {
        header: JSON.parse(Wu(e[0])),
        payload: JSON.parse(Wu(e[1])),
        signature: Q0(e[2]),
        raw: {
            header: e[0],
            payload: e[1]
        }
    }
}
async function rv(t) {
    return await new Promise(e => {
        setTimeout( () => e(null), t)
    }
    )
}
function sv(t, e) {
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
function iv(t) {
    return ("0" + t.toString(16)).substr(-2)
}
function ov() {
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
    Array.from(e, iv).join("")
}
async function av(t) {
    const n = new TextEncoder().encode(t)
      , r = await crypto.subtle.digest("SHA-256", n)
      , s = new Uint8Array(r);
    return Array.from(s).map(i => String.fromCharCode(i)).join("")
}
async function lv(t) {
    if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
        return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),
        t;
    const n = await av(t);
    return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}
async function pn(t, e, n=!1) {
    const r = ov();
    let s = r;
    n && (s += "/PASSWORD_RECOVERY"),
    await wn(t, `${e}-code-verifier`, s);
    const i = await lv(r);
    return [i, r === i ? "plain" : "s256"]
}
const uv = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function cv(t) {
    const e = t.headers.get(ha);
    if (!e || !e.match(uv))
        return null;
    try {
        return new Date(`${e}T00:00:00.0Z`)
    } catch {
        return null
    }
}
function dv(t) {
    if (!t)
        throw new Error("Missing exp claim");
    const e = Math.floor(Date.now() / 1e3);
    if (t <= e)
        throw new Error("JWT has expired")
}
function hv(t) {
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
const fv = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function mn(t) {
    if (!fv.test(t))
        throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")
}
function uo() {
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
function Vu(t) {
    return JSON.parse(JSON.stringify(t))
}
var pv = function(t, e) {
    var n = {};
    for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, r = Object.getOwnPropertySymbols(t); s < r.length; s++)
            e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[s]) && (n[r[s]] = t[r[s]]);
    return n
};
const Jt = t => t.msg || t.message || t.error_description || t.error || JSON.stringify(t)
  , mv = [502, 503, 504];
async function Hu(t) {
    var e;
    if (!nv(t))
        throw new fa(Jt(t),0);
    if (mv.includes(t.status))
        throw new fa(Jt(t),t.status);
    let n;
    try {
        n = await t.json()
    } catch (i) {
        throw new Nh(Jt(i),i)
    }
    let r;
    const s = cv(t);
    if (s && s.getTime() >= Ph["2024-01-01"].timestamp && typeof n == "object" && n && typeof n.code == "string" ? r = n.code : typeof n == "object" && n && typeof n.error_code == "string" && (r = n.error_code),
    r) {
        if (r === "weak_password")
            throw new zu(Jt(n),t.status,((e = n.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
        if (r === "session_not_found")
            throw new xt
    } else if (typeof n == "object" && n && typeof n.weak_password == "object" && n.weak_password && Array.isArray(n.weak_password.reasons) && n.weak_password.reasons.length && n.weak_password.reasons.reduce( (i, o) => i && typeof o == "string", !0))
        throw new zu(Jt(n),t.status,n.weak_password.reasons);
    throw new B0(Jt(n),t.status || 500,r)
}
const gv = (t, e, n, r) => {
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
async function $(t, e, n, r) {
    var s;
    const i = Object.assign({}, r == null ? void 0 : r.headers);
    i[ha] || (i[ha] = Ph["2024-01-01"].name),
    r != null && r.jwt && (i.Authorization = `Bearer ${r.jwt}`);
    const o = (s = r == null ? void 0 : r.query) !== null && s !== void 0 ? s : {};
    r != null && r.redirectTo && (o.redirect_to = r.redirectTo);
    const a = Object.keys(o).length ? "?" + new URLSearchParams(o).toString() : ""
      , l = await vv(t, e, n + a, {
        headers: i,
        noResolveJson: r == null ? void 0 : r.noResolveJson
    }, {}, r == null ? void 0 : r.body);
    return r != null && r.xform ? r == null ? void 0 : r.xform(l) : {
        data: Object.assign({}, l),
        error: null
    }
}
async function vv(t, e, n, r, s, i) {
    const o = gv(e, r, s, i);
    let a;
    try {
        a = await t(n, Object.assign({}, o))
    } catch (l) {
        throw console.error(l),
        new fa(Jt(l),0)
    }
    if (a.ok || await Hu(a),
    r != null && r.noResolveJson)
        return a;
    try {
        return await a.json()
    } catch (l) {
        await Hu(l)
    }
}
function at(t) {
    var e;
    let n = null;
    kv(t) && (n = Object.assign({}, t),
    t.expires_at || (n.expires_at = Z0(t.expires_in)));
    const r = (e = t.user) !== null && e !== void 0 ? e : t;
    return {
        data: {
            session: n,
            user: r
        },
        error: null
    }
}
function qu(t) {
    const e = at(t);
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
function yv(t) {
    return {
        data: t,
        error: null
    }
}
function wv(t) {
    const {action_link: e, email_otp: n, hashed_token: r, redirect_to: s, verification_type: i} = t
      , o = pv(t, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"])
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
function _v(t) {
    return t
}
function kv(t) {
    return t.access_token && t.refresh_token && t.expires_in
}
const co = ["global", "local", "others"];
var xv = function(t, e) {
    var n = {};
    for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, r = Object.getOwnPropertySymbols(t); s < r.length; s++)
            e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[s]) && (n[r[s]] = t[r[s]]);
    return n
};
class Sv {
    constructor({url: e="", headers: n={}, fetch: r}) {
        this.url = e,
        this.headers = n,
        this.fetch = Ih(r),
        this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this)
        }
    }
    async signOut(e, n=co[0]) {
        if (co.indexOf(n) < 0)
            throw new Error(`@supabase/auth-js: Parameter scope must be one of ${co.join(", ")}`);
        try {
            return await $(this.fetch, "POST", `${this.url}/logout?scope=${n}`, {
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
            return await $(this.fetch, "POST", `${this.url}/invite`, {
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
              , r = xv(e, ["options"])
              , s = Object.assign(Object.assign({}, r), n);
            return "newEmail"in r && (s.new_email = r == null ? void 0 : r.newEmail,
            delete s.newEmail),
            await $(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: s,
                headers: this.headers,
                xform: wv,
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
            return await $(this.fetch, "POST", `${this.url}/admin/users`, {
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
              , c = await $(this.fetch, "GET", `${this.url}/admin/users`, {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                    page: (r = (n = e == null ? void 0 : e.page) === null || n === void 0 ? void 0 : n.toString()) !== null && r !== void 0 ? r : "",
                    per_page: (i = (s = e == null ? void 0 : e.perPage) === null || s === void 0 ? void 0 : s.toString()) !== null && i !== void 0 ? i : ""
                },
                xform: _v
            });
            if (c.error)
                throw c.error;
            const d = await c.json()
              , f = (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0
              , v = (l = (a = c.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
            return v.length > 0 && (v.forEach(y => {
                const w = parseInt(y.split(";")[0].split("=")[1].substring(0, 1))
                  , k = JSON.parse(y.split(";")[1].split("=")[1]);
                u[`${k}Page`] = w
            }
            ),
            u.total = parseInt(f)),
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
        mn(e);
        try {
            return await $(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
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
        mn(e);
        try {
            return await $(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
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
        mn(e);
        try {
            return await $(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
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
        mn(e.userId);
        try {
            const {data: n, error: r} = await $(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
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
        mn(e.userId),
        mn(e.id);
        try {
            return {
                data: await $(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
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
function Ku(t={}) {
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
function Ev() {
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
const gn = {
    debug: !!(globalThis && Rh() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class Ah extends Error {
    constructor(e) {
        super(e),
        this.isAcquireTimeout = !0
    }
}
class bv extends Ah {
}
async function jv(t, e, n) {
    gn.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", t, e);
    const r = new globalThis.AbortController;
    return e > 0 && setTimeout( () => {
        r.abort(),
        gn.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", t)
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
            gn.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", t, s.name);
            try {
                return await n()
            } finally {
                gn.debug && console.log("@supabase/gotrue-js: navigatorLock: released", t, s.name)
            }
        } else {
            if (e === 0)
                throw gn.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", t),
                new bv(`Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`);
            if (gn.debug)
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
Ev();
const Cv = {
    url: D0,
    storageKey: M0,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: U0,
    flowType: "implicit",
    debug: !1,
    hasCustomAuthorizationHeader: !1
};
async function Gu(t, e, n) {
    return await n()
}
const vn = {};
class Wr {
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
        this.instanceID = Wr.nextInstanceID,
        Wr.nextInstanceID += 1,
        this.instanceID > 0 && qe() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
        const s = Object.assign(Object.assign({}, Cv), e);
        if (this.logDebugMessages = !!s.debug,
        typeof s.debug == "function" && (this.logger = s.debug),
        this.persistSession = s.persistSession,
        this.storageKey = s.storageKey,
        this.autoRefreshToken = s.autoRefreshToken,
        this.admin = new Sv({
            url: s.url,
            headers: s.headers,
            fetch: s.fetch
        }),
        this.url = s.url,
        this.headers = s.headers,
        this.fetch = Ih(s.fetch),
        this.lock = s.lock || Gu,
        this.detectSessionInUrl = s.detectSessionInUrl,
        this.flowType = s.flowType,
        this.hasCustomAuthorizationHeader = s.hasCustomAuthorizationHeader,
        s.lock ? this.lock = s.lock : qe() && (!((n = globalThis == null ? void 0 : globalThis.navigator) === null || n === void 0) && n.locks) ? this.lock = jv : this.lock = Gu,
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
        this.persistSession ? (s.storage ? this.storage = s.storage : Rh() ? this.storage = globalThis.localStorage : (this.memoryStorage = {},
        this.storage = Ku(this.memoryStorage)),
        s.userStorage && (this.userStorage = s.userStorage)) : (this.memoryStorage = {},
        this.storage = Ku(this.memoryStorage)),
        qe() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
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
        return (n = (e = vn[this.storageKey]) === null || e === void 0 ? void 0 : e.jwks) !== null && n !== void 0 ? n : {
            keys: []
        }
    }
    set jwks(e) {
        vn[this.storageKey] = Object.assign(Object.assign({}, vn[this.storageKey]), {
            jwks: e
        })
    }
    get jwks_cached_at() {
        var e, n;
        return (n = (e = vn[this.storageKey]) === null || e === void 0 ? void 0 : e.cachedAt) !== null && n !== void 0 ? n : Number.MIN_SAFE_INTEGER
    }
    set jwks_cached_at(e) {
        vn[this.storageKey] = Object.assign(Object.assign({}, vn[this.storageKey]), {
            cachedAt: e
        })
    }
    _debug(...e) {
        return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${Th}) ${new Date().toISOString()}`, ...e),
        this
    }
    async initialize() {
        return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(),
        await this.initializePromise)
    }
    async _initialize() {
        var e;
        try {
            const n = tv(window.location.href);
            let r = "none";
            if (this._isImplicitGrantCallback(n) ? r = "implicit" : await this._isPKCECallback(n) && (r = "pkce"),
            qe() && this.detectSessionInUrl && r !== "none") {
                const {data: s, error: i} = await this._getSessionFromURL(n, r);
                if (i) {
                    if (this._debug("#_initialize()", "error detecting session from URL", i),
                    H0(i)) {
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
                error: new Nh("Unexpected error during initialization",n)
            }
        } finally {
            await this._handleVisibilityChange(),
            this._debug("#_initialize()", "end")
        }
    }
    async signInAnonymously(e) {
        var n, r, s;
        try {
            const i = await $(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                body: {
                    data: (r = (n = e == null ? void 0 : e.options) === null || n === void 0 ? void 0 : n.data) !== null && r !== void 0 ? r : {},
                    gotrue_meta_security: {
                        captcha_token: (s = e == null ? void 0 : e.options) === null || s === void 0 ? void 0 : s.captchaToken
                    }
                },
                xform: at
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
                const {email: c, password: d, options: f} = e;
                let v = null
                  , y = null;
                this.flowType === "pkce" && ([v,y] = await pn(this.storage, this.storageKey)),
                i = await $(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    redirectTo: f == null ? void 0 : f.emailRedirectTo,
                    body: {
                        email: c,
                        password: d,
                        data: (n = f == null ? void 0 : f.data) !== null && n !== void 0 ? n : {},
                        gotrue_meta_security: {
                            captcha_token: f == null ? void 0 : f.captchaToken
                        },
                        code_challenge: v,
                        code_challenge_method: y
                    },
                    xform: at
                })
            } else if ("phone"in e) {
                const {phone: c, password: d, options: f} = e;
                i = await $(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        phone: c,
                        password: d,
                        data: (r = f == null ? void 0 : f.data) !== null && r !== void 0 ? r : {},
                        channel: (s = f == null ? void 0 : f.channel) !== null && s !== void 0 ? s : "sms",
                        gotrue_meta_security: {
                            captcha_token: f == null ? void 0 : f.captchaToken
                        }
                    },
                    xform: at
                })
            } else
                throw new ws("You must provide either an email or phone number and a password");
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
                n = await $(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        email: i,
                        password: o,
                        gotrue_meta_security: {
                            captcha_token: a == null ? void 0 : a.captchaToken
                        }
                    },
                    xform: qu
                })
            } else if ("phone"in e) {
                const {phone: i, password: o, options: a} = e;
                n = await $(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        phone: i,
                        password: o,
                        gotrue_meta_security: {
                            captcha_token: a == null ? void 0 : a.captchaToken
                        }
                    },
                    xform: qu
                })
            } else
                throw new ws("You must provide either an email or phone number and a password");
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
                error: new ys
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
        var n, r, s, i, o, a, l, u, c, d, f, v;
        let y, w;
        if ("message"in e)
            y = e.message,
            w = e.signature;
        else {
            const {chain: k, wallet: p, statement: h, options: m} = e;
            let _;
            if (qe())
                if (typeof p == "object")
                    _ = p;
                else {
                    const E = window;
                    if ("solana"in E && typeof E.solana == "object" && ("signIn"in E.solana && typeof E.solana.signIn == "function" || "signMessage"in E.solana && typeof E.solana.signMessage == "function"))
                        _ = E.solana;
                    else
                        throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")
                }
            else {
                if (typeof p != "object" || !(m != null && m.url))
                    throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
                _ = p
            }
            const j = new URL((n = m == null ? void 0 : m.url) !== null && n !== void 0 ? n : window.location.href);
            if ("signIn"in _ && _.signIn) {
                const E = await _.signIn(Object.assign(Object.assign(Object.assign({
                    issuedAt: new Date().toISOString()
                }, m == null ? void 0 : m.signInWithSolana), {
                    version: "1",
                    domain: j.host,
                    uri: j.href
                }), h ? {
                    statement: h
                } : null));
                let S;
                if (Array.isArray(E) && E[0] && typeof E[0] == "object")
                    S = E[0];
                else if (E && typeof E == "object" && "signedMessage"in E && "signature"in E)
                    S = E;
                else
                    throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
                if ("signedMessage"in S && "signature"in S && (typeof S.signedMessage == "string" || S.signedMessage instanceof Uint8Array) && S.signature instanceof Uint8Array)
                    y = typeof S.signedMessage == "string" ? S.signedMessage : new TextDecoder().decode(S.signedMessage),
                    w = S.signature;
                else
                    throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")
            } else {
                if (!("signMessage"in _) || typeof _.signMessage != "function" || !("publicKey"in _) || typeof _ != "object" || !_.publicKey || !("toBase58"in _.publicKey) || typeof _.publicKey.toBase58 != "function")
                    throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
                y = [`${j.host} wants you to sign in with your Solana account:`, _.publicKey.toBase58(), ...h ? ["", h, ""] : [""], "Version: 1", `URI: ${j.href}`, `Issued At: ${(s = (r = m == null ? void 0 : m.signInWithSolana) === null || r === void 0 ? void 0 : r.issuedAt) !== null && s !== void 0 ? s : new Date().toISOString()}`, ...!((i = m == null ? void 0 : m.signInWithSolana) === null || i === void 0) && i.notBefore ? [`Not Before: ${m.signInWithSolana.notBefore}`] : [], ...!((o = m == null ? void 0 : m.signInWithSolana) === null || o === void 0) && o.expirationTime ? [`Expiration Time: ${m.signInWithSolana.expirationTime}`] : [], ...!((a = m == null ? void 0 : m.signInWithSolana) === null || a === void 0) && a.chainId ? [`Chain ID: ${m.signInWithSolana.chainId}`] : [], ...!((l = m == null ? void 0 : m.signInWithSolana) === null || l === void 0) && l.nonce ? [`Nonce: ${m.signInWithSolana.nonce}`] : [], ...!((u = m == null ? void 0 : m.signInWithSolana) === null || u === void 0) && u.requestId ? [`Request ID: ${m.signInWithSolana.requestId}`] : [], ...!((d = (c = m == null ? void 0 : m.signInWithSolana) === null || c === void 0 ? void 0 : c.resources) === null || d === void 0) && d.length ? ["Resources", ...m.signInWithSolana.resources.map(S => `- ${S}`)] : []].join(`
`);
                const E = await _.signMessage(new TextEncoder().encode(y), "utf8");
                if (!E || !(E instanceof Uint8Array))
                    throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
                w = E
            }
        }
        try {
            const {data: k, error: p} = await $(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
                headers: this.headers,
                body: Object.assign({
                    chain: "solana",
                    message: y,
                    signature: X0(w)
                }, !((f = e.options) === null || f === void 0) && f.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: (v = e.options) === null || v === void 0 ? void 0 : v.captchaToken
                    }
                } : null),
                xform: at
            });
            if (p)
                throw p;
            return !k || !k.session || !k.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new ys
            } : (k.session && (await this._saveSession(k.session),
            await this._notifyAllSubscribers("SIGNED_IN", k.session)),
            {
                data: Object.assign({}, k),
                error: p
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
        const n = await qt(this.storage, `${this.storageKey}-code-verifier`)
          , [r,s] = (n ?? "").split("/");
        try {
            const {data: i, error: o} = await $(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                headers: this.headers,
                body: {
                    auth_code: e,
                    code_verifier: r
                },
                xform: at
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
                error: new ys
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
              , a = await $(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
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
                xform: at
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
                error: new ys
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
                this.flowType === "pkce" && ([u,c] = await pn(this.storage, this.storageKey));
                const {error: d} = await $(this.fetch, "POST", `${this.url}/otp`, {
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
                  , {data: u, error: c} = await $(this.fetch, "POST", `${this.url}/otp`, {
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
            throw new ws("You must provide either an email or phone number.")
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
            const {data: o, error: a} = await $(this.fetch, "POST", `${this.url}/verify`, {
                headers: this.headers,
                body: Object.assign(Object.assign({}, e), {
                    gotrue_meta_security: {
                        captcha_token: i
                    }
                }),
                redirectTo: s,
                xform: at
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
            return this.flowType === "pkce" && ([i,o] = await pn(this.storage, this.storageKey)),
            await $(this.fetch, "POST", `${this.url}/sso`, {
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
                xform: yv
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
                const {error: s} = await $(this.fetch, "GET", `${this.url}/reauthenticate`, {
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
                  , {error: o} = await $(this.fetch, "POST", n, {
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
                  , {data: o, error: a} = await $(this.fetch, "POST", n, {
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
            throw new ws("You must provide either an email or phone number and a type")
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
            const n = await qt(this.storage, this.storageKey);
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
            const r = e.expires_at ? e.expires_at * 1e3 - Date.now() < oo : !1;
            if (this._debug("#__loadSession()", `session has${r ? "" : " not"} expired`, "expires_at", e.expires_at),
            !r) {
                if (this.userStorage) {
                    const o = await qt(this.userStorage, this.storageKey + "-user");
                    o != null && o.user ? e.user = o.user : e.user = uo()
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
            return e ? await $(this.fetch, "GET", `${this.url}/user`, {
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
                } : await $(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt: (i = (s = o.session) === null || s === void 0 ? void 0 : s.access_token) !== null && i !== void 0 ? i : void 0,
                    xform: Ct
                })
            }
            )
        } catch (n) {
            if (I(n))
                return V0(n) && (await this._removeSession(),
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
                this.flowType === "pkce" && e.email != null && ([a,l] = await pn(this.storage, this.storageKey));
                const {data: u, error: c} = await $(this.fetch, "PUT", `${this.url}/user`, {
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
            const {payload: o} = lo(e.access_token);
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
            if (!qe())
                throw new _s("No browser detected.");
            if (e.error || e.error_description || e.error_code)
                throw new _s(e.error_description || "Error in URL with unspecified error_description",{
                    error: e.error || "unspecified_error",
                    code: e.error_code || "unspecified_code"
                });
            switch (n) {
            case "implicit":
                if (this.flowType === "pkce")
                    throw new Uu("Not a valid PKCE flow url.");
                break;
            case "pkce":
                if (this.flowType === "implicit")
                    throw new _s("Not a valid implicit grant flow url.");
                break;
            default:
            }
            if (n === "pkce") {
                if (this._debug("#_initialize()", "begin", "is PKCE flow", !0),
                !e.code)
                    throw new Uu("No code detected.");
                const {data: h, error: m} = await this._exchangeCodeForSession(e.code);
                if (m)
                    throw m;
                const _ = new URL(window.location.href);
                return _.searchParams.delete("code"),
                window.history.replaceState(window.history.state, "", _.toString()),
                {
                    data: {
                        session: h.session,
                        redirectType: null
                    },
                    error: null
                }
            }
            const {provider_token: r, provider_refresh_token: s, access_token: i, refresh_token: o, expires_in: a, expires_at: l, token_type: u} = e;
            if (!i || !a || !o || !u)
                throw new _s("No session defined in URL");
            const c = Math.round(Date.now() / 1e3)
              , d = parseInt(a);
            let f = c + d;
            l && (f = parseInt(l));
            const v = f - c;
            v * 1e3 <= yn && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${v}s, should have been closer to ${d}s`);
            const y = f - d;
            c - y >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", y, f, c) : c - y < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", y, f, c);
            const {data: w, error: k} = await this._getUser(i);
            if (k)
                throw k;
            const p = {
                provider_token: r,
                provider_refresh_token: s,
                access_token: i,
                expires_in: d,
                expires_at: f,
                refresh_token: o,
                token_type: u,
                user: w.user
            };
            return window.location.hash = "",
            this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
            {
                data: {
                    session: p,
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
        const n = await qt(this.storage, `${this.storageKey}-code-verifier`);
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
                if (a && !(W0(a) && (a.status === 404 || a.status === 401 || a.status === 403)))
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
        const n = ev()
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
        this.flowType === "pkce" && ([r,s] = await pn(this.storage, this.storageKey, !0));
        try {
            return await $(this.fetch, "POST", `${this.url}/recover`, {
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
                const {data: d, error: f} = i;
                if (f)
                    throw f;
                const v = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
                    redirectTo: (o = e.options) === null || o === void 0 ? void 0 : o.redirectTo,
                    scopes: (a = e.options) === null || a === void 0 ? void 0 : a.scopes,
                    queryParams: (l = e.options) === null || l === void 0 ? void 0 : l.queryParams,
                    skipBrowserRedirect: !0
                });
                return await $(this.fetch, "GET", v, {
                    headers: this.headers,
                    jwt: (c = (u = d.session) === null || u === void 0 ? void 0 : u.access_token) !== null && c !== void 0 ? c : void 0
                })
            }
            );
            if (s)
                throw s;
            return qe() && !(!((n = e.options) === null || n === void 0) && n.skipBrowserRedirect) && window.location.assign(r == null ? void 0 : r.url),
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
                return await $(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
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
            return await sv(async s => (s > 0 && await rv(200 * Math.pow(2, s - 1)),
            this._debug(n, "refreshing attempt", s),
            await $(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                body: {
                    refresh_token: e
                },
                headers: this.headers,
                xform: at
            })), (s, i) => {
                const o = 200 * Math.pow(2, s);
                return i && ao(i) && Date.now() + o - r < yn
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
        qe() && !n.skipBrowserRedirect && window.location.assign(r),
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
            const s = await qt(this.storage, this.storageKey);
            if (s && this.userStorage) {
                let o = await qt(this.userStorage, this.storageKey + "-user");
                !this.storage.isServer && Object.is(this.storage, this.userStorage) && !o && (o = {
                    user: s.user
                },
                await wn(this.userStorage, this.storageKey + "-user", o)),
                s.user = (e = o == null ? void 0 : o.user) !== null && e !== void 0 ? e : uo()
            } else if (s && !s.user && !s.user) {
                const o = await qt(this.storage, this.storageKey + "-user");
                o && (o != null && o.user) ? (s.user = o.user,
                await kt(this.storage, this.storageKey + "-user"),
                await wn(this.storage, this.storageKey, s)) : s.user = uo()
            }
            if (this._debug(r, "session from storage", s),
            !this._isValidSession(s)) {
                this._debug(r, "session is not valid"),
                s !== null && await this._removeSession();
                return
            }
            const i = ((n = s.expires_at) !== null && n !== void 0 ? n : 1 / 0) * 1e3 - Date.now() < oo;
            if (this._debug(r, `session has${i ? "" : " not"} expired with margin of ${oo}s`),
            i) {
                if (this.autoRefreshToken && s.refresh_token) {
                    const {error: o} = await this._callRefreshToken(s.refresh_token);
                    o && (console.error(o),
                    ao(o) || (this._debug(r, "refresh failed with a non-retryable error, removing the session", o),
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
                return ao(i) || await this._removeSession(),
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
            !r && n.user && await wn(this.userStorage, this.storageKey + "-user", {
                user: n.user
            });
            const s = Object.assign({}, n);
            delete s.user;
            const i = Vu(s);
            await wn(this.storage, this.storageKey, i)
        } else {
            const s = Vu(n);
            await wn(this.storage, this.storageKey, s)
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
            e && qe() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", e)
        } catch (n) {
            console.error("removing visibilitychange callback failed", n)
        }
    }
    async _startAutoRefresh() {
        await this._stopAutoRefresh(),
        this._debug("#_startAutoRefresh()");
        const e = setInterval( () => this._autoRefreshTokenTick(), yn);
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
                            const s = Math.floor((r.expires_at * 1e3 - e) / yn);
                            this._debug("#_autoRefreshTokenTick()", `access token expires in ${s} ticks, a tick lasts ${yn}ms, refresh threshold is ${da} ticks`),
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
            if (e.isAcquireTimeout || e instanceof Ah)
                this._debug("auto refresh token tick lock not available");
            else
                throw e
        }
    }
    async _handleVisibilityChange() {
        if (this._debug("#_handleVisibilityChange()"),
        !qe() || !(window != null && window.addEventListener))
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
            const [i,o] = await pn(this.storage, this.storageKey)
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
                } : await $(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
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
                  , {data: l, error: u} = await $(this.fetch, "POST", `${this.url}/factors`, {
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
                    const {data: o, error: a} = await $(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
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
                    } : await $(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
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
            const {payload: o} = lo(s.access_token);
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
        r && this.jwks_cached_at + F0 > s)
            return r;
        const {data: i, error: o} = await $(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
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
            const {header: s, payload: i, signature: o, raw: {header: a, payload: l}} = lo(r);
            n != null && n.allowExpired || dv(i.exp);
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
            const c = hv(s.alg)
              , d = await crypto.subtle.importKey("jwk", u, c, !0, ["verify"]);
            if (!await crypto.subtle.verify(c, d, o, Y0(`${a}.${l}`)))
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
Wr.nextInstanceID = 0;
const Tv = Wr;
class Pv extends Tv {
    constructor(e) {
        super(e)
    }
}
var Nv = function(t, e, n, r) {
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
class Ov {
    constructor(e, n, r) {
        var s, i, o;
        this.supabaseUrl = e,
        this.supabaseKey = n;
        const a = L0(e);
        if (!n)
            throw new Error("supabaseKey is required.");
        this.realtimeUrl = new URL("realtime/v1",a),
        this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"),
        this.authUrl = new URL("auth/v1",a),
        this.storageUrl = new URL("storage/v1",a),
        this.functionsUrl = new URL("functions/v1",a);
        const l = `sb-${a.hostname.split(".")[0]}-auth-token`
          , u = {
            db: j0,
            realtime: T0,
            auth: Object.assign(Object.assign({}, C0), {
                storageKey: l
            }),
            global: b0
        }
          , c = $0(r ?? {}, u);
        this.storageKey = (s = c.auth.storageKey) !== null && s !== void 0 ? s : "",
        this.headers = (i = c.global.headers) !== null && i !== void 0 ? i : {},
        c.accessToken ? (this.accessToken = c.accessToken,
        this.auth = new Proxy({},{
            get: (d, f) => {
                throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(f)} is not possible`)
            }
        })) : this.auth = this._initSupabaseAuthClient((o = c.auth) !== null && o !== void 0 ? o : {}, this.headers, c.global.fetch),
        this.fetch = R0(n, this._getAccessToken.bind(this), c.global.fetch),
        this.realtime = this._initRealtimeClient(Object.assign({
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this)
        }, c.realtime)),
        this.rest = new qg(new URL("rest/v1",a).href,{
            headers: this.headers,
            schema: c.db.schema,
            fetch: this.fetch
        }),
        this.storage = new x0(this.storageUrl.href,this.headers,this.fetch,r == null ? void 0 : r.storage),
        c.accessToken || this._listenForAuthEvents()
    }
    get functions() {
        return new Eg(this.functionsUrl.href,{
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
        return Nv(this, void 0, void 0, function*() {
            if (this.accessToken)
                return yield this.accessToken();
            const {data: r} = yield this.auth.getSession();
            return (n = (e = r.session) === null || e === void 0 ? void 0 : e.access_token) !== null && n !== void 0 ? n : this.supabaseKey
        })
    }
    _initSupabaseAuthClient({autoRefreshToken: e, persistSession: n, detectSessionInUrl: r, storage: s, userStorage: i, storageKey: o, flowType: a, lock: l, debug: u}, c, d) {
        const f = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new Pv({
            url: this.authUrl.href,
            headers: Object.assign(Object.assign({}, f), c),
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
        return new u0(this.realtimeUrl.href,Object.assign(Object.assign({}, e), {
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
const vl = (t, e, n) => new Ov(t,e,n);
function Rv() {
    if (typeof window < "u" || typeof process > "u")
        return !1;
    const t = process.version;
    if (t == null)
        return !1;
    const e = t.match(/^v(\d+)\./);
    return e ? parseInt(e[1], 10) <= 18 : !1
}
Rv() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
const Pe = vl("https://vflvgyobnsfbszhadxfb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmbHZneW9ibnNmYnN6aGFkeGZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2ODk3MTMsImV4cCI6MjA5MjI2NTcxM30.Ao6wFZ-pLoKQ0eNY4iOUjXzvgDtLlewLHEyaG4Kp9tA")
  , Iv = () => {
    let t = sessionStorage.getItem("ny-cricket-chat-session");
    return t || (t = `chat-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    sessionStorage.setItem("ny-cricket-chat-session", t)),
    t
}
  , Ju = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899", "#f43f5e", "#14b8a6"]
  , Av = () => Ju[Math.floor(Math.random() * Ju.length)];
function $v(t) {
    const [e,n] = C.useState([])
      , [r,s] = C.useState([])
      , [i,o] = C.useState(null)
      , [a,l] = C.useState("")
      , [u,c] = C.useState(null)
      , [d,f] = C.useState(!1)
      , [v,y] = C.useState(!1)
      , w = C.useRef(Iv())
      , k = C.useRef(null)
      , p = C.useRef(null)
      , h = C.useRef(null);
    C.useEffect( () => {
        if (!t) {
            n([]),
            s([]),
            o(null),
            y(!1);
            return
        }
        return (async () => {
            try {
                let b = localStorage.getItem(`ny-cricket-username-${t}`)
                  , A = localStorage.getItem(`ny-cricket-color-${t}`);
                b || (b = `User${Math.floor(Math.random() * 9e3) + 1e3}`,
                localStorage.setItem(`ny-cricket-username-${t}`, b)),
                A || (A = Av(),
                localStorage.setItem(`ny-cricket-color-${t}`, A)),
                o(b),
                l(A);
                const {data: N, error: z} = await Pe.from("chat_users").insert({
                    session_id: w.current,
                    channel_id: t,
                    username: b,
                    user_color: A
                }).select().maybeSingle();
                if (z) {
                    console.error("User insert error:", z);
                    return
                }
                N && c(N.id),
                y(!0);
                const {data: Te} = await Pe.from("chat_messages").select("*").eq("channel_id", t).order("created_at", {
                    ascending: !0
                }).limit(100);
                Te && n(Te);
                const {data: pe} = await Pe.from("chat_users").select("*").eq("channel_id", t).order("joined_at", {
                    ascending: !1
                });
                pe && s(pe.filter(dn => dn.session_id !== w.current))
            } catch (b) {
                console.error("Chat setup error:", b)
            }
        }
        )(),
        () => {
            p.current && Pe.removeChannel(p.current),
            h.current && Pe.removeChannel(h.current)
        }
    }
    , [t]),
    C.useEffect( () => {
        if (!t)
            return;
        const S = Pe.channel(`chat-${t}`).on("postgres_changes", {
            event: "INSERT",
            schema: "public",
            table: "chat_messages",
            filter: `channel_id=eq.${t}`
        }, b => {
            const A = b.new;
            n(N => [...N, A])
        }
        ).subscribe();
        return p.current = S,
        () => {
            Pe.removeChannel(S)
        }
    }
    , [t]),
    C.useEffect( () => {
        if (!t)
            return;
        const S = Pe.channel(`chat-users-${t}`).on("postgres_changes", {
            event: "INSERT",
            schema: "public",
            table: "chat_users",
            filter: `channel_id=eq.${t}`
        }, b => {
            const A = b.new;
            A.session_id !== w.current && s(N => N.some(Te => Te.id === A.id) ? N : [...N, A])
        }
        ).on("postgres_changes", {
            event: "UPDATE",
            schema: "public",
            table: "chat_users",
            filter: `channel_id=eq.${t}`
        }, b => {
            const A = b.new;
            A.session_id !== w.current && s(N => N.map(z => z.id === A.id ? A : z))
        }
        ).on("postgres_changes", {
            event: "DELETE",
            schema: "public",
            table: "chat_users",
            filter: `channel_id=eq.${t}`
        }, b => {
            const A = b.old;
            s(N => N.filter(z => z.id !== A.id))
        }
        ).subscribe();
        return h.current = S,
        () => {
            Pe.removeChannel(S)
        }
    }
    , [t]);
    const m = C.useCallback(async S => {
        if (!(!t || !i || !S.trim() || !v))
            try {
                u && await Pe.from("chat_users").update({
                    is_typing: !1
                }).eq("id", u),
                await Pe.from("chat_messages").insert({
                    channel_id: t,
                    username: i,
                    message: S.trim(),
                    user_color: a
                }),
                f(!1)
            } catch (b) {
                console.error("Failed to send message:", b)
            }
    }
    , [t, i, a, u, v])
      , _ = C.useCallback(async S => {
        if (!(!u || !t))
            try {
                await Pe.from("chat_users").update({
                    is_typing: S,
                    last_activity: new Date().toISOString()
                }).eq("id", u),
                f(S)
            } catch (b) {
                console.error("Failed to update typing status:", b)
            }
    }
    , [u, t])
      , j = C.useCallback( () => {
        d || _(!0),
        k.current && clearTimeout(k.current),
        k.current = setTimeout( () => {
            _(!1)
        }
        , 3e3)
    }
    , [d, _])
      , E = C.useCallback(async () => {
        if (u)
            try {
                await Pe.from("chat_users").delete().eq("id", u),
                y(!1)
            } catch (S) {
                console.error("Failed to leave chat:", S)
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
        sendMessage: m,
        handleTyping: j,
        leaveChat: E,
        onlineCount: r.length + 1
    }
}
function $h({channelId: t, onClose: e, isMinimized: n=!1}) {
    const {messages: r, onlineUsers: s, currentUsername: i, sendMessage: o, handleTyping: a, canChat: l, onlineCount: u} = $v(t)
      , c = C.useRef(null)
      , [d,f] = C.useState(n)
      , [v,y] = C.useState(0)
      , [w,k] = C.useState(0)
      , p = () => {
        var h;
        (h = c.current) == null || h.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return C.useEffect( () => {
        p(),
        r.length > w && !d ? k(r.length) : r.length > w && y(r.length - w)
    }
    , [r, d, w]),
    C.useEffect( () => {
        d || (y(0),
        k(r.length))
    }
    , [d, r.length]),
    t ? g.jsxs("div", {
        className: `fixed right-0 bottom-0 z-40 transition-all duration-300 ${d ? "w-full sm:w-80 h-16 sm:h-14" : "w-full sm:w-80 h-screen sm:h-screen max-h-[60vh] sm:max-h-[500px]"}`,
        children: [g.jsxs("div", {
            className: "bg-gradient-to-r from-gray-900 via-gray-850 to-gray-900 border-l border-t border-orange-500/20 flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 cursor-pointer hover:bg-gray-800/50 transition-colors duration-200 h-16 sm:h-14 flex-shrink-0",
            onClick: () => f(!d),
            children: [g.jsxs("div", {
                className: "flex items-center gap-2 min-w-0 flex-1",
                children: [g.jsxs("div", {
                    className: "relative flex-shrink-0",
                    children: [g.jsx(As, {
                        size: 18,
                        className: "text-orange-400"
                    }), v > 0 && !d && g.jsx("div", {
                        className: "absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse",
                        children: v > 99 ? "99+" : v
                    })]
                }), g.jsxs("div", {
                    className: `min-w-0 ${d ? "hidden sm:block" : ""}`,
                    children: [g.jsx("h3", {
                        className: "text-sm font-bold text-white truncate",
                        children: "Live Chat"
                    }), g.jsxs("div", {
                        className: "flex items-center gap-1.5",
                        children: [g.jsx("div", {
                            className: "w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"
                        }), g.jsxs("span", {
                            className: "text-xs text-gray-400",
                            children: [u, " online"]
                        })]
                    })]
                })]
            }), g.jsx("button", {
                onClick: h => {
                    h.stopPropagation(),
                    f(!d)
                }
                ,
                className: "w-7 h-7 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200 flex-shrink-0",
                "aria-label": "Toggle chat",
                children: g.jsx(fm, {
                    size: 16,
                    className: `text-gray-400 transition-transform duration-300 ${d ? "" : "rotate-180"}`
                })
            }), e && g.jsx("button", {
                onClick: h => {
                    h.stopPropagation(),
                    e()
                }
                ,
                className: "ml-1 w-6 h-6 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200 flex-shrink-0 text-sm",
                "aria-label": "Close chat",
                children: "✕"
            })]
        }), !d && g.jsxs("div", {
            className: "hidden sm:flex flex-col bg-gray-900/50 backdrop-blur-sm h-[calc(100%-56px)]",
            children: [g.jsxs("div", {
                className: "flex-1 overflow-y-auto flex flex-col gap-3 p-3 sm:p-4 scrollbar-thin scrollbar-thumb-orange-500/30 scrollbar-track-gray-800/20",
                children: [r.length === 0 ? g.jsxs("div", {
                    className: "flex flex-col items-center justify-center h-full gap-3 text-center",
                    children: [g.jsx(As, {
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
                }) : r.map(h => g.jsx(Nu, {
                    username: h.username,
                    message: h.message,
                    userColor: h.user_color,
                    timestamp: h.created_at,
                    isCurrentUser: h.username === i
                }, h.id)), g.jsx("div", {
                    ref: c
                })]
            }), g.jsxs("div", {
                className: "px-3 sm:px-4 py-2 border-t border-gray-800 bg-gray-950/50 max-h-20 overflow-y-auto",
                children: [g.jsxs("div", {
                    className: "flex items-center gap-2 mb-2",
                    children: [g.jsx(_m, {
                        size: 14,
                        className: "text-orange-400"
                    }), g.jsxs("span", {
                        className: "text-xs font-bold text-gray-300",
                        children: ["Online (", u, ")"]
                    })]
                }), g.jsxs("div", {
                    className: "flex flex-wrap gap-1",
                    children: [i && g.jsxs("div", {
                        className: "inline-flex items-center gap-1 px-2 py-1 bg-orange-500/20 border border-orange-500/40 rounded-full text-xs text-orange-300 font-medium",
                        children: [g.jsx("div", {
                            className: "w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"
                        }), "You"]
                    }), s.map(h => g.jsxs("div", {
                        className: "inline-flex items-center gap-1 px-2 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs text-gray-300",
                        children: [g.jsx("div", {
                            className: "w-1.5 h-1.5 rounded-full animate-pulse",
                            style: {
                                backgroundColor: h.user_color
                            }
                        }), h.username]
                    }, h.id))]
                })]
            }), g.jsx(Ou, {
                onSendMessage: o,
                onTyping: a,
                disabled: !l,
                placeholder: "Match update? Goal? Comment..."
            })]
        }), !d && g.jsxs("div", {
            className: "sm:hidden fixed inset-0 z-50 flex flex-col bg-gray-900 pt-16",
            children: [g.jsxs("div", {
                className: "flex-1 overflow-y-auto flex flex-col gap-2 p-3 scrollbar-thin scrollbar-thumb-orange-500/30",
                children: [r.length === 0 ? g.jsxs("div", {
                    className: "flex flex-col items-center justify-center h-full gap-3",
                    children: [g.jsx(As, {
                        size: 28,
                        className: "text-orange-400/30"
                    }), g.jsxs("div", {
                        className: "text-center",
                        children: [g.jsx("p", {
                            className: "text-sm font-semibold text-gray-300",
                            children: "No messages yet"
                        }), g.jsx("p", {
                            className: "text-xs text-gray-500",
                            children: "Start the conversation!"
                        })]
                    })]
                }) : r.map(h => g.jsx(Nu, {
                    username: h.username,
                    message: h.message,
                    userColor: h.user_color,
                    timestamp: h.created_at,
                    isCurrentUser: h.username === i
                }, h.id)), g.jsx("div", {
                    ref: c
                })]
            }), g.jsx(Ou, {
                onSendMessage: o,
                onTyping: a,
                disabled: !l,
                placeholder: "Message..."
            })]
        })]
    }) : null
}
const ks = 3;
function Lv({channel: t, onClose: e, onViewTrack: n, currentViewCount: r, totalViews: s}) {
    const i = C.useRef(null)
      , o = C.useRef(null)
      , a = C.useRef(null)
      , l = C.useRef(0)
      , u = C.useRef(null)
      , c = C.useRef(!1)
      , d = C.useRef(!1)
      , [f,v] = C.useState("loading")
      , [y,w] = C.useState("")
      , [k,p] = C.useState("Loading stream…")
      , [h,m] = C.useState(!0)
      , [_,j] = C.useState(!1)
      , [E,S] = C.useState(!1)
      , [b,A] = C.useState(!1)
      , N = C.useCallback(H => {
        w(H),
        v("error"),
        m(!0)
    }
    , [])
      , z = C.useCallback( () => {
        m(!1),
        v("playing"),
        c.current || (c.current = !0,
        n())
    }
    , [n])
      , Te = C.useCallback(async () => {
        const H = i.current;
        if (!(!H || f !== "ready"))
            try {
                H.muted = !1,
                H.volume = .8,
                await H.play(),
                z()
            } catch {
                try {
                    H.muted = !0,
                    await H.play(),
                    z()
                } catch {
                    p("Tap again to play")
                }
            }
    }
    , [f, z])
      , pe = C.useCallback(async H => {
        if (d.current)
            return;
        d.current = !0;
        const ke = i.current;
        if (!ke) {
            d.current = !1;
            return
        }
        try {
            await H.load(t.url),
            l.current = 0,
            v("ready"),
            p("Tap to Play");
            try {
                ke.muted = !0,
                await ke.play(),
                z()
            } catch {
                v("ready"),
                p("Tap to Play")
            }
            d.current = !1
        } catch (T) {
            if (console.error("Load error:", T),
            d.current = !1,
            l.current < ks) {
                l.current++;
                const R = l.current * 4e3;
                v("retrying"),
                p(`Connecting… (${l.current}/${ks})`),
                u.current = setTimeout( () => pe(H), R)
            } else
                N("Stream unavailable. Check link or try again.")
        }
    }
    , [t.url, z, N])
      , dn = C.useCallback( () => {
        l.current = 0,
        d.current = !1,
        v("loading"),
        p("Reconnecting…"),
        m(!0),
        a.current && pe(a.current)
    }
    , [pe])
      , Pi = () => {
        const H = `${window.location.origin}?channel=${t.id}`;
        navigator.clipboard.writeText(H),
        j(!0),
        setTimeout( () => j(!1), 2e3)
    }
    ;
    return C.useEffect( () => {
        const H = i.current
          , ke = o.current;
        if (!H || !ke)
            return;
        let T = !1;
        return (async () => {
            const O = window.shaka;
            if (!O) {
                N("Player library not loaded");
                return
            }
            if (O.polyfill.installAll(),
            !O.Player.isBrowserSupported()) {
                N("Browser not supported");
                return
            }
            const M = new O.Player;
            a.current = M;
            try {
                await M.attach(H)
            } catch (Le) {
                console.error("Attach error:", Le)
            }
            new O.ui.Overlay(M,ke,H).configure({
                controlPanelElements: ["play_pause", "time_and_duration", "mute", "volume", "spacer", "quality", "language", "picture_in_picture", "fullscreen", "overflow_menu"]
            }),
            t.keyId && t.key && M.configure({
                drm: {
                    clearKeys: {
                        [t.keyId]: t.key
                    }
                }
            }),
            M.getNetworkingEngine().registerRequestFilter( (Le, ee) => {
                if (ee.headers.Referer = "https://www.jiotv.com/",
                ee.headers.Origin = "https://www.jiotv.com",
                ee.headers["User-Agent"] = "Mozilla/5.0 (Linux; Android 13) ExoPlayer/2.18.1",
                t.cookie && (ee.headers.Cookie = t.cookie,
                (Le === O.net.NetworkingEngine.RequestType.MANIFEST || Le === O.net.NetworkingEngine.RequestType.SEGMENT) && !ee.uris[0].includes("__hdnea__="))) {
                    const Ve = ee.uris[0].includes("?") ? "&" : "?";
                    ee.uris[0] += Ve + t.cookie
                }
            }
            ),
            M.getNetworkingEngine().registerResponseFilter( (Le, ee) => {
                if (ee.status === 429) {
                    const wt = parseInt(ee.headers["retry-after"] || "10", 10) * 1e3;
                    return new Promise(Ve => setTimeout(Ve, Math.min(wt, 3e4)))
                }
            }
            ),
            M.configure({
                streaming: {
                    bufferingGoal: 12,
                    rebufferingGoal: 4,
                    bufferBehind: 15,
                    segmentPrefetchLimit: 2,
                    retryParameters: {
                        timeout: 2e4,
                        maxAttempts: 2,
                        baseDelay: 4e3,
                        backoffFactor: 2,
                        fuzzFactor: .3
                    }
                },
                manifest: {
                    retryParameters: {
                        timeout: 15e3,
                        maxAttempts: 2,
                        baseDelay: 4e3,
                        backoffFactor: 2
                    },
                    dash: {
                        ignoreMinBufferTime: !0,
                        autoCorrectDrift: !0
                    }
                }
            }),
            M.addEventListener("error", Le => {
                if (!(T || Le.detail.severity === 1))
                    if (l.current < ks) {
                        l.current++;
                        const wt = Math.min(l.current * 4e3, 2e4);
                        v("retrying"),
                        p(`Retrying… (${l.current}/${ks})`),
                        m(!0),
                        u.current = setTimeout( () => {
                            d.current = !1,
                            pe(M)
                        }
                        , wt)
                    } else
                        N("Unable to load. Cookies may be expired.")
            }
            ),
            T || await pe(M)
        }
        )(),
        () => {
            T = !0,
            u.current && clearTimeout(u.current),
            a.current && (a.current.detach().then( () => {
                var O;
                return (O = a.current) == null ? void 0 : O.destroy()
            }
            ).catch( () => {}
            ),
            a.current = null)
        }
    }
    , [t, pe, N]),
    C.useEffect( () => {
        const H = ke => {
            ke.key === "Escape" && e(),
            ke.key === " " && (ke.preventDefault(),
            i.current && (i.current.paused ? i.current.play() : i.current.pause()))
        }
        ;
        return document.addEventListener("keydown", H),
        () => document.removeEventListener("keydown", H)
    }
    , [e]),
    g.jsxs("div", {
        className: "fixed inset-0 z-50 bg-black flex flex-col",
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
                className: "flex items-center gap-1.5 sm:gap-2 flex-shrink-0",
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
                    onClick: () => S(!E),
                    className: "w-7 h-7 sm:w-8 sm:h-8 hover:bg-blue-500/20 active:bg-blue-500/30 rounded-full flex items-center justify-center transition-colors duration-200 border border-blue-500/10 hover:border-blue-500/30 flex-shrink-0",
                    title: "Toggle chat",
                    children: g.jsx(As, {
                        size: 14,
                        className: E ? "text-blue-300" : "text-blue-400"
                    })
                }), g.jsx("button", {
                    onClick: Pi,
                    className: "w-7 h-7 sm:w-8 sm:h-8 hover:bg-orange-500/20 active:bg-orange-500/30 rounded-full flex items-center justify-center transition-colors duration-200 border border-orange-500/10 hover:border-orange-500/30 flex-shrink-0",
                    title: "Copy share link",
                    children: g.jsx(ch, {
                        size: 14,
                        className: _ ? "text-orange-300" : "text-orange-400"
                    })
                }), g.jsx("button", {
                    onClick: e,
                    className: "w-7 h-7 sm:w-8 sm:h-8 bg-gray-800/80 hover:bg-red-500 active:bg-red-600 rounded-full flex items-center justify-center transition-all duration-200 border border-gray-700 hover:border-red-500 flex-shrink-0",
                    "aria-label": "Close",
                    children: g.jsx(km, {
                        size: 15,
                        className: "text-gray-300 hover:text-white"
                    })
                })]
            })]
        }), g.jsx("div", {
            className: "relative flex-1 min-h-0 bg-black",
            children: g.jsxs("div", {
                ref: o,
                className: "shaka-video-container youtube-theme absolute inset-0 w-full h-full",
                "data-shaka-player": !0,
                children: [g.jsx("video", {
                    ref: i,
                    className: "w-full h-full bg-black object-contain",
                    playsInline: !0,
                    preload: "auto"
                }), h && g.jsxs("div", {
                    className: `absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 sm:gap-6 cursor-pointer backdrop-blur-sm transition-all duration-500 ${f === "playing" ? "opacity-0 pointer-events-none" : "opacity-100"}`,
                    onClick: Te,
                    children: [(f === "loading" || f === "retrying") && g.jsxs("div", {
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
                    }), f === "ready" && g.jsxs("button", {
                        className: "relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden group",
                        onClick: Te,
                        "aria-label": "Play",
                        children: [g.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 animate-pulse group-hover:from-orange-400 group-hover:to-yellow-400 transition-all"
                        }), g.jsx("div", {
                            className: "absolute inset-1 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                            children: g.jsx("svg", {
                                viewBox: "0 0 24 24",
                                className: "w-6 h-6 sm:w-8 sm:h-8 fill-orange-400 ml-1 group-hover:fill-orange-300",
                                children: g.jsx("path", {
                                    d: "M8 5v14l11-7z"
                                })
                            })
                        })]
                    }), f !== "error" && g.jsx("p", {
                        className: "text-white/90 text-xs sm:text-sm tracking-wide drop-shadow-xl font-medium animate-pulse",
                        children: k
                    })]
                }), f === "error" && g.jsxs("div", {
                    className: "absolute inset-0 z-40 bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm flex flex-col items-center justify-center gap-3 sm:gap-5 p-4 sm:p-6 text-center",
                    children: [g.jsx("div", {
                        className: "w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500/30 to-red-500/20 rounded-full flex items-center justify-center border-2 border-orange-500/40 animate-pulse",
                        children: g.jsx(gm, {
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
                        onClick: dn,
                        className: "flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-yellow-500 active:from-orange-700 active:to-orange-600 text-white rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-lg hover:shadow-orange-400/50",
                        children: [g.jsx(uh, {
                            size: 14,
                            className: "sm:w-4 sm:h-4"
                        }), "Retry"]
                    })]
                })]
            })
        }), E && g.jsx($h, {
            channelId: t.id,
            onClose: () => S(!1),
            isMinimized: b
        })]
    })
}
function Dv({liveViewers: t, peakViewers: e, totalViews: n}) {
    const [r,s] = C.useState(0)
      , [i,o] = C.useState(0)
      , [a,l] = C.useState(0);
    return C.useEffect( () => {
        ( (c, d, f, v=600) => {
            const y = Date.now()
              , w = d - c
              , k = () => {
                const p = Date.now() - y
                  , h = Math.min(p / v, 1);
                f(Math.floor(c + w * h)),
                h < 1 && requestAnimationFrame(k)
            }
            ;
            k()
        }
        )(r, t, s)
    }
    , [t]),
    C.useEffect( () => {
        ( (c, d, f, v=800) => {
            const y = Date.now()
              , w = d - c
              , k = () => {
                const p = Date.now() - y
                  , h = Math.min(p / v, 1);
                f(Math.floor(c + w * h)),
                h < 1 && requestAnimationFrame(k)
            }
            ;
            k()
        }
        )(i, e, o)
    }
    , [e]),
    C.useEffect( () => {
        ( (c, d, f, v=1e3) => {
            const y = Date.now()
              , w = d - c
              , k = () => {
                const p = Date.now() - y
                  , h = Math.min(p / v, 1);
                f(Math.floor(c + w * h)),
                h < 1 && requestAnimationFrame(k)
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
                        children: [g.jsx(dh, {
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
                        children: [g.jsx(wm, {
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
    const [t,e] = C.useState([])
      , [n,r] = C.useState(!0)
      , [s,i] = C.useState(null);
    return C.useEffect( () => {
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
const lr = vl("https://vflvgyobnsfbszhadxfb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmbHZneW9ibnNmYnN6aGFkeGZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2ODk3MTMsImV4cCI6MjA5MjI2NTcxM30.Ao6wFZ-pLoKQ0eNY4iOUjXzvgDtLlewLHEyaG4Kp9tA")
  , zv = () => {
    let t = sessionStorage.getItem("ny-cricket-session");
    return t || (t = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    sessionStorage.setItem("ny-cricket-session", t)),
    t
}
;
function Fv() {
    const [t,e] = C.useState({})
      , n = C.useRef(new Set);
    C.useEffect( () => {
        r()
    }
    , []);
    const r = async () => {
        try {
            const {data: o, error: a} = await lr.from("daily_channel_stats").select("channel_id, total_views").eq("view_date", new Date().toISOString().split("T")[0]);
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
                    await lr.from("channel_views").insert({
                        channel_id: o,
                        channel_name: a,
                        session_id: l,
                        viewed_at: new Date().toISOString()
                    });
                    const {data: c, error: d} = await lr.from("daily_channel_stats").select("id, total_views").eq("channel_id", o).eq("view_date", u).maybeSingle();
                    if (d && d.code !== "PGRST116") {
                        console.error("Fetch error:", d);
                        return
                    }
                    if (c) {
                        const f = (c.total_views || 0) + 1;
                        await lr.from("daily_channel_stats").update({
                            total_views: f
                        }).eq("id", c.id),
                        e(v => ({
                            ...v,
                            [o]: f
                        }))
                    } else
                        await lr.from("daily_channel_stats").insert({
                            channel_id: o,
                            view_date: u,
                            total_views: 1,
                            unique_viewers: 1
                        }),
                        e(f => ({
                            ...f,
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
const tt = vl("https://vflvgyobnsfbszhadxfb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmbHZneW9ibnNmYnN6aGFkeGZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2ODk3MTMsImV4cCI6MjA5MjI2NTcxM30.Ao6wFZ-pLoKQ0eNY4iOUjXzvgDtLlewLHEyaG4Kp9tA")
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
    const [t,e] = C.useState({})
      , [n,r] = C.useState({})
      , [s,i] = C.useState(!1)
      , o = C.useRef(null)
      , a = C.useRef("")
      , l = C.useRef(Bv());
    C.useEffect( () => {
        u();
        const f = setInterval(u, 3e3);
        return () => clearInterval(f)
    }
    , []);
    const u = async () => {
        try {
            const {data: f, error: v} = await tt.from("channel_stats_live").select("channel_id, current_viewers, peak_viewers");
            if (v) {
                console.error("Failed to load live stats:", v);
                return
            }
            const y = {}
              , w = {};
            f == null || f.forEach(k => {
                y[k.channel_id] = k.current_viewers || 0,
                w[k.channel_id] = k.peak_viewers || 0
            }
            ),
            e(y),
            r(w)
        } catch (f) {
            console.error("Error loading live stats:", f)
        }
    }
    ;
    return {
        liveViewers: t,
        peakViewers: n,
        isWatching: s,
        startWatching: async f => {
            a.current = f;
            const v = l.current
              , y = Wv();
            try {
                await tt.from("active_viewers").insert({
                    channel_id: f,
                    session_id: v,
                    device_type: y
                });
                const {data: w} = await tt.from("channel_stats_live").select("current_viewers, peak_viewers").eq("channel_id", f).maybeSingle();
                if (w) {
                    const k = (w.current_viewers || 0) + 1
                      , p = Math.max(w.peak_viewers || 0, k);
                    await tt.from("channel_stats_live").update({
                        current_viewers: k,
                        peak_viewers: p
                    }).eq("channel_id", f),
                    e(h => ({
                        ...h,
                        [f]: k
                    })),
                    r(h => ({
                        ...h,
                        [f]: p
                    }))
                } else
                    await tt.from("channel_stats_live").insert({
                        channel_id: f,
                        current_viewers: 1,
                        peak_viewers: 1
                    }),
                    e(k => ({
                        ...k,
                        [f]: 1
                    })),
                    r(k => ({
                        ...k,
                        [f]: 1
                    }));
                i(!0),
                o.current && clearInterval(o.current),
                o.current = setInterval(async () => {
                    try {
                        await tt.from("active_viewers").update({
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
            const f = l.current
              , v = a.current;
            o.current && (clearInterval(o.current),
            o.current = null);
            try {
                const {data: y} = await tt.from("active_viewers").select("id").eq("session_id", f).maybeSingle();
                if (y && await tt.from("active_viewers").delete().eq("id", y.id),
                v) {
                    const {data: w} = await tt.from("channel_stats_live").select("current_viewers").eq("channel_id", v).maybeSingle();
                    w && w.current_viewers > 0 && (await tt.from("channel_stats_live").update({
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
      , [u,c] = C.useState(null)
      , d = C.useRef(!1);
    C.useEffect( () => {
        const h = new URLSearchParams(window.location.search).get("channel");
        if (h && t.length > 0 && !d.current) {
            const m = t.find(_ => _.id === h);
            m && (d.current = !0,
            c(m),
            s(m.id, m.name),
            a(m.id))
        }
    }
    , [t, s, a]);
    const f = p => {
        (u == null ? void 0 : u.id) !== p.id && (l(),
        c(p),
        window.history.replaceState(null, "", `?channel=${p.id}`),
        a(p.id))
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
            }), g.jsx(Sm, {}), g.jsxs("main", {
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
                        liveViewers: Object.values(i).reduce( (p, h) => p + h, 0),
                        peakViewers: Math.max(0, ...Object.values(o)),
                        totalViews: Object.values(r).reduce( (p, h) => p + h, 0)
                    })]
                }), g.jsx(bm, {
                    channels: t,
                    loading: e,
                    error: n,
                    onSelect: f,
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
        }), !u && g.jsx($h, {
            channelId: null,
            isMinimized: !1
        })]
    })
}
lh(document.getElementById("root")).render(g.jsx(C.StrictMode, {
    children: g.jsx(Hv, {})
}));
