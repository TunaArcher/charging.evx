/* Minification failed. Returning unminified contents.
(773,92-93): run-time error JS1195: Expected expression: .
(773,104-105): run-time error JS1003: Expected ':': ;
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).i18next =
        t());
})(this, function () {
  "use strict";
  function e(t) {
    return (e =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(t);
  }
  function t(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function n(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function r(e, t, r) {
    return (
      t && n(e.prototype, t),
      r && n(e, r),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  function o(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function i(e, t) {
    return (i =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function a(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      t && i(e, t);
  }
  function s(t, n) {
    if (n && ("object" === e(n) || "function" == typeof n)) return n;
    if (void 0 !== n)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return o(t);
  }
  function u(e) {
    return (u = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function c(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function f(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? l(Object(n), !0).forEach(function (t) {
            c(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : l(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  var p = {
      type: "logger",
      log: function (e) {
        this.output("log", e);
      },
      warn: function (e) {
        this.output("warn", e);
      },
      error: function (e) {
        this.output("error", e);
      },
      output: function (e, t) {
        console && console[e] && console[e].apply(console, t);
      },
    },
    g = new ((function () {
      function e(n) {
        var r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        t(this, e), this.init(n, r);
      }
      return (
        r(e, [
          {
            key: "init",
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              (this.prefix = t.prefix || "i18next:"),
                (this.logger = e || p),
                (this.options = t),
                (this.debug = t.debug);
            },
          },
          {
            key: "setDebug",
            value: function (e) {
              this.debug = e;
            },
          },
          {
            key: "log",
            value: function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return this.forward(t, "log", "", !0);
            },
          },
          {
            key: "warn",
            value: function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return this.forward(t, "warn", "", !0);
            },
          },
          {
            key: "error",
            value: function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return this.forward(t, "error", "");
            },
          },
          {
            key: "deprecate",
            value: function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
            },
          },
          {
            key: "forward",
            value: function (e, t, n, r) {
              return r && !this.debug
                ? null
                : ("string" == typeof e[0] &&
                    (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])),
                  this.logger[t](e));
            },
          },
          {
            key: "create",
            value: function (t) {
              return new e(
                this.logger,
                f(
                  f({}, { prefix: "".concat(this.prefix, ":").concat(t, ":") }),
                  this.options
                )
              );
            },
          },
        ]),
        e
      );
    })())(),
    h = (function () {
      function e() {
        t(this, e), (this.observers = {});
      }
      return (
        r(e, [
          {
            key: "on",
            value: function (e, t) {
              var n = this;
              return (
                e.split(" ").forEach(function (e) {
                  (n.observers[e] = n.observers[e] || []),
                    n.observers[e].push(t);
                }),
                this
              );
            },
          },
          {
            key: "off",
            value: function (e, t) {
              this.observers[e] &&
                (t
                  ? (this.observers[e] = this.observers[e].filter(function (e) {
                      return e !== t;
                    }))
                  : delete this.observers[e]);
            },
          },
          {
            key: "emit",
            value: function (e) {
              for (
                var t = arguments.length,
                  n = new Array(t > 1 ? t - 1 : 0),
                  r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              this.observers[e] &&
                [].concat(this.observers[e]).forEach(function (e) {
                  e.apply(void 0, n);
                });
              this.observers["*"] &&
                [].concat(this.observers["*"]).forEach(function (t) {
                  t.apply(t, [e].concat(n));
                });
            },
          },
        ]),
        e
      );
    })();
  function d() {
    var e,
      t,
      n = new Promise(function (n, r) {
        (e = n), (t = r);
      });
    return (n.resolve = e), (n.reject = t), n;
  }
  function v(e) {
    return null == e ? "" : "" + e;
  }
  function y(e, t, n) {
    function r(e) {
      return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e;
    }
    function o() {
      return !e || "string" == typeof e;
    }
    for (
      var i = "string" != typeof t ? [].concat(t) : t.split(".");
      i.length > 1;

    ) {
      if (o()) return {};
      var a = r(i.shift());
      !e[a] && n && (e[a] = new n()),
        (e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {});
    }
    return o() ? {} : { obj: e, k: r(i.shift()) };
  }
  function m(e, t, n) {
    var r = y(e, t, Object);
    r.obj[r.k] = n;
  }
  function b(e, t) {
    var n = y(e, t),
      r = n.obj,
      o = n.k;
    if (r) return r[o];
  }
  function O(e, t, n) {
    var r = b(e, n);
    return void 0 !== r ? r : b(t, n);
  }
  function k(e) {
    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }
  var w = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;",
  };
  function x(e) {
    return "string" == typeof e
      ? e.replace(/[&<>"'\/]/g, function (e) {
          return w[e];
        })
      : e;
  }
  var S =
      "undefined" != typeof window &&
      window.navigator &&
      window.navigator.userAgent &&
      window.navigator.userAgent.indexOf("MSIE") > -1,
    j = [" ", ",", "?", "!", ";"];
  function P(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function L(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? P(Object(n), !0).forEach(function (t) {
            c(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : P(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function R(e) {
    var t = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var n,
        r = u(e);
      if (t) {
        var o = u(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);
      return s(this, n);
    };
  }
  var N = (function (e) {
      a(i, h);
      var n = R(i);
      function i(e) {
        var r,
          a =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { ns: ["translation"], defaultNS: "translation" };
        return (
          t(this, i),
          (r = n.call(this)),
          S && h.call(o(r)),
          (r.data = e || {}),
          (r.options = a),
          void 0 === r.options.keySeparator && (r.options.keySeparator = "."),
          void 0 === r.options.ignoreJSONStructure &&
            (r.options.ignoreJSONStructure = !0),
          r
        );
      }
      return (
        r(i, [
          {
            key: "addNamespaces",
            value: function (e) {
              this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
            },
          },
          {
            key: "removeNamespaces",
            value: function (e) {
              var t = this.options.ns.indexOf(e);
              t > -1 && this.options.ns.splice(t, 1);
            },
          },
          {
            key: "getResource",
            value: function (e, t, n) {
              var r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {},
                o =
                  void 0 !== r.keySeparator
                    ? r.keySeparator
                    : this.options.keySeparator,
                i =
                  void 0 !== r.ignoreJSONStructure
                    ? r.ignoreJSONStructure
                    : this.options.ignoreJSONStructure,
                a = [e, t];
              n && "string" != typeof n && (a = a.concat(n)),
                n && "string" == typeof n && (a = a.concat(o ? n.split(o) : n)),
                e.indexOf(".") > -1 && (a = e.split("."));
              var s = b(this.data, a);
              return s || !i || "string" != typeof n
                ? s
                : (function e(t, n) {
                    var r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : ".";
                    if (t) {
                      if (t[n]) return t[n];
                      for (
                        var o = n.split(r), i = t, a = 0;
                        a < o.length;
                        ++a
                      ) {
                        if (!i) return;
                        if ("string" == typeof i[o[a]] && a + 1 < o.length)
                          return;
                        if (void 0 === i[o[a]]) {
                          for (
                            var s = 2, u = o.slice(a, a + s).join(r), c = i[u];
                            void 0 === c && o.length > a + s;

                          )
                            s++, (c = i[(u = o.slice(a, a + s).join(r))]);
                          if (void 0 === c) return;
                          if (n.endsWith(u)) {
                            if ("string" == typeof c) return c;
                            if (u && "string" == typeof c[u]) return c[u];
                          }
                          var l = o.slice(a + s).join(r);
                          return l ? e(c, l, r) : void 0;
                        }
                        i = i[o[a]];
                      }
                      return i;
                    }
                  })(this.data && this.data[e] && this.data[e][t], n, o);
            },
          },
          {
            key: "addResource",
            value: function (e, t, n, r) {
              var o =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : { silent: !1 },
                i = this.options.keySeparator;
              void 0 === i && (i = ".");
              var a = [e, t];
              n && (a = a.concat(i ? n.split(i) : n)),
                e.indexOf(".") > -1 && ((r = t), (t = (a = e.split("."))[1])),
                this.addNamespaces(t),
                m(this.data, a, r),
                o.silent || this.emit("added", e, t, n, r);
            },
          },
          {
            key: "addResources",
            value: function (e, t, n) {
              var r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : { silent: !1 };
              for (var o in n)
                ("string" != typeof n[o] &&
                  "[object Array]" !== Object.prototype.toString.apply(n[o])) ||
                  this.addResource(e, t, o, n[o], { silent: !0 });
              r.silent || this.emit("added", e, t, n);
            },
          },
          {
            key: "addResourceBundle",
            value: function (e, t, n, r, o) {
              var i =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : { silent: !1 },
                a = [e, t];
              e.indexOf(".") > -1 &&
                ((r = n), (n = t), (t = (a = e.split("."))[1])),
                this.addNamespaces(t);
              var s = b(this.data, a) || {};
              r
                ? (function e(t, n, r) {
                    for (var o in n)
                      "__proto__" !== o &&
                        "constructor" !== o &&
                        (o in t
                          ? "string" == typeof t[o] ||
                            t[o] instanceof String ||
                            "string" == typeof n[o] ||
                            n[o] instanceof String
                            ? r && (t[o] = n[o])
                            : e(t[o], n[o], r)
                          : (t[o] = n[o]));
                    return t;
                  })(s, n, o)
                : (s = L(L({}, s), n)),
                m(this.data, a, s),
                i.silent || this.emit("added", e, t, n);
            },
          },
          {
            key: "removeResourceBundle",
            value: function (e, t) {
              this.hasResourceBundle(e, t) && delete this.data[e][t],
                this.removeNamespaces(t),
                this.emit("removed", e, t);
            },
          },
          {
            key: "hasResourceBundle",
            value: function (e, t) {
              return void 0 !== this.getResource(e, t);
            },
          },
          {
            key: "getResourceBundle",
            value: function (e, t) {
              return (
                t || (t = this.options.defaultNS),
                "v1" === this.options.compatibilityAPI
                  ? L(L({}, {}), this.getResource(e, t))
                  : this.getResource(e, t)
              );
            },
          },
          {
            key: "getDataByLanguage",
            value: function (e) {
              return this.data[e];
            },
          },
          {
            key: "hasLanguageSomeTranslations",
            value: function (e) {
              var t = this.getDataByLanguage(e);
              return !!((t && Object.keys(t)) || []).find(function (e) {
                return t[e] && Object.keys(t[e]).length > 0;
              });
            },
          },
          {
            key: "toJSON",
            value: function () {
              return this.data;
            },
          },
        ]),
        i
      );
    })(),
    C = {
      processors: {},
      addPostProcessor: function (e) {
        this.processors[e.name] = e;
      },
      handle: function (e, t, n, r, o) {
        var i = this;
        return (
          e.forEach(function (e) {
            i.processors[e] && (t = i.processors[e].process(t, n, r, o));
          }),
          t
        );
      },
    };
  function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function D(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? E(Object(n), !0).forEach(function (t) {
            c(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : E(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function F(e) {
    var t = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var n,
        r = u(e);
      if (t) {
        var o = u(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);
      return s(this, n);
    };
  }
  var I = {},
    A = (function (n) {
      a(s, h);
      var i = F(s);
      function s(e) {
        var n,
          r,
          a,
          u,
          c =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          t(this, s),
          (n = i.call(this)),
          S && h.call(o(n)),
          (r = [
            "resourceStore",
            "languageUtils",
            "pluralResolver",
            "interpolator",
            "backendConnector",
            "i18nFormat",
            "utils",
          ]),
          (a = e),
          (u = o(n)),
          r.forEach(function (e) {
            a[e] && (u[e] = a[e]);
          }),
          (n.options = c),
          void 0 === n.options.keySeparator && (n.options.keySeparator = "."),
          (n.logger = g.create("translator")),
          n
        );
      }
      return (
        r(
          s,
          [
            {
              key: "changeLanguage",
              value: function (e) {
                e && (this.language = e);
              },
            },
            {
              key: "exists",
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { interpolation: {} };
                if (null == e) return !1;
                var n = this.resolve(e, t);
                return n && void 0 !== n.res;
              },
            },
            {
              key: "extractFromKey",
              value: function (e, t) {
                var n =
                  void 0 !== t.nsSeparator
                    ? t.nsSeparator
                    : this.options.nsSeparator;
                void 0 === n && (n = ":");
                var r =
                    void 0 !== t.keySeparator
                      ? t.keySeparator
                      : this.options.keySeparator,
                  o = t.ns || this.options.defaultNS || [],
                  i = n && e.indexOf(n) > -1,
                  a = !(
                    this.options.userDefinedKeySeparator ||
                    t.keySeparator ||
                    this.options.userDefinedNsSeparator ||
                    t.nsSeparator ||
                    (function (e, t, n) {
                      (t = t || ""), (n = n || "");
                      var r = j.filter(function (e) {
                        return t.indexOf(e) < 0 && n.indexOf(e) < 0;
                      });
                      if (0 === r.length) return !0;
                      var o = new RegExp(
                          "(".concat(
                            r
                              .map(function (e) {
                                return "?" === e ? "\\?" : e;
                              })
                              .join("|"),
                            ")"
                          )
                        ),
                        i = !o.test(e);
                      if (!i) {
                        var a = e.indexOf(n);
                        a > 0 && !o.test(e.substring(0, a)) && (i = !0);
                      }
                      return i;
                    })(e, n, r)
                  );
                if (i && !a) {
                  var s = e.match(this.interpolator.nestingRegexp);
                  if (s && s.length > 0) return { key: e, namespaces: o };
                  var u = e.split(n);
                  (n !== r ||
                    (n === r && this.options.ns.indexOf(u[0]) > -1)) &&
                    (o = u.shift()),
                    (e = u.join(r));
                }
                return (
                  "string" == typeof o && (o = [o]), { key: e, namespaces: o }
                );
              },
            },
            {
              key: "translate",
              value: function (t, n, r) {
                var o = this;
                if (
                  ("object" !== e(n) &&
                    this.options.overloadTranslationOptionHandler &&
                    (n =
                      this.options.overloadTranslationOptionHandler(arguments)),
                  n || (n = {}),
                  null == t)
                )
                  return "";
                Array.isArray(t) || (t = [String(t)]);
                var i =
                    void 0 !== n.keySeparator
                      ? n.keySeparator
                      : this.options.keySeparator,
                  a = this.extractFromKey(t[t.length - 1], n),
                  u = a.key,
                  c = a.namespaces,
                  l = c[c.length - 1],
                  f = n.lng || this.language,
                  p =
                    n.appendNamespaceToCIMode ||
                    this.options.appendNamespaceToCIMode;
                if (f && "cimode" === f.toLowerCase()) {
                  if (p) {
                    var g = n.nsSeparator || this.options.nsSeparator;
                    return l + g + u;
                  }
                  return u;
                }
                var h = this.resolve(t, n),
                  d = h && h.res,
                  v = (h && h.usedKey) || u,
                  y = (h && h.exactUsedKey) || u,
                  m = Object.prototype.toString.apply(d),
                  b =
                    void 0 !== n.joinArrays
                      ? n.joinArrays
                      : this.options.joinArrays,
                  O = !this.i18nFormat || this.i18nFormat.handleAsObject;
                if (
                  O &&
                  d &&
                  "string" != typeof d &&
                  "boolean" != typeof d &&
                  "number" != typeof d &&
                  [
                    "[object Number]",
                    "[object Function]",
                    "[object RegExp]",
                  ].indexOf(m) < 0 &&
                  ("string" != typeof b || "[object Array]" !== m)
                ) {
                  if (!n.returnObjects && !this.options.returnObjects)
                    return (
                      this.options.returnedObjectHandler ||
                        this.logger.warn(
                          "accessing an object - but returnObjects options is not enabled!"
                        ),
                      this.options.returnedObjectHandler
                        ? this.options.returnedObjectHandler(
                            v,
                            d,
                            D(D({}, n), {}, { ns: c })
                          )
                        : "key '"
                            .concat(u, " (")
                            .concat(
                              this.language,
                              ")' returned an object instead of string."
                            )
                    );
                  if (i) {
                    var k = "[object Array]" === m,
                      w = k ? [] : {},
                      x = k ? y : v;
                    for (var S in d)
                      if (Object.prototype.hasOwnProperty.call(d, S)) {
                        var j = "".concat(x).concat(i).concat(S);
                        (w[S] = this.translate(
                          j,
                          D(D({}, n), { joinArrays: !1, ns: c })
                        )),
                          w[S] === j && (w[S] = d[S]);
                      }
                    d = w;
                  }
                } else if (O && "string" == typeof b && "[object Array]" === m)
                  (d = d.join(b)) && (d = this.extendTranslation(d, t, n, r));
                else {
                  var P = !1,
                    L = !1,
                    R = void 0 !== n.count && "string" != typeof n.count,
                    N = s.hasDefaultValue(n),
                    C = R ? this.pluralResolver.getSuffix(f, n.count, n) : "",
                    E = n["defaultValue".concat(C)] || n.defaultValue;
                  !this.isValidLookup(d) && N && ((P = !0), (d = E)),
                    this.isValidLookup(d) || ((L = !0), (d = u));
                  var F =
                      (n.missingKeyNoValueFallbackToKey ||
                        this.options.missingKeyNoValueFallbackToKey) &&
                      L
                        ? void 0
                        : d,
                    I = N && E !== d && this.options.updateMissing;
                  if (L || P || I) {
                    if (
                      (this.logger.log(
                        I ? "updateKey" : "missingKey",
                        f,
                        l,
                        u,
                        I ? E : d
                      ),
                      i)
                    ) {
                      var A = this.resolve(
                        u,
                        D(D({}, n), {}, { keySeparator: !1 })
                      );
                      A &&
                        A.res &&
                        this.logger.warn(
                          "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                        );
                    }
                    var T = [],
                      V = this.languageUtils.getFallbackCodes(
                        this.options.fallbackLng,
                        n.lng || this.language
                      );
                    if ("fallback" === this.options.saveMissingTo && V && V[0])
                      for (var U = 0; U < V.length; U++) T.push(V[U]);
                    else
                      "all" === this.options.saveMissingTo
                        ? (T = this.languageUtils.toResolveHierarchy(
                            n.lng || this.language
                          ))
                        : T.push(n.lng || this.language);
                    var K = function (e, t, r) {
                      var i = N && r !== d ? r : F;
                      o.options.missingKeyHandler
                        ? o.options.missingKeyHandler(e, l, t, i, I, n)
                        : o.backendConnector &&
                          o.backendConnector.saveMissing &&
                          o.backendConnector.saveMissing(e, l, t, i, I, n),
                        o.emit("missingKey", e, l, t, d);
                    };
                    this.options.saveMissing &&
                      (this.options.saveMissingPlurals && R
                        ? T.forEach(function (e) {
                            o.pluralResolver
                              .getSuffixes(e, n)
                              .forEach(function (t) {
                                K([e], u + t, n["defaultValue".concat(t)] || E);
                              });
                          })
                        : K(T, u, E));
                  }
                  (d = this.extendTranslation(d, t, n, h, r)),
                    L &&
                      d === u &&
                      this.options.appendNamespaceToMissingKey &&
                      (d = "".concat(l, ":").concat(u)),
                    (L || P) &&
                      this.options.parseMissingKeyHandler &&
                      (d =
                        "v1" !== this.options.compatibilityAPI
                          ? this.options.parseMissingKeyHandler(
                              u,
                              P ? d : void 0
                            )
                          : this.options.parseMissingKeyHandler(d));
                }
                return d;
              },
            },
            {
              key: "extendTranslation",
              value: function (e, t, n, r, o) {
                var i = this;
                if (this.i18nFormat && this.i18nFormat.parse)
                  e = this.i18nFormat.parse(
                    e,
                    n,
                    r.usedLng,
                    r.usedNS,
                    r.usedKey,
                    { resolved: r }
                  );
                else if (!n.skipInterpolation) {
                  n.interpolation &&
                    this.interpolator.init(
                      D(D({}, n), {
                        interpolation: D(
                          D({}, this.options.interpolation),
                          n.interpolation
                        ),
                      })
                    );
                  var a,
                    s =
                      "string" == typeof e &&
                      (n &&
                      n.interpolation &&
                      void 0 !== n.interpolation.skipOnVariables
                        ? n.interpolation.skipOnVariables
                        : this.options.interpolation.skipOnVariables);
                  if (s) {
                    var u = e.match(this.interpolator.nestingRegexp);
                    a = u && u.length;
                  }
                  var c =
                    n.replace && "string" != typeof n.replace ? n.replace : n;
                  if (
                    (this.options.interpolation.defaultVariables &&
                      (c = D(
                        D({}, this.options.interpolation.defaultVariables),
                        c
                      )),
                    (e = this.interpolator.interpolate(
                      e,
                      c,
                      n.lng || this.language,
                      n
                    )),
                    s)
                  ) {
                    var l = e.match(this.interpolator.nestingRegexp);
                    a < (l && l.length) && (n.nest = !1);
                  }
                  !1 !== n.nest &&
                    (e = this.interpolator.nest(
                      e,
                      function () {
                        for (
                          var e = arguments.length, r = new Array(e), a = 0;
                          a < e;
                          a++
                        )
                          r[a] = arguments[a];
                        return o && o[0] === r[0] && !n.context
                          ? (i.logger.warn(
                              "It seems you are nesting recursively key: "
                                .concat(r[0], " in key: ")
                                .concat(t[0])
                            ),
                            null)
                          : i.translate.apply(i, r.concat([t]));
                      },
                      n
                    )),
                    n.interpolation && this.interpolator.reset();
                }
                var f = n.postProcess || this.options.postProcess,
                  p = "string" == typeof f ? [f] : f;
                return (
                  null != e &&
                    p &&
                    p.length &&
                    !1 !== n.applyPostProcessor &&
                    (e = C.handle(
                      p,
                      e,
                      t,
                      this.options && this.options.postProcessPassResolved
                        ? D({ i18nResolved: r }, n)
                        : n,
                      this
                    )),
                  e
                );
              },
            },
            {
              key: "resolve",
              value: function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a = this,
                  s =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                return (
                  "string" == typeof e && (e = [e]),
                  e.forEach(function (e) {
                    if (!a.isValidLookup(t)) {
                      var u = a.extractFromKey(e, s),
                        c = u.key;
                      n = c;
                      var l = u.namespaces;
                      a.options.fallbackNS &&
                        (l = l.concat(a.options.fallbackNS));
                      var f = void 0 !== s.count && "string" != typeof s.count,
                        p =
                          f &&
                          !s.ordinal &&
                          0 === s.count &&
                          a.pluralResolver.shouldUseIntlApi(),
                        g =
                          void 0 !== s.context &&
                          ("string" == typeof s.context ||
                            "number" == typeof s.context) &&
                          "" !== s.context,
                        h = s.lngs
                          ? s.lngs
                          : a.languageUtils.toResolveHierarchy(
                              s.lng || a.language,
                              s.fallbackLng
                            );
                      l.forEach(function (e) {
                        a.isValidLookup(t) ||
                          ((i = e),
                          !I["".concat(h[0], "-").concat(e)] &&
                            a.utils &&
                            a.utils.hasLoadedNamespace &&
                            !a.utils.hasLoadedNamespace(i) &&
                            ((I["".concat(h[0], "-").concat(e)] = !0),
                            a.logger.warn(
                              'key "'
                                .concat(n, '" for languages "')
                                .concat(
                                  h.join(", "),
                                  '" won\'t get resolved as namespace "'
                                )
                                .concat(i, '" was not yet loaded'),
                              "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                            )),
                          h.forEach(function (n) {
                            if (!a.isValidLookup(t)) {
                              o = n;
                              var i,
                                u = [c];
                              if (a.i18nFormat && a.i18nFormat.addLookupKeys)
                                a.i18nFormat.addLookupKeys(u, c, n, e, s);
                              else {
                                var l;
                                f &&
                                  (l = a.pluralResolver.getSuffix(
                                    n,
                                    s.count,
                                    s
                                  ));
                                if (
                                  (f &&
                                    (u.push(c + l), p && u.push(c + "_zero")),
                                  g)
                                ) {
                                  var h = ""
                                    .concat(c)
                                    .concat(a.options.contextSeparator)
                                    .concat(s.context);
                                  u.push(h),
                                    f &&
                                      (u.push(h + l), p && u.push(h + "_zero"));
                                }
                              }
                              for (; (i = u.pop()); )
                                a.isValidLookup(t) ||
                                  ((r = i), (t = a.getResource(n, e, i, s)));
                            }
                          }));
                      });
                    }
                  }),
                  { res: t, usedKey: n, exactUsedKey: r, usedLng: o, usedNS: i }
                );
              },
            },
            {
              key: "isValidLookup",
              value: function (e) {
                return !(
                  void 0 === e ||
                  (!this.options.returnNull && null === e) ||
                  (!this.options.returnEmptyString && "" === e)
                );
              },
            },
            {
              key: "getResource",
              value: function (e, t, n) {
                var r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {};
                return this.i18nFormat && this.i18nFormat.getResource
                  ? this.i18nFormat.getResource(e, t, n, r)
                  : this.resourceStore.getResource(e, t, n, r);
              },
            },
          ],
          [
            {
              key: "hasDefaultValue",
              value: function (e) {
                for (var t in e)
                  if (
                    Object.prototype.hasOwnProperty.call(e, t) &&
                    "defaultValue" === t.substring(0, "defaultValue".length) &&
                    void 0 !== e[t]
                  )
                    return !0;
                return !1;
              },
            },
          ]
        ),
        s
      );
    })();
  function T(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  var V = (function () {
      function e(n) {
        t(this, e),
          (this.options = n),
          (this.supportedLngs = this.options.supportedLngs || !1),
          (this.logger = g.create("languageUtils"));
      }
      return (
        r(e, [
          {
            key: "getScriptPartFromCode",
            value: function (e) {
              if (!e || e.indexOf("-") < 0) return null;
              var t = e.split("-");
              return 2 === t.length
                ? null
                : (t.pop(),
                  "x" === t[t.length - 1].toLowerCase()
                    ? null
                    : this.formatLanguageCode(t.join("-")));
            },
          },
          {
            key: "getLanguagePartFromCode",
            value: function (e) {
              if (!e || e.indexOf("-") < 0) return e;
              var t = e.split("-");
              return this.formatLanguageCode(t[0]);
            },
          },
          {
            key: "formatLanguageCode",
            value: function (e) {
              if ("string" == typeof e && e.indexOf("-") > -1) {
                var t = [
                    "hans",
                    "hant",
                    "latn",
                    "cyrl",
                    "cans",
                    "mong",
                    "arab",
                  ],
                  n = e.split("-");
                return (
                  this.options.lowerCaseLng
                    ? (n = n.map(function (e) {
                        return e.toLowerCase();
                      }))
                    : 2 === n.length
                    ? ((n[0] = n[0].toLowerCase()),
                      (n[1] = n[1].toUpperCase()),
                      t.indexOf(n[1].toLowerCase()) > -1 &&
                        (n[1] = T(n[1].toLowerCase())))
                    : 3 === n.length &&
                      ((n[0] = n[0].toLowerCase()),
                      2 === n[1].length && (n[1] = n[1].toUpperCase()),
                      "sgn" !== n[0] &&
                        2 === n[2].length &&
                        (n[2] = n[2].toUpperCase()),
                      t.indexOf(n[1].toLowerCase()) > -1 &&
                        (n[1] = T(n[1].toLowerCase())),
                      t.indexOf(n[2].toLowerCase()) > -1 &&
                        (n[2] = T(n[2].toLowerCase()))),
                  n.join("-")
                );
              }
              return this.options.cleanCode || this.options.lowerCaseLng
                ? e.toLowerCase()
                : e;
            },
          },
          {
            key: "isSupportedCode",
            value: function (e) {
              return (
                ("languageOnly" === this.options.load ||
                  this.options.nonExplicitSupportedLngs) &&
                  (e = this.getLanguagePartFromCode(e)),
                !this.supportedLngs ||
                  !this.supportedLngs.length ||
                  this.supportedLngs.indexOf(e) > -1
              );
            },
          },
          {
            key: "getBestMatchFromCodes",
            value: function (e) {
              var t,
                n = this;
              return e
                ? (e.forEach(function (e) {
                    if (!t) {
                      var r = n.formatLanguageCode(e);
                      (n.options.supportedLngs && !n.isSupportedCode(r)) ||
                        (t = r);
                    }
                  }),
                  !t &&
                    this.options.supportedLngs &&
                    e.forEach(function (e) {
                      if (!t) {
                        var r = n.getLanguagePartFromCode(e);
                        if (n.isSupportedCode(r)) return (t = r);
                        t = n.options.supportedLngs.find(function (e) {
                          if (0 === e.indexOf(r)) return e;
                        });
                      }
                    }),
                  t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
                  t)
                : null;
            },
          },
          {
            key: "getFallbackCodes",
            value: function (e, t) {
              if (!e) return [];
              if (
                ("function" == typeof e && (e = e(t)),
                "string" == typeof e && (e = [e]),
                "[object Array]" === Object.prototype.toString.apply(e))
              )
                return e;
              if (!t) return e.default || [];
              var n = e[t];
              return (
                n || (n = e[this.getScriptPartFromCode(t)]),
                n || (n = e[this.formatLanguageCode(t)]),
                n || (n = e[this.getLanguagePartFromCode(t)]),
                n || (n = e.default),
                n || []
              );
            },
          },
          {
            key: "toResolveHierarchy",
            value: function (e, t) {
              var n = this,
                r = this.getFallbackCodes(
                  t || this.options.fallbackLng || [],
                  e
                ),
                o = [],
                i = function (e) {
                  e &&
                    (n.isSupportedCode(e)
                      ? o.push(e)
                      : n.logger.warn(
                          "rejecting language code not found in supportedLngs: ".concat(
                            e
                          )
                        ));
                };
              return (
                "string" == typeof e && e.indexOf("-") > -1
                  ? ("languageOnly" !== this.options.load &&
                      i(this.formatLanguageCode(e)),
                    "languageOnly" !== this.options.load &&
                      "currentOnly" !== this.options.load &&
                      i(this.getScriptPartFromCode(e)),
                    "currentOnly" !== this.options.load &&
                      i(this.getLanguagePartFromCode(e)))
                  : "string" == typeof e && i(this.formatLanguageCode(e)),
                r.forEach(function (e) {
                  o.indexOf(e) < 0 && i(n.formatLanguageCode(e));
                }),
                o
              );
            },
          },
        ]),
        e
      );
    })(),
    U = [
      {
        lngs: [
          "ach",
          "ak",
          "am",
          "arn",
          "br",
          "fil",
          "gun",
          "ln",
          "mfe",
          "mg",
          "mi",
          "oc",
          "pt",
          "pt-BR",
          "tg",
          "tl",
          "ti",
          "tr",
          "uz",
          "wa",
        ],
        nr: [1, 2],
        fc: 1,
      },
      {
        lngs: [
          "af",
          "an",
          "ast",
          "az",
          "bg",
          "bn",
          "ca",
          "da",
          "de",
          "dev",
          "el",
          "en",
          "eo",
          "es",
          "et",
          "eu",
          "fi",
          "fo",
          "fur",
          "fy",
          "gl",
          "gu",
          "ha",
          "hi",
          "hu",
          "hy",
          "ia",
          "it",
          "kk",
          "kn",
          "ku",
          "lb",
          "mai",
          "ml",
          "mn",
          "mr",
          "nah",
          "nap",
          "nb",
          "ne",
          "nl",
          "nn",
          "no",
          "nso",
          "pa",
          "pap",
          "pms",
          "ps",
          "pt-PT",
          "rm",
          "sco",
          "se",
          "si",
          "so",
          "son",
          "sq",
          "sv",
          "sw",
          "ta",
          "te",
          "tk",
          "ur",
          "yo",
        ],
        nr: [1, 2],
        fc: 2,
      },
      {
        lngs: [
          "ay",
          "bo",
          "cgg",
          "fa",
          "ht",
          "id",
          "ja",
          "jbo",
          "ka",
          "km",
          "ko",
          "ky",
          "lo",
          "ms",
          "sah",
          "su",
          "th",
          "tt",
          "ug",
          "vi",
          "wo",
          "zh",
        ],
        nr: [1],
        fc: 3,
      },
      {
        lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
        nr: [1, 2, 5],
        fc: 4,
      },
      { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
      { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
      { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
      { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
      { lngs: ["fr"], nr: [1, 2], fc: 9 },
      { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
      { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
      { lngs: ["is"], nr: [1, 2], fc: 12 },
      { lngs: ["jv"], nr: [0, 1], fc: 13 },
      { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
      { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
      { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
      { lngs: ["mk"], nr: [1, 2], fc: 17 },
      { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
      { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
      { lngs: ["or"], nr: [2, 1], fc: 2 },
      { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
      { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
      { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
    ],
    K = {
      1: function (e) {
        return Number(e > 1);
      },
      2: function (e) {
        return Number(1 != e);
      },
      3: function (e) {
        return 0;
      },
      4: function (e) {
        return Number(
          e % 10 == 1 && e % 100 != 11
            ? 0
            : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
            ? 1
            : 2
        );
      },
      5: function (e) {
        return Number(
          0 == e
            ? 0
            : 1 == e
            ? 1
            : 2 == e
            ? 2
            : e % 100 >= 3 && e % 100 <= 10
            ? 3
            : e % 100 >= 11
            ? 4
            : 5
        );
      },
      6: function (e) {
        return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
      },
      7: function (e) {
        return Number(
          1 == e
            ? 0
            : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
            ? 1
            : 2
        );
      },
      8: function (e) {
        return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
      },
      9: function (e) {
        return Number(e >= 2);
      },
      10: function (e) {
        return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
      },
      11: function (e) {
        return Number(
          1 == e || 11 == e
            ? 0
            : 2 == e || 12 == e
            ? 1
            : e > 2 && e < 20
            ? 2
            : 3
        );
      },
      12: function (e) {
        return Number(e % 10 != 1 || e % 100 == 11);
      },
      13: function (e) {
        return Number(0 !== e);
      },
      14: function (e) {
        return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
      },
      15: function (e) {
        return Number(
          e % 10 == 1 && e % 100 != 11
            ? 0
            : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
            ? 1
            : 2
        );
      },
      16: function (e) {
        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
      },
      17: function (e) {
        return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
      },
      18: function (e) {
        return Number(0 == e ? 0 : 1 == e ? 1 : 2);
      },
      19: function (e) {
        return Number(
          1 == e
            ? 0
            : 0 == e || (e % 100 > 1 && e % 100 < 11)
            ? 1
            : e % 100 > 10 && e % 100 < 20
            ? 2
            : 3
        );
      },
      20: function (e) {
        return Number(
          1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2
        );
      },
      21: function (e) {
        return Number(
          e % 100 == 1
            ? 1
            : e % 100 == 2
            ? 2
            : e % 100 == 3 || e % 100 == 4
            ? 3
            : 0
        );
      },
      22: function (e) {
        return Number(
          1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
        );
      },
    },
    B = ["v1", "v2", "v3"],
    M = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
  var H = (function () {
    function e(n) {
      var r,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      t(this, e),
        (this.languageUtils = n),
        (this.options = o),
        (this.logger = g.create("pluralResolver")),
        (this.options.compatibilityJSON &&
          "v4" !== this.options.compatibilityJSON) ||
          ("undefined" != typeof Intl && Intl.PluralRules) ||
          ((this.options.compatibilityJSON = "v3"),
          this.logger.error(
            "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
          )),
        (this.rules =
          ((r = {}),
          U.forEach(function (e) {
            e.lngs.forEach(function (t) {
              r[t] = { numbers: e.nr, plurals: K[e.fc] };
            });
          }),
          r));
    }
    return (
      r(e, [
        {
          key: "addRule",
          value: function (e, t) {
            this.rules[e] = t;
          },
        },
        {
          key: "getRule",
          value: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            if (this.shouldUseIntlApi())
              try {
                return new Intl.PluralRules(e, {
                  type: t.ordinal ? "ordinal" : "cardinal",
                });
              } catch (e) {
                return;
              }
            return (
              this.rules[e] ||
              this.rules[this.languageUtils.getLanguagePartFromCode(e)]
            );
          },
        },
        {
          key: "needsPlural",
          value: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = this.getRule(e, t);
            return this.shouldUseIntlApi()
              ? n && n.resolvedOptions().pluralCategories.length > 1
              : n && n.numbers.length > 1;
          },
        },
        {
          key: "getPluralFormsOfKey",
          value: function (e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            return this.getSuffixes(e, n).map(function (e) {
              return "".concat(t).concat(e);
            });
          },
        },
        {
          key: "getSuffixes",
          value: function (e) {
            var t = this,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = this.getRule(e, n);
            return r
              ? this.shouldUseIntlApi()
                ? r
                    .resolvedOptions()
                    .pluralCategories.sort(function (e, t) {
                      return M[e] - M[t];
                    })
                    .map(function (e) {
                      return "".concat(t.options.prepend).concat(e);
                    })
                : r.numbers.map(function (r) {
                    return t.getSuffix(e, r, n);
                  })
              : [];
          },
        },
        {
          key: "getSuffix",
          value: function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = this.getRule(e, n);
            return r
              ? this.shouldUseIntlApi()
                ? "".concat(this.options.prepend).concat(r.select(t))
                : this.getSuffixRetroCompatible(r, t)
              : (this.logger.warn("no plural rule found for: ".concat(e)), "");
          },
        },
        {
          key: "getSuffixRetroCompatible",
          value: function (e, t) {
            var n = this,
              r = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
              o = e.numbers[r];
            this.options.simplifyPluralSuffix &&
              2 === e.numbers.length &&
              1 === e.numbers[0] &&
              (2 === o ? (o = "plural") : 1 === o && (o = ""));
            var i = function () {
              return n.options.prepend && o.toString()
                ? n.options.prepend + o.toString()
                : o.toString();
            };
            return "v1" === this.options.compatibilityJSON
              ? 1 === o
                ? ""
                : "number" == typeof o
                ? "_plural_".concat(o.toString())
                : i()
              : "v2" === this.options.compatibilityJSON
              ? i()
              : this.options.simplifyPluralSuffix &&
                2 === e.numbers.length &&
                1 === e.numbers[0]
              ? i()
              : this.options.prepend && r.toString()
              ? this.options.prepend + r.toString()
              : r.toString();
          },
        },
        {
          key: "shouldUseIntlApi",
          value: function () {
            return !B.includes(this.options.compatibilityJSON);
          },
        },
      ]),
      e
    );
  })();
  function z(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function J(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? z(Object(n), !0).forEach(function (t) {
            c(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : z(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  var _ = (function () {
    function e() {
      var n =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t(this, e),
        (this.logger = g.create("interpolator")),
        (this.options = n),
        (this.format =
          (n.interpolation && n.interpolation.format) ||
          function (e) {
            return e;
          }),
        this.init(n);
    }
    return (
      r(e, [
        {
          key: "init",
          value: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            e.interpolation || (e.interpolation = { escapeValue: !0 });
            var t = e.interpolation;
            (this.escape = void 0 !== t.escape ? t.escape : x),
              (this.escapeValue = void 0 === t.escapeValue || t.escapeValue),
              (this.useRawValueToEscape =
                void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
              (this.prefix = t.prefix ? k(t.prefix) : t.prefixEscaped || "{{"),
              (this.suffix = t.suffix ? k(t.suffix) : t.suffixEscaped || "}}"),
              (this.formatSeparator = t.formatSeparator
                ? t.formatSeparator
                : t.formatSeparator || ","),
              (this.unescapePrefix = t.unescapeSuffix
                ? ""
                : t.unescapePrefix || "-"),
              (this.unescapeSuffix = this.unescapePrefix
                ? ""
                : t.unescapeSuffix || ""),
              (this.nestingPrefix = t.nestingPrefix
                ? k(t.nestingPrefix)
                : t.nestingPrefixEscaped || k("$t(")),
              (this.nestingSuffix = t.nestingSuffix
                ? k(t.nestingSuffix)
                : t.nestingSuffixEscaped || k(")")),
              (this.nestingOptionsSeparator = t.nestingOptionsSeparator
                ? t.nestingOptionsSeparator
                : t.nestingOptionsSeparator || ","),
              (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
              (this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat),
              this.resetRegExp();
          },
        },
        {
          key: "reset",
          value: function () {
            this.options && this.init(this.options);
          },
        },
        {
          key: "resetRegExp",
          value: function () {
            var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
            this.regexp = new RegExp(e, "g");
            var t = ""
              .concat(this.prefix)
              .concat(this.unescapePrefix, "(.+?)")
              .concat(this.unescapeSuffix)
              .concat(this.suffix);
            this.regexpUnescape = new RegExp(t, "g");
            var n = ""
              .concat(this.nestingPrefix, "(.+?)")
              .concat(this.nestingSuffix);
            this.nestingRegexp = new RegExp(n, "g");
          },
        },
        {
          key: "interpolate",
          value: function (e, t, n, r) {
            var o,
              i,
              a,
              s = this,
              u =
                (this.options &&
                  this.options.interpolation &&
                  this.options.interpolation.defaultVariables) ||
                {};
            function c(e) {
              return e.replace(/\$/g, "$$$$");
            }
            var l = function (e) {
              if (e.indexOf(s.formatSeparator) < 0) {
                var o = O(t, u, e);
                return s.alwaysFormat
                  ? s.format(
                      o,
                      void 0,
                      n,
                      J(J(J({}, r), t), {}, { interpolationkey: e })
                    )
                  : o;
              }
              var i = e.split(s.formatSeparator),
                a = i.shift().trim(),
                c = i.join(s.formatSeparator).trim();
              return s.format(
                O(t, u, a),
                c,
                n,
                J(J(J({}, r), t), {}, { interpolationkey: a })
              );
            };
            this.resetRegExp();
            var f =
                (r && r.missingInterpolationHandler) ||
                this.options.missingInterpolationHandler,
              p =
                r &&
                r.interpolation &&
                void 0 !== r.interpolation.skipOnVariables
                  ? r.interpolation.skipOnVariables
                  : this.options.interpolation.skipOnVariables;
            return (
              [
                {
                  regex: this.regexpUnescape,
                  safeValue: function (e) {
                    return c(e);
                  },
                },
                {
                  regex: this.regexp,
                  safeValue: function (e) {
                    return s.escapeValue ? c(s.escape(e)) : c(e);
                  },
                },
              ].forEach(function (t) {
                for (a = 0; (o = t.regex.exec(e)); ) {
                  var n = o[1].trim();
                  if (void 0 === (i = l(n)))
                    if ("function" == typeof f) {
                      var u = f(e, o, r);
                      i = "string" == typeof u ? u : "";
                    } else if (r && r.hasOwnProperty(n)) i = "";
                    else {
                      if (p) {
                        i = o[0];
                        continue;
                      }
                      s.logger.warn(
                        "missed to pass in variable "
                          .concat(n, " for interpolating ")
                          .concat(e)
                      ),
                        (i = "");
                    }
                  else
                    "string" == typeof i || s.useRawValueToEscape || (i = v(i));
                  var c = t.safeValue(i);
                  if (
                    ((e = e.replace(o[0], c)),
                    p
                      ? ((t.regex.lastIndex += c.length),
                        (t.regex.lastIndex -= o[0].length))
                      : (t.regex.lastIndex = 0),
                    ++a >= s.maxReplaces)
                  )
                    break;
                }
              }),
              e
            );
          },
        },
        {
          key: "nest",
          value: function (e, t) {
            var n,
              r,
              o = this,
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              a = J({}, i);
            function s(e, t) {
              var n = this.nestingOptionsSeparator;
              if (e.indexOf(n) < 0) return e;
              var r = e.split(new RegExp("".concat(n, "[ ]*{"))),
                o = "{".concat(r[1]);
              (e = r[0]), (o = (o = this.interpolate(o, a)).replace(/'/g, '"'));
              try {
                (a = JSON.parse(o)), t && (a = J(J({}, t), a));
              } catch (t) {
                return (
                  this.logger.warn(
                    "failed parsing options string in nesting for key ".concat(
                      e
                    ),
                    t
                  ),
                  "".concat(e).concat(n).concat(o)
                );
              }
              return delete a.defaultValue, e;
            }
            for (
              a.applyPostProcessor = !1, delete a.defaultValue;
              (n = this.nestingRegexp.exec(e));

            ) {
              var u = [],
                c = !1;
              if (
                -1 !== n[0].indexOf(this.formatSeparator) &&
                !/{.*}/.test(n[1])
              ) {
                var l = n[1].split(this.formatSeparator).map(function (e) {
                  return e.trim();
                });
                (n[1] = l.shift()), (u = l), (c = !0);
              }
              if (
                (r = t(s.call(this, n[1].trim(), a), a)) &&
                n[0] === e &&
                "string" != typeof r
              )
                return r;
              "string" != typeof r && (r = v(r)),
                r ||
                  (this.logger.warn(
                    "missed to resolve ".concat(n[1], " for nesting ").concat(e)
                  ),
                  (r = "")),
                c &&
                  (r = u.reduce(function (e, t) {
                    return o.format(
                      e,
                      t,
                      i.lng,
                      J(J({}, i), {}, { interpolationkey: n[1].trim() })
                    );
                  }, r.trim())),
                (e = e.replace(n[0], r)),
                (this.regexp.lastIndex = 0);
            }
            return e;
          },
        },
      ]),
      e
    );
  })();
  function q(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function $(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return q(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? q(e, t)
              : void 0
          );
        }
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function W(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function Y(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? W(Object(n), !0).forEach(function (t) {
            c(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : W(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  var G = (function () {
    function e() {
      var n =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t(this, e),
        (this.logger = g.create("formatter")),
        (this.options = n),
        (this.formats = {
          number: function (e, t, n) {
            return new Intl.NumberFormat(t, n).format(e);
          },
          currency: function (e, t, n) {
            return new Intl.NumberFormat(
              t,
              Y(Y({}, n), {}, { style: "currency" })
            ).format(e);
          },
          datetime: function (e, t, n) {
            return new Intl.DateTimeFormat(t, Y({}, n)).format(e);
          },
          relativetime: function (e, t, n) {
            return new Intl.RelativeTimeFormat(t, Y({}, n)).format(
              e,
              n.range || "day"
            );
          },
          list: function (e, t, n) {
            return new Intl.ListFormat(t, Y({}, n)).format(e);
          },
        }),
        this.init(n);
    }
    return (
      r(e, [
        {
          key: "init",
          value: function (e) {
            var t = (
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { interpolation: {} }
            ).interpolation;
            this.formatSeparator = t.formatSeparator
              ? t.formatSeparator
              : t.formatSeparator || ",";
          },
        },
        {
          key: "add",
          value: function (e, t) {
            this.formats[e.toLowerCase().trim()] = t;
          },
        },
        {
          key: "format",
          value: function (e, t, n, r) {
            var o = this;
            return t.split(this.formatSeparator).reduce(function (e, t) {
              var i = (function (e) {
                  var t = e.toLowerCase().trim(),
                    n = {};
                  if (e.indexOf("(") > -1) {
                    var r = e.split("(");
                    t = r[0].toLowerCase().trim();
                    var o = r[1].substring(0, r[1].length - 1);
                    "currency" === t && o.indexOf(":") < 0
                      ? n.currency || (n.currency = o.trim())
                      : "relativetime" === t && o.indexOf(":") < 0
                      ? n.range || (n.range = o.trim())
                      : o.split(";").forEach(function (e) {
                          if (e) {
                            var t = $(e.split(":")),
                              r = t[0],
                              o = t.slice(1).join(":");
                            n[r.trim()] || (n[r.trim()] = o.trim()),
                              "false" === o.trim() && (n[r.trim()] = !1),
                              "true" === o.trim() && (n[r.trim()] = !0),
                              isNaN(o.trim()) ||
                                (n[r.trim()] = parseInt(o.trim(), 10));
                          }
                        });
                  }
                  return { formatName: t, formatOptions: n };
                })(t),
                a = i.formatName,
                s = i.formatOptions;
              if (o.formats[a]) {
                var u = e;
                try {
                  var c =
                      (r &&
                        r.formatParams &&
                        r.formatParams[r.interpolationkey]) ||
                      {},
                    l = c.locale || c.lng || r.locale || r.lng || n;
                  u = o.formats[a](e, l, Y(Y(Y({}, s), r), c));
                } catch (e) {
                  o.logger.warn(e);
                }
                return u;
              }
              return (
                o.logger.warn("there was no format function for ".concat(a)), e
              );
            }, e);
          },
        },
      ]),
      e
    );
  })();
  function Q(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function X(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? Q(Object(n), !0).forEach(function (t) {
            c(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Q(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function Z(e) {
    var t = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var n,
        r = u(e);
      if (t) {
        var o = u(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);
      return s(this, n);
    };
  }
  var ee = (function (e) {
    a(i, h);
    var n = Z(i);
    function i(e, r, a) {
      var s,
        u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return (
        t(this, i),
        (s = n.call(this)),
        S && h.call(o(s)),
        (s.backend = e),
        (s.store = r),
        (s.services = a),
        (s.languageUtils = a.languageUtils),
        (s.options = u),
        (s.logger = g.create("backendConnector")),
        (s.state = {}),
        (s.queue = []),
        s.backend && s.backend.init && s.backend.init(a, u.backend, u),
        s
      );
    }
    return (
      r(i, [
        {
          key: "queueLoad",
          value: function (e, t, n, r) {
            var o = this,
              i = [],
              a = [],
              s = [],
              u = [];
            return (
              e.forEach(function (e) {
                var r = !0;
                t.forEach(function (t) {
                  var s = "".concat(e, "|").concat(t);
                  !n.reload && o.store.hasResourceBundle(e, t)
                    ? (o.state[s] = 2)
                    : o.state[s] < 0 ||
                      (1 === o.state[s]
                        ? a.indexOf(s) < 0 && a.push(s)
                        : ((o.state[s] = 1),
                          (r = !1),
                          a.indexOf(s) < 0 && a.push(s),
                          i.indexOf(s) < 0 && i.push(s),
                          u.indexOf(t) < 0 && u.push(t)));
                }),
                  r || s.push(e);
              }),
              (i.length || a.length) &&
                this.queue.push({
                  pending: a,
                  loaded: {},
                  errors: [],
                  callback: r,
                }),
              { toLoad: i, pending: a, toLoadLanguages: s, toLoadNamespaces: u }
            );
          },
        },
        {
          key: "loaded",
          value: function (e, t, n) {
            var r = e.split("|"),
              o = r[0],
              i = r[1];
            t && this.emit("failedLoading", o, i, t),
              n && this.store.addResourceBundle(o, i, n),
              (this.state[e] = t ? -1 : 2);
            var a = {};
            this.queue.forEach(function (n) {
              var r, s, u, c, l, f;
              (r = n.loaded),
                (s = i),
                (c = y(r, [o], Object)),
                (l = c.obj),
                (f = c.k),
                (l[f] = l[f] || []),
                u && (l[f] = l[f].concat(s)),
                u || l[f].push(s),
                (function (e, t) {
                  for (var n = e.indexOf(t); -1 !== n; )
                    e.splice(n, 1), (n = e.indexOf(t));
                })(n.pending, e),
                t && n.errors.push(t),
                0 !== n.pending.length ||
                  n.done ||
                  (Object.keys(n.loaded).forEach(function (e) {
                    a[e] || (a[e] = []),
                      n.loaded[e].length &&
                        n.loaded[e].forEach(function (t) {
                          a[e].indexOf(t) < 0 && a[e].push(t);
                        });
                  }),
                  (n.done = !0),
                  n.errors.length ? n.callback(n.errors) : n.callback());
            }),
              this.emit("loaded", a),
              (this.queue = this.queue.filter(function (e) {
                return !e.done;
              }));
          },
        },
        {
          key: "read",
          value: function (e, t, n) {
            var r = this,
              o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 0,
              i =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : 350,
              a = arguments.length > 5 ? arguments[5] : void 0;
            return e.length
              ? this.backend[n](e, t, function (s, u) {
                  s && u && o < 5
                    ? setTimeout(function () {
                        r.read.call(r, e, t, n, o + 1, 2 * i, a);
                      }, i)
                    : a(s, u);
                })
              : a(null, {});
          },
        },
        {
          key: "prepareLoading",
          value: function (e, t) {
            var n = this,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              o = arguments.length > 3 ? arguments[3] : void 0;
            if (!this.backend)
              return (
                this.logger.warn(
                  "No backend was added via i18next.use. Will not load resources."
                ),
                o && o()
              );
            "string" == typeof e &&
              (e = this.languageUtils.toResolveHierarchy(e)),
              "string" == typeof t && (t = [t]);
            var i = this.queueLoad(e, t, r, o);
            if (!i.toLoad.length) return i.pending.length || o(), null;
            i.toLoad.forEach(function (e) {
              n.loadOne(e);
            });
          },
        },
        {
          key: "load",
          value: function (e, t, n) {
            this.prepareLoading(e, t, {}, n);
          },
        },
        {
          key: "reload",
          value: function (e, t, n) {
            this.prepareLoading(e, t, { reload: !0 }, n);
          },
        },
        {
          key: "loadOne",
          value: function (e) {
            var t = this,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              r = e.split("|"),
              o = r[0],
              i = r[1];
            this.read(o, i, "read", void 0, void 0, function (r, a) {
              r &&
                t.logger.warn(
                  ""
                    .concat(n, "loading namespace ")
                    .concat(i, " for language ")
                    .concat(o, " failed"),
                  r
                ),
                !r &&
                  a &&
                  t.logger.log(
                    ""
                      .concat(n, "loaded namespace ")
                      .concat(i, " for language ")
                      .concat(o),
                    a
                  ),
                t.loaded(e, r, a);
            });
          },
        },
        {
          key: "saveMissing",
          value: function (e, t, n, r, o) {
            var i =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : {};
            this.services.utils &&
            this.services.utils.hasLoadedNamespace &&
            !this.services.utils.hasLoadedNamespace(t)
              ? this.logger.warn(
                  'did not save key "'
                    .concat(n, '" as the namespace "')
                    .concat(t, '" was not yet loaded'),
                  "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                )
              : null != n &&
                "" !== n &&
                (this.backend &&
                  this.backend.create &&
                  this.backend.create(
                    e,
                    t,
                    n,
                    r,
                    null,
                    X(X({}, i), {}, { isUpdate: o })
                  ),
                e && e[0] && this.store.addResource(e[0], t, n, r));
          },
        },
      ]),
      i
    );
  })();
  function te(e) {
    return (
      "string" == typeof e.ns && (e.ns = [e.ns]),
      "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
      "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
      e.supportedLngs &&
        e.supportedLngs.indexOf("cimode") < 0 &&
        (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
      e
    );
  }
  function ne(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function re(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? ne(Object(n), !0).forEach(function (t) {
            c(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ne(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function oe(e) {
    var t = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var n,
        r = u(e);
      if (t) {
        var o = u(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);
      return s(this, n);
    };
  }
  function ie() {}
  var ae = (function (n) {
    a(u, h);
    var i = oe(u);
    function u() {
      var e,
        n,
        r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        a = arguments.length > 1 ? arguments[1] : void 0;
      if (
        (t(this, u),
        (e = i.call(this)),
        S && h.call(o(e)),
        (e.options = te(r)),
        (e.services = {}),
        (e.logger = g),
        (e.modules = { external: [] }),
        (n = o(e)),
        Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach(function (
          e
        ) {
          "function" == typeof n[e] && (n[e] = n[e].bind(n));
        }),
        a && !e.isInitialized && !r.isClone)
      ) {
        if (!e.options.initImmediate) return e.init(r, a), s(e, o(e));
        setTimeout(function () {
          e.init(r, a);
        }, 0);
      }
      return e;
    }
    return (
      r(u, [
        {
          key: "init",
          value: function () {
            var t = this,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = arguments.length > 1 ? arguments[1] : void 0;
            "function" == typeof n && ((r = n), (n = {})),
              !n.defaultNS &&
                n.ns &&
                ("string" == typeof n.ns
                  ? (n.defaultNS = n.ns)
                  : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
            var o = {
              debug: !1,
              initImmediate: !0,
              ns: ["translation"],
              defaultNS: ["translation"],
              fallbackLng: ["dev"],
              fallbackNS: !1,
              supportedLngs: !1,
              nonExplicitSupportedLngs: !1,
              load: "all",
              preload: !1,
              simplifyPluralSuffix: !0,
              keySeparator: ".",
              nsSeparator: ":",
              pluralSeparator: "_",
              contextSeparator: "_",
              partialBundledLanguages: !1,
              saveMissing: !1,
              updateMissing: !1,
              saveMissingTo: "fallback",
              saveMissingPlurals: !0,
              missingKeyHandler: !1,
              missingInterpolationHandler: !1,
              postProcess: !1,
              postProcessPassResolved: !1,
              returnNull: !0,
              returnEmptyString: !0,
              returnObjects: !1,
              joinArrays: !1,
              returnedObjectHandler: !1,
              parseMissingKeyHandler: !1,
              appendNamespaceToMissingKey: !1,
              appendNamespaceToCIMode: !1,
              overloadTranslationOptionHandler: function (t) {
                var n = {};
                if (
                  ("object" === e(t[1]) && (n = t[1]),
                  "string" == typeof t[1] && (n.defaultValue = t[1]),
                  "string" == typeof t[2] && (n.tDescription = t[2]),
                  "object" === e(t[2]) || "object" === e(t[3]))
                ) {
                  var r = t[3] || t[2];
                  Object.keys(r).forEach(function (e) {
                    n[e] = r[e];
                  });
                }
                return n;
              },
              interpolation: {
                escapeValue: !0,
                format: function (e, t, n, r) {
                  return e;
                },
                prefix: "{{",
                suffix: "}}",
                formatSeparator: ",",
                unescapePrefix: "-",
                nestingPrefix: "$t(",
                nestingSuffix: ")",
                nestingOptionsSeparator: ",",
                maxReplaces: 1e3,
                skipOnVariables: !0,
              },
            };
            function i(e) {
              return e ? ("function" == typeof e ? new e() : e) : null;
            }
            if (
              ((this.options = re(re(re({}, o), this.options), te(n))),
              "v1" !== this.options.compatibilityAPI &&
                (this.options.interpolation = re(
                  re({}, o.interpolation),
                  this.options.interpolation
                )),
              void 0 !== n.keySeparator &&
                (this.options.userDefinedKeySeparator = n.keySeparator),
              void 0 !== n.nsSeparator &&
                (this.options.userDefinedNsSeparator = n.nsSeparator),
              !this.options.isClone)
            ) {
              var a;
              this.modules.logger
                ? g.init(i(this.modules.logger), this.options)
                : g.init(null, this.options),
                this.modules.formatter
                  ? (a = this.modules.formatter)
                  : "undefined" != typeof Intl && (a = G);
              var s = new V(this.options);
              this.store = new N(this.options.resources, this.options);
              var u = this.services;
              (u.logger = g),
                (u.resourceStore = this.store),
                (u.languageUtils = s),
                (u.pluralResolver = new H(s, {
                  prepend: this.options.pluralSeparator,
                  compatibilityJSON: this.options.compatibilityJSON,
                  simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                })),
                !a ||
                  (this.options.interpolation.format &&
                    this.options.interpolation.format !==
                      o.interpolation.format) ||
                  ((u.formatter = i(a)),
                  u.formatter.init(u, this.options),
                  (this.options.interpolation.format = u.formatter.format.bind(
                    u.formatter
                  ))),
                (u.interpolator = new _(this.options)),
                (u.utils = {
                  hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
                }),
                (u.backendConnector = new ee(
                  i(this.modules.backend),
                  u.resourceStore,
                  u,
                  this.options
                )),
                u.backendConnector.on("*", function (e) {
                  for (
                    var n = arguments.length,
                      r = new Array(n > 1 ? n - 1 : 0),
                      o = 1;
                    o < n;
                    o++
                  )
                    r[o - 1] = arguments[o];
                  t.emit.apply(t, [e].concat(r));
                }),
                this.modules.languageDetector &&
                  ((u.languageDetector = i(this.modules.languageDetector)),
                  u.languageDetector.init(
                    u,
                    this.options.detection,
                    this.options
                  )),
                this.modules.i18nFormat &&
                  ((u.i18nFormat = i(this.modules.i18nFormat)),
                  u.i18nFormat.init && u.i18nFormat.init(this)),
                (this.translator = new A(this.services, this.options)),
                this.translator.on("*", function (e) {
                  for (
                    var n = arguments.length,
                      r = new Array(n > 1 ? n - 1 : 0),
                      o = 1;
                    o < n;
                    o++
                  )
                    r[o - 1] = arguments[o];
                  t.emit.apply(t, [e].concat(r));
                }),
                this.modules.external.forEach(function (e) {
                  e.init && e.init(t);
                });
            }
            if (
              ((this.format = this.options.interpolation.format),
              r || (r = ie),
              this.options.fallbackLng &&
                !this.services.languageDetector &&
                !this.options.lng)
            ) {
              var c = this.services.languageUtils.getFallbackCodes(
                this.options.fallbackLng
              );
              c.length > 0 && "dev" !== c[0] && (this.options.lng = c[0]);
            }
            this.services.languageDetector ||
              this.options.lng ||
              this.logger.warn(
                "init: no languageDetector is used and no lng is defined"
              );
            [
              "getResource",
              "hasResourceBundle",
              "getResourceBundle",
              "getDataByLanguage",
            ].forEach(function (e) {
              t[e] = function () {
                var n;
                return (n = t.store)[e].apply(n, arguments);
              };
            });
            [
              "addResource",
              "addResources",
              "addResourceBundle",
              "removeResourceBundle",
            ].forEach(function (e) {
              t[e] = function () {
                var n;
                return (n = t.store)[e].apply(n, arguments), t;
              };
            });
            var l = d(),
              f = function () {
                var e = function (e, n) {
                  t.isInitialized &&
                    !t.initializedStoreOnce &&
                    t.logger.warn(
                      "init: i18next is already initialized. You should call init just once!"
                    ),
                    (t.isInitialized = !0),
                    t.options.isClone || t.logger.log("initialized", t.options),
                    t.emit("initialized", t.options),
                    l.resolve(n),
                    r(e, n);
                };
                if (
                  t.languages &&
                  "v1" !== t.options.compatibilityAPI &&
                  !t.isInitialized
                )
                  return e(null, t.t.bind(t));
                t.changeLanguage(t.options.lng, e);
              };
            return (
              this.options.resources || !this.options.initImmediate
                ? f()
                : setTimeout(f, 0),
              l
            );
          },
        },
        {
          key: "loadResources",
          value: function (e) {
            var t = this,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : ie,
              r = "string" == typeof e ? e : this.language;
            if (
              ("function" == typeof e && (n = e),
              !this.options.resources || this.options.partialBundledLanguages)
            ) {
              if (r && "cimode" === r.toLowerCase()) return n();
              var o = [],
                i = function (e) {
                  e &&
                    t.services.languageUtils
                      .toResolveHierarchy(e)
                      .forEach(function (e) {
                        o.indexOf(e) < 0 && o.push(e);
                      });
                };
              if (r) i(r);
              else
                this.services.languageUtils
                  .getFallbackCodes(this.options.fallbackLng)
                  .forEach(function (e) {
                    return i(e);
                  });
              this.options.preload &&
                this.options.preload.forEach(function (e) {
                  return i(e);
                }),
                this.services.backendConnector.load(
                  o,
                  this.options.ns,
                  function (e) {
                    e ||
                      t.resolvedLanguage ||
                      !t.language ||
                      t.setResolvedLanguage(t.language),
                      n(e);
                  }
                );
            } else n(null);
          },
        },
        {
          key: "reloadResources",
          value: function (e, t, n) {
            var r = d();
            return (
              e || (e = this.languages),
              t || (t = this.options.ns),
              n || (n = ie),
              this.services.backendConnector.reload(e, t, function (e) {
                r.resolve(), n(e);
              }),
              r
            );
          },
        },
        {
          key: "use",
          value: function (e) {
            if (!e)
              throw new Error(
                "You are passing an undefined module! Please check the object you are passing to i18next.use()"
              );
            if (!e.type)
              throw new Error(
                "You are passing a wrong module! Please check the object you are passing to i18next.use()"
              );
            return (
              "backend" === e.type && (this.modules.backend = e),
              ("logger" === e.type || (e.log && e.warn && e.error)) &&
                (this.modules.logger = e),
              "languageDetector" === e.type &&
                (this.modules.languageDetector = e),
              "i18nFormat" === e.type && (this.modules.i18nFormat = e),
              "postProcessor" === e.type && C.addPostProcessor(e),
              "formatter" === e.type && (this.modules.formatter = e),
              "3rdParty" === e.type && this.modules.external.push(e),
              this
            );
          },
        },
        {
          key: "setResolvedLanguage",
          value: function (e) {
            if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
              for (var t = 0; t < this.languages.length; t++) {
                var n = this.languages[t];
                if (
                  !(["cimode", "dev"].indexOf(n) > -1) &&
                  this.store.hasLanguageSomeTranslations(n)
                ) {
                  this.resolvedLanguage = n;
                  break;
                }
              }
          },
        },
        {
          key: "changeLanguage",
          value: function (e, t) {
            var n = this;
            this.isLanguageChangingTo = e;
            var r = d();
            this.emit("languageChanging", e);
            var o = function (e) {
                (n.language = e),
                  (n.languages =
                    n.services.languageUtils.toResolveHierarchy(e)),
                  (n.resolvedLanguage = void 0),
                  n.setResolvedLanguage(e);
              },
              i = function (i) {
                e || i || !n.services.languageDetector || (i = []);
                var a =
                  "string" == typeof i
                    ? i
                    : n.services.languageUtils.getBestMatchFromCodes(i);
                a &&
                  (n.language || o(a),
                  n.translator.language || n.translator.changeLanguage(a),
                  n.services.languageDetector &&
                    n.services.languageDetector.cacheUserLanguage(a)),
                  n.loadResources(a, function (e) {
                    !(function (e, i) {
                      i
                        ? (o(i),
                          n.translator.changeLanguage(i),
                          (n.isLanguageChangingTo = void 0),
                          n.emit("languageChanged", i),
                          n.logger.log("languageChanged", i))
                        : (n.isLanguageChangingTo = void 0),
                        r.resolve(function () {
                          return n.t.apply(n, arguments);
                        }),
                        t &&
                          t(e, function () {
                            return n.t.apply(n, arguments);
                          });
                    })(e, a);
                  });
              };
            return (
              e ||
              !this.services.languageDetector ||
              this.services.languageDetector.async
                ? !e &&
                  this.services.languageDetector &&
                  this.services.languageDetector.async
                  ? this.services.languageDetector.detect(i)
                  : i(e)
                : i(this.services.languageDetector.detect()),
              r
            );
          },
        },
        {
          key: "getFixedT",
          value: function (t, n, r) {
            var o = this,
              i = function t(n, i) {
                var a;
                if ("object" !== e(i)) {
                  for (
                    var s = arguments.length,
                      u = new Array(s > 2 ? s - 2 : 0),
                      c = 2;
                    c < s;
                    c++
                  )
                    u[c - 2] = arguments[c];
                  a = o.options.overloadTranslationOptionHandler(
                    [n, i].concat(u)
                  );
                } else a = re({}, i);
                (a.lng = a.lng || t.lng),
                  (a.lngs = a.lngs || t.lngs),
                  (a.ns = a.ns || t.ns);
                var l = o.options.keySeparator || ".",
                  f = r ? "".concat(r).concat(l).concat(n) : n;
                return o.t(f, a);
              };
            return (
              "string" == typeof t ? (i.lng = t) : (i.lngs = t),
              (i.ns = n),
              (i.keyPrefix = r),
              i
            );
          },
        },
        {
          key: "t",
          value: function () {
            var e;
            return (
              this.translator &&
              (e = this.translator).translate.apply(e, arguments)
            );
          },
        },
        {
          key: "exists",
          value: function () {
            var e;
            return (
              this.translator &&
              (e = this.translator).exists.apply(e, arguments)
            );
          },
        },
        {
          key: "setDefaultNamespace",
          value: function (e) {
            this.options.defaultNS = e;
          },
        },
        {
          key: "hasLoadedNamespace",
          value: function (e) {
            var t = this,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            if (!this.isInitialized)
              return (
                this.logger.warn(
                  "hasLoadedNamespace: i18next was not initialized",
                  this.languages
                ),
                !1
              );
            if (!this.languages || !this.languages.length)
              return (
                this.logger.warn(
                  "hasLoadedNamespace: i18n.languages were undefined or empty",
                  this.languages
                ),
                !1
              );
            var r = this.resolvedLanguage || this.languages[0],
              o = !!this.options && this.options.fallbackLng,
              i = this.languages[this.languages.length - 1];
            if ("cimode" === r.toLowerCase()) return !0;
            var a = function (e, n) {
              var r =
                t.services.backendConnector.state["".concat(e, "|").concat(n)];
              return -1 === r || 2 === r;
            };
            if (n.precheck) {
              var s = n.precheck(this, a);
              if (void 0 !== s) return s;
            }
            return (
              !!this.hasResourceBundle(r, e) ||
              !this.services.backendConnector.backend ||
              !(!a(r, e) || (o && !a(i, e)))
            );
          },
        },
        {
          key: "loadNamespaces",
          value: function (e, t) {
            var n = this,
              r = d();
            return this.options.ns
              ? ("string" == typeof e && (e = [e]),
                e.forEach(function (e) {
                  n.options.ns.indexOf(e) < 0 && n.options.ns.push(e);
                }),
                this.loadResources(function (e) {
                  r.resolve(), t && t(e);
                }),
                r)
              : (t && t(), Promise.resolve());
          },
        },
        {
          key: "loadLanguages",
          value: function (e, t) {
            var n = d();
            "string" == typeof e && (e = [e]);
            var r = this.options.preload || [],
              o = e.filter(function (e) {
                return r.indexOf(e) < 0;
              });
            return o.length
              ? ((this.options.preload = r.concat(o)),
                this.loadResources(function (e) {
                  n.resolve(), t && t(e);
                }),
                n)
              : (t && t(), Promise.resolve());
          },
        },
        {
          key: "dir",
          value: function (e) {
            if (
              (e ||
                (e =
                  this.resolvedLanguage ||
                  (this.languages && this.languages.length > 0
                    ? this.languages[0]
                    : this.language)),
              !e)
            )
              return "rtl";
            return [
              "ar",
              "shu",
              "sqr",
              "ssh",
              "xaa",
              "yhd",
              "yud",
              "aao",
              "abh",
              "abv",
              "acm",
              "acq",
              "acw",
              "acx",
              "acy",
              "adf",
              "ads",
              "aeb",
              "aec",
              "afb",
              "ajp",
              "apc",
              "apd",
              "arb",
              "arq",
              "ars",
              "ary",
              "arz",
              "auz",
              "avl",
              "ayh",
              "ayl",
              "ayn",
              "ayp",
              "bbz",
              "pga",
              "he",
              "iw",
              "ps",
              "pbt",
              "pbu",
              "pst",
              "prp",
              "prd",
              "ug",
              "ur",
              "ydd",
              "yds",
              "yih",
              "ji",
              "yi",
              "hbo",
              "men",
              "xmn",
              "fa",
              "jpr",
              "peo",
              "pes",
              "prs",
              "dv",
              "sam",
              "ckb",
            ].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >
              -1 || e.toLowerCase().indexOf("-arab") > 1
              ? "rtl"
              : "ltr";
          },
        },
        {
          key: "cloneInstance",
          value: function () {
            var e = this,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : ie,
              r = re(re(re({}, this.options), t), { isClone: !0 }),
              o = new u(r);
            return (
              ["store", "services", "language"].forEach(function (t) {
                o[t] = e[t];
              }),
              (o.services = re({}, this.services)),
              (o.services.utils = {
                hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
              }),
              (o.translator = new A(o.services, o.options)),
              o.translator.on("*", function (e) {
                for (
                  var t = arguments.length,
                    n = new Array(t > 1 ? t - 1 : 0),
                    r = 1;
                  r < t;
                  r++
                )
                  n[r - 1] = arguments[r];
                o.emit.apply(o, [e].concat(n));
              }),
              o.init(r, n),
              (o.translator.options = o.options),
              (o.translator.backendConnector.services.utils = {
                hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
              }),
              o
            );
          },
        },
        {
          key: "toJSON",
          value: function () {
            return {
              options: this.options,
              store: this.store,
              language: this.language,
              languages: this.languages,
              resolvedLanguage: this.resolvedLanguage,
            };
          },
        },
      ]),
      u
    );
  })();
  c(ae, "createInstance", function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = arguments.length > 1 ? arguments[1] : void 0;
    return new ae(e, t);
  });
  var se = ae.createInstance();
  return (se.createInstance = ae.createInstance), se;
});
/*!
 * jQuery Validation Plugin v1.13.1
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2014 Jörn Zaefferer
 * Released under the MIT license
 */
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery", "./jquery.validate"], factory);
  } else {
    factory(jQuery);
  }
})(function ($) {
  $.validator.setDefaults({
    unhighlight: function (element, errorClass, validClass) {
      $(element)
        .next("span")
        .find(".select2-selection")
        .removeClass("has-error");
      $(element).closest(".input-group").removeClass("has-error");
      $(element).removeClass("error");

      //for radio & checkbox
      if (
        $(element).attr("type") == "radio" ||
        $(element).attr("type") == "checkbox"
      ) {
        let n = $(element).attr("name");
        $(element.form)
          .find("input[name='" + n + "']")
          .each(function (which) {
            $(this).removeClass(errorClass);
          });
      }
    },
    highlight: function (element, errorClass, validClass) {
      $(element).next("span").find(".select2-selection").addClass("has-error");
      $(element).closest(".input-group").addClass("has-error");
      $(element).addClass("error");

      //for radio & checkbox
      if (
        $(element).attr("type") == "radio" ||
        $(element).attr("type") == "checkbox"
      ) {
        let n = $(element).attr("name");
        $(element.form)
          .find("input[name='" + n + "']")
          .each(function (which) {
            $(this).addClass(errorClass);
          });
      }
    },
    errorPlacement: function (error, element) {
      var elementType = element.prop("type");
      var errorContainer = element.parent().find(".error-container");

      if ($(element).hasClass("upload")) {
        var pnl = $(element)
          .parent()
          .parent()
          .parent()
          .siblings(".upload-error");
        error.insertAfter(pnl);
      } else if (element.hasClass("select2-hidden-accessible")) {
        //$(element).next('span').find('.select2-selection').addClass('has-error');
        error.insertAfter($(element).next());
      } else if ($(element).hasClass("pwd")) {
        error.insertAfter(element.parent().siblings(".error-container"));
      } else if (errorContainer.length > 0) {
        $(errorContainer[0]).append(error);
      } else if (
        element.parent(".input-group").length ||
        elementType === "checkbox" ||
        elementType === "radio"
      ) {
        //error.insertAfter(element.parent());
        $(element).parent().parent().parent().append(error);
      } else {
        error.insertAfter(element);
      }
    },
  });

  $.validator.addMethod("dateFormat", function (value, element) {
    // put your own logic here, this is just a (crappy) example
    //console.log("value", value);
    if (value.length > 0) {
      return value.match(/^\d\d\/\d\d\/\d\d\d\d$/);
    } else {
      return true;
    }
  });

  $.validator.addMethod("monthFormat", function (value, element) {
    // put your own logic here, this is just a (crappy) example
    //console.log("value", value);
    if (value.length > 0) {
      return value.match(/^\d\d\/\d\d\d\d$/);
    } else {
      return true;
    }
  });

  $.validator.addMethod("dateMin", function (value, element, param) {
    try {
      var maxDate = param.maxDate;
      if (value.length > 0 && $(maxDate).val().length > 0) {
        var arrMinDate = value.split("/");
        var arrMaxDate = $(maxDate).val().split("/");

        if (arrMinDate.length == 3 && arrMaxDate.length == 3) {
          var dMin = new Date(
            parseInt(arrMinDate[2]) - 543,
            parseInt(arrMinDate[1]) - 1,
            parseInt(arrMinDate[0])
          );
          var dMax = new Date(
            parseInt(arrMaxDate[2]) - 543,
            parseInt(arrMaxDate[1]) - 1,
            parseInt(arrMaxDate[0])
          );

          if (dMax.getTime() >= dMin.getTime()) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      } else {
        return true;
      }
    } catch (ex) {
      return true;
    }
    return true;
  });

  $.validator.addMethod("dateMax", function (value, element, param) {
    try {
      var minDate = param.minDate;
      if (value.length > 0 && $(minDate).val().length > 0) {
        var arrMinDate = $(minDate).val().split("/");
        var arrMaxDate = value.split("/");

        if (arrMinDate.length == 3 && arrMaxDate.length == 3) {
          var dMin = new Date(
            parseInt(arrMinDate[2]) - 543,
            parseInt(arrMinDate[1]) - 1,
            parseInt(arrMinDate[0])
          );
          var dMax = new Date(
            parseInt(arrMaxDate[2]) - 543,
            parseInt(arrMaxDate[1]) - 1,
            parseInt(arrMaxDate[0])
          );
          if (dMax.getTime() >= dMin.getTime()) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      } else {
        return true;
      }
    } catch (ex) {
      return true;
    }

    return true;
  });

  $.validator.addMethod("dateMins", function (value, element, param) {
    try {
      var valid = true;
      $.each(param.maxDate, function (i, val) {
        var maxDate = val;
        if (value.length > 0 && $(maxDate).val().length > 0) {
          var inputDt = value.split("/");
          var maxDt = $(maxDate).val().split("/");

          if (inputDt.length == 3 && maxDt.length == 3) {
            var dInput = new Date(
              parseInt(inputDt[2]) - 543,
              parseInt(inputDt[1]) - 1,
              parseInt(inputDt[0])
            );
            var dMax = new Date(
              parseInt(maxDt[2]) - 543,
              parseInt(maxDt[1]) - 1,
              parseInt(maxDt[0])
            );

            if (dInput.getTime() >= dMax.getTime()) {
              valid = true;
            } else {
              valid = false;
              return valid;
            }
          } else {
            valid = true;
          }
        } else {
          valid = true;
        }
      });
      return this.optional(element) || valid;
    } catch (ex) {
      return true;
    }
  });

  $.validator.addMethod("monthMin", function (value, element, param) {
    try {
      var maxMonth = param.maxMonth;
      if (value.length > 0 && $(maxMonth).val().length > 0) {
        var arrMinMonth = value.split("/");
        var arrMaxMonth = $(maxMonth).val().split("/");

        if (arrMinMonth.length == 2 && arrMaxMonth.length == 2) {
          var dMin = new Date(
            parseInt(arrMinMonth[1]) - 543,
            parseInt(arrMinMonth[0]) - 1,
            1
          );
          var dMax = new Date(
            parseInt(arrMaxMonth[1]) - 543,
            parseInt(arrMaxMonth[0]) - 1,
            1
          );

          if (dMax.getTime() >= dMin.getTime()) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      } else {
        return true;
      }
    } catch (ex) {
      return true;
    }
    return true;
  });

  $.validator.addMethod("monthMax", function (value, element, param) {
    try {
      var minMonth = param.minMonth;
      if (value.length > 0 && $(minMonth).val().length > 0) {
        var arrMinMonth = $(minMonth).val().split("/");
        var arrMaxMonth = value.split("/");

        if (arrMinMonth.length == 2 && arrMaxMonth.length == 2) {
          var dMin = new Date(
            parseInt(arrMinMonth[1]) - 543,
            parseInt(arrMinMonth[0]) - 1,
            1
          );
          var dMax = new Date(
            parseInt(arrMaxMonth[1]) - 543,
            parseInt(arrMaxMonth[0]) - 1,
            1
          );

          if (dMax.getTime() >= dMin.getTime()) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      } else {
        return true;
      }
    } catch (ex) {
      return true;
    }

    return true;
  });

  $.validator.addMethod("yearMax", function (value, element, param) {
    try {
      var minYear = param.minYear;
      if (value.length > 0 && $(minYear).val().length > 0) {
        if (value >= $(minYear).val()) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } catch (ex) {
      return true;
    }

    return true;
  });

  $.validator.addMethod("yearMin", function (value, element, param) {
    try {
      var maxYear = param.maxYear;
      if (value.length > 0 && $(maxYear).val().length > 0) {
        if ($(maxYear).val() >= value) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } catch (ex) {
      return true;
    }

    return true;
  });

  $.validator.addMethod("numMin", function (value, element, param) {
    try {
      var min = param;
      if (value.length > 0) {
        var num = parseFloat(value.replace(/,/g, ""));
        if (num >= min) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } catch (ex) {
      return true;
    }

    return true;
  });

  $.validator.addMethod("numMax", function (value, element, param) {
    try {
      var max = param;
      if (value.length > 0) {
        var num = parseFloat(value.replace(/,/g, ""));
        if (num <= max) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } catch (ex) {
      return true;
    }

    return true;
  });

  $.validator.addMethod("fileSize", function (value, element, param) {
    return (
      this.optional(element) || element.files[0].size <= param * 1024 * 1024
    );
  });

  $.validator.addMethod("regx", function (value, element, regexpr) {
    return regexpr.test(value);
  });

  $.validator.addMethod(
    "noWhiteSpace",
    function (value, element) {
      return this.optional(element) || value.trim().length > 0;
    },
    "No space please and don't leave it empty"
  );

  $.validator.addMethod("citizenId", function (value, element) {
    if (value) {
      var zid = value;

      if (zid.length != 13) return false;
      for (i = 0, sum = 0; i < 12; i++)
        sum += parseFloat(zid.charAt(i)) * (13 - i);
      if ((11 - (sum % 11)) % 10 != parseFloat(zid.charAt(12))) return false;
    }
    return true;
  });
});
//GeoLoading
//สำหรับแสดง loading
//static object
(function ($) {
  var GeoLoading = function () {
    this.hasInit = false;
  };

  GeoLoading.TEMPLATE =
    '<div id="loadingPanel" class="loading-panel"><div class="loading-panel-background"></div><div class="loading-panel-animation"></div><i class="fas fa-charging-station fa-3x loading-icon"></i><span class="loading-text"></span></div>';
  GeoLoading.TEMPLATE2 =
    '<div id="loadingPanel" class="loading-panel"><div class="loading-panel-background"></div><div class="loading-panel-animation"></div><div class="loading-icon"><img style="height: 50px;" src="${0}" /></div><span class="loading-text"></span></div>';

  GeoLoading.prototype.init = function () {
    //initial loading

    console.log("globalConfig", top.globalConfig);

    if (!top.globalConfig || !top.globalConfig.loadingTemplate) {
      this.$domNode = $(GeoLoading.TEMPLATE);
    } else if (top.globalConfig && top.globalConfig.loadingTemplate) {
      if (top.globalConfig.loadingTemplate == 2) {
        var template2str = GeoLoading.TEMPLATE2.replace(
          "${0}",
          top.globalConfig.loadingTemplate2_Icon
        );
        this.$domNode = $(template2str);
      }
    }

    $("body").prepend(this.$domNode);
    this.loadingCurrentProcess = [];
    this.$loadingPanel = this.$domNode;

    //$(window).resize($.proxy(this.resize, this));
    //this.resize();

    this.hasInit = true;
    return this;
  };
  GeoLoading.prototype.resize = function () {
    try {
      console.log("GeoLoading.prototype.resize : ");
      var docHeight = $(document).height();

      var winHeight = $(window).height();
      var newHeight = docHeight > winHeight ? docHeight : winHeight;

      this.$loadingPanel.height(newHeight);
    } catch (error) {
      console.log("GeoLoading.prototype.resize : ", error);
    }
  };
  GeoLoading.prototype.showLoading = function (processName, msg) {
    if (this.hasInit == false) {
      this.init();
    }

    if (processName) {
      if (this.loadingCurrentProcess.indexOf(processName) == -1) {
        this.loadingCurrentProcess.push(processName);
      }

      //this.$loadingPanel.show();
      this.$loadingPanel.fadeIn("slow");
      //this.resize();

      var tmpLoadingMsg = "";
      if (msg) {
        tmpLoadingMsg = msg;
      }
      this.$loadingPanel.children(".loading-text").text(tmpLoadingMsg);
    } else {
      console.log("parameter processName is not null");
    }
    return this;
  };

  GeoLoading.prototype.logProcess = function () {
    console.log("this.loadingCurrentProcess", this.loadingCurrentProcess);

    return this;
  };

  GeoLoading.prototype.hideLoading = function (processName) {
    if (this.hasInit == false) {
      this.init();
    }

    if (processName) {
      var index = $.inArray(processName, this.loadingCurrentProcess);
      if (index != -1) {
        this.loadingCurrentProcess.splice(index, 1);
      }

      if (this.loadingCurrentProcess.length == 0) {
        this.$loadingPanel.fadeOut("slow");
      }
    } else {
      console.log("parameter processName is not null");
    }
    return this;
  };

  // GeoLoading PLUGIN DEFINITION
  // =======================

  var old = $.fn.GeoLoading;

  $.fn.GeoLoading = new GeoLoading();

  // GeoLoading NO CONFLICT
  // =================

  $.fn.GeoLoading.noConflict = function () {
    $.fn.GeoLoading = old;
    return this;
  };
})(jQuery);
(function ($) {
  var LUT_DEPT_DATA = (LUT_BRANCH_DATA = LUT_BU_DATA = null);

  var DeptSelectClass = function (
    deptSelector,
    brSelector,
    buSelector,
    createCompleteCallback
  ) {
    this.deptSelector = deptSelector;
    this.brSelector = brSelector;
    this.buSelector = buSelector;
    this.createCompleteCallback = createCompleteCallback;

    //control
    this.deptControl = null;
    this.brControl = null;
    this.buControl = null;

    //variable
    this._disableChange = false;
    this._isInitial = false;

    this.init();
  };

  DeptSelectClass.prototype.init = function () {
    var me = this;

    me.deptControl = $(this.deptSelector).select2({
      allowClear: true,
      placeholder: "กอง",
    });
    me.brControl = $(this.brSelector).select2({
      allowClear: true,
      placeholder: "ฝ่าย/เขต",
    });
    me.buControl = $(this.buSelector).select2({
      allowClear: true,
      placeholder: "สายงาน",
    });

    /*start : แก้เรื่อง clear แล้วเปิด select list*/
    me.deptControl.on("select2:unselecting", function (e) {
      $(this).select2("val", "");
      e.preventDefault();
    });

    me.brControl.on("select2:unselecting", function (e) {
      $(this).select2("val", "");
      e.preventDefault();
    });

    me.buControl.on("select2:unselecting", function (e) {
      $(this).select2("val", "");
      e.preventDefault();
    });
    /*end : แก้เรื่อง clear แล้วเปิด select list*/

    me.deptControl.prop("disabled", true);
    me.brControl.prop("disabled", true);
    me.buControl.prop("disabled", true);

    if (LUT_DEPT_DATA && LUT_BRANCH_DATA && LUT_BU_DATA) {
      me.initControl();
    } else {
      $.when(
        $.post($.fn.DeptSelect.Default.basePath + "department/LUT_DEPT"),
        $.post($.fn.DeptSelect.Default.basePath + "department/LUT_BRANCH"),
        $.post($.fn.DeptSelect.Default.basePath + "department/LUT_BU")
      ).then(function (res1, res2, res3) {
        //load data ใส่ตัวแปร
        if (res1[0].success === true) LUT_DEPT_DATA = res1[0].data;
        else console.log("LUT_DEPT error : ", res1[0].error);

        if (res2[0].success === true) LUT_BRANCH_DATA = res2[0].data;
        else console.log("LUT_BRANCH error : ", res2[0].error);

        if (res3[0].success === true) LUT_BU_DATA = res3[0].data;
        else console.log("LUT_BU error : ", res3[0].error);

        me.initControl();
      });
    }
  };
  DeptSelectClass.prototype.initControl = function () {
    this.initControlEvent();
    this.initControlData();

    if ($.isFunction(this.createCompleteCallback)) {
      this.createCompleteCallback();
    }

    this._isInitial = true;
  };
  DeptSelectClass.prototype.initControlEvent = function () {
    var me = this;

    me.buControl.change(function () {
      if (me._disableChange === false) {
        var buCode = me.buControl.val();

        me._disableChange = true;
        //clear child value;
        me.brControl.val("").trigger("change");
        me.deptControl.val("").trigger("change");

        //filter child data;
        me.showBranch(buCode);
        me.showDept(buCode);

        me._disableChange = false;
      }
    });

    me.brControl.change(function () {
      if (me._disableChange === false) {
        var buCode = me.buControl.val();
        var brCode = me.brControl.val();

        me._disableChange = true;
        if (brCode) {
          //กรณีมีการเลือกค่า br จะ setค่ากลับไปที่ bu ด้วย(กรณี bu ไม่มีค่า)
          var rowData = me.getBranchRowData(brCode);

          if (!buCode) {
            //set ค่าให้ BU กรณีไม่มีค่า
            me.buControl.val(rowData.BU_CODE).trigger("change");
            //filter branch;
            me.showBranch(rowData.BU_CODE);

            me.brControl.val(brCode).trigger("change");
          }

          //filter child data;
          me.showDept(rowData.BU_CODE, rowData.BRANCH_CODE);
        } else {
          me.showDept(buCode);
        }

        //clear child value;
        me.deptControl.val("").trigger("change");

        me._disableChange = false;
      }
    });

    me.deptControl.change(function () {
      if (me._disableChange === false) {
        var buCode = me.buControl.val();
        var brCode = me.brControl.val();
        var deptCode = me.deptControl.val();

        if (deptCode) {
          var rowData = me.getDeptRowData(deptCode);
          me._disableChange = true;

          if (!buCode) {
            //set ค่าให้ BU กรณีไม่มีค่า
            me.buControl.val(rowData.BU_CODE).trigger("change");
            me.showBranch(rowData.BU_CODE);
          }

          if (!brCode) {
            //set ค่าให้ Branch กรณีไม่มีค่า
            me.brControl.val(rowData.BRANCH_CODE).trigger("change");
            me.showDept(rowData.BU_CODE, rowData.BRANCH_CODE);

            //reset value after refersh list
            me.deptControl.val(deptCode).trigger("change");
          }

          me._disableChange = false;
        }
      }
    });
  };
  DeptSelectClass.prototype.initControlData = function () {
    var me = this;

    me.showBU();
    me.showBranch();
    me.showDept();

    me.deptControl.prop("disabled", false);
    me.brControl.prop("disabled", false);
    me.buControl.prop("disabled", false);
  };

  DeptSelectClass.prototype.showBU = function () {
    //filter data in BU control
    var me = this,
      data = LUT_BU_DATA;
    me.buControl.empty();
    me.buControl.append("<option></option>");
    $.each(data, function (i, ele) {
      me.buControl.append(
        $("<option>").text(ele.BU_NAMT).attr("value", ele.BU_CODE)
      );
    });
  };

  DeptSelectClass.prototype.showBranch = function (buCode) {
    //filter data in branch control
    var me = this,
      data = LUT_BRANCH_DATA;

    if (buCode)
      data = $.grep(data, function (ele) {
        return ele.BU_CODE === buCode;
      });

    me.brControl.empty();
    me.brControl.append("<option></option>");
    $.each(data, function (i, ele) {
      me.brControl.append(
        $("<option>").text(ele.BRANCH_NAMT).attr("value", ele.BRANCH_CODE)
      );
    });
  };

  DeptSelectClass.prototype.showDept = function (buCode, branchCode) {
    //filter data in dept control
    var me = this,
      data = LUT_DEPT_DATA;
    if (buCode)
      data = $.grep(data, function (ele) {
        return ele.BU_CODE === buCode;
      });

    if (branchCode)
      data = $.grep(data, function (ele) {
        return ele.BRANCH_CODE === branchCode;
      });

    me.deptControl.empty();
    me.deptControl.append("<option></option>");
    $.each(data, function (i, ele) {
      me.deptControl.append(
        $("<option>").text(ele.DEPT_SH_NAMT).attr("value", ele.DEPT_CODE)
      );
    });
  };

  DeptSelectClass.prototype.getBURowData = function (buCode) {
    //data ของ option ที่ถูก select
    var data = $.grep(LUT_BU_DATA, function (ele) {
      return ele.BU_CODE === buCode;
    });
    return data[0];
  };
  DeptSelectClass.prototype.getBranchRowData = function (branchCode) {
    //data ของ option ที่ถูก select
    var data = $.grep(LUT_BRANCH_DATA, function (ele) {
      return ele.BRANCH_CODE === branchCode;
    });
    return data[0];
  };
  DeptSelectClass.prototype.getDeptRowData = function (deptCode) {
    //data ของ option ที่ถูก select
    var data = $.grep(LUT_DEPT_DATA, function (ele) {
      return ele.DEPT_CODE === deptCode;
    });
    return data[0];
  };

  DeptSelectClass.prototype.setDeptCode = function (deptCode) {
    //data ของ option ที่ถูก select
    this.deptControl.val(deptCode).trigger("change");
  };

  DeptSelectClass.prototype.reset = function () {
    //data ของ option ที่ถูก select
    this.deptControl.val("").trigger("change");
    this.brControl.val("").trigger("change");
    this.buControl.val("").trigger("change");
  };

  $.fn.DeptSelect = function (
    deptSelector,
    brSelector,
    buSelector,
    createCompleteCallback
  ) {
    return new DeptSelectClass(
      deptSelector,
      brSelector,
      buSelector,
      createCompleteCallback
    );
  };

  $.fn.DeptSelect.Default = { basePath: "../" };
})(jQuery);
(function ($) {
  var dataLang =
    document.cookie
      .match("(^|;)\\s*" + "web_culture" + "\\s*=\\s*([^;]+)")
      ?.pop() || "";
  //dataLang = dataLang.replace('-', '_');

  i18next.init({
    lng: dataLang, // if you're using a language detector, do not define the lng option
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          lblHidePassword: "Hide Password",
          lblShowPassword: "Show Password",
        },
      },
      th: {
        translation: {
          lblHidePassword: "ซ่อนรหัสผ่าน",
          lblShowPassword: "แสดงรหัสผ่าน",
        },
      },
      "zh-CN": {
        translation: {
          lblHidePassword: "隐藏密码",
          lblShowPassword: "显示密码",
        },
      },
      lo: {
        translation: {
          lblHidePassword: "ເກັບລະຫັດຜ່ານ",
          lblShowPassword: "ສະແດງລະຫັດຜ່ານ",
        },
      },
    },
  });

  //---------Create Input----------//
  //<button id="showPassword" class="btn btn-default btn-xs" type="button"><i class="fa fa-eye"></i></button> >> Input
  //---------Call Plugin----------//
  //$.checkboxShowPassword({
  //field: '#PASSWORD', >> Id of Input Type password
  //control: '#showPassword' >> Id of Input Type button
  //});
  $.toggleShowPassword = function (options) {
    var settings = $.extend(
      {
        field: "#password",
        control: "#toggle_show_password",
      },
      options
    );

    var control = $(settings.control);
    var field = $(settings.field);

    control.bind("click", function () {
      if ($(this).find("i").hasClass("fa fa-eye")) {
        field.attr("type", "text");
        $(this).html(
          '<i class="fa fa-eye-slash" title="' +
            i18next.t("lblHidePassword") +
            '"></i>'
        );
      } else {
        field.attr("type", "password");
        $(this).html(
          '<i class="fa fa-eye" title="' +
            i18next.t("lblShowPassword") +
            '"></i>'
        );
      }
    });
  };

  //---------Create Input----------//
  //<input id="checkboxPassword" type="checkbox" />Show password >> Input
  //---------Call Plugin----------//
  //$.checkboxShowPassword({
  //field: '#PASSWORD', >> Id of Input Type password
  //control: '#checkboxPassword' >> Id of Input Type checkbox
  //});
  $.checkboxShowPassword = function (options) {
    var settings = $.extend(
      {
        field: "#password",
        control: "#toggle_show_password",
      },
      options
    );

    var control = $(settings.control);
    var field = $(settings.field);

    control.bind("click", function () {
      if (this.checked) {
        field.attr("type", "text");
      } else {
        field.attr("type", "password");
      }
    });
  };
})(jQuery);
$.fn.digits = function () {
  return this.each(function () {
    $(this).text(
      $(this)
        .text()
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    );
  });
};

$.fn.select2.defaults.set("language", "th");

function formatNumber(num) {
  if (num != null && num != "") {
    var parts = num.split(".");
    var firstPart = parts[0];
    firstPart = firstPart.toString().replace(/,/g, "");
    firstPart = firstPart.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    parts.shift(); // removes the first item from the array
    var nextParts = parts.join("");
    if (nextParts) return firstPart + "." + nextParts;
    else return firstPart;
  } else {
    return "";
  }
}
(function ($) {
  //รายการ parameter
  //capitalSelector ช่องเงินต้น เช่น '#capital'
  //vatSelector ช่อง vat *กรณีไม่มีค่าส่ง null
  //totalSelector ช่องผลรวม
  //<function> createCompleteCallback เมื่อสร้างสำเร็จ

  //รองรับ 2 รูปแบบ
  //1.มีช่อง 3 ช่อง ได้แก่ เงินต้น , vat, และเงินรวม
  //2.มีช่อง 2 ช่อง ได้แก่ เงินต้น และเงินรวม

  var VatCalClass = function (
    capitalSelector,
    vatSelector,
    totalSelector,
    createCompleteCallback
  ) {
    this.createCompleteCallback = createCompleteCallback;

    //control
    this.capitalControl = $(capitalSelector);
    this.vatControl = vatSelector ? $(vatSelector) : null;
    this.totalControl = $(totalSelector);

    //current vat
    this.currentVat = null;

    //variable
    this._disableChange = false;
    this._isInitial = false;

    this.init();
  };

  VatCalClass.prototype.init = function () {
    var me = this;

    $.post(
      $.fn.VatCal.Default.basePath + "data/GetCurrentVAT",
      function (data) {
        if (data.success == true) {
          me.currentVat = data.vat;
        } else {
          throw "load vat error !!";
        }

        me.initControl();
      }
    );
  };
  VatCalClass.prototype.initControl = function () {
    //bind event
    this.initControlEvent();

    if ($.isFunction(this.createCompleteCallback)) {
      this.createCompleteCallback();
    }

    this._isInitial = true;
  };
  VatCalClass.prototype.initControlEvent = function () {
    var me = this;

    me.capitalControl.change(function () {
      //คำนวณค่าให้กับ vat และ total
      var capital = parseFloat(me.capitalControl.val().replace(/,/g, ""));

      if (!isNaN(capital)) {
        var vat = parseFloat(((capital * me.currentVat) / 100).toFixed(2));
        var total = parseFloat((capital + vat).toFixed(2));

        //กรณีไม่มี control vat จะไม่กำหนดค่าให้
        if (me.vatControl) {
          me.vatControl.val(formatNumber(vat.toFixed(2)));
        }
        me.totalControl.val(formatNumber(total.toFixed(2)));
      }
    });

    if (me.vatControl) {
      me.vatControl.change(function () {
        //คำนวณค่าแล้วกำหนดค่าให้กับ total
        var capital = parseFloat(me.capitalControl.val().replace(/,/g, ""));
        var vat = parseFloat(me.vatControl.val().replace(/,/g, ""));

        if (!isNaN(capital) && !isNaN(vat)) {
          var total = capital + vat;
          me.totalControl.val(formatNumber(total.toFixed(2)));
        }
      });
    }
  };

  //คำนวนเงินต้น และ vat
  VatCalClass.prototype.CalculateBackward = function () {
    me = this;
    var total = parseFloat(me.totalControl.val().replace(/,/g, ""));
    if (!isNaN(total)) {
      var capital = (total * 100) / (me.currentVat + 100);

      if (me.vatControl) {
        var vat = total - capital;
        me.vatControl.val(formatNumber(vat.toFixed(2)));
      }

      me.capitalControl.val(formatNumber(capital.toFixed(2)));
    }
  };

  $.fn.VatCal = function (
    deptSelector,
    brSelector,
    buSelector,
    createCompleteCallback
  ) {
    return new VatCalClass(
      deptSelector,
      brSelector,
      buSelector,
      createCompleteCallback
    );
  };

  $.fn.VatCal.Default = { basePath: "../" };
})(jQuery);
var GlobalConfig = {
  lang: "th",
  configExportUrl:
    "http://58.137.23.182:8080/HighchartsExport/HighchartsExport.aspx", //geo9
  //configExportUrl: 'http://meaappstore.mea.or.th:8080/HighchartsExport.aspx',    //mea
  pwstrength: {
    // Error messages
    errorMessages: {
      wordLength: "Must be at least 8 characters long.",
      wordSimilarToUsername: "Do not use a password similar to your username.",
      wordOneNumber: "There must be a number as a component.",
      wordOneSpecialChar:
        "Must contain special characters <br />which are  <b>! @ # $ % ^ & * ? _ ~ ,</b>  only.",
      wordUpperLowerCombo: "Must use both uppercase and lowercase letters.",
    },
    errorMessages_th: {
      wordLength: "ต้องมีความยาวไม่น้อยกว่า 8 ตัวอักษร",
      wordSimilarToUsername: "ห้ามใช้รหัสผ่านคล้ายชื่อเข้าใช้งาน",
      //wordSequences: "ห้ามใช้ตัวอักษรเรียงกันมากกว่า 2 ตัวอักษร",
      wordOneNumber: "ต้องมีตัวเลขเป็นส่วนประกอบ",
      wordOneSpecialChar:
        "ต้องมีอักขระพิเศษเป็นส่วนประกอบ <br />คือ <b>! @ # $ % ^ & * ? _ ~ ,</b> เท่านั้น",
      wordUpperLowerCombo: "ต้องใช้ตัวอักษรผสมทั้งตัวเล็กและตัวใหญ่",
    },
    errorMessages_zh_CN: {
      wordLength: "长度必须至少为 8 个字符",
      wordSimilarToUsername: "不要使用与您的用户名相似的密码",
      wordOneNumber: "必须有一个数字作为组成部分",
      wordOneSpecialChar:
        "必须包含特殊字符 <br />是 <b>! @ # $ % ^ & * ? _ ~ ,</b> 只要",
      wordUpperLowerCombo: "必须同时使用大写和小写字母",
    },
    errorMessages_lo: {
      wordLength: "ຕ້ອງມີຄວາມຍາວບໍ່ຫນ້ອຍກວ່າ  8 ຕົວອັກສອນ",
      wordSimilarToUsername: "ຫ້າມໃຊ້ລະຫັດຜ່ານຄ້າຍຄືຊື່ເຂົ້າໃຊ້ງານ",
      wordOneNumber: "ຕ້ອງມີຕົວເລກເປັນສ່ວນປະກອບ",
      wordOneSpecialChar:
        "ຕ້ອງມີອັກສອນລັກສະນະພິເສດເປັນສ່ວນປະກອບ <br />ເຊັ່ນ <b>! @ # $ % ^ & * ? _ ~ ,</b> ເທົ່ານັ້ນ",
      wordUpperLowerCombo: "ຕ້ອງໃຊ້ຕົວອັກສອນປະສົມທັ້ງໂຕໜ້ອຍ ແລະ ໂຕໃຫຍ່",
    },

    // Verdicts
    verdicts: ["Weak", "Normal", "Medium", "Strong", "Very Strong"],
    verdicts_th: ["อ่อนแอ", "ปกติ", "ปานกลาง", "ปลอดภัย", "ปลอดภัยมาก"],
    verdicts_zh_CN: ["虚弱的", "普通的", "缓和", "强的", "非常强壮"],
    verdicts_lo: ["ອ່ອນແອ", "ປົກກະຕິ", "ປານກາງ", "ປອດໄພ", "ປອດໄພຫຼາຍ"],

    minChar: 8,
    rules: {
      scores: {
        //wordSequences: -100
      },
      activated: {
        wordNotEmail: false,
        wordSimilarToUsername: false,
        wordSequences: false,
        wordOneNumber: true,
        wordOneSpecialChar: true,
        wordUpperLowerCombo: true,
      },
    },
    lowerRules: {
      scores: {},
      activated: {
        wordNotEmail: false,
        wordSimilarToUsername: false,
        wordSequences: false,
        wordOneNumber: true,
        wordOneSpecialChar: false,
        wordUpperLowerCombo: true,
      },
    },
  },

  sliderCaptcha: {
    message: {
      loadingText: "Loading...",
      failedText: "Try It Again",
      barText: "Slide the Puzzle",
    },
    message_th: {
      loadingText: "กำลังโหลด...",
      failedText: "ลองใหม่อีกครั้ง",
      barText: "เลื่อนให้ตรงรูปภาพ",
    },
    message_zh_CN: {
      loadingText: "正在加载中...",
      failedText: "再试一次",
      barText: "向右滑动填充拼图",
    },
    message_lo: {
      loadingText: "ກໍາລັງໂຫລດ...",
      failedText: "ລອງໃຫມ່ອີກເທື່ອໜຶ່ງ",
      barText: "ປັບໃຫ້ກົງຕາມຮູບ",
    },
  },
};