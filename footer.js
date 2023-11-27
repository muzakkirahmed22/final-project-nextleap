/** 
 * Kendo UI v2021.1.204 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/
! function(t, define) {
    define("kendo.notification.min", ["kendo.core.min", "kendo.popup.min"], t)
}(function() {
    return function(t, i) {
        var n = window.kendo,
            e = n.ui.Widget,
            o = t.proxy,
            a = t.extend,
            s = window.setTimeout,
            p = "click",
            d = "show",
            c = "hide",
            l = "k-notification",
            u = ".k-notification-wrap .k-i-close",
            r = "k-hiding",
            f = "info",
            h = "success",
            g = "warning",
            m = "error",
            _ = "top",
            w = "left",
            k = "bottom",
            v = "right",
            P = "up",
            T = ".kendoNotification",
            b = '<div class="k-widget k-popup k-notification"></div>',
            C = '<div class="k-notification-wrap"><span class="k-icon k-i-#=typeIcon#" title="#=typeIcon#"></span><div class="k-notification-content">#=content#</div><span class="k-icon k-i-close" title="Hide"></span></div>',
            y = C.replace("#=content#", "#:content#"),
            S = e.extend({
                init: function(i, o) {
                    var a = this;
                    e.fn.init.call(a, i, o), o = a.options, o.appendTo && t(o.appendTo).is(i) || a.element.hide(), a._compileTemplates(o.templates), a._guid = "_" + n.guid(), a._isRtl = n.support.isRtl(i), a._compileStacking(o.stacking, o.position.top, o.position.left), n.notify(a)
                },
                events: [d, c],
                options: {
                    name: "Notification",
                    position: {
                        pinned: !0,
                        top: null,
                        left: null,
                        bottom: 20,
                        right: 20
                    },
                    stacking: "default",
                    hideOnClick: !0,
                    button: !1,
                    allowHideAfter: 0,
                    autoHideAfter: 5e3,
                    appendTo: null,
                    width: null,
                    height: null,
                    templates: [],
                    animation: {
                        open: {
                            effects: "fade:in",
                            duration: 300
                        },
                        close: {
                            effects: "fade:out",
                            duration: 600,
                            hide: !0
                        }
                    }
                },
                _compileTemplates: function(i) {
                    var e = this,
                        o = n.template;
                    e._compiled = {}, t.each(i, function(i, n) {
                        e._compiled[n.type] = o(n.template || t("#" + n.templateId).html())
                    }), e._defaultCompiled = o(C), e._safeCompiled = o(y)
                },
                _getCompiled: function(t, i) {
                    var n = i ? this._safeCompiled : this._defaultCompiled;
                    return t ? this._compiled[t] || n : n
                },
                _compileStacking: function(t, i, n) {
                    var e, o, a = this,
                        s = {
                            paddingTop: 0,
                            paddingRight: 0,
                            paddingBottom: 0,
                            paddingLeft: 0
                        },
                        p = null !== n ? w : v;
                    switch (t) {
                        case "down":
                            e = k + " " + p, o = _ + " " + p, delete s.paddingBottom;
                            break;
                        case v:
                            e = _ + " " + v, o = _ + " " + w, delete s.paddingRight;
                            break;
                        case w:
                            e = _ + " " + w, o = _ + " " + v, delete s.paddingLeft;
                            break;
                        case P:
                            e = _ + " " + p, o = k + " " + p, delete s.paddingTop;
                            break;
                        default:
                            null !== i ? (e = k + " " + p, o = _ + " " + p, delete s.paddingBottom) : (e = _ + " " + p, o = k + " " + p, delete s.paddingTop)
                    }
                    a._popupOrigin = e, a._popupPosition = o, a._popupPaddings = s
                },
                _attachPopupEvents: function(t, i) {
                    function n(t) {
                        t.on(p + T, function() {
                            o._hidePopup(i)
                        })
                    }
                    var e, o = this,
                        a = t.allowHideAfter,
                        d = !isNaN(a) && a > 0;
                    t.hideOnClick ? i.bind("activate", function() {
                        d ? s(function() {
                            n(i.element)
                        }, a) : n(i.element)
                    }) : t.button && (e = i.element.find(u), d ? s(function() {
                        n(e)
                    }, a) : n(e))
                },
                _showPopup: function(i, e) {
                    var o, p, d = this,
                        c = e.autoHideAfter,
                        l = e.position.left,
                        f = e.position.top;
                    p = t("." + d._guid + ":not(." + r + ")").last(), o = new n.ui.Popup(i, {
                        anchor: p[0] ? p : document.body,
                        origin: d._popupOrigin,
                        position: d._popupPosition,
                        animation: e.animation,
                        copyAnchorStyles: !1,
                        modal: !0,
                        collision: "",
                        isRtl: d._isRtl,
                        close: function() {
                            d._triggerHide(this.element)
                        },
                        deactivate: function(t) {
                            t.sender.element.off(T), t.sender.element.find(u).off(T), t.sender.destroy()
                        }
                    }), d._attachPopupEvents(e, o), i.removeClass("k-group k-reset"), p[0] ? o.open() : (null === l && (l = t(window).width() - i.outerWidth() - e.position.right), null === f && (f = t(window).height() - i.outerHeight() - e.position.bottom), o.open(l, f)), o.wrapper.addClass(d._guid).css(a({
                        margin: 0,
                        zIndex: 10050
                    }, d._popupPaddings)), e.position.pinned ? (o.wrapper.css("position", "fixed"), p[0] && d._togglePin(o.wrapper, !0)) : p[0] || d._togglePin(o.wrapper, !1), c > 0 && s(function() {
                        d._hidePopup(o)
                    }, c)
                },
                _hidePopup: function(t) {
                    t.wrapper.addClass(r), t.close()
                },
                _togglePin: function(i, n) {
                    var e = t(window),
                        o = n ? -1 : 1;
                    i.css({
                        top: parseInt(i.css(_), 10) + o * e.scrollTop(),
                        left: parseInt(i.css(w), 10) + o * e.scrollLeft()
                    })
                },
                _attachStaticEvents: function(t, i) {
                    function n(t) {
                        t.on(p + T, o(e._hideStatic, e, i))
                    }
                    var e = this,
                        a = t.allowHideAfter,
                        d = !isNaN(a) && a > 0;
                    t.hideOnClick ? d ? s(function() {
                        n(i)
                    }, a) : n(i) : t.button && (d ? s(function() {
                        n(i.find(u))
                    }, a) : n(i.find(u)))
                },
                _showStatic: function(i, n) {
                    var e, o = this,
                        a = n.autoHideAfter,
                        p = n.animation,
                        d = n.stacking == P || n.stacking == w ? "prependTo" : "appendTo";
                    i.removeClass("k-popup").addClass(o._guid)[d](n.appendTo).hide().kendoAnimate(p.open || !1), e = o.getNotifications(), e.each(function(i, e) {
                        o._attachStaticEvents(n, t(e)), a > 0 && s(function() {
                            o._hideStatic(t(e))
                        }, a)
                    })
                },
                _hideStatic: function(t) {
                    t.kendoAnimate(a(this.options.animation.close || !1, {
                        complete: function() {
                            t.off(T).find(u).off(T), t.remove()
                        }
                    })), this._triggerHide(t)
                },
                _triggerHide: function(t) {
                    this.trigger(c, {
                        element: t
                    }), this.angular("cleanup", function() {
                        return {
                            elements: t
                        }
                    })
                },
                show: function(e, o, s) {
                    var p, c, u = this,
                        r = u.options,
                        h = t(b);
                    return o || (o = f), null !== e && e !== i && "" !== e && (n.isFunction(e) && (e = e()), c = {
                        typeIcon: o,
                        content: ""
                    }, p = t.isPlainObject(e) ? a(c, e) : a(c, {
                        content: e
                    }), h.addClass(l + "-" + o).toggleClass(l + "-button", r.button).toggleClass(l + "-closable", r.button).attr("data-role", "alert").css({
                        width: r.width,
                        height: r.height
                    }).append(u._getCompiled(o, s)(p)), u.angular("compile", function() {
                        return {
                            elements: h,
                            data: [{
                                dataItem: p
                            }]
                        }
                    }), t(r.appendTo)[0] ? u._showStatic(h, r) : u._showPopup(h, r), u.trigger(d, {
                        element: h
                    })), u
                },
                showText: function(t, i) {
                    this.show(t, i, !0)
                },
                info: function(t) {
                    return this.show(t, f)
                },
                success: function(t) {
                    return this.show(t, h)
                },
                warning: function(t) {
                    return this.show(t, g)
                },
                error: function(t) {
                    return this.show(t, m)
                },
                hide: function() {
                    var i = this,
                        n = i.getNotifications();
                    return n.each(i.options.appendTo ? function(n, e) {
                        i._hideStatic(t(e))
                    } : function(n, e) {
                        var o = t(e).data("kendoPopup");
                        o && i._hidePopup(o)
                    }), i
                },
                getNotifications: function() {
                    var i = this,
                        n = t("." + i._guid + ":not(." + r + ")");
                    return i.options.appendTo ? n : n.children("." + l)
                },
                setOptions: function(t) {
                    var n, o = this;
                    e.fn.setOptions.call(o, t), n = o.options, t.templates !== i && o._compileTemplates(n.templates), t.stacking === i && t.position === i || o._compileStacking(n.stacking, n.position.top, n.position.left)
                },
                destroy: function() {
                    e.fn.destroy.call(this), this.getNotifications().off(T).find(u).off(T)
                }
            });
        n.ui.plugin(S)
    }(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function(t, i, n) {
    (n || i)()
});
//# sourceMappingURL=kendo.notification.min.js.map;
/*! emoji-toolkit 20-09-2019 */
! function(ns) {
    ns.emojiList = {
        ":england:": {
            uc_base: "1f3f4-e0067-e0062-e0065-e006e-e0067-e007f",
            uc_full: "1f3f4-e0067-e0062-e0065-e006e-e0067-e007f",
            shortnames: [],
            category: "flags"
        },
        ":scotland:": {
            uc_base: "1f3f4-e0067-e0062-e0073-e0063-e0074-e007f",
            uc_full: "1f3f4-e0067-e0062-e0073-e0063-e0074-e007f",
            shortnames: [],
            category: "flags"
        },
        ":wales:": {
            uc_base: "1f3f4-e0067-e0062-e0077-e006c-e0073-e007f",
            uc_full: "1f3f4-e0067-e0062-e0077-e006c-e0073-e007f",
            shortnames: [],
            category: "flags"
        },
        ":men_holding_hands_tone2_tone1:": {
            uc_base: "1f468-1f3fc-1f91d-1f468-1f3fb",
            uc_full: "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb",
            shortnames: [":men_holding_hands_medium_light_skin_tone_light_skin_tone:"],
            category: "people"
        },
        ":men_holding_hands_tone3_tone1:": {
            uc_base: "1f468-1f3fd-1f91d-1f468-1f3fb",
            uc_full: "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb",
            shortnames: [":men_holding_hands_medium_skin_tone_light_skin_tone:"],
            category: "people"
        },
        ":men_holding_hands_tone3_tone2:": {
            uc_base: "1f468-1f3fd-1f91d-1f468-1f3fc",
            uc_full: "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc",
            shortnames: [":men_holding_hands_medium_skin_tone_medium_light_skin_tone:"],
            category: "people"
        },
        ":men_holding_hands_tone4_tone1:": {
            uc_base: "1f468-1f3fe-1f91d-1f468-1f3fb",
            uc_full: "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb",
            shortnames: [":men_holding_hands_medium_dark_skin_tone_light_skin_tone:"],
            category: "people"
        },
        ":men_holding_hands_tone4_tone2:": {
            uc_base: "1f468-1f3fe-1f91d-1f468-1f3fc",
            uc_full: "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc",
            shortnames: [":men_holding_hands_medium_dark_skin_tone_medium_light_skin_tone:"],
            category: "people"
        },
        ":men_holding_hands_tone4_tone3:": {
            uc_base: "1f468-1f3fe-1f91d-1f468-1f3fd",
            uc_full: "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd",
            shortnames: [":men_holding_hands_medium_dark_skin_tone_medium_skin_tone:"],
            category: "people"
        },
        ":men_holding_hands_tone5_tone1:": {
            uc_base: "1f468-1f3ff-1f91d-1f468-1f3fb",
            uc_full: "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb",
            shortnames: [":men_holding_hands_dark_skin_tone_light_skin_tone:"],
            category: "people"
        },
        ":men_holding_hands_tone5_tone2:": {
            uc_base: "1f468-1f3ff-1f91d-1f468-1f3fc",
            uc_full: "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc",
            shortnames: [":men_holding_hands_dark_skin_tone_medium_light_skin_tone:"],
            category: "people"
        },
        ":men_holding_hands_tone5_tone3:": {
            uc_base: "1f468-1f3ff-1f91d-1f468-1f3fd",
            uc_full: "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd",
            shortnames: [":men_holding_hands_dark_skin_tone_medium_skin_tone:"],
            category: "people"
        },
        ":men_holding_hands_tone5_tone4:": {
            uc_base: "1f468-1f3ff-1f91d-1f468-1f3fe",
            uc_full: "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe",
            shortnames: [":men_holding_hands_dark_skin_tone_medium_dark_skin_tone:"],
            category: "people"
        },
        ":people_holding_hands_tone1:": {
            uc_base: "1f9d1-1f3fb-1f91d-1f9d1-1f3fb",
            uc_full: "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb",
            shortnames: [":people_holding_hands_light_skin_tone:"],
            category: "people"
        },
        ":people_holding_hands_tone2:": {
            uc_base: "1f9d1-1f3fc-1f91d-1f9d1-1f3fc",
            uc_full: "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc",
            shortnames: [":people_holding_hands_medium_light_skin_tone:"],
            category: "people"
        },
        ":people_holding_hands_tone2_tone1:": {
            uc_base: "1f9d1-1f3fc-1f91d-1f9d1-1f3fb",
            uc_full: "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb",
            shortnames: [":people_holding_hands_medium_light_skin_tone_light_skin_tone:"],
            category: "people"
        },
        ":people_holding_hands_tone3:": {
            uc_base: "1f9d1-1f3fd-1f91d-1f9d1-1f3fd",
            uc_full: "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd",
            shortnames: [":people_holding_hands_medium_skin_tone:"],
            category: "people"
        },
        ":people_holding_hands_tone3_tone1:": {
            uc_base: "1f9d1-1f3fd-1f91d-1f9d1-1f3fb",
            uc_full: "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb",
            shortnames: [":people_holding_hands_medium_skin_tone_light_skin_tone:"],
            category: "people"
        },
        ":people_holding_hands_tone3_tone2:": {
            uc_base: "1f9d1-1f3fd-1f91d-1f9d1-1f3fc",
            uc_full: "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc",
            shortnames: [":people_holding_hands_medium_skin_tone_medium_light_skin_tone:"],
            category: "people"
        },
        ":people_holding_hands_tone4:": {
            uc_base: "1f9d1-1f3fe-1f91d-1f9d1-1f3fe",
            uc_full: "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe",
            shortnames: [":people_holding_hands_medium_dark_skin_tone:"],
            category: "people"
        },
        ":people_holding_hands_tone4_tone1:": {
            uc_base: "1f9d1-1f3fe-1f91d-1f9d1-1f3fb",
            uc_full: "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb",
            shortnames: [":people_holding_hands_medium_dark_skin_tone_light_skin_tone:"],
            category: "people"
        },
        ":people_holding_hands_tone4_tone2:": {
            uc_base: "1f9d1-1f3fe-1f91d-1f9d1-1f3fc",
            uc_full: "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc",
            shortnames: [":people_holding_hands_medium_dark_skin_tone_medium_light_skin_tone:"],
            category: "people"
        },
        ":people_holding_hands_tone4_tone3:": {
            uc_base: "1f9d1-1f3fe-1f91d-1f9d1-1f3fd",
            uc_full: "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd",
            shortnames: [":people_holding_hands_medium_dark_skin_tone_medium_skin_tone:"],
            category: "people"
        },
        ":people_holding_hands_tone5:": {
            uc_base: "1f9d1-1f3ff-1f91d-1f9d1-1f3ff",
            uc_full: "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff",
            shortnames: [":people_holding_hands_dark_skin_tone:"],
            category: "people"
        },
        ":people_holding_hands_tone5_tone1:": {
            uc_base: "1f9d1-1f3ff-1f91d-1f9d1-1f3fb",
            uc_full: "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb",
            shortnames: [":people_holding_hands_dark_skin_tone_light_skin_tone:"],
            category: "people"
        },
        ":people_holding_hands_tone5_tone2:": {
            uc_base: "1f9d1-1f3ff-1f91d-1f9d1-1f3fc",
            uc_full: "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc",
            shortnames: [":people_holding_hands_dark_skin_tone_medium_light_skin_tone:"],
            category: "people"
        },
        ":people_holding_hands_tone5_tone3:": {
            uc_base: "1f9d1-1f3ff-1f91d-1f9d1-1f3fd",
            uc_full: "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd",
            shortnames: [":people_holding_hands_dark_skin_tone_medium_skin_tone:"],
            category: "people"
        },
        ":people_holding_hands_tone5_tone4:": {
            uc_base: "1f9d1-1f3ff-1f91d-1f9d1-1f3fe",
            uc_full: "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe",
            shortnames: [":people_holding_hands_dark_skin_tone_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone1_tone2:": {
            uc_base: "1f469-1f3fb-1f91d-1f468-1f3fc",
            uc_full: "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc",
            shortnames: [":woman_and_man_holding_hands_light_skin_tone_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone1_tone3:": {
            uc_base: "1f469-1f3fb-1f91d-1f468-1f3fd",
            uc_full: "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd",
            shortnames: [":woman_and_man_holding_hands_light_skin_tone_medium_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone1_tone4:": {
            uc_base: "1f469-1f3fb-1f91d-1f468-1f3fe",
            uc_full: "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe",
            shortnames: [":woman_and_man_holding_hands_light_skin_tone_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone1_tone5:": {
            uc_base: "1f469-1f3fb-1f91d-1f468-1f3ff",
            uc_full: "1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff",
            shortnames: [":woman_and_man_holding_hands_light_skin_tone_dark_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone2_tone1:": {
            uc_base: "1f469-1f3fc-1f91d-1f468-1f3fb",
            uc_full: "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb",
            shortnames: [":woman_and_man_holding_hands_medium_light_skin_tone_light_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone2_tone3:": {
            uc_base: "1f469-1f3fc-1f91d-1f468-1f3fd",
            uc_full: "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd",
            shortnames: [":woman_and_man_holding_hands_medium_light_skin_tone_medium_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone2_tone4:": {
            uc_base: "1f469-1f3fc-1f91d-1f468-1f3fe",
            uc_full: "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe",
            shortnames: [":woman_and_man_holding_hands_medium_light_skin_tone_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone2_tone5:": {
            uc_base: "1f469-1f3fc-1f91d-1f468-1f3ff",
            uc_full: "1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff",
            shortnames: [":woman_and_man_holding_hands_medium_light_skin_tone_dark_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone3_tone1:": {
            uc_base: "1f469-1f3fd-1f91d-1f468-1f3fb",
            uc_full: "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb",
            shortnames: [":woman_and_man_holding_hands_medium_skin_tone_light_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone3_tone2:": {
            uc_base: "1f469-1f3fd-1f91d-1f468-1f3fc",
            uc_full: "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc",
            shortnames: [":woman_and_man_holding_hands_medium_skin_tone_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone3_tone4:": {
            uc_base: "1f469-1f3fd-1f91d-1f468-1f3fe",
            uc_full: "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe",
            shortnames: [":woman_and_man_holding_hands_medium_skin_tone_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone3_tone5:": {
            uc_base: "1f469-1f3fd-1f91d-1f468-1f3ff",
            uc_full: "1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff",
            shortnames: [":woman_and_man_holding_hands_medium_skin_tone_dark_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone4_tone1:": {
            uc_base: "1f469-1f3fe-1f91d-1f468-1f3fb",
            uc_full: "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb",
            shortnames: [":woman_and_man_holding_hands_medium_dark_skin_tone_light_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone4_tone2:": {
            uc_base: "1f469-1f3fe-1f91d-1f468-1f3fc",
            uc_full: "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc",
            shortnames: [":woman_and_man_holding_hands_medium_dark_skin_tone_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone4_tone3:": {
            uc_base: "1f469-1f3fe-1f91d-1f468-1f3fd",
            uc_full: "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd",
            shortnames: [":woman_and_man_holding_hands_medium_dark_skin_tone_medium_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone4_tone5:": {
            uc_base: "1f469-1f3fe-1f91d-1f468-1f3ff",
            uc_full: "1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff",
            shortnames: [":woman_and_man_holding_hands_medium_dark_skin_tone_dark_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone5_tone1:": {
            uc_base: "1f469-1f3ff-1f91d-1f468-1f3fb",
            uc_full: "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb",
            shortnames: [":woman_and_man_holding_hands_dark_skin_tone_light_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone5_tone2:": {
            uc_base: "1f469-1f3ff-1f91d-1f468-1f3fc",
            uc_full: "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc",
            shortnames: [":woman_and_man_holding_hands_dark_skin_tone_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone5_tone3:": {
            uc_base: "1f469-1f3ff-1f91d-1f468-1f3fd",
            uc_full: "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd",
            shortnames: [":woman_and_man_holding_hands_dark_skin_tone_medium_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone5_tone4:": {
            uc_base: "1f469-1f3ff-1f91d-1f468-1f3fe",
            uc_full: "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe",
            shortnames: [":woman_and_man_holding_hands_dark_skin_tone_medium_dark_skin_tone:"],
            category: "people"
        },
        ":women_holding_hands_tone2_tone1:": {
            uc_base: "1f469-1f3fc-1f91d-1f469-1f3fb",
            uc_full: "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb",
            shortnames: [":women_holding_hands_medium_light_skin_tone_light_skin_tone:"],
            category: "people"
        },
        ":women_holding_hands_tone3_tone1:": {
            uc_base: "1f469-1f3fd-1f91d-1f469-1f3fb",
            uc_full: "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb",
            shortnames: [":women_holding_hands_medium_skin_tone_light_skin_tone:"],
            category: "people"
        },
        ":women_holding_hands_tone3_tone2:": {
            uc_base: "1f469-1f3fd-1f91d-1f469-1f3fc",
            uc_full: "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc",
            shortnames: [":women_holding_hands_medium_skin_tone_medium_light_skin_tone:"],
            category: "people"
        },
        ":women_holding_hands_tone4_tone1:": {
            uc_base: "1f469-1f3fe-1f91d-1f469-1f3fb",
            uc_full: "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb",
            shortnames: [":women_holding_hands_medium_dark_skin_tone_light_skin_tone:"],
            category: "people"
        },
        ":women_holding_hands_tone4_tone2:": {
            uc_base: "1f469-1f3fe-1f91d-1f469-1f3fc",
            uc_full: "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc",
            shortnames: [":women_holding_hands_medium_dark_skin_tone_medium_light_skin_tone:"],
            category: "people"
        },
        ":women_holding_hands_tone4_tone3:": {
            uc_base: "1f469-1f3fe-1f91d-1f469-1f3fd",
            uc_full: "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd",
            shortnames: [":women_holding_hands_medium_dark_skin_tone_medium_skin_tone:"],
            category: "people"
        },
        ":women_holding_hands_tone5_tone1:": {
            uc_base: "1f469-1f3ff-1f91d-1f469-1f3fb",
            uc_full: "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb",
            shortnames: [":women_holding_hands_dark_skin_tone_light_skin_tone:"],
            category: "people"
        },
        ":women_holding_hands_tone5_tone2:": {
            uc_base: "1f469-1f3ff-1f91d-1f469-1f3fc",
            uc_full: "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc",
            shortnames: [":women_holding_hands_dark_skin_tone_medium_light_skin_tone:"],
            category: "people"
        },
        ":women_holding_hands_tone5_tone3:": {
            uc_base: "1f469-1f3ff-1f91d-1f469-1f3fd",
            uc_full: "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd",
            shortnames: [":women_holding_hands_dark_skin_tone_medium_skin_tone:"],
            category: "people"
        },
        ":women_holding_hands_tone5_tone4:": {
            uc_base: "1f469-1f3ff-1f91d-1f469-1f3fe",
            uc_full: "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe",
            shortnames: [":women_holding_hands_dark_skin_tone_medium_dark_skin_tone:"],
            category: "people"
        },
        ":family_mmbb:": {
            uc_base: "1f468-1f468-1f466-1f466",
            uc_full: "1f468-200d-1f468-200d-1f466-200d-1f466",
            shortnames: [],
            category: "people"
        },
        ":family_mmgb:": {
            uc_base: "1f468-1f468-1f467-1f466",
            uc_full: "1f468-200d-1f468-200d-1f467-200d-1f466",
            shortnames: [],
            category: "people"
        },
        ":family_mmgg:": {
            uc_base: "1f468-1f468-1f467-1f467",
            uc_full: "1f468-200d-1f468-200d-1f467-200d-1f467",
            shortnames: [],
            category: "people"
        },
        ":family_mwbb:": {
            uc_base: "1f468-1f469-1f466-1f466",
            uc_full: "1f468-200d-1f469-200d-1f466-200d-1f466",
            shortnames: [],
            category: "people"
        },
        ":family_mwgb:": {
            uc_base: "1f468-1f469-1f467-1f466",
            uc_full: "1f468-200d-1f469-200d-1f467-200d-1f466",
            shortnames: [],
            category: "people"
        },
        ":family_mwgg:": {
            uc_base: "1f468-1f469-1f467-1f467",
            uc_full: "1f468-200d-1f469-200d-1f467-200d-1f467",
            shortnames: [],
            category: "people"
        },
        ":family_wwbb:": {
            uc_base: "1f469-1f469-1f466-1f466",
            uc_full: "1f469-200d-1f469-200d-1f466-200d-1f466",
            shortnames: [],
            category: "people"
        },
        ":family_wwgb:": {
            uc_base: "1f469-1f469-1f467-1f466",
            uc_full: "1f469-200d-1f469-200d-1f467-200d-1f466",
            shortnames: [],
            category: "people"
        },
        ":family_wwgg:": {
            uc_base: "1f469-1f469-1f467-1f467",
            uc_full: "1f469-200d-1f469-200d-1f467-200d-1f467",
            shortnames: [],
            category: "people"
        },
        ":kiss_mm:": {
            uc_base: "1f468-2764-1f48b-1f468",
            uc_full: "1f468-200d-2764-fe0f-200d-1f48b-1f468",
            shortnames: [":couplekiss_mm:"],
            category: "people"
        },
        ":kiss_woman_man:": {
            uc_base: "1f469-2764-1f48b-1f468",
            uc_full: "1f469-200d-2764-fe0f-200d-1f48b-1f468",
            shortnames: [],
            category: "people"
        },
        ":kiss_ww:": {
            uc_base: "1f469-2764-1f48b-1f469",
            uc_full: "1f469-200d-2764-fe0f-200d-1f48b-1f469",
            shortnames: [":couplekiss_ww:"],
            category: "people"
        },
        ":family_man_boy_boy:": {
            uc_base: "1f468-1f466-1f466",
            uc_full: "1f468-200d-1f466-200d-1f466",
            shortnames: [],
            category: "people"
        },
        ":family_man_girl_boy:": {
            uc_base: "1f468-1f467-1f466",
            uc_full: "1f468-200d-1f467-200d-1f466",
            shortnames: [],
            category: "people"
        },
        ":family_man_girl_girl:": {
            uc_base: "1f468-1f467-1f467",
            uc_full: "1f468-200d-1f467-200d-1f467",
            shortnames: [],
            category: "people"
        },
        ":family_man_woman_boy:": {
            uc_base: "1f468-1f469-1f466",
            uc_full: "1f468-200d-1f469-200d-1f466",
            shortnames: [],
            category: "people"
        },
        ":family_mmb:": {
            uc_base: "1f468-1f468-1f466",
            uc_full: "1f468-200d-1f468-200d-1f466",
            shortnames: [],
            category: "people"
        },
        ":family_mmg:": {
            uc_base: "1f468-1f468-1f467",
            uc_full: "1f468-200d-1f468-200d-1f467",
            shortnames: [],
            category: "people"
        },
        ":family_mwg:": {
            uc_base: "1f468-1f469-1f467",
            uc_full: "1f468-200d-1f469-200d-1f467",
            shortnames: [],
            category: "people"
        },
        ":family_woman_boy_boy:": {
            uc_base: "1f469-1f466-1f466",
            uc_full: "1f469-200d-1f466-200d-1f466",
            shortnames: [],
            category: "people"
        },
        ":family_woman_girl_boy:": {
            uc_base: "1f469-1f467-1f466",
            uc_full: "1f469-200d-1f467-200d-1f466",
            shortnames: [],
            category: "people"
        },
        ":family_woman_girl_girl:": {
            uc_base: "1f469-1f467-1f467",
            uc_full: "1f469-200d-1f467-200d-1f467",
            shortnames: [],
            category: "people"
        },
        ":family_wwb:": {
            uc_base: "1f469-1f469-1f466",
            uc_full: "1f469-200d-1f469-200d-1f466",
            shortnames: [],
            category: "people"
        },
        ":family_wwg:": {
            uc_base: "1f469-1f469-1f467",
            uc_full: "1f469-200d-1f469-200d-1f467",
            shortnames: [],
            category: "people"
        },
        ":man_artist_tone1:": {
            uc_base: "1f468-1f3fb-1f3a8",
            uc_full: "1f468-1f3fb-200d-1f3a8",
            shortnames: [":man_artist_light_skin_tone:"],
            category: "people"
        },
        ":man_artist_tone2:": {
            uc_base: "1f468-1f3fc-1f3a8",
            uc_full: "1f468-1f3fc-200d-1f3a8",
            shortnames: [":man_artist_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_artist_tone3:": {
            uc_base: "1f468-1f3fd-1f3a8",
            uc_full: "1f468-1f3fd-200d-1f3a8",
            shortnames: [":man_artist_medium_skin_tone:"],
            category: "people"
        },
        ":man_artist_tone4:": {
            uc_base: "1f468-1f3fe-1f3a8",
            uc_full: "1f468-1f3fe-200d-1f3a8",
            shortnames: [":man_artist_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_artist_tone5:": {
            uc_base: "1f468-1f3ff-1f3a8",
            uc_full: "1f468-1f3ff-200d-1f3a8",
            shortnames: [":man_artist_dark_skin_tone:"],
            category: "people"
        },
        ":man_astronaut_tone1:": {
            uc_base: "1f468-1f3fb-1f680",
            uc_full: "1f468-1f3fb-200d-1f680",
            shortnames: [":man_astronaut_light_skin_tone:"],
            category: "people"
        },
        ":man_astronaut_tone2:": {
            uc_base: "1f468-1f3fc-1f680",
            uc_full: "1f468-1f3fc-200d-1f680",
            shortnames: [":man_astronaut_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_astronaut_tone3:": {
            uc_base: "1f468-1f3fd-1f680",
            uc_full: "1f468-1f3fd-200d-1f680",
            shortnames: [":man_astronaut_medium_skin_tone:"],
            category: "people"
        },
        ":man_astronaut_tone4:": {
            uc_base: "1f468-1f3fe-1f680",
            uc_full: "1f468-1f3fe-200d-1f680",
            shortnames: [":man_astronaut_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_astronaut_tone5:": {
            uc_base: "1f468-1f3ff-1f680",
            uc_full: "1f468-1f3ff-200d-1f680",
            shortnames: [":man_astronaut_dark_skin_tone:"],
            category: "people"
        },
        ":man_bald_tone1:": {
            uc_base: "1f468-1f3fb-1f9b2",
            uc_full: "1f468-1f3fb-200d-1f9b2",
            shortnames: [":man_bald_light_skin_tone:"],
            category: "people"
        },
        ":man_bald_tone2:": {
            uc_base: "1f468-1f3fc-1f9b2",
            uc_full: "1f468-1f3fc-200d-1f9b2",
            shortnames: [":man_bald_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_bald_tone3:": {
            uc_base: "1f468-1f3fd-1f9b2",
            uc_full: "1f468-1f3fd-200d-1f9b2",
            shortnames: [":man_bald_medium_skin_tone:"],
            category: "people"
        },
        ":man_bald_tone4:": {
            uc_base: "1f468-1f3fe-1f9b2",
            uc_full: "1f468-1f3fe-200d-1f9b2",
            shortnames: [":man_bald_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_bald_tone5:": {
            uc_base: "1f468-1f3ff-1f9b2",
            uc_full: "1f468-1f3ff-200d-1f9b2",
            shortnames: [":man_bald_dark_skin_tone:"],
            category: "people"
        },
        ":man_cook_tone1:": {
            uc_base: "1f468-1f3fb-1f373",
            uc_full: "1f468-1f3fb-200d-1f373",
            shortnames: [":man_cook_light_skin_tone:"],
            category: "people"
        },
        ":man_cook_tone2:": {
            uc_base: "1f468-1f3fc-1f373",
            uc_full: "1f468-1f3fc-200d-1f373",
            shortnames: [":man_cook_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_cook_tone3:": {
            uc_base: "1f468-1f3fd-1f373",
            uc_full: "1f468-1f3fd-200d-1f373",
            shortnames: [":man_cook_medium_skin_tone:"],
            category: "people"
        },
        ":man_cook_tone4:": {
            uc_base: "1f468-1f3fe-1f373",
            uc_full: "1f468-1f3fe-200d-1f373",
            shortnames: [":man_cook_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_cook_tone5:": {
            uc_base: "1f468-1f3ff-1f373",
            uc_full: "1f468-1f3ff-200d-1f373",
            shortnames: [":man_cook_dark_skin_tone:"],
            category: "people"
        },
        ":man_curly_haired_tone1:": {
            uc_base: "1f468-1f3fb-1f9b1",
            uc_full: "1f468-1f3fb-200d-1f9b1",
            shortnames: [":man_curly_haired_light_skin_tone:"],
            category: "people"
        },
        ":man_curly_haired_tone2:": {
            uc_base: "1f468-1f3fc-1f9b1",
            uc_full: "1f468-1f3fc-200d-1f9b1",
            shortnames: [":man_curly_haired_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_curly_haired_tone3:": {
            uc_base: "1f468-1f3fd-1f9b1",
            uc_full: "1f468-1f3fd-200d-1f9b1",
            shortnames: [":man_curly_haired_medium_skin_tone:"],
            category: "people"
        },
        ":man_curly_haired_tone4:": {
            uc_base: "1f468-1f3fe-1f9b1",
            uc_full: "1f468-1f3fe-200d-1f9b1",
            shortnames: [":man_curly_haired_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_curly_haired_tone5:": {
            uc_base: "1f468-1f3ff-1f9b1",
            uc_full: "1f468-1f3ff-200d-1f9b1",
            shortnames: [":man_curly_haired_dark_skin_tone:"],
            category: "people"
        },
        ":man_factory_worker_tone1:": {
            uc_base: "1f468-1f3fb-1f3ed",
            uc_full: "1f468-1f3fb-200d-1f3ed",
            shortnames: [":man_factory_worker_light_skin_tone:"],
            category: "people"
        },
        ":man_factory_worker_tone2:": {
            uc_base: "1f468-1f3fc-1f3ed",
            uc_full: "1f468-1f3fc-200d-1f3ed",
            shortnames: [":man_factory_worker_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_factory_worker_tone3:": {
            uc_base: "1f468-1f3fd-1f3ed",
            uc_full: "1f468-1f3fd-200d-1f3ed",
            shortnames: [":man_factory_worker_medium_skin_tone:"],
            category: "people"
        },
        ":man_factory_worker_tone4:": {
            uc_base: "1f468-1f3fe-1f3ed",
            uc_full: "1f468-1f3fe-200d-1f3ed",
            shortnames: [":man_factory_worker_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_factory_worker_tone5:": {
            uc_base: "1f468-1f3ff-1f3ed",
            uc_full: "1f468-1f3ff-200d-1f3ed",
            shortnames: [":man_factory_worker_dark_skin_tone:"],
            category: "people"
        },
        ":man_farmer_tone1:": {
            uc_base: "1f468-1f3fb-1f33e",
            uc_full: "1f468-1f3fb-200d-1f33e",
            shortnames: [":man_farmer_light_skin_tone:"],
            category: "people"
        },
        ":man_farmer_tone2:": {
            uc_base: "1f468-1f3fc-1f33e",
            uc_full: "1f468-1f3fc-200d-1f33e",
            shortnames: [":man_farmer_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_farmer_tone3:": {
            uc_base: "1f468-1f3fd-1f33e",
            uc_full: "1f468-1f3fd-200d-1f33e",
            shortnames: [":man_farmer_medium_skin_tone:"],
            category: "people"
        },
        ":man_farmer_tone4:": {
            uc_base: "1f468-1f3fe-1f33e",
            uc_full: "1f468-1f3fe-200d-1f33e",
            shortnames: [":man_farmer_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_farmer_tone5:": {
            uc_base: "1f468-1f3ff-1f33e",
            uc_full: "1f468-1f3ff-200d-1f33e",
            shortnames: [":man_farmer_dark_skin_tone:"],
            category: "people"
        },
        ":man_firefighter_tone1:": {
            uc_base: "1f468-1f3fb-1f692",
            uc_full: "1f468-1f3fb-200d-1f692",
            shortnames: [":man_firefighter_light_skin_tone:"],
            category: "people"
        },
        ":man_firefighter_tone2:": {
            uc_base: "1f468-1f3fc-1f692",
            uc_full: "1f468-1f3fc-200d-1f692",
            shortnames: [":man_firefighter_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_firefighter_tone3:": {
            uc_base: "1f468-1f3fd-1f692",
            uc_full: "1f468-1f3fd-200d-1f692",
            shortnames: [":man_firefighter_medium_skin_tone:"],
            category: "people"
        },
        ":man_firefighter_tone4:": {
            uc_base: "1f468-1f3fe-1f692",
            uc_full: "1f468-1f3fe-200d-1f692",
            shortnames: [":man_firefighter_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_firefighter_tone5:": {
            uc_base: "1f468-1f3ff-1f692",
            uc_full: "1f468-1f3ff-200d-1f692",
            shortnames: [":man_firefighter_dark_skin_tone:"],
            category: "people"
        },
        ":man_in_manual_wheelchair_tone1:": {
            uc_base: "1f468-1f3fb-1f9bd",
            uc_full: "1f468-1f3fb-200d-1f9bd",
            shortnames: [":man_in_manual_wheelchair_light_skin_tone:"],
            category: "people"
        },
        ":man_in_manual_wheelchair_tone2:": {
            uc_base: "1f468-1f3fc-1f9bd",
            uc_full: "1f468-1f3fc-200d-1f9bd",
            shortnames: [":man_in_manual_wheelchair_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_in_manual_wheelchair_tone3:": {
            uc_base: "1f468-1f3fd-1f9bd",
            uc_full: "1f468-1f3fd-200d-1f9bd",
            shortnames: [":man_in_manual_wheelchair_medium_skin_tone:"],
            category: "people"
        },
        ":man_in_manual_wheelchair_tone4:": {
            uc_base: "1f468-1f3fe-1f9bd",
            uc_full: "1f468-1f3fe-200d-1f9bd",
            shortnames: [":man_in_manual_wheelchair_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_in_manual_wheelchair_tone5:": {
            uc_base: "1f468-1f3ff-1f9bd",
            uc_full: "1f468-1f3ff-200d-1f9bd",
            shortnames: [":man_in_manual_wheelchair_dark_skin_tone:"],
            category: "people"
        },
        ":man_in_motorized_wheelchair_tone1:": {
            uc_base: "1f468-1f3fb-1f9bc",
            uc_full: "1f468-1f3fb-200d-1f9bc",
            shortnames: [":man_in_motorized_wheelchair_light_skin_tone:"],
            category: "people"
        },
        ":man_in_motorized_wheelchair_tone2:": {
            uc_base: "1f468-1f3fc-1f9bc",
            uc_full: "1f468-1f3fc-200d-1f9bc",
            shortnames: [":man_in_motorized_wheelchair_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_in_motorized_wheelchair_tone3:": {
            uc_base: "1f468-1f3fd-1f9bc",
            uc_full: "1f468-1f3fd-200d-1f9bc",
            shortnames: [":man_in_motorized_wheelchair_medium_skin_tone:"],
            category: "people"
        },
        ":man_in_motorized_wheelchair_tone4:": {
            uc_base: "1f468-1f3fe-1f9bc",
            uc_full: "1f468-1f3fe-200d-1f9bc",
            shortnames: [":man_in_motorized_wheelchair_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_in_motorized_wheelchair_tone5:": {
            uc_base: "1f468-1f3ff-1f9bc",
            uc_full: "1f468-1f3ff-200d-1f9bc",
            shortnames: [":man_in_motorized_wheelchair_dark_skin_tone:"],
            category: "people"
        },
        ":man_mechanic_tone1:": {
            uc_base: "1f468-1f3fb-1f527",
            uc_full: "1f468-1f3fb-200d-1f527",
            shortnames: [":man_mechanic_light_skin_tone:"],
            category: "people"
        },
        ":man_mechanic_tone2:": {
            uc_base: "1f468-1f3fc-1f527",
            uc_full: "1f468-1f3fc-200d-1f527",
            shortnames: [":man_mechanic_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_mechanic_tone3:": {
            uc_base: "1f468-1f3fd-1f527",
            uc_full: "1f468-1f3fd-200d-1f527",
            shortnames: [":man_mechanic_medium_skin_tone:"],
            category: "people"
        },
        ":man_mechanic_tone4:": {
            uc_base: "1f468-1f3fe-1f527",
            uc_full: "1f468-1f3fe-200d-1f527",
            shortnames: [":man_mechanic_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_mechanic_tone5:": {
            uc_base: "1f468-1f3ff-1f527",
            uc_full: "1f468-1f3ff-200d-1f527",
            shortnames: [":man_mechanic_dark_skin_tone:"],
            category: "people"
        },
        ":man_office_worker_tone1:": {
            uc_base: "1f468-1f3fb-1f4bc",
            uc_full: "1f468-1f3fb-200d-1f4bc",
            shortnames: [":man_office_worker_light_skin_tone:"],
            category: "people"
        },
        ":man_office_worker_tone2:": {
            uc_base: "1f468-1f3fc-1f4bc",
            uc_full: "1f468-1f3fc-200d-1f4bc",
            shortnames: [":man_office_worker_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_office_worker_tone3:": {
            uc_base: "1f468-1f3fd-1f4bc",
            uc_full: "1f468-1f3fd-200d-1f4bc",
            shortnames: [":man_office_worker_medium_skin_tone:"],
            category: "people"
        },
        ":man_office_worker_tone4:": {
            uc_base: "1f468-1f3fe-1f4bc",
            uc_full: "1f468-1f3fe-200d-1f4bc",
            shortnames: [":man_office_worker_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_office_worker_tone5:": {
            uc_base: "1f468-1f3ff-1f4bc",
            uc_full: "1f468-1f3ff-200d-1f4bc",
            shortnames: [":man_office_worker_dark_skin_tone:"],
            category: "people"
        },
        ":man_red_haired_tone1:": {
            uc_base: "1f468-1f3fb-1f9b0",
            uc_full: "1f468-1f3fb-200d-1f9b0",
            shortnames: [":man_red_haired_light_skin_tone:"],
            category: "people"
        },
        ":man_red_haired_tone2:": {
            uc_base: "1f468-1f3fc-1f9b0",
            uc_full: "1f468-1f3fc-200d-1f9b0",
            shortnames: [":man_red_haired_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_red_haired_tone3:": {
            uc_base: "1f468-1f3fd-1f9b0",
            uc_full: "1f468-1f3fd-200d-1f9b0",
            shortnames: [":man_red_haired_medium_skin_tone:"],
            category: "people"
        },
        ":man_red_haired_tone4:": {
            uc_base: "1f468-1f3fe-1f9b0",
            uc_full: "1f468-1f3fe-200d-1f9b0",
            shortnames: [":man_red_haired_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_red_haired_tone5:": {
            uc_base: "1f468-1f3ff-1f9b0",
            uc_full: "1f468-1f3ff-200d-1f9b0",
            shortnames: [":man_red_haired_dark_skin_tone:"],
            category: "people"
        },
        ":man_scientist_tone1:": {
            uc_base: "1f468-1f3fb-1f52c",
            uc_full: "1f468-1f3fb-200d-1f52c",
            shortnames: [":man_scientist_light_skin_tone:"],
            category: "people"
        },
        ":man_scientist_tone2:": {
            uc_base: "1f468-1f3fc-1f52c",
            uc_full: "1f468-1f3fc-200d-1f52c",
            shortnames: [":man_scientist_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_scientist_tone3:": {
            uc_base: "1f468-1f3fd-1f52c",
            uc_full: "1f468-1f3fd-200d-1f52c",
            shortnames: [":man_scientist_medium_skin_tone:"],
            category: "people"
        },
        ":man_scientist_tone4:": {
            uc_base: "1f468-1f3fe-1f52c",
            uc_full: "1f468-1f3fe-200d-1f52c",
            shortnames: [":man_scientist_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_scientist_tone5:": {
            uc_base: "1f468-1f3ff-1f52c",
            uc_full: "1f468-1f3ff-200d-1f52c",
            shortnames: [":man_scientist_dark_skin_tone:"],
            category: "people"
        },
        ":man_singer_tone1:": {
            uc_base: "1f468-1f3fb-1f3a4",
            uc_full: "1f468-1f3fb-200d-1f3a4",
            shortnames: [":man_singer_light_skin_tone:"],
            category: "people"
        },
        ":man_singer_tone2:": {
            uc_base: "1f468-1f3fc-1f3a4",
            uc_full: "1f468-1f3fc-200d-1f3a4",
            shortnames: [":man_singer_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_singer_tone3:": {
            uc_base: "1f468-1f3fd-1f3a4",
            uc_full: "1f468-1f3fd-200d-1f3a4",
            shortnames: [":man_singer_medium_skin_tone:"],
            category: "people"
        },
        ":man_singer_tone4:": {
            uc_base: "1f468-1f3fe-1f3a4",
            uc_full: "1f468-1f3fe-200d-1f3a4",
            shortnames: [":man_singer_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_singer_tone5:": {
            uc_base: "1f468-1f3ff-1f3a4",
            uc_full: "1f468-1f3ff-200d-1f3a4",
            shortnames: [":man_singer_dark_skin_tone:"],
            category: "people"
        },
        ":man_student_tone1:": {
            uc_base: "1f468-1f3fb-1f393",
            uc_full: "1f468-1f3fb-200d-1f393",
            shortnames: [":man_student_light_skin_tone:"],
            category: "people"
        },
        ":man_student_tone2:": {
            uc_base: "1f468-1f3fc-1f393",
            uc_full: "1f468-1f3fc-200d-1f393",
            shortnames: [":man_student_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_student_tone3:": {
            uc_base: "1f468-1f3fd-1f393",
            uc_full: "1f468-1f3fd-200d-1f393",
            shortnames: [":man_student_medium_skin_tone:"],
            category: "people"
        },
        ":man_student_tone4:": {
            uc_base: "1f468-1f3fe-1f393",
            uc_full: "1f468-1f3fe-200d-1f393",
            shortnames: [":man_student_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_student_tone5:": {
            uc_base: "1f468-1f3ff-1f393",
            uc_full: "1f468-1f3ff-200d-1f393",
            shortnames: [":man_student_dark_skin_tone:"],
            category: "people"
        },
        ":man_teacher_tone1:": {
            uc_base: "1f468-1f3fb-1f3eb",
            uc_full: "1f468-1f3fb-200d-1f3eb",
            shortnames: [":man_teacher_light_skin_tone:"],
            category: "people"
        },
        ":man_teacher_tone2:": {
            uc_base: "1f468-1f3fc-1f3eb",
            uc_full: "1f468-1f3fc-200d-1f3eb",
            shortnames: [":man_teacher_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_teacher_tone3:": {
            uc_base: "1f468-1f3fd-1f3eb",
            uc_full: "1f468-1f3fd-200d-1f3eb",
            shortnames: [":man_teacher_medium_skin_tone:"],
            category: "people"
        },
        ":man_teacher_tone4:": {
            uc_base: "1f468-1f3fe-1f3eb",
            uc_full: "1f468-1f3fe-200d-1f3eb",
            shortnames: [":man_teacher_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_teacher_tone5:": {
            uc_base: "1f468-1f3ff-1f3eb",
            uc_full: "1f468-1f3ff-200d-1f3eb",
            shortnames: [":man_teacher_dark_skin_tone:"],
            category: "people"
        },
        ":man_technologist_tone1:": {
            uc_base: "1f468-1f3fb-1f4bb",
            uc_full: "1f468-1f3fb-200d-1f4bb",
            shortnames: [":man_technologist_light_skin_tone:"],
            category: "people"
        },
        ":man_technologist_tone2:": {
            uc_base: "1f468-1f3fc-1f4bb",
            uc_full: "1f468-1f3fc-200d-1f4bb",
            shortnames: [":man_technologist_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_technologist_tone3:": {
            uc_base: "1f468-1f3fd-1f4bb",
            uc_full: "1f468-1f3fd-200d-1f4bb",
            shortnames: [":man_technologist_medium_skin_tone:"],
            category: "people"
        },
        ":man_technologist_tone4:": {
            uc_base: "1f468-1f3fe-1f4bb",
            uc_full: "1f468-1f3fe-200d-1f4bb",
            shortnames: [":man_technologist_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_technologist_tone5:": {
            uc_base: "1f468-1f3ff-1f4bb",
            uc_full: "1f468-1f3ff-200d-1f4bb",
            shortnames: [":man_technologist_dark_skin_tone:"],
            category: "people"
        },
        ":man_white_haired_tone1:": {
            uc_base: "1f468-1f3fb-1f9b3",
            uc_full: "1f468-1f3fb-200d-1f9b3",
            shortnames: [":man_white_haired_light_skin_tone:"],
            category: "people"
        },
        ":man_white_haired_tone2:": {
            uc_base: "1f468-1f3fc-1f9b3",
            uc_full: "1f468-1f3fc-200d-1f9b3",
            shortnames: [":man_white_haired_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_white_haired_tone3:": {
            uc_base: "1f468-1f3fd-1f9b3",
            uc_full: "1f468-1f3fd-200d-1f9b3",
            shortnames: [":man_white_haired_medium_skin_tone:"],
            category: "people"
        },
        ":man_white_haired_tone4:": {
            uc_base: "1f468-1f3fe-1f9b3",
            uc_full: "1f468-1f3fe-200d-1f9b3",
            shortnames: [":man_white_haired_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_white_haired_tone5:": {
            uc_base: "1f468-1f3ff-1f9b3",
            uc_full: "1f468-1f3ff-200d-1f9b3",
            shortnames: [":man_white_haired_dark_skin_tone:"],
            category: "people"
        },
        ":man_with_probing_cane_tone1:": {
            uc_base: "1f468-1f3fb-1f9af",
            uc_full: "1f468-1f3fb-200d-1f9af",
            shortnames: [":man_with_probing_cane_light_skin_tone:"],
            category: "people"
        },
        ":man_with_probing_cane_tone2:": {
            uc_base: "1f468-1f3fc-1f9af",
            uc_full: "1f468-1f3fc-200d-1f9af",
            shortnames: [":man_with_probing_cane_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_with_probing_cane_tone3:": {
            uc_base: "1f468-1f3fd-1f9af",
            uc_full: "1f468-1f3fd-200d-1f9af",
            shortnames: [":man_with_probing_cane_medium_skin_tone:"],
            category: "people"
        },
        ":man_with_probing_cane_tone4:": {
            uc_base: "1f468-1f3fe-1f9af",
            uc_full: "1f468-1f3fe-200d-1f9af",
            shortnames: [":man_with_probing_cane_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_with_probing_cane_tone5:": {
            uc_base: "1f468-1f3ff-1f9af",
            uc_full: "1f468-1f3ff-200d-1f9af",
            shortnames: [":man_with_probing_cane_dark_skin_tone:"],
            category: "people"
        },
        ":people_holding_hands:": {
            uc_base: "1f9d1-1f91d-1f9d1",
            uc_full: "1f9d1-200d-1f91d-200d-1f9d1",
            shortnames: [],
            category: "people"
        },
        ":woman_artist_tone1:": {
            uc_base: "1f469-1f3fb-1f3a8",
            uc_full: "1f469-1f3fb-200d-1f3a8",
            shortnames: [":woman_artist_light_skin_tone:"],
            category: "people"
        },
        ":woman_artist_tone2:": {
            uc_base: "1f469-1f3fc-1f3a8",
            uc_full: "1f469-1f3fc-200d-1f3a8",
            shortnames: [":woman_artist_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_artist_tone3:": {
            uc_base: "1f469-1f3fd-1f3a8",
            uc_full: "1f469-1f3fd-200d-1f3a8",
            shortnames: [":woman_artist_medium_skin_tone:"],
            category: "people"
        },
        ":woman_artist_tone4:": {
            uc_base: "1f469-1f3fe-1f3a8",
            uc_full: "1f469-1f3fe-200d-1f3a8",
            shortnames: [":woman_artist_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_artist_tone5:": {
            uc_base: "1f469-1f3ff-1f3a8",
            uc_full: "1f469-1f3ff-200d-1f3a8",
            shortnames: [":woman_artist_dark_skin_tone:"],
            category: "people"
        },
        ":woman_astronaut_tone1:": {
            uc_base: "1f469-1f3fb-1f680",
            uc_full: "1f469-1f3fb-200d-1f680",
            shortnames: [":woman_astronaut_light_skin_tone:"],
            category: "people"
        },
        ":woman_astronaut_tone2:": {
            uc_base: "1f469-1f3fc-1f680",
            uc_full: "1f469-1f3fc-200d-1f680",
            shortnames: [":woman_astronaut_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_astronaut_tone3:": {
            uc_base: "1f469-1f3fd-1f680",
            uc_full: "1f469-1f3fd-200d-1f680",
            shortnames: [":woman_astronaut_medium_skin_tone:"],
            category: "people"
        },
        ":woman_astronaut_tone4:": {
            uc_base: "1f469-1f3fe-1f680",
            uc_full: "1f469-1f3fe-200d-1f680",
            shortnames: [":woman_astronaut_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_astronaut_tone5:": {
            uc_base: "1f469-1f3ff-1f680",
            uc_full: "1f469-1f3ff-200d-1f680",
            shortnames: [":woman_astronaut_dark_skin_tone:"],
            category: "people"
        },
        ":woman_bald_tone1:": {
            uc_base: "1f469-1f3fb-1f9b2",
            uc_full: "1f469-1f3fb-200d-1f9b2",
            shortnames: [":woman_bald_light_skin_tone:"],
            category: "people"
        },
        ":woman_bald_tone2:": {
            uc_base: "1f469-1f3fc-1f9b2",
            uc_full: "1f469-1f3fc-200d-1f9b2",
            shortnames: [":woman_bald_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_bald_tone3:": {
            uc_base: "1f469-1f3fd-1f9b2",
            uc_full: "1f469-1f3fd-200d-1f9b2",
            shortnames: [":woman_bald_medium_skin_tone:"],
            category: "people"
        },
        ":woman_bald_tone4:": {
            uc_base: "1f469-1f3fe-1f9b2",
            uc_full: "1f469-1f3fe-200d-1f9b2",
            shortnames: [":woman_bald_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_bald_tone5:": {
            uc_base: "1f469-1f3ff-1f9b2",
            uc_full: "1f469-1f3ff-200d-1f9b2",
            shortnames: [":woman_bald_dark_skin_tone:"],
            category: "people"
        },
        ":woman_cook_tone1:": {
            uc_base: "1f469-1f3fb-1f373",
            uc_full: "1f469-1f3fb-200d-1f373",
            shortnames: [":woman_cook_light_skin_tone:"],
            category: "people"
        },
        ":woman_cook_tone2:": {
            uc_base: "1f469-1f3fc-1f373",
            uc_full: "1f469-1f3fc-200d-1f373",
            shortnames: [":woman_cook_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_cook_tone3:": {
            uc_base: "1f469-1f3fd-1f373",
            uc_full: "1f469-1f3fd-200d-1f373",
            shortnames: [":woman_cook_medium_skin_tone:"],
            category: "people"
        },
        ":woman_cook_tone4:": {
            uc_base: "1f469-1f3fe-1f373",
            uc_full: "1f469-1f3fe-200d-1f373",
            shortnames: [":woman_cook_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_cook_tone5:": {
            uc_base: "1f469-1f3ff-1f373",
            uc_full: "1f469-1f3ff-200d-1f373",
            shortnames: [":woman_cook_dark_skin_tone:"],
            category: "people"
        },
        ":woman_curly_haired_tone1:": {
            uc_base: "1f469-1f3fb-1f9b1",
            uc_full: "1f469-1f3fb-200d-1f9b1",
            shortnames: [":woman_curly_haired_light_skin_tone:"],
            category: "people"
        },
        ":woman_curly_haired_tone2:": {
            uc_base: "1f469-1f3fc-1f9b1",
            uc_full: "1f469-1f3fc-200d-1f9b1",
            shortnames: [":woman_curly_haired_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_curly_haired_tone3:": {
            uc_base: "1f469-1f3fd-1f9b1",
            uc_full: "1f469-1f3fd-200d-1f9b1",
            shortnames: [":woman_curly_haired_medium_skin_tone:"],
            category: "people"
        },
        ":woman_curly_haired_tone4:": {
            uc_base: "1f469-1f3fe-1f9b1",
            uc_full: "1f469-1f3fe-200d-1f9b1",
            shortnames: [":woman_curly_haired_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_curly_haired_tone5:": {
            uc_base: "1f469-1f3ff-1f9b1",
            uc_full: "1f469-1f3ff-200d-1f9b1",
            shortnames: [":woman_curly_haired_dark_skin_tone:"],
            category: "people"
        },
        ":woman_factory_worker_tone1:": {
            uc_base: "1f469-1f3fb-1f3ed",
            uc_full: "1f469-1f3fb-200d-1f3ed",
            shortnames: [":woman_factory_worker_light_skin_tone:"],
            category: "people"
        },
        ":woman_factory_worker_tone2:": {
            uc_base: "1f469-1f3fc-1f3ed",
            uc_full: "1f469-1f3fc-200d-1f3ed",
            shortnames: [":woman_factory_worker_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_factory_worker_tone3:": {
            uc_base: "1f469-1f3fd-1f3ed",
            uc_full: "1f469-1f3fd-200d-1f3ed",
            shortnames: [":woman_factory_worker_medium_skin_tone:"],
            category: "people"
        },
        ":woman_factory_worker_tone4:": {
            uc_base: "1f469-1f3fe-1f3ed",
            uc_full: "1f469-1f3fe-200d-1f3ed",
            shortnames: [":woman_factory_worker_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_factory_worker_tone5:": {
            uc_base: "1f469-1f3ff-1f3ed",
            uc_full: "1f469-1f3ff-200d-1f3ed",
            shortnames: [":woman_factory_worker_dark_skin_tone:"],
            category: "people"
        },
        ":woman_farmer_tone1:": {
            uc_base: "1f469-1f3fb-1f33e",
            uc_full: "1f469-1f3fb-200d-1f33e",
            shortnames: [":woman_farmer_light_skin_tone:"],
            category: "people"
        },
        ":woman_farmer_tone2:": {
            uc_base: "1f469-1f3fc-1f33e",
            uc_full: "1f469-1f3fc-200d-1f33e",
            shortnames: [":woman_farmer_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_farmer_tone3:": {
            uc_base: "1f469-1f3fd-1f33e",
            uc_full: "1f469-1f3fd-200d-1f33e",
            shortnames: [":woman_farmer_medium_skin_tone:"],
            category: "people"
        },
        ":woman_farmer_tone4:": {
            uc_base: "1f469-1f3fe-1f33e",
            uc_full: "1f469-1f3fe-200d-1f33e",
            shortnames: [":woman_farmer_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_farmer_tone5:": {
            uc_base: "1f469-1f3ff-1f33e",
            uc_full: "1f469-1f3ff-200d-1f33e",
            shortnames: [":woman_farmer_dark_skin_tone:"],
            category: "people"
        },
        ":woman_firefighter_tone1:": {
            uc_base: "1f469-1f3fb-1f692",
            uc_full: "1f469-1f3fb-200d-1f692",
            shortnames: [":woman_firefighter_light_skin_tone:"],
            category: "people"
        },
        ":woman_firefighter_tone2:": {
            uc_base: "1f469-1f3fc-1f692",
            uc_full: "1f469-1f3fc-200d-1f692",
            shortnames: [":woman_firefighter_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_firefighter_tone3:": {
            uc_base: "1f469-1f3fd-1f692",
            uc_full: "1f469-1f3fd-200d-1f692",
            shortnames: [":woman_firefighter_medium_skin_tone:"],
            category: "people"
        },
        ":woman_firefighter_tone4:": {
            uc_base: "1f469-1f3fe-1f692",
            uc_full: "1f469-1f3fe-200d-1f692",
            shortnames: [":woman_firefighter_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_firefighter_tone5:": {
            uc_base: "1f469-1f3ff-1f692",
            uc_full: "1f469-1f3ff-200d-1f692",
            shortnames: [":woman_firefighter_dark_skin_tone:"],
            category: "people"
        },
        ":woman_in_manual_wheelchair_tone1:": {
            uc_base: "1f469-1f3fb-1f9bd",
            uc_full: "1f469-1f3fb-200d-1f9bd",
            shortnames: [":woman_in_manual_wheelchair_light_skin_tone:"],
            category: "people"
        },
        ":woman_in_manual_wheelchair_tone2:": {
            uc_base: "1f469-1f3fc-1f9bd",
            uc_full: "1f469-1f3fc-200d-1f9bd",
            shortnames: [":woman_in_manual_wheelchair_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_in_manual_wheelchair_tone3:": {
            uc_base: "1f469-1f3fd-1f9bd",
            uc_full: "1f469-1f3fd-200d-1f9bd",
            shortnames: [":woman_in_manual_wheelchair_medium_skin_tone:"],
            category: "people"
        },
        ":woman_in_manual_wheelchair_tone4:": {
            uc_base: "1f469-1f3fe-1f9bd",
            uc_full: "1f469-1f3fe-200d-1f9bd",
            shortnames: [":woman_in_manual_wheelchair_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_in_manual_wheelchair_tone5:": {
            uc_base: "1f469-1f3ff-1f9bd",
            uc_full: "1f469-1f3ff-200d-1f9bd",
            shortnames: [":woman_in_manual_wheelchair_dark_skin_tone:"],
            category: "people"
        },
        ":woman_in_motorized_wheelchair_tone1:": {
            uc_base: "1f469-1f3fb-1f9bc",
            uc_full: "1f469-1f3fb-200d-1f9bc",
            shortnames: [":woman_in_motorized_wheelchair_light_skin_tone:"],
            category: "people"
        },
        ":woman_in_motorized_wheelchair_tone2:": {
            uc_base: "1f469-1f3fc-1f9bc",
            uc_full: "1f469-1f3fc-200d-1f9bc",
            shortnames: [":woman_in_motorized_wheelchair_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_in_motorized_wheelchair_tone3:": {
            uc_base: "1f469-1f3fd-1f9bc",
            uc_full: "1f469-1f3fd-200d-1f9bc",
            shortnames: [":woman_in_motorized_wheelchair_medium_skin_tone:"],
            category: "people"
        },
        ":woman_in_motorized_wheelchair_tone4:": {
            uc_base: "1f469-1f3fe-1f9bc",
            uc_full: "1f469-1f3fe-200d-1f9bc",
            shortnames: [":woman_in_motorized_wheelchair_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_in_motorized_wheelchair_tone5:": {
            uc_base: "1f469-1f3ff-1f9bc",
            uc_full: "1f469-1f3ff-200d-1f9bc",
            shortnames: [":woman_in_motorized_wheelchair_dark_skin_tone:"],
            category: "people"
        },
        ":woman_mechanic_tone1:": {
            uc_base: "1f469-1f3fb-1f527",
            uc_full: "1f469-1f3fb-200d-1f527",
            shortnames: [":woman_mechanic_light_skin_tone:"],
            category: "people"
        },
        ":woman_mechanic_tone2:": {
            uc_base: "1f469-1f3fc-1f527",
            uc_full: "1f469-1f3fc-200d-1f527",
            shortnames: [":woman_mechanic_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_mechanic_tone3:": {
            uc_base: "1f469-1f3fd-1f527",
            uc_full: "1f469-1f3fd-200d-1f527",
            shortnames: [":woman_mechanic_medium_skin_tone:"],
            category: "people"
        },
        ":woman_mechanic_tone4:": {
            uc_base: "1f469-1f3fe-1f527",
            uc_full: "1f469-1f3fe-200d-1f527",
            shortnames: [":woman_mechanic_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_mechanic_tone5:": {
            uc_base: "1f469-1f3ff-1f527",
            uc_full: "1f469-1f3ff-200d-1f527",
            shortnames: [":woman_mechanic_dark_skin_tone:"],
            category: "people"
        },
        ":woman_office_worker_tone1:": {
            uc_base: "1f469-1f3fb-1f4bc",
            uc_full: "1f469-1f3fb-200d-1f4bc",
            shortnames: [":woman_office_worker_light_skin_tone:"],
            category: "people"
        },
        ":woman_office_worker_tone2:": {
            uc_base: "1f469-1f3fc-1f4bc",
            uc_full: "1f469-1f3fc-200d-1f4bc",
            shortnames: [":woman_office_worker_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_office_worker_tone3:": {
            uc_base: "1f469-1f3fd-1f4bc",
            uc_full: "1f469-1f3fd-200d-1f4bc",
            shortnames: [":woman_office_worker_medium_skin_tone:"],
            category: "people"
        },
        ":woman_office_worker_tone4:": {
            uc_base: "1f469-1f3fe-1f4bc",
            uc_full: "1f469-1f3fe-200d-1f4bc",
            shortnames: [":woman_office_worker_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_office_worker_tone5:": {
            uc_base: "1f469-1f3ff-1f4bc",
            uc_full: "1f469-1f3ff-200d-1f4bc",
            shortnames: [":woman_office_worker_dark_skin_tone:"],
            category: "people"
        },
        ":woman_red_haired_tone1:": {
            uc_base: "1f469-1f3fb-1f9b0",
            uc_full: "1f469-1f3fb-200d-1f9b0",
            shortnames: [":woman_red_haired_light_skin_tone:"],
            category: "people"
        },
        ":woman_red_haired_tone2:": {
            uc_base: "1f469-1f3fc-1f9b0",
            uc_full: "1f469-1f3fc-200d-1f9b0",
            shortnames: [":woman_red_haired_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_red_haired_tone3:": {
            uc_base: "1f469-1f3fd-1f9b0",
            uc_full: "1f469-1f3fd-200d-1f9b0",
            shortnames: [":woman_red_haired_medium_skin_tone:"],
            category: "people"
        },
        ":woman_red_haired_tone4:": {
            uc_base: "1f469-1f3fe-1f9b0",
            uc_full: "1f469-1f3fe-200d-1f9b0",
            shortnames: [":woman_red_haired_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_red_haired_tone5:": {
            uc_base: "1f469-1f3ff-1f9b0",
            uc_full: "1f469-1f3ff-200d-1f9b0",
            shortnames: [":woman_red_haired_dark_skin_tone:"],
            category: "people"
        },
        ":woman_scientist_tone1:": {
            uc_base: "1f469-1f3fb-1f52c",
            uc_full: "1f469-1f3fb-200d-1f52c",
            shortnames: [":woman_scientist_light_skin_tone:"],
            category: "people"
        },
        ":woman_scientist_tone2:": {
            uc_base: "1f469-1f3fc-1f52c",
            uc_full: "1f469-1f3fc-200d-1f52c",
            shortnames: [":woman_scientist_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_scientist_tone3:": {
            uc_base: "1f469-1f3fd-1f52c",
            uc_full: "1f469-1f3fd-200d-1f52c",
            shortnames: [":woman_scientist_medium_skin_tone:"],
            category: "people"
        },
        ":woman_scientist_tone4:": {
            uc_base: "1f469-1f3fe-1f52c",
            uc_full: "1f469-1f3fe-200d-1f52c",
            shortnames: [":woman_scientist_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_scientist_tone5:": {
            uc_base: "1f469-1f3ff-1f52c",
            uc_full: "1f469-1f3ff-200d-1f52c",
            shortnames: [":woman_scientist_dark_skin_tone:"],
            category: "people"
        },
        ":woman_singer_tone1:": {
            uc_base: "1f469-1f3fb-1f3a4",
            uc_full: "1f469-1f3fb-200d-1f3a4",
            shortnames: [":woman_singer_light_skin_tone:"],
            category: "people"
        },
        ":woman_singer_tone2:": {
            uc_base: "1f469-1f3fc-1f3a4",
            uc_full: "1f469-1f3fc-200d-1f3a4",
            shortnames: [":woman_singer_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_singer_tone3:": {
            uc_base: "1f469-1f3fd-1f3a4",
            uc_full: "1f469-1f3fd-200d-1f3a4",
            shortnames: [":woman_singer_medium_skin_tone:"],
            category: "people"
        },
        ":woman_singer_tone4:": {
            uc_base: "1f469-1f3fe-1f3a4",
            uc_full: "1f469-1f3fe-200d-1f3a4",
            shortnames: [":woman_singer_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_singer_tone5:": {
            uc_base: "1f469-1f3ff-1f3a4",
            uc_full: "1f469-1f3ff-200d-1f3a4",
            shortnames: [":woman_singer_dark_skin_tone:"],
            category: "people"
        },
        ":woman_student_tone1:": {
            uc_base: "1f469-1f3fb-1f393",
            uc_full: "1f469-1f3fb-200d-1f393",
            shortnames: [":woman_student_light_skin_tone:"],
            category: "people"
        },
        ":woman_student_tone2:": {
            uc_base: "1f469-1f3fc-1f393",
            uc_full: "1f469-1f3fc-200d-1f393",
            shortnames: [":woman_student_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_student_tone3:": {
            uc_base: "1f469-1f3fd-1f393",
            uc_full: "1f469-1f3fd-200d-1f393",
            shortnames: [":woman_student_medium_skin_tone:"],
            category: "people"
        },
        ":woman_student_tone4:": {
            uc_base: "1f469-1f3fe-1f393",
            uc_full: "1f469-1f3fe-200d-1f393",
            shortnames: [":woman_student_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_student_tone5:": {
            uc_base: "1f469-1f3ff-1f393",
            uc_full: "1f469-1f3ff-200d-1f393",
            shortnames: [":woman_student_dark_skin_tone:"],
            category: "people"
        },
        ":woman_teacher_tone1:": {
            uc_base: "1f469-1f3fb-1f3eb",
            uc_full: "1f469-1f3fb-200d-1f3eb",
            shortnames: [":woman_teacher_light_skin_tone:"],
            category: "people"
        },
        ":woman_teacher_tone2:": {
            uc_base: "1f469-1f3fc-1f3eb",
            uc_full: "1f469-1f3fc-200d-1f3eb",
            shortnames: [":woman_teacher_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_teacher_tone3:": {
            uc_base: "1f469-1f3fd-1f3eb",
            uc_full: "1f469-1f3fd-200d-1f3eb",
            shortnames: [":woman_teacher_medium_skin_tone:"],
            category: "people"
        },
        ":woman_teacher_tone4:": {
            uc_base: "1f469-1f3fe-1f3eb",
            uc_full: "1f469-1f3fe-200d-1f3eb",
            shortnames: [":woman_teacher_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_teacher_tone5:": {
            uc_base: "1f469-1f3ff-1f3eb",
            uc_full: "1f469-1f3ff-200d-1f3eb",
            shortnames: [":woman_teacher_dark_skin_tone:"],
            category: "people"
        },
        ":woman_technologist_tone1:": {
            uc_base: "1f469-1f3fb-1f4bb",
            uc_full: "1f469-1f3fb-200d-1f4bb",
            shortnames: [":woman_technologist_light_skin_tone:"],
            category: "people"
        },
        ":woman_technologist_tone2:": {
            uc_base: "1f469-1f3fc-1f4bb",
            uc_full: "1f469-1f3fc-200d-1f4bb",
            shortnames: [":woman_technologist_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_technologist_tone3:": {
            uc_base: "1f469-1f3fd-1f4bb",
            uc_full: "1f469-1f3fd-200d-1f4bb",
            shortnames: [":woman_technologist_medium_skin_tone:"],
            category: "people"
        },
        ":woman_technologist_tone4:": {
            uc_base: "1f469-1f3fe-1f4bb",
            uc_full: "1f469-1f3fe-200d-1f4bb",
            shortnames: [":woman_technologist_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_technologist_tone5:": {
            uc_base: "1f469-1f3ff-1f4bb",
            uc_full: "1f469-1f3ff-200d-1f4bb",
            shortnames: [":woman_technologist_dark_skin_tone:"],
            category: "people"
        },
        ":woman_white_haired_tone1:": {
            uc_base: "1f469-1f3fb-1f9b3",
            uc_full: "1f469-1f3fb-200d-1f9b3",
            shortnames: [":woman_white_haired_light_skin_tone:"],
            category: "people"
        },
        ":woman_white_haired_tone2:": {
            uc_base: "1f469-1f3fc-1f9b3",
            uc_full: "1f469-1f3fc-200d-1f9b3",
            shortnames: [":woman_white_haired_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_white_haired_tone3:": {
            uc_base: "1f469-1f3fd-1f9b3",
            uc_full: "1f469-1f3fd-200d-1f9b3",
            shortnames: [":woman_white_haired_medium_skin_tone:"],
            category: "people"
        },
        ":woman_white_haired_tone4:": {
            uc_base: "1f469-1f3fe-1f9b3",
            uc_full: "1f469-1f3fe-200d-1f9b3",
            shortnames: [":woman_white_haired_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_white_haired_tone5:": {
            uc_base: "1f469-1f3ff-1f9b3",
            uc_full: "1f469-1f3ff-200d-1f9b3",
            shortnames: [":woman_white_haired_dark_skin_tone:"],
            category: "people"
        },
        ":woman_with_probing_cane_tone1:": {
            uc_base: "1f469-1f3fb-1f9af",
            uc_full: "1f469-1f3fb-200d-1f9af",
            shortnames: [":woman_with_probing_cane_light_skin_tone:"],
            category: "people"
        },
        ":woman_with_probing_cane_tone2:": {
            uc_base: "1f469-1f3fc-1f9af",
            uc_full: "1f469-1f3fc-200d-1f9af",
            shortnames: [":woman_with_probing_cane_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_with_probing_cane_tone3:": {
            uc_base: "1f469-1f3fd-1f9af",
            uc_full: "1f469-1f3fd-200d-1f9af",
            shortnames: [":woman_with_probing_cane_medium_skin_tone:"],
            category: "people"
        },
        ":woman_with_probing_cane_tone4:": {
            uc_base: "1f469-1f3fe-1f9af",
            uc_full: "1f469-1f3fe-200d-1f9af",
            shortnames: [":woman_with_probing_cane_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_with_probing_cane_tone5:": {
            uc_base: "1f469-1f3ff-1f9af",
            uc_full: "1f469-1f3ff-200d-1f9af",
            shortnames: [":woman_with_probing_cane_dark_skin_tone:"],
            category: "people"
        },
        ":blond-haired_man_tone1:": {
            uc_base: "1f471-1f3fb-2642",
            uc_full: "1f471-1f3fb-200d-2642-fe0f",
            shortnames: [":blond-haired_man_light_skin_tone:"],
            category: "people"
        },
        ":blond-haired_man_tone2:": {
            uc_base: "1f471-1f3fc-2642",
            uc_full: "1f471-1f3fc-200d-2642-fe0f",
            shortnames: [":blond-haired_man_medium_light_skin_tone:"],
            category: "people"
        },
        ":blond-haired_man_tone3:": {
            uc_base: "1f471-1f3fd-2642",
            uc_full: "1f471-1f3fd-200d-2642-fe0f",
            shortnames: [":blond-haired_man_medium_skin_tone:"],
            category: "people"
        },
        ":blond-haired_man_tone4:": {
            uc_base: "1f471-1f3fe-2642",
            uc_full: "1f471-1f3fe-200d-2642-fe0f",
            shortnames: [":blond-haired_man_medium_dark_skin_tone:"],
            category: "people"
        },
        ":blond-haired_man_tone5:": {
            uc_base: "1f471-1f3ff-2642",
            uc_full: "1f471-1f3ff-200d-2642-fe0f",
            shortnames: [":blond-haired_man_dark_skin_tone:"],
            category: "people"
        },
        ":blond-haired_woman_tone1:": {
            uc_base: "1f471-1f3fb-2640",
            uc_full: "1f471-1f3fb-200d-2640-fe0f",
            shortnames: [":blond-haired_woman_light_skin_tone:"],
            category: "people"
        },
        ":blond-haired_woman_tone2:": {
            uc_base: "1f471-1f3fc-2640",
            uc_full: "1f471-1f3fc-200d-2640-fe0f",
            shortnames: [":blond-haired_woman_medium_light_skin_tone:"],
            category: "people"
        },
        ":blond-haired_woman_tone3:": {
            uc_base: "1f471-1f3fd-2640",
            uc_full: "1f471-1f3fd-200d-2640-fe0f",
            shortnames: [":blond-haired_woman_medium_skin_tone:"],
            category: "people"
        },
        ":blond-haired_woman_tone4:": {
            uc_base: "1f471-1f3fe-2640",
            uc_full: "1f471-1f3fe-200d-2640-fe0f",
            shortnames: [":blond-haired_woman_medium_dark_skin_tone:"],
            category: "people"
        },
        ":blond-haired_woman_tone5:": {
            uc_base: "1f471-1f3ff-2640",
            uc_full: "1f471-1f3ff-200d-2640-fe0f",
            shortnames: [":blond-haired_woman_dark_skin_tone:"],
            category: "people"
        },
        ":couple_mm:": {
            uc_base: "1f468-2764-1f468",
            uc_full: "1f468-200d-2764-fe0f-200d-1f468",
            shortnames: [":couple_with_heart_mm:"],
            category: "people"
        },
        ":couple_with_heart_woman_man:": {
            uc_base: "1f469-2764-1f468",
            uc_full: "1f469-200d-2764-fe0f-200d-1f468",
            shortnames: [],
            category: "people"
        },
        ":couple_ww:": {
            uc_base: "1f469-2764-1f469",
            uc_full: "1f469-200d-2764-fe0f-200d-1f469",
            shortnames: [":couple_with_heart_ww:"],
            category: "people"
        },
        ":deaf_man_tone1:": {
            uc_base: "1f9cf-1f3fb-2642",
            uc_full: "1f9cf-1f3fb-200d-2642-fe0f",
            shortnames: [":deaf_man_light_skin_tone:"],
            category: "people"
        },
        ":deaf_man_tone2:": {
            uc_base: "1f9cf-1f3fc-2642",
            uc_full: "1f9cf-1f3fc-200d-2642-fe0f",
            shortnames: [":deaf_man_medium_light_skin_tone:"],
            category: "people"
        },
        ":deaf_man_tone3:": {
            uc_base: "1f9cf-1f3fd-2642",
            uc_full: "1f9cf-1f3fd-200d-2642-fe0f",
            shortnames: [":deaf_man_medium_skin_tone:"],
            category: "people"
        },
        ":deaf_man_tone4:": {
            uc_base: "1f9cf-1f3fe-2642",
            uc_full: "1f9cf-1f3fe-200d-2642-fe0f",
            shortnames: [":deaf_man_medium_dark_skin_tone:"],
            category: "people"
        },
        ":deaf_man_tone5:": {
            uc_base: "1f9cf-1f3ff-2642",
            uc_full: "1f9cf-1f3ff-200d-2642-fe0f",
            shortnames: [":deaf_man_dark_skin_tone:"],
            category: "people"
        },
        ":deaf_woman_tone1:": {
            uc_base: "1f9cf-1f3fb-2640",
            uc_full: "1f9cf-1f3fb-200d-2640-fe0f",
            shortnames: [":deaf_woman_light_skin_tone:"],
            category: "people"
        },
        ":deaf_woman_tone2:": {
            uc_base: "1f9cf-1f3fc-2640",
            uc_full: "1f9cf-1f3fc-200d-2640-fe0f",
            shortnames: [":deaf_woman_medium_light_skin_tone:"],
            category: "people"
        },
        ":deaf_woman_tone3:": {
            uc_base: "1f9cf-1f3fd-2640",
            uc_full: "1f9cf-1f3fd-200d-2640-fe0f",
            shortnames: [":deaf_woman_medium_skin_tone:"],
            category: "people"
        },
        ":deaf_woman_tone4:": {
            uc_base: "1f9cf-1f3fe-2640",
            uc_full: "1f9cf-1f3fe-200d-2640-fe0f",
            shortnames: [":deaf_woman_medium_dark_skin_tone:"],
            category: "people"
        },
        ":deaf_woman_tone5:": {
            uc_base: "1f9cf-1f3ff-2640",
            uc_full: "1f9cf-1f3ff-200d-2640-fe0f",
            shortnames: [":deaf_woman_dark_skin_tone:"],
            category: "people"
        },
        ":man_biking_tone1:": {
            uc_base: "1f6b4-1f3fb-2642",
            uc_full: "1f6b4-1f3fb-200d-2642-fe0f",
            shortnames: [":man_biking_light_skin_tone:"],
            category: "activity"
        },
        ":man_biking_tone2:": {
            uc_base: "1f6b4-1f3fc-2642",
            uc_full: "1f6b4-1f3fc-200d-2642-fe0f",
            shortnames: [":man_biking_medium_light_skin_tone:"],
            category: "activity"
        },
        ":man_biking_tone3:": {
            uc_base: "1f6b4-1f3fd-2642",
            uc_full: "1f6b4-1f3fd-200d-2642-fe0f",
            shortnames: [":man_biking_medium_skin_tone:"],
            category: "activity"
        },
        ":man_biking_tone4:": {
            uc_base: "1f6b4-1f3fe-2642",
            uc_full: "1f6b4-1f3fe-200d-2642-fe0f",
            shortnames: [":man_biking_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":man_biking_tone5:": {
            uc_base: "1f6b4-1f3ff-2642",
            uc_full: "1f6b4-1f3ff-200d-2642-fe0f",
            shortnames: [":man_biking_dark_skin_tone:"],
            category: "activity"
        },
        ":man_bowing_tone1:": {
            uc_base: "1f647-1f3fb-2642",
            uc_full: "1f647-1f3fb-200d-2642-fe0f",
            shortnames: [":man_bowing_light_skin_tone:"],
            category: "people"
        },
        ":man_bowing_tone2:": {
            uc_base: "1f647-1f3fc-2642",
            uc_full: "1f647-1f3fc-200d-2642-fe0f",
            shortnames: [":man_bowing_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_bowing_tone3:": {
            uc_base: "1f647-1f3fd-2642",
            uc_full: "1f647-1f3fd-200d-2642-fe0f",
            shortnames: [":man_bowing_medium_skin_tone:"],
            category: "people"
        },
        ":man_bowing_tone4:": {
            uc_base: "1f647-1f3fe-2642",
            uc_full: "1f647-1f3fe-200d-2642-fe0f",
            shortnames: [":man_bowing_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_bowing_tone5:": {
            uc_base: "1f647-1f3ff-2642",
            uc_full: "1f647-1f3ff-200d-2642-fe0f",
            shortnames: [":man_bowing_dark_skin_tone:"],
            category: "people"
        },
        ":man_cartwheeling_tone1:": {
            uc_base: "1f938-1f3fb-2642",
            uc_full: "1f938-1f3fb-200d-2642-fe0f",
            shortnames: [":man_cartwheeling_light_skin_tone:"],
            category: "activity"
        },
        ":man_cartwheeling_tone2:": {
            uc_base: "1f938-1f3fc-2642",
            uc_full: "1f938-1f3fc-200d-2642-fe0f",
            shortnames: [":man_cartwheeling_medium_light_skin_tone:"],
            category: "activity"
        },
        ":man_cartwheeling_tone3:": {
            uc_base: "1f938-1f3fd-2642",
            uc_full: "1f938-1f3fd-200d-2642-fe0f",
            shortnames: [":man_cartwheeling_medium_skin_tone:"],
            category: "activity"
        },
        ":man_cartwheeling_tone4:": {
            uc_base: "1f938-1f3fe-2642",
            uc_full: "1f938-1f3fe-200d-2642-fe0f",
            shortnames: [":man_cartwheeling_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":man_cartwheeling_tone5:": {
            uc_base: "1f938-1f3ff-2642",
            uc_full: "1f938-1f3ff-200d-2642-fe0f",
            shortnames: [":man_cartwheeling_dark_skin_tone:"],
            category: "activity"
        },
        ":man_climbing_tone1:": {
            uc_base: "1f9d7-1f3fb-2642",
            uc_full: "1f9d7-1f3fb-200d-2642-fe0f",
            shortnames: [":man_climbing_light_skin_tone:"],
            category: "activity"
        },
        ":man_climbing_tone2:": {
            uc_base: "1f9d7-1f3fc-2642",
            uc_full: "1f9d7-1f3fc-200d-2642-fe0f",
            shortnames: [":man_climbing_medium_light_skin_tone:"],
            category: "activity"
        },
        ":man_climbing_tone3:": {
            uc_base: "1f9d7-1f3fd-2642",
            uc_full: "1f9d7-1f3fd-200d-2642-fe0f",
            shortnames: [":man_climbing_medium_skin_tone:"],
            category: "activity"
        },
        ":man_climbing_tone4:": {
            uc_base: "1f9d7-1f3fe-2642",
            uc_full: "1f9d7-1f3fe-200d-2642-fe0f",
            shortnames: [":man_climbing_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":man_climbing_tone5:": {
            uc_base: "1f9d7-1f3ff-2642",
            uc_full: "1f9d7-1f3ff-200d-2642-fe0f",
            shortnames: [":man_climbing_dark_skin_tone:"],
            category: "activity"
        },
        ":man_construction_worker_tone1:": {
            uc_base: "1f477-1f3fb-2642",
            uc_full: "1f477-1f3fb-200d-2642-fe0f",
            shortnames: [":man_construction_worker_light_skin_tone:"],
            category: "people"
        },
        ":man_construction_worker_tone2:": {
            uc_base: "1f477-1f3fc-2642",
            uc_full: "1f477-1f3fc-200d-2642-fe0f",
            shortnames: [":man_construction_worker_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_construction_worker_tone3:": {
            uc_base: "1f477-1f3fd-2642",
            uc_full: "1f477-1f3fd-200d-2642-fe0f",
            shortnames: [":man_construction_worker_medium_skin_tone:"],
            category: "people"
        },
        ":man_construction_worker_tone4:": {
            uc_base: "1f477-1f3fe-2642",
            uc_full: "1f477-1f3fe-200d-2642-fe0f",
            shortnames: [":man_construction_worker_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_construction_worker_tone5:": {
            uc_base: "1f477-1f3ff-2642",
            uc_full: "1f477-1f3ff-200d-2642-fe0f",
            shortnames: [":man_construction_worker_dark_skin_tone:"],
            category: "people"
        },
        ":man_detective_tone1:": {
            uc_base: "1f575-1f3fb-2642",
            uc_full: "1f575-fe0f-1f3fb-200d-2642-fe0f",
            shortnames: [":man_detective_light_skin_tone:"],
            category: "people"
        },
        ":man_detective_tone2:": {
            uc_base: "1f575-1f3fc-2642",
            uc_full: "1f575-fe0f-1f3fc-200d-2642-fe0f",
            shortnames: [":man_detective_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_detective_tone3:": {
            uc_base: "1f575-1f3fd-2642",
            uc_full: "1f575-fe0f-1f3fd-200d-2642-fe0f",
            shortnames: [":man_detective_medium_skin_tone:"],
            category: "people"
        },
        ":man_detective_tone4:": {
            uc_base: "1f575-1f3fe-2642",
            uc_full: "1f575-fe0f-1f3fe-200d-2642-fe0f",
            shortnames: [":man_detective_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_detective_tone5:": {
            uc_base: "1f575-1f3ff-2642",
            uc_full: "1f575-fe0f-1f3ff-200d-2642-fe0f",
            shortnames: [":man_detective_dark_skin_tone:"],
            category: "people"
        },
        ":man_elf_tone1:": {
            uc_base: "1f9dd-1f3fb-2642",
            uc_full: "1f9dd-1f3fb-200d-2642-fe0f",
            shortnames: [":man_elf_light_skin_tone:"],
            category: "people"
        },
        ":man_elf_tone2:": {
            uc_base: "1f9dd-1f3fc-2642",
            uc_full: "1f9dd-1f3fc-200d-2642-fe0f",
            shortnames: [":man_elf_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_elf_tone3:": {
            uc_base: "1f9dd-1f3fd-2642",
            uc_full: "1f9dd-1f3fd-200d-2642-fe0f",
            shortnames: [":man_elf_medium_skin_tone:"],
            category: "people"
        },
        ":man_elf_tone4:": {
            uc_base: "1f9dd-1f3fe-2642",
            uc_full: "1f9dd-1f3fe-200d-2642-fe0f",
            shortnames: [":man_elf_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_elf_tone5:": {
            uc_base: "1f9dd-1f3ff-2642",
            uc_full: "1f9dd-1f3ff-200d-2642-fe0f",
            shortnames: [":man_elf_dark_skin_tone:"],
            category: "people"
        },
        ":man_facepalming_tone1:": {
            uc_base: "1f926-1f3fb-2642",
            uc_full: "1f926-1f3fb-200d-2642-fe0f",
            shortnames: [":man_facepalming_light_skin_tone:"],
            category: "people"
        },
        ":man_facepalming_tone2:": {
            uc_base: "1f926-1f3fc-2642",
            uc_full: "1f926-1f3fc-200d-2642-fe0f",
            shortnames: [":man_facepalming_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_facepalming_tone3:": {
            uc_base: "1f926-1f3fd-2642",
            uc_full: "1f926-1f3fd-200d-2642-fe0f",
            shortnames: [":man_facepalming_medium_skin_tone:"],
            category: "people"
        },
        ":man_facepalming_tone4:": {
            uc_base: "1f926-1f3fe-2642",
            uc_full: "1f926-1f3fe-200d-2642-fe0f",
            shortnames: [":man_facepalming_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_facepalming_tone5:": {
            uc_base: "1f926-1f3ff-2642",
            uc_full: "1f926-1f3ff-200d-2642-fe0f",
            shortnames: [":man_facepalming_dark_skin_tone:"],
            category: "people"
        },
        ":man_fairy_tone1:": {
            uc_base: "1f9da-1f3fb-2642",
            uc_full: "1f9da-1f3fb-200d-2642-fe0f",
            shortnames: [":man_fairy_light_skin_tone:"],
            category: "people"
        },
        ":man_fairy_tone2:": {
            uc_base: "1f9da-1f3fc-2642",
            uc_full: "1f9da-1f3fc-200d-2642-fe0f",
            shortnames: [":man_fairy_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_fairy_tone3:": {
            uc_base: "1f9da-1f3fd-2642",
            uc_full: "1f9da-1f3fd-200d-2642-fe0f",
            shortnames: [":man_fairy_medium_skin_tone:"],
            category: "people"
        },
        ":man_fairy_tone4:": {
            uc_base: "1f9da-1f3fe-2642",
            uc_full: "1f9da-1f3fe-200d-2642-fe0f",
            shortnames: [":man_fairy_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_fairy_tone5:": {
            uc_base: "1f9da-1f3ff-2642",
            uc_full: "1f9da-1f3ff-200d-2642-fe0f",
            shortnames: [":man_fairy_dark_skin_tone:"],
            category: "people"
        },
        ":man_frowning_tone1:": {
            uc_base: "1f64d-1f3fb-2642",
            uc_full: "1f64d-1f3fb-200d-2642-fe0f",
            shortnames: [":man_frowning_light_skin_tone:"],
            category: "people"
        },
        ":man_frowning_tone2:": {
            uc_base: "1f64d-1f3fc-2642",
            uc_full: "1f64d-1f3fc-200d-2642-fe0f",
            shortnames: [":man_frowning_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_frowning_tone3:": {
            uc_base: "1f64d-1f3fd-2642",
            uc_full: "1f64d-1f3fd-200d-2642-fe0f",
            shortnames: [":man_frowning_medium_skin_tone:"],
            category: "people"
        },
        ":man_frowning_tone4:": {
            uc_base: "1f64d-1f3fe-2642",
            uc_full: "1f64d-1f3fe-200d-2642-fe0f",
            shortnames: [":man_frowning_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_frowning_tone5:": {
            uc_base: "1f64d-1f3ff-2642",
            uc_full: "1f64d-1f3ff-200d-2642-fe0f",
            shortnames: [":man_frowning_dark_skin_tone:"],
            category: "people"
        },
        ":man_gesturing_no_tone1:": {
            uc_base: "1f645-1f3fb-2642",
            uc_full: "1f645-1f3fb-200d-2642-fe0f",
            shortnames: [":man_gesturing_no_light_skin_tone:"],
            category: "people"
        },
        ":man_gesturing_no_tone2:": {
            uc_base: "1f645-1f3fc-2642",
            uc_full: "1f645-1f3fc-200d-2642-fe0f",
            shortnames: [":man_gesturing_no_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_gesturing_no_tone3:": {
            uc_base: "1f645-1f3fd-2642",
            uc_full: "1f645-1f3fd-200d-2642-fe0f",
            shortnames: [":man_gesturing_no_medium_skin_tone:"],
            category: "people"
        },
        ":man_gesturing_no_tone4:": {
            uc_base: "1f645-1f3fe-2642",
            uc_full: "1f645-1f3fe-200d-2642-fe0f",
            shortnames: [":man_gesturing_no_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_gesturing_no_tone5:": {
            uc_base: "1f645-1f3ff-2642",
            uc_full: "1f645-1f3ff-200d-2642-fe0f",
            shortnames: [":man_gesturing_no_dark_skin_tone:"],
            category: "people"
        },
        ":man_gesturing_ok_tone1:": {
            uc_base: "1f646-1f3fb-2642",
            uc_full: "1f646-1f3fb-200d-2642-fe0f",
            shortnames: [":man_gesturing_ok_light_skin_tone:"],
            category: "people"
        },
        ":man_gesturing_ok_tone2:": {
            uc_base: "1f646-1f3fc-2642",
            uc_full: "1f646-1f3fc-200d-2642-fe0f",
            shortnames: [":man_gesturing_ok_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_gesturing_ok_tone3:": {
            uc_base: "1f646-1f3fd-2642",
            uc_full: "1f646-1f3fd-200d-2642-fe0f",
            shortnames: [":man_gesturing_ok_medium_skin_tone:"],
            category: "people"
        },
        ":man_gesturing_ok_tone4:": {
            uc_base: "1f646-1f3fe-2642",
            uc_full: "1f646-1f3fe-200d-2642-fe0f",
            shortnames: [":man_gesturing_ok_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_gesturing_ok_tone5:": {
            uc_base: "1f646-1f3ff-2642",
            uc_full: "1f646-1f3ff-200d-2642-fe0f",
            shortnames: [":man_gesturing_ok_dark_skin_tone:"],
            category: "people"
        },
        ":man_getting_face_massage_tone1:": {
            uc_base: "1f486-1f3fb-2642",
            uc_full: "1f486-1f3fb-200d-2642-fe0f",
            shortnames: [":man_getting_face_massage_light_skin_tone:"],
            category: "people"
        },
        ":man_getting_face_massage_tone2:": {
            uc_base: "1f486-1f3fc-2642",
            uc_full: "1f486-1f3fc-200d-2642-fe0f",
            shortnames: [":man_getting_face_massage_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_getting_face_massage_tone3:": {
            uc_base: "1f486-1f3fd-2642",
            uc_full: "1f486-1f3fd-200d-2642-fe0f",
            shortnames: [":man_getting_face_massage_medium_skin_tone:"],
            category: "people"
        },
        ":man_getting_face_massage_tone4:": {
            uc_base: "1f486-1f3fe-2642",
            uc_full: "1f486-1f3fe-200d-2642-fe0f",
            shortnames: [":man_getting_face_massage_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_getting_face_massage_tone5:": {
            uc_base: "1f486-1f3ff-2642",
            uc_full: "1f486-1f3ff-200d-2642-fe0f",
            shortnames: [":man_getting_face_massage_dark_skin_tone:"],
            category: "people"
        },
        ":man_getting_haircut_tone1:": {
            uc_base: "1f487-1f3fb-2642",
            uc_full: "1f487-1f3fb-200d-2642-fe0f",
            shortnames: [":man_getting_haircut_light_skin_tone:"],
            category: "people"
        },
        ":man_getting_haircut_tone2:": {
            uc_base: "1f487-1f3fc-2642",
            uc_full: "1f487-1f3fc-200d-2642-fe0f",
            shortnames: [":man_getting_haircut_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_getting_haircut_tone3:": {
            uc_base: "1f487-1f3fd-2642",
            uc_full: "1f487-1f3fd-200d-2642-fe0f",
            shortnames: [":man_getting_haircut_medium_skin_tone:"],
            category: "people"
        },
        ":man_getting_haircut_tone4:": {
            uc_base: "1f487-1f3fe-2642",
            uc_full: "1f487-1f3fe-200d-2642-fe0f",
            shortnames: [":man_getting_haircut_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_getting_haircut_tone5:": {
            uc_base: "1f487-1f3ff-2642",
            uc_full: "1f487-1f3ff-200d-2642-fe0f",
            shortnames: [":man_getting_haircut_dark_skin_tone:"],
            category: "people"
        },
        ":man_golfing_tone1:": {
            uc_base: "1f3cc-1f3fb-2642",
            uc_full: "1f3cc-fe0f-1f3fb-200d-2642-fe0f",
            shortnames: [":man_golfing_light_skin_tone:"],
            category: "activity"
        },
        ":man_golfing_tone2:": {
            uc_base: "1f3cc-1f3fc-2642",
            uc_full: "1f3cc-fe0f-1f3fc-200d-2642-fe0f",
            shortnames: [":man_golfing_medium_light_skin_tone:"],
            category: "activity"
        },
        ":man_golfing_tone3:": {
            uc_base: "1f3cc-1f3fd-2642",
            uc_full: "1f3cc-fe0f-1f3fd-200d-2642-fe0f",
            shortnames: [":man_golfing_medium_skin_tone:"],
            category: "activity"
        },
        ":man_golfing_tone4:": {
            uc_base: "1f3cc-1f3fe-2642",
            uc_full: "1f3cc-fe0f-1f3fe-200d-2642-fe0f",
            shortnames: [":man_golfing_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":man_golfing_tone5:": {
            uc_base: "1f3cc-1f3ff-2642",
            uc_full: "1f3cc-fe0f-1f3ff-200d-2642-fe0f",
            shortnames: [":man_golfing_dark_skin_tone:"],
            category: "activity"
        },
        ":man_guard_tone1:": {
            uc_base: "1f482-1f3fb-2642",
            uc_full: "1f482-1f3fb-200d-2642-fe0f",
            shortnames: [":man_guard_light_skin_tone:"],
            category: "people"
        },
        ":man_guard_tone2:": {
            uc_base: "1f482-1f3fc-2642",
            uc_full: "1f482-1f3fc-200d-2642-fe0f",
            shortnames: [":man_guard_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_guard_tone3:": {
            uc_base: "1f482-1f3fd-2642",
            uc_full: "1f482-1f3fd-200d-2642-fe0f",
            shortnames: [":man_guard_medium_skin_tone:"],
            category: "people"
        },
        ":man_guard_tone4:": {
            uc_base: "1f482-1f3fe-2642",
            uc_full: "1f482-1f3fe-200d-2642-fe0f",
            shortnames: [":man_guard_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_guard_tone5:": {
            uc_base: "1f482-1f3ff-2642",
            uc_full: "1f482-1f3ff-200d-2642-fe0f",
            shortnames: [":man_guard_dark_skin_tone:"],
            category: "people"
        },
        ":man_health_worker_tone1:": {
            uc_base: "1f468-1f3fb-2695",
            uc_full: "1f468-1f3fb-200d-2695-fe0f",
            shortnames: [":man_health_worker_light_skin_tone:"],
            category: "people"
        },
        ":man_health_worker_tone2:": {
            uc_base: "1f468-1f3fc-2695",
            uc_full: "1f468-1f3fc-200d-2695-fe0f",
            shortnames: [":man_health_worker_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_health_worker_tone3:": {
            uc_base: "1f468-1f3fd-2695",
            uc_full: "1f468-1f3fd-200d-2695-fe0f",
            shortnames: [":man_health_worker_medium_skin_tone:"],
            category: "people"
        },
        ":man_health_worker_tone4:": {
            uc_base: "1f468-1f3fe-2695",
            uc_full: "1f468-1f3fe-200d-2695-fe0f",
            shortnames: [":man_health_worker_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_health_worker_tone5:": {
            uc_base: "1f468-1f3ff-2695",
            uc_full: "1f468-1f3ff-200d-2695-fe0f",
            shortnames: [":man_health_worker_dark_skin_tone:"],
            category: "people"
        },
        ":man_in_lotus_position_tone1:": {
            uc_base: "1f9d8-1f3fb-2642",
            uc_full: "1f9d8-1f3fb-200d-2642-fe0f",
            shortnames: [":man_in_lotus_position_light_skin_tone:"],
            category: "activity"
        },
        ":man_in_lotus_position_tone2:": {
            uc_base: "1f9d8-1f3fc-2642",
            uc_full: "1f9d8-1f3fc-200d-2642-fe0f",
            shortnames: [":man_in_lotus_position_medium_light_skin_tone:"],
            category: "activity"
        },
        ":man_in_lotus_position_tone3:": {
            uc_base: "1f9d8-1f3fd-2642",
            uc_full: "1f9d8-1f3fd-200d-2642-fe0f",
            shortnames: [":man_in_lotus_position_medium_skin_tone:"],
            category: "activity"
        },
        ":man_in_lotus_position_tone4:": {
            uc_base: "1f9d8-1f3fe-2642",
            uc_full: "1f9d8-1f3fe-200d-2642-fe0f",
            shortnames: [":man_in_lotus_position_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":man_in_lotus_position_tone5:": {
            uc_base: "1f9d8-1f3ff-2642",
            uc_full: "1f9d8-1f3ff-200d-2642-fe0f",
            shortnames: [":man_in_lotus_position_dark_skin_tone:"],
            category: "activity"
        },
        ":man_in_steamy_room_tone1:": {
            uc_base: "1f9d6-1f3fb-2642",
            uc_full: "1f9d6-1f3fb-200d-2642-fe0f",
            shortnames: [":man_in_steamy_room_light_skin_tone:"],
            category: "people"
        },
        ":man_in_steamy_room_tone2:": {
            uc_base: "1f9d6-1f3fc-2642",
            uc_full: "1f9d6-1f3fc-200d-2642-fe0f",
            shortnames: [":man_in_steamy_room_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_in_steamy_room_tone3:": {
            uc_base: "1f9d6-1f3fd-2642",
            uc_full: "1f9d6-1f3fd-200d-2642-fe0f",
            shortnames: [":man_in_steamy_room_medium_skin_tone:"],
            category: "people"
        },
        ":man_in_steamy_room_tone4:": {
            uc_base: "1f9d6-1f3fe-2642",
            uc_full: "1f9d6-1f3fe-200d-2642-fe0f",
            shortnames: [":man_in_steamy_room_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_in_steamy_room_tone5:": {
            uc_base: "1f9d6-1f3ff-2642",
            uc_full: "1f9d6-1f3ff-200d-2642-fe0f",
            shortnames: [":man_in_steamy_room_dark_skin_tone:"],
            category: "people"
        },
        ":man_judge_tone1:": {
            uc_base: "1f468-1f3fb-2696",
            uc_full: "1f468-1f3fb-200d-2696-fe0f",
            shortnames: [":man_judge_light_skin_tone:"],
            category: "people"
        },
        ":man_judge_tone2:": {
            uc_base: "1f468-1f3fc-2696",
            uc_full: "1f468-1f3fc-200d-2696-fe0f",
            shortnames: [":man_judge_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_judge_tone3:": {
            uc_base: "1f468-1f3fd-2696",
            uc_full: "1f468-1f3fd-200d-2696-fe0f",
            shortnames: [":man_judge_medium_skin_tone:"],
            category: "people"
        },
        ":man_judge_tone4:": {
            uc_base: "1f468-1f3fe-2696",
            uc_full: "1f468-1f3fe-200d-2696-fe0f",
            shortnames: [":man_judge_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_judge_tone5:": {
            uc_base: "1f468-1f3ff-2696",
            uc_full: "1f468-1f3ff-200d-2696-fe0f",
            shortnames: [":man_judge_dark_skin_tone:"],
            category: "people"
        },
        ":man_juggling_tone1:": {
            uc_base: "1f939-1f3fb-2642",
            uc_full: "1f939-1f3fb-200d-2642-fe0f",
            shortnames: [":man_juggling_light_skin_tone:"],
            category: "activity"
        },
        ":man_juggling_tone2:": {
            uc_base: "1f939-1f3fc-2642",
            uc_full: "1f939-1f3fc-200d-2642-fe0f",
            shortnames: [":man_juggling_medium_light_skin_tone:"],
            category: "activity"
        },
        ":man_juggling_tone3:": {
            uc_base: "1f939-1f3fd-2642",
            uc_full: "1f939-1f3fd-200d-2642-fe0f",
            shortnames: [":man_juggling_medium_skin_tone:"],
            category: "activity"
        },
        ":man_juggling_tone4:": {
            uc_base: "1f939-1f3fe-2642",
            uc_full: "1f939-1f3fe-200d-2642-fe0f",
            shortnames: [":man_juggling_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":man_juggling_tone5:": {
            uc_base: "1f939-1f3ff-2642",
            uc_full: "1f939-1f3ff-200d-2642-fe0f",
            shortnames: [":man_juggling_dark_skin_tone:"],
            category: "activity"
        },
        ":man_kneeling_tone1:": {
            uc_base: "1f9ce-1f3fb-2642",
            uc_full: "1f9ce-1f3fb-200d-2642-fe0f",
            shortnames: [":man_kneeling_light_skin_tone:"],
            category: "people"
        },
        ":man_kneeling_tone2:": {
            uc_base: "1f9ce-1f3fc-2642",
            uc_full: "1f9ce-1f3fc-200d-2642-fe0f",
            shortnames: [":man_kneeling_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_kneeling_tone3:": {
            uc_base: "1f9ce-1f3fd-2642",
            uc_full: "1f9ce-1f3fd-200d-2642-fe0f",
            shortnames: [":man_kneeling_medium_skin_tone:"],
            category: "people"
        },
        ":man_kneeling_tone4:": {
            uc_base: "1f9ce-1f3fe-2642",
            uc_full: "1f9ce-1f3fe-200d-2642-fe0f",
            shortnames: [":man_kneeling_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_kneeling_tone5:": {
            uc_base: "1f9ce-1f3ff-2642",
            uc_full: "1f9ce-1f3ff-200d-2642-fe0f",
            shortnames: [":man_kneeling_dark_skin_tone:"],
            category: "people"
        },
        ":man_lifting_weights_tone1:": {
            uc_base: "1f3cb-1f3fb-2642",
            uc_full: "1f3cb-fe0f-1f3fb-200d-2642-fe0f",
            shortnames: [":man_lifting_weights_light_skin_tone:"],
            category: "activity"
        },
        ":man_lifting_weights_tone2:": {
            uc_base: "1f3cb-1f3fc-2642",
            uc_full: "1f3cb-fe0f-1f3fc-200d-2642-fe0f",
            shortnames: [":man_lifting_weights_medium_light_skin_tone:"],
            category: "activity"
        },
        ":man_lifting_weights_tone3:": {
            uc_base: "1f3cb-1f3fd-2642",
            uc_full: "1f3cb-fe0f-1f3fd-200d-2642-fe0f",
            shortnames: [":man_lifting_weights_medium_skin_tone:"],
            category: "activity"
        },
        ":man_lifting_weights_tone4:": {
            uc_base: "1f3cb-1f3fe-2642",
            uc_full: "1f3cb-fe0f-1f3fe-200d-2642-fe0f",
            shortnames: [":man_lifting_weights_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":man_lifting_weights_tone5:": {
            uc_base: "1f3cb-1f3ff-2642",
            uc_full: "1f3cb-fe0f-1f3ff-200d-2642-fe0f",
            shortnames: [":man_lifting_weights_dark_skin_tone:"],
            category: "activity"
        },
        ":man_mage_tone1:": {
            uc_base: "1f9d9-1f3fb-2642",
            uc_full: "1f9d9-1f3fb-200d-2642-fe0f",
            shortnames: [":man_mage_light_skin_tone:"],
            category: "people"
        },
        ":man_mage_tone2:": {
            uc_base: "1f9d9-1f3fc-2642",
            uc_full: "1f9d9-1f3fc-200d-2642-fe0f",
            shortnames: [":man_mage_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_mage_tone3:": {
            uc_base: "1f9d9-1f3fd-2642",
            uc_full: "1f9d9-1f3fd-200d-2642-fe0f",
            shortnames: [":man_mage_medium_skin_tone:"],
            category: "people"
        },
        ":man_mage_tone4:": {
            uc_base: "1f9d9-1f3fe-2642",
            uc_full: "1f9d9-1f3fe-200d-2642-fe0f",
            shortnames: [":man_mage_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_mage_tone5:": {
            uc_base: "1f9d9-1f3ff-2642",
            uc_full: "1f9d9-1f3ff-200d-2642-fe0f",
            shortnames: [":man_mage_dark_skin_tone:"],
            category: "people"
        },
        ":man_mountain_biking_tone1:": {
            uc_base: "1f6b5-1f3fb-2642",
            uc_full: "1f6b5-1f3fb-200d-2642-fe0f",
            shortnames: [":man_mountain_biking_light_skin_tone:"],
            category: "activity"
        },
        ":man_mountain_biking_tone2:": {
            uc_base: "1f6b5-1f3fc-2642",
            uc_full: "1f6b5-1f3fc-200d-2642-fe0f",
            shortnames: [":man_mountain_biking_medium_light_skin_tone:"],
            category: "activity"
        },
        ":man_mountain_biking_tone3:": {
            uc_base: "1f6b5-1f3fd-2642",
            uc_full: "1f6b5-1f3fd-200d-2642-fe0f",
            shortnames: [":man_mountain_biking_medium_skin_tone:"],
            category: "activity"
        },
        ":man_mountain_biking_tone4:": {
            uc_base: "1f6b5-1f3fe-2642",
            uc_full: "1f6b5-1f3fe-200d-2642-fe0f",
            shortnames: [":man_mountain_biking_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":man_mountain_biking_tone5:": {
            uc_base: "1f6b5-1f3ff-2642",
            uc_full: "1f6b5-1f3ff-200d-2642-fe0f",
            shortnames: [":man_mountain_biking_dark_skin_tone:"],
            category: "activity"
        },
        ":man_pilot_tone1:": {
            uc_base: "1f468-1f3fb-2708",
            uc_full: "1f468-1f3fb-200d-2708-fe0f",
            shortnames: [":man_pilot_light_skin_tone:"],
            category: "people"
        },
        ":man_pilot_tone2:": {
            uc_base: "1f468-1f3fc-2708",
            uc_full: "1f468-1f3fc-200d-2708-fe0f",
            shortnames: [":man_pilot_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_pilot_tone3:": {
            uc_base: "1f468-1f3fd-2708",
            uc_full: "1f468-1f3fd-200d-2708-fe0f",
            shortnames: [":man_pilot_medium_skin_tone:"],
            category: "people"
        },
        ":man_pilot_tone4:": {
            uc_base: "1f468-1f3fe-2708",
            uc_full: "1f468-1f3fe-200d-2708-fe0f",
            shortnames: [":man_pilot_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_pilot_tone5:": {
            uc_base: "1f468-1f3ff-2708",
            uc_full: "1f468-1f3ff-200d-2708-fe0f",
            shortnames: [":man_pilot_dark_skin_tone:"],
            category: "people"
        },
        ":man_playing_handball_tone1:": {
            uc_base: "1f93e-1f3fb-2642",
            uc_full: "1f93e-1f3fb-200d-2642-fe0f",
            shortnames: [":man_playing_handball_light_skin_tone:"],
            category: "activity"
        },
        ":man_playing_handball_tone2:": {
            uc_base: "1f93e-1f3fc-2642",
            uc_full: "1f93e-1f3fc-200d-2642-fe0f",
            shortnames: [":man_playing_handball_medium_light_skin_tone:"],
            category: "activity"
        },
        ":man_playing_handball_tone3:": {
            uc_base: "1f93e-1f3fd-2642",
            uc_full: "1f93e-1f3fd-200d-2642-fe0f",
            shortnames: [":man_playing_handball_medium_skin_tone:"],
            category: "activity"
        },
        ":man_playing_handball_tone4:": {
            uc_base: "1f93e-1f3fe-2642",
            uc_full: "1f93e-1f3fe-200d-2642-fe0f",
            shortnames: [":man_playing_handball_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":man_playing_handball_tone5:": {
            uc_base: "1f93e-1f3ff-2642",
            uc_full: "1f93e-1f3ff-200d-2642-fe0f",
            shortnames: [":man_playing_handball_dark_skin_tone:"],
            category: "activity"
        },
        ":man_playing_water_polo_tone1:": {
            uc_base: "1f93d-1f3fb-2642",
            uc_full: "1f93d-1f3fb-200d-2642-fe0f",
            shortnames: [":man_playing_water_polo_light_skin_tone:"],
            category: "activity"
        },
        ":man_playing_water_polo_tone2:": {
            uc_base: "1f93d-1f3fc-2642",
            uc_full: "1f93d-1f3fc-200d-2642-fe0f",
            shortnames: [":man_playing_water_polo_medium_light_skin_tone:"],
            category: "activity"
        },
        ":man_playing_water_polo_tone3:": {
            uc_base: "1f93d-1f3fd-2642",
            uc_full: "1f93d-1f3fd-200d-2642-fe0f",
            shortnames: [":man_playing_water_polo_medium_skin_tone:"],
            category: "activity"
        },
        ":man_playing_water_polo_tone4:": {
            uc_base: "1f93d-1f3fe-2642",
            uc_full: "1f93d-1f3fe-200d-2642-fe0f",
            shortnames: [":man_playing_water_polo_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":man_playing_water_polo_tone5:": {
            uc_base: "1f93d-1f3ff-2642",
            uc_full: "1f93d-1f3ff-200d-2642-fe0f",
            shortnames: [":man_playing_water_polo_dark_skin_tone:"],
            category: "activity"
        },
        ":man_police_officer_tone1:": {
            uc_base: "1f46e-1f3fb-2642",
            uc_full: "1f46e-1f3fb-200d-2642-fe0f",
            shortnames: [":man_police_officer_light_skin_tone:"],
            category: "people"
        },
        ":man_police_officer_tone2:": {
            uc_base: "1f46e-1f3fc-2642",
            uc_full: "1f46e-1f3fc-200d-2642-fe0f",
            shortnames: [":man_police_officer_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_police_officer_tone3:": {
            uc_base: "1f46e-1f3fd-2642",
            uc_full: "1f46e-1f3fd-200d-2642-fe0f",
            shortnames: [":man_police_officer_medium_skin_tone:"],
            category: "people"
        },
        ":man_police_officer_tone4:": {
            uc_base: "1f46e-1f3fe-2642",
            uc_full: "1f46e-1f3fe-200d-2642-fe0f",
            shortnames: [":man_police_officer_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_police_officer_tone5:": {
            uc_base: "1f46e-1f3ff-2642",
            uc_full: "1f46e-1f3ff-200d-2642-fe0f",
            shortnames: [":man_police_officer_dark_skin_tone:"],
            category: "people"
        },
        ":man_pouting_tone1:": {
            uc_base: "1f64e-1f3fb-2642",
            uc_full: "1f64e-1f3fb-200d-2642-fe0f",
            shortnames: [":man_pouting_light_skin_tone:"],
            category: "people"
        },
        ":man_pouting_tone2:": {
            uc_base: "1f64e-1f3fc-2642",
            uc_full: "1f64e-1f3fc-200d-2642-fe0f",
            shortnames: [":man_pouting_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_pouting_tone3:": {
            uc_base: "1f64e-1f3fd-2642",
            uc_full: "1f64e-1f3fd-200d-2642-fe0f",
            shortnames: [":man_pouting_medium_skin_tone:"],
            category: "people"
        },
        ":man_pouting_tone4:": {
            uc_base: "1f64e-1f3fe-2642",
            uc_full: "1f64e-1f3fe-200d-2642-fe0f",
            shortnames: [":man_pouting_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_pouting_tone5:": {
            uc_base: "1f64e-1f3ff-2642",
            uc_full: "1f64e-1f3ff-200d-2642-fe0f",
            shortnames: [":man_pouting_dark_skin_tone:"],
            category: "people"
        },
        ":man_raising_hand_tone1:": {
            uc_base: "1f64b-1f3fb-2642",
            uc_full: "1f64b-1f3fb-200d-2642-fe0f",
            shortnames: [":man_raising_hand_light_skin_tone:"],
            category: "people"
        },
        ":man_raising_hand_tone2:": {
            uc_base: "1f64b-1f3fc-2642",
            uc_full: "1f64b-1f3fc-200d-2642-fe0f",
            shortnames: [":man_raising_hand_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_raising_hand_tone3:": {
            uc_base: "1f64b-1f3fd-2642",
            uc_full: "1f64b-1f3fd-200d-2642-fe0f",
            shortnames: [":man_raising_hand_medium_skin_tone:"],
            category: "people"
        },
        ":man_raising_hand_tone4:": {
            uc_base: "1f64b-1f3fe-2642",
            uc_full: "1f64b-1f3fe-200d-2642-fe0f",
            shortnames: [":man_raising_hand_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_raising_hand_tone5:": {
            uc_base: "1f64b-1f3ff-2642",
            uc_full: "1f64b-1f3ff-200d-2642-fe0f",
            shortnames: [":man_raising_hand_dark_skin_tone:"],
            category: "people"
        },
        ":man_rowing_boat_tone1:": {
            uc_base: "1f6a3-1f3fb-2642",
            uc_full: "1f6a3-1f3fb-200d-2642-fe0f",
            shortnames: [":man_rowing_boat_light_skin_tone:"],
            category: "activity"
        },
        ":man_rowing_boat_tone2:": {
            uc_base: "1f6a3-1f3fc-2642",
            uc_full: "1f6a3-1f3fc-200d-2642-fe0f",
            shortnames: [":man_rowing_boat_medium_light_skin_tone:"],
            category: "activity"
        },
        ":man_rowing_boat_tone3:": {
            uc_base: "1f6a3-1f3fd-2642",
            uc_full: "1f6a3-1f3fd-200d-2642-fe0f",
            shortnames: [":man_rowing_boat_medium_skin_tone:"],
            category: "activity"
        },
        ":man_rowing_boat_tone4:": {
            uc_base: "1f6a3-1f3fe-2642",
            uc_full: "1f6a3-1f3fe-200d-2642-fe0f",
            shortnames: [":man_rowing_boat_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":man_rowing_boat_tone5:": {
            uc_base: "1f6a3-1f3ff-2642",
            uc_full: "1f6a3-1f3ff-200d-2642-fe0f",
            shortnames: [":man_rowing_boat_dark_skin_tone:"],
            category: "activity"
        },
        ":man_running_tone1:": {
            uc_base: "1f3c3-1f3fb-2642",
            uc_full: "1f3c3-1f3fb-200d-2642-fe0f",
            shortnames: [":man_running_light_skin_tone:"],
            category: "people"
        },
        ":man_running_tone2:": {
            uc_base: "1f3c3-1f3fc-2642",
            uc_full: "1f3c3-1f3fc-200d-2642-fe0f",
            shortnames: [":man_running_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_running_tone3:": {
            uc_base: "1f3c3-1f3fd-2642",
            uc_full: "1f3c3-1f3fd-200d-2642-fe0f",
            shortnames: [":man_running_medium_skin_tone:"],
            category: "people"
        },
        ":man_running_tone4:": {
            uc_base: "1f3c3-1f3fe-2642",
            uc_full: "1f3c3-1f3fe-200d-2642-fe0f",
            shortnames: [":man_running_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_running_tone5:": {
            uc_base: "1f3c3-1f3ff-2642",
            uc_full: "1f3c3-1f3ff-200d-2642-fe0f",
            shortnames: [":man_running_dark_skin_tone:"],
            category: "people"
        },
        ":man_shrugging_tone1:": {
            uc_base: "1f937-1f3fb-2642",
            uc_full: "1f937-1f3fb-200d-2642-fe0f",
            shortnames: [":man_shrugging_light_skin_tone:"],
            category: "people"
        },
        ":man_shrugging_tone2:": {
            uc_base: "1f937-1f3fc-2642",
            uc_full: "1f937-1f3fc-200d-2642-fe0f",
            shortnames: [":man_shrugging_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_shrugging_tone3:": {
            uc_base: "1f937-1f3fd-2642",
            uc_full: "1f937-1f3fd-200d-2642-fe0f",
            shortnames: [":man_shrugging_medium_skin_tone:"],
            category: "people"
        },
        ":man_shrugging_tone4:": {
            uc_base: "1f937-1f3fe-2642",
            uc_full: "1f937-1f3fe-200d-2642-fe0f",
            shortnames: [":man_shrugging_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_shrugging_tone5:": {
            uc_base: "1f937-1f3ff-2642",
            uc_full: "1f937-1f3ff-200d-2642-fe0f",
            shortnames: [":man_shrugging_dark_skin_tone:"],
            category: "people"
        },
        ":man_standing_tone1:": {
            uc_base: "1f9cd-1f3fb-2642",
            uc_full: "1f9cd-1f3fb-200d-2642-fe0f",
            shortnames: [":man_standing_light_skin_tone:"],
            category: "people"
        },
        ":man_standing_tone2:": {
            uc_base: "1f9cd-1f3fc-2642",
            uc_full: "1f9cd-1f3fc-200d-2642-fe0f",
            shortnames: [":man_standing_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_standing_tone3:": {
            uc_base: "1f9cd-1f3fd-2642",
            uc_full: "1f9cd-1f3fd-200d-2642-fe0f",
            shortnames: [":man_standing_medium_skin_tone:"],
            category: "people"
        },
        ":man_standing_tone4:": {
            uc_base: "1f9cd-1f3fe-2642",
            uc_full: "1f9cd-1f3fe-200d-2642-fe0f",
            shortnames: [":man_standing_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_standing_tone5:": {
            uc_base: "1f9cd-1f3ff-2642",
            uc_full: "1f9cd-1f3ff-200d-2642-fe0f",
            shortnames: [":man_standing_dark_skin_tone:"],
            category: "people"
        },
        ":man_superhero_tone1:": {
            uc_base: "1f9b8-1f3fb-2642",
            uc_full: "1f9b8-1f3fb-200d-2642-fe0f",
            shortnames: [":man_superhero_light_skin_tone:"],
            category: "people"
        },
        ":man_superhero_tone2:": {
            uc_base: "1f9b8-1f3fc-2642",
            uc_full: "1f9b8-1f3fc-200d-2642-fe0f",
            shortnames: [":man_superhero_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_superhero_tone3:": {
            uc_base: "1f9b8-1f3fd-2642",
            uc_full: "1f9b8-1f3fd-200d-2642-fe0f",
            shortnames: [":man_superhero_medium_skin_tone:"],
            category: "people"
        },
        ":man_superhero_tone4:": {
            uc_base: "1f9b8-1f3fe-2642",
            uc_full: "1f9b8-1f3fe-200d-2642-fe0f",
            shortnames: [":man_superhero_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_superhero_tone5:": {
            uc_base: "1f9b8-1f3ff-2642",
            uc_full: "1f9b8-1f3ff-200d-2642-fe0f",
            shortnames: [":man_superhero_dark_skin_tone:"],
            category: "people"
        },
        ":man_supervillain_tone1:": {
            uc_base: "1f9b9-1f3fb-2642",
            uc_full: "1f9b9-1f3fb-200d-2642-fe0f",
            shortnames: [":man_supervillain_light_skin_tone:"],
            category: "people"
        },
        ":man_supervillain_tone2:": {
            uc_base: "1f9b9-1f3fc-2642",
            uc_full: "1f9b9-1f3fc-200d-2642-fe0f",
            shortnames: [":man_supervillain_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_supervillain_tone3:": {
            uc_base: "1f9b9-1f3fd-2642",
            uc_full: "1f9b9-1f3fd-200d-2642-fe0f",
            shortnames: [":man_supervillain_medium_skin_tone:"],
            category: "people"
        },
        ":man_supervillain_tone4:": {
            uc_base: "1f9b9-1f3fe-2642",
            uc_full: "1f9b9-1f3fe-200d-2642-fe0f",
            shortnames: [":man_supervillain_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_supervillain_tone5:": {
            uc_base: "1f9b9-1f3ff-2642",
            uc_full: "1f9b9-1f3ff-200d-2642-fe0f",
            shortnames: [":man_supervillain_dark_skin_tone:"],
            category: "people"
        },
        ":man_surfing_tone1:": {
            uc_base: "1f3c4-1f3fb-2642",
            uc_full: "1f3c4-1f3fb-200d-2642-fe0f",
            shortnames: [":man_surfing_light_skin_tone:"],
            category: "activity"
        },
        ":man_surfing_tone2:": {
            uc_base: "1f3c4-1f3fc-2642",
            uc_full: "1f3c4-1f3fc-200d-2642-fe0f",
            shortnames: [":man_surfing_medium_light_skin_tone:"],
            category: "activity"
        },
        ":man_surfing_tone3:": {
            uc_base: "1f3c4-1f3fd-2642",
            uc_full: "1f3c4-1f3fd-200d-2642-fe0f",
            shortnames: [":man_surfing_medium_skin_tone:"],
            category: "activity"
        },
        ":man_surfing_tone4:": {
            uc_base: "1f3c4-1f3fe-2642",
            uc_full: "1f3c4-1f3fe-200d-2642-fe0f",
            shortnames: [":man_surfing_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":man_surfing_tone5:": {
            uc_base: "1f3c4-1f3ff-2642",
            uc_full: "1f3c4-1f3ff-200d-2642-fe0f",
            shortnames: [":man_surfing_dark_skin_tone:"],
            category: "activity"
        },
        ":man_swimming_tone1:": {
            uc_base: "1f3ca-1f3fb-2642",
            uc_full: "1f3ca-1f3fb-200d-2642-fe0f",
            shortnames: [":man_swimming_light_skin_tone:"],
            category: "activity"
        },
        ":man_swimming_tone2:": {
            uc_base: "1f3ca-1f3fc-2642",
            uc_full: "1f3ca-1f3fc-200d-2642-fe0f",
            shortnames: [":man_swimming_medium_light_skin_tone:"],
            category: "activity"
        },
        ":man_swimming_tone3:": {
            uc_base: "1f3ca-1f3fd-2642",
            uc_full: "1f3ca-1f3fd-200d-2642-fe0f",
            shortnames: [":man_swimming_medium_skin_tone:"],
            category: "activity"
        },
        ":man_swimming_tone4:": {
            uc_base: "1f3ca-1f3fe-2642",
            uc_full: "1f3ca-1f3fe-200d-2642-fe0f",
            shortnames: [":man_swimming_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":man_swimming_tone5:": {
            uc_base: "1f3ca-1f3ff-2642",
            uc_full: "1f3ca-1f3ff-200d-2642-fe0f",
            shortnames: [":man_swimming_dark_skin_tone:"],
            category: "activity"
        },
        ":man_tipping_hand_tone1:": {
            uc_base: "1f481-1f3fb-2642",
            uc_full: "1f481-1f3fb-200d-2642-fe0f",
            shortnames: [":man_tipping_hand_light_skin_tone:"],
            category: "people"
        },
        ":man_tipping_hand_tone2:": {
            uc_base: "1f481-1f3fc-2642",
            uc_full: "1f481-1f3fc-200d-2642-fe0f",
            shortnames: [":man_tipping_hand_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_tipping_hand_tone3:": {
            uc_base: "1f481-1f3fd-2642",
            uc_full: "1f481-1f3fd-200d-2642-fe0f",
            shortnames: [":man_tipping_hand_medium_skin_tone:"],
            category: "people"
        },
        ":man_tipping_hand_tone4:": {
            uc_base: "1f481-1f3fe-2642",
            uc_full: "1f481-1f3fe-200d-2642-fe0f",
            shortnames: [":man_tipping_hand_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_tipping_hand_tone5:": {
            uc_base: "1f481-1f3ff-2642",
            uc_full: "1f481-1f3ff-200d-2642-fe0f",
            shortnames: [":man_tipping_hand_dark_skin_tone:"],
            category: "people"
        },
        ":man_vampire_tone1:": {
            uc_base: "1f9db-1f3fb-2642",
            uc_full: "1f9db-1f3fb-200d-2642-fe0f",
            shortnames: [":man_vampire_light_skin_tone:"],
            category: "people"
        },
        ":man_vampire_tone2:": {
            uc_base: "1f9db-1f3fc-2642",
            uc_full: "1f9db-1f3fc-200d-2642-fe0f",
            shortnames: [":man_vampire_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_vampire_tone3:": {
            uc_base: "1f9db-1f3fd-2642",
            uc_full: "1f9db-1f3fd-200d-2642-fe0f",
            shortnames: [":man_vampire_medium_skin_tone:"],
            category: "people"
        },
        ":man_vampire_tone4:": {
            uc_base: "1f9db-1f3fe-2642",
            uc_full: "1f9db-1f3fe-200d-2642-fe0f",
            shortnames: [":man_vampire_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_vampire_tone5:": {
            uc_base: "1f9db-1f3ff-2642",
            uc_full: "1f9db-1f3ff-200d-2642-fe0f",
            shortnames: [":man_vampire_dark_skin_tone:"],
            category: "people"
        },
        ":man_walking_tone1:": {
            uc_base: "1f6b6-1f3fb-2642",
            uc_full: "1f6b6-1f3fb-200d-2642-fe0f",
            shortnames: [":man_walking_light_skin_tone:"],
            category: "people"
        },
        ":man_walking_tone2:": {
            uc_base: "1f6b6-1f3fc-2642",
            uc_full: "1f6b6-1f3fc-200d-2642-fe0f",
            shortnames: [":man_walking_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_walking_tone3:": {
            uc_base: "1f6b6-1f3fd-2642",
            uc_full: "1f6b6-1f3fd-200d-2642-fe0f",
            shortnames: [":man_walking_medium_skin_tone:"],
            category: "people"
        },
        ":man_walking_tone4:": {
            uc_base: "1f6b6-1f3fe-2642",
            uc_full: "1f6b6-1f3fe-200d-2642-fe0f",
            shortnames: [":man_walking_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_walking_tone5:": {
            uc_base: "1f6b6-1f3ff-2642",
            uc_full: "1f6b6-1f3ff-200d-2642-fe0f",
            shortnames: [":man_walking_dark_skin_tone:"],
            category: "people"
        },
        ":man_wearing_turban_tone1:": {
            uc_base: "1f473-1f3fb-2642",
            uc_full: "1f473-1f3fb-200d-2642-fe0f",
            shortnames: [":man_wearing_turban_light_skin_tone:"],
            category: "people"
        },
        ":man_wearing_turban_tone2:": {
            uc_base: "1f473-1f3fc-2642",
            uc_full: "1f473-1f3fc-200d-2642-fe0f",
            shortnames: [":man_wearing_turban_medium_light_skin_tone:"],
            category: "people"
        },
        ":man_wearing_turban_tone3:": {
            uc_base: "1f473-1f3fd-2642",
            uc_full: "1f473-1f3fd-200d-2642-fe0f",
            shortnames: [":man_wearing_turban_medium_skin_tone:"],
            category: "people"
        },
        ":man_wearing_turban_tone4:": {
            uc_base: "1f473-1f3fe-2642",
            uc_full: "1f473-1f3fe-200d-2642-fe0f",
            shortnames: [":man_wearing_turban_medium_dark_skin_tone:"],
            category: "people"
        },
        ":man_wearing_turban_tone5:": {
            uc_base: "1f473-1f3ff-2642",
            uc_full: "1f473-1f3ff-200d-2642-fe0f",
            shortnames: [":man_wearing_turban_dark_skin_tone:"],
            category: "people"
        },
        ":mermaid_tone1:": {
            uc_base: "1f9dc-1f3fb-2640",
            uc_full: "1f9dc-1f3fb-200d-2640-fe0f",
            shortnames: [":mermaid_light_skin_tone:"],
            category: "people"
        },
        ":mermaid_tone2:": {
            uc_base: "1f9dc-1f3fc-2640",
            uc_full: "1f9dc-1f3fc-200d-2640-fe0f",
            shortnames: [":mermaid_medium_light_skin_tone:"],
            category: "people"
        },
        ":mermaid_tone3:": {
            uc_base: "1f9dc-1f3fd-2640",
            uc_full: "1f9dc-1f3fd-200d-2640-fe0f",
            shortnames: [":mermaid_medium_skin_tone:"],
            category: "people"
        },
        ":mermaid_tone4:": {
            uc_base: "1f9dc-1f3fe-2640",
            uc_full: "1f9dc-1f3fe-200d-2640-fe0f",
            shortnames: [":mermaid_medium_dark_skin_tone:"],
            category: "people"
        },
        ":mermaid_tone5:": {
            uc_base: "1f9dc-1f3ff-2640",
            uc_full: "1f9dc-1f3ff-200d-2640-fe0f",
            shortnames: [":mermaid_dark_skin_tone:"],
            category: "people"
        },
        ":merman_tone1:": {
            uc_base: "1f9dc-1f3fb-2642",
            uc_full: "1f9dc-1f3fb-200d-2642-fe0f",
            shortnames: [":merman_light_skin_tone:"],
            category: "people"
        },
        ":merman_tone2:": {
            uc_base: "1f9dc-1f3fc-2642",
            uc_full: "1f9dc-1f3fc-200d-2642-fe0f",
            shortnames: [":merman_medium_light_skin_tone:"],
            category: "people"
        },
        ":merman_tone3:": {
            uc_base: "1f9dc-1f3fd-2642",
            uc_full: "1f9dc-1f3fd-200d-2642-fe0f",
            shortnames: [":merman_medium_skin_tone:"],
            category: "people"
        },
        ":merman_tone4:": {
            uc_base: "1f9dc-1f3fe-2642",
            uc_full: "1f9dc-1f3fe-200d-2642-fe0f",
            shortnames: [":merman_medium_dark_skin_tone:"],
            category: "people"
        },
        ":merman_tone5:": {
            uc_base: "1f9dc-1f3ff-2642",
            uc_full: "1f9dc-1f3ff-200d-2642-fe0f",
            shortnames: [":merman_dark_skin_tone:"],
            category: "people"
        },
        ":woman_biking_tone1:": {
            uc_base: "1f6b4-1f3fb-2640",
            uc_full: "1f6b4-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_biking_light_skin_tone:"],
            category: "activity"
        },
        ":woman_biking_tone2:": {
            uc_base: "1f6b4-1f3fc-2640",
            uc_full: "1f6b4-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_biking_medium_light_skin_tone:"],
            category: "activity"
        },
        ":woman_biking_tone3:": {
            uc_base: "1f6b4-1f3fd-2640",
            uc_full: "1f6b4-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_biking_medium_skin_tone:"],
            category: "activity"
        },
        ":woman_biking_tone4:": {
            uc_base: "1f6b4-1f3fe-2640",
            uc_full: "1f6b4-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_biking_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_biking_tone5:": {
            uc_base: "1f6b4-1f3ff-2640",
            uc_full: "1f6b4-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_biking_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_bowing_tone1:": {
            uc_base: "1f647-1f3fb-2640",
            uc_full: "1f647-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_bowing_light_skin_tone:"],
            category: "people"
        },
        ":woman_bowing_tone2:": {
            uc_base: "1f647-1f3fc-2640",
            uc_full: "1f647-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_bowing_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_bowing_tone3:": {
            uc_base: "1f647-1f3fd-2640",
            uc_full: "1f647-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_bowing_medium_skin_tone:"],
            category: "people"
        },
        ":woman_bowing_tone4:": {
            uc_base: "1f647-1f3fe-2640",
            uc_full: "1f647-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_bowing_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_bowing_tone5:": {
            uc_base: "1f647-1f3ff-2640",
            uc_full: "1f647-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_bowing_dark_skin_tone:"],
            category: "people"
        },
        ":woman_cartwheeling_tone1:": {
            uc_base: "1f938-1f3fb-2640",
            uc_full: "1f938-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_cartwheeling_light_skin_tone:"],
            category: "activity"
        },
        ":woman_cartwheeling_tone2:": {
            uc_base: "1f938-1f3fc-2640",
            uc_full: "1f938-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_cartwheeling_medium_light_skin_tone:"],
            category: "activity"
        },
        ":woman_cartwheeling_tone3:": {
            uc_base: "1f938-1f3fd-2640",
            uc_full: "1f938-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_cartwheeling_medium_skin_tone:"],
            category: "activity"
        },
        ":woman_cartwheeling_tone4:": {
            uc_base: "1f938-1f3fe-2640",
            uc_full: "1f938-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_cartwheeling_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_cartwheeling_tone5:": {
            uc_base: "1f938-1f3ff-2640",
            uc_full: "1f938-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_cartwheeling_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_climbing_tone1:": {
            uc_base: "1f9d7-1f3fb-2640",
            uc_full: "1f9d7-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_climbing_light_skin_tone:"],
            category: "activity"
        },
        ":woman_climbing_tone2:": {
            uc_base: "1f9d7-1f3fc-2640",
            uc_full: "1f9d7-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_climbing_medium_light_skin_tone:"],
            category: "activity"
        },
        ":woman_climbing_tone3:": {
            uc_base: "1f9d7-1f3fd-2640",
            uc_full: "1f9d7-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_climbing_medium_skin_tone:"],
            category: "activity"
        },
        ":woman_climbing_tone4:": {
            uc_base: "1f9d7-1f3fe-2640",
            uc_full: "1f9d7-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_climbing_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_climbing_tone5:": {
            uc_base: "1f9d7-1f3ff-2640",
            uc_full: "1f9d7-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_climbing_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_construction_worker_tone1:": {
            uc_base: "1f477-1f3fb-2640",
            uc_full: "1f477-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_construction_worker_light_skin_tone:"],
            category: "people"
        },
        ":woman_construction_worker_tone2:": {
            uc_base: "1f477-1f3fc-2640",
            uc_full: "1f477-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_construction_worker_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_construction_worker_tone3:": {
            uc_base: "1f477-1f3fd-2640",
            uc_full: "1f477-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_construction_worker_medium_skin_tone:"],
            category: "people"
        },
        ":woman_construction_worker_tone4:": {
            uc_base: "1f477-1f3fe-2640",
            uc_full: "1f477-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_construction_worker_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_construction_worker_tone5:": {
            uc_base: "1f477-1f3ff-2640",
            uc_full: "1f477-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_construction_worker_dark_skin_tone:"],
            category: "people"
        },
        ":woman_detective_tone1:": {
            uc_base: "1f575-1f3fb-2640",
            uc_full: "1f575-fe0f-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_detective_light_skin_tone:"],
            category: "people"
        },
        ":woman_detective_tone2:": {
            uc_base: "1f575-1f3fc-2640",
            uc_full: "1f575-fe0f-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_detective_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_detective_tone3:": {
            uc_base: "1f575-1f3fd-2640",
            uc_full: "1f575-fe0f-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_detective_medium_skin_tone:"],
            category: "people"
        },
        ":woman_detective_tone4:": {
            uc_base: "1f575-1f3fe-2640",
            uc_full: "1f575-fe0f-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_detective_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_detective_tone5:": {
            uc_base: "1f575-1f3ff-2640",
            uc_full: "1f575-fe0f-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_detective_dark_skin_tone:"],
            category: "people"
        },
        ":woman_elf_tone1:": {
            uc_base: "1f9dd-1f3fb-2640",
            uc_full: "1f9dd-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_elf_light_skin_tone:"],
            category: "people"
        },
        ":woman_elf_tone2:": {
            uc_base: "1f9dd-1f3fc-2640",
            uc_full: "1f9dd-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_elf_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_elf_tone3:": {
            uc_base: "1f9dd-1f3fd-2640",
            uc_full: "1f9dd-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_elf_medium_skin_tone:"],
            category: "people"
        },
        ":woman_elf_tone4:": {
            uc_base: "1f9dd-1f3fe-2640",
            uc_full: "1f9dd-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_elf_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_elf_tone5:": {
            uc_base: "1f9dd-1f3ff-2640",
            uc_full: "1f9dd-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_elf_dark_skin_tone:"],
            category: "people"
        },
        ":woman_facepalming_tone1:": {
            uc_base: "1f926-1f3fb-2640",
            uc_full: "1f926-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_facepalming_light_skin_tone:"],
            category: "people"
        },
        ":woman_facepalming_tone2:": {
            uc_base: "1f926-1f3fc-2640",
            uc_full: "1f926-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_facepalming_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_facepalming_tone3:": {
            uc_base: "1f926-1f3fd-2640",
            uc_full: "1f926-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_facepalming_medium_skin_tone:"],
            category: "people"
        },
        ":woman_facepalming_tone4:": {
            uc_base: "1f926-1f3fe-2640",
            uc_full: "1f926-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_facepalming_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_facepalming_tone5:": {
            uc_base: "1f926-1f3ff-2640",
            uc_full: "1f926-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_facepalming_dark_skin_tone:"],
            category: "people"
        },
        ":woman_fairy_tone1:": {
            uc_base: "1f9da-1f3fb-2640",
            uc_full: "1f9da-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_fairy_light_skin_tone:"],
            category: "people"
        },
        ":woman_fairy_tone2:": {
            uc_base: "1f9da-1f3fc-2640",
            uc_full: "1f9da-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_fairy_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_fairy_tone3:": {
            uc_base: "1f9da-1f3fd-2640",
            uc_full: "1f9da-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_fairy_medium_skin_tone:"],
            category: "people"
        },
        ":woman_fairy_tone4:": {
            uc_base: "1f9da-1f3fe-2640",
            uc_full: "1f9da-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_fairy_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_fairy_tone5:": {
            uc_base: "1f9da-1f3ff-2640",
            uc_full: "1f9da-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_fairy_dark_skin_tone:"],
            category: "people"
        },
        ":woman_frowning_tone1:": {
            uc_base: "1f64d-1f3fb-2640",
            uc_full: "1f64d-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_frowning_light_skin_tone:"],
            category: "people"
        },
        ":woman_frowning_tone2:": {
            uc_base: "1f64d-1f3fc-2640",
            uc_full: "1f64d-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_frowning_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_frowning_tone3:": {
            uc_base: "1f64d-1f3fd-2640",
            uc_full: "1f64d-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_frowning_medium_skin_tone:"],
            category: "people"
        },
        ":woman_frowning_tone4:": {
            uc_base: "1f64d-1f3fe-2640",
            uc_full: "1f64d-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_frowning_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_frowning_tone5:": {
            uc_base: "1f64d-1f3ff-2640",
            uc_full: "1f64d-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_frowning_dark_skin_tone:"],
            category: "people"
        },
        ":woman_gesturing_no_tone1:": {
            uc_base: "1f645-1f3fb-2640",
            uc_full: "1f645-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_gesturing_no_light_skin_tone:"],
            category: "people"
        },
        ":woman_gesturing_no_tone2:": {
            uc_base: "1f645-1f3fc-2640",
            uc_full: "1f645-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_gesturing_no_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_gesturing_no_tone3:": {
            uc_base: "1f645-1f3fd-2640",
            uc_full: "1f645-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_gesturing_no_medium_skin_tone:"],
            category: "people"
        },
        ":woman_gesturing_no_tone4:": {
            uc_base: "1f645-1f3fe-2640",
            uc_full: "1f645-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_gesturing_no_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_gesturing_no_tone5:": {
            uc_base: "1f645-1f3ff-2640",
            uc_full: "1f645-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_gesturing_no_dark_skin_tone:"],
            category: "people"
        },
        ":woman_gesturing_ok_tone1:": {
            uc_base: "1f646-1f3fb-2640",
            uc_full: "1f646-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_gesturing_ok_light_skin_tone:"],
            category: "people"
        },
        ":woman_gesturing_ok_tone2:": {
            uc_base: "1f646-1f3fc-2640",
            uc_full: "1f646-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_gesturing_ok_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_gesturing_ok_tone3:": {
            uc_base: "1f646-1f3fd-2640",
            uc_full: "1f646-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_gesturing_ok_medium_skin_tone:"],
            category: "people"
        },
        ":woman_gesturing_ok_tone4:": {
            uc_base: "1f646-1f3fe-2640",
            uc_full: "1f646-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_gesturing_ok_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_gesturing_ok_tone5:": {
            uc_base: "1f646-1f3ff-2640",
            uc_full: "1f646-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_gesturing_ok_dark_skin_tone:"],
            category: "people"
        },
        ":woman_getting_face_massage_tone1:": {
            uc_base: "1f486-1f3fb-2640",
            uc_full: "1f486-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_getting_face_massage_light_skin_tone:"],
            category: "people"
        },
        ":woman_getting_face_massage_tone2:": {
            uc_base: "1f486-1f3fc-2640",
            uc_full: "1f486-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_getting_face_massage_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_getting_face_massage_tone3:": {
            uc_base: "1f486-1f3fd-2640",
            uc_full: "1f486-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_getting_face_massage_medium_skin_tone:"],
            category: "people"
        },
        ":woman_getting_face_massage_tone4:": {
            uc_base: "1f486-1f3fe-2640",
            uc_full: "1f486-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_getting_face_massage_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_getting_face_massage_tone5:": {
            uc_base: "1f486-1f3ff-2640",
            uc_full: "1f486-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_getting_face_massage_dark_skin_tone:"],
            category: "people"
        },
        ":woman_getting_haircut_tone1:": {
            uc_base: "1f487-1f3fb-2640",
            uc_full: "1f487-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_getting_haircut_light_skin_tone:"],
            category: "people"
        },
        ":woman_getting_haircut_tone2:": {
            uc_base: "1f487-1f3fc-2640",
            uc_full: "1f487-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_getting_haircut_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_getting_haircut_tone3:": {
            uc_base: "1f487-1f3fd-2640",
            uc_full: "1f487-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_getting_haircut_medium_skin_tone:"],
            category: "people"
        },
        ":woman_getting_haircut_tone4:": {
            uc_base: "1f487-1f3fe-2640",
            uc_full: "1f487-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_getting_haircut_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_getting_haircut_tone5:": {
            uc_base: "1f487-1f3ff-2640",
            uc_full: "1f487-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_getting_haircut_dark_skin_tone:"],
            category: "people"
        },
        ":woman_golfing_tone1:": {
            uc_base: "1f3cc-1f3fb-2640",
            uc_full: "1f3cc-fe0f-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_golfing_light_skin_tone:"],
            category: "activity"
        },
        ":woman_golfing_tone2:": {
            uc_base: "1f3cc-1f3fc-2640",
            uc_full: "1f3cc-fe0f-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_golfing_medium_light_skin_tone:"],
            category: "activity"
        },
        ":woman_golfing_tone3:": {
            uc_base: "1f3cc-1f3fd-2640",
            uc_full: "1f3cc-fe0f-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_golfing_medium_skin_tone:"],
            category: "activity"
        },
        ":woman_golfing_tone4:": {
            uc_base: "1f3cc-1f3fe-2640",
            uc_full: "1f3cc-fe0f-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_golfing_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_golfing_tone5:": {
            uc_base: "1f3cc-1f3ff-2640",
            uc_full: "1f3cc-fe0f-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_golfing_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_guard_tone1:": {
            uc_base: "1f482-1f3fb-2640",
            uc_full: "1f482-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_guard_light_skin_tone:"],
            category: "people"
        },
        ":woman_guard_tone2:": {
            uc_base: "1f482-1f3fc-2640",
            uc_full: "1f482-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_guard_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_guard_tone3:": {
            uc_base: "1f482-1f3fd-2640",
            uc_full: "1f482-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_guard_medium_skin_tone:"],
            category: "people"
        },
        ":woman_guard_tone4:": {
            uc_base: "1f482-1f3fe-2640",
            uc_full: "1f482-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_guard_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_guard_tone5:": {
            uc_base: "1f482-1f3ff-2640",
            uc_full: "1f482-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_guard_dark_skin_tone:"],
            category: "people"
        },
        ":woman_health_worker_tone1:": {
            uc_base: "1f469-1f3fb-2695",
            uc_full: "1f469-1f3fb-200d-2695-fe0f",
            shortnames: [":woman_health_worker_light_skin_tone:"],
            category: "people"
        },
        ":woman_health_worker_tone2:": {
            uc_base: "1f469-1f3fc-2695",
            uc_full: "1f469-1f3fc-200d-2695-fe0f",
            shortnames: [":woman_health_worker_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_health_worker_tone3:": {
            uc_base: "1f469-1f3fd-2695",
            uc_full: "1f469-1f3fd-200d-2695-fe0f",
            shortnames: [":woman_health_worker_medium_skin_tone:"],
            category: "people"
        },
        ":woman_health_worker_tone4:": {
            uc_base: "1f469-1f3fe-2695",
            uc_full: "1f469-1f3fe-200d-2695-fe0f",
            shortnames: [":woman_health_worker_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_health_worker_tone5:": {
            uc_base: "1f469-1f3ff-2695",
            uc_full: "1f469-1f3ff-200d-2695-fe0f",
            shortnames: [":woman_health_worker_dark_skin_tone:"],
            category: "people"
        },
        ":woman_in_lotus_position_tone1:": {
            uc_base: "1f9d8-1f3fb-2640",
            uc_full: "1f9d8-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_in_lotus_position_light_skin_tone:"],
            category: "activity"
        },
        ":woman_in_lotus_position_tone2:": {
            uc_base: "1f9d8-1f3fc-2640",
            uc_full: "1f9d8-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_in_lotus_position_medium_light_skin_tone:"],
            category: "activity"
        },
        ":woman_in_lotus_position_tone3:": {
            uc_base: "1f9d8-1f3fd-2640",
            uc_full: "1f9d8-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_in_lotus_position_medium_skin_tone:"],
            category: "activity"
        },
        ":woman_in_lotus_position_tone4:": {
            uc_base: "1f9d8-1f3fe-2640",
            uc_full: "1f9d8-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_in_lotus_position_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_in_lotus_position_tone5:": {
            uc_base: "1f9d8-1f3ff-2640",
            uc_full: "1f9d8-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_in_lotus_position_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_in_steamy_room_tone1:": {
            uc_base: "1f9d6-1f3fb-2640",
            uc_full: "1f9d6-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_in_steamy_room_light_skin_tone:"],
            category: "people"
        },
        ":woman_in_steamy_room_tone2:": {
            uc_base: "1f9d6-1f3fc-2640",
            uc_full: "1f9d6-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_in_steamy_room_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_in_steamy_room_tone3:": {
            uc_base: "1f9d6-1f3fd-2640",
            uc_full: "1f9d6-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_in_steamy_room_medium_skin_tone:"],
            category: "people"
        },
        ":woman_in_steamy_room_tone4:": {
            uc_base: "1f9d6-1f3fe-2640",
            uc_full: "1f9d6-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_in_steamy_room_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_in_steamy_room_tone5:": {
            uc_base: "1f9d6-1f3ff-2640",
            uc_full: "1f9d6-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_in_steamy_room_dark_skin_tone:"],
            category: "people"
        },
        ":woman_judge_tone1:": {
            uc_base: "1f469-1f3fb-2696",
            uc_full: "1f469-1f3fb-200d-2696-fe0f",
            shortnames: [":woman_judge_light_skin_tone:"],
            category: "people"
        },
        ":woman_judge_tone2:": {
            uc_base: "1f469-1f3fc-2696",
            uc_full: "1f469-1f3fc-200d-2696-fe0f",
            shortnames: [":woman_judge_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_judge_tone3:": {
            uc_base: "1f469-1f3fd-2696",
            uc_full: "1f469-1f3fd-200d-2696-fe0f",
            shortnames: [":woman_judge_medium_skin_tone:"],
            category: "people"
        },
        ":woman_judge_tone4:": {
            uc_base: "1f469-1f3fe-2696",
            uc_full: "1f469-1f3fe-200d-2696-fe0f",
            shortnames: [":woman_judge_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_judge_tone5:": {
            uc_base: "1f469-1f3ff-2696",
            uc_full: "1f469-1f3ff-200d-2696-fe0f",
            shortnames: [":woman_judge_dark_skin_tone:"],
            category: "people"
        },
        ":woman_juggling_tone1:": {
            uc_base: "1f939-1f3fb-2640",
            uc_full: "1f939-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_juggling_light_skin_tone:"],
            category: "activity"
        },
        ":woman_juggling_tone2:": {
            uc_base: "1f939-1f3fc-2640",
            uc_full: "1f939-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_juggling_medium_light_skin_tone:"],
            category: "activity"
        },
        ":woman_juggling_tone3:": {
            uc_base: "1f939-1f3fd-2640",
            uc_full: "1f939-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_juggling_medium_skin_tone:"],
            category: "activity"
        },
        ":woman_juggling_tone4:": {
            uc_base: "1f939-1f3fe-2640",
            uc_full: "1f939-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_juggling_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_juggling_tone5:": {
            uc_base: "1f939-1f3ff-2640",
            uc_full: "1f939-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_juggling_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_kneeling_tone1:": {
            uc_base: "1f9ce-1f3fb-2640",
            uc_full: "1f9ce-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_kneeling_light_skin_tone:"],
            category: "people"
        },
        ":woman_kneeling_tone2:": {
            uc_base: "1f9ce-1f3fc-2640",
            uc_full: "1f9ce-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_kneeling_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_kneeling_tone3:": {
            uc_base: "1f9ce-1f3fd-2640",
            uc_full: "1f9ce-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_kneeling_medium_skin_tone:"],
            category: "people"
        },
        ":woman_kneeling_tone4:": {
            uc_base: "1f9ce-1f3fe-2640",
            uc_full: "1f9ce-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_kneeling_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_kneeling_tone5:": {
            uc_base: "1f9ce-1f3ff-2640",
            uc_full: "1f9ce-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_kneeling_dark_skin_tone:"],
            category: "people"
        },
        ":woman_lifting_weights_tone1:": {
            uc_base: "1f3cb-1f3fb-2640",
            uc_full: "1f3cb-fe0f-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_lifting_weights_light_skin_tone:"],
            category: "activity"
        },
        ":woman_lifting_weights_tone2:": {
            uc_base: "1f3cb-1f3fc-2640",
            uc_full: "1f3cb-fe0f-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_lifting_weights_medium_light_skin_tone:"],
            category: "activity"
        },
        ":woman_lifting_weights_tone3:": {
            uc_base: "1f3cb-1f3fd-2640",
            uc_full: "1f3cb-fe0f-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_lifting_weights_medium_skin_tone:"],
            category: "activity"
        },
        ":woman_lifting_weights_tone4:": {
            uc_base: "1f3cb-1f3fe-2640",
            uc_full: "1f3cb-fe0f-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_lifting_weights_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_lifting_weights_tone5:": {
            uc_base: "1f3cb-1f3ff-2640",
            uc_full: "1f3cb-fe0f-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_lifting_weights_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_mage_tone1:": {
            uc_base: "1f9d9-1f3fb-2640",
            uc_full: "1f9d9-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_mage_light_skin_tone:"],
            category: "people"
        },
        ":woman_mage_tone2:": {
            uc_base: "1f9d9-1f3fc-2640",
            uc_full: "1f9d9-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_mage_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_mage_tone3:": {
            uc_base: "1f9d9-1f3fd-2640",
            uc_full: "1f9d9-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_mage_medium_skin_tone:"],
            category: "people"
        },
        ":woman_mage_tone4:": {
            uc_base: "1f9d9-1f3fe-2640",
            uc_full: "1f9d9-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_mage_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_mage_tone5:": {
            uc_base: "1f9d9-1f3ff-2640",
            uc_full: "1f9d9-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_mage_dark_skin_tone:"],
            category: "people"
        },
        ":woman_mountain_biking_tone1:": {
            uc_base: "1f6b5-1f3fb-2640",
            uc_full: "1f6b5-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_mountain_biking_light_skin_tone:"],
            category: "activity"
        },
        ":woman_mountain_biking_tone2:": {
            uc_base: "1f6b5-1f3fc-2640",
            uc_full: "1f6b5-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_mountain_biking_medium_light_skin_tone:"],
            category: "activity"
        },
        ":woman_mountain_biking_tone3:": {
            uc_base: "1f6b5-1f3fd-2640",
            uc_full: "1f6b5-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_mountain_biking_medium_skin_tone:"],
            category: "activity"
        },
        ":woman_mountain_biking_tone4:": {
            uc_base: "1f6b5-1f3fe-2640",
            uc_full: "1f6b5-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_mountain_biking_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_mountain_biking_tone5:": {
            uc_base: "1f6b5-1f3ff-2640",
            uc_full: "1f6b5-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_mountain_biking_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_pilot_tone1:": {
            uc_base: "1f469-1f3fb-2708",
            uc_full: "1f469-1f3fb-200d-2708-fe0f",
            shortnames: [":woman_pilot_light_skin_tone:"],
            category: "people"
        },
        ":woman_pilot_tone2:": {
            uc_base: "1f469-1f3fc-2708",
            uc_full: "1f469-1f3fc-200d-2708-fe0f",
            shortnames: [":woman_pilot_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_pilot_tone3:": {
            uc_base: "1f469-1f3fd-2708",
            uc_full: "1f469-1f3fd-200d-2708-fe0f",
            shortnames: [":woman_pilot_medium_skin_tone:"],
            category: "people"
        },
        ":woman_pilot_tone4:": {
            uc_base: "1f469-1f3fe-2708",
            uc_full: "1f469-1f3fe-200d-2708-fe0f",
            shortnames: [":woman_pilot_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_pilot_tone5:": {
            uc_base: "1f469-1f3ff-2708",
            uc_full: "1f469-1f3ff-200d-2708-fe0f",
            shortnames: [":woman_pilot_dark_skin_tone:"],
            category: "people"
        },
        ":woman_playing_handball_tone1:": {
            uc_base: "1f93e-1f3fb-2640",
            uc_full: "1f93e-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_playing_handball_light_skin_tone:"],
            category: "activity"
        },
        ":woman_playing_handball_tone2:": {
            uc_base: "1f93e-1f3fc-2640",
            uc_full: "1f93e-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_playing_handball_medium_light_skin_tone:"],
            category: "activity"
        },
        ":woman_playing_handball_tone3:": {
            uc_base: "1f93e-1f3fd-2640",
            uc_full: "1f93e-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_playing_handball_medium_skin_tone:"],
            category: "activity"
        },
        ":woman_playing_handball_tone4:": {
            uc_base: "1f93e-1f3fe-2640",
            uc_full: "1f93e-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_playing_handball_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_playing_handball_tone5:": {
            uc_base: "1f93e-1f3ff-2640",
            uc_full: "1f93e-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_playing_handball_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_playing_water_polo_tone1:": {
            uc_base: "1f93d-1f3fb-2640",
            uc_full: "1f93d-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_playing_water_polo_light_skin_tone:"],
            category: "activity"
        },
        ":woman_playing_water_polo_tone2:": {
            uc_base: "1f93d-1f3fc-2640",
            uc_full: "1f93d-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_playing_water_polo_medium_light_skin_tone:"],
            category: "activity"
        },
        ":woman_playing_water_polo_tone3:": {
            uc_base: "1f93d-1f3fd-2640",
            uc_full: "1f93d-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_playing_water_polo_medium_skin_tone:"],
            category: "activity"
        },
        ":woman_playing_water_polo_tone4:": {
            uc_base: "1f93d-1f3fe-2640",
            uc_full: "1f93d-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_playing_water_polo_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_playing_water_polo_tone5:": {
            uc_base: "1f93d-1f3ff-2640",
            uc_full: "1f93d-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_playing_water_polo_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_police_officer_tone1:": {
            uc_base: "1f46e-1f3fb-2640",
            uc_full: "1f46e-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_police_officer_light_skin_tone:"],
            category: "people"
        },
        ":woman_police_officer_tone2:": {
            uc_base: "1f46e-1f3fc-2640",
            uc_full: "1f46e-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_police_officer_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_police_officer_tone3:": {
            uc_base: "1f46e-1f3fd-2640",
            uc_full: "1f46e-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_police_officer_medium_skin_tone:"],
            category: "people"
        },
        ":woman_police_officer_tone4:": {
            uc_base: "1f46e-1f3fe-2640",
            uc_full: "1f46e-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_police_officer_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_police_officer_tone5:": {
            uc_base: "1f46e-1f3ff-2640",
            uc_full: "1f46e-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_police_officer_dark_skin_tone:"],
            category: "people"
        },
        ":woman_pouting_tone1:": {
            uc_base: "1f64e-1f3fb-2640",
            uc_full: "1f64e-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_pouting_light_skin_tone:"],
            category: "people"
        },
        ":woman_pouting_tone2:": {
            uc_base: "1f64e-1f3fc-2640",
            uc_full: "1f64e-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_pouting_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_pouting_tone3:": {
            uc_base: "1f64e-1f3fd-2640",
            uc_full: "1f64e-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_pouting_medium_skin_tone:"],
            category: "people"
        },
        ":woman_pouting_tone4:": {
            uc_base: "1f64e-1f3fe-2640",
            uc_full: "1f64e-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_pouting_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_pouting_tone5:": {
            uc_base: "1f64e-1f3ff-2640",
            uc_full: "1f64e-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_pouting_dark_skin_tone:"],
            category: "people"
        },
        ":woman_raising_hand_tone1:": {
            uc_base: "1f64b-1f3fb-2640",
            uc_full: "1f64b-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_raising_hand_light_skin_tone:"],
            category: "people"
        },
        ":woman_raising_hand_tone2:": {
            uc_base: "1f64b-1f3fc-2640",
            uc_full: "1f64b-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_raising_hand_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_raising_hand_tone3:": {
            uc_base: "1f64b-1f3fd-2640",
            uc_full: "1f64b-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_raising_hand_medium_skin_tone:"],
            category: "people"
        },
        ":woman_raising_hand_tone4:": {
            uc_base: "1f64b-1f3fe-2640",
            uc_full: "1f64b-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_raising_hand_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_raising_hand_tone5:": {
            uc_base: "1f64b-1f3ff-2640",
            uc_full: "1f64b-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_raising_hand_dark_skin_tone:"],
            category: "people"
        },
        ":woman_rowing_boat_tone1:": {
            uc_base: "1f6a3-1f3fb-2640",
            uc_full: "1f6a3-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_rowing_boat_light_skin_tone:"],
            category: "activity"
        },
        ":woman_rowing_boat_tone2:": {
            uc_base: "1f6a3-1f3fc-2640",
            uc_full: "1f6a3-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_rowing_boat_medium_light_skin_tone:"],
            category: "activity"
        },
        ":woman_rowing_boat_tone3:": {
            uc_base: "1f6a3-1f3fd-2640",
            uc_full: "1f6a3-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_rowing_boat_medium_skin_tone:"],
            category: "activity"
        },
        ":woman_rowing_boat_tone4:": {
            uc_base: "1f6a3-1f3fe-2640",
            uc_full: "1f6a3-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_rowing_boat_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_rowing_boat_tone5:": {
            uc_base: "1f6a3-1f3ff-2640",
            uc_full: "1f6a3-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_rowing_boat_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_running_tone1:": {
            uc_base: "1f3c3-1f3fb-2640",
            uc_full: "1f3c3-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_running_light_skin_tone:"],
            category: "people"
        },
        ":woman_running_tone2:": {
            uc_base: "1f3c3-1f3fc-2640",
            uc_full: "1f3c3-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_running_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_running_tone3:": {
            uc_base: "1f3c3-1f3fd-2640",
            uc_full: "1f3c3-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_running_medium_skin_tone:"],
            category: "people"
        },
        ":woman_running_tone4:": {
            uc_base: "1f3c3-1f3fe-2640",
            uc_full: "1f3c3-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_running_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_running_tone5:": {
            uc_base: "1f3c3-1f3ff-2640",
            uc_full: "1f3c3-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_running_dark_skin_tone:"],
            category: "people"
        },
        ":woman_shrugging_tone1:": {
            uc_base: "1f937-1f3fb-2640",
            uc_full: "1f937-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_shrugging_light_skin_tone:"],
            category: "people"
        },
        ":woman_shrugging_tone2:": {
            uc_base: "1f937-1f3fc-2640",
            uc_full: "1f937-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_shrugging_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_shrugging_tone3:": {
            uc_base: "1f937-1f3fd-2640",
            uc_full: "1f937-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_shrugging_medium_skin_tone:"],
            category: "people"
        },
        ":woman_shrugging_tone4:": {
            uc_base: "1f937-1f3fe-2640",
            uc_full: "1f937-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_shrugging_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_shrugging_tone5:": {
            uc_base: "1f937-1f3ff-2640",
            uc_full: "1f937-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_shrugging_dark_skin_tone:"],
            category: "people"
        },
        ":woman_standing_tone1:": {
            uc_base: "1f9cd-1f3fb-2640",
            uc_full: "1f9cd-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_standing_light_skin_tone:"],
            category: "people"
        },
        ":woman_standing_tone2:": {
            uc_base: "1f9cd-1f3fc-2640",
            uc_full: "1f9cd-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_standing_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_standing_tone3:": {
            uc_base: "1f9cd-1f3fd-2640",
            uc_full: "1f9cd-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_standing_medium_skin_tone:"],
            category: "people"
        },
        ":woman_standing_tone4:": {
            uc_base: "1f9cd-1f3fe-2640",
            uc_full: "1f9cd-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_standing_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_standing_tone5:": {
            uc_base: "1f9cd-1f3ff-2640",
            uc_full: "1f9cd-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_standing_dark_skin_tone:"],
            category: "people"
        },
        ":woman_superhero_tone1:": {
            uc_base: "1f9b8-1f3fb-2640",
            uc_full: "1f9b8-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_superhero_light_skin_tone:"],
            category: "people"
        },
        ":woman_superhero_tone2:": {
            uc_base: "1f9b8-1f3fc-2640",
            uc_full: "1f9b8-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_superhero_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_superhero_tone3:": {
            uc_base: "1f9b8-1f3fd-2640",
            uc_full: "1f9b8-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_superhero_medium_skin_tone:"],
            category: "people"
        },
        ":woman_superhero_tone4:": {
            uc_base: "1f9b8-1f3fe-2640",
            uc_full: "1f9b8-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_superhero_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_superhero_tone5:": {
            uc_base: "1f9b8-1f3ff-2640",
            uc_full: "1f9b8-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_superhero_dark_skin_tone:"],
            category: "people"
        },
        ":woman_supervillain_tone1:": {
            uc_base: "1f9b9-1f3fb-2640",
            uc_full: "1f9b9-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_supervillain_light_skin_tone:"],
            category: "people"
        },
        ":woman_supervillain_tone2:": {
            uc_base: "1f9b9-1f3fc-2640",
            uc_full: "1f9b9-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_supervillain_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_supervillain_tone3:": {
            uc_base: "1f9b9-1f3fd-2640",
            uc_full: "1f9b9-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_supervillain_medium_skin_tone:"],
            category: "people"
        },
        ":woman_supervillain_tone4:": {
            uc_base: "1f9b9-1f3fe-2640",
            uc_full: "1f9b9-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_supervillain_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_supervillain_tone5:": {
            uc_base: "1f9b9-1f3ff-2640",
            uc_full: "1f9b9-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_supervillain_dark_skin_tone:"],
            category: "people"
        },
        ":woman_surfing_tone1:": {
            uc_base: "1f3c4-1f3fb-2640",
            uc_full: "1f3c4-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_surfing_light_skin_tone:"],
            category: "activity"
        },
        ":woman_surfing_tone2:": {
            uc_base: "1f3c4-1f3fc-2640",
            uc_full: "1f3c4-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_surfing_medium_light_skin_tone:"],
            category: "activity"
        },
        ":woman_surfing_tone3:": {
            uc_base: "1f3c4-1f3fd-2640",
            uc_full: "1f3c4-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_surfing_medium_skin_tone:"],
            category: "activity"
        },
        ":woman_surfing_tone4:": {
            uc_base: "1f3c4-1f3fe-2640",
            uc_full: "1f3c4-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_surfing_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_surfing_tone5:": {
            uc_base: "1f3c4-1f3ff-2640",
            uc_full: "1f3c4-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_surfing_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_swimming_tone1:": {
            uc_base: "1f3ca-1f3fb-2640",
            uc_full: "1f3ca-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_swimming_light_skin_tone:"],
            category: "activity"
        },
        ":woman_swimming_tone2:": {
            uc_base: "1f3ca-1f3fc-2640",
            uc_full: "1f3ca-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_swimming_medium_light_skin_tone:"],
            category: "activity"
        },
        ":woman_swimming_tone3:": {
            uc_base: "1f3ca-1f3fd-2640",
            uc_full: "1f3ca-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_swimming_medium_skin_tone:"],
            category: "activity"
        },
        ":woman_swimming_tone4:": {
            uc_base: "1f3ca-1f3fe-2640",
            uc_full: "1f3ca-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_swimming_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_swimming_tone5:": {
            uc_base: "1f3ca-1f3ff-2640",
            uc_full: "1f3ca-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_swimming_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_tipping_hand_tone1:": {
            uc_base: "1f481-1f3fb-2640",
            uc_full: "1f481-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_tipping_hand_light_skin_tone:"],
            category: "people"
        },
        ":woman_tipping_hand_tone2:": {
            uc_base: "1f481-1f3fc-2640",
            uc_full: "1f481-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_tipping_hand_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_tipping_hand_tone3:": {
            uc_base: "1f481-1f3fd-2640",
            uc_full: "1f481-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_tipping_hand_medium_skin_tone:"],
            category: "people"
        },
        ":woman_tipping_hand_tone4:": {
            uc_base: "1f481-1f3fe-2640",
            uc_full: "1f481-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_tipping_hand_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_tipping_hand_tone5:": {
            uc_base: "1f481-1f3ff-2640",
            uc_full: "1f481-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_tipping_hand_dark_skin_tone:"],
            category: "people"
        },
        ":woman_vampire_tone1:": {
            uc_base: "1f9db-1f3fb-2640",
            uc_full: "1f9db-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_vampire_light_skin_tone:"],
            category: "people"
        },
        ":woman_vampire_tone2:": {
            uc_base: "1f9db-1f3fc-2640",
            uc_full: "1f9db-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_vampire_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_vampire_tone3:": {
            uc_base: "1f9db-1f3fd-2640",
            uc_full: "1f9db-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_vampire_medium_skin_tone:"],
            category: "people"
        },
        ":woman_vampire_tone4:": {
            uc_base: "1f9db-1f3fe-2640",
            uc_full: "1f9db-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_vampire_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_vampire_tone5:": {
            uc_base: "1f9db-1f3ff-2640",
            uc_full: "1f9db-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_vampire_dark_skin_tone:"],
            category: "people"
        },
        ":woman_walking_tone1:": {
            uc_base: "1f6b6-1f3fb-2640",
            uc_full: "1f6b6-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_walking_light_skin_tone:"],
            category: "people"
        },
        ":woman_walking_tone2:": {
            uc_base: "1f6b6-1f3fc-2640",
            uc_full: "1f6b6-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_walking_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_walking_tone3:": {
            uc_base: "1f6b6-1f3fd-2640",
            uc_full: "1f6b6-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_walking_medium_skin_tone:"],
            category: "people"
        },
        ":woman_walking_tone4:": {
            uc_base: "1f6b6-1f3fe-2640",
            uc_full: "1f6b6-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_walking_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_walking_tone5:": {
            uc_base: "1f6b6-1f3ff-2640",
            uc_full: "1f6b6-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_walking_dark_skin_tone:"],
            category: "people"
        },
        ":woman_wearing_turban_tone1:": {
            uc_base: "1f473-1f3fb-2640",
            uc_full: "1f473-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_wearing_turban_light_skin_tone:"],
            category: "people"
        },
        ":woman_wearing_turban_tone2:": {
            uc_base: "1f473-1f3fc-2640",
            uc_full: "1f473-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_wearing_turban_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_wearing_turban_tone3:": {
            uc_base: "1f473-1f3fd-2640",
            uc_full: "1f473-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_wearing_turban_medium_skin_tone:"],
            category: "people"
        },
        ":woman_wearing_turban_tone4:": {
            uc_base: "1f473-1f3fe-2640",
            uc_full: "1f473-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_wearing_turban_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_wearing_turban_tone5:": {
            uc_base: "1f473-1f3ff-2640",
            uc_full: "1f473-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_wearing_turban_dark_skin_tone:"],
            category: "people"
        },
        ":man_bouncing_ball_tone1:": {
            uc_base: "26f9-1f3fb-2642",
            uc_full: "26f9-fe0f-1f3fb-200d-2642-fe0f",
            shortnames: [":man_bouncing_ball_light_skin_tone:"],
            category: "activity"
        },
        ":man_bouncing_ball_tone2:": {
            uc_base: "26f9-1f3fc-2642",
            uc_full: "26f9-fe0f-1f3fc-200d-2642-fe0f",
            shortnames: [":man_bouncing_ball_medium_light_skin_tone:"],
            category: "activity"
        },
        ":man_bouncing_ball_tone3:": {
            uc_base: "26f9-1f3fd-2642",
            uc_full: "26f9-fe0f-1f3fd-200d-2642-fe0f",
            shortnames: [":man_bouncing_ball_medium_skin_tone:"],
            category: "activity"
        },
        ":man_bouncing_ball_tone4:": {
            uc_base: "26f9-1f3fe-2642",
            uc_full: "26f9-fe0f-1f3fe-200d-2642-fe0f",
            shortnames: [":man_bouncing_ball_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":man_bouncing_ball_tone5:": {
            uc_base: "26f9-1f3ff-2642",
            uc_full: "26f9-fe0f-1f3ff-200d-2642-fe0f",
            shortnames: [":man_bouncing_ball_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_bouncing_ball_tone1:": {
            uc_base: "26f9-1f3fb-2640",
            uc_full: "26f9-fe0f-1f3fb-200d-2640-fe0f",
            shortnames: [":woman_bouncing_ball_light_skin_tone:"],
            category: "activity"
        },
        ":woman_bouncing_ball_tone2:": {
            uc_base: "26f9-1f3fc-2640",
            uc_full: "26f9-fe0f-1f3fc-200d-2640-fe0f",
            shortnames: [":woman_bouncing_ball_medium_light_skin_tone:"],
            category: "activity"
        },
        ":woman_bouncing_ball_tone3:": {
            uc_base: "26f9-1f3fd-2640",
            uc_full: "26f9-fe0f-1f3fd-200d-2640-fe0f",
            shortnames: [":woman_bouncing_ball_medium_skin_tone:"],
            category: "activity"
        },
        ":woman_bouncing_ball_tone4:": {
            uc_base: "26f9-1f3fe-2640",
            uc_full: "26f9-fe0f-1f3fe-200d-2640-fe0f",
            shortnames: [":woman_bouncing_ball_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":woman_bouncing_ball_tone5:": {
            uc_base: "26f9-1f3ff-2640",
            uc_full: "26f9-fe0f-1f3ff-200d-2640-fe0f",
            shortnames: [":woman_bouncing_ball_dark_skin_tone:"],
            category: "activity"
        },
        ":adult_tone1:": {
            uc_base: "1f9d1-1f3fb",
            uc_full: "1f9d1-1f3fb",
            shortnames: [":adult_light_skin_tone:"],
            category: "people"
        },
        ":adult_tone2:": {
            uc_base: "1f9d1-1f3fc",
            uc_full: "1f9d1-1f3fc",
            shortnames: [":adult_medium_light_skin_tone:"],
            category: "people"
        },
        ":adult_tone3:": {
            uc_base: "1f9d1-1f3fd",
            uc_full: "1f9d1-1f3fd",
            shortnames: [":adult_medium_skin_tone:"],
            category: "people"
        },
        ":adult_tone4:": {
            uc_base: "1f9d1-1f3fe",
            uc_full: "1f9d1-1f3fe",
            shortnames: [":adult_medium_dark_skin_tone:"],
            category: "people"
        },
        ":adult_tone5:": {
            uc_base: "1f9d1-1f3ff",
            uc_full: "1f9d1-1f3ff",
            shortnames: [":adult_dark_skin_tone:"],
            category: "people"
        },
        ":angel_tone1:": {
            uc_base: "1f47c-1f3fb",
            uc_full: "1f47c-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":angel_tone2:": {
            uc_base: "1f47c-1f3fc",
            uc_full: "1f47c-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":angel_tone3:": {
            uc_base: "1f47c-1f3fd",
            uc_full: "1f47c-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":angel_tone4:": {
            uc_base: "1f47c-1f3fe",
            uc_full: "1f47c-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":angel_tone5:": {
            uc_base: "1f47c-1f3ff",
            uc_full: "1f47c-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":baby_tone1:": {
            uc_base: "1f476-1f3fb",
            uc_full: "1f476-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":baby_tone2:": {
            uc_base: "1f476-1f3fc",
            uc_full: "1f476-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":baby_tone3:": {
            uc_base: "1f476-1f3fd",
            uc_full: "1f476-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":baby_tone4:": {
            uc_base: "1f476-1f3fe",
            uc_full: "1f476-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":baby_tone5:": {
            uc_base: "1f476-1f3ff",
            uc_full: "1f476-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":bath_tone1:": {
            uc_base: "1f6c0-1f3fb",
            uc_full: "1f6c0-1f3fb",
            shortnames: [],
            category: "objects"
        },
        ":bath_tone2:": {
            uc_base: "1f6c0-1f3fc",
            uc_full: "1f6c0-1f3fc",
            shortnames: [],
            category: "objects"
        },
        ":bath_tone3:": {
            uc_base: "1f6c0-1f3fd",
            uc_full: "1f6c0-1f3fd",
            shortnames: [],
            category: "objects"
        },
        ":bath_tone4:": {
            uc_base: "1f6c0-1f3fe",
            uc_full: "1f6c0-1f3fe",
            shortnames: [],
            category: "objects"
        },
        ":bath_tone5:": {
            uc_base: "1f6c0-1f3ff",
            uc_full: "1f6c0-1f3ff",
            shortnames: [],
            category: "objects"
        },
        ":bearded_person_tone1:": {
            uc_base: "1f9d4-1f3fb",
            uc_full: "1f9d4-1f3fb",
            shortnames: [":bearded_person_light_skin_tone:"],
            category: "people"
        },
        ":bearded_person_tone2:": {
            uc_base: "1f9d4-1f3fc",
            uc_full: "1f9d4-1f3fc",
            shortnames: [":bearded_person_medium_light_skin_tone:"],
            category: "people"
        },
        ":bearded_person_tone3:": {
            uc_base: "1f9d4-1f3fd",
            uc_full: "1f9d4-1f3fd",
            shortnames: [":bearded_person_medium_skin_tone:"],
            category: "people"
        },
        ":bearded_person_tone4:": {
            uc_base: "1f9d4-1f3fe",
            uc_full: "1f9d4-1f3fe",
            shortnames: [":bearded_person_medium_dark_skin_tone:"],
            category: "people"
        },
        ":bearded_person_tone5:": {
            uc_base: "1f9d4-1f3ff",
            uc_full: "1f9d4-1f3ff",
            shortnames: [":bearded_person_dark_skin_tone:"],
            category: "people"
        },
        ":blond_haired_person_tone1:": {
            uc_base: "1f471-1f3fb",
            uc_full: "1f471-1f3fb",
            shortnames: [":person_with_blond_hair_tone1:"],
            category: "people"
        },
        ":blond_haired_person_tone2:": {
            uc_base: "1f471-1f3fc",
            uc_full: "1f471-1f3fc",
            shortnames: [":person_with_blond_hair_tone2:"],
            category: "people"
        },
        ":blond_haired_person_tone3:": {
            uc_base: "1f471-1f3fd",
            uc_full: "1f471-1f3fd",
            shortnames: [":person_with_blond_hair_tone3:"],
            category: "people"
        },
        ":blond_haired_person_tone4:": {
            uc_base: "1f471-1f3fe",
            uc_full: "1f471-1f3fe",
            shortnames: [":person_with_blond_hair_tone4:"],
            category: "people"
        },
        ":blond_haired_person_tone5:": {
            uc_base: "1f471-1f3ff",
            uc_full: "1f471-1f3ff",
            shortnames: [":person_with_blond_hair_tone5:"],
            category: "people"
        },
        ":boy_tone1:": {
            uc_base: "1f466-1f3fb",
            uc_full: "1f466-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":boy_tone2:": {
            uc_base: "1f466-1f3fc",
            uc_full: "1f466-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":boy_tone3:": {
            uc_base: "1f466-1f3fd",
            uc_full: "1f466-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":boy_tone4:": {
            uc_base: "1f466-1f3fe",
            uc_full: "1f466-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":boy_tone5:": {
            uc_base: "1f466-1f3ff",
            uc_full: "1f466-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":breast_feeding_tone1:": {
            uc_base: "1f931-1f3fb",
            uc_full: "1f931-1f3fb",
            shortnames: [":breast_feeding_light_skin_tone:"],
            category: "people"
        },
        ":breast_feeding_tone2:": {
            uc_base: "1f931-1f3fc",
            uc_full: "1f931-1f3fc",
            shortnames: [":breast_feeding_medium_light_skin_tone:"],
            category: "people"
        },
        ":breast_feeding_tone3:": {
            uc_base: "1f931-1f3fd",
            uc_full: "1f931-1f3fd",
            shortnames: [":breast_feeding_medium_skin_tone:"],
            category: "people"
        },
        ":breast_feeding_tone4:": {
            uc_base: "1f931-1f3fe",
            uc_full: "1f931-1f3fe",
            shortnames: [":breast_feeding_medium_dark_skin_tone:"],
            category: "people"
        },
        ":breast_feeding_tone5:": {
            uc_base: "1f931-1f3ff",
            uc_full: "1f931-1f3ff",
            shortnames: [":breast_feeding_dark_skin_tone:"],
            category: "people"
        },
        ":bride_with_veil_tone1:": {
            uc_base: "1f470-1f3fb",
            uc_full: "1f470-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":bride_with_veil_tone2:": {
            uc_base: "1f470-1f3fc",
            uc_full: "1f470-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":bride_with_veil_tone3:": {
            uc_base: "1f470-1f3fd",
            uc_full: "1f470-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":bride_with_veil_tone4:": {
            uc_base: "1f470-1f3fe",
            uc_full: "1f470-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":bride_with_veil_tone5:": {
            uc_base: "1f470-1f3ff",
            uc_full: "1f470-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":call_me_tone1:": {
            uc_base: "1f919-1f3fb",
            uc_full: "1f919-1f3fb",
            shortnames: [":call_me_hand_tone1:"],
            category: "people"
        },
        ":call_me_tone2:": {
            uc_base: "1f919-1f3fc",
            uc_full: "1f919-1f3fc",
            shortnames: [":call_me_hand_tone2:"],
            category: "people"
        },
        ":call_me_tone3:": {
            uc_base: "1f919-1f3fd",
            uc_full: "1f919-1f3fd",
            shortnames: [":call_me_hand_tone3:"],
            category: "people"
        },
        ":call_me_tone4:": {
            uc_base: "1f919-1f3fe",
            uc_full: "1f919-1f3fe",
            shortnames: [":call_me_hand_tone4:"],
            category: "people"
        },
        ":call_me_tone5:": {
            uc_base: "1f919-1f3ff",
            uc_full: "1f919-1f3ff",
            shortnames: [":call_me_hand_tone5:"],
            category: "people"
        },
        ":child_tone1:": {
            uc_base: "1f9d2-1f3fb",
            uc_full: "1f9d2-1f3fb",
            shortnames: [":child_light_skin_tone:"],
            category: "people"
        },
        ":child_tone2:": {
            uc_base: "1f9d2-1f3fc",
            uc_full: "1f9d2-1f3fc",
            shortnames: [":child_medium_light_skin_tone:"],
            category: "people"
        },
        ":child_tone3:": {
            uc_base: "1f9d2-1f3fd",
            uc_full: "1f9d2-1f3fd",
            shortnames: [":child_medium_skin_tone:"],
            category: "people"
        },
        ":child_tone4:": {
            uc_base: "1f9d2-1f3fe",
            uc_full: "1f9d2-1f3fe",
            shortnames: [":child_medium_dark_skin_tone:"],
            category: "people"
        },
        ":child_tone5:": {
            uc_base: "1f9d2-1f3ff",
            uc_full: "1f9d2-1f3ff",
            shortnames: [":child_dark_skin_tone:"],
            category: "people"
        },
        ":clap_tone1:": {
            uc_base: "1f44f-1f3fb",
            uc_full: "1f44f-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":clap_tone2:": {
            uc_base: "1f44f-1f3fc",
            uc_full: "1f44f-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":clap_tone3:": {
            uc_base: "1f44f-1f3fd",
            uc_full: "1f44f-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":clap_tone4:": {
            uc_base: "1f44f-1f3fe",
            uc_full: "1f44f-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":clap_tone5:": {
            uc_base: "1f44f-1f3ff",
            uc_full: "1f44f-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":construction_worker_tone1:": {
            uc_base: "1f477-1f3fb",
            uc_full: "1f477-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":construction_worker_tone2:": {
            uc_base: "1f477-1f3fc",
            uc_full: "1f477-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":construction_worker_tone3:": {
            uc_base: "1f477-1f3fd",
            uc_full: "1f477-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":construction_worker_tone4:": {
            uc_base: "1f477-1f3fe",
            uc_full: "1f477-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":construction_worker_tone5:": {
            uc_base: "1f477-1f3ff",
            uc_full: "1f477-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":dancer_tone1:": {
            uc_base: "1f483-1f3fb",
            uc_full: "1f483-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":dancer_tone2:": {
            uc_base: "1f483-1f3fc",
            uc_full: "1f483-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":dancer_tone3:": {
            uc_base: "1f483-1f3fd",
            uc_full: "1f483-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":dancer_tone4:": {
            uc_base: "1f483-1f3fe",
            uc_full: "1f483-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":dancer_tone5:": {
            uc_base: "1f483-1f3ff",
            uc_full: "1f483-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":deaf_person_tone1:": {
            uc_base: "1f9cf-1f3fb",
            uc_full: "1f9cf-1f3fb",
            shortnames: [":deaf_person_light_skin_tone:"],
            category: "people"
        },
        ":deaf_person_tone2:": {
            uc_base: "1f9cf-1f3fc",
            uc_full: "1f9cf-1f3fc",
            shortnames: [":deaf_person_medium_light_skin_tone:"],
            category: "people"
        },
        ":deaf_person_tone3:": {
            uc_base: "1f9cf-1f3fd",
            uc_full: "1f9cf-1f3fd",
            shortnames: [":deaf_person_medium_skin_tone:"],
            category: "people"
        },
        ":deaf_person_tone4:": {
            uc_base: "1f9cf-1f3fe",
            uc_full: "1f9cf-1f3fe",
            shortnames: [":deaf_person_medium_dark_skin_tone:"],
            category: "people"
        },
        ":deaf_person_tone5:": {
            uc_base: "1f9cf-1f3ff",
            uc_full: "1f9cf-1f3ff",
            shortnames: [":deaf_person_dark_skin_tone:"],
            category: "people"
        },
        ":detective_tone1:": {
            uc_base: "1f575-1f3fb",
            uc_full: "1f575-fe0f-1f3fb",
            shortnames: [":spy_tone1:", ":sleuth_or_spy_tone1:"],
            category: "people"
        },
        ":detective_tone2:": {
            uc_base: "1f575-1f3fc",
            uc_full: "1f575-fe0f-1f3fc",
            shortnames: [":spy_tone2:", ":sleuth_or_spy_tone2:"],
            category: "people"
        },
        ":detective_tone3:": {
            uc_base: "1f575-1f3fd",
            uc_full: "1f575-fe0f-1f3fd",
            shortnames: [":spy_tone3:", ":sleuth_or_spy_tone3:"],
            category: "people"
        },
        ":detective_tone4:": {
            uc_base: "1f575-1f3fe",
            uc_full: "1f575-fe0f-1f3fe",
            shortnames: [":spy_tone4:", ":sleuth_or_spy_tone4:"],
            category: "people"
        },
        ":detective_tone5:": {
            uc_base: "1f575-1f3ff",
            uc_full: "1f575-fe0f-1f3ff",
            shortnames: [":spy_tone5:", ":sleuth_or_spy_tone5:"],
            category: "people"
        },
        ":ear_tone1:": {
            uc_base: "1f442-1f3fb",
            uc_full: "1f442-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":ear_tone2:": {
            uc_base: "1f442-1f3fc",
            uc_full: "1f442-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":ear_tone3:": {
            uc_base: "1f442-1f3fd",
            uc_full: "1f442-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":ear_tone4:": {
            uc_base: "1f442-1f3fe",
            uc_full: "1f442-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":ear_tone5:": {
            uc_base: "1f442-1f3ff",
            uc_full: "1f442-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":ear_with_hearing_aid_tone1:": {
            uc_base: "1f9bb-1f3fb",
            uc_full: "1f9bb-1f3fb",
            shortnames: [":ear_with_hearing_aid_light_skin_tone:"],
            category: "people"
        },
        ":ear_with_hearing_aid_tone2:": {
            uc_base: "1f9bb-1f3fc",
            uc_full: "1f9bb-1f3fc",
            shortnames: [":ear_with_hearing_aid_medium_light_skin_tone:"],
            category: "people"
        },
        ":ear_with_hearing_aid_tone3:": {
            uc_base: "1f9bb-1f3fd",
            uc_full: "1f9bb-1f3fd",
            shortnames: [":ear_with_hearing_aid_medium_skin_tone:"],
            category: "people"
        },
        ":ear_with_hearing_aid_tone4:": {
            uc_base: "1f9bb-1f3fe",
            uc_full: "1f9bb-1f3fe",
            shortnames: [":ear_with_hearing_aid_medium_dark_skin_tone:"],
            category: "people"
        },
        ":ear_with_hearing_aid_tone5:": {
            uc_base: "1f9bb-1f3ff",
            uc_full: "1f9bb-1f3ff",
            shortnames: [":ear_with_hearing_aid_dark_skin_tone:"],
            category: "people"
        },
        ":elf_tone1:": {
            uc_base: "1f9dd-1f3fb",
            uc_full: "1f9dd-1f3fb",
            shortnames: [":elf_light_skin_tone:"],
            category: "people"
        },
        ":elf_tone2:": {
            uc_base: "1f9dd-1f3fc",
            uc_full: "1f9dd-1f3fc",
            shortnames: [":elf_medium_light_skin_tone:"],
            category: "people"
        },
        ":elf_tone3:": {
            uc_base: "1f9dd-1f3fd",
            uc_full: "1f9dd-1f3fd",
            shortnames: [":elf_medium_skin_tone:"],
            category: "people"
        },
        ":elf_tone4:": {
            uc_base: "1f9dd-1f3fe",
            uc_full: "1f9dd-1f3fe",
            shortnames: [":elf_medium_dark_skin_tone:"],
            category: "people"
        },
        ":elf_tone5:": {
            uc_base: "1f9dd-1f3ff",
            uc_full: "1f9dd-1f3ff",
            shortnames: [":elf_dark_skin_tone:"],
            category: "people"
        },
        ":eye_in_speech_bubble:": {
            uc_base: "1f441-1f5e8",
            uc_full: "1f441-fe0f-200d-1f5e8-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":fairy_tone1:": {
            uc_base: "1f9da-1f3fb",
            uc_full: "1f9da-1f3fb",
            shortnames: [":fairy_light_skin_tone:"],
            category: "people"
        },
        ":fairy_tone2:": {
            uc_base: "1f9da-1f3fc",
            uc_full: "1f9da-1f3fc",
            shortnames: [":fairy_medium_light_skin_tone:"],
            category: "people"
        },
        ":fairy_tone3:": {
            uc_base: "1f9da-1f3fd",
            uc_full: "1f9da-1f3fd",
            shortnames: [":fairy_medium_skin_tone:"],
            category: "people"
        },
        ":fairy_tone4:": {
            uc_base: "1f9da-1f3fe",
            uc_full: "1f9da-1f3fe",
            shortnames: [":fairy_medium_dark_skin_tone:"],
            category: "people"
        },
        ":fairy_tone5:": {
            uc_base: "1f9da-1f3ff",
            uc_full: "1f9da-1f3ff",
            shortnames: [":fairy_dark_skin_tone:"],
            category: "people"
        },
        ":family_man_boy:": {
            uc_base: "1f468-1f466",
            uc_full: "1f468-200d-1f466",
            shortnames: [],
            category: "people"
        },
        ":family_man_girl:": {
            uc_base: "1f468-1f467",
            uc_full: "1f468-200d-1f467",
            shortnames: [],
            category: "people"
        },
        ":family_woman_boy:": {
            uc_base: "1f469-1f466",
            uc_full: "1f469-200d-1f466",
            shortnames: [],
            category: "people"
        },
        ":family_woman_girl:": {
            uc_base: "1f469-1f467",
            uc_full: "1f469-200d-1f467",
            shortnames: [],
            category: "people"
        },
        ":fingers_crossed_tone1:": {
            uc_base: "1f91e-1f3fb",
            uc_full: "1f91e-1f3fb",
            shortnames: [":hand_with_index_and_middle_fingers_crossed_tone1:"],
            category: "people"
        },
        ":fingers_crossed_tone2:": {
            uc_base: "1f91e-1f3fc",
            uc_full: "1f91e-1f3fc",
            shortnames: [":hand_with_index_and_middle_fingers_crossed_tone2:"],
            category: "people"
        },
        ":fingers_crossed_tone3:": {
            uc_base: "1f91e-1f3fd",
            uc_full: "1f91e-1f3fd",
            shortnames: [":hand_with_index_and_middle_fingers_crossed_tone3:"],
            category: "people"
        },
        ":fingers_crossed_tone4:": {
            uc_base: "1f91e-1f3fe",
            uc_full: "1f91e-1f3fe",
            shortnames: [":hand_with_index_and_middle_fingers_crossed_tone4:"],
            category: "people"
        },
        ":fingers_crossed_tone5:": {
            uc_base: "1f91e-1f3ff",
            uc_full: "1f91e-1f3ff",
            shortnames: [":hand_with_index_and_middle_fingers_crossed_tone5:"],
            category: "people"
        },
        ":flag_ac:": {
            uc_base: "1f1e6-1f1e8",
            uc_full: "1f1e6-1f1e8",
            shortnames: [":ac:"],
            category: "flags"
        },
        ":flag_ad:": {
            uc_base: "1f1e6-1f1e9",
            uc_full: "1f1e6-1f1e9",
            shortnames: [":ad:"],
            category: "flags"
        },
        ":flag_ae:": {
            uc_base: "1f1e6-1f1ea",
            uc_full: "1f1e6-1f1ea",
            shortnames: [":ae:"],
            category: "flags"
        },
        ":flag_af:": {
            uc_base: "1f1e6-1f1eb",
            uc_full: "1f1e6-1f1eb",
            shortnames: [":af:"],
            category: "flags"
        },
        ":flag_ag:": {
            uc_base: "1f1e6-1f1ec",
            uc_full: "1f1e6-1f1ec",
            shortnames: [":ag:"],
            category: "flags"
        },
        ":flag_ai:": {
            uc_base: "1f1e6-1f1ee",
            uc_full: "1f1e6-1f1ee",
            shortnames: [":ai:"],
            category: "flags"
        },
        ":flag_al:": {
            uc_base: "1f1e6-1f1f1",
            uc_full: "1f1e6-1f1f1",
            shortnames: [":al:"],
            category: "flags"
        },
        ":flag_am:": {
            uc_base: "1f1e6-1f1f2",
            uc_full: "1f1e6-1f1f2",
            shortnames: [":am:"],
            category: "flags"
        },
        ":flag_ao:": {
            uc_base: "1f1e6-1f1f4",
            uc_full: "1f1e6-1f1f4",
            shortnames: [":ao:"],
            category: "flags"
        },
        ":flag_aq:": {
            uc_base: "1f1e6-1f1f6",
            uc_full: "1f1e6-1f1f6",
            shortnames: [":aq:"],
            category: "flags"
        },
        ":flag_ar:": {
            uc_base: "1f1e6-1f1f7",
            uc_full: "1f1e6-1f1f7",
            shortnames: [":ar:"],
            category: "flags"
        },
        ":flag_as:": {
            uc_base: "1f1e6-1f1f8",
            uc_full: "1f1e6-1f1f8",
            shortnames: [":as:"],
            category: "flags"
        },
        ":flag_at:": {
            uc_base: "1f1e6-1f1f9",
            uc_full: "1f1e6-1f1f9",
            shortnames: [":at:"],
            category: "flags"
        },
        ":flag_au:": {
            uc_base: "1f1e6-1f1fa",
            uc_full: "1f1e6-1f1fa",
            shortnames: [":au:"],
            category: "flags"
        },
        ":flag_aw:": {
            uc_base: "1f1e6-1f1fc",
            uc_full: "1f1e6-1f1fc",
            shortnames: [":aw:"],
            category: "flags"
        },
        ":flag_ax:": {
            uc_base: "1f1e6-1f1fd",
            uc_full: "1f1e6-1f1fd",
            shortnames: [":ax:"],
            category: "flags"
        },
        ":flag_az:": {
            uc_base: "1f1e6-1f1ff",
            uc_full: "1f1e6-1f1ff",
            shortnames: [":az:"],
            category: "flags"
        },
        ":flag_ba:": {
            uc_base: "1f1e7-1f1e6",
            uc_full: "1f1e7-1f1e6",
            shortnames: [":ba:"],
            category: "flags"
        },
        ":flag_bb:": {
            uc_base: "1f1e7-1f1e7",
            uc_full: "1f1e7-1f1e7",
            shortnames: [":bb:"],
            category: "flags"
        },
        ":flag_bd:": {
            uc_base: "1f1e7-1f1e9",
            uc_full: "1f1e7-1f1e9",
            shortnames: [":bd:"],
            category: "flags"
        },
        ":flag_be:": {
            uc_base: "1f1e7-1f1ea",
            uc_full: "1f1e7-1f1ea",
            shortnames: [":be:"],
            category: "flags"
        },
        ":flag_bf:": {
            uc_base: "1f1e7-1f1eb",
            uc_full: "1f1e7-1f1eb",
            shortnames: [":bf:"],
            category: "flags"
        },
        ":flag_bg:": {
            uc_base: "1f1e7-1f1ec",
            uc_full: "1f1e7-1f1ec",
            shortnames: [":bg:"],
            category: "flags"
        },
        ":flag_bh:": {
            uc_base: "1f1e7-1f1ed",
            uc_full: "1f1e7-1f1ed",
            shortnames: [":bh:"],
            category: "flags"
        },
        ":flag_bi:": {
            uc_base: "1f1e7-1f1ee",
            uc_full: "1f1e7-1f1ee",
            shortnames: [":bi:"],
            category: "flags"
        },
        ":flag_bj:": {
            uc_base: "1f1e7-1f1ef",
            uc_full: "1f1e7-1f1ef",
            shortnames: [":bj:"],
            category: "flags"
        },
        ":flag_bl:": {
            uc_base: "1f1e7-1f1f1",
            uc_full: "1f1e7-1f1f1",
            shortnames: [":bl:"],
            category: "flags"
        },
        ":flag_bm:": {
            uc_base: "1f1e7-1f1f2",
            uc_full: "1f1e7-1f1f2",
            shortnames: [":bm:"],
            category: "flags"
        },
        ":flag_bn:": {
            uc_base: "1f1e7-1f1f3",
            uc_full: "1f1e7-1f1f3",
            shortnames: [":bn:"],
            category: "flags"
        },
        ":flag_bo:": {
            uc_base: "1f1e7-1f1f4",
            uc_full: "1f1e7-1f1f4",
            shortnames: [":bo:"],
            category: "flags"
        },
        ":flag_bq:": {
            uc_base: "1f1e7-1f1f6",
            uc_full: "1f1e7-1f1f6",
            shortnames: [":bq:"],
            category: "flags"
        },
        ":flag_br:": {
            uc_base: "1f1e7-1f1f7",
            uc_full: "1f1e7-1f1f7",
            shortnames: [":br:"],
            category: "flags"
        },
        ":flag_bs:": {
            uc_base: "1f1e7-1f1f8",
            uc_full: "1f1e7-1f1f8",
            shortnames: [":bs:"],
            category: "flags"
        },
        ":flag_bt:": {
            uc_base: "1f1e7-1f1f9",
            uc_full: "1f1e7-1f1f9",
            shortnames: [":bt:"],
            category: "flags"
        },
        ":flag_bv:": {
            uc_base: "1f1e7-1f1fb",
            uc_full: "1f1e7-1f1fb",
            shortnames: [":bv:"],
            category: "flags"
        },
        ":flag_bw:": {
            uc_base: "1f1e7-1f1fc",
            uc_full: "1f1e7-1f1fc",
            shortnames: [":bw:"],
            category: "flags"
        },
        ":flag_by:": {
            uc_base: "1f1e7-1f1fe",
            uc_full: "1f1e7-1f1fe",
            shortnames: [":by:"],
            category: "flags"
        },
        ":flag_bz:": {
            uc_base: "1f1e7-1f1ff",
            uc_full: "1f1e7-1f1ff",
            shortnames: [":bz:"],
            category: "flags"
        },
        ":flag_ca:": {
            uc_base: "1f1e8-1f1e6",
            uc_full: "1f1e8-1f1e6",
            shortnames: [":ca:"],
            category: "flags"
        },
        ":flag_cc:": {
            uc_base: "1f1e8-1f1e8",
            uc_full: "1f1e8-1f1e8",
            shortnames: [":cc:"],
            category: "flags"
        },
        ":flag_cd:": {
            uc_base: "1f1e8-1f1e9",
            uc_full: "1f1e8-1f1e9",
            shortnames: [":congo:"],
            category: "flags"
        },
        ":flag_cf:": {
            uc_base: "1f1e8-1f1eb",
            uc_full: "1f1e8-1f1eb",
            shortnames: [":cf:"],
            category: "flags"
        },
        ":flag_cg:": {
            uc_base: "1f1e8-1f1ec",
            uc_full: "1f1e8-1f1ec",
            shortnames: [":cg:"],
            category: "flags"
        },
        ":flag_ch:": {
            uc_base: "1f1e8-1f1ed",
            uc_full: "1f1e8-1f1ed",
            shortnames: [":ch:"],
            category: "flags"
        },
        ":flag_ci:": {
            uc_base: "1f1e8-1f1ee",
            uc_full: "1f1e8-1f1ee",
            shortnames: [":ci:"],
            category: "flags"
        },
        ":flag_ck:": {
            uc_base: "1f1e8-1f1f0",
            uc_full: "1f1e8-1f1f0",
            shortnames: [":ck:"],
            category: "flags"
        },
        ":flag_cl:": {
            uc_base: "1f1e8-1f1f1",
            uc_full: "1f1e8-1f1f1",
            shortnames: [":chile:"],
            category: "flags"
        },
        ":flag_cm:": {
            uc_base: "1f1e8-1f1f2",
            uc_full: "1f1e8-1f1f2",
            shortnames: [":cm:"],
            category: "flags"
        },
        ":flag_cn:": {
            uc_base: "1f1e8-1f1f3",
            uc_full: "1f1e8-1f1f3",
            shortnames: [":cn:"],
            category: "flags"
        },
        ":flag_co:": {
            uc_base: "1f1e8-1f1f4",
            uc_full: "1f1e8-1f1f4",
            shortnames: [":co:"],
            category: "flags"
        },
        ":flag_cp:": {
            uc_base: "1f1e8-1f1f5",
            uc_full: "1f1e8-1f1f5",
            shortnames: [":cp:"],
            category: "flags"
        },
        ":flag_cr:": {
            uc_base: "1f1e8-1f1f7",
            uc_full: "1f1e8-1f1f7",
            shortnames: [":cr:"],
            category: "flags"
        },
        ":flag_cu:": {
            uc_base: "1f1e8-1f1fa",
            uc_full: "1f1e8-1f1fa",
            shortnames: [":cu:"],
            category: "flags"
        },
        ":flag_cv:": {
            uc_base: "1f1e8-1f1fb",
            uc_full: "1f1e8-1f1fb",
            shortnames: [":cv:"],
            category: "flags"
        },
        ":flag_cw:": {
            uc_base: "1f1e8-1f1fc",
            uc_full: "1f1e8-1f1fc",
            shortnames: [":cw:"],
            category: "flags"
        },
        ":flag_cx:": {
            uc_base: "1f1e8-1f1fd",
            uc_full: "1f1e8-1f1fd",
            shortnames: [":cx:"],
            category: "flags"
        },
        ":flag_cy:": {
            uc_base: "1f1e8-1f1fe",
            uc_full: "1f1e8-1f1fe",
            shortnames: [":cy:"],
            category: "flags"
        },
        ":flag_cz:": {
            uc_base: "1f1e8-1f1ff",
            uc_full: "1f1e8-1f1ff",
            shortnames: [":cz:"],
            category: "flags"
        },
        ":flag_de:": {
            uc_base: "1f1e9-1f1ea",
            uc_full: "1f1e9-1f1ea",
            shortnames: [":de:"],
            category: "flags"
        },
        ":flag_dg:": {
            uc_base: "1f1e9-1f1ec",
            uc_full: "1f1e9-1f1ec",
            shortnames: [":dg:"],
            category: "flags"
        },
        ":flag_dj:": {
            uc_base: "1f1e9-1f1ef",
            uc_full: "1f1e9-1f1ef",
            shortnames: [":dj:"],
            category: "flags"
        },
        ":flag_dk:": {
            uc_base: "1f1e9-1f1f0",
            uc_full: "1f1e9-1f1f0",
            shortnames: [":dk:"],
            category: "flags"
        },
        ":flag_dm:": {
            uc_base: "1f1e9-1f1f2",
            uc_full: "1f1e9-1f1f2",
            shortnames: [":dm:"],
            category: "flags"
        },
        ":flag_do:": {
            uc_base: "1f1e9-1f1f4",
            uc_full: "1f1e9-1f1f4",
            shortnames: [":do:"],
            category: "flags"
        },
        ":flag_dz:": {
            uc_base: "1f1e9-1f1ff",
            uc_full: "1f1e9-1f1ff",
            shortnames: [":dz:"],
            category: "flags"
        },
        ":flag_ea:": {
            uc_base: "1f1ea-1f1e6",
            uc_full: "1f1ea-1f1e6",
            shortnames: [":ea:"],
            category: "flags"
        },
        ":flag_ec:": {
            uc_base: "1f1ea-1f1e8",
            uc_full: "1f1ea-1f1e8",
            shortnames: [":ec:"],
            category: "flags"
        },
        ":flag_ee:": {
            uc_base: "1f1ea-1f1ea",
            uc_full: "1f1ea-1f1ea",
            shortnames: [":ee:"],
            category: "flags"
        },
        ":flag_eg:": {
            uc_base: "1f1ea-1f1ec",
            uc_full: "1f1ea-1f1ec",
            shortnames: [":eg:"],
            category: "flags"
        },
        ":flag_eh:": {
            uc_base: "1f1ea-1f1ed",
            uc_full: "1f1ea-1f1ed",
            shortnames: [":eh:"],
            category: "flags"
        },
        ":flag_er:": {
            uc_base: "1f1ea-1f1f7",
            uc_full: "1f1ea-1f1f7",
            shortnames: [":er:"],
            category: "flags"
        },
        ":flag_es:": {
            uc_base: "1f1ea-1f1f8",
            uc_full: "1f1ea-1f1f8",
            shortnames: [":es:"],
            category: "flags"
        },
        ":flag_et:": {
            uc_base: "1f1ea-1f1f9",
            uc_full: "1f1ea-1f1f9",
            shortnames: [":et:"],
            category: "flags"
        },
        ":flag_eu:": {
            uc_base: "1f1ea-1f1fa",
            uc_full: "1f1ea-1f1fa",
            shortnames: [":eu:"],
            category: "flags"
        },
        ":flag_fi:": {
            uc_base: "1f1eb-1f1ee",
            uc_full: "1f1eb-1f1ee",
            shortnames: [":fi:"],
            category: "flags"
        },
        ":flag_fj:": {
            uc_base: "1f1eb-1f1ef",
            uc_full: "1f1eb-1f1ef",
            shortnames: [":fj:"],
            category: "flags"
        },
        ":flag_fk:": {
            uc_base: "1f1eb-1f1f0",
            uc_full: "1f1eb-1f1f0",
            shortnames: [":fk:"],
            category: "flags"
        },
        ":flag_fm:": {
            uc_base: "1f1eb-1f1f2",
            uc_full: "1f1eb-1f1f2",
            shortnames: [":fm:"],
            category: "flags"
        },
        ":flag_fo:": {
            uc_base: "1f1eb-1f1f4",
            uc_full: "1f1eb-1f1f4",
            shortnames: [":fo:"],
            category: "flags"
        },
        ":flag_fr:": {
            uc_base: "1f1eb-1f1f7",
            uc_full: "1f1eb-1f1f7",
            shortnames: [":fr:"],
            category: "flags"
        },
        ":flag_ga:": {
            uc_base: "1f1ec-1f1e6",
            uc_full: "1f1ec-1f1e6",
            shortnames: [":ga:"],
            category: "flags"
        },
        ":flag_gb:": {
            uc_base: "1f1ec-1f1e7",
            uc_full: "1f1ec-1f1e7",
            shortnames: [":gb:"],
            category: "flags"
        },
        ":flag_gd:": {
            uc_base: "1f1ec-1f1e9",
            uc_full: "1f1ec-1f1e9",
            shortnames: [":gd:"],
            category: "flags"
        },
        ":flag_ge:": {
            uc_base: "1f1ec-1f1ea",
            uc_full: "1f1ec-1f1ea",
            shortnames: [":ge:"],
            category: "flags"
        },
        ":flag_gf:": {
            uc_base: "1f1ec-1f1eb",
            uc_full: "1f1ec-1f1eb",
            shortnames: [":gf:"],
            category: "flags"
        },
        ":flag_gg:": {
            uc_base: "1f1ec-1f1ec",
            uc_full: "1f1ec-1f1ec",
            shortnames: [":gg:"],
            category: "flags"
        },
        ":flag_gh:": {
            uc_base: "1f1ec-1f1ed",
            uc_full: "1f1ec-1f1ed",
            shortnames: [":gh:"],
            category: "flags"
        },
        ":flag_gi:": {
            uc_base: "1f1ec-1f1ee",
            uc_full: "1f1ec-1f1ee",
            shortnames: [":gi:"],
            category: "flags"
        },
        ":flag_gl:": {
            uc_base: "1f1ec-1f1f1",
            uc_full: "1f1ec-1f1f1",
            shortnames: [":gl:"],
            category: "flags"
        },
        ":flag_gm:": {
            uc_base: "1f1ec-1f1f2",
            uc_full: "1f1ec-1f1f2",
            shortnames: [":gm:"],
            category: "flags"
        },
        ":flag_gn:": {
            uc_base: "1f1ec-1f1f3",
            uc_full: "1f1ec-1f1f3",
            shortnames: [":gn:"],
            category: "flags"
        },
        ":flag_gp:": {
            uc_base: "1f1ec-1f1f5",
            uc_full: "1f1ec-1f1f5",
            shortnames: [":gp:"],
            category: "flags"
        },
        ":flag_gq:": {
            uc_base: "1f1ec-1f1f6",
            uc_full: "1f1ec-1f1f6",
            shortnames: [":gq:"],
            category: "flags"
        },
        ":flag_gr:": {
            uc_base: "1f1ec-1f1f7",
            uc_full: "1f1ec-1f1f7",
            shortnames: [":gr:"],
            category: "flags"
        },
        ":flag_gs:": {
            uc_base: "1f1ec-1f1f8",
            uc_full: "1f1ec-1f1f8",
            shortnames: [":gs:"],
            category: "flags"
        },
        ":flag_gt:": {
            uc_base: "1f1ec-1f1f9",
            uc_full: "1f1ec-1f1f9",
            shortnames: [":gt:"],
            category: "flags"
        },
        ":flag_gu:": {
            uc_base: "1f1ec-1f1fa",
            uc_full: "1f1ec-1f1fa",
            shortnames: [":gu:"],
            category: "flags"
        },
        ":flag_gw:": {
            uc_base: "1f1ec-1f1fc",
            uc_full: "1f1ec-1f1fc",
            shortnames: [":gw:"],
            category: "flags"
        },
        ":flag_gy:": {
            uc_base: "1f1ec-1f1fe",
            uc_full: "1f1ec-1f1fe",
            shortnames: [":gy:"],
            category: "flags"
        },
        ":flag_hk:": {
            uc_base: "1f1ed-1f1f0",
            uc_full: "1f1ed-1f1f0",
            shortnames: [":hk:"],
            category: "flags"
        },
        ":flag_hm:": {
            uc_base: "1f1ed-1f1f2",
            uc_full: "1f1ed-1f1f2",
            shortnames: [":hm:"],
            category: "flags"
        },
        ":flag_hn:": {
            uc_base: "1f1ed-1f1f3",
            uc_full: "1f1ed-1f1f3",
            shortnames: [":hn:"],
            category: "flags"
        },
        ":flag_hr:": {
            uc_base: "1f1ed-1f1f7",
            uc_full: "1f1ed-1f1f7",
            shortnames: [":hr:"],
            category: "flags"
        },
        ":flag_ht:": {
            uc_base: "1f1ed-1f1f9",
            uc_full: "1f1ed-1f1f9",
            shortnames: [":ht:"],
            category: "flags"
        },
        ":flag_hu:": {
            uc_base: "1f1ed-1f1fa",
            uc_full: "1f1ed-1f1fa",
            shortnames: [":hu:"],
            category: "flags"
        },
        ":flag_ic:": {
            uc_base: "1f1ee-1f1e8",
            uc_full: "1f1ee-1f1e8",
            shortnames: [":ic:"],
            category: "flags"
        },
        ":flag_id:": {
            uc_base: "1f1ee-1f1e9",
            uc_full: "1f1ee-1f1e9",
            shortnames: [":indonesia:"],
            category: "flags"
        },
        ":flag_ie:": {
            uc_base: "1f1ee-1f1ea",
            uc_full: "1f1ee-1f1ea",
            shortnames: [":ie:"],
            category: "flags"
        },
        ":flag_il:": {
            uc_base: "1f1ee-1f1f1",
            uc_full: "1f1ee-1f1f1",
            shortnames: [":il:"],
            category: "flags"
        },
        ":flag_im:": {
            uc_base: "1f1ee-1f1f2",
            uc_full: "1f1ee-1f1f2",
            shortnames: [":im:"],
            category: "flags"
        },
        ":flag_in:": {
            uc_base: "1f1ee-1f1f3",
            uc_full: "1f1ee-1f1f3",
            shortnames: [":in:"],
            category: "flags"
        },
        ":flag_io:": {
            uc_base: "1f1ee-1f1f4",
            uc_full: "1f1ee-1f1f4",
            shortnames: [":io:"],
            category: "flags"
        },
        ":flag_iq:": {
            uc_base: "1f1ee-1f1f6",
            uc_full: "1f1ee-1f1f6",
            shortnames: [":iq:"],
            category: "flags"
        },
        ":flag_ir:": {
            uc_base: "1f1ee-1f1f7",
            uc_full: "1f1ee-1f1f7",
            shortnames: [":ir:"],
            category: "flags"
        },
        ":flag_is:": {
            uc_base: "1f1ee-1f1f8",
            uc_full: "1f1ee-1f1f8",
            shortnames: [":is:"],
            category: "flags"
        },
        ":flag_it:": {
            uc_base: "1f1ee-1f1f9",
            uc_full: "1f1ee-1f1f9",
            shortnames: [":it:"],
            category: "flags"
        },
        ":flag_je:": {
            uc_base: "1f1ef-1f1ea",
            uc_full: "1f1ef-1f1ea",
            shortnames: [":je:"],
            category: "flags"
        },
        ":flag_jm:": {
            uc_base: "1f1ef-1f1f2",
            uc_full: "1f1ef-1f1f2",
            shortnames: [":jm:"],
            category: "flags"
        },
        ":flag_jo:": {
            uc_base: "1f1ef-1f1f4",
            uc_full: "1f1ef-1f1f4",
            shortnames: [":jo:"],
            category: "flags"
        },
        ":flag_jp:": {
            uc_base: "1f1ef-1f1f5",
            uc_full: "1f1ef-1f1f5",
            shortnames: [":jp:"],
            category: "flags"
        },
        ":flag_ke:": {
            uc_base: "1f1f0-1f1ea",
            uc_full: "1f1f0-1f1ea",
            shortnames: [":ke:"],
            category: "flags"
        },
        ":flag_kg:": {
            uc_base: "1f1f0-1f1ec",
            uc_full: "1f1f0-1f1ec",
            shortnames: [":kg:"],
            category: "flags"
        },
        ":flag_kh:": {
            uc_base: "1f1f0-1f1ed",
            uc_full: "1f1f0-1f1ed",
            shortnames: [":kh:"],
            category: "flags"
        },
        ":flag_ki:": {
            uc_base: "1f1f0-1f1ee",
            uc_full: "1f1f0-1f1ee",
            shortnames: [":ki:"],
            category: "flags"
        },
        ":flag_km:": {
            uc_base: "1f1f0-1f1f2",
            uc_full: "1f1f0-1f1f2",
            shortnames: [":km:"],
            category: "flags"
        },
        ":flag_kn:": {
            uc_base: "1f1f0-1f1f3",
            uc_full: "1f1f0-1f1f3",
            shortnames: [":kn:"],
            category: "flags"
        },
        ":flag_kp:": {
            uc_base: "1f1f0-1f1f5",
            uc_full: "1f1f0-1f1f5",
            shortnames: [":kp:"],
            category: "flags"
        },
        ":flag_kr:": {
            uc_base: "1f1f0-1f1f7",
            uc_full: "1f1f0-1f1f7",
            shortnames: [":kr:"],
            category: "flags"
        },
        ":flag_kw:": {
            uc_base: "1f1f0-1f1fc",
            uc_full: "1f1f0-1f1fc",
            shortnames: [":kw:"],
            category: "flags"
        },
        ":flag_ky:": {
            uc_base: "1f1f0-1f1fe",
            uc_full: "1f1f0-1f1fe",
            shortnames: [":ky:"],
            category: "flags"
        },
        ":flag_kz:": {
            uc_base: "1f1f0-1f1ff",
            uc_full: "1f1f0-1f1ff",
            shortnames: [":kz:"],
            category: "flags"
        },
        ":flag_la:": {
            uc_base: "1f1f1-1f1e6",
            uc_full: "1f1f1-1f1e6",
            shortnames: [":la:"],
            category: "flags"
        },
        ":flag_lb:": {
            uc_base: "1f1f1-1f1e7",
            uc_full: "1f1f1-1f1e7",
            shortnames: [":lb:"],
            category: "flags"
        },
        ":flag_lc:": {
            uc_base: "1f1f1-1f1e8",
            uc_full: "1f1f1-1f1e8",
            shortnames: [":lc:"],
            category: "flags"
        },
        ":flag_li:": {
            uc_base: "1f1f1-1f1ee",
            uc_full: "1f1f1-1f1ee",
            shortnames: [":li:"],
            category: "flags"
        },
        ":flag_lk:": {
            uc_base: "1f1f1-1f1f0",
            uc_full: "1f1f1-1f1f0",
            shortnames: [":lk:"],
            category: "flags"
        },
        ":flag_lr:": {
            uc_base: "1f1f1-1f1f7",
            uc_full: "1f1f1-1f1f7",
            shortnames: [":lr:"],
            category: "flags"
        },
        ":flag_ls:": {
            uc_base: "1f1f1-1f1f8",
            uc_full: "1f1f1-1f1f8",
            shortnames: [":ls:"],
            category: "flags"
        },
        ":flag_lt:": {
            uc_base: "1f1f1-1f1f9",
            uc_full: "1f1f1-1f1f9",
            shortnames: [":lt:"],
            category: "flags"
        },
        ":flag_lu:": {
            uc_base: "1f1f1-1f1fa",
            uc_full: "1f1f1-1f1fa",
            shortnames: [":lu:"],
            category: "flags"
        },
        ":flag_lv:": {
            uc_base: "1f1f1-1f1fb",
            uc_full: "1f1f1-1f1fb",
            shortnames: [":lv:"],
            category: "flags"
        },
        ":flag_ly:": {
            uc_base: "1f1f1-1f1fe",
            uc_full: "1f1f1-1f1fe",
            shortnames: [":ly:"],
            category: "flags"
        },
        ":flag_ma:": {
            uc_base: "1f1f2-1f1e6",
            uc_full: "1f1f2-1f1e6",
            shortnames: [":ma:"],
            category: "flags"
        },
        ":flag_mc:": {
            uc_base: "1f1f2-1f1e8",
            uc_full: "1f1f2-1f1e8",
            shortnames: [":mc:"],
            category: "flags"
        },
        ":flag_md:": {
            uc_base: "1f1f2-1f1e9",
            uc_full: "1f1f2-1f1e9",
            shortnames: [":md:"],
            category: "flags"
        },
        ":flag_me:": {
            uc_base: "1f1f2-1f1ea",
            uc_full: "1f1f2-1f1ea",
            shortnames: [":me:"],
            category: "flags"
        },
        ":flag_mf:": {
            uc_base: "1f1f2-1f1eb",
            uc_full: "1f1f2-1f1eb",
            shortnames: [":mf:"],
            category: "flags"
        },
        ":flag_mg:": {
            uc_base: "1f1f2-1f1ec",
            uc_full: "1f1f2-1f1ec",
            shortnames: [":mg:"],
            category: "flags"
        },
        ":flag_mh:": {
            uc_base: "1f1f2-1f1ed",
            uc_full: "1f1f2-1f1ed",
            shortnames: [":mh:"],
            category: "flags"
        },
        ":flag_mk:": {
            uc_base: "1f1f2-1f1f0",
            uc_full: "1f1f2-1f1f0",
            shortnames: [":mk:"],
            category: "flags"
        },
        ":flag_ml:": {
            uc_base: "1f1f2-1f1f1",
            uc_full: "1f1f2-1f1f1",
            shortnames: [":ml:"],
            category: "flags"
        },
        ":flag_mm:": {
            uc_base: "1f1f2-1f1f2",
            uc_full: "1f1f2-1f1f2",
            shortnames: [":mm:"],
            category: "flags"
        },
        ":flag_mn:": {
            uc_base: "1f1f2-1f1f3",
            uc_full: "1f1f2-1f1f3",
            shortnames: [":mn:"],
            category: "flags"
        },
        ":flag_mo:": {
            uc_base: "1f1f2-1f1f4",
            uc_full: "1f1f2-1f1f4",
            shortnames: [":mo:"],
            category: "flags"
        },
        ":flag_mp:": {
            uc_base: "1f1f2-1f1f5",
            uc_full: "1f1f2-1f1f5",
            shortnames: [":mp:"],
            category: "flags"
        },
        ":flag_mq:": {
            uc_base: "1f1f2-1f1f6",
            uc_full: "1f1f2-1f1f6",
            shortnames: [":mq:"],
            category: "flags"
        },
        ":flag_mr:": {
            uc_base: "1f1f2-1f1f7",
            uc_full: "1f1f2-1f1f7",
            shortnames: [":mr:"],
            category: "flags"
        },
        ":flag_ms:": {
            uc_base: "1f1f2-1f1f8",
            uc_full: "1f1f2-1f1f8",
            shortnames: [":ms:"],
            category: "flags"
        },
        ":flag_mt:": {
            uc_base: "1f1f2-1f1f9",
            uc_full: "1f1f2-1f1f9",
            shortnames: [":mt:"],
            category: "flags"
        },
        ":flag_mu:": {
            uc_base: "1f1f2-1f1fa",
            uc_full: "1f1f2-1f1fa",
            shortnames: [":mu:"],
            category: "flags"
        },
        ":flag_mv:": {
            uc_base: "1f1f2-1f1fb",
            uc_full: "1f1f2-1f1fb",
            shortnames: [":mv:"],
            category: "flags"
        },
        ":flag_mw:": {
            uc_base: "1f1f2-1f1fc",
            uc_full: "1f1f2-1f1fc",
            shortnames: [":mw:"],
            category: "flags"
        },
        ":flag_mx:": {
            uc_base: "1f1f2-1f1fd",
            uc_full: "1f1f2-1f1fd",
            shortnames: [":mx:"],
            category: "flags"
        },
        ":flag_my:": {
            uc_base: "1f1f2-1f1fe",
            uc_full: "1f1f2-1f1fe",
            shortnames: [":my:"],
            category: "flags"
        },
        ":flag_mz:": {
            uc_base: "1f1f2-1f1ff",
            uc_full: "1f1f2-1f1ff",
            shortnames: [":mz:"],
            category: "flags"
        },
        ":flag_na:": {
            uc_base: "1f1f3-1f1e6",
            uc_full: "1f1f3-1f1e6",
            shortnames: [":na:"],
            category: "flags"
        },
        ":flag_nc:": {
            uc_base: "1f1f3-1f1e8",
            uc_full: "1f1f3-1f1e8",
            shortnames: [":nc:"],
            category: "flags"
        },
        ":flag_ne:": {
            uc_base: "1f1f3-1f1ea",
            uc_full: "1f1f3-1f1ea",
            shortnames: [":ne:"],
            category: "flags"
        },
        ":flag_nf:": {
            uc_base: "1f1f3-1f1eb",
            uc_full: "1f1f3-1f1eb",
            shortnames: [":nf:"],
            category: "flags"
        },
        ":flag_ng:": {
            uc_base: "1f1f3-1f1ec",
            uc_full: "1f1f3-1f1ec",
            shortnames: [":nigeria:"],
            category: "flags"
        },
        ":flag_ni:": {
            uc_base: "1f1f3-1f1ee",
            uc_full: "1f1f3-1f1ee",
            shortnames: [":ni:"],
            category: "flags"
        },
        ":flag_nl:": {
            uc_base: "1f1f3-1f1f1",
            uc_full: "1f1f3-1f1f1",
            shortnames: [":nl:"],
            category: "flags"
        },
        ":flag_no:": {
            uc_base: "1f1f3-1f1f4",
            uc_full: "1f1f3-1f1f4",
            shortnames: [":no:"],
            category: "flags"
        },
        ":flag_np:": {
            uc_base: "1f1f3-1f1f5",
            uc_full: "1f1f3-1f1f5",
            shortnames: [":np:"],
            category: "flags"
        },
        ":flag_nr:": {
            uc_base: "1f1f3-1f1f7",
            uc_full: "1f1f3-1f1f7",
            shortnames: [":nr:"],
            category: "flags"
        },
        ":flag_nu:": {
            uc_base: "1f1f3-1f1fa",
            uc_full: "1f1f3-1f1fa",
            shortnames: [":nu:"],
            category: "flags"
        },
        ":flag_nz:": {
            uc_base: "1f1f3-1f1ff",
            uc_full: "1f1f3-1f1ff",
            shortnames: [":nz:"],
            category: "flags"
        },
        ":flag_om:": {
            uc_base: "1f1f4-1f1f2",
            uc_full: "1f1f4-1f1f2",
            shortnames: [":om:"],
            category: "flags"
        },
        ":flag_pa:": {
            uc_base: "1f1f5-1f1e6",
            uc_full: "1f1f5-1f1e6",
            shortnames: [":pa:"],
            category: "flags"
        },
        ":flag_pe:": {
            uc_base: "1f1f5-1f1ea",
            uc_full: "1f1f5-1f1ea",
            shortnames: [":pe:"],
            category: "flags"
        },
        ":flag_pf:": {
            uc_base: "1f1f5-1f1eb",
            uc_full: "1f1f5-1f1eb",
            shortnames: [":pf:"],
            category: "flags"
        },
        ":flag_pg:": {
            uc_base: "1f1f5-1f1ec",
            uc_full: "1f1f5-1f1ec",
            shortnames: [":pg:"],
            category: "flags"
        },
        ":flag_ph:": {
            uc_base: "1f1f5-1f1ed",
            uc_full: "1f1f5-1f1ed",
            shortnames: [":ph:"],
            category: "flags"
        },
        ":flag_pk:": {
            uc_base: "1f1f5-1f1f0",
            uc_full: "1f1f5-1f1f0",
            shortnames: [":pk:"],
            category: "flags"
        },
        ":flag_pl:": {
            uc_base: "1f1f5-1f1f1",
            uc_full: "1f1f5-1f1f1",
            shortnames: [":pl:"],
            category: "flags"
        },
        ":flag_pm:": {
            uc_base: "1f1f5-1f1f2",
            uc_full: "1f1f5-1f1f2",
            shortnames: [":pm:"],
            category: "flags"
        },
        ":flag_pn:": {
            uc_base: "1f1f5-1f1f3",
            uc_full: "1f1f5-1f1f3",
            shortnames: [":pn:"],
            category: "flags"
        },
        ":flag_pr:": {
            uc_base: "1f1f5-1f1f7",
            uc_full: "1f1f5-1f1f7",
            shortnames: [":pr:"],
            category: "flags"
        },
        ":flag_ps:": {
            uc_base: "1f1f5-1f1f8",
            uc_full: "1f1f5-1f1f8",
            shortnames: [":ps:"],
            category: "flags"
        },
        ":flag_pt:": {
            uc_base: "1f1f5-1f1f9",
            uc_full: "1f1f5-1f1f9",
            shortnames: [":pt:"],
            category: "flags"
        },
        ":flag_pw:": {
            uc_base: "1f1f5-1f1fc",
            uc_full: "1f1f5-1f1fc",
            shortnames: [":pw:"],
            category: "flags"
        },
        ":flag_py:": {
            uc_base: "1f1f5-1f1fe",
            uc_full: "1f1f5-1f1fe",
            shortnames: [":py:"],
            category: "flags"
        },
        ":flag_qa:": {
            uc_base: "1f1f6-1f1e6",
            uc_full: "1f1f6-1f1e6",
            shortnames: [":qa:"],
            category: "flags"
        },
        ":flag_re:": {
            uc_base: "1f1f7-1f1ea",
            uc_full: "1f1f7-1f1ea",
            shortnames: [":re:"],
            category: "flags"
        },
        ":flag_ro:": {
            uc_base: "1f1f7-1f1f4",
            uc_full: "1f1f7-1f1f4",
            shortnames: [":ro:"],
            category: "flags"
        },
        ":flag_rs:": {
            uc_base: "1f1f7-1f1f8",
            uc_full: "1f1f7-1f1f8",
            shortnames: [":rs:"],
            category: "flags"
        },
        ":flag_ru:": {
            uc_base: "1f1f7-1f1fa",
            uc_full: "1f1f7-1f1fa",
            shortnames: [":ru:"],
            category: "flags"
        },
        ":flag_rw:": {
            uc_base: "1f1f7-1f1fc",
            uc_full: "1f1f7-1f1fc",
            shortnames: [":rw:"],
            category: "flags"
        },
        ":flag_sa:": {
            uc_base: "1f1f8-1f1e6",
            uc_full: "1f1f8-1f1e6",
            shortnames: [":saudiarabia:", ":saudi:"],
            category: "flags"
        },
        ":flag_sb:": {
            uc_base: "1f1f8-1f1e7",
            uc_full: "1f1f8-1f1e7",
            shortnames: [":sb:"],
            category: "flags"
        },
        ":flag_sc:": {
            uc_base: "1f1f8-1f1e8",
            uc_full: "1f1f8-1f1e8",
            shortnames: [":sc:"],
            category: "flags"
        },
        ":flag_sd:": {
            uc_base: "1f1f8-1f1e9",
            uc_full: "1f1f8-1f1e9",
            shortnames: [":sd:"],
            category: "flags"
        },
        ":flag_se:": {
            uc_base: "1f1f8-1f1ea",
            uc_full: "1f1f8-1f1ea",
            shortnames: [":se:"],
            category: "flags"
        },
        ":flag_sg:": {
            uc_base: "1f1f8-1f1ec",
            uc_full: "1f1f8-1f1ec",
            shortnames: [":sg:"],
            category: "flags"
        },
        ":flag_sh:": {
            uc_base: "1f1f8-1f1ed",
            uc_full: "1f1f8-1f1ed",
            shortnames: [":sh:"],
            category: "flags"
        },
        ":flag_si:": {
            uc_base: "1f1f8-1f1ee",
            uc_full: "1f1f8-1f1ee",
            shortnames: [":si:"],
            category: "flags"
        },
        ":flag_sj:": {
            uc_base: "1f1f8-1f1ef",
            uc_full: "1f1f8-1f1ef",
            shortnames: [":sj:"],
            category: "flags"
        },
        ":flag_sk:": {
            uc_base: "1f1f8-1f1f0",
            uc_full: "1f1f8-1f1f0",
            shortnames: [":sk:"],
            category: "flags"
        },
        ":flag_sl:": {
            uc_base: "1f1f8-1f1f1",
            uc_full: "1f1f8-1f1f1",
            shortnames: [":sl:"],
            category: "flags"
        },
        ":flag_sm:": {
            uc_base: "1f1f8-1f1f2",
            uc_full: "1f1f8-1f1f2",
            shortnames: [":sm:"],
            category: "flags"
        },
        ":flag_sn:": {
            uc_base: "1f1f8-1f1f3",
            uc_full: "1f1f8-1f1f3",
            shortnames: [":sn:"],
            category: "flags"
        },
        ":flag_so:": {
            uc_base: "1f1f8-1f1f4",
            uc_full: "1f1f8-1f1f4",
            shortnames: [":so:"],
            category: "flags"
        },
        ":flag_sr:": {
            uc_base: "1f1f8-1f1f7",
            uc_full: "1f1f8-1f1f7",
            shortnames: [":sr:"],
            category: "flags"
        },
        ":flag_ss:": {
            uc_base: "1f1f8-1f1f8",
            uc_full: "1f1f8-1f1f8",
            shortnames: [":ss:"],
            category: "flags"
        },
        ":flag_st:": {
            uc_base: "1f1f8-1f1f9",
            uc_full: "1f1f8-1f1f9",
            shortnames: [":st:"],
            category: "flags"
        },
        ":flag_sv:": {
            uc_base: "1f1f8-1f1fb",
            uc_full: "1f1f8-1f1fb",
            shortnames: [":sv:"],
            category: "flags"
        },
        ":flag_sx:": {
            uc_base: "1f1f8-1f1fd",
            uc_full: "1f1f8-1f1fd",
            shortnames: [":sx:"],
            category: "flags"
        },
        ":flag_sy:": {
            uc_base: "1f1f8-1f1fe",
            uc_full: "1f1f8-1f1fe",
            shortnames: [":sy:"],
            category: "flags"
        },
        ":flag_sz:": {
            uc_base: "1f1f8-1f1ff",
            uc_full: "1f1f8-1f1ff",
            shortnames: [":sz:"],
            category: "flags"
        },
        ":flag_ta:": {
            uc_base: "1f1f9-1f1e6",
            uc_full: "1f1f9-1f1e6",
            shortnames: [":ta:"],
            category: "flags"
        },
        ":flag_tc:": {
            uc_base: "1f1f9-1f1e8",
            uc_full: "1f1f9-1f1e8",
            shortnames: [":tc:"],
            category: "flags"
        },
        ":flag_td:": {
            uc_base: "1f1f9-1f1e9",
            uc_full: "1f1f9-1f1e9",
            shortnames: [":td:"],
            category: "flags"
        },
        ":flag_tf:": {
            uc_base: "1f1f9-1f1eb",
            uc_full: "1f1f9-1f1eb",
            shortnames: [":tf:"],
            category: "flags"
        },
        ":flag_tg:": {
            uc_base: "1f1f9-1f1ec",
            uc_full: "1f1f9-1f1ec",
            shortnames: [":tg:"],
            category: "flags"
        },
        ":flag_th:": {
            uc_base: "1f1f9-1f1ed",
            uc_full: "1f1f9-1f1ed",
            shortnames: [":th:"],
            category: "flags"
        },
        ":flag_tj:": {
            uc_base: "1f1f9-1f1ef",
            uc_full: "1f1f9-1f1ef",
            shortnames: [":tj:"],
            category: "flags"
        },
        ":flag_tk:": {
            uc_base: "1f1f9-1f1f0",
            uc_full: "1f1f9-1f1f0",
            shortnames: [":tk:"],
            category: "flags"
        },
        ":flag_tl:": {
            uc_base: "1f1f9-1f1f1",
            uc_full: "1f1f9-1f1f1",
            shortnames: [":tl:"],
            category: "flags"
        },
        ":flag_tm:": {
            uc_base: "1f1f9-1f1f2",
            uc_full: "1f1f9-1f1f2",
            shortnames: [":turkmenistan:"],
            category: "flags"
        },
        ":flag_tn:": {
            uc_base: "1f1f9-1f1f3",
            uc_full: "1f1f9-1f1f3",
            shortnames: [":tn:"],
            category: "flags"
        },
        ":flag_to:": {
            uc_base: "1f1f9-1f1f4",
            uc_full: "1f1f9-1f1f4",
            shortnames: [":to:"],
            category: "flags"
        },
        ":flag_tr:": {
            uc_base: "1f1f9-1f1f7",
            uc_full: "1f1f9-1f1f7",
            shortnames: [":tr:"],
            category: "flags"
        },
        ":flag_tt:": {
            uc_base: "1f1f9-1f1f9",
            uc_full: "1f1f9-1f1f9",
            shortnames: [":tt:"],
            category: "flags"
        },
        ":flag_tv:": {
            uc_base: "1f1f9-1f1fb",
            uc_full: "1f1f9-1f1fb",
            shortnames: [":tuvalu:"],
            category: "flags"
        },
        ":flag_tw:": {
            uc_base: "1f1f9-1f1fc",
            uc_full: "1f1f9-1f1fc",
            shortnames: [":tw:"],
            category: "flags"
        },
        ":flag_tz:": {
            uc_base: "1f1f9-1f1ff",
            uc_full: "1f1f9-1f1ff",
            shortnames: [":tz:"],
            category: "flags"
        },
        ":flag_ua:": {
            uc_base: "1f1fa-1f1e6",
            uc_full: "1f1fa-1f1e6",
            shortnames: [":ua:"],
            category: "flags"
        },
        ":flag_ug:": {
            uc_base: "1f1fa-1f1ec",
            uc_full: "1f1fa-1f1ec",
            shortnames: [":ug:"],
            category: "flags"
        },
        ":flag_um:": {
            uc_base: "1f1fa-1f1f2",
            uc_full: "1f1fa-1f1f2",
            shortnames: [":um:"],
            category: "flags"
        },
        ":flag_us:": {
            uc_base: "1f1fa-1f1f8",
            uc_full: "1f1fa-1f1f8",
            shortnames: [":us:"],
            category: "flags"
        },
        ":flag_uy:": {
            uc_base: "1f1fa-1f1fe",
            uc_full: "1f1fa-1f1fe",
            shortnames: [":uy:"],
            category: "flags"
        },
        ":flag_uz:": {
            uc_base: "1f1fa-1f1ff",
            uc_full: "1f1fa-1f1ff",
            shortnames: [":uz:"],
            category: "flags"
        },
        ":flag_va:": {
            uc_base: "1f1fb-1f1e6",
            uc_full: "1f1fb-1f1e6",
            shortnames: [":va:"],
            category: "flags"
        },
        ":flag_vc:": {
            uc_base: "1f1fb-1f1e8",
            uc_full: "1f1fb-1f1e8",
            shortnames: [":vc:"],
            category: "flags"
        },
        ":flag_ve:": {
            uc_base: "1f1fb-1f1ea",
            uc_full: "1f1fb-1f1ea",
            shortnames: [":ve:"],
            category: "flags"
        },
        ":flag_vg:": {
            uc_base: "1f1fb-1f1ec",
            uc_full: "1f1fb-1f1ec",
            shortnames: [":vg:"],
            category: "flags"
        },
        ":flag_vi:": {
            uc_base: "1f1fb-1f1ee",
            uc_full: "1f1fb-1f1ee",
            shortnames: [":vi:"],
            category: "flags"
        },
        ":flag_vn:": {
            uc_base: "1f1fb-1f1f3",
            uc_full: "1f1fb-1f1f3",
            shortnames: [":vn:"],
            category: "flags"
        },
        ":flag_vu:": {
            uc_base: "1f1fb-1f1fa",
            uc_full: "1f1fb-1f1fa",
            shortnames: [":vu:"],
            category: "flags"
        },
        ":flag_wf:": {
            uc_base: "1f1fc-1f1eb",
            uc_full: "1f1fc-1f1eb",
            shortnames: [":wf:"],
            category: "flags"
        },
        ":flag_ws:": {
            uc_base: "1f1fc-1f1f8",
            uc_full: "1f1fc-1f1f8",
            shortnames: [":ws:"],
            category: "flags"
        },
        ":flag_xk:": {
            uc_base: "1f1fd-1f1f0",
            uc_full: "1f1fd-1f1f0",
            shortnames: [":xk:"],
            category: "flags"
        },
        ":flag_ye:": {
            uc_base: "1f1fe-1f1ea",
            uc_full: "1f1fe-1f1ea",
            shortnames: [":ye:"],
            category: "flags"
        },
        ":flag_yt:": {
            uc_base: "1f1fe-1f1f9",
            uc_full: "1f1fe-1f1f9",
            shortnames: [":yt:"],
            category: "flags"
        },
        ":flag_za:": {
            uc_base: "1f1ff-1f1e6",
            uc_full: "1f1ff-1f1e6",
            shortnames: [":za:"],
            category: "flags"
        },
        ":flag_zm:": {
            uc_base: "1f1ff-1f1f2",
            uc_full: "1f1ff-1f1f2",
            shortnames: [":zm:"],
            category: "flags"
        },
        ":flag_zw:": {
            uc_base: "1f1ff-1f1fc",
            uc_full: "1f1ff-1f1fc",
            shortnames: [":zw:"],
            category: "flags"
        },
        ":foot_tone1:": {
            uc_base: "1f9b6-1f3fb",
            uc_full: "1f9b6-1f3fb",
            shortnames: [":foot_light_skin_tone:"],
            category: "people"
        },
        ":foot_tone2:": {
            uc_base: "1f9b6-1f3fc",
            uc_full: "1f9b6-1f3fc",
            shortnames: [":foot_medium_light_skin_tone:"],
            category: "people"
        },
        ":foot_tone3:": {
            uc_base: "1f9b6-1f3fd",
            uc_full: "1f9b6-1f3fd",
            shortnames: [":foot_medium_skin_tone:"],
            category: "people"
        },
        ":foot_tone4:": {
            uc_base: "1f9b6-1f3fe",
            uc_full: "1f9b6-1f3fe",
            shortnames: [":foot_medium_dark_skin_tone:"],
            category: "people"
        },
        ":foot_tone5:": {
            uc_base: "1f9b6-1f3ff",
            uc_full: "1f9b6-1f3ff",
            shortnames: [":foot_dark_skin_tone:"],
            category: "people"
        },
        ":girl_tone1:": {
            uc_base: "1f467-1f3fb",
            uc_full: "1f467-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":girl_tone2:": {
            uc_base: "1f467-1f3fc",
            uc_full: "1f467-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":girl_tone3:": {
            uc_base: "1f467-1f3fd",
            uc_full: "1f467-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":girl_tone4:": {
            uc_base: "1f467-1f3fe",
            uc_full: "1f467-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":girl_tone5:": {
            uc_base: "1f467-1f3ff",
            uc_full: "1f467-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":guard_tone1:": {
            uc_base: "1f482-1f3fb",
            uc_full: "1f482-1f3fb",
            shortnames: [":guardsman_tone1:"],
            category: "people"
        },
        ":guard_tone2:": {
            uc_base: "1f482-1f3fc",
            uc_full: "1f482-1f3fc",
            shortnames: [":guardsman_tone2:"],
            category: "people"
        },
        ":guard_tone3:": {
            uc_base: "1f482-1f3fd",
            uc_full: "1f482-1f3fd",
            shortnames: [":guardsman_tone3:"],
            category: "people"
        },
        ":guard_tone4:": {
            uc_base: "1f482-1f3fe",
            uc_full: "1f482-1f3fe",
            shortnames: [":guardsman_tone4:"],
            category: "people"
        },
        ":guard_tone5:": {
            uc_base: "1f482-1f3ff",
            uc_full: "1f482-1f3ff",
            shortnames: [":guardsman_tone5:"],
            category: "people"
        },
        ":hand_splayed_tone1:": {
            uc_base: "1f590-1f3fb",
            uc_full: "1f590-fe0f-1f3fb",
            shortnames: [":raised_hand_with_fingers_splayed_tone1:"],
            category: "people"
        },
        ":hand_splayed_tone2:": {
            uc_base: "1f590-1f3fc",
            uc_full: "1f590-fe0f-1f3fc",
            shortnames: [":raised_hand_with_fingers_splayed_tone2:"],
            category: "people"
        },
        ":hand_splayed_tone3:": {
            uc_base: "1f590-1f3fd",
            uc_full: "1f590-fe0f-1f3fd",
            shortnames: [":raised_hand_with_fingers_splayed_tone3:"],
            category: "people"
        },
        ":hand_splayed_tone4:": {
            uc_base: "1f590-1f3fe",
            uc_full: "1f590-fe0f-1f3fe",
            shortnames: [":raised_hand_with_fingers_splayed_tone4:"],
            category: "people"
        },
        ":hand_splayed_tone5:": {
            uc_base: "1f590-1f3ff",
            uc_full: "1f590-fe0f-1f3ff",
            shortnames: [":raised_hand_with_fingers_splayed_tone5:"],
            category: "people"
        },
        ":horse_racing_tone1:": {
            uc_base: "1f3c7-1f3fb",
            uc_full: "1f3c7-1f3fb",
            shortnames: [],
            category: "activity"
        },
        ":horse_racing_tone2:": {
            uc_base: "1f3c7-1f3fc",
            uc_full: "1f3c7-1f3fc",
            shortnames: [],
            category: "activity"
        },
        ":horse_racing_tone3:": {
            uc_base: "1f3c7-1f3fd",
            uc_full: "1f3c7-1f3fd",
            shortnames: [],
            category: "activity"
        },
        ":horse_racing_tone4:": {
            uc_base: "1f3c7-1f3fe",
            uc_full: "1f3c7-1f3fe",
            shortnames: [],
            category: "activity"
        },
        ":horse_racing_tone5:": {
            uc_base: "1f3c7-1f3ff",
            uc_full: "1f3c7-1f3ff",
            shortnames: [],
            category: "activity"
        },
        ":left_facing_fist_tone1:": {
            uc_base: "1f91b-1f3fb",
            uc_full: "1f91b-1f3fb",
            shortnames: [":left_fist_tone1:"],
            category: "people"
        },
        ":left_facing_fist_tone2:": {
            uc_base: "1f91b-1f3fc",
            uc_full: "1f91b-1f3fc",
            shortnames: [":left_fist_tone2:"],
            category: "people"
        },
        ":left_facing_fist_tone3:": {
            uc_base: "1f91b-1f3fd",
            uc_full: "1f91b-1f3fd",
            shortnames: [":left_fist_tone3:"],
            category: "people"
        },
        ":left_facing_fist_tone4:": {
            uc_base: "1f91b-1f3fe",
            uc_full: "1f91b-1f3fe",
            shortnames: [":left_fist_tone4:"],
            category: "people"
        },
        ":left_facing_fist_tone5:": {
            uc_base: "1f91b-1f3ff",
            uc_full: "1f91b-1f3ff",
            shortnames: [":left_fist_tone5:"],
            category: "people"
        },
        ":leg_tone1:": {
            uc_base: "1f9b5-1f3fb",
            uc_full: "1f9b5-1f3fb",
            shortnames: [":leg_light_skin_tone:"],
            category: "people"
        },
        ":leg_tone2:": {
            uc_base: "1f9b5-1f3fc",
            uc_full: "1f9b5-1f3fc",
            shortnames: [":leg_medium_light_skin_tone:"],
            category: "people"
        },
        ":leg_tone3:": {
            uc_base: "1f9b5-1f3fd",
            uc_full: "1f9b5-1f3fd",
            shortnames: [":leg_medium_skin_tone:"],
            category: "people"
        },
        ":leg_tone4:": {
            uc_base: "1f9b5-1f3fe",
            uc_full: "1f9b5-1f3fe",
            shortnames: [":leg_medium_dark_skin_tone:"],
            category: "people"
        },
        ":leg_tone5:": {
            uc_base: "1f9b5-1f3ff",
            uc_full: "1f9b5-1f3ff",
            shortnames: [":leg_dark_skin_tone:"],
            category: "people"
        },
        ":levitate_tone1:": {
            uc_base: "1f574-1f3fb",
            uc_full: "1f574-fe0f-1f3fb",
            shortnames: [":man_in_business_suit_levitating_tone1:", ":man_in_business_suit_levitating_light_skin_tone:"],
            category: "people"
        },
        ":levitate_tone2:": {
            uc_base: "1f574-1f3fc",
            uc_full: "1f574-fe0f-1f3fc",
            shortnames: [":man_in_business_suit_levitating_tone2:", ":man_in_business_suit_levitating_medium_light_skin_tone:"],
            category: "people"
        },
        ":levitate_tone3:": {
            uc_base: "1f574-1f3fd",
            uc_full: "1f574-fe0f-1f3fd",
            shortnames: [":man_in_business_suit_levitating_tone3:", ":man_in_business_suit_levitating_medium_skin_tone:"],
            category: "people"
        },
        ":levitate_tone4:": {
            uc_base: "1f574-1f3fe",
            uc_full: "1f574-fe0f-1f3fe",
            shortnames: [":man_in_business_suit_levitating_tone4:", ":man_in_business_suit_levitating_medium_dark_skin_tone:"],
            category: "people"
        },
        ":levitate_tone5:": {
            uc_base: "1f574-1f3ff",
            uc_full: "1f574-fe0f-1f3ff",
            shortnames: [":man_in_business_suit_levitating_tone5:", ":man_in_business_suit_levitating_dark_skin_tone:"],
            category: "people"
        },
        ":love_you_gesture_tone1:": {
            uc_base: "1f91f-1f3fb",
            uc_full: "1f91f-1f3fb",
            shortnames: [":love_you_gesture_light_skin_tone:"],
            category: "people"
        },
        ":love_you_gesture_tone2:": {
            uc_base: "1f91f-1f3fc",
            uc_full: "1f91f-1f3fc",
            shortnames: [":love_you_gesture_medium_light_skin_tone:"],
            category: "people"
        },
        ":love_you_gesture_tone3:": {
            uc_base: "1f91f-1f3fd",
            uc_full: "1f91f-1f3fd",
            shortnames: [":love_you_gesture_medium_skin_tone:"],
            category: "people"
        },
        ":love_you_gesture_tone4:": {
            uc_base: "1f91f-1f3fe",
            uc_full: "1f91f-1f3fe",
            shortnames: [":love_you_gesture_medium_dark_skin_tone:"],
            category: "people"
        },
        ":love_you_gesture_tone5:": {
            uc_base: "1f91f-1f3ff",
            uc_full: "1f91f-1f3ff",
            shortnames: [":love_you_gesture_dark_skin_tone:"],
            category: "people"
        },
        ":mage_tone1:": {
            uc_base: "1f9d9-1f3fb",
            uc_full: "1f9d9-1f3fb",
            shortnames: [":mage_light_skin_tone:"],
            category: "people"
        },
        ":mage_tone2:": {
            uc_base: "1f9d9-1f3fc",
            uc_full: "1f9d9-1f3fc",
            shortnames: [":mage_medium_light_skin_tone:"],
            category: "people"
        },
        ":mage_tone3:": {
            uc_base: "1f9d9-1f3fd",
            uc_full: "1f9d9-1f3fd",
            shortnames: [":mage_medium_skin_tone:"],
            category: "people"
        },
        ":mage_tone4:": {
            uc_base: "1f9d9-1f3fe",
            uc_full: "1f9d9-1f3fe",
            shortnames: [":mage_medium_dark_skin_tone:"],
            category: "people"
        },
        ":mage_tone5:": {
            uc_base: "1f9d9-1f3ff",
            uc_full: "1f9d9-1f3ff",
            shortnames: [":mage_dark_skin_tone:"],
            category: "people"
        },
        ":man_artist:": {
            uc_base: "1f468-1f3a8",
            uc_full: "1f468-200d-1f3a8",
            shortnames: [],
            category: "people"
        },
        ":man_astronaut:": {
            uc_base: "1f468-1f680",
            uc_full: "1f468-200d-1f680",
            shortnames: [],
            category: "people"
        },
        ":man_bald:": {
            uc_base: "1f468-1f9b2",
            uc_full: "1f468-200d-1f9b2",
            shortnames: [],
            category: "people"
        },
        ":man_cook:": {
            uc_base: "1f468-1f373",
            uc_full: "1f468-200d-1f373",
            shortnames: [],
            category: "people"
        },
        ":man_curly_haired:": {
            uc_base: "1f468-1f9b1",
            uc_full: "1f468-200d-1f9b1",
            shortnames: [],
            category: "people"
        },
        ":man_dancing_tone1:": {
            uc_base: "1f57a-1f3fb",
            uc_full: "1f57a-1f3fb",
            shortnames: [":male_dancer_tone1:"],
            category: "people"
        },
        ":man_dancing_tone2:": {
            uc_base: "1f57a-1f3fc",
            uc_full: "1f57a-1f3fc",
            shortnames: [":male_dancer_tone2:"],
            category: "people"
        },
        ":man_dancing_tone3:": {
            uc_base: "1f57a-1f3fd",
            uc_full: "1f57a-1f3fd",
            shortnames: [":male_dancer_tone3:"],
            category: "people"
        },
        ":man_dancing_tone4:": {
            uc_base: "1f57a-1f3fe",
            uc_full: "1f57a-1f3fe",
            shortnames: [":male_dancer_tone4:"],
            category: "people"
        },
        ":man_dancing_tone5:": {
            uc_base: "1f57a-1f3ff",
            uc_full: "1f57a-1f3ff",
            shortnames: [":male_dancer_tone5:"],
            category: "people"
        },
        ":man_factory_worker:": {
            uc_base: "1f468-1f3ed",
            uc_full: "1f468-200d-1f3ed",
            shortnames: [],
            category: "people"
        },
        ":man_farmer:": {
            uc_base: "1f468-1f33e",
            uc_full: "1f468-200d-1f33e",
            shortnames: [],
            category: "people"
        },
        ":man_firefighter:": {
            uc_base: "1f468-1f692",
            uc_full: "1f468-200d-1f692",
            shortnames: [],
            category: "people"
        },
        ":man_in_manual_wheelchair:": {
            uc_base: "1f468-1f9bd",
            uc_full: "1f468-200d-1f9bd",
            shortnames: [],
            category: "people"
        },
        ":man_in_motorized_wheelchair:": {
            uc_base: "1f468-1f9bc",
            uc_full: "1f468-200d-1f9bc",
            shortnames: [],
            category: "people"
        },
        ":man_in_tuxedo_tone1:": {
            uc_base: "1f935-1f3fb",
            uc_full: "1f935-1f3fb",
            shortnames: [":tuxedo_tone1:"],
            category: "people"
        },
        ":man_in_tuxedo_tone2:": {
            uc_base: "1f935-1f3fc",
            uc_full: "1f935-1f3fc",
            shortnames: [":tuxedo_tone2:"],
            category: "people"
        },
        ":man_in_tuxedo_tone3:": {
            uc_base: "1f935-1f3fd",
            uc_full: "1f935-1f3fd",
            shortnames: [":tuxedo_tone3:"],
            category: "people"
        },
        ":man_in_tuxedo_tone4:": {
            uc_base: "1f935-1f3fe",
            uc_full: "1f935-1f3fe",
            shortnames: [":tuxedo_tone4:"],
            category: "people"
        },
        ":man_in_tuxedo_tone5:": {
            uc_base: "1f935-1f3ff",
            uc_full: "1f935-1f3ff",
            shortnames: [":tuxedo_tone5:"],
            category: "people"
        },
        ":man_mechanic:": {
            uc_base: "1f468-1f527",
            uc_full: "1f468-200d-1f527",
            shortnames: [],
            category: "people"
        },
        ":man_office_worker:": {
            uc_base: "1f468-1f4bc",
            uc_full: "1f468-200d-1f4bc",
            shortnames: [],
            category: "people"
        },
        ":man_red_haired:": {
            uc_base: "1f468-1f9b0",
            uc_full: "1f468-200d-1f9b0",
            shortnames: [],
            category: "people"
        },
        ":man_scientist:": {
            uc_base: "1f468-1f52c",
            uc_full: "1f468-200d-1f52c",
            shortnames: [],
            category: "people"
        },
        ":man_singer:": {
            uc_base: "1f468-1f3a4",
            uc_full: "1f468-200d-1f3a4",
            shortnames: [],
            category: "people"
        },
        ":man_student:": {
            uc_base: "1f468-1f393",
            uc_full: "1f468-200d-1f393",
            shortnames: [],
            category: "people"
        },
        ":man_teacher:": {
            uc_base: "1f468-1f3eb",
            uc_full: "1f468-200d-1f3eb",
            shortnames: [],
            category: "people"
        },
        ":man_technologist:": {
            uc_base: "1f468-1f4bb",
            uc_full: "1f468-200d-1f4bb",
            shortnames: [],
            category: "people"
        },
        ":man_tone1:": {
            uc_base: "1f468-1f3fb",
            uc_full: "1f468-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":man_tone2:": {
            uc_base: "1f468-1f3fc",
            uc_full: "1f468-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":man_tone3:": {
            uc_base: "1f468-1f3fd",
            uc_full: "1f468-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":man_tone4:": {
            uc_base: "1f468-1f3fe",
            uc_full: "1f468-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":man_tone5:": {
            uc_base: "1f468-1f3ff",
            uc_full: "1f468-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":man_white_haired:": {
            uc_base: "1f468-1f9b3",
            uc_full: "1f468-200d-1f9b3",
            shortnames: [],
            category: "people"
        },
        ":man_with_chinese_cap_tone1:": {
            uc_base: "1f472-1f3fb",
            uc_full: "1f472-1f3fb",
            shortnames: [":man_with_gua_pi_mao_tone1:"],
            category: "people"
        },
        ":man_with_chinese_cap_tone2:": {
            uc_base: "1f472-1f3fc",
            uc_full: "1f472-1f3fc",
            shortnames: [":man_with_gua_pi_mao_tone2:"],
            category: "people"
        },
        ":man_with_chinese_cap_tone3:": {
            uc_base: "1f472-1f3fd",
            uc_full: "1f472-1f3fd",
            shortnames: [":man_with_gua_pi_mao_tone3:"],
            category: "people"
        },
        ":man_with_chinese_cap_tone4:": {
            uc_base: "1f472-1f3fe",
            uc_full: "1f472-1f3fe",
            shortnames: [":man_with_gua_pi_mao_tone4:"],
            category: "people"
        },
        ":man_with_chinese_cap_tone5:": {
            uc_base: "1f472-1f3ff",
            uc_full: "1f472-1f3ff",
            shortnames: [":man_with_gua_pi_mao_tone5:"],
            category: "people"
        },
        ":man_with_probing_cane:": {
            uc_base: "1f468-1f9af",
            uc_full: "1f468-200d-1f9af",
            shortnames: [],
            category: "people"
        },
        ":men_holding_hands_tone1:": {
            uc_base: "1f46c-1f3fb",
            uc_full: "1f46c-1f3fb",
            shortnames: [":men_holding_hands_light_skin_tone:"],
            category: "people"
        },
        ":men_holding_hands_tone2:": {
            uc_base: "1f46c-1f3fc",
            uc_full: "1f46c-1f3fc",
            shortnames: [":men_holding_hands_medium_light_skin_tone:"],
            category: "people"
        },
        ":men_holding_hands_tone3:": {
            uc_base: "1f46c-1f3fd",
            uc_full: "1f46c-1f3fd",
            shortnames: [":men_holding_hands_medium_skin_tone:"],
            category: "people"
        },
        ":men_holding_hands_tone4:": {
            uc_base: "1f46c-1f3fe",
            uc_full: "1f46c-1f3fe",
            shortnames: [":men_holding_hands_medium_dark_skin_tone:"],
            category: "people"
        },
        ":men_holding_hands_tone5:": {
            uc_base: "1f46c-1f3ff",
            uc_full: "1f46c-1f3ff",
            shortnames: [":men_holding_hands_dark_skin_tone:"],
            category: "people"
        },
        ":merperson_tone1:": {
            uc_base: "1f9dc-1f3fb",
            uc_full: "1f9dc-1f3fb",
            shortnames: [":merperson_light_skin_tone:"],
            category: "people"
        },
        ":merperson_tone2:": {
            uc_base: "1f9dc-1f3fc",
            uc_full: "1f9dc-1f3fc",
            shortnames: [":merperson_medium_light_skin_tone:"],
            category: "people"
        },
        ":merperson_tone3:": {
            uc_base: "1f9dc-1f3fd",
            uc_full: "1f9dc-1f3fd",
            shortnames: [":merperson_medium_skin_tone:"],
            category: "people"
        },
        ":merperson_tone4:": {
            uc_base: "1f9dc-1f3fe",
            uc_full: "1f9dc-1f3fe",
            shortnames: [":merperson_medium_dark_skin_tone:"],
            category: "people"
        },
        ":merperson_tone5:": {
            uc_base: "1f9dc-1f3ff",
            uc_full: "1f9dc-1f3ff",
            shortnames: [":merperson_dark_skin_tone:"],
            category: "people"
        },
        ":metal_tone1:": {
            uc_base: "1f918-1f3fb",
            uc_full: "1f918-1f3fb",
            shortnames: [":sign_of_the_horns_tone1:"],
            category: "people"
        },
        ":metal_tone2:": {
            uc_base: "1f918-1f3fc",
            uc_full: "1f918-1f3fc",
            shortnames: [":sign_of_the_horns_tone2:"],
            category: "people"
        },
        ":metal_tone3:": {
            uc_base: "1f918-1f3fd",
            uc_full: "1f918-1f3fd",
            shortnames: [":sign_of_the_horns_tone3:"],
            category: "people"
        },
        ":metal_tone4:": {
            uc_base: "1f918-1f3fe",
            uc_full: "1f918-1f3fe",
            shortnames: [":sign_of_the_horns_tone4:"],
            category: "people"
        },
        ":metal_tone5:": {
            uc_base: "1f918-1f3ff",
            uc_full: "1f918-1f3ff",
            shortnames: [":sign_of_the_horns_tone5:"],
            category: "people"
        },
        ":middle_finger_tone1:": {
            uc_base: "1f595-1f3fb",
            uc_full: "1f595-1f3fb",
            shortnames: [":reversed_hand_with_middle_finger_extended_tone1:"],
            category: "people"
        },
        ":middle_finger_tone2:": {
            uc_base: "1f595-1f3fc",
            uc_full: "1f595-1f3fc",
            shortnames: [":reversed_hand_with_middle_finger_extended_tone2:"],
            category: "people"
        },
        ":middle_finger_tone3:": {
            uc_base: "1f595-1f3fd",
            uc_full: "1f595-1f3fd",
            shortnames: [":reversed_hand_with_middle_finger_extended_tone3:"],
            category: "people"
        },
        ":middle_finger_tone4:": {
            uc_base: "1f595-1f3fe",
            uc_full: "1f595-1f3fe",
            shortnames: [":reversed_hand_with_middle_finger_extended_tone4:"],
            category: "people"
        },
        ":middle_finger_tone5:": {
            uc_base: "1f595-1f3ff",
            uc_full: "1f595-1f3ff",
            shortnames: [":reversed_hand_with_middle_finger_extended_tone5:"],
            category: "people"
        },
        ":mrs_claus_tone1:": {
            uc_base: "1f936-1f3fb",
            uc_full: "1f936-1f3fb",
            shortnames: [":mother_christmas_tone1:"],
            category: "people"
        },
        ":mrs_claus_tone2:": {
            uc_base: "1f936-1f3fc",
            uc_full: "1f936-1f3fc",
            shortnames: [":mother_christmas_tone2:"],
            category: "people"
        },
        ":mrs_claus_tone3:": {
            uc_base: "1f936-1f3fd",
            uc_full: "1f936-1f3fd",
            shortnames: [":mother_christmas_tone3:"],
            category: "people"
        },
        ":mrs_claus_tone4:": {
            uc_base: "1f936-1f3fe",
            uc_full: "1f936-1f3fe",
            shortnames: [":mother_christmas_tone4:"],
            category: "people"
        },
        ":mrs_claus_tone5:": {
            uc_base: "1f936-1f3ff",
            uc_full: "1f936-1f3ff",
            shortnames: [":mother_christmas_tone5:"],
            category: "people"
        },
        ":muscle_tone1:": {
            uc_base: "1f4aa-1f3fb",
            uc_full: "1f4aa-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":muscle_tone2:": {
            uc_base: "1f4aa-1f3fc",
            uc_full: "1f4aa-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":muscle_tone3:": {
            uc_base: "1f4aa-1f3fd",
            uc_full: "1f4aa-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":muscle_tone4:": {
            uc_base: "1f4aa-1f3fe",
            uc_full: "1f4aa-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":muscle_tone5:": {
            uc_base: "1f4aa-1f3ff",
            uc_full: "1f4aa-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":nail_care_tone1:": {
            uc_base: "1f485-1f3fb",
            uc_full: "1f485-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":nail_care_tone2:": {
            uc_base: "1f485-1f3fc",
            uc_full: "1f485-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":nail_care_tone3:": {
            uc_base: "1f485-1f3fd",
            uc_full: "1f485-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":nail_care_tone4:": {
            uc_base: "1f485-1f3fe",
            uc_full: "1f485-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":nail_care_tone5:": {
            uc_base: "1f485-1f3ff",
            uc_full: "1f485-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":nose_tone1:": {
            uc_base: "1f443-1f3fb",
            uc_full: "1f443-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":nose_tone2:": {
            uc_base: "1f443-1f3fc",
            uc_full: "1f443-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":nose_tone3:": {
            uc_base: "1f443-1f3fd",
            uc_full: "1f443-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":nose_tone4:": {
            uc_base: "1f443-1f3fe",
            uc_full: "1f443-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":nose_tone5:": {
            uc_base: "1f443-1f3ff",
            uc_full: "1f443-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":ok_hand_tone1:": {
            uc_base: "1f44c-1f3fb",
            uc_full: "1f44c-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":ok_hand_tone2:": {
            uc_base: "1f44c-1f3fc",
            uc_full: "1f44c-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":ok_hand_tone3:": {
            uc_base: "1f44c-1f3fd",
            uc_full: "1f44c-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":ok_hand_tone4:": {
            uc_base: "1f44c-1f3fe",
            uc_full: "1f44c-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":ok_hand_tone5:": {
            uc_base: "1f44c-1f3ff",
            uc_full: "1f44c-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":older_adult_tone1:": {
            uc_base: "1f9d3-1f3fb",
            uc_full: "1f9d3-1f3fb",
            shortnames: [":older_adult_light_skin_tone:"],
            category: "people"
        },
        ":older_adult_tone2:": {
            uc_base: "1f9d3-1f3fc",
            uc_full: "1f9d3-1f3fc",
            shortnames: [":older_adult_medium_light_skin_tone:"],
            category: "people"
        },
        ":older_adult_tone3:": {
            uc_base: "1f9d3-1f3fd",
            uc_full: "1f9d3-1f3fd",
            shortnames: [":older_adult_medium_skin_tone:"],
            category: "people"
        },
        ":older_adult_tone4:": {
            uc_base: "1f9d3-1f3fe",
            uc_full: "1f9d3-1f3fe",
            shortnames: [":older_adult_medium_dark_skin_tone:"],
            category: "people"
        },
        ":older_adult_tone5:": {
            uc_base: "1f9d3-1f3ff",
            uc_full: "1f9d3-1f3ff",
            shortnames: [":older_adult_dark_skin_tone:"],
            category: "people"
        },
        ":older_man_tone1:": {
            uc_base: "1f474-1f3fb",
            uc_full: "1f474-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":older_man_tone2:": {
            uc_base: "1f474-1f3fc",
            uc_full: "1f474-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":older_man_tone3:": {
            uc_base: "1f474-1f3fd",
            uc_full: "1f474-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":older_man_tone4:": {
            uc_base: "1f474-1f3fe",
            uc_full: "1f474-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":older_man_tone5:": {
            uc_base: "1f474-1f3ff",
            uc_full: "1f474-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":older_woman_tone1:": {
            uc_base: "1f475-1f3fb",
            uc_full: "1f475-1f3fb",
            shortnames: [":grandma_tone1:"],
            category: "people"
        },
        ":older_woman_tone2:": {
            uc_base: "1f475-1f3fc",
            uc_full: "1f475-1f3fc",
            shortnames: [":grandma_tone2:"],
            category: "people"
        },
        ":older_woman_tone3:": {
            uc_base: "1f475-1f3fd",
            uc_full: "1f475-1f3fd",
            shortnames: [":grandma_tone3:"],
            category: "people"
        },
        ":older_woman_tone4:": {
            uc_base: "1f475-1f3fe",
            uc_full: "1f475-1f3fe",
            shortnames: [":grandma_tone4:"],
            category: "people"
        },
        ":older_woman_tone5:": {
            uc_base: "1f475-1f3ff",
            uc_full: "1f475-1f3ff",
            shortnames: [":grandma_tone5:"],
            category: "people"
        },
        ":open_hands_tone1:": {
            uc_base: "1f450-1f3fb",
            uc_full: "1f450-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":open_hands_tone2:": {
            uc_base: "1f450-1f3fc",
            uc_full: "1f450-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":open_hands_tone3:": {
            uc_base: "1f450-1f3fd",
            uc_full: "1f450-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":open_hands_tone4:": {
            uc_base: "1f450-1f3fe",
            uc_full: "1f450-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":open_hands_tone5:": {
            uc_base: "1f450-1f3ff",
            uc_full: "1f450-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":palms_up_together_tone1:": {
            uc_base: "1f932-1f3fb",
            uc_full: "1f932-1f3fb",
            shortnames: [":palms_up_together_light_skin_tone:"],
            category: "people"
        },
        ":palms_up_together_tone2:": {
            uc_base: "1f932-1f3fc",
            uc_full: "1f932-1f3fc",
            shortnames: [":palms_up_together_medium_light_skin_tone:"],
            category: "people"
        },
        ":palms_up_together_tone3:": {
            uc_base: "1f932-1f3fd",
            uc_full: "1f932-1f3fd",
            shortnames: [":palms_up_together_medium_skin_tone:"],
            category: "people"
        },
        ":palms_up_together_tone4:": {
            uc_base: "1f932-1f3fe",
            uc_full: "1f932-1f3fe",
            shortnames: [":palms_up_together_medium_dark_skin_tone:"],
            category: "people"
        },
        ":palms_up_together_tone5:": {
            uc_base: "1f932-1f3ff",
            uc_full: "1f932-1f3ff",
            shortnames: [":palms_up_together_dark_skin_tone:"],
            category: "people"
        },
        ":person_biking_tone1:": {
            uc_base: "1f6b4-1f3fb",
            uc_full: "1f6b4-1f3fb",
            shortnames: [":bicyclist_tone1:"],
            category: "activity"
        },
        ":person_biking_tone2:": {
            uc_base: "1f6b4-1f3fc",
            uc_full: "1f6b4-1f3fc",
            shortnames: [":bicyclist_tone2:"],
            category: "activity"
        },
        ":person_biking_tone3:": {
            uc_base: "1f6b4-1f3fd",
            uc_full: "1f6b4-1f3fd",
            shortnames: [":bicyclist_tone3:"],
            category: "activity"
        },
        ":person_biking_tone4:": {
            uc_base: "1f6b4-1f3fe",
            uc_full: "1f6b4-1f3fe",
            shortnames: [":bicyclist_tone4:"],
            category: "activity"
        },
        ":person_biking_tone5:": {
            uc_base: "1f6b4-1f3ff",
            uc_full: "1f6b4-1f3ff",
            shortnames: [":bicyclist_tone5:"],
            category: "activity"
        },
        ":person_bowing_tone1:": {
            uc_base: "1f647-1f3fb",
            uc_full: "1f647-1f3fb",
            shortnames: [":bow_tone1:"],
            category: "people"
        },
        ":person_bowing_tone2:": {
            uc_base: "1f647-1f3fc",
            uc_full: "1f647-1f3fc",
            shortnames: [":bow_tone2:"],
            category: "people"
        },
        ":person_bowing_tone3:": {
            uc_base: "1f647-1f3fd",
            uc_full: "1f647-1f3fd",
            shortnames: [":bow_tone3:"],
            category: "people"
        },
        ":person_bowing_tone4:": {
            uc_base: "1f647-1f3fe",
            uc_full: "1f647-1f3fe",
            shortnames: [":bow_tone4:"],
            category: "people"
        },
        ":person_bowing_tone5:": {
            uc_base: "1f647-1f3ff",
            uc_full: "1f647-1f3ff",
            shortnames: [":bow_tone5:"],
            category: "people"
        },
        ":person_climbing_tone1:": {
            uc_base: "1f9d7-1f3fb",
            uc_full: "1f9d7-1f3fb",
            shortnames: [":person_climbing_light_skin_tone:"],
            category: "activity"
        },
        ":person_climbing_tone2:": {
            uc_base: "1f9d7-1f3fc",
            uc_full: "1f9d7-1f3fc",
            shortnames: [":person_climbing_medium_light_skin_tone:"],
            category: "activity"
        },
        ":person_climbing_tone3:": {
            uc_base: "1f9d7-1f3fd",
            uc_full: "1f9d7-1f3fd",
            shortnames: [":person_climbing_medium_skin_tone:"],
            category: "activity"
        },
        ":person_climbing_tone4:": {
            uc_base: "1f9d7-1f3fe",
            uc_full: "1f9d7-1f3fe",
            shortnames: [":person_climbing_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":person_climbing_tone5:": {
            uc_base: "1f9d7-1f3ff",
            uc_full: "1f9d7-1f3ff",
            shortnames: [":person_climbing_dark_skin_tone:"],
            category: "activity"
        },
        ":person_doing_cartwheel_tone1:": {
            uc_base: "1f938-1f3fb",
            uc_full: "1f938-1f3fb",
            shortnames: [":cartwheel_tone1:"],
            category: "activity"
        },
        ":person_doing_cartwheel_tone2:": {
            uc_base: "1f938-1f3fc",
            uc_full: "1f938-1f3fc",
            shortnames: [":cartwheel_tone2:"],
            category: "activity"
        },
        ":person_doing_cartwheel_tone3:": {
            uc_base: "1f938-1f3fd",
            uc_full: "1f938-1f3fd",
            shortnames: [":cartwheel_tone3:"],
            category: "activity"
        },
        ":person_doing_cartwheel_tone4:": {
            uc_base: "1f938-1f3fe",
            uc_full: "1f938-1f3fe",
            shortnames: [":cartwheel_tone4:"],
            category: "activity"
        },
        ":person_doing_cartwheel_tone5:": {
            uc_base: "1f938-1f3ff",
            uc_full: "1f938-1f3ff",
            shortnames: [":cartwheel_tone5:"],
            category: "activity"
        },
        ":person_facepalming_tone1:": {
            uc_base: "1f926-1f3fb",
            uc_full: "1f926-1f3fb",
            shortnames: [":face_palm_tone1:", ":facepalm_tone1:"],
            category: "people"
        },
        ":person_facepalming_tone2:": {
            uc_base: "1f926-1f3fc",
            uc_full: "1f926-1f3fc",
            shortnames: [":face_palm_tone2:", ":facepalm_tone2:"],
            category: "people"
        },
        ":person_facepalming_tone3:": {
            uc_base: "1f926-1f3fd",
            uc_full: "1f926-1f3fd",
            shortnames: [":face_palm_tone3:", ":facepalm_tone3:"],
            category: "people"
        },
        ":person_facepalming_tone4:": {
            uc_base: "1f926-1f3fe",
            uc_full: "1f926-1f3fe",
            shortnames: [":face_palm_tone4:", ":facepalm_tone4:"],
            category: "people"
        },
        ":person_facepalming_tone5:": {
            uc_base: "1f926-1f3ff",
            uc_full: "1f926-1f3ff",
            shortnames: [":face_palm_tone5:", ":facepalm_tone5:"],
            category: "people"
        },
        ":person_frowning_tone1:": {
            uc_base: "1f64d-1f3fb",
            uc_full: "1f64d-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":person_frowning_tone2:": {
            uc_base: "1f64d-1f3fc",
            uc_full: "1f64d-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":person_frowning_tone3:": {
            uc_base: "1f64d-1f3fd",
            uc_full: "1f64d-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":person_frowning_tone4:": {
            uc_base: "1f64d-1f3fe",
            uc_full: "1f64d-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":person_frowning_tone5:": {
            uc_base: "1f64d-1f3ff",
            uc_full: "1f64d-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":person_gesturing_no_tone1:": {
            uc_base: "1f645-1f3fb",
            uc_full: "1f645-1f3fb",
            shortnames: [":no_good_tone1:"],
            category: "people"
        },
        ":person_gesturing_no_tone2:": {
            uc_base: "1f645-1f3fc",
            uc_full: "1f645-1f3fc",
            shortnames: [":no_good_tone2:"],
            category: "people"
        },
        ":person_gesturing_no_tone3:": {
            uc_base: "1f645-1f3fd",
            uc_full: "1f645-1f3fd",
            shortnames: [":no_good_tone3:"],
            category: "people"
        },
        ":person_gesturing_no_tone4:": {
            uc_base: "1f645-1f3fe",
            uc_full: "1f645-1f3fe",
            shortnames: [":no_good_tone4:"],
            category: "people"
        },
        ":person_gesturing_no_tone5:": {
            uc_base: "1f645-1f3ff",
            uc_full: "1f645-1f3ff",
            shortnames: [":no_good_tone5:"],
            category: "people"
        },
        ":person_gesturing_ok_tone1:": {
            uc_base: "1f646-1f3fb",
            uc_full: "1f646-1f3fb",
            shortnames: [":ok_woman_tone1:"],
            category: "people"
        },
        ":person_gesturing_ok_tone2:": {
            uc_base: "1f646-1f3fc",
            uc_full: "1f646-1f3fc",
            shortnames: [":ok_woman_tone2:"],
            category: "people"
        },
        ":person_gesturing_ok_tone3:": {
            uc_base: "1f646-1f3fd",
            uc_full: "1f646-1f3fd",
            shortnames: [":ok_woman_tone3:"],
            category: "people"
        },
        ":person_gesturing_ok_tone4:": {
            uc_base: "1f646-1f3fe",
            uc_full: "1f646-1f3fe",
            shortnames: [":ok_woman_tone4:"],
            category: "people"
        },
        ":person_gesturing_ok_tone5:": {
            uc_base: "1f646-1f3ff",
            uc_full: "1f646-1f3ff",
            shortnames: [":ok_woman_tone5:"],
            category: "people"
        },
        ":person_getting_haircut_tone1:": {
            uc_base: "1f487-1f3fb",
            uc_full: "1f487-1f3fb",
            shortnames: [":haircut_tone1:"],
            category: "people"
        },
        ":person_getting_haircut_tone2:": {
            uc_base: "1f487-1f3fc",
            uc_full: "1f487-1f3fc",
            shortnames: [":haircut_tone2:"],
            category: "people"
        },
        ":person_getting_haircut_tone3:": {
            uc_base: "1f487-1f3fd",
            uc_full: "1f487-1f3fd",
            shortnames: [":haircut_tone3:"],
            category: "people"
        },
        ":person_getting_haircut_tone4:": {
            uc_base: "1f487-1f3fe",
            uc_full: "1f487-1f3fe",
            shortnames: [":haircut_tone4:"],
            category: "people"
        },
        ":person_getting_haircut_tone5:": {
            uc_base: "1f487-1f3ff",
            uc_full: "1f487-1f3ff",
            shortnames: [":haircut_tone5:"],
            category: "people"
        },
        ":person_getting_massage_tone1:": {
            uc_base: "1f486-1f3fb",
            uc_full: "1f486-1f3fb",
            shortnames: [":massage_tone1:"],
            category: "people"
        },
        ":person_getting_massage_tone2:": {
            uc_base: "1f486-1f3fc",
            uc_full: "1f486-1f3fc",
            shortnames: [":massage_tone2:"],
            category: "people"
        },
        ":person_getting_massage_tone3:": {
            uc_base: "1f486-1f3fd",
            uc_full: "1f486-1f3fd",
            shortnames: [":massage_tone3:"],
            category: "people"
        },
        ":person_getting_massage_tone4:": {
            uc_base: "1f486-1f3fe",
            uc_full: "1f486-1f3fe",
            shortnames: [":massage_tone4:"],
            category: "people"
        },
        ":person_getting_massage_tone5:": {
            uc_base: "1f486-1f3ff",
            uc_full: "1f486-1f3ff",
            shortnames: [":massage_tone5:"],
            category: "people"
        },
        ":person_golfing_tone1:": {
            uc_base: "1f3cc-1f3fb",
            uc_full: "1f3cc-fe0f-1f3fb",
            shortnames: [":person_golfing_light_skin_tone:"],
            category: "activity"
        },
        ":person_golfing_tone2:": {
            uc_base: "1f3cc-1f3fc",
            uc_full: "1f3cc-fe0f-1f3fc",
            shortnames: [":person_golfing_medium_light_skin_tone:"],
            category: "activity"
        },
        ":person_golfing_tone3:": {
            uc_base: "1f3cc-1f3fd",
            uc_full: "1f3cc-fe0f-1f3fd",
            shortnames: [":person_golfing_medium_skin_tone:"],
            category: "activity"
        },
        ":person_golfing_tone4:": {
            uc_base: "1f3cc-1f3fe",
            uc_full: "1f3cc-fe0f-1f3fe",
            shortnames: [":person_golfing_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":person_golfing_tone5:": {
            uc_base: "1f3cc-1f3ff",
            uc_full: "1f3cc-fe0f-1f3ff",
            shortnames: [":person_golfing_dark_skin_tone:"],
            category: "activity"
        },
        ":person_in_bed_tone1:": {
            uc_base: "1f6cc-1f3fb",
            uc_full: "1f6cc-1f3fb",
            shortnames: [":person_in_bed_light_skin_tone:"],
            category: "objects"
        },
        ":person_in_bed_tone2:": {
            uc_base: "1f6cc-1f3fc",
            uc_full: "1f6cc-1f3fc",
            shortnames: [":person_in_bed_medium_light_skin_tone:"],
            category: "objects"
        },
        ":person_in_bed_tone3:": {
            uc_base: "1f6cc-1f3fd",
            uc_full: "1f6cc-1f3fd",
            shortnames: [":person_in_bed_medium_skin_tone:"],
            category: "objects"
        },
        ":person_in_bed_tone4:": {
            uc_base: "1f6cc-1f3fe",
            uc_full: "1f6cc-1f3fe",
            shortnames: [":person_in_bed_medium_dark_skin_tone:"],
            category: "objects"
        },
        ":person_in_bed_tone5:": {
            uc_base: "1f6cc-1f3ff",
            uc_full: "1f6cc-1f3ff",
            shortnames: [":person_in_bed_dark_skin_tone:"],
            category: "objects"
        },
        ":person_in_lotus_position_tone1:": {
            uc_base: "1f9d8-1f3fb",
            uc_full: "1f9d8-1f3fb",
            shortnames: [":person_in_lotus_position_light_skin_tone:"],
            category: "activity"
        },
        ":person_in_lotus_position_tone2:": {
            uc_base: "1f9d8-1f3fc",
            uc_full: "1f9d8-1f3fc",
            shortnames: [":person_in_lotus_position_medium_light_skin_tone:"],
            category: "activity"
        },
        ":person_in_lotus_position_tone3:": {
            uc_base: "1f9d8-1f3fd",
            uc_full: "1f9d8-1f3fd",
            shortnames: [":person_in_lotus_position_medium_skin_tone:"],
            category: "activity"
        },
        ":person_in_lotus_position_tone4:": {
            uc_base: "1f9d8-1f3fe",
            uc_full: "1f9d8-1f3fe",
            shortnames: [":person_in_lotus_position_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":person_in_lotus_position_tone5:": {
            uc_base: "1f9d8-1f3ff",
            uc_full: "1f9d8-1f3ff",
            shortnames: [":person_in_lotus_position_dark_skin_tone:"],
            category: "activity"
        },
        ":person_in_steamy_room_tone1:": {
            uc_base: "1f9d6-1f3fb",
            uc_full: "1f9d6-1f3fb",
            shortnames: [":person_in_steamy_room_light_skin_tone:"],
            category: "people"
        },
        ":person_in_steamy_room_tone2:": {
            uc_base: "1f9d6-1f3fc",
            uc_full: "1f9d6-1f3fc",
            shortnames: [":person_in_steamy_room_medium_light_skin_tone:"],
            category: "people"
        },
        ":person_in_steamy_room_tone3:": {
            uc_base: "1f9d6-1f3fd",
            uc_full: "1f9d6-1f3fd",
            shortnames: [":person_in_steamy_room_medium_skin_tone:"],
            category: "people"
        },
        ":person_in_steamy_room_tone4:": {
            uc_base: "1f9d6-1f3fe",
            uc_full: "1f9d6-1f3fe",
            shortnames: [":person_in_steamy_room_medium_dark_skin_tone:"],
            category: "people"
        },
        ":person_in_steamy_room_tone5:": {
            uc_base: "1f9d6-1f3ff",
            uc_full: "1f9d6-1f3ff",
            shortnames: [":person_in_steamy_room_dark_skin_tone:"],
            category: "people"
        },
        ":person_juggling_tone1:": {
            uc_base: "1f939-1f3fb",
            uc_full: "1f939-1f3fb",
            shortnames: [":juggling_tone1:", ":juggler_tone1:"],
            category: "activity"
        },
        ":person_juggling_tone2:": {
            uc_base: "1f939-1f3fc",
            uc_full: "1f939-1f3fc",
            shortnames: [":juggling_tone2:", ":juggler_tone2:"],
            category: "activity"
        },
        ":person_juggling_tone3:": {
            uc_base: "1f939-1f3fd",
            uc_full: "1f939-1f3fd",
            shortnames: [":juggling_tone3:", ":juggler_tone3:"],
            category: "activity"
        },
        ":person_juggling_tone4:": {
            uc_base: "1f939-1f3fe",
            uc_full: "1f939-1f3fe",
            shortnames: [":juggling_tone4:", ":juggler_tone4:"],
            category: "activity"
        },
        ":person_juggling_tone5:": {
            uc_base: "1f939-1f3ff",
            uc_full: "1f939-1f3ff",
            shortnames: [":juggling_tone5:", ":juggler_tone5:"],
            category: "activity"
        },
        ":person_kneeling_tone1:": {
            uc_base: "1f9ce-1f3fb",
            uc_full: "1f9ce-1f3fb",
            shortnames: [":person_kneeling_light_skin_tone:"],
            category: "people"
        },
        ":person_kneeling_tone2:": {
            uc_base: "1f9ce-1f3fc",
            uc_full: "1f9ce-1f3fc",
            shortnames: [":person_kneeling_medium_light_skin_tone:"],
            category: "people"
        },
        ":person_kneeling_tone3:": {
            uc_base: "1f9ce-1f3fd",
            uc_full: "1f9ce-1f3fd",
            shortnames: [":person_kneeling_medium_skin_tone:"],
            category: "people"
        },
        ":person_kneeling_tone4:": {
            uc_base: "1f9ce-1f3fe",
            uc_full: "1f9ce-1f3fe",
            shortnames: [":person_kneeling_medium_dark_skin_tone:"],
            category: "people"
        },
        ":person_kneeling_tone5:": {
            uc_base: "1f9ce-1f3ff",
            uc_full: "1f9ce-1f3ff",
            shortnames: [":person_kneeling_dark_skin_tone:"],
            category: "people"
        },
        ":person_lifting_weights_tone1:": {
            uc_base: "1f3cb-1f3fb",
            uc_full: "1f3cb-fe0f-1f3fb",
            shortnames: [":lifter_tone1:", ":weight_lifter_tone1:"],
            category: "activity"
        },
        ":person_lifting_weights_tone2:": {
            uc_base: "1f3cb-1f3fc",
            uc_full: "1f3cb-fe0f-1f3fc",
            shortnames: [":lifter_tone2:", ":weight_lifter_tone2:"],
            category: "activity"
        },
        ":person_lifting_weights_tone3:": {
            uc_base: "1f3cb-1f3fd",
            uc_full: "1f3cb-fe0f-1f3fd",
            shortnames: [":lifter_tone3:", ":weight_lifter_tone3:"],
            category: "activity"
        },
        ":person_lifting_weights_tone4:": {
            uc_base: "1f3cb-1f3fe",
            uc_full: "1f3cb-fe0f-1f3fe",
            shortnames: [":lifter_tone4:", ":weight_lifter_tone4:"],
            category: "activity"
        },
        ":person_lifting_weights_tone5:": {
            uc_base: "1f3cb-1f3ff",
            uc_full: "1f3cb-fe0f-1f3ff",
            shortnames: [":lifter_tone5:", ":weight_lifter_tone5:"],
            category: "activity"
        },
        ":person_mountain_biking_tone1:": {
            uc_base: "1f6b5-1f3fb",
            uc_full: "1f6b5-1f3fb",
            shortnames: [":mountain_bicyclist_tone1:"],
            category: "activity"
        },
        ":person_mountain_biking_tone2:": {
            uc_base: "1f6b5-1f3fc",
            uc_full: "1f6b5-1f3fc",
            shortnames: [":mountain_bicyclist_tone2:"],
            category: "activity"
        },
        ":person_mountain_biking_tone3:": {
            uc_base: "1f6b5-1f3fd",
            uc_full: "1f6b5-1f3fd",
            shortnames: [":mountain_bicyclist_tone3:"],
            category: "activity"
        },
        ":person_mountain_biking_tone4:": {
            uc_base: "1f6b5-1f3fe",
            uc_full: "1f6b5-1f3fe",
            shortnames: [":mountain_bicyclist_tone4:"],
            category: "activity"
        },
        ":person_mountain_biking_tone5:": {
            uc_base: "1f6b5-1f3ff",
            uc_full: "1f6b5-1f3ff",
            shortnames: [":mountain_bicyclist_tone5:"],
            category: "activity"
        },
        ":person_playing_handball_tone1:": {
            uc_base: "1f93e-1f3fb",
            uc_full: "1f93e-1f3fb",
            shortnames: [":handball_tone1:"],
            category: "activity"
        },
        ":person_playing_handball_tone2:": {
            uc_base: "1f93e-1f3fc",
            uc_full: "1f93e-1f3fc",
            shortnames: [":handball_tone2:"],
            category: "activity"
        },
        ":person_playing_handball_tone3:": {
            uc_base: "1f93e-1f3fd",
            uc_full: "1f93e-1f3fd",
            shortnames: [":handball_tone3:"],
            category: "activity"
        },
        ":person_playing_handball_tone4:": {
            uc_base: "1f93e-1f3fe",
            uc_full: "1f93e-1f3fe",
            shortnames: [":handball_tone4:"],
            category: "activity"
        },
        ":person_playing_handball_tone5:": {
            uc_base: "1f93e-1f3ff",
            uc_full: "1f93e-1f3ff",
            shortnames: [":handball_tone5:"],
            category: "activity"
        },
        ":person_playing_water_polo_tone1:": {
            uc_base: "1f93d-1f3fb",
            uc_full: "1f93d-1f3fb",
            shortnames: [":water_polo_tone1:"],
            category: "activity"
        },
        ":person_playing_water_polo_tone2:": {
            uc_base: "1f93d-1f3fc",
            uc_full: "1f93d-1f3fc",
            shortnames: [":water_polo_tone2:"],
            category: "activity"
        },
        ":person_playing_water_polo_tone3:": {
            uc_base: "1f93d-1f3fd",
            uc_full: "1f93d-1f3fd",
            shortnames: [":water_polo_tone3:"],
            category: "activity"
        },
        ":person_playing_water_polo_tone4:": {
            uc_base: "1f93d-1f3fe",
            uc_full: "1f93d-1f3fe",
            shortnames: [":water_polo_tone4:"],
            category: "activity"
        },
        ":person_playing_water_polo_tone5:": {
            uc_base: "1f93d-1f3ff",
            uc_full: "1f93d-1f3ff",
            shortnames: [":water_polo_tone5:"],
            category: "activity"
        },
        ":person_pouting_tone1:": {
            uc_base: "1f64e-1f3fb",
            uc_full: "1f64e-1f3fb",
            shortnames: [":person_with_pouting_face_tone1:"],
            category: "people"
        },
        ":person_pouting_tone2:": {
            uc_base: "1f64e-1f3fc",
            uc_full: "1f64e-1f3fc",
            shortnames: [":person_with_pouting_face_tone2:"],
            category: "people"
        },
        ":person_pouting_tone3:": {
            uc_base: "1f64e-1f3fd",
            uc_full: "1f64e-1f3fd",
            shortnames: [":person_with_pouting_face_tone3:"],
            category: "people"
        },
        ":person_pouting_tone4:": {
            uc_base: "1f64e-1f3fe",
            uc_full: "1f64e-1f3fe",
            shortnames: [":person_with_pouting_face_tone4:"],
            category: "people"
        },
        ":person_pouting_tone5:": {
            uc_base: "1f64e-1f3ff",
            uc_full: "1f64e-1f3ff",
            shortnames: [":person_with_pouting_face_tone5:"],
            category: "people"
        },
        ":person_raising_hand_tone1:": {
            uc_base: "1f64b-1f3fb",
            uc_full: "1f64b-1f3fb",
            shortnames: [":raising_hand_tone1:"],
            category: "people"
        },
        ":person_raising_hand_tone2:": {
            uc_base: "1f64b-1f3fc",
            uc_full: "1f64b-1f3fc",
            shortnames: [":raising_hand_tone2:"],
            category: "people"
        },
        ":person_raising_hand_tone3:": {
            uc_base: "1f64b-1f3fd",
            uc_full: "1f64b-1f3fd",
            shortnames: [":raising_hand_tone3:"],
            category: "people"
        },
        ":person_raising_hand_tone4:": {
            uc_base: "1f64b-1f3fe",
            uc_full: "1f64b-1f3fe",
            shortnames: [":raising_hand_tone4:"],
            category: "people"
        },
        ":person_raising_hand_tone5:": {
            uc_base: "1f64b-1f3ff",
            uc_full: "1f64b-1f3ff",
            shortnames: [":raising_hand_tone5:"],
            category: "people"
        },
        ":person_rowing_boat_tone1:": {
            uc_base: "1f6a3-1f3fb",
            uc_full: "1f6a3-1f3fb",
            shortnames: [":rowboat_tone1:"],
            category: "activity"
        },
        ":person_rowing_boat_tone2:": {
            uc_base: "1f6a3-1f3fc",
            uc_full: "1f6a3-1f3fc",
            shortnames: [":rowboat_tone2:"],
            category: "activity"
        },
        ":person_rowing_boat_tone3:": {
            uc_base: "1f6a3-1f3fd",
            uc_full: "1f6a3-1f3fd",
            shortnames: [":rowboat_tone3:"],
            category: "activity"
        },
        ":person_rowing_boat_tone4:": {
            uc_base: "1f6a3-1f3fe",
            uc_full: "1f6a3-1f3fe",
            shortnames: [":rowboat_tone4:"],
            category: "activity"
        },
        ":person_rowing_boat_tone5:": {
            uc_base: "1f6a3-1f3ff",
            uc_full: "1f6a3-1f3ff",
            shortnames: [":rowboat_tone5:"],
            category: "activity"
        },
        ":person_running_tone1:": {
            uc_base: "1f3c3-1f3fb",
            uc_full: "1f3c3-1f3fb",
            shortnames: [":runner_tone1:"],
            category: "people"
        },
        ":person_running_tone2:": {
            uc_base: "1f3c3-1f3fc",
            uc_full: "1f3c3-1f3fc",
            shortnames: [":runner_tone2:"],
            category: "people"
        },
        ":person_running_tone3:": {
            uc_base: "1f3c3-1f3fd",
            uc_full: "1f3c3-1f3fd",
            shortnames: [":runner_tone3:"],
            category: "people"
        },
        ":person_running_tone4:": {
            uc_base: "1f3c3-1f3fe",
            uc_full: "1f3c3-1f3fe",
            shortnames: [":runner_tone4:"],
            category: "people"
        },
        ":person_running_tone5:": {
            uc_base: "1f3c3-1f3ff",
            uc_full: "1f3c3-1f3ff",
            shortnames: [":runner_tone5:"],
            category: "people"
        },
        ":person_shrugging_tone1:": {
            uc_base: "1f937-1f3fb",
            uc_full: "1f937-1f3fb",
            shortnames: [":shrug_tone1:"],
            category: "people"
        },
        ":person_shrugging_tone2:": {
            uc_base: "1f937-1f3fc",
            uc_full: "1f937-1f3fc",
            shortnames: [":shrug_tone2:"],
            category: "people"
        },
        ":person_shrugging_tone3:": {
            uc_base: "1f937-1f3fd",
            uc_full: "1f937-1f3fd",
            shortnames: [":shrug_tone3:"],
            category: "people"
        },
        ":person_shrugging_tone4:": {
            uc_base: "1f937-1f3fe",
            uc_full: "1f937-1f3fe",
            shortnames: [":shrug_tone4:"],
            category: "people"
        },
        ":person_shrugging_tone5:": {
            uc_base: "1f937-1f3ff",
            uc_full: "1f937-1f3ff",
            shortnames: [":shrug_tone5:"],
            category: "people"
        },
        ":person_standing_tone1:": {
            uc_base: "1f9cd-1f3fb",
            uc_full: "1f9cd-1f3fb",
            shortnames: [":person_standing_light_skin_tone:"],
            category: "people"
        },
        ":person_standing_tone2:": {
            uc_base: "1f9cd-1f3fc",
            uc_full: "1f9cd-1f3fc",
            shortnames: [":person_standing_medium_light_skin_tone:"],
            category: "people"
        },
        ":person_standing_tone3:": {
            uc_base: "1f9cd-1f3fd",
            uc_full: "1f9cd-1f3fd",
            shortnames: [":person_standing_medium_skin_tone:"],
            category: "people"
        },
        ":person_standing_tone4:": {
            uc_base: "1f9cd-1f3fe",
            uc_full: "1f9cd-1f3fe",
            shortnames: [":person_standing_medium_dark_skin_tone:"],
            category: "people"
        },
        ":person_standing_tone5:": {
            uc_base: "1f9cd-1f3ff",
            uc_full: "1f9cd-1f3ff",
            shortnames: [":person_standing_dark_skin_tone:"],
            category: "people"
        },
        ":person_surfing_tone1:": {
            uc_base: "1f3c4-1f3fb",
            uc_full: "1f3c4-1f3fb",
            shortnames: [":surfer_tone1:"],
            category: "activity"
        },
        ":person_surfing_tone2:": {
            uc_base: "1f3c4-1f3fc",
            uc_full: "1f3c4-1f3fc",
            shortnames: [":surfer_tone2:"],
            category: "activity"
        },
        ":person_surfing_tone3:": {
            uc_base: "1f3c4-1f3fd",
            uc_full: "1f3c4-1f3fd",
            shortnames: [":surfer_tone3:"],
            category: "activity"
        },
        ":person_surfing_tone4:": {
            uc_base: "1f3c4-1f3fe",
            uc_full: "1f3c4-1f3fe",
            shortnames: [":surfer_tone4:"],
            category: "activity"
        },
        ":person_surfing_tone5:": {
            uc_base: "1f3c4-1f3ff",
            uc_full: "1f3c4-1f3ff",
            shortnames: [":surfer_tone5:"],
            category: "activity"
        },
        ":person_swimming_tone1:": {
            uc_base: "1f3ca-1f3fb",
            uc_full: "1f3ca-1f3fb",
            shortnames: [":swimmer_tone1:"],
            category: "activity"
        },
        ":person_swimming_tone2:": {
            uc_base: "1f3ca-1f3fc",
            uc_full: "1f3ca-1f3fc",
            shortnames: [":swimmer_tone2:"],
            category: "activity"
        },
        ":person_swimming_tone3:": {
            uc_base: "1f3ca-1f3fd",
            uc_full: "1f3ca-1f3fd",
            shortnames: [":swimmer_tone3:"],
            category: "activity"
        },
        ":person_swimming_tone4:": {
            uc_base: "1f3ca-1f3fe",
            uc_full: "1f3ca-1f3fe",
            shortnames: [":swimmer_tone4:"],
            category: "activity"
        },
        ":person_swimming_tone5:": {
            uc_base: "1f3ca-1f3ff",
            uc_full: "1f3ca-1f3ff",
            shortnames: [":swimmer_tone5:"],
            category: "activity"
        },
        ":person_tipping_hand_tone1:": {
            uc_base: "1f481-1f3fb",
            uc_full: "1f481-1f3fb",
            shortnames: [":information_desk_person_tone1:"],
            category: "people"
        },
        ":person_tipping_hand_tone2:": {
            uc_base: "1f481-1f3fc",
            uc_full: "1f481-1f3fc",
            shortnames: [":information_desk_person_tone2:"],
            category: "people"
        },
        ":person_tipping_hand_tone3:": {
            uc_base: "1f481-1f3fd",
            uc_full: "1f481-1f3fd",
            shortnames: [":information_desk_person_tone3:"],
            category: "people"
        },
        ":person_tipping_hand_tone4:": {
            uc_base: "1f481-1f3fe",
            uc_full: "1f481-1f3fe",
            shortnames: [":information_desk_person_tone4:"],
            category: "people"
        },
        ":person_tipping_hand_tone5:": {
            uc_base: "1f481-1f3ff",
            uc_full: "1f481-1f3ff",
            shortnames: [":information_desk_person_tone5:"],
            category: "people"
        },
        ":person_walking_tone1:": {
            uc_base: "1f6b6-1f3fb",
            uc_full: "1f6b6-1f3fb",
            shortnames: [":walking_tone1:"],
            category: "people"
        },
        ":person_walking_tone2:": {
            uc_base: "1f6b6-1f3fc",
            uc_full: "1f6b6-1f3fc",
            shortnames: [":walking_tone2:"],
            category: "people"
        },
        ":person_walking_tone3:": {
            uc_base: "1f6b6-1f3fd",
            uc_full: "1f6b6-1f3fd",
            shortnames: [":walking_tone3:"],
            category: "people"
        },
        ":person_walking_tone4:": {
            uc_base: "1f6b6-1f3fe",
            uc_full: "1f6b6-1f3fe",
            shortnames: [":walking_tone4:"],
            category: "people"
        },
        ":person_walking_tone5:": {
            uc_base: "1f6b6-1f3ff",
            uc_full: "1f6b6-1f3ff",
            shortnames: [":walking_tone5:"],
            category: "people"
        },
        ":person_wearing_turban_tone1:": {
            uc_base: "1f473-1f3fb",
            uc_full: "1f473-1f3fb",
            shortnames: [":man_with_turban_tone1:"],
            category: "people"
        },
        ":person_wearing_turban_tone2:": {
            uc_base: "1f473-1f3fc",
            uc_full: "1f473-1f3fc",
            shortnames: [":man_with_turban_tone2:"],
            category: "people"
        },
        ":person_wearing_turban_tone3:": {
            uc_base: "1f473-1f3fd",
            uc_full: "1f473-1f3fd",
            shortnames: [":man_with_turban_tone3:"],
            category: "people"
        },
        ":person_wearing_turban_tone4:": {
            uc_base: "1f473-1f3fe",
            uc_full: "1f473-1f3fe",
            shortnames: [":man_with_turban_tone4:"],
            category: "people"
        },
        ":person_wearing_turban_tone5:": {
            uc_base: "1f473-1f3ff",
            uc_full: "1f473-1f3ff",
            shortnames: [":man_with_turban_tone5:"],
            category: "people"
        },
        ":pinching_hand_tone1:": {
            uc_base: "1f90f-1f3fb",
            uc_full: "1f90f-1f3fb",
            shortnames: [":pinching_hand_light_skin_tone:"],
            category: "people"
        },
        ":pinching_hand_tone2:": {
            uc_base: "1f90f-1f3fc",
            uc_full: "1f90f-1f3fc",
            shortnames: [":pinching_hand_medium_light_skin_tone:"],
            category: "people"
        },
        ":pinching_hand_tone3:": {
            uc_base: "1f90f-1f3fd",
            uc_full: "1f90f-1f3fd",
            shortnames: [":pinching_hand_medium_skin_tone:"],
            category: "people"
        },
        ":pinching_hand_tone4:": {
            uc_base: "1f90f-1f3fe",
            uc_full: "1f90f-1f3fe",
            shortnames: [":pinching_hand_medium_dark_skin_tone:"],
            category: "people"
        },
        ":pinching_hand_tone5:": {
            uc_base: "1f90f-1f3ff",
            uc_full: "1f90f-1f3ff",
            shortnames: [":pinching_hand_dark_skin_tone:"],
            category: "people"
        },
        ":point_down_tone1:": {
            uc_base: "1f447-1f3fb",
            uc_full: "1f447-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":point_down_tone2:": {
            uc_base: "1f447-1f3fc",
            uc_full: "1f447-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":point_down_tone3:": {
            uc_base: "1f447-1f3fd",
            uc_full: "1f447-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":point_down_tone4:": {
            uc_base: "1f447-1f3fe",
            uc_full: "1f447-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":point_down_tone5:": {
            uc_base: "1f447-1f3ff",
            uc_full: "1f447-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":point_left_tone1:": {
            uc_base: "1f448-1f3fb",
            uc_full: "1f448-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":point_left_tone2:": {
            uc_base: "1f448-1f3fc",
            uc_full: "1f448-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":point_left_tone3:": {
            uc_base: "1f448-1f3fd",
            uc_full: "1f448-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":point_left_tone4:": {
            uc_base: "1f448-1f3fe",
            uc_full: "1f448-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":point_left_tone5:": {
            uc_base: "1f448-1f3ff",
            uc_full: "1f448-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":point_right_tone1:": {
            uc_base: "1f449-1f3fb",
            uc_full: "1f449-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":point_right_tone2:": {
            uc_base: "1f449-1f3fc",
            uc_full: "1f449-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":point_right_tone3:": {
            uc_base: "1f449-1f3fd",
            uc_full: "1f449-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":point_right_tone4:": {
            uc_base: "1f449-1f3fe",
            uc_full: "1f449-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":point_right_tone5:": {
            uc_base: "1f449-1f3ff",
            uc_full: "1f449-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":point_up_2_tone1:": {
            uc_base: "1f446-1f3fb",
            uc_full: "1f446-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":point_up_2_tone2:": {
            uc_base: "1f446-1f3fc",
            uc_full: "1f446-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":point_up_2_tone3:": {
            uc_base: "1f446-1f3fd",
            uc_full: "1f446-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":point_up_2_tone4:": {
            uc_base: "1f446-1f3fe",
            uc_full: "1f446-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":point_up_2_tone5:": {
            uc_base: "1f446-1f3ff",
            uc_full: "1f446-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":police_officer_tone1:": {
            uc_base: "1f46e-1f3fb",
            uc_full: "1f46e-1f3fb",
            shortnames: [":cop_tone1:"],
            category: "people"
        },
        ":police_officer_tone2:": {
            uc_base: "1f46e-1f3fc",
            uc_full: "1f46e-1f3fc",
            shortnames: [":cop_tone2:"],
            category: "people"
        },
        ":police_officer_tone3:": {
            uc_base: "1f46e-1f3fd",
            uc_full: "1f46e-1f3fd",
            shortnames: [":cop_tone3:"],
            category: "people"
        },
        ":police_officer_tone4:": {
            uc_base: "1f46e-1f3fe",
            uc_full: "1f46e-1f3fe",
            shortnames: [":cop_tone4:"],
            category: "people"
        },
        ":police_officer_tone5:": {
            uc_base: "1f46e-1f3ff",
            uc_full: "1f46e-1f3ff",
            shortnames: [":cop_tone5:"],
            category: "people"
        },
        ":pray_tone1:": {
            uc_base: "1f64f-1f3fb",
            uc_full: "1f64f-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":pray_tone2:": {
            uc_base: "1f64f-1f3fc",
            uc_full: "1f64f-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":pray_tone3:": {
            uc_base: "1f64f-1f3fd",
            uc_full: "1f64f-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":pray_tone4:": {
            uc_base: "1f64f-1f3fe",
            uc_full: "1f64f-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":pray_tone5:": {
            uc_base: "1f64f-1f3ff",
            uc_full: "1f64f-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":pregnant_woman_tone1:": {
            uc_base: "1f930-1f3fb",
            uc_full: "1f930-1f3fb",
            shortnames: [":expecting_woman_tone1:"],
            category: "people"
        },
        ":pregnant_woman_tone2:": {
            uc_base: "1f930-1f3fc",
            uc_full: "1f930-1f3fc",
            shortnames: [":expecting_woman_tone2:"],
            category: "people"
        },
        ":pregnant_woman_tone3:": {
            uc_base: "1f930-1f3fd",
            uc_full: "1f930-1f3fd",
            shortnames: [":expecting_woman_tone3:"],
            category: "people"
        },
        ":pregnant_woman_tone4:": {
            uc_base: "1f930-1f3fe",
            uc_full: "1f930-1f3fe",
            shortnames: [":expecting_woman_tone4:"],
            category: "people"
        },
        ":pregnant_woman_tone5:": {
            uc_base: "1f930-1f3ff",
            uc_full: "1f930-1f3ff",
            shortnames: [":expecting_woman_tone5:"],
            category: "people"
        },
        ":prince_tone1:": {
            uc_base: "1f934-1f3fb",
            uc_full: "1f934-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":prince_tone2:": {
            uc_base: "1f934-1f3fc",
            uc_full: "1f934-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":prince_tone3:": {
            uc_base: "1f934-1f3fd",
            uc_full: "1f934-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":prince_tone4:": {
            uc_base: "1f934-1f3fe",
            uc_full: "1f934-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":prince_tone5:": {
            uc_base: "1f934-1f3ff",
            uc_full: "1f934-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":princess_tone1:": {
            uc_base: "1f478-1f3fb",
            uc_full: "1f478-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":princess_tone2:": {
            uc_base: "1f478-1f3fc",
            uc_full: "1f478-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":princess_tone3:": {
            uc_base: "1f478-1f3fd",
            uc_full: "1f478-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":princess_tone4:": {
            uc_base: "1f478-1f3fe",
            uc_full: "1f478-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":princess_tone5:": {
            uc_base: "1f478-1f3ff",
            uc_full: "1f478-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":punch_tone1:": {
            uc_base: "1f44a-1f3fb",
            uc_full: "1f44a-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":punch_tone2:": {
            uc_base: "1f44a-1f3fc",
            uc_full: "1f44a-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":punch_tone3:": {
            uc_base: "1f44a-1f3fd",
            uc_full: "1f44a-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":punch_tone4:": {
            uc_base: "1f44a-1f3fe",
            uc_full: "1f44a-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":punch_tone5:": {
            uc_base: "1f44a-1f3ff",
            uc_full: "1f44a-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":rainbow_flag:": {
            uc_base: "1f3f3-1f308",
            uc_full: "1f3f3-fe0f-200d-1f308",
            shortnames: [":gay_pride_flag:"],
            category: "flags"
        },
        ":raised_back_of_hand_tone1:": {
            uc_base: "1f91a-1f3fb",
            uc_full: "1f91a-1f3fb",
            shortnames: [":back_of_hand_tone1:"],
            category: "people"
        },
        ":raised_back_of_hand_tone2:": {
            uc_base: "1f91a-1f3fc",
            uc_full: "1f91a-1f3fc",
            shortnames: [":back_of_hand_tone2:"],
            category: "people"
        },
        ":raised_back_of_hand_tone3:": {
            uc_base: "1f91a-1f3fd",
            uc_full: "1f91a-1f3fd",
            shortnames: [":back_of_hand_tone3:"],
            category: "people"
        },
        ":raised_back_of_hand_tone4:": {
            uc_base: "1f91a-1f3fe",
            uc_full: "1f91a-1f3fe",
            shortnames: [":back_of_hand_tone4:"],
            category: "people"
        },
        ":raised_back_of_hand_tone5:": {
            uc_base: "1f91a-1f3ff",
            uc_full: "1f91a-1f3ff",
            shortnames: [":back_of_hand_tone5:"],
            category: "people"
        },
        ":raised_hands_tone1:": {
            uc_base: "1f64c-1f3fb",
            uc_full: "1f64c-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":raised_hands_tone2:": {
            uc_base: "1f64c-1f3fc",
            uc_full: "1f64c-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":raised_hands_tone3:": {
            uc_base: "1f64c-1f3fd",
            uc_full: "1f64c-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":raised_hands_tone4:": {
            uc_base: "1f64c-1f3fe",
            uc_full: "1f64c-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":raised_hands_tone5:": {
            uc_base: "1f64c-1f3ff",
            uc_full: "1f64c-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":right_facing_fist_tone1:": {
            uc_base: "1f91c-1f3fb",
            uc_full: "1f91c-1f3fb",
            shortnames: [":right_fist_tone1:"],
            category: "people"
        },
        ":right_facing_fist_tone2:": {
            uc_base: "1f91c-1f3fc",
            uc_full: "1f91c-1f3fc",
            shortnames: [":right_fist_tone2:"],
            category: "people"
        },
        ":right_facing_fist_tone3:": {
            uc_base: "1f91c-1f3fd",
            uc_full: "1f91c-1f3fd",
            shortnames: [":right_fist_tone3:"],
            category: "people"
        },
        ":right_facing_fist_tone4:": {
            uc_base: "1f91c-1f3fe",
            uc_full: "1f91c-1f3fe",
            shortnames: [":right_fist_tone4:"],
            category: "people"
        },
        ":right_facing_fist_tone5:": {
            uc_base: "1f91c-1f3ff",
            uc_full: "1f91c-1f3ff",
            shortnames: [":right_fist_tone5:"],
            category: "people"
        },
        ":santa_tone1:": {
            uc_base: "1f385-1f3fb",
            uc_full: "1f385-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":santa_tone2:": {
            uc_base: "1f385-1f3fc",
            uc_full: "1f385-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":santa_tone3:": {
            uc_base: "1f385-1f3fd",
            uc_full: "1f385-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":santa_tone4:": {
            uc_base: "1f385-1f3fe",
            uc_full: "1f385-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":santa_tone5:": {
            uc_base: "1f385-1f3ff",
            uc_full: "1f385-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":selfie_tone1:": {
            uc_base: "1f933-1f3fb",
            uc_full: "1f933-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":selfie_tone2:": {
            uc_base: "1f933-1f3fc",
            uc_full: "1f933-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":selfie_tone3:": {
            uc_base: "1f933-1f3fd",
            uc_full: "1f933-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":selfie_tone4:": {
            uc_base: "1f933-1f3fe",
            uc_full: "1f933-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":selfie_tone5:": {
            uc_base: "1f933-1f3ff",
            uc_full: "1f933-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":service_dog:": {
            uc_base: "1f415-1f9ba",
            uc_full: "1f415-200d-1f9ba",
            shortnames: [],
            category: "nature"
        },
        ":snowboarder_tone1:": {
            uc_base: "1f3c2-1f3fb",
            uc_full: "1f3c2-1f3fb",
            shortnames: [":snowboarder_light_skin_tone:"],
            category: "activity"
        },
        ":snowboarder_tone2:": {
            uc_base: "1f3c2-1f3fc",
            uc_full: "1f3c2-1f3fc",
            shortnames: [":snowboarder_medium_light_skin_tone:"],
            category: "activity"
        },
        ":snowboarder_tone3:": {
            uc_base: "1f3c2-1f3fd",
            uc_full: "1f3c2-1f3fd",
            shortnames: [":snowboarder_medium_skin_tone:"],
            category: "activity"
        },
        ":snowboarder_tone4:": {
            uc_base: "1f3c2-1f3fe",
            uc_full: "1f3c2-1f3fe",
            shortnames: [":snowboarder_medium_dark_skin_tone:"],
            category: "activity"
        },
        ":snowboarder_tone5:": {
            uc_base: "1f3c2-1f3ff",
            uc_full: "1f3c2-1f3ff",
            shortnames: [":snowboarder_dark_skin_tone:"],
            category: "activity"
        },
        ":superhero_tone1:": {
            uc_base: "1f9b8-1f3fb",
            uc_full: "1f9b8-1f3fb",
            shortnames: [":superhero_light_skin_tone:"],
            category: "people"
        },
        ":superhero_tone2:": {
            uc_base: "1f9b8-1f3fc",
            uc_full: "1f9b8-1f3fc",
            shortnames: [":superhero_medium_light_skin_tone:"],
            category: "people"
        },
        ":superhero_tone3:": {
            uc_base: "1f9b8-1f3fd",
            uc_full: "1f9b8-1f3fd",
            shortnames: [":superhero_medium_skin_tone:"],
            category: "people"
        },
        ":superhero_tone4:": {
            uc_base: "1f9b8-1f3fe",
            uc_full: "1f9b8-1f3fe",
            shortnames: [":superhero_medium_dark_skin_tone:"],
            category: "people"
        },
        ":superhero_tone5:": {
            uc_base: "1f9b8-1f3ff",
            uc_full: "1f9b8-1f3ff",
            shortnames: [":superhero_dark_skin_tone:"],
            category: "people"
        },
        ":supervillain_tone1:": {
            uc_base: "1f9b9-1f3fb",
            uc_full: "1f9b9-1f3fb",
            shortnames: [":supervillain_light_skin_tone:"],
            category: "people"
        },
        ":supervillain_tone2:": {
            uc_base: "1f9b9-1f3fc",
            uc_full: "1f9b9-1f3fc",
            shortnames: [":supervillain_medium_light_skin_tone:"],
            category: "people"
        },
        ":supervillain_tone3:": {
            uc_base: "1f9b9-1f3fd",
            uc_full: "1f9b9-1f3fd",
            shortnames: [":supervillain_medium_skin_tone:"],
            category: "people"
        },
        ":supervillain_tone4:": {
            uc_base: "1f9b9-1f3fe",
            uc_full: "1f9b9-1f3fe",
            shortnames: [":supervillain_medium_dark_skin_tone:"],
            category: "people"
        },
        ":supervillain_tone5:": {
            uc_base: "1f9b9-1f3ff",
            uc_full: "1f9b9-1f3ff",
            shortnames: [":supervillain_dark_skin_tone:"],
            category: "people"
        },
        ":thumbsdown_tone1:": {
            uc_base: "1f44e-1f3fb",
            uc_full: "1f44e-1f3fb",
            shortnames: [":-1_tone1:", ":thumbdown_tone1:"],
            category: "people"
        },
        ":thumbsdown_tone2:": {
            uc_base: "1f44e-1f3fc",
            uc_full: "1f44e-1f3fc",
            shortnames: [":-1_tone2:", ":thumbdown_tone2:"],
            category: "people"
        },
        ":thumbsdown_tone3:": {
            uc_base: "1f44e-1f3fd",
            uc_full: "1f44e-1f3fd",
            shortnames: [":-1_tone3:", ":thumbdown_tone3:"],
            category: "people"
        },
        ":thumbsdown_tone4:": {
            uc_base: "1f44e-1f3fe",
            uc_full: "1f44e-1f3fe",
            shortnames: [":-1_tone4:", ":thumbdown_tone4:"],
            category: "people"
        },
        ":thumbsdown_tone5:": {
            uc_base: "1f44e-1f3ff",
            uc_full: "1f44e-1f3ff",
            shortnames: [":-1_tone5:", ":thumbdown_tone5:"],
            category: "people"
        },
        ":thumbsup_tone1:": {
            uc_base: "1f44d-1f3fb",
            uc_full: "1f44d-1f3fb",
            shortnames: [":+1_tone1:", ":thumbup_tone1:"],
            category: "people"
        },
        ":thumbsup_tone2:": {
            uc_base: "1f44d-1f3fc",
            uc_full: "1f44d-1f3fc",
            shortnames: [":+1_tone2:", ":thumbup_tone2:"],
            category: "people"
        },
        ":thumbsup_tone3:": {
            uc_base: "1f44d-1f3fd",
            uc_full: "1f44d-1f3fd",
            shortnames: [":+1_tone3:", ":thumbup_tone3:"],
            category: "people"
        },
        ":thumbsup_tone4:": {
            uc_base: "1f44d-1f3fe",
            uc_full: "1f44d-1f3fe",
            shortnames: [":+1_tone4:", ":thumbup_tone4:"],
            category: "people"
        },
        ":thumbsup_tone5:": {
            uc_base: "1f44d-1f3ff",
            uc_full: "1f44d-1f3ff",
            shortnames: [":+1_tone5:", ":thumbup_tone5:"],
            category: "people"
        },
        ":united_nations:": {
            uc_base: "1f1fa-1f1f3",
            uc_full: "1f1fa-1f1f3",
            shortnames: [],
            category: "flags"
        },
        ":vampire_tone1:": {
            uc_base: "1f9db-1f3fb",
            uc_full: "1f9db-1f3fb",
            shortnames: [":vampire_light_skin_tone:"],
            category: "people"
        },
        ":vampire_tone2:": {
            uc_base: "1f9db-1f3fc",
            uc_full: "1f9db-1f3fc",
            shortnames: [":vampire_medium_light_skin_tone:"],
            category: "people"
        },
        ":vampire_tone3:": {
            uc_base: "1f9db-1f3fd",
            uc_full: "1f9db-1f3fd",
            shortnames: [":vampire_medium_skin_tone:"],
            category: "people"
        },
        ":vampire_tone4:": {
            uc_base: "1f9db-1f3fe",
            uc_full: "1f9db-1f3fe",
            shortnames: [":vampire_medium_dark_skin_tone:"],
            category: "people"
        },
        ":vampire_tone5:": {
            uc_base: "1f9db-1f3ff",
            uc_full: "1f9db-1f3ff",
            shortnames: [":vampire_dark_skin_tone:"],
            category: "people"
        },
        ":vulcan_tone1:": {
            uc_base: "1f596-1f3fb",
            uc_full: "1f596-1f3fb",
            shortnames: [":raised_hand_with_part_between_middle_and_ring_fingers_tone1:"],
            category: "people"
        },
        ":vulcan_tone2:": {
            uc_base: "1f596-1f3fc",
            uc_full: "1f596-1f3fc",
            shortnames: [":raised_hand_with_part_between_middle_and_ring_fingers_tone2:"],
            category: "people"
        },
        ":vulcan_tone3:": {
            uc_base: "1f596-1f3fd",
            uc_full: "1f596-1f3fd",
            shortnames: [":raised_hand_with_part_between_middle_and_ring_fingers_tone3:"],
            category: "people"
        },
        ":vulcan_tone4:": {
            uc_base: "1f596-1f3fe",
            uc_full: "1f596-1f3fe",
            shortnames: [":raised_hand_with_part_between_middle_and_ring_fingers_tone4:"],
            category: "people"
        },
        ":vulcan_tone5:": {
            uc_base: "1f596-1f3ff",
            uc_full: "1f596-1f3ff",
            shortnames: [":raised_hand_with_part_between_middle_and_ring_fingers_tone5:"],
            category: "people"
        },
        ":wave_tone1:": {
            uc_base: "1f44b-1f3fb",
            uc_full: "1f44b-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":wave_tone2:": {
            uc_base: "1f44b-1f3fc",
            uc_full: "1f44b-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":wave_tone3:": {
            uc_base: "1f44b-1f3fd",
            uc_full: "1f44b-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":wave_tone4:": {
            uc_base: "1f44b-1f3fe",
            uc_full: "1f44b-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":wave_tone5:": {
            uc_base: "1f44b-1f3ff",
            uc_full: "1f44b-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone1:": {
            uc_base: "1f46b-1f3fb",
            uc_full: "1f46b-1f3fb",
            shortnames: [":woman_and_man_holding_hands_light_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone2:": {
            uc_base: "1f46b-1f3fc",
            uc_full: "1f46b-1f3fc",
            shortnames: [":woman_and_man_holding_hands_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone3:": {
            uc_base: "1f46b-1f3fd",
            uc_full: "1f46b-1f3fd",
            shortnames: [":woman_and_man_holding_hands_medium_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone4:": {
            uc_base: "1f46b-1f3fe",
            uc_full: "1f46b-1f3fe",
            shortnames: [":woman_and_man_holding_hands_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_and_man_holding_hands_tone5:": {
            uc_base: "1f46b-1f3ff",
            uc_full: "1f46b-1f3ff",
            shortnames: [":woman_and_man_holding_hands_dark_skin_tone:"],
            category: "people"
        },
        ":woman_artist:": {
            uc_base: "1f469-1f3a8",
            uc_full: "1f469-200d-1f3a8",
            shortnames: [],
            category: "people"
        },
        ":woman_astronaut:": {
            uc_base: "1f469-1f680",
            uc_full: "1f469-200d-1f680",
            shortnames: [],
            category: "people"
        },
        ":woman_bald:": {
            uc_base: "1f469-1f9b2",
            uc_full: "1f469-200d-1f9b2",
            shortnames: [],
            category: "people"
        },
        ":woman_cook:": {
            uc_base: "1f469-1f373",
            uc_full: "1f469-200d-1f373",
            shortnames: [],
            category: "people"
        },
        ":woman_curly_haired:": {
            uc_base: "1f469-1f9b1",
            uc_full: "1f469-200d-1f9b1",
            shortnames: [],
            category: "people"
        },
        ":woman_factory_worker:": {
            uc_base: "1f469-1f3ed",
            uc_full: "1f469-200d-1f3ed",
            shortnames: [],
            category: "people"
        },
        ":woman_farmer:": {
            uc_base: "1f469-1f33e",
            uc_full: "1f469-200d-1f33e",
            shortnames: [],
            category: "people"
        },
        ":woman_firefighter:": {
            uc_base: "1f469-1f692",
            uc_full: "1f469-200d-1f692",
            shortnames: [],
            category: "people"
        },
        ":woman_in_manual_wheelchair:": {
            uc_base: "1f469-1f9bd",
            uc_full: "1f469-200d-1f9bd",
            shortnames: [],
            category: "people"
        },
        ":woman_in_motorized_wheelchair:": {
            uc_base: "1f469-1f9bc",
            uc_full: "1f469-200d-1f9bc",
            shortnames: [],
            category: "people"
        },
        ":woman_mechanic:": {
            uc_base: "1f469-1f527",
            uc_full: "1f469-200d-1f527",
            shortnames: [],
            category: "people"
        },
        ":woman_office_worker:": {
            uc_base: "1f469-1f4bc",
            uc_full: "1f469-200d-1f4bc",
            shortnames: [],
            category: "people"
        },
        ":woman_red_haired:": {
            uc_base: "1f469-1f9b0",
            uc_full: "1f469-200d-1f9b0",
            shortnames: [],
            category: "people"
        },
        ":woman_scientist:": {
            uc_base: "1f469-1f52c",
            uc_full: "1f469-200d-1f52c",
            shortnames: [],
            category: "people"
        },
        ":woman_singer:": {
            uc_base: "1f469-1f3a4",
            uc_full: "1f469-200d-1f3a4",
            shortnames: [],
            category: "people"
        },
        ":woman_student:": {
            uc_base: "1f469-1f393",
            uc_full: "1f469-200d-1f393",
            shortnames: [],
            category: "people"
        },
        ":woman_teacher:": {
            uc_base: "1f469-1f3eb",
            uc_full: "1f469-200d-1f3eb",
            shortnames: [],
            category: "people"
        },
        ":woman_technologist:": {
            uc_base: "1f469-1f4bb",
            uc_full: "1f469-200d-1f4bb",
            shortnames: [],
            category: "people"
        },
        ":woman_tone1:": {
            uc_base: "1f469-1f3fb",
            uc_full: "1f469-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":woman_tone2:": {
            uc_base: "1f469-1f3fc",
            uc_full: "1f469-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":woman_tone3:": {
            uc_base: "1f469-1f3fd",
            uc_full: "1f469-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":woman_tone4:": {
            uc_base: "1f469-1f3fe",
            uc_full: "1f469-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":woman_tone5:": {
            uc_base: "1f469-1f3ff",
            uc_full: "1f469-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":woman_white_haired:": {
            uc_base: "1f469-1f9b3",
            uc_full: "1f469-200d-1f9b3",
            shortnames: [],
            category: "people"
        },
        ":woman_with_headscarf_tone1:": {
            uc_base: "1f9d5-1f3fb",
            uc_full: "1f9d5-1f3fb",
            shortnames: [":woman_with_headscarf_light_skin_tone:"],
            category: "people"
        },
        ":woman_with_headscarf_tone2:": {
            uc_base: "1f9d5-1f3fc",
            uc_full: "1f9d5-1f3fc",
            shortnames: [":woman_with_headscarf_medium_light_skin_tone:"],
            category: "people"
        },
        ":woman_with_headscarf_tone3:": {
            uc_base: "1f9d5-1f3fd",
            uc_full: "1f9d5-1f3fd",
            shortnames: [":woman_with_headscarf_medium_skin_tone:"],
            category: "people"
        },
        ":woman_with_headscarf_tone4:": {
            uc_base: "1f9d5-1f3fe",
            uc_full: "1f9d5-1f3fe",
            shortnames: [":woman_with_headscarf_medium_dark_skin_tone:"],
            category: "people"
        },
        ":woman_with_headscarf_tone5:": {
            uc_base: "1f9d5-1f3ff",
            uc_full: "1f9d5-1f3ff",
            shortnames: [":woman_with_headscarf_dark_skin_tone:"],
            category: "people"
        },
        ":woman_with_probing_cane:": {
            uc_base: "1f469-1f9af",
            uc_full: "1f469-200d-1f9af",
            shortnames: [],
            category: "people"
        },
        ":women_holding_hands_tone1:": {
            uc_base: "1f46d-1f3fb",
            uc_full: "1f46d-1f3fb",
            shortnames: [":women_holding_hands_light_skin_tone:"],
            category: "people"
        },
        ":women_holding_hands_tone2:": {
            uc_base: "1f46d-1f3fc",
            uc_full: "1f46d-1f3fc",
            shortnames: [":women_holding_hands_medium_light_skin_tone:"],
            category: "people"
        },
        ":women_holding_hands_tone3:": {
            uc_base: "1f46d-1f3fd",
            uc_full: "1f46d-1f3fd",
            shortnames: [":women_holding_hands_medium_skin_tone:"],
            category: "people"
        },
        ":women_holding_hands_tone4:": {
            uc_base: "1f46d-1f3fe",
            uc_full: "1f46d-1f3fe",
            shortnames: [":women_holding_hands_medium_dark_skin_tone:"],
            category: "people"
        },
        ":women_holding_hands_tone5:": {
            uc_base: "1f46d-1f3ff",
            uc_full: "1f46d-1f3ff",
            shortnames: [":women_holding_hands_dark_skin_tone:"],
            category: "people"
        },
        ":blond-haired_man:": {
            uc_base: "1f471-2642",
            uc_full: "1f471-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":blond-haired_woman:": {
            uc_base: "1f471-2640",
            uc_full: "1f471-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":deaf_man:": {
            uc_base: "1f9cf-2642",
            uc_full: "1f9cf-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":deaf_woman:": {
            uc_base: "1f9cf-2640",
            uc_full: "1f9cf-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":fist_tone1:": {
            uc_base: "270a-1f3fb",
            uc_full: "270a-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":fist_tone2:": {
            uc_base: "270a-1f3fc",
            uc_full: "270a-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":fist_tone3:": {
            uc_base: "270a-1f3fd",
            uc_full: "270a-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":fist_tone4:": {
            uc_base: "270a-1f3fe",
            uc_full: "270a-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":fist_tone5:": {
            uc_base: "270a-1f3ff",
            uc_full: "270a-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":man_biking:": {
            uc_base: "1f6b4-2642",
            uc_full: "1f6b4-200d-2642-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":man_bowing:": {
            uc_base: "1f647-2642",
            uc_full: "1f647-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_cartwheeling:": {
            uc_base: "1f938-2642",
            uc_full: "1f938-200d-2642-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":man_climbing:": {
            uc_base: "1f9d7-2642",
            uc_full: "1f9d7-200d-2642-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":man_construction_worker:": {
            uc_base: "1f477-2642",
            uc_full: "1f477-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_detective:": {
            uc_base: "1f575-2642",
            uc_full: "1f575-fe0f-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_elf:": {
            uc_base: "1f9dd-2642",
            uc_full: "1f9dd-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_facepalming:": {
            uc_base: "1f926-2642",
            uc_full: "1f926-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_fairy:": {
            uc_base: "1f9da-2642",
            uc_full: "1f9da-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_frowning:": {
            uc_base: "1f64d-2642",
            uc_full: "1f64d-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_genie:": {
            uc_base: "1f9de-2642",
            uc_full: "1f9de-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_gesturing_no:": {
            uc_base: "1f645-2642",
            uc_full: "1f645-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_gesturing_ok:": {
            uc_base: "1f646-2642",
            uc_full: "1f646-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_getting_face_massage:": {
            uc_base: "1f486-2642",
            uc_full: "1f486-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_getting_haircut:": {
            uc_base: "1f487-2642",
            uc_full: "1f487-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_golfing:": {
            uc_base: "1f3cc-2642",
            uc_full: "1f3cc-fe0f-200d-2642-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":man_guard:": {
            uc_base: "1f482-2642",
            uc_full: "1f482-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_health_worker:": {
            uc_base: "1f468-2695",
            uc_full: "1f468-200d-2695-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_in_lotus_position:": {
            uc_base: "1f9d8-2642",
            uc_full: "1f9d8-200d-2642-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":man_in_steamy_room:": {
            uc_base: "1f9d6-2642",
            uc_full: "1f9d6-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_judge:": {
            uc_base: "1f468-2696",
            uc_full: "1f468-200d-2696-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_juggling:": {
            uc_base: "1f939-2642",
            uc_full: "1f939-200d-2642-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":man_kneeling:": {
            uc_base: "1f9ce-2642",
            uc_full: "1f9ce-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_lifting_weights:": {
            uc_base: "1f3cb-2642",
            uc_full: "1f3cb-fe0f-200d-2642-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":man_mage:": {
            uc_base: "1f9d9-2642",
            uc_full: "1f9d9-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_mountain_biking:": {
            uc_base: "1f6b5-2642",
            uc_full: "1f6b5-200d-2642-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":man_pilot:": {
            uc_base: "1f468-2708",
            uc_full: "1f468-200d-2708-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_playing_handball:": {
            uc_base: "1f93e-2642",
            uc_full: "1f93e-200d-2642-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":man_playing_water_polo:": {
            uc_base: "1f93d-2642",
            uc_full: "1f93d-200d-2642-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":man_police_officer:": {
            uc_base: "1f46e-2642",
            uc_full: "1f46e-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_pouting:": {
            uc_base: "1f64e-2642",
            uc_full: "1f64e-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_raising_hand:": {
            uc_base: "1f64b-2642",
            uc_full: "1f64b-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_rowing_boat:": {
            uc_base: "1f6a3-2642",
            uc_full: "1f6a3-200d-2642-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":man_running:": {
            uc_base: "1f3c3-2642",
            uc_full: "1f3c3-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_shrugging:": {
            uc_base: "1f937-2642",
            uc_full: "1f937-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_standing:": {
            uc_base: "1f9cd-2642",
            uc_full: "1f9cd-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_superhero:": {
            uc_base: "1f9b8-2642",
            uc_full: "1f9b8-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_supervillain:": {
            uc_base: "1f9b9-2642",
            uc_full: "1f9b9-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_surfing:": {
            uc_base: "1f3c4-2642",
            uc_full: "1f3c4-200d-2642-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":man_swimming:": {
            uc_base: "1f3ca-2642",
            uc_full: "1f3ca-200d-2642-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":man_tipping_hand:": {
            uc_base: "1f481-2642",
            uc_full: "1f481-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_vampire:": {
            uc_base: "1f9db-2642",
            uc_full: "1f9db-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_walking:": {
            uc_base: "1f6b6-2642",
            uc_full: "1f6b6-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_wearing_turban:": {
            uc_base: "1f473-2642",
            uc_full: "1f473-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":man_zombie:": {
            uc_base: "1f9df-2642",
            uc_full: "1f9df-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":men_with_bunny_ears_partying:": {
            uc_base: "1f46f-2642",
            uc_full: "1f46f-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":men_wrestling:": {
            uc_base: "1f93c-2642",
            uc_full: "1f93c-2642-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":mermaid:": {
            uc_base: "1f9dc-2640",
            uc_full: "1f9dc-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":merman:": {
            uc_base: "1f9dc-2642",
            uc_full: "1f9dc-200d-2642-fe0f",
            shortnames: [],
            category: "people"
        },
        ":person_bouncing_ball_tone1:": {
            uc_base: "26f9-1f3fb",
            uc_full: "26f9-fe0f-1f3fb",
            shortnames: [":basketball_player_tone1:", ":person_with_ball_tone1:"],
            category: "activity"
        },
        ":person_bouncing_ball_tone2:": {
            uc_base: "26f9-1f3fc",
            uc_full: "26f9-fe0f-1f3fc",
            shortnames: [":basketball_player_tone2:", ":person_with_ball_tone2:"],
            category: "activity"
        },
        ":person_bouncing_ball_tone3:": {
            uc_base: "26f9-1f3fd",
            uc_full: "26f9-fe0f-1f3fd",
            shortnames: [":basketball_player_tone3:", ":person_with_ball_tone3:"],
            category: "activity"
        },
        ":person_bouncing_ball_tone4:": {
            uc_base: "26f9-1f3fe",
            uc_full: "26f9-fe0f-1f3fe",
            shortnames: [":basketball_player_tone4:", ":person_with_ball_tone4:"],
            category: "activity"
        },
        ":person_bouncing_ball_tone5:": {
            uc_base: "26f9-1f3ff",
            uc_full: "26f9-fe0f-1f3ff",
            shortnames: [":basketball_player_tone5:", ":person_with_ball_tone5:"],
            category: "activity"
        },
        ":pirate_flag:": {
            uc_base: "1f3f4-2620",
            uc_full: "1f3f4-200d-2620-fe0f",
            shortnames: [],
            category: "flags"
        },
        ":point_up_tone1:": {
            uc_base: "261d-1f3fb",
            uc_full: "261d-fe0f-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":point_up_tone2:": {
            uc_base: "261d-1f3fc",
            uc_full: "261d-fe0f-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":point_up_tone3:": {
            uc_base: "261d-1f3fd",
            uc_full: "261d-fe0f-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":point_up_tone4:": {
            uc_base: "261d-1f3fe",
            uc_full: "261d-fe0f-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":point_up_tone5:": {
            uc_base: "261d-1f3ff",
            uc_full: "261d-fe0f-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":raised_hand_tone1:": {
            uc_base: "270b-1f3fb",
            uc_full: "270b-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":raised_hand_tone2:": {
            uc_base: "270b-1f3fc",
            uc_full: "270b-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":raised_hand_tone3:": {
            uc_base: "270b-1f3fd",
            uc_full: "270b-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":raised_hand_tone4:": {
            uc_base: "270b-1f3fe",
            uc_full: "270b-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":raised_hand_tone5:": {
            uc_base: "270b-1f3ff",
            uc_full: "270b-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":v_tone1:": {
            uc_base: "270c-1f3fb",
            uc_full: "270c-fe0f-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":v_tone2:": {
            uc_base: "270c-1f3fc",
            uc_full: "270c-fe0f-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":v_tone3:": {
            uc_base: "270c-1f3fd",
            uc_full: "270c-fe0f-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":v_tone4:": {
            uc_base: "270c-1f3fe",
            uc_full: "270c-fe0f-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":v_tone5:": {
            uc_base: "270c-1f3ff",
            uc_full: "270c-fe0f-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":woman_biking:": {
            uc_base: "1f6b4-2640",
            uc_full: "1f6b4-200d-2640-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":woman_bowing:": {
            uc_base: "1f647-2640",
            uc_full: "1f647-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_cartwheeling:": {
            uc_base: "1f938-2640",
            uc_full: "1f938-200d-2640-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":woman_climbing:": {
            uc_base: "1f9d7-2640",
            uc_full: "1f9d7-200d-2640-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":woman_construction_worker:": {
            uc_base: "1f477-2640",
            uc_full: "1f477-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_detective:": {
            uc_base: "1f575-2640",
            uc_full: "1f575-fe0f-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_elf:": {
            uc_base: "1f9dd-2640",
            uc_full: "1f9dd-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_facepalming:": {
            uc_base: "1f926-2640",
            uc_full: "1f926-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_fairy:": {
            uc_base: "1f9da-2640",
            uc_full: "1f9da-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_frowning:": {
            uc_base: "1f64d-2640",
            uc_full: "1f64d-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_genie:": {
            uc_base: "1f9de-2640",
            uc_full: "1f9de-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_gesturing_no:": {
            uc_base: "1f645-2640",
            uc_full: "1f645-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_gesturing_ok:": {
            uc_base: "1f646-2640",
            uc_full: "1f646-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_getting_face_massage:": {
            uc_base: "1f486-2640",
            uc_full: "1f486-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_getting_haircut:": {
            uc_base: "1f487-2640",
            uc_full: "1f487-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_golfing:": {
            uc_base: "1f3cc-2640",
            uc_full: "1f3cc-fe0f-200d-2640-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":woman_guard:": {
            uc_base: "1f482-2640",
            uc_full: "1f482-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_health_worker:": {
            uc_base: "1f469-2695",
            uc_full: "1f469-200d-2695-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_in_lotus_position:": {
            uc_base: "1f9d8-2640",
            uc_full: "1f9d8-200d-2640-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":woman_in_steamy_room:": {
            uc_base: "1f9d6-2640",
            uc_full: "1f9d6-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_judge:": {
            uc_base: "1f469-2696",
            uc_full: "1f469-200d-2696-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_juggling:": {
            uc_base: "1f939-2640",
            uc_full: "1f939-200d-2640-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":woman_kneeling:": {
            uc_base: "1f9ce-2640",
            uc_full: "1f9ce-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_lifting_weights:": {
            uc_base: "1f3cb-2640",
            uc_full: "1f3cb-fe0f-200d-2640-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":woman_mage:": {
            uc_base: "1f9d9-2640",
            uc_full: "1f9d9-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_mountain_biking:": {
            uc_base: "1f6b5-2640",
            uc_full: "1f6b5-200d-2640-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":woman_pilot:": {
            uc_base: "1f469-2708",
            uc_full: "1f469-200d-2708-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_playing_handball:": {
            uc_base: "1f93e-2640",
            uc_full: "1f93e-200d-2640-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":woman_playing_water_polo:": {
            uc_base: "1f93d-2640",
            uc_full: "1f93d-200d-2640-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":woman_police_officer:": {
            uc_base: "1f46e-2640",
            uc_full: "1f46e-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_pouting:": {
            uc_base: "1f64e-2640",
            uc_full: "1f64e-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_raising_hand:": {
            uc_base: "1f64b-2640",
            uc_full: "1f64b-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_rowing_boat:": {
            uc_base: "1f6a3-2640",
            uc_full: "1f6a3-200d-2640-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":woman_running:": {
            uc_base: "1f3c3-2640",
            uc_full: "1f3c3-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_shrugging:": {
            uc_base: "1f937-2640",
            uc_full: "1f937-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_standing:": {
            uc_base: "1f9cd-2640",
            uc_full: "1f9cd-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_superhero:": {
            uc_base: "1f9b8-2640",
            uc_full: "1f9b8-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_supervillain:": {
            uc_base: "1f9b9-2640",
            uc_full: "1f9b9-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_surfing:": {
            uc_base: "1f3c4-2640",
            uc_full: "1f3c4-200d-2640-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":woman_swimming:": {
            uc_base: "1f3ca-2640",
            uc_full: "1f3ca-200d-2640-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":woman_tipping_hand:": {
            uc_base: "1f481-2640",
            uc_full: "1f481-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_vampire:": {
            uc_base: "1f9db-2640",
            uc_full: "1f9db-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_walking:": {
            uc_base: "1f6b6-2640",
            uc_full: "1f6b6-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_wearing_turban:": {
            uc_base: "1f473-2640",
            uc_full: "1f473-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":woman_zombie:": {
            uc_base: "1f9df-2640",
            uc_full: "1f9df-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":women_with_bunny_ears_partying:": {
            uc_base: "1f46f-2640",
            uc_full: "1f46f-200d-2640-fe0f",
            shortnames: [],
            category: "people"
        },
        ":women_wrestling:": {
            uc_base: "1f93c-2640",
            uc_full: "1f93c-2640-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":writing_hand_tone1:": {
            uc_base: "270d-1f3fb",
            uc_full: "270d-fe0f-1f3fb",
            shortnames: [],
            category: "people"
        },
        ":writing_hand_tone2:": {
            uc_base: "270d-1f3fc",
            uc_full: "270d-fe0f-1f3fc",
            shortnames: [],
            category: "people"
        },
        ":writing_hand_tone3:": {
            uc_base: "270d-1f3fd",
            uc_full: "270d-fe0f-1f3fd",
            shortnames: [],
            category: "people"
        },
        ":writing_hand_tone4:": {
            uc_base: "270d-1f3fe",
            uc_full: "270d-fe0f-1f3fe",
            shortnames: [],
            category: "people"
        },
        ":writing_hand_tone5:": {
            uc_base: "270d-1f3ff",
            uc_full: "270d-fe0f-1f3ff",
            shortnames: [],
            category: "people"
        },
        ":asterisk:": {
            uc_base: "002a-20e3",
            uc_full: "002a-fe0f-20e3",
            shortnames: [":keycap_asterisk:"],
            category: "symbols"
        },
        ":eight:": {
            uc_base: "0038-20e3",
            uc_full: "0038-fe0f-20e3",
            shortnames: [],
            category: "symbols"
        },
        ":five:": {
            uc_base: "0035-20e3",
            uc_full: "0035-fe0f-20e3",
            shortnames: [],
            category: "symbols"
        },
        ":four:": {
            uc_base: "0034-20e3",
            uc_full: "0034-fe0f-20e3",
            shortnames: [],
            category: "symbols"
        },
        ":hash:": {
            uc_base: "0023-20e3",
            uc_full: "0023-fe0f-20e3",
            shortnames: [],
            category: "symbols"
        },
        ":man_bouncing_ball:": {
            uc_base: "26f9-2642",
            uc_full: "26f9-fe0f-200d-2642-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":nine:": {
            uc_base: "0039-20e3",
            uc_full: "0039-fe0f-20e3",
            shortnames: [],
            category: "symbols"
        },
        ":one:": {
            uc_base: "0031-20e3",
            uc_full: "0031-fe0f-20e3",
            shortnames: [],
            category: "symbols"
        },
        ":seven:": {
            uc_base: "0037-20e3",
            uc_full: "0037-fe0f-20e3",
            shortnames: [],
            category: "symbols"
        },
        ":six:": {
            uc_base: "0036-20e3",
            uc_full: "0036-fe0f-20e3",
            shortnames: [],
            category: "symbols"
        },
        ":three:": {
            uc_base: "0033-20e3",
            uc_full: "0033-fe0f-20e3",
            shortnames: [],
            category: "symbols"
        },
        ":two:": {
            uc_base: "0032-20e3",
            uc_full: "0032-fe0f-20e3",
            shortnames: [],
            category: "symbols"
        },
        ":woman_bouncing_ball:": {
            uc_base: "26f9-2640",
            uc_full: "26f9-fe0f-200d-2640-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":zero:": {
            uc_base: "0030-20e3",
            uc_full: "0030-fe0f-20e3",
            shortnames: [],
            category: "symbols"
        },
        ":100:": {
            uc_base: "1f4af",
            uc_full: "1f4af",
            shortnames: [],
            category: "symbols"
        },
        ":1234:": {
            uc_base: "1f522",
            uc_full: "1f522",
            shortnames: [],
            category: "symbols"
        },
        ":8ball:": {
            uc_base: "1f3b1",
            uc_full: "1f3b1",
            shortnames: [],
            category: "activity"
        },
        ":a:": {
            uc_base: "1f170",
            uc_full: "1f170-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":ab:": {
            uc_base: "1f18e",
            uc_full: "1f18e",
            shortnames: [],
            category: "symbols"
        },
        ":abacus:": {
            uc_base: "1f9ee",
            uc_full: "1f9ee",
            shortnames: [],
            category: "objects"
        },
        ":abc:": {
            uc_base: "1f524",
            uc_full: "1f524",
            shortnames: [],
            category: "symbols"
        },
        ":abcd:": {
            uc_base: "1f521",
            uc_full: "1f521",
            shortnames: [],
            category: "symbols"
        },
        ":accept:": {
            uc_base: "1f251",
            uc_full: "1f251",
            shortnames: [],
            category: "symbols"
        },
        ":adhesive_bandage:": {
            uc_base: "1fa79",
            uc_full: "1fa79",
            shortnames: [],
            category: "objects"
        },
        ":adult:": {
            uc_base: "1f9d1",
            uc_full: "1f9d1",
            shortnames: [],
            category: "people"
        },
        ":aerial_tramway:": {
            uc_base: "1f6a1",
            uc_full: "1f6a1",
            shortnames: [],
            category: "travel"
        },
        ":airplane_arriving:": {
            uc_base: "1f6ec",
            uc_full: "1f6ec",
            shortnames: [],
            category: "travel"
        },
        ":airplane_departure:": {
            uc_base: "1f6eb",
            uc_full: "1f6eb",
            shortnames: [],
            category: "travel"
        },
        ":airplane_small:": {
            uc_base: "1f6e9",
            uc_full: "1f6e9-fe0f",
            shortnames: [":small_airplane:"],
            category: "travel"
        },
        ":alien:": {
            uc_base: "1f47d",
            uc_full: "1f47d",
            shortnames: [],
            category: "people"
        },
        ":ambulance:": {
            uc_base: "1f691",
            uc_full: "1f691",
            shortnames: [],
            category: "travel"
        },
        ":amphora:": {
            uc_base: "1f3fa",
            uc_full: "1f3fa",
            shortnames: [],
            category: "objects"
        },
        ":angel:": {
            uc_base: "1f47c",
            uc_full: "1f47c",
            shortnames: [],
            category: "people"
        },
        ":anger:": {
            uc_base: "1f4a2",
            uc_full: "1f4a2",
            shortnames: [],
            category: "symbols"
        },
        ":anger_right:": {
            uc_base: "1f5ef",
            uc_full: "1f5ef-fe0f",
            shortnames: [":right_anger_bubble:"],
            category: "symbols"
        },
        ":angry:": {
            uc_base: "1f620",
            uc_full: "1f620",
            shortnames: [],
            category: "people"
        },
        ":anguished:": {
            uc_base: "1f627",
            uc_full: "1f627",
            shortnames: [],
            category: "people"
        },
        ":ant:": {
            uc_base: "1f41c",
            uc_full: "1f41c",
            shortnames: [],
            category: "nature"
        },
        ":apple:": {
            uc_base: "1f34e",
            uc_full: "1f34e",
            shortnames: [],
            category: "food"
        },
        ":arrow_down_small:": {
            uc_base: "1f53d",
            uc_full: "1f53d",
            shortnames: [],
            category: "symbols"
        },
        ":arrow_up_small:": {
            uc_base: "1f53c",
            uc_full: "1f53c",
            shortnames: [],
            category: "symbols"
        },
        ":arrows_clockwise:": {
            uc_base: "1f503",
            uc_full: "1f503",
            shortnames: [],
            category: "symbols"
        },
        ":arrows_counterclockwise:": {
            uc_base: "1f504",
            uc_full: "1f504",
            shortnames: [],
            category: "symbols"
        },
        ":art:": {
            uc_base: "1f3a8",
            uc_full: "1f3a8",
            shortnames: [],
            category: "activity"
        },
        ":articulated_lorry:": {
            uc_base: "1f69b",
            uc_full: "1f69b",
            shortnames: [],
            category: "travel"
        },
        ":astonished:": {
            uc_base: "1f632",
            uc_full: "1f632",
            shortnames: [],
            category: "people"
        },
        ":athletic_shoe:": {
            uc_base: "1f45f",
            uc_full: "1f45f",
            shortnames: [],
            category: "people"
        },
        ":atm:": {
            uc_base: "1f3e7",
            uc_full: "1f3e7",
            shortnames: [],
            category: "symbols"
        },
        ":auto_rickshaw:": {
            uc_base: "1f6fa",
            uc_full: "1f6fa",
            shortnames: [],
            category: "travel"
        },
        ":avocado:": {
            uc_base: "1f951",
            uc_full: "1f951",
            shortnames: [],
            category: "food"
        },
        ":axe:": {
            uc_base: "1fa93",
            uc_full: "1fa93",
            shortnames: [],
            category: "objects"
        },
        ":b:": {
            uc_base: "1f171",
            uc_full: "1f171-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":baby:": {
            uc_base: "1f476",
            uc_full: "1f476",
            shortnames: [],
            category: "people"
        },
        ":baby_bottle:": {
            uc_base: "1f37c",
            uc_full: "1f37c",
            shortnames: [],
            category: "food"
        },
        ":baby_chick:": {
            uc_base: "1f424",
            uc_full: "1f424",
            shortnames: [],
            category: "nature"
        },
        ":baby_symbol:": {
            uc_base: "1f6bc",
            uc_full: "1f6bc",
            shortnames: [],
            category: "symbols"
        },
        ":back:": {
            uc_base: "1f519",
            uc_full: "1f519",
            shortnames: [],
            category: "symbols"
        },
        ":bacon:": {
            uc_base: "1f953",
            uc_full: "1f953",
            shortnames: [],
            category: "food"
        },
        ":badger:": {
            uc_base: "1f9a1",
            uc_full: "1f9a1",
            shortnames: [],
            category: "nature"
        },
        ":badminton:": {
            uc_base: "1f3f8",
            uc_full: "1f3f8",
            shortnames: [],
            category: "activity"
        },
        ":bagel:": {
            uc_base: "1f96f",
            uc_full: "1f96f",
            shortnames: [],
            category: "food"
        },
        ":baggage_claim:": {
            uc_base: "1f6c4",
            uc_full: "1f6c4",
            shortnames: [],
            category: "symbols"
        },
        ":bald:": {
            uc_base: "1f9b2",
            uc_full: "1f9b2",
            shortnames: [],
            category: "people"
        },
        ":ballet_shoes:": {
            uc_base: "1fa70",
            uc_full: "1fa70",
            shortnames: [],
            category: "people"
        },
        ":balloon:": {
            uc_base: "1f388",
            uc_full: "1f388",
            shortnames: [],
            category: "objects"
        },
        ":ballot_box:": {
            uc_base: "1f5f3",
            uc_full: "1f5f3-fe0f",
            shortnames: [":ballot_box_with_ballot:"],
            category: "objects"
        },
        ":bamboo:": {
            uc_base: "1f38d",
            uc_full: "1f38d",
            shortnames: [],
            category: "nature"
        },
        ":banana:": {
            uc_base: "1f34c",
            uc_full: "1f34c",
            shortnames: [],
            category: "food"
        },
        ":banjo:": {
            uc_base: "1fa95",
            uc_full: "1fa95",
            shortnames: [],
            category: "activity"
        },
        ":bank:": {
            uc_base: "1f3e6",
            uc_full: "1f3e6",
            shortnames: [],
            category: "travel"
        },
        ":bar_chart:": {
            uc_base: "1f4ca",
            uc_full: "1f4ca",
            shortnames: [],
            category: "objects"
        },
        ":barber:": {
            uc_base: "1f488",
            uc_full: "1f488",
            shortnames: [],
            category: "objects"
        },
        ":basket:": {
            uc_base: "1f9fa",
            uc_full: "1f9fa",
            shortnames: [],
            category: "objects"
        },
        ":basketball:": {
            uc_base: "1f3c0",
            uc_full: "1f3c0",
            shortnames: [],
            category: "activity"
        },
        ":bat:": {
            uc_base: "1f987",
            uc_full: "1f987",
            shortnames: [],
            category: "nature"
        },
        ":bath:": {
            uc_base: "1f6c0",
            uc_full: "1f6c0",
            shortnames: [],
            category: "objects"
        },
        ":bathtub:": {
            uc_base: "1f6c1",
            uc_full: "1f6c1",
            shortnames: [],
            category: "objects"
        },
        ":battery:": {
            uc_base: "1f50b",
            uc_full: "1f50b",
            shortnames: [],
            category: "objects"
        },
        ":beach:": {
            uc_base: "1f3d6",
            uc_full: "1f3d6-fe0f",
            shortnames: [":beach_with_umbrella:"],
            category: "travel"
        },
        ":bear:": {
            uc_base: "1f43b",
            uc_full: "1f43b",
            shortnames: [],
            category: "nature"
        },
        ":bearded_person:": {
            uc_base: "1f9d4",
            uc_full: "1f9d4",
            shortnames: [],
            category: "people"
        },
        ":bed:": {
            uc_base: "1f6cf",
            uc_full: "1f6cf-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":bee:": {
            uc_base: "1f41d",
            uc_full: "1f41d",
            shortnames: [],
            category: "nature"
        },
        ":beer:": {
            uc_base: "1f37a",
            uc_full: "1f37a",
            shortnames: [],
            category: "food"
        },
        ":beers:": {
            uc_base: "1f37b",
            uc_full: "1f37b",
            shortnames: [],
            category: "food"
        },
        ":beetle:": {
            uc_base: "1f41e",
            uc_full: "1f41e",
            shortnames: [],
            category: "nature"
        },
        ":beginner:": {
            uc_base: "1f530",
            uc_full: "1f530",
            shortnames: [],
            category: "symbols"
        },
        ":bell:": {
            uc_base: "1f514",
            uc_full: "1f514",
            shortnames: [],
            category: "symbols"
        },
        ":bellhop:": {
            uc_base: "1f6ce",
            uc_full: "1f6ce-fe0f",
            shortnames: [":bellhop_bell:"],
            category: "objects"
        },
        ":bento:": {
            uc_base: "1f371",
            uc_full: "1f371",
            shortnames: [],
            category: "food"
        },
        ":beverage_box:": {
            uc_base: "1f9c3",
            uc_full: "1f9c3",
            shortnames: [],
            category: "food"
        },
        ":bike:": {
            uc_base: "1f6b2",
            uc_full: "1f6b2",
            shortnames: [],
            category: "travel"
        },
        ":bikini:": {
            uc_base: "1f459",
            uc_full: "1f459",
            shortnames: [],
            category: "people"
        },
        ":billed_cap:": {
            uc_base: "1f9e2",
            uc_full: "1f9e2",
            shortnames: [],
            category: "people"
        },
        ":bird:": {
            uc_base: "1f426",
            uc_full: "1f426",
            shortnames: [],
            category: "nature"
        },
        ":birthday:": {
            uc_base: "1f382",
            uc_full: "1f382",
            shortnames: [],
            category: "food"
        },
        ":black_heart:": {
            uc_base: "1f5a4",
            uc_full: "1f5a4",
            shortnames: [],
            category: "symbols"
        },
        ":black_joker:": {
            uc_base: "1f0cf",
            uc_full: "1f0cf",
            shortnames: [],
            category: "symbols"
        },
        ":black_square_button:": {
            uc_base: "1f532",
            uc_full: "1f532",
            shortnames: [],
            category: "symbols"
        },
        ":blond_haired_person:": {
            uc_base: "1f471",
            uc_full: "1f471",
            shortnames: [":person_with_blond_hair:"],
            category: "people"
        },
        ":blossom:": {
            uc_base: "1f33c",
            uc_full: "1f33c",
            shortnames: [],
            category: "nature"
        },
        ":blowfish:": {
            uc_base: "1f421",
            uc_full: "1f421",
            shortnames: [],
            category: "nature"
        },
        ":blue_book:": {
            uc_base: "1f4d8",
            uc_full: "1f4d8",
            shortnames: [],
            category: "objects"
        },
        ":blue_car:": {
            uc_base: "1f699",
            uc_full: "1f699",
            shortnames: [],
            category: "travel"
        },
        ":blue_circle:": {
            uc_base: "1f535",
            uc_full: "1f535",
            shortnames: [],
            category: "symbols"
        },
        ":blue_heart:": {
            uc_base: "1f499",
            uc_full: "1f499",
            shortnames: [],
            category: "symbols"
        },
        ":blue_square:": {
            uc_base: "1f7e6",
            uc_full: "1f7e6",
            shortnames: [],
            category: "symbols"
        },
        ":blush:": {
            uc_base: "1f60a",
            uc_full: "1f60a",
            shortnames: [],
            category: "people"
        },
        ":boar:": {
            uc_base: "1f417",
            uc_full: "1f417",
            shortnames: [],
            category: "nature"
        },
        ":bomb:": {
            uc_base: "1f4a3",
            uc_full: "1f4a3",
            shortnames: [],
            category: "objects"
        },
        ":bone:": {
            uc_base: "1f9b4",
            uc_full: "1f9b4",
            shortnames: [],
            category: "people"
        },
        ":book:": {
            uc_base: "1f4d6",
            uc_full: "1f4d6",
            shortnames: [],
            category: "objects"
        },
        ":bookmark:": {
            uc_base: "1f516",
            uc_full: "1f516",
            shortnames: [],
            category: "objects"
        },
        ":bookmark_tabs:": {
            uc_base: "1f4d1",
            uc_full: "1f4d1",
            shortnames: [],
            category: "objects"
        },
        ":books:": {
            uc_base: "1f4da",
            uc_full: "1f4da",
            shortnames: [],
            category: "objects"
        },
        ":boom:": {
            uc_base: "1f4a5",
            uc_full: "1f4a5",
            shortnames: [],
            category: "nature"
        },
        ":boot:": {
            uc_base: "1f462",
            uc_full: "1f462",
            shortnames: [],
            category: "people"
        },
        ":bouquet:": {
            uc_base: "1f490",
            uc_full: "1f490",
            shortnames: [],
            category: "nature"
        },
        ":bow_and_arrow:": {
            uc_base: "1f3f9",
            uc_full: "1f3f9",
            shortnames: [":archery:"],
            category: "activity"
        },
        ":bowl_with_spoon:": {
            uc_base: "1f963",
            uc_full: "1f963",
            shortnames: [],
            category: "food"
        },
        ":bowling:": {
            uc_base: "1f3b3",
            uc_full: "1f3b3",
            shortnames: [],
            category: "activity"
        },
        ":boxing_glove:": {
            uc_base: "1f94a",
            uc_full: "1f94a",
            shortnames: [":boxing_gloves:"],
            category: "activity"
        },
        ":boy:": {
            uc_base: "1f466",
            uc_full: "1f466",
            shortnames: [],
            category: "people"
        },
        ":brain:": {
            uc_base: "1f9e0",
            uc_full: "1f9e0",
            shortnames: [],
            category: "people"
        },
        ":bread:": {
            uc_base: "1f35e",
            uc_full: "1f35e",
            shortnames: [],
            category: "food"
        },
        ":breast_feeding:": {
            uc_base: "1f931",
            uc_full: "1f931",
            shortnames: [],
            category: "people"
        },
        ":bricks:": {
            uc_base: "1f9f1",
            uc_full: "1f9f1",
            shortnames: [],
            category: "objects"
        },
        ":bride_with_veil:": {
            uc_base: "1f470",
            uc_full: "1f470",
            shortnames: [],
            category: "people"
        },
        ":bridge_at_night:": {
            uc_base: "1f309",
            uc_full: "1f309",
            shortnames: [],
            category: "travel"
        },
        ":briefcase:": {
            uc_base: "1f4bc",
            uc_full: "1f4bc",
            shortnames: [],
            category: "people"
        },
        ":briefs:": {
            uc_base: "1fa72",
            uc_full: "1fa72",
            shortnames: [],
            category: "people"
        },
        ":broccoli:": {
            uc_base: "1f966",
            uc_full: "1f966",
            shortnames: [],
            category: "food"
        },
        ":broken_heart:": {
            uc_base: "1f494",
            uc_full: "1f494",
            shortnames: [],
            category: "symbols"
        },
        ":broom:": {
            uc_base: "1f9f9",
            uc_full: "1f9f9",
            shortnames: [],
            category: "objects"
        },
        ":brown_circle:": {
            uc_base: "1f7e4",
            uc_full: "1f7e4",
            shortnames: [],
            category: "symbols"
        },
        ":brown_heart:": {
            uc_base: "1f90e",
            uc_full: "1f90e",
            shortnames: [],
            category: "symbols"
        },
        ":brown_square:": {
            uc_base: "1f7eb",
            uc_full: "1f7eb",
            shortnames: [],
            category: "symbols"
        },
        ":bug:": {
            uc_base: "1f41b",
            uc_full: "1f41b",
            shortnames: [],
            category: "nature"
        },
        ":bulb:": {
            uc_base: "1f4a1",
            uc_full: "1f4a1",
            shortnames: [],
            category: "objects"
        },
        ":bullettrain_front:": {
            uc_base: "1f685",
            uc_full: "1f685",
            shortnames: [],
            category: "travel"
        },
        ":bullettrain_side:": {
            uc_base: "1f684",
            uc_full: "1f684",
            shortnames: [],
            category: "travel"
        },
        ":burrito:": {
            uc_base: "1f32f",
            uc_full: "1f32f",
            shortnames: [],
            category: "food"
        },
        ":bus:": {
            uc_base: "1f68c",
            uc_full: "1f68c",
            shortnames: [],
            category: "travel"
        },
        ":busstop:": {
            uc_base: "1f68f",
            uc_full: "1f68f",
            shortnames: [],
            category: "travel"
        },
        ":bust_in_silhouette:": {
            uc_base: "1f464",
            uc_full: "1f464",
            shortnames: [],
            category: "people"
        },
        ":busts_in_silhouette:": {
            uc_base: "1f465",
            uc_full: "1f465",
            shortnames: [],
            category: "people"
        },
        ":butter:": {
            uc_base: "1f9c8",
            uc_full: "1f9c8",
            shortnames: [],
            category: "food"
        },
        ":butterfly:": {
            uc_base: "1f98b",
            uc_full: "1f98b",
            shortnames: [],
            category: "nature"
        },
        ":cactus:": {
            uc_base: "1f335",
            uc_full: "1f335",
            shortnames: [],
            category: "nature"
        },
        ":cake:": {
            uc_base: "1f370",
            uc_full: "1f370",
            shortnames: [],
            category: "food"
        },
        ":calendar:": {
            uc_base: "1f4c6",
            uc_full: "1f4c6",
            shortnames: [],
            category: "objects"
        },
        ":calendar_spiral:": {
            uc_base: "1f5d3",
            uc_full: "1f5d3-fe0f",
            shortnames: [":spiral_calendar_pad:"],
            category: "objects"
        },
        ":call_me:": {
            uc_base: "1f919",
            uc_full: "1f919",
            shortnames: [":call_me_hand:"],
            category: "people"
        },
        ":calling:": {
            uc_base: "1f4f2",
            uc_full: "1f4f2",
            shortnames: [],
            category: "objects"
        },
        ":camel:": {
            uc_base: "1f42b",
            uc_full: "1f42b",
            shortnames: [],
            category: "nature"
        },
        ":camera:": {
            uc_base: "1f4f7",
            uc_full: "1f4f7",
            shortnames: [],
            category: "objects"
        },
        ":camera_with_flash:": {
            uc_base: "1f4f8",
            uc_full: "1f4f8",
            shortnames: [],
            category: "objects"
        },
        ":camping:": {
            uc_base: "1f3d5",
            uc_full: "1f3d5-fe0f",
            shortnames: [],
            category: "travel"
        },
        ":candle:": {
            uc_base: "1f56f",
            uc_full: "1f56f-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":candy:": {
            uc_base: "1f36c",
            uc_full: "1f36c",
            shortnames: [],
            category: "food"
        },
        ":canned_food:": {
            uc_base: "1f96b",
            uc_full: "1f96b",
            shortnames: [],
            category: "food"
        },
        ":canoe:": {
            uc_base: "1f6f6",
            uc_full: "1f6f6",
            shortnames: [":kayak:"],
            category: "travel"
        },
        ":capital_abcd:": {
            uc_base: "1f520",
            uc_full: "1f520",
            shortnames: [],
            category: "symbols"
        },
        ":card_box:": {
            uc_base: "1f5c3",
            uc_full: "1f5c3-fe0f",
            shortnames: [":card_file_box:"],
            category: "objects"
        },
        ":card_index:": {
            uc_base: "1f4c7",
            uc_full: "1f4c7",
            shortnames: [],
            category: "objects"
        },
        ":carousel_horse:": {
            uc_base: "1f3a0",
            uc_full: "1f3a0",
            shortnames: [],
            category: "travel"
        },
        ":carrot:": {
            uc_base: "1f955",
            uc_full: "1f955",
            shortnames: [],
            category: "food"
        },
        ":cat2:": {
            uc_base: "1f408",
            uc_full: "1f408",
            shortnames: [],
            category: "nature"
        },
        ":cat:": {
            uc_base: "1f431",
            uc_full: "1f431",
            shortnames: [],
            category: "nature"
        },
        ":cd:": {
            uc_base: "1f4bf",
            uc_full: "1f4bf",
            shortnames: [],
            category: "objects"
        },
        ":chair:": {
            uc_base: "1fa91",
            uc_full: "1fa91",
            shortnames: [],
            category: "objects"
        },
        ":champagne:": {
            uc_base: "1f37e",
            uc_full: "1f37e",
            shortnames: [":bottle_with_popping_cork:"],
            category: "food"
        },
        ":champagne_glass:": {
            uc_base: "1f942",
            uc_full: "1f942",
            shortnames: [":clinking_glass:"],
            category: "food"
        },
        ":chart:": {
            uc_base: "1f4b9",
            uc_full: "1f4b9",
            shortnames: [],
            category: "symbols"
        },
        ":chart_with_downwards_trend:": {
            uc_base: "1f4c9",
            uc_full: "1f4c9",
            shortnames: [],
            category: "objects"
        },
        ":chart_with_upwards_trend:": {
            uc_base: "1f4c8",
            uc_full: "1f4c8",
            shortnames: [],
            category: "objects"
        },
        ":checkered_flag:": {
            uc_base: "1f3c1",
            uc_full: "1f3c1",
            shortnames: [],
            category: "flags"
        },
        ":cheese:": {
            uc_base: "1f9c0",
            uc_full: "1f9c0",
            shortnames: [":cheese_wedge:"],
            category: "food"
        },
        ":cherries:": {
            uc_base: "1f352",
            uc_full: "1f352",
            shortnames: [],
            category: "food"
        },
        ":cherry_blossom:": {
            uc_base: "1f338",
            uc_full: "1f338",
            shortnames: [],
            category: "nature"
        },
        ":chestnut:": {
            uc_base: "1f330",
            uc_full: "1f330",
            shortnames: [],
            category: "food"
        },
        ":chicken:": {
            uc_base: "1f414",
            uc_full: "1f414",
            shortnames: [],
            category: "nature"
        },
        ":child:": {
            uc_base: "1f9d2",
            uc_full: "1f9d2",
            shortnames: [],
            category: "people"
        },
        ":children_crossing:": {
            uc_base: "1f6b8",
            uc_full: "1f6b8",
            shortnames: [],
            category: "symbols"
        },
        ":chipmunk:": {
            uc_base: "1f43f",
            uc_full: "1f43f-fe0f",
            shortnames: [],
            category: "nature"
        },
        ":chocolate_bar:": {
            uc_base: "1f36b",
            uc_full: "1f36b",
            shortnames: [],
            category: "food"
        },
        ":chopsticks:": {
            uc_base: "1f962",
            uc_full: "1f962",
            shortnames: [],
            category: "food"
        },
        ":christmas_tree:": {
            uc_base: "1f384",
            uc_full: "1f384",
            shortnames: [],
            category: "nature"
        },
        ":cinema:": {
            uc_base: "1f3a6",
            uc_full: "1f3a6",
            shortnames: [],
            category: "symbols"
        },
        ":circus_tent:": {
            uc_base: "1f3aa",
            uc_full: "1f3aa",
            shortnames: [],
            category: "activity"
        },
        ":city_dusk:": {
            uc_base: "1f306",
            uc_full: "1f306",
            shortnames: [],
            category: "travel"
        },
        ":city_sunset:": {
            uc_base: "1f307",
            uc_full: "1f307",
            shortnames: [":city_sunrise:"],
            category: "travel"
        },
        ":cityscape:": {
            uc_base: "1f3d9",
            uc_full: "1f3d9-fe0f",
            shortnames: [],
            category: "travel"
        },
        ":cl:": {
            uc_base: "1f191",
            uc_full: "1f191",
            shortnames: [],
            category: "symbols"
        },
        ":clap:": {
            uc_base: "1f44f",
            uc_full: "1f44f",
            shortnames: [],
            category: "people"
        },
        ":clapper:": {
            uc_base: "1f3ac",
            uc_full: "1f3ac",
            shortnames: [],
            category: "activity"
        },
        ":classical_building:": {
            uc_base: "1f3db",
            uc_full: "1f3db-fe0f",
            shortnames: [],
            category: "travel"
        },
        ":clipboard:": {
            uc_base: "1f4cb",
            uc_full: "1f4cb",
            shortnames: [],
            category: "objects"
        },
        ":clock1030:": {
            uc_base: "1f565",
            uc_full: "1f565",
            shortnames: [],
            category: "symbols"
        },
        ":clock10:": {
            uc_base: "1f559",
            uc_full: "1f559",
            shortnames: [],
            category: "symbols"
        },
        ":clock1130:": {
            uc_base: "1f566",
            uc_full: "1f566",
            shortnames: [],
            category: "symbols"
        },
        ":clock11:": {
            uc_base: "1f55a",
            uc_full: "1f55a",
            shortnames: [],
            category: "symbols"
        },
        ":clock1230:": {
            uc_base: "1f567",
            uc_full: "1f567",
            shortnames: [],
            category: "symbols"
        },
        ":clock12:": {
            uc_base: "1f55b",
            uc_full: "1f55b",
            shortnames: [],
            category: "symbols"
        },
        ":clock130:": {
            uc_base: "1f55c",
            uc_full: "1f55c",
            shortnames: [],
            category: "symbols"
        },
        ":clock1:": {
            uc_base: "1f550",
            uc_full: "1f550",
            shortnames: [],
            category: "symbols"
        },
        ":clock230:": {
            uc_base: "1f55d",
            uc_full: "1f55d",
            shortnames: [],
            category: "symbols"
        },
        ":clock2:": {
            uc_base: "1f551",
            uc_full: "1f551",
            shortnames: [],
            category: "symbols"
        },
        ":clock330:": {
            uc_base: "1f55e",
            uc_full: "1f55e",
            shortnames: [],
            category: "symbols"
        },
        ":clock3:": {
            uc_base: "1f552",
            uc_full: "1f552",
            shortnames: [],
            category: "symbols"
        },
        ":clock430:": {
            uc_base: "1f55f",
            uc_full: "1f55f",
            shortnames: [],
            category: "symbols"
        },
        ":clock4:": {
            uc_base: "1f553",
            uc_full: "1f553",
            shortnames: [],
            category: "symbols"
        },
        ":clock530:": {
            uc_base: "1f560",
            uc_full: "1f560",
            shortnames: [],
            category: "symbols"
        },
        ":clock5:": {
            uc_base: "1f554",
            uc_full: "1f554",
            shortnames: [],
            category: "symbols"
        },
        ":clock630:": {
            uc_base: "1f561",
            uc_full: "1f561",
            shortnames: [],
            category: "symbols"
        },
        ":clock6:": {
            uc_base: "1f555",
            uc_full: "1f555",
            shortnames: [],
            category: "symbols"
        },
        ":clock730:": {
            uc_base: "1f562",
            uc_full: "1f562",
            shortnames: [],
            category: "symbols"
        },
        ":clock7:": {
            uc_base: "1f556",
            uc_full: "1f556",
            shortnames: [],
            category: "symbols"
        },
        ":clock830:": {
            uc_base: "1f563",
            uc_full: "1f563",
            shortnames: [],
            category: "symbols"
        },
        ":clock8:": {
            uc_base: "1f557",
            uc_full: "1f557",
            shortnames: [],
            category: "symbols"
        },
        ":clock930:": {
            uc_base: "1f564",
            uc_full: "1f564",
            shortnames: [],
            category: "symbols"
        },
        ":clock9:": {
            uc_base: "1f558",
            uc_full: "1f558",
            shortnames: [],
            category: "symbols"
        },
        ":clock:": {
            uc_base: "1f570",
            uc_full: "1f570-fe0f",
            shortnames: [":mantlepiece_clock:"],
            category: "objects"
        },
        ":closed_book:": {
            uc_base: "1f4d5",
            uc_full: "1f4d5",
            shortnames: [],
            category: "objects"
        },
        ":closed_lock_with_key:": {
            uc_base: "1f510",
            uc_full: "1f510",
            shortnames: [],
            category: "objects"
        },
        ":closed_umbrella:": {
            uc_base: "1f302",
            uc_full: "1f302",
            shortnames: [],
            category: "people"
        },
        ":cloud_lightning:": {
            uc_base: "1f329",
            uc_full: "1f329-fe0f",
            shortnames: [":cloud_with_lightning:"],
            category: "nature"
        },
        ":cloud_rain:": {
            uc_base: "1f327",
            uc_full: "1f327-fe0f",
            shortnames: [":cloud_with_rain:"],
            category: "nature"
        },
        ":cloud_snow:": {
            uc_base: "1f328",
            uc_full: "1f328-fe0f",
            shortnames: [":cloud_with_snow:"],
            category: "nature"
        },
        ":cloud_tornado:": {
            uc_base: "1f32a",
            uc_full: "1f32a-fe0f",
            shortnames: [":cloud_with_tornado:"],
            category: "nature"
        },
        ":clown:": {
            uc_base: "1f921",
            uc_full: "1f921",
            shortnames: [":clown_face:"],
            category: "people"
        },
        ":coat:": {
            uc_base: "1f9e5",
            uc_full: "1f9e5",
            shortnames: [],
            category: "people"
        },
        ":cocktail:": {
            uc_base: "1f378",
            uc_full: "1f378",
            shortnames: [],
            category: "food"
        },
        ":coconut:": {
            uc_base: "1f965",
            uc_full: "1f965",
            shortnames: [],
            category: "food"
        },
        ":cold_face:": {
            uc_base: "1f976",
            uc_full: "1f976",
            shortnames: [],
            category: "people"
        },
        ":cold_sweat:": {
            uc_base: "1f630",
            uc_full: "1f630",
            shortnames: [],
            category: "people"
        },
        ":compass:": {
            uc_base: "1f9ed",
            uc_full: "1f9ed",
            shortnames: [],
            category: "objects"
        },
        ":compression:": {
            uc_base: "1f5dc",
            uc_full: "1f5dc-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":computer:": {
            uc_base: "1f4bb",
            uc_full: "1f4bb",
            shortnames: [],
            category: "objects"
        },
        ":confetti_ball:": {
            uc_base: "1f38a",
            uc_full: "1f38a",
            shortnames: [],
            category: "objects"
        },
        ":confounded:": {
            uc_base: "1f616",
            uc_full: "1f616",
            shortnames: [],
            category: "people"
        },
        ":confused:": {
            uc_base: "1f615",
            uc_full: "1f615",
            shortnames: [],
            category: "people"
        },
        ":construction:": {
            uc_base: "1f6a7",
            uc_full: "1f6a7",
            shortnames: [],
            category: "travel"
        },
        ":construction_site:": {
            uc_base: "1f3d7",
            uc_full: "1f3d7-fe0f",
            shortnames: [":building_construction:"],
            category: "travel"
        },
        ":construction_worker:": {
            uc_base: "1f477",
            uc_full: "1f477",
            shortnames: [],
            category: "people"
        },
        ":control_knobs:": {
            uc_base: "1f39b",
            uc_full: "1f39b-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":convenience_store:": {
            uc_base: "1f3ea",
            uc_full: "1f3ea",
            shortnames: [],
            category: "travel"
        },
        ":cookie:": {
            uc_base: "1f36a",
            uc_full: "1f36a",
            shortnames: [],
            category: "food"
        },
        ":cooking:": {
            uc_base: "1f373",
            uc_full: "1f373",
            shortnames: [],
            category: "food"
        },
        ":cool:": {
            uc_base: "1f192",
            uc_full: "1f192",
            shortnames: [],
            category: "symbols"
        },
        ":corn:": {
            uc_base: "1f33d",
            uc_full: "1f33d",
            shortnames: [],
            category: "food"
        },
        ":couch:": {
            uc_base: "1f6cb",
            uc_full: "1f6cb-fe0f",
            shortnames: [":couch_and_lamp:"],
            category: "objects"
        },
        ":couple:": {
            uc_base: "1f46b",
            uc_full: "1f46b",
            shortnames: [],
            category: "people"
        },
        ":couple_with_heart:": {
            uc_base: "1f491",
            uc_full: "1f491",
            shortnames: [],
            category: "people"
        },
        ":couplekiss:": {
            uc_base: "1f48f",
            uc_full: "1f48f",
            shortnames: [],
            category: "people"
        },
        ":cow2:": {
            uc_base: "1f404",
            uc_full: "1f404",
            shortnames: [],
            category: "nature"
        },
        ":cow:": {
            uc_base: "1f42e",
            uc_full: "1f42e",
            shortnames: [],
            category: "nature"
        },
        ":cowboy:": {
            uc_base: "1f920",
            uc_full: "1f920",
            shortnames: [":face_with_cowboy_hat:"],
            category: "people"
        },
        ":crab:": {
            uc_base: "1f980",
            uc_full: "1f980",
            shortnames: [],
            category: "nature"
        },
        ":crayon:": {
            uc_base: "1f58d",
            uc_full: "1f58d-fe0f",
            shortnames: [":lower_left_crayon:"],
            category: "objects"
        },
        ":credit_card:": {
            uc_base: "1f4b3",
            uc_full: "1f4b3",
            shortnames: [],
            category: "objects"
        },
        ":crescent_moon:": {
            uc_base: "1f319",
            uc_full: "1f319",
            shortnames: [],
            category: "nature"
        },
        ":cricket:": {
            uc_base: "1f997",
            uc_full: "1f997",
            shortnames: [],
            category: "nature"
        },
        ":cricket_game:": {
            uc_base: "1f3cf",
            uc_full: "1f3cf",
            shortnames: [":cricket_bat_ball:"],
            category: "activity"
        },
        ":crocodile:": {
            uc_base: "1f40a",
            uc_full: "1f40a",
            shortnames: [],
            category: "nature"
        },
        ":croissant:": {
            uc_base: "1f950",
            uc_full: "1f950",
            shortnames: [],
            category: "food"
        },
        ":crossed_flags:": {
            uc_base: "1f38c",
            uc_full: "1f38c",
            shortnames: [],
            category: "flags"
        },
        ":crown:": {
            uc_base: "1f451",
            uc_full: "1f451",
            shortnames: [],
            category: "people"
        },
        ":cruise_ship:": {
            uc_base: "1f6f3",
            uc_full: "1f6f3-fe0f",
            shortnames: [":passenger_ship:"],
            category: "travel"
        },
        ":cry:": {
            uc_base: "1f622",
            uc_full: "1f622",
            shortnames: [],
            category: "people"
        },
        ":crying_cat_face:": {
            uc_base: "1f63f",
            uc_full: "1f63f",
            shortnames: [],
            category: "people"
        },
        ":crystal_ball:": {
            uc_base: "1f52e",
            uc_full: "1f52e",
            shortnames: [],
            category: "objects"
        },
        ":cucumber:": {
            uc_base: "1f952",
            uc_full: "1f952",
            shortnames: [],
            category: "food"
        },
        ":cup_with_straw:": {
            uc_base: "1f964",
            uc_full: "1f964",
            shortnames: [],
            category: "food"
        },
        ":cupcake:": {
            uc_base: "1f9c1",
            uc_full: "1f9c1",
            shortnames: [],
            category: "food"
        },
        ":cupid:": {
            uc_base: "1f498",
            uc_full: "1f498",
            shortnames: [],
            category: "symbols"
        },
        ":curling_stone:": {
            uc_base: "1f94c",
            uc_full: "1f94c",
            shortnames: [],
            category: "activity"
        },
        ":curly_haired:": {
            uc_base: "1f9b1",
            uc_full: "1f9b1",
            shortnames: [],
            category: "people"
        },
        ":currency_exchange:": {
            uc_base: "1f4b1",
            uc_full: "1f4b1",
            shortnames: [],
            category: "symbols"
        },
        ":curry:": {
            uc_base: "1f35b",
            uc_full: "1f35b",
            shortnames: [],
            category: "food"
        },
        ":custard:": {
            uc_base: "1f36e",
            uc_full: "1f36e",
            shortnames: [":pudding:", ":flan:"],
            category: "food"
        },
        ":customs:": {
            uc_base: "1f6c3",
            uc_full: "1f6c3",
            shortnames: [],
            category: "symbols"
        },
        ":cut_of_meat:": {
            uc_base: "1f969",
            uc_full: "1f969",
            shortnames: [],
            category: "food"
        },
        ":cyclone:": {
            uc_base: "1f300",
            uc_full: "1f300",
            shortnames: [],
            category: "symbols"
        },
        ":dagger:": {
            uc_base: "1f5e1",
            uc_full: "1f5e1-fe0f",
            shortnames: [":dagger_knife:"],
            category: "objects"
        },
        ":dancer:": {
            uc_base: "1f483",
            uc_full: "1f483",
            shortnames: [],
            category: "people"
        },
        ":dango:": {
            uc_base: "1f361",
            uc_full: "1f361",
            shortnames: [],
            category: "food"
        },
        ":dark_sunglasses:": {
            uc_base: "1f576",
            uc_full: "1f576-fe0f",
            shortnames: [],
            category: "people"
        },
        ":dart:": {
            uc_base: "1f3af",
            uc_full: "1f3af",
            shortnames: [],
            category: "activity"
        },
        ":dash:": {
            uc_base: "1f4a8",
            uc_full: "1f4a8",
            shortnames: [],
            category: "nature"
        },
        ":date:": {
            uc_base: "1f4c5",
            uc_full: "1f4c5",
            shortnames: [],
            category: "objects"
        },
        ":deaf_person:": {
            uc_base: "1f9cf",
            uc_full: "1f9cf",
            shortnames: [],
            category: "people"
        },
        ":deciduous_tree:": {
            uc_base: "1f333",
            uc_full: "1f333",
            shortnames: [],
            category: "nature"
        },
        ":deer:": {
            uc_base: "1f98c",
            uc_full: "1f98c",
            shortnames: [],
            category: "nature"
        },
        ":department_store:": {
            uc_base: "1f3ec",
            uc_full: "1f3ec",
            shortnames: [],
            category: "travel"
        },
        ":desert:": {
            uc_base: "1f3dc",
            uc_full: "1f3dc-fe0f",
            shortnames: [],
            category: "travel"
        },
        ":desktop:": {
            uc_base: "1f5a5",
            uc_full: "1f5a5-fe0f",
            shortnames: [":desktop_computer:"],
            category: "objects"
        },
        ":detective:": {
            uc_base: "1f575",
            uc_full: "1f575-fe0f",
            shortnames: [":spy:", ":sleuth_or_spy:"],
            category: "people"
        },
        ":diamond_shape_with_a_dot_inside:": {
            uc_base: "1f4a0",
            uc_full: "1f4a0",
            shortnames: [],
            category: "symbols"
        },
        ":disappointed:": {
            uc_base: "1f61e",
            uc_full: "1f61e",
            shortnames: [],
            category: "people"
        },
        ":disappointed_relieved:": {
            uc_base: "1f625",
            uc_full: "1f625",
            shortnames: [],
            category: "people"
        },
        ":dividers:": {
            uc_base: "1f5c2",
            uc_full: "1f5c2-fe0f",
            shortnames: [":card_index_dividers:"],
            category: "objects"
        },
        ":diving_mask:": {
            uc_base: "1f93f",
            uc_full: "1f93f",
            shortnames: [],
            category: "people"
        },
        ":diya_lamp:": {
            uc_base: "1fa94",
            uc_full: "1fa94",
            shortnames: [],
            category: "objects"
        },
        ":dizzy:": {
            uc_base: "1f4ab",
            uc_full: "1f4ab",
            shortnames: [],
            category: "nature"
        },
        ":dizzy_face:": {
            uc_base: "1f635",
            uc_full: "1f635",
            shortnames: [],
            category: "people"
        },
        ":dna:": {
            uc_base: "1f9ec",
            uc_full: "1f9ec",
            shortnames: [],
            category: "objects"
        },
        ":do_not_litter:": {
            uc_base: "1f6af",
            uc_full: "1f6af",
            shortnames: [],
            category: "symbols"
        },
        ":dog2:": {
            uc_base: "1f415",
            uc_full: "1f415",
            shortnames: [],
            category: "nature"
        },
        ":dog:": {
            uc_base: "1f436",
            uc_full: "1f436",
            shortnames: [],
            category: "nature"
        },
        ":dollar:": {
            uc_base: "1f4b5",
            uc_full: "1f4b5",
            shortnames: [],
            category: "objects"
        },
        ":dolls:": {
            uc_base: "1f38e",
            uc_full: "1f38e",
            shortnames: [],
            category: "objects"
        },
        ":dolphin:": {
            uc_base: "1f42c",
            uc_full: "1f42c",
            shortnames: [],
            category: "nature"
        },
        ":door:": {
            uc_base: "1f6aa",
            uc_full: "1f6aa",
            shortnames: [],
            category: "objects"
        },
        ":doughnut:": {
            uc_base: "1f369",
            uc_full: "1f369",
            shortnames: [],
            category: "food"
        },
        ":dove:": {
            uc_base: "1f54a",
            uc_full: "1f54a-fe0f",
            shortnames: [":dove_of_peace:"],
            category: "nature"
        },
        ":dragon:": {
            uc_base: "1f409",
            uc_full: "1f409",
            shortnames: [],
            category: "nature"
        },
        ":dragon_face:": {
            uc_base: "1f432",
            uc_full: "1f432",
            shortnames: [],
            category: "nature"
        },
        ":dress:": {
            uc_base: "1f457",
            uc_full: "1f457",
            shortnames: [],
            category: "people"
        },
        ":dromedary_camel:": {
            uc_base: "1f42a",
            uc_full: "1f42a",
            shortnames: [],
            category: "nature"
        },
        ":drooling_face:": {
            uc_base: "1f924",
            uc_full: "1f924",
            shortnames: [":drool:"],
            category: "people"
        },
        ":drop_of_blood:": {
            uc_base: "1fa78",
            uc_full: "1fa78",
            shortnames: [],
            category: "objects"
        },
        ":droplet:": {
            uc_base: "1f4a7",
            uc_full: "1f4a7",
            shortnames: [],
            category: "nature"
        },
        ":drum:": {
            uc_base: "1f941",
            uc_full: "1f941",
            shortnames: [":drum_with_drumsticks:"],
            category: "activity"
        },
        ":duck:": {
            uc_base: "1f986",
            uc_full: "1f986",
            shortnames: [],
            category: "nature"
        },
        ":dumpling:": {
            uc_base: "1f95f",
            uc_full: "1f95f",
            shortnames: [],
            category: "food"
        },
        ":dvd:": {
            uc_base: "1f4c0",
            uc_full: "1f4c0",
            shortnames: [],
            category: "objects"
        },
        ":e-mail:": {
            uc_base: "1f4e7",
            uc_full: "1f4e7",
            shortnames: [":email:"],
            category: "objects"
        },
        ":eagle:": {
            uc_base: "1f985",
            uc_full: "1f985",
            shortnames: [],
            category: "nature"
        },
        ":ear:": {
            uc_base: "1f442",
            uc_full: "1f442",
            shortnames: [],
            category: "people"
        },
        ":ear_of_rice:": {
            uc_base: "1f33e",
            uc_full: "1f33e",
            shortnames: [],
            category: "nature"
        },
        ":ear_with_hearing_aid:": {
            uc_base: "1f9bb",
            uc_full: "1f9bb",
            shortnames: [],
            category: "people"
        },
        ":earth_africa:": {
            uc_base: "1f30d",
            uc_full: "1f30d",
            shortnames: [],
            category: "nature"
        },
        ":earth_americas:": {
            uc_base: "1f30e",
            uc_full: "1f30e",
            shortnames: [],
            category: "nature"
        },
        ":earth_asia:": {
            uc_base: "1f30f",
            uc_full: "1f30f",
            shortnames: [],
            category: "nature"
        },
        ":egg:": {
            uc_base: "1f95a",
            uc_full: "1f95a",
            shortnames: [],
            category: "food"
        },
        ":eggplant:": {
            uc_base: "1f346",
            uc_full: "1f346",
            shortnames: [],
            category: "food"
        },
        ":electric_plug:": {
            uc_base: "1f50c",
            uc_full: "1f50c",
            shortnames: [],
            category: "objects"
        },
        ":elephant:": {
            uc_base: "1f418",
            uc_full: "1f418",
            shortnames: [],
            category: "nature"
        },
        ":elf:": {
            uc_base: "1f9dd",
            uc_full: "1f9dd",
            shortnames: [],
            category: "people"
        },
        ":end:": {
            uc_base: "1f51a",
            uc_full: "1f51a",
            shortnames: [],
            category: "symbols"
        },
        ":envelope_with_arrow:": {
            uc_base: "1f4e9",
            uc_full: "1f4e9",
            shortnames: [],
            category: "objects"
        },
        ":euro:": {
            uc_base: "1f4b6",
            uc_full: "1f4b6",
            shortnames: [],
            category: "objects"
        },
        ":european_castle:": {
            uc_base: "1f3f0",
            uc_full: "1f3f0",
            shortnames: [],
            category: "travel"
        },
        ":european_post_office:": {
            uc_base: "1f3e4",
            uc_full: "1f3e4",
            shortnames: [],
            category: "travel"
        },
        ":evergreen_tree:": {
            uc_base: "1f332",
            uc_full: "1f332",
            shortnames: [],
            category: "nature"
        },
        ":exploding_head:": {
            uc_base: "1f92f",
            uc_full: "1f92f",
            shortnames: [],
            category: "people"
        },
        ":expressionless:": {
            uc_base: "1f611",
            uc_full: "1f611",
            shortnames: [],
            category: "people"
        },
        ":eye:": {
            uc_base: "1f441",
            uc_full: "1f441-fe0f",
            shortnames: [],
            category: "people"
        },
        ":eyeglasses:": {
            uc_base: "1f453",
            uc_full: "1f453",
            shortnames: [],
            category: "people"
        },
        ":eyes:": {
            uc_base: "1f440",
            uc_full: "1f440",
            shortnames: [],
            category: "people"
        },
        ":face_vomiting:": {
            uc_base: "1f92e",
            uc_full: "1f92e",
            shortnames: [],
            category: "people"
        },
        ":face_with_hand_over_mouth:": {
            uc_base: "1f92d",
            uc_full: "1f92d",
            shortnames: [],
            category: "people"
        },
        ":face_with_monocle:": {
            uc_base: "1f9d0",
            uc_full: "1f9d0",
            shortnames: [],
            category: "people"
        },
        ":face_with_raised_eyebrow:": {
            uc_base: "1f928",
            uc_full: "1f928",
            shortnames: [],
            category: "people"
        },
        ":face_with_symbols_over_mouth:": {
            uc_base: "1f92c",
            uc_full: "1f92c",
            shortnames: [],
            category: "people"
        },
        ":factory:": {
            uc_base: "1f3ed",
            uc_full: "1f3ed",
            shortnames: [],
            category: "travel"
        },
        ":fairy:": {
            uc_base: "1f9da",
            uc_full: "1f9da",
            shortnames: [],
            category: "people"
        },
        ":falafel:": {
            uc_base: "1f9c6",
            uc_full: "1f9c6",
            shortnames: [],
            category: "food"
        },
        ":fallen_leaf:": {
            uc_base: "1f342",
            uc_full: "1f342",
            shortnames: [],
            category: "nature"
        },
        ":family:": {
            uc_base: "1f46a",
            uc_full: "1f46a",
            shortnames: [],
            category: "people"
        },
        ":fax:": {
            uc_base: "1f4e0",
            uc_full: "1f4e0",
            shortnames: [],
            category: "objects"
        },
        ":fearful:": {
            uc_base: "1f628",
            uc_full: "1f628",
            shortnames: [],
            category: "people"
        },
        ":feet:": {
            uc_base: "1f43e",
            uc_full: "1f43e",
            shortnames: [":paw_prints:"],
            category: "nature"
        },
        ":ferris_wheel:": {
            uc_base: "1f3a1",
            uc_full: "1f3a1",
            shortnames: [],
            category: "travel"
        },
        ":field_hockey:": {
            uc_base: "1f3d1",
            uc_full: "1f3d1",
            shortnames: [],
            category: "activity"
        },
        ":file_cabinet:": {
            uc_base: "1f5c4",
            uc_full: "1f5c4-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":file_folder:": {
            uc_base: "1f4c1",
            uc_full: "1f4c1",
            shortnames: [],
            category: "objects"
        },
        ":film_frames:": {
            uc_base: "1f39e",
            uc_full: "1f39e-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":fingers_crossed:": {
            uc_base: "1f91e",
            uc_full: "1f91e",
            shortnames: [":hand_with_index_and_middle_finger_crossed:"],
            category: "people"
        },
        ":fire:": {
            uc_base: "1f525",
            uc_full: "1f525",
            shortnames: [":flame:"],
            category: "nature"
        },
        ":fire_engine:": {
            uc_base: "1f692",
            uc_full: "1f692",
            shortnames: [],
            category: "travel"
        },
        ":fire_extinguisher:": {
            uc_base: "1f9ef",
            uc_full: "1f9ef",
            shortnames: [],
            category: "objects"
        },
        ":firecracker:": {
            uc_base: "1f9e8",
            uc_full: "1f9e8",
            shortnames: [],
            category: "objects"
        },
        ":fireworks:": {
            uc_base: "1f386",
            uc_full: "1f386",
            shortnames: [],
            category: "travel"
        },
        ":first_place:": {
            uc_base: "1f947",
            uc_full: "1f947",
            shortnames: [":first_place_medal:"],
            category: "activity"
        },
        ":first_quarter_moon:": {
            uc_base: "1f313",
            uc_full: "1f313",
            shortnames: [],
            category: "nature"
        },
        ":first_quarter_moon_with_face:": {
            uc_base: "1f31b",
            uc_full: "1f31b",
            shortnames: [],
            category: "nature"
        },
        ":fish:": {
            uc_base: "1f41f",
            uc_full: "1f41f",
            shortnames: [],
            category: "nature"
        },
        ":fish_cake:": {
            uc_base: "1f365",
            uc_full: "1f365",
            shortnames: [],
            category: "food"
        },
        ":fishing_pole_and_fish:": {
            uc_base: "1f3a3",
            uc_full: "1f3a3",
            shortnames: [],
            category: "activity"
        },
        ":flag_black:": {
            uc_base: "1f3f4",
            uc_full: "1f3f4",
            shortnames: [":waving_black_flag:"],
            category: "flags"
        },
        ":flag_white:": {
            uc_base: "1f3f3",
            uc_full: "1f3f3-fe0f",
            shortnames: [":waving_white_flag:"],
            category: "flags"
        },
        ":flags:": {
            uc_base: "1f38f",
            uc_full: "1f38f",
            shortnames: [],
            category: "objects"
        },
        ":flamingo:": {
            uc_base: "1f9a9",
            uc_full: "1f9a9",
            shortnames: [],
            category: "nature"
        },
        ":flashlight:": {
            uc_base: "1f526",
            uc_full: "1f526",
            shortnames: [],
            category: "objects"
        },
        ":floppy_disk:": {
            uc_base: "1f4be",
            uc_full: "1f4be",
            shortnames: [],
            category: "objects"
        },
        ":flower_playing_cards:": {
            uc_base: "1f3b4",
            uc_full: "1f3b4",
            shortnames: [],
            category: "symbols"
        },
        ":flushed:": {
            uc_base: "1f633",
            uc_full: "1f633",
            shortnames: [],
            category: "people"
        },
        ":flying_disc:": {
            uc_base: "1f94f",
            uc_full: "1f94f",
            shortnames: [],
            category: "activity"
        },
        ":flying_saucer:": {
            uc_base: "1f6f8",
            uc_full: "1f6f8",
            shortnames: [],
            category: "travel"
        },
        ":fog:": {
            uc_base: "1f32b",
            uc_full: "1f32b-fe0f",
            shortnames: [],
            category: "nature"
        },
        ":foggy:": {
            uc_base: "1f301",
            uc_full: "1f301",
            shortnames: [],
            category: "travel"
        },
        ":foot:": {
            uc_base: "1f9b6",
            uc_full: "1f9b6",
            shortnames: [],
            category: "people"
        },
        ":football:": {
            uc_base: "1f3c8",
            uc_full: "1f3c8",
            shortnames: [],
            category: "activity"
        },
        ":footprints:": {
            uc_base: "1f463",
            uc_full: "1f463",
            shortnames: [],
            category: "people"
        },
        ":fork_and_knife:": {
            uc_base: "1f374",
            uc_full: "1f374",
            shortnames: [],
            category: "food"
        },
        ":fork_knife_plate:": {
            uc_base: "1f37d",
            uc_full: "1f37d-fe0f",
            shortnames: [":fork_and_knife_with_plate:"],
            category: "food"
        },
        ":fortune_cookie:": {
            uc_base: "1f960",
            uc_full: "1f960",
            shortnames: [],
            category: "food"
        },
        ":four_leaf_clover:": {
            uc_base: "1f340",
            uc_full: "1f340",
            shortnames: [],
            category: "nature"
        },
        ":fox:": {
            uc_base: "1f98a",
            uc_full: "1f98a",
            shortnames: [":fox_face:"],
            category: "nature"
        },
        ":frame_photo:": {
            uc_base: "1f5bc",
            uc_full: "1f5bc-fe0f",
            shortnames: [":frame_with_picture:"],
            category: "objects"
        },
        ":free:": {
            uc_base: "1f193",
            uc_full: "1f193",
            shortnames: [],
            category: "symbols"
        },
        ":french_bread:": {
            uc_base: "1f956",
            uc_full: "1f956",
            shortnames: [":baguette_bread:"],
            category: "food"
        },
        ":fried_shrimp:": {
            uc_base: "1f364",
            uc_full: "1f364",
            shortnames: [],
            category: "food"
        },
        ":fries:": {
            uc_base: "1f35f",
            uc_full: "1f35f",
            shortnames: [],
            category: "food"
        },
        ":frog:": {
            uc_base: "1f438",
            uc_full: "1f438",
            shortnames: [],
            category: "nature"
        },
        ":frowning:": {
            uc_base: "1f626",
            uc_full: "1f626",
            shortnames: [],
            category: "people"
        },
        ":full_moon:": {
            uc_base: "1f315",
            uc_full: "1f315",
            shortnames: [],
            category: "nature"
        },
        ":full_moon_with_face:": {
            uc_base: "1f31d",
            uc_full: "1f31d",
            shortnames: [],
            category: "nature"
        },
        ":game_die:": {
            uc_base: "1f3b2",
            uc_full: "1f3b2",
            shortnames: [],
            category: "activity"
        },
        ":garlic:": {
            uc_base: "1f9c4",
            uc_full: "1f9c4",
            shortnames: [],
            category: "food"
        },
        ":gem:": {
            uc_base: "1f48e",
            uc_full: "1f48e",
            shortnames: [],
            category: "objects"
        },
        ":genie:": {
            uc_base: "1f9de",
            uc_full: "1f9de",
            shortnames: [],
            category: "people"
        },
        ":ghost:": {
            uc_base: "1f47b",
            uc_full: "1f47b",
            shortnames: [],
            category: "people"
        },
        ":gift:": {
            uc_base: "1f381",
            uc_full: "1f381",
            shortnames: [],
            category: "objects"
        },
        ":gift_heart:": {
            uc_base: "1f49d",
            uc_full: "1f49d",
            shortnames: [],
            category: "symbols"
        },
        ":giraffe:": {
            uc_base: "1f992",
            uc_full: "1f992",
            shortnames: [],
            category: "nature"
        },
        ":girl:": {
            uc_base: "1f467",
            uc_full: "1f467",
            shortnames: [],
            category: "people"
        },
        ":globe_with_meridians:": {
            uc_base: "1f310",
            uc_full: "1f310",
            shortnames: [],
            category: "symbols"
        },
        ":gloves:": {
            uc_base: "1f9e4",
            uc_full: "1f9e4",
            shortnames: [],
            category: "people"
        },
        ":goal:": {
            uc_base: "1f945",
            uc_full: "1f945",
            shortnames: [":goal_net:"],
            category: "activity"
        },
        ":goat:": {
            uc_base: "1f410",
            uc_full: "1f410",
            shortnames: [],
            category: "nature"
        },
        ":goggles:": {
            uc_base: "1f97d",
            uc_full: "1f97d",
            shortnames: [],
            category: "people"
        },
        ":gorilla:": {
            uc_base: "1f98d",
            uc_full: "1f98d",
            shortnames: [],
            category: "nature"
        },
        ":grapes:": {
            uc_base: "1f347",
            uc_full: "1f347",
            shortnames: [],
            category: "food"
        },
        ":green_apple:": {
            uc_base: "1f34f",
            uc_full: "1f34f",
            shortnames: [],
            category: "food"
        },
        ":green_book:": {
            uc_base: "1f4d7",
            uc_full: "1f4d7",
            shortnames: [],
            category: "objects"
        },
        ":green_circle:": {
            uc_base: "1f7e2",
            uc_full: "1f7e2",
            shortnames: [],
            category: "symbols"
        },
        ":green_heart:": {
            uc_base: "1f49a",
            uc_full: "1f49a",
            shortnames: [],
            category: "symbols"
        },
        ":green_square:": {
            uc_base: "1f7e9",
            uc_full: "1f7e9",
            shortnames: [],
            category: "symbols"
        },
        ":grimacing:": {
            uc_base: "1f62c",
            uc_full: "1f62c",
            shortnames: [],
            category: "people"
        },
        ":grin:": {
            uc_base: "1f601",
            uc_full: "1f601",
            shortnames: [],
            category: "people"
        },
        ":grinning:": {
            uc_base: "1f600",
            uc_full: "1f600",
            shortnames: [],
            category: "people"
        },
        ":guard:": {
            uc_base: "1f482",
            uc_full: "1f482",
            shortnames: [":guardsman:"],
            category: "people"
        },
        ":guide_dog:": {
            uc_base: "1f9ae",
            uc_full: "1f9ae",
            shortnames: [],
            category: "nature"
        },
        ":guitar:": {
            uc_base: "1f3b8",
            uc_full: "1f3b8",
            shortnames: [],
            category: "activity"
        },
        ":gun:": {
            uc_base: "1f52b",
            uc_full: "1f52b",
            shortnames: [],
            category: "objects"
        },
        ":hamburger:": {
            uc_base: "1f354",
            uc_full: "1f354",
            shortnames: [],
            category: "food"
        },
        ":hammer:": {
            uc_base: "1f528",
            uc_full: "1f528",
            shortnames: [],
            category: "objects"
        },
        ":hamster:": {
            uc_base: "1f439",
            uc_full: "1f439",
            shortnames: [],
            category: "nature"
        },
        ":hand_splayed:": {
            uc_base: "1f590",
            uc_full: "1f590-fe0f",
            shortnames: [":raised_hand_with_fingers_splayed:"],
            category: "people"
        },
        ":handbag:": {
            uc_base: "1f45c",
            uc_full: "1f45c",
            shortnames: [],
            category: "people"
        },
        ":handshake:": {
            uc_base: "1f91d",
            uc_full: "1f91d",
            shortnames: [":shaking_hands:"],
            category: "people"
        },
        ":hatched_chick:": {
            uc_base: "1f425",
            uc_full: "1f425",
            shortnames: [],
            category: "nature"
        },
        ":hatching_chick:": {
            uc_base: "1f423",
            uc_full: "1f423",
            shortnames: [],
            category: "nature"
        },
        ":head_bandage:": {
            uc_base: "1f915",
            uc_full: "1f915",
            shortnames: [":face_with_head_bandage:"],
            category: "people"
        },
        ":headphones:": {
            uc_base: "1f3a7",
            uc_full: "1f3a7",
            shortnames: [],
            category: "activity"
        },
        ":hear_no_evil:": {
            uc_base: "1f649",
            uc_full: "1f649",
            shortnames: [],
            category: "nature"
        },
        ":heart_decoration:": {
            uc_base: "1f49f",
            uc_full: "1f49f",
            shortnames: [],
            category: "symbols"
        },
        ":heart_eyes:": {
            uc_base: "1f60d",
            uc_full: "1f60d",
            shortnames: [],
            category: "people"
        },
        ":heart_eyes_cat:": {
            uc_base: "1f63b",
            uc_full: "1f63b",
            shortnames: [],
            category: "people"
        },
        ":heartbeat:": {
            uc_base: "1f493",
            uc_full: "1f493",
            shortnames: [],
            category: "symbols"
        },
        ":heartpulse:": {
            uc_base: "1f497",
            uc_full: "1f497",
            shortnames: [],
            category: "symbols"
        },
        ":heavy_dollar_sign:": {
            uc_base: "1f4b2",
            uc_full: "1f4b2",
            shortnames: [],
            category: "symbols"
        },
        ":hedgehog:": {
            uc_base: "1f994",
            uc_full: "1f994",
            shortnames: [],
            category: "nature"
        },
        ":helicopter:": {
            uc_base: "1f681",
            uc_full: "1f681",
            shortnames: [],
            category: "travel"
        },
        ":herb:": {
            uc_base: "1f33f",
            uc_full: "1f33f",
            shortnames: [],
            category: "nature"
        },
        ":hibiscus:": {
            uc_base: "1f33a",
            uc_full: "1f33a",
            shortnames: [],
            category: "nature"
        },
        ":high_brightness:": {
            uc_base: "1f506",
            uc_full: "1f506",
            shortnames: [],
            category: "symbols"
        },
        ":high_heel:": {
            uc_base: "1f460",
            uc_full: "1f460",
            shortnames: [],
            category: "people"
        },
        ":hiking_boot:": {
            uc_base: "1f97e",
            uc_full: "1f97e",
            shortnames: [],
            category: "people"
        },
        ":hindu_temple:": {
            uc_base: "1f6d5",
            uc_full: "1f6d5",
            shortnames: [],
            category: "travel"
        },
        ":hippopotamus:": {
            uc_base: "1f99b",
            uc_full: "1f99b",
            shortnames: [],
            category: "nature"
        },
        ":hockey:": {
            uc_base: "1f3d2",
            uc_full: "1f3d2",
            shortnames: [],
            category: "activity"
        },
        ":hole:": {
            uc_base: "1f573",
            uc_full: "1f573-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":homes:": {
            uc_base: "1f3d8",
            uc_full: "1f3d8-fe0f",
            shortnames: [":house_buildings:"],
            category: "travel"
        },
        ":honey_pot:": {
            uc_base: "1f36f",
            uc_full: "1f36f",
            shortnames: [],
            category: "food"
        },
        ":horse:": {
            uc_base: "1f434",
            uc_full: "1f434",
            shortnames: [],
            category: "nature"
        },
        ":horse_racing:": {
            uc_base: "1f3c7",
            uc_full: "1f3c7",
            shortnames: [],
            category: "activity"
        },
        ":hospital:": {
            uc_base: "1f3e5",
            uc_full: "1f3e5",
            shortnames: [],
            category: "travel"
        },
        ":hot_face:": {
            uc_base: "1f975",
            uc_full: "1f975",
            shortnames: [],
            category: "people"
        },
        ":hot_pepper:": {
            uc_base: "1f336",
            uc_full: "1f336-fe0f",
            shortnames: [],
            category: "food"
        },
        ":hotdog:": {
            uc_base: "1f32d",
            uc_full: "1f32d",
            shortnames: [":hot_dog:"],
            category: "food"
        },
        ":hotel:": {
            uc_base: "1f3e8",
            uc_full: "1f3e8",
            shortnames: [],
            category: "travel"
        },
        ":house:": {
            uc_base: "1f3e0",
            uc_full: "1f3e0",
            shortnames: [],
            category: "travel"
        },
        ":house_abandoned:": {
            uc_base: "1f3da",
            uc_full: "1f3da-fe0f",
            shortnames: [":derelict_house_building:"],
            category: "travel"
        },
        ":house_with_garden:": {
            uc_base: "1f3e1",
            uc_full: "1f3e1",
            shortnames: [],
            category: "travel"
        },
        ":hugging:": {
            uc_base: "1f917",
            uc_full: "1f917",
            shortnames: [":hugging_face:"],
            category: "people"
        },
        ":hushed:": {
            uc_base: "1f62f",
            uc_full: "1f62f",
            shortnames: [],
            category: "people"
        },
        ":ice_cream:": {
            uc_base: "1f368",
            uc_full: "1f368",
            shortnames: [],
            category: "food"
        },
        ":ice_cube:": {
            uc_base: "1f9ca",
            uc_full: "1f9ca",
            shortnames: [],
            category: "food"
        },
        ":icecream:": {
            uc_base: "1f366",
            uc_full: "1f366",
            shortnames: [],
            category: "food"
        },
        ":id:": {
            uc_base: "1f194",
            uc_full: "1f194",
            shortnames: [],
            category: "symbols"
        },
        ":ideograph_advantage:": {
            uc_base: "1f250",
            uc_full: "1f250",
            shortnames: [],
            category: "symbols"
        },
        ":imp:": {
            uc_base: "1f47f",
            uc_full: "1f47f",
            shortnames: [],
            category: "people"
        },
        ":inbox_tray:": {
            uc_base: "1f4e5",
            uc_full: "1f4e5",
            shortnames: [],
            category: "objects"
        },
        ":incoming_envelope:": {
            uc_base: "1f4e8",
            uc_full: "1f4e8",
            shortnames: [],
            category: "objects"
        },
        ":innocent:": {
            uc_base: "1f607",
            uc_full: "1f607",
            shortnames: [],
            category: "people"
        },
        ":iphone:": {
            uc_base: "1f4f1",
            uc_full: "1f4f1",
            shortnames: [],
            category: "objects"
        },
        ":island:": {
            uc_base: "1f3dd",
            uc_full: "1f3dd-fe0f",
            shortnames: [":desert_island:"],
            category: "travel"
        },
        ":izakaya_lantern:": {
            uc_base: "1f3ee",
            uc_full: "1f3ee",
            shortnames: [],
            category: "objects"
        },
        ":jack_o_lantern:": {
            uc_base: "1f383",
            uc_full: "1f383",
            shortnames: [],
            category: "people"
        },
        ":japan:": {
            uc_base: "1f5fe",
            uc_full: "1f5fe",
            shortnames: [],
            category: "travel"
        },
        ":japanese_castle:": {
            uc_base: "1f3ef",
            uc_full: "1f3ef",
            shortnames: [],
            category: "travel"
        },
        ":japanese_goblin:": {
            uc_base: "1f47a",
            uc_full: "1f47a",
            shortnames: [],
            category: "people"
        },
        ":japanese_ogre:": {
            uc_base: "1f479",
            uc_full: "1f479",
            shortnames: [],
            category: "people"
        },
        ":jeans:": {
            uc_base: "1f456",
            uc_full: "1f456",
            shortnames: [],
            category: "people"
        },
        ":jigsaw:": {
            uc_base: "1f9e9",
            uc_full: "1f9e9",
            shortnames: [],
            category: "activity"
        },
        ":joy:": {
            uc_base: "1f602",
            uc_full: "1f602",
            shortnames: [],
            category: "people"
        },
        ":joy_cat:": {
            uc_base: "1f639",
            uc_full: "1f639",
            shortnames: [],
            category: "people"
        },
        ":joystick:": {
            uc_base: "1f579",
            uc_full: "1f579-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":kaaba:": {
            uc_base: "1f54b",
            uc_full: "1f54b",
            shortnames: [],
            category: "travel"
        },
        ":kangaroo:": {
            uc_base: "1f998",
            uc_full: "1f998",
            shortnames: [],
            category: "nature"
        },
        ":key2:": {
            uc_base: "1f5dd",
            uc_full: "1f5dd-fe0f",
            shortnames: [":old_key:"],
            category: "objects"
        },
        ":key:": {
            uc_base: "1f511",
            uc_full: "1f511",
            shortnames: [],
            category: "objects"
        },
        ":keycap_ten:": {
            uc_base: "1f51f",
            uc_full: "1f51f",
            shortnames: [],
            category: "symbols"
        },
        ":kimono:": {
            uc_base: "1f458",
            uc_full: "1f458",
            shortnames: [],
            category: "people"
        },
        ":kiss:": {
            uc_base: "1f48b",
            uc_full: "1f48b",
            shortnames: [],
            category: "people"
        },
        ":kissing:": {
            uc_base: "1f617",
            uc_full: "1f617",
            shortnames: [],
            category: "people"
        },
        ":kissing_cat:": {
            uc_base: "1f63d",
            uc_full: "1f63d",
            shortnames: [],
            category: "people"
        },
        ":kissing_closed_eyes:": {
            uc_base: "1f61a",
            uc_full: "1f61a",
            shortnames: [],
            category: "people"
        },
        ":kissing_heart:": {
            uc_base: "1f618",
            uc_full: "1f618",
            shortnames: [],
            category: "people"
        },
        ":kissing_smiling_eyes:": {
            uc_base: "1f619",
            uc_full: "1f619",
            shortnames: [],
            category: "people"
        },
        ":kite:": {
            uc_base: "1fa81",
            uc_full: "1fa81",
            shortnames: [],
            category: "activity"
        },
        ":kiwi:": {
            uc_base: "1f95d",
            uc_full: "1f95d",
            shortnames: [":kiwifruit:"],
            category: "food"
        },
        ":knife:": {
            uc_base: "1f52a",
            uc_full: "1f52a",
            shortnames: [],
            category: "objects"
        },
        ":koala:": {
            uc_base: "1f428",
            uc_full: "1f428",
            shortnames: [],
            category: "nature"
        },
        ":koko:": {
            uc_base: "1f201",
            uc_full: "1f201",
            shortnames: [],
            category: "symbols"
        },
        ":lab_coat:": {
            uc_base: "1f97c",
            uc_full: "1f97c",
            shortnames: [],
            category: "people"
        },
        ":label:": {
            uc_base: "1f3f7",
            uc_full: "1f3f7-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":lacrosse:": {
            uc_base: "1f94d",
            uc_full: "1f94d",
            shortnames: [],
            category: "activity"
        },
        ":large_blue_diamond:": {
            uc_base: "1f537",
            uc_full: "1f537",
            shortnames: [],
            category: "symbols"
        },
        ":large_orange_diamond:": {
            uc_base: "1f536",
            uc_full: "1f536",
            shortnames: [],
            category: "symbols"
        },
        ":last_quarter_moon:": {
            uc_base: "1f317",
            uc_full: "1f317",
            shortnames: [],
            category: "nature"
        },
        ":last_quarter_moon_with_face:": {
            uc_base: "1f31c",
            uc_full: "1f31c",
            shortnames: [],
            category: "nature"
        },
        ":laughing:": {
            uc_base: "1f606",
            uc_full: "1f606",
            shortnames: [":satisfied:"],
            category: "people"
        },
        ":leafy_green:": {
            uc_base: "1f96c",
            uc_full: "1f96c",
            shortnames: [],
            category: "food"
        },
        ":leaves:": {
            uc_base: "1f343",
            uc_full: "1f343",
            shortnames: [],
            category: "nature"
        },
        ":ledger:": {
            uc_base: "1f4d2",
            uc_full: "1f4d2",
            shortnames: [],
            category: "objects"
        },
        ":left_facing_fist:": {
            uc_base: "1f91b",
            uc_full: "1f91b",
            shortnames: [":left_fist:"],
            category: "people"
        },
        ":left_luggage:": {
            uc_base: "1f6c5",
            uc_full: "1f6c5",
            shortnames: [],
            category: "symbols"
        },
        ":leg:": {
            uc_base: "1f9b5",
            uc_full: "1f9b5",
            shortnames: [],
            category: "people"
        },
        ":lemon:": {
            uc_base: "1f34b",
            uc_full: "1f34b",
            shortnames: [],
            category: "food"
        },
        ":leopard:": {
            uc_base: "1f406",
            uc_full: "1f406",
            shortnames: [],
            category: "nature"
        },
        ":level_slider:": {
            uc_base: "1f39a",
            uc_full: "1f39a-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":levitate:": {
            uc_base: "1f574",
            uc_full: "1f574-fe0f",
            shortnames: [":man_in_business_suit_levitating:"],
            category: "people"
        },
        ":light_rail:": {
            uc_base: "1f688",
            uc_full: "1f688",
            shortnames: [],
            category: "travel"
        },
        ":link:": {
            uc_base: "1f517",
            uc_full: "1f517",
            shortnames: [],
            category: "objects"
        },
        ":lion_face:": {
            uc_base: "1f981",
            uc_full: "1f981",
            shortnames: [":lion:"],
            category: "nature"
        },
        ":lips:": {
            uc_base: "1f444",
            uc_full: "1f444",
            shortnames: [],
            category: "people"
        },
        ":lipstick:": {
            uc_base: "1f484",
            uc_full: "1f484",
            shortnames: [],
            category: "people"
        },
        ":lizard:": {
            uc_base: "1f98e",
            uc_full: "1f98e",
            shortnames: [],
            category: "nature"
        },
        ":llama:": {
            uc_base: "1f999",
            uc_full: "1f999",
            shortnames: [],
            category: "nature"
        },
        ":lobster:": {
            uc_base: "1f99e",
            uc_full: "1f99e",
            shortnames: [],
            category: "nature"
        },
        ":lock:": {
            uc_base: "1f512",
            uc_full: "1f512",
            shortnames: [],
            category: "objects"
        },
        ":lock_with_ink_pen:": {
            uc_base: "1f50f",
            uc_full: "1f50f",
            shortnames: [],
            category: "objects"
        },
        ":lollipop:": {
            uc_base: "1f36d",
            uc_full: "1f36d",
            shortnames: [],
            category: "food"
        },
        ":loud_sound:": {
            uc_base: "1f50a",
            uc_full: "1f50a",
            shortnames: [],
            category: "symbols"
        },
        ":loudspeaker:": {
            uc_base: "1f4e2",
            uc_full: "1f4e2",
            shortnames: [],
            category: "symbols"
        },
        ":love_hotel:": {
            uc_base: "1f3e9",
            uc_full: "1f3e9",
            shortnames: [],
            category: "travel"
        },
        ":love_letter:": {
            uc_base: "1f48c",
            uc_full: "1f48c",
            shortnames: [],
            category: "objects"
        },
        ":love_you_gesture:": {
            uc_base: "1f91f",
            uc_full: "1f91f",
            shortnames: [],
            category: "people"
        },
        ":low_brightness:": {
            uc_base: "1f505",
            uc_full: "1f505",
            shortnames: [],
            category: "symbols"
        },
        ":luggage:": {
            uc_base: "1f9f3",
            uc_full: "1f9f3",
            shortnames: [],
            category: "people"
        },
        ":lying_face:": {
            uc_base: "1f925",
            uc_full: "1f925",
            shortnames: [":liar:"],
            category: "people"
        },
        ":mag:": {
            uc_base: "1f50d",
            uc_full: "1f50d",
            shortnames: [],
            category: "objects"
        },
        ":mag_right:": {
            uc_base: "1f50e",
            uc_full: "1f50e",
            shortnames: [],
            category: "objects"
        },
        ":mage:": {
            uc_base: "1f9d9",
            uc_full: "1f9d9",
            shortnames: [],
            category: "people"
        },
        ":magnet:": {
            uc_base: "1f9f2",
            uc_full: "1f9f2",
            shortnames: [],
            category: "objects"
        },
        ":mahjong:": {
            uc_base: "1f004",
            uc_full: "1f004",
            shortnames: [],
            category: "symbols"
        },
        ":mailbox:": {
            uc_base: "1f4eb",
            uc_full: "1f4eb",
            shortnames: [],
            category: "objects"
        },
        ":mailbox_closed:": {
            uc_base: "1f4ea",
            uc_full: "1f4ea",
            shortnames: [],
            category: "objects"
        },
        ":mailbox_with_mail:": {
            uc_base: "1f4ec",
            uc_full: "1f4ec",
            shortnames: [],
            category: "objects"
        },
        ":mailbox_with_no_mail:": {
            uc_base: "1f4ed",
            uc_full: "1f4ed",
            shortnames: [],
            category: "objects"
        },
        ":man:": {
            uc_base: "1f468",
            uc_full: "1f468",
            shortnames: [],
            category: "people"
        },
        ":man_dancing:": {
            uc_base: "1f57a",
            uc_full: "1f57a",
            shortnames: [":male_dancer:"],
            category: "people"
        },
        ":man_in_tuxedo:": {
            uc_base: "1f935",
            uc_full: "1f935",
            shortnames: [],
            category: "people"
        },
        ":man_with_chinese_cap:": {
            uc_base: "1f472",
            uc_full: "1f472",
            shortnames: [":man_with_gua_pi_mao:"],
            category: "people"
        },
        ":mango:": {
            uc_base: "1f96d",
            uc_full: "1f96d",
            shortnames: [],
            category: "food"
        },
        ":mans_shoe:": {
            uc_base: "1f45e",
            uc_full: "1f45e",
            shortnames: [],
            category: "people"
        },
        ":manual_wheelchair:": {
            uc_base: "1f9bd",
            uc_full: "1f9bd",
            shortnames: [],
            category: "travel"
        },
        ":map:": {
            uc_base: "1f5fa",
            uc_full: "1f5fa-fe0f",
            shortnames: [":world_map:"],
            category: "travel"
        },
        ":maple_leaf:": {
            uc_base: "1f341",
            uc_full: "1f341",
            shortnames: [],
            category: "nature"
        },
        ":martial_arts_uniform:": {
            uc_base: "1f94b",
            uc_full: "1f94b",
            shortnames: [":karate_uniform:"],
            category: "activity"
        },
        ":mask:": {
            uc_base: "1f637",
            uc_full: "1f637",
            shortnames: [],
            category: "people"
        },
        ":mate:": {
            uc_base: "1f9c9",
            uc_full: "1f9c9",
            shortnames: [],
            category: "food"
        },
        ":meat_on_bone:": {
            uc_base: "1f356",
            uc_full: "1f356",
            shortnames: [],
            category: "food"
        },
        ":mechanical_arm:": {
            uc_base: "1f9be",
            uc_full: "1f9be",
            shortnames: [],
            category: "people"
        },
        ":mechanical_leg:": {
            uc_base: "1f9bf",
            uc_full: "1f9bf",
            shortnames: [],
            category: "people"
        },
        ":medal:": {
            uc_base: "1f3c5",
            uc_full: "1f3c5",
            shortnames: [":sports_medal:"],
            category: "activity"
        },
        ":mega:": {
            uc_base: "1f4e3",
            uc_full: "1f4e3",
            shortnames: [],
            category: "symbols"
        },
        ":melon:": {
            uc_base: "1f348",
            uc_full: "1f348",
            shortnames: [],
            category: "food"
        },
        ":menorah:": {
            uc_base: "1f54e",
            uc_full: "1f54e",
            shortnames: [],
            category: "symbols"
        },
        ":mens:": {
            uc_base: "1f6b9",
            uc_full: "1f6b9",
            shortnames: [],
            category: "symbols"
        },
        ":merperson:": {
            uc_base: "1f9dc",
            uc_full: "1f9dc",
            shortnames: [],
            category: "people"
        },
        ":metal:": {
            uc_base: "1f918",
            uc_full: "1f918",
            shortnames: [":sign_of_the_horns:"],
            category: "people"
        },
        ":metro:": {
            uc_base: "1f687",
            uc_full: "1f687",
            shortnames: [],
            category: "travel"
        },
        ":microbe:": {
            uc_base: "1f9a0",
            uc_full: "1f9a0",
            shortnames: [],
            category: "objects"
        },
        ":microphone2:": {
            uc_base: "1f399",
            uc_full: "1f399-fe0f",
            shortnames: [":studio_microphone:"],
            category: "objects"
        },
        ":microphone:": {
            uc_base: "1f3a4",
            uc_full: "1f3a4",
            shortnames: [],
            category: "activity"
        },
        ":microscope:": {
            uc_base: "1f52c",
            uc_full: "1f52c",
            shortnames: [],
            category: "objects"
        },
        ":middle_finger:": {
            uc_base: "1f595",
            uc_full: "1f595",
            shortnames: [":reversed_hand_with_middle_finger_extended:"],
            category: "people"
        },
        ":military_medal:": {
            uc_base: "1f396",
            uc_full: "1f396-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":milk:": {
            uc_base: "1f95b",
            uc_full: "1f95b",
            shortnames: [":glass_of_milk:"],
            category: "food"
        },
        ":milky_way:": {
            uc_base: "1f30c",
            uc_full: "1f30c",
            shortnames: [],
            category: "travel"
        },
        ":minibus:": {
            uc_base: "1f690",
            uc_full: "1f690",
            shortnames: [],
            category: "travel"
        },
        ":minidisc:": {
            uc_base: "1f4bd",
            uc_full: "1f4bd",
            shortnames: [],
            category: "objects"
        },
        ":mobile_phone_off:": {
            uc_base: "1f4f4",
            uc_full: "1f4f4",
            shortnames: [],
            category: "symbols"
        },
        ":money_mouth:": {
            uc_base: "1f911",
            uc_full: "1f911",
            shortnames: [":money_mouth_face:"],
            category: "people"
        },
        ":money_with_wings:": {
            uc_base: "1f4b8",
            uc_full: "1f4b8",
            shortnames: [],
            category: "objects"
        },
        ":moneybag:": {
            uc_base: "1f4b0",
            uc_full: "1f4b0",
            shortnames: [],
            category: "objects"
        },
        ":monkey:": {
            uc_base: "1f412",
            uc_full: "1f412",
            shortnames: [],
            category: "nature"
        },
        ":monkey_face:": {
            uc_base: "1f435",
            uc_full: "1f435",
            shortnames: [],
            category: "nature"
        },
        ":monorail:": {
            uc_base: "1f69d",
            uc_full: "1f69d",
            shortnames: [],
            category: "travel"
        },
        ":moon_cake:": {
            uc_base: "1f96e",
            uc_full: "1f96e",
            shortnames: [],
            category: "food"
        },
        ":mortar_board:": {
            uc_base: "1f393",
            uc_full: "1f393",
            shortnames: [],
            category: "people"
        },
        ":mosque:": {
            uc_base: "1f54c",
            uc_full: "1f54c",
            shortnames: [],
            category: "travel"
        },
        ":mosquito:": {
            uc_base: "1f99f",
            uc_full: "1f99f",
            shortnames: [],
            category: "nature"
        },
        ":motor_scooter:": {
            uc_base: "1f6f5",
            uc_full: "1f6f5",
            shortnames: [":motorbike:"],
            category: "travel"
        },
        ":motorboat:": {
            uc_base: "1f6e5",
            uc_full: "1f6e5-fe0f",
            shortnames: [],
            category: "travel"
        },
        ":motorcycle:": {
            uc_base: "1f3cd",
            uc_full: "1f3cd-fe0f",
            shortnames: [":racing_motorcycle:"],
            category: "travel"
        },
        ":motorized_wheelchair:": {
            uc_base: "1f9bc",
            uc_full: "1f9bc",
            shortnames: [],
            category: "travel"
        },
        ":motorway:": {
            uc_base: "1f6e3",
            uc_full: "1f6e3-fe0f",
            shortnames: [],
            category: "travel"
        },
        ":mount_fuji:": {
            uc_base: "1f5fb",
            uc_full: "1f5fb",
            shortnames: [],
            category: "travel"
        },
        ":mountain_cableway:": {
            uc_base: "1f6a0",
            uc_full: "1f6a0",
            shortnames: [],
            category: "travel"
        },
        ":mountain_railway:": {
            uc_base: "1f69e",
            uc_full: "1f69e",
            shortnames: [],
            category: "travel"
        },
        ":mountain_snow:": {
            uc_base: "1f3d4",
            uc_full: "1f3d4-fe0f",
            shortnames: [":snow_capped_mountain:"],
            category: "travel"
        },
        ":mouse2:": {
            uc_base: "1f401",
            uc_full: "1f401",
            shortnames: [],
            category: "nature"
        },
        ":mouse:": {
            uc_base: "1f42d",
            uc_full: "1f42d",
            shortnames: [],
            category: "nature"
        },
        ":mouse_three_button:": {
            uc_base: "1f5b1",
            uc_full: "1f5b1-fe0f",
            shortnames: [":three_button_mouse:"],
            category: "objects"
        },
        ":movie_camera:": {
            uc_base: "1f3a5",
            uc_full: "1f3a5",
            shortnames: [],
            category: "objects"
        },
        ":moyai:": {
            uc_base: "1f5ff",
            uc_full: "1f5ff",
            shortnames: [],
            category: "travel"
        },
        ":mrs_claus:": {
            uc_base: "1f936",
            uc_full: "1f936",
            shortnames: [":mother_christmas:"],
            category: "people"
        },
        ":muscle:": {
            uc_base: "1f4aa",
            uc_full: "1f4aa",
            shortnames: [],
            category: "people"
        },
        ":mushroom:": {
            uc_base: "1f344",
            uc_full: "1f344",
            shortnames: [],
            category: "nature"
        },
        ":musical_keyboard:": {
            uc_base: "1f3b9",
            uc_full: "1f3b9",
            shortnames: [],
            category: "activity"
        },
        ":musical_note:": {
            uc_base: "1f3b5",
            uc_full: "1f3b5",
            shortnames: [],
            category: "symbols"
        },
        ":musical_score:": {
            uc_base: "1f3bc",
            uc_full: "1f3bc",
            shortnames: [],
            category: "activity"
        },
        ":mute:": {
            uc_base: "1f507",
            uc_full: "1f507",
            shortnames: [],
            category: "symbols"
        },
        ":nail_care:": {
            uc_base: "1f485",
            uc_full: "1f485",
            shortnames: [],
            category: "people"
        },
        ":name_badge:": {
            uc_base: "1f4db",
            uc_full: "1f4db",
            shortnames: [],
            category: "symbols"
        },
        ":nauseated_face:": {
            uc_base: "1f922",
            uc_full: "1f922",
            shortnames: [":sick:"],
            category: "people"
        },
        ":nazar_amulet:": {
            uc_base: "1f9ff",
            uc_full: "1f9ff",
            shortnames: [],
            category: "objects"
        },
        ":necktie:": {
            uc_base: "1f454",
            uc_full: "1f454",
            shortnames: [],
            category: "people"
        },
        ":nerd:": {
            uc_base: "1f913",
            uc_full: "1f913",
            shortnames: [":nerd_face:"],
            category: "people"
        },
        ":neutral_face:": {
            uc_base: "1f610",
            uc_full: "1f610",
            shortnames: [],
            category: "people"
        },
        ":new:": {
            uc_base: "1f195",
            uc_full: "1f195",
            shortnames: [],
            category: "symbols"
        },
        ":new_moon:": {
            uc_base: "1f311",
            uc_full: "1f311",
            shortnames: [],
            category: "nature"
        },
        ":new_moon_with_face:": {
            uc_base: "1f31a",
            uc_full: "1f31a",
            shortnames: [],
            category: "nature"
        },
        ":newspaper2:": {
            uc_base: "1f5de",
            uc_full: "1f5de-fe0f",
            shortnames: [":rolled_up_newspaper:"],
            category: "objects"
        },
        ":newspaper:": {
            uc_base: "1f4f0",
            uc_full: "1f4f0",
            shortnames: [],
            category: "objects"
        },
        ":ng:": {
            uc_base: "1f196",
            uc_full: "1f196",
            shortnames: [],
            category: "symbols"
        },
        ":night_with_stars:": {
            uc_base: "1f303",
            uc_full: "1f303",
            shortnames: [],
            category: "travel"
        },
        ":no_bell:": {
            uc_base: "1f515",
            uc_full: "1f515",
            shortnames: [],
            category: "symbols"
        },
        ":no_bicycles:": {
            uc_base: "1f6b3",
            uc_full: "1f6b3",
            shortnames: [],
            category: "symbols"
        },
        ":no_entry_sign:": {
            uc_base: "1f6ab",
            uc_full: "1f6ab",
            shortnames: [],
            category: "symbols"
        },
        ":no_mobile_phones:": {
            uc_base: "1f4f5",
            uc_full: "1f4f5",
            shortnames: [],
            category: "symbols"
        },
        ":no_mouth:": {
            uc_base: "1f636",
            uc_full: "1f636",
            shortnames: [],
            category: "people"
        },
        ":no_pedestrians:": {
            uc_base: "1f6b7",
            uc_full: "1f6b7",
            shortnames: [],
            category: "symbols"
        },
        ":no_smoking:": {
            uc_base: "1f6ad",
            uc_full: "1f6ad",
            shortnames: [],
            category: "symbols"
        },
        ":non-potable_water:": {
            uc_base: "1f6b1",
            uc_full: "1f6b1",
            shortnames: [],
            category: "symbols"
        },
        ":nose:": {
            uc_base: "1f443",
            uc_full: "1f443",
            shortnames: [],
            category: "people"
        },
        ":notebook:": {
            uc_base: "1f4d3",
            uc_full: "1f4d3",
            shortnames: [],
            category: "objects"
        },
        ":notebook_with_decorative_cover:": {
            uc_base: "1f4d4",
            uc_full: "1f4d4",
            shortnames: [],
            category: "objects"
        },
        ":notepad_spiral:": {
            uc_base: "1f5d2",
            uc_full: "1f5d2-fe0f",
            shortnames: [":spiral_note_pad:"],
            category: "objects"
        },
        ":notes:": {
            uc_base: "1f3b6",
            uc_full: "1f3b6",
            shortnames: [],
            category: "symbols"
        },
        ":nut_and_bolt:": {
            uc_base: "1f529",
            uc_full: "1f529",
            shortnames: [],
            category: "objects"
        },
        ":o2:": {
            uc_base: "1f17e",
            uc_full: "1f17e-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":ocean:": {
            uc_base: "1f30a",
            uc_full: "1f30a",
            shortnames: [],
            category: "nature"
        },
        ":octagonal_sign:": {
            uc_base: "1f6d1",
            uc_full: "1f6d1",
            shortnames: [":stop_sign:"],
            category: "symbols"
        },
        ":octopus:": {
            uc_base: "1f419",
            uc_full: "1f419",
            shortnames: [],
            category: "nature"
        },
        ":oden:": {
            uc_base: "1f362",
            uc_full: "1f362",
            shortnames: [],
            category: "food"
        },
        ":office:": {
            uc_base: "1f3e2",
            uc_full: "1f3e2",
            shortnames: [],
            category: "travel"
        },
        ":oil:": {
            uc_base: "1f6e2",
            uc_full: "1f6e2-fe0f",
            shortnames: [":oil_drum:"],
            category: "objects"
        },
        ":ok:": {
            uc_base: "1f197",
            uc_full: "1f197",
            shortnames: [],
            category: "symbols"
        },
        ":ok_hand:": {
            uc_base: "1f44c",
            uc_full: "1f44c",
            shortnames: [],
            category: "people"
        },
        ":older_adult:": {
            uc_base: "1f9d3",
            uc_full: "1f9d3",
            shortnames: [],
            category: "people"
        },
        ":older_man:": {
            uc_base: "1f474",
            uc_full: "1f474",
            shortnames: [],
            category: "people"
        },
        ":older_woman:": {
            uc_base: "1f475",
            uc_full: "1f475",
            shortnames: [":grandma:"],
            category: "people"
        },
        ":om_symbol:": {
            uc_base: "1f549",
            uc_full: "1f549-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":on:": {
            uc_base: "1f51b",
            uc_full: "1f51b",
            shortnames: [],
            category: "symbols"
        },
        ":oncoming_automobile:": {
            uc_base: "1f698",
            uc_full: "1f698",
            shortnames: [],
            category: "travel"
        },
        ":oncoming_bus:": {
            uc_base: "1f68d",
            uc_full: "1f68d",
            shortnames: [],
            category: "travel"
        },
        ":oncoming_police_car:": {
            uc_base: "1f694",
            uc_full: "1f694",
            shortnames: [],
            category: "travel"
        },
        ":oncoming_taxi:": {
            uc_base: "1f696",
            uc_full: "1f696",
            shortnames: [],
            category: "travel"
        },
        ":one_piece_swimsuit:": {
            uc_base: "1fa71",
            uc_full: "1fa71",
            shortnames: [],
            category: "people"
        },
        ":onion:": {
            uc_base: "1f9c5",
            uc_full: "1f9c5",
            shortnames: [],
            category: "food"
        },
        ":open_file_folder:": {
            uc_base: "1f4c2",
            uc_full: "1f4c2",
            shortnames: [],
            category: "objects"
        },
        ":open_hands:": {
            uc_base: "1f450",
            uc_full: "1f450",
            shortnames: [],
            category: "people"
        },
        ":open_mouth:": {
            uc_base: "1f62e",
            uc_full: "1f62e",
            shortnames: [],
            category: "people"
        },
        ":orange_book:": {
            uc_base: "1f4d9",
            uc_full: "1f4d9",
            shortnames: [],
            category: "objects"
        },
        ":orange_circle:": {
            uc_base: "1f7e0",
            uc_full: "1f7e0",
            shortnames: [],
            category: "symbols"
        },
        ":orange_heart:": {
            uc_base: "1f9e1",
            uc_full: "1f9e1",
            shortnames: [],
            category: "symbols"
        },
        ":orange_square:": {
            uc_base: "1f7e7",
            uc_full: "1f7e7",
            shortnames: [],
            category: "symbols"
        },
        ":orangutan:": {
            uc_base: "1f9a7",
            uc_full: "1f9a7",
            shortnames: [],
            category: "nature"
        },
        ":otter:": {
            uc_base: "1f9a6",
            uc_full: "1f9a6",
            shortnames: [],
            category: "nature"
        },
        ":outbox_tray:": {
            uc_base: "1f4e4",
            uc_full: "1f4e4",
            shortnames: [],
            category: "objects"
        },
        ":owl:": {
            uc_base: "1f989",
            uc_full: "1f989",
            shortnames: [],
            category: "nature"
        },
        ":ox:": {
            uc_base: "1f402",
            uc_full: "1f402",
            shortnames: [],
            category: "nature"
        },
        ":oyster:": {
            uc_base: "1f9aa",
            uc_full: "1f9aa",
            shortnames: [],
            category: "nature"
        },
        ":package:": {
            uc_base: "1f4e6",
            uc_full: "1f4e6",
            shortnames: [],
            category: "objects"
        },
        ":page_facing_up:": {
            uc_base: "1f4c4",
            uc_full: "1f4c4",
            shortnames: [],
            category: "objects"
        },
        ":page_with_curl:": {
            uc_base: "1f4c3",
            uc_full: "1f4c3",
            shortnames: [],
            category: "objects"
        },
        ":pager:": {
            uc_base: "1f4df",
            uc_full: "1f4df",
            shortnames: [],
            category: "objects"
        },
        ":paintbrush:": {
            uc_base: "1f58c",
            uc_full: "1f58c-fe0f",
            shortnames: [":lower_left_paintbrush:"],
            category: "objects"
        },
        ":palm_tree:": {
            uc_base: "1f334",
            uc_full: "1f334",
            shortnames: [],
            category: "nature"
        },
        ":palms_up_together:": {
            uc_base: "1f932",
            uc_full: "1f932",
            shortnames: [],
            category: "people"
        },
        ":pancakes:": {
            uc_base: "1f95e",
            uc_full: "1f95e",
            shortnames: [],
            category: "food"
        },
        ":panda_face:": {
            uc_base: "1f43c",
            uc_full: "1f43c",
            shortnames: [],
            category: "nature"
        },
        ":paperclip:": {
            uc_base: "1f4ce",
            uc_full: "1f4ce",
            shortnames: [],
            category: "objects"
        },
        ":paperclips:": {
            uc_base: "1f587",
            uc_full: "1f587-fe0f",
            shortnames: [":linked_paperclips:"],
            category: "objects"
        },
        ":parachute:": {
            uc_base: "1fa82",
            uc_full: "1fa82",
            shortnames: [],
            category: "activity"
        },
        ":park:": {
            uc_base: "1f3de",
            uc_full: "1f3de-fe0f",
            shortnames: [":national_park:"],
            category: "travel"
        },
        ":parking:": {
            uc_base: "1f17f",
            uc_full: "1f17f-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":parrot:": {
            uc_base: "1f99c",
            uc_full: "1f99c",
            shortnames: [],
            category: "nature"
        },
        ":partying_face:": {
            uc_base: "1f973",
            uc_full: "1f973",
            shortnames: [],
            category: "people"
        },
        ":passport_control:": {
            uc_base: "1f6c2",
            uc_full: "1f6c2",
            shortnames: [],
            category: "symbols"
        },
        ":peach:": {
            uc_base: "1f351",
            uc_full: "1f351",
            shortnames: [],
            category: "food"
        },
        ":peacock:": {
            uc_base: "1f99a",
            uc_full: "1f99a",
            shortnames: [],
            category: "nature"
        },
        ":peanuts:": {
            uc_base: "1f95c",
            uc_full: "1f95c",
            shortnames: [":shelled_peanut:"],
            category: "food"
        },
        ":pear:": {
            uc_base: "1f350",
            uc_full: "1f350",
            shortnames: [],
            category: "food"
        },
        ":pen_ballpoint:": {
            uc_base: "1f58a",
            uc_full: "1f58a-fe0f",
            shortnames: [":lower_left_ballpoint_pen:"],
            category: "objects"
        },
        ":pen_fountain:": {
            uc_base: "1f58b",
            uc_full: "1f58b-fe0f",
            shortnames: [":lower_left_fountain_pen:"],
            category: "objects"
        },
        ":pencil:": {
            uc_base: "1f4dd",
            uc_full: "1f4dd",
            shortnames: [":memo:"],
            category: "objects"
        },
        ":penguin:": {
            uc_base: "1f427",
            uc_full: "1f427",
            shortnames: [],
            category: "nature"
        },
        ":pensive:": {
            uc_base: "1f614",
            uc_full: "1f614",
            shortnames: [],
            category: "people"
        },
        ":people_with_bunny_ears_partying:": {
            uc_base: "1f46f",
            uc_full: "1f46f",
            shortnames: [":dancers:"],
            category: "people"
        },
        ":people_wrestling:": {
            uc_base: "1f93c",
            uc_full: "1f93c",
            shortnames: [":wrestlers:", ":wrestling:"],
            category: "activity"
        },
        ":performing_arts:": {
            uc_base: "1f3ad",
            uc_full: "1f3ad",
            shortnames: [],
            category: "activity"
        },
        ":persevere:": {
            uc_base: "1f623",
            uc_full: "1f623",
            shortnames: [],
            category: "people"
        },
        ":person_biking:": {
            uc_base: "1f6b4",
            uc_full: "1f6b4",
            shortnames: [":bicyclist:"],
            category: "activity"
        },
        ":person_bowing:": {
            uc_base: "1f647",
            uc_full: "1f647",
            shortnames: [":bow:"],
            category: "people"
        },
        ":person_climbing:": {
            uc_base: "1f9d7",
            uc_full: "1f9d7",
            shortnames: [],
            category: "activity"
        },
        ":person_doing_cartwheel:": {
            uc_base: "1f938",
            uc_full: "1f938",
            shortnames: [":cartwheel:"],
            category: "activity"
        },
        ":person_facepalming:": {
            uc_base: "1f926",
            uc_full: "1f926",
            shortnames: [":face_palm:", ":facepalm:"],
            category: "people"
        },
        ":person_fencing:": {
            uc_base: "1f93a",
            uc_full: "1f93a",
            shortnames: [":fencer:", ":fencing:"],
            category: "activity"
        },
        ":person_frowning:": {
            uc_base: "1f64d",
            uc_full: "1f64d",
            shortnames: [],
            category: "people"
        },
        ":person_gesturing_no:": {
            uc_base: "1f645",
            uc_full: "1f645",
            shortnames: [":no_good:"],
            category: "people"
        },
        ":person_gesturing_ok:": {
            uc_base: "1f646",
            uc_full: "1f646",
            shortnames: [":ok_woman:"],
            category: "people"
        },
        ":person_getting_haircut:": {
            uc_base: "1f487",
            uc_full: "1f487",
            shortnames: [":haircut:"],
            category: "people"
        },
        ":person_getting_massage:": {
            uc_base: "1f486",
            uc_full: "1f486",
            shortnames: [":massage:"],
            category: "people"
        },
        ":person_golfing:": {
            uc_base: "1f3cc",
            uc_full: "1f3cc-fe0f",
            shortnames: [":golfer:"],
            category: "activity"
        },
        ":person_in_lotus_position:": {
            uc_base: "1f9d8",
            uc_full: "1f9d8",
            shortnames: [],
            category: "activity"
        },
        ":person_in_steamy_room:": {
            uc_base: "1f9d6",
            uc_full: "1f9d6",
            shortnames: [],
            category: "people"
        },
        ":person_juggling:": {
            uc_base: "1f939",
            uc_full: "1f939",
            shortnames: [":juggling:", ":juggler:"],
            category: "activity"
        },
        ":person_kneeling:": {
            uc_base: "1f9ce",
            uc_full: "1f9ce",
            shortnames: [],
            category: "people"
        },
        ":person_lifting_weights:": {
            uc_base: "1f3cb",
            uc_full: "1f3cb-fe0f",
            shortnames: [":lifter:", ":weight_lifter:"],
            category: "activity"
        },
        ":person_mountain_biking:": {
            uc_base: "1f6b5",
            uc_full: "1f6b5",
            shortnames: [":mountain_bicyclist:"],
            category: "activity"
        },
        ":person_playing_handball:": {
            uc_base: "1f93e",
            uc_full: "1f93e",
            shortnames: [":handball:"],
            category: "activity"
        },
        ":person_playing_water_polo:": {
            uc_base: "1f93d",
            uc_full: "1f93d",
            shortnames: [":water_polo:"],
            category: "activity"
        },
        ":person_pouting:": {
            uc_base: "1f64e",
            uc_full: "1f64e",
            shortnames: [":person_with_pouting_face:"],
            category: "people"
        },
        ":person_raising_hand:": {
            uc_base: "1f64b",
            uc_full: "1f64b",
            shortnames: [":raising_hand:"],
            category: "people"
        },
        ":person_rowing_boat:": {
            uc_base: "1f6a3",
            uc_full: "1f6a3",
            shortnames: [":rowboat:"],
            category: "activity"
        },
        ":person_running:": {
            uc_base: "1f3c3",
            uc_full: "1f3c3",
            shortnames: [":runner:"],
            category: "people"
        },
        ":person_shrugging:": {
            uc_base: "1f937",
            uc_full: "1f937",
            shortnames: [":shrug:"],
            category: "people"
        },
        ":person_standing:": {
            uc_base: "1f9cd",
            uc_full: "1f9cd",
            shortnames: [],
            category: "people"
        },
        ":person_surfing:": {
            uc_base: "1f3c4",
            uc_full: "1f3c4",
            shortnames: [":surfer:"],
            category: "activity"
        },
        ":person_swimming:": {
            uc_base: "1f3ca",
            uc_full: "1f3ca",
            shortnames: [":swimmer:"],
            category: "activity"
        },
        ":person_tipping_hand:": {
            uc_base: "1f481",
            uc_full: "1f481",
            shortnames: [":information_desk_person:"],
            category: "people"
        },
        ":person_walking:": {
            uc_base: "1f6b6",
            uc_full: "1f6b6",
            shortnames: [":walking:"],
            category: "people"
        },
        ":person_wearing_turban:": {
            uc_base: "1f473",
            uc_full: "1f473",
            shortnames: [":man_with_turban:"],
            category: "people"
        },
        ":petri_dish:": {
            uc_base: "1f9eb",
            uc_full: "1f9eb",
            shortnames: [],
            category: "objects"
        },
        ":pie:": {
            uc_base: "1f967",
            uc_full: "1f967",
            shortnames: [],
            category: "food"
        },
        ":pig2:": {
            uc_base: "1f416",
            uc_full: "1f416",
            shortnames: [],
            category: "nature"
        },
        ":pig:": {
            uc_base: "1f437",
            uc_full: "1f437",
            shortnames: [],
            category: "nature"
        },
        ":pig_nose:": {
            uc_base: "1f43d",
            uc_full: "1f43d",
            shortnames: [],
            category: "nature"
        },
        ":pill:": {
            uc_base: "1f48a",
            uc_full: "1f48a",
            shortnames: [],
            category: "objects"
        },
        ":pinching_hand:": {
            uc_base: "1f90f",
            uc_full: "1f90f",
            shortnames: [],
            category: "people"
        },
        ":pineapple:": {
            uc_base: "1f34d",
            uc_full: "1f34d",
            shortnames: [],
            category: "food"
        },
        ":ping_pong:": {
            uc_base: "1f3d3",
            uc_full: "1f3d3",
            shortnames: [":table_tennis:"],
            category: "activity"
        },
        ":pizza:": {
            uc_base: "1f355",
            uc_full: "1f355",
            shortnames: [],
            category: "food"
        },
        ":place_of_worship:": {
            uc_base: "1f6d0",
            uc_full: "1f6d0",
            shortnames: [":worship_symbol:"],
            category: "symbols"
        },
        ":pleading_face:": {
            uc_base: "1f97a",
            uc_full: "1f97a",
            shortnames: [],
            category: "people"
        },
        ":point_down:": {
            uc_base: "1f447",
            uc_full: "1f447",
            shortnames: [],
            category: "people"
        },
        ":point_left:": {
            uc_base: "1f448",
            uc_full: "1f448",
            shortnames: [],
            category: "people"
        },
        ":point_right:": {
            uc_base: "1f449",
            uc_full: "1f449",
            shortnames: [],
            category: "people"
        },
        ":point_up_2:": {
            uc_base: "1f446",
            uc_full: "1f446",
            shortnames: [],
            category: "people"
        },
        ":police_car:": {
            uc_base: "1f693",
            uc_full: "1f693",
            shortnames: [],
            category: "travel"
        },
        ":police_officer:": {
            uc_base: "1f46e",
            uc_full: "1f46e",
            shortnames: [":cop:"],
            category: "people"
        },
        ":poodle:": {
            uc_base: "1f429",
            uc_full: "1f429",
            shortnames: [],
            category: "nature"
        },
        ":poop:": {
            uc_base: "1f4a9",
            uc_full: "1f4a9",
            shortnames: [":shit:", ":hankey:", ":poo:"],
            category: "people"
        },
        ":popcorn:": {
            uc_base: "1f37f",
            uc_full: "1f37f",
            shortnames: [],
            category: "food"
        },
        ":post_office:": {
            uc_base: "1f3e3",
            uc_full: "1f3e3",
            shortnames: [],
            category: "travel"
        },
        ":postal_horn:": {
            uc_base: "1f4ef",
            uc_full: "1f4ef",
            shortnames: [],
            category: "objects"
        },
        ":postbox:": {
            uc_base: "1f4ee",
            uc_full: "1f4ee",
            shortnames: [],
            category: "objects"
        },
        ":potable_water:": {
            uc_base: "1f6b0",
            uc_full: "1f6b0",
            shortnames: [],
            category: "objects"
        },
        ":potato:": {
            uc_base: "1f954",
            uc_full: "1f954",
            shortnames: [],
            category: "food"
        },
        ":pouch:": {
            uc_base: "1f45d",
            uc_full: "1f45d",
            shortnames: [],
            category: "people"
        },
        ":poultry_leg:": {
            uc_base: "1f357",
            uc_full: "1f357",
            shortnames: [],
            category: "food"
        },
        ":pound:": {
            uc_base: "1f4b7",
            uc_full: "1f4b7",
            shortnames: [],
            category: "objects"
        },
        ":pouting_cat:": {
            uc_base: "1f63e",
            uc_full: "1f63e",
            shortnames: [],
            category: "people"
        },
        ":pray:": {
            uc_base: "1f64f",
            uc_full: "1f64f",
            shortnames: [],
            category: "people"
        },
        ":prayer_beads:": {
            uc_base: "1f4ff",
            uc_full: "1f4ff",
            shortnames: [],
            category: "objects"
        },
        ":pregnant_woman:": {
            uc_base: "1f930",
            uc_full: "1f930",
            shortnames: [":expecting_woman:"],
            category: "people"
        },
        ":pretzel:": {
            uc_base: "1f968",
            uc_full: "1f968",
            shortnames: [],
            category: "food"
        },
        ":prince:": {
            uc_base: "1f934",
            uc_full: "1f934",
            shortnames: [],
            category: "people"
        },
        ":princess:": {
            uc_base: "1f478",
            uc_full: "1f478",
            shortnames: [],
            category: "people"
        },
        ":printer:": {
            uc_base: "1f5a8",
            uc_full: "1f5a8-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":probing_cane:": {
            uc_base: "1f9af",
            uc_full: "1f9af",
            shortnames: [],
            category: "objects"
        },
        ":projector:": {
            uc_base: "1f4fd",
            uc_full: "1f4fd-fe0f",
            shortnames: [":film_projector:"],
            category: "objects"
        },
        ":punch:": {
            uc_base: "1f44a",
            uc_full: "1f44a",
            shortnames: [],
            category: "people"
        },
        ":purple_circle:": {
            uc_base: "1f7e3",
            uc_full: "1f7e3",
            shortnames: [],
            category: "symbols"
        },
        ":purple_heart:": {
            uc_base: "1f49c",
            uc_full: "1f49c",
            shortnames: [],
            category: "symbols"
        },
        ":purple_square:": {
            uc_base: "1f7ea",
            uc_full: "1f7ea",
            shortnames: [],
            category: "symbols"
        },
        ":purse:": {
            uc_base: "1f45b",
            uc_full: "1f45b",
            shortnames: [],
            category: "people"
        },
        ":pushpin:": {
            uc_base: "1f4cc",
            uc_full: "1f4cc",
            shortnames: [],
            category: "objects"
        },
        ":put_litter_in_its_place:": {
            uc_base: "1f6ae",
            uc_full: "1f6ae",
            shortnames: [],
            category: "symbols"
        },
        ":rabbit2:": {
            uc_base: "1f407",
            uc_full: "1f407",
            shortnames: [],
            category: "nature"
        },
        ":rabbit:": {
            uc_base: "1f430",
            uc_full: "1f430",
            shortnames: [],
            category: "nature"
        },
        ":raccoon:": {
            uc_base: "1f99d",
            uc_full: "1f99d",
            shortnames: [],
            category: "nature"
        },
        ":race_car:": {
            uc_base: "1f3ce",
            uc_full: "1f3ce-fe0f",
            shortnames: [":racing_car:"],
            category: "travel"
        },
        ":racehorse:": {
            uc_base: "1f40e",
            uc_full: "1f40e",
            shortnames: [],
            category: "nature"
        },
        ":radio:": {
            uc_base: "1f4fb",
            uc_full: "1f4fb",
            shortnames: [],
            category: "objects"
        },
        ":radio_button:": {
            uc_base: "1f518",
            uc_full: "1f518",
            shortnames: [],
            category: "symbols"
        },
        ":rage:": {
            uc_base: "1f621",
            uc_full: "1f621",
            shortnames: [],
            category: "people"
        },
        ":railway_car:": {
            uc_base: "1f683",
            uc_full: "1f683",
            shortnames: [],
            category: "travel"
        },
        ":railway_track:": {
            uc_base: "1f6e4",
            uc_full: "1f6e4-fe0f",
            shortnames: [":railroad_track:"],
            category: "travel"
        },
        ":rainbow:": {
            uc_base: "1f308",
            uc_full: "1f308",
            shortnames: [],
            category: "nature"
        },
        ":raised_back_of_hand:": {
            uc_base: "1f91a",
            uc_full: "1f91a",
            shortnames: [":back_of_hand:"],
            category: "people"
        },
        ":raised_hands:": {
            uc_base: "1f64c",
            uc_full: "1f64c",
            shortnames: [],
            category: "people"
        },
        ":ram:": {
            uc_base: "1f40f",
            uc_full: "1f40f",
            shortnames: [],
            category: "nature"
        },
        ":ramen:": {
            uc_base: "1f35c",
            uc_full: "1f35c",
            shortnames: [],
            category: "food"
        },
        ":rat:": {
            uc_base: "1f400",
            uc_full: "1f400",
            shortnames: [],
            category: "nature"
        },
        ":razor:": {
            uc_base: "1fa92",
            uc_full: "1fa92",
            shortnames: [],
            category: "objects"
        },
        ":receipt:": {
            uc_base: "1f9fe",
            uc_full: "1f9fe",
            shortnames: [],
            category: "objects"
        },
        ":red_car:": {
            uc_base: "1f697",
            uc_full: "1f697",
            shortnames: [],
            category: "travel"
        },
        ":red_circle:": {
            uc_base: "1f534",
            uc_full: "1f534",
            shortnames: [],
            category: "symbols"
        },
        ":red_envelope:": {
            uc_base: "1f9e7",
            uc_full: "1f9e7",
            shortnames: [],
            category: "objects"
        },
        ":red_haired:": {
            uc_base: "1f9b0",
            uc_full: "1f9b0",
            shortnames: [],
            category: "people"
        },
        ":red_square:": {
            uc_base: "1f7e5",
            uc_full: "1f7e5",
            shortnames: [],
            category: "symbols"
        },
        ":regional_indicator_a:": {
            uc_base: "1f1e6",
            uc_full: "1f1e6",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_b:": {
            uc_base: "1f1e7",
            uc_full: "1f1e7",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_c:": {
            uc_base: "1f1e8",
            uc_full: "1f1e8",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_d:": {
            uc_base: "1f1e9",
            uc_full: "1f1e9",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_e:": {
            uc_base: "1f1ea",
            uc_full: "1f1ea",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_f:": {
            uc_base: "1f1eb",
            uc_full: "1f1eb",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_g:": {
            uc_base: "1f1ec",
            uc_full: "1f1ec",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_h:": {
            uc_base: "1f1ed",
            uc_full: "1f1ed",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_i:": {
            uc_base: "1f1ee",
            uc_full: "1f1ee",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_j:": {
            uc_base: "1f1ef",
            uc_full: "1f1ef",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_k:": {
            uc_base: "1f1f0",
            uc_full: "1f1f0",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_l:": {
            uc_base: "1f1f1",
            uc_full: "1f1f1",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_m:": {
            uc_base: "1f1f2",
            uc_full: "1f1f2",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_n:": {
            uc_base: "1f1f3",
            uc_full: "1f1f3",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_o:": {
            uc_base: "1f1f4",
            uc_full: "1f1f4",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_p:": {
            uc_base: "1f1f5",
            uc_full: "1f1f5",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_q:": {
            uc_base: "1f1f6",
            uc_full: "1f1f6",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_r:": {
            uc_base: "1f1f7",
            uc_full: "1f1f7",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_s:": {
            uc_base: "1f1f8",
            uc_full: "1f1f8",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_t:": {
            uc_base: "1f1f9",
            uc_full: "1f1f9",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_u:": {
            uc_base: "1f1fa",
            uc_full: "1f1fa",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_v:": {
            uc_base: "1f1fb",
            uc_full: "1f1fb",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_w:": {
            uc_base: "1f1fc",
            uc_full: "1f1fc",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_x:": {
            uc_base: "1f1fd",
            uc_full: "1f1fd",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_y:": {
            uc_base: "1f1fe",
            uc_full: "1f1fe",
            shortnames: [],
            category: "regional"
        },
        ":regional_indicator_z:": {
            uc_base: "1f1ff",
            uc_full: "1f1ff",
            shortnames: [],
            category: "regional"
        },
        ":relieved:": {
            uc_base: "1f60c",
            uc_full: "1f60c",
            shortnames: [],
            category: "people"
        },
        ":reminder_ribbon:": {
            uc_base: "1f397",
            uc_full: "1f397-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":repeat:": {
            uc_base: "1f501",
            uc_full: "1f501",
            shortnames: [],
            category: "symbols"
        },
        ":repeat_one:": {
            uc_base: "1f502",
            uc_full: "1f502",
            shortnames: [],
            category: "symbols"
        },
        ":restroom:": {
            uc_base: "1f6bb",
            uc_full: "1f6bb",
            shortnames: [],
            category: "symbols"
        },
        ":revolving_hearts:": {
            uc_base: "1f49e",
            uc_full: "1f49e",
            shortnames: [],
            category: "symbols"
        },
        ":rhino:": {
            uc_base: "1f98f",
            uc_full: "1f98f",
            shortnames: [":rhinoceros:"],
            category: "nature"
        },
        ":ribbon:": {
            uc_base: "1f380",
            uc_full: "1f380",
            shortnames: [],
            category: "objects"
        },
        ":rice:": {
            uc_base: "1f35a",
            uc_full: "1f35a",
            shortnames: [],
            category: "food"
        },
        ":rice_ball:": {
            uc_base: "1f359",
            uc_full: "1f359",
            shortnames: [],
            category: "food"
        },
        ":rice_cracker:": {
            uc_base: "1f358",
            uc_full: "1f358",
            shortnames: [],
            category: "food"
        },
        ":rice_scene:": {
            uc_base: "1f391",
            uc_full: "1f391",
            shortnames: [],
            category: "travel"
        },
        ":right_facing_fist:": {
            uc_base: "1f91c",
            uc_full: "1f91c",
            shortnames: [":right_fist:"],
            category: "people"
        },
        ":ring:": {
            uc_base: "1f48d",
            uc_full: "1f48d",
            shortnames: [],
            category: "people"
        },
        ":ringed_planet:": {
            uc_base: "1fa90",
            uc_full: "1fa90",
            shortnames: [],
            category: "nature"
        },
        ":robot:": {
            uc_base: "1f916",
            uc_full: "1f916",
            shortnames: [":robot_face:"],
            category: "people"
        },
        ":rocket:": {
            uc_base: "1f680",
            uc_full: "1f680",
            shortnames: [],
            category: "travel"
        },
        ":rofl:": {
            uc_base: "1f923",
            uc_full: "1f923",
            shortnames: [":rolling_on_the_floor_laughing:"],
            category: "people"
        },
        ":roll_of_paper:": {
            uc_base: "1f9fb",
            uc_full: "1f9fb",
            shortnames: [],
            category: "objects"
        },
        ":roller_coaster:": {
            uc_base: "1f3a2",
            uc_full: "1f3a2",
            shortnames: [],
            category: "travel"
        },
        ":rolling_eyes:": {
            uc_base: "1f644",
            uc_full: "1f644",
            shortnames: [":face_with_rolling_eyes:"],
            category: "people"
        },
        ":rooster:": {
            uc_base: "1f413",
            uc_full: "1f413",
            shortnames: [],
            category: "nature"
        },
        ":rose:": {
            uc_base: "1f339",
            uc_full: "1f339",
            shortnames: [],
            category: "nature"
        },
        ":rosette:": {
            uc_base: "1f3f5",
            uc_full: "1f3f5-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":rotating_light:": {
            uc_base: "1f6a8",
            uc_full: "1f6a8",
            shortnames: [],
            category: "travel"
        },
        ":round_pushpin:": {
            uc_base: "1f4cd",
            uc_full: "1f4cd",
            shortnames: [],
            category: "objects"
        },
        ":rugby_football:": {
            uc_base: "1f3c9",
            uc_full: "1f3c9",
            shortnames: [],
            category: "activity"
        },
        ":running_shirt_with_sash:": {
            uc_base: "1f3bd",
            uc_full: "1f3bd",
            shortnames: [],
            category: "activity"
        },
        ":sa:": {
            uc_base: "1f202",
            uc_full: "1f202-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":safety_pin:": {
            uc_base: "1f9f7",
            uc_full: "1f9f7",
            shortnames: [],
            category: "objects"
        },
        ":safety_vest:": {
            uc_base: "1f9ba",
            uc_full: "1f9ba",
            shortnames: [],
            category: "people"
        },
        ":sake:": {
            uc_base: "1f376",
            uc_full: "1f376",
            shortnames: [],
            category: "food"
        },
        ":salad:": {
            uc_base: "1f957",
            uc_full: "1f957",
            shortnames: [":green_salad:"],
            category: "food"
        },
        ":salt:": {
            uc_base: "1f9c2",
            uc_full: "1f9c2",
            shortnames: [],
            category: "food"
        },
        ":sandal:": {
            uc_base: "1f461",
            uc_full: "1f461",
            shortnames: [],
            category: "people"
        },
        ":sandwich:": {
            uc_base: "1f96a",
            uc_full: "1f96a",
            shortnames: [],
            category: "food"
        },
        ":santa:": {
            uc_base: "1f385",
            uc_full: "1f385",
            shortnames: [],
            category: "people"
        },
        ":sari:": {
            uc_base: "1f97b",
            uc_full: "1f97b",
            shortnames: [],
            category: "people"
        },
        ":satellite:": {
            uc_base: "1f4e1",
            uc_full: "1f4e1",
            shortnames: [],
            category: "objects"
        },
        ":satellite_orbital:": {
            uc_base: "1f6f0",
            uc_full: "1f6f0-fe0f",
            shortnames: [],
            category: "travel"
        },
        ":sauropod:": {
            uc_base: "1f995",
            uc_full: "1f995",
            shortnames: [],
            category: "nature"
        },
        ":saxophone:": {
            uc_base: "1f3b7",
            uc_full: "1f3b7",
            shortnames: [],
            category: "activity"
        },
        ":scarf:": {
            uc_base: "1f9e3",
            uc_full: "1f9e3",
            shortnames: [],
            category: "people"
        },
        ":school:": {
            uc_base: "1f3eb",
            uc_full: "1f3eb",
            shortnames: [],
            category: "travel"
        },
        ":school_satchel:": {
            uc_base: "1f392",
            uc_full: "1f392",
            shortnames: [],
            category: "people"
        },
        ":scooter:": {
            uc_base: "1f6f4",
            uc_full: "1f6f4",
            shortnames: [],
            category: "travel"
        },
        ":scorpion:": {
            uc_base: "1f982",
            uc_full: "1f982",
            shortnames: [],
            category: "nature"
        },
        ":scream:": {
            uc_base: "1f631",
            uc_full: "1f631",
            shortnames: [],
            category: "people"
        },
        ":scream_cat:": {
            uc_base: "1f640",
            uc_full: "1f640",
            shortnames: [],
            category: "people"
        },
        ":scroll:": {
            uc_base: "1f4dc",
            uc_full: "1f4dc",
            shortnames: [],
            category: "objects"
        },
        ":seat:": {
            uc_base: "1f4ba",
            uc_full: "1f4ba",
            shortnames: [],
            category: "travel"
        },
        ":second_place:": {
            uc_base: "1f948",
            uc_full: "1f948",
            shortnames: [":second_place_medal:"],
            category: "activity"
        },
        ":see_no_evil:": {
            uc_base: "1f648",
            uc_full: "1f648",
            shortnames: [],
            category: "nature"
        },
        ":seedling:": {
            uc_base: "1f331",
            uc_full: "1f331",
            shortnames: [],
            category: "nature"
        },
        ":selfie:": {
            uc_base: "1f933",
            uc_full: "1f933",
            shortnames: [],
            category: "people"
        },
        ":shallow_pan_of_food:": {
            uc_base: "1f958",
            uc_full: "1f958",
            shortnames: [":paella:"],
            category: "food"
        },
        ":shark:": {
            uc_base: "1f988",
            uc_full: "1f988",
            shortnames: [],
            category: "nature"
        },
        ":shaved_ice:": {
            uc_base: "1f367",
            uc_full: "1f367",
            shortnames: [],
            category: "food"
        },
        ":sheep:": {
            uc_base: "1f411",
            uc_full: "1f411",
            shortnames: [],
            category: "nature"
        },
        ":shell:": {
            uc_base: "1f41a",
            uc_full: "1f41a",
            shortnames: [],
            category: "nature"
        },
        ":shield:": {
            uc_base: "1f6e1",
            uc_full: "1f6e1-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":ship:": {
            uc_base: "1f6a2",
            uc_full: "1f6a2",
            shortnames: [],
            category: "travel"
        },
        ":shirt:": {
            uc_base: "1f455",
            uc_full: "1f455",
            shortnames: [],
            category: "people"
        },
        ":shopping_bags:": {
            uc_base: "1f6cd",
            uc_full: "1f6cd-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":shopping_cart:": {
            uc_base: "1f6d2",
            uc_full: "1f6d2",
            shortnames: [":shopping_trolley:"],
            category: "objects"
        },
        ":shorts:": {
            uc_base: "1fa73",
            uc_full: "1fa73",
            shortnames: [],
            category: "people"
        },
        ":shower:": {
            uc_base: "1f6bf",
            uc_full: "1f6bf",
            shortnames: [],
            category: "objects"
        },
        ":shrimp:": {
            uc_base: "1f990",
            uc_full: "1f990",
            shortnames: [],
            category: "nature"
        },
        ":shushing_face:": {
            uc_base: "1f92b",
            uc_full: "1f92b",
            shortnames: [],
            category: "people"
        },
        ":signal_strength:": {
            uc_base: "1f4f6",
            uc_full: "1f4f6",
            shortnames: [],
            category: "symbols"
        },
        ":six_pointed_star:": {
            uc_base: "1f52f",
            uc_full: "1f52f",
            shortnames: [],
            category: "symbols"
        },
        ":skateboard:": {
            uc_base: "1f6f9",
            uc_full: "1f6f9",
            shortnames: [],
            category: "activity"
        },
        ":ski:": {
            uc_base: "1f3bf",
            uc_full: "1f3bf",
            shortnames: [],
            category: "activity"
        },
        ":skull:": {
            uc_base: "1f480",
            uc_full: "1f480",
            shortnames: [":skeleton:"],
            category: "people"
        },
        ":skunk:": {
            uc_base: "1f9a8",
            uc_full: "1f9a8",
            shortnames: [],
            category: "nature"
        },
        ":sled:": {
            uc_base: "1f6f7",
            uc_full: "1f6f7",
            shortnames: [],
            category: "activity"
        },
        ":sleeping:": {
            uc_base: "1f634",
            uc_full: "1f634",
            shortnames: [],
            category: "people"
        },
        ":sleeping_accommodation:": {
            uc_base: "1f6cc",
            uc_full: "1f6cc",
            shortnames: [],
            category: "objects"
        },
        ":sleepy:": {
            uc_base: "1f62a",
            uc_full: "1f62a",
            shortnames: [],
            category: "people"
        },
        ":slight_frown:": {
            uc_base: "1f641",
            uc_full: "1f641",
            shortnames: [":slightly_frowning_face:"],
            category: "people"
        },
        ":slight_smile:": {
            uc_base: "1f642",
            uc_full: "1f642",
            shortnames: [":slightly_smiling_face:"],
            category: "people"
        },
        ":slot_machine:": {
            uc_base: "1f3b0",
            uc_full: "1f3b0",
            shortnames: [],
            category: "activity"
        },
        ":sloth:": {
            uc_base: "1f9a5",
            uc_full: "1f9a5",
            shortnames: [],
            category: "nature"
        },
        ":small_blue_diamond:": {
            uc_base: "1f539",
            uc_full: "1f539",
            shortnames: [],
            category: "symbols"
        },
        ":small_orange_diamond:": {
            uc_base: "1f538",
            uc_full: "1f538",
            shortnames: [],
            category: "symbols"
        },
        ":small_red_triangle:": {
            uc_base: "1f53a",
            uc_full: "1f53a",
            shortnames: [],
            category: "symbols"
        },
        ":small_red_triangle_down:": {
            uc_base: "1f53b",
            uc_full: "1f53b",
            shortnames: [],
            category: "symbols"
        },
        ":smile:": {
            uc_base: "1f604",
            uc_full: "1f604",
            shortnames: [],
            category: "people"
        },
        ":smile_cat:": {
            uc_base: "1f638",
            uc_full: "1f638",
            shortnames: [],
            category: "people"
        },
        ":smiley:": {
            uc_base: "1f603",
            uc_full: "1f603",
            shortnames: [],
            category: "people"
        },
        ":smiley_cat:": {
            uc_base: "1f63a",
            uc_full: "1f63a",
            shortnames: [],
            category: "people"
        },
        ":smiling_face_with_3_hearts:": {
            uc_base: "1f970",
            uc_full: "1f970",
            shortnames: [],
            category: "people"
        },
        ":smiling_imp:": {
            uc_base: "1f608",
            uc_full: "1f608",
            shortnames: [],
            category: "people"
        },
        ":smirk:": {
            uc_base: "1f60f",
            uc_full: "1f60f",
            shortnames: [],
            category: "people"
        },
        ":smirk_cat:": {
            uc_base: "1f63c",
            uc_full: "1f63c",
            shortnames: [],
            category: "people"
        },
        ":smoking:": {
            uc_base: "1f6ac",
            uc_full: "1f6ac",
            shortnames: [],
            category: "objects"
        },
        ":snail:": {
            uc_base: "1f40c",
            uc_full: "1f40c",
            shortnames: [],
            category: "nature"
        },
        ":snake:": {
            uc_base: "1f40d",
            uc_full: "1f40d",
            shortnames: [],
            category: "nature"
        },
        ":sneezing_face:": {
            uc_base: "1f927",
            uc_full: "1f927",
            shortnames: [":sneeze:"],
            category: "people"
        },
        ":snowboarder:": {
            uc_base: "1f3c2",
            uc_full: "1f3c2",
            shortnames: [],
            category: "activity"
        },
        ":soap:": {
            uc_base: "1f9fc",
            uc_full: "1f9fc",
            shortnames: [],
            category: "objects"
        },
        ":sob:": {
            uc_base: "1f62d",
            uc_full: "1f62d",
            shortnames: [],
            category: "people"
        },
        ":socks:": {
            uc_base: "1f9e6",
            uc_full: "1f9e6",
            shortnames: [],
            category: "people"
        },
        ":softball:": {
            uc_base: "1f94e",
            uc_full: "1f94e",
            shortnames: [],
            category: "activity"
        },
        ":soon:": {
            uc_base: "1f51c",
            uc_full: "1f51c",
            shortnames: [],
            category: "symbols"
        },
        ":sos:": {
            uc_base: "1f198",
            uc_full: "1f198",
            shortnames: [],
            category: "symbols"
        },
        ":sound:": {
            uc_base: "1f509",
            uc_full: "1f509",
            shortnames: [],
            category: "symbols"
        },
        ":space_invader:": {
            uc_base: "1f47e",
            uc_full: "1f47e",
            shortnames: [],
            category: "people"
        },
        ":spaghetti:": {
            uc_base: "1f35d",
            uc_full: "1f35d",
            shortnames: [],
            category: "food"
        },
        ":sparkler:": {
            uc_base: "1f387",
            uc_full: "1f387",
            shortnames: [],
            category: "travel"
        },
        ":sparkling_heart:": {
            uc_base: "1f496",
            uc_full: "1f496",
            shortnames: [],
            category: "symbols"
        },
        ":speak_no_evil:": {
            uc_base: "1f64a",
            uc_full: "1f64a",
            shortnames: [],
            category: "nature"
        },
        ":speaker:": {
            uc_base: "1f508",
            uc_full: "1f508",
            shortnames: [],
            category: "symbols"
        },
        ":speaking_head:": {
            uc_base: "1f5e3",
            uc_full: "1f5e3-fe0f",
            shortnames: [":speaking_head_in_silhouette:"],
            category: "people"
        },
        ":speech_balloon:": {
            uc_base: "1f4ac",
            uc_full: "1f4ac",
            shortnames: [],
            category: "symbols"
        },
        ":speech_left:": {
            uc_base: "1f5e8",
            uc_full: "1f5e8-fe0f",
            shortnames: [":left_speech_bubble:"],
            category: "symbols"
        },
        ":speedboat:": {
            uc_base: "1f6a4",
            uc_full: "1f6a4",
            shortnames: [],
            category: "travel"
        },
        ":spider:": {
            uc_base: "1f577",
            uc_full: "1f577-fe0f",
            shortnames: [],
            category: "nature"
        },
        ":spider_web:": {
            uc_base: "1f578",
            uc_full: "1f578-fe0f",
            shortnames: [],
            category: "nature"
        },
        ":sponge:": {
            uc_base: "1f9fd",
            uc_full: "1f9fd",
            shortnames: [],
            category: "objects"
        },
        ":spoon:": {
            uc_base: "1f944",
            uc_full: "1f944",
            shortnames: [],
            category: "food"
        },
        ":squeeze_bottle:": {
            uc_base: "1f9f4",
            uc_full: "1f9f4",
            shortnames: [],
            category: "objects"
        },
        ":squid:": {
            uc_base: "1f991",
            uc_full: "1f991",
            shortnames: [],
            category: "nature"
        },
        ":stadium:": {
            uc_base: "1f3df",
            uc_full: "1f3df-fe0f",
            shortnames: [],
            category: "travel"
        },
        ":star2:": {
            uc_base: "1f31f",
            uc_full: "1f31f",
            shortnames: [],
            category: "nature"
        },
        ":star_struck:": {
            uc_base: "1f929",
            uc_full: "1f929",
            shortnames: [],
            category: "people"
        },
        ":stars:": {
            uc_base: "1f320",
            uc_full: "1f320",
            shortnames: [],
            category: "travel"
        },
        ":station:": {
            uc_base: "1f689",
            uc_full: "1f689",
            shortnames: [],
            category: "travel"
        },
        ":statue_of_liberty:": {
            uc_base: "1f5fd",
            uc_full: "1f5fd",
            shortnames: [],
            category: "travel"
        },
        ":steam_locomotive:": {
            uc_base: "1f682",
            uc_full: "1f682",
            shortnames: [],
            category: "travel"
        },
        ":stethoscope:": {
            uc_base: "1fa7a",
            uc_full: "1fa7a",
            shortnames: [],
            category: "objects"
        },
        ":stew:": {
            uc_base: "1f372",
            uc_full: "1f372",
            shortnames: [],
            category: "food"
        },
        ":straight_ruler:": {
            uc_base: "1f4cf",
            uc_full: "1f4cf",
            shortnames: [],
            category: "objects"
        },
        ":strawberry:": {
            uc_base: "1f353",
            uc_full: "1f353",
            shortnames: [],
            category: "food"
        },
        ":stuck_out_tongue:": {
            uc_base: "1f61b",
            uc_full: "1f61b",
            shortnames: [],
            category: "people"
        },
        ":stuck_out_tongue_closed_eyes:": {
            uc_base: "1f61d",
            uc_full: "1f61d",
            shortnames: [],
            category: "people"
        },
        ":stuck_out_tongue_winking_eye:": {
            uc_base: "1f61c",
            uc_full: "1f61c",
            shortnames: [],
            category: "people"
        },
        ":stuffed_flatbread:": {
            uc_base: "1f959",
            uc_full: "1f959",
            shortnames: [":stuffed_pita:"],
            category: "food"
        },
        ":sun_with_face:": {
            uc_base: "1f31e",
            uc_full: "1f31e",
            shortnames: [],
            category: "nature"
        },
        ":sunflower:": {
            uc_base: "1f33b",
            uc_full: "1f33b",
            shortnames: [],
            category: "nature"
        },
        ":sunglasses:": {
            uc_base: "1f60e",
            uc_full: "1f60e",
            shortnames: [],
            category: "people"
        },
        ":sunrise:": {
            uc_base: "1f305",
            uc_full: "1f305",
            shortnames: [],
            category: "travel"
        },
        ":sunrise_over_mountains:": {
            uc_base: "1f304",
            uc_full: "1f304",
            shortnames: [],
            category: "travel"
        },
        ":superhero:": {
            uc_base: "1f9b8",
            uc_full: "1f9b8",
            shortnames: [],
            category: "people"
        },
        ":supervillain:": {
            uc_base: "1f9b9",
            uc_full: "1f9b9",
            shortnames: [],
            category: "people"
        },
        ":sushi:": {
            uc_base: "1f363",
            uc_full: "1f363",
            shortnames: [],
            category: "food"
        },
        ":suspension_railway:": {
            uc_base: "1f69f",
            uc_full: "1f69f",
            shortnames: [],
            category: "travel"
        },
        ":swan:": {
            uc_base: "1f9a2",
            uc_full: "1f9a2",
            shortnames: [],
            category: "nature"
        },
        ":sweat:": {
            uc_base: "1f613",
            uc_full: "1f613",
            shortnames: [],
            category: "people"
        },
        ":sweat_drops:": {
            uc_base: "1f4a6",
            uc_full: "1f4a6",
            shortnames: [],
            category: "nature"
        },
        ":sweat_smile:": {
            uc_base: "1f605",
            uc_full: "1f605",
            shortnames: [],
            category: "people"
        },
        ":sweet_potato:": {
            uc_base: "1f360",
            uc_full: "1f360",
            shortnames: [],
            category: "food"
        },
        ":symbols:": {
            uc_base: "1f523",
            uc_full: "1f523",
            shortnames: [],
            category: "symbols"
        },
        ":synagogue:": {
            uc_base: "1f54d",
            uc_full: "1f54d",
            shortnames: [],
            category: "travel"
        },
        ":syringe:": {
            uc_base: "1f489",
            uc_full: "1f489",
            shortnames: [],
            category: "objects"
        },
        ":t_rex:": {
            uc_base: "1f996",
            uc_full: "1f996",
            shortnames: [],
            category: "nature"
        },
        ":taco:": {
            uc_base: "1f32e",
            uc_full: "1f32e",
            shortnames: [],
            category: "food"
        },
        ":tada:": {
            uc_base: "1f389",
            uc_full: "1f389",
            shortnames: [],
            category: "objects"
        },
        ":takeout_box:": {
            uc_base: "1f961",
            uc_full: "1f961",
            shortnames: [],
            category: "food"
        },
        ":tanabata_tree:": {
            uc_base: "1f38b",
            uc_full: "1f38b",
            shortnames: [],
            category: "nature"
        },
        ":tangerine:": {
            uc_base: "1f34a",
            uc_full: "1f34a",
            shortnames: [],
            category: "food"
        },
        ":taxi:": {
            uc_base: "1f695",
            uc_full: "1f695",
            shortnames: [],
            category: "travel"
        },
        ":tea:": {
            uc_base: "1f375",
            uc_full: "1f375",
            shortnames: [],
            category: "food"
        },
        ":teddy_bear:": {
            uc_base: "1f9f8",
            uc_full: "1f9f8",
            shortnames: [],
            category: "objects"
        },
        ":telephone_receiver:": {
            uc_base: "1f4de",
            uc_full: "1f4de",
            shortnames: [],
            category: "objects"
        },
        ":telescope:": {
            uc_base: "1f52d",
            uc_full: "1f52d",
            shortnames: [],
            category: "objects"
        },
        ":tennis:": {
            uc_base: "1f3be",
            uc_full: "1f3be",
            shortnames: [],
            category: "activity"
        },
        ":test_tube:": {
            uc_base: "1f9ea",
            uc_full: "1f9ea",
            shortnames: [],
            category: "objects"
        },
        ":thermometer:": {
            uc_base: "1f321",
            uc_full: "1f321-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":thermometer_face:": {
            uc_base: "1f912",
            uc_full: "1f912",
            shortnames: [":face_with_thermometer:"],
            category: "people"
        },
        ":thinking:": {
            uc_base: "1f914",
            uc_full: "1f914",
            shortnames: [":thinking_face:"],
            category: "people"
        },
        ":third_place:": {
            uc_base: "1f949",
            uc_full: "1f949",
            shortnames: [":third_place_medal:"],
            category: "activity"
        },
        ":thought_balloon:": {
            uc_base: "1f4ad",
            uc_full: "1f4ad",
            shortnames: [],
            category: "symbols"
        },
        ":thread:": {
            uc_base: "1f9f5",
            uc_full: "1f9f5",
            shortnames: [],
            category: "people"
        },
        ":thumbsdown:": {
            uc_base: "1f44e",
            uc_full: "1f44e",
            shortnames: [":-1:", ":thumbdown:"],
            category: "people"
        },
        ":thumbsup:": {
            uc_base: "1f44d",
            uc_full: "1f44d",
            shortnames: [":+1:", ":thumbup:"],
            category: "people"
        },
        ":ticket:": {
            uc_base: "1f3ab",
            uc_full: "1f3ab",
            shortnames: [],
            category: "activity"
        },
        ":tickets:": {
            uc_base: "1f39f",
            uc_full: "1f39f-fe0f",
            shortnames: [":admission_tickets:"],
            category: "activity"
        },
        ":tiger2:": {
            uc_base: "1f405",
            uc_full: "1f405",
            shortnames: [],
            category: "nature"
        },
        ":tiger:": {
            uc_base: "1f42f",
            uc_full: "1f42f",
            shortnames: [],
            category: "nature"
        },
        ":tired_face:": {
            uc_base: "1f62b",
            uc_full: "1f62b",
            shortnames: [],
            category: "people"
        },
        ":toilet:": {
            uc_base: "1f6bd",
            uc_full: "1f6bd",
            shortnames: [],
            category: "objects"
        },
        ":tokyo_tower:": {
            uc_base: "1f5fc",
            uc_full: "1f5fc",
            shortnames: [],
            category: "travel"
        },
        ":tomato:": {
            uc_base: "1f345",
            uc_full: "1f345",
            shortnames: [],
            category: "food"
        },
        ":tone1:": {
            uc_base: "1f3fb",
            uc_full: "1f3fb",
            shortnames: [],
            category: "modifier"
        },
        ":tone2:": {
            uc_base: "1f3fc",
            uc_full: "1f3fc",
            shortnames: [],
            category: "modifier"
        },
        ":tone3:": {
            uc_base: "1f3fd",
            uc_full: "1f3fd",
            shortnames: [],
            category: "modifier"
        },
        ":tone4:": {
            uc_base: "1f3fe",
            uc_full: "1f3fe",
            shortnames: [],
            category: "modifier"
        },
        ":tone5:": {
            uc_base: "1f3ff",
            uc_full: "1f3ff",
            shortnames: [],
            category: "modifier"
        },
        ":tongue:": {
            uc_base: "1f445",
            uc_full: "1f445",
            shortnames: [],
            category: "people"
        },
        ":toolbox:": {
            uc_base: "1f9f0",
            uc_full: "1f9f0",
            shortnames: [],
            category: "objects"
        },
        ":tools:": {
            uc_base: "1f6e0",
            uc_full: "1f6e0-fe0f",
            shortnames: [":hammer_and_wrench:"],
            category: "objects"
        },
        ":tooth:": {
            uc_base: "1f9b7",
            uc_full: "1f9b7",
            shortnames: [],
            category: "people"
        },
        ":top:": {
            uc_base: "1f51d",
            uc_full: "1f51d",
            shortnames: [],
            category: "symbols"
        },
        ":tophat:": {
            uc_base: "1f3a9",
            uc_full: "1f3a9",
            shortnames: [],
            category: "people"
        },
        ":trackball:": {
            uc_base: "1f5b2",
            uc_full: "1f5b2-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":tractor:": {
            uc_base: "1f69c",
            uc_full: "1f69c",
            shortnames: [],
            category: "travel"
        },
        ":traffic_light:": {
            uc_base: "1f6a5",
            uc_full: "1f6a5",
            shortnames: [],
            category: "travel"
        },
        ":train2:": {
            uc_base: "1f686",
            uc_full: "1f686",
            shortnames: [],
            category: "travel"
        },
        ":train:": {
            uc_base: "1f68b",
            uc_full: "1f68b",
            shortnames: [],
            category: "travel"
        },
        ":tram:": {
            uc_base: "1f68a",
            uc_full: "1f68a",
            shortnames: [],
            category: "travel"
        },
        ":triangular_flag_on_post:": {
            uc_base: "1f6a9",
            uc_full: "1f6a9",
            shortnames: [],
            category: "flags"
        },
        ":triangular_ruler:": {
            uc_base: "1f4d0",
            uc_full: "1f4d0",
            shortnames: [],
            category: "objects"
        },
        ":trident:": {
            uc_base: "1f531",
            uc_full: "1f531",
            shortnames: [],
            category: "symbols"
        },
        ":triumph:": {
            uc_base: "1f624",
            uc_full: "1f624",
            shortnames: [],
            category: "people"
        },
        ":trolleybus:": {
            uc_base: "1f68e",
            uc_full: "1f68e",
            shortnames: [],
            category: "travel"
        },
        ":trophy:": {
            uc_base: "1f3c6",
            uc_full: "1f3c6",
            shortnames: [],
            category: "activity"
        },
        ":tropical_drink:": {
            uc_base: "1f379",
            uc_full: "1f379",
            shortnames: [],
            category: "food"
        },
        ":tropical_fish:": {
            uc_base: "1f420",
            uc_full: "1f420",
            shortnames: [],
            category: "nature"
        },
        ":truck:": {
            uc_base: "1f69a",
            uc_full: "1f69a",
            shortnames: [],
            category: "travel"
        },
        ":trumpet:": {
            uc_base: "1f3ba",
            uc_full: "1f3ba",
            shortnames: [],
            category: "activity"
        },
        ":tulip:": {
            uc_base: "1f337",
            uc_full: "1f337",
            shortnames: [],
            category: "nature"
        },
        ":tumbler_glass:": {
            uc_base: "1f943",
            uc_full: "1f943",
            shortnames: [":whisky:"],
            category: "food"
        },
        ":turkey:": {
            uc_base: "1f983",
            uc_full: "1f983",
            shortnames: [],
            category: "nature"
        },
        ":turtle:": {
            uc_base: "1f422",
            uc_full: "1f422",
            shortnames: [],
            category: "nature"
        },
        ":tv:": {
            uc_base: "1f4fa",
            uc_full: "1f4fa",
            shortnames: [],
            category: "objects"
        },
        ":twisted_rightwards_arrows:": {
            uc_base: "1f500",
            uc_full: "1f500",
            shortnames: [],
            category: "symbols"
        },
        ":two_hearts:": {
            uc_base: "1f495",
            uc_full: "1f495",
            shortnames: [],
            category: "symbols"
        },
        ":two_men_holding_hands:": {
            uc_base: "1f46c",
            uc_full: "1f46c",
            shortnames: [],
            category: "people"
        },
        ":two_women_holding_hands:": {
            uc_base: "1f46d",
            uc_full: "1f46d",
            shortnames: [],
            category: "people"
        },
        ":u5272:": {
            uc_base: "1f239",
            uc_full: "1f239",
            shortnames: [],
            category: "symbols"
        },
        ":u5408:": {
            uc_base: "1f234",
            uc_full: "1f234",
            shortnames: [],
            category: "symbols"
        },
        ":u55b6:": {
            uc_base: "1f23a",
            uc_full: "1f23a",
            shortnames: [],
            category: "symbols"
        },
        ":u6307:": {
            uc_base: "1f22f",
            uc_full: "1f22f",
            shortnames: [],
            category: "symbols"
        },
        ":u6708:": {
            uc_base: "1f237",
            uc_full: "1f237-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":u6709:": {
            uc_base: "1f236",
            uc_full: "1f236",
            shortnames: [],
            category: "symbols"
        },
        ":u6e80:": {
            uc_base: "1f235",
            uc_full: "1f235",
            shortnames: [],
            category: "symbols"
        },
        ":u7121:": {
            uc_base: "1f21a",
            uc_full: "1f21a",
            shortnames: [],
            category: "symbols"
        },
        ":u7533:": {
            uc_base: "1f238",
            uc_full: "1f238",
            shortnames: [],
            category: "symbols"
        },
        ":u7981:": {
            uc_base: "1f232",
            uc_full: "1f232",
            shortnames: [],
            category: "symbols"
        },
        ":u7a7a:": {
            uc_base: "1f233",
            uc_full: "1f233",
            shortnames: [],
            category: "symbols"
        },
        ":unamused:": {
            uc_base: "1f612",
            uc_full: "1f612",
            shortnames: [],
            category: "people"
        },
        ":underage:": {
            uc_base: "1f51e",
            uc_full: "1f51e",
            shortnames: [],
            category: "symbols"
        },
        ":unicorn:": {
            uc_base: "1f984",
            uc_full: "1f984",
            shortnames: [":unicorn_face:"],
            category: "nature"
        },
        ":unlock:": {
            uc_base: "1f513",
            uc_full: "1f513",
            shortnames: [],
            category: "objects"
        },
        ":up:": {
            uc_base: "1f199",
            uc_full: "1f199",
            shortnames: [],
            category: "symbols"
        },
        ":upside_down:": {
            uc_base: "1f643",
            uc_full: "1f643",
            shortnames: [":upside_down_face:"],
            category: "people"
        },
        ":vampire:": {
            uc_base: "1f9db",
            uc_full: "1f9db",
            shortnames: [],
            category: "people"
        },
        ":vertical_traffic_light:": {
            uc_base: "1f6a6",
            uc_full: "1f6a6",
            shortnames: [],
            category: "travel"
        },
        ":vhs:": {
            uc_base: "1f4fc",
            uc_full: "1f4fc",
            shortnames: [],
            category: "objects"
        },
        ":vibration_mode:": {
            uc_base: "1f4f3",
            uc_full: "1f4f3",
            shortnames: [],
            category: "symbols"
        },
        ":video_camera:": {
            uc_base: "1f4f9",
            uc_full: "1f4f9",
            shortnames: [],
            category: "objects"
        },
        ":video_game:": {
            uc_base: "1f3ae",
            uc_full: "1f3ae",
            shortnames: [],
            category: "activity"
        },
        ":violin:": {
            uc_base: "1f3bb",
            uc_full: "1f3bb",
            shortnames: [],
            category: "activity"
        },
        ":volcano:": {
            uc_base: "1f30b",
            uc_full: "1f30b",
            shortnames: [],
            category: "travel"
        },
        ":volleyball:": {
            uc_base: "1f3d0",
            uc_full: "1f3d0",
            shortnames: [],
            category: "activity"
        },
        ":vs:": {
            uc_base: "1f19a",
            uc_full: "1f19a",
            shortnames: [],
            category: "symbols"
        },
        ":vulcan:": {
            uc_base: "1f596",
            uc_full: "1f596",
            shortnames: [":raised_hand_with_part_between_middle_and_ring_fingers:"],
            category: "people"
        },
        ":waffle:": {
            uc_base: "1f9c7",
            uc_full: "1f9c7",
            shortnames: [],
            category: "food"
        },
        ":waning_crescent_moon:": {
            uc_base: "1f318",
            uc_full: "1f318",
            shortnames: [],
            category: "nature"
        },
        ":waning_gibbous_moon:": {
            uc_base: "1f316",
            uc_full: "1f316",
            shortnames: [],
            category: "nature"
        },
        ":wastebasket:": {
            uc_base: "1f5d1",
            uc_full: "1f5d1-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":water_buffalo:": {
            uc_base: "1f403",
            uc_full: "1f403",
            shortnames: [],
            category: "nature"
        },
        ":watermelon:": {
            uc_base: "1f349",
            uc_full: "1f349",
            shortnames: [],
            category: "food"
        },
        ":wave:": {
            uc_base: "1f44b",
            uc_full: "1f44b",
            shortnames: [],
            category: "people"
        },
        ":waxing_crescent_moon:": {
            uc_base: "1f312",
            uc_full: "1f312",
            shortnames: [],
            category: "nature"
        },
        ":waxing_gibbous_moon:": {
            uc_base: "1f314",
            uc_full: "1f314",
            shortnames: [],
            category: "nature"
        },
        ":wc:": {
            uc_base: "1f6be",
            uc_full: "1f6be",
            shortnames: [],
            category: "symbols"
        },
        ":weary:": {
            uc_base: "1f629",
            uc_full: "1f629",
            shortnames: [],
            category: "people"
        },
        ":wedding:": {
            uc_base: "1f492",
            uc_full: "1f492",
            shortnames: [],
            category: "travel"
        },
        ":whale2:": {
            uc_base: "1f40b",
            uc_full: "1f40b",
            shortnames: [],
            category: "nature"
        },
        ":whale:": {
            uc_base: "1f433",
            uc_full: "1f433",
            shortnames: [],
            category: "nature"
        },
        ":white_flower:": {
            uc_base: "1f4ae",
            uc_full: "1f4ae",
            shortnames: [],
            category: "symbols"
        },
        ":white_haired:": {
            uc_base: "1f9b3",
            uc_full: "1f9b3",
            shortnames: [],
            category: "people"
        },
        ":white_heart:": {
            uc_base: "1f90d",
            uc_full: "1f90d",
            shortnames: [],
            category: "symbols"
        },
        ":white_square_button:": {
            uc_base: "1f533",
            uc_full: "1f533",
            shortnames: [],
            category: "symbols"
        },
        ":white_sun_cloud:": {
            uc_base: "1f325",
            uc_full: "1f325-fe0f",
            shortnames: [":white_sun_behind_cloud:"],
            category: "nature"
        },
        ":white_sun_rain_cloud:": {
            uc_base: "1f326",
            uc_full: "1f326-fe0f",
            shortnames: [":white_sun_behind_cloud_with_rain:"],
            category: "nature"
        },
        ":white_sun_small_cloud:": {
            uc_base: "1f324",
            uc_full: "1f324-fe0f",
            shortnames: [":white_sun_with_small_cloud:"],
            category: "nature"
        },
        ":wilted_rose:": {
            uc_base: "1f940",
            uc_full: "1f940",
            shortnames: [":wilted_flower:"],
            category: "nature"
        },
        ":wind_blowing_face:": {
            uc_base: "1f32c",
            uc_full: "1f32c-fe0f",
            shortnames: [],
            category: "nature"
        },
        ":wind_chime:": {
            uc_base: "1f390",
            uc_full: "1f390",
            shortnames: [],
            category: "objects"
        },
        ":wine_glass:": {
            uc_base: "1f377",
            uc_full: "1f377",
            shortnames: [],
            category: "food"
        },
        ":wink:": {
            uc_base: "1f609",
            uc_full: "1f609",
            shortnames: [],
            category: "people"
        },
        ":wolf:": {
            uc_base: "1f43a",
            uc_full: "1f43a",
            shortnames: [],
            category: "nature"
        },
        ":woman:": {
            uc_base: "1f469",
            uc_full: "1f469",
            shortnames: [],
            category: "people"
        },
        ":woman_with_headscarf:": {
            uc_base: "1f9d5",
            uc_full: "1f9d5",
            shortnames: [],
            category: "people"
        },
        ":womans_clothes:": {
            uc_base: "1f45a",
            uc_full: "1f45a",
            shortnames: [],
            category: "people"
        },
        ":womans_flat_shoe:": {
            uc_base: "1f97f",
            uc_full: "1f97f",
            shortnames: [],
            category: "people"
        },
        ":womans_hat:": {
            uc_base: "1f452",
            uc_full: "1f452",
            shortnames: [],
            category: "people"
        },
        ":womens:": {
            uc_base: "1f6ba",
            uc_full: "1f6ba",
            shortnames: [],
            category: "symbols"
        },
        ":woozy_face:": {
            uc_base: "1f974",
            uc_full: "1f974",
            shortnames: [],
            category: "people"
        },
        ":worried:": {
            uc_base: "1f61f",
            uc_full: "1f61f",
            shortnames: [],
            category: "people"
        },
        ":wrench:": {
            uc_base: "1f527",
            uc_full: "1f527",
            shortnames: [],
            category: "objects"
        },
        ":yarn:": {
            uc_base: "1f9f6",
            uc_full: "1f9f6",
            shortnames: [],
            category: "people"
        },
        ":yawning_face:": {
            uc_base: "1f971",
            uc_full: "1f971",
            shortnames: [],
            category: "people"
        },
        ":yellow_circle:": {
            uc_base: "1f7e1",
            uc_full: "1f7e1",
            shortnames: [],
            category: "symbols"
        },
        ":yellow_heart:": {
            uc_base: "1f49b",
            uc_full: "1f49b",
            shortnames: [],
            category: "symbols"
        },
        ":yellow_square:": {
            uc_base: "1f7e8",
            uc_full: "1f7e8",
            shortnames: [],
            category: "symbols"
        },
        ":yen:": {
            uc_base: "1f4b4",
            uc_full: "1f4b4",
            shortnames: [],
            category: "objects"
        },
        ":yo_yo:": {
            uc_base: "1fa80",
            uc_full: "1fa80",
            shortnames: [],
            category: "activity"
        },
        ":yum:": {
            uc_base: "1f60b",
            uc_full: "1f60b",
            shortnames: [],
            category: "people"
        },
        ":zany_face:": {
            uc_base: "1f92a",
            uc_full: "1f92a",
            shortnames: [],
            category: "people"
        },
        ":zebra:": {
            uc_base: "1f993",
            uc_full: "1f993",
            shortnames: [],
            category: "nature"
        },
        ":zipper_mouth:": {
            uc_base: "1f910",
            uc_full: "1f910",
            shortnames: [":zipper_mouth_face:"],
            category: "people"
        },
        ":zombie:": {
            uc_base: "1f9df",
            uc_full: "1f9df",
            shortnames: [],
            category: "people"
        },
        ":zzz:": {
            uc_base: "1f4a4",
            uc_full: "1f4a4",
            shortnames: [],
            category: "symbols"
        },
        ":airplane:": {
            uc_base: "2708",
            uc_full: "2708-fe0f",
            shortnames: [],
            category: "travel"
        },
        ":alarm_clock:": {
            uc_base: "23f0",
            uc_full: "23f0",
            shortnames: [],
            category: "objects"
        },
        ":alembic:": {
            uc_base: "2697",
            uc_full: "2697-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":anchor:": {
            uc_base: "2693",
            uc_full: "2693",
            shortnames: [],
            category: "travel"
        },
        ":aquarius:": {
            uc_base: "2652",
            uc_full: "2652",
            shortnames: [],
            category: "symbols"
        },
        ":aries:": {
            uc_base: "2648",
            uc_full: "2648",
            shortnames: [],
            category: "symbols"
        },
        ":arrow_backward:": {
            uc_base: "25c0",
            uc_full: "25c0-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":arrow_double_down:": {
            uc_base: "23ec",
            uc_full: "23ec",
            shortnames: [],
            category: "symbols"
        },
        ":arrow_double_up:": {
            uc_base: "23eb",
            uc_full: "23eb",
            shortnames: [],
            category: "symbols"
        },
        ":arrow_down:": {
            uc_base: "2b07",
            uc_full: "2b07-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":arrow_forward:": {
            uc_base: "25b6",
            uc_full: "25b6-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":arrow_heading_down:": {
            uc_base: "2935",
            uc_full: "2935-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":arrow_heading_up:": {
            uc_base: "2934",
            uc_full: "2934-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":arrow_left:": {
            uc_base: "2b05",
            uc_full: "2b05-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":arrow_lower_left:": {
            uc_base: "2199",
            uc_full: "2199-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":arrow_lower_right:": {
            uc_base: "2198",
            uc_full: "2198-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":arrow_right:": {
            uc_base: "27a1",
            uc_full: "27a1-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":arrow_right_hook:": {
            uc_base: "21aa",
            uc_full: "21aa-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":arrow_up:": {
            uc_base: "2b06",
            uc_full: "2b06-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":arrow_up_down:": {
            uc_base: "2195",
            uc_full: "2195-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":arrow_upper_left:": {
            uc_base: "2196",
            uc_full: "2196-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":arrow_upper_right:": {
            uc_base: "2197",
            uc_full: "2197-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":asterisk_symbol:": {
            uc_base: "002a",
            uc_full: "002a-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":atom:": {
            uc_base: "269b",
            uc_full: "269b-fe0f",
            shortnames: [":atom_symbol:"],
            category: "symbols"
        },
        ":ballot_box_with_check:": {
            uc_base: "2611",
            uc_full: "2611-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":bangbang:": {
            uc_base: "203c",
            uc_full: "203c-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":baseball:": {
            uc_base: "26be",
            uc_full: "26be",
            shortnames: [],
            category: "activity"
        },
        ":beach_umbrella:": {
            uc_base: "26f1",
            uc_full: "26f1-fe0f",
            shortnames: [":umbrella_on_ground:"],
            category: "travel"
        },
        ":biohazard:": {
            uc_base: "2623",
            uc_full: "2623-fe0f",
            shortnames: [":biohazard_sign:"],
            category: "symbols"
        },
        ":black_circle:": {
            uc_base: "26ab",
            uc_full: "26ab",
            shortnames: [],
            category: "symbols"
        },
        ":black_large_square:": {
            uc_base: "2b1b",
            uc_full: "2b1b",
            shortnames: [],
            category: "symbols"
        },
        ":black_medium_small_square:": {
            uc_base: "25fe",
            uc_full: "25fe",
            shortnames: [],
            category: "symbols"
        },
        ":black_medium_square:": {
            uc_base: "25fc",
            uc_full: "25fc-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":black_nib:": {
            uc_base: "2712",
            uc_full: "2712-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":black_small_square:": {
            uc_base: "25aa",
            uc_full: "25aa-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":cancer:": {
            uc_base: "264b",
            uc_full: "264b",
            shortnames: [],
            category: "symbols"
        },
        ":capricorn:": {
            uc_base: "2651",
            uc_full: "2651",
            shortnames: [],
            category: "symbols"
        },
        ":chains:": {
            uc_base: "26d3",
            uc_full: "26d3-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":chess_pawn:": {
            uc_base: "265f",
            uc_full: "265f-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":church:": {
            uc_base: "26ea",
            uc_full: "26ea",
            shortnames: [],
            category: "travel"
        },
        ":cloud:": {
            uc_base: "2601",
            uc_full: "2601-fe0f",
            shortnames: [],
            category: "nature"
        },
        ":clubs:": {
            uc_base: "2663",
            uc_full: "2663-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":coffee:": {
            uc_base: "2615",
            uc_full: "2615",
            shortnames: [],
            category: "food"
        },
        ":coffin:": {
            uc_base: "26b0",
            uc_full: "26b0-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":comet:": {
            uc_base: "2604",
            uc_full: "2604-fe0f",
            shortnames: [],
            category: "nature"
        },
        ":congratulations:": {
            uc_base: "3297",
            uc_full: "3297-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":copyright:": {
            uc_base: "00a9",
            uc_full: "00a9-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":cross:": {
            uc_base: "271d",
            uc_full: "271d-fe0f",
            shortnames: [":latin_cross:"],
            category: "symbols"
        },
        ":crossed_swords:": {
            uc_base: "2694",
            uc_full: "2694-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":curly_loop:": {
            uc_base: "27b0",
            uc_full: "27b0",
            shortnames: [],
            category: "symbols"
        },
        ":diamonds:": {
            uc_base: "2666",
            uc_full: "2666-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":digit_eight:": {
            uc_base: "0038",
            uc_full: "0038-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":digit_five:": {
            uc_base: "0035",
            uc_full: "0035-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":digit_four:": {
            uc_base: "0034",
            uc_full: "0034-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":digit_nine:": {
            uc_base: "0039",
            uc_full: "0039-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":digit_one:": {
            uc_base: "0031",
            uc_full: "0031-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":digit_seven:": {
            uc_base: "0037",
            uc_full: "0037-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":digit_six:": {
            uc_base: "0036",
            uc_full: "0036-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":digit_three:": {
            uc_base: "0033",
            uc_full: "0033-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":digit_two:": {
            uc_base: "0032",
            uc_full: "0032-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":digit_zero:": {
            uc_base: "0030",
            uc_full: "0030-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":eight_pointed_black_star:": {
            uc_base: "2734",
            uc_full: "2734-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":eight_spoked_asterisk:": {
            uc_base: "2733",
            uc_full: "2733-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":eject:": {
            uc_base: "23cf",
            uc_full: "23cf-fe0f",
            shortnames: [":eject_symbol:"],
            category: "symbols"
        },
        ":envelope:": {
            uc_base: "2709",
            uc_full: "2709-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":exclamation:": {
            uc_base: "2757",
            uc_full: "2757",
            shortnames: [],
            category: "symbols"
        },
        ":fast_forward:": {
            uc_base: "23e9",
            uc_full: "23e9",
            shortnames: [],
            category: "symbols"
        },
        ":female_sign:": {
            uc_base: "2640",
            uc_full: "2640-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":ferry:": {
            uc_base: "26f4",
            uc_full: "26f4-fe0f",
            shortnames: [],
            category: "travel"
        },
        ":fist:": {
            uc_base: "270a",
            uc_full: "270a",
            shortnames: [],
            category: "people"
        },
        ":fleur-de-lis:": {
            uc_base: "269c",
            uc_full: "269c-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":fountain:": {
            uc_base: "26f2",
            uc_full: "26f2",
            shortnames: [],
            category: "travel"
        },
        ":frowning2:": {
            uc_base: "2639",
            uc_full: "2639-fe0f",
            shortnames: [":white_frowning_face:"],
            category: "people"
        },
        ":fuelpump:": {
            uc_base: "26fd",
            uc_full: "26fd",
            shortnames: [],
            category: "travel"
        },
        ":gear:": {
            uc_base: "2699",
            uc_full: "2699-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":gemini:": {
            uc_base: "264a",
            uc_full: "264a",
            shortnames: [],
            category: "symbols"
        },
        ":golf:": {
            uc_base: "26f3",
            uc_full: "26f3",
            shortnames: [],
            category: "activity"
        },
        ":grey_exclamation:": {
            uc_base: "2755",
            uc_full: "2755",
            shortnames: [],
            category: "symbols"
        },
        ":grey_question:": {
            uc_base: "2754",
            uc_full: "2754",
            shortnames: [],
            category: "symbols"
        },
        ":hammer_pick:": {
            uc_base: "2692",
            uc_full: "2692-fe0f",
            shortnames: [":hammer_and_pick:"],
            category: "objects"
        },
        ":heart:": {
            uc_base: "2764",
            uc_full: "2764-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":heart_exclamation:": {
            uc_base: "2763",
            uc_full: "2763-fe0f",
            shortnames: [":heavy_heart_exclamation_mark_ornament:"],
            category: "symbols"
        },
        ":hearts:": {
            uc_base: "2665",
            uc_full: "2665-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":heavy_check_mark:": {
            uc_base: "2714",
            uc_full: "2714-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":heavy_division_sign:": {
            uc_base: "2797",
            uc_full: "2797",
            shortnames: [],
            category: "symbols"
        },
        ":heavy_minus_sign:": {
            uc_base: "2796",
            uc_full: "2796",
            shortnames: [],
            category: "symbols"
        },
        ":heavy_multiplication_x:": {
            uc_base: "2716",
            uc_full: "2716-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":heavy_plus_sign:": {
            uc_base: "2795",
            uc_full: "2795",
            shortnames: [],
            category: "symbols"
        },
        ":helmet_with_cross:": {
            uc_base: "26d1",
            uc_full: "26d1-fe0f",
            shortnames: [":helmet_with_white_cross:"],
            category: "people"
        },
        ":hotsprings:": {
            uc_base: "2668",
            uc_full: "2668-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":hourglass:": {
            uc_base: "231b",
            uc_full: "231b",
            shortnames: [],
            category: "objects"
        },
        ":hourglass_flowing_sand:": {
            uc_base: "23f3",
            uc_full: "23f3",
            shortnames: [],
            category: "objects"
        },
        ":ice_skate:": {
            uc_base: "26f8",
            uc_full: "26f8-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":infinity:": {
            uc_base: "267e",
            uc_full: "267e-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":information_source:": {
            uc_base: "2139",
            uc_full: "2139-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":interrobang:": {
            uc_base: "2049",
            uc_full: "2049-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":keyboard:": {
            uc_base: "2328",
            uc_full: "2328-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":left_right_arrow:": {
            uc_base: "2194",
            uc_full: "2194-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":leftwards_arrow_with_hook:": {
            uc_base: "21a9",
            uc_full: "21a9-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":leo:": {
            uc_base: "264c",
            uc_full: "264c",
            shortnames: [],
            category: "symbols"
        },
        ":libra:": {
            uc_base: "264e",
            uc_full: "264e",
            shortnames: [],
            category: "symbols"
        },
        ":loop:": {
            uc_base: "27bf",
            uc_full: "27bf",
            shortnames: [],
            category: "symbols"
        },
        ":m:": {
            uc_base: "24c2",
            uc_full: "24c2-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":male_sign:": {
            uc_base: "2642",
            uc_full: "2642-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":medical_symbol:": {
            uc_base: "2695",
            uc_full: "2695-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":mountain:": {
            uc_base: "26f0",
            uc_full: "26f0-fe0f",
            shortnames: [],
            category: "travel"
        },
        ":negative_squared_cross_mark:": {
            uc_base: "274e",
            uc_full: "274e",
            shortnames: [],
            category: "symbols"
        },
        ":no_entry:": {
            uc_base: "26d4",
            uc_full: "26d4",
            shortnames: [],
            category: "symbols"
        },
        ":o:": {
            uc_base: "2b55",
            uc_full: "2b55",
            shortnames: [],
            category: "symbols"
        },
        ":ophiuchus:": {
            uc_base: "26ce",
            uc_full: "26ce",
            shortnames: [],
            category: "symbols"
        },
        ":orthodox_cross:": {
            uc_base: "2626",
            uc_full: "2626-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":part_alternation_mark:": {
            uc_base: "303d",
            uc_full: "303d-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":partly_sunny:": {
            uc_base: "26c5",
            uc_full: "26c5",
            shortnames: [],
            category: "nature"
        },
        ":pause_button:": {
            uc_base: "23f8",
            uc_full: "23f8-fe0f",
            shortnames: [":double_vertical_bar:"],
            category: "symbols"
        },
        ":peace:": {
            uc_base: "262e",
            uc_full: "262e-fe0f",
            shortnames: [":peace_symbol:"],
            category: "symbols"
        },
        ":pencil2:": {
            uc_base: "270f",
            uc_full: "270f-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":person_bouncing_ball:": {
            uc_base: "26f9",
            uc_full: "26f9-fe0f",
            shortnames: [":basketball_player:", ":person_with_ball:"],
            category: "activity"
        },
        ":pick:": {
            uc_base: "26cf",
            uc_full: "26cf-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":pisces:": {
            uc_base: "2653",
            uc_full: "2653",
            shortnames: [],
            category: "symbols"
        },
        ":play_pause:": {
            uc_base: "23ef",
            uc_full: "23ef-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":point_up:": {
            uc_base: "261d",
            uc_full: "261d-fe0f",
            shortnames: [],
            category: "people"
        },
        ":pound_symbol:": {
            uc_base: "0023",
            uc_full: "0023-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":question:": {
            uc_base: "2753",
            uc_full: "2753",
            shortnames: [],
            category: "symbols"
        },
        ":radioactive:": {
            uc_base: "2622",
            uc_full: "2622-fe0f",
            shortnames: [":radioactive_sign:"],
            category: "symbols"
        },
        ":raised_hand:": {
            uc_base: "270b",
            uc_full: "270b",
            shortnames: [],
            category: "people"
        },
        ":record_button:": {
            uc_base: "23fa",
            uc_full: "23fa-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":recycle:": {
            uc_base: "267b",
            uc_full: "267b-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":registered:": {
            uc_base: "00ae",
            uc_full: "00ae-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":relaxed:": {
            uc_base: "263a",
            uc_full: "263a-fe0f",
            shortnames: [],
            category: "people"
        },
        ":rewind:": {
            uc_base: "23ea",
            uc_full: "23ea",
            shortnames: [],
            category: "symbols"
        },
        ":sagittarius:": {
            uc_base: "2650",
            uc_full: "2650",
            shortnames: [],
            category: "symbols"
        },
        ":sailboat:": {
            uc_base: "26f5",
            uc_full: "26f5",
            shortnames: [],
            category: "travel"
        },
        ":scales:": {
            uc_base: "2696",
            uc_full: "2696-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":scissors:": {
            uc_base: "2702",
            uc_full: "2702-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":scorpius:": {
            uc_base: "264f",
            uc_full: "264f",
            shortnames: [],
            category: "symbols"
        },
        ":secret:": {
            uc_base: "3299",
            uc_full: "3299-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":shamrock:": {
            uc_base: "2618",
            uc_full: "2618-fe0f",
            shortnames: [],
            category: "nature"
        },
        ":shinto_shrine:": {
            uc_base: "26e9",
            uc_full: "26e9-fe0f",
            shortnames: [],
            category: "travel"
        },
        ":skier:": {
            uc_base: "26f7",
            uc_full: "26f7-fe0f",
            shortnames: [],
            category: "activity"
        },
        ":skull_crossbones:": {
            uc_base: "2620",
            uc_full: "2620-fe0f",
            shortnames: [":skull_and_crossbones:"],
            category: "people"
        },
        ":snowflake:": {
            uc_base: "2744",
            uc_full: "2744-fe0f",
            shortnames: [],
            category: "nature"
        },
        ":snowman2:": {
            uc_base: "2603",
            uc_full: "2603-fe0f",
            shortnames: [],
            category: "nature"
        },
        ":snowman:": {
            uc_base: "26c4",
            uc_full: "26c4",
            shortnames: [],
            category: "nature"
        },
        ":soccer:": {
            uc_base: "26bd",
            uc_full: "26bd",
            shortnames: [],
            category: "activity"
        },
        ":spades:": {
            uc_base: "2660",
            uc_full: "2660-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":sparkle:": {
            uc_base: "2747",
            uc_full: "2747-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":sparkles:": {
            uc_base: "2728",
            uc_full: "2728",
            shortnames: [],
            category: "nature"
        },
        ":star:": {
            uc_base: "2b50",
            uc_full: "2b50",
            shortnames: [],
            category: "nature"
        },
        ":star_and_crescent:": {
            uc_base: "262a",
            uc_full: "262a-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":star_of_david:": {
            uc_base: "2721",
            uc_full: "2721-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":stop_button:": {
            uc_base: "23f9",
            uc_full: "23f9-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":stopwatch:": {
            uc_base: "23f1",
            uc_full: "23f1-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":sunny:": {
            uc_base: "2600",
            uc_full: "2600-fe0f",
            shortnames: [],
            category: "nature"
        },
        ":taurus:": {
            uc_base: "2649",
            uc_full: "2649",
            shortnames: [],
            category: "symbols"
        },
        ":telephone:": {
            uc_base: "260e",
            uc_full: "260e-fe0f",
            shortnames: [],
            category: "objects"
        },
        ":tent:": {
            uc_base: "26fa",
            uc_full: "26fa",
            shortnames: [],
            category: "travel"
        },
        ":thunder_cloud_rain:": {
            uc_base: "26c8",
            uc_full: "26c8-fe0f",
            shortnames: [":thunder_cloud_and_rain:"],
            category: "nature"
        },
        ":timer:": {
            uc_base: "23f2",
            uc_full: "23f2-fe0f",
            shortnames: [":timer_clock:"],
            category: "objects"
        },
        ":tm:": {
            uc_base: "2122",
            uc_full: "2122-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":track_next:": {
            uc_base: "23ed",
            uc_full: "23ed-fe0f",
            shortnames: [":next_track:"],
            category: "symbols"
        },
        ":track_previous:": {
            uc_base: "23ee",
            uc_full: "23ee-fe0f",
            shortnames: [":previous_track:"],
            category: "symbols"
        },
        ":umbrella2:": {
            uc_base: "2602",
            uc_full: "2602-fe0f",
            shortnames: [],
            category: "nature"
        },
        ":umbrella:": {
            uc_base: "2614",
            uc_full: "2614",
            shortnames: [],
            category: "nature"
        },
        ":urn:": {
            uc_base: "26b1",
            uc_full: "26b1-fe0f",
            shortnames: [":funeral_urn:"],
            category: "objects"
        },
        ":v:": {
            uc_base: "270c",
            uc_full: "270c-fe0f",
            shortnames: [],
            category: "people"
        },
        ":virgo:": {
            uc_base: "264d",
            uc_full: "264d",
            shortnames: [],
            category: "symbols"
        },
        ":warning:": {
            uc_base: "26a0",
            uc_full: "26a0-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":watch:": {
            uc_base: "231a",
            uc_full: "231a",
            shortnames: [],
            category: "objects"
        },
        ":wavy_dash:": {
            uc_base: "3030",
            uc_full: "3030-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":wheel_of_dharma:": {
            uc_base: "2638",
            uc_full: "2638-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":wheelchair:": {
            uc_base: "267f",
            uc_full: "267f",
            shortnames: [],
            category: "symbols"
        },
        ":white_check_mark:": {
            uc_base: "2705",
            uc_full: "2705",
            shortnames: [],
            category: "symbols"
        },
        ":white_circle:": {
            uc_base: "26aa",
            uc_full: "26aa",
            shortnames: [],
            category: "symbols"
        },
        ":white_large_square:": {
            uc_base: "2b1c",
            uc_full: "2b1c",
            shortnames: [],
            category: "symbols"
        },
        ":white_medium_small_square:": {
            uc_base: "25fd",
            uc_full: "25fd",
            shortnames: [],
            category: "symbols"
        },
        ":white_medium_square:": {
            uc_base: "25fb",
            uc_full: "25fb-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":white_small_square:": {
            uc_base: "25ab",
            uc_full: "25ab-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":writing_hand:": {
            uc_base: "270d",
            uc_full: "270d-fe0f",
            shortnames: [],
            category: "people"
        },
        ":x:": {
            uc_base: "274c",
            uc_full: "274c",
            shortnames: [],
            category: "symbols"
        },
        ":yin_yang:": {
            uc_base: "262f",
            uc_full: "262f-fe0f",
            shortnames: [],
            category: "symbols"
        },
        ":zap:": {
            uc_base: "26a1",
            uc_full: "26a1",
            shortnames: [],
            category: "nature"
        }
    }, ns.asciiList = {
        "*\\0/*": "1f646",
        "*\\O/*": "1f646",
        "-___-": "1f611",
        ":'-)": "1f602",
        "':-)": "1f605",
        "':-D": "1f605",
        ">:-)": "1f606",
        "':-(": "1f613",
        ">:-(": "1f620",
        ":'-(": "1f622",
        "O:-)": "1f607",
        "0:-3": "1f607",
        "0:-)": "1f607",
        "0;^)": "1f607",
        "O;-)": "1f607",
        "0;-)": "1f607",
        "O:-3": "1f607",
        "-__-": "1f611",
        ":-\xde": "1f61b",
        "</3": "1f494",
        ":')": "1f602",
        ":-D": "1f603",
        "':)": "1f605",
        "'=)": "1f605",
        "':D": "1f605",
        "'=D": "1f605",
        ">:)": "1f606",
        ">;)": "1f606",
        ">=)": "1f606",
        ";-)": "1f609",
        "*-)": "1f609",
        ";-]": "1f609",
        ";^)": "1f609",
        "':(": "1f613",
        "'=(": "1f613",
        ":-*": "1f618",
        ":^*": "1f618",
        ">:P": "1f61c",
        "X-P": "1f61c",
        ">:[": "1f61e",
        ":-(": "1f61e",
        ":-[": "1f61e",
        ">:(": "1f620",
        ":'(": "1f622",
        ";-(": "1f622",
        ">.<": "1f623",
        "#-)": "1f635",
        "%-)": "1f635",
        "X-)": "1f635",
        "\\0/": "1f646",
        "\\O/": "1f646",
        "0:3": "1f607",
        "0:)": "1f607",
        "O:)": "1f607",
        "O=)": "1f607",
        "O:3": "1f607",
        "B-)": "1f60e",
        "8-)": "1f60e",
        "B-D": "1f60e",
        "8-D": "1f60e",
        "-_-": "1f611",
        ">:\\": "1f615",
        ">:/": "1f615",
        ":-/": "1f615",
        ":-.": "1f615",
        ":-P": "1f61b",
        ":\xde": "1f61b",
        ":-b": "1f61b",
        ":-O": "1f62e",
        O_O: "1f62e",
        ">:O": "1f62e",
        ":-X": "1f636",
        ":-#": "1f636",
        ":-)": "1f642",
        "(y)": "1f44d",
        "<3": "2764",
        "=D": "1f603",
        ";)": "1f609",
        "*)": "1f609",
        ";]": "1f609",
        ";D": "1f609",
        ":*": "1f618",
        "=*": "1f618",
        ":(": "1f61e",
        ":[": "1f61e",
        "=(": "1f61e",
        ":@": "1f620",
        ";(": "1f622",
        "D:": "1f628",
        ":$": "1f633",
        "=$": "1f633",
        "#)": "1f635",
        "%)": "1f635",
        "X)": "1f635",
        "B)": "1f60e",
        "8)": "1f60e",
        ":/": "1f615",
        ":\\": "1f615",
        "=/": "1f615",
        "=\\": "1f615",
        ":L": "1f615",
        "=L": "1f615",
        ":P": "1f61b",
        "=P": "1f61b",
        ":b": "1f61b",
        ":O": "1f62e",
        ":X": "1f636",
        ":#": "1f636",
        "=X": "1f636",
        "=#": "1f636",
        ":)": "1f642",
        "=]": "1f642",
        "=)": "1f642",
        ":]": "1f642",
        ":D": "1f604"
    }, ns.asciiRegexp = "(\\*\\\\0\\/\\*|\\*\\\\O\\/\\*|\\-___\\-|\\:'\\-\\)|'\\:\\-\\)|'\\:\\-D|\\>\\:\\-\\)|>\\:\\-\\)|'\\:\\-\\(|\\>\\:\\-\\(|>\\:\\-\\(|\\:'\\-\\(|O\\:\\-\\)|0\\:\\-3|0\\:\\-\\)|0;\\^\\)|O;\\-\\)|0;\\-\\)|O\\:\\-3|\\-__\\-|\\:\\-\xde|\\:\\-\xde|\\<\\/3|<\\/3|\\:'\\)|\\:\\-D|'\\:\\)|'\\=\\)|'\\:D|'\\=D|\\>\\:\\)|>\\:\\)|\\>;\\)|>;\\)|\\>\\=\\)|>\\=\\)|;\\-\\)|\\*\\-\\)|;\\-\\]|;\\^\\)|'\\:\\(|'\\=\\(|\\:\\-\\*|\\:\\^\\*|\\>\\:P|>\\:P|X\\-P|\\>\\:\\[|>\\:\\[|\\:\\-\\(|\\:\\-\\[|\\>\\:\\(|>\\:\\(|\\:'\\(|;\\-\\(|\\>\\.\\<|>\\.<|#\\-\\)|%\\-\\)|X\\-\\)|\\\\0\\/|\\\\O\\/|0\\:3|0\\:\\)|O\\:\\)|O\\=\\)|O\\:3|B\\-\\)|8\\-\\)|B\\-D|8\\-D|\\-_\\-|\\>\\:\\\\|>\\:\\\\|\\>\\:\\/|>\\:\\/|\\:\\-\\/|\\:\\-\\.|\\:\\-P|\\:\xde|\\:\xde|\\:\\-b|\\:\\-O|O_O|\\>\\:O|>\\:O|\\:\\-X|\\:\\-#|\\:\\-\\)|\\(y\\)|\\<3|<3|\\=D|;\\)|\\*\\)|;\\]|;D|\\:\\*|\\=\\*|\\:\\(|\\:\\[|\\=\\(|\\:@|;\\(|D\\:|\\:\\$|\\=\\$|#\\)|%\\)|X\\)|B\\)|8\\)|\\:\\/|\\:\\\\|\\=\\/|\\=\\\\|\\:L|\\=L|\\:P|\\=P|\\:b|\\:O|\\:X|\\:#|\\=X|\\=#|\\:\\)|\\=\\]|\\=\\)|\\:\\]|\\:D)", ns.emojiVersion = "5.0", ns.emojiSize = "32", ns.blacklistChars = "", ns.imagePathPNG = "https://cdn.jsdelivr.net/joypixels/assets/" + ns.emojiVersion + "/png/unicode/", ns.defaultPathPNG = ns.imagePathPNG, ns.fileExtension = ".png", ns.imageTitleTag = !0, ns.sprites = !1, ns.unicodeAlt = !0, ns.ascii = !1, ns.riskyMatchAscii = !1, ns.regAscii = new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|((\\s|^)" + ns.asciiRegexp + "(?=\\s|$|[!,.?]))", "gi"), ns.regAsciiRisky = new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(()" + ns.asciiRegexp + "())", "gi"), ns.regUnicode = new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(?:[\u1f91D[\u1f3fB-\u1f3fF]\u200d\u1f9f1\u200d\u1f91D[\u1f3fB-\u1f3fF]])|(?:\ud83c\udff3)\ufe0f?\u200d?(?:\ud83c\udf08)|(?:\ud83d\udc41)\ufe0f?\u200d?(?:\ud83d\udde8)\ufe0f?|[#-9]\ufe0f?\u20e3|(?:(?:\ud83c\udff4)(?:\udb40[\udc60-\udcff]){1,6})|(?:\ud83c[\udde0-\uddff]){2}|(?:\ud83d[\udc68\udc69])\ufe0f?(?:\ud83c[\udffa-\udfff])?\u200d?(?:[\u2695\u2696\u2708]|\ud83c[\udf3e-\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92])|(?:\ud83d[\udc68\udc69]|\ud83e[\uddd0-\udddf])(?:\ud83c[\udffa-\udfff])?\u200d?[\u2640\u2642\u2695\u2696\u2708]?\ufe0f?|(?:(?:\u2764|\ud83d[\udc66-\udc69\udc8b])[\u200d\ufe0f]{0,2}){1,3}(?:\u2764|\ud83d[\udc66-\udc69\udc8b])|(?:(?:\u2764|\ud83d[\udc66-\udc69\udc8b])\ufe0f?){2,4}|(?:\ud83d[\udc68\udc69\udc6e\udc71-\udc87\udd75\ude45-\ude4e]|\ud83e[\udd26\udd37]|\ud83c[\udfc3-\udfcc]|\ud83e[\udd38-\udd3e]|\ud83d[\udea3-\udeb6]|\u26f9|\ud83d\udc6f)\ufe0f?(?:\ud83c[\udffb-\udfff])?\u200d?[\u2640\u2642]?\ufe0f?|(?:[\u261d\u26f9\u270a-\u270d]|\ud83c[\udf85-\udfcc]|\ud83d[\udc42-\udcaa\udd74-\udd96\ude45-\ude4f\udea3-\udecc]|\ud83e[\udd18-\udd3e])\ufe0f?(?:\ud83c[\udffb-\udfff])|(?:[\u2194-\u2199\u21a9-\u21aa]\ufe0f?|[#*]|[\u3030\u303d]\ufe0f?|(?:\ud83c[\udd70-\udd71]|\ud83c\udd8e|\ud83c[\udd91-\udd9a])\ufe0f?|\u24c2\ufe0f?|[\u3297\u3299]\ufe0f?|(?:\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51])\ufe0f?|[\u203c\u2049]\ufe0f?|[\u25aa-\u25ab\u25b6\u25c0\u25fb-\u25fe]\ufe0f?|[\xa9\xae]\ufe0f?|[\u2122\u2139]\ufe0f?|\ud83c\udc04\ufe0f?|[\u2b05-\u2b07\u2b1b-\u2b1c\u2b50\u2b55]\ufe0f?|[\u231a-\u231b\u2328\u23cf\u23e9-\u23f3\u23f8-\u23fa]\ufe0f?|\ud83c\udccf|[\u2934\u2935]\ufe0f?)|[\u2700-\u27bf]\ufe0f?|[\ud800-\udbff][\udc00-\udfff]\ufe0f?|[\u2600-\u26ff]\ufe0f?|[0-9]\ufe0f", "g"), ns.convert = function(unicode) {
        if (unicode.indexOf("-") > -1) {
            for (var parts = [], s = unicode.split("-"), i = 0; i < s.length; i++) {
                var part = parseInt(s[i], 16);
                if (part >= 65536 && 1114111 >= part) {
                    var hi = Math.floor((part - 65536) / 1024) + 55296,
                        lo = (part - 65536) % 1024 + 56320;
                    part = String.fromCharCode(hi) + String.fromCharCode(lo)
                } else part = String.fromCharCode(part);

                parts.push(part)
            }
            return parts.join("")
        }
        var s = parseInt(unicode, 16);
        if (s >= 65536 && 1114111 >= s) {
            var hi = Math.floor((s - 65536) / 1024) + 55296,
                lo = (s - 65536) % 1024 + 56320;
            return String.fromCharCode(hi) + String.fromCharCode(lo)
        }
        return String.fromCharCode(s)
    }, ns.shortnameLookup = [], ns.altShortNames = [];
    var emoji, tmpShortNames = [];
    for (emoji in ns.emojiList)
        if (ns.emojiList.hasOwnProperty(emoji) || "" === emoji) {
            tmpShortNames.push(emoji.replace(/[+]/g, "\\$&"));
            var cp = ns.convert(ns.emojiList[emoji].uc_full),
                i = 0;
            for (ns.shortnameLookup[cp] = emoji.replace(/[+]/g, "\\$&"), i = 0; i < ns.emojiList[emoji].shortnames.length; i++) tmpShortNames.push(ns.emojiList[emoji].shortnames[i].replace(/[+]/g, "\\$&")), ns.altShortNames[ns.emojiList[emoji].shortnames[i]] = emoji
        }
    ns.shortnames = tmpShortNames.join("|"), ns.regShortNames = new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(" + ns.shortnames + ")", "gi"), ns.toImage = function(str) {
        return str = ns.toShort(str), str = ns.shortnameToImage(str)
    }, ns.unicodeToImage = function(str) {
        return str
    }, ns.unifyUnicode = function(str) {
        return str = ns.toShort(str), str = ns.shortnameToUnicode(str)
    }, ns.shortnameToAscii = function(str) {
        var unicode, unicodeToAscii = ns.objectFlip(ns.asciiList);
        return str = str.replace(ns.regShortNames, function(shortname) {
            return "undefined" != typeof shortname && "" !== shortname && shortname in ns.emojiList ? (unicode = ns.emojiList[shortname].uc_full, "undefined" != typeof unicodeToAscii[unicode] ? unicodeToAscii[unicode] : shortname) : shortname
        })
    }, ns.shortnameToUnicode = function(str) {
        var unicode, fname;
        if (str = str.replace(ns.regShortNames, function(shortname) {
                if ("undefined" == typeof shortname || "" === shortname) return shortname;
                if (!(shortname in ns.emojiList)) {
                    if (!(shortname in ns.altShortNames)) return shortname;
                    shortname = ns.altShortNames[shortname]
                }
                return unicode = ns.emojiList[shortname].uc_full.toUpperCase(), fname = ns.emojiList[shortname].uc_base, ns.convert(unicode)
            }), ns.ascii) {
            var asciiRX = ns.riskyMatchAscii ? ns.regAsciiRisky : ns.regAscii;
            str = str.replace(asciiRX, function(entire, m1, m2, m3) {
                return "undefined" != typeof m3 && "" !== m3 && ns.unescapeHTML(m3) in ns.asciiList ? (m3 = ns.unescapeHTML(m3), unicode = ns.asciiList[m3].toUpperCase(), m2 + ns.convert(unicode)) : entire
            })
        }
        return str
    }, ns.shortnameToImage = function(str) {
        var replaceWith, shortname, unicode, fname, alt, category, title, size, ePath;
        if (str = str.replace(ns.regShortNames, function(shortname) {
                if ("undefined" == typeof shortname || "" === shortname) return shortname;
                if (!(shortname in ns.emojiList)) {
                    if (!(shortname in ns.altShortNames)) return shortname;
                    shortname = ns.altShortNames[shortname]
                }
                return unicode = ns.emojiList[shortname].uc_full, fname = ns.emojiList[shortname].uc_base, category = fname.indexOf("-1f3f") >= 0 ? "diversity" : ns.emojiList[shortname].category, title = ns.imageTitleTag ? 'title="' + shortname + '"' : "", size = "32" == ns.spriteSize || "64" == ns.spriteSize ? ns.spriteSize : "32", ePath = ns.defaultPathPNG !== ns.imagePathPNG ? ns.imagePathPNG : ns.defaultPathPNG + ns.emojiSize + "/", alt = ns.unicodeAlt ? ns.convert(unicode.toUpperCase()) : shortname, replaceWith = ns.sprites ? '<span class="joypixels joypixels-' + size + "-" + category + " _" + fname + '" ' + title + ">" + alt + "</span>" : '<img class="joypixels" alt="' + alt + '" ' + title + ' src="' + ePath + fname + ns.fileExtension + '"/>'
            }), ns.ascii) {
            var asciiRX = ns.riskyMatchAscii ? ns.regAsciiRisky : ns.regAscii;
            str = str.replace(asciiRX, function(entire, m1, m2, m3) {
                if ("undefined" == typeof m3 || "" === m3 || !(ns.unescapeHTML(m3) in ns.asciiList)) return entire;
                m3 = ns.unescapeHTML(m3), unicode = ns.asciiList[m3];
                var mappedUnicode = ns.mapUnicodeToShort();
                return shortname = mappedUnicode[unicode], category = unicode.indexOf("-1f3f") >= 0 ? "diversity" : ns.emojiList[shortname].category, title = ns.imageTitleTag ? 'title="' + ns.escapeHTML(m3) + '"' : "", size = "32" == ns.spriteSize || "64" == ns.spriteSize ? ns.spriteSize : "32", ePath = ns.defaultPathPNG !== ns.imagePathPNG ? ns.imagePathPNG : ns.defaultPathPNG + ns.emojiSize + "/", alt = ns.unicodeAlt ? ns.convert(unicode.toUpperCase()) : ns.escapeHTML(m3), replaceWith = ns.sprites ? m2 + '<span class="joypixels joypixels-' + size + "-" + category + " _" + unicode + '"  ' + title + ">" + alt + "</span>" : m2 + '<img class="joypixels" alt="' + alt + '" ' + title + ' src="' + ePath + unicode + ns.fileExtension + '"/>'
            })
        }
        return str
    }, ns.toShort = function(str) {
        var find = ns.unicodeCharRegex();
        return str = ns.replaceAll(str, find)
    }, ns.escapeHTML = function(string) {
        var escaped = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };
        return string.replace(/[&<>"']/g, function(match) {
            return escaped[match]
        })
    }, ns.unescapeHTML = function(string) {
        var unescaped = {
            "&amp;": "&",
            "&#38;": "&",
            "&#x26;": "&",
            "&lt;": "<",
            "&#60;": "<",
            "&#x3C;": "<",
            "&gt;": ">",
            "&#62;": ">",
            "&#x3E;": ">",
            "&quot;": '"',
            "&#34;": '"',
            "&#x22;": '"',
            "&apos;": "'",
            "&#39;": "'",
            "&#x27;": "'"
        };
        return string.replace(/&(?:amp|#38|#x26|lt|#60|#x3C|gt|#62|#x3E|apos|#39|#x27|quot|#34|#x22);/gi, function(match) {
            return unescaped[match]
        })
    }, ns.shortnameConversionMap = function() {
        var emoji, map = [];
        for (emoji in ns.emojiList) ns.emojiList.hasOwnProperty(emoji) && "" !== emoji && (map[ns.convert(ns.emojiList[emoji].uc_full)] = emoji);
        return map
    }, ns.unicodeCharRegex = function() {
        var map = [];
        for (emoji in ns.emojiList) ns.emojiList.hasOwnProperty(emoji) && "" !== emoji && map.push(ns.convert(ns.emojiList[emoji].uc_full));
        return map.join("|")
    }, ns.mapEmojiList = function(addToMapStorage) {
        for (var shortname in ns.emojiList)
            if (ns.emojiList.hasOwnProperty(shortname)) {
                var unicode = ns.emojiList[shortname].uc_full;
                addToMapStorage(unicode, shortname)
            }
    }, ns.mapUnicodeToShort = function() {
        return ns.memMapShortToUnicode || (ns.memMapShortToUnicode = {}, ns.mapEmojiList(function(unicode, shortname) {
            ns.memMapShortToUnicode[unicode] = shortname
        })), ns.memMapShortToUnicode
    }, ns.memorizeReplacement = function() {
        if (!ns.unicodeReplacementRegEx || !ns.memMapShortToUnicodeCharacters) {
            var unicodeList = [];
            ns.memMapShortToUnicodeCharacters = {}, ns.mapEmojiList(function(unicode, shortname) {
                var emojiCharacter = ns.convert(unicode);
                ns.memMapShortToUnicodeCharacters[emojiCharacter] = shortname, unicodeList.push(emojiCharacter)
            }), ns.unicodeReplacementRegEx = unicodeList.join("|")
        }
    }, ns.mapUnicodeCharactersToShort = function() {
        return ns.memorizeReplacement(), ns.memMapShortToUnicodeCharacters
    }, ns.objectFlip = function(obj) {
        var key, tmp_obj = {};
        for (key in obj) obj.hasOwnProperty(key) && (tmp_obj[obj[key]] = key);
        return tmp_obj
    }, ns.escapeRegExp = function(string) {
        return string.replace(/[-[\]{}()*+?.,;:&\\^$#\s]/g, "\\$&")
    }, ns.replaceAll = function(string, find) {
        var escapedFind = ns.escapeRegExp(find),
            search = new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(" + escapedFind + ")", "gi"),
            replace = function(entire, m1) {
                return "undefined" == typeof m1 || "" === m1 ? entire : ns.shortnameLookup[m1]
            };
        return string.replace(search, replace)
    }
}(this.joypixels = this.joypixels || {}), "object" == typeof module && (module.exports = this.joypixels);