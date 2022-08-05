(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [6], {
        1049: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, i, a, o, c, s, u, l = n(13),
                d = n(0),
                p = n(7),
                f = n(6),
                b = n(57),
                m = n(2),
                j = n(335),
                h = n(1),
                x = function(e, t, n) { return Object(p.d)(r || (r = Object(l.a)(["\n  width: 100%;\n  height: 20px;\n  clip-path: url(", ");\n\n  background: ", ";\n\n  & svg {\n    display: block;\n  }\n"])), t, (function() { return e.isDark ? (null === n || void 0 === n ? void 0 : n.dark) || (null === n || void 0 === n ? void 0 : n.light) || e.colors.background : (null === n || void 0 === n ? void 0 : n.light) || e.colors.background })) },
                v = Object(p.e)(m.j)(i || (i = Object(l.a)(["\n  ", "\n  transform: ", ";\n"])), (function(e) {
                    var t = e.theme,
                        n = e.clipPath,
                        r = e.clipFill;
                    return x(t, n, r)
                }), (function(e) { return "#bottomConcaveCurve" === e.clipPath ? "translate(0, -13px)" : "translate(0, 1px)" })),
                g = Object(p.e)(m.j)(a || (a = Object(l.a)(["\n  ", "\n  transform: ", ";\n"])), (function(e) {
                    var t = e.theme,
                        n = e.clipPath,
                        r = e.clipFill;
                    return x(t, n, r)
                }), (function(e) { return "#bottomConvexCurve" === e.clipPath ? "translate(0, -13px)" : "translate(0, -1px)" })),
                O = function(e) { var t = e.clipFill; return Object(h.jsx)(g, { clipFill: t, clipPath: "#topConvexCurve", children: Object(h.jsx)("svg", { width: "0", height: "0", children: Object(h.jsx)("defs", { children: Object(h.jsx)("clipPath", { id: "topConvexCurve", clipPathUnits: "objectBoundingBox", children: Object(h.jsx)("path", { d: "M 0,1 L 0,0 L 1,0 L 1,1 C 0.75 0, .25 0, 0 1 Z" }) }) }) }) }) },
                y = function(e) { var t = e.clipFill; return Object(h.jsx)(g, { clipFill: t, clipPath: "#bottomConvexCurve", children: Object(h.jsx)("svg", { width: "0", height: "0", children: Object(h.jsx)("defs", { children: Object(h.jsx)("clipPath", { id: "bottomConvexCurve", clipPathUnits: "objectBoundingBox", children: Object(h.jsx)("path", { d: "M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z" }) }) }) }) }) },
                w = function(e) { var t = e.clipFill; return Object(h.jsx)(v, { clipFill: t, clipPath: "#topConcaveCurve", children: Object(h.jsx)("svg", { width: "0", height: "0", children: Object(h.jsx)("defs", { children: Object(h.jsx)("clipPath", { id: "topConcaveCurve", clipPathUnits: "objectBoundingBox", children: Object(h.jsx)("path", { d: "M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z" }) }) }) }) }) },
                F = function(e) { var t = e.clipFill; return Object(h.jsx)(v, { clipFill: t, clipPath: "#bottomConcaveCurve", children: Object(h.jsx)("svg", { width: "0", height: "0", children: Object(h.jsx)("defs", { children: Object(h.jsx)("clipPath", { id: "bottomConcaveCurve", clipPathUnits: "objectBoundingBox", children: Object(h.jsx)("path", { d: "M 0,1 L 0,0 L 1,0 L 1,1 C .75 0.1, .25 0.1, 0 1 Z" }) }) }) }) }) },
                k = p.e.div(o || (o = Object(l.a)(["\n  background: ", ";\n  z-index: ", ";\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n"])), (function(e) {
                    var t = e.theme,
                        n = e.dividerFill;
                    return t.isDark ? (null === n || void 0 === n ? void 0 : n.dark) || (null === n || void 0 === n ? void 0 : n.light) || "none" : (null === n || void 0 === n ? void 0 : n.light) || (null === n || void 0 === n ? void 0 : n.dark) || "none"
                }), (function(e) { return e.index })),
                C = p.e.div(c || (c = Object(l.a)(["\n  z-index: ", ";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])), (function(e) { return e.index + 1 })),
                V = function(e) {
                    var t = e.index,
                        n = e.dividerPosition,
                        r = e.dividerComponent,
                        i = e.concave,
                        a = e.clipFill,
                        o = e.dividerFill,
                        c = "top" === n && !i,
                        s = "bottom" === n && !i,
                        u = "top" === n && i,
                        l = "bottom" === n && i;
                    return Object(h.jsxs)(k, { index: t, dividerFill: o, children: [r && Object(h.jsx)(C, { index: t, children: r }), Object(h.jsxs)(h.Fragment, { children: [u && Object(h.jsx)(w, { clipFill: a }), l && Object(h.jsx)(F, { clipFill: a })] }), Object(h.jsxs)(h.Fragment, { children: [c && Object(h.jsx)(O, { clipFill: a }), s && Object(h.jsx)(y, { clipFill: a })] })] })
                },
                P = ["children", "background", "svgFill", "index", "dividerComponent", "dividerPosition", "hasCurvedDivider", "concaveDivider", "clipFill", "dividerFill", "containerProps", "innerProps"],
                R = Object(p.e)(m.H)(s || (s = Object(l.a)(["\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  z-index: ", ";\n  background: ", ";\n  padding: ", ";\n"])), (function(e) { return e.index - 1 }), (function(e) {
                    var t = e.background,
                        n = e.theme;
                    return t || n.colors.background
                }), (function(e) { return (0, e.getPadding)() })),
                S = Object(p.e)(j.a)(u || (u = Object(l.a)(["\n  min-height: auto;\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  ", " {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n\n  ", " {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.lg })),
                A = function(e) {
                    var t = e.children,
                        n = e.background,
                        r = e.svgFill,
                        i = e.index,
                        a = void 0 === i ? 1 : i,
                        o = e.dividerComponent,
                        c = e.dividerPosition,
                        s = void 0 === c ? "bottom" : c,
                        u = e.hasCurvedDivider,
                        l = void 0 === u || u,
                        d = e.concaveDivider,
                        p = void 0 !== d && d,
                        j = e.clipFill,
                        x = e.dividerFill,
                        v = e.containerProps,
                        g = e.innerProps,
                        O = Object(b.a)(e, P);
                    return Object(h.jsxs)(m.j, Object(f.a)(Object(f.a)({}, v), {}, { children: [l && "top" === s && Object(h.jsx)(V, { svgFill: r, index: a, concave: p, dividerPosition: s, dividerComponent: o, clipFill: j, dividerFill: x }), Object(h.jsx)(R, Object(f.a)(Object(f.a)({ background: n, index: a, getPadding: function() { return l ? "bottom" === s ? "48px 0 14px" : "top" === s ? "14px 0 48px" : "48px 0" : "48px 0" } }, O), {}, { children: Object(h.jsx)(S, Object(f.a)(Object(f.a)({}, g), {}, { children: t })) })), l && "bottom" === s && Object(h.jsx)(V, { svgFill: r, index: a, concave: p, dividerPosition: s, dividerComponent: o, clipFill: j, dividerFill: x })] }))
                },
                T = n(80),
                D = n(140),
                E = n(220),
                H = n(21),
                M = n(171),
                N = function() {
                    var e = Object(H.b)().t,
                        t = Object(T.c)().account;
                    return Object(h.jsx)(h.Fragment, { children: Object(h.jsx)(m.H, { position: "relative", flexDirection: ["column-reverse", null, null, "row"], alignItems: ["flex-end", null, null, "center"], justifyContent: "center", id: "homepage-hero", children: Object(h.jsxs)(m.H, { flex: "1", flexDirection: "column", children: [Object(h.jsx)(m.J, { scale: "xxl", color: "#f80102", mb: "24px", children: e("MASTERMIND GAMES") }), Object(h.jsx)(m.J, { scale: "md", mb: "24px", children: e("Trade, play and earn on the world's first blockchain based game hosting platform.") }), Object(h.jsxs)(m.H, { children: [!t && Object(h.jsx)(M.a, { mr: "8px" }), Object(h.jsx)(m.O, { mr: "16px", href: "/swap", children: Object(h.jsx)(m.m, { variant: t ? "primary" : "secondary", children: e("Trade Now") }) })] })] }) }) })
                },
                L = n(11),
                B = n(3),
                U = n.n(B),
                I = n(12),
                z = n(83),
                q = function() {
                    var e = Object(H.b)().t,
                        t = function() {
                            var e = Object(d.useState)(null),
                                t = Object(L.a)(e, 2),
                                n = t[0],
                                r = t[1];
                            return Object(d.useEffect)((function() {
                                ! function() {
                                    var e = Object(I.a)(U.a.mark((function e() {
                                        var t, n;
                                        return U.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, e.next = 3, fetch("https://openapi.debank.com/v1/protocol?id=bsc_pancakeswap");
                                                case 3:
                                                    return t = e.sent, e.next = 6, t.json();
                                                case 6:
                                                    n = e.sent, r(n), e.next = 13;
                                                    break;
                                                case 10:
                                                    e.prev = 10, e.t0 = e.catch(0), console.error("Unable to fetch data:", e.t0);
                                                case 13:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 10]
                                        ])
                                    })));
                                    return function() { return e.apply(this, arguments) }
                                }()()
                            }), [r]), n
                        }(),
                        n = (Object(D.a)().theme, t ? Object(z.b)(t.MGT) : "-"),
                        r = (Object(z.b)(30841921), Object(z.b)(2751624), e("Powered by $MGX, the gateway to the marketplace and in-game purchases. $%MGT% ", { MGT: n }).split(n)),
                        i = Object(L.a)(r, 2),
                        a = i[0],
                        o = i[1];
                    m.C, m.nb, m.s;
                    return Object(h.jsxs)(m.H, { justifyContent: "center", alignItems: "center", flexDirection: "column", children: [Object(h.jsx)(m.J, { textAlign: "center", scale: "xl", children: e("") }), Object(h.jsx)(m.J, { textAlign: "center", scale: "xl", mb: "32px", children: e("MASTER EX SWAP") }), Object(h.jsx)(m.pb, { textAlign: "center", color: "textSubtle", children: e("Mastermind Games in-house swap and an ever growing games hosting ecosystem. ") }), Object(h.jsx)(m.H, { flexWrap: "wrap", children: Object(h.jsxs)(m.pb, { display: "inline", textAlign: "center", color: "textSubtle", mb: "20px", children: [a, Object(h.jsx)(h.Fragment, { children: t ? Object(h.jsx)(h.Fragment, { children: n }) : Object(h.jsx)(m.lb, { display: "inline-block", height: 16, width: 70, mt: "2px" }) }), o] }) }), Object(h.jsx)(m.pb, { textAlign: "center", color: "textSubtle", bold: !0, mb: "32px", children: e("Mastermind is not only changing the game, we're changing YOUR game!") })] })
                },
                _ = n(232);

            function G(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = Object(_.a)(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return { s: i, n: function() { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] } }, e: function(e) { throw e }, f: i }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, o = !0,
                    c = !1;
                return { s: function() { n = e[Symbol.iterator]() }, n: function() { var e = n.next(); return o = e.done, e }, e: function(e) { c = !0, a = e }, f: function() { try { o || null == n.return || n.return() } finally { if (c) throw a } } }
            }
            var J, Q, W, Z, $, Y, K, X, ee = n(29),
                te = n.n(ee),
                ne = n(237),
                re = n(165),
                ie = n(64),
                ae = (n(33), n(61), n(56)),
                oe = n(4),
                ce = n(98),
                se = n(59),
                ue = function() { var e = ce.a.getState().user.gasPrice || se.b.default; return "56" === oe.a.MAINNET.toString() ? e : se.b.testnet },
                le = { gasLimit: ae.f },
                de = function() {
                    var e = Object(I.a)(U.a.mark((function e(t, n) {
                        var r, i, a, o, c;
                        return U.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = ue(), 0 !== n) { e.next = 9; break }
                                    return e.next = 4, t.leaveStaking("0", Object(f.a)(Object(f.a)({}, le), {}, { gasPrice: r }));
                                case 4:
                                    return i = e.sent, e.next = 7, i.wait();
                                case 7:
                                    return a = e.sent, e.abrupt("return", a.status);
                                case 9:
                                    return e.next = 11, t.deposit(n, "0", Object(f.a)(Object(f.a)({}, le), {}, { gasPrice: r }));
                                case 11:
                                    return o = e.sent, e.next = 14, o.wait();
                                case 14:
                                    return c = e.sent, e.abrupt("return", c.status);
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                pe = (n(86), n(348), n(51)),
                fe = (n(99), n(35)),
                be = n(853),
                me = n.n(be),
                je = ["value", "color", "decimals", "isDisabled", "unit", "prefix", "onClick"],
                he = function(e) {
                    var t = e.value,
                        n = e.color,
                        r = void 0 === n ? "text" : n,
                        i = e.decimals,
                        a = void 0 === i ? 3 : i,
                        o = e.isDisabled,
                        c = void 0 !== o && o,
                        s = e.unit,
                        u = e.prefix,
                        l = e.onClick,
                        p = Object(b.a)(e, je),
                        j = Object(d.useRef)(0);
                    return Object(d.useEffect)((function() { j.current = t }), [t]), Object(h.jsx)(m.pb, Object(f.a)(Object(f.a)({ color: c ? "textDisabled" : r, onClick: l }, p), {}, { children: Object(h.jsx)(me.a, { start: j.current, end: t, prefix: u, suffix: s, decimals: a, duration: 1, separator: "," }) }))
                },
                xe = n(159),
                ve = n(36),
                ge = n(151),
                Oe = function() {
                    var e = Object(d.useState)([]),
                        t = Object(L.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        i = Object(d.useState)(null),
                        a = Object(L.a)(i, 2),
                        o = a[0],
                        c = a[1],
                        s = Object(T.c)().account,
                        u = Object(ge.a)().fastRefresh;
                    return Object(d.useEffect)((function() {
                        s && function() {
                            var e = Object(I.a)(U.a.mark((function e() {
                                var t, n, i, a, o;
                                return U.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = ve.w.map((function(e) { return { address: Object(fe.m)(), name: "pendingMGT", params: [e.pid, s] } })), e.next = 3, Object(pe.a)(xe, t);
                                        case 3:
                                            n = e.sent, i = ve.w.map((function(e, t) { return Object(f.a)(Object(f.a)({}, e), {}, { balance: new te.a(n[t]) }) })), a = i.filter((function(e) { return e.balance.gt(0) })), o = a.reduce((function(e, t) { var n = new te.a(t.balance); return n.eq(0) ? e : e + n.div(ae.g).toNumber() }), 0), r(a), c(o);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }()()
                    }), [s, u]), { farmsWithStakedBalance: n, earningsSum: o }
                },
                ye = Object(p.e)(m.p)(J || (J = Object(l.a)(["\n  width: 100%;\n  height: fit-content;\n"]))),
                we = function() {
                    var e = Object(d.useState)(!1),
                        t = Object(L.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        i = Object(H.b)().t,
                        a = Object(re.a)(),
                        o = a.toastSuccess,
                        c = a.toastError,
                        s = Oe(),
                        u = s.farmsWithStakedBalance,
                        l = s.earningsSum,
                        p = Object(ie.g)(),
                        f = Object(ne.b)(),
                        b = new te.a(l).multipliedBy(f),
                        j = u.length,
                        x = u.filter((function(e) { return 0 !== e.pid })).length,
                        v = function(e, t, n, r) {
                            var i = { earningsBusd: n.toString(), count: e },
                                a = r("%earningsBusd% to collect", i);
                            return e > 0 && t ? a = r(e > 1 ? "%earningsBusd% to collect from %count% farms and MGT pool" : "%earningsBusd% to collect from %count% farm and MGT pool", i) : e > 0 ? a = r(e > 1 ? "%earningsBusd% to collect from %count% farms" : "%earningsBusd% to collect from %count% farm", i) : t && (a = r("%earningsBusd% to collect from MGT pool", i)), a
                        }(x, j - x > 0, b, i).split(b.toString()),
                        g = Object(L.a)(v, 2),
                        O = g[0],
                        y = g[1],
                        w = Object(d.useCallback)(Object(I.a)(U.a.mark((function e() {
                            var t, n, a;
                            return U.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        r(!0), t = G(u), e.prev = 2, t.s();
                                    case 4:
                                        if ((n = t.n()).done) { e.next = 17; break }
                                        return a = n.value, e.prev = 6, e.next = 9, de(p, a.pid);
                                    case 9:
                                        o("".concat(i("Harvested"), "!"), i("Your %symbol% earnings have been sent to your wallet!", { symbol: "MGT" })), e.next = 15;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(6), c(i("Error"), i("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
                                    case 15:
                                        e.next = 4;
                                        break;
                                    case 17:
                                        e.next = 22;
                                        break;
                                    case 19:
                                        e.prev = 19, e.t1 = e.catch(2), t.e(e.t1);
                                    case 22:
                                        return e.prev = 22, t.f(), e.finish(22);
                                    case 25:
                                        r(!1);
                                    case 26:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 19, 22, 25],
                                [6, 12]
                            ])
                        }))), [u, p, o, c, i]);
                    return Object(h.jsx)(ye, { children: Object(h.jsx)(m.q, { children: Object(h.jsxs)(m.H, { flexDirection: ["column", null, null, "row"], justifyContent: "space-between", alignItems: "center", children: [Object(h.jsxs)(m.H, { flexDirection: "column", alignItems: ["center", null, null, "flex-start"], children: [O && Object(h.jsx)(m.pb, { mb: "4px", color: "textSubtle", children: O }), b.isNaN() ? Object(h.jsx)(m.lb, { width: 96, height: 24, my: "2px" }) : Object(h.jsx)(he, { decimals: b.gt(0) ? 2 : 0, fontSize: "24px", bold: !0, prefix: b.gt(0) ? "~$" : "$", lineHeight: "1.1", value: b.toNumber() }), Object(h.jsx)(m.pb, { mb: ["16px", null, null, "0"], color: "textSubtle", children: y })] }), j <= 0 ? Object(h.jsx)(m.O, { href: "swap", children: Object(h.jsxs)(m.m, { width: ["100%", null, null, "auto"], variant: "secondary", children: [Object(h.jsx)(m.pb, { color: "primary", bold: !0, children: i("Start earning") }), Object(h.jsx)(m.e, { ml: "4px", color: "primary" })] }) }) : Object(h.jsx)(m.m, { width: ["100%", null, null, "auto"], id: "harvest-all", isLoading: n, endIcon: n ? Object(h.jsx)(m.g, { spin: !0, color: "currentColor" }) : null, disabled: n, onClick: w, children: Object(h.jsx)(m.pb, { color: "invertedContrast", bold: !0, children: i(n ? "Harvesting" : "Harvest all") }) })] }) }) })
                },
                Fe = n(166),
                ke = n(748),
                Ce = n(142),
                Ve = Object(p.e)(m.H)(Q || (Q = Object(l.a)(["\n  align-items: center;\n  display: none;\n  ", " {\n    display: flex;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                Pe = Object(p.e)(m.H)(W || (W = Object(l.a)(["\n  ", " {\n    display: none;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                Re = Object(p.e)(m.H)(Z || (Z = Object(l.a)(["\n  height: 92px;\n  width: 92px;\n  background-color: ", ";\n  border: 3px solid ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n"])), (function(e) { return e.theme.colors.invertedContrast }), (function(e) { return e.theme.colors.invertedContrast }), (function(e) { return e.theme.radii.circle }), (function(e) { return e.theme.card.boxShadow })),
                Se = Object(p.e)(m.cb)($ || ($ = Object(l.a)(["\n  height: 100%;\n  width: 100%;\n"]))),
                Ae = function() {
                    var e = Object(Fe.b)(),
                        t = e.profile,
                        n = e.isLoading,
                        r = Object(H.b)().t,
                        i = Object(T.c)().account,
                        a = Object(Ce.a)(i);
                    return Object(h.jsxs)(h.Fragment, { children: [Object(h.jsxs)(Ve, { children: [Object(h.jsx)(m.j, { mr: "24px", children: Object(h.jsx)(Re, { children: t ? Object(h.jsx)(ke.a, { profile: t }) : Object(h.jsx)(Se, {}) }) }), Object(h.jsxs)(m.H, { flexDirection: "column", children: [t ? Object(h.jsx)(m.J, { scale: "xl", children: r("Hi, %userName%!", { userName: t.username }) }) : n && !t ? Object(h.jsx)(m.lb, { width: 200, height: 40, my: "4px" }) : Object(h.jsx)(h.Fragment, {}), n || !i ? Object(h.jsx)(m.lb, { width: 160, height: 16, my: "4px" }) : Object(h.jsxs)(m.pb, { fontSize: "16px", children: [" ", r("Connected with %address%", { address: a })] })] })] }), Object(h.jsx)(Pe, { children: t ? Object(h.jsx)(m.J, { mb: "18px", textAlign: "center", children: r("Hi, %userName%!", { userName: t.username }) }) : n && !t ? Object(h.jsx)(m.lb, { width: 120, height: 20, mt: "2px", mb: "18px" }) : Object(h.jsx)(h.Fragment, {}) })] })
                },
                Te = Object(p.e)(m.j)(Y || (Y = Object(l.a)(["\n  border-bottom: 1px ", " solid;\n  border-left: 1px ", " solid;\n  border-right: 1px ", " solid;\n  border-radius: ", ";\n  background: ", ";\n"])), (function(e) { return e.theme.colors.secondary }), (function(e) { return e.theme.colors.secondary }), (function(e) { return e.theme.colors.secondary }), (function(e) { var t = e.theme; return "0 0 ".concat(t.radii.card, " ").concat(t.radii.card) }), (function(e) { return e.theme.isDark ? "linear-gradient(360deg, rgba(49, 61, 92, 0.9) 0%, rgba(61, 42, 84, 0.9) 100%)" : "linear-gradient(180deg, rgba(202, 194, 236, 0.9) 0%,  rgba(204, 220, 239, 0.9) 51.04%, rgba(206, 236, 243, 0.9) 100%)" })),
                De = function() { return Object(h.jsx)(Te, { p: ["16px", null, null, "24px"], children: Object(h.jsxs)(m.H, { alignItems: "center", justifyContent: "center", flexDirection: ["column", null, null, "row"], children: [Object(h.jsx)(m.H, { flex: "1", mr: [null, null, null, "32px"], children: Object(h.jsx)(Ae, {}) }), Object(h.jsx)(m.H, { flex: "1", width: ["100%", null, "auto"], children: Object(h.jsx)(we, {}) })] }) }) },
                Ee = Object(p.e)(A)(K || (K = Object(l.a)(["\n  padding-top: 16px;\n\n  ", " {\n    padding-top: 48px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                He = Object(p.e)(j.a)(X || (X = Object(l.a)(["\n  z-index: 1;\n  position: absolute;\n  width: 100%;\n  top: 0px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  padding-left: 0px;\n  padding-right: 0px;\n\n  ", " {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg }));
            t.default = function() {
                var e = Object(D.a)().theme,
                    t = Object(T.c)().account;
                return Object(h.jsxs)(h.Fragment, { children: [Object(h.jsx)(E.a, {}), Object(h.jsxs)(Ee, { innerProps: { style: { margin: "0", width: "100%" } }, background: e.isDark ? "radial-gradient(103.12% 50% at 50% 50%, #21193A 0%, #191326 100%)" : "linear-gradient(139.73deg, #ed9797 0%, #F3EFFF 100%)", index: 2, hasCurvedDivider: !1, children: [t && Object(h.jsx)(He, { children: Object(h.jsx)(De, {}) }), Object(h.jsx)(N, {})] }), Object(h.jsx)(A, { innerProps: { style: { margin: "0", width: "100%" } }, background: e.isDark ? "linear-gradient(180deg, #09070C 22%, #201335 100%)" : "linear-gradient(180deg, #FFFFFF 22%, #ff0f1094 100%)", index: 2, hasCurvedDivider: !1, children: Object(h.jsx)(q, {}) })] })
            }
        },
        748: function(e, t, n) {
            "use strict";
            var r, i, a, o = n(13),
                c = (n(0), n(2)),
                s = n(7),
                u = n(1),
                l = s.e.img(r || (r = Object(o.a)(["\n  border: 1px solid ", ";\n  border-radius: 50%;\n  bottom: 0px;\n  position: absolute;\n  right: 0px;\n  min-width: 20px;\n  min-height: 20px;\n  width: 37.5%;\n  height: 37.5%;\n  z-index: 5;\n\n  ", " {\n    border-width: 2px;\n  }\n"])), (function(e) { return e.theme.card.background }), (function(e) { return e.theme.mediaQueries.sm })),
                d = s.e.div(i || (i = Object(o.a)(["\n  background: url('", "');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])), (function(e) { return e.bg })),
                p = Object(s.e)(c.cb)(a || (a = Object(o.a)(["\n  width: 100%;\n  height: 100%;\n"])));
            t.a = function(e) { var t, n, r = e.profile; return Object(u.jsxs)(d, { bg: "/images/nfts/".concat(null === (t = r.nft) || void 0 === t || null === (n = t.images) || void 0 === n ? void 0 : n.md), children: [!r.isActive && Object(u.jsx)(p, {}), Object(u.jsx)(l, { src: "/images/teams/".concat(r.team.images.alt), alt: r.team.name })] }) }
        },
        853: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = n(44),
                i = n(0),
                a = n(388),
                o = n(854);

            function c(e) { return e && "object" === typeof e && "default" in e ? e : { default: e } }
            var s = c(r),
                u = c(i),
                l = c(a),
                d = c(o);

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach((function(t) { j(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }

            function b(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function m(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function j(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function h(e) { return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function x(e, t) { return (x = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

            function v(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

            function g(e, t) { return !t || "object" !== typeof t && "function" !== typeof t ? v(e) : t }

            function O(e) {
                var t = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (e) { return !1 } }();
                return function() {
                    var n, r = h(e);
                    if (t) {
                        var i = h(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return g(this, n)
                }
            }

            function y(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, i, a = [],
                        o = !0,
                        c = !1;
                    try { for (n = n.call(e); !(o = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); o = !0); } catch (s) { c = !0, i = s } finally { try { o || null == n.return || n.return() } finally { if (c) throw i } }
                    return a
                }(e, t) || function(e, t) { if (!e) return; if ("string" === typeof e) return w(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(e, t) }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
            }

            function w(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var F = function(e, t) {
                    var n = t.decimal,
                        r = t.decimals,
                        i = t.duration,
                        a = t.easingFn,
                        o = t.end,
                        c = t.formattingFn,
                        s = t.prefix,
                        u = t.separator,
                        l = t.start,
                        p = t.suffix,
                        f = t.useEasing;
                    return new d.default(e, l, o, r, i, { decimal: n, easingFn: a, formattingFn: c, separator: u, prefix: s, suffix: p, useEasing: f, useGrouping: !!u })
                },
                k = function(e) {
                    ! function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && x(e, t)
                    }(a, e);
                    var t, n, r, i = O(a);

                    function a() {
                        var e;
                        b(this, a);
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return j(v(e = i.call.apply(i, [this].concat(n))), "checkProps", (function(t) {
                            var n = e.props,
                                r = n.start,
                                i = n.suffix,
                                a = n.prefix,
                                o = n.redraw,
                                c = n.duration,
                                s = n.separator,
                                u = n.decimals,
                                l = n.decimal,
                                d = n.className;
                            return c !== t.duration || r !== t.start || i !== t.suffix || a !== t.prefix || s !== t.separator || u !== t.decimals || l !== t.decimal || d !== t.className || o
                        })), j(v(e), "createInstance", (function() { return "function" === typeof e.props.children && l.default(e.containerRef.current && (e.containerRef.current instanceof HTMLElement || e.containerRef.current instanceof SVGTextElement || e.containerRef.current instanceof SVGTSpanElement), 'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'), F(e.containerRef.current, e.props) })), j(v(e), "pauseResume", (function() {
                            var t = v(e),
                                n = t.reset,
                                r = t.restart,
                                i = t.update,
                                a = e.props.onPauseResume;
                            e.instance.pauseResume(), a({ reset: n, start: r, update: i })
                        })), j(v(e), "reset", (function() {
                            var t = v(e),
                                n = t.pauseResume,
                                r = t.restart,
                                i = t.update,
                                a = e.props.onReset;
                            e.instance.reset(), a({ pauseResume: n, start: r, update: i })
                        })), j(v(e), "restart", (function() { e.reset(), e.start() })), j(v(e), "start", (function() {
                            var t = v(e),
                                n = t.pauseResume,
                                r = t.reset,
                                i = t.restart,
                                a = t.update,
                                o = e.props,
                                c = o.delay,
                                s = o.onEnd,
                                u = o.onStart,
                                l = function() { return e.instance.start((function() { return s({ pauseResume: n, reset: r, start: i, update: a }) })) };
                            c > 0 ? e.timeoutId = setTimeout(l, 1e3 * c) : l(), u({ pauseResume: n, reset: r, update: a })
                        })), j(v(e), "update", (function(t) {
                            var n = v(e),
                                r = n.pauseResume,
                                i = n.reset,
                                a = n.restart,
                                o = e.props.onUpdate;
                            e.instance.update(t), o({ pauseResume: r, reset: i, start: a })
                        })), j(v(e), "containerRef", u.default.createRef()), e
                    }
                    return t = a, (n = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.children,
                                n = e.delay;
                            this.instance = this.createInstance(), "function" === typeof t && 0 !== n || this.start()
                        }
                    }, { key: "shouldComponentUpdate", value: function(e) { var t = this.props.end; return this.checkProps(e) || t !== e.end } }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props,
                                n = t.end,
                                r = t.preserveValue;
                            this.checkProps(e) && (this.instance.reset(), this.instance = this.createInstance(), this.start()), n !== e.end && (r || this.instance.reset(), this.instance.update(n))
                        }
                    }, { key: "componentWillUnmount", value: function() { this.timeoutId && clearTimeout(this.timeoutId), this.instance.reset() } }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.children,
                                n = e.className,
                                r = e.style,
                                i = this.containerRef,
                                a = this.pauseResume,
                                o = this.reset,
                                c = this.restart,
                                s = this.update;
                            return "function" === typeof t ? t({ countUpRef: i, pauseResume: a, reset: o, start: c, update: s }) : u.default.createElement("span", { className: n, ref: i, style: r })
                        }
                    }]) && m(t.prototype, n), r && m(t, r), a
                }(i.Component);
            j(k, "propTypes", { decimal: s.default.string, decimals: s.default.number, delay: s.default.number, easingFn: s.default.func, end: s.default.number.isRequired, formattingFn: s.default.func, onEnd: s.default.func, onStart: s.default.func, prefix: s.default.string, redraw: s.default.bool, separator: s.default.string, start: s.default.number, startOnMount: s.default.bool, suffix: s.default.string, style: s.default.object, useEasing: s.default.bool, preserveValue: s.default.bool }), j(k, "defaultProps", { decimal: ".", decimals: 0, delay: null, duration: null, easingFn: null, formattingFn: null, onEnd: function() {}, onPauseResume: function() {}, onReset: function() {}, onStart: function() {}, onUpdate: function() {}, prefix: "", redraw: !1, separator: "", start: 0, startOnMount: !0, suffix: "", style: void 0, useEasing: !0, preserveValue: !1 });
            var C = { innerHTML: null };
            t.default = k, t.useCountUp = function(e) {
                var t = f(f({}, k.defaultProps), e),
                    n = t.start,
                    r = t.formattingFn,
                    a = y(i.useState("function" === typeof r ? r(n) : n), 2),
                    o = a[0],
                    c = a[1],
                    s = i.useRef(null),
                    u = i.useRef(null),
                    l = function() {
                        var e = s.current;
                        if (null !== e) return e;
                        var n = function() {
                            var e = F(C, t),
                                n = e.options.formattingFn;
                            return e.options.formattingFn = function() {
                                var e = n.apply(void 0, arguments);
                                c(e)
                            }, e
                        }();
                        return s.current = n, n
                    },
                    d = function() {
                        var e = t.onReset;
                        l().reset(), e({ pauseResume: b, start: p, update: m })
                    },
                    p = function e() {
                        var n = t.onStart,
                            r = t.onEnd;
                        l().reset(), l().start((function() { r({ pauseResume: b, reset: d, start: e, update: m }) })), n({ pauseResume: b, reset: d, update: m })
                    },
                    b = function() {
                        var e = t.onPauseResume;
                        l().pauseResume(), e({ reset: d, start: p, update: m })
                    },
                    m = function(e) {
                        var n = t.onUpdate;
                        l().update(e), n({ pauseResume: b, reset: d, start: p })
                    };
                return i.useEffect((function() {
                    var e = t.delay,
                        n = t.onStart,
                        r = t.onEnd;
                    return t.startOnMount && (u.current = setTimeout((function() { n({ pauseResume: b, reset: d, update: m }), l().start((function() { clearTimeout(u.current), r({ pauseResume: b, reset: d, start: p, update: m }) })) }), 1e3 * e)),
                        function() { clearTimeout(u.current), d() }
                }), []), { countUp: o, start: p, pauseResume: b, reset: d, update: m }
            }
        },
        854: function(e, t, n) {
            var r, i;
            void 0 === (i = "function" === typeof(r = function(e, t, n) {
                return function(e, t, n, r, i, a) {
                    function o(e) {
                        var t, n, r, i, a, o, c = e < 0;
                        if (e = Math.abs(e).toFixed(u.decimals), n = (t = (e += "").split("."))[0], r = t.length > 1 ? u.options.decimal + t[1] : "", u.options.useGrouping) {
                            for (i = "", a = 0, o = n.length; a < o; ++a) 0 !== a && a % 3 === 0 && (i = u.options.separator + i), i = n[o - a - 1] + i;
                            n = i
                        }
                        return u.options.numerals.length && (n = n.replace(/[0-9]/g, (function(e) { return u.options.numerals[+e] })), r = r.replace(/[0-9]/g, (function(e) { return u.options.numerals[+e] }))), (c ? "-" : "") + u.options.prefix + n + r + u.options.suffix
                    }

                    function c(e, t, n, r) { return n * (1 - Math.pow(2, -10 * e / r)) * 1024 / 1023 + t }

                    function s(e) { return "number" == typeof e && !isNaN(e) }
                    var u = this;
                    if (u.version = function() { return "1.9.3" }, u.options = { useEasing: !0, useGrouping: !0, separator: ",", decimal: ".", easingFn: c, formattingFn: o, prefix: "", suffix: "", numerals: [] }, a && "object" == typeof a)
                        for (var l in u.options) a.hasOwnProperty(l) && null !== a[l] && (u.options[l] = a[l]);
                    "" === u.options.separator ? u.options.useGrouping = !1 : u.options.separator = "" + u.options.separator;
                    for (var d = 0, p = ["webkit", "moz", "ms", "o"], f = 0; f < p.length && !window.requestAnimationFrame; ++f) window.requestAnimationFrame = window[p[f] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[p[f] + "CancelAnimationFrame"] || window[p[f] + "CancelRequestAnimationFrame"];
                    window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
                        var n = (new Date).getTime(),
                            r = Math.max(0, 16 - (n - d)),
                            i = window.setTimeout((function() { e(n + r) }), r);
                        return d = n + r, i
                    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) { clearTimeout(e) }), u.initialize = function() { return !!u.initialized || (u.error = "", u.d = "string" == typeof e ? document.getElementById(e) : e, u.d ? (u.startVal = Number(t), u.endVal = Number(n), s(u.startVal) && s(u.endVal) ? (u.decimals = Math.max(0, r || 0), u.dec = Math.pow(10, u.decimals), u.duration = 1e3 * Number(i) || 2e3, u.countDown = u.startVal > u.endVal, u.frameVal = u.startVal, u.initialized = !0, !0) : (u.error = "[CountUp] startVal (" + t + ") or endVal (" + n + ") is not a number", !1)) : (u.error = "[CountUp] target is null or undefined", !1)) }, u.printValue = function(e) { var t = u.options.formattingFn(e); "INPUT" === u.d.tagName ? this.d.value = t : "text" === u.d.tagName || "tspan" === u.d.tagName ? this.d.textContent = t : this.d.innerHTML = t }, u.count = function(e) {
                        u.startTime || (u.startTime = e), u.timestamp = e;
                        var t = e - u.startTime;
                        u.remaining = u.duration - t, u.options.useEasing ? u.countDown ? u.frameVal = u.startVal - u.options.easingFn(t, 0, u.startVal - u.endVal, u.duration) : u.frameVal = u.options.easingFn(t, u.startVal, u.endVal - u.startVal, u.duration) : u.countDown ? u.frameVal = u.startVal - (u.startVal - u.endVal) * (t / u.duration) : u.frameVal = u.startVal + (u.endVal - u.startVal) * (t / u.duration), u.countDown ? u.frameVal = u.frameVal < u.endVal ? u.endVal : u.frameVal : u.frameVal = u.frameVal > u.endVal ? u.endVal : u.frameVal, u.frameVal = Math.round(u.frameVal * u.dec) / u.dec, u.printValue(u.frameVal), t < u.duration ? u.rAF = requestAnimationFrame(u.count) : u.callback && u.callback()
                    }, u.start = function(e) { u.initialize() && (u.callback = e, u.rAF = requestAnimationFrame(u.count)) }, u.pauseResume = function() { u.paused ? (u.paused = !1, delete u.startTime, u.duration = u.remaining, u.startVal = u.frameVal, requestAnimationFrame(u.count)) : (u.paused = !0, cancelAnimationFrame(u.rAF)) }, u.reset = function() { u.paused = !1, delete u.startTime, u.initialized = !1, u.initialize() && (cancelAnimationFrame(u.rAF), u.printValue(u.startVal)) }, u.update = function(e) {
                        if (u.initialize()) {
                            if (!s(e = Number(e))) return void(u.error = "[CountUp] update() - new endVal is not a number: " + e);
                            u.error = "", e !== u.frameVal && (cancelAnimationFrame(u.rAF), u.paused = !1, delete u.startTime, u.startVal = u.frameVal, u.endVal = e, u.countDown = u.startVal > u.endVal, u.rAF = requestAnimationFrame(u.count))
                        }
                    }, u.initialize() && u.printValue(u.startVal)
                }
            }) ? r.call(t, n, t, e) : r) || (e.exports = i)
        }
    }
]);
//# sourceMappingURL=6.665f7203.chunk.js.map
