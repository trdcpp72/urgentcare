google.maps.__gjsload__('infowindow', function(_) {
    var eU = function() {
            this.b = new _.gB
        },
        gU = function() {
            this.b = _.Y("div");
            this.m = _.Y("div", this.b);
            fU(this.m, "rgba(0,0,0,0.1)", !1);
            this.f = _.Y("div", this.b, _.Zh);
            this.f.style.backgroundColor = "rgba(0,0,0,0.2)";
            _.jB(this.f, _.W(2));
            _.iB(this.f, "0 1px 4px -1px rgba(0,0,0,0.3)");
            this.l = _.Y("div", this.b);
            fU(this.l, "#fff", !0);
            this.j = _.Y("div", this.b, new _.z(1, 1));
            _.jB(this.j, _.W(2));
            this.j.style.backgroundColor = "#fff"
        },
        fU = function(a, b, c) {
            if (c) {
                c = _.wm.b;
                var d = _.Y("div", a);
                a = _.Y("div", a);
                var e = _.Y("div", d),
                    f = _.Y("div",
                        a);
                e.style.position = d.style.position = f.style.position = a.style.position = "absolute";
                d.style.overflow = a.style.overflow = "hidden";
                e.style.left = f.style.left = a.style.top = "0";
                d.style.left = _.W(-6);
                d.style.top = a.style.top = _.W(-1);
                e.style.left = _.W(6);
                a.style.left = _.W(10);
                d.style.width = a.style.width = _.W(16);
                d.style.height = a.style.height = _.W(30);
                e.style.backgroundColor = f.style.backgroundColor = b;
                c && (e.style[c] = "skewX(22.6deg)", f.style[c] = "skewX(-22.6deg)", e.style[c + "Origin"] = "0 0", f.style[c + "Origin"] = _.W(10) + " 0");
                e.style.height = f.style.height = _.W(24);
                e.style.width = f.style.width = _.W(10);
                e.style.boxShadow = f.style.boxShadow = "rgba(0,0,0,0.6) 0px 1px " + _.W(6)
            } else _.Tf(a, _.$h), a.style.borderLeft = a.style.borderRight = "0 solid transparent", a.style.borderTop = "0 solid " + b, a.style.borderLeftWidth = a.style.borderRightWidth = _.W(Math.round(10))
        },
        iU = function(a, b) {
            return new hU(a, b, void 0)
        },
        hU = function(a, b, c) {
            var d = a.offsetWidth,
                e = a.offsetHeight;
            this.b = window.setInterval(function() {
                var c = a.offsetWidth,
                    g = a.offsetHeight;
                if (c !=
                    d || g != e) b(new _.D(c, g)), d = c, e = g
            }, c || 100)
        },
        kU = function(a, b, c, d, e) {
            this.l = null;
            this.F = b;
            var f = this.f = _.Y("div");
            _.tm(f, "default");
            f.style.position = "absolute";
            a.floatPane.appendChild(this.f);
            a = b.ga();
            _.mm(a, _.Zh);
            this.f.appendChild(a);
            this.b = _.Y("div", f);
            this.b.style.top = _.W(9);
            this.b.style.position = "absolute";
            c ? this.b.style.right = _.W(15) : this.b.style.left = _.W(15);
            _.LG();
            _.Zl(this.b, "gm-style-iw");
            this.j = _.Y("div", this.b);
            this.j.style.display = "inline-block";
            this.j.style.overflow = "auto";
            d && this.b.appendChild(d);
            _.G.addDomListener(f, "mousedown", _.Oc);
            _.G.addDomListener(f, "mouseup", _.Oc);
            _.G.addDomListener(f, "mousemove", _.Oc);
            _.G.addDomListener(f, "pointerdown", _.Oc);
            _.G.addDomListener(f, "pointerup", _.Oc);
            _.G.addDomListener(f, "pointermove", _.Oc);
            _.G.addDomListener(f, "dblclick", _.Oc);
            _.G.addDomListener(f, "click", _.Oc);
            _.G.addDomListener(f, "touchstart", _.Oc);
            _.G.addDomListener(f, "touchend", _.Oc);
            _.G.addDomListener(f, "touchmove", _.Oc);
            _.G.X(f, "contextmenu", this, this.pm);
            _.G.X(f, "mousewheel", this, _.Lc);
            _.G.X(f,
                "MozMousePixelScroll", this, _.Lc);
            new _.QG(this.f, (0, _.t)(this.zm, this), e || jU);
            this.m = null;
            this.D = !1;
            this.C = new _.fo(function() {
                !this.D && this.get("content") && this.get("visible") && (_.G.trigger(this, "domready"), this.D = !0)
            }, 0, this);
            this.B = null
        },
        lU = function(a, b) {
            _.aB(a.f, b);
            a.b.style.overflow = b ? "" : "hidden";
            b || _.Tf(a.b, _.$h)
        },
        mU = function(a) {
            var b = a.get("position"),
                c = a.get("pixelOffset");
            if (a.l && b && c) {
                var d = a.l.width,
                    e = a.l.height + 24,
                    f = b.x + c.width - (d >> 1);
                b = b.y + c.height - e;
                _.mm(a.f, new _.z(f, b));
                var g = a.get("zIndex");
                _.um(a.f, _.x(g) ? g : b);
                e = b + e + 5;
                0 > c.height && (e -= c.height);
                a.set("pixelBounds", _.oc(f - 5, b - 5, f + d + 5, e))
            }
        },
        oU = function(a) {
            a = a.__gm.get("panes");
            var b = _.Y("div");
            b.style.borderTop = "1px solid #ccc";
            b.style.marginTop = "9px";
            b.style.paddingTop = "6px";
            var c = new _.Ug(b),
                d = new kU(a, new gU, _.Qw.b, b);
            _.G.addListener(c, "place_changed", function() {
                var a = c.get("place");
                d.set("apiContentSize", a ? nU : _.$h);
                _.YA(b, !!a)
            });
            return {
                In: c,
                view: d
            }
        },
        pU = function(a, b) {
            this.m = !0;
            var c = b.__gm,
                d = this,
                e = this.aa = new _.JG;
            e.bindTo("center",
                c, "projectionCenterQ");
            e.bindTo("zoom", c);
            e.bindTo("offset", c);
            e.bindTo("projection", b);
            e.bindTo("focus", b, "position");
            e.bindTo("latLngPosition", a, "position");
            this.b = b instanceof _.Ud ? a.b.get("logAsInternal") ? "Ia" : "Id" : null;
            this.f = [];
            var f = new _.VB(["scale"], "visible", function(a) {
                return null == a || .3 <= a
            });
            e && f.bindTo("scale", e);
            var g = oU(b);
            this.B = g.In;
            this.l = g.view;
            g = this.B;
            var h = this.l;
            g && (g.bindTo("place", a), g.bindTo("attribution", a));
            h.set("logAsInternal", !!a.b.get("logAsInternal"));
            h.bindTo("zIndex",
                a);
            h.bindTo("layoutPixelBounds", c);
            h.bindTo("maxWidth", a);
            h.bindTo("content", a);
            h.bindTo("pixelOffset", a);
            h.bindTo("visible", f);
            e && h.bindTo("position", e, "pixelPosition");
            this.j = new _.fo(function() {
                var a = h.get("pixelBounds");
                a ? _.G.trigger(c, "pantobounds", a) : this.j.start()
            }, 150, this);
            a.get("disableAutoPan") || d.j.start();
            h.set("open", !0);
            this.f.push(_.G.forward(b, "forceredraw", h), _.G.addListener(h, "domready", function() {
                a.trigger("domready")
            }));
            this.f.push(_.G.addListener(h, "closeclick", function() {
                a.close();
                a.trigger("closeclick");
                d.b && _.rn(d.b, "-i", d, !!b.Y)
            }));
            if (this.b) {
                var l = this.b;
                _.pn(b, this.b);
                _.rn(l, "-p", this, !!b.Y);
                e = function() {
                    var c = a.get("position"),
                        e = b.getBounds();
                    c && e && e.contains(c) ? _.rn(l, "-v", d, !!b.Y) : _.sn(l, "-v", d)
                };
                this.f.push(_.G.addListener(b, "idle", e));
                e()
            }
        };
    gU.prototype.ga = _.pa("b");
    gU.prototype.setSize = function(a) {
        var b = a.width,
            c = a.height;
        _.Tf(this.f, a);
        _.Tf(this.j, new _.D(b - 2, c - 2));
        a = Math.round(10);
        this.m.style.borderTopWidth = this.l.style.borderTopWidth = _.W(24);
        b = Math.round(b / 2) - a;
        _.mm(this.m, new _.z(b, c));
        _.mm(this.l, new _.z(b, c - 3))
    };
    hU.prototype.cancel = function() {
        window.clearInterval(this.b)
    };
    _.u(kU, _.K);
    var jU = new _.z(12, 10),
        qU = new _.D(0, 24);
    _.m = kU.prototype;
    _.m.open_changed = kU.prototype.content_changed = function() {
        var a = !!this.get("open");
        lU(this, a);
        var b = this.get("content");
        a = a ? b : null;
        a != this.m && (a && (this.D = !1, this.j.appendChild(b)), this.m && (b = this.m.parentNode, b == this.j && b.removeChild(this.m)), this.m = a, this.ce())
    };
    _.m.la = function() {
        this.f.parentNode.removeChild(this.f);
        this.C.stop();
        this.C.la()
    };
    _.m.apiContentSize_changed = kU.prototype.pixelOffset_changed = function() {
        this.ce()
    };
    _.m.ce = function() {
        this.B && (this.B.Bk.cancel(), this.B.Tk.cancel(), this.B = null);
        var a = this.get("layoutPixelBounds");
        var b = this.get("maxWidth");
        var c = this.get("pixelOffset");
        if (c) {
            if (a) {
                var d = a.K - a.I - (qU.width + 23 + 30);
                a = a.L - a.J - (qU.height + 18 + -c.height)
            } else a = d = 654;
            d = Math.min(d, 654);
            null != b && (d = Math.min(d, b));
            d = Math.max(0, d);
            a = Math.max(0, a);
            b = new _.D(d, a)
        } else b = null;
        b && (d = this.get("apiContentSize") || _.$h, this.j.style.maxHeight = _.W(Math.max(0, b.height - d.height)), this.j.style.maxWidth = _.W(b.width), this.b.style.width =
            _.W(b.width), d = 30 + Math.min(b.width, Math.max(this.j.offsetWidth, d.width)) + 23, this.b.style.width = _.W(d - 30), this.b.style.height = "", this.l = new _.D(d, 18 + Math.min(b.height, this.b.offsetHeight)), this.F.setSize(this.l), _.Tf(this.f, this.l), mU(this), this.C.start(), this.B = {
                Tk: iU(this.j, (0, _.t)(this.ce, this)),
                Bk: iU(this.b, (0, _.t)(this.ce, this))
            })
    };
    _.m.zm = function(a) {
        _.Oc(a);
        _.G.trigger(this, "closeclick");
        this.set("open", !1)
    };
    _.m.position_changed = function() {
        this.get("position") ? (lU(this, !!this.get("open")), mU(this)) : lU(this, !1)
    };
    _.m.zIndex_changed = function() {
        mU(this)
    };
    _.m.visible_changed = function() {
        _.YA(this.f, this.get("visible"));
        this.C.start()
    };
    _.m.pm = function(a) {
        for (var b = !1, c = this.get("content"), d = a.target; !b && d;) b = d == c, d = d.parentNode;
        b ? _.Lc(a) : _.Nc(a)
    };
    var nU = new _.D(180, 38);
    pU.prototype.close = function() {
        if (this.m) {
            this.m = !1;
            this.b && (_.sn(this.b, "-p", this), _.sn(this.b, "-v", this));
            _.w(this.f, _.G.removeListener);
            this.f.length = 0;
            this.j.stop();
            this.j.la();
            var a = this.B;
            a && (a.unbindAll(), a.setPlace(null), a.setAttribution(null));
            a = this.l;
            a.unbindAll();
            a.set("open", !1);
            a.la();
            this.aa && this.aa.unbindAll()
        }
    };
    _.je("infowindow", {
        qk: function(a) {
            var b = null;
            _.mk(a, "map_changed", function d() {
                var e = a.get("map");
                b && (b.Dg.b.remove(a), b.mn.close(), b = null);
                if (e) {
                    var f = e.__gm;
                    f.get("panes") ? (f = new pU(a, e), e = e.__gm, e = e.IW_AUTO_CLOSER = e.IW_AUTO_CLOSER || new eU, b = {
                        mn: f,
                        Dg: e
                    }, f = b.Dg, 1 == f.b.Za() && (e = f.b.ya()[0], e.f != a.f && (e.set("map", null), f.b.remove(e))), f.b.add(a)) : _.G.addListenerOnce(f, "panes_changed", d)
                }
            })
        }
    });
});