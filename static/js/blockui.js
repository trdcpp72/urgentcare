(function() {
    "use strict";

    function n(n) {
        function o(o, s) {
            var rt, ut, p = o == window,
                c = s && s.message !== undefined ? s.message : undefined,
                g, k, d, tt, nt, w, b, it, ft, et, ot;
            if (s = n.extend({}, n.blockUI.defaults, s || {}), !s.ignoreIfBlocked || !n(o).data("blockUI.isBlocked")) {
                if (s.overlayCSS = n.extend({}, n.blockUI.defaults.overlayCSS, s.overlayCSS || {}), rt = n.extend({}, n.blockUI.defaults.css, s.css || {}), s.onOverlayClick && (s.overlayCSS.cursor = "pointer"), ut = n.extend({}, n.blockUI.defaults.themedCSS, s.themedCSS || {}), c = c === undefined ? s.message : c, p && t && u(window, {
                        fadeOut: 0
                    }), c && typeof c != "string" && (c.parentNode || c.jquery) && (g = c.jquery ? c[0] : c, k = {}, n(o).data("blockUI.history", k), k.el = g, k.parent = g.parentNode, k.display = g.style.display, k.position = g.style.position, k.parent && k.parent.removeChild(g)), n(o).data("blockUI.onUnblock", s.onUnblock), d = s.baseZ, tt = e || s.forceIframe ? n('<iframe class="blockUI" style="z-index:' + d++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + s.iframeSrc + '"><\/iframe>') : n('<div class="blockUI" style="display:none"><\/div>'), nt = s.theme ? n('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + d++ + ';display:none"><\/div>') : n('<div class="blockUI blockOverlay" style="z-index:' + d++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"><\/div>'), s.theme && p ? (b = '<div class="blockUI ' + s.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (d + 10) + ';display:none;position:fixed">', s.title && (b += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (s.title || "&nbsp;") + "<\/div>"), b += '<div class="ui-widget-content ui-dialog-content"><\/div>', b += "<\/div>") : s.theme ? (b = '<div class="blockUI ' + s.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (d + 10) + ';display:none;position:absolute">', s.title && (b += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (s.title || "&nbsp;") + "<\/div>"), b += '<div class="ui-widget-content ui-dialog-content"><\/div>', b += "<\/div>") : b = p ? '<div class="blockUI ' + s.blockMsgClass + ' blockPage" style="z-index:' + (d + 10) + ';display:none;position:fixed"><\/div>' : '<div class="blockUI ' + s.blockMsgClass + ' blockElement" style="z-index:' + (d + 10) + ';display:none;position:absolute"><\/div>', w = n(b), c && (s.theme ? (w.css(ut), w.addClass("ui-widget-content")) : w.css(rt)), s.theme || nt.css(s.overlayCSS), nt.css("position", p ? "fixed" : "absolute"), (e || s.forceIframe) && tt.css("opacity", 0), it = [tt, nt, w], ft = p ? n("body") : n(o), n.each(it, function() {
                        this.appendTo(ft)
                    }), s.theme && s.draggable && n.fn.draggable && w.draggable({
                        handle: ".ui-dialog-titlebar",
                        cancel: "li"
                    }), et = y && (!n.support.boxModel || n("object,embed", p ? null : o).length > 0), a || et) {
                    if (p && s.allowBodyStretch && n.support.boxModel && n("html,body").css("height", "100%"), (a || !n.support.boxModel) && !p) var st = r(o, "borderTopWidth"),
                        ht = r(o, "borderLeftWidth"),
                        ct = st ? "(0 - " + st + ")" : 0,
                        lt = ht ? "(0 - " + ht + ")" : 0;
                    n.each(it, function(n, t) {
                        var i = t[0].style,
                            r, u;
                        i.position = "absolute", n < 2 ? (p ? i.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + s.quirksmodeOffsetHack + ') + "px"') : i.setExpression("height", 'this.parentNode.offsetHeight + "px"'), p ? i.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : i.setExpression("width", 'this.parentNode.offsetWidth + "px"'), lt && i.setExpression("left", lt), ct && i.setExpression("top", ct)) : s.centerY ? (p && i.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), i.marginTop = 0) : !s.centerY && p && (r = s.css && s.css.top ? parseInt(s.css.top, 10) : 0, u = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + r + ') + "px"', i.setExpression("top", u))
                    })
                }
                if (c && (s.theme ? w.find(".ui-widget-content").append(c) : w.append(c), (c.jquery || c.nodeType) && n(c).show()), (e || s.forceIframe) && s.showOverlay && tt.show(), s.fadeIn) {
                    var at = s.onBlock ? s.onBlock : f,
                        vt = s.showOverlay && !c ? at : f,
                        yt = c ? at : f;
                    s.showOverlay && nt._fadeIn(s.fadeIn, vt), c && w._fadeIn(s.fadeIn, yt)
                } else s.showOverlay && nt.show(), c && w.show(), s.onBlock && s.onBlock();
                h(1, o, s), p ? (t = w[0], i = n(s.focusableElements, t), s.focusInput && setTimeout(l, 20)) : v(w[0], s.centerX, s.centerY), s.timeout && (ot = setTimeout(function() {
                    p ? n.unblockUI(s) : n(o).unblock(s)
                }, s.timeout), n(o).data("blockUI.timeout", ot))
            }
        }

        function u(r, u) {
            var o, c = r == window,
                e = n(r),
                l = e.data("blockUI.history"),
                a = e.data("blockUI.timeout"),
                f;
            a && (clearTimeout(a), e.removeData("blockUI.timeout")), u = n.extend({}, n.blockUI.defaults, u || {}), h(0, r, u), u.onUnblock === null && (u.onUnblock = e.data("blockUI.onUnblock"), e.removeData("blockUI.onUnblock")), f = c ? n("body").children().filter(".blockUI").add("body > .blockUI") : e.find(">.blockUI"), u.cursorReset && (f.length > 1 && (f[1].style.cursor = u.cursorReset), f.length > 2 && (f[2].style.cursor = u.cursorReset)), c && (t = i = null), u.fadeOut ? (o = f.length, f.stop().fadeOut(u.fadeOut, function() {
                --o == 0 && s(f, l, u, r)
            })) : s(f, l, u, r)
        }

        function s(t, i, r, u) {
            var f = n(u);
            if (!f.data("blockUI.isBlocked")) {
                if (t.each(function() {
                        this.parentNode && this.parentNode.removeChild(this)
                    }), i && i.el && (i.el.style.display = i.display, i.el.style.position = i.position, i.parent && i.parent.appendChild(i.el), f.removeData("blockUI.history")), f.data("blockUI.static") && f.css("position", "static"), typeof r.onUnblock == "function") r.onUnblock(u, r);
                var e = n(document.body),
                    o = e.width(),
                    s = e[0].style.width;
                e.width(o - 1).width(o), e[0].style.width = s
            }
        }

        function h(i, r, u) {
            var f = r == window,
                o = n(r),
                e;
            (i || (!f || t) && (f || o.data("blockUI.isBlocked"))) && (o.data("blockUI.isBlocked", i), f && u.bindEvents && (!i || u.showOverlay)) && (e = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove", i ? n(document).bind(e, u, c) : n(document).unbind(e, c))
        }

        function c(r) {
            var u, f;
            if (r.type === "keydown" && r.keyCode && r.keyCode == 9 && t && r.data.constrainTabKey) {
                var e = i,
                    s = !r.shiftKey && r.target === e[e.length - 1],
                    o = r.shiftKey && r.target === e[0];
                if (s || o) return setTimeout(function() {
                    l(o)
                }, 10), !1
            }
            if (u = r.data, f = n(r.target), f.hasClass("blockOverlay") && u.onOverlayClick) u.onOverlayClick(r);
            return f.parents("div." + u.blockMsgClass).length > 0 ? !0 : f.parents().children().filter("div.blockUI").length === 0
        }

        function l(n) {
            if (i) {
                var t = i[n === !0 ? i.length - 1 : 0];
                t && t.focus()
            }
        }

        function v(n, t, i) {
            var u = n.parentNode,
                f = n.style,
                e = (u.offsetWidth - n.offsetWidth) / 2 - r(u, "borderLeftWidth"),
                o = (u.offsetHeight - n.offsetHeight) / 2 - r(u, "borderTopWidth");
            t && (f.left = e > 0 ? e + "px" : "0"), i && (f.top = o > 0 ? o + "px" : "0")
        }

        function r(t, i) {
            return parseInt(n.css(t, i), 10) || 0
        }
        var t, i;
        n.fn._fadeIn = n.fn.fadeIn;
        var f = n.noop || function() {},
            e = /MSIE/.test(navigator.userAgent),
            a = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            p = document.documentMode || 0,
            y = n.isFunction(document.createElement("div").style.setExpression);
        n.blockUI = function(n) {
            o(window, n)
        }, n.unblockUI = function(n) {
            u(window, n)
        }, n.growlUI = function(t, i, r, u) {
            var f = n('<div class="growlUI"><\/div>'),
                e, o;
            t && f.append("<h1>" + t + "<\/h1>"), i && f.append("<h2>" + i + "<\/h2>"), r === undefined && (r = 3e3), e = function(t) {
                t = t || {}, n.blockUI({
                    message: f,
                    fadeIn: typeof t.fadeIn != "undefined" ? t.fadeIn : 700,
                    fadeOut: typeof t.fadeOut != "undefined" ? t.fadeOut : 1e3,
                    timeout: typeof t.timeout != "undefined" ? t.timeout : r,
                    centerY: !1,
                    showOverlay: !1,
                    onUnblock: u,
                    css: n.blockUI.defaults.growlCSS
                })
            }, e(), o = f.css("opacity"), f.mouseover(function() {
                e({
                    fadeIn: 0,
                    timeout: 3e4
                });
                var t = n(".blockMsg");
                t.stop(), t.fadeTo(300, 1)
            }).mouseout(function() {
                n(".blockMsg").fadeOut(1e3)
            })
        }, n.fn.block = function(t) {
            if (this[0] === window) return n.blockUI(t), this;
            var i = n.extend({}, n.blockUI.defaults, t || {});
            return this.each(function() {
                var t = n(this);
                i.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({
                    fadeOut: 0
                })
            }), this.each(function() {
                n.css(this, "position") == "static" && (this.style.position = "relative", n(this).data("blockUI.static", !0)), this.style.zoom = 1, o(this, t)
            })
        }, n.fn.unblock = function(t) {
            return this[0] === window ? (n.unblockUI(t), this) : this.each(function() {
                u(this, t)
            })
        }, n.blockUI.version = 2.66, n.blockUI.defaults = {
            message: "<h1>Please wait...<\/h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: {
                padding: 0,
                margin: 0,
                width: "30%",
                top: "40%",
                left: "35%",
                textAlign: "center",
                color: "#000",
                border: "3px solid #aaa",
                backgroundColor: "#fff",
                cursor: "wait"
            },
            themedCSS: {
                width: "30%",
                top: "40%",
                left: "35%"
            },
            overlayCSS: {
                backgroundColor: "#000",
                opacity: .6,
                cursor: "wait"
            },
            cursorReset: "default",
            growlCSS: {
                width: "350px",
                top: "10px",
                left: "",
                right: "10px",
                border: "none",
                padding: "5px",
                opacity: .6,
                cursor: "default",
                color: "#fff",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                "border-radius": "10px"
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 1e3,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            focusableElements: ":input:enabled:visible",
            onBlock: null,
            onUnblock: null,
            onOverlayClick: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg",
            ignoreIfBlocked: !1
        }, t = null, i = []
    }
    typeof define == "function" && define.amd && define.amd.jQuery ? define(["jquery"], n) : n(jQuery)
})()