(function(n, t, i) {
    var d = "TEXTAREA",
        g = "function",
        nt = "password",
        c = "maxLength",
        a = "type",
        r = "",
        u = !0,
        tt = "placeholder",
        e = !1,
        it = "watermark",
        o = it,
        s = "watermarkClass",
        y = "watermarkFocus",
        v = "watermarkSubmit",
        p = "watermarkMaxLength",
        h = "watermarkPassword",
        f = "watermarkText",
        l = /\r/g,
        ut = /^(button|checkbox|hidden|image|radio|range|reset|submit)$/i,
        rt = "input:data(" + o + "),textarea:data(" + o + ")",
        w = ":watermarkable",
        b = ["Page_ClientValidate"],
        k = e,
        ft = tt in document.createElement("input");
    n.watermark = n.watermark || {
        version: "3.1.4",
        runOnce: u,
        options: {
            className: it,
            useNative: u,
            hideBeforeUnload: u
        },
        hide: function(t) {
            n(t).filter(rt).each(function() {
                n.watermark._hide(n(this))
            })
        },
        _hide: function(n, i) {
            var o = n[0],
                b = (o.value || r).replace(l, r),
                v = n.data(f) || r,
                y = n.data(p) || 0,
                w = n.data(s),
                u, e;
            v.length && b == v && (o.value = r, n.data(h) && (n.attr(a) || r) === "text" && (u = n.data(h) || [], e = n.parent() || [], u.length && e.length && (e[0].removeChild(n[0]), e[0].appendChild(u[0]), n = u)), y && (n.attr(c, y), n.removeData(p)), i && (n.attr("autocomplete", "off"), t.setTimeout(function() {
                n.select()
            }, 1))), w && n.removeClass(w)
        },
        show: function(t) {
            n(t).filter(rt).each(function() {
                n.watermark._show(n(this))
            })
        },
        _show: function(t) {
            var w = t[0],
                d = (w.value || r).replace(l, r),
                i = t.data(f) || r,
                b = t.attr(a) || r,
                g = t.data(s),
                e, o, v;
            d.length != 0 && d != i || t.data(y) ? n.watermark._hide(t) : (k = u, t.data(h) && b === nt && (e = t.data(h) || [], o = t.parent() || [], e.length && o.length && (o[0].removeChild(t[0]), o[0].appendChild(e[0]), t = e, t.attr(c, i.length), w = t[0])), (b === "text" || b === "search") && (v = t.attr(c) || 0, v > 0 && i.length > v && (t.data(p, v), t.attr(c, i.length))), g && t.addClass(g), w.value = i)
        },
        hideAll: function() {
            k && (n.watermark.hide(w), k = e)
        },
        showAll: function() {
            n.watermark.show(w)
        }
    }, n.fn.watermark = n.fn.watermark || function(i, p) {
        var it = "string",
            k, b;
        return this.length ? (k = e, b = typeof i == it, b && (i = i.replace(l, r)), typeof p == "object" ? (k = typeof p.className == it, p = n.extend({}, n.watermark.options, p)) : typeof p == it ? (k = u, p = n.extend({}, n.watermark.options, {
            className: p
        })) : p = n.watermark.options, typeof p.useNative != g && (p.useNative = p.useNative ? function() {
            return u
        } : function() {
            return e
        }), this.each(function() {
            var et = "dragleave",
                ot = "dragenter",
                ut = this,
                e = n(ut),
                st, g, it, rt;
            if (e.is(w)) {
                if (e.data(o))(b || k) && (n.watermark._hide(e), b && e.data(f, i), k && e.data(s, p.className));
                else {
                    if (ft && p.useNative.call(ut, e) && (e.attr("tagName") || r) !== d) {
                        b && e.attr(tt, i);
                        return
                    }
                    e.data(f, b ? i : r), e.data(s, p.className), e.data(o, 1), (e.attr(a) || r) === nt ? (st = e.wrap("<span>").parent(), g = n(st.html().replace(/type=["']?password["']?/i, 'type="text"')), g.data(f, e.data(f)), g.data(s, e.data(s)), g.data(o, 1), g.attr(c, i.length), g.focus(function() {
                        n.watermark._hide(g, u)
                    }).bind(ot, function() {
                        n.watermark._hide(g)
                    }).bind("dragend", function() {
                        t.setTimeout(function() {
                            g.blur()
                        }, 1)
                    }), e.blur(function() {
                        n.watermark._show(e)
                    }).bind(et, function() {
                        n.watermark._show(e)
                    }), g.data(h, e), e.data(h, g)) : e.focus(function() {
                        e.data(y, 1), n.watermark._hide(e, u)
                    }).blur(function() {
                        e.data(y, 0), n.watermark._show(e)
                    }).bind(ot, function() {
                        n.watermark._hide(e)
                    }).bind(et, function() {
                        n.watermark._show(e)
                    }).bind("dragend", function() {
                        t.setTimeout(function() {
                            n.watermark._show(e)
                        }, 1)
                    }).bind("drop", function(n) {
                        var t = e[0],
                            i = n.originalEvent.dataTransfer.getData("Text");
                        (t.value || r).replace(l, r).replace(i, r) === e.data(f) && (t.value = i), e.focus()
                    }), ut.form && (it = ut.form, rt = n(it), rt.data(v) || (rt.submit(n.watermark.hideAll), it.submit ? (rt.data(v, it.submit), it.submit = function(t, i) {
                        return function() {
                            var r = i.data(v);
                            n.watermark.hideAll(), r.apply ? r.apply(t, Array.prototype.slice.call(arguments)) : r()
                        }
                    }(it, rt)) : (rt.data(v, 1), it.submit = function(t) {
                        return function() {
                            n.watermark.hideAll(), delete t.submit, t.submit()
                        }
                    }(it))))
                }
                n.watermark._show(e)
            }
        })) : this
    }, n.watermark.runOnce && (n.watermark.runOnce = e, n.extend(n.expr[":"], {
        data: n.expr.createPseudo ? n.expr.createPseudo(function(t) {
            return function(i) {
                return !!n.data(i, t)
            }
        }) : function(t, i, r) {
            return !!n.data(t, r[3])
        },
        watermarkable: function(n) {
            var t, i = n.nodeName;
            return i === d ? u : i !== "INPUT" ? e : (t = n.getAttribute(a), !t || !ut.test(t))
        }
    }), function(t) {
        n.fn.val = function() {
            var u = this,
                e = Array.prototype.slice.call(arguments),
                s;
            return u.length ? e.length ? (t.apply(u, e), n.watermark.show(u), u) : u.data(o) ? (s = (u[0].value || r).replace(l, r), s === (u.data(f) || r) ? r : s) : t.apply(u) : e.length ? u : i
        }
    }(n.fn.val), b.length && n(function() {
        for (var i, r, u = b.length - 1; u >= 0; u--) i = b[u], r = t[i], typeof r == g && (t[i] = function(t) {
            return function() {
                return n.watermark.hideAll(), t.apply(null, Array.prototype.slice.call(arguments))
            }
        }(r))
    }), n(t).bind("beforeunload", function() {
        n.watermark.options.hideBeforeUnload && n.watermark.hideAll()
    }))
})(jQuery, window);