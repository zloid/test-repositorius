!(function (r) {
    var n = {}
    function t(e) {
        if (n[e]) return n[e].exports
        var o = (n[e] = { i: e, l: !1, exports: {} })
        return r[e].call(o.exports, o, o.exports, t), (o.l = !0), o.exports
    }
    ;(t.m = r),
        (t.c = n),
        (t.d = function (r, n, e) {
            t.o(r, n) || Object.defineProperty(r, n, { enumerable: !0, get: e })
        }),
        (t.r = function (r) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(r, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(r, '__esModule', { value: !0 })
        }),
        (t.t = function (r, n) {
            if ((1 & n && (r = t(r)), 8 & n)) return r
            if (4 & n && 'object' == typeof r && r && r.__esModule) return r
            var e = Object.create(null)
            if (
                (t.r(e),
                Object.defineProperty(e, 'default', {
                    enumerable: !0,
                    value: r,
                }),
                2 & n && 'string' != typeof r)
            )
                for (var o in r)
                    t.d(
                        e,
                        o,
                        function (n) {
                            return r[n]
                        }.bind(null, o)
                    )
            return e
        }),
        (t.n = function (r) {
            var n =
                r && r.__esModule
                    ? function () {
                          return r.default
                      }
                    : function () {
                          return r
                      }
            return t.d(n, 'a', n), n
        }),
        (t.o = function (r, n) {
            return Object.prototype.hasOwnProperty.call(r, n)
        }),
        (t.p = ''),
        t((t.s = 10))
})([
    function (r, n, t) {
        'use strict'
        ;(function (r, e) {
            var o,
                a = t(3)
            o =
                'undefined' != typeof self
                    ? self
                    : 'undefined' != typeof window
                    ? window
                    : void 0 !== r
                    ? r
                    : e
            var i = Object(a.a)(o)
            n.a = i
        }.call(this, t(4), t(5)(r)))
    },
    function (r, n, t) {
        'use strict'
        var e,
            o = function () {
                return (
                    void 0 === e &&
                        (e = Boolean(
                            window && document && document.all && !window.atob
                        )),
                    e
                )
            },
            a = (function () {
                var r = {}
                return function (n) {
                    if (void 0 === r[n]) {
                        var t = document.querySelector(n)
                        if (
                            window.HTMLIFrameElement &&
                            t instanceof window.HTMLIFrameElement
                        )
                            try {
                                t = t.contentDocument.head
                            } catch (r) {
                                t = null
                            }
                        r[n] = t
                    }
                    return r[n]
                }
            })(),
            i = []
        function l(r) {
            for (var n = -1, t = 0; t < i.length; t++)
                if (i[t].identifier === r) {
                    n = t
                    break
                }
            return n
        }
        function m(r, n) {
            for (var t = {}, e = [], o = 0; o < r.length; o++) {
                var a = r[o],
                    m = n.base ? a[0] + n.base : a[0],
                    d = t[m] || 0,
                    c = ''.concat(m, ' ').concat(d)
                t[m] = d + 1
                var s = l(c),
                    p = { css: a[1], media: a[2], sourceMap: a[3] }
                ;-1 !== s
                    ? (i[s].references++, i[s].updater(p))
                    : i.push({
                          identifier: c,
                          updater: u(p, n),
                          references: 1,
                      }),
                    e.push(c)
            }
            return e
        }
        function d(r) {
            var n = document.createElement('style'),
                e = r.attributes || {}
            if (void 0 === e.nonce) {
                var o = t.nc
                o && (e.nonce = o)
            }
            if (
                (Object.keys(e).forEach(function (r) {
                    n.setAttribute(r, e[r])
                }),
                'function' == typeof r.insert)
            )
                r.insert(n)
            else {
                var i = a(r.insert || 'head')
                if (!i)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    )
                i.appendChild(n)
            }
            return n
        }
        var c,
            s =
                ((c = []),
                function (r, n) {
                    return (c[r] = n), c.filter(Boolean).join('\n')
                })
        function p(r, n, t, e) {
            var o = t
                ? ''
                : e.media
                ? '@media '.concat(e.media, ' {').concat(e.css, '}')
                : e.css
            if (r.styleSheet) r.styleSheet.cssText = s(n, o)
            else {
                var a = document.createTextNode(o),
                    i = r.childNodes
                i[n] && r.removeChild(i[n]),
                    i.length ? r.insertBefore(a, i[n]) : r.appendChild(a)
            }
        }
        function f(r, n, t) {
            var e = t.css,
                o = t.media,
                a = t.sourceMap
            if (
                (o ? r.setAttribute('media', o) : r.removeAttribute('media'),
                a &&
                    btoa &&
                    (e += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                        ' */'
                    )),
                r.styleSheet)
            )
                r.styleSheet.cssText = e
            else {
                for (; r.firstChild; ) r.removeChild(r.firstChild)
                r.appendChild(document.createTextNode(e))
            }
        }
        var b = null,
            g = 0
        function u(r, n) {
            var t, e, o
            if (n.singleton) {
                var a = g++
                ;(t = b || (b = d(n))),
                    (e = p.bind(null, t, a, !1)),
                    (o = p.bind(null, t, a, !0))
            } else
                (t = d(n)),
                    (e = f.bind(null, t, n)),
                    (o = function () {
                        !(function (r) {
                            if (null === r.parentNode) return !1
                            r.parentNode.removeChild(r)
                        })(t)
                    })
            return (
                e(r),
                function (n) {
                    if (n) {
                        if (
                            n.css === r.css &&
                            n.media === r.media &&
                            n.sourceMap === r.sourceMap
                        )
                            return
                        e((r = n))
                    } else o()
                }
            )
        }
        r.exports = function (r, n) {
            ;(n = n || {}).singleton ||
                'boolean' == typeof n.singleton ||
                (n.singleton = o())
            var t = m((r = r || []), n)
            return function (r) {
                if (
                    ((r = r || []),
                    '[object Array]' === Object.prototype.toString.call(r))
                ) {
                    for (var e = 0; e < t.length; e++) {
                        var o = l(t[e])
                        i[o].references--
                    }
                    for (var a = m(r, n), d = 0; d < t.length; d++) {
                        var c = l(t[d])
                        0 === i[c].references &&
                            (i[c].updater(), i.splice(c, 1))
                    }
                    t = a
                }
            }
        }
    },
    function (r, n, t) {
        'use strict'
        r.exports = function (r) {
            var n = []
            return (
                (n.toString = function () {
                    return this.map(function (n) {
                        var t = (function (r, n) {
                            var t = r[1] || '',
                                e = r[3]
                            if (!e) return t
                            if (n && 'function' == typeof btoa) {
                                var o =
                                        ((i = e),
                                        (l = btoa(
                                            unescape(
                                                encodeURIComponent(
                                                    JSON.stringify(i)
                                                )
                                            )
                                        )),
                                        (m = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                                            l
                                        )),
                                        '/*# '.concat(m, ' */')),
                                    a = e.sources.map(function (r) {
                                        return '/*# sourceURL='
                                            .concat(e.sourceRoot || '')
                                            .concat(r, ' */')
                                    })
                                return [t].concat(a).concat([o]).join('\n')
                            }
                            var i, l, m
                            return [t].join('\n')
                        })(n, r)
                        return n[2]
                            ? '@media '.concat(n[2], ' {').concat(t, '}')
                            : t
                    }).join('')
                }),
                (n.i = function (r, t, e) {
                    'string' == typeof r && (r = [[null, r, '']])
                    var o = {}
                    if (e)
                        for (var a = 0; a < this.length; a++) {
                            var i = this[a][0]
                            null != i && (o[i] = !0)
                        }
                    for (var l = 0; l < r.length; l++) {
                        var m = [].concat(r[l])
                        ;(e && o[m[0]]) ||
                            (t &&
                                (m[2]
                                    ? (m[2] = ''
                                          .concat(t, ' and ')
                                          .concat(m[2]))
                                    : (m[2] = t)),
                            n.push(m))
                    }
                }),
                n
            )
        }
    },
    function (r, n, t) {
        'use strict'
        function e(r) {
            var n,
                t = r.Symbol
            return (
                'function' == typeof t
                    ? t.observable
                        ? (n = t.observable)
                        : ((n = t('observable')), (t.observable = n))
                    : (n = '@@observable'),
                n
            )
        }
        t.d(n, 'a', function () {
            return e
        })
    },
    function (r, n) {
        var t
        t = (function () {
            return this
        })()
        try {
            t = t || new Function('return this')()
        } catch (r) {
            'object' == typeof window && (t = window)
        }
        r.exports = t
    },
    function (r, n) {
        r.exports = function (r) {
            if (!r.webpackPolyfill) {
                var n = Object.create(r)
                n.children || (n.children = []),
                    Object.defineProperty(n, 'loaded', {
                        enumerable: !0,
                        get: function () {
                            return n.l
                        },
                    }),
                    Object.defineProperty(n, 'id', {
                        enumerable: !0,
                        get: function () {
                            return n.i
                        },
                    }),
                    Object.defineProperty(n, 'exports', { enumerable: !0 }),
                    (n.webpackPolyfill = 1)
            }
            return n
        }
    },
    function (r, n, t) {
        var e = t(1),
            o = t(7)
        'string' == typeof (o = o.__esModule ? o.default : o) &&
            (o = [[r.i, o, '']])
        var a = { insert: 'head', singleton: !1 }
        e(o, a)
        r.exports = o.locals || {}
    },
    function (r, n, t) {
        ;(n = t(2)(!1)).push([
            r.i,
            "/*!\r\n * Bootstrap v4.5.0 (https://getbootstrap.com/)\r\n * Copyright 2011-2020 The Bootstrap Authors\r\n * Copyright 2011-2020 Twitter, Inc.\r\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\r\n */\r\n:root {\r\n    --blue: #007bff;\r\n    --indigo: #6610f2;\r\n    --purple: #6f42c1;\r\n    --pink: #e83e8c;\r\n    --red: #dc3545;\r\n    --orange: #fd7e14;\r\n    --yellow: #ffc107;\r\n    --green: #28a745;\r\n    --teal: #20c997;\r\n    --cyan: #17a2b8;\r\n    --white: #fff;\r\n    --gray: #6c757d;\r\n    --gray-dark: #343a40;\r\n    --primary: #007bff;\r\n    --secondary: #6c757d;\r\n    --success: #28a745;\r\n    --info: #17a2b8;\r\n    --warning: #ffc107;\r\n    --danger: #dc3545;\r\n    --light: #f8f9fa;\r\n    --dark: #343a40;\r\n    --breakpoint-xs: 0;\r\n    --breakpoint-sm: 576px;\r\n    --breakpoint-md: 768px;\r\n    --breakpoint-lg: 992px;\r\n    --breakpoint-xl: 1200px;\r\n    --font-family-sans-serif: -apple-system, BlinkMacSystemFont, 'Segoe UI',\r\n        Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,\r\n        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\r\n        'Noto Color Emoji';\r\n    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,\r\n        'Liberation Mono', 'Courier New', monospace;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n    font-family: sans-serif;\r\n    line-height: 1.15;\r\n    -webkit-text-size-adjust: 100%;\r\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\narticle,\r\naside,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmain,\r\nnav,\r\nsection {\r\n    display: block;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\r\n        'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',\r\n        'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #212529;\r\n    text-align: left;\r\n    background-color: #fff;\r\n}\r\n\r\n[tabindex='-1']:focus:not(:focus-visible) {\r\n    outline: 0 !important;\r\n}\r\n\r\nhr {\r\n    box-sizing: content-box;\r\n    height: 0;\r\n    overflow: visible;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    margin-top: 0;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\np {\r\n    margin-top: 0;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\nabbr[title],\r\nabbr[data-original-title] {\r\n    text-decoration: underline;\r\n    -webkit-text-decoration: underline dotted;\r\n    text-decoration: underline dotted;\r\n    cursor: help;\r\n    border-bottom: 0;\r\n    -webkit-text-decoration-skip-ink: none;\r\n    text-decoration-skip-ink: none;\r\n}\r\n\r\naddress {\r\n    margin-bottom: 1rem;\r\n    font-style: normal;\r\n    line-height: inherit;\r\n}\r\n\r\nol,\r\nul,\r\ndl {\r\n    margin-top: 0;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\nol ol,\r\nul ul,\r\nol ul,\r\nul ol {\r\n    margin-bottom: 0;\r\n}\r\n\r\ndt {\r\n    font-weight: 700;\r\n}\r\n\r\ndd {\r\n    margin-bottom: 0.5rem;\r\n    margin-left: 0;\r\n}\r\n\r\nblockquote {\r\n    margin: 0 0 1rem;\r\n}\r\n\r\nb,\r\nstrong {\r\n    font-weight: bolder;\r\n}\r\n\r\nsmall {\r\n    font-size: 80%;\r\n}\r\n\r\nsub,\r\nsup {\r\n    position: relative;\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n    bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n    top: -0.5em;\r\n}\r\n\r\na {\r\n    color: #007bff;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n}\r\n\r\na:hover {\r\n    color: #0056b3;\r\n    text-decoration: underline;\r\n}\r\n\r\na:not([href]) {\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\na:not([href]):hover {\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\npre,\r\ncode,\r\nkbd,\r\nsamp {\r\n    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',\r\n        'Courier New', monospace;\r\n    font-size: 1em;\r\n}\r\n\r\npre {\r\n    margin-top: 0;\r\n    margin-bottom: 1rem;\r\n    overflow: auto;\r\n    -ms-overflow-style: scrollbar;\r\n}\r\n\r\nfigure {\r\n    margin: 0 0 1rem;\r\n}\r\n\r\nimg {\r\n    vertical-align: middle;\r\n    border-style: none;\r\n}\r\n\r\nsvg {\r\n    overflow: hidden;\r\n    vertical-align: middle;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n}\r\n\r\ncaption {\r\n    padding-top: 0.75rem;\r\n    padding-bottom: 0.75rem;\r\n    color: #6c757d;\r\n    text-align: left;\r\n    caption-side: bottom;\r\n}\r\n\r\nth {\r\n    text-align: inherit;\r\n}\r\n\r\nlabel {\r\n    display: inline-block;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\nbutton {\r\n    border-radius: 0;\r\n}\r\n\r\nbutton:focus {\r\n    outline: 1px dotted;\r\n    outline: 5px auto -webkit-focus-ring-color;\r\n}\r\n\r\ninput,\r\nbutton,\r\nselect,\r\noptgroup,\r\ntextarea {\r\n    margin: 0;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    line-height: inherit;\r\n}\r\n\r\nbutton,\r\ninput {\r\n    overflow: visible;\r\n}\r\n\r\nbutton,\r\nselect {\r\n    text-transform: none;\r\n}\r\n\r\n[role='button'] {\r\n    cursor: pointer;\r\n}\r\n\r\nselect {\r\n    word-wrap: normal;\r\n}\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n    -webkit-appearance: button;\r\n}\r\n\r\nbutton:not(:disabled),\r\n[type='button']:not(:disabled),\r\n[type='reset']:not(:disabled),\r\n[type='submit']:not(:disabled) {\r\n    cursor: pointer;\r\n}\r\n\r\nbutton::-moz-focus-inner,\r\n[type='button']::-moz-focus-inner,\r\n[type='reset']::-moz-focus-inner,\r\n[type='submit']::-moz-focus-inner {\r\n    padding: 0;\r\n    border-style: none;\r\n}\r\n\r\ninput[type='radio'],\r\ninput[type='checkbox'] {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n}\r\n\r\ntextarea {\r\n    overflow: auto;\r\n    resize: vertical;\r\n}\r\n\r\nfieldset {\r\n    min-width: 0;\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 0;\r\n}\r\n\r\nlegend {\r\n    display: block;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    padding: 0;\r\n    margin-bottom: 0.5rem;\r\n    font-size: 1.5rem;\r\n    line-height: inherit;\r\n    color: inherit;\r\n    white-space: normal;\r\n}\r\n\r\nprogress {\r\n    vertical-align: baseline;\r\n}\r\n\r\n[type='number']::-webkit-inner-spin-button,\r\n[type='number']::-webkit-outer-spin-button {\r\n    height: auto;\r\n}\r\n\r\n[type='search'] {\r\n    outline-offset: -2px;\r\n    -webkit-appearance: none;\r\n}\r\n\r\n[type='search']::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n::-webkit-file-upload-button {\r\n    font: inherit;\r\n    -webkit-appearance: button;\r\n}\r\n\r\noutput {\r\n    display: inline-block;\r\n}\r\n\r\nsummary {\r\n    display: list-item;\r\n    cursor: pointer;\r\n}\r\n\r\ntemplate {\r\n    display: none;\r\n}\r\n\r\n[hidden] {\r\n    display: none !important;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\n.h1,\r\n.h2,\r\n.h3,\r\n.h4,\r\n.h5,\r\n.h6 {\r\n    margin-bottom: 0.5rem;\r\n    font-weight: 500;\r\n    line-height: 1.2;\r\n}\r\n\r\nh1,\r\n.h1 {\r\n    font-size: 2.5rem;\r\n}\r\n\r\nh2,\r\n.h2 {\r\n    font-size: 2rem;\r\n}\r\n\r\nh3,\r\n.h3 {\r\n    font-size: 1.75rem;\r\n}\r\n\r\nh4,\r\n.h4 {\r\n    font-size: 1.5rem;\r\n}\r\n\r\nh5,\r\n.h5 {\r\n    font-size: 1.25rem;\r\n}\r\n\r\nh6,\r\n.h6 {\r\n    font-size: 1rem;\r\n}\r\n\r\n.lead {\r\n    font-size: 1.25rem;\r\n    font-weight: 300;\r\n}\r\n\r\n.display-1 {\r\n    font-size: 6rem;\r\n    font-weight: 300;\r\n    line-height: 1.2;\r\n}\r\n\r\n.display-2 {\r\n    font-size: 5.5rem;\r\n    font-weight: 300;\r\n    line-height: 1.2;\r\n}\r\n\r\n.display-3 {\r\n    font-size: 4.5rem;\r\n    font-weight: 300;\r\n    line-height: 1.2;\r\n}\r\n\r\n.display-4 {\r\n    font-size: 3.5rem;\r\n    font-weight: 300;\r\n    line-height: 1.2;\r\n}\r\n\r\nhr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nsmall,\r\n.small {\r\n    font-size: 80%;\r\n    font-weight: 400;\r\n}\r\n\r\nmark,\r\n.mark {\r\n    padding: 0.2em;\r\n    background-color: #fcf8e3;\r\n}\r\n\r\n.list-unstyled {\r\n    padding-left: 0;\r\n    list-style: none;\r\n}\r\n\r\n.list-inline {\r\n    padding-left: 0;\r\n    list-style: none;\r\n}\r\n\r\n.list-inline-item {\r\n    display: inline-block;\r\n}\r\n\r\n.list-inline-item:not(:last-child) {\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.initialism {\r\n    font-size: 90%;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.blockquote {\r\n    margin-bottom: 1rem;\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.blockquote-footer {\r\n    display: block;\r\n    font-size: 80%;\r\n    color: #6c757d;\r\n}\r\n\r\n.blockquote-footer::before {\r\n    content: '\\2014\\00A0';\r\n}\r\n\r\n.img-fluid {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.img-thumbnail {\r\n    padding: 0.25rem;\r\n    background-color: #fff;\r\n    border: 1px solid #dee2e6;\r\n    border-radius: 0.25rem;\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.figure {\r\n    display: inline-block;\r\n}\r\n\r\n.figure-img {\r\n    margin-bottom: 0.5rem;\r\n    line-height: 1;\r\n}\r\n\r\n.figure-caption {\r\n    font-size: 90%;\r\n    color: #6c757d;\r\n}\r\n\r\ncode {\r\n    font-size: 87.5%;\r\n    color: #e83e8c;\r\n    word-wrap: break-word;\r\n}\r\n\r\na > code {\r\n    color: inherit;\r\n}\r\n\r\nkbd {\r\n    padding: 0.2rem 0.4rem;\r\n    font-size: 87.5%;\r\n    color: #fff;\r\n    background-color: #212529;\r\n    border-radius: 0.2rem;\r\n}\r\n\r\nkbd kbd {\r\n    padding: 0;\r\n    font-size: 100%;\r\n    font-weight: 700;\r\n}\r\n\r\npre {\r\n    display: block;\r\n    font-size: 87.5%;\r\n    color: #212529;\r\n}\r\n\r\npre code {\r\n    font-size: inherit;\r\n    color: inherit;\r\n    word-break: normal;\r\n}\r\n\r\n.pre-scrollable {\r\n    max-height: 340px;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.container {\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .container {\r\n        max-width: 540px;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .container {\r\n        max-width: 720px;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .container {\r\n        max-width: 960px;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .container {\r\n        max-width: 1140px;\r\n    }\r\n}\r\n\r\n.container-fluid,\r\n.container-sm,\r\n.container-md,\r\n.container-lg,\r\n.container-xl {\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .container,\r\n    .container-sm {\r\n        max-width: 540px;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .container,\r\n    .container-sm,\r\n    .container-md {\r\n        max-width: 720px;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .container,\r\n    .container-sm,\r\n    .container-md,\r\n    .container-lg {\r\n        max-width: 960px;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .container,\r\n    .container-sm,\r\n    .container-md,\r\n    .container-lg,\r\n    .container-xl {\r\n        max-width: 1140px;\r\n    }\r\n}\r\n\r\n.row {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    margin-right: -15px;\r\n    margin-left: -15px;\r\n}\r\n\r\n.no-gutters {\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n}\r\n\r\n.no-gutters > .col,\r\n.no-gutters > [class*='col-'] {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n}\r\n\r\n.col-1,\r\n.col-2,\r\n.col-3,\r\n.col-4,\r\n.col-5,\r\n.col-6,\r\n.col-7,\r\n.col-8,\r\n.col-9,\r\n.col-10,\r\n.col-11,\r\n.col-12,\r\n.col,\r\n.col-auto,\r\n.col-sm-1,\r\n.col-sm-2,\r\n.col-sm-3,\r\n.col-sm-4,\r\n.col-sm-5,\r\n.col-sm-6,\r\n.col-sm-7,\r\n.col-sm-8,\r\n.col-sm-9,\r\n.col-sm-10,\r\n.col-sm-11,\r\n.col-sm-12,\r\n.col-sm,\r\n.col-sm-auto,\r\n.col-md-1,\r\n.col-md-2,\r\n.col-md-3,\r\n.col-md-4,\r\n.col-md-5,\r\n.col-md-6,\r\n.col-md-7,\r\n.col-md-8,\r\n.col-md-9,\r\n.col-md-10,\r\n.col-md-11,\r\n.col-md-12,\r\n.col-md,\r\n.col-md-auto,\r\n.col-lg-1,\r\n.col-lg-2,\r\n.col-lg-3,\r\n.col-lg-4,\r\n.col-lg-5,\r\n.col-lg-6,\r\n.col-lg-7,\r\n.col-lg-8,\r\n.col-lg-9,\r\n.col-lg-10,\r\n.col-lg-11,\r\n.col-lg-12,\r\n.col-lg,\r\n.col-lg-auto,\r\n.col-xl-1,\r\n.col-xl-2,\r\n.col-xl-3,\r\n.col-xl-4,\r\n.col-xl-5,\r\n.col-xl-6,\r\n.col-xl-7,\r\n.col-xl-8,\r\n.col-xl-9,\r\n.col-xl-10,\r\n.col-xl-11,\r\n.col-xl-12,\r\n.col-xl,\r\n.col-xl-auto {\r\n    position: relative;\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n}\r\n\r\n.col {\r\n    -ms-flex-preferred-size: 0;\r\n    flex-basis: 0;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    min-width: 0;\r\n    max-width: 100%;\r\n}\r\n\r\n.row-cols-1 > * {\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n}\r\n\r\n.row-cols-2 > * {\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n}\r\n\r\n.row-cols-3 > * {\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n}\r\n\r\n.row-cols-4 > * {\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n}\r\n\r\n.row-cols-5 > * {\r\n    -ms-flex: 0 0 20%;\r\n    flex: 0 0 20%;\r\n    max-width: 20%;\r\n}\r\n\r\n.row-cols-6 > * {\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n}\r\n\r\n.col-auto {\r\n    -ms-flex: 0 0 auto;\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: 100%;\r\n}\r\n\r\n.col-1 {\r\n    -ms-flex: 0 0 8.333333%;\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n}\r\n\r\n.col-2 {\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n}\r\n\r\n.col-3 {\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n}\r\n\r\n.col-4 {\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n}\r\n\r\n.col-5 {\r\n    -ms-flex: 0 0 41.666667%;\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n}\r\n\r\n.col-6 {\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n}\r\n\r\n.col-7 {\r\n    -ms-flex: 0 0 58.333333%;\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n}\r\n\r\n.col-8 {\r\n    -ms-flex: 0 0 66.666667%;\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n}\r\n\r\n.col-9 {\r\n    -ms-flex: 0 0 75%;\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n}\r\n\r\n.col-10 {\r\n    -ms-flex: 0 0 83.333333%;\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n}\r\n\r\n.col-11 {\r\n    -ms-flex: 0 0 91.666667%;\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n}\r\n\r\n.col-12 {\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n}\r\n\r\n.order-first {\r\n    -ms-flex-order: -1;\r\n    order: -1;\r\n}\r\n\r\n.order-last {\r\n    -ms-flex-order: 13;\r\n    order: 13;\r\n}\r\n\r\n.order-0 {\r\n    -ms-flex-order: 0;\r\n    order: 0;\r\n}\r\n\r\n.order-1 {\r\n    -ms-flex-order: 1;\r\n    order: 1;\r\n}\r\n\r\n.order-2 {\r\n    -ms-flex-order: 2;\r\n    order: 2;\r\n}\r\n\r\n.order-3 {\r\n    -ms-flex-order: 3;\r\n    order: 3;\r\n}\r\n\r\n.order-4 {\r\n    -ms-flex-order: 4;\r\n    order: 4;\r\n}\r\n\r\n.order-5 {\r\n    -ms-flex-order: 5;\r\n    order: 5;\r\n}\r\n\r\n.order-6 {\r\n    -ms-flex-order: 6;\r\n    order: 6;\r\n}\r\n\r\n.order-7 {\r\n    -ms-flex-order: 7;\r\n    order: 7;\r\n}\r\n\r\n.order-8 {\r\n    -ms-flex-order: 8;\r\n    order: 8;\r\n}\r\n\r\n.order-9 {\r\n    -ms-flex-order: 9;\r\n    order: 9;\r\n}\r\n\r\n.order-10 {\r\n    -ms-flex-order: 10;\r\n    order: 10;\r\n}\r\n\r\n.order-11 {\r\n    -ms-flex-order: 11;\r\n    order: 11;\r\n}\r\n\r\n.order-12 {\r\n    -ms-flex-order: 12;\r\n    order: 12;\r\n}\r\n\r\n.offset-1 {\r\n    margin-left: 8.333333%;\r\n}\r\n\r\n.offset-2 {\r\n    margin-left: 16.666667%;\r\n}\r\n\r\n.offset-3 {\r\n    margin-left: 25%;\r\n}\r\n\r\n.offset-4 {\r\n    margin-left: 33.333333%;\r\n}\r\n\r\n.offset-5 {\r\n    margin-left: 41.666667%;\r\n}\r\n\r\n.offset-6 {\r\n    margin-left: 50%;\r\n}\r\n\r\n.offset-7 {\r\n    margin-left: 58.333333%;\r\n}\r\n\r\n.offset-8 {\r\n    margin-left: 66.666667%;\r\n}\r\n\r\n.offset-9 {\r\n    margin-left: 75%;\r\n}\r\n\r\n.offset-10 {\r\n    margin-left: 83.333333%;\r\n}\r\n\r\n.offset-11 {\r\n    margin-left: 91.666667%;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .col-sm {\r\n        -ms-flex-preferred-size: 0;\r\n        flex-basis: 0;\r\n        -ms-flex-positive: 1;\r\n        flex-grow: 1;\r\n        min-width: 0;\r\n        max-width: 100%;\r\n    }\r\n    .row-cols-sm-1 > * {\r\n        -ms-flex: 0 0 100%;\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n    }\r\n    .row-cols-sm-2 > * {\r\n        -ms-flex: 0 0 50%;\r\n        flex: 0 0 50%;\r\n        max-width: 50%;\r\n    }\r\n    .row-cols-sm-3 > * {\r\n        -ms-flex: 0 0 33.333333%;\r\n        flex: 0 0 33.333333%;\r\n        max-width: 33.333333%;\r\n    }\r\n    .row-cols-sm-4 > * {\r\n        -ms-flex: 0 0 25%;\r\n        flex: 0 0 25%;\r\n        max-width: 25%;\r\n    }\r\n    .row-cols-sm-5 > * {\r\n        -ms-flex: 0 0 20%;\r\n        flex: 0 0 20%;\r\n        max-width: 20%;\r\n    }\r\n    .row-cols-sm-6 > * {\r\n        -ms-flex: 0 0 16.666667%;\r\n        flex: 0 0 16.666667%;\r\n        max-width: 16.666667%;\r\n    }\r\n    .col-sm-auto {\r\n        -ms-flex: 0 0 auto;\r\n        flex: 0 0 auto;\r\n        width: auto;\r\n        max-width: 100%;\r\n    }\r\n    .col-sm-1 {\r\n        -ms-flex: 0 0 8.333333%;\r\n        flex: 0 0 8.333333%;\r\n        max-width: 8.333333%;\r\n    }\r\n    .col-sm-2 {\r\n        -ms-flex: 0 0 16.666667%;\r\n        flex: 0 0 16.666667%;\r\n        max-width: 16.666667%;\r\n    }\r\n    .col-sm-3 {\r\n        -ms-flex: 0 0 25%;\r\n        flex: 0 0 25%;\r\n        max-width: 25%;\r\n    }\r\n    .col-sm-4 {\r\n        -ms-flex: 0 0 33.333333%;\r\n        flex: 0 0 33.333333%;\r\n        max-width: 33.333333%;\r\n    }\r\n    .col-sm-5 {\r\n        -ms-flex: 0 0 41.666667%;\r\n        flex: 0 0 41.666667%;\r\n        max-width: 41.666667%;\r\n    }\r\n    .col-sm-6 {\r\n        -ms-flex: 0 0 50%;\r\n        flex: 0 0 50%;\r\n        max-width: 50%;\r\n    }\r\n    .col-sm-7 {\r\n        -ms-flex: 0 0 58.333333%;\r\n        flex: 0 0 58.333333%;\r\n        max-width: 58.333333%;\r\n    }\r\n    .col-sm-8 {\r\n        -ms-flex: 0 0 66.666667%;\r\n        flex: 0 0 66.666667%;\r\n        max-width: 66.666667%;\r\n    }\r\n    .col-sm-9 {\r\n        -ms-flex: 0 0 75%;\r\n        flex: 0 0 75%;\r\n        max-width: 75%;\r\n    }\r\n    .col-sm-10 {\r\n        -ms-flex: 0 0 83.333333%;\r\n        flex: 0 0 83.333333%;\r\n        max-width: 83.333333%;\r\n    }\r\n    .col-sm-11 {\r\n        -ms-flex: 0 0 91.666667%;\r\n        flex: 0 0 91.666667%;\r\n        max-width: 91.666667%;\r\n    }\r\n    .col-sm-12 {\r\n        -ms-flex: 0 0 100%;\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n    }\r\n    .order-sm-first {\r\n        -ms-flex-order: -1;\r\n        order: -1;\r\n    }\r\n    .order-sm-last {\r\n        -ms-flex-order: 13;\r\n        order: 13;\r\n    }\r\n    .order-sm-0 {\r\n        -ms-flex-order: 0;\r\n        order: 0;\r\n    }\r\n    .order-sm-1 {\r\n        -ms-flex-order: 1;\r\n        order: 1;\r\n    }\r\n    .order-sm-2 {\r\n        -ms-flex-order: 2;\r\n        order: 2;\r\n    }\r\n    .order-sm-3 {\r\n        -ms-flex-order: 3;\r\n        order: 3;\r\n    }\r\n    .order-sm-4 {\r\n        -ms-flex-order: 4;\r\n        order: 4;\r\n    }\r\n    .order-sm-5 {\r\n        -ms-flex-order: 5;\r\n        order: 5;\r\n    }\r\n    .order-sm-6 {\r\n        -ms-flex-order: 6;\r\n        order: 6;\r\n    }\r\n    .order-sm-7 {\r\n        -ms-flex-order: 7;\r\n        order: 7;\r\n    }\r\n    .order-sm-8 {\r\n        -ms-flex-order: 8;\r\n        order: 8;\r\n    }\r\n    .order-sm-9 {\r\n        -ms-flex-order: 9;\r\n        order: 9;\r\n    }\r\n    .order-sm-10 {\r\n        -ms-flex-order: 10;\r\n        order: 10;\r\n    }\r\n    .order-sm-11 {\r\n        -ms-flex-order: 11;\r\n        order: 11;\r\n    }\r\n    .order-sm-12 {\r\n        -ms-flex-order: 12;\r\n        order: 12;\r\n    }\r\n    .offset-sm-0 {\r\n        margin-left: 0;\r\n    }\r\n    .offset-sm-1 {\r\n        margin-left: 8.333333%;\r\n    }\r\n    .offset-sm-2 {\r\n        margin-left: 16.666667%;\r\n    }\r\n    .offset-sm-3 {\r\n        margin-left: 25%;\r\n    }\r\n    .offset-sm-4 {\r\n        margin-left: 33.333333%;\r\n    }\r\n    .offset-sm-5 {\r\n        margin-left: 41.666667%;\r\n    }\r\n    .offset-sm-6 {\r\n        margin-left: 50%;\r\n    }\r\n    .offset-sm-7 {\r\n        margin-left: 58.333333%;\r\n    }\r\n    .offset-sm-8 {\r\n        margin-left: 66.666667%;\r\n    }\r\n    .offset-sm-9 {\r\n        margin-left: 75%;\r\n    }\r\n    .offset-sm-10 {\r\n        margin-left: 83.333333%;\r\n    }\r\n    .offset-sm-11 {\r\n        margin-left: 91.666667%;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .col-md {\r\n        -ms-flex-preferred-size: 0;\r\n        flex-basis: 0;\r\n        -ms-flex-positive: 1;\r\n        flex-grow: 1;\r\n        min-width: 0;\r\n        max-width: 100%;\r\n    }\r\n    .row-cols-md-1 > * {\r\n        -ms-flex: 0 0 100%;\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n    }\r\n    .row-cols-md-2 > * {\r\n        -ms-flex: 0 0 50%;\r\n        flex: 0 0 50%;\r\n        max-width: 50%;\r\n    }\r\n    .row-cols-md-3 > * {\r\n        -ms-flex: 0 0 33.333333%;\r\n        flex: 0 0 33.333333%;\r\n        max-width: 33.333333%;\r\n    }\r\n    .row-cols-md-4 > * {\r\n        -ms-flex: 0 0 25%;\r\n        flex: 0 0 25%;\r\n        max-width: 25%;\r\n    }\r\n    .row-cols-md-5 > * {\r\n        -ms-flex: 0 0 20%;\r\n        flex: 0 0 20%;\r\n        max-width: 20%;\r\n    }\r\n    .row-cols-md-6 > * {\r\n        -ms-flex: 0 0 16.666667%;\r\n        flex: 0 0 16.666667%;\r\n        max-width: 16.666667%;\r\n    }\r\n    .col-md-auto {\r\n        -ms-flex: 0 0 auto;\r\n        flex: 0 0 auto;\r\n        width: auto;\r\n        max-width: 100%;\r\n    }\r\n    .col-md-1 {\r\n        -ms-flex: 0 0 8.333333%;\r\n        flex: 0 0 8.333333%;\r\n        max-width: 8.333333%;\r\n    }\r\n    .col-md-2 {\r\n        -ms-flex: 0 0 16.666667%;\r\n        flex: 0 0 16.666667%;\r\n        max-width: 16.666667%;\r\n    }\r\n    .col-md-3 {\r\n        -ms-flex: 0 0 25%;\r\n        flex: 0 0 25%;\r\n        max-width: 25%;\r\n    }\r\n    .col-md-4 {\r\n        -ms-flex: 0 0 33.333333%;\r\n        flex: 0 0 33.333333%;\r\n        max-width: 33.333333%;\r\n    }\r\n    .col-md-5 {\r\n        -ms-flex: 0 0 41.666667%;\r\n        flex: 0 0 41.666667%;\r\n        max-width: 41.666667%;\r\n    }\r\n    .col-md-6 {\r\n        -ms-flex: 0 0 50%;\r\n        flex: 0 0 50%;\r\n        max-width: 50%;\r\n    }\r\n    .col-md-7 {\r\n        -ms-flex: 0 0 58.333333%;\r\n        flex: 0 0 58.333333%;\r\n        max-width: 58.333333%;\r\n    }\r\n    .col-md-8 {\r\n        -ms-flex: 0 0 66.666667%;\r\n        flex: 0 0 66.666667%;\r\n        max-width: 66.666667%;\r\n    }\r\n    .col-md-9 {\r\n        -ms-flex: 0 0 75%;\r\n        flex: 0 0 75%;\r\n        max-width: 75%;\r\n    }\r\n    .col-md-10 {\r\n        -ms-flex: 0 0 83.333333%;\r\n        flex: 0 0 83.333333%;\r\n        max-width: 83.333333%;\r\n    }\r\n    .col-md-11 {\r\n        -ms-flex: 0 0 91.666667%;\r\n        flex: 0 0 91.666667%;\r\n        max-width: 91.666667%;\r\n    }\r\n    .col-md-12 {\r\n        -ms-flex: 0 0 100%;\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n    }\r\n    .order-md-first {\r\n        -ms-flex-order: -1;\r\n        order: -1;\r\n    }\r\n    .order-md-last {\r\n        -ms-flex-order: 13;\r\n        order: 13;\r\n    }\r\n    .order-md-0 {\r\n        -ms-flex-order: 0;\r\n        order: 0;\r\n    }\r\n    .order-md-1 {\r\n        -ms-flex-order: 1;\r\n        order: 1;\r\n    }\r\n    .order-md-2 {\r\n        -ms-flex-order: 2;\r\n        order: 2;\r\n    }\r\n    .order-md-3 {\r\n        -ms-flex-order: 3;\r\n        order: 3;\r\n    }\r\n    .order-md-4 {\r\n        -ms-flex-order: 4;\r\n        order: 4;\r\n    }\r\n    .order-md-5 {\r\n        -ms-flex-order: 5;\r\n        order: 5;\r\n    }\r\n    .order-md-6 {\r\n        -ms-flex-order: 6;\r\n        order: 6;\r\n    }\r\n    .order-md-7 {\r\n        -ms-flex-order: 7;\r\n        order: 7;\r\n    }\r\n    .order-md-8 {\r\n        -ms-flex-order: 8;\r\n        order: 8;\r\n    }\r\n    .order-md-9 {\r\n        -ms-flex-order: 9;\r\n        order: 9;\r\n    }\r\n    .order-md-10 {\r\n        -ms-flex-order: 10;\r\n        order: 10;\r\n    }\r\n    .order-md-11 {\r\n        -ms-flex-order: 11;\r\n        order: 11;\r\n    }\r\n    .order-md-12 {\r\n        -ms-flex-order: 12;\r\n        order: 12;\r\n    }\r\n    .offset-md-0 {\r\n        margin-left: 0;\r\n    }\r\n    .offset-md-1 {\r\n        margin-left: 8.333333%;\r\n    }\r\n    .offset-md-2 {\r\n        margin-left: 16.666667%;\r\n    }\r\n    .offset-md-3 {\r\n        margin-left: 25%;\r\n    }\r\n    .offset-md-4 {\r\n        margin-left: 33.333333%;\r\n    }\r\n    .offset-md-5 {\r\n        margin-left: 41.666667%;\r\n    }\r\n    .offset-md-6 {\r\n        margin-left: 50%;\r\n    }\r\n    .offset-md-7 {\r\n        margin-left: 58.333333%;\r\n    }\r\n    .offset-md-8 {\r\n        margin-left: 66.666667%;\r\n    }\r\n    .offset-md-9 {\r\n        margin-left: 75%;\r\n    }\r\n    .offset-md-10 {\r\n        margin-left: 83.333333%;\r\n    }\r\n    .offset-md-11 {\r\n        margin-left: 91.666667%;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .col-lg {\r\n        -ms-flex-preferred-size: 0;\r\n        flex-basis: 0;\r\n        -ms-flex-positive: 1;\r\n        flex-grow: 1;\r\n        min-width: 0;\r\n        max-width: 100%;\r\n    }\r\n    .row-cols-lg-1 > * {\r\n        -ms-flex: 0 0 100%;\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n    }\r\n    .row-cols-lg-2 > * {\r\n        -ms-flex: 0 0 50%;\r\n        flex: 0 0 50%;\r\n        max-width: 50%;\r\n    }\r\n    .row-cols-lg-3 > * {\r\n        -ms-flex: 0 0 33.333333%;\r\n        flex: 0 0 33.333333%;\r\n        max-width: 33.333333%;\r\n    }\r\n    .row-cols-lg-4 > * {\r\n        -ms-flex: 0 0 25%;\r\n        flex: 0 0 25%;\r\n        max-width: 25%;\r\n    }\r\n    .row-cols-lg-5 > * {\r\n        -ms-flex: 0 0 20%;\r\n        flex: 0 0 20%;\r\n        max-width: 20%;\r\n    }\r\n    .row-cols-lg-6 > * {\r\n        -ms-flex: 0 0 16.666667%;\r\n        flex: 0 0 16.666667%;\r\n        max-width: 16.666667%;\r\n    }\r\n    .col-lg-auto {\r\n        -ms-flex: 0 0 auto;\r\n        flex: 0 0 auto;\r\n        width: auto;\r\n        max-width: 100%;\r\n    }\r\n    .col-lg-1 {\r\n        -ms-flex: 0 0 8.333333%;\r\n        flex: 0 0 8.333333%;\r\n        max-width: 8.333333%;\r\n    }\r\n    .col-lg-2 {\r\n        -ms-flex: 0 0 16.666667%;\r\n        flex: 0 0 16.666667%;\r\n        max-width: 16.666667%;\r\n    }\r\n    .col-lg-3 {\r\n        -ms-flex: 0 0 25%;\r\n        flex: 0 0 25%;\r\n        max-width: 25%;\r\n    }\r\n    .col-lg-4 {\r\n        -ms-flex: 0 0 33.333333%;\r\n        flex: 0 0 33.333333%;\r\n        max-width: 33.333333%;\r\n    }\r\n    .col-lg-5 {\r\n        -ms-flex: 0 0 41.666667%;\r\n        flex: 0 0 41.666667%;\r\n        max-width: 41.666667%;\r\n    }\r\n    .col-lg-6 {\r\n        -ms-flex: 0 0 50%;\r\n        flex: 0 0 50%;\r\n        max-width: 50%;\r\n    }\r\n    .col-lg-7 {\r\n        -ms-flex: 0 0 58.333333%;\r\n        flex: 0 0 58.333333%;\r\n        max-width: 58.333333%;\r\n    }\r\n    .col-lg-8 {\r\n        -ms-flex: 0 0 66.666667%;\r\n        flex: 0 0 66.666667%;\r\n        max-width: 66.666667%;\r\n    }\r\n    .col-lg-9 {\r\n        -ms-flex: 0 0 75%;\r\n        flex: 0 0 75%;\r\n        max-width: 75%;\r\n    }\r\n    .col-lg-10 {\r\n        -ms-flex: 0 0 83.333333%;\r\n        flex: 0 0 83.333333%;\r\n        max-width: 83.333333%;\r\n    }\r\n    .col-lg-11 {\r\n        -ms-flex: 0 0 91.666667%;\r\n        flex: 0 0 91.666667%;\r\n        max-width: 91.666667%;\r\n    }\r\n    .col-lg-12 {\r\n        -ms-flex: 0 0 100%;\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n    }\r\n    .order-lg-first {\r\n        -ms-flex-order: -1;\r\n        order: -1;\r\n    }\r\n    .order-lg-last {\r\n        -ms-flex-order: 13;\r\n        order: 13;\r\n    }\r\n    .order-lg-0 {\r\n        -ms-flex-order: 0;\r\n        order: 0;\r\n    }\r\n    .order-lg-1 {\r\n        -ms-flex-order: 1;\r\n        order: 1;\r\n    }\r\n    .order-lg-2 {\r\n        -ms-flex-order: 2;\r\n        order: 2;\r\n    }\r\n    .order-lg-3 {\r\n        -ms-flex-order: 3;\r\n        order: 3;\r\n    }\r\n    .order-lg-4 {\r\n        -ms-flex-order: 4;\r\n        order: 4;\r\n    }\r\n    .order-lg-5 {\r\n        -ms-flex-order: 5;\r\n        order: 5;\r\n    }\r\n    .order-lg-6 {\r\n        -ms-flex-order: 6;\r\n        order: 6;\r\n    }\r\n    .order-lg-7 {\r\n        -ms-flex-order: 7;\r\n        order: 7;\r\n    }\r\n    .order-lg-8 {\r\n        -ms-flex-order: 8;\r\n        order: 8;\r\n    }\r\n    .order-lg-9 {\r\n        -ms-flex-order: 9;\r\n        order: 9;\r\n    }\r\n    .order-lg-10 {\r\n        -ms-flex-order: 10;\r\n        order: 10;\r\n    }\r\n    .order-lg-11 {\r\n        -ms-flex-order: 11;\r\n        order: 11;\r\n    }\r\n    .order-lg-12 {\r\n        -ms-flex-order: 12;\r\n        order: 12;\r\n    }\r\n    .offset-lg-0 {\r\n        margin-left: 0;\r\n    }\r\n    .offset-lg-1 {\r\n        margin-left: 8.333333%;\r\n    }\r\n    .offset-lg-2 {\r\n        margin-left: 16.666667%;\r\n    }\r\n    .offset-lg-3 {\r\n        margin-left: 25%;\r\n    }\r\n    .offset-lg-4 {\r\n        margin-left: 33.333333%;\r\n    }\r\n    .offset-lg-5 {\r\n        margin-left: 41.666667%;\r\n    }\r\n    .offset-lg-6 {\r\n        margin-left: 50%;\r\n    }\r\n    .offset-lg-7 {\r\n        margin-left: 58.333333%;\r\n    }\r\n    .offset-lg-8 {\r\n        margin-left: 66.666667%;\r\n    }\r\n    .offset-lg-9 {\r\n        margin-left: 75%;\r\n    }\r\n    .offset-lg-10 {\r\n        margin-left: 83.333333%;\r\n    }\r\n    .offset-lg-11 {\r\n        margin-left: 91.666667%;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .col-xl {\r\n        -ms-flex-preferred-size: 0;\r\n        flex-basis: 0;\r\n        -ms-flex-positive: 1;\r\n        flex-grow: 1;\r\n        min-width: 0;\r\n        max-width: 100%;\r\n    }\r\n    .row-cols-xl-1 > * {\r\n        -ms-flex: 0 0 100%;\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n    }\r\n    .row-cols-xl-2 > * {\r\n        -ms-flex: 0 0 50%;\r\n        flex: 0 0 50%;\r\n        max-width: 50%;\r\n    }\r\n    .row-cols-xl-3 > * {\r\n        -ms-flex: 0 0 33.333333%;\r\n        flex: 0 0 33.333333%;\r\n        max-width: 33.333333%;\r\n    }\r\n    .row-cols-xl-4 > * {\r\n        -ms-flex: 0 0 25%;\r\n        flex: 0 0 25%;\r\n        max-width: 25%;\r\n    }\r\n    .row-cols-xl-5 > * {\r\n        -ms-flex: 0 0 20%;\r\n        flex: 0 0 20%;\r\n        max-width: 20%;\r\n    }\r\n    .row-cols-xl-6 > * {\r\n        -ms-flex: 0 0 16.666667%;\r\n        flex: 0 0 16.666667%;\r\n        max-width: 16.666667%;\r\n    }\r\n    .col-xl-auto {\r\n        -ms-flex: 0 0 auto;\r\n        flex: 0 0 auto;\r\n        width: auto;\r\n        max-width: 100%;\r\n    }\r\n    .col-xl-1 {\r\n        -ms-flex: 0 0 8.333333%;\r\n        flex: 0 0 8.333333%;\r\n        max-width: 8.333333%;\r\n    }\r\n    .col-xl-2 {\r\n        -ms-flex: 0 0 16.666667%;\r\n        flex: 0 0 16.666667%;\r\n        max-width: 16.666667%;\r\n    }\r\n    .col-xl-3 {\r\n        -ms-flex: 0 0 25%;\r\n        flex: 0 0 25%;\r\n        max-width: 25%;\r\n    }\r\n    .col-xl-4 {\r\n        -ms-flex: 0 0 33.333333%;\r\n        flex: 0 0 33.333333%;\r\n        max-width: 33.333333%;\r\n    }\r\n    .col-xl-5 {\r\n        -ms-flex: 0 0 41.666667%;\r\n        flex: 0 0 41.666667%;\r\n        max-width: 41.666667%;\r\n    }\r\n    .col-xl-6 {\r\n        -ms-flex: 0 0 50%;\r\n        flex: 0 0 50%;\r\n        max-width: 50%;\r\n    }\r\n    .col-xl-7 {\r\n        -ms-flex: 0 0 58.333333%;\r\n        flex: 0 0 58.333333%;\r\n        max-width: 58.333333%;\r\n    }\r\n    .col-xl-8 {\r\n        -ms-flex: 0 0 66.666667%;\r\n        flex: 0 0 66.666667%;\r\n        max-width: 66.666667%;\r\n    }\r\n    .col-xl-9 {\r\n        -ms-flex: 0 0 75%;\r\n        flex: 0 0 75%;\r\n        max-width: 75%;\r\n    }\r\n    .col-xl-10 {\r\n        -ms-flex: 0 0 83.333333%;\r\n        flex: 0 0 83.333333%;\r\n        max-width: 83.333333%;\r\n    }\r\n    .col-xl-11 {\r\n        -ms-flex: 0 0 91.666667%;\r\n        flex: 0 0 91.666667%;\r\n        max-width: 91.666667%;\r\n    }\r\n    .col-xl-12 {\r\n        -ms-flex: 0 0 100%;\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n    }\r\n    .order-xl-first {\r\n        -ms-flex-order: -1;\r\n        order: -1;\r\n    }\r\n    .order-xl-last {\r\n        -ms-flex-order: 13;\r\n        order: 13;\r\n    }\r\n    .order-xl-0 {\r\n        -ms-flex-order: 0;\r\n        order: 0;\r\n    }\r\n    .order-xl-1 {\r\n        -ms-flex-order: 1;\r\n        order: 1;\r\n    }\r\n    .order-xl-2 {\r\n        -ms-flex-order: 2;\r\n        order: 2;\r\n    }\r\n    .order-xl-3 {\r\n        -ms-flex-order: 3;\r\n        order: 3;\r\n    }\r\n    .order-xl-4 {\r\n        -ms-flex-order: 4;\r\n        order: 4;\r\n    }\r\n    .order-xl-5 {\r\n        -ms-flex-order: 5;\r\n        order: 5;\r\n    }\r\n    .order-xl-6 {\r\n        -ms-flex-order: 6;\r\n        order: 6;\r\n    }\r\n    .order-xl-7 {\r\n        -ms-flex-order: 7;\r\n        order: 7;\r\n    }\r\n    .order-xl-8 {\r\n        -ms-flex-order: 8;\r\n        order: 8;\r\n    }\r\n    .order-xl-9 {\r\n        -ms-flex-order: 9;\r\n        order: 9;\r\n    }\r\n    .order-xl-10 {\r\n        -ms-flex-order: 10;\r\n        order: 10;\r\n    }\r\n    .order-xl-11 {\r\n        -ms-flex-order: 11;\r\n        order: 11;\r\n    }\r\n    .order-xl-12 {\r\n        -ms-flex-order: 12;\r\n        order: 12;\r\n    }\r\n    .offset-xl-0 {\r\n        margin-left: 0;\r\n    }\r\n    .offset-xl-1 {\r\n        margin-left: 8.333333%;\r\n    }\r\n    .offset-xl-2 {\r\n        margin-left: 16.666667%;\r\n    }\r\n    .offset-xl-3 {\r\n        margin-left: 25%;\r\n    }\r\n    .offset-xl-4 {\r\n        margin-left: 33.333333%;\r\n    }\r\n    .offset-xl-5 {\r\n        margin-left: 41.666667%;\r\n    }\r\n    .offset-xl-6 {\r\n        margin-left: 50%;\r\n    }\r\n    .offset-xl-7 {\r\n        margin-left: 58.333333%;\r\n    }\r\n    .offset-xl-8 {\r\n        margin-left: 66.666667%;\r\n    }\r\n    .offset-xl-9 {\r\n        margin-left: 75%;\r\n    }\r\n    .offset-xl-10 {\r\n        margin-left: 83.333333%;\r\n    }\r\n    .offset-xl-11 {\r\n        margin-left: 91.666667%;\r\n    }\r\n}\r\n\r\n.table {\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n    color: #212529;\r\n}\r\n\r\n.table th,\r\n.table td {\r\n    padding: 0.75rem;\r\n    vertical-align: top;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n\r\n.table thead th {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #dee2e6;\r\n}\r\n\r\n.table tbody + tbody {\r\n    border-top: 2px solid #dee2e6;\r\n}\r\n\r\n.table-sm th,\r\n.table-sm td {\r\n    padding: 0.3rem;\r\n}\r\n\r\n.table-bordered {\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.table-bordered th,\r\n.table-bordered td {\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.table-bordered thead th,\r\n.table-bordered thead td {\r\n    border-bottom-width: 2px;\r\n}\r\n\r\n.table-borderless th,\r\n.table-borderless td,\r\n.table-borderless thead th,\r\n.table-borderless tbody + tbody {\r\n    border: 0;\r\n}\r\n\r\n.table-striped tbody tr:nth-of-type(odd) {\r\n    background-color: rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.table-hover tbody tr:hover {\r\n    color: #212529;\r\n    background-color: rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.table-primary,\r\n.table-primary > th,\r\n.table-primary > td {\r\n    background-color: #b8daff;\r\n}\r\n\r\n.table-primary th,\r\n.table-primary td,\r\n.table-primary thead th,\r\n.table-primary tbody + tbody {\r\n    border-color: #7abaff;\r\n}\r\n\r\n.table-hover .table-primary:hover {\r\n    background-color: #9fcdff;\r\n}\r\n\r\n.table-hover .table-primary:hover > td,\r\n.table-hover .table-primary:hover > th {\r\n    background-color: #9fcdff;\r\n}\r\n\r\n.table-secondary,\r\n.table-secondary > th,\r\n.table-secondary > td {\r\n    background-color: #d6d8db;\r\n}\r\n\r\n.table-secondary th,\r\n.table-secondary td,\r\n.table-secondary thead th,\r\n.table-secondary tbody + tbody {\r\n    border-color: #b3b7bb;\r\n}\r\n\r\n.table-hover .table-secondary:hover {\r\n    background-color: #c8cbcf;\r\n}\r\n\r\n.table-hover .table-secondary:hover > td,\r\n.table-hover .table-secondary:hover > th {\r\n    background-color: #c8cbcf;\r\n}\r\n\r\n.table-success,\r\n.table-success > th,\r\n.table-success > td {\r\n    background-color: #c3e6cb;\r\n}\r\n\r\n.table-success th,\r\n.table-success td,\r\n.table-success thead th,\r\n.table-success tbody + tbody {\r\n    border-color: #8fd19e;\r\n}\r\n\r\n.table-hover .table-success:hover {\r\n    background-color: #b1dfbb;\r\n}\r\n\r\n.table-hover .table-success:hover > td,\r\n.table-hover .table-success:hover > th {\r\n    background-color: #b1dfbb;\r\n}\r\n\r\n.table-info,\r\n.table-info > th,\r\n.table-info > td {\r\n    background-color: #bee5eb;\r\n}\r\n\r\n.table-info th,\r\n.table-info td,\r\n.table-info thead th,\r\n.table-info tbody + tbody {\r\n    border-color: #86cfda;\r\n}\r\n\r\n.table-hover .table-info:hover {\r\n    background-color: #abdde5;\r\n}\r\n\r\n.table-hover .table-info:hover > td,\r\n.table-hover .table-info:hover > th {\r\n    background-color: #abdde5;\r\n}\r\n\r\n.table-warning,\r\n.table-warning > th,\r\n.table-warning > td {\r\n    background-color: #ffeeba;\r\n}\r\n\r\n.table-warning th,\r\n.table-warning td,\r\n.table-warning thead th,\r\n.table-warning tbody + tbody {\r\n    border-color: #ffdf7e;\r\n}\r\n\r\n.table-hover .table-warning:hover {\r\n    background-color: #ffe8a1;\r\n}\r\n\r\n.table-hover .table-warning:hover > td,\r\n.table-hover .table-warning:hover > th {\r\n    background-color: #ffe8a1;\r\n}\r\n\r\n.table-danger,\r\n.table-danger > th,\r\n.table-danger > td {\r\n    background-color: #f5c6cb;\r\n}\r\n\r\n.table-danger th,\r\n.table-danger td,\r\n.table-danger thead th,\r\n.table-danger tbody + tbody {\r\n    border-color: #ed969e;\r\n}\r\n\r\n.table-hover .table-danger:hover {\r\n    background-color: #f1b0b7;\r\n}\r\n\r\n.table-hover .table-danger:hover > td,\r\n.table-hover .table-danger:hover > th {\r\n    background-color: #f1b0b7;\r\n}\r\n\r\n.table-light,\r\n.table-light > th,\r\n.table-light > td {\r\n    background-color: #fdfdfe;\r\n}\r\n\r\n.table-light th,\r\n.table-light td,\r\n.table-light thead th,\r\n.table-light tbody + tbody {\r\n    border-color: #fbfcfc;\r\n}\r\n\r\n.table-hover .table-light:hover {\r\n    background-color: #ececf6;\r\n}\r\n\r\n.table-hover .table-light:hover > td,\r\n.table-hover .table-light:hover > th {\r\n    background-color: #ececf6;\r\n}\r\n\r\n.table-dark,\r\n.table-dark > th,\r\n.table-dark > td {\r\n    background-color: #c6c8ca;\r\n}\r\n\r\n.table-dark th,\r\n.table-dark td,\r\n.table-dark thead th,\r\n.table-dark tbody + tbody {\r\n    border-color: #95999c;\r\n}\r\n\r\n.table-hover .table-dark:hover {\r\n    background-color: #b9bbbe;\r\n}\r\n\r\n.table-hover .table-dark:hover > td,\r\n.table-hover .table-dark:hover > th {\r\n    background-color: #b9bbbe;\r\n}\r\n\r\n.table-active,\r\n.table-active > th,\r\n.table-active > td {\r\n    background-color: rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.table-hover .table-active:hover {\r\n    background-color: rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.table-hover .table-active:hover > td,\r\n.table-hover .table-active:hover > th {\r\n    background-color: rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.table .thead-dark th {\r\n    color: #fff;\r\n    background-color: #343a40;\r\n    border-color: #454d55;\r\n}\r\n\r\n.table .thead-light th {\r\n    color: #495057;\r\n    background-color: #e9ecef;\r\n    border-color: #dee2e6;\r\n}\r\n\r\n.table-dark {\r\n    color: #fff;\r\n    background-color: #343a40;\r\n}\r\n\r\n.table-dark th,\r\n.table-dark td,\r\n.table-dark thead th {\r\n    border-color: #454d55;\r\n}\r\n\r\n.table-dark.table-bordered {\r\n    border: 0;\r\n}\r\n\r\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\r\n    background-color: rgba(255, 255, 255, 0.05);\r\n}\r\n\r\n.table-dark.table-hover tbody tr:hover {\r\n    color: #fff;\r\n    background-color: rgba(255, 255, 255, 0.075);\r\n}\r\n\r\n@media (max-width: 575.98px) {\r\n    .table-responsive-sm {\r\n        display: block;\r\n        width: 100%;\r\n        overflow-x: auto;\r\n        -webkit-overflow-scrolling: touch;\r\n    }\r\n    .table-responsive-sm > .table-bordered {\r\n        border: 0;\r\n    }\r\n}\r\n\r\n@media (max-width: 767.98px) {\r\n    .table-responsive-md {\r\n        display: block;\r\n        width: 100%;\r\n        overflow-x: auto;\r\n        -webkit-overflow-scrolling: touch;\r\n    }\r\n    .table-responsive-md > .table-bordered {\r\n        border: 0;\r\n    }\r\n}\r\n\r\n@media (max-width: 991.98px) {\r\n    .table-responsive-lg {\r\n        display: block;\r\n        width: 100%;\r\n        overflow-x: auto;\r\n        -webkit-overflow-scrolling: touch;\r\n    }\r\n    .table-responsive-lg > .table-bordered {\r\n        border: 0;\r\n    }\r\n}\r\n\r\n@media (max-width: 1199.98px) {\r\n    .table-responsive-xl {\r\n        display: block;\r\n        width: 100%;\r\n        overflow-x: auto;\r\n        -webkit-overflow-scrolling: touch;\r\n    }\r\n    .table-responsive-xl > .table-bordered {\r\n        border: 0;\r\n    }\r\n}\r\n\r\n.table-responsive {\r\n    display: block;\r\n    width: 100%;\r\n    overflow-x: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n.table-responsive > .table-bordered {\r\n    border: 0;\r\n}\r\n\r\n.form-control {\r\n    display: block;\r\n    width: 100%;\r\n    height: calc(1.5em + 0.75rem + 2px);\r\n    padding: 0.375rem 0.75rem;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid #ced4da;\r\n    border-radius: 0.25rem;\r\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n    .form-control {\r\n        transition: none;\r\n    }\r\n}\r\n\r\n.form-control::-ms-expand {\r\n    background-color: transparent;\r\n    border: 0;\r\n}\r\n\r\n.form-control:-moz-focusring {\r\n    color: transparent;\r\n    text-shadow: 0 0 0 #495057;\r\n}\r\n\r\n.form-control:focus {\r\n    color: #495057;\r\n    background-color: #fff;\r\n    border-color: #80bdff;\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n}\r\n\r\n.form-control::-webkit-input-placeholder {\r\n    color: #6c757d;\r\n    opacity: 1;\r\n}\r\n\r\n.form-control::-moz-placeholder {\r\n    color: #6c757d;\r\n    opacity: 1;\r\n}\r\n\r\n.form-control:-ms-input-placeholder {\r\n    color: #6c757d;\r\n    opacity: 1;\r\n}\r\n\r\n.form-control::-ms-input-placeholder {\r\n    color: #6c757d;\r\n    opacity: 1;\r\n}\r\n\r\n.form-control::placeholder {\r\n    color: #6c757d;\r\n    opacity: 1;\r\n}\r\n\r\n.form-control:disabled,\r\n.form-control[readonly] {\r\n    background-color: #e9ecef;\r\n    opacity: 1;\r\n}\r\n\r\ninput[type='date'].form-control,\r\ninput[type='time'].form-control,\r\ninput[type='datetime-local'].form-control,\r\ninput[type='month'].form-control {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n}\r\n\r\nselect.form-control:focus::-ms-value {\r\n    color: #495057;\r\n    background-color: #fff;\r\n}\r\n\r\n.form-control-file,\r\n.form-control-range {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.col-form-label {\r\n    padding-top: calc(0.375rem + 1px);\r\n    padding-bottom: calc(0.375rem + 1px);\r\n    margin-bottom: 0;\r\n    font-size: inherit;\r\n    line-height: 1.5;\r\n}\r\n\r\n.col-form-label-lg {\r\n    padding-top: calc(0.5rem + 1px);\r\n    padding-bottom: calc(0.5rem + 1px);\r\n    font-size: 1.25rem;\r\n    line-height: 1.5;\r\n}\r\n\r\n.col-form-label-sm {\r\n    padding-top: calc(0.25rem + 1px);\r\n    padding-bottom: calc(0.25rem + 1px);\r\n    font-size: 0.875rem;\r\n    line-height: 1.5;\r\n}\r\n\r\n.form-control-plaintext {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 0.375rem 0;\r\n    margin-bottom: 0;\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n    color: #212529;\r\n    background-color: transparent;\r\n    border: solid transparent;\r\n    border-width: 1px 0;\r\n}\r\n\r\n.form-control-plaintext.form-control-sm,\r\n.form-control-plaintext.form-control-lg {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n}\r\n\r\n.form-control-sm {\r\n    height: calc(1.5em + 0.5rem + 2px);\r\n    padding: 0.25rem 0.5rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.5;\r\n    border-radius: 0.2rem;\r\n}\r\n\r\n.form-control-lg {\r\n    height: calc(1.5em + 1rem + 2px);\r\n    padding: 0.5rem 1rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1.5;\r\n    border-radius: 0.3rem;\r\n}\r\n\r\nselect.form-control[size],\r\nselect.form-control[multiple] {\r\n    height: auto;\r\n}\r\n\r\ntextarea.form-control {\r\n    height: auto;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.form-text {\r\n    display: block;\r\n    margin-top: 0.25rem;\r\n}\r\n\r\n.form-row {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    margin-right: -5px;\r\n    margin-left: -5px;\r\n}\r\n\r\n.form-row > .col,\r\n.form-row > [class*='col-'] {\r\n    padding-right: 5px;\r\n    padding-left: 5px;\r\n}\r\n\r\n.form-check {\r\n    position: relative;\r\n    display: block;\r\n    padding-left: 1.25rem;\r\n}\r\n\r\n.form-check-input {\r\n    position: absolute;\r\n    margin-top: 0.3rem;\r\n    margin-left: -1.25rem;\r\n}\r\n\r\n.form-check-input[disabled] ~ .form-check-label,\r\n.form-check-input:disabled ~ .form-check-label {\r\n    color: #6c757d;\r\n}\r\n\r\n.form-check-label {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.form-check-inline {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    padding-left: 0;\r\n    margin-right: 0.75rem;\r\n}\r\n\r\n.form-check-inline .form-check-input {\r\n    position: static;\r\n    margin-top: 0;\r\n    margin-right: 0.3125rem;\r\n    margin-left: 0;\r\n}\r\n\r\n.valid-feedback {\r\n    display: none;\r\n    width: 100%;\r\n    margin-top: 0.25rem;\r\n    font-size: 80%;\r\n    color: #28a745;\r\n}\r\n\r\n.valid-tooltip {\r\n    position: absolute;\r\n    top: 100%;\r\n    z-index: 5;\r\n    display: none;\r\n    max-width: 100%;\r\n    padding: 0.25rem 0.5rem;\r\n    margin-top: 0.1rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.5;\r\n    color: #fff;\r\n    background-color: rgba(40, 167, 69, 0.9);\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.was-validated :valid ~ .valid-feedback,\r\n.was-validated :valid ~ .valid-tooltip,\r\n.is-valid ~ .valid-feedback,\r\n.is-valid ~ .valid-tooltip {\r\n    display: block;\r\n}\r\n\r\n.was-validated .form-control:valid,\r\n.form-control.is-valid {\r\n    border-color: #28a745;\r\n    padding-right: calc(1.5em + 0.75rem);\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\r\n    background-repeat: no-repeat;\r\n    background-position: right calc(0.375em + 0.1875rem) center;\r\n    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\r\n}\r\n\r\n.was-validated .form-control:valid:focus,\r\n.form-control.is-valid:focus {\r\n    border-color: #28a745;\r\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\r\n}\r\n\r\n.was-validated textarea.form-control:valid,\r\ntextarea.form-control.is-valid {\r\n    padding-right: calc(1.5em + 0.75rem);\r\n    background-position: top calc(0.375em + 0.1875rem) right\r\n        calc(0.375em + 0.1875rem);\r\n}\r\n\r\n.was-validated .custom-select:valid,\r\n.custom-select.is-valid {\r\n    border-color: #28a745;\r\n    padding-right: calc(0.75em + 2.3125rem);\r\n    background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\")\r\n            no-repeat right 0.75rem center/8px 10px,\r\n        url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\")\r\n            #fff no-repeat center right 1.75rem / calc(0.75em + 0.375rem)\r\n            calc(0.75em + 0.375rem);\r\n}\r\n\r\n.was-validated .custom-select:valid:focus,\r\n.custom-select.is-valid:focus {\r\n    border-color: #28a745;\r\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\r\n}\r\n\r\n.was-validated .form-check-input:valid ~ .form-check-label,\r\n.form-check-input.is-valid ~ .form-check-label {\r\n    color: #28a745;\r\n}\r\n\r\n.was-validated .form-check-input:valid ~ .valid-feedback,\r\n.was-validated .form-check-input:valid ~ .valid-tooltip,\r\n.form-check-input.is-valid ~ .valid-feedback,\r\n.form-check-input.is-valid ~ .valid-tooltip {\r\n    display: block;\r\n}\r\n\r\n.was-validated .custom-control-input:valid ~ .custom-control-label,\r\n.custom-control-input.is-valid ~ .custom-control-label {\r\n    color: #28a745;\r\n}\r\n\r\n.was-validated .custom-control-input:valid ~ .custom-control-label::before,\r\n.custom-control-input.is-valid ~ .custom-control-label::before {\r\n    border-color: #28a745;\r\n}\r\n\r\n.was-validated\r\n    .custom-control-input:valid:checked\r\n    ~ .custom-control-label::before,\r\n.custom-control-input.is-valid:checked ~ .custom-control-label::before {\r\n    border-color: #34ce57;\r\n    background-color: #34ce57;\r\n}\r\n\r\n.was-validated\r\n    .custom-control-input:valid:focus\r\n    ~ .custom-control-label::before,\r\n.custom-control-input.is-valid:focus ~ .custom-control-label::before {\r\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\r\n}\r\n\r\n.was-validated\r\n    .custom-control-input:valid:focus:not(:checked)\r\n    ~ .custom-control-label::before,\r\n.custom-control-input.is-valid:focus:not(:checked)\r\n    ~ .custom-control-label::before {\r\n    border-color: #28a745;\r\n}\r\n\r\n.was-validated .custom-file-input:valid ~ .custom-file-label,\r\n.custom-file-input.is-valid ~ .custom-file-label {\r\n    border-color: #28a745;\r\n}\r\n\r\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label,\r\n.custom-file-input.is-valid:focus ~ .custom-file-label {\r\n    border-color: #28a745;\r\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\r\n}\r\n\r\n.invalid-feedback {\r\n    display: none;\r\n    width: 100%;\r\n    margin-top: 0.25rem;\r\n    font-size: 80%;\r\n    color: #dc3545;\r\n}\r\n\r\n.invalid-tooltip {\r\n    position: absolute;\r\n    top: 100%;\r\n    z-index: 5;\r\n    display: none;\r\n    max-width: 100%;\r\n    padding: 0.25rem 0.5rem;\r\n    margin-top: 0.1rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.5;\r\n    color: #fff;\r\n    background-color: rgba(220, 53, 69, 0.9);\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.was-validated :invalid ~ .invalid-feedback,\r\n.was-validated :invalid ~ .invalid-tooltip,\r\n.is-invalid ~ .invalid-feedback,\r\n.is-invalid ~ .invalid-tooltip {\r\n    display: block;\r\n}\r\n\r\n.was-validated .form-control:invalid,\r\n.form-control.is-invalid {\r\n    border-color: #dc3545;\r\n    padding-right: calc(1.5em + 0.75rem);\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\r\n    background-repeat: no-repeat;\r\n    background-position: right calc(0.375em + 0.1875rem) center;\r\n    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\r\n}\r\n\r\n.was-validated .form-control:invalid:focus,\r\n.form-control.is-invalid:focus {\r\n    border-color: #dc3545;\r\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\r\n}\r\n\r\n.was-validated textarea.form-control:invalid,\r\ntextarea.form-control.is-invalid {\r\n    padding-right: calc(1.5em + 0.75rem);\r\n    background-position: top calc(0.375em + 0.1875rem) right\r\n        calc(0.375em + 0.1875rem);\r\n}\r\n\r\n.was-validated .custom-select:invalid,\r\n.custom-select.is-invalid {\r\n    border-color: #dc3545;\r\n    padding-right: calc(0.75em + 2.3125rem);\r\n    background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\")\r\n            no-repeat right 0.75rem center/8px 10px,\r\n        url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")\r\n            #fff no-repeat center right 1.75rem / calc(0.75em + 0.375rem)\r\n            calc(0.75em + 0.375rem);\r\n}\r\n\r\n.was-validated .custom-select:invalid:focus,\r\n.custom-select.is-invalid:focus {\r\n    border-color: #dc3545;\r\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\r\n}\r\n\r\n.was-validated .form-check-input:invalid ~ .form-check-label,\r\n.form-check-input.is-invalid ~ .form-check-label {\r\n    color: #dc3545;\r\n}\r\n\r\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\r\n.was-validated .form-check-input:invalid ~ .invalid-tooltip,\r\n.form-check-input.is-invalid ~ .invalid-feedback,\r\n.form-check-input.is-invalid ~ .invalid-tooltip {\r\n    display: block;\r\n}\r\n\r\n.was-validated .custom-control-input:invalid ~ .custom-control-label,\r\n.custom-control-input.is-invalid ~ .custom-control-label {\r\n    color: #dc3545;\r\n}\r\n\r\n.was-validated .custom-control-input:invalid ~ .custom-control-label::before,\r\n.custom-control-input.is-invalid ~ .custom-control-label::before {\r\n    border-color: #dc3545;\r\n}\r\n\r\n.was-validated\r\n    .custom-control-input:invalid:checked\r\n    ~ .custom-control-label::before,\r\n.custom-control-input.is-invalid:checked ~ .custom-control-label::before {\r\n    border-color: #e4606d;\r\n    background-color: #e4606d;\r\n}\r\n\r\n.was-validated\r\n    .custom-control-input:invalid:focus\r\n    ~ .custom-control-label::before,\r\n.custom-control-input.is-invalid:focus ~ .custom-control-label::before {\r\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\r\n}\r\n\r\n.was-validated\r\n    .custom-control-input:invalid:focus:not(:checked)\r\n    ~ .custom-control-label::before,\r\n.custom-control-input.is-invalid:focus:not(:checked)\r\n    ~ .custom-control-label::before {\r\n    border-color: #dc3545;\r\n}\r\n\r\n.was-validated .custom-file-input:invalid ~ .custom-file-label,\r\n.custom-file-input.is-invalid ~ .custom-file-label {\r\n    border-color: #dc3545;\r\n}\r\n\r\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label,\r\n.custom-file-input.is-invalid:focus ~ .custom-file-label {\r\n    border-color: #dc3545;\r\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\r\n}\r\n\r\n.form-inline {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-flow: row wrap;\r\n    flex-flow: row wrap;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n}\r\n\r\n.form-inline .form-check {\r\n    width: 100%;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .form-inline label {\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-align: center;\r\n        align-items: center;\r\n        -ms-flex-pack: center;\r\n        justify-content: center;\r\n        margin-bottom: 0;\r\n    }\r\n    .form-inline .form-group {\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex: 0 0 auto;\r\n        flex: 0 0 auto;\r\n        -ms-flex-flow: row wrap;\r\n        flex-flow: row wrap;\r\n        -ms-flex-align: center;\r\n        align-items: center;\r\n        margin-bottom: 0;\r\n    }\r\n    .form-inline .form-control {\r\n        display: inline-block;\r\n        width: auto;\r\n        vertical-align: middle;\r\n    }\r\n    .form-inline .form-control-plaintext {\r\n        display: inline-block;\r\n    }\r\n    .form-inline .input-group,\r\n    .form-inline .custom-select {\r\n        width: auto;\r\n    }\r\n    .form-inline .form-check {\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-align: center;\r\n        align-items: center;\r\n        -ms-flex-pack: center;\r\n        justify-content: center;\r\n        width: auto;\r\n        padding-left: 0;\r\n    }\r\n    .form-inline .form-check-input {\r\n        position: relative;\r\n        -ms-flex-negative: 0;\r\n        flex-shrink: 0;\r\n        margin-top: 0;\r\n        margin-right: 0.25rem;\r\n        margin-left: 0;\r\n    }\r\n    .form-inline .custom-control {\r\n        -ms-flex-align: center;\r\n        align-items: center;\r\n        -ms-flex-pack: center;\r\n        justify-content: center;\r\n    }\r\n    .form-inline .custom-control-label {\r\n        margin-bottom: 0;\r\n    }\r\n}\r\n\r\n.btn {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    color: #212529;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    background-color: transparent;\r\n    border: 1px solid transparent;\r\n    padding: 0.375rem 0.75rem;\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n    border-radius: 0.25rem;\r\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\r\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n    .btn {\r\n        transition: none;\r\n    }\r\n}\r\n\r\n.btn:hover {\r\n    color: #212529;\r\n    text-decoration: none;\r\n}\r\n\r\n.btn:focus,\r\n.btn.focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n}\r\n\r\n.btn.disabled,\r\n.btn:disabled {\r\n    opacity: 0.65;\r\n}\r\n\r\n.btn:not(:disabled):not(.disabled) {\r\n    cursor: pointer;\r\n}\r\n\r\na.btn.disabled,\r\nfieldset:disabled a.btn {\r\n    pointer-events: none;\r\n}\r\n\r\n.btn-primary {\r\n    color: #fff;\r\n    background-color: #007bff;\r\n    border-color: #007bff;\r\n}\r\n\r\n.btn-primary:hover {\r\n    color: #fff;\r\n    background-color: #0069d9;\r\n    border-color: #0062cc;\r\n}\r\n\r\n.btn-primary:focus,\r\n.btn-primary.focus {\r\n    color: #fff;\r\n    background-color: #0069d9;\r\n    border-color: #0062cc;\r\n    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);\r\n}\r\n\r\n.btn-primary.disabled,\r\n.btn-primary:disabled {\r\n    color: #fff;\r\n    background-color: #007bff;\r\n    border-color: #007bff;\r\n}\r\n\r\n.btn-primary:not(:disabled):not(.disabled):active,\r\n.btn-primary:not(:disabled):not(.disabled).active,\r\n.show > .btn-primary.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #0062cc;\r\n    border-color: #005cbf;\r\n}\r\n\r\n.btn-primary:not(:disabled):not(.disabled):active:focus,\r\n.btn-primary:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-primary.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);\r\n}\r\n\r\n.btn-secondary {\r\n    color: #fff;\r\n    background-color: #6c757d;\r\n    border-color: #6c757d;\r\n}\r\n\r\n.btn-secondary:hover {\r\n    color: #fff;\r\n    background-color: #5a6268;\r\n    border-color: #545b62;\r\n}\r\n\r\n.btn-secondary:focus,\r\n.btn-secondary.focus {\r\n    color: #fff;\r\n    background-color: #5a6268;\r\n    border-color: #545b62;\r\n    box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);\r\n}\r\n\r\n.btn-secondary.disabled,\r\n.btn-secondary:disabled {\r\n    color: #fff;\r\n    background-color: #6c757d;\r\n    border-color: #6c757d;\r\n}\r\n\r\n.btn-secondary:not(:disabled):not(.disabled):active,\r\n.btn-secondary:not(:disabled):not(.disabled).active,\r\n.show > .btn-secondary.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #545b62;\r\n    border-color: #4e555b;\r\n}\r\n\r\n.btn-secondary:not(:disabled):not(.disabled):active:focus,\r\n.btn-secondary:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-secondary.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);\r\n}\r\n\r\n.btn-success {\r\n    color: #fff;\r\n    background-color: #28a745;\r\n    border-color: #28a745;\r\n}\r\n\r\n.btn-success:hover {\r\n    color: #fff;\r\n    background-color: #218838;\r\n    border-color: #1e7e34;\r\n}\r\n\r\n.btn-success:focus,\r\n.btn-success.focus {\r\n    color: #fff;\r\n    background-color: #218838;\r\n    border-color: #1e7e34;\r\n    box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);\r\n}\r\n\r\n.btn-success.disabled,\r\n.btn-success:disabled {\r\n    color: #fff;\r\n    background-color: #28a745;\r\n    border-color: #28a745;\r\n}\r\n\r\n.btn-success:not(:disabled):not(.disabled):active,\r\n.btn-success:not(:disabled):not(.disabled).active,\r\n.show > .btn-success.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #1e7e34;\r\n    border-color: #1c7430;\r\n}\r\n\r\n.btn-success:not(:disabled):not(.disabled):active:focus,\r\n.btn-success:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-success.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);\r\n}\r\n\r\n.btn-info {\r\n    color: #fff;\r\n    background-color: #17a2b8;\r\n    border-color: #17a2b8;\r\n}\r\n\r\n.btn-info:hover {\r\n    color: #fff;\r\n    background-color: #138496;\r\n    border-color: #117a8b;\r\n}\r\n\r\n.btn-info:focus,\r\n.btn-info.focus {\r\n    color: #fff;\r\n    background-color: #138496;\r\n    border-color: #117a8b;\r\n    box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\r\n}\r\n\r\n.btn-info.disabled,\r\n.btn-info:disabled {\r\n    color: #fff;\r\n    background-color: #17a2b8;\r\n    border-color: #17a2b8;\r\n}\r\n\r\n.btn-info:not(:disabled):not(.disabled):active,\r\n.btn-info:not(:disabled):not(.disabled).active,\r\n.show > .btn-info.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #117a8b;\r\n    border-color: #10707f;\r\n}\r\n\r\n.btn-info:not(:disabled):not(.disabled):active:focus,\r\n.btn-info:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-info.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\r\n}\r\n\r\n.btn-warning {\r\n    color: #212529;\r\n    background-color: #ffc107;\r\n    border-color: #ffc107;\r\n}\r\n\r\n.btn-warning:hover {\r\n    color: #212529;\r\n    background-color: #e0a800;\r\n    border-color: #d39e00;\r\n}\r\n\r\n.btn-warning:focus,\r\n.btn-warning.focus {\r\n    color: #212529;\r\n    background-color: #e0a800;\r\n    border-color: #d39e00;\r\n    box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);\r\n}\r\n\r\n.btn-warning.disabled,\r\n.btn-warning:disabled {\r\n    color: #212529;\r\n    background-color: #ffc107;\r\n    border-color: #ffc107;\r\n}\r\n\r\n.btn-warning:not(:disabled):not(.disabled):active,\r\n.btn-warning:not(:disabled):not(.disabled).active,\r\n.show > .btn-warning.dropdown-toggle {\r\n    color: #212529;\r\n    background-color: #d39e00;\r\n    border-color: #c69500;\r\n}\r\n\r\n.btn-warning:not(:disabled):not(.disabled):active:focus,\r\n.btn-warning:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-warning.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);\r\n}\r\n\r\n.btn-danger {\r\n    color: #fff;\r\n    background-color: #dc3545;\r\n    border-color: #dc3545;\r\n}\r\n\r\n.btn-danger:hover {\r\n    color: #fff;\r\n    background-color: #c82333;\r\n    border-color: #bd2130;\r\n}\r\n\r\n.btn-danger:focus,\r\n.btn-danger.focus {\r\n    color: #fff;\r\n    background-color: #c82333;\r\n    border-color: #bd2130;\r\n    box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);\r\n}\r\n\r\n.btn-danger.disabled,\r\n.btn-danger:disabled {\r\n    color: #fff;\r\n    background-color: #dc3545;\r\n    border-color: #dc3545;\r\n}\r\n\r\n.btn-danger:not(:disabled):not(.disabled):active,\r\n.btn-danger:not(:disabled):not(.disabled).active,\r\n.show > .btn-danger.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #bd2130;\r\n    border-color: #b21f2d;\r\n}\r\n\r\n.btn-danger:not(:disabled):not(.disabled):active:focus,\r\n.btn-danger:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-danger.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);\r\n}\r\n\r\n.btn-light {\r\n    color: #212529;\r\n    background-color: #f8f9fa;\r\n    border-color: #f8f9fa;\r\n}\r\n\r\n.btn-light:hover {\r\n    color: #212529;\r\n    background-color: #e2e6ea;\r\n    border-color: #dae0e5;\r\n}\r\n\r\n.btn-light:focus,\r\n.btn-light.focus {\r\n    color: #212529;\r\n    background-color: #e2e6ea;\r\n    border-color: #dae0e5;\r\n    box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\r\n}\r\n\r\n.btn-light.disabled,\r\n.btn-light:disabled {\r\n    color: #212529;\r\n    background-color: #f8f9fa;\r\n    border-color: #f8f9fa;\r\n}\r\n\r\n.btn-light:not(:disabled):not(.disabled):active,\r\n.btn-light:not(:disabled):not(.disabled).active,\r\n.show > .btn-light.dropdown-toggle {\r\n    color: #212529;\r\n    background-color: #dae0e5;\r\n    border-color: #d3d9df;\r\n}\r\n\r\n.btn-light:not(:disabled):not(.disabled):active:focus,\r\n.btn-light:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-light.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\r\n}\r\n\r\n.btn-dark {\r\n    color: #fff;\r\n    background-color: #343a40;\r\n    border-color: #343a40;\r\n}\r\n\r\n.btn-dark:hover {\r\n    color: #fff;\r\n    background-color: #23272b;\r\n    border-color: #1d2124;\r\n}\r\n\r\n.btn-dark:focus,\r\n.btn-dark.focus {\r\n    color: #fff;\r\n    background-color: #23272b;\r\n    border-color: #1d2124;\r\n    box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\r\n}\r\n\r\n.btn-dark.disabled,\r\n.btn-dark:disabled {\r\n    color: #fff;\r\n    background-color: #343a40;\r\n    border-color: #343a40;\r\n}\r\n\r\n.btn-dark:not(:disabled):not(.disabled):active,\r\n.btn-dark:not(:disabled):not(.disabled).active,\r\n.show > .btn-dark.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #1d2124;\r\n    border-color: #171a1d;\r\n}\r\n\r\n.btn-dark:not(:disabled):not(.disabled):active:focus,\r\n.btn-dark:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-dark.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\r\n}\r\n\r\n.btn-outline-primary {\r\n    color: #007bff;\r\n    border-color: #007bff;\r\n}\r\n\r\n.btn-outline-primary:hover {\r\n    color: #fff;\r\n    background-color: #007bff;\r\n    border-color: #007bff;\r\n}\r\n\r\n.btn-outline-primary:focus,\r\n.btn-outline-primary.focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\r\n}\r\n\r\n.btn-outline-primary.disabled,\r\n.btn-outline-primary:disabled {\r\n    color: #007bff;\r\n    background-color: transparent;\r\n}\r\n\r\n.btn-outline-primary:not(:disabled):not(.disabled):active,\r\n.btn-outline-primary:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-primary.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #007bff;\r\n    border-color: #007bff;\r\n}\r\n\r\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus,\r\n.btn-outline-primary:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-primary.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\r\n}\r\n\r\n.btn-outline-secondary {\r\n    color: #6c757d;\r\n    border-color: #6c757d;\r\n}\r\n\r\n.btn-outline-secondary:hover {\r\n    color: #fff;\r\n    background-color: #6c757d;\r\n    border-color: #6c757d;\r\n}\r\n\r\n.btn-outline-secondary:focus,\r\n.btn-outline-secondary.focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\r\n}\r\n\r\n.btn-outline-secondary.disabled,\r\n.btn-outline-secondary:disabled {\r\n    color: #6c757d;\r\n    background-color: transparent;\r\n}\r\n\r\n.btn-outline-secondary:not(:disabled):not(.disabled):active,\r\n.btn-outline-secondary:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-secondary.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #6c757d;\r\n    border-color: #6c757d;\r\n}\r\n\r\n.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,\r\n.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-secondary.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\r\n}\r\n\r\n.btn-outline-success {\r\n    color: #28a745;\r\n    border-color: #28a745;\r\n}\r\n\r\n.btn-outline-success:hover {\r\n    color: #fff;\r\n    background-color: #28a745;\r\n    border-color: #28a745;\r\n}\r\n\r\n.btn-outline-success:focus,\r\n.btn-outline-success.focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\r\n}\r\n\r\n.btn-outline-success.disabled,\r\n.btn-outline-success:disabled {\r\n    color: #28a745;\r\n    background-color: transparent;\r\n}\r\n\r\n.btn-outline-success:not(:disabled):not(.disabled):active,\r\n.btn-outline-success:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-success.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #28a745;\r\n    border-color: #28a745;\r\n}\r\n\r\n.btn-outline-success:not(:disabled):not(.disabled):active:focus,\r\n.btn-outline-success:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-success.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\r\n}\r\n\r\n.btn-outline-info {\r\n    color: #17a2b8;\r\n    border-color: #17a2b8;\r\n}\r\n\r\n.btn-outline-info:hover {\r\n    color: #fff;\r\n    background-color: #17a2b8;\r\n    border-color: #17a2b8;\r\n}\r\n\r\n.btn-outline-info:focus,\r\n.btn-outline-info.focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\r\n}\r\n\r\n.btn-outline-info.disabled,\r\n.btn-outline-info:disabled {\r\n    color: #17a2b8;\r\n    background-color: transparent;\r\n}\r\n\r\n.btn-outline-info:not(:disabled):not(.disabled):active,\r\n.btn-outline-info:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-info.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #17a2b8;\r\n    border-color: #17a2b8;\r\n}\r\n\r\n.btn-outline-info:not(:disabled):not(.disabled):active:focus,\r\n.btn-outline-info:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-info.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\r\n}\r\n\r\n.btn-outline-warning {\r\n    color: #ffc107;\r\n    border-color: #ffc107;\r\n}\r\n\r\n.btn-outline-warning:hover {\r\n    color: #212529;\r\n    background-color: #ffc107;\r\n    border-color: #ffc107;\r\n}\r\n\r\n.btn-outline-warning:focus,\r\n.btn-outline-warning.focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\r\n}\r\n\r\n.btn-outline-warning.disabled,\r\n.btn-outline-warning:disabled {\r\n    color: #ffc107;\r\n    background-color: transparent;\r\n}\r\n\r\n.btn-outline-warning:not(:disabled):not(.disabled):active,\r\n.btn-outline-warning:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-warning.dropdown-toggle {\r\n    color: #212529;\r\n    background-color: #ffc107;\r\n    border-color: #ffc107;\r\n}\r\n\r\n.btn-outline-warning:not(:disabled):not(.disabled):active:focus,\r\n.btn-outline-warning:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-warning.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\r\n}\r\n\r\n.btn-outline-danger {\r\n    color: #dc3545;\r\n    border-color: #dc3545;\r\n}\r\n\r\n.btn-outline-danger:hover {\r\n    color: #fff;\r\n    background-color: #dc3545;\r\n    border-color: #dc3545;\r\n}\r\n\r\n.btn-outline-danger:focus,\r\n.btn-outline-danger.focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\r\n}\r\n\r\n.btn-outline-danger.disabled,\r\n.btn-outline-danger:disabled {\r\n    color: #dc3545;\r\n    background-color: transparent;\r\n}\r\n\r\n.btn-outline-danger:not(:disabled):not(.disabled):active,\r\n.btn-outline-danger:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-danger.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #dc3545;\r\n    border-color: #dc3545;\r\n}\r\n\r\n.btn-outline-danger:not(:disabled):not(.disabled):active:focus,\r\n.btn-outline-danger:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-danger.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\r\n}\r\n\r\n.btn-outline-light {\r\n    color: #f8f9fa;\r\n    border-color: #f8f9fa;\r\n}\r\n\r\n.btn-outline-light:hover {\r\n    color: #212529;\r\n    background-color: #f8f9fa;\r\n    border-color: #f8f9fa;\r\n}\r\n\r\n.btn-outline-light:focus,\r\n.btn-outline-light.focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\r\n}\r\n\r\n.btn-outline-light.disabled,\r\n.btn-outline-light:disabled {\r\n    color: #f8f9fa;\r\n    background-color: transparent;\r\n}\r\n\r\n.btn-outline-light:not(:disabled):not(.disabled):active,\r\n.btn-outline-light:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-light.dropdown-toggle {\r\n    color: #212529;\r\n    background-color: #f8f9fa;\r\n    border-color: #f8f9fa;\r\n}\r\n\r\n.btn-outline-light:not(:disabled):not(.disabled):active:focus,\r\n.btn-outline-light:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-light.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\r\n}\r\n\r\n.btn-outline-dark {\r\n    color: #343a40;\r\n    border-color: #343a40;\r\n}\r\n\r\n.btn-outline-dark:hover {\r\n    color: #fff;\r\n    background-color: #343a40;\r\n    border-color: #343a40;\r\n}\r\n\r\n.btn-outline-dark:focus,\r\n.btn-outline-dark.focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\r\n}\r\n\r\n.btn-outline-dark.disabled,\r\n.btn-outline-dark:disabled {\r\n    color: #343a40;\r\n    background-color: transparent;\r\n}\r\n\r\n.btn-outline-dark:not(:disabled):not(.disabled):active,\r\n.btn-outline-dark:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-dark.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #343a40;\r\n    border-color: #343a40;\r\n}\r\n\r\n.btn-outline-dark:not(:disabled):not(.disabled):active:focus,\r\n.btn-outline-dark:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-dark.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\r\n}\r\n\r\n.btn-link {\r\n    font-weight: 400;\r\n    color: #007bff;\r\n    text-decoration: none;\r\n}\r\n\r\n.btn-link:hover {\r\n    color: #0056b3;\r\n    text-decoration: underline;\r\n}\r\n\r\n.btn-link:focus,\r\n.btn-link.focus {\r\n    text-decoration: underline;\r\n}\r\n\r\n.btn-link:disabled,\r\n.btn-link.disabled {\r\n    color: #6c757d;\r\n    pointer-events: none;\r\n}\r\n\r\n.btn-lg,\r\n.btn-group-lg > .btn {\r\n    padding: 0.5rem 1rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1.5;\r\n    border-radius: 0.3rem;\r\n}\r\n\r\n.btn-sm,\r\n.btn-group-sm > .btn {\r\n    padding: 0.25rem 0.5rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.5;\r\n    border-radius: 0.2rem;\r\n}\r\n\r\n.btn-block {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.btn-block + .btn-block {\r\n    margin-top: 0.5rem;\r\n}\r\n\r\ninput[type='submit'].btn-block,\r\ninput[type='reset'].btn-block,\r\ninput[type='button'].btn-block {\r\n    width: 100%;\r\n}\r\n\r\n.fade {\r\n    transition: opacity 0.15s linear;\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n    .fade {\r\n        transition: none;\r\n    }\r\n}\r\n\r\n.fade:not(.show) {\r\n    opacity: 0;\r\n}\r\n\r\n.collapse:not(.show) {\r\n    display: none;\r\n}\r\n\r\n.collapsing {\r\n    position: relative;\r\n    height: 0;\r\n    overflow: hidden;\r\n    transition: height 0.35s ease;\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n    .collapsing {\r\n        transition: none;\r\n    }\r\n}\r\n\r\n.dropup,\r\n.dropright,\r\n.dropdown,\r\n.dropleft {\r\n    position: relative;\r\n}\r\n\r\n.dropdown-toggle {\r\n    white-space: nowrap;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n    display: inline-block;\r\n    margin-left: 0.255em;\r\n    vertical-align: 0.255em;\r\n    content: '';\r\n    border-top: 0.3em solid;\r\n    border-right: 0.3em solid transparent;\r\n    border-bottom: 0;\r\n    border-left: 0.3em solid transparent;\r\n}\r\n\r\n.dropdown-toggle:empty::after {\r\n    margin-left: 0;\r\n}\r\n\r\n.dropdown-menu {\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 0;\r\n    z-index: 1000;\r\n    display: none;\r\n    float: left;\r\n    min-width: 10rem;\r\n    padding: 0.5rem 0;\r\n    margin: 0.125rem 0 0;\r\n    font-size: 1rem;\r\n    color: #212529;\r\n    text-align: left;\r\n    list-style: none;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0, 0, 0, 0.15);\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.dropdown-menu-left {\r\n    right: auto;\r\n    left: 0;\r\n}\r\n\r\n.dropdown-menu-right {\r\n    right: 0;\r\n    left: auto;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .dropdown-menu-sm-left {\r\n        right: auto;\r\n        left: 0;\r\n    }\r\n    .dropdown-menu-sm-right {\r\n        right: 0;\r\n        left: auto;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .dropdown-menu-md-left {\r\n        right: auto;\r\n        left: 0;\r\n    }\r\n    .dropdown-menu-md-right {\r\n        right: 0;\r\n        left: auto;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .dropdown-menu-lg-left {\r\n        right: auto;\r\n        left: 0;\r\n    }\r\n    .dropdown-menu-lg-right {\r\n        right: 0;\r\n        left: auto;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .dropdown-menu-xl-left {\r\n        right: auto;\r\n        left: 0;\r\n    }\r\n    .dropdown-menu-xl-right {\r\n        right: 0;\r\n        left: auto;\r\n    }\r\n}\r\n\r\n.dropup .dropdown-menu {\r\n    top: auto;\r\n    bottom: 100%;\r\n    margin-top: 0;\r\n    margin-bottom: 0.125rem;\r\n}\r\n\r\n.dropup .dropdown-toggle::after {\r\n    display: inline-block;\r\n    margin-left: 0.255em;\r\n    vertical-align: 0.255em;\r\n    content: '';\r\n    border-top: 0;\r\n    border-right: 0.3em solid transparent;\r\n    border-bottom: 0.3em solid;\r\n    border-left: 0.3em solid transparent;\r\n}\r\n\r\n.dropup .dropdown-toggle:empty::after {\r\n    margin-left: 0;\r\n}\r\n\r\n.dropright .dropdown-menu {\r\n    top: 0;\r\n    right: auto;\r\n    left: 100%;\r\n    margin-top: 0;\r\n    margin-left: 0.125rem;\r\n}\r\n\r\n.dropright .dropdown-toggle::after {\r\n    display: inline-block;\r\n    margin-left: 0.255em;\r\n    vertical-align: 0.255em;\r\n    content: '';\r\n    border-top: 0.3em solid transparent;\r\n    border-right: 0;\r\n    border-bottom: 0.3em solid transparent;\r\n    border-left: 0.3em solid;\r\n}\r\n\r\n.dropright .dropdown-toggle:empty::after {\r\n    margin-left: 0;\r\n}\r\n\r\n.dropright .dropdown-toggle::after {\r\n    vertical-align: 0;\r\n}\r\n\r\n.dropleft .dropdown-menu {\r\n    top: 0;\r\n    right: 100%;\r\n    left: auto;\r\n    margin-top: 0;\r\n    margin-right: 0.125rem;\r\n}\r\n\r\n.dropleft .dropdown-toggle::after {\r\n    display: inline-block;\r\n    margin-left: 0.255em;\r\n    vertical-align: 0.255em;\r\n    content: '';\r\n}\r\n\r\n.dropleft .dropdown-toggle::after {\r\n    display: none;\r\n}\r\n\r\n.dropleft .dropdown-toggle::before {\r\n    display: inline-block;\r\n    margin-right: 0.255em;\r\n    vertical-align: 0.255em;\r\n    content: '';\r\n    border-top: 0.3em solid transparent;\r\n    border-right: 0.3em solid;\r\n    border-bottom: 0.3em solid transparent;\r\n}\r\n\r\n.dropleft .dropdown-toggle:empty::after {\r\n    margin-left: 0;\r\n}\r\n\r\n.dropleft .dropdown-toggle::before {\r\n    vertical-align: 0;\r\n}\r\n\r\n.dropdown-menu[x-placement^='top'],\r\n.dropdown-menu[x-placement^='right'],\r\n.dropdown-menu[x-placement^='bottom'],\r\n.dropdown-menu[x-placement^='left'] {\r\n    right: auto;\r\n    bottom: auto;\r\n}\r\n\r\n.dropdown-divider {\r\n    height: 0;\r\n    margin: 0.5rem 0;\r\n    overflow: hidden;\r\n    border-top: 1px solid #e9ecef;\r\n}\r\n\r\n.dropdown-item {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 0.25rem 1.5rem;\r\n    clear: both;\r\n    font-weight: 400;\r\n    color: #212529;\r\n    text-align: inherit;\r\n    white-space: nowrap;\r\n    background-color: transparent;\r\n    border: 0;\r\n}\r\n\r\n.dropdown-item:hover,\r\n.dropdown-item:focus {\r\n    color: #16181b;\r\n    text-decoration: none;\r\n    background-color: #f8f9fa;\r\n}\r\n\r\n.dropdown-item.active,\r\n.dropdown-item:active {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    background-color: #007bff;\r\n}\r\n\r\n.dropdown-item.disabled,\r\n.dropdown-item:disabled {\r\n    color: #6c757d;\r\n    pointer-events: none;\r\n    background-color: transparent;\r\n}\r\n\r\n.dropdown-menu.show {\r\n    display: block;\r\n}\r\n\r\n.dropdown-header {\r\n    display: block;\r\n    padding: 0.5rem 1.5rem;\r\n    margin-bottom: 0;\r\n    font-size: 0.875rem;\r\n    color: #6c757d;\r\n    white-space: nowrap;\r\n}\r\n\r\n.dropdown-item-text {\r\n    display: block;\r\n    padding: 0.25rem 1.5rem;\r\n    color: #212529;\r\n}\r\n\r\n.btn-group,\r\n.btn-group-vertical {\r\n    position: relative;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    vertical-align: middle;\r\n}\r\n\r\n.btn-group > .btn,\r\n.btn-group-vertical > .btn {\r\n    position: relative;\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.btn-group > .btn:hover,\r\n.btn-group-vertical > .btn:hover {\r\n    z-index: 1;\r\n}\r\n\r\n.btn-group > .btn:focus,\r\n.btn-group > .btn:active,\r\n.btn-group > .btn.active,\r\n.btn-group-vertical > .btn:focus,\r\n.btn-group-vertical > .btn:active,\r\n.btn-group-vertical > .btn.active {\r\n    z-index: 1;\r\n}\r\n\r\n.btn-toolbar {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    -ms-flex-pack: start;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.btn-toolbar .input-group {\r\n    width: auto;\r\n}\r\n\r\n.btn-group > .btn:not(:first-child),\r\n.btn-group > .btn-group:not(:first-child) {\r\n    margin-left: -1px;\r\n}\r\n\r\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\r\n.btn-group > .btn-group:not(:last-child) > .btn {\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n\r\n.btn-group > .btn:not(:first-child),\r\n.btn-group > .btn-group:not(:first-child) > .btn {\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n}\r\n\r\n.dropdown-toggle-split {\r\n    padding-right: 0.5625rem;\r\n    padding-left: 0.5625rem;\r\n}\r\n\r\n.dropdown-toggle-split::after,\r\n.dropup .dropdown-toggle-split::after,\r\n.dropright .dropdown-toggle-split::after {\r\n    margin-left: 0;\r\n}\r\n\r\n.dropleft .dropdown-toggle-split::before {\r\n    margin-right: 0;\r\n}\r\n\r\n.btn-sm + .dropdown-toggle-split,\r\n.btn-group-sm > .btn + .dropdown-toggle-split {\r\n    padding-right: 0.375rem;\r\n    padding-left: 0.375rem;\r\n}\r\n\r\n.btn-lg + .dropdown-toggle-split,\r\n.btn-group-lg > .btn + .dropdown-toggle-split {\r\n    padding-right: 0.75rem;\r\n    padding-left: 0.75rem;\r\n}\r\n\r\n.btn-group-vertical {\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    -ms-flex-align: start;\r\n    align-items: flex-start;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n}\r\n\r\n.btn-group-vertical > .btn,\r\n.btn-group-vertical > .btn-group {\r\n    width: 100%;\r\n}\r\n\r\n.btn-group-vertical > .btn:not(:first-child),\r\n.btn-group-vertical > .btn-group:not(:first-child) {\r\n    margin-top: -1px;\r\n}\r\n\r\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\r\n.btn-group-vertical > .btn-group:not(:last-child) > .btn {\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n}\r\n\r\n.btn-group-vertical > .btn:not(:first-child),\r\n.btn-group-vertical > .btn-group:not(:first-child) > .btn {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n}\r\n\r\n.btn-group-toggle > .btn,\r\n.btn-group-toggle > .btn-group > .btn {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.btn-group-toggle > .btn input[type='radio'],\r\n.btn-group-toggle > .btn input[type='checkbox'],\r\n.btn-group-toggle > .btn-group > .btn input[type='radio'],\r\n.btn-group-toggle > .btn-group > .btn input[type='checkbox'] {\r\n    position: absolute;\r\n    clip: rect(0, 0, 0, 0);\r\n    pointer-events: none;\r\n}\r\n\r\n.input-group {\r\n    position: relative;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    -ms-flex-align: stretch;\r\n    align-items: stretch;\r\n    width: 100%;\r\n}\r\n\r\n.input-group > .form-control,\r\n.input-group > .form-control-plaintext,\r\n.input-group > .custom-select,\r\n.input-group > .custom-file {\r\n    position: relative;\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n    width: 1%;\r\n    min-width: 0;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.input-group > .form-control + .form-control,\r\n.input-group > .form-control + .custom-select,\r\n.input-group > .form-control + .custom-file,\r\n.input-group > .form-control-plaintext + .form-control,\r\n.input-group > .form-control-plaintext + .custom-select,\r\n.input-group > .form-control-plaintext + .custom-file,\r\n.input-group > .custom-select + .form-control,\r\n.input-group > .custom-select + .custom-select,\r\n.input-group > .custom-select + .custom-file,\r\n.input-group > .custom-file + .form-control,\r\n.input-group > .custom-file + .custom-select,\r\n.input-group > .custom-file + .custom-file {\r\n    margin-left: -1px;\r\n}\r\n\r\n.input-group > .form-control:focus,\r\n.input-group > .custom-select:focus,\r\n.input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {\r\n    z-index: 3;\r\n}\r\n\r\n.input-group > .custom-file .custom-file-input:focus {\r\n    z-index: 4;\r\n}\r\n\r\n.input-group > .form-control:not(:last-child),\r\n.input-group > .custom-select:not(:last-child) {\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n\r\n.input-group > .form-control:not(:first-child),\r\n.input-group > .custom-select:not(:first-child) {\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n}\r\n\r\n.input-group > .custom-file {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n}\r\n\r\n.input-group > .custom-file:not(:last-child) .custom-file-label,\r\n.input-group > .custom-file:not(:last-child) .custom-file-label::after {\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n\r\n.input-group > .custom-file:not(:first-child) .custom-file-label {\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n}\r\n\r\n.input-group-prepend,\r\n.input-group-append {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.input-group-prepend .btn,\r\n.input-group-append .btn {\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n\r\n.input-group-prepend .btn:focus,\r\n.input-group-append .btn:focus {\r\n    z-index: 3;\r\n}\r\n\r\n.input-group-prepend .btn + .btn,\r\n.input-group-prepend .btn + .input-group-text,\r\n.input-group-prepend .input-group-text + .input-group-text,\r\n.input-group-prepend .input-group-text + .btn,\r\n.input-group-append .btn + .btn,\r\n.input-group-append .btn + .input-group-text,\r\n.input-group-append .input-group-text + .input-group-text,\r\n.input-group-append .input-group-text + .btn {\r\n    margin-left: -1px;\r\n}\r\n\r\n.input-group-prepend {\r\n    margin-right: -1px;\r\n}\r\n\r\n.input-group-append {\r\n    margin-left: -1px;\r\n}\r\n\r\n.input-group-text {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    padding: 0.375rem 0.75rem;\r\n    margin-bottom: 0;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    background-color: #e9ecef;\r\n    border: 1px solid #ced4da;\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.input-group-text input[type='radio'],\r\n.input-group-text input[type='checkbox'] {\r\n    margin-top: 0;\r\n}\r\n\r\n.input-group-lg > .form-control:not(textarea),\r\n.input-group-lg > .custom-select {\r\n    height: calc(1.5em + 1rem + 2px);\r\n}\r\n\r\n.input-group-lg > .form-control,\r\n.input-group-lg > .custom-select,\r\n.input-group-lg > .input-group-prepend > .input-group-text,\r\n.input-group-lg > .input-group-append > .input-group-text,\r\n.input-group-lg > .input-group-prepend > .btn,\r\n.input-group-lg > .input-group-append > .btn {\r\n    padding: 0.5rem 1rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1.5;\r\n    border-radius: 0.3rem;\r\n}\r\n\r\n.input-group-sm > .form-control:not(textarea),\r\n.input-group-sm > .custom-select {\r\n    height: calc(1.5em + 0.5rem + 2px);\r\n}\r\n\r\n.input-group-sm > .form-control,\r\n.input-group-sm > .custom-select,\r\n.input-group-sm > .input-group-prepend > .input-group-text,\r\n.input-group-sm > .input-group-append > .input-group-text,\r\n.input-group-sm > .input-group-prepend > .btn,\r\n.input-group-sm > .input-group-append > .btn {\r\n    padding: 0.25rem 0.5rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.5;\r\n    border-radius: 0.2rem;\r\n}\r\n\r\n.input-group-lg > .custom-select,\r\n.input-group-sm > .custom-select {\r\n    padding-right: 1.75rem;\r\n}\r\n\r\n.input-group > .input-group-prepend > .btn,\r\n.input-group > .input-group-prepend > .input-group-text,\r\n.input-group > .input-group-append:not(:last-child) > .btn,\r\n.input-group > .input-group-append:not(:last-child) > .input-group-text,\r\n.input-group\r\n    > .input-group-append:last-child\r\n    > .btn:not(:last-child):not(.dropdown-toggle),\r\n.input-group\r\n    > .input-group-append:last-child\r\n    > .input-group-text:not(:last-child) {\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n\r\n.input-group > .input-group-append > .btn,\r\n.input-group > .input-group-append > .input-group-text,\r\n.input-group > .input-group-prepend:not(:first-child) > .btn,\r\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\r\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\r\n.input-group\r\n    > .input-group-prepend:first-child\r\n    > .input-group-text:not(:first-child) {\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n}\r\n\r\n.custom-control {\r\n    position: relative;\r\n    display: block;\r\n    min-height: 1.5rem;\r\n    padding-left: 1.5rem;\r\n}\r\n\r\n.custom-control-inline {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.custom-control-input {\r\n    position: absolute;\r\n    left: 0;\r\n    z-index: -1;\r\n    width: 1rem;\r\n    height: 1.25rem;\r\n    opacity: 0;\r\n}\r\n\r\n.custom-control-input:checked ~ .custom-control-label::before {\r\n    color: #fff;\r\n    border-color: #007bff;\r\n    background-color: #007bff;\r\n}\r\n\r\n.custom-control-input:focus ~ .custom-control-label::before {\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n}\r\n\r\n.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {\r\n    border-color: #80bdff;\r\n}\r\n\r\n.custom-control-input:not(:disabled):active ~ .custom-control-label::before {\r\n    color: #fff;\r\n    background-color: #b3d7ff;\r\n    border-color: #b3d7ff;\r\n}\r\n\r\n.custom-control-input[disabled] ~ .custom-control-label,\r\n.custom-control-input:disabled ~ .custom-control-label {\r\n    color: #6c757d;\r\n}\r\n\r\n.custom-control-input[disabled] ~ .custom-control-label::before,\r\n.custom-control-input:disabled ~ .custom-control-label::before {\r\n    background-color: #e9ecef;\r\n}\r\n\r\n.custom-control-label {\r\n    position: relative;\r\n    margin-bottom: 0;\r\n    vertical-align: top;\r\n}\r\n\r\n.custom-control-label::before {\r\n    position: absolute;\r\n    top: 0.25rem;\r\n    left: -1.5rem;\r\n    display: block;\r\n    width: 1rem;\r\n    height: 1rem;\r\n    pointer-events: none;\r\n    content: '';\r\n    background-color: #fff;\r\n    border: #adb5bd solid 1px;\r\n}\r\n\r\n.custom-control-label::after {\r\n    position: absolute;\r\n    top: 0.25rem;\r\n    left: -1.5rem;\r\n    display: block;\r\n    width: 1rem;\r\n    height: 1rem;\r\n    content: '';\r\n    background: no-repeat 50% / 50% 50%;\r\n}\r\n\r\n.custom-checkbox .custom-control-label::before {\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e\");\r\n}\r\n\r\n.custom-checkbox\r\n    .custom-control-input:indeterminate\r\n    ~ .custom-control-label::before {\r\n    border-color: #007bff;\r\n    background-color: #007bff;\r\n}\r\n\r\n.custom-checkbox\r\n    .custom-control-input:indeterminate\r\n    ~ .custom-control-label::after {\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\");\r\n}\r\n\r\n.custom-checkbox\r\n    .custom-control-input:disabled:checked\r\n    ~ .custom-control-label::before {\r\n    background-color: rgba(0, 123, 255, 0.5);\r\n}\r\n\r\n.custom-checkbox\r\n    .custom-control-input:disabled:indeterminate\r\n    ~ .custom-control-label::before {\r\n    background-color: rgba(0, 123, 255, 0.5);\r\n}\r\n\r\n.custom-radio .custom-control-label::before {\r\n    border-radius: 50%;\r\n}\r\n\r\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\");\r\n}\r\n\r\n.custom-radio\r\n    .custom-control-input:disabled:checked\r\n    ~ .custom-control-label::before {\r\n    background-color: rgba(0, 123, 255, 0.5);\r\n}\r\n\r\n.custom-switch {\r\n    padding-left: 2.25rem;\r\n}\r\n\r\n.custom-switch .custom-control-label::before {\r\n    left: -2.25rem;\r\n    width: 1.75rem;\r\n    pointer-events: all;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n.custom-switch .custom-control-label::after {\r\n    top: calc(0.25rem + 2px);\r\n    left: calc(-2.25rem + 2px);\r\n    width: calc(1rem - 4px);\r\n    height: calc(1rem - 4px);\r\n    background-color: #adb5bd;\r\n    border-radius: 0.5rem;\r\n    transition: background-color 0.15s ease-in-out,\r\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,\r\n        -webkit-transform 0.15s ease-in-out;\r\n    transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out,\r\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out,\r\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,\r\n        -webkit-transform 0.15s ease-in-out;\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n    .custom-switch .custom-control-label::after {\r\n        transition: none;\r\n    }\r\n}\r\n\r\n.custom-switch .custom-control-input:checked ~ .custom-control-label::after {\r\n    background-color: #fff;\r\n    -webkit-transform: translateX(0.75rem);\r\n    transform: translateX(0.75rem);\r\n}\r\n\r\n.custom-switch\r\n    .custom-control-input:disabled:checked\r\n    ~ .custom-control-label::before {\r\n    background-color: rgba(0, 123, 255, 0.5);\r\n}\r\n\r\n.custom-select {\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: calc(1.5em + 0.75rem + 2px);\r\n    padding: 0.375rem 1.75rem 0.375rem 0.75rem;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    vertical-align: middle;\r\n    background: #fff\r\n        url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\")\r\n        no-repeat right 0.75rem center/8px 10px;\r\n    border: 1px solid #ced4da;\r\n    border-radius: 0.25rem;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n}\r\n\r\n.custom-select:focus {\r\n    border-color: #80bdff;\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n}\r\n\r\n.custom-select:focus::-ms-value {\r\n    color: #495057;\r\n    background-color: #fff;\r\n}\r\n\r\n.custom-select[multiple],\r\n.custom-select[size]:not([size='1']) {\r\n    height: auto;\r\n    padding-right: 0.75rem;\r\n    background-image: none;\r\n}\r\n\r\n.custom-select:disabled {\r\n    color: #6c757d;\r\n    background-color: #e9ecef;\r\n}\r\n\r\n.custom-select::-ms-expand {\r\n    display: none;\r\n}\r\n\r\n.custom-select:-moz-focusring {\r\n    color: transparent;\r\n    text-shadow: 0 0 0 #495057;\r\n}\r\n\r\n.custom-select-sm {\r\n    height: calc(1.5em + 0.5rem + 2px);\r\n    padding-top: 0.25rem;\r\n    padding-bottom: 0.25rem;\r\n    padding-left: 0.5rem;\r\n    font-size: 0.875rem;\r\n}\r\n\r\n.custom-select-lg {\r\n    height: calc(1.5em + 1rem + 2px);\r\n    padding-top: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    padding-left: 1rem;\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.custom-file {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: calc(1.5em + 0.75rem + 2px);\r\n    margin-bottom: 0;\r\n}\r\n\r\n.custom-file-input {\r\n    position: relative;\r\n    z-index: 2;\r\n    width: 100%;\r\n    height: calc(1.5em + 0.75rem + 2px);\r\n    margin: 0;\r\n    opacity: 0;\r\n}\r\n\r\n.custom-file-input:focus ~ .custom-file-label {\r\n    border-color: #80bdff;\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n}\r\n\r\n.custom-file-input[disabled] ~ .custom-file-label,\r\n.custom-file-input:disabled ~ .custom-file-label {\r\n    background-color: #e9ecef;\r\n}\r\n\r\n.custom-file-input:lang(en) ~ .custom-file-label::after {\r\n    content: 'Browse';\r\n}\r\n\r\n.custom-file-input ~ .custom-file-label[data-browse]::after {\r\n    content: attr(data-browse);\r\n}\r\n\r\n.custom-file-label {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    height: calc(1.5em + 0.75rem + 2px);\r\n    padding: 0.375rem 0.75rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    background-color: #fff;\r\n    border: 1px solid #ced4da;\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.custom-file-label::after {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: 3;\r\n    display: block;\r\n    height: calc(1.5em + 0.75rem);\r\n    padding: 0.375rem 0.75rem;\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    content: 'Browse';\r\n    background-color: #e9ecef;\r\n    border-left: inherit;\r\n    border-radius: 0 0.25rem 0.25rem 0;\r\n}\r\n\r\n.custom-range {\r\n    width: 100%;\r\n    height: 1.4rem;\r\n    padding: 0;\r\n    background-color: transparent;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n}\r\n\r\n.custom-range:focus {\r\n    outline: none;\r\n}\r\n\r\n.custom-range:focus::-webkit-slider-thumb {\r\n    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n}\r\n\r\n.custom-range:focus::-moz-range-thumb {\r\n    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n}\r\n\r\n.custom-range:focus::-ms-thumb {\r\n    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n}\r\n\r\n.custom-range::-moz-focus-outer {\r\n    border: 0;\r\n}\r\n\r\n.custom-range::-webkit-slider-thumb {\r\n    width: 1rem;\r\n    height: 1rem;\r\n    margin-top: -0.25rem;\r\n    background-color: #007bff;\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    -webkit-transition: background-color 0.15s ease-in-out,\r\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    transition: background-color 0.15s ease-in-out,\r\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n    .custom-range::-webkit-slider-thumb {\r\n        -webkit-transition: none;\r\n        transition: none;\r\n    }\r\n}\r\n\r\n.custom-range::-webkit-slider-thumb:active {\r\n    background-color: #b3d7ff;\r\n}\r\n\r\n.custom-range::-webkit-slider-runnable-track {\r\n    width: 100%;\r\n    height: 0.5rem;\r\n    color: transparent;\r\n    cursor: pointer;\r\n    background-color: #dee2e6;\r\n    border-color: transparent;\r\n    border-radius: 1rem;\r\n}\r\n\r\n.custom-range::-moz-range-thumb {\r\n    width: 1rem;\r\n    height: 1rem;\r\n    background-color: #007bff;\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    -moz-transition: background-color 0.15s ease-in-out,\r\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    transition: background-color 0.15s ease-in-out,\r\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n    .custom-range::-moz-range-thumb {\r\n        -moz-transition: none;\r\n        transition: none;\r\n    }\r\n}\r\n\r\n.custom-range::-moz-range-thumb:active {\r\n    background-color: #b3d7ff;\r\n}\r\n\r\n.custom-range::-moz-range-track {\r\n    width: 100%;\r\n    height: 0.5rem;\r\n    color: transparent;\r\n    cursor: pointer;\r\n    background-color: #dee2e6;\r\n    border-color: transparent;\r\n    border-radius: 1rem;\r\n}\r\n\r\n.custom-range::-ms-thumb {\r\n    width: 1rem;\r\n    height: 1rem;\r\n    margin-top: 0;\r\n    margin-right: 0.2rem;\r\n    margin-left: 0.2rem;\r\n    background-color: #007bff;\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    -ms-transition: background-color 0.15s ease-in-out,\r\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    transition: background-color 0.15s ease-in-out,\r\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    appearance: none;\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n    .custom-range::-ms-thumb {\r\n        -ms-transition: none;\r\n        transition: none;\r\n    }\r\n}\r\n\r\n.custom-range::-ms-thumb:active {\r\n    background-color: #b3d7ff;\r\n}\r\n\r\n.custom-range::-ms-track {\r\n    width: 100%;\r\n    height: 0.5rem;\r\n    color: transparent;\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    border-color: transparent;\r\n    border-width: 0.5rem;\r\n}\r\n\r\n.custom-range::-ms-fill-lower {\r\n    background-color: #dee2e6;\r\n    border-radius: 1rem;\r\n}\r\n\r\n.custom-range::-ms-fill-upper {\r\n    margin-right: 15px;\r\n    background-color: #dee2e6;\r\n    border-radius: 1rem;\r\n}\r\n\r\n.custom-range:disabled::-webkit-slider-thumb {\r\n    background-color: #adb5bd;\r\n}\r\n\r\n.custom-range:disabled::-webkit-slider-runnable-track {\r\n    cursor: default;\r\n}\r\n\r\n.custom-range:disabled::-moz-range-thumb {\r\n    background-color: #adb5bd;\r\n}\r\n\r\n.custom-range:disabled::-moz-range-track {\r\n    cursor: default;\r\n}\r\n\r\n.custom-range:disabled::-ms-thumb {\r\n    background-color: #adb5bd;\r\n}\r\n\r\n.custom-control-label::before,\r\n.custom-file-label,\r\n.custom-select {\r\n    transition: background-color 0.15s ease-in-out,\r\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n    .custom-control-label::before,\r\n    .custom-file-label,\r\n    .custom-select {\r\n        transition: none;\r\n    }\r\n}\r\n\r\n.nav {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    padding-left: 0;\r\n    margin-bottom: 0;\r\n    list-style: none;\r\n}\r\n\r\n.nav-link {\r\n    display: block;\r\n    padding: 0.5rem 1rem;\r\n}\r\n\r\n.nav-link:hover,\r\n.nav-link:focus {\r\n    text-decoration: none;\r\n}\r\n\r\n.nav-link.disabled {\r\n    color: #6c757d;\r\n    pointer-events: none;\r\n    cursor: default;\r\n}\r\n\r\n.nav-tabs {\r\n    border-bottom: 1px solid #dee2e6;\r\n}\r\n\r\n.nav-tabs .nav-item {\r\n    margin-bottom: -1px;\r\n}\r\n\r\n.nav-tabs .nav-link {\r\n    border: 1px solid transparent;\r\n    border-top-left-radius: 0.25rem;\r\n    border-top-right-radius: 0.25rem;\r\n}\r\n\r\n.nav-tabs .nav-link:hover,\r\n.nav-tabs .nav-link:focus {\r\n    border-color: #e9ecef #e9ecef #dee2e6;\r\n}\r\n\r\n.nav-tabs .nav-link.disabled {\r\n    color: #6c757d;\r\n    background-color: transparent;\r\n    border-color: transparent;\r\n}\r\n\r\n.nav-tabs .nav-link.active,\r\n.nav-tabs .nav-item.show .nav-link {\r\n    color: #495057;\r\n    background-color: #fff;\r\n    border-color: #dee2e6 #dee2e6 #fff;\r\n}\r\n\r\n.nav-tabs .dropdown-menu {\r\n    margin-top: -1px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n}\r\n\r\n.nav-pills .nav-link {\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.nav-pills .nav-link.active,\r\n.nav-pills .show > .nav-link {\r\n    color: #fff;\r\n    background-color: #007bff;\r\n}\r\n\r\n.nav-fill .nav-item {\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n    text-align: center;\r\n}\r\n\r\n.nav-justified .nav-item {\r\n    -ms-flex-preferred-size: 0;\r\n    flex-basis: 0;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    text-align: center;\r\n}\r\n\r\n.tab-content > .tab-pane {\r\n    display: none;\r\n}\r\n\r\n.tab-content > .active {\r\n    display: block;\r\n}\r\n\r\n.navbar {\r\n    position: relative;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    padding: 0.5rem 1rem;\r\n}\r\n\r\n.navbar .container,\r\n.navbar .container-fluid,\r\n.navbar .container-sm,\r\n.navbar .container-md,\r\n.navbar .container-lg,\r\n.navbar .container-xl {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n}\r\n\r\n.navbar-brand {\r\n    display: inline-block;\r\n    padding-top: 0.3125rem;\r\n    padding-bottom: 0.3125rem;\r\n    margin-right: 1rem;\r\n    font-size: 1.25rem;\r\n    line-height: inherit;\r\n    white-space: nowrap;\r\n}\r\n\r\n.navbar-brand:hover,\r\n.navbar-brand:focus {\r\n    text-decoration: none;\r\n}\r\n\r\n.navbar-nav {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    padding-left: 0;\r\n    margin-bottom: 0;\r\n    list-style: none;\r\n}\r\n\r\n.navbar-nav .nav-link {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n}\r\n\r\n.navbar-nav .dropdown-menu {\r\n    position: static;\r\n    float: none;\r\n}\r\n\r\n.navbar-text {\r\n    display: inline-block;\r\n    padding-top: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n}\r\n\r\n.navbar-collapse {\r\n    -ms-flex-preferred-size: 100%;\r\n    flex-basis: 100%;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n}\r\n\r\n.navbar-toggler {\r\n    padding: 0.25rem 0.75rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1;\r\n    background-color: transparent;\r\n    border: 1px solid transparent;\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.navbar-toggler:hover,\r\n.navbar-toggler:focus {\r\n    text-decoration: none;\r\n}\r\n\r\n.navbar-toggler-icon {\r\n    display: inline-block;\r\n    width: 1.5em;\r\n    height: 1.5em;\r\n    vertical-align: middle;\r\n    content: '';\r\n    background: no-repeat center center;\r\n    background-size: 100% 100%;\r\n}\r\n\r\n@media (max-width: 575.98px) {\r\n    .navbar-expand-sm > .container,\r\n    .navbar-expand-sm > .container-fluid,\r\n    .navbar-expand-sm > .container-sm,\r\n    .navbar-expand-sm > .container-md,\r\n    .navbar-expand-sm > .container-lg,\r\n    .navbar-expand-sm > .container-xl {\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .navbar-expand-sm {\r\n        -ms-flex-flow: row nowrap;\r\n        flex-flow: row nowrap;\r\n        -ms-flex-pack: start;\r\n        justify-content: flex-start;\r\n    }\r\n    .navbar-expand-sm .navbar-nav {\r\n        -ms-flex-direction: row;\r\n        flex-direction: row;\r\n    }\r\n    .navbar-expand-sm .navbar-nav .dropdown-menu {\r\n        position: absolute;\r\n    }\r\n    .navbar-expand-sm .navbar-nav .nav-link {\r\n        padding-right: 0.5rem;\r\n        padding-left: 0.5rem;\r\n    }\r\n    .navbar-expand-sm > .container,\r\n    .navbar-expand-sm > .container-fluid,\r\n    .navbar-expand-sm > .container-sm,\r\n    .navbar-expand-sm > .container-md,\r\n    .navbar-expand-sm > .container-lg,\r\n    .navbar-expand-sm > .container-xl {\r\n        -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    }\r\n    .navbar-expand-sm .navbar-collapse {\r\n        display: -ms-flexbox !important;\r\n        display: flex !important;\r\n        -ms-flex-preferred-size: auto;\r\n        flex-basis: auto;\r\n    }\r\n    .navbar-expand-sm .navbar-toggler {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width: 767.98px) {\r\n    .navbar-expand-md > .container,\r\n    .navbar-expand-md > .container-fluid,\r\n    .navbar-expand-md > .container-sm,\r\n    .navbar-expand-md > .container-md,\r\n    .navbar-expand-md > .container-lg,\r\n    .navbar-expand-md > .container-xl {\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .navbar-expand-md {\r\n        -ms-flex-flow: row nowrap;\r\n        flex-flow: row nowrap;\r\n        -ms-flex-pack: start;\r\n        justify-content: flex-start;\r\n    }\r\n    .navbar-expand-md .navbar-nav {\r\n        -ms-flex-direction: row;\r\n        flex-direction: row;\r\n    }\r\n    .navbar-expand-md .navbar-nav .dropdown-menu {\r\n        position: absolute;\r\n    }\r\n    .navbar-expand-md .navbar-nav .nav-link {\r\n        padding-right: 0.5rem;\r\n        padding-left: 0.5rem;\r\n    }\r\n    .navbar-expand-md > .container,\r\n    .navbar-expand-md > .container-fluid,\r\n    .navbar-expand-md > .container-sm,\r\n    .navbar-expand-md > .container-md,\r\n    .navbar-expand-md > .container-lg,\r\n    .navbar-expand-md > .container-xl {\r\n        -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    }\r\n    .navbar-expand-md .navbar-collapse {\r\n        display: -ms-flexbox !important;\r\n        display: flex !important;\r\n        -ms-flex-preferred-size: auto;\r\n        flex-basis: auto;\r\n    }\r\n    .navbar-expand-md .navbar-toggler {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width: 991.98px) {\r\n    .navbar-expand-lg > .container,\r\n    .navbar-expand-lg > .container-fluid,\r\n    .navbar-expand-lg > .container-sm,\r\n    .navbar-expand-lg > .container-md,\r\n    .navbar-expand-lg > .container-lg,\r\n    .navbar-expand-lg > .container-xl {\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .navbar-expand-lg {\r\n        -ms-flex-flow: row nowrap;\r\n        flex-flow: row nowrap;\r\n        -ms-flex-pack: start;\r\n        justify-content: flex-start;\r\n    }\r\n    .navbar-expand-lg .navbar-nav {\r\n        -ms-flex-direction: row;\r\n        flex-direction: row;\r\n    }\r\n    .navbar-expand-lg .navbar-nav .dropdown-menu {\r\n        position: absolute;\r\n    }\r\n    .navbar-expand-lg .navbar-nav .nav-link {\r\n        padding-right: 0.5rem;\r\n        padding-left: 0.5rem;\r\n    }\r\n    .navbar-expand-lg > .container,\r\n    .navbar-expand-lg > .container-fluid,\r\n    .navbar-expand-lg > .container-sm,\r\n    .navbar-expand-lg > .container-md,\r\n    .navbar-expand-lg > .container-lg,\r\n    .navbar-expand-lg > .container-xl {\r\n        -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    }\r\n    .navbar-expand-lg .navbar-collapse {\r\n        display: -ms-flexbox !important;\r\n        display: flex !important;\r\n        -ms-flex-preferred-size: auto;\r\n        flex-basis: auto;\r\n    }\r\n    .navbar-expand-lg .navbar-toggler {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width: 1199.98px) {\r\n    .navbar-expand-xl > .container,\r\n    .navbar-expand-xl > .container-fluid,\r\n    .navbar-expand-xl > .container-sm,\r\n    .navbar-expand-xl > .container-md,\r\n    .navbar-expand-xl > .container-lg,\r\n    .navbar-expand-xl > .container-xl {\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .navbar-expand-xl {\r\n        -ms-flex-flow: row nowrap;\r\n        flex-flow: row nowrap;\r\n        -ms-flex-pack: start;\r\n        justify-content: flex-start;\r\n    }\r\n    .navbar-expand-xl .navbar-nav {\r\n        -ms-flex-direction: row;\r\n        flex-direction: row;\r\n    }\r\n    .navbar-expand-xl .navbar-nav .dropdown-menu {\r\n        position: absolute;\r\n    }\r\n    .navbar-expand-xl .navbar-nav .nav-link {\r\n        padding-right: 0.5rem;\r\n        padding-left: 0.5rem;\r\n    }\r\n    .navbar-expand-xl > .container,\r\n    .navbar-expand-xl > .container-fluid,\r\n    .navbar-expand-xl > .container-sm,\r\n    .navbar-expand-xl > .container-md,\r\n    .navbar-expand-xl > .container-lg,\r\n    .navbar-expand-xl > .container-xl {\r\n        -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    }\r\n    .navbar-expand-xl .navbar-collapse {\r\n        display: -ms-flexbox !important;\r\n        display: flex !important;\r\n        -ms-flex-preferred-size: auto;\r\n        flex-basis: auto;\r\n    }\r\n    .navbar-expand-xl .navbar-toggler {\r\n        display: none;\r\n    }\r\n}\r\n\r\n.navbar-expand {\r\n    -ms-flex-flow: row nowrap;\r\n    flex-flow: row nowrap;\r\n    -ms-flex-pack: start;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.navbar-expand > .container,\r\n.navbar-expand > .container-fluid,\r\n.navbar-expand > .container-sm,\r\n.navbar-expand > .container-md,\r\n.navbar-expand > .container-lg,\r\n.navbar-expand > .container-xl {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n}\r\n\r\n.navbar-expand .navbar-nav {\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n}\r\n\r\n.navbar-expand .navbar-nav .dropdown-menu {\r\n    position: absolute;\r\n}\r\n\r\n.navbar-expand .navbar-nav .nav-link {\r\n    padding-right: 0.5rem;\r\n    padding-left: 0.5rem;\r\n}\r\n\r\n.navbar-expand > .container,\r\n.navbar-expand > .container-fluid,\r\n.navbar-expand > .container-sm,\r\n.navbar-expand > .container-md,\r\n.navbar-expand > .container-lg,\r\n.navbar-expand > .container-xl {\r\n    -ms-flex-wrap: nowrap;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.navbar-expand .navbar-collapse {\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n    -ms-flex-preferred-size: auto;\r\n    flex-basis: auto;\r\n}\r\n\r\n.navbar-expand .navbar-toggler {\r\n    display: none;\r\n}\r\n\r\n.navbar-light .navbar-brand {\r\n    color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.navbar-light .navbar-brand:hover,\r\n.navbar-light .navbar-brand:focus {\r\n    color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.navbar-light .navbar-nav .nav-link {\r\n    color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.navbar-light .navbar-nav .nav-link:hover,\r\n.navbar-light .navbar-nav .nav-link:focus {\r\n    color: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.navbar-light .navbar-nav .nav-link.disabled {\r\n    color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.navbar-light .navbar-nav .show > .nav-link,\r\n.navbar-light .navbar-nav .active > .nav-link,\r\n.navbar-light .navbar-nav .nav-link.show,\r\n.navbar-light .navbar-nav .nav-link.active {\r\n    color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.navbar-light .navbar-toggler {\r\n    color: rgba(0, 0, 0, 0.5);\r\n    border-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-light .navbar-toggler-icon {\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\r\n}\r\n\r\n.navbar-light .navbar-text {\r\n    color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.navbar-light .navbar-text a {\r\n    color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.navbar-light .navbar-text a:hover,\r\n.navbar-light .navbar-text a:focus {\r\n    color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.navbar-dark .navbar-brand {\r\n    color: #fff;\r\n}\r\n\r\n.navbar-dark .navbar-brand:hover,\r\n.navbar-dark .navbar-brand:focus {\r\n    color: #fff;\r\n}\r\n\r\n.navbar-dark .navbar-nav .nav-link {\r\n    color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.navbar-dark .navbar-nav .nav-link:hover,\r\n.navbar-dark .navbar-nav .nav-link:focus {\r\n    color: rgba(255, 255, 255, 0.75);\r\n}\r\n\r\n.navbar-dark .navbar-nav .nav-link.disabled {\r\n    color: rgba(255, 255, 255, 0.25);\r\n}\r\n\r\n.navbar-dark .navbar-nav .show > .nav-link,\r\n.navbar-dark .navbar-nav .active > .nav-link,\r\n.navbar-dark .navbar-nav .nav-link.show,\r\n.navbar-dark .navbar-nav .nav-link.active {\r\n    color: #fff;\r\n}\r\n\r\n.navbar-dark .navbar-toggler {\r\n    color: rgba(255, 255, 255, 0.5);\r\n    border-color: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.navbar-dark .navbar-toggler-icon {\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\r\n}\r\n\r\n.navbar-dark .navbar-text {\r\n    color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.navbar-dark .navbar-text a {\r\n    color: #fff;\r\n}\r\n\r\n.navbar-dark .navbar-text a:hover,\r\n.navbar-dark .navbar-text a:focus {\r\n    color: #fff;\r\n}\r\n\r\n.card {\r\n    position: relative;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 1px solid rgba(0, 0, 0, 0.125);\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.card > hr {\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n}\r\n\r\n.card > .list-group {\r\n    border-top: inherit;\r\n    border-bottom: inherit;\r\n}\r\n\r\n.card > .list-group:first-child {\r\n    border-top-width: 0;\r\n    border-top-left-radius: calc(0.25rem - 1px);\r\n    border-top-right-radius: calc(0.25rem - 1px);\r\n}\r\n\r\n.card > .list-group:last-child {\r\n    border-bottom-width: 0;\r\n    border-bottom-right-radius: calc(0.25rem - 1px);\r\n    border-bottom-left-radius: calc(0.25rem - 1px);\r\n}\r\n\r\n.card-body {\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n    min-height: 1px;\r\n    padding: 1.25rem;\r\n}\r\n\r\n.card-title {\r\n    margin-bottom: 0.75rem;\r\n}\r\n\r\n.card-subtitle {\r\n    margin-top: -0.375rem;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.card-text:last-child {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.card-link:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.card-link + .card-link {\r\n    margin-left: 1.25rem;\r\n}\r\n\r\n.card-header {\r\n    padding: 0.75rem 1.25rem;\r\n    margin-bottom: 0;\r\n    background-color: rgba(0, 0, 0, 0.03);\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n\r\n.card-header:first-child {\r\n    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\r\n}\r\n\r\n.card-header + .list-group .list-group-item:first-child {\r\n    border-top: 0;\r\n}\r\n\r\n.card-footer {\r\n    padding: 0.75rem 1.25rem;\r\n    background-color: rgba(0, 0, 0, 0.03);\r\n    border-top: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n\r\n.card-footer:last-child {\r\n    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\r\n}\r\n\r\n.card-header-tabs {\r\n    margin-right: -0.625rem;\r\n    margin-bottom: -0.75rem;\r\n    margin-left: -0.625rem;\r\n    border-bottom: 0;\r\n}\r\n\r\n.card-header-pills {\r\n    margin-right: -0.625rem;\r\n    margin-left: -0.625rem;\r\n}\r\n\r\n.card-img-overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 1.25rem;\r\n}\r\n\r\n.card-img,\r\n.card-img-top,\r\n.card-img-bottom {\r\n    -ms-flex-negative: 0;\r\n    flex-shrink: 0;\r\n    width: 100%;\r\n}\r\n\r\n.card-img,\r\n.card-img-top {\r\n    border-top-left-radius: calc(0.25rem - 1px);\r\n    border-top-right-radius: calc(0.25rem - 1px);\r\n}\r\n\r\n.card-img,\r\n.card-img-bottom {\r\n    border-bottom-right-radius: calc(0.25rem - 1px);\r\n    border-bottom-left-radius: calc(0.25rem - 1px);\r\n}\r\n\r\n.card-deck .card {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .card-deck {\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-flow: row wrap;\r\n        flex-flow: row wrap;\r\n        margin-right: -15px;\r\n        margin-left: -15px;\r\n    }\r\n    .card-deck .card {\r\n        -ms-flex: 1 0 0%;\r\n        flex: 1 0 0%;\r\n        margin-right: 15px;\r\n        margin-bottom: 0;\r\n        margin-left: 15px;\r\n    }\r\n}\r\n\r\n.card-group > .card {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .card-group {\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-flow: row wrap;\r\n        flex-flow: row wrap;\r\n    }\r\n    .card-group > .card {\r\n        -ms-flex: 1 0 0%;\r\n        flex: 1 0 0%;\r\n        margin-bottom: 0;\r\n    }\r\n    .card-group > .card + .card {\r\n        margin-left: 0;\r\n        border-left: 0;\r\n    }\r\n    .card-group > .card:not(:last-child) {\r\n        border-top-right-radius: 0;\r\n        border-bottom-right-radius: 0;\r\n    }\r\n    .card-group > .card:not(:last-child) .card-img-top,\r\n    .card-group > .card:not(:last-child) .card-header {\r\n        border-top-right-radius: 0;\r\n    }\r\n    .card-group > .card:not(:last-child) .card-img-bottom,\r\n    .card-group > .card:not(:last-child) .card-footer {\r\n        border-bottom-right-radius: 0;\r\n    }\r\n    .card-group > .card:not(:first-child) {\r\n        border-top-left-radius: 0;\r\n        border-bottom-left-radius: 0;\r\n    }\r\n    .card-group > .card:not(:first-child) .card-img-top,\r\n    .card-group > .card:not(:first-child) .card-header {\r\n        border-top-left-radius: 0;\r\n    }\r\n    .card-group > .card:not(:first-child) .card-img-bottom,\r\n    .card-group > .card:not(:first-child) .card-footer {\r\n        border-bottom-left-radius: 0;\r\n    }\r\n}\r\n\r\n.card-columns .card {\r\n    margin-bottom: 0.75rem;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .card-columns {\r\n        -webkit-column-count: 3;\r\n        -moz-column-count: 3;\r\n        column-count: 3;\r\n        -webkit-column-gap: 1.25rem;\r\n        -moz-column-gap: 1.25rem;\r\n        column-gap: 1.25rem;\r\n        orphans: 1;\r\n        widows: 1;\r\n    }\r\n    .card-columns .card {\r\n        display: inline-block;\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n.accordion > .card {\r\n    overflow: hidden;\r\n}\r\n\r\n.accordion > .card:not(:last-of-type) {\r\n    border-bottom: 0;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n}\r\n\r\n.accordion > .card:not(:first-of-type) {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n}\r\n\r\n.accordion > .card > .card-header {\r\n    border-radius: 0;\r\n    margin-bottom: -1px;\r\n}\r\n\r\n.breadcrumb {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    padding: 0.75rem 1rem;\r\n    margin-bottom: 1rem;\r\n    list-style: none;\r\n    background-color: #e9ecef;\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.breadcrumb-item {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.breadcrumb-item + .breadcrumb-item {\r\n    padding-left: 0.5rem;\r\n}\r\n\r\n.breadcrumb-item + .breadcrumb-item::before {\r\n    display: inline-block;\r\n    padding-right: 0.5rem;\r\n    color: #6c757d;\r\n    content: '/';\r\n}\r\n\r\n.breadcrumb-item + .breadcrumb-item:hover::before {\r\n    text-decoration: underline;\r\n}\r\n\r\n.breadcrumb-item + .breadcrumb-item:hover::before {\r\n    text-decoration: none;\r\n}\r\n\r\n.breadcrumb-item.active {\r\n    color: #6c757d;\r\n}\r\n\r\n.pagination {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding-left: 0;\r\n    list-style: none;\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.page-link {\r\n    position: relative;\r\n    display: block;\r\n    padding: 0.5rem 0.75rem;\r\n    margin-left: -1px;\r\n    line-height: 1.25;\r\n    color: #007bff;\r\n    background-color: #fff;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.page-link:hover {\r\n    z-index: 2;\r\n    color: #0056b3;\r\n    text-decoration: none;\r\n    background-color: #e9ecef;\r\n    border-color: #dee2e6;\r\n}\r\n\r\n.page-link:focus {\r\n    z-index: 3;\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n}\r\n\r\n.page-item:first-child .page-link {\r\n    margin-left: 0;\r\n    border-top-left-radius: 0.25rem;\r\n    border-bottom-left-radius: 0.25rem;\r\n}\r\n\r\n.page-item:last-child .page-link {\r\n    border-top-right-radius: 0.25rem;\r\n    border-bottom-right-radius: 0.25rem;\r\n}\r\n\r\n.page-item.active .page-link {\r\n    z-index: 3;\r\n    color: #fff;\r\n    background-color: #007bff;\r\n    border-color: #007bff;\r\n}\r\n\r\n.page-item.disabled .page-link {\r\n    color: #6c757d;\r\n    pointer-events: none;\r\n    cursor: auto;\r\n    background-color: #fff;\r\n    border-color: #dee2e6;\r\n}\r\n\r\n.pagination-lg .page-link {\r\n    padding: 0.75rem 1.5rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1.5;\r\n}\r\n\r\n.pagination-lg .page-item:first-child .page-link {\r\n    border-top-left-radius: 0.3rem;\r\n    border-bottom-left-radius: 0.3rem;\r\n}\r\n\r\n.pagination-lg .page-item:last-child .page-link {\r\n    border-top-right-radius: 0.3rem;\r\n    border-bottom-right-radius: 0.3rem;\r\n}\r\n\r\n.pagination-sm .page-link {\r\n    padding: 0.25rem 0.5rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.5;\r\n}\r\n\r\n.pagination-sm .page-item:first-child .page-link {\r\n    border-top-left-radius: 0.2rem;\r\n    border-bottom-left-radius: 0.2rem;\r\n}\r\n\r\n.pagination-sm .page-item:last-child .page-link {\r\n    border-top-right-radius: 0.2rem;\r\n    border-bottom-right-radius: 0.2rem;\r\n}\r\n\r\n.badge {\r\n    display: inline-block;\r\n    padding: 0.25em 0.4em;\r\n    font-size: 75%;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: baseline;\r\n    border-radius: 0.25rem;\r\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\r\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n    .badge {\r\n        transition: none;\r\n    }\r\n}\r\n\r\na.badge:hover,\r\na.badge:focus {\r\n    text-decoration: none;\r\n}\r\n\r\n.badge:empty {\r\n    display: none;\r\n}\r\n\r\n.btn .badge {\r\n    position: relative;\r\n    top: -1px;\r\n}\r\n\r\n.badge-pill {\r\n    padding-right: 0.6em;\r\n    padding-left: 0.6em;\r\n    border-radius: 10rem;\r\n}\r\n\r\n.badge-primary {\r\n    color: #fff;\r\n    background-color: #007bff;\r\n}\r\n\r\na.badge-primary:hover,\r\na.badge-primary:focus {\r\n    color: #fff;\r\n    background-color: #0062cc;\r\n}\r\n\r\na.badge-primary:focus,\r\na.badge-primary.focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\r\n}\r\n\r\n.badge-secondary {\r\n    color: #fff;\r\n    background-color: #6c757d;\r\n}\r\n\r\na.badge-secondary:hover,\r\na.badge-secondary:focus {\r\n    color: #fff;\r\n    background-color: #545b62;\r\n}\r\n\r\na.badge-secondary:focus,\r\na.badge-secondary.focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\r\n}\r\n\r\n.badge-success {\r\n    color: #fff;\r\n    background-color: #28a745;\r\n}\r\n\r\na.badge-success:hover,\r\na.badge-success:focus {\r\n    color: #fff;\r\n    background-color: #1e7e34;\r\n}\r\n\r\na.badge-success:focus,\r\na.badge-success.focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\r\n}\r\n\r\n.badge-info {\r\n    color: #fff;\r\n    background-color: #17a2b8;\r\n}\r\n\r\na.badge-info:hover,\r\na.badge-info:focus {\r\n    color: #fff;\r\n    background-color: #117a8b;\r\n}\r\n\r\na.badge-info:focus,\r\na.badge-info.focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\r\n}\r\n\r\n.badge-warning {\r\n    color: #212529;\r\n    background-color: #ffc107;\r\n}\r\n\r\na.badge-warning:hover,\r\na.badge-warning:focus {\r\n    color: #212529;\r\n    background-color: #d39e00;\r\n}\r\n\r\na.badge-warning:focus,\r\na.badge-warning.focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\r\n}\r\n\r\n.badge-danger {\r\n    color: #fff;\r\n    background-color: #dc3545;\r\n}\r\n\r\na.badge-danger:hover,\r\na.badge-danger:focus {\r\n    color: #fff;\r\n    background-color: #bd2130;\r\n}\r\n\r\na.badge-danger:focus,\r\na.badge-danger.focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\r\n}\r\n\r\n.badge-light {\r\n    color: #212529;\r\n    background-color: #f8f9fa;\r\n}\r\n\r\na.badge-light:hover,\r\na.badge-light:focus {\r\n    color: #212529;\r\n    background-color: #dae0e5;\r\n}\r\n\r\na.badge-light:focus,\r\na.badge-light.focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\r\n}\r\n\r\n.badge-dark {\r\n    color: #fff;\r\n    background-color: #343a40;\r\n}\r\n\r\na.badge-dark:hover,\r\na.badge-dark:focus {\r\n    color: #fff;\r\n    background-color: #1d2124;\r\n}\r\n\r\na.badge-dark:focus,\r\na.badge-dark.focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\r\n}\r\n\r\n.jumbotron {\r\n    padding: 2rem 1rem;\r\n    margin-bottom: 2rem;\r\n    background-color: #e9ecef;\r\n    border-radius: 0.3rem;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .jumbotron {\r\n        padding: 4rem 2rem;\r\n    }\r\n}\r\n\r\n.jumbotron-fluid {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n    border-radius: 0;\r\n}\r\n\r\n.alert {\r\n    position: relative;\r\n    padding: 0.75rem 1.25rem;\r\n    margin-bottom: 1rem;\r\n    border: 1px solid transparent;\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.alert-heading {\r\n    color: inherit;\r\n}\r\n\r\n.alert-link {\r\n    font-weight: 700;\r\n}\r\n\r\n.alert-dismissible {\r\n    padding-right: 4rem;\r\n}\r\n\r\n.alert-dismissible .close {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    padding: 0.75rem 1.25rem;\r\n    color: inherit;\r\n}\r\n\r\n.alert-primary {\r\n    color: #004085;\r\n    background-color: #cce5ff;\r\n    border-color: #b8daff;\r\n}\r\n\r\n.alert-primary hr {\r\n    border-top-color: #9fcdff;\r\n}\r\n\r\n.alert-primary .alert-link {\r\n    color: #002752;\r\n}\r\n\r\n.alert-secondary {\r\n    color: #383d41;\r\n    background-color: #e2e3e5;\r\n    border-color: #d6d8db;\r\n}\r\n\r\n.alert-secondary hr {\r\n    border-top-color: #c8cbcf;\r\n}\r\n\r\n.alert-secondary .alert-link {\r\n    color: #202326;\r\n}\r\n\r\n.alert-success {\r\n    color: #155724;\r\n    background-color: #d4edda;\r\n    border-color: #c3e6cb;\r\n}\r\n\r\n.alert-success hr {\r\n    border-top-color: #b1dfbb;\r\n}\r\n\r\n.alert-success .alert-link {\r\n    color: #0b2e13;\r\n}\r\n\r\n.alert-info {\r\n    color: #0c5460;\r\n    background-color: #d1ecf1;\r\n    border-color: #bee5eb;\r\n}\r\n\r\n.alert-info hr {\r\n    border-top-color: #abdde5;\r\n}\r\n\r\n.alert-info .alert-link {\r\n    color: #062c33;\r\n}\r\n\r\n.alert-warning {\r\n    color: #856404;\r\n    background-color: #fff3cd;\r\n    border-color: #ffeeba;\r\n}\r\n\r\n.alert-warning hr {\r\n    border-top-color: #ffe8a1;\r\n}\r\n\r\n.alert-warning .alert-link {\r\n    color: #533f03;\r\n}\r\n\r\n.alert-danger {\r\n    color: #721c24;\r\n    background-color: #f8d7da;\r\n    border-color: #f5c6cb;\r\n}\r\n\r\n.alert-danger hr {\r\n    border-top-color: #f1b0b7;\r\n}\r\n\r\n.alert-danger .alert-link {\r\n    color: #491217;\r\n}\r\n\r\n.alert-light {\r\n    color: #818182;\r\n    background-color: #fefefe;\r\n    border-color: #fdfdfe;\r\n}\r\n\r\n.alert-light hr {\r\n    border-top-color: #ececf6;\r\n}\r\n\r\n.alert-light .alert-link {\r\n    color: #686868;\r\n}\r\n\r\n.alert-dark {\r\n    color: #1b1e21;\r\n    background-color: #d6d8d9;\r\n    border-color: #c6c8ca;\r\n}\r\n\r\n.alert-dark hr {\r\n    border-top-color: #b9bbbe;\r\n}\r\n\r\n.alert-dark .alert-link {\r\n    color: #040505;\r\n}\r\n\r\n@-webkit-keyframes progress-bar-stripes {\r\n    from {\r\n        background-position: 1rem 0;\r\n    }\r\n    to {\r\n        background-position: 0 0;\r\n    }\r\n}\r\n\r\n@keyframes progress-bar-stripes {\r\n    from {\r\n        background-position: 1rem 0;\r\n    }\r\n    to {\r\n        background-position: 0 0;\r\n    }\r\n}\r\n\r\n.progress {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 1rem;\r\n    overflow: hidden;\r\n    line-height: 0;\r\n    font-size: 0.75rem;\r\n    background-color: #e9ecef;\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.progress-bar {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    color: #fff;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    background-color: #007bff;\r\n    transition: width 0.6s ease;\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n    .progress-bar {\r\n        transition: none;\r\n    }\r\n}\r\n\r\n.progress-bar-striped {\r\n    background-image: linear-gradient(\r\n        45deg,\r\n        rgba(255, 255, 255, 0.15) 25%,\r\n        transparent 25%,\r\n        transparent 50%,\r\n        rgba(255, 255, 255, 0.15) 50%,\r\n        rgba(255, 255, 255, 0.15) 75%,\r\n        transparent 75%,\r\n        transparent\r\n    );\r\n    background-size: 1rem 1rem;\r\n}\r\n\r\n.progress-bar-animated {\r\n    -webkit-animation: progress-bar-stripes 1s linear infinite;\r\n    animation: progress-bar-stripes 1s linear infinite;\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n    .progress-bar-animated {\r\n        -webkit-animation: none;\r\n        animation: none;\r\n    }\r\n}\r\n\r\n.media {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: start;\r\n    align-items: flex-start;\r\n}\r\n\r\n.media-body {\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n}\r\n\r\n.list-group {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    padding-left: 0;\r\n    margin-bottom: 0;\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.list-group-item-action {\r\n    width: 100%;\r\n    color: #495057;\r\n    text-align: inherit;\r\n}\r\n\r\n.list-group-item-action:hover,\r\n.list-group-item-action:focus {\r\n    z-index: 1;\r\n    color: #495057;\r\n    text-decoration: none;\r\n    background-color: #f8f9fa;\r\n}\r\n\r\n.list-group-item-action:active {\r\n    color: #212529;\r\n    background-color: #e9ecef;\r\n}\r\n\r\n.list-group-item {\r\n    position: relative;\r\n    display: block;\r\n    padding: 0.75rem 1.25rem;\r\n    background-color: #fff;\r\n    border: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n\r\n.list-group-item:first-child {\r\n    border-top-left-radius: inherit;\r\n    border-top-right-radius: inherit;\r\n}\r\n\r\n.list-group-item:last-child {\r\n    border-bottom-right-radius: inherit;\r\n    border-bottom-left-radius: inherit;\r\n}\r\n\r\n.list-group-item.disabled,\r\n.list-group-item:disabled {\r\n    color: #6c757d;\r\n    pointer-events: none;\r\n    background-color: #fff;\r\n}\r\n\r\n.list-group-item.active {\r\n    z-index: 2;\r\n    color: #fff;\r\n    background-color: #007bff;\r\n    border-color: #007bff;\r\n}\r\n\r\n.list-group-item + .list-group-item {\r\n    border-top-width: 0;\r\n}\r\n\r\n.list-group-item + .list-group-item.active {\r\n    margin-top: -1px;\r\n    border-top-width: 1px;\r\n}\r\n\r\n.list-group-horizontal {\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n}\r\n\r\n.list-group-horizontal > .list-group-item:first-child {\r\n    border-bottom-left-radius: 0.25rem;\r\n    border-top-right-radius: 0;\r\n}\r\n\r\n.list-group-horizontal > .list-group-item:last-child {\r\n    border-top-right-radius: 0.25rem;\r\n    border-bottom-left-radius: 0;\r\n}\r\n\r\n.list-group-horizontal > .list-group-item.active {\r\n    margin-top: 0;\r\n}\r\n\r\n.list-group-horizontal > .list-group-item + .list-group-item {\r\n    border-top-width: 1px;\r\n    border-left-width: 0;\r\n}\r\n\r\n.list-group-horizontal > .list-group-item + .list-group-item.active {\r\n    margin-left: -1px;\r\n    border-left-width: 1px;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .list-group-horizontal-sm {\r\n        -ms-flex-direction: row;\r\n        flex-direction: row;\r\n    }\r\n    .list-group-horizontal-sm > .list-group-item:first-child {\r\n        border-bottom-left-radius: 0.25rem;\r\n        border-top-right-radius: 0;\r\n    }\r\n    .list-group-horizontal-sm > .list-group-item:last-child {\r\n        border-top-right-radius: 0.25rem;\r\n        border-bottom-left-radius: 0;\r\n    }\r\n    .list-group-horizontal-sm > .list-group-item.active {\r\n        margin-top: 0;\r\n    }\r\n    .list-group-horizontal-sm > .list-group-item + .list-group-item {\r\n        border-top-width: 1px;\r\n        border-left-width: 0;\r\n    }\r\n    .list-group-horizontal-sm > .list-group-item + .list-group-item.active {\r\n        margin-left: -1px;\r\n        border-left-width: 1px;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .list-group-horizontal-md {\r\n        -ms-flex-direction: row;\r\n        flex-direction: row;\r\n    }\r\n    .list-group-horizontal-md > .list-group-item:first-child {\r\n        border-bottom-left-radius: 0.25rem;\r\n        border-top-right-radius: 0;\r\n    }\r\n    .list-group-horizontal-md > .list-group-item:last-child {\r\n        border-top-right-radius: 0.25rem;\r\n        border-bottom-left-radius: 0;\r\n    }\r\n    .list-group-horizontal-md > .list-group-item.active {\r\n        margin-top: 0;\r\n    }\r\n    .list-group-horizontal-md > .list-group-item + .list-group-item {\r\n        border-top-width: 1px;\r\n        border-left-width: 0;\r\n    }\r\n    .list-group-horizontal-md > .list-group-item + .list-group-item.active {\r\n        margin-left: -1px;\r\n        border-left-width: 1px;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .list-group-horizontal-lg {\r\n        -ms-flex-direction: row;\r\n        flex-direction: row;\r\n    }\r\n    .list-group-horizontal-lg > .list-group-item:first-child {\r\n        border-bottom-left-radius: 0.25rem;\r\n        border-top-right-radius: 0;\r\n    }\r\n    .list-group-horizontal-lg > .list-group-item:last-child {\r\n        border-top-right-radius: 0.25rem;\r\n        border-bottom-left-radius: 0;\r\n    }\r\n    .list-group-horizontal-lg > .list-group-item.active {\r\n        margin-top: 0;\r\n    }\r\n    .list-group-horizontal-lg > .list-group-item + .list-group-item {\r\n        border-top-width: 1px;\r\n        border-left-width: 0;\r\n    }\r\n    .list-group-horizontal-lg > .list-group-item + .list-group-item.active {\r\n        margin-left: -1px;\r\n        border-left-width: 1px;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .list-group-horizontal-xl {\r\n        -ms-flex-direction: row;\r\n        flex-direction: row;\r\n    }\r\n    .list-group-horizontal-xl > .list-group-item:first-child {\r\n        border-bottom-left-radius: 0.25rem;\r\n        border-top-right-radius: 0;\r\n    }\r\n    .list-group-horizontal-xl > .list-group-item:last-child {\r\n        border-top-right-radius: 0.25rem;\r\n        border-bottom-left-radius: 0;\r\n    }\r\n    .list-group-horizontal-xl > .list-group-item.active {\r\n        margin-top: 0;\r\n    }\r\n    .list-group-horizontal-xl > .list-group-item + .list-group-item {\r\n        border-top-width: 1px;\r\n        border-left-width: 0;\r\n    }\r\n    .list-group-horizontal-xl > .list-group-item + .list-group-item.active {\r\n        margin-left: -1px;\r\n        border-left-width: 1px;\r\n    }\r\n}\r\n\r\n.list-group-flush {\r\n    border-radius: 0;\r\n}\r\n\r\n.list-group-flush > .list-group-item {\r\n    border-width: 0 0 1px;\r\n}\r\n\r\n.list-group-flush > .list-group-item:last-child {\r\n    border-bottom-width: 0;\r\n}\r\n\r\n.list-group-item-primary {\r\n    color: #004085;\r\n    background-color: #b8daff;\r\n}\r\n\r\n.list-group-item-primary.list-group-item-action:hover,\r\n.list-group-item-primary.list-group-item-action:focus {\r\n    color: #004085;\r\n    background-color: #9fcdff;\r\n}\r\n\r\n.list-group-item-primary.list-group-item-action.active {\r\n    color: #fff;\r\n    background-color: #004085;\r\n    border-color: #004085;\r\n}\r\n\r\n.list-group-item-secondary {\r\n    color: #383d41;\r\n    background-color: #d6d8db;\r\n}\r\n\r\n.list-group-item-secondary.list-group-item-action:hover,\r\n.list-group-item-secondary.list-group-item-action:focus {\r\n    color: #383d41;\r\n    background-color: #c8cbcf;\r\n}\r\n\r\n.list-group-item-secondary.list-group-item-action.active {\r\n    color: #fff;\r\n    background-color: #383d41;\r\n    border-color: #383d41;\r\n}\r\n\r\n.list-group-item-success {\r\n    color: #155724;\r\n    background-color: #c3e6cb;\r\n}\r\n\r\n.list-group-item-success.list-group-item-action:hover,\r\n.list-group-item-success.list-group-item-action:focus {\r\n    color: #155724;\r\n    background-color: #b1dfbb;\r\n}\r\n\r\n.list-group-item-success.list-group-item-action.active {\r\n    color: #fff;\r\n    background-color: #155724;\r\n    border-color: #155724;\r\n}\r\n\r\n.list-group-item-info {\r\n    color: #0c5460;\r\n    background-color: #bee5eb;\r\n}\r\n\r\n.list-group-item-info.list-group-item-action:hover,\r\n.list-group-item-info.list-group-item-action:focus {\r\n    color: #0c5460;\r\n    background-color: #abdde5;\r\n}\r\n\r\n.list-group-item-info.list-group-item-action.active {\r\n    color: #fff;\r\n    background-color: #0c5460;\r\n    border-color: #0c5460;\r\n}\r\n\r\n.list-group-item-warning {\r\n    color: #856404;\r\n    background-color: #ffeeba;\r\n}\r\n\r\n.list-group-item-warning.list-group-item-action:hover,\r\n.list-group-item-warning.list-group-item-action:focus {\r\n    color: #856404;\r\n    background-color: #ffe8a1;\r\n}\r\n\r\n.list-group-item-warning.list-group-item-action.active {\r\n    color: #fff;\r\n    background-color: #856404;\r\n    border-color: #856404;\r\n}\r\n\r\n.list-group-item-danger {\r\n    color: #721c24;\r\n    background-color: #f5c6cb;\r\n}\r\n\r\n.list-group-item-danger.list-group-item-action:hover,\r\n.list-group-item-danger.list-group-item-action:focus {\r\n    color: #721c24;\r\n    background-color: #f1b0b7;\r\n}\r\n\r\n.list-group-item-danger.list-group-item-action.active {\r\n    color: #fff;\r\n    background-color: #721c24;\r\n    border-color: #721c24;\r\n}\r\n\r\n.list-group-item-light {\r\n    color: #818182;\r\n    background-color: #fdfdfe;\r\n}\r\n\r\n.list-group-item-light.list-group-item-action:hover,\r\n.list-group-item-light.list-group-item-action:focus {\r\n    color: #818182;\r\n    background-color: #ececf6;\r\n}\r\n\r\n.list-group-item-light.list-group-item-action.active {\r\n    color: #fff;\r\n    background-color: #818182;\r\n    border-color: #818182;\r\n}\r\n\r\n.list-group-item-dark {\r\n    color: #1b1e21;\r\n    background-color: #c6c8ca;\r\n}\r\n\r\n.list-group-item-dark.list-group-item-action:hover,\r\n.list-group-item-dark.list-group-item-action:focus {\r\n    color: #1b1e21;\r\n    background-color: #b9bbbe;\r\n}\r\n\r\n.list-group-item-dark.list-group-item-action.active {\r\n    color: #fff;\r\n    background-color: #1b1e21;\r\n    border-color: #1b1e21;\r\n}\r\n\r\n.close {\r\n    float: right;\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    color: #000;\r\n    text-shadow: 0 1px 0 #fff;\r\n    opacity: 0.5;\r\n}\r\n\r\n.close:hover {\r\n    color: #000;\r\n    text-decoration: none;\r\n}\r\n\r\n.close:not(:disabled):not(.disabled):hover,\r\n.close:not(:disabled):not(.disabled):focus {\r\n    opacity: 0.75;\r\n}\r\n\r\nbutton.close {\r\n    padding: 0;\r\n    background-color: transparent;\r\n    border: 0;\r\n}\r\n\r\na.close.disabled {\r\n    pointer-events: none;\r\n}\r\n\r\n.toast {\r\n    max-width: 350px;\r\n    overflow: hidden;\r\n    font-size: 0.875rem;\r\n    background-color: rgba(255, 255, 255, 0.85);\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0, 0, 0, 0.1);\r\n    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);\r\n    -webkit-backdrop-filter: blur(10px);\r\n    backdrop-filter: blur(10px);\r\n    opacity: 0;\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.toast:not(:last-child) {\r\n    margin-bottom: 0.75rem;\r\n}\r\n\r\n.toast.showing {\r\n    opacity: 1;\r\n}\r\n\r\n.toast.show {\r\n    display: block;\r\n    opacity: 1;\r\n}\r\n\r\n.toast.hide {\r\n    display: none;\r\n}\r\n\r\n.toast-header {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    padding: 0.25rem 0.75rem;\r\n    color: #6c757d;\r\n    background-color: rgba(255, 255, 255, 0.85);\r\n    background-clip: padding-box;\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.toast-body {\r\n    padding: 0.75rem;\r\n}\r\n\r\n.modal-open {\r\n    overflow: hidden;\r\n}\r\n\r\n.modal-open .modal {\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n.modal {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1050;\r\n    display: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    outline: 0;\r\n}\r\n\r\n.modal-dialog {\r\n    position: relative;\r\n    width: auto;\r\n    margin: 0.5rem;\r\n    pointer-events: none;\r\n}\r\n\r\n.modal.fade .modal-dialog {\r\n    transition: -webkit-transform 0.3s ease-out;\r\n    transition: transform 0.3s ease-out;\r\n    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\r\n    -webkit-transform: translate(0, -50px);\r\n    transform: translate(0, -50px);\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n    .modal.fade .modal-dialog {\r\n        transition: none;\r\n    }\r\n}\r\n\r\n.modal.show .modal-dialog {\r\n    -webkit-transform: none;\r\n    transform: none;\r\n}\r\n\r\n.modal.modal-static .modal-dialog {\r\n    -webkit-transform: scale(1.02);\r\n    transform: scale(1.02);\r\n}\r\n\r\n.modal-dialog-scrollable {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    max-height: calc(100% - 1rem);\r\n}\r\n\r\n.modal-dialog-scrollable .modal-content {\r\n    max-height: calc(100vh - 1rem);\r\n    overflow: hidden;\r\n}\r\n\r\n.modal-dialog-scrollable .modal-header,\r\n.modal-dialog-scrollable .modal-footer {\r\n    -ms-flex-negative: 0;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.modal-dialog-scrollable .modal-body {\r\n    overflow-y: auto;\r\n}\r\n\r\n.modal-dialog-centered {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    min-height: calc(100% - 1rem);\r\n}\r\n\r\n.modal-dialog-centered::before {\r\n    display: block;\r\n    height: calc(100vh - 1rem);\r\n    height: -webkit-min-content;\r\n    height: -moz-min-content;\r\n    height: min-content;\r\n    content: '';\r\n}\r\n\r\n.modal-dialog-centered.modal-dialog-scrollable {\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n}\r\n\r\n.modal-dialog-centered.modal-dialog-scrollable .modal-content {\r\n    max-height: none;\r\n}\r\n\r\n.modal-dialog-centered.modal-dialog-scrollable::before {\r\n    content: none;\r\n}\r\n\r\n.modal-content {\r\n    position: relative;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    pointer-events: auto;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    border-radius: 0.3rem;\r\n    outline: 0;\r\n}\r\n\r\n.modal-backdrop {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1040;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: #000;\r\n}\r\n\r\n.modal-backdrop.fade {\r\n    opacity: 0;\r\n}\r\n\r\n.modal-backdrop.show {\r\n    opacity: 0.5;\r\n}\r\n\r\n.modal-header {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: start;\r\n    align-items: flex-start;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    padding: 1rem 1rem;\r\n    border-bottom: 1px solid #dee2e6;\r\n    border-top-left-radius: calc(0.3rem - 1px);\r\n    border-top-right-radius: calc(0.3rem - 1px);\r\n}\r\n\r\n.modal-header .close {\r\n    padding: 1rem 1rem;\r\n    margin: -1rem -1rem -1rem auto;\r\n}\r\n\r\n.modal-title {\r\n    margin-bottom: 0;\r\n    line-height: 1.5;\r\n}\r\n\r\n.modal-body {\r\n    position: relative;\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n    padding: 1rem;\r\n}\r\n\r\n.modal-footer {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -ms-flex-pack: end;\r\n    justify-content: flex-end;\r\n    padding: 0.75rem;\r\n    border-top: 1px solid #dee2e6;\r\n    border-bottom-right-radius: calc(0.3rem - 1px);\r\n    border-bottom-left-radius: calc(0.3rem - 1px);\r\n}\r\n\r\n.modal-footer > * {\r\n    margin: 0.25rem;\r\n}\r\n\r\n.modal-scrollbar-measure {\r\n    position: absolute;\r\n    top: -9999px;\r\n    width: 50px;\r\n    height: 50px;\r\n    overflow: scroll;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .modal-dialog {\r\n        max-width: 500px;\r\n        margin: 1.75rem auto;\r\n    }\r\n    .modal-dialog-scrollable {\r\n        max-height: calc(100% - 3.5rem);\r\n    }\r\n    .modal-dialog-scrollable .modal-content {\r\n        max-height: calc(100vh - 3.5rem);\r\n    }\r\n    .modal-dialog-centered {\r\n        min-height: calc(100% - 3.5rem);\r\n    }\r\n    .modal-dialog-centered::before {\r\n        height: calc(100vh - 3.5rem);\r\n        height: -webkit-min-content;\r\n        height: -moz-min-content;\r\n        height: min-content;\r\n    }\r\n    .modal-sm {\r\n        max-width: 300px;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .modal-lg,\r\n    .modal-xl {\r\n        max-width: 800px;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .modal-xl {\r\n        max-width: 1140px;\r\n    }\r\n}\r\n\r\n.tooltip {\r\n    position: absolute;\r\n    z-index: 1070;\r\n    display: block;\r\n    margin: 0;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\r\n        'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',\r\n        'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    text-align: left;\r\n    text-align: start;\r\n    text-decoration: none;\r\n    text-shadow: none;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-break: normal;\r\n    word-spacing: normal;\r\n    white-space: normal;\r\n    line-break: auto;\r\n    font-size: 0.875rem;\r\n    word-wrap: break-word;\r\n    opacity: 0;\r\n}\r\n\r\n.tooltip.show {\r\n    opacity: 0.9;\r\n}\r\n\r\n.tooltip .arrow {\r\n    position: absolute;\r\n    display: block;\r\n    width: 0.8rem;\r\n    height: 0.4rem;\r\n}\r\n\r\n.tooltip .arrow::before {\r\n    position: absolute;\r\n    content: '';\r\n    border-color: transparent;\r\n    border-style: solid;\r\n}\r\n\r\n.bs-tooltip-top,\r\n.bs-tooltip-auto[x-placement^='top'] {\r\n    padding: 0.4rem 0;\r\n}\r\n\r\n.bs-tooltip-top .arrow,\r\n.bs-tooltip-auto[x-placement^='top'] .arrow {\r\n    bottom: 0;\r\n}\r\n\r\n.bs-tooltip-top .arrow::before,\r\n.bs-tooltip-auto[x-placement^='top'] .arrow::before {\r\n    top: 0;\r\n    border-width: 0.4rem 0.4rem 0;\r\n    border-top-color: #000;\r\n}\r\n\r\n.bs-tooltip-right,\r\n.bs-tooltip-auto[x-placement^='right'] {\r\n    padding: 0 0.4rem;\r\n}\r\n\r\n.bs-tooltip-right .arrow,\r\n.bs-tooltip-auto[x-placement^='right'] .arrow {\r\n    left: 0;\r\n    width: 0.4rem;\r\n    height: 0.8rem;\r\n}\r\n\r\n.bs-tooltip-right .arrow::before,\r\n.bs-tooltip-auto[x-placement^='right'] .arrow::before {\r\n    right: 0;\r\n    border-width: 0.4rem 0.4rem 0.4rem 0;\r\n    border-right-color: #000;\r\n}\r\n\r\n.bs-tooltip-bottom,\r\n.bs-tooltip-auto[x-placement^='bottom'] {\r\n    padding: 0.4rem 0;\r\n}\r\n\r\n.bs-tooltip-bottom .arrow,\r\n.bs-tooltip-auto[x-placement^='bottom'] .arrow {\r\n    top: 0;\r\n}\r\n\r\n.bs-tooltip-bottom .arrow::before,\r\n.bs-tooltip-auto[x-placement^='bottom'] .arrow::before {\r\n    bottom: 0;\r\n    border-width: 0 0.4rem 0.4rem;\r\n    border-bottom-color: #000;\r\n}\r\n\r\n.bs-tooltip-left,\r\n.bs-tooltip-auto[x-placement^='left'] {\r\n    padding: 0 0.4rem;\r\n}\r\n\r\n.bs-tooltip-left .arrow,\r\n.bs-tooltip-auto[x-placement^='left'] .arrow {\r\n    right: 0;\r\n    width: 0.4rem;\r\n    height: 0.8rem;\r\n}\r\n\r\n.bs-tooltip-left .arrow::before,\r\n.bs-tooltip-auto[x-placement^='left'] .arrow::before {\r\n    left: 0;\r\n    border-width: 0.4rem 0 0.4rem 0.4rem;\r\n    border-left-color: #000;\r\n}\r\n\r\n.tooltip-inner {\r\n    max-width: 200px;\r\n    padding: 0.25rem 0.5rem;\r\n    color: #fff;\r\n    text-align: center;\r\n    background-color: #000;\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.popover {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1060;\r\n    display: block;\r\n    max-width: 276px;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\r\n        'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',\r\n        'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    text-align: left;\r\n    text-align: start;\r\n    text-decoration: none;\r\n    text-shadow: none;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-break: normal;\r\n    word-spacing: normal;\r\n    white-space: normal;\r\n    line-break: auto;\r\n    font-size: 0.875rem;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    border-radius: 0.3rem;\r\n}\r\n\r\n.popover .arrow {\r\n    position: absolute;\r\n    display: block;\r\n    width: 1rem;\r\n    height: 0.5rem;\r\n    margin: 0 0.3rem;\r\n}\r\n\r\n.popover .arrow::before,\r\n.popover .arrow::after {\r\n    position: absolute;\r\n    display: block;\r\n    content: '';\r\n    border-color: transparent;\r\n    border-style: solid;\r\n}\r\n\r\n.bs-popover-top,\r\n.bs-popover-auto[x-placement^='top'] {\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n.bs-popover-top > .arrow,\r\n.bs-popover-auto[x-placement^='top'] > .arrow {\r\n    bottom: calc(-0.5rem - 1px);\r\n}\r\n\r\n.bs-popover-top > .arrow::before,\r\n.bs-popover-auto[x-placement^='top'] > .arrow::before {\r\n    bottom: 0;\r\n    border-width: 0.5rem 0.5rem 0;\r\n    border-top-color: rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.bs-popover-top > .arrow::after,\r\n.bs-popover-auto[x-placement^='top'] > .arrow::after {\r\n    bottom: 1px;\r\n    border-width: 0.5rem 0.5rem 0;\r\n    border-top-color: #fff;\r\n}\r\n\r\n.bs-popover-right,\r\n.bs-popover-auto[x-placement^='right'] {\r\n    margin-left: 0.5rem;\r\n}\r\n\r\n.bs-popover-right > .arrow,\r\n.bs-popover-auto[x-placement^='right'] > .arrow {\r\n    left: calc(-0.5rem - 1px);\r\n    width: 0.5rem;\r\n    height: 1rem;\r\n    margin: 0.3rem 0;\r\n}\r\n\r\n.bs-popover-right > .arrow::before,\r\n.bs-popover-auto[x-placement^='right'] > .arrow::before {\r\n    left: 0;\r\n    border-width: 0.5rem 0.5rem 0.5rem 0;\r\n    border-right-color: rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.bs-popover-right > .arrow::after,\r\n.bs-popover-auto[x-placement^='right'] > .arrow::after {\r\n    left: 1px;\r\n    border-width: 0.5rem 0.5rem 0.5rem 0;\r\n    border-right-color: #fff;\r\n}\r\n\r\n.bs-popover-bottom,\r\n.bs-popover-auto[x-placement^='bottom'] {\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n.bs-popover-bottom > .arrow,\r\n.bs-popover-auto[x-placement^='bottom'] > .arrow {\r\n    top: calc(-0.5rem - 1px);\r\n}\r\n\r\n.bs-popover-bottom > .arrow::before,\r\n.bs-popover-auto[x-placement^='bottom'] > .arrow::before {\r\n    top: 0;\r\n    border-width: 0 0.5rem 0.5rem 0.5rem;\r\n    border-bottom-color: rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.bs-popover-bottom > .arrow::after,\r\n.bs-popover-auto[x-placement^='bottom'] > .arrow::after {\r\n    top: 1px;\r\n    border-width: 0 0.5rem 0.5rem 0.5rem;\r\n    border-bottom-color: #fff;\r\n}\r\n\r\n.bs-popover-bottom .popover-header::before,\r\n.bs-popover-auto[x-placement^='bottom'] .popover-header::before {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 50%;\r\n    display: block;\r\n    width: 1rem;\r\n    margin-left: -0.5rem;\r\n    content: '';\r\n    border-bottom: 1px solid #f7f7f7;\r\n}\r\n\r\n.bs-popover-left,\r\n.bs-popover-auto[x-placement^='left'] {\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.bs-popover-left > .arrow,\r\n.bs-popover-auto[x-placement^='left'] > .arrow {\r\n    right: calc(-0.5rem - 1px);\r\n    width: 0.5rem;\r\n    height: 1rem;\r\n    margin: 0.3rem 0;\r\n}\r\n\r\n.bs-popover-left > .arrow::before,\r\n.bs-popover-auto[x-placement^='left'] > .arrow::before {\r\n    right: 0;\r\n    border-width: 0.5rem 0 0.5rem 0.5rem;\r\n    border-left-color: rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.bs-popover-left > .arrow::after,\r\n.bs-popover-auto[x-placement^='left'] > .arrow::after {\r\n    right: 1px;\r\n    border-width: 0.5rem 0 0.5rem 0.5rem;\r\n    border-left-color: #fff;\r\n}\r\n\r\n.popover-header {\r\n    padding: 0.5rem 0.75rem;\r\n    margin-bottom: 0;\r\n    font-size: 1rem;\r\n    background-color: #f7f7f7;\r\n    border-bottom: 1px solid #ebebeb;\r\n    border-top-left-radius: calc(0.3rem - 1px);\r\n    border-top-right-radius: calc(0.3rem - 1px);\r\n}\r\n\r\n.popover-header:empty {\r\n    display: none;\r\n}\r\n\r\n.popover-body {\r\n    padding: 0.5rem 0.75rem;\r\n    color: #212529;\r\n}\r\n\r\n.carousel {\r\n    position: relative;\r\n}\r\n\r\n.carousel.pointer-event {\r\n    -ms-touch-action: pan-y;\r\n    touch-action: pan-y;\r\n}\r\n\r\n.carousel-inner {\r\n    position: relative;\r\n    width: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.carousel-inner::after {\r\n    display: block;\r\n    clear: both;\r\n    content: '';\r\n}\r\n\r\n.carousel-item {\r\n    position: relative;\r\n    display: none;\r\n    float: left;\r\n    width: 100%;\r\n    margin-right: -100%;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    transition: -webkit-transform 0.6s ease-in-out;\r\n    transition: transform 0.6s ease-in-out;\r\n    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n    .carousel-item {\r\n        transition: none;\r\n    }\r\n}\r\n\r\n.carousel-item.active,\r\n.carousel-item-next,\r\n.carousel-item-prev {\r\n    display: block;\r\n}\r\n\r\n.carousel-item-next:not(.carousel-item-left),\r\n.active.carousel-item-right {\r\n    -webkit-transform: translateX(100%);\r\n    transform: translateX(100%);\r\n}\r\n\r\n.carousel-item-prev:not(.carousel-item-right),\r\n.active.carousel-item-left {\r\n    -webkit-transform: translateX(-100%);\r\n    transform: translateX(-100%);\r\n}\r\n\r\n.carousel-fade .carousel-item {\r\n    opacity: 0;\r\n    transition-property: opacity;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n}\r\n\r\n.carousel-fade .carousel-item.active,\r\n.carousel-fade .carousel-item-next.carousel-item-left,\r\n.carousel-fade .carousel-item-prev.carousel-item-right {\r\n    z-index: 1;\r\n    opacity: 1;\r\n}\r\n\r\n.carousel-fade .active.carousel-item-left,\r\n.carousel-fade .active.carousel-item-right {\r\n    z-index: 0;\r\n    opacity: 0;\r\n    transition: opacity 0s 0.6s;\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n    .carousel-fade .active.carousel-item-left,\r\n    .carousel-fade .active.carousel-item-right {\r\n        transition: none;\r\n    }\r\n}\r\n\r\n.carousel-control-prev,\r\n.carousel-control-next {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    z-index: 1;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    width: 15%;\r\n    color: #fff;\r\n    text-align: center;\r\n    opacity: 0.5;\r\n    transition: opacity 0.15s ease;\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n    .carousel-control-prev,\r\n    .carousel-control-next {\r\n        transition: none;\r\n    }\r\n}\r\n\r\n.carousel-control-prev:hover,\r\n.carousel-control-prev:focus,\r\n.carousel-control-next:hover,\r\n.carousel-control-next:focus {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    outline: 0;\r\n    opacity: 0.9;\r\n}\r\n\r\n.carousel-control-prev {\r\n    left: 0;\r\n}\r\n\r\n.carousel-control-next {\r\n    right: 0;\r\n}\r\n\r\n.carousel-control-prev-icon,\r\n.carousel-control-next-icon {\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    background: no-repeat 50% / 100% 100%;\r\n}\r\n\r\n.carousel-control-prev-icon {\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\");\r\n}\r\n\r\n.carousel-control-next-icon {\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\");\r\n}\r\n\r\n.carousel-indicators {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 15;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    padding-left: 0;\r\n    margin-right: 15%;\r\n    margin-left: 15%;\r\n    list-style: none;\r\n}\r\n\r\n.carousel-indicators li {\r\n    box-sizing: content-box;\r\n    -ms-flex: 0 1 auto;\r\n    flex: 0 1 auto;\r\n    width: 30px;\r\n    height: 3px;\r\n    margin-right: 3px;\r\n    margin-left: 3px;\r\n    text-indent: -999px;\r\n    cursor: pointer;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border-top: 10px solid transparent;\r\n    border-bottom: 10px solid transparent;\r\n    opacity: 0.5;\r\n    transition: opacity 0.6s ease;\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n    .carousel-indicators li {\r\n        transition: none;\r\n    }\r\n}\r\n\r\n.carousel-indicators .active {\r\n    opacity: 1;\r\n}\r\n\r\n.carousel-caption {\r\n    position: absolute;\r\n    right: 15%;\r\n    bottom: 20px;\r\n    left: 15%;\r\n    z-index: 10;\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n\r\n@-webkit-keyframes spinner-border {\r\n    to {\r\n        -webkit-transform: rotate(360deg);\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes spinner-border {\r\n    to {\r\n        -webkit-transform: rotate(360deg);\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n.spinner-border {\r\n    display: inline-block;\r\n    width: 2rem;\r\n    height: 2rem;\r\n    vertical-align: text-bottom;\r\n    border: 0.25em solid currentColor;\r\n    border-right-color: transparent;\r\n    border-radius: 50%;\r\n    -webkit-animation: spinner-border 0.75s linear infinite;\r\n    animation: spinner-border 0.75s linear infinite;\r\n}\r\n\r\n.spinner-border-sm {\r\n    width: 1rem;\r\n    height: 1rem;\r\n    border-width: 0.2em;\r\n}\r\n\r\n@-webkit-keyframes spinner-grow {\r\n    0% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n    50% {\r\n        opacity: 1;\r\n        -webkit-transform: none;\r\n        transform: none;\r\n    }\r\n}\r\n\r\n@keyframes spinner-grow {\r\n    0% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n    50% {\r\n        opacity: 1;\r\n        -webkit-transform: none;\r\n        transform: none;\r\n    }\r\n}\r\n\r\n.spinner-grow {\r\n    display: inline-block;\r\n    width: 2rem;\r\n    height: 2rem;\r\n    vertical-align: text-bottom;\r\n    background-color: currentColor;\r\n    border-radius: 50%;\r\n    opacity: 0;\r\n    -webkit-animation: spinner-grow 0.75s linear infinite;\r\n    animation: spinner-grow 0.75s linear infinite;\r\n}\r\n\r\n.spinner-grow-sm {\r\n    width: 1rem;\r\n    height: 1rem;\r\n}\r\n\r\n.align-baseline {\r\n    vertical-align: baseline !important;\r\n}\r\n\r\n.align-top {\r\n    vertical-align: top !important;\r\n}\r\n\r\n.align-middle {\r\n    vertical-align: middle !important;\r\n}\r\n\r\n.align-bottom {\r\n    vertical-align: bottom !important;\r\n}\r\n\r\n.align-text-bottom {\r\n    vertical-align: text-bottom !important;\r\n}\r\n\r\n.align-text-top {\r\n    vertical-align: text-top !important;\r\n}\r\n\r\n.bg-primary {\r\n    background-color: #007bff !important;\r\n}\r\n\r\na.bg-primary:hover,\r\na.bg-primary:focus,\r\nbutton.bg-primary:hover,\r\nbutton.bg-primary:focus {\r\n    background-color: #0062cc !important;\r\n}\r\n\r\n.bg-secondary {\r\n    background-color: #6c757d !important;\r\n}\r\n\r\na.bg-secondary:hover,\r\na.bg-secondary:focus,\r\nbutton.bg-secondary:hover,\r\nbutton.bg-secondary:focus {\r\n    background-color: #545b62 !important;\r\n}\r\n\r\n.bg-success {\r\n    background-color: #28a745 !important;\r\n}\r\n\r\na.bg-success:hover,\r\na.bg-success:focus,\r\nbutton.bg-success:hover,\r\nbutton.bg-success:focus {\r\n    background-color: #1e7e34 !important;\r\n}\r\n\r\n.bg-info {\r\n    background-color: #17a2b8 !important;\r\n}\r\n\r\na.bg-info:hover,\r\na.bg-info:focus,\r\nbutton.bg-info:hover,\r\nbutton.bg-info:focus {\r\n    background-color: #117a8b !important;\r\n}\r\n\r\n.bg-warning {\r\n    background-color: #ffc107 !important;\r\n}\r\n\r\na.bg-warning:hover,\r\na.bg-warning:focus,\r\nbutton.bg-warning:hover,\r\nbutton.bg-warning:focus {\r\n    background-color: #d39e00 !important;\r\n}\r\n\r\n.bg-danger {\r\n    background-color: #dc3545 !important;\r\n}\r\n\r\na.bg-danger:hover,\r\na.bg-danger:focus,\r\nbutton.bg-danger:hover,\r\nbutton.bg-danger:focus {\r\n    background-color: #bd2130 !important;\r\n}\r\n\r\n.bg-light {\r\n    background-color: #f8f9fa !important;\r\n}\r\n\r\na.bg-light:hover,\r\na.bg-light:focus,\r\nbutton.bg-light:hover,\r\nbutton.bg-light:focus {\r\n    background-color: #dae0e5 !important;\r\n}\r\n\r\n.bg-dark {\r\n    background-color: #343a40 !important;\r\n}\r\n\r\na.bg-dark:hover,\r\na.bg-dark:focus,\r\nbutton.bg-dark:hover,\r\nbutton.bg-dark:focus {\r\n    background-color: #1d2124 !important;\r\n}\r\n\r\n.bg-white {\r\n    background-color: #fff !important;\r\n}\r\n\r\n.bg-transparent {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.border {\r\n    border: 1px solid #dee2e6 !important;\r\n}\r\n\r\n.border-top {\r\n    border-top: 1px solid #dee2e6 !important;\r\n}\r\n\r\n.border-right {\r\n    border-right: 1px solid #dee2e6 !important;\r\n}\r\n\r\n.border-bottom {\r\n    border-bottom: 1px solid #dee2e6 !important;\r\n}\r\n\r\n.border-left {\r\n    border-left: 1px solid #dee2e6 !important;\r\n}\r\n\r\n.border-0 {\r\n    border: 0 !important;\r\n}\r\n\r\n.border-top-0 {\r\n    border-top: 0 !important;\r\n}\r\n\r\n.border-right-0 {\r\n    border-right: 0 !important;\r\n}\r\n\r\n.border-bottom-0 {\r\n    border-bottom: 0 !important;\r\n}\r\n\r\n.border-left-0 {\r\n    border-left: 0 !important;\r\n}\r\n\r\n.border-primary {\r\n    border-color: #007bff !important;\r\n}\r\n\r\n.border-secondary {\r\n    border-color: #6c757d !important;\r\n}\r\n\r\n.border-success {\r\n    border-color: #28a745 !important;\r\n}\r\n\r\n.border-info {\r\n    border-color: #17a2b8 !important;\r\n}\r\n\r\n.border-warning {\r\n    border-color: #ffc107 !important;\r\n}\r\n\r\n.border-danger {\r\n    border-color: #dc3545 !important;\r\n}\r\n\r\n.border-light {\r\n    border-color: #f8f9fa !important;\r\n}\r\n\r\n.border-dark {\r\n    border-color: #343a40 !important;\r\n}\r\n\r\n.border-white {\r\n    border-color: #fff !important;\r\n}\r\n\r\n.rounded-sm {\r\n    border-radius: 0.2rem !important;\r\n}\r\n\r\n.rounded {\r\n    border-radius: 0.25rem !important;\r\n}\r\n\r\n.rounded-top {\r\n    border-top-left-radius: 0.25rem !important;\r\n    border-top-right-radius: 0.25rem !important;\r\n}\r\n\r\n.rounded-right {\r\n    border-top-right-radius: 0.25rem !important;\r\n    border-bottom-right-radius: 0.25rem !important;\r\n}\r\n\r\n.rounded-bottom {\r\n    border-bottom-right-radius: 0.25rem !important;\r\n    border-bottom-left-radius: 0.25rem !important;\r\n}\r\n\r\n.rounded-left {\r\n    border-top-left-radius: 0.25rem !important;\r\n    border-bottom-left-radius: 0.25rem !important;\r\n}\r\n\r\n.rounded-lg {\r\n    border-radius: 0.3rem !important;\r\n}\r\n\r\n.rounded-circle {\r\n    border-radius: 50% !important;\r\n}\r\n\r\n.rounded-pill {\r\n    border-radius: 50rem !important;\r\n}\r\n\r\n.rounded-0 {\r\n    border-radius: 0 !important;\r\n}\r\n\r\n.clearfix::after {\r\n    display: block;\r\n    clear: both;\r\n    content: '';\r\n}\r\n\r\n.d-none {\r\n    display: none !important;\r\n}\r\n\r\n.d-inline {\r\n    display: inline !important;\r\n}\r\n\r\n.d-inline-block {\r\n    display: inline-block !important;\r\n}\r\n\r\n.d-block {\r\n    display: block !important;\r\n}\r\n\r\n.d-table {\r\n    display: table !important;\r\n}\r\n\r\n.d-table-row {\r\n    display: table-row !important;\r\n}\r\n\r\n.d-table-cell {\r\n    display: table-cell !important;\r\n}\r\n\r\n.d-flex {\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n}\r\n\r\n.d-inline-flex {\r\n    display: -ms-inline-flexbox !important;\r\n    display: inline-flex !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .d-sm-none {\r\n        display: none !important;\r\n    }\r\n    .d-sm-inline {\r\n        display: inline !important;\r\n    }\r\n    .d-sm-inline-block {\r\n        display: inline-block !important;\r\n    }\r\n    .d-sm-block {\r\n        display: block !important;\r\n    }\r\n    .d-sm-table {\r\n        display: table !important;\r\n    }\r\n    .d-sm-table-row {\r\n        display: table-row !important;\r\n    }\r\n    .d-sm-table-cell {\r\n        display: table-cell !important;\r\n    }\r\n    .d-sm-flex {\r\n        display: -ms-flexbox !important;\r\n        display: flex !important;\r\n    }\r\n    .d-sm-inline-flex {\r\n        display: -ms-inline-flexbox !important;\r\n        display: inline-flex !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .d-md-none {\r\n        display: none !important;\r\n    }\r\n    .d-md-inline {\r\n        display: inline !important;\r\n    }\r\n    .d-md-inline-block {\r\n        display: inline-block !important;\r\n    }\r\n    .d-md-block {\r\n        display: block !important;\r\n    }\r\n    .d-md-table {\r\n        display: table !important;\r\n    }\r\n    .d-md-table-row {\r\n        display: table-row !important;\r\n    }\r\n    .d-md-table-cell {\r\n        display: table-cell !important;\r\n    }\r\n    .d-md-flex {\r\n        display: -ms-flexbox !important;\r\n        display: flex !important;\r\n    }\r\n    .d-md-inline-flex {\r\n        display: -ms-inline-flexbox !important;\r\n        display: inline-flex !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .d-lg-none {\r\n        display: none !important;\r\n    }\r\n    .d-lg-inline {\r\n        display: inline !important;\r\n    }\r\n    .d-lg-inline-block {\r\n        display: inline-block !important;\r\n    }\r\n    .d-lg-block {\r\n        display: block !important;\r\n    }\r\n    .d-lg-table {\r\n        display: table !important;\r\n    }\r\n    .d-lg-table-row {\r\n        display: table-row !important;\r\n    }\r\n    .d-lg-table-cell {\r\n        display: table-cell !important;\r\n    }\r\n    .d-lg-flex {\r\n        display: -ms-flexbox !important;\r\n        display: flex !important;\r\n    }\r\n    .d-lg-inline-flex {\r\n        display: -ms-inline-flexbox !important;\r\n        display: inline-flex !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .d-xl-none {\r\n        display: none !important;\r\n    }\r\n    .d-xl-inline {\r\n        display: inline !important;\r\n    }\r\n    .d-xl-inline-block {\r\n        display: inline-block !important;\r\n    }\r\n    .d-xl-block {\r\n        display: block !important;\r\n    }\r\n    .d-xl-table {\r\n        display: table !important;\r\n    }\r\n    .d-xl-table-row {\r\n        display: table-row !important;\r\n    }\r\n    .d-xl-table-cell {\r\n        display: table-cell !important;\r\n    }\r\n    .d-xl-flex {\r\n        display: -ms-flexbox !important;\r\n        display: flex !important;\r\n    }\r\n    .d-xl-inline-flex {\r\n        display: -ms-inline-flexbox !important;\r\n        display: inline-flex !important;\r\n    }\r\n}\r\n\r\n@media print {\r\n    .d-print-none {\r\n        display: none !important;\r\n    }\r\n    .d-print-inline {\r\n        display: inline !important;\r\n    }\r\n    .d-print-inline-block {\r\n        display: inline-block !important;\r\n    }\r\n    .d-print-block {\r\n        display: block !important;\r\n    }\r\n    .d-print-table {\r\n        display: table !important;\r\n    }\r\n    .d-print-table-row {\r\n        display: table-row !important;\r\n    }\r\n    .d-print-table-cell {\r\n        display: table-cell !important;\r\n    }\r\n    .d-print-flex {\r\n        display: -ms-flexbox !important;\r\n        display: flex !important;\r\n    }\r\n    .d-print-inline-flex {\r\n        display: -ms-inline-flexbox !important;\r\n        display: inline-flex !important;\r\n    }\r\n}\r\n\r\n.embed-responsive {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    padding: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.embed-responsive::before {\r\n    display: block;\r\n    content: '';\r\n}\r\n\r\n.embed-responsive .embed-responsive-item,\r\n.embed-responsive iframe,\r\n.embed-responsive embed,\r\n.embed-responsive object,\r\n.embed-responsive video {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 0;\r\n}\r\n\r\n.embed-responsive-21by9::before {\r\n    padding-top: 42.857143%;\r\n}\r\n\r\n.embed-responsive-16by9::before {\r\n    padding-top: 56.25%;\r\n}\r\n\r\n.embed-responsive-4by3::before {\r\n    padding-top: 75%;\r\n}\r\n\r\n.embed-responsive-1by1::before {\r\n    padding-top: 100%;\r\n}\r\n\r\n.flex-row {\r\n    -ms-flex-direction: row !important;\r\n    flex-direction: row !important;\r\n}\r\n\r\n.flex-column {\r\n    -ms-flex-direction: column !important;\r\n    flex-direction: column !important;\r\n}\r\n\r\n.flex-row-reverse {\r\n    -ms-flex-direction: row-reverse !important;\r\n    flex-direction: row-reverse !important;\r\n}\r\n\r\n.flex-column-reverse {\r\n    -ms-flex-direction: column-reverse !important;\r\n    flex-direction: column-reverse !important;\r\n}\r\n\r\n.flex-wrap {\r\n    -ms-flex-wrap: wrap !important;\r\n    flex-wrap: wrap !important;\r\n}\r\n\r\n.flex-nowrap {\r\n    -ms-flex-wrap: nowrap !important;\r\n    flex-wrap: nowrap !important;\r\n}\r\n\r\n.flex-wrap-reverse {\r\n    -ms-flex-wrap: wrap-reverse !important;\r\n    flex-wrap: wrap-reverse !important;\r\n}\r\n\r\n.flex-fill {\r\n    -ms-flex: 1 1 auto !important;\r\n    flex: 1 1 auto !important;\r\n}\r\n\r\n.flex-grow-0 {\r\n    -ms-flex-positive: 0 !important;\r\n    flex-grow: 0 !important;\r\n}\r\n\r\n.flex-grow-1 {\r\n    -ms-flex-positive: 1 !important;\r\n    flex-grow: 1 !important;\r\n}\r\n\r\n.flex-shrink-0 {\r\n    -ms-flex-negative: 0 !important;\r\n    flex-shrink: 0 !important;\r\n}\r\n\r\n.flex-shrink-1 {\r\n    -ms-flex-negative: 1 !important;\r\n    flex-shrink: 1 !important;\r\n}\r\n\r\n.justify-content-start {\r\n    -ms-flex-pack: start !important;\r\n    justify-content: flex-start !important;\r\n}\r\n\r\n.justify-content-end {\r\n    -ms-flex-pack: end !important;\r\n    justify-content: flex-end !important;\r\n}\r\n\r\n.justify-content-center {\r\n    -ms-flex-pack: center !important;\r\n    justify-content: center !important;\r\n}\r\n\r\n.justify-content-between {\r\n    -ms-flex-pack: justify !important;\r\n    justify-content: space-between !important;\r\n}\r\n\r\n.justify-content-around {\r\n    -ms-flex-pack: distribute !important;\r\n    justify-content: space-around !important;\r\n}\r\n\r\n.align-items-start {\r\n    -ms-flex-align: start !important;\r\n    align-items: flex-start !important;\r\n}\r\n\r\n.align-items-end {\r\n    -ms-flex-align: end !important;\r\n    align-items: flex-end !important;\r\n}\r\n\r\n.align-items-center {\r\n    -ms-flex-align: center !important;\r\n    align-items: center !important;\r\n}\r\n\r\n.align-items-baseline {\r\n    -ms-flex-align: baseline !important;\r\n    align-items: baseline !important;\r\n}\r\n\r\n.align-items-stretch {\r\n    -ms-flex-align: stretch !important;\r\n    align-items: stretch !important;\r\n}\r\n\r\n.align-content-start {\r\n    -ms-flex-line-pack: start !important;\r\n    align-content: flex-start !important;\r\n}\r\n\r\n.align-content-end {\r\n    -ms-flex-line-pack: end !important;\r\n    align-content: flex-end !important;\r\n}\r\n\r\n.align-content-center {\r\n    -ms-flex-line-pack: center !important;\r\n    align-content: center !important;\r\n}\r\n\r\n.align-content-between {\r\n    -ms-flex-line-pack: justify !important;\r\n    align-content: space-between !important;\r\n}\r\n\r\n.align-content-around {\r\n    -ms-flex-line-pack: distribute !important;\r\n    align-content: space-around !important;\r\n}\r\n\r\n.align-content-stretch {\r\n    -ms-flex-line-pack: stretch !important;\r\n    align-content: stretch !important;\r\n}\r\n\r\n.align-self-auto {\r\n    -ms-flex-item-align: auto !important;\r\n    align-self: auto !important;\r\n}\r\n\r\n.align-self-start {\r\n    -ms-flex-item-align: start !important;\r\n    align-self: flex-start !important;\r\n}\r\n\r\n.align-self-end {\r\n    -ms-flex-item-align: end !important;\r\n    align-self: flex-end !important;\r\n}\r\n\r\n.align-self-center {\r\n    -ms-flex-item-align: center !important;\r\n    align-self: center !important;\r\n}\r\n\r\n.align-self-baseline {\r\n    -ms-flex-item-align: baseline !important;\r\n    align-self: baseline !important;\r\n}\r\n\r\n.align-self-stretch {\r\n    -ms-flex-item-align: stretch !important;\r\n    align-self: stretch !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .flex-sm-row {\r\n        -ms-flex-direction: row !important;\r\n        flex-direction: row !important;\r\n    }\r\n    .flex-sm-column {\r\n        -ms-flex-direction: column !important;\r\n        flex-direction: column !important;\r\n    }\r\n    .flex-sm-row-reverse {\r\n        -ms-flex-direction: row-reverse !important;\r\n        flex-direction: row-reverse !important;\r\n    }\r\n    .flex-sm-column-reverse {\r\n        -ms-flex-direction: column-reverse !important;\r\n        flex-direction: column-reverse !important;\r\n    }\r\n    .flex-sm-wrap {\r\n        -ms-flex-wrap: wrap !important;\r\n        flex-wrap: wrap !important;\r\n    }\r\n    .flex-sm-nowrap {\r\n        -ms-flex-wrap: nowrap !important;\r\n        flex-wrap: nowrap !important;\r\n    }\r\n    .flex-sm-wrap-reverse {\r\n        -ms-flex-wrap: wrap-reverse !important;\r\n        flex-wrap: wrap-reverse !important;\r\n    }\r\n    .flex-sm-fill {\r\n        -ms-flex: 1 1 auto !important;\r\n        flex: 1 1 auto !important;\r\n    }\r\n    .flex-sm-grow-0 {\r\n        -ms-flex-positive: 0 !important;\r\n        flex-grow: 0 !important;\r\n    }\r\n    .flex-sm-grow-1 {\r\n        -ms-flex-positive: 1 !important;\r\n        flex-grow: 1 !important;\r\n    }\r\n    .flex-sm-shrink-0 {\r\n        -ms-flex-negative: 0 !important;\r\n        flex-shrink: 0 !important;\r\n    }\r\n    .flex-sm-shrink-1 {\r\n        -ms-flex-negative: 1 !important;\r\n        flex-shrink: 1 !important;\r\n    }\r\n    .justify-content-sm-start {\r\n        -ms-flex-pack: start !important;\r\n        justify-content: flex-start !important;\r\n    }\r\n    .justify-content-sm-end {\r\n        -ms-flex-pack: end !important;\r\n        justify-content: flex-end !important;\r\n    }\r\n    .justify-content-sm-center {\r\n        -ms-flex-pack: center !important;\r\n        justify-content: center !important;\r\n    }\r\n    .justify-content-sm-between {\r\n        -ms-flex-pack: justify !important;\r\n        justify-content: space-between !important;\r\n    }\r\n    .justify-content-sm-around {\r\n        -ms-flex-pack: distribute !important;\r\n        justify-content: space-around !important;\r\n    }\r\n    .align-items-sm-start {\r\n        -ms-flex-align: start !important;\r\n        align-items: flex-start !important;\r\n    }\r\n    .align-items-sm-end {\r\n        -ms-flex-align: end !important;\r\n        align-items: flex-end !important;\r\n    }\r\n    .align-items-sm-center {\r\n        -ms-flex-align: center !important;\r\n        align-items: center !important;\r\n    }\r\n    .align-items-sm-baseline {\r\n        -ms-flex-align: baseline !important;\r\n        align-items: baseline !important;\r\n    }\r\n    .align-items-sm-stretch {\r\n        -ms-flex-align: stretch !important;\r\n        align-items: stretch !important;\r\n    }\r\n    .align-content-sm-start {\r\n        -ms-flex-line-pack: start !important;\r\n        align-content: flex-start !important;\r\n    }\r\n    .align-content-sm-end {\r\n        -ms-flex-line-pack: end !important;\r\n        align-content: flex-end !important;\r\n    }\r\n    .align-content-sm-center {\r\n        -ms-flex-line-pack: center !important;\r\n        align-content: center !important;\r\n    }\r\n    .align-content-sm-between {\r\n        -ms-flex-line-pack: justify !important;\r\n        align-content: space-between !important;\r\n    }\r\n    .align-content-sm-around {\r\n        -ms-flex-line-pack: distribute !important;\r\n        align-content: space-around !important;\r\n    }\r\n    .align-content-sm-stretch {\r\n        -ms-flex-line-pack: stretch !important;\r\n        align-content: stretch !important;\r\n    }\r\n    .align-self-sm-auto {\r\n        -ms-flex-item-align: auto !important;\r\n        align-self: auto !important;\r\n    }\r\n    .align-self-sm-start {\r\n        -ms-flex-item-align: start !important;\r\n        align-self: flex-start !important;\r\n    }\r\n    .align-self-sm-end {\r\n        -ms-flex-item-align: end !important;\r\n        align-self: flex-end !important;\r\n    }\r\n    .align-self-sm-center {\r\n        -ms-flex-item-align: center !important;\r\n        align-self: center !important;\r\n    }\r\n    .align-self-sm-baseline {\r\n        -ms-flex-item-align: baseline !important;\r\n        align-self: baseline !important;\r\n    }\r\n    .align-self-sm-stretch {\r\n        -ms-flex-item-align: stretch !important;\r\n        align-self: stretch !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .flex-md-row {\r\n        -ms-flex-direction: row !important;\r\n        flex-direction: row !important;\r\n    }\r\n    .flex-md-column {\r\n        -ms-flex-direction: column !important;\r\n        flex-direction: column !important;\r\n    }\r\n    .flex-md-row-reverse {\r\n        -ms-flex-direction: row-reverse !important;\r\n        flex-direction: row-reverse !important;\r\n    }\r\n    .flex-md-column-reverse {\r\n        -ms-flex-direction: column-reverse !important;\r\n        flex-direction: column-reverse !important;\r\n    }\r\n    .flex-md-wrap {\r\n        -ms-flex-wrap: wrap !important;\r\n        flex-wrap: wrap !important;\r\n    }\r\n    .flex-md-nowrap {\r\n        -ms-flex-wrap: nowrap !important;\r\n        flex-wrap: nowrap !important;\r\n    }\r\n    .flex-md-wrap-reverse {\r\n        -ms-flex-wrap: wrap-reverse !important;\r\n        flex-wrap: wrap-reverse !important;\r\n    }\r\n    .flex-md-fill {\r\n        -ms-flex: 1 1 auto !important;\r\n        flex: 1 1 auto !important;\r\n    }\r\n    .flex-md-grow-0 {\r\n        -ms-flex-positive: 0 !important;\r\n        flex-grow: 0 !important;\r\n    }\r\n    .flex-md-grow-1 {\r\n        -ms-flex-positive: 1 !important;\r\n        flex-grow: 1 !important;\r\n    }\r\n    .flex-md-shrink-0 {\r\n        -ms-flex-negative: 0 !important;\r\n        flex-shrink: 0 !important;\r\n    }\r\n    .flex-md-shrink-1 {\r\n        -ms-flex-negative: 1 !important;\r\n        flex-shrink: 1 !important;\r\n    }\r\n    .justify-content-md-start {\r\n        -ms-flex-pack: start !important;\r\n        justify-content: flex-start !important;\r\n    }\r\n    .justify-content-md-end {\r\n        -ms-flex-pack: end !important;\r\n        justify-content: flex-end !important;\r\n    }\r\n    .justify-content-md-center {\r\n        -ms-flex-pack: center !important;\r\n        justify-content: center !important;\r\n    }\r\n    .justify-content-md-between {\r\n        -ms-flex-pack: justify !important;\r\n        justify-content: space-between !important;\r\n    }\r\n    .justify-content-md-around {\r\n        -ms-flex-pack: distribute !important;\r\n        justify-content: space-around !important;\r\n    }\r\n    .align-items-md-start {\r\n        -ms-flex-align: start !important;\r\n        align-items: flex-start !important;\r\n    }\r\n    .align-items-md-end {\r\n        -ms-flex-align: end !important;\r\n        align-items: flex-end !important;\r\n    }\r\n    .align-items-md-center {\r\n        -ms-flex-align: center !important;\r\n        align-items: center !important;\r\n    }\r\n    .align-items-md-baseline {\r\n        -ms-flex-align: baseline !important;\r\n        align-items: baseline !important;\r\n    }\r\n    .align-items-md-stretch {\r\n        -ms-flex-align: stretch !important;\r\n        align-items: stretch !important;\r\n    }\r\n    .align-content-md-start {\r\n        -ms-flex-line-pack: start !important;\r\n        align-content: flex-start !important;\r\n    }\r\n    .align-content-md-end {\r\n        -ms-flex-line-pack: end !important;\r\n        align-content: flex-end !important;\r\n    }\r\n    .align-content-md-center {\r\n        -ms-flex-line-pack: center !important;\r\n        align-content: center !important;\r\n    }\r\n    .align-content-md-between {\r\n        -ms-flex-line-pack: justify !important;\r\n        align-content: space-between !important;\r\n    }\r\n    .align-content-md-around {\r\n        -ms-flex-line-pack: distribute !important;\r\n        align-content: space-around !important;\r\n    }\r\n    .align-content-md-stretch {\r\n        -ms-flex-line-pack: stretch !important;\r\n        align-content: stretch !important;\r\n    }\r\n    .align-self-md-auto {\r\n        -ms-flex-item-align: auto !important;\r\n        align-self: auto !important;\r\n    }\r\n    .align-self-md-start {\r\n        -ms-flex-item-align: start !important;\r\n        align-self: flex-start !important;\r\n    }\r\n    .align-self-md-end {\r\n        -ms-flex-item-align: end !important;\r\n        align-self: flex-end !important;\r\n    }\r\n    .align-self-md-center {\r\n        -ms-flex-item-align: center !important;\r\n        align-self: center !important;\r\n    }\r\n    .align-self-md-baseline {\r\n        -ms-flex-item-align: baseline !important;\r\n        align-self: baseline !important;\r\n    }\r\n    .align-self-md-stretch {\r\n        -ms-flex-item-align: stretch !important;\r\n        align-self: stretch !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .flex-lg-row {\r\n        -ms-flex-direction: row !important;\r\n        flex-direction: row !important;\r\n    }\r\n    .flex-lg-column {\r\n        -ms-flex-direction: column !important;\r\n        flex-direction: column !important;\r\n    }\r\n    .flex-lg-row-reverse {\r\n        -ms-flex-direction: row-reverse !important;\r\n        flex-direction: row-reverse !important;\r\n    }\r\n    .flex-lg-column-reverse {\r\n        -ms-flex-direction: column-reverse !important;\r\n        flex-direction: column-reverse !important;\r\n    }\r\n    .flex-lg-wrap {\r\n        -ms-flex-wrap: wrap !important;\r\n        flex-wrap: wrap !important;\r\n    }\r\n    .flex-lg-nowrap {\r\n        -ms-flex-wrap: nowrap !important;\r\n        flex-wrap: nowrap !important;\r\n    }\r\n    .flex-lg-wrap-reverse {\r\n        -ms-flex-wrap: wrap-reverse !important;\r\n        flex-wrap: wrap-reverse !important;\r\n    }\r\n    .flex-lg-fill {\r\n        -ms-flex: 1 1 auto !important;\r\n        flex: 1 1 auto !important;\r\n    }\r\n    .flex-lg-grow-0 {\r\n        -ms-flex-positive: 0 !important;\r\n        flex-grow: 0 !important;\r\n    }\r\n    .flex-lg-grow-1 {\r\n        -ms-flex-positive: 1 !important;\r\n        flex-grow: 1 !important;\r\n    }\r\n    .flex-lg-shrink-0 {\r\n        -ms-flex-negative: 0 !important;\r\n        flex-shrink: 0 !important;\r\n    }\r\n    .flex-lg-shrink-1 {\r\n        -ms-flex-negative: 1 !important;\r\n        flex-shrink: 1 !important;\r\n    }\r\n    .justify-content-lg-start {\r\n        -ms-flex-pack: start !important;\r\n        justify-content: flex-start !important;\r\n    }\r\n    .justify-content-lg-end {\r\n        -ms-flex-pack: end !important;\r\n        justify-content: flex-end !important;\r\n    }\r\n    .justify-content-lg-center {\r\n        -ms-flex-pack: center !important;\r\n        justify-content: center !important;\r\n    }\r\n    .justify-content-lg-between {\r\n        -ms-flex-pack: justify !important;\r\n        justify-content: space-between !important;\r\n    }\r\n    .justify-content-lg-around {\r\n        -ms-flex-pack: distribute !important;\r\n        justify-content: space-around !important;\r\n    }\r\n    .align-items-lg-start {\r\n        -ms-flex-align: start !important;\r\n        align-items: flex-start !important;\r\n    }\r\n    .align-items-lg-end {\r\n        -ms-flex-align: end !important;\r\n        align-items: flex-end !important;\r\n    }\r\n    .align-items-lg-center {\r\n        -ms-flex-align: center !important;\r\n        align-items: center !important;\r\n    }\r\n    .align-items-lg-baseline {\r\n        -ms-flex-align: baseline !important;\r\n        align-items: baseline !important;\r\n    }\r\n    .align-items-lg-stretch {\r\n        -ms-flex-align: stretch !important;\r\n        align-items: stretch !important;\r\n    }\r\n    .align-content-lg-start {\r\n        -ms-flex-line-pack: start !important;\r\n        align-content: flex-start !important;\r\n    }\r\n    .align-content-lg-end {\r\n        -ms-flex-line-pack: end !important;\r\n        align-content: flex-end !important;\r\n    }\r\n    .align-content-lg-center {\r\n        -ms-flex-line-pack: center !important;\r\n        align-content: center !important;\r\n    }\r\n    .align-content-lg-between {\r\n        -ms-flex-line-pack: justify !important;\r\n        align-content: space-between !important;\r\n    }\r\n    .align-content-lg-around {\r\n        -ms-flex-line-pack: distribute !important;\r\n        align-content: space-around !important;\r\n    }\r\n    .align-content-lg-stretch {\r\n        -ms-flex-line-pack: stretch !important;\r\n        align-content: stretch !important;\r\n    }\r\n    .align-self-lg-auto {\r\n        -ms-flex-item-align: auto !important;\r\n        align-self: auto !important;\r\n    }\r\n    .align-self-lg-start {\r\n        -ms-flex-item-align: start !important;\r\n        align-self: flex-start !important;\r\n    }\r\n    .align-self-lg-end {\r\n        -ms-flex-item-align: end !important;\r\n        align-self: flex-end !important;\r\n    }\r\n    .align-self-lg-center {\r\n        -ms-flex-item-align: center !important;\r\n        align-self: center !important;\r\n    }\r\n    .align-self-lg-baseline {\r\n        -ms-flex-item-align: baseline !important;\r\n        align-self: baseline !important;\r\n    }\r\n    .align-self-lg-stretch {\r\n        -ms-flex-item-align: stretch !important;\r\n        align-self: stretch !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .flex-xl-row {\r\n        -ms-flex-direction: row !important;\r\n        flex-direction: row !important;\r\n    }\r\n    .flex-xl-column {\r\n        -ms-flex-direction: column !important;\r\n        flex-direction: column !important;\r\n    }\r\n    .flex-xl-row-reverse {\r\n        -ms-flex-direction: row-reverse !important;\r\n        flex-direction: row-reverse !important;\r\n    }\r\n    .flex-xl-column-reverse {\r\n        -ms-flex-direction: column-reverse !important;\r\n        flex-direction: column-reverse !important;\r\n    }\r\n    .flex-xl-wrap {\r\n        -ms-flex-wrap: wrap !important;\r\n        flex-wrap: wrap !important;\r\n    }\r\n    .flex-xl-nowrap {\r\n        -ms-flex-wrap: nowrap !important;\r\n        flex-wrap: nowrap !important;\r\n    }\r\n    .flex-xl-wrap-reverse {\r\n        -ms-flex-wrap: wrap-reverse !important;\r\n        flex-wrap: wrap-reverse !important;\r\n    }\r\n    .flex-xl-fill {\r\n        -ms-flex: 1 1 auto !important;\r\n        flex: 1 1 auto !important;\r\n    }\r\n    .flex-xl-grow-0 {\r\n        -ms-flex-positive: 0 !important;\r\n        flex-grow: 0 !important;\r\n    }\r\n    .flex-xl-grow-1 {\r\n        -ms-flex-positive: 1 !important;\r\n        flex-grow: 1 !important;\r\n    }\r\n    .flex-xl-shrink-0 {\r\n        -ms-flex-negative: 0 !important;\r\n        flex-shrink: 0 !important;\r\n    }\r\n    .flex-xl-shrink-1 {\r\n        -ms-flex-negative: 1 !important;\r\n        flex-shrink: 1 !important;\r\n    }\r\n    .justify-content-xl-start {\r\n        -ms-flex-pack: start !important;\r\n        justify-content: flex-start !important;\r\n    }\r\n    .justify-content-xl-end {\r\n        -ms-flex-pack: end !important;\r\n        justify-content: flex-end !important;\r\n    }\r\n    .justify-content-xl-center {\r\n        -ms-flex-pack: center !important;\r\n        justify-content: center !important;\r\n    }\r\n    .justify-content-xl-between {\r\n        -ms-flex-pack: justify !important;\r\n        justify-content: space-between !important;\r\n    }\r\n    .justify-content-xl-around {\r\n        -ms-flex-pack: distribute !important;\r\n        justify-content: space-around !important;\r\n    }\r\n    .align-items-xl-start {\r\n        -ms-flex-align: start !important;\r\n        align-items: flex-start !important;\r\n    }\r\n    .align-items-xl-end {\r\n        -ms-flex-align: end !important;\r\n        align-items: flex-end !important;\r\n    }\r\n    .align-items-xl-center {\r\n        -ms-flex-align: center !important;\r\n        align-items: center !important;\r\n    }\r\n    .align-items-xl-baseline {\r\n        -ms-flex-align: baseline !important;\r\n        align-items: baseline !important;\r\n    }\r\n    .align-items-xl-stretch {\r\n        -ms-flex-align: stretch !important;\r\n        align-items: stretch !important;\r\n    }\r\n    .align-content-xl-start {\r\n        -ms-flex-line-pack: start !important;\r\n        align-content: flex-start !important;\r\n    }\r\n    .align-content-xl-end {\r\n        -ms-flex-line-pack: end !important;\r\n        align-content: flex-end !important;\r\n    }\r\n    .align-content-xl-center {\r\n        -ms-flex-line-pack: center !important;\r\n        align-content: center !important;\r\n    }\r\n    .align-content-xl-between {\r\n        -ms-flex-line-pack: justify !important;\r\n        align-content: space-between !important;\r\n    }\r\n    .align-content-xl-around {\r\n        -ms-flex-line-pack: distribute !important;\r\n        align-content: space-around !important;\r\n    }\r\n    .align-content-xl-stretch {\r\n        -ms-flex-line-pack: stretch !important;\r\n        align-content: stretch !important;\r\n    }\r\n    .align-self-xl-auto {\r\n        -ms-flex-item-align: auto !important;\r\n        align-self: auto !important;\r\n    }\r\n    .align-self-xl-start {\r\n        -ms-flex-item-align: start !important;\r\n        align-self: flex-start !important;\r\n    }\r\n    .align-self-xl-end {\r\n        -ms-flex-item-align: end !important;\r\n        align-self: flex-end !important;\r\n    }\r\n    .align-self-xl-center {\r\n        -ms-flex-item-align: center !important;\r\n        align-self: center !important;\r\n    }\r\n    .align-self-xl-baseline {\r\n        -ms-flex-item-align: baseline !important;\r\n        align-self: baseline !important;\r\n    }\r\n    .align-self-xl-stretch {\r\n        -ms-flex-item-align: stretch !important;\r\n        align-self: stretch !important;\r\n    }\r\n}\r\n\r\n.float-left {\r\n    float: left !important;\r\n}\r\n\r\n.float-right {\r\n    float: right !important;\r\n}\r\n\r\n.float-none {\r\n    float: none !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .float-sm-left {\r\n        float: left !important;\r\n    }\r\n    .float-sm-right {\r\n        float: right !important;\r\n    }\r\n    .float-sm-none {\r\n        float: none !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .float-md-left {\r\n        float: left !important;\r\n    }\r\n    .float-md-right {\r\n        float: right !important;\r\n    }\r\n    .float-md-none {\r\n        float: none !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .float-lg-left {\r\n        float: left !important;\r\n    }\r\n    .float-lg-right {\r\n        float: right !important;\r\n    }\r\n    .float-lg-none {\r\n        float: none !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .float-xl-left {\r\n        float: left !important;\r\n    }\r\n    .float-xl-right {\r\n        float: right !important;\r\n    }\r\n    .float-xl-none {\r\n        float: none !important;\r\n    }\r\n}\r\n\r\n.user-select-all {\r\n    -webkit-user-select: all !important;\r\n    -moz-user-select: all !important;\r\n    -ms-user-select: all !important;\r\n    user-select: all !important;\r\n}\r\n\r\n.user-select-auto {\r\n    -webkit-user-select: auto !important;\r\n    -moz-user-select: auto !important;\r\n    -ms-user-select: auto !important;\r\n    user-select: auto !important;\r\n}\r\n\r\n.user-select-none {\r\n    -webkit-user-select: none !important;\r\n    -moz-user-select: none !important;\r\n    -ms-user-select: none !important;\r\n    user-select: none !important;\r\n}\r\n\r\n.overflow-auto {\r\n    overflow: auto !important;\r\n}\r\n\r\n.overflow-hidden {\r\n    overflow: hidden !important;\r\n}\r\n\r\n.position-static {\r\n    position: static !important;\r\n}\r\n\r\n.position-relative {\r\n    position: relative !important;\r\n}\r\n\r\n.position-absolute {\r\n    position: absolute !important;\r\n}\r\n\r\n.position-fixed {\r\n    position: fixed !important;\r\n}\r\n\r\n.position-sticky {\r\n    position: -webkit-sticky !important;\r\n    position: sticky !important;\r\n}\r\n\r\n.fixed-top {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 1030;\r\n}\r\n\r\n.fixed-bottom {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1030;\r\n}\r\n\r\n@supports ((position: -webkit-sticky) or (position: sticky)) {\r\n    .sticky-top {\r\n        position: -webkit-sticky;\r\n        position: sticky;\r\n        top: 0;\r\n        z-index: 1020;\r\n    }\r\n}\r\n\r\n.sr-only {\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    padding: 0;\r\n    margin: -1px;\r\n    overflow: hidden;\r\n    clip: rect(0, 0, 0, 0);\r\n    white-space: nowrap;\r\n    border: 0;\r\n}\r\n\r\n.sr-only-focusable:active,\r\n.sr-only-focusable:focus {\r\n    position: static;\r\n    width: auto;\r\n    height: auto;\r\n    overflow: visible;\r\n    clip: auto;\r\n    white-space: normal;\r\n}\r\n\r\n.shadow-sm {\r\n    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\r\n}\r\n\r\n.shadow {\r\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\r\n}\r\n\r\n.shadow-lg {\r\n    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\r\n}\r\n\r\n.shadow-none {\r\n    box-shadow: none !important;\r\n}\r\n\r\n.w-25 {\r\n    width: 25% !important;\r\n}\r\n\r\n.w-50 {\r\n    width: 50% !important;\r\n}\r\n\r\n.w-75 {\r\n    width: 75% !important;\r\n}\r\n\r\n.w-100 {\r\n    width: 100% !important;\r\n}\r\n\r\n.w-auto {\r\n    width: auto !important;\r\n}\r\n\r\n.h-25 {\r\n    height: 25% !important;\r\n}\r\n\r\n.h-50 {\r\n    height: 50% !important;\r\n}\r\n\r\n.h-75 {\r\n    height: 75% !important;\r\n}\r\n\r\n.h-100 {\r\n    height: 100% !important;\r\n}\r\n\r\n.h-auto {\r\n    height: auto !important;\r\n}\r\n\r\n.mw-100 {\r\n    max-width: 100% !important;\r\n}\r\n\r\n.mh-100 {\r\n    max-height: 100% !important;\r\n}\r\n\r\n.min-vw-100 {\r\n    min-width: 100vw !important;\r\n}\r\n\r\n.min-vh-100 {\r\n    min-height: 100vh !important;\r\n}\r\n\r\n.vw-100 {\r\n    width: 100vw !important;\r\n}\r\n\r\n.vh-100 {\r\n    height: 100vh !important;\r\n}\r\n\r\n.m-0 {\r\n    margin: 0 !important;\r\n}\r\n\r\n.mt-0,\r\n.my-0 {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.mr-0,\r\n.mx-0 {\r\n    margin-right: 0 !important;\r\n}\r\n\r\n.mb-0,\r\n.my-0 {\r\n    margin-bottom: 0 !important;\r\n}\r\n\r\n.ml-0,\r\n.mx-0 {\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.m-1 {\r\n    margin: 0.25rem !important;\r\n}\r\n\r\n.mt-1,\r\n.my-1 {\r\n    margin-top: 0.25rem !important;\r\n}\r\n\r\n.mr-1,\r\n.mx-1 {\r\n    margin-right: 0.25rem !important;\r\n}\r\n\r\n.mb-1,\r\n.my-1 {\r\n    margin-bottom: 0.25rem !important;\r\n}\r\n\r\n.ml-1,\r\n.mx-1 {\r\n    margin-left: 0.25rem !important;\r\n}\r\n\r\n.m-2 {\r\n    margin: 0.5rem !important;\r\n}\r\n\r\n.mt-2,\r\n.my-2 {\r\n    margin-top: 0.5rem !important;\r\n}\r\n\r\n.mr-2,\r\n.mx-2 {\r\n    margin-right: 0.5rem !important;\r\n}\r\n\r\n.mb-2,\r\n.my-2 {\r\n    margin-bottom: 0.5rem !important;\r\n}\r\n\r\n.ml-2,\r\n.mx-2 {\r\n    margin-left: 0.5rem !important;\r\n}\r\n\r\n.m-3 {\r\n    margin: 1rem !important;\r\n}\r\n\r\n.mt-3,\r\n.my-3 {\r\n    margin-top: 1rem !important;\r\n}\r\n\r\n.mr-3,\r\n.mx-3 {\r\n    margin-right: 1rem !important;\r\n}\r\n\r\n.mb-3,\r\n.my-3 {\r\n    margin-bottom: 1rem !important;\r\n}\r\n\r\n.ml-3,\r\n.mx-3 {\r\n    margin-left: 1rem !important;\r\n}\r\n\r\n.m-4 {\r\n    margin: 1.5rem !important;\r\n}\r\n\r\n.mt-4,\r\n.my-4 {\r\n    margin-top: 1.5rem !important;\r\n}\r\n\r\n.mr-4,\r\n.mx-4 {\r\n    margin-right: 1.5rem !important;\r\n}\r\n\r\n.mb-4,\r\n.my-4 {\r\n    margin-bottom: 1.5rem !important;\r\n}\r\n\r\n.ml-4,\r\n.mx-4 {\r\n    margin-left: 1.5rem !important;\r\n}\r\n\r\n.m-5 {\r\n    margin: 3rem !important;\r\n}\r\n\r\n.mt-5,\r\n.my-5 {\r\n    margin-top: 3rem !important;\r\n}\r\n\r\n.mr-5,\r\n.mx-5 {\r\n    margin-right: 3rem !important;\r\n}\r\n\r\n.mb-5,\r\n.my-5 {\r\n    margin-bottom: 3rem !important;\r\n}\r\n\r\n.ml-5,\r\n.mx-5 {\r\n    margin-left: 3rem !important;\r\n}\r\n\r\n.p-0 {\r\n    padding: 0 !important;\r\n}\r\n\r\n.pt-0,\r\n.py-0 {\r\n    padding-top: 0 !important;\r\n}\r\n\r\n.pr-0,\r\n.px-0 {\r\n    padding-right: 0 !important;\r\n}\r\n\r\n.pb-0,\r\n.py-0 {\r\n    padding-bottom: 0 !important;\r\n}\r\n\r\n.pl-0,\r\n.px-0 {\r\n    padding-left: 0 !important;\r\n}\r\n\r\n.p-1 {\r\n    padding: 0.25rem !important;\r\n}\r\n\r\n.pt-1,\r\n.py-1 {\r\n    padding-top: 0.25rem !important;\r\n}\r\n\r\n.pr-1,\r\n.px-1 {\r\n    padding-right: 0.25rem !important;\r\n}\r\n\r\n.pb-1,\r\n.py-1 {\r\n    padding-bottom: 0.25rem !important;\r\n}\r\n\r\n.pl-1,\r\n.px-1 {\r\n    padding-left: 0.25rem !important;\r\n}\r\n\r\n.p-2 {\r\n    padding: 0.5rem !important;\r\n}\r\n\r\n.pt-2,\r\n.py-2 {\r\n    padding-top: 0.5rem !important;\r\n}\r\n\r\n.pr-2,\r\n.px-2 {\r\n    padding-right: 0.5rem !important;\r\n}\r\n\r\n.pb-2,\r\n.py-2 {\r\n    padding-bottom: 0.5rem !important;\r\n}\r\n\r\n.pl-2,\r\n.px-2 {\r\n    padding-left: 0.5rem !important;\r\n}\r\n\r\n.p-3 {\r\n    padding: 1rem !important;\r\n}\r\n\r\n.pt-3,\r\n.py-3 {\r\n    padding-top: 1rem !important;\r\n}\r\n\r\n.pr-3,\r\n.px-3 {\r\n    padding-right: 1rem !important;\r\n}\r\n\r\n.pb-3,\r\n.py-3 {\r\n    padding-bottom: 1rem !important;\r\n}\r\n\r\n.pl-3,\r\n.px-3 {\r\n    padding-left: 1rem !important;\r\n}\r\n\r\n.p-4 {\r\n    padding: 1.5rem !important;\r\n}\r\n\r\n.pt-4,\r\n.py-4 {\r\n    padding-top: 1.5rem !important;\r\n}\r\n\r\n.pr-4,\r\n.px-4 {\r\n    padding-right: 1.5rem !important;\r\n}\r\n\r\n.pb-4,\r\n.py-4 {\r\n    padding-bottom: 1.5rem !important;\r\n}\r\n\r\n.pl-4,\r\n.px-4 {\r\n    padding-left: 1.5rem !important;\r\n}\r\n\r\n.p-5 {\r\n    padding: 3rem !important;\r\n}\r\n\r\n.pt-5,\r\n.py-5 {\r\n    padding-top: 3rem !important;\r\n}\r\n\r\n.pr-5,\r\n.px-5 {\r\n    padding-right: 3rem !important;\r\n}\r\n\r\n.pb-5,\r\n.py-5 {\r\n    padding-bottom: 3rem !important;\r\n}\r\n\r\n.pl-5,\r\n.px-5 {\r\n    padding-left: 3rem !important;\r\n}\r\n\r\n.m-n1 {\r\n    margin: -0.25rem !important;\r\n}\r\n\r\n.mt-n1,\r\n.my-n1 {\r\n    margin-top: -0.25rem !important;\r\n}\r\n\r\n.mr-n1,\r\n.mx-n1 {\r\n    margin-right: -0.25rem !important;\r\n}\r\n\r\n.mb-n1,\r\n.my-n1 {\r\n    margin-bottom: -0.25rem !important;\r\n}\r\n\r\n.ml-n1,\r\n.mx-n1 {\r\n    margin-left: -0.25rem !important;\r\n}\r\n\r\n.m-n2 {\r\n    margin: -0.5rem !important;\r\n}\r\n\r\n.mt-n2,\r\n.my-n2 {\r\n    margin-top: -0.5rem !important;\r\n}\r\n\r\n.mr-n2,\r\n.mx-n2 {\r\n    margin-right: -0.5rem !important;\r\n}\r\n\r\n.mb-n2,\r\n.my-n2 {\r\n    margin-bottom: -0.5rem !important;\r\n}\r\n\r\n.ml-n2,\r\n.mx-n2 {\r\n    margin-left: -0.5rem !important;\r\n}\r\n\r\n.m-n3 {\r\n    margin: -1rem !important;\r\n}\r\n\r\n.mt-n3,\r\n.my-n3 {\r\n    margin-top: -1rem !important;\r\n}\r\n\r\n.mr-n3,\r\n.mx-n3 {\r\n    margin-right: -1rem !important;\r\n}\r\n\r\n.mb-n3,\r\n.my-n3 {\r\n    margin-bottom: -1rem !important;\r\n}\r\n\r\n.ml-n3,\r\n.mx-n3 {\r\n    margin-left: -1rem !important;\r\n}\r\n\r\n.m-n4 {\r\n    margin: -1.5rem !important;\r\n}\r\n\r\n.mt-n4,\r\n.my-n4 {\r\n    margin-top: -1.5rem !important;\r\n}\r\n\r\n.mr-n4,\r\n.mx-n4 {\r\n    margin-right: -1.5rem !important;\r\n}\r\n\r\n.mb-n4,\r\n.my-n4 {\r\n    margin-bottom: -1.5rem !important;\r\n}\r\n\r\n.ml-n4,\r\n.mx-n4 {\r\n    margin-left: -1.5rem !important;\r\n}\r\n\r\n.m-n5 {\r\n    margin: -3rem !important;\r\n}\r\n\r\n.mt-n5,\r\n.my-n5 {\r\n    margin-top: -3rem !important;\r\n}\r\n\r\n.mr-n5,\r\n.mx-n5 {\r\n    margin-right: -3rem !important;\r\n}\r\n\r\n.mb-n5,\r\n.my-n5 {\r\n    margin-bottom: -3rem !important;\r\n}\r\n\r\n.ml-n5,\r\n.mx-n5 {\r\n    margin-left: -3rem !important;\r\n}\r\n\r\n.m-auto {\r\n    margin: auto !important;\r\n}\r\n\r\n.mt-auto,\r\n.my-auto {\r\n    margin-top: auto !important;\r\n}\r\n\r\n.mr-auto,\r\n.mx-auto {\r\n    margin-right: auto !important;\r\n}\r\n\r\n.mb-auto,\r\n.my-auto {\r\n    margin-bottom: auto !important;\r\n}\r\n\r\n.ml-auto,\r\n.mx-auto {\r\n    margin-left: auto !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .m-sm-0 {\r\n        margin: 0 !important;\r\n    }\r\n    .mt-sm-0,\r\n    .my-sm-0 {\r\n        margin-top: 0 !important;\r\n    }\r\n    .mr-sm-0,\r\n    .mx-sm-0 {\r\n        margin-right: 0 !important;\r\n    }\r\n    .mb-sm-0,\r\n    .my-sm-0 {\r\n        margin-bottom: 0 !important;\r\n    }\r\n    .ml-sm-0,\r\n    .mx-sm-0 {\r\n        margin-left: 0 !important;\r\n    }\r\n    .m-sm-1 {\r\n        margin: 0.25rem !important;\r\n    }\r\n    .mt-sm-1,\r\n    .my-sm-1 {\r\n        margin-top: 0.25rem !important;\r\n    }\r\n    .mr-sm-1,\r\n    .mx-sm-1 {\r\n        margin-right: 0.25rem !important;\r\n    }\r\n    .mb-sm-1,\r\n    .my-sm-1 {\r\n        margin-bottom: 0.25rem !important;\r\n    }\r\n    .ml-sm-1,\r\n    .mx-sm-1 {\r\n        margin-left: 0.25rem !important;\r\n    }\r\n    .m-sm-2 {\r\n        margin: 0.5rem !important;\r\n    }\r\n    .mt-sm-2,\r\n    .my-sm-2 {\r\n        margin-top: 0.5rem !important;\r\n    }\r\n    .mr-sm-2,\r\n    .mx-sm-2 {\r\n        margin-right: 0.5rem !important;\r\n    }\r\n    .mb-sm-2,\r\n    .my-sm-2 {\r\n        margin-bottom: 0.5rem !important;\r\n    }\r\n    .ml-sm-2,\r\n    .mx-sm-2 {\r\n        margin-left: 0.5rem !important;\r\n    }\r\n    .m-sm-3 {\r\n        margin: 1rem !important;\r\n    }\r\n    .mt-sm-3,\r\n    .my-sm-3 {\r\n        margin-top: 1rem !important;\r\n    }\r\n    .mr-sm-3,\r\n    .mx-sm-3 {\r\n        margin-right: 1rem !important;\r\n    }\r\n    .mb-sm-3,\r\n    .my-sm-3 {\r\n        margin-bottom: 1rem !important;\r\n    }\r\n    .ml-sm-3,\r\n    .mx-sm-3 {\r\n        margin-left: 1rem !important;\r\n    }\r\n    .m-sm-4 {\r\n        margin: 1.5rem !important;\r\n    }\r\n    .mt-sm-4,\r\n    .my-sm-4 {\r\n        margin-top: 1.5rem !important;\r\n    }\r\n    .mr-sm-4,\r\n    .mx-sm-4 {\r\n        margin-right: 1.5rem !important;\r\n    }\r\n    .mb-sm-4,\r\n    .my-sm-4 {\r\n        margin-bottom: 1.5rem !important;\r\n    }\r\n    .ml-sm-4,\r\n    .mx-sm-4 {\r\n        margin-left: 1.5rem !important;\r\n    }\r\n    .m-sm-5 {\r\n        margin: 3rem !important;\r\n    }\r\n    .mt-sm-5,\r\n    .my-sm-5 {\r\n        margin-top: 3rem !important;\r\n    }\r\n    .mr-sm-5,\r\n    .mx-sm-5 {\r\n        margin-right: 3rem !important;\r\n    }\r\n    .mb-sm-5,\r\n    .my-sm-5 {\r\n        margin-bottom: 3rem !important;\r\n    }\r\n    .ml-sm-5,\r\n    .mx-sm-5 {\r\n        margin-left: 3rem !important;\r\n    }\r\n    .p-sm-0 {\r\n        padding: 0 !important;\r\n    }\r\n    .pt-sm-0,\r\n    .py-sm-0 {\r\n        padding-top: 0 !important;\r\n    }\r\n    .pr-sm-0,\r\n    .px-sm-0 {\r\n        padding-right: 0 !important;\r\n    }\r\n    .pb-sm-0,\r\n    .py-sm-0 {\r\n        padding-bottom: 0 !important;\r\n    }\r\n    .pl-sm-0,\r\n    .px-sm-0 {\r\n        padding-left: 0 !important;\r\n    }\r\n    .p-sm-1 {\r\n        padding: 0.25rem !important;\r\n    }\r\n    .pt-sm-1,\r\n    .py-sm-1 {\r\n        padding-top: 0.25rem !important;\r\n    }\r\n    .pr-sm-1,\r\n    .px-sm-1 {\r\n        padding-right: 0.25rem !important;\r\n    }\r\n    .pb-sm-1,\r\n    .py-sm-1 {\r\n        padding-bottom: 0.25rem !important;\r\n    }\r\n    .pl-sm-1,\r\n    .px-sm-1 {\r\n        padding-left: 0.25rem !important;\r\n    }\r\n    .p-sm-2 {\r\n        padding: 0.5rem !important;\r\n    }\r\n    .pt-sm-2,\r\n    .py-sm-2 {\r\n        padding-top: 0.5rem !important;\r\n    }\r\n    .pr-sm-2,\r\n    .px-sm-2 {\r\n        padding-right: 0.5rem !important;\r\n    }\r\n    .pb-sm-2,\r\n    .py-sm-2 {\r\n        padding-bottom: 0.5rem !important;\r\n    }\r\n    .pl-sm-2,\r\n    .px-sm-2 {\r\n        padding-left: 0.5rem !important;\r\n    }\r\n    .p-sm-3 {\r\n        padding: 1rem !important;\r\n    }\r\n    .pt-sm-3,\r\n    .py-sm-3 {\r\n        padding-top: 1rem !important;\r\n    }\r\n    .pr-sm-3,\r\n    .px-sm-3 {\r\n        padding-right: 1rem !important;\r\n    }\r\n    .pb-sm-3,\r\n    .py-sm-3 {\r\n        padding-bottom: 1rem !important;\r\n    }\r\n    .pl-sm-3,\r\n    .px-sm-3 {\r\n        padding-left: 1rem !important;\r\n    }\r\n    .p-sm-4 {\r\n        padding: 1.5rem !important;\r\n    }\r\n    .pt-sm-4,\r\n    .py-sm-4 {\r\n        padding-top: 1.5rem !important;\r\n    }\r\n    .pr-sm-4,\r\n    .px-sm-4 {\r\n        padding-right: 1.5rem !important;\r\n    }\r\n    .pb-sm-4,\r\n    .py-sm-4 {\r\n        padding-bottom: 1.5rem !important;\r\n    }\r\n    .pl-sm-4,\r\n    .px-sm-4 {\r\n        padding-left: 1.5rem !important;\r\n    }\r\n    .p-sm-5 {\r\n        padding: 3rem !important;\r\n    }\r\n    .pt-sm-5,\r\n    .py-sm-5 {\r\n        padding-top: 3rem !important;\r\n    }\r\n    .pr-sm-5,\r\n    .px-sm-5 {\r\n        padding-right: 3rem !important;\r\n    }\r\n    .pb-sm-5,\r\n    .py-sm-5 {\r\n        padding-bottom: 3rem !important;\r\n    }\r\n    .pl-sm-5,\r\n    .px-sm-5 {\r\n        padding-left: 3rem !important;\r\n    }\r\n    .m-sm-n1 {\r\n        margin: -0.25rem !important;\r\n    }\r\n    .mt-sm-n1,\r\n    .my-sm-n1 {\r\n        margin-top: -0.25rem !important;\r\n    }\r\n    .mr-sm-n1,\r\n    .mx-sm-n1 {\r\n        margin-right: -0.25rem !important;\r\n    }\r\n    .mb-sm-n1,\r\n    .my-sm-n1 {\r\n        margin-bottom: -0.25rem !important;\r\n    }\r\n    .ml-sm-n1,\r\n    .mx-sm-n1 {\r\n        margin-left: -0.25rem !important;\r\n    }\r\n    .m-sm-n2 {\r\n        margin: -0.5rem !important;\r\n    }\r\n    .mt-sm-n2,\r\n    .my-sm-n2 {\r\n        margin-top: -0.5rem !important;\r\n    }\r\n    .mr-sm-n2,\r\n    .mx-sm-n2 {\r\n        margin-right: -0.5rem !important;\r\n    }\r\n    .mb-sm-n2,\r\n    .my-sm-n2 {\r\n        margin-bottom: -0.5rem !important;\r\n    }\r\n    .ml-sm-n2,\r\n    .mx-sm-n2 {\r\n        margin-left: -0.5rem !important;\r\n    }\r\n    .m-sm-n3 {\r\n        margin: -1rem !important;\r\n    }\r\n    .mt-sm-n3,\r\n    .my-sm-n3 {\r\n        margin-top: -1rem !important;\r\n    }\r\n    .mr-sm-n3,\r\n    .mx-sm-n3 {\r\n        margin-right: -1rem !important;\r\n    }\r\n    .mb-sm-n3,\r\n    .my-sm-n3 {\r\n        margin-bottom: -1rem !important;\r\n    }\r\n    .ml-sm-n3,\r\n    .mx-sm-n3 {\r\n        margin-left: -1rem !important;\r\n    }\r\n    .m-sm-n4 {\r\n        margin: -1.5rem !important;\r\n    }\r\n    .mt-sm-n4,\r\n    .my-sm-n4 {\r\n        margin-top: -1.5rem !important;\r\n    }\r\n    .mr-sm-n4,\r\n    .mx-sm-n4 {\r\n        margin-right: -1.5rem !important;\r\n    }\r\n    .mb-sm-n4,\r\n    .my-sm-n4 {\r\n        margin-bottom: -1.5rem !important;\r\n    }\r\n    .ml-sm-n4,\r\n    .mx-sm-n4 {\r\n        margin-left: -1.5rem !important;\r\n    }\r\n    .m-sm-n5 {\r\n        margin: -3rem !important;\r\n    }\r\n    .mt-sm-n5,\r\n    .my-sm-n5 {\r\n        margin-top: -3rem !important;\r\n    }\r\n    .mr-sm-n5,\r\n    .mx-sm-n5 {\r\n        margin-right: -3rem !important;\r\n    }\r\n    .mb-sm-n5,\r\n    .my-sm-n5 {\r\n        margin-bottom: -3rem !important;\r\n    }\r\n    .ml-sm-n5,\r\n    .mx-sm-n5 {\r\n        margin-left: -3rem !important;\r\n    }\r\n    .m-sm-auto {\r\n        margin: auto !important;\r\n    }\r\n    .mt-sm-auto,\r\n    .my-sm-auto {\r\n        margin-top: auto !important;\r\n    }\r\n    .mr-sm-auto,\r\n    .mx-sm-auto {\r\n        margin-right: auto !important;\r\n    }\r\n    .mb-sm-auto,\r\n    .my-sm-auto {\r\n        margin-bottom: auto !important;\r\n    }\r\n    .ml-sm-auto,\r\n    .mx-sm-auto {\r\n        margin-left: auto !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .m-md-0 {\r\n        margin: 0 !important;\r\n    }\r\n    .mt-md-0,\r\n    .my-md-0 {\r\n        margin-top: 0 !important;\r\n    }\r\n    .mr-md-0,\r\n    .mx-md-0 {\r\n        margin-right: 0 !important;\r\n    }\r\n    .mb-md-0,\r\n    .my-md-0 {\r\n        margin-bottom: 0 !important;\r\n    }\r\n    .ml-md-0,\r\n    .mx-md-0 {\r\n        margin-left: 0 !important;\r\n    }\r\n    .m-md-1 {\r\n        margin: 0.25rem !important;\r\n    }\r\n    .mt-md-1,\r\n    .my-md-1 {\r\n        margin-top: 0.25rem !important;\r\n    }\r\n    .mr-md-1,\r\n    .mx-md-1 {\r\n        margin-right: 0.25rem !important;\r\n    }\r\n    .mb-md-1,\r\n    .my-md-1 {\r\n        margin-bottom: 0.25rem !important;\r\n    }\r\n    .ml-md-1,\r\n    .mx-md-1 {\r\n        margin-left: 0.25rem !important;\r\n    }\r\n    .m-md-2 {\r\n        margin: 0.5rem !important;\r\n    }\r\n    .mt-md-2,\r\n    .my-md-2 {\r\n        margin-top: 0.5rem !important;\r\n    }\r\n    .mr-md-2,\r\n    .mx-md-2 {\r\n        margin-right: 0.5rem !important;\r\n    }\r\n    .mb-md-2,\r\n    .my-md-2 {\r\n        margin-bottom: 0.5rem !important;\r\n    }\r\n    .ml-md-2,\r\n    .mx-md-2 {\r\n        margin-left: 0.5rem !important;\r\n    }\r\n    .m-md-3 {\r\n        margin: 1rem !important;\r\n    }\r\n    .mt-md-3,\r\n    .my-md-3 {\r\n        margin-top: 1rem !important;\r\n    }\r\n    .mr-md-3,\r\n    .mx-md-3 {\r\n        margin-right: 1rem !important;\r\n    }\r\n    .mb-md-3,\r\n    .my-md-3 {\r\n        margin-bottom: 1rem !important;\r\n    }\r\n    .ml-md-3,\r\n    .mx-md-3 {\r\n        margin-left: 1rem !important;\r\n    }\r\n    .m-md-4 {\r\n        margin: 1.5rem !important;\r\n    }\r\n    .mt-md-4,\r\n    .my-md-4 {\r\n        margin-top: 1.5rem !important;\r\n    }\r\n    .mr-md-4,\r\n    .mx-md-4 {\r\n        margin-right: 1.5rem !important;\r\n    }\r\n    .mb-md-4,\r\n    .my-md-4 {\r\n        margin-bottom: 1.5rem !important;\r\n    }\r\n    .ml-md-4,\r\n    .mx-md-4 {\r\n        margin-left: 1.5rem !important;\r\n    }\r\n    .m-md-5 {\r\n        margin: 3rem !important;\r\n    }\r\n    .mt-md-5,\r\n    .my-md-5 {\r\n        margin-top: 3rem !important;\r\n    }\r\n    .mr-md-5,\r\n    .mx-md-5 {\r\n        margin-right: 3rem !important;\r\n    }\r\n    .mb-md-5,\r\n    .my-md-5 {\r\n        margin-bottom: 3rem !important;\r\n    }\r\n    .ml-md-5,\r\n    .mx-md-5 {\r\n        margin-left: 3rem !important;\r\n    }\r\n    .p-md-0 {\r\n        padding: 0 !important;\r\n    }\r\n    .pt-md-0,\r\n    .py-md-0 {\r\n        padding-top: 0 !important;\r\n    }\r\n    .pr-md-0,\r\n    .px-md-0 {\r\n        padding-right: 0 !important;\r\n    }\r\n    .pb-md-0,\r\n    .py-md-0 {\r\n        padding-bottom: 0 !important;\r\n    }\r\n    .pl-md-0,\r\n    .px-md-0 {\r\n        padding-left: 0 !important;\r\n    }\r\n    .p-md-1 {\r\n        padding: 0.25rem !important;\r\n    }\r\n    .pt-md-1,\r\n    .py-md-1 {\r\n        padding-top: 0.25rem !important;\r\n    }\r\n    .pr-md-1,\r\n    .px-md-1 {\r\n        padding-right: 0.25rem !important;\r\n    }\r\n    .pb-md-1,\r\n    .py-md-1 {\r\n        padding-bottom: 0.25rem !important;\r\n    }\r\n    .pl-md-1,\r\n    .px-md-1 {\r\n        padding-left: 0.25rem !important;\r\n    }\r\n    .p-md-2 {\r\n        padding: 0.5rem !important;\r\n    }\r\n    .pt-md-2,\r\n    .py-md-2 {\r\n        padding-top: 0.5rem !important;\r\n    }\r\n    .pr-md-2,\r\n    .px-md-2 {\r\n        padding-right: 0.5rem !important;\r\n    }\r\n    .pb-md-2,\r\n    .py-md-2 {\r\n        padding-bottom: 0.5rem !important;\r\n    }\r\n    .pl-md-2,\r\n    .px-md-2 {\r\n        padding-left: 0.5rem !important;\r\n    }\r\n    .p-md-3 {\r\n        padding: 1rem !important;\r\n    }\r\n    .pt-md-3,\r\n    .py-md-3 {\r\n        padding-top: 1rem !important;\r\n    }\r\n    .pr-md-3,\r\n    .px-md-3 {\r\n        padding-right: 1rem !important;\r\n    }\r\n    .pb-md-3,\r\n    .py-md-3 {\r\n        padding-bottom: 1rem !important;\r\n    }\r\n    .pl-md-3,\r\n    .px-md-3 {\r\n        padding-left: 1rem !important;\r\n    }\r\n    .p-md-4 {\r\n        padding: 1.5rem !important;\r\n    }\r\n    .pt-md-4,\r\n    .py-md-4 {\r\n        padding-top: 1.5rem !important;\r\n    }\r\n    .pr-md-4,\r\n    .px-md-4 {\r\n        padding-right: 1.5rem !important;\r\n    }\r\n    .pb-md-4,\r\n    .py-md-4 {\r\n        padding-bottom: 1.5rem !important;\r\n    }\r\n    .pl-md-4,\r\n    .px-md-4 {\r\n        padding-left: 1.5rem !important;\r\n    }\r\n    .p-md-5 {\r\n        padding: 3rem !important;\r\n    }\r\n    .pt-md-5,\r\n    .py-md-5 {\r\n        padding-top: 3rem !important;\r\n    }\r\n    .pr-md-5,\r\n    .px-md-5 {\r\n        padding-right: 3rem !important;\r\n    }\r\n    .pb-md-5,\r\n    .py-md-5 {\r\n        padding-bottom: 3rem !important;\r\n    }\r\n    .pl-md-5,\r\n    .px-md-5 {\r\n        padding-left: 3rem !important;\r\n    }\r\n    .m-md-n1 {\r\n        margin: -0.25rem !important;\r\n    }\r\n    .mt-md-n1,\r\n    .my-md-n1 {\r\n        margin-top: -0.25rem !important;\r\n    }\r\n    .mr-md-n1,\r\n    .mx-md-n1 {\r\n        margin-right: -0.25rem !important;\r\n    }\r\n    .mb-md-n1,\r\n    .my-md-n1 {\r\n        margin-bottom: -0.25rem !important;\r\n    }\r\n    .ml-md-n1,\r\n    .mx-md-n1 {\r\n        margin-left: -0.25rem !important;\r\n    }\r\n    .m-md-n2 {\r\n        margin: -0.5rem !important;\r\n    }\r\n    .mt-md-n2,\r\n    .my-md-n2 {\r\n        margin-top: -0.5rem !important;\r\n    }\r\n    .mr-md-n2,\r\n    .mx-md-n2 {\r\n        margin-right: -0.5rem !important;\r\n    }\r\n    .mb-md-n2,\r\n    .my-md-n2 {\r\n        margin-bottom: -0.5rem !important;\r\n    }\r\n    .ml-md-n2,\r\n    .mx-md-n2 {\r\n        margin-left: -0.5rem !important;\r\n    }\r\n    .m-md-n3 {\r\n        margin: -1rem !important;\r\n    }\r\n    .mt-md-n3,\r\n    .my-md-n3 {\r\n        margin-top: -1rem !important;\r\n    }\r\n    .mr-md-n3,\r\n    .mx-md-n3 {\r\n        margin-right: -1rem !important;\r\n    }\r\n    .mb-md-n3,\r\n    .my-md-n3 {\r\n        margin-bottom: -1rem !important;\r\n    }\r\n    .ml-md-n3,\r\n    .mx-md-n3 {\r\n        margin-left: -1rem !important;\r\n    }\r\n    .m-md-n4 {\r\n        margin: -1.5rem !important;\r\n    }\r\n    .mt-md-n4,\r\n    .my-md-n4 {\r\n        margin-top: -1.5rem !important;\r\n    }\r\n    .mr-md-n4,\r\n    .mx-md-n4 {\r\n        margin-right: -1.5rem !important;\r\n    }\r\n    .mb-md-n4,\r\n    .my-md-n4 {\r\n        margin-bottom: -1.5rem !important;\r\n    }\r\n    .ml-md-n4,\r\n    .mx-md-n4 {\r\n        margin-left: -1.5rem !important;\r\n    }\r\n    .m-md-n5 {\r\n        margin: -3rem !important;\r\n    }\r\n    .mt-md-n5,\r\n    .my-md-n5 {\r\n        margin-top: -3rem !important;\r\n    }\r\n    .mr-md-n5,\r\n    .mx-md-n5 {\r\n        margin-right: -3rem !important;\r\n    }\r\n    .mb-md-n5,\r\n    .my-md-n5 {\r\n        margin-bottom: -3rem !important;\r\n    }\r\n    .ml-md-n5,\r\n    .mx-md-n5 {\r\n        margin-left: -3rem !important;\r\n    }\r\n    .m-md-auto {\r\n        margin: auto !important;\r\n    }\r\n    .mt-md-auto,\r\n    .my-md-auto {\r\n        margin-top: auto !important;\r\n    }\r\n    .mr-md-auto,\r\n    .mx-md-auto {\r\n        margin-right: auto !important;\r\n    }\r\n    .mb-md-auto,\r\n    .my-md-auto {\r\n        margin-bottom: auto !important;\r\n    }\r\n    .ml-md-auto,\r\n    .mx-md-auto {\r\n        margin-left: auto !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .m-lg-0 {\r\n        margin: 0 !important;\r\n    }\r\n    .mt-lg-0,\r\n    .my-lg-0 {\r\n        margin-top: 0 !important;\r\n    }\r\n    .mr-lg-0,\r\n    .mx-lg-0 {\r\n        margin-right: 0 !important;\r\n    }\r\n    .mb-lg-0,\r\n    .my-lg-0 {\r\n        margin-bottom: 0 !important;\r\n    }\r\n    .ml-lg-0,\r\n    .mx-lg-0 {\r\n        margin-left: 0 !important;\r\n    }\r\n    .m-lg-1 {\r\n        margin: 0.25rem !important;\r\n    }\r\n    .mt-lg-1,\r\n    .my-lg-1 {\r\n        margin-top: 0.25rem !important;\r\n    }\r\n    .mr-lg-1,\r\n    .mx-lg-1 {\r\n        margin-right: 0.25rem !important;\r\n    }\r\n    .mb-lg-1,\r\n    .my-lg-1 {\r\n        margin-bottom: 0.25rem !important;\r\n    }\r\n    .ml-lg-1,\r\n    .mx-lg-1 {\r\n        margin-left: 0.25rem !important;\r\n    }\r\n    .m-lg-2 {\r\n        margin: 0.5rem !important;\r\n    }\r\n    .mt-lg-2,\r\n    .my-lg-2 {\r\n        margin-top: 0.5rem !important;\r\n    }\r\n    .mr-lg-2,\r\n    .mx-lg-2 {\r\n        margin-right: 0.5rem !important;\r\n    }\r\n    .mb-lg-2,\r\n    .my-lg-2 {\r\n        margin-bottom: 0.5rem !important;\r\n    }\r\n    .ml-lg-2,\r\n    .mx-lg-2 {\r\n        margin-left: 0.5rem !important;\r\n    }\r\n    .m-lg-3 {\r\n        margin: 1rem !important;\r\n    }\r\n    .mt-lg-3,\r\n    .my-lg-3 {\r\n        margin-top: 1rem !important;\r\n    }\r\n    .mr-lg-3,\r\n    .mx-lg-3 {\r\n        margin-right: 1rem !important;\r\n    }\r\n    .mb-lg-3,\r\n    .my-lg-3 {\r\n        margin-bottom: 1rem !important;\r\n    }\r\n    .ml-lg-3,\r\n    .mx-lg-3 {\r\n        margin-left: 1rem !important;\r\n    }\r\n    .m-lg-4 {\r\n        margin: 1.5rem !important;\r\n    }\r\n    .mt-lg-4,\r\n    .my-lg-4 {\r\n        margin-top: 1.5rem !important;\r\n    }\r\n    .mr-lg-4,\r\n    .mx-lg-4 {\r\n        margin-right: 1.5rem !important;\r\n    }\r\n    .mb-lg-4,\r\n    .my-lg-4 {\r\n        margin-bottom: 1.5rem !important;\r\n    }\r\n    .ml-lg-4,\r\n    .mx-lg-4 {\r\n        margin-left: 1.5rem !important;\r\n    }\r\n    .m-lg-5 {\r\n        margin: 3rem !important;\r\n    }\r\n    .mt-lg-5,\r\n    .my-lg-5 {\r\n        margin-top: 3rem !important;\r\n    }\r\n    .mr-lg-5,\r\n    .mx-lg-5 {\r\n        margin-right: 3rem !important;\r\n    }\r\n    .mb-lg-5,\r\n    .my-lg-5 {\r\n        margin-bottom: 3rem !important;\r\n    }\r\n    .ml-lg-5,\r\n    .mx-lg-5 {\r\n        margin-left: 3rem !important;\r\n    }\r\n    .p-lg-0 {\r\n        padding: 0 !important;\r\n    }\r\n    .pt-lg-0,\r\n    .py-lg-0 {\r\n        padding-top: 0 !important;\r\n    }\r\n    .pr-lg-0,\r\n    .px-lg-0 {\r\n        padding-right: 0 !important;\r\n    }\r\n    .pb-lg-0,\r\n    .py-lg-0 {\r\n        padding-bottom: 0 !important;\r\n    }\r\n    .pl-lg-0,\r\n    .px-lg-0 {\r\n        padding-left: 0 !important;\r\n    }\r\n    .p-lg-1 {\r\n        padding: 0.25rem !important;\r\n    }\r\n    .pt-lg-1,\r\n    .py-lg-1 {\r\n        padding-top: 0.25rem !important;\r\n    }\r\n    .pr-lg-1,\r\n    .px-lg-1 {\r\n        padding-right: 0.25rem !important;\r\n    }\r\n    .pb-lg-1,\r\n    .py-lg-1 {\r\n        padding-bottom: 0.25rem !important;\r\n    }\r\n    .pl-lg-1,\r\n    .px-lg-1 {\r\n        padding-left: 0.25rem !important;\r\n    }\r\n    .p-lg-2 {\r\n        padding: 0.5rem !important;\r\n    }\r\n    .pt-lg-2,\r\n    .py-lg-2 {\r\n        padding-top: 0.5rem !important;\r\n    }\r\n    .pr-lg-2,\r\n    .px-lg-2 {\r\n        padding-right: 0.5rem !important;\r\n    }\r\n    .pb-lg-2,\r\n    .py-lg-2 {\r\n        padding-bottom: 0.5rem !important;\r\n    }\r\n    .pl-lg-2,\r\n    .px-lg-2 {\r\n        padding-left: 0.5rem !important;\r\n    }\r\n    .p-lg-3 {\r\n        padding: 1rem !important;\r\n    }\r\n    .pt-lg-3,\r\n    .py-lg-3 {\r\n        padding-top: 1rem !important;\r\n    }\r\n    .pr-lg-3,\r\n    .px-lg-3 {\r\n        padding-right: 1rem !important;\r\n    }\r\n    .pb-lg-3,\r\n    .py-lg-3 {\r\n        padding-bottom: 1rem !important;\r\n    }\r\n    .pl-lg-3,\r\n    .px-lg-3 {\r\n        padding-left: 1rem !important;\r\n    }\r\n    .p-lg-4 {\r\n        padding: 1.5rem !important;\r\n    }\r\n    .pt-lg-4,\r\n    .py-lg-4 {\r\n        padding-top: 1.5rem !important;\r\n    }\r\n    .pr-lg-4,\r\n    .px-lg-4 {\r\n        padding-right: 1.5rem !important;\r\n    }\r\n    .pb-lg-4,\r\n    .py-lg-4 {\r\n        padding-bottom: 1.5rem !important;\r\n    }\r\n    .pl-lg-4,\r\n    .px-lg-4 {\r\n        padding-left: 1.5rem !important;\r\n    }\r\n    .p-lg-5 {\r\n        padding: 3rem !important;\r\n    }\r\n    .pt-lg-5,\r\n    .py-lg-5 {\r\n        padding-top: 3rem !important;\r\n    }\r\n    .pr-lg-5,\r\n    .px-lg-5 {\r\n        padding-right: 3rem !important;\r\n    }\r\n    .pb-lg-5,\r\n    .py-lg-5 {\r\n        padding-bottom: 3rem !important;\r\n    }\r\n    .pl-lg-5,\r\n    .px-lg-5 {\r\n        padding-left: 3rem !important;\r\n    }\r\n    .m-lg-n1 {\r\n        margin: -0.25rem !important;\r\n    }\r\n    .mt-lg-n1,\r\n    .my-lg-n1 {\r\n        margin-top: -0.25rem !important;\r\n    }\r\n    .mr-lg-n1,\r\n    .mx-lg-n1 {\r\n        margin-right: -0.25rem !important;\r\n    }\r\n    .mb-lg-n1,\r\n    .my-lg-n1 {\r\n        margin-bottom: -0.25rem !important;\r\n    }\r\n    .ml-lg-n1,\r\n    .mx-lg-n1 {\r\n        margin-left: -0.25rem !important;\r\n    }\r\n    .m-lg-n2 {\r\n        margin: -0.5rem !important;\r\n    }\r\n    .mt-lg-n2,\r\n    .my-lg-n2 {\r\n        margin-top: -0.5rem !important;\r\n    }\r\n    .mr-lg-n2,\r\n    .mx-lg-n2 {\r\n        margin-right: -0.5rem !important;\r\n    }\r\n    .mb-lg-n2,\r\n    .my-lg-n2 {\r\n        margin-bottom: -0.5rem !important;\r\n    }\r\n    .ml-lg-n2,\r\n    .mx-lg-n2 {\r\n        margin-left: -0.5rem !important;\r\n    }\r\n    .m-lg-n3 {\r\n        margin: -1rem !important;\r\n    }\r\n    .mt-lg-n3,\r\n    .my-lg-n3 {\r\n        margin-top: -1rem !important;\r\n    }\r\n    .mr-lg-n3,\r\n    .mx-lg-n3 {\r\n        margin-right: -1rem !important;\r\n    }\r\n    .mb-lg-n3,\r\n    .my-lg-n3 {\r\n        margin-bottom: -1rem !important;\r\n    }\r\n    .ml-lg-n3,\r\n    .mx-lg-n3 {\r\n        margin-left: -1rem !important;\r\n    }\r\n    .m-lg-n4 {\r\n        margin: -1.5rem !important;\r\n    }\r\n    .mt-lg-n4,\r\n    .my-lg-n4 {\r\n        margin-top: -1.5rem !important;\r\n    }\r\n    .mr-lg-n4,\r\n    .mx-lg-n4 {\r\n        margin-right: -1.5rem !important;\r\n    }\r\n    .mb-lg-n4,\r\n    .my-lg-n4 {\r\n        margin-bottom: -1.5rem !important;\r\n    }\r\n    .ml-lg-n4,\r\n    .mx-lg-n4 {\r\n        margin-left: -1.5rem !important;\r\n    }\r\n    .m-lg-n5 {\r\n        margin: -3rem !important;\r\n    }\r\n    .mt-lg-n5,\r\n    .my-lg-n5 {\r\n        margin-top: -3rem !important;\r\n    }\r\n    .mr-lg-n5,\r\n    .mx-lg-n5 {\r\n        margin-right: -3rem !important;\r\n    }\r\n    .mb-lg-n5,\r\n    .my-lg-n5 {\r\n        margin-bottom: -3rem !important;\r\n    }\r\n    .ml-lg-n5,\r\n    .mx-lg-n5 {\r\n        margin-left: -3rem !important;\r\n    }\r\n    .m-lg-auto {\r\n        margin: auto !important;\r\n    }\r\n    .mt-lg-auto,\r\n    .my-lg-auto {\r\n        margin-top: auto !important;\r\n    }\r\n    .mr-lg-auto,\r\n    .mx-lg-auto {\r\n        margin-right: auto !important;\r\n    }\r\n    .mb-lg-auto,\r\n    .my-lg-auto {\r\n        margin-bottom: auto !important;\r\n    }\r\n    .ml-lg-auto,\r\n    .mx-lg-auto {\r\n        margin-left: auto !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .m-xl-0 {\r\n        margin: 0 !important;\r\n    }\r\n    .mt-xl-0,\r\n    .my-xl-0 {\r\n        margin-top: 0 !important;\r\n    }\r\n    .mr-xl-0,\r\n    .mx-xl-0 {\r\n        margin-right: 0 !important;\r\n    }\r\n    .mb-xl-0,\r\n    .my-xl-0 {\r\n        margin-bottom: 0 !important;\r\n    }\r\n    .ml-xl-0,\r\n    .mx-xl-0 {\r\n        margin-left: 0 !important;\r\n    }\r\n    .m-xl-1 {\r\n        margin: 0.25rem !important;\r\n    }\r\n    .mt-xl-1,\r\n    .my-xl-1 {\r\n        margin-top: 0.25rem !important;\r\n    }\r\n    .mr-xl-1,\r\n    .mx-xl-1 {\r\n        margin-right: 0.25rem !important;\r\n    }\r\n    .mb-xl-1,\r\n    .my-xl-1 {\r\n        margin-bottom: 0.25rem !important;\r\n    }\r\n    .ml-xl-1,\r\n    .mx-xl-1 {\r\n        margin-left: 0.25rem !important;\r\n    }\r\n    .m-xl-2 {\r\n        margin: 0.5rem !important;\r\n    }\r\n    .mt-xl-2,\r\n    .my-xl-2 {\r\n        margin-top: 0.5rem !important;\r\n    }\r\n    .mr-xl-2,\r\n    .mx-xl-2 {\r\n        margin-right: 0.5rem !important;\r\n    }\r\n    .mb-xl-2,\r\n    .my-xl-2 {\r\n        margin-bottom: 0.5rem !important;\r\n    }\r\n    .ml-xl-2,\r\n    .mx-xl-2 {\r\n        margin-left: 0.5rem !important;\r\n    }\r\n    .m-xl-3 {\r\n        margin: 1rem !important;\r\n    }\r\n    .mt-xl-3,\r\n    .my-xl-3 {\r\n        margin-top: 1rem !important;\r\n    }\r\n    .mr-xl-3,\r\n    .mx-xl-3 {\r\n        margin-right: 1rem !important;\r\n    }\r\n    .mb-xl-3,\r\n    .my-xl-3 {\r\n        margin-bottom: 1rem !important;\r\n    }\r\n    .ml-xl-3,\r\n    .mx-xl-3 {\r\n        margin-left: 1rem !important;\r\n    }\r\n    .m-xl-4 {\r\n        margin: 1.5rem !important;\r\n    }\r\n    .mt-xl-4,\r\n    .my-xl-4 {\r\n        margin-top: 1.5rem !important;\r\n    }\r\n    .mr-xl-4,\r\n    .mx-xl-4 {\r\n        margin-right: 1.5rem !important;\r\n    }\r\n    .mb-xl-4,\r\n    .my-xl-4 {\r\n        margin-bottom: 1.5rem !important;\r\n    }\r\n    .ml-xl-4,\r\n    .mx-xl-4 {\r\n        margin-left: 1.5rem !important;\r\n    }\r\n    .m-xl-5 {\r\n        margin: 3rem !important;\r\n    }\r\n    .mt-xl-5,\r\n    .my-xl-5 {\r\n        margin-top: 3rem !important;\r\n    }\r\n    .mr-xl-5,\r\n    .mx-xl-5 {\r\n        margin-right: 3rem !important;\r\n    }\r\n    .mb-xl-5,\r\n    .my-xl-5 {\r\n        margin-bottom: 3rem !important;\r\n    }\r\n    .ml-xl-5,\r\n    .mx-xl-5 {\r\n        margin-left: 3rem !important;\r\n    }\r\n    .p-xl-0 {\r\n        padding: 0 !important;\r\n    }\r\n    .pt-xl-0,\r\n    .py-xl-0 {\r\n        padding-top: 0 !important;\r\n    }\r\n    .pr-xl-0,\r\n    .px-xl-0 {\r\n        padding-right: 0 !important;\r\n    }\r\n    .pb-xl-0,\r\n    .py-xl-0 {\r\n        padding-bottom: 0 !important;\r\n    }\r\n    .pl-xl-0,\r\n    .px-xl-0 {\r\n        padding-left: 0 !important;\r\n    }\r\n    .p-xl-1 {\r\n        padding: 0.25rem !important;\r\n    }\r\n    .pt-xl-1,\r\n    .py-xl-1 {\r\n        padding-top: 0.25rem !important;\r\n    }\r\n    .pr-xl-1,\r\n    .px-xl-1 {\r\n        padding-right: 0.25rem !important;\r\n    }\r\n    .pb-xl-1,\r\n    .py-xl-1 {\r\n        padding-bottom: 0.25rem !important;\r\n    }\r\n    .pl-xl-1,\r\n    .px-xl-1 {\r\n        padding-left: 0.25rem !important;\r\n    }\r\n    .p-xl-2 {\r\n        padding: 0.5rem !important;\r\n    }\r\n    .pt-xl-2,\r\n    .py-xl-2 {\r\n        padding-top: 0.5rem !important;\r\n    }\r\n    .pr-xl-2,\r\n    .px-xl-2 {\r\n        padding-right: 0.5rem !important;\r\n    }\r\n    .pb-xl-2,\r\n    .py-xl-2 {\r\n        padding-bottom: 0.5rem !important;\r\n    }\r\n    .pl-xl-2,\r\n    .px-xl-2 {\r\n        padding-left: 0.5rem !important;\r\n    }\r\n    .p-xl-3 {\r\n        padding: 1rem !important;\r\n    }\r\n    .pt-xl-3,\r\n    .py-xl-3 {\r\n        padding-top: 1rem !important;\r\n    }\r\n    .pr-xl-3,\r\n    .px-xl-3 {\r\n        padding-right: 1rem !important;\r\n    }\r\n    .pb-xl-3,\r\n    .py-xl-3 {\r\n        padding-bottom: 1rem !important;\r\n    }\r\n    .pl-xl-3,\r\n    .px-xl-3 {\r\n        padding-left: 1rem !important;\r\n    }\r\n    .p-xl-4 {\r\n        padding: 1.5rem !important;\r\n    }\r\n    .pt-xl-4,\r\n    .py-xl-4 {\r\n        padding-top: 1.5rem !important;\r\n    }\r\n    .pr-xl-4,\r\n    .px-xl-4 {\r\n        padding-right: 1.5rem !important;\r\n    }\r\n    .pb-xl-4,\r\n    .py-xl-4 {\r\n        padding-bottom: 1.5rem !important;\r\n    }\r\n    .pl-xl-4,\r\n    .px-xl-4 {\r\n        padding-left: 1.5rem !important;\r\n    }\r\n    .p-xl-5 {\r\n        padding: 3rem !important;\r\n    }\r\n    .pt-xl-5,\r\n    .py-xl-5 {\r\n        padding-top: 3rem !important;\r\n    }\r\n    .pr-xl-5,\r\n    .px-xl-5 {\r\n        padding-right: 3rem !important;\r\n    }\r\n    .pb-xl-5,\r\n    .py-xl-5 {\r\n        padding-bottom: 3rem !important;\r\n    }\r\n    .pl-xl-5,\r\n    .px-xl-5 {\r\n        padding-left: 3rem !important;\r\n    }\r\n    .m-xl-n1 {\r\n        margin: -0.25rem !important;\r\n    }\r\n    .mt-xl-n1,\r\n    .my-xl-n1 {\r\n        margin-top: -0.25rem !important;\r\n    }\r\n    .mr-xl-n1,\r\n    .mx-xl-n1 {\r\n        margin-right: -0.25rem !important;\r\n    }\r\n    .mb-xl-n1,\r\n    .my-xl-n1 {\r\n        margin-bottom: -0.25rem !important;\r\n    }\r\n    .ml-xl-n1,\r\n    .mx-xl-n1 {\r\n        margin-left: -0.25rem !important;\r\n    }\r\n    .m-xl-n2 {\r\n        margin: -0.5rem !important;\r\n    }\r\n    .mt-xl-n2,\r\n    .my-xl-n2 {\r\n        margin-top: -0.5rem !important;\r\n    }\r\n    .mr-xl-n2,\r\n    .mx-xl-n2 {\r\n        margin-right: -0.5rem !important;\r\n    }\r\n    .mb-xl-n2,\r\n    .my-xl-n2 {\r\n        margin-bottom: -0.5rem !important;\r\n    }\r\n    .ml-xl-n2,\r\n    .mx-xl-n2 {\r\n        margin-left: -0.5rem !important;\r\n    }\r\n    .m-xl-n3 {\r\n        margin: -1rem !important;\r\n    }\r\n    .mt-xl-n3,\r\n    .my-xl-n3 {\r\n        margin-top: -1rem !important;\r\n    }\r\n    .mr-xl-n3,\r\n    .mx-xl-n3 {\r\n        margin-right: -1rem !important;\r\n    }\r\n    .mb-xl-n3,\r\n    .my-xl-n3 {\r\n        margin-bottom: -1rem !important;\r\n    }\r\n    .ml-xl-n3,\r\n    .mx-xl-n3 {\r\n        margin-left: -1rem !important;\r\n    }\r\n    .m-xl-n4 {\r\n        margin: -1.5rem !important;\r\n    }\r\n    .mt-xl-n4,\r\n    .my-xl-n4 {\r\n        margin-top: -1.5rem !important;\r\n    }\r\n    .mr-xl-n4,\r\n    .mx-xl-n4 {\r\n        margin-right: -1.5rem !important;\r\n    }\r\n    .mb-xl-n4,\r\n    .my-xl-n4 {\r\n        margin-bottom: -1.5rem !important;\r\n    }\r\n    .ml-xl-n4,\r\n    .mx-xl-n4 {\r\n        margin-left: -1.5rem !important;\r\n    }\r\n    .m-xl-n5 {\r\n        margin: -3rem !important;\r\n    }\r\n    .mt-xl-n5,\r\n    .my-xl-n5 {\r\n        margin-top: -3rem !important;\r\n    }\r\n    .mr-xl-n5,\r\n    .mx-xl-n5 {\r\n        margin-right: -3rem !important;\r\n    }\r\n    .mb-xl-n5,\r\n    .my-xl-n5 {\r\n        margin-bottom: -3rem !important;\r\n    }\r\n    .ml-xl-n5,\r\n    .mx-xl-n5 {\r\n        margin-left: -3rem !important;\r\n    }\r\n    .m-xl-auto {\r\n        margin: auto !important;\r\n    }\r\n    .mt-xl-auto,\r\n    .my-xl-auto {\r\n        margin-top: auto !important;\r\n    }\r\n    .mr-xl-auto,\r\n    .mx-xl-auto {\r\n        margin-right: auto !important;\r\n    }\r\n    .mb-xl-auto,\r\n    .my-xl-auto {\r\n        margin-bottom: auto !important;\r\n    }\r\n    .ml-xl-auto,\r\n    .mx-xl-auto {\r\n        margin-left: auto !important;\r\n    }\r\n}\r\n\r\n.stretched-link::after {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    pointer-events: auto;\r\n    content: '';\r\n    background-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.text-monospace {\r\n    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',\r\n        'Courier New', monospace !important;\r\n}\r\n\r\n.text-justify {\r\n    text-align: justify !important;\r\n}\r\n\r\n.text-wrap {\r\n    white-space: normal !important;\r\n}\r\n\r\n.text-nowrap {\r\n    white-space: nowrap !important;\r\n}\r\n\r\n.text-truncate {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n.text-left {\r\n    text-align: left !important;\r\n}\r\n\r\n.text-right {\r\n    text-align: right !important;\r\n}\r\n\r\n.text-center {\r\n    text-align: center !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .text-sm-left {\r\n        text-align: left !important;\r\n    }\r\n    .text-sm-right {\r\n        text-align: right !important;\r\n    }\r\n    .text-sm-center {\r\n        text-align: center !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .text-md-left {\r\n        text-align: left !important;\r\n    }\r\n    .text-md-right {\r\n        text-align: right !important;\r\n    }\r\n    .text-md-center {\r\n        text-align: center !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .text-lg-left {\r\n        text-align: left !important;\r\n    }\r\n    .text-lg-right {\r\n        text-align: right !important;\r\n    }\r\n    .text-lg-center {\r\n        text-align: center !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .text-xl-left {\r\n        text-align: left !important;\r\n    }\r\n    .text-xl-right {\r\n        text-align: right !important;\r\n    }\r\n    .text-xl-center {\r\n        text-align: center !important;\r\n    }\r\n}\r\n\r\n.text-lowercase {\r\n    text-transform: lowercase !important;\r\n}\r\n\r\n.text-uppercase {\r\n    text-transform: uppercase !important;\r\n}\r\n\r\n.text-capitalize {\r\n    text-transform: capitalize !important;\r\n}\r\n\r\n.font-weight-light {\r\n    font-weight: 300 !important;\r\n}\r\n\r\n.font-weight-lighter {\r\n    font-weight: lighter !important;\r\n}\r\n\r\n.font-weight-normal {\r\n    font-weight: 400 !important;\r\n}\r\n\r\n.font-weight-bold {\r\n    font-weight: 700 !important;\r\n}\r\n\r\n.font-weight-bolder {\r\n    font-weight: bolder !important;\r\n}\r\n\r\n.font-italic {\r\n    font-style: italic !important;\r\n}\r\n\r\n.text-white {\r\n    color: #fff !important;\r\n}\r\n\r\n.text-primary {\r\n    color: #007bff !important;\r\n}\r\n\r\na.text-primary:hover,\r\na.text-primary:focus {\r\n    color: #0056b3 !important;\r\n}\r\n\r\n.text-secondary {\r\n    color: #6c757d !important;\r\n}\r\n\r\na.text-secondary:hover,\r\na.text-secondary:focus {\r\n    color: #494f54 !important;\r\n}\r\n\r\n.text-success {\r\n    color: #28a745 !important;\r\n}\r\n\r\na.text-success:hover,\r\na.text-success:focus {\r\n    color: #19692c !important;\r\n}\r\n\r\n.text-info {\r\n    color: #17a2b8 !important;\r\n}\r\n\r\na.text-info:hover,\r\na.text-info:focus {\r\n    color: #0f6674 !important;\r\n}\r\n\r\n.text-warning {\r\n    color: #ffc107 !important;\r\n}\r\n\r\na.text-warning:hover,\r\na.text-warning:focus {\r\n    color: #ba8b00 !important;\r\n}\r\n\r\n.text-danger {\r\n    color: #dc3545 !important;\r\n}\r\n\r\na.text-danger:hover,\r\na.text-danger:focus {\r\n    color: #a71d2a !important;\r\n}\r\n\r\n.text-light {\r\n    color: #f8f9fa !important;\r\n}\r\n\r\na.text-light:hover,\r\na.text-light:focus {\r\n    color: #cbd3da !important;\r\n}\r\n\r\n.text-dark {\r\n    color: #343a40 !important;\r\n}\r\n\r\na.text-dark:hover,\r\na.text-dark:focus {\r\n    color: #121416 !important;\r\n}\r\n\r\n.text-body {\r\n    color: #212529 !important;\r\n}\r\n\r\n.text-muted {\r\n    color: #6c757d !important;\r\n}\r\n\r\n.text-black-50 {\r\n    color: rgba(0, 0, 0, 0.5) !important;\r\n}\r\n\r\n.text-white-50 {\r\n    color: rgba(255, 255, 255, 0.5) !important;\r\n}\r\n\r\n.text-hide {\r\n    font: 0/0 a;\r\n    color: transparent;\r\n    text-shadow: none;\r\n    background-color: transparent;\r\n    border: 0;\r\n}\r\n\r\n.text-decoration-none {\r\n    text-decoration: none !important;\r\n}\r\n\r\n.text-break {\r\n    word-wrap: break-word !important;\r\n}\r\n\r\n.text-reset {\r\n    color: inherit !important;\r\n}\r\n\r\n.visible {\r\n    visibility: visible !important;\r\n}\r\n\r\n.invisible {\r\n    visibility: hidden !important;\r\n}\r\n\r\n@media print {\r\n    *,\r\n    *::before,\r\n    *::after {\r\n        text-shadow: none !important;\r\n        box-shadow: none !important;\r\n    }\r\n    a:not(.btn) {\r\n        text-decoration: underline;\r\n    }\r\n    abbr[title]::after {\r\n        content: ' (' attr(title) ')';\r\n    }\r\n    pre {\r\n        white-space: pre-wrap !important;\r\n    }\r\n    pre,\r\n    blockquote {\r\n        border: 1px solid #adb5bd;\r\n        page-break-inside: avoid;\r\n    }\r\n    thead {\r\n        display: table-header-group;\r\n    }\r\n    tr,\r\n    img {\r\n        page-break-inside: avoid;\r\n    }\r\n    p,\r\n    h2,\r\n    h3 {\r\n        orphans: 3;\r\n        widows: 3;\r\n    }\r\n    h2,\r\n    h3 {\r\n        page-break-after: avoid;\r\n    }\r\n    @page {\r\n        size: a3;\r\n    }\r\n    body {\r\n        min-width: 992px !important;\r\n    }\r\n    .container {\r\n        min-width: 992px !important;\r\n    }\r\n    .navbar {\r\n        display: none;\r\n    }\r\n    .badge {\r\n        border: 1px solid #000;\r\n    }\r\n    .table {\r\n        border-collapse: collapse !important;\r\n    }\r\n    .table td,\r\n    .table th {\r\n        background-color: #fff !important;\r\n    }\r\n    .table-bordered th,\r\n    .table-bordered td {\r\n        border: 1px solid #dee2e6 !important;\r\n    }\r\n    .table-dark {\r\n        color: inherit;\r\n    }\r\n    .table-dark th,\r\n    .table-dark td,\r\n    .table-dark thead th,\r\n    .table-dark tbody + tbody {\r\n        border-color: #dee2e6;\r\n    }\r\n    .table .thead-dark th {\r\n        color: inherit;\r\n        border-color: #dee2e6;\r\n    }\r\n}\r\n",
            '',
        ]),
            (r.exports = n)
    },
    function (r, n, t) {
        var e = t(1),
            o = t(9)
        'string' == typeof (o = o.__esModule ? o.default : o) &&
            (o = [[r.i, o, '']])
        var a = { insert: 'head', singleton: !1 }
        e(o, a)
        r.exports = o.locals || {}
    },
    function (r, n, t) {
        ;(n = t(2)(!1)).push([
            r.i,
            'body {\n    background: papayawhip;\n}\n\n.row,\n.container {\n    border: 1px solid tomato;\n}\n\n.row {\n    border: 1px solid green;\n}\n\n.col {\n    border: 1px solid #ccc;\n}\n',
            '',
        ]),
            (r.exports = n)
    },
    function (r, n, t) {
        'use strict'
        function e(r) {
            var n = r.tag,
                t = void 0 === n ? 'div' : n,
                e = r.only,
                o = void 0 !== e && e,
                a = r.inner,
                i = void 0 === a ? '<i>my custom HTMLElement is ...</i>' : a,
                l = r.className,
                m = void 0 === l ? 'defaultClass' : l,
                d = r.id,
                c = void 0 === d ? '' : d,
                s = r.parentId,
                p = void 0 === s ? '' : s,
                f = r.cut,
                b = void 0 === f ? 'default' : f
            if (o) {
                var g = document.createElement(t.trim()),
                    u = function (r) {
                        return (g.textContent = r), g.innerHTML
                    }
                return (
                    '<i>my custom HTMLElement is ...</i>' !== i && u(i),
                    void ('' === p
                        ? document.body.appendChild(g)
                        : document.querySelector(p).appendChild(g))
                )
            }
            var x = document.createElement(t.trim())
            switch (
                ('' !== c && (x.id = c.trim()),
                (x.className = m.trim()),
                (x.innerHTML = i),
                '' === p
                    ? document.body.appendChild(x)
                    : document.querySelector(p).appendChild(x),
                b)
            ) {
                case 'default':
                    break
                case 'all':
                    if (arguments[0].id) {
                        var h = document.getElementById(c)
                        '<i>my custom HTMLElement is ...</i>' === i &&
                            (h.innerHTML = ''),
                            h.removeAttribute('class')
                    }
                    break
                case 'class':
                    if (arguments[0].id) {
                        var w = document.getElementById(c)
                        w.removeAttribute('class')
                    }
            }
        }
        function o(r) {
            for (
                var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), e = 1;
                e < n;
                e++
            )
                t[e - 1] = arguments[e]
            throw Error(
                '[Immer] minified error nr: ' +
                    r +
                    (t.length ? ' ' + t.join(',') : '') +
                    '. Find the full error at: https://bit.ly/3cXEKWf'
            )
        }
        function a(r) {
            return !!r && !!r[Y]
        }
        function i(r) {
            return (
                !!r &&
                ((function (r) {
                    if (!r || 'object' != typeof r) return !1
                    var n = Object.getPrototypeOf(r)
                    return !n || n === Object.prototype
                })(r) ||
                    Array.isArray(r) ||
                    !!r[W] ||
                    !!r.constructor[W] ||
                    f(r) ||
                    b(r))
            )
        }
        function l(r, n, t) {
            void 0 === t && (t = !1),
                0 === m(r)
                    ? (t ? Object.keys : V)(r).forEach(function (e) {
                          ;(t && 'symbol' == typeof e) || n(e, r[e], r)
                      })
                    : r.forEach(function (t, e) {
                          return n(e, t, r)
                      })
        }
        function m(r) {
            var n = r[Y]
            return n
                ? n.i > 3
                    ? n.i - 4
                    : n.i
                : Array.isArray(r)
                ? 1
                : f(r)
                ? 2
                : b(r)
                ? 3
                : 0
        }
        function d(r, n) {
            return 2 === m(r)
                ? r.has(n)
                : Object.prototype.hasOwnProperty.call(r, n)
        }
        function c(r, n) {
            return 2 === m(r) ? r.get(n) : r[n]
        }
        function s(r, n, t) {
            var e = m(r)
            2 === e
                ? r.set(n, t)
                : 3 === e
                ? (r.delete(n), r.add(t))
                : (r[n] = t)
        }
        function p(r, n) {
            return r === n ? 0 !== r || 1 / r == 1 / n : r != r && n != n
        }
        function f(r) {
            return q && r instanceof Map
        }
        function b(r) {
            return $ && r instanceof Set
        }
        function g(r) {
            return r.o || r.t
        }
        function u(r) {
            if (Array.isArray(r)) return r.slice()
            var n = J(r)
            delete n[Y]
            for (var t = V(n), e = 0; e < t.length; e++) {
                var o = t[e],
                    a = n[o]
                !1 === a.writable && ((a.writable = !0), (a.configurable = !0)),
                    (a.get || a.set) &&
                        (n[o] = {
                            configurable: !0,
                            writable: !0,
                            enumerable: a.enumerable,
                            value: r[o],
                        })
            }
            return Object.create(Object.getPrototypeOf(r), n)
        }
        function x(r, n) {
            w(r) ||
                a(r) ||
                !i(r) ||
                (m(r) > 1 && (r.set = r.add = r.clear = r.delete = h),
                Object.freeze(r),
                n &&
                    l(
                        r,
                        function (r, n) {
                            return x(n, !0)
                        },
                        !0
                    ))
        }
        function h() {
            o(2)
        }
        function w(r) {
            return null == r || 'object' != typeof r || Object.isFrozen(r)
        }
        function v(r) {
            var n = Z[r]
            return n || o(19, r), n
        }
        function y(r, n) {
            Z[r] = n
        }
        function k() {
            return U
        }
        function j(r, n) {
            n && (v('Patches'), (r.u = []), (r.s = []), (r.v = n))
        }
        function z(r) {
            O(r), r.p.forEach(E), (r.p = null)
        }
        function O(r) {
            r === U && (U = r.l)
        }
        function S(r) {
            return (U = { p: [], l: U, h: r, m: !0, _: 0 })
        }
        function E(r) {
            var n = r[Y]
            0 === n.i || 1 === n.i ? n.j() : (n.g = !0)
        }
        function C(r, n) {
            n._ = n.p.length
            var t = n.p[0],
                e = void 0 !== r && r !== t
            return (
                n.h.O || v('ES5').S(n, r, e),
                e
                    ? (t[Y].P && (z(n), o(4)),
                      i(r) && ((r = P(n, r)), n.l || D(n, r)),
                      n.u && v('Patches').M(t[Y], r, n.u, n.s))
                    : (r = P(n, t, [])),
                z(n),
                n.u && n.v(n.u, n.s),
                r !== K ? r : void 0
            )
        }
        function P(r, n, t) {
            if (w(n)) return n
            var e = n[Y]
            if (!e)
                return (
                    l(
                        n,
                        function (o, a) {
                            return T(r, e, n, o, a, t)
                        },
                        !0
                    ),
                    n
                )
            if (e.A !== r) return n
            if (!e.P) return D(r, e.t, !0), e.t
            if (!e.I) {
                ;(e.I = !0), e.A._--
                var o = 4 === e.i || 5 === e.i ? (e.o = u(e.k)) : e.o
                l(3 === e.i ? new Set(o) : o, function (n, a) {
                    return T(r, e, o, n, a, t)
                }),
                    D(r, o, !1),
                    t && r.u && v('Patches').R(e, t, r.u, r.s)
            }
            return e.o
        }
        function T(r, n, t, e, o, l) {
            if (a(o)) {
                var m = P(
                    r,
                    o,
                    l && n && 3 !== n.i && !d(n.D, e) ? l.concat(e) : void 0
                )
                if ((s(t, e, m), !a(m))) return
                r.m = !1
            }
            if (i(o) && !w(o)) {
                if (!r.h.N && r._ < 1) return
                P(r, o), (n && n.A.l) || D(r, o)
            }
        }
        function D(r, n, t) {
            void 0 === t && (t = !1), r.h.N && r.m && x(n, t)
        }
        function A(r, n) {
            var t = r[Y]
            return (t ? g(t) : r)[n]
        }
        function M(r, n) {
            if (n in r)
                for (var t = Object.getPrototypeOf(r); t; ) {
                    var e = Object.getOwnPropertyDescriptor(t, n)
                    if (e) return e
                    t = Object.getPrototypeOf(t)
                }
        }
        function L(r) {
            r.P || ((r.P = !0), r.l && L(r.l))
        }
        function N(r) {
            r.o || (r.o = u(r.t))
        }
        function _(r, n, t) {
            var e = f(n)
                ? v('MapSet').T(n, t)
                : b(n)
                ? v('MapSet').F(n, t)
                : r.O
                ? (function (r, n) {
                      var t = Array.isArray(r),
                          e = {
                              i: t ? 1 : 0,
                              A: n ? n.A : k(),
                              P: !1,
                              I: !1,
                              D: {},
                              l: n,
                              t: r,
                              k: null,
                              o: null,
                              j: null,
                              C: !1,
                          },
                          o = e,
                          a = G
                      t && ((o = [e]), (a = Q))
                      var i = Proxy.revocable(o, a),
                          l = i.revoke,
                          m = i.proxy
                      return (e.k = m), (e.j = l), m
                  })(n, t)
                : v('ES5').J(n, t)
            return (t ? t.A : k()).p.push(e), e
        }
        function I(r) {
            return (
                a(r) || o(22, r),
                (function r(n) {
                    if (!i(n)) return n
                    var t,
                        e = n[Y],
                        o = m(n)
                    if (e) {
                        if (!e.P && (e.i < 4 || !v('ES5').K(e))) return e.t
                        ;(e.I = !0), (t = B(n, o)), (e.I = !1)
                    } else t = B(n, o)
                    return (
                        l(t, function (n, o) {
                            ;(e && c(e.t, n) === o) || s(t, n, r(o))
                        }),
                        3 === o ? new Set(t) : t
                    )
                })(r)
            )
        }
        function B(r, n) {
            switch (n) {
                case 2:
                    return new Map(r)
                case 3:
                    return Array.from(r)
            }
            return u(r)
        }
        function R() {
            function r(r, n) {
                var t = o[r]
                return (
                    t
                        ? (t.enumerable = n)
                        : (o[r] = t = {
                              configurable: !0,
                              enumerable: n,
                              get: function () {
                                  var n = this[Y]
                                  return G.get(n, r)
                              },
                              set: function (n) {
                                  var t = this[Y]
                                  G.set(t, r, n)
                              },
                          }),
                    t
                )
            }
            function n(r) {
                for (var n = r.length - 1; n >= 0; n--) {
                    var o = r[n][Y]
                    if (!o.P)
                        switch (o.i) {
                            case 5:
                                e(o) && L(o)
                                break
                            case 4:
                                t(o) && L(o)
                        }
                }
            }
            function t(r) {
                for (
                    var n = r.t, t = r.k, e = V(t), o = e.length - 1;
                    o >= 0;
                    o--
                ) {
                    var a = e[o]
                    if (a !== Y) {
                        var i = n[a]
                        if (void 0 === i && !d(n, a)) return !0
                        var l = t[a],
                            m = l && l[Y]
                        if (m ? m.t !== i : !p(l, i)) return !0
                    }
                }
                var c = !!n[Y]
                return e.length !== V(n).length + (c ? 0 : 1)
            }
            function e(r) {
                var n = r.k
                if (n.length !== r.t.length) return !0
                var t = Object.getOwnPropertyDescriptor(n, n.length - 1)
                return !(!t || t.get)
            }
            var o = {}
            y('ES5', {
                J: function (n, t) {
                    var e = Array.isArray(n),
                        o = (function (n, t) {
                            if (n) {
                                for (
                                    var e = Array(t.length), o = 0;
                                    o < t.length;
                                    o++
                                )
                                    Object.defineProperty(e, '' + o, r(o, !0))
                                return e
                            }
                            var a = J(t)
                            delete a[Y]
                            for (var i = V(a), l = 0; l < i.length; l++) {
                                var m = i[l]
                                a[m] = r(m, n || !!a[m].enumerable)
                            }
                            return Object.create(Object.getPrototypeOf(t), a)
                        })(e, n),
                        a = {
                            i: e ? 5 : 4,
                            A: t ? t.A : k(),
                            P: !1,
                            I: !1,
                            D: {},
                            l: t,
                            t: n,
                            k: o,
                            o: null,
                            g: !1,
                            C: !1,
                        }
                    return (
                        Object.defineProperty(o, Y, { value: a, writable: !0 }),
                        o
                    )
                },
                S: function (r, t, o) {
                    o
                        ? a(t) && t[Y].A === r && n(r.p)
                        : (r.u &&
                              (function r(n) {
                                  if (n && 'object' == typeof n) {
                                      var t = n[Y]
                                      if (t) {
                                          var o = t.t,
                                              a = t.k,
                                              i = t.D,
                                              m = t.i
                                          if (4 === m)
                                              l(a, function (n) {
                                                  n !== Y &&
                                                      (void 0 !== o[n] ||
                                                      d(o, n)
                                                          ? i[n] || r(a[n])
                                                          : ((i[n] = !0), L(t)))
                                              }),
                                                  l(o, function (r) {
                                                      void 0 !== a[r] ||
                                                          d(a, r) ||
                                                          ((i[r] = !1), L(t))
                                                  })
                                          else if (5 === m) {
                                              if (
                                                  (e(t) &&
                                                      (L(t), (i.length = !0)),
                                                  a.length < o.length)
                                              )
                                                  for (
                                                      var c = a.length;
                                                      c < o.length;
                                                      c++
                                                  )
                                                      i[c] = !1
                                              else
                                                  for (
                                                      var s = o.length;
                                                      s < a.length;
                                                      s++
                                                  )
                                                      i[s] = !0
                                              for (
                                                  var p = Math.min(
                                                          a.length,
                                                          o.length
                                                      ),
                                                      f = 0;
                                                  f < p;
                                                  f++
                                              )
                                                  void 0 === i[f] && r(a[f])
                                          }
                                      }
                                  }
                              })(r.p[0]),
                          n(r.p))
                },
                K: function (r) {
                    return 4 === r.i ? t(r) : e(r)
                },
            })
        }
        t.r(n)
        var F,
            U,
            H = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
            q = 'undefined' != typeof Map,
            $ = 'undefined' != typeof Set,
            X =
                'undefined' != typeof Proxy &&
                void 0 !== Proxy.revocable &&
                'undefined' != typeof Reflect,
            K = H
                ? Symbol.for('immer-nothing')
                : (((F = {})['immer-nothing'] = !0), F),
            W = H ? Symbol.for('immer-draftable') : '__$immer_draftable',
            Y = H ? Symbol.for('immer-state') : '__$immer_state',
            V =
                ('undefined' != typeof Symbol && Symbol.iterator,
                'undefined' != typeof Reflect && Reflect.ownKeys
                    ? Reflect.ownKeys
                    : void 0 !== Object.getOwnPropertySymbols
                    ? function (r) {
                          return Object.getOwnPropertyNames(r).concat(
                              Object.getOwnPropertySymbols(r)
                          )
                      }
                    : Object.getOwnPropertyNames),
            J =
                Object.getOwnPropertyDescriptors ||
                function (r) {
                    var n = {}
                    return (
                        V(r).forEach(function (t) {
                            n[t] = Object.getOwnPropertyDescriptor(r, t)
                        }),
                        n
                    )
                },
            Z = {},
            G = {
                get: function (r, n) {
                    if (n === Y) return r
                    var t = g(r)
                    if (!d(t, n))
                        return (function (r, n, t) {
                            var e,
                                o = M(n, t)
                            return o
                                ? 'value' in o
                                    ? o.value
                                    : null === (e = o.get) || void 0 === e
                                    ? void 0
                                    : e.call(r.k)
                                : void 0
                        })(r, t, n)
                    var e = t[n]
                    return r.I || !i(e)
                        ? e
                        : e === A(r.t, n)
                        ? (N(r), (r.o[n] = _(r.A.h, e, r)))
                        : e
                },
                has: function (r, n) {
                    return n in g(r)
                },
                ownKeys: function (r) {
                    return Reflect.ownKeys(g(r))
                },
                set: function (r, n, t) {
                    var e = M(g(r), n)
                    if (null == e ? void 0 : e.set)
                        return e.set.call(r.k, t), !0
                    if (((r.D[n] = !0), !r.P)) {
                        if (p(t, A(g(r), n)) && (void 0 !== t || d(r.t, n)))
                            return !0
                        N(r), L(r)
                    }
                    return (r.o[n] = t), !0
                },
                deleteProperty: function (r, n) {
                    return (
                        void 0 !== A(r.t, n) || n in r.t
                            ? ((r.D[n] = !1), N(r), L(r))
                            : delete r.D[n],
                        r.o && delete r.o[n],
                        !0
                    )
                },
                getOwnPropertyDescriptor: function (r, n) {
                    var t = g(r),
                        e = Reflect.getOwnPropertyDescriptor(t, n)
                    return e
                        ? {
                              writable: !0,
                              configurable: 1 !== r.i || 'length' !== n,
                              enumerable: e.enumerable,
                              value: t[n],
                          }
                        : e
                },
                defineProperty: function () {
                    o(11)
                },
                getPrototypeOf: function (r) {
                    return Object.getPrototypeOf(r.t)
                },
                setPrototypeOf: function () {
                    o(12)
                },
            },
            Q = {}
        l(G, function (r, n) {
            Q[r] = function () {
                return (
                    (arguments[0] = arguments[0][0]), n.apply(this, arguments)
                )
            }
        }),
            (Q.deleteProperty = function (r, n) {
                return G.deleteProperty.call(this, r[0], n)
            }),
            (Q.set = function (r, n, t) {
                return G.set.call(this, r[0], n, t, r[0])
            })
        var rr = new ((function () {
                function r(r) {
                    ;(this.O = X),
                        (this.N = !1),
                        'boolean' ==
                            typeof (null == r ? void 0 : r.useProxies) &&
                            this.setUseProxies(r.useProxies),
                        'boolean' ==
                            typeof (null == r ? void 0 : r.autoFreeze) &&
                            this.setAutoFreeze(r.autoFreeze),
                        (this.produce = this.produce.bind(this)),
                        (this.produceWithPatches = this.produceWithPatches.bind(
                            this
                        ))
                }
                var n = r.prototype
                return (
                    (n.produce = function (r, n, t) {
                        if ('function' == typeof r && 'function' != typeof n) {
                            var e = n
                            n = r
                            var a = this
                            return function (r) {
                                var t = this
                                void 0 === r && (r = e)
                                for (
                                    var o = arguments.length,
                                        i = Array(o > 1 ? o - 1 : 0),
                                        l = 1;
                                    l < o;
                                    l++
                                )
                                    i[l - 1] = arguments[l]
                                return a.produce(r, function (r) {
                                    var e
                                    return (e = n).call.apply(
                                        e,
                                        [t, r].concat(i)
                                    )
                                })
                            }
                        }
                        var l
                        if (
                            ('function' != typeof n && o(6),
                            void 0 !== t && 'function' != typeof t && o(7),
                            i(r))
                        ) {
                            var m = S(this),
                                d = _(this, r, void 0),
                                c = !0
                            try {
                                ;(l = n(d)), (c = !1)
                            } finally {
                                c ? z(m) : O(m)
                            }
                            return 'undefined' != typeof Promise &&
                                l instanceof Promise
                                ? l.then(
                                      function (r) {
                                          return j(m, t), C(r, m)
                                      },
                                      function (r) {
                                          throw (z(m), r)
                                      }
                                  )
                                : (j(m, t), C(l, m))
                        }
                        if (!r || 'object' != typeof r) {
                            if ((l = n(r)) === K) return
                            return (
                                void 0 === l && (l = r), this.N && x(l, !0), l
                            )
                        }
                        o(21, r)
                    }),
                    (n.produceWithPatches = function (r, n) {
                        var t,
                            e,
                            o = this
                        return 'function' == typeof r
                            ? function (n) {
                                  for (
                                      var t = arguments.length,
                                          e = Array(t > 1 ? t - 1 : 0),
                                          a = 1;
                                      a < t;
                                      a++
                                  )
                                      e[a - 1] = arguments[a]
                                  return o.produceWithPatches(n, function (n) {
                                      return r.apply(void 0, [n].concat(e))
                                  })
                              }
                            : [
                                  this.produce(r, n, function (r, n) {
                                      ;(t = r), (e = n)
                                  }),
                                  t,
                                  e,
                              ]
                    }),
                    (n.createDraft = function (r) {
                        i(r) || o(8), a(r) && (r = I(r))
                        var n = S(this),
                            t = _(this, r, void 0)
                        return (t[Y].C = !0), O(n), t
                    }),
                    (n.finishDraft = function (r, n) {
                        var t = (r && r[Y]).A
                        return j(t, n), C(void 0, t)
                    }),
                    (n.setAutoFreeze = function (r) {
                        this.N = r
                    }),
                    (n.setUseProxies = function (r) {
                        r && !X && o(20), (this.O = r)
                    }),
                    (n.applyPatches = function (r, n) {
                        var t
                        for (t = n.length - 1; t >= 0; t--) {
                            var e = n[t]
                            if (0 === e.path.length && 'replace' === e.op) {
                                r = e.value
                                break
                            }
                        }
                        var o = v('Patches').$
                        return a(r)
                            ? o(r, n)
                            : this.produce(r, function (r) {
                                  return o(r, n.slice(t + 1))
                              })
                    }),
                    r
                )
            })())(),
            nr = rr.produce,
            tr =
                (rr.produceWithPatches.bind(rr),
                rr.setAutoFreeze.bind(rr),
                rr.setUseProxies.bind(rr),
                rr.applyPatches.bind(rr),
                rr.createDraft.bind(rr),
                rr.finishDraft.bind(rr),
                nr),
            er = t(0),
            or = function () {
                return Math.random()
                    .toString(36)
                    .substring(7)
                    .split('')
                    .join('.')
            },
            ar = {
                INIT: '@@redux/INIT' + or(),
                REPLACE: '@@redux/REPLACE' + or(),
                PROBE_UNKNOWN_ACTION: function () {
                    return '@@redux/PROBE_UNKNOWN_ACTION' + or()
                },
            }
        function ir(r) {
            if ('object' != typeof r || null === r) return !1
            for (var n = r; null !== Object.getPrototypeOf(n); )
                n = Object.getPrototypeOf(n)
            return Object.getPrototypeOf(r) === n
        }
        function lr(r, n, t) {
            var e
            if (
                ('function' == typeof n && 'function' == typeof t) ||
                ('function' == typeof t && 'function' == typeof arguments[3])
            )
                throw new Error(
                    'It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.'
                )
            if (
                ('function' == typeof n &&
                    void 0 === t &&
                    ((t = n), (n = void 0)),
                void 0 !== t)
            ) {
                if ('function' != typeof t)
                    throw new Error('Expected the enhancer to be a function.')
                return t(lr)(r, n)
            }
            if ('function' != typeof r)
                throw new Error('Expected the reducer to be a function.')
            var o = r,
                a = n,
                i = [],
                l = i,
                m = !1
            function d() {
                l === i && (l = i.slice())
            }
            function c() {
                if (m)
                    throw new Error(
                        'You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.'
                    )
                return a
            }
            function s(r) {
                if ('function' != typeof r)
                    throw new Error('Expected the listener to be a function.')
                if (m)
                    throw new Error(
                        'You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.'
                    )
                var n = !0
                return (
                    d(),
                    l.push(r),
                    function () {
                        if (n) {
                            if (m)
                                throw new Error(
                                    'You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.'
                                )
                            ;(n = !1), d()
                            var t = l.indexOf(r)
                            l.splice(t, 1), (i = null)
                        }
                    }
                )
            }
            function p(r) {
                if (!ir(r))
                    throw new Error(
                        'Actions must be plain objects. Use custom middleware for async actions.'
                    )
                if (void 0 === r.type)
                    throw new Error(
                        'Actions may not have an undefined "type" property. Have you misspelled a constant?'
                    )
                if (m) throw new Error('Reducers may not dispatch actions.')
                try {
                    ;(m = !0), (a = o(a, r))
                } finally {
                    m = !1
                }
                for (var n = (i = l), t = 0; t < n.length; t++) {
                    ;(0, n[t])()
                }
                return r
            }
            function f(r) {
                if ('function' != typeof r)
                    throw new Error(
                        'Expected the nextReducer to be a function.'
                    )
                ;(o = r), p({ type: ar.REPLACE })
            }
            function b() {
                var r,
                    n = s
                return (
                    ((r = {
                        subscribe: function (r) {
                            if ('object' != typeof r || null === r)
                                throw new TypeError(
                                    'Expected the observer to be an object.'
                                )
                            function t() {
                                r.next && r.next(c())
                            }
                            return t(), { unsubscribe: n(t) }
                        },
                    })[er.a] = function () {
                        return this
                    }),
                    r
                )
            }
            return (
                p({ type: ar.INIT }),
                ((e = {
                    dispatch: p,
                    subscribe: s,
                    getState: c,
                    replaceReducer: f,
                })[er.a] = b),
                e
            )
        }
        function mr(r, n) {
            var t = n && n.type
            return (
                'Given ' +
                ((t && 'action "' + String(t) + '"') || 'an action') +
                ', reducer "' +
                r +
                '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
            )
        }
        function dr(r) {
            for (var n = Object.keys(r), t = {}, e = 0; e < n.length; e++) {
                var o = n[e]
                0, 'function' == typeof r[o] && (t[o] = r[o])
            }
            var a,
                i = Object.keys(t)
            try {
                !(function (r) {
                    Object.keys(r).forEach(function (n) {
                        var t = r[n]
                        if (void 0 === t(void 0, { type: ar.INIT }))
                            throw new Error(
                                'Reducer "' +
                                    n +
                                    '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don\'t want to set a value for this reducer, you can use null instead of undefined.'
                            )
                        if (
                            void 0 ===
                            t(void 0, { type: ar.PROBE_UNKNOWN_ACTION() })
                        )
                            throw new Error(
                                'Reducer "' +
                                    n +
                                    '" returned undefined when probed with a random type. Don\'t try to handle ' +
                                    ar.INIT +
                                    ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
                            )
                    })
                })(t)
            } catch (r) {
                a = r
            }
            return function (r, n) {
                if ((void 0 === r && (r = {}), a)) throw a
                for (var e = !1, o = {}, l = 0; l < i.length; l++) {
                    var m = i[l],
                        d = t[m],
                        c = r[m],
                        s = d(c, n)
                    if (void 0 === s) {
                        var p = mr(m, n)
                        throw new Error(p)
                    }
                    ;(o[m] = s), (e = e || s !== c)
                }
                return (e = e || i.length !== Object.keys(r).length) ? o : r
            }
        }
        function cr(r, n, t) {
            return (
                n in r
                    ? Object.defineProperty(r, n, {
                          value: t,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (r[n] = t),
                r
            )
        }
        function sr(r, n) {
            var t = Object.keys(r)
            return (
                Object.getOwnPropertySymbols &&
                    t.push.apply(t, Object.getOwnPropertySymbols(r)),
                n &&
                    (t = t.filter(function (n) {
                        return Object.getOwnPropertyDescriptor(r, n).enumerable
                    })),
                t
            )
        }
        function pr(r) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {}
                n % 2
                    ? sr(t, !0).forEach(function (n) {
                          cr(r, n, t[n])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          r,
                          Object.getOwnPropertyDescriptors(t)
                      )
                    : sr(t).forEach(function (n) {
                          Object.defineProperty(
                              r,
                              n,
                              Object.getOwnPropertyDescriptor(t, n)
                          )
                      })
            }
            return r
        }
        function fr() {
            for (var r = arguments.length, n = new Array(r), t = 0; t < r; t++)
                n[t] = arguments[t]
            return 0 === n.length
                ? function (r) {
                      return r
                  }
                : 1 === n.length
                ? n[0]
                : n.reduce(function (r, n) {
                      return function () {
                          return r(n.apply(void 0, arguments))
                      }
                  })
        }
        function br() {
            for (var r = arguments.length, n = new Array(r), t = 0; t < r; t++)
                n[t] = arguments[t]
            return function (r) {
                return function () {
                    var t = r.apply(void 0, arguments),
                        e = function () {
                            throw new Error(
                                'Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.'
                            )
                        },
                        o = {
                            getState: t.getState,
                            dispatch: function () {
                                return e.apply(void 0, arguments)
                            },
                        },
                        a = n.map(function (r) {
                            return r(o)
                        })
                    return pr({}, t, {
                        dispatch: (e = fr.apply(void 0, a)(t.dispatch)),
                    })
                }
            }
        }
        function gr(r, n) {
            return r === n
        }
        function ur(r, n, t) {
            if (null === n || null === t || n.length !== t.length) return !1
            for (var e = n.length, o = 0; o < e; o++)
                if (!r(n[o], t[o])) return !1
            return !0
        }
        function xr(r) {
            var n = Array.isArray(r[0]) ? r[0] : r
            if (
                !n.every(function (r) {
                    return 'function' == typeof r
                })
            ) {
                var t = n
                    .map(function (r) {
                        return typeof r
                    })
                    .join(', ')
                throw new Error(
                    'Selector creators expect all input-selectors to be functions, instead received the following types: [' +
                        t +
                        ']'
                )
            }
            return n
        }
        !(function (r) {
            for (
                var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), e = 1;
                e < n;
                e++
            )
                t[e - 1] = arguments[e]
        })(function (r) {
            var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : gr,
                t = null,
                e = null
            return function () {
                return (
                    ur(n, t, arguments) || (e = r.apply(null, arguments)),
                    (t = arguments),
                    e
                )
            }
        })
        function hr(r) {
            return function (n) {
                var t = n.dispatch,
                    e = n.getState
                return function (n) {
                    return function (o) {
                        return 'function' == typeof o ? o(t, e, r) : n(o)
                    }
                }
            }
        }
        var wr = hr()
        wr.withExtraArgument = hr
        var vr = wr
        function yr() {
            return (yr =
                Object.assign ||
                function (r) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n]
                        for (var e in t)
                            Object.prototype.hasOwnProperty.call(t, e) &&
                                (r[e] = t[e])
                    }
                    return r
                }).apply(this, arguments)
        }
        function kr(r) {
            return (kr = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (r) {
                      return r.__proto__ || Object.getPrototypeOf(r)
                  })(r)
        }
        function jr(r, n) {
            return (jr =
                Object.setPrototypeOf ||
                function (r, n) {
                    return (r.__proto__ = n), r
                })(r, n)
        }
        function zr() {
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
            } catch (r) {
                return !1
            }
        }
        function Or(r, n, t) {
            return (Or = zr()
                ? Reflect.construct
                : function (r, n, t) {
                      var e = [null]
                      e.push.apply(e, n)
                      var o = new (Function.bind.apply(r, e))()
                      return t && jr(o, t.prototype), o
                  }).apply(null, arguments)
        }
        function Sr(r) {
            var n = 'function' == typeof Map ? new Map() : void 0
            return (Sr = function (r) {
                if (
                    null === r ||
                    !(function (r) {
                        return (
                            -1 !==
                            Function.toString.call(r).indexOf('[native code]')
                        )
                    })(r)
                )
                    return r
                if ('function' != typeof r)
                    throw new TypeError(
                        'Super expression must either be null or a function'
                    )
                if (void 0 !== n) {
                    if (n.has(r)) return n.get(r)
                    n.set(r, t)
                }
                function t() {
                    return Or(r, arguments, kr(this).constructor)
                }
                return (
                    (t.prototype = Object.create(r.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                    jr(t, r)
                )
            })(r)
        }
        var Er =
            'undefined' != typeof window &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                : function () {
                      if (0 !== arguments.length)
                          return 'object' == typeof arguments[0]
                              ? fr
                              : fr.apply(null, arguments)
                  }
        function Cr(r) {
            if ('object' != typeof r || null === r) return !1
            for (var n = r; null !== Object.getPrototypeOf(n); )
                n = Object.getPrototypeOf(n)
            return Object.getPrototypeOf(r) === n
        }
        var Pr = (function (r) {
            var n, t
            function e() {
                return r.apply(this, arguments) || this
            }
            ;(t = r),
                ((n = e).prototype = Object.create(t.prototype)),
                (n.prototype.constructor = n),
                (n.__proto__ = t)
            var o = e.prototype
            return (
                (o.concat = function () {
                    for (
                        var n, t = arguments.length, o = new Array(t), a = 0;
                        a < t;
                        a++
                    )
                        o[a] = arguments[a]
                    return Or(
                        e,
                        (n = r.prototype.concat).call.apply(n, [this].concat(o))
                    )
                }),
                (o.prepend = function () {
                    for (
                        var r = arguments.length, n = new Array(r), t = 0;
                        t < r;
                        t++
                    )
                        n[t] = arguments[t]
                    return 1 === n.length && Array.isArray(n[0])
                        ? Or(e, n[0].concat(this))
                        : Or(e, n.concat(this))
                }),
                e
            )
        })(Sr(Array))
        function Tr() {
            return function (r) {
                return (function (r) {
                    void 0 === r && (r = {})
                    var n = r,
                        t = n.thunk,
                        e = void 0 === t || t,
                        o = (n.immutableCheck, n.serializableCheck, new Pr())
                    e &&
                        (!(function (r) {
                            return 'boolean' == typeof r
                        })(e)
                            ? o.push(vr.withExtraArgument(e.extraArgument))
                            : o.push(vr))
                    0
                    return o
                })(r)
            }
        }
        function Dr(r, n) {
            function t() {
                if (n) {
                    var t = n.apply(void 0, arguments)
                    if (!t)
                        throw new Error(
                            'prepareAction did not return an object'
                        )
                    return yr(
                        { type: r, payload: t.payload },
                        'meta' in t && { meta: t.meta },
                        {},
                        'error' in t && { error: t.error }
                    )
                }
                return {
                    type: r,
                    payload: arguments.length <= 0 ? void 0 : arguments[0],
                }
            }
            return (
                (t.toString = function () {
                    return '' + r
                }),
                (t.type = r),
                (t.match = function (n) {
                    return n.type === r
                }),
                t
            )
        }
        function Ar(r) {
            var n,
                t = {},
                e = [],
                o = {
                    addCase: function (r, n) {
                        var e = 'string' == typeof r ? r : r.type
                        if (e in t)
                            throw new Error(
                                'addCase cannot be called with two reducers for the same action type'
                            )
                        return (t[e] = n), o
                    },
                    addMatcher: function (r, n) {
                        return e.push({ matcher: r, reducer: n }), o
                    },
                    addDefaultCase: function (r) {
                        return (n = r), o
                    },
                }
            return r(o), [t, e, n]
        }
        function Mr(r, n, t, e) {
            void 0 === t && (t = [])
            var o = 'function' == typeof n ? Ar(n) : [n, t, e],
                l = o[0],
                m = o[1],
                d = o[2]
            return function (n, t) {
                void 0 === n && (n = r)
                var e = [l[t.type]].concat(
                    m
                        .filter(function (r) {
                            return (0, r.matcher)(t)
                        })
                        .map(function (r) {
                            return r.reducer
                        })
                )
                return (
                    0 ===
                        e.filter(function (r) {
                            return !!r
                        }).length && (e = [d]),
                    e.reduce(function (r, n) {
                        if (n) {
                            if (a(r)) {
                                var e = n(r, t)
                                return void 0 === e ? r : e
                            }
                            if (i(r))
                                return tr(r, function (r) {
                                    return n(r, t)
                                })
                            var o = n(r, t)
                            if (void 0 === o)
                                throw Error(
                                    'A case reducer on a non-draftable value must not return undefined'
                                )
                            return o
                        }
                        return r
                    }, n)
                )
            }
        }
        'undefined' != typeof Symbol &&
            (Symbol.iterator || (Symbol.iterator = Symbol('Symbol.iterator'))),
            'undefined' != typeof Symbol &&
                (Symbol.asyncIterator ||
                    (Symbol.asyncIterator = Symbol('Symbol.asyncIterator')))
        R()
        var Lr = (function (r) {
                var n = r.name,
                    t = r.initialState
                if (!n)
                    throw new Error(
                        '`name` is a required option for createSlice'
                    )
                var e = r.reducers || {},
                    o =
                        void 0 === r.extraReducers
                            ? []
                            : 'function' == typeof r.extraReducers
                            ? Ar(r.extraReducers)
                            : [r.extraReducers],
                    a = o[0],
                    i = void 0 === a ? {} : a,
                    l = o[1],
                    m = void 0 === l ? [] : l,
                    d = o[2],
                    c = void 0 === d ? void 0 : d,
                    s = Object.keys(e),
                    p = {},
                    f = {},
                    b = {}
                s.forEach(function (r) {
                    var t,
                        o,
                        a = e[r],
                        i = n + '/' + r
                    'reducer' in a
                        ? ((t = a.reducer), (o = a.prepare))
                        : (t = a),
                        (p[r] = t),
                        (f[i] = t),
                        (b[r] = o ? Dr(i, o) : Dr(i))
                })
                var g = Mr(t, yr({}, i, {}, f), m, c)
                return { name: n, reducer: g, actions: b, caseReducers: p }
            })({
                name: 'digitalsDisplay',
                initialState: { displayData: '0' },
                reducers: {
                    addButtonValueToScreen: function (r, n) {
                        r.displayData = (function (r, n) {
                            var t = r.displayData + n.trim()
                            return (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace(
                                /error/gi,
                                ''
                            )).replace(/^0+/, '0')).replace(
                                /^0(\d|[(])/,
                                '$1'
                            )).replace(/([+-]|÷|\*)\s*0(\d)/, '$1 $2')).replace(
                                /(\s*\+\s*|\s*-\s*|\s*÷\s*|\s*\*\s*)+/g,
                                ' $1 '
                            )).replace(/(\.|\(|\))+/g, '$1')).replace(
                                /^0\)/,
                                '('
                            )).replace(/(\d+\.\d+)\./g, '$1')).replace(
                                /[^\d]\./,
                                ' 0.'
                            )).replace(/^\./, '0.')).replace(
                                /([\d])\.\s/g,
                                '$1 '
                            )).replace(
                                /^\s*(\*|÷)\s*(\d+)/,
                                '$2 $1 $2'
                            )).replace(/\s{2}/g, ' '))
                        })(r, n.payload)
                    },
                    clearAllFromCalcScreen: function (r) {
                        r.displayData = '0'
                    },
                    doEqual: function (r) {
                        r.displayData = (function (r) {
                            if (/error/gi.test(r.displayData)) return 'Error'
                            var n = r.displayData
                                .replace(/^-\s*(\d*)/, '0 - $1')
                                .split(' ')
                                .map(function (r) {
                                    return /\d/.test(r) ? Number(r) : r
                                })
                            n.forEach(function (r, t) {
                                '*' === r &&
                                    ((n[t + 1] = n[t - 1] * n[t + 1]),
                                    (n[t] = null),
                                    (n[t - 1] = null)),
                                    '÷' === r &&
                                        ((n[t + 1] = n[t - 1] / n[t + 1]),
                                        (n[t] = null),
                                        (n[t - 1] = null))
                            }),
                                (n = n.filter(function (r) {
                                    return null !== r
                                })).forEach(function (r, t) {
                                    '-' === r &&
                                        ((n[t + 1] = n[t - 1] - n[t + 1]),
                                        (n[t] = null),
                                        (n[t - 1] = null))
                                })
                            var t = n
                                    .filter(function (r) {
                                        return 'number' == typeof r
                                    })
                                    .reduce(function (r, n) {
                                        return r + n
                                    }),
                                e = String(t).replace(/^-(\s*)+/g, '- $1')
                            return /nan/gi.test(e) ? 'Error' : e
                        })(r)
                    },
                },
            }),
            Nr = Lr.actions,
            _r = Nr.addButtonValueToScreen,
            Ir = Nr.clearAllFromCalcScreen,
            Br = Nr.doEqual,
            Rr = Lr.reducer
        var Fr,
            Ur,
            Hr,
            qr,
            $r = Dr('ADD_TODO'),
            Xr = (function (r) {
                var n,
                    t = Tr(),
                    e = r || {},
                    o = e.reducer,
                    a = void 0 === o ? void 0 : o,
                    i = e.middleware,
                    l = void 0 === i ? t() : i,
                    m = e.devTools,
                    d = void 0 === m || m,
                    c = e.preloadedState,
                    s = void 0 === c ? void 0 : c,
                    p = e.enhancers,
                    f = void 0 === p ? void 0 : p
                if ('function' == typeof a) n = a
                else {
                    if (!Cr(a))
                        throw new Error(
                            '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
                        )
                    n = dr(a)
                }
                var b = br.apply(void 0, 'function' == typeof l ? l(t) : l),
                    g = fr
                d && (g = Er(yr({ trace: !1 }, 'object' == typeof d && d)))
                var u = [b]
                return (
                    Array.isArray(f)
                        ? (u = [b].concat(f))
                        : 'function' == typeof f && (u = f(u)),
                    lr(n, s, g.apply(void 0, u))
                )
            })({
                reducer: dr({
                    modernReducer: Mr(
                        { foo: 'bar', defaultArray: ['abr', 'vlg'] },
                        ((Fr = {}),
                        (Ur = $r.type),
                        (Hr = function (r, n) {
                            ;(r.foo = Math.random()),
                                r.defaultArray.push(n.text)
                        }),
                        Ur in Fr
                            ? Object.defineProperty(Fr, Ur, {
                                  value: Hr,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (Fr[Ur] = Hr),
                        Fr)
                    ),
                    buttonToDisplay: Rr,
                }),
            }),
            Kr = function () {
                return Math.floor(20 * Math.random())
            },
            Wr = {
                iRnd: function () {
                    return alert(Xr.getState().buttonToDisplay.displayData)
                },
                create: e,
                strTest: function () {
                    return e({})
                },
                doRdx: function () {
                    var r =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 123123123
                    Xr.dispatch({
                        type: 'ADD_TODO',
                        text: 'myLib.js - '
                            .concat(r.trim(), ' ~> ')
                            .concat(Kr()),
                    })
                },
                buttonToDisplay: {
                    btnToDspl: function (r) {
                        return Xr.dispatch(_r(r))
                    },
                    clearAll: function () {
                        return Xr.dispatch(Ir())
                    },
                    doEqual: function () {
                        return Xr.dispatch(Br())
                    },
                },
            },
            Yr = ((window.myLib = Wr), ['checked', 'selected', 'value']),
            Vr = {},
            Jr = !1,
            Zr = function (r) {
                return Object.prototype.toString
                    .call(r)
                    .slice(8, -1)
                    .toLowerCase()
            }
        Vr.trueTypeOf = Zr
        var Gr = function (r) {
            if (Jr) throw new Error(r)
        }
        Vr.err = Gr
        var Qr = function (r, n) {
                var t = Zr(r)
                if ('object' === t) {
                    var e = {}
                    for (var o in r) r.hasOwnProperty(o) && (e[o] = Qr(r[o], n))
                    return e
                }
                if ('array' === t)
                    return r.map(function (r) {
                        return Qr(r, n)
                    })
                if ('string' === t && !n) {
                    var a = document.createElement('div')
                    return (a.textContent = r), a.innerHTML
                }
                return r
            },
            rn = function (r) {
                r.debounce && window.cancelAnimationFrame(r.debounce),
                    (r.debounce = window.requestAnimationFrame(function () {
                        r.render()
                    }))
            },
            nn = function (r) {
                return {
                    get: function (n, t) {
                        return ['object', 'array'].indexOf(Zr(n[t])) > -1
                            ? new Proxy(n[t], nn(r))
                            : n[t]
                    },
                    set: function (n, t, e) {
                        return n[t] === e || ((n[t] = e), rn(r)), !0
                    },
                }
            },
            tn = function (r, n) {
                var t = r.filter(n)
                return t.length < 1 ? null : t[0]
            },
            en = function (r, n) {
                if (!(r || (n && n.lagoon)))
                    return Gr(
                        'You did not provide an element to make into a component.'
                    )
                if (!n || (!n.template && !n.lagoon))
                    return Gr(
                        'You did not provide a template for this component.'
                    )
                var t = this,
                    e = (function (r, n) {
                        return r.setters
                            ? r.store
                                ? null
                                : r.data
                            : r.data && !r.store
                            ? new Proxy(r.data, nn(n))
                            : null
                    })(n, t),
                    o = n.store,
                    a = n.router,
                    i = n.setters,
                    l = n.getters
                ;(t.debounce = null),
                    Object.defineProperties(t, {
                        elem: { value: r },
                        template: { value: n.template },
                        allowHTML: { value: n.allowHTML },
                        lagoon: { value: n.lagoon },
                        store: { value: o },
                        attached: { value: [] },
                        router: { value: a },
                    }),
                    Object.defineProperty(t, 'data', {
                        get: function () {
                            return i ? Qr(e, !0) : e
                        },
                        set: function (r) {
                            return (
                                o || i || ((e = new Proxy(r, nn(t))), rn(t)), !0
                            )
                        },
                    }),
                    i &&
                        !o &&
                        Object.defineProperty(t, 'do', {
                            value: function (r) {
                                if (!i[r])
                                    return Gr(
                                        'There is no setter with this name.'
                                    )
                                var n = Array.prototype.slice.call(arguments)
                                ;(n[0] = e), i[r].apply(t, n), rn(t)
                            },
                        }),
                    l &&
                        !o &&
                        Object.defineProperty(t, 'get', {
                            value: function (r) {
                                return l[r]
                                    ? l[r](e)
                                    : Gr('There is no getter with this name.')
                            },
                        }),
                    a && 'addComponent' in a && a.addComponent(t),
                    o && 'attach' in o && o.attach(t),
                    n.attachTo &&
                        ('array' === Zr(n.attachTo)
                            ? n.attachTo
                            : [n.attachTo]
                        ).forEach(function (r) {
                            'attach' in r && r.attach(t)
                        })
            }
        en.Store = function (r) {
            return (r.lagoon = !0), new en(null, r)
        }
        var on = function (r, n) {
                n.forEach(function (n) {
                    r.style[n] = ''
                })
            },
            an = function (r, n) {
                n.forEach(function (n) {
                    if ('class' === n.att) r.className = n.value
                    else if ('style' === n.att)
                        !(function (r, n) {
                            var t = (function (r) {
                                    return r.split(';').reduce(function (r, n) {
                                        var t = n.indexOf(':')
                                        return (
                                            t &&
                                                r.push({
                                                    name: n.slice(0, t).trim(),
                                                    value: n
                                                        .slice(t + 1)
                                                        .trim(),
                                                }),
                                            r
                                        )
                                    }, [])
                                })(n),
                                e = Array.prototype.filter.call(
                                    r.style,
                                    function (n) {
                                        return (
                                            null ===
                                            tn(t, function (t) {
                                                return (
                                                    t.name === n &&
                                                    t.value === r.style[n]
                                                )
                                            })
                                        )
                                    }
                                )
                            on(r, e),
                                (function (r, n) {
                                    n.forEach(function (n) {
                                        r.style[n.name] = n.value
                                    })
                                })(r, t)
                        })(r, n.value)
                    else {
                        if (n.att in r)
                            try {
                                ;(r[n.att] = n.value),
                                    r[n.att] ||
                                        0 === r[n.att] ||
                                        (r[n.att] = !0)
                            } catch (r) {}
                        try {
                            r.setAttribute(n.att, n.value)
                        } catch (r) {}
                    }
                })
            },
            ln = function (r, n) {
                n.forEach(function (n) {
                    if ('class' === n.att) r.className = ''
                    else if ('style' === n.att)
                        on(r, Array.prototype.slice.call(r.style))
                    else {
                        if (n.att in r)
                            try {
                                r[n.att] = ''
                            } catch (r) {}
                        try {
                            r.removeAttribute(n.att)
                        } catch (r) {}
                    }
                })
            },
            mn = function (r, n) {
                return { att: r, value: n }
            },
            dn = function (r, n) {
                if (1 !== r.nodeType) return []
                var t = (function (r, n) {
                    return Array.prototype.reduce.call(
                        r.attributes,
                        function (r, t) {
                            return (
                                !(
                                    Yr.indexOf(t.name) < 0 ||
                                    (n && 'selected' === t.name)
                                ) ||
                                    (t.name.length > 7 &&
                                        'default' === t.name.slice(0, 7)) ||
                                    r.push(mn(t.name, t.value)),
                                r
                            )
                        },
                        []
                    )
                })(r, n)
                return (
                    (function (r, n, t) {
                        Yr.forEach(function (e) {
                            ;(!r[e] && 0 !== r[e]) ||
                                (t &&
                                    'option' === r.tagName.toLowerCase() &&
                                    'selected' === e) ||
                                (t &&
                                    'select' === r.tagName.toLowerCase() &&
                                    'value' === e) ||
                                n.push(mn(e, r[e]))
                        })
                    })(r, t, n),
                    t
                )
            },
            cn = function (r) {
                return 3 === r.nodeType
                    ? 'text'
                    : 8 === r.nodeType
                    ? 'comment'
                    : r.tagName.toLowerCase()
            },
            sn = function (r) {
                return r.childNodes && r.childNodes.length > 0
                    ? null
                    : r.textContent
            },
            pn = function (r) {
                1 === r.nodeType &&
                    (Array.prototype.forEach.call(r.attributes, function (n) {
                        n.name.length < 8 ||
                            'default' !== n.name.slice(0, 7) ||
                            (an(r, [
                                mn(n.name.slice(7).toLowerCase(), n.value),
                            ]),
                            ln(r, [mn(n.name, n.value)]))
                    }),
                    r.childNodes &&
                        Array.prototype.forEach.call(r.childNodes, function (
                            r
                        ) {
                            pn(r)
                        }))
            },
            fn = function (r, n, t) {
                var e = Array.prototype.slice.call(n.childNodes),
                    o = Array.prototype.slice.call(r.childNodes),
                    a = e.length - o.length
                if (a > 0)
                    for (; a > 0; a--)
                        e[e.length - a].parentNode.removeChild(e[e.length - a])
                o.forEach(function (r, o) {
                    if (!e[o]) return pn(r), void n.appendChild(r.cloneNode(!0))
                    if (cn(r) === cn(e[o])) {
                        if (
                            ((function (r, n) {
                                var t = dn(r, !0),
                                    e = dn(n),
                                    o = e.filter(function (r) {
                                        return (
                                            !(Yr.indexOf(r.att) > -1) &&
                                            null ===
                                                tn(t, function (n) {
                                                    return r.att === n.att
                                                })
                                        )
                                    }),
                                    a = t.filter(function (r) {
                                        var n = tn(e, function (n) {
                                            return r.att === n.att
                                        })
                                        return null === n || n.value !== r.value
                                    })
                                an(n, a), ln(n, o)
                            })(r, e[o]),
                            !(
                                t.filter(function (n) {
                                    return (
                                        3 !== r.nodeType &&
                                        (function (r, n) {
                                            return (
                                                (Element.prototype.matches &&
                                                    r.matches(n)) ||
                                                (Element.prototype
                                                    .msMatchesSelector &&
                                                    r.msMatchesSelector(n)) ||
                                                (Element.prototype
                                                    .webkitMatchesSelector &&
                                                    r.webkitMatchesSelector(n))
                                            )
                                        })(r, n)
                                    )
                                }).length > 0
                            ))
                        ) {
                            var a = sn(r)
                            if (
                                (a && a !== sn(e[o]) && (e[o].textContent = a),
                                e[o].childNodes.length > 0 &&
                                    r.childNodes.length < 1)
                            )
                                e[o].innerHTML = ''
                            else {
                                if (
                                    e[o].childNodes.length < 1 &&
                                    r.childNodes.length > 0
                                ) {
                                    var i = document.createDocumentFragment()
                                    return fn(r, i, t), void e[o].appendChild(i)
                                }
                                r.childNodes.length > 0 && fn(r, e[o], t)
                            }
                        }
                    } else e[o].parentNode.replaceChild(r.cloneNode(!0), e[o])
                })
            },
            bn = function (r, n) {
                r &&
                    r.forEach(function (r) {
                        if (r.attached.indexOf(n) > -1)
                            return Gr(
                                n.elem +
                                    ' has attached nodes that it is also attached to, creating an infinite loop.'
                            )
                        'render' in r && r.render()
                    })
            }
        ;(en.emit = function (r, n, t) {
            var e
            if (!r || !n)
                return Gr('You did not provide an element or event name.')
            ;(e = new CustomEvent(n, { bubbles: !0, detail: t })),
                r.dispatchEvent(e)
        }),
            (en.prototype.render = function () {
                if (this.lagoon) bn(this.attached, this)
                else {
                    if (!this.template) return Gr('No template was provided.')
                    var r =
                        'string' === Zr(this.elem)
                            ? document.querySelector(this.elem)
                            : this.elem
                    if (!r)
                        return Gr(
                            'The DOM element to render your template into was not found.'
                        )
                    var n = Qr(
                            (this.store ? this.store.data : this.data) || {},
                            this.allowHTML
                        ),
                        t =
                            'function' === Zr(this.template)
                                ? this.template(
                                      n,
                                      this.router ? this.router.current : null
                                  )
                                : this.template
                    if (!(['string', 'number'].indexOf(Zr(t)) < 0)) {
                        var e = this.attached.map(function (r) {
                            return r.elem
                        })
                        return (
                            fn(
                                (function (r) {
                                    if (qr) {
                                        var n = new DOMParser().parseFromString(
                                            r,
                                            'text/html'
                                        )
                                        return (
                                            'head' in n &&
                                                'childNodes' in n.head &&
                                                n.head.childNodes.length > 0 &&
                                                Array.prototype.slice
                                                    .call(n.head.childNodes)
                                                    .reverse()
                                                    .forEach(function (r) {
                                                        n.body.insertBefore(
                                                            r,
                                                            n.body.firstChild
                                                        )
                                                    }),
                                            n.body
                                        )
                                    }
                                    var t = document.createElement('div')
                                    return (t.innerHTML = r), t
                                })(t),
                                r,
                                e
                            ),
                            en.emit(r, 'render', n),
                            bn(this.attached, this),
                            r
                        )
                    }
                }
            }),
            (en.prototype.attach = function (r) {
                'array' === Zr(r)
                    ? this.attached.concat(r)
                    : this.attached.push(r)
            }),
            (en.prototype.detach = function (r) {
                var n = 'array' === Zr(r) ? r : [r],
                    t = this
                n.forEach(function (r) {
                    var n = t.attached.indexOf(r)
                    n < 0 || t.attached.splice(n, 1)
                })
            }),
            (en.debug = function (r) {
                Jr = !!r
            }),
            (en.clone = Qr),
            (en._ = Vr),
            (qr = (function () {
                if (!window.DOMParser) return !1
                var r = new DOMParser()
                try {
                    r.parseFromString('x', 'text/html')
                } catch (r) {
                    return !1
                }
                return !0
            })())
        var gn = function () {
                return '<div class="clcdspl">\n        CalcDisplay_67808\n\n\n\x3c!--\n    '
                    .concat(
                        Xr.getState()
                            .modernReducer.defaultArray.map(function (r) {
                                return '<li>'.concat(r, '</li>')
                            })
                            .join(''),
                        '\n--\x3e           \n\n\n\x3c!--\n    <u>foo (store\n        .getState()\n        .modernReducer.foo):</u>\n    '
                    )
                    .concat(
                        Xr.getState().modernReducer.foo,
                        '\n--\x3e\n\n<p>calcScreen_74568</p>\n\n    <div\n        class="badge badge-success"\n        role="calcMainScreen"\n        onclick="window.myLib.buttonToDisplay.doEqual()"\n    >\n    \n        <h3>\n        \n            '
                    )
                    .concat(
                        Xr.getState().buttonToDisplay.displayData,
                        '            \n            \n        </h3>\n\n    </div>\n\n    <hr />\n\n    length_arr_nmbr_784562513: \n    '
                    )
                    .concat(
                        Xr.getState().buttonToDisplay.displayData.length,
                        '\n\n    <hr />\n    '
                    )
                    .concat(
                        Xr.getState().buttonToDisplay.displayData,
                        '\n\n</div>'
                    )
            },
            un = function () {
                return '<div class="clcdspl">\n        CalcButtons_78954612\n\n    <hr />\n\n    <button\n        role="calcBtnSeven"\n        class="btn btn-danger"\n        onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n    >\n        7\n    </button>   \n\n     <button\n        role="calcBtnEight"\n        class="btn btn-danger"\n        onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n    >\n        8\n    </button>   \n\n     <button\n        role="calcBtnNine"\n        class="btn btn-danger"\n        onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n    >\n        9\n    </button>  \n\n    <hr />\n\n    <button\n        role="calcBtnFour"\n        class="btn btn-danger"\n        onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n    >\n        4\n    </button> \n\n    <button\n        role="calcBtnFive"\n        class="btn btn-danger"\n        onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n    >\n        5\n    </button> \n\n    <button\n        role="calcBtnSix"\n        class="btn btn-danger"\n        onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n    >\n        6\n    </button> \n\n    <hr />\n    \n\n    <button\n        role="calcBtnOne"\n        class="btn btn-danger"\n        onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n    >\n        1\n    </button> \n\n    <button\n        role="calcBtnTwo"\n        class="btn btn-danger"\n        onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n    >\n        2\n    </button> \n\n    <button\n        role="calcBtnThree"\n        class="btn btn-danger"\n        onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n    >\n        3\n    </button> \n\n    <hr />\n\n    <button \n        role="calcBtnZero"\n        class="btn btn-danger"\n        onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n    >\n        0\n    </button>\n\n    <hr />\n\n    <button \n        role="calcBtnDecimalPoint"\n        class="btn btn-danger"\n        onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n    >\n        .\n    </button>\n\n    <button \n        role="calcBtnPlus"\n        class="btn btn-danger"\n        onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n    >\n        +\n    </button>\n\n    <button \n        role="calcBtnMinus"\n        class="btn btn-danger"\n        onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n    >\n        -\n    </button>\n\n    <button \n        role="calcBtnMultiply"\n        class="btn btn-danger"\n        onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n    >\n        *\n    </button>\n\n    <button \n        role="calcBtnDivision"\n        class="btn btn-danger"\n        onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"\n    >\n        ÷\n    </button>\n\n    <hr />\n\n    <button \n        role="calcBtnEqual"\n        class="btn btn-danger"\n        onclick="window.myLib.buttonToDisplay.doEqual()"\n    >\n        =\n    </button>\n\n    <button \n        role="calcBtnClear"\n        class="btn btn-danger"\n        onclick="window.myLib.buttonToDisplay.clearAll()"     \n    >\n        Clear\n    </button>\n\n\n\n</div>'
            },
            xn = function () {
                return '<div>\n\n    '
                    .concat(gn(), '\n\n    ')
                    .concat(
                        un(),
                        '\n      \n    <p>\n        CalcUi_9832\n    </p>\n        \n    <div class="row">\n    \n        <div class="col">\n        \n        </div>    \n    </div>\n         \n        \n</div>'
                    )
            },
            hn = new en('#root', {
                template: function (r) {
                    return '<div class="container">\n\n\n        '.concat(
                        xn(),
                        '    \n                  \n        <button\n            onClick="window.myLib.strTest()"\n            class="btn btn-primary"\n        >\n            ibtn_hello_0\n        </button>\n\n        <button\n            onClick="myLib.create({tag: \'button\', inner: \'<img src=',
                        'https://avatars1.githubusercontent.com/u/63253189?s=400&u=44cbb26bdf951e137f6e9c7076719d0088d989de&v=4',
                        '><p>any html code</p>\', only: true})"\n            class="btn btn-warning"\n        >\n            ibtn_hello_1_only_true\n        </button>\n        <button\n            onClick="myLib.create({tag: \'button\', inner: \'<img src=',
                        'https://avatars1.githubusercontent.com/u/63253189?s=400&u=44cbb26bdf951e137f6e9c7076719d0088d989de&v=4',
                        '><p>any html code</p>\', only: false})"\n            class="btn btn-success"\n        >\n            ibtn_hello_2_only_false\n        </button>\n        \x3c!-- github-corner svg logo-link --\x3e\n        <a href="https://github.com/zloid/test-repositorius/tree/calc-begin" target="_blank" role="githubCorner" class="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>\n        \n    </div>'
                    )
                },
            })
        t(6), t(8)
        window.myLib.create({ id: 'root', cut: 'all' }),
            hn.render(),
            console.log(
                'store.modernReducer.foo::: ',
                Xr.getState().modernReducer.foo
            ),
            Xr.subscribe(function () {
                hn.render()
            })
    },
])
