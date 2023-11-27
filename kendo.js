/** 
 * Kendo UI v2021.1.204 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/
! function(e, define) {
    define("kendo.core.min", ["jquery"], e)
}(function() {
    return function(e, t, n) {
        function r() {}

        function o(e, t) {
            if (t) return "'" + e.split("'").join("\\'").split('\\"').join('\\\\\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") + "'";
            var n = e.charAt(0),
                r = e.substring(1);
            return "=" === n ? "+(" + r + ")+" : ":" === n ? "+$kendoHtmlEncode(" + r + ")+" : ";" + e + ";$kendoOutput+="
        }

        function i(e, t, n) {
            return e += "", t = t || 2, n = t - e.length, n ? B[t].substring(0, n) + e : e
        }

        function a(e) {
            var t = e.css(Ce.support.transitions.css + "box-shadow") || e.css("box-shadow"),
                n = t ? t.match(je) || [0, 0, 0, 0, 0] : [0, 0, 0, 0, 0],
                r = _e.max(+n[3], +(n[4] || 0));
            return {
                left: -n[1] + r,
                right: +n[1] + r,
                bottom: +n[2] + r
            }
        }

        function s(n, r) {
            var o, i, a, s, l, c, d = Ce._outerWidth,
                f = Ce._outerHeight,
                p = n.parent(),
                m = d(t);
            return p.removeClass("k-animation-container-sm"), p.hasClass("k-animation-container") ? u(n, r) : (i = n[0].style.width, a = n[0].style.height, s = Ne.test(i), l = Ne.test(a), c = n.hasClass("k-tooltip") || n.is(".k-menu-horizontal.k-context-menu"), o = s || l, !s && (!r || r && i || c) && (i = r ? d(n) + 1 : d(n)), (!l && (!r || r && a) || n.is(".k-menu-horizontal.k-context-menu")) && (a = f(n)), n.wrap(e("<div/>").addClass("k-animation-container").css({
                width: i,
                height: a
            })), p = n.parent(), o && n.css({
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            })), m < d(p) && (p.addClass("k-animation-container-sm"), u(n, r)), p
        }

        function u(e, t) {
            var n, r = Ce._outerWidth,
                o = Ce._outerHeight,
                i = e.parent(".k-animation-container"),
                a = i[0].style;
            i.is(":hidden") && i.css({
                display: "",
                position: ""
            }), n = Ne.test(a.width) || Ne.test(a.height), n || i.css({
                width: t ? r(e) + 1 : r(e),
                height: o(e),
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            })
        }

        function l(e) {
            var t = 1,
                n = arguments.length;
            for (t = 1; t < n; t++) c(e, arguments[t]);
            return e
        }

        function c(e, n) {
            var r, o, i, a, s, u = Ce.data.ObservableArray,
                l = Ce.data.LazyObservableArray,
                d = Ce.data.DataSource,
                f = Ce.data.HierarchicalDataSource;
            for (r in n) o = n[r], i = typeof o, a = i === $e && null !== o ? o.constructor : null, !a || a === Array || a === u || a === l || a === d || a === f || a === RegExp || Ce.isFunction(t.ArrayBuffer) && a === ArrayBuffer ? i !== Ye && (e[r] = o) : o instanceof Date ? e[r] = new Date(o.getTime()) : F(o.clone) ? e[r] = o.clone() : (s = e[r], e[r] = typeof s === $e ? s || {} : {}, c(e[r], o));
            return e
        }

        function d(e, t, r) {
            for (var o in t)
                if (t.hasOwnProperty(o) && t[o].test(e)) return o;
            return r !== n ? r : e
        }

        function f(e) {
            return e.replace(/([a-z][A-Z])/g, function(e) {
                return e.charAt(0) + "-" + e.charAt(1).toLowerCase()
            })
        }

        function p(e) {
            return e.replace(/\-(\w)/g, function(e, t) {
                return t.toUpperCase()
            })
        }

        function m(t, n) {
            var r, o = {};
            return document.defaultView && document.defaultView.getComputedStyle ? (r = document.defaultView.getComputedStyle(t, ""), n && e.each(n, function(e, t) {
                o[t] = r.getPropertyValue(t)
            })) : (r = t.currentStyle, n && e.each(n, function(e, t) {
                o[t] = r[p(t)]
            })), Ce.size(o) || (o = r), o
        }

        function h(e) {
            if (e && e.className && "string" == typeof e.className && e.className.indexOf("k-auto-scrollable") > -1) return !0;
            var t = m(e, ["overflow"]).overflow;
            return "auto" == t || "scroll" == t
        }

        function g(t, r) {
            var o, i, a = Fe.browser.webkit,
                s = Fe.browser.mozilla,
                u = Fe.browser.version;
            return t instanceof e && r !== n ? (t.each(function(e, t) {
                g(t, r)
            }), n) : (o = t instanceof e ? t[0] : t) ? (i = Fe.isRtl(t), r === n ? i && a && (u < 85 || Fe.browser.safari) ? o.scrollWidth - o.clientWidth - o.scrollLeft : Math.abs(o.scrollLeft) : (o.scrollLeft = i && a && (u < 85 || Fe.browser.safari) ? o.scrollWidth - o.clientWidth - r : i && (s || a) && r > 0 ? -r : r, n)) : n
        }

        function y(e) {
            var t, n = 0;
            for (t in e) e.hasOwnProperty(t) && "toJSON" != t && n++;
            return n
        }

        function v(e, n, r) {
            var o, i, a;
            return n || (n = "offset"), o = e[n](), i = {
                top: o.top,
                right: o.right,
                bottom: o.bottom,
                left: o.left
            }, Fe.browser.msie && (Fe.pointers || Fe.msPointers) && !r && (a = Fe.isRtl(e) ? 1 : -1, i.top -= t.pageYOffset - document.documentElement.scrollTop, i.left -= t.pageXOffset + a * document.documentElement.scrollLeft), i
        }

        function b(e) {
            var t = {};
            return ze("string" == typeof e ? e.split(" ") : e, function(e) {
                t[e] = this
            }), t
        }

        function w(e) {
            return new Ce.effects.Element(e)
        }

        function M(e, t, n, r) {
            return typeof e === We && (F(t) && (r = t, t = 400, n = !1), F(n) && (r = n, n = !1), typeof t === Be && (n = t, t = 400), e = {
                effects: e,
                duration: t,
                reverse: n,
                complete: r
            }), Oe({
                effects: {},
                duration: 400,
                reverse: !1,
                init: Ee,
                teardown: Ee,
                hide: !1
            }, e, {
                completeCallback: e.complete,
                complete: Ee
            })
        }

        function x(t, n, r, o, i) {
            for (var a, s = 0, u = t.length; s < u; s++) a = e(t[s]), a.queue(function() {
                q.promise(a, M(n, r, o, i))
            });
            return t
        }

        function S(e, t, n, r) {
            return t && (t = t.split(" "), ze(t, function(t, n) {
                e.toggleClass(n, r)
            })), e
        }

        function k(e) {
            return ("" + e).replace(J, "&amp;").replace(V, "&lt;").replace(Q, "&gt;").replace(G, "&quot;").replace(K, "&#39;")
        }

        function T(e) {
            var n;
            try {
                n = t.decodeURIComponent(e)
            } catch (r) {
                n = e.replace(/%u([\dA-F]{4})|%([\dA-F]{2})/gi, function(e, t, n) {
                    return String.fromCharCode(parseInt("0x" + (t || n), 16))
                })
            }
            return n
        }

        function C(e, t) {
            var r;
            return 0 === t.indexOf("data") && (t = t.substring(4), t = t.charAt(0).toLowerCase() + t.substring(1)), t = t.replace(ae, "-$1"), r = e.getAttribute("data-" + Ce.ns + t), null === r ? r = n : "null" === r ? r = null : "true" === r ? r = !0 : "false" === r ? r = !1 : Re.test(r) && "mask" != t ? r = parseFloat(r) : oe.test(r) && !ie.test(r) && (r = Function("return (" + r + ")")()), r
        }

        function O(t, r, o) {
            var i, a, s = {},
                u = t.getAttribute("data-" + Ce.ns + "role");
            for (i in r) a = C(t, i), a !== n && (re.test(i) && "drawer" != u && ("string" == typeof a ? e("#" + a).length ? a = Ce.template(e("#" + a).html()) : o && (a = Ce.template(o[a])) : a = t.getAttribute(i)), s[i] = a);
            return s
        }

        function z(t, n) {
            return e.contains(t, n) ? -1 : 1
        }

        function D() {
            var t = e(this);
            return e.inArray(t.attr("data-" + Ce.ns + "role"), ["slider", "rangeslider", "breadcrumb"]) > -1 || t.is(":visible")
        }

        function A(e, t) {
            var n = e.nodeName.toLowerCase();
            return (/input|select|textarea|button|object/.test(n) ? !e.disabled : "a" === n ? e.href || t : t) && E(e)
        }

        function E(t) {
            return e.expr.pseudos.visible(t) && !e(t).parents().addBack().filter(function() {
                return "hidden" === e.css(this, "visibility")
            }).length
        }

        function _(e, t) {
            return new _.fn.init(e, t)
        }
        var H, F, N, P, j, R, U, W, I, $, L, B, Y, q, J, V, G, K, Q, Z, X, ee, te, ne, re, oe, ie, ae, se, ue, le, ce, de, fe, pe, me, he, ge, ye, ve, be, we, Me, xe, Se, ke, Te, Ce = t.kendo = t.kendo || {
                cultures: {}
            },
            Oe = e.extend,
            ze = e.each,
            De = e.isArray,
            Ae = e.proxy,
            Ee = e.noop,
            _e = Math,
            He = t.JSON || {},
            Fe = {},
            Ne = /%/,
            Pe = /\{(\d+)(:[^\}]+)?\}/g,
            je = /(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+)?/i,
            Re = /^(\+|-?)\d+(\.?)\d*$/,
            Ue = "function",
            We = "string",
            Ie = "number",
            $e = "object",
            Le = "null",
            Be = "boolean",
            Ye = "undefined",
            qe = {},
            Je = {},
            Ve = [].slice,
            Ge = function() {
                var e, t, r, o, i, a, s = arguments[0] || {},
                    u = 1,
                    l = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[u] || {}, u++), "object" == typeof s || jQuery.isFunction(s) || (s = {}), u === l && (s = this, u--); u < l; u++)
                    if (null != (i = arguments[u]))
                        for (o in i) "filters" != o && "concat" != o && ":" != o && (e = s[o], r = i[o], s !== r && (c && r && (jQuery.isPlainObject(r) || (t = jQuery.isArray(r))) ? (t ? (t = !1, a = e && jQuery.isArray(e) ? e : []) : a = e && jQuery.isPlainObject(e) ? e : {}, s[o] = Ge(c, a, r)) : r !== n && (s[o] = r)));
                return s
            };
        Ce.version = "2021.1.204".replace(/^\s+|\s+$/g, ""), r.extend = function(e) {
                var t, n, r = function() {},
                    o = this,
                    i = e && e.init ? e.init : function() {
                        o.apply(this, arguments)
                    };
                r.prototype = o.prototype, n = i.fn = i.prototype = new r;
                for (t in e) n[t] = null != e[t] && e[t].constructor === Object ? Oe(!0, {}, r.prototype[t], e[t]) : e[t];
                return n.constructor = i, i.extend = o.extend, i
            }, r.prototype._initOptions = function(e) {
                this.options = l({}, this.options, e)
            }, F = Ce.isFunction = function(e) {
                return "function" == typeof e
            }, N = function() {
                this._defaultPrevented = !0
            }, P = function() {
                return this._defaultPrevented === !0
            }, j = r.extend({
                init: function() {
                    this._events = {}
                },
                bind: function(e, t, r) {
                    var o, i, a, s, u, l = this,
                        c = typeof e === We ? [e] : e,
                        d = typeof t === Ue;
                    if (t === n) {
                        for (o in e) l.bind(o, e[o]);
                        return l
                    }
                    for (o = 0, i = c.length; o < i; o++) e = c[o], s = d ? t : t[e], s && (r && (a = s, s = function() {
                        l.unbind(e, s), a.apply(l, arguments)
                    }, s.original = a), u = l._events[e] = l._events[e] || [], u.push(s));
                    return l
                },
                one: function(e, t) {
                    return this.bind(e, t, !0)
                },
                first: function(e, t) {
                    var n, r, o, i, a = this,
                        s = typeof e === We ? [e] : e,
                        u = typeof t === Ue;
                    for (n = 0, r = s.length; n < r; n++) e = s[n], o = u ? t : t[e], o && (i = a._events[e] = a._events[e] || [], i.unshift(o));
                    return a
                },
                trigger: function(e, t) {
                    var n, r, o = this,
                        i = o._events[e];
                    if (i) {
                        for (t = t || {}, t.sender = o, t._defaultPrevented = !1, t.preventDefault = N, t.isDefaultPrevented = P, i = i.slice(), n = 0, r = i.length; n < r; n++) i[n].call(o, t);
                        return t._defaultPrevented === !0
                    }
                    return !1
                },
                unbind: function(e, t) {
                    var r, o = this,
                        i = o._events[e];
                    if (e === n) o._events = {};
                    else if (i)
                        if (t)
                            for (r = i.length - 1; r >= 0; r--) i[r] !== t && i[r].original !== t || i.splice(r, 1);
                        else o._events[e] = [];
                    return o
                }
            }), R = /^\w+/, U = /\$\{([^}]*)\}/g, W = /\\\}/g, I = /__CURLY__/g, $ = /\\#/g, L = /__SHARP__/g, B = ["", "0", "00", "000", "0000"], H = {
                paramName: "data",
                useWithBlock: !0,
                render: function(e, t) {
                    var n, r, o = "";
                    for (n = 0, r = t.length; n < r; n++) o += e(t[n]);
                    return o
                },
                compile: function(e, t) {
                    var n, r, i, a = Oe({}, this, t),
                        s = a.paramName,
                        u = s.match(R)[0],
                        l = a.useWithBlock,
                        c = "var $kendoOutput, $kendoHtmlEncode = kendo.htmlEncode;";
                    if (F(e)) return e;
                    for (c += l ? "with(" + s + "){" : "", c += "$kendoOutput=", r = e.replace(W, "__CURLY__").replace(U, "#=$kendoHtmlEncode($1)#").replace(I, "}").replace($, "__SHARP__").split("#"), i = 0; i < r.length; i++) c += o(r[i], i % 2 === 0);
                    c += l ? ";}" : ";", c += "return $kendoOutput;", c = c.replace(L, "#");
                    try {
                        return n = Function(u, c), n._slotCount = Math.floor(r.length / 2), n
                    } catch (d) {
                        throw Error(Ce.format("Invalid template:'{0}' Generated code:'{1}'", e, c))
                    }
                }
            },
            function() {
                function e(e) {
                    return a.lastIndex = 0, a.test(e) ? '"' + e.replace(a, function(e) {
                        var t = s[e];
                        return typeof t === We ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    }) + '"' : '"' + e + '"'
                }

                function t(i, a) {
                    var s, l, c, d, f, p, m = n,
                        h = a[i];
                    if (h && typeof h === $e && typeof h.toJSON === Ue && (h = h.toJSON(i)), typeof o === Ue && (h = o.call(a, i, h)), p = typeof h, p === We) return e(h);
                    if (p === Ie) return isFinite(h) ? h + "" : Le;
                    if (p === Be || p === Le) return h + "";
                    if (p === $e) {
                        if (!h) return Le;
                        if (n += r, f = [], "[object Array]" === u.apply(h)) {
                            for (d = h.length, s = 0; s < d; s++) f[s] = t(s, h) || Le;
                            return c = 0 === f.length ? "[]" : n ? "[\n" + n + f.join(",\n" + n) + "\n" + m + "]" : "[" + f.join(",") + "]", n = m, c
                        }
                        if (o && typeof o === $e)
                            for (d = o.length, s = 0; s < d; s++) typeof o[s] === We && (l = o[s], c = t(l, h), c && f.push(e(l) + (n ? ": " : ":") + c));
                        else
                            for (l in h) Object.hasOwnProperty.call(h, l) && (c = t(l, h), c && f.push(e(l) + (n ? ": " : ":") + c));
                        return c = 0 === f.length ? "{}" : n ? "{\n" + n + f.join(",\n" + n) + "\n" + m + "}" : "{" + f.join(",") + "}", n = m, c
                    }
                }
                var n, r, o, a = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    s = {
                        "\b": "\\b",
                        "\t": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    },
                    u = {}.toString;
                typeof Date.prototype.toJSON !== Ue && (Date.prototype.toJSON = function() {
                    var e = this;
                    return isFinite(e.valueOf()) ? i(e.getUTCFullYear(), 4) + "-" + i(e.getUTCMonth() + 1) + "-" + i(e.getUTCDate()) + "T" + i(e.getUTCHours()) + ":" + i(e.getUTCMinutes()) + ":" + i(e.getUTCSeconds()) + "Z" : null
                }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                    return this.valueOf()
                }), typeof He.stringify !== Ue && (He.stringify = function(e, i, a) {
                    var s;
                    if (n = "", r = "", typeof a === Ie)
                        for (s = 0; s < a; s += 1) r += " ";
                    else typeof a === We && (r = a);
                    if (o = i, i && typeof i !== Ue && (typeof i !== $e || typeof i.length !== Ie)) throw Error("JSON.stringify");
                    return t("", {
                        "": e
                    })
                })
            }(),
            function() {
                function t(e) {
                    if (e) {
                        if (e.numberFormat) return e;
                        if (typeof e === We) {
                            var t = Ce.cultures;
                            return t[e] || t[e.split("-")[0]] || null
                        }
                        return null
                    }
                    return null
                }

                function r(e) {
                    return e && (e = t(e)), e || Ce.cultures.current
                }

                function o(e, t, o) {
                    o = r(o);
                    var a = o.calendars.standard,
                        s = a.days,
                        u = a.months;
                    return t = a.patterns[t] || t, t.replace(c, function(t) {
                        var r, o, l;
                        return "d" === t ? o = e.getDate() : "dd" === t ? o = i(e.getDate()) : "ddd" === t ? o = s.namesAbbr[e.getDay()] : "dddd" === t ? o = s.names[e.getDay()] : "M" === t ? o = e.getMonth() + 1 : "MM" === t ? o = i(e.getMonth() + 1) : "MMM" === t ? o = u.namesAbbr[e.getMonth()] : "MMMM" === t ? o = u.names[e.getMonth()] : "yy" === t ? o = i(e.getFullYear() % 100) : "yyyy" === t ? o = i(e.getFullYear(), 4) : "h" === t ? o = e.getHours() % 12 || 12 : "hh" === t ? o = i(e.getHours() % 12 || 12) : "H" === t ? o = e.getHours() : "HH" === t ? o = i(e.getHours()) : "m" === t ? o = e.getMinutes() : "mm" === t ? o = i(e.getMinutes()) : "s" === t ? o = e.getSeconds() : "ss" === t ? o = i(e.getSeconds()) : "f" === t ? o = _e.floor(e.getMilliseconds() / 100) : "ff" === t ? (o = e.getMilliseconds(), o > 99 && (o = _e.floor(o / 10)), o = i(o)) : "fff" === t ? o = i(e.getMilliseconds(), 3) : "tt" === t ? o = e.getHours() < 12 ? a.AM[0] : a.PM[0] : "zzz" === t ? (r = e.getTimezoneOffset(), l = r < 0, o = ("" + _e.abs(r / 60)).split(".")[0], r = _e.abs(r) - 60 * o, o = (l ? "+" : "-") + i(o), o += ":" + i(r)) : "zz" !== t && "z" !== t || (o = e.getTimezoneOffset() / 60, l = o < 0, o = ("" + _e.abs(o)).split(".")[0], o = (l ? "+" : "-") + ("zz" === t ? i(o) : o)), o !== n ? o : t.slice(1, t.length - 1)
                    })
                }

                function a(e, t, o) {
                    var i, a, l, c, w, M, x, S, k, T, C, O, z, D, A, E, _, H, F, N, P, j, R, U, W, I, $, L, B, Y, q, J, V, G;
                    if (o = r(o), i = o.numberFormat, a = i[h], l = i.decimals, c = i.pattern[0], w = [], C = e < 0, E = m, _ = m, q = -1, e === n) return m;
                    if (!isFinite(e)) return e;
                    if (!t) return o.name.length ? e.toLocaleString() : "" + e;
                    if (T = d.exec(t)) {
                        if (t = T[1].toLowerCase(), x = "c" === t, S = "p" === t, (x || S) && (i = x ? i.currency : i.percent, a = i[h], l = i.decimals, M = i.symbol, c = i.pattern[C ? 0 : 1]), k = T[2], k && (l = +k), "e" === t) return V = k ? e.toExponential(l) : e.toExponential(), V.replace(h, i[h]);
                        if (S && (e *= 100), e = u(e, l), C = e < 0, e = e.split(h), O = e[0], z = e[1], C && (O = O.substring(1)), _ = s(O, 0, O.length, i), z && (_ += a + z), "n" === t && !C) return _;
                        for (e = m, H = 0, F = c.length; H < F; H++) N = c.charAt(H), e += "n" === N ? _ : "$" === N || "%" === N ? M : N;
                        return e
                    }
                    if ((t.indexOf("'") > -1 || t.indexOf('"') > -1 || t.indexOf("\\") > -1) && (t = t.replace(f, function(e) {
                            var t = e.charAt(0).replace("\\", ""),
                                n = e.slice(1).replace(t, "");
                            return w.push(n), b
                        })), t = t.split(";"), C && t[1]) t = t[1], j = !0;
                    else if (0 === e && t[2]) {
                        if (t = t[2], t.indexOf(y) == -1 && t.indexOf(v) == -1) return t
                    } else t = t[0];
                    if (L = t.indexOf("%"), B = t.indexOf("$"), S = L != -1, x = B != -1, S && (e *= 100), x && "\\" === t[B - 1] && (t = t.split("\\").join(""), x = !1), (x || S) && (i = x ? i.currency : i.percent, a = i[h], l = i.decimals, M = i.symbol), P = t.indexOf(g) > -1, P && (t = t.replace(p, m)), R = t.indexOf(h), F = t.length, R != -1)
                        if (z = ("" + e).split("e"), z = z[1] ? u(e, Math.abs(z[1])) : z[0], z = z.split(h)[1] || m, W = t.lastIndexOf(v) - R, U = t.lastIndexOf(y) - R, I = W > -1, $ = U > -1, H = z.length, I || $ || (t = t.substring(0, R) + t.substring(R + 1), F = t.length, R = -1, H = 0), I && W > U) H = W;
                        else if (U > W)
                        if ($ && H > U) {
                            for (G = u(e, U, C); G.charAt(G.length - 1) === v && U > 0 && U > W;) U--, G = u(e, U, C);
                            H = U
                        } else I && H < W && (H = W);
                    if (e = u(e, H, C), U = t.indexOf(y), Y = W = t.indexOf(v), q = U == -1 && W != -1 ? W : U != -1 && W == -1 ? U : U > W ? W : U, U = t.lastIndexOf(y), W = t.lastIndexOf(v), J = U == -1 && W != -1 ? W : U != -1 && W == -1 ? U : U > W ? U : W, q == F && (J = q), q != -1) {
                        for (_ = ("" + e).split(h), O = _[0], z = _[1] || m, D = O.length, A = z.length, C && e * -1 >= 0 && (C = !1), e = t.substring(0, q), C && !j && (e += "-"), H = q; H < F; H++) {
                            if (N = t.charAt(H), R == -1) {
                                if (J - H < D) {
                                    e += O;
                                    break
                                }
                            } else if (W != -1 && W < H && (E = m), R - H <= D && R - H > -1 && (e += O, H = R), R === H) {
                                e += (z ? a : m) + z, H += J - R + 1;
                                continue
                            }
                            N === v ? (e += N, E = N) : N === y && (e += E)
                        }
                        if (P && (e = s(e, q + (C && !j ? 1 : 0), Math.max(J, D + q), i)), J >= q && (e += t.substring(J + 1)), x || S) {
                            for (_ = m, H = 0, F = e.length; H < F; H++) N = e.charAt(H), _ += "$" === N || "%" === N ? M : N;
                            e = _
                        }
                        if (F = w.length)
                            for (H = 0; H < F; H++) e = e.replace(b, w[H])
                    }
                    return e
                }
                var s, u, l, c = /dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|HH|H|hh|h|mm|m|fff|ff|f|tt|ss|s|zzz|zz|z|"[^"]*"|'[^']*'/g,
                    d = /^(n|c|p|e)(\d*)$/i,
                    f = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g,
                    p = /\,/g,
                    m = "",
                    h = ".",
                    g = ",",
                    y = "#",
                    v = "0",
                    b = "??",
                    w = "en-US",
                    M = {}.toString;
                Ce.cultures["en-US"] = {
                    name: w,
                    numberFormat: {
                        pattern: ["-n"],
                        decimals: 2,
                        ",": ",",
                        ".": ".",
                        groupSize: [3],
                        percent: {
                            pattern: ["-n %", "n %"],
                            decimals: 2,
                            ",": ",",
                            ".": ".",
                            groupSize: [3],
                            symbol: "%"
                        },
                        currency: {
                            name: "US Dollar",
                            abbr: "USD",
                            pattern: ["($n)", "$n"],
                            decimals: 2,
                            ",": ",",
                            ".": ".",
                            groupSize: [3],
                            symbol: "$"
                        }
                    },
                    calendars: {
                        standard: {
                            days: {
                                names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                                namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                            },
                            months: {
                                names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                                namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                            },
                            AM: ["AM", "am", "AM"],
                            PM: ["PM", "pm", "PM"],
                            patterns: {
                                d: "M/d/yyyy",
                                D: "dddd, MMMM dd, yyyy",
                                F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                                g: "M/d/yyyy h:mm tt",
                                G: "M/d/yyyy h:mm:ss tt",
                                m: "MMMM dd",
                                M: "MMMM dd",
                                s: "yyyy'-'MM'-'ddTHH':'mm':'ss",
                                t: "h:mm tt",
                                T: "h:mm:ss tt",
                                u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                                y: "MMMM, yyyy",
                                Y: "MMMM, yyyy"
                            },
                            "/": "/",
                            ":": ":",
                            firstDay: 0,
                            twoDigitYearMax: 2029
                        }
                    }
                }, Ce.culture = function(e) {
                    var r, o = Ce.cultures;
                    return e === n ? o.current : (r = t(e) || o[w], r.calendar = r.calendars.standard, o.current = r, n)
                }, Ce.findCulture = t, Ce.getCulture = r, Ce.culture(w), s = function(e, t, r, o) {
                    var i, a, s, u, l, c, d = e.indexOf(o[h]),
                        f = o.groupSize.slice(),
                        p = f.shift();
                    if (r = d !== -1 ? d : r + 1, i = e.substring(t, r), a = i.length, a >= p) {
                        for (s = a, u = []; s > -1;)
                            if (l = i.substring(s - p, s), l && u.push(l), s -= p, c = f.shift(), p = c !== n ? c : p, 0 === p) {
                                s > 0 && u.push(i.substring(0, s));
                                break
                            }
                        i = u.reverse().join(o[g]), e = e.substring(0, t) + i + e.substring(r)
                    }
                    return e
                }, u = function(e, t, n) {
                    return t = t || 0, e = ("" + e).split("e"), e = Math.round(+(e[0] + "e" + (e[1] ? +e[1] + t : t))), n && (e = -e), e = ("" + e).split("e"), e = +(e[0] + "e" + (e[1] ? +e[1] - t : -t)), e.toFixed(Math.min(t, 20))
                }, l = function(e, t, r) {
                    if (t) {
                        if ("[object Date]" === M.call(e)) return o(e, t, r);
                        if (typeof e === Ie) return a(e, t, r)
                    }
                    return e !== n ? e : ""
                }, Ce.format = function(e) {
                    var t = arguments;
                    return e.replace(Pe, function(e, n, r) {
                        var o = t[parseInt(n, 10) + 1];
                        return l(o, r ? r.substring(1) : "")
                    })
                }, Ce._extractFormat = function(e) {
                    return "{0:" === e.slice(0, 3) && (e = e.slice(3, e.length - 1)), e
                }, Ce._activeElement = function() {
                    try {
                        return document.activeElement
                    } catch (e) {
                        return document.documentElement.activeElement
                    }
                }, Ce._round = u, Ce._outerWidth = function(t, n) {
                    return e(t).outerWidth(n || !1) || 0
                }, Ce._outerHeight = function(t, n) {
                    return e(t).outerHeight(n || !1) || 0
                }, Ce.toString = l
            }(),
            function() {
                function t(e, t, n) {
                    return !(e >= t && e <= n)
                }

                function r(e) {
                    return e.charAt(0)
                }

                function o(t) {
                    return e.map(t, r)
                }

                function i(e, t) {
                    t || 23 !== e.getHours() || e.setHours(e.getHours() + 2)
                }

                function a(e) {
                    for (var t = 0, n = e.length, r = []; t < n; t++) r[t] = (e[t] + "").toLowerCase();
                    return r
                }

                function s(e) {
                    var t, n = {};
                    for (t in e) n[t] = a(e[t]);
                    return n
                }

                function u(e, r, a, u) {
                    if (!e) return null;
                    var l, c, d, f, p, g, y, v, b, M, x, S, k, T = function(e) {
                            for (var t = 0; r[j] === e;) t++, j++;
                            return t > 0 && (j -= 1), t
                        },
                        C = function(t) {
                            var n = w[t] || RegExp("^\\d{1," + t + "}"),
                                r = e.substr(R, t).match(n);
                            return r ? (r = r[0], R += r.length, parseInt(r, 10)) : null
                        },
                        O = function(t, n) {
                            for (var r, o, i, a = 0, s = t.length, u = 0, l = 0; a < s; a++) r = t[a], o = r.length, i = e.substr(R, o), n && (i = i.toLowerCase()), i == r && o > u && (u = o, l = a);
                            return u ? (R += u, l + 1) : null
                        },
                        z = function() {
                            var t = !1;
                            return e.charAt(R) === r[j] && (R++, t = !0), t
                        },
                        D = a.calendars.standard,
                        A = null,
                        E = null,
                        _ = null,
                        H = null,
                        F = null,
                        N = null,
                        P = null,
                        j = 0,
                        R = 0,
                        U = !1,
                        W = new Date,
                        I = D.twoDigitYearMax || 2029,
                        $ = W.getFullYear();
                    for (r || (r = "d"), f = D.patterns[r], f && (r = f), r = r.split(""), d = r.length; j < d; j++)
                        if (l = r[j], U) "'" === l ? U = !1 : z();
                        else if ("d" === l) {
                        if (c = T("d"), D._lowerDays || (D._lowerDays = s(D.days)), null !== _ && c > 2) continue;
                        if (_ = c < 3 ? C(2) : O(D._lowerDays[3 == c ? "namesAbbr" : "names"], !0), null === _ || t(_, 1, 31)) return null
                    } else if ("M" === l) {
                        if (c = T("M"), D._lowerMonths || (D._lowerMonths = s(D.months)), E = c < 3 ? C(2) : O(D._lowerMonths[3 == c ? "namesAbbr" : "names"], !0), null === E || t(E, 1, 12)) return null;
                        E -= 1
                    } else if ("y" === l) {
                        if (c = T("y"), A = C(c), null === A) return null;
                        2 == c && ("string" == typeof I && (I = $ + parseInt(I, 10)), A = $ - $ % 100 + A, A > I && (A -= 100))
                    } else if ("h" === l) {
                        if (T("h"), H = C(2), 12 == H && (H = 0), null === H || t(H, 0, 11)) return null
                    } else if ("H" === l) {
                        if (T("H"), H = C(2), null === H || t(H, 0, 23)) return null
                    } else if ("m" === l) {
                        if (T("m"), F = C(2), null === F || t(F, 0, 59)) return null
                    } else if ("s" === l) {
                        if (T("s"), N = C(2), null === N || t(N, 0, 59)) return null
                    } else if ("f" === l) {
                        if (c = T("f"), k = e.substr(R, c).match(w[3]), P = C(c), null !== P && (P = parseFloat("0." + k[0], 10), P = Ce._round(P, 3), P *= 1e3), null === P || t(P, 0, 999)) return null
                    } else if ("t" === l) {
                        if (c = T("t"), v = D.AM, b = D.PM, 1 === c && (v = o(v), b = o(b)), p = O(b), !p && !O(v)) return null
                    } else if ("z" === l) {
                        if (g = !0, c = T("z"), "Z" === e.substr(R, 1)) {
                            z();
                            continue
                        }
                        if (y = e.substr(R, 6).match(c > 2 ? h : m), !y) return null;
                        if (y = y[0].split(":"), M = y[0], x = y[1], !x && M.length > 3 && (R = M.length - 2, x = M.substring(R), M = M.substring(0, R)), M = parseInt(M, 10), t(M, -12, 13)) return null;
                        if (c > 2 && (x = y[0][0] + x, x = parseInt(x, 10), isNaN(x) || t(x, -59, 59))) return null
                    } else if ("'" === l) U = !0, z();
                    else if (!z()) return null;
                    return u && !/^\s*$/.test(e.substr(R)) ? null : (S = null !== H || null !== F || N || null, null === A && null === E && null === _ && S ? (A = $, E = W.getMonth(), _ = W.getDate()) : (null === A && (A = $), null === _ && (_ = 1)), p && H < 12 && (H += 12), g ? (M && (H += -M), x && (F += -x), e = new Date(Date.UTC(A, E, _, H, F, N, P))) : (e = new Date(A, E, _, H, F, N, P), i(e, H)), A < 100 && e.setFullYear(A), e.getDate() !== _ && g === n ? null : e)
                }

                function l(e) {
                    var t = "-" === e.substr(0, 1) ? -1 : 1;
                    return e = e.substring(1), e = 60 * parseInt(e.substr(0, 2), 10) + parseInt(e.substring(2), 10), t * e
                }

                function c(e) {
                    var t, n, r, o = _e.max(v.length, b.length),
                        i = e.calendar || e.calendars.standard,
                        a = i.patterns,
                        s = [];
                    for (r = 0; r < o; r++) {
                        for (t = v[r], n = 0; n < t.length; n++) s.push(a[t[n]]);
                        s = s.concat(b[r])
                    }
                    return s
                }

                function d(e, t, n, r) {
                    var o, i, a, s;
                    if ("[object Date]" === M.call(e)) return e;
                    if (o = 0, i = null, e && 0 === e.indexOf("/D") && (i = g.exec(e))) return i = i[1], s = y.exec(i.substring(1)), i = new Date(parseInt(i, 10)), s && (s = l(s[0]), i = Ce.timezone.apply(i, 0), i = Ce.timezone.convert(i, 0, -1 * s)), i;
                    for (n = Ce.getCulture(n), t || (t = c(n)), t = De(t) ? t : [t], a = t.length; o < a; o++)
                        if (i = u(e, t[o], n, r)) return i;
                    return i
                }
                var f = /\u00A0/g,
                    p = /[eE][\-+]?[0-9]+/,
                    m = /[+|\-]\d{1,2}/,
                    h = /[+|\-]\d{1,2}:?\d{2}/,
                    g = /^\/Date\((.*?)\)\/$/,
                    y = /[+-]\d*/,
                    v = [
                        [],
                        ["G", "g", "F"],
                        ["D", "d", "y", "m", "T", "t"]
                    ],
                    b = [
                        ["yyyy-MM-ddTHH:mm:ss.fffffffzzz", "yyyy-MM-ddTHH:mm:ss.fffffff", "yyyy-MM-ddTHH:mm:ss.fffzzz", "yyyy-MM-ddTHH:mm:ss.fff", "ddd MMM dd yyyy HH:mm:ss", "yyyy-MM-ddTHH:mm:sszzz", "yyyy-MM-ddTHH:mmzzz", "yyyy-MM-ddTHH:mmzz", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-dd HH:mm:ss", "yyyy/MM/dd HH:mm:ss"],
                        ["yyyy-MM-ddTHH:mm", "yyyy-MM-dd HH:mm", "yyyy/MM/dd HH:mm"],
                        ["yyyy/MM/dd", "yyyy-MM-dd", "HH:mm:ss", "HH:mm"]
                    ],
                    w = {
                        2: /^\d{1,2}/,
                        3: /^\d{1,3}/,
                        4: /^\d{4}/
                    },
                    M = {}.toString;
                Ce.parseDate = function(e, t, n) {
                    return d(e, t, n, !1)
                }, Ce.parseExactDate = function(e, t, n) {
                    return d(e, t, n, !0)
                }, Ce.parseInt = function(e, t) {
                    var n = Ce.parseFloat(e, t);
                    return n && (n = 0 | n), n
                }, Ce.parseFloat = function(e, t, n) {
                    if (!e && 0 !== e) return null;
                    if (typeof e === Ie) return e;
                    e = "" + e, t = Ce.getCulture(t);
                    var r, o, i = t.numberFormat,
                        a = i.percent,
                        s = i.currency,
                        u = s.symbol,
                        l = a.symbol,
                        c = e.indexOf("-");
                    return p.test(e) ? (e = parseFloat(e.replace(i["."], ".")), isNaN(e) && (e = null), e) : c > 0 ? null : (c = c > -1, e.indexOf(u) > -1 || n && n.toLowerCase().indexOf("c") > -1 ? (i = s, r = i.pattern[0].replace("$", u).split("n"), e.indexOf(r[0]) > -1 && e.indexOf(r[1]) > -1 && (e = e.replace(r[0], "").replace(r[1], ""), c = !0)) : e.indexOf(l) > -1 && (o = !0, i = a, u = l), e = e.replace("-", "").replace(u, "").replace(f, " ").split(i[","].replace(f, " ")).join("").replace(i["."], "."), e = parseFloat(e), isNaN(e) ? e = null : c && (e *= -1), e && o && (e /= 100), e)
                }
            }(),
            function() {
                var r, o, i, a, s, u, l, c, f, p, m;
                Fe._scrollbar = n, Fe.scrollbar = function(e) {
                    if (isNaN(Fe._scrollbar) || e) {
                        var t, n = document.createElement("div");
                        return n.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block", n.innerHTML = "&nbsp;", document.body.appendChild(n), Fe._scrollbar = t = n.offsetWidth - n.scrollWidth, document.body.removeChild(n), t
                    }
                    return Fe._scrollbar
                }, Fe.isRtl = function(t) {
                    return e(t).closest(".k-rtl").length > 0
                }, r = document.createElement("table");
                try {
                    r.innerHTML = "<tr><td></td></tr>", Fe.tbodyInnerHtml = !0
                } catch (h) {
                    Fe.tbodyInnerHtml = !1
                }
                Fe.touch = "ontouchstart" in t, o = document.documentElement.style, i = Fe.transitions = !1, a = Fe.transforms = !1, s = "HTMLElement" in t ? HTMLElement.prototype : [], Fe.hasHW3D = "WebKitCSSMatrix" in t && "m11" in new t.WebKitCSSMatrix || "MozPerspective" in o || "msPerspective" in o, Fe.cssFlexbox = "flexWrap" in o || "WebkitFlexWrap" in o || "msFlexWrap" in o, ze(["Moz", "webkit", "O", "ms"], function() {
                    var e, t = "" + this,
                        n = typeof r.style[t + "Transition"] === We;
                    if (n || typeof r.style[t + "Transform"] === We) return e = t.toLowerCase(), a = {
                        css: "ms" != e ? "-" + e + "-" : "",
                        prefix: t,
                        event: "o" === e || "webkit" === e ? e : ""
                    }, n && (i = a, i.event = i.event ? i.event + "TransitionEnd" : "transitionend"), !1
                }), r = null, Fe.transforms = a, Fe.transitions = i, Fe.devicePixelRatio = t.devicePixelRatio === n ? 1 : t.devicePixelRatio;
                try {
                    Fe.screenWidth = t.outerWidth || t.screen ? t.screen.availWidth : t.innerWidth, Fe.screenHeight = t.outerHeight || t.screen ? t.screen.availHeight : t.innerHeight
                } catch (h) {
                    Fe.screenWidth = t.screen.availWidth, Fe.screenHeight = t.screen.availHeight
                }
                Fe.detectOS = function(e) {
                        var n, r, o = !1,
                            i = [],
                            a = !/mobile safari/i.test(e),
                            s = {
                                wp: /(Windows Phone(?: OS)?)\s(\d+)\.(\d+(\.\d+)?)/,
                                fire: /(Silk)\/(\d+)\.(\d+(\.\d+)?)/,
                                android: /(Android|Android.*(?:Opera|Firefox).*?\/)\s*(\d+)\.?(\d+(\.\d+)?)?/,
                                iphone: /(iPhone|iPod).*OS\s+(\d+)[\._]([\d\._]+)/,
                                ipad: /(iPad).*OS\s+(\d+)[\._]([\d_]+)/,
                                meego: /(MeeGo).+NokiaBrowser\/(\d+)\.([\d\._]+)/,
                                webos: /(webOS)\/(\d+)\.(\d+(\.\d+)?)/,
                                blackberry: /(BlackBerry|BB10).*?Version\/(\d+)\.(\d+(\.\d+)?)/,
                                playbook: /(PlayBook).*?Tablet\s*OS\s*(\d+)\.(\d+(\.\d+)?)/,
                                windows: /(MSIE)\s+(\d+)\.(\d+(\.\d+)?)/,
                                tizen: /(tizen).*?Version\/(\d+)\.(\d+(\.\d+)?)/i,
                                sailfish: /(sailfish).*rv:(\d+)\.(\d+(\.\d+)?).*firefox/i,
                                ffos: /(Mobile).*rv:(\d+)\.(\d+(\.\d+)?).*Firefox/
                            },
                            u = {
                                ios: /^i(phone|pad|pod)$/i,
                                android: /^android|fire$/i,
                                blackberry: /^blackberry|playbook/i,
                                windows: /windows/,
                                wp: /wp/,
                                flat: /sailfish|ffos|tizen/i,
                                meego: /meego/
                            },
                            l = {
                                tablet: /playbook|ipad|fire/i
                            },
                            c = {
                                omini: /Opera\sMini/i,
                                omobile: /Opera\sMobi/i,
                                firefox: /Firefox|Fennec/i,
                                mobilesafari: /version\/.*safari/i,
                                ie: /MSIE|Windows\sPhone/i,
                                chrome: /chrome|crios/i,
                                webkit: /webkit/i
                            };
                        for (r in s)
                            if (s.hasOwnProperty(r) && (i = e.match(s[r]))) {
                                if ("windows" == r && "plugins" in navigator) return !1;
                                o = {}, o.device = r, o.tablet = d(r, l, !1), o.browser = d(e, c, "default"), o.name = d(r, u), o[o.name] = !0, o.majorVersion = i[2], o.minorVersion = (i[3] || "0").replace("_", "."), n = o.minorVersion.replace(".", "").substr(0, 2), o.flatVersion = o.majorVersion + n + Array(3 - (n.length < 3 ? n.length : 2)).join("0"), o.cordova = typeof t.PhoneGap !== Ye || typeof t.cordova !== Ye, o.appMode = t.navigator.standalone || /file|local|wmapp/.test(t.location.protocol) || o.cordova, o.android && (Fe.devicePixelRatio < 1.5 && o.flatVersion < 400 || a) && (Fe.screenWidth > 800 || Fe.screenHeight > 800) && (o.tablet = r);
                                break
                            }
                        return o
                    }, u = Fe.mobileOS = Fe.detectOS(navigator.userAgent), Fe.wpDevicePixelRatio = u.wp ? screen.width / 320 : 0, Fe.hasNativeScrolling = !1, (u.ios || u.android && u.majorVersion > 2 || u.wp) && (Fe.hasNativeScrolling = u), Fe.delayedClick = function() {
                        if (Fe.touch) {
                            if (u.ios) return !0;
                            if (u.android) return !Fe.browser.chrome || !(Fe.browser.version < 32) && !(e("meta[name=viewport]").attr("content") || "").match(/user-scalable=no/i)
                        }
                        return !1
                    }, Fe.mouseAndTouchPresent = Fe.touch && !(Fe.mobileOS.ios || Fe.mobileOS.android), Fe.detectBrowser = function(e) {
                        var t, n = !1,
                            r = [],
                            o = {
                                edge: /(edge)[ \/]([\w.]+)/i,
                                webkit: /(chrome|crios)[ \/]([\w.]+)/i,
                                safari: /(webkit)[ \/]([\w.]+)/i,
                                opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
                                msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
                                mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
                            };
                        for (t in o)
                            if (o.hasOwnProperty(t) && (r = e.match(o[t]))) {
                                n = {}, n[t] = !0, n[r[1].toLowerCase().split(" ")[0].split("/")[0]] = !0, n.version = parseInt(document.documentMode || r[2], 10);
                                break
                            }
                        return n
                    }, Fe.browser = Fe.detectBrowser(navigator.userAgent), Fe.detectClipboardAccess = function() {
                        var e = {
                            copy: !!document.queryCommandSupported && document.queryCommandSupported("copy"),
                            cut: !!document.queryCommandSupported && document.queryCommandSupported("cut"),
                            paste: !!document.queryCommandSupported && document.queryCommandSupported("paste")
                        };
                        return Fe.browser.chrome && (e.paste = !1, Fe.browser.version >= 43 && (e.copy = !0, e.cut = !0)), e
                    }, Fe.clipboard = Fe.detectClipboardAccess(), Fe.zoomLevel = function() {
                        var e, n, r;
                        try {
                            return e = Fe.browser, n = 0, r = document.documentElement, e.msie && 11 == e.version && r.scrollHeight > r.clientHeight && !Fe.touch && (n = Fe.scrollbar()), Fe.touch ? r.clientWidth / t.innerWidth : e.msie && e.version >= 10 ? ((top || t).document.documentElement.offsetWidth + n) / (top || t).innerWidth : 1
                        } catch (o) {
                            return 1
                        }
                    },
                    function(t) {
                        var n = "",
                            r = e(document.documentElement),
                            o = parseInt(t.version, 10);
                        t.msie ? n = "ie" : t.mozilla ? n = "ff" : t.safari ? n = "safari" : t.webkit ? n = "webkit" : t.opera ? n = "opera" : t.edge && (n = "edge"), n && (n = "k-" + n + " k-" + n + o), Fe.mobileOS && (n += " k-mobile"), Fe.cssFlexbox || (n += " k-no-flexbox"), r.addClass(n)
                    }(Fe.browser), Fe.eventCapture = document.documentElement.addEventListener, l = document.createElement("input"), Fe.placeholder = "placeholder" in l, Fe.propertyChangeEvent = "onpropertychange" in l, Fe.input = function() {
                        for (var e, t = ["number", "date", "time", "month", "week", "datetime", "datetime-local"], n = t.length, r = "test", o = {}, i = 0; i < n; i++) e = t[i], l.setAttribute("type", e), l.value = r, o[e.replace("-", "")] = "text" !== l.type && l.value !== r;
                        return o
                    }(), l.style.cssText = "float:left;", Fe.cssFloat = !!l.style.cssFloat, l = null, Fe.stableSort = function() {
                        var e, t = 513,
                            n = [{
                                index: 0,
                                field: "b"
                            }];
                        for (e = 1; e < t; e++) n.push({
                            index: e,
                            field: "a"
                        });
                        return n.sort(function(e, t) {
                            return e.field > t.field ? 1 : e.field < t.field ? -1 : 0
                        }), 1 === n[0].index
                    }(), Fe.matchesSelector = s.webkitMatchesSelector || s.mozMatchesSelector || s.msMatchesSelector || s.oMatchesSelector || s.matchesSelector || s.matches || function(t) {
                        for (var n = document.querySelectorAll ? (this.parentNode || document).querySelectorAll(t) || [] : e(t), r = n.length; r--;)
                            if (n[r] == this) return !0;
                        return !1
                    }, Fe.matchMedia = "matchMedia" in t, Fe.pushState = t.history && t.history.pushState, Fe.hashChange = "onhashchange" in t, Fe.customElements = "registerElement" in t.document, c = Fe.browser.chrome, f = Fe.browser.crios, p = Fe.browser.mozilla, m = Fe.browser.safari, Fe.msPointers = !c && t.MSPointerEvent, Fe.pointers = !c && !f && !p && !m && t.PointerEvent, Fe.kineticScrollNeeded = u && (Fe.touch || Fe.msPointers || Fe.pointers)
            }(), Y = {
                left: {
                    reverse: "right"
                },
                right: {
                    reverse: "left"
                },
                down: {
                    reverse: "up"
                },
                up: {
                    reverse: "down"
                },
                top: {
                    reverse: "bottom"
                },
                bottom: {
                    reverse: "top"
                },
                "in": {
                    reverse: "out"
                },
                out: {
                    reverse: "in"
                }
            }, q = {}, e.extend(q, {
                enabled: !0,
                Element: function(t) {
                    this.element = e(t)
                },
                promise: function(e, t) {
                    e.is(":visible") || e.css({
                        display: e.data("olddisplay") || "block"
                    }).css("display"), t.hide && e.data("olddisplay", e.css("display")).hide(), t.init && t.init(), t.completeCallback && t.completeCallback(e), e.dequeue()
                },
                disable: function() {
                    this.enabled = !1, this.promise = this.promiseShim
                },
                enable: function() {
                    this.enabled = !0, this.promise = this.animatedPromise
                }
            }), q.promiseShim = q.promise, "kendoAnimate" in e.fn || Oe(e.fn, {
                kendoStop: function(e, t) {
                    return this.stop(e, t)
                },
                kendoAnimate: function(e, t, n, r) {
                    return x(this, e, t, n, r)
                },
                kendoAddClass: function(e, t) {
                    return Ce.toggleClass(this, e, t, !0)
                },
                kendoRemoveClass: function(e, t) {
                    return Ce.toggleClass(this, e, t, !1)
                },
                kendoToggleClass: function(e, t, n) {
                    return Ce.toggleClass(this, e, t, n)
                }
            }), J = /&/g, V = /</g, G = /"/g, K = /'/g, Q = />/g, Z = function(e) {
                return e.target
            }, Fe.touch && (Z = function(e) {
                var t = "originalEvent" in e ? e.originalEvent.changedTouches : "changedTouches" in e ? e.changedTouches : null;
                return t ? document.elementFromPoint(t[0].clientX, t[0].clientY) : e.target
            }, ze(["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap"], function(t, n) {
                e.fn[n] = function(e) {
                    return this.bind(n, e)
                }
            })), Fe.touch ? Fe.mobileOS ? (Fe.mousedown = "touchstart", Fe.mouseup = "touchend", Fe.mousemove = "touchmove", Fe.mousecancel = "touchcancel", Fe.click = "touchend", Fe.resize = "orientationchange") : (Fe.mousedown = "mousedown touchstart", Fe.mouseup = "mouseup touchend", Fe.mousemove = "mousemove touchmove", Fe.mousecancel = "mouseleave touchcancel", Fe.click = "click", Fe.resize = "resize") : Fe.pointers ? (Fe.mousemove = "pointermove", Fe.mousedown = "pointerdown", Fe.mouseup = "pointerup", Fe.mousecancel = "pointercancel", Fe.click = "pointerup", Fe.resize = "orientationchange resize") : Fe.msPointers ? (Fe.mousemove = "MSPointerMove", Fe.mousedown = "MSPointerDown", Fe.mouseup = "MSPointerUp", Fe.mousecancel = "MSPointerCancel", Fe.click = "MSPointerUp", Fe.resize = "orientationchange resize") : (Fe.mousemove = "mousemove", Fe.mousedown = "mousedown", Fe.mouseup = "mouseup", Fe.mousecancel = "mouseleave", Fe.click = "click", Fe.resize = "resize"), X = function(e, t) {
                var n, r, o, i, a = t || "d",
                    s = 1;
                for (r = 0, o = e.length; r < o; r++) i = e[r], "" !== i && (n = i.indexOf("["), 0 !== n && (n == -1 ? i = "." + i : (s++, i = "." + i.substring(0, n) + " || {})" + i.substring(n))), s++, a += i + (r < o - 1 ? " || {})" : ")"));
                return Array(s).join("(") + a
            }, ee = /^([a-z]+:)?\/\//i, Oe(Ce, {
                widgets: [],
                _widgetRegisteredCallbacks: [],
                ui: Ce.ui || {},
                fx: Ce.fx || w,
                effects: Ce.effects || q,
                mobile: Ce.mobile || {},
                data: Ce.data || {},
                dataviz: Ce.dataviz || {},
                drawing: Ce.drawing || {},
                spreadsheet: {
                    messages: {}
                },
                keys: {
                    INSERT: 45,
                    DELETE: 46,
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    ESC: 27,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    END: 35,
                    HOME: 36,
                    SPACEBAR: 32,
                    PAGEUP: 33,
                    PAGEDOWN: 34,
                    F2: 113,
                    F10: 121,
                    F12: 123,
                    NUMPAD_PLUS: 107,
                    NUMPAD_MINUS: 109,
                    NUMPAD_DOT: 110
                },
                support: Ce.support || Fe,
                animate: Ce.animate || x,
                ns: "",
                attr: function(e) {
                    return "data-" + Ce.ns + e
                },
                getShadows: a,
                wrap: s,
                deepExtend: l,
                getComputedStyles: m,
                isScrollable: h,
                scrollLeft: g,
                size: y,
                toCamelCase: p,
                toHyphens: f,
                getOffset: Ce.getOffset || v,
                parseEffects: Ce.parseEffects || b,
                toggleClass: Ce.toggleClass || S,
                directions: Ce.directions || Y,
                Observable: j,
                Class: r,
                Template: H,
                template: Ae(H.compile, H),
                render: Ae(H.render, H),
                stringify: Ae(He.stringify, He),
                eventTarget: Z,
                htmlEncode: k,
                unescape: T,
                isLocalUrl: function(e) {
                    return e && !ee.test(e)
                },
                expr: function(e, t, n) {
                    return e = e || "", typeof t == We && (n = t, t = !1), n = n || "d", e && "[" !== e.charAt(0) && (e = "." + e), t ? (e = e.replace(/"([^.]*)\.([^"]*)"/g, '"$1_$DOT$_$2"'), e = e.replace(/'([^.]*)\.([^']*)'/g, "'$1_$DOT$_$2'"), e = X(e.split("."), n), e = e.replace(/_\$DOT\$_/g, ".")) : e = n + e, e
                },
                getter: function(e, t) {
                    var n = e + t;
                    return qe[n] = qe[n] || Function("d", "return " + Ce.expr(e, t))
                },
                setter: function(e) {
                    return Je[e] = Je[e] || Function("d,value", Ce.expr(e) + "=value")
                },
                accessor: function(e) {
                    return {
                        get: Ce.getter(e),
                        set: Ce.setter(e)
                    }
                },
                guid: function() {
                    var e, t, n = "",
                        r = "abcdefghijklmnopqrstuvwxyz";
                    for (n += r[Math.floor(Math.random() * Math.floor(r.length))], e = 1; e < 32; e++) t = 16 * _e.random() | 0, 8 != e && 12 != e && 16 != e && 20 != e || (n += "-"), n += (12 == e ? 4 : 16 == e ? 3 & t | 8 : t).toString(16);
                    return n
                },
                roleSelector: function(e) {
                    return e.replace(/(\S+)/g, "[" + Ce.attr("role") + "=$1],").slice(0, -1)
                },
                directiveSelector: function(e) {
                    var t, n = e.split(" ");
                    if (n)
                        for (t = 0; t < n.length; t++) "view" != n[t] && (n[t] = n[t].replace(/(\w*)(view|bar|strip|over)$/, "$1-$2"));
                    return n.join(" ").replace(/(\S+)/g, "kendo-mobile-$1,").slice(0, -1)
                },
                triggeredByInput: function(e) {
                    return /^(label|input|textarea|select)$/i.test(e.target.tagName)
                },
                onWidgetRegistered: function(e) {
                    for (var t = 0, n = Ce.widgets.length; t < n; t++) e(Ce.widgets[t]);
                    Ce._widgetRegisteredCallbacks.push(e)
                },
                logToConsole: function(e, r) {
                    var o = t.console;
                    !Ce.suppressLog && n !== o && o.log && o[r || "log"](e)
                }
            }), te = j.extend({
                init: function(e, t) {
                    var n, r, o = this;
                    o.element = Ce.jQuery(e).handler(o), o.angular("init", t), j.fn.init.call(o), n = t ? t.dataSource : null, t && (r = (o.componentTypes || {})[(t || {}).componentType]), n && (t = Oe({}, t, {
                        dataSource: {}
                    })), t = o.options = Oe(!0, {}, o.options, o.defaults, r || {}, t), n && (t.dataSource = n), o.element.attr(Ce.attr("role")) || o.element.attr(Ce.attr("role"), (t.name || "").toLowerCase()), o.element.data("kendo" + t.prefix + t.name, o), o.bind(o.events, t)
                },
                events: [],
                options: {
                    prefix: ""
                },
                _hasBindingTarget: function() {
                    return !!this.element[0].kendoBindingTarget
                },
                _tabindex: function(e) {
                    e = e || this.wrapper;
                    var t = this.element,
                        n = "tabindex",
                        r = e.attr(n) || t.attr(n);
                    t.removeAttr(n), e.attr(n, isNaN(r) ? 0 : r)
                },
                setOptions: function(t) {
                    this._setEvents(t), e.extend(this.options, t)
                },
                _setEvents: function(e) {
                    for (var t, n = this, r = 0, o = n.events.length; r < o; r++) t = n.events[r], n.options[t] && e[t] && (n.unbind(t, n.options[t]), n._events && n._events[t] && delete n._events[t]);
                    n.bind(n.events, e)
                },
                resize: function(e) {
                    var t = this.getSize(),
                        n = this._size;
                    (e || (t.width > 0 || t.height > 0) && (!n || t.width !== n.width || t.height !== n.height)) && (this._size = t, this._resize(t, e), this.trigger("resize", t))
                },
                getSize: function() {
                    return Ce.dimensions(this.element)
                },
                size: function(e) {
                    return e ? (this.setSize(e), n) : this.getSize()
                },
                setSize: e.noop,
                _resize: e.noop,
                destroy: function() {
                    var e = this;
                    e.element.removeData("kendo" + e.options.prefix + e.options.name), e.element.removeData("handler"), e.unbind()
                },
                _destroy: function() {
                    this.destroy()
                },
                angular: function() {},
                _muteAngularRebind: function(e) {
                    this._muteRebind = !0, e.call(this), this._muteRebind = !1
                }
            }), ne = te.extend({
                dataItems: function() {
                    return this.dataSource.flatView()
                },
                _angularItems: function(t) {
                    var n = this;
                    n.angular(t, function() {
                        return {
                            elements: n.items(),
                            data: e.map(n.dataItems(), function(e) {
                                return {
                                    dataItem: e
                                }
                            })
                        }
                    })
                }
            }), Ce.dimensions = function(e, t) {
                var n = e[0];
                return t && e.css(t), {
                    width: n.offsetWidth,
                    height: n.offsetHeight
                }
            }, Ce.notify = Ee, re = /template$/i, oe = /^\s*(?:\{(?:.|\r\n|\n)*\}|\[(?:.|\r\n|\n)*\])\s*$/, ie = /^\{(\d+)(:[^\}]+)?\}|^\[[A-Za-z_]+\]$/, ae = /([A-Z])/g, Ce.initWidget = function(r, o, i) {
                var a, s, u, l, c, d, f, p, m, h, g, y, v;
                if (i ? i.roles && (i = i.roles) : i = Ce.ui.roles, r = r.nodeType ? r : r[0], d = r.getAttribute("data-" + Ce.ns + "role")) {
                    m = d.indexOf(".") === -1, u = m ? i[d] : Ce.getter(d)(t), g = e(r).data(), y = u ? "kendo" + u.fn.options.prefix + u.fn.options.name : "", h = m ? RegExp("^kendo.*" + d + "$", "i") : RegExp("^" + y + "$", "i");
                    for (v in g)
                        if (v.match(h)) {
                            if (v !== y) return g[v];
                            a = g[v]
                        }
                    if (u) {
                        for (p = C(r, "dataSource"), o = e.extend({}, O(r, e.extend({}, u.fn.options, u.fn.defaults)), o), p && (o.dataSource = typeof p === We ? Ce.getter(p)(t) : p), l = 0, c = u.fn.events.length; l < c; l++) s = u.fn.events[l], f = C(r, s), f !== n && (o[s] = Ce.getter(f)(t));
                        return a ? e.isEmptyObject(o) || a.setOptions(o) : a = new u(r, o), a
                    }
                }
            }, Ce.rolesFromNamespaces = function(e) {
                var t, n, r = [];
                for (e[0] || (e = [Ce.ui, Ce.dataviz.ui]), t = 0, n = e.length; t < n; t++) r[t] = e[t].roles;
                return Oe.apply(null, [{}].concat(r.reverse()))
            }, Ce.init = function(t) {
                var n = Ce.rolesFromNamespaces(Ve.call(arguments, 1));
                e(t).find("[data-" + Ce.ns + "role]").addBack().each(function() {
                    Ce.initWidget(this, {}, n)
                })
            }, Ce.destroy = function(t) {
                e(t).find("[data-" + Ce.ns + "role]").addBack().each(function() {
                    var t, n = e(this).data();
                    for (t in n) 0 === t.indexOf("kendo") && typeof n[t].destroy === Ue && n[t].destroy()
                })
            }, Ce.resize = function(t, n) {
                var r, o = e(t).find("[data-" + Ce.ns + "role]").addBack().filter(D);
                o.length && (r = e.makeArray(o), r.sort(z), e.each(r, function() {
                    var t = Ce.widgetInstance(e(this));
                    t && t.resize(n)
                }))
            }, Ce.parseOptions = O, Oe(Ce.ui, {
                Widget: te,
                DataBoundWidget: ne,
                roles: {},
                progress: function(t, n, r) {
                    var o, i, a, s, u, l = t.find(".k-loading-mask"),
                        c = Ce.support,
                        d = c.browser;
                    r = e.extend({}, {
                        width: "100%",
                        height: "100%",
                        top: t.scrollTop(),
                        opacity: !1
                    }, r), u = r.opacity ? "k-loading-mask k-opaque" : "k-loading-mask", n ? l.length || (o = c.isRtl(t), i = o ? "right" : "left", s = Ce.scrollLeft(t), a = d.webkit && o ? t[0].scrollWidth - t.width() - 2 * s : 0, l = e(Ce.format("<div class='{0}'><span class='k-loading-text'>{1}</span><div class='k-loading-image'></div><div class='k-loading-color'></div></div>", u, Ce.ui.progress.messages.loading)).width(r.width).height(r.height).css("top", r.top).css(i, Math.abs(s) + a).prependTo(t)) : l && l.remove()
                },
                plugin: function(t, r, o) {
                    var i, a, s, u, l = t.fn.options.name;
                    for (r = r || Ce.ui, o = o || "", r[l] = t, r.roles[l.toLowerCase()] = t, i = "getKendo" + o + l, l = "kendo" + o + l, a = {
                            name: l,
                            widget: t,
                            prefix: o || ""
                        }, Ce.widgets.push(a), s = 0, u = Ce._widgetRegisteredCallbacks.length; s < u; s++) Ce._widgetRegisteredCallbacks[s](a);
                    e.fn[l] = function(r) {
                        var o, i = this;
                        return typeof r === We ? (o = Ve.call(arguments, 1), this.each(function() {
                            var t, a, s = e.data(this, l);
                            if (!s) throw Error(Ce.format("Cannot call method '{0}' of {1} before it is initialized", r, l));
                            if (t = s[r], typeof t !== Ue) throw Error(Ce.format("Cannot find method '{0}' of {1}", r, l));
                            if (a = t.apply(s, o), a !== n) return i = a, !1
                        })) : this.each(function() {
                            return new t(this, r)
                        }), i
                    }, e.fn[l].widget = t, e.fn[i] = function() {
                        return this.data(l)
                    }
                }
            }), Ce.ui.progress.messages = {
                loading: "Loading..."
            }, se = {
                bind: function() {
                    return this
                },
                nullObject: !0,
                options: {}
            }, ue = te.extend({
                init: function(e, t) {
                    te.fn.init.call(this, e, t), this.element.autoApplyNS(), this.wrapper = this.element, this.element.addClass("km-widget")
                },
                destroy: function() {
                    te.fn.destroy.call(this), this.element.kendoDestroy()
                },
                options: {
                    prefix: "Mobile"
                },
                events: [],
                view: function() {
                    var e = this.element.closest(Ce.roleSelector("view splitview modalview drawer"));
                    return Ce.widgetInstance(e, Ce.mobile.ui) || se
                },
                viewHasNativeScrolling: function() {
                    var e = this.view();
                    return e && e.options.useNativeScrolling
                },
                container: function() {
                    var e = this.element.closest(Ce.roleSelector("view layout modalview drawer splitview"));
                    return Ce.widgetInstance(e.eq(0), Ce.mobile.ui) || se
                }
            }), Oe(Ce.mobile, {
                init: function(e) {
                    Ce.init(e, Ce.mobile.ui, Ce.ui, Ce.dataviz.ui)
                },
                appLevelNativeScrolling: function() {
                    return Ce.mobile.application && Ce.mobile.application.options && Ce.mobile.application.options.useNativeScrolling
                },
                roles: {},
                ui: {
                    Widget: ue,
                    DataBoundWidget: ne.extend(ue.prototype),
                    roles: {},
                    plugin: function(e) {
                        Ce.ui.plugin(e, Ce.mobile.ui, "Mobile")
                    }
                }
            }), l(Ce.dataviz, {
                init: function(e) {
                    Ce.init(e, Ce.dataviz.ui)
                },
                ui: {
                    roles: {},
                    themes: {},
                    views: [],
                    plugin: function(e) {
                        Ce.ui.plugin(e, Ce.dataviz.ui)
                    }
                },
                roles: {}
            }), Ce.touchScroller = function(t, n) {
                return n || (n = {}), n.useNative = !0, e(t).map(function(t, r) {
                    return r = e(r), !(!Fe.kineticScrollNeeded || !Ce.mobile.ui.Scroller || r.data("kendoMobileScroller")) && (r.kendoMobileScroller(n), r.data("kendoMobileScroller"))
                })[0]
            }, Ce.preventDefault = function(e) {
                e.preventDefault()
            }, Ce.widgetInstance = function(e, n) {
                var r, o, i, a, s, u = e.data(Ce.ns + "role"),
                    l = [],
                    c = e.data("kendoView");
                if (u) {
                    if ("content" === u && (u = "scroller"), "editortoolbar" === u && (i = e.data("kendoEditorToolbar"))) return i;
                    if ("view" === u && c) return c;
                    if (n)
                        if (n[0])
                            for (r = 0, o = n.length; r < o; r++) l.push(n[r].roles[u]);
                        else l.push(n.roles[u]);
                    else l = [Ce.ui.roles[u], Ce.dataviz.ui.roles[u], Ce.mobile.ui.roles[u]];
                    for (u.indexOf(".") >= 0 && (l = [Ce.getter(u)(t)]), r = 0, o = l.length; r < o; r++)
                        if (a = l[r], a && (s = e.data("kendo" + a.fn.options.prefix + a.fn.options.name))) return s
                }
            }, Ce.onResize = function(n) {
                var r = n;
                return Fe.mobileOS.android && (r = function() {
                    setTimeout(n, 600)
                }), e(t).on(Fe.resize, r), r
            }, Ce.unbindResize = function(n) {
                e(t).off(Fe.resize, n)
            }, Ce.attrValue = function(e, t) {
                return e.data(Ce.ns + t)
            }, Ce.days = {
                Sunday: 0,
                Monday: 1,
                Tuesday: 2,
                Wednesday: 3,
                Thursday: 4,
                Friday: 5,
                Saturday: 6
            }, e.extend(e.expr.pseudos, {
                kendoFocusable: function(t) {
                    var n = e.attr(t, "tabindex");
                    return A(t, !isNaN(n) && n > -1)
                }
            }), le = ["mousedown", "mousemove", "mouseenter", "mouseleave", "mouseover", "mouseout", "mouseup", "click"], ce = "label, input, [data-rel=external]", de = {
                setupMouseMute: function() {
                    var t, n = 0,
                        r = le.length,
                        o = document.documentElement;
                    if (!de.mouseTrap && Fe.eventCapture)
                        for (de.mouseTrap = !0, de.bustClick = !1, de.captureMouse = !1, t = function(t) {
                                de.captureMouse && ("click" === t.type ? de.bustClick && !e(t.target).is(ce) && (t.preventDefault(), t.stopPropagation()) : t.stopPropagation())
                            }; n < r; n++) o.addEventListener(le[n], t, !0)
                },
                muteMouse: function(e) {
                    de.captureMouse = !0, e.data.bustClick && (de.bustClick = !0), clearTimeout(de.mouseTrapTimeoutID)
                },
                unMuteMouse: function() {
                    clearTimeout(de.mouseTrapTimeoutID), de.mouseTrapTimeoutID = setTimeout(function() {
                        de.captureMouse = !1, de.bustClick = !1
                    }, 400)
                }
            }, fe = {
                down: "touchstart mousedown",
                move: "mousemove touchmove",
                up: "mouseup touchend touchcancel",
                cancel: "mouseleave touchcancel"
            }, Fe.touch && (Fe.mobileOS.ios || Fe.mobileOS.android) ? fe = {
                down: "touchstart",
                move: "touchmove",
                up: "touchend touchcancel",
                cancel: "touchcancel"
            } : Fe.pointers ? fe = {
                down: "pointerdown",
                move: "pointermove",
                up: "pointerup",
                cancel: "pointercancel pointerleave"
            } : Fe.msPointers && (fe = {
                down: "MSPointerDown",
                move: "MSPointerMove",
                up: "MSPointerUp",
                cancel: "MSPointerCancel MSPointerLeave"
            }), !Fe.msPointers || "onmspointerenter" in t || e.each({
                MSPointerEnter: "MSPointerOver",
                MSPointerLeave: "MSPointerOut"
            }, function(t, n) {
                e.event.special[t] = {
                    delegateType: n,
                    bindType: n,
                    handle: function(t) {
                        var r, o = this,
                            i = t.relatedTarget,
                            a = t.handleObj;
                        return i && (i === o || e.contains(o, i)) || (t.type = a.origType, r = a.handler.apply(this, arguments), t.type = n), r
                    }
                }
            }), pe = function(e) {
                return fe[e] || e
            }, me = /([^ ]+)/g, Ce.applyEventMap = function(e, t) {
                return e = e.replace(me, pe), t && (e = e.replace(me, "$1." + t)), e
            }, Ce.keyDownHandler = function(e, t) {
                var n, r, o = t._events.kendoKeydown;
                if (!o) return !0;
                for (o = o.slice(), e.sender = t, e.preventKendoKeydown = !1, n = 0, r = o.length; n < r; n++) o[n].call(t, e);
                return !e.preventKendoKeydown
            }, he = e.fn.on, Ge(!0, _, e), _.fn = _.prototype = new e, _.fn.constructor = _, _.fn.init = function(t, n) {
                return n && n instanceof e && !(n instanceof _) && (n = _(n)), e.fn.init.call(this, t, n, ge)
            }, _.fn.init.prototype = _.fn, ge = _(document), Oe(_.fn, {
                handler: function(e) {
                    return this.data("handler", e), this
                },
                autoApplyNS: function(e) {
                    return this.data("kendoNS", e || Ce.guid()), this
                },
                on: function() {
                    var e, t, n, r, o, i, a, s, u = this,
                        l = u.data("kendoNS");
                    return 1 === arguments.length ? he.call(u, arguments[0]) : (e = u, t = Ve.call(arguments), typeof t[t.length - 1] === Ye && t.pop(), n = t[t.length - 1], r = Ce.applyEventMap(t[0], l), Fe.mouseAndTouchPresent && r.search(/mouse|click/) > -1 && this[0] !== document.documentElement && (de.setupMouseMute(), o = 2 === t.length ? null : t[1], i = r.indexOf("click") > -1 && r.indexOf("touchend") > -1, he.call(this, {
                        touchstart: de.muteMouse,
                        touchend: de.unMuteMouse
                    }, o, {
                        bustClick: i
                    })), arguments[0].indexOf("keydown") !== -1 && t[1] && t[1].options ? (t[0] = r, a = t[1], s = t[t.length - 1], t[t.length - 1] = function(e) {
                        if (Ce.keyDownHandler(e, a)) return s.apply(this, [e])
                    }, he.apply(u, t), u) : (typeof n === We && (e = u.data("handler"), n = e[n], t[t.length - 1] = function(t) {
                        n.call(e, t)
                    }), t[0] = r, he.apply(u, t), u))
                },
                kendoDestroy: function(e) {
                    return e = e || this.data("kendoNS"), e && this.off("." + e), this
                }
            }), Ce.jQuery = _, Ce.eventMap = fe, Ce.timezone = function() {
                function e(e, t) {
                    var n, r, o, i = t[3],
                        a = t[4],
                        s = t[5],
                        u = t[8];
                    return u || (t[8] = u = {}), u[e] ? u[e] : (isNaN(a) ? 0 === a.indexOf("last") ? (n = new Date(Date.UTC(e, c[i] + 1, 1, s[0] - 24, s[1], s[2], 0)), r = d[a.substr(4, 3)], o = n.getUTCDay(), n.setUTCDate(n.getUTCDate() + r - o - (r > o ? 7 : 0))) : a.indexOf(">=") >= 0 ? (n = new Date(Date.UTC(e, c[i], a.substr(5), s[0], s[1], s[2], 0)), r = d[a.substr(0, 3)], o = n.getUTCDay(), n.setUTCDate(n.getUTCDate() + r - o + (r < o ? 7 : 0))) : a.indexOf("<=") >= 0 && (n = new Date(Date.UTC(e, c[i], a.substr(5), s[0], s[1], s[2], 0)), r = d[a.substr(0, 3)], o = n.getUTCDay(), n.setUTCDate(n.getUTCDate() + r - o - (r > o ? 7 : 0))) : n = new Date(Date.UTC(e, c[i], a, s[0], s[1], s[2], 0)), u[e] = n)
                }

                function t(t, n, r) {
                    var o, i, a, s;
                    return (n = n[r]) ? (a = new Date(t).getUTCFullYear(), n = jQuery.grep(n, function(e) {
                        var t = e[0],
                            n = e[1];
                        return t <= a && (n >= a || t == a && "only" == n || "max" == n)
                    }), n.push(t), n.sort(function(t, n) {
                        return "number" != typeof t && (t = +e(a, t)), "number" != typeof n && (n = +e(a, n)), t - n
                    }), s = n[jQuery.inArray(t, n) - 1] || n[n.length - 1], isNaN(s) ? s : null) : (o = r.split(":"), i = 0, o.length > 1 && (i = 60 * o[0] + +o[1]), [-1e6, "max", "-", "Jan", 1, [0, 0, 0], i, "-"])
                }

                function n(e, t, n) {
                    var r, o, i, a = t[n];
                    if ("string" == typeof a && (a = t[a]), !a) throw Error('Timezone "' + n + '" is either incorrect, or kendo.timezones.min.js is not included.');
                    for (r = a.length - 1; r >= 0 && (o = a[r][3], !(o && e > o)); r--);
                    if (i = a[r + 1], !i) throw Error('Timezone "' + n + '" not found on ' + e + ".");
                    return i
                }

                function r(e, r, o, i) {
                    typeof e != Ie && (e = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
                    var a = n(e, r, i);
                    return {
                        zone: a,
                        rule: t(e, o, a[1])
                    }
                }

                function o(e, t) {
                    var n, o, i;
                    return "Etc/UTC" == t || "Etc/GMT" == t ? 0 : (n = r(e, this.zones, this.rules, t), o = n.zone, i = n.rule, Ce.parseFloat(i ? o[0] - i[6] : o[0]))
                }

                function i(e, t) {
                    var n = r(e, this.zones, this.rules, t),
                        o = n.zone,
                        i = n.rule,
                        a = o[2];
                    return a.indexOf("/") >= 0 ? a.split("/")[i && +i[6] ? 1 : 0] : a.indexOf("%s") >= 0 ? a.replace("%s", i && "-" != i[7] ? i[7] : "") : a
                }

                function a(e, t, n) {
                    var r, o, i, a = n;
                    return typeof t == We && (t = this.offset(e, t)), typeof n == We && (n = this.offset(e, n)), o = e.getTimezoneOffset(), e = new Date(e.getTime() + 6e4 * (t - n)), i = e.getTimezoneOffset(), typeof a == We && (a = this.offset(e, a)), r = i - o + (n - a), new Date(e.getTime() + 6e4 * r)
                }

                function s(e, t) {
                    return this.convert(e, e.getTimezoneOffset(), t)
                }

                function u(e, t) {
                    return this.convert(e, t, e.getTimezoneOffset())
                }

                function l(e) {
                    return this.apply(new Date(e), "Etc/UTC")
                }
                var c = {
                        Jan: 0,
                        Feb: 1,
                        Mar: 2,
                        Apr: 3,
                        May: 4,
                        Jun: 5,
                        Jul: 6,
                        Aug: 7,
                        Sep: 8,
                        Oct: 9,
                        Nov: 10,
                        Dec: 11
                    },
                    d = {
                        Sun: 0,
                        Mon: 1,
                        Tue: 2,
                        Wed: 3,
                        Thu: 4,
                        Fri: 5,
                        Sat: 6
                    };
                return {
                    zones: {},
                    rules: {},
                    offset: o,
                    convert: a,
                    apply: s,
                    remove: u,
                    abbr: i,
                    toLocalDate: l
                }
            }(), Ce.date = function() {
                function e(e, t) {
                    return 0 === t && 23 === e.getHours() && (e.setHours(e.getHours() + 2), !0)
                }

                function t(t, n, r) {
                    var o = t.getHours();
                    r = r || 1, n = (n - t.getDay() + 7 * r) % 7, t.setDate(t.getDate() + n), e(t, o)
                }

                function r(e, n, r) {
                    return e = new Date(e), t(e, n, r), e
                }

                function o(e) {
                    return new Date(e.getFullYear(), e.getMonth(), 1)
                }

                function i(e) {
                    var t = new Date(e.getFullYear(), e.getMonth() + 1, 0),
                        n = o(e),
                        r = Math.abs(t.getTimezoneOffset() - n.getTimezoneOffset());
                    return r && t.setHours(n.getHours() + r / 60), t
                }

                function a(e, t) {
                    return 1 !== t ? m(r(e, t, -1), 4) : m(e, 4 - (e.getDay() || 7))
                }

                function s(e, t) {
                    var n = new Date(e.getFullYear(), 0, 1, (-6)),
                        r = a(e, t),
                        o = r.getTime() - n.getTime(),
                        i = Math.floor(o / M);
                    return 1 + Math.floor(i / 7)
                }

                function u(e, t) {
                    var r, o, i;
                    return t === n && (t = Ce.culture().calendar.firstDay), r = m(e, -7), o = m(e, 7), i = s(e, t), 0 === i ? s(r, t) + 1 : 53 === i && s(o, t) > 1 ? 1 : i
                }

                function l(t) {
                    return t = new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0), e(t, 0), t
                }

                function c(e) {
                    return Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds())
                }

                function d(e) {
                    return b(e).getTime() - l(b(e))
                }

                function f(e, t, n) {
                    var r, o = d(t),
                        i = d(n);
                    return !e || o == i || (t >= n && (n += M), r = d(e), o > r && (r += M), i < o && (i += M), r >= o && r <= i)
                }

                function p(e, t, n) {
                    var r, o = t.getTime(),
                        i = n.getTime();
                    return o >= i && (i += M), r = e.getTime(), r >= o && r <= i
                }

                function m(t, n) {
                    var r = t.getHours();
                    return t = new Date(t), h(t, n * M), e(t, r), t
                }

                function h(e, t, n) {
                    var r, o = e.getTimezoneOffset();
                    e.setTime(e.getTime() + t), n || (r = e.getTimezoneOffset() - o, e.setTime(e.getTime() + r * w))
                }

                function g(t, n) {
                    return t = new Date(t.getFullYear(), t.getMonth(), t.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()), e(t, n.getHours()), t
                }

                function y() {
                    return l(new Date)
                }

                function v(e) {
                    return l(e).getTime() == y().getTime()
                }

                function b(e) {
                    var t = new Date(1980, 1, 1, 0, 0, 0);
                    return e && t.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), t
                }
                var w = 6e4,
                    M = 864e5;
                return {
                    adjustDST: e,
                    dayOfWeek: r,
                    setDayOfWeek: t,
                    getDate: l,
                    isInDateRange: p,
                    isInTimeRange: f,
                    isToday: v,
                    nextDay: function(e) {
                        return m(e, 1)
                    },
                    previousDay: function(e) {
                        return m(e, -1)
                    },
                    toUtcTime: c,
                    MS_PER_DAY: M,
                    MS_PER_HOUR: 60 * w,
                    MS_PER_MINUTE: w,
                    setTime: h,
                    setHours: g,
                    addDays: m,
                    today: y,
                    toInvariantTime: b,
                    firstDayOfMonth: o,
                    lastDayOfMonth: i,
                    weekInYear: u,
                    getMilliseconds: d
                }
            }(), Ce.stripWhitespace = function(e) {
                var t, n, r;
                if (document.createNodeIterator)
                    for (t = document.createNodeIterator(e, NodeFilter.SHOW_TEXT, function(t) {
                            return t.parentNode == e ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
                        }, !1); t.nextNode();) t.referenceNode && !t.referenceNode.textContent.trim() && t.referenceNode.parentNode.removeChild(t.referenceNode);
                else
                    for (n = 0; n < e.childNodes.length; n++) r = e.childNodes[n], 3 != r.nodeType || /\S/.test(r.nodeValue) || (e.removeChild(r), n--), 1 == r.nodeType && Ce.stripWhitespace(r)
            }, ye = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                setTimeout(e, 1e3 / 60)
            }, Ce.animationFrame = function(e) {
                ye.call(t, e)
            }, ve = [], Ce.queueAnimation = function(e) {
                ve[ve.length] = e, 1 === ve.length && Ce.runNextAnimation()
            }, Ce.runNextAnimation = function() {
                Ce.animationFrame(function() {
                    ve[0] && (ve.shift()(), ve[0] && Ce.runNextAnimation())
                })
            }, Ce.parseQueryStringParams = function(e) {
                for (var t = e.split("?")[1] || "", n = {}, r = t.split(/&|=/), o = r.length, i = 0; i < o; i += 2) "" !== r[i] && (n[decodeURIComponent(r[i])] = decodeURIComponent(r[i + 1]));
                return n
            }, Ce.elementUnderCursor = function(e) {
                if (n !== e.x.client) return document.elementFromPoint(e.x.client, e.y.client)
            }, Ce.wheelDeltaY = function(e) {
                var t, r = e.originalEvent,
                    o = r.wheelDeltaY;
                return r.wheelDelta ? (o === n || o) && (t = r.wheelDelta) : r.detail && r.axis === r.VERTICAL_AXIS && (t = 10 * -r.detail), t
            }, Ce.throttle = function(e, t) {
                var r, o, i = 0;
                return !t || t <= 0 ? e : (o = function() {
                    function o() {
                        e.apply(a, u), i = +new Date
                    }
                    var a = this,
                        s = +new Date - i,
                        u = arguments;
                    return i ? (r && clearTimeout(r), s > t ? o() : r = setTimeout(o, t - s), n) : o()
                }, o.cancel = function() {
                    clearTimeout(r)
                }, o)
            }, Ce.caret = function(t, r, o) {
                var i, a, s, u, l, c = r !== n;
                if (o === n && (o = r), t[0] && (t = t[0]), !c || !t.disabled) {
                    try {
                        t.selectionStart !== n ? c ? (t.focus(), a = Fe.mobileOS, a.wp || a.android ? setTimeout(function() {
                            t.setSelectionRange(r, o)
                        }, 0) : t.setSelectionRange(r, o)) : r = [t.selectionStart, t.selectionEnd] : document.selection && (e(t).is(":visible") && t.focus(), i = t.createTextRange(), c ? (i.collapse(!0), i.moveStart("character", r), i.moveEnd("character", o - r), i.select()) : (s = i.duplicate(), i.moveToBookmark(document.selection.createRange().getBookmark()), s.setEndPoint("EndToStart", i), u = s.text.length, l = u + i.text.length, r = [u, l]))
                    } catch (d) {
                        r = []
                    }
                    return r
                }
            }, Ce.compileMobileDirective = function(e, n) {
                var r = t.angular;
                return e.attr("data-" + Ce.ns + "role", e[0].tagName.toLowerCase().replace("kendo-mobile-", "").replace("-", "")), r.element(e).injector().invoke(["$compile", function(t) {
                    t(e)(n), /^\$(digest|apply)$/.test(n.$$phase) || n.$digest()
                }]), Ce.widgetInstance(e, Ce.mobile.ui)
            }, Ce.antiForgeryTokens = function() {
                var t = {},
                    r = e("meta[name=csrf-token],meta[name=_csrf]").attr("content"),
                    o = e("meta[name=csrf-param],meta[name=_csrf_header]").attr("content");
                return e("input[name^='__RequestVerificationToken']").each(function() {
                    t[this.name] = this.value
                }), o !== n && r !== n && (t[o] = r), t
            }, Ce.cycleForm = function(e) {
                function t(e) {
                    var t = Ce.widgetInstance(e);
                    t && t.focus ? t.focus() : e.focus()
                }
                var n = e.find("input, .k-widget").first(),
                    r = e.find("button, .k-button").last();
                r.on("keydown", function(e) {
                    e.keyCode != Ce.keys.TAB || e.shiftKey || (e.preventDefault(), t(n))
                }), n.on("keydown", function(e) {
                    e.keyCode == Ce.keys.TAB && e.shiftKey && (e.preventDefault(), t(r))
                })
            }, Ce.focusElement = function(n) {
                var r = [],
                    o = n.parentsUntil("body").filter(function(e, t) {
                        var n = Ce.getComputedStyles(t, ["overflow"]);
                        return "visible" !== n.overflow
                    }).add(t);
                o.each(function(t, n) {
                    r[t] = e(n).scrollTop()
                });
                try {
                    n[0].setActive()
                } catch (i) {
                    n[0].focus()
                }
                o.each(function(t, n) {
                    e(n).scrollTop(r[t])
                })
            }, Ce.focusNextElement = function() {
                var t, n, r;
                document.activeElement && (t = e(":kendoFocusable"), n = t.index(document.activeElement), n > -1 && (r = t[n + 1] || t[0], r.focus()))
            }, Ce.trim = function(e) {
                return e ? ("" + e).trim() : ""
            }, Ce.getWidgetFocusableElement = function(t) {
                var n, r = t.closest(":kendoFocusable"),
                    o = Ce.widgetInstance(t);
                return n = r.length ? r : o ? "Editor" === o.options.name ? e(o.body) : o.wrapper.find(":kendoFocusable").first() : t
            }, Ce.addAttribute = function(e, t, n) {
                var r = e.attr(t) || "";
                r.indexOf(n) < 0 && e.attr(t, (r + " " + n).trim())
            }, Ce.removeAttribute = function(e, t, n) {
                var r = e.attr(t) || "";
                e.attr(t, r.replace(n, "").trim())
            }, Ce.toggleAttribute = function(e, t, n) {
                var r = e.attr(t) || "";
                r.indexOf(n) < 0 ? Ce.addAttribute(e, t, n) : Ce.removeAttribute(e, t, n)
            }, Ce.matchesMedia = function(e) {
                var n = Ce._bootstrapToMedia(e) || e;
                return Fe.matchMedia && t.matchMedia(n).matches
            }, Ce._bootstrapToMedia = function(e) {
                return {
                    xs: "(max-width: 576px)",
                    sm: "(min-width: 576px)",
                    md: "(min-width: 768px)",
                    lg: "(min-width: 992px)",
                    xl: "(min-width: 1200px)"
                }[e]
            }, Ce.fileGroupMap = {
                audio: [".aif", ".iff", ".m3u", ".m4a", ".mid", ".mp3", ".mpa", ".wav", ".wma", ".ogg", ".wav", ".wma", ".wpl"],
                video: [".3g2", ".3gp", ".avi", ".asf", ".flv", ".m4u", ".rm", ".h264", ".m4v", ".mkv", ".mov", ".mp4", ".mpg", ".rm", ".swf", ".vob", ".wmv"],
                image: [".ai", ".dds", ".heic", ".jpe", "jfif", ".jif", ".jp2", ".jps", ".eps", ".bmp", ".gif", ".jpeg", ".jpg", ".png", ".ps", ".psd", ".svg", ".svgz", ".tif", ".tiff"],
                txt: [".doc", ".docx", ".log", ".pages", ".tex", ".wpd", ".wps", ".odt", ".rtf", ".text", ".txt", ".wks"],
                presentation: [".key", ".odp", ".pps", ".ppt", ".pptx"],
                data: [".xlr", ".xls", ".xlsx"],
                programming: [".tmp", ".bak", ".msi", ".cab", ".cpl", ".cur", ".dll", ".dmp", ".drv", ".icns", ".ico", ".link", ".sys", ".cfg", ".ini", ".asp", ".aspx", ".cer", ".csr", ".css", ".dcr", ".htm", ".html", ".js", ".php", ".rss", ".xhtml"],
                pdf: [".pdf"],
                config: [".apk", ".app", ".bat", ".cgi", ".com", ".exe", ".gadget", ".jar", ".wsf"],
                zip: [".7z", ".cbr", ".gz", ".sitx", ".arj", ".deb", ".pkg", ".rar", ".rpm", ".tar.gz", ".z", ".zip", ".zipx"],
                "disc-image": [".dmg", ".iso", ".toast", ".vcd", ".bin", ".cue", ".mdf"]
            }, Ce.getFileGroup = function(e, t) {
                var r, o, i = Ce.fileGroupMap,
                    a = Object.keys(i),
                    s = "file";
                if (e === n || !e.length) return s;
                for (r = 0; r < a.length; r += 1)
                    if (o = i[a[r]], o.indexOf(e.toLowerCase()) > -1) return t ? "file-" + a[r] : a[r];
                return s
            }, Ce.getFileSizeMessage = function(e) {
                var t, n = ["Bytes", "KB", "MB", "GB", "TB"];
                return 0 === e ? "0 Byte" : (t = parseInt(Math.floor(Math.log(e) / Math.log(1024)), 10), Math.round(e / Math.pow(1024, t), 2) + " " + n[t])
            }, Ce.selectorFromClasses = function(e) {
                return "." + e.split(" ").join(".")
            }, be = ["primary", "secondary", "tertiary", "inherit", "info", "success", "warning", "error", "dark", "light", "inverse"], we = ["solid", "outline", "flat"], Me = ["edge", "outside", "inside"], xe = ["circle", "rectangle", "rounded", "dot", "pill"], Se = [
                ["small", "sm"],
                ["medium", "md"],
                ["large", "lg"]
            ], ke = [
                ["top start", "top-start"],
                ["top end", "top-end"],
                ["bottom start", "bottom-start"],
                ["bottom end", "bottom-end"]
            ], Te = ["fixed", "static", "sticky", "absolute"], Ce.propertyToCssClassMap = {}, Ce.registerCssClass = function(e, t, n) {
                Ce.propertyToCssClassMap[e] || (Ce.propertyToCssClassMap[e] = {}), Ce.propertyToCssClassMap[e][t] = n || t
            }, Ce.registerCssClasses = function(e, t) {
                for (var n = 0; n < t.length; n++) De(t[n]) ? Ce.registerCssClass(e, t[n][0], t[n][1]) : Ce.registerCssClass(e, t[n])
            }, Ce.getValidCssClass = function(e, t, n) {
                var r = Ce.propertyToCssClassMap[t][n];
                if (r) return e + r
            }, Ce.registerCssClasses("themeColor", be), Ce.registerCssClasses("fill", we), Ce.registerCssClasses("postition", Me), Ce.registerCssClasses("shape", xe), Ce.registerCssClasses("size", Se), Ce.registerCssClasses("align", ke), Ce.registerCssClasses("positionMode", Te), Ce.whenAll = function(t) {
                function n(e, t, n) {
                    return function() {
                        n != o && l++, s.notifyWith(t[e] = this, n[e] = Array.prototype.slice.call(arguments)), --a || s[(l ? "reject" : "resolve") + "With"](t, n)
                    }
                }
                for (var r, o = 1 == arguments.length && e.isArray(t) ? t : Array.prototype.slice.call(arguments), i = o.length, a = i, s = e.Deferred(), u = 0, l = 0, c = Array(i), d = Array(i), f = Array(i); u < i; u++)(r = o[u]) && e.isFunction(r.promise) ? r.promise().done(n(u, f, o)).fail(n(u, c, d)) : (s.notifyWith(this, r), --a);
                return a || s.resolveWith(f, o), s.promise()
            },
            function() {
                function n(t, n, r, o) {
                    var i, a, s = e("<form>").attr({
                            action: r,
                            method: "POST",
                            target: o
                        }),
                        u = Ce.antiForgeryTokens();
                    u.fileName = n, i = t.split(";base64,"), u.contentType = i[0].replace("data:", ""), u.base64 = i[1];
                    for (a in u) u.hasOwnProperty(a) && e("<input>").attr({
                        value: u[a],
                        name: a,
                        type: "hidden"
                    }).appendTo(s);
                    s.appendTo("body").submit().remove()
                }

                function r(e, t) {
                    var n, r, o, i, a, s = e;
                    if ("string" == typeof e) {
                        for (n = e.split(";base64,"), r = n[0], o = atob(n[1]), i = new Uint8Array(o.length), a = 0; a < o.length; a++) i[a] = o.charCodeAt(a);
                        s = new Blob([i.buffer], {
                            type: r
                        })
                    }
                    navigator.msSaveBlob(s, t)
                }

                function o(e, n) {
                    t.Blob && e instanceof Blob && (e = URL.createObjectURL(e)), i.download = n, i.href = e;
                    var r = document.createEvent("MouseEvents");
                    r.initMouseEvent("click", !0, !1, t, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), i.dispatchEvent(r), setTimeout(function() {
                        URL.revokeObjectURL(e)
                    })
                }
                var i = document.createElement("a"),
                    a = "download" in i && !Ce.support.browser.edge;
                Ce.saveAs = function(e) {
                    var t = n;
                    e.forceProxy || (a ? t = o : navigator.msSaveBlob && (t = r)), t(e.dataURI, e.fileName, e.proxyURL, e.proxyTarget)
                }
            }(), Ce.proxyModelSetters = function(e) {
                var t = {};
                return Object.keys(e || {}).forEach(function(n) {
                    Object.defineProperty(t, n, {
                        get: function() {
                            return e[n]
                        },
                        set: function(t) {
                            e[n] = t, e.dirty = !0
                        }
                    })
                }), t
            },
            function() {
                Ce.defaults = Ce.defaults || {}, Ce.setDefaults = function(e, t) {
                    var r = e.split("."),
                        o = Ce.defaults;
                    e = r.pop(), r.forEach(function(e) {
                        o[e] === n && (o[e] = {}), o = o[e]
                    }), o[e] = t.constructor === Object ? l({}, o[e], t) : t
                }
            }()
    }(jQuery, window), window.kendo
}, "function" == typeof define && define.amd ? define : function(e, t, n) {
    (n || t)()
});
//# sourceMappingURL=kendo.core.min.js.map;
/** 
 * Kendo UI v2021.1.204 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/
! function(e, define) {
    define("kendo.data.min", ["kendo.core.min", "kendo.data.odata.min", "kendo.data.xml.min"], e)
}(function() {
    return function(e, t) {
        function r(e, t, r, i) {
            return function(n) {
                var a, s = {};
                for (a in n) s[a] = n[a];
                s.field = i ? r + "." + n.field : r, t == Ae && e._notifyChange && e._notifyChange(s), e.trigger(t, s)
            }
        }

        function i(e, t) {
            var r = [];
            for (e = e || {}; e;) Object.getOwnPropertyNames(e).forEach(function(e) {
                r.indexOf(e) === -1 && (!t || nt.indexOf(e) < 0) && r.push(e)
            }), e = Object.getPrototypeOf(e);
            return r
        }

        function n(t, r) {
            if (t === r) return !0;
            var i, a = e.type(t),
                s = e.type(r);
            if (a !== s) return !1;
            if ("date" === a) return t.getTime() === r.getTime();
            if ("object" !== a && "array" !== a) return !1;
            for (i in t)
                if (!n(t[i], r[i])) return !1;
            return !0
        }

        function a(e, t) {
            var r, i;
            for (i in e) {
                if (r = e[i], ve(r) && r.field && r.field === t) return r;
                if (r === t) return r
            }
            return null
        }

        function s(e) {
            this.data = e || []
        }

        function o(e, r) {
            if (e) {
                var i = typeof e === qe ? {
                        field: e,
                        dir: r
                    } : e,
                    n = Se(i) ? i : i !== t ? [i] : [];
                return be(n, function(e) {
                    return !!e.dir
                })
            }
        }

        function u(e, r) {
            var i, n, a, s = {};
            if (e)
                for (i = typeof e === qe ? {
                        field: e,
                        dir: r
                    } : e, n = Se(i) ? i : i !== t ? [i] : [], a = 0; a < n.length; a++) s[n[a].field] = {
                    dir: n[a].dir,
                    index: a + 1
                };
            return s
        }

        function l(e) {
            var t, r, i, n, a = e.filters;
            if (a)
                for (t = 0, r = a.length; t < r; t++) i = a[t], n = i.operator, n && typeof n === qe && (i.operator = ne[n.toLowerCase()] || n), l(i)
        }

        function g(e) {
            if (e && !ye(e)) return !Se(e) && e.filters || (e = {
                logic: "and",
                filters: Se(e) ? e : [e]
            }), l(e), e
        }

        function d(e, t) {
            return !e.logic && !t.logic && (e.field === t.field && e.value === t.value && e.operator === t.operator)
        }

        function h(e) {
            return e = e || {}, ye(e) ? {
                logic: "and",
                filters: []
            } : g(e)
        }

        function f(e, t) {
            return t.logic || e.field > t.field ? 1 : e.field < t.field ? -1 : 0
        }

        function c(e, t) {
            var r, i, n, a, s;
            if (e = h(e), t = h(t), e.logic !== t.logic) return !1;
            if (n = (e.filters || []).slice(), a = (t.filters || []).slice(), n.length !== a.length) return !1;
            for (n = n.sort(f), a = a.sort(f), s = 0; s < n.length; s++)
                if (r = n[s], i = a[s], r.logic && i.logic) {
                    if (!c(r, i)) return !1
                } else if (!d(r, i)) return !1;
            return !0
        }

        function p(e) {
            return Se(e) ? e : [e]
        }

        function _(e, r, i, n) {
            var a = typeof e === qe ? {
                    field: e,
                    dir: r,
                    compare: i,
                    skipItemSorting: n
                } : e,
                s = Se(a) ? a : a !== t ? [a] : [];
            return $(s, function(e) {
                return {
                    field: e.field,
                    dir: e.dir || "asc",
                    aggregates: e.aggregates,
                    compare: e.compare,
                    skipItemSorting: e.skipItemSorting
                }
            })
        }

        function m(e, t, r) {
            var i, n = _(e, t, r);
            for (i = 0; i < n.length; i++) delete n[i].compare;
            return n
        }

        function v(e) {
            var t, r = Se(e) ? e : [e];
            for (t = 0; t < r.length; t++)
                if (r[t] && Fe(r[t].compare)) return !0;
            return !1
        }

        function y(e, t) {
            return e && e.getTime && t && t.getTime ? e.getTime() === t.getTime() : e === t
        }

        function S(e, t, r, i, n, a) {
            var s, o, u, l, g;
            for (t = t || [], l = t.length, s = 0; s < l; s++) o = t[s], u = o.aggregate, g = o.field, e[g] = e[g] || {}, a[g] = a[g] || {}, a[g][u] = a[g][u] || {}, e[g][u] = ae[u.toLowerCase()](e[g][u], r, xe.accessor(g), i, n, a[g][u])
        }

        function b(e) {
            return "number" == typeof e && !isNaN(e)
        }

        function k(e) {
            return e && e.getTime
        }

        function w(e) {
            var t, r = e.length,
                i = Array(r);
            for (t = 0; t < r; t++) i[t] = e[t].toJSON();
            return i
        }

        function P(e, t, r, i, n) {
            var a, s, o, u, l, g = {};
            for (u = 0, l = e.length; u < l; u++) {
                a = e[u];
                for (s in t) o = n[s], o && o !== s && (g[o] || (g[o] = xe.setter(o)), g[o](a, t[s](a)), delete a[s])
            }
        }

        function x(e, t, r, i, n) {
            var a, s, o, u, l;
            for (u = 0, l = e.length; u < l; u++) {
                a = e[u];
                for (s in t) a[s] = r._parse(s, t[s](a)), o = n[s], o && o !== s && delete a[o]
            }
        }

        function F(e, t, r, i, n) {
            var a, s, o, u;
            for (s = 0, u = e.length; s < u; s++) a = e[s], o = i[a.field], o && o != a.field && (a.field = o), a.value = r._parse(a.field, a.value), a.items && (a.hasSubgroups ? F(a.items, t, r, i, n) : x(a.items, t, r, i, n))
        }

        function R(e, t, r, i, n, a) {
            return function(s) {
                return s = e(s), G(t, r, i, n, a)(s)
            }
        }

        function G(e, t, r, i, n) {
            return function(a) {
                return a && !ye(r) && ("[object Array]" === tt.call(a) || a instanceof at || (a = [a]), t(a, r, new e, i, n)), a || []
            }
        }

        function q(e, t) {
            var r, i, n;
            if (t.items && t.items.length)
                for (n = 0; n < t.items.length; n++) r = e.items[n], i = t.items[n], r && i ? r.hasSubgroups ? q(r, i) : r.field && r.value == i.value ? r.items.push.apply(r.items, i.items) : e.items.push.apply(e.items, [i]) : i && e.items.push.apply(e.items, [i])
        }

        function C(e, t, r, i) {
            for (var n, a, s, o = 0; t.length && i && (n = t[o], a = n.items, s = a.length, e && e.field === n.field && e.value === n.value ? (e.hasSubgroups && e.items.length ? C(e.items[e.items.length - 1], n.items, r, i) : (a = a.slice(r, r + i), e.items = e.items.concat(a)), t.splice(o--, 1)) : n.hasSubgroups && a.length ? (C(n, a, r, i), n.items.length || t.splice(o--, 1)) : (a = a.slice(r, r + i), n.items = a, n.items.length || t.splice(o--, 1)), 0 === a.length ? r -= s : (r = 0, i -= a.length), !(++o >= t.length)););
            o < t.length && t.splice(o, t.length - o)
        }

        function O(e, t) {
            var r, i, n, a, s = [],
                o = (e || []).length,
                u = Fe(t) ? t : function(e, t) {
                    return e[t]
                };
            for (n = 0; n < o; n++)
                if (r = u(e, n), r.hasSubgroups) s = s.concat(O(r.items));
                else
                    for (i = r.items, a = 0; a < i.length; a++) s.push(u(i, a));
            return s
        }

        function D(e) {
            var t, r, i, n, a, s = [];
            for (t = 0, r = e.length; t < r; t++)
                if (a = e.at(t), a.items)
                    if (a.hasSubgroups) s = s.concat(D(a.items));
                    else
                        for (i = a.items, n = 0; n < i.length; n++) s.push(i.at(n));
            return s
        }

        function z(e, t) {
            var r, i, n;
            if (t)
                for (r = 0, i = e.length; r < i; r++) n = e.at(r), n.items && (n.hasSubgroups ? z(n.items, t) : n.items = new K(n.items, t, n.items._events))
        }

        function I(e, t) {
            for (var r = 0; r < e.length; r++)
                if (e[r].hasSubgroups) {
                    if (I(e[r].items, t)) return !0
                } else if (t(e[r].items, e[r])) return !0
        }

        function T(e, t, r, i) {
            for (var n = 0; n < e.length && e[n].data !== t && !A(e[n].data, r, i); n++);
        }

        function A(e, t, r) {
            for (var i = 0, n = e.length; i < n; i++) {
                if (e[i] && e[i].hasSubgroups) return A(e[i].items, t, r);
                if (e[i] === t || e[i] === r) return e[i] = r, !0
            }
        }

        function E(e, r, i, n, a) {
            var s, o, u, l;
            for (s = 0, o = e.length; s < o; s++)
                if (u = e[s], u && !(u instanceof n))
                    if (u.hasSubgroups === t || a) {
                        for (l = 0; l < r.length; l++)
                            if (r[l] === u) {
                                e[s] = r.at(l), T(i, r, u, e[s]);
                                break
                            }
                    } else E(u.items, r, i, n, a)
        }

        function M(e, t) {
            var r, i, n;
            if (e)
                for (r = e.length, n = 0; n < r; n++)
                    if (i = e[n], i.uid && i.uid == t.uid) return e.splice(n, 1), i
        }

        function N(e, t) {
            return t ? j(e, function(e) {
                return e.uid && e.uid == t.uid || e[t.idField] === t.id && t.id !== t._defaultId
            }) : -1
        }

        function L(e, t) {
            return t ? j(e, function(e) {
                return e.uid == t.uid
            }) : -1
        }

        function j(e, t) {
            var r, i;
            if (e) {
                for (r = 0, i = e.length; r < i; r++)
                    if (t(e[r])) return r;
                return -1
            }
        }

        function B(e, t) {
            var r, i;
            return e && !ye(e) ? (r = e[t], i = ve(r) ? r.from || r.field || t : e[t] || t, Fe(i) ? t : i) : t
        }

        function H(e, t) {
            var r, i, n, a = {};
            for (n in e) "filters" !== n && (a[n] = e[n]);
            if (e.filters)
                for (a.filters = [], r = 0, i = e.filters.length; r < i; r++) a.filters[r] = H(e.filters[r], t);
            else a.field = B(t.fields, a.field);
            return a
        }

        function U(e, t) {
            var r, i, n, a, s, o = [];
            for (r = 0, i = e.length; r < i; r++) {
                n = {}, a = e[r];
                for (s in a) n[s] = a[s];
                n.field = B(t.fields, n.field), n.aggregates && Se(n.aggregates) && (n.aggregates = U(n.aggregates, t)), o.push(n)
            }
            return o
        }

        function J(t, r) {
            var i, n, a, s, o, u, l, g, d, h;
            for (t = e(t)[0], i = t.options, n = r[0], a = r[1], s = [], o = 0, u = i.length; o < u; o++) d = {}, g = i[o], l = g.parentNode, l === t && (l = null), g.disabled || l && l.disabled || (l && (d.optgroup = l.label), d[n.field] = g.text, h = g.attributes.value, h = h && h.specified ? g.value : g.text, d[a.field] = h, s.push(d));
            return s
        }

        function V(t, r) {
            var i, n, a, s, o, u, l, g = e(t)[0].tBodies[0],
                d = g ? g.rows : [],
                h = r.length,
                f = [];
            for (i = 0, n = d.length; i < n; i++) {
                for (o = {}, l = !0, s = d[i].cells, a = 0; a < h; a++) u = s[a], "th" !== u.nodeName.toLowerCase() && (l = !1, o[r[a].field] = u.innerHTML);
                l || f.push(o)
            }
            return f
        }

        function Q(e) {
            return function() {
                var t = this._data,
                    r = ge.fn[e].apply(this, Ze.call(arguments));
                return this._data != t && this._attachBubbleHandlers(), r
            }
        }

        function W(t, r) {
            function i(e, t) {
                return e.filter(t).add(e.find(t))
            }
            var n, a, s, o, u, l, g, d, h = e(t).children(),
                f = [],
                c = r[0].field,
                p = r[1] && r[1].field,
                _ = r[2] && r[2].field,
                m = r[3] && r[3].field;
            for (n = 0, a = h.length; n < a; n++) s = {
                _loaded: !0
            }, o = h.eq(n), l = o[0].firstChild, d = o.children(), t = d.filter("ul"), d = d.filter(":not(ul)"), u = o.attr("data-id"), u && (s.id = u), l && (s[c] = 3 == l.nodeType ? l.nodeValue : d.text()), p && (s[p] = i(d, "a").attr("href")), m && (s[m] = i(d, "img").attr("src")), _ && (g = i(d, ".k-sprite").prop("className"), s[_] = g && xe.trim(g.replace("k-sprite", ""))), t.length && (s.items = W(t.eq(0), r)), "true" == o.attr("data-hasChildren") && (s.hasChildren = !0), f.push(s);
            return f
        }
        var $, K, X, Y, Z, ee, te, re, ie, ne, ae, se, oe, ue, le, ge, de, he, fe, ce, pe, _e = e.extend,
            me = e.proxy,
            ve = e.isPlainObject,
            ye = e.isEmptyObject,
            Se = e.isArray,
            be = e.grep,
            ke = e.ajax,
            we = e.each,
            Pe = e.noop,
            xe = window.kendo,
            Fe = xe.isFunction,
            Re = xe.Observable,
            Ge = xe.Class,
            qe = "string",
            Ce = "function",
            Oe = "asc",
            De = "create",
            ze = "read",
            Ie = "update",
            Te = "destroy",
            Ae = "change",
            Ee = "sync",
            Me = "get",
            Ne = "error",
            Le = "requestStart",
            je = "progress",
            Be = "requestEnd",
            He = [De, ze, Ie, Te],
            Ue = function(e) {
                return e
            },
            Je = xe.getter,
            Ve = xe.stringify,
            Qe = Math,
            We = [].push,
            $e = [].join,
            Ke = [].pop,
            Xe = [].splice,
            Ye = [].shift,
            Ze = [].slice,
            et = [].unshift,
            tt = {}.toString,
            rt = xe.support.stableSort,
            it = /^\/Date\((.*?)\)\/$/,
            nt = [],
            at = Re.extend({
                init: function(e, t) {
                    var r = this;
                    r.type = t || X, Re.fn.init.call(r), r.length = e.length, r.wrapAll(e, r)
                },
                at: function(e) {
                    return this[e]
                },
                toJSON: function(e) {
                    var t, r, i = this.length,
                        n = Array(i);
                    for (t = 0; t < i; t++) r = this[t], r instanceof X && (r = r.toJSON(e)), n[t] = r;
                    return n
                },
                parent: Pe,
                wrapAll: function(e, t) {
                    var r, i, n = this,
                        a = function() {
                            return n
                        };
                    for (t = t || [], r = 0, i = e.length; r < i; r++) t[r] = n.wrap(e[r], a);
                    return t
                },
                wrap: function(e, t) {
                    var r, i = this;
                    return null !== e && "[object Object]" === tt.call(e) && (r = e instanceof i.type || e instanceof ee, r || (e = e instanceof X ? e.toJSON() : e, e = new i.type(e)), e.parent = t, e.bind(Ae, function(e) {
                        i.trigger(Ae, {
                            field: e.field,
                            node: e.node,
                            index: e.index,
                            items: e.items || [this],
                            action: e.node ? e.action || "itemloaded" : "itemchange"
                        })
                    })), e
                },
                push: function() {
                    var e, t = this.length,
                        r = this.wrapAll(arguments);
                    return e = We.apply(this, r), this.omitChangeEvent || this.trigger(Ae, {
                        action: "add",
                        index: t,
                        items: r
                    }), e
                },
                slice: Ze,
                sort: [].sort,
                join: $e,
                pop: function() {
                    var e = this.length,
                        t = Ke.apply(this);
                    return e && this.trigger(Ae, {
                        action: "remove",
                        index: e - 1,
                        items: [t]
                    }), t
                },
                splice: function(e, t, r) {
                    var i, n, a, s = this.wrapAll(Ze.call(arguments, 2));
                    if (i = Xe.apply(this, [e, t].concat(s)), i.length)
                        for (this.omitChangeEvent || this.trigger(Ae, {
                                action: "remove",
                                index: e,
                                items: i
                            }), n = 0, a = i.length; n < a; n++) i[n] && i[n].children && i[n].unbind(Ae);
                    return r && (this.omitChangeEvent || this.trigger(Ae, {
                        action: "add",
                        index: e,
                        items: s
                    })), i
                },
                shift: function() {
                    var e = this.length,
                        t = Ye.apply(this);
                    return e && this.trigger(Ae, {
                        action: "remove",
                        index: 0,
                        items: [t]
                    }), t
                },
                unshift: function() {
                    var e, t = this.wrapAll(arguments);
                    return e = et.apply(this, t), this.trigger(Ae, {
                        action: "add",
                        index: 0,
                        items: t
                    }), e
                },
                indexOf: function(e) {
                    var t, r, i = this;
                    for (t = 0, r = i.length; t < r; t++)
                        if (i[t] === e) return t;
                    return -1
                },
                forEach: function(e, t) {
                    for (var r = 0, i = this.length, n = t || window; r < i; r++) e.call(n, this[r], r, this)
                },
                map: function(e, t) {
                    for (var r = 0, i = [], n = this.length, a = t || window; r < n; r++) i[r] = e.call(a, this[r], r, this);
                    return i
                },
                reduce: function(e) {
                    var t, r = 0,
                        i = this.length;
                    for (2 == arguments.length ? t = arguments[1] : r < i && (t = this[r++]); r < i; r++) t = e(t, this[r], r, this);
                    return t
                },
                reduceRight: function(e) {
                    var t, r = this.length - 1;
                    for (2 == arguments.length ? t = arguments[1] : r > 0 && (t = this[r--]); r >= 0; r--) t = e(t, this[r], r, this);
                    return t
                },
                filter: function(e, t) {
                    for (var r, i = 0, n = [], a = this.length, s = t || window; i < a; i++) r = this[i], e.call(s, r, i, this) && (n[n.length] = r);
                    return n
                },
                find: function(e, t) {
                    for (var r, i = 0, n = this.length, a = t || window; i < n; i++)
                        if (r = this[i], e.call(a, r, i, this)) return r
                },
                every: function(e, t) {
                    for (var r, i = 0, n = this.length, a = t || window; i < n; i++)
                        if (r = this[i], !e.call(a, r, i, this)) return !1;
                    return !0
                },
                some: function(e, t) {
                    for (var r, i = 0, n = this.length, a = t || window; i < n; i++)
                        if (r = this[i], e.call(a, r, i, this)) return !0;
                    return !1
                },
                remove: function(e) {
                    var t = this.indexOf(e);
                    t !== -1 && this.splice(t, 1)
                },
                empty: function() {
                    this.splice(0, this.length)
                }
            });
        "undefined" != typeof Symbol && Symbol.iterator && !at.prototype[Symbol.iterator] && (at.prototype[Symbol.iterator] = [][Symbol.iterator]), K = at.extend({
            init: function(e, t, r) {
                Re.fn.init.call(this), this.type = t || X, r && (this._events = r);
                for (var i = 0; i < e.length; i++) this[i] = e[i];
                this.length = i, this._parent = me(function() {
                    return this
                }, this)
            },
            at: function(e) {
                var t = this[e];
                return t instanceof this.type ? t.parent = this._parent : t = this[e] = this.wrap(t, this._parent), t
            }
        }), nt = i({}, !1), X = Re.extend({
            init: function(e) {
                var t, r = this,
                    n = i(e, !0),
                    a = function() {
                        return r
                    };
                Re.fn.init.call(this), this._handlers = {}, n.forEach(function(i) {
                    t = e[i], "object" == typeof t && t && !t.getTime && "_" != i.charAt(0) && (t = r.wrap(t, i, a)), r[i] = t
                }), r.uid = xe.guid()
            },
            shouldSerialize: function(e, t) {
                return this.hasOwnProperty(e) && "_handlers" !== e && "_events" !== e && (t && t[e] || typeof this[e] !== Ce) && "uid" !== e
            },
            forEach: function(e) {
                for (var t in this) this.shouldSerialize(t) && e(this[t], t)
            },
            toJSON: function(e) {
                var t, r, i = {};
                for (r in this) this.shouldSerialize(r, e) && (t = this[r], (t instanceof X || t instanceof at) && (t = t.toJSON(e)), i[r] = t);
                return i
            },
            get: function(e) {
                var t, r = this;
                return r.trigger(Me, {
                    field: e
                }), t = "this" === e ? r : xe.getter(e, !0)(r)
            },
            _set: function(e, t) {
                var r, i, n, a = this,
                    s = e.indexOf(".") >= 0;
                if (s)
                    for (r = e.split("."), i = ""; r.length > 1;) {
                        if (i += r.shift(), n = xe.getter(i, !0)(a), n instanceof X) return n.set(r.join("."), t), s;
                        i += "."
                    }
                return xe.setter(e)(a, t), s
            },
            set: function(e, t) {
                var r = this,
                    i = !1,
                    n = e.indexOf(".") >= 0,
                    a = xe.getter(e, !0)(r);
                return a !== t && (a instanceof Re && this._handlers[e] && (this._handlers[e].get && a.unbind(Me, this._handlers[e].get), a.unbind(Ae, this._handlers[e].change)), i = r.trigger("set", {
                    field: e,
                    value: t
                }), i || (n || (t = r.wrap(t, e, function() {
                    return r
                })), (!r._set(e, t) || e.indexOf("(") >= 0 || e.indexOf("[") >= 0) && r.trigger(Ae, {
                    field: e
                }))), i
            },
            parent: Pe,
            wrap: function(e, t, i) {
                var n, a, s, o, u = this,
                    l = tt.call(e);
                return null == e || "[object Object]" !== l && "[object Array]" !== l || (s = e instanceof at, o = e instanceof ge, "[object Object]" !== l || o || s ? ("[object Array]" === l || s || o) && (s || o || (e = new at(e)), a = r(u, Ae, t, !1), e.bind(Ae, a), u._handlers[t] = {
                    change: a
                }) : (e instanceof X || (e = new X(e)), n = r(u, Me, t, !0), e.bind(Me, n), a = r(u, Ae, t, !0), e.bind(Ae, a), u._handlers[t] = {
                    get: n,
                    change: a
                }), e.parent = i), e
            }
        }), Y = {
            number: function(e) {
                return typeof e === qe && "null" === e.toLowerCase() ? null : xe.parseFloat(e)
            },
            date: function(e) {
                return typeof e === qe && "null" === e.toLowerCase() ? null : xe.parseDate(e)
            },
            "boolean": function(e) {
                return typeof e === qe ? "null" === e.toLowerCase() ? null : "true" === e.toLowerCase() : null != e ? !!e : e
            },
            string: function(e) {
                return typeof e === qe && "null" === e.toLowerCase() ? null : null != e ? e + "" : e
            },
            "default": function(e) {
                return e
            }
        }, Z = {
            string: "",
            number: 0,
            date: new Date,
            "boolean": !1,
            "default": ""
        }, ee = X.extend({
            init: function(r) {
                var i, n, a = this;
                if ((!r || e.isEmptyObject(r)) && (r = e.extend({}, a.defaults, r), a._initializers))
                    for (i = 0; i < a._initializers.length; i++) n = a._initializers[i], r[n] = a.defaults[n]();
                X.fn.init.call(a, r), a.dirty = !1, a.dirtyFields = {}, a.idField && (a.id = a.get(a.idField), a.id === t && (a.id = a._defaultId))
            },
            shouldSerialize: function(e) {
                return X.fn.shouldSerialize.call(this, e) && "uid" !== e && !("id" !== this.idField && "id" === e) && "dirty" !== e && "dirtyFields" !== e && "_accessors" !== e
            },
            _parse: function(e, t) {
                var r, i = this,
                    n = e,
                    s = i.fields || {};
                return e = s[e], e || (e = a(s, n)), e && (r = e.parse, !r && e.type && (r = Y[e.type.toLowerCase()])), r ? r(t) : t
            },
            _notifyChange: function(e) {
                var t = e.action;
                "add" != t && "remove" != t || (this.dirty = !0, this.dirtyFields[e.field] = !0)
            },
            editable: function(e) {
                return e = (this.fields || {})[e], !e || e.editable !== !1
            },
            set: function(e, t) {
                var r = this,
                    i = r.dirty;
                r.editable(e) && (t = r._parse(e, t), n(t, r.get(e)) ? r.trigger("equalSet", {
                    field: e,
                    value: t
                }) : (r.dirty = !0, r.dirtyFields[e] = !0, X.fn.set.call(r, e, t) && !i && (r.dirty = i, r.dirty || (r.dirtyFields[e] = !1))))
            },
            accept: function(e) {
                var t, r, i = this,
                    n = function() {
                        return i
                    };
                for (t in e) r = e[t], "_" != t.charAt(0) && (r = i.wrap(e[t], t, n)), i._set(t, r);
                i.idField && (i.id = i.get(i.idField)), i.dirty = !1, i.dirtyFields = {}
            },
            isNew: function() {
                return this.id === this._defaultId
            }
        }), ee.define = function(e, r) {
            r === t && (r = e, e = ee);
            var i, n, a, s, o, u, l, g, d = _e({
                    defaults: {}
                }, r),
                h = {},
                f = d.id,
                c = [];
            if (f && (d.idField = f), d.id && delete d.id, f && (d.defaults[f] = d._defaultId = ""), "[object Array]" === tt.call(d.fields)) {
                for (u = 0, l = d.fields.length; u < l; u++) a = d.fields[u], typeof a === qe ? h[a] = {} : a.field && (h[a.field] = a);
                d.fields = h
            }
            for (n in d.fields) a = d.fields[n], s = a.type || "default", o = null, g = n, n = typeof a.field === qe ? a.field : n, a.nullable || (o = d.defaults[g !== n ? g : n] = a.defaultValue !== t ? a.defaultValue : Z[s.toLowerCase()], "function" == typeof o && c.push(n)), r.id === n && (d._defaultId = o), d.defaults[g !== n ? g : n] = o, a.parse = a.parse || Y[s];
            return c.length > 0 && (d._initializers = c), i = e.extend(d), i.define = function(e) {
                return ee.define(i, e)
            }, d.fields && (i.fields = d.fields, i.idField = d.idField), i
        }, te = {
            selector: function(e) {
                return Fe(e) ? e : Je(e)
            },
            compare: function(e) {
                var t = this.selector(e);
                return function(e, r) {
                    return e = t(e), r = t(r), null == e && null == r ? 0 : null == e ? -1 : null == r ? 1 : e.localeCompare ? e.localeCompare(r) : e > r ? 1 : e < r ? -1 : 0
                }
            },
            create: function(e) {
                var t = e.compare || this.compare(e.field);
                return "desc" == e.dir ? function(e, r) {
                    return t(r, e, !0)
                } : t
            },
            combine: function(e) {
                return function(t, r) {
                    var i, n, a = e[0](t, r);
                    for (i = 1, n = e.length; i < n; i++) a = a || e[i](t, r);
                    return a
                }
            }
        }, re = _e({}, te, {
            asc: function(e) {
                var t = this.selector(e);
                return function(e, r) {
                    var i = t(e),
                        n = t(r);
                    return i && i.getTime && n && n.getTime && (i = i.getTime(), n = n.getTime()), i === n ? e.__position - r.__position : null == i ? -1 : null == n ? 1 : i.localeCompare ? i.localeCompare(n) : i > n ? 1 : -1
                }
            },
            desc: function(e) {
                var t = this.selector(e);
                return function(e, r) {
                    var i = t(e),
                        n = t(r);
                    return i && i.getTime && n && n.getTime && (i = i.getTime(), n = n.getTime()), i === n ? e.__position - r.__position : null == i ? 1 : null == n ? -1 : n.localeCompare ? n.localeCompare(i) : i < n ? 1 : -1
                }
            },
            create: function(e) {
                return this[e.dir](e.field)
            }
        }), $ = function(e, t) {
            var r, i = e.length,
                n = Array(i);
            for (r = 0; r < i; r++) n[r] = t(e[r], r, e);
            return n
        }, ie = function() {
            function e(e) {
                return "string" == typeof e && (e = e.replace(/[\r\n]+/g, "")), JSON.stringify(e)
            }

            function t(t) {
                return function(r, i, n, a) {
                    return i += "", n && (r = "(" + r + " + '').toString()" + (a ? ".toLocaleLowerCase('" + a + "')" : ".toLowerCase()"), i = a ? i.toLocaleLowerCase(a) : i.toLowerCase()), t(r, e(i), n)
                }
            }

            function r(t, r, i, n, a) {
                if (null != i) {
                    if (typeof i === qe) {
                        var s = it.exec(i);
                        s ? i = new Date((+s[1])) : n ? (i = e(a ? i.toLocaleLowerCase(a) : i.toLowerCase()), r = "((" + r + " || '')+'')" + (a ? ".toLocaleLowerCase('" + a + "')" : ".toLowerCase()")) : i = e(i)
                    }
                    i.getTime && (r = "(" + r + "&&" + r + ".getTime?" + r + ".getTime():" + r + ")", i = i.getTime())
                }
                return r + " " + t + " " + i
            }

            function i(e) {
                var t, r, i, n;
                for (t = "/^", r = !1, i = 0; i < e.length; ++i) {
                    if (n = e.charAt(i), r) t += "\\" + n;
                    else {
                        if ("~" == n) {
                            r = !0;
                            continue
                        }
                        t += "*" == n ? ".*" : "?" == n ? "." : ".+^$()[]{}|\\/\n\r\u2028\u2029 ".indexOf(n) >= 0 ? "\\" + n : n
                    }
                    r = !1
                }
                return t + "$/"
            }
            return {
                quote: function(t) {
                    return t && t.getTime ? "new Date(" + t.getTime() + ")" : e(t)
                },
                eq: function(e, t, i, n) {
                    return r("==", e, t, i, n)
                },
                neq: function(e, t, i, n) {
                    return r("!=", e, t, i, n)
                },
                gt: function(e, t, i) {
                    return r(">", e, t, i)
                },
                gte: function(e, t, i) {
                    return r(">=", e, t, i)
                },
                lt: function(e, t, i) {
                    return r("<", e, t, i)
                },
                lte: function(e, t, i) {
                    return r("<=", e, t, i)
                },
                startswith: t(function(e, t) {
                    return e + ".lastIndexOf(" + t + ", 0) == 0"
                }),
                doesnotstartwith: t(function(e, t) {
                    return e + ".lastIndexOf(" + t + ", 0) == -1"
                }),
                endswith: t(function(e, t) {
                    var r = t ? t.length - 2 : 0;
                    return e + ".indexOf(" + t + ", " + e + ".length - " + r + ") >= 0"
                }),
                doesnotendwith: t(function(e, t) {
                    var r = t ? t.length - 2 : 0;
                    return e + ".indexOf(" + t + ", " + e + ".length - " + r + ") < 0"
                }),
                contains: t(function(e, t) {
                    return e + ".indexOf(" + t + ") >= 0"
                }),
                doesnotcontain: t(function(e, t) {
                    return e + ".indexOf(" + t + ") == -1"
                }),
                matches: t(function(e, t) {
                    return t = t.substring(1, t.length - 1), i(t) + ".test(" + e + ")"
                }),
                doesnotmatch: t(function(e, t) {
                    return t = t.substring(1, t.length - 1), "!" + i(t) + ".test(" + e + ")"
                }),
                isempty: function(e) {
                    return e + " === ''"
                },
                isnotempty: function(e) {
                    return e + " !== ''"
                },
                isnull: function(e) {
                    return "(" + e + " == null)"
                },
                isnotnull: function(e) {
                    return "(" + e + " != null)"
                },
                isnullorempty: function(e) {
                    return "(" + e + " === null) || (" + e + " === '')"
                },
                isnotnullorempty: function(e) {
                    return "(" + e + " !== null) && (" + e + " !== '')"
                }
            }
        }(), s.filterExpr = function(e) {
            var r, i, n, a, o, u, l = [],
                g = {
                    and: " && ",
                    or: " || "
                },
                d = [],
                h = [],
                f = e.filters;
            for (r = 0, i = f.length; r < i; r++) n = f[r], o = n.field, u = n.operator, n.filters ? (a = s.filterExpr(n), n = a.expression.replace(/__o\[(\d+)\]/g, function(e, t) {
                return t = +t, "__o[" + (h.length + t) + "]"
            }).replace(/__f\[(\d+)\]/g, function(e, t) {
                return t = +t, "__f[" + (d.length + t) + "]"
            }), h.push.apply(h, a.operators), d.push.apply(d, a.fields)) : (typeof o === Ce ? (a = "__f[" + d.length + "](d)", d.push(o)) : a = xe.expr(o), typeof u === Ce ? (n = "__o[" + h.length + "](" + a + ", " + ie.quote(n.value) + ")", h.push(u)) : n = ie[(u || "eq").toLowerCase()](a, n.value, n.ignoreCase === t || n.ignoreCase, e.accentFoldingFiltering)), l.push(n);
            return {
                expression: "(" + l.join(g[e.logic]) + ")",
                fields: d,
                operators: h
            }
        }, ne = {
            "==": "eq",
            equals: "eq",
            isequalto: "eq",
            equalto: "eq",
            equal: "eq",
            "!=": "neq",
            ne: "neq",
            notequals: "neq",
            isnotequalto: "neq",
            notequalto: "neq",
            notequal: "neq",
            "<": "lt",
            islessthan: "lt",
            lessthan: "lt",
            less: "lt",
            "<=": "lte",
            le: "lte",
            islessthanorequalto: "lte",
            lessthanequal: "lte",
            ">": "gt",
            isgreaterthan: "gt",
            greaterthan: "gt",
            greater: "gt",
            ">=": "gte",
            isgreaterthanorequalto: "gte",
            greaterthanequal: "gte",
            ge: "gte",
            notsubstringof: "doesnotcontain",
            isnull: "isnull",
            isempty: "isempty",
            isnotempty: "isnotempty"
        }, s.normalizeFilter = g, s.compareFilters = c, s.prototype = {
            toArray: function() {
                return this.data
            },
            range: function(e, t) {
                return new s(this.data.slice(e, e + t))
            },
            skip: function(e) {
                return new s(this.data.slice(e))
            },
            take: function(e) {
                return new s(this.data.slice(0, e))
            },
            select: function(e) {
                return new s($(this.data, e))
            },
            order: function(e, t, r) {
                var i = {
                    dir: t
                };
                return e && (e.compare ? i.compare = e.compare : i.field = e), new s(r ? this.data.sort(te.create(i)) : this.data.slice(0).sort(te.create(i)))
            },
            orderBy: function(e, t) {
                return this.order(e, "asc", t)
            },
            orderByDescending: function(e, t) {
                return this.order(e, "desc", t)
            },
            sort: function(e, t, r, i) {
                var n, a, s = o(e, t),
                    u = [];
                if (r = r || te, s.length) {
                    for (n = 0, a = s.length; n < a; n++) u.push(r.create(s[n]));
                    return this.orderBy({
                        compare: r.combine(u)
                    }, i)
                }
                return this
            },
            filter: function(e) {
                var t, r, i, n, a, o, u, l, d = this.data,
                    h = [];
                if (e = g(e), !e || 0 === e.filters.length) return this;
                for (n = s.filterExpr(e), o = n.fields, u = n.operators, a = l = Function("d, __f, __o", "return " + n.expression), (o.length || u.length) && (l = function(e) {
                        return a(e, o, u)
                    }), t = 0, i = d.length; t < i; t++) r = d[t], l(r) && h.push(r);
                return new s(h)
            },
            group: function(e, t, r) {
                e = _(e || []), t = t || this.data;
                var i, n = this,
                    a = new s(n.data);
                return e.length > 0 && (i = e[0], a = r && r.groupPaging ? new s(t).groupAllData(i, t).select(function(n) {
                    var a = new s(t).filter([{
                            field: n.field,
                            operator: "eq",
                            value: n.value,
                            ignoreCase: !1
                        }]),
                        o = e.length > 1 ? new s(n.items).group(e.slice(1), a.toArray(), r).toArray() : n.items;
                    return {
                        field: n.field,
                        value: n.value,
                        hasSubgroups: e.length > 1,
                        items: o,
                        aggregates: a.aggregate(i.aggregates),
                        uid: xe.guid(),
                        itemCount: o.length,
                        subgroupCount: o.length
                    }
                }) : a.groupBy(i).select(function(r) {
                    var n = new s(t).filter([{
                        field: r.field,
                        operator: "eq",
                        value: r.value,
                        ignoreCase: !1
                    }]);
                    return {
                        field: r.field,
                        value: r.value,
                        items: e.length > 1 ? new s(r.items).group(e.slice(1), n.toArray()).toArray() : r.items,
                        hasSubgroups: e.length > 1,
                        aggregates: n.aggregate(i.aggregates)
                    }
                })), a
            },
            groupBy: function(e) {
                var t, r, i, n, a, o, u, l, g, d, h = this;
                if (ye(e) || !this.data.length) return new s([]);
                for (t = e.field, r = e.skipItemSorting ? this.data : this._sortForGrouping(t, e.dir || "asc"), i = xe.accessor(t), a = i.get(r[0], t), o = {
                        field: t,
                        value: a,
                        items: []
                    }, d = [o], l = 0, g = r.length; l < g; l++) n = r[l], u = i.get(n, t), y(a, u) || (a = u, o = {
                    field: t,
                    value: a,
                    items: []
                }, d.push(o)), o.items.push(n);
                return d = h._sortGroups(d, e), new s(d)
            },
            groupAllData: function(e, t) {
                if (ye(e) || this.data && !this.data.length) return new s([]);
                var r, i, n, a, o = e.field,
                    u = e.skipItemSorting ? t : new s(t).sort(o, e.dir || "asc", re).toArray(),
                    l = xe.accessor(o),
                    g = l.get(u[0], o),
                    d = {
                        field: o,
                        value: g,
                        items: []
                    },
                    h = [d];
                for (n = 0, a = u.length; n < a; n++) r = u[n], i = l.get(r, o), y(g, i) || (g = i, d = {
                    field: o,
                    value: g,
                    items: []
                }, h.push(d)), d.items.push(r);
                return h = this._sortGroups(h, e), new s(h)
            },
            _sortForGrouping: function(e, t) {
                var r, i, n = this.data;
                if (!rt) {
                    for (r = 0, i = n.length; r < i; r++) n[r].__position = r;
                    for (n = new s(n).sort(e, t, re).toArray(), r = 0, i = n.length; r < i; r++) delete n[r].__position;
                    return n
                }
                return this.sort(e, t).toArray()
            },
            _sortGroups: function(e, t) {
                var r = e;
                return t && Fe(t.compare) && (r = new s(r).order({
                    compare: t.compare
                }, t.dir || Oe).toArray()), r
            },
            aggregate: function(e) {
                var t, r, i = {},
                    n = {};
                if (e && e.length)
                    for (t = 0, r = this.data.length; t < r; t++) S(i, e, this.data[t], t, r, n);
                return i
            }
        }, ae = {
            sum: function(e, t, r) {
                var i = r.get(t);
                return b(e) ? b(i) && (e += i) : e = i, e
            },
            count: function(e) {
                return (e || 0) + 1
            },
            average: function(e, r, i, n, a, s) {
                var o = i.get(r);
                return s.count === t && (s.count = 0), b(e) ? b(o) && (e += o) : e = o, b(o) && s.count++, n == a - 1 && b(e) && (e /= s.count), e
            },
            max: function(e, t, r) {
                var i = r.get(t);
                return b(e) || k(e) || (e = i), e < i && (b(i) || k(i)) && (e = i), e
            },
            min: function(e, t, r) {
                var i = r.get(t);
                return b(e) || k(e) || (e = i), e > i && (b(i) || k(i)) && (e = i), e
            }
        }, s.normalizeGroup = _, s.normalizeSort = o, s.process = function(e, r, i) {
            var n, a, u, l, g, d, h, f, c, p, y, S;
            return r = r || {}, n = r.group, a = v(_(n || [])), u = new s(e), l = m(n || []), g = o(r.sort || []), d = a ? g : l.concat(g), c = r.filterCallback, p = r.filter, y = r.skip, S = r.take, d && i && (u = u.sort(d, t, t, i)), p && (u = u.filter(p), c && (u = c(u)), f = u.toArray().length), d && (i || (u = u.sort(d)), n && (e = u.toArray())), a ? (u = u.group(n, e, r), y !== t && S !== t && (u = new s(O(u.toArray())).range(y, S), h = $(l, function(e) {
                return _e({}, e, {
                    skipItemSorting: !0
                })
            }), u = u.group(h, e, r))) : (y !== t && S !== t && (u = u.range(y, S)), n && (u = u.group(n, e, r))), {
                total: f,
                data: u.toArray()
            }
        }, se = Ge.extend({
            init: function(e) {
                this.data = e.data
            },
            read: function(e) {
                e.success(this.data)
            },
            update: function(e) {
                e.success(e.data)
            },
            create: function(e) {
                e.success(e.data)
            },
            destroy: function(e) {
                e.success(e.data)
            }
        }), oe = Ge.extend({
            init: function(e) {
                var t, r = this;
                e = r.options = _e({}, r.options, e), we(He, function(t, r) {
                    typeof e[r] === qe && (e[r] = {
                        url: e[r]
                    })
                }), r.cache = e.cache ? ue.create(e.cache) : {
                    find: Pe,
                    add: Pe
                }, t = e.parameterMap, e.submit && (r.submit = e.submit), Fe(e.push) && (r.push = e.push), r.push || (r.push = Ue), r.parameterMap = Fe(t) ? t : function(e) {
                    var r = {};
                    return we(e, function(e, i) {
                        e in t && (e = t[e], ve(e) && (i = e.value(i), e = e.key)), r[e] = i
                    }), r
                }
            },
            options: {
                parameterMap: Ue
            },
            create: function(e) {
                return ke(this.setup(e, De))
            },
            read: function(r) {
                var i, n, a, s = this,
                    o = s.cache;
                r = s.setup(r, ze), i = r.success || Pe, n = r.error || Pe, a = o.find(r.data), a !== t ? i(a) : (r.success = function(e) {
                    o.add(r.data, e), i(e)
                }, e.ajax(r))
            },
            update: function(e) {
                return ke(this.setup(e, Ie))
            },
            destroy: function(e) {
                return ke(this.setup(e, Te))
            },
            setup: function(e, t) {
                e = e || {};
                var r, i = this,
                    n = i.options[t],
                    a = Fe(n.data) ? n.data(e.data) : n.data;
                return e = _e(!0, {}, n, e), r = _e(!0, {}, a, e.data), e.data = i.parameterMap(r, t), Fe(e.url) && (e.url = e.url(r)), e
            }
        }), ue = Ge.extend({
            init: function() {
                this._store = {}
            },
            add: function(e, r) {
                e !== t && (this._store[Ve(e)] = r)
            },
            find: function(e) {
                return this._store[Ve(e)]
            },
            clear: function() {
                this._store = {}
            },
            remove: function(e) {
                delete this._store[Ve(e)]
            }
        }), ue.create = function(e) {
            var t = {
                inmemory: function() {
                    return new ue
                }
            };
            return ve(e) && Fe(e.find) ? e : e === !0 ? new ue : t[e]()
        }, le = Ge.extend({
            init: function(e) {
                var t, r, i, n, a, s, o, u, l, g, d, h, f, c, p = this;
                e = e || {};
                for (t in e) r = e[t], p[t] = typeof r === qe ? Je(r) : r;
                n = e.modelBase || ee, ve(p.model) && (p.model = i = n.define(p.model)), a = me(p.data, p), p._dataAccessFunction = a, p.model && (s = me(p.groups, p), o = me(p.serialize, p), u = {}, l = {}, g = {}, d = {}, h = !1, i = p.model, i.fields && (we(i.fields, function(e, t) {
                    var r;
                    f = e, ve(t) && t.field ? f = t.field : typeof t === qe && (f = t), ve(t) && t.from && (r = t.from), h = h || r && r !== e || f !== e, c = r || f, l[e] = c.indexOf(".") !== -1 ? Je(c, !0) : Je(c), g[e] = Je(e), u[r || f] = e, d[e] = r || f
                }), !e.serialize && h && (p.serialize = R(o, i, P, g, u, d))), p._dataAccessFunction = a, p._wrapDataAccessBase = G(i, x, l, u, d), p.data = R(a, i, x, l, u, d), p.groups = R(s, i, F, l, u, d))
            },
            errors: function(e) {
                return e ? e.errors : null
            },
            parse: Ue,
            data: Ue,
            total: function(e) {
                return e.length
            },
            groups: Ue,
            aggregates: function() {
                return {}
            },
            serialize: function(e) {
                return e
            }
        }), ge = Re.extend({
            init: function(e) {
                var r, i, n, a = this;
                e && (i = e.data), e = a.options = _e({}, a.options, e), a._map = {}, a._prefetch = {}, a._data = [], a._pristineData = [], a._ranges = [], a._view = [], a._pristineTotal = 0, a._destroyed = [], a._pageSize = e.pageSize, a._page = e.page || (e.pageSize ? 1 : t), a._sort = o(e.sort), a._sortFields = u(e.sort), a._filter = g(e.filter), a._group = _(e.group), a._aggregate = e.aggregate, a._total = e.total, a._groupPaging = e.groupPaging, a._groupPaging && (a._groupsState = {}), a._shouldDetachObservableParents = !0, Re.fn.init.call(a), a.transport = de.create(e, i, a), Fe(a.transport.push) && a.transport.push({
                    pushCreate: me(a._pushCreate, a),
                    pushUpdate: me(a._pushUpdate, a),
                    pushDestroy: me(a._pushDestroy, a)
                }), null != e.offlineStorage && ("string" == typeof e.offlineStorage ? (n = e.offlineStorage, a._storage = {
                    getItem: function() {
                        return JSON.parse(localStorage.getItem(n))
                    },
                    setItem: function(e) {
                        localStorage.setItem(n, Ve(a.reader.serialize(e)))
                    }
                }) : a._storage = e.offlineStorage), a.reader = new xe.data.readers[e.schema.type || "json"](e.schema), r = a.reader.model || {}, a._detachObservableParents(), a._data = a._observe(a._data), a._online = !0, a.bind(["push", Ne, Ae, Le, Ee, Be, je], e)
            },
            options: {
                data: null,
                schema: {
                    modelBase: ee
                },
                offlineStorage: null,
                serverSorting: !1,
                serverPaging: !1,
                serverFiltering: !1,
                serverGrouping: !1,
                serverAggregates: !1,
                batch: !1,
                inPlaceSort: !1
            },
            clone: function() {
                return this
            },
            online: function(r) {
                return r !== t ? this._online != r && (this._online = r, r) ? this.sync() : e.Deferred().resolve().promise() : this._online
            },
            offlineData: function(e) {
                return null == this.options.offlineStorage ? null : e !== t ? this._storage.setItem(e) : this._storage.getItem() || []
            },
            _isServerGrouped: function() {
                var e = this.group() || [];
                return this.options.serverGrouping && e.length
            },
            _isServerGroupPaged: function() {
                return this._isServerGrouped() && this._groupPaging
            },
            _isGroupPaged: function() {
                var e = this._group || [];
                return this._groupPaging && e.length
            },
            _pushCreate: function(e) {
                this._push(e, "pushCreate")
            },
            _pushUpdate: function(e) {
                this._push(e, "pushUpdate")
            },
            _pushDestroy: function(e) {
                this._push(e, "pushDestroy")
            },
            _push: function(e, t) {
                var r = this._readData(e);
                r || (r = e), this[t](r)
            },
            _flatData: function(e, t) {
                if (e) {
                    if (this._isServerGrouped()) return D(e);
                    if (!t)
                        for (var r = 0; r < e.length; r++) e.at(r)
                }
                return e
            },
            parent: Pe,
            get: function(e) {
                var t, r, i = this._flatData(this._data, this.options.useRanges);
                for (t = 0, r = i.length; t < r; t++)
                    if (i[t].id == e) return i[t]
            },
            getByUid: function(e) {
                return this._getByUid(e, this._data)
            },
            _getByUid: function(e, t) {
                var r, i, n = this._flatData(t, this.options.useRanges);
                if (n)
                    for (r = 0, i = n.length; r < i; r++)
                        if (n[r].uid == e) return n[r]
            },
            indexOf: function(e) {
                return L(this._data, e)
            },
            at: function(e) {
                return this._data.at(e)
            },
            data: function(e) {
                var r, i = this;
                if (e === t) {
                    if (i._data)
                        for (r = 0; r < i._data.length; r++) i._data.at(r);
                    return i._data
                }
                i._detachObservableParents(), i._data = this._observe(e), i._pristineData = e.slice(0), i._storeData(), i._ranges = [], i.trigger("reset"), i._addRange(i._data), i._total = i._data.length, i._pristineTotal = i._total, i._process(i._data)
            },
            view: function(e) {
                return e === t ? this._view : (this._view = this._observeView(e), t)
            },
            _observeView: function(e) {
                var t, r = this;
                return E(e, r._data, r._ranges, r.reader.model || X, r._isServerGrouped()), t = new K(e, r.reader.model), t.parent = function() {
                    return r.parent()
                }, t
            },
            flatView: function() {
                var e = this.group() || [];
                return e.length ? D(this._view) : this._view
            },
            add: function(e) {
                return this.insert(this._data.length, e)
            },
            _createNewModel: function(e) {
                return this.reader.model ? new this.reader.model(e) : e instanceof X ? e : new X(e)
            },
            insert: function(e, t) {
                return t || (t = e, e = 0), t instanceof ee || (t = this._createNewModel(t)), this._isServerGrouped() ? this._data.splice(e, 0, this._wrapInEmptyGroup(t)) : this._data.splice(e, 0, t), this._insertModelInRange(e, t), t
            },
            pushInsert: function(t, r) {
                var i, n, a, s, o, u, l = this,
                    g = l._getCurrentRangeSpan();
                r || (r = t, t = 0), Se(r) || (r = [r]), i = [], n = this.options.autoSync, this.options.autoSync = !1;
                try {
                    for (a = 0; a < r.length; a++) s = r[a], o = this.insert(t, s), i.push(o), u = o.toJSON(), this._isServerGrouped() && (u = this._wrapInEmptyGroup(u)), this._pristineData.push(u), g && g.length && e(g).last()[0].pristineData.push(u), t++
                } finally {
                    this.options.autoSync = n
                }
                i.length && this.trigger("push", {
                    type: "create",
                    items: i
                })
            },
            pushCreate: function(e) {
                this.pushInsert(this._data.length, e)
            },
            pushUpdate: function(e) {
                var t, r, i, n, a;
                for (Se(e) || (e = [e]), t = [], r = 0; r < e.length; r++) i = e[r], n = this._createNewModel(i), a = this.get(n.id), a ? (t.push(a), a.accept(i), a.trigger(Ae), this._updatePristineForModel(a, i)) : this.pushCreate(i);
                t.length && this.trigger("push", {
                    type: "update",
                    items: t
                })
            },
            pushDestroy: function(e) {
                var t = this._removeItems(e);
                t.length && this.trigger("push", {
                    type: "destroy",
                    items: t
                })
            },
            _removeItems: function(e, r) {
                var i, n, a, s, o, u, l;
                Se(e) || (e = [e]), i = t === r || r, n = [], a = this.options.autoSync, this.options.autoSync = !1;
                try {
                    for (s = 0; s < e.length; s++) o = e[s], u = this._createNewModel(o), l = !1, this._eachItem(this._data, function(e) {
                        var t, r;
                        for (t = 0; t < e.length; t++)
                            if (r = e.at(t), r.id === u.id) {
                                n.push(r), e.splice(t, 1), l = !0;
                                break
                            }
                    }), l && i && (this._removePristineForModel(u), this._destroyed.pop())
                } finally {
                    this.options.autoSync = a
                }
                return n
            },
            remove: function(e) {
                var t, r = this,
                    i = r._isServerGrouped();
                return this._eachItem(r._data, function(n) {
                    if (t = M(n, e), t && i) return t.isNew && t.isNew() || r._destroyed.push(t), !0
                }), this._removeModelFromRanges(e), e
            },
            destroyed: function() {
                return this._destroyed
            },
            created: function() {
                var e, t, r = [],
                    i = this._flatData(this._data, this.options.useRanges);
                for (e = 0, t = i.length; e < t; e++) i[e].isNew && i[e].isNew() && r.push(i[e]);
                return r
            },
            updated: function() {
                var e, t, r = [],
                    i = this._flatData(this._data, this.options.useRanges);
                for (e = 0, t = i.length; e < t; e++) i[e].isNew && !i[e].isNew() && i[e].dirty && r.push(i[e]);
                return r
            },
            sync: function() {
                var t, r = this,
                    i = [],
                    n = [],
                    a = r._destroyed,
                    s = e.Deferred().resolve().promise();
                if (r.online()) {
                    if (!r.reader.model) return s;
                    i = r.created(), n = r.updated(), t = [], r.options.batch && r.transport.submit ? t = r._sendSubmit(i, n, a) : (t.push.apply(t, r._send("create", i)), t.push.apply(t, r._send("update", n)), t.push.apply(t, r._send("destroy", a))), s = e.when.apply(null, t).then(function() {
                        var e, t;
                        for (e = 0, t = arguments.length; e < t; e++) arguments[e] && r._accept(arguments[e]);
                        r._storeData(!0), r._syncEnd(), r._change({
                            action: "sync"
                        }), r.trigger(Ee), r._isServerGroupPaged() && r.read()
                    })
                } else r._storeData(!0), r._syncEnd(), r._change({
                    action: "sync"
                });
                return s
            },
            _syncEnd: Pe,
            cancelChanges: function(e) {
                var t = this;
                e instanceof xe.data.Model ? t._cancelModel(e) : (t._destroyed = [], t._detachObservableParents(), t._data = t._observe(t._pristineData), t.options.serverPaging && (t._total = t._pristineTotal), t._ranges = [], t._addRange(t._data, 0), t._changesCanceled(), t._change(), t._markOfflineUpdatesAsDirty(), t._isServerGrouped() && t.read())
            },
            _changesCanceled: Pe,
            _markOfflineUpdatesAsDirty: function() {
                var e = this;
                null != e.options.offlineStorage && e._eachItem(e._data, function(e) {
                    var t, r;
                    for (t = 0; t < e.length; t++) r = e.at(t), "update" != r.__state__ && "create" != r.__state__ || (r.dirty = !0)
                })
            },
            hasChanges: function() {
                var e, t, r = this._flatData(this._data, this.options.useRanges);
                if (this._destroyed.length) return !0;
                for (e = 0, t = r.length; e < t; e++)
                    if (r[e].isNew && r[e].isNew() || r[e].dirty) return !0;
                return !1
            },
            _accept: function(t) {
                var r, i = this,
                    n = t.models,
                    a = t.response,
                    s = 0,
                    o = i._isServerGrouped(),
                    u = i._pristineData,
                    l = t.type;
                if (i.trigger(Be, {
                        response: a,
                        type: l
                    }), a && !ye(a)) {
                    if (a = i.reader.parse(a), i._handleCustomErrors(a)) return;
                    a = i.reader.data(a), Se(a) || (a = [a])
                } else a = e.map(n, function(e) {
                    return e.toJSON()
                });
                for ("destroy" === l && (i._destroyed = []), s = 0, r = n.length; s < r; s++) "destroy" !== l ? (n[s].accept(a[s]), "create" === l ? u.push(o ? i._wrapInEmptyGroup(n[s].toJSON()) : a[s]) : "update" === l && i._updatePristineForModel(n[s], a[s])) : i._removePristineForModel(n[s])
            },
            _updatePristineForModel: function(e, t) {
                this._executeOnPristineForModel(e, function(e, r) {
                    xe.deepExtend(r[e], t)
                })
            },
            _executeOnPristineForModel: function(e, t) {
                this._eachPristineItem(function(r) {
                    var i = N(r, e);
                    if (i > -1) return t(i, r), !0
                })
            },
            _removePristineForModel: function(e) {
                this._executeOnPristineForModel(e, function(e, t) {
                    t.splice(e, 1)
                })
            },
            _readData: function(e) {
                var t = this._isServerGrouped() ? this.reader.groups : this.reader.data;
                return t.call(this.reader, e)
            },
            _eachPristineItem: function(e) {
                var t = this,
                    r = t.options,
                    i = t._getCurrentRangeSpan();
                t._eachItem(t._pristineData, e), r.serverPaging && r.useRanges && we(i, function(r, i) {
                    t._eachItem(i.pristineData, e)
                })
            },
            _eachItem: function(e, t) {
                e && e.length && (this._isServerGrouped() ? I(e, t) : t(e))
            },
            _pristineForModel: function(e) {
                var t, r, i = function(i) {
                    if (r = N(i, e), r > -1) return t = i[r], !0
                };
                return this._eachPristineItem(i), t
            },
            _cancelModel: function(e) {
                var t = this,
                    r = this._pristineForModel(e);
                this._eachItem(this._data, function(i) {
                    var n = L(i, e);
                    n >= 0 && (!r || e.isNew() && !r.__state__ ? (t._modelCanceled(e), i.splice(n, 1), t._removeModelFromRanges(e)) : (i[n].accept(r), "update" == r.__state__ && (i[n].dirty = !0)))
                })
            },
            _modelCanceled: Pe,
            _submit: function(t, r) {
                var i = this;
                i.trigger(Le, {
                    type: "submit"
                }), i.trigger(je), i.transport.submit(_e({
                    success: function(r, i) {
                        var n = e.grep(t, function(e) {
                            return e.type == i
                        })[0];
                        n && n.resolve({
                            response: r,
                            models: n.models,
                            type: i
                        })
                    },
                    error: function(e, r, n) {
                        for (var a = 0; a < t.length; a++) t[a].reject(e);
                        i.error(e, r, n)
                    }
                }, r))
            },
            _sendSubmit: function(t, r, i) {
                var n = this,
                    a = [];
                return n.options.batch && (t.length && a.push(e.Deferred(function(e) {
                    e.type = "create", e.models = t
                })), r.length && a.push(e.Deferred(function(e) {
                    e.type = "update", e.models = r
                })), i.length && a.push(e.Deferred(function(e) {
                    e.type = "destroy", e.models = i
                })), n._submit(a, {
                    data: {
                        created: n.reader.serialize(w(t)),
                        updated: n.reader.serialize(w(r)),
                        destroyed: n.reader.serialize(w(i))
                    }
                })), a
            },
            _promise: function(t, r, i) {
                var n = this;
                return e.Deferred(function(e) {
                    n.trigger(Le, {
                        type: i
                    }), n.trigger(je), n.transport[i].call(n.transport, _e({
                        success: function(t) {
                            e.resolve({
                                response: t,
                                models: r,
                                type: i
                            })
                        },
                        error: function(t, r, i) {
                            e.reject(t), n.error(t, r, i)
                        }
                    }, t))
                }).promise()
            },
            _send: function(e, t) {
                var r, i, n = this,
                    a = [],
                    s = n.reader.serialize(w(t));
                if (n.options.batch) t.length && a.push(n._promise({
                    data: {
                        models: s
                    }
                }, t, e));
                else
                    for (r = 0, i = t.length; r < i; r++) a.push(n._promise({
                        data: s[r]
                    }, [t[r]], e));
                return a
            },
            read: function(t) {
                var r = this,
                    i = r._params(t),
                    n = e.Deferred();
                return r._queueRequest(i, function() {
                    var e = r.trigger(Le, {
                        type: "read"
                    });
                    e ? (r._dequeueRequest(), n.resolve(e)) : (r.trigger(je), r._ranges = [], r.trigger("reset"), r.online() ? r.transport.read({
                        data: i,
                        success: function(e) {
                            r._ranges = [], r.success(e, i), n.resolve()
                        },
                        error: function() {
                            var e = Ze.call(arguments);
                            r.error.apply(r, e), n.reject.apply(n, e)
                        }
                    }) : null != r.options.offlineStorage && (r.success(r.offlineData(), i), n.resolve()))
                }), n.promise()
            },
            _readAggregates: function(e) {
                return this.reader.aggregates(e)
            },
            success: function(e) {
                var r, i, n, a, s, o, u, l, g, d, h, f = this,
                    c = f.options;
                if (f.trigger(Be, {
                        response: e,
                        type: "read"
                    }), f.online()) {
                    if (e = f.reader.parse(e), f._handleCustomErrors(e)) return f._dequeueRequest(), t;
                    f._total = f.reader.total(e), f._isServerGroupPaged() && (f._serverGroupsTotal = f._total), f._pageSize > f._total && (f._pageSize = f._total, f.options.pageSize && f.options.pageSize > f._pageSize && (f._pageSize = f.options.pageSize)), f._aggregate && c.serverAggregates && (f._aggregateResult = f._readAggregates(e)), e = f._readData(e), f._destroyed = []
                } else {
                    for (e = f._readData(e), r = [], n = {}, a = f.reader.model, s = a ? a.idField : "id", o = 0; o < this._destroyed.length; o++) u = this._destroyed[o][s], n[u] = u;
                    for (o = 0; o < e.length; o++) l = e[o], g = l.__state__, "destroy" == g ? n[l[s]] || this._destroyed.push(this._createNewModel(l)) : r.push(l);
                    e = r, f._total = e.length
                }
                if (f._pristineTotal = f._total, i = f._skip && f._data.length && f._skip < f._data.length, f.options.endless)
                    for (i && f._pristineData.splice(f._skip, f._pristineData.length), r = e.slice(0), d = 0; d < r.length; d++) f._pristineData.push(r[d]);
                else f._pristineData = e.slice(0);
                if (f._detachObservableParents(), f.options.endless) {
                    for (f._data.unbind(Ae, f._changeHandler), f._isServerGrouped() && f._data[f._data.length - 1].value === e[0].value && (q(f._data[f._data.length - 1], e[0]), e.shift()), e = f._observe(e), i && f._data.splice(f._skip, f._data.length), h = 0; h < e.length; h++) f._data.push(e[h]);
                    f._data.bind(Ae, f._changeHandler)
                } else f._data = f._observe(e);
                f._markOfflineUpdatesAsDirty(), f._storeData(), f._addRange(f._data), f._process(f._data), f._dequeueRequest()
            },
            _detachObservableParents: function() {
                if (this._data && this._shouldDetachObservableParents)
                    for (var e = 0; e < this._data.length; e++) this._data[e].parent && (this._data[e].parent = Pe)
            },
            _storeData: function(e) {
                function t(e) {
                    var r, i, n, a = [];
                    for (r = 0; r < e.length; r++) i = e.at(r), n = i.toJSON(), s && i.items ? n.items = t(i.items) : (n.uid = i.uid, o && (i.isNew() ? n.__state__ = "create" : i.dirty && (n.__state__ = "update"))), a.push(n);
                    return a
                }
                var r, i, n, a, s = this._isServerGrouped(),
                    o = this.reader.model;
                if (null != this.options.offlineStorage) {
                    for (r = t(this._data), i = [], n = 0; n < this._destroyed.length; n++) a = this._destroyed[n].toJSON(), a.__state__ = "destroy", i.push(a);
                    this.offlineData(r.concat(i)), e && (this._pristineData = this.reader.reader ? this.reader.reader._wrapDataAccessBase(r) : this.reader._wrapDataAccessBase(r))
                }
            },
            _addRange: function(e, r) {
                var i, n = this,
                    a = t !== r ? r : n._skip || 0,
                    s = {
                        data: e,
                        pristineData: e.toJSON(),
                        timestamp: n._timeStamp()
                    };
                this._isGroupPaged() ? (i = a + e.length, s.outerStart = a, s.outerEnd = i) : i = a + n._flatData(e, !0).length, s.start = a, s.end = i, n._ranges.push(s), n._sortRanges(), n._isGroupPaged() && (n._groupsFlat || (n._groupsFlat = []), n._appendToGroupsFlat(s.data), n._updateOuterRangesLength())
            },
            _appendToGroupsFlat: function(e) {
                var t, r = e.length;
                for (t = 0; t < r; t++) this._groupsFlat.push(e[t])
            },
            _getGroupByUid: function(e) {
                var t, r, i = this._groupsFlat.length;
                for (r = 0; r < i; r++)
                    if (t = this._groupsFlat[r], t.uid === e) return t
            },
            _sortRanges: function() {
                this._ranges.sort(function(e, t) {
                    return e.start - t.start
                })
            },
            error: function(e, t, r) {
                this._dequeueRequest(), this.trigger(Be, {}), this.trigger(Ne, {
                    xhr: e,
                    status: t,
                    errorThrown: r
                })
            },
            _params: function(e) {
                var t = this,
                    r = _e({
                        take: t.take(),
                        skip: t.skip(),
                        page: t.page(),
                        pageSize: t.pageSize(),
                        sort: t._sort,
                        filter: t._filter,
                        group: t._group,
                        aggregate: t._aggregate,
                        groupPaging: !!t._groupPaging
                    }, e);
                return t.options.serverPaging || (delete r.take, delete r.skip, delete r.page, delete r.pageSize), t.options.serverGrouping ? t.reader.model && r.group && (r.group = U(r.group, t.reader.model)) : delete r.group, t.options.serverFiltering ? t.reader.model && r.filter && (r.filter = H(r.filter, t.reader.model)) : delete r.filter, t.options.serverSorting ? t.reader.model && r.sort && (r.sort = U(r.sort, t.reader.model)) : delete r.sort, t.options.serverAggregates ? t.reader.model && r.aggregate && (r.aggregate = U(r.aggregate, t.reader.model)) : delete r.aggregate, t.options.groupPaging || delete r.groupPaging, r
            },
            _queueRequest: function(e, r) {
                var i = this;
                i._requestInProgress ? i._pending = {
                    callback: me(r, i),
                    options: e
                } : (i._requestInProgress = !0, i._pending = t, r())
            },
            _dequeueRequest: function() {
                var e = this;
                e._requestInProgress = !1, e._pending && e._queueRequest(e._pending.options, e._pending.callback)
            },
            _handleCustomErrors: function(e) {
                if (this.reader.errors) {
                    var t = this.reader.errors(e);
                    if (t) return this.trigger(Ne, {
                        xhr: null,
                        status: "customerror",
                        errorThrown: "custom error",
                        errors: t
                    }), !0
                }
                return !1
            },
            _shouldWrap: function(e) {
                var t = this.reader.model;
                return !(!t || !e.length) && !(e[0] instanceof t)
            },
            _observe: function(e) {
                var t, r = this,
                    i = r.reader.model;
                return r._shouldDetachObservableParents = !0, e instanceof at ? (r._shouldDetachObservableParents = !1, r._shouldWrap(e) && (e.type = r.reader.model, e.wrapAll(e, e))) : (t = r.pageSize() && !r.options.serverPaging ? K : at, e = new t(e, r.reader.model), e.parent = function() {
                    return r.parent()
                }), r._isServerGrouped() && z(e, i), !(r._changeHandler && r._data && r._data instanceof at) || r.options.useRanges && r.options.serverPaging ? r._changeHandler = me(r._change, r) : r._data.unbind(Ae, r._changeHandler), e.bind(Ae, r._changeHandler)
            },
            _updateTotalForAction: function(e, t) {
                var r = this,
                    i = parseInt(r._total, 10);
                b(r._total) || (i = parseInt(r._pristineTotal, 10)), "add" === e ? i += t.length : "remove" === e ? i -= t.length : "itemchange" === e || "sync" === e || r.options.serverPaging ? "sync" === e && (i = r._pristineTotal = parseInt(r._total, 10)) : i = r._pristineTotal, r._total = i
            },
            _change: function(e) {
                var t, r, i, n = this,
                    a = e ? e.action : "";
                if ("remove" === a)
                    for (t = 0, r = e.items.length; t < r; t++) e.items[t].isNew && e.items[t].isNew() || n._destroyed.push(e.items[t]);
                !n.options.autoSync || "add" !== a && "remove" !== a && "itemchange" !== a ? (n._updateTotalForAction(a, e ? e.items : []), n._process(n._data, e)) : (i = function(t) {
                    "sync" === t.action && (n.unbind("change", i), n._updateTotalForAction(a, e.items))
                }, n.first("change", i), n.sync())
            },
            _calculateAggregates: function(e, t) {
                t = t || {};
                var r = new s(e),
                    i = t.aggregate,
                    n = t.filter;
                return n && (r = r.filter(n)), r.aggregate(i)
            },
            _process: function(e, r) {
                var i, n = this,
                    a = {};
                n.options.serverPaging !== !0 && (a.skip = n._skip, a.take = n._take || n._pageSize, a.skip === t && n._page !== t && n._pageSize !== t && (a.skip = (n._page - 1) * n._pageSize), n.options.useRanges && (a.skip = n.currentRangeStart())), n.options.serverSorting !== !0 && (a.sort = n._sort), n.options.serverFiltering !== !0 && (a.filter = n._filter), n.options.serverGrouping !== !0 && (a.group = n._group), n.options.serverAggregates !== !0 && (a.aggregate = n._aggregate), n.options.serverGrouping && n._clearEmptyGroups(e), a.groupPaging = n._groupPaging, i = n._isGroupPaged() && r && ("page" === r.action || "expandGroup" === r.action || "collapseGroup" === r.action) ? n._queryProcess(e, {
                    aggregate: n._aggregate
                }) : n._queryProcess(e, a), n.options.serverAggregates !== !0 && (n._aggregateResult = n._calculateAggregates(i.dataToAggregate || e, a)), n._setView(i, a, r), n._setFilterTotal(i.total, !1), r = r || {}, r.items = r.items || n._view, n.trigger(Ae, r)
            },
            _setView: function(e, t, r) {
                var i, n = this;
                n._isGroupPaged() && !n._isServerGrouped() ? !r || "page" !== r.action && "expandGroup" !== r.action && "collapseGroup" !== r.action ? (n._ranges = [], i = new s(e.data), n._addRange(n._observe(e.data)), t.skip + t.take > e.data.length && (t.skip = e.data.length - t.take), n.view(i.range(t.skip, t.take).toArray())) : (n.view(e.data), n._updateOuterRangesLength()) : n.view(e.data)
            },
            _clearEmptyGroups: function(e) {
                var t, r;
                for (t = e.length - 1; t >= 0; t--) r = e[t], r.hasSubgroups ? this._clearEmptyGroups(r.items) : r.items && !r.items.length && Xe.apply(r.parent(), [t, 1])
            },
            _queryProcess: function(e, t) {
                return this.options.inPlaceSort ? s.process(e, t, this.options.inPlaceSort) : s.process(e, t)
            },
            _mergeState: function(r) {
                var i = this;
                return r !== t && (i._pageSize = r.pageSize, i._page = r.page, i._sort = r.sort, i._filter = r.filter, i._group = r.group, i._aggregate = r.aggregate, i._skip = i._currentRangeStart = r.skip, i._take = r.take, i._skip === t && (i._skip = i._currentRangeStart = i.skip(), r.skip = i.skip()), i._take === t && i._pageSize !== t && (i._take = i._pageSize, r.take = i._take), r.sort && (i._sort = r.sort = o(r.sort), i._sortFields = u(r.sort)), r.filter && (i._filter = r.filter = i.options.accentFoldingFiltering && !e.isEmptyObject(r.filter) ? e.extend({}, g(r.filter), {
                    accentFoldingFiltering: i.options.accentFoldingFiltering
                }) : g(r.filter)), r.group && (i._group = r.group = _(r.group)), r.aggregate && (i._aggregate = r.aggregate = p(r.aggregate))), r
            },
            query: function(r) {
                var i, n, a, s = this.options.serverSorting || this.options.serverPaging || this.options.serverFiltering || this.options.serverGrouping || this.options.serverAggregates;
                return s || (this._data === t || 0 === this._data.length) && !this._destroyed.length ? (this.options.endless && (n = r.pageSize - this.pageSize(), n > 0 ? (n = this.pageSize(), r.page = r.pageSize / n, r.pageSize = n) : (r.page = 1, this.options.endless = !1)), this.read(this._mergeState(r))) : (a = this.trigger(Le, {
                    type: "read"
                }), a || (this.trigger(je), r && (r.groupPaging = this._groupPaging), i = this._queryProcess(this._data, this._mergeState(r)), this._setFilterTotal(i.total, !0), this._aggregateResult = this._calculateAggregates(i.dataToAggregate || this._data, r), this._setView(i, r), this.trigger(Be, {
                    type: "read"
                }), this.trigger(Ae, {
                    items: i.data,
                    action: r ? r.action : ""
                })), e.Deferred().resolve(a).promise())
            },
            _hasExpandedSubGroups: function(e) {
                var t, r = !1,
                    i = e.items ? e.items.length : 0;
                if (!e.hasSubgroups) return !1;
                for (t = 0; t < i; t++)
                    if (this._groupsState[e.items[t].uid]) {
                        r = !0;
                        break
                    }
                return r
            },
            _findGroupedRange: function(e, r, i, n, a) {
                var s, o, u, l, g, d, h, f = this,
                    c = e.length;
                for (d = 0; d < c && (s = e[d], !(i.taken >= i.take)); d++)
                    if (f._getGroupByUid(s.uid) || f._groupsFlat.push(s), f._groupsState[s.uid]) {
                        if (f._isServerGroupPaged()) {
                            if (f._fetchGroupItems(s, i, n, a)) return f._fetchingGroupItems = !0, t;
                            if (l = (s.subgroupCount || s.itemCount) + 1, g = i.skip - i.skipped, !f._hasExpandedSubGroups(s) && g > l) {
                                i.skipped += l;
                                continue
                            }
                        }
                        if (i.includeParents && i.skipped < i.skip ? (i.skipped++, s.excludeHeader = !0) : i.includeParents && (i.taken++, s.excludeHeader = !1), s.hasSubgroups && s.items && s.items.length) s.currentItems = [], n || (n = []), n.push(s), f._findGroupedRange(s.items, s.currentItems, i, n, a), n.pop(), s.currentItems.length || i.taken > 0 ? r.push(s) : s.excludeHeader = !1;
                        else {
                            for (o = [], u = s.items.length, h = 0; h < u; h++)
                                if (i.skipped < i.skip) i.skipped++;
                                else {
                                    if (i.taken >= i.take) break;
                                    o.push(s.items[h]), i.taken++
                                }
                            o.length || i.taken > 0 ? (s.currentItems = o, r.push(s)) : s.excludeHeader = !1
                        }
                    } else {
                        if (i.skipped < i.skip) {
                            i.skipped++;
                            continue
                        }
                        r.push(s), i.taken++
                    }
            },
            _expandedSubGroupItemsCount: function(e, t, r) {
                var i, n, a, s = this,
                    o = 0,
                    u = "number" == typeof t,
                    l = u ? t : e.subgroupCount;
                if (!e.hasSubgroups) return o;
                for (a = 0; a < l && (i = e.items[a], i); a++)
                    if (i.hasSubgroups && s._groupsState[e.uid] ? (n = s._expandedSubGroupItemsCount(i, l, !0), o += n, u && (l -= n)) : !i.hasSubgroups && s._groupsState[i.uid] && (n = i.items ? i.items.length : 0, o += n, u && (l -= n)), r && (o += 1, u && (l -= 1)), u && o > l) return o;
                return o
            },
            _fetchGroupItems: function(e, r, i, n) {
                var a, s, o, u, l = this,
                    g = e.hasSubgroups ? e.subgroupCount : e.itemCount,
                    d = r.take,
                    h = r.skipped,
                    f = l.take();
                return r.includeParents && (h < r.skip ? h += 1 : d -= 1), !e.items || e.items && !e.items.length ? (l.getGroupItems(e, r, i, n, 0), !0) : (u = this._expandedSubGroupItemsCount(e, r.skip - h), a = Math.max(r.skip - (h + u), 0), !(a >= g) && (s = e.items[a], o = e.items[Math.min(a + d, g - 1)], s.notFetched ? (l.getGroupItems(e, r, i, n, Qe.max(Qe.floor(a / f), 0) * f), !0) : o.notFetched ? (l.getGroupItems(e, r, i, n, Qe.max(Qe.floor((a + f) / f), 0) * f), !0) : t))
            },
            getGroupItems: function(e, t, r, i, n) {
                var a, s, o, u, l = this;
                e.items || (e.items = []), a = l.take(), s = this._composeItemsFilter(e, r), o = {
                    page: Qe.floor((n || 0) / (a || 1)) || 1,
                    pageSize: a,
                    skip: n,
                    take: a,
                    filter: s,
                    aggregate: l._aggregate,
                    sort: l._sort
                }, u = l.findSubgroups(e), u && u.length && (o.group = u, o.groupPaging = !0), clearTimeout(l._timeout), l._timeout = setTimeout(function() {
                    l._queueRequest(o, function() {
                        l.trigger(Le, {
                            type: "read"
                        }) ? l._dequeueRequest() : l.transport.read({
                            data: o,
                            success: l._groupItemsSuccessHandler(e, t.skip, l.take(), i, n),
                            error: function() {
                                var e = Ze.call(arguments);
                                l.error.apply(l, e)
                            }
                        })
                    })
                }, 100)
            },
            _groupItemsSuccessHandler: function(e, t, r, i, n) {
                var a, s = this,
                    o = s._timeStamp();
                return i = Fe(i) ? i : Pe, a = s.options.schema && s.options.schema.total ? s.options.schema.total : "Total",
                    function(u) {
                        var l, g, d, h = ee.define(s.options.schema.model);
                        for (s._dequeueRequest(), s.trigger(Be, {
                                response: u,
                                type: "read"
                            }), g = Fe(a) ? a(u) : u[a], u = s.reader.parse(u), e.hasSubgroups ? (l = s.reader.groups(u), e.subgroupCount = g) : (l = s.reader.data(u), l = l.map(function(e) {
                                return new h(e)
                            })), e.items.omitChangeEvent = !0, d = 0; d < g; d++) d >= n && d < n + r ? e.items.splice(d, 1, l[d - n]) : e.items[d] || e.items.splice(d, 0, {
                            notFetched: !0
                        });
                        e.items.omitChangeEvent = !1, s._updateRangePristineData(e), s._fetchingGroupItems = !1, e.countAdded || (s._serverGroupsTotal += g, e.countAdded = !0), s.range(t, r, i, "expandGroup"), (o >= s._currentRequestTimeStamp || !s._skipRequestsInProgress) && s.trigger(Ae, {})
                    }
            },
            findSubgroups: function(e) {
                var t = this._group.map(function(e) {
                    return e.field
                }).indexOf(e.field);
                return this._group.slice(t + 1, this._group.length)
            },
            _composeItemsFilter: function(e, t) {
                var r, i = this.filter() || {
                    logic: "and",
                    filters: []
                };
                if (i = _e(!0, {}, i), i.filters.push({
                        field: e.field,
                        operator: "eq",
                        value: e.value
                    }), t)
                    for (r = 0; r < t.length; r++) i.filters.push({
                        field: t[r].field,
                        operator: "eq",
                        value: t[r].value
                    });
                return i
            },
            _updateRangePristineData: function(e) {
                var t, r, i, n, a, s, o, u, l = this,
                    g = l._ranges,
                    d = g.length;
                for (o = 0; o < d; o++) {
                    for (i = g[o], n = i.data.length, a = [], t = null, u = 0; u < n && (r = i.data[u], a.push(u), !(r.uid === e.uid || r.hasSubgroups && r.items.length && l._containsSubGroup(r, e, a))); u++) a.pop();
                    if (a.length) {
                        for (t = g[o].pristineData; a.length > 1;) s = a.splice(0, 1)[0], t = t[s].items;
                        t[a[0]] = l._cloneGroup(e);
                        break
                    }
                }
            },
            _containsSubGroup: function(e, t, r) {
                var i, n, a = this,
                    s = e.items.length;
                if (e.hasSubgroups && s)
                    for (n = 0; n < s; n++) {
                        if (i = e.items[n], r.push(n), i.uid === t.uid) return !0;
                        if (i.hasSubgroups && i.items.length) return a._containsSubGroup(i, t, r);
                        r.pop()
                    }
            },
            _cloneGroup: function(e) {
                var t = this;
                return e = "function" == typeof e.toJSON ? e.toJSON() : e, e.items && e.items.length && (e.items = e.items.map(function(e) {
                    return t._cloneGroup(e)
                })), e
            },
            _setFilterTotal: function(e, r) {
                var i = this;
                i.options.serverFiltering || (e !== t ? i._total = e : r && (i._total = i._data.length))
            },
            fetch: function(e) {
                var t = this,
                    r = function(r) {
                        r !== !0 && Fe(e) && e.call(t)
                    };
                return this._query().done(r)
            },
            _query: function(e) {
                var t = this;
                return t.query(_e({}, {
                    page: t.page(),
                    pageSize: t.pageSize(),
                    sort: t.sort(),
                    filter: t.filter(),
                    group: t.group(),
                    aggregate: t.aggregate()
                }, e))
            },
            next: function(e) {
                var t = this,
                    r = t.page(),
                    i = t.total();
                if (e = e || {}, r && !(i && r + 1 > t.totalPages())) return t._skip = t._currentRangeStart = r * t.take(), r += 1, e.page = r, t._query(e), r
            },
            prev: function(e) {
                var t = this,
                    r = t.page();
                if (e = e || {}, r && 1 !== r) return t._skip = t._currentRangeStart = t._skip - t.take(), r -= 1, e.page = r, t._query(e), r
            },
            page: function(e) {
                var r, i, n = this;
                return e !== t ? (e = Qe.max(Qe.min(Qe.max(e, 1), n.totalPages()), 1), i = n.take(), n._isGroupPaged() ? (e -= 1, n.range(e * i, i, null, "page"), t) : (n._query(n._pageableQueryOptions({
                    page: e
                })), t)) : (r = n.skip(), r !== t ? Qe.round((r || 0) / (n.take() || 1)) + 1 : t)
            },
            pageSize: function(e) {
                var r = this;
                return e !== t ? (r._query(r._pageableQueryOptions({
                    pageSize: e,
                    page: 1
                })), t) : r.take()
            },
            sort: function(e) {
                var r = this;
                return e !== t ? (r.trigger("sort"), r._query({
                    sort: e
                }), t) : r._sort
            },
            filter: function(e) {
                var r = this;
                return e === t ? r._filter : (r.trigger("reset"), r._query({
                    filter: e,
                    page: 1
                }), t)
            },
            group: function(e) {
                var r = this,
                    i = {
                        group: e
                    };
                return r._groupPaging && (i.page = 1), e !== t ? (r._query(i), t) : r._group
            },
            getGroupsFlat: function(e) {
                var t, r, i, n = [];
                for (t = 0, r = e.length; t < r; t++) i = e[t], i.hasSubgroups && (n = n.concat(this.getGroupsFlat(i.items))), n.push(i);
                return n
            },
            total: function() {
                return parseInt(this._total || 0, 10)
            },
            groupsTotal: function(e) {
                var t = this;
                return t._group.length ? t._isServerGrouped() ? t._serverGroupsTotal ? t._serverGroupsTotal : t._serverGroupsTotal = t.total() : t._calculateGroupsTotal(t._ranges.length ? t._ranges[0].data : [], e) : t.total()
            },
            _calculateGroupsTotal: function(e, t, r, i) {
                var n, a, s, o = this;
                if (r = r || "items", o._group.length && e) {
                    for (n = 0, a = e.length, s = 0; s < a; s++) n += o.groupCount(e[s], t, r, i);
                    return o._groupsTotal = n, n
                }
                return o._groupsTotal = o._data.length
            },
            groupCount: function(e, t, r, i) {
                var n = this,
                    a = 0;
                return e.hasSubgroups && n._groupsState[e.uid] ? ((t && !e.excludeHeader || i) && (a += 1), e[r].forEach(function(e) {
                    a += n.groupCount(e, t, r, i)
                })) : n._groupsState[e.uid] ? ((t && !e.excludeHeader || i) && a++, a += e[r] ? e[r].length : 0) : a++, a
            },
            countGroupRange: function(e) {
                var t, r = 0,
                    i = e.length;
                for (t = 0; t < i; t++) r += this.groupCount(e[t], !0);
                return r
            },
            aggregate: function(e) {
                var r = this;
                return e !== t ? (r._query({
                    aggregate: e
                }), t) : r._aggregate
            },
            aggregates: function() {
                var e = this._aggregateResult;
                return ye(e) && (e = this._emptyAggregates(this.aggregate())), e
            },
            _emptyAggregates: function(e) {
                var t, r, i = {};
                if (!ye(e))
                    for (t = {}, Se(e) || (e = [e]), r = 0; r < e.length; r++) t[e[r].aggregate] = 0, i[e[r].field] = t;
                return i
            },
            _pageableQueryOptions: function(e) {
                return e
            },
            _wrapInEmptyGroup: function(e) {
                var t, r, i, n, a = this.group();
                for (i = a.length - 1, n = 0; i >= n; i--) r = a[i], t = {
                    value: e.get ? e.get(r.field) : e[r.field],
                    field: r.field,
                    items: t ? [t] : [e],
                    hasSubgroups: !!t,
                    aggregates: this._emptyAggregates(r.aggregates)
                };
                return t
            },
            totalPages: function() {
                var e = this,
                    t = e.pageSize() || e.total(),
                    r = e._isGroupPaged() ? e.groupsTotal(!0) : e.total();
                return Qe.ceil((r || 0) / t)
            },
            inRange: function(e, t) {
                var r = this,
                    i = Qe.min(e + t, r.total());
                return !r.options.serverPaging && r._data.length > 0 || r._findRange(e, i).length > 0
            },
            lastRange: function() {
                var e = this._ranges;
                return e[e.length - 1] || {
                    start: 0,
                    end: 0,
                    data: []
                }
            },
            firstItemUid: function() {
                var e = this._ranges;
                return e.length && e[0].data.length && e[0].data[0].uid
            },
            enableRequestsInProgress: function() {
                this._skipRequestsInProgress = !1
            },
            _timeStamp: function() {
                return (new Date).getTime()
            },
            range: function(e, r, i, n) {
                var a, s, o, u, l;
                return this._currentRequestTimeStamp = this._timeStamp(), this._skipRequestsInProgress = !0, a = this._isGroupPaged() ? this.groupsTotal(!0) : this.total(), "expandGroup" !== n && "collapseGroup" !== n || this._updateOuterRangesLength(), e = Qe.min(e || 0, a), i = Fe(i) ? i : Pe, s = this, o = Qe.max(Qe.floor(e / r), 0) * r, u = Qe.min(o + r, a), l = s._findRange(e, Qe.min(e + r, a), i), !l.length && 0 !== a || s._fetchingGroupItems ? (s._isGroupPaged() && (s._originalPageSkip = o, s._originalSize = u, o = Qe.max(Qe.floor(s._adjustPageSkip(e, r) / r), 0) * r, u = Qe.min(o + r, a)), r === t || s._fetchingGroupItems || (s._isGroupPaged() && !s._groupRangeExists(o, r) || !s._rangeExists(o, u) ? s.prefetch(o, r, function() {
                    e > o && u < s.total() && !s._rangeExists(u, Qe.min(u + r, s.total())) ? s.prefetch(u, r, function() {
                        s.range(e, r, i)
                    }) : s.range(e, r, i)
                }) : o < e && s.prefetch(u, r, function() {
                    s.range(e, r, i)
                })), t) : (s._processRangeData(l, e, r, s._originalPageSkip || o, s._originalSize || u, {
                    action: n
                }), s._originalPageSkip = null, s._originalSize = null, i(), t)
            },
            _findRange: function(e, r, i) {
                var n, a, s, u, l, g, d, h, f, c, p, _, v, y, S = this,
                    b = S._ranges,
                    k = [],
                    w = S.options,
                    P = w.serverSorting || w.serverPaging || w.serverFiltering || w.serverGrouping || w.serverAggregates,
                    x = {
                        take: r - e,
                        skip: e,
                        skipped: 0,
                        taken: 0,
                        includeParents: !0
                    },
                    F = S._isGroupPaged(),
                    R = F ? "outerStart" : "start",
                    G = F ? "outerEnd" : "end";
                for (a = 0, p = b.length; a < p; a++) {
                    if (n = b[a], F) {
                        if (n.outerStart >= r) return [];
                        if (e > n.outerEnd) {
                            x.skipped += n.outerEnd - (_ || 0), _ = n.outerEnd;
                            continue
                        }
                        if (t !== _ && _ != n.outerStart && (x.skipped += n.outerStart - _), x.skipped > x.skip) return [];
                        for (t === _ && e > 0 && n.start > 0 && (x.skipped = n.outerStart), s = a;;) {
                            if (this._findGroupedRange(n.data, k, x, null, i), v = S._calculateGroupsTotal(k, !0, "currentItems"), v >= x.take) return k;
                            if (S._fetchingGroupItems) return [];
                            if (s++, !b[s] || b[s].outerStart !== n.outerEnd) break;
                            n = b[s]
                        }
                    } else if (e >= n[R] && e <= n[G]) {
                        for (c = 0, s = a; s < p; s++)
                            if (n = b[s], f = S._flatData(n.data, !0), f.length && e + c >= n.start && (g = n.data, d = n.end, P || (w.inPlaceSort ? h = S._queryProcess(n.data, {
                                    filter: S.filter()
                                }) : (y = m(S.group() || []).concat(o(S.sort() || [])), h = S._queryProcess(n.data, {
                                    sort: y,
                                    filter: S.filter()
                                })), f = g = h.data, h.total !== t && (d = h.total)), u = 0, e + c > n.start && (u = e + c - n.start), l = f.length, d > r && (l -= d - r), c += l - u, k = S._mergeGroups(k, g, u, l), r <= n.end && c == r - e)) return k;
                        break
                    }
                    _ = n.outerEnd
                }
                return []
            },
            _getRangesMismatch: function(e) {
                for (var t, r = this, i = r._ranges, n = 0, a = 0;;) {
                    if (t = i[a], !t || t.outerStart > e) break;
                    t.outerEnd != t.end && (n = t.outerEnd - t.end), a++
                }
                return n
            },
            _mergeGroups: function(e, t, r, i) {
                if (this._isServerGrouped()) {
                    var n, a = t.toJSON();
                    return e.length && (n = e[e.length - 1]), C(n, a, r, i), e.concat(a)
                }
                return e.concat(t.slice(r, i))
            },
            _processRangeData: function(e, r, i, n, a, s) {
                var o, u, l, g, d = this;
                d._pending = t, d._skip = r > d.skip() && !d._omitPrefetch ? Qe.min(a, (d.totalPages() - 1) * d.take()) : n, d._currentRangeStart = r, d._take = i, o = d.options.serverPaging, u = d.options.serverSorting, l = d.options.serverFiltering, g = d.options.serverAggregates;
                try {
                    d.options.serverPaging = !0, d._isServerGrouped() || d.group() && d.group().length || (d.options.serverSorting = !0), d.options.serverFiltering = !0, d.options.serverPaging = !0, d.options.serverAggregates = !0, o && (d._detachObservableParents(), d._data = e = d._observe(e)), d._process(e, s)
                } finally {
                    d.options.serverPaging = o, d.options.serverSorting = u, d.options.serverFiltering = l, d.options.serverAggregates = g
                }
            },
            skip: function() {
                var e = this;
                return e._skip === t ? e._page !== t ? (e._page - 1) * (e.take() || 1) : t : e._skip
            },
            currentRangeStart: function() {
                return this._currentRangeStart || 0
            },
            take: function() {
                return this._take || this._pageSize
            },
            _prefetchSuccessHandler: function(e, t, r, i) {
                var n = this,
                    a = n._timeStamp();
                return function(s) {
                    var o, u, l, g = !1,
                        d = {
                            start: e,
                            end: t,
                            data: [],
                            timestamp: n._timeStamp()
                        };
                    if (n._dequeueRequest(), n.trigger(Be, {
                            response: s,
                            type: "read"
                        }), s = n.reader.parse(s), l = n._readData(s), l.length) {
                        for (o = 0, u = n._ranges.length; o < u; o++)
                            if (n._ranges[o].start === e) {
                                g = !0, d = n._ranges[o], n._isGroupPaged() || (d.pristineData = l, d.data = n._observe(l), d.end = d.start + n._flatData(d.data, !0).length, n._sortRanges());
                                break
                            }
                        g || n._addRange(n._observe(l), e)
                    }
                    n._total = n.reader.total(s), (i || a >= n._currentRequestTimeStamp || !n._skipRequestsInProgress) && (r && l.length ? r() : n.trigger(Ae, {}))
                }
            },
            prefetch: function(e, r, i) {
                var n = this,
                    a = Qe.min(e + r, n.total()),
                    s = {
                        take: r,
                        skip: e,
                        page: e / r + 1,
                        pageSize: r,
                        sort: n._sort,
                        filter: n._filter,
                        group: n._group,
                        aggregate: n._aggregate
                    };
                return n._isGroupPaged() && !n._isServerGrouped() && n._groupRangeExists(e, a) ? (i && i(), t) : (n._isServerGroupPaged() && !n._groupRangeExists(e, a) || !n._rangeExists(e, a) ? (clearTimeout(n._timeout), n._timeout = setTimeout(function() {
                    n._queueRequest(s, function() {
                        n.trigger(Le, {
                            type: "read"
                        }) ? n._dequeueRequest() : (n._omitPrefetch && n.trigger(je), n.transport.read({
                            data: n._params(s),
                            success: n._prefetchSuccessHandler(e, a, i),
                            error: function() {
                                var e = Ze.call(arguments);
                                n.error.apply(n, e)
                            }
                        }))
                    })
                }, 100)) : i && i(), t)
            },
            _multiplePrefetch: function(e, t, r) {
                var i = this,
                    n = Qe.min(e + t, i.total()),
                    a = {
                        take: t,
                        skip: e,
                        page: e / t + 1,
                        pageSize: t,
                        sort: i._sort,
                        filter: i._filter,
                        group: i._group,
                        aggregate: i._aggregate
                    };
                i._rangeExists(e, n) ? r && r() : i.trigger(Le, {
                    type: "read"
                }) || i.transport.read({
                    data: i._params(a),
                    success: i._prefetchSuccessHandler(e, n, r, !0)
                })
            },
            _adjustPageSkip: function(e, t) {
                var r, i, n = this,
                    a = n._getPrevRange(e),
                    s = n.total();
                if (a) {
                    if (i = n._getRangesMismatch(e), !i) return e;
                    e -= i
                }
                if (r = Qe.max(Qe.floor(e / t), 0) * t, r > s)
                    for (;;)
                        if (r -= t, r < s) break;
                return r
            },
            _getNextRange: function(e) {
                var t, r, i = this,
                    n = i._ranges;
                for (t = 0, r = n.length; t < r; t++)
                    if (n[t].start <= e && n[t].end >= e) return n[t]
            },
            _getPrevRange: function(e) {
                var t, r, i = this,
                    n = i._ranges,
                    a = n.length;
                for (t = a - 1; t >= 0; t--)
                    if (n[t].outerStart <= e) {
                        r = n[t];
                        break
                    }
                return r
            },
            _rangeExists: function(e, t) {
                var r, i, n = this,
                    a = n._ranges;
                for (r = 0, i = a.length; r < i; r++)
                    if (a[r].start <= e && a[r].end >= t) return !0;
                return !1
            },
            _groupRangeExists: function(e, t) {
                var r, i, n, a = this,
                    s = a._ranges,
                    o = 0,
                    u = a.groupsTotal(!0);
                for (t > u && !a._isServerGrouped() && (t = u), r = 0, i = s.length; r < i; r++) n = s[r], n.outerStart <= e && n.outerEnd >= e ? o += n.outerEnd - e : n.outerStart <= t && n.outerEnd >= t && (o += t - n.outerStart);
                return o >= t - e
            },
            _getCurrentRangeSpan: function() {
                var e, t, r = this,
                    i = r._ranges,
                    n = r.currentRangeStart(),
                    a = n + (r.take() || 0),
                    s = [],
                    o = i.length;
                for (t = 0; t < o; t++) e = i[t], (e.start <= n && e.end >= n || e.start >= n && e.start <= a) && s.push(e);
                return s
            },
            _removeModelFromRanges: function(e) {
                var t, r, i, n = this;
                for (r = 0, i = this._ranges.length; r < i; r++) t = this._ranges[r], n._removeModelFromRange(t, e);
                n._updateRangesLength()
            },
            _removeModelFromRange: function(e, t) {
                this._eachItem(e.data, function(e) {
                    var r, i;
                    if (e)
                        for (r = 0; r < e.length; r++)
                            if (i = e[r], i.uid && i.uid == t.uid) {
                                [].splice.call(e, r, 1);
                                break
                            }
                })
            },
            _insertModelInRange: function(e, t) {
                var r, i, n = this,
                    a = n._ranges || [],
                    s = a.length;
                for (i = 0; i < s; i++)
                    if (r = a[i], r.start <= e && r.end >= e) {
                        n._getByUid(t.uid, r.data) || (n._isServerGrouped() ? r.data.splice(e, 0, n._wrapInEmptyGroup(t)) : r.data.splice(e, 0, t));
                        break
                    }
                n._updateRangesLength()
            },
            _updateRangesLength: function() {
                var e, t, r, i = this,
                    n = i._ranges || [],
                    a = n.length,
                    s = !1,
                    o = 0,
                    u = 0;
                for (r = 0; r < a; r++) t = n[r], e = i._isGroupPaged() ? t.data.length : i._flatData(t.data, !0).length, u = e - Qe.abs(t.end - t.start), s || 0 === u ? s && (t.start += o, t.end += o) : (s = !0, o = u, t.end += o)
            },
            _updateOuterRangesLength: function() {
                var e, t, r, i, n = this,
                    a = n._ranges || [],
                    s = a.length,
                    o = 0;
                for (t = 0; t < s; t++) e = a[t], i = n._isGroupPaged() ? n._calculateGroupsTotal(e.data, !0, "items", !0) : n._flatData(e.data, !0).length, r ? (r.end != e.start && (o = e.start - r.end), e.outerStart = r.outerEnd + o, o = 0) : e.outerStart = e.start, e.outerEnd = e.outerStart + i, r = e
            }
        }), de = {}, de.create = function(t, r, i) {
            var n, a = t.transport ? e.extend({}, t.transport) : null;
            return a ? (a.read = typeof a.read === qe ? {
                url: a.read
            } : a.read, "jsdo" === t.type && (a.dataSource = i), t.type && (xe.data.transports = xe.data.transports || {}, xe.data.schemas = xe.data.schemas || {}, xe.data.transports[t.type] ? ve(xe.data.transports[t.type]) ? a = _e(!0, {}, xe.data.transports[t.type], a) : n = new xe.data.transports[t.type](_e(a, {
                data: r
            })) : xe.logToConsole("Unknown DataSource transport type '" + t.type + "'.\nVerify that registration scripts for this type are included after Kendo UI on the page.", "warn"), t.schema = _e(!0, {}, xe.data.schemas[t.type], t.schema)), n || (n = Fe(a.read) ? a : new oe(a))) : n = new se({
                data: t.data || []
            }), n
        }, ge.create = function(e) {
            (Se(e) || e instanceof at) && (e = {
                data: e
            });
            var r, i, n, a = e || {},
                s = a.data,
                o = a.fields,
                u = a.table,
                l = a.select,
                g = {};
            if (s || !o || a.transport || (u ? s = V(u, o) : l && (s = J(l, o), a.group === t && s[0] && s[0].optgroup !== t && (a.group = "optgroup"))), xe.data.Model && o && (!a.schema || !a.schema.model)) {
                for (r = 0, i = o.length; r < i; r++) n = o[r], n.type && (g[n.field] = n);
                ye(g) || (a.schema = _e(!0, a.schema, {
                    model: {
                        fields: g
                    }
                }))
            }
            return a.data = s, l = null, a.select = null, u = null, a.table = null, a instanceof ge ? a : new ge(a)
        }, he = ee.define({
            idField: "id",
            init: function(e) {
                var t, r = this,
                    i = r.hasChildren || e && e.hasChildren,
                    n = "items",
                    a = {};
                xe.data.Model.fn.init.call(r, e), typeof r.children === qe && (n = r.children), a = {
                    schema: {
                        data: n,
                        model: {
                            hasChildren: i,
                            id: r.idField,
                            fields: r.fields
                        }
                    }
                }, typeof r.children !== qe && _e(a, r.children), a.data = e, i || (i = a.schema.data), typeof i === qe && (i = xe.getter(i)), Fe(i) && (t = i.call(r, r), r.hasChildren = (!t || 0 !== t.length) && !!t), r._childrenOptions = a, r.hasChildren && r._initChildren(), r._loaded = !(!e || !e._loaded)
            },
            _initChildren: function() {
                var e, t, r, i = this;
                i.children instanceof fe || (e = i.children = new fe(i._childrenOptions), t = e.transport, r = t.parameterMap, t.parameterMap = function(e, t) {
                    return e[i.idField || "id"] = i.id, r && (e = r.call(i, e, t)), e
                }, e.parent = function() {
                    return i
                }, e.bind(Ae, function(e) {
                    e.node = e.node || i, i.trigger(Ae, e)
                }), e.bind(Ne, function(e) {
                    var t = i.parent();
                    t && (e.node = e.node || i, t.trigger(Ne, e))
                }), i._updateChildrenField())
            },
            append: function(e) {
                this._initChildren(), this.loaded(!0), this.children.add(e)
            },
            hasChildren: !1,
            level: function() {
                for (var e = this.parentNode(), t = 0; e && e.parentNode;) t++, e = e.parentNode ? e.parentNode() : null;
                return t
            },
            _updateChildrenField: function() {
                var e = this._childrenOptions.schema.data;
                this[e || "items"] = this.children.data()
            },
            _childrenLoaded: function() {
                this._loaded = !0, this._updateChildrenField()
            },
            load: function() {
                var r, i, n = {},
                    a = "_query";
                return this.hasChildren ? (this._initChildren(),
                    r = this.children, n[this.idField || "id"] = this.id, this._loaded || (r._data = t, a = "read"), r.one(Ae, me(this._childrenLoaded, this)), this._matchFilter && (n.filter = {
                        field: "_matchFilter",
                        operator: "eq",
                        value: !0
                    }), i = r[a](n)) : this.loaded(!0), i || e.Deferred().resolve().promise()
            },
            parentNode: function() {
                var e = this.parent();
                return e.parent()
            },
            loaded: function(e) {
                return e === t ? this._loaded : (this._loaded = e, t)
            },
            shouldSerialize: function(e) {
                return ee.fn.shouldSerialize.call(this, e) && "children" !== e && "_loaded" !== e && "hasChildren" !== e && "_childrenOptions" !== e
            }
        }), fe = ge.extend({
            init: function(e) {
                var t = he.define({
                    children: e
                });
                e.filter && !e.serverFiltering && (this._hierarchicalFilter = e.filter, e.filter = null), ge.fn.init.call(this, _e(!0, {}, {
                    schema: {
                        modelBase: t,
                        model: t
                    }
                }, e)), this._attachBubbleHandlers()
            },
            _attachBubbleHandlers: function() {
                var e = this;
                e._data.bind(Ne, function(t) {
                    e.trigger(Ne, t)
                })
            },
            read: function(e) {
                var t = ge.fn.read.call(this, e);
                return this._hierarchicalFilter && (this._data && this._data.length > 0 ? this.filter(this._hierarchicalFilter) : (this.options.filter = this._hierarchicalFilter, this._filter = g(this.options.filter), this._hierarchicalFilter = null)), t
            },
            remove: function(e) {
                var t, r = e.parentNode(),
                    i = this;
                return r && r._initChildren && (i = r.children), t = ge.fn.remove.call(i, e), r && !i.data().length && (r.hasChildren = !1), t
            },
            success: Q("success"),
            data: Q("data"),
            insert: function(e, t) {
                var r = this.parent();
                return r && r._initChildren && (r.hasChildren = !0, r._initChildren()), ge.fn.insert.call(this, e, t)
            },
            filter: function(e) {
                return e === t ? this._filter : (!this.options.serverFiltering && this._markHierarchicalQuery(e) && (e = {
                    logic: "or",
                    filters: [e, {
                        field: "_matchFilter",
                        operator: "equals",
                        value: !0
                    }]
                }), this.trigger("reset"), this._query({
                    filter: e,
                    page: 1
                }), t)
            },
            _markHierarchicalQuery: function(t) {
                var r, i, n, a, o, u = this.options.accentFoldingFiltering;
                return t = u ? e.extend({}, g(t), {
                    accentFoldingFiltering: u
                }) : g(t), t && 0 !== t.filters.length ? (r = s.filterExpr(t), n = r.fields, a = r.operators, i = o = Function("d, __f, __o", "return " + r.expression), (n.length || a.length) && (o = function(e) {
                    return i(e, n, a)
                }), this._updateHierarchicalFilter(o), !0) : (this._updateHierarchicalFilter(function() {
                    return !0
                }), !1)
            },
            _updateHierarchicalFilter: function(e) {
                var t, r, i = this._data,
                    n = !1;
                for (r = 0; r < i.length; r++) t = i[r], t.hasChildren ? (t._matchFilter = t.children._updateHierarchicalFilter(e), t._matchFilter || (t._matchFilter = e(t))) : t._matchFilter = e(t), t._matchFilter && (n = !0);
                return n
            },
            _find: function(e, t) {
                var r, i, n, a, s = this._data;
                if (s) {
                    if (n = ge.fn[e].call(this, t)) return n;
                    for (s = this._flatData(this._data), r = 0, i = s.length; r < i; r++)
                        if (a = s[r].children, a instanceof fe && (n = a[e](t))) return n
                }
            },
            get: function(e) {
                return this._find("get", e)
            },
            getByUid: function(e) {
                return this._find("getByUid", e)
            }
        }), fe.create = function(e) {
            e = e && e.push ? {
                data: e
            } : e;
            var t = e || {},
                r = t.data,
                i = t.fields,
                n = t.list;
            return r && r._dataSource ? r._dataSource : (r || !i || t.transport || n && (r = W(n, i)), t.data = r, t instanceof fe ? t : new fe(t))
        }, ce = xe.Observable.extend({
            init: function(e, t, r) {
                xe.Observable.fn.init.call(this), this._prefetching = !1, this.dataSource = e, this.prefetch = !r;
                var i = this;
                e.bind("change", function() {
                    i._change()
                }), e.bind("reset", function() {
                    i._reset()
                }), this._syncWithDataSource(), this.setViewSize(t)
            },
            setViewSize: function(e) {
                this.viewSize = e, this._recalculate()
            },
            at: function(e) {
                var r = this.pageSize,
                    i = !0;
                return e >= this.total() ? (this.trigger("endreached", {
                    index: e
                }), null) : this.useRanges ? this.useRanges ? ((e < this.dataOffset || e >= this.skip + r) && (i = this.range(Math.floor(e / r) * r)), e === this.prefetchThreshold && this._prefetch(), e === this.midPageThreshold ? this.range(this.nextMidRange, !0) : e === this.nextPageThreshold ? this.range(this.nextFullRange) : e === this.pullBackThreshold && this.range(this.offset === this.skip ? this.previousMidRange : this.previousFullRange), i ? this.dataSource.at(e - this.dataOffset) : (this.trigger("endreached", {
                    index: e
                }), null)) : t : this.dataSource.view()[e]
            },
            indexOf: function(e) {
                return this.dataSource.data().indexOf(e) + this.dataOffset
            },
            total: function() {
                return parseInt(this.dataSource.total(), 10)
            },
            next: function() {
                var e = this,
                    t = e.pageSize,
                    r = e.skip - e.viewSize + t,
                    i = Qe.max(Qe.floor(r / t), 0) * t;
                this.offset = r, this.dataSource.prefetch(i, t, function() {
                    e._goToRange(r, !0)
                })
            },
            range: function(e, t) {
                if (this.offset === e) return !0;
                var r = this,
                    i = this.pageSize,
                    n = Qe.max(Qe.floor(e / i), 0) * i,
                    a = this.dataSource;
                return t && (n += i), a.inRange(e, i) ? (this.offset = e, this._recalculate(), this._goToRange(e), !0) : !this.prefetch || (a.prefetch(n, i, function() {
                    r.offset = e, r._recalculate(), r._goToRange(e, !0)
                }), !1)
            },
            syncDataSource: function() {
                var e = this.offset;
                this.offset = null, this.range(e)
            },
            destroy: function() {
                this.unbind()
            },
            _prefetch: function() {
                var e = this,
                    t = this.pageSize,
                    r = this.skip + t,
                    i = this.dataSource;
                i.inRange(r, t) || this._prefetching || !this.prefetch || (this._prefetching = !0, this.trigger("prefetching", {
                    skip: r,
                    take: t
                }), i.prefetch(r, t, function() {
                    e._prefetching = !1, e.trigger("prefetched", {
                        skip: r,
                        take: t
                    })
                }))
            },
            _goToRange: function(e, t) {
                this.offset === e && (this.dataOffset = e, this._expanding = t, this.dataSource.range(e, this.pageSize), this.dataSource.enableRequestsInProgress())
            },
            _reset: function() {
                this._syncPending = !0
            },
            _change: function() {
                var e = this.dataSource;
                this.length = this.useRanges ? e.lastRange().end : e.view().length, this._syncPending && (this._syncWithDataSource(), this._recalculate(), this._syncPending = !1, this.trigger("reset", {
                    offset: this.offset
                })), this.trigger("resize"), this._expanding && this.trigger("expand"), delete this._expanding
            },
            _syncWithDataSource: function() {
                var e = this.dataSource;
                this._firstItemUid = e.firstItemUid(), this.dataOffset = this.offset = e.skip() || 0, this.pageSize = e.pageSize(), this.useRanges = e.options.serverPaging
            },
            _recalculate: function() {
                var e = this.pageSize,
                    t = this.offset,
                    r = this.viewSize,
                    i = Math.ceil(t / e) * e;
                this.skip = i, this.midPageThreshold = i + e - 1, this.nextPageThreshold = i + r - 1, this.prefetchThreshold = i + Math.floor(e / 3 * 2), this.pullBackThreshold = this.offset - 1, this.nextMidRange = i + e - r, this.nextFullRange = i, this.previousMidRange = t - r, this.previousFullRange = i - e
            }
        }), pe = xe.Observable.extend({
            init: function(e, t) {
                var r = this;
                xe.Observable.fn.init.call(r), this.dataSource = e, this.batchSize = t, this._total = 0, this.buffer = new ce(e, 3 * t), this.buffer.bind({
                    endreached: function(e) {
                        r.trigger("endreached", {
                            index: e.index
                        })
                    },
                    prefetching: function(e) {
                        r.trigger("prefetching", {
                            skip: e.skip,
                            take: e.take
                        })
                    },
                    prefetched: function(e) {
                        r.trigger("prefetched", {
                            skip: e.skip,
                            take: e.take
                        })
                    },
                    reset: function() {
                        r._total = 0, r.trigger("reset")
                    },
                    resize: function() {
                        r._total = Math.ceil(this.length / r.batchSize), r.trigger("resize", {
                            total: r.total(),
                            offset: this.offset
                        })
                    }
                })
            },
            syncDataSource: function() {
                this.buffer.syncDataSource()
            },
            at: function(e) {
                var t, r, i = this.buffer,
                    n = e * this.batchSize,
                    a = this.batchSize,
                    s = [];
                for (i.offset > n && i.at(i.offset - 1), r = 0; r < a && (t = i.at(n + r), null !== t); r++) s.push(t);
                return s
            },
            total: function() {
                return this._total
            },
            destroy: function() {
                this.buffer.destroy(), this.unbind()
            }
        }), _e(!0, xe.data, {
            readers: {
                json: le
            },
            Query: s,
            DataSource: ge,
            HierarchicalDataSource: fe,
            Node: he,
            Comparer: te,
            ObservableObject: X,
            ObservableArray: at,
            LazyObservableArray: K,
            LocalTransport: se,
            RemoteTransport: oe,
            Cache: ue,
            DataReader: le,
            Model: ee,
            Buffer: ce,
            BatchBuffer: pe
        })
    }(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function(e, t, r) {
    (r || t)()
});
//# sourceMappingURL=kendo.data.min.js.map;
/** 
 * Kendo UI v2021.1.204 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/
! function(e, define) {
    define("kendo.popup.min", ["kendo.core.min"], e)
}(function() {
    return function(e, t) {
        function o(t, o) {
            return !(!t || !o) && (t === o || e.contains(t, o))
        }
        var n, i, s, r, a = window.kendo,
            l = a.ui,
            d = l.Widget,
            p = a.Class,
            c = a.support,
            f = a.getOffset,
            u = a._outerWidth,
            h = a._outerHeight,
            m = "open",
            g = "close",
            w = "deactivate",
            v = "activate",
            _ = "center",
            b = "left",
            y = "right",
            k = "top",
            x = "bottom",
            T = "absolute",
            z = "hidden",
            C = "body",
            P = "location",
            S = "position",
            E = "visible",
            I = "effects",
            R = "k-state-active",
            A = "k-state-border",
            D = /k-state-border-(\w+)/,
            O = ".k-picker-wrap, .k-dropdown-wrap, .k-link",
            F = "down",
            H = e(document.documentElement),
            N = e.proxy,
            W = e(window),
            L = "scroll",
            j = c.transitions.css,
            M = j + "transform",
            K = e.extend,
            U = ".kendoPopup",
            Y = ["font-size", "font-family", "font-stretch", "font-style", "font-weight", "line-height"],
            Q = d.extend({
                init: function(t, o) {
                    var n, i = this;
                    o = o || {}, o.isRtl && (o.origin = o.origin || x + " " + y, o.position = o.position || k + " " + y), d.fn.init.call(i, t, o), t = i.element, o = i.options, i.collisions = o.collision ? o.collision.split(" ") : [], i.downEvent = a.applyEventMap(F, a.guid()), 1 === i.collisions.length && i.collisions.push(i.collisions[0]), n = e(i.options.anchor).closest(".k-popup,.k-group").filter(":not([class^=km-])"), o.appendTo = e(e(o.appendTo)[0] || n[0] || document.body), i.element.hide().addClass("k-popup k-group k-reset").toggleClass("k-rtl", !!o.isRtl).css({
                        position: T
                    }).appendTo(o.appendTo).attr("aria-hidden", !0).on("mouseenter" + U, function() {
                        i._hovered = !0
                    }).on("wheel" + U, function(t) {
                        var o = e(t.target).find(".k-list"),
                            n = o.parent();
                        o.length && o.is(":visible") && (0 === n.scrollTop() && t.originalEvent.deltaY < 0 || n.scrollTop() === n.prop("scrollHeight") - n.prop("offsetHeight") && t.originalEvent.deltaY > 0) && t.preventDefault()
                    }).on("mouseleave" + U, function() {
                        i._hovered = !1
                    }), i.wrapper = e(), o.animation === !1 && (o.animation = {
                        open: {
                            effects: {}
                        },
                        close: {
                            hide: !0,
                            effects: {}
                        }
                    }), K(o.animation.open, {
                        complete: function() {
                            i.wrapper.css({
                                overflow: E
                            }), i._activated = !0, i._trigger(v)
                        }
                    }), K(o.animation.close, {
                        complete: function() {
                            i._animationClose()
                        }
                    }), i._mousedownProxy = function(e) {
                        i._mousedown(e)
                    }, i._resizeProxy = c.mobileOS.android ? function(e) {
                        setTimeout(function() {
                            i._resize(e)
                        }, 600)
                    } : function(e) {
                        i._resize(e)
                    }, o.toggleTarget && e(o.toggleTarget).on(o.toggleEvent + U, e.proxy(i.toggle, i))
                },
                events: [m, v, g, w],
                options: {
                    name: "Popup",
                    toggleEvent: "click",
                    origin: x + " " + b,
                    position: k + " " + b,
                    anchor: C,
                    appendTo: null,
                    collision: "flip fit",
                    viewport: window,
                    copyAnchorStyles: !0,
                    autosize: !1,
                    modal: !1,
                    adjustSize: {
                        width: 0,
                        height: 0
                    },
                    animation: {
                        open: {
                            effects: "slideIn:down",
                            transition: !0,
                            duration: 200
                        },
                        close: {
                            duration: 100,
                            hide: !0
                        }
                    }
                },
                _animationClose: function() {
                    var e = this,
                        t = e.wrapper.data(P);
                    e.wrapper.hide(), t && e.wrapper.css(t), e.options.anchor != C && e._hideDirClass(), e._closing = !1, e._trigger(w)
                },
                destroy: function() {
                    var t, o = this,
                        n = o.options,
                        i = o.element.off(U);
                    d.fn.destroy.call(o), n.toggleTarget && e(n.toggleTarget).off(U), n.modal || (H.off(o.downEvent, o._mousedownProxy), o._toggleResize(!1)), a.destroy(o.element.children()), i.removeData(), n.appendTo[0] === document.body && (t = i.parent(".k-animation-container"), t[0] ? t.remove() : i.remove())
                },
                open: function(o, n) {
                    var i, s, r = this,
                        l = {
                            isFixed: !isNaN(parseInt(n, 10)),
                            x: o,
                            y: n
                        },
                        d = r.element,
                        p = r.options,
                        f = e(p.anchor),
                        u = d[0] && d.hasClass("km-widget");
                    if (!r.visible()) {
                        if (p.copyAnchorStyles && (u && "font-size" == Y[0] && Y.shift(), d.css(a.getComputedStyles(f[0], Y))), d.data("animating") || r._trigger(m)) return;
                        r._activated = !1, p.modal || (H.off(r.downEvent, r._mousedownProxy).on(r.downEvent, r._mousedownProxy), r._toggleResize(!1), r._toggleResize(!0)), r.wrapper = s = a.wrap(d, p.autosize).css({
                            overflow: z,
                            display: "block",
                            position: T
                        }).attr("aria-hidden", !1), c.mobileOS.android && s.css(M, "translatez(0)"), s.css(S), e(p.appendTo)[0] == document.body && s.css(k, "-10000px"), r.flipped = r._position(l), i = r._openAnimation(), p.anchor != C && r._showDirClass(i), d.is(":visible") || d.data("olddisplay") !== t || (d.show(), d.data("olddisplay", d.css("display")), d.hide()), d.data(I, i.effects).kendoStop(!0).kendoAnimate(i).attr("aria-hidden", !1)
                    }
                },
                _location: function(t) {
                    var o, n, i = this,
                        s = i.element,
                        r = i.options,
                        l = e(r.anchor),
                        d = s[0] && s.hasClass("km-widget");
                    return r.copyAnchorStyles && (d && "font-size" == Y[0] && Y.shift(), s.css(a.getComputedStyles(l[0], Y))), i.wrapper = o = a.wrap(s, r.autosize).css({
                        overflow: z,
                        display: "block",
                        position: T
                    }), c.mobileOS.android && o.css(M, "translatez(0)"), o.css(S), e(r.appendTo)[0] == document.body && o.css(k, "-10000px"), i._position(t || {}), n = o.offset(), {
                        width: a._outerWidth(o),
                        height: a._outerHeight(o),
                        left: n.left,
                        top: n.top
                    }
                },
                _openAnimation: function() {
                    var e = K(!0, {}, this.options.animation.open);
                    return e.effects = a.parseEffects(e.effects, this.flipped), e
                },
                _hideDirClass: function() {
                    var t = e(this.options.anchor),
                        o = ((t.attr("class") || "").match(D) || ["", "down"])[1],
                        n = A + "-" + o;
                    t.removeClass(n).children(O).removeClass(R).removeClass(n), this.element.removeClass(A + "-" + a.directions[o].reverse)
                },
                _showDirClass: function(t) {
                    var o = t.effects.slideIn ? t.effects.slideIn.direction : "down",
                        n = A + "-" + o;
                    e(this.options.anchor).addClass(n).children(O).addClass(R).addClass(n), this.element.addClass(A + "-" + a.directions[o].reverse)
                },
                position: function() {
                    this.visible() && (this.flipped = this._position())
                },
                toggle: function() {
                    var e = this;
                    e[e.visible() ? g : m]()
                },
                visible: function() {
                    return this.element.is(":" + E)
                },
                close: function(o) {
                    var n, i, s, r, l = this,
                        d = l.options;
                    if (l.visible()) {
                        if (n = l.wrapper[0] ? l.wrapper : a.wrap(l.element).hide(), l._toggleResize(!1), l._closing || l._trigger(g)) return l._toggleResize(!0), t;
                        l.element.find(".k-popup").each(function() {
                            var t = e(this),
                                n = t.data("kendoPopup");
                            n && n.close(o)
                        }), H.off(l.downEvent, l._mousedownProxy), o ? i = {
                            hide: !0,
                            effects: {}
                        } : (i = K(!0, {}, d.animation.close), s = l.element.data(I), r = i.effects, !r && !a.size(r) && s && a.size(s) && (i.effects = s, i.reverse = !0), l._closing = !0), l.element.kendoStop(!0).attr("aria-hidden", !0), n.css({
                            overflow: z
                        }).attr("aria-hidden", !0), l.element.kendoAnimate(i), o && l._animationClose()
                    }
                },
                _trigger: function(e) {
                    return this.trigger(e, {
                        type: e
                    })
                },
                _resize: function(e) {
                    var t = this;
                    c.resize.indexOf(e.type) !== -1 ? (clearTimeout(t._resizeTimeout), t._resizeTimeout = setTimeout(function() {
                        t._position(), t._resizeTimeout = null
                    }, 50)) : (!t._hovered || t._activated && t.element.hasClass("k-list-container")) && t.close()
                },
                _toggleResize: function(e) {
                    var t = e ? "on" : "off",
                        o = c.resize;
                    c.mobileOS.ios || c.mobileOS.android || c.browser.safari || (o += " " + L), e && !this.scrollableParents && (this.scrollableParents = this._scrollableParents()), this.scrollableParents && this.scrollableParents.length && this.scrollableParents[t](L, this._resizeProxy), W[t](o, this._resizeProxy)
                },
                _mousedown: function(t) {
                    var n = this,
                        i = n.element[0],
                        s = n.options,
                        r = e(s.anchor)[0],
                        l = s.toggleTarget,
                        d = a.eventTarget(t),
                        p = e(d).closest(".k-popup"),
                        c = p.parent().parent(".km-shim").length;
                    p = p[0], !c && p && p !== n.element[0] || "popover" !== e(t.target).closest("a").data("rel") && (o(i, d) || o(r, d) || l && o(e(l)[0], d) || n.close())
                },
                _fit: function(e, t, o) {
                    var n = 0;
                    return e + t > o && (n = o - (e + t)), e < 0 && (n = -e), n
                },
                _flip: function(e, t, o, n, i, s, r) {
                    var a = 0;
                    return r = r || t, s !== i && s !== _ && i !== _ && (e + r > n && (a += -(o + t)), e + a < 0 && (a += o + t)), a
                },
                _scrollableParents: function() {
                    return e(this.options.anchor).parentsUntil("body").filter(function(e, t) {
                        return a.isScrollable(t)
                    })
                },
                _position: function(t) {
                    var o, n, i, s, r, l, d, p, m, g, w, v, _, b, y, k, x, z = this,
                        C = z.element,
                        E = z.wrapper,
                        I = z.options,
                        R = e(I.viewport),
                        A = c.zoomLevel(),
                        D = !!(R[0] == window && window.innerWidth && A <= 1.02),
                        O = e(I.anchor),
                        F = I.origin.toLowerCase().split(" "),
                        H = I.position.toLowerCase().split(" "),
                        N = z.collisions,
                        W = 10002,
                        L = 0,
                        j = document.documentElement;
                    if (r = I.viewport === window ? {
                            top: window.pageYOffset || document.documentElement.scrollTop || 0,
                            left: window.pageXOffset || document.documentElement.scrollLeft || 0
                        } : R.offset(), D ? (l = window.innerWidth, d = window.innerHeight) : (l = R.width(), d = R.height()), D && j.scrollHeight - j.clientHeight > 0 && (p = I.isRtl ? -1 : 1, l -= p * a.support.scrollbar()), o = O.parents().filter(E.siblings()), o[0])
                        if (i = Math.max(+o.css("zIndex"), 0)) W = i + 10;
                        else
                            for (n = O.parentsUntil(o), s = n.length; L < s; L++) i = +e(n[L]).css("zIndex"), i && W < i && (W = i + 10);
                    return E.css("zIndex", W), E.css(t && t.isFixed ? {
                        left: t.x,
                        top: t.y
                    } : z._align(F, H)), m = f(E, S, O[0] === E.offsetParent()[0]), g = f(E), w = O.offsetParent().parent(".k-animation-container,.k-popup,.k-group"), w.length && (m = f(E, S, !0), g = f(E)), g.top -= r.top, g.left -= r.left, z.wrapper.data(P) || E.data(P, K({}, m)), v = K({}, g), _ = K({}, m), b = I.adjustSize, "fit" === N[0] && (_.top += z._fit(v.top, h(E) + b.height, d / A)), "fit" === N[1] && (_.left += z._fit(v.left, u(E) + b.width, l / A)), y = K({}, _), k = h(C), x = h(E), !E.height() && k && (x += k), "flip" === N[0] && (_.top += z._flip(v.top, k, h(O), d / A, F[0], H[0], x)), "flip" === N[1] && (_.left += z._flip(v.left, u(C), u(O), l / A, F[1], H[1], u(E))), C.css(S, T), E.css(_), _.left != y.left || _.top != y.top
                },
                _align: function(t, o) {
                    var n, i = this,
                        s = i.wrapper,
                        r = e(i.options.anchor),
                        a = t[0],
                        l = t[1],
                        d = o[0],
                        p = o[1],
                        c = f(r),
                        m = e(i.options.appendTo),
                        g = u(s),
                        w = h(s) || h(s.children().first()),
                        v = u(r),
                        b = h(r),
                        k = c.top,
                        T = c.left,
                        z = Math.round;
                    return m[0] != document.body && (n = f(m), k -= n.top, T -= n.left), a === x && (k += b), a === _ && (k += z(b / 2)), d === x && (k -= w), d === _ && (k -= z(w / 2)), l === y && (T += v), l === _ && (T += z(v / 2)), p === y && (T -= g), p === _ && (T -= z(g / 2)), {
                        top: k,
                        left: T
                    }
                }
            });
        l.plugin(Q), n = a.support.stableSort, i = "kendoTabKeyTrap", s = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex], *[contenteditable]", r = p.extend({
            init: function(t) {
                this.element = e(t), this.element.autoApplyNS(i)
            },
            trap: function() {
                this.element.on("keydown", N(this._keepInTrap, this))
            },
            removeTrap: function() {
                this.element.kendoDestroy(i)
            },
            destroy: function() {
                this.element.kendoDestroy(i), this.element = t
            },
            shouldTrap: function() {
                return !0
            },
            _keepInTrap: function(e) {
                var t, o, n;
                9 === e.which && this.shouldTrap() && !e.isDefaultPrevented() && (t = this._focusableElements(), o = this._sortFocusableElements(t), n = this._nextFocusable(e, o), this._focus(n), e.preventDefault())
            },
            _focusableElements: function() {
                var t = this.element.find(s).filter(function(t, o) {
                    return o.tabIndex >= 0 && e(o).is(":visible") && !e(o).is("[disabled]")
                });
                return this.element.is("[tabindex]") && t.push(this.element[0]), t
            },
            _sortFocusableElements: function(e) {
                var t, o;
                return n ? t = e.sort(function(e, t) {
                    return e.tabIndex - t.tabIndex
                }) : (o = "__k_index", e.each(function(e, t) {
                    t.setAttribute(o, e)
                }), t = e.sort(function(e, t) {
                    return e.tabIndex === t.tabIndex ? parseInt(e.getAttribute(o), 10) - parseInt(t.getAttribute(o), 10) : e.tabIndex - t.tabIndex
                }), e.removeAttr(o)), t
            },
            _nextFocusable: function(e, t) {
                var o = t.length,
                    n = t.index(e.target);
                return t.get((n + (e.shiftKey ? -1 : 1)) % o)
            },
            _focus: function(e) {
                return "IFRAME" == e.nodeName ? (e.contentWindow.document.body.focus(), t) : (e.focus(), "INPUT" == e.nodeName && e.setSelectionRange && this._haveSelectionRange(e) && e.setSelectionRange(0, e.value.length), t)
            },
            _haveSelectionRange: function(e) {
                var t = e.type.toLowerCase();
                return "text" === t || "search" === t || "url" === t || "tel" === t || "password" === t
            }
        }), l.Popup.TabKeyTrap = r
    }(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function(e, t, o) {
    (o || t)()
});
//# sourceMappingURL=kendo.popup.min.js.map;
/** 
 * Kendo UI v2021.1.204 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/
! function(e, define) {
    define("kendo.list.min", ["kendo.data.min", "kendo.popup.min"], e)
}(function() {
    return function(e, t) {
        function i(e, i) {
            return e !== t && "" !== e && null !== e && ("boolean" === i ? ("boolean" != typeof e && (e = "true" === ("" + e).toLowerCase()), e = !!e) : "number" === i ? e = +e : "string" === i && (e = "" + e)), e
        }

        function a(e) {
            return e[e.length - 1]
        }

        function n(e) {
            var t = e.selectedIndex;
            return t > -1 ? e.options[t] : {}
        }

        function s(e, t) {
            var i, a, n, s, r = t.length,
                l = e.length,
                o = [],
                u = [];
            if (l)
                for (n = 0; n < l; n++) {
                    for (i = e[n], a = !1, s = 0; s < r; s++)
                        if (i === t[s]) {
                            a = !0, o.push({
                                index: n,
                                item: i
                            });
                            break
                        }
                    a || u.push(i)
                }
            return {
                changed: o,
                unchanged: u
            }
        }

        function r(t) {
            return !(!t || e.isEmptyObject(t)) && !(t.filters && !t.filters.length)
        }

        function l(t, i) {
            var a, n = !1;
            return t.filters && (a = e.grep(t.filters, function(e) {
                return n = l(e, i), e.filters ? e.filters.length : e.field != i
            }), n || t.filters.length === a.length || (n = !0), t.filters = a), n
        }
        var o, u, c = window.kendo,
            d = c.ui,
            h = c._outerHeight,
            f = /^\d+(\.\d+)?%$/i,
            p = d.Widget,
            _ = c.keys,
            g = c.support,
            m = c.htmlEncode,
            v = c._activeElement,
            b = c._outerWidth,
            x = c.data.ObservableArray,
            I = "id",
            w = "change",
            S = "k-state-focused",
            y = "k-state-hover",
            T = "k-i-loading",
            F = ".k-group-header",
            V = ".k-item",
            C = "_label",
            k = "open",
            D = "close",
            H = "cascade",
            B = "select",
            E = "selected",
            L = "requestStart",
            P = "requestEnd",
            G = "blur",
            W = "focus",
            A = "focusout",
            q = e.extend,
            N = e.proxy,
            O = e.isArray,
            M = g.browser,
            z = "k-hidden",
            R = "width",
            U = M.msie,
            j = /"/g,
            $ = {
                ComboBox: ["DropDownList", "MultiColumnComboBox"],
                DropDownList: ["ComboBox", "MultiColumnComboBox"],
                MultiColumnComboBox: ["ComboBox", "DropDownList"]
            },
            Q = c.ui.DataBoundWidget.extend({
                init: function(t, i) {
                    var a, n = this,
                        s = n.ns;
                    p.fn.init.call(n, t, i), t = n.element, i = n.options, n._isSelect = t.is(B), n._isSelect && n.element[0].length && (i.dataSource || (i.dataTextField = i.dataTextField || "text", i.dataValueField = i.dataValueField || "value")), n.ul = e('<ul unselectable="on" class="k-list k-reset"/>').attr({
                        tabIndex: -1,
                        "aria-hidden": !0
                    }), n.list = e("<div class='k-list-container'/>").append(n.ul).on("mousedown" + s, N(n._listMousedown, n)), a = t.attr(I), a || (a = c.guid()), n.list.attr(I, a + "-list"), n.ul.attr(I, a + "_listbox"), i.columns && i.columns.length && (n.ul.removeClass("k-list").addClass("k-grid-list"), n._columnsHeader()), n._header(), n._noData(), n._footer(), n._accessors(), n._initValue()
                },
                options: {
                    valuePrimitive: !1,
                    footerTemplate: "",
                    headerTemplate: "",
                    noDataTemplate: !0,
                    messages: {
                        noData: "No data found.",
                        clear: "clear"
                    }
                },
                setOptions: function(e) {
                    p.fn.setOptions.call(this, e), e && e.enable !== t && (e.enabled = e.enable), e.columns && e.columns.length && this._columnsHeader(), this._header(), this._noData(), this._footer(), this._renderFooter(), this._renderNoData()
                },
                focus: function() {
                    this._focused.focus()
                },
                readonly: function(e) {
                    this._editable({
                        readonly: e === t || e,
                        disable: !1
                    })
                },
                enable: function(e) {
                    this._editable({
                        readonly: !1,
                        disable: !(e = e === t || e)
                    })
                },
                _header: function() {
                    var i, a = this,
                        n = e(a.header),
                        s = a.options.headerTemplate;
                    return this._angularElement(n, "cleanup"), c.destroy(n), n.remove(), s ? (i = "function" != typeof s ? c.template(s) : s, n = e(i({})), a.header = n[0] ? n : null, a.list.prepend(n), this._angularElement(a.header, "compile"), t) : (a.header = null, t)
                },
                _columnsHeader: function() {
                    var t, i, a, n, s, r, l, o, u, d, h, p = this,
                        _ = e(p.columnsHeader);
                    for (this._angularElement(_, "cleanup"), c.destroy(_), _.remove(), t = "<div class='k-grid-header'><div class='k-grid-header-wrap'><table role='presentation'>", i = "<colgroup>", a = "<tr>", n = 0; n < this.options.columns.length; n++) s = this.options.columns[n], r = s.title || s.field || "", l = s.headerTemplate || r, o = "function" != typeof l ? c.template(l) : l, u = s.width, d = parseInt(u, 10), h = "", u && !isNaN(d) && (h += "style='width:", h += d, h += f.test(u) ? "%" : "px", h += ";'"), i += "<col " + h + "/>", a += "<th class='k-header'>", a += o(s), a += "</th>";
                    i += "</colgroup>", a += "</tr>", t += i, t += a, t += "</table></div></div>", p.columnsHeader = _ = e(t), p.list.prepend(_), this._angularElement(p.columnsHeader, "compile")
                },
                _noData: function() {
                    var i = this,
                        a = e(i.noData),
                        n = i.options.noDataTemplate === !0 ? i.options.messages.noData : i.options.noDataTemplate;
                    return i.angular("cleanup", function() {
                        return {
                            elements: a
                        }
                    }), c.destroy(a), a.remove(), n ? (i.noData = e('<div class="k-nodata" style="display:none"><div></div></div>').appendTo(i.list), i.noDataTemplate = "function" != typeof n ? c.template(n) : n, t) : (i.noData = null, t)
                },
                _footer: function() {
                    var i = this,
                        a = e(i.footer),
                        n = i.options.footerTemplate;
                    return this._angularElement(a, "cleanup"), c.destroy(a), a.remove(), n ? (i.footer = e('<div class="k-footer"></div>').appendTo(i.list), i.footerTemplate = "function" != typeof n ? c.template(n) : n, t) : (i.footer = null, t)
                },
                _listOptions: function(t) {
                    var i = this,
                        a = i.options,
                        n = a.virtual,
                        s = {
                            change: N(i._listChange, i)
                        },
                        r = N(i._listBound, i);
                    return n = "object" == typeof n ? n : {}, t = e.extend({
                        autoBind: !1,
                        selectable: !0,
                        dataSource: i.dataSource,
                        click: N(i._click, i),
                        activate: N(i._activateItem, i),
                        columns: a.columns,
                        deactivate: N(i._deactivateItem, i),
                        dataBinding: function() {
                            i.trigger("dataBinding")
                        },
                        dataBound: r,
                        height: a.height,
                        dataValueField: a.dataValueField,
                        dataTextField: a.dataTextField,
                        groupTemplate: a.groupTemplate,
                        fixedGroupTemplate: a.fixedGroupTemplate,
                        template: a.template
                    }, t, n, s), t.template || (t.template = "#:" + c.expr(t.dataTextField, "data") + "#"), a.$angular && (t.$angular = a.$angular), t
                },
                _initList: function() {
                    var e = this,
                        t = e._listOptions({
                            selectedItemChange: N(e._listChange, e)
                        });
                    e.listView = e.options.virtual ? new c.ui.VirtualList(e.ul, t) : new c.ui.StaticList(e.ul, t), e.listView.bind("listBound", N(e._listBound, e)), e._setListValue()
                },
                _setListValue: function(e) {
                    e = e || this.options.value, e !== t && this.listView.value(e).done(N(this._updateSelectionState, this))
                },
                _updateSelectionState: e.noop,
                _listMousedown: function(e) {
                    this.filterInput && this.filterInput[0] === e.target || e.preventDefault()
                },
                _isFilterEnabled: function() {
                    var e = this.options.filter;
                    return e && "none" !== e
                },
                _hideClear: function() {
                    var e = this;
                    e._clear && e._clear.addClass(z)
                },
                _showClear: function() {
                    this._clear && this._clear.removeClass(z)
                },
                _clearValue: function() {
                    this._clearText(), this._accessor(""), this.listView.value([]), this._isSelect && (this._customOption = t), this._isFilterEnabled() && !this.options.enforceMinLength && (this._filter({
                        word: "",
                        open: !1
                    }), this.options.highlightFirst && this.listView.focus(0)), this._change()
                },
                _clearText: function() {
                    this.text("")
                },
                _clearFilter: function() {
                    this.options.virtual || this.listView.bound(!1), this._filterSource()
                },
                _filterSource: function(t, i) {
                    var a, n, s = this,
                        o = s.options,
                        u = o.filterFields && t && t.logic && t.filters && t.filters.length,
                        c = s.dataSource,
                        d = q({}, c.filter() || {}),
                        h = t || d.filters && d.filters.length && !t,
                        f = l(d, o.dataTextField);
                    return this._clearFilterExpressions(d), (t || f) && s.trigger("filtering", {
                        filter: t
                    }) ? e.Deferred().reject().promise() : (a = {
                        filters: [],
                        logic: "and"
                    }, u ? a.filters.push(t) : this._pushFilterExpression(a, t), r(d) && (a.logic === d.logic ? a.filters = a.filters.concat(d.filters) : a.filters.push(d)), s._cascading && this.listView.setDSFilter(a), n = q({}, {
                        page: h ? 1 : c.page(),
                        pageSize: h ? c.options.pageSize : c.pageSize(),
                        sort: c.sort(),
                        filter: c.filter(),
                        group: c.group(),
                        aggregate: c.aggregate()
                    }, {
                        filter: a
                    }), c[i ? "read" : "query"](c._mergeState(n)))
                },
                _pushFilterExpression: function(e, t) {
                    r(t) && "" !== t.value && e.filters.push(t)
                },
                _clearFilterExpressions: function(e) {
                    var t, i;
                    if (e.filters) {
                        for (i = 0; i < e.filters.length; i++) "fromFilter" in e.filters[i] && (t = i);
                        isNaN(t) || e.filters.splice(t, 1)
                    }
                },
                _angularElement: function(e, t) {
                    e && this.angular(t, function() {
                        return {
                            elements: e
                        }
                    })
                },
                _renderNoData: function() {
                    var e = this,
                        t = e.noData;
                    t && (this._angularElement(t, "cleanup"), t.children(":first").html(e.noDataTemplate({
                        instance: e
                    })), this._angularElement(t, "compile"))
                },
                _toggleNoData: function(t) {
                    e(this.noData).toggle(t)
                },
                _toggleHeader: function(e) {
                    var t = this.listView.content.prev(F);
                    t.toggle(e)
                },
                _renderFooter: function() {
                    var e = this,
                        t = e.footer;
                    t && (this._angularElement(t, "cleanup"), t.html(e.footerTemplate({
                        instance: e
                    })), this._angularElement(t, "compile"))
                },
                _allowOpening: function() {
                    return this.options.noDataTemplate || this.dataSource.flatView().length
                },
                _initValue: function() {
                    var e = this,
                        t = e.options.value;
                    null !== t ? e.element.val(t) : (t = e._accessor(), e.options.value = t), e._old = t
                },
                _ignoreCase: function() {
                    var e, t = this,
                        i = t.dataSource.reader.model;
                    i && i.fields && (e = i.fields[t.options.dataTextField], e && e.type && "string" !== e.type && (t.options.ignoreCase = !1))
                },
                _focus: function(e) {
                    return this.listView.focus(e)
                },
                _filter: function(e) {
                    var t, i, a = this,
                        n = a.options,
                        s = e.word,
                        r = n.filterFields,
                        l = n.dataTextField;
                    if (r && r.length)
                        for (t = {
                                logic: "or",
                                filters: [],
                                fromFilter: !0
                            }, i = 0; i < r.length; i++) this._pushFilterExpression(t, a._buildExpression(s, r[i]));
                    else t = a._buildExpression(s, l);
                    a._open = e.open, a._filterSource(t)
                },
                _buildExpression: function(e, t) {
                    var i = this,
                        a = i.options,
                        n = a.ignoreCase,
                        s = i.dataSource.options.accentFoldingFiltering;
                    return {
                        value: n ? s ? e.toLocaleLowerCase(s) : e.toLowerCase() : e,
                        field: t,
                        operator: a.filter,
                        ignoreCase: n
                    }
                },
                _clearButton: function() {
                    var t = this,
                        i = t.options.messages.clear;
                    t._clear || (t._clear = e('<span unselectable="on" class="k-clear-value" title="' + i + '"><span class="k-icon k-i-x"></span></span>').attr({
                        role: "button",
                        tabIndex: -1
                    })), t.options.clearButton || t._clear.remove(), this._hideClear()
                },
                search: function(e) {
                    var t = this.options;
                    e = "string" == typeof e ? e : this._inputValue(), clearTimeout(this._typingTimeout), (!t.enforceMinLength && !e.length || e.length >= t.minLength) && (this._state = "filter", this.listView && (this.listView._emptySearch = !c.trim(e).length), this._isFilterEnabled() ? this._filter({
                        word: e,
                        open: !0
                    }) : this._searchByWord(e))
                },
                current: function(e) {
                    return this._focus(e)
                },
                items: function() {
                    return this.ul[0].children
                },
                destroy: function() {
                    var e = this,
                        t = e.ns;
                    p.fn.destroy.call(e), e._unbindDataSource(), e.listView.destroy(), e.list.off(t), e.popup.destroy(), e._form && e._form.off("reset", e._resetHandler)
                },
                dataItem: function(i) {
                    var a = this;
                    if (i === t) return a.listView.selectedDataItems()[0];
                    if ("number" != typeof i) {
                        if (a.options.virtual) return a.dataSource.getByUid(e(i).data("uid"));
                        i = e(a.items()).index(i)
                    }
                    return a.dataSource.flatView()[i]
                },
                _activateItem: function() {
                    var e = this.listView.focus();
                    e && this._focused.add(this.filterInput).attr("aria-activedescendant", e.attr("id"))
                },
                _deactivateItem: function() {
                    this._focused.add(this.filterInput).removeAttr("aria-activedescendant")
                },
                _accessors: function() {
                    var e = this,
                        t = e.element,
                        i = e.options,
                        a = c.getter,
                        n = t.attr(c.attr("text-field")),
                        s = t.attr(c.attr("value-field"));
                    !i.dataTextField && n && (i.dataTextField = n), !i.dataValueField && s && (i.dataValueField = s), e._text = a(i.dataTextField), e._value = a(i.dataValueField)
                },
                _aria: function(e) {
                    var i = this,
                        a = i.options,
                        n = i._focused.add(i.filterInput);
                    a.suggest !== t && n.attr("aria-autocomplete", a.suggest ? "both" : "list"), e = e ? e + " " + i.ul[0].id : i.ul[0].id, n.attr("aria-owns", e), i.ul.attr("aria-live", i._isFilterEnabled() ? "polite" : "off"), i._ariaLabel()
                },
                _ariaLabel: function() {
                    var t, i = this,
                        a = i._focused,
                        n = i.element,
                        s = n.attr("id"),
                        r = e('label[for="' + s + '"]'),
                        l = n.attr("aria-label"),
                        o = n.attr("aria-labelledby");
                    a !== n && (l ? a.attr("aria-label", l) : o ? a.attr("aria-labelledby", o) : r.length && (t = r.attr("id") || i._generateLabelId(r, s || c.guid()), a.attr("aria-labelledby", t)))
                },
                _generateLabelId: function(e, t) {
                    var i = t + C;
                    return e.attr("id", i), i
                },
                _blur: function() {
                    var e = this;
                    e._change(), e.close(), e._userTriggered = !1
                },
                _isValueChanged: function(e) {
                    return e !== i(this._old, typeof e)
                },
                _change: function() {
                    var e, a = this,
                        n = a.selectedIndex,
                        s = a.options.value,
                        r = a.value();
                    a._isSelect && !a.listView.bound() && s && (r = s), a._isValueChanged(r) ? e = !0 : a._valueBeforeCascade !== t && a._valueBeforeCascade !== i(a._old, typeof a._valueBeforeCascade) && a._userTriggered ? e = !0 : n === t || n === a._oldIndex || a.listView.isFiltered() || (e = !0), e && (a._valueBeforeCascade = a._old = null === a._old || "" === a._old || "" === r ? r : a.dataItem() ? a.options.dataValueField ? a.dataItem()[a.options.dataValueField] : a.dataItem() : null, a._oldIndex = n, a._typing || a.element.trigger(w), a.trigger(w)), a.typing = !1
                },
                _data: function() {
                    return this.dataSource.view()
                },
                _enable: function() {
                    var e = this,
                        i = e.options,
                        a = e.element.is("[disabled]");
                    i.enable !== t && (i.enabled = i.enable), !i.enabled || a ? e.enable(!1) : e.readonly(e.element.is("[readonly]"))
                },
                _dataValue: function(e) {
                    var i = this._value(e);
                    return i === t && (i = this._text(e)), i
                },
                _offsetHeight: function() {
                    var t = 0,
                        i = this.listView.content.prevAll(":visible");
                    return i.each(function() {
                        var i = e(this);
                        t += h(i, !0)
                    }), t
                },
                _height: function(i) {
                    var a, n, s, r = this,
                        l = r.list,
                        o = r.options.height,
                        u = r.popup.visible();
                    if (i || r.options.noDataTemplate) {
                        if (n = l.add(l.parent(".k-animation-container")).show(), !l.is(":visible")) return n.hide(), t;
                        o = r.listView.content[0].scrollHeight > o ? o : "auto", n.height(o), "auto" !== o && (a = r._offsetHeight(), s = h(e(r.footer)) || 0, o = o - a - s), r.listView.content.height(o), u || n.hide()
                    }
                    return o
                },
                _openHandler: function(e) {
                    this._adjustListWidth(), this.trigger(k) ? e.preventDefault() : (this._focused.attr("aria-expanded", !0), this.ul.attr("aria-hidden", !1))
                },
                _adjustListWidth: function() {
                    var e, t, i = this,
                        a = i.list,
                        n = a[0].style.width,
                        s = i.wrapper;
                    if (a.data(R) || !n) return e = window.getComputedStyle ? window.getComputedStyle(s[0], null) : 0, t = parseFloat(e && e.width) || b(s), e && M.msie && (t += parseFloat(e.paddingLeft) + parseFloat(e.paddingRight) + parseFloat(e.borderLeftWidth) + parseFloat(e.borderRightWidth)), n = "border-box" !== a.css("box-sizing") ? t - (b(a) - a.width()) : t, a.css({
                        fontFamily: s.css("font-family"),
                        width: i.options.autoWidth ? "auto" : n,
                        minWidth: n,
                        whiteSpace: i.options.autoWidth ? "nowrap" : "normal"
                    }).data(R, n), !0
                },
                _closeHandler: function(e) {
                    this.trigger(D) ? e.preventDefault() : (this._focused.attr("aria-expanded", !1), this.ul.attr("aria-hidden", !0))
                },
                _focusItem: function() {
                    var e = this.listView,
                        i = !e.focus(),
                        n = a(e.select());
                    n === t && this.options.highlightFirst && i && (n = 0), n !== t ? e.focus(n) : i && e.scrollToIndex(0)
                },
                _calculateGroupPadding: function(e) {
                    var t = this.ul.children(".k-first:first"),
                        i = this.listView.content.prev(F),
                        a = 0,
                        n = "right";
                    i[0] && "none" !== i[0].style.display && ("auto" !== e && (a = c.support.scrollbar()), this.element.parents(".k-rtl").length && (n = "left"), a += parseFloat(t.css("border-" + n + "-width"), 10) + parseFloat(t.children(".k-group").css("padding-" + n), 10), i.css("padding-" + n, a))
                },
                _calculatePopupHeight: function(e) {
                    var t = this._height(this.dataSource.flatView().length || e);
                    this._calculateGroupPadding(t), this._calculateColumnsHeaderPadding(t)
                },
                _calculateColumnsHeaderPadding: function(e) {
                    var t, i, a;
                    this.options.columns && this.options.columns.length && (t = this, i = g.isRtl(t.wrapper), a = c.support.scrollbar(), t.columnsHeader.css(i ? "padding-left" : "padding-right", "auto" !== e ? a : 0))
                },
                _refreshScroll: function() {
                    var e = this.listView,
                        t = e.element.height() > e.content.height();
                    this.options.autoWidth && e.content.css({
                        overflowX: "hidden",
                        overflowY: t ? "scroll" : "auto"
                    })
                },
                _resizePopup: function(e) {
                    this.options.virtual || (this.popup.element.is(":visible") ? this._calculatePopupHeight(e) : (this.popup.one("open", function(e) {
                        return N(function() {
                            this._calculatePopupHeight(e)
                        }, this)
                    }.call(this, e)), this.popup.one("activate", N(this._refreshScroll, this))))
                },
                _popup: function() {
                    var e = this;
                    e.popup = new d.Popup(e.list, q({}, e.options.popup, {
                        anchor: e.wrapper,
                        open: N(e._openHandler, e),
                        close: N(e._closeHandler, e),
                        animation: e.options.animation,
                        isRtl: g.isRtl(e.wrapper),
                        autosize: e.options.autoWidth
                    }))
                },
                _toggleHover: function(t) {
                    e(t.currentTarget).toggleClass(y, "mouseenter" === t.type)
                },
                _toggle: function(e, i) {
                    var a = this,
                        n = g.mobileOS && (g.touch || g.MSPointers || g.pointers);
                    e = e !== t ? e : !a.popup.visible(), i || n || a._focused[0] === v() || (a._prevent = !0, a._focused.focus(), a._prevent = !1), a[e ? k : D]()
                },
                _triggerCascade: function() {
                    var e = this;
                    e._cascadeTriggered && e.value() === i(e._cascadedValue, typeof e.value()) || (e._cascadedValue = e.value(), e._cascadeTriggered = !0, e.trigger(H, {
                        userTriggered: e._userTriggered
                    }))
                },
                _triggerChange: function() {
                    this._valueBeforeCascade !== this.value() && this.trigger(w)
                },
                _unbindDataSource: function() {
                    var e = this;
                    e.dataSource.unbind(L, e._requestStartHandler).unbind(P, e._requestEndHandler).unbind("error", e._errorHandler)
                },
                requireValueMapper: function(e, t) {
                    var i = (e.value instanceof Array ? e.value.length : e.value) || (t instanceof Array ? t.length : t);
                    if (i && e.virtual && "function" != typeof e.virtual.valueMapper) throw Error("ValueMapper is not provided while the value is being set. See http://docs.telerik.com/kendo-ui/controls/editors/combobox/virtualization#the-valuemapper-function")
                }
            });
        q(Q, {
            inArray: function(e, t) {
                var i, a, n = t.children;
                if (!e || e.parentNode !== t) return -1;
                for (i = 0, a = n.length; i < a; i++)
                    if (e === n[i]) return i;
                return -1
            },
            unifyType: i
        }), c.ui.List = Q, d.Select = Q.extend({
            init: function(e, t) {
                Q.fn.init.call(this, e, t), this._initial = this.element.val()
            },
            setDataSource: function(e) {
                var t, i = this;
                i.options.dataSource = e, i._dataSource(), i.listView.bound() && (i._initialIndex = null, i.listView._current = null), i.listView.setDataSource(i.dataSource), i.options.autoBind && i.dataSource.fetch(), t = i._parentWidget(), t && i._cascadeSelect(t)
            },
            close: function() {
                this.popup.close()
            },
            select: function(e) {
                var i = this;
                return e === t ? i.selectedIndex : i._select(e).done(function() {
                    i._cascadeValue = i._old = i._accessor(), i._oldIndex = i.selectedIndex
                })
            },
            _accessor: function(e, t) {
                return this[this._isSelect ? "_accessorSelect" : "_accessorInput"](e, t)
            },
            _accessorInput: function(e) {
                var i = this.element[0];
                return e === t ? i.value : (null === e && (e = ""), i.value = e, t)
            },
            _accessorSelect: function(e, i) {
                var a, s = this.element[0];
                return e === t ? n(s).value || "" : (n(s).selected = !1, i === t && (i = -1), a = null !== e && "" !== e, a && i == -1 ? this._custom(e) : e ? s.value = e : s.selectedIndex = i, t)
            },
            _syncValueAndText: function() {
                return !0
            },
            _custom: function(t) {
                var i = this,
                    a = i.element,
                    n = i._customOption;
                n || (n = e("<option/>"), i._customOption = n, a.append(n)), n.text(t), n[0].selected = !0
            },
            _hideBusy: function() {
                var e = this;
                clearTimeout(e._busy), e._arrowIcon.removeClass(T), e._focused.attr("aria-busy", !1), e._busy = null, e._showClear()
            },
            _showBusy: function(e) {
                var t = this;
                e.isDefaultPrevented() || (t._request = !0, t._busy || (t._busy = setTimeout(function() {
                    t._arrowIcon && (t._focused.attr("aria-busy", !0), t._arrowIcon.addClass(T), t._hideClear())
                }, 100)))
            },
            _requestEnd: function() {
                this._request = !1, this._hideBusy()
            },
            _dataSource: function() {
                var t, i = this,
                    a = i.element,
                    n = i.options,
                    s = n.dataSource || {};
                s = e.isArray(s) ? {
                    data: s
                } : s, i._isSelect && (t = a[0].selectedIndex, t > -1 && (n.index = t), s.select = a, s.fields = [{
                    field: n.dataTextField
                }, {
                    field: n.dataValueField
                }]), i.dataSource ? i._unbindDataSource() : (i._requestStartHandler = N(i._showBusy, i), i._requestEndHandler = N(i._requestEnd, i), i._errorHandler = N(i._hideBusy, i)), i.dataSource = c.data.DataSource.create(s).bind(L, i._requestStartHandler).bind(P, i._requestEndHandler).bind("error", i._errorHandler)
            },
            _firstItem: function() {
                this.listView.focusFirst()
            },
            _lastItem: function() {
                this.listView.focusLast()
            },
            _nextItem: function() {
                return this.listView.focusNext()
            },
            _prevItem: function() {
                return this.listView.focusPrev()
            },
            _getNormalizedDataItem: function(e) {
                var t, i = this,
                    a = i.listView,
                    n = "number" == typeof e,
                    s = i.optionLabel && i.optionLabel.length;
                return t = n ? s ? --e : e : a.getElementIndex(e), a.dataItemByIndex(t)
            },
            _getNormalizedSelectCandidate: function(e) {
                var t = this,
                    i = t.optionLabel && t.optionLabel.length,
                    a = "number" == typeof e,
                    n = e;
                return i && a && n++, n
            },
            _move: function(e) {
                var t, i, a, n, s, r, l, o, u, c = this,
                    d = c.listView,
                    h = e.keyCode,
                    f = h === _.DOWN,
                    p = c.options.virtual;
                if (h === _.UP || f) {
                    if (e.altKey) c.toggle(f);
                    else {
                        if (!d.bound() && !c.ul[0].firstChild) return c._fetch || (c.dataSource.one(w, function() {
                            c._fetch = !1, c._move(e)
                        }), c._fetch = !0, c._filterSource()), e.preventDefault(), !0;
                        a = c._focus(), c._fetch || a && !a.hasClass("k-state-selected") || (f ? (n = c._nextItem(), (p && n <= 0 || !c._focus() && !n) && c._lastItem()) : (n = c._prevItem(), (p && n >= d.dataSource.total() - 1 || !c._focus() && !n) && c._firstItem())), s = c._getNormalizedSelectCandidate(c._get(c._focus()) || n || 0), c._select(s, !0).done(function() {
                            var e = function() {
                                c.popup.visible() || c._blur(), c._cascadedValue = null === c._cascadedValue ? c.value() : c.dataItem() ? c.dataItem()[c.options.dataValueField] || c.dataItem() : null
                            };
                            c.trigger(B, {
                                dataItem: c._getNormalizedDataItem(s),
                                item: c._focus()
                            }) ? c._select(a).done(e) : e()
                        })
                    }
                    e.preventDefault(), i = !0
                } else if (h === _.ENTER || h === _.TAB) {
                    if (c.popup.visible() && e.preventDefault(), a = c._focus(), t = c.dataItem(), c.popup.visible() || t && c.text() === c._text(t) || (a = null), r = c.filterInput && c.filterInput[0] === v(), a) {
                        if (t = d.dataItemByIndex(d.getElementIndex(a)), o = !0, t && (o = c._value(t) !== Q.unifyType(c.value(), typeof c._value(t))), o && c.trigger(B, {
                                dataItem: t,
                                item: a
                            })) return;
                        l = c._select(a)
                    } else c.input && ((c._syncValueAndText() || c._isSelect) && c._accessor(c.input.val()), c.listView.value(c.input.val()));
                    c._focusElement && c._focusElement(c.wrapper), r && h === _.TAB ? c.wrapper.focusout() : l && "function" == typeof l.done ? l.done(function() {
                        c._blur()
                    }) : c._blur(), c.close(), i = !0
                } else h === _.ESC ? (c.popup.visible() && e.preventDefault(), c.close(), i = !0) : !c.popup.visible() || h !== _.PAGEDOWN && h !== _.PAGEUP || (e.preventDefault(), u = h === _.PAGEDOWN ? 1 : -1, d.scrollWith(u * d.screenHeight()), i = !0);
                return i
            },
            _fetchData: function() {
                var e = this,
                    t = !!e.dataSource.view().length;
                e._request || e.options.cascadeFrom || e.listView.bound() || e._fetch || t || (e._fetch = !0, e.dataSource.fetch().done(function() {
                    e._fetch = !1
                }))
            },
            _options: function(e, i, a) {
                var s, r, l, o, u = this,
                    c = u.element,
                    d = c[0],
                    h = e.length,
                    f = "",
                    p = 0;
                for (i && (f = i); p < h; p++) s = "<option", r = e[p], l = u._text(r), o = u._value(r), o !== t && (o += "", o.indexOf('"') !== -1 && (o = o.replace(j, "&quot;")), s += ' value="' + o + '"'), s += ">", l !== t && (s += m(l)), s += "</option>", f += s;
                c.html(f), a !== t && (d.value = a, d.value && !a && (d.selectedIndex = -1)), d.selectedIndex !== -1 && (s = n(d), s && s.setAttribute(E, E))
            },
            _reset: function() {
                var t = this,
                    i = t.element,
                    a = i.attr("form"),
                    n = a ? e("#" + a) : i.closest("form");
                n[0] && (t._resetHandler = function() {
                    setTimeout(function() {
                        t.value(t._initial)
                    })
                }, t._form = n.on("reset", t._resetHandler))
            },
            _parentWidget: function() {
                var t, i, a, n = this.options.name;
                if (this.options.cascadeFrom) {
                    if (t = e("#" + this.options.cascadeFrom), i = t.data("kendo" + n), !i)
                        for (a = 0; a < $[n].length && !(i = t.data("kendo" + $[n][a])); a += 1);
                    return i
                }
            },
            _cascade: function() {
                var e, t = this,
                    i = t.options,
                    a = i.cascadeFrom;
                if (a) {
                    if (e = t._parentWidget(), !e) return;
                    t._cascadeHandlerProxy = N(t._cascadeHandler, t), t._cascadeFilterRequests = [], i.autoBind = !1, e.bind("set", function() {
                        t.one("set", function(e) {
                            t._selectedValue = e.value || t._accessor()
                        })
                    }), e.first(H, t._cascadeHandlerProxy), e.listView.bound() ? (t._toggleCascadeOnFocus(), t._cascadeSelect(e)) : (e.one("dataBound", function() {
                        t._toggleCascadeOnFocus(), e.popup.visible() && e._focused.focus()
                    }), e.value() || t.enable(!1))
                }
            },
            _toggleCascadeOnFocus: function() {
                var e = this,
                    t = e._parentWidget(),
                    i = U && t instanceof d.DropDownList ? G : A;
                t._focused.add(t.filterInput).bind(W, function() {
                    t.unbind(H, e._cascadeHandlerProxy), t.first(w, e._cascadeHandlerProxy)
                }), t._focused.add(t.filterInput).bind(i, function() {
                    t.unbind(w, e._cascadeHandlerProxy), t.first(H, e._cascadeHandlerProxy)
                })
            },
            _cascadeHandler: function(e) {
                var t = this._parentWidget(),
                    i = this.value();
                this._userTriggered = e.userTriggered || t._userTriggered, this.listView.bound() && this._clearSelection(t, !0), this._cascadeSelect(t, i)
            },
            _cascadeChange: function(e) {
                var t = this,
                    a = t._accessor() || t._selectedValue;
                t._cascadeFilterRequests.length || (t._selectedValue = null), t._userTriggered ? t._clearSelection(e, !0) : a ? (a !== i(t.listView.value()[0], typeof a) && t.value(a), t.dataSource.view()[0] && t.selectedIndex !== -1 || t._clearSelection(e, !0)) : t.dataSource.flatView().length && t.select(t.options.index), t.enable(), t._triggerCascade(), t._triggerChange(), t._userTriggered = !1
            },
            _cascadeSelect: function(e, i) {
                var a, n, s = this,
                    r = e.dataItem(),
                    o = r ? r[s.options.cascadeFromParentField] || e._value(r) : null,
                    u = s.options.cascadeFromField || e.options.dataValueField;
                s._valueBeforeCascade = i !== t ? i : s.value(), o || 0 === o ? (a = s.dataSource.filter() || {}, l(a, u), n = function() {
                    var t = s._cascadeFilterRequests.shift();
                    t && s.unbind("dataBound", t), t = s._cascadeFilterRequests[0], t && s.first("dataBound", t), s._cascadeChange(e)
                }, s._cascadeFilterRequests.push(n), 1 === s._cascadeFilterRequests.length && s.first("dataBound", n), s._cascading = !0, s._filterSource({
                    field: u,
                    operator: "eq",
                    value: o
                }), s._cascading = !1) : (s.enable(!1), s._clearSelection(e), s._triggerCascade(), s._triggerChange(), s._userTriggered = !1)
            }
        }), o = ".StaticList", u = c.ui.DataBoundWidget.extend({
            init: function(t, i) {
                p.fn.init.call(this, t, i), this.element.attr("role", "listbox").on("click" + o, "li", N(this._click, this)).on("mouseenter" + o, "li", function() {
                    e(this).addClass(y)
                }).on("mouseleave" + o, "li", function() {
                    e(this).removeClass(y)
                }), g.touch && this._touchHandlers(), "multiple" === this.options.selectable && this.element.attr("aria-multiselectable", !0), this.content = this.element.wrap("<div class='k-list-scroller' unselectable='on'></div>").parent(), this.header = this.content.before('<div class="k-group-header" style="display:none"></div>').prev(), this.bound(!1), this._optionID = c.guid(), this._selectedIndices = [], this._view = [], this._dataItems = [], this._values = [];
                var a = this.options.value;
                a && (this._values = e.isArray(a) ? a.slice(0) : [a]), this._getter(), this._templates(), this.setDataSource(this.options.dataSource), this._onScroll = N(function() {
                    var e = this;
                    clearTimeout(e._scrollId), e._scrollId = setTimeout(function() {
                        e._renderHeader()
                    }, 50)
                }, this)
            },
            options: {
                name: "StaticList",
                dataValueField: null,
                valuePrimitive: !1,
                selectable: !0,
                template: null,
                groupTemplate: null,
                fixedGroupTemplate: null
            },
            events: ["click", w, "activate", "deactivate", "dataBinding", "dataBound", "selectedItemChange"],
            setDataSource: function(t) {
                var i, a = this,
                    n = t || {};
                n = e.isArray(n) ? {
                    data: n
                } : n, n = c.data.DataSource.create(n), a.dataSource ? (a.dataSource.unbind(w, a._refreshHandler), i = a.value(), a.value([]), a.bound(!1), a.value(i)) : a._refreshHandler = N(a.refresh, a), a.setDSFilter(n.filter()), a.dataSource = n.bind(w, a._refreshHandler), a._fixedHeader()
            },
            _touchHandlers: function() {
                var t, i, a = this,
                    n = function(e) {
                        return (e.originalEvent || e).changedTouches[0].pageY
                    };
                a.element.on("touchstart" + o, function(e) {
                    t = n(e)
                }), a.element.on("touchend" + o, function(s) {
                    s.isDefaultPrevented() || (i = n(s), Math.abs(i - t) < 10 && (a._touchTriggered = !0, a._triggerClick(e(s.target).closest(V).get(0))))
                })
            },
            skip: function() {
                return this.dataSource.skip()
            },
            setOptions: function(e) {
                p.fn.setOptions.call(this, e), this._getter(), this._templates(), this._render()
            },
            destroy: function() {
                this.element.off(o), this._refreshHandler && this.dataSource.unbind(w, this._refreshHandler), clearTimeout(this._scrollId), p.fn.destroy.call(this)
            },
            dataItemByIndex: function(e) {
                return this.dataSource.flatView()[e]
            },
            screenHeight: function() {
                return this.content[0].clientHeight
            },
            scrollToIndex: function(e) {
                var t = this.element[0].children[e];
                t && this.scroll(t)
            },
            scrollWith: function(e) {
                this.content.scrollTop(this.content.scrollTop() + e)
            },
            scroll: function(e) {
                if (e) {
                    e[0] && (e = e[0]);
                    var t = this.content[0],
                        i = e.offsetTop,
                        a = e.offsetHeight,
                        n = t.scrollTop,
                        s = t.clientHeight,
                        r = i + a;
                    n > i ? n = i : r > n + s && (n = r - s), t.scrollTop = n
                }
            },
            selectedDataItems: function(e) {
                return e === t ? this._dataItems.slice() : (this._dataItems = e, this._values = this._getValues(e), t)
            },
            _getValues: function(t) {
                var i = this._valueGetter;
                return e.map(t, function(e) {
                    return i(e)
                })
            },
            focusNext: function() {
                var e = this.focus();
                e = e ? e.next() : 0, this.focus(e)
            },
            focusPrev: function() {
                var e = this.focus();
                e = e ? e.prev() : this.element[0].children.length - 1, this.focus(e)
            },
            focusFirst: function() {
                this.focus(this.element[0].children[0])
            },
            focusLast: function() {
                this.focus(a(this.element[0].children))
            },
            focus: function(i) {
                var n, s = this,
                    r = s._optionID;
                return i === t ? s._current : (i = a(s._get(i)), i = e(this.element[0].children[i]), s._current && (s._current.removeClass(S).removeAttr(I), s.trigger("deactivate")), n = !!i[0], n && (i.addClass(S), s.scroll(i), i.attr("id", r)), s._current = n ? i : null, s.trigger("activate"), t)
            },
            focusIndex: function() {
                return this.focus() ? this.focus().index() : t
            },
            skipUpdate: function(e) {
                this._skipUpdate = e
            },
            select: function(i) {
                var n, s, r, l = this,
                    o = l.options.selectable,
                    u = "multiple" !== o && o !== !1,
                    c = l._selectedIndices,
                    d = [this.element.find(".k-state-selected").index()],
                    h = [],
                    f = [];
                return i === t ? c.slice() : (i = l._get(i), 1 === i.length && i[0] === -1 && (i = []), s = e.Deferred().resolve(), r = l.isFiltered(), r && !u && l._deselectFiltered(i) ? s : u && !r && e.inArray(a(i), c) !== -1 && e.inArray(a(i), d) !== -1 ? (l._dataItems.length && l._view.length && (l._dataItems = [l._view[c[0]].item]), s) : (n = l._deselect(i), f = n.removed, i = n.indices, i.length && (u && (i = [a(i)]), h = l._select(i)), (h.length || f.length) && (l._valueComparer = null, l.trigger(w, {
                    added: h,
                    removed: f
                })), s))
            },
            removeAt: function(e) {
                return this._selectedIndices.splice(e, 1), this._values.splice(e, 1), this._valueComparer = null, {
                    position: e,
                    dataItem: this._dataItems.splice(e, 1)[0]
                }
            },
            setValue: function(t) {
                t = e.isArray(t) || t instanceof x ? t.slice(0) : [t], this._values = t, this._valueComparer = null
            },
            value: function(i) {
                var a, n = this,
                    s = n._valueDeferred;
                return i === t ? n._values.slice() : (n.setValue(i), s && "resolved" !== s.state() || (n._valueDeferred = s = e.Deferred()), n.bound() && (a = n._valueIndices(n._values), "multiple" === n.options.selectable && n.select(-1), n.select(a), s.resolve()), n._skipUpdate = !1, s)
            },
            items: function() {
                return this.element.children(V)
            },
            _click: function(e) {
                return this._touchTriggered ? (this._touchTriggered = !1, t) : (e.isDefaultPrevented() || this._triggerClick(e.currentTarget), t)
            },
            _triggerClick: function(t) {
                this.trigger("click", {
                    item: e(t)
                }) || this.select(t)
            },
            _valueExpr: function(e, t) {
                var a, n, s = this,
                    r = 0,
                    l = [];
                if (!s._valueComparer || s._valueType !== e) {
                    for (s._valueType = e; r < t.length; r++) l.push(i(t[r], e));
                    a = "for (var idx = 0; idx < " + l.length + "; idx++) { if (current === values[idx]) {   return idx; }} return -1;", n = Function("current", "values", a), s._valueComparer = function(e) {
                        return n(e, l)
                    }
                }
                return s._valueComparer
            },
            _dataItemPosition: function(e, t) {
                var i = this._valueGetter(e),
                    a = this._valueExpr(typeof i, t);
                return a(i)
            },
            _getter: function() {
                this._valueGetter = c.getter(this.options.dataValueField)
            },
            _deselect: function(t) {
                var i, a, n, s, r, l = this,
                    o = l.element[0].children,
                    u = l.options.selectable,
                    c = l._selectedIndices,
                    d = l._dataItems,
                    h = l._values,
                    f = [],
                    p = 0,
                    _ = 0;
                if (t = t.slice(), u !== !0 && t.length) {
                    if ("multiple" === u)
                        for (; p < t.length; p++)
                            if (a = t[p], e(o[a]).hasClass("k-state-selected"))
                                for (i = 0; i < c.length; i++)
                                    if (n = c[i], n === a) {
                                        e(o[n]).removeClass("k-state-selected").attr("aria-selected", !1), s = this._view[a].item, r = this._dataItemPosition(s, this._values), f.push({
                                            position: r,
                                            dataItem: s
                                        }), d.splice(i, 1), c.splice(i, 1), t.splice(p, 1), h.splice(i, 1), _ += 1, p -= 1, i -= 1;
                                        break
                                    }
                } else {
                    for (; p < c.length; p++) e(o[c[p]]).removeClass("k-state-selected").attr("aria-selected", !1), f.push({
                        position: p,
                        dataItem: d[p]
                    });
                    l._values = [], l._dataItems = [], l._selectedIndices = []
                }
                return {
                    indices: t,
                    removed: f
                }
            },
            _deselectFiltered: function(t) {
                for (var i, a, n, s = this.element[0].children, r = [], l = 0; l < t.length; l++) a = t[l], i = this._view[a].item, n = this._dataItemPosition(i, this._values), n > -1 && (r.push(this.removeAt(n)), e(s[a]).removeClass("k-state-selected"));
                return !!r.length && (this.trigger(w, {
                    added: [],
                    removed: r
                }), !0)
            },
            _select: function(t) {
                var i, n, s = this,
                    r = s.element[0].children,
                    l = s._view,
                    o = [],
                    u = 0;
                for (a(t) !== -1 && s.focus(t); u < t.length; u++) n = t[u], i = l[n], n !== -1 && i && (i = i.item, s._selectedIndices.push(n), s._dataItems.push(i), s._values.push(s._valueGetter(i)), e(r[n]).addClass("k-state-selected").attr("aria-selected", !0), o.push({
                    dataItem: i
                }));
                return o
            },
            getElementIndex: function(t) {
                return e(t).data("offset-index")
            },
            _get: function(e) {
                return "number" == typeof e ? e = [e] : O(e) || (e = this.getElementIndex(e), e = [e !== t ? e : -1]), e
            },
            _template: function() {
                var e = this,
                    t = e.options,
                    i = t.template;
                return i ? (i = c.template(i), i = function(e) {
                    return '<li tabindex="-1" role="option" unselectable="on" class="k-item">' + i(e) + "</li>"
                }) : i = c.template('<li tabindex="-1" role="option" unselectable="on" class="k-item">${' + c.expr(t.dataTextField, "data") + "}</li>", {
                    useWithBlock: !1
                }), i
            },
            _templates: function() {
                var e, t, i, a, n, s = this.options,
                    r = {
                        template: s.template,
                        groupTemplate: s.groupTemplate,
                        fixedGroupTemplate: s.fixedGroupTemplate
                    };
                if (s.columns)
                    for (t = 0; t < s.columns.length; t++) i = s.columns[t], a = i.field ? "" + i.field : "text", r["column" + t] = i.template || "#: " + a + "#";
                for (n in r) e = r[n], e && "function" != typeof e && (r[n] = c.template(e));
                this.templates = r
            },
            _normalizeIndices: function(e) {
                for (var i = [], a = 0; a < e.length; a++) e[a] !== t && i.push(e[a]);
                return i
            },
            _valueIndices: function(e, t) {
                var i, a = this._view,
                    n = 0;
                if (t = t ? t.slice() : [], !e.length) return [];
                for (; n < a.length; n++) i = this._dataItemPosition(a[n].item, e), i !== -1 && (t[i] = n);
                return this._normalizeIndices(t)
            },
            _firstVisibleItem: function() {
                for (var t = this.element[0], i = this.content[0], a = i.scrollTop, n = e(t.children[0]).height(), s = Math.floor(a / n) || 0, r = t.children[s] || t.lastChild, l = r.offsetTop < a; r;)
                    if (l) {
                        if (r.offsetTop + n > a || !r.nextSibling) break;
                        r = r.nextSibling
                    } else {
                        if (r.offsetTop <= a || !r.previousSibling) break;
                        r = r.previousSibling
                    }
                return this._view[e(r).data("offset-index")]
            },
            _fixedHeader: function() {
                this.isGrouped() && this.templates.fixedGroupTemplate ? (this.header.show(),
                    this.content.scroll(this._onScroll)) : (this.header.hide(), this.content.off("scroll", this._onScroll))
            },
            _renderHeader: function() {
                var e, t = this.templates.fixedGroupTemplate;
                t && (e = this._firstVisibleItem(), e && ("" + e.group).length && this.header.html(t(e.group)))
            },
            _renderItem: function(e) {
                var t = '<li tabindex="-1" role="option" unselectable="on" class="k-item',
                    i = e.item,
                    a = 0 !== e.index,
                    n = e.selected,
                    s = this.isGrouped(),
                    r = this.options.columns && this.options.columns.length;
                return a && e.newGroup && (t += " k-first"), e.isLastGroupedItem && r && (t += " k-last"), n && (t += " k-state-selected"), t += '" aria-selected="' + (n ? "true" : "false") + '" data-offset-index="' + e.index + '">', t += r ? this._renderColumns(i) : this.templates.template(i), a && e.newGroup ? t += r ? '<div class="k-cell k-group-cell"><span>' + this.templates.groupTemplate(e.group) + "</span></div>" : '<div class="k-group">' + this.templates.groupTemplate(e.group) + "</div>" : s && r && (t += "<div class='k-cell k-spacer-cell'></div>"), t + "</li>"
            },
            _renderColumns: function(e) {
                var t, i, a, n, s = "";
                for (t = 0; t < this.options.columns.length; t++) i = this.options.columns[t].width, a = parseInt(i, 10), n = "", i && !isNaN(a) && (n += "style='width:", n += a, n += f.test(i) ? "%" : "px", n += ";'"), s += "<span class='k-cell' " + n + ">", s += this.templates["column" + t](e), s += "</span>";
                return s
            },
            _render: function() {
                var e, t, i, a, n = "",
                    s = 0,
                    r = 0,
                    l = [],
                    o = this.dataSource.view(),
                    u = this.value(),
                    c = this.isGrouped();
                if (c)
                    for (s = 0; s < o.length; s++)
                        for (t = o[s], i = !0, a = 0; a < t.items.length; a++) e = {
                            selected: this._selected(t.items[a], u),
                            item: t.items[a],
                            group: t.value,
                            newGroup: i,
                            isLastGroupedItem: a === t.items.length - 1,
                            index: r
                        }, l[r] = e, r += 1, n += this._renderItem(e), i = !1;
                else
                    for (s = 0; s < o.length; s++) e = {
                        selected: this._selected(o[s], u),
                        item: o[s],
                        index: s
                    }, l[s] = e, n += this._renderItem(e);
                this._view = l, this.element[0].innerHTML = n, c && l.length && this._renderHeader()
            },
            _selected: function(e, t) {
                var i = !this.isFiltered() || "multiple" === this.options.selectable;
                return i && this._dataItemPosition(e, t) !== -1
            },
            setDSFilter: function(e) {
                this._lastDSFilter = q({}, e)
            },
            isFiltered: function() {
                return this._lastDSFilter || this.setDSFilter(this.dataSource.filter()), !c.data.Query.compareFilters(this.dataSource.filter(), this._lastDSFilter)
            },
            refresh: function(e) {
                var t, i = this,
                    a = e && e.action,
                    n = i.options.skipUpdateOnBind,
                    r = "itemchange" === a;
                i.trigger("dataBinding"), i._angularItems("cleanup"), i._fixedHeader(), i._render(), i.bound(!0), r || "remove" === a ? (t = s(i._dataItems, e.items), t.changed.length && (r ? i.trigger("selectedItemChange", {
                    items: t.changed
                }) : i.value(i._getValues(t.unchanged)))) : i.isFiltered() || i._skipUpdate || i._emptySearch ? (i.focus(0), i._skipUpdate && (i._skipUpdate = !1, i._selectedIndices = i._valueIndices(i._values, i._selectedIndices))) : n || a && "add" !== a || i.value(i._values), i._valueDeferred && i._valueDeferred.resolve(), i._angularItems("compile"), i.trigger("dataBound")
            },
            bound: function(e) {
                return e === t ? this._bound : (this._bound = e, t)
            },
            isGrouped: function() {
                return (this.dataSource.group() || []).length
            }
        }), d.plugin(u)
    }(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function(e, t, i) {
    (i || t)()
});
//# sourceMappingURL=kendo.list.min.js.map;
/** 
 * Kendo UI v2021.1.204 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/
! function(t, define) {
    define("kendo.fx.min", ["kendo.core.min"], t)
}(function() {
    return function(t, e) {
        function i(t) {
            return parseInt(t, 10)
        }

        function r(t, e) {
            return i(t.css(e))
        }

        function n(t) {
            var e, i = [];
            for (e in t) i.push(e);
            return i
        }

        function s(t) {
            for (var e in t) L.indexOf(e) != -1 && Q.indexOf(e) == -1 && delete t[e];
            return t
        }

        function o(t, e) {
            var i, r, n, s, o = [],
                a = {};
            for (r in e) i = r.toLowerCase(), s = H && L.indexOf(i) != -1, !E.hasHW3D && s && Q.indexOf(i) == -1 ? delete e[r] : (n = e[r], s ? o.push(r + "(" + n + ")") : a[r] = n);
            return o.length && (a[at] = o.join(" ")), a
        }

        function a(t, e) {
            var r, n, s;
            return H ? (r = t.css(at), r == J ? "scale" == e ? 1 : 0 : (n = r.match(RegExp(e + "\\s*\\(([\\d\\w\\.]+)")), s = 0, n ? s = i(n[1]) : (n = r.match(I) || [0, 0, 0, 0, 0], e = e.toLowerCase(), A.test(e) ? s = parseFloat(n[3] / n[2]) : "translatey" == e ? s = parseFloat(n[4] / n[2]) : "scale" == e ? s = parseFloat(n[2]) : "rotate" == e && (s = parseFloat(Math.atan2(n[2], n[1])))), s)) : parseFloat(t.css(e))
        }

        function c(t) {
            return t.charAt(0).toUpperCase() + t.substring(1)
        }

        function l(t, e) {
            var i = h.extend(e),
                r = i.prototype.directions;
            P[c(t)] = i, P.Element.prototype[t] = function(t, e, r, n) {
                return new i(this.element, t, e, r, n)
            }, T(r, function(e, r) {
                P.Element.prototype[t + c(r)] = function(t, e, n) {
                    return new i(this.element, r, t, e, n)
                }
            })
        }

        function d(t, i, r, n) {
            l(t, {
                directions: v,
                startValue: function(t) {
                    return this._startValue = t, this
                },
                endValue: function(t) {
                    return this._endValue = t, this
                },
                shouldHide: function() {
                    return this._shouldHide
                },
                prepare: function(t, s) {
                    var o, a, c = this,
                        l = "out" === this._direction,
                        d = c.element.data(i),
                        u = !(isNaN(d) || d == r);
                    o = u ? d : e !== this._startValue ? this._startValue : l ? r : n, a = e !== this._endValue ? this._endValue : l ? n : r, this._reverse ? (t[i] = a, s[i] = o) : (t[i] = o, s[i] = a), c._shouldHide = s[i] === n
                }
            })
        }

        function u(t, e) {
            var i = C.directions[e].vertical,
                r = t[i ? Y : X]() / 2 + "px";
            return _[e].replace("$size", r)
        }
        var f, p, h, m, v, x, _, g, y, k, b, w, C = window.kendo,
            P = C.effects,
            T = t.each,
            N = t.extend,
            z = t.proxy,
            E = C.support,
            R = E.browser,
            H = E.transforms,
            D = E.transitions,
            O = {
                scale: 0,
                scalex: 0,
                scaley: 0,
                scale3d: 0
            },
            F = {
                translate: 0,
                translatex: 0,
                translatey: 0,
                translate3d: 0
            },
            S = e !== document.documentElement.style.zoom && !H,
            I = /matrix3?d?\s*\(.*,\s*([\d\.\-]+)\w*?,\s*([\d\.\-]+)\w*?,\s*([\d\.\-]+)\w*?,\s*([\d\.\-]+)\w*?/i,
            q = /^(-?[\d\.\-]+)?[\w\s]*,?\s*(-?[\d\.\-]+)?[\w\s]*/i,
            A = /translatex?$/i,
            V = /(zoom|fade|expand)(\w+)/,
            M = /(zoom|fade|expand)/,
            $ = /[xy]$/i,
            L = ["perspective", "rotate", "rotatex", "rotatey", "rotatez", "rotate3d", "scale", "scalex", "scaley", "scalez", "scale3d", "skew", "skewx", "skewy", "translate", "translatex", "translatey", "translatez", "translate3d", "matrix", "matrix3d"],
            Q = ["rotate", "scale", "scalex", "scaley", "skew", "skewx", "skewy", "translate", "translatex", "translatey", "matrix"],
            W = {
                rotate: "deg",
                scale: "",
                skew: "px",
                translate: "px"
            },
            j = H.css,
            B = Math.round,
            U = "",
            G = "px",
            J = "none",
            K = "auto",
            X = "width",
            Y = "height",
            Z = "hidden",
            tt = "origin",
            et = "abortId",
            it = "overflow",
            rt = "translate",
            nt = "position",
            st = "completeCallback",
            ot = j + "transition",
            at = j + "transform",
            ct = j + "backface-visibility",
            lt = j + "perspective",
            dt = "1500px",
            ut = "perspective(" + dt + ")",
            ft = {
                left: {
                    reverse: "right",
                    property: "left",
                    transition: "translatex",
                    vertical: !1,
                    modifier: -1
                },
                right: {
                    reverse: "left",
                    property: "left",
                    transition: "translatex",
                    vertical: !1,
                    modifier: 1
                },
                down: {
                    reverse: "up",
                    property: "top",
                    transition: "translatey",
                    vertical: !0,
                    modifier: 1
                },
                up: {
                    reverse: "down",
                    property: "top",
                    transition: "translatey",
                    vertical: !0,
                    modifier: -1
                },
                top: {
                    reverse: "bottom"
                },
                bottom: {
                    reverse: "top"
                },
                "in": {
                    reverse: "out",
                    modifier: -1
                },
                out: {
                    reverse: "in",
                    modifier: 1
                },
                vertical: {
                    reverse: "vertical"
                },
                horizontal: {
                    reverse: "horizontal"
                }
            };
        C.directions = ft, N(t.fn, {
            kendoStop: function(t, e) {
                return D ? P.stopQueue(this, t || !1, e || !1) : this.stop(t, e)
            }
        }), H && !D && (T(Q, function(i, r) {
            t.fn[r] = function(i) {
                if (e === i) return a(this, r);
                var n = t(this)[0],
                    s = r + "(" + i + W[r.replace($, "")] + ")";
                return n.style.cssText.indexOf(at) == -1 ? t(this).css(at, s) : n.style.cssText = n.style.cssText.replace(RegExp(r + "\\(.*?\\)", "i"), s), this
            }, t.fx.step[r] = function(e) {
                t(e.elem)[r](e.now)
            }
        }), f = t.fx.prototype.cur, t.fx.prototype.cur = function() {
            return Q.indexOf(this.prop) != -1 ? parseFloat(t(this.elem)[this.prop]()) : f.apply(this, arguments)
        }), C.toggleClass = function(t, e, i, r) {
            return e && (e = e.split(" "), D && (i = N({
                exclusive: "all",
                duration: 400,
                ease: "ease-out"
            }, i), t.css(ot, i.exclusive + " " + i.duration + "ms " + i.ease), setTimeout(function() {
                t.css(ot, "").css(Y)
            }, i.duration)), T(e, function(e, i) {
                t.toggleClass(i, r)
            })), t
        }, C.parseEffects = function(t, e) {
            var i = {};
            return "string" == typeof t ? T(t.split(" "), function(t, r) {
                var n = !M.test(r),
                    s = r.replace(V, function(t, e, i) {
                        return e + ":" + i.toLowerCase()
                    }),
                    o = s.split(":"),
                    a = o[1],
                    c = {};
                o.length > 1 && (c.direction = e && n ? ft[a].reverse : a), i[o[0]] = c
            }) : T(t, function(t) {
                var r = this.direction;
                r && e && !M.test(t) && (this.direction = ft[r].reverse), i[t] = this
            }), i
        }, D && N(P, {
            transition: function(e, i, r) {
                var s, a, c, l, d = 0,
                    u = e.data("keys") || [];
                r = N({
                    duration: 200,
                    ease: "ease-out",
                    complete: null,
                    exclusive: "all"
                }, r), c = !1, l = function() {
                    c || (c = !0, a && (clearTimeout(a), a = null), e.removeData(et).dequeue().css(ot, "").css(ot), r.complete.call(e))
                }, r.duration = t.fx ? t.fx.speeds[r.duration] || r.duration : r.duration, s = o(e, i), t.merge(u, n(s)), t.hasOwnProperty("uniqueSort") ? e.data("keys", t.uniqueSort(u)).height() : e.data("keys", t.unique(u)).height(), e.css(ot, r.exclusive + " " + r.duration + "ms " + r.ease).css(ot), e.css(s).css(at), D.event && (e.one(D.event, l), 0 !== r.duration && (d = 500)), a = setTimeout(l, r.duration + d), e.data(et, a), e.data(st, l)
            },
            stopQueue: function(t, e, i) {
                var r, n = t.data("keys"),
                    s = !i && n,
                    o = t.data(st);
                return s && (r = C.getComputedStyles(t[0], n)), o && o(), s && t.css(r), t.removeData("keys").stop(e)
            }
        }), p = C.Class.extend({
            init: function(t, e) {
                var i = this;
                i.element = t, i.effects = [], i.options = e, i.restore = []
            },
            run: function(e) {
                var i, r, n, a, c, l, d, u = this,
                    f = e.length,
                    p = u.element,
                    h = u.options,
                    m = t.Deferred(),
                    v = {},
                    x = {};
                for (u.effects = e, m.done(t.proxy(u, "complete")), p.data("animating", !0), r = 0; r < f; r++)
                    for (i = e[r], i.setReverse(h.reverse), i.setOptions(h), u.addRestoreProperties(i.restore), i.prepare(v, x), c = i.children(), n = 0, l = c.length; n < l; n++) c[n].duration(h.duration).run();
                for (d in h.effects) N(x, h.effects[d].properties);
                for (p.is(":visible") || N(v, {
                        display: p.data("olddisplay") || "block"
                    }), H && !h.reset && (a = p.data("targetTransform"), a && (v = N(a, v))), v = o(p, v), H && !D && (v = s(v)), p.css(v).css(at), r = 0; r < f; r++) e[r].setup();
                return h.init && h.init(), p.data("targetTransform", x), P.animate(p, x, N({}, h, {
                    complete: m.resolve
                })), m.promise()
            },
            stop: function() {
                t(this.element).kendoStop(!0, !0)
            },
            addRestoreProperties: function(t) {
                for (var e, i = this.element, r = 0, n = t.length; r < n; r++) e = t[r], this.restore.push(e), i.data(e) || i.data(e, i.css(e))
            },
            restoreCallback: function() {
                var t, e, i, r = this.element;
                for (t = 0, e = this.restore.length; t < e; t++) i = this.restore[t], r.css(i, r.data(i))
            },
            complete: function() {
                var e = this,
                    i = 0,
                    r = e.element,
                    n = e.options,
                    s = e.effects,
                    o = s.length;
                for (r.removeData("animating").dequeue(), n.hide && r.data("olddisplay", r.css("display")).hide(), this.restoreCallback(), S && !H && setTimeout(t.proxy(this, "restoreCallback"), 0); i < o; i++) s[i].teardown();
                n.completeCallback && n.completeCallback(r)
            }
        }), P.promise = function(t, e) {
            var i, r, n, s = [],
                o = new p(t, e),
                a = C.parseEffects(e.effects);
            e.effects = a;
            for (n in a) i = P[c(n)], i && (r = new i(t, a[n].direction), s.push(r));
            s[0] ? o.run(s) : (t.is(":visible") || t.css({
                display: t.data("olddisplay") || "block"
            }).css("display"), e.init && e.init(), t.dequeue(), o.complete())
        }, N(P, {
            animate: function(i, n, o) {
                var a = o.transition !== !1;
                delete o.transition, D && "transition" in P && a ? P.transition(i, n, o) : H ? i.animate(s(n), {
                    queue: !1,
                    show: !1,
                    hide: !1,
                    duration: o.duration,
                    complete: o.complete
                }) : i.each(function() {
                    var i = t(this),
                        s = {};
                    T(L, function(t, o) {
                        var a, c, l, d, u, f, p, h = n ? n[o] + " " : null;
                        h && (c = n, o in O && n[o] !== e ? (a = h.match(q), H && N(c, {
                            scale: +a[0]
                        })) : o in F && n[o] !== e && (l = i.css(nt), d = "absolute" == l || "fixed" == l, i.data(rt) || (d ? i.data(rt, {
                            top: r(i, "top") || 0,
                            left: r(i, "left") || 0,
                            bottom: r(i, "bottom"),
                            right: r(i, "right")
                        }) : i.data(rt, {
                            top: r(i, "marginTop") || 0,
                            left: r(i, "marginLeft") || 0
                        })), u = i.data(rt), a = h.match(q), a && (f = o == rt + "y" ? 0 : +a[1], p = o == rt + "y" ? +a[1] : +a[2], d ? (isNaN(u.right) ? isNaN(f) || N(c, {
                            left: u.left + f
                        }) : isNaN(f) || N(c, {
                            right: u.right - f
                        }), isNaN(u.bottom) ? isNaN(p) || N(c, {
                            top: u.top + p
                        }) : isNaN(p) || N(c, {
                            bottom: u.bottom - p
                        })) : (isNaN(f) || N(c, {
                            marginLeft: u.left + f
                        }), isNaN(p) || N(c, {
                            marginTop: u.top + p
                        })))), !H && "scale" != o && o in c && delete c[o], c && N(s, c))
                    }), R.msie && delete s.scale, i.animate(s, {
                        queue: !1,
                        show: !1,
                        hide: !1,
                        duration: o.duration,
                        complete: o.complete
                    })
                })
            }
        }), P.animatedPromise = P.promise, h = C.Class.extend({
            init: function(t, e) {
                var i = this;
                i.element = t, i._direction = e, i.options = {}, i._additionalEffects = [], i.restore || (i.restore = [])
            },
            reverse: function() {
                return this._reverse = !0, this.run()
            },
            play: function() {
                return this._reverse = !1, this.run()
            },
            add: function(t) {
                return this._additionalEffects.push(t), this
            },
            direction: function(t) {
                return this._direction = t, this
            },
            duration: function(t) {
                return this._duration = t, this
            },
            compositeRun: function() {
                var t = this,
                    e = new p(t.element, {
                        reverse: t._reverse,
                        duration: t._duration
                    }),
                    i = t._additionalEffects.concat([t]);
                return e.run(i)
            },
            run: function() {
                if (this._additionalEffects && this._additionalEffects[0]) return this.compositeRun();
                var e, i, r = this,
                    n = r.element,
                    a = 0,
                    c = r.restore,
                    l = c.length,
                    d = t.Deferred(),
                    u = {},
                    f = {},
                    p = r.children(),
                    h = p.length;
                for (d.done(t.proxy(r, "_complete")), n.data("animating", !0), a = 0; a < l; a++) e = c[a], n.data(e) || n.data(e, n.css(e));
                for (a = 0; a < h; a++) p[a].duration(r._duration).run();
                return r.prepare(u, f), n.is(":visible") || N(u, {
                    display: n.data("olddisplay") || "block"
                }), H && (i = n.data("targetTransform"), i && (u = N(i, u))), u = o(n, u), H && !D && (u = s(u)), n.css(u).css(at), r.setup(), n.data("targetTransform", f), P.animate(n, f, {
                    duration: r._duration,
                    complete: d.resolve
                }), d.promise()
            },
            stop: function() {
                var e = 0,
                    i = this.children(),
                    r = i.length;
                for (e = 0; e < r; e++) i[e].stop();
                return t(this.element).kendoStop(!0, !0), this
            },
            restoreCallback: function() {
                var t, e, i, r = this.element;
                for (t = 0, e = this.restore.length; t < e; t++) i = this.restore[t], r.css(i, r.data(i))
            },
            _complete: function() {
                var e = this,
                    i = e.element;
                i.removeData("animating").dequeue(), e.restoreCallback(), e.shouldHide() && i.data("olddisplay", i.css("display")).hide(), S && !H && setTimeout(t.proxy(e, "restoreCallback"), 0), e.teardown()
            },
            setOptions: function(t) {
                N(!0, this.options, t)
            },
            children: function() {
                return []
            },
            shouldHide: t.noop,
            setup: t.noop,
            prepare: t.noop,
            teardown: t.noop,
            directions: [],
            setReverse: function(t) {
                return this._reverse = t, this
            }
        }), m = ["left", "right", "up", "down"], v = ["in", "out"], l("slideIn", {
            directions: m,
            divisor: function(t) {
                return this.options.divisor = t, this
            },
            prepare: function(t, e) {
                var i, r = this,
                    n = r.element,
                    s = C._outerWidth,
                    o = C._outerHeight,
                    a = ft[r._direction],
                    c = -a.modifier * (a.vertical ? o(n) : s(n)),
                    l = c / (r.options && r.options.divisor || 1) + G,
                    d = "0px";
                r._reverse && (i = t, t = e, e = i), H ? (t[a.transition] = l, e[a.transition] = d) : (t[a.property] = l, e[a.property] = d)
            }
        }), l("tile", {
            directions: m,
            init: function(t, e, i) {
                h.prototype.init.call(this, t, e), this.options = {
                    previous: i
                }
            },
            previousDivisor: function(t) {
                return this.options.previousDivisor = t, this
            },
            children: function() {
                var t = this,
                    e = t._reverse,
                    i = t.options.previous,
                    r = t.options.previousDivisor || 1,
                    n = t._direction,
                    s = [C.fx(t.element).slideIn(n).setReverse(e)];
                return i && s.push(C.fx(i).slideIn(ft[n].reverse).divisor(r).setReverse(!e)), s
            }
        }), d("fade", "opacity", 1, 0), d("zoom", "scale", 1, .01), l("slideMargin", {
            prepare: function(t, e) {
                var i, r = this,
                    n = r.element,
                    s = r.options,
                    o = n.data(tt),
                    a = s.offset,
                    c = r._reverse;
                c || null !== o || n.data(tt, parseFloat(n.css("margin-" + s.axis))), i = n.data(tt) || 0, e["margin-" + s.axis] = c ? i : i + a
            }
        }), l("slideTo", {
            prepare: function(t, e) {
                var i = this,
                    r = i.element,
                    n = i.options,
                    s = n.offset.split(","),
                    o = i._reverse;
                H ? (e.translatex = o ? 0 : s[0], e.translatey = o ? 0 : s[1]) : (e.left = o ? 0 : s[0], e.top = o ? 0 : s[1]), r.css("left")
            }
        }), l("expand", {
            directions: ["horizontal", "vertical"],
            restore: [it],
            prepare: function(t, i) {
                var r = this,
                    n = r.element,
                    s = r.options,
                    o = r._reverse,
                    a = "vertical" === r._direction ? Y : X,
                    c = n[0].style[a],
                    l = n.data(a),
                    d = parseFloat(l || c),
                    u = B(n.css(a, K)[a]());
                t.overflow = Z, d = s && s.reset ? u || d : d || u, i[a] = (o ? 0 : d) + G, t[a] = (o ? d : 0) + G, l === e && n.data(a, c)
            },
            shouldHide: function() {
                return this._reverse
            },
            teardown: function() {
                var t = this,
                    e = t.element,
                    i = "vertical" === t._direction ? Y : X,
                    r = e.data(i);
                r != K && r !== U || setTimeout(function() {
                    e.css(i, K).css(i)
                }, 0)
            }
        }), x = {
            position: "absolute",
            marginLeft: 0,
            marginTop: 0,
            scale: 1
        }, l("transfer", {
            init: function(t, e) {
                this.element = t, this.options = {
                    target: e
                }, this.restore = []
            },
            setup: function() {
                this.element.appendTo(document.body)
            },
            prepare: function(t, e) {
                var i = this,
                    r = i.element,
                    n = P.box(r),
                    s = P.box(i.options.target),
                    o = a(r, "scale"),
                    c = P.fillScale(s, n),
                    l = P.transformOrigin(s, n);
                N(t, x), e.scale = 1, r.css(at, "scale(1)").css(at), r.css(at, "scale(" + o + ")"), t.top = n.top, t.left = n.left, t.transformOrigin = l.x + G + " " + l.y + G, i._reverse ? t.scale = c : e.scale = c
            }
        }), _ = {
            top: "rect(auto auto $size auto)",
            bottom: "rect($size auto auto auto)",
            left: "rect(auto $size auto auto)",
            right: "rect(auto auto auto $size)"
        }, g = {
            top: {
                start: "rotatex(0deg)",
                end: "rotatex(180deg)"
            },
            bottom: {
                start: "rotatex(-180deg)",
                end: "rotatex(0deg)"
            },
            left: {
                start: "rotatey(0deg)",
                end: "rotatey(-180deg)"
            },
            right: {
                start: "rotatey(180deg)",
                end: "rotatey(0deg)"
            }
        }, l("turningPage", {
            directions: m,
            init: function(t, e, i) {
                h.prototype.init.call(this, t, e), this._container = i
            },
            prepare: function(t, e) {
                var i = this,
                    r = i._reverse,
                    n = r ? ft[i._direction].reverse : i._direction,
                    s = g[n];
                t.zIndex = 1, i._clipInHalf && (t.clip = u(i._container, C.directions[n].reverse)), t[ct] = Z, e[at] = ut + (r ? s.start : s.end), t[at] = ut + (r ? s.end : s.start)
            },
            setup: function() {
                this._container.append(this.element)
            },
            face: function(t) {
                return this._face = t, this
            },
            shouldHide: function() {
                var t = this,
                    e = t._reverse,
                    i = t._face;
                return e && !i || !e && i
            },
            clipInHalf: function(t) {
                return this._clipInHalf = t, this
            },
            temporary: function() {
                return this.element.addClass("temp-page"), this
            }
        }), l("staticPage", {
            directions: m,
            init: function(t, e, i) {
                h.prototype.init.call(this, t, e), this._container = i
            },
            restore: ["clip"],
            prepare: function(t, e) {
                var i = this,
                    r = i._reverse ? ft[i._direction].reverse : i._direction;
                t.clip = u(i._container, r), t.opacity = .999, e.opacity = 1
            },
            shouldHide: function() {
                var t = this,
                    e = t._reverse,
                    i = t._face;
                return e && !i || !e && i
            },
            face: function(t) {
                return this._face = t, this
            }
        }), l("pageturn", {
            directions: ["horizontal", "vertical"],
            init: function(t, e, i, r) {
                h.prototype.init.call(this, t, e), this.options = {}, this.options.face = i, this.options.back = r
            },
            children: function() {
                var t, e = this,
                    i = e.options,
                    r = "horizontal" === e._direction ? "left" : "top",
                    n = C.directions[r].reverse,
                    s = e._reverse,
                    o = i.face.clone(!0).removeAttr("id"),
                    a = i.back.clone(!0).removeAttr("id"),
                    c = e.element;
                return s && (t = r, r = n, n = t), [C.fx(i.face).staticPage(r, c).face(!0).setReverse(s), C.fx(i.back).staticPage(n, c).setReverse(s), C.fx(o).turningPage(r, c).face(!0).clipInHalf(!0).temporary().setReverse(s), C.fx(a).turningPage(n, c).clipInHalf(!0).temporary().setReverse(s)]
            },
            prepare: function(t, e) {
                t[lt] = dt, t.transformStyle = "preserve-3d", t.opacity = .999, e.opacity = 1
            },
            teardown: function() {
                this.element.find(".temp-page").remove()
            }
        }), l("flip", {
            directions: ["horizontal", "vertical"],
            init: function(t, e, i, r) {
                h.prototype.init.call(this, t, e), this.options = {}, this.options.face = i, this.options.back = r
            },
            children: function() {
                var t, e = this,
                    i = e.options,
                    r = "horizontal" === e._direction ? "left" : "top",
                    n = C.directions[r].reverse,
                    s = e._reverse,
                    o = e.element;
                return s && (t = r, r = n, n = t), [C.fx(i.face).turningPage(r, o).face(!0).setReverse(s), C.fx(i.back).turningPage(n, o).setReverse(s)]
            },
            prepare: function(t) {
                t[lt] = dt, t.transformStyle = "preserve-3d"
            }
        }), y = !E.mobileOS.android, k = ".km-touch-scrollbar, .km-actionsheet-wrapper", l("replace", {
            _before: t.noop,
            _after: t.noop,
            init: function(e, i, r) {
                h.prototype.init.call(this, e), this._previous = t(i), this._transitionClass = r
            },
            duration: function() {
                throw Error("The replace effect does not support duration setting; the effect duration may be customized through the transition class rule")
            },
            beforeTransition: function(t) {
                return this._before = t, this
            },
            afterTransition: function(t) {
                return this._after = t, this
            },
            _both: function() {
                return t().add(this._element).add(this._previous)
            },
            _containerClass: function() {
                var t = this._direction,
                    e = "k-fx k-fx-start k-fx-" + this._transitionClass;
                return t && (e += " k-fx-" + t), this._reverse && (e += " k-fx-reverse"), e
            },
            complete: function(e) {
                if (!(!this.deferred || e && t(e.target).is(k))) {
                    var i = this.container;
                    i.removeClass("k-fx-end").removeClass(this._containerClass()).off(D.event, this.completeProxy), this._previous.hide().removeClass("k-fx-current"), this.element.removeClass("k-fx-next"), y && i.css(it, ""), this.isAbsolute || this._both().css(nt, ""), this.deferred.resolve(), delete this.deferred
                }
            },
            run: function() {
                if (this._additionalEffects && this._additionalEffects[0]) return this.compositeRun();
                var e, i = this,
                    r = i.element,
                    n = i._previous,
                    s = r.parents().filter(n.parents()).first(),
                    o = i._both(),
                    a = t.Deferred(),
                    c = r.css(nt);
                return s.length || (s = r.parent()), this.container = s, this.deferred = a, this.isAbsolute = "absolute" == c, this.isAbsolute || o.css(nt, "absolute"), y && (e = s.css(it), s.css(it, "hidden")), D ? (r.addClass("k-fx-hidden"), s.addClass(this._containerClass()), this.completeProxy = t.proxy(this, "complete"), s.on(D.event, this.completeProxy), C.animationFrame(function() {
                    r.removeClass("k-fx-hidden").addClass("k-fx-next"), n.css("display", "").addClass("k-fx-current"), i._before(n, r), C.animationFrame(function() {
                        s.removeClass("k-fx-start").addClass("k-fx-end"), i._after(n, r)
                    })
                })) : this.complete(), a.promise()
            },
            stop: function() {
                this.complete()
            }
        }), b = C.Class.extend({
            init: function() {
                var t = this;
                t._tickProxy = z(t._tick, t), t._started = !1
            },
            tick: t.noop,
            done: t.noop,
            onEnd: t.noop,
            onCancel: t.noop,
            start: function() {
                this.enabled() && (this.done() ? this.onEnd() : (this._started = !0, C.animationFrame(this._tickProxy)))
            },
            enabled: function() {
                return !0
            },
            cancel: function() {
                this._started = !1, this.onCancel()
            },
            _tick: function() {
                var t = this;
                t._started && (t.tick(), t.done() ? (t._started = !1, t.onEnd()) : C.animationFrame(t._tickProxy))
            }
        }), w = b.extend({
            init: function(t) {
                var e = this;
                N(e, t), b.fn.init.call(e)
            },
            done: function() {
                return this.timePassed() >= this.duration
            },
            timePassed: function() {
                return Math.min(this.duration, new Date - this.startDate)
            },
            moveTo: function(t) {
                var e = this,
                    i = e.movable;
                e.initial = i[e.axis], e.delta = t.location - e.initial, e.duration = "number" == typeof t.duration ? t.duration : 300, e.tick = e._easeProxy(t.ease), e.startDate = new Date, e.start()
            },
            _easeProxy: function(t) {
                var e = this;
                return function() {
                    e.movable.moveAxis(e.axis, t(e.timePassed(), e.initial, e.delta, e.duration))
                }
            }
        }), N(w, {
            easeOutExpo: function(t, e, i, r) {
                return t == r ? e + i : i * (-Math.pow(2, -10 * t / r) + 1) + e
            },
            easeOutBack: function(t, e, i, r, n) {
                return n = 1.70158, i * ((t = t / r - 1) * t * ((n + 1) * t + n) + 1) + e
            }
        }), P.Animation = b, P.Transition = w, P.createEffect = l, P.box = function(e) {
            e = t(e);
            var i = e.offset();
            return i.width = C._outerWidth(e), i.height = C._outerHeight(e), i
        }, P.transformOrigin = function(t, e) {
            var i = (t.left - e.left) * e.width / (e.width - t.width),
                r = (t.top - e.top) * e.height / (e.height - t.height);
            return {
                x: isNaN(i) ? 0 : i,
                y: isNaN(r) ? 0 : r
            }
        }, P.fillScale = function(t, e) {
            return Math.min(t.width / e.width, t.height / e.height)
        }, P.fitScale = function(t, e) {
            return Math.max(t.width / e.width, t.height / e.height)
        }
    }(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function(t, e, i) {
    (i || e)()
});
//# sourceMappingURL=kendo.fx.min.js.map;
/** 
 * Kendo UI v2021.1.204 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/
! function(e, define) {
    define("kendo.userevents.min", ["kendo.core.min"], e)
}(function() {
    return function(e, t) {
        function n(e, t) {
            var n = e.x.location,
                i = e.y.location,
                o = t.x.location,
                r = t.y.location,
                s = n - o,
                a = i - r;
            return {
                center: {
                    x: (n + o) / 2,
                    y: (i + r) / 2
                },
                distance: Math.sqrt(s * s + a * a)
            }
        }

        function i(e) {
            var t, n, i, o = [],
                r = e.originalEvent,
                a = e.currentTarget,
                c = 0;
            if (e.api) o.push({
                id: 2,
                event: e,
                target: e.target,
                currentTarget: e.target,
                location: e,
                type: "api"
            });
            else if (e.type.match(/touch/))
                for (n = r ? r.changedTouches : [], t = n.length; c < t; c++) i = n[c], o.push({
                    location: i,
                    event: e,
                    target: i.target,
                    currentTarget: a,
                    id: i.identifier,
                    type: "touch"
                });
            else o.push(s.pointers || s.msPointers ? {
                location: r,
                event: e,
                target: e.target,
                currentTarget: a,
                id: r.pointerId,
                type: "pointer"
            } : {
                id: 1,
                event: e,
                target: e.target,
                currentTarget: a,
                location: e,
                type: "mouse"
            });
            return o
        }

        function o(e) {
            for (var t = r.eventMap.up.split(" "), n = 0, i = t.length; n < i; n++) e(t[n])
        }
        var r = window.kendo,
            s = r.support,
            a = r.Class,
            c = r.Observable,
            u = e.now,
            l = e.extend,
            h = s.mobileOS,
            p = h && h.android,
            d = 800,
            f = 300,
            v = s.browser.msie ? 5 : 0,
            g = "press",
            _ = "hold",
            m = "select",
            T = "start",
            y = "move",
            k = "end",
            E = "cancel",
            x = "tap",
            D = "doubleTap",
            M = "release",
            w = "gesturestart",
            b = "gesturechange",
            A = "gestureend",
            C = "gesturetap",
            I = {
                api: 0,
                touch: 0,
                mouse: 9,
                pointer: 9
            },
            S = !s.touch || s.mouseAndTouchPresent,
            P = a.extend({
                init: function(e, t) {
                    var n = this;
                    n.axis = e, n._updateLocationData(t), n.startLocation = n.location, n.velocity = n.delta = 0, n.timeStamp = u()
                },
                move: function(e) {
                    var t = this,
                        n = e["page" + t.axis],
                        i = u(),
                        o = i - t.timeStamp || 1;
                    !n && p || (t.delta = n - t.location, t._updateLocationData(e), t.initialDelta = n - t.startLocation, t.velocity = t.delta / o, t.timeStamp = i)
                },
                _updateLocationData: function(e) {
                    var t = this,
                        n = t.axis;
                    t.location = e["page" + n], t.client = e["client" + n], t.screen = e["screen" + n]
                }
            }),
            L = a.extend({
                init: function(e, t, n) {
                    l(this, {
                        x: new P("X", n.location),
                        y: new P("Y", n.location),
                        type: n.type,
                        useClickAsTap: e.useClickAsTap,
                        threshold: e.threshold || I[n.type],
                        userEvents: e,
                        target: t,
                        currentTarget: n.currentTarget,
                        initialTouch: n.target,
                        id: n.id,
                        pressEvent: n,
                        _clicks: e._clicks,
                        supportDoubleTap: e.supportDoubleTap,
                        _moved: !1,
                        _finished: !1
                    })
                },
                press: function() {
                    this._holdTimeout = setTimeout(e.proxy(this, "_hold"), this.userEvents.minHold), this._trigger(g, this.pressEvent)
                },
                _tap: function(e) {
                    var t = this;
                    t.userEvents._clicks++, 1 == t.userEvents._clicks && (t._clickTimeout = setTimeout(function() {
                        1 == t.userEvents._clicks ? t._trigger(x, e) : t._trigger(D, e), t.userEvents._clicks = 0
                    }, f))
                },
                _hold: function() {
                    this._trigger(_, this.pressEvent)
                },
                move: function(e) {
                    var t = this,
                        n = "api" !== e.type && t.userEvents._shouldNotMove;
                    if (!t._finished && !n) {
                        if (t.x.move(e.location), t.y.move(e.location), !t._moved) {
                            if (t._withinIgnoreThreshold()) return;
                            if (X.current && X.current !== t.userEvents) return t.dispose();
                            t._start(e)
                        }
                        t._finished || t._trigger(y, e)
                    }
                },
                end: function(e) {
                    this.endTime = u(), this._finished || (this._finished = !0, this._trigger(M, e), this._moved ? this._trigger(k, e) : this.useClickAsTap || (this.supportDoubleTap ? this._tap(e) : this._trigger(x, e)), clearTimeout(this._holdTimeout), this.dispose())
                },
                dispose: function() {
                    var t = this.userEvents,
                        n = t.touches;
                    this._finished = !0, this.pressEvent = null, clearTimeout(this._holdTimeout), n.splice(e.inArray(this, n), 1)
                },
                skip: function() {
                    this.dispose()
                },
                cancel: function() {
                    this.dispose()
                },
                isMoved: function() {
                    return this._moved
                },
                _start: function(e) {
                    clearTimeout(this._holdTimeout), this.startTime = u(), this._moved = !0, this._trigger(T, e)
                },
                _trigger: function(e, t) {
                    var n = this,
                        i = t.event,
                        o = {
                            touch: n,
                            x: n.x,
                            y: n.y,
                            target: n.target,
                            event: i
                        };
                    n.userEvents.notify(e, o) && i.preventDefault()
                },
                _withinIgnoreThreshold: function() {
                    var e = this.x.initialDelta,
                        t = this.y.initialDelta;
                    return Math.sqrt(e * e + t * t) <= this.threshold
                }
            }),
            X = c.extend({
                init: function(t, n) {
                    var i, a, u, h, p = this,
                        f = r.guid();
                    n = n || {}, i = p.filter = n.filter, p.threshold = n.threshold || v, p.minHold = n.minHold || d, p.touches = [], p._maxTouches = n.multiTouch ? 2 : 1, p.allowSelection = n.allowSelection, p.captureUpIfMoved = n.captureUpIfMoved, p.useClickAsTap = !n.fastTap && !s.delayedClick(), p.eventNS = f, p._clicks = 0, p.supportDoubleTap = n.supportDoubleTap, t = e(t).handler(p), c.fn.init.call(p), l(p, {
                        element: t,
                        surface: e(n.global && S ? t[0].ownerDocument.documentElement : n.surface || t),
                        stopPropagation: n.stopPropagation,
                        pressed: !1
                    }), p.surface.handler(p).on(r.applyEventMap("move", f), "_move").on(r.applyEventMap("up cancel", f), "_end"), t.on(r.applyEventMap("down", f), i, "_start"), p.useClickAsTap && t.on(r.applyEventMap("click", f), i, "_click"), (s.pointers || s.msPointers) && (s.browser.version < 11 ? (a = "pinch-zoom double-tap-zoom", t.css("-ms-touch-action", n.touchAction && "none" != n.touchAction ? a + " " + n.touchAction : a)) : t.css("touch-action", n.touchAction || "none")), n.preventDragEvent && t.on(r.applyEventMap("dragstart", f), r.preventDefault), t.on(r.applyEventMap("mousedown", f), i, {
                        root: t
                    }, "_select"), p.captureUpIfMoved && s.eventCapture && (u = p.surface[0], h = e.proxy(p.preventIfMoving, p), o(function(e) {
                        u.addEventListener(e, h, !0)
                    })), p.bind([g, _, x, D, T, y, k, M, E, w, b, A, C, m], n)
                },
                preventIfMoving: function(e) {
                    this._isMoved() && e.preventDefault()
                },
                destroy: function() {
                    var e, t = this;
                    t._destroyed || (t._destroyed = !0, t.captureUpIfMoved && s.eventCapture && (e = t.surface[0], o(function(n) {
                        e.removeEventListener(n, t.preventIfMoving)
                    })), t.element.kendoDestroy(t.eventNS), t.surface.kendoDestroy(t.eventNS), t.element.removeData("handler"), t.surface.removeData("handler"), t._disposeAll(), t.unbind(), delete t.surface, delete t.element, delete t.currentTarget)
                },
                capture: function() {
                    X.current = this
                },
                cancel: function() {
                    this._disposeAll(), this.trigger(E)
                },
                notify: function(e, t) {
                    var i = this,
                        o = i.touches;
                    if (this._isMultiTouch()) {
                        switch (e) {
                            case y:
                                e = b;
                                break;
                            case k:
                                e = A;
                                break;
                            case x:
                                e = C
                        }
                        l(t, {
                            touches: o
                        }, n(o[0], o[1]))
                    }
                    return this.trigger(e, l(t, {
                        type: e
                    }))
                },
                press: function(e, t, n) {
                    this._apiCall("_start", e, t, n)
                },
                move: function(e, t) {
                    this._apiCall("_move", e, t)
                },
                end: function(e, t) {
                    this._apiCall("_end", e, t)
                },
                _isMultiTouch: function() {
                    return this.touches.length > 1
                },
                _maxTouchesReached: function() {
                    return this.touches.length >= this._maxTouches
                },
                _disposeAll: function() {
                    for (var e = this.touches; e.length > 0;) e.pop().dispose()
                },
                _isMoved: function() {
                    return e.grep(this.touches, function(e) {
                        return e.isMoved()
                    }).length
                },
                _select: function(e) {
                    this.allowSelection && !this.trigger(m, {
                        event: e
                    }) || e.preventDefault()
                },
                _start: function(t) {
                    var n, o, r = this,
                        s = 0,
                        a = r.filter,
                        c = i(t),
                        u = c.length,
                        l = t.which;
                    if (!(l && l > 1 || r._maxTouchesReached()))
                        for (X.current = null, r.currentTarget = t.currentTarget, r.stopPropagation && t.stopPropagation(); s < u && !r._maxTouchesReached(); s++) o = c[s], n = a ? e(o.currentTarget) : r.element, n.length && (o = new L(r, n, o), r.touches.push(o), o.press(), r._isMultiTouch() && r.notify("gesturestart", {}))
                },
                _move: function(e) {
                    this._eachTouch("move", e)
                },
                _end: function(e) {
                    this._eachTouch("end", e)
                },
                _click: function(t) {
                    var n = {
                        touch: {
                            initialTouch: t.target,
                            target: e(t.currentTarget),
                            endTime: u(),
                            x: {
                                location: t.pageX,
                                client: t.clientX
                            },
                            y: {
                                location: t.pageY,
                                client: t.clientY
                            }
                        },
                        x: t.pageX,
                        y: t.pageY,
                        target: e(t.currentTarget),
                        event: t,
                        type: "tap"
                    };
                    this.trigger("tap", n) && t.preventDefault()
                },
                _eachTouch: function(e, t) {
                    var n, o, r, s, a = this,
                        c = {},
                        u = i(t),
                        l = a.touches;
                    for (n = 0; n < l.length; n++) o = l[n], c[o.id] = o;
                    for (n = 0; n < u.length; n++) r = u[n], s = c[r.id], s && s[e](r)
                },
                _apiCall: function(t, n, i, o) {
                    this[t]({
                        api: !0,
                        pageX: n,
                        pageY: i,
                        clientX: n,
                        clientY: i,
                        target: e(o || this.element)[0],
                        stopPropagation: e.noop,
                        preventDefault: e.noop
                    })
                }
            });
        X.defaultThreshold = function(e) {
            v = e
        }, X.minHold = function(e) {
            d = e
        }, r.getTouches = i, r.touchDelta = n, r.UserEvents = X
    }(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function(e, t, n) {
    (n || t)()
});
//# sourceMappingURL=kendo.userevents.min.js.map;
/** 
 * Kendo UI v2021.1.204 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/
! function(t, define) {
    define("kendo.draganddrop.min", ["kendo.core.min", "kendo.userevents.min"], t)
}(function() {
    return function(t, e) {
        function n(e, n) {
            try {
                return t.contains(e, n) || e == n
            } catch (r) {
                return !1
            }
        }

        function r(t, e) {
            return parseInt(t.css(e), 10) || 0
        }

        function i(t, e) {
            return Math.min(Math.max(t, e.min), e.max)
        }

        function o(t, e) {
            var n = D(t),
                i = _._outerWidth,
                o = _._outerHeight,
                a = n.left + r(t, "borderLeftWidth") + r(t, "paddingLeft"),
                s = n.top + r(t, "borderTopWidth") + r(t, "paddingTop"),
                l = a + t.width() - i(e, !0),
                c = s + t.height() - o(e, !0);
            return {
                x: {
                    min: a,
                    max: l
                },
                y: {
                    min: s,
                    max: c
                }
            }
        }

        function a(n, r, i) {
            for (var o, a, s = 0, l = r && r.length, c = i && i.length; n && n.parentNode;) {
                for (s = 0; s < l; s++)
                    if (o = r[s], o.element[0] === n) return {
                        target: o,
                        targetElement: n
                    };
                for (s = 0; s < c; s++)
                    if (a = i[s], t.contains(a.element[0], n) && x.matchesSelector.call(n, a.options.filter)) return {
                        target: a,
                        targetElement: n
                    };
                n = n.parentNode
            }
            return e
        }

        function s(t, e) {
            var n, r = e.options.group,
                i = t[r];
            if (T.fn.destroy.call(e), i.length > 1) {
                for (n = 0; n < i.length; n++)
                    if (i[n] == e) {
                        i.splice(n, 1);
                        break
                    }
            } else i.length = 0, delete t[r]
        }

        function l(t) {
            var e, n, r, i = c()[0];
            return t[0] === i ? (n = i.scrollTop, r = i.scrollLeft, {
                top: n,
                left: r,
                bottom: n + b.height(),
                right: r + b.width()
            }) : (e = t.offset(), e.bottom = e.top + t.height(), e.right = e.left + t.width(), e)
        }

        function c() {
            return t(_.support.browser.edge || _.support.browser.safari ? y.body : y.documentElement)
        }

        function u(e) {
            var n, r = c();
            if (!e || e === y.body || e === y.documentElement) return r;
            for (n = t(e)[0]; n && !_.isScrollable(n) && n !== y.body;) n = n.parentNode;
            return n === y.body ? r : t(n)
        }

        function h(t, e, n) {
            var r = {
                    x: 0,
                    y: 0
                },
                i = 50;
            return t - n.left < i ? r.x = -(i - (t - n.left)) : n.right - t < i && (r.x = i - (n.right - t)), e - n.top < i ? r.y = -(i - (e - n.top)) : n.bottom - e < i && (r.y = i - (n.bottom - e)), r
        }
        var d, f, p, g, v, m, _ = window.kendo,
            x = _.support,
            y = window.document,
            b = t(window),
            E = _.Class,
            T = _.ui.Widget,
            S = _.Observable,
            w = _.UserEvents,
            M = t.proxy,
            C = t.extend,
            D = _.getOffset,
            O = {},
            k = {},
            I = {},
            H = _.elementUnderCursor,
            W = "keyup",
            z = "change",
            P = "dragstart",
            U = "hold",
            L = "drag",
            A = "dragend",
            N = "dragcancel",
            V = "hintDestroyed",
            B = "dragenter",
            $ = "dragleave",
            F = "drop",
            j = S.extend({
                init: function(e, n) {
                    var r = this,
                        i = e[0];
                    r.capture = !1, i.addEventListener ? (t.each(_.eventMap.down.split(" "), function() {
                        i.addEventListener(this, M(r._press, r), !0)
                    }), t.each(_.eventMap.up.split(" "), function() {
                        i.addEventListener(this, M(r._release, r), !0)
                    })) : (t.each(_.eventMap.down.split(" "), function() {
                        i.attachEvent(this, M(r._press, r))
                    }), t.each(_.eventMap.up.split(" "), function() {
                        i.attachEvent(this, M(r._release, r))
                    })), S.fn.init.call(r), r.bind(["press", "release"], n || {})
                },
                captureNext: function() {
                    this.capture = !0
                },
                cancelCapture: function() {
                    this.capture = !1
                },
                _press: function(t) {
                    var e = this;
                    e.trigger("press"), e.capture && t.preventDefault()
                },
                _release: function(t) {
                    var e = this;
                    e.trigger("release"), e.capture && (t.preventDefault(), e.cancelCapture())
                }
            }),
            G = S.extend({
                init: function(e) {
                    var n = this;
                    S.fn.init.call(n), n.forcedEnabled = !1, t.extend(n, e), n.scale = 1, n.horizontal ? (n.measure = "offsetWidth", n.scrollSize = "scrollWidth", n.axis = "x") : (n.measure = "offsetHeight", n.scrollSize = "scrollHeight", n.axis = "y")
                },
                makeVirtual: function() {
                    t.extend(this, {
                        virtual: !0,
                        forcedEnabled: !0,
                        _virtualMin: 0,
                        _virtualMax: 0
                    })
                },
                virtualSize: function(t, e) {
                    this._virtualMin === t && this._virtualMax === e || (this._virtualMin = t, this._virtualMax = e, this.update())
                },
                outOfBounds: function(t) {
                    return t > this.max || t < this.min
                },
                forceEnabled: function() {
                    this.forcedEnabled = !0
                },
                getSize: function() {
                    return this.container[0][this.measure]
                },
                getTotal: function() {
                    return this.element[0][this.scrollSize]
                },
                rescale: function(t) {
                    this.scale = t
                },
                update: function(t) {
                    var e = this,
                        n = e.virtual ? e._virtualMax : e.getTotal(),
                        r = n * e.scale,
                        i = e.getSize();
                    (0 !== n || e.forcedEnabled) && (e.max = e.virtual ? -e._virtualMin : 0, e.size = i, e.total = r, e.min = Math.min(e.max, i - r), e.minScale = i / n, e.centerOffset = (r - i) / 2, e.enabled = e.forcedEnabled || r > i, t || e.trigger(z, e))
                }
            }),
            Q = S.extend({
                init: function(t) {
                    var e = this;
                    S.fn.init.call(e), e.x = new G(C({
                        horizontal: !0
                    }, t)), e.y = new G(C({
                        horizontal: !1
                    }, t)), e.container = t.container, e.forcedMinScale = t.minScale, e.maxScale = t.maxScale || 100, e.bind(z, t)
                },
                rescale: function(t) {
                    this.x.rescale(t), this.y.rescale(t), this.refresh()
                },
                centerCoordinates: function() {
                    return {
                        x: Math.min(0, -this.x.centerOffset),
                        y: Math.min(0, -this.y.centerOffset)
                    }
                },
                refresh: function() {
                    var t = this;
                    t.x.update(), t.y.update(), t.enabled = t.x.enabled || t.y.enabled, t.minScale = t.forcedMinScale || Math.min(t.x.minScale, t.y.minScale), t.fitScale = Math.max(t.x.minScale, t.y.minScale), t.trigger(z)
                }
            }),
            q = S.extend({
                init: function(t) {
                    var e = this;
                    C(e, t), S.fn.init.call(e)
                },
                outOfBounds: function() {
                    return this.dimension.outOfBounds(this.movable[this.axis])
                },
                dragMove: function(t) {
                    var e = this,
                        n = e.dimension,
                        r = e.axis,
                        i = e.movable,
                        o = i[r] + t;
                    n.enabled && ((o < n.min && t < 0 || o > n.max && t > 0) && (t *= e.resistance), i.translateAxis(r, t), e.trigger(z, e))
                }
            }),
            J = E.extend({
                init: function(e) {
                    var n, r, i, o, a = this;
                    C(a, {
                        elastic: !0
                    }, e), i = a.elastic ? .5 : 0, o = a.movable, a.x = n = new q({
                        axis: "x",
                        dimension: a.dimensions.x,
                        resistance: i,
                        movable: o
                    }), a.y = r = new q({
                        axis: "y",
                        dimension: a.dimensions.y,
                        resistance: i,
                        movable: o
                    }), a.userEvents.bind(["press", "move", "end", "gesturestart", "gesturechange"], {
                        gesturestart: function(t) {
                            a.gesture = t, a.offset = a.dimensions.container.offset()
                        },
                        press: function(e) {
                            t(e.event.target).closest("a").is("[data-navigate-on-press=true]") && e.sender.cancel()
                        },
                        gesturechange: function(t) {
                            var e, i, s, l = a.gesture,
                                c = l.center,
                                u = t.center,
                                h = t.distance / l.distance,
                                d = a.dimensions.minScale,
                                f = a.dimensions.maxScale;
                            o.scale <= d && h < 1 && (h += .8 * (1 - h)), o.scale * h >= f && (h = f / o.scale), i = o.x + a.offset.left, s = o.y + a.offset.top, e = {
                                x: (i - c.x) * h + u.x - i,
                                y: (s - c.y) * h + u.y - s
                            }, o.scaleWith(h), n.dragMove(e.x), r.dragMove(e.y), a.dimensions.rescale(o.scale), a.gesture = t, t.preventDefault()
                        },
                        move: function(t) {
                            t.event.target.tagName.match(/textarea|input/i) || (n.dimension.enabled || r.dimension.enabled ? (n.dragMove(t.x.delta), r.dragMove(t.y.delta), t.preventDefault()) : t.touch.skip())
                        },
                        end: function(t) {
                            t.preventDefault()
                        }
                    })
                }
            }),
            K = x.transitions.prefix + "Transform";
        f = x.hasHW3D ? function(t, e, n) {
            return "translate3d(" + t + "px," + e + "px,0) scale(" + n + ")"
        } : function(t, e, n) {
            return "translate(" + t + "px," + e + "px) scale(" + n + ")"
        }, p = S.extend({
            init: function(e) {
                var n = this;
                S.fn.init.call(n), n.element = t(e), n.element[0].style.webkitTransformOrigin = "left top", n.x = 0, n.y = 0, n.scale = 1, n._saveCoordinates(f(n.x, n.y, n.scale))
            },
            translateAxis: function(t, e) {
                this[t] += e, this.refresh()
            },
            scaleTo: function(t) {
                this.scale = t, this.refresh()
            },
            scaleWith: function(t) {
                this.scale *= t, this.refresh()
            },
            translate: function(t) {
                this.x += t.x, this.y += t.y, this.refresh()
            },
            moveAxis: function(t, e) {
                this[t] = e, this.refresh()
            },
            moveTo: function(t) {
                C(this, t), this.refresh()
            },
            refresh: function() {
                var t, e = this,
                    n = e.x,
                    r = e.y;
                e.round && (n = Math.round(n), r = Math.round(r)), t = f(n, r, e.scale), t != e.coordinates && (_.support.browser.msie && _.support.browser.version < 10 ? (e.element[0].style.position = "absolute", e.element[0].style.left = e.x + "px", e.element[0].style.top = e.y + "px") : e.element[0].style[K] = t, e._saveCoordinates(t), e.trigger(z))
            },
            _saveCoordinates: function(t) {
                this.coordinates = t
            }
        }), g = T.extend({
            init: function(t, e) {
                var n, r = this;
                T.fn.init.call(r, t, e), n = r.options.group, n in k ? k[n].push(r) : k[n] = [r]
            },
            events: [B, $, F],
            options: {
                name: "DropTarget",
                group: "default"
            },
            destroy: function() {
                s(k, this)
            },
            _trigger: function(t, e) {
                var n = this,
                    r = O[n.options.group];
                if (r) return n.trigger(t, C({}, e.event, {
                    draggable: r,
                    dropTarget: e.dropTarget
                }))
            },
            _over: function(t) {
                this._trigger(B, t)
            },
            _out: function(t) {
                this._trigger($, t)
            },
            _drop: function(t) {
                var e = this,
                    n = O[e.options.group];
                n && (n.dropped = !e._trigger(F, t))
            }
        }), g.destroyGroup = function(t) {
            var e, n = k[t] || I[t];
            if (n) {
                for (e = 0; e < n.length; e++) T.fn.destroy.call(n[e]);
                n.length = 0, delete k[t], delete I[t]
            }
        }, g._cache = k, v = g.extend({
            init: function(t, e) {
                var n, r = this;
                T.fn.init.call(r, t, e), n = r.options.group, n in I ? I[n].push(r) : I[n] = [r]
            },
            destroy: function() {
                s(I, this)
            },
            options: {
                name: "DropTargetArea",
                group: "default",
                filter: null
            }
        }), m = T.extend({
            init: function(t, e) {
                var n = this;
                T.fn.init.call(n, t, e), n._activated = !1, n.userEvents = new w(n.element, {
                    global: !0,
                    allowSelection: !0,
                    filter: n.options.filter,
                    threshold: n.options.distance,
                    start: M(n._start, n),
                    hold: M(n._hold, n),
                    move: M(n._drag, n),
                    end: M(n._end, n),
                    cancel: M(n._cancel, n),
                    select: M(n._select, n)
                }), _.support.touch && n.element.find(n.options.filter).css("touch-action", "none"), n._afterEndHandler = M(n._afterEnd, n), n._captureEscape = M(n._captureEscape, n)
            },
            events: [U, P, L, A, N, V],
            options: {
                name: "Draggable",
                distance: _.support.touch ? 0 : 5,
                group: "default",
                cursorOffset: null,
                axis: null,
                container: null,
                filter: null,
                ignore: null,
                holdToDrag: !1,
                autoScroll: !1,
                dropped: !1
            },
            cancelHold: function() {
                this._activated = !1
            },
            _captureEscape: function(t) {
                var e = this;
                t.keyCode === _.keys.ESC && (e._trigger(N, {
                    event: t
                }), e.userEvents.cancel())
            },
            _updateHint: function(e) {
                var n, r = this,
                    o = r.options,
                    a = r.boundaries,
                    s = o.axis,
                    l = r.options.cursorOffset;
                l ? n = {
                    left: e.x.location + l.left,
                    top: e.y.location + l.top
                } : (r.hintOffset.left += e.x.delta, r.hintOffset.top += e.y.delta, n = t.extend({}, r.hintOffset)), a && (n.top = i(n.top, a.y), n.left = i(n.left, a.x)), "x" === s ? delete n.top : "y" === s && delete n.left, r.hint.css(n)
            },
            _shouldIgnoreTarget: function(e) {
                var n = this.options.ignore;
                return n && t(e).is(n)
            },
            _select: function(t) {
                this._shouldIgnoreTarget(t.event.target) || t.preventDefault()
            },
            _start: function(n) {
                var r, i = this,
                    a = i.options,
                    s = a.container ? t(a.container) : null,
                    l = a.hint;
                return this._shouldIgnoreTarget(n.touch.initialTouch) || a.holdToDrag && !i._activated ? (i.userEvents.cancel(), e) : (i.currentTarget = n.target, i.currentTargetOffset = D(i.currentTarget), l && (i.hint && i.hint.stop(!0, !0).remove(), i.hint = _.isFunction(l) ? t(l.call(i, i.currentTarget)) : l, r = D(i.currentTarget), i.hintOffset = r, i.hint.css({
                    position: "absolute",
                    zIndex: 2e4,
                    left: r.left,
                    top: r.top
                }).appendTo(y.body), i.angular("compile", function() {
                    i.hint.removeAttr("ng-repeat");
                    for (var e = t(n.target); !e.data("$$kendoScope") && e.length;) e = e.parent();
                    return {
                        elements: i.hint.get(),
                        scopeFrom: e.data("$$kendoScope")
                    }
                })), O[a.group] = i, i.dropped = !1, s && (i.boundaries = o(s, i.hint)), t(y).on(W, i._captureEscape), i._trigger(P, n) && (i.userEvents.cancel(), i._afterEnd()), i.userEvents.capture(), e)
            },
            _hold: function(t) {
                this.currentTarget = t.target, this._trigger(U, t) ? this.userEvents.cancel() : this._activated = !0
            },
            _drag: function(e) {
                var n, r;
                e.preventDefault(), n = this._elementUnderCursor(e), this.options.autoScroll && this._cursorElement !== n && (this._scrollableParent = u(n), this._cursorElement = n), this._lastEvent = e, this._processMovement(e, n), this.options.autoScroll && this._scrollableParent[0] && (r = h(e.x.location, e.y.location, l(this._scrollableParent)), this._scrollCompenstation = t.extend({}, this.hintOffset), this._scrollVelocity = r, 0 === r.y && 0 === r.x ? (clearInterval(this._scrollInterval), this._scrollInterval = null) : this._scrollInterval || (this._scrollInterval = setInterval(t.proxy(this, "_autoScroll"), 50))), this.hint && this._updateHint(e)
            },
            _processMovement: function(n, r) {
                this._withDropTarget(r, function(r, i) {
                    if (!r) return d && (d._trigger($, C(n, {
                        dropTarget: t(d.targetElement)
                    })), d = null), e;
                    if (d) {
                        if (i === d.targetElement) return;
                        d._trigger($, C(n, {
                            dropTarget: t(d.targetElement)
                        }))
                    }
                    r._trigger(B, C(n, {
                        dropTarget: t(i)
                    })), d = C(r, {
                        targetElement: i
                    })
                }), this._trigger(L, C(n, {
                    dropTarget: d,
                    elementUnderCursor: r
                }))
            },
            _autoScroll: function() {
                var t, e, n, r, i, o, a, s, l = this._scrollableParent[0],
                    u = this._scrollVelocity,
                    h = this._scrollCompenstation;
                l && (t = this._elementUnderCursor(this._lastEvent), this._processMovement(this._lastEvent, t), r = l === c()[0], r ? (e = y.body.scrollHeight > b.height(), n = y.body.scrollWidth > b.width()) : (e = l.offsetHeight <= l.scrollHeight, n = l.offsetWidth <= l.scrollWidth), i = l.scrollTop + u.y, o = e && i > 0 && i < l.scrollHeight, a = l.scrollLeft + u.x, s = n && a > 0 && a < l.scrollWidth, o && (l.scrollTop += u.y), s && (l.scrollLeft += u.x), this.hint && r && (s || o) && (o && (h.top += u.y), s && (h.left += u.x), this.hint.css(h)))
            },
            _end: function(e) {
                this._withDropTarget(this._elementUnderCursor(e), function(n, r) {
                    n && (n._drop(C({}, e, {
                        dropTarget: t(r)
                    })), d = null)
                }), this._cancel(this._trigger(A, e))
            },
            _cancel: function(t) {
                var e = this;
                e._scrollableParent = null, this._cursorElement = null, clearInterval(this._scrollInterval), e._activated = !1, e.hint && !e.dropped ? setTimeout(function() {
                    e.hint.stop(!0, !0), t ? e._afterEndHandler() : e.hint.animate(e.currentTargetOffset, "fast", e._afterEndHandler)
                }, 0) : e._afterEnd()
            },
            _trigger: function(t, e) {
                var n = this;
                return n.trigger(t, C({}, e.event, {
                    x: e.x,
                    y: e.y,
                    currentTarget: n.currentTarget,
                    initialTarget: e.touch ? e.touch.initialTouch : null,
                    dropTarget: e.dropTarget,
                    elementUnderCursor: e.elementUnderCursor
                }))
            },
            _elementUnderCursor: function(t) {
                var e = H(t),
                    r = this.hint;
                return r && n(r[0], e) && (r.hide(), e = H(t), e || (e = H(t)), r.show()), e
            },
            _withDropTarget: function(t, e) {
                var n, r = this.options.group,
                    i = k[r],
                    o = I[r];
                (i && i.length || o && o.length) && (n = a(t, i, o), n ? e(n.target, n.targetElement) : e())
            },
            destroy: function() {
                var t = this;
                T.fn.destroy.call(t), t._afterEnd(), t.userEvents.destroy(), this._scrollableParent = null, this._cursorElement = null, clearInterval(this._scrollInterval), t.currentTarget = null
            },
            _afterEnd: function() {
                var e = this;
                e.hint && e.hint.remove(), delete O[e.options.group], e.trigger("destroy"), e.trigger(V), t(y).off(W, e._captureEscape)
            }
        }), _.ui.plugin(g), _.ui.plugin(v), _.ui.plugin(m), _.TapCapture = j, _.containerBoundaries = o, C(_.ui, {
            Pane: J,
            PaneDimensions: Q,
            Movable: p
        }), _.ui.Draggable.utils = {
            autoScrollVelocity: h,
            scrollableViewPort: l,
            findScrollableParent: u
        }
    }(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function(t, e, n) {
    (n || e)()
});
//# sourceMappingURL=kendo.draganddrop.min.js.map;
/** 
 * Kendo UI v2021.1.204 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/
! function(t, define) {
    define("kendo.window.min", ["kendo.draganddrop.min", "kendo.popup.min"], t)
}(function() {
    return function(t, i) {
        function e(t) {
            return i !== t
        }

        function n(t, i) {
            return parseInt(t.css(i), 10) || 0
        }

        function o(t, i, e) {
            var n;
            return n = t && isNaN(t) && ("" + t).indexOf("px") < 0 ? t : Math.max(Math.min(parseInt(t, 10), e === 1 / 0 ? e : parseInt(e, 10)), i === -(1 / 0) ? i : parseInt(i, 10))
        }

        function s() {
            return !this.type || this.type.toLowerCase().indexOf("script") >= 0
        }

        function r(i) {
            for (var e, n, o = {
                    top: i.offsetTop,
                    left: i.offsetLeft
                }, s = i.offsetParent; s;) o.top += s.offsetTop, o.left += s.offsetLeft, e = t(s).css("overflowX"), n = t(s).css("overflowY"), "auto" !== n && "scroll" !== n || (o.top -= s.scrollTop), "auto" !== e && "scroll" !== e || (o.left -= s.scrollLeft), s = s.offsetParent;
            return o
        }

        function a(t) {
            var i = this;
            i.owner = t, i._preventDragging = !1, i._draggable = new h(t.wrapper, {
                filter: ">" + P,
                group: t.wrapper.id + "-resizing",
                dragstart: w(i.dragstart, i),
                drag: w(i.drag, i),
                dragend: w(i.dragend, i)
            }), i._draggable.userEvents.bind("press", w(i.addOverlay, i)), i._draggable.userEvents.bind("release", w(i.removeOverlay, i))
        }

        function l(t, i) {
            var e = this;
            e.owner = t, e._preventDragging = !1, e._draggable = new h(t.wrapper, {
                filter: i,
                group: t.wrapper.id + "-moving",
                dragstart: w(e.dragstart, e),
                drag: w(e.drag, e),
                dragend: w(e.dragend, e),
                dragcancel: w(e.dragcancel, e)
            }), e._draggable.userEvents.stopPropagation = !1
        }
        var d = window.kendo,
            p = d.ui.Widget,
            c = d.ui.Popup.TabKeyTrap,
            h = d.ui.Draggable,
            f = t.isPlainObject,
            m = d._activeElement,
            u = d._outerWidth,
            g = d._outerHeight,
            w = t.proxy,
            _ = t.extend,
            v = t.each,
            x = d.template,
            b = "body",
            k = ".kendoWindow",
            z = ".kendoWindowModal",
            T = ".k-window",
            y = ".k-window-title",
            L = y + "bar",
            W = ".k-window-content",
            O = ".k-dialog-content",
            P = ".k-resize-handle",
            H = ".k-overlay",
            M = "k-content-frame",
            S = "k-i-loading",
            C = "k-state-hover",
            D = "k-state-focused",
            I = "k-window-maximized",
            E = "k-display-inline-flex",
            F = ":visible",
            R = "hidden",
            j = "cursor",
            N = "open",
            A = "activate",
            K = "deactivate",
            B = "close",
            q = "refresh",
            U = "minimize",
            G = "maximize",
            J = "resizeStart",
            V = "resize",
            Q = "resizeEnd",
            X = "dragstart",
            Y = "dragend",
            $ = "kendoKeydown",
            Z = "error",
            tt = "overflow",
            it = "original-overflow-rule",
            et = "zIndex",
            nt = ".k-window-actions .k-i-window-minimize,.k-window-actions .k-i-window-maximize",
            ot = ".k-i-pin",
            st = ".k-i-unpin",
            rt = ot + "," + st,
            at = ".k-window-titlebar .k-window-action",
            lt = ".k-window-titlebar .k-i-refresh",
            dt = "WindowEventsHandled",
            pt = /^0[a-z]*$/i,
            ct = d.isLocalUrl,
            ht = {
                small: "k-window-sm",
                medium: "k-window-md",
                large: "k-window-lg"
            },
            ft = p.extend({
                init: function(n, o) {
                    var r, a, l, h, m, u, g, _, v, x = this,
                        b = {},
                        z = !1,
                        P = o && o.actions && !o.actions.length;
                    p.fn.init.call(x, n, o), o = x.options, h = o.position, n = x.element, m = o.content, _ = t(window), P && (o.actions = []), x.appendTo = t(o.appendTo), x.containment = o.draggable.containment ? t(o.draggable.containment).first() : null, m && !f(m) && (m = o.content = {
                        url: m
                    }), n.find("script").filter(s).remove(), n.parent().is(x.appendTo) || x.containment || h.top !== i && h.left !== i || (n.is(F) ? (b = n.offset(), z = !0) : (a = n.css("visibility"), l = n.css("display"), n.css({
                        visibility: R,
                        display: ""
                    }), b = n.offset(), n.css({
                        visibility: a,
                        display: l
                    })), h.top === i && (h.top = b.top), h.left === i && (h.left = b.left)), e(o.visible) && null !== o.visible || (o.visible = n.is(F)), r = x.wrapper = n.closest(T), n.is(".k-window-content") && r[0] || (n.addClass("k-window-content"), x._createWindow(n, o), r = x.wrapper = n.closest(T), x.title(x.options.title), x._dimensions()), x.minTop = x.minLeft = -(1 / 0), x.maxTop = x.maxLeft = 1 / 0, x._position(), m && x.refresh(m), o.visible && x.toFront(), u = r.children(W), o.visible && o.modal && x._overlay(r.is(F)).css({
                        opacity: .5
                    }), r.on("mouseenter" + k, at, w(x._buttonEnter, x)).on("mouseleave" + k, at, w(x._buttonLeave, x)).on("click" + k, "> " + at, w(x._windowActionHandler, x)).on("keydown" + k, x, w(x._keydown, x)).on("focus" + k, w(x._focus, x)).on("blur" + k, w(x._blur, x)), u.on("keydown" + k, x, w(x._keydownContent, x)), g = u.find("." + M)[0], g && !_.data(dt) && (_.on("blur" + k, function() {
                        var i, e = t(document.activeElement).parent(W);
                        e.length && (i = d.widgetInstance(e), i._focus())
                    }), _.on("focus" + k, function() {
                        t(W).not(O).each(function(i, e) {
                            d.widgetInstance(t(e))._blur()
                        })
                    }), _.data(dt, !0)), this._resizable(), this._draggable(), o.pinned && this.wrapper.is(":visible") && x.pin(), v = n.attr("id"), v && (v += "_wnd_title", r.children(L).children(y).attr("id", v), u.attr({
                        role: "dialog",
                        "aria-labelledby": v
                    })), r.add(r.children(".k-resize-handle," + L)).on(d.support.mousedown + k, w(x.toFront, x)), x.touchScroller = d.touchScroller(n), x._resizeHandler = w(x._onDocumentResize, x), x._marker = d.guid().substring(0, 8), t(window).on("resize" + k + x._marker, x._resizeHandler), o.visible && (x.trigger(N), x.trigger(A)), d.notify(x), this.options.modal && (this._tabKeyTrap = new c(r), this._tabKeyTrap.trap(), this._tabKeyTrap.shouldTrap = function() {
                        return r.data("isFront")
                    })
                },
                _buttonEnter: function(i) {
                    t(i.currentTarget).addClass(C)
                },
                _buttonLeave: function(i) {
                    t(i.currentTarget).removeClass(C)
                },
                _focus: function() {
                    this.wrapper.addClass(D)
                },
                _blur: function() {
                    this.wrapper.removeClass(D)
                },
                _dimensions: function() {
                    var t, i, e = this.wrapper,
                        s = this.options,
                        r = s.width,
                        a = s.height,
                        l = s.maxHeight,
                        d = s.size,
                        p = ["minWidth", "minHeight", "maxWidth", "maxHeight"],
                        c = "content-box" == e.css("box-sizing"),
                        h = c ? n(e, "border-left-width") + n(e, "border-right-width") : 0,
                        f = c ? n(e, "border-top-width") + n(e, "border-bottom-width") : 0,
                        m = c ? n(e, "padding-top") : 0;
                    for (this.containment && !this._isPinned && (this._updateBoundaries(), s.maxHeight = Math.min(this.containment.height - (f + m), l), s.maxWidth = Math.min(this.containment.width - h, s.maxWidth)), t = 0; t < p.length; t++) i = s[p[t]] || "", i != 1 / 0 && e.css(p[t], i);
                    l != 1 / 0 && this.element.css("maxHeight", l), e.outerWidth(r ? o(r, s.minWidth, s.maxWidth) : ""), e.outerHeight(a ? o(a, s.minHeight, s.maxHeight) : ""), s.visible || e.removeClass(E).hide(), d && ht[d] && e.addClass(ht[d])
                },
                _position: function() {
                    var t, i, e = this.wrapper,
                        n = this.options.position;
                    this._updateBoundaries(), this.containment && (n.top = n.top || 0, n.left = n.left || 0, t = ("" + n.top).indexOf("%") > 0 ? parseInt(this.containment.height * (parseFloat(n.top) / 100), 10) : n.top, i = ("" + n.left).indexOf("%") > 0 ? parseInt(this.containment.width * (parseFloat(n.left) / 100), 10) : n.left, n.top = o(t, this.minTop, this.maxTop), n.left = o(i, this.minLeft, this.maxLeft)), 0 === n.top && (n.top = "" + n.top), 0 === n.left && (n.left = "" + n.left), e.css({
                        top: n.top || "",
                        left: n.left || ""
                    })
                },
                _updateBoundaries: function() {
                    var t = this.containment;
                    return t ? (t.width = t.innerWidth(), t.height = t.innerHeight(), parseInt(t.width, 10) > t[0].clientWidth && (t.width -= d.support.scrollbar()), parseInt(t.height, 10) > t[0].clientHeight && (t.height -= d.support.scrollbar()), t.position = r(t[0]), this._isPinned ? (this.minTop = this.minLeft = -(1 / 0), this.maxTop = this.maxLeft = 1 / 0) : (this.minTop = t.scrollTop(), this.minLeft = t.scrollLeft(), this.maxLeft = this.minLeft + t.width - u(this.wrapper, !0), this.maxTop = this.minTop + t.height - g(this.wrapper, !0)), i) : null
                },
                _animationOptions: function(t) {
                    var i = this.options.animation,
                        e = {
                            open: {
                                effects: {}
                            },
                            close: {
                                hide: !0,
                                effects: {}
                            }
                        };
                    return i && i[t] || e[t]
                },
                _resize: function() {
                    d.resize(this.element.children())
                },
                _resizable: function() {
                    var i = this.options.resizable,
                        e = this.wrapper;
                    this.resizing && (e.off("dblclick" + k).children(P).remove(), this.resizing.destroy(), this.resizing = null), i && (e.on("dblclick" + k, L, w(function(i) {
                        t(i.target).closest(".k-window-action").length || this.toggleMaximization()
                    }, this)), v("n e s w se sw ne nw".split(" "), function(t, i) {
                        e.append(mt.resizeHandle(i))
                    }), this.resizing = new a(this)), e = null
                },
                _draggable: function() {
                    var t = this.options.draggable;
                    this.dragging && (this.dragging.destroy(), this.dragging = null), t && (this.dragging = new l(this, t.dragHandle || L))
                },
                _actions: function() {
                    var i = this.options,
                        e = i.actions,
                        n = i.pinned,
                        o = this.wrapper.children(L),
                        s = o.find(".k-window-actions"),
                        r = ["maximize", "minimize"];
                    e = t.map(e, function(t) {
                        return t = n && "pin" === t.toLowerCase() ? "unpin" : t, {
                            name: r.indexOf(t.toLowerCase()) > -1 ? "window-" + t : t
                        }
                    }), s.html(d.render(mt.action, e))
                },
                setOptions: function(e) {
                    var n, o, s = this,
                        r = s.options.size,
                        a = this.containment && !s._isPinned ? this.containment : t(document),
                        l = JSON.parse(JSON.stringify(e));
                    _(e.position, s.options.position), _(e.position, l.position), s._containerScrollTop = a.scrollTop(), s._containerScrollLeft = a.scrollLeft(), p.fn.setOptions.call(s, e), n = s.options.scrollable !== !1, s.restore(), i !== e.title && s.title(e.title), s.wrapper.removeClass(ht[r]), s._dimensions(), s._position(), s._resizable(), s._draggable(), s._actions(), i !== e.modal && (o = s.options.visible !== !1, s._enableDocumentScrolling(), s._overlay(e.modal && o)), s.element.css(tt, n ? "" : "hidden")
                },
                events: [N, A, K, B, U, G, q, J, V, Q, X, Y, $, Z],
                options: {
                    name: "Window",
                    animation: {
                        open: {
                            effects: {
                                zoom: {
                                    direction: "in"
                                },
                                fade: {
                                    direction: "in"
                                }
                            },
                            duration: 350
                        },
                        close: {
                            effects: {
                                zoom: {
                                    direction: "out",
                                    properties: {
                                        scale: .7
                                    }
                                },
                                fade: {
                                    direction: "out"
                                }
                            },
                            duration: 350,
                            hide: !0
                        }
                    },
                    title: "",
                    actions: ["Close"],
                    autoFocus: !0,
                    modal: !1,
                    size: "auto",
                    resizable: !0,
                    draggable: !0,
                    minWidth: 90,
                    minHeight: 50,
                    maxWidth: 1 / 0,
                    maxHeight: 1 / 0,
                    pinned: !1,
                    scrollable: !0,
                    position: {},
                    content: null,
                    visible: null,
                    height: null,
                    width: null,
                    appendTo: "body",
                    isMaximized: !1,
                    isMinimized: !1
                },
                _closable: function() {
                    return t.inArray("close", t.map(this.options.actions, function(t) {
                        return t.toLowerCase()
                    })) > -1
                },
                _keydownContent: function(t) {
                    var i = this,
                        e = d.keys,
                        n = t.keyCode;
                    n == e.ESC && i._closable() && (t.stopPropagation(), i._close(!1))
                },
                _keydown: function(t) {
                    var i, e, s, r, a, l, p = this,
                        c = p.options,
                        h = d.keys,
                        f = t.keyCode,
                        m = p.wrapper,
                        u = 10,
                        g = c.isMaximized,
                        w = c.isMinimized;
                    f == h.ESC && p._closable() && (t.stopPropagation(), p._close(!1)), t.target != t.currentTarget || p._closing || (t.altKey && 82 == f && p.refresh(), t.altKey && 80 == f && (p.options.pinned ? p.unpin() : p.pin()), t.altKey && f == h.UP ? w ? (p.restore(), p.wrapper.focus()) : g || (p.maximize(), p.wrapper.focus()) : t.altKey && f == h.DOWN && (w || g ? g && p.restore() : (p.minimize(), p.wrapper.focus())), i = d.getOffset(m), p.containment && !p._isPinned && (i = p.options.position), !c.draggable || t.ctrlKey || t.altKey || g || (p._updateBoundaries(), f == h.UP ? (i.top = o(i.top - u, p.minTop, p.maxTop), e = m.css("top", i.top)) : f == h.DOWN ? (i.top = o(i.top + u, p.minTop, p.maxTop), e = m.css("top", i.top)) : f == h.LEFT ? (i.left = o(i.left - u, p.minLeft, p.maxLeft), e = m.css("left", i.left)) : f == h.RIGHT && (i.left = o(i.left + u, p.minLeft, p.maxLeft), e = m.css("left", i.left))), c.resizable && t.ctrlKey && !g && !w && (f == h.UP ? (e = !0, r = m.outerHeight() - u) : f == h.DOWN && (e = !0, r = p.containment && !p._isPinned ? Math.min(m.outerHeight() + u, p.containment.height - i.top - n(m, "padding-top") - n(m, "borderBottomWidth") - n(m, "borderTopWidth")) : m.outerHeight() + u), f == h.LEFT ? (e = !0, s = m.outerWidth() - u) : f == h.RIGHT && (e = !0, s = p.containment && !p._isPinned ? Math.min(m.outerWidth() + u, p.containment.width - i.left - n(m, "borderLeftWidth") - n(m, "borderRightWidth")) : m.outerWidth() + u), e && (a = o(s, c.minWidth, c.maxWidth), l = o(r, c.minHeight, c.maxHeight), isNaN(a) || (m.outerWidth(a), p.options.width = a + "px"), isNaN(l) || (m.outerHeight(l), p.options.height = l + "px"), p.resize())), e && t.preventDefault())
                },
                _overlay: function(i) {
                    var e = this.containment ? this.containment.children(H) : this.appendTo.children(H),
                        n = this.wrapper;
                    return e.length || (e = t("<div class='k-overlay' />")), e.insertBefore(n[0]).toggle(i).css(et, parseInt(n.css(et), 10) - 1), this.options.modal.preventScroll && !this.containment && this._stopDocumentScrolling(), e
                },
                _actionForIcon: function(t) {
                    var i = /\bk-i(-\w+)+\b/.exec(t[0].className)[0];
                    return {
                        "k-i-close": "_close",
                        "k-i-window-maximize": "maximize",
                        "k-i-window-minimize": "minimize",
                        "k-i-window-restore": "restore",
                        "k-i-refresh": "refresh",
                        "k-i-pin": "pin",
                        "k-i-unpin": "unpin"
                    }[i]
                },
                _windowActionHandler: function(e) {
                    var n, o;
                    if (!this._closing) return n = t(e.target).closest(".k-window-action").find(".k-icon"), o = this._actionForIcon(n), o ? (e.preventDefault(), this[o](), !1) : i
                },
                _modals: function() {
                    var i = this,
                        e = t(T).filter(function() {
                            var e = t(this),
                                n = i._object(e),
                                o = n && n.options;
                            return o && o.modal && o.visible && o.appendTo === i.options.appendTo && e.is(F)
                        }).sort(function(i, e) {
                            return +t(i).css("zIndex") - +t(e).css("zIndex")
                        });
                    return i = null, e
                },
                _object: function(t) {
                    var e = t.children(W),
                        n = d.widgetInstance(e);
                    return n ? n : i
                },
                center: function() {
                    var i, e, o = this,
                        s = o.options.position,
                        r = o.wrapper,
                        a = t(window),
                        l = 0,
                        d = 0;
                    return o.options.isMaximized ? o : (o.options.pinned && !o._isPinned && o.pin(), o.options.pinned || (l = a.scrollTop(), d = a.scrollLeft()), this.containment && !o.options.pinned ? (i = this.minTop + (this.maxTop - this.minTop) / 2, e = this.minLeft + (this.maxLeft - this.minLeft) / 2) : (o._scrollIsAppended = !0, e = d + Math.max(0, (a.width() - r.outerWidth()) / 2), i = l + Math.max(0, (a.height() - r.outerHeight() - n(r, "paddingTop")) / 2)), r.css({
                        left: e,
                        top: i
                    }), s.top = i, s.left = e, o)
                },
                title: function(e) {
                    var n, o = this,
                        s = !0,
                        r = o.wrapper,
                        a = r.children(L),
                        l = a.children(y);
                    return arguments.length ? (t.isPlainObject(e) ? (n = i !== e.text ? e.text : "", s = e.encoded !== !1) : n = e, n === !1 ? (r.addClass("k-window-titleless"), r.css("padding-top", 0), a.remove()) : a.length ? l.html(s ? d.htmlEncode(n) : n) : (r.prepend(mt.titlebar({
                        title: s ? d.htmlEncode(n) : n
                    })), o._actions(), a = r.children(L)), o.options.title = n, o) : l.html()
                },
                content: function(t, i) {
                    var n = this.wrapper.children(W),
                        o = n.children(".km-scroll-container");
                    return n = o[0] ? o : n, e(t) ? (this.angular("cleanup", function() {
                        return {
                            elements: n.children()
                        }
                    }), d.destroy(this.element.children()), n.empty().html(t), this.angular("compile", function() {
                        var t, e = [];
                        for (t = n.length; --t >= 0;) e.push({
                            dataItem: i
                        });
                        return {
                            elements: n.children(),
                            data: e
                        }
                    }), this) : n.html()
                },
                open: function() {
                    var i, e, n, o = this,
                        s = o.wrapper,
                        r = o.options,
                        a = this._animationOptions("open"),
                        l = s.children(W),
                        p = this.containment && !o._isPinned,
                        c = p ? this.containment : t(document);
                    return o.trigger(N) || (o._closing && s.kendoStop(!0, !0), o._closing = !1, o.toFront(), r.autoFocus && o.wrapper.focus(), r.visible = !0, r.modal && (e = !!o._modals().length, i = o._overlay(e), i.kendoStop(!0, !0), a.duration && d.effects.Fade && !e ? (n = d.fx(i).fadeIn(), n.duration(a.duration || 0), n.endValue(.5), n.play()) : i.css("opacity", .5), i.show(), t(window).on("focus" + z, function() {
                        s.data("isFront") && !t(document.activeElement).closest(s).length && o.wrapper.focus()
                    })), s.is(F) || (l.css(tt, R), o.wrapper.find(at).addClass("k-flat"), s.addClass(E).kendoStop().kendoAnimate({
                        effects: a.effects,
                        duration: a.duration,
                        complete: w(this._activate, this)
                    }))), r.isMaximized && (o._containerScrollTop = c.scrollTop(), o._containerScrollLeft = c.scrollLeft(), o._stopDocumentScrolling()), this.options.pinned && !this._isPinned && this.pin(), o
                },
                _activate: function() {
                    var t = this.options.scrollable !== !1;
                    this.options.autoFocus && this.wrapper.focus(), this.element.css(tt, t ? "" : "hidden"), d.resize(this.element.children()), this.trigger(A)
                },
                _removeOverlay: function(e) {
                    var n, o = this._modals(),
                        s = this.options,
                        r = s.modal && !o.length,
                        a = s.modal ? this._overlay(!0) : t(i),
                        l = this._animationOptions("close");
                    r ? (!e && l.duration && d.effects.Fade ? (n = d.fx(a).fadeOut(), n.duration(l.duration || 0), n.startValue(.5), n.play()) : this._overlay(!1).remove(), s.modal.preventScroll && this._enableDocumentScrolling()) : o.length && (this._object(o.last())._overlay(!0), s.modal.preventScroll && this._stopDocumentScrolling())
                },
                _close: function(i) {
                    var e, n = this,
                        o = n.wrapper,
                        s = n.options,
                        r = this._animationOptions("open"),
                        a = this._animationOptions("close"),
                        l = this.containment && !n._isPinned,
                        d = l ? this.containment : t(document);
                    n._closing || (e = n.trigger(B, {
                        userTriggered: !i
                    }), n._closing = !e, o.is(F) && !e && (s.visible = !1, t(T).each(function(i, e) {
                        var n = t(e).children(W);
                        e != o && n.find("> ." + M).length > 0 && n.children(H).remove()
                    }), this._removeOverlay(), n.wrapper.find(at).removeClass("k-flat"), o.kendoStop().kendoAnimate({
                        effects: a.effects || r.effects,
                        reverse: a.reverse === !0,
                        duration: a.duration,
                        complete: w(this._deactivate, this)
                    }), t(window).off(z)), n.options.isMaximized && (n._enableDocumentScrolling(), n._containerScrollTop && n._containerScrollTop > 0 && d.scrollTop(n._containerScrollTop), n._containerScrollLeft && n._containerScrollLeft > 0 && d.scrollLeft(n._containerScrollLeft)), n.options.iframe && n.wrapper.blur())
                },
                _deactivate: function() {
                    var t, i = this;
                    i.wrapper.removeClass(E).hide().css("opacity", ""), i.trigger(K), i.options.modal && (t = i._object(i._modals().last()), t && t.toFront())
                },
                close: function() {
                    return this._close(!0), this
                },
                _actionable: function(i) {
                    return t(i).is(at + "," + at + " .k-icon,:input,a")
                },
                _shouldFocus: function(i) {
                    var e = m(),
                        n = this.wrapper;
                    return this.options.autoFocus && !t(e).is(n) && !this._actionable(i) && (!n.find(e).length || !n.find(i).length)
                },
                toFront: function(i) {
                    var e, n, o = this,
                        s = o.wrapper,
                        r = s[0],
                        a = o.containment && !o._isPinned,
                        l = this._animationOptions("open"),
                        d = +s.css(et),
                        p = d,
                        c = i && i.target || null;
                    return t(T).each(function(i, e) {
                        var n = t(e),
                            o = n.css(et),
                            a = n.children(W);
                        isNaN(o) || (d = Math.max(+o, d)), s.data("isFront", e == r), e != r && a.find("." + M).length && !a.find(H).length && a.append(mt.overlay)
                    }), (!s[0].style.zIndex || p < d) && s.css(et, d + 2), o.element.find("> .k-overlay").remove(), o._shouldFocus(c) && (setTimeout(function() {
                        o.wrapper.focus()
                    }, l ? l.duration : 0), e = a ? o.containment.scrollTop() : t(window).scrollTop(), n = parseInt(s.position().top, 10), !o.options.pinned && n > 0 && n < e && (e > 0 ? t(window).scrollTop(n) : s.css("top", e))), s = null, o
                },
                toggleMaximization: function() {
                    return this._closing ? this : this[this.options.isMaximized ? "restore" : "maximize"]()
                },
                restore: function() {
                    var i, e = this,
                        n = e.options,
                        s = n.minHeight,
                        r = e.restoreOptions,
                        a = e.containment && !e._isPinned ? e.containment : t(document);
                    return n.isMaximized || n.isMinimized ? (s && s != 1 / 0 && e.wrapper.css("min-height", s), r && !n.isMaximized && (r.height = o(r.height, e.options.minHeight, e.options.maxHeight), i = n.position.top + parseInt(r.height, 10) > e.maxTop, i && (n.position.top = o(n.position.top, e.minTop, e.maxTop - parseInt(r.height, 10)), _(r, {
                        left: n.position.left,
                        top: n.position.top
                    }))), e.wrapper.css({
                        position: n.pinned ? "fixed" : "absolute",
                        left: r.left,
                        top: r.top,
                        width: r.width,
                        height: r.height
                    }).removeClass(I).find(".k-window-content,.k-resize-handle").show().end().find(".k-window-titlebar .k-i-window-restore").parent().remove().end().end().find(nt).parent().show().end().end().find(rt).parent().show(), n.isMaximized ? e.wrapper.find(".k-i-window-maximize").parent().focus() : n.isMinimized && e.wrapper.find(".k-i-window-minimize").parent().focus(), e.options.width = r.width, e.options.height = r.height, e.options.modal.preventScroll || e._enableDocumentScrolling(), e._containerScrollTop && e._containerScrollTop > 0 && a.scrollTop(e._containerScrollTop), e._containerScrollLeft && e._containerScrollLeft > 0 && a.scrollLeft(e._containerScrollLeft), n.isMaximized = n.isMinimized = !1, e.wrapper.removeAttr("aria-labelled-by"), e.resize(), e) : e
                },
                _sizingAction: function(t, i) {
                    var e = this,
                        n = e.wrapper,
                        o = n[0].style,
                        s = e.options;
                    return s.isMaximized || s.isMinimized ? e : (e.restoreOptions = {
                        width: o.width,
                        height: o.height
                    }, n.children(P).hide().end().children(L).find(nt).parent().hide().eq(0).before(mt.action({
                        name: "window-restore"
                    })), i.call(e), e.wrapper.children(L).find(rt).parent().toggle("maximize" !== t), e.trigger(t), n.find(".k-i-window-restore").parent().focus(), e)
                },
                maximize: function() {
                    return this._sizingAction("maximize", function() {
                        var i = this,
                            e = i.wrapper,
                            n = this.containment && !i._isPinned,
                            o = e.position(),
                            s = t(document);
                        _(i.restoreOptions, {
                            left: o.left + (n ? this.containment.scrollLeft() : 0),
                            top: o.top + (n ? this.containment.scrollTop() : 0)
                        }), this._containerScrollTop = n ? this.containment.scrollTop() : s.scrollTop(), this._containerScrollLeft = n ? this.containment.scrollLeft() : s.scrollLeft(), i._stopDocumentScrolling(), e.css({
                            top: n ? this.containment.scrollTop() : 0,
                            left: n ? this.containment.scrollLeft() : 0,
                            position: n ? "absolute" : "fixed"
                        }).addClass(I), i.options.isMaximized = !0, i._onDocumentResize()
                    }), this
                },
                _stopDocumentScrolling: function() {
                    var e, n, o = this,
                        s = o.containment;
                    return s && !o._isPinned ? (o._storeOverflowRule(s), s.css(tt, R), o.wrapper.css({
                        maxWidth: s.innerWidth(),
                        maxHeight: s.innerHeight()
                    }), i) : (e = t("body"), o._storeOverflowRule(e), e.css(tt, R), n = t("html"), o._storeOverflowRule(n), n.css(tt, R), i)
                },
                _enableDocumentScrolling: function() {
                    var e = this,
                        n = e.containment;
                    return n && !e._isPinned ? (e._restoreOverflowRule(n), e.wrapper.css({
                        maxWidth: n.width,
                        maxHeight: n.height
                    }), i) : (e._restoreOverflowRule(t(document.body)), e._restoreOverflowRule(t("html")), i)
                },
                _storeOverflowRule: function(t) {
                    if (!this._isOverflowStored(t)) {
                        var i = t.get(0).style.overflow;
                        "string" == typeof i && t.data(it, i)
                    }
                },
                _isOverflowStored: function(t) {
                    return "string" == typeof t.data(it)
                },
                _restoreOverflowRule: function(t) {
                    var e = t.data(it);
                    null !== e && e !== i ? (t.css(tt, e), t.removeData(it)) : t.css(tt, "")
                },
                isMaximized: function() {
                    return this.options.isMaximized
                },
                minimize: function() {
                    return this._sizingAction("minimize", function() {
                        var t = this;
                        t.wrapper.css({
                            height: "",
                            minHeight: ""
                        }), t.element.hide(), t.options.isMinimized = !0
                    }), this.wrapper.attr("aria-labelled-by", this.element.attr("aria-labelled-by")), this._updateBoundaries(), this
                },
                isMinimized: function() {
                    return this.options.isMinimized
                },
                pin: function() {
                    var i = this,
                        e = t(window),
                        o = i.wrapper,
                        s = i.options,
                        a = s.position,
                        l = this.containment ? r(o[0]).top + n(this.containment, "borderTopWidth") : n(o, "top"),
                        d = this.containment ? r(o[0]).left + n(this.containment, "borderLeftWidth") : n(o, "left");
                    i.options.isMaximized || (a.top = l, a.left = d, !i._scrollIsAppended || this.containment && "fixed" === this.containment.css("position") || (a.top -= e.scrollTop(), a.left -= e.scrollLeft(), i._scrollIsAppended = !1), o.css(_(a, {
                        position: "fixed"
                    })), o.children(L).find(ot).addClass("k-i-unpin").removeClass("k-i-pin"), i._isPinned = !0, i.options.pinned = !0, this.containment && (s.maxWidth = s.maxHeight = 1 / 0, o.css({
                        maxWidth: "",
                        maxHeight: ""
                    })))
                },
                unpin: function() {
                    var i = this,
                        e = t(window),
                        s = i.wrapper,
                        r = i.options,
                        a = i.options.position,
                        l = i.containment,
                        d = parseInt(s.css("top"), 10) + e.scrollTop(),
                        p = parseInt(s.css("left"), 10) + e.scrollLeft();
                    i.options.isMaximized || (i._isPinned = !1, i._scrollIsAppended = !0, i.options.pinned = !1, l && (i._updateBoundaries(), r.maxWidth = Math.min(l.width, r.maxWidth), r.maxHeight = Math.min(l.height - n(s, "padding-top"), r.maxHeight), s.css({
                        maxWidth: r.maxWidth,
                        maxHeight: r.maxHeight
                    }), d = d < l.position.top ? i.minTop : d > l.position.top + l.height ? i.maxTop : d + l.scrollTop() - (l.position.top + n(l, "border-top-width")), p = p < l.position.left ? i.minLeft : p > l.position.left + l.width ? i.maxLeft : p + l.scrollLeft() - (l.position.left + n(l, "border-left-width"))), a.top = o(d, i.minTop, i.maxTop), a.left = o(p, i.minLeft, i.maxLeft), s.css(_(a, {
                        position: ""
                    })), s.children(L).find(st).addClass("k-i-pin").removeClass("k-i-unpin"))
                },
                _onDocumentResize: function() {
                    var i, e, o, s, r, a = this,
                        l = a.wrapper,
                        p = t(window),
                        c = d.support.zoomLevel(),
                        h = "content-box" == l.css("box-sizing");
                    a.options.isMaximized && (o = h ? n(l, "border-left-width") + n(l, "border-right-width") : 0, s = h ? n(l, "border-top-width") + n(l, "border-bottom-width") : 0, r = h ? n(l, "padding-top") : 0, a.containment && !a._isPinned ? (i = a.containment.innerWidth() - o, e = a.containment.innerHeight() - (s + r)) : (i = p.width() / c - o, e = p.height() / c - (s + r)), l.css({
                        width: i,
                        height: e
                    }), a.options.width = i, a.options.height = e, a.resize())
                },
                refresh: function(i) {
                    var n, o, s, r = this,
                        a = r.options,
                        l = t(r.element);
                    return f(i) || (i = {
                        url: i
                    }), i = _(a.content, i), o = e(a.iframe) ? a.iframe : i.iframe, s = i.url, s ? (e(o) || (o = !ct(s)), o ? (n = l.find("." + M)[0], n ? n.src = s || n.src : l.html(mt.contentFrame(_({}, a, {
                        content: i
                    }))), l.find("." + M).unbind("load" + k).on("load" + k, w(this._triggerRefresh, this))) : r._ajaxRequest(i)) : (i.template && r.content(x(i.template)({})), r.trigger(q)), l.toggleClass("k-window-iframecontent", !!o), r
                },
                _triggerRefresh: function() {
                    this.trigger(q)
                },
                _ajaxComplete: function() {
                    clearTimeout(this._loadingIconTimeout), this.wrapper.find(lt).removeClass(S)
                },
                _ajaxError: function(t, i) {
                    this.trigger(Z, {
                        status: i,
                        xhr: t
                    })
                },
                _ajaxSuccess: function(t) {
                    return function(i) {
                        var e = i;
                        t && (e = x(t)(i || {})), this.content(e, i), this.element.prop("scrollTop", 0), this.trigger(q)
                    }
                },
                _showLoading: function() {
                    this.wrapper.find(lt).addClass(S)
                },
                _ajaxRequest: function(i) {
                    this._loadingIconTimeout = setTimeout(w(this._showLoading, this), 100), t.ajax(_({
                        type: "GET",
                        dataType: "html",
                        cache: !1,
                        error: w(this._ajaxError, this),
                        complete: w(this._ajaxComplete, this),
                        success: w(this._ajaxSuccess(i.template), this)
                    }, i))
                },
                _destroy: function() {
                    this.resizing && this.resizing.destroy(), this.dragging && this.dragging.destroy(), this.wrapper.off(k).children(W).off(k).end().find(".k-resize-handle,.k-window-titlebar").off(k), t(window).off("resize" + k + this._marker), t(window).off(z), t(window).off(k), clearTimeout(this._loadingIconTimeout), p.fn.destroy.call(this), this.unbind(i), d.destroy(this.wrapper), this._removeOverlay(!0)
                },
                destroy: function() {
                    this._destroy(), this.wrapper.empty().remove(), this.wrapper = this.appendTo = this.element = t()
                },
                _createWindow: function() {
                    var i, e, n = this.element,
                        o = this.options,
                        s = d.support.isRtl(n);
                    o.scrollable === !1 && n.css("overflow", "hidden"), e = t(mt.wrapper(o)), i = n.find("iframe:not(.k-content-frame)").map(function() {
                        var t = this.getAttribute("src");
                        return this.src = "", t
                    }), e.toggleClass("k-rtl", s).attr("tabindex", 0).append(n).find("iframe:not(.k-content-frame)").each(function(t) {
                        this.src = i[t]
                    }), this.containment ? this.containment.prepend(e) : this.appendTo && e.appendTo(this.appendTo), e.find(".k-window-title").css(s ? "left" : "right", u(e.find(".k-window-actions")) + 10), n.css("visibility", "").show(), n.find("[data-role=editor]").each(function() {
                        var i = t(this).data("kendoEditor");
                        i && i.refresh()
                    }), e = n = null
                }
            }),
            mt = {
                wrapper: x("<div class='k-widget k-window'></div>"),
                action: x("<a role='button' href='\\#' class='k-button k-flat k-button-icon k-window-action' aria-label='#= name #'><span class='k-icon k-i-#= name.toLowerCase() #'></span></a>"),
                titlebar: x("<div class='k-window-titlebar'><span class='k-window-title'>#= title #</span><div class='k-window-actions'></div></div>"),
                overlay: "<div class='k-overlay'></div>",
                contentFrame: x("<iframe frameborder='0' title='#= title #' class='" + M + "' src='#= content.url #'>This page requires frames in order to show content</iframe>"),
                resizeHandle: x("<div class='k-resize-handle k-resize-#= data #'></div>")
            };
        a.prototype = {
            addOverlay: function() {
                this.owner.wrapper.append(mt.overlay)
            },
            removeOverlay: function() {
                this.owner.wrapper.find(H).remove()
            },
            dragstart: function(i) {
                var e, n, o, s, a, l, p, c = this,
                    h = c.owner,
                    f = h.wrapper;
                c._preventDragging = h.trigger(J), c._preventDragging || (c.elementPadding = parseInt(f.css("padding-top"), 10), c.initialPosition = d.getOffset(f, "position"), c.resizeDirection = i.currentTarget.prop("className").replace("k-resize-handle k-resize-", ""), c.initialSize = {
                    width: f.outerWidth(),
                    height: f.outerHeight()
                }, h._updateBoundaries(), c.containerOffset = h.containment ? h.containment.position : d.getOffset(h.appendTo, "position"), e = f.offsetParent(), e.is("html") ? c.containerOffset.top = c.containerOffset.left = 0 : (n = e.css("margin-top"), o = e.css("margin-left"), s = !pt.test(n) || !pt.test(o), s && (a = r(f[0]), l = a.left - c.containerOffset.left - c.initialPosition.left, p = a.top - c.containerOffset.top - c.initialPosition.top, c._relativeElMarginLeft = l > 1 ? l : 0, c._relativeElMarginTop = p > 1 ? p : 0, c.initialPosition.left += c._relativeElMarginLeft, c.initialPosition.top += c._relativeElMarginTop)), f.children(P).not(i.currentTarget).hide(), t(b).css(j, i.currentTarget.css(j)))
            },
            drag: function(i) {
                var e, n, s, r, a, l, p, c, h, f, m, u, g, w, _, v, x, b, k, z;
                this._preventDragging || (e = this, n = e.owner, s = n.wrapper, r = n.options, a = r.position, l = e.resizeDirection, p = e.containerOffset, c = e.initialPosition, h = e.initialSize, f = n.containment && !n._isPinned, m = d.support.isRtl(n.containment), u = f && m && n.containment.innerWidth() > n.containment.width ? d.support.scrollbar() : 0, g = f ? {
                    top: n.containment.scrollTop(),
                    left: n.containment.scrollLeft()
                } : {
                    top: 0,
                    left: 0
                }, b = Math.max(i.x.location, 0), k = Math.max(i.y.location, 0), l.indexOf("e") >= 0 ? (w = n.containment && b - h.width >= n.maxLeft - g.left + p.left + u ? n.maxLeft + u - c.left + h.width - g.left : b - c.left - p.left, s.outerWidth(o(w, r.minWidth, r.maxWidth))) : l.indexOf("w") >= 0 && (x = c.left + h.width + p.left, w = o(x - b, r.minWidth, r.maxWidth), a.left = x - w - p.left - u - (e._relativeElMarginLeft || 0) + g.left, n.containment && a.left <= n.minLeft && (a.left = n.minLeft, w = o(x - u - a.left - p.left + g.left, r.minWidth, r.maxWidth)), s.css({
                    left: a.left,
                    width: w
                })), z = k, n.options.pinned && (z -= t(window).scrollTop()), l.indexOf("s") >= 0 ? (_ = z - c.top - e.elementPadding - p.top, z - h.height - e.elementPadding >= n.maxTop + p.top - g.top && (_ = n.maxTop - c.top + h.height - g.top), s.outerHeight(o(_, r.minHeight, r.maxHeight))) : l.indexOf("n") >= 0 && (v = c.top + h.height + p.top, _ = o(v - z, r.minHeight, r.maxHeight), a.top = v - _ - p.top - (e._relativeElMarginTop || 0) + g.top, a.top <= n.minTop && n.containment && (a.top = n.minTop, _ = o(v - a.top - p.top + g.top, r.minHeight, r.maxHeight)), s.css({
                    top: a.top,
                    height: _
                })), w && (n.options.width = w + "px"), _ && (n.options.height = _ + "px"), n.resize())
            },
            dragend: function(i) {
                if (!this._preventDragging) {
                    var e = this,
                        n = e.owner,
                        o = n.wrapper;
                    return o.children(P).not(i.currentTarget).show(), t(b).css(j, ""), n.touchScroller && n.touchScroller.reset(), 27 == i.keyCode && o.css(e.initialPosition).css(e.initialSize), n.trigger(Q), !1
                }
            },
            destroy: function() {
                this._draggable && this._draggable.destroy(), this._draggable = this.owner = null
            }
        }, l.prototype = {
            dragstart: function(i) {
                var e = this.owner,
                    n = e.options.draggable,
                    o = e.element,
                    s = o.find(".k-window-actions"),
                    r = d.getOffset(e.appendTo);
                this._preventDragging = e.trigger(X) || !n, this._preventDragging || e.isMaximized() || (e.initialWindowPosition = d.getOffset(e.wrapper, "position"), e.initialPointerPosition = {
                    left: e.options.position.left,
                    top: e.options.position.top
                }, e.startPosition = {
                    left: i.x.client - e.initialWindowPosition.left,
                    top: i.y.client - e.initialWindowPosition.top
                }, e._updateBoundaries(), e.containment || (e.minLeft = s.length > 0 ? u(s) + parseInt(s.css("right"), 10) - u(o) : 20 - u(o), e.minLeft -= r.left, e.minTop = -r.top), e.wrapper.append(mt.overlay).children(P).hide(), t(b).css(j, i.currentTarget.css(j)))
            },
            drag: function(i) {
                var e, n, s = this.owner,
                    r = s.options.position,
                    a = s.options.draggable.axis;
                this._preventDragging || s.isMaximized() || (a && "x" !== a.toLowerCase() || (e = i.x.client - s.startPosition.left, s.containment && !s._isPinned && (e += s.containment.scrollLeft()), r.left = o(e, s.minLeft, s.maxLeft)), a && "y" !== a.toLowerCase() || (n = i.y.client - s.startPosition.top, s.containment && !s._isPinned && (n += s.containment.scrollTop()), r.top = o(n, s.minTop, s.maxTop)), d.support.transforms ? t(s.wrapper).css("transform", "translate(" + (r.left - s.initialPointerPosition.left) + "px, " + (r.top - s.initialPointerPosition.top) + "px)") : t(s.wrapper).css(r))
            },
            _finishDrag: function() {
                var i = this.owner;
                i.wrapper.children(P).toggle(!i.options.isMinimized).end().find(H).remove(), t(b).css(j, "")
            },
            dragcancel: function(t) {
                this._preventDragging || (this._finishDrag(), t.currentTarget.closest(T).css(this.owner.initialWindowPosition))
            },
            dragend: function() {
                var i = this.owner;
                if (!this._preventDragging && !i.isMaximized()) return t(i.wrapper).css(i.options.position).css("transform", ""), this._finishDrag(), i.trigger(Y), !1
            },
            destroy: function() {
                this._draggable && this._draggable.destroy(), this._draggable = this.owner = null
            }
        }, d.ui.plugin(ft)
    }(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function(t, i, e) {
    (e || i)()
});
//# sourceMappingURL=kendo.window.min.js.map;
/** 
 * Kendo UI v2021.1.204 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/
! function(e, define) {
    define("kendo.virtuallist.min", ["kendo.data.min"], e)
}(function() {
    return function(e, t) {
        function i(e) {
            return e[e.length - 1]
        }

        function n(e) {
            return e instanceof Array ? e : [e]
        }

        function s(e) {
            return "string" == typeof e || "number" == typeof e || "boolean" == typeof e
        }

        function r(e, t, i) {
            return Math.ceil(e * t / i)
        }

        function a(e, t, i) {
            var n = document.createElement(i || "div");
            return t && (n.className = t), e.appendChild(n), n
        }

        function o() {
            var t, i = e('<div class="k-popup"><ul class="k-list"><li class="k-item"><li></ul></div>');
            return i.css({
                position: "absolute",
                left: "-200000px",
                visibility: "hidden"
            }), i.appendTo(document.body), t = parseFloat(I.getComputedStyles(i.find(".k-item")[0], ["line-height"])["line-height"]), i.remove(), t
        }

        function l(e, t, i) {
            return {
                down: e * i,
                up: e * (t - 1 - i)
            }
        }

        function u(e, t) {
            var i = (e.listScreens - 1 - e.threshold) * t,
                n = e.threshold * t;
            return function(e, t, s) {
                return t > s ? t - e.top < i : 0 === e.top || t - e.top > n
            }
        }

        function h(e, t) {
            return function(i) {
                return t(e.scrollTop, i)
            }
        }

        function c(e) {
            return function(t, i) {
                return e(t.items, t.index, i), t
            }
        }

        function d(e, t) {
            I.support.browser.msie && I.support.browser.version < 10 ? e.style.top = t + "px" : (e.style.webkitTransform = "translateY(" + t + "px)", e.style.transform = "translateY(" + t + "px)")
        }

        function f(t, i) {
            return function(n, s) {
                for (var r = 0, a = n.length; r < a; r++) t(n[r], s[r], i), s[r].item && this.trigger(N, {
                    item: e(n[r]),
                    data: s[r].item,
                    ns: I.ui
                })
            }
        }

        function p(e, t) {
            var i;
            return t > 0 ? (i = e.splice(0, t), e.push.apply(e, i)) : (i = e.splice(t, -t), e.unshift.apply(e, i)), i
        }

        function g(i, n, s) {
            var r = s.template;
            i = e(i), n.item || (r = s.placeholderTemplate), 0 === n.index && this.header && n.group && this.header.html(s.fixedGroupTemplate(n.group)), this.angular("cleanup", function() {
                return {
                    elements: [i]
                }
            }), i.attr("data-uid", n.item ? n.item.uid : "").attr("data-offset-index", n.index), i.html(this.options.columns && this.options.columns.length && n.item ? m(this.options, n.item, s) : r(n.item || {})), i.toggleClass(F, n.current), i.toggleClass(E, n.selected), i.toggleClass("k-first", n.newGroup), i.toggleClass("k-last", n.isLastGroupedItem), i.toggleClass("k-loading-item", !n.item), 0 !== n.index && n.newGroup && e("<div class=" + L + "></div>").appendTo(i).html(s.groupTemplate(n.group)), n.top !== t && d(i[0], n.top), this.angular("compile", function() {
                return {
                    elements: [i],
                    data: [{
                        dataItem: n.item,
                        group: n.group,
                        newGroup: n.newGroup
                    }]
                }
            })
        }

        function m(e, t, i) {
            var n, s, r, a, o = "";
            for (n = 0; n < e.columns.length; n++) s = e.columns[n].width, r = parseInt(s, 10), a = "", s && (a += "style='width:", a += r, a += C.test(s) ? "%" : "px", a += ";'"), o += "<span class='k-cell' " + a + ">", o += i["column" + n](t), o += "</span>";
            return o
        }

        function _(e, t) {
            var i, n, s, r, a = t.length,
                o = e.length,
                l = [],
                u = [];
            if (o)
                for (s = 0; s < o; s++) {
                    for (i = e[s], n = !1, r = 0; r < a; r++)
                        if (i === t[r]) {
                            n = !0, l.push({
                                index: s,
                                item: i
                            });
                            break
                        }
                    n || u.push(i)
                }
            return {
                changed: l,
                unchanged: u
            }
        }

        function v(e) {
            return e && "resolved" !== e.state()
        }
        var I = window.kendo,
            x = I.ui,
            D = x.Widget,
            y = x.DataBoundWidget,
            S = e.proxy,
            C = /^\d+(\.\d+)?%$/i,
            k = "k-virtual-wrap",
            b = "k-virtual-list",
            w = "k-virtual-content",
            T = "k-list",
            H = "k-group-header",
            V = "k-virtual-item",
            B = "k-item",
            G = "k-height-container",
            L = "k-group",
            E = "k-state-selected",
            F = "k-state-focused",
            M = "k-state-hover",
            A = "change",
            P = "click",
            R = "listBound",
            N = "itemChange",
            O = "activate",
            z = "deactivate",
            j = ".VirtualList",
            Q = y.extend({
                init: function(t, i) {
                    var s = this;
                    s.bound(!1), s._fetching = !1, D.fn.init.call(s, t, i), s.options.itemHeight || (s.options.itemHeight = o()), i = s.options, s.element.addClass(T + " " + b).attr("role", "listbox"), s.content = s.element.wrap("<div unselectable='on' class='" + w + "'></div>").parent(), s.wrapper = s.content.wrap("<div class='" + k + "'></div>").parent(), s.header = s.content.before("<div class='" + H + "'></div>").prev(), i.columns && i.columns.length && s.element.removeClass(T), s.element.on("mouseenter" + j, "li:not(.k-loading-item)", function() {
                        e(this).addClass(M)
                    }).on("mouseleave" + j, "li", function() {
                        e(this).removeClass(M)
                    }), s._values = n(s.options.value), s._selectedDataItems = [], s._selectedIndexes = [], s._rangesList = {}, s._promisesList = [], s._optionID = I.guid(), s._templates(), s.setDataSource(i.dataSource), s.content.on("scroll" + j, I.throttle(function() {
                        s._renderItems(), s._triggerListBound()
                    }, i.delay)), s._selectable()
                },
                options: {
                    name: "VirtualList",
                    autoBind: !0,
                    delay: 100,
                    height: null,
                    listScreens: 4,
                    threshold: .5,
                    itemHeight: null,
                    oppositeBuffer: 1,
                    type: "flat",
                    selectable: !1,
                    value: [],
                    dataValueField: null,
                    template: "#:data#",
                    placeholderTemplate: "loading...",
                    groupTemplate: "#:data#",
                    fixedGroupTemplate: "#:data#",
                    mapValueTo: "index",
                    valueMapper: null
                },
                events: [A, P, R, N, O, z],
                setOptions: function(e) {
                    D.fn.setOptions.call(this, e), this._selectProxy && this.options.selectable === !1 ? this.element.off(P, "." + V, this._selectProxy) : !this._selectProxy && this.options.selectable && this._selectable(), this._templates(), this.refresh()
                },
                items: function() {
                    return e(this._items)
                },
                destroy: function() {
                    this.wrapper.off(j), this.dataSource.unbind(A, this._refreshHandler), D.fn.destroy.call(this)
                },
                setDataSource: function(t) {
                    var i, n = this,
                        s = t || {};
                    s = e.isArray(s) ? {
                        data: s
                    } : s, s = I.data.DataSource.create(s), n.dataSource ? (n.dataSource.unbind(A, n._refreshHandler), n._clean(), n.bound(!1), n._deferValueSet = !0, i = n.value(), n.value([]), n.mute(function() {
                        n.value(i)
                    })) : n._refreshHandler = e.proxy(n.refresh, n), n.dataSource = s.bind(A, n._refreshHandler), n.setDSFilter(s.filter()), 0 !== s.view().length ? n.refresh() : n.options.autoBind && s.fetch()
                },
                skip: function() {
                    return this.dataSource.currentRangeStart()
                },
                _triggerListBound: function() {
                    var e = this,
                        t = e.skip();
                    e.bound() && !e._selectingValue && e._skip !== t && (e._skip = t, e.trigger(R))
                },
                _getValues: function(t) {
                    var i = this._valueGetter;
                    return e.map(t, function(e) {
                        return i(e)
                    })
                },
                _highlightSelectedItems: function() {
                    var e, t;
                    for (e = 0; e < this._selectedDataItems.length; e++) t = this._getElementByDataItem(this._selectedDataItems[e]), t.length && t.addClass(E)
                },
                refresh: function(e) {
                    var t, i = this,
                        n = e && e.action,
                        s = "itemchange" === n,
                        r = this.isFiltered();
                    i._mute || (i._deferValueSet = !1, i._fetching ? (i._renderItems && i._renderItems(!0), i._triggerListBound()) : (r && i.focus(0), i._createList(), n || !i._values.length || r || i.options.skipUpdateOnBind || i._emptySearch ? (i.bound(!0), i._highlightSelectedItems(), i._triggerListBound()) : (i._selectingValue = !0, i.bound(!0), i.value(i._values, !0).done(function() {
                        i._selectingValue = !1, i._triggerListBound()
                    }))), (s || "remove" === n) && (t = _(i._selectedDataItems, e.items), t.changed.length && (s ? i.trigger("selectedItemChange", {
                        items: t.changed
                    }) : i.value(i._getValues(t.unchanged)))), i._fetching = !1)
                },
                removeAt: function(e) {
                    return this._selectedIndexes.splice(e, 1), this._values.splice(e, 1), {
                        position: e,
                        dataItem: this._selectedDataItems.splice(e, 1)[0]
                    }
                },
                setValue: function(e) {
                    this._values = n(e)
                },
                value: function(i, s) {
                    var r, a = this;
                    return i === t ? a._values.slice() : (null === i && (i = []), i = n(i), a._valueDeferred && "resolved" !== a._valueDeferred.state() || (a._valueDeferred = e.Deferred()), r = "multiple" === a.options.selectable && a.select().length && i.length, !r && i.length || a.select(-1), a._values = i, (a.bound() && !a._mute && !a._deferValueSet || s) && a._prefetchByValue(i), a._valueDeferred)
                },
                _checkValuesOrder: function(e) {
                    if (this._removedAddedIndexes && this._removedAddedIndexes.length === e.length) {
                        var t = this._removedAddedIndexes.slice();
                        return this._removedAddedIndexes = null, t
                    }
                    return e
                },
                _prefetchByValue: function(e) {
                    var i, n, r, a = this,
                        o = a._dataView,
                        l = a._valueGetter,
                        u = a.options.mapValueTo,
                        h = !1,
                        c = [];
                    for (n = 0; n < e.length; n++)
                        for (r = 0; r < o.length; r++) i = o[r].item, i && (h = s(i) ? e[n] === i : e[n] === l(i), h && c.push(o[r].index));
                    return c.length === e.length ? (a._values = [], a.select(c), t) : ("function" == typeof a.options.valueMapper ? a.options.valueMapper({
                        value: "multiple" === this.options.selectable ? e : e[0],
                        success: function(e) {
                            "index" === u ? a.mapValueToIndex(e) : "dataItem" === u && a.mapValueToDataItem(e)
                        }
                    }) : a.value()[0] ? (a._selectingValue = !1, a._triggerListBound()) : a.select([-1]), t)
                },
                mapValueToIndex: function(e) {
                    if (e = e === t || e === -1 || null === e ? [] : n(e), e.length) {
                        var i = this._deselect([]).removed;
                        i.length && this._triggerChange(i, [])
                    } else e = [-1];
                    this.select(e)
                },
                mapValueToDataItem: function(i) {
                    var s, r, a, o;
                    if (i = i === t || null === i ? [] : n(i), i.length) {
                        for (s = e.map(this._selectedDataItems, function(e, t) {
                                return {
                                    index: t,
                                    dataItem: e
                                }
                            }), r = e.map(i, function(e, t) {
                                return {
                                    index: t,
                                    dataItem: e
                                }
                            }), this._selectedDataItems = i, this._selectedIndexes = [], a = 0; a < this._selectedDataItems.length; a++) o = this._getElementByDataItem(this._selectedDataItems[a]), this._selectedIndexes.push(this._getIndecies(o)[0]), o.addClass(E);
                        this._triggerChange(s, r), this._valueDeferred && this._valueDeferred.resolve()
                    } else this.select([-1])
                },
                deferredRange: function(t) {
                    var i = this.dataSource,
                        n = this.itemCount,
                        s = this._rangesList,
                        r = e.Deferred(),
                        a = [],
                        o = Math.floor(t / n) * n,
                        l = Math.ceil(t / n) * n,
                        u = l === o ? [l] : [o, l];
                    return e.each(u, function(t, r) {
                        var o, l = r + n,
                            u = s[r];
                        u && u.end === l ? o = u.deferred : (o = e.Deferred(), s[r] = {
                            end: l,
                            deferred: o
                        }, i._multiplePrefetch(r, n, function() {
                            o.resolve()
                        })), a.push(o)
                    }), e.when.apply(e, a).then(function() {
                        r.resolve()
                    }), r
                },
                prefetch: function(t) {
                    var i = this,
                        n = this.itemCount,
                        s = !i._promisesList.length;
                    return v(i._activeDeferred) || (i._activeDeferred = e.Deferred(), i._promisesList = []), e.each(t, function(e, t) {
                        i._promisesList.push(i.deferredRange(i._getSkip(t, n)))
                    }), s && e.when.apply(e, i._promisesList).done(function() {
                        i._promisesList = [], i._activeDeferred.resolve()
                    }), i._activeDeferred
                },
                _findDataItem: function(e, t) {
                    var i, n;
                    if ("group" === this.options.type)
                        for (n = 0; n < e.length; n++) {
                            if (i = e[n].items, !(i.length <= t)) return i[t];
                            t -= i.length
                        }
                    return e[t]
                },
                _getRange: function(e, t) {
                    return this.dataSource._findRange(e, Math.min(e + t, this.dataSource.total()))
                },
                dataItemByIndex: function(t) {
                    var i = this,
                        n = i.itemCount,
                        s = i._getSkip(t, n),
                        r = this._getRange(s, n);
                    return i._getRange(s, n).length ? ("group" === i.options.type && (I.ui.progress(e(i.wrapper), !0), i.mute(function() {
                        i.dataSource.range(s, n, function() {
                            I.ui.progress(e(i.wrapper), !1)
                        }), r = i.dataSource.view()
                    })), i._findDataItem(r, [t - s])) : null
                },
                selectedDataItems: function() {
                    return this._selectedDataItems.slice()
                },
                scrollWith: function(e) {
                    this.content.scrollTop(this.content.scrollTop() + e)
                },
                scrollTo: function(e) {
                    this.content.scrollTop(e)
                },
                scrollToIndex: function(e) {
                    this.scrollTo(e * this.options.itemHeight)
                },
                focus: function(n) {
                    var s, r, a, o, l, u, h = this.options.itemHeight,
                        c = this._optionID,
                        d = !0;
                    if (n === t) return o = this.element.find("." + F), o.length ? o : null;
                    if ("function" == typeof n)
                        for (a = this.dataSource.flatView(), l = 0; l < a.length; l++)
                            if (n(a[l])) {
                                n = l;
                                break
                            }
                    return n instanceof Array && (n = i(n)), isNaN(n) ? (s = e(n), r = parseInt(e(s).attr("data-offset-index"), 10)) : (r = n, s = this._getElementByIndex(r)), r === -1 ? (this.element.find("." + F).removeClass(F), this._focusedIndex = t, t) : (s.length ? (s.hasClass(F) && (d = !1), this._focusedIndex !== t && (o = this._getElementByIndex(this._focusedIndex), o.removeClass(F).removeAttr("id"), d && this.trigger(z)), this._focusedIndex = r, s.addClass(F).attr("id", c), u = this._getElementLocation(r), "top" === u ? this.scrollTo(r * h) : "bottom" === u ? this.scrollTo(r * h + h - this._screenHeight) : "outScreen" === u && this.scrollTo(r * h), d && this.trigger(O)) : (this._focusedIndex = r, this.items().removeClass(F), this.scrollToIndex(r)), t)
                },
                focusIndex: function() {
                    return this._focusedIndex
                },
                focusFirst: function() {
                    this.scrollTo(0), this.focus(0)
                },
                focusLast: function() {
                    var e = this.dataSource.total();
                    this.scrollTo(this.heightContainer.offsetHeight), this.focus(e - 1)
                },
                focusPrev: function() {
                    var e, t = this._focusedIndex;
                    return !isNaN(t) && t > 0 ? (t -= 1, this.focus(t), e = this.focus(), e && e.hasClass("k-loading-item") && (t += 1, this.focus(t)), t) : (t = this.dataSource.total() - 1, this.focus(t), t)
                },
                focusNext: function() {
                    var e, t = this._focusedIndex,
                        i = this.dataSource.total() - 1;
                    return !isNaN(t) && t < i ? (t += 1, this.focus(t), e = this.focus(), e && e.hasClass("k-loading-item") && (t -= 1, this.focus(t)), t) : (t = 0, this.focus(t), t)
                },
                _triggerChange: function(e, t) {
                    e = e || [], t = t || [], (e.length || t.length) && this.trigger(A, {
                        removed: e,
                        added: t
                    })
                },
                select: function(n) {
                    var s, r, a, o, l, u, h = this,
                        c = "multiple" !== h.options.selectable,
                        d = v(h._activeDeferred),
                        f = this.isFiltered(),
                        p = [];
                    return n === t ? h._selectedIndexes.slice() : (h._selectDeferred && "resolved" !== h._selectDeferred.state() || (h._selectDeferred = e.Deferred()), s = h._getIndecies(n), a = c && !f && i(s) === i(this._selectedIndexes), p = h._deselectCurrentValues(s), p.length || !s.length || a ? (h._triggerChange(p), h._valueDeferred && h._valueDeferred.resolve().promise(), h._selectDeferred.resolve().promise()) : (1 === s.length && s[0] === -1 && (s = []), r = s, l = h._deselect(s), p = l.removed, s = l.indices, c && (d = !1, s.length && (s = [i(s)])), u = function() {
                        var e = h._select(s);
                        (r.length === s.length || c) && h.focus(s), h._triggerChange(p, e), h._valueDeferred && h._valueDeferred.resolve(), h._selectDeferred.resolve()
                    }, o = h.prefetch(s), d || (o ? o.done(u) : u()), h._selectDeferred.promise()))
                },
                bound: function(e) {
                    return e === t ? this._listCreated : (this._listCreated = e, t)
                },
                mute: function(e) {
                    this._mute = !0, S(e(), this), this._mute = !1
                },
                setDSFilter: function(t) {
                    this._lastDSFilter = e.extend({}, t)
                },
                isFiltered: function() {
                    return this._lastDSFilter || this.setDSFilter(this.dataSource.filter()), !I.data.Query.compareFilters(this.dataSource.filter(), this._lastDSFilter)
                },
                skipUpdate: e.noop,
                _getElementByIndex: function(t) {
                    return this.items().filter(function(i, n) {
                        return t === parseInt(e(n).attr("data-offset-index"), 10)
                    })
                },
                _getElementByDataItem: function(t) {
                    var i, n, r, a = this._dataView,
                        o = this._valueGetter;
                    for (r = 0; r < a.length; r++)
                        if (n = a[r].item && s(a[r].item) ? a[r].item === t : a[r].item && t && o(a[r].item) == o(t)) {
                            i = a[r];
                            break
                        }
                    return i ? this._getElementByIndex(i.index) : e()
                },
                _clean: function() {
                    this.result = t, this._lastScrollTop = t, this._skip = t, e(this.heightContainer).remove(), this.heightContainer = t, this.element.empty()
                },
                _height: function() {
                    var e = !!this.dataSource.view().length,
                        t = this.options.height,
                        i = this.options.itemHeight,
                        n = this.dataSource.total();
                    return e ? t / i > n && (t = n * i) : t = 0, t
                },
                setScreenHeight: function() {
                    var e = this._height();
                    this.content.height(e), this._screenHeight = e
                },
                screenHeight: function() {
                    return this._screenHeight
                },
                _getElementLocation: function(e) {
                    var t, i = this.content.scrollTop(),
                        n = this._screenHeight,
                        s = this.options.itemHeight,
                        r = e * s,
                        a = r + s,
                        o = i + n;
                    return t = r === i - s || a > i && r < i ? "top" : r === o || r < o && o < a ? "bottom" : r >= i && r <= i + (n - s) ? "inScreen" : "outScreen"
                },
                _templates: function() {
                    var e, t, i, n, s = this.options,
                        r = {
                            template: s.template,
                            placeholderTemplate: s.placeholderTemplate,
                            groupTemplate: s.groupTemplate,
                            fixedGroupTemplate: s.fixedGroupTemplate
                        };
                    if (s.columns)
                        for (e = 0; e < s.columns.length; e++) t = s.columns[e], i = t.field ? "" + t.field : "text", r["column" + e] = t.template || "#: " + i + "#";
                    for (n in r) "function" != typeof r[n] && (r[n] = I.template(r[n] || ""));
                    this.templates = r
                },
                _generateItems: function(e, t) {
                    for (var i, n = [], s = this.options.itemHeight + "px"; t-- > 0;) i = document.createElement("li"), i.tabIndex = -1, i.className = V + " " + B, i.setAttribute("role", "option"), i.style.height = s, i.style.minHeight = s, e.appendChild(i), n.push(i);
                    return n
                },
                _saveInitialRanges: function() {
                    var t, i = this.dataSource._ranges,
                        n = e.Deferred();
                    for (n.resolve(), this._rangesList = {}, t = 0; t < i.length; t++) this._rangesList[i[t].start] = {
                        end: i[t].end,
                        deferred: n
                    }
                },
                _createList: function() {
                    var t = this,
                        i = t.content.get(0),
                        n = t.options,
                        s = t.dataSource;
                    t.bound() && t._clean(), t._saveInitialRanges(), t._buildValueGetter(), t.setScreenHeight(), t.itemCount = r(t._screenHeight, n.listScreens, n.itemHeight), t.itemCount > s.total() && (t.itemCount = s.total()), t._items = t._generateItems(t.element[0], t.itemCount), t._setHeight(n.itemHeight * s.total()), t.options.type = (s.group() || []).length ? "group" : "flat", "flat" === t.options.type ? t.header.hide() : t.header.show(), t.getter = t._getter(function() {
                        t._renderItems(!0)
                    }), t._onScroll = function(e, i) {
                        var n = t._listItems(t.getter);
                        return t._fixedHeader(e, n(e, i))
                    }, t._renderItems = t._whenChanged(h(i, t._onScroll), c(t._reorderList(t._items, e.proxy(g, t)))), t._renderItems(), t._calculateGroupPadding(t._screenHeight), t._calculateColumnsHeaderPadding()
                },
                _setHeight: function(e) {
                    var t, i, n = this.heightContainer;
                    if (n ? t = n.offsetHeight : n = this.heightContainer = a(this.content[0], G), e !== t)
                        for (n.innerHTML = ""; e > 0;) i = Math.min(e, 25e4), a(n).style.height = i + "px", e -= i
                },
                _getter: function() {
                    var e = null,
                        t = this.dataSource,
                        i = t.skip(),
                        n = this.options.type,
                        s = this.itemCount,
                        r = {};
                    return t.pageSize() < s && this.mute(function() {
                            t.pageSize(s)
                        }),
                        function(a, o) {
                            var l, u, h, c, d, f, p, g, m = this;
                            if (t.inRange(o, s)) {
                                if (i !== o && this.mute(function() {
                                        t.range(o, s), i = o
                                    }), "group" === n) {
                                    if (!r[o])
                                        for (u = r[o] = [], h = t.view(), c = 0, d = h.length; c < d; c++)
                                            for (f = h[c], p = 0, g = f.items.length; p < g; p++) u.push({
                                                item: f.items[p],
                                                group: f.value
                                            });
                                    l = r[o][a - o]
                                } else l = t.view()[a - o];
                                return l
                            }
                            return e !== o && (e = o, i = o, m._getterDeferred && m._getterDeferred.reject(), m._getterDeferred = m.deferredRange(o), m._getterDeferred.then(function() {
                                var e = m._indexConstraint(m.content[0].scrollTop);
                                m._getterDeferred = null, o <= e && e <= o + s && (m._fetching = !0, t.range(o, s))
                            })), null
                        }
                },
                _fixedHeader: function(e, t) {
                    var i, n, s = this.currentVisibleGroup,
                        r = this.options.itemHeight,
                        a = Math.floor((e - t.top) / r),
                        o = t.items[a];
                    return o && o.item && (i = o.group, i !== s && (n = i || "", this.header.html(this.templates.fixedGroupTemplate(n)), this.currentVisibleGroup = i)), t
                },
                _itemMapper: function(e, t, i) {
                    var n, r, a = this.options.type,
                        o = this.options.itemHeight,
                        l = this._focusedIndex,
                        u = !1,
                        h = !1,
                        c = !1,
                        d = null,
                        f = !1,
                        p = this._valueGetter;
                    if ("group" === a && (e && (c = 0 === t || this._currentGroup !== !1 && this._currentGroup !== e.group, this._currentGroup = e.group), d = e ? e.group : null, e = e ? e.item : null), "dataItem" === this.options.mapValueTo && this._selectedDataItems.length && e) {
                        for (n = 0; n < this._selectedDataItems.length; n++)
                            if (f = p(this._selectedDataItems[n]) === p(e)) {
                                u = !0;
                                break
                            }
                    } else if (!this.isFiltered() && i.length && e)
                        for (r = 0; r < i.length; r++)
                            if (f = s(e) ? i[r] === e : i[r] === p(e)) {
                                i.splice(r, 1), u = !0;
                                break
                            }
                    return l === t && (h = !0), {
                        item: e ? e : null,
                        group: d,
                        newGroup: c,
                        selected: u,
                        current: h,
                        index: t,
                        top: t * o
                    }
                },
                _range: function(e) {
                    var t, i, n, s = this.itemCount,
                        r = this._values.slice(),
                        a = [];
                    for (this._view = {}, this._currentGroup = !1, i = e, n = e + s; i < n; i++) t = this._itemMapper(this.getter(i, e), i, r), a[a.length - 1] && (a[a.length - 1].isLastGroupedItem = t.newGroup), a.push(t), this._view[t.index] = t;
                    return this._dataView = a, a
                },
                _getDataItemsCollection: function(e, t) {
                    var i = this._range(this._listIndex(e, t));
                    return {
                        index: i.length ? i[0].index : 0,
                        top: i.length ? i[0].top : 0,
                        items: i
                    }
                },
                _listItems: function() {
                    var t = this._screenHeight,
                        i = this.options,
                        n = u(i, t);
                    return e.proxy(function(e, t) {
                        var i = this.result,
                            s = this._lastScrollTop;
                        return !t && i && n(i, e, s) || (i = this._getDataItemsCollection(e, s)), this._lastScrollTop = e, this.result = i, i
                    }, this)
                },
                _whenChanged: function(e, t) {
                    var i;
                    return function(n) {
                        var s = e(n);
                        s !== i && (i = s, t(s, n))
                    }
                },
                _reorderList: function(t, i) {
                    var n = this,
                        s = t.length,
                        r = -(1 / 0);
                    return i = e.proxy(f(i, this.templates), this),
                        function(e, a, o) {
                            var l, u, h = a - r;
                            o || Math.abs(h) >= s ? (l = t, u = e) : (l = p(t, h), u = h > 0 ? e.slice(-h) : e.slice(0, -h)), i(l, u, n.bound()), r = a
                        }
                },
                _bufferSizes: function() {
                    var e = this.options;
                    return l(this._screenHeight, e.listScreens, e.oppositeBuffer)
                },
                _indexConstraint: function(e) {
                    var t = this.itemCount,
                        i = this.options.itemHeight,
                        n = this.dataSource.total();
                    return Math.min(Math.max(n - t, 0), Math.max(0, Math.floor(e / i)))
                },
                _listIndex: function(e, t) {
                    var i, n = this._bufferSizes();
                    return i = e - (e > t ? n.down : n.up), this._indexConstraint(i)
                },
                _selectable: function() {
                    this.options.selectable && (this._selectProxy = e.proxy(this, "_clickHandler"), this.element.on(P + j, "." + V, this._selectProxy))
                },
                getElementIndex: function(e) {
                    return e instanceof jQuery ? parseInt(e.attr("data-offset-index"), 10) : t
                },
                _getIndecies: function(e) {
                    var t, i, n, s = [];
                    if ("function" == typeof e)
                        for (t = this.dataSource.flatView(), i = 0; i < t.length; i++)
                            if (e(t[i])) {
                                s.push(i);
                                break
                            }
                    return "number" == typeof e && s.push(e), n = this.getElementIndex(e), isNaN(n) || s.push(n), e instanceof Array && (s = e), s
                },
                _deselect: function(i) {
                    var n, r, a, o, l, u, h, c = [],
                        d = this._selectedIndexes,
                        f = this._selectedDataItems,
                        p = 0,
                        g = this.options.selectable,
                        m = 0,
                        _ = this._valueGetter,
                        v = null;
                    if (i = i.slice(), g !== !0 && i.length) {
                        if ("multiple" === g)
                            for (u = 0; u < i.length; u++) {
                                if (v = null, p = e.inArray(i[u], d), r = this.dataItemByIndex(i[u]), p === -1 && r)
                                    for (h = 0; h < f.length; h++) o = s(r) ? f[h] === r : _(f[h]) === _(r), o && (a = this._getElementByIndex(i[u]), v = this._deselectSingleItem(a, h, i[u], m));
                                else n = d[p], n !== t && (a = this._getElementByIndex(n), v = this._deselectSingleItem(a, p, n, m));
                                v && (i.splice(u, 1), c.push(v), m++, u--)
                            }
                    } else {
                        for (l = 0; l < d.length; l++) d[l] !== t ? this._getElementByIndex(d[l]).removeClass(E) : f[l] && this._getElementByDataItem(f[l]).removeClass(E), c.push({
                            index: d[l],
                            position: l,
                            dataItem: f[l]
                        });
                        this._values = [], this._selectedDataItems = [], this._selectedIndexes = []
                    }
                    return {
                        indices: i,
                        removed: c
                    }
                },
                _deselectSingleItem: function(e, t, i, n) {
                    var s;
                    if (e.hasClass("k-state-selected")) return e.removeClass(E), this._values.splice(t, 1), this._selectedIndexes.splice(t, 1), s = this._selectedDataItems.splice(t, 1)[0], {
                        index: i,
                        position: t + n,
                        dataItem: s
                    }
                },
                _deselectCurrentValues: function(t) {
                    var i, n, s, r, a = this.element[0].children,
                        o = this._values,
                        l = [],
                        u = 0;
                    if ("multiple" !== this.options.selectable || !this.isFiltered()) return [];
                    if (t[0] === -1) return e(a).removeClass("k-state-selected"), l = e.map(this._selectedDataItems.slice(0), function(e, t) {
                        return {
                            dataItem: e,
                            position: t
                        }
                    }), this._selectedIndexes = [], this._selectedDataItems = [], this._values = [], l;
                    for (; u < t.length; u++) {
                        for (s = -1, n = t[u], this.dataItemByIndex(n) && (i = this._valueGetter(this.dataItemByIndex(n))), r = 0; r < o.length; r++)
                            if (i == o[r]) {
                                s = r;
                                break
                            }
                        s > -1 && (l.push(this.removeAt(s)), e(a[n]).removeClass("k-state-selected"))
                    }
                    return l
                },
                _getSkip: function(e, t) {
                    var i = e < t ? 1 : Math.floor(e / t) + 1;
                    return (i - 1) * t
                },
                _select: function(t) {
                    var i, n, r = this,
                        a = "multiple" !== this.options.selectable,
                        o = this.dataSource,
                        l = this.itemCount,
                        u = this._valueGetter,
                        h = [];
                    return a && (r._selectedIndexes = [], r._selectedDataItems = [], r._values = []), n = o.skip(), e.each(t, function(e, t) {
                        var a = r._getSkip(t, l);
                        r.mute(function() {
                            o.range(a, l), i = r._findDataItem(o.view(), [t - a]), r._selectedIndexes.push(t), r._selectedDataItems.push(i), r._values.push(s(i) ? i : u(i)), h.push({
                                index: t,
                                dataItem: i
                            }), r._getElementByIndex(t).addClass(E), o.range(n, l)
                        })
                    }), r._values = r._checkValuesOrder(r._values), h
                },
                _clickHandler: function(t) {
                    var i = e(t.currentTarget);
                    !t.isDefaultPrevented() && i.attr("data-uid") && this.trigger(P, {
                        item: i
                    })
                },
                _buildValueGetter: function() {
                    this._valueGetter = I.getter(this.options.dataValueField)
                },
                _calculateGroupPadding: function(e) {
                    var t = this.items().first(),
                        i = this.header,
                        n = 0;
                    i[0] && "none" !== i[0].style.display && ("auto" !== e && (n = I.support.scrollbar()), n += parseFloat(t.css("border-right-width"), 10) + parseFloat(t.children(".k-group").css("right"), 10), i.css("padding-right", n))
                },
                _calculateColumnsHeaderPadding: function() {
                    var e, t, i, n;
                    this.options.columns && this.options.columns.length && (e = I.support.isRtl(this.wrapper), t = I.support.scrollbar(), i = this.content.parent().parent().find(".k-grid-header"), n = this.dataSource.total(), i.css(e ? "padding-left" : "padding-right", n ? t : 0))
                }
            });
        I.ui.VirtualList = Q, I.ui.plugin(Q)
    }(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function(e, t, i) {
    (i || t)()
});
//# sourceMappingURL=kendo.virtuallist.min.js.map;
/** 
 * Kendo UI v2021.1.204 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/
! function(e, define) {
    define("kendo.multiselect.min", ["kendo.list.min", "kendo.mobile.scroller.min", "kendo.virtuallist.min"], e)
}(function() {
    return function(e, t) {
        function i(e, t) {
            var i;
            if (null === e && null !== t || null !== e && null === t) return !1;
            if (i = e.length, i !== t.length) return !1;
            for (; i--;)
                if (e[i] !== t[i]) return !1;
            return !0
        }
        var a = window.kendo,
            s = a.ui,
            n = s.List,
            l = e.extend({
                A: 65
            }, a.keys),
            o = a._activeElement,
            r = a.data.ObservableArray,
            u = e.proxy,
            c = "id",
            d = "li",
            p = "accept",
            h = "filter",
            _ = "rebind",
            f = "open",
            g = "close",
            m = "change",
            v = "progress",
            T = "select",
            w = "deselect",
            I = "aria-disabled",
            b = "aria-readonly",
            y = "k-state-focused",
            S = "k-state-selected",
            V = "k-hidden",
            x = "k-state-hover",
            L = "k-state-disabled",
            k = "k-no-click",
            C = "disabled",
            D = "readonly",
            O = "off",
            E = ".kendoMultiSelect",
            F = "click" + E,
            A = "keydown" + E,
            B = "mouseenter" + E,
            M = "mouseleave" + E,
            H = B + " " + M,
            P = /"/g,
            K = e.isArray,
            R = ["font-family", "font-size", "font-stretch", "font-style", "font-weight", "letter-spacing", "text-transform", "line-height"],
            N = n.extend({
                init: function(t, i) {
                    var s, l, o = this;
                    o.ns = E, n.fn.init.call(o, t, i), o._optionsMap = {}, o._customOptions = {}, o._wrapper(), o._tagList(), o._input(), o._textContainer(), o._loader(), o._clearButton(), o._tabindex(o.input), t = o.element.attr("multiple", "multiple").hide(), i = o.options, i.placeholder || (i.placeholder = t.data("placeholder")), s = t.attr(c), s && (o._tagID = s + "_tag_active", s += "_taglist", o.tagList.attr(c, s), o.input.attr("aria-describedby", s)), o._initialOpen = !0, o._ariaLabel(), o._ariaSetLive(), o._dataSource(), o._ignoreCase(), o._popup(), o._tagTemplate(), o.requireValueMapper(o.options), o._initList(), o._reset(), o._enable(), o._placeholder(), i.autoBind ? o.dataSource.fetch() : i.value && o._preselect(i.value), l = e(o.element).parents("fieldset").is(":disabled"), l && o.enable(!1), o._ariaSetSize(o.value().length), a.notify(o), o._toggleCloseVisibility()
                },
                options: {
                    name: "MultiSelect",
                    tagMode: "multiple",
                    enabled: !0,
                    autoBind: !0,
                    autoClose: !0,
                    highlightFirst: !0,
                    dataTextField: "",
                    dataValueField: "",
                    filter: "startswith",
                    ignoreCase: !0,
                    minLength: 1,
                    messages: {
                        singleTag: "item(s) selected",
                        clear: "clear",
                        deleteTag: "delete",
                        noData: "No data found."
                    },
                    enforceMinLength: !1,
                    delay: 100,
                    value: null,
                    maxSelectedItems: null,
                    placeholder: "",
                    height: 200,
                    animation: {},
                    virtual: !1,
                    itemTemplate: "",
                    tagTemplate: "",
                    groupTemplate: "#:data#",
                    fixedGroupTemplate: "#:data#",
                    clearButton: !0,
                    autoWidth: !1,
                    popup: null
                },
                events: [f, g, m, T, w, "filtering", "dataBinding", "dataBound"],
                setDataSource: function(e) {
                    this.options.dataSource = e, this._state = "", this._dataSource(), this.persistTagList = !1, this.listView.setDataSource(this.dataSource), this.options.autoBind && this.dataSource.fetch()
                },
                setOptions: function(e) {
                    var t = this._listOptions(e);
                    n.fn.setOptions.call(this, e), this.listView.setOptions(t), this._accessors(), this._aria(this.tagList.attr(c)), this._tagTemplate(), this._placeholder(), this._clearButton()
                },
                currentTag: function(e) {
                    var i = this;
                    return e === t ? i._currentTag : (i._currentTag && (i._currentTag.removeClass(y).removeAttr(c), i._currentTag.find(".k-select").attr("aria-hidden", !0), i.input.removeAttr("aria-activedescendant")), e && (e.addClass(y).attr(c, i._tagID), e.find(".k-select").removeAttr("aria-hidden"), i.input.attr("aria-activedescendant", i._tagID)), i._currentTag = e, t)
                },
                dataItems: function() {
                    return this.listView.selectedDataItems()
                },
                destroy: function() {
                    var e = this,
                        t = e.ns;
                    clearTimeout(e._busy), clearTimeout(e._typingTimeout), e.wrapper.off(t), e.tagList.off(t), e.input.off(t), e._clear.off(t), n.fn.destroy.call(e)
                },
                _activateItem: function() {
                    this.popup.visible() && n.fn._activateItem.call(this), this.currentTag(null)
                },
                _listOptions: function(t) {
                    var i = this,
                        s = n.fn._listOptions.call(i, e.extend(t, {
                            selectedItemChange: u(i._selectedItemChange, i),
                            selectable: "multiple"
                        })),
                        l = this.options.itemTemplate || this.options.template,
                        o = s.itemTemplate || l || s.template;
                    return o || (o = "#:" + a.expr(s.dataTextField, "data") + "#"), s.template = o, s
                },
                _setListValue: function() {
                    n.fn._setListValue.call(this, this._initialValues.slice(0))
                },
                _listChange: function(e) {
                    var i, a = this.dataSource.flatView(),
                        s = this._optionsMap,
                        n = this._value;
                    for (this._state === _ && (this._state = ""), i = 0; i < e.added.length; i++)
                        if (s[n(e.added[i].dataItem)] === t) {
                            this._render(a);
                            break
                        }
                    this._selectValue(e.added, e.removed)
                },
                _selectedItemChange: function(e) {
                    var t, i, a = e.items;
                    for (i = 0; i < a.length; i++) t = a[i], this.tagList.children().eq(t.index).children("span:first").html(this.tagTextTemplate(t.item))
                },
                _wrapperMousedown: function(t) {
                    var i = this,
                        s = "input" !== t.target.nodeName.toLowerCase(),
                        n = e(t.target),
                        l = n.hasClass("k-select") || n.hasClass("k-icon");
                    l && (l = !n.closest(".k-select").children(".k-i-arrow-60-down").length), !s || l && a.support.mobileOS || !t.cancelable || t.preventDefault(), l || (i.input[0] !== o() && s && i.input.focus(), 1 === i.options.minLength && i.open())
                },
                _inputFocus: function() {
                    this._placeholder(!1, !0), this.wrapper.addClass(y)
                },
                _inputFocusout: function() {
                    var e = this;
                    clearTimeout(e._typingTimeout), e.wrapper.removeClass(y), e._placeholder(!e.listView.selectedDataItems()[0], !0), e.close(), e._state === h && (e._state = p, e.listView.skipUpdate(!0)), e.listView.bound() && e.listView.isFiltered() && (e.persistTagList = !0, e._clearFilter()), e.element.blur()
                },
                _removeTag: function(e, i) {
                    var a, s, n, l = this,
                        o = l._state,
                        r = e.index(),
                        u = l.listView,
                        c = u.value()[r],
                        d = l.listView.selectedDataItems()[r],
                        _ = l._customOptions[c],
                        f = u.element[0].children;
                    return l.trigger(w, {
                        dataItem: d,
                        item: e
                    }) ? (l._close(), t) : (_ !== t || o !== p && o !== h || (_ = l._optionsMap[c]), n = function() {
                        l.currentTag(null), i && l._change(), l._close()
                    }, _ === t && u.select().length ? (l.persistTagList = !1, u.select(u.select()[r]).done(n)) : (a = l.element[0].children[_], a && (a.selected = !1), u.removeAt(r), s = f[_], s && f[_].classList.remove("k-state-selected"), "single" !== l.options.tagMode ? e.remove() : l._updateTagListHTML(), n()), t)
                },
                _tagListClick: function(t) {
                    t.preventDefault(), t.stopPropagation();
                    var i = e(t.currentTarget);
                    i.children(".k-i-arrow-60-down").length || this._removeTag(i.closest(d), !0)
                },
                _clearValue: function() {
                    var t = this;
                    "single" === t.options.tagMode ? t._clearSingleTagValue() : t.tagList.children().each(function(i, a) {
                        t._removeTag(e(a), !1)
                    }), t.input.val(""), t._search(), t._change(), t.focus(), t._hideClear(), t._state === h && (t._state = p)
                },
                _clearSingleTagValue: function() {
                    var e, i = this,
                        a = i.dataItems(),
                        s = i.tagList.children(),
                        n = i.persistTagList;
                    for (e = 0; e < a.length; e += 1)
                        if (i.trigger(w, {
                                dataItem: a[e],
                                item: s.first()
                            })) return i._close(), t;
                    n && (i.persistTagList = !1), i.listView.value([]), i.persistTagList = n
                },
                _focusHandler: function() {
                    this.input.focus()
                },
                _editable: function(t) {
                    var i = this,
                        a = t.disable,
                        s = t.readonly,
                        n = i.wrapper.off(E),
                        l = i.tagList.off(E),
                        o = i.element.add(i.input.off(E));
                    s || a ? (n.toggleClass(L, a).toggleClass(k, s), o.attr(C, a).attr(D, s).attr(I, a).attr(b, s)) : (n.removeClass(L).removeClass(k).on(H, i._toggleHover).on("mousedown" + E + " touchend" + E, u(i._wrapperMousedown, i)).on(F, u(i._focusHandler, i)), i.input.on(A, u(i._keydown, i)).on("paste" + E, u(i._search, i)).on("input" + E, u(i._search, i)).on("focus" + E, u(i._inputFocus, i)).on("focusout" + E, u(i._inputFocusout, i)), i._clear.on(F + " touchend" + E, u(i._clearValue, i)), o.removeAttr(C).removeAttr(D).attr(I, !1).attr(b, !1), l.on(B, d, function() {
                        e(this).addClass(x)
                    }).on(M, d, function() {
                        e(this).removeClass(x)
                    }).on(F + " touchend" + E, "li.k-button .k-select", u(i._tagListClick, i)))
                },
                _close: function() {
                    var e = this;
                    e.options.autoClose ? e.close() : e.popup.position()
                },
                _filterSource: function(e, t) {
                    t || (t = this._retrieveData), this._retrieveData = !1, n.fn._filterSource.call(this, e, t)
                },
                close: function() {
                    this._activeItem = null, this.input.removeAttr("aria-activedescendant"), this.popup.close()
                },
                open: function() {
                    var t = this;
                    t._request && (t._retrieveData = !1), t._retrieveData || !t.listView.bound() || t._state === p ? (t._open = !0, t._state = _, t.listView.skipUpdate(!0), t.persistTagList = !(t._initialOpen && !t.listView.bound()), t._filterSource(), t._focusItem()) : t._allowOpening() && (!t._initialOpen || t.options.autoBind || t.options.virtual || !t.options.value || e.isPlainObject(t.options.value[0]) || t.value(t.value() || t._initialValues), t.popup._hovered = !0, t._initialOpen = !1, t.popup.open(), t._focusItem())
                },
                toggle: function(e) {
                    e = e !== t ? e : !this.popup.visible(), this[e ? f : g]()
                },
                refresh: function() {
                    this.listView.refresh()
                },
                _listBound: function() {
                    var e = this,
                        t = e.dataSource.flatView();
                    e._render(t), e._renderFooter(), e._renderNoData(), e._toggleNoData(!t.length), e._resizePopup(), e._updateItemFocus(), e._open && (e._open = !1, e.toggle(e._allowOpening())), e.popup.position(), e._touchScroller && e._touchScroller.reset(), e._hideBusy(), e.trigger("dataBound")
                },
                _updateItemFocus: function() {
                    var e = this,
                        i = e.dataSource.flatView(),
                        a = e.listView.skip(),
                        s = a === t || 0 === a;
                    i.length && s && (e.options.highlightFirst ? e.listView.focusFirst() : e.listView.focus(-1))
                },
                _inputValue: function() {
                    var e = this,
                        t = e.input.val();
                    return e.options.placeholder === t && (t = ""), t
                },
                value: function(e) {
                    var i = this,
                        a = i.listView,
                        s = a.value().slice(),
                        n = i.options.maxSelectedItems,
                        l = a.bound() && a.isFiltered();
                    return e === t ? s : (i.persistTagList = !1, i.requireValueMapper(i.options, e), e = i._normalizeValues(e), null !== n && e.length > n && (e = e.slice(0, n)), l && i._clearFilter(), a.value(e), i._old = i._valueBeforeCascade = e.slice(), l || i._fetchData(), i._ariaSetSize(i.value().length), i._toggleCloseVisibility(), t)
                },
                _preselect: function(t, i) {
                    var s = this;
                    K(t) || t instanceof a.data.ObservableArray || (t = [t]), (e.isPlainObject(t[0]) || t[0] instanceof a.data.ObservableObject || !s.options.dataValueField) && (s.dataSource.data(t), s.value(i || s._initialValues), s._retrieveData = !0)
                },
                _setOption: function(e, t) {
                    var i = this.element[0].children[this._optionsMap[e]];
                    i && (i.selected = t)
                },
                _fetchData: function() {
                    var e = this,
                        t = !!e.dataSource.view().length,
                        i = 0 === e.listView.value().length;
                    i || e._request || (e._retrieveData || !e._fetch && !t) && (e._fetch = !0, e._retrieveData = !1, e.dataSource.read().done(function() {
                        e._fetch = !1
                    }))
                },
                _isBound: function() {
                    return this.listView.bound() && !this._retrieveData
                },
                _dataSource: function() {
                    var e = this,
                        t = e.element,
                        i = e.options,
                        s = i.dataSource || {};
                    s = K(s) ? {
                        data: s
                    } : s, s.select = t, s.fields = [{
                        field: i.dataTextField
                    }, {
                        field: i.dataValueField
                    }], e.dataSource && e._refreshHandler ? e._unbindDataSource() : (e._progressHandler = u(e._showBusy, e), e._errorHandler = u(e._hideBusy, e)), e.dataSource = a.data.DataSource.create(s).bind(v, e._progressHandler).bind("error", e._errorHandler)
                },
                _reset: function() {
                    var t = this,
                        i = t.element,
                        a = i.attr("form"),
                        s = a ? e("#" + a) : i.closest("form");
                    s[0] && (t._resetHandler = function() {
                        setTimeout(function() {
                            t.value(t._initialValues), t._placeholder()
                        })
                    }, t._form = s.on("reset", t._resetHandler))
                },
                _initValue: function() {
                    var e = this.options.value || this.element.val();
                    this._old = this._initialValues = this._normalizeValues(e)
                },
                _normalizeValues: function(t) {
                    var i = this;
                    return null === t ? t = [] : t && e.isPlainObject(t) ? t = [i._value(t)] : t && e.isPlainObject(t[0]) ? t = e.map(t, function(e) {
                        return i._value(e)
                    }) : K(t) || t instanceof r ? K(t) && (t = t.slice()) : t = [t], t
                },
                _change: function() {
                    var e = this,
                        t = e.value();
                    i(t, e._old) || (e._old = t.slice(), e.trigger(m), e.element.trigger(m)), e.popup.position(), e._ariaSetSize(t.length), e._toggleCloseVisibility()
                },
                _click: function(e) {
                    var t = this,
                        i = e.item;
                    e.preventDefault(), t._select(i).done(function() {
                        t._activeItem = i, t._change(), t._close()
                    })
                },
                _getActiveItem: function() {
                    return this._activeItem || e(this.listView.items()[this._getSelectedIndices().length - 1]) || this.listView.focus()
                },
                _getSelectedIndices: function() {
                    return this.listView._selectedIndices || this.listView._selectedIndexes
                },
                _keydown: function(i) {
                    var s, n, o, r, u = this,
                        c = i.keyCode,
                        d = u._currentTag,
                        h = u.listView,
                        _ = u.input.val(),
                        f = a.support.isRtl(u.wrapper),
                        g = u.popup.visible(),
                        m = 0;
                    if (c !== l.ENTER && (this._multipleSelection = !1), c === l.DOWN) {
                        if (i.preventDefault(), !g) return u.open(), h.focus() || h.focusFirst(), t;
                        h.focus() ? (!u._activeItem && i.shiftKey && (u._activeItem = h.focus(), m = -1), s = h.getElementIndex(u._getActiveItem().first()), h.focusNext(), h.focus() ? i.shiftKey && (this._multipleSelection = !0, u._selectRange(s, h.getElementIndex(h.focus().first()) + m)) : h.focusLast()) : h.focusFirst()
                    } else if (c === l.UP) g && (!u._activeItem && i.shiftKey && (u._activeItem = h.focus(), m = 1), s = h.getElementIndex(u._getActiveItem().first()), h.focusPrev(), h.focus() ? i.shiftKey && (this._multipleSelection = !0, u._selectRange(s, h.getElementIndex(h.focus().first()) + m)) : u.close()), i.preventDefault();
                    else if (c === l.LEFT && !f || c === l.RIGHT && f) _ || (d = d ? d.prev() : e(u.tagList[0].lastChild), d[0] && u.currentTag(d));
                    else if (c === l.RIGHT && !f || c === l.LEFT && f) !_ && d && (d = d.next(), u.currentTag(d[0] ? d : null));
                    else if (i.ctrlKey && !i.altKey && c === l.A && g && !u.options.virtual) this._multipleSelection = !0, this._getSelectedIndices().length === h.items().length && (u._activeItem = null), h.items().length && u._selectRange(0, h.items().length - 1);
                    else if (c === l.ENTER && g) {
                        if (!h.focus()) return;
                        if (i.preventDefault(), this._multipleSelection && (this._multipleSelection = !1, h.focus().hasClass(S))) return u._close(), t;
                        u._select(h.focus()).done(function() {
                            u._change(), u._close()
                        })
                    } else if (c === l.SPACEBAR && i.ctrlKey && g) u._activeItem && h.focus() && h.focus()[0] === u._activeItem[0] && (u._activeItem = null), e(h.focus()).hasClass(S) || (u._activeItem = h.focus()), u._select(h.focus()).done(function() {
                        u._change()
                    }), i.preventDefault();
                    else if (c === l.SPACEBAR && i.shiftKey && g) n = h.getElementIndex(u._getActiveItem()), o = h.getElementIndex(h.focus()), n !== t && o !== t && u._selectRange(n, o), i.preventDefault();
                    else if (c === l.ESC) g ? i.preventDefault() : (u.tagList.children().each(function(t, i) {
                        u._removeTag(e(i), !1)
                    }), u._change()), u.close();
                    else if (c === l.HOME) g ? h.focus() ? (i.ctrlKey && i.shiftKey && !u.options.virtual && u._selectRange(h.getElementIndex(h.focus()[0]), 0), h.focusFirst()) : u.close() : _ || (d = u.tagList[0].firstChild, d && u.currentTag(e(d)));
                    else if (c === l.END) g ? h.focus() ? (i.ctrlKey && i.shiftKey && !u.options.virtual && u._selectRange(h.getElementIndex(h.focus()[0]), h.element.children().length - 1), h.focusLast()) : u.close() : _ || (d = u.tagList[0].lastChild, d && u.currentTag(e(d)));
                    else if (c !== l.DELETE && c !== l.BACKSPACE || _) !u.popup.visible() || c !== l.PAGEDOWN && c !== l.PAGEUP ? (clearTimeout(u._typingTimeout), setTimeout(function() {
                        u._scale()
                    }), u._search()) : (i.preventDefault(), r = c === l.PAGEDOWN ? 1 : -1, h.scrollWith(r * h.screenHeight()));
                    else {
                        if (u._state = p, "single" === u.options.tagMode) return u._clearSingleTagValue(), u._change(), u._close(), t;
                        c !== l.BACKSPACE || d || (d = e(u.tagList[0].lastChild)), d && d[0] && u._removeTag(d, !0)
                    }
                },
                _hideBusy: function() {
                    var e = this;
                    clearTimeout(e._busy), e.input.attr("aria-busy", !1), e._loading.addClass(V), e._request = !1, e._busy = null, e._toggleCloseVisibility()
                },
                _showBusyHandler: function() {
                    this.input.attr("aria-busy", !0), this._loading.removeClass(V), this._hideClear()
                },
                _showBusy: function() {
                    var e = this;
                    e._request = !0, e._busy || (e._busy = setTimeout(u(e._showBusyHandler, e), 100))
                },
                _placeholder: function(e, i) {
                    var s = this,
                        n = s.input,
                        l = o(),
                        r = s.options.placeholder,
                        u = n.val(),
                        c = n[0] === l,
                        d = u.length;
                    c && !s.options.autoClose && u !== r || (d = 0, u = ""), e === t && (e = !1, n[0] !== l && (e = !s.listView.selectedDataItems()[0])), s._prev = u, n.toggleClass("k-readonly", e).val(e ? r : u), c && !i && a.caret(n[0], d, d), s._scale()
                },
                _scale: function() {
                    var e, t = this,
                        i = t.wrapper.find(".k-multiselect-wrap"),
                        a = i.width(),
                        s = t._span.text(t.input.val());
                    i.is(":visible") ? e = s.width() + 25 : (s.appendTo(document.documentElement), a = e = s.width() + 25, s.appendTo(i)), t.input.width(e > a ? a : e)
                },
                _option: function(e, i, s) {
                    var n = "<option";
                    return e !== t && (e += "", e.indexOf('"') !== -1 && (e = e.replace(P, "&quot;")), n += ' value="' + e + '"'), s && (n += " selected"), n += ">", i !== t && (n += a.htmlEncode(i)), n += "</option>"
                },
                _render: function(e) {
                    var t, i, a, s, n, l, o = this.listView.selectedDataItems(),
                        r = this.listView.value(),
                        u = e.length,
                        c = "";
                    for (r.length !== o.length && (o = this._buildSelectedItems(r)), n = {}, l = {}, s = 0; s < u; s++) i = e[s], a = this._value(i), t = this._selectedItemIndex(a, o), t !== -1 && o.splice(t, 1), l[a] = s, c += this._option(a, this._text(i), t !== -1);
                    if (o.length)
                        for (s = 0; s < o.length; s++) i = o[s], a = this._value(i), n[a] = u, l[a] = u, u += 1, c += this._option(a, this._text(i), !0);
                    this._customOptions = n, this._optionsMap = l, this.element.html(c)
                },
                _buildSelectedItems: function(e) {
                    var t, i, a = this.options.dataValueField,
                        s = this.options.dataTextField,
                        n = [];
                    for (i = 0; i < e.length; i++) t = {}, t[a] = e[i], t[s] = e[i], n.push(t);
                    return n
                },
                _selectedItemIndex: function(e, t) {
                    for (var i = this._value, a = 0; a < t.length; a++)
                        if (e === i(t[a])) return a;
                    return -1
                },
                _search: function() {
                    var e = this;
                    clearTimeout(e._typingTimeout), e._typingTimeout = setTimeout(function() {
                        var t = e._inputValue();
                        e._prev !== t && (e._prev = t, e.search(t), e._toggleCloseVisibility())
                    }, e.options.delay)
                },
                _toggleCloseVisibility: function() {
                    this.value().length || this.input.val() && this.input.val() !== this.options.placeholder ? this._showClear() : this._hideClear()
                },
                _allowOpening: function() {
                    return this._allowSelection() && n.fn._allowOpening.call(this)
                },
                _allowSelection: function() {
                    var e = this.options.maxSelectedItems;
                    return null === e || e > this.listView.value().length
                },
                _angularTagItems: function(t) {
                    var i = this;
                    i.angular(t, function() {
                        return {
                            elements: i.tagList[0].children,
                            data: e.map(i.dataItems(), function(e) {
                                return {
                                    dataItem: e
                                }
                            })
                        }
                    })
                },
                updatePersistTagList: function(e, t) {
                    this.persistTagList.added && this.persistTagList.added.length === t.length && this.persistTagList.removed && this.persistTagList.removed.length === e.length ? this.persistTagList = !1 : (this.listView._removedAddedIndexes = this._old.slice(), this.persistTagList = {
                        added: e,
                        removed: t
                    })
                },
                _selectValue: function(e, i) {
                    var a, s, n, l = this,
                        o = l.dataSource.total(),
                        r = l.tagList,
                        u = l._value;
                    if (this.persistTagList) return this.updatePersistTagList(e, i), t;
                    if (l._angularTagItems("cleanup"), "multiple" === l.options.tagMode) {
                        for (n = i.length - 1; n > -1; n--) a = i[n], r.children().length && (r[0].removeChild(r[0].children[a.position]), l._setOption(u(a.dataItem), !1));
                        for (n = 0; n < e.length; n++) s = e[n], r.append(l.tagTemplate(s.dataItem)), l._setOption(u(s.dataItem), !0)
                    } else {
                        for ((!l._maxTotal || l._maxTotal < o) && (l._maxTotal = o), this._updateTagListHTML(), n = i.length - 1; n > -1; n--) l._setOption(u(i[n].dataItem), !1);
                        for (n = 0; n < e.length; n++) l._setOption(u(e[n].dataItem), !0)
                    }
                    l._angularTagItems("compile"), l._placeholder()
                },
                _updateTagListHTML: function() {
                    var e = this,
                        t = e.value(),
                        i = e.dataSource.total(),
                        a = e.tagList;
                    a.html(""), t.length && a.append(e.tagTemplate({
                        values: t,
                        dataItems: e.dataItems(),
                        maxTotal: e._maxTotal,
                        currentTotal: i
                    }))
                },
                _select: function(t) {
                    var i, a, s, n, l = e.Deferred().resolve();
                    return t ? (i = this, a = i.listView, s = a.dataItemByIndex(a.getElementIndex(t)), n = t.hasClass("k-state-selected"), i._state === _ && (i._state = ""), i._allowSelection() || n ? i.trigger(n ? w : T, {
                        dataItem: s,
                        item: t
                    }) ? (i._close(), l) : (i.persistTagList = !1, a.select(t).done(function() {
                        i._placeholder(), i._state === h && (i._state = p, a.skipUpdate(!0))
                    })) : l) : l
                },
                _selectRange: function(i, a) {
                    var s, n, l = this,
                        o = this.listView,
                        r = this.options.maxSelectedItems,
                        u = this._getSelectedIndices().slice(),
                        c = [],
                        d = function(t) {
                            o.select(t).done(function() {
                                t.forEach(function(t) {
                                    var i = o.dataItemByIndex(t),
                                        a = o.element.children()[t],
                                        s = e(a).hasClass("k-state-selected");
                                    l.trigger(s ? T : w, {
                                        dataItem: i,
                                        item: e(a)
                                    })
                                }), l._change()
                            })
                        };
                    if (u.length - 1 === a - i) return d(u);
                    if (i < a)
                        for (s = i; s <= a; s++) c.push(s);
                    else
                        for (s = i; s >= a; s--) c.push(s);
                    for (null !== r && c.length > r && (c = c.slice(0, r)), s = 0; s < c.length; s++) n = c[s], this._getSelectedIndices().indexOf(n) == -1 ? u.push(n) : u.splice(u.indexOf(n), 1);
                    return u.length ? (l.persistTagList = !1, d(u)) : t
                },
                _input: function() {
                    var t = this,
                        i = t.element,
                        a = i[0].accessKey,
                        s = t._inputWrapper.children("input.k-input");
                    s[0] || (s = e('<input class="k-input" style="width: 25px" />').appendTo(t._inputWrapper)), i.removeAttr("accesskey"), t._focused = t.input = s.attr({
                        accesskey: a,
                        autocomplete: O,
                        role: "textbox",
                        title: i[0].title,
                        "aria-expanded": !1,
                        "aria-haspopup": "listbox",
                        "aria-autocomplete": "list"
                    })
                },
                _tagList: function() {
                    var t = this,
                        i = t._inputWrapper.children("ul");
                    i[0] || (i = e('<ul unselectable="on" class="k-reset"/>').appendTo(t._inputWrapper)), t.tagList = i
                },
                _tagTemplate: function() {
                    var e, t = this,
                        i = t.options,
                        s = i.tagTemplate,
                        n = i.dataSource,
                        l = "multiple" === i.tagMode,
                        o = i.messages.singleTag;
                    t.element[0].length && !n && (i.dataTextField = i.dataTextField || "text", i.dataValueField = i.dataValueField || "value"), e = l ? a.template("#:" + a.expr(i.dataTextField, "data") + "#", {
                        useWithBlock: !1
                    }) : a.template("#:values.length# " + o), t.tagTextTemplate = s = s ? a.template(s) : e, t.tagTemplate = function(e) {
                        return '<li aria-selected="true" class="k-button" unselectable="on"><span unselectable="on">' + s(e) + '</span><span aria-hidden="true" unselectable="on" aria-label="' + (l ? 'delete" title="' + t.options.messages.deleteTag + '" aria-label="' + t.options.messages.deleteTag : "open") + '" class="k-select"><span class="k-icon ' + (l ? "k-i-close" : "k-i-arrow-60-down") + '"></span></span></li>'
                    }
                },
                _loader: function() {
                    this._loading = e('<span class="k-icon k-i-loading ' + V + '"></span>').insertAfter(this.input)
                },
                _clearButton: function() {
                    n.fn._clearButton.call(this), this.options.clearButton && (this._clear.insertAfter(this.input), this.wrapper.addClass("k-multiselect-clearable"))
                },
                _textContainer: function() {
                    var t = a.getComputedStyles(this.input[0], R);
                    t.position = "absolute", t.visibility = "hidden", t.top = -3333, t.left = -3333, this._span = e("<span/>").css(t).appendTo(this.wrapper)
                },
                _wrapper: function() {
                    var t = this,
                        i = t.element,
                        a = i.parent("span.k-multiselect");
                    a[0] || (a = i.wrap('<div class="k-widget k-multiselect" unselectable="on" />').parent(), a[0].style.cssText = i[0].style.cssText, a[0].title = i[0].title, e('<div class="k-multiselect-wrap k-floatwrap" unselectable="on" role="listbox"/>').insertBefore(i)), t.wrapper = a.addClass(i[0].className).removeClass("input-validation-error").css("display", ""), t._inputWrapper = e(a[0].firstChild)
                },
                _ariaSetSize: function(e) {
                    var t = this,
                        i = t.tagList.children();
                    e && i.length && i.attr("aria-setsize", e)
                },
                _ariaSetLive: function() {
                    var e = this;
                    e.ul.attr("aria-live", e._isFilterEnabled() ? "polite" : "off")
                }
            });
        s.plugin(N)
    }(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function(e, t, i) {
    (i || t)()
});
//# sourceMappingURL=kendo.multiselect.min.js.map;
/** 
 * Kendo UI v2021.1.204 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/
! function(e, define) {
    define("kendo.dropdownlist.min", ["kendo.list.min", "kendo.mobile.scroller.min", "kendo.virtuallist.min"], e)
}(function() {
    return function(e, t) {
        function i(e, t, i) {
            for (var n, a = 0, o = t.length - 1; a < o; ++a) n = t[a], n in e || (e[n] = {}), e = e[n];
            e[t[o]] = i
        }

        function n(e, t) {
            return e >= t && (e -= t), e
        }

        function a(e, t) {
            for (var i = 0; i < e.length; i++)
                if (e.charAt(i) !== t) return !1;
            return !0
        }
        var o = window.kendo,
            s = o.ui,
            l = s.List,
            r = s.Select,
            p = o.support,
            u = o._activeElement,
            c = o.data.ObservableObject,
            d = o.keys,
            f = ".kendoDropDownList",
            _ = f + "FocusEvent",
            h = "disabled",
            m = "readonly",
            v = "change",
            b = "k-state-focused",
            w = "k-state-default",
            I = "k-state-disabled",
            g = "aria-disabled",
            x = "aria-readonly",
            L = "click" + f + " touchend" + f,
            k = "mouseenter" + f + " mouseleave" + f,
            y = "tabindex",
            T = "filter",
            V = "accept",
            C = "The `optionLabel` option is not valid due to missing fields. Define a custom optionLabel as shown here http://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist#configuration-optionLabel",
            O = e.proxy,
            D = r.extend({
                init: function(i, n) {
                    var a, s, l, p = this,
                        u = n && n.index;
                    p.ns = f, n = e.isArray(n) ? {
                        dataSource: n
                    } : n, r.fn.init.call(p, i, n), n = p.options, i = p.element.on("focus" + f, O(p._focusHandler, p)), p._focusInputHandler = e.proxy(p._focusInput, p), p.optionLabel = e(), p._optionLabel(), p._inputTemplate(), p._reset(), p._prev = "", p._word = "", p._wrapper(), p._tabindex(), p.wrapper.data(y, p.wrapper.attr(y)), p._span(), p._popup(), p._mobile(), p._dataSource(), p._ignoreCase(), p._filterHeader(), p._aria(), p.wrapper.attr("aria-live", "polite"), p._enable(), p._attachFocusHandlers(), p._oldIndex = p.selectedIndex = -1, u !== t && (n.index = u), p._initialIndex = n.index, p.requireValueMapper(p.options), p._initList(), p.listView.one("dataBound", O(p._attachAriaActiveDescendant, p)), p._cascade(), p.one("set", function(e) {
                        !e.sender.listView.bound() && p.hasOptionLabel() && p._textAccessor(p._optionLabelText())
                    }), n.autoBind ? p.dataSource.fetch() : p.selectedIndex === -1 && (s = n.text || "", s || (a = n.optionLabel, a && 0 === n.index ? s = a : p._isSelect && (s = i.children(":selected").text())), p._textAccessor(s)), l = e(p.element).parents("fieldset").is(":disabled"), l && p.enable(!1), p.listView.bind("click", function(e) {
                        e.preventDefault()
                    }), o.notify(p)
                },
                options: {
                    name: "DropDownList",
                    enabled: !0,
                    autoBind: !0,
                    index: 0,
                    text: null,
                    value: null,
                    delay: 500,
                    height: 200,
                    dataTextField: "",
                    dataValueField: "",
                    optionLabel: "",
                    cascadeFrom: "",
                    cascadeFromField: "",
                    cascadeFromParentField: "",
                    ignoreCase: !0,
                    animation: {},
                    filter: "none",
                    minLength: 1,
                    enforceMinLength: !1,
                    virtual: !1,
                    template: null,
                    valueTemplate: null,
                    optionLabelTemplate: null,
                    groupTemplate: "#:data#",
                    fixedGroupTemplate: "#:data#",
                    autoWidth: !1,
                    popup: null
                },
                events: ["open", "close", v, "select", "filtering", "dataBinding", "dataBound", "cascade", "set", "kendoKeydown"],
                setOptions: function(e) {
                    r.fn.setOptions.call(this, e), this.listView.setOptions(this._listOptions(e)), this._optionLabel(), this._inputTemplate(), this._accessors(), this._filterHeader(), this._enable(), this._aria(), !this.value() && this.hasOptionLabel() && this.select(0)
                },
                destroy: function() {
                    var e = this;
                    r.fn.destroy.call(e), e.wrapper.off(f), e.wrapper.off(_), e.element.off(f), e._inputWrapper.off(f), e._arrow.off(), e._arrow = null, e._arrowIcon = null, e.optionLabel.off(), e.filterInput && e.filterInput.off(_)
                },
                open: function() {
                    var e = this,
                        t = !!e.dataSource.filter() && e.dataSource.filter().filters.length > 0,
                        i = this.listView;
                    e.popup.visible() || (e.listView.bound() && e._state !== V ? e._allowOpening() && (e._focusFilter = !0, e.popup.one("activate", e._focusInputHandler), e.popup._hovered = !0, e.wrapper.attr("aria-activedescendant", i._optionID), e.popup.open(), e._resizeFilterInput(), e._focusItem()) : (e._open = !0, e._state = "rebind", e.filterInput && (e.filterInput.val(""), e._prev = ""), e.filterInput && 1 !== e.options.minLength && !t ? (e.refresh(), e.popup.one("activate", e._focusInputHandler), e.wrapper.attr("aria-activedescendant", i._optionID), e.popup.open(), e._resizeFilterInput()) : e._filterSource()))
                },
                close: function() {
                    this._attachAriaActiveDescendant(), this.popup.close()
                },
                _attachAriaActiveDescendant: function() {
                    var e = this.wrapper,
                        t = e.find(".k-input").attr("id");
                    e.attr("aria-activedescendant", t)
                },
                _focusInput: function() {
                    this._focusElement(this.filterInput)
                },
                _resizeFilterInput: function() {
                    var e, t, i = this.filterInput,
                        n = this._prevent;
                    i && (e = this.filterInput[0] === u(), t = o.caret(this.filterInput[0])[0], this._prevent = !0, i.css("display", "none").css("width", this.popup.element.css("width")).css("display", "inline-block"), e && (i.focus(), o.caret(i[0], t)), this._prevent = n)
                },
                _allowOpening: function() {
                    return this.hasOptionLabel() || this.filterInput || r.fn._allowOpening.call(this)
                },
                toggle: function(e) {
                    this._toggle(e, !0)
                },
                current: function(e) {
                    var i;
                    return e === t ? (i = this.listView.focus(), !i && 0 === this.selectedIndex && this.hasOptionLabel() ? this.optionLabel : i) : (this._focus(e), t)
                },
                dataItem: function(i) {
                    var n = this,
                        a = null;
                    if (null === i) return i;
                    if (i === t) a = n.listView.selectedDataItems()[0];
                    else {
                        if ("number" != typeof i) {
                            if (n.options.virtual) return n.dataSource.getByUid(e(i).data("uid"));
                            i = i.hasClass("k-list-optionlabel") ? -1 : e(n.items()).index(i)
                        } else n.hasOptionLabel() && (i -= 1);
                        a = n.dataSource.flatView()[i]
                    }
                    return a || (a = n._optionLabelDataItem()), a
                },
                refresh: function() {
                    this.listView.refresh()
                },
                text: function(e) {
                    var i, n = this,
                        a = n.options.ignoreCase;
                    return e = null === e ? "" : e, e === t ? n._textAccessor() : "string" != typeof e ? (n._textAccessor(e), t) : (i = a ? e.toLowerCase() : e, n._select(function(e) {
                        return e = n._text(e), a && (e = (e + "").toLowerCase()), e === i
                    }).done(function() {
                        n._textAccessor(n.dataItem() || e)
                    }), t)
                },
                _clearFilter: function() {
                    e(this.filterInput).val(""), r.fn._clearFilter.call(this)
                },
                value: function(e) {
                    var i = this,
                        n = i.listView,
                        a = i.dataSource;
                    return e === t ? (e = i._accessor() || i.listView.value()[0], e === t || null === e ? "" : e) : (i.requireValueMapper(i.options, e), !e && i.hasOptionLabel() || (i._initialIndex = null), this.trigger("set", {
                        value: e
                    }), i._request && i.options.cascadeFrom && i.listView.bound() ? (i._valueSetter && a.unbind(v, i._valueSetter), i._valueSetter = O(function() {
                        i.value(e)
                    }, i), a.one(v, i._valueSetter), t) : (i._isFilterEnabled() && n.bound() && n.isFiltered() ? i._clearFilter() : i._fetchData(), n.value(e).done(function() {
                        i._old = i._valueBeforeCascade = i._accessor(), i._oldIndex = i.selectedIndex
                    }), t))
                },
                hasOptionLabel: function() {
                    return this.optionLabel && !!this.optionLabel[0]
                },
                _optionLabel: function() {
                    var i = this,
                        n = i.options,
                        a = n.optionLabel,
                        s = n.optionLabelTemplate;
                    return a ? (s || (s = "#:", s += "string" == typeof a ? "data" : o.expr(n.dataTextField, "data"), s += "#"), "function" != typeof s && (s = o.template(s)), i.optionLabelTemplate = s, i.hasOptionLabel() || (i.optionLabel = e('<div class="k-list-optionlabel"></div>').prependTo(i.list)), i.optionLabel.html(s(a)).off().on(L, O(i._click, i)).on(k, i._toggleHover), i.angular("compile", function() {
                        return {
                            elements: i.optionLabel,
                            data: [{
                                dataItem: i._optionLabelDataItem()
                            }]
                        }
                    }), t) : (i.optionLabel.off().remove(), i.optionLabel = e(), t)
                },
                _optionLabelText: function() {
                    var e = this.options.optionLabel;
                    return "string" == typeof e ? e : this._text(e)
                },
                _optionLabelDataItem: function() {
                    var i = this,
                        n = i.options.optionLabel;
                    return i.hasOptionLabel() ? e.isPlainObject(n) ? new c(n) : i._assignInstance(i._optionLabelText(), "") : t
                },
                _buildOptions: function(e) {
                    var i, n, a, o = this;
                    o._isSelect && (i = o.listView.value()[0], n = o._optionLabelDataItem(), a = n && o._value(n), i !== t && null !== i || (i = ""), n && (a !== t && null !== a || (a = ""), n = '<option value="' + a + '">' + o._text(n) + "</option>"), o._options(e, n, i), i !== l.unifyType(o._accessor(), typeof i) && (o._customOption = null, o._custom(i)))
                },
                _listBound: function() {
                    var e, t = this,
                        i = t._initialIndex,
                        n = t._state === T,
                        a = t.dataSource.flatView();
                    t._presetValue = !1, t._renderFooter(), t._renderNoData(), t._toggleNoData(!a.length), t._resizePopup(!0), t.popup.position(), t._buildOptions(a), n || (t._open && t.toggle(t._allowOpening()), t._open = !1, t._fetch || (a.length ? (!t.listView.value().length && i > -1 && null !== i && t.select(i), t._initialIndex = null, e = t.listView.selectedDataItems()[0], e && t.text() !== t._text(e) && t._selectValue(e)) : t._textAccessor() !== t._optionLabelText() && (t.listView.value(""), t._selectValue(null), t._oldIndex = t.selectedIndex))), t._hideBusy(), t.trigger("dataBound")
                },
                _listChange: function() {
                    this._selectValue(this.listView.selectedDataItems()[0]), (this._presetValue || this._old && this._oldIndex === -1) && (this._oldIndex = this.selectedIndex)
                },
                _filterPaste: function() {
                    this._search()
                },
                _attachFocusHandlers: function() {
                    var e = this,
                        t = e.wrapper;
                    t.on("focusin" + _, O(e._focusinHandler, e)).on("focusout" + _, O(e._focusoutHandler, e)), e.filterInput && e.filterInput.on("focusin" + _, O(e._focusinHandler, e)).on("focusout" + _, O(e._focusoutHandler, e))
                },
                _focusHandler: function() {
                    this.wrapper.focus()
                },
                _focusinHandler: function() {
                    this._inputWrapper.addClass(b), this._prevent = !1
                },
                _focusoutHandler: function() {
                    var e = this,
                        t = window.self !== window.top;
                    e._prevent || (clearTimeout(e._typingTimeout), p.mobileOS.ios && t ? e._change() : e._blur(), e._inputWrapper.removeClass(b), e._prevent = !0, e._open = !1, e.element.blur())
                },
                _wrapperMousedown: function() {
                    this._prevent = !!this.filterInput
                },
                _wrapperClick: function(e) {
                    e.preventDefault(), this.popup.unbind("activate", this._focusInputHandler), this._focused = this.wrapper, this._prevent = !1, this._toggle()
                },
                _editable: function(e) {
                    var t = this,
                        i = t.element,
                        n = e.disable,
                        a = e.readonly,
                        s = t.wrapper.add(t.filterInput).off(f),
                        l = t._inputWrapper.off(k);
                    a || n ? n ? (s.removeAttr(y), l.addClass(I).removeClass(w)) : l.addClass(w).removeClass(I) : (i.removeAttr(h).removeAttr(m), l.addClass(w).removeClass(I).on(k, t._toggleHover), s.attr(y, s.data(y)).attr(g, !1).attr(x, !1).on("keydown" + f, t, O(t._keydown, t)).on(o.support.mousedown + f, O(t._wrapperMousedown, t)).on("paste" + f, O(t._filterPaste, t)), t.wrapper.on("click" + f, O(t._wrapperClick, t)), t.filterInput ? s.on("input" + f, O(t._search, t)) : s.on("keypress" + f, O(t._keypress, t))), i.attr(h, n).attr(m, a), s.attr(g, n).attr(x, a)
                },
                _keydown: function(e) {
                    var i, n, a, o = this,
                        s = e.keyCode,
                        l = e.altKey,
                        r = o.popup.visible();
                    if (o.filterInput && (i = o.filterInput[0] === u()), s === d.LEFT ? (s = d.UP, n = !0) : s === d.RIGHT && (s = d.DOWN, n = !0), !n || !i) {
                        if (e.keyCode = s, (l && s === d.UP || s === d.ESC) && o._focusElement(o.wrapper), o._state === T && s === d.ESC && (o._clearFilter(), o._open = !1, o._state = V), s === d.ENTER && o._typingTimeout && o.filterInput && r) return e.preventDefault(), t;
                        if (s !== d.SPACEBAR || i || (o.toggle(!r), e.preventDefault()), n = o._move(e), !n) {
                            if ((!r || !o.filterInput) && (a = o._focus(), s === d.HOME ? (n = !0, o._firstItem()) : s === d.END && (n = !0, o._lastItem()), n)) {
                                if (o.trigger("select", {
                                        dataItem: o._getElementDataItem(o._focus()),
                                        item: o._focus()
                                    })) return o._focus(a), t;
                                o._select(o._focus(), !0).done(function() {
                                    r || o._blur()
                                }), e.preventDefault()
                            }
                            l || n || !o.filterInput || o._search()
                        }
                    }
                },
                _matchText: function(e, i) {
                    var n = this.options.ignoreCase;
                    return e !== t && null !== e && (e += "", n && (e = e.toLowerCase()), 0 === e.indexOf(i))
                },
                _shuffleData: function(e, t) {
                    var i = this._optionLabelDataItem();
                    return i && (e = [i].concat(e)), e.slice(t).concat(e.slice(0, t))
                },
                _selectNext: function() {
                    var e, t, i, o = this,
                        s = o.dataSource.flatView(),
                        l = s.length + (o.hasOptionLabel() ? 1 : 0),
                        r = a(o._word, o._last),
                        p = o.selectedIndex;
                    for (p === -1 ? p = 0 : (p += r ? 1 : 0, p = n(p, l)), s = s.toJSON ? s.toJSON() : s.slice(), s = o._shuffleData(s, p), i = 0; i < l && (t = o._text(s[i]), !r || !o._matchText(t, o._last)) && !o._matchText(t, o._word); i++);
                    i !== l && (e = o._focus(), o._select(n(p + i, l)).done(function() {
                        var t = function() {
                            o.popup.visible() || o._change()
                        };
                        o.trigger("select", {
                            dataItem: o._getElementDataItem(o._focus()),
                            item: o._focus()
                        }) ? o._select(e).done(t) : t()
                    }))
                },
                _keypress: function(e) {
                    var t, i = this;
                    0 !== e.which && e.keyCode !== o.keys.ENTER && (t = String.fromCharCode(e.charCode || e.keyCode), i.options.ignoreCase && (t = t.toLowerCase()), " " === t && e.preventDefault(), i._word += t, i._last = t, i._search())
                },
                _popupOpen: function() {
                    var e = this.popup;
                    e.wrapper = o.wrap(e.element), e.element.closest(".km-root")[0] && (e.wrapper.addClass("km-popup km-widget"), this.wrapper.addClass("km-widget"))
                },
                _popup: function() {
                    r.fn._popup.call(this), this.popup.one("open", O(this._popupOpen, this))
                },
                _getElementDataItem: function(e) {
                    return e && e[0] ? e[0] === this.optionLabel[0] ? this._optionLabelDataItem() : this.listView.dataItemByIndex(this.listView.getElementIndex(e)) : null
                },
                _click: function(i) {
                    var n = this,
                        a = i.item || e(i.currentTarget);
                    return i.preventDefault(), n.trigger("select", {
                        dataItem: n._getElementDataItem(a),
                        item: a
                    }) ? (n.close(), t) : (n._userTriggered = !0, n._select(a).done(function() {
                        n._blur(), n._focusElement(n.wrapper)
                    }), t)
                },
                _focusElement: function(e) {
                    var t = u(),
                        i = this.wrapper,
                        n = this.filterInput,
                        a = e === n ? i : n,
                        o = p.mobileOS && (p.touch || p.MSPointers || p.pointers);
                    n && n[0] === e[0] && o || n && (a[0] === t || this._focusFilter) && (this._focusFilter = !1, this._prevent = !0, this._focused = e.focus())
                },
                _searchByWord: function(e) {
                    var t, i;
                    e && (t = this, i = t.options.ignoreCase, i && (e = e.toLowerCase()), t._select(function(i) {
                        return t._matchText(t._text(i), e)
                    }))
                },
                _inputValue: function() {
                    return this.text()
                },
                _search: function() {
                    var e = this,
                        i = e.dataSource;
                    if (clearTimeout(e._typingTimeout), e._isFilterEnabled()) e._typingTimeout = setTimeout(function() {
                        var t = e.filterInput.val();
                        e._prev !== t && (e._prev = t, e.search(t), e._resizeFilterInput()), e._typingTimeout = null
                    }, e.options.delay);
                    else {
                        if (e._typingTimeout = setTimeout(function() {
                                e._word = ""
                            }, e.options.delay), !e.listView.bound()) return i.fetch().done(function() {
                            e._selectNext()
                        }), t;
                        e._selectNext()
                    }
                },
                _get: function(t) {
                    var i, n, a, o = "function" == typeof t,
                        s = o ? e() : e(t);
                    if (this.hasOptionLabel() && ("number" == typeof t ? t > -1 && (t -= 1) : s.hasClass("k-list-optionlabel") && (t = -1)), o) {
                        for (i = this.dataSource.flatView(), a = 0; a < i.length; a++)
                            if (t(i[a])) {
                                t = a, n = !0;
                                break
                            }
                        n || (t = -1)
                    }
                    return t
                },
                _firstItem: function() {
                    this.hasOptionLabel() ? this._focus(this.optionLabel) : this.listView.focusFirst()
                },
                _lastItem: function() {
                    this._resetOptionLabel(), this.listView.focusLast()
                },
                _nextItem: function() {
                    var e;
                    return this.optionLabel.hasClass("k-state-focused") ? (this._resetOptionLabel(), this.listView.focusFirst(), e = 1) : e = this.listView.focusNext(), e
                },
                _prevItem: function() {
                    var e;
                    if (!this.optionLabel.hasClass("k-state-focused")) return e = this.listView.focusPrev(), this.listView.focus() || this.options.virtual || this._focus(this.optionLabel), e
                },
                _focusItem: function() {
                    var e = this.options,
                        i = this.listView,
                        n = i.focus(),
                        a = i.select();
                    a = a[a.length - 1], a === t && e.highlightFirst && !n && (a = 0), a !== t ? i.focus(a) : !e.optionLabel || e.virtual && "dataItem" === e.virtual.mapValueTo ? i.scrollToIndex(0) : (this._focus(this.optionLabel), this._select(this.optionLabel), this.listView.content.scrollTop(0))
                },
                _resetOptionLabel: function(e) {
                    this.optionLabel.removeClass("k-state-focused" + (e || "")).removeAttr("id")
                },
                _focus: function(e) {
                    var i = this.listView,
                        n = this.optionLabel;
                    return e === t ? (e = i.focus(), !e && n.hasClass("k-state-focused") && (e = n), e) : (this._resetOptionLabel(), e = this._get(e), i.focus(e), e === -1 && (n.addClass("k-state-focused").attr("id", i._optionID), this._focused.add(this.filterInput).removeAttr("aria-activedescendant").attr("aria-activedescendant", i._optionID)), t)
                },
                _select: function(e, t) {
                    var i = this;
                    return e = i._get(e), i.listView.select(e).done(function() {
                        t || i._state !== T || (i._state = V), e === -1 && i._selectValue(null)
                    })
                },
                _selectValue: function(e) {
                    var i = this,
                        n = i.options.optionLabel,
                        a = i.listView.select(),
                        o = "",
                        s = "";
                    a = a[a.length - 1], a === t && (a = -1), this._resetOptionLabel(" k-state-selected"), e || 0 === e ? (s = e, o = i._dataValue(e), n && (a += 1)) : n && (i._focus(i.optionLabel.addClass("k-state-selected")), s = i._optionLabelText(), o = "string" == typeof n ? "" : i._value(n), a = 0), i.selectedIndex = a, null === o && (o = ""), i._textAccessor(s), i._accessor(o, a), i._triggerCascade()
                },
                _mobile: function() {
                    var e = this,
                        t = e.popup,
                        i = p.mobileOS,
                        n = t.element.parents(".km-root").eq(0);
                    n.length && i && (t.options.animation.open.effects = i.android || i.meego ? "fadeIn" : i.ios || i.wp ? "slideIn:up" : t.options.animation.open.effects)
                },
                _filterHeader: function() {
                    var t;
                    this.filterInput && (this.filterInput.off(f).parent().remove(), this.filterInput = null), this._isFilterEnabled() && (t = '<span class="k-icon k-i-zoom"></span>', this.filterInput = e('<input class="k-textbox"/>').attr({
                        placeholder: this.element.attr("placeholder"),
                        title: this.element.attr("title"),
                        role: "listbox",
                        "aria-haspopup": "listbox",
                        "aria-expanded": !1
                    }), this.list.prepend(e('<span class="k-list-filter" />').append(this.filterInput.add(t))))
                },
                _span: function() {
                    var t, i = this,
                        n = i.wrapper,
                        a = "span.k-input",
                        s = o.guid();
                    t = n.find(a), t[0] || (n.append('<span unselectable="on" class="k-dropdown-wrap k-state-default"><span id="' + s + '" unselectable="on" role="option" aria-selected="true" class="k-input">&nbsp;</span><span unselectable="on" class="k-select" aria-label="select"><span class="k-icon k-i-arrow-60-down"></span></span></span>').append(i.element), t = n.find(a)), i.span = t, i._inputWrapper = e(n[0].firstChild), i._arrow = n.find(".k-select"), i._arrowIcon = i._arrow.find(".k-icon")
                },
                _wrapper: function() {
                    var e, t = this,
                        i = t.element,
                        n = i[0];
                    e = i.parent(), e.is("span.k-widget") || (e = i.wrap("<span />").parent(), e[0].style.cssText = n.style.cssText, e[0].title = n.title), t._focused = t.wrapper = e.addClass("k-widget k-dropdown").addClass(n.className).removeClass("input-validation-error").css("display", "").attr({
                        accesskey: i.attr("accesskey"),
                        unselectable: "on",
                        role: "listbox",
                        "aria-haspopup": "listbox",
                        "aria-expanded": !1
                    }), i.hide().removeAttr("accesskey")
                },
                _clearSelection: function(e) {
                    this.select(e.value() ? 0 : -1)
                },
                _inputTemplate: function() {
                    var t = this,
                        i = t.options.valueTemplate;
                    if (i = i ? o.template(i) : e.proxy(o.template("#:this._text(data)#", {
                            useWithBlock: !1
                        }), t), t.valueTemplate = i, t.hasOptionLabel() && !t.options.optionLabelTemplate) try {
                        t.valueTemplate(t._optionLabelDataItem())
                    } catch (n) {
                        throw Error(C)
                    }
                },
                _textAccessor: function(i) {
                    var n, a = null,
                        o = this.valueTemplate,
                        s = this._optionLabelText(),
                        l = this.span;
                    if (i === t) return l.text();
                    e.isPlainObject(i) || i instanceof c ? a = i : s && s === i && (a = this.options.optionLabel), a || (a = this._assignInstance(i, this._accessor())), this.hasOptionLabel() && (a !== s && this._text(a) !== s || (o = this.optionLabelTemplate, "string" != typeof this.options.optionLabel || this.options.optionLabelTemplate || (a = s))), n = function() {
                        return {
                            elements: l.get(),
                            data: [{
                                dataItem: a
                            }]
                        }
                    }, this.angular("cleanup", n);
                    try {
                        l.html(o(a))
                    } catch (r) {
                        l.html("")
                    }
                    this.angular("compile", n)
                },
                _preselect: function(e, t) {
                    e || t || (t = this._optionLabelText()), this._accessor(e), this._textAccessor(t), this._old = this._accessor(), this._oldIndex = this.selectedIndex, this.listView.setValue(e), this._initialIndex = null, this._presetValue = !0
                },
                _assignInstance: function(e, t) {
                    var n = this.options.dataTextField,
                        a = {};
                    return n ? (i(a, n.split("."), e), i(a, this.options.dataValueField.split("."), t), a = new c(a)) : a = e, a
                }
            });
        s.plugin(D)
    }(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function(e, t, i) {
    (i || t)()
});
//# sourceMappingURL=kendo.dropdownlist.min.js.map;
/** 
 * Kendo UI v2021.1.204 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/
! function(e, define) {
    define("kendo.autocomplete.min", ["kendo.list.min", "kendo.mobile.scroller.min", "kendo.virtuallist.min"], e)
}(function() {
    return function(e, t) {
        function s(e, t, s) {
            return s ? t.substring(0, e).split(s).length - 1 : 0
        }

        function i(e, t, i) {
            return t.split(i)[s(e, t, i)]
        }

        function o(e, t, i, o, a) {
            var n = t.split(o);
            return n.splice(s(e, t, o), 1, i), o && "" !== n[n.length - 1] && n.push(""), n.join(a)
        }
        var a = window.kendo,
            n = a.support,
            r = a.caret,
            l = a._activeElement,
            c = n.placeholder,
            u = a.ui,
            d = u.List,
            p = a.keys,
            _ = a.data.DataSource,
            h = "aria-disabled",
            f = "aria-readonly",
            g = "change",
            v = "k-state-default",
            m = "disabled",
            y = "readonly",
            w = "k-state-focused",
            C = "k-state-selected",
            b = "k-hidden",
            x = "k-state-disabled",
            k = "off",
            V = "k-state-hover",
            T = ".kendoAutoComplete",
            S = "mouseenter" + T + " mouseleave" + T,
            L = e.proxy,
            F = d.extend({
                init: function(t, s) {
                    var i, o, n = this;
                    n.ns = T, s = e.isArray(s) ? {
                        dataSource: s
                    } : s, d.fn.init.call(n, t, s), t = n.element, s = n.options, s.placeholder = s.placeholder || t.attr("placeholder"), c && t.attr("placeholder", s.placeholder), n._wrapper(), n._loader(), n._clearButton(), n._dataSource(), n._ignoreCase(), t[0].type = "text", i = n.wrapper, n._popup(), t.addClass("k-input").on("keydown" + T, L(n._keydown, n)).on("keypress" + T, L(n._keypress, n)).on("input" + T, L(n._search, n)).on("paste" + T, L(n._search, n)).on("focus" + T, function() {
                        n._prev = n._accessor(), n._oldText = n._prev, n._placeholder(!1), i.addClass(w)
                    }).on("focusout" + T, function() {
                        n._change(), n._placeholder(), n.close(), i.removeClass(w)
                    }).attr({
                        autocomplete: k,
                        role: "textbox",
                        "aria-haspopup": !0
                    }), n._clear.on("click" + T + " touchend" + T, L(n._clearValue, n)), n._enable(), n._old = n._accessor(), t[0].id && t.attr("aria-owns", n.ul[0].id), n._aria(), n._placeholder(), n._initList(), o = e(n.element).parents("fieldset").is(":disabled"), o && n.enable(!1), n.listView.bind("click", function(e) {
                        e.preventDefault()
                    }), n._resetFocusItemHandler = e.proxy(n._resetFocusItem, n), a.notify(n), n._toggleCloseVisibility()
                },
                options: {
                    name: "AutoComplete",
                    enabled: !0,
                    suggest: !1,
                    template: "",
                    groupTemplate: "#:data#",
                    fixedGroupTemplate: "#:data#",
                    dataTextField: "",
                    minLength: 1,
                    enforceMinLength: !1,
                    delay: 200,
                    height: 200,
                    filter: "startswith",
                    ignoreCase: !0,
                    highlightFirst: !1,
                    separator: null,
                    placeholder: "",
                    animation: {},
                    virtual: !1,
                    value: null,
                    clearButton: !0,
                    autoWidth: !1,
                    popup: null
                },
                _dataSource: function() {
                    var e = this;
                    e.dataSource && e._refreshHandler ? e._unbindDataSource() : (e._progressHandler = L(e._showBusy, e), e._errorHandler = L(e._hideBusy, e)), e.dataSource = _.create(e.options.dataSource).bind("progress", e._progressHandler).bind("error", e._errorHandler)
                },
                setDataSource: function(e) {
                    this.options.dataSource = e, this._dataSource(), this.listView.setDataSource(this.dataSource)
                },
                events: ["open", "close", g, "select", "filtering", "dataBinding", "dataBound"],
                setOptions: function(e) {
                    var t = this._listOptions(e);
                    d.fn.setOptions.call(this, e), this.listView.setOptions(t), this._accessors(), this._aria(), this._clearButton()
                },
                _listOptions: function(t) {
                    var s = d.fn._listOptions.call(this, e.extend(t, {
                        skipUpdateOnBind: !0
                    }));
                    return s.dataValueField = s.dataTextField, s.selectedItemChange = null, s
                },
                _editable: function(e) {
                    var t = this,
                        s = t.element,
                        i = t.wrapper.off(T),
                        o = e.readonly,
                        a = e.disable;
                    o || a ? (i.addClass(a ? x : v).removeClass(a ? v : x), s.attr(m, a).attr(y, o).attr(h, a).attr(f, o)) : (i.addClass(v).removeClass(x).on(S, t._toggleHover), s.removeAttr(m).removeAttr(y).attr(h, !1).attr(f, !1))
                },
                close: function() {
                    var e = this,
                        t = e.listView.focus();
                    t && t.removeClass(C), e.popup.close()
                },
                destroy: function() {
                    var e = this;
                    e.element.off(T), e._clear.off(T), e.wrapper.off(T), d.fn.destroy.call(e)
                },
                refresh: function() {
                    this.listView.refresh()
                },
                select: function(e) {
                    this._select(e)
                },
                search: function(t) {
                    var s, o = this,
                        a = o.options,
                        n = a.ignoreCase,
                        l = o._separator(),
                        c = o.dataSource.options.accentFoldingFiltering;
                    t = t || o._accessor(), clearTimeout(o._typingTimeout), l && (t = i(r(o.element)[0], t, l)), s = t.length, (!a.enforceMinLength && !s || s >= a.minLength) && (o._open = !0, o._mute(function() {
                        this.listView.value([])
                    }), o._filterSource({
                        value: n ? c ? t.toLocaleLowerCase(c) : t.toLowerCase() : t,
                        operator: a.filter,
                        field: a.dataTextField,
                        ignoreCase: n
                    }), o.one("close", e.proxy(o._unifySeparators, o))), o._toggleCloseVisibility()
                },
                suggest: function(e) {
                    var i, o = this,
                        a = o._last,
                        n = o._accessor(),
                        c = o.element[0],
                        u = r(c)[0],
                        _ = o._separator(),
                        h = n.split(_),
                        f = s(u, n, _),
                        g = u,
                        v = o.dataSource.options.accentFoldingFiltering;
                    return a == p.BACKSPACE || a == p.DELETE ? (o._last = t, t) : (e = e || "", "string" != typeof e && (e[0] && (e = o.dataSource.view()[d.inArray(e[0], o.ul[0])]), e = e ? o._text(e) : ""), u <= 0 && (u = (v ? n.toLocaleLowerCase(v) : n.toLowerCase()).indexOf(v ? e.toLocaleLowerCase(v) : e.toLowerCase()) + 1), i = n.substring(0, u).lastIndexOf(_), i = i > -1 ? u - (i + _.length) : u, n = h[f].substring(0, i), e && (e = "" + e, i = (v ? e.toLocaleLowerCase(v) : e.toLowerCase()).indexOf(v ? n.toLocaleLowerCase(v) : n.toLowerCase()), i > -1 && (e = e.substring(i + n.length), g = u + e.length, n += e), _ && "" !== h[h.length - 1] && h.push("")), h[f] = n, o._accessor(h.join(_ || "")), c === l() && r(c, u, g), t)
                },
                value: function(e) {
                    return e === t ? this._accessor() : (this.listView.value(e), this._accessor(e), this._old = this._accessor(), this._oldText = this._accessor(), this._toggleCloseVisibility(), t)
                },
                _click: function(e) {
                    var s = e.item,
                        i = this,
                        o = i.element,
                        a = i.listView.dataItemByIndex(i.listView.getElementIndex(s));
                    return e.preventDefault(), i._active = !0, i.trigger("select", {
                        dataItem: a,
                        item: s
                    }) ? (i.close(), t) : (i._oldText = o.val(), i._select(s).done(function() {
                        i._blur(), r(o, o.val().length)
                    }), t)
                },
                _clearText: e.noop,
                _resetFocusItem: function() {
                    var e = this.options.highlightFirst ? 0 : -1;
                    this.options.virtual && this.listView.scrollTo(0), this.listView.focus(e)
                },
                _listBound: function() {
                    var e, s = this,
                        i = s.popup,
                        o = s.options,
                        a = s.dataSource.flatView(),
                        n = a.length,
                        r = s.dataSource._group ? s.dataSource._group.length : 0,
                        c = s.element[0] === l();
                    s._renderFooter(), s._renderNoData(), s._toggleNoData(!n), s._toggleHeader(!!r && !!n), s._resizePopup(), i.position(), n && o.suggest && c && s._inputValue() && s.suggest(a[0]), s._open && (s._open = !1, e = s._allowOpening() ? "open" : "close", s._typingTimeout && !c && (e = "close"), n && (s._resetFocusItem(), o.virtual && s.popup.unbind("activate", s._resetFocusItemHandler).one("activate", s._resetFocusItemHandler)), i[e](), s._typingTimeout = t), s._touchScroller && s._touchScroller.reset(), s._hideBusy(), s.trigger("dataBound")
                },
                _mute: function(e) {
                    this._muted = !0, e.call(this), this._muted = !1
                },
                _listChange: function() {
                    var e = this._active || this.element[0] === l();
                    e && !this._muted && this._selectValue(this.listView.selectedDataItems()[0])
                },
                _selectValue: function(e) {
                    var t = this._separator(),
                        s = "";
                    e && (s = this._text(e)), null === s && (s = ""), t && (s = o(r(this.element)[0], this._accessor(), s, t, this._defaultSeparator())), this._prev = s, this._accessor(s), this._placeholder()
                },
                _unifySeparators: function() {
                    return this._accessor(this.value().split(this._separator()).join(this._defaultSeparator())), this
                },
                _preselect: function(e, t) {
                    this._inputValue(t), this._accessor(e), this._old = this.oldText = this._accessor(), this.listView.setValue(e), this._placeholder()
                },
                _change: function() {
                    var e = this,
                        t = e._unifySeparators().value(),
                        s = t !== d.unifyType(e._old, typeof t),
                        i = s && !e._typing,
                        o = e._oldText !== t;
                    e._old = t, e._oldText = t, (i || o) && e.element.trigger(g), s && e.trigger(g), e.typing = !1, e._toggleCloseVisibility()
                },
                _accessor: function(e) {
                    var s = this,
                        i = s.element[0];
                    return e === t ? (e = i.value, i.className.indexOf("k-readonly") > -1 && e === s.options.placeholder ? "" : e) : (i.value = null === e ? "" : e, s._placeholder(), t)
                },
                _keydown: function(e) {
                    var t, s, i = this,
                        o = e.keyCode,
                        a = i.listView,
                        n = i.popup.visible(),
                        r = a.focus();
                    if (i._last = o, o === p.DOWN) n ? this._move(r ? "focusNext" : "focusFirst") : i.value() && i._filterSource({
                        value: i.ignoreCase ? i.value().toLowerCase() : i.value(),
                        operator: i.options.filter,
                        field: i.options.dataTextField,
                        ignoreCase: i.ignoreCase
                    }).done(function() {
                        i._allowOpening() && (i._resetFocusItem(), i.popup.open())
                    }), e.preventDefault();
                    else if (o === p.UP) n && this._move(r ? "focusPrev" : "focusLast"), e.preventDefault();
                    else if (o === p.HOME) this._move("focusFirst");
                    else if (o === p.END) this._move("focusLast");
                    else if (o === p.ENTER || o === p.TAB) {
                        if (o === p.ENTER && n && e.preventDefault(), n && r) {
                            if (t = a.dataItemByIndex(a.getElementIndex(r)), i.trigger("select", {
                                    dataItem: t,
                                    item: r
                                })) return;
                            this._select(r)
                        }
                        this._blur()
                    } else o === p.ESC ? (n ? e.preventDefault() : i._clearValue(), i.close()) : !i.popup.visible() || o !== p.PAGEDOWN && o !== p.PAGEUP ? (i.popup._hovered = !0, i._search()) : (e.preventDefault(), s = o === p.PAGEDOWN ? 1 : -1, a.scrollWith(s * a.screenHeight()))
                },
                _keypress: function() {
                    this._oldText = this.element.val(), this._typing = !0
                },
                _move: function(e) {
                    this.listView[e](), this.options.suggest && this.suggest(this.listView.focus())
                },
                _hideBusy: function() {
                    var e = this;
                    clearTimeout(e._busy), e._loading.addClass(b), e.element.attr("aria-busy", !1), e._busy = null, e._showClear()
                },
                _showBusy: function() {
                    var e = this;
                    e._busy || (e._busy = setTimeout(function() {
                        e.element.attr("aria-busy", !0), e._loading.removeClass(b), e._hideClear()
                    }, 100))
                },
                _placeholder: function(e) {
                    if (!c) {
                        var s, i = this,
                            o = i.element,
                            a = i.options.placeholder;
                        if (a) {
                            if (s = o.val(), e === t && (e = !s), e || (a = s !== a ? s : ""), s === i._old && !e) return;
                            o.toggleClass("k-readonly", e).val(a), a || o[0] !== document.activeElement || r(o[0], 0, 0)
                        }
                    }
                },
                _separator: function() {
                    var e = this.options.separator;
                    return e instanceof Array ? RegExp(e.join("|"), "gi") : e
                },
                _defaultSeparator: function() {
                    var e = this.options.separator;
                    return e instanceof Array ? e[0] : e
                },
                _inputValue: function() {
                    return this.element.val()
                },
                _search: function() {
                    var e = this;
                    clearTimeout(e._typingTimeout), e._typingTimeout = setTimeout(function() {
                        e._prev !== e._accessor() && (e._prev = e._accessor(), e.search())
                    }, e.options.delay)
                },
                _select: function(e) {
                    var t = this;
                    return t._active = !0, t.listView.select(e).done(function() {
                        t._active = !1
                    })
                },
                _loader: function() {
                    this._loading = e('<span class="k-icon k-i-loading ' + b + '"></span>').insertAfter(this.element)
                },
                _clearButton: function() {
                    d.fn._clearButton.call(this), this.options.clearButton && (this._clear.insertAfter(this.element), this.wrapper.addClass("k-autocomplete-clearable"))
                },
                _toggleHover: function(t) {
                    e(t.currentTarget).toggleClass(V, "mouseenter" === t.type)
                },
                _toggleCloseVisibility: function() {
                    this.value() ? this._showClear() : this._hideClear()
                },
                _wrapper: function() {
                    var t, s = this,
                        i = s.element,
                        o = i[0];
                    t = i.parent(), t.is("span.k-widget") || (t = i.wrap("<span />").parent()), t.attr("tabindex", -1), t.attr("role", "presentation"), t[0].style.cssText = o.style.cssText, i.css({
                        width: "",
                        height: o.style.height
                    }), s._focused = s.element, s.wrapper = t.addClass("k-widget k-autocomplete").addClass(o.className).removeClass("input-validation-error"), s._inputWrapper = e(t[0])
                },
                _clearValue: function() {
                    d.fn._clearValue.call(this), this.element.focus()
                }
            });
        u.plugin(F)
    }(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function(e, t, s) {
    (s || t)()
});
//# sourceMappingURL=kendo.autocomplete.min.js.map;
/** 
 * Kendo UI v2021.1.204 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/
! function(e, define) {
    define("kendo.combobox.min", ["kendo.list.min", "kendo.mobile.scroller.min", "kendo.virtuallist.min"], e)
}(function() {
    return function(e, t) {
        var i = window.kendo,
            s = i.ui,
            n = s.List,
            a = s.Select,
            o = i.caret,
            l = i.support,
            r = l.placeholder,
            u = i._activeElement,
            c = i.keys,
            d = ".kendoComboBox",
            p = d + "FocusEvent",
            _ = "click" + d,
            h = "mousedown" + d,
            f = "disabled",
            g = "readonly",
            v = "change",
            m = "k-i-loading",
            x = "k-state-default",
            w = "k-state-focused",
            y = "k-state-disabled",
            V = "aria-disabled",
            T = "aria-readonly",
            b = "off",
            I = "filter",
            C = "accept",
            k = "rebind",
            F = "mouseenter" + d + " mouseleave" + d,
            B = e.proxy,
            S = /(\r\n|\n|\r)/gm,
            L = a.extend({
                init: function(t, s) {
                    var n, o, l = this;
                    l.ns = d, s = e.isArray(s) ? {
                        dataSource: s
                    } : s, a.fn.init.call(l, t, s), s = l.options, t = l.element.on("focus" + d, B(l._focusHandler, l)), s.placeholder = s.placeholder || t.attr("placeholder"), l._reset(), l._wrapper(), l._input(), l._clearButton(), l._tabindex(l.input), l._popup(), l._dataSource(), l._ignoreCase(), l._enable(), l._attachFocusEvents(), l._oldIndex = l.selectedIndex = -1, l._aria(), l._initialIndex = s.index, l.requireValueMapper(l.options), l._initList(), l._cascade(), s.autoBind ? l._filterSource() : (n = s.text, !n && l._isSelect && (n = t.children(":selected").text()), n && l._setText(n)), n || l._placeholder(), o = e(l.element).parents("fieldset").is(":disabled"), o && l.enable(!1), i.notify(l), l._toggleCloseVisibility()
                },
                options: {
                    name: "ComboBox",
                    enabled: !0,
                    index: -1,
                    text: null,
                    value: null,
                    autoBind: !0,
                    delay: 200,
                    dataTextField: "",
                    dataValueField: "",
                    minLength: 1,
                    enforceMinLength: !1,
                    height: 200,
                    highlightFirst: !0,
                    filter: "none",
                    placeholder: "",
                    suggest: !1,
                    cascadeFrom: "",
                    cascadeFromField: "",
                    cascadeFromParentField: "",
                    ignoreCase: !0,
                    animation: {},
                    virtual: !1,
                    template: null,
                    groupTemplate: "#:data#",
                    fixedGroupTemplate: "#:data#",
                    clearButton: !0,
                    syncValueAndText: !0,
                    autoWidth: !1,
                    popup: null
                },
                events: ["open", "close", v, "select", "filtering", "dataBinding", "dataBound", "cascade", "set"],
                setOptions: function(e) {
                    var t = this._listOptions(e);
                    a.fn.setOptions.call(this, e), this.listView.setOptions(t), this._accessors(), this._aria(), this._clearButton()
                },
                destroy: function() {
                    var e = this;
                    e.input.off(d), e.input.off(p), e.element.off(d), e.wrapper.off(d), e._inputWrapper.off(d), clearTimeout(e._pasteTimeout), e._arrow.off(_ + " " + h), e._clear.off(_ + " " + h), a.fn.destroy.call(e)
                },
                _isValueChanged: function(e) {
                    return e !== n.unifyType(this._old, typeof e) && e !== n.unifyType(this._oldText, typeof e)
                },
                _change: function() {
                    var e = this,
                        i = e.text(),
                        s = i && i !== e._oldText && i !== e.options.placeholder,
                        n = e.selectedIndex,
                        o = n === -1;
                    return !e.options.syncValueAndText && !e.value() && o && s ? (e._old = "", e._oldIndex = n, e._oldText = i, e._typing || e.element.trigger(v), e.trigger(v), e._typing = !1, t) : (a.fn._change.call(e), e._oldText = e.text && e.text(), e._toggleCloseVisibility(), t)
                },
                _attachFocusEvents: function() {
                    var e = this;
                    e.input.on("focus" + p, B(e._inputFocus, e)).on("focusout" + p, B(e._inputFocusout, e))
                },
                _focusHandler: function(e) {
                    e.target === this.element[0] && this.input.focus()
                },
                _arrowClick: function() {
                    this._toggle()
                },
                _inputFocus: function() {
                    this._inputWrapper.addClass(w), this._placeholder(!1)
                },
                _inputFocusout: function(i) {
                    var s, n, a = this,
                        o = a.value(),
                        l = !e(i.relatedTarget).closest(".k-clear-value").length;
                    return a._userTriggered = !0, a._inputWrapper.removeClass(w), clearTimeout(a._typingTimeout), a._typingTimeout = null, l && a.text(a.text()), s = a._focus(), n = this.listView.dataItemByIndex(this.listView.getElementIndex(s)), o !== a.value() && a.trigger("select", {
                        dataItem: n,
                        item: s
                    }) ? (a.value(o), t) : (a._placeholder(), a._valueBeforeCascade = a._old, l && (a._blur(), a.element.blur()), t)
                },
                _inputPaste: function() {
                    var e = this;
                    clearTimeout(e._pasteTimeout), e._pasteTimeout = null, e._pasteTimeout = setTimeout(function() {
                        e.search()
                    })
                },
                _editable: function(e) {
                    var t = this,
                        i = e.disable,
                        s = e.readonly,
                        n = t._inputWrapper.off(d),
                        a = t.element.add(t.input.off(d)),
                        o = t._arrow.off(_ + " " + h),
                        l = t._clear;
                    s || i ? (n.addClass(i ? y : x).removeClass(i ? x : y), a.attr(f, i).attr(g, s).attr(V, i).attr(T, s)) : (n.addClass(x).removeClass(y).on(F, t._toggleHover), a.removeAttr(f).removeAttr(g).attr(V, !1).attr(T, !1), o.on(_, B(t._arrowClick, t)).on(h, function(e) {
                        e.preventDefault()
                    }), l.on(_ + " touchend" + d, B(t._clearValue, t)), t.input.on("keydown" + d, B(t._keydown, t)).on("input" + d, B(t._search, t)).on("paste" + d, B(t._inputPaste, t)), t.wrapper.on(_ + d, B(t._focusHandler, t))), t._toggleCloseVisibility()
                },
                open: function() {
                    var e = this,
                        t = e._state,
                        i = !!e.dataSource.filter() && e.dataSource.filter().filters.length > 0,
                        s = !e.ul.find(e.listView.focus()).length;
                    e.popup.visible() || (!e.listView.bound() && t !== I || t === C ? (e._open = !0, e._state = k, 1 !== e.options.minLength && !i || i && e.value() && e.selectedIndex === -1 ? (e.refresh(), e._openPopup(), this.options.virtual || e.listView.bound(!1)) : e._filterSource()) : e._allowOpening() && (e.popup._hovered = !0, e._openPopup(), e.options.virtual ? e._focusItem() : s && e.options.highlightFirst && e.listView.focus(0)))
                },
                _scrollToFocusedItem: function() {
                    var e = this.listView;
                    e.scrollToIndex(e.getElementIndex(e.focus()))
                },
                _openPopup: function() {
                    this.popup.one("activate", B(this._scrollToFocusedItem, this)), this.popup.open()
                },
                _updateSelectionState: function() {
                    var e = this,
                        i = e.options.text,
                        s = e.options.value;
                    e.listView.isFiltered() || (e.selectedIndex === -1 ? (i !== t && null !== i || (i = s), e._accessor(s), e.input.val(i || e.input.val()), e._placeholder()) : e._oldIndex === -1 && (e._oldIndex = e.selectedIndex))
                },
                _buildOptions: function(e) {
                    var i, s = this;
                    s._isSelect && (i = s._customOption, s._state === k && (s._state = ""), s._customOption = t, s._options(e, "", s.value()), i && i[0].selected && !s.listView._emptySearch && s._custom(i.val()))
                },
                _updateSelection: function() {
                    var i, s = this,
                        n = s.listView,
                        a = s._initialIndex,
                        o = null !== a && a > -1,
                        l = s._state === I;
                    return l ? (e(n.focus()).removeClass("k-state-selected"), t) : (s._fetch || (n.value().length || (o ? s.select(a) : s._accessor() && n.value(s._accessor())), s._initialIndex = null, i = n.selectedDataItems()[0], i && (s._value(i) !== s.value() ? s._custom(s._value(i)) : s._value(i) !== s.element[0].value && s._accessor(s._value(i)), s.text() && s.text() !== s._text(i) && s._selectValue(i))), t)
                },
                _updateItemFocus: function() {
                    var e = this.listView;
                    this.options.highlightFirst ? e.focus() || e.focusIndex() || e.focus(0) : e.focus(-1)
                },
                _listBound: function() {
                    var e = this,
                        i = e.input[0] === u(),
                        s = e.dataSource.flatView(),
                        n = e.listView.skip(),
                        a = s.length,
                        o = e.dataSource._group ? e.dataSource._group.length : 0,
                        l = n === t || 0 === n;
                    e._presetValue = !1, e._renderFooter(), e._renderNoData(), e._toggleNoData(!a), e._toggleHeader(!!o && !!a), e._resizePopup(), e.popup.position(), e._buildOptions(s), e._updateSelection(), s.length && l && (e._updateItemFocus(), e.options.suggest && i && e.input.val() && e.suggest(s[0])), e._open && (e._open = !1, e._typingTimeout && !i ? e.popup.close() : e.toggle(e._allowOpening()), e._typingTimeout = null), e._hideBusy(), e.trigger("dataBound")
                },
                _listChange: function() {
                    this._selectValue(this.listView.selectedDataItems()[0]), this._presetValue && (this._oldIndex = this.selectedIndex)
                },
                _get: function(e) {
                    var t, i, s;
                    if ("function" == typeof e) {
                        for (t = this.dataSource.flatView(), s = 0; s < t.length; s++)
                            if (e(t[s])) {
                                e = s, i = !0;
                                break
                            }
                        i || (e = -1)
                    }
                    return e
                },
                _select: function(e, t) {
                    var i = this;
                    return e = i._get(e), e === -1 && (i.input[0].value = "", i._accessor("")), i.listView.select(e).done(function() {
                        t || i._state !== I || (i._state = C), i._toggleCloseVisibility()
                    })
                },
                _selectValue: function(e) {
                    var i = this.listView.select(),
                        s = "",
                        n = "";
                    i = i[i.length - 1], i === t && (i = -1), this.selectedIndex = i, this.listView.isFiltered() && i !== -1 && (this._valueBeforeCascade = this._old), i !== -1 || e ? ((e || 0 === e) && (s = this._dataValue(e), n = this._text(e)), null === s && (s = "")) : (this.options.syncValueAndText ? (n = this.options.dataTextField === this.options.dataValueField ? this._accessor() : this.input[0].value, s = n) : n = this.text(), this.listView.focus(-1)), this._setDomInputValue(n), this._accessor(s !== t ? s : n, i), this._placeholder(), this._triggerCascade()
                },
                _setDomInputValue: function(e) {
                    var t, i, s = this,
                        n = o(this.input);
                    n && n.length && (t = n[0]), this._prev = this.input[0].value = e, t && this.selectedIndex === -1 && (i = l.mobileOS, i.wp || i.android ? setTimeout(function() {
                        s.input[0].setSelectionRange(t, t)
                    }, 0) : this.input[0].setSelectionRange(t, t))
                },
                refresh: function() {
                    this.listView.refresh()
                },
                _toggleCloseVisibility: function() {
                    var e = this.element.is(":disabled") || this.element.is("[readonly]");
                    this.text() && !e ? this._showClear() : this._hideClear()
                },
                suggest: function(e) {
                    var i, s = this,
                        a = s.input[0],
                        l = s.text(),
                        r = o(a)[0],
                        d = s._last,
                        p = s.dataSource.options.accentFoldingFiltering;
                    return d == c.BACKSPACE || d == c.DELETE ? (s._last = t, t) : (e = e || "", "string" != typeof e && (e[0] && (e = s.dataSource.view()[n.inArray(e[0], s.ul[0])]), e = e ? s._text(e) : ""), r <= 0 && (r = (p ? l.toLocaleLowerCase(p) : l.toLowerCase()).indexOf(p ? e.toLocaleLowerCase(p) : e.toLowerCase()) + 1), e ? (e = "" + e, i = (p ? e.toLocaleLowerCase(p) : e.toLowerCase()).indexOf(p ? l.toLocaleLowerCase(p) : l.toLowerCase()), i > -1 && (l += e.substring(i + l.length))) : l = l.substring(0, r), l.length === r && e || (a.value = l, a === u() && o(a, r, l.length)), t)
                },
                text: function(e) {
                    var i, s, a, o, l, r;
                    return e = null === e ? "" : e, i = this, s = i.input[0], a = i.options.ignoreCase, o = e, e === t ? s.value : i.options.autoBind !== !1 || i.listView.bound() ? (l = i.dataItem(), l && i._text(l).replace && i._text(l).replace(S, "") === e && (r = i._value(l), r === n.unifyType(i._old, typeof r)) ? (i._triggerCascade(), t) : (a && (o = o.toLowerCase()), i.dataItem() && i._text(i.dataItem()) === e || (i._select(function(e) {
                        return e = i._text(e), a && (e = (e + "").toLowerCase()), e === o
                    }).done(function() {
                        i.selectedIndex < 0 && (s.value = e, i.options.syncValueAndText && i._accessor(e), i._cascadeTriggered = !0, i._triggerCascade()), i._prev = s.value
                    }), i._toggleCloseVisibility()), t)) : (i._setText(e), t)
                },
                toggle: function(e) {
                    this._toggle(e, !0)
                },
                value: function(e) {
                    var i = this,
                        s = i.options,
                        n = i.listView;
                    return e === t ? (e = i._accessor() || i.listView.value()[0], e === t || null === e ? "" : e) : (i.requireValueMapper(i.options, e), i.trigger("set", {
                        value: e
                    }), (e !== s.value || i.input.val() !== s.text || i.options.cascadeFrom) && (i._accessor(e), i._isFilterEnabled() && n.bound() && n.isFiltered() ? i._clearFilter() : i._fetchData(), n.value(e).done(function() {
                        i.selectedIndex !== -1 || n._selectedDataItems && n._selectedDataItems.length || (i._accessor(e), i.input.val(e), i._placeholder(!0)), i._old = i._userTriggered ? i._accessor() : i._valueBeforeCascade = i._accessor(), i._oldIndex = i.selectedIndex, i._prev = i._oldText = i.input.val(), i._state === I && (i._state = C), i._toggleCloseVisibility()
                    })), t)
                },
                _hideBusy: function() {
                    var e = this;
                    clearTimeout(e._busy), e._arrowIcon.removeClass(m), e._focused.attr("aria-busy", !1), e._busy = null, e._toggleCloseVisibility()
                },
                _click: function(e) {
                    var i = this,
                        s = e.item,
                        a = i.listView.dataItemByIndex(i.listView.getElementIndex(s)),
                        o = !0;
                    return e.preventDefault(), a && (o = i._value(a) !== n.unifyType(i.value(), typeof i._value(a)), o || i.input.val(i._text(a))), o && i.trigger("select", {
                        dataItem: a,
                        item: s
                    }) ? (i.close(), t) : (i._userTriggered = !0, i._select(s).done(function() {
                        i._blur()
                    }), t)
                },
                _syncValueAndText: function() {
                    return this.options.syncValueAndText
                },
                _inputValue: function() {
                    return this.text()
                },
                _searchByWord: function(e) {
                    var i, s = this,
                        n = s.options,
                        a = s.dataSource,
                        o = n.ignoreCase,
                        l = function(i) {
                            var n = s._text(i);
                            if (n !== t) return n += "", ("" === n || "" !== e) && (o && (n = n.toLowerCase()), 0 === n.indexOf(e))
                        };
                    return o && (e = e.toLowerCase()), s.ul[0].firstChild ? (this.listView.focus(this._get(l)), i = this.listView.focus(), i && (n.suggest && s.suggest(i), this.open()), this.options.highlightFirst && !e && this.listView.focusFirst(), t) : (a.one(v, function() {
                        a.view()[0] && s.search(e)
                    }).fetch(), t)
                },
                _input: function() {
                    var t, i, s = this,
                        n = s.element.removeClass("k-input")[0],
                        a = n.accessKey,
                        o = s.wrapper,
                        l = "input.k-input",
                        u = n.name || "";
                    u && (u = 'name="' + u + '_input" '), t = o.find(l), t[0] || (o.append('<span tabindex="-1" unselectable="on" class="k-dropdown-wrap k-state-default"><input ' + u + 'class="k-input" type="text" autocomplete="' + b + '"/><span unselectable="on" class="k-select" aria-label="select"><span class="k-icon k-i-arrow-60-down"></span></span></span>').append(s.element), t = o.find(l)), t[0].style.cssText = n.style.cssText, t[0].title = n.title, i = parseInt(this.element.prop("maxlength") || this.element.attr("maxlength"), 10), i > -1 && (t[0].maxLength = i), t.addClass(n.className).css({
                        width: "",
                        height: n.style.height
                    }).attr({
                        role: "combobox",
                        "aria-expanded": !1
                    }).show(), r && t.attr("placeholder", s.options.placeholder), a && (n.accessKey = "", t[0].accessKey = a), s._focused = s.input = t, s._inputWrapper = e(o[0].firstChild), s._arrow = o.find(".k-select").attr({
                        role: "button",
                        tabIndex: -1
                    }), s._arrowIcon = s._arrow.find(".k-icon"), n.id && s._arrow.attr("aria-controls", s.ul[0].id)
                },
                _clearButton: function() {
                    n.fn._clearButton.call(this), this.options.clearButton && (this._clear.insertAfter(this.input), this.wrapper.addClass("k-combobox-clearable"))
                },
                _keydown: function(e) {
                    var t, i, s, a = this,
                        o = e.keyCode,
                        l = a.options.dataTextField || "text";
                    if (a._last = o, clearTimeout(a._typingTimeout), a._typingTimeout = null, o === c.HOME) a._firstItem();
                    else if (o === c.END) a._lastItem();
                    else if (o === c.ENTER || o === c.TAB && a.popup.visible())
                        if (t = a.listView.focus(), i = a.dataItem(), s = !0, a.popup.visible() || i && a.text() === a._text(i) || (t = null), t) {
                            if (a.popup.visible() && e.preventDefault(), i = a.listView.dataItemByIndex(a.listView.getElementIndex(t)), i && (s = a._value(i) !== n.unifyType(a.value(), typeof a._value(i))), s && a.trigger("select", {
                                    dataItem: i,
                                    item: t
                                })) return;
                            a._userTriggered = !0, a._select(t).done(function() {
                                a._blur(), a._valueBeforeCascade = a._old = a.value()
                            })
                        } else(a._syncValueAndText() || a._isSelect) && (a.dataItem() && a.dataItem()[l] === a.input.val() || a._accessor(a.input.val())), a.options.highlightFirst ? (a.listView.value(a.input.val()), a._blur()) : a._oldText = a.text();
                    else o == c.TAB || a._move(e) ? o === c.ESC && !a.popup.visible() && a.text() && a._clearValue() : a._search()
                },
                _placeholder: function(e) {
                    if (!r) {
                        var i, s = this,
                            n = s.input,
                            a = s.options.placeholder;
                        if (a) {
                            if (i = s.value(), e === t && (e = !i), n.toggleClass("k-readonly", e), !e) {
                                if (i) return;
                                a = ""
                            }
                            n.val(a), a || n[0] !== u() || o(n[0], 0, 0)
                        }
                    }
                },
                _search: function() {
                    var e = this;
                    clearTimeout(e._typingTimeout), e._typingTimeout = setTimeout(function() {
                        var t = e.text();
                        "" !== t && e._prev !== t ? (e._prev = t, "none" === e.options.filter && e.options.virtual && e.listView.select(-1), e.search(t), e._toggleCloseVisibility()) : "" === t && "" !== e._prev && (e._clearValue(), e.search("")), e._typingTimeout = null
                    }, e.options.delay)
                },
                _setText: function(e) {
                    this.input.val(e), this._prev = e
                },
                _wrapper: function() {
                    var e = this,
                        t = e.element,
                        i = t.parent();
                    i.is("span.k-widget") || (i = t.hide().wrap("<span />").parent(), i[0].style.cssText = t[0].style.cssText), e.wrapper = i.addClass("k-widget k-combobox").addClass(t[0].className).removeClass("input-validation-error").css("display", "")
                },
                _clearSelection: function(e, t) {
                    var i = this,
                        s = e.value(),
                        n = s && e.selectedIndex === -1;
                    this.selectedIndex == -1 && this.value() || (t || !s || n) && (i.options.value = "", i.value(""))
                },
                _preselect: function(e, t) {
                    this.input.val(t), this._accessor(e), this._old = this._accessor(), this._oldIndex = this.selectedIndex, this.listView.setValue(e), this._placeholder(), this._initialIndex = null, this._presetValue = !0, this._toggleCloseVisibility()
                },
                _clearText: function() {
                    this._old = this.value(), this.text("")
                },
                _clearValue: function() {
                    a.fn._clearValue.call(this), this.input.focus()
                }
            });
        s.plugin(L)
    }(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function(e, t, i) {
    (i || t)()
});
//# sourceMappingURL=kendo.combobox.min.js.map;
/** 
 * Kendo UI v2021.1.204 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/
! function(e, define) {
    define("kendo.menu.min", ["kendo.popup.min", "kendo.data.min"], e)
}(function() {
    return function(e, t) {
        function n(e, t) {
            return e = e.split(" ")[!t + 0] || e, e.replace("top", "up").replace("bottom", "down")
        }

        function o(e, t, n) {
            e = e.split(" ")[!t + 0] || e;
            var o = {
                    origin: ["bottom", n ? "right" : "left"],
                    position: ["top", n ? "right" : "left"]
                },
                i = /left|right/.test(e);
            return i ? (o.origin = ["top", e], o.position[1] = x.directions[e].reverse) : (o.origin[0] = e, o.position[0] = x.directions[e].reverse), o.origin = o.origin.join(" "), o.position = o.position.join(" "), o
        }

        function i(t, n) {
            try {
                return e.contains(t, n)
            } catch (o) {
                return !1
            }
        }

        function r(t) {
            t = e(t);
            var n = t.attr(x.attr("omit-wrap"));
            n || (t.addClass("k-item k-menu-item").children(G).addClass(Q), t.children("a").addClass(K).children(G).addClass(Q), t.filter(":not([disabled])").addClass(ye), t.filter(".k-separator").removeClass("k-menu-item").addClass("k-menu-separator").empty().append("&nbsp;"), t.filter("li[disabled]").addClass(Oe).removeAttr("disabled").attr("aria-disabled", !0), t.filter("[role]").length || t.attr("role", "menuitem"), t.children(X).length || t.contents().filter(function() {
                return !(this.nodeName.match(L) || 3 == this.nodeType && !x.trim(this.nodeValue))
            }).wrapAll("<span class='" + K + "'/>"), a(t), l(t))
        }

        function a(t) {
            t = e(t), t.find("> .k-link > [class*=k-i-arrow-60]:not(.k-sprite)").remove(), t.filter(":has(.k-menu-group)").children(".k-link:not(:has([class*=k-i-arrow]:not(.k-sprite)))").each(function() {
                var t = e(this),
                    n = s(t);
                t.append("<span class='k-menu-expand-arrow k-icon " + n + "' />")
            })
        }

        function s(e) {
            var t, n = e.parent().parent(),
                o = x.support.isRtl(n);
            return t = n.hasClass(J + "-horizontal") ? "k-i-arrow-60-down" : o ? "k-i-arrow-60-left" : "k-i-arrow-60-right"
        }

        function l(t) {
            t = e(t), t.filter(".k-first:not(:first-child)").removeClass($), t.filter(".k-last:not(:last-child)").removeClass(q), t.filter(":first-child").addClass($), t.filter(":last-child").addClass(q)
        }

        function p(e) {
            var t, n;
            if (e && e.length)
                for (t in e) n = e.eq(t), n.find("ul").length ? n.attr("aria-haspopup", !0) : n.removeAttr("aria-haspopup")
        }

        function c(e) {
            if (!e.hasClass(J)) return e.parentsUntil("." + J, "li")
        }

        function u(t, n) {
            var o = f(n);
            o && d(t, o), n.items && e(t).children("ul").children("li").each(function(e) {
                u(this, n.items[e])
            })
        }

        function d(t, n) {
            e(t).children(".k-link").data({
                selectHandler: n
            })
        }

        function f(e) {
            var t = e.select,
                n = x.isFunction;
            return t && n(t) ? t : null
        }

        function m(e) {
            return e ? "li[data-groupparent='" + e + "']" : "li[data-groupparent]"
        }

        function h(e) {
            var t = e ? "[data-group='" + e + "']" : "[data-group]";
            return "ul" + t + ",div" + t
        }

        function v(t, n) {
            var o = t.find(m()),
                i = [];
            return o.each(function(o, r) {
                var a, s;
                for (r = e(r), a = r.data(we), s = t; a;) s = n.find(h(a) + ":visible"), s.length && i.push(s), r = s.find(m()), a = r.data(we)
            }), i
        }

        function g(t, n) {
            var o = t.data(ke);
            return o ? n.find(m(o)) : e([])
        }

        function _(t, n) {
            var o = t.data(we);
            return o ? n.children(Se).children(h(o)) : e([])
        }

        function k(t, n) {
            var o, i, r = [],
                a = function(e) {
                    for (; e.parentNode && !n.is(e.parentNode);) r.push(e.parentNode), e = e.parentNode
                },
                s = t[0] || t;
            for (a(s), o = r[r.length - 1]; e(o).is(Se) && (i = e(o).children("ul"), s = g(i, n)[0]);) r.push(s), a(s), o = r[r.length - 1];
            return r
        }

        function w(e) {
            var t = 0;
            return e.wheelDelta && (t = -e.wheelDelta / 120, t = t > 0 ? Math.ceil(t) : Math.floor(t)), e.detail && (t = Math.round(e.detail / 3)), t
        }

        function C(e, t) {
            for (var n = 0, o = e.parentNode; o && !isNaN(o[t]);) n += o[t], o = o.parentNode;
            return n
        }

        function b(e) {
            return se && e.originalEvent && e.originalEvent.pointerType in Fe
        }

        function y(e) {
            var t = e.originalEvent;
            return H && /touch/i.test(t.type || "")
        }

        function P(e) {
            e.contents().filter(function() {
                return "LI" != this.nodeName
            }).remove()
        }
        var x = window.kendo,
            O = x.ui,
            T = x._activeElement,
            H = x.support.touch && x.support.mobileOS,
            I = e.isArray,
            S = x.data.HierarchicalDataSource,
            E = "mousedown",
            W = "click",
            A = 30,
            D = 50,
            M = e.extend,
            B = e.proxy,
            N = e.each,
            R = x.template,
            U = x.keys,
            z = O.Widget,
            L = /^(ul|a|div)$/i,
            F = ".kendoMenu",
            G = "img",
            j = "open",
            J = "k-menu",
            K = "k-link k-menu-link",
            X = ".k-link",
            Y = ".k-menu-expand-arrow",
            q = "k-last",
            V = "close",
            Z = "timer",
            $ = "k-first",
            Q = "k-image",
            ee = "select",
            te = "zIndex",
            ne = "activate",
            oe = "deactivate",
            ie = "touchstart" + F + " MSPointerDown" + F + " pointerdown" + F,
            re = x.support.pointers,
            ae = x.support.msPointers,
            se = ae || re,
            le = "change",
            pe = "error",
            ce = x.support.touch ? "touchstart" : "",
            ue = re ? "pointerover" : ae ? "MSPointerOver" : "mouseenter",
            de = re ? "pointerout" : ae ? "MSPointerOut" : "mouseleave",
            fe = "DOMMouseScroll" + F + " mousewheel" + F,
            me = x.support.resize + F,
            he = "scrollWidth",
            ve = "scrollHeight",
            ge = "offsetWidth",
            _e = "offsetHeight",
            ke = "group",
            we = "groupparent",
            Ce = e(document.documentElement),
            be = "kendoPopup",
            ye = "k-state-default",
            Pe = "k-state-hover",
            xe = "k-state-focused",
            Oe = "k-state-disabled",
            Te = "k-state-selected",
            He = ".k-menu",
            Ie = ".k-menu-group",
            Se = ".k-animation-container",
            Ee = Ie + "," + Se,
            We = ":not(.k-list) > .k-item",
            Ae = ".k-item.k-state-disabled",
            De = ".k-item",
            Me = ".k-item:not(.k-state-disabled)",
            Be = ".k-item:not(.k-state-disabled) > .k-link",
            Ne = ":not(.k-item.k-separator)",
            Re = De + Ne + ":eq(0)",
            Ue = De + Ne + ":last",
            ze = "div:not(.k-animation-container,.k-list-container)",
            Le = ".k-menu-scroll-button",
            Fe = {
                2: 1,
                touch: 1
            },
            Ge = "string",
            je = "dataBound",
            Je = {
                text: "dataTextField",
                url: "dataUrlField",
                spriteCssClass: "dataSpriteCssClassField",
                imageUrl: "dataImageUrlField",
                imageAttr: "dataImageAttrField",
                content: "dataContentField"
            },
            Ke = {
                wrapperCssClass: function(e, t) {
                    var n = "k-item k-menu-item",
                        o = t.index;
                    return n += t.enabled === !1 ? " k-state-disabled" : " k-state-default", e.firstLevel && 0 === o && (n += " k-first"), o == e.length - 1 && (n += " k-last"), t.cssClass && (n += " " + t.cssClass), t.attr && t.attr.hasOwnProperty("class") && (n += " " + t.attr["class"]), t.selected && (n += " " + Te), n
                },
                itemCssAttributes: function(e) {
                    var t, n = "",
                        o = e.attr || {};
                    for (t in o) o.hasOwnProperty(t) && "class" !== t && (n += t + '="' + o[t] + '" ');
                    return n
                },
                imageCssAttributes: function(e) {
                    var t, n = "",
                        o = e && e.toJSON ? e.toJSON() : {};
                    o["class"] ? o["class"] += " " + Q : o["class"] = Q;
                    for (t in o) o.hasOwnProperty(t) && (n += t + '="' + o[t] + '" ');
                    return n
                },
                contentCssAttributes: function(e) {
                    var t, n = "",
                        o = e.contentAttr || {},
                        i = "k-content k-group k-menu-group";
                    o["class"] ? o["class"] += " " + i : o["class"] = i;
                    for (t in o) o.hasOwnProperty(t) && (n += t + '="' + o[t] + '" ');
                    return n
                },
                textClass: function() {
                    return K
                },
                arrowClass: function(e, t) {
                    var n = "k-menu-expand-arrow k-icon";
                    return n += t.horizontal ? " k-i-arrow-60-down" : " k-i-arrow-60-right"
                },
                groupAttributes: function(e) {
                    return e.expanded !== !0 ? " style='display:none'" : ""
                },
                groupCssClass: function() {
                    return "k-group k-menu-group"
                },
                content: function(e) {
                    return e.content ? e.content : "&nbsp;"
                }
            },
            Xe = x.ui.DataBoundWidget.extend({
                init: function(e, t) {
                    var n = this;
                    z.fn.init.call(n, e, t), e = n.wrapper = n.element, t = n.options, n._accessors(), n._templates(), n._dataSource(), n._updateClasses(), n._animations(t), n.nextItemZIndex = 100, n._tabindex(), n._initOverflow(t), n._attachMenuEventsHandlers(), t.openOnClick && (n.clicked = !1), e.attr("role", "menubar"), e[0].id && (n._ariaId = x.format("{0}_mn_active", e[0].id)), x.notify(n)
                },
                events: [j, V, ne, oe, ee, je],
                options: {
                    name: "Menu",
                    animation: {
                        open: {
                            duration: 200
                        },
                        close: {
                            duration: 100
                        }
                    },
                    orientation: "horizontal",
                    direction: "default",
                    openOnClick: !1,
                    closeOnClick: !0,
                    hoverDelay: 100,
                    scrollable: !1,
                    popupCollision: t
                },
                _initData: function() {
                    var e = this;
                    e.dataSource && (e.angular("cleanup", function() {
                        return {
                            elements: e.element.children()
                        }
                    }), e.element.empty(), e.append(e.dataSource.view(), e.element), e.angular("compile", function() {
                        return {
                            elements: e.element.children()
                        }
                    }))
                },
                _attachMenuEventsHandlers: function() {
                    var t = this,
                        n = t.element,
                        o = t.options,
                        i = t._overflowWrapper();
                    (i || n).on(ie, De, B(t._focusHandler, t)).on(W + F, Ae, !1).on(W + F, De, B(t._click, t)).on(ie + " " + E + F, ".k-content", B(t._preventClose, t)).on(ue + F, Me, B(t._mouseenter, t)).on(de + F, Me, B(t._mouseleave, t)).on(E + F, Me, B(t._mousedown, t)).on(ce + F + " " + ue + F + " " + de + F + " " + E + F + " " + W + F, Be, B(t._toggleHover, t)), n.on("keydown" + F, B(t._keydown, t)).on("focus" + F, B(t._focus, t)).on("focus" + F, ".k-content", B(t._focus, t)).on("blur" + F, B(t._removeHoverItem, t)).on("blur" + F, "[tabindex]", B(t._checkActiveElement, t)), i && i.on(de + F, Ee, B(t._mouseleavePopup, t)).on(ue + F, Ee, B(t._mouseenterPopup, t)), o.openOnClick && (t._documentClickHandler = B(t._documentClick, t), e(document).click(t._documentClickHandler))
                },
                _detachMenuEventsHandlers: function() {
                    var t = this,
                        n = t._overflowWrapper();
                    n && n.off(F), t.element.off(F), t._documentClickHandler && e(document).unbind("click", t._documentClickHandler)
                },
                _initOverflow: function(t) {
                    var n, o, i, r, a = this,
                        s = "horizontal" == t.orientation;
                    t.scrollable && (a._openedPopups = {}, a._scrollWrapper = a.element.wrap("<div class='k-menu-scroll-wrapper " + t.orientation + "'></div>").parent(), s && P(a.element), n = e(a.templates.scrollButton({
                        direction: s ? "left" : "up"
                    })), o = e(a.templates.scrollButton({
                        direction: s ? "right" : "down"
                    })), n.add(o).appendTo(a._scrollWrapper), a._initScrolling(a.element, n, o, s), i = a.element.outerWidth(), r = a.element[0].style.width, r = "auto" === r ? "" : r, s && e(window).on(me, x.throttle(function() {
                        a._setOverflowWrapperWidth(i, r), a._toggleScrollButtons(a.element, n, o, s)
                    }, 100)), a._setOverflowWrapperWidth(i, r), a._toggleScrollButtons(a.element, n, o, s))
                },
                _overflowWrapper: function() {
                    return this._scrollWrapper || this._popupsWrapper
                },
                _setOverflowWrapperWidth: function(e, t) {
                    var n, o, i, r, a = this,
                        s = a._scrollWrapper.css("width");
                    a._scrollWrapper.css({
                        width: ""
                    }), n = a._scrollWrapper.outerWidth(), a._scrollWrapper.css({
                        width: s
                    }), o = a.element.outerWidth(), i = a.element[0].offsetWidth - a.element[0].clientWidth, o != n && n > 0 && (r = t ? Math.min(e, n) : n, a.element.width(r - i), a._scrollWrapper.width(r))
                },
                _reinitOverflow: function(e) {
                    var t = this,
                        n = e.scrollable && !t.options.scrollable || !e.scrollable && t.options.scrollable || e.scrollable && t.options.scrollable && e.scrollable.distance != t.options.scrollable.distance || e.orientation != t.options.orientation;
                    n && (t._detachMenuEventsHandlers(), t._destroyOverflow(), t._initOverflow(e), t._attachMenuEventsHandlers())
                },
                _destroyOverflow: function() {
                    var n = this,
                        o = n._overflowWrapper();
                    o && (o.off(F), o.find(Le).off(F).remove(), o.children(Se).each(function(t, n) {
                        var i, r = e(n).children(Ie);
                        r.off(fe), i = g(r, o), i.length && i.append(n)
                    }), o.find(m()).removeAttr("data-groupparent"), o.find(h()).removeAttr("data-group"), n.element.off(fe), e(window).off(me), o.contents().unwrap(), n._scrollWrapper = n._popupsWrapper = n._openedPopups = t)
                },
                _initScrolling: function(t, n, o, i) {
                    var r = this,
                        a = r.options.scrollable,
                        s = e.isNumeric(a.distance) ? a.distance : D,
                        l = s / 2,
                        p = "-=" + s,
                        c = "+=" + s,
                        u = "-=" + 2 * s,
                        d = "+=" + 2 * s,
                        f = !1,
                        m = !1,
                        h = function(e) {
                            var a = i ? {
                                scrollLeft: e
                            } : {
                                scrollTop: e
                            };
                            t.finish().animate(a, "fast", "linear", function() {
                                f && h(e)
                            }), r._toggleScrollButtons(t, n, o, i)
                        },
                        v = function(e) {
                            f || m || (h(e.data.direction), f = !0)
                        },
                        g = function(a) {
                            var s = i ? {
                                scrollLeft: a.data.direction
                            } : {
                                scrollTop: a.data.direction
                            };
                            m = y(a) || b(a), t.stop().animate(s, "fast", "linear", function() {
                                m ? (r._toggleScrollButtons(t, n, o, i), f = !0) : e(a.currentTarget).trigger(ue)
                            }), f = !1, a.stopPropagation(), a.preventDefault()
                        };
                    n.on(ue + F, {
                        direction: p
                    }, v).on(x.eventMap.down + F, {
                        direction: u
                    }, g), o.on(ue + F, {
                        direction: c
                    }, v).on(x.eventMap.down + F, {
                        direction: d
                    }, g), n.add(o).on(de + F, function() {
                        t.stop(), f = !1, r._toggleScrollButtons(t, n, o, i)
                    }), t.on(fe, function(e) {
                        var a, s, p, c;
                        e.ctrlKey || e.shiftKey || e.altKey || (a = w(e.originalEvent), s = Math.abs(a) * l, p = (a > 0 ? "+=" : "-=") + s, c = i ? {
                            scrollLeft: p
                        } : {
                            scrollTop: p
                        }, r._closeChildPopups(t), t.finish().animate(c, "fast", "linear", function() {
                            r._toggleScrollButtons(t, n, o, i)
                        }), e.preventDefault())
                    })
                },
                _toggleScrollButtons: function(e, t, n, o) {
                    var i = o ? x.scrollLeft(e) : e.scrollTop(),
                        r = o ? he : ve,
                        a = o ? ge : _e;
                    t.toggle(0 !== i), n.toggle(i < e[0][r] - e[0][a] - 1)
                },
                setOptions: function(e) {
                    var t = this.options.animation;
                    this._animations(e), e.animation = M(!0, t, e.animation), "dataSource" in e && this._dataSource(e), this._updateClasses(), this._reinitOverflow(e), z.fn.setOptions.call(this, e)
                },
                destroy: function() {
                    var e = this;
                    z.fn.destroy.call(e), e._detachMenuEventsHandlers(), e._destroyOverflow(), x.destroy(e.element)
                },
                enable: function(e, t) {
                    return this._toggleDisabled(e, t !== !1), this
                },
                disable: function(e) {
                    return this._toggleDisabled(e, !1), this
                },
                attemptGetItem: function(t) {
                    var n, o;
                    return t = t || this.element, n = this.element.find(t), o = this._overflowWrapper(), n.length || t === this.element ? n : o ? o.find(t) : e()
                },
                append: function(e, t) {
                    t = this.attemptGetItem(t);
                    var n = this._insert(e, t, t.length ? this._childPopupElement(t) : null);
                    return N(n.items, function(t) {
                        n.group.append(this), a(this), u(this, e[t] || e)
                    }), a(t), l(n.group.find(".k-first, .k-last").add(n.items)), p(c(n.group)), this
                },
                insertBefore: function(e, t) {
                    t = this.attemptGetItem(t);
                    var n = this._insert(e, t, t.parent());
                    return N(n.items, function(n) {
                        t.before(this), a(this), l(this), u(this, e[n] || e)
                    }), l(t), this
                },
                insertAfter: function(e, t) {
                    t = this.attemptGetItem(t);
                    var n = this._insert(e, t, t.parent());
                    return N(n.items, function(n) {
                        t.after(this), a(this), l(this), u(this, e[n] || e)
                    }), l(t), this
                },
                _insert: function(t, n, o) {
                    var i, a, s, l, p = this;
                    return n && n.length || (o = p.element), s = e.isPlainObject(t) || t instanceof x.data.ObservableObject, l = {
                        firstLevel: o.hasClass(J),
                        horizontal: o.hasClass(J + "-horizontal"),
                        expanded: !0,
                        length: o.children().length
                    }, n && !o.length && (o = e(p.renderGroup({
                        group: l,
                        options: p.options
                    })).appendTo(n)), s || I(t) || t instanceof x.data.ObservableArray ? i = e(e.map(s ? [t] : t, function(t, n) {
                        return "string" == typeof t ? e(t).get() : e(p.renderItem({
                            group: l,
                            item: M(t, {
                                index: n
                            })
                        })).get()
                    })) : (i = "string" == typeof t && "<" != t.charAt(0) ? p.element.find(t) : e(t), a = i.find("> ul").addClass("k-menu-group").attr("role", "menu"), i = i.filter("li"), i.add(a.find("> li")).each(function() {
                        r(this)
                    })), {
                        items: i,
                        group: o
                    }
                },
                remove: function(e) {
                    var t, n, o, i, r;
                    return e = this.attemptGetItem(e), t = this, n = e.parentsUntil(t.element, We), o = e.parent("ul:not(.k-menu)"), e.remove(), o && !o.children(We).length && (i = c(o), r = o.parent(Se), r.length ? r.remove() : o.remove(), p(i)), n.length && (n = n.eq(0), a(n), l(n)), t
                },
                _openAfterLoad: function(e, t) {
                    var n = this;
                    t.loaded() ? (n.open(e), n._loading = !1) : t.one(le, function() {
                        e.find(Y).removeClass("k-i-loading"), n._loading && (n.open(e), n._loading = !1)
                    })
                },
                open: function(i) {
                    var r, a, s, l = this,
                        p = l.options,
                        c = "horizontal" == p.orientation,
                        u = p.direction,
                        d = x.support.isRtl(l.wrapper),
                        f = l._overflowWrapper();
                    return i = (f || l.element).find(i), r = l.dataSource && l.dataSource.getByUid(i.data(x.ns + "uid")), r && r.hasChildren && !r.loaded() && !l._loading ? (l._loading = !0, i.find(Y).addClass("k-i-loading"), r.load(), l._openAfterLoad(i, r), t) : (/^(top|bottom|default)$/.test(u) && (u = d ? c ? (u + " left").replace("default", "bottom") : "left" : c ? (u + " right").replace("default", "bottom") : "right"), a = ">.k-popup:visible,>.k-animation-container>.k-popup:visible", s = function() {
                        var t = e(this).data(be);
                        t && l.close(e(this).closest("li.k-item"), !0)
                    }, i.siblings().find(a).each(s), f && i.find(a).each(s), l.options.openOnClick && (l.clicked = !0), i.each(function() {
                        var i = e(this);
                        clearTimeout(i.data(Z)), i.data(Z, setTimeout(function() {
                            var r, a, s, h, v, g, _, k, w, C, b = i.find(".k-menu-group:first:hidden");
                            !b[0] && f && (a = l._getPopup(i), b = a && a.element), b.is(":visible") || b[0] && l._triggerEvent({
                                item: i[0],
                                type: j
                            }) === !1 && (!b.find(".k-menu-group")[0] && b.children(".k-item").length > 1 ? (s = e(window).height(), h = function() {
                                b.css({
                                    maxHeight: s - (x._outerHeight(b) - b.height()) - x.getShadows(b).bottom,
                                    overflow: "auto"
                                })
                            }, h()) : b.css({
                                maxHeight: "",
                                overflow: ""
                            }), i.data(te, i.css(te)), v = l.nextItemZIndex++, i.css(te, v), l.options.scrollable && i.parent().siblings(Le).css({
                                zIndex: ++v
                            }), r = b.data(be), g = i.parent().hasClass(J), _ = g && c, k = o(u, g, d), w = p.animation.open.effects, C = w !== t ? w : "slideIn:" + n(u, g), r ? (r = b.data(be), r.options.origin = k.origin, r.options.position = k.position, r.options.animation.open.effects = C) : r = b.kendoPopup({
                                activate: function() {
                                    l._triggerEvent({
                                        item: this.wrapper.parent(),
                                        type: ne
                                    })
                                },
                                deactivate: function(e) {
                                    l._closing = !1, e.sender.element.removeData("targetTransform").css({
                                        opacity: ""
                                    }), l._triggerEvent({
                                        item: this.wrapper.parent(),
                                        type: oe
                                    })
                                },
                                origin: k.origin,
                                position: k.position,
                                collision: p.popupCollision !== t ? p.popupCollision : _ ? "fit" : "fit flip",
                                anchor: i,
                                appendTo: f || i,
                                animation: {
                                    open: M(!0, {
                                        effects: C
                                    }, p.animation.open),
                                    close: p.animation.close
                                },
                                open: B(l._popupOpen, l),
                                close: function(e) {
                                    var t, n;
                                    l._closing = e.sender.element, t = e.sender.wrapper.parent(), f && (n = e.sender.element.data(ke), n && (t = (f || l.element).find(m(n))), e.sender.wrapper.children(Le).hide()), l._triggerEvent({
                                        item: t[0],
                                        type: V
                                    }) ? e.preventDefault() : (t.css(te, t.data(te)), t.removeData(te), l.options.scrollable && t.parent().siblings(Le).css({
                                        zIndex: ""
                                    }), (H || se || x.support.mouseAndTouchPresent) && (t.removeClass(Pe), l._removeHoverItem()))
                                }
                            }).data(be), b.removeAttr("aria-hidden"), l._configurePopupOverflow(r, i), r._hovered = !0, r.open(), l._initPopupScrolling(r))
                        }, l.options.hoverDelay))
                    }), l)
                },
                _configurePopupOverflow: function(e, t) {
                    var n, o = this;
                    o.options.scrollable && (o._wrapPopupElement(e), t.attr("data-groupparent") || (n = (new Date).getTime(), t.attr("data-groupparent", n), e.element.attr("data-group", n)))
                },
                _wrapPopupElement: function(e) {
                    e.element.parent().is(Se) || (e.wrapper = x.wrap(e.element, e.options.autosize).css({
                        overflow: "hidden",
                        display: "block",
                        position: "absolute"
                    }))
                },
                _initPopupScrolling: function(e, t, n) {
                    var o = this;
                    o.options.scrollable && e.element[0].scrollHeight > e.element[0].offsetHeight && o._initPopupScrollButtons(e, t, n)
                },
                _initPopupScrollButtons: function(t, n, o) {
                    var i = this,
                        r = t.wrapper.children(Le),
                        a = i.options.animation,
                        s = (a && a.open && a.open.duration || 0) + A;
                    setTimeout(function() {
                        var a, s;
                        r.length || (a = e(i.templates.scrollButton({
                            direction: n ? "left" : "up"
                        })), s = e(i.templates.scrollButton({
                            direction: n ? "right" : "down"
                        })), r = a.add(s).appendTo(t.wrapper), i._initScrolling(t.element, a, s, n), o || r.on(ue + F, function() {
                            var n = i._overflowWrapper();
                            e(v(t.element, n)).each(function(e, t) {
                                var o = n.find(m(t.data(ke)));
                                i.close(o)
                            })
                        }).on(de + F, function() {
                            setTimeout(function() {
                                e.isEmptyObject(i._openedPopups) && i._closeParentPopups(t.element)
                            }, A)
                        })), i._toggleScrollButtons(t.element, r.first(), r.last(), n)
                    }, s)
                },
                _popupOpen: function(e) {
                    this._keyTriggered || e.sender.element.children("." + xe).removeClass(xe), this.options.scrollable && this._setPopupHeight(e.sender)
                },
                _setPopupHeight: function(t, n) {
                    var o, i, r, a, s, l, p, c, u, d = t.element,
                        f = d.add(d.parent(Se));
                    f.height(d.hasClass(J) && this._initialHeight || ""), o = t._location(n), i = e(window).height(), r = o.height, a = n ? 0 : Math.max(o.top, 0), s = n ? 0 : C(this._overflowWrapper()[0], "scrollTop"), l = window.innerHeight - i, p = i - x.getShadows(d).bottom + l, c = p + s > r + a, c || (u = Math.min(p, p - a + s), f.css({
                        overflow: "hidden",
                        height: u + "px"
                    }))
                },
                close: function(t, n) {
                    var o, i, r = this,
                        a = r._overflowWrapper(),
                        s = a || r.element;
                    return t = s.find(t), t.length || (t = s.find(">.k-item")), o = function(t) {
                        var n = !1;
                        return e.isEmptyObject(r._openedPopups) ? n : (e(v(t, a)).each(function(e, t) {
                            return n = !!r._openedPopups["" + t.data(ke)], !n
                        }), n)
                    }, i = function(e) {
                        var t = e.data(we);
                        return !a || !t || !r._openedPopups["" + t]
                    }, t.each(function() {
                        var s = e(this);
                        !n && r._isRootItem(s) && (r.clicked = !1), clearTimeout(s.data(Z)), s.data(Z, setTimeout(function() {
                            var e = r._getPopup(s);
                            if (e && (i(s) || r._forceClose)) {
                                if (!r._forceClose && o(e.element)) return;
                                e.close(), e.element.attr("aria-hidden", !0), a && r._forceClose && t.last().is(s[0]) && delete r._forceClose
                            }
                        }, r.options.hoverDelay))
                    }), r
                },
                _getPopup: function(e) {
                    var t, n, o = this,
                        i = e.find(".k-menu-group:not(.k-list-container):not(.k-calendar-container):first:visible").data(be),
                        r = o._overflowWrapper();
                    return !i && r && (t = e.data(we), t && (n = r.find(h(t)), i = n.data(be))), i
                },
                _toggleDisabled: function(t, n) {
                    this.element.find(t).each(function() {
                        e(this).toggleClass(ye, n).toggleClass(Oe, !n).attr("aria-disabled", !n)
                    })
                },
                _toggleHover: function(t) {
                    var n = e(x.eventTarget(t) || t.target).closest(We),
                        o = t.type == ue || E.indexOf(t.type) !== -1;
                    n.siblings().removeClass(Pe), n.parents("li." + Oe).length || n.toggleClass(Pe, o || "mousedown" == t.type || "pointerover" == t.type || t.type == ce), this._removeHoverItem()
                },
                _preventClose: function() {
                    this.options.closeOnClick || (this._closurePrevented = !0)
                },
                _checkActiveElement: function(t) {
                    var n = this,
                        o = e(t ? t.currentTarget : this._hoverItem()),
                        r = n._findRootParent(o)[0];
                    this._closurePrevented || setTimeout(function() {
                        document.hasFocus() && (i(r, x._activeElement()) || !t || i(r, t.currentTarget)) || n.close(r)
                    }, 0), this._closurePrevented = !1
                },
                _removeHoverItem: function() {
                    var e = this._hoverItem();
                    e && e.hasClass(xe) && (e.removeClass(xe), this._oldHoverItem = null)
                },
                _updateClasses: function() {
                    var e, t = this.element,
                        n = ".k-menu-init div ul";
                    t.removeClass("k-menu-horizontal k-menu-vertical"), t.addClass("k-widget k-reset k-header k-menu-init " + J).addClass(J + "-" + this.options.orientation), t.find("li > ul").filter(function() {
                        return !x.support.matchesSelector.call(this, n)
                    }).addClass("k-group k-menu-group").attr("role", "menu").attr("aria-hidden", t.is(":visible")).parent("li").attr("aria-haspopup", "true").end().find("li > div").addClass("k-content").attr("tabindex", "-1"), e = t.find("> li,.k-menu-group > li"), t.removeClass("k-menu-init"), e.each(function() {
                        r(this)
                    })
                },
                _mouseenter: function(t) {
                    var n = this,
                        o = e(t.currentTarget),
                        r = n._itemHasChildren(o),
                        a = o.data(we) || o.parent().data(ke),
                        s = b(t),
                        l = !1;
                    a && (n._openedPopups["" + a] = !0), n._closing && (l = !!n._closing.find(o).length), l || t.delegateTarget != o.parents(He)[0] && t.delegateTarget != o.parents(".k-menu-scroll-wrapper,.k-popups-wrapper")[0] || (n._keyTriggered = !1, n.options.openOnClick.rootMenuItems && n._isRootItem(o.closest(We)) || n.options.openOnClick.subMenuItems && !n._isRootItem(o.closest(We)) || (!(n.options.openOnClick === !1 || n.options.openOnClick.rootMenuItems === !1 && n._isRootItem(o.closest(We)) || n.options.openOnClick.subMenuItems === !1 && !n._isRootItem(o.closest(We)) || n.clicked) || H || s && n._isRootItem(o.closest(We)) || !i(t.currentTarget, t.relatedTarget) && r && n.open(o), (n.options.openOnClick === !0 && n.clicked || H) && o.siblings().each(B(function(e, t) {
                        n.close(t, !0)
                    }, n))))
                },
                _mousedown: function(t) {
                    var n = this,
                        o = e(t.currentTarget);
                    (n.options.openOnClick.subMenuItems && !n._isRootItem(o) || H) && o.siblings().each(B(function(e, t) {
                        n.close(t, !0)
                    }, n))
                },
                _mouseleave: function(n) {
                    var o = this,
                        r = e(n.currentTarget),
                        a = r.data(we),
                        s = r.children(Se).length || r.children(Ie).length || a,
                        l = e(window);
                    return a && delete o._openedPopups["" + a], r.parentsUntil(Se, ".k-list-container,.k-calendar-container")[0] ? (n.stopImmediatePropagation(), t) : o.options.openOnClick !== !1 && (o.options.openOnClick.rootMenuItems || !o._isRootItem(r)) && (o.options.openOnClick.subMenuItems || o._isRootItem(r)) || H || b(n) || i(n.currentTarget, n.relatedTarget || n.target) || !s || i(n.currentTarget, x._activeElement()) ? ((x.support.browser.msie && !n.toElement && !n.relatedTarget && !b(n) || n.clientX < 0 || n.clientY < 0 || n.clientY > l.height() || n.clientX > l.width()) && o.close(r), t) : (o.close(r, !0), o._loading = !1, t)
                },
                _mouseenterPopup: function(t) {
                    var n, o = this,
                        i = e(t.currentTarget);
                    i.parent().is(Se) || (i = i.children("ul"), n = i.data(ke), n && (o._openedPopups["" + n] = !0))
                },
                _mouseleavePopup: function(t) {
                    var n = this,
                        o = e(t.currentTarget);
                    !b(t) && o.is(Se) && n._closePopups(o.children("ul"))
                },
                _closePopups: function(t) {
                    var n, o = this,
                        i = o._overflowWrapper(),
                        r = t.data(ke);
                    r && (delete o._openedPopups["" + r], n = i.find(m(r)), setTimeout(function() {
                        if (o.options.openOnClick) o._closeChildPopups(t);
                        else if (e.isEmptyObject(o._openedPopups)) {
                            var i = o._innerPopup(t);
                            o._closeParentPopups(i)
                        } else o.close(n, !0)
                    }, 0))
                },
                _closeChildPopups: function(t) {
                    var n = this,
                        o = n._overflowWrapper();
                    e(v(t, o)).each(function() {
                        var e = o.find(m(this.data(ke)));
                        n.close(e, !0)
                    })
                },
                _innerPopup: function(e) {
                    var t = this._overflowWrapper(),
                        n = v(e, t);
                    return n[n.length - 1] || e
                },
                _closeParentPopups: function(e) {
                    var t = this,
                        n = t._overflowWrapper(),
                        o = e.data(ke),
                        i = n.find(m(o));
                    for (o = i.parent().data(ke), t.close(i, !0); o && !t._openedPopups[o] && !i.parent().is(He);) i = n.find(m(o)), t.close(i, !0), o = i.parent().data(ke)
                },
                _click: function(n) {
                    var o, i, r, a, s, l, p = this,
                        c = p.options,
                        u = e(x.eventTarget(n)),
                        d = u[0],
                        f = u[0] ? u[0].nodeName.toUpperCase() : "",
                        m = "INPUT" == f || "SELECT" == f || "BUTTON" == f || "LABEL" == f,
                        v = u.closest(X),
                        g = u.closest(We),
                        _ = g[0],
                        k = v.attr("href"),
                        w = u.attr("href"),
                        C = e("<a href='#' />").attr("href"),
                        y = !!k && k !== C,
                        P = y && !!k.match(/^#/),
                        O = !!w && w !== C,
                        T = p._overflowWrapper();
                    if (!d || d.parentNode) {
                        for (e(u).hasClass("k-menu-expand-arrow") && (this._lastClickedElement = d.parentElement); d && d.parentNode != _;) d = d.parentNode;
                        if (!e(d).is(ze)) {
                            if (g.hasClass(Oe)) return n.preventDefault(), t;
                            if (n.handled || !p._triggerSelect(u, _) || m || n.preventDefault(), n.handled = !0, i = g.children(Ee), T && (s = g.data(we), s && (i = T.find(h(s)))), r = i.is(":visible"), a = c.openOnClick && r && p._isRootItem(g), c.closeOnClick && (!y || P) && (!i.length || a)) return g.removeClass(Pe).css("height"), p._oldHoverItem = p._findRootParent(g), l = p._parentsUntil(v, p.element, We), p._forceClose = !!T, p.close(l), p.clicked = !1, "MSPointerUp".indexOf(n.type) != -1 && n.preventDefault(), t;
                            y && n.enterKey && v[0].click(), (p._isRootItem(g) && c.openOnClick !== !1 || c.openOnClick.subMenuItems || x.support.touch || b(n) && p._isRootItem(g.closest(We))) && (y || m || O || n.preventDefault(), p.clicked = !0, o = i.is(":visible") ? V : j, (c.closeOnClick || o != V) && p[o](g))
                        }
                    }
                },
                _parentsUntil: function(n, o, i) {
                    var r, a, s = this._overflowWrapper();
                    return s ? (r = k(n, s), a = [], e(r).each(function() {
                        var n = e(this);
                        return !n.is(o) && (n.is(i) && a.push(this), t)
                    }), e(a)) : n.parentsUntil(o, i)
                },
                _triggerSelect: function(e, t) {
                    var n, o, i, r;
                    return e = e.is(".k-link") ? e : e.closest(".k-link"), n = e.data("selectHandler"), n && (o = this._getEventData(e), n.call(this, o)), i = o && o.isDefaultPrevented(), r = this._triggerEvent({
                        item: t,
                        type: ee
                    }), i || r
                },
                _getEventData: function(e) {
                    var t = {
                        sender: this,
                        target: e,
                        _defaultPrevented: !1,
                        preventDefault: function() {
                            this._defaultPrevented = !0
                        },
                        isDefaultPrevented: function() {
                            return this._defaultPrevented
                        }
                    };
                    return t
                },
                _documentClick: function(n) {
                    var o = this,
                        r = e(n.target).hasClass("k-menu-expand-arrow") ? o._lastClickedElement : n.target;
                    return i((o._overflowWrapper() || o.element)[0], r) ? (o._lastClickedElement = t, t) : (o.clicked = !1, t)
                },
                _focus: function(n) {
                    var o = this,
                        i = n.target,
                        r = o._hoverItem(),
                        a = T();
                    return i == o.wrapper[0] || e(i).is(":kendoFocusable") ? (a === n.currentTarget && (r.length ? o._moveHover([], r) : o._oldHoverItem || o._moveHover([], o.wrapper.children().first())), t) : (n.stopPropagation(), e(i).closest(".k-content").closest(".k-menu-group").closest(".k-item").addClass(xe), o.wrapper.focus(), t)
                },
                _keydown: function(e) {
                    var n, o, i, r = this,
                        a = e.keyCode,
                        s = r._oldHoverItem,
                        l = x.support.isRtl(r.wrapper);
                    if (e.target == e.currentTarget || a == U.ESC) {
                        if (s || (s = r._oldHoverItem = r._hoverItem()), o = r._itemBelongsToVertival(s), i = r._itemHasChildren(s), r._keyTriggered = !0, a == U.RIGHT) n = r[l ? "_itemLeft" : "_itemRight"](s, o, i);
                        else if (a == U.LEFT) n = r[l ? "_itemRight" : "_itemLeft"](s, o, i);
                        else if (a == U.DOWN) n = r._itemDown(s, o, i);
                        else if (a == U.UP) n = r._itemUp(s, o, i);
                        else if (a == U.HOME) r._moveHover(s, s.parent().children().first()), e.preventDefault();
                        else if (a == U.END) r._moveHover(s, s.parent().children().last()), e.preventDefault();
                        else if (a == U.ESC) n = r._itemEsc(s, o);
                        else if (a == U.ENTER || a == U.SPACEBAR) n = s.children(".k-link"), n.length > 0 && (r._click({
                            target: n[0],
                            preventDefault: function() {},
                            enterKey: !0
                        }), i && !s.hasClass(Oe) ? (r.open(s), r._moveHover(s, r._childPopupElement(s).children().first())) : r._moveHover(s, r._findRootParent(s)));
                        else if (a == U.TAB) return n = r._findRootParent(s), r._moveHover(s, n), r._checkActiveElement(), t;
                        n && n[0] && (e.preventDefault(), e.stopPropagation())
                    }
                },
                _hoverItem: function() {
                    return this.wrapper.find(".k-item.k-state-hover,.k-item.k-state-focused").filter(":visible")
                },
                _itemBelongsToVertival: function(e) {
                    var t = this.wrapper.hasClass("k-menu-vertical");
                    return e.length ? e.parent().hasClass("k-menu-group") || t : t
                },
                _itemHasChildren: function(e) {
                    return !!(e && e.length && e[0].nodeType) && (e.children(".k-menu-group, div.k-animation-container").length > 0 || !!e.data(we) && !!this._overflowWrapper().children(h(e.data(we))))
                },
                _moveHover: function(t, n) {
                    var o = this,
                        i = o._ariaId;
                    t.length && n.length && t.removeClass(xe), n.length && (n[0].id && (i = n[0].id), n.addClass(xe), o._oldHoverItem = n, i && (o.element.removeAttr("aria-activedescendant"), e("#" + i).removeAttr("id"), n.attr("id", i), o.element.attr("aria-activedescendant", i)), o._scrollToItem(n))
                },
                _findRootParent: function(e) {
                    return this._isRootItem(e) ? e : this._parentsUntil(e, He, "li.k-item").last()
                },
                _isRootItem: function(e) {
                    return e.parent().hasClass(J)
                },
                _itemRight: function(e, t, n) {
                    var o, i, r, a, s = this;
                    return t ? n && !e.hasClass(Oe) ? (s.open(e), o = s._childPopupElement(e).children().first()) : "horizontal" == s.options.orientation && (i = s._findRootParent(e), r = s._overflowWrapper(), r && (a = _(i, r), s._closeChildPopups(a)), s.close(i), o = i.nextAll(Re)) : (o = e.nextAll(Re), o.length || (o = e.prevAll(Ue)), s.close(e)), o && !o.length ? o = s.wrapper.children(".k-item").first() : o || (o = []), s._moveHover(e, o), o
                },
                _itemLeft: function(e, t) {
                    var n, o, i = this;
                    return t ? (n = e.parent().closest(".k-item"), o = i._overflowWrapper(), !n.length && o && (n = g(e.parent(), o)), i.close(n), i._isRootItem(n) && "horizontal" == i.options.orientation && (n = n.prevAll(Re))) : (n = e.prevAll(Re), n.length || (n = e.nextAll(Ue)), i.close(e)), n.length || (n = i.wrapper.children(".k-item").last()), i._moveHover(e, n), n
                },
                _itemDown: function(e, t, n) {
                    var o, i = this;
                    if (t) o = e.nextAll(Re);
                    else {
                        if (!n || e.hasClass(Oe)) return;
                        i.open(e), o = i._childPopupElement(e).children().first()
                    }
                    return !o.length && e.length ? o = e.parent().children().first() : e.length || (o = i.wrapper.children(".k-item").first()), i._moveHover(e, o), o
                },
                _itemUp: function(e, t) {
                    var n, o = this;
                    if (t) return n = e.prevAll(Re), !n.length && e.length ? n = e.parent().children().last() : e.length || (n = o.wrapper.children(".k-item").last()), o._moveHover(e, n), n
                },
                _scrollToItem: function(e) {
                    var t, n, o, i, r, a, s, l, p, c, u, d, f = this;
                    f.options.scrollable && e && e.length && (t = e.parent(), n = !!t.hasClass(J) && "horizontal" == f.options.orientation, o = n ? "scrollLeft" : "scrollTop", i = n ? x._outerWidth : x._outerHeight, r = t[o](), a = i(e), s = e[0][n ? "offsetLeft" : "offsetTop"], l = i(t), p = t.siblings(Le), c = p.length ? i(p.first()) : 0, r + l < s + a + c ? u = s + a - l + c : r > s - c && (u = s - c), isNaN(u) || (d = {}, d[o] = u, t.finish().animate(d, "fast", "linear", function() {
                        f._toggleScrollButtons(t, p.first(), p.last(), n)
                    })))
                },
                _itemEsc: function(e, t) {
                    var n, o = this;
                    return t ? (n = e.parent().closest(".k-item"), o.close(n), o._moveHover(e, n), n) : e
                },
                _childPopupElement: function(e) {
                    var t = e.find(".k-menu-group"),
                        n = this._overflowWrapper();
                    return !t.length && n && (t = _(e, n)), t
                },
                _triggerEvent: function(e) {
                    var t = this;
                    return t.trigger(e.type, {
                        type: e.type,
                        item: e.item
                    })
                },
                _focusHandler: function(t) {
                    var n = this,
                        o = e(x.eventTarget(t)).closest(We);
                    o.hasClass(Oe) || setTimeout(function() {
                        n._moveHover([], o), o.children(".k-content")[0] && o.parent().closest(".k-item").removeClass(xe)
                    }, 200)
                },
                _animations: function(e) {
                    e && "animation" in e && !e.animation && (e.animation = {
                        open: {
                            effects: {}
                        },
                        close: {
                            hide: !0,
                            effects: {}
                        }
                    })
                },
                _dataSource: function(e) {
                    var t = this,
                        n = e ? e.dataSource : t.options.dataSource;
                    n && (n = I(n) ? {
                        data: n
                    } : n, t._unbindDataSource(), n.fields || (n.fields = [{
                        field: "uid"
                    }, {
                        field: "text"
                    }, {
                        field: "url"
                    }, {
                        field: "cssClass"
                    }, {
                        field: "spriteCssClass"
                    }, {
                        field: "imageUrl"
                    }, {
                        field: "imageAttr"
                    }, {
                        field: "attr"
                    }, {
                        field: "contentAttr"
                    }, {
                        field: "content"
                    }, {
                        field: "encoded"
                    }, {
                        field: "items"
                    }, {
                        field: "select"
                    }]), t.dataSource = S.create(n), t._bindDataSource(), t.dataSource.fetch())
                },
                _bindDataSource: function() {
                    this._refreshHandler = B(this.refresh, this), this._errorHandler = B(this._error, this), this.dataSource.bind(le, this._refreshHandler), this.dataSource.bind(pe, this._errorHandler)
                },
                _unbindDataSource: function() {
                    var e = this.dataSource;
                    e && (e.unbind(le, this._refreshHandler), e.unbind(pe, this._errorHandler))
                },
                _error: function() {},
                findByUid: function(e) {
                    var t = this._overflowWrapper() || this.element;
                    return t.find("[" + x.attr("uid") + "=" + e + "]")
                },
                refresh: function(t) {
                    var n = this,
                        o = t.node,
                        i = t.action,
                        r = o ? n.findByUid(o.uid) : n.element,
                        a = t.items,
                        s = t.index,
                        l = e.proxy(n._updateItem, n),
                        p = e.proxy(n._removeItem, n);
                    "add" == i ? n._appendItems(a, s, r) : "remove" == i ? a.forEach(p) : "itemchange" == i ? a.forEach(l) : "itemloaded" === i ? n.append(t.items, r) : this._initData(), this.trigger(je, {
                        item: r,
                        dataItem: o
                    })
                },
                _appendItems: function(e, t, n) {
                    var o = this,
                        i = n.find(De).eq(t);
                    i.length ? o.insertBefore(e, i) : o.append(e, n)
                },
                _removeItem: function(e) {
                    var t = this,
                        n = t.findByUid(e.uid);
                    t.remove(n)
                },
                _updateItem: function(e) {
                    var t = this,
                        n = t.findByUid(e.uid),
                        o = n.next(),
                        i = e.parentNode();
                    t.remove(n), o.length ? t.insertBefore(e, o) : t.append(e, i && t.findByUid(i.uid))
                },
                _accessors: function() {
                    var e, t, n, o = this,
                        i = o.options,
                        r = o.element;
                    for (e in Je) t = i[Je[e]], n = r.attr(x.attr(e + "-field")), !t && n && (t = n), t || (t = e), I(t) || (t = [t]), i[Je[e]] = t
                },
                _fieldAccessor: function(t) {
                    var n = this.options[Je[t]] || [],
                        o = n.length,
                        i = "(function(item) {";
                    return 0 === o ? i += "return item['" + t + "'];" : (i += "var levels = [" + e.map(n, function(e) {
                        return "function(d){ return " + x.expr(e) + "}"
                    }).join(",") + "];", i += "if(item.level){return levels[Math.min(item.level(), " + o + "-1)](item);}else", i += "{return levels[" + o + "-1](item)}"), i += "})"
                },
                _templates: function() {
                    var e = this,
                        t = e.options,
                        n = B(e._fieldAccessor, e);
                    t.template && typeof t.template == Ge ? t.template = R(t.template) : t.template || (t.template = R("# var text = " + n("text") + "(data.item); ## if (typeof data.item.encoded != 'undefined' && data.item.encoded === false) {##= text ## } else { ##: text ## } #")),
                        e.templates = {
                            content: R("#var contentHtml = " + n("content") + "(item);#<div #= contentCssAttributes(item.toJSON ? item.toJSON() : item) # tabindex='-1'>#= contentHtml || '' #</div>"),
                            group: R("<ul class='#= groupCssClass(group) #'#= groupAttributes(group) # role='menu' aria-hidden='true'>#= renderItems(data) #</ul>"),
                            itemWrapper: R("# var url = " + n("url") + "(item); ## var imageUrl = " + n("imageUrl") + "(item); ## var imgAttributes = " + n("imageAttr") + "(item);## var tag = url ? 'a' : 'span' #<#= tag # class='#= textClass(item) #' #if(url){#href='#= url #'#}#># if (imageUrl) { #<img #= imageCssAttributes(imgAttributes) #  alt='' src='#= imageUrl #' /># } ##= sprite(item) ##= data.menu.options.template(data) ##= arrow(data) #</#= tag #>"),
                            item: R("#var contentHtml = " + n("content") + "(item);#<li class='#= wrapperCssClass(group, item) #' #= itemCssAttributes(item.toJSON ? item.toJSON() : item) # role='menuitem'  #=item.items ? \"aria-haspopup='true'\": \"\"##=item.enabled === false ? \"aria-disabled='true'\" : ''#" + x.attr("uid") + "='#= item.uid #' >#= itemWrapper(data) ##if (item.hasChildren || item.items) { ##= subGroup({ items: item.items, menu: menu, group: { expanded: item.expanded } }) ## } else if (item.content || item.contentUrl || contentHtml) { ##= renderContent(data) ## } #</li>"),
                            scrollButton: R("<span class='k-button k-button-icon k-menu-scroll-button k-scroll-#= direction #' unselectable='on'><span class='k-icon k-i-arrow-60-#= direction #'></span></span>"),
                            arrow: R("<span class='#= arrowClass(item, group) #'></span>"),
                            sprite: R("# var spriteCssClass = " + n("spriteCssClass") + "(data); if(spriteCssClass) {#<span class='k-sprite #= spriteCssClass #'></span>#}#"),
                            empty: R("")
                        }
                },
                renderItem: function(e) {
                    var t, n, o = this;
                    return e = M({
                        menu: o,
                        group: {}
                    }, e), t = o.templates.empty, n = e.item, o.templates.item(M(e, {
                        sprite: o.templates.sprite,
                        itemWrapper: o.templates.itemWrapper,
                        renderContent: o.renderContent,
                        arrow: n.items || n.content || n[o.options.dataContentField[0]] ? o.templates.arrow : t,
                        subGroup: o.renderGroup
                    }, Ke))
                },
                renderGroup: function(e) {
                    var t = this,
                        n = t.templates || e.menu.templates;
                    return n.group(M({
                        renderItems: function(e) {
                            for (var t = "", n = 0, o = e.items, i = o ? o.length : 0, r = M({
                                    length: i
                                }, e.group); n < i; n++) t += e.menu.renderItem(M(e, {
                                group: r,
                                item: M({
                                    index: n
                                }, o[n])
                            }));
                            return t
                        }
                    }, e, Ke))
                },
                renderContent: function(e) {
                    return e.menu.templates.content(M(e, Ke))
                }
            }),
            Ye = Xe.extend({
                init: function(t, n) {
                    var o = this;
                    Xe.fn.init.call(o, t, n), o._marker = x.guid().substring(0, 8), o.target = e(o.options.target), o._popup(), o._wire()
                },
                _initOverflow: function(t) {
                    var n = this;
                    t.scrollable && !n._overflowWrapper() && (n._openedPopups = {}, n._popupsWrapper = (n.element.parent().is(Se) ? n.element.parent() : n.element).wrap("<div class='k-popups-wrapper " + t.orientation + "'></div>").parent(), "horizontal" == n.options.orientation && P(n.element), t.appendTo && (t.appendTo = e(t.appendTo), t.appendTo.append(n._popupsWrapper)), n._initialHeight = n.element[0].style.height, n._initialWidth = n.element[0].style.width)
                },
                options: {
                    name: "ContextMenu",
                    filter: null,
                    showOn: "contextmenu",
                    orientation: "vertical",
                    alignToAnchor: !1,
                    copyAnchorStyles: !0,
                    target: "body"
                },
                events: [j, V, ne, oe, ee],
                setOptions: function(t) {
                    var n = this;
                    Xe.fn.setOptions.call(n, t), n.target.off(n.showOn + F + n._marker, n._showProxy), n.userEvents && n.userEvents.destroy(), n.target = e(n.options.target), t.orientation && n.popup.wrapper[0] && n.popup.element.unwrap(), n._wire(), Xe.fn.setOptions.call(this, t)
                },
                destroy: function() {
                    var e = this;
                    e.target.off(e.options.showOn + F + e._marker), Ce.off(x.support.mousedown + F + e._marker, e._closeProxy), e.userEvents && e.userEvents.destroy(), Xe.fn.destroy.call(e)
                },
                open: function(n, o) {
                    var r, a, s = this;
                    return n = e(n)[0], i(s.element[0], e(n)[0]) || s._itemHasChildren(e(n)) ? Xe.fn.open.call(s, n) : s._triggerEvent({
                        item: s.element,
                        type: j
                    }) === !1 && (s.popup.visible() && s.options.filter && (s.popup.close(!0), s.popup.element.kendoStop(!0)), o !== t ? (r = s._overflowWrapper(), r && (a = r.offset(), n -= a.left, o -= a.top), s.popup.wrapper.hide(), s._configurePopupScrolling(n, o), s.popup.open(n, o)) : (s.popup.options.anchor = (n ? n : s.popup.anchor) || s.target, s.popup.element.kendoStop(!0), s._configurePopupScrolling(), s.popup.open()), Ce.off(s.popup.downEvent, s.popup._mousedownProxy), Ce.on(x.support.mousedown + F + s._marker, s._closeProxy)), s
                },
                _configurePopupScrolling: function(e, n) {
                    var o = this,
                        i = o.popup,
                        r = "horizontal" == o.options.orientation;
                    o.options.scrollable && (o._wrapPopupElement(i), i.element.parent().css({
                        position: "",
                        height: ""
                    }), i.element.css({
                        visibility: "hidden",
                        display: "",
                        position: ""
                    }), r ? o._setPopupWidth(i, isNaN(e) ? t : {
                        isFixed: !0,
                        x: e,
                        y: n
                    }) : o._setPopupHeight(i, isNaN(e) ? t : {
                        isFixed: !0,
                        x: e,
                        y: n
                    }), i.element.css({
                        visibility: "",
                        display: "none",
                        position: "absolute"
                    }), o._initPopupScrollButtons(i, r, !0), i.element.siblings(Le).hide())
                },
                _setPopupWidth: function(t, n) {
                    var o, i, r, a, s, l, p, c, u = t.element,
                        d = u.add(u.parent(Se));
                    d.width(this._initialWidth || ""), o = t._location(n), i = e(window).width(), r = o.width, a = Math.max(o.left, 0), s = n ? 0 : C(this._overflowWrapper()[0], "scrollLeft"), l = x.getShadows(u), p = i - l.left - l.right, c = p + s > r + a, c || d.css({
                        overflow: "hidden",
                        width: p - a + s + "px"
                    })
                },
                close: function() {
                    var t = this;
                    i(t.element[0], e(arguments[0])[0]) || t._itemHasChildren(arguments[0]) ? Xe.fn.close.call(t, arguments[0]) : t.popup.visible() && t._triggerEvent({
                        item: t.element,
                        type: V
                    }) === !1 && (t.popup.close(), Ce.off(x.support.mousedown + F + t._marker, t._closeProxy), t.unbind(ee, t._closeTimeoutProxy))
                },
                _showHandler: function(t) {
                    var n, o = t,
                        r = this,
                        a = r.options,
                        s = e(x.support.mobileOS ? o.target : o.currentTarget);
                    t.event && (o = t.event, o.pageX = t.x.location, o.pageY = t.y.location), i(r.element[0], t.relatedTarget || t.target) || (r._eventOrigin = o, o.preventDefault(), o.stopImmediatePropagation(), r.element.find("." + xe).removeClass(xe), (a.filter && s.is(a.filter) || !a.filter) && (a.alignToAnchor ? (r.popup.options.anchor = o.currentTarget, r.open(o.currentTarget)) : (r.popup.options.anchor = o.currentTarget, r._targetChild ? (n = r.target.offset(), r.open(o.pageX - n.left, o.pageY - n.top)) : r.open(o.pageX, o.pageY))))
                },
                _closeHandler: function(t) {
                    var n, o = this,
                        r = e(t.relatedTarget || t.target),
                        a = r.closest(o.target.selector)[0] == o.target[0],
                        s = r.closest(De),
                        l = o._itemHasChildren(s),
                        p = o._overflowWrapper(),
                        c = i(o.element[0], r[0]) || p && i(p[0], r[0]);
                    o._eventOrigin = t, n = 3 !== t.which, o.popup.visible() && (n && a || !a) && (o.options.closeOnClick && !l && c || !c) && (c ? (this.unbind(ee, this._closeTimeoutProxy), o.bind(ee, o._closeTimeoutProxy)) : o.close())
                },
                _wire: function() {
                    var e = this,
                        t = e.options,
                        n = e.target;
                    e._preventProxy = null, e._showProxy = B(e._showHandler, e), e._closeProxy = B(e._closeHandler, e), e._closeTimeoutProxy = B(e.close, e), n[0] && (x.support.mobileOS && "contextmenu" == t.showOn && (e.userEvents = new x.UserEvents(n, {
                        filter: t.filter,
                        allowSelection: !1
                    }), e._preventProxy = function() {
                        return !1
                    }, e.userEvents.bind("hold", e._showProxy)), t.filter ? n.on(t.showOn + F + e._marker, t.filter, e._preventProxy || e._showProxy) : n.on(t.showOn + F + e._marker, e._preventProxy || e._showProxy))
                },
                _triggerEvent: function(n) {
                    var o = this,
                        i = e(o.popup.options.anchor)[0],
                        r = o._eventOrigin;
                    return o._eventOrigin = t, o.trigger(n.type, M({
                        type: n.type,
                        item: n.item || this.element[0],
                        target: i
                    }, r ? {
                        event: r
                    } : {}))
                },
                _popup: function() {
                    var t = this,
                        n = t._overflowWrapper();
                    t._triggerProxy = B(t._triggerEvent, t), t.popup = t.element.addClass("k-context-menu").kendoPopup({
                        autosize: "horizontal" === t.options.orientation,
                        anchor: t.target || "body",
                        copyAnchorStyles: t.options.copyAnchorStyles,
                        collision: t.options.popupCollision || "fit",
                        animation: t.options.animation,
                        activate: t._triggerProxy,
                        deactivate: t._triggerProxy,
                        appendTo: n || t.options.appendTo,
                        close: n ? function(t) {
                            e(v(t.sender.element, n)).each(function(e, t) {
                                var n = t.data(be);
                                n && n.close(!0)
                            })
                        } : e.noop
                    }).data(be), t._targetChild = i(t.target[0], t.popup.element[0])
                }
            });
        O.plugin(Xe), O.plugin(Ye)
    }(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function(e, t, n) {
    (n || t)()
});
//# sourceMappingURL=kendo.menu.min.js.map;
/** 
 * Kendo UI v2021.1.204 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/
! function(t, define) {
    define("kendo.dialog.min", ["kendo.core.min", "kendo.popup.min"], t)
}(function() {
    return function(t, e) {
        function n(t) {
            return e !== t
        }

        function i(t, e, n) {
            return Math.max(Math.min(parseInt(t, 10), n === 1 / 0 ? n : parseInt(n, 10)), parseInt(e, 10))
        }

        function o(t) {
            return t.keyCode == g.ENTER || t.keyCode == g.SPACEBAR
        }
        var r, a, s, l, c, d, p, u, h = window.kendo,
            f = h.ui.Widget,
            m = h.ui.Popup.TabKeyTrap,
            v = t.proxy,
            _ = h.template,
            g = h.keys,
            w = t.isFunction,
            k = "kendoWindow",
            y = ".k-dialog",
            b = ".k-window",
            x = ".k-dialog-close",
            C = "k-window-content k-dialog-content",
            O = ".k-window-content",
            T = "k-scroll",
            H = "k-dialog-titleless",
            S = ".k-dialog-title",
            A = S + "bar",
            I = ".k-dialog-buttongroup",
            D = ".k-button",
            E = "k-alert",
            F = "k-confirm",
            R = "k-prompt",
            z = ".k-textbox",
            W = ".k-overlay",
            M = ":visible",
            N = "zIndex",
            B = "body",
            K = "initOpen",
            L = "touchstart",
            j = "touchmove",
            P = "open",
            Y = "close",
            Q = "show",
            V = "hide",
            q = {
                small: "k-window-sm",
                medium: "k-window-md",
                large: "k-window-lg"
            },
            G = "hidden",
            J = "overflow",
            U = "original-overflow-rule",
            X = "tap-y",
            Z = {
                okText: "OK",
                cancel: "Cancel",
                promptInput: "Input"
            },
            $ = Math.ceil,
            tt = ":not(link,meta,script,style)",
            et = f.extend({
                init: function(t, e) {
                    var n = this;
                    f.fn.init.call(n, t, e), n._init(n.element, n.options), h.notify(n)
                },
                _init: function(i, o) {
                    var a, s = this;
                    s._centerCallback = v(s._center, s), s.appendTo = t(B), n(o.visible) && null !== o.visible || (o.visible = i.is(M)), s.wrapperTemplate === e && (s.wrapperTemplate = r.wrapper), s._createDialog(), a = s.wrapper = i.closest(y), o._defaultFocus === e && (s._defaultFocus = i[0]), s._tabindex(i), s._dimensions(), this._tabKeyTrap = new m(a), s.options.visible ? s._triggerOpen() : s.wrapper.hide()
                },
                setOptions: function(n) {
                    var i, o = this,
                        r = o.options.size;
                    n = t.extend(o.options, n), f.fn.setOptions.call(o, n), n.title !== e && o.title(n.title), n.content && (h.destroy(o.element.children()), o.element.html(n.content)), n.actions && (o.wrapper.children(I).remove(), o._createActionbar(o.wrapper)), o.wrapper.show(), o._closable(o.wrapper), o.wrapper.removeClass(q[r]), o._dimensions(), n.visible ? o._triggerOpen() : o.wrapper.hide(), e !== n.modal && (i = o.options.visible !== !1, o._enableDocumentScrolling(), o._overlay(n.modal && i))
                },
                _dimensions: function() {
                    var t, e, n = this,
                        o = n.wrapper,
                        r = n.options,
                        a = r.width,
                        s = r.height,
                        l = r.size,
                        c = ["minWidth", "minHeight", "maxWidth", "maxHeight"];
                    for (t = 0; t < c.length; t++) e = r[c[t]], e && e != 1 / 0 && o.css(c[t], e);
                    this._setElementMaxHeight(), a && (("" + a).indexOf("%") > 0 ? o.width(a) : o.outerWidth(i(a, r.minWidth, r.maxWidth))), s && (("" + s).indexOf("%") > 0 ? o.height(s) : o.outerHeight(i(s, r.minHeight, r.maxHeight)), this._setElementHeight()), l && q[l] && o.addClass(q[l])
                },
                _setElementMaxHeight: function() {
                    var t, e = this,
                        n = e.element,
                        i = e.options.maxHeight;
                    i != 1 / 0 && (t = parseFloat(i, 10) - e._uiHeight(), t > 0 && n.css({
                        maxHeight: $(t) + "px"
                    }))
                },
                _setElementHeight: function() {
                    var t = this,
                        e = t.element,
                        n = t.wrapper.outerHeight(!0),
                        i = parseFloat(n, 10) - t._uiHeight();
                    i < 0 && (i = 0), e.css({
                        height: $(i) + "px"
                    }), this._applyScrollClassName(e)
                },
                _applyScrollClassName: function(t) {
                    var e = t.get(0).scrollHeight > t.outerHeight();
                    e ? t.addClass(T) : t.removeClass(T)
                },
                _uiHeight: function() {
                    var t = this,
                        e = t.wrapper,
                        n = e.children(I),
                        i = n[0] && n[0].offsetHeight || 0,
                        o = e.children(A),
                        r = o[0] && o[0].offsetHeight || 0;
                    return i + r
                },
                _overlay: function(e) {
                    var n = this.appendTo.children(W),
                        i = this.wrapper;
                    return n.length || (n = t(r.overlay)), n.insertBefore(i[0]).toggle(e).css(N, parseInt(i.css(N), 10) - 1), e ? this._waiAriaOverlay() : this._removeWaiAriaOverlay(), this.options.modal.preventScroll && this._stopDocumentScrolling(), n
                },
                _waiAriaOverlay: function() {
                    var e = this.wrapper;
                    this._overlayedNodes = e.prevAll(tt).add(e.nextAll(tt)).each(function() {
                        var e = t(this);
                        e.data("ariaHidden", e.attr("aria-hidden")), e.attr("aria-hidden", "true")
                    })
                },
                _removeWaiAriaOverlay: function() {
                    return this._overlayedNodes && this._overlayedNodes.each(function() {
                        var e = t(this),
                            n = e.data("ariaHidden");
                        n ? e.attr("aria-hidden", n) : e.removeAttr("aria-hidden")
                    })
                },
                _closeClick: function(t) {
                    t.preventDefault(), this.close(!1)
                },
                _closeKeyHandler: function(t) {
                    (o(t) || t.keyCode == g.ESC) && this.close(!1)
                },
                _keydown: function(t) {
                    var e = this,
                        n = e.options,
                        i = t.keyCode;
                    i == g.ESC && !e._closing && n.closable && e.close(!1)
                },
                _createDialog: function() {
                    var e = this,
                        n = e.element,
                        i = e.options,
                        o = h.support.isRtl(n),
                        a = t(r.titlebar(i)),
                        s = (n.id || h.guid()) + "_title",
                        l = t(e.wrapperTemplate(i));
                    l.toggleClass("k-rtl", o), n.addClass(C), e.appendTo.append(l), i.title !== !1 ? (l.append(a), a.attr("id", s), l.attr("aria-labelledby", s)) : l.addClass(H), e._closable(l), l.append(n), i.content && (h.destroy(n.children()), n.html(i.content)), i.actions.length && e._createActionbar(l)
                },
                _closable: function(t) {
                    var e = this,
                        n = e.options,
                        i = t.children(A),
                        o = i.find(".k-window-actions"),
                        a = o.length ? o.find(".k-dialog-close") : t.find(".k-dialog-close");
                    a.remove(), n.closable !== !1 && (n.title !== !1 && o.length ? o.append(r.close(n)) : t.prepend(r.close(n)), t.autoApplyNS(k), e.element.autoApplyNS(k), t.find(x).on("click", v(e._closeClick, e)).on("keydown", v(e._closeKeyHandler, e)), e.element.on("keydown", v(e._keydown, e)))
                },
                _createActionbar: function(e) {
                    var n = "stretched" === this.options.buttonLayout,
                        i = n ? "stretched" : "normal",
                        o = t(r.actionbar({
                            buttonLayout: i
                        }));
                    this._addButtons(o), e.append(o)
                },
                _addButtons: function(e) {
                    var n, i, o, a = this,
                        s = v(a._actionClick, a),
                        l = v(a._actionKeyHandler, a),
                        c = a.options.actions,
                        d = c.length;
                    for (o = 0; o < d; o++) n = c[o], i = a._mergeTextWithOptions(n), t(r.action(n)).autoApplyNS(k).html(i).appendTo(e).addClass(n.cssClass).data("action", n.action).on("click", s).on("keydown", l)
                },
                _mergeTextWithOptions: function(t) {
                    var e = t.text;
                    return e ? _(e)(this.options) : ""
                },
                _tabindex: function(t) {
                    var e, n = this,
                        i = n.wrapper,
                        o = i.find(x),
                        r = i.find(I + " " + D);
                    f.fn._tabindex.call(this, t), e = t.attr("tabindex"), o.attr("tabIndex", e), r.attr("tabIndex", e)
                },
                _actionClick: function(t) {
                    this.wrapper.is(M) && this._runActionBtn(t.currentTarget)
                },
                _actionKeyHandler: function(t) {
                    o(t) ? (t.preventDefault(), this._runActionBtn(t.currentTarget)) : t.keyCode == g.ESC && this.close(!1)
                },
                _runActionBtn: function(e) {
                    var n, i, o = this;
                    o._closing || (n = t(e).data("action"), i = w(n) && n({
                        sender: o
                    }) === !1, i || o.close(!1))
                },
                _triggerOpen: function() {
                    var t = this,
                        e = t.options,
                        n = t.wrapper;
                    t.toFront(), t._triggerInitOpen(), t.trigger(P), e.modal && (t._overlay(n.is(M)).css({
                        opacity: .5
                    }), t._focusDialog())
                },
                open: function() {
                    var t, e, n, i = this,
                        o = i.wrapper,
                        r = this._animationOptions(P),
                        a = i.options;
                    return this._triggerInitOpen(), i.trigger(P) || (i._closing && o.kendoStop(!0, !0), i._closing = !1, i.toFront(), a.visible = !0, a.modal && (e = !!i._modals().length, t = i._overlay(e), t.kendoStop(!0, !0), r.duration && h.effects.Fade && !e ? (n = h.fx(t).fadeIn(), n.duration(r.duration || 0), n.endValue(.5), n.play()) : t.css("opacity", .5), t.show()), o.show().kendoStop().kendoAnimate({
                        effects: r.effects,
                        duration: r.duration,
                        complete: v(i._openAnimationEnd, i)
                    }), o.show()), i
                },
                _animationOptions: function(t) {
                    var e = this.options.animation,
                        n = {
                            open: {
                                effects: {}
                            },
                            close: {
                                hide: !0,
                                effects: {}
                            }
                        };
                    return e && e[t] || n[t]
                },
                _openAnimationEnd: function() {
                    this.options.modal && this._focusDialog(), this.trigger(Q)
                },
                _triggerInitOpen: function() {
                    n(this._initOpenTriggered) || (this._initOpenTriggered = !0, this.trigger(K))
                },
                toFront: function() {
                    var e = this,
                        n = e.wrapper,
                        i = +n.css(N),
                        o = i;
                    return e.center(), t(b).each(function(e, n) {
                        var o = t(n),
                            r = o.css(N);
                        isNaN(r) || (i = Math.max(+r, i))
                    }), (!n[0].style.zIndex || o < i) && n.css(N, i + 2), e.element.find("> .k-overlay").remove(), n = null, e
                },
                close: function(t) {
                    return arguments.length || (t = !0), this._close(t), this._stopCenterOnResize(), this
                },
                _close: function(t) {
                    var e = this,
                        n = e.wrapper,
                        i = e.options,
                        o = this._animationOptions("open"),
                        r = this._animationOptions("close");
                    if (n.is(M) && !e.trigger(Y, {
                            userTriggered: !t
                        })) {
                        if (e._closing) return;
                        e._closing = !0, i.visible = !1, this._removeOverlay(), n.kendoStop().kendoAnimate({
                            effects: r.effects || o.effects,
                            reverse: r.reverse === !0,
                            duration: r.duration,
                            complete: v(this._closeAnimationEnd, this)
                        })
                    }
                    return e
                },
                center: function() {
                    this._center(), this._centerOnResize()
                },
                _center: function() {
                    var e = this,
                        n = e.wrapper,
                        i = t(window),
                        o = 0,
                        r = 0,
                        a = r + Math.max(0, (i.width() - n.width()) / 2),
                        s = o + Math.max(0, (i.height() - n.height() - parseInt(n.css("paddingTop"), 10)) / 2);
                    return n.css({
                        left: a,
                        top: s
                    }), e
                },
                _centerOnResize: function() {
                    this._trackResize || (h.onResize(this._centerCallback), this._trackResize = !0)
                },
                _stopCenterOnResize: function() {
                    h.unbindResize(this._centerCallback), this._trackResize = !1
                },
                _removeOverlay: function() {
                    var t = this._modals(),
                        e = this.options,
                        n = e.modal && !t.length;
                    n ? (this._overlay(!1).remove(), e.modal.preventScroll && this._enableDocumentScrolling()) : t.length && (this._object(t.last())._overlay(!0), e.modal.preventScroll && this._stopDocumentScrolling())
                },
                _stopDocumentScrolling: function() {
                    var e, n, i = this,
                        o = t("body");
                    i._storeOverflowRule(o), o.css(J, G), e = t("html"), n = e[0], i._storeOverflowRule(e), e.css(J, G), h.support.mobileOS.ios && (n.addEventListener(L, i._touchStart, {
                        passive: !1
                    }), n.addEventListener(j, i._touchMove, {
                        passive: !1
                    }))
                },
                _touchStart: function(e) {
                    t(this).data(X, e.changedTouches[0].pageY)
                },
                _touchMove: function(e) {
                    var n = e.target,
                        i = t(e.target),
                        o = e.changedTouches[0].pageY - t(this).data(X) > 0,
                        r = i.is(O) && o && 0 === i.scrollTop() || !o && i.scrollTop() === n.scrollHeight - n.clientHeight;
                    i.is(O) && !r || e.preventDefault()
                },
                _enableDocumentScrolling: function() {
                    var e = this,
                        n = t(document.body),
                        i = t("html"),
                        o = i[0];
                    e._restoreOverflowRule(n), e._restoreOverflowRule(i), h.support.mobileOS.ios && (i.removeData(X), o.removeEventListener(L, e._touchStart, {
                        passive: !1
                    }), o.removeEventListener(j, e._touchMove, {
                        passive: !1
                    }))
                },
                _storeOverflowRule: function(t) {
                    if (!this._isOverflowStored(t)) {
                        var e = t.get(0).style.overflow;
                        "string" == typeof e && t.data(U, e)
                    }
                },
                _isOverflowStored: function(t) {
                    return "string" == typeof t.data(U)
                },
                _restoreOverflowRule: function(t) {
                    var n = t.data(U);
                    null !== n && n !== e ? (t.css(J, n), t.removeData(U)) : t.css(J, "")
                },
                _closeAnimationEnd: function() {
                    var t, e = this;
                    e._closing = !1, e.wrapper.hide().css("opacity", ""), e.trigger(V), e.options.modal && (t = e._object(e._modals().last()), t && t.toFront())
                },
                _modals: function() {
                    var e = this,
                        n = t(b).filter(function() {
                            var n = t(this),
                                i = e._object(n),
                                o = i && i.options;
                            return o && o.modal && e.options.appendTo == o.appendTo && o.visible && n.is(M)
                        }).sort(function(e, n) {
                            return +t(e).css("zIndex") - +t(n).css("zIndex")
                        });
                    return e = null, n
                },
                _object: function(t) {
                    var n = t.children(O),
                        i = h.widgetInstance(n);
                    return i ? i : e
                },
                destroy: function() {
                    var e = this;
                    e._destroy(), f.fn.destroy.call(e), h.destroy(e.wrapper), e.wrapper.remove(), e.wrapper = e.element = t()
                },
                _destroy: function() {
                    var t = this,
                        e = "." + k;
                    t.wrapper.off(e), t.element.off(e), t.wrapper.find(x + "," + I + " > " + D).off(e), t._stopCenterOnResize()
                },
                title: function(e) {
                    var n = this,
                        i = n.wrapper,
                        o = n.options,
                        a = i.children(A),
                        s = a.children(S),
                        l = h.htmlEncode(e);
                    return arguments.length ? (e === !1 ? (a.remove(), i.addClass(H)) : (a.length || (a = t(r.titlebar(o)).prependTo(i), s = a.children(S), i.removeClass(H)), s.html(l)), n.options.title = l, n) : s.html()
                },
                content: function(t, e) {
                    var i = this,
                        o = i.wrapper.children(O);
                    return n(t) ? (this.angular("cleanup", function() {
                        return {
                            elements: o.children()
                        }
                    }), h.destroy(o.children()), o.html(t), this.angular("compile", function() {
                        var t, n = [];
                        for (t = o.length; --t >= 0;) n.push({
                            dataItem: e
                        });
                        return {
                            elements: o.children(),
                            data: n
                        }
                    }), i.options.content = t, i) : o.html()
                },
                _focusDialog: function() {
                    this._defaultFocus && this._focus(this._defaultFocus), this._tabKeyTrap.trap()
                },
                _focus: function(t) {
                    t && t.focus()
                },
                events: [K, P, Y, Q, V],
                options: {
                    title: "",
                    buttonLayout: "stretched",
                    actions: [],
                    modal: !0,
                    size: "auto",
                    width: null,
                    height: null,
                    minWidth: 0,
                    minHeight: 0,
                    maxWidth: 1 / 0,
                    maxHeight: 1 / 0,
                    content: null,
                    visible: null,
                    appendTo: B,
                    closable: !0
                }
            }),
            nt = et.extend({
                options: {
                    name: "Dialog",
                    messages: {
                        close: "Close"
                    }
                }
            });
        h.ui.plugin(nt), a = et.extend({
            _init: function(t, e) {
                var n = this;
                n.wrapperTemplate = r.alertWrapper, e._defaultFocus = null, n._ensureContentId(t), et.fn._init.call(n, t, e), n.bind(V, v(n.destroy, n)), n._ariaDescribedBy(), n._initFocus()
            },
            _ensureContentId: function(e) {
                var n = t(e);
                n.attr("id") || n.attr("id", h.guid() + "_k-popup")
            },
            _ariaDescribedBy: function() {
                this.wrapper.attr("aria-describedby", this.element.attr("id"))
            },
            _initFocus: function() {
                var t = this.options;
                this._defaultFocus = this._chooseEntryFocus(), this._defaultFocus && t.visible && t.modal && this._focusDialog()
            },
            _chooseEntryFocus: function() {
                return this.wrapper.find(I + " > " + D)[0]
            },
            options: {
                title: window.location.host,
                closable: !1,
                messages: Z
            }
        }), s = a.extend({
            _init: function(t, e) {
                var n = this;
                a.fn._init.call(n, t, e), n.wrapper.addClass(E)
            },
            options: {
                name: "Alert",
                modal: !0,
                actions: [{
                    text: "#: messages.okText #"
                }]
            }
        }), h.ui.plugin(s), l = function(e) {
            return t(r.alert).kendoAlert({
                content: e
            }).data("kendoAlert").open()
        }, c = a.extend({
            _init: function(e, n) {
                var i = this;
                a.fn._init.call(i, e, n), i.wrapper.addClass(F), i.result = t.Deferred()
            },
            options: {
                name: "Confirm",
                modal: !0,
                actions: [{
                    text: "#: messages.okText #",
                    primary: !0,
                    action: function(t) {
                        t.sender.result.resolve()
                    }
                }, {
                    text: "#: messages.cancel #",
                    action: function(t) {
                        t.sender.result.reject()
                    }
                }]
            }
        }), h.ui.plugin(c), d = function(e) {
            var n = t(r.confirm).kendoConfirm({
                content: e
            }).data("kendoConfirm").open();
            return n.result
        }, p = a.extend({
            _init: function(e, n) {
                var i = this;
                a.fn._init.call(i, e, n), i.wrapper.addClass(R), i._createPrompt(), i.result = t.Deferred()
            },
            _createPrompt: function() {
                var e = this.options.value,
                    n = t(r.promptInputContainer(this.options)).insertAfter(this.element);
                e && n.children(z).val(e), this._defaultFocus = this._chooseEntryFocus(), this._focusDialog()
            },
            _chooseEntryFocus: function() {
                return this.wrapper.find(z)[0]
            },
            options: {
                name: "Prompt",
                modal: !0,
                value: "",
                actions: [{
                    text: "#: messages.okText #",
                    primary: !0,
                    action: function(t) {
                        var e = t.sender,
                            n = e.wrapper.find(z).val();
                        e.result.resolve(n)
                    }
                }, {
                    text: "#: messages.cancel #",
                    action: function(t) {
                        var e = t.sender,
                            n = e.wrapper.find(z).val();
                        t.sender.result.reject(n)
                    }
                }]
            }
        }), h.ui.plugin(p), u = function(e, n) {
            var i = t(r.prompt).kendoPrompt({
                content: e,
                value: n
            }).data("kendoPrompt").open();
            return i.result
        }, r = {
            wrapper: _("<div class='k-widget k-window k-dialog' role='dialog'></div>"),
            action: _("<button type='button' class='k-button# if (data.primary) { # k-primary# } role='button' #'></button>"),
            titlebar: _("<div class='k-window-titlebar k-dialog-titlebar'><span class='k-window-title k-dialog-title'>#: title #</span><div class='k-window-actions k-dialog-actions'></div></div>"),
            close: _("<a role='button' href='\\#' class='k-button k-flat k-button-icon k-window-action k-dialog-action k-dialog-close' title='#: messages.close #' aria-label='#: messages.close #' tabindex='-1'><span class='k-icon k-i-close'></span></a>"),
            actionbar: _("<div class='k-dialog-buttongroup k-dialog-button-layout-#: buttonLayout #' role='toolbar'></div>"),
            overlay: "<div class='k-overlay'></div>",
            alertWrapper: _("<div class='k-widget k-window k-dialog' role='alertdialog'></div>"),
            alert: "<div></div>",
            confirm: "<div></div>",
            prompt: "<div></div>",
            promptInputContainer: _("<div class='k-prompt-container'><input type='text' class='k-textbox' title='#: messages.promptInput #' aria-label='#: messages.promptInput #' /></div>")
        }, h.alert = l, h.confirm = d, h.prompt = u
    }(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function(t, e, n) {
    (n || e)()
});
//# sourceMappingURL=kendo.dialog.min.js.map;
/** 
 * Kendo UI v2021.1.204 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/
! function(t, define) {
    define("kendo.tooltip.min", ["kendo.core.min", "kendo.popup.min", "kendo.fx.min"], t)
}(function() {
    return function(t, o) {
        function e(t) {
            for (; t.length && !n(t);) t = t.parent()
        }

        function n(t) {
            var o = t.data(r.ns + "title");
            if (o) return t.attr("title", o), t.removeData(r.ns + "title"), !0
        }

        function i(t) {
            var o = t.attr("title");
            if (o) return t.data(r.ns + "title", o), t.attr("title", ""), !0
        }

        function s(t) {
            for (; t.length && !t.is("body") && !i(t);) t = t.parent()
        }
        var r = window.kendo,
            u = r.ui.Widget,
            p = r.ui.Popup,
            c = r.isFunction,
            l = t.isPlainObject,
            a = t.extend,
            h = t.proxy,
            f = t(document),
            d = r.isLocalUrl,
            m = "_tt_active",
            w = "aria-describedby",
            _ = "show",
            g = "hide",
            v = "error",
            k = "contentLoad",
            y = "requestStart",
            O = "k-content-frame",
            b = '<div role="tooltip" class="k-widget k-tooltip#if (!autoHide) {# k-tooltip-closable#}#"><div class="k-tooltip-content"></div>#if (!autoHide) {# <div class="k-tooltip-button"><a href="\\#" class="k-icon k-i-close" title="Close"></a></div> #}##if (callout){ #<div class="k-callout k-callout-#=dir#"></div>#}#</div>',
            S = r.template("<iframe frameborder='0' class='" + O + "' src='#= content.url #'>This page requires frames in order to show content</iframe>"),
            C = ".kendoTooltip",
            T = {
                bottom: {
                    origin: "bottom center",
                    position: "top center"
                },
                top: {
                    origin: "top center",
                    position: "bottom center"
                },
                left: {
                    origin: "center left",
                    position: "center right",
                    collision: "fit flip"
                },
                right: {
                    origin: "center right",
                    position: "center left",
                    collision: "fit flip"
                },
                center: {
                    position: "center center",
                    origin: "center center"
                }
            },
            H = {
                top: "bottom",
                bottom: "top",
                left: "right",
                right: "left",
                center: "center"
            },
            x = {
                bottom: "n",
                top: "s",
                left: "e",
                right: "w",
                center: "n"
            },
            A = {
                horizontal: {
                    offset: "top",
                    size: "outerHeight"
                },
                vertical: {
                    offset: "left",
                    size: "outerWidth"
                }
            },
            D = function(t) {
                return t.target.data(r.ns + "title")
            },
            E = u.extend({
                init: function(t, o) {
                    var e, n = this;
                    u.fn.init.call(n, t, o), e = n.options.position.match(/left|right/) ? "horizontal" : "vertical", n.dimensions = A[e], n._documentKeyDownHandler = h(n._documentKeyDown, n), r.support.touch && this._isShownOnMouseEnter() && n.element.on(r.support.mousedown + C, n.options.filter, h(n._showOn, n)), n.element.on(n.options.showOn + C, n.options.filter, h(n._showOn, n)), (this._isShownOnMouseEnter() || this._isShownOnClick()) && n.element.on("mouseenter" + C, n.options.filter, h(n._mouseenter, n)), this.options.autoHide && this._isShownOnMouseEnter() && n.element.on("mouseleave" + C, n.options.filter, h(n._mouseleave, n)), this.options.autoHide && this._isShownOnFocus() && n.element.on("blur" + C, n.options.filter, h(n._blur, n)), r.support.touch && n.element.on(r.support.mousedown + C, n.options.filter, h(n._mouseenter, n))
                },
                options: {
                    name: "Tooltip",
                    filter: "",
                    content: D,
                    showAfter: 100,
                    hideAfter: 100,
                    callout: !0,
                    offset: 0,
                    position: "bottom",
                    showOn: "mouseenter",
                    autoHide: !0,
                    width: null,
                    height: null,
                    animation: {
                        open: {
                            effects: "fade:in",
                            duration: 0
                        },
                        close: {
                            duration: 40,
                            hide: !0
                        }
                    }
                },
                events: [_, g, k, v, y],
                _isShownOnFocus: function() {
                    return this.options.showOn && this.options.showOn.match(/focus/)
                },
                _isShownOnMouseEnter: function() {
                    return this.options.showOn && this.options.showOn.match(/mouseenter/)
                },
                _isShownOnClick: function() {
                    return this.options.showOn && this.options.showOn.match(/click/)
                },
                _mouseenter: function(o) {
                    s(t(o.currentTarget))
                },
                _showOn: function(o) {
                    var e = this,
                        n = t(o.currentTarget);
                    e._isShownOnClick() && !e._isShownOnMouseEnter() ? e._show(n) : e._isShownOnFocus() ? (s(n), e._show(n)) : (clearTimeout(e.timeout), e.timeout = setTimeout(function() {
                        e._show(n)
                    }, e.options.showAfter))
                },
                _appendContent: function(t) {
                    var o, e = this,
                        n = e.options.content,
                        i = e.content,
                        s = e.options.iframe;
                    l(n) && n.url ? ("iframe" in e.options || (s = !d(n.url)), e.trigger(y, {
                        options: n,
                        target: t
                    }), s ? (i.hide(), o = i.find("." + O)[0], o ? o.src = n.url || o.src : i.html(S({
                        content: n
                    })), i.find("." + O).off("load" + C).on("load" + C, function() {
                        e.trigger(k), i.show()
                    })) : (i.empty(), r.ui.progress(i, !0), e._ajaxRequest(n))) : n && c(n) ? (n = n({
                        sender: this,
                        target: t
                    }), i.html(n || "")) : i.html(n), e.angular("compile", function() {
                        return {
                            elements: i
                        }
                    })
                },
                _ajaxRequest: function(t) {
                    var o = this;
                    jQuery.ajax(a({
                        type: "GET",
                        dataType: "html",
                        cache: !1,
                        error: function(t, e) {
                            r.ui.progress(o.content, !1), o.trigger(v, {
                                status: e,
                                xhr: t
                            })
                        },
                        success: h(function(t) {
                            r.ui.progress(o.content, !1), o.content.html(t), o.trigger(k)
                        }, o)
                    }, t))
                },
                _documentKeyDown: function(t) {
                    t.keyCode === r.keys.ESC && this.hide()
                },
                refresh: function() {
                    var t = this,
                        o = t.popup;
                    o && o.options.anchor && t._appendContent(o.options.anchor)
                },
                hide: function() {
                    this.popup && this.popup.close()
                },
                show: function(t) {
                    t = t || this.element, s(t), this._show(t)
                },
                _show: function(t) {
                    var o = this,
                        n = o.target();
                    o.popup || o._initPopup(), n && n[0] != t[0] && (o.popup.close(), o.popup.element.kendoStop(!0, !0)), n && n[0] == t[0] || (o._appendContent(t), o.popup.options.anchor = t), o.popup.one("deactivate", function() {
                        e(t), t.removeAttr(w), this.element.removeAttr("id").attr("aria-hidden", !0), f.off("keydown" + C, o._documentKeyDownHandler)
                    }), o.popup._hovered = !0, o.popup.open()
                },
                _initPopup: function() {
                    var e = this,
                        n = e.options,
                        i = t(r.template(b)({
                            callout: n.callout && "center" !== n.position,
                            dir: x[n.position],
                            autoHide: n.autoHide
                        }));
                    e.popup = new p(i, a({
                        autosize: !0,
                        activate: function() {
                            var t = this.options.anchor,
                                i = t[0].id || e.element[0].id;
                            i && (t.attr(w, i + m), this.element.attr("id", i + m)), n.callout ? e._positionCallout() : e._offset(e.options.position, e.options.offset), this.element.removeAttr("aria-hidden"), f.on("keydown" + C, e._documentKeyDownHandler), e.trigger(_), e.popup._hovered = o
                        },
                        close: function() {
                            e.trigger(g)
                        },
                        copyAnchorStyles: !1,
                        animation: n.animation
                    }, T[n.position])), i.css({
                        width: n.width,
                        height: n.height
                    }), e.content = i.find(".k-tooltip-content"), e.arrow = i.find(".k-callout"), n.autoHide && this._isShownOnMouseEnter() ? i.on("mouseleave" + C, h(e._mouseleave, e)) : i.on("click" + C, ".k-tooltip-button", h(e._closeButtonClick, e))
                },
                _closeButtonClick: function(t) {
                    t.preventDefault(), this.hide()
                },
                _mouseleave: function(t) {
                    var o = this;
                    clearTimeout(o.timeout), o.timeout = setTimeout(function() {
                        o._closePopup(t.currentTarget)
                    }, o.options.hideAfter)
                },
                _blur: function(t) {
                    this._closePopup(t.currentTarget)
                },
                _closePopup: function(o) {
                    this.popup && !this.popup._hovered ? this.popup.close() : e(t(o))
                },
                target: function() {
                    return this.popup ? this.popup.options.anchor : null
                },
                _positionCallout: function() {
                    var o = this,
                        e = o.options.position,
                        n = o.dimensions,
                        i = n.offset,
                        s = o.popup,
                        r = s.options.anchor,
                        u = t(r).offset(),
                        p = t(s.element).offset(),
                        c = x[s.flipped ? H[e] : e],
                        l = u[i] - p[i] + t(r)[n.size]() / 2;
                    o._offset(e, o.options.offset), o.arrow.removeClass("k-callout-n k-callout-s k-callout-w k-callout-e").addClass("k-callout-" + c).css(i, l)
                },
                destroy: function() {
                    var t = this.popup;
                    t && (t.element.off(C), t.destroy()), clearTimeout(this.timeout), this.element.off(C), f.off("keydown" + C, this._documentKeyDownHandler), u.fn.destroy.call(this)
                },
                _offset: function(t, o) {
                    var e = this,
                        n = "top" == t || "left" == t,
                        i = e.popup.flipped,
                        s = n && i || !n && !i ? 1 : -1,
                        u = n ? "margin-" + t : "margin-" + H[t],
                        p = r._outerWidth(e.arrow) / 2 + o;
                    e.popup.wrapper.css(u, p * s + "px")
                }
            });
        r.ui.plugin(E)
    }(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function(t, o, e) {
    (e || o)()
});
//# sourceMappingURL=kendo.tooltip.min.js.map;