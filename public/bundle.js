!(function (t) {
    var e = {}
    function n(r) {
        if (e[r]) return e[r].exports
        var o = (e[r] = { i: r, l: !1, exports: {} })
        return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
    }
    ;(n.m = t),
        (n.c = e),
        (n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r })
        }),
        (n.r = function (t) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(t, '__esModule', { value: !0 })
        }),
        (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t
            if (4 & e && 'object' == typeof t && t && t.__esModule) return t
            var r = Object.create(null)
            if (
                (n.r(r),
                Object.defineProperty(r, 'default', {
                    enumerable: !0,
                    value: t,
                }),
                2 & e && 'string' != typeof t)
            )
                for (var o in t)
                    n.d(
                        r,
                        o,
                        function (e) {
                            return t[e]
                        }.bind(null, o)
                    )
            return r
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default
                      }
                    : function () {
                          return t
                      }
            return n.d(e, 'a', e), e
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }),
        (n.p = ''),
        n((n.s = 6))
})([
    function (t, e, n) {
        'use strict'
        ;(function (t, r) {
            var o,
                i = n(1)
            o =
                'undefined' != typeof self
                    ? self
                    : 'undefined' != typeof window
                    ? window
                    : void 0 !== t
                    ? t
                    : r
            var a = Object(i.a)(o)
            e.a = a
        }.call(this, n(2), n(3)(t)))
    },
    function (t, e, n) {
        'use strict'
        function r(t) {
            var e,
                n = t.Symbol
            return (
                'function' == typeof n
                    ? n.observable
                        ? (e = n.observable)
                        : ((e = n('observable')), (n.observable = e))
                    : (e = '@@observable'),
                e
            )
        }
        n.d(e, 'a', function () {
            return r
        })
    },
    function (t, e) {
        var n
        n = (function () {
            return this
        })()
        try {
            n = n || new Function('return this')()
        } catch (t) {
            'object' == typeof window && (n = window)
        }
        t.exports = n
    },
    function (t, e) {
        t.exports = function (t) {
            if (!t.webpackPolyfill) {
                var e = Object.create(t)
                e.children || (e.children = []),
                    Object.defineProperty(e, 'loaded', {
                        enumerable: !0,
                        get: function () {
                            return e.l
                        },
                    }),
                    Object.defineProperty(e, 'id', {
                        enumerable: !0,
                        get: function () {
                            return e.i
                        },
                    }),
                    Object.defineProperty(e, 'exports', { enumerable: !0 }),
                    (e.webpackPolyfill = 1)
            }
            return e
        }
    },
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {
        'use strict'
        function r(t) {
            var e = t.tag,
                n = void 0 === e ? 'div' : e,
                r = t.only,
                o = void 0 !== r && r,
                i = t.inner,
                a = void 0 === i ? '<i>my custom HTMLElement is ...</i>' : i,
                c = t.className,
                u = void 0 === c ? 'defaultClass' : c,
                s = t.id,
                l = void 0 === s ? '' : s,
                f = t.parentId,
                d = void 0 === f ? '' : f,
                p = t.cut,
                h = void 0 === p ? 'default' : p
            if (o) {
                var b = document.createElement(n.trim()),
                    y = function (t) {
                        return (b.textContent = t), b.innerHTML
                    }
                return (
                    '<i>my custom HTMLElement is ...</i>' !== a && y(a),
                    void ('' === d
                        ? document.body.appendChild(b)
                        : document.querySelector(d).appendChild(b))
                )
            }
            var v = document.createElement(n.trim())
            switch (
                ('' !== l && (v.id = l.trim()),
                (v.className = u.trim()),
                (v.innerHTML = a),
                '' === d
                    ? document.body.appendChild(v)
                    : document.querySelector(d).appendChild(v),
                h)
            ) {
                case 'default':
                    break
                case 'all':
                    if (arguments[0].id) {
                        var m = document.getElementById(l)
                        '<i>my custom HTMLElement is ...</i>' === a &&
                            (m.innerHTML = ''),
                            m.removeAttribute('class')
                    }
                    break
                case 'class':
                    if (arguments[0].id) {
                        var g = document.getElementById(l)
                        g.removeAttribute('class')
                    }
            }
        }
        function o(t) {
            for (
                var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
                r < e;
                r++
            )
                n[r - 1] = arguments[r]
            throw Error(
                '[Immer] minified error nr: ' +
                    t +
                    (n.length ? ' ' + n.join(',') : '') +
                    '. Find the full error at: https://bit.ly/3cXEKWf'
            )
        }
        function i(t) {
            return !!t && !!t[Y]
        }
        function a(t) {
            return (
                !!t &&
                ((function (t) {
                    if (!t || 'object' != typeof t) return !1
                    var e = Object.getPrototypeOf(t)
                    return !e || e === Object.prototype
                })(t) ||
                    Array.isArray(t) ||
                    !!t[V] ||
                    !!t.constructor[V] ||
                    p(t) ||
                    h(t))
            )
        }
        function c(t, e, n) {
            void 0 === n && (n = !1),
                0 === u(t)
                    ? (n ? Object.keys : X)(t).forEach(function (r) {
                          ;(n && 'symbol' == typeof r) || e(r, t[r], t)
                      })
                    : t.forEach(function (n, r) {
                          return e(r, n, t)
                      })
        }
        function u(t) {
            var e = t[Y]
            return e
                ? e.i > 3
                    ? e.i - 4
                    : e.i
                : Array.isArray(t)
                ? 1
                : p(t)
                ? 2
                : h(t)
                ? 3
                : 0
        }
        function s(t, e) {
            return 2 === u(t)
                ? t.has(e)
                : Object.prototype.hasOwnProperty.call(t, e)
        }
        function l(t, e) {
            return 2 === u(t) ? t.get(e) : t[e]
        }
        function f(t, e, n) {
            var r = u(t)
            2 === r
                ? t.set(e, n)
                : 3 === r
                ? (t.delete(e), t.add(n))
                : (t[e] = n)
        }
        function d(t, e) {
            return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
        }
        function p(t) {
            return U && t instanceof Map
        }
        function h(t) {
            return $ && t instanceof Set
        }
        function b(t) {
            return t.o || t.t
        }
        function y(t) {
            if (Array.isArray(t)) return t.slice()
            var e = Z(t)
            delete e[Y]
            for (var n = X(e), r = 0; r < n.length; r++) {
                var o = n[r],
                    i = e[o]
                !1 === i.writable && ((i.writable = !0), (i.configurable = !0)),
                    (i.get || i.set) &&
                        (e[o] = {
                            configurable: !0,
                            writable: !0,
                            enumerable: i.enumerable,
                            value: t[o],
                        })
            }
            return Object.create(Object.getPrototypeOf(t), e)
        }
        function v(t, e) {
            g(t) ||
                i(t) ||
                !a(t) ||
                (u(t) > 1 && (t.set = t.add = t.clear = t.delete = m),
                Object.freeze(t),
                e &&
                    c(
                        t,
                        function (t, e) {
                            return v(e, !0)
                        },
                        !0
                    ))
        }
        function m() {
            o(2)
        }
        function g(t) {
            return null == t || 'object' != typeof t || Object.isFrozen(t)
        }
        function w(t) {
            var e = G[t]
            return e || o(19, t), e
        }
        function O(t, e) {
            G[t] = e
        }
        function x() {
            return W
        }
        function E(t, e) {
            e && (w('Patches'), (t.u = []), (t.s = []), (t.v = e))
        }
        function P(t) {
            j(t), t.p.forEach(T), (t.p = null)
        }
        function j(t) {
            t === W && (W = t.l)
        }
        function D(t) {
            return (W = { p: [], l: W, h: t, m: !0, _: 0 })
        }
        function T(t) {
            var e = t[Y]
            0 === e.i || 1 === e.i ? e.j() : (e.g = !0)
        }
        function k(t, e) {
            e._ = e.p.length
            var n = e.p[0],
                r = void 0 !== t && t !== n
            return (
                e.h.O || w('ES5').S(e, t, r),
                r
                    ? (n[Y].P && (P(e), o(4)),
                      a(t) && ((t = S(e, t)), e.l || C(e, t)),
                      e.u && w('Patches').M(n[Y], t, e.u, e.s))
                    : (t = S(e, n, [])),
                P(e),
                e.u && e.v(e.u, e.s),
                t !== K ? t : void 0
            )
        }
        function S(t, e, n) {
            if (g(e)) return e
            var r = e[Y]
            if (!r)
                return (
                    c(
                        e,
                        function (o, i) {
                            return A(t, r, e, o, i, n)
                        },
                        !0
                    ),
                    e
                )
            if (r.A !== t) return e
            if (!r.P) return C(t, r.t, !0), r.t
            if (!r.I) {
                ;(r.I = !0), r.A._--
                var o = 4 === r.i || 5 === r.i ? (r.o = y(r.k)) : r.o
                c(3 === r.i ? new Set(o) : o, function (e, i) {
                    return A(t, r, o, e, i, n)
                }),
                    C(t, o, !1),
                    n && t.u && w('Patches').R(r, n, t.u, t.s)
            }
            return r.o
        }
        function A(t, e, n, r, o, c) {
            if (i(o)) {
                var u = S(
                    t,
                    o,
                    c && e && 3 !== e.i && !s(e.D, r) ? c.concat(r) : void 0
                )
                if ((f(n, r, u), !i(u))) return
                t.m = !1
            }
            if (a(o) && !g(o)) {
                if (!t.h.N && t._ < 1) return
                S(t, o), (e && e.A.l) || C(t, o)
            }
        }
        function C(t, e, n) {
            void 0 === n && (n = !1), t.h.N && t.m && v(e, n)
        }
        function L(t, e) {
            var n = t[Y]
            return (n ? b(n) : t)[e]
        }
        function M(t, e) {
            if (e in t)
                for (var n = Object.getPrototypeOf(t); n; ) {
                    var r = Object.getOwnPropertyDescriptor(n, e)
                    if (r) return r
                    n = Object.getPrototypeOf(n)
                }
        }
        function N(t) {
            t.P || ((t.P = !0), t.l && N(t.l))
        }
        function _(t) {
            t.o || (t.o = y(t.t))
        }
        function R(t, e, n) {
            var r = p(e)
                ? w('MapSet').T(e, n)
                : h(e)
                ? w('MapSet').F(e, n)
                : t.O
                ? (function (t, e) {
                      var n = Array.isArray(t),
                          r = {
                              i: n ? 1 : 0,
                              A: e ? e.A : x(),
                              P: !1,
                              I: !1,
                              D: {},
                              l: e,
                              t: t,
                              k: null,
                              o: null,
                              j: null,
                              C: !1,
                          },
                          o = r,
                          i = J
                      n && ((o = [r]), (i = Q))
                      var a = Proxy.revocable(o, i),
                          c = a.revoke,
                          u = a.proxy
                      return (r.k = u), (r.j = c), u
                  })(e, n)
                : w('ES5').J(e, n)
            return (n ? n.A : x()).p.push(r), r
        }
        function B(t) {
            return (
                i(t) || o(22, t),
                (function t(e) {
                    if (!a(e)) return e
                    var n,
                        r = e[Y],
                        o = u(e)
                    if (r) {
                        if (!r.P && (r.i < 4 || !w('ES5').K(r))) return r.t
                        ;(r.I = !0), (n = I(e, o)), (r.I = !1)
                    } else n = I(e, o)
                    return (
                        c(n, function (e, o) {
                            ;(r && l(r.t, e) === o) || f(n, e, t(o))
                        }),
                        3 === o ? new Set(n) : n
                    )
                })(t)
            )
        }
        function I(t, e) {
            switch (e) {
                case 2:
                    return new Map(t)
                case 3:
                    return Array.from(t)
            }
            return y(t)
        }
        function F() {
            function t(t, e) {
                var n = o[t]
                return (
                    n
                        ? (n.enumerable = e)
                        : (o[t] = n = {
                              configurable: !0,
                              enumerable: e,
                              get: function () {
                                  var e = this[Y]
                                  return J.get(e, t)
                              },
                              set: function (e) {
                                  var n = this[Y]
                                  J.set(n, t, e)
                              },
                          }),
                    n
                )
            }
            function e(t) {
                for (var e = t.length - 1; e >= 0; e--) {
                    var o = t[e][Y]
                    if (!o.P)
                        switch (o.i) {
                            case 5:
                                r(o) && N(o)
                                break
                            case 4:
                                n(o) && N(o)
                        }
                }
            }
            function n(t) {
                for (
                    var e = t.t, n = t.k, r = X(n), o = r.length - 1;
                    o >= 0;
                    o--
                ) {
                    var i = r[o]
                    if (i !== Y) {
                        var a = e[i]
                        if (void 0 === a && !s(e, i)) return !0
                        var c = n[i],
                            u = c && c[Y]
                        if (u ? u.t !== a : !d(c, a)) return !0
                    }
                }
                var l = !!e[Y]
                return r.length !== X(e).length + (l ? 0 : 1)
            }
            function r(t) {
                var e = t.k
                if (e.length !== t.t.length) return !0
                var n = Object.getOwnPropertyDescriptor(e, e.length - 1)
                return !(!n || n.get)
            }
            var o = {}
            O('ES5', {
                J: function (e, n) {
                    var r = Array.isArray(e),
                        o = (function (e, n) {
                            if (e) {
                                for (
                                    var r = Array(n.length), o = 0;
                                    o < n.length;
                                    o++
                                )
                                    Object.defineProperty(r, '' + o, t(o, !0))
                                return r
                            }
                            var i = Z(n)
                            delete i[Y]
                            for (var a = X(i), c = 0; c < a.length; c++) {
                                var u = a[c]
                                i[u] = t(u, e || !!i[u].enumerable)
                            }
                            return Object.create(Object.getPrototypeOf(n), i)
                        })(r, e),
                        i = {
                            i: r ? 5 : 4,
                            A: n ? n.A : x(),
                            P: !1,
                            I: !1,
                            D: {},
                            l: n,
                            t: e,
                            k: o,
                            o: null,
                            g: !1,
                            C: !1,
                        }
                    return (
                        Object.defineProperty(o, Y, { value: i, writable: !0 }),
                        o
                    )
                },
                S: function (t, n, o) {
                    o
                        ? i(n) && n[Y].A === t && e(t.p)
                        : (t.u &&
                              (function t(e) {
                                  if (e && 'object' == typeof e) {
                                      var n = e[Y]
                                      if (n) {
                                          var o = n.t,
                                              i = n.k,
                                              a = n.D,
                                              u = n.i
                                          if (4 === u)
                                              c(i, function (e) {
                                                  e !== Y &&
                                                      (void 0 !== o[e] ||
                                                      s(o, e)
                                                          ? a[e] || t(i[e])
                                                          : ((a[e] = !0), N(n)))
                                              }),
                                                  c(o, function (t) {
                                                      void 0 !== i[t] ||
                                                          s(i, t) ||
                                                          ((a[t] = !1), N(n))
                                                  })
                                          else if (5 === u) {
                                              if (
                                                  (r(n) &&
                                                      (N(n), (a.length = !0)),
                                                  i.length < o.length)
                                              )
                                                  for (
                                                      var l = i.length;
                                                      l < o.length;
                                                      l++
                                                  )
                                                      a[l] = !1
                                              else
                                                  for (
                                                      var f = o.length;
                                                      f < i.length;
                                                      f++
                                                  )
                                                      a[f] = !0
                                              for (
                                                  var d = Math.min(
                                                          i.length,
                                                          o.length
                                                      ),
                                                      p = 0;
                                                  p < d;
                                                  p++
                                              )
                                                  void 0 === a[p] && t(i[p])
                                          }
                                      }
                                  }
                              })(t.p[0]),
                          e(t.p))
                },
                K: function (t) {
                    return 4 === t.i ? n(t) : r(t)
                },
            })
        }
        n.r(e)
        var H,
            W,
            q = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
            U = 'undefined' != typeof Map,
            $ = 'undefined' != typeof Set,
            z =
                'undefined' != typeof Proxy &&
                void 0 !== Proxy.revocable &&
                'undefined' != typeof Reflect,
            K = q
                ? Symbol.for('immer-nothing')
                : (((H = {})['immer-nothing'] = !0), H),
            V = q ? Symbol.for('immer-draftable') : '__$immer_draftable',
            Y = q ? Symbol.for('immer-state') : '__$immer_state',
            X =
                ('undefined' != typeof Symbol && Symbol.iterator,
                'undefined' != typeof Reflect && Reflect.ownKeys
                    ? Reflect.ownKeys
                    : void 0 !== Object.getOwnPropertySymbols
                    ? function (t) {
                          return Object.getOwnPropertyNames(t).concat(
                              Object.getOwnPropertySymbols(t)
                          )
                      }
                    : Object.getOwnPropertyNames),
            Z =
                Object.getOwnPropertyDescriptors ||
                function (t) {
                    var e = {}
                    return (
                        X(t).forEach(function (n) {
                            e[n] = Object.getOwnPropertyDescriptor(t, n)
                        }),
                        e
                    )
                },
            G = {},
            J = {
                get: function (t, e) {
                    if (e === Y) return t
                    var n = b(t)
                    if (!s(n, e))
                        return (function (t, e, n) {
                            var r,
                                o = M(e, n)
                            return o
                                ? 'value' in o
                                    ? o.value
                                    : null === (r = o.get) || void 0 === r
                                    ? void 0
                                    : r.call(t.k)
                                : void 0
                        })(t, n, e)
                    var r = n[e]
                    return t.I || !a(r)
                        ? r
                        : r === L(t.t, e)
                        ? (_(t), (t.o[e] = R(t.A.h, r, t)))
                        : r
                },
                has: function (t, e) {
                    return e in b(t)
                },
                ownKeys: function (t) {
                    return Reflect.ownKeys(b(t))
                },
                set: function (t, e, n) {
                    var r = M(b(t), e)
                    if (null == r ? void 0 : r.set)
                        return r.set.call(t.k, n), !0
                    if (((t.D[e] = !0), !t.P)) {
                        if (d(n, L(b(t), e)) && (void 0 !== n || s(t.t, e)))
                            return !0
                        _(t), N(t)
                    }
                    return (t.o[e] = n), !0
                },
                deleteProperty: function (t, e) {
                    return (
                        void 0 !== L(t.t, e) || e in t.t
                            ? ((t.D[e] = !1), _(t), N(t))
                            : delete t.D[e],
                        t.o && delete t.o[e],
                        !0
                    )
                },
                getOwnPropertyDescriptor: function (t, e) {
                    var n = b(t),
                        r = Reflect.getOwnPropertyDescriptor(n, e)
                    return r
                        ? {
                              writable: !0,
                              configurable: 1 !== t.i || 'length' !== e,
                              enumerable: r.enumerable,
                              value: n[e],
                          }
                        : r
                },
                defineProperty: function () {
                    o(11)
                },
                getPrototypeOf: function (t) {
                    return Object.getPrototypeOf(t.t)
                },
                setPrototypeOf: function () {
                    o(12)
                },
            },
            Q = {}
        c(J, function (t, e) {
            Q[t] = function () {
                return (
                    (arguments[0] = arguments[0][0]), e.apply(this, arguments)
                )
            }
        }),
            (Q.deleteProperty = function (t, e) {
                return J.deleteProperty.call(this, t[0], e)
            }),
            (Q.set = function (t, e, n) {
                return J.set.call(this, t[0], e, n, t[0])
            })
        var tt = new ((function () {
                function t(t) {
                    ;(this.O = z),
                        (this.N = !1),
                        'boolean' ==
                            typeof (null == t ? void 0 : t.useProxies) &&
                            this.setUseProxies(t.useProxies),
                        'boolean' ==
                            typeof (null == t ? void 0 : t.autoFreeze) &&
                            this.setAutoFreeze(t.autoFreeze),
                        (this.produce = this.produce.bind(this)),
                        (this.produceWithPatches = this.produceWithPatches.bind(
                            this
                        ))
                }
                var e = t.prototype
                return (
                    (e.produce = function (t, e, n) {
                        if ('function' == typeof t && 'function' != typeof e) {
                            var r = e
                            e = t
                            var i = this
                            return function (t) {
                                var n = this
                                void 0 === t && (t = r)
                                for (
                                    var o = arguments.length,
                                        a = Array(o > 1 ? o - 1 : 0),
                                        c = 1;
                                    c < o;
                                    c++
                                )
                                    a[c - 1] = arguments[c]
                                return i.produce(t, function (t) {
                                    var r
                                    return (r = e).call.apply(
                                        r,
                                        [n, t].concat(a)
                                    )
                                })
                            }
                        }
                        var c
                        if (
                            ('function' != typeof e && o(6),
                            void 0 !== n && 'function' != typeof n && o(7),
                            a(t))
                        ) {
                            var u = D(this),
                                s = R(this, t, void 0),
                                l = !0
                            try {
                                ;(c = e(s)), (l = !1)
                            } finally {
                                l ? P(u) : j(u)
                            }
                            return 'undefined' != typeof Promise &&
                                c instanceof Promise
                                ? c.then(
                                      function (t) {
                                          return E(u, n), k(t, u)
                                      },
                                      function (t) {
                                          throw (P(u), t)
                                      }
                                  )
                                : (E(u, n), k(c, u))
                        }
                        if (!t || 'object' != typeof t) {
                            if ((c = e(t)) === K) return
                            return (
                                void 0 === c && (c = t), this.N && v(c, !0), c
                            )
                        }
                        o(21, t)
                    }),
                    (e.produceWithPatches = function (t, e) {
                        var n,
                            r,
                            o = this
                        return 'function' == typeof t
                            ? function (e) {
                                  for (
                                      var n = arguments.length,
                                          r = Array(n > 1 ? n - 1 : 0),
                                          i = 1;
                                      i < n;
                                      i++
                                  )
                                      r[i - 1] = arguments[i]
                                  return o.produceWithPatches(e, function (e) {
                                      return t.apply(void 0, [e].concat(r))
                                  })
                              }
                            : [
                                  this.produce(t, e, function (t, e) {
                                      ;(n = t), (r = e)
                                  }),
                                  n,
                                  r,
                              ]
                    }),
                    (e.createDraft = function (t) {
                        a(t) || o(8), i(t) && (t = B(t))
                        var e = D(this),
                            n = R(this, t, void 0)
                        return (n[Y].C = !0), j(e), n
                    }),
                    (e.finishDraft = function (t, e) {
                        var n = (t && t[Y]).A
                        return E(n, e), k(void 0, n)
                    }),
                    (e.setAutoFreeze = function (t) {
                        this.N = t
                    }),
                    (e.setUseProxies = function (t) {
                        t && !z && o(20), (this.O = t)
                    }),
                    (e.applyPatches = function (t, e) {
                        var n
                        for (n = e.length - 1; n >= 0; n--) {
                            var r = e[n]
                            if (0 === r.path.length && 'replace' === r.op) {
                                t = r.value
                                break
                            }
                        }
                        var o = w('Patches').$
                        return i(t)
                            ? o(t, e)
                            : this.produce(t, function (t) {
                                  return o(t, e.slice(n + 1))
                              })
                    }),
                    t
                )
            })())(),
            et = tt.produce,
            nt =
                (tt.produceWithPatches.bind(tt),
                tt.setAutoFreeze.bind(tt),
                tt.setUseProxies.bind(tt),
                tt.applyPatches.bind(tt),
                tt.createDraft.bind(tt),
                tt.finishDraft.bind(tt),
                et),
            rt = n(0),
            ot = function () {
                return Math.random()
                    .toString(36)
                    .substring(7)
                    .split('')
                    .join('.')
            },
            it = {
                INIT: '@@redux/INIT' + ot(),
                REPLACE: '@@redux/REPLACE' + ot(),
                PROBE_UNKNOWN_ACTION: function () {
                    return '@@redux/PROBE_UNKNOWN_ACTION' + ot()
                },
            }
        function at(t) {
            if ('object' != typeof t || null === t) return !1
            for (var e = t; null !== Object.getPrototypeOf(e); )
                e = Object.getPrototypeOf(e)
            return Object.getPrototypeOf(t) === e
        }
        function ct(t, e, n) {
            var r
            if (
                ('function' == typeof e && 'function' == typeof n) ||
                ('function' == typeof n && 'function' == typeof arguments[3])
            )
                throw new Error(
                    'It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.'
                )
            if (
                ('function' == typeof e &&
                    void 0 === n &&
                    ((n = e), (e = void 0)),
                void 0 !== n)
            ) {
                if ('function' != typeof n)
                    throw new Error('Expected the enhancer to be a function.')
                return n(ct)(t, e)
            }
            if ('function' != typeof t)
                throw new Error('Expected the reducer to be a function.')
            var o = t,
                i = e,
                a = [],
                c = a,
                u = !1
            function s() {
                c === a && (c = a.slice())
            }
            function l() {
                if (u)
                    throw new Error(
                        'You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.'
                    )
                return i
            }
            function f(t) {
                if ('function' != typeof t)
                    throw new Error('Expected the listener to be a function.')
                if (u)
                    throw new Error(
                        'You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.'
                    )
                var e = !0
                return (
                    s(),
                    c.push(t),
                    function () {
                        if (e) {
                            if (u)
                                throw new Error(
                                    'You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.'
                                )
                            ;(e = !1), s()
                            var n = c.indexOf(t)
                            c.splice(n, 1), (a = null)
                        }
                    }
                )
            }
            function d(t) {
                if (!at(t))
                    throw new Error(
                        'Actions must be plain objects. Use custom middleware for async actions.'
                    )
                if (void 0 === t.type)
                    throw new Error(
                        'Actions may not have an undefined "type" property. Have you misspelled a constant?'
                    )
                if (u) throw new Error('Reducers may not dispatch actions.')
                try {
                    ;(u = !0), (i = o(i, t))
                } finally {
                    u = !1
                }
                for (var e = (a = c), n = 0; n < e.length; n++) {
                    ;(0, e[n])()
                }
                return t
            }
            function p(t) {
                if ('function' != typeof t)
                    throw new Error(
                        'Expected the nextReducer to be a function.'
                    )
                ;(o = t), d({ type: it.REPLACE })
            }
            function h() {
                var t,
                    e = f
                return (
                    ((t = {
                        subscribe: function (t) {
                            if ('object' != typeof t || null === t)
                                throw new TypeError(
                                    'Expected the observer to be an object.'
                                )
                            function n() {
                                t.next && t.next(l())
                            }
                            return n(), { unsubscribe: e(n) }
                        },
                    })[rt.a] = function () {
                        return this
                    }),
                    t
                )
            }
            return (
                d({ type: it.INIT }),
                ((r = {
                    dispatch: d,
                    subscribe: f,
                    getState: l,
                    replaceReducer: p,
                })[rt.a] = h),
                r
            )
        }
        function ut(t, e) {
            var n = e && e.type
            return (
                'Given ' +
                ((n && 'action "' + String(n) + '"') || 'an action') +
                ', reducer "' +
                t +
                '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
            )
        }
        function st(t) {
            for (var e = Object.keys(t), n = {}, r = 0; r < e.length; r++) {
                var o = e[r]
                0, 'function' == typeof t[o] && (n[o] = t[o])
            }
            var i,
                a = Object.keys(n)
            try {
                !(function (t) {
                    Object.keys(t).forEach(function (e) {
                        var n = t[e]
                        if (void 0 === n(void 0, { type: it.INIT }))
                            throw new Error(
                                'Reducer "' +
                                    e +
                                    '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don\'t want to set a value for this reducer, you can use null instead of undefined.'
                            )
                        if (
                            void 0 ===
                            n(void 0, { type: it.PROBE_UNKNOWN_ACTION() })
                        )
                            throw new Error(
                                'Reducer "' +
                                    e +
                                    '" returned undefined when probed with a random type. Don\'t try to handle ' +
                                    it.INIT +
                                    ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
                            )
                    })
                })(n)
            } catch (t) {
                i = t
            }
            return function (t, e) {
                if ((void 0 === t && (t = {}), i)) throw i
                for (var r = !1, o = {}, c = 0; c < a.length; c++) {
                    var u = a[c],
                        s = n[u],
                        l = t[u],
                        f = s(l, e)
                    if (void 0 === f) {
                        var d = ut(u, e)
                        throw new Error(d)
                    }
                    ;(o[u] = f), (r = r || f !== l)
                }
                return (r = r || a.length !== Object.keys(t).length) ? o : t
            }
        }
        function lt(t, e, n) {
            return (
                e in t
                    ? Object.defineProperty(t, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (t[e] = n),
                t
            )
        }
        function ft(t, e) {
            var n = Object.keys(t)
            return (
                Object.getOwnPropertySymbols &&
                    n.push.apply(n, Object.getOwnPropertySymbols(t)),
                e &&
                    (n = n.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })),
                n
            )
        }
        function dt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}
                e % 2
                    ? ft(n, !0).forEach(function (e) {
                          lt(t, e, n[e])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          t,
                          Object.getOwnPropertyDescriptors(n)
                      )
                    : ft(n).forEach(function (e) {
                          Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(n, e)
                          )
                      })
            }
            return t
        }
        function pt() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n]
            return 0 === e.length
                ? function (t) {
                      return t
                  }
                : 1 === e.length
                ? e[0]
                : e.reduce(function (t, e) {
                      return function () {
                          return t(e.apply(void 0, arguments))
                      }
                  })
        }
        function ht() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n]
            return function (t) {
                return function () {
                    var n = t.apply(void 0, arguments),
                        r = function () {
                            throw new Error(
                                'Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.'
                            )
                        },
                        o = {
                            getState: n.getState,
                            dispatch: function () {
                                return r.apply(void 0, arguments)
                            },
                        },
                        i = e.map(function (t) {
                            return t(o)
                        })
                    return dt({}, n, {
                        dispatch: (r = pt.apply(void 0, i)(n.dispatch)),
                    })
                }
            }
        }
        function bt(t, e) {
            return t === e
        }
        function yt(t, e, n) {
            if (null === e || null === n || e.length !== n.length) return !1
            for (var r = e.length, o = 0; o < r; o++)
                if (!t(e[o], n[o])) return !1
            return !0
        }
        function vt(t) {
            var e = Array.isArray(t[0]) ? t[0] : t
            if (
                !e.every(function (t) {
                    return 'function' == typeof t
                })
            ) {
                var n = e
                    .map(function (t) {
                        return typeof t
                    })
                    .join(', ')
                throw new Error(
                    'Selector creators expect all input-selectors to be functions, instead received the following types: [' +
                        n +
                        ']'
                )
            }
            return e
        }
        !(function (t) {
            for (
                var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
                r < e;
                r++
            )
                n[r - 1] = arguments[r]
        })(function (t) {
            var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : bt,
                n = null,
                r = null
            return function () {
                return (
                    yt(e, n, arguments) || (r = t.apply(null, arguments)),
                    (n = arguments),
                    r
                )
            }
        })
        function mt(t) {
            return function (e) {
                var n = e.dispatch,
                    r = e.getState
                return function (e) {
                    return function (o) {
                        return 'function' == typeof o ? o(n, r, t) : e(o)
                    }
                }
            }
        }
        var gt = mt()
        gt.withExtraArgument = mt
        var wt = gt
        function Ot() {
            return (Ot =
                Object.assign ||
                function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e]
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) &&
                                (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
        }
        function xt(t) {
            return (xt = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t)
                  })(t)
        }
        function Et(t, e) {
            return (Et =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t
                })(t, e)
        }
        function Pt() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
            if (Reflect.construct.sham) return !1
            if ('function' == typeof Proxy) return !0
            try {
                return (
                    Date.prototype.toString.call(
                        Reflect.construct(Date, [], function () {})
                    ),
                    !0
                )
            } catch (t) {
                return !1
            }
        }
        function jt(t, e, n) {
            return (jt = Pt()
                ? Reflect.construct
                : function (t, e, n) {
                      var r = [null]
                      r.push.apply(r, e)
                      var o = new (Function.bind.apply(t, r))()
                      return n && Et(o, n.prototype), o
                  }).apply(null, arguments)
        }
        function Dt(t) {
            var e = 'function' == typeof Map ? new Map() : void 0
            return (Dt = function (t) {
                if (
                    null === t ||
                    ((n = t),
                    -1 === Function.toString.call(n).indexOf('[native code]'))
                )
                    return t
                var n
                if ('function' != typeof t)
                    throw new TypeError(
                        'Super expression must either be null or a function'
                    )
                if (void 0 !== e) {
                    if (e.has(t)) return e.get(t)
                    e.set(t, r)
                }
                function r() {
                    return jt(t, arguments, xt(this).constructor)
                }
                return (
                    (r.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                    Et(r, t)
                )
            })(t)
        }
        var Tt =
            'undefined' != typeof window &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                : function () {
                      if (0 !== arguments.length)
                          return 'object' == typeof arguments[0]
                              ? pt
                              : pt.apply(null, arguments)
                  }
        function kt(t) {
            if ('object' != typeof t || null === t) return !1
            for (var e = t; null !== Object.getPrototypeOf(e); )
                e = Object.getPrototypeOf(e)
            return Object.getPrototypeOf(t) === e
        }
        var St = (function (t) {
            var e, n
            function r() {
                return t.apply(this, arguments) || this
            }
            ;(n = t),
                ((e = r).prototype = Object.create(n.prototype)),
                (e.prototype.constructor = e),
                (e.__proto__ = n)
            var o = r.prototype
            return (
                (o.concat = function () {
                    for (
                        var e, n = arguments.length, o = new Array(n), i = 0;
                        i < n;
                        i++
                    )
                        o[i] = arguments[i]
                    return jt(
                        r,
                        (e = t.prototype.concat).call.apply(e, [this].concat(o))
                    )
                }),
                (o.prepend = function () {
                    for (
                        var t = arguments.length, e = new Array(t), n = 0;
                        n < t;
                        n++
                    )
                        e[n] = arguments[n]
                    return 1 === e.length && Array.isArray(e[0])
                        ? jt(r, e[0].concat(this))
                        : jt(r, e.concat(this))
                }),
                r
            )
        })(Dt(Array))
        function At() {
            return function (t) {
                return (function (t) {
                    void 0 === t && (t = {})
                    var e = t,
                        n = e.thunk,
                        r = void 0 === n || n,
                        o = (e.immutableCheck, e.serializableCheck, new St())
                    r &&
                        ('boolean' == typeof r
                            ? o.push(wt)
                            : o.push(wt.withExtraArgument(r.extraArgument)))
                    0
                    return o
                })(t)
            }
        }
        function Ct(t, e) {
            function n() {
                if (e) {
                    var n = e.apply(void 0, arguments)
                    if (!n)
                        throw new Error(
                            'prepareAction did not return an object'
                        )
                    return Ot(
                        { type: t, payload: n.payload },
                        'meta' in n && { meta: n.meta },
                        {},
                        'error' in n && { error: n.error }
                    )
                }
                return {
                    type: t,
                    payload: arguments.length <= 0 ? void 0 : arguments[0],
                }
            }
            return (
                (n.toString = function () {
                    return '' + t
                }),
                (n.type = t),
                (n.match = function (e) {
                    return e.type === t
                }),
                n
            )
        }
        function Lt(t) {
            var e,
                n = {},
                r = [],
                o = {
                    addCase: function (t, e) {
                        var r = 'string' == typeof t ? t : t.type
                        if (r in n)
                            throw new Error(
                                'addCase cannot be called with two reducers for the same action type'
                            )
                        return (n[r] = e), o
                    },
                    addMatcher: function (t, e) {
                        return r.push({ matcher: t, reducer: e }), o
                    },
                    addDefaultCase: function (t) {
                        return (e = t), o
                    },
                }
            return t(o), [n, r, e]
        }
        function Mt(t, e, n, r) {
            void 0 === n && (n = [])
            var o = 'function' == typeof e ? Lt(e) : [e, n, r],
                c = o[0],
                u = o[1],
                s = o[2]
            return function (e, n) {
                void 0 === e && (e = t)
                var r = [c[n.type]].concat(
                    u
                        .filter(function (t) {
                            return (0, t.matcher)(n)
                        })
                        .map(function (t) {
                            return t.reducer
                        })
                )
                return (
                    0 ===
                        r.filter(function (t) {
                            return !!t
                        }).length && (r = [s]),
                    r.reduce(function (t, e) {
                        if (e) {
                            if (i(t)) {
                                var r = e(t, n)
                                return void 0 === r ? t : r
                            }
                            if (a(t))
                                return nt(t, function (t) {
                                    return e(t, n)
                                })
                            var o = e(t, n)
                            if (void 0 === o)
                                throw Error(
                                    'A case reducer on a non-draftable value must not return undefined'
                                )
                            return o
                        }
                        return t
                    }, e)
                )
            }
        }
        'undefined' != typeof Symbol &&
            (Symbol.iterator || (Symbol.iterator = Symbol('Symbol.iterator'))),
            'undefined' != typeof Symbol &&
                (Symbol.asyncIterator ||
                    (Symbol.asyncIterator = Symbol('Symbol.asyncIterator')))
        F()
        var Nt = (function (t) {
                var e = t.name,
                    n = t.initialState
                if (!e)
                    throw new Error(
                        '`name` is a required option for createSlice'
                    )
                var r = t.reducers || {},
                    o =
                        void 0 === t.extraReducers
                            ? []
                            : 'function' == typeof t.extraReducers
                            ? Lt(t.extraReducers)
                            : [t.extraReducers],
                    i = o[0],
                    a = void 0 === i ? {} : i,
                    c = o[1],
                    u = void 0 === c ? [] : c,
                    s = o[2],
                    l = void 0 === s ? void 0 : s,
                    f = Object.keys(r),
                    d = {},
                    p = {},
                    h = {}
                f.forEach(function (t) {
                    var n,
                        o,
                        i = r[t],
                        a = e + '/' + t
                    'reducer' in i
                        ? ((n = i.reducer), (o = i.prepare))
                        : (n = i),
                        (d[t] = n),
                        (p[a] = n),
                        (h[t] = o ? Ct(a, o) : Ct(a))
                })
                var b = Mt(n, Ot({}, a, {}, p), u, l)
                return { name: e, reducer: b, actions: h, caseReducers: d }
            })({
                name: 'digitalsDisplay',
                initialState: { displayData: '0' },
                reducers: {
                    addButtonValueToScreen: function (t, e) {
                        t.displayData = (function () {
                            var t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : { displayData: '' },
                                e =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : '',
                                n = t.displayData.trim() + e.trim()
                            switch (!0) {
                                case /error/i.test(n):
                                    return n.replace(/error/gi, '')
                                case /\//.test(n):
                                    n = n.replace(/\//g, '÷')
                                case /\,/.test(n):
                                    n = n.replace(/\,/g, '.')
                                case /^0+/.test(n):
                                    n = n.replace(/^0+/, '0')
                                case /^0(\d|[(])/.test(n):
                                    n = n.replace(/^0(\d|[(])/, '$1')
                                case /([+-]|÷|\*)\s*0(\d)/.test(n):
                                    n = n.replace(
                                        /([+-]|÷|\*)\s*0(\d)/,
                                        '$1 $2'
                                    )
                                case /^\s*(\*|÷)\s*(\d+)/.test(n):
                                    n = n.replace(
                                        /^\s*(\*|÷)\s*(\d+)/,
                                        '$2 $1 $2'
                                    )
                                case /(\s*\+\s*|\s*-\s*|\s*÷\s*|\s*\*\s*)+/.test(
                                    n
                                ):
                                    n = n.replace(
                                        /(\s*\+\s*|\s*-\s*|\s*÷\s*|\s*\*\s*)+/g,
                                        ' $1 '
                                    )
                                case /(\.|\(|\))+/.test(n):
                                    n = n.replace(/(\.|\(|\))+/g, '$1')
                                case /(\d+\.\d+)\./.test(n):
                                    n = n.replace(/(\d+\.\d+)\./g, '$1')
                                case /^\./.test(n):
                                    n = n.replace(/^\./, '0.')
                                case /[^\d]\./.test(n):
                                    n = n.replace(/[^\d]\./g, ' 0.')
                                case /([\d])\.\s/.test(n):
                                    n = n.replace(/([\d])\.\s/g, '$1 ')
                                case /\s{2}/.test(n):
                                    n = n.replace(/\s{2}/g, ' ')
                                case /e - /.test(n):
                                    n = n.replace(/e - /g, 'e-')
                            }
                            return n
                        })(t, e.payload)
                    },
                    clearAllFromCalcScreen: function (t) {
                        t.displayData = '0'
                    },
                    doEqual: function (t) {
                        t.displayData = (function (t) {
                            if (
                                (console.log(t.displayData),
                                /error/gi.test(t.displayData))
                            )
                                return 'Error'
                            var e = t.displayData
                                .replace(/^-\s*(\d*)/, '0 - $1')
                                .split(' ')
                                .map(function (t) {
                                    return /\d/.test(t) ? Number(t) : t
                                })
                            e.forEach(function (t, n) {
                                '*' === t &&
                                    ((e[n + 1] = e[n - 1] * e[n + 1]),
                                    (e[n] = null),
                                    (e[n - 1] = null)),
                                    '÷' === t &&
                                        ((e[n + 1] = e[n - 1] / e[n + 1]),
                                        (e[n] = null),
                                        (e[n - 1] = null))
                            }),
                                (e = e.filter(function (t) {
                                    return null !== t
                                })).forEach(function (t, n) {
                                    '-' === t &&
                                        ((e[n + 1] = e[n - 1] - e[n + 1]),
                                        (e[n] = null),
                                        (e[n - 1] = null))
                                })
                            var n = e
                                .filter(function (t) {
                                    return 'number' == typeof t
                                })
                                .reduce(function (t, e) {
                                    return t + e
                                })
                            n = parseFloat(n.toFixed(11))
                            var r = String(n).replace(/^-(\s*)+/g, '- $1')
                            return /nan/gi.test(r) ? 'Error' : r
                        })(t)
                    },
                },
            }),
            _t = Nt.actions,
            Rt = _t.addButtonValueToScreen,
            Bt = _t.clearAllFromCalcScreen,
            It = _t.doEqual,
            Ft = Nt.reducer
        var Ht,
            Wt,
            qt,
            Ut,
            $t = Ct('ADD_TODO'),
            zt = (function (t) {
                var e,
                    n = At(),
                    r = t || {},
                    o = r.reducer,
                    i = void 0 === o ? void 0 : o,
                    a = r.middleware,
                    c = void 0 === a ? n() : a,
                    u = r.devTools,
                    s = void 0 === u || u,
                    l = r.preloadedState,
                    f = void 0 === l ? void 0 : l,
                    d = r.enhancers,
                    p = void 0 === d ? void 0 : d
                if ('function' == typeof i) e = i
                else {
                    if (!kt(i))
                        throw new Error(
                            '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
                        )
                    e = st(i)
                }
                var h = ht.apply(void 0, 'function' == typeof c ? c(n) : c),
                    b = pt
                s && (b = Tt(Ot({ trace: !1 }, 'object' == typeof s && s)))
                var y = [h]
                return (
                    Array.isArray(p)
                        ? (y = [h].concat(p))
                        : 'function' == typeof p && (y = p(y)),
                    ct(e, f, b.apply(void 0, y))
                )
            })({
                reducer: st({
                    modernReducer: Mt(
                        { foo: 'bar', defaultArray: ['abr', 'vlg'] },
                        ((Ht = {}),
                        (Wt = $t.type),
                        (qt = function (t, e) {
                            ;(t.foo = Math.random()),
                                t.defaultArray.push(e.text)
                        }),
                        Wt in Ht
                            ? Object.defineProperty(Ht, Wt, {
                                  value: qt,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (Ht[Wt] = qt),
                        Ht)
                    ),
                    buttonToDisplay: Ft,
                }),
            }),
            Kt = function () {
                return Math.floor(20 * Math.random())
            },
            Vt = {
                iRnd: function () {
                    return alert(zt.getState().buttonToDisplay.displayData)
                },
                create: r,
                strTest: function () {
                    return r({})
                },
                doRdx: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 123123123
                    zt.dispatch({
                        type: 'ADD_TODO',
                        text: 'myLib.js - '
                            .concat(t.trim(), ' ~> ')
                            .concat(Kt()),
                    })
                },
                buttonToDisplay: {
                    btnToDspl: function (t) {
                        return zt.dispatch(Rt(t))
                    },
                    clearAll: function () {
                        return zt.dispatch(Bt())
                    },
                    doEqual: function () {
                        return zt.dispatch(It())
                    },
                },
            },
            Yt = ((window.myLib = Vt), ['checked', 'selected', 'value']),
            Xt = {},
            Zt = !1,
            Gt = function (t) {
                return Object.prototype.toString
                    .call(t)
                    .slice(8, -1)
                    .toLowerCase()
            }
        Xt.trueTypeOf = Gt
        var Jt = function (t) {
            if (Zt) throw new Error(t)
        }
        Xt.err = Jt
        var Qt = function (t, e) {
                var n = Gt(t)
                if ('object' === n) {
                    var r = {}
                    for (var o in t) t.hasOwnProperty(o) && (r[o] = Qt(t[o], e))
                    return r
                }
                if ('array' === n)
                    return t.map(function (t) {
                        return Qt(t, e)
                    })
                if ('string' === n && !e) {
                    var i = document.createElement('div')
                    return (i.textContent = t), i.innerHTML
                }
                return t
            },
            te = function (t) {
                t.debounce && window.cancelAnimationFrame(t.debounce),
                    (t.debounce = window.requestAnimationFrame(function () {
                        t.render()
                    }))
            },
            ee = function (t) {
                return {
                    get: function (e, n) {
                        return ['object', 'array'].indexOf(Gt(e[n])) > -1
                            ? new Proxy(e[n], ee(t))
                            : e[n]
                    },
                    set: function (e, n, r) {
                        return e[n] === r || ((e[n] = r), te(t)), !0
                    },
                }
            },
            ne = function (t, e) {
                var n = t.filter(e)
                return n.length < 1 ? null : n[0]
            },
            re = function (t, e) {
                if (!(t || (e && e.lagoon)))
                    return Jt(
                        'You did not provide an element to make into a component.'
                    )
                if (!e || (!e.template && !e.lagoon))
                    return Jt(
                        'You did not provide a template for this component.'
                    )
                var n = this,
                    r = (function (t, e) {
                        return t.setters
                            ? t.store
                                ? null
                                : t.data
                            : t.data && !t.store
                            ? new Proxy(t.data, ee(e))
                            : null
                    })(e, n),
                    o = e.store,
                    i = e.router,
                    a = e.setters,
                    c = e.getters
                ;(n.debounce = null),
                    Object.defineProperties(n, {
                        elem: { value: t },
                        template: { value: e.template },
                        allowHTML: { value: e.allowHTML },
                        lagoon: { value: e.lagoon },
                        store: { value: o },
                        attached: { value: [] },
                        router: { value: i },
                    }),
                    Object.defineProperty(n, 'data', {
                        get: function () {
                            return a ? Qt(r, !0) : r
                        },
                        set: function (t) {
                            return (
                                o || a || ((r = new Proxy(t, ee(n))), te(n)), !0
                            )
                        },
                    }),
                    a &&
                        !o &&
                        Object.defineProperty(n, 'do', {
                            value: function (t) {
                                if (!a[t])
                                    return Jt(
                                        'There is no setter with this name.'
                                    )
                                var e = Array.prototype.slice.call(arguments)
                                ;(e[0] = r), a[t].apply(n, e), te(n)
                            },
                        }),
                    c &&
                        !o &&
                        Object.defineProperty(n, 'get', {
                            value: function (t) {
                                return c[t]
                                    ? c[t](r)
                                    : Jt('There is no getter with this name.')
                            },
                        }),
                    i && 'addComponent' in i && i.addComponent(n),
                    o && 'attach' in o && o.attach(n),
                    e.attachTo &&
                        ('array' === Gt(e.attachTo)
                            ? e.attachTo
                            : [e.attachTo]
                        ).forEach(function (t) {
                            'attach' in t && t.attach(n)
                        })
            }
        re.Store = function (t) {
            return (t.lagoon = !0), new re(null, t)
        }
        var oe = function (t, e) {
                e.forEach(function (e) {
                    t.style[e] = ''
                })
            },
            ie = function (t, e) {
                e.forEach(function (e) {
                    if ('class' === e.att) t.className = e.value
                    else if ('style' === e.att)
                        !(function (t, e) {
                            var n = (function (t) {
                                    return t.split(';').reduce(function (t, e) {
                                        var n = e.indexOf(':')
                                        return (
                                            n &&
                                                t.push({
                                                    name: e.slice(0, n).trim(),
                                                    value: e
                                                        .slice(n + 1)
                                                        .trim(),
                                                }),
                                            t
                                        )
                                    }, [])
                                })(e),
                                r = Array.prototype.filter.call(
                                    t.style,
                                    function (e) {
                                        return (
                                            null ===
                                            ne(n, function (n) {
                                                return (
                                                    n.name === e &&
                                                    n.value === t.style[e]
                                                )
                                            })
                                        )
                                    }
                                )
                            oe(t, r),
                                (function (t, e) {
                                    e.forEach(function (e) {
                                        t.style[e.name] = e.value
                                    })
                                })(t, n)
                        })(t, e.value)
                    else {
                        if (e.att in t)
                            try {
                                ;(t[e.att] = e.value),
                                    t[e.att] ||
                                        0 === t[e.att] ||
                                        (t[e.att] = !0)
                            } catch (t) {}
                        try {
                            t.setAttribute(e.att, e.value)
                        } catch (t) {}
                    }
                })
            },
            ae = function (t, e) {
                e.forEach(function (e) {
                    if ('class' === e.att) t.className = ''
                    else if ('style' === e.att)
                        oe(t, Array.prototype.slice.call(t.style))
                    else {
                        if (e.att in t)
                            try {
                                t[e.att] = ''
                            } catch (t) {}
                        try {
                            t.removeAttribute(e.att)
                        } catch (t) {}
                    }
                })
            },
            ce = function (t, e) {
                return { att: t, value: e }
            },
            ue = function (t, e) {
                if (1 !== t.nodeType) return []
                var n = (function (t, e) {
                    return Array.prototype.reduce.call(
                        t.attributes,
                        function (t, n) {
                            return (
                                !(
                                    Yt.indexOf(n.name) < 0 ||
                                    (e && 'selected' === n.name)
                                ) ||
                                    (n.name.length > 7 &&
                                        'default' === n.name.slice(0, 7)) ||
                                    t.push(ce(n.name, n.value)),
                                t
                            )
                        },
                        []
                    )
                })(t, e)
                return (
                    (function (t, e, n) {
                        Yt.forEach(function (r) {
                            ;(!t[r] && 0 !== t[r]) ||
                                (n &&
                                    'option' === t.tagName.toLowerCase() &&
                                    'selected' === r) ||
                                (n &&
                                    'select' === t.tagName.toLowerCase() &&
                                    'value' === r) ||
                                e.push(ce(r, t[r]))
                        })
                    })(t, n, e),
                    n
                )
            },
            se = function (t) {
                return 3 === t.nodeType
                    ? 'text'
                    : 8 === t.nodeType
                    ? 'comment'
                    : t.tagName.toLowerCase()
            },
            le = function (t) {
                return t.childNodes && t.childNodes.length > 0
                    ? null
                    : t.textContent
            },
            fe = function (t) {
                1 === t.nodeType &&
                    (Array.prototype.forEach.call(t.attributes, function (e) {
                        e.name.length < 8 ||
                            'default' !== e.name.slice(0, 7) ||
                            (ie(t, [
                                ce(e.name.slice(7).toLowerCase(), e.value),
                            ]),
                            ae(t, [ce(e.name, e.value)]))
                    }),
                    t.childNodes &&
                        Array.prototype.forEach.call(t.childNodes, function (
                            t
                        ) {
                            fe(t)
                        }))
            },
            de = function (t, e, n) {
                var r = Array.prototype.slice.call(e.childNodes),
                    o = Array.prototype.slice.call(t.childNodes),
                    i = r.length - o.length
                if (i > 0)
                    for (; i > 0; i--)
                        r[r.length - i].parentNode.removeChild(r[r.length - i])
                o.forEach(function (t, o) {
                    if (!r[o]) return fe(t), void e.appendChild(t.cloneNode(!0))
                    if (se(t) === se(r[o])) {
                        if (
                            ((function (t, e) {
                                var n = ue(t, !0),
                                    r = ue(e),
                                    o = r.filter(function (t) {
                                        return (
                                            !(Yt.indexOf(t.att) > -1) &&
                                            null ===
                                                ne(n, function (e) {
                                                    return t.att === e.att
                                                })
                                        )
                                    }),
                                    i = n.filter(function (t) {
                                        var e = ne(r, function (e) {
                                            return t.att === e.att
                                        })
                                        return null === e || e.value !== t.value
                                    })
                                ie(e, i), ae(e, o)
                            })(t, r[o]),
                            !(
                                n.filter(function (e) {
                                    return (
                                        3 !== t.nodeType &&
                                        (function (t, e) {
                                            return (
                                                (Element.prototype.matches &&
                                                    t.matches(e)) ||
                                                (Element.prototype
                                                    .msMatchesSelector &&
                                                    t.msMatchesSelector(e)) ||
                                                (Element.prototype
                                                    .webkitMatchesSelector &&
                                                    t.webkitMatchesSelector(e))
                                            )
                                        })(t, e)
                                    )
                                }).length > 0
                            ))
                        ) {
                            var i = le(t)
                            if (
                                (i && i !== le(r[o]) && (r[o].textContent = i),
                                r[o].childNodes.length > 0 &&
                                    t.childNodes.length < 1)
                            )
                                r[o].innerHTML = ''
                            else {
                                if (
                                    r[o].childNodes.length < 1 &&
                                    t.childNodes.length > 0
                                ) {
                                    var a = document.createDocumentFragment()
                                    return de(t, a, n), void r[o].appendChild(a)
                                }
                                t.childNodes.length > 0 && de(t, r[o], n)
                            }
                        }
                    } else r[o].parentNode.replaceChild(t.cloneNode(!0), r[o])
                })
            },
            pe = function (t, e) {
                t &&
                    t.forEach(function (t) {
                        if (t.attached.indexOf(e) > -1)
                            return Jt(
                                e.elem +
                                    ' has attached nodes that it is also attached to, creating an infinite loop.'
                            )
                        'render' in t && t.render()
                    })
            }
        ;(re.emit = function (t, e, n) {
            var r
            if (!t || !e)
                return Jt('You did not provide an element or event name.')
            ;(r = new CustomEvent(e, { bubbles: !0, detail: n })),
                t.dispatchEvent(r)
        }),
            (re.prototype.render = function () {
                if (this.lagoon) pe(this.attached, this)
                else {
                    if (!this.template) return Jt('No template was provided.')
                    var t =
                        'string' === Gt(this.elem)
                            ? document.querySelector(this.elem)
                            : this.elem
                    if (!t)
                        return Jt(
                            'The DOM element to render your template into was not found.'
                        )
                    var e = Qt(
                            (this.store ? this.store.data : this.data) || {},
                            this.allowHTML
                        ),
                        n =
                            'function' === Gt(this.template)
                                ? this.template(
                                      e,
                                      this.router ? this.router.current : null
                                  )
                                : this.template
                    if (!(['string', 'number'].indexOf(Gt(n)) < 0)) {
                        var r = this.attached.map(function (t) {
                            return t.elem
                        })
                        return (
                            de(
                                (function (t) {
                                    if (Ut) {
                                        var e = new DOMParser().parseFromString(
                                            t,
                                            'text/html'
                                        )
                                        return (
                                            'head' in e &&
                                                'childNodes' in e.head &&
                                                e.head.childNodes.length > 0 &&
                                                Array.prototype.slice
                                                    .call(e.head.childNodes)
                                                    .reverse()
                                                    .forEach(function (t) {
                                                        e.body.insertBefore(
                                                            t,
                                                            e.body.firstChild
                                                        )
                                                    }),
                                            e.body
                                        )
                                    }
                                    var n = document.createElement('div')
                                    return (n.innerHTML = t), n
                                })(n),
                                t,
                                r
                            ),
                            re.emit(t, 'render', e),
                            pe(this.attached, this),
                            t
                        )
                    }
                }
            }),
            (re.prototype.attach = function (t) {
                'array' === Gt(t)
                    ? this.attached.concat(t)
                    : this.attached.push(t)
            }),
            (re.prototype.detach = function (t) {
                var e = 'array' === Gt(t) ? t : [t],
                    n = this
                e.forEach(function (t) {
                    var e = n.attached.indexOf(t)
                    e < 0 || n.attached.splice(e, 1)
                })
            }),
            (re.debug = function (t) {
                Zt = !!t
            }),
            (re.clone = Qt),
            (re._ = Xt),
            (Ut = (function () {
                if (!window.DOMParser) return !1
                var t = new DOMParser()
                try {
                    t.parseFromString('x', 'text/html')
                } catch (t) {
                    return !1
                }
                return !0
            })())
        var he = function () {
                return '<div>\n\n    <div\n        class="row"\n        role="calcMainScreen"\n        onclick="window.myLib.buttonToDisplay.doEqual()"\n    >\n    <div class="col calcScreen">\n                \n        '.concat(
                    zt.getState().buttonToDisplay.displayData,
                    '            \n            \n    </div>\n\n    </div>\n\n</div>'
                )
            },
            be = function () {
                return '<div>\n\n    <div class="row">\n\n        <div class="col">\n            <button\n                role="calcBtnSeven"\n                class="calc-btn btn btn-outline-secondary btn-lg btn-block"\n                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n            >\n                7\n            </button> \n        </div>  \n        \n        <div class="col">\n            <button\n                role="calcBtnEight"\n                class="calc-btn btn btn-outline-secondary btn-lg btn-block"\n                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n            >\n                8\n            </button> \n        </div>  \n\n        <div class="col">\n            <button\n                role="calcBtnNine"\n                class="calc-btn btn btn-outline-secondary btn-lg btn-block"\n                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n            >\n                9\n            </button> \n        </div>  \n\n        <div class="col">\n            <button\n                role="calcBtnDivision"\n                class="calc-btn btn btn-outline-secondary btn-lg btn-block"\n                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n            >\n                ÷\n            </button> \n        </div>  \n\n    </div>\n\n    <div class="row">\n\n        <div class="col">\n            <button\n                role="calcBtnFour"\n                class="calc-btn btn btn-outline-secondary btn-lg btn-block"\n                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n            >\n                4\n            </button> \n        </div>  \n        \n        <div class="col">\n            <button\n                role="calcBtnFive"\n                class="calc-btn btn btn-outline-secondary btn-lg btn-block"\n                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n            >\n                5\n            </button> \n        </div>  \n\n        <div class="col">\n            <button\n                role="calcBtnSix"\n                class="calc-btn btn btn-outline-secondary btn-lg btn-block"\n                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n            >\n                6\n            </button> \n        </div>  \n\n        <div class="col">\n            <button\n                role="calcBtnMultiply"\n                class="calc-btn btn btn-outline-secondary btn-lg btn-block"\n                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n            >\n                *\n            </button> \n        </div>  \n\n    </div>\n\n    <div class="row">\n\n        <div class="col">\n            <button\n                role="calcBtnOne"\n                class="calc-btn btn btn-outline-secondary btn-lg btn-block"\n                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n            >\n                1\n            </button> \n        </div>  \n        \n        <div class="col">\n            <button\n                role="calcBtnTwo"\n                class="calc-btn btn btn-outline-secondary btn-lg btn-block"\n                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n            >\n                2\n            </button> \n        </div>  \n\n        <div class="col">\n            <button\n                role="calcBtnThree"\n                class="calc-btn btn btn-outline-secondary btn-lg btn-block"\n                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n            >\n                3\n            </button> \n        </div>  \n\n        <div class="col">\n            <button\n                role="calcBtnMinus"\n                class="calc-btn btn btn-outline-secondary btn-lg btn-block"\n                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n            >\n                -\n            </button> \n        </div>  \n\n    </div>\n    \n    <div class="row">\n        <div class="col">\n        </div>\n        <div class="col">\n            <button\n                role="calcBtnZero"\n                class="calc-btn btn btn-outline-secondary btn-lg btn-block"\n                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n            >\n                0\n            </button> \n        </div> \n        <div class="col">\n        </div>\n        <div class="col">\n        </div> \n    \n    </div>\n\n    <div class="row">\n\n        <div class="col">\n            <button\n            role="calcBtnClear"\n            class="calc-btn btn btn-outline-secondary btn-lg btn-block"\n            onclick="window.myLib.buttonToDisplay.clearAll()"\n            >\n                C\n            </button> \n        </div>  \n        \n        <div class="col">\n            <button\n            role="calcBtnEqual"\n            class="calc-btn btn btn-outline-secondary btn-lg btn-block"\n            onclick="window.myLib.buttonToDisplay.doEqual()"\n            >\n                =\n            </button> \n        </div>  \n\n        <div class="col">\n            <button\n                role="calcBtnDecimalPoint"\n                class="calc-btn btn btn-outline-secondary btn-lg btn-block"\n                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n            >\n                .\n            </button> \n        </div>  \n\n        <div class="col">\n            <button\n                role="calcBtnPlus"\n                class="calc-btn btn btn-outline-secondary btn-lg btn-block"\n                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n            >\n                +\n            </button> \n        </div>  \n\n    </div>\n   \n</div>'
            },
            ye = function () {
                return '<div>\n\n    '
                    .concat(he(), '\n\n    <hr />  \n\n    ')
                    .concat(be(), '         \n\n    ')
                    .concat(
                        '<div>\n\n    <hr role="featuresHr" />\n\n    <div role="calcFeaturesForUsers" id="calcFeatures" aria-describedby="tooltip" class="badge badge-primary">\n        Calc\'s features\n    </div>\n    \n    <div role="calcFeaturesForUsers" id="calc-tooltip">\n        - Click on screen for get result\n        <br />    \n        - Keyboard enable\n            <div id="arrow" data-popper-arrow></div>\n        </div>  \n</div>',
                        '\n               \n</div>'
                    )
            },
            ve = new re('#root', {
                template: function () {
                    return '<div class="container">\n\n        '.concat(
                        ye(),
                        '    \n                             \n        \x3c!-- github-corner svg logo-link --\x3e\n        <a href="https://github.com/zloid/test-repositorius/tree/calc-begin" target="_blank" role="githubCorner" class="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>\n        \n    </div>'
                    )
                },
            })
        function me(t) {
            var e = t.getBoundingClientRect()
            return {
                width: e.width,
                height: e.height,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                x: e.left,
                y: e.top,
            }
        }
        function ge(t) {
            if ('[object Window]' !== t.toString()) {
                var e = t.ownerDocument
                return e ? e.defaultView : window
            }
            return t
        }
        function we(t) {
            var e = ge(t)
            return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset }
        }
        function Oe(t) {
            return t instanceof ge(t).Element || t instanceof Element
        }
        function xe(t) {
            return t instanceof ge(t).HTMLElement || t instanceof HTMLElement
        }
        function Ee(t) {
            return t ? (t.nodeName || '').toLowerCase() : null
        }
        function Pe(t) {
            return (Oe(t) ? t.ownerDocument : t.document).documentElement
        }
        function je(t) {
            return me(Pe(t)).left + we(t).scrollLeft
        }
        function De(t, e, n) {
            var r
            void 0 === n && (n = !1)
            var o,
                i,
                a = me(t),
                c = { scrollLeft: 0, scrollTop: 0 },
                u = { x: 0, y: 0 }
            return (
                n ||
                    ('body' !== Ee(e) &&
                        (c =
                            (o = e) !== ge(o) && xe(o)
                                ? {
                                      scrollLeft: (i = o).scrollLeft,
                                      scrollTop: i.scrollTop,
                                  }
                                : we(o)),
                    xe(e)
                        ? (((u = me(e)).x += e.clientLeft),
                          (u.y += e.clientTop))
                        : (r = Pe(e)) && (u.x = je(r))),
                {
                    x: a.left + c.scrollLeft - u.x,
                    y: a.top + c.scrollTop - u.y,
                    width: a.width,
                    height: a.height,
                }
            )
        }
        function Te(t) {
            return {
                x: t.offsetLeft,
                y: t.offsetTop,
                width: t.offsetWidth,
                height: t.offsetHeight,
            }
        }
        function ke(t) {
            return 'html' === Ee(t)
                ? t
                : t.assignedSlot || t.parentNode || t.host || Pe(t)
        }
        function Se(t) {
            return ge(t).getComputedStyle(t)
        }
        function Ae(t, e) {
            void 0 === e && (e = [])
            var n = (function t(e) {
                    if (['html', 'body', '#document'].indexOf(Ee(e)) >= 0)
                        return e.ownerDocument.body
                    if (xe(e)) {
                        var n = Se(e),
                            r = n.overflow,
                            o = n.overflowX,
                            i = n.overflowY
                        if (/auto|scroll|overlay|hidden/.test(r + i + o))
                            return e
                    }
                    return t(ke(e))
                })(t),
                r = 'body' === Ee(n),
                o = ge(n),
                i = r ? [o].concat(o.visualViewport || []) : n,
                a = e.concat(i)
            return r ? a : a.concat(Ae(ke(i)))
        }
        function Ce(t) {
            return ['table', 'td', 'th'].indexOf(Ee(t)) >= 0
        }
        function Le(t) {
            return xe(t) && 'fixed' !== Se(t).position ? t.offsetParent : null
        }
        function Me(t) {
            for (var e = ge(t), n = Le(t); n && Ce(n); ) n = Le(n)
            return n && 'body' === Ee(n) && 'static' === Se(n).position
                ? e
                : n || e
        }
        var Ne = 'top',
            _e = 'bottom',
            Re = 'right',
            Be = 'left',
            Ie = [Ne, _e, Re, Be],
            Fe = Ie.reduce(function (t, e) {
                return t.concat([e + '-start', e + '-end'])
            }, []),
            He = [].concat(Ie, ['auto']).reduce(function (t, e) {
                return t.concat([e, e + '-start', e + '-end'])
            }, []),
            We = [
                'beforeRead',
                'read',
                'afterRead',
                'beforeMain',
                'main',
                'afterMain',
                'beforeWrite',
                'write',
                'afterWrite',
            ]
        function qe(t) {
            var e = new Map(),
                n = new Set(),
                r = []
            return (
                t.forEach(function (t) {
                    e.set(t.name, t)
                }),
                t.forEach(function (t) {
                    n.has(t.name) ||
                        (function t(o) {
                            n.add(o.name),
                                []
                                    .concat(
                                        o.requires || [],
                                        o.requiresIfExists || []
                                    )
                                    .forEach(function (r) {
                                        if (!n.has(r)) {
                                            var o = e.get(r)
                                            o && t(o)
                                        }
                                    }),
                                r.push(o)
                        })(t)
                }),
                r
            )
        }
        var Ue = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
        function $e() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n]
            return !e.some(function (t) {
                return !(t && 'function' == typeof t.getBoundingClientRect)
            })
        }
        function ze(t) {
            void 0 === t && (t = {})
            var e = t,
                n = e.defaultModifiers,
                r = void 0 === n ? [] : n,
                o = e.defaultOptions,
                i = void 0 === o ? Ue : o
            return function (t, e, n) {
                void 0 === n && (n = i)
                var o,
                    a,
                    c = {
                        placement: 'bottom',
                        orderedModifiers: [],
                        options: Object.assign({}, Ue, {}, i),
                        modifiersData: {},
                        elements: { reference: t, popper: e },
                        attributes: {},
                        styles: {},
                    },
                    u = [],
                    s = !1,
                    l = {
                        state: c,
                        setOptions: function (n) {
                            f(),
                                (c.options = Object.assign(
                                    {},
                                    i,
                                    {},
                                    c.options,
                                    {},
                                    n
                                )),
                                (c.scrollParents = {
                                    reference: Oe(t)
                                        ? Ae(t)
                                        : t.contextElement
                                        ? Ae(t.contextElement)
                                        : [],
                                    popper: Ae(e),
                                })
                            var o = (function (t) {
                                var e = qe(t)
                                return We.reduce(function (t, n) {
                                    return t.concat(
                                        e.filter(function (t) {
                                            return t.phase === n
                                        })
                                    )
                                }, [])
                            })(
                                (function (t) {
                                    var e = t.reduce(function (t, e) {
                                        var n = t[e.name]
                                        return (
                                            (t[e.name] = n
                                                ? Object.assign({}, n, {}, e, {
                                                      options: Object.assign(
                                                          {},
                                                          n.options,
                                                          {},
                                                          e.options
                                                      ),
                                                      data: Object.assign(
                                                          {},
                                                          n.data,
                                                          {},
                                                          e.data
                                                      ),
                                                  })
                                                : e),
                                            t
                                        )
                                    }, {})
                                    return Object.keys(e).map(function (t) {
                                        return e[t]
                                    })
                                })([].concat(r, c.options.modifiers))
                            )
                            return (
                                (c.orderedModifiers = o.filter(function (t) {
                                    return t.enabled
                                })),
                                c.orderedModifiers.forEach(function (t) {
                                    var e = t.name,
                                        n = t.options,
                                        r = void 0 === n ? {} : n,
                                        o = t.effect
                                    if ('function' == typeof o) {
                                        var i = o({
                                            state: c,
                                            name: e,
                                            instance: l,
                                            options: r,
                                        })
                                        u.push(i || function () {})
                                    }
                                }),
                                l.update()
                            )
                        },
                        forceUpdate: function () {
                            if (!s) {
                                var t = c.elements,
                                    e = t.reference,
                                    n = t.popper
                                if ($e(e, n)) {
                                    ;(c.rects = {
                                        reference: De(
                                            e,
                                            Me(n),
                                            'fixed' === c.options.strategy
                                        ),
                                        popper: Te(n),
                                    }),
                                        (c.reset = !1),
                                        (c.placement = c.options.placement),
                                        c.orderedModifiers.forEach(function (
                                            t
                                        ) {
                                            return (c.modifiersData[
                                                t.name
                                            ] = Object.assign({}, t.data))
                                        })
                                    for (
                                        var r = 0;
                                        r < c.orderedModifiers.length;
                                        r++
                                    )
                                        if (!0 !== c.reset) {
                                            var o = c.orderedModifiers[r],
                                                i = o.fn,
                                                a = o.options,
                                                u = void 0 === a ? {} : a,
                                                f = o.name
                                            'function' == typeof i &&
                                                (c =
                                                    i({
                                                        state: c,
                                                        options: u,
                                                        name: f,
                                                        instance: l,
                                                    }) || c)
                                        } else (c.reset = !1), (r = -1)
                                }
                            }
                        },
                        update:
                            ((o = function () {
                                return new Promise(function (t) {
                                    l.forceUpdate(), t(c)
                                })
                            }),
                            function () {
                                return (
                                    a ||
                                        (a = new Promise(function (t) {
                                            Promise.resolve().then(function () {
                                                ;(a = void 0), t(o())
                                            })
                                        })),
                                    a
                                )
                            }),
                        destroy: function () {
                            f(), (s = !0)
                        },
                    }
                if (!$e(t, e)) return l
                function f() {
                    u.forEach(function (t) {
                        return t()
                    }),
                        (u = [])
                }
                return (
                    l.setOptions(n).then(function (t) {
                        !s && n.onFirstUpdate && n.onFirstUpdate(t)
                    }),
                    l
                )
            }
        }
        var Ke = { passive: !0 }
        function Ve(t) {
            return t.split('-')[0]
        }
        function Ye(t) {
            return t.split('-')[1]
        }
        function Xe(t) {
            return ['top', 'bottom'].indexOf(t) >= 0 ? 'x' : 'y'
        }
        function Ze(t) {
            var e,
                n = t.reference,
                r = t.element,
                o = t.placement,
                i = o ? Ve(o) : null,
                a = o ? Ye(o) : null,
                c = n.x + n.width / 2 - r.width / 2,
                u = n.y + n.height / 2 - r.height / 2
            switch (i) {
                case Ne:
                    e = { x: c, y: n.y - r.height }
                    break
                case _e:
                    e = { x: c, y: n.y + n.height }
                    break
                case Re:
                    e = { x: n.x + n.width, y: u }
                    break
                case Be:
                    e = { x: n.x - r.width, y: u }
                    break
                default:
                    e = { x: n.x, y: n.y }
            }
            var s = i ? Xe(i) : null
            if (null != s) {
                var l = 'y' === s ? 'height' : 'width'
                switch (a) {
                    case 'start':
                        e[s] =
                            Math.floor(e[s]) - Math.floor(n[l] / 2 - r[l] / 2)
                        break
                    case 'end':
                        e[s] = Math.floor(e[s]) + Math.ceil(n[l] / 2 - r[l] / 2)
                }
            }
            return e
        }
        var Ge = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
        function Je(t) {
            var e,
                n = t.popper,
                r = t.popperRect,
                o = t.placement,
                i = t.offsets,
                a = t.position,
                c = t.gpuAcceleration,
                u = t.adaptive,
                s = (function (t) {
                    var e = t.x,
                        n = t.y,
                        r = window.devicePixelRatio || 1
                    return {
                        x: Math.round(e * r) / r || 0,
                        y: Math.round(n * r) / r || 0,
                    }
                })(i),
                l = s.x,
                f = s.y,
                d = i.hasOwnProperty('x'),
                p = i.hasOwnProperty('y'),
                h = Be,
                b = Ne,
                y = window
            if (u) {
                var v = Me(n)
                v === ge(n) && (v = Pe(n)),
                    o === Ne &&
                        ((b = _e),
                        (f -= v.clientHeight - r.height),
                        (f *= c ? 1 : -1)),
                    o === Be &&
                        ((h = Re),
                        (l -= v.clientWidth - r.width),
                        (l *= c ? 1 : -1))
            }
            var m,
                g = Object.assign({ position: a }, u && Ge)
            return c
                ? Object.assign(
                      {},
                      g,
                      (((m = {})[b] = p ? '0' : ''),
                      (m[h] = d ? '0' : ''),
                      (m.transform =
                          (y.devicePixelRatio || 1) < 2
                              ? 'translate(' + l + 'px, ' + f + 'px)'
                              : 'translate3d(' + l + 'px, ' + f + 'px, 0)'),
                      m)
                  )
                : Object.assign(
                      {},
                      g,
                      (((e = {})[b] = p ? f + 'px' : ''),
                      (e[h] = d ? l + 'px' : ''),
                      (e.transform = ''),
                      e)
                  )
        }
        var Qe = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
        function tn(t) {
            return t.replace(/left|right|bottom|top/g, function (t) {
                return Qe[t]
            })
        }
        var en = { start: 'end', end: 'start' }
        function nn(t) {
            return t.replace(/start|end/g, function (t) {
                return en[t]
            })
        }
        function rn(t) {
            return parseFloat(t) || 0
        }
        function on(t) {
            var e = ge(t),
                n = (function (t) {
                    var e = xe(t) ? Se(t) : {}
                    return {
                        top: rn(e.borderTopWidth),
                        right: rn(e.borderRightWidth),
                        bottom: rn(e.borderBottomWidth),
                        left: rn(e.borderLeftWidth),
                    }
                })(t),
                r = 'html' === Ee(t),
                o = je(t),
                i = t.clientWidth + n.right,
                a = t.clientHeight + n.bottom
            return (
                r &&
                    e.innerHeight - t.clientHeight > 50 &&
                    (a = e.innerHeight - n.bottom),
                {
                    top: r ? 0 : t.clientTop,
                    right:
                        t.clientLeft > n.left
                            ? n.right
                            : r
                            ? e.innerWidth - i - o
                            : t.offsetWidth - i,
                    bottom: r ? e.innerHeight - a : t.offsetHeight - a,
                    left: r ? o : t.clientLeft,
                }
            )
        }
        function an(t, e) {
            var n = Boolean(e.getRootNode && e.getRootNode().host)
            if (t.contains(e)) return !0
            if (n) {
                var r = e
                do {
                    if (r && t.isSameNode(r)) return !0
                    r = r.parentNode || r.host
                } while (r)
            }
            return !1
        }
        function cn(t) {
            return Object.assign({}, t, {
                left: t.x,
                top: t.y,
                right: t.x + t.width,
                bottom: t.y + t.height,
            })
        }
        function un(t, e) {
            return 'viewport' === e
                ? cn(
                      (function (t) {
                          var e = ge(t),
                              n = e.visualViewport,
                              r = e.innerWidth,
                              o = e.innerHeight
                          return (
                              n &&
                                  /iPhone|iPod|iPad/.test(navigator.platform) &&
                                  ((r = n.width), (o = n.height)),
                              { width: r, height: o, x: 0, y: 0 }
                          )
                      })(t)
                  )
                : xe(e)
                ? me(e)
                : cn(
                      (function (t) {
                          var e = ge(t),
                              n = we(t),
                              r = De(Pe(t), e)
                          return (
                              (r.height = Math.max(r.height, e.innerHeight)),
                              (r.width = Math.max(r.width, e.innerWidth)),
                              (r.x = -n.scrollLeft),
                              (r.y = -n.scrollTop),
                              r
                          )
                      })(Pe(t))
                  )
        }
        function sn(t, e, n) {
            var r =
                    'clippingParents' === e
                        ? (function (t) {
                              var e = Ae(t),
                                  n =
                                      ['absolute', 'fixed'].indexOf(
                                          Se(t).position
                                      ) >= 0 && xe(t)
                                          ? Me(t)
                                          : t
                              return Oe(n)
                                  ? e.filter(function (t) {
                                        return Oe(t) && an(t, n)
                                    })
                                  : []
                          })(t)
                        : [].concat(e),
                o = [].concat(r, [n]),
                i = o[0],
                a = o.reduce(function (e, n) {
                    var r = un(t, n),
                        o = on(xe(n) ? n : Pe(t))
                    return (
                        (e.top = Math.max(r.top + o.top, e.top)),
                        (e.right = Math.min(r.right - o.right, e.right)),
                        (e.bottom = Math.min(r.bottom - o.bottom, e.bottom)),
                        (e.left = Math.max(r.left + o.left, e.left)),
                        e
                    )
                }, un(t, i))
            return (
                (a.width = a.right - a.left),
                (a.height = a.bottom - a.top),
                (a.x = a.left),
                (a.y = a.top),
                a
            )
        }
        function ln(t) {
            return Object.assign(
                {},
                { top: 0, right: 0, bottom: 0, left: 0 },
                {},
                t
            )
        }
        function fn(t, e) {
            return e.reduce(function (e, n) {
                return (e[n] = t), e
            }, {})
        }
        function dn(t, e) {
            void 0 === e && (e = {})
            var n = e,
                r = n.placement,
                o = void 0 === r ? t.placement : r,
                i = n.boundary,
                a = void 0 === i ? 'clippingParents' : i,
                c = n.rootBoundary,
                u = void 0 === c ? 'viewport' : c,
                s = n.elementContext,
                l = void 0 === s ? 'popper' : s,
                f = n.altBoundary,
                d = void 0 !== f && f,
                p = n.padding,
                h = void 0 === p ? 0 : p,
                b = ln('number' != typeof h ? h : fn(h, Ie)),
                y = 'popper' === l ? 'reference' : 'popper',
                v = t.elements.reference,
                m = t.rects.popper,
                g = t.elements[d ? y : l],
                w = sn(
                    Oe(g) ? g : g.contextElement || Pe(t.elements.popper),
                    a,
                    u
                ),
                O = me(v),
                x = Ze({
                    reference: O,
                    element: m,
                    strategy: 'absolute',
                    placement: o,
                }),
                E = cn(Object.assign({}, m, {}, x)),
                P = 'popper' === l ? E : O,
                j = {
                    top: w.top - P.top + b.top,
                    bottom: P.bottom - w.bottom + b.bottom,
                    left: w.left - P.left + b.left,
                    right: P.right - w.right + b.right,
                },
                D = t.modifiersData.offset
            if ('popper' === l && D) {
                var T = D[o]
                Object.keys(j).forEach(function (t) {
                    var e = [Re, _e].indexOf(t) >= 0 ? 1 : -1,
                        n = [Ne, _e].indexOf(t) >= 0 ? 'y' : 'x'
                    j[t] += T[n] * e
                })
            }
            return j
        }
        function pn(t, e, n) {
            return Math.max(t, Math.min(e, n))
        }
        function hn(t, e, n) {
            return (
                void 0 === n && (n = { x: 0, y: 0 }),
                {
                    top: t.top - e.height - n.y,
                    right: t.right - e.width + n.x,
                    bottom: t.bottom - e.height + n.y,
                    left: t.left - e.width - n.x,
                }
            )
        }
        function bn(t) {
            return [Ne, Re, _e, Be].some(function (e) {
                return t[e] >= 0
            })
        }
        var yn = ze({
                defaultModifiers: [
                    {
                        name: 'eventListeners',
                        enabled: !0,
                        phase: 'write',
                        fn: function () {},
                        effect: function (t) {
                            var e = t.state,
                                n = t.instance,
                                r = t.options,
                                o = r.scroll,
                                i = void 0 === o || o,
                                a = r.resize,
                                c = void 0 === a || a,
                                u = ge(e.elements.popper),
                                s = [].concat(
                                    e.scrollParents.reference,
                                    e.scrollParents.popper
                                )
                            return (
                                i &&
                                    s.forEach(function (t) {
                                        t.addEventListener(
                                            'scroll',
                                            n.update,
                                            Ke
                                        )
                                    }),
                                c && u.addEventListener('resize', n.update, Ke),
                                function () {
                                    i &&
                                        s.forEach(function (t) {
                                            t.removeEventListener(
                                                'scroll',
                                                n.update,
                                                Ke
                                            )
                                        }),
                                        c &&
                                            u.removeEventListener(
                                                'resize',
                                                n.update,
                                                Ke
                                            )
                                }
                            )
                        },
                        data: {},
                    },
                    {
                        name: 'popperOffsets',
                        enabled: !0,
                        phase: 'read',
                        fn: function (t) {
                            var e = t.state,
                                n = t.name
                            e.modifiersData[n] = Ze({
                                reference: e.rects.reference,
                                element: e.rects.popper,
                                strategy: 'absolute',
                                placement: e.placement,
                            })
                        },
                        data: {},
                    },
                    {
                        name: 'computeStyles',
                        enabled: !0,
                        phase: 'beforeWrite',
                        fn: function (t) {
                            var e = t.state,
                                n = t.options,
                                r = n.gpuAcceleration,
                                o = void 0 === r || r,
                                i = n.adaptive,
                                a = void 0 === i || i,
                                c = {
                                    placement: Ve(e.placement),
                                    popper: e.elements.popper,
                                    popperRect: e.rects.popper,
                                    gpuAcceleration: o,
                                }
                            null != e.modifiersData.popperOffsets &&
                                (e.styles.popper = Object.assign(
                                    {},
                                    e.styles.popper,
                                    {},
                                    Je(
                                        Object.assign({}, c, {
                                            offsets:
                                                e.modifiersData.popperOffsets,
                                            position: e.options.strategy,
                                            adaptive: a,
                                        })
                                    )
                                )),
                                null != e.modifiersData.arrow &&
                                    (e.styles.arrow = Object.assign(
                                        {},
                                        e.styles.arrow,
                                        {},
                                        Je(
                                            Object.assign({}, c, {
                                                offsets: e.modifiersData.arrow,
                                                position: 'absolute',
                                                adaptive: !1,
                                            })
                                        )
                                    )),
                                (e.attributes.popper = Object.assign(
                                    {},
                                    e.attributes.popper,
                                    { 'data-popper-placement': e.placement }
                                ))
                        },
                        data: {},
                    },
                    {
                        name: 'applyStyles',
                        enabled: !0,
                        phase: 'write',
                        fn: function (t) {
                            var e = t.state
                            Object.keys(e.elements).forEach(function (t) {
                                var n = e.styles[t] || {},
                                    r = e.attributes[t] || {},
                                    o = e.elements[t]
                                xe(o) &&
                                    Ee(o) &&
                                    (Object.assign(o.style, n),
                                    Object.keys(r).forEach(function (t) {
                                        var e = r[t]
                                        !1 === e
                                            ? o.removeAttribute(t)
                                            : o.setAttribute(
                                                  t,
                                                  !0 === e ? '' : e
                                              )
                                    }))
                            })
                        },
                        effect: function (t) {
                            var e = t.state,
                                n = {
                                    popper: {
                                        position: e.options.strategy,
                                        left: '0',
                                        top: '0',
                                        margin: '0',
                                    },
                                    arrow: { position: 'absolute' },
                                    reference: {},
                                }
                            return (
                                Object.assign(
                                    e.elements.popper.style,
                                    n.popper
                                ),
                                e.elements.arrow &&
                                    Object.assign(
                                        e.elements.arrow.style,
                                        n.arrow
                                    ),
                                function () {
                                    Object.keys(e.elements).forEach(function (
                                        t
                                    ) {
                                        var r = e.elements[t],
                                            o = e.attributes[t] || {},
                                            i = Object.keys(
                                                e.styles.hasOwnProperty(t)
                                                    ? e.styles[t]
                                                    : n[t]
                                            ).reduce(function (t, e) {
                                                return (t[e] = ''), t
                                            }, {})
                                        xe(r) &&
                                            Ee(r) &&
                                            (Object.assign(r.style, i),
                                            Object.keys(o).forEach(function (
                                                t
                                            ) {
                                                r.removeAttribute(t)
                                            }))
                                    })
                                }
                            )
                        },
                        requires: ['computeStyles'],
                    },
                    {
                        name: 'offset',
                        enabled: !0,
                        phase: 'main',
                        requires: ['popperOffsets'],
                        fn: function (t) {
                            var e = t.state,
                                n = t.options,
                                r = t.name,
                                o = n.offset,
                                i = void 0 === o ? [0, 0] : o,
                                a = He.reduce(function (t, n) {
                                    return (
                                        (t[n] = (function (t, e, n) {
                                            var r = Ve(t),
                                                o =
                                                    [Be, Ne].indexOf(r) >= 0
                                                        ? -1
                                                        : 1,
                                                i =
                                                    'function' == typeof n
                                                        ? n(
                                                              Object.assign(
                                                                  {},
                                                                  e,
                                                                  {
                                                                      placement: t,
                                                                  }
                                                              )
                                                          )
                                                        : n,
                                                a = i[0],
                                                c = i[1]
                                            return (
                                                (a = a || 0),
                                                (c = (c || 0) * o),
                                                [Be, Re].indexOf(r) >= 0
                                                    ? { x: c, y: a }
                                                    : { x: a, y: c }
                                            )
                                        })(n, e.rects, i)),
                                        t
                                    )
                                }, {}),
                                c = a[e.placement],
                                u = c.x,
                                s = c.y
                            null != e.modifiersData.popperOffsets &&
                                ((e.modifiersData.popperOffsets.x += u),
                                (e.modifiersData.popperOffsets.y += s)),
                                (e.modifiersData[r] = a)
                        },
                    },
                    {
                        name: 'flip',
                        enabled: !0,
                        phase: 'main',
                        fn: function (t) {
                            var e = t.state,
                                n = t.options,
                                r = t.name
                            if (!e.modifiersData[r]._skip) {
                                for (
                                    var o = n.fallbackPlacements,
                                        i = n.padding,
                                        a = n.boundary,
                                        c = n.rootBoundary,
                                        u = n.altBoundary,
                                        s = n.flipVariations,
                                        l = void 0 === s || s,
                                        f = n.allowedAutoPlacements,
                                        d = e.options.placement,
                                        p = Ve(d),
                                        h =
                                            o ||
                                            (p === d || !l
                                                ? [tn(d)]
                                                : (function (t) {
                                                      if ('auto' === Ve(t))
                                                          return []
                                                      var e = tn(t)
                                                      return [nn(t), e, nn(e)]
                                                  })(d)),
                                        b = [d]
                                            .concat(h)
                                            .reduce(function (t, n) {
                                                return t.concat(
                                                    'auto' === Ve(n)
                                                        ? (function (t, e) {
                                                              void 0 === e &&
                                                                  (e = {})
                                                              var n = e,
                                                                  r =
                                                                      n.placement,
                                                                  o =
                                                                      n.boundary,
                                                                  i =
                                                                      n.rootBoundary,
                                                                  a = n.padding,
                                                                  c =
                                                                      n.flipVariations,
                                                                  u =
                                                                      n.allowedAutoPlacements,
                                                                  s =
                                                                      void 0 ===
                                                                      u
                                                                          ? He
                                                                          : u,
                                                                  l = Ye(r),
                                                                  f = (l
                                                                      ? c
                                                                          ? Fe
                                                                          : Fe.filter(
                                                                                function (
                                                                                    t
                                                                                ) {
                                                                                    return (
                                                                                        Ye(
                                                                                            t
                                                                                        ) ===
                                                                                        l
                                                                                    )
                                                                                }
                                                                            )
                                                                      : Ie
                                                                  )
                                                                      .filter(
                                                                          function (
                                                                              t
                                                                          ) {
                                                                              return (
                                                                                  s.indexOf(
                                                                                      t
                                                                                  ) >=
                                                                                  0
                                                                              )
                                                                          }
                                                                      )
                                                                      .reduce(
                                                                          function (
                                                                              e,
                                                                              n
                                                                          ) {
                                                                              return (
                                                                                  (e[
                                                                                      n
                                                                                  ] = dn(
                                                                                      t,
                                                                                      {
                                                                                          placement: n,
                                                                                          boundary: o,
                                                                                          rootBoundary: i,
                                                                                          padding: a,
                                                                                      }
                                                                                  )[
                                                                                      Ve(
                                                                                          n
                                                                                      )
                                                                                  ]),
                                                                                  e
                                                                              )
                                                                          },
                                                                          {}
                                                                      )
                                                              return Object.keys(
                                                                  f
                                                              ).sort(function (
                                                                  t,
                                                                  e
                                                              ) {
                                                                  return (
                                                                      f[t] -
                                                                      f[e]
                                                                  )
                                                              })
                                                          })(e, {
                                                              placement: n,
                                                              boundary: a,
                                                              rootBoundary: c,
                                                              padding: i,
                                                              flipVariations: l,
                                                              allowedAutoPlacements: f,
                                                          })
                                                        : n
                                                )
                                            }, []),
                                        y = e.rects.reference,
                                        v = e.rects.popper,
                                        m = new Map(),
                                        g = !0,
                                        w = b[0],
                                        O = 0;
                                    O < b.length;
                                    O++
                                ) {
                                    var x = b[O],
                                        E = Ve(x),
                                        P = 'start' === Ye(x),
                                        j = [Ne, _e].indexOf(E) >= 0,
                                        D = j ? 'width' : 'height',
                                        T = dn(e, {
                                            placement: x,
                                            boundary: a,
                                            rootBoundary: c,
                                            altBoundary: u,
                                            padding: i,
                                        }),
                                        k = j ? (P ? Re : Be) : P ? _e : Ne
                                    y[D] > v[D] && (k = tn(k))
                                    var S = tn(k),
                                        A = [T[E] <= 0, T[k] <= 0, T[S] <= 0]
                                    if (
                                        A.every(function (t) {
                                            return t
                                        })
                                    ) {
                                        ;(w = x), (g = !1)
                                        break
                                    }
                                    m.set(x, A)
                                }
                                if (g)
                                    for (
                                        var C = function (t) {
                                                var e = b.find(function (e) {
                                                    var n = m.get(e)
                                                    if (n)
                                                        return n
                                                            .slice(0, t)
                                                            .every(function (
                                                                t
                                                            ) {
                                                                return t
                                                            })
                                                })
                                                if (e) return (w = e), 'break'
                                            },
                                            L = l ? 3 : 1;
                                        L > 0;
                                        L--
                                    ) {
                                        if ('break' === C(L)) break
                                    }
                                e.placement !== w &&
                                    ((e.modifiersData[r]._skip = !0),
                                    (e.placement = w),
                                    (e.reset = !0))
                            }
                        },
                        requiresIfExists: ['offset'],
                        data: { _skip: !1 },
                    },
                    {
                        name: 'preventOverflow',
                        enabled: !0,
                        phase: 'main',
                        fn: function (t) {
                            var e = t.state,
                                n = t.options,
                                r = t.name,
                                o = n.mainAxis,
                                i = void 0 === o || o,
                                a = n.altAxis,
                                c = void 0 !== a && a,
                                u = n.boundary,
                                s = n.rootBoundary,
                                l = n.altBoundary,
                                f = n.padding,
                                d = n.tether,
                                p = void 0 === d || d,
                                h = n.tetherOffset,
                                b = void 0 === h ? 0 : h,
                                y = dn(e, {
                                    boundary: u,
                                    rootBoundary: s,
                                    padding: f,
                                    altBoundary: l,
                                }),
                                v = Ve(e.placement),
                                m = Ye(e.placement),
                                g = !m,
                                w = Xe(v),
                                O = 'x' === w ? 'y' : 'x',
                                x = e.modifiersData.popperOffsets,
                                E = e.rects.reference,
                                P = e.rects.popper,
                                j =
                                    'function' == typeof b
                                        ? b(
                                              Object.assign({}, e.rects, {
                                                  placement: e.placement,
                                              })
                                          )
                                        : b,
                                D = { x: 0, y: 0 }
                            if (x) {
                                if (i) {
                                    var T = 'y' === w ? Ne : Be,
                                        k = 'y' === w ? _e : Re,
                                        S = 'y' === w ? 'height' : 'width',
                                        A = x[w],
                                        C = x[w] + y[T],
                                        L = x[w] - y[k],
                                        M = p ? -P[S] / 2 : 0,
                                        N = 'start' === m ? E[S] : P[S],
                                        _ = 'start' === m ? -P[S] : -E[S],
                                        R = e.elements.arrow,
                                        B =
                                            p && R
                                                ? Te(R)
                                                : { width: 0, height: 0 },
                                        I = e.modifiersData['arrow#persistent']
                                            ? e.modifiersData[
                                                  'arrow#persistent'
                                              ].padding
                                            : {
                                                  top: 0,
                                                  right: 0,
                                                  bottom: 0,
                                                  left: 0,
                                              },
                                        F = I[T],
                                        H = I[k],
                                        W = pn(0, E[S], B[S]),
                                        q = g
                                            ? E[S] / 2 - M - W - F - j
                                            : N - W - F - j,
                                        U = g
                                            ? -E[S] / 2 + M + W + H + j
                                            : _ + W + H + j,
                                        $ =
                                            e.elements.arrow &&
                                            Me(e.elements.arrow),
                                        z = $
                                            ? 'y' === w
                                                ? $.clientTop || 0
                                                : $.clientLeft || 0
                                            : 0,
                                        K = e.modifiersData.offset
                                            ? e.modifiersData.offset[
                                                  e.placement
                                              ][w]
                                            : 0,
                                        V = x[w] + q - K - z,
                                        Y = x[w] + U - K,
                                        X = pn(
                                            p ? Math.min(C, V) : C,
                                            A,
                                            p ? Math.max(L, Y) : L
                                        )
                                    ;(x[w] = X), (D[w] = X - A)
                                }
                                if (c) {
                                    var Z = 'x' === w ? Ne : Be,
                                        G = 'x' === w ? _e : Re,
                                        J = x[O],
                                        Q = pn(J + y[Z], J, J - y[G])
                                    ;(x[O] = Q), (D[O] = Q - J)
                                }
                                e.modifiersData[r] = D
                            }
                        },
                        requiresIfExists: ['offset'],
                    },
                    {
                        name: 'arrow',
                        enabled: !0,
                        phase: 'main',
                        fn: function (t) {
                            var e,
                                n = t.state,
                                r = t.name,
                                o = n.elements.arrow,
                                i = n.modifiersData.popperOffsets,
                                a = Ve(n.placement),
                                c = Xe(a),
                                u =
                                    [Be, Re].indexOf(a) >= 0
                                        ? 'height'
                                        : 'width'
                            if (o && i) {
                                var s =
                                        n.modifiersData[r + '#persistent']
                                            .padding,
                                    l = Te(o),
                                    f = 'y' === c ? Ne : Be,
                                    d = 'y' === c ? _e : Re,
                                    p =
                                        n.rects.reference[u] +
                                        n.rects.reference[c] -
                                        i[c] -
                                        n.rects.popper[u],
                                    h = i[c] - n.rects.reference[c],
                                    b =
                                        n.elements.arrow &&
                                        Me(n.elements.arrow),
                                    y = b
                                        ? 'y' === c
                                            ? b.clientHeight || 0
                                            : b.clientWidth || 0
                                        : 0,
                                    v = p / 2 - h / 2,
                                    m = s[f],
                                    g = y - l[u] - s[d],
                                    w = y / 2 - l[u] / 2 + v,
                                    O = pn(m, w, g),
                                    x = c
                                n.modifiersData[r] =
                                    (((e = {})[x] = O),
                                    (e.centerOffset = O - w),
                                    e)
                            }
                        },
                        effect: function (t) {
                            var e = t.state,
                                n = t.options,
                                r = t.name,
                                o = n.element,
                                i = void 0 === o ? '[data-popper-arrow]' : o,
                                a = n.padding,
                                c = void 0 === a ? 0 : a
                            null != i &&
                                ('string' != typeof i ||
                                    (i = e.elements.popper.querySelector(i))) &&
                                an(e.elements.popper, i) &&
                                ((e.elements.arrow = i),
                                (e.modifiersData[r + '#persistent'] = {
                                    padding: ln(
                                        'number' != typeof c ? c : fn(c, Ie)
                                    ),
                                }))
                        },
                        requires: ['popperOffsets'],
                        requiresIfExists: ['preventOverflow'],
                    },
                    {
                        name: 'hide',
                        enabled: !0,
                        phase: 'main',
                        requiresIfExists: ['preventOverflow'],
                        fn: function (t) {
                            var e = t.state,
                                n = t.name,
                                r = e.rects.reference,
                                o = e.rects.popper,
                                i = e.modifiersData.preventOverflow,
                                a = dn(e, { elementContext: 'reference' }),
                                c = dn(e, { altBoundary: !0 }),
                                u = hn(a, r),
                                s = hn(c, o, i),
                                l = bn(u),
                                f = bn(s)
                            ;(e.modifiersData[n] = {
                                referenceClippingOffsets: u,
                                popperEscapeOffsets: s,
                                isReferenceHidden: l,
                                hasPopperEscaped: f,
                            }),
                                (e.attributes.popper = Object.assign(
                                    {},
                                    e.attributes.popper,
                                    {
                                        'data-popper-reference-hidden': l,
                                        'data-popper-escaped': f,
                                    }
                                ))
                        },
                    },
                ],
            }),
            vn = function () {
                var t = document.getElementById('calcFeatures'),
                    e = document.getElementById('calc-tooltip'),
                    n = null
                function r() {
                    e.setAttribute('data-show', ''),
                        (n = yn(t, e, {
                            placement: 'bottom',
                            modifiers: [
                                { name: 'offset', options: { offset: [0, 8] } },
                            ],
                        }))
                }
                function o() {
                    e.removeAttribute('data-show'),
                        n && (n.destroy(), (n = null))
                }
                ;['mouseenter', 'focus'].forEach(function (e) {
                    t.addEventListener(e, r)
                }),
                    ['mouseleave', 'blur'].forEach(function (e) {
                        t.addEventListener(e, o)
                    })
            },
            mn = function () {
                document.addEventListener(
                    'keydown',
                    function (t) {
                        if (!t.defaultPrevented && !/f[0-9]/gi.test(t.key)) {
                            switch (!0) {
                                case /[0-9|+|\-|/|\*|\.|\,]/.test(t.key):
                                    window.myLib.buttonToDisplay.btnToDspl(
                                        t.key
                                    )
                                    break
                                case /enter/gi.test(t.key):
                                    window.myLib.buttonToDisplay.doEqual()
                                    break
                                case /delete|backspace/gi.test(t.key):
                                    window.myLib.buttonToDisplay.clearAll()
                                    break
                                default:
                                    return
                            }
                            t.preventDefault()
                        }
                    },
                    !0
                ),
                    vn()
            }
        n(4), n(5)
        ;(document.body.innerHTML = '<div id="root"></div>'),
            ve.render(),
            mn(),
            console.log(
                'store.modernReducer.foo::: ',
                zt.getState().modernReducer.foo
            ),
            zt.subscribe(function () {
                ve.render()
            })
    },
])
