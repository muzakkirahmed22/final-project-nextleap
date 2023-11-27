/*! lozad.js - v1.15.0 - 2020-05-23
 * https://github.com/ApoorvSaxena/lozad.js
 * Copyright (c) 2020 Apoorv Saxena; Licensed MIT */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.lozad = e()
}(this, function() {
    "use strict";
    /**
     * Detect IE browser
     * @const {boolean}
     * @private
     */
    var u = "undefined" != typeof document && document.documentMode,
        c = {
            rootMargin: "0px",
            threshold: 0,
            load: function(t) {
                if ("picture" === t.nodeName.toLowerCase()) {
                    var e = document.createElement("img");
                    u && t.getAttribute("data-iesrc") && (e.src = t.getAttribute("data-iesrc")), t.getAttribute("data-alt") && (e.alt = t.getAttribute("data-alt")), t.append(e)
                }
                if ("video" === t.nodeName.toLowerCase() && !t.getAttribute("data-src") && t.children) {
                    for (var r = t.children, a = void 0, i = 0; i <= r.length - 1; i++)(a = r[i].getAttribute("data-src")) && (r[i].src = a);
                    t.load()
                }
                t.getAttribute("data-poster") && (t.poster = t.getAttribute("data-poster")), t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")), t.getAttribute("data-srcset") && t.setAttribute("srcset", t.getAttribute("data-srcset"));
                var o = ",";
                if (t.getAttribute("data-background-delimiter") && (o = t.getAttribute("data-background-delimiter")), t.getAttribute("data-background-image")) t.style.backgroundImage = "url('" + t.getAttribute("data-background-image").split(o).join("'),url('") + "')";
                else if (t.getAttribute("data-background-image-set")) {
                    var n = t.getAttribute("data-background-image-set").split(o),
                        d = n[0].substr(0, n[0].indexOf(" ")) || n[0]; // Substring before ... 1x
                    d = -1 === d.indexOf("url(") ? "url(" + d + ")" : d, 1 === n.length ? t.style.backgroundImage = d : t.setAttribute("style", (t.getAttribute("style") || "") + "background-image: " + d + "; background-image: -webkit-image-set(" + n + "); background-image: image-set(" + n + ")")
                }
                t.getAttribute("data-toggle-class") && t.classList.toggle(t.getAttribute("data-toggle-class"))
            },
            loaded: function() {}
        };

    function l(t) {
        t.setAttribute("data-loaded", !0)
    }
    var b = function(t) {
        return "true" === t.getAttribute("data-loaded")
    };
    return function() {
        var r, a, i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".lozad",
            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            e = Object.assign({}, c, t),
            o = e.root,
            n = e.rootMargin,
            d = e.threshold,
            u = e.load,
            g = e.loaded,
            s = void 0;
        return "undefined" != typeof window && window.IntersectionObserver && (s = new IntersectionObserver((r = u, a = g, function(t, e) {
            t.forEach(function(t) {
                (0 < t.intersectionRatio || t.isIntersecting) && (e.unobserve(t.target), b(t.target) || (r(t.target), l(t.target), a(t.target)))
            })
        }), {
            root: o,
            rootMargin: n,
            threshold: d
        })), {
            observe: function() {
                for (var t = function(t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document;
                        return t instanceof Element ? [t] : t instanceof NodeList ? t : e.querySelectorAll(t)
                    }(i, o), e = 0; e < t.length; e++) b(t[e]) || (s ? s.observe(t[e]) : (u(t[e]), l(t[e]), g(t[e])))
            },
            triggerLoad: function(t) {
                b(t) || (u(t), l(t), g(t))
            },
            observer: s
        }
    }
});