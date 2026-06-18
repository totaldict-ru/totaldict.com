/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/htm/dist/htm.module.js":
/*!*********************************************!*\
  !*** ./node_modules/htm/dist/htm.module.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
var n = function (t, s, r, e) {
    var u;
    s[0] = 0;
    for (var h = 1; h < s.length; h++) {
      var p = s[h++],
        a = s[h] ? (s[0] |= p ? 1 : 2, r[s[h++]]) : s[++h];
      3 === p ? e[0] = a : 4 === p ? e[1] = Object.assign(e[1] || {}, a) : 5 === p ? (e[1] = e[1] || {})[s[++h]] = a : 6 === p ? e[1][s[++h]] += a + "" : p ? (u = t.apply(a, n(t, a, r, ["", null])), e.push(u), a[0] ? s[0] |= 2 : (s[h - 2] = 0, s[h] = u)) : e.push(a);
    }
    return e;
  },
  t = new Map();
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(s) {
  var r = t.get(this);
  return r || (r = new Map(), t.set(this, r)), (r = n(this, r.get(s) || (r.set(s, r = function (n) {
    for (var t, s, r = 1, e = "", u = "", h = [0], p = function (n) {
        1 === r && (n || (e = e.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h.push(0, n, e) : 3 === r && (n || e) ? (h.push(3, n, e), r = 2) : 2 === r && "..." === e && n ? h.push(4, n, 0) : 2 === r && e && !n ? h.push(5, 0, !0, e) : r >= 5 && ((e || !n && 5 === r) && (h.push(r, 0, e, s), r = 6), n && (h.push(r, n, 0, s), r = 6)), e = "";
      }, a = 0; a < n.length; a++) {
      a && (1 === r && p(), p(a));
      for (var l = 0; l < n[a].length; l++) t = n[a][l], 1 === r ? "<" === t ? (p(), h = [h], r = 3) : e += t : 4 === r ? "--" === e && ">" === t ? (r = 1, e = "") : e = t + e[0] : u ? t === u ? u = "" : e += t : '"' === t || "'" === t ? u = t : ">" === t ? (p(), r = 1) : r && ("=" === t ? (r = 5, s = e, e = "") : "/" === t && (r < 5 || ">" === n[a][l + 1]) ? (p(), 3 === r && (h = h[0]), r = h, (h = h[0]).push(2, 0, r), r = 0) : " " === t || "\t" === t || "\n" === t || "\r" === t ? (p(), r = 2) : e += t), 3 === r && "!--" === e && (r = 4, h = h[0]);
    }
    return p(), h;
  }(s)), r), arguments, [])).length > 1 ? r : r[0];
}

/***/ }),

/***/ "./node_modules/preact/debug/dist/debug.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/debug/dist/debug.module.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resetPropWarnings": function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_devtools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/devtools */ "./node_modules/preact/devtools/dist/devtools.module.js");


var o = {};
function r() {
  o = {};
}
function a(e) {
  return e.type === preact__WEBPACK_IMPORTED_MODULE_0__.Fragment ? "Fragment" : "function" == typeof e.type ? e.type.displayName || e.type.name : "string" == typeof e.type ? e.type : "#text";
}
var i = [],
  c = [];
function s() {
  return i.length > 0 ? i[i.length - 1] : null;
}
var u = !1;
function l(e) {
  return "function" == typeof e.type && e.type != preact__WEBPACK_IMPORTED_MODULE_0__.Fragment;
}
function f(n) {
  for (var e = [n], t = n; null != t.__o;) e.push(t.__o), t = t.__o;
  return e.reduce(function (n, e) {
    n += "  in " + a(e);
    var t = e.__source;
    return t ? n += " (at " + t.fileName + ":" + t.lineNumber + ")" : u || (u = !0, console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")), n + "\n";
  }, "");
}
var p = "function" == typeof WeakMap;
function d(n) {
  return n ? "function" == typeof n.type ? d(n.__) : n : {};
}
var h = preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.setState;
preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.setState = function (n, e) {
  return null == this.__v && null == this.state && console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' + f(s())), h.call(this, n, e);
};
var v = preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.forceUpdate;
function y(n) {
  var e = n.props,
    t = a(n),
    o = "";
  for (var r in e) if (e.hasOwnProperty(r) && "children" !== r) {
    var i = e[r];
    "function" == typeof i && (i = "function " + (i.displayName || i.name) + "() {}"), i = Object(i) !== i || i.toString ? i + "" : Object.prototype.toString.call(i), o += " " + r + "=" + JSON.stringify(i);
  }
  var c = e.children;
  return "<" + t + o + (c && c.length ? ">..</" + t + ">" : " />");
}
preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.forceUpdate = function (n) {
  return null == this.__v ? console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' + f(s())) : null == this.__P && console.warn('Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' + f(this.__v)), v.call(this, n);
}, function () {
  !function () {
    var n = preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,
      t = preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,
      o = preact__WEBPACK_IMPORTED_MODULE_0__.options.__,
      r = preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode,
      a = preact__WEBPACK_IMPORTED_MODULE_0__.options.__r;
    preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed = function (n) {
      l(n) && c.pop(), i.pop(), t && t(n);
    }, preact__WEBPACK_IMPORTED_MODULE_0__.options.__b = function (e) {
      l(e) && i.push(e), n && n(e);
    }, preact__WEBPACK_IMPORTED_MODULE_0__.options.__ = function (n, e) {
      c = [], o && o(n, e);
    }, preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode = function (n) {
      n.__o = c.length > 0 ? c[c.length - 1] : null, r && r(n);
    }, preact__WEBPACK_IMPORTED_MODULE_0__.options.__r = function (n) {
      l(n) && c.push(n), a && a(n);
    };
  }();
  var n = !1,
    t = preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,
    r = preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,
    s = preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode,
    u = preact__WEBPACK_IMPORTED_MODULE_0__.options.__e,
    h = preact__WEBPACK_IMPORTED_MODULE_0__.options.__,
    v = preact__WEBPACK_IMPORTED_MODULE_0__.options.__h,
    m = p ? {
      useEffect: new WeakMap(),
      useLayoutEffect: new WeakMap(),
      lazyPropTypes: new WeakMap()
    } : null,
    b = [];
  preact__WEBPACK_IMPORTED_MODULE_0__.options.__e = function (n, e, t, o) {
    if (e && e.__c && "function" == typeof n.then) {
      var r = n;
      n = new Error("Missing Suspense. The throwing component was: " + a(e));
      for (var i = e; i; i = i.__) if (i.__c && i.__c.__c) {
        n = r;
        break;
      }
      if (n instanceof Error) throw n;
    }
    try {
      (o = o || {}).componentStack = f(e), u(n, e, t, o), "function" != typeof n.then && setTimeout(function () {
        throw n;
      });
    } catch (n) {
      throw n;
    }
  }, preact__WEBPACK_IMPORTED_MODULE_0__.options.__ = function (n, e) {
    if (!e) throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");
    var t;
    switch (e.nodeType) {
      case 1:
      case 11:
      case 9:
        t = !0;
        break;
      default:
        t = !1;
    }
    if (!t) {
      var o = a(n);
      throw new Error("Expected a valid HTML node as a second argument to render.\tReceived " + e + " instead: render(<" + o + " />, " + e + ");");
    }
    h && h(n, e);
  }, preact__WEBPACK_IMPORTED_MODULE_0__.options.__b = function (e) {
    var r = e.type,
      i = d(e.__);
    if (n = !0, void 0 === r) throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + y(e) + "\n\n" + f(e));
    if (null != r && "object" == typeof r) {
      if (void 0 !== r.__k && void 0 !== r.__e) throw new Error("Invalid type passed to createElement(): " + r + "\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My" + a(e) + " = " + y(r) + ";\n  let vnode = <My" + a(e) + " />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n" + f(e));
      throw new Error("Invalid type passed to createElement(): " + (Array.isArray(r) ? "array" : r));
    }
    if ("thead" !== r && "tfoot" !== r && "tbody" !== r || "table" === i.type ? "tr" === r && "thead" !== i.type && "tfoot" !== i.type && "tbody" !== i.type && "table" !== i.type ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent." + y(e) + "\n\n" + f(e)) : "td" === r && "tr" !== i.type ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + y(e) + "\n\n" + f(e)) : "th" === r && "tr" !== i.type && console.error("Improper nesting of table. Your <th> should have a <tr>." + y(e) + "\n\n" + f(e)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + y(e) + "\n\n" + f(e)), void 0 !== e.ref && "function" != typeof e.ref && "object" != typeof e.ref && !("$$typeof" in e)) throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got [' + typeof e.ref + "] instead\n" + y(e) + "\n\n" + f(e));
    if ("string" == typeof e.type) for (var c in e.props) if ("o" === c[0] && "n" === c[1] && "function" != typeof e.props[c] && null != e.props[c]) throw new Error("Component's \"" + c + '" property should be a function, but got [' + typeof e.props[c] + "] instead\n" + y(e) + "\n\n" + f(e));
    if ("function" == typeof e.type && e.type.propTypes) {
      if ("Lazy" === e.type.displayName && m && !m.lazyPropTypes.has(e.type)) {
        var s = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";
        try {
          var u = e.type();
          m.lazyPropTypes.set(e.type, !0), console.warn(s + "Component wrapped in lazy() is " + a(u));
        } catch (n) {
          console.warn(s + "We will log the wrapped component's name once it is loaded.");
        }
      }
      var l = e.props;
      e.type.__f && delete (l = function (n, e) {
        for (var t in e) n[t] = e[t];
        return n;
      }({}, l)).ref, function (n, e, t, r, a) {
        Object.keys(n).forEach(function (t) {
          var i;
          try {
            i = n[t](e, t, r, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (n) {
            i = n;
          }
          i && !(i.message in o) && (o[i.message] = !0, console.error("Failed prop type: " + i.message + (a && "\n" + a() || "")));
        });
      }(e.type.propTypes, l, 0, a(e), function () {
        return f(e);
      });
    }
    t && t(e);
  }, preact__WEBPACK_IMPORTED_MODULE_0__.options.__h = function (e, t, o) {
    if (!e || !n) throw new Error("Hook can only be invoked from render methods.");
    v && v(e, t, o);
  };
  var w = function (n, e) {
      return {
        get: function () {
          var t = "get" + n + e;
          b && b.indexOf(t) < 0 && (b.push(t), console.warn("getting vnode." + n + " is deprecated, " + e));
        },
        set: function () {
          var t = "set" + n + e;
          b && b.indexOf(t) < 0 && (b.push(t), console.warn("setting vnode." + n + " is not allowed, " + e));
        }
      };
    },
    g = {
      nodeName: w("nodeName", "use vnode.type"),
      attributes: w("attributes", "use vnode.props"),
      children: w("children", "use vnode.props.children")
    },
    E = Object.create({}, g);
  preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode = function (n) {
    var e = n.props;
    if (null !== n.type && null != e && ("__source" in e || "__self" in e)) {
      var t = n.props = {};
      for (var o in e) {
        var r = e[o];
        "__source" === o ? n.__source = r : "__self" === o ? n.__self = r : t[o] = r;
      }
    }
    n.__proto__ = E, s && s(n);
  }, preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed = function (e) {
    if (e.__k && e.__k.forEach(function (n) {
      if (n && void 0 === n.type) {
        delete n.__, delete n.__b;
        var t = Object.keys(n).join(",");
        throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + t + "}.\n\n" + f(e));
      }
    }), n = !1, r && r(e), null != e.__k) for (var t = [], o = 0; o < e.__k.length; o++) {
      var a = e.__k[o];
      if (a && null != a.key) {
        var i = a.key;
        if (-1 !== t.indexOf(i)) {
          console.error('Following component has two or more children with the same key attribute: "' + i + '". This may cause glitches and misbehavior in rendering process. Component: \n\n' + y(e) + "\n\n" + f(e));
          break;
        }
        t.push(i);
      }
    }
  };
}();


/***/ }),

/***/ "./node_modules/preact/devtools/dist/devtools.module.js":
/*!**************************************************************!*\
  !*** ./node_modules/preact/devtools/dist/devtools.module.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addHookName": function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");

function t(o, e) {
  return preact__WEBPACK_IMPORTED_MODULE_0__.options.__a && preact__WEBPACK_IMPORTED_MODULE_0__.options.__a(e), o;
}
"undefined" != typeof window && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.11.3", preact__WEBPACK_IMPORTED_MODULE_0__.options, {
  Fragment: preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,
  Component: preact__WEBPACK_IMPORTED_MODULE_0__.Component
});


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": function() { return /* binding */ d; },
/* harmony export */   "Fragment": function() { return /* binding */ p; },
/* harmony export */   "cloneElement": function() { return /* binding */ q; },
/* harmony export */   "createContext": function() { return /* binding */ B; },
/* harmony export */   "createElement": function() { return /* binding */ h; },
/* harmony export */   "createRef": function() { return /* binding */ y; },
/* harmony export */   "h": function() { return /* binding */ h; },
/* harmony export */   "hydrate": function() { return /* binding */ S; },
/* harmony export */   "isValidElement": function() { return /* binding */ i; },
/* harmony export */   "options": function() { return /* binding */ l; },
/* harmony export */   "render": function() { return /* binding */ P; },
/* harmony export */   "toChildArray": function() { return /* binding */ x; }
/* harmony export */ });
var n,
  l,
  u,
  i,
  t,
  o,
  r,
  f = {},
  e = [],
  c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s(n, l) {
  for (var u in l) n[u] = l[u];
  return n;
}
function a(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}
function h(l, u, i) {
  var t,
    o,
    r,
    f = {};
  for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
  return v(l, f, t, o, null);
}
function v(n, i, t, o, r) {
  var f = {
    type: n,
    props: i,
    key: t,
    ref: o,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == r ? ++u : r
  };
  return null == r && null != l.vnode && l.vnode(f), f;
}
function y() {
  return {
    current: null
  };
}
function p(n) {
  return n.children;
}
function d(n, l) {
  this.props = n, this.context = l;
}
function _(n, l) {
  if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
  return "function" == typeof n.type ? _(n) : null;
}
function k(n) {
  var l, u;
  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }
    return k(n);
  }
}
function b(n) {
  (!n.__d && (n.__d = !0) && t.push(n) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
}
function g() {
  for (var n; g.__r = t.length;) n = t.sort(function (n, l) {
    return n.__v.__b - l.__v.__b;
  }), t = [], n.some(function (n) {
    var l, u, i, t, o, r;
    n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = s({}, t)).__v = t.__v + 1, j(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? _(t) : o, t.__h), z(u, t), t.__e != o && k(t)));
  });
}
function w(n, l, u, i, t, o, r, c, s, a) {
  var h,
    y,
    d,
    k,
    b,
    g,
    w,
    x = i && i.__k || e,
    C = x.length;
  for (u.__k = [], h = 0; h < l.length; h++) if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k || "bigint" == typeof k ? v(null, k, null, null, k) : Array.isArray(k) ? v(p, {
    children: k
  }, null, null, null) : k.__b > 0 ? v(k.type, k.props, k.key, k.ref ? k.ref : null, k.__v) : k)) {
    if (k.__ = u, k.__b = u.__b + 1, null === (d = x[h]) || d && k.key == d.key && k.type === d.type) x[h] = void 0;else for (y = 0; y < C; y++) {
      if ((d = x[y]) && k.key == d.key && k.type === d.type) {
        x[y] = void 0;
        break;
      }
      d = null;
    }
    j(n, k, d = d || f, t, o, r, c, s, a), b = k.__e, (y = k.ref) && d.ref != y && (w || (w = []), d.ref && w.push(d.ref, null, k), w.push(y, k.__c || b, k)), null != b ? (null == g && (g = b), "function" == typeof k.type && k.__k === d.__k ? k.__d = s = m(k, s, n) : s = A(n, k, d, x, b, s), "function" == typeof u.type && (u.__d = s)) : s && d.__e == s && s.parentNode != n && (s = _(d));
  }
  for (u.__e = g, h = C; h--;) null != x[h] && N(x[h], x[h]);
  if (w) for (h = 0; h < w.length; h++) M(w[h], w[++h], w[++h]);
}
function m(n, l, u) {
  for (var i, t = n.__k, o = 0; t && o < t.length; o++) (i = t[o]) && (i.__ = n, l = "function" == typeof i.type ? m(i, l, u) : A(u, i, i, t, i.__e, l));
  return l;
}
function x(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    x(n, l);
  }) : l.push(n)), l;
}
function A(n, l, u, i, t, o) {
  var r, f, e;
  if (void 0 !== l.__d) r = l.__d, l.__d = void 0;else if (null == u || t != o || null == t.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(t), r = null;else {
    for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 1) if (f == t) break n;
    n.insertBefore(t, o), r = o;
  }
  return void 0 !== r ? r : t.nextSibling;
}
function C(n, l, u, i, t) {
  var o;
  for (o in u) "children" === o || "key" === o || o in l || H(n, o, null, u[o], i);
  for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || H(n, o, l[o], u[o], i);
}
function $(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || c.test(l) ? u : u + "px";
}
function H(n, l, u, i, t) {
  var o;
  n: if ("style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || $(n.style, l, "");
      if (u) for (l in u) i && u[l] === i[l] || $(n.style, l, u[l]);
    }
  } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? i || n.addEventListener(l, o ? T : I, o) : n.removeEventListener(l, o ? T : I, o);else if ("dangerouslySetInnerHTML" !== l) {
    if (t) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null == u || !1 === u && -1 == l.indexOf("-") ? n.removeAttribute(l) : n.setAttribute(l, u));
  }
}
function I(n) {
  this.l[n.type + !1](l.event ? l.event(n) : n);
}
function T(n) {
  this.l[n.type + !0](l.event ? l.event(n) : n);
}
function j(n, u, i, t, o, r, f, e, c) {
  var a,
    h,
    v,
    y,
    _,
    k,
    b,
    g,
    m,
    x,
    A,
    C,
    $,
    H,
    I,
    T = u.type;
  if (void 0 !== u.constructor) return null;
  null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (a = l.__b) && a(u);
  try {
    n: if ("function" == typeof T) {
      if (g = u.props, m = (a = T.contextType) && t[a.__c], x = a ? m ? m.props.value : a.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in T && T.prototype.render ? u.__c = h = new T(g, x) : (u.__c = h = new d(g, x), h.constructor = T, h.render = O), m && m.sub(h), h.props = g, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = [], h._sb = []), null == h.__s && (h.__s = h.state), null != T.getDerivedStateFromProps && (h.__s == h.state && (h.__s = s({}, h.__s)), s(h.__s, T.getDerivedStateFromProps(g, h.__s))), y = h.props, _ = h.state, v) null == T.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
        if (null == T.getDerivedStateFromProps && g !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(g, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(g, h.__s, x) || u.__v === i.__v) {
          for (h.props = g, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
            n && (n.__ = u);
          }), A = 0; A < h._sb.length; A++) h.__h.push(h._sb[A]);
          h._sb = [], h.__h.length && f.push(h);
          break n;
        }
        null != h.componentWillUpdate && h.componentWillUpdate(g, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () {
          h.componentDidUpdate(y, _, k);
        });
      }
      if (h.context = x, h.props = g, h.__v = u, h.__P = n, C = l.__r, $ = 0, "prototype" in T && T.prototype.render) {
        for (h.state = h.__s, h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++) h.__h.push(h._sb[H]);
        h._sb = [];
      } else do {
        h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
      } while (h.__d && ++$ < 25);
      h.state = h.__s, null != h.getChildContext && (t = s(s({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, _)), I = null != a && a.type === p && null == a.key ? a.props.children : a, w(n, Array.isArray(I) ? I : [I], u, i, t, o, r, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
    } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L(i.__e, u, i, t, o, r, f, c);
    (a = l.diffed) && a(u);
  } catch (n) {
    u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l.__e(n, u, i);
  }
}
function z(n, u) {
  l.__c && l.__c(u, n), n.some(function (u) {
    try {
      n = u.__h, u.__h = [], n.some(function (n) {
        n.call(u);
      });
    } catch (n) {
      l.__e(n, u.__v);
    }
  });
}
function L(l, u, i, t, o, r, e, c) {
  var s,
    h,
    v,
    y = i.props,
    p = u.props,
    d = u.type,
    k = 0;
  if ("svg" === d && (o = !0), null != r) for (; k < r.length; k++) if ((s = r[k]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
    l = s, r[k] = null;
    break;
  }
  if (null == l) {
    if (null === d) return document.createTextNode(p);
    l = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), r = null, c = !1;
  }
  if (null === d) y === p || c && l.data === p || (l.data = p);else {
    if (r = r && n.call(l.childNodes), h = (y = i.props || f).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
      if (null != r) for (y = {}, k = 0; k < l.attributes.length; k++) y[l.attributes[k].name] = l.attributes[k].value;
      (v || h) && (v && (h && v.__html == h.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
    }
    if (C(l, p, y, o, c), v) u.__k = [];else if (k = u.props.children, w(l, Array.isArray(k) ? k : [k], u, i, t, o && "foreignObject" !== d, r, e, r ? r[0] : i.__k && _(i, 0), c), null != r) for (k = r.length; k--;) null != r[k] && a(r[k]);
    c || ("value" in p && void 0 !== (k = p.value) && (k !== l.value || "progress" === d && !k || "option" === d && k !== y.value) && H(l, "value", k, y.value, !1), "checked" in p && void 0 !== (k = p.checked) && k !== l.checked && H(l, "checked", k, y.checked, !1));
  }
  return l;
}
function M(n, u, i) {
  try {
    "function" == typeof n ? n(u) : n.current = u;
  } catch (n) {
    l.__e(n, i);
  }
}
function N(n, u, i) {
  var t, o;
  if (l.unmount && l.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M(t, null, u)), null != (t = n.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (n) {
      l.__e(n, u);
    }
    t.base = t.__P = null, n.__c = void 0;
  }
  if (t = n.__k) for (o = 0; o < t.length; o++) t[o] && N(t[o], u, i || "function" != typeof n.type);
  i || null == n.__e || a(n.__e), n.__ = n.__e = n.__d = void 0;
}
function O(n, l, u) {
  return this.constructor(n, u);
}
function P(u, i, t) {
  var o, r, e;
  l.__ && l.__(u, i), r = (o = "function" == typeof t) ? null : t && t.__k || i.__k, e = [], j(i, u = (!o && t || i).__k = h(p, null, [u]), r || f, f, void 0 !== i.ownerSVGElement, !o && t ? [t] : r ? null : i.firstChild ? n.call(i.childNodes) : null, e, !o && t ? t : r ? r.__e : i.firstChild, o), z(e, u);
}
function S(n, l) {
  P(n, l, S);
}
function q(l, u, i) {
  var t,
    o,
    r,
    f = s({}, l.props);
  for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
  return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), v(l.type, f, t || l.key, o || l.ref, null);
}
function B(n, l) {
  var u = {
    __c: l = "__cC" + r++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var u, i;
      return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
        return i;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(b);
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;
        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}
n = e.slice, l = {
  __e: function (n, l, u, i) {
    for (var t, o, r; l = l.__;) if ((t = l.__c) && !t.__) try {
      if ((o = t.constructor) && null != o.getDerivedStateFromError && (t.setState(o.getDerivedStateFromError(n)), r = t.__d), null != t.componentDidCatch && (t.componentDidCatch(n, i || {}), r = t.__d), r) return t.__E = t;
    } catch (l) {
      n = l;
    }
    throw n;
  }
}, u = 0, i = function (n) {
  return null != n && void 0 === n.constructor;
}, d.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(s({}, u), this.props)), n && s(u, n), null != n && this.__v && (l && this._sb.push(l), b(this));
}, d.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), b(this));
}, d.prototype.render = p, t = [], g.__r = 0, r = 0;


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCallback": function() { return /* binding */ T; },
/* harmony export */   "useContext": function() { return /* binding */ q; },
/* harmony export */   "useDebugValue": function() { return /* binding */ x; },
/* harmony export */   "useEffect": function() { return /* binding */ h; },
/* harmony export */   "useErrorBoundary": function() { return /* binding */ P; },
/* harmony export */   "useId": function() { return /* binding */ V; },
/* harmony export */   "useImperativeHandle": function() { return /* binding */ A; },
/* harmony export */   "useLayoutEffect": function() { return /* binding */ s; },
/* harmony export */   "useMemo": function() { return /* binding */ F; },
/* harmony export */   "useReducer": function() { return /* binding */ y; },
/* harmony export */   "useRef": function() { return /* binding */ _; },
/* harmony export */   "useState": function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");

var t,
  r,
  u,
  i,
  o = 0,
  f = [],
  c = [],
  e = preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,
  a = preact__WEBPACK_IMPORTED_MODULE_0__.options.__r,
  v = preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,
  l = preact__WEBPACK_IMPORTED_MODULE_0__.options.__c,
  m = preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;
function d(t, u) {
  preact__WEBPACK_IMPORTED_MODULE_0__.options.__h && preact__WEBPACK_IMPORTED_MODULE_0__.options.__h(r, t, o || u), o = 0;
  var i = r.__H || (r.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({
    __V: c
  }), i.__[t];
}
function p(n) {
  return o = 1, y(B, n);
}
function y(n, u, i) {
  var o = d(t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = r, !r.u)) {
    r.u = !0;
    var f = r.shouldComponentUpdate;
    r.shouldComponentUpdate = function (n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !f || f.call(this, n, t, r);
      var i = !1;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), !(!i && o.__c.props === n) && (!f || f.call(this, n, t, r));
    };
  }
  return o.__N || o.__;
}
function h(u, i) {
  var o = d(t++, 3);
  !preact__WEBPACK_IMPORTED_MODULE_0__.options.__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__H.__h.push(o));
}
function s(u, i) {
  var o = d(t++, 4);
  !preact__WEBPACK_IMPORTED_MODULE_0__.options.__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__h.push(o));
}
function _(n) {
  return o = 5, F(function () {
    return {
      current: n
    };
  }, []);
}
function A(n, t, r) {
  o = 6, s(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == r ? r : r.concat(n));
}
function F(n, r) {
  var u = d(t++, 7);
  return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function T(n, t) {
  return o = 8, F(function () {
    return n;
  }, t);
}
function q(n) {
  var u = r.context[n.__c],
    i = d(t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function x(t, r) {
  preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue && preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue(r ? r(t) : t);
}
function P(n) {
  var u = d(t++, 10),
    i = p();
  return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function V() {
  var n = d(t++, 11);
  if (!n.__) {
    for (var u = r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function b() {
  for (var t; t = f.shift();) if (t.__P && t.__H) try {
    t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
  } catch (r) {
    t.__H.__h = [], preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r, t.__v);
  }
}
preact__WEBPACK_IMPORTED_MODULE_0__.options.__b = function (n) {
  r = null, e && e(n);
}, preact__WEBPACK_IMPORTED_MODULE_0__.options.__r = function (n) {
  a && a(n), t = 0;
  var i = (r = n.__c).__H;
  i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
  })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [])), u = r;
}, preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed = function (t) {
  v && v(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame || ((i = preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
  })), u = r = null;
}, preact__WEBPACK_IMPORTED_MODULE_0__.options.__c = function (t, r) {
  r.some(function (t) {
    try {
      t.__h.forEach(k), t.__h = t.__h.filter(function (n) {
        return !n.__ || w(n);
      });
    } catch (u) {
      r.some(function (n) {
        n.__h && (n.__h = []);
      }), r = [], preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(u, t.__v);
    }
  }), l && l(t, r);
}, preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount = function (t) {
  m && m(t);
  var r,
    u = t.__c;
  u && u.__H && (u.__H.__.forEach(function (n) {
    try {
      k(n);
    } catch (n) {
      r = n;
    }
  }), u.__H = void 0, r && preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r, u.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
  var t,
    r = function () {
      clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  g && (t = requestAnimationFrame(r));
}
function k(n) {
  var t = r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function w(n) {
  var t = r;
  n.__c = n.__(), r = t;
}
function z(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function B(n, t) {
  return "function" == typeof t ? t(n) : t;
}


/***/ }),

/***/ "./scripts/button/dataDefault.js":
/*!***************************************!*\
  !*** ./scripts/button/dataDefault.js ***!
  \***************************************/
/***/ (function(module) {

var data = {
  target_id: 21999999,
  clientData: {
    company: {
      id: 24433,
      title: "БФ «Дорога Жизни»",
      mission: "Фонд организует помощь детям-сиротам и детям, оставшимся без попечения родителей а также сиротам-инвалидам в отдаленных регионах России, где детские учреждения имеют ограниченные возможности по улучшению состояния здоровья детей.",
      url_reports: "https://doroga-zhizni.org/reports",
      url_ustav_docs: "https://doroga-zhizni.org/about",
      url_offer: null,
      qrPaymentRequisites: "ST00012|Name=БФ «Русфонд»|PersonalAcc=40703810300001400860|BankName=АО \"РАЙФФАЙЗЕНБАНК\"|BIC=044525700|CorrespAcc=30101810200000000700|Purpose={%purpose%}|Sum={%sum%}|PayeeINN=7743016733|KPP=771401001",
      logo: {
        urlAbs: "https://file.dev.donation.ru:1443/uploads/funds/16190/1311ca0caa8316818c6d92e2559c0985_220523.png"
      },
      companyAgreementActual: {
        company_title: "БФ «Дорога Жизни»",
        address: "г Москва, Ленинградский пр-кт, д 68 стр 2, пом III комн 88",
        address_fact: "125080, г. Москва, ул. Врубеля, д.4, стр.1",
        address_post: "г. Москва, ул. Врубеля, д.4, стр.1",
        inn: "7743016733",
        bank_name: "АО «РАЙФФАЙЗЕНБАНК»",
        bank_bik: "044525700",
        bank_corresp_account: "30101810200000000700",
        bank_account_num: "40703810300001400860",
        bank_kpp: "771401001"
      }
    },
    project: {
      paymentMethods: ['card', 'mobile'],
      title: "Название проекта",
      operators: [
      //СБП (=62)
      {
        //operator_id: 62
      }]
    }
  },
  data: {
    btnText: "ПОМОЧЬ",
    css: null,
    btnStyle: {
      color: "rgb(255,255,255)",
      backColor: "#bb0a62",
      hoverColor: "#8f0a4c",
      size: 16,
      hoverVariant: 2
    }
  }
};
module.exports = data;

/***/ }),

/***/ "./build/scripts/button/style/styles.css.mjs":
/*!***************************************************!*\
  !*** ./build/scripts/button/style/styles.css.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n#d7_modal_overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.75);\n  z-index: 99999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Rubik\", sans-serif;\n  line-height: 1.2;\n  font-weight: normal;\n}\n#d7_modal_overlay .modal-wrapper {\n  position: relative;\n  max-width: 100%;\n}\n#d7_modal_overlay .close-container {\n  width: 24px;\n  height: 24px;\n  top: -24px;\n  right: 0;\n  border-radius: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n  position: absolute;\n}\n@media screen and (min-width: 900px) {\n  #d7_modal_overlay .close-container {\n    top: 0;\n    right: -24px;\n  }\n}\n#d7_modal_overlay .close-container .close-icon {\n  height: 12px;\n  width: 12px;\n  display: block;\n  margin: 5px;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIj48cGF0aCBmaWxsPSIjODY5MzlFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03IDZsNSA1LTEgMS01LTUtNSA1LTEtMSA1LTUtNS01IDEtMSA1IDUgNS01IDEgMS01IDV6Ii8+PC9zdmc+);\n  cursor: pointer;\n}\n#d7_modal_overlay .modal-container {\n  background: white;\n  border-radius: 10px;\n  max-height: 90vh;\n  max-height: 90dvh;\n  overflow: auto;\n  flex: 1;\n  width: 100vw;\n  max-width: 400px;\n}\n@media screen and (min-width: 802px) {\n  #d7_modal_overlay .modal-container {\n    max-width: 830px;\n  }\n}\n@media screen and (min-width: 1110px) {\n  #d7_modal_overlay .modal-container {\n    max-width: 870px;\n  }\n}\n#d7_modal_overlay .modal-container .modal-content {\n  max-width: 100%;\n  padding: 0 10px;\n  min-width: 200px;\n  min-height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media only screen and (min-width: 400px) {\n  #d7_modal_overlay .modal-container .modal-content {\n    padding: 0 20px;\n  }\n}\n#d7_modal_overlay .modal-container .modal-content #widget-form-container {\n  max-width: 100%;\n  width: 100%;\n}\n\n.btn {\n  font-weight: bold;\n  display: inline-block;\n  padding: calc(var(--d7button-btn-size) / 2) var(--d7button-btn-size);\n  color: var(--d7button-btn-color);\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  cursor: pointer;\n  user-select: none;\n  border-radius: calc(var(--d7button-btn-size) * var(--d7button-btn-radius));\n  background: var(--d7button-btn-back-color);\n  font-size: var(--d7button-btn-size);\n  /*white-space: nowrap;\n  transition: filter .3s;\n  &:hover {\n      filter: brightness(.9);\n  }*/\n}\n\n@media all and (max-width: 450px), all and (max-height: 570px) {\n  .btn-mobile-sm {\n    font-size: 14px !important;\n    padding: 7px 14px !important;\n    border-radius: calc(var(--d7button-btn-size) * var(--d7button-btn-radius) / 2);\n  }\n}\n\n/*\u0414\u043B\u044F \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438 (sticky-button)*/\n@media all and (max-width: 450px), all and (max-height: 570px) {\n  .btn-fixed .btn-mobile-sm {\n    padding: 14px 7px !important;\n  }\n}\n\n.btn1, .btn2, .btn3, .btn4, .btn5, .btn6, .btn7, .btn8 {\n  clear: both;\n  position: relative;\n  text-decoration: none;\n  transition: all 0.4s ease 0s;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.btn5 {\n  overflow: unset;\n}\n\n/* \u0437\u0430\u043B\u0438\u0432\u043A\u0430 - 1 */\n.btn1:hover {\n  background: var(--d7button-btn-hover-color) none repeat scroll 0 0;\n}\n\n/* \u0437\u0430\u043B\u0438\u0432\u043A\u0430 \u0441\u0432\u0435\u0440\u0445\u0443 - 2 */\n.btn2::before {\n  content: \"\";\n  height: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: all 0.4s ease 0s;\n  z-index: -1;\n}\n\n.btn2:hover::before {\n  background: var(--d7button-btn-hover-color) none repeat scroll 0 0;\n  height: 100%;\n}\n\n/* \u0437\u0430\u043B\u0438\u0432\u043A\u0430 \u0441\u043B\u0435\u0432\u0430 - 3 */\n.btn3::before {\n  content: \"\";\n  width: 0;\n  left: 0;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  transition: all 0.4s ease 0s;\n  z-index: -1;\n}\n\n.btn3:hover::before {\n  background: var(--d7button-btn-hover-color) none repeat scroll 0 0;\n  width: 100%;\n}\n\n/* \u043F\u043E\u0434\u0447\u0451\u0440\u043A\u0438\u0432\u0430\u043D\u0438\u0435 - 4 */\n.btn4::before {\n  content: \"\";\n  height: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  transition: all 0.4s ease 0s;\n}\n\n.btn4:hover::before {\n  background: var(--d7button-btn-hover-color) none repeat scroll 0 0;\n  height: 15%;\n  z-index: -1;\n}\n\n/* \u0444\u043E\u043A\u0443\u0441\u0438\u0440\u043E\u0432\u043A\u0430 - 5 */\n.btn5::before {\n  background: var(--d7button-btn-hover-color) none repeat scroll 0 0;\n  box-sizing: content-box;\n  content: \" \";\n  height: 100%;\n  left: -1px;\n  opacity: 0;\n  padding: 1px;\n  pointer-events: none;\n  position: absolute;\n  top: -1px;\n  transform: scale(1.2);\n  transition: transform 0.2s ease 0s, opacity 0.3s ease 0s;\n  width: 100%;\n  z-index: -1;\n  border-radius: calc(var(--d7button-btn-size) * var(--d7button-btn-radius));\n}\n\n.btn5:hover::before {\n  opacity: 1;\n  transform: scale(1);\n}\n\n/* \u0434\u0438\u0430\u0433\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0437\u0430\u043B\u0438\u0432\u043A\u0430 - 6 */\n.btn6 {\n  overflow: hidden;\n}\n\n.btn6::after {\n  border-color: transparent var(--d7button-btn-hover-color) transparent transparent;\n  right: 0;\n  top: 0;\n}\n\n.btn6::before {\n  border-color: transparent transparent transparent var(--d7button-btn-hover-color);\n  bottom: 0;\n  left: 0;\n}\n\n.btn6::before, .btn6::after {\n  border-style: solid;\n  border-width: 0;\n  content: \"\";\n  height: 0;\n  position: absolute;\n  transition: all 0.4s ease 0s;\n  width: 0;\n  z-index: -1;\n}\n\n.btn6:hover::after {\n  border-width: 0 500px 500px 0;\n}\n\n.btn6:hover::before {\n  border-width: 500px 0 0 500px;\n}\n\n/* \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441-\u0431\u0430\u0440 - 7 */\n.btn7::before {\n  content: \"\";\n  height: 15%;\n  left: 0;\n  position: absolute;\n  bottom: 0;\n  width: 0;\n  transition: all 0.4s ease 0s;\n}\n\n.btn7:hover::before {\n  background: var(--d7button-btn-hover-color) none repeat scroll 0 0;\n  width: 100%;\n  z-index: -1;\n}\n\n/* \u043F\u0440\u043E\u0431\u043B\u0435\u0441\u043A - 8 */\n.btn8 {\n  overflow: hidden;\n  display: inline-block;\n}\n\n.btn8::before {\n  background: rgba(0, 0, 0, 0) linear-gradient(to right, var(--d7button-btn-back-color) 0px, var(--d7button-btn-hover-color) 100%) repeat scroll 0 0;\n  content: \"\";\n  display: block;\n  height: 100%;\n  left: -75%;\n  position: absolute;\n  top: 0;\n  transform: skewX(-25deg);\n  width: 50%;\n  z-index: 2;\n  box-sizing: border-box;\n}\n\n.btn8:hover::before {\n  animation: 0.75s ease 0s normal none 1 running shine;\n}\n\n@keyframes shine {\n  100% {\n    left: 125%;\n  }\n}\n@keyframes shine-vertical {\n  100% {\n    left: 1000%;\n  }\n}\n.btn-fixed {\n  /* \u043F\u043E\u0434\u0447\u0451\u0440\u043A\u0438\u0432\u0430\u043D\u0438\u0435 - 4 */\n  /* \u0414\u0438\u0430\u0433\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0437\u0430\u043B\u0438\u0432\u043A\u0430 - 6 */\n  /* \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441-\u0431\u0430\u0440 - 7 */\n  /* \u043F\u0440\u043E\u0431\u043B\u0435\u0441\u043A - 7 */\n}\n.btn-fixed .text-transformed .icon-rotate {\n  transform: rotate(90deg);\n  display: inline-block;\n}\n.btn-fixed .btn4::before {\n  right: 100%;\n  height: 100%;\n}\n.btn-fixed .btn4:hover::before {\n  right: 86%;\n}\n.btn-fixed .btn6:hover::after {\n  border-width: 0 500px 500px 0;\n}\n.btn-fixed .btn6:hover::before {\n  border-width: 500px 0 0 500px;\n}\n.btn-fixed .btn7::before {\n  width: 14%;\n  top: 0;\n}\n.btn-fixed .btn7:hover::before {\n  height: 100%;\n}\n.btn-fixed .btn8::before {\n  width: 200%;\n  left: -1000%;\n  transform: skewX(135deg);\n}\n.btn-fixed .btn8:hover::before {\n  animation: 1.25s ease 0s normal none 1 running shine-vertical;\n}\n\n.theme_xbox .pace_activity, .theme_xbox_lg .pace_activity, .theme_xbox_sm .pace_activity {\n  -webkit-animation: rotation 1.5s ease-in-out infinite;\n  animation: rotation 1.5s ease-in-out infinite;\n  margin: 0 auto;\n  width: 38px;\n  height: 38px;\n}\n\n.theme_xbox .pace_activity, .theme_xbox .pace_activity:after, .theme_xbox .pace_activity:before, .theme_xbox_lg .pace_activity, .theme_xbox_lg .pace_activity:after, .theme_xbox_lg .pace_activity:before, .theme_xbox_sm .pace_activity, .theme_xbox_sm .pace_activity:after, .theme_xbox_sm .pace_activity:before {\n  border: 2px solid transparent;\n  border-top-color: var(--d7button-loader-color);\n  border-radius: 50%;\n}\n\n.theme_xbox .pace_activity:before, .theme_xbox_lg .pace_activity:before, .theme_xbox_sm .pace_activity:before {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  -webkit-animation: rotation ease-in-out 2s infinite;\n  animation: rotation ease-in-out 2s infinite;\n}\n\n.theme_xbox .pace_activity:after, .theme_xbox_lg .pace_activity:after, .theme_xbox_sm .pace_activity:after {\n  content: \"\";\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  right: 12px;\n  bottom: 12px;\n  -webkit-animation: rotation ease-in-out 1s infinite;\n  animation: rotation ease-in-out 1s infinite;\n}\n\n.theme_xbox_with_text .pace_activity {\n  margin-top: -10px;\n}\n\n.theme_xbox_with_text span {\n  display: block;\n  margin-top: 10px;\n  color: #fff;\n  white-space: nowrap;\n}\n\n.theme_xbox_sm .pace_activity, .theme_xbox_sm .pace_activity:after, .theme_xbox_sm .pace_activity:before {\n  border-width: 1px;\n}\n\n.theme_xbox_lg .pace_activity, .theme_xbox_lg .pace_activity:after, .theme_xbox_lg .pace_activity:before {\n  border-width: 3px;\n}\n\n.theme_xbox, .theme_xbox_lg, .theme_xbox_sm {\n  position: initial;\n  top: initial;\n  left: initial;\n  right: initial;\n}\n\n@-webkit-keyframes rotation {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes rotation {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes rotation_reverse {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(-360deg);\n    transform: rotate(-360deg);\n  }\n}\n@keyframes rotation_reverse {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(-360deg);\n    transform: rotate(-360deg);\n  }\n}\n.btn-fixed, .btn-absolute {\n  position: fixed;\n  top: 50%;\n  z-index: 99991;\n}\n.btn-fixed.sticky-right, .btn-absolute.sticky-right {\n  right: 0;\n  writing-mode: vertical-lr;\n  transform: scale(-1, -1) translate(0, 50%);\n}\n.btn-fixed.sticky-right .btn, .btn-absolute.sticky-right .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  padding: var(--d7button-btn-size) calc(var(--d7button-btn-size) / 2);\n}\n.btn-fixed.sticky-right .btn:before, .btn-fixed.sticky-right .btn:after, .btn-absolute.sticky-right .btn:before, .btn-absolute.sticky-right .btn:after {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-fixed.sticky-left, .btn-absolute.sticky-left {\n  left: 0;\n  writing-mode: vertical-lr;\n  transform: scale(-1, -1) translate(0, 50%);\n}\n.btn-fixed.sticky-left .btn, .btn-absolute.sticky-left .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  padding: var(--d7button-btn-size) calc(var(--d7button-btn-size) / 2);\n}\n.btn-fixed.sticky-left .btn:before, .btn-fixed.sticky-left .btn:after, .btn-absolute.sticky-left .btn:before, .btn-absolute.sticky-left .btn:after {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.btn-absolute {\n  position: absolute;\n}\n\n.button__item {\n  position: relative;\n  font-family: \"Rubik\", sans-serif;\n  line-height: 1.2;\n  font-weight: normal;\n  font-size: 14px;\n}\n.button__item .loader {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.75);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1005;\n}\n\n.d-none {\n  display: none !important;\n}\n\n.text-center {\n  text-align: center;\n}\n");

/***/ }),

/***/ "./build/scripts/infoBlock/assets/jpg.svg.mjs":
/*!****************************************************!*\
  !*** ./build/scripts/infoBlock/assets/jpg.svg.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIFVwbG9hZGVk\nIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVy\nIFRvb2xzIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4i\nICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3Zn\nIGhlaWdodD0iODAwcHgiIHdpZHRoPSI4MDBweCIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4\nbWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgdmlld0JveD0iMCAwIDU2IDU2\nIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRTlFOUUwOyIg\nZD0iTTM2Ljk4NSwwSDcuOTYzQzcuMTU1LDAsNi41LDAuNjU1LDYuNSwxLjkyNlY1NWMwLDAuMzQ1\nLDAuNjU1LDEsMS40NjMsMWg0MC4wNzQKCQljMC44MDgsMCwxLjQ2My0wLjY1NSwxLjQ2My0xVjEy\nLjk3OGMwLTAuNjk2LTAuMDkzLTAuOTItMC4yNTctMS4wODVMMzcuNjA3LDAuMjU3QzM3LjQ0Miww\nLjA5MywzNy4yMTgsMCwzNi45ODUsMHoiLz4KICAgIDxwb2x5Z29uIHN0eWxlPSJmaWxsOiNEOUQ3\nQ0E7IiBwb2ludHM9IjM3LjUsMC4xNTEgMzcuNSwxMiA0OS4zNDksMTIgCSIvPgogICAgPGNpcmNs\nZSBzdHlsZT0iZmlsbDojRjNENTVCOyIgY3g9IjE4LjkzMSIgY3k9IjE0LjQzMSIgcj0iNC41Njki\nLz4KICAgIDxwb2x5Z29uIHN0eWxlPSJmaWxsOiMyNkI5OUE7IiBwb2ludHM9IjYuNSwzOSAxNy41\nLDM5IDQ5LjUsMzkgNDkuNSwyOCAzOS41LDE4LjUgMjksMzAgMjMuNTE3LDI0LjUxNyAJIi8+CiAg\nICA8cGF0aCBzdHlsZT0iZmlsbDojMTRBMDg1OyIKICAgICAgICAgIGQ9Ik00OC4wMzcsNTZINy45\nNjNDNy4xNTUsNTYsNi41LDU1LjM0NSw2LjUsNTQuNTM3VjM5aDQzdjE1LjUzN0M0OS41LDU1LjM0\nNSw0OC44NDUsNTYsNDguMDM3LDU2eiIvPgogICAgPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6I0ZG\nRkZGRjsiIGQ9Ik0yMS40MjYsNDIuNjV2Ny44NDhjMCwwLjQ3NC0wLjA4NywwLjg3My0wLjI2LDEu\nMTk2Yy0wLjE3MywwLjMyMy0wLjQwNiwwLjU4My0wLjY5NywwLjc3OQoJCQljLTAuMjkyLDAuMTk2\nLTAuNjI3LDAuMzMzLTEuMDA1LDAuNDFDMTkuMDg1LDUyLjk2MSwxOC42OTYsNTMsMTguMjk1LDUz\nYy0wLjIwMSwwLTAuNDM2LTAuMDIxLTAuNzA0LTAuMDYyCgkJCWMtMC4yNjktMC4wNDEtMC41NDct\nMC4xMDQtMC44MzQtMC4xOTFzLTAuNTYzLTAuMTg1LTAuODI3LTAuMjk0Yy0wLjI2NS0wLjEwOS0w\nLjQ4OC0wLjIzMi0wLjY3LTAuMzY5bDAuNjk3LTEuMTA3CgkJCWMwLjA5MSwwLjA2MywwLjIyMSww\nLjEzLDAuMzksMC4xOThjMC4xNjgsMC4wNjgsMC4zNTMsMC4xMzIsMC41NTQsMC4xOTFjMC4yLDAu\nMDYsMC40MSwwLjExMSwwLjYyOSwwLjE1NwoJCQlzMC40MjQsMC4wNjgsMC42MTUsMC4wNjhjMC40\nODMsMCwwLjg2OC0wLjA5NCwxLjE1NS0wLjI4czAuNDM5LTAuNTA0LDAuNDU4LTAuOTVWNDIuNjVI\nMjEuNDI2eiIvPgogICAgICAgIDxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMjUuNTE0\nLDUyLjkzMmgtMS42NDFWNDIuODU1aDIuODk4YzAuNDI4LDAsMC44NTIsMC4wNjgsMS4yNzEsMC4y\nMDUKCQkJYzAuNDE5LDAuMTM3LDAuNzk1LDAuMzQyLDEuMTI4LDAuNjE1YzAuMzMzLDAuMjczLDAu\nNjAyLDAuNjA0LDAuODA3LDAuOTkxczAuMzA4LDAuODIyLDAuMzA4LDEuMzA2CgkJCWMwLDAuNTEx\nLTAuMDg3LDAuOTczLTAuMjYsMS4zODhjLTAuMTczLDAuNDE1LTAuNDE1LDAuNzY0LTAuNzI1LDEu\nMDQ2Yy0wLjMxLDAuMjgyLTAuNjg0LDAuNTAxLTEuMTIxLDAuNjU2CgkJCXMtMC45MjEsMC4yMzIt\nMS40NDksMC4yMzJoLTEuMjE3VjUyLjkzMnogTTI1LjUxNCw0NC4xdjMuOTkyaDEuNTA0YzAuMiww\nLDAuMzk4LTAuMDM0LDAuNTk1LTAuMTAzCgkJCWMwLjE5Ni0wLjA2OCwwLjM3Ni0wLjE4LDAuNTQt\nMC4zMzVzMC4yOTYtMC4zNzEsMC4zOTYtMC42NDljMC4xLTAuMjc4LDAuMTUtMC42MjIsMC4xNS0x\nLjAzMmMwLTAuMTY0LTAuMDIzLTAuMzU0LTAuMDY4LTAuNTY3CgkJCWMtMC4wNDYtMC4yMTQtMC4x\nMzktMC40MTktMC4yOC0wLjYxNWMtMC4xNDItMC4xOTYtMC4zNC0wLjM2LTAuNTk1LTAuNDkyQzI3\nLjUsNDQuMTY2LDI3LjE2Myw0NC4xLDI2Ljc0NCw0NC4xSDI1LjUxNHoiLz4KICAgICAgICA8cGF0\naCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTM5LjUsNDcuNzM2djMuODk2Yy0wLjIxLDAuMjY1\nLTAuNDQ0LDAuNDgtMC43MDQsMC42NDlzLTAuNTMzLDAuMzA4LTAuODIsMC40MTcKCQkJcy0wLjU4\nMywwLjE4Ny0wLjg4OSwwLjIzMkMzNi43ODEsNTIuOTc4LDM2LjQ3OSw1MywzNi4xNzgsNTNjLTAu\nNjAyLDAtMS4xNTUtMC4xMDktMS42NjEtMC4zMjhzLTAuOTQ4LTAuNTQyLTEuMzI2LTAuOTcxCgkJ\nCWMtMC4zNzgtMC40MjktMC42NzUtMC45NjYtMC44ODktMS42MTNjLTAuMjE0LTAuNjQ3LTAuMzIx\nLTEuMzk1LTAuMzIxLTIuMjQyczAuMTA3LTEuNTkzLDAuMzIxLTIuMjM1CgkJCWMwLjIxNC0wLjY0\nMywwLjUxLTEuMTc4LDAuODg5LTEuNjA2YzAuMzc4LTAuNDI5LDAuODIyLTAuNzU0LDEuMzMzLTAu\nOTc4YzAuNTEtMC4yMjQsMS4wNjItMC4zMzUsMS42NTQtMC4zMzUKCQkJYzAuNTQ3LDAsMS4wNTcs\nMC4wOTEsMS41MzEsMC4yNzNjMC40NzQsMC4xODMsMC44OTcsMC40NTYsMS4yNzEsMC44MmwtMS4x\nMzUsMS4wMTJjLTAuMjE5LTAuMjY1LTAuNDctMC40NTYtMC43NTItMC41NzQKCQkJYy0wLjI4My0w\nLjExOC0wLjU3NC0wLjE3OC0wLjg3NS0wLjE3OGMtMC4zMzcsMC0wLjY1OSwwLjA2My0wLjk2NCww\nLjE5MWMtMC4zMDYsMC4xMjgtMC41NzksMC4zNDQtMC44MiwwLjY0OQoJCQljLTAuMjQyLDAuMzA2\nLTAuNDMxLDAuNjk5LTAuNTY3LDEuMTgzcy0wLjIxLDEuMDc1LTAuMjE5LDEuNzc3YzAuMDA5LDAu\nNjg0LDAuMDgsMS4yNzYsMC4yMTIsMS43NzcKCQkJYzAuMTMyLDAuNTAxLDAuMzE0LDAuOTExLDAu\nNTQ3LDEuMjNzMC40OTcsMC41NTYsMC43OTMsMC43MTFjMC4yOTYsMC4xNTUsMC42MDgsMC4yMzIs\nMC45MzcsMC4yMzJjMC4xLDAsMC4yMzQtMC4wMDcsMC40MDMtMC4wMjEKCQkJYzAuMTY4LTAuMDE0\nLDAuMzM3LTAuMDM2LDAuNTA2LTAuMDY4YzAuMTY4LTAuMDMyLDAuMzMtMC4wNzUsMC40ODUtMC4x\nM2MwLjE1NS0wLjA1NSwwLjI2OS0wLjEzMiwwLjM0Mi0wLjIzMnYtMi40ODhoLTEuNzA5CgkJCXYt\nMS4xMjFIMzkuNXoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4=\n");

/***/ }),

/***/ "./build/scripts/infoBlock/assets/pdf.svg.mjs":
/*!****************************************************!*\
  !*** ./build/scripts/infoBlock/assets/pdf.svg.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIFVwbG9hZGVk\nIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVy\nIFRvb2xzIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4i\nICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3Zn\nIGhlaWdodD0iODAwcHgiIHdpZHRoPSI4MDBweCIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4\nbWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgdmlld0JveD0iMCAwIDU2IDU2\nIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRTlFOUUwOyIg\nZD0iTTM2Ljk4NSwwSDcuOTYzQzcuMTU1LDAsNi41LDAuNjU1LDYuNSwxLjkyNlY1NWMwLDAuMzQ1\nLDAuNjU1LDEsMS40NjMsMWg0MC4wNzQKCQljMC44MDgsMCwxLjQ2My0wLjY1NSwxLjQ2My0xVjEy\nLjk3OGMwLTAuNjk2LTAuMDkzLTAuOTItMC4yNTctMS4wODVMMzcuNjA3LDAuMjU3QzM3LjQ0Miww\nLjA5MywzNy4yMTgsMCwzNi45ODUsMHoiLz4KICAgIDxwb2x5Z29uIHN0eWxlPSJmaWxsOiNEOUQ3\nQ0E7IiBwb2ludHM9IjM3LjUsMC4xNTEgMzcuNSwxMiA0OS4zNDksMTIgCSIvPgogICAgPHBhdGgg\nc3R5bGU9ImZpbGw6I0NDNEI0QzsiIGQ9Ik0xOS41MTQsMzMuMzI0TDE5LjUxNCwzMy4zMjRjLTAu\nMzQ4LDAtMC42ODItMC4xMTMtMC45NjctMC4zMjYKCQljLTEuMDQxLTAuNzgxLTEuMTgxLTEuNjUt\nMS4xMTUtMi4yNDJjMC4xODItMS42MjgsMi4xOTUtMy4zMzIsNS45ODUtNS4wNjhjMS41MDQtMy4y\nOTYsMi45MzUtNy4zNTcsMy43ODgtMTAuNzUKCQljLTAuOTk4LTIuMTcyLTEuOTY4LTQuOTktMS4y\nNjEtNi42NDNjMC4yNDgtMC41NzksMC41NTctMS4wMjMsMS4xMzQtMS4yMTVjMC4yMjgtMC4wNzYs\nMC44MDQtMC4xNzIsMS4wMTYtMC4xNzIKCQljMC41MDQsMCwwLjk0NywwLjY0OSwxLjI2MSwxLjA0\nOWMwLjI5NSwwLjM3NiwwLjk2NCwxLjE3My0wLjM3Myw2LjgwMmMxLjM0OCwyLjc4NCwzLjI1OCw1\nLjYyLDUuMDg4LDcuNTYyCgkJYzEuMzExLTAuMjM3LDIuNDM5LTAuMzU4LDMuMzU4LTAuMzU4YzEu\nNTY2LDAsMi41MTUsMC4zNjUsMi45MDIsMS4xMTdjMC4zMiwwLjYyMiwwLjE4OSwxLjM0OS0wLjM5\nLDIuMTYKCQljLTAuNTU3LDAuNzc5LTEuMzI1LDEuMTkxLTIuMjIsMS4xOTFjLTEuMjE2LDAtMi42\nMzItMC43NjgtNC4yMTEtMi4yODVjLTIuODM3LDAuNTkzLTYuMTUsMS42NTEtOC44MjgsMi44MjIK\nCQljLTAuODM2LDEuNzc0LTEuNjM3LDMuMjAzLTIuMzgzLDQuMjUxQzIxLjI3MywzMi42NTQsMjAu\nMzg5LDMzLjMyNCwxOS41MTQsMzMuMzI0eiBNMjIuMTc2LDI4LjE5OAoJCWMtMi4xMzcsMS4yMDEt\nMy4wMDgsMi4xODgtMy4wNzEsMi43NDRjLTAuMDEsMC4wOTItMC4wMzcsMC4zMzQsMC40MzEsMC42\nOTJDMTkuNjg1LDMxLjU4NywyMC41NTUsMzEuMTksMjIuMTc2LDI4LjE5OHoKCQkgTTM1LjgxMywy\nMy43NTZjMC44MTUsMC42MjcsMS4wMTQsMC45NDQsMS41NDcsMC45NDRjMC4yMzQsMCwwLjkwMS0w\nLjAxLDEuMjEtMC40NDFjMC4xNDktMC4yMDksMC4yMDctMC4zNDMsMC4yMy0wLjQxNQoJCWMtMC4x\nMjMtMC4wNjUtMC4yODYtMC4xOTctMS4xNzUtMC4xOTdDMzcuMTIsMjMuNjQ4LDM2LjQ4NSwyMy42\nNywzNS44MTMsMjMuNzU2eiBNMjguMzQzLDE3LjE3NAoJCWMtMC43MTUsMi40NzQtMS42NTksNS4x\nNDUtMi42NzQsNy41NjRjMi4wOS0wLjgxMSw0LjM2Mi0xLjUxOSw2LjQ5Ni0yLjAyQzMwLjgxNSwy\nMS4xNSwyOS40NjYsMTkuMTkyLDI4LjM0MywxNy4xNzR6CgkJIE0yNy43MzYsOC43MTJjLTAuMDk4\nLDAuMDMzLTEuMzMsMS43NTcsMC4wOTYsMy4yMTZDMjguNzgxLDkuODEzLDI3Ljc3OSw4LjY5OCwy\nNy43MzYsOC43MTJ6Ii8+CiAgICA8cGF0aCBzdHlsZT0iZmlsbDojQ0M0QjRDOyIKICAgICAgICAg\nIGQ9Ik00OC4wMzcsNTZINy45NjNDNy4xNTUsNTYsNi41LDU1LjM0NSw2LjUsNTQuNTM3VjM5aDQz\ndjE1LjUzN0M0OS41LDU1LjM0NSw0OC44NDUsNTYsNDguMDM3LDU2eiIvPgogICAgPGc+CgkJPHBh\ndGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xNy4zODUsNTNoLTEuNjQxVjQyLjkyNGgyLjg5\nOGMwLjQyOCwwLDAuODUyLDAuMDY4LDEuMjcxLDAuMjA1CgkJCWMwLjQxOSwwLjEzNywwLjc5NSww\nLjM0MiwxLjEyOCwwLjYxNWMwLjMzMywwLjI3MywwLjYwMiwwLjYwNCwwLjgwNywwLjk5MXMwLjMw\nOCwwLjgyMiwwLjMwOCwxLjMwNgoJCQljMCwwLjUxMS0wLjA4NywwLjk3My0wLjI2LDEuMzg4Yy0w\nLjE3MywwLjQxNS0wLjQxNSwwLjc2NC0wLjcyNSwxLjA0NmMtMC4zMSwwLjI4Mi0wLjY4NCwwLjUw\nMS0xLjEyMSwwLjY1NgoJCQlzLTAuOTIxLDAuMjMyLTEuNDQ5LDAuMjMyaC0xLjIxN1Y1M3ogTTE3\nLjM4NSw0NC4xNjh2My45OTJoMS41MDRjMC4yLDAsMC4zOTgtMC4wMzQsMC41OTUtMC4xMDMKCQkJ\nYzAuMTk2LTAuMDY4LDAuMzc2LTAuMTgsMC41NC0wLjMzNWMwLjE2NC0wLjE1NSwwLjI5Ni0wLjM3\nMSwwLjM5Ni0wLjY0OWMwLjEtMC4yNzgsMC4xNS0wLjYyMiwwLjE1LTEuMDMyCgkJCWMwLTAuMTY0\nLTAuMDIzLTAuMzU0LTAuMDY4LTAuNTY3Yy0wLjA0Ni0wLjIxNC0wLjEzOS0wLjQxOS0wLjI4LTAu\nNjE1Yy0wLjE0Mi0wLjE5Ni0wLjM0LTAuMzYtMC41OTUtMC40OTIKCQkJYy0wLjI1NS0wLjEzMi0w\nLjU5My0wLjE5OC0xLjAxMi0wLjE5OEgxNy4zODV6Ii8+CiAgICAgICAgPHBhdGggc3R5bGU9ImZp\nbGw6I0ZGRkZGRjsiIGQ9Ik0zMi4yMTksNDcuNjgyYzAsMC44MjktMC4wODksMS41MzgtMC4yNjcs\nMi4xMjZzLTAuNDAzLDEuMDgtMC42NzcsMS40NzdzLTAuNTgxLDAuNzA5LTAuOTIzLDAuOTM3CgkJ\nCXMtMC42NzIsMC4zOTgtMC45OTEsMC41MTNjLTAuMzE5LDAuMTE0LTAuNjExLDAuMTg3LTAuODc1\nLDAuMjE5QzI4LjIyMiw1Mi45ODQsMjguMDI2LDUzLDI3Ljg5OCw1M2gtMy44MTRWNDIuOTI0aDMu\nMDM1CgkJCWMwLjg0OCwwLDEuNTkzLDAuMTM1LDIuMjM1LDAuNDAzczEuMTc2LDAuNjI3LDEuNiwx\nLjA3M3MwLjc0LDAuOTU1LDAuOTUsMS41MjRDMzIuMTE0LDQ2LjQ5NCwzMi4yMTksNDcuMDgsMzIu\nMjE5LDQ3LjY4MnoKCQkJIE0yNy4zNTIsNTEuNzk3YzEuMTEyLDAsMS45MTQtMC4zNTUsMi40MDYt\nMS4wNjZzMC43MzgtMS43NDEsMC43MzgtMy4wOWMwLTAuNDE5LTAuMDUtMC44MzQtMC4xNS0xLjI0\nNAoJCQljLTAuMTAxLTAuNDEtMC4yOTQtMC43ODEtMC41ODEtMS4xMTRzLTAuNjc3LTAuNjAyLTEu\nMTY5LTAuODA3cy0xLjEzLTAuMzA4LTEuOTE0LTAuMzA4aC0wLjk1N3Y3LjYyOUgyNy4zNTJ6Ii8+\nCiAgICAgICAgPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0zNi4yNjYsNDQuMTY4djMu\nMTcyaDQuMjExdjEuMTIxaC00LjIxMVY1M2gtMS42NjhWNDIuOTI0SDQwLjl2MS4yNDRIMzYuMjY2\neiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPg==\n");

/***/ }),

/***/ "./build/scripts/infoBlock/assets/phonePreview.png.mjs":
/*!*************************************************************!*\
  !*** ./build/scripts/infoBlock/assets/phonePreview.png.mjs ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("iVBORw0KGgoAAAANSUhEUgAAAfQAAAITCAMAAADGoR4fAAAB+1BMVEUAAAACAgEREQwAAAAAAACc\nnJtQT0wNDQsEBANiYl+BgX8FBQWIiIYHBwUJCAYGBgUKCgYDAwMGBgUEBAMTEg8ICAcCAgIZGBYD\nAwMDAwIKCQcCAgCnpqQHBwWUlJBPT0ukpKBdXVlVVVEqKig/PzwyMjF9fXl+f3z////19fUAAACw\nsLDn7O3w8PD7+/saGhm8vLj39/eoqKSUlI8yMC4fHx/d3d1eXlwVFRQpKCS1tbOPj4ttbWrf393z\n8/MLCgifn5oFBQWysq6iopwPDw39/f2+vrygoJuqqqfU1NO5ubWZmZSzs7PR0tCmpqGCgn+KiocS\nEhG0tbC2trOtra35+fmSko3///crKimMi4eXl5eVlZPh4uGsrKqbm5fY2NejpJ+NjYrr8PHOzs3D\nw8GRkZDb3Nvr7OskIyHV1dXi4uLGxsVsbGiur6ppaWVxcW3/+/b4/vtGRUPt8vNTU1B3d3Q3NjQA\nXv8eHRs1h//6+PZ9fXtMS0nn5+bk5OQBb//Z2dnu7u08Ozr///tBQD9Hlv/v9fYFaf/AwL+FhYPK\nyslbW1hlZWPIyMjh7/mbm5pyc3Eqg/+x1P7y+/ttqv99tvoAVv+ozvueyPnM5fwAd/8oPWsAS/9d\no/9wsv00TWwYef+63f4hLkmLv/wkTYwXHjKr1fsjg6RSVnMcgQcLAAAAKHRSTlMAxeFPLe6YIAf+\n51n8tdRC4WiGnfSReO8UM+mq8PF0mLKYmMej3Lm4lt09fgAAI7BJREFUeNrsmutP2lAUwIdbokZx\nPvfe91MWKZTHymCjlEcr1QLtJHUCKwEE5ZUQICSAmYYPKhr9k3fL3XtjU0ElGT9vT8895+ZU7uGc\ntgn3hsrUk8nJBzMzMytLS3q9XqebezY/MTExj5gY8yfmp00vEGxl/rtpQqfT6fVLS0sLMzMPH0w+\nmZq6N6pMPry/uPR8bmK54agfVrvTp7VmePv8A/eqyLKStG66CoHLOgOBn+wBDFLuhnQ/h+noCIsj\n07dxpDnks71PCHtexh8l+Coep7hM5rhWK3W7FavDsTw3p19ZePjg3ogxdX9hRfes4Th8fZHkgqm3\nBwerxKYRxlwC4u3e3t5+7Pfd8m+aidWs/WSdC5e7deXx3PPFmckRqfmpB4/0z0hr5eLDeuoAwG80\nm4lsbDeVPzJJb6R4nOd58cqoP+kqhSQaKkVpDgqd0cFTlIgEPxgowtXQLtiTGKTEcQykFdEU6XF0\n/u7W1Limasvw+Qu9mWktlUptbEhiHC2LF+PFIitLQVMgf5Jas7cPzGajH8C/f8ZmTivKY93iwztP\n/OTMim65Xg0Fd1cBjFn7xtF7NZGwZJxOZxSxjRASV4DB8lJ4vwpuELxXRlXVnsT0puIXByV6RaSL\nFDIjRDRX0VB7AtnREJFKqaJm6xkT0tpJKnWyEWd6USkc3cv1dkJIMJzIvwqc7OwTAP526lWtihL/\n6A5b/dTM0rNcq8numQHaGwEqse1MJi3CuVaIfDHOF9k4K0sSy7JIYCQ0sEUbWEEGTdMkAp9/Rpa/\nnWQkgzLStGpAfz3wCU9NWNG0nsQKPpA04RWjg5TK7u3v72XPpN40iJ9NgjL6v3v7UORFLiEIgpeS\nT+wE+Ildplxfvou8464+T1dC8ir4sycSF0WVLXA8i9oTalIixwiWaHT2OFS7KF9c1AqukqtUKJVc\nLnRggfVCAR3aBB9I17QCMhd+pIzWolFGMcqFgqaVtRjIXHZhkLVQ1kLgyL05Un4AL9Vi/Zkyuva/\nXeVfXVhg+YfYyPaHwGU0sKvsqh2HQs1QqIY/O9quWq0WCiczqMy9Iq9904OyKVhUGWTg2LR287fz\nBeuybuG22/zUfR1tLUhtML4NMpmkJcFRLMtTXMISQpnotjqdTqViVawOW87WaDRIkmzQSP4CjY5I\nT/YUDP2DxNBfXJGePRLBk55OI0mTX2UEx6NxULxQm6FpJNKzaqF8yEX/iubG2t9d5C9OzYXiYomV\nn4n8fjW8tBfYhwYGR6LRNqEtcyiKtVPpIKrTrnLNyYmsFAzIPIVSzxVTWfB/5LrK/OLkvdtjakZH\ntjIfAd7Kia1kAvVyidrONMunlbqiKDmSdhs8CMOYAcBb6KZJ7Stw+Bql/lxEiZd4xiKwqXdA5C/q\nyyu3knaccroqZsGc55xbFootFtVmbbp12EDJHif6ZnCjFuCodMtNiySbTLwgMHIMYG22cwtpx42d\nrPIH0GYtzm2vxKqJWrVSR03KMOaGcfto5bB16qSktCRygrpBwMfw4ePFG7+3Tz6PtEQC7PzWlpdn\n485a1arQhnGB3wa45duUTmFWTcusN8qkzRA7rk88unejLLxUZrPQ5p1JRmLF0Ou6jTSMuWV8NqVa\nFuSAxAjMmR9OXDn9Db7APdXbymuQZZNRRpKipYqVHjf1O8HjJjvdWTbNqgK3Bkaqtbxw74aYWa5Q\n4A84t7wsaynVFbdhzF3h8TSU1vGrtKxaxLeQDTl0N1LsT/RkaQd2mLBQlITSYY42jLlbaKUako6K\ngiUAsF65iWJ/Ou8QAIJhp1fmyx1l3NdHAA9trWbSAVFgUDW6yJVhP8Y/Wm6lIZYIcxLbrCiR8eP6\naOBu1KfFNMsIATBuK7rhvrMv+kptSCWdapCZro8b+wjhy3WapoAYpQ4gWJkb4o19aoVuGmF91hKX\nmxXHuMpHCg9p7fJpSmvxG1Xfw6ElXa+cwyqXZILqa4Uc53zU8OQ64SPZK6Tg7enykLI+9VyhYHV7\nSzVttxzj17QRxEPWayYTEzUB4aJnhpJzvfIeYpYoJYfqtiuVudsdIRs2Wy7nUPqSa/x/ncOXU/rj\nyOVsDZKOuD1XCql02YBqkYCo0feH0dutMnzacvJyzUpe7vqd1xehZIIP5vOpjd2Pn3Z27Huxfth3\n88mc4T/C011PfYr13ZA9+87Op92NVCqfXmec4Wapar1UpblzLTHNW+LmzWFkfSnHQ2wrWpRK1sg/\nv8GV8vartfbBph+uwn7V8N/g5uBK+In2Xvr8eNr6r47osVWYvBiNg9G1PGjWF23nEItaWHZacf/1\nmsqpkG/jZPuNm2azmbgsZiAqhv8FFaXx0pjNm0Y/9FjdZZst+q+hyfp2nrKwcNB9Ntj7+gK9BbFk\nNB7vOnx/yXinGcwCgJG4HnBm+E+oAhDXYlPb3jX1lPxr1jOow0vwsTX3ZICc3/eVgciEeamr9M+5\no3n2DgDMxLUB4tAw6ng8w/hZEAfviGvjB/C3xVb/jkvXLajDm+Ckoh/gFxPPWllgkpRc6p/zQyYL\n4DcTg2CE14bRxuPDuAd8bj8DYsCdAjgrk/1rnUl7oxtQzD269sva3GEK4mHK5LL2y3nrzTswEoNi\nhqZhlPG4fV8ZrNxtdhjCZkEs1OiX9Q6VVj/swCx53Ye5FVKF/HEi2Kz3eW5X4kbwE0MAnIYR5jM7\n5/6bNBTF8fhIdPEd4yvG38+9hsLloZ2PXootMJC6gjX4GNPABhtOEwLL4sDowg/iI9vv+8HEaPTP\n9JardHCrY4MaXfxM8PSwFbZvz+m5pwdYmHdV5+E+iuqVl6OLzmXfoL9oztVzgUL0tfLs5O6KuRNa\nAxaPprMP2zJ2Q77u45KPDjzE3qHuENc4p6qtNtXoSBk+3wI0Dixg523shjo5EVgKzcBs++Luknut\nDA9CsWAz4l6IzoKExgSsY89QNUrpj1jl/zkmwzEpf0wIZduN1YimfvpiB72sjiD6ax2NCYCEa/6l\nkxulmVAVkpXdDFWc9Wdh6X4ye7Xiuu85CYiiIMRuowMJ7BWqnzKlTPb1A9NvynxDZoYpc6fJbtxS\nNVOo4VS6uWnS/MdPKqWmhndN2KejcSHBlGuwa+F7JSN9E55fOrTz5K5uQGY6nVsNUyxSqQIgND7R\nDewVFT/tSiszNJOJy9+ZZDLkn2jcyf2aOkkF0T99/tbWtC8fI9gO+12zLEloXCgEpA3XYq6ZTEWD\nkGkf23Fy39dukYdz2dCaiUWai8CfmH2NA7iNPUJdNqls42fI3JJNbvIN7rdv3NRwON+3Bx7o39qY\nRj5/srMG3jU1IGh8KBKsU7di7lk8mY5DonJkp20ZvwHXjiaXmitY5KoFaLyiVzXsDXRNU2U71J3I\nZqafCdx1Mp259pqd8/n34OWwKPrHTRlHNpnoqinjXXMD0EiIqsf9WIDm77PVell/t8PG3PnjdVJm\nUxONvIoF3kvOax+T6K1J7BGTMrXTt/kTjSd0J71r3M38JgdX/EJ63/wYpurHr5+/qNoooj8BNFYU\nAkUTC2i1y4FCDAI7rOXO+K+BcT2WaPqxwDPQ0ZghUMMeoUVUap/THdG1n7Zsm/YGh3JT1SJiIfdl\nMyyrm18/UhboI6R3A9C4gQ9+lwR/o7qUfiVtnDy8k/7ryWeQuR/NPa1ggQkA5KCgsQAN7BVUU6lq\nQxnc7BoM2+QWd3NkVVyyqf68TCNrGpXNEd7Vo80K4eKN6mZ7PRA1oBo+u5Pl2mQAEk9iT1zar7UX\ngBzGJvpl7BlcaAd723GJfuHnTY0v9dmdXQ6MULwTgsYOgduq2O99n0qmi9A4fnj4QL/0FIqdYKwe\nEV93a8xxzpHKK9hjVPumclPlVs/P4U4RalIG7+DIowyGdkAUXWH/nA0FEcuyiONjMJ8LyMGln0mX\nQ2+ij6Vi+NQOSvc4JEK56bAqJKgMIC9EJ3AD/730+jqa309HOOwyIEoOAJbyc0sCjuNjTgtcIb3v\nsOCZuFivB7KhDGzsH7qA31cnV54YS+/E6CsAQZ4Acfz3olKtWwrK8khv7bnq0reGxctFnZsKAVi8\n22k0Gk9SZS4q9xaTyZlBLt/cojqQNbE/8TD++DFUh16rH5GDkLwXO7osnNHfgYW8Qdf/6kE5VdXs\nRi3Fo5Drn6CwN0BZw2qg61d0mO8NxlQ2rvAjRLEgOF1cmOpnYTZ3pwTOnqAqvLKVidRS+oo1sW/Y\n+dda+dFcNPZUCHT/IiCPUKC012ehm/1ZUiHAmDcxXgelq3nHVo76V7rKawkAH0IIikeVm8lYP8kA\nTHVebjmGoCN2pQqpwhIEh7ywfvDSUYgdXSrUhECPAvIOeI/3NOrbgUCHqWARyhWMDVCY5uiqXSdf\nr7Z8L+N38sx+RiwFETDe3tSwwAZEq85BpOjWMh6g8jxgrJcf1U4PNwyZL5JQKLsaEQ5VyUvR9Zd5\nvJeZhi2C25pfiWD6Uv8hOoI5jOXLAK1SruQD6brG0z4TPWNgkTUlWdpaIkBKqD7bRioUh85QvdjD\n+yYg01kKtoXjK+6l5n95LTcyTsTwzK53z2dV6IleXo7MQ7yuYSb+xDy89b9HFkIEkpkZLFIjyeKb\nkpM7dHgnNKA78cRjqZQfppS7YEZh5l52elIc3yXISyx4gvcsk70zsKIoSCo9KEKRYrzQE90nlcvO\nulW9Di2k+7jod91Et5JTyQ3JWe3BByqs2rLZ0CLUh8nvZ/Pz0tzj2EQF90OrgDxFkf7y+cgRqMyC\n0gtyCUoUr0iZPtGRT4dpW825mU6YqZ4Dy4d+IzpJLszcsCSnTBAnisNGoBCAOf+hIRbpV63i/aQ4\nXl0H5DGKvldVz7/6GedEny29hiRTtbzQLzpSoBXGQbBZxTcID+Jfp/dgJhDfWhqKoT7ZCASjUKwc\nGKJ2X4fgvWxnWRXP6F6jAKT34sKt7Sx1Ia7iJuRE0Rk+uFKFeC1/9RWUfF0fF/3Wrwo5y2mJul2p\npPVUrNDyNc9sn90jb610OvdUHnwWHyDPUQh8COM9htrwgaPMHMYVEnAVHfkkyGGGudBrtxEwilNu\nMw2QKMFWzV0uWtFaNFsIsPp9+85ME2WeGIm6hvsJea85V93X2VufadMuASj9oltZW/Qi07JIeHOm\nl+padkP1KdrSYq3eR8V0tJ90kLzqLIKCtgKv84Pj0I14NAipyIltT+mrEJiOTQ9OzJgZQH8GgNnG\nnvnsUbVmWOAoyKcB1+zCvYJaK5guQrivPavo5D1eBfD1HBJEry/MDjJfuhMYFER8n5DG+jPR8uza\nqe2GYGUDbt2Lra649BD/EATg5sP6HtBdzT9PkYG/G0FxYx6kqjGlQybxQYdXj0s6clAAZYiubHFY\nUilhBI1+Eokpfiw5uDRo5ObjbPotTFzcrh03uVCeSxg3KrifdUB/DIUAkMXbd+xPYYhE7CHV3iyr\nbXOELWaLThH+ON9p1xQeY83vrR7nIeFJhD3+2EEkkm9ebax/KANYivi76b07QL1Lq47IQHyo3+GK\neF1bImuDR93DeCgF09tddDndhPnppcQaxX3IVyRXeRTkDUQHAF1CrZvzmak/zcLUSGRm5x+VLR24\nnAIKUvrvBtRTFCEGiCVABM0Z8BT3s9JJFYJw+dzBbXqwN6A0HYuGB2t3iaA/Del+EMO/iUQIQX8c\nSArXV7PJwutX23Riz59ch2Ro5uig6KuA/vPXI7UGKiGzNpNKf2fn/n6ThqI4gGfRRI3xwd9R4/tp\nbssusIEbOmsntaMUFToypUWhFSzdNHHDl22EkYVsY2T+yUKMDzst1xlfuJXvv/Dh3t57OOe2sju3\n2Oe4eRd0WQnMry2Hoo+3olmmJ3HYw5XYBNUdeDp3ldkdt7Qf+1RQ0i/RJ92CEPEZ+rQFdjF6NScX\nocb+e/XWoWRlCokddEvvHYSgz8CnLkBw0b9dSiSy5P4VZj0uHRuWtXIPoX+ZMIo+k5+uQBfduuav\nUXs163xm1uTm2kDLyjG+sX0CITQz9OkK4O6j52m6VRX2Ny6xbmwPK7CVLH7FRVg6O7xzkaywh8oz\nOyVFt6S9e6yumTslKOjFzbfoHGfM0LlIHH7g2v9qserE0reZD0S6cKYrT9HhfakVLXSpmVo78Y9U\nVXV9x0s1JSEqgQxuhC7nqi60b7DGHDa8g2RV20TovXhWiE6kZ45L8+R3lqm/1okKOyTwoEuGynR0\nZ2Ot9F7HKn9cHaDtPR2dhS49OymRYKjRisSRFFR0GtuojS/qH1mD6re+rRg1rYKfG34aFfSDNZVM\nituIADt48+jOtktXbcjdYVzUb+/A8N3Wp97zSFbepbUcYYXyzw6dJdxHcTSeY2RVZ26cgltTanhE\n+U0k0FOU/Cl+R+A70FxA6Ke5wqu4sXidUZv5AWoI+lkE0KUhuUgMgeuswyFGLxbkg+7CdXaDXEbJ\n4KEyk3/0DiUXi98UeA4MMLqSkJud7yz0GpAg+nOXe/RGnlw0tCVwHDz7+3ag2VWreXiTgf4eEpni\nu0X0a+G+IGcEbU3b1jTNtk2Ck7cEfgNthL5XUPSG9O0e4yWxAhTKymuE/tbjvDbTtQPgJKe6vu+7\nasnU7Aipwy5uiJWLurfO6J158FiDj8H+5ycpvtEbSNW2qWGJYn0cUWw4OcSeN1MCr4Fj/HjkWUk3\nYDAZ/fLDIshJrY3Q5zsxgeO0cue3cG25W98ecf9KfbsvGgT9LErcnuYw+ovvI3QHBncno99XY7Ku\nbeKqTpNn9KaJzFWxL55Lvd9aRmud8lqMhwxGf0/1IXx5xEB316vVrdMA+rrAb9T8+b09NzLH6bfw\nWh8KfAaSCH2hQpM+fL3NQPdH6Hak0A10hjNTI/OguoHQSUPgMqAHV/oYnbXSHUGXtWsIfVHiF30f\nWWruthiSuog+/ITTDR7OMHqF6j7szk3uel88WanIiQC6EBd4zRFCt72+GJbtEy0SBVmQ8SOxFVV3\n4TUDfckJRV/hdqVbSNIkVj0c3Qvc1rk8wcMr/E1/T3WXudIXvGihr7gYPd+ZgN4wCYojcBjAj86N\n0dkrfcOTklFCb5EAujUZPQpLPRT9CI7nGENNH6Tkq0I6Muj+xdG7JsHxBP4Sik7hzf+D3sz/Ezrl\nsJEG7L9HT/09+hRPuXwg/4Ru/uTu/l+UBuM4gP8B9TdEEFQPu+o0sKhOosh2phG5+vxyYuia2Ao2\nLJaCMxlzh3UD3blaqBgH/Z3NvkBzn63N0j32hjuOu9/uxeezPZ9nz+yQrctFLj763qWrd9Px0AHa\ntKqL8dD/h/6+CfRsCpzR5TahMr1SDPQKgn5Ikk9b8ib0f/1P0VNB5m34aCgnQOXwpveC8aNzget0\nlmEovH8HTZN/jwYSCc4aKh0379r6PYlQGLXhZyzndvBU1RJS6ok/TaGZY731e/RxH352AOLPBtCz\nqYW50f0ChMZUBgzC2AxQ7zfKjC8VkmzAmU/mC+uhm9bQ/WE+GX5Xh5SF9NeV0N8Klx49uH3tLYqO\n17lhjIDO+/ca7+/uN3aqAejNA4ZjKBvKSXLLPrksW5Ylu7HkRWYTHdopcIZzpNYwdPeTsfNhY9hT\nr/fqz9hSxIkc5eZE3PWjl+KhiyTRgKNMNZDcgBvp+5emKybAyFAUXfN1eAz9/tFD/uLDc4HoZ0Q1\nU6yot65HQf/V22k1J/yNuOi03b7DSPkEy7+bKY52Yg+dVkuOhF6q1xovLl0IRs+rQm0/g6Ljvb1L\nbZ0Tclj4a/QcSS44egrGXXM2aVkwjIie74gNtXg2GP2VmjmqCS/96FtoTnLMf4resmcayFHR7wh8\nsSOGo4so+tb19gD0Qgg6tyXotvJJk9qR0W8c8JXOUQj6YzUz2M9EQF+Yd6muc7S9M5zQx82rVo1l\ntgNd+ailstHRH79w2/t+CDrfEfYFDB0zH34BSuevP8Ij6OWSWsXRBaS7MzxJNDi6YUKWREfP12uN\nvd754HX6+4POw1f5D39asqW0sf25q8tAcZ1jSzY3afzByGat7JpTt2TD0R0gMdDvi2nxYvpcMPqV\nd73TzyMMZyRLV1z1PtD8ctgijzCW0fFMdaeQdv9I23AGR1dOQIrR3p8/vlm6+CZ0Pz3iGBYW6ore\np3MA+yNCDWHkyu/62AyW5TD0dySZhKPbxwDtJyg6PobNrzh7x9VbKYrVsQ0X/MH3anWXZbCoJNHg\n6F3d1i24jKGve8MFZNprvbeHOXKcf8+l//0sM31bqzi6QT5ODBOSQM9S3+Gz9V281Ku+K/oujs5n\nSRLB0bM/vi3GsPBVMb5uBH0LO7yIUvqu6v0ay6DZJ8kGHEWHpVhDwwRw5ratawmgZ6nv8L6LOnoD\n3xQ4jqHxkk4k0CfHpifOdHIMhIA51R0gvqwFHe/wVD4446ZeQC3Ttaa3uQcUei7x9SiYLdvo/h7D\n1q0FtqRhdb4OdFzdnlI7mcP7O3vkRc+X6ezubsD6euzJbCT/xE4Rf1ZGvx+Mjnf4yVSjFV3F0QdL\n6HTeu//s8Jo3oQ+cr4r+9DaKHhRJHk9NWts7IYcR0Skcx/1K2xsSljVVOrKxrlF72IGQg0IkdGoL\nPWY2dcIlS/GxJjc8hl7se8ZxOZbiQo+VTaHTbU46iHlhacnWSCPn2Lb19SPrR6dcfJFKYUmTLWSa\nSxO5Acty1J1zWCUbQN+Oj908LHjImcFO0/9GglzZy84NyHbmG3v3+9JEHAdwPLDol08yehD1rII7\n9VwLG/7A6cJ0mcPCJcYWoxOnq2dOQbCJeyKG/dFdijW2O+3zZVCf+7xf+B+8+Xzuezd3cz7Ipeb7\n6WdaHdGL5a/VZjjaoxkeRdk7mp/oXO5EP9dxgi9+OqkeN0djNTunvbzc9pVyXe9pi+7nzpMXn9fD\nKHmS4/Aie3lV4dsIzhD9j6NydDFfbYxGm/0SYTOsn5wtecWv+Sf6b7XySKnrlbDJS17rwT3iHH0u\nhdH9mepx15QnLvk3h75iTHqHfFfz5OoK7kITEb3L31XXeqt2jujdgquTh7rH3Cd6j3yQ8jH3iR6n\necmUpyA5T+TiBQmvFFO/2H/hli1RPgy7ZjwVQx5hvSfL54MgvBAEKRnyCNFN4ppuENENYr0bxKQb\nRHSDWO8GEd0g1rtBRDeI9W4Qk24Qn7IZxKQbFBN94eo3Rq4x6Zox6Qa5RM9xetfNJXqN6LoJow8M\n3btPdO1k0W/ePmx9nt0gum7C6G9HDnYzDaLrJoz+facwP1knum7SSX9xsDvBpCsnjD5YLa0USkTX\nTRj9Tra1OUt05cTRvxBdPWl0Pzl61ocORDeI6AbJPlqNonNN1y9+0omeakQ3iOjW5PsZ3R/LSn3I\n4l/oX/R2PgiC9sVfvHaA/4BX7FP0TL2agw5bi4U+TXrWG4MO3nK/or/2oMVUv6KPedBiapjo5rhF\nXyS6Zm7R54iuWW/0BdZ72vVEr3BNTz2iG8Tp3SAOcgYx6QYJo2dbRNdPGH2r9m6e6NrJoleWpk8n\nGkRXThZ9+sf2/naOg5xywugrO+Mvj4iunCz6nudVClzTtRNFv/XgydNn+1zTtRNFj7Jfu7teI7py\nU/JXihFdO6IbRHSDiG4Q0Q0iukE90StET73e6EtXRudfoJVzWO88e9fOITqfsmnHNd0gl+hMunIx\nBzkmPe04vRvkdJBbY72r5hKdSVcu5iDHek87rukGuTyR4/SunMOkzxBdOZforHflHA5yMzyRU85h\n0uusd+V49m4Qz94NclnvHOSU4/RuEPfpBhHdoJjoPIZNO07vBhHdIGH0gaFHRFdPFv36+N63DK8f\n0U4W/eFjb6SwQXTlhJN+4+D9ZJ1n78oJow/uDq9zn66ddNJfje/zP3LaSaPXTjMNoisnje6t8BZo\n9cTRN2dLfMNFOXF0foxPP3H0j/yyg3ry6Kx39eKiL10anfWuXmx01nu6cU03iOgGxUbnmp5u8uj8\n7KZ6rHeDmHSDfrJ3Ni1tRUEYpmgtYmqLRahQkIiFS0SyiAYlEVFKi+JHTUBcaFsJSZMuzEaz6Ua7\nqlSoP7m36zNJOO7mPc/zFx5m5j1z7gczPUGQniBITxCCXIIY0itIF8eu9MJL2rswVqXnFy6v38xP\ncmRTxZZ+s96uz9PeVbHb+8OvbHWZ9q6KfZ9+v73+t0h7V8WWXtg+uSzS3lUZMtM3+r+XqHRV7Ep/\nLH/qIV0WO8jVu63vU7R3VQLpp//be31z626R9K5KIL2yX2nm0s/vFmnvqthBLq/01Smkq2JeuOTS\nq0jXZUSl81qTKiOkE+RUGS6dI5sslvQmQU4bUzqVrk24nEG6PEhPEIJcghDkEsRq7w2WM9qYlc5y\nRhuObAkSXq0y0+UJZzrtXR5meoIgPUHCmY50eQLpNYKcPOZyBunacE5PEEt6A+nacE5PkEB6O5fO\nhYs2oXQqXZ7oIPeZme6ecDkzJshdUunuiV7OtDmnuyda+iXt3T3RR7af/HbTPbHpvXNd7tHenRO2\n99FB7mKtfIt050Qe2Qp/Spsd0rtzItv7u91Bl5/meyfuanWhnV3stGjvzol7cubt7PWg22H37pyY\nSs95NTF3xkz3TqT0XPtaj3O6c+IeosiZ2PzKTHdOmN6RLk+4nEG6PNEzfYLljHueMNO3qHTnhOf0\n5mlztPTbvNKPkO4Y8z59TKXT3p3zhCC3xUbOOeYadrT0KjPdOWGQa4yb6T3au3PMIxuVrk0ofWx6\nr1LpzjGls5HTJpTeQLo6YXofL52rVec8QTrPyHmHmZ4g0dJnzqh070S295lns2cdLlycEyf9xfuj\nhxOekfNOnPSFlezbTov27py4c/pku1/qsob1TqT0Qn2n28mlM9M9Eyn9+f6gzHLGO7HSz6c39pjp\nzomVnt3zHTn3WNLHf3PmCzPdM9HSa9uHBDnnWNL5eKA4lnQ+8i+OJZ1vw4oTL52Z7h7ae4JY0vmd\nhzjM9ASxpPNnB3GY6QmC9ARhpicIlZ4gVHqCBNJru5zT1aG9JwjSEyRs7yxn5DFmOpWuDkEuQZjp\nCWLNdH6aL44hvXaQS6+ynNHFTu9XpHdl7CA3zUxXxpBeIciJY0jnaVh1DOk1Kl0cUzrpXRu7vV9R\n6coMTe93i0hXZViQO0e6LsOk3yJdFyvINbL++scfzHRZLOkH2WO5fbiEdFXs9n7z4XplieWMKpb0\ng+y4VDouck5XxW7v/XKtVeSWTRVb+vQg21um0lWx17DHpfLGHEFOlX/s3b1KA0EUhmHEQjH+gF3E\nCwg2NjZRUohaKIIiFqkMiyJa2Iks6MW7YJnZyGx3zvs+t/BxZr6ZHZKe0HdHo01Dz6oU+unkbqdL\n2NCz6pn0tS5h9/SsikXuL3Tbe1al0G+c9NxWTLrv3rMydKC+Imd7T6x4ZHPScyuE3tw66bkV93Tb\ne24WOaBS6C7vyVWHfu/LmfCqQ28MPbzq0M/c08NbEbp/0ZVVbehX35cWuehqQ7/+bN8NPbja0C/m\n7cLQg6sMffvnaD7zEUVwlaEfvny1C69hg6sLfbw1eTx/tr0HVxf6xsH0+O3VPT24mtA74739E9t7\ndHWhd9bntvfo6kOfzroi5917ZENC94NLcANC95we3ZDQ3dODc9KBhoTujVxwQ0L3Ri64QujN/6E/\n2d4jc3kHcnkHsr0DubwDeTkDZOhAfmUD8isbkEc2INs7kOd0INs7kKEDGTqQn1aBnHQgL2eABl7O\nGHpkXs4AGTqQRQ7ISQfyKxuQRzYg93Qgl3cgJx3I9g7k8g7kpAMZOpAPI4Fs70AWOSAnHcg9Hcj2\nDuSeDuSeDuTyDuTyDuTyDmToQO7pQE46kJMOZHsH8scDgdzTgQwdyOUdyPYO5PIO5KQDGTqQyzuQ\noQMZOpA/PwLkpAMth/5ge8+uMOmNoSe3HPpH4/KenEUOqDTpvpxJzmtYoEJ798iWned0IF/DArmn\nAxk6kHs6kKEDGTqQezpQ4XLGI1t2hUn37j07P60CWeSAvIYFctKBnHSgQpHzYWR2voYF8uUMkNew\nQBY5IEMH+m3nzo0AAGEgiPXfNQ04IL6VWmAw4AezbEHHTpd7Xye8BwnvQcJ7kAHGIMmZIPPpQRY9\nSHgPUk8PkpwJ0kQRJLwHucgFaYEOMtYUpOASpOASZKcH+ZQgyJMt6DrTVdnGWfQgufcgF7kgOz3I\nOz3IogcpuAT5MTJIeA+y04P0yAUZVQ6SnAnyZAs6droq2zpnepC+9yBNFEEuckGebEF/Z/oDr8cK\nnoVP/ioAAAAASUVORK5CYII=\n");

/***/ }),

/***/ "./build/scripts/infoBlock/style/fancybox.css.mjs":
/*!********************************************************!*\
  !*** ./build/scripts/infoBlock/style/fancybox.css.mjs ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body.compensate-for-scrollbar {\n  overflow: hidden;\n}\n\n.fancybox-active {\n  height: auto;\n}\n\n.fancybox-is-hidden {\n  left: -9999px;\n  margin: 0;\n  position: absolute !important;\n  top: -9999px;\n  visibility: hidden;\n}\n\n.fancybox-container {\n  -webkit-backface-visibility: hidden;\n  height: 100%;\n  left: 0;\n  outline: none;\n  position: fixed;\n  -webkit-tap-highlight-color: transparent;\n  top: 0;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  width: 100%;\n  z-index: 999992;\n}\n\n.fancybox-container * {\n  box-sizing: border-box;\n}\n\n.fancybox-bg, .fancybox-inner, .fancybox-outer, .fancybox-stage {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fancybox-outer {\n  -webkit-overflow-scrolling: touch;\n  overflow-y: auto;\n}\n\n.fancybox-bg {\n  background: #1e1e1e;\n  opacity: 0;\n  transition-duration: inherit;\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.47, 0, 0.74, 0.71);\n}\n\n.fancybox-is-open .fancybox-bg {\n  opacity: 0.9;\n  transition-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);\n}\n\n.fancybox-caption, .fancybox-infobar, .fancybox-navigation .fancybox-button, .fancybox-toolbar {\n  direction: ltr;\n  opacity: 0;\n  position: absolute;\n  transition: opacity 0.25s ease, visibility 0s ease 0.25s;\n  visibility: hidden;\n  z-index: 99997;\n}\n\n.fancybox-show-caption .fancybox-caption, .fancybox-show-infobar .fancybox-infobar, .fancybox-show-nav .fancybox-navigation .fancybox-button, .fancybox-show-toolbar .fancybox-toolbar {\n  opacity: 1;\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;\n  visibility: visible;\n}\n\n.fancybox-infobar {\n  color: #ccc;\n  font-size: 13px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  height: 44px;\n  left: 0;\n  line-height: 44px;\n  min-width: 44px;\n  mix-blend-mode: difference;\n  padding: 0 10px;\n  pointer-events: none;\n  top: 0;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.fancybox-toolbar {\n  right: 0;\n  top: 0;\n}\n\n.fancybox-stage {\n  direction: ltr;\n  overflow: visible;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  z-index: 99994;\n}\n\n.fancybox-is-open .fancybox-stage {\n  overflow: hidden;\n}\n\n.fancybox-slide {\n  -webkit-backface-visibility: hidden;\n  display: none;\n  height: 100%;\n  left: 0;\n  outline: none;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  padding: 44px;\n  position: absolute;\n  text-align: center;\n  top: 0;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n  white-space: normal;\n  width: 100%;\n  z-index: 99994;\n}\n\n.fancybox-slide:before {\n  content: \"\";\n  display: inline-block;\n  font-size: 0;\n  height: 100%;\n  vertical-align: middle;\n  width: 0;\n}\n\n.fancybox-is-sliding .fancybox-slide, .fancybox-slide--current, .fancybox-slide--next, .fancybox-slide--previous {\n  display: block;\n}\n\n.fancybox-slide--image {\n  overflow: hidden;\n  padding: 44px 0;\n}\n\n.fancybox-slide--image:before {\n  display: none;\n}\n\n.fancybox-slide--html {\n  padding: 6px;\n}\n\n.fancybox-content {\n  background: #fff;\n  display: inline-block;\n  margin: 0;\n  max-width: 100%;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  padding: 44px;\n  position: relative;\n  text-align: left;\n  vertical-align: middle;\n}\n\n.fancybox-slide--image .fancybox-content {\n  -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.14, 1);\n  animation-timing-function: cubic-bezier(0.5, 0, 0.14, 1);\n  -webkit-backface-visibility: hidden;\n  background: transparent;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  left: 0;\n  max-width: none;\n  overflow: visible;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  -webkit-transform-origin: top left;\n  transform-origin: top left;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 99995;\n}\n\n.fancybox-can-zoomOut .fancybox-content {\n  cursor: zoom-out;\n}\n\n.fancybox-can-zoomIn .fancybox-content {\n  cursor: zoom-in;\n}\n\n.fancybox-can-pan .fancybox-content, .fancybox-can-swipe .fancybox-content {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.fancybox-is-grabbing .fancybox-content {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n.fancybox-container [data-selectable=true] {\n  cursor: text;\n}\n\n.fancybox-image, .fancybox-spaceball {\n  background: transparent;\n  border: 0;\n  height: 100%;\n  left: 0;\n  margin: 0;\n  max-height: none;\n  max-width: none;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: 100%;\n}\n\n.fancybox-spaceball {\n  z-index: 1;\n}\n\n.fancybox-slide--iframe .fancybox-content, .fancybox-slide--map .fancybox-content, .fancybox-slide--pdf .fancybox-content, .fancybox-slide--video .fancybox-content {\n  height: 100%;\n  overflow: visible;\n  padding: 0;\n  width: 100%;\n}\n\n.fancybox-slide--video .fancybox-content {\n  background: #000;\n}\n\n.fancybox-slide--map .fancybox-content {\n  background: #e5e3df;\n}\n\n.fancybox-slide--iframe .fancybox-content {\n  background: #fff;\n}\n\n.fancybox-iframe, .fancybox-video {\n  background: transparent;\n  border: 0;\n  display: block;\n  height: 100%;\n  margin: 0;\n  overflow: hidden;\n  padding: 0;\n  width: 100%;\n}\n\n.fancybox-iframe {\n  left: 0;\n  position: absolute;\n  top: 0;\n}\n\n.fancybox-error {\n  background: #fff;\n  cursor: default;\n  max-width: 400px;\n  padding: 40px;\n  width: 100%;\n}\n\n.fancybox-error p {\n  color: #444;\n  font-size: 16px;\n  line-height: 20px;\n  margin: 0;\n  padding: 0;\n}\n\n.fancybox-button {\n  background: rgba(30, 30, 30, 0.6);\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n  cursor: pointer;\n  display: inline-block;\n  height: 44px;\n  margin: 0;\n  padding: 10px;\n  position: relative;\n  transition: color 0.2s;\n  vertical-align: top;\n  visibility: inherit;\n  width: 44px;\n}\n\n.fancybox-button, .fancybox-button:link, .fancybox-button:visited {\n  color: #ccc;\n}\n\n.fancybox-button:hover {\n  color: #fff;\n}\n\n.fancybox-button:focus {\n  outline: none;\n}\n\n.fancybox-button.fancybox-focus {\n  outline: 1px dotted;\n}\n\n.fancybox-button[disabled], .fancybox-button[disabled]:hover {\n  color: #888;\n  cursor: default;\n  outline: none;\n}\n\n.fancybox-button div {\n  height: 100%;\n}\n\n.fancybox-button svg {\n  display: block;\n  height: 100%;\n  overflow: visible;\n  position: relative;\n  width: 100%;\n}\n\n.fancybox-button svg path {\n  fill: currentColor;\n  stroke-width: 0;\n}\n\n.fancybox-button--fsenter svg:nth-child(2), .fancybox-button--fsexit svg:nth-child(1), .fancybox-button--pause svg:nth-child(1), .fancybox-button--play svg:nth-child(2) {\n  display: none;\n}\n\n.fancybox-progress {\n  background: #ff5268;\n  height: 2px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 0;\n  transform-origin: 0;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  transition-timing-function: linear;\n  z-index: 99998;\n}\n\n.fancybox-close-small {\n  background: transparent;\n  border: 0;\n  border-radius: 0;\n  color: #ccc;\n  cursor: pointer;\n  opacity: 0.8;\n  padding: 8px;\n  position: absolute;\n  right: -12px;\n  top: -44px;\n  z-index: 401;\n}\n\n.fancybox-close-small:hover {\n  color: #fff;\n  opacity: 1;\n}\n\n.fancybox-slide--html .fancybox-close-small {\n  color: currentColor;\n  padding: 10px;\n  right: 0;\n  top: 0;\n}\n\n.fancybox-slide--image.fancybox-is-scaling .fancybox-content {\n  overflow: hidden;\n}\n\n.fancybox-is-scaling .fancybox-close-small, .fancybox-is-zoomable.fancybox-can-pan .fancybox-close-small {\n  display: none;\n}\n\n.fancybox-navigation .fancybox-button {\n  background-clip: content-box;\n  height: 100px;\n  opacity: 0;\n  position: absolute;\n  top: calc(50% - 50px);\n  width: 70px;\n}\n\n.fancybox-navigation .fancybox-button div {\n  padding: 7px;\n}\n\n.fancybox-navigation .fancybox-button--arrow_left {\n  left: 0;\n  padding: 31px 26px 31px 6px;\n}\n\n.fancybox-navigation .fancybox-button--arrow_right {\n  padding: 31px 6px 31px 26px;\n  right: 0;\n}\n\n.fancybox-caption {\n  bottom: 0;\n  color: #eee;\n  font-size: 14px;\n  font-weight: 400;\n  left: 0;\n  line-height: 1.5;\n  padding: 25px 44px;\n  right: 0;\n  text-align: center;\n  z-index: 99996;\n}\n\n.fancybox-caption:before {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAD6CAQAAADKSeXYAAAAYklEQVQoz42RwQ3AMAgDjfcfup8WoRykfBAK5mQHKSz5rbXJPis1hjiV3CIqgG0hLZPkVkA4p4x5oR1bVeDrdCLrW2Q0D5bcwY3TGMHbdw3mPRuOtaspYP1w//G1OIcW148H0DMCqI/3mMMAAAAASUVORK5CYII=);\n  background-repeat: repeat-x;\n  background-size: contain;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: -44px;\n  z-index: -1;\n}\n\n.fancybox-caption a, .fancybox-caption a:link, .fancybox-caption a:visited {\n  color: #ccc;\n  text-decoration: none;\n}\n\n.fancybox-caption a:hover {\n  color: #fff;\n  text-decoration: underline;\n}\n\n.fancybox-loading {\n  -webkit-animation: a 1s linear infinite;\n  animation: a 1s linear infinite;\n  background: transparent;\n  border: 4px solid #888;\n  border-bottom-color: #fff;\n  border-radius: 50%;\n  height: 50px;\n  left: 50%;\n  margin: -25px 0 0 -25px;\n  opacity: 0.7;\n  padding: 0;\n  position: absolute;\n  top: 50%;\n  width: 50px;\n  z-index: 99999;\n}\n\n@-webkit-keyframes a {\n  to {\n    -webkit-transform: rotate(1turn);\n    transform: rotate(1turn);\n  }\n}\n@keyframes a {\n  to {\n    -webkit-transform: rotate(1turn);\n    transform: rotate(1turn);\n  }\n}\n.fancybox-animated {\n  transition-timing-function: cubic-bezier(0, 0, 0.25, 1);\n}\n\n.fancybox-fx-slide.fancybox-slide--previous {\n  opacity: 0;\n  -webkit-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0);\n}\n\n.fancybox-fx-slide.fancybox-slide--next {\n  opacity: 0;\n  -webkit-transform: translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0);\n}\n\n.fancybox-fx-slide.fancybox-slide--current {\n  opacity: 1;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n\n.fancybox-fx-fade.fancybox-slide--next, .fancybox-fx-fade.fancybox-slide--previous {\n  opacity: 0;\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n}\n\n.fancybox-fx-fade.fancybox-slide--current {\n  opacity: 1;\n}\n\n.fancybox-fx-zoom-in-out.fancybox-slide--previous {\n  opacity: 0;\n  -webkit-transform: scale3d(1.5, 1.5, 1.5);\n  transform: scale3d(1.5, 1.5, 1.5);\n}\n\n.fancybox-fx-zoom-in-out.fancybox-slide--next {\n  opacity: 0;\n  -webkit-transform: scale3d(0.5, 0.5, 0.5);\n  transform: scale3d(0.5, 0.5, 0.5);\n}\n\n.fancybox-fx-zoom-in-out.fancybox-slide--current {\n  opacity: 1;\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n}\n\n.fancybox-fx-rotate.fancybox-slide--previous {\n  opacity: 0;\n  -webkit-transform: rotate(-1turn);\n  transform: rotate(-1turn);\n}\n\n.fancybox-fx-rotate.fancybox-slide--next {\n  opacity: 0;\n  -webkit-transform: rotate(1turn);\n  transform: rotate(1turn);\n}\n\n.fancybox-fx-rotate.fancybox-slide--current {\n  opacity: 1;\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n}\n\n.fancybox-fx-circular.fancybox-slide--previous {\n  opacity: 0;\n  -webkit-transform: scale3d(0, 0, 0) translate3d(-100%, 0, 0);\n  transform: scale3d(0, 0, 0) translate3d(-100%, 0, 0);\n}\n\n.fancybox-fx-circular.fancybox-slide--next {\n  opacity: 0;\n  -webkit-transform: scale3d(0, 0, 0) translate3d(100%, 0, 0);\n  transform: scale3d(0, 0, 0) translate3d(100%, 0, 0);\n}\n\n.fancybox-fx-circular.fancybox-slide--current {\n  opacity: 1;\n  -webkit-transform: scaleX(1) translateZ(0);\n  transform: scaleX(1) translateZ(0);\n}\n\n.fancybox-fx-tube.fancybox-slide--previous {\n  -webkit-transform: translate3d(-100%, 0, 0) scale(0.1) skew(-10deg);\n  transform: translate3d(-100%, 0, 0) scale(0.1) skew(-10deg);\n}\n\n.fancybox-fx-tube.fancybox-slide--next {\n  -webkit-transform: translate3d(100%, 0, 0) scale(0.1) skew(10deg);\n  transform: translate3d(100%, 0, 0) scale(0.1) skew(10deg);\n}\n\n.fancybox-fx-tube.fancybox-slide--current {\n  -webkit-transform: translateZ(0) scale(1);\n  transform: translateZ(0) scale(1);\n}\n\n@media (max-height: 576px) {\n  .fancybox-caption {\n    padding: 12px;\n  }\n  .fancybox-slide {\n    padding-left: 6px;\n    padding-right: 6px;\n  }\n  .fancybox-slide--image {\n    padding: 6px 0;\n  }\n  .fancybox-close-small {\n    right: -6px;\n  }\n  .fancybox-slide--image .fancybox-close-small {\n    background: #4e4e4e;\n    color: #f2f4f6;\n    height: 36px;\n    opacity: 1;\n    padding: 6px;\n    right: 0;\n    top: 0;\n    width: 36px;\n  }\n}\n.fancybox-share {\n  background: #f4f4f4;\n  border-radius: 3px;\n  max-width: 90%;\n  padding: 30px;\n  text-align: center;\n}\n\n.fancybox-share h1 {\n  color: #222;\n  font-size: 35px;\n  font-weight: 700;\n  margin: 0 0 20px;\n}\n\n.fancybox-share p {\n  margin: 0;\n  padding: 0;\n}\n\n.fancybox-share__button {\n  border: 0;\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 40px;\n  margin: 0 5px 10px;\n  min-width: 130px;\n  padding: 0 15px;\n  text-decoration: none;\n  transition: all 0.2s;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n}\n\n.fancybox-share__button:link, .fancybox-share__button:visited {\n  color: #fff;\n}\n\n.fancybox-share__button:hover {\n  text-decoration: none;\n}\n\n.fancybox-share__button--fb {\n  background: #3b5998;\n}\n\n.fancybox-share__button--fb:hover {\n  background: #344e86;\n}\n\n.fancybox-share__button--pt {\n  background: #bd081d;\n}\n\n.fancybox-share__button--pt:hover {\n  background: #aa0719;\n}\n\n.fancybox-share__button--tw {\n  background: #1da1f2;\n}\n\n.fancybox-share__button--tw:hover {\n  background: #0d95e8;\n}\n\n.fancybox-share__button svg {\n  height: 25px;\n  margin-right: 7px;\n  position: relative;\n  top: -1px;\n  vertical-align: middle;\n  width: 25px;\n}\n\n.fancybox-share__button svg path {\n  fill: #fff;\n}\n\n.fancybox-share__input {\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #d7d7d7;\n  border-radius: 0;\n  color: #5d5b5b;\n  font-size: 14px;\n  margin: 10px 0 0;\n  outline: none;\n  padding: 10px 15px;\n  width: 100%;\n}\n\n.fancybox-thumbs {\n  background: #ddd;\n  bottom: 0;\n  display: none;\n  margin: 0;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  padding: 2px 2px 4px;\n  position: absolute;\n  right: 0;\n  -webkit-tap-highlight-color: transparent;\n  top: 0;\n  width: 212px;\n  z-index: 99995;\n}\n\n.fancybox-thumbs-x {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.fancybox-show-thumbs .fancybox-thumbs {\n  display: block;\n}\n\n.fancybox-show-thumbs .fancybox-inner {\n  right: 212px;\n}\n\n.fancybox-thumbs__list {\n  font-size: 0;\n  height: 100%;\n  list-style: none;\n  margin: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 0;\n  position: absolute;\n  position: relative;\n  white-space: nowrap;\n  width: 100%;\n}\n\n.fancybox-thumbs-x .fancybox-thumbs__list {\n  overflow: hidden;\n}\n\n.fancybox-thumbs-y .fancybox-thumbs__list::-webkit-scrollbar {\n  width: 7px;\n}\n\n.fancybox-thumbs-y .fancybox-thumbs__list::-webkit-scrollbar-track {\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n\n.fancybox-thumbs-y .fancybox-thumbs__list::-webkit-scrollbar-thumb {\n  background: #2a2a2a;\n  border-radius: 10px;\n}\n\n.fancybox-thumbs__list a {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  background-color: rgba(0, 0, 0, 0.1);\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  cursor: pointer;\n  float: left;\n  height: 75px;\n  margin: 2px;\n  max-height: calc(100% - 8px);\n  max-width: calc(50% - 4px);\n  outline: none;\n  overflow: hidden;\n  padding: 0;\n  position: relative;\n  -webkit-tap-highlight-color: transparent;\n  width: 100px;\n}\n\n.fancybox-thumbs__list a:before {\n  border: 6px solid #ff5268;\n  bottom: 0;\n  content: \"\";\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  z-index: 99991;\n}\n\n.fancybox-thumbs__list a:focus:before {\n  opacity: 0.5;\n}\n\n.fancybox-thumbs__list a.fancybox-thumbs-active:before {\n  opacity: 1;\n}\n\n@media (max-width: 576px) {\n  .fancybox-thumbs {\n    width: 110px;\n  }\n  .fancybox-show-thumbs .fancybox-inner {\n    right: 110px;\n  }\n  .fancybox-thumbs__list a {\n    max-width: calc(100% - 10px);\n  }\n}\n");

/***/ }),

/***/ "./scripts/button/button-button.mjs":
/*!******************************************!*\
  !*** ./scripts/button/button-button.mjs ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": function() { return /* binding */ Button; },
/* harmony export */   "ButtonWidgetTypes": function() { return /* binding */ ButtonWidgetTypes; }
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var htm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! htm */ "./node_modules/htm/dist/htm.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}




// Initialize htm with Preact
var html = htm__WEBPACK_IMPORTED_MODULE_1__["default"].bind(preact__WEBPACK_IMPORTED_MODULE_0__.h);
var ButtonWidgetTypes = {
  INLINE: 0,
  STICKY: 1
};
var ButtonWidgetPositions = {
  STICKY_RIGHT: 0,
  STICKY_LEFT: 1
};
var Button = function Button(props) {
  var _data$btnText;
  var data = props.buttonProps.data,
    ctrl = props.ctrl;
  var onStopPropagation = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (e) {
    e.stopPropagation();
  });
  var onWidgetForm = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (e) {
    var _ctrl$state, _ctrl$state2, _props$buttonProps;
    if (!(ctrl !== null && ctrl !== void 0 && (_ctrl$state = ctrl.state) !== null && _ctrl$state !== void 0 && _ctrl$state.form) && !(ctrl !== null && ctrl !== void 0 && (_ctrl$state2 = ctrl.state) !== null && _ctrl$state2 !== void 0 && _ctrl$state2.commercialForm)) {
      alert('Вызов виджета формы недоступен!');
    } else if ((props === null || props === void 0 ? void 0 : (_props$buttonProps = props.buttonProps) === null || _props$buttonProps === void 0 ? void 0 : _props$buttonProps.test) === 1) {
      alert('Вызов виджета формы недоступен в тестовом режиме!');
    } else {
      if (ctrl.needPlatform()) {
        ctrl.goToPlatform();
      } else {
        ctrl.setState({
          showModal: true
        });
      }
    }
  });
  var btnHoverClass = function btnHoverClass() {
    var _data$btnStyle, _data$btnStyle2;
    return ((_data$btnStyle = data.btnStyle) === null || _data$btnStyle === void 0 ? void 0 : _data$btnStyle.hoverVariant) > 0 ? 'btn' + ((_data$btnStyle2 = data.btnStyle) === null || _data$btnStyle2 === void 0 ? void 0 : _data$btnStyle2.hoverVariant) : '';
  };
  var btnMobileSizeClass = function btnMobileSizeClass() {
    return data.btnStyle.size >= 15 ? 'btn-mobile-sm' : '';
  };
  var typeClass = function typeClass(ctrl, data) {
    var _ctrl$props, _ctrl$props$buttonPro;
    if (((_ctrl$props = ctrl.props) === null || _ctrl$props === void 0 ? void 0 : (_ctrl$props$buttonPro = _ctrl$props.buttonProps) === null || _ctrl$props$buttonPro === void 0 ? void 0 : _ctrl$props$buttonPro.type) == ButtonWidgetTypes.STICKY) {
      var _ctrl$props2, _ctrl$props2$buttonPr, _data$btnStyle3;
      var mainClass = ((_ctrl$props2 = ctrl.props) === null || _ctrl$props2 === void 0 ? void 0 : (_ctrl$props2$buttonPr = _ctrl$props2.buttonProps) === null || _ctrl$props2$buttonPr === void 0 ? void 0 : _ctrl$props2$buttonPr.test) == 1 ? 'btn-absolute' : 'btn-fixed';
      return mainClass + ' ' + (((_data$btnStyle3 = data.btnStyle) === null || _data$btnStyle3 === void 0 ? void 0 : _data$btnStyle3.position) == ButtonWidgetPositions.STICKY_LEFT ? 'sticky-left' : 'sticky-right');
    }
    return "";
  };

  //Выбор метки от типа фонда
  var fundTypeLabel = function fundTypeLabel(commercialLabel, defaultLabel) {
    return ctrl.state.commercialForm ? commercialLabel : defaultLabel;
  };
  var btnTextCorrector = function btnTextCorrector(text) {
    var transformedMap = {
      "❤": "icon-rotate",
      "⭐": "icon-rotate"
    };
    var transformedTextArray = [];
    var _iterator = _createForOfIteratorHelper(text || ""),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var char = _step.value;
        var modifierClass = transformedMap[char];
        if (modifierClass) {
          transformedTextArray.push((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
            class: modifierClass
          }, [char]));
        } else {
          transformedTextArray.push(char);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return transformedTextArray.length ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
      class: "text-transformed"
    }, transformedTextArray) : fundTypeLabel("ЗАКАЗАТЬ", "ПОМОЧЬ");
  };
  var vdom = html(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        <div class=\"d7button ", "\" onMousedown=", ">\n            <div class=\"button__item\">\n                <div class=\"text-center\">\n                    <div class=\"btn btn-open-modal ", " ", "\"\n                         onclick=", "\n                    >\n                        ", "\n                    </div>\n                </div>\n            </div>\n        </div>\n    "])), typeClass(ctrl, data), onStopPropagation, btnHoverClass(), btnMobileSizeClass(), onWidgetForm, btnTextCorrector((_data$btnText = data.btnText) === null || _data$btnText === void 0 ? void 0 : _data$btnText.trim()));
  return vdom;
};

/***/ }),

/***/ "./scripts/button/api.mjs":
/*!********************************!*\
  !*** ./scripts/button/api.mjs ***!
  \********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Api": function() { return /* binding */ Api; },
/* harmony export */   "getApiClient": function() { return /* binding */ getApiClient; }
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.mjs */ "./scripts/constants.mjs");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var _ref$apiHost = _ref.apiHost,
      apiHost = _ref$apiHost === void 0 ? null : _ref$apiHost;
    _classCallCheck(this, Api);
    this.apiHost = null;
    this.apiHost = apiHost;
    //var { apiHost = null } = config;
  }
  _createClass(Api, [{
    key: "getApiHost",
    value: function getApiHost() {
      return this.apiHost || "https://".concat(_constants_mjs__WEBPACK_IMPORTED_MODULE_0__.d7domain);
    }
  }]);
  return Api;
}();
function getApiClient(config) {
  return new Api(config);
}
;

/***/ }),

/***/ "./scripts/button/button-form.mjs":
/*!****************************************!*\
  !*** ./scripts/button/button-form.mjs ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonForm": function() { return /* binding */ ButtonForm; }
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var htm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! htm */ "./node_modules/htm/dist/htm.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.mjs */ "./scripts/constants.mjs");
/* harmony import */ var _button_button_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button-button.mjs */ "./scripts/button/button-button.mjs");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






// Initialize htm with Preact
var html = htm__WEBPACK_IMPORTED_MODULE_1__["default"].bind(preact__WEBPACK_IMPORTED_MODULE_0__.h);
var ButtonForm = function ButtonForm(props) {
  var data = props.buttonProps.data,
    ctrl = props.ctrl;
  var onStopPropagation = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (e) {
    e.stopPropagation();
  });
  var scriptUrl = function scriptUrl() {
    var _ctrl$props, _ctrl$props$options, _buttonProps$data, _ctrl$state, _ctrl$state3;
    var buttonProps = props.buttonProps;
    var widgetsHost = ctrl === null || ctrl === void 0 ? void 0 : (_ctrl$props = ctrl.props) === null || _ctrl$props === void 0 ? void 0 : (_ctrl$props$options = _ctrl$props.options) === null || _ctrl$props$options === void 0 ? void 0 : _ctrl$props$options.widgetsHost;
    if (widgetsHost && widgetsHost[widgetsHost.length - 1] === '/') {
      widgetsHost = widgetsHost.substr(0, widgetsHost.length - 1);
    }
    var parentType = function parentType() {
      var _ctrl$props2, _ctrl$props2$buttonPr;
      return ((_ctrl$props2 = ctrl.props) === null || _ctrl$props2 === void 0 ? void 0 : (_ctrl$props2$buttonPr = _ctrl$props2.buttonProps) === null || _ctrl$props2$buttonPr === void 0 ? void 0 : _ctrl$props2$buttonPr.type) === _button_button_mjs__WEBPACK_IMPORTED_MODULE_4__.ButtonWidgetTypes.STICKY ? _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.WidgetFundraisingProduct.STICKY_BUTTON : _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.WidgetFundraisingProduct.BUTTON;
    };
    var tail = buttonProps !== null && buttonProps !== void 0 && (_buttonProps$data = buttonProps.data) !== null && _buttonProps$data !== void 0 && _buttonProps$data.recurrent ? '&recurrent_payment=1' : '';
    tail = tail + (ctrl !== null && ctrl !== void 0 && ctrl.state.amount ? "&defaultSum=".concat(ctrl === null || ctrl === void 0 ? void 0 : ctrl.state.amount) : '');
    var tid = buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.target_id;
    var sid = buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.sid;
    var parentTypeValue = parentType();
    if (ctrl !== null && ctrl !== void 0 && (_ctrl$state = ctrl.state) !== null && _ctrl$state !== void 0 && _ctrl$state.form) {
      var _ctrl$state2, _ctrl$state2$form;
      return "".concat(widgetsHost, "/forms/").concat(ctrl === null || ctrl === void 0 ? void 0 : (_ctrl$state2 = ctrl.state) === null || _ctrl$state2 === void 0 ? void 0 : (_ctrl$state2$form = _ctrl$state2.form) === null || _ctrl$state2$form === void 0 ? void 0 : _ctrl$state2$form.sid, "/form.js?tid=").concat(tid, "&parentSid=").concat(sid, "&parentType=").concat(parentTypeValue).concat(tail);
    } else if (ctrl !== null && ctrl !== void 0 && (_ctrl$state3 = ctrl.state) !== null && _ctrl$state3 !== void 0 && _ctrl$state3.commercialForm) {
      var _ctrl$state4, _ctrl$state4$commerci;
      return "".concat(widgetsHost, "/cForms/").concat(ctrl === null || ctrl === void 0 ? void 0 : (_ctrl$state4 = ctrl.state) === null || _ctrl$state4 === void 0 ? void 0 : (_ctrl$state4$commerci = _ctrl$state4.commercialForm) === null || _ctrl$state4$commerci === void 0 ? void 0 : _ctrl$state4$commerci.sid, "/cForm.js?tid=").concat(tid, "&parentSid=").concat(sid, "&parentType=").concat(parentTypeValue).concat(tail);
    }
  };
  var onHideWidgetForm = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (e) {
    ctrl.setState({
      showModal: false
    });

    //Удаляем подчинённые виджеты
    var elms = document.querySelectorAll("[src='" + scriptUrl() + "']");
    for (var i = 0; i < elms.length; i++) {
      var el = elms[i];
      el.remove();
    }
  });

  //Добавляем подчинённый виджет
  var childWidgetForm = document.createElement('script');
  childWidgetForm.src = scriptUrl();
  childWidgetForm.async = true;
  document.body.appendChild(childWidgetForm);
  var vdom = html(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        <div class='modal-wrapper' onMousedown=", ">\n            <div class=\"close-container\">\n                <i class=\"close-icon\" onclick=", "></i>\n            </div>\n            <div class=\"modal-container\">\n                <div class=\"modal-content\">\n                    <div id=\"widget-form-container\">\n                        <div class=\"loader\">\n                            <div class=\"theme_xbox_lg\">\n                                <div class=\"pace_progress\"></div>\n                                <div class=\"pace_activity\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "])), onStopPropagation, onHideWidgetForm);
  return vdom;
};

/***/ }),

/***/ "./scripts/button/button-widgets.mjs":
/*!*******************************************!*\
  !*** ./scripts/button/button-widgets.mjs ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CssCustom": function() { return /* binding */ CssCustom; },
/* harmony export */   "CssStatic": function() { return /* binding */ CssStatic; },
/* harmony export */   "CssVars": function() { return /* binding */ CssVars; }
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var htm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! htm */ "./node_modules/htm/dist/htm.module.js");
/* harmony import */ var _build_scripts_button_style_styles_css_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../build/scripts/button/style/styles.css.mjs */ "./build/scripts/button/style/styles.css.mjs");




// Initialize htm with Preact
var html = htm__WEBPACK_IMPORTED_MODULE_1__["default"].bind(preact__WEBPACK_IMPORTED_MODULE_0__.h);
var CssVars = function CssVars(_ref) {
  var _data$btnStyle, _data$btnStyle2, _data$btnStyle3, _data$btnStyle4, _data$btnStyle5, _data$btnStyle6, _data$btnStyle7;
  var data = _ref.data;
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)('span', {
    children: [(0,preact__WEBPACK_IMPORTED_MODULE_0__.h)('style', {
      key: 'vars',
      children: "\n.d7button {\n    --d7button-btn-color: ".concat(((_data$btnStyle = data.btnStyle) === null || _data$btnStyle === void 0 ? void 0 : _data$btnStyle.color) || '#FFFFFF', ";\n    --d7button-btn-back-color: ").concat(((_data$btnStyle2 = data.btnStyle) === null || _data$btnStyle2 === void 0 ? void 0 : _data$btnStyle2.backColor) || '#bb0a62', ";\n    --d7button-btn-hover-color: ").concat(((_data$btnStyle3 = data.btnStyle) === null || _data$btnStyle3 === void 0 ? void 0 : _data$btnStyle3.hoverColor) || '#8f0a4c', ";\n    --d7button-btn-size: ").concat(((_data$btnStyle4 = data.btnStyle) === null || _data$btnStyle4 === void 0 ? void 0 : _data$btnStyle4.size) || 16, "px;\n    --d7button-btn-radius: ").concat((((_data$btnStyle5 = data.btnStyle) === null || _data$btnStyle5 === void 0 ? void 0 : _data$btnStyle5.radius) === 0 ? -100 : ((_data$btnStyle6 = data.btnStyle) === null || _data$btnStyle6 === void 0 ? void 0 : _data$btnStyle6.radius) || 2) / 100, ";\n    --d7button-loader-color: ").concat(((_data$btnStyle7 = data.btnStyle) === null || _data$btnStyle7 === void 0 ? void 0 : _data$btnStyle7.backColor) || '#bb0a62', ";\n}\n            ")
    })]
  });
};
var CssCustom = function CssCustom(_ref2) {
  var data = _ref2.data;
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)('style', {
    children: "".concat(data.css)
  });
};
var CssStatic = function CssStatic() {
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)('style', {
    children: _build_scripts_button_style_styles_css_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].toString()
  });
};

/***/ }),

/***/ "./scripts/constants.mjs":
/*!*******************************!*\
  !*** ./scripts/constants.mjs ***!
  \*******************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgreementPlacements": function() { return /* binding */ AgreementPlacements; },
/* harmony export */   "AvailablePaymentMethods": function() { return /* binding */ AvailablePaymentMethods; },
/* harmony export */   "DntnVisitsDataIdKey": function() { return /* binding */ DntnVisitsDataIdKey; },
/* harmony export */   "FUNDRAISING_PRODUCT_BY_SOURCE": function() { return /* binding */ FUNDRAISING_PRODUCT_BY_SOURCE; },
/* harmony export */   "FailDonationInfoKey": function() { return /* binding */ FailDonationInfoKey; },
/* harmony export */   "FieldRepeatVariants": function() { return /* binding */ FieldRepeatVariants; },
/* harmony export */   "FieldStates": function() { return /* binding */ FieldStates; },
/* harmony export */   "FieldSumBadgesSortVariants": function() { return /* binding */ FieldSumBadgesSortVariants; },
/* harmony export */   "FieldSumVariants": function() { return /* binding */ FieldSumVariants; },
/* harmony export */   "FormMode": function() { return /* binding */ FormMode; },
/* harmony export */   "FormWidgetThemes": function() { return /* binding */ FormWidgetThemes; },
/* harmony export */   "FundTypes": function() { return /* binding */ FundTypes; },
/* harmony export */   "InfoBlockTypes": function() { return /* binding */ InfoBlockTypes; },
/* harmony export */   "InfoblockAlternativeContainerAttribute": function() { return /* binding */ InfoblockAlternativeContainerAttribute; },
/* harmony export */   "MobileOperators": function() { return /* binding */ MobileOperators; },
/* harmony export */   "MxRequestMerchantFields": function() { return /* binding */ MxRequestMerchantFields; },
/* harmony export */   "OnSiteParam": function() { return /* binding */ OnSiteParam; },
/* harmony export */   "PayDataParamName": function() { return /* binding */ PayDataParamName; },
/* harmony export */   "PayStatusParamName": function() { return /* binding */ PayStatusParamName; },
/* harmony export */   "PayStatusValues": function() { return /* binding */ PayStatusValues; },
/* harmony export */   "PaymentMethod": function() { return /* binding */ PaymentMethod; },
/* harmony export */   "ProjectOperators": function() { return /* binding */ ProjectOperators; },
/* harmony export */   "RejectDonationInfoKey": function() { return /* binding */ RejectDonationInfoKey; },
/* harmony export */   "ScriptUrlParams": function() { return /* binding */ ScriptUrlParams; },
/* harmony export */   "SourceConsts": function() { return /* binding */ SourceConsts; },
/* harmony export */   "SuccessDonationAmountsKey": function() { return /* binding */ SuccessDonationAmountsKey; },
/* harmony export */   "TargetType": function() { return /* binding */ TargetType; },
/* harmony export */   "TargetTypes": function() { return /* binding */ TargetTypes; },
/* harmony export */   "WidgetFundraisingProduct": function() { return /* binding */ WidgetFundraisingProduct; },
/* harmony export */   "WidgetFundraisingProductID": function() { return /* binding */ WidgetFundraisingProductID; },
/* harmony export */   "WidgetVisitDateKey": function() { return /* binding */ WidgetVisitDateKey; },
/* harmony export */   "d7domain": function() { return /* binding */ d7domain; },
/* harmony export */   "donationHost": function() { return /* binding */ donationHost; },
/* harmony export */   "fancyBoxSrc": function() { return /* binding */ fancyBoxSrc; },
/* harmony export */   "formInitialRequestTimeout": function() { return /* binding */ formInitialRequestTimeout; },
/* harmony export */   "iframeToParentCallbackType": function() { return /* binding */ iframeToParentCallbackType; },
/* harmony export */   "jquerySrc": function() { return /* binding */ jquerySrc; },
/* harmony export */   "productExportName": function() { return /* binding */ productExportName; },
/* harmony export */   "proxyMixplatEvents": function() { return /* binding */ proxyMixplatEvents; },
/* harmony export */   "yaMetrikaGoals": function() { return /* binding */ yaMetrikaGoals; }
/* harmony export */ });
var _WidgetFundraisingPro, _productExportName, _FUNDRAISING_PRODUCT_;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var d7domain = 'donation.ru';
var InfoblockAlternativeContainerAttribute = 'data-leyka-mixplat-infoblock';
var WidgetFundraisingProduct = {
  WIDGET: 'donation_widget',
  PAGE: 'donation_page',
  FORM: 'donation_form',
  NATIVE_FORM: 'donation_native',
  COMMERCIAL_FORM: 'commercial_form',
  STICKER: 'donation_sticker',
  STICKY_BUTTON: 'donation_bookmark',
  REMINDER: 'donation_reminder',
  SLIDER: 'donation_slider',
  BUTTON: 'donation_button',
  STAT_LIST: 'donation_list',
  STAT_PROGRESSBAR: 'donation_progressbar',
  INFO_BLOCK: 'donation_info_block'
};
var WidgetFundraisingProductID = (_WidgetFundraisingPro = {}, _defineProperty(_WidgetFundraisingPro, WidgetFundraisingProduct.WIDGET, 15), _defineProperty(_WidgetFundraisingPro, WidgetFundraisingProduct.PAGE, 16), _defineProperty(_WidgetFundraisingPro, WidgetFundraisingProduct.FORM, 2), _defineProperty(_WidgetFundraisingPro, WidgetFundraisingProduct.COMMERCIAL_FORM, 18), _defineProperty(_WidgetFundraisingPro, WidgetFundraisingProduct.NATIVE_FORM, 3), _defineProperty(_WidgetFundraisingPro, WidgetFundraisingProduct.STICKER, 12), _defineProperty(_WidgetFundraisingPro, WidgetFundraisingProduct.STICKY_BUTTON, 5), _defineProperty(_WidgetFundraisingPro, WidgetFundraisingProduct.REMINDER, 9), _defineProperty(_WidgetFundraisingPro, WidgetFundraisingProduct.SLIDER, 10), _defineProperty(_WidgetFundraisingPro, WidgetFundraisingProduct.BUTTON, 4), _defineProperty(_WidgetFundraisingPro, WidgetFundraisingProduct.STAT_LIST, 17), _defineProperty(_WidgetFundraisingPro, WidgetFundraisingProduct.STAT_PROGRESSBAR, 1), _defineProperty(_WidgetFundraisingPro, WidgetFundraisingProduct.INFO_BLOCK, 6), _WidgetFundraisingPro);
var productExportName = (_productExportName = {}, _defineProperty(_productExportName, WidgetFundraisingProduct.BUTTON, WidgetFundraisingProduct.BUTTON), _defineProperty(_productExportName, WidgetFundraisingProduct.REMINDER, WidgetFundraisingProduct.REMINDER), _defineProperty(_productExportName, WidgetFundraisingProduct.SLIDER, WidgetFundraisingProduct.SLIDER), _defineProperty(_productExportName, WidgetFundraisingProduct.STAT_LIST, WidgetFundraisingProduct.STAT_LIST), _defineProperty(_productExportName, WidgetFundraisingProduct.STAT_PROGRESSBAR, WidgetFundraisingProduct.STAT_PROGRESSBAR), _defineProperty(_productExportName, WidgetFundraisingProduct.STICKER, WidgetFundraisingProduct.STICKER), _defineProperty(_productExportName, WidgetFundraisingProduct.STICKY_BUTTON, WidgetFundraisingProduct.STICKY_BUTTON), _defineProperty(_productExportName, WidgetFundraisingProduct.FORM, WidgetFundraisingProduct.FORM), _defineProperty(_productExportName, WidgetFundraisingProduct.COMMERCIAL_FORM, WidgetFundraisingProduct.COMMERCIAL_FORM), _defineProperty(_productExportName, WidgetFundraisingProduct.INFO_BLOCK, WidgetFundraisingProduct.BUTTON), _productExportName);

//Список констант JS-событий Яндекс.Метрики
var yaMetrikaGoals = {
  FORM_SUBMIT: 'MX_WIDGET_FORM_SUBMIT'
};
var FieldStates = {
  allways: 1,
  never: 0,
  ifnone: 2
};
var AgreementPlacements = {
  BEFORE_SUBMIT: 0,
  END: 1
};
var iframeToParentCallbackType = 'iframeToParentCallback';
var proxyMixplatEvents = {
  INIT: 'proxyMixplatEventInit',
  FAIL: 'proxyMixplatEventFailure',
  SUCCESS: 'proxyMixplatEventSuccess'
};
var FundTypes = {
  NON_COMMERCIAL: 1,
  COMMERCIAL: 2,
  RELIGIOUS: 3
};
var FormMode = {
  form: 'form',
  success: 'success',
  fail: 'fail',
  mobile: 'mobile',
  requisites: 'requisites',
  installPrompt: 'installPrompt',
  helpdesk: 'helpdesk'
};
var TargetTypes = {
  MAIN: 0,
  PERSON: 1,
  PROJECT: 2,
  ACTION: 3
};
var InfoBlockTypes = {
  SEND_SMS: 1,
  CUSTOMER_INFORMATION: 2,
  FOUNDING_DOCUMENTS: 3,
  //Учредительный документы
  ACTIVITY_REPORTS: 4,
  DONATION_OFFER: 5,
  CONSENT_TO_PERSONAL_DATA_PROCESSING: 6,
  MANAGEMENT_OF_REGULAR_DONATIONS: 7,
  PAYMENT_SECURITY_TEXT: 8,
  MIXPLAT_PROCESSING_TEXT: 9,
  DESCRIPTION_OF_ACTIVITIES: 10,
  PROGRAM_DESCRIPTION: 11,
  PROGRAM_CARD: 12,
  PERSON_DESCRIPTION: 13,
  PERSON_CARD: 14,
  ACTION_DESCRIPTION: 15,
  ACTION_CARD: 16
};
var MobileOperators = {
  mts: 'mts',
  megafon: 'megafon',
  beeline: 'beeline',
  tele2: 'tele2',
  yota: 'yota',
  tinkoff: 'tinkoff'
};
var FieldSumVariants = {
  slider: 0,
  badges_2: 1,
  badges_3: 2,
  badges_4: 5,
  badges_5: 6,
  badges_6: 3,
  badges_7: 7,
  only_input: 4,
  sum_effects: 8,
  fixed_badge: 9,
  forced_input: 10
};
var FormWidgetThemes = {
  platform: 'platform'
};
var FieldSumBadgesSortVariants = {
  ASC: 'asc',
  DESC: 'desc'
};
var FieldRepeatVariants = {
  radio: 0,
  checkbox: 1,
  toggle: 2,
  heart: 3
};
var PayStatusValues = {
  success: 'success',
  fail: 'fail'
};
var PaymentMethod = {
  card: 'card',
  sbp: 'sbp',
  mobile: 'mobile',
  wallet: 'wallet',
  requisites: 'requisites',
  yandex_pay: 'yandex_pay',
  mir_pay: 'mir_pay',
  sberpay: 'sberpay',
  t_pay: 't_pay'
};
var AvailablePaymentMethods = [PaymentMethod.card, PaymentMethod.sbp, PaymentMethod.sberpay, PaymentMethod.t_pay, PaymentMethod.mobile, PaymentMethod.yandex_pay, PaymentMethod.mir_pay, PaymentMethod.requisites];
var ProjectOperators = {
  SBP: 62,
  SBER_PAY: 20,
  T_PAY: 104
};
var PayStatusParamName = 'mx_status';
var PayDataParamName = 'mx_data';
var OnSiteParam = 'onsite';
var TargetType = {
  MAIN: 0,
  PERSON: 1,
  PROJECT: 2
};
var SourceConsts = {
  SOURCE_WIDGET: 'widget',
  SOURCE_QR: 'qr',
  SOURCE_FRAME: 'frame',
  SOURCE_VK: 'vk',
  SOURCE_QRSTICKER: 'qrsticker',
  SOURCE_DOBILLING: 'd',
  SOURCE_CP: 'cp',
  SOURCE_FORM: 'form',
  SOURCE_PRODUCT_LANDING: 'Страница пожертвований',
  SOURCE_PRODUCT_QR: 'QR-код',
  SOURCE_PRODUCT_WIDGET: 'Виджет благотворительности',
  SOURCE_PRODUCT_QRSTICKER: 'Стикеры "Помочь Просто"',
  SOURCE_PRODUCT_DOBILLING: 'Добиллинг картами',
  SOURCE_PRODUCT_CP: 'CP proxy',
  SOURCE_PRODUCT_FORM: 'Форма благотворительности'
};
var FUNDRAISING_PRODUCT_BY_SOURCE = (_FUNDRAISING_PRODUCT_ = {}, _defineProperty(_FUNDRAISING_PRODUCT_, SourceConsts.SOURCE_QR, SourceConsts.SOURCE_PRODUCT_QR), _defineProperty(_FUNDRAISING_PRODUCT_, SourceConsts.SOURCE_WIDGET, SourceConsts.SOURCE_PRODUCT_WIDGET), _defineProperty(_FUNDRAISING_PRODUCT_, SourceConsts.SOURCE_QRSTICKER, SourceConsts.SOURCE_PRODUCT_QRSTICKER), _defineProperty(_FUNDRAISING_PRODUCT_, SourceConsts.SOURCE_DOBILLING, SourceConsts.SOURCE_PRODUCT_DOBILLING), _defineProperty(_FUNDRAISING_PRODUCT_, SourceConsts.SOURCE_CP, SourceConsts.SOURCE_PRODUCT_CP), _FUNDRAISING_PRODUCT_);
var MxRequestMerchantFields = {
  prefix: 'user_',
  utm_medium: 'utm_medium',
  utm_source: 'utm_source',
  utm_campaign: 'utm_campaign',
  utm_term: 'utm_term',
  utm_content: 'utm_content',
  terminal_sn: 'terminal_sn',
  terminal_address: 'terminal_address',
  fundraising_product: 'fundraising_product',
  fundraising_program: 'fundraising_program',
  fundraising_program_id: 'fundraising_program_id',
  charity_page_id: 'charity_page_id',
  fundraising_sticker_id: 'fundraising_sticker_id'
};
var ScriptUrlParams = {
  tid: 'tid'
};
var WidgetVisitDateKey = 'DonationWidgetVisitDate';
var DntnVisitsDataIdKey = 'DntnVisitsDataId';
var SuccessDonationAmountsKey = 'SuccessDonationAmounts';
var FailDonationInfoKey = 'DntnFailDonationInfo';
var RejectDonationInfoKey = 'DntnRejectDonationInfo';
var fancyBoxSrc = 'https://file.donation.ru:4443/assets/target/js/fancybox.js?v=1654945513';
var jquerySrc = 'https://file.donation.ru:4443/assets/jquery/jquery.js?v=1588632646';

//Кол-во миллисекунд для ожидания инициализационного запроса на форме, после которого UI убирает лаадер, а сам запрос продолжает ожидаться в фоне
var formInitialRequestTimeout = 3000;
var donationHost = 'https://www.donation.ru';

/***/ }),

/***/ "./scripts/form/form-utils.mjs":
/*!*************************************!*\
  !*** ./scripts/form/form-utils.mjs ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterMerchantFields": function() { return /* binding */ filterMerchantFields; },
/* harmony export */   "filterUtmFields": function() { return /* binding */ filterUtmFields; },
/* harmony export */   "getUtmFromLocalStorage": function() { return /* binding */ getUtmFromLocalStorage; },
/* harmony export */   "setDefaultQueryParams": function() { return /* binding */ setDefaultQueryParams; }
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.mjs */ "./scripts/constants.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
//import 'core-js/es/object/entries'; // @todo import polyfills
//import 'core-js/es/object/from-entries';



/*
export function setDefaultQueryParams(query) {
    var source = query.source || '';
    if (query[MxRequestMerchantFields.fundraising_product] ?? null) {
        return query;
    }
    var fp = FUNDRAISING_PRODUCT_BY_SOURCE[source] ?? null;
    if (!fp) {
        // check widget params
        if (query.sum) {
            fp = SourceConsts.SOURCE_WIDGET;
        }
    }
    if (!fp) {
        fp = SourceConsts.SOURCE_PRODUCT_LANDING;
    }
    if (fp) {
        query[MxRequestMerchantFields.fundraising_product] = fp;
    }
    return query;
}
*/

function setDefaultQueryParams(query) {
  var _query$MxRequestMerch, _FUNDRAISING_PRODUCT_;
  var source = query.source || '';
  if ((_query$MxRequestMerch = query[_constants_mjs__WEBPACK_IMPORTED_MODULE_0__.MxRequestMerchantFields.fundraising_product]) !== null && _query$MxRequestMerch !== void 0 ? _query$MxRequestMerch : null) {
    return query;
  }
  var fp = (_FUNDRAISING_PRODUCT_ = _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.FUNDRAISING_PRODUCT_BY_SOURCE[source]) !== null && _FUNDRAISING_PRODUCT_ !== void 0 ? _FUNDRAISING_PRODUCT_ : null;
  if (!fp) {
    fp = _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.SourceConsts.SOURCE_PRODUCT_WIDGET;
  }
  if (fp) {
    query[_constants_mjs__WEBPACK_IMPORTED_MODULE_0__.MxRequestMerchantFields.fundraising_product] = fp;
  }
  return query;
}

/**
 * @param {object} query 
 * @param {string} prefix 
 */
function filterMerchantFields(query) {
  var fs = _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.MxRequestMerchantFields;
  var allowed = [fs.utm_medium, fs.utm_source, fs.utm_campaign, fs.utm_term, fs.utm_content, fs.terminal_sn, fs.terminal_address, fs.fundraising_product, fs.fundraising_program, fs.fundraising_sticker_id];
  var entries = Object.entries(query).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      prop = _ref2[0];
    return allowed.indexOf(prop) >= 0;
  });
  return Object.fromEntries(entries);
}

/**
 * @param {object} query
 * @param {boolean} useWloaderData
 */
function filterUtmFields(query) {
  var useWloaderData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var fs = _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.MxRequestMerchantFields;
  var allowed = [fs.utm_source, fs.utm_medium, fs.utm_campaign, fs.utm_term, fs.utm_content];

  // Фильтруем query по разрешенным полям
  var utmLabels = Object.fromEntries(Object.entries(query).filter(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
      prop = _ref4[0];
    return allowed.includes(prop);
  }));

  // Если utmLabels пуст, пробуем получить из localStorage
  if (Object.keys(utmLabels).length === 0 && useWloaderData) {
    utmLabels = getUtmFromLocalStorage() || {};
  }
  return utmLabels;
}

// utm-метки из данных wloader
function getUtmFromLocalStorage() {
  // Проверяем наличие данных
  if (!window.wloaderLocalStorageData || _typeof(window.wloaderLocalStorageData) !== 'object') {
    return null;
  }
  var storageData = window.wloaderLocalStorageData;
  var now = new Date();
  var fortyEightHoursAgo = now.getTime() - 48 * 60 * 60 * 1000;
  var utmFields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  var freshUtmLabels = {};
  utmFields.forEach(function (field) {
    var value = storageData[field];
    var timestamp = storageData["".concat(field, "_timestamp")];
    if (value && timestamp) {
      // Используем Date.parse() для более надежного парсинга
      var timestampDate = new Date(timestamp.replace(' ', 'T'));
      if (!isNaN(timestampDate) && timestampDate.getTime() > fortyEightHoursAgo) {
        freshUtmLabels[field] = value;
      }
    }
  });
  return Object.keys(freshUtmLabels).length > 0 ? freshUtmLabels : null;
}

/***/ }),

/***/ "./scripts/infoBlock/infoBlock-assets.mjs":
/*!************************************************!*\
  !*** ./scripts/infoBlock/infoBlock-assets.mjs ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataUrl": function() { return /* binding */ dataUrl; },
/* harmony export */   "fancyboxCss": function() { return /* reexport safe */ _build_scripts_infoBlock_style_fancybox_css_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "imgPhonePreview": function() { return /* reexport safe */ _build_scripts_infoBlock_assets_phonePreview_png_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "mimePng": function() { return /* binding */ mimePng; },
/* harmony export */   "mimeSvg": function() { return /* binding */ mimeSvg; },
/* harmony export */   "reportPreviewJpg": function() { return /* reexport safe */ _build_scripts_infoBlock_assets_jpg_svg_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "reportPreviewPdf": function() { return /* reexport safe */ _build_scripts_infoBlock_assets_pdf_svg_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]; }
/* harmony export */ });
/* harmony import */ var _build_scripts_infoBlock_assets_phonePreview_png_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../build/scripts/infoBlock/assets/phonePreview.png.mjs */ "./build/scripts/infoBlock/assets/phonePreview.png.mjs");
/* harmony import */ var _build_scripts_infoBlock_assets_pdf_svg_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../build/scripts/infoBlock/assets/pdf.svg.mjs */ "./build/scripts/infoBlock/assets/pdf.svg.mjs");
/* harmony import */ var _build_scripts_infoBlock_assets_jpg_svg_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../build/scripts/infoBlock/assets/jpg.svg.mjs */ "./build/scripts/infoBlock/assets/jpg.svg.mjs");
/* harmony import */ var _build_scripts_infoBlock_style_fancybox_css_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../build/scripts/infoBlock/style/fancybox.css.mjs */ "./build/scripts/infoBlock/style/fancybox.css.mjs");




var dataUrl = function dataUrl(data, mime) {
  var base64 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return "data:".concat(mime, ";base64,") + data;
};
var mimePng = 'image/png';
var mimeSvg = 'image/svg+xml';

/***/ }),

/***/ "./scripts/widget-utils.mjs":
/*!**********************************!*\
  !*** ./scripts/widget-utils.mjs ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": function() { return /* binding */ Loader; },
/* harmony export */   "addWloader": function() { return /* binding */ addWloader; },
/* harmony export */   "arrowDownIcon": function() { return /* binding */ arrowDownIcon; },
/* harmony export */   "classNames": function() { return /* binding */ classNames; },
/* harmony export */   "closeMixplatPaymentForm": function() { return /* binding */ closeMixplatPaymentForm; },
/* harmony export */   "colorAlpha": function() { return /* binding */ colorAlpha; },
/* harmony export */   "colorDark": function() { return /* binding */ colorDark; },
/* harmony export */   "consoleWrite": function() { return /* binding */ consoleWrite; },
/* harmony export */   "currentDate": function() { return /* binding */ currentDate; },
/* harmony export */   "darkenColor": function() { return /* binding */ darkenColor; },
/* harmony export */   "deleteCookie": function() { return /* binding */ deleteCookie; },
/* harmony export */   "domElem": function() { return /* binding */ domElem; },
/* harmony export */   "domReplaceChild": function() { return /* binding */ domReplaceChild; },
/* harmony export */   "findScriptHost": function() { return /* binding */ findScriptHost; },
/* harmony export */   "findScriptTag": function() { return /* binding */ findScriptTag; },
/* harmony export */   "findScriptUrl": function() { return /* binding */ findScriptUrl; },
/* harmony export */   "fixDataFileUrls": function() { return /* binding */ fixDataFileUrls; },
/* harmony export */   "getCookie": function() { return /* binding */ getCookie; },
/* harmony export */   "getMyAmountsFromLocalStorage": function() { return /* binding */ getMyAmountsFromLocalStorage; },
/* harmony export */   "getMyFailInfoFromLocalStorage": function() { return /* binding */ getMyFailInfoFromLocalStorage; },
/* harmony export */   "getMyRejectInfoFromLocalStorage": function() { return /* binding */ getMyRejectInfoFromLocalStorage; },
/* harmony export */   "getUrlParams": function() { return /* binding */ getUrlParams; },
/* harmony export */   "getUtmParams": function() { return /* binding */ getUtmParams; },
/* harmony export */   "loadTermsFancyboxDependencies": function() { return /* binding */ loadTermsFancyboxDependencies; },
/* harmony export */   "mediaDependentValue": function() { return /* binding */ mediaDependentValue; },
/* harmony export */   "removeFailAndRejectInfo": function() { return /* binding */ removeFailAndRejectInfo; },
/* harmony export */   "roubleIcon": function() { return /* binding */ roubleIcon; },
/* harmony export */   "roundStepped": function() { return /* binding */ roundStepped; },
/* harmony export */   "saveMyFailInfoToLocalStorage": function() { return /* binding */ saveMyFailInfoToLocalStorage; },
/* harmony export */   "saveMyRejectInfoToLocalStorage": function() { return /* binding */ saveMyRejectInfoToLocalStorage; },
/* harmony export */   "saveMySuccessAmountToLocalStorage": function() { return /* binding */ saveMySuccessAmountToLocalStorage; },
/* harmony export */   "saveUtmParams": function() { return /* binding */ saveUtmParams; },
/* harmony export */   "sendWidgetEvent": function() { return /* binding */ sendWidgetEvent; },
/* harmony export */   "setCookie": function() { return /* binding */ setCookie; },
/* harmony export */   "smartShorter": function() { return /* binding */ smartShorter; },
/* harmony export */   "sumStepper": function() { return /* binding */ sumStepper; }
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var htm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! htm */ "./node_modules/htm/dist/htm.module.js");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./scripts/constants.mjs");
/* harmony import */ var _infoBlock_infoBlock_assets_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infoBlock/infoBlock-assets.mjs */ "./scripts/infoBlock/infoBlock-assets.mjs");
var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





// Initialize htm with Preact
var html = htm__WEBPACK_IMPORTED_MODULE_1__["default"].bind(preact__WEBPACK_IMPORTED_MODULE_0__.h);
var steps = [{
  range: [0, 50],
  step: 10
}, {
  range: [50, 1000],
  step: 50
}, {
  range: [1000, 2000],
  step: 100
}, {
  range: [2000, 10000],
  step: 500
}, {
  range: [10000, 20000],
  step: 1000
}, {
  range: [20000, 100000],
  step: 5000
}, {
  range: [100000, 123123123],
  step: 50000
}];
function sumStepper(v, dir) {
  var useStep = 0;
  var _iterator = _createForOfIteratorHelper(steps),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _step.value,
        range = _step$value.range,
        step = _step$value.step;
      var _range = range,
        _range2 = _slicedToArray(_range, 2),
        min = _range2[0],
        max = _range2[1];
      if (v >= min && v <= max) {
        if (v == max && dir > 0) {
          continue;
        }
        useStep = step;
        if (dir > 0) {
          v -= v % step;
        } else {
          v += v % step ? -(v % step) + step : 0;
        }
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return v + dir * useStep;
}
function getUrlParams() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.toString();
  var vars = [],
    hash;
  var search = url.replace(/(^.*\?)|(^.*$)/, '');
  var hashes = search ? search.split('&') : [];
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    //vars.push(hash[0]);
    vars[hash[0]] = decodeURIComponent(hash[1]);
  }
  return vars;
}
function consoleWrite() {
  var _getUrlParams;
  if ((_getUrlParams = getUrlParams(location.href)) !== null && _getUrlParams !== void 0 && _getUrlParams.hasOwnProperty('debug')) {
    var _console;
    (_console = console).log.apply(_console, arguments);
  }
}
function addWloader(scriptSrc) {
  if (scriptSrc) {
    var script = document.createElement('script');
    script.src = scriptSrc;
    document.body.appendChild(script);
  }
}
function getCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  });
}
function setCookie(name, value) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  options.path = '/';
  if (options.expires) {
    options.expires = options.expires.toUTCString();
  }
  var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  for (var optionKey in options) {
    updatedCookie += "; " + optionKey;
    var optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  document.cookie = updatedCookie;
}
var utmParams = ['utm_medium', 'utm_source', 'utm_campaign', 'utm_term', 'utm_content'];
function saveUtmParams() {
  var params = getUrlParams();
  var utm = {};
  var _iterator2 = _createForOfIteratorHelper(utmParams),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var name = _step2.value;
      if (params[name]) {
        utm[name] = params[name];
      }
    }
    //setCookie('widget_utm', JSON.stringify(utm));
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  sessionStorage.setItem('widget_utm', JSON.stringify(utm));
}
function getUtmParams() {
  //var utm = getCookie('widget_utm');
  var utm = sessionStorage.getItem('widget_utm');
  try {
    utm = utm ? JSON.parse(utm) : {};
  } catch (e) {
    utm = {};
  }
  utm = _typeof(utm) == 'object' ? utm : {};
  utm = Object.fromEntries(Object.entries(utm).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      name = _ref2[0];
    return utmParams.includes(name);
  })); // filter
  return utm;
}
function sendWidgetEvent(type, id) {
  var host = findScriptHost(id);
  if (!host) return;
  return fetch(host + '/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id,
      type: type
    })
  });
}
function colorAlpha(color) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (!color) return color;
  color = color.toLowerCase();
  // Если цвет уже в формате rgba
  if (color.startsWith('rgba')) {
    return color.replace(/,\s*[\d\.]+\s*\)$/, ", ".concat(alpha, ")"));
  }

  // Если цвет в формате rgb
  if (color.startsWith('rgb')) {
    return color.replace(')', ", ".concat(alpha, ")")).replace('rgb', 'rgba');
  }

  // Если цвет в hex формате
  if (color.startsWith('#')) {
    return hexToRgba(color, alpha);
  }
  return color;
}

// Вспомогательная функция для преобразования hex в rgba
function hexToRgba(hex) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var hexColor = hex.substring(1);

  // Если сокращенная форма с альфа-каналом (4 символа: #RGBA)
  if (hexColor.length === 4) {
    hexColor = hexColor[0] + hexColor[0] + hexColor[1] + hexColor[1] + hexColor[2] + hexColor[2] + hexColor[3] + hexColor[3];
  }

  // Если сокращенная форма без альфа-канала (3 символа: #RGB)
  if (hexColor.length === 3) {
    hexColor = hexColor[0] + hexColor[0] + hexColor[1] + hexColor[1] + hexColor[2] + hexColor[2];
  }

  // Если полная форма с альфа-каналом (8 символов: #RRGGBBAA)
  if (hexColor.length === 8) {
    // Извлекаем компоненты
    var r = parseInt(hexColor.substring(0, 2), 16);
    var g = parseInt(hexColor.substring(2, 4), 16);
    var b = parseInt(hexColor.substring(4, 6), 16);
    var existingAlpha = parseInt(hexColor.substring(6, 8), 16) / 255;

    // Используем переданный alpha, если он указан, иначе существующий
    var finalAlpha = alpha !== undefined ? alpha : existingAlpha;
    return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(finalAlpha, ")");
  }

  // Если полная форма без альфа-канала (6 символов: #RRGGBB)
  if (hexColor.length === 6) {
    var _r = parseInt(hexColor.substring(0, 2), 16);
    var _g = parseInt(hexColor.substring(2, 4), 16);
    var _b = parseInt(hexColor.substring(4, 6), 16);
    return "rgba(".concat(_r, ", ").concat(_g, ", ").concat(_b, ", ").concat(alpha, ")");
  }
  return hex; // Возвращаем исходное значение, если формат неверный
}

function colorDark(color, share) {
  var _color;
  if (!color) return color;
  // Если цвет в hex формате
  if (color.startsWith('#')) {
    color = hexToRgba(color);
  }
  var ms = (_color = color) === null || _color === void 0 ? void 0 : _color.match(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)/);
  if (!ms) return color;
  var cs = ms.slice(1, 4);
  return "rgba(".concat(cs.map(function (c) {
    return Math.round(c * share);
  }).map(function (c) {
    return Math.max(0, c);
  }).map(function (c) {
    return Math.min(255, c);
  }).join(','), ", ").concat(ms[4], ")");
  //return 'rgba(' . implode(',', array_map(fn($cv) => intval($cv * $share), $cs)) . ',' . $ms[4] . ')';
}

function findScriptUrl(id) {
  var s = document.querySelector("script[src*=\"".concat(id, "\"]"));
  return s ? s.src : null;
}
function findScriptHost(id) {
  var url = findScriptUrl(id);
  if (!url) return url;
  url = url.replace(/\/\/widget\./, '//widgets.'); // fix old host
  var ms = url.match(/(https?:\/\/[^\/]+)/);
  return ms[1] || false;
}
function findScriptTag(sid) {
  //Будем возвращать последний найденный экземпляр (актуально для вызывающих виджетов-родителей)
  var scriptTags = document.querySelectorAll("script[src*=\"".concat(sid, "\"]"));
  return scriptTags.length > 0 ? scriptTags[scriptTags.length - 1] : null;
}
var dataFileProps = ['widget.style.image', 'block1.style.image', 'block1.style.backImage', 'block2.style.image', 'block2.style.backImage', 'stripe.style.image', 'stripeForm.style.image', 'stripeForm.style.backImage'];
var setProp = function setProp(o, prop, v) {
  var propPath = Array.isArray(prop) ? prop : prop.split('.');
  var _propPath = _slicedToArray(propPath, 1),
    p1 = _propPath[0];
  if (propPath.length == 1) {
    o[p1] = v;
  } else {
    var subo = o[p1];
    if (_typeof(subo) == 'object') {
      setProp(subo, propPath.slice(1), v);
    }
  }
};
var getProp = function getProp(o, prop) {
  var def = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var propPath = Array.isArray(prop) ? prop : prop.split('.');
  var _propPath2 = _slicedToArray(propPath, 1),
    p1 = _propPath2[0];
  var v = o[p1] || def;
  return propPath.length > 1 && v !== null ? getProp(v, propPath.slice(1)) : v;
};
var fixDataFileUrls = function fixDataFileUrls(data) {
  var scriptUrl = findScriptUrl(data.site_id);
  if (scriptUrl && scriptUrl.indexOf('//widget.') != -1) {
    // old widget host https://widget.donation.ru/js/id, convert to new
    scriptUrl = 'https://widgets.donation.ru/widgets/' + data.site_id + '/widget.js';
  }
  var urlPath = scriptUrl ? scriptUrl.replace(/[^/]+$/, '') : null; // rm file name
  if (!urlPath) {
    return;
  }
  var _iterator3 = _createForOfIteratorHelper(dataFileProps),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var prop = _step3.value;
      var fileName = getProp(data, prop);
      if (!fileName) {
        continue;
      }
      var fileFix = urlPath + fileName;
      setProp(data, prop, fileFix);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
};
function domElem(tag, props) {
  var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var e = document.createElement(tag);
  Object.entries(props).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      a = _ref4[0],
      v = _ref4[1];
    return e.setAttribute(a, v);
  });
  if (content instanceof Object) {
    if (Array.isArray(content)) {
      content.forEach(function (item) {
        return e.appendChild(item);
      });
    } else {
      e.appendChild(content);
    }
  }
  typeof content == "string" && (e.textContent = content);
  return e;
}

// replace or append
function domReplaceChild(container, child) {
  var oldChild = child.id ? container.ownerDocument.getElementById(child.id) : null;
  if (oldChild) {
    container.replaceChild(child, oldChild);
  } else {
    container.appendChild(child);
  }
}

/**
 * { 480: 1, 1024: 2 }
 */
var mediaDependentValue = function mediaDependentValue(mediaBreakPointsMap) {
  var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var w = window.innerWidth;
  for (var _i2 = 0, _Object$entries = Object.entries(mediaBreakPointsMap); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
      breakPoint = _Object$entries$_i[0],
      v = _Object$entries$_i[1];
    if (w <= breakPoint) {
      return v;
    }
  }
  return def;
};
var roundSteps = [[100, 10], [1000, 50], [10000, 100], [50000, 500], [100000000, 1000]];
function roundStepped(v) {
  var vr = v;
  for (var s = 0, step = roundSteps[0]; s < roundSteps.length; s++, step = roundSteps[s]) {
    if (v < step[0]) {
      vr = v - vr % step[1];
      break;
    }
  }
  return vr;
}
var classNames = function classNames(obj) {
  var cs = [];
  for (var c in obj) {
    if (obj[c]) {
      cs.push(c);
    }
  }
  return cs.join(' ');
};
function darkenColor(color) {
  var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.95;
  if (color.toLowerCase().startsWith('rgba')) {
    // Extract the R, G, B, and A channels from the RGBA color
    var rgbaChannels = color.substring(color.indexOf('(') + 1, color.lastIndexOf(')')).split(',');
    var r = parseInt(rgbaChannels[0]);
    var g = parseInt(rgbaChannels[1]);
    var b = parseInt(rgbaChannels[2]);
    var a = parseFloat(rgbaChannels[3]);

    // Decrease the value of each channel by the given factor k
    var newR = Math.round(r * k);
    var newG = Math.round(g * k);
    var newB = Math.round(b * k);

    // Return the new RGBA color
    return "rgba(".concat(newR, ",").concat(newG, ",").concat(newB, ",").concat(a, ")");
  } else if (color.toLowerCase().startsWith('rgb')) {
    // Extract the R, G, and B channels from the RGB color
    var rgbChannels = color.substring(color.indexOf('(') + 1, color.lastIndexOf(')')).split(',');
    var _r2 = parseInt(rgbChannels[0]);
    var _g2 = parseInt(rgbChannels[1]);
    var _b2 = parseInt(rgbChannels[2]);

    // Decrease the value of each channel by the given factor k
    var _newR = Math.round(_r2 * k);
    var _newG = Math.round(_g2 * k);
    var _newB = Math.round(_b2 * k);

    // Return the new RGB color
    return "rgb(".concat(_newR, ",").concat(_newG, ",").concat(_newB, ")");
  } else {
    // Extract the RGB channels from the HEX color
    var _r3 = parseInt(color.substring(1, 3), 16);
    var _g3 = parseInt(color.substring(3, 5), 16);
    var _b3 = parseInt(color.substring(5, 7), 16);

    // Decrease the value of each channel by the given factor k
    var _newR2 = Math.round(_r3 * k);
    var _newG2 = Math.round(_g3 * k);
    var _newB2 = Math.round(_b3 * k);

    // Convert the new RGB color back to a HEX color
    return "#".concat((_newR2 < 16 ? '0' : '') + _newR2.toString(16)).concat((_newG2 < 16 ? '0' : '') + _newG2.toString(16)).concat((_newB2 < 16 ? '0' : '') + _newB2.toString(16));
  }
}
var currentDate = function currentDate() {
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = String(currentDate.getMonth() + 1).padStart(2, '0');
  var day = String(currentDate.getDate()).padStart(2, '0');
  return "".concat(year, "-").concat(month, "-").concat(day);
};
var Loader = function Loader() {
  return html(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        <div class=\"loader\">\n            <div class=\"theme_xbox_lg\">\n                <div class=\"pace_progress\"/>\n                <div class=\"pace_activity\"/>\n            </div>\n        </div>\n    "])));
};
function getMyAmountsFromLocalStorage() {
  try {
    var myAmounts = localStorage.getItem(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.SuccessDonationAmountsKey);
    myAmounts = myAmounts ? JSON.parse(myAmounts) : [];
    return Array.isArray(myAmounts) ? myAmounts : [];
  } catch (e) {}
  return [];
}
function saveMySuccessAmountToLocalStorage(amount) {
  try {
    removeFailAndRejectInfo();
    var myAmounts = getMyAmountsFromLocalStorage();
    myAmounts.push(amount);
    localStorage.setItem(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.SuccessDonationAmountsKey, JSON.stringify(myAmounts));
    return true;
  } catch (e) {}
  return false;
}
function getMyFailInfoFromLocalStorage() {
  try {
    var myFail = localStorage.getItem(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.FailDonationInfoKey);
    return myFail ? JSON.parse(myFail) : {};
  } catch (e) {}
  return {};
}
function saveMyFailInfoToLocalStorage(target_id, amount) {
  var form_sid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  try {
    localStorage.setItem(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.FailDonationInfoKey, JSON.stringify({
      target_id: target_id,
      amount: amount,
      form_sid: form_sid
    }));
    localStorage.removeItem(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.RejectDonationInfoKey);
    return true;
  } catch (e) {}
  return false;
}
function getMyRejectInfoFromLocalStorage() {
  try {
    var myReject = localStorage.getItem(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.RejectDonationInfoKey);
    return myReject ? JSON.parse(myReject) : {};
  } catch (e) {}
  return {};
}
function saveMyRejectInfoToLocalStorage(target_id, amount) {
  var form_sid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  try {
    localStorage.setItem(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.RejectDonationInfoKey, JSON.stringify({
      target_id: target_id,
      amount: amount,
      form_sid: form_sid
    }));
    localStorage.removeItem(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.FailDonationInfoKey);
    return true;
  } catch (e) {}
  return false;
}
function removeFailAndRejectInfo() {
  try {
    localStorage.removeItem(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.FailDonationInfoKey);
    localStorage.removeItem(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.RejectDonationInfoKey);
    return true;
  } catch (e) {}
  return false;
}
var roubleIcon = function roubleIcon() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '10px';
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '10px';
  return html(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        <svg width=\"", "\" height=\"", "\" viewBox=\"-1 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill=\"currentColor\"\n                  d=\"m17.778 7.449c.002-.043.003-.093.003-.143 0-1.028-.425-1.956-1.11-2.618l-.001-.001c-.717-.658-1.678-1.061-2.732-1.061-.064 0-.128.002-.191.004h.009-5.454v7.636h5.454c.054.003.118.004.182.004 1.054 0 2.015-.403 2.735-1.064l-.003.003c.685-.663 1.111-1.591 1.111-2.619 0-.05-.001-.1-.003-.149v.007zm4.04 0c.003.076.005.164.005.253 0 2.006-.829 3.819-2.163 5.115l-.002.002c-1.371 1.292-3.224 2.086-5.262 2.086-.107 0-.213-.002-.319-.006h.015-5.795v2.011h8.608.021c.29 0 .525.235.525.525v.022-.001 2.182.021c0 .29-.235.525-.525.525-.007 0-.015 0-.022 0h.001-8.608v3.273.018c0 .147-.061.28-.16.374-.097.095-.23.154-.377.154-.002 0-.004 0-.007 0h-2.846c-.006 0-.014 0-.021 0-.29 0-.525-.235-.525-.525 0-.007 0-.015 0-.022v.001-3.273h-3.818c-.006 0-.014 0-.021 0-.29 0-.525-.235-.525-.525 0-.007 0-.015 0-.022v.001-2.182c0-.006 0-.014 0-.021 0-.29.235-.525.525-.525h.022-.001 3.818v-2.011h-3.818c-.006 0-.014 0-.021 0-.29 0-.525-.235-.525-.525 0-.007 0-.015 0-.022v.001-2.54c0-.002 0-.004 0-.006 0-.147.059-.28.154-.377.094-.099.227-.16.374-.16h.019-.001 3.818v-10.72c0-.006 0-.014 0-.021 0-.29.235-.525.525-.525h.022-.001 9.187c.091-.004.197-.006.304-.006 2.038 0 3.891.794 5.266 2.09l-.004-.004c1.334 1.297 2.162 3.109 2.162 5.114 0 .088-.002.176-.005.264v-.013z\"/>\n        </svg>"])), width, height);
};
var arrowDownIcon = function arrowDownIcon() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '10px';
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '10px';
  return html(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        <svg fill=\"currentColor\" width=\"", "\" height=\"", "\" viewBox=\"200 200 600 600\"\n             xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M759.2 419.8L697.4 358 512 543.4 326.6 358l-61.8 61.8L512 667z\"/>\n        </svg>"])), width, height);
};

/**
 * Умно укорачивает строку до целого слова до лимитов, добавляя многоточия в конце
 * @param {string} string
 * @param {number} limit
 * @return {string|null}
 */
function smartShorter(string) {
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 122;
  if (!string) {
    return string;
  }
  var words = string.split(' ');
  var result = '';
  var i = 0;
  while (i < words.length && result.length + words[i].length + 1 <= limit) {
    if (i !== 0) {
      result += ' ';
    }
    result += words[i];
    i++;
  }
  if (result.length > limit) {
    result = result.substring(0, limit) + '...';
  } else if (result.length < string.length) {
    result += '...';
  }
  return result;
}
var loadTermsFancyboxDependencies = function loadTermsFancyboxDependencies(props) {
  var rootOrDocument = props.rootOrDocument;
  var isJQueryLoaded = function isJQueryLoaded() {
    return typeof window.jQuery !== 'undefined' && typeof window.jQuery === 'function' && typeof window.jQuery.fn !== 'undefined';
  };
  var loadjQuery = function loadjQuery() {
    var jquery = document.createElement('script');
    jquery.src = _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.jquerySrc;
    jquery.onload = function () {
      loadFancyBox();
    };
    jquery.onerror = function () {
      console.error('Ошибка загрузки jQuery');
    };
    document.head.appendChild(jquery);
  };
  var loadFancyBox = function loadFancyBox() {
    if (typeof window.jQuery === 'undefined') {
      setTimeout(function () {
        loadFancyBox();
      }, 50);
      return;
    }
    var style = document.createElement('style');
    style.textContent = _infoBlock_infoBlock_assets_mjs__WEBPACK_IMPORTED_MODULE_3__.fancyboxCss;
    document.head.appendChild(style);
    var fancybox = document.createElement('script');
    fancybox.src = _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.fancyBoxSrc;
    fancybox.onload = function () {
      initTermsOfferHandler();
    };
    fancybox.onerror = function () {
      console.error('Ошибка загрузки FancyBox');
    };
    document.head.appendChild(fancybox);
  };
  var initTermsOfferHandler = function initTermsOfferHandler() {
    if (!rootOrDocument) return;
    var initLinkHandler = function initLinkHandler(handlerClass, targetClass) {
      var handleClick = function handleClick(event) {
        var targetLink = document.querySelector(targetClass);
        if (targetLink) {
          event.preventDefault();
          event.stopPropagation();
          targetLink.click();
        }
      };
      var links = rootOrDocument.querySelectorAll(handlerClass);
      links.forEach(function (link) {
        link.removeEventListener('click', handleClick);
        link.addEventListener('click', handleClick);
      });
    };
    initLinkHandler('.mp-form-terms-offer-fancybox-handler', '.mp-form-terms-offer-fancybox');
    initLinkHandler('.mp-form-terms-policy-fancybox-handler', '.mp-form-terms-policy-fancybox');
  };

  // Основная логика
  if (isJQueryLoaded()) {
    loadFancyBox();
  } else {
    loadjQuery();
  }
};
var closeMixplatPaymentForm = function closeMixplatPaymentForm() {
  if (window.donationJsToMixplatWidget) {
    window.donationJsToMixplatWidget.close();
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***********************************!*\
  !*** ./scripts/button/button.mjs ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "donationRuButton": function() { return /* binding */ donationRuButton; }
/* harmony export */ });
/* harmony import */ var preact_debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/debug */ "./node_modules/preact/debug/dist/debug.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var htm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! htm */ "./node_modules/htm/dist/htm.module.js");
/* harmony import */ var _widget_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widget-utils.mjs */ "./scripts/widget-utils.mjs");
/* harmony import */ var _button_widgets_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button-widgets.mjs */ "./scripts/button/button-widgets.mjs");
/* harmony import */ var _api_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api.mjs */ "./scripts/button/api.mjs");
/* harmony import */ var _dataDefault_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dataDefault.js */ "./scripts/button/dataDefault.js");
/* harmony import */ var _button_button_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./button-button.mjs */ "./scripts/button/button-button.mjs");
/* harmony import */ var _button_form_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./button-form.mjs */ "./scripts/button/button-form.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants.mjs */ "./scripts/constants.mjs");
/* harmony import */ var _form_form_utils_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../form/form-utils.mjs */ "./scripts/form/form-utils.mjs");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var _templateObject;
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}












// Initialize htm with Preact
var html = htm__WEBPACK_IMPORTED_MODULE_2__["default"].bind(preact__WEBPACK_IMPORTED_MODULE_1__.h);
var ButtonController = /*#__PURE__*/function (_Component) {
  _inherits(ButtonController, _Component);
  var _super = _createSuper(ButtonController);
  function ButtonController(props) {
    var _this;
    _classCallCheck(this, ButtonController);
    _this = _super.call(this, props);
    _this.stateInit = {
      showModal: false,
      amount: null,
      form: null,
      commercialForm: null
    };
    _this.state = JSON.parse(JSON.stringify(_this.stateInit));
    donationRuButton.button = _assertThisInitialized(_this);
    return _this;
  }
  _createClass(ButtonController, [{
    key: "resetState",
    value: function resetState() {
      this.state = JSON.parse(JSON.stringify(this.stateInit));
    }
  }, {
    key: "getShadowRootAttribute",
    value: function getShadowRootAttribute(rootOrDocument, attributeName) {
      // Если передан shadow-root
      if (rootOrDocument instanceof ShadowRoot) {
        var host = rootOrDocument.host;
        if (host && host.hasAttribute(attributeName)) {
          return host.getAttribute(attributeName);
        }
      }
      // Если передан элемент с shadow-root
      else if (rootOrDocument && rootOrDocument.shadowRoot) {
        var _host = rootOrDocument.shadowRoot.host || rootOrDocument;
        if (_host.hasAttribute(attributeName)) {
          return _host.getAttribute(attributeName);
        }
      }
      // Если передан обычный элемент
      else if (rootOrDocument && rootOrDocument.hasAttribute) {
        return rootOrDocument.getAttribute(attributeName);
      }
      return null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.sendSetSource();
      var amountAttribute = this.getShadowRootAttribute(this.props.rootOrDocument, 'amount');
      var numAmount = Number(amountAttribute);
      var isValidAmount = !isNaN(numAmount) && numAmount > 0;
      if (isValidAmount) {
        this.setState({
          amount: numAmount
        });
      }
    }
  }, {
    key: "sendSetSource",
    value: function sendSetSource() {
      var _this$props,
        _this$props$buttonPro,
        _this$props2,
        _this$props2$api,
        _this$props3,
        _this$props3$buttonPr,
        _this$props4,
        _localStorage,
        _localStorage2,
        _this$props5,
        _this$props5$buttonPr,
        _this2 = this;
      if (!((_this$props = this.props) !== null && _this$props !== void 0 && (_this$props$buttonPro = _this$props.buttonProps) !== null && _this$props$buttonPro !== void 0 && _this$props$buttonPro.id)) {
        return;
      }
      var currDate = (0,_widget_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.currentDate)();
      var apiHost = (_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : (_this$props2$api = _this$props2.api) === null || _this$props2$api === void 0 ? void 0 : _this$props2$api.apiHost;
      if (apiHost && apiHost[apiHost.length - 1] === '/') {
        apiHost = apiHost.substr(0, apiHost.length - 1);
      }
      var apiURL = apiHost + "/button-api/set-source?sid=".concat((_this$props3 = this.props) === null || _this$props3 === void 0 ? void 0 : (_this$props3$buttonPr = _this$props3.buttonProps) === null || _this$props3$buttonPr === void 0 ? void 0 : _this$props3$buttonPr.sid);
      fetch(apiURL, {
        method: 'POST',
        //mode: "no-cors",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          incomeTid: (_this$props4 = this.props) === null || _this$props4 === void 0 ? void 0 : _this$props4.scriptUrlParams['tid'],
          source: location.href,
          uniqueGlobalSession: ((_localStorage = localStorage) === null || _localStorage === void 0 ? void 0 : _localStorage.getItem(_constants_mjs__WEBPACK_IMPORTED_MODULE_9__.WidgetVisitDateKey)) !== currDate,
          uniqueInstanceSession: ((_localStorage2 = localStorage) === null || _localStorage2 === void 0 ? void 0 : _localStorage2.getItem("".concat((_this$props5 = this.props) === null || _this$props5 === void 0 ? void 0 : (_this$props5$buttonPr = _this$props5.buttonProps) === null || _this$props5$buttonPr === void 0 ? void 0 : _this$props5$buttonPr.sid))) !== currDate,
          wloaderExist: !!window.donationRuWLoader
        })
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        var _this2$props, _this2$props$buttonPr;
        if (json['tid']) {
          _this2.props.buttonProps.target_id = json['tid'];
        }
        _this2.setState({
          form: json['form'],
          fund: json['fund'],
          mainPage: json['mainPage'],
          target: json['target'],
          commercialForm: json['commercialForm']
        });
        localStorage.setItem(_constants_mjs__WEBPACK_IMPORTED_MODULE_9__.WidgetVisitDateKey, currDate);
        localStorage.setItem("".concat((_this2$props = _this2.props) === null || _this2$props === void 0 ? void 0 : (_this2$props$buttonPr = _this2$props.buttonProps) === null || _this2$props$buttonPr === void 0 ? void 0 : _this2$props$buttonPr.sid), currDate);
        if (json['wloader']) {
          (0,_widget_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.addWloader)(json['wloader']);
        }
      }, function (error) {});
    }
  }, {
    key: "needPlatform",
    value: function needPlatform() {
      var _this$props6, _this$props6$buttonPr, _this$props6$buttonPr2, _this$state, _this$state$fund, _this$state2, _this$state2$mainPage;
      return !((_this$props6 = this.props) !== null && _this$props6 !== void 0 && (_this$props6$buttonPr = _this$props6.buttonProps) !== null && _this$props6$buttonPr !== void 0 && (_this$props6$buttonPr2 = _this$props6$buttonPr.data) !== null && _this$props6$buttonPr2 !== void 0 && _this$props6$buttonPr2.form) && ((_this$state = this.state) === null || _this$state === void 0 ? void 0 : (_this$state$fund = _this$state.fund) === null || _this$state$fund === void 0 ? void 0 : _this$state$fund.hasDonationToggle) && ((_this$state2 = this.state) === null || _this$state2 === void 0 ? void 0 : (_this$state2$mainPage = _this$state2.mainPage) === null || _this$state2$mainPage === void 0 ? void 0 : _this$state2$mainPage.page);
    }
  }, {
    key: "goToPlatform",
    value: function goToPlatform() {
      var _this$props7, _this$props7$buttonPr, _Object$keys, _this$state3, _this$state3$mainPage, _this$state5, _this$state5$target, _this$props8, _this$props8$buttonPr, _this$props8$buttonPr2;
      var sections = [];
      var buttonType = ((_this$props7 = this.props) === null || _this$props7 === void 0 ? void 0 : (_this$props7$buttonPr = _this$props7.buttonProps) === null || _this$props7$buttonPr === void 0 ? void 0 : _this$props7$buttonPr.type) === _button_button_mjs__WEBPACK_IMPORTED_MODULE_7__.ButtonWidgetTypes.STICKY ? _constants_mjs__WEBPACK_IMPORTED_MODULE_9__.WidgetFundraisingProduct.STICKY_BUTTON : _constants_mjs__WEBPACK_IMPORTED_MODULE_9__.WidgetFundraisingProduct.BUTTON;
      var params = ["source=".concat(buttonType)];
      var query = (0,_widget_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.getUrlParams)();
      var utmLabels = (0,_form_form_utils_mjs__WEBPACK_IMPORTED_MODULE_10__.filterUtmFields)(query);
      (_Object$keys = Object.keys(utmLabels)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.forEach(function (utmKey) {
        params.push("".concat(utmKey, "=").concat(utmLabels[utmKey]));
      });
      if ((_this$state3 = this.state) !== null && _this$state3 !== void 0 && (_this$state3$mainPage = _this$state3.mainPage) !== null && _this$state3$mainPage !== void 0 && _this$state3$mainPage.page) {
        var _this$state4, _this$state4$mainPage;
        sections.push((_this$state4 = this.state) === null || _this$state4 === void 0 ? void 0 : (_this$state4$mainPage = _this$state4.mainPage) === null || _this$state4$mainPage === void 0 ? void 0 : _this$state4$mainPage.page);
      }
      if ((_this$state5 = this.state) !== null && _this$state5 !== void 0 && (_this$state5$target = _this$state5.target) !== null && _this$state5$target !== void 0 && _this$state5$target.page) {
        var _this$state6, _this$state6$target;
        sections.push((_this$state6 = this.state) === null || _this$state6 === void 0 ? void 0 : (_this$state6$target = _this$state6.target) === null || _this$state6$target === void 0 ? void 0 : _this$state6$target.page);
      }
      if ((_this$props8 = this.props) !== null && _this$props8 !== void 0 && (_this$props8$buttonPr = _this$props8.buttonProps) !== null && _this$props8$buttonPr !== void 0 && (_this$props8$buttonPr2 = _this$props8$buttonPr.data) !== null && _this$props8$buttonPr2 !== void 0 && _this$props8$buttonPr2.recurrent) {
        params.push('recurrent=1');
      }
      if (this !== null && this !== void 0 && this.state.amount) {
        params.push("amount=".concat(this === null || this === void 0 ? void 0 : this.state.amount));
      }
      var url = "".concat(_constants_mjs__WEBPACK_IMPORTED_MODULE_9__.donationHost, "/").concat(sections.join('/'));

      // Добавляем параметры, если они есть
      if (params.length > 0) {
        url += "?".concat(params.join('&'));
      }
      window.open(url, '_blank');
    }
  }, {
    key: "render",
    value: function render(props, state) {
      var _buttonProps$_0xedcb, _buttonProps$_0xedcb$;
      var buttonProps = props.buttonProps,
        rootOrDocument = props.rootOrDocument;
      var mode = state.mode,
        stat = state.stat,
        errors = state.errors,
        wait = state.wait,
        alert = state.alert,
        swiper = state.swiper;
      var _0xedcb34 = _0x1111;
      function _0x1111(_0x53302c, _0xcbe16b) {
        var _0x4c72c1 = _0x4c72();
        return _0x1111 = function _0x1111(_0x1111a6, _0x33ad8e) {
          _0x1111a6 = _0x1111a6 - 0x179;
          var _0x3da7e7 = _0x4c72c1[_0x1111a6];
          return _0x3da7e7;
        }, _0x1111(_0x53302c, _0xcbe16b);
      }
      (function (_0x12d9a3, _0x51e5e0) {
        var _0x592d54 = _0x1111,
          _0x3380b6 = _0x12d9a3();
        while (!![]) {
          try {
            var _0x341e4e = parseInt(_0x592d54(0x179)) / 0x1 + parseInt(_0x592d54(0x17c)) / 0x2 + parseInt(_0x592d54(0x184)) / 0x3 + -parseInt(_0x592d54(0x180)) / 0x4 * (-parseInt(_0x592d54(0x17d)) / 0x5) + -parseInt(_0x592d54(0x17f)) / 0x6 * (-parseInt(_0x592d54(0x182)) / 0x7) + -parseInt(_0x592d54(0x17b)) / 0x8 + -parseInt(_0x592d54(0x181)) / 0x9;
            if (_0x341e4e === _0x51e5e0) break;else _0x3380b6['push'](_0x3380b6['shift']());
          } catch (_0x412a15) {
            _0x3380b6['push'](_0x3380b6['shift']());
          }
        }
      })(_0x4c72, 0x1f205);
      if (buttonProps !== null && buttonProps !== void 0 && (_buttonProps$_0xedcb = buttonProps[_0xedcb34(0x17e)]) !== null && _buttonProps$_0xedcb !== void 0 && (_buttonProps$_0xedcb$ = _buttonProps$_0xedcb[_0xedcb34(0x17a)]) !== null && _buttonProps$_0xedcb$ !== void 0 && _buttonProps$_0xedcb$[_0xedcb34(0x183)]) throw new Error('DFdffdd_34\x20error');
      function _0x4c72() {
        var _0x550c90 = ['3753054oHLjkF', '7GrfGIr', 'mode', '299532MlHkCf', '79705dkvjfF', 'company', '1822440xAUSoL', '358892KLrIAx', '396790PuYwTT', 'clientData', '1527558YkeOpQ', '8iFDgHl'];
        _0x4c72 = function _0x4c72() {
          return _0x550c90;
        };
        return _0x4c72();
      }
      return html(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            <div class=\"d7button\">\n                ", "\n            </div>\n        "])), [(0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(_button_button_mjs__WEBPACK_IMPORTED_MODULE_7__.Button, {
        ctrl: this,
        buttonProps: buttonProps
      }), this.state.showModal && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)('div', {
        id: 'd7_modal_overlay'
      }, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(_button_form_mjs__WEBPACK_IMPORTED_MODULE_8__.ButtonForm, {
        ctrl: this,
        buttonProps: buttonProps
      }))]);
    }
  }]);
  return ButtonController;
}(preact__WEBPACK_IMPORTED_MODULE_1__.Component);
var shadowMap = new Map(); // container -> shadow root

var consoleWrite = function consoleWrite() {
  var _getUrlParams, _location;
  if ((_getUrlParams = (0,_widget_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.getUrlParams)((_location = location) === null || _location === void 0 ? void 0 : _location.href)) !== null && _getUrlParams !== void 0 && _getUrlParams.hasOwnProperty('debug')) {
    var _console;
    (_console = console).log.apply(_console, arguments);
  }
};
function createWidget(props, options) {
  var _props$data;
  consoleWrite('createButtonWidget', 'props=', props, 'options=', options);
  var scriptTag = props.sid ? (0,_widget_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.findScriptTag)(props.sid) : null;
  var scriptUrlParams = scriptTag ? (0,_widget_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.getUrlParams)(scriptTag.src) : {};
  var cont = options.container || null;
  if (!cont) {
    var elms = document.querySelectorAll("[id='" + props.sid + "']");
    for (var i = 0; i < elms.length; i++) {
      if (!cont) {
        if (!elms[i].getAttribute('data-initialized')) {
          cont = elms[i];
          cont.setAttribute('data-initialized', true);
        }
      }
    }
  }
  if (!cont && scriptTag) {
    cont = options.container = (0,_widget_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.domElem)('span', {
      id: props.sid
    });
    scriptTag.parentElement.appendChild(cont);
  }
  if (!cont) {
    //Если до сих пор не стало понятно в какой узел DOM инициализировать виджет - выходим
    return;
    cont = options.container = (0,_widget_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.domElem)('span', {});
    document.body.appendChild(cont);
  }
  if ((_props$data = props.data) !== null && _props$data !== void 0 && _props$data.parentCss) {
    var _props$data2;
    var style = document.createElement('style');
    style.textContent = (_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : _props$data2.parentCss;
    document.head.appendChild(style);
  }
  var rootOrDocument = document;
  // with shadow dom
  if (document.documentElement.attachShadow && !options.noShadow) {
    if (shadowMap.has(cont) && shadowMap.get(cont).isConnected) {
      cont = shadowMap.get(cont);
    } else {
      try {
        var sdom = cont.attachShadow({
          mode: 'open'
        });
      } catch (e) {
        return;
      }
      shadowMap.set(cont, sdom);
      cont = sdom;
    }
    rootOrDocument = cont;
  }
  var api = (0,_api_mjs__WEBPACK_IMPORTED_MODULE_5__.getApiClient)(options);
  (0,preact__WEBPACK_IMPORTED_MODULE_1__.render)((0,preact__WEBPACK_IMPORTED_MODULE_1__.h)('span', {
    children: [(0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(ButtonController, {
      buttonProps: props,
      api: api,
      options: options,
      rootOrDocument: rootOrDocument,
      scriptUrlParams: scriptUrlParams,
      key: 'stat'
    }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(_button_widgets_mjs__WEBPACK_IMPORTED_MODULE_4__.CssVars, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(_button_widgets_mjs__WEBPACK_IMPORTED_MODULE_4__.CssStatic), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(_button_widgets_mjs__WEBPACK_IMPORTED_MODULE_4__.CssCustom, props)]
  }), cont);
}
var donationRuButton = {
  /**
   * @param {object} props
   * @param {object} options - { container: domElement, embed: false || true }
   */
  create: function create(props) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (typeof window != 'undefined') {
      if (!window.donationRuButtonsArray) {
        window.donationRuButtonsArray = {};
      }
      window.donationRuButtonsArray[props.sid] = donationRuButton;
    }
    return createWidget(props, options);
  },
  activate: function activate() {
    var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var sid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    console.log('activate method');
    var numAmount = Number(amount);
    var isValidAmount = !isNaN(numAmount) && numAmount > 0;
    if (sid && window.donationRuButtonsArray[sid]) {
      window.donationRuButtonsArray[sid].button.setState({
        amount: isValidAmount ? numAmount : null,
        showModal: true
      });
    } else {
      donationRuButton.button.setState({
        amount: isValidAmount ? numAmount : null,
        showModal: true
      });
    }
  },
  dataDefault: _dataDefault_js__WEBPACK_IMPORTED_MODULE_6__,
  stat: null
};

// direct expose
if (typeof window != 'undefined') {
  window.donationRuButton = donationRuButton;
}
}();
/******/ })()
;
//# sourceMappingURL=button.js.map
; donationRuButton.create({"id":797,"sid":"a30849b9-8c71-41c2-bbc7-2e351b918644","company_id":25823,"target_id":-25823,"form_id":14793,"commercial_form_id":null,"status":1,"type":1,"data":{"btnText":"ДИКТАНТ ПОДДЕРЖАТЬ","css":"","parentCss":"","recurrent":1,"autoTarget":0,"form":null,"btnStyle":{"color":"rgba(255,255,255,1)","backColor":"rgba(214,32,39,1)","hoverColor":"rgba(206,73,28,1)","hoverVariant":1,"size":27,"radius":39,"position":0}},"published_at":"2026-05-29 21:51:07","installed":"2026-04-07 19:42:33","unavailable":null,"uninstalled":null,"created_at":"2024-04-20 01:53:22","updated_at":"2026-04-07 19:46:15","insertScriptUrl":"https://widgets.donation.ru/button/a30849b9-8c71-41c2-bbc7-2e351b918644/button.js","insertScriptHtml":"<script src=\"https://widgets.donation.ru/button/a30849b9-8c71-41c2-bbc7-2e351b918644/button.js\" async></script>","clientData":{"company":{"title":"Фонд «Тотальный диктант»","id":25823,"mission":"Реализация просветительских проектов, популяризация грамотности, продвижение русского языка, литературы и культуры в России и за рубежом, поддержка языков народов России.","url_reports":"https://totalfond.totaldict.ru/fin_report","url_ustav_docs":"https://totalfond.totaldict.ru/document","url_offer":"https://totalfond.totaldict.ru/oferta","type":1,"qrPaymentRequisites":"ST00012|Name=Фонд «Тотальный диктант»|PersonalAcc=40703810344050002437|BankName=СИБИРСКИЙ БАНК ПАО СБЕРБАНК|BIC=045004641|CorrespAcc=30101810500000000641|Purpose={%purpose%}|Sum={%sum%}|PayeeINN=5408000292|KPP=540601001","logo":{"urlAbs":"https://file.donation.ru:4443/uploads/funds/25823/5412fa657a7af54d5cf565a6aee84f93_250924.png"},"mode":null,"companyAgreementActual":{"company_title":"ФОНД \"ТОТАЛЬНЫЙ ДИКТАНТ\"","address":"г Новосибирск, Вокзальная мгстр, д 15, офис 328","address_fact":null,"address_post":null,"inn":"5408000292","bank_account_num":"40703810344050002437","bank_name":"СИБИРСКИЙ БАНК ПАО СБЕРБАНК","bank_bik":"045004641","bank_corresp_account":"30101810500000000641","bank_kpp":"540601001"}},"target":{"id":-25823,"type":0,"title":"Пожертвование в Фонд «Тотальный диктант»"}}}, { 
    container: null,
    apiHost: "https://api.donation.ru",
    widgetsHost: "https://widgets.donation.ru",
});