(this.webpackJsonptest12 = this.webpackJsonptest12 || []).push([
    [0], {
        130: function(e, t, n) {
            e.exports = n(165)
        },
        146: function(e, t, n) {},
        165: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                o = n.n(a),
                r = n(34),
                c = n.n(r),
                l = n(8),
                s = n.n(l),
                i = n(17),
                u = n.n(i),
                p = n(26),
                d = n(6),
                m = n(43),
                h = n.n(m),
                f = n(50),
                v = n.n(f),
                g = (n(52), n(25)),
                b = n.n(g),
                E = n(27),
                j = n.n(E),
                k = n(66),
                w = n.n(k),
                O = n(65),
                y = n.n(O),
                _ = n(49),
                S = n.n(_),
                C = n(5),
                A = (n(146), n(164), function(e) {
                    window.location.search;
                    var t = o.a.useState(""),
                        n = Object(d.a)(t, 2),
                        a = (n[0], n[1], o.a.useState(!1)),
                        r = Object(d.a)(a, 2),
                        c = (r[0], r[1], o.a.useState("")),
                        l = Object(d.a)(c, 2),
                        s = (l[0], l[1], o.a.useState({
                            name: "",
                            vendor: ""
                        })),
                        i = Object(d.a)(s, 2),
                        u = i[0],
                        p = i[1],
                        m = o.a.useState(""),
                        h = Object(d.a)(m, 2),
                        f = h[0],
                        v = h[1],
                        g = o.a.useState(""),
                        E = Object(d.a)(g, 2),
                        k = (E[0], E[1], o.a.useState({
                            source: 1,
                            vendor: !1
                        })),
                        O = Object(d.a)(k, 2),
                        _ = O[0],
                        A = O[1],
                        x = o.a.useState(!1),
                        I = Object(d.a)(x, 2),
                        R = I[0],
                        U = I[1],
                        V = o.a.useState(!1),
                        B = Object(d.a)(V, 2),
                        K = B[0],
                        W = B[1],
                        P = o.a.useRef(),
                        N = o.a.useState([]),
                        T = Object(d.a)(N, 2),
                        z = T[0],
                        G = T[1];
                    o.a.useEffect((function() {
                        var e = window.location.hash.substring(1).split("_"),
                            t = e[0];
                        if ("mosreg" == t) A({
                            source: 1,
                            vendor: "",
                            school: !1,
                            region: !1
                        });
                        else if ("dnevnikru" == t) A({
                            source: 2,
                            vendor: "",
                            school: !1,
                            region: !1
                        });
                        else if ("eljur" == t) {
                            var n = e[1];
                            v(n), p({
                                name: n,
                                vendor: n
                            }), U(!0), A({
                                source: 3,
                                vendor: n,
                                school: !0,
                                region: !1
                            })
                        } else if ("mesh" == t) A({
                            source: 4,
                            vendor: "",
                            school: !1,
                            region: !1
                        });
                        else if ("petersburgedu" == t) A({
                            source: 5,
                            vendor: "",
                            school: !1,
                            region: !1
                        });
                        else if ("gounn" == t) A({
                            source: 6,
                            vendor: "",
                            school: !1,
                            region: !1
                        });
                        else if ("kundelik" == t) A({
                            source: 8,
                            vendor: "",
                            school: !1,
                            region: !1
                        });
                        else if ("sgo" == t) {
                            var n = e[1];
                            v(n), p({
                                name: n,
                                vendor: n
                            }), U(!0), A({
                                source: 9,
                                vendor: n,
                                school: !0,
                                region: !1
                            })
                        } else if ("bars" == t) {
                            var a = e[1];
                            a || (console.log("frfe"), a = 1), v(a), W(!0), A({
                                source: 10,
                                vendor: a,
                                school: !1,
                                region: !0
                            })
                        }

                        else if ("permkrai" == t) A({
                            source: 11,
                            vendor: "",
                            school: !1,
                            region: !1
                        });

                        else if ("ruobr" == t) A({
                            source: 12,
                            vendor: "",
                            school: !1,
                            region: !1
                        });
                    }), []), console.log(_), console.log(f, "\u044d\u043c\u043c\u043c\u043c\u043c");
                    return o.a.createElement(b.a, {
                        id: e.id
                    }, o.a.createElement(j.a, null, "\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"), o.a.createElement(C.f, null, o.a.createElement(C.g, {
                        top: "\u0414\u043d\u0435\u0432\u043d\u0438\u043a"
                    }, o.a.createElement(C.m, {
                        value: _.source,
                        id: "source_sh",
                        onChange: function(e) {
                        	if (document.getElementById("source_sh").value == '9') {
                        		return t = e.target.value, console.log(window.location.hash.substring(1).split("_")), 9 == t ? (console.log(t), U(!0), W(!1), v("")) : 10 == t ? (W(!0), U(!1), v("1")) : (U(!1), W(!1), v(!1)), void A({
                                source: t,
                                vendor: !1
	                            });
	                            var t
                        	}
                            return t = e.target.value, console.log(window.location.hash.substring(1).split("_")), 3 == t ? (console.log(t), U(!0), W(!1), v("")) : 10 == t ? (W(!0), U(!1), v("1")) : (U(!1), W(!1), v(!1)), void A({
                                source: t,
                                vendor: !1
                            });
                            var t
                        }
                    }, o.a.createElement("option", {
                        value: "1"
                    }, "school.mosreg.ru"), o.a.createElement("option", {
                        value: "2"
                    }, "dnevnik.ru"), o.a.createElement("option", {
                        value: "3"
                    }, "eljur.ru"), o.a.createElement("option", {
                        value: "4"
                    }, "dnevnik.mos.ru"), o.a.createElement("option", {
                        value: "5"
                    }, "petersburgedu.ru"), o.a.createElement("option", {
                        value: "6"
                    }, "edu.gounn.ru"), o.a.createElement("option", {
                        value: "8"
                    }, "kundelik.kz"), o.a.createElement("option", {
                        value: "9"
                    }, "\u0421\u0435\u0442\u0435\u0432\u043e\u0439 \u0433\u043e\u0440\u043e\u0434"), o.a.createElement("option", {
                        value: "10"
                    }, "\u0411\u0430\u0440\u0441"), o.a.createElement("option", {
                        value: "11"
                    }, "school.permkrai.ru"),o.a.createElement("option", {
                        value: "12"
                    }, "ruobr.ru"))), R && o.a.createElement(o.a.Fragment, null, o.a.createElement(C.g, {
                        top: "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0448\u043a\u043e\u043b\u044b:"
                    }, o.a.createElement(C.k, {
                        className: "input",
                        value: u.name,
                        onChange: function(e) {
                            var t;
                            t = e.target.value, fetch("https://api.school-diary.ru/method/login/vendor?source=" + document.getElementById("source_sh").value + "&q=" + encodeURIComponent(t)).then((function(e) {
                                return e.json()
                            })).then((function(e) {
                                G(function(e, t) {
                                    return t ? e.response.items.map((function(e) {
                                        return {
                                            name: e.name,
                                            vendor: e.vendor,
                                            region: e.name2
                                        }
                                    })) : []
                                }(e, t))
                            })).catch((function(e) {
                                throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430: " + e)
                            })), p(t)
                        },
                        onFocus: function() {
                            P.current.classList.add("active")
                        },
                        onBlur: function() {
                            setTimeout((function() {
                                P.current.classList.remove("active")
                            }), 100)
                        },
                        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0435\u0433\u0438\u043e\u043d\/\u0433\u043e\u0440\u043e\u0434\/\u0448\u043a\u043e\u043b\u0443"
                    })), o.a.createElement("div", {
                        className: "dropdown",
                        ref: P
                    }, z.length && o.a.createElement(o.a.Fragment, null, z.map((function(e, t) {
                        return o.a.createElement("div", {
                            onClick: function(t) {
                                p(e), v(e.vendor)
                            },
                            key: t
                        }, o.a.createElement("div", null, e.name), o.a.createElement("div", null, e.region))
                    }))))), K && o.a.createElement(C.g, {
                        top: "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
                    }, o.a.createElement(C.m, {
                        value: f,
                        onChange: function(e) {
                            v(e.target.value)
                        }
                    }, o.a.createElement("option", {
                        value: "1"
                    }, "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"), o.a.createElement("option", {
                        value: "2"
                    }, "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"), o.a.createElement("option", {
                        value: "3"
                    }, "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0441\u043a\u0430\u044f \u0440\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430"), o.a.createElement("option", {
                        value: "4"
                    }, "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"), o.a.createElement("option", {
                        value: "5"
                    }, "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"), o.a.createElement("option", {
                        value: "6"
                    }, "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433"), o.a.createElement("option", {
                        value: "7"
                    }, "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"), o.a.createElement("option", {
                        value: "8"
                    }, "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439"), o.a.createElement("option", {
                        value: "9"
                    }, "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0435\u043b\u0438\u044f"), o.a.createElement("option", {
                        value: "10"
                    }, "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0425\u0430\u043a\u0430\u0441\u0438\u044f"), o.a.createElement("option", {
                        value: "11"
                    }, "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"), o.a.createElement("option", {
                        value: "12"
                    }, "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"), o.a.createElement("option", {
                        value: "13"
                    }, "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0440\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430"))), o.a.createElement(C.g, {
                        top: "\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"
                    }, o.a.createElement(C.k, {
                        id: "login_sh",
                        type: "text",
                        placeholder: "\u041b\u043e\u0433\u0438\u043d"
                    }), o.a.createElement(C.k, {
                        id: "password_sh",
                        type: "password",
                        placeholder: "\u041f\u0430\u0440\u043e\u043b\u044c"
                    }), o.a.createElement("input", {
                        id: "vend",
                        type: "hidden",
                        value: f
                    }))), o.a.createElement(y.a, {
                        title: "Navigation Example"
                    }, o.a.createElement(S.a, null, o.a.createElement(w.a, {
                        size: "xl",
                        level: "2",
                        onClick: e.goo
                    }, "\u0412\u043e\u0439\u0442\u0438"))), e.promoBannerProps && o.a.createElement(C.e, {
                        vertical: "bottom"
                    }, o.a.createElement(C.l, {
                        bannerData: e.promoBannerProps,
                        onClose: function() {
                            console.log("\u0437\u0430\u043a\u0440\u044b\u0442\u044c")
                        }
                    })), o.a.createElement(S.a, null, o.a.createElement(C.o, {
                        id: "lol2",
                        level: "3",
                        weight: "semibold",
                        style: {
                            marginBottom: 16
                        }
                    }, e.fetch_log)))
                }),
                x = n(35),
                I = n.n(x),
                R = n(36),
                U = n.n(R),
                V = n(37),
                B = n.n(V),
                K = n(44),
                W = n.n(K),
                P = (n(60), Object(C.p)()),
                N = function(e) {
                    return o.a.createElement(b.a, {
                        id: e.id
                    }, o.a.createElement(j.a, {
                        left: o.a.createElement(I.a, {
                            onClick: e.go,
                            "data-to": "auth"
                        }, P === C.j ? o.a.createElement(U.a, null) : o.a.createElement(B.a, null))
                    }, "Persik"), o.a.createElement("img", {
                        className: "Persik",
                        src: W.a,
                        alt: "Persik The Cat"
                    }))
                },
                T = n(67),
                z = n(45),
                G = n.n(z);
            Object(C.p)();
            var F = function(e) {
                    function t() {
                        e.pop(null)
                    }
                    return o.a.createElement(b.a, {
                        id: e.id
                    }, o.a.createElement(j.a, null, "\u0414\u043d\u0435\u0432\u043d\u0438\u043a"), o.a.createElement(C.h, null, o.a.createElement(C.i, {
                        mode: "secondary"
                    }, "\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"), o.a.createElement(C.n, {
                        description: e.fetch_ranking,
                        before: o.a.createElement(C.b, {
                            id: "ava12",
                            src: e.fetch_avatar
                        })
                    }, e.fetch_user), o.a.createElement(C.h, null, o.a.createElement(C.d, {
                        style: {
                            display: "flex"
                        }
                    }, o.a.createElement(C.c, Object(T.a)({
                        size: "l",
                        stretched: !0,
                        mode: "destructive",
                        style: {
                            marginRight: 8
                        },
                        onClick: function() {
                            e.pop(o.a.createElement(C.a, {
                                actionsLayout: "vertical",
                                actions: [{
                                    title: "\u0412\u044b\u0439\u0442\u0438",
                                    autoclose: !0,
                                    mode: "destructive",
                                    action: function() {
                                        return e.goes()
                                    }
                                }, {
                                    title: "\u041e\u0442\u043c\u0435\u043d\u0430",
                                    autoclose: !0,
                                    mode: "cancel"
                                }],
                                onClose: t
                            }, o.a.createElement("h2", null, "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"), o.a.createElement("p", null, "\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u044b\u0439\u0442\u0438 \u0438\u0437 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f?")))
                        },
                        "data-to": "home"
                    }, "style", {
                        marginRight: 8
                    }), "\u0412\u044b\u0445\u043e\u0434"), o.a.createElement(C.c, {
                        size: "l",
                        stretched: !0,
                        href: "https://vk.me/club198596704",
                        target: "_blank"
                    }, "\u0414\u0430\u043b\u0435\u0435")))), e.promoBannerProps && o.a.createElement(C.e, {
                        vertical: "bottom"
                    }, o.a.createElement(C.l, {
                        bannerData: e.promoBannerProps,
                        onClose: function() {
                            console.log("\u0437\u0430\u043a\u0440\u044b\u0442\u044c")
                        }
                    })))
                },
                L = n(46),
                M = n.n(L),
                D = function(e) {
                    return o.a.createElement(b.a, {
                        id: "story"
                    }, o.a.createElement(C.h, null, o.a.createElement(C.d, {
                        style: {
                            display: "flex"
                        }
                    }, o.a.createElement(C.c, {
                        size: "l",
                        stretched: !0,
                        onClick: function() {
                            var t = document.getElementsByClassName("View__panels")[0];
                            G()(t, {
                                allowTaint: !0
                            }).then(function() {
                                var t = Object(p.a)(u.a.mark((function t(n) {
                                    var a;
                                    return u.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                a = n.toDataURL("image/png"), console.log("1337"), e.shareStory(a);
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }())
                        },
                        before: o.a.createElement(M.a, null),
                        mode: "commerce"
                    }, "\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438")), o.a.createElement(C.d, null, o.a.createElement(C.c, {
                        size: "l",
                        stretched: !0,
                        onClick: function() {
                            e.acti("auth")
                        }
                    }, "\u041d\u0430\u0437\u0430\u0434"))))
                };
            s.a.send("VKWebAppInit"), s.a.send("VKWebAppAllowMessagesFromGroup", {
                group_id: 198596704
            }), s.a.send("VKWebAppJoinGroup", {
                group_id: 198596704
            });
            var J = function() {
                var e = Object(a.useState)("home"),
                    t = Object(d.a)(e, 2),
                    n = t[0],
                    r = t[1],
                    c = Object(a.useState)(null),
                    l = Object(d.a)(c, 2),
                    i = l[0],
                    m = l[1],
                    f = Object(a.useState)(o.a.createElement(v.a, {
                        size: "large"
                    })),
                    g = Object(d.a)(f, 2),
                    b = g[0],
                    E = g[1],
                    j = Object(a.useState)(null),
                    k = Object(d.a)(j, 2),
                    w = (k[0], k[1]),
                    O = Object(a.useState)(!1),
                    y = Object(d.a)(O, 2),
                    _ = (y[0], y[1]),
                    S = Object(a.useState)([]),
                    C = Object(d.a)(S, 2),
                    x = (C[0], C[1], Object(a.useState)(null)),
                    I = Object(d.a)(x, 2),
                    R = I[0],
                    U = I[1],
                    V = Object(a.useState)(null),
                    B = Object(d.a)(V, 2),
                    K = B[0],
                    W = B[1],
                    P = Object(a.useState)(null),
                    T = Object(d.a)(P, 2),
                    z = T[0],
                    G = T[1],
                    L = Object(a.useState)(null),
                    M = Object(d.a)(L, 2),
                    J = M[0],
                    H = M[1],
                    q = Object(a.useState)(null),
                    Q = Object(d.a)(q, 2),
                    X = Q[0],
                    Y = Q[1],
                    Z = Object(a.useState)(null),
                    $ = Object(d.a)(Z, 2),
                    ee = $[0],
                    te = $[1],
                    ne = Object(a.useState)(!1),
                    ae = Object(d.a)(ne, 2),
                    oe = ae[0],
                    re = ae[1],
                    ce = Object(a.useState)(!0),
                    le = Object(d.a)(ce, 2),
                    se = (le[0], le[1]),
                    ie = Object(a.useState)(null),
                    ue = Object(d.a)(ie, 2),
                    pe = (ue[0], ue[1], o.a.useState({
                        source: 1,
                        vendor: ""
                    })),
                    de = Object(d.a)(pe, 2),
                    me = de[0];
                de[1];
                Object(a.useEffect)((function() {
                    function e() {
                        return (e = Object(p.a)(u.a.mark((function e() {
                            var t;
                            return u.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, s.a.send("VKWebAppGetUserInfo");
                                    case 2:
                                        t = e.sent, m(t), E(null);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function t() {
                        return (t = Object(p.a)(u.a.mark((function e() {
                            return u.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        s.a.supports("VKWebAppGetAds") ? s.a.send("VKWebAppGetAds").then((function(e) {
                                            console.log("result ads: true"), re(e)
                                        })) : console.log("result ads: not suppoted");
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function n() {
                        return (n = Object(p.a)(u.a.mark((function e() {
                            return u.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        /*s.a.supports("VKWebAppShowNativeAds")?s.a.send("VKWebAppShowNativeAds",{ad_format:"preloader"}).then((function(e){console.log("result native_ads: "+e)})):console.log("result: not suppoted");*/
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }
                    s.a.subscribe((function(e) {
                            var t = e.detail,
                                n = t.type,
                                a = t.data;
                            if ("VKWebAppUpdateConfig" === n) {
                                var o = document.createAttribute("scheme");
                                o.value = a.scheme ? a.scheme : "client_light", document.body.attributes.setNamedItem(o)
                            }
                        })),
                        function() {
                            e.apply(this, arguments)
                        }(), fetch("https://api.school-diary.ru/method/login/vkontakte", {
                            method: "POST",
                            headers: new Headers({
                            	"Accept": "application/json",
                                "Content-Type": "application/x-www-form-urlencoded"
                            }),
                            body: "v=1&vk=" + encodeURIComponent(window.location.search) + "&payload=" + encodeURIComponent(window.location.hash.substring(1))
                        }).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            if (te(""), _(!0), E(null), true == e.success) {
                                e.response.settings;
                                1 == e.response.settings.privilege ? se(!1) : (function() {
                                    n.apply(this, arguments)
                                }(), function() {
                                    t.apply(this, arguments)
                                }()), U(""), W(""), G(""), H(""), U(e.response.user.token);
                                var a = e.response.user.token,
                                    o = window.location.hash.substring(1).split("_");
                                r("auth"), fetch("https://api.school-diary.ru/method/context", {
                            method: "POST",
                            headers: new Headers({
                            	"Accept": "application/json",
                                "Content-Type": "application/x-www-form-urlencoded",
                                "Authorization": "Bearer " + encodeURIComponent(a)
                            }),
                            body: "v=1"
                        }).then((function(e) {
                                    return e.json()
                                })).then((function(e) {
                                	//// send to estimates
                                    _(!0), true == e.success && (W(e.response.name), G(e.response.photo), H(e.response.rating), console.log("1234"), fetch("https://api.school-diary.ru/method/estimates", {
                            method: "POST",
                            headers: new Headers({
                            	"Accept": "application/json",
                                "Content-Type": "application/x-www-form-urlencoded",
                                "Authorization": "Bearer " + encodeURIComponent(a)
                            }),
                            body: "period_id=" + e.response.period + "&v=1"
                        }).then((function(e) {
                                        return e.json()
                                    })).then((function(e) {
                                        _(!0), true == e.success && false/*H(e.response.rating)*/
                                    }), (function(e) {
                                        _(!0), w(e)
                                    }))), "share" == o && r("story")
                                }), (function(e) {
                                    _(!0), w(e)
                                }))
                            } else "not_auth" != e.error && Y(e.error_msg)
                        }), (function(e) {
                            Y("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"), _(!0), w(e)
                        }))
                }), []);
                var he = function(e) {
                        r(e.currentTarget.dataset.to)
                    },
                    fe = function(e) {
                        console.log(e), r(e)
                    };

                function ve(e) {
                    return ge.apply(this, arguments)
                }

                function ge() {
                    return (ge = Object(p.a)(u.a.mark((function e(t) {
                        return u.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function(e) {
                                        return setTimeout(e, t)
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                var be = function() {
                    var e = Object(p.a)(u.a.mark((function e(t) {
                        var n;
                        return u.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, n = "story|" + i.id, e.next = 4, ve(250);
                                case 4:
                                    return e.next = 6, s.a.send("VKWebAppShowStoryBox", {
                                        background_type: "image",
                                        blob: t,
                                        attachment: {
                                            url: "https://vk.com/app7591649#ref=" + n,
                                            text: "open",
                                            type: "url"
                                        }
                                    });
                                case 6:
                                    e.sent, e.next = 11;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(0);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 9]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
                return o.a.createElement(h.a, {
                    activePanel: n,
                    popout: b
                }, o.a.createElement(A, {
                    id: "home",
                    promoBannerProps: oe,
                    source_mama: me,
                    go: he,
                    goo: function(e) {
                        E(o.a.createElement(v.a, {
                            size: "large"
                        }));
                        var t = document.getElementById("login_sh").value,
                            n = document.getElementById("password_sh").value,
                            a = document.getElementById("source_sh").value,
                            c = document.getElementById("vend").value;
                        if (c == '') {
                        	c = '_';
                        }
                        fetch("https://api.school-diary.ru/method/login", {
                            method: "POST",
                            headers: new Headers({
                            	"Accept": "application/json",
                                "Content-Type": "application/x-www-form-urlencoded"
                            }),
                            body: "v=1&auth=1&vendor=" + encodeURIComponent(c) + "&login=" + encodeURIComponent(t) + "&password=" + encodeURIComponent(n) + "&source=" + encodeURIComponent(a) + "&vk=" + encodeURIComponent(window.location.search) + "&payload=" + encodeURIComponent(window.location.hash.substring(1))
                        }).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            if (_(!0), E(null), true == e.success) {
                                var t = 'mosreg';
                                1 == e.response.user.privilege ? se(!1) : (s.a.send("VKWebAppShowNativeAds", {
                                    ad_format: "reward"
                                }).then((function(e) {})), s.a.send("VKWebAppGetAds").then((function(e) {
                                    re(e)
                                }))), Y(""), U(""), W(""), G(""), H(""), U(e.response.user.token);
                                var n = e.response.user.token;
                                r("auth"), fetch("https://api.school-diary.ru/method/context", {
                            method: "POST",
                            headers: new Headers({
                            	"Accept": "application/json",
                                "Content-Type": "application/x-www-form-urlencoded",
                                "Authorization": "Bearer " + encodeURIComponent(n)
                            }),
                            body: "v=1"
                        }).then((function(e) {
                                    return e.json()
                                })).then((function(e) {
                                    _(!0), true == e.success && (W(e.response.name), G(e.response.photo), H(e.response.rating), console.log("12345"), fetch("https://api.school-diary.ru/method/estimates", {
                            method: "POST",
                            headers: new Headers({
                                "Accept": "application/json",
                                "Content-Type": "application/x-www-form-urlencoded",
                                "Authorization": "Bearer " + encodeURIComponent(n)
                            }),
                            body: "period_id=" + e.response.period + "&v=1"
                        }).then((function(e) {
                                        return e.json()
                                    })).then((function(e) {
                                        _(!0), true == e.success && false/*H(e.response.rating)*/
                                    }), (function(e) {
                                        _(!0), w(e)
                                    })))
                                }), (function(e) {
                                    _(!0), w(e)
                                }))
                            } else Y(e.error.message)
                        }), (function(e) {
                            Y("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"), _(!0), w(e)
                        }))
                    },
                    fetch_log: X,
                    fetch_sign: ee
                }), o.a.createElement(N, {
                    id: "persik",
                    go: he
                }), o.a.createElement(F, {
                    id: "auth",
                    promoBannerProps: oe,
                    bridge: s.a,
                    go: he,
                    goes: function(e) {
                        fetch("https://api.school-diary.ru/method/logout", {
                            method: "POST",
                            headers: new Headers({
                            	"Accept": "application/json",
                                "Content-Type": "application/x-www-form-urlencoded",
                                "Authorization": "Bearer " + encodeURIComponent(R)
                            }),
                            body: "v=1"
                        }).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            _(!0), true == e.success ? (s.a.send("VKWebAppShowNativeAds", {
                                ad_format: "interstitial"
                            }).then((function(e) {})), s.a.send("VKWebAppGetAds").then((function(e) {
                                re(e)
                            })), Y(""), U(""), W(""), G(""), H(""), r("home")) : console.log("\u041f\u0438\u0437\u0434\u0430")
                        }), (function(e) {
                            _(!0), w(e)
                        })), r("home")
                    },
                    fetch_user: K,
                    fetch_avatar: z,
                    fetch_ranking: J,
                    pop: function(e) {
                        console.log(e), E(e)
                    },
                    acti: fe,
                    shareStory: be
                }), o.a.createElement(D, {
                    id: "story",
                    shareStory: be,
                    acti: fe
                }))
            };
            s.a.send("VKWebAppInit"), c.a.render(o.a.createElement(J, null), document.getElementById("root"))
        },
        44: function(e, t, n) {
            e.exports = n.p + "static/media/persik.4e1ec840.png"
        },
        60: function(e, t, n) {}
    },
    [
        [130, 1, 2]
    ]
]);
//# sourceMappingURL=main.b1e456cd.chunk.js.map