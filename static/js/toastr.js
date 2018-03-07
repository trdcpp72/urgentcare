(function(n) {
    n(["jquery"], function(n) {
        return function() {
            function l(n, t, u) {
                return r({
                    type: f.error,
                    iconClass: i().iconClasses.error,
                    message: n,
                    optionsOverride: u,
                    title: t
                })
            }

            function a(n, t, u) {
                return r({
                    type: f.info,
                    iconClass: i().iconClasses.info,
                    message: n,
                    optionsOverride: u,
                    title: t
                })
            }

            function v(n) {
                e = n
            }

            function y(n, t, u) {
                return r({
                    type: f.success,
                    iconClass: i().iconClasses.success,
                    message: n,
                    optionsOverride: u,
                    title: t
                })
            }

            function p(n, t, u) {
                return r({
                    type: f.warning,
                    iconClass: i().iconClasses.warning,
                    message: n,
                    optionsOverride: u,
                    title: t
                })
            }

            function w(r) {
                var f = i();
                if (t || u(f), r && n(":focus", r).length === 0) {
                    r[f.hideMethod]({
                        duration: f.hideDuration,
                        easing: f.hideEasing,
                        complete: function() {
                            s(r)
                        }
                    });
                    return
                }
                t.children().length && t[f.hideMethod]({
                    duration: f.hideDuration,
                    easing: f.hideEasing,
                    complete: function() {
                        t.remove()
                    }
                })
            }

            function b() {
                return {
                    tapToDismiss: !0,
                    toastClass: "toast",
                    containerId: "toast-container",
                    debug: !1,
                    showMethod: "fadeIn",
                    showDuration: 300,
                    showEasing: "swing",
                    onShown: undefined,
                    hideMethod: "fadeOut",
                    hideDuration: 1e3,
                    hideEasing: "swing",
                    onHidden: undefined,
                    extendedTimeOut: 1e3,
                    iconClasses: {
                        error: "toast-error",
                        info: "toast-info",
                        success: "toast-success",
                        warning: "toast-warning"
                    },
                    iconClass: "toast-info",
                    positionClass: "toast-top-right",
                    timeOut: 5e3,
                    titleClass: "toast-title",
                    messageClass: "toast-message",
                    target: "body",
                    closeHtml: "<button>&times;<\/button>",
                    newestOnTop: !0
                }
            }

            function o(n) {
                e && e(n)
            }

            function r(r) {
                function c(t) {
                    if (!n(":focus", e).length || t) return e[f.hideMethod]({
                        duration: f.hideDuration,
                        easing: f.hideEasing,
                        complete: function() {
                            s(e), f.onHidden && f.onHidden(), l.state = "hidden", l.endTime = new Date, o(l)
                        }
                    })
                }

                function b() {
                    (f.timeOut > 0 || f.extendedTimeOut > 0) && (y = setTimeout(c, f.extendedTimeOut))
                }

                function k() {
                    clearTimeout(y), e.stop(!0, !0)[f.showMethod]({
                        duration: f.showDuration,
                        easing: f.showEasing
                    })
                }
                var f = i(),
                    v = r.iconClass || f.iconClass;
                typeof r.optionsOverride != "undefined" && (f = n.extend(f, r.optionsOverride), v = r.optionsOverride.iconClass || v), h++, t = u(f);
                var y = null,
                    e = n("<div/>"),
                    p = n("<div/>"),
                    w = n("<div/>"),
                    a = n(f.closeHtml),
                    l = {
                        toastId: h,
                        state: "visible",
                        startTime: new Date,
                        options: f,
                        map: r
                    };
                return r.iconClass && e.addClass(f.toastClass).addClass(v), r.title && (p.append(r.title).addClass(f.titleClass), e.append(p)), r.message && (w.append(r.message).addClass(f.messageClass), e.append(w)), f.closeButton && (a.addClass("toast-close-button"), e.prepend(a)), e.hide(), f.newestOnTop ? t.prepend(e) : t.append(e), e[f.showMethod]({
                    duration: f.showDuration,
                    easing: f.showEasing,
                    complete: f.onShown
                }), f.timeOut > 0 && (y = setTimeout(c, f.timeOut)), e.hover(k, b), !f.onclick && f.tapToDismiss && e.click(c), f.closeButton && a && a.click(function(n) {
                    n.stopPropagation(), c(!0)
                }), f.onclick && e.click(function() {
                    f.onclick(), c()
                }), o(l), f.debug && console && console.log(l), e
            }

            function u(r) {
                return (r || (r = i()), t = n("#" + r.containerId), t.length) ? t : (t = n("<div/>").attr("id", r.containerId).addClass(r.positionClass), t.appendTo(n(r.target)), t)
            }

            function i() {
                return n.extend({}, b(), c.options)
            }

            function s(n) {
                (t || (t = u()), n.is(":visible")) || (n.remove(), n = null, t.children().length === 0 && t.remove())
            }
            var t, e, h = 0,
                f = {
                    error: "error",
                    info: "info",
                    success: "success",
                    warning: "warning"
                },
                c = {
                    clear: w,
                    error: l,
                    getContainer: u,
                    info: a,
                    options: {},
                    subscribe: v,
                    success: y,
                    version: "2.0.1",
                    warning: p
                };
            return c
        }()
    })
})(typeof define == "function" && define.amd ? define : function(n, t) {
    typeof module != "undefined" && module.exports ? module.exports = t(require(n[0])) : window.toastr = t(window.jQuery)
})