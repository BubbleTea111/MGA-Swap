(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [0], {
        10: function(e, t, n) {
            "use strict";
            var a, r, i, o;
            n.d(t, "b", (function() { return r })), n.d(t, "a", (function() { return i })),
                function(e) { e.poolBasic = "poolBasic", e.poolUnlimited = "poolUnlimited" }(a || (a = {})),
                function(e) { e.COMMUNITY = "Community", e.CORE = "Core", e.BINANCE = "Binance", e.AUTO = "Auto" }(r || (r = {})),
                function(e) { e.PENDING = "pending", e.OPEN = "open", e.CLOSE = "close", e.CLAIMABLE = "claimable" }(i || (i = {})),
                function(e) { e[e.ToBeAnnounced = 0] = "ToBeAnnounced", e[e.Pending = 1] = "Pending", e[e.Open = 2] = "Open", e[e.Finished = 3] = "Finished", e[e.Closed = 4] = "Closed" }(o || (o = {}))
        },
        100: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return l })), n.d(t, "c", (function() { return p })), n.d(t, "a", (function() { return b }));
            var a, r, i, o, s = n(13),
                c = n(7),
                u = n(2),
                d = Object(c.e)(u.j)(a || (a = Object(s.a)(["\n  width: ", ";\n  border-radius: 16px;\n  padding: 1.25rem;\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n"])), (function(e) { var t = e.width; return null !== t && void 0 !== t ? t : "100%" }), (function(e) { return e.padding }), (function(e) { return e.border }), (function(e) { return e.borderRadius }), (function(e) { return e.theme.colors.background }));
            t.d = d;
            var l = Object(c.e)(d)(r || (r = Object(s.a)(["\n  border: 1px solid ", ";\n  background-color: ", ";\n"])), (function(e) { return e.theme.colors.background }), (function(e) { return e.theme.colors.backgroundAlt })),
                p = Object(c.e)(d)(i || (i = Object(s.a)(["\n  border: 1px solid ", ";\n  background-color: ", ";\n"])), (function(e) { return e.theme.colors.cardBorder }), (function(e) { return e.theme.colors.background })),
                b = Object(c.e)(d)(o || (o = Object(s.a)(["\n  background-color: ", ";\n"])), (function(e) { return e.theme.colors.dropdown }))
        },
        101: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return a })), n.d(t, "c", (function() { return r })), n.d(t, "b", (function() { return i }));
            var a = { locale: "en-US", language: "English", code: "en" },
                r = { "en-US": a, },
                i = Object.values(r)
        },
        106: function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() { return v })), n.d(t, "d", (function() { return x })), n.d(t, "a", (function() { return j })), n.d(t, "c", (function() { return B })), n.d(t, "b", (function() { return S }));
            var a = n(11),
                r = n(17),
                i = n(126),
                o = n(4),
                s = n(0),
                c = n(28),
                u = n(162),
                d = n(20),
                l = n(54),
                p = n(163),
                b = n(431),
                y = n(70);
            var m = n(21),
                f = n(37),
                h = n(78),
                k = n(88),
                T = n(27),
                g = n(45);

            function v() { return Object(c.c)((function(e) { return e.swap })) }

            function x() {
                var e = Object(c.b)(),
                    t = Object(s.useCallback)((function(t, n) { e(Object(T.c)({ field: t, currencyId: n instanceof o.j ? n.address : n === o.d ? "BNB" : "" })) }), [e]);
                return { onSwitchTokens: Object(s.useCallback)((function() { e(Object(T.e)()) }), [e]), onCurrencySelection: t, onUserInput: Object(s.useCallback)((function(t, n) { e(Object(T.f)({ field: t, typedValue: n })) }), [e]), onChangeRecipient: Object(s.useCallback)((function(t) { e(Object(T.d)({ recipient: t })) }), [e]) }
            }

            function j(e, t) { if (e && t) try { var n = Object(i.parseUnits)(e, t.decimals).toString(); if ("0" !== n) return t instanceof o.j ? new o.k(t, o.e.BigInt(n)) : o.c.ether(o.e.BigInt(n)) } catch (a) { console.debug('Failed to parse input amount: "'.concat(e, '"'), a) } }
            var w = ["0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f", "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a", "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"];

            function O(e, t) { return e.route.path.some((function(e) { return e.address === t })) || e.route.pairs.some((function(e) { return e.liquidityToken.address === t })) }

            function B() {
                var e, t, n, i, o, s, c, b = Object(d.a)().account,
                    y = Object(m.b)().t,
                    x = v(),
                    B = x.independentField,
                    A = x.typedValue,
                    C = x[T.a.INPUT].currencyId,
                    E = x[T.a.OUTPUT].currencyId,
                    P = x.recipient,
                    S = Object(l.c)(C),
                    I = Object(l.c)(E),
                    F = Object(u.a)(null !== P && void 0 !== P ? P : void 0),
                    D = null !== (e = null === P ? b : F.address) && void 0 !== e ? e : null,
                    N = Object(k.c)(null !== b && void 0 !== b ? b : void 0, [null !== S && void 0 !== S ? S : void 0, null !== I && void 0 !== I ? I : void 0]),
                    L = B === T.a.INPUT,
                    M = j(A, null !== (t = L ? S : I) && void 0 !== t ? t : void 0),
                    R = Object(p.b)(L ? M : void 0, null !== I && void 0 !== I ? I : void 0),
                    U = Object(p.c)(null !== S && void 0 !== S ? S : void 0, L ? void 0 : M),
                    _ = L ? R : U,
                    q = (n = {}, Object(r.a)(n, T.a.INPUT, N[0]), Object(r.a)(n, T.a.OUTPUT, N[1]), n),
                    V = (i = {}, Object(r.a)(i, T.a.INPUT, null !== S && void 0 !== S ? S : void 0), Object(r.a)(i, T.a.OUTPUT, null !== I && void 0 !== I ? I : void 0), i);
                (b || (o = y("Connect Wallet")), M) || (o = null !== (s = o) && void 0 !== s ? s : y("Enter an amount"));
                V[T.a.INPUT] && V[T.a.OUTPUT] || (o = null !== (c = o) && void 0 !== c ? c : y("Select a token"));
                var Y, H = Object(f.h)(D);
                if (D && H) {
                    if (-1 !== w.indexOf(H) || R && O(R, H) || U && O(U, H)) {
                        var W;
                        o = null !== (W = o) && void 0 !== W ? W : y("Invalid recipient")
                    }
                } else o = null !== (Y = o) && void 0 !== Y ? Y : y("Enter a recipient");
                var z = Object(g.l)(),
                    K = Object(a.a)(z, 1)[0],
                    G = _ && K && Object(h.a)(_, K),
                    X = [q[T.a.INPUT], G ? G[T.a.INPUT] : null],
                    J = X[0],
                    $ = X[1];
                return J && $ && J.lessThan($) && (o = y("Insufficient %symbol% balance", { symbol: $.currency.symbol })), { currencies: V, currencyBalances: q, parsedAmount: M, v2Trade: null !== _ && void 0 !== _ ? _ : void 0, inputError: o }
            }

            function A(e) { if ("string" === typeof e) { var t = Object(f.h)(e); if (t) return t; if ("BNB" === e.toUpperCase()) return "BNB"; if (!1 === t) return "BNB" } return null !== "BNB" ? "BNB" : "" }
            var C = /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,
                E = /^0x[a-fA-F0-9]{40}$/;

            function P(e) {
                var t, n = A(e.inputCurrency),
                    a = A(e.outputCurrency);
                n === a && ("string" === typeof e.outputCurrency ? n = "" : a = "");
                var i, o = function(e) { return "string" !== typeof e ? null : Object(f.h)(e) || (C.test(e) || E.test(e) ? e : null) }(e.recipient);
                return t = {}, Object(r.a)(t, T.a.INPUT, { currencyId: n }), Object(r.a)(t, T.a.OUTPUT, { currencyId: a }), Object(r.a)(t, "typedValue", "string" !== typeof(i = e.exactAmount) || isNaN(parseFloat(i)) ? "" : i), Object(r.a)(t, "independentField", function(e) { return "string" === typeof e && "output" === e.toLowerCase() ? T.a.OUTPUT : T.a.INPUT }(e.exactField)), Object(r.a)(t, "recipient", o), t
            }

            function S() {
                var e = Object(d.a)().chainId,
                    t = Object(c.b)(),
                    n = function() { var e = Object(y.g)().search; return Object(s.useMemo)((function() { return e && e.length > 1 ? Object(b.parse)(e, { parseArrays: !1, ignoreQueryPrefix: !0 }) : {} }), [e]) }(),
                    r = Object(s.useState)(),
                    i = Object(a.a)(r, 2),
                    o = i[0],
                    u = i[1];
                return Object(s.useEffect)((function() {
                    if (e) {
                        var a = P(n);
                        t(Object(T.b)({ typedValue: a.typedValue, field: a.independentField, inputCurrencyId: a[T.a.INPUT].currencyId, outputCurrencyId: a[T.a.OUTPUT].currencyId, recipient: null })), u({ inputCurrencyId: a[T.a.INPUT].currencyId, outputCurrencyId: a[T.a.OUTPUT].currencyId })
                    }
                }), [t, e]), o
            }
        },
        111: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return a })), n.d(t, "c", (function() { return x })), n.d(t, "d", (function() { return j }));
            var a, r = n(3),
                i = n.n(r),
                o = n(6),
                s = n(12),
                c = n(11),
                u = n(0),
                d = n(61),
                l = n(29),
                p = n.n(l),
                b = n(80),
                y = n(34),
                m = n(40),
                f = n(39),
                h = n(99),
                k = n(151),
                T = n(264),
                g = function() {
                    var e = Object(u.useState)(Date.now()),
                        t = Object(c.a)(e, 2),
                        n = t[0],
                        a = t[1];
                    return { lastUpdated: n, previousLastUpdated: Object(T.a)(n), setLastUpdated: Object(u.useCallback)((function() { a(Date.now()) }), [a]) }
                };
            ! function(e) { e.NOT_FETCHED = "not-fetched", e.SUCCESS = "success", e.FAILED = "failed" }(a || (a = {}));
            var v = function(e) {
                    var t = a.NOT_FETCHED,
                        n = a.SUCCESS,
                        r = a.FAILED,
                        d = Object(u.useState)({ balance: f.c, fetchStatus: t }),
                        l = Object(c.a)(d, 2),
                        y = l[0],
                        h = l[1],
                        T = Object(b.c)().account,
                        g = Object(k.a)().fastRefresh;
                    return Object(u.useEffect)((function() {
                        T && function() {
                            var t = Object(s.a)(i.a.mark((function t() {
                                var a, s;
                                return i.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return a = Object(m.a)(e), t.prev = 1, t.next = 4, a.balanceOf(T);
                                        case 4:
                                            s = t.sent, h({ balance: new p.a(s.toString()), fetchStatus: n }), t.next = 12;
                                            break;
                                        case 8:
                                            t.prev = 8, t.t0 = t.catch(1), console.error(t.t0), h((function(e) { return Object(o.a)(Object(o.a)({}, e), {}, { fetchStatus: r }) }));
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [1, 8]
                                ])
                            })));
                            return function() { return t.apply(this, arguments) }
                        }()()
                    }), [T, e, g, n, r]), y
                },
                x = function() {
                    var e = Object(u.useState)(a.NOT_FETCHED),
                        t = Object(c.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        o = Object(u.useState)(d.a.BigNumber.from(0)),
                        l = Object(c.a)(o, 2),
                        p = l[0],
                        y = l[1],
                        m = Object(b.c)().account,
                        f = g(),
                        k = f.lastUpdated,
                        T = f.setLastUpdated;
                    return Object(u.useEffect)((function() {
                        m && function() {
                            var e = Object(s.a)(i.a.mark((function e() {
                                var t;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, h.a.getBalance(m);
                                        case 3:
                                            t = e.sent, y(t), r(a.SUCCESS), e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), r(a.FAILED);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })));
                            return function() { return e.apply(this, arguments) }
                        }()()
                    }), [m, k, y, r]), { balance: p, fetchStatus: n, refresh: T }
                },
                j = function() {
                    var e = v(y.a.cake.address),
                        t = e.balance,
                        n = e.fetchStatus;
                    return { balance: d.a.BigNumber.from(t.toString()), fetchStatus: n }
                };
            t.b = v
        },
        120: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return f }));
            var a, r = n(33),
                i = n(13),
                o = n(4),
                s = n(2),
                c = n(0),
                u = n(7),
                d = n(269),
                l = n(68),
                p = function(e) { return "https://assets.trustwalletapp.com/blockchains/smartchain/assets/".concat(e, "/logo.png") },
                b = n(266),
                y = n(1),
                m = Object(u.e)(b.a)(a || (a = Object(i.a)(["\n  width: ", ";\n  height: ", ";\n"])), (function(e) { return e.size }), (function(e) { return e.size }));

            function f(e) {
                var t, n = e.currency,
                    a = e.size,
                    i = void 0 === a ? "24px" : a,
                    u = e.style,
                    b = Object(d.a)(n instanceof l.a ? n.logoURI : void 0),
                    f = Object(c.useMemo)((function() { return n === o.d ? [] : n instanceof o.j ? n instanceof l.a ? [].concat(Object(r.a)(b), [p(n.address)]) : [p(n.address)] : [] }), [n, b]);
                return n === o.d ? Object(y.jsx)(s.h, { width: i, style: u }) : Object(y.jsx)(m, { size: i, srcs: f, alt: "".concat(null !== (t = null === n || void 0 === n ? void 0 : n.symbol) && void 0 !== t ? t : "token", " logo"), style: u })
            }
        },
        121: function(e, t, n) {
            "use strict";
            var a = n(34),
                r = Object(a.c)(),
                i = [{ pid: 0, lpSymbol: "MGT", lpAddresses: { 97: "0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e", 56: "0x6292F56ccE9FB34e21010a1A237a4D908a6474eA" }, token: r.syrup, quoteToken: r.wbnb }, { pid: 251, lpSymbol: "CAKE-BNB LP", lpAddresses: { 97: "0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4", 56: "0x0eD7e52944161450477ee417DE9Cd3a859b14fD0" }, token: r.cake, quoteToken: r.wbnb }, { pid: 252, lpSymbol: "BUSD-BNB LP", lpAddresses: { 97: "", 56: "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16" }, token: r.busd, quoteToken: r.wbnb }, { pid: 429, lpSymbol: "CHESS-USDC LP", lpAddresses: { 97: "", 56: "0x1472976e0b97f5b2fc93f1fff14e2b5c4447b64f" }, token: r.chess, quoteToken: r.usdc }, { pid: 447, lpSymbol: "GNT-BNB LP", lpAddresses: { 97: "", 56: "0x3747e3e107223539FD09bb730b055A1f11F78Adf" }, token: r.gnt, quoteToken: r.wbnb, isCommunity: !0 }, { pid: 425, lpSymbol: "DVI-BNB LP", lpAddresses: { 97: "", 56: "0x89ebf9cd99864f6e51bd7a578965922029cab977" }, token: r.dvi, quoteToken: r.wbnb, isCommunity: !0 }, { pid: 439, lpSymbol: "MCRN-BNB LP", lpAddresses: { 97: "", 56: "0xe8D5d81dac092Ae61d097f84EFE230759BF2e522" }, token: r.mcrn, quoteToken: r.wbnb, isCommunity: !0 }, { pid: 456, lpSymbol: "TLOS-BNB LP", lpAddresses: { 97: "", 56: "0x3eDb06e2d182d133864fe7C0f9B4C204bBf61D4E" }, token: r.tlos, quoteToken: r.wbnb }, { pid: 455, lpSymbol: "HERO-BNB LP", lpAddresses: { 97: "", 56: "0x5d937c3966002cbD9d32c890a59439b4b300a14d" }, token: r.stephero, quoteToken: r.wbnb }, { pid: 449, lpSymbol: "BP-BNB LP", lpAddresses: { 97: "", 56: "0x2bF2dEB40639201C9A94c9e33b4852D9AEa5fd2D" }, token: r.bp, quoteToken: r.wbnb }, { pid: 454, lpSymbol: "BSCDEFI-BNB LP", lpAddresses: { 97: "", 56: "0x5B0A3b98C2f01741A11E57A9d0595B254E62F9F2" }, token: r.bscdefi, quoteToken: r.wbnb }, { pid: 453, lpSymbol: "QBT-BNB LP", lpAddresses: { 97: "", 56: "0x67EFeF66A55c4562144B9AcfCFbc62F9E4269b3e" }, token: r.qbt, quoteToken: r.wbnb }, { pid: 452, lpSymbol: "NAOS-BNB LP", lpAddresses: { 97: "", 56: "0xcaa662ad41a662b81be2aea5d59ec0697628665f" }, token: r.naos, quoteToken: r.wbnb }, { pid: 451, lpSymbol: "PHA-BUSD LP", lpAddresses: { 97: "", 56: "0x4ddd56e2f34338839BB5953515833950eA680aFb" }, token: r.pha, quoteToken: r.busd }, { pid: 314, lpSymbol: "BEL-BNB LP", lpAddresses: { 97: "", 56: "0x69DEE989c30b5fFe40867f5FC14F00E4bCE7B681" }, token: r.bel, quoteToken: r.wbnb }, { pid: 446, lpSymbol: "BMON-BUSD LP", lpAddresses: { 97: "", 56: "0x00e53C169dA54a7E11172aEEDf8Eb87F060F479e" }, token: r.bmon, quoteToken: r.busd, isCommunity: !0 }, { pid: 450, lpSymbol: "SFUND-BNB LP", lpAddresses: { 97: "", 56: "0x74fA517715C4ec65EF01d55ad5335f90dce7CC87" }, token: r.sfund, quoteToken: r.wbnb, isCommunity: !0 }, { pid: 448, lpSymbol: "RUSD-BUSD LP", lpAddresses: { 97: "", 56: "0x59FaC9e98479fc9979aE2a0C7422Af50bCBB9B26" }, token: r.rusd, quoteToken: r.busd, isCommunity: !0 }, { pid: 317, lpSymbol: "RAMP-BUSD LP", lpAddresses: { 97: "", 56: "0xE834bf723f5bDff34a5D1129F3c31Ea4787Bc76a" }, token: r.ramp, quoteToken: r.busd }, { pid: 445, lpSymbol: "POTS-BUSD LP", lpAddresses: { 97: "", 56: "0xF90BAA331Cfd40F094476E752Bf272892170d399" }, token: r.pots, quoteToken: r.busd }, { pid: 397, lpSymbol: "TUSD-BUSD LP", lpAddresses: { 97: "", 56: "0x2e28b9b74d6d99d4697e913b82b41ef1cac51c6c" }, token: r.tusd, quoteToken: r.busd }, { pid: 443, lpSymbol: "BTT-BUSD LP", lpAddresses: { 97: "", 56: "0xdcfbb12ded3fea12d2a078bc6324131cd14bf835" }, token: r.btt, quoteToken: r.busd }, { pid: 442, lpSymbol: "TRX-BUSD LP", lpAddresses: { 97: "", 56: "0xb5d108578be3750209d1b3a8f45ffee8c5a75146" }, token: r.trx, quoteToken: r.busd }, { pid: 441, lpSymbol: "WIN-BUSD LP", lpAddresses: { 97: "", 56: "0x6a445ceb72c8b1751755386c3990055ff92e14a0" }, token: r.win, quoteToken: r.busd }, { pid: 436, lpSymbol: "BABYCAKE-BNB LP", lpAddresses: { 97: "", 56: "0xb5e33fE13a821e55ED33C884589a804B1b4F6fD8" }, token: r.babycake, quoteToken: r.wbnb, isCommunity: !0 }, { pid: 437, lpSymbol: "BMON-BNB LP", lpAddresses: { 97: "", 56: "0x3C2b7B578Dd2175A1c3524Aa0D515106282Bf108" }, token: r.bmon, quoteToken: r.wbnb, isCommunity: !0 }, { pid: 440, lpSymbol: "HERO-BNB LP", lpAddresses: { 97: "", 56: "0xe267018C943E77992e7e515724B07b9CE7938124" }, token: r.hero, quoteToken: r.wbnb, isCommunity: !0 }, { pid: 438, lpSymbol: "WSG-BNB LP", lpAddresses: { 97: "", 56: "0x37Ff7D4459ad96E0B01275E5efffe091f33c2CAD" }, token: r.wsg, quoteToken: r.wbnb, isCommunity: !0 }, { pid: 435, lpSymbol: "REVV-BNB LP", lpAddresses: { 97: "", 56: "0x1cc18962b919ef90085a8b21f8ddc95824fbad9e" }, token: r.revv, quoteToken: r.wbnb }, { pid: 367, lpSymbol: "BTT-BNB LP", lpAddresses: { 97: "", 56: "0x946696344e7d4346b223e1cf77035a76690d6a73" }, token: r.btt, quoteToken: r.wbnb }, { pid: 434, lpSymbol: "SKILL-BNB LP", lpAddresses: { 97: "", 56: "0xc19dfd34d3ba5816df9cbdaa02d32a9f8dc6f6fc" }, token: r.skill, quoteToken: r.wbnb }, { pid: 369, lpSymbol: "WIN-BNB LP", lpAddresses: { 97: "", 56: "0x894bd57afd8efc93d9171cb585d11d0977557425" }, token: r.win, quoteToken: r.wbnb }, { pid: 433, lpSymbol: "IF-BUSD LP", lpAddresses: { 97: "", 56: "0x7b4682D2B3f8670b125aF6AEA8d7eD2Daa43Bdc1" }, token: r.if, quoteToken: r.busd }, { pid: 432, lpSymbol: "SPS-BNB LP", lpAddresses: { 97: "", 56: "0xfdfde3af740a22648b9dd66d05698e5095940850" }, token: r.sps, quoteToken: r.wbnb }, { pid: 431, lpSymbol: "C98-BNB LP", lpAddresses: { 97: "", 56: "0x92247860A03F48d5c6425c7CA35CDcFCB1013AA1" }, token: r.c98, quoteToken: r.wbnb }, { pid: 430, lpSymbol: "AXS-BNB LP", lpAddresses: { 97: "", 56: "0xC2d00De94795e60FB76Bc37d899170996cBdA436" }, token: r.axs, quoteToken: r.wbnb }, { pid: 379, lpSymbol: "PMON-BUSD LP", lpAddresses: { 97: "", 56: "0xcdb0016d97fd0e7ec2c3b78aa4786cbd8e19c14c" }, token: r.pmon, quoteToken: r.busd }, { pid: 368, lpSymbol: "TRX-BNB LP", lpAddresses: { 97: "", 56: "0x3cd338c3bb249b6b3c55799f85a589febbbff9dd" }, token: r.trx, quoteToken: r.wbnb }, { pid: 428, lpSymbol: "TITAN-BUSD LP", lpAddresses: { 97: "", 56: "0x9392a1f471d9aa14c0b8eb28bd7a3f4a814727be" }, token: r.titan, quoteToken: r.busd }, { pid: 427, lpSymbol: "ONE-BNB LP", lpAddresses: { 97: "", 56: "0x9d2296e2fe3cdbf2eb3e3e2ca8811bafa42eedff" }, token: r.harmony, quoteToken: r.wbnb }, { pid: 426, lpSymbol: "MASK-BNB LP", lpAddresses: { 97: "", 56: "0x46c6bA71af7648cD7f67D0AD4d16f75bE251ed12" }, token: r.mask, quoteToken: r.wbnb }, { pid: 339, lpSymbol: "GUM-BNB LP", lpAddresses: { 97: "", 56: "0x28Ea5894D4DBbE90bB58eE3BAB2869387d711c87" }, token: r.gum, quoteToken: r.wbnb }, { pid: 424, lpSymbol: "ADX-BUSD LP", lpAddresses: { 97: "", 56: "0x0648ff5de80adf54aac07ece2490f50a418dde23" }, token: r.adx, quoteToken: r.busd }, { pid: 423, lpSymbol: "USDC-USDT LP", lpAddresses: { 97: "", 56: "0xec6557348085aa57c72514d67070dc863c0a5a8c" }, token: r.usdc, quoteToken: r.usdt }, { pid: 422, lpSymbol: "CAKE-USDT LP", lpAddresses: { 97: "", 56: "0xA39Af17CE4a8eb807E076805Da1e2B8EA7D0755b" }, token: r.cake, quoteToken: r.usdt }, { pid: 357, lpSymbol: "SUTER-BNB LP", lpAddresses: { 97: "", 56: "0x2d5DB889392Bc3c8B023A8631ca230A033eEA1B8" }, token: r.suter, quoteToken: r.wbnb }, { pid: 421, lpSymbol: "BSCPAD-BNB LP", lpAddresses: { 97: "", 56: "0xba01662e978de7d67f8ffc937726215eb8995d17" }, token: r.bscpad, quoteToken: r.wbnb }, { pid: 420, lpSymbol: "RABBIT-BNB LP", lpAddresses: { 97: "", 56: "0x04b56A5B3f45CFeaFbfDCFc999c14be5434f2146" }, token: r.rabbit, quoteToken: r.wbnb }, { pid: 419, lpSymbol: "WAULTx-BNB LP", lpAddresses: { 97: "", 56: "0x3e4370204f598205998143F07ebCC486E441b456" }, token: r.waultx, quoteToken: r.wbnb }, { pid: 418, lpSymbol: "WEX-BNB LP", lpAddresses: { 97: "", 56: "0x547A355E70cd1F8CAF531B950905aF751dBEF5E6" }, token: r.wex, quoteToken: r.wbnb }, { pid: 417, lpSymbol: "FORM-BUSD LP", lpAddresses: { 97: "", 56: "0x3E19C18Fe3458A6065D8F0844cB7Eae52C9DAE07" }, token: r.form, quoteToken: r.busd }, { pid: 416, lpSymbol: "ORBS-BUSD LP", lpAddresses: { 97: "", 56: "0xB87b857670A44356f2b70337E0F218713D2378e8" }, token: r.orbs, quoteToken: r.busd }, { pid: 415, lpSymbol: "DG-BNB LP", lpAddresses: { 97: "", 56: "0x8b2824d57eebf07f5aff5c91fa67ed7c501a9f43" }, token: r.$dg, quoteToken: r.wbnb }, { pid: 414, lpSymbol: "WOO-BNB LP", lpAddresses: { 97: "", 56: "0x89eE0491CE55d2f7472A97602a95426216167189" }, token: r.woo, quoteToken: r.wbnb }, { pid: 413, lpSymbol: "HTB-BNB LP", lpAddresses: { 97: "", 56: "0x2a995d355d5df641e878c0f366685741fd18d004" }, token: r.htb, quoteToken: r.wbnb }, { pid: 351, lpSymbol: "JGN-BNB LP", lpAddresses: { 97: "", 56: "0x7275278C94b5e20708380561C4Af98F38dDC6374" }, token: r.jgn, quoteToken: r.wbnb }, { pid: 337, lpSymbol: "DFT-BNB LP", lpAddresses: { 97: "", 56: "0x24d3B0eD4C444A4f6882d527cBF67aDc8c026582" }, token: r.dft, quoteToken: r.wbnb }, { pid: 412, lpSymbol: "HAI-BNB LP", lpAddresses: { 97: "", 56: "0x289841bFb694767bCb56fBc7B741aB4B4D97D490" }, token: r.hai, quoteToken: r.wbnb }, { pid: 411, lpSymbol: "O3-BUSD LP", lpAddresses: { 97: "", 56: "0x7759283571Da8c0928786A96AE601944E10461Ff" }, token: r.o3, quoteToken: r.busd }, { pid: 410, lpSymbol: "AMPL-BUSD LP", lpAddresses: { 97: "", 56: "0x6e98beb694ff1cdb1ee130edd2b21b0298683d58" }, token: r.ampl, quoteToken: r.busd }, { pid: 343, lpSymbol: "ODDZ-BNB LP", lpAddresses: { 97: "", 56: "0x3c2c77353E2F6AC1578807b6b2336Bf3a3CbB014" }, token: r.oddz, quoteToken: r.wbnb }, { pid: 409, lpSymbol: "ETH-USDC LP", lpAddresses: { 97: "", 56: "0xEa26B78255Df2bBC31C1eBf60010D78670185bD0" }, token: r.eth, quoteToken: r.usdc }, { pid: 408, lpSymbol: "BTCB-ETH LP", lpAddresses: { 97: "", 56: "0xD171B26E4484402de70e3Ea256bE5A2630d7e88D" }, token: r.btcb, quoteToken: r.eth }, { pid: 347, lpSymbol: "BONDLY-BNB LP", lpAddresses: { 97: "", 56: "0xb8b4383B49d451BBeA63BC4421466E1086da6f18" }, token: r.bondly, quoteToken: r.wbnb }, { pid: 407, lpSymbol: "MARSH-BNB LP", lpAddresses: { 97: "", 56: "0x222f93187f15f354d41ff6a7703ef7e18cdd5103" }, token: r.marsh, quoteToken: r.wbnb }, { pid: 406, lpSymbol: "BORING-BNB LP", lpAddresses: { 97: "", 56: "0xDfA808Da5CFB9ABA5Fb3748FF85888F79174F378" }, token: r.boring, quoteToken: r.wbnb }, { pid: 405, lpSymbol: "MBOX-BNB LP", lpAddresses: { 97: "", 56: "0x8FA59693458289914dB0097F5F366d771B7a7C3F" }, token: r.mbox, quoteToken: r.wbnb }, { pid: 404, lpSymbol: "ATA-BNB LP", lpAddresses: { 97: "", 56: "0xef7767677867552cfa699148b96a03358a9be779" }, token: r.ata, quoteToken: r.wbnb }, { pid: 403, lpSymbol: "MX-BUSD LP", lpAddresses: { 97: "", 56: "0x41f049d990d38305504631c9835f6f856bf1ba67" }, token: r.mx, quoteToken: r.busd }, { pid: 402, lpSymbol: "bCFX-BUSD LP", lpAddresses: { 97: "", 56: "0xA0387eBeA6be90849c2261b911fBBD52B4C9eAC4" }, token: r.bcfx, quoteToken: r.busd }, { pid: 401, lpSymbol: "QKC-BUSD LP", lpAddresses: { 97: "", 56: "0x8853e3309a31583ea438f7704681f46f0d4d909b" }, token: r.qkc, quoteToken: r.busd }, { pid: 400, lpSymbol: "KTN-BNB LP", lpAddresses: { 97: "", 56: "0x48028de4a9b0d3d91180333d796021ec7757ba1b" }, token: r.ktn, quoteToken: r.wbnb }, { pid: 399, lpSymbol: "MTRG-BUSD LP", lpAddresses: { 97: "", 56: "0x4dcA4D427511bC327639b222DA18FA5e334F686F" }, token: r.mtrg, quoteToken: r.busd }, { pid: 398, lpSymbol: "SWG-BNB LP", lpAddresses: { 97: "", 56: "0x226af4e918fcf3e62e5eeec867a3e78aaa7bb01d" }, token: r.swg, quoteToken: r.wbnb }, { pid: 396, lpSymbol: "VRT-BNB LP", lpAddresses: { 97: "", 56: "0xef5212ada83ec2cc105c409df10b8806d20e3b35" }, token: r.vrt, quoteToken: r.wbnb }, { pid: 395, lpSymbol: "EZ-BNB LP", lpAddresses: { 97: "", 56: "0x51bf99bbae59b67e5ce2fa9c17b683384773f8b3" }, token: r.ez, quoteToken: r.wbnb }, { pid: 394, lpSymbol: "KALM-BNB LP", lpAddresses: { 97: "", 56: "0xc74f7243766269dec5b85b0ef4af186e909c1b06" }, token: r.kalm, quoteToken: r.wbnb }, { pid: 393, lpSymbol: "pOPEN-BNB LP", lpAddresses: { 97: "", 56: "0x1090c996fd1490d15dd7906322ee676a5cc3cf82" }, token: r.popen, quoteToken: r.wbnb }, { pid: 335, lpSymbol: "LIEN-BNB LP", lpAddresses: { 97: "", 56: "0xa4963B38b271c0D714593063497Fc786Fa4029Ce" }, token: r.lien, quoteToken: r.wbnb }, { pid: 392, lpSymbol: "WELL-BUSD LP", lpAddresses: { 97: "", 56: "0x1d94cb25895abd6ccfef863c53372bb462aa6b86" }, token: r.well, quoteToken: r.busd }, { pid: 391, lpSymbol: "DERI-BUSD LP", lpAddresses: { 97: "", 56: "0xdc7188ac11e124b1fa650b73ba88bf615ef15256" }, token: r.deri, quoteToken: r.busd }, { pid: 390, lpSymbol: "CHR-BUSD LP", lpAddresses: { 97: "", 56: "0x6045931e511ef7e53a4a817f971e0ca28c758809" }, token: r.chr, quoteToken: r.busd }, { pid: 389, lpSymbol: "CAKE-BUSD LP", lpAddresses: { 97: "", 56: "0x804678fa97d91B974ec2af3c843270886528a9E6" }, token: r.cake, quoteToken: r.busd }, { pid: 388, lpSymbol: "CYC-BNB LP", lpAddresses: { 97: "", 56: "0xecf30fbecfa642012f54212a3be92eef1e48edac" }, token: r.cyc, quoteToken: r.wbnb }, { pid: 387, lpSymbol: "XEND-BNB LP", lpAddresses: { 97: "", 56: "0xcecfc2789af72ed151589a96a59f3a1abc65c3b5" }, token: r.xend, quoteToken: r.wbnb }, { pid: 296, lpSymbol: "HGET-BNB LP", lpAddresses: { 97: "", 56: "0xF74ee1e10e097dc326a2ad004F9Cc95CB71088d3" }, token: r.hget, quoteToken: r.wbnb }, { pid: 386, lpSymbol: "HOTCROSS-BNB LP", lpAddresses: { 97: "", 56: "0xf23bad605e94de0e3b60c9718a43a94a5af43915" }, token: r.hotcross, quoteToken: r.wbnb }, { pid: 385, lpSymbol: "RFOX-BNB LP", lpAddresses: { 97: "", 56: "0x8e04b3972b5c25766c681dfd30a8a1cbf6dcc8c1" }, token: r.rfox, quoteToken: r.wbnb }, { pid: 384, lpSymbol: "WMASS-BUSD LP", lpAddresses: { 97: "", 56: "0xec95ff6281c3ad8e27372fa6675eb337640b8e5e" }, token: r.wmass, quoteToken: r.busd }, { pid: 383, lpSymbol: "UBXT-BUSD LP", lpAddresses: { 97: "", 56: "0x8d3ff27d2ad6a9556b7c4f82f4d602d20114bc90" }, token: r.ubxt, quoteToken: r.busd }, { pid: 381, lpSymbol: "BTR-BUSD LP", lpAddresses: { 97: "", 56: "0xbc7ac609fa730239190a70952e64ee1dfc2530ac" }, token: r.btr, quoteToken: r.busd }, { pid: 380, lpSymbol: "\u03c4DOGE-BNB LP", lpAddresses: { 97: "", 56: "0x2030845Ce7d4224523fd2F03Ca20Afe4aAD1D890" }, token: r.\u03c4doge, quoteToken: r.wbnb }, { pid: 378, lpSymbol: "ONE-BUSD LP", lpAddresses: { 97: "", 56: "0x4d057f769d930eafd597b49d6fb2e1009a73a702" }, token: r.one, quoteToken: r.busd }, { pid: 377, lpSymbol: "FINE-BNB LP", lpAddresses: { 97: "", 56: "0xc309a6d2f1537922e06f15aa2eb21caa1b2eedb6" }, token: r.fine, quoteToken: r.wbnb }, { pid: 376, lpSymbol: "DOGE-BNB LP", lpAddresses: { 97: "", 56: "0xac109c8025f272414fd9e2faa805a583708a017f" }, token: r.doge, quoteToken: r.wbnb }, { pid: 310, lpSymbol: "bMXX-BNB LP", lpAddresses: { 97: "", 56: "0xc20A92a1424b29b78DFaF92FD35D4cf8A06419B4" }, token: r.bmxx, quoteToken: r.wbnb }, { pid: 375, lpSymbol: "OIN-BUSD LP", lpAddresses: { 97: "", 56: "0x6a00e41561ac36a78dba1d09091b0f00c4e53724" }, token: r.oin, quoteToken: r.busd }, { pid: 374, lpSymbol: "HYFI-BNB LP", lpAddresses: { 97: "", 56: "0x0716725d78081a9e0e1ff81516f5415b399e274d" }, token: r.hyfi, quoteToken: r.wbnb }, { pid: 373, lpSymbol: "KUN-BUSD LP", lpAddresses: { 97: "", 56: "0xea61020e5a128d2bec67d48f7cfbe3408db7e391" }, token: r.kun, quoteToken: r.busd }, { pid: 372, lpSymbol: "KUN-QSD LP", lpAddresses: { 97: "", 56: "0x4eafbf68a2d50291ffd163d4e00ad0f040aae707" }, token: r.kun, quoteToken: r.qsd }, { pid: 371, lpSymbol: "MATH-BUSD LP", lpAddresses: { 97: "", 56: "0xb7cada0f120ca46745a024e6b9fe907b2fe10cf3" }, token: r.math, quoteToken: r.busd }, { pid: 370, lpSymbol: "mCOIN-UST LP", lpAddresses: { 97: "", 56: "0xbcf01a42f6bc42f3cfe81b05519565044d65d22a" }, token: r.mcoin, quoteToken: r.ust }, { pid: 366, lpSymbol: "PNT-pBTC LP", lpAddresses: { 97: "", 56: "0xdaa89d335926628367b47852989bb22ee62ca5de" }, token: r.pnt, quoteToken: r.pbtc }, { pid: 311, lpSymbol: "xMARK-BUSD LP", lpAddresses: { 97: "", 56: "0xAa40f1AC20AAFcFEE8595Da606D78C503C7e70A3" }, token: r.xmark, quoteToken: r.busd }, { pid: 365, lpSymbol: "BTCB-BUSD LP", lpAddresses: { 97: "", 56: "0xf45cd219aef8618a92baa7ad848364a158a24f33" }, token: r.btcb, quoteToken: r.busd }, { pid: 364, lpSymbol: "LMT-BNB LP", lpAddresses: { 97: "", 56: "0x8271d7eafeeb8f24d7c9fe1acce2ae20611972e5" }, token: r.lmt, quoteToken: r.wbnb }, { pid: 363, lpSymbol: "DFD-BUSD LP", lpAddresses: { 97: "", 56: "0x029d66f9c0469450b7b4834b8ddc6a1118cec3e1" }, token: r.dfd, quoteToken: r.busd }, { pid: 362, lpSymbol: "ALPACA-BUSD LP", lpAddresses: { 97: "", 56: "0x7752e1fa9f3a2e860856458517008558deb989e3" }, token: r.alpaca, quoteToken: r.busd }, { pid: 361, lpSymbol: "\u03c4BTC-BTCB LP", lpAddresses: { 97: "", 56: "0x8046fa66753928F35f7Db23ae0188ee6743C2FBA" }, token: r.\u03c4btc, quoteToken: r.btcb }, { pid: 304, lpSymbol: "SWINGBY-BNB LP", lpAddresses: { 97: "", 56: "0x4Fd6D315bEf387fAD2322fbc64368fC443F0886D" }, token: r.swingby, quoteToken: r.wbnb }, { pid: 360, lpSymbol: "XED-BNB LP", lpAddresses: { 97: "", 56: "0xa7A0b605343dF36B748FF4B5f7578b3F2D0651CE" }, token: r.xed, quoteToken: r.wbnb }, { pid: 359, lpSymbol: "HAKKA-BUSD LP", lpAddresses: { 97: "", 56: "0x2C624C9Ecf16Cb81aB85cC2C0B0c5e12A09AFDa6" }, token: r.hakka, quoteToken: r.busd }, { pid: 358, lpSymbol: "CGG-BNB LP", lpAddresses: { 97: "", 56: "0x0604471c532F9fEBAD3E37190B667f44BD0894b3" }, token: r.cgg, quoteToken: r.wbnb }, { pid: 356, lpSymbol: "bROOBEE-BNB LP", lpAddresses: { 97: "", 56: "0x950FD020F8E4B8C57285EC7020b7a204348dadFa" }, token: r.broobee, quoteToken: r.wbnb }, { pid: 355, lpSymbol: "HZN-BNB LP", lpAddresses: { 97: "", 56: "0xDc9a574b9B341D4a98cE29005b614e1E27430E74" }, token: r.hzn, quoteToken: r.wbnb }, { pid: 354, lpSymbol: "ALPA-BNB LP", lpAddresses: { 97: "", 56: "0x4cC442220BE1cE560C1f2573f8CA8f460B3E4172" }, token: r.alpa, quoteToken: r.wbnb }, { pid: 353, lpSymbol: "PERL-BNB LP", lpAddresses: { 97: "", 56: "0x61010e6CbA3b56ba47E9dFd56Da682daCFe76131" }, token: r.perl, quoteToken: r.wbnb }, { pid: 352, lpSymbol: "TLM-BNB LP", lpAddresses: { 97: "", 56: "0xE6b421a4408c82381b226Ab5B6F8C4b639044359" }, token: r.tlm, quoteToken: r.wbnb }, { pid: 350, lpSymbol: "EPS-BNB LP", lpAddresses: { 97: "", 56: "0xddE420cbB3794ebD8FFC3Ac69F9c78e5d1411870" }, token: r.eps, quoteToken: r.wbnb }, { pid: 349, lpSymbol: "ARPA-BNB LP", lpAddresses: { 97: "", 56: "0x9730c791743300E9f984C9264395ce705A55Da7c" }, token: r.arpa, quoteToken: r.wbnb }, { pid: 348, lpSymbol: "ITAM-BNB LP", lpAddresses: { 97: "", 56: "0xd02DA76c813b9cd4516eD50442923E625f90228f" }, token: r.itam, quoteToken: r.wbnb }, { pid: 346, lpSymbol: "TKO-BNB LP", lpAddresses: { 97: "", 56: "0xFFd4B200d3C77A0B691B5562D804b3bd54294e6e" }, token: r.tko, quoteToken: r.wbnb }, { pid: 345, lpSymbol: "APYS-BNB LP", lpAddresses: { 97: "", 56: "0x510b29a93ebf098f3fC24A16541aAA0114D07056" }, token: r.apys, quoteToken: r.wbnb }, { pid: 344, lpSymbol: "HOO-BUSD LP", lpAddresses: { 97: "", 56: "0x3e42C1f7239231E3752B507764445dd8e6A570d5" }, token: r.hoo, quoteToken: r.busd }, { pid: 342, lpSymbol: "EASY-BNB LP", lpAddresses: { 97: "", 56: "0x20c6De8983Fb2D641c55004646aEF40b4EA66E18" }, token: r.easy, quoteToken: r.wbnb }, { pid: 341, lpSymbol: "NRV-BNB LP", lpAddresses: { 97: "", 56: "0xE482249Cd295C0d1e9D2baAEE71e66de21024C68" }, token: r.nrv, quoteToken: r.wbnb }, { pid: 340, lpSymbol: "DEGO-BNB LP", lpAddresses: { 97: "", 56: "0xF1Ec67fA1881796BFf63Db3E1A301cE9cb787Fad" }, token: r.dego, quoteToken: r.wbnb }, { pid: 338, lpSymbol: "pBTC-BNB LP", lpAddresses: { 97: "", 56: "0x0362ba706DFE8ED12Ec1470aB171d8Dcb1C72B8D" }, token: r.pbtc, quoteToken: r.wbnb }, { pid: 336, lpSymbol: "SWTH-BNB LP", lpAddresses: { 97: "", 56: "0x123D475E13aA54A43a7421d94CAa4459dA021c77" }, token: r.swth, quoteToken: r.wbnb }, { pid: 334, lpSymbol: "ZIL-BNB LP", lpAddresses: { 97: "", 56: "0x6A97867a4b7Eb7646ffB1F359ad582e9903aa1C2" }, token: r.zil, quoteToken: r.wbnb }, { pid: 333, lpSymbol: "pCWS-BNB LP", lpAddresses: { 97: "", 56: "0x6615CE60D71513aA4849269dD63821D324A23F8C" }, token: r.pcws, quoteToken: r.wbnb }, { pid: 332, lpSymbol: "bBADGER-BTCB LP", lpAddresses: { 97: "", 56: "0x5A58609dA96469E9dEf3fE344bC39B00d18eb9A5" }, token: r.bbadger, quoteToken: r.btcb }, { pid: 331, lpSymbol: "bDIGG-BTCB LP", lpAddresses: { 97: "", 56: "0x81d776C90c89B8d51E9497D58338933127e2fA80" }, token: r.bdigg, quoteToken: r.btcb }, { pid: 330, lpSymbol: "LTO-BNB LP", lpAddresses: { 97: "", 56: "0xa5Bb44c6F5fD9B836E5a654c8AbbCCc96A15deE5" }, token: r.lto, quoteToken: r.wbnb }, { pid: 329, lpSymbol: "MIR-UST LP", lpAddresses: { 97: "", 56: "0x89666d026696660e93Bf6edf57B71A68615768B7" }, token: r.mir, quoteToken: r.ust }, { pid: 328, lpSymbol: "TRADE-BNB LP", lpAddresses: { 97: "", 56: "0x8F6baf368E7A4f6e2C9c995f22702d5e654A0237" }, token: r.trade, quoteToken: r.wbnb }, { pid: 327, lpSymbol: "DUSK-BNB LP", lpAddresses: { 97: "", 56: "0x678EDb8B268e73dB57b7694c163e1dc296b6e219" }, token: r.dusk, quoteToken: r.wbnb }, { pid: 326, lpSymbol: "BIFI-BNB LP", lpAddresses: { 97: "", 56: "0x3f1A9f3D9aaD8bD339eD4853F345d2eF89fbfE0c" }, token: r.bifi, quoteToken: r.wbnb }, { pid: 325, lpSymbol: "TXL-BUSD LP", lpAddresses: { 97: "", 56: "0x1434BB50196A0C7eA825940b1DFd8aAd25d79817" }, token: r.txl, quoteToken: r.busd }, { pid: 324, lpSymbol: "COS-BNB LP", lpAddresses: { 97: "", 56: "0xe98585bBb2dc81854fF100A3d9D7B0F53E0dafEd" }, token: r.cos, quoteToken: r.wbnb }, { pid: 323, lpSymbol: "BUNNY-BNB LP", lpAddresses: { 97: "", 56: "0x5aFEf8567414F29f0f927A0F2787b188624c10E2" }, token: r.bunny, quoteToken: r.wbnb }, { pid: 322, lpSymbol: "ALICE-BNB LP", lpAddresses: { 97: "", 56: "0xcAD7019D6d84a3294b0494aEF02e73BD0f2572Eb" }, token: r.alice, quoteToken: r.wbnb }, { pid: 321, lpSymbol: "FOR-BUSD LP", lpAddresses: { 97: "", 56: "0xE60B4e87645093A42fa9dcC5d0C8Df6E67f1f9d2" }, token: r.for, quoteToken: r.busd }, { pid: 320, lpSymbol: "BUX-BNB LP", lpAddresses: { 97: "", 56: "0x222C3CbB89647bF77822435Bd4c234A04272A77A" }, token: r.bux, quoteToken: r.wbnb }, { pid: 319, lpSymbol: "NULS-BUSD LP", lpAddresses: { 97: "", 56: "0x853784B7BDe87d858555715c0123374242db7943" }, token: r.nuls, quoteToken: r.busd }, { pid: 318, lpSymbol: "BELT-BNB LP", lpAddresses: { 97: "", 56: "0xF3Bc6FC080ffCC30d93dF48BFA2aA14b869554bb" }, token: r.belt, quoteToken: r.wbnb }, { pid: 316, lpSymbol: "BFI-BNB LP", lpAddresses: { 97: "", 56: "0x153Ad7d25B0b810497483d0cEE8AF42Fc533FeC8" }, token: r.bfi, quoteToken: r.wbnb }, { pid: 315, lpSymbol: "DEXE-BUSD LP", lpAddresses: { 97: "", 56: "0x3578B1f9BCE98D2F4D293b422d8850fdf48B1f21" }, token: r.dexe, quoteToken: r.busd }, { pid: 313, lpSymbol: "TPT-BUSD LP", lpAddresses: { 97: "", 56: "0x6D0c831254221ba121fB53fb44Df289A6558867d" }, token: r.tpt, quoteToken: r.busd }, { pid: 312, lpSymbol: "WATCH-BNB LP", lpAddresses: { 97: "", 56: "0x13321AcfF4A27f3d2bcA64b8bEaC6e5FdAAAf12C" }, token: r.watch, quoteToken: r.wbnb }, { pid: 309, lpSymbol: "IOTX-BUSD LP", lpAddresses: { 97: "", 56: "0xc13aA76AAc067c86aE38028019F414D731b3D86A" }, token: r.iotx, quoteToken: r.busd }, { pid: 308, lpSymbol: "BOR-BNB LP", lpAddresses: { 97: "", 56: "0xe094c686aD6cDda57b9564457F541FBF099B948A" }, token: r.bor, quoteToken: r.wbnb }, { pid: 307, lpSymbol: "bOPEN-BNB LP", lpAddresses: { 97: "", 56: "0xc7A9c2af263ebB86139Cca9349e49b17129Ba033" }, token: r.bopen, quoteToken: r.wbnb }, { pid: 306, lpSymbol: "SUSHI-ETH LP", lpAddresses: { 97: "", 56: "0x16aFc4F2Ad82986bbE2a4525601F8199AB9c832D" }, token: r.sushi, quoteToken: r.eth }, { pid: 305, lpSymbol: "DODO-BNB LP", lpAddresses: { 97: "", 56: "0xA9986Fcbdb23c2E8B11AB40102990a08f8E58f06" }, token: r.dodo, quoteToken: r.wbnb }, { pid: 303, lpSymbol: "BRY-BNB LP", lpAddresses: { 97: "", 56: "0x21dD71aB78EDE3033c976948f769D506E4F489eE" }, token: r.bry, quoteToken: r.wbnb }, { pid: 302, lpSymbol: "ZEE-BNB LP", lpAddresses: { 97: "", 56: "0x8e799cB0737525CeB8A6C6Ad07f748535fF6377B" }, token: r.zee, quoteToken: r.wbnb }, { pid: 301, lpSymbol: "SWGb-BNB LP", lpAddresses: { 97: "", 56: "0x856f9AD94cA8680B899214Bb1EB3d235a3C33Afe" }, token: r.swgb, quoteToken: r.wbnb }, { pid: 300, lpSymbol: "COMP-ETH LP", lpAddresses: { 97: "", 56: "0x37908620dEf1491Dd591b5a2d16022A33cDDA415" }, token: r.comp, quoteToken: r.eth }, { pid: 299, lpSymbol: "SFP-BNB LP", lpAddresses: { 97: "", 56: "0x942b294e59a8c47a0F7F20DF105B082710F7C305" }, token: r.sfp, quoteToken: r.wbnb }, { pid: 298, lpSymbol: "LINA-BUSD LP", lpAddresses: { 97: "", 56: "0xC5768c5371568Cf1114cddD52CAeD163A42626Ed" }, token: r.lina, quoteToken: r.busd }, { pid: 297, lpSymbol: "LIT-BNB LP", lpAddresses: { 97: "", 56: "0x1F37d4226d23d09044B8005c127C0517BD7e94fD" }, token: r.lit, quoteToken: r.wbnb }, { pid: 295, lpSymbol: "BDO-BNB LP", lpAddresses: { 97: "", 56: "0x4288706624e3dD839b069216eB03B8B9819C10d2" }, token: r.bdo, quoteToken: r.wbnb }, { pid: 294, lpSymbol: "EGLD-BNB LP", lpAddresses: { 97: "", 56: "0xcD68856b6E72E99b5eEaAE7d41Bb4A3b484c700D" }, token: r.egld, quoteToken: r.wbnb }, { pid: 293, lpSymbol: "UST-BUSD LP", lpAddresses: { 97: "", 56: "0x05faf555522Fa3F93959F86B41A3808666093210" }, token: r.ust, quoteToken: r.busd }, { pid: 292, lpSymbol: "mAMZN-UST LP", lpAddresses: { 97: "", 56: "0xC05654C66756eBB82c518598c5f1ea1a0199a563" }, token: r.mamzn, quoteToken: r.ust }, { pid: 291, lpSymbol: "mGOOGL-UST LP", lpAddresses: { 97: "", 56: "0xA3BfBbAd526C6B856B1Fdf73F99BCD894761fbf3" }, token: r.mgoogl, quoteToken: r.ust }, { pid: 290, lpSymbol: "mNFLX-UST LP", lpAddresses: { 97: "", 56: "0x91417426C3FEaA3Ca795921eB9FdD9715ad92537" }, token: r.mnflx, quoteToken: r.ust }, { pid: 289, lpSymbol: "mTSLA-UST LP", lpAddresses: { 97: "", 56: "0xEc6b56a736859AE8ea4bEdA16279Ecd8c60dA7EA" }, token: r.mtsla, quoteToken: r.ust }, { pid: 288, lpSymbol: "wSOTE-BNB LP", lpAddresses: { 97: "", 56: "0x7653D2c31440f04d2c6520D482dC5DbD7650f70a" }, token: r.wsote, quoteToken: r.wbnb }, { pid: 287, lpSymbol: "FRONT-BNB LP", lpAddresses: { 97: "", 56: "0xC6b668548aA4A56792e8002A920d3159728121D5" }, token: r.front, quoteToken: r.wbnb }, { pid: 286, lpSymbol: "Helmet-BNB LP", lpAddresses: { 97: "", 56: "0xC869A9943b702B03770B6A92d2b2d25cf3a3f571" }, token: r.helmet, quoteToken: r.wbnb }, { pid: 285, lpSymbol: "BTCST-BNB LP", lpAddresses: { 97: "", 56: "0xB2678C414ebC63c9CC6d1a0fC45f43E249B50fdE" }, token: r.btcst, quoteToken: r.wbnb }, { pid: 284, lpSymbol: "LTC-BNB LP", lpAddresses: { 97: "", 56: "0x71b01eBdDD797c8E9E0b003ea2f4FD207fBF46cC" }, token: r.ltc, quoteToken: r.wbnb }, { pid: 283, lpSymbol: "USDC-BUSD LP", lpAddresses: { 97: "", 56: "0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1" }, token: r.usdc, quoteToken: r.busd }, { pid: 282, lpSymbol: "DAI-BUSD LP", lpAddresses: { 97: "", 56: "0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489" }, token: r.dai, quoteToken: r.busd }, { pid: 281, lpSymbol: "BSCX-BNB LP", lpAddresses: { 97: "", 56: "0x47C42b0A056A9C6e9C65b9Ef79020Af518e767A5" }, token: r.bscx, quoteToken: r.wbnb }, { pid: 280, lpSymbol: "TEN-BNB LP", lpAddresses: { 97: "", 56: "0x1B415C3ec8095AfBF9d78882b3a6263c4ad141B5" }, token: r.ten, quoteToken: r.wbnb }, { pid: 279, lpSymbol: "bALBT-BNB LP", lpAddresses: { 97: "", 56: "0x24EB18bA412701f278B172ef96697c4622b19da6" }, token: r.balbt, quoteToken: r.wbnb }, { pid: 278, lpSymbol: "REEF-BNB LP", lpAddresses: { 97: "", 56: "0xd63b5CecB1f40d626307B92706Df357709D05827" }, token: r.reef, quoteToken: r.wbnb }, { pid: 277, lpSymbol: "Ditto-BNB LP", lpAddresses: { 97: "", 56: "0x8645148dE4E339964bA480AE3478653b5bc6E211" }, token: r.ditto, quoteToken: r.wbnb }, { pid: 276, lpSymbol: "VAI-BUSD LP", lpAddresses: { 97: "", 56: "0x133ee93FE93320e1182923E1a640912eDE17C90C" }, token: r.vai, quoteToken: r.busd }, { pid: 275, lpSymbol: "BLK-BNB LP", lpAddresses: { 97: "", 56: "0x356Dd24BfF8e23BdE0430f00ad0C290E33438bD7" }, token: r.blink, quoteToken: r.wbnb }, { pid: 274, lpSymbol: "UNFI-BNB LP", lpAddresses: { 97: "", 56: "0x44EA47F2765fd5D26b7eF0222736AD6FD6f61950" }, token: r.unfi, quoteToken: r.wbnb }, { pid: 273, lpSymbol: "HARD-BNB LP", lpAddresses: { 97: "", 56: "0x73566ca86248bD12F0979793e4671e99a40299A7" }, token: r.hard, quoteToken: r.wbnb }, { pid: 272, lpSymbol: "CTK-BNB LP", lpAddresses: { 97: "", 56: "0x460b4193Ec4C1a17372Aa5FDcd44c520ba658646" }, token: r.ctk, quoteToken: r.wbnb }, { pid: 271, lpSymbol: "SXP-BNB LP", lpAddresses: { 97: "", 56: "0xD8E2F8b6Db204c405543953Ef6359912FE3A88d6" }, token: r.sxp, quoteToken: r.wbnb }, { pid: 270, lpSymbol: "INJ-BNB LP", lpAddresses: { 97: "", 56: "0x1BdCebcA3b93af70b58C41272AEa2231754B23ca" }, token: r.inj, quoteToken: r.wbnb }, { pid: 269, lpSymbol: "FIL-BNB LP", lpAddresses: { 97: "", 56: "0xD9bCcbbbDFd9d67BEb5d2273102CE0762421D1e3" }, token: r.fil, quoteToken: r.wbnb }, { pid: 268, lpSymbol: "UNI-BNB LP", lpAddresses: { 97: "", 56: "0x014608E87AF97a054C9a49f81E1473076D51d9a3" }, token: r.uni, quoteToken: r.wbnb }, { pid: 267, lpSymbol: "YFI-BNB LP", lpAddresses: { 97: "", 56: "0xCE383277847f8217392eeA98C5a8B4a7D27811b0" }, token: r.yfi, quoteToken: r.wbnb }, { pid: 266, lpSymbol: "ATOM-BNB LP", lpAddresses: { 97: "", 56: "0x468b2DC8DC75990eE3E9dc0648965Ad6294E7914" }, token: r.atom, quoteToken: r.wbnb }, { pid: 265, lpSymbol: "XRP-BNB LP", lpAddresses: { 97: "", 56: "0x03F18135c44C64ebFdCBad8297fe5bDafdBbdd86" }, token: r.xrp, quoteToken: r.wbnb }, { pid: 264, lpSymbol: "USDT-BNB LP", lpAddresses: { 97: "", 56: "0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE" }, token: r.usdt, quoteToken: r.wbnb }, { pid: 263, lpSymbol: "ALPHA-BNB LP", lpAddresses: { 97: "", 56: "0xACF47CBEaab5c8A6Ee99263cfE43995f89fB3206" }, token: r.alpha, quoteToken: r.wbnb }, { pid: 262, lpSymbol: "BTCB-BNB LP", lpAddresses: { 97: "", 56: "0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082" }, token: r.btcb, quoteToken: r.wbnb }, { pid: 261, lpSymbol: "ETH-BNB LP", lpAddresses: { 97: "", 56: "0x74E4716E431f45807DCF19f284c7aA99F18a4fbc" }, token: r.eth, quoteToken: r.wbnb }, { pid: 260, lpSymbol: "XVS-BNB LP", lpAddresses: { 97: "", 56: "0x7EB5D86FD78f3852a3e0e064f2842d45a3dB6EA2" }, token: r.xvs, quoteToken: r.wbnb }, { pid: 259, lpSymbol: "TWT-BNB LP", lpAddresses: { 97: "", 56: "0x3DcB1787a95D2ea0Eb7d00887704EeBF0D79bb13" }, token: r.twt, quoteToken: r.wbnb }, { pid: 258, lpSymbol: "USDT-BUSD LP", lpAddresses: { 97: "", 56: "0x7EFaEf62fDdCCa950418312c6C91Aef321375A00" }, token: r.usdt, quoteToken: r.busd }, { pid: 257, lpSymbol: "LINK-BNB LP", lpAddresses: { 97: "", 56: "0x824eb9faDFb377394430d2744fa7C42916DE3eCe" }, token: r.link, quoteToken: r.wbnb }, { pid: 256, lpSymbol: "EOS-BNB LP", lpAddresses: { 97: "", 56: "0xB6e34b5C65Eda51bb1BD4ea5F79d385Fb94b9504" }, token: r.eos, quoteToken: r.wbnb }, { pid: 255, lpSymbol: "DOT-BNB LP", lpAddresses: { 97: "", 56: "0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF" }, token: r.dot, quoteToken: r.wbnb }, { pid: 254, lpSymbol: "BAND-BNB LP", lpAddresses: { 97: "", 56: "0x168B273278F3A8d302De5E879aA30690B7E6c28f" }, token: r.band, quoteToken: r.wbnb }, { pid: 253, lpSymbol: "ADA-BNB LP", lpAddresses: { 97: "", 56: "0x28415ff2C35b65B9E5c7de82126b4015ab9d031F" }, token: r.ada, quoteToken: r.wbnb }, { pid: 139, lpSymbol: "CAKE-BNB LP", lpAddresses: { 97: "", 56: "0xFB7E9FE9D13561AdA7131Fa746942a14F7dd4Cf6" }, token: r.cake, quoteToken: r.wbnb }, { pid: 250, lpSymbol: "\u03c4BTC-BTCB LP", lpAddresses: { 97: "", 56: "0xFD09CDbd6A7dCAd8AC47df4F139443a729264763" }, token: r.\u03c4btc, quoteToken: r.btcb }, { pid: 193, lpSymbol: "SWINGBY-BNB LP", lpAddresses: { 97: "", 56: "0xA0e3F72BAFcc5d52F0052a39165FD40D3d4d34Fc" }, token: r.swingby, quoteToken: r.wbnb }, { pid: 249, lpSymbol: "XED-BNB LP", lpAddresses: { 97: "", 56: "0xBbE20dA99db94Fa1077F1C9A5d256761dAf89C60" }, token: r.xed, quoteToken: r.wbnb }, { pid: 248, lpSymbol: "HAKKA-BUSD LP", lpAddresses: { 97: "", 56: "0x9ed1ca73AA8F1ccdc3c3a174E77014f8900411CE" }, token: r.hakka, quoteToken: r.busd }, { pid: 247, lpSymbol: "CGG-BNB LP", lpAddresses: { 97: "", 56: "0xB9aA8B0d67DE546aaa82091065a64B7F1C4B1a1F" }, token: r.cgg, quoteToken: r.wbnb }, { pid: 246, lpSymbol: "SUTER-BNB LP", lpAddresses: { 97: "", 56: "0x6f41c9226fa89a552009c3AC087BA74b83772C52" }, token: r.suter, quoteToken: r.wbnb }, { pid: 245, lpSymbol: "bROOBEE-BNB LP", lpAddresses: { 97: "", 56: "0x5Ac5184eA06dE24ce8ED2133f58b4Aa2CEd2dC3b" }, token: r.broobee, quoteToken: r.wbnb }, { pid: 244, lpSymbol: "HZN-BNB LP", lpAddresses: { 97: "", 56: "0xF7fcD7e7B3853bf59bCA9183476F218ED07eD3B0" }, token: r.hzn, quoteToken: r.wbnb }, { pid: 243, lpSymbol: "ALPA-BNB LP", lpAddresses: { 97: "", 56: "0xBB41898A3051A6b6D4A36a1c43e906b05799B744" }, token: r.alpa, quoteToken: r.wbnb }, { pid: 242, lpSymbol: "PERL-BNB LP", lpAddresses: { 97: "", 56: "0xB1C2e08A992a619DA570425E78828A8508654f4F" }, token: r.perl, quoteToken: r.wbnb }, { pid: 241, lpSymbol: "TLM-BNB LP", lpAddresses: { 97: "", 56: "0x25f15Cb3D3B3753702E1d5c4E5f6F0720b197843" }, token: r.tlm, quoteToken: r.wbnb }, { pid: 240, lpSymbol: "JGN-BNB LP", lpAddresses: { 97: "", 56: "0x8fD5ca41B2B44e4713590584f97c85f9FF59F00D" }, token: r.jgn, quoteToken: r.wbnb }, { pid: 239, lpSymbol: "EPS-BNB LP", lpAddresses: { 97: "", 56: "0x43bc6C256240e657Ad84aFb86825E21B48FEDe78" }, token: r.eps, quoteToken: r.wbnb }, { pid: 238, lpSymbol: "ARPA-BNB LP", lpAddresses: { 97: "", 56: "0xD55e5A7b886aE9657b95641c6A7dc5A662EcAbF3" }, token: r.arpa, quoteToken: r.wbnb }, { pid: 237, lpSymbol: "ITAM-BNB LP", lpAddresses: { 97: "", 56: "0x3e78b0eD211a49e263fF9b3F0B410932a021E368" }, token: r.itam, quoteToken: r.wbnb }, { pid: 236, lpSymbol: "BONDLY-BNB LP", lpAddresses: { 97: "", 56: "0x2205a6424ec4D74a7588450fB71ffd0C4A3Ead65" }, token: r.bondly, quoteToken: r.wbnb }, { pid: 235, lpSymbol: "TKO-BNB LP", lpAddresses: { 97: "", 56: "0xc43EdF4a7e89160135C2553E9868446fef9C18DD" }, token: r.tko, quoteToken: r.wbnb }, { pid: 234, lpSymbol: "APYS-BNB LP", lpAddresses: { 97: "", 56: "0x7A5523f50a80790cAD011167E20bD21056A2f04A" }, token: r.apys, quoteToken: r.wbnb }, { pid: 233, lpSymbol: "HOO-BUSD LP", lpAddresses: { 97: "", 56: "0xc12dAD966505443b5aad7b0C55716c13d285B520" }, token: r.hoo, quoteToken: r.busd }, { pid: 232, lpSymbol: "ODDZ-BNB LP", lpAddresses: { 97: "", 56: "0x3B0a7d1030bcDFf45ABB7B03C04110FcCc8095BC" }, token: r.oddz, quoteToken: r.wbnb }, { pid: 231, lpSymbol: "EASY-BNB LP", lpAddresses: { 97: "", 56: "0x4b0ec41404a7FF59BaE33C8Dc420804c58B7bF24" }, token: r.easy, quoteToken: r.wbnb }, { pid: 230, lpSymbol: "NRV-BNB LP", lpAddresses: { 97: "", 56: "0x25dea33a42c7775F6945fae22A8fFBfAC9fB22CD" }, token: r.nrv, quoteToken: r.wbnb }, { pid: 229, lpSymbol: "DEGO-BNB LP", lpAddresses: { 97: "", 56: "0x6108aBd546AF17D8f7aFAe59EBfb4A01132A11Bb" }, token: r.dego, quoteToken: r.wbnb }, { pid: 228, lpSymbol: "GUM-BNB LP", lpAddresses: { 97: "", 56: "0xA99d1926a3c15DC4Fb83aB3Fafd63B6C3E87CF22" }, token: r.gum, quoteToken: r.wbnb }, { pid: 227, lpSymbol: "pBTC-BNB LP", lpAddresses: { 97: "", 56: "0xaccd6673FFc24cD56B080D71384327f78fD92496" }, token: r.pbtc, quoteToken: r.wbnb }, { pid: 226, lpSymbol: "DFT-BNB LP", lpAddresses: { 97: "", 56: "0xe86d075051f20eb8c741007Cb8e262f4519944ee" }, token: r.dft, quoteToken: r.wbnb }, { pid: 225, lpSymbol: "SWTH-BNB LP", lpAddresses: { 97: "", 56: "0x4f6dfFc9795d35dc1D92c2a7B23Cb7d6EF190B33" }, token: r.swth, quoteToken: r.wbnb }, { pid: 224, lpSymbol: "LIEN-BNB LP", lpAddresses: { 97: "", 56: "0xbe7BDE4aD1c136038Dc9f57ef94d1d16e6F9CbF7" }, token: r.lien, quoteToken: r.wbnb }, { pid: 223, lpSymbol: "ZIL-BNB LP", lpAddresses: { 97: "", 56: "0xcBDf499db66Df19A66aB48F16C790FF9eE872add" }, token: r.zil, quoteToken: r.wbnb }, { pid: 222, lpSymbol: "pCWS-BNB LP", lpAddresses: { 97: "", 56: "0xe3D941e74141311436F82523817EBaa26462967d" }, token: r.pcws, quoteToken: r.wbnb }, { pid: 221, lpSymbol: "bBADGER-BTCB LP", lpAddresses: { 97: "", 56: "0x87Ae7b5c43D4e160cDB9427a78BA87B9503ee37b" }, token: r.bbadger, quoteToken: r.btcb }, { pid: 220, lpSymbol: "bDIGG-BTCB LP", lpAddresses: { 97: "", 56: "0xfbfa92e037e37F946c0105902640914E3aCe6752" }, token: r.bdigg, quoteToken: r.btcb }, { pid: 219, lpSymbol: "LTO-BNB LP", lpAddresses: { 97: "", 56: "0xF62e92292772F24EAa6B6B8a105c9FC7B8F31EC5" }, token: r.lto, quoteToken: r.wbnb }, { pid: 218, lpSymbol: "MIR-UST LP", lpAddresses: { 97: "", 56: "0x905186a70ba3Eb50090d1d0f6914F5460B4DdB40" }, token: r.mir, quoteToken: r.ust }, { pid: 217, lpSymbol: "TRADE-BNB LP", lpAddresses: { 97: "", 56: "0x52fCfB6d91Bcf1F1f6d375D0f6c303688b0E8550" }, token: r.trade, quoteToken: r.wbnb }, { pid: 216, lpSymbol: "DUSK-BNB LP", lpAddresses: { 97: "", 56: "0x69773f622cE228Ca7dEd42D8C34Eba8582e85dcA" }, token: r.dusk, quoteToken: r.wbnb }, { pid: 215, lpSymbol: "BIFI-BNB LP", lpAddresses: { 97: "", 56: "0x01956F08A55e4FF9775bc01aF6ACb09144564837" }, token: r.bifi, quoteToken: r.wbnb }, { pid: 214, lpSymbol: "TXL-BUSD LP", lpAddresses: { 97: "", 56: "0x8Ba7eB4056338fd7271E1b7431C8ca3827eF907c" }, token: r.txl, quoteToken: r.busd }, { pid: 213, lpSymbol: "COS-BNB LP", lpAddresses: { 97: "", 56: "0xAfB2e729A24629aBdE8E55CEB0e1f899bEe0f70f" }, token: r.cos, quoteToken: r.wbnb }, { pid: 212, lpSymbol: "BUNNY-BNB LP", lpAddresses: { 97: "", 56: "0x283FA8d459Da6e3165B2faF7FA0DD0137503DECf" }, token: r.bunny, quoteToken: r.wbnb }, { pid: 211, lpSymbol: "ALICE-BNB LP", lpAddresses: { 97: "", 56: "0x9e1BB5033d47BF8F16FC017CEC0959De7FF00833" }, token: r.alice, quoteToken: r.wbnb }, { pid: 210, lpSymbol: "FOR-BUSD LP", lpAddresses: { 97: "", 56: "0xaBB817B07663521Cf64B006EC9D0FF185b65cfE5" }, token: r.for, quoteToken: r.busd }, { pid: 209, lpSymbol: "BUX-BNB LP", lpAddresses: { 97: "", 56: "0x7aA4eb5c3bF33e3AD41A47e26b3Bd9b902984610" }, token: r.bux, quoteToken: r.wbnb }, { pid: 208, lpSymbol: "NULS-BUSD LP", lpAddresses: { 97: "", 56: "0xaB46737CAAFbB99999f8b91E4D3C6D4D28E10e05" }, token: r.nuls, quoteToken: r.busd }, { pid: 207, lpSymbol: "BELT-BNB LP", lpAddresses: { 97: "", 56: "0x446ff2C0F5350bF2dadD0e0F1AaAA573b362CA6B" }, token: r.belt, quoteToken: r.wbnb }, { pid: 206, lpSymbol: "RAMP-BUSD LP", lpAddresses: { 97: "", 56: "0x6ED589e69D1927AC45054cBb6E57877879384d6F" }, token: r.ramp, quoteToken: r.busd }, { pid: 205, lpSymbol: "BFI-BNB LP", lpAddresses: { 97: "", 56: "0xFFA2357f1E6f48d74b1c18c363c3Fe58A032405a" }, token: r.bfi, quoteToken: r.wbnb }, { pid: 204, lpSymbol: "DEXE-BUSD LP", lpAddresses: { 97: "", 56: "0x534b0b0700c0cfF9785852707f07f60E7C0bc07E" }, token: r.dexe, quoteToken: r.busd }, { pid: 203, lpSymbol: "BEL-BNB LP", lpAddresses: { 97: "", 56: "0x2013265224E3cB6A53C67130F9Fe53Ae36CFcfdd" }, token: r.bel, quoteToken: r.wbnb }, { pid: 202, lpSymbol: "TPT-BUSD LP", lpAddresses: { 97: "", 56: "0xC14c2dd21d6aEA3C2068A1F8e58d41D3c28F9288" }, token: r.tpt, quoteToken: r.busd }, { pid: 201, lpSymbol: "WATCH-BNB LP", lpAddresses: { 97: "", 56: "0xD5fBfFf5faB9d29f614d9bd50AF9b1356C53049C" }, token: r.watch, quoteToken: r.wbnb }, { pid: 200, lpSymbol: "xMARK-BUSD LP", lpAddresses: { 97: "", 56: "0x601aE41C5a65b2089a6af2CcfaF984896a1f52AD" }, token: r.xmark, quoteToken: r.busd }, { pid: 199, lpSymbol: "bMXX-BNB LP", lpAddresses: { 97: "", 56: "0x037d38c7DfF5732DAA5f8C05478Eb75cdf24f42B" }, token: r.bmxx, quoteToken: r.wbnb }, { pid: 198, lpSymbol: "IOTX-BUSD LP", lpAddresses: { 97: "", 56: "0x8503462D0d4D3ce73e857bCC7D0Ef1125B0d66fF" }, token: r.iotx, quoteToken: r.busd }, { pid: 197, lpSymbol: "BOR-BNB LP", lpAddresses: { 97: "", 56: "0xE0243Ce3b50bd551168cE6964F178507d0a1acD5" }, token: r.bor, quoteToken: r.wbnb }, { pid: 196, lpSymbol: "bOPEN-BNB LP", lpAddresses: { 97: "", 56: "0xD2FcF98EaeD2c08e9BcA854802C07b93D27913aC" }, token: r.bopen, quoteToken: r.wbnb }, { pid: 195, lpSymbol: "SUSHI-ETH LP", lpAddresses: { 97: "", 56: "0x3BECbb09F622187B544C0892EeDeB58C004117e1" }, token: r.sushi, quoteToken: r.eth }, { pid: 194, lpSymbol: "DODO-BNB LP", lpAddresses: { 97: "", 56: "0x220e34306a93002fB7947C9Fc633d6f538bd5032" }, token: r.dodo, quoteToken: r.wbnb }, { pid: 192, lpSymbol: "BRY-BNB LP", lpAddresses: { 97: "", 56: "0xC3E303647cbD43EC22989275e7ecFA8952A6BA02" }, token: r.bry, quoteToken: r.wbnb }, { pid: 191, lpSymbol: "ZEE-BNB LP", lpAddresses: { 97: "", 56: "0x6d1299B158bd13F4B50e951aaBf2Aa501FD87E52" }, token: r.zee, quoteToken: r.wbnb }, { pid: 190, lpSymbol: "SWGb-BNB LP", lpAddresses: { 97: "", 56: "0xd2A5008d555371e97F30B6dD71597b4F1eDB0f20" }, token: r.swgb, quoteToken: r.wbnb }, { pid: 189, lpSymbol: "COMP-ETH LP", lpAddresses: { 97: "", 56: "0x6A55a9176f11c1118f01CBaf6c4033a5c1B22a81" }, token: r.comp, quoteToken: r.eth }, { pid: 188, lpSymbol: "SFP-BNB LP", lpAddresses: { 97: "", 56: "0x01744B868fe98dB669EBf4e9CA557462BAA6097c" }, token: r.sfp, quoteToken: r.wbnb }, { pid: 187, lpSymbol: "LINA-BUSD LP", lpAddresses: { 97: "", 56: "0xb923A2Beeb0834528D20b8973A2c69088571aA9E" }, token: r.lina, quoteToken: r.busd }, { pid: 186, lpSymbol: "LIT-BNB LP", lpAddresses: { 97: "", 56: "0x41D69Beda3AFF2FFE48E715e2f4248Cb272cFf30" }, token: r.lit, quoteToken: r.wbnb }, { pid: 185, lpSymbol: "HGET-BNB LP", lpAddresses: { 97: "", 56: "0x239aD1874114B2235485e34b14c48dB73CCA3ffb" }, token: r.hget, quoteToken: r.wbnb }, { pid: 184, lpSymbol: "BDO-BNB LP", lpAddresses: { 97: "", 56: "0xF7045D7dE334a3F6c1254f98167b2af130eEA8E6" }, token: r.bdo, quoteToken: r.wbnb }, { pid: 183, lpSymbol: "EGLD-BNB LP", lpAddresses: { 97: "", 56: "0xB4670bBEce2D02c4D30786D173985A984686042C" }, token: r.egld, quoteToken: r.wbnb }, { pid: 182, lpSymbol: "UST-BUSD LP", lpAddresses: { 97: "", 56: "0x1719606031F1E0B3CCaCa11A2CF550Ef8feBEB0F" }, token: r.ust, quoteToken: r.busd }, { pid: 181, lpSymbol: "mAMZN-UST LP", lpAddresses: { 97: "", 56: "0x2c065E42B464ef38480778B0624A207A09042481" }, token: r.mamzn, quoteToken: r.ust }, { pid: 180, lpSymbol: "mGOOGL-UST LP", lpAddresses: { 97: "", 56: "0x74d8Dbac5053d31E904a821A3B4C411Bd4dd2307" }, token: r.mgoogl, quoteToken: r.ust }, { pid: 179, lpSymbol: "mNFLX-UST LP", lpAddresses: { 97: "", 56: "0xe1d76359FE4Eb7f0dAd1D719256c22890864718E" }, token: r.mnflx, quoteToken: r.ust }, { pid: 178, lpSymbol: "mTSLA-UST LP", lpAddresses: { 97: "", 56: "0x36285DDD149949f366b5aFb3f41Cea71d35B8c9e" }, token: r.mtsla, quoteToken: r.ust }, { pid: 177, lpSymbol: "wSOTE-BNB LP", lpAddresses: { 97: "", 56: "0xe5909de3822d589c220Fb4FA1660A0Fd251Fa87d" }, token: r.wsote, quoteToken: r.wbnb }, { pid: 176, lpSymbol: "FRONT-BNB LP", lpAddresses: { 97: "", 56: "0x84Df48B3e900C79539F6c523D6F528802BeAa713" }, token: r.front, quoteToken: r.wbnb }, { pid: 175, lpSymbol: "Helmet-BNB LP", lpAddresses: { 97: "", 56: "0xD09648792d7e77523ae311Fa5A8F38E4684A5f15" }, token: r.helmet, quoteToken: r.wbnb }, { pid: 174, lpSymbol: "BTCST-BNB LP", lpAddresses: { 97: "", 56: "0xf967845A6D30C44b555C49C50530076dF5D7fd75" }, token: r.btcst, quoteToken: r.wbnb }, { pid: 173, lpSymbol: "LTC-BNB LP", lpAddresses: { 97: "", 56: "0x286E8d71722c585c9A82876B1B2FB4dEe9fc536E" }, token: r.ltc, quoteToken: r.wbnb }, { pid: 172, lpSymbol: "USDC-BUSD LP", lpAddresses: { 97: "", 56: "0x05FC2ac8a4FA697501087C916c87b8a5dc4f7b46" }, token: r.usdc, quoteToken: r.busd }, { pid: 171, lpSymbol: "DAI-BUSD LP", lpAddresses: { 97: "", 56: "0xdaFE10aA3AB6758596aDAC70f6873C49F5a9bf86" }, token: r.dai, quoteToken: r.busd }, { pid: 170, lpSymbol: "BSCX-BNB LP", lpAddresses: { 97: "", 56: "0x5fE5394BBc394345737b8e6e48be2804E89eC0eB" }, token: r.bscx, quoteToken: r.wbnb }, { pid: 169, lpSymbol: "TEN-BNB LP", lpAddresses: { 97: "", 56: "0x003C4d60de42eAD30739dD204BD153fE69E20Fb2" }, token: r.ten, quoteToken: r.wbnb }, { pid: 168, lpSymbol: "bALBT-BNB LP", lpAddresses: { 97: "", 56: "0x1B8ab50d894CfE793B44057F681A950E87Bd0331" }, token: r.balbt, quoteToken: r.wbnb }, { pid: 167, lpSymbol: "REEF-BNB LP", lpAddresses: { 97: "", 56: "0x074ed2De503580887073A0F788E035C0fbe13F48" }, token: r.reef, quoteToken: r.wbnb }, { pid: 166, lpSymbol: "Ditto-BNB LP", lpAddresses: { 97: "", 56: "0xb33D432eACe45DF62F0145228B550b214DCaA6D4" }, token: r.ditto, quoteToken: r.wbnb }, { pid: 165, lpSymbol: "VAI-BUSD LP", lpAddresses: { 97: "", 56: "0x9d95063661fa34B67E0Be0cc71Cf92fc6126aF37" }, token: r.vai, quoteToken: r.busd }, { pid: 164, lpSymbol: "BLK-BNB LP", lpAddresses: { 97: "", 56: "0xdA5a79fFe24739876a52AEF0d419aBB3b2517922" }, token: r.blink, quoteToken: r.wbnb }, { pid: 163, lpSymbol: "UNFI-BNB LP", lpAddresses: { 97: "", 56: "0x029f944CD3afa7c229122b19c706d8B7c01e062a" }, token: r.unfi, quoteToken: r.wbnb }, { pid: 162, lpSymbol: "HARD-BNB LP", lpAddresses: { 97: "", 56: "0x158e337e7Dcfcd8FC512840208BB522d122bB19d" }, token: r.hard, quoteToken: r.wbnb }, { pid: 161, lpSymbol: "CTK-BNB LP", lpAddresses: { 97: "", 56: "0xcbb3fCE7134aF9ef2f3DCe0EAE96db68961b1337" }, token: r.ctk, quoteToken: r.wbnb }, { pid: 160, lpSymbol: "SXP-BNB LP", lpAddresses: { 97: "", 56: "0x6294D8518b7321dc22E32AA907A89B1DAfc1aDbB" }, token: r.sxp, quoteToken: r.wbnb }, { pid: 159, lpSymbol: "INJ-BNB LP", lpAddresses: { 97: "", 56: "0x0444712EE8DFF8913B2b44CB1D2a0273b4CDaBe9" }, token: r.inj, quoteToken: r.wbnb }, { pid: 158, lpSymbol: "FIL-BNB LP", lpAddresses: { 97: "", 56: "0xD027c0B352578b1Cf57f472107591CaE5fa27Eb1" }, token: r.fil, quoteToken: r.wbnb }, { pid: 157, lpSymbol: "UNI-BNB LP", lpAddresses: { 97: "", 56: "0x2937202a53C82E36bC8beCFBe79795bedF284804" }, token: r.uni, quoteToken: r.wbnb }, { pid: 156, lpSymbol: "YFI-BNB LP", lpAddresses: { 97: "", 56: "0xfffad7374c894E65b498BDBD489a9a5324A59F60" }, token: r.yfi, quoteToken: r.wbnb }, { pid: 155, lpSymbol: "YFII-BNB LP", lpAddresses: { 97: "", 56: "0x237E7016Ff50D3B704A7e07571aE08628909A116" }, token: r.yfii, quoteToken: r.wbnb }, { pid: 154, lpSymbol: "ATOM-BNB LP", lpAddresses: { 97: "", 56: "0x7DD05eF533b1eBCE7815c90678D4B7344E32b8c9" }, token: r.atom, quoteToken: r.wbnb }, { pid: 153, lpSymbol: "XRP-BNB LP", lpAddresses: { 97: "", 56: "0x0F640E3ec77415Fd810D18B3ac000cD8a172E22f" }, token: r.xrp, quoteToken: r.wbnb }, { pid: 152, lpSymbol: "USDT-BNB LP", lpAddresses: { 97: "", 56: "0x4160910ca32eAD83B6d4b32107974397D2579c2d" }, token: r.usdt, quoteToken: r.wbnb }, { pid: 151, lpSymbol: "ALPHA-BNB LP", lpAddresses: { 97: "", 56: "0x0edAA38Bd263E83fAECbC8476822800F30eE6028" }, token: r.alpha, quoteToken: r.wbnb }, { pid: 150, lpSymbol: "BTCB-BNB LP", lpAddresses: { 97: "", 56: "0x356b7d0d3c54F22C82B7a670C6Ba9E2381b0624c" }, token: r.btcb, quoteToken: r.wbnb }, { pid: 149, lpSymbol: "ETH-BNB LP", lpAddresses: { 97: "", 56: "0x4D7078a6B348766E7a16cD6e6fCb3064721bc6a6" }, token: r.eth, quoteToken: r.wbnb }, { pid: 148, lpSymbol: "XVS-BNB LP", lpAddresses: { 97: "", 56: "0x77B5dB64fD4Cf5B699855420fF2608B2EA6708B3" }, token: r.xvs, quoteToken: r.wbnb }, { pid: 147, lpSymbol: "TWT-BNB LP", lpAddresses: { 97: "", 56: "0x34910518Faf5bfd3a4D15ccFE104B63f06ee3d85" }, token: r.twt, quoteToken: r.wbnb }, { pid: 146, lpSymbol: "USDT-BUSD LP", lpAddresses: { 97: "", 56: "0x28b81C6b155fd9152AE4A09c4eeB7E7F1C114FaC" }, token: r.usdt, quoteToken: r.busd }, { pid: 145, lpSymbol: "LINK-BNB LP", lpAddresses: { 97: "", 56: "0x380941fFd7b7cbf4AEbBfa8A26aa80c2f6570909" }, token: r.link, quoteToken: r.wbnb }, { pid: 144, lpSymbol: "EOS-BNB LP", lpAddresses: { 97: "", 56: "0x082A80b3a55BD3B320a16678784186a979882b21" }, token: r.eos, quoteToken: r.wbnb }, { pid: 143, lpSymbol: "DOT-BNB LP", lpAddresses: { 97: "", 56: "0x3aFfc4dd05286ed6B7206Fc85219d222130e35a9" }, token: r.dot, quoteToken: r.wbnb }, { pid: 142, lpSymbol: "BAND-BNB LP", lpAddresses: { 97: "", 56: "0x473390697036E7611a670575eA9141583471fF47" }, token: r.band, quoteToken: r.wbnb }, { pid: 141, lpSymbol: "ADA-BNB LP", lpAddresses: { 97: "", 56: "0xec0C5719cC100DfB6c6F371bb48d3D079ab6A6D2" }, token: r.ada, quoteToken: r.wbnb }, { pid: 140, lpSymbol: "BUSD-BNB LP", lpAddresses: { 97: "", 56: "0x9bdEdb0c876fC0Da79D945DF28942b898Af89Fc7" }, token: r.busd, quoteToken: r.wbnb }, { pid: 1, lpSymbol: "CAKE-BNB LP", lpAddresses: { 97: "0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4", 56: "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6" }, token: r.cake, quoteToken: r.wbnb }, { pid: 136, lpSymbol: "\u03c4BTC-BTCB LP", lpAddresses: { 97: "", 56: "0x2d4e52c48fd18ee06d3959e82ab0f773c41b9277" }, token: r.\u03c4btc, quoteToken: r.btcb }, { pid: 76, lpSymbol: "SWINGBY-BNB LP", lpAddresses: { 97: "", 56: "0x4576C456AF93a37a096235e5d83f812AC9aeD027" }, token: r.swingby, quoteToken: r.wbnb }, { pid: 135, lpSymbol: "XED-BNB LP", lpAddresses: { 97: "", 56: "0x718d3baa161e1a38758bb0f1fe751e401f431ac4" }, token: r.xed, quoteToken: r.wbnb }, { pid: 134, lpSymbol: "HAKKA-BUSD LP", lpAddresses: { 97: "", 56: "0x56bc8de6e90a8454cb2614b33e750d960aecdf12" }, token: r.hakka, quoteToken: r.busd }, { pid: 133, lpSymbol: "CGG-BNB LP", lpAddresses: { 97: "", 56: "0x484c60f6202c8043DCA0236bB3101ada7ec50AD4" }, token: r.cgg, quoteToken: r.wbnb }, { pid: 132, lpSymbol: "SUTER-BNB LP", lpAddresses: { 97: "", 56: "0x6Ff75C20656A0E4745E7c114972D361F483AFa5f" }, token: r.suter, quoteToken: r.wbnb }, { pid: 131, lpSymbol: "bROOBEE-BNB LP", lpAddresses: { 97: "", 56: "0x9e6f9f3382f9edc683203b528222c554c92382c2" }, token: r.broobee, quoteToken: r.wbnb }, { pid: 130, lpSymbol: "HZN-BNB LP", lpAddresses: { 97: "", 56: "0xee4ca18e91012bf87fefde3dd6723a8834347a4d" }, token: r.hzn, quoteToken: r.wbnb }, { pid: 129, lpSymbol: "ALPA-BNB LP", lpAddresses: { 97: "", 56: "0x837cd42282801e340f1f17aadf3166fee99fb07c" }, token: r.alpa, quoteToken: r.wbnb }, { pid: 128, lpSymbol: "PERL-BNB LP", lpAddresses: { 97: "", 56: "0x044e9985c14a547d478b1e3d4a4e562e69c8f936" }, token: r.perl, quoteToken: r.wbnb }, { pid: 127, lpSymbol: "TLM-BNB LP", lpAddresses: { 97: "", 56: "0x34e821e785A93261B697eBD2797988B3AA78ca33" }, token: r.tlm, quoteToken: r.wbnb }, { pid: 125, lpSymbol: "JGN-BNB LP", lpAddresses: { 97: "", 56: "0x890479844484D67e34B99e1BBc1468231b254c08" }, token: r.jgn, quoteToken: r.wbnb }, { pid: 124, lpSymbol: "EPS-BNB LP", lpAddresses: { 97: "", 56: "0xf9045866e7b372def1eff3712ce55fac1a98daf0" }, token: r.eps, quoteToken: r.wbnb }, { pid: 123, lpSymbol: "ARPA-BNB LP", lpAddresses: { 97: "", 56: "0xfb29fca952b478ddcb8a43f57176161e498225b1" }, token: r.arpa, quoteToken: r.wbnb }, { pid: 122, lpSymbol: "ITAM-BNB LP", lpAddresses: { 97: "", 56: "0xCdC53345192D0e31eEAD03D7E9e008Ee659FAEbE" }, token: r.itam, quoteToken: r.wbnb }, { pid: 121, lpSymbol: "BONDLY-BNB LP", lpAddresses: { 97: "", 56: "0x67581bfb4fc13bb73c71489b504e9b5354769063" }, token: r.bondly, quoteToken: r.wbnb }, { pid: 120, lpSymbol: "TKO-BNB LP", lpAddresses: { 97: "", 56: "0x496a8b716A3A3410B16e71E3c906968CE4488e52" }, token: r.tko, quoteToken: r.wbnb }, { pid: 119, lpSymbol: "APYS-BNB LP", lpAddresses: { 97: "", 56: "0xE5783Cc9dFb3E7e474B81B07369a008e80F1cEdb" }, token: r.apys, quoteToken: r.wbnb }, { pid: 118, lpSymbol: "HOO-BUSD LP", lpAddresses: { 97: "", 56: "0x3c9e55edbd937ae0ad8c084a1a8302110612a371" }, token: r.hoo, quoteToken: r.busd }, { pid: 117, lpSymbol: "ODDZ-BNB LP", lpAddresses: { 97: "", 56: "0x61376b56ff33c618b115131712a4138f98810a6a" }, token: r.oddz, quoteToken: r.wbnb }, { pid: 116, lpSymbol: "EASY-BNB LP", lpAddresses: { 97: "", 56: "0xbd1ec00b0d1cca9d5b28fbe0bb7d664238af2ffa" }, token: r.easy, quoteToken: r.wbnb }, { pid: 115, lpSymbol: "NRV-BNB LP", lpAddresses: { 97: "", 56: "0x5a805994a2e30ac710e7376ccc0211285bd4dd92" }, token: r.nrv, quoteToken: r.wbnb }, { pid: 114, lpSymbol: "DEGO-BNB LP", lpAddresses: { 97: "", 56: "0x17F0b998B81cE75074a7CDAdAe6D63Da3cb23572" }, token: r.dego, quoteToken: r.wbnb }, { pid: 113, lpSymbol: "GUM-BNB LP", lpAddresses: { 97: "", 56: "0x155645cDF8e4B28d5B7790b65d9f79efc222740C" }, token: r.gum, quoteToken: r.wbnb }, { pid: 112, lpSymbol: "pBTC-BNB LP", lpAddresses: { 97: "", 56: "0xb5f6f7dad23132d40d778085d795bd0fd4b859cd" }, token: r.pbtc, quoteToken: r.wbnb }, { pid: 111, lpSymbol: "DFT-BNB LP", lpAddresses: { 97: "", 56: "0x8FbCbD7e30b1733965a8980bf7Ae2ca1c0C456cc" }, token: r.dft, quoteToken: r.wbnb }, { pid: 110, lpSymbol: "SWTH-BNB LP", lpAddresses: { 97: "", 56: "0x8c5cFfad6cddb96Ee33DA685D0d50a37e030E115" }, token: r.swth, quoteToken: r.wbnb }, { pid: 109, lpSymbol: "LIEN-BNB LP", lpAddresses: { 97: "", 56: "0xcd14855150335AAE984aa6D281E090c27035C692" }, token: r.lien, quoteToken: r.wbnb }, { pid: 108, lpSymbol: "ZIL-BNB LP", lpAddresses: { 97: "", 56: "0xc746337b5f800a0e19ed4eb3bda03ff1401b8167" }, token: r.zil, quoteToken: r.wbnb }, { pid: 107, lpSymbol: "pCWS-BNB LP", lpAddresses: { 97: "", 56: "0x889e81d25bffba437b2a5d3e0e4fc58a0e2749c5" }, token: r.pcws, quoteToken: r.wbnb }, { pid: 106, lpSymbol: "bBADGER-BTCB LP", lpAddresses: { 97: "", 56: "0x10F461CEAC7A17F59e249954Db0784d42EfF5DB5" }, token: r.bbadger, quoteToken: r.btcb }, { pid: 104, lpSymbol: "bDIGG-BTCB LP", lpAddresses: { 97: "", 56: "0xE1E33459505bB3763843a426F7Fd9933418184ae" }, token: r.bdigg, quoteToken: r.btcb }, { pid: 103, lpSymbol: "LTO-BNB LP", lpAddresses: { 97: "", 56: "0x85644fcd00c401e1a0a0a10d2ae6bbe04a73e4ab" }, token: r.lto, quoteToken: r.wbnb }, { pid: 102, lpSymbol: "MIR-UST LP", lpAddresses: { 97: "", 56: "0xf64a269F0A06dA07D23F43c1Deb217101ee6Bee7" }, token: r.mir, quoteToken: r.ust }, { pid: 101, lpSymbol: "TRADE-BNB LP", lpAddresses: { 97: "", 56: "0x2562f94E90dE6D9eb4fB6B3b8Eab56b15Aa4FC72" }, token: r.trade, quoteToken: r.wbnb }, { pid: 100, lpSymbol: "DUSK-BNB LP", lpAddresses: { 97: "", 56: "0xB7918560273FD56e50E9c215CC0DFE8D764C36C5" }, token: r.dusk, quoteToken: r.wbnb }, { pid: 99, lpSymbol: "BIFI-BNB LP", lpAddresses: { 97: "", 56: "0xd132D2C24F29EE8ABb64a66559d1b7aa627Bd7fD" }, token: r.bifi, quoteToken: r.wbnb }, { pid: 98, lpSymbol: "TXL-BUSD LP", lpAddresses: { 97: "", 56: "0xD20E0BcCa8B29409bf5726CB24DD779Fe337020e" }, token: r.txl, quoteToken: r.busd }, { pid: 97, lpSymbol: "COS-BNB LP", lpAddresses: { 97: "", 56: "0x7b1e440240B220244761C9D9A3B07fbA1995BD84" }, token: r.cos, quoteToken: r.wbnb }, { pid: 96, lpSymbol: "BUNNY-BNB LP", lpAddresses: { 97: "", 56: "0x7Bb89460599Dbf32ee3Aa50798BBcEae2A5F7f6a" }, token: r.bunny, quoteToken: r.wbnb }, { pid: 95, lpSymbol: "ALICE-BNB LP", lpAddresses: { 97: "", 56: "0xe022baa3E5E87658f789c9132B10d7425Fd3a389" }, token: r.alice, quoteToken: r.wbnb }, { pid: 94, lpSymbol: "FOR-BUSD LP", lpAddresses: { 97: "", 56: "0xfEc200A5E3adDD4a7915a556DDe3F5850e644020" }, token: r.for, quoteToken: r.busd }, { pid: 93, lpSymbol: "BUX-BNB LP", lpAddresses: { 97: "", 56: "0x0F556f4E47513d1a19Be456a9aF778d7e1A226B9" }, token: r.bux, quoteToken: r.wbnb }, { pid: 92, lpSymbol: "NULS-BUSD LP", lpAddresses: { 97: "", 56: "0xCA01F5D89d5b1d24ca5D6Ecc856D21e8a61DAFCc" }, token: r.nuls, quoteToken: r.busd }, { pid: 91, lpSymbol: "NULS-BNB LP", lpAddresses: { 97: "", 56: "0xad7e515409e5a7d516411a85acc88c5e993f570a" }, token: r.nuls, quoteToken: r.wbnb }, { pid: 90, lpSymbol: "BELT-BNB LP", lpAddresses: { 97: "", 56: "0x83B92D283cd279fF2e057BD86a95BdEfffED6faa" }, token: r.belt, quoteToken: r.wbnb }, { pid: 89, lpSymbol: "RAMP-BUSD LP", lpAddresses: { 97: "", 56: "0xbF36959939982D0D34B37Fb3f3425da9676C13a3" }, token: r.ramp, quoteToken: r.busd }, { pid: 88, lpSymbol: "BFI-BNB LP", lpAddresses: { 97: "", 56: "0x45a9e8d48bc560416008d122c9437927fed50e7d" }, token: r.bfi, quoteToken: r.wbnb }, { pid: 87, lpSymbol: "DEXE-BUSD LP", lpAddresses: { 97: "", 56: "0x69ab367bc1bea1d2c0fb4dbaec6b7197951da56c" }, token: r.dexe, quoteToken: r.busd }, { pid: 86, lpSymbol: "BEL-BNB LP", lpAddresses: { 97: "", 56: "0xAB97952a2806D5c92b7046c7aB13a72A87e0097b" }, token: r.bel, quoteToken: r.wbnb }, { pid: 85, lpSymbol: "TPT-BUSD LP", lpAddresses: { 97: "", 56: "0x4db28767d1527ba545ca5bbda1c96a94ed6ff242" }, token: r.tpt, quoteToken: r.busd }, { pid: 84, lpSymbol: "WATCH-BNB LP", lpAddresses: { 97: "", 56: "0xdc6c130299e53acd2cc2d291fa10552ca2198a6b" }, token: r.watch, quoteToken: r.wbnb }, { pid: 83, lpSymbol: "xMARK-BUSD LP", lpAddresses: { 97: "", 56: "0x292ca56ed5b3330a19037f835af4a9c0098ea6fa" }, token: r.xmark, quoteToken: r.busd }, { pid: 82, lpSymbol: "bMXX-BNB LP", lpAddresses: { 97: "", 56: "0x4D5aA94Ce6BbB1BC4eb73207a5a5d4D052cFcD67" }, token: r.bmxx, quoteToken: r.wbnb }, { pid: 81, lpSymbol: "IOTX-BUSD LP", lpAddresses: { 97: "", 56: "0x36b8b28d37f93372188f2aa2507b68a5cd8b2664" }, token: r.iotx, quoteToken: r.busd }, { pid: 80, lpSymbol: "BOR-BNB LP", lpAddresses: { 97: "", 56: "0x86e650350c40a5178a5d014ba37fe8556232b898" }, token: r.bor, quoteToken: r.wbnb }, { pid: 79, lpSymbol: "bOPEN-BNB LP", lpAddresses: { 97: "", 56: "0x9d8b7e4a9d53654d82f12c83448d8f92732bc761" }, token: r.bopen, quoteToken: r.wbnb }, { pid: 78, lpSymbol: "SUSHI-ETH LP", lpAddresses: { 97: "", 56: "0x17580340f3daedae871a8c21d15911742ec79e0f" }, token: r.sushi, quoteToken: r.eth }, { pid: 77, lpSymbol: "DODO-BNB LP", lpAddresses: { 97: "", 56: "0x9e642d174b14faea31d842dc83037c42b53236e6" }, token: r.dodo, quoteToken: r.wbnb }, { pid: 75, lpSymbol: "BRY-BNB LP", lpAddresses: { 97: "", 56: "0x5E3CD27F36932Bc0314aC4e2510585798C34a2fC" }, token: r.bry, quoteToken: r.wbnb }, { pid: 74, lpSymbol: "ZEE-BNB LP", lpAddresses: { 97: "", 56: "0xb5ab3996808c7e489dcdc0f1af2ab212ae0059af" }, token: r.zee, quoteToken: r.wbnb }, { pid: 73, lpSymbol: "SWGb-BNB LP", lpAddresses: { 97: "", 56: "0xc1800c29cf91954357cd0bf3f0accaada3d0109c" }, token: r.swgb, quoteToken: r.wbnb }, { pid: 72, lpSymbol: "COMP-ETH LP", lpAddresses: { 97: "", 56: "0x0392957571f28037607c14832d16f8b653edd472" }, token: r.comp, quoteToken: r.eth }, { pid: 71, lpSymbol: "SFP-BNB LP", lpAddresses: { 97: "", 56: "0xcbe2cf3bd012e9c1ade2ee4d41db3dac763e78f3" }, token: r.sfp, quoteToken: r.wbnb }, { pid: 70, lpSymbol: "BETH-ETH LP", lpAddresses: { 97: "", 56: "0x99d865ed50d2c32c1493896810fa386c1ce81d91" }, token: r.beth, quoteToken: r.eth }, { pid: 69, lpSymbol: "LINA-BUSD LP", lpAddresses: { 97: "", 56: "0xeb325a8ea1c5abf40c7ceaf645596c1f943d0948" }, token: r.lina, quoteToken: r.busd }, { pid: 68, lpSymbol: "LIT-BNB LP", lpAddresses: { 97: "", 56: "0x60bB03D1010b99CEAdD0dd209b64bC8bd83da161" }, token: r.lit, quoteToken: r.wbnb }, { pid: 67, lpSymbol: "HGET-BNB LP", lpAddresses: { 97: "", 56: "0x66b9e1eac8a81f3752f7f3a5e95de460688a17ee" }, token: r.hget, quoteToken: r.wbnb }, { pid: 66, lpSymbol: "BDO-BNB LP", lpAddresses: { 97: "", 56: "0x74690f829fec83ea424ee1f1654041b2491a7be9" }, token: r.bdo, quoteToken: r.wbnb }, { pid: 65, lpSymbol: "EGLD-BNB LP", lpAddresses: { 97: "", 56: "0x3ef4952c7a9afbe374ea02d1bf5ed5a0015b7716" }, token: r.egld, quoteToken: r.wbnb }, { pid: 63, lpSymbol: "UST-BUSD LP", lpAddresses: { 97: "", 56: "0xD1F12370b2ba1C79838337648F820a87eDF5e1e6" }, token: r.ust, quoteToken: r.busd }, { pid: 62, lpSymbol: "mAMZN-UST LP", lpAddresses: { 97: "", 56: "0xc92Dc34665c8a21f98E1E38474580b61b4f3e1b9" }, token: r.mamzn, quoteToken: r.ust }, { pid: 61, lpSymbol: "mGOOGL-UST LP", lpAddresses: { 97: "", 56: "0x852A68181f789AE6d1Da3dF101740a59A071004f" }, token: r.mgoogl, quoteToken: r.ust }, { pid: 60, lpSymbol: "mNFLX-UST LP", lpAddresses: { 97: "", 56: "0xF609ade3846981825776068a8eD7746470029D1f" }, token: r.mnflx, quoteToken: r.ust }, { pid: 59, lpSymbol: "mTSLA-UST LP", lpAddresses: { 97: "", 56: "0xD5664D2d15cdffD597515f1c0D945c6c1D3Bf85B" }, token: r.mtsla, quoteToken: r.ust }, { pid: 58, lpSymbol: "wSOTE-BNB LP", lpAddresses: { 97: "", 56: "0xffb9e2d5ce4378f1a89b29bf53f80804cc078102" }, token: r.wsote, quoteToken: r.wbnb }, { pid: 57, lpSymbol: "FRONT-BNB LP", lpAddresses: { 97: "", 56: "0x36b7d2e5c7877392fb17f9219efad56f3d794700" }, token: r.front, quoteToken: r.wbnb }, { pid: 56, lpSymbol: "Helmet-BNB LP", lpAddresses: { 97: "", 56: "0x6411310c07d8c48730172146fd6f31fa84034a8b" }, token: r.helmet, quoteToken: r.wbnb }, { pid: 55, lpSymbol: "BTCST-BNB LP", lpAddresses: { 97: "", 56: "0x91589786D36fEe5B27A5539CfE638a5fc9834665" }, token: r.btcst, quoteToken: r.wbnb }, { pid: 54, lpSymbol: "LTC-BNB LP", lpAddresses: { 97: "", 56: "0xbc765fd113c5bdb2ebc25f711191b56bb8690aec" }, token: r.ltc, quoteToken: r.wbnb }, { pid: 53, lpSymbol: "USDC-BUSD LP", lpAddresses: { 97: "", 56: "0x680dd100e4b394bda26a59dd5c119a391e747d18" }, token: r.usdc, quoteToken: r.busd }, { pid: 52, lpSymbol: "DAI-BUSD LP", lpAddresses: { 97: "", 56: "0x3aB77e40340AB084c3e23Be8e5A6f7afed9D41DC" }, token: r.dai, quoteToken: r.busd }, { pid: 51, lpSymbol: "BSCX-BNB LP", lpAddresses: { 97: "", 56: "0x20781bc3701c5309ac75291f5d09bdc23d7b7fa8" }, token: r.bscx, quoteToken: r.wbnb }, { pid: 50, lpSymbol: "TEN-BNB LP", lpAddresses: { 97: "", 56: "0x01ecc44ddd2d104f44d2aa1a2bd9dfbc91ae8275" }, token: r.ten, quoteToken: r.wbnb }, { pid: 49, lpSymbol: "bALBT-BNB LP", lpAddresses: { 97: "", 56: "0xbe14f3a89a4f7f279af9d99554cf12e8c29db921" }, token: r.balbt, quoteToken: r.wbnb }, { pid: 46, lpSymbol: "OG-BNB LP", lpAddresses: { 97: "", 56: "0x64373608f2e93ea97ad4d8ca2cce6b2575db2f55" }, token: r.og, quoteToken: r.wbnb }, { pid: 47, lpSymbol: "ASR-BNB LP", lpAddresses: { 97: "", 56: "0xd6b900d5308356317299dafe303e661271aa12f1" }, token: r.asr, quoteToken: r.wbnb }, { pid: 48, lpSymbol: "ATM-BNB LP", lpAddresses: { 97: "", 56: "0xd5b3ebf1a85d32c73a82b40f75e1cd929caf4029" }, token: r.atm, quoteToken: r.wbnb }, { pid: 45, lpSymbol: "REEF-BNB LP", lpAddresses: { 97: "", 56: "0x58B58cab6C5cF158f63A2390b817710826d116D0" }, token: r.reef, quoteToken: r.wbnb }, { pid: 44, lpSymbol: "Ditto-BNB LP", lpAddresses: { 97: "", 56: "0x470bc451810b312bbb1256f96b0895d95ea659b1" }, token: r.ditto, quoteToken: r.wbnb }, { pid: 43, lpSymbol: "JUV-BNB LP", lpAddresses: { 97: "", 56: "0x51a2ffa5b7de506f9a22549e48b33f6cf0d9030e" }, token: r.juv, quoteToken: r.wbnb }, { pid: 42, lpSymbol: "PSG-BNB LP", lpAddresses: { 97: "", 56: "0x9c4f6a5050cf863e67a402e8b377973b4e3372c1" }, token: r.psg, quoteToken: r.wbnb }, { pid: 39, lpSymbol: "UNFI-BNB LP", lpAddresses: { 97: "", 56: "0xbEA35584b9a88107102ABEf0BDeE2c4FaE5D8c31" }, token: r.unfi, quoteToken: r.wbnb }, { pid: 41, lpSymbol: "VAI-BUSD LP", lpAddresses: { 97: "", 56: "0xff17ff314925dff772b71abdff2782bc913b3575" }, token: r.vai, quoteToken: r.busd }, { pid: 40, lpSymbol: "BLK-BNB LP", lpAddresses: { 97: "", 56: "0xC743Dc05F03D25E1aF8eC5F8228f4BD25513c8d0" }, token: r.blink, quoteToken: r.wbnb }, { pid: 37, lpSymbol: "HARD-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x9f40e8a2fcaa267a0c374b6c661e0b372264cc3d" }, token: r.hard, quoteToken: r.wbnb }, { pid: 2, lpSymbol: "BUSD-BNB LP", lpAddresses: { 97: "0x2f7682b64b88149ba3250aee32db712964de5fa9", 56: "0x1b96b92314c44b159149f7e0303511fb2fc4774f" }, token: r.busd, quoteToken: r.wbnb }, { pid: 3, lpSymbol: "ADA-BNB LP", lpAddresses: { 97: "0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce", 56: "0xba51d1ab95756ca4eab8737ecd450cd8f05384cf" }, token: r.ada, quoteToken: r.wbnb }, { pid: 4, lpSymbol: "BAND-BNB LP", lpAddresses: { 97: "0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce", 56: "0xc639187ef82271d8f517de6feae4faf5b517533c" }, token: r.band, quoteToken: r.wbnb }, { pid: 5, lpSymbol: "DOT-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c" }, token: r.dot, quoteToken: r.wbnb }, { pid: 6, lpSymbol: "EOS-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x981d2ba1b298888408d342c39c2ab92e8991691e" }, token: r.eos, quoteToken: r.wbnb }, { pid: 7, lpSymbol: "LINK-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0xaebe45e3a03b734c68e5557ae04bfc76917b4686" }, token: r.link, quoteToken: r.wbnb }, { pid: 11, lpSymbol: "USDT-BUSD LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd" }, token: r.usdt, quoteToken: r.busd }, { pid: 12, lpSymbol: "TWT-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x610e7a287c27dfFcaC0F0a94f547Cc1B770cF483" }, token: r.twt, quoteToken: r.wbnb }, { pid: 13, lpSymbol: "XVS-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x41182c32F854dd97bA0e0B1816022e0aCB2fc0bb" }, token: r.xvs, quoteToken: r.wbnb }, { pid: 14, lpSymbol: "ETH-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x70D8929d04b60Af4fb9B58713eBcf18765aDE422" }, token: r.eth, quoteToken: r.wbnb }, { pid: 15, lpSymbol: "BTCB-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x7561EEe90e24F3b348E1087A005F78B4c8453524" }, token: r.btcb, quoteToken: r.wbnb }, { pid: 16, lpSymbol: "ALPHA-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x4e0f3385d932F7179DeE045369286FFa6B03d887" }, token: r.alpha, quoteToken: r.wbnb }, { pid: 17, lpSymbol: "USDT-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x20bcc3b8a0091ddac2d0bc30f68e6cbb97de59cd" }, token: r.usdt, quoteToken: r.wbnb }, { pid: 18, lpSymbol: "XRP-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0xc7b4b32a3be2cb6572a1c9959401f832ce47a6d2" }, token: r.xrp, quoteToken: r.wbnb }, { pid: 19, lpSymbol: "ATOM-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x2333c77fc0b2875c11409cdcd3c75d42d402e834" }, token: r.atom, quoteToken: r.wbnb }, { pid: 20, lpSymbol: "YFII-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x574a978c2d0d36d707a05e459466c7a1054f1210" }, token: r.yfii, quoteToken: r.wbnb }, { pid: 21, lpSymbol: "DAI-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x56c77d59e82f33c712f919d09fceddf49660a829" }, token: r.dai, quoteToken: r.wbnb }, { pid: 22, lpSymbol: "XTZ-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x5acac332f0f49c8badc7afd0134ad19d3db972e6" }, token: r.xtz, quoteToken: r.wbnb }, { pid: 23, lpSymbol: "BCH-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x54edd846db17f43b6e43296134ecd96284671e81" }, token: r.bch, quoteToken: r.wbnb }, { pid: 24, lpSymbol: "YFI-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x68Ff2ca47D27db5Ac0b5c46587645835dD51D3C1" }, token: r.yfi, quoteToken: r.wbnb }, { pid: 25, lpSymbol: "UNI-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x4269e7F43A63CEA1aD7707Be565a94a9189967E9" }, token: r.uni, quoteToken: r.wbnb }, { pid: 26, lpSymbol: "FIL-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x35fe9787f0ebf2a200bac413d3030cf62d312774" }, token: r.fil, quoteToken: r.wbnb }, { pid: 27, lpSymbol: "INJ-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x7a34bd64d18e44CfdE3ef4B81b87BAf3EB3315B6" }, token: r.inj, quoteToken: r.wbnb }, { pid: 29, lpSymbol: "USDC-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x30479874f9320a62bce3bc0e315c920e1d73e278" }, token: r.usdc, quoteToken: r.wbnb }, { pid: 30, lpSymbol: "SXP-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x752E713fB70E3FA1Ac08bCF34485F14A986956c4" }, token: r.sxp, quoteToken: r.wbnb }, { pid: 32, lpSymbol: "CTK-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x7793870484647a7278907498ec504879d6971EAb" }, token: r.ctk, quoteToken: r.wbnb }, { pid: 34, lpSymbol: "STAX-CAKE LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x7cd05f8b960ba071fdf69c750c0e5a57c8366500" }, token: r.stax, quoteToken: r.cake, isCommunity: !0 }, { pid: 35, lpSymbol: "NAR-CAKE LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x745c4fd226e169d6da959283275a8e0ecdd7f312" }, token: r.nar, quoteToken: r.cake, isCommunity: !0 }, { pid: 36, lpSymbol: "NYA-CAKE LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x2730bf486d658838464a4ef077880998d944252d" }, token: r.nya, quoteToken: r.cake, isCommunity: !0 }, { pid: 38, lpSymbol: "bROOBEE-CAKE LP", lpAddresses: { 97: "", 56: "0x970858016C963b780E06f7DCfdEf8e809919BcE8" }, token: r.broobee, quoteToken: r.cake, isCommunity: !0 }, { pid: 8, lpSymbol: "BAKE-BNB Bakery LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0xc2eed0f5a0dc28cfa895084bc0a9b8b8279ae492" }, token: r.bake, quoteToken: r.wbnb }, { pid: 9, lpSymbol: "BURGER-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0xd937FB9E6e47F3805981453BFB277a49FFfE04D7" }, token: r.burger, quoteToken: r.wbnb }, { pid: 10, lpSymbol: "BAKE-BNB LP", lpAddresses: { 97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D", 56: "0x3Da30727ed0626b78C212e81B37B97A8eF8A25bB" }, token: r.bake, quoteToken: r.wbnb }];
            t.a = i
        },
        122: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return p })), n.d(t, "a", (function() { return b }));
            var a = n(3),
                r = n.n(a),
                i = n(12),
                o = n(0),
                s = n(28),
                c = n(98),
                u = n(250),
                d = n(99),
                l = n(249),
                p = function() {
                    var e = Object(o.useRef)(null),
                        t = Object(c.b)(),
                        n = Object(u.a)();
                    Object(o.useEffect)((function() {
                        return n ? e.current = setInterval(Object(i.a)(r.a.mark((function e() {
                                var n;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, d.a.getBlockNumber();
                                        case 2:
                                            n = e.sent, t(Object(l.b)(n));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))), 6e3) : clearInterval(e.current),
                            function() { return clearInterval(e.current) }
                    }), [t, e, n])
                },
                b = function() { return Object(s.c)((function(e) { return e.block })) }
        },
        130: function(e, t, n) {
            "use strict";

            function a(e) { return /^0x0*$/.test(e) }
            n.d(t, "a", (function() { return a }))
        },
        133: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return s })), n.d(t, "b", (function() { return c })), n.d(t, "c", (function() { return u }));
            var a = n(3),
                r = n.n(a),
                i = n(12),
                o = n(101),
                s = "pancakeswap_language",
                c = function() {
                    var e = Object(i.a)(r.a.mark((function e(t) {
                        var n, a;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("".concat("/mastermind", "/locales/").concat(t, ".json"));
                                case 2:
                                    return n = e.sent, e.next = 5, n.json();
                                case 5:
                                    return a = e.sent, e.abrupt("return", a);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                u = function() { try { return localStorage.getItem(s) || o.a.locale } catch (e) { return o.a.locale } }
        },
        134: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() { return F })), n.d(t, "c", (function() { return D })), n.d(t, "b", (function() { return N }));
            var a = n(3),
                r = n.n(a),
                i = n(12),
                o = n(6),
                s = n(15),
                c = n(121),
                u = function(e) { return e >= 139 && e <= 250 },
                d = n(34),
                l = [{ pid: null, lpSymbol: "QSD-BNB LP", lpAddresses: { 97: "", 56: "0x7b3ae32eE8C532016f3E31C8941D937c59e055B9" }, token: d.a.qsd, quoteToken: d.a.wbnb }],
                p = n(11),
                b = n(29),
                y = n.n(b),
                m = n(159),
                f = n(90),
                h = n(35),
                k = n(39),
                T = n(51),
                g = function() {
                    var e = Object(i.a)(r.a.mark((function e(t) {
                        var n, a, i, o, s, c, u, d, l, b, g, v, x, j, w, O, B, A, C, E, P, S, I, F, D, N;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = t.pid, i = t.lpAddresses, o = t.token, s = t.quoteToken, c = Object(h.a)(i), u = [{ address: o.address, name: "balanceOf", params: [c] }, { address: s.address, name: "balanceOf", params: [c] }, { address: c, name: "balanceOf", params: [Object(h.m)()] }, { address: c, name: "totalSupply" }, { address: o.address, name: "decimals" }, { address: s.address, name: "decimals" }], e.next = 5, Object(T.a)(f, u);
                                case 5:
                                    if (d = e.sent, l = Object(p.a)(d, 6), b = l[0], g = l[1], v = l[2], x = l[3], j = l[4], w = l[5], O = new y.a(v).div(new y.a(x)), B = new y.a(b).div(k.b.pow(j)), A = new y.a(g).div(k.b.pow(w)), C = A.times(O), E = C.times(new y.a(2)), !a && 0 !== a) { e.next = 24; break }
                                    return e.next = 21, Object(T.a)(m, [{ address: Object(h.m)(), name: "poolInfo", params: [a] }, { address: Object(h.m)(), name: "totalAllocPoint" }]);
                                case 21:
                                    e.t0 = e.sent, e.next = 25;
                                    break;
                                case 24:
                                    e.t0 = [null, null];
                                case 25:
                                    return P = e.t0, S = Object(p.a)(P, 2), I = S[0], F = S[1], D = I ? new y.a(null === (n = I.allocPoint) || void 0 === n ? void 0 : n._hex) : k.c, N = F ? D.div(new y.a(F)) : k.c, e.abrupt("return", { tokenAmountTotal: B.toJSON(), lpTotalSupply: new y.a(x).toJSON(), lpTotalInQuoteToken: E.toJSON(), tokenPriceVsQuote: A.div(B).toJSON(), poolWeight: N.toJSON(), multiplier: "".concat(D.div(100).toString(), "X") });
                                case 32:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                v = function() {
                    var e = Object(i.a)(r.a.mark((function e(t) {
                        var n;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, g(t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", Object(o.a)(Object(o.a)({}, t), n));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                x = function() {
                    var e = Object(i.a)(r.a.mark((function e(t) {
                        var n;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Promise.all(t.map(function() {
                                        var e = Object(i.a)(r.a.mark((function e(t) {
                                            var n, a;
                                            return r.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, v(t);
                                                    case 2:
                                                        return n = e.sent, a = Object(o.a)(Object(o.a)({}, n), {}, { token: n.token, quoteToken: n.quoteToken }), e.abrupt("return", a);
                                                    case 5:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) { return e.apply(this, arguments) }
                                    }()));
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                j = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ["BUSD", "WBNB"],
                        n = e.find((function(e) { return t.some((function(t) { return e.quoteToken.symbol === t })) }));
                    return n || e[0]
                },
                w = function(e, t, n) { var a = e.filter((function(e) { return e.token.symbol === t })); return j(a, n) },
                O = function(e, t, n) { var a = Boolean(e.tokenPriceVsQuote); if (e.quoteToken.symbol === d.a.busd.symbol) return a ? new y.a(e.tokenPriceVsQuote) : k.c; if (e.quoteToken.symbol === d.a.wbnb.symbol) return a ? n.times(e.tokenPriceVsQuote) : k.c; if (!t) return k.c; if (t.quoteToken.symbol === d.a.wbnb.symbol) { var r = n.times(t.tokenPriceVsQuote); return a && r ? new y.a(e.tokenPriceVsQuote).times(r) : k.c } if (t.quoteToken.symbol === d.a.busd.symbol) { var i = t.tokenPriceVsQuote; return a && i ? new y.a(e.tokenPriceVsQuote).times(i) : k.c } return k.c },
                B = function(e, t, n) { return "BUSD" === e.quoteToken.symbol ? k.a : "WBNB" === e.quoteToken.symbol ? n : t ? "WBNB" === t.quoteToken.symbol ? t.tokenPriceVsQuote ? n.times(t.tokenPriceVsQuote) : k.c : "BUSD" === t.quoteToken.symbol && t.tokenPriceVsQuote ? new y.a(t.tokenPriceVsQuote) : k.c : k.c },
                A = function() {
                    var e = Object(i.a)(r.a.mark((function e(t) {
                        var n, a, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.find((function(e) { return 252 === e.pid })), a = n.tokenPriceVsQuote ? k.a.div(n.tokenPriceVsQuote) : k.c, i = t.map((function(e) {
                                        var n = w(t, e.quoteToken.symbol),
                                            r = O(e, n, a),
                                            i = B(e, n, a);
                                        return Object(o.a)(Object(o.a)({}, e), {}, { tokenPriceBusd: r.toJSON(), quoteTokenPriceBusd: i.toJSON() })
                                    })), e.abrupt("return", i);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                C = function() {
                    var e = Object(i.a)(r.a.mark((function e(t, n) {
                        var a, i, o, s;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = Object(h.m)(), i = n.map((function(e) { return { address: Object(h.a)(e.lpAddresses), name: "allowance", params: [t, a] } })), e.next = 4, Object(T.a)(f, i);
                                case 4:
                                    return o = e.sent, s = o.map((function(e) { return new y.a(e).toJSON() })), e.abrupt("return", s);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                E = function() {
                    var e = Object(i.a)(r.a.mark((function e(t, n) {
                        var a, i, o;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = n.map((function(e) { return { address: Object(h.a)(e.lpAddresses), name: "balanceOf", params: [t] } })), e.next = 3, Object(T.a)(f, a);
                                case 3:
                                    return i = e.sent, o = i.map((function(e) { return new y.a(e).toJSON() })), e.abrupt("return", o);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                P = function() {
                    var e = Object(i.a)(r.a.mark((function e(t, n) {
                        var a, i, o, s;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = Object(h.m)(), i = n.map((function(e) { return { address: a, name: "userInfo", params: [e.pid, t] } })), e.next = 4, Object(T.a)(m, i);
                                case 4:
                                    return o = e.sent, s = o.map((function(e) { return new y.a(e[0]._hex).toJSON() })), e.abrupt("return", s);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                S = function() {
                    var e = Object(i.a)(r.a.mark((function e(t, n) {
                        var a, i, o, s;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = Object(h.m)(), i = n.map((function(e) { return { address: a, name: "pendingCake", params: [e.pid, t] } })), e.next = 4, Object(T.a)(m, i);
                                case 4:
                                    return o = e.sent, s = o.map((function(e) { return new y.a(e).toJSON() })), e.abrupt("return", s);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                I = { data: c.a.map((function(e) { return Object(o.a)(Object(o.a)({}, e), {}, { userData: { allowance: "0", tokenBalance: "0", stakedBalance: "0", earnings: "0" } }) })), loadArchivedFarmsData: !1, userDataLoaded: !1 },
                F = c.a.filter((function(e) { var t = e.pid; return !u(t) })),
                D = Object(s.c)("farms/fetchFarmsPublicDataAsync", function() {
                    var e = Object(i.a)(r.a.mark((function e(t) {
                        var n, a, i, o, s;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = c.a.filter((function(e) { return t.includes(e.pid) })), a = n.concat(l), e.next = 4, x(a);
                                case 4:
                                    return i = e.sent, e.next = 7, A(i);
                                case 7:
                                    return o = e.sent, s = o.filter((function(e) { return e.pid || 0 === e.pid })), e.abrupt("return", s);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                N = Object(s.c)("farms/fetchFarmUserDataAsync", function() {
                    var e = Object(i.a)(r.a.mark((function e(t) {
                        var n, a, i, o, s, u, d;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.account, a = t.pids, i = c.a.filter((function(e) { return a.includes(e.pid) })), e.next = 4, C(n, i);
                                case 4:
                                    return o = e.sent, e.next = 7, E(n, i);
                                case 7:
                                    return s = e.sent, e.next = 10, P(n, i);
                                case 10:
                                    return u = e.sent, e.next = 13, S(n, i);
                                case 13:
                                    return d = e.sent, e.abrupt("return", o.map((function(e, t) { return { pid: i[t].pid, allowance: o[t], tokenBalance: s[t], stakedBalance: u[t], earnings: d[t] } })));
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                L = Object(s.e)({
                    name: "Farms",
                    initialState: I,
                    reducers: {
                        setLoadArchivedFarmsData: function(e, t) {
                            var n = t.payload;
                            e.loadArchivedFarmsData = n
                        }
                    },
                    extraReducers: function(e) {
                        e.addCase(D.fulfilled, (function(e, t) { e.data = e.data.map((function(e) { var n = t.payload.find((function(t) { return t.pid === e.pid })); return Object(o.a)(Object(o.a)({}, e), n) })) })), e.addCase(N.fulfilled, (function(e, t) {
                            t.payload.forEach((function(t) {
                                var n = t.pid,
                                    a = e.data.findIndex((function(e) { return e.pid === n }));
                                e.data[a] = Object(o.a)(Object(o.a)({}, e.data[a]), {}, { userData: t })
                            })), e.userDataLoaded = !0
                        }))
                    }
                });
            L.actions.setLoadArchivedFarmsData, t.a = L.reducer
        },
        138: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() { return T })), n.d(t, "e", (function() { return g })), n.d(t, "f", (function() { return B })), n.d(t, "a", (function() { return A })), n.d(t, "c", (function() { return C }));
            var a = n(6),
                r = n(3),
                i = n.n(r),
                o = n(12),
                s = n(15),
                c = n(420),
                u = n.n(c),
                d = n(40),
                l = n(197),
                p = n(209),
                b = function(e) {
                    var t = e[0],
                        n = e[1],
                        a = e[2],
                        r = e[3],
                        i = e[4],
                        o = e[5];
                    return { userId: t.toNumber(), points: n.toNumber(), teamId: a.toNumber(), tokenId: i.toNumber(), nftAddress: r, isActive: o }
                },
                y = Object(d.v)(),
                m = function() {
                    var e = Object(o.a)(i.a.mark((function e(t) {
                        var n, a, r, o;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, fetch("".concat("https://profile.pancakeswap.com", "/api/users/").concat(t.toLowerCase()));
                                case 3:
                                    if ((n = e.sent).ok) { e.next = 6; break }
                                    return e.abrupt("return", "");
                                case 6:
                                    return e.next = 8, n.json();
                                case 8:
                                    return a = e.sent, r = a.username, o = void 0 === r ? "" : r, e.abrupt("return", o);
                                case 14:
                                    return e.prev = 14, e.t0 = e.catch(0), e.abrupt("return", "");
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 14]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                f = function() {
                    var e = Object(o.a)(i.a.mark((function e(t) {
                        var n, a, r, o, s;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, y.hasRegistered(t);
                                case 3:
                                    if (e.sent) { e.next = 6; break }
                                    return e.abrupt("return", null);
                                case 6:
                                    return e.next = 8, y.getUserProfile(t);
                                case 8:
                                    if (n = e.sent, a = b(n), r = a.tokenId, o = a.nftAddress, a.isActive) { e.next = 12; break }
                                    return e.abrupt("return", null);
                                case 12:
                                    return e.next = 14, Object(l.b)(o, r);
                                case 14:
                                    return s = e.sent, e.abrupt("return", s);
                                case 18:
                                    return e.prev = 18, e.t0 = e.catch(0), e.abrupt("return", null);
                                case 21:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 18]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                h = function() {
                    var e = Object(o.a)(i.a.mark((function e(t) {
                        var n, a, r, o, s, c, d, f, h, k, T, g, v, x;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, y.hasRegistered(t);
                                case 3:
                                    if (n = e.sent) { e.next = 6; break }
                                    return e.abrupt("return", { hasRegistered: n, profile: null });
                                case 6:
                                    return e.next = 8, y.getUserProfile(t);
                                case 8:
                                    return a = e.sent, r = b(a), o = r.userId, s = r.points, c = r.teamId, d = r.tokenId, f = r.nftAddress, h = r.isActive, e.next = 12, Object(p.a)(c);
                                case 12:
                                    return k = e.sent, e.next = 15, m(t);
                                case 15:
                                    if (T = e.sent, !h) { e.next = 21; break }
                                    return e.next = 19, Object(l.b)(f, d);
                                case 19:
                                    g = e.sent, u.a.set("profile_".concat(t), { username: T, avatar: "https://pancakeswap.finance/images/nfts/".concat(null === (v = g) || void 0 === v ? void 0 : v.images.sm) }, { domain: "pancakeswap.finance", secure: !0, expires: 30 });
                                case 21:
                                    return x = { userId: o, points: s, teamId: c, tokenId: d, username: T, nftAddress: f, isActive: h, nft: g, team: k }, e.abrupt("return", { hasRegistered: n, profile: x });
                                case 25:
                                    return e.prev = 25, e.t0 = e.catch(0), console.error(e.t0), e.abrupt("return", null);
                                case 29:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 25]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                k = { isInitialized: !1, isLoading: !0, hasRegistered: !1, data: null, profileAvatars: {} },
                T = Object(s.c)("profile/fetchProfileAvatar", function() {
                    var e = Object(o.a)(i.a.mark((function e(t) {
                        var n;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, f(t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", { account: t, nft: n });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                g = Object(s.c)("profile/fetchProfileUsername", function() {
                    var e = Object(o.a)(i.a.mark((function e(t) {
                        var n;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, m(t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", { account: t, username: n });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                v = Object(s.e)({
                    name: "profile",
                    initialState: k,
                    reducers: {
                        profileFetchStart: function(e) { e.isLoading = !0 },
                        profileFetchSucceeded: function(e, t) {
                            var n = t.payload,
                                a = n.profile,
                                r = n.hasRegistered;
                            e.isInitialized = !0, e.isLoading = !1, e.hasRegistered = r, e.data = a
                        },
                        profileFetchFailed: function(e) { e.isLoading = !1, e.isInitialized = !0 },
                        profileClear: function() { return Object(a.a)(Object(a.a)({}, k), {}, { isLoading: !1 }) },
                        addPoints: function(e, t) { e.data.points += t.payload }
                    },
                    extraReducers: function(e) {
                        e.addCase(g.fulfilled, (function(e, t) {
                            var n = t.payload,
                                r = n.account,
                                i = n.username;
                            e.profileAvatars[r] ? e.profileAvatars[r] = Object(a.a)(Object(a.a)({}, e.profileAvatars[r]), {}, { username: i }) : e.profileAvatars[r] = { username: i, nft: null }
                        })), e.addCase(T.fulfilled, (function(e, t) {
                            var n = t.payload,
                                r = n.account,
                                i = n.nft;
                            e.profileAvatars[r] ? e.profileAvatars[r] = Object(a.a)(Object(a.a)({}, e.profileAvatars[r]), {}, { nft: i }) : e.profileAvatars[r] = { username: null, nft: i }
                        }))
                    }
                }),
                x = v.actions,
                j = x.profileFetchStart,
                w = x.profileFetchSucceeded,
                O = x.profileFetchFailed,
                B = x.profileClear,
                A = x.addPoints,
                C = function(e) {
                    return function() {
                        var t = Object(o.a)(i.a.mark((function t(n) {
                            var a;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, n(j()), t.next = 4, h(e);
                                    case 4:
                                        a = t.sent, n(w(a)), t.next = 12;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t.catch(0), console.error(t.t0), n(O());
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 8]
                            ])
                        })));
                        return function(e) { return t.apply(this, arguments) }
                    }()
                };
            t.b = v.reducer
        },
        140: function(e, t, n) {
            "use strict";
            var a = n(11),
                r = n(0),
                i = n(7),
                o = n(45);
            t.a = function() {
                var e = Object(o.i)(),
                    t = Object(a.a)(e, 2),
                    n = t[0],
                    s = t[1];
                return { isDark: n, theme: Object(r.useContext)(i.a), toggleTheme: s }
            }
        },
        142: function(e, t, n) {
            "use strict";
            t.a = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4;
                return "".concat(e.substring(0, t), "...").concat(e.substring(e.length - n))
            }
        },
        145: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return i }));
            var a = n(11),
                r = n(0);

            function i(e, t) {
                var n = Object(r.useState)(e),
                    i = Object(a.a)(n, 2),
                    o = i[0],
                    s = i[1];
                return Object(r.useEffect)((function() { var n = setTimeout((function() { s(e) }), t); return function() { clearTimeout(n) } }), [e, t]), o
            }
        },
        146: function(e, t, n) {
            "use strict";
            var a = n(3),
                r = n.n(a),
                i = n(12),
                o = n(0),
                s = n(80),
                c = n(256),
                u = n(212),
                d = n(213),
                l = n(2),
                p = n(177),
                b = n(257),
                y = n(165),
                m = n(138),
                f = n(98),
                h = n(21);
            t.a = function() {
                var e = Object(h.b)().t,
                    t = Object(f.b)(),
                    n = Object(s.c)(),
                    a = n.activate,
                    k = n.deactivate,
                    T = Object(y.a)().toastError;
                return {
                    login: Object(o.useCallback)((function(t) {
                        var n = p.a[t];
                        n ? a(n, function() {
                            var t = Object(i.a)(r.a.mark((function t(i) {
                                return r.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!(i instanceof s.a)) { t.next = 7; break }
                                            return t.next = 3, Object(b.b)();
                                        case 3:
                                            t.sent && a(n), t.next = 9;
                                            break;
                                        case 7:
                                            window.localStorage.removeItem(l.yb), i instanceof u.b || i instanceof c.NoBscProviderError ? T(e("Provider Error"), e("No provider was found")) : i instanceof u.c || i instanceof d.a ? (n instanceof d.b && (n.walletConnectProvider = null), T(e("Authorization Error"), e("Please authorize to access your account"))) : T(i.name, i.message);
                                        case 9:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) { return t.apply(this, arguments) }
                        }()) : T(e("Unable to find connector"), e("The connector config is wrong"))
                    }), [e, a, T]),
                    logout: Object(o.useCallback)((function() { t(Object(m.f)()), k(), window.localStorage.getItem("walletconnect") && (p.a.walletconnect.close(), p.a.walletconnect.walletConnectProvider = null), window.localStorage.removeItem(l.yb) }), [k, t])
                }
            }
        },
        149: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_syrup","type":"address"},{"internalType":"contract IBEP20","name":"_rewardToken","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accCakePerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stopReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"syrup","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        150: function(e, t, n) {
            "use strict";

            function a(e) {
                var t, n;
                switch (e.split(":")[0].toLowerCase()) {
                    case "https":
                        return [e];
                    case "http":
                        return ["https".concat(e.substr(4)), e];
                    case "ipfs":
                        var a = null === (t = e.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === t ? void 0 : t[2];
                        return ["https://cloudflare-ipfs.com/ipfs/".concat(a, "/"), "https://ipfs.io/ipfs/".concat(a, "/")];
                    case "ipns":
                        var r = null === (n = e.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === n ? void 0 : n[2];
                        return ["https://cloudflare-ipfs.com/ipns/".concat(r, "/"), "https://ipfs.io/ipns/".concat(r, "/")];
                    default:
                        return []
                }
            }
            n.d(t, "a", (function() { return a }))
        },
        151: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n(258);
            t.a = function() { var e = Object(a.useContext)(r.a); return { fastRefresh: e.fast, slowRefresh: e.slow } }
        },
        152: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return r }));
            var a = n(4);

            function r(e) { if (e === a.d) return "BNB"; if (e instanceof a.j) return e.address; throw new Error("invalid currency") }
        },
        156: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return x })), n.d(t, "c", (function() { return m })), n.d(t, "b", (function() { return A }));
            var a, r, i, o = n(13),
                s = n(0),
                c = n(722),
                u = n(7),
                d = n(6),
                l = n(57),
                p = n(17),
                b = n(721),
                y = n(2),
                m = { SUCCESS: "success", DANGER: "danger", WARNING: "warning", INFO: "info" },
                f = n(1),
                h = ["toast", "onRemove", "style", "ttl"],
                k = (a = {}, Object(p.a)(a, m.INFO, y.xb.INFO), Object(p.a)(a, m.SUCCESS, y.xb.SUCCESS), Object(p.a)(a, m.DANGER, y.xb.DANGER), Object(p.a)(a, m.WARNING, y.xb.WARNING), a),
                T = u.e.div(r || (r = Object(o.a)(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                g = function(e) {
                    var t = e.toast,
                        n = e.onRemove,
                        a = e.style,
                        r = e.ttl,
                        i = Object(l.a)(e, h),
                        o = Object(s.useRef)(),
                        c = Object(s.useRef)(null),
                        u = Object(s.useRef)(n),
                        p = t.id,
                        m = t.title,
                        g = t.description,
                        v = t.type,
                        x = Object(s.useCallback)((function() { return u.current(p) }), [p, u]);
                    return Object(s.useEffect)((function() {
                        return o.current && clearTimeout(o.current), o.current = window.setTimeout((function() { x() }), r),
                            function() { clearTimeout(o.current) }
                    }), [o, r, x]), Object(f.jsx)(b.a, Object(d.a)(Object(d.a)({ nodeRef: c, timeout: 250, style: a }, i), {}, { children: Object(f.jsx)(T, { ref: c, onMouseEnter: function() { clearTimeout(o.current) }, onMouseLeave: function() { o.current && clearTimeout(o.current), o.current = window.setTimeout((function() { x() }), r) }, children: Object(f.jsx)(y.b, { title: m, variant: k[v], onClick: x, children: g }) }) }))
                },
                v = u.e.div(i || (i = Object(o.a)(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"]))),
                x = function(e) {
                    var t = e.toasts,
                        n = e.onRemove,
                        a = e.ttl,
                        r = void 0 === a ? 6e3 : a,
                        i = e.stackSpacing,
                        o = void 0 === i ? 24 : i;
                    return Object(f.jsx)(v, {
                        children: Object(f.jsx)(c.a, {
                            children: t.map((function(e, t) {
                                var a = (1e3 - t).toString(),
                                    i = 80 + t * o;
                                return Object(f.jsx)(g, { toast: e, onRemove: n, ttl: r, style: { top: "".concat(i, "px"), zIndex: a } }, e.id)
                            }))
                        })
                    })
                },
                j = n(37),
                w = n(20),
                O = n(21),
                B = n(142),
                A = function(e) {
                    var t = e.txHash,
                        n = e.children,
                        a = Object(w.a)().chainId,
                        r = Object(O.b)().t;
                    return Object(f.jsxs)(f.Fragment, { children: ["string" === typeof n ? Object(f.jsx)(y.pb, { as: "p", children: n }) : n, t && Object(f.jsxs)(y.O, { external: !0, href: Object(j.e)(t, "transaction", a), children: [r("View on BscScan"), ": ", Object(B.a)(t, 8, 0)] })] })
                }
        },
        159: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract CakeToken","name":"_cake","type":"address"},{"internalType":"contract SyrupBar","name":"_syrup","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"uint256","name":"_cakePerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cake","outputs":[{"internalType":"contract CakeToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cakePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"enterStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"leaveStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrator","outputs":[{"internalType":"contract IMigratorChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingCake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accCakePerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMigratorChef","name":"_migrator","type":"address"}],"name":"setMigrator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"syrup","outputs":[{"internalType":"contract SyrupBar","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplierNumber","type":"uint256"}],"name":"updateMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        160: function(e, t, n) {
            "use strict";
            var a = n(17),
                r = n(175),
                i = Object(a.a)({}, r.a.PANCAKE, { name: "Pancake Bunnies", address: { 56: "0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07", 97: "0x60935F36e4631F73f0f407e68642144e07aC7f5E" } });
            t.a = i
        },
        162: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return d }));
            var a = n(37),
                r = n(62),
                i = n(0),
                o = n(55),
                s = n(130),
                c = n(64),
                u = n(145);

            function d(e) {
                var t = Object(a.h)(e),
                    n = function(e) {
                        var t, n, d, l = Object(u.a)(e, 200),
                            p = Object(i.useMemo)((function() { if (!l || !Object(a.h)(l)) return [void 0]; try { return l ? [Object(r.namehash)("".concat(l.toLowerCase().substr(2), ".addr.reverse"))] : [void 0] } catch (e) { return [void 0] } }), [l]),
                            b = Object(c.e)(!1),
                            y = Object(o.c)(b, "resolver", p),
                            m = null === (t = y.result) || void 0 === t ? void 0 : t[0],
                            f = Object(c.f)(m && !Object(s.a)(m) ? m : void 0, !1),
                            h = Object(o.c)(f, "name", p),
                            k = l !== e;
                        return { ENSName: k ? null : null !== (n = null === (d = h.result) || void 0 === d ? void 0 : d[0]) && void 0 !== n ? n : null, loading: k || y.loading || h.loading }
                    }(t || void 0),
                    d = function(e) {
                        var t, n, a, d = Object(u.a)(e, 200),
                            l = Object(i.useMemo)((function() { if (!d) return [void 0]; try { return d ? [Object(r.namehash)(d)] : [void 0] } catch (e) { return [void 0] } }), [d]),
                            p = Object(c.e)(!1),
                            b = Object(o.c)(p, "resolver", l),
                            y = null === (t = b.result) || void 0 === t ? void 0 : t[0],
                            m = Object(c.f)(y && !Object(s.a)(y) ? y : void 0, !1),
                            f = Object(o.c)(m, "addr", l),
                            h = d !== e;
                        return { address: h ? null : null !== (n = null === (a = f.result) || void 0 === a ? void 0 : a[0]) && void 0 !== n ? n : null, loading: h || b.loading || f.loading }
                    }(e);
                return { loading: n.loading || d.loading, address: t || d.address, name: n.ENSName ? n.ENSName : !t && d.address && e || null }
            }
        },
        163: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return h })), n.d(t, "c", (function() { return k })), n.d(t, "a", (function() { return T }));
            var a = n(33),
                r = n(11),
                i = n(4),
                o = n(36);

            function s(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.v; if (e && !t) return !1; if (t && !e) return !0; if (e && t) { if (e.tradeType !== t.tradeType || !Object(i.o)(e.inputAmount.currency, t.inputAmount.currency) || !Object(i.o)(t.outputAmount.currency, t.outputAmount.currency)) throw new Error("Trades are not comparable"); return n.equalTo(o.v) ? e.executionPrice.lessThan(t.executionPrice) : e.executionPrice.raw.multiply(n.add(o.q)).lessThan(t.executionPrice) } }
            var c = n(263),
                u = n.n(c),
                d = n(0),
                l = n(20),
                p = n(45),
                b = n(92),
                y = n(52),
                m = n(54);

            function f(e, t) {
                var n = Object(l.a)().chainId,
                    i = n ? [Object(y.b)(e, n), Object(y.b)(t, n)] : [void 0, void 0],
                    s = Object(r.a)(i, 2),
                    c = s[0],
                    p = s[1],
                    m = Object(d.useMemo)((function() {
                        var e, t, r, i, s;
                        if (!n) return [];
                        var u = null !== (e = o.e[n]) && void 0 !== e ? e : [],
                            d = c && null !== (t = null === (r = o.a[n]) || void 0 === r ? void 0 : r[c.address]) && void 0 !== t ? t : [],
                            l = p && null !== (i = null === (s = o.a[n]) || void 0 === s ? void 0 : s[p.address]) && void 0 !== i ? i : [];
                        return [].concat(Object(a.a)(u), Object(a.a)(d), Object(a.a)(l))
                    }), [n, c, p]),
                    f = Object(d.useMemo)((function() { return u()(m, (function(e) { return m.map((function(t) { return [e, t] })) })) }), [m]),
                    h = Object(d.useMemo)((function() {
                        return c && p ? [
                            [c, p]
                        ].concat(Object(a.a)(m.map((function(e) { return [c, e] }))), Object(a.a)(m.map((function(e) { return [p, e] }))), Object(a.a)(f)).filter((function(e) { return Boolean(e[0] && e[1]) })).filter((function(e) {
                            var t = Object(r.a)(e, 2),
                                n = t[0],
                                a = t[1];
                            return n.address !== a.address
                        })).filter((function(e) {
                            var t = Object(r.a)(e, 2),
                                a = t[0],
                                i = t[1];
                            if (!n) return !0;
                            var s = o.l[n],
                                c = null === s || void 0 === s ? void 0 : s[a.address],
                                u = null === s || void 0 === s ? void 0 : s[i.address];
                            return !c && !u || !(c && !c.find((function(e) { return i.equals(e) }))) && !(u && !u.find((function(e) { return a.equals(e) })))
                        })) : []
                    }), [c, p, m, f, n]),
                    k = Object(b.c)(h);
                return Object(d.useMemo)((function() { return Object.values(k.filter((function(e) { return Boolean(e[0] === b.a.EXISTS && e[1]) })).reduce((function(e, t) { var n, a = Object(r.a)(t, 2)[1]; return e[a.liquidityToken.address] = null !== (n = e[a.liquidityToken.address]) && void 0 !== n ? n : a, e }), {})) }), [k])
            }

            function h(e, t) {
                var n = f(null === e || void 0 === e ? void 0 : e.currency, t),
                    a = Object(p.k)(),
                    c = Object(r.a)(a, 1)[0];
                return Object(d.useMemo)((function() {
                    if (e && t && n.length > 0) {
                        var a;
                        if (c) return null !== (a = i.l.bestTradeExactIn(n, e, t, { maxHops: 1, maxNumResults: 1 })[0]) && void 0 !== a ? a : null;
                        for (var r = null, u = 1; u <= 3; u++) {
                            var d, l = null !== (d = i.l.bestTradeExactIn(n, e, t, { maxHops: u, maxNumResults: 1 })[0]) && void 0 !== d ? d : null;
                            s(r, l, o.g) && (r = l)
                        }
                        return r
                    }
                    return null
                }), [n, e, t, c])
            }

            function k(e, t) {
                var n = f(e, null === t || void 0 === t ? void 0 : t.currency),
                    a = Object(p.k)(),
                    c = Object(r.a)(a, 1)[0];
                return Object(d.useMemo)((function() {
                    if (e && t && n.length > 0) {
                        var a;
                        if (c) return null !== (a = i.l.bestTradeExactOut(n, e, t, { maxHops: 1, maxNumResults: 1 })[0]) && void 0 !== a ? a : null;
                        for (var r = null, u = 1; u <= 3; u++) {
                            var d, l = null !== (d = i.l.bestTradeExactOut(n, e, t, { maxHops: u, maxNumResults: 1 })[0]) && void 0 !== d ? d : null;
                            s(r, l, o.g) && (r = l)
                        }
                        return r
                    }
                    return null
                }), [e, t, n, c])
            }

            function T(e, t) {
                var n = Object(m.h)(),
                    a = Object(l.a)().chainId,
                    r = Object(y.b)(e, a),
                    i = Object(y.b)(t, a);
                if (n) { if (r && Object.keys(n).includes(r.address)) return !0; if (i && Object.keys(n).includes(i.address)) return !0 }
                return !1
            }
        },
        164: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_oracleAddress","type":"address"},{"internalType":"address","name":"_adminAddress","type":"address"},{"internalType":"address","name":"_operatorAddress","type":"address"},{"internalType":"uint256","name":"_intervalSeconds","type":"uint256"},{"internalType":"uint256","name":"_bufferSeconds","type":"uint256"},{"internalType":"uint256","name":"_minBetAmount","type":"uint256"},{"internalType":"uint256","name":"_oracleUpdateAllowance","type":"uint256"},{"internalType":"uint256","name":"_treasuryFee","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BetBear","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BetBull","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"roundId","type":"uint256"},{"indexed":false,"internalType":"int256","name":"price","type":"int256"}],"name":"EndRound","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"roundId","type":"uint256"},{"indexed":false,"internalType":"int256","name":"price","type":"int256"}],"name":"LockRound","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"admin","type":"address"}],"name":"NewAdminAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"bufferSeconds","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"intervalSeconds","type":"uint256"}],"name":"NewBufferAndIntervalSeconds","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minBetAmount","type":"uint256"}],"name":"NewMinBetAmount","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"operator","type":"address"}],"name":"NewOperatorAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oracle","type":"address"}],"name":"NewOracle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oracleUpdateAllowance","type":"uint256"}],"name":"NewOracleUpdateAllowance","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"treasuryFee","type":"uint256"}],"name":"NewTreasuryFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardBaseCalAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"treasuryAmount","type":"uint256"}],"name":"RewardsCalculated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"StartRound","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokenRecovery","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TreasuryClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"MAX_TREASURY_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"betBear","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"betBull","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"bufferSeconds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"epochs","type":"uint256[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"claimable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"executeRound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"genesisLockOnce","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"genesisLockRound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"genesisStartOnce","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"genesisStartRound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"cursor","type":"uint256"},{"internalType":"uint256","name":"size","type":"uint256"}],"name":"getUserRounds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"components":[{"internalType":"enum PancakePredictionV2.Position","name":"position","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"internalType":"struct PancakePredictionV2.BetInfo[]","name":"","type":"tuple[]"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserRoundsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"intervalSeconds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"ledger","outputs":[{"internalType":"enum PancakePredictionV2.Position","name":"position","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minBetAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operatorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oracle","outputs":[{"internalType":"contract AggregatorV3Interface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oracleLatestRoundId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oracleUpdateAllowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"recoverToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"refundable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rounds","outputs":[{"internalType":"uint256","name":"epoch","type":"uint256"},{"internalType":"uint256","name":"startTimestamp","type":"uint256"},{"internalType":"uint256","name":"lockTimestamp","type":"uint256"},{"internalType":"uint256","name":"closeTimestamp","type":"uint256"},{"internalType":"int256","name":"lockPrice","type":"int256"},{"internalType":"int256","name":"closePrice","type":"int256"},{"internalType":"uint256","name":"lockOracleId","type":"uint256"},{"internalType":"uint256","name":"closeOracleId","type":"uint256"},{"internalType":"uint256","name":"totalAmount","type":"uint256"},{"internalType":"uint256","name":"bullAmount","type":"uint256"},{"internalType":"uint256","name":"bearAmount","type":"uint256"},{"internalType":"uint256","name":"rewardBaseCalAmount","type":"uint256"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"internalType":"bool","name":"oracleCalled","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bufferSeconds","type":"uint256"},{"internalType":"uint256","name":"_intervalSeconds","type":"uint256"}],"name":"setBufferAndIntervalSeconds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minBetAmount","type":"uint256"}],"name":"setMinBetAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operatorAddress","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_oracle","type":"address"}],"name":"setOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_oracleUpdateAllowance","type":"uint256"}],"name":"setOracleUpdateAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_treasuryFee","type":"uint256"}],"name":"setTreasuryFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasuryFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userRounds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]') },
        165: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n(184);
            t.a = function() { var e = Object(a.useContext)(r.b); if (void 0 === e) throw new Error("Toasts context undefined"); return e }
        },
        166: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return c })), n.d(t, "b", (function() { return u }));
            var a = n(0),
                r = n(80),
                i = n(28),
                o = (n(37), n(98)),
                s = n(138),
                c = function() {
                    var e = Object(r.c)().account,
                        t = Object(o.b)();
                    Object(a.useEffect)((function() { e && t(Object(s.c)(e)) }), [e, t])
                },
                u = function() {
                    var e = Object(i.c)((function(e) { return e.profile })),
                        t = e.isInitialized,
                        n = e.isLoading,
                        a = e.data,
                        r = e.hasRegistered;
                    return { profile: a, hasProfile: t && r, isInitialized: t, isLoading: n }
                }
        },
        171: function(e, t, n) {
            "use strict";
            var a = n(6),
                r = (n(0), n(2)),
                i = n(146),
                o = n(21),
                s = n(1);
            t.a = function(e) {
                var t = Object(o.b)().t,
                    n = Object(i.a)(),
                    c = n.login,
                    u = n.logout,
                    d = Object(r.Eb)(c, u, t).onPresentConnectModal;
                return Object(s.jsx)(r.m, Object(a.a)(Object(a.a)({ onClick: d }, e), {}, { children: t("Connect Wallet") }))
            }
        },
        173: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return i }));
            var a = n(395),
                r = n.n(a),
                i = ["https://bsc-dataseed1.ninicoin.io", "https://bsc-dataseed1.defibit.io", "https://bsc-dataseed.binance.org", "https://nodes.pancakeswap.com/"];
            t.a = function() { return r()(i) }
        },
        175: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", (function() { return a })),
                function(e) { e.PANCAKE = "pancake" }(a || (a = {}))
        },
        176: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return r }));
            var a = /^(([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+)eth(\/.*)?$/;

            function r(e) { var t = e.match(a); if (t) return { ensName: "".concat(t[1].toLowerCase(), "eth"), ensPath: t[4] } }
        },
        177: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return T })), n.d(t, "b", (function() { return g })), n.d(t, "c", (function() { return v }));
            var a, r = n(3),
                i = n.n(r),
                o = n(12),
                s = n(17),
                c = n(212),
                u = n(213),
                d = n(256),
                l = n(2),
                p = n(61),
                b = n(173),
                y = Object(b.a)(),
                m = parseInt("56", 10),
                f = new c.a({ supportedChainIds: [m] }),
                h = new u.b({ rpc: Object(s.a)({}, m, y), qrcode: !0, pollingInterval: 12e3 }),
                k = new d.BscConnector({ supportedChainIds: [m] }),
                T = (a = {}, Object(s.a)(a, l.D.Injected, f), Object(s.a)(a, l.D.WalletConnect, h), Object(s.a)(a, l.D.BSC, k), a),
                g = function(e) { var t = new p.a.providers.Web3Provider(e); return t.pollingInterval = 12e3, t },
                v = function() {
                    var e = Object(o.a)(i.a.mark((function e(t, n, a) {
                        var r, o, s, c, u, d;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!window.BinanceChain) { e.next = 6; break }
                                    return e.next = 3, window.BinanceChain.bnbSign(n, a);
                                case 3:
                                    return o = e.sent, s = o.signature, e.abrupt("return", s);
                                case 6:
                                    if (!(null === (r = t.provider) || void 0 === r ? void 0 : r.wc)) { e.next = 12; break }
                                    return u = p.a.utils.hexlify(p.a.utils.toUtf8Bytes(a)), e.next = 10, null === (c = t.provider) || void 0 === c ? void 0 : c.wc.signPersonalMessage([u, n]);
                                case 10:
                                    return d = e.sent, e.abrupt("return", d);
                                case 12:
                                    return e.abrupt("return", t.getSigner(n).signMessage(a));
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a) { return e.apply(this, arguments) }
                }()
        },
        181: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return b }));
            var a, r, i = n(6),
                o = n(57),
                s = n(13),
                c = (n(0), n(7)),
                u = n(1),
                d = ["size", "stroke"],
                l = Object(c.f)(a || (a = Object(s.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),
                p = c.e.svg(r || (r = Object(s.a)(["\n  animation: 2s ", " linear infinite;\n  height: ", ";\n  width: ", ";\n  path {\n    stroke: ", ";\n  }\n"])), l, (function(e) { return e.size }), (function(e) { return e.size }), (function(e) {
                    var t = e.stroke,
                        n = e.theme;
                    return null !== t && void 0 !== t ? t : n.colors.primary
                }));

            function b(e) {
                var t = e.size,
                    n = void 0 === t ? "1px" : t,
                    a = e.stroke,
                    r = Object(o.a)(e, d);
                return Object(u.jsx)(p, Object(i.a)(Object(i.a)({ viewBox: "0 0 0 2", fill: "none", xmlns: "http://www.w3.org/2000/svg", size: n, stroke: a }, r), {}, { children: Object(u.jsx)("path", { d: " ", strokeWidth: "0.1", strokeLinecap: "round", strokeLinejoin: "round" }) }))
            }
        },
        182: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return F })), n.d(t, "a", (function() { return N }));
            var a, r, i = n(11),
                o = n(13),
                s = n(0),
                c = n(7),
                u = n(2),
                d = n(85),
                l = n(45),
                p = n(268),
                b = n(20),
                y = n(28),
                m = n(21),
                f = n(94),
                h = n(95),
                k = n(25),
                T = n(37),
                g = n(181),
                v = n(1),
                x = c.e.div(a || (a = Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-decoration: none !important;\n  border-radius: 0.5rem;\n  padding: 0.25rem 0rem;\n  font-weight: 500;\n  font-size: 0.825rem;\n  color: ", ";\n"])), (function(e) { return e.theme.colors.primary })),
                j = c.e.div(r || (r = Object(o.a)(["\n  color: ", ";\n"])), (function(e) {
                    var t = e.pending,
                        n = e.success,
                        a = e.theme;
                    return t ? a.colors.primary : n ? a.colors.success : a.colors.failure
                }));

            function w(e) {
                var t, n, a = e.tx,
                    r = Object(b.a)().chainId,
                    i = null === a || void 0 === a ? void 0 : a.summary,
                    o = !(null === a || void 0 === a ? void 0 : a.receipt),
                    s = !o && a && (1 === (null === (t = a.receipt) || void 0 === t ? void 0 : t.status) || "undefined" === typeof(null === (n = a.receipt) || void 0 === n ? void 0 : n.status));
                return r ? Object(v.jsxs)(x, { pending: o, success: s, children: [Object(v.jsx)(u.P, { href: Object(T.e)(a.hash, "transaction", r), children: null !== i && void 0 !== i ? i : a.hash }), Object(v.jsx)(j, { pending: o, success: s, children: o ? Object(v.jsx)(g.a, {}) : s ? Object(v.jsx)(u.v, { color: "success" }) : Object(v.jsx)(u.A, { color: "failure" }) })] }) : null
            }

            function O(e, t) { return t.addedTime - e.addedTime }

            function B(e) { return Object(v.jsx)(u.H, { flexDirection: "column", children: e.map((function(e) { return Object(v.jsx)(w, { tx: e }, e.hash + e.addedTime) })) }) }
            var A, C, E = function(e) {
                    var t = e.onDismiss,
                        n = Object(b.a)(),
                        a = n.account,
                        r = n.chainId,
                        i = Object(y.b)(),
                        o = Object(f.b)(),
                        c = Object(m.b)().t,
                        d = Object(s.useMemo)((function() { return Object.values(o).filter(f.a).sort(O) }), [o]),
                        l = d.filter((function(e) { return !e.receipt })),
                        p = d.filter((function(e) { return e.receipt })),
                        T = Object(s.useCallback)((function() { r && i(Object(h.c)({ chainId: r })) }), [i, r]);
                    return Object(v.jsx)(u.U, { title: c("Recent Transactions"), headerBackground: "gradients.cardHeader", onDismiss: t, children: a && Object(v.jsx)(u.W, { children: l.length || p.length ? Object(v.jsxs)(v.Fragment, { children: [Object(v.jsxs)(k.a, { mb: "1rem", style: { justifyContent: "space-between" }, children: [Object(v.jsx)(u.pb, { children: c("Recent Transactions") }), Object(v.jsx)(u.m, { variant: "tertiary", scale: "xs", onClick: T, children: c("clear all") })] }), B(l), B(p)] }) : Object(v.jsx)(u.pb, { children: c("No recent transactions") }) }) })
                },
                P = function() {
                    var e = Object(u.Cb)(Object(v.jsx)(E, {})),
                        t = Object(i.a)(e, 1)[0];
                    return Object(v.jsx)(v.Fragment, { children: Object(v.jsx)(u.m, { variant: "text", p: 0, onClick: t, ml: "16px", children: Object(v.jsx)(u.L, { color: "textSubtle", width: "24px" }) }) })
                },
                S = n(69),
                I = Object(c.e)(u.H)(A || (A = Object(o.a)(["\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px;\n  width: 100%;\n  border-bottom: 1px solid ", ";\n"])), (function(e) { return e.theme.colors.cardBorder })),
                F = function(e) {
                    var t = e.title,
                        n = e.subtitle,
                        a = e.helper,
                        r = e.backTo,
                        o = e.noConfig,
                        s = void 0 !== o && o,
                        c = Object(l.c)(),
                        b = Object(i.a)(c, 1)[0];
                    return Object(v.jsxs)(I, { children: [Object(v.jsxs)(u.H, { alignItems: "center", mr: s ? 0 : "16px", children: [r && Object(v.jsx)(u.M, { as: d.a, to: r, children: Object(v.jsx)(u.c, { width: "32px" }) }), Object(v.jsxs)(u.H, { flexDirection: "column", children: [Object(v.jsx)(u.J, { as: "h2", mb: "8px", children: t }), Object(v.jsxs)(u.H, { alignItems: "center", children: [a && Object(v.jsx)(S.a, { text: a, mr: "4px" }), Object(v.jsx)(u.pb, { color: "textSubtle", fontSize: "14px", children: n })] })] })] }), !s && Object(v.jsxs)(u.H, { alignItems: "center", children: [Object(v.jsx)(u.db, { show: b, children: Object(v.jsx)(p.a, {}) }), Object(v.jsx)(P, {})] })] })
                },
                D = Object(c.e)(u.p)(C || (C = Object(o.a)(["\n  border-radius: 24px;\n  max-width: 436px;\n  width: 100%;\n  z-index: 1;\n"])));

            function N(e) { var t = e.children; return Object(v.jsx)(D, { children: t }) }
        },
        183: function(e, t, n) {
            "use strict";
            var a = n(3),
                r = n.n(a),
                i = n(12),
                o = n(15),
                s = n(4),
                c = n(0),
                u = n(28),
                d = n(20),
                l = n(73),
                p = n(424),
                b = n(425),
                y = n.n(b),
                m = n(253),
                f = n(176),
                h = n(150),
                k = new y.a({ allErrors: !0 }).compile(p);

            function T(e, t) { return g.apply(this, arguments) }

            function g() {
                return (g = Object(i.a)(r.a.mark((function e(t, n) {
                    var a, i, o, s, c, u, d, l, p, b, y, T, g;
                    return r.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(a = Object(f.a)(t))) { e.next = 23; break }
                                return e.prev = 2, e.next = 5, n(a.ensName);
                            case 5:
                                s = e.sent, e.next = 12;
                                break;
                            case 8:
                                throw e.prev = 8, e.t0 = e.catch(2), console.error("Failed to resolve ENS name: ".concat(a.ensName), e.t0), new Error("Failed to resolve ENS name: ".concat(a.ensName));
                            case 12:
                                e.prev = 12, c = Object(m.a)(s), e.next = 20;
                                break;
                            case 16:
                                throw e.prev = 16, e.t1 = e.catch(12), console.error("Failed to translate contenthash to URI", s), new Error("Failed to translate contenthash to URI: ".concat(s));
                            case 20:
                                i = Object(h.a)("".concat(c).concat(null !== (o = a.ensPath) && void 0 !== o ? o : "")), e.next = 24;
                                break;
                            case 23:
                                i = Object(h.a)(t);
                            case 24:
                                u = 0;
                            case 25:
                                if (!(u < i.length)) { e.next = 55; break }
                                return d = i[u], l = u === i.length - 1, p = void 0, e.prev = 29, e.next = 32, fetch(d);
                            case 32:
                                p = e.sent, e.next = 41;
                                break;
                            case 35:
                                if (e.prev = 35, e.t2 = e.catch(29), console.error("Failed to fetch list", t, e.t2), !l) { e.next = 40; break }
                                throw new Error("Failed to download list ".concat(t));
                            case 40:
                                return e.abrupt("continue", 52);
                            case 41:
                                if (p.ok) { e.next = 45; break }
                                if (!l) { e.next = 44; break }
                                throw new Error("Failed to download list ".concat(t));
                            case 44:
                                return e.abrupt("continue", 52);
                            case 45:
                                return e.next = 47, p.json();
                            case 47:
                                if (b = e.sent, k(b)) { e.next = 51; break }
                                throw g = null !== (y = null === (T = k.errors) || void 0 === T ? void 0 : T.reduce((function(e, t) { var n, a = "".concat(t.dataPath, " ").concat(null !== (n = t.message) && void 0 !== n ? n : ""); return e.length > 0 ? "".concat(e, "; ").concat(a) : "".concat(a) }), "")) && void 0 !== y ? y : "unknown error", new Error("Token list failed validation: ".concat(g));
                            case 51:
                                return e.abrupt("return", b);
                            case 52:
                                u++, e.next = 25;
                                break;
                            case 55:
                                throw new Error("Unrecognized list URL protocol.");
                            case 56:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 8],
                        [12, 16],
                        [29, 35]
                    ])
                })))).apply(this, arguments)
            }
            var v = n(104),
                x = n(62),
                j = [{ constant: !0, inputs: [{ name: "node", type: "bytes32" }], name: "resolver", outputs: [{ name: "resolverAddress", type: "address" }], payable: !1, stateMutability: "view", type: "function" }],
                w = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                O = [{ constant: !0, inputs: [{ internalType: "bytes32", name: "node", type: "bytes32" }], name: "contenthash", outputs: [{ internalType: "bytes", name: "", type: "bytes" }], payable: !1, stateMutability: "view", type: "function" }];

            function B(e, t) { return new v.b(e, O, t) }

            function A() {
                return (A = Object(i.a)(r.a.mark((function e(t, n) {
                    var a, i, o;
                    return r.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a = new v.b(w, j, n), i = Object(x.namehash)(t), e.next = 4, a.resolver(i);
                            case 4:
                                return o = e.sent, e.abrupt("return", B(o, n).contenthash(i));
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            t.a = function() {
                var e = Object(d.a)().library,
                    t = Object(d.a)().chainId,
                    n = Object(u.b)(),
                    a = Object(c.useCallback)((function(n) { if (t !== s.a.MAINNET) throw new Error("Could not construct mainnet ENS resolver"); return function(e, t) { return A.apply(this, arguments) }(n, e) }), [t, e]);
                return Object(c.useCallback)(function() {
                    var e = Object(i.a)(r.a.mark((function e(t) {
                        var i, s, c = arguments;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i = !(c.length > 1 && void 0 !== c[1]) || c[1], s = Object(o.g)(), i && n(l.e.pending({ requestId: s, url: t })), e.abrupt("return", T(t, a).then((function(e) { return i && n(l.e.fulfilled({ url: t, tokenList: e, requestId: s })), e })).catch((function(e) { throw console.error("Failed to get list at url ".concat(t), e), i && n(l.e.rejected({ url: t, requestId: s, errorMessage: e.message })), e })));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(), [n, a])
            }
        },
        184: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return u })), n.d(t, "c", (function() { return d })), n.d(t, "a", (function() { return p }));
            var a = n(33),
                r = n(11),
                i = n(0),
                o = n(117),
                s = n(156),
                c = n(1),
                u = Object(i.createContext)(void 0),
                d = function(e) {
                    var t = e.children,
                        n = Object(i.useState)([]),
                        d = Object(r.a)(n, 2),
                        l = d[0],
                        p = d[1],
                        b = Object(i.useCallback)((function(e) {
                            var t = e.title,
                                n = e.description,
                                r = e.type;
                            p((function(e) {
                                var i = Object(o.kebabCase)(t),
                                    s = e.filter((function(e) { return e.id !== i }));
                                return [{ id: i, title: t, description: n, type: r }].concat(Object(a.a)(s))
                            }))
                        }), [p]);
                    return Object(c.jsx)(u.Provider, { value: { toasts: l, clear: function() { return p([]) }, remove: function(e) { p((function(t) { return t.filter((function(t) { return t.id !== e })) })) }, toastError: function(e, t) { return b({ title: e, description: t, type: s.c.DANGER }) }, toastInfo: function(e, t) { return b({ title: e, description: t, type: s.c.INFO }) }, toastSuccess: function(e, t) { return b({ title: e, description: t, type: s.c.SUCCESS }) }, toastWarning: function(e, t) { return b({ title: e, description: t, type: s.c.WARNING }) } }, children: t })
                },
                l = n(165),
                p = function() {
                    var e = Object(l.a)(),
                        t = e.toasts,
                        n = e.remove;
                    return Object(c.jsx)(s.a, { toasts: t, onRemove: function(e) { return n(e) } })
                }
        },
        186: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return r }));
            var a = [{ id: "511110000", type: "ifo", title: "Kalmar", badge: "ifo-kalm.svg" }, { id: "511100000", type: "ifo", title: "Hotcross", badge: "ifo-hotcross.svg" }, { id: "511090000", type: "ifo", title: "Horizon Protocol", badge: "ifo-hzn.svg" }, { id: "511080000", type: "ifo", title: "Belt", badge: "ifo-belt.svg" }, { id: "511070000", type: "ifo", title: "Yieldwatch", badge: "ifo-watch.svg" }, { id: "511060000", type: "ifo", title: "Berry", badge: "ifo-bry.svg" }, { id: "511050000", type: "ifo", title: "Soteria", badge: "ifo-wsote.svg" }, { id: "511040000", type: "ifo", title: "Helmet", badge: "ifo-helmet.svg" }, { id: "511030000", type: "ifo", title: "Tenet", badge: "ifo-ten.svg" }, { id: "511020000", type: "ifo", title: "Ditto", badge: "ifo-ditto.svg" }, { id: "511010000", type: "ifo", title: "Blink", badge: "ifo-blk.svg" }, { id: "512010001", type: "teambattle", title: "Easter Champion: Gold", badge: "easter-champion-gold.svg" }, { id: "512010002", type: "teambattle", title: "Easter Top 500: Gold", badge: "easter-top-500-gold.svg" }, { id: "512010003", type: "teambattle", title: "Easter Top 500: Gold", badge: "easter-top-500-gold.svg" }, { id: "512010004", type: "teambattle", title: "Easter Top 500: Gold", badge: "easter-top-500-gold.svg" }, { id: "512010005", type: "teambattle", title: "Easter Participant: Gold", badge: "easter-participant-gold.svg" }, { id: "512010006", type: "teambattle", title: "Easter Champion: Silver", badge: "easter-champion-silver.svg" }, { id: "512010007", type: "teambattle", title: "Easter Top 500: Silver", badge: "easter-top-500-silver.svg" }, { id: "512010008", type: "teambattle", title: "Easter Top 500: Silver", badge: "easter-top-500-silver.svg" }, { id: "512010009", type: "teambattle", title: "Easter Top 500: Silver", badge: "easter-top-500-silver.svg" }, { id: "512010010", type: "teambattle", title: "Easter Participant: Silver", badge: "easter-participant-silver.svg" }, { id: "512010011", type: "teambattle", title: "Easter Champion: Bronze", badge: "easter-champion-bronze.svg" }, { id: "512010012", type: "teambattle", title: "Easter Top 500: Bronze", badge: "easter-top-500-bronze.svg" }, { id: "512010013", type: "teambattle", title: "Easter Top 500: Bronze", badge: "easter-top-500-bronze.svg" }, { id: "512010014", type: "teambattle", title: "Easter Top 500: Bronze", badge: "easter-top-500-bronze.svg" }, { id: "512010015", type: "teambattle", title: "Easter Participant: Bronze", badge: "easter-participant-bronze.svg" }, { id: "513010001", type: "participation", title: "Syrup Soaker", description: "Took a dip in the early days of the Auto MGT Pool", badge: "syrup-soaker.svg" }, { id: "514010001", type: "participation", title: "Clairvoyant", description: "Played a round of Prediction before round 12,120", badge: "clairvoyant.svg" }, { id: "515010001", type: "participation", title: "Lottie", description: "Joined a round in the early days of Lottery V2", badge: "lottie.svg" }, { id: "515020001", type: "participation", title: "Lucky", description: "Won a round in the early days of Lottery V2", badge: "lucky.svg" }, { id: "515030001", type: "participation", title: "Baller", description: "Top 100 ticket buyer in the early days of Lottery V2", badge: "baller.svg" }],
                r = new Map;
            a.forEach((function(e) { r.set(e.id, e) }))
        },
        187: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return i })), n.d(t, "b", (function() { return o }));
            var a = n(0),
                r = n(37);

            function i(e, t) {
                if (0 === t.length) return e;
                var n = Object(r.h)(t);
                if (n) return e.filter((function(e) { return e.address === n }));
                var a = t.toLowerCase().split(/\s+/).filter((function(e) { return e.length > 0 }));
                if (0 === a.length) return e;
                var i = function(e) { var t = e.toLowerCase().split(/\s+/).filter((function(e) { return e.length > 0 })); return a.every((function(e) { return 0 === e.length || t.some((function(t) { return t.startsWith(e) || t.endsWith(e) })) })) };
                return e.filter((function(e) {
                    var t = e.symbol,
                        n = e.name;
                    return t && i(t) || n && i(n)
                }))
            }

            function o(e, t) {
                return Object(a.useMemo)((function() {
                    if (!e) return [];
                    var n = t.toLowerCase().split(/\s+/).filter((function(e) { return e.length > 0 }));
                    if (n.length > 1) return e;
                    var a = [],
                        r = [],
                        i = [];
                    return e.map((function(e) { var o, s; return (null === (o = e.symbol) || void 0 === o ? void 0 : o.toLowerCase()) === n[0] ? a.push(e) : (null === (s = e.symbol) || void 0 === s ? void 0 : s.toLowerCase().startsWith(t.toLowerCase().trim())) ? r.push(e) : i.push(e) })), [].concat(a, r, i)
                }), [e, t])
            }
        },
        197: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return b })), n.d(t, "b", (function() { return f }));
            var a = n(3),
                r = n.n(a),
                i = n(12),
                o = n(337),
                s = n(56),
                c = n(160),
                u = n(175),
                d = n(35),
                l = n(40),
                p = function(e) { return e.startsWith("ipfs://") ? "".concat(s.h, "/").concat(e.slice(6)) : e },
                b = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.a.PANCAKE; return Object(d.a)(c.a[e].address) },
                y = function() {
                    var e = Object(i.a)(r.a.mark((function e(t) {
                        var n, a, i, o;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, !(n = localStorage.getItem(t))) { e.next = 5; break }
                                    return a = JSON.parse(n), e.abrupt("return", a);
                                case 5:
                                    return e.next = 7, fetch(t);
                                case 7:
                                    if ((i = e.sent).ok) { e.next = 10; break }
                                    throw new Error("Unable to fetch uriData");
                                case 10:
                                    return e.next = 12, i.json();
                                case 12:
                                    return o = e.sent, localStorage.setItem(t, JSON.stringify(o)), e.abrupt("return", o);
                                case 17:
                                    return e.prev = 17, e.t0 = e.catch(0), console.error(e.t0), e.abrupt("return", null);
                                case 21:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 17]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                m = function() {
                    var e = Object(i.a)(r.a.mark((function e(t, n) {
                        var a, i, o;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, a = Object(l.l)(t), e.next = 4, a.tokenURI(n);
                                case 4:
                                    return i = e.sent, e.next = 7, y(p(i));
                                case 7:
                                    if (o = e.sent) { e.next = 10; break }
                                    return e.abrupt("return", null);
                                case 10:
                                    return e.abrupt("return", o);
                                case 13:
                                    return e.prev = 13, e.t0 = e.catch(0), console.error("getTokenUriData", e.t0), e.abrupt("return", null);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 13]
                        ])
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                f = function() {
                    var e = Object(i.a)(r.a.mark((function e(t, n) {
                        var a;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, m(t, n);
                                case 2:
                                    if (a = e.sent) { e.next = 5; break }
                                    return e.abrupt("return", null);
                                case 5:
                                    return e.abrupt("return", o.a.pancake.find((function(e) { return a.image.includes(e.identifier) })));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }()
        },
        20: function(e, t, n) {
            "use strict";
            var a = n(6),
                r = n(11),
                i = n(57),
                o = n(0),
                s = n(80),
                c = n(99),
                u = ["library", "chainId"];
            t.a = function() {
                var e = Object(s.c)(),
                    t = e.library,
                    n = e.chainId,
                    d = Object(i.a)(e, u),
                    l = Object(o.useRef)(t),
                    p = Object(o.useState)(t || c.a),
                    b = Object(r.a)(p, 2),
                    y = b[0],
                    m = b[1];
                return Object(o.useEffect)((function() { t !== l.current && (m(t || c.a), l.current = t) }), [t]), Object(a.a)({ library: y, chainId: null !== n && void 0 !== n ? n : parseInt("56", 10) }, d)
            }
        },
        202: function(e, t, n) {
            "use strict";
            var a, r = n(13),
                i = n(7).e.span(a || (a = Object(r.a)(["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    2% {\n      content: '..';\n    }\n    6% {\n      content: '...';\n    }\n  }\n"])));
            t.a = i
        },
        205: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_pancakeProfileAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"},{"internalType":"uint256","name":"_campaignId","type":"uint256"},{"internalType":"uint256","name":"_thresholdToClaim","type":"uint256"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"addIFOAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"checkClaimStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"address[]","name":"_contractAddresses","type":"address[]"}],"name":"checkClaimStatuses","outputs":[{"internalType":"bool[]","name":"","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"getPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"ifos","outputs":[{"internalType":"uint256","name":"thresholdToClaim","type":"uint256"},{"internalType":"uint256","name":"campaignId","type":"uint256"},{"internalType":"uint256","name":"numberPoints","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        206: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_cakeTokenAddress","type":"address"},{"internalType":"address","name":"_randomGeneratorAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AdminTokenRecovery","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"lotteryId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"firstTicketIdNextLottery","type":"uint256"}],"name":"LotteryClose","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"lotteryId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"injectedAmount","type":"uint256"}],"name":"LotteryInjection","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"lotteryId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"finalNumber","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"countWinningTickets","type":"uint256"}],"name":"LotteryNumberDrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"lotteryId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"priceTicketInCake","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"firstTicketId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"injectedAmount","type":"uint256"}],"name":"LotteryOpen","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"address","name":"treasury","type":"address"},{"indexed":false,"internalType":"address","name":"injector","type":"address"}],"name":"NewOperatorAndTreasuryAndInjectorAddresses","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"randomGenerator","type":"address"}],"name":"NewRandomGenerator","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"lotteryId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"numberTickets","type":"uint256"}],"name":"TicketsClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":true,"internalType":"uint256","name":"lotteryId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"numberTickets","type":"uint256"}],"name":"TicketsPurchase","type":"event"},{"inputs":[],"name":"MAX_LENGTH_LOTTERY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_TREASURY_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_DISCOUNT_DIVISOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_LENGTH_LOTTERY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lotteryId","type":"uint256"},{"internalType":"uint32[]","name":"_ticketNumbers","type":"uint32[]"}],"name":"buyTickets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_discountDivisor","type":"uint256"},{"internalType":"uint256","name":"_priceTicket","type":"uint256"},{"internalType":"uint256","name":"_numberTickets","type":"uint256"}],"name":"calculateTotalPriceForBulkTickets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_randomGeneratorAddress","type":"address"}],"name":"changeRandomGenerator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lotteryId","type":"uint256"},{"internalType":"uint256[]","name":"_ticketIds","type":"uint256[]"},{"internalType":"uint32[]","name":"_brackets","type":"uint32[]"}],"name":"claimTickets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lotteryId","type":"uint256"}],"name":"closeLottery","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentLotteryId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentTicketId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lotteryId","type":"uint256"},{"internalType":"bool","name":"_autoInjection","type":"bool"}],"name":"drawFinalNumberAndMakeLotteryClaimable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lotteryId","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"injectFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"injectorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxNumberTicketsPerBuyOrClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPriceTicketInCake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPriceTicketInCake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operatorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingInjectionNextLottery","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"randomGenerator","outputs":[{"internalType":"contract IRandomNumberGenerator","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_tokenAmount","type":"uint256"}],"name":"recoverWrongTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxNumberTicketsPerBuy","type":"uint256"}],"name":"setMaxNumberTicketsPerBuy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minPriceTicketInCake","type":"uint256"},{"internalType":"uint256","name":"_maxPriceTicketInCake","type":"uint256"}],"name":"setMinAndMaxTicketPriceInCake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operatorAddress","type":"address"},{"internalType":"address","name":"_treasuryAddress","type":"address"},{"internalType":"address","name":"_injectorAddress","type":"address"}],"name":"setOperatorAndTreasuryAndInjectorAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_endTime","type":"uint256"},{"internalType":"uint256","name":"_priceTicketInCake","type":"uint256"},{"internalType":"uint256","name":"_discountDivisor","type":"uint256"},{"internalType":"uint256[6]","name":"_rewardsBreakdown","type":"uint256[6]"},{"internalType":"uint256","name":"_treasuryFee","type":"uint256"}],"name":"startLottery","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"viewCurrentLotteryId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lotteryId","type":"uint256"}],"name":"viewLottery","outputs":[{"components":[{"internalType":"enum PancakeSwapLottery.Status","name":"status","type":"uint8"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"priceTicketInCake","type":"uint256"},{"internalType":"uint256","name":"discountDivisor","type":"uint256"},{"internalType":"uint256[6]","name":"rewardsBreakdown","type":"uint256[6]"},{"internalType":"uint256","name":"treasuryFee","type":"uint256"},{"internalType":"uint256[6]","name":"cakePerBracket","type":"uint256[6]"},{"internalType":"uint256[6]","name":"countWinnersPerBracket","type":"uint256[6]"},{"internalType":"uint256","name":"firstTicketId","type":"uint256"},{"internalType":"uint256","name":"firstTicketIdNextLottery","type":"uint256"},{"internalType":"uint256","name":"amountCollectedInCake","type":"uint256"},{"internalType":"uint32","name":"finalNumber","type":"uint32"}],"internalType":"struct PancakeSwapLottery.Lottery","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_ticketIds","type":"uint256[]"}],"name":"viewNumbersAndStatusesForTicketIds","outputs":[{"internalType":"uint32[]","name":"","type":"uint32[]"},{"internalType":"bool[]","name":"","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lotteryId","type":"uint256"},{"internalType":"uint256","name":"_ticketId","type":"uint256"},{"internalType":"uint32","name":"_bracket","type":"uint32"}],"name":"viewRewardsForTicketId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_lotteryId","type":"uint256"},{"internalType":"uint256","name":"_cursor","type":"uint256"},{"internalType":"uint256","name":"_size","type":"uint256"}],"name":"viewUserInfoForLotteryId","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint32[]","name":"","type":"uint32[]"},{"internalType":"bool[]","name":"","type":"bool[]"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]') },
        207: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"contract IERC20","name":"_receiptToken","type":"address"},{"internalType":"contract IMasterChef","name":"_masterchef","type":"address"},{"internalType":"address","name":"_admin","type":"address"},{"internalType":"address","name":"_treasury","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastDepositedTime","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"performanceFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"callFee","type":"uint256"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"MAX_CALL_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_PERFORMANCE_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_WITHDRAW_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_WITHDRAW_FEE_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"available","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateHarvestCakeRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateTotalPendingCakeRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"callFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getPricePerFullShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"inCaseTokensGetStuck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastHarvestedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"contract IMasterChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"performanceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"receiptToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_admin","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_callFee","type":"uint256"}],"name":"setCallFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_performanceFee","type":"uint256"}],"name":"setPerformanceFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasury","type":"address"}],"name":"setTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawFee","type":"uint256"}],"name":"setWithdrawFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawFeePeriod","type":"uint256"}],"name":"setWithdrawFeePeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"lastDepositedTime","type":"uint256"},{"internalType":"uint256","name":"cakeAtLastUserAction","type":"uint256"},{"internalType":"uint256","name":"lastUserActionTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawFeePeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]') },
        209: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return f })), n.d(t, "b", (function() { return h }));
            var a = n(17),
                r = n(6),
                i = n(3),
                o = n.n(i),
                s = n(12),
                c = n(114),
                u = n.n(c),
                d = n(210),
                l = n(40),
                p = n(51),
                b = n(236),
                y = n(35),
                m = Object(l.v)(),
                f = function() {
                    var e = Object(s.a)(o.a.mark((function e(t) {
                        var n, a, r, i, s, c;
                        return o.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, m.getTeamProfile(t);
                                case 3:
                                    return n = e.sent, a = n[0], r = n[2], i = n[3], s = n[4], c = d.a.find((function(e) { return e.id === t })), e.abrupt("return", u()({}, c, { isJoinable: s, name: a, users: r.toNumber(), points: i.toNumber() }));
                                case 12:
                                    return e.prev = 12, e.t0 = e.catch(0), e.abrupt("return", null);
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 12]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                h = function() {
                    var e = Object(s.a)(o.a.mark((function e() {
                        var t, n, i, s, c, l;
                        return o.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, t = d.a.reduce((function(e, t) { return Object(r.a)(Object(r.a)({}, e), {}, Object(a.a)({}, t.id, t)) }), {}), e.next = 4, m.numberTeams();
                                case 4:
                                    for (n = e.sent, i = [], s = 1; s <= n; s++) i.push({ address: Object(y.o)(), name: "getTeamProfile", params: [s] });
                                    return e.next = 9, Object(p.b)(b, i);
                                case 9:
                                    return c = e.sent, l = c.reduce((function(e, t, n) {
                                        var i = t[0],
                                            o = t[2],
                                            s = t[3],
                                            c = t[4];
                                        return Object(r.a)(Object(r.a)({}, e), {}, Object(a.a)({}, n + 1, { name: i, users: o.toNumber(), points: s.toNumber(), isJoinable: c }))
                                    }), {}), e.abrupt("return", u()({}, t, l));
                                case 14:
                                    return e.prev = 14, e.t0 = e.catch(0), e.abrupt("return", null);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 14]
                        ])
                    })));
                    return function() { return e.apply(this, arguments) }
                }()
        },
        21: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return f })), n.d(t, "b", (function() { return h }));
            var a = n(3),
                r = n.n(a),
                i = n(12),
                o = n(6),
                s = n(11),
                c = n(0),
                u = n(101),
                d = n(429),
                l = n(133),
                p = n(1),
                b = { isFetching: !0, currentLanguage: u.a },
                y = new Map;
            y.set(u.a.locale, d);
            var m = Object(c.createContext)(void 0),
                f = function(e) {
                    var t = e.children,
                        n = Object(c.useState)((function() { var e = Object(l.c)(); return Object(o.a)(Object(o.a)({}, b), {}, { currentLanguage: u.c[e] }) })),
                        a = Object(s.a)(n, 2),
                        d = a[0],
                        f = a[1],
                        h = d.currentLanguage;
                    Object(c.useEffect)((function() {
                        (function() {
                            var e = Object(i.a)(r.a.mark((function e() {
                                var t, n, a;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ((t = Object(l.c)()) === u.a.locale) { e.next = 7; break }
                                            return n = y.get(u.a.locale), e.next = 5, Object(l.b)(t);
                                        case 5:
                                            a = e.sent, y.set(t, Object(o.a)(Object(o.a)({}, n), a));
                                        case 7:
                                            f((function(e) { return Object(o.a)(Object(o.a)({}, e), {}, { isFetching: !1 }) }));
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        })()()
                    }), [f]);
                    var k = function() {
                            var e = Object(i.a)(r.a.mark((function e(t) {
                                var n, a;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (y.has(t.locale)) { e.next = 11; break }
                                            return f((function(e) { return Object(o.a)(Object(o.a)({}, e), {}, { isFetching: !0 }) })), e.next = 4, Object(l.b)(t.locale);
                                        case 4:
                                            n = e.sent, a = y.get(u.a.locale), y.set(t.locale, Object(o.a)(Object(o.a)({}, a), n)), localStorage.setItem(l.a, t.locale), f((function(e) { return Object(o.a)(Object(o.a)({}, e), {}, { isFetching: !1, currentLanguage: t }) })), e.next = 13;
                                            break;
                                        case 11:
                                            localStorage.setItem(l.a, t.locale), f((function(e) { return Object(o.a)(Object(o.a)({}, e), {}, { isFetching: !1, currentLanguage: t }) }));
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }(),
                        T = Object(c.useCallback)((function(e, t) {
                            var n = (y.has(h.locale) ? y.get(h.locale) : y.get(u.a.locale))[e] || e;
                            if (n.match(/%\S+?%/gm) && t) {
                                var a = n;
                                return Object.keys(t).forEach((function(e) {
                                    var n = new RegExp("%".concat(e, "%"), "g");
                                    a = a.replace(n, t[e].toString())
                                })), a
                            }
                            return n
                        }), [h]);
                    return Object(p.jsx)(m.Provider, { value: Object(o.a)(Object(o.a)({}, d), {}, { setLanguage: k, t: T }), children: t })
                },
                h = function() { var e = Object(c.useContext)(m); if (void 0 === e) throw new Error("Language context is undefined"); return e }
        },
        210: function(e, t, n) {
            "use strict";
            var a = n(56),
                r = [{ id: 1, name: "Syrup Storm", description: "The storm's a-comin! Watch out! These bulls are stampeding in a syrupy surge!", images: { lg: "syrup-storm-lg.png", md: "syrup-storm-md.png", sm: "syrup-storm-sm.png", alt: "syrup-storm-alt.png", ipfs: "".concat(a.h, "/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/syrup-storm.png") }, background: "syrup-storm-bg.svg", textColor: "#191326", users: 0, points: 0 }, { id: 2, name: "Fearsome Flippers", description: "The flippening is coming. Don't get in these bunnies' way, or you'll get flipped, too!", images: { lg: "fearsome-flippers-lg.png", md: "fearsome-flippers-md.png", sm: "fearsome-flippers-sm.png", alt: "fearsome-flippers-alt.png", ipfs: "".concat(a.h, "/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/fearsome-flippers.png") }, background: "fearsome-flippers-bg.svg", textColor: "#FFFFFF", users: 0, points: 0 }, { id: 3, name: "Chaotic Cakers", description: "Can you stand the heat? Stay out of the kitchen or you might get burned to a crisp!", images: { lg: "chaotic-cakers-lg.png", md: "chaotic-cakers-md.png", sm: "chaotic-cakers-sm.png", alt: "chaotic-cakers-alt.png", ipfs: "".concat(a.h, "/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/chaotic-cakers.png") }, background: "chaotic-cakers-bg.svg", textColor: "#191326", users: 0, points: 0 }];
            t.a = r
        },
        211: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return s }));
            var a = n(0),
                r = n(28),
                i = n(20),
                o = n(59);

            function s() {
                var e = Object(i.a)().chainId,
                    t = Object(r.c)((function(e) { return e.user.tokens }));
                return Object(a.useMemo)((function() { var n; return e ? Object.values(null !== (n = null === t || void 0 === t ? void 0 : t[e]) && void 0 !== n ? n : {}).map(o.c) : [] }), [t, e])
            }
        },
        214: function(e, t, n) {
            "use strict";
            var a = n(4),
                r = n(64),
                i = n(55);
            t.a = function(e) {
                var t, n, o = Object(r.k)(null === e || void 0 === e ? void 0 : e.address, !1),
                    s = null === (t = Object(i.c)(o, "totalSupply")) || void 0 === t || null === (n = t.result) || void 0 === n ? void 0 : n[0];
                return e && s ? new a.k(e, s.toString()) : void 0
            }
        },
        219: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return l }));
            var a = n(3),
                r = n.n(a),
                i = n(6),
                o = n(33),
                s = n(12),
                c = n(0),
                u = n(45),
                d = n(117);

            function l() {
                var e = Object(u.d)();
                return {
                    callWithGasPrice: Object(c.useCallback)(function() {
                        var t = Object(s.a)(r.a.mark((function t(n, a) {
                            var s, c, u, l, p, b = arguments;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return s = b.length > 2 && void 0 !== b[2] ? b[2] : [], c = b.length > 3 && void 0 !== b[3] ? b[3] : null, u = Object(d.get)(n, a), l = null === c || void 0 === c ? void 0 : c.gasPrice, t.next = 6, u.apply(void 0, Object(o.a)(s).concat([l ? Object(i.a)({}, c) : Object(i.a)(Object(i.a)({}, c), {}, { gasPrice: e })]));
                                    case 6:
                                        return p = t.sent, t.abrupt("return", p);
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) { return t.apply(this, arguments) }
                    }(), [e])
                }
            }
        },
        22: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return a })), n.d(t, "c", (function() { return i })), n.d(t, "b", (function() { return o }));
            var a, r = n(15);
            ! function(e) { e.CURRENCY_A = "CURRENCY_A", e.CURRENCY_B = "CURRENCY_B" }(a || (a = {}));
            var i = Object(r.b)("mint/typeInputMint"),
                o = Object(r.b)("mint/resetMintState")
        },
        220: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return B }));
            var a = n(57),
                r = n(6),
                i = n(13),
                o = n(0),
                s = n(7),
                c = n(21),
                u = n(265),
                d = n(70),
                l = { title: "MasterMind Games", description: "The most popular AMM on BSC by user count! Earn MGT through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by MasterMind Games), NFTs, and more, on a platform you can trust.", image: " " },
                p = n(11),
                b = n(4),
                y = n(20),
                m = n(34),
                f = n(92),
                h = n(52),
                k = m.b.busd,
                T = m.a.wbnb;

            function g(e) {
                var t = Object(y.a)().chainId,
                    n = Object(h.b)(e, t),
                    a = Object(o.useMemo)((function() {
                        return [
                            [t && n && Object(b.o)(T, n) ? void 0 : e, t ? T : void 0],
                            [(null === n || void 0 === n ? void 0 : n.equals(k)) ? void 0 : n, t === b.a.MAINNET ? k : void 0],
                            [t ? T : void 0, t === b.a.MAINNET ? k : void 0]
                        ]
                    }), [t, e, n]),
                    r = Object(f.c)(a),
                    i = Object(p.a)(r, 3),
                    s = Object(p.a)(i[0], 2),
                    c = s[0],
                    u = s[1],
                    d = Object(p.a)(i[1], 2),
                    l = d[0],
                    m = d[1],
                    g = Object(p.a)(i[2], 2),
                    v = g[0],
                    x = g[1];
                return Object(o.useMemo)((function() {
                    if (e && n && t)
                        if (n.equals(T)) { if (m) { var a = m.priceOf(T); return new b.h(e, k, a.denominator, a.numerator) } } else {
                            if (n.equals(k)) return new b.h(k, k, "1", "1");
                            var r = null === u || void 0 === u ? void 0 : u.reserveOf(T),
                                i = r && x ? x.priceOf(T).quote(r).raw : b.e.BigInt(0);
                            if (l === f.a.EXISTS && m && m.reserveOf(k).greaterThan(i)) { var o = m.priceOf(n); return new b.h(e, k, o.denominator, o.numerator) }
                            if (c === f.a.EXISTS && u && v === f.a.EXISTS && x && x.reserveOf(k).greaterThan("0") && u.reserveOf(T).greaterThan("0")) {
                                var s = x.priceOf(k),
                                    d = u.priceOf(T),
                                    p = s.multiply(d).invert();
                                return new b.h(e, k, p.denominator, p.numerator)
                            }
                        }
                }), [t, e, u, c, x, v, m, l, n])
            }
            var v, x = n(335),
                j = n(1),
                w = ["children", "symbol"],
                O = Object(s.e)(x.a)(v || (v = Object(i.a)(["\n  min-height: calc(100vh - 64px);\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  ", " {\n    padding-top: 24px;\n    padding-bottom: 24px;\n  }\n\n  ", " {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.lg })),
                B = function(e) {
                    var t = e.symbol,
                        n = Object(c.b)().t,
                        a = Object(d.g)().pathname,
                        i = g(m.a.cake),
                        o = i ? "$".concat(i.toFixed(3)) : "...",
                        s = function(e, t) {
                            switch (e.startsWith("/swap") ? "/swap" : e.startsWith("/add") ? "/add" : e.startsWith("/remove") ? "/remove" : e.startsWith("/teams") ? "/teams" : e.startsWith("/voting/proposal") && "/voting/proposal/create" !== e ? "/voting/proposal" : e) {
                                case "/":
                                    return { title: "".concat(t("Home"), " | ").concat(t("MasterMind Games")) };
                                case "/swap":
                                    return { title: "".concat(t("Exchange"), " | ").concat(t("MasterMind Games")) };
                                case "/add":
                                    return { title: "".concat(t("Add Liquidity"), " | ").concat(t("MasterMind Games")) };
                                case "/remove":
                                    return { title: "".concat(t("Remove Liquidity"), " | ").concat(t("MasterMind Games")) };
                                case "/liquidity":
                                    return { title: "".concat(t("Liquidity"), " | ").concat(t("MasterMind Games")) };
                                case "/find":
                                    return { title: "".concat(t("Pools"), " | ").concat(t("MasterMind Games Info & Analytics")), description: "View statistics for MasterMind Games exchanges." };
                                default:
                                    return null
                            }
                        }(a, n) || {},
                        p = Object(r.a)(Object(r.a)({}, l), s),
                        b = p.title,
                        y = p.description,
                        f = p.image,
                        h = o ? [b, o].join(" - ") : b;
                    return t && (h = [t, b].join(" - ")), Object(j.jsxs)(u.a, { children: [Object(j.jsx)("title", { children: h }), Object(j.jsx)("meta", { property: "og:title", content: b }), Object(j.jsx)("meta", { property: "og:description", content: y }), Object(j.jsx)("meta", { property: "og:image", content: f })] })
                };
            t.b = function(e) {
                var t = e.children,
                    n = e.symbol,
                    i = Object(a.a)(e, w);
                return Object(j.jsxs)(j.Fragment, { children: [Object(j.jsx)(B, { symbol: n }), Object(j.jsx)(O, Object(r.a)(Object(r.a)({}, i), {}, { children: t }))] })
            }
        },
        235: function(e, t, n) {
            "use strict";
            var a = n(4),
                r = n(34),
                i = n(121),
                o = new a.j(a.a.MAINNET, i.a[1].lpAddresses[a.a.MAINNET], 18, i.a[1].lpSymbol),
                s = [{ id: "kalmar", address: "0x1aFB32b76696CdF05593Ca3f3957AEFB23a220FB", isActive: !0, name: "Kalmar (KALM)", poolBasic: { saleAmount: "375,000 KALM", raiseAmount: "$750,000", cakeToBurn: "$375,000", distributionRatio: .3 }, poolUnlimited: { saleAmount: "875,000 KALM", raiseAmount: "$2,500,000", cakeToBurn: "$1,250,000", distributionRatio: .7 }, currency: o, token: r.a.kalm, releaseBlockNumber: 7707736, campaignId: "511110000", articleUrl: "https://pancakeswap.medium.com/kalmar-kalm-ifo-to-be-hosted-on-pancakeswap-4540059753e4", tokenOfferingPrice: 2, version: 2 }, { id: "hotcross", address: "0xb664cdbe385656F8c54031c0CB12Cea55b584b63", isActive: !1, name: "Hot Cross (HOTCROSS)", poolBasic: { saleAmount: "15,000,000 HOTCROSS", raiseAmount: "$750,000", cakeToBurn: "$375,000", distributionRatio: .3 }, poolUnlimited: { saleAmount: "35,000,000 HOTCROSS", raiseAmount: "$1,750,000", cakeToBurn: "$875,000", distributionRatio: .7 }, currency: o, token: r.a.hotcross, releaseBlockNumber: 7477900, campaignId: "511100000", articleUrl: "https://pancakeswap.medium.com/hot-cross-hotcross-ifo-to-be-hosted-on-pancakeswap-10e70f1f6841", tokenOfferingPrice: .05, version: 2 }, { id: "horizon", address: "0x6137B571f7F1E44839ae10310a08be86D1A4D03B", isActive: !1, name: "Horizon Protocol (HZN)", poolBasic: { saleAmount: "3,000,000 HZN", raiseAmount: "$750,000", cakeToBurn: "$375,000", distributionRatio: .3 }, poolUnlimited: { saleAmount: "7,000,000 HZN", raiseAmount: "$1,750,000", cakeToBurn: "$875,000", distributionRatio: .7 }, currency: o, token: r.a.hzn, releaseBlockNumber: 6581111, campaignId: "511090000", articleUrl: "https://pancakeswap.medium.com/horizon-protocol-hzn-ifo-to-be-hosted-on-pancakeswap-51f79601c9d8", tokenOfferingPrice: .25, version: 2 }, { id: "belt", address: "0xc9FBedC033a1c479a6AD451ffE463025E92a1d38", isActive: !1, name: "Belt (BELT)", poolUnlimited: { saleAmount: "150,000 BELT", raiseAmount: "$3,000,000", cakeToBurn: "$1,500,000", distributionRatio: 1 }, currency: o, token: r.a.belt, releaseBlockNumber: 5493919, campaignId: "511080000", articleUrl: "https://pancakeswap.medium.com/belt-fi-belt-ifo-to-be-hosted-on-pancakeswap-353585117e32", tokenOfferingPrice: null, version: 1 }, { id: "watch", address: "0x55344b55C71Ad8834C397E6e08dF5195cF84fe6d", isActive: !1, name: "Yieldwatch (WATCH)", poolUnlimited: { saleAmount: "8,000,000 WATCH", raiseAmount: "$800,000", cakeToBurn: "$400,000", distributionRatio: 1 }, currency: o, token: r.a.watch, releaseBlockNumber: 5294924, campaignId: "511070000", articleUrl: "https://pancakeswap.medium.com/yieldwatch-watch-ifo-to-be-hosted-on-pancakeswap-d24301f17241", tokenOfferingPrice: null, version: 1 }, { id: "berry", address: "0x5d028cE3435B2bB9AceBfaC599EEbA1ccD63d7dd", isActive: !1, name: "Berry (BRY)", poolUnlimited: { saleAmount: "2,000,000 BRY", raiseAmount: "$1,000,000", cakeToBurn: "$500,000", distributionRatio: 1 }, currency: o, token: r.a.bry, releaseBlockNumber: 4750968, campaignId: "511060000", articleUrl: "https://pancakeswap.medium.com/berry-bry-ifo-to-be-hosted-on-pancakeswap-b4f9095e9cdb", tokenOfferingPrice: null, version: 1 }, { id: "soteria", address: "0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e", isActive: !1, name: "Soteria (wSOTE)", poolUnlimited: { saleAmount: "1,500,000 wSOTE", raiseAmount: "$525,000", cakeToBurn: "$262,500", distributionRatio: 1 }, currency: o, token: r.a.wsote, releaseBlockNumber: 4086064, campaignId: "511050000", articleUrl: "https://pancakeswap.medium.com/soteria-sota-ifo-to-be-hosted-on-pancakeswap-64b727c272ae", tokenOfferingPrice: null, version: 1 }, { id: "helmet", address: "0xa32509d760ee47Eb2Be96D338b5d69B5FBa4eFEB", isActive: !1, name: "Helmet.insure (Helmet)", poolUnlimited: { saleAmount: "10,000,000 Helmet", raiseAmount: "$1,000,000", cakeToBurn: "$500,000", distributionRatio: 1 }, currency: o, token: r.a.helmet, releaseBlockNumber: 3771926, campaignId: "511040000", articleUrl: "https://pancakeswap.medium.com/1-000-000-helmet-helmet-ifo-to-be-hosted-on-pancakeswap-3379a2a89a67", tokenOfferingPrice: null, version: 1 }, { id: "tenet", address: "0xB922aA19A2603A07C6C9ED6c236618C9bac51f06", isActive: !1, name: "Tenet (TEN)", poolUnlimited: { saleAmount: "1,000,000 TEN", raiseAmount: "$1,000,000", cakeToBurn: "$500,000", distributionRatio: 1 }, currency: o, token: r.a.ten, releaseBlockNumber: 3483883, campaignId: "511030000", articleUrl: "https://pancakeswap.medium.com/tenet-ten-ifo-to-be-hosted-on-pancakeswap-b7e1eb4cb272", tokenOfferingPrice: null, version: 1 }, { id: "ditto", address: "0x570c9eB19553526Fb35895a531928E19C7D20788", isActive: !1, name: "Ditto (DITTO)", poolUnlimited: { saleAmount: "700,000 DITTO", raiseAmount: "$630,000", cakeToBurn: "$315,000", distributionRatio: 1 }, currency: o, token: r.a.ditto, releaseBlockNumber: 3279767, campaignId: "511020000", articleUrl: "https://pancakeswap.medium.com/ditto-money-ditto-ifo-to-be-hosted-on-pancakeswap-342da3059a66", tokenOfferingPrice: null, version: 1 }, { id: "blink", address: "0x44a9Cc8463EC00937242b660BF65B10365d99baD", isActive: !1, name: "BLINk (BLK)", poolUnlimited: { saleAmount: "100,000,000 BLINK", raiseAmount: "$1,000,000", cakeToBurn: "$500,000", distributionRatio: 1 }, currency: o, token: r.a.blink, releaseBlockNumber: 3279767, campaignId: "511010000", articleUrl: "https://medium.com/pancakeswap/1-000-000-ifo-blink-joins-pancakeswap-15841800bdd8", tokenOfferingPrice: null, version: 1 }];
            t.a = s
        },
        236: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_cakeToken","type":"address"},{"internalType":"uint256","name":"_numberCakeToReactivate","type":"uint256"},{"internalType":"uint256","name":"_numberCakeToRegister","type":"uint256"},{"internalType":"uint256","name":"_numberCakeToUpdate","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"},{"indexed":false,"internalType":"string","name":"teamName","type":"string"}],"name":"TeamAdd","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"teamId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"numberPoints","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"TeamPointIncrease","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"oldTeamId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTeamId","type":"uint256"}],"name":"UserChangeTeam","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"},{"indexed":false,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"UserNew","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"}],"name":"UserPause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"numberPoints","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"UserPointIncrease","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"userAddresses","type":"address[]"},{"indexed":false,"internalType":"uint256","name":"numberPoints","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"UserPointIncreaseMultiple","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"},{"indexed":false,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"UserReactivate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"UserUpdate","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NFT_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"POINT_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SPECIAL_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"}],"name":"addNftAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_teamName","type":"string"},{"internalType":"string","name":"_teamDescription","type":"string"}],"name":"addTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_newTeamId","type":"uint256"}],"name":"changeTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"},{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"createProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"}],"name":"getTeamProfile","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"getUserProfile","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"},{"internalType":"uint256","name":"_campaignId","type":"uint256"}],"name":"increaseTeamPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"},{"internalType":"uint256","name":"_campaignId","type":"uint256"}],"name":"increaseUserPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_userAddresses","type":"address[]"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"},{"internalType":"uint256","name":"_campaignId","type":"uint256"}],"name":"increaseUserPointsMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"}],"name":"makeTeamJoinable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"}],"name":"makeTeamNotJoinable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"numberActiveProfiles","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberCakeToReactivate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberCakeToRegister","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberCakeToUpdate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberTeams","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pauseProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"reactivateProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"removeTeamPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"removeUserPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_userAddresses","type":"address[]"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"removeUserPointsMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"},{"internalType":"string","name":"_teamName","type":"string"},{"internalType":"string","name":"_teamDescription","type":"string"}],"name":"renameTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newNumberCakeToReactivate","type":"uint256"},{"internalType":"uint256","name":"_newNumberCakeToRegister","type":"uint256"},{"internalType":"uint256","name":"_newNumberCakeToUpdate","type":"uint256"}],"name":"updateNumberCake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"updateProfile","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        237: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return y })), n.d(t, "b", (function() { return f }));
            var a = n(0),
                r = n(28),
                i = n(98),
                o = (n(80), n(29)),
                s = n.n(o),
                c = n(39),
                u = (n(83), n(36), n(151)),
                d = n(59),
                l = n(134),
                p = function(e) { return { allowance: e.userData ? new s.a(e.userData.allowance) : c.c, tokenBalance: e.userData ? new s.a(e.userData.tokenBalance) : c.c, stakedBalance: e.userData ? new s.a(e.userData.stakedBalance) : c.c, earnings: e.userData ? new s.a(e.userData.earnings) : c.c } },
                b = function(e) { return { lpAddresses: e.lpAddresses, lpSymbol: e.lpSymbol, pid: e.pid, dual: e.dual, multiplier: e.multiplier, isCommunity: e.isCommunity, quoteTokenPriceBusd: e.quoteTokenPriceBusd, tokenPriceBusd: e.tokenPriceBusd, token: Object(d.c)(e.token), quoteToken: Object(d.c)(e.quoteToken), userData: p(e), tokenAmountTotal: e.tokenAmountTotal ? new s.a(e.tokenAmountTotal) : c.c, lpTotalInQuoteToken: e.lpTotalInQuoteToken ? new s.a(e.lpTotalInQuoteToken) : c.c, lpTotalSupply: e.lpTotalSupply ? new s.a(e.lpTotalSupply) : c.c, tokenPriceVsQuote: e.tokenPriceVsQuote ? new s.a(e.tokenPriceVsQuote) : c.c, poolWeight: e.poolWeight ? new s.a(e.poolWeight) : c.c } },
                y = function() {
                    var e = Object(i.b)(),
                        t = Object(u.a)().fastRefresh;
                    Object(a.useEffect)((function() { e(Object(l.c)([251, 252])) }), [e, t])
                },
                m = function(e) { var t = Object(r.c)((function(t) { return t.farms.data.find((function(t) { return t.pid === e })) })); return b(t) },
                f = function() { var e = m(251).tokenPriceBusd; return Object(a.useMemo)((function() { return new s.a(e) }), [e]) }
        },
        240: function(e, t, n) {
            "use strict";
            var a, r, i, o, s = n(6),
                c = n(57),
                u = n(13),
                d = (n(0), n(7)),
                l = n(2),
                p = n(21),
                b = n(1),
                y = d.e.div(a || (a = Object(u.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-top: 16px;\n\n  ", " {\n    justify-content: space-between;\n    flex-direction: row;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                m = (Object(d.e)(l.H)(r || (r = Object(u.a)(["\n  svg {\n    fill: ", ";\n    transition: background-color 0.2s, opacity 0.2s;\n  }\n  &:hover {\n    svg {\n      opacity: 0.65;\n    }\n  }\n  &:active {\n    svg {\n      opacity: 0.85;\n    }\n  }\n"])), (function(e) { return e.theme.colors.textSubtle })), function() { var e = Object(p.b)().t; return Object(b.jsx)(y, { children: Object(b.jsx)(l.H, { flexDirection: ["column", "column", "row"], alignItems: "center", children: Object(b.jsx)(l.P, { href: " ", ml: [0, 0, "40px"], mt: ["20px", "20px", 0], mb: ["8px", "8px", 0], children: e(" ") }) }) }) }),
                f = n(70),
                h = n(85),
                k = d.e.nav(i || (i = Object(u.a)(["\n  margin-bottom: 40px;\n"]))),
                T = function() {
                    var e, t = Object(f.g)(),
                        n = Object(p.b)().t;
                    return Object(b.jsx)(k, { children: Object(b.jsxs)(l.n, { activeIndex: (e = t.pathname, e.includes("/pool") || e.includes("/create") || e.includes("/add") || e.includes("/remove") || e.includes("/find") || e.includes("/liquidity") ? 1 : 0), scale: "sm", variant: "subtle", children: [Object(b.jsx)(l.o, { id: "swap-nav-link", to: "/swap", as: h.a, children: n("Exchange MasterMind Tokens") })] }) })
                },
                g = n(220),
                v = ["children"],
                x = d.e.div(o || (o = Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding: 16px;\n  padding-bottom: 0;\n  min-height: calc(100vh - 64px);\n  background: ", ";\n\n  ", " {\n    background-size: auto;\n  }\n\n  ", " {\n    padding: 24px;\n    padding-bottom: 0;\n  }\n\n  ", " {\n    padding-top: 32px;\n    min-height: calc(100vh - 64px);\n  }\n"])), (function(e) { return e.theme.colors.gradients.bubblegum }), (function(e) { return e.theme.mediaQueries.xs }), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.lg }));
            t.a = function(e) {
                var t = e.children,
                    n = Object(c.a)(e, v);
                return Object(b.jsxs)(b.Fragment, { children: [Object(b.jsx)(g.a, {}), Object(b.jsxs)(x, Object(s.a)(Object(s.a)({}, n), {}, { children: [Object(b.jsx)(T, {}), t, Object(b.jsx)(l.H, { flexGrow: 1 }), Object(b.jsx)(m, {})] }))] })
            }
        },
        246: function(e) { e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        247: function(e) { e.exports = JSON.parse('[{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall2.Call[]","name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes[]","name":"returnData","type":"bytes[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall2.Call[]","name":"calls","type":"tuple[]"}],"name":"blockAndAggregate","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"blockHash","type":"bytes32"},{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall2.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"internalType":"bytes32","name":"blockHash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBlockNumber","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"internalType":"address","name":"coinbase","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"internalType":"uint256","name":"difficulty","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"internalType":"uint256","name":"gaslimit","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastBlockHash","outputs":[{"internalType":"bytes32","name":"blockHash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"requireSuccess","type":"bool"},{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall2.Call[]","name":"calls","type":"tuple[]"}],"name":"tryAggregate","outputs":[{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall2.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"requireSuccess","type":"bool"},{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall2.Call[]","name":"calls","type":"tuple[]"}],"name":"tryBlockAndAggregate","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"blockHash","type":"bytes32"},{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall2.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"nonpayable","type":"function"}]') },
        248: function(e) { e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]') },
        249: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return i }));
            var a = n(15),
                r = Object(a.e)({ name: "Block", initialState: { currentBlock: 0, initialBlock: 0 }, reducers: { setBlock: function(e, t) { 0 === e.initialBlock && (e.initialBlock = t.payload), e.currentBlock = t.payload } } }),
                i = r.actions.setBlock;
            t.a = r.reducer
        },
        25: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return p })), n.d(t, "a", (function() { return b })), n.d(t, "c", (function() { return y }));
            var a, r, i, o, s, c = n(13),
                u = n(7),
                d = n(2),
                l = Object(u.e)(d.j)(a || (a = Object(c.a)(["\n  width: ", ";\n  display: flex;\n  padding: 0;\n  align-items: ", ";\n  justify-content: ", ";\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"])), (function(e) { var t = e.width; return null !== t && void 0 !== t ? t : "100%" }), (function(e) { var t = e.align; return null !== t && void 0 !== t ? t : "center" }), (function(e) { var t = e.justify; return null !== t && void 0 !== t ? t : "flex-start" }), (function(e) { return e.padding }), (function(e) { return e.border }), (function(e) { return e.borderRadius })),
                p = Object(u.e)(l)(r || (r = Object(c.a)(["\n  justify-content: space-between;\n"]))),
                b = (u.e.div(i || (i = Object(c.a)(["\n  display: flex;\n  align-items: flex-end;\n"]))), Object(u.e)(l)(o || (o = Object(c.a)(["\n  flex-wrap: wrap;\n  margin: ", ";\n  justify-content: ", ";\n\n  & > * {\n    margin: ", " !important;\n  }\n"])), (function(e) { var t = e.gap; return t && "-".concat(t) }), (function(e) { var t = e.justify; return t && t }), (function(e) { return e.gap }))),
                y = Object(u.e)(l)(s || (s = Object(c.a)(["\n  width: fit-content;\n  margin: ", ";\n"])), (function(e) { var t = e.gap; return t && "-".concat(t) }));
            t.d = l
        },
        250: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return s }));
            var a = n(11),
                r = n(0),
                i = "visibilityState" in document;

            function o() { return !i || "visible" === document.visibilityState }

            function s() {
                var e = Object(r.useState)(o()),
                    t = Object(a.a)(e, 2),
                    n = t[0],
                    s = t[1];
                return Object(r.useEffect)((function() {
                    if (i) {
                        var e = function() { s(o()) };
                        return document.addEventListener("visibilitychange", e),
                            function() { document.removeEventListener("visibilitychange", e) }
                    }
                }), [s]), n
            }
        },
        252: function(e, t, n) {
            "use strict";
            var a = n(141),
                r = n(90),
                i = n(313);
            n.d(t, "a", (function() { return i }));
            var o = new a.b(r);
            new a.b(i);
            t.b = o
        },
        253: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return c }));
            var a = n(324),
                r = n.n(a),
                i = n(275),
                o = n(276);
            var s = new TextDecoder;

            function c(e) {
                var t = function(e) { if ((e = e.startsWith("0x") ? e.substr(2) : e).length % 2 !== 0) throw new Error("hex must have length that is multiple of 2"); for (var t = new Uint8Array(e.length / 2), n = 0; n < t.length; n++) t[n] = parseInt(e.substr(2 * n, 2), 16); return t }(e),
                    n = Object(i.getCodec)(t);
                switch (n) {
                    case "ipfs-ns":
                        var a = Object(i.rmPrefix)(t),
                            c = new r.a(a);
                        return "ipfs://".concat(Object(o.toB58String)(c.multihash));
                    case "ipns-ns":
                        var u = Object(i.rmPrefix)(t),
                            d = new r.a(u),
                            l = Object(o.decode)(d.multihash);
                        return "identity" === l.name ? "ipns://".concat(s.decode(l.digest).trim()) : "ipns://".concat(Object(o.toB58String)(d.multihash));
                    default:
                        throw new Error("Unrecognized codec: ".concat(n))
                }
            }
        },
        257: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return c })), n.d(t, "a", (function() { return u }));
            var a = n(3),
                r = n.n(a),
                i = n(12),
                o = n(56),
                s = n(173),
                c = function() {
                    var e = Object(i.a)(r.a.mark((function e() {
                        var t, n;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(t = window.ethereum)) { e.next = 15; break }
                                    return n = parseInt("56", 10), e.prev = 3, e.next = 6, t.request({ method: "wallet_addEthereumChain", params: [{ chainId: "0x".concat(n.toString(16)), chainName: "Binance Smart Chain Mainnet", nativeCurrency: { name: "BNB", symbol: "bnb", decimals: 18 }, rpcUrls: s.b, blockExplorerUrls: ["".concat(o.a, "/")] }] });
                                case 6:
                                    return e.abrupt("return", !0);
                                case 9:
                                    return e.prev = 9, e.t0 = e.catch(3), console.error("Failed to setup the network in Metamask:", e.t0), e.abrupt("return", !1);
                                case 13:
                                    e.next = 17;
                                    break;
                                case 15:
                                    return console.error("Can't setup the BSC network on metamask because window.ethereum is undefined"), e.abrupt("return", !1);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 9]
                        ])
                    })));
                    return function() { return e.apply(this, arguments) }
                }(),
                u = function() {
                    var e = Object(i.a)(r.a.mark((function e(t, n, a) {
                        var i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, window.ethereum.request({ method: "wallet_watchAsset", params: { type: "ERC20", options: { address: t, symbol: n, decimals: a, image: "".concat(o.c, "/images/tokens/").concat(t, ".png") } } });
                                case 2:
                                    return i = e.sent, e.abrupt("return", i);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a) { return e.apply(this, arguments) }
                }()
        },
        258: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return d })), n.d(t, "b", (function() { return l }));
            var a = n(3),
                r = n.n(a),
                i = n(12),
                o = n(11),
                s = n(0),
                c = n.n(s),
                u = n(1),
                d = c.a.createContext({ slow: 0, fast: 0 }),
                l = function(e) {
                    var t = e.children,
                        n = Object(s.useState)(0),
                        a = Object(o.a)(n, 2),
                        c = a[0],
                        l = a[1],
                        p = Object(s.useState)(0),
                        b = Object(o.a)(p, 2),
                        y = b[0],
                        m = b[1],
                        f = function() {
                            var e = Object(s.useRef)(!0);
                            return Object(s.useEffect)((function() {
                                var t = function() { e.current = !document.hidden };
                                return window.addEventListener("visibilitychange", t),
                                    function() { window.removeEventListener("visibilitychange", t) }
                            }), []), e
                        }();
                    return Object(s.useEffect)((function() {
                        var e = setInterval(Object(i.a)(r.a.mark((function e() {
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        f.current && m((function(e) { return e + 1 }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 1e4);
                        return function() { return clearInterval(e) }
                    }), [f]), Object(s.useEffect)((function() {
                        var e = setInterval(Object(i.a)(r.a.mark((function e() {
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        f.current && l((function(e) { return e + 1 }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 6e4);
                        return function() { return clearInterval(e) }
                    }), [f]), Object(u.jsx)(d.Provider, { value: { slow: c, fast: y }, children: t })
                }
        },
        264: function(e, t, n) {
            "use strict";
            var a = n(0);
            t.a = function(e) { var t = Object(a.useRef)(); return Object(a.useEffect)((function() { t.current = e }), [e]), t.current }
        },
        266: function(e, t, n) {
            "use strict";
            var a = n(6),
                r = n(11),
                i = n(57),
                o = n(0),
                s = n(2),
                c = n(1),
                u = ["srcs", "alt"],
                d = {};
            t.a = function(e) {
                var t = e.srcs,
                    n = e.alt,
                    l = Object(i.a)(e, u),
                    p = Object(o.useState)(0),
                    b = Object(r.a)(p, 2)[1],
                    y = t.find((function(e) { return !d[e] }));
                return y ? Object(c.jsx)("img", Object(a.a)(Object(a.a)({}, l), {}, { alt: n, src: y, onError: function() { y && (d[y] = !0), b((function(e) { return e + 1 })) } })) : Object(c.jsx)(s.K, Object(a.a)({}, l))
            }
        },
        267: function(e, t, n) {
            "use strict";
            var a = n(11),
                r = n(0),
                i = n(2),
                o = n(32),
                s = n(45),
                c = n(37),
                u = n(142),
                d = n(20),
                l = n(68),
                p = n(53),
                b = n(21),
                y = n(1);
            t.a = function(e) {
                var t = e.tokens,
                    n = e.handleCurrencySelect,
                    m = Object(d.a)().chainId,
                    f = Object(b.b)().t,
                    h = Object(r.useState)(!1),
                    k = Object(a.a)(h, 2),
                    T = k[0],
                    g = k[1],
                    v = Object(s.a)(),
                    x = Object(l.e)();
                return Object(y.jsxs)(o.a, {
                    gap: "lg",
                    children: [Object(y.jsx)(i.S, { variant: "warning", children: Object(y.jsxs)(i.pb, { children: [f("Anyone can create a BEP20 token on BSC with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token."), Object(y.jsx)("br", {}), Object(y.jsx)("br", {}), f("If you purchase an arbitrary token, you may be unable to sell it back.")] }) }), t.map((function(e) {
                        var t, n, a = m && (null === x || void 0 === x || null === (t = x[m]) || void 0 === t || null === (n = t[e.address]) || void 0 === n ? void 0 : n.list),
                            r = e.address ? "".concat(Object(u.a)(e.address)) : null;
                        return Object(y.jsxs)(i.I, { gridTemplateRows: "1fr 1fr 1fr", gridGap: "4px", children: [void 0 !== a ? Object(y.jsxs)(i.ob, { variant: "success", outline: !0, scale: "sm", startIcon: a.logoURI && Object(y.jsx)(p.c, { logoURI: a.logoURI, size: "12px" }), children: [f("via"), " ", a.name] }) : Object(y.jsx)(i.ob, { variant: "failure", outline: !0, scale: "sm", startIcon: Object(y.jsx)(i.F, { color: "failure" }), children: f("Unknown Source") }), Object(y.jsxs)(i.H, { alignItems: "center", children: [Object(y.jsx)(i.pb, { mr: "8px", children: e.name }), Object(y.jsxs)(i.pb, { children: ["(", e.symbol, ")"] })] }), m && Object(y.jsxs)(i.H, { justifyContent: "space-between", width: "100%", children: [Object(y.jsx)(i.pb, { mr: "4px", children: r }), Object(y.jsxs)(i.O, { href: Object(c.e)(e.address, "address", m), external: !0, children: ["(", f("View on BscScan"), ")"] })] })] }, e.address)
                    })), Object(y.jsxs)(i.H, { justifyContent: "space-between", alignItems: "center", children: [Object(y.jsxs)(i.H, { alignItems: "center", onClick: function() { return g(!T) }, children: [Object(y.jsx)(i.t, { scale: "sm", name: "confirmed", type: "checkbox", checked: T, onChange: function() { return g(!T) } }), Object(y.jsx)(i.pb, { ml: "8px", style: { userSelect: "none" }, children: f("I understand") })] }), Object(y.jsx)(i.m, { variant: "danger", disabled: !T, onClick: function() { t.map((function(e) { return v(e) })), n && n(t[0]) }, className: ".token-dismiss-button", children: f("Import") })] })]
                })
            }
        },
        268: function(e, t, n) {
            "use strict";
            var a, r, i = n(11),
                o = n(0),
                s = n(2),
                c = n(13),
                u = n(7),
                d = n(45),
                l = n(21),
                p = n(106),
                b = n(140),
                y = n(69),
                m = n(1);
            ! function(e) { e.InvalidInput = "InvalidInput", e.RiskyLow = "RiskyLow", e.RiskyHigh = "RiskyHigh" }(a || (a = {})),
            function(e) { e.InvalidInput = "InvalidInput" }(r || (r = {}));
            var f, h = function() {
                    var e, t, n = Object(d.l)(),
                        c = Object(i.a)(n, 2),
                        u = c[0],
                        p = c[1],
                        b = Object(d.m)(),
                        f = Object(i.a)(b, 2),
                        h = f[0],
                        k = f[1],
                        T = Object(o.useState)(""),
                        g = Object(i.a)(T, 2),
                        v = g[0],
                        x = g[1],
                        j = Object(o.useState)(""),
                        w = Object(i.a)(j, 2),
                        O = w[0],
                        B = w[1],
                        A = Object(l.b)().t,
                        C = "" === v || (u / 100).toFixed(2) === Number.parseFloat(v).toFixed(2),
                        E = "" === O || (h / 60).toString() === O;
                    e = "" === v || C ? C && u < 50 ? a.RiskyLow : C && u > 500 ? a.RiskyHigh : void 0 : a.InvalidInput, t = "" === O || E ? void 0 : r.InvalidInput;
                    var P = function(e) { x(e); try { var t = Number.parseInt((100 * Number.parseFloat(e)).toString());!Number.isNaN(t) && t < 5e3 && p(t) } catch (n) { console.error(n) } },
                        S = function(e) { B(e); try { var t = 60 * Number.parseInt(e);!Number.isNaN(t) && t > 0 && k(t) } catch (n) { console.error(n) } };
                    return Object(m.jsxs)(s.H, { flexDirection: "column", children: [Object(m.jsxs)(s.H, { flexDirection: "column", mb: "24px", children: [Object(m.jsxs)(s.H, { mb: "12px", children: [Object(m.jsx)(s.pb, { children: A("Slippage Tolerance") }), Object(m.jsx)(y.a, { text: A("Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution."), placement: "top-start", ml: "4px" })] }), Object(m.jsxs)(s.H, { flexWrap: "wrap", children: [Object(m.jsx)(s.m, { mt: "4px", mr: "4px", scale: "sm", onClick: function() { x(""), p(10) }, variant: 10 === u ? "primary" : "tertiary", children: "0.1%" }), Object(m.jsx)(s.m, { mt: "4px", mr: "4px", scale: "sm", onClick: function() { x(""), p(50) }, variant: 50 === u ? "primary" : "tertiary", children: "0.5%" }), Object(m.jsx)(s.m, { mr: "4px", mt: "4px", scale: "sm", onClick: function() { x(""), p(100) }, variant: 100 === u ? "primary" : "tertiary", children: "1.0%" }), Object(m.jsxs)(s.H, { alignItems: "center", children: [Object(m.jsx)(s.j, { width: "76px", mt: "4px", children: Object(m.jsx)(s.N, { scale: "sm", placeholder: (u / 100).toFixed(2), value: v, onBlur: function() { P((u / 100).toFixed(2)) }, onChange: function(e) { return P(e.target.value) }, isWarning: !C, isSuccess: ![10, 50, 100].includes(u) }) }), Object(m.jsx)(s.pb, { color: "primary", bold: !0, ml: "2px", children: "%" })] })] }), !!e && Object(m.jsx)(s.pb, { fontSize: "14px", color: e === a.InvalidInput ? "red" : "#F3841E", mt: "8px", children: e === a.InvalidInput ? A("Enter a valid slippage percentage") : e === a.RiskyLow ? A("Your transaction may fail") : A("Your transaction may be frontrun") })] }), Object(m.jsxs)(s.H, { justifyContent: "space-between", alignItems: "center", mb: "24px", children: [Object(m.jsxs)(s.H, { alignItems: "center", children: [Object(m.jsx)(s.pb, { children: A("Tx deadline (mins)") }), Object(m.jsx)(y.a, { text: A("Your transaction will revert if it is left confirming for longer than this time."), placement: "top-start", ml: "4px" })] }), Object(m.jsx)(s.H, { children: Object(m.jsx)(s.j, { width: "52px", mt: "4px", children: Object(m.jsx)(s.N, { scale: "sm", color: t ? "red" : void 0, onBlur: function() { S((h / 60).toString()) }, placeholder: (h / 60).toString(), value: O, onChange: function(e) { return S(e.target.value) } }) }) })] })] })
                },
                k = function(e) {
                    var t = e.setShowConfirmExpertModal,
                        n = e.setShowExpertModeAcknowledgement,
                        a = Object(d.c)(),
                        r = Object(i.a)(a, 2)[1],
                        c = Object(o.useState)(!1),
                        u = Object(i.a)(c, 2),
                        p = u[0],
                        b = u[1],
                        y = Object(l.b)().t;
                    return Object(m.jsxs)(s.U, { title: y("Expert Mode"), onBack: function() { return t(!1) }, onDismiss: function() { return t(!1) }, headerBackground: "gradients.cardHeader", style: { maxWidth: "360px" }, children: [Object(m.jsx)(s.S, { variant: "warning", mb: "24px", children: Object(m.jsx)(s.pb, { children: y("Expert mode turns off the 'Confirm' transaction prompt, and allows high slippage trades that often result in bad rates and lost funds.") }) }), Object(m.jsx)(s.pb, { mb: "24px", children: y("Only use this mode if you know what you\u2019re doing.") }), Object(m.jsxs)(s.H, { alignItems: "center", mb: "24px", children: [Object(m.jsx)(s.t, { name: "confirmed", type: "checkbox", checked: p, onChange: function() { return b(!p) }, scale: "sm" }), Object(m.jsx)(s.pb, { ml: "10px", color: "textSubtle", style: { userSelect: "none" }, children: y("Don\u2019t show this again") })] }), Object(m.jsx)(s.m, { mb: "8px", id: "confirm-expert-mode", onClick: function() { "confirm" === window.prompt('Please type the word "confirm" to enable expert mode.') && (r(), t(!1), p && n(!1)) }, children: y("Turn On Expert Mode") }), Object(m.jsx)(s.m, { variant: "secondary", onClick: function() { t(!1) }, children: y("Cancel") })] })
                },
                T = n(59),
                g = function() {
                    var e = Object(l.b)().t,
                        t = Object(d.e)(),
                        n = Object(i.a)(t, 2),
                        a = n[0],
                        r = n[1];
                    return Object(m.jsxs)(s.H, { flexDirection: "column", children: [Object(m.jsxs)(s.H, { mb: "12px", alignItems: "center", children: [Object(m.jsx)(s.pb, { children: e("Default Transaction Speed (GWEI)") }), Object(m.jsx)(y.a, { text: e("Adjusts the gas price (transaction fee) for your transaction. Higher GWEI = higher speed = higher fees"), placement: "top-start", ml: "4px" })] }), Object(m.jsxs)(s.H, { flexWrap: "wrap", children: [Object(m.jsx)(s.m, { mt: "4px", mr: "4px", scale: "sm", onClick: function() { r(T.b.default) }, variant: a === T.b.default ? "primary" : "tertiary", children: e("Standard (%gasPrice%)", { gasPrice: T.a.default }) }), Object(m.jsx)(s.m, { mt: "4px", mr: "4px", scale: "sm", onClick: function() { r(T.b.fast) }, variant: a === T.b.fast ? "primary" : "tertiary", children: e("Fast (%gasPrice%)", { gasPrice: T.a.fast }) }), Object(m.jsx)(s.m, { mr: "4px", mt: "4px", scale: "sm", onClick: function() { r(T.b.instant) }, variant: a === T.b.instant ? "primary" : "tertiary", children: e("Instant (%gasPrice%)", { gasPrice: T.a.instant }) })] })] })
                },
                v = u.e.div(f || (f = Object(c.a)(["\n  .pancakes {\n    position: absolute;\n  }\n"]))),
                x = function(e) {
                    var t = e.onDismiss,
                        n = Object(o.useState)(!1),
                        a = Object(i.a)(n, 2),
                        r = a[0],
                        c = a[1],
                        u = Object(d.j)(),
                        f = Object(i.a)(u, 2),
                        T = f[0],
                        x = f[1],
                        j = Object(d.c)(),
                        w = Object(i.a)(j, 2),
                        O = w[0],
                        B = w[1],
                        A = Object(d.k)(),
                        C = Object(i.a)(A, 2),
                        E = C[0],
                        P = C[1],
                        S = Object(d.b)(),
                        I = Object(i.a)(S, 2),
                        F = I[0],
                        D = I[1],
                        N = Object(p.d)().onChangeRecipient,
                        L = Object(l.b)().t,
                        M = Object(b.a)().theme;
                    if (r) return Object(m.jsx)(k, { setShowConfirmExpertModal: c, onDismiss: t, setShowExpertModeAcknowledgement: x });
                    return Object(m.jsx)(s.U, { title: L("Settings"), headerBackground: "gradients.cardHeader", onDismiss: t, style: { maxWidth: "420px", overflowY: "auto" }, children: Object(m.jsxs)(s.H, { flexDirection: "column", children: [Object(m.jsxs)(s.H, { pb: "24px", flexDirection: "column", children: [Object(m.jsx)(s.pb, { bold: !0, textTransform: "uppercase", fontSize: "12px", color: "secondary", mb: "24px", children: L("Global") }), Object(m.jsx)(g, {})] }), Object(m.jsxs)(s.H, { pt: "24px", flexDirection: "column", borderTop: "1px ".concat(M.colors.cardBorder, " solid"), children: [Object(m.jsx)(s.pb, { bold: !0, textTransform: "uppercase", fontSize: "12px", color: "secondary", mb: "24px", children: L("Swaps & Liquidity") }), Object(m.jsx)(h, {})] }), Object(m.jsxs)(s.H, { justifyContent: "space-between", alignItems: "center", mb: "24px", children: [Object(m.jsxs)(s.H, { alignItems: "center", children: [Object(m.jsx)(s.pb, { children: L("Expert Mode") }), Object(m.jsx)(y.a, { text: L("Bypasses confirmation modals and allows high slippage trades. Use at your own risk."), placement: "top-start", ml: "4px" })] }), Object(m.jsx)(s.qb, { id: "toggle-expert-mode-button", scale: "md", checked: O, onChange: function() { O ? (N(null), B()) : T ? c(!0) : (N(null), B()) } })] }), Object(m.jsxs)(s.H, { justifyContent: "space-between", alignItems: "center", mb: "24px", children: [Object(m.jsxs)(s.H, { alignItems: "center", children: [Object(m.jsx)(s.pb, { children: L("Disable Multihops") }), Object(m.jsx)(y.a, { text: L("Restricts swaps to direct pairs only."), placement: "top-start", ml: "4px" })] }), Object(m.jsx)(s.qb, { id: "toggle-disable-multihop-button", checked: E, scale: "md", onChange: function() { P(!E) } })] }), Object(m.jsxs)(s.H, { justifyContent: "space-between", alignItems: "center", children: [Object(m.jsxs)(s.H, { alignItems: "center", children: [Object(m.jsx)(s.pb, { children: L("Flippy sounds") }), Object(m.jsx)(y.a, { text: L("Fun sounds to make a truly immersive pancake-flipping trading experience"), placement: "top-start", ml: "4px" })] }), Object(m.jsx)(v, { children: Object(m.jsx)(s.fb, { checked: F, onChange: D, scale: "md" }) })] })] }) })
                };
            t.a = function() {
                var e = Object(s.Cb)(Object(m.jsx)(x, {})),
                    t = Object(i.a)(e, 1)[0];
                return Object(m.jsx)(s.H, { children: Object(m.jsx)(s.M, { onClick: t, variant: "text", scale: "sm", mr: "8px", id: "open-settings-dialog-button", children: Object(m.jsx)(s.B, { height: 22, width: 22, color: "textSubtle" }) }) })
            }
        },
        269: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return l }));
            var a = n(0),
                r = n(253),
                i = n(176),
                o = n(150),
                s = n(62),
                c = n(55),
                u = n(130),
                d = n(64);

            function l(e) {
                var t = Object(a.useMemo)((function() { return e ? Object(i.a)(e) : void 0 }), [e]),
                    n = function(e) {
                        var t, n, r, i = Object(a.useMemo)((function() { if (!e) return [void 0]; try { return e ? [Object(s.namehash)(e)] : [void 0] } catch (t) { return [void 0] } }), [e]),
                            o = Object(d.e)(!1),
                            l = Object(c.c)(o, "resolver", i),
                            p = null === (t = l.result) || void 0 === t ? void 0 : t[0],
                            b = Object(d.f)(p && Object(u.a)(p) ? void 0 : p, !1),
                            y = Object(c.c)(b, "contenthash", i);
                        return { contenthash: null !== (n = null === (r = y.result) || void 0 === r ? void 0 : r[0]) && void 0 !== n ? n : null, loading: l.loading || y.loading }
                    }(null === t || void 0 === t ? void 0 : t.ensName);
                return Object(a.useMemo)((function() { return t ? n.contenthash ? Object(o.a)(Object(r.a)(n.contenthash)) : [] : e ? Object(o.a)(e) : [] }), [t, n.contenthash, e])
            }
        },
        27: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return a })), n.d(t, "c", (function() { return i })), n.d(t, "e", (function() { return o })), n.d(t, "f", (function() { return s })), n.d(t, "b", (function() { return c })), n.d(t, "d", (function() { return u }));
            var a, r = n(15);
            ! function(e) { e.INPUT = "INPUT", e.OUTPUT = "OUTPUT" }(a || (a = {}));
            var i = Object(r.b)("swap/selectCurrency"),
                o = Object(r.b)("swap/switchCurrencies"),
                s = Object(r.b)("swap/typeInput"),
                c = Object(r.b)("swap/replaceSwapState"),
                u = Object(r.b)("swap/setRecipient")
        },
        312: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return b })), n.d(t, "a", (function() { return y })), n.d(t, "c", (function() { return m }));
            var a = n(3),
                r = n.n(a),
                i = n(33),
                o = n(11),
                s = n(12),
                c = n(235),
                u = n(186),
                d = n(51),
                l = n(35),
                p = n(205),
                b = function(e) {
                    switch (e.type) {
                        case "ifo":
                            return { key: "IFO Shopper: %title%", data: { title: e.title } };
                        default:
                            return e.title
                    }
                },
                y = function(e) {
                    switch (e.type) {
                        case "ifo":
                            return { key: "Committed more than $5 worth of LP in the %title% IFO", data: { title: e.title } };
                        default:
                            return e.description
                    }
                },
                m = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, m;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = c.a.filter((function(e) { return void 0 !== e.campaignId })), a = n.map((function(e) { var n = e.address; return { address: Object(l.q)(), name: "checkClaimStatus", params: [t, n] } })), e.next = 4, Object(d.b)(p, a, { requireSuccess: !1 });
                                case 4:
                                    return s = e.sent, e.next = 7, Object(d.b)(p, s.reduce((function(e, t, n) { return null === t ? e : !0 === Object(o.a)(t, 1)[0] ? [].concat(Object(i.a)(e), [{ address: Object(l.q)(), name: "ifos", params: [n] }]) : e }), []));
                                case 7:
                                    return m = e.sent, e.abrupt("return", m.reduce((function(e, t) {
                                        if (!u.a.has(t.campaignId)) return e;
                                        var a = u.a.get(t.campaignId),
                                            r = n.find((function(e) { return e.campaignId === t.campaignId })).address;
                                        return [].concat(Object(i.a)(e), [{ address: r, id: t.campaignId, type: "ifo", title: b(a), description: y(a), badge: a.badge, points: t.numberPoints.toNumber() }])
                                    }), []));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()
        },
        313: function(e) { e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]') },
        32: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return u })), n.d(t, "a", (function() { return d }));
            var a, r, i, o = n(13),
                s = n(7),
                c = s.e.div(a || (a = Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]))),
                u = Object(s.e)(c)(r || (r = Object(o.a)(["\n  width: 100%;\n  align-items: center;\n"]))),
                d = s.e.div(i || (i = Object(o.a)(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ", ";\n  justify-items: ", ";\n"])), (function(e) { var t = e.gap; return ("sm" === t ? "8px" : "md" === t && "12px") || "lg" === t && "24px" || t }), (function(e) { var t = e.justify; return t && t }));
            t.c = c
        },
        322: function(e) { e.exports = JSON.parse('{"name":"PancakeSwap Default List","timestamp":"2021-05-06T00:00:00Z","version":{"major":3,"minor":0,"patch":0},"tags":{},"logoURI":"https://pancakeswap.finance/logo.png","keywords":["pancake","default"],"tokens":[{"name":"WBNB Token","symbol":"WBNB","address":"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png"},{"name":"Mastermind Games","symbol":"MGT","address":"0x6292F56ccE9FB34e21010a1A237a4D908a6474eA","chainId":56,"decimals":18,"logoURI":"https://bscscan.com/token/images/mastermindgame_32.png"},{"name":"Mastermind Games Exchange","symbol":"MGX","address":"0x1e9F149cCADa7020436344ABE354E99842CFE35A","chainId":56,"decimals":18,"logoURI":"https://mastermindgames.io/wp-content/uploads/2022/05/mgx7387005257005590922.png"}]}') },
        335: function(e, t, n) {
            "use strict";
            var a = n(6),
                r = n(57),
                i = (n(0), n(2)),
                o = n(1),
                s = ["children"];
            t.a = function(e) {
                var t = e.children,
                    n = Object(r.a)(e, s);
                return Object(o.jsx)(i.j, Object(a.a)(Object(a.a)({ px: ["16px", "24px"], mx: "auto", maxWidth: "1200px" }, n), {}, { children: t }))
            }
        },
        336: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return k })), n.d(t, "c", (function() { return g }));
            var a, r = n(3),
                i = n.n(r),
                o = n(12),
                s = n(33),
                c = n(15),
                u = n(13),
                d = n(63),
                l = n(186),
                p = n(84),
                b = n(312),
                y = function() {
                    var e = Object(o.a)(i.a.mark((function e(t) {
                        var n, r;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Object(d.request)(p.d, Object(d.gql)(a || (a = Object(u.a)(["\n        query getUserPointIncreaseEvents($account: ID!) {\n          user(id: $account) {\n            points {\n              id\n              campaignId\n              points\n            }\n          }\n        }\n      "]))), { account: t.toLowerCase() });
                                case 3:
                                    return n = e.sent, r = n.user, e.abrupt("return", r.points);
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(0), e.abrupt("return", null);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                m = function() {
                    var e = Object(o.a)(i.a.mark((function e(t) {
                        var n;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y(t);
                                case 2:
                                    if (n = e.sent) { e.next = 5; break }
                                    return e.abrupt("return", []);
                                case 5:
                                    return e.abrupt("return", n.reduce((function(e, t) { if (!l.a.has(t.campaignId)) return e; var n = l.a.get(t.campaignId); return [].concat(Object(s.a)(e), [{ id: t.campaignId, type: n.type, address: t.id, title: Object(b.b)(n), description: Object(b.a)(n), badge: n.badge, points: Number(t.points) }]) }), []));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                f = Object(c.e)({ name: "achievements", initialState: { data: [] }, reducers: { addAchievement: function(e, t) { e.data.push(t.payload) }, addAchievements: function(e, t) { e.data = [].concat(Object(s.a)(e.data), Object(s.a)(t.payload)) }, setAchievements: function(e, t) { e.data = t.payload }, clearAchievements: function(e) { e.data = [] } } }),
                h = f.actions,
                k = h.addAchievement,
                T = (h.addAchievements, h.setAchievements),
                g = (h.clearAchievements, function(e) {
                    return function() {
                        var t = Object(o.a)(i.a.mark((function t(n) {
                            var a;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, m(e);
                                    case 3:
                                        a = t.sent, n(T(a)), t.next = 10;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t.catch(0), console.error(t.t0);
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 7]
                            ])
                        })));
                        return function(e) { return t.apply(this, arguments) }
                    }()
                });
            t.b = f.reducer
        },
        337: function(e, t, n) {
            "use strict";
            var a = n(17),
                r = n(56),
                i = [{ name: "#224", description: "Cows aim to create a space/platform for people to come together and share regarding their mental health. Future areas and perks can be unlocked by the community through roadmap activation. This is the time Buy/Share this one time opportunity to get your hands on your unique cyber cow NFT in floor price .", images: { lg: "stormy-easter-21-lg.png", md: "stormy-easter-21-md.png", sm: "stormy-easter-21-sm.png", ipfs: "".concat(r.h, "/QmZGqWaovULNEMKxBCGnGjh27JQkAyadS6AW4J4Lzf3XBp/easter-storm.png") }, identifier: "##224", id: 12 }, { name: "#90", description: "Cows aim to create a space/platform for people to come together and share regarding their mental health. Future areas and perks can be unlocked by the community through roadmap activation. This is the time Buy/Share this one time opportunity to get your hands on your unique cyber cow NFT in floor price.", images: { lg: "hiccup-lg.png", md: "hiccup-md.png", sm: "hiccup-sm.png", ipfs: "".concat(r.h, "/QmQ6EE6gkVzAQUdQLLM7CyrnME6LZHCoy92ZERW8HXmyjw/hiccup.png") }, identifier: "#90", id: 10 }, { name: "#666", description: "Cows aim to create a space/platform for people to come together and share regarding their mental health. Future areas and perks can be unlocked by the community through roadmap activation. This is the time Buy/Share this one time opportunity to get your hands on your unique cyber cow NFT in floor price .", images: { lg: "sleepy-lg.png", md: "sleepy-md.png", sm: "sleepy-sm.png", ipfs: "".concat(r.h, "/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/sleepy.png"), blur: "sleepy-blur.png" }, identifier: "#666", id: 5 }, { name: "#932", description: "Cows aim to create a space/platform for people to come together and share regarding their mental health. Future areas and perks can be unlocked by the community through roadmap activation. This is the time Buy/Share this one time opportunity to get your hands on your unique cyber cow NFT in floor price .", images: { lg: "sunny-lg.png", md: "sunny-md.png", sm: "sunny-sm.png", ipfs: "".concat(r.h, "/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/sunny.png"), blur: "sunny-blur.png" }, identifier: "#932", id: 9 }, { name: "#564", description: "Cows aim to create a space/platform for people to come together and share regarding their mental health. Future areas and perks can be unlocked by the community through roadmap activation. This is the time Buy/Share this one time opportunity to get your hands on your unique cyber cow NFT in floor price .", images: { lg: "churro-lg.png", md: "churro-md.png", sm: "churro-sm.png", ipfs: "".concat(r.h, "/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/churro.png"), blur: "churro-blur.png" }, identifier: "#564", id: 8 }, { name: "#651", description: "Cows aim to create a space/platform for people to come together and share regarding their mental health. Future areas and perks can be unlocked by the community through roadmap activation. This is the time Buy/Share this one time opportunity to get your hands on your unique cyber cow NFT in floor price .", images: { lg: "dollop-lg.png", md: "dollop-md.png", sm: "dollop-sm.png", ipfs: "".concat(r.h, "/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/dollop.png"), blur: "dollop-blur.png" }, identifier: "#651", id: 6 }, { name: "#843", description: "Cows aim to create a space/platform for people to come together and share regarding their mental health. Future areas and perks can be unlocked by the community through roadmap activation. This is the time Buy/Share this one time opportunity to get your hands on your unique cyber cow NFT in floor price .", images: { lg: "twinkle-lg.png", md: "twinkle-md.png", sm: "twinkle-sm.png", ipfs: "".concat(r.h, "/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/twinkle.png"), blur: "twinkle-blur.png" }, identifier: "#843", id: 7 }, { name: "#754", description: "Cows aim to create a space/platform for people to come together and share regarding their mental health. Future areas and perks can be unlocked by the community through roadmap activation. This is the time Buy/Share this one time opportunity to get your hands on your unique cyber cow NFT in floor price .", images: { lg: "swapsies-lg.png", md: "swapsies-md.png", sm: "swapsies-sm.png", ipfs: "".concat(r.h, "/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/swapsies.png"), blur: "swapsies-blur.png" }, identifier: "#754", id: 0 }, { name: "#2367", description: "Cows aim to create a space/platform for people to come together and share regarding their mental health. Future areas and perks can be unlocked by the community through roadmap activation. This is the time Buy/Share this one time opportunity to get your hands on your unique cyber cow NFT in floor price .", images: { lg: "drizzle-lg.png", md: "drizzle-md.png", sm: "drizzle-sm.png", ipfs: "".concat(r.h, "/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/drizzle.png"), blur: "drizzle-blur.png" }, identifier: "#2367", id: 1 }, { name: "#331", description: "Cows aim to create a space/platform for people to come together and share regarding their mental health. Future areas and perks can be unlocked by the community through roadmap activation. This is the time Buy/Share this one time opportunity to get your hands on your unique cyber cow NFT in floor price .", images: { lg: "blueberries-lg.png", md: "blueberries-md.png", sm: "blueberries-sm.png", ipfs: "".concat(r.h, "/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/blueberries.png"), blur: "blueberries-blur.png" }, identifier: "#331", id: 2 }, { name: "#521", description: "Cows aim to create a space/platform for people to come together and share regarding their mental health. Future areas and perks can be unlocked by the community through roadmap activation. This is the time Buy/Share this one time opportunity to get your hands on your unique cyber cow NFT in floor price ..", images: { lg: "circular-lg.png", md: "circular-md.png", sm: "circular-sm.png", ipfs: "".concat(r.h, "/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/circular.png"), blur: "circular-blur.png" }, identifier: "#521", id: 3 }, { name: "#10", description: "Cows aim to create a space/platform for people to come together and share regarding their mental health. Future areas and perks can be unlocked by the community through roadmap activation. This is the time Buy/Share this one time opportunity to get your hands on your unique cyber cow NFT in floor price .", images: { lg: "sparkle-lg.png", md: "sparkle-md.png", sm: "sparkle-sm.png", ipfs: "".concat(r.h, "/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/sparkle.png"), blur: "sparkle-blur.png" }, identifier: "#10", id: 4941569032349737e61 }],
                o = n(175),
                s = (n(160), Object(a.a)({}, o.a.PANCAKE, i));
            t.a = s
        },
        34: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return u })), n.d(t, "d", (function() { return d })), n.d(t, "c", (function() { return p }));
            var a = n(17),
                r = n(6),
                i = n(4),
                o = n(59),
                s = i.a.MAINNET,
                c = i.a.TESTNET,
                u = { wbnb: new i.j(s, "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", 18, "WBNB", "Wrapped BNB", "https://www.binance.com/"), bnb: new i.j(s, "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", 18, "BNB", "BNB", "https://www.binance.com/"), cake: new i.j(s, "0x6292F56ccE9FB34e21010a1A237a4D908a6474eA", 18, "CAKE", "PancakeSwap Token", "https://pancakeswap.finance/"), tlos: new i.j(s, "0xb6C53431608E626AC81a9776ac3e999c5556717c", 18, "TLOS", "Telos", "https://www.telos.net/"), stephero: new i.j(s, "0xE8176d414560cFE1Bf82Fd73B986823B89E4F545", 18, "HERO", "StepHero", "https://stephero.io/"), qbt: new i.j(s, "0x17B7163cf1Dbd286E262ddc68b553D899B93f526", 18, "QBT", "Qubit Token", "https://qbt.fi/"), cvp: new i.j(s, "0x5Ec3AdBDae549Dce842e24480Eb2434769e22B2E", 18, "CVP", "Concentrated Voting Power Token", "https://powerpool.finance/"), bscdefi: new i.j(s, "0x40E46dE174dfB776BB89E04dF1C47d8a66855EB3", 18, "BSCDEFI", "BSC Defi blue chips token", "https://powerpool.finance/"), busd: new i.j(s, "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", 18, "BUSD", "Binance USD", "https://www.paxos.com/busd/"), dai: new i.j(s, "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3", 18, "DAI", "Dai Stablecoin", "https://www.makerdao.com/"), usdt: new i.j(s, "0x55d398326f99059fF775485246999027B3197955", 18, "USDT", "Tether USD", "https://tether.to/"), btcb: new i.j(s, "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", 18, "BTCB", "Binance BTC", "https://bitcoin.org/"), ust: new i.j(s, "0x23396cF899Ca06c4472205fC903bDB4de249D6fC", 18, "UST", "Wrapped UST Token", "https://mirror.finance/"), eth: new i.j(s, "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", 18, "ETH", "Binance-Peg Ethereum Token", "https://ethereum.org/en/"), usdc: new i.j(s, "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", 18, "USDC", "Binance-Peg USD Coin", "https://www.centre.io/usdc"), kalm: new i.j(s, "0x4BA0057f784858a48fe351445C672FF2a3d43515", 18, "KALM", "Kalmar Token", "https://kalmar.io/"), hotcross: new i.j(s, "0x4FA7163E153419E0E1064e418dd7A99314Ed27b6", 18, "HOTCROSS", "Hotcross Token", "https://www.hotcross.com/"), belt: new i.j(s, "0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f", 18, "BELT", "Belt Token", "https://beta.belt.fi/"), watch: new i.j(s, "0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0", 18, "WATCH", "Yieldwatch Token", "https://yieldwatch.net/"), bry: new i.j(s, "0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830", 18, "BRY", "Berry Token", "https://berrydata.co/"), wsote: new i.j(s, "0x541E619858737031A1244A5d0Cd47E5ef480342c", 18, "wSOTE", "Soteria Token", "https://soteria.finance/"), helmet: new i.j(s, "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8", 18, "Helmet", "Helmet Token", "https://www.helmet.insure/"), ten: new i.j(s, "0xdFF8cb622790b7F92686c722b02CaB55592f152C", 18, "TEN", "Tenet Token", "https://www.tenet.farm/"), ditto: new i.j(s, "0x233d91A0713155003fc4DcE0AFa871b508B3B715", 9, "DITTO", "Ditto Token", "https://ditto.money/"), blink: new i.j(s, "0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F", 6, "BLINK", "Blink Token", "https://blink.wink.org"), syrup: new i.j(s, "0x009cF7bC57584b7998236eff51b98A168DceA9B0", 18, "SYRUP", "SyrupBar Token", "https://pancakeswap.finance/"), pha: new i.j(s, "0x0112e557d400474717056C4e6D40eDD846F38351", 18, "PHA", "Phala Token", "https://phala.network"), babycake: new i.j(s, "0xdB8D30b74bf098aF214e862C90E647bbB1fcC58c", 18, "BABYCAKE", "Baby Cake Token", "https://babycake.app/"), bmon: new i.j(s, "0x08ba0619b1e7A582E0BCe5BBE9843322C954C340", 18, "BMON", "Binamon Token", "https://binamon.org/"), hero: new i.j(s, "0xD40bEDb44C081D2935eebA6eF5a3c8A31A1bBE13", 18, "HERO", "Metahero Token", "https://metahero.io/"), wsg: new i.j(s, "0xA58950F05FeA2277d2608748412bf9F802eA4901", 18, "WSG", "Wall Street Games Token", "https://wsg.gg/"), mcrn: new i.j(s, "0xacb2d47827C9813AE26De80965845D80935afd0B", 18, "MCRN", "Macaronswap Token", "https://www.macaronswap.finance/"), revv: new i.j(s, "0x833F307aC507D47309fD8CDD1F835BeF8D702a93", 18, "REVV", "REVV Token", "https://revvmotorsport.com/"), skill: new i.j(s, "0x154A9F9cbd3449AD22FDaE23044319D6eF2a1Fab", 18, "SKILL", "Cryptoblades Token", "https://www.cryptoblades.io/"), if: new i.j(s, "0xB0e1fc65C1a741b4662B813eB787d369b8614Af1", 18, "IF", "Impossible Finance Token", "https://impossible.finance/"), sps: new i.j(s, "0x1633b7157e7638C4d6593436111Bf125Ee74703F", 18, "SPS", "Splinterlands Token", "https://splinterlands.com"), chess: new i.j(s, "0x20de22029ab63cf9A7Cf5fEB2b737Ca1eE4c82A6", 18, "CHESS", "Chess Token", "https://tranchess.com/"), titan: new i.j(s, "0xe898EDc43920F357A93083F1d4460437dE6dAeC2", 18, "TITAN", "Titanswap Token", "https://titanswap.org"), harmony: new i.j(s, "0x03fF0ff224f904be3118461335064bB48Df47938", 18, "ONE", "Harmony ONE Token", "https://www.harmony.one/"), mask: new i.j(s, "0x2eD9a5C8C13b93955103B9a7C167B67Ef4d568a3", 18, "MASK", "Mask Token", "https://mask.io/"), dvi: new i.j(s, "0x758FB037A375F17c7e195CC634D77dA4F554255B", 18, "DVI", "Dvision Network Token", "https://dvision.network/"), adx: new i.j(s, "0x6bfF4Fb161347ad7de4A625AE5aa3A1CA7077819", 18, "ADX", "Adex Network Token", "https://www.adex.network"), bscpad: new i.j(s, "0x5A3010d4d8D3B5fB49f8B6E57FB9E48063f16700", 18, "BSCPAD", "Bscpad Token", "https://bscpad.com/"), rabbit: new i.j(s, "0x95a1199EBA84ac5f19546519e287d43D2F0E1b41", 18, "RABBIT", "Rabbit Finance Token", "https://rabbitfinance.io/earn"), form: new i.j(s, "0x25A528af62e56512A19ce8c3cAB427807c28CC19", 18, "FORM", "Formation Token", "https://formation.fi/"), txl: new i.j(s, "0x1FFD0b47127fdd4097E54521C9E2c7f0D66AafC5", 18, "TXL", "Tixl Token", "https://tixl.org/"), orbs: new i.j(s, "0xeBd49b26169e1b52c04cFd19FCf289405dF55F80", 18, "ORBS", "Orbs Token", "https://www.orbs.com/"), cos: new i.j(s, "0x96Dd399F9c3AFda1F194182F71600F1B65946501", 18, "COS", "Contentos Token", "https://www.contentos.io/"), bunny: new i.j(s, "0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51", 18, "BUNNY", "Pancakebunny Token", "https://pancakebunny.finance/"), alice: new i.j(s, "0xAC51066d7bEC65Dc4589368da368b212745d63E8", 6, "ALICE", "My Neighbor Alice Token", "https://www.myneighboralice.com/"), for: new i.j(s, "0x658A109C5900BC6d2357c87549B651670E5b0539", 18, "FOR", "Fortube Token", "https://www.for.tube/home"), bux: new i.j(s, "0x211FfbE424b90e25a15531ca322adF1559779E45", 18, "BUX", "Bux Crypto Token", "https://getbux.com/bux-crypto/"), nuls: new i.j(s, "0x8CD6e29d3686d24d3C2018CEe54621eA0f89313B", 8, "NULS", "Nuls Token", "https://www.nuls.io/"), ramp: new i.j(s, "0x8519EA49c997f50cefFa444d240fB655e89248Aa", 18, "RAMP", "RAMP DEFI Token", "https://rampdefi.com/"), bfi: new i.j(s, "0x81859801b01764D4f0Fa5E64729f5a6C3b91435b", 18, "BFI", "bearn.fi Token", "https://bearn.fi/"), dexe: new i.j(s, "0x039cB485212f996A9DBb85A9a75d898F94d38dA6", 18, "DEXE", "DeXe Token", "https://dexe.network/"), bel: new i.j(s, "0x8443f091997f06a61670B735ED92734F5628692F", 18, "BEL", "Bella Protocol Token", "https://bella.fi/"), tpt: new i.j(s, "0xECa41281c24451168a37211F0bc2b8645AF45092", 4, "TPT", "Tokenpocket Token", "https://www.tokenpocket.pro/"), xmark: new i.j(s, "0x26A5dFab467d4f58fB266648CAe769503CEC9580", 9, "xMARK", "Benchmark Protocol Token", "https://benchmarkprotocol.finance/"), bmxx: new i.j(s, "0x4131b87F74415190425ccD873048C708F8005823", 18, "bMXX", "Multiplier Token", "https://multiplier.finance/"), iotx: new i.j(s, "0x9678E42ceBEb63F23197D726B29b1CB20d0064E5", 18, "IOTX", "Binance-Peg IoTeX Network Token", "https://iotex.io/"), bor: new i.j(s, "0x92D7756c60dcfD4c689290E8A9F4d263b3b32241", 18, "BOR", "BoringDAO Token", "https://www.boringdao.com/"), bopen: new i.j(s, "0xF35262a9d427F96d2437379eF090db986eaE5d42", 18, "bOPEN", "OPEN Governance Token", "https://opendao.io/"), dodo: new i.j(s, "0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2", 18, "DODO", "Dodo Token", "https://dodoex.io/"), swingby: new i.j(s, "0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739", 18, "SWINGBY", "Swingby Network Token", "https://swingby.network/"), zee: new i.j(s, "0x44754455564474A89358B2C2265883DF993b12F0", 18, "ZEE", "Zeroswap Token", "https://zeroswap.io/"), swgb: new i.j(s, "0xE40255C5d7fa7ceEc5120408C78C787CECB4cfdb", 18, "SWGb", "SWGb Token", "https://swirgepay.com/"), swg: new i.j(s, "0xe792f64C582698b8572AAF765bDC426AC3aEfb6B", 18, "SWG", "SWG Token", "https://swirgepay.com/"), sfp: new i.j(s, "0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb", 18, "SFP", "Safepal Token", "https://www.safepal.io/"), lina: new i.j(s, "0x762539b45A1dCcE3D36d080F74d1AED37844b878", 18, "LINA", "Linear Finance Token", "https://linear.finance/"), lit: new i.j(s, "0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723", 18, "LIT", "Litentry Token", "https://www.litentry.com/"), hget: new i.j(s, "0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731", 6, "HGET", "Hedget Token", "https://www.hedget.com/"), bdo: new i.j(s, "0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454", 18, "BDO", "Bdollar Token", "https://bdollar.fi/"), egld: new i.j(s, "0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe", 18, "EGLD", "Elrond Token", "https://elrond.com/"), front: new i.j(s, "0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b", 18, "FRONT", "Frontier Token", "https://frontier.xyz/"), btcst: new i.j(s, "0x78650B139471520656b9E7aA7A5e9276814a38e9", 17, "BTCST", "StandardBTCHashrate Token", "https://www.1-b.tc/"), bscx: new i.j(s, "0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587", 18, "BSCX", "BSCX Token", "https://bscex.org/"), balbt: new i.j(s, "0x72fAa679E1008Ad8382959FF48E392042A8b06f7", 18, "bALBT", "AllianceBlock Token", "https://allianceblock.io/"), asr: new i.j(s, "0x80D5f92C2c8C682070C95495313dDB680B267320", 2, "ASR", "AS Roma Token", "https://www.chiliz.com"), atm: new i.j(s, "0x25E9d05365c867E59C1904E7463Af9F312296f9E", 2, "ATM", "Athletico Madrid Token", "https://www.chiliz.com"), og: new i.j(s, "0xf05E45aD22150677a017Fbd94b84fBB63dc9b44c", 2, "OG", "OG Nice Token", "https://www.chiliz.com"), reef: new i.j(s, "0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e", 18, "REEF", "Reef.finance Token", "https://reef.finance/"), juv: new i.j(s, "0xC40C9A843E1c6D01b7578284a9028854f6683b1B", 2, "JUV", "Juventus Token", "https://www.chiliz.com"), psg: new i.j(s, "0xBc5609612b7C44BEf426De600B5fd1379DB2EcF1", 2, "PSG", "Paris Saint-Germain Token", "https://www.chiliz.com"), vai: new i.j(s, "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7", 18, "VAI", "VAI Stablecoin", "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7"), unfi: new i.j(s, "0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B", 18, "UNFI", "UNFI Token", "https://unifiprotocol.com"), twt: new i.j(s, "0x4B0F1812e5Df2A09796481Ff14017e6005508003", 18, "TWT", "Trust Wallet Token", "https://trustwallet.com/"), hard: new i.j(s, "0xf79037F6f6bE66832DE4E7516be52826BC3cBcc4", 6, "HARD", "HARD Token", "https://hard.kava.io"), broobee: new i.j(s, "0xE64F5Cb844946C1F102Bd25bBD87a5aB4aE89Fbe", 18, "bROOBEE", "ROOBEE Token", "https://roobee.io/"), stax: new i.j(s, "0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4", 18, "STAX", "StableX Token", "https://stablexswap.com/"), nar: new i.j(s, "0xA1303E6199b319a891b79685F0537D289af1FC83", 18, "NAR", "Narwhalswap Token", "https://narwhalswap.org/"), nya: new i.j(s, "0xbFa0841F7a90c4CE6643f651756EE340991F99D5", 18, "NYA", "Nyanswop Token", "https://nyanswop.org/"), ctk: new i.j(s, "0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929", 6, "CTK", "Certik Token", "https://www.certik.foundation/"), inj: new i.j(s, "0xa2B726B1145A4773F68593CF171187d8EBe4d495", 18, "INJ", "Injective Protocol Token", "https://injectiveprotocol.com/"), sxp: new i.j(s, "0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A", 18, "SXP", "Swipe Token", "https://swipe.io/"), alpha: new i.j(s, "0xa1faa113cbE53436Df28FF0aEe54275c13B40975", 18, "ALPHA", "Alpha Finance Token", "https://alphafinance.io/"), xvs: new i.j(s, "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63", 18, "XVS", "Venus Token", "https://venus.io/"), sushi: new i.j(s, "0x947950BcC74888a40Ffa2593C5798F11Fc9124C4", 18, "SUSHI", "Binance-Peg SushiToken", "https://sushi.com/"), comp: new i.j(s, "0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8", 18, "COMP", "Compound Finance Token", "https://compound.finance/"), bifi: new i.j(s, "0xCa3F508B8e4Dd382eE878A314789373D80A5190A", 18, "BIFI", "Beefy Finance Token", "https://beefy.finance/"), dusk: new i.j(s, "0xB2BD0749DBE21f623d9BABa856D3B0f0e1BFEc9C", 18, "DUSK", "Dusk Network Token", "https://dusk.network/"), beth: new i.j(s, "0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B", 18, "BETH", "Binance Beacon ETH", "https://ethereum.org/en/eth2/beacon-chain/"), mamzn: new i.j(s, "0x3947B992DC0147D2D89dF0392213781b04B25075", 18, "mAMZN", "Wrapped Mirror AMZN Token", "https://mirror.finance/"), mgoogl: new i.j(s, "0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f", 18, "mGOOGL", "Wrapped Mirror GOOGL Token", "https://mirror.finance/"), mnflx: new i.j(s, "0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc", 18, "mNFLX", "Wrapped Mirror NFLX Token", "https://mirror.finance/"), mtsla: new i.j(s, "0xF215A127A196e3988C09d052e16BcFD365Cd7AA3", 18, "mTSLA", "Wrapped Mirror TSLA Token", "https://mirror.finance/"), ltc: new i.j(s, "0x4338665CBB7B2485A8855A139b75D5e34AB0DB94", 18, "LTC", "Binance-Peg Litecoin Token", "https://litecoin.org/"), ada: new i.j(s, "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47", 18, "ADA", " Binance-Peg Cardano Token", "https://www.cardano.org/"), band: new i.j(s, "0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18", 18, "BAND", "Binance-Peg Band Protocol Token", "https://bandprotocol.com/"), dot: new i.j(s, "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402", 18, "DOT", "Binance-Peg Polkadot Token", "https://polkadot.network/"), eos: new i.j(s, "0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6", 18, "EOS", "Binance-Peg EOS Token", "https://eos.io/"), link: new i.j(s, "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD", 18, "LINK", "Binance-Peg Chainlink Token", "https://chain.link/"), xrp: new i.j(s, "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE", 18, "XRP", "Binance-Peg XRP Token", "https://ripple.com/xrp/"), atom: new i.j(s, "0x0Eb3a705fc54725037CC9e008bDede697f62F335", 18, "ATOM", "Binance-Peg Cosmos Token", "https://cosmos.network/"), yfii: new i.j(s, "0x7F70642d88cf1C4a3a7abb072B53B929b653edA5", 18, "YFII", "Binance-Peg YFII.finance Token", "https://dfi.money/#/"), xtz: new i.j(s, "0x16939ef78684453bfDFb47825F8a5F714f12623a", 18, "XTZ", "Binance-Peg Tezos Token", "https://www.tezos.com/"), bch: new i.j(s, "0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf", 18, "BCH", "Binance-Peg Bitcoin Cash Token", "https://bch.info/"), yfi: new i.j(s, "0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e", 18, "YFI", "Binance-Peg yearn.finance Token", "https://yearn.finance/"), uni: new i.j(s, "0xBf5140A22578168FD562DCcF235E5D43A02ce9B1", 18, "UNI", "Binance-Peg Uniswap Token", "https://uniswap.org/"), fil: new i.j(s, "0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153", 18, "FIL", "Binance-Peg Filecoin Token", "https://filecoin.io/"), bake: new i.j(s, "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5", 18, "BAKE", "Bakeryswap Token", "https://www.bakeryswap.org/"), burger: new i.j(s, "0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f", 18, "BURGER", "Burgerswap Token", "https://burgerswap.org/"), bdigg: new i.j(s, "0x5986D5c77c65e5801a5cAa4fAE80089f870A71dA", 18, "bDIGG", "Badger Sett Digg Token", "https://badger.finance/"), bbadger: new i.j(s, "0x1F7216fdB338247512Ec99715587bb97BBf96eae", 18, "bBadger", "Badger Sett Badger Token", "https://badger.finance/"), trade: new i.j(s, "0x7af173F350D916358AF3e218Bdf2178494Beb748", 18, "TRADE", "Unitrade Token", "https://unitrade.app/"), pnt: new i.j(s, "0xdaacB0Ab6Fb34d24E8a67BfA14BF4D95D4C7aF92", 18, "PNT", "pNetwork Token", "https://ptokens.io/"), mir: new i.j(s, "0x5B6DcF557E2aBE2323c48445E8CC948910d8c2c9", 18, "MIR", "Mirror Protocol Token", "https://mirror.finance/"), pbtc: new i.j(s, "0xeD28A457A5A76596ac48d87C0f577020F6Ea1c4C", 18, "pBTC", "pTokens BTC Token", "https://ptokens.io/"), lto: new i.j(s, "0x857B222Fc79e1cBBf8Ca5f78CB133d1b7CF34BBd", 18, "LTO", "LTO Network Token", "https://ltonetwork.com/"), pcws: new i.j(s, "0xbcf39F0EDDa668C58371E519AF37CA705f2bFcbd", 18, "pCWS", "PolyCrowns Token", "https://game.seascape.network/"), zil: new i.j(s, "0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787", 12, "ZIL", "Zilliqa Token", "https://www.zilliqa.com/"), lien: new i.j(s, "0x5d684ADaf3FcFe9CFb5ceDe3abf02F0Cdd1012E3", 8, "LIEN", "Lien Finance Token", "https://lien.finance/"), swth: new i.j(s, "0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C", 8, "SWTH", "Switcheo Network Token", "https://switcheo.network/"), dft: new i.j(s, "0x42712dF5009c20fee340B245b510c0395896cF6e", 18, "DFT", "Dfuture Token", "https://www.dfuture.com/home"), gum: new i.j(s, "0xc53708664b99DF348dd27C3Ac0759d2DA9c40462", 18, "GUM", "GourmetGalaxy Token", "https://gourmetgalaxy.io/"), dego: new i.j(s, "0x3FdA9383A84C05eC8f7630Fe10AdF1fAC13241CC", 18, "DEGO", "Dego Finance Token", "https://bsc.dego.finance/home"), easy: new i.j(s, "0x7C17c8bED8d14bAccE824D020f994F4880D6Ab3B", 18, "EASY", "EASY Token", "https://easyfi.network/"), oddz: new i.j(s, "0xCD40F2670CF58720b694968698A5514e924F742d", 18, "ODDZ", "Oddz Token", "https://oddz.fi/"), hoo: new i.j(s, "0xE1d1F66215998786110Ba0102ef558b22224C016", 8, "HOO", "Hoo Token", "https://hoo.com/"), apys: new i.j(s, "0x37dfACfaeDA801437Ff648A1559d73f4C40aAcb7", 18, "APYS", "APY Swap Token", "https://apyswap.com/"), bondly: new i.j(s, "0x96058f8C3e16576D9BD68766f3836d9A33158f89", 18, "BONDLY", "Bondly Token", "https://www.bondly.finance/"), tko: new i.j(s, "0x9f589e3eabe42ebC94A44727b3f3531C0c877809", 18, "TKO", "Tokocrypto Token", "https://www.tokocrypto.com/"), itam: new i.j(s, "0x04C747b40Be4D535fC83D09939fb0f626F32800B", 18, "ITAM", "Itam Network Token", "https://itam.network/"), arpa: new i.j(s, "0x6F769E65c14Ebd1f68817F5f1DcDb61Cfa2D6f7e", 18, "ARPA", "Arpachain Token", "https://arpachain.io/"), eps: new i.j(s, "0xA7f552078dcC247C2684336020c03648500C6d9F", 18, "EPS", "Ellipsis Finance Token", "https://ellipsis.finance/"), jgn: new i.j(s, "0xC13B7a43223BB9Bf4B69BD68Ab20ca1B79d81C75", 18, "JGN", "Juggernaut DeFi Token", "https://jgndefi.com/"), tlm: new i.j(s, "0x2222227E22102Fe3322098e4CBfE18cFebD57c95", 4, "TLM", "Alien Worlds Trilium Token", "https://alienworlds.io/"), perl: new i.j(s, "0x0F9E4D49f25de22c2202aF916B681FBB3790497B", 18, "PERL", "Perlin", "https://perlinx.finance/"), alpa: new i.j(s, "0xc5E6689C9c8B02be7C49912Ef19e79cF24977f03", 18, "ALPA", "AlpaToken", "https://bsc.alpaca.city/"), hzn: new i.j(s, "0xC0eFf7749b125444953ef89682201Fb8c6A917CD", 18, "HZN", "Horizon Protocol Token", "https://horizonprotocol.com/"), suter: new i.j(s, "0x4CfbBdfBd5BF0814472fF35C72717Bd095ADa055", 18, "SUTER", "Suterusu Token", "https://shield.suterusu.io/"), cgg: new i.j(s, "0x1613957159E9B0ac6c80e824F7Eea748a32a0AE2", 18, "CGG", "pTokens CGG Token", "https://chainguardians.io/"), mix: new i.j(s, "0xB67754f5b4C704A24d2db68e661b2875a4dDD197", 18, "MIX", "Mix Token", "https://mixie.chainguardians.io/"), hakka: new i.j(s, "0x1D1eb8E8293222e1a29d2C0E4cE6C0Acfd89AaaC", 18, "HAKKA", "Hakka Token", "https://hakka.finance/"), xed: new i.j(s, "0x5621b5A3f4a8008c4CCDd1b942B121c8B1944F1f", 18, "XED", "Exeedme Token", "https://www.exeedme.com/"), "\u03c4btc": new i.j(s, "0x2cD1075682b0FCCaADd0Ca629e138E64015Ba11c", 9, "\u03c4BTC", "\u03c4Bitcoin Token", "https://www.btcst.finance/"), alpaca: new i.j(s, "0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F", 18, "ALPACA", "AlpacaToken", "https://www.alpacafinance.org/"), dfd: new i.j(s, "0x9899a98b222fCb2f3dbee7dF45d943093a4ff9ff", 18, "DFD", "DefiDollar DAO", "https://dusd.finance/"), lmt: new i.j(s, "0x9617857E191354dbEA0b714d78Bc59e57C411087", 18, "LMT", "Lympo Market Token", "https://lympo.io/lmt/"), btt: new i.j(s, "0x8595F9dA7b868b1822194fAEd312235E43007b49", 18, "BTT", "Binance-Peg BitTorrent Token", "https://www.bittorrent.com/"), trx: new i.j(s, "0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B", 18, "TRX", "TRON Token", "https://tron.network/"), win: new i.j(s, "0xaeF0d72a118ce24feE3cD1d43d383897D05B4e99", 18, "WIN", "WIN Token", "https://winklink.org/"), mcoin: new i.j(s, "0x49022089e78a8D46Ec87A3AF86a1Db6c189aFA6f", 18, "MCOIN", "Wrapped Mirror COIN Token", "https://mirror.finance/"), math: new i.j(s, "0xF218184Af829Cf2b0019F8E6F0b2423498a36983", 18, "MATH", "MATH Token", "https://mathwallet.org/"), kun: new i.j(s, "0x1A2fb0Af670D0234c2857FaD35b789F8Cb725584", 18, "KUN", "QIAN governance token", "https://chemix.io/home"), qsd: new i.j(s, "0x07AaA29E63FFEB2EBf59B33eE61437E1a91A3bb2", 18, "QSD", "QIAN second generation dollar", "https://chemix.io/home"), hyfi: new i.j(s, "0x9a319b959e33369C5eaA494a770117eE3e585318", 18, "HYFI", "HYFI Token", "https://hyfi.pro/#/"), oin: new i.j(s, "0x658E64FFcF40D240A43D52CA9342140316Ae44fA", 8, "OIN", "oinfinance Token", "https://oin.finance/"), doge: new i.j(s, "0xbA2aE424d960c26247Dd6c32edC70B295c744C43", 8, "DOGE", "Binance-Peg Dogecoin", "https://dogecoin.com/"), fine: new i.j(s, "0x4e6415a5727ea08aAE4580057187923aeC331227", 18, "FINE", "Refinable Token", "https://refinable.com/"), one: new i.j(s, "0x04BAf95Fd4C52fd09a56D840bAEe0AB8D7357bf0", 18, "ONE", "BigONE Token", "https://www.bigone.com/"), pmon: new i.j(s, "0x1796ae0b0fa4862485106a0de9b654eFE301D0b2", 18, "PMON", "Polkamon Token", "https://polkamon.com/"), "\u03c4doge": new i.j(s, "0xe550a593d09FBC8DCD557b5C88Cea6946A8b404A", 8, "\u03c4DOGE", "\u03c4Dogecoin", "https://www.btcst.finance/"), btr: new i.j(s, "0x5a16E8cE8cA316407c6E6307095dc9540a8D62B3", 18, "BTR", "Bitrue Token", "https://www.bitrue.com/"), ubxt: new i.j(s, "0xBbEB90cFb6FAFa1F69AA130B7341089AbeEF5811", 18, "UBXT", "UpBots Token", "https://upbots.com/"), wmass: new i.j(s, "0x7e396BfC8a2f84748701167c2d622F041A1D7a17", 8, "WMASS", "Wrapped MASS Token", "https://massnet.org/en/"), rfox: new i.j(s, "0x0a3A21356793B49154Fd3BbE91CBc2A16c0457f5", 18, "RFOX", "RFOX Token", "https://www.redfoxlabs.io/"), xend: new i.j(s, "0x4a080377f83D669D7bB83B3184a8A5E61B500608", 18, "XEND", "XEND Token", "https://xend.finance/"), cyc: new i.j(s, "0x810EE35443639348aDbbC467b33310d2AB43c168", 18, "CYC", "CYC Token", "https://cyclone.xyz/"), chr: new i.j(s, "0xf9CeC8d50f6c8ad3Fb6dcCEC577e05aA32B224FE", 6, "CHR", "Chroma Token", "https://chromia.com/"), deri: new i.j(s, "0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5", 18, "DERI", "Deri Token", "https://deri.finance/#/index"), well: new i.j(s, "0xf07a32Eb035b786898c00bB1C64d8c6F8E7a46D5", 18, "WELL", "BitWell Token", "https://www.bitwellex.com/"), wex: new i.j(s, "0xa9c41A46a6B3531d28d5c32F6633dd2fF05dFB90", 18, "WEX", "WaultSwap Token", "https://wault.finance/"), waultx: new i.j(s, "0xB64E638E60D154B43f660a6BF8fD8a3b249a6a21", 18, "WAULTx", "Wault Token", "https://wault.finance/"), popen: new i.j(s, "0xaBaE871B7E3b67aEeC6B46AE9FE1A91660AadAC5", 18, "pOPEN", "OPEN Governance Token", "https://opendao.io/"), ez: new i.j(s, "0x5512014efa6Cd57764Fa743756F7a6Ce3358cC83", 18, "EZ", "Easy V2 Token", "https://easyfi.network/"), vrt: new i.j(s, "0x5F84ce30DC3cF7909101C69086c50De191895883", 18, "VRT", "Venus Reward Token", "https://venus.io/"), tusd: new i.j(s, "0x14016E85a25aeb13065688cAFB43044C2ef86784", 18, "TUSD", "Binance-Peg TrueUSD Token", "https://www.trueusd.com/"), mtrg: new i.j(s, "0xBd2949F67DcdC549c6Ebe98696449Fa79D988A9F", 18, "MTRG", "Wrapped MTRG Token", "https://www.meter.io/"), ktn: new i.j(s, "0xDAe6c2A48BFAA66b43815c5548b10800919c993E", 18, "KTN", "Kattana Token", "https://kattana.io/"), qkc: new i.j(s, "0xA1434F1FC3F437fa33F7a781E041961C0205B5Da", 18, "QKC", "QuarkChain Token", "https://quarkchain.io/"), bcfx: new i.j(s, "0x045c4324039dA91c52C55DF5D785385Aab073DcF", 18, "bCFX", "BSC Conflux Token", "https://www.confluxnetwork.org/"), mx: new i.j(s, "0x9F882567A62a5560d147d64871776EeA72Df41D3", 18, "MX", "MX Token", "https://www.mxc.com/"), ata: new i.j(s, "0xA2120b9e674d3fC3875f415A7DF52e382F141225", 18, "ATA", "Automata Token", "https://www.ata.network/"), mbox: new i.j(s, "0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377", 18, "MBOX", "Mobox Token", "https://www.mobox.io/#/"), boring: new i.j(s, "0xffEecbf8D7267757c2dc3d13D730E97E15BfdF7F", 18, "BORING", "BoringDAO Token", "https://www.boringdao.com/"), marsh: new i.j(s, "0x2FA5dAF6Fe0708fBD63b1A7D1592577284f52256", 18, "MARSH", "Unmarshal Token", "https://unmarshal.io/"), ampl: new i.j(s, "0xDB021b1B247fe2F1fa57e0A87C748Cc1E321F07F", 9, "AMPL", "AMPL Token", "https://www.ampleforth.org/"), o3: new i.j(s, "0xEe9801669C6138E84bD50dEB500827b776777d28", 18, "O3", "O3 Swap Token", "https://o3swap.com/"), hai: new i.j(s, "0xaA9E582e5751d703F85912903bacADdFed26484C", 8, "HAI", "Hacken Token", "https://hacken.io/"), htb: new i.j(s, "0x4e840AADD28DA189B9906674B4Afcb77C128d9ea", 18, "HTB", "Hotbit Token", "https://www.hotbit.io/"), woo: new i.j(s, "0x4691937a7508860F876c9c0a2a617E7d9E945D4B", 18, "WOO", "Wootrade Network Token", "https://woo.network/"), $dg: new i.j(s, "0x9Fdc3ae5c814b79dcA2556564047C5e7e5449C19", 18, "$DG", "Decentral Games Token", "https://decentral.games/"), safemoon: new i.j(s, "0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3", 9, "SAFEMOON", "Safemoon Token", "https://safemoon.net/"), axs: new i.j(s, "0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0", 18, "AXS", "Binance-Pegged Axie Infinity Shard", "https://axieinfinity.com/"), c98: new i.j(s, "0xaEC945e04baF28b135Fa7c640f624f8D90F1C3a6", 18, "c98", "Coin98 Token", "https://coin98.com/"), pots: new i.j(s, "0x3Fcca8648651E5b974DD6d3e50F61567779772A8", 18, "POTS", "Moonpot Token", "https://moonpot.com/"), gnt: new i.j(s, "0xF750A26EB0aCf95556e8529E72eD530f3b60f348", 18, "GNT", "GreenTrust Token", "https://www.greentrusttoken.com/"), rusd: new i.j(s, "0x07663837218A003e66310a01596af4bf4e44623D", 18, "rUSD", "rUSD Token", "https://appv2.rampdefi.com/#/"), bp: new i.j(s, "0xACB8f52DC63BB752a51186D1c55868ADbFfEe9C1", 18, "BP", "BunnyPark Token", "https://www.bunnypark.com/"), sfund: new i.j(s, "0x477bC8d23c634C154061869478bce96BE6045D12", 18, "SFUND", "Seedify Fund Token", "https://seedify.fund/"), naos: new i.j(s, "0x758d08864fB6cCE3062667225ca10b8F00496cc2", 18, "NAOS", "NAOSToken", "https://naos.finance/") },
                d = { wbnb: new i.j(c, "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd", 18, "WBNB", "Wrapped BNB", "https://www.binance.com/"), cake: new i.j(c, "0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe", 18, "CAKE", "PancakeSwap Token", "https://pancakeswap.finance/"), busd: new i.j(c, "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee", 18, "BUSD", "Binance USD", "https://www.paxos.com/busd/"), syrup: new i.j(c, "0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9", 18, "SYRUP", "SyrupBar Token", "https://pancakeswap.finance/"), bake: new i.j(c, "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5", 18, "BAKE", "Bakeryswap Token", "https://www.bakeryswap.org/") },
                l = function() { return parseInt("56", 10) === i.a.TESTNET ? Object.keys(u).reduce((function(e, t) { return Object(r.a)(Object(r.a)({}, e), {}, Object(a.a)({}, t, d[t] || u[t])) }), {}) : u },
                p = function() { var e = l(); return Object.keys(e).reduce((function(t, n) { return Object(r.a)(Object(r.a)({}, t), {}, Object(a.a)({}, n, Object(o.d)(e[n]))) }), {}) };
            t.a = l()
        },
        348: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_stakedToken","type":"address"},{"internalType":"contract IBEP20","name":"_rewardToken","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"},{"internalType":"uint256","name":"_poolLimitPerUser","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenRecovered","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AdminTokenRecovery","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolLimitPerUser","type":"uint256"}],"name":"NewPoolLimit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"rewardPerBlock","type":"uint256"}],"name":"NewRewardPerBlock","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"}],"name":"NewStartAndEndBlocks","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"RewardsStop","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"PRECISION_FACTOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"accTokenPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"hasUserLimit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastRewardBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLimitPerUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_tokenAmount","type":"uint256"}],"name":"recoverWrongTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakedToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stopReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_hasUserLimit","type":"bool"},{"internalType":"uint256","name":"_poolLimitPerUser","type":"uint256"}],"name":"updatePoolLimitPerUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"}],"name":"updateRewardPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"}],"name":"updateStartAndEndBlocks","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        35: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return x })), n.d(t, "m", (function() { return j })), n.d(t, "n", (function() { return w })), n.d(t, "l", (function() { return O })), n.d(t, "o", (function() { return B })), n.d(t, "p", (function() { return A })), n.d(t, "b", (function() { return C })), n.d(t, "i", (function() { return E })), n.d(t, "q", (function() { return P })), n.d(t, "c", (function() { return S })), n.d(t, "s", (function() { return I })), n.d(t, "j", (function() { return F })), n.d(t, "g", (function() { return D })), n.d(t, "r", (function() { return N })), n.d(t, "h", (function() { return L })), n.d(t, "d", (function() { return M })), n.d(t, "f", (function() { return R })), n.d(t, "e", (function() { return U })), n.d(t, "k", (function() { return _ }));
            var a = n(4),
                r = { 97: "0x1d32c2945C8FDCBc7156c553B7cEa4325a17f4f9", 56: "0x73feaa1eE314F8c655E354234017bE2193C9E24E" },
                i = { 97: "0x5790c3534F30437641541a0FA04C992799602998", 56: "0x5aF6D33DE2ccEC94efb1bDF8f92Bd58085432d2c" },
                o = { 56: "0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B", 97: "0x8F3273Fb89B075b1645095ABaC6ed17B2d4Bc576" },
                s = { 56: "0xDf4dBf6536201370F95e06A0F8a7a70fE40E388a", 97: "0x4B683C7E13B6d5D7fd1FeA9530F451954c1A7c8A" },
                c = { 56: "0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07", 97: "0x60935F36e4631F73f0f407e68642144e07aC7f5E" },
                u = { 56: "0xfa249Caa1D16f75fa159F7DFBAc0cC5EaB48CeFf", 97: "0x707CBF373175fdB601D34eeBF2Cf665d08f01148" },
                d = { 56: "0xE7e53A7e9E3Cf6b840f167eF69519175c497e149", 97: "" },
                l = { 56: "0x3C6919b132462C1FEc572c6300E83191f4F0012a", 97: "0xd2Ac1B1728Bb1C11ae02AB6e75B76Ae41A2997e3" },
                p = { 56: "0xFee8A195570a18461146F401d6033f5ab3380849", 97: "0x7b7b1583De1DeB32Ce6605F6deEbF24A0671c17C" },
                b = { 56: "0xd718baa0B1F4f70dcC8458154042120FFE0DEFFA", 97: "0xC787F45B833721ED3aC46E99b703B3E1E01abb97" },
                y = { 56: "0x23c41D28A239dDCAABd1bb1deF8d057189510066", 97: "0x24ec6962dbe874F6B67B5C50857565667fA0854F" },
                m = { 56: "0xa80240Eb5d7E05d3F250cF000eEc0891d00b51CC", 97: "" },
                f = { 56: "0x18B2A687610328590Bc8F2e5fEdDe3b582A49cdA", 97: "" },
                h = { 56: "0xD276fCF34D54A926773c399eBAa772C12ec394aC", 97: "" },
                k = { 56: "0x5B4a770Abe7Eafb2601CA4dF9d73EA99363E60a4", 97: "" },
                T = { 56: "0x342c99e9aC24157657095eC69CB04b73257e7A9C", 97: "" },
                g = { 56: "0x24ED31d31C5868e5a96aA77fdcB890f3511fa0b2", 97: "0x382cB497110F398F0f152cae82821476AE51c9cF" },
                v = { 56: "0xb92Ab7c1edcb273AbA24b0656cEb3681654805D2", 97: "0x3F9602593b4f7C67ab045DB51BbDEa94E40fA9Fe" },
                x = function(e) { return e[56] ? e[56] : e[a.a.MAINNET] },
                j = function() { return x(r) },
                w = function() { return x(o) },
                O = function() { return x(i) },
                B = function() { return x(s) },
                A = function() { return x(c) },
                C = function() { return x(u) },
                E = function() { return x(d) },
                P = function() { return x(l) },
                S = function() { return x(p) },
                I = function() { return x(b) },
                F = function() { return x(y) },
                D = function() { return x(m) },
                N = function() { return x(f) },
                L = function() { return x(h) },
                M = function() { return x(k) },
                R = function() { return x(T) },
                U = function() { return x(g) },
                _ = function() { return x(v) }
        },
        36: function(e, t, n) {
            "use strict";
            n.d(t, "t", (function() { return l })), n.d(t, "e", (function() { return p })), n.d(t, "a", (function() { return b })), n.d(t, "l", (function() { return y })), n.d(t, "u", (function() { return m })), n.d(t, "f", (function() { return f })), n.d(t, "r", (function() { return h })), n.d(t, "n", (function() { return k })), n.d(t, "m", (function() { return T })), n.d(t, "h", (function() { return g })), n.d(t, "p", (function() { return v })), n.d(t, "i", (function() { return x })), n.d(t, "c", (function() { return j })), n.d(t, "d", (function() { return w })), n.d(t, "b", (function() { return O })), n.d(t, "s", (function() { return B })), n.d(t, "k", (function() { return A })), n.d(t, "o", (function() { return C })), n.d(t, "g", (function() { return E })), n.d(t, "v", (function() { return P })), n.d(t, "q", (function() { return S })), n.d(t, "j", (function() { return I }));
            var a = n(17),
                r = n(4),
                i = n(34),
                o = n(121);
            n.d(t, "w", (function() { return o.a }));
            var s = n(86);
            n.d(t, "x", (function() { return s.a }));
            n(235);
            var c, u, d, l = "0x10ED43C718714eb63d5aA57B78B54704E256024E",
                p = (c = {}, Object(a.a)(c, r.a.MAINNET, [i.b.wbnb, i.b.cake, i.b.busd, i.b.usdt, i.b.btcb, i.b.ust, i.b.eth, i.b.usdc]), Object(a.a)(c, r.a.TESTNET, [i.d.wbnb, i.d.cake, i.d.busd]), c),
                b = Object(a.a)({}, r.a.MAINNET, {}),
                y = Object(a.a)({}, r.a.MAINNET, {}),
                m = (u = {}, Object(a.a)(u, r.a.MAINNET, [i.b.busd, i.b.cake, i.b.btcb]), Object(a.a)(u, r.a.TESTNET, [i.d.wbnb, i.d.cake, i.d.busd]), u),
                f = (d = {}, Object(a.a)(d, r.a.MAINNET, [i.b.wbnb, i.b.dai, i.b.busd, i.b.usdt]), Object(a.a)(d, r.a.TESTNET, [i.d.wbnb, i.d.cake, i.d.busd]), d),
                h = Object(a.a)({}, r.a.MAINNET, [
                    [i.b.cake, i.b.wbnb],
                    [i.b.busd, i.b.usdt],
                    [i.b.dai, i.b.usdt]
                ]),
                k = 50,
                T = 1200,
                g = r.e.BigInt(0),
                v = new r.g(r.e.BigInt(1), r.e.BigInt(1e4)),
                x = r.e.BigInt(1e4),
                j = new r.g(r.e.BigInt(100), x),
                w = new r.g(r.e.BigInt(300), x),
                O = new r.g(r.e.BigInt(500), x),
                B = new r.g(r.e.BigInt(1e3), x),
                A = new r.g(r.e.BigInt(1500), x),
                C = r.e.exponentiate(r.e.BigInt(10), r.e.BigInt(16)),
                E = new r.g(r.e.BigInt(50), r.e.BigInt(1e4)),
                P = new r.g("0"),
                S = new r.g("1"),
                I = ["0x7F367cC41522cE07553e823bf3be79A889DEbe1B", "0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b", "0x901bb9583b24D97e995513C6778dc6888AB6870e", "0xA7e5d5A720f06526557c513402f2e6B5fA20b008", "0x8576aCC5C05D6Ce88f4e49bf65BdF0C62F91353C"]
        },
        37: function(e, t, n) {
            "use strict";
            n.d(t, "h", (function() { return l })), n.d(t, "e", (function() { return p })), n.d(t, "b", (function() { return b })), n.d(t, "a", (function() { return y })), n.d(t, "c", (function() { return m })), n.d(t, "f", (function() { return f })), n.d(t, "g", (function() { return h })), n.d(t, "d", (function() { return k })), n.d(t, "i", (function() { return T }));
            var a = n(104),
                r = n(42),
                i = n(311),
                o = n(50),
                s = n(421),
                c = n(4),
                u = n(36),
                d = n(56);

            function l(e) { try { return Object(r.getAddress)(e) } catch (t) { return !1 } }

            function p(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.a.MAINNET;
                switch (t) {
                    case "transaction":
                        return "".concat(d.b[n], "/tx/").concat(e);
                    case "token":
                        return "".concat(d.b[n], "/token/").concat(e);
                    case "block":
                        return "".concat(d.b[n], "/block/").concat(e);
                    case "countdown":
                        return "".concat(d.b[n], "/block/countdown/").concat(e);
                    default:
                        return "".concat(d.b[n], "/address/").concat(e)
                }
            }

            function b(e) { return e.mul(o.a.from(1e4).add(o.a.from(1e3))).div(o.a.from(1e4)) }

            function y(e) { return new c.g(c.e.BigInt(e), c.e.BigInt(1e4)) }

            function m(e, t) { if (t < 0 || t > 1e4) throw Error("Unexpected slippage value: ".concat(t)); return [c.e.divide(c.e.multiply(e.raw, c.e.BigInt(1e4 - t)), c.e.BigInt(1e4)), c.e.divide(c.e.multiply(e.raw, c.e.BigInt(1e4 + t)), c.e.BigInt(1e4))] }

            function f(e, t, n, r) { if (!l(e) || e === i.a) throw Error("Invalid 'address' parameter '".concat(e, "'.")); return new a.b(e, t, function(e, t) { return t ? function(e, t) { return e.getSigner(t).connectUnchecked() }(e, t) : e }(n, r)) }

            function h(e, t, n) { return f(u.t, s.a, t, n) }

            function k(e) { return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") }

            function T(e, t) { var n; return t === c.d || Boolean(t instanceof c.j && (null === (n = e[t.chainId]) || void 0 === n ? void 0 : n[t.address])) }
        },
        370: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return k })), n.d(t, "c", (function() { return T }));
            var a = n(3),
                r = n.n(a),
                i = n(12),
                o = n(17),
                s = n(6),
                c = n(15),
                u = n(210),
                d = n(209),
                l = { isInitialized: !1, isLoading: !0, data: u.a.reduce((function(e, t) { return Object(s.a)(Object(s.a)({}, e), {}, Object(o.a)({}, t.id, t)) }), {}) },
                p = Object(c.e)({ name: "teams", initialState: l, reducers: { fetchStart: function(e) { e.isLoading = !0 }, fetchFailed: function(e) { e.isLoading = !1, e.isInitialized = !0 }, teamFetchSucceeded: function(e, t) { e.isInitialized = !0, e.isLoading = !1, e.data[t.payload.id] = t.payload }, teamsFetchSucceeded: function(e, t) { e.isInitialized = !0, e.isLoading = !1, e.data = t.payload } } }),
                b = p.actions,
                y = b.fetchStart,
                m = b.teamFetchSucceeded,
                f = b.fetchFailed,
                h = b.teamsFetchSucceeded,
                k = function(e) {
                    return function() {
                        var t = Object(i.a)(r.a.mark((function t(n) {
                            var a;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, n(y()), t.next = 4, Object(d.a)(e);
                                    case 4:
                                        a = t.sent, n(m(a)), t.next = 11;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t.catch(0), n(f());
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 8]
                            ])
                        })));
                        return function(e) { return t.apply(this, arguments) }
                    }()
                },
                T = function() {
                    return function() {
                        var e = Object(i.a)(r.a.mark((function e(t) {
                            var n;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, t(y()), e.next = 4, Object(d.b)();
                                    case 4:
                                        n = e.sent, t(h(n)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), t(f());
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        })));
                        return function(t) { return e.apply(this, arguments) }
                    }()
                };
            t.a = p.reducer
        },
        371: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return m }));
            var a = n(17),
                r = n(33),
                i = n(6),
                o = n(11),
                s = n(3),
                c = n.n(s),
                u = n(12),
                d = n(15),
                l = n(160),
                p = n(35),
                b = n(40),
                y = n(197),
                m = Object(d.c)("collectibles/fetchWalletNfts", function() {
                    var e = Object(u.a)(c.a.mark((function e(t) {
                        var n, a;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object.keys(l.a).map(function() {
                                        var e = Object(u.a)(c.a.mark((function e(n) {
                                            var a, r, i, o, s, d, m, f, h;
                                            return c.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return a = l.a[n].address, r = Object(p.a)(a), i = Object(b.l)(r), e.next = 5, i.balanceOf(t);
                                                    case 5:
                                                        if (o = e.sent, s = o.toNumber(), !o.eq(0)) { e.next = 9; break }
                                                        return e.abrupt("return", []);
                                                    case 9:
                                                        for (d = function() {
                                                                var e = Object(u.a)(c.a.mark((function e(n) {
                                                                    var a, o, s;
                                                                    return c.a.wrap((function(e) {
                                                                        for (;;) switch (e.prev = e.next) {
                                                                            case 0:
                                                                                return e.prev = 0, e.next = 3, i.tokenOfOwnerByIndex(t, n);
                                                                            case 3:
                                                                                return a = e.sent, o = a.toNumber(), e.next = 7, Object(y.b)(r, o);
                                                                            case 7:
                                                                                return s = e.sent, e.abrupt("return", [o, s.identifier]);
                                                                            case 11:
                                                                                return e.prev = 11, e.t0 = e.catch(0), console.error("getTokenIdAndData", e.t0), e.abrupt("return", null);
                                                                            case 15:
                                                                            case "end":
                                                                                return e.stop()
                                                                        }
                                                                    }), e, null, [
                                                                        [0, 11]
                                                                    ])
                                                                })));
                                                                return function(t) { return e.apply(this, arguments) }
                                                            }(), m = [], f = 0; f < s; f++) m.push(d(f));
                                                        return e.next = 14, Promise.all(m);
                                                    case 14:
                                                        return h = e.sent, e.abrupt("return", h);
                                                    case 16:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) { return e.apply(this, arguments) }
                                    }()), e.next = 3, Promise.all(n);
                                case 3:
                                    return a = e.sent, e.abrupt("return", a.flat());
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                f = Object(d.e)({
                    name: "collectibles",
                    initialState: { isInitialized: !1, isLoading: !0, data: {} },
                    reducers: {},
                    extraReducers: function(e) {
                        e.addCase(m.pending, (function(e) { e.isLoading = !0 })), e.addCase(m.fulfilled, (function(e, t) {
                            e.isLoading = !1, e.isInitialized = !0, e.data = t.payload.reduce((function(e, t) {
                                if (!t) return e;
                                var n = t,
                                    s = Object(o.a)(n, 2),
                                    c = s[0],
                                    u = s[1];
                                return Object(i.a)(Object(i.a)({}, e), {}, Object(a.a)({}, u, e[u] ? [].concat(Object(r.a)(e[u]), [c]) : [c]))
                            }), {})
                        }))
                    }
                });
            t.a = f.reducer
        },
        39: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() { return i })), n.d(t, "a", (function() { return o })), n.d(t, "b", (function() { return s })), n.d(t, "d", (function() { return c }));
            var a = n(29),
                r = n.n(a),
                i = new r.a(0),
                o = new r.a(1),
                s = (new r.a(9), new r.a(10)),
                c = function(e) { return u(e).toJSON() },
                u = function(e) { return new r.a(e.toString()) }
        },
        390: function(e, t, n) {
            "use strict";
            var a, r = n(13),
                i = (n(0), n(7)),
                o = n(2),
                s = n(220),
                c = n(1),
                u = Object(i.e)(s.b)(a || (a = Object(r.a)(["\n  display: flex;\n  Size: 2px;\n  justify-content: center;\n  align-items: left;\n"])));
            t.a = function() { return Object(c.jsx)(u, { children: Object(c.jsx)(o.mb, {}) }) }
        },
        391: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return v }));
            n(6), n(57);
            var a, r = n(11),
                i = n(13),
                o = n(0),
                s = n(4),
                c = n(2),
                u = (n(85), n(7)),
                d = n(21),
                l = n(20),
                p = n(214),
                b = n(88),
                y = (n(152), n(52)),
                m = n(100),
                f = n(32),
                h = (n(120), n(53)),
                k = n(25),
                T = (n(36), n(202), n(1)),
                g = Object(u.e)(k.b)(a || (a = Object(i.a)(["\n  height: 24px;\n"])));

            function v(e) {
                var t = e.pair,
                    n = e.showUnwrapped,
                    a = void 0 !== n && n,
                    i = Object(l.a)().account,
                    u = Object(d.b)().t,
                    v = a ? t.token0 : Object(y.a)(t.token0),
                    x = a ? t.token1 : Object(y.a)(t.token1),
                    j = Object(o.useState)(!1),
                    w = Object(r.a)(j, 2),
                    O = w[0],
                    B = w[1],
                    A = Object(b.d)(null !== i && void 0 !== i ? i : void 0, t.liquidityToken),
                    C = Object(p.a)(t.liquidityToken),
                    E = A && C && s.e.greaterThanOrEqual(C.raw, A.raw) ? new s.g(A.raw, C.raw) : void 0,
                    P = t && C && A && s.e.greaterThanOrEqual(C.raw, A.raw) ? [t.getLiquidityValue(t.token0, C, A, !1), t.getLiquidityValue(t.token1, C, A, !1)] : [void 0, void 0],
                    S = Object(r.a)(P, 2),
                    I = S[0],
                    F = S[1];
                return Object(T.jsx)(T.Fragment, { children: A && s.e.greaterThan(A.raw, s.e.BigInt(0)) ? Object(T.jsx)(c.p, { children: Object(T.jsx)(c.q, { children: Object(T.jsxs)(f.a, { gap: "16px", children: [Object(T.jsx)(g, { children: Object(T.jsx)(k.c, { children: Object(T.jsx)(c.pb, { color: "secondary", bold: !0, children: u("LP tokens in your wallet") }) }) }), Object(T.jsxs)(g, { onClick: function() { return B(!O) }, children: [Object(T.jsxs)(k.c, { children: [Object(T.jsx)(h.b, { currency0: v, currency1: x, margin: !0, size: 20 }), Object(T.jsxs)(c.pb, { small: !0, color: "textSubtle", children: [v.symbol, "-", x.symbol, " LP"] })] }), Object(T.jsx)(k.c, { children: Object(T.jsx)(c.pb, { children: A ? A.toSignificant(4) : "-" }) })] }), Object(T.jsxs)(f.a, { gap: "4px", children: [Object(T.jsxs)(g, { children: [Object(T.jsxs)(c.pb, { color: "textSubtle", small: !0, children: [u("Share of Pool"), ":"] }), Object(T.jsx)(c.pb, { children: E ? "".concat(E.toFixed(6), "%") : "-" })] }), Object(T.jsxs)(g, { children: [Object(T.jsxs)(c.pb, { color: "textSubtle", small: !0, children: [u("Pooled %asset%", { asset: v.symbol }), ":"] }), I ? Object(T.jsx)(k.c, { children: Object(T.jsx)(c.pb, { ml: "6px", children: null === I || void 0 === I ? void 0 : I.toSignificant(6) }) }) : "-"] }), Object(T.jsxs)(g, { children: [Object(T.jsxs)(c.pb, { color: "textSubtle", small: !0, children: [u("Pooled %asset%", { asset: x.symbol }), ":"] }), F ? Object(T.jsx)(k.c, { children: Object(T.jsx)(c.pb, { ml: "6px", children: null === F || void 0 === F ? void 0 : F.toSignificant(6) }) }) : "-"] })] })] }) }) }) : Object(T.jsx)(m.b, { children: Object(T.jsxs)(c.pb, { fontSize: "14px", style: { textAlign: "center" }, children: [Object(T.jsx)("span", { role: "img", "aria-label": "pancake-icon", children: "\ud83e\udd5e" }), " ", u("By adding liquidity you'll earn 0.17% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.")] }) }) })
            }
        },
        392: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return Ve }));
            var a, r = n(17),
                i = n(11),
                o = n(13),
                s = n(0),
                c = n(2),
                u = n(7),
                d = n(264),
                l = n(21),
                p = n(4),
                b = n(45),
                y = n(145),
                m = n(20),
                f = n(54),
                h = n(37),
                k = n(32),
                T = n(25),
                g = n(36),
                v = n(69),
                x = n(53),
                j = n(1),
                w = u.e.div(a || (a = Object(o.a)(["\n  border: 1px solid ", ";\n  border-radius: 10px;\n  display: flex;\n  padding: 6px;\n\n  align-items: center;\n  :hover {\n    cursor: ", ";\n    background-color: ", ";\n  }\n\n  background-color: ", ";\n  opacity: ", ";\n"])), (function(e) { var t = e.theme; return e.disable ? "transparent" : t.colors.dropdown }), (function(e) { return !e.disable && "pointer" }), (function(e) { var t = e.theme; return !e.disable && t.colors.background }), (function(e) { var t = e.theme; return e.disable && t.colors.dropdown }), (function(e) { return e.disable && "0.4" }));

            function O(e) {
                var t = e.chainId,
                    n = e.onSelect,
                    a = e.selectedCurrency,
                    r = Object(l.b)().t;
                return Object(j.jsxs)(k.a, { gap: "md", children: [Object(j.jsxs)(T.a, { children: [Object(j.jsx)(c.pb, { fontSize: "14px", children: r("Common bases") }), Object(j.jsx)(v.a, { text: r("These tokens are commonly paired with other tokens."), ml: "4px" })] }), Object(j.jsxs)(T.a, { gap: "auto", children: [Object(j.jsxs)(w, { onClick: function() { a && Object(p.o)(a, p.d) || n(p.d) }, disable: a === p.d, children: [Object(j.jsx)(x.a, { currency: p.d, style: { marginRight: 8 } }), Object(j.jsx)(c.pb, { children: "BNB" })] }), (t ? g.u[t] : []).map((function(e) { var t = a instanceof p.j && a.address === e.address; return Object(j.jsxs)(w, { onClick: function() { return !t && n(e) }, disable: t, children: [Object(j.jsx)(x.a, { currency: e, style: { marginRight: 8 } }), Object(j.jsx)(c.pb, { children: e.symbol })] }, e.address) }))] })] })
            }
            var B, A, C, E, P, S, I = n(33),
                F = n(432),
                D = n(52),
                N = n(100),
                L = n(68),
                M = n(88),
                R = n(181),
                U = n(120),
                _ = u.e.div(B || (B = Object(o.a)(["\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) auto;\n  grid-gap: 16px;\n  align-items: center;\n\n  opacity: ", ";\n"])), (function(e) { return e.dim ? "0.4" : "1" })),
                q = Object(u.e)(c.u)(A || (A = Object(o.a)(["\n  height: 16px;\n  width: 16px;\n  margin-right: 6px;\n  stroke: ", ";\n"])), (function(e) { return e.theme.colors.success })),
                V = u.e.div(C || (C = Object(o.a)(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 140px;\n  font-size: 12px;\n"])));

            function Y(e) {
                var t, n, a = e.token,
                    r = e.style,
                    i = e.dim,
                    o = e.showImportView,
                    s = e.setImportToken,
                    u = Object(m.a)().chainId,
                    d = Object(l.b)().t,
                    p = Object(L.e)(),
                    b = u && (null === p || void 0 === p || null === (t = p[u]) || void 0 === t || null === (n = t[a.address]) || void 0 === n ? void 0 : n.list),
                    y = Object(f.f)(a),
                    h = Object(f.e)(a);
                return Object(j.jsxs)(_, { style: r, children: [Object(j.jsx)(U.a, { currency: a, size: "24px", style: { opacity: i ? "0.6" : "1" } }), Object(j.jsxs)(k.a, { gap: "4px", style: { opacity: i ? "0.6" : "1" }, children: [Object(j.jsxs)(T.a, { children: [Object(j.jsx)(c.pb, { children: a.symbol }), Object(j.jsx)(c.pb, { color: "textDisabled", ml: "8px", children: Object(j.jsx)(V, { title: a.name, children: a.name }) })] }), b && b.logoURI && Object(j.jsxs)(T.c, { children: [Object(j.jsxs)(c.pb, { small: !0, mr: "4px", color: "textSubtle", children: [d("via"), " ", b.name] }), Object(j.jsx)(x.c, { logoURI: b.logoURI, size: "12px" })] })] }), h || y ? Object(j.jsxs)(T.c, { style: { minWidth: "fit-content" }, children: [Object(j.jsx)(q, {}), Object(j.jsx)(c.pb, { color: "success", children: "Active" })] }) : Object(j.jsx)(c.m, { width: "fit-content", onClick: function() { s && s(a), o() }, children: d("Import") })] })
            }

            function H(e) { return e instanceof p.j ? e.address : e === p.d ? "ETHER" : "" }
            var W = Object(u.e)(c.pb)(E || (E = Object(o.a)(["\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 5rem;\n  text-overflow: ellipsis;\n"]))),
                z = u.e.div(P || (P = Object(o.a)(["\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-gap: 16px;\n  align-items: center;\n"])));

            function K(e) { var t = e.balance; return Object(j.jsx)(W, { title: t.toExact(), children: t.toSignificant(4) }) }
            var G = Object(u.e)(T.b)(S || (S = Object(o.a)(["\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) minmax(0, 72px);\n  grid-gap: 8px;\n  cursor: ", ";\n  pointer-events: ", ";\n  :hover {\n    background-color: ", ";\n  }\n  opacity: ", ";\n"])), (function(e) { return !e.disabled && "pointer" }), (function(e) { return e.disabled && "none" }), (function(e) { var t = e.theme; return !e.disabled && t.colors.background }), (function(e) {
                var t = e.disabled,
                    n = e.selected;
                return t || n ? .5 : 1
            }));

            function X(e) {
                var t = e.currency,
                    n = e.onSelect,
                    a = e.isSelected,
                    r = e.otherSelected,
                    i = e.style,
                    o = Object(m.a)().account,
                    s = H(t),
                    u = Object(L.d)(),
                    d = Object(h.i)(u, t),
                    l = Object(f.f)(t),
                    p = Object(M.b)(null !== o && void 0 !== o ? o : void 0, t);
                return Object(j.jsxs)(G, { style: i, className: "token-item-".concat(s), onClick: function() { return a ? null : n() }, disabled: a, selected: r, children: [Object(j.jsx)(x.a, { currency: t, size: "24px" }), Object(j.jsxs)(k.c, { children: [Object(j.jsx)(c.pb, { bold: !0, children: t.symbol }), Object(j.jsxs)(c.pb, { color: "textSubtle", small: !0, ellipsis: !0, maxWidth: "200px", children: [!d && l && "Added by user \u2022", " ", t.name] })] }), Object(j.jsx)(T.c, { style: { justifySelf: "flex-end" }, children: p ? Object(j.jsx)(K, { balance: p }) : o ? Object(j.jsx)(R.a, {}) : null })] })
            }

            function J(e) {
                var t = e.height,
                    n = e.currencies,
                    a = e.selectedCurrency,
                    r = e.onCurrencySelect,
                    i = e.otherCurrency,
                    o = e.fixedListRef,
                    u = e.showETH,
                    d = e.showImportView,
                    b = e.setImportToken,
                    y = e.breakIndex,
                    h = Object(s.useMemo)((function() { var e = u ? [p.b.ETHER].concat(Object(I.a)(n)) : n; return void 0 !== y && (e = [].concat(Object(I.a)(e.slice(0, y)), [void 0], Object(I.a)(e.slice(y, e.length)))), e }), [y, n, u]),
                    k = Object(m.a)().chainId,
                    g = Object(l.b)().t,
                    x = Object(f.a)(),
                    w = Object(s.useCallback)((function(e) {
                        var t = e.data,
                            n = e.index,
                            o = e.style,
                            s = t[n],
                            u = Boolean(a && Object(p.o)(a, s)),
                            l = Boolean(i && Object(p.o)(i, s)),
                            m = Object(D.b)(s, k),
                            f = x && m && Object.keys(x).includes(m.address);
                        return n !== y && t ? f && m ? Object(j.jsx)(Y, { style: o, token: m, showImportView: d, setImportToken: b, dim: !0 }) : Object(j.jsx)(X, { style: o, currency: s, isSelected: u, onSelect: function() { return r(s) }, otherSelected: l }) : Object(j.jsx)(z, { style: o, children: Object(j.jsx)(N.c, { padding: "8px 12px", borderRadius: "8px", children: Object(j.jsxs)(T.b, { children: [Object(j.jsx)(c.pb, { small: !0, children: g("Expanded results from inactive Token Lists") }), Object(j.jsx)(v.a, { text: g("Tokens from inactive lists. Import specific tokens below or click 'Manage' to activate more lists."), ml: "4px" })] }) }) })
                    }), [k, x, r, i, a, b, d, y, g]),
                    O = Object(s.useCallback)((function(e, t) { return H(t[e]) }), []);
                return Object(j.jsx)(F.a, { height: t, ref: o, width: "100%", itemData: h, itemCount: h.length, itemSize: 56, itemKey: O, children: w })
            }
            var $ = n(187);
            var Q = function(e) {
                    var t = Object(M.a)(),
                        n = Object(s.useMemo)((function() { return function(e) { return function(t, n) { var a, r, i = (a = e[t.address], r = e[n.address], a && r ? a.greaterThan(r) ? -1 : a.equalTo(r) ? 0 : 1 : a && a.greaterThan("0") ? -1 : r && r.greaterThan("0") ? 1 : 0); return 0 !== i ? i : t.symbol && n.symbol ? t.symbol.toLowerCase() < n.symbol.toLowerCase() ? -1 : 1 : t.symbol || n.symbol ? -1 : 0 } }(null !== t && void 0 !== t ? t : {}) }), [t]);
                    return Object(s.useMemo)((function() { return e ? function(e, t) { return -1 * n(e, t) } : n }), [e, n])
                },
                Z = new Audio("swap.mp3");
            var ee, te = function(e) {
                    var t = e.selectedCurrency,
                        n = e.onCurrencySelect,
                        a = e.otherSelectedCurrency,
                        r = e.showCommonBases,
                        o = e.showImportView,
                        u = e.setImportToken,
                        d = Object(l.b)().t,
                        g = Object(m.a)().chainId,
                        v = Object(s.useRef)(),
                        x = Object(s.useState)(""),
                        w = Object(i.a)(x, 2),
                        B = w[0],
                        A = w[1],
                        C = Object(y.a)(B, 200),
                        E = Object(s.useState)(!1),
                        P = Object(i.a)(E, 1)[0],
                        S = Object(f.b)(),
                        I = Object(f.g)(C),
                        F = Object(f.f)(I),
                        D = Object(b.b)(),
                        N = Object(i.a)(D, 1)[0],
                        L = Object(s.useMemo)((function() { var e = C.toLowerCase().trim(); return "" === e || "b" === e || "bn" === e || "bnb" === e }), [C]),
                        M = Q(P),
                        R = Object(s.useMemo)((function() { return Object($.a)(Object.values(S), C) }), [S, C]),
                        U = Object(s.useMemo)((function() { return R.sort(M) }), [R, M]),
                        _ = Object($.b)(U, C),
                        q = Object(s.useCallback)((function(e) { n(e), N && Z.play() }), [N, n]),
                        V = Object(s.useRef)();
                    Object(s.useEffect)((function() { V.current.focus() }), []);
                    var H = Object(s.useCallback)((function(e) {
                            var t, n = e.target.value,
                                a = Object(h.h)(n);
                            A(a || n), null === (t = v.current) || void 0 === t || t.scrollTo(0)
                        }), []),
                        W = Object(s.useCallback)((function(e) {
                            if ("Enter" === e.key)
                                if ("bnb" === C.toLowerCase().trim()) q(p.d);
                                else if (_.length > 0) {
                                var t;
                                (null === (t = _[0].symbol) || void 0 === t ? void 0 : t.toLowerCase()) !== C.trim().toLowerCase() && 1 !== _.length || q(_[0])
                            }
                        }), [_, q, C]),
                        z = Object(f.d)(C),
                        K = Object($.b)(z, C);
                    return Object(j.jsx)(j.Fragment, { children: Object(j.jsxs)("div", { children: [Object(j.jsxs)(k.a, { gap: "16px", children: [Object(j.jsx)(T.d, { children: Object(j.jsx)(c.N, { id: "token-search-input", placeholder: d("Search name or paste address"), scale: "lg", autoComplete: "off", value: B, ref: V, onChange: H, onKeyDown: W }) }), r && Object(j.jsx)(O, { chainId: g, onSelect: q, selectedCurrency: t })] }), I && !F ? Object(j.jsx)(k.c, { style: { padding: "20px 0", height: "100%" }, children: Object(j.jsx)(Y, { token: I, showImportView: o, setImportToken: u }) }) : (null === _ || void 0 === _ ? void 0 : _.length) > 0 || (null === K || void 0 === K ? void 0 : K.length) > 0 ? Object(j.jsx)(c.j, { margin: "24px -24px", children: Object(j.jsx)(J, { height: 390, showETH: L, currencies: K ? _.concat(K) : _, breakIndex: z && _ ? _.length : void 0, onCurrencySelect: q, otherCurrency: a, selectedCurrency: t, fixedListRef: v, showImportView: o, setImportToken: u }) }) : Object(j.jsx)(k.c, { style: { padding: "20px", height: "100%" }, children: Object(j.jsx)(c.pb, { color: "textSubtle", textAlign: "center", mb: "20px", children: d("No results found.") }) })] }) })
                },
                ne = n(267),
                ae = n(3),
                re = n.n(ae),
                ie = n(12),
                oe = n(28),
                se = n(67),
                ce = n(176),
                ue = n(183),
                de = n(73),
                le = n(150);
            ! function(e) { e[e.search = 0] = "search", e[e.manage = 1] = "manage", e[e.importToken = 2] = "importToken", e[e.importList = 3] = "importList" }(ee || (ee = {}));
            var pe, be, ye;
            var me = Object(u.e)(k.c)(pe || (pe = Object(o.a)(["\n  width: 100%;\n  height: 100%;\n"]))),
                fe = Object(u.e)(T.d)(be || (be = Object(o.a)(["\n  background-color: ", ";\n  border: solid 1px;\n  border-color: ", ";\n  transition: 200ms;\n  align-items: center;\n  padding: 1rem;\n  border-radius: 20px;\n"])), (function(e) {
                    var t = e.active,
                        n = e.theme;
                    return t ? "".concat(n.colors.success, "19") : "transparent"
                }), (function(e) {
                    var t = e.active,
                        n = e.theme;
                    return t ? n.colors.success : n.colors.tertiary
                }));

            function he(e) { return "list-row-".concat(e.replace(/\./g, "-")) }
            var ke = Object(s.memo)((function(e) {
                    var t, n = e.listUrl,
                        a = Object(oe.c)((function(e) { return e.lists.byUrl })),
                        r = Object(oe.b)(),
                        i = a[n],
                        o = i.current,
                        u = i.pendingUpdate,
                        d = Object(L.g)(n),
                        p = Object(l.b)().t,
                        b = Object(s.useCallback)((function() { u && r(Object(de.a)(n)) }), [r, n, u]),
                        y = Object(s.useCallback)((function() { window.confirm("Please confirm you would like to remove this list") && r(Object(de.f)(n)) }), [r, n]),
                        m = Object(s.useCallback)((function() { r(Object(de.d)(n)) }), [r, n]),
                        f = Object(s.useCallback)((function() { r(Object(de.c)(n)) }), [r, n]),
                        h = Object(c.Db)(Object(j.jsxs)("div", { children: [Object(j.jsx)(c.pb, { children: o && (t = o.version, "v".concat(t.major, ".").concat(t.minor, ".").concat(t.patch)) }), Object(j.jsx)(c.P, { external: !0, href: "https://tokenlists.org/token-list?url=".concat(n), children: p("See") }), Object(j.jsx)(c.m, { variant: "danger", scale: "xs", onClick: y, disabled: 1 === Object.keys(a).length, children: p("Remove") }), u && Object(j.jsx)(c.m, { variant: "text", onClick: b, style: { fontSize: "12px" }, children: p("Update list") })] }), { placement: "right-end", trigger: "click" }),
                        g = h.targetRef,
                        v = h.tooltip,
                        w = h.tooltipVisible;
                    return o ? Object(j.jsxs)(fe, { active: d, id: he(n), children: [w && v, o.logoURI ? Object(j.jsx)(x.c, { size: "40px", style: { marginRight: "1rem" }, logoURI: o.logoURI, alt: "".concat(o.name, " list logo") }) : Object(j.jsx)("div", { style: { width: "24px", height: "24px", marginRight: "1rem" } }), Object(j.jsxs)(k.c, { style: { flex: "1" }, children: [Object(j.jsx)(T.d, { children: Object(j.jsx)(c.pb, { bold: !0, children: o.name }) }), Object(j.jsxs)(T.c, { mt: "4px", children: [Object(j.jsxs)(c.pb, { fontSize: "12px", mr: "6px", textTransform: "lowercase", children: [o.tokens.length, " ", p("Tokens")] }), Object(j.jsx)("span", { ref: g, children: Object(j.jsx)(c.B, { color: "text", width: "12px" }) })] })] }), Object(j.jsx)(c.qb, { checked: d, onChange: function() { d ? f() : m() } })] }, n) : null
                })),
                Te = u.e.div(ye || (ye = Object(o.a)(["\n  padding: 1rem 0;\n  height: 100%;\n  overflow: auto;\n"])));
            var ge, ve, xe, je = function(e) {
                    var t = e.setModalView,
                        n = e.setImportList,
                        a = e.setListUrl,
                        r = Object(s.useState)(""),
                        o = Object(i.a)(r, 2),
                        u = o[0],
                        d = o[1],
                        p = Object(l.b)().t,
                        b = Object(L.c)(),
                        y = Object(L.b)(),
                        m = Object(s.useState)(),
                        f = Object(i.a)(m, 2),
                        h = f[0],
                        g = f[1];
                    Object(s.useEffect)((function() {!h && y && g(y) }), [h, y]);
                    var v = Object(s.useCallback)((function(e) { d(e.target.value) }), []),
                        w = Object(ue.a)(),
                        O = Object(s.useMemo)((function() { return Object(le.a)(u).length > 0 || Boolean(Object(ce.a)(u)) }), [u]),
                        B = Object(s.useMemo)((function() {
                            return Object.keys(b).filter((function(e) { return Boolean(b[e].current) && !se.c.includes(e) })).sort((function(e, t) {
                                var n = b[e].current,
                                    a = b[t].current;
                                return (null === h || void 0 === h ? void 0 : h.includes(e)) && !(null === h || void 0 === h ? void 0 : h.includes(t)) ? -1 : !(null === h || void 0 === h ? void 0 : h.includes(e)) && (null === h || void 0 === h ? void 0 : h.includes(t)) ? 1 : n && a ? n.name.toLowerCase() < a.name.toLowerCase() ? -1 : n.name.toLowerCase() === a.name.toLowerCase() ? 0 : 1 : n ? -1 : a ? 1 : 0
                            }))
                        }), [b, h]),
                        A = Object(s.useState)(),
                        C = Object(i.a)(A, 2),
                        E = C[0],
                        P = C[1],
                        S = Object(s.useState)(),
                        I = Object(i.a)(S, 2),
                        F = I[0],
                        D = I[1];
                    Object(s.useEffect)((function() {
                        function e() {
                            return (e = Object(ie.a)(re.a.mark((function e() {
                                return re.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            w(u, !1).then((function(e) { return P(e) })).catch((function() { return D("Error importing list") }));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }
                        O ? function() { e.apply(this, arguments) }() : (P(void 0), "" !== u && D("Enter valid list location")), "" === u && D(void 0)
                    }), [w, u, O]);
                    var M = Object.keys(b).includes(u),
                        R = Object(s.useCallback)((function() { E && (n(E), t(ee.importList), a(u)) }), [u, n, a, t, E]);
                    return Object(j.jsxs)(me, { children: [Object(j.jsxs)(k.a, { gap: "14px", children: [Object(j.jsx)(T.d, { children: Object(j.jsx)(c.N, { id: "list-add-input", scale: "lg", placeholder: p("https:// or ipfs:// or ENS name"), value: u, onChange: v }) }), F ? Object(j.jsx)(c.pb, { color: "failure", style: { textOverflow: "ellipsis", overflow: "hidden" }, children: F }) : null] }), E && Object(j.jsx)(k.a, { style: { paddingTop: 0 }, children: Object(j.jsx)(N.d, { padding: "12px 20px", children: Object(j.jsxs)(T.b, { children: [Object(j.jsxs)(T.c, { children: [E.logoURI && Object(j.jsx)(x.c, { logoURI: E.logoURI, size: "40px" }), Object(j.jsxs)(k.a, { gap: "4px", style: { marginLeft: "20px" }, children: [Object(j.jsx)(c.pb, { bold: !0, children: E.name }), Object(j.jsxs)(c.pb, { color: "textSubtle", small: !0, textTransform: "lowercase", children: [E.tokens.length, " ", p("Tokens")] })] })] }), M ? Object(j.jsxs)(T.c, { children: [Object(j.jsx)(c.v, { width: "16px", mr: "10px" }), Object(j.jsx)(c.pb, { children: p("Loaded") })] }) : Object(j.jsx)(c.m, { width: "fit-content", onClick: R, children: p("Import") })] }) }) }), Object(j.jsx)(Te, { children: Object(j.jsx)(k.a, { gap: "md", children: B.map((function(e) { return Object(j.jsx)(ke, { listUrl: e }, e) })) }) })] })
                },
                we = n(211),
                Oe = u.e.div(ge || (ge = Object(o.a)(["\n  width: 100%;\n  height: calc(100% - 60px);\n  position: relative;\n  padding-bottom: 60px;\n"]))),
                Be = u.e.div(ve || (ve = Object(o.a)(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));

            function Ae(e) {
                var t = e.setModalView,
                    n = e.setImportToken,
                    a = Object(m.a)().chainId,
                    r = Object(l.b)().t,
                    o = Object(s.useState)(""),
                    u = Object(i.a)(o, 2),
                    d = u[0],
                    p = u[1],
                    y = Object(s.useRef)(),
                    g = Object(s.useCallback)((function(e) {
                        var t = e.target.value,
                            n = Object(h.h)(t);
                        p(n || t)
                    }), []),
                    v = Object(f.g)(d),
                    w = Object(we.a)(),
                    O = Object(b.h)(),
                    B = Object(s.useCallback)((function() { a && w && w.map((function(e) { return O(a, e.address) })) }), [O, w, a]),
                    A = Object(s.useMemo)((function() { return a && w.map((function(e) { return Object(j.jsxs)(T.b, { width: "100%", children: [Object(j.jsxs)(T.c, { children: [Object(j.jsx)(x.a, { currency: e, size: "20px" }), Object(j.jsx)(c.O, { external: !0, href: Object(h.e)(e.address, "address", a), color: "textSubtle", ml: "10px", children: e.symbol })] }), Object(j.jsxs)(T.c, { children: [Object(j.jsx)(c.M, { variant: "text", onClick: function() { return O(a, e.address) }, children: Object(j.jsx)(c.A, {}) }), Object(j.jsx)(c.P, { href: Object(h.e)(e.address, "address", a) })] })] }, e.address) })) }), [w, a, O]),
                    C = "" === d || Object(h.h)(d);
                return Object(j.jsx)(Oe, { children: Object(j.jsxs)(k.c, { style: { width: "100%", flex: "1 1" }, children: [Object(j.jsxs)(k.a, { gap: "14px", children: [Object(j.jsx)(T.d, { children: Object(j.jsx)(c.N, { id: "token-search-input", scale: "lg", placeholder: "0x0000", value: d, autoComplete: "off", ref: y, onChange: g, isWarning: !C }) }), !C && Object(j.jsx)(c.pb, { color: "failure", children: r("Enter valid token address") }), v && Object(j.jsx)(Y, { token: v, showImportView: function() { return t(ee.importToken) }, setImportToken: n, style: { height: "fit-content" } })] }), A, Object(j.jsxs)(Be, { children: [Object(j.jsxs)(c.pb, { bold: !0, color: "textSubtle", children: [null === w || void 0 === w ? void 0 : w.length, " ", 1 === w.length ? r("Custom Token") : r("Custom Tokens")] }), w.length > 0 && Object(j.jsx)(c.m, { variant: "tertiary", onClick: B, children: r("Clear all") })] })] }) })
            }
            var Ce = Object(u.e)(c.n)(xe || (xe = Object(o.a)(["\n  width: 100%;\n"])));

            function Ee(e) {
                var t = e.setModalView,
                    n = e.setImportList,
                    a = e.setImportToken,
                    r = e.setListUrl,
                    o = Object(s.useState)(!0),
                    u = Object(i.a)(o, 2),
                    d = u[0],
                    p = u[1],
                    b = Object(l.b)().t;
                return Object(j.jsxs)(c.W, { children: [Object(j.jsxs)(Ce, { activeIndex: d ? 0 : 1, onItemClick: function() { return p((function(e) { return !e })) }, scale: "sm", variant: "subtle", mb: "32px", children: [Object(j.jsx)(c.o, { width: "50%", children: b("Lists") }), Object(j.jsx)(c.o, { width: "50%", children: b("Tokens") })] }), d ? Object(j.jsx)(je, { setModalView: t, setImportList: n, setListUrl: r }) : Object(j.jsx)(Ae, { setModalView: t, setImportToken: a })] })
            }
            var Pe, Se, Ie = n(140),
                Fe = u.e.div(Pe || (Pe = Object(o.a)(["\n  position: relative;\n  width: 100%;\n"]))),
                De = u.e.div(Se || (Se = Object(o.a)(["\n  height: 3px;\n  width: 3px;\n  background-color: ", ";\n  border-radius: 50%;\n"])), (function(e) { return e.theme.colors.text }));
            var Ne, Le, Me, Re = function(e) {
                    var t, n = e.listURL,
                        a = e.list,
                        r = e.onImport,
                        o = Object(Ie.a)().theme,
                        u = Object(oe.b)(),
                        d = Object(l.b)().t,
                        p = Object(s.useState)(!1),
                        b = Object(i.a)(p, 2),
                        y = b[0],
                        m = b[1],
                        f = Object(L.c)(),
                        h = Object(ue.a)(),
                        g = Boolean(null === (t = f[n]) || void 0 === t ? void 0 : t.loadingRequestId),
                        v = Object(s.useState)(null),
                        w = Object(i.a)(v, 2),
                        O = w[0],
                        B = w[1],
                        A = Object(s.useCallback)((function() { g || (B(null), h(n).then((function() { u(Object(de.d)(n)), r() })).catch((function(e) { B(e.message), u(Object(de.f)(n)) }))) }), [g, u, h, n, r]);
                    return Object(j.jsx)(Fe, { children: Object(j.jsx)(k.a, { gap: "md", children: Object(j.jsxs)(k.a, { gap: "md", children: [Object(j.jsx)(N.d, { padding: "12px 20px", children: Object(j.jsx)(T.b, { children: Object(j.jsxs)(T.c, { children: [a.logoURI && Object(j.jsx)(x.c, { logoURI: a.logoURI, size: "40px" }), Object(j.jsxs)(k.a, { gap: "sm", style: { marginLeft: "20px" }, children: [Object(j.jsxs)(T.c, { children: [Object(j.jsx)(c.pb, { bold: !0, mr: "6px", children: a.name }), Object(j.jsx)(De, {}), Object(j.jsxs)(c.pb, { small: !0, color: "textSubtle", ml: "6px", children: [a.tokens.length, " tokens"] })] }), Object(j.jsx)(c.O, { small: !0, external: !0, ellipsis: !0, maxWidth: "90%", href: "https://tokenlists.org/token-list?url=".concat(n), children: n })] })] }) }) }), Object(j.jsx)(c.S, { variant: "danger", children: Object(j.jsxs)(c.H, { flexDirection: "column", children: [Object(j.jsx)(c.pb, { fontSize: "20px", textAlign: "center", color: o.colors.failure, mb: "16px", children: d("Import at your own risk") }), Object(j.jsx)(c.pb, { color: o.colors.failure, mb: "8px", children: d("By adding this list you are implicitly trusting that the data is correct. Anyone can create a list, including creating fake versions of existing lists and lists that claim to represent projects that do not have one.") }), Object(j.jsx)(c.pb, { bold: !0, color: o.colors.failure, mb: "16px", children: "string" }), Object(j.jsxs)(c.H, { alignItems: "center", children: [Object(j.jsx)(c.t, { name: "confirmed", type: "checkbox", checked: y, onChange: function() { return m(!y) }, scale: "sm" }), Object(j.jsx)(c.pb, { ml: "10px", style: { userSelect: "none" }, children: d("I understand") })] })] }) }), Object(j.jsx)(c.m, { disabled: !y, onClick: A, children: d("Import") }), O ? Object(j.jsx)(c.pb, { color: "failure", style: { textOverflow: "ellipsis", overflow: "hidden" }, children: O }) : null] }) }) })
                },
                Ue = u.e.div(Ne || (Ne = Object(o.a)(["\n  width: 100%;\n  background-color: ", ";\n  text-align: center;\n"])), (function(e) { return e.theme.colors.backgroundAlt })),
                _e = Object(u.e)(c.Y)(Le || (Le = Object(o.a)(["\n  max-width: 420px;\n  width: 100%;\n"]))),
                qe = Object(u.e)(c.W)(Me || (Me = Object(o.a)(["\n  padding: 24px;\n"])));

            function Ve(e) {
                var t, n = e.onDismiss,
                    a = void 0 === n ? function() { return null } : n,
                    o = e.onCurrencySelect,
                    u = e.selectedCurrency,
                    p = e.otherSelectedCurrency,
                    b = e.showCommonBases,
                    y = void 0 !== b && b,
                    m = Object(s.useState)(ee.search),
                    f = Object(i.a)(m, 2),
                    h = f[0],
                    k = f[1],
                    T = Object(s.useCallback)((function(e) { a(), o(e) }), [a, o]),
                    g = Object(d.a)(h),
                    v = Object(s.useState)(),
                    x = Object(i.a)(v, 2),
                    w = x[0],
                    O = x[1],
                    B = Object(s.useState)(),
                    A = Object(i.a)(B, 2),
                    C = A[0],
                    E = A[1],
                    P = Object(s.useState)(),
                    S = Object(i.a)(P, 2),
                    I = S[0],
                    F = S[1],
                    D = Object(l.b)().t,
                    N = (t = {}, Object(r.a)(t, ee.search, { title: D("Select a Token"), onBack: void 0 }), Object(r.a)(t, ee.manage, { title: D("Manage"), onBack: function() { return k(ee.search) } }), Object(r.a)(t, ee.importToken, { title: D("Import Tokens"), onBack: function() { return k(g && g !== ee.importToken ? g : ee.search) } }), Object(r.a)(t, ee.importList, { title: D("Import List"), onBack: function() { return k(ee.search) } }), t);
                return Object(j.jsxs)(_e, { minWidth: "320px", children: [Object(j.jsxs)(c.Z, { children: [Object(j.jsxs)(c.bb, { children: [N[h].onBack && Object(j.jsx)(c.V, { onBack: N[h].onBack }), Object(j.jsx)(c.J, { children: N[h].title })] }), Object(j.jsx)(c.X, { onDismiss: a })] }), Object(j.jsxs)(qe, { children: [h === ee.search ? Object(j.jsx)(te, { onCurrencySelect: T, selectedCurrency: u, otherSelectedCurrency: p, showCommonBases: y, showImportView: function() { return k(ee.importToken) }, setImportToken: O }) : h === ee.importToken && w ? Object(j.jsx)(ne.a, { tokens: [w], handleCurrencySelect: T }) : h === ee.importList && C && I ? Object(j.jsx)(Re, { list: C, listURL: I, onImport: function() { return k(ee.manage) } }) : h === ee.manage ? Object(j.jsx)(Ee, { setModalView: k, setImportToken: O, setImportList: E, setListUrl: F }) : "", h === ee.search && Object(j.jsx)(Ue, { children: Object(j.jsx)(c.m, { scale: "sm", variant: "text", onClick: function() { return k(ee.manage) }, className: "list-token-manage-button", children: D("Manage Tokens") }) })] })] })
            }
        },
        40: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return L })), n.d(t, "l", (function() { return M })), n.d(t, "n", (function() { return R })), n.d(t, "o", (function() { return U })), n.d(t, "w", (function() { return _ })), n.d(t, "x", (function() { return q })), n.d(t, "t", (function() { return V })), n.d(t, "g", (function() { return Y })), n.d(t, "v", (function() { return H })), n.d(t, "s", (function() { return W })), n.d(t, "b", (function() { return z })), n.d(t, "d", (function() { return K })), n.d(t, "p", (function() { return G })), n.d(t, "q", (function() { return X })), n.d(t, "j", (function() { return J })), n.d(t, "y", (function() { return $ })), n.d(t, "k", (function() { return Q })), n.d(t, "h", (function() { return Z })), n.d(t, "u", (function() { return ee })), n.d(t, "i", (function() { return te })), n.d(t, "r", (function() { return ne })), n.d(t, "c", (function() { return ae })), n.d(t, "f", (function() { return re })), n.d(t, "e", (function() { return ie })), n.d(t, "m", (function() { return oe }));
            var a = n(61),
                r = n(99),
                i = n(36),
                o = n(10),
                s = n(34),
                c = n(35),
                u = n(236),
                d = n(401),
                l = n(402),
                p = n(403),
                b = n(90),
                y = n(404),
                m = (n(405), n(246)),
                f = n(406),
                h = n(407),
                k = n(205),
                T = n(206),
                g = n(159),
                v = n(149),
                x = n(348),
                j = n(408),
                w = n(409),
                O = n(410),
                B = n(411),
                A = n(207),
                C = n(164),
                E = n(412),
                P = n(247),
                S = n(413),
                I = n(414),
                F = n(415),
                D = n(416),
                N = function(e, t, n) { var i = null !== n && void 0 !== n ? n : r.a; return new a.a.Contract(t, e, i) },
                L = function(e, t) { return N(b, e, t) },
                M = function(e, t) { return N(y, e, t) },
                R = function(e, t) { return N(f, e, t) },
                U = function(e, t) { return N(h, e, t) },
                _ = function(e, t) {
                    var n = i.x.find((function(t) { return t.sousId === e })),
                        a = n.poolCategory === o.b.BINANCE ? j : v;
                    return N(a, Object(c.a)(n.contractAddress), t)
                },
                q = function(e, t) { var n = i.x.find((function(t) { return t.sousId === e })); return N(x, Object(c.a)(n.contractAddress), t) },
                V = function(e) { return N(k, Object(c.q)(), e) },
                Y = function(e) { return N(m, s.a.cake.address, e) },
                H = function(e) { return N(u, Object(c.o)(), e) },
                W = function(e) { return N(d, Object(c.p)(), e) },
                z = function(e) { return N(l, Object(c.b)(), e) },
                K = function(e) { return N(p, Object(c.c)(), e) },
                G = function(e) { return N(T, Object(c.l)(), e) },
                X = function(e) { return N(g, Object(c.m)(), e) },
                J = function(e) { return N(w, Object(c.i)(), e) },
                $ = function(e) { return N(O, Object(c.s)(), e) },
                Q = function(e) { return N(B, Object(c.j)(), e) },
                Z = function(e) { return N(A, Object(c.g)(), e) },
                ee = function(e) { return N(C, Object(c.r)(), e) },
                te = function(e) { return N(E, Object(c.h)(), e) },
                ne = function(e) { return N(P, Object(c.n)(), e) },
                ae = function(e) { return N(S, Object(c.d)(), e) },
                re = function(e) { return N(I, Object(c.f)(), e) },
                ie = function(e) { return N(F, Object(c.e)(), e) },
                oe = function(e) { return N(D, Object(c.k)(), e) }
        },
        400: function(e) { e.exports = JSON.parse('{"name":"Pancake Unsupported List","timestamp":"2021-01-05T20:47:02.923Z","version":{"major":1,"minor":0,"patch":0},"tags":{},"logoURI":"ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir","keywords":["pancake","unsupported"],"tokens":[]}') },
        401: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"_baseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyBurnCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getBunnyId","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"getBunnyName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getBunnyNameOfTokenId","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"string","name":"_tokenURI","type":"string"},{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"},{"internalType":"string","name":"_name","type":"string"}],"name":"setBunnyName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        402: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract BunnyFactoryV2","name":"_bunnyFactoryV2","type":"address"},{"internalType":"contract BunnyMintingStation","name":"_bunnyMintingStation","type":"address"},{"internalType":"contract IBEP20","name":"_cakeToken","type":"address"},{"internalType":"uint256","name":"_tokenPrice","type":"uint256"},{"internalType":"string","name":"_ipfsHash","type":"string"},{"internalType":"uint256","name":"_startBlockNumber","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"}],"name":"BunnyMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"bunnyFactoryV2","outputs":[{"internalType":"contract BunnyFactoryV2","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bunnyMintingStation","outputs":[{"internalType":"contract BunnyMintingStation","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"canMint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_bunnyId5Json","type":"string"},{"internalType":"string","name":"_bunnyId6Json","type":"string"},{"internalType":"string","name":"_bunnyId7Json","type":"string"},{"internalType":"string","name":"_bunnyId8Json","type":"string"},{"internalType":"string","name":"_bunnyId9Json","type":"string"}],"name":"setBunnyJson","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newStartBlockNumber","type":"uint256"}],"name":"setStartBlockNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newTokenPrice","type":"uint256"}],"name":"updateTokenPrice","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        403: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract BunnyMintingStation","name":"_bunnyMintingStation","type":"address"},{"internalType":"contract IBEP20","name":"_cakeToken","type":"address"},{"internalType":"contract IPancakeProfile","name":"_pancakeProfile","type":"address"},{"internalType":"uint256","name":"_maxViewLength","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"thresholdUser","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"costCake","type":"uint256"}],"name":"BunnyAdd","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"thresholdUser","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"costCake","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isActive","type":"bool"}],"name":"BunnyChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"}],"name":"BunnyMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"},{"internalType":"string","name":"_tokenURI","type":"string"},{"internalType":"uint256","name":"_thresholdUser","type":"uint256"},{"internalType":"uint256","name":"_cakeCost","type":"uint256"}],"name":"addBunny","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyCharacteristics","outputs":[{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"uint256","name":"thresholdUser","type":"uint256"},{"internalType":"uint256","name":"cakeCost","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"bool","name":"isCreated","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bunnyMintingStation","outputs":[{"internalType":"contract BunnyMintingStation","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"c__0xf318aee2","type":"bytes32"}],"name":"c_0xf318aee2","outputs":[],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint8[]","name":"_bunnyIds","type":"uint8[]"}],"name":"canClaimMultiple","outputs":[{"internalType":"bool[]","name":"","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"canClaimSingle","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint8","name":"","type":"uint8"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxViewLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"numberDifferentBunnies","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeProfile","outputs":[{"internalType":"contract IPancakeProfile","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"},{"internalType":"uint256","name":"_thresholdUser","type":"uint256"},{"internalType":"uint256","name":"_cakeCost","type":"uint256"},{"internalType":"bool","name":"_isActive","type":"bool"}],"name":"updateBunny","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newMaxViewLength","type":"uint256"}],"name":"updateMaxViewLength","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        404: function(e) { e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"_name","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"_approved","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"implementsERC721","outputs":[{"name":"_implementsERC721","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"_totalSupply","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"_tokenId","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenMetadata","outputs":[{"name":"_infoUrl","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"_balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_approvedAddress","type":"address"},{"name":"_metadata","type":"string"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"_symbol","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numTokensTotal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"getOwnerTokens","outputs":[{"name":"_tokenIds","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]') },
        405: function(e) { e.exports = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]') },
        406: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"contract IBEP20","name":"_offeringToken","type":"address"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"},{"internalType":"uint256","name":"_offeringAmount","type":"uint256"},{"internalType":"uint256","name":"_raisingAmount","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"offeringAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"excessAmount","type":"uint256"}],"name":"Harvest","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"addressList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lpAmount","type":"uint256"},{"internalType":"uint256","name":"_offerAmount","type":"uint256"}],"name":"finalWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getOfferingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getRefundingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"hasHarvest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raisingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"}]') },
        407: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"contract IBEP20","name":"_offeringToken","type":"address"},{"internalType":"address","name":"_pancakeProfileAddress","type":"address"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"pid","type":"uint8"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"offeringAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"excessAmount","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"pid","type":"uint8"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"campaignId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"numberPoints","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"thresholdPoints","type":"uint256"}],"name":"PointParametersSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"offeringAmountPool","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"raisingAmountPool","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"pid","type":"uint8"}],"name":"PoolParametersSet","type":"event"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"campaignId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint8","name":"_pid","type":"uint8"}],"name":"depositPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lpAmount","type":"uint256"},{"internalType":"uint256","name":"_offerAmount","type":"uint256"}],"name":"finalWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_pid","type":"uint8"}],"name":"harvestPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberPools","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeProfile","outputs":[{"internalType":"contract PancakeProfile","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_offeringAmountPool","type":"uint256"},{"internalType":"uint256","name":"_raisingAmountPool","type":"uint256"},{"internalType":"uint256","name":"_limitPerUserInLP","type":"uint256"},{"internalType":"bool","name":"_hasTax","type":"bool"},{"internalType":"uint8","name":"_pid","type":"uint8"}],"name":"setPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"thresholdPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_campaignId","type":"uint256"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"},{"internalType":"uint256","name":"_thresholdPoints","type":"uint256"}],"name":"updatePointParameters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"viewPoolInformation","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"viewPoolTaxRateOverflow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint8[]","name":"_pids","type":"uint8[]"}],"name":"viewUserAllocationPools","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint8[]","name":"_pids","type":"uint8[]"}],"name":"viewUserInfo","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"bool[]","name":"","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint8[]","name":"_pids","type":"uint8[]"}],"name":"viewUserOfferingAndRefundingAmountsForPools","outputs":[{"internalType":"uint256[3][]","name":"","type":"uint256[3][]"}],"stateMutability":"view","type":"function"}]') },
        408: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_lp","type":"address"},{"internalType":"contract IBEP20","name":"_rewardToken","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"},{"internalType":"address","name":"_wbnb","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"limitAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accCakePerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_blacklistAddress","type":"address"}],"name":"removeBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_blacklistAddress","type":"address"}],"name":"setBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setLimitAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"bool","name":"inBlackList","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]') },
        409: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_cakeToken","type":"address"},{"internalType":"address","name":"_pancakeProfileAddress","type":"address"},{"internalType":"uint256","name":"_numberCake","type":"uint256"},{"internalType":"uint256","name":"_thresholdUser","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"canClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCakeBack","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberCake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"thresholdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        41: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return a })), n.d(t, "b", (function() { return r })), n.d(t, "n", (function() { return o })), n.d(t, "v", (function() { return s })), n.d(t, "w", (function() { return c })), n.d(t, "m", (function() { return u })), n.d(t, "d", (function() { return d })), n.d(t, "i", (function() { return l })), n.d(t, "c", (function() { return p })), n.d(t, "h", (function() { return b })), n.d(t, "g", (function() { return y })), n.d(t, "k", (function() { return m })), n.d(t, "j", (function() { return f })), n.d(t, "p", (function() { return h })), n.d(t, "r", (function() { return k })), n.d(t, "s", (function() { return T })), n.d(t, "q", (function() { return g })), n.d(t, "t", (function() { return v })), n.d(t, "u", (function() { return x })), n.d(t, "o", (function() { return j })), n.d(t, "x", (function() { return w })), n.d(t, "l", (function() { return O })), n.d(t, "f", (function() { return B })), n.d(t, "e", (function() { return A }));
            var a, r, i = n(15);
            ! function(e) { e.ON_FINISHED = "onFinished", e.TRUE = "true", e.FALSE = "false" }(a || (a = {})),
            function(e) { e.TABLE = "TABLE", e.CARD = "CARD" }(r || (r = {}));
            var o = Object(i.b)("user/updateUserExpertMode"),
                s = Object(i.b)("user/updateUserSingleHopOnly"),
                c = Object(i.b)("user/updateUserSlippageTolerance"),
                u = Object(i.b)("user/updateUserDeadline"),
                d = Object(i.b)("user/addSerializedToken"),
                l = Object(i.b)("user/removeSerializedToken"),
                p = Object(i.b)("user/addSerializedPair"),
                b = Object(i.b)("user/removeSerializedPair"),
                y = Object(i.b)("user/muteAudio"),
                m = Object(i.b)("user/unmuteAudio"),
                f = Object(i.b)("user/toggleTheme"),
                h = Object(i.b)("user/updateUserFarmStakedOnly"),
                k = Object(i.b)("user/updateUserPoolStakedOnly"),
                T = Object(i.b)("user/updateUserPoolsViewMode"),
                g = Object(i.b)("user/updateUserFarmsViewMode"),
                v = Object(i.b)("user/updateUserPredictionAcceptedRisk"),
                x = Object(i.b)("user/updateUserPredictionChartDisclaimerShow"),
                j = Object(i.b)("user/updateUserExpertModeAcknowledgementShow"),
                w = Object(i.b)("user/updateUserUsernameVisibility"),
                O = Object(i.b)("user/updateGasPrice"),
                B = Object(i.b)("user/addWatchlistToken"),
                A = Object(i.b)("user/addWatchlistPool")
        },
        410: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_pancakeProfileAddress","type":"address"},{"internalType":"address","name":"_bunnyStationAddress","type":"address"},{"internalType":"address","name":"_cakeTokenAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"enum TradingCompV1.CompetitionStatus","name":"status","type":"uint8"}],"name":"NewCompetitionStatus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"}],"name":"TeamRewardsUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"}],"name":"UserRegister","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"userAddresses","type":"address[]"},{"indexed":false,"internalType":"uint256","name":"rewardGroup","type":"uint256"}],"name":"UserUpdateMultiple","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"}],"name":"WinningTeam","type":"event"},{"inputs":[],"name":"bunnyId","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bunnyMintingStation","outputs":[{"internalType":"contract BunnyMintingStation","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"claimInformation","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimRemainder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentStatus","outputs":[{"internalType":"enum TradingCompV1.CompetitionStatus","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberTeams","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeProfile","outputs":[{"internalType":"contract IPancakeProfile","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum TradingCompV1.CompetitionStatus","name":"_status","type":"uint8"}],"name":"updateCompetitionStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"},{"internalType":"uint256[5]","name":"_userCampaignIds","type":"uint256[5]"},{"internalType":"uint256[5]","name":"_cakeRewards","type":"uint256[5]"},{"internalType":"uint256[5]","name":"_pointRewards","type":"uint256[5]"}],"name":"updateTeamRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addressesToUpdate","type":"address[]"},{"internalType":"uint256","name":"_rewardGroup","type":"uint256"}],"name":"updateUserStatusMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_winningTeamId","type":"uint256"},{"internalType":"string","name":"_tokenURI","type":"string"},{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"updateWinningTeamAndTokenURIAndBunnyId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userTradingStats","outputs":[{"internalType":"uint256","name":"rewardGroup","type":"uint256"},{"internalType":"uint256","name":"teamId","type":"uint256"},{"internalType":"bool","name":"hasRegistered","type":"bool"},{"internalType":"bool","name":"hasClaimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"viewRewardTeams","outputs":[{"components":[{"internalType":"uint256[5]","name":"userCampaignId","type":"uint256[5]"},{"internalType":"uint256[5]","name":"cakeRewards","type":"uint256[5]"},{"internalType":"uint256[5]","name":"pointUsers","type":"uint256[5]"}],"internalType":"struct TradingCompV1.CompetitionRewards[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"winningTeamId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]') },
        411: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract BunnyMintingStation","name":"_bunnyMintingStation","type":"address"},{"internalType":"contract IBEP20","name":"_cakeToken","type":"address"},{"internalType":"contract PancakeProfile","name":"_pancakeProfile","type":"address"},{"internalType":"uint256","name":"_thresholdUser","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"bunnyId","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"}],"name":"BunnyAdd","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"}],"name":"BunnyMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"}],"name":"NewEndBlock","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"},{"internalType":"uint256","name":"_teamId","type":"uint256"},{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"addBunny","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bunnyMintingStation","outputs":[{"internalType":"contract BunnyMintingStation","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"canClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"name":"changeEndBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeProfile","outputs":[{"internalType":"contract PancakeProfile","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"previousNumberBunnyIds","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"teamIdToBunnyId","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"thresholdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        412: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_aggregator","type":"address"},{"internalType":"address","name":"_accessController","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"int256","name":"current","type":"int256"},{"indexed":true,"internalType":"uint256","name":"roundId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"updatedAt","type":"uint256"}],"name":"AnswerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"roundId","type":"uint256"},{"indexed":true,"internalType":"address","name":"startedBy","type":"address"},{"indexed":false,"internalType":"uint256","name":"startedAt","type":"uint256"}],"name":"NewRound","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"accessController","outputs":[{"internalType":"contract AccessControllerInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aggregator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_aggregator","type":"address"}],"name":"confirmAggregator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_roundId","type":"uint256"}],"name":"getAnswer","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_roundId","type":"uint256"}],"name":"getTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestAnswer","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"}],"name":"phaseAggregators","outputs":[{"internalType":"contract AggregatorV2V3Interface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"phaseId","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_aggregator","type":"address"}],"name":"proposeAggregator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"proposedAggregator","outputs":[{"internalType":"contract AggregatorV2V3Interface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"proposedGetRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proposedLatestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_accessController","type":"address"}],"name":"setController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]') },
        413: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_cakeVault","type":"address"},{"internalType":"address","name":"_bunnyMintingStation","type":"address"},{"internalType":"address","name":"_pancakeProfile","type":"address"},{"internalType":"uint256","name":"_endBlock","type":"uint256"},{"internalType":"uint256","name":"_thresholdTimestamp","type":"uint256"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"},{"internalType":"uint256","name":"_campaignId","type":"uint256"},{"internalType":"string","name":"_tokenURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"}],"name":"BunnyMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"NewCampaignId","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"}],"name":"NewEndBlock","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"numberPoints","type":"uint256"}],"name":"NewNumberPoints","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"thresholdTimestamp","type":"uint256"}],"name":"NewThresholdTimestamp","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"bunnyId","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bunnyMintingStation","outputs":[{"internalType":"contract BunnyMintingStation","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cakeVault","outputs":[{"internalType":"contract CakeVault","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"campaignId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"canClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_campaignId","type":"uint256"}],"name":"changeCampaignId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"name":"changeEndBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"changeNumberPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_thresholdTimestamp","type":"uint256"}],"name":"changeThresholdTimestamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"numberPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeProfile","outputs":[{"internalType":"contract PancakeProfile","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"thresholdTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        414: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_pancakePrediction","type":"address"},{"internalType":"address","name":"_bunnyMintingStation","type":"address"},{"internalType":"address","name":"_pancakeProfile","type":"address"},{"internalType":"uint256","name":"_endBlock","type":"uint256"},{"internalType":"uint256","name":"_thresholdRound","type":"uint256"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"},{"internalType":"uint256","name":"_campaignId","type":"uint256"},{"internalType":"string","name":"_tokenURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"}],"name":"BunnyMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"NewCampaignId","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"}],"name":"NewEndBlock","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"numberPoints","type":"uint256"}],"name":"NewNumberPoints","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"thresholdRound","type":"uint256"}],"name":"NewThresholdRound","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"bunnyId","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bunnyMintingStation","outputs":[{"internalType":"contract BunnyMintingStation","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"campaignId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"canClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_campaignId","type":"uint256"}],"name":"changeCampaignId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"name":"changeEndBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"changeNumberPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_thresholdRound","type":"uint256"}],"name":"changeThresholdRound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"numberPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakePrediction","outputs":[{"internalType":"contract BnbPricePrediction","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeProfile","outputs":[{"internalType":"contract PancakeProfile","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"thresholdRound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        415: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_pancakeSwapLotteryAddress","type":"address"},{"internalType":"address","name":"_bunnyMintingStationAddress","type":"address"},{"internalType":"address","name":"_pancakeProfileAddress","type":"address"},{"internalType":"uint256","name":"_endBlock","type":"uint256"},{"internalType":"string","name":"_tokenURI1","type":"string"},{"internalType":"string","name":"_tokenURI2","type":"string"},{"internalType":"string","name":"_tokenURI3","type":"string"},{"internalType":"uint256","name":"_numberPoints1","type":"uint256"},{"internalType":"uint256","name":"_numberPoints2","type":"uint256"},{"internalType":"uint256","name":"_numberPoints3","type":"uint256"},{"internalType":"uint256","name":"_campaignId1","type":"uint256"},{"internalType":"uint256","name":"_campaignId2","type":"uint256"},{"internalType":"uint256","name":"_campaignId3","type":"uint256"},{"internalType":"uint256","name":"_startLotteryRound","type":"uint256"},{"internalType":"uint256","name":"_finalLotteryRound","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"}],"name":"BunnyMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"users","type":"address[]"}],"name":"NewAddressWhitelisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"bunnyId","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"NewCampaignId","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"}],"name":"NewEndBlock","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"startLotteryRound","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"finalLotteryRound","type":"uint256"}],"name":"NewLotteryRounds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"bunnyId","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"numberPoints","type":"uint256"}],"name":"NewNumberPoints","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"bunnyId","type":"uint8"},{"indexed":false,"internalType":"string","name":"tokenURI","type":"string"}],"name":"NewTokenURI","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"bunnyMintingStation","outputs":[{"internalType":"contract BunnyMintingStation","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"campaignIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_lotteryId","type":"uint256"}],"name":"canClaimNft1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_lotteryId","type":"uint256"},{"internalType":"uint256","name":"_cursor","type":"uint256"}],"name":"canClaimNft2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"canClaimNft3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"},{"internalType":"uint256","name":"_campaignId","type":"uint256"}],"name":"changeCampaignId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"name":"changeEndBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startLotteryRound","type":"uint256"},{"internalType":"uint256","name":"_finalLotteryRound","type":"uint256"}],"name":"changeLotteryRounds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"changeNumberPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"},{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"changeTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"finalLotteryRound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint8","name":"","type":"uint8"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"},{"internalType":"uint256","name":"_lotteryId","type":"uint256"},{"internalType":"uint256","name":"_cursor","type":"uint256"}],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"numberPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeProfile","outputs":[{"internalType":"contract PancakeProfile","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeSwapLottery","outputs":[{"internalType":"contract IPancakeSwapLottery","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startLotteryRound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"tokenURIs","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userWhitelistForNft3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_users","type":"address[]"}],"name":"whitelistAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        416: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_cakeToken","type":"address"},{"internalType":"address","name":"_operatorAddress","type":"address"},{"internalType":"uint256","name":"_maxAuctionLength","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AuctionBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isAdmin","type":"bool"}],"name":"AuctionClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"participationLimit","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"numberParticipants","type":"uint256"}],"name":"AuctionClose","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"initialBidAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"leaderboard","type":"uint256"}],"name":"AuctionStart","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"maxAuctionLength","type":"uint256"}],"name":"NewMaxAuctionLength","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"NewOperatorAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokenRecovery","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"WhitelistAdd","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"WhitelistRemove","type":"event"},{"inputs":[{"internalType":"address[]","name":"_bidders","type":"address[]"}],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"auctionBids","outputs":[{"internalType":"uint256","name":"totalAmount","type":"uint256"},{"internalType":"bool","name":"hasClaimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"auctions","outputs":[{"internalType":"enum FarmAuction.Status","name":"status","type":"uint8"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"endBlock","type":"uint256"},{"internalType":"uint256","name":"initialBidAmount","type":"uint256"},{"internalType":"uint256","name":"leaderboard","type":"uint256"},{"internalType":"uint256","name":"leaderboardThreshold","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"bid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_auctionId","type":"uint256"}],"name":"claimAuction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_auctionId","type":"uint256"},{"internalType":"address[]","name":"_bidders","type":"address[]"}],"name":"claimAuctionLeaderboard","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"},{"internalType":"address","name":"bidder","type":"address"}],"name":"claimable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bidLimit","type":"uint256"}],"name":"closeAuction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentAuctionId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxAuctionLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operatorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"recoverToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_bidders","type":"address[]"}],"name":"removeWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxAuctionLength","type":"uint256"}],"name":"setMaxAuctionLength","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operatorAddress","type":"address"}],"name":"setOperatorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"},{"internalType":"uint256","name":"_initialBidAmount","type":"uint256"},{"internalType":"uint256","name":"_leaderboard","type":"uint256"}],"name":"startAuction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalCollected","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"cursor","type":"uint256"},{"internalType":"uint256","name":"size","type":"uint256"}],"name":"viewAuctions","outputs":[{"components":[{"internalType":"enum FarmAuction.Status","name":"status","type":"uint8"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"endBlock","type":"uint256"},{"internalType":"uint256","name":"initialBidAmount","type":"uint256"},{"internalType":"uint256","name":"leaderboard","type":"uint256"},{"internalType":"uint256","name":"leaderboardThreshold","type":"uint256"}],"internalType":"struct FarmAuction.Auction[]","name":"","type":"tuple[]"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"bidder","type":"address"},{"internalType":"uint256","name":"cursor","type":"uint256"},{"internalType":"uint256","name":"size","type":"uint256"}],"name":"viewBidderAuctions","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"bool[]","name":"","type":"bool[]"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"cursor","type":"uint256"},{"internalType":"uint256","name":"size","type":"uint256"}],"name":"viewBidders","outputs":[{"internalType":"address[]","name":"","type":"address[]"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"},{"internalType":"uint256","name":"cursor","type":"uint256"},{"internalType":"uint256","name":"size","type":"uint256"}],"name":"viewBidsPerAuction","outputs":[{"components":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"hasClaimed","type":"bool"}],"internalType":"struct FarmAuction.Bid[]","name":"","type":"tuple[]"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"bidder","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]') },
        417: function(e) { e.exports = JSON.parse('{"0x00e53c169da54a7e11172aeedf8eb87f060f479e":194.65,"0x0ed7e52944161450477ee417de9cd3a859b14fd0":2.68,"0x1cc18962b919ef90085a8b21f8ddc95824fbad9e":2.29,"0x2bf2deb40639201c9a94c9e33b4852d9aea5fd2d":31.89,"0x2e28b9b74d6d99d4697e913b82b41ef1cac51c6c":0.98,"0x3747e3e107223539fd09bb730b055a1f11f78adf":26.61,"0x37ff7d4459ad96e0b01275e5efffe091f33c2cad":16.98,"0x3c2b7b578dd2175a1c3524aa0d515106282bf108":46.75,"0x4ddd56e2f34338839bb5953515833950ea680afb":3.35,"0x58f876857a02d6762e0101bb5c46a8c1ed44dc16":13.87,"0x59fac9e98479fc9979ae2a0c7422af50bcbb9b26":6.57,"0x5b0a3b98c2f01741a11e57a9d0595b254e62f9f2":0,"0x5d937c3966002cbd9d32c890a59439b4b300a14d":114.77,"0x67efef66a55c4562144b9acfcfbc62f9e4269b3e":7.15,"0x69dee989c30b5ffe40867f5fc14f00e4bce7b681":3.04,"0x6a445ceb72c8b1751755386c3990055ff92e14a0":6.43,"0x74fa517715c4ec65ef01d55ad5335f90dce7cc87":20.1,"0x7b4682d2b3f8670b125af6aea8d7ed2daa43bdc1":5.62,"0x894bd57afd8efc93d9171cb585d11d0977557425":9.37,"0x946696344e7d4346b223e1cf77035a76690d6a73":32.13,"0xb5d108578be3750209d1b3a8f45ffee8c5a75146":3.41,"0xb5e33fe13a821e55ed33c884589a804b1b4f6fd8":4,"0xc19dfd34d3ba5816df9cbdaa02d32a9f8dc6f6fc":31.66,"0xcaa662ad41a662b81be2aea5d59ec0697628665f":5.99,"0xdcfbb12ded3fea12d2a078bc6324131cd14bf835":5.53,"0xe267018c943e77992e7e515724b07b9ce7938124":6.45,"0xe834bf723f5bdff34a5d1129f3c31ea4787bc76a":23.21,"0xe8d5d81dac092ae61d097f84efe230759bf2e522":6.22,"0xf90baa331cfd40f094476e752bf272892170d399":52.61,"0xfdfde3af740a22648b9dd66d05698e5095940850":24.01,"0x04b56a5b3f45cfeafbfdcfc999c14be5434f2146":18.98,"0x0648ff5de80adf54aac07ece2490f50a418dde23":5.16,"0x1472976e0b97f5b2fc93f1fff14e2b5c4447b64f":44.55,"0x24d3b0ed4c444a4f6882d527cbf67adc8c026582":4.21,"0x289841bfb694767bcb56fbc7b741ab4b4d97d490":9.16,"0x28ea5894d4dbbe90bb58ee3bab2869387d711c87":36.16,"0x2a995d355d5df641e878c0f366685741fd18d004":1.62,"0x2d5db889392bc3c8b023a8631ca230a033eea1b8":8.78,"0x3c2c77353e2f6ac1578807b6b2336bf3a3cbb014":20.98,"0x3cd338c3bb249b6b3c55799f85a589febbbff9dd":2.77,"0x3e19c18fe3458a6065d8f0844cb7eae52c9dae07":26.83,"0x3e4370204f598205998143f07ebcc486e441b456":11.02,"0x46c6ba71af7648cd7f67d0ad4d16f75be251ed12":10.53,"0x547a355e70cd1f8caf531b950905af751dbef5e6":25.21,"0x6e98beb694ff1cdb1ee130edd2b21b0298683d58":3.17,"0x7275278c94b5e20708380561c4af98f38ddc6374":39.45,"0x7759283571da8c0928786a96ae601944e10461ff":11.86,"0x89ebf9cd99864f6e51bd7a578965922029cab977":29.43,"0x89ee0491ce55d2f7472a97602a95426216167189":5.29,"0x8b2824d57eebf07f5aff5c91fa67ed7c501a9f43":50.63,"0x92247860a03f48d5c6425c7ca35cdcfcb1013aa1":14.05,"0x9392a1f471d9aa14c0b8eb28bd7a3f4a814727be":5.69,"0x9d2296e2fe3cdbf2eb3e3e2ca8811bafa42eedff":10.89,"0xa39af17ce4a8eb807e076805da1e2b8ea7d0755b":12.33,"0xb87b857670a44356f2b70337e0f218713d2378e8":3.07,"0xba01662e978de7d67f8ffc937726215eb8995d17":48.23,"0xc2d00de94795e60fb76bc37d899170996cbda436":10.63,"0xcdb0016d97fd0e7ec2c3b78aa4786cbd8e19c14c":21.71,"0xea26b78255df2bbc31c1ebf60010d78670185bd0":5.13,"0xec6557348085aa57c72514d67070dc863c0a5a8c":2,"0x1090c996fd1490d15dd7906322ee676a5cc3cf82":0.38,"0x1d94cb25895abd6ccfef863c53372bb462aa6b86":1250.64,"0x2030845ce7d4224523fd2f03ca20afe4aad1d890":1.5,"0x222f93187f15f354d41ff6a7703ef7e18cdd5103":4.62,"0x226af4e918fcf3e62e5eeec867a3e78aaa7bb01d":14.21,"0x41f049d990d38305504631c9835f6f856bf1ba67":28.34,"0x48028de4a9b0d3d91180333d796021ec7757ba1b":9.07,"0x4dca4d427511bc327639b222da18fa5e334f686f":25.86,"0x51bf99bbae59b67e5ce2fa9c17b683384773f8b3":26.38,"0x6045931e511ef7e53a4a817f971e0ca28c758809":11.22,"0x804678fa97d91b974ec2af3c843270886528a9e6":16.26,"0x8853e3309a31583ea438f7704681f46f0d4d909b":7.13,"0x8d3ff27d2ad6a9556b7c4f82f4d602d20114bc90":9.75,"0x8e04b3972b5c25766c681dfd30a8a1cbf6dcc8c1":6.65,"0x8fa59693458289914db0097f5f366d771b7a7c3f":9.54,"0xa0387ebea6be90849c2261b911fbbd52b4c9eac4":9.06,"0xa4963b38b271c0d714593063497fc786fa4029ce":5.92,"0xb8b4383b49d451bbea63bc4421466e1086da6f18":24.89,"0xbc7ac609fa730239190a70952e64ee1dfc2530ac":3.42,"0xc74f7243766269dec5b85b0ef4af186e909c1b06":2.36,"0xcecfc2789af72ed151589a96a59f3a1abc65c3b5":27.96,"0xd171b26e4484402de70e3ea256be5a2630d7e88d":2.16,"0xdc7188ac11e124b1fa650b73ba88bf615ef15256":12.01,"0xdfa808da5cfb9aba5fb3748ff85888f79174f378":6.11,"0xec95ff6281c3ad8e27372fa6675eb337640b8e5e":1.8,"0xecf30fbecfa642012f54212a3be92eef1e48edac":2.48,"0xef5212ada83ec2cc105c409df10b8806d20e3b35":12.23,"0xef7767677867552cfa699148b96a03358a9be779":17.73,"0xf23bad605e94de0e3b60c9718a43a94a5af43915":3.46,"0xf74ee1e10e097dc326a2ad004f9cc95cb71088d3":1.72,"0x029d66f9c0469450b7b4834b8ddc6a1118cec3e1":11.75,"0x0604471c532f9febad3e37190b667f44bd0894b3":119.8,"0x0716725d78081a9e0e1ff81516f5415b399e274d":6.51,"0x2c624c9ecf16cb81ab85cc2c0b0c5e12a09afda6":1.04,"0x4cc442220be1ce560c1f2573f8ca8f460b3e4172":6.75,"0x4d057f769d930eafd597b49d6fb2e1009a73a702":3.33,"0x4eafbf68a2d50291ffd163d4e00ad0f040aae707":0,"0x4fd6d315bef387fad2322fbc64368fc443f0886d":2.38,"0x61010e6cba3b56ba47e9dfd56da682dacfe76131":5.49,"0x6a00e41561ac36a78dba1d09091b0f00c4e53724":5.97,"0x7752e1fa9f3a2e860856458517008558deb989e3":6.9,"0x8046fa66753928f35f7db23ae0188ee6743c2fba":0.7,"0x8271d7eafeeb8f24d7c9fe1acce2ae20611972e5":27.34,"0x950fd020f8e4b8c57285ec7020b7a204348dadfa":6.72,"0x9730c791743300e9f984c9264395ce705a55da7c":10.38,"0xa7a0b605343df36b748ff4b5f7578b3f2d0651ce":40.19,"0xaa40f1ac20aafcfee8595da606d78c503c7e70a3":25.99,"0xac109c8025f272414fd9e2faa805a583708a017f":4.42,"0xb7cada0f120ca46745a024e6b9fe907b2fe10cf3":4.93,"0xbcf01a42f6bc42f3cfe81b05519565044d65d22a":0.36,"0xc20a92a1424b29b78dfaf92fd35d4cf8a06419b4":18.35,"0xc309a6d2f1537922e06f15aa2eb21caa1b2eedb6":9.05,"0xd02da76c813b9cd4516ed50442923e625f90228f":31.83,"0xdaa89d335926628367b47852989bb22ee62ca5de":0,"0xdc9a574b9b341d4a98ce29005b614e1e27430e74":4.48,"0xdde420cbb3794ebd8ffc3ac69f9c78e5d1411870":11.75,"0xe6b421a4408c82381b226ab5b6f8c4b639044359":8.19,"0xea61020e5a128d2bec67d48f7cfbe3408db7e391":5.66,"0xf45cd219aef8618a92baa7ad848364a158a24f33":3.92,"0xffd4b200d3c77a0b691b5562d804b3bd54294e6e":5.26,"0x0362ba706dfe8ed12ec1470ab171d8dcb1c72b8d":19.57,"0x123d475e13aa54a43a7421d94caa4459da021c77":3.2,"0x13321acff4a27f3d2bca64b8beac6e5fdaaaf12c":5.15,"0x1434bb50196a0c7ea825940b1dfd8aad25d79817":27.19,"0x153ad7d25b0b810497483d0cee8af42fc533fec8":1.18,"0x20c6de8983fb2d641c55004646aef40b4ea66e18":0.06,"0x222c3cbb89647bf77822435bd4c234a04272a77a":4.55,"0x3578b1f9bce98d2f4d293b422d8850fdf48b1f21":20.61,"0x3e42c1f7239231e3752b507764445dd8e6a570d5":2.81,"0x3f1a9f3d9aad8bd339ed4853f345d2ef89fbfe0c":10.01,"0x510b29a93ebf098f3fc24a16541aaa0114d07056":13.65,"0x5a58609da96469e9def3fe344bc39b00d18eb9a5":1.79,"0x5afef8567414f29f0f927a0f2787b188624c10e2":14.17,"0x6615ce60d71513aa4849269dd63821d324a23f8c":4.84,"0x678edb8b268e73db57b7694c163e1dc296b6e219":3.13,"0x6a97867a4b7eb7646ffb1f359ad582e9903aa1c2":4.25,"0x6d0c831254221ba121fb53fb44df289a6558867d":11.34,"0x81d776c90c89b8d51e9497d58338933127e2fa80":0.92,"0x853784b7bde87d858555715c0123374242db7943":4.55,"0x89666d026696660e93bf6edf57b71a68615768b7":8.26,"0x8f6baf368e7a4f6e2c9c995f22702d5e654a0237":9.11,"0xa5bb44c6f5fd9b836e5a654c8abbccc96a15dee5":9.03,"0xc13aa76aac067c86ae38028019f414d731b3d86a":12.07,"0xcad7019d6d84a3294b0494aef02e73bd0f2572eb":10.1,"0xe094c686ad6cdda57b9564457f541fbf099b948a":1.85,"0xe482249cd295c0d1e9d2baaee71e66de21024c68":25.2,"0xe60b4e87645093a42fa9dcc5d0c8df6e67f1f9d2":23.42,"0xe98585bbb2dc81854ff100a3d9d7b0f53e0dafed":16.29,"0xf1ec67fa1881796bff63db3e1a301ce9cb787fad":2.41,"0xf3bc6fc080ffcc30d93df48bfa2aa14b869554bb":2.26,"0x05faf555522fa3f93959f86b41a3808666093210":6.92,"0x133ee93fe93320e1182923e1a640912ede17c90c":2.94,"0x16afc4f2ad82986bbe2a4525601f8199ab9c832d":3.93,"0x1b415c3ec8095afbf9d78882b3a6263c4ad141b5":5.56,"0x1f37d4226d23d09044b8005c127c0517bd7e94fd":3.2,"0x21dd71ab78ede3033c976948f769d506e4f489ee":12.41,"0x2354ef4df11afacb85a5c7f98b624072eccddbb1":2.12,"0x24eb18ba412701f278b172ef96697c4622b19da6":22.97,"0x37908620def1491dd591b5a2d16022a33cdda415":13.46,"0x4288706624e3dd839b069216eb03b8b9819c10d2":4.24,"0x47c42b0a056a9c6e9c65b9ef79020af518e767a5":7.89,"0x66fdb2eccfb58cf098eaa419e5efde841368e489":4.72,"0x71b01ebddd797c8e9e0b003ea2f4fd207fbf46cc":5.98,"0x7653d2c31440f04d2c6520d482dc5dbd7650f70a":46.26,"0x856f9ad94ca8680b899214bb1eb3d235a3c33afe":18.32,"0x8645148de4e339964ba480ae3478653b5bc6e211":3.02,"0x8e799cb0737525ceb8a6c6ad07f748535ff6377b":26.26,"0x91417426c3feaa3ca795921eb9fdd9715ad92537":1.36,"0x942b294e59a8c47a0f7f20df105b082710f7c305":2.6,"0xa3bfbbad526c6b856b1fdf73f99bcd894761fbf3":0.38,"0xa9986fcbdb23c2e8b11ab40102990a08f8e58f06":7.19,"0xb2678c414ebc63c9cc6d1a0fc45f43e249b50fde":14.51,"0xc05654c66756ebb82c518598c5f1ea1a0199a563":12.91,"0xc5768c5371568cf1114cddd52caed163a42626ed":11.15,"0xc6b668548aa4a56792e8002a920d3159728121d5":8.33,"0xc7a9c2af263ebb86139cca9349e49b17129ba033":6.75,"0xc869a9943b702b03770b6a92d2b2d25cf3a3f571":2.84,"0xcd68856b6e72e99b5eeaae7d41bb4a3b484c700d":119.84,"0xd63b5cecb1f40d626307b92706df357709d05827":6.27,"0xec6b56a736859ae8ea4beda16279ecd8c60da7ea":3.23,"0x014608e87af97a054c9a49f81e1473076d51d9a3":4.23,"0x03f18135c44c64ebfdcbad8297fe5bdafdbbdd86":6.26,"0x168b273278f3a8d302de5e879aa30690b7e6c28f":4.83,"0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae":14.85,"0x1bdcebca3b93af70b58c41272aea2231754b23ca":7.09,"0x28415ff2c35b65b9e5c7de82126b4015ab9d031f":9.71,"0x356dd24bff8e23bde0430f00ad0c290e33438bd7":74.7,"0x3dcb1787a95d2ea0eb7d00887704eebf0d79bb13":28.03,"0x44ea47f2765fd5d26b7ef0222736ad6fd6f61950":17.73,"0x460b4193ec4c1a17372aa5fdcd44c520ba658646":20.51,"0x468b2dc8dc75990ee3e9dc0648965ad6294e7914":28.36,"0x61eb789d75a95caa3ff50ed7e47b96c132fec082":3.23,"0x73566ca86248bd12f0979793e4671e99a40299a7":11.06,"0x74e4716e431f45807dcf19f284c7aa99f18a4fbc":4.86,"0x7eb5d86fd78f3852a3e0e064f2842d45a3db6ea2":9.9,"0x7efaef62fddcca950418312c6c91aef321375a00":2.83,"0x824eb9fadfb377394430d2744fa7c42916de3ece":5.02,"0xacf47cbeaab5c8a6ee99263cfe43995f89fb3206":9.5,"0xb6e34b5c65eda51bb1bd4ea5f79d385fb94b9504":51.64,"0xce383277847f8217392eea98c5a8b4a7d27811b0":23.67,"0xd8e2f8b6db204c405543953ef6359912fe3a88d6":5.99,"0xd9bccbbbdfd9d67beb5d2273102ce0762421d1e3":135.77,"0xdd5bad8f8b360d76d12fda230f8baf42fe0022cf":6.82}') },
        422: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"coinType","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"newAddress","type":"bytes"}],"name":"AddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"AuthorisationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"hash","type":"bytes"}],"name":"ContenthashChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"record","type":"bytes"}],"name":"DNSRecordChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"}],"name":"DNSRecordDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"DNSZoneCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"indexed":false,"internalType":"address","name":"implementer","type":"address"}],"name":"InterfaceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"x","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"string","name":"indexedKey","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"TextChanged","type":"event"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"addr","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"authorisations","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"clearDNSZone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"contenthash","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint16","name":"resource","type":"uint16"}],"name":"dnsRecord","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"}],"name":"hasDNSRecords","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"interfaceImplementer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentType","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"coinType","type":"uint256"},{"internalType":"bytes","name":"a","type":"bytes"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"a","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"setAuthorisation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"hash","type":"bytes"}],"name":"setContenthash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setDNSRecords","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"internalType":"address","name":"implementer","type":"address"}],"name":"setInterface","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"}],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]') },
        423: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_old","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"label","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"old","outputs":[{"internalType":"contract ENS","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"recordExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setSubnodeRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"}]') },
        429: function(e) { e.exports = JSON.parse('{"Farm":"Farm","Staking":"Staking","Syrup Pool":"Syrup Pool","Exchange":"Exchange","Docs":"Docs","Voting":"Voting","Lottery":"Lottery","Connect Wallet":"Connect Wallet","Your %asset% Balance":"Your %asset% Balance","Total %asset% Supply":"Total %asset% Supply","Locked":"Locked","Pending harvest":"Pending harvest","New rewards per block":"New rewards per block","Total CAKE burned since launch":"Total MGT burned since launch","See the Kitchen":"See the Kitchen","Telegram":"Telegram","Blog":"Blog","Github":"Github","Twitter":"Twitter","Deposit":"Deposit","Earn":"Earn","Stake LP tokens to stack CAKE":"Stake LP tokens to stack MGT","You can swap back anytime":"You can swap back anytime","%asset% Earned":"%asset% Earned","Tokens Staked":"Tokens Staked","Every time you stake and unstake CAKE tokens, the contract will automagically harvest CAKE rewards for you!":"Every time you stake and unstake MGT tokens, the contract will automagically harvest MGT rewards for you!","XVS Tokens Earned":"XVS Tokens Earned","Rewards will be calculated per block and total rewards will be distributed automatically at the end of each project\u2019s farming period.":"Rewards will be calculated per block and total rewards will be distributed automatically at the end of each project\u2019s farming period.","Pool":"Pool","Coming Soon":"Coming Soon","APY":"APY","Total Liquidity":"Total Liquidity","View on BscScan":"View on BscScan","Cake price":"MGT price","%asset% Tokens Earned":"%asset% Tokens Earned","%num% blocks until farming ends":"%num% blocks until farming ends","Coming Soon...":"Coming Soon...","Your Stake":"Your Stake","Farming starts in %num% Blocks":"Farming starts in %num% Blocks","Finished":"Finished","Farming ends in %num% Blocks":"Farming ends in %num% Blocks","Project site":"Project site","Project Site":"Project Site","See Token Info":"See Token Info","You can unstake at any time.":"You can unstake at any time.","Rewards are calculated per block.":"Rewards are calculated per block.","Total":"Total","End":"End","View Project Site":"View Project Site","Your Project? \ud83d\udc40":"Your Project? \ud83d\udc40","Create a pool for your token":"Create a pool for your token","Apply now":"Apply now","Round 1: BUYING":"Round 1: BUYING","%num% CAKE":"%num% MGT","Spend CAKE to buy tickets, contributing to the lottery pot. Ticket purchases end approx. 30 minutes before lottery. Win prizes if 2, 3, or 4 of your ticket numbers match the winning numbers and their positions! Good luck!":"Spend MGT to buy tickets, contributing to the lottery pot. Ticket purchases end approx. 30 minutes before lottery. Win prizes if 2, 3, or 4 of your ticket numbers match the winning numbers and their positions! Good luck!","Your total tickets for this round":"Your total tickets for this round","Buy ticket":"Buy ticket","View your tickets":"View your tickets","Approx. time left to buy tickets":"Approx. time left to buy tickets","My Tickets (Total: %TICKETS%)":"My Tickets (Total: %TICKETS%)","Close":"Close","Latest Winning Numbers":"Latest Winning Numbers","Ticket":"Ticket","Tickets matching 4 numbers:":"Tickets matching 4 numbers:","Tickets matching 3 numbers:":"Tickets matching 3 numbers:","Tickets matching 2 numbers:":"Tickets matching 2 numbers:","Export recent winning numbers":"Export recent winning numbers","Enter amount of tickets to buy":"Enter amount of tickets to buy","Max":"Max","%num% CAKE Available":"%num% MGT Available","%num% %symbol% Available":"%num% %symbol% Available","Your amount must be a multiple of 10 CAKE":"Your amount must be a multiple of 10 MGT","1 Ticket = %lotteryPrice% CAKE":"1 Ticket = %lotteryPrice% MGT","Until ticket sale:":"Until ticket sale:","You will spend: %num% CAKE":"You will spend: %num% MGT","Cancel":"Cancel","Confirm":"Confirm","Warning":"Warning","Lottery ticket purchases are final.":"Lottery ticket purchases are final.","Your CAKE will not be returned to you after you spend it to buy tickets.":"Your MGT will not be returned to you after you spend it to buy tickets.","Tickets are only valid for one lottery draw, and will be burned after the draw.":"Tickets are only valid for one lottery draw, and will be burned after the draw.","Buying tickets does not guarantee you will win anything. Please only participate once you understand the risks.":"Buying tickets does not guarantee you will win anything. Please only participate once you understand the risks.","I understand":"I understand","Ticket purchases are final. Your CAKE cannot be returned to you after buying tickets.":"Ticket purchases are final. Your MGT cannot be returned to you after buying tickets.","Claim prizes":"Claim prizes","CAKE prizes to be claimed":"MGT prizes to be claimed","Round 2: CLAIMING":"Round 2: CLAIMING","Pending Confirmation":"Pending Confirmation","Approx. time before next lottery start":"Approx. time before next lottery start","Enable CAKE":"Enable MGT","IFO: Initial Farm Offerings":"IFO: Initial Farm Offerings","Buy new tokens with a brand new token sale model.":"Buy new tokens with a brand new token sale model.","You\u2019ll pay for the new tokens using CAKE-BNB LP tokens, which means you need to stake equal amounts of CAKE and BNB in a liquidity pool to take part.":"You\u2019ll pay for the new tokens using MGT-BNB LP tokens, which means you need to stake equal amounts of MGT and BNB in a liquidity pool to take part.","Get CAKE-BNB LP >":"Get MGT-BNB LP >","The project gets the BNB, PancakeSwap burns the CAKE.":"The project gets the BNB, MasterMind Games burns the MGT.","You get the tokens.":"You get the tokens.","Want to launch your own IFO?":"Want to launch your own IFO?","Launch your project with PancakeSwap, Binance Smart Chain\u2019s most-used AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on BSC.":"Launch your project with MasterMind Games, Binance Smart Chain\u2019s most-used AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on BSC.","Apply to launch":"Apply to launch","Community":"Community","Core":"Core","Available":"Available","My Wallet":"My Wallet","Sign out":"Sign out","Harvest all (%count%)":"Harvest all (%count%)","Cake Stats":"MGT Stats","Total CAKE Supply":"Total MGT Supply","Total CAKE Burned":"Total MGT Burned","New CAKE/block":"New MGT/block","Farms & Staking":"Farms & Staking","CAKE to Harvest":"MGT to Harvest","CAKE in Wallet":"MGT in Wallet","Collecting CAKE":"Collecting MGT","Your Lottery Winnings":"Your Lottery Winnings","CAKE to Collect":"MGT to Collect","Total jackpot this round":"Total jackpot this round","Collect Winnings":"Collect Winnings","Buy Tickets":"Buy Tickets","Harvest":"Harvest","Select":"Select","Winning Numbers This Round":"Winning Numbers This Round","Winning numbers":"Winning numbers","Total prizes":"Total prizes","Round #%num%":"Round #%num%","Total Pot:":"Total Pot:","Staking Pool":"Staking Pool","PancakeSwap":"MasterMind Games","The #1 AMM and yield farm on Binance Smart Chain.":"The #1 AMM and yield farm on Binance Smart Chain.","Stake CAKE to earn new tokens.":"Stake MGT to earn new tokens.","Launch Time":"Launch Time","For Sale":"For Sale","CAKE to burn (USD)":"MGT to burn (USD)","CAKE to burn:":"MGT to burn:","Unstake":"Unstake","\u2b50\ufe0f Every time you stake and unstake LP tokens, the contract will automagically harvest CAKE rewards for you!":"\u2b50\ufe0f Every time you stake and unstake LP tokens, the contract will automagically harvest MGT rewards for you!","How to take part":"How to take part","Before Sale":"Before Sale","Buy CAKE and BNB tokens":"Buy MGT and BNB tokens","Get CAKE-BNB LP tokens by adding CAKE and BNB liquidity":"Get MGT-BNB LP tokens by adding MGT and BNB liquidity","During Sale":"During Sale","While the sale is live, commit your CAKE-LP tokens to buy the IFO tokens":"While the sale is live, commit your MGT-LP tokens to buy the IFO tokens","After Sale":"After Sale","Claim the tokens you bought, along with any unspent funds.":"Claim the tokens you bought, along with any unspent funds.","Done!":"Done!","Read more":"Read more","Connect":"Connect","Trade in for CAKE, or keep for your collection!":"Trade in for MGT, or keep for your collection!","Register your interest in winning an NFT below.":"Register your interest in winning an NFT below.","Register for a chance to win":"Register for a chance to win","Learn more":"Learn more","Trade in NFT":"Trade in NFT","Trade in":"Trade in","You will receive":"You will receive","When you trade in this NFT to receive CAKE, you will lose access to it forever!":"When you trade in this NFT to receive MGT, you will lose access to it forever!","Claim NFT":"Claim NFT","How it works":"How it works","Winners will be able to claim an NFT on this page once the claiming period starts.":"Winners will be able to claim an NFT on this page once the claiming period starts.","If you\u2019re not selected, you won\u2019t be able to claim. Better luck next time!":"If you\u2019re not selected, you won\u2019t be able to claim. Better luck next time!","Winners can trade in their NFTs for a CAKE value until the expiry date written below. If you don\'t trade in your NFT by then, don\u2019t worry: you\u2019ll still keep it in your wallet!":"Winners can trade in their NFTs for a MGT value until the expiry date written below. If you don\'t trade in your NFT by then, don\u2019t worry: you\u2019ll still keep it in your wallet!","How are winners selected?":"How are winners selected?","Winners are selected at random! Good luck!":"Winners are selected at random! Good luck!","Value if traded in":"Value if traded in","Number minted":"Number minted","Number burned":"Number burned","Claim this NFT":"Claim this NFT","Trade in for CAKE":"Trade in for MGT","Loading\u2026":"Loading\u2026","Details":"Details","You won!":"You won!","Claim an NFT from the options below!":"Claim an NFT from the options below!","Can be traded until":"Can be traded until","Wallet Disconnected":"Wallet Disconnected","Connect to see if you have won an NFT!":"Connect to see if you have won an NFT!","Home":"Home","Trade":"Trade","Farms":"Farms","Pools":"Pools","NFT":"NFT","Info":"Info","IFO":"IFO","More":"More","Liquidity":"Liquidity","Overview":"Overview","Token":"Token","Pairs":"Pairs","Accounts":"Accounts","Stake LP tokens to earn CAKE":"Stake LP tokens to earn MGT","Active":"Active","Inactive":"Inactive","Dual":"Dual","Compound":"Compound","Unstake %asset%":"Unstake %asset%","The CAKE Lottery":"The MGT Lottery","Buy tickets with CAKE":"Buy tickets with MGT","Win if 2, 3 or 4 of your ticket numbers match!":"Win if 2, 3 or 4 of your ticket numbers match!","%time% Until lottery draw":"%time% Until lottery draw","Next draw":"Next draw","Past draws":"Past draws","Round %num%":"Round %num%","Total Pot":"Total Pot","Your tickets for this round":"Your tickets for this round","Sorry, no prizes to collect":"Sorry, no prizes to collect","In Wallet":"In Wallet","Loading...":"Loading...","Next IFO":"Next IFO","Past IFOs":"Past IFOs","APR":"APR","APR (incl. LP rewards)":"APR (incl. LP rewards)","Select lottery number:":"Select lottery number:","Search":"Search","History":"History","Pool Size":"Pool Size","Burned":"Burned","To burn":"To burn","Show Last":"Show Last","Prize Pot":"Prize Pot","Winners":"Winners","No. Matched":"No. Matched","Enable Contract":"Enable Contract","%asset% staked":"%asset% staked","Total Value Locked":"Total Value Locked","Across all LPs and Syrup Pools":"Across all LPs and Syrup Pools","Your wallet":"Your wallet","Logout":"Logout","Profile Setup":"Profile Setup","Show off your stats and collectibles with your unique profile.":"Show off your stats and collectibles with your unique profile.","Total cost: 10 CAKE":"Total cost: 10 MGT","Get Starter Collectible":"Get Starter Collectible","Set Profile Picture":"Set Profile Picture","Join Team":"Join Team","Set Name":"Set Name","Step 1":"Step 1","Every profile starts by making a \\"starter\\" collectible (NFT).":"Every profile starts by making a \\"starter\\" collectible (NFT).","This starter will also become your first profile picture.":"This starter will also become your first profile picture.","You can change your profile pic later if you get another approved Pancake Collectible,":"You can change your profile pic later if you get another approved MGT Collectible,","Choose your Starter!":"Choose your Starter!","Choose wisely: you can only ever make one starter collectible!":"Choose wisely: you can only ever make one starter collectible!","Cost: 5 CAKE":"Cost: 5 MGT","Next Step":"Next Step","Confirming":"Confirming","Enabled":"Enabled","Confirmed":"Confirmed","Insufficient CAKE balance":"Insufficient MGT Balance","Step 2":"Step 2","Choose collectible":"Choose collectible","Choose a profile picture from the eligible collectibles (NFT) in your wallet, shown below.":"Choose a profile picture from the eligible collectibles (NFT) in your wallet, shown below.","Only approved Pancake Collectibles can be used.":"Only approved MGT Collectibles can be used.","Allow collectible to be locked":"Allow collectible to be locked","The collectible you\'ve chosen will be locked in a smart contract while it\'s being used as your profile picture. ":"The collectible you\'ve chosen will be locked in a smart contract while it\'s being used as your profile picture. ","Don\'t worry - you\'ll be able to get it back at any time.":"Don\'t worry - you\'ll be able to get it back at any time.","Step 3":"Step 3","Join a Team":"Join a Team","It won\'t be possible to undo the choice you make for the foreseeable future!":"It won\'t be possible to undo the choice you make for the foreseeable future!","There\'s currently no big difference between teams, and no benefit of joining one team over another for now.":"There\'s currently no big difference between teams, and no benefit of joining one team over another for now.","So pick whichever you like!":"So pick whichever you like!","%count% Members":"%count% Members","Step 4":"Step 4","This name will be shown in team leaderboards and search results as long as your profile is active.":"This name will be shown in team leaderboards and search results as long as your profile is active.","Your name must be at least 3 and at most 15 standards letters and numbers long.":"Your name must be at least 3 and at most 15 standards letters and numbers long.","Complete Profile":"Complete Profile","Maximum length: 15 characters":"Maximum length: 15 characters","Minimum length: 3 characters":"Minimum length: 3 characters","No spaces or special characters":"No spaces or special characters","Submitting NFT to contract and confirming User Name and Team":"Submitting NFT to contract and confirming User Name and Team","Oops!":"Oops!","We couldn\'t find any Pancake Collectibles in your wallet.":"We couldn\'t find any MGT Collectibles in your wallet.","You need a Pancake Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\'ll need to get it back or acquire a new one somehow. You can\'t make a new starter with this wallet address.":"You need a MGT Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\'ll need to get it back or acquire a new one somehow. You can\'t make a new starter with this wallet address.","ROI Calculator":"ROI Calculator","Timeframe":"Timeframe","CAKE per $1000":"MGT per $1000","Calculated based on current rates.":"Calculated based on current rates.","Compounding %freq%x daily.":"Compounding %freq%x daily.","All figures are estimates provided for your convenience only, and by no means represent guaranteed returns.":"All figures are estimates provided for your convenience only, and by no means represent guaranteed returns.","You can\'t change this once you click Confirm.":"You can\'t change this once you click Confirm.","Until ticket sale":"Until ticket sale","To burn:":"To burn:","On sale soon":"On sale soon","On sale":"On sale","Teams Overview":"Teams Overview","Teams":"Teams","See More":"See More","Team Achievements":"Team Achievements","Team Points":"Team Points","Active Members":"Active Members","Set up now":"Set up now","You haven\u2019t set up your profile yet!":"You haven\u2019t set up your profile yet!","You can do this at any time by clicking on your profile picture in the menu":"You can do this at any time by clicking on your profile picture in the menu","Collect":"Collect","Compounding":"Compounding","Harvesting":"Harvesting","Buy CAKE":"Buy MGT","Get LP tokens":"Get LP tokens","Show":"Show","Hide":"Hide","Stake LP tokens":"Stake LP tokens","Stake":"Stake","Earned":"Earned","Staked":"Staked","The lottery number you provided does not exist":"The lottery number you provided does not exist","Error fetching data":"Error fetching data","Teams & Profiles":"Teams & Profiles","Earn more points for completing larger quests!":"Earn more points for completing larger quests!","Collecting points for these tasks makes them available again.":"Collecting points for these tasks makes them available again.","Earn points by completing regular tasks!":"Earn points by completing regular tasks!","Task Center":"Task Center","Achievements":"Achievements","Enter your name...":"Enter your name...","I understand that people can view my wallet if they know my username":"I understand that people can view my wallet if they know my username","A minimum of %num% CAKE is required":"A minimum of %num% MGT is required","Only reuse a name from other social media if you\'re OK with people viewing your wallet. You can\'t change your name once you click Confirm.":"Only reuse a name from other social media if you\'re OK with people viewing your wallet. You can\'t change your name once you click Confirm.","Please connect your wallet to continue":"Please connect your wallet to continue","Public Profile":"Public Profile","Show off your stats and collectibles with your unique profile. Team features will be revealed soon!":"Show off your stats and collectibles with your unique profile. Team features will be revealed soon!","Points":"Points","Set Your Name":"Set Your Name","Step %num%":"Step %num%","See the list >":"See the list >","Staked only":"Staked only","Get %symbol%":"Get %symbol%","Balance":"Balance","Oops, page not found.":"Oops, page not found.","Back Home":"Back Home","Unstake LP tokens":"Unstake LP tokens","Get ready":"Get ready","Live":"Live","Start":"Start","Finish":"Finish","Connect wallet to view":"Connect wallet to view","Sorry, you needed to register during the \u201centry\u201d period!":"Sorry, you needed to register during the \u201centry\u201d period!","Check your Rank":"Check your Rank","You\u2019re not participating this time.":"You\u2019re not participating this time.","Rank in team":"Rank in team","Your volume":"Your volume","Since start":"Since start","Your Score":"Your Score","Enable":"Enable","Enabling":"Enabling","%amount% CAKE":"%amount% MGT","IFO Shopper: %title%":"IFO Shopper: %title%","%num% of total":"%num% of total","All estimated rates take into account this pool\u2019s %fee%% performance fee":"All estimated rates take into account this pool\u2019s %fee%% performance fee","Sorry, you didn\u2019t contribute enough LP tokens to meet the minimum threshold. You didn\u2019t buy anything in this sale, but you can still reclaim your LP tokens.":"Sorry, you didn\u2019t contribute enough LP tokens to meet the minimum threshold. You didn\u2019t buy anything in this sale, but you can still reclaim your LP tokens.","Only applies within 3 days of staking. Unstaking after 3 days will not include a fee. Timer resets every time you stake new CAKE in the pool.":"Only applies within 3 days of staking. Unstaking after 3 days will not include a fee. Timer resets every time you stake new MGT in the pool.","Unstaking Fee":"Unstaking Fee","unstaking fee until":"unstaking fee until","unstaking fee if withdrawn within 72h":"unstaking fee if withdrawn within 72h","Unstaking fee: %fee%%":"Unstaking fee: %fee%%","Performance Fee":"Performance Fee","Compound: collect and restake CAKE into pool.":"Compound: collect and restake MGT into pool.","Harvest: collect CAKE and send to wallet":"Harvest: collect MGT and send to wallet","%position% Entered":"%position% Entered","Sort by":"Sort by","Expired":"Expired","Calculating":"Calculating","Next":"Next","Later":"Later","Up":"Up","Down":"Down","%multiplier% Payout":"%multiplier% Payout","Enter %direction%":"Enter %direction%","Prize Pool:":"Prize Pool:","Charts":"Charts","Your history":"Your history","All":"All","Collected":"Collected","Uncollected":"Uncollected","Round":"Round","Rounds":"Rounds","PNL":"PNL","Your Result":"Your Result","Your direction":"Your direction","Your position":"Your position","Lose":"Lose","Entry starts":"Entry starts","Locked Price":"Locked Price","Last Price":"Last Price","Closed Price":"Closed Price","Win":"Win","Opening Block":"Opening Block","Closing Block":"Closing Block","Total Value Locked (MGT)":"Total Value Locked (MGT)","Automatic restaking":"Automatic restaking","Manual CAKE":"Manual MGT","Auto CAKE":"Auto MGT","Auto CyberCows":"Auto MGT","Claim":"Claim","Any funds you stake in this pool will be automagically harvested and restaked (compounded) for you.":"Any funds you stake in this pool will be automagically harvested and restaked (compounded) for you.","Total staked":"Total staked","Just stake some tokens to earn.":"Just stake some tokens to earn.","High APR, low risk.":"High APR, low risk.","Stake LP tokens to earn.":"Stake LP tokens to earn.","Basic Sale":"Basic Sale","Everyone can only commit a limited amount, but may expect a higher return per token committed.":"Everyone can only commit a limited amount, but may expect a higher return per token committed.","Unlimited Sale":"Unlimited Sale","No limits on the amount you can commit. Additional fee applies when claiming.":"No limits on the amount you can commit. Additional fee applies when claiming.","Every person can only commit a limited amount, but may expect a higher return per token committed.":"Every person can only commit a limited amount, but may expect a higher return per token committed.","You didn\u2019t participate in this sale!":"You didn\u2019t participate in this sale!","Max. LP token entry":"Max. LP token entry","How to Take Part":"How to Take Part","Activate your Profile":"Activate your Profile","You\u2019ll need an active PancakeSwap Profile to take part in an IFO!":"You\u2019ll need an active MGT Profile to take part in an IFO!","Profile Active!":"Profile Active!","Get CAKE-BNB LP Tokens":"Get MGT-BNB LP Tokens","Stake CAKE and BNB in the liquidity pool to get LP tokens.":"Stake MGT and BNB in the liquidity pool to get LP tokens.","You\u2019ll spend them to buy IFO sale tokens.":"You\u2019ll spend them to buy IFO sale tokens.","Commit LP Tokens":"Commit LP Tokens","When the IFO sales are live, you can \u201ccommit\u201d your LP tokens to buy the tokens being sold.":"When the IFO sales are live, you can \u201ccommit\u201d your LP tokens to buy the tokens being sold.","We recommend committing to the Basic Sale first, but you can do both if you like.":"We recommend committing to the Basic Sale first, but you can do both if you like.","Claim your tokens and achievement":"Claim your tokens and achievement","After the IFO sales finish, you can claim any IFO tokens that you bought, and any unspent CAKE-BNB LP tokens will be returned to your wallet.":"After the IFO sales finish, you can claim any IFO tokens that you bought, and any unspent MGT-BNB LP tokens will be returned to your wallet.","This round\u2019s closing transaction has been submitted to the blockchain, and is awaiting confirmation.":"This round\u2019s closing transaction has been submitted to the blockchain, and is awaiting confirmation.","No prediction history available":"No prediction history available","If you are sure you should see history here, make sure you\u2019re connected to the correct wallet and try again.":"If you are sure you should see history here, make sure you\u2019re connected to the correct wallet and try again.","Last price from Chainlink Oracle":"Last price from Chainlink Oracle","%num% Points to Collect":"%num% Points to Collect","Net results":"Net results","Average return / round":"Average return / round","Average position entered / round":"Average position entered / round","Won":"Won","Lost":"Lost","Entered":"Entered","Connect your wallet to view your prediction history":"Connect your wallet to view your prediction history","Best round: %roundId%":"Best round: %roundId%","You\u2019ve already staked the maximum amount you can stake in this pool!":"You\u2019ve already staked the maximum amount you can stake in this pool!","Markets Paused":"Markets Paused","Prediction markets have been paused due to an error.":"Prediction markets have been paused due to an error.","All open positions have been canceled.":"All open positions have been canceled.","You can reclaim any funds entered into existing positions via the History tab on this page.":"You can reclaim any funds entered into existing positions via the History tab on this page.","Show History":"Show History","Welcome!":"Welcome!","This product is still in beta (testing) phase.":"This product is still in beta (testing) phase.","Before you use this product, make sure you fully understand the risks involved.":"Before you use this product, make sure you fully understand the risks involved.","Once you enter a position, you cannot cancel or adjust it.":"Once you enter a position, you cannot cancel or adjust it.","All losses are final.":"All losses are final.","I understand that I am using this product at my own risk. Any loss incurred due to my actions are my own responsibility.":"I understand that I am using this product at my own risk. Any loss incurred due to my actions are my own responsibility.","Stake CAKE and BNB in the liquidity pool to get LP tokens. You\'ll spend them to buy IFO sale tokens.":"Stake MGT and BNB in the liquidity pool to get LP tokens. You\'ll spend them to buy IFO sale tokens.","You\'ll need an active PancakeSwap Profile to take part in an IFO!":"You\'ll need an active MGT Profile to take part in an IFO!","Your LP tokens committed":"Your LP tokens committed","Max. Committed":"Max. Committed","Total committed:":"Total committed:","Additional fee:":"Additional fee:","Learn more about %symbol%":"Learn more about %symbol%","Earned since your last action":"Earned since your last action","Commit ~%amount% LP in total to earn!":"Commit ~%amount% LP in total to earn!","Learn more about %title%":"Learn more about %title%","365d (APY)":"365d (APY)","%num%d":"%num%d","d":"d","h":"h","m":"m","Hide or show expandable content":"Hide or show expandable content","No tokens to stake":"No tokens to stake","Successfully claimed!":"Successfully claimed!","Unable to claim NFT":"Unable to claim NFT","Unable to claim NFT, please try again.":"Unable to claim NFT, please try again.","Error":"Error","1x %nftName% Collectible":"1x %nftName% Collectible","1x %nftName% NFT":"1x %nftName% NFT","NFT successfully transferred!":"NFT successfully transferred!","View Contract":"View Contract","See Pair Info":"See Pair Info","Stake LP":"Stake LP","Multiplier":"Multiplier","Start Farming":"Start Farming","Farming":"Farming","Enable Farm":"Enable Farm","Search Farms":"Search Farms","To Top":"To Top","Total value of the funds in this farm\u2019s liquidity pool":"Total value of the funds in this farm\u2019s liquidity pool","The Multiplier represents the proportion of CAKE rewards each farm receives, as a proportion of the CAKE produced each block.":"The Multiplier represents the proportion of MGT rewards each farm receives, as a proportion of the MGT produced each block.","For example, if a 1x farm received 1 CAKE per block, a 40x farm would receive 40 CAKE per block.":"For example, if a 1x farm received 1 MGT per block, a 40x farm would receive 40 MGT per block.","This amount is already included in all APR calculations for the farm.":"This amount is already included in all APR calculations for the farm.","Hot":"Hot","Success!":"Success!","You have successfully claimed your rewards.":"You have successfully claimed your rewards.","Commit":"Commit","If you don\u2019t commit enough LP tokens, you may not receive any IFO tokens at all and will only receive a full refund of your LP tokens.":"If you don\u2019t commit enough LP tokens, you may not receive any IFO tokens at all and will only receive a full refund of your LP tokens.","LP Tokens required":"LP Tokens required","Get LP tokens, or make sure your tokens aren\u2019t staked somewhere else.":"Get LP tokens, or make sure your tokens aren\u2019t staked somewhere else.","Funds to raise:":"Funds to raise:","Price per %symbol%:":"Price per %symbol%:","You need an active PancakeSwap Profile to take part in an IFO!":"You need an active MGT Profile to take part in an IFO!","Achievement":"Achievement","Commit ~%minLp% LP in total to earn!":"Commit ~%minLp% LP in total to earn!","What\u2019s the difference between a Basic Sale and Unlimited Sale?":"What\u2019s the difference between a Basic Sale and Unlimited Sale?","In the Basic Sale, every user can commit a maximum of about 100 USD worth of CAKE-BNB LP Tokens. We calculate the maximum LP amount about 30 minutes before each IFO. The Basic Sale has no participation fee.":"In the Basic Sale, every user can commit a maximum of about 100 USD worth of MGT-BNB LP Tokens. We calculate the maximum LP amount about 30 minutes before each IFO. The Basic Sale has no participation fee.","In the Unlimited Sale, there\u2019s no limit to the amount of CAKE-BNB LP Tokens you can commit. However, there\u2019s a fee for participation: see below.":"In the Unlimited Sale, there\u2019s no limit to the amount of MGT-BNB LP Tokens you can commit. However, there\u2019s a fee for participation: see below.","Which sale should I commit to? Can I do both?":"Which sale should I commit to? Can I do both?","You can choose one or both at the same time! If you\u2019re only committing a small amount, we recommend the Basic Sale first. Just remember you need a PancakeSwap Profile in order to participate.":"You can choose one or both at the same time! If you\u2019re only committing a small amount, we recommend the Basic Sale first. Just remember you need a MGT Profile in order to participate.","How much is the participation fee?":"How much is the participation fee?","There\u2019s only a participation fee for the Unlimited Sale: there\u2019s no fee for the Basic Sale.":"There\u2019s only a participation fee for the Unlimited Sale: there\u2019s no fee for the Basic Sale.","The fee will start at 1%.":"The fee will start at 1%.","The 1% participation fee decreases in cliffs, based on the percentage of overflow from the \u201cUnlimited\u201d portion of the sale.":"The 1% participation fee decreases in cliffs, based on the percentage of overflow from the \u201cUnlimited\u201d portion of the sale.","Where does the participation fee go?":"Where does the participation fee go?","We burn it. The CAKE-BNB LP tokens from the participation fee will be decomposed. We will then use the BNB portion to market buy the CAKE equivalent, and finally throw all of the CAKE into the weekly token burn.":"We burn it. The MGT-BNB LP tokens from the participation fee will be decomposed. We will then use the BNB portion to market buy the MGT equivalent, and finally throw all of the MGT into the weekly token burn.","How can I get an achievement for participating in the IFO?":"How can I get an achievement for participating in the IFO?","You need to contribute a minimum of about 10 USD worth of CAKE-BNB LP Tokens to either sale.":"You need to contribute a minimum of about 10 USD worth of MGT-BNB LP Tokens to either sale.","You can contribute to one or both, it doesn\u2019t matter. Only your overall contribution is counted for the achievement.":"You can contribute to one or both, it doesn\u2019t matter. Only your overall contribution is counted for the achievement.","The Lottery Is Changing!":"The Lottery Is Changing!","Come back soon!":"Come back soon!","Staked (compounding)":"Staked (compounding)","Contract Enabled":"Contract Enabled","You can now stake in the %symbol% vault!":"You can now stake in the %symbol% vault!","You can now stake in the %symbol% pool!":"You can now stake in the %symbol% pool!","Please try again. Confirm the transaction and make sure you are paying enough gas!":"Please try again. Confirm the transaction and make sure you are paying enough gas!","Start earning":"Start earning","Recent CAKE profit":"Recent MGT profit","Unstaked!":"Unstaked!","Unstaked":"Unstaked","Staked!":"Staked!","Your funds have been staked in the pool":"Your funds have been staked in the pool","Your earnings have also been harvested to your wallet":"Your earnings have also been harvested to your wallet","%error% - Please try again.":"%error% - Please try again.","Stake in Pool":"Stake in Pool","Balance: %balance%":"Balance: %balance%","%day%d : %hour%h : %minute%m":"%day%d : %hour%h : %minute%m","%day%d %hour%h %minute%m":"%day%d %hour%h %minute%m","Subtracted automatically from each yield harvest and burned.":"Subtracted automatically from each yield harvest and burned.","Blocks":"Blocks","Add to Metamask":"Add to Metamask","Compounded":"Compounded","Canceled":"Canceled","Please try again and confirm the transaction.":"Please try again and confirm the transaction.","Harvested":"Harvested","Close Window":"Close Window","Insufficient %symbol% balance":"Insufficient %symbol% balance","You\u2019ll need %symbol% to stake in this pool!":"You\u2019ll need %symbol% to stake in this pool!","Buy some %symbol%, or make sure your %symbol% isn\u2019t in another pool or LP.":"Buy some %symbol%, or make sure your %symbol% isn\u2019t in another pool or LP.","Buy":"Buy","Locate Assets":"Locate Assets","%symbol% required":"%symbol% required","Your %symbol% earnings have also been harvested to your wallet!":"Your %symbol% earnings have also been harvested to your wallet!","Your %symbol% funds have been staked in the pool!":"Your %symbol% funds have been staked in the pool!","Max stake for this pool: %amount% %token%":"Max stake for this pool: %amount% %token%","Maximum total stake: %amount% %token%":"Maximum total stake: %amount% %token%","APY includes compounding, APR doesn\u2019t. This pool\u2019s CAKE is compounded automatically, so we show APY.":"APY includes compounding, APR doesn\u2019t. This pool\u2019s MGT is compounded automatically, so we show APY.","This pool\u2019s rewards aren\u2019t compounded automatically, so we show APR":"This pool\u2019s rewards aren\u2019t compounded automatically, so we show APR","Auto":"Auto","Manual":"Manual","Earn CAKE, stake CAKE":"Earn MGT, stake MGT","This bounty is given as a reward for providing a service to other users.":"This bounty is given as a reward for providing a service to other users.","Whenever you successfully claim the bounty, you\u2019re also helping out by activating the Auto CAKE Pool\u2019s compounding function for everyone.":"Whenever you successfully claim the bounty, you\u2019re also helping out by activating the Auto MGT Pool\u2019s compounding function for everyone.","Auto-Compound Bounty: %fee%% of all Auto CAKE pool users pending yield":"Auto-Compound Bounty: %fee%% of all Auto MGT pool users pending yield","Bounty collected!":"Bounty collected!","CAKE bounty has been sent to your wallet.":"MGT bounty has been sent to your wallet.","Could not be collected":"Could not be collected","There may be an issue with your transaction, or another user claimed the bounty first.":"There may be an issue with your transaction, or another user claimed the bounty first.","Claim Bounty":"Claim Bounty","You\u2019ll claim":"You\u2019ll claim","Pool total pending yield":"Pool total pending yield","Bounty":"Bounty","What\u2019s this?":"What\u2019s this?","Help":"Help","Syrup Pools":"Syrup Pools","Best round: #%roundId%":"Best round: #%roundId%","View Reclaimed & Won":"View Reclaimed & Won","This round was automatically canceled due to an error. If you entered a position, please reclaim your funds below.":"This round was automatically canceled due to an error. If you entered a position, please reclaim your funds below.","Round History":"Round History","Your History":"Your History","Filter":"Filter","Starting Soon":"Starting Soon","Live Now":"Live Now","Reclaim":"Reclaim","This page can\u2019t be displayed right now due to an error. Please check back soon.":"This page can\u2019t be displayed right now due to an error. Please check back soon.","Round Canceled":"Round Canceled","Learn More":"Learn More","Payout":"Payout","%position% position entered":"%position% position entered","Enter UP":"Enter UP","Enter DOWN":"Enter DOWN","An error occurred, unable to enter your position":"An error occurred, unable to enter your position","Set Position":"Set Position","Insufficient BNB balance":"Insufficient BNB balance","A minimum amount of %num% %token% is required":"A minimum amount of %num% %token% is required","Enter an amount":"Enter an amount","You won\u2019t be able to remove or change your position once you enter it.":"You won\u2019t be able to remove or change your position once you enter it.","Prize Pool":"Prize Pool","Winnings collected!":"Winnings collected!","Your prizes have been sent to your wallet":"Your prizes have been sent to your wallet","Collecting":"Collecting","Closing":"Closing","Position reclaimed!":"Position reclaimed!","Reclaim Position":"Reclaim Position","This Product is in beta.":"This Product is in beta.","I understand that I am using this product at my own risk. Any losses incurred due to my actions are my own responsibility.":"I understand that I am using this product at my own risk. Any losses incurred due to my actions are my own responsibility.","I understand that this product is still in beta. I am participating at my own risk":"I understand that this product is still in beta. I am participating at my own risk","Continue":"Continue","Points Collected!":"Points Collected!","%num% points":"%num% points","Cost to update:":"Cost to update:","Cost to reactivate:":"Cost to reactivate:","Profile Updated!":"Profile Updated!","Choose a new Collectible to use as your profile pic.":"Choose a new Collectible to use as your profile pic.","Sorry! You don\u2019t have any eligible Collectibles in your wallet to use!":"Sorry! You don\u2019t have any eligible Collectibles in your wallet to use!","Make sure you have a Pancake Collectible in your wallet and try again!":"Make sure you have a MGT Collectible in your wallet and try again!","Edit Profile":"Edit Profile","Change Profile Pic":"Change Profile Pic","Remove Profile Pic":"Remove Profile Pic","Profile Paused!":"Profile Paused!","This will suspend your profile and send your Collectible back to your wallet":"This will suspend your profile and send your Collectible back to your wallet","While your profile is suspended, you won\'t be able to earn points, but your achievements and points will stay associated with your profile":"While your profile is suspended, you won\'t be able to earn points, but your achievements and points will stay associated with your profile","Cost to reactivate in the future: %cost% CAKE":"Cost to reactivate in the future: %cost% MGT","%minimum% CAKE required to change profile pic":"%minimum% MGT required to change profile pic","Reactivate Profile":"Reactivate Profile","No achievements yet!":"No achievements yet!","Claim your Gift!":"Claim your Gift!","Thank you for being a day-one user of Pancake Profiles!":"Thank you for being a day-one user of MGT Profiles!","If you haven\'t already noticed, we made a mistake and the starter bunny you chose got mixed up and changed into another bunny. Oops!":"If you haven\'t already noticed, we made a mistake and the starter bunny you chose got mixed up and changed into another bunny. Oops!","To make it up to you, we\u2019ll refund you the full 4 CAKE it cost to make your bunny.":"To make it up to you, we\u2019ll refund you the full 4 MGT it cost to make your bunny.","We\u2019re also preparing an all-new collectible for you to claim (for free!) in the near future.":"We\u2019re also preparing an all-new collectible for you to claim (for free!) in the near future.","Once you claim the refund, you can make another account with another wallet, mint a new bunny, and send it to your main account via the NFT page.":"Once you claim the refund, you can make another account with another wallet, mint a new bunny, and send it to your main account via the NFT page.","Claim Your CAKE":"Claim Your MGT","Pancake Collectibles":"MGT Collectibles","Pancake Collectibles are special ERC-721 NFTs that can be used on the PancakeSwap platform.":"MGT Collectibles are special ERC-721 NFTs that can be used on the MasterMind Games platform.","NFTs in this user\u2019s wallet that aren\u2019t approved Pancake Collectibles won\u2019t be shown here.":"NFTs in this user\u2019s wallet that aren\u2019t approved MGT Collectibles won\u2019t be shown here.","No NFTs Found":"No NFTs Found","See all approved Pancake Collectibles":"See all approved MGT Collectibles","Coming Soon!":"Coming Soon!","Profile created!":"Profile created!","Submitting NFT to contract and confirming User Name and Team.":"Submitting NFT to contract and confirming User Name and Team.","Cost":"Cost","Your Profile":"Your Profile","Check your stats and collect achievements":"Check your stats and collect achievements","You\u2019ve got a gift to claim!":"You\u2019ve got a gift to claim!","Show off your stats and collectibles with your unique profile":"Show off your stats and collectibles with your unique profile","Total cost: 1.5 CAKE":"Total cost: 1.5 MGT","Cost: %num% CAKE":"Cost: %num% MGT","You can change your profile pic later if you get another approved Pancake Collectible.":"You can change your profile pic later if you get another approved MGT Collectible.","Every profile starts by making a \u201cstarter\u201d collectible (NFT).":"Every profile starts by making a \u201cstarter\u201d collectible (NFT).","We couldn\u2019t find any Pancake Collectibles in your wallet.":"We couldn\u2019t find any MGT Collectibles in your wallet.","You need a Pancake Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\u2019ll need to get it back or acquire a new one somehow. You can\u2019t make a new starter with this wallet address.":"You need a MGT Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\u2019ll need to get it back or acquire a new one somehow. You can\u2019t make a new starter with this wallet address.","The collectible you\'ve chosen will be locked in a smart contract while it\u2019s being used as your profile picture. Don\'t worry - you\'ll be able to get it back at any time.":"The collectible you\'ve chosen will be locked in a smart contract while it\u2019s being used as your profile picture. Don\'t worry - you\'ll be able to get it back at any time.","It won\u2019t be possible to undo the choice you make for the foreseeable future!":"It won\u2019t be possible to undo the choice you make for the foreseeable future!","There\u2019s currently no big difference between teams, and no benefit of joining one team over another for now. So pick whichever one you like!":"There\u2019s currently no big difference between teams, and no benefit of joining one team over another for now. So pick whichever one you like!","Your name must be at least 3 and at most 15 standard letters and numbers long. You can\u2019t change this once you click Confirm.":"Your name must be at least 3 and at most 15 standard letters and numbers long. You can\u2019t change this once you click Confirm.","Unable to verify username":"Unable to verify username","Created %dateCreated% ago":"Created %dateCreated% ago","Paused":"Paused","April":"April","Easter Battle":"Easter Battle","$200,000 in Prizes!":"$200,000 in Prizes!","Compete with other teams to win CAKE, collectible NFTs, achievements & more!":"Compete with other teams to win MGT, collectible NFTs, achievements & more!","Now Live!":"Now Live!","Calculating prizes":"Calculating prizes","I want to Battle!":"I want to Battle!","Trade Now":"Trade Now","Claim period over":"Claim period over","Prizes Claimed!":"Prizes Claimed!","Nothing to claim":"Nothing to claim","Registered!":"Registered!","Congratulations! You won":"Congratulations! You won","Collectible NFT":"Collectible NFT","All prizes will be sent directly to your wallet and user account.":"All prizes will be sent directly to your wallet and user account.","How Can I Join?":"How Can I Join?","Set up your":"Set up your","Pancake Profile":"MGT Profile","then register for the competition by clicking \u201cI WANT TO BATTLE\u201d button above.":"then register for the competition by clicking \u201cI WANT TO BATTLE\u201d button above.","Battle Time":"Battle Time","Trade BNB/BUSD, CAKE/BNB, ETH/BNB and BTCB/BNB during the battle period to raise both your and your team\u2019s score. See the Rules section below for more.":"Trade BNB/BUSD, CAKE/BNB, ETH/BNB and BTCB/BNB during the battle period to raise both your and your team\u2019s score. See the Rules section below for more.","Prize Claim":"Prize Claim","Teams and traders will be ranked in the order of trading volume. Collect your prizes and celebrate!":"Teams and traders will be ranked in the order of trading volume. Collect your prizes and celebrate!","Registration starting April 5":"Registration starting April 5","Tier":"Tier","CAKE Prizes (Split)":"MGT Prizes (Split)","Gold":"Gold","Silver":"Silver","Bronze":"Bronze","Purple":"Purple","Teal":"Teal","#%team% Team":"#%team% Team","Prizes by Team":"Prizes by Team","Higher trading volume = higher rank!":"Higher trading volume = higher rank!","Prizes to be distributed in CAKE and shared by all members of a tier. CAKE price in USD to be determined on the day of distribution. Details below.":"Prizes to be distributed in MGT and shared by all members of a tier. MGT price in USD to be determined on the day of distribution. Details below.","Every eligible participant will win prizes at the end of the competition.":"Every eligible participant will win prizes at the end of the competition.","The better your team performs, the better prizes you will get!":"The better your team performs, the better prizes you will get!","The final winning team will be the team with the highest total combined volume of their top 500 members at the end of the competition period.":"The final winning team will be the team with the highest total combined volume of their top 500 members at the end of the competition period.","Make a profile!":"Make a profile!","It looks like you\u2019ve disabled your account by removing your Pancake Collectible (NFT) profile picture.":"It looks like you\u2019ve disabled your account by removing your MGT Collectible (NFT) profile picture.","Reactivate your profile!":"Reactivate your profile!","You need to reactivate your profile by replacing your profile picture in order to join the competition.":"You need to reactivate your profile by replacing your profile picture in order to join the competition.","Go to my profile":"Go to my profile","You have registered for the competition!":"You have registered for the competition!","Registering for the competition will make your wallet address publicly visible on the leaderboard.":"Registering for the competition will make your wallet address publicly visible on the leaderboard.","This decision cannot be reversed.":"This decision cannot be reversed.","I understand that my address may be displayed publicly throughout the competition.":"I understand that my address may be displayed publicly throughout the competition.","Eligible trading pairs":"Eligible trading pairs","Only trades on BNB/BUSD, CAKE/BNB, ETH/BNB and BTCB/BNB pairs will be included in volume calculations.":"Only trades on BNB/BUSD, MGT/BNB, ETH/BNB and BTCB/BNB pairs will be included in volume calculations.","Calculating team ranks and winners":"Calculating team ranks and winners","Team ranks are calculated by the total combined volume of the top 500 members of each respective team.":"Team ranks are calculated by the total combined volume of the top 500 members of each respective team.","Prize distribution":"Prize distribution","Prizes to be distributed in CAKE and shared by all members of each respective tier as per the Prizes section above.":"Prizes to be distributed in MGT and shared by all members of each respective tier as per the Prizes section above.","CAKE prizes will be distributed as per the CAKE/BUSD price on the day of distribution. Every eligible participant will win prizes at the end of the competition.":"MGT prizes will be distributed as per the MGT/BUSD price on the day of distribution. Every eligible participant will win prizes at the end of the competition.","Every participant will win at least one prize at the end of the competition":"Every participant will win at least one prize at the end of the competition","Fine print":"Fine print","In the event of a disagreement concerning the final winning team or rank, PancakeSwap will have the final say.":"In the event of a disagreement concerning the final winning team or rank, MasterMind Games will have the final say.","PancakeSwap can and will disqualify any team or specific members that are proven to have taken malicious action or attempt to \u201ccheat\u201d in any way.":"MasterMind Games can and will disqualify any team or specific members that are proven to have taken malicious action or attempt to \u201ccheat\u201d in any way.","Can I join the battle after it starts?":"Can I join the battle after it starts?","Sorry, no. You need to register during the registration period, before the start of the event.":"Sorry, no. You need to register during the registration period, before the start of the event.","How do I know if I successfully registered?":"How do I know if I successfully registered?","At the top of the page, the text in the button \u201cI Want to Battle\u201d will change to \u201cRegistered\u201d.":"At the top of the page, the text in the button \u201cI Want to Battle\u201d will change to \u201cRegistered\u201d.","How can I see my current rank?":"How can I see my current rank?","Check Your Score section on the event page. You\u2019ll need to connect your wallet, of course.":"Check Your Score section on the event page. You\u2019ll need to connect your wallet, of course.","How do I claim my prize(s)?":"How do I claim my prize(s)?","After the battle ends, visit the event page and click the \u201cClaim Prizes\u201d button in the top section or in \u201cYour Score\u201d section. Once you claim your prizes successfully, the button text will change to \u201cPrizes Claimed\u201d.":"After the battle ends, visit the event page and click the \u201cClaim Prizes\u201d button in the top section or in \u201cYour Score\u201d section. Once you claim your prizes successfully, the button text will change to \u201cPrizes Claimed\u201d.","Trade to increase your rank":"Trade to increase your rank","Eligible pairs: BNB/BUSD, CAKE/BNB, ETH/BNB and BTCB/BNB":"Eligible pairs: BNB/BUSD, MGT/BNB, ETH/BNB and BTCB/BNB","Play as a team":"Play as a team","The higher your team\u2019s rank, the better your prizes":"The higher your team\u2019s rank, the better your prizes","Top Traders":"Top Traders","Since start of the competition":"Since start of the competition","Show More":"Show More","Share Score":"Share Score","Your tier: gold":"Your tier: gold","Love, The Chefs x":"Love, The Chefs x","HECK YEAH!":"HECK YEAH!","Next tier":"Next tier","to become #%rank% in team":"to become #%rank% in team","#%global% Overall":"#%global% Overall","CAKE Prizes":"MGT Prizes","Share Your Score":"Share Your Score","Brag to your friends and annoy your rivals with your custom scorecard!":"Brag to your friends and annoy your rivals with your custom scorecard!","Download Image":"Download Image","Screenshot or press & hold the image to share!":"Screenshot or press & hold the image to share!","Block %num%":"Block %num%","%max% %symbol% Available":"%max% %symbol% Available","Profile Pic":"Profile Pic","Transfer":"Transfer","Congratulations!":"Congratulations!","You won a collectible!":"You won a collectible!","Claim now":"Claim now","NFT in wallet":"NFT in wallet","Trade in your NFT for CAKE, or just keep it for your collection.":"Trade in your NFT for MGT, or just keep it for your collection.","No NFTs to claim":"No NFTs to claim","You have no NFTs to claim at this time, but you can still see the NFTs in this series below.":"You have no NFTs to claim at this time, but you can still see the NFTs in this series below.","Please wait...":"Please wait...","The claiming period hasn\u2019t started yet. Check back soon.":"The claiming period hasn\u2019t started yet. Check back soon.","Please enter a valid wallet address":"Please enter a valid wallet address","Unable to transfer NFT":"Unable to transfer NFT","Transfer NFT":"Transfer NFT","Transferring":"Transferring","Receiving address":"Receiving address","Paste address":"Paste address","Could not retrieve CAKE costs for profile":"Could not retrieve MGT costs for profile","An error occurred approving transaction":"An error occurred approving transaction","Provider Error":"Provider Error","No provider was found":"No provider was found","Authorization Error":"Authorization Error","Please authorize to access your account":"Please authorize to access your account","Unable to find connector":"Unable to find connector","The connector config is wrong":"The connector config is wrong","You have contributed %amount% CAKE-BNB LP tokens to this IFO!":"You have contributed %amount% MGT-BNB LP tokens to this IFO!","You\u2019ll need CAKE-BNB LP tokens to participate in the IFO!":"You\u2019ll need MGT-BNB LP tokens to participate in the IFO!","Your %symbol% committed":"Your %symbol% committed","Your %symbol% RECLAIMED":"Your %symbol% RECLAIMED","Your %symbol% TO RECLAIM":"Your %symbol% TO RECLAIM","%symbol% received":"%symbol% received","%symbol% to receive":"%symbol% to receive","Stories were told, and songs were sung about Chef Mixie\u2019s pancakes and her big Syrup gun.":"Stories were told, and songs were sung about Chef Mixie\u2019s MGTs and her big Syrup gun.","Eggscellent! Celebrating Syrup Storm winning the Easter Battle!":"Eggscellent! Celebrating Syrup Storm winning the Easter Battle!","Melting Easter eggs and melting hearts!":"Melting Easter eggs and melting hearts!","Watch out for Flipsie\u2019s spatula smash!":"Watch out for Flipsie\u2019s spatula smash!","Do you like chocolate with your syrup? Go long!":"Do you like chocolate with your syrup? Go long!","Happy Niu Year! This bunny\u2019s excited for the year of the bull (market!)":"Happy Niu Year! This bunny\u2019s excited for the year of the bull (market!)","Oopsie daisy! Hiccup\'s had a bit of an accident. Poor little fella.":"Oopsie daisy! Hiccup\'s had a bit of an accident. Poor little fella.","Aww, looks like eating pancakes all day is not easy. Sweet dreams!":"Aww, looks like eating pancakes all day is not easy. Sweet dreams!","Sunny is always cheerful when there are pancakes around. Smile!":"Sunny is always cheerful when there are pancakes around. Smile!","Don\'t let that dopey smile deceive you... Churro\'s a master CAKE chef!":"Don\'t let that dopey smile deceive you... Churro\'s a master MGT chef!","Nommm... Oh hi, I\'m just meditating on the meaning of CAKE.":"Nommm... Oh hi, I\'m just meditating on the meaning of MGT.","Three guesses what\'s put that twinkle in those eyes! (Hint: it\'s CAKE)":"Three guesses what\'s put that twinkle in those eyes! (Hint: it\'s MGT)","These bunnies love nothing more than swapping pancakes. Especially on BSC.":"These bunnies love nothing more than swapping MGT. Especially on BSC.","It\'s raining syrup on this bunny, but he doesn\'t seem to mind. Can you blame him?":"It\'s raining syrup on this bunny, but he doesn\'t seem to mind. Can you blame him?","These bunnies like their pancakes with blueberries. What\'s your favorite topping?":"These bunnies like their pancakes with blueberries. What\'s your favorite topping?","Love makes the world go \'round... but so do pancakes. And these bunnies know it.":"Love makes the world go \'round... but so do pancakes. And these bunnies know it.","It\u2019s sparkling syrup, pancakes, and even lottery tickets! This bunny really loves it.":"It\u2019s sparkling syrup, pancakes, and even lottery tickets! This bunny really loves it.","The storm\'s a-comin! Watch out! These bulls are stampeding in a syrupy surge!":"The storm\'s a-comin! Watch out! These bulls are stampeding in a syrupy surge!","The flippening is coming. Don\'t get in these bunnies\' way, or you\'ll get flipped, too!":"The flippening is coming. Don\'t get in these bunnies\' way, or you\'ll get flipped, too!","Can you stand the heat? Stay out of the kitchen or you might get burned to a crisp!":"Can you stand the heat? Stay out of the kitchen or you might get burned to a crisp!","%ratio%% of total sale":"%ratio%% of total sale","Your %symbol% earnings have been sent to your wallet!":"Your %symbol% earnings have been sent to your wallet!","Your %symbol% earnings have been re-invested into the pool!":"Your %symbol% earnings have been re-invested into the pool!","Stake %symbol%":"Stake %symbol%","You must harvest and compound your earnings from this pool manually.":"You must harvest and compound your earnings from this pool manually.","Register":"Register","Contribute %symbol%":"Contribute %symbol%","Volume":"Volume","%symbol% per $1,000":"%symbol% per $1,000","Prediction (BETA)":"Prediction (BETA)","Collectibles":"Collectibles","Team Battle":"Team Battle","Teams & Profile":"Teams & Profile","Leaderboard":"Leaderboard","Tokens":"Tokens","Contact":"Contact","Merch":"Merch","LP Migration":"LP Migration","V1 Liquidity (Old)":"V1 Liquidity (Old)","Claim Collectible":"Claim Collectible","The higher your team\u2019s rank, the better your prizes!":"The higher your team\u2019s rank, the better your prizes!","Get Ready":"Get Ready","Earn up to %highestApr% APR in Farms":"Earn up to %highestApr% APR in Farms","Earn %assets% in Pools":"Earn %assets% in Pools","Activate PancakeSwap Profile to take part in next IFO\u2018s!":"Activate MGT  Launchpad Profile to take part in next IFO\u2018s!","Trading Battle":"Trading Battle","Prediction":"Prediction","Initial Farm Offering":"Initial Farm Offering","An error occurred confirming transaction":"An error occurred confirming transaction","Successfully Enabled!":"Successfully Enabled!","You can now participate in the %symbol% IFO.":"You can now participate in the %symbol% IFO.","Team Ranks":"Team Ranks","Prizes":"Prizes","Rules":"Rules","Entry":"Entry","Enable pool":"Enable pool","Start staking":"Start staking","Search Pools":"Search Pools","Ends in":"Ends in","Starts in":"Starts in","Total amount of %symbol% staked in this pool":"Total amount of %symbol% staked in this pool","These pools are no longer distributing rewards. Please unstake your tokens.":"These pools are no longer distributing rewards. Please unstake your tokens.","Max. stake per user":"Max. stake per user","You have claimed your rewards!":"You have claimed your rewards!","Already Collected":"Already Collected","Predictions Now Live":"Predictions Now Live","Beta Version":"Beta Version","Over %amount% in BNB won so far":"Over %amount% in BNB won so far","Try Now":"Try Now","New":"New","LP rewards: 0.17% trading fees, distributed proportionally among LP token holders.":"LP rewards: 0.17% trading fees, distributed proportionally among LP token holders.","CAKE + Fees":"MGT + Fees","Prediction Markets":"Prediction Markets","Now Live":"Now Live","in Beta":"in Beta","Ended %date%":"Ended %date%","Starts %date%":"Starts %date%","Ends %date%":"Ends %date%","Closed":"Closed","Vote Now":"Vote Now","Soon":"Soon","No proposals found":"No proposals found","Creator":"Creator","Proposals":"Proposals","Make a Proposal":"Make a Proposal","Have your say in the future of the PancakeSwap Ecosystem":"Have your say in the future of the MGT  Launchpad Ecosystem","Got a suggestion?":"Got a suggestion?","Community proposals are a great way to see how the community feels about your ideas.":"Community proposals are a great way to see how the community feels about your ideas.","They won\'t necessarily be implemented if the community votes successful, but suggestions with a lot of community support may be made into Core proposals.":"They won\'t necessarily be implemented if the community votes successful, but suggestions with a lot of community support may be made into Core proposals.","%field% is required":"%field% is required","Please create a minimum of %num% choices":"Please create a minimum of %num% choices","Choices must not be empty":"Choices must not be empty","Please select a valid date":"Please select a valid date","Please select a valid time":"Please select a valid time","End date must be after the start date":"End date must be after the start date","Invalid snapshot":"Invalid snapshot","Proposal created!":"Proposal created!","Voted":"Voted","Time":"Time","Input choice text":"Input choice text","Start Time":"Start Time","Back to Vote Overview":"Back to Vote Overview","Voting For":"Voting For","Your Voting Power":"Your Voting Power","Confirm Vote":"Confirm Vote","Add Choice":"Add Choice","Title":"Title","Content":"Content","End Date":"End Date","Start Date":"Start Date","Actions":"Actions","End Time":"End Time","Publish":"Publish","No votes found":"No votes found","Vote Weight":"Vote Weight","Decision":"Decision","Voter":"Voter","Votes (%count%)":"Votes (%count%)","Snapshot":"Snapshot","Choices":"Choices","Unable to sign payload":"Unable to sign payload","Identifier":"Identifier","Current Results":"Current Results","Vote cast!":"Vote cast!","Are you sure you want to vote for the above choice? This action cannot be undone.":"Are you sure you want to vote for the above choice? This action cannot be undone.","Tip: write in Markdown!":"Tip: write in Markdown!","Cast your vote":"Cast your vote","Preview":"Preview","%total% Votes":"%total% Votes","Cast Vote":"Cast Vote","See All":"See All","Your voting power is determined by the amount of CAKE you held at the block detailed below. CAKE held in other places does not contribute to your voting power.":"Your voting power is determined by the amount of MGT you held at the block detailed below. MGT held in other places does not contribute to your voting power.","Your Cake Held Now":"Your MGT Held Now","Wallet":"Wallet","Manual CAKE Pool":"Manual MGT Pool","Auto CAKE Pool":"Auto MGT Pool","CAKE BNB LP":"MGT BNB LP","Other Syrup Pools":"Other Syrup Pools","Voting Power":"Voting Power","You need at least %count% voting power to publish a proposal.":"You need at least %count% voting power to publish a proposal.","Check voting power":"Check voting power","Amount to collect":"Amount to collect","Your winnings":"Your winnings","Includes your original position and your winnings, minus the %fee% fee.":"Includes your original position and your winnings, minus the %fee% fee.","Your funds have been staked in the farm":"Your funds have been staked in the farm","Base APR (CAKE yield only)":"Base APR (MGT yield only)","View/Edit Numbers":"View/Edit Numbers","Edit Numbers":"Edit Numbers","Total cost":"Total cost","Numbers are randomized, with no duplicates among your tickets. Tap a number to edit it. Available digits: 0-9":"Numbers are randomized, with no duplicates among your tickets. Tap a number to edit it. Available digits: 0-9","Randomize":"Randomize","Confirm and buy":"Confirm and buy","Go back":"Go back","Duplicate":"Duplicate","Get your tickets now!":"Get your tickets now!","Finished Rounds":"Finished Rounds","Only showing data for Lottery V2":"Only showing data for Lottery V2","Connect your wallet":"Connect your wallet","to check if you\'ve won":"to check if you\'ve won","No prizes to collect":"No prizes to collect","Better luck next time!":"Better luck next time!","Why not play again":"Why not play again","Are you a winner?":"Are you a winner?","Checking":"Checking","Check Now":"Check Now","On sale soon!":"On sale soon!","Date":"Date","Your Tickets":"Your Tickets","in prizes!":"in prizes!","Tickets on sale soon":"Tickets on sale soon","The PancakeSwap Lottery":"The MGT  Launchpad Lottery","All History":"All History","Winning Number":"Winning Number","tickets":"tickets","Prize pot":"Prize pot","Total players this round":"Total players this round","Draw":"Draw","Next Draw":"Next Draw","Your tickets":"Your tickets","Match the winning number in the same order to share prizes.":"Match the winning number in the same order to share prizes.","Current prizes up for grabs:":"Current prizes up for grabs:","Burn":"Burn","Match all %numberMatch%":"Match all %numberMatch%","Match first %numberMatch%":"Match first %numberMatch%","Matched first":"Matched first","Drawn":"Drawn","Connect your wallet to check your history":"Connect your wallet to check your history","Buy tickets for the next round!":"Buy tickets for the next round!","No lottery history found":"No lottery history found","Contract enabled - you can now purchase tickets":"Contract enabled - you can now purchase tickets","Lottery tickets purchased!":"Lottery tickets purchased!","The maximum number of tickets you can buy in one transaction is %maxTickets%":"The maximum number of tickets you can buy in one transaction is %maxTickets%","Bulk discount":"Bulk discount","Buy Instantly":"Buy Instantly","\\"Buy Instantly\\" chooses random numbers, with no duplicates among your tickets. Prices are set before each round starts, equal to $5 at that time. Purchases are final.":"\\"Buy Instantly\\" chooses random numbers, with no duplicates among your tickets. Prices are set before each round starts, equal to $5 at that time. Purchases are final.","Prizes Collected!":"Prizes Collected!","Your CAKE prizes for round %lotteryId% have been sent to your wallet":"Your MGT prizes for round %lotteryId% have been sent to your wallet","Claim %claimNum% of %claimTotal% for round %lotteryId% was successful. Please confirm the next transaction":"Claim %claimNum% of %claimTotal% for round %lotteryId% was successful. Please confirm the next transaction","Claiming":"Claiming","Tickets must match the winning number in the exact same order, starting from the first digit.":"Tickets must match the winning number in the exact same order, starting from the first digit.","If the winning number is \u201c123456\u201d:":"If the winning number is \u201c123456\u201d:","\u201c120000\u201d matches the first 2 digits.":"\u201c120000\u201d matches the first 2 digits.","\u201c000006\u201d matches the last digit, but since the first five digits are wrong, it doesn\u2019t win any prizes.":"\u201c000006\u201d matches the last digit, but since the first five digits are wrong, it doesn\u2019t win any prizes.","Winning number":"Winning number","Total tickets":"Total tickets","Winning tickets":"Winning tickets","until the draw":"until the draw","Winners announced in":"Winners announced in","Tickets on sale in":"Tickets on sale in","to check if you\'ve won!":"to check if you\'ve won!","Why didn\'t I win?":"Why didn\'t I win?","How to Play":"How to Play","If the digits on your tickets match the winning numbers in the correct order, you win a portion of the prize pool.":"If the digits on your tickets match the winning numbers in the correct order, you win a portion of the prize pool.","Simple!":"Simple!","Prices are set when the round starts, equal to 5 USD in CAKE per ticket.":"Prices are set when the round starts, equal to 5 USD in MGT per ticket.","Wait for the Draw":"Wait for the Draw","There are two draws every day: one every 12 hours.":"There are two draws every day: one every 12 hours.","Check for Prizes":"Check for Prizes","Once the round\u2019s over, come back to the page and check to see if you\u2019ve won!":"Once the round\u2019s over, come back to the page and check to see if you\u2019ve won!","Step %number%":"Step %number%","Winning Criteria":"Winning Criteria","The digits on your ticket must match in the correct order to win.":"The digits on your ticket must match in the correct order to win.","Here\u2019s an example lottery draw, with two tickets, A and B.":"Here\u2019s an example lottery draw, with two tickets, A and B.","Ticket A: The first 3 digits and the last 2 digits match, but the 4th digit is wrong, so this ticket only wins a \u201cMatch first 3\u201d prize.":"Ticket A: The first 3 digits and the last 2 digits match, but the 4th digit is wrong, so this ticket only wins a \u201cMatch first 3\u201d prize.","A":"A","Ticket B: Even though the last 5 digits match, the first digit is wrong, so this ticket doesn\u2019t win a prize.":"Ticket B: Even though the last 5 digits match, the first digit is wrong, so this ticket doesn\u2019t win a prize.","B":"B","Prize Funds":"Prize Funds","The prizes for each lottery round come from three sources:":"The prizes for each lottery round come from three sources:","Ticket Purchases":"Ticket Purchases","100% of the CAKE paid by people buying tickets that round goes back into the prize pools.":"100% of the MGT paid by people buying tickets that round goes back into the prize pools.","Rollover Prizes":"Rollover Prizes","After every round, if nobody wins in one of the prize brackets, the unclaimed CAKE for that bracket rolls over into the next round and are redistributed among the prize pools.":"After every round, if nobody wins in one of the prize brackets, the unclaimed MGT for that bracket rolls over into the next round and are redistributed among the prize pools.","CAKE Injections":"MGT Injections","An average total of 35,000 CAKE from the treasury is added to lottery rounds over the course of a week. This CAKE is of course also included in rollovers! Read more in our guide to ":"An average total of 35,000 MGT from the treasury is added to lottery rounds over the course of a week. This MGT is of course also included in rollovers! Read more in our guide to ","CAKE Tokenomics":"MGT Tokenomics","Digits matched":"Digits matched","Prize pool allocation":"Prize pool allocation","Matches first %digits%":"Matches first %digits%","Matches all 6":"Matches all 6","Burn Pool":"Burn Pool","Still got questions?":"Still got questions?","Check our in-depth guide on":"Check our in-depth guide on","how to play the PancakeSwap lottery!":"how to play the MGT  Launchpad lottery!","Prize brackets don\u2019t \u2018stack\u2019: if you match the first 3 digits in order, you\u2019ll only win prizes from the \u2018Match 3\u2019 bracket, and not from \u2018Match 1\u2019 and \u2018Match 2\u2019.":"Prize brackets don\u2019t \u2018stack\u2019: if you match the first 3 digits in order, you\u2019ll only win prizes from the \u2018Match 3\u2019 bracket, and not from \u2018Match 1\u2019 and \u2018Match 2\u2019.","Coming soon!":"Coming soon!","Tickets":"Tickets","Edit numbers":"Edit numbers","each":"each","Collect Prizes":"Collect Prizes","You won":"You won","Calculating rewards":"Calculating rewards","Buying multiple tickets in a single transaction gives a discount. The discount increases in a linear way, up to the maximum of 100 tickets:":"Buying multiple tickets in a single transaction gives a discount. The discount increases in a linear way, up to the maximum of 100 tickets:","2 tickets: 0.05%":"2 tickets: 0.05%","50 tickets: 2.45%":"50 tickets: 2.45%","100 tickets: 4.95%":"100 tickets: 4.95%","You pay":"You pay","Lottery Now Live":"Lottery Now Live","Play Now":"Play Now","Over %amount% in Prizes!":"Over %amount% in Prizes!","Next Auction":"Next Auction","Auction Schedule":"Auction Schedule","%numHours% hours":"%numHours% hours","To be announced":"To be announced","Auction Leaderboard":"Auction Leaderboard","How does it work?":"How does it work?","Step 1: Submit application":"Step 1: Submit application","Projects can submit an application to sponsor a yield farm and/or pool on PancakeSwap via the ":"Projects can submit an application to sponsor a yield farm and/or pool on MGT  Launchpad via the ","Application Form":"Application Form","Step 2: Await whitelisting":"Step 2: Await whitelisting","The PancakeSwap team will try to respond within a week.":"The MGT  Launchpad team will try to respond within a week.","Community Farm qualifiers will be asked to provide the address of the wallet which you\u2019ll use for bidding CAKE in the auction.":"Community Farm qualifiers will be asked to provide the address of the wallet which you\u2019ll use for bidding MGT in the auction.","Core Farm/Pool qualifiers will receive further directions separately.":"Core Farm/Pool qualifiers will receive further directions separately.","Step 3: During the auction":"Step 3: During the auction","During the auction period, if you connect your project\u2019s whitelisted wallet to the Auction page, you\u2019ll see a \u201cPlace Bid\u201d button during when the auction is live.":"During the auction period, if you connect your project\u2019s whitelisted wallet to the Auction page, you\u2019ll see a \u201cPlace Bid\u201d button during when the auction is live.","You can then commit CAKE to bid during the auction, competing against other project for one of the available farms.":"You can then commit MGT to bid during the auction, competing against other project for one of the available farms.","Step 4: After the auction":"Step 4: After the auction","If your bid was not successful, you can reclaim your CAKE on this page.":"If your bid was not successful, you can reclaim your MGT on this page.","If your bid was successful, your farm will begin at the specified time. The CAKE you bid will not be returned to you and will be added to our weekly CAKE burn.":"If your bid was successful, your farm will begin at the specified time. The MGT you bid will not be returned to you and will be added to our weekly CAKE burn.","So long as you are whitelisted, you\u2019ll be able to participate in each new auction.":"So long as you are whitelisted, you\u2019ll be able to participate in each new auction.","If two or more projects bid the exact same CAKE amount and are contending for a spot in the winning bidders, their bids may be invalidated.":"If two or more projects bid the exact same MGT amount and are contending for a spot in the winning bidders, their bids may be invalidated.","Community Farm Auction":"Community Farm Auction","Each week, qualifying projects can bid CAKE for the right to host a 7-day Farm on PancakeSwap.":"Each week, qualifying projects can bid MGT for the right to host a 7-day Farm on MGT  Launchpad.","Apply for a Farm/Pool":"Apply for a Farm/Pool","Community Auctions":"Community Auctions","FAQs":"FAQs","Auction duration":"Auction duration","Terms & Conditions":"Terms & Conditions","in Prizes!":"in Prizes!","Output is estimated. If the price changes by more than %slippage%% your transaction will revert.":"Output is estimated. If the price changes by more than %slippage%% your transaction will revert.","Supplying %amountA% %symbolA% and %amountB% %symbolB%":"Supplying %amountA% %symbolA% and %amountB% %symbolB%","Removing %amountA% %symbolA% and %amountB% %symbolB%":"Removing %amountA% %symbolA% and %amountB% %symbolB%","Swapping %amountA% %symbolA% for %amountB% %symbolB%":"Swapping %amountA% %symbolA% for %amountB% %symbolB%","Add Liquidity":"Add Liquidity","Add liquidity to receive LP tokens":"Add liquidity to receive LP tokens","Liquidity providers earn a 0.17% trading fee on all trades made for that token pair, proportional to their share of the liquidity pool.":"Liquidity providers earn a 0.17% trading fee on all trades made for that token pair, proportional to their share of the liquidity pool.","You are creating a pool":"You are creating a pool","You are the first liquidity provider.":"You are the first liquidity provider.","The ratio of tokens you add will set the price of this pool.":"The ratio of tokens you add will set the price of this pool.","Once you are happy with the rate click supply to review.":"Once you are happy with the rate click supply to review.","Initial prices and pool share":"Initial prices and pool share","Prices and pool share":"Prices and pool share","Unsupported Asset":"Unsupported Asset","Enabling %asset%":"Enabling %asset%","Enable %asset%":"Enable %asset%","Share of Pool":"Share of Pool","%assetA% per %assetB%":"%assetA% per %assetB%","%asset% Deposited":"%asset% Deposited","Rates":"Rates","Create Pool & Supply":"Create Pool & Supply","Confirm Supply":"Confirm Supply","Confirm Swap":"Confirm Swap","Connect to a wallet to view your liquidity.":"Connect to a wallet to view your liquidity.","Connect to a wallet to find pools":"Connect to a wallet to find pools","Select a token to find your liquidity.":"Select a token to find your liquidity.","No liquidity found.":"No liquidity found.","Don\'t see a pool you joined?":"Don\'t see a pool you joined?","Find other LP tokens":"Find other LP tokens","Import Pool":"Import Pool","Import an existing pool":"Import an existing pool","Select a Token":"Select a Token","Pool Found!":"Pool Found!","No pool found.":"No pool found.","Create pool.":"Create pool.","Manage this pool.":"Manage this pool.","Invalid pair.":"Invalid pair.","You don\u2019t have liquidity in this pool yet.":"You don\u2019t have liquidity in this pool yet.","%assetA%/%assetB% Burned":"%assetA%/%assetB% Burned","Price":"Price","Prices":"Prices","Remove %assetA%-%assetB% liquidity":"Remove %assetA%-%assetB% liquidity","Amount":"Amount","Simple":"Simple","Detailed":"Detailed","Receive WBNB":"Receive WBNB","Receive BNB":"Receive BNB","Remove":"Remove","Input":"Input","Output":"Output","Trade tokens in an instant":"Trade tokens in an instant","From (estimated)":"From (estimated)","From":"From","To (estimated)":"To (estimated)","To":"To","+ Add a send (optional)":"+ Add a send (optional)","- Remove send":"- Remove send","Slippage Tolerance":"Slippage Tolerance","Insufficient liquidity for this trade.":"Insufficient liquidity for this trade.","Try enabling multi-hop trades.":"Try enabling multi-hop trades.","Price Impact High":"Price Impact High","Swap":"Swap","Swap Anyway":"Swap Anyway","Recent Transactions":"Recent Transactions","clear all":"clear all","Clear all":"Clear all","No recent transactions":"No recent transactions","Are you sure?":"Are you sure?","Expert mode turns off the \'Confirm\' transaction prompt, and allows high slippage trades that often result in bad rates and lost funds.":"Expert mode turns off the \'Confirm\' transaction prompt, and allows high slippage trades that often result in bad rates and lost funds.","Only use this mode if you know what you\u2019re doing.":"Only use this mode if you know what you\u2019re doing.","Turn On Expert Mode":"Turn On Expert Mode","Disable Multihops":"Disable Multihops","Restricts swaps to direct pairs only.":"Restricts swaps to direct pairs only.","Enter a valid slippage percentage":"Enter a valid slippage percentage","Your transaction may fail":"Your transaction may fail","Your transaction may be frontrun":"Your transaction may be frontrun","Your transaction will revert if it is pending for more than this long.":"Your transaction will revert if it is pending for more than this long.","minutes":"minutes","Token Amount":"Token Amount","LP tokens in your wallet":"LP tokens in your wallet","Pooled %asset%":"Pooled %asset%","By adding liquidity you\'ll earn 0.17% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.":"By adding liquidity you\'ll earn 0.17% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.","Common bases":"Common bases","These tokens are commonly paired with other tokens.":"These tokens are commonly paired with other tokens.","Expanded results from inactive Token Lists":"Expanded results from inactive Token Lists","Tokens from inactive lists. Import specific tokens below or click \'Manage\' to activate more lists.":"Tokens from inactive lists. Import specific tokens below or click \'Manage\' to activate more lists.","No results found.":"No results found.","Manage":"Manage","Manage Tokens":"Manage Tokens","Import Tokens":"Import Tokens","Import List":"Import List","Import at your own risk":"Import at your own risk","By adding this list you are implicitly trusting that the data is correct. Anyone can create a list, including creating fake versions of existing lists and lists that claim to represent projects that do not have one.":"By adding this list you are implicitly trusting that the data is correct. Anyone can create a list, including creating fake versions of existing lists and lists that claim to represent projects that do not have one.","If you purchase a token from this list, you may not be able to sell it back.":"If you purchase a token from this list, you may not be able to sell it back.","Import":"Import","via":"via","Anyone can create a BEP20 token on BSC with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.":"Anyone can create a BEP20 token on BSC with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.","If you purchase an arbitrary token, you may be unable to sell it back.":"If you purchase an arbitrary token, you may be unable to sell it back.","Unknown Source":"Unknown Source","Lists":"Lists","See":"See","Update list":"Update list","https:// or ipfs:// or ENS name":"https:// or ipfs:// or ENS name","Loaded":"Loaded","Loading":"Loading","Enter valid token address":"Enter valid token address","Custom Token":"Custom Token","Custom Tokens":"Custom Tokens","Unknown Error":"Unknown Error","Select a currency":"Select a currency","Search name or paste address":"Search name or paste address","Add %asset% to Metamask":"Add %asset% to Metamask","Added %asset%":"Added %asset%","Transaction Submitted":"Transaction Submitted","Wallet Address or ENS name":"Wallet Address or ENS name","Recipient":"Recipient","Waiting For Confirmation":"Waiting For Confirmation","Confirm this transaction in your wallet":"Confirm this transaction in your wallet","Dismiss":"Dismiss","Latest":"Latest","Notice for trading %symbol%":"Notice for trading %symbol%","To trade SAFEMOON, you must:":"To trade SAFEMOON, you must:","Click on the settings icon":"Click on the settings icon","Set your slippage tolerance to 12%+":"Set your slippage tolerance to 12%+","This is because SafeMoon taxes a 10% fee on each transaction:":"This is because SafeMoon taxes a 10% fee on each transaction:","5% fee = redistributed to all existing holders":"5% fee = redistributed to all existing holders","5% fee = used to add liquidity":"5% fee = used to add liquidity","Warning: BONDLY has been compromised. Please remove liqudity until further notice.":"Warning: BONDLY has been compromised. Please remove liqudity until further notice.","Claimed":"Claimed","Settings":"Settings","Transaction deadline":"Transaction deadline","Convert ERC-20 to BEP-20":"Convert ERC-20 to BEP-20","Need help ?":"Need help ?","Select a token":"Select a token","Enter a recipient":"Enter a recipient","Invalid recipient":"Invalid recipient","Supply":"Supply","Your Liquidity":"Your Liquidity","Remove liquidity to receive tokens back":"Remove liquidity to receive tokens back","Trade anything. No registration, no hassle.":"Trade anything. No registration, no hassle.","Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.":"Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.","Learn":"Learn","BNB token":"BNB token","CAKE token":"MGT token","BTC token":"BTC token","Earn passive income with crypto.":"Earn passive income with crypto.","PancakeSwap makes it easy to make your crypto work for you.":"MGT  Launchpad makes it easy to make your crypto work for you.","Explore":"Explore","Pie chart":"Pie chart","Stocks chart":"Stocks chart","Folder with cake token":"Folder with MGT token","CAKE makes our world go round.":"MGT makes our world go round.","CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!":"MGT token is at the heart of the MGT  Launchpad ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!","Small 3d pancake":"Small 3d pancake","%cakePrizeInUsd% in CAKE prizes this round":"%cakePrizeInUsd% in MGT prizes this round","Buy tickets with CAKE, win CAKE if your numbers match":"Buy tickets with MGT, win MGT if your numbers match","$%bnbWonInUsd% in BNB won so far":"$%bnbWonInUsd% in BNB won so far","Will BNB price rise or fall? guess correctly to win!":"Will BNB price rise or fall? guess correctly to win!","And those users are now entrusting the platform with over $%MGT% in funds.":"And those users are now entrusting the platform with over $%MGT% in funds.","Trusted with billions.":"Trusted with billions.","PancakeSwap has the most users of any decentralized platform, ever.":"MGT  Launchpad has the most users of any decentralized platform, ever.","Will you join them?":"Will you join them?","$%MGT% staked":"$%MGT% staked","The moon is made of pancakes.":"The moon is made of pancakes.","Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.":"Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.","Lunar bunny":"Lunar bunny","Total supply":"Total supply","Burned to date":"Burned to date","Market cap":"Market cap","Current emissions":"Current emissions","$%marketCap%":"$%marketCap%","%cakeEmissions%/block":"%cakeEmissions%/block","%earningsBusd% to collect from %count% farm":"%earningsBusd% to collect from %count% farm","%earningsBusd% to collect from %count% farms":"%earningsBusd% to collect from %count% farms","%earningsBusd% to collect from %count% farm and CAKE pool":"%earningsBusd% to collect from %count% farm and MGT pool","%earningsBusd% to collect from %count% farms and CAKE pool":"%earningsBusd% to collect from %count% farms and MGT pool","%earningsBusd% to collect from CAKE pool":"%earningsBusd% to collect from MGT pool","%earningsBusd% to collect":"%earningsBusd% to collect","Harvest all":"Harvest all","Start in seconds.":"Start in seconds.","Used by millions.":"Used by millions.","Hi, %userName%!":"Hi, %userName%!","Play":"Play","Connected with %address%":"Connected with %address%","Win millions in prizes":"Win millions in prizes","%users% users":"%users% users","Connect your crypto wallet to start using the app in seconds.":"Connect your crypto wallet to start using the app in seconds.","in the last 30 days":"in the last 30 days","No registration needed.":"No registration needed.","Learn how to start":"Learn how to start","%trades% trades":"%trades% trades","Provably fair, on-chain games.":"Provably fair, on-chain games.","made in the last 30 days":"made in the last 30 days","Win big with PancakeSwap.":"Win big with MGT  Launchpad.","Copied":"Copied","Make a Profile":"Make a Profile","Your Address":"Your Address","Your Wallet":"Your Wallet","Transactions":"Transactions","BNB Balance Low":"BNB Balance Low","BNB Balance":"BNB Balance","CAKE Balance":"MGT Balance","You need BNB for transaction fees.":"You need BNB for transaction fees.","Disconnect":"Disconnect","Disconnect Wallet":"Disconnect Wallet","Ending in":"Ending in","Next auction":"Next auction","Contract approved - you can now place your bid!":"Contract approved - you can now place your bid!","Contract approved - you can now reclaim your bid!":"Contract approved - you can now reclaim your bid!","Bid placed!":"Bid placed!","Bid reclaimed!":"Bid reclaimed!","Reclaim Bid":"Reclaim Bid","Place a Bid":"Place a Bid","Reclaim your CAKE now.":"Reclaim your MGT now.","Your total bid":"Your total bid","Your bid in Auction #%auctionId% was unsuccessful.":"Your bid in Auction #%auctionId% was unsuccessful.","Current Auction":"Current Auction","Farm schedule":"Farm schedule","Farm duration":"Farm duration","%num% days":"%num% days","Only whitelisted project wallets can bid in the auction to create Community Farms.":"Only whitelisted project wallets can bid in the auction to create Community Farms.","Bidding is only possible while the auction is live.":"Bidding is only possible while the auction is live.","If you\u2019re sure your project should be able to bid in this auction, make sure you\u2019re connected with the correct (whitelisted) wallet.":"If you\u2019re sure your project should be able to bid in this auction, make sure you\u2019re connected with the correct (whitelisted) wallet.","Why cant I bid for a farm?":"Why cant I bid for a farm?","Archive":"Archive","Auction #":"Auction #","Auction #%auctionId%":"Auction #%auctionId%","LP Info":"LP Info","Bidder Address":"Bidder Address","Top %num% bidders at the end of the auction will successfully create a community farm.":"Top %num% bidders at the end of the auction will successfully create a community farm.","Position":"Position","CAKE bid":"MGT bid","Showing top 10 bids only.":"Showing top 10 bids only.","See all whitelisted bidders":"See all whitelisted bidders","Your existing bid":"Your existing bid","Bid a multiple of 10":"Bid a multiple of 10","Bid must be a multiple of 10":"Bid must be a multiple of 10","First bid must be %initialBidAmount% CAKE or more.":"First bid must be %initialBidAmount% MGT or more.","If your bid is unsuccessful, you\u2019ll be able to reclaim your CAKE after the auction.":"If your bid is unsuccessful, you\u2019ll be able to reclaim your MGT after the auction.","Notice":"Notice","This page is a functional page, for projects to bid for farms.":"This page is a functional page, for projects to bid for farms.","If you\u2019re not a whitelisted project, you won\u2019t be able to participate, but you can still view the auction bids in real time!":"If you\u2019re not a whitelisted project, you won\u2019t be able to participate, but you can still view the auction bids in real time!","Connect a whitelisted project wallet to participate in Auctions.":"Connect a whitelisted project wallet to participate in Auctions.","Your bid in Auction #%auctionId% was successful.":"Your bid in Auction #%auctionId% was successful.","Your Farm will be launched as follows:":"Your Farm will be launched as follows:","Multiplier per farm":"Multiplier per farm","Total whitelisted bidders":"Total whitelisted bidders","Please specify auction ID":"Please specify auction ID","No history yet":"No history yet","Connected as %projectName%":"Connected as %projectName%","Place bid":"Place bid","Farms available":"Farms available","top %num% bidders":"top %num% bidders","All Whitelisted Project Wallets":"All Whitelisted Project Wallets","Search address or token":"Search address or token","This page is for projects to bid for farms.":"This page is for projects to bid for farms.","If you\u2019re not a whitelisted project, you won\u2019t be able to participate, but you can still view what\u2019s going on!":"If you\u2019re not a whitelisted project, you won\u2019t be able to participate, but you can still view what\u2019s going on!","through community auctions so far!":"through community auctions so far!","%num% Winners":"%num% Winners","%num% Contenders...":"%num% Contenders...","Farm Auctions":"Farm Auctions","auction bunny":"auction bunny","Burnt CAKE":"Burnt MGT","Stake %stakingSymbol% - Earn %earningSymbol%":"Stake %stakingSymbol% - Earn %earningSymbol%","Top Farms":"Top Farms","Top Syrup Pools":"Top Syrup Pools","Expert Mode":"Expert Mode","Don\u2019t show this again":"Don\u2019t show this again","Global":"Global","Tx deadline (mins)":"Tx deadline (mins)","Flippy sounds":"Flippy sounds","Your transaction will revert if it is left confirming for longer than this time.":"Your transaction will revert if it is left confirming for longer than this time.","Fun sounds to make a truly immersive pancake-flipping trading":"Fun sounds to make a truly immersive pancake-flipping trading","Found unknown key Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution.":"Found unknown key Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution.","Swaps & Liquidity":"Swaps & Liquidity","Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution.":"Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution.","Bypasses confirmation modals and allows high slippage trades. Use at your own risk.":"Bypasses confirmation modals and allows high slippage trades. Use at your own risk.","Fun sounds to make a truly immersive pancake-flipping trading experience":"Fun sounds to make a truly immersive pancake-flipping trading experience","ROI at current rates":"ROI at current rates","Farm Multiplier":"Farm Multiplier","\u201cMy Balance\u201d here includes both LP Tokens in your wallet, and LP Tokens already staked in this farm.":"\u201cMy Balance\u201d here includes both LP Tokens in your wallet, and LP Tokens already staked in this farm.","\u201cMy Balance\u201d here includes both %assetSymbol% in your wallet, and %assetSymbol% already staked in this pool.":"\u201cMy Balance\u201d here includes both %assetSymbol% in your wallet, and %assetSymbol% already staked in this pool.","APY (%compoundTimes%x daily compound)":"APY (%compoundTimes%x daily compound)","My Balance":"My Balance","Staked for":"Staked for","Compounding every":"Compounding every","1D":"1D","7D":"7D","14D":"14D","30D":"30D","1Y":"1Y","5Y":"5Y","Annual ROI at current rates":"Annual ROI at current rates","Calling all BSC projects":"Calling all BSC projects","Apply for whitelisting now!":"Apply for whitelisting now!","Default Transaction Speed (GWEI)":"Default Transaction Speed (GWEI)","Adjusts the gas price (transaction fee) for your transaction. Higher GWEI = higher speed = higher fees":"Adjusts the gas price (transaction fee) for your transaction. Higher GWEI = higher speed = higher fees","Standard (%gasPrice%)":"Standard (%gasPrice%)","Fast (%gasPrice%)":"Fast (%gasPrice%)","Instant (%gasPrice%)":"Instant (%gasPrice%)","You won multiple collectibles!":"You won multiple collectibles!","Prices shown on cards and charts are different":"Prices shown on cards and charts are different","The price you see come from difference places":"The price you see come from difference places","Prices on cards come from Chainlink\u2019s verifiable price oracle.":"Prices on cards come from Chainlink\u2019s verifiable price oracle.","Prices on charts come from Binance.com. Chart\'s are provided for your reference only.":"Prices on charts come from Binance.com. Chart\'s are provided for your reference only.","Only the price from Chainlink (shown on the cards) determines the round\'s result.":"Only the price from Chainlink (shown on the cards) determines the round\'s result.","Showing history for Prediction v0.2":"Showing history for Prediction v0.2","Check for unclaimed v0.1 winnings":"Check for unclaimed v0.1 winnings","You have no unclaimed v0.1 prizes.":"You have no unclaimed v0.1 prizes.","Nothing to collect":"Nothing to collect","Download .CSV":"Download .CSV","Download your v0.1 Prediction history below.":"Download your v0.1 Prediction history below.","Nothing to Collect":"Nothing to Collect","From round %round%":"From round %round%","From rounds %rounds%":"From rounds %rounds%","View More":"View More","User":"User","Net Winnings (BNB)":"Net Winnings (BNB)","Win Rate":"Win Rate","Rounds Won":"Rounds Won","Rank By":"Rank By","Net Winnings":"Net Winnings","Total BNB":"Total BNB","%num%m":"%num%m","Rounds Played":"Rounds Played","Winnings (BNB)":"Winnings (BNB)","Direction":"Direction","My Rankings":"My Rankings","View Stats":"View Stats","Last %num% Bets":"Last %num% Bets","Search %subject%":"Search %subject%","Address":"Address","Learn How to Connect":"Learn How to Connect","Haven\u2019t got a crypto wallet yet?":"Haven\u2019t got a crypto wallet yet?","Neither side wins this round":"Neither side wins this round","The Locked Price & Closed Price are exactly the same (within 8 decimals), so neither side wins. All funds entered into UP and DOWN positions will go to the weekly CAKE burn.":"The Locked Price & Closed Price are exactly the same (within 8 decimals), so neither side wins. All funds entered into UP and DOWN positions will go to the weekly MGT burn.","To Burn":"To Burn","Account":"Account","PancakeSwap Info & Analytics":"MGT Info & Analytics","Top Tokens":"Top Tokens","Top Pools":"Top Pools","Your Watchlist":"Your Watchlist","Saved pools will appear here":"Saved pools will appear here","All Pools":"All Pools","All Tokens":"All Tokens","Saved tokens will appear here":"Saved tokens will appear here","Transactions 24H":"Transactions 24H","Volume 24H":"Volume 24H","Volume 7D":"Volume 7D","Total Tokens Locked":"Total Tokens Locked","LP reward fees 24H":"LP reward fees 24H","LP reward fees 7D":"LP reward fees 7D","No pool has been created with this token yet. Create one":"No pool has been created with this token yet. Create one","here.":"here.","Price Change":"Price Change","Page %page% of %maxPage%":"Page %page% of %maxPage%","Name":"Name","Swaps":"Swaps","Adds":"Adds","Removes":"Removes","No Transactions":"No Transactions","Action":"Action","Total Value":"Total Value","Add %token0% and %token1%":"Add %token0% and %token1%","Remove %token0% and %token1%":"Remove %token0% and %token1%","Swap %token0% for %token1%":"Swap %token0% for %token1%","Search pools or tokens":"Search pools or tokens","Watchlist":"Watchlist","See more...":"See more...","No results":"No results","Error occurred, please try again":"Error occurred, please try again","LP reward APR":"LP reward APR","out of $%totalFees% total fees":"out of $%totalFees% total fees","24H":"24H","7D performance":"7D performance","Based on last 7 days\' performance. Does not account for impermanent loss":"Based on last 7 days\' performance. Does not account for impermanent loss","View token on CoinMarketCap":"View token on CoinMarketCap","Top Movers":"Top Movers","Loading chart data...":"Loading chart data...","You have %amount% tickets this round":"You have %amount% tickets this round","You have %amount% ticket this round":"You have %amount% ticket this round","You had %amount% tickets this round":"You had %amount% tickets this round","You had %amount% ticket this round":"You had %amount% ticket this round","Remove Liquidity":"Remove Liquidity","Minimum received":"Minimum received","Maximum sold":"Maximum sold","The difference between the market price and estimated price due to trade size.":"The difference between the market price and estimated price due to trade size.","The difference between the market price and your price due to trade size.":"The difference between the market price and your price due to trade size.","Liquidity Provider Fee":"Liquidity Provider Fee","Import Token":"Import Token","Output is estimated. You will receive at least %amount% %symbol% or the transaction will revert.":"Output is estimated. You will receive at least %amount% %symbol% or the transaction will revert.","Input is estimated. You will sell at most %amount% %symbol% or the transaction will revert.":"Input is estimated. You will sell at most %amount% %symbol% or the transaction will revert.","Output will be sent to %recipient%":"Output will be sent to %recipient%","Price Updated":"Price Updated","Accept":"Accept","For each trade a %amount% fee is paid":"For each trade a %amount% fee is paid","%amount% to LP token holders":"%amount% to LP token holders","%amount% to the Treasury":"%amount% to the Treasury","%amount% towards CAKE buyback and burn":"%amount% towards MGT buyback and burn","Routing through these tokens resulted in the best price for your trade.":"Routing through these tokens resulted in the best price for your trade.","Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.":"Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.","Route":"Route","Price Impact":"Price Impact","This swap has a price impact of at least %amount%%. Please type the word \\"%word%\\" to continue with this swap.":"This swap has a price impact of at least %amount%%. Please type the word \\"%word%\\" to continue with this swap.","This swap has a price impact of at least %amount%%. Please confirm that you would like to continue with this swap.":"This swap has a price impact of at least %amount%%. Please confirm that you would like to continue with this swap."}') },
        45: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return c })), n.d(t, "f", (function() { return u })), n.d(t, "c", (function() { return d })), n.d(t, "i", (function() { return l })), n.d(t, "k", (function() { return p })), n.d(t, "l", (function() { return b })), n.d(t, "j", (function() { return y })), n.d(t, "n", (function() { return m })), n.d(t, "m", (function() { return f })), n.d(t, "a", (function() { return h })), n.d(t, "h", (function() { return k })), n.d(t, "d", (function() { return T })), n.d(t, "e", (function() { return g })), n.d(t, "g", (function() { return x }));
            n(11);
            var a = n(4),
                r = (n(263), n(0)),
                i = n(28),
                o = (n(36), n(20), n(54), n(41)),
                s = n(59);

            function c() {
                var e = Object(i.b)(),
                    t = Object(i.c)((function(e) { return e.user.audioPlay })),
                    n = Object(r.useCallback)((function() { e(t ? Object(o.g)() : Object(o.k)()) }), [t, e]);
                return [t, n]
            }

            function u() { return Object(i.c)((function(e) { return e.user.userExpertMode })) }

            function d() {
                var e = Object(i.b)(),
                    t = u(),
                    n = Object(r.useCallback)((function() { e(Object(o.n)({ userExpertMode: !t })) }), [t, e]);
                return [t, n]
            }

            function l() { var e = Object(i.b)(); return [Object(i.c)((function(e) { return e.user.isDark })), Object(r.useCallback)((function() { e(Object(o.j)()) }), [e])] }

            function p() { var e = Object(i.b)(); return [Object(i.c)((function(e) { return e.user.userSingleHopOnly })), Object(r.useCallback)((function(t) { e(Object(o.v)({ userSingleHopOnly: t })) }), [e])] }

            function b() { var e = Object(i.b)(); return [Object(i.c)((function(e) { return e.user.userSlippageTolerance })), Object(r.useCallback)((function(t) { e(Object(o.w)({ userSlippageTolerance: t })) }), [e])] }

            function y() { var e = Object(i.b)(); return [Object(i.c)((function(e) { return e.user.userExpertModeAcknowledgementShow })), Object(r.useCallback)((function(t) { e(Object(o.o)({ userExpertModeAcknowledgementShow: t })) }), [e])] }

            function m() { var e = Object(i.b)(); return [Object(i.c)((function(e) { return e.user.userUsernameVisibility })), Object(r.useCallback)((function(t) { e(Object(o.x)({ userUsernameVisibility: t })) }), [e])] }

            function f() { var e = Object(i.b)(); return [Object(i.c)((function(e) { return e.user.userDeadline })), Object(r.useCallback)((function(t) { e(Object(o.m)({ userDeadline: t })) }), [e])] }

            function h() { var e = Object(i.b)(); return Object(r.useCallback)((function(t) { e(Object(o.d)({ serializedToken: Object(s.d)(t) })) }), [e]) }

            function k() { var e = Object(i.b)(); return Object(r.useCallback)((function(t, n) { e(Object(o.i)({ chainId: t, address: n })) }), [e]) }

            function T() { var e = Object(i.c)((function(e) { return e.user.gasPrice })); return "56" === a.a.MAINNET.toString() ? e : s.b.testnet }

            function g() { var e = Object(i.b)(); return [T(), Object(r.useCallback)((function(t) { e(Object(o.l)({ gasPrice: t })) }), [e])] }

            function v(e) { return { token0: Object(s.d)(e.token0), token1: Object(s.d)(e.token1) } }

            function x() { var e = Object(i.b)(); return Object(r.useCallback)((function(t) { e(Object(o.c)({ serializedPair: v(t) })) }), [e]) }
        },
        464: function(e, t) {},
        51: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return d }));
            var a = n(11),
                r = n(3),
                i = n.n(r),
                o = n(12),
                s = n(61),
                c = n(40),
                u = function() {
                    var e = Object(o.a)(i.a.mark((function e(t, n) {
                        var a, r, o, u, d, l;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, a = Object(c.r)(), r = new s.a.utils.Interface(t), o = n.map((function(e) { return [e.address.toLowerCase(), r.encodeFunctionData(e.name, e.params)] })), e.next = 6, a.aggregate(o);
                                case 6:
                                    return u = e.sent, d = u.returnData, l = d.map((function(e, t) { return r.decodeFunctionResult(n[t].name, e) })), e.abrupt("return", l);
                                case 12:
                                    throw e.prev = 12, e.t0 = e.catch(0), new Error(e.t0);
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 12]
                        ])
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                d = function() {
                    var e = Object(o.a)(i.a.mark((function e(t, n) {
                        var r, o, u, d, l, p, b, y = arguments;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = y.length > 2 && void 0 !== y[2] ? y[2] : { requireSuccess: !0 }, o = r.requireSuccess, u = Object(c.r)(), d = new s.a.utils.Interface(t), l = n.map((function(e) { return [e.address.toLowerCase(), d.encodeFunctionData(e.name, e.params)] })), e.next = 7, u.tryAggregate(o, l);
                                case 7:
                                    return p = e.sent, b = p.map((function(e, t) {
                                        var r = Object(a.a)(e, 2),
                                            i = r[0],
                                            o = r[1];
                                        return i ? d.decodeFunctionResult(n[t].name, o) : null
                                    })), e.abrupt("return", b);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }();
            t.a = u
        },
        52: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return r })), n.d(t, "c", (function() { return i })), n.d(t, "a", (function() { return o }));
            var a = n(4);

            function r(e, t) { return t && e === a.d ? a.n[t] : e instanceof a.j ? e : void 0 }

            function i(e, t) { var n = e && t ? r(e.currency, t) : void 0; return n && e ? new a.k(n, e.raw) : void 0 }

            function o(e) { return e.equals(a.n[e.chainId]) ? a.d : e }
        },
        53: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return r.a })), n.d(t, "b", (function() { return u })), n.d(t, "c", (function() { return y }));
            var a, r = n(120),
                i = n(13),
                o = (n(0), n(7)),
                s = n(1),
                c = o.e.div(a || (a = Object(i.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-right: ", ";\n"])), (function(e) { return e.margin && "4px" }));

            function u(e) {
                var t = e.currency0,
                    n = e.currency1,
                    a = e.size,
                    i = void 0 === a ? 20 : a,
                    o = e.margin,
                    u = void 0 !== o && o;
                return Object(s.jsxs)(c, { margin: u, children: [t && Object(s.jsx)(r.a, { currency: t, size: "".concat(i.toString(), "px"), style: { marginRight: "4px" } }), n && Object(s.jsx)(r.a, { currency: n, size: "".concat(i.toString(), "px") })] })
            }
            var d, l = n(269),
                p = n(266),
                b = Object(o.e)(p.a)(d || (d = Object(i.a)(["\n  width: ", ";\n  height: ", ";\n"])), (function(e) { return e.size }), (function(e) { return e.size }));

            function y(e) {
                var t = e.logoURI,
                    n = e.style,
                    a = e.size,
                    r = void 0 === a ? "24px" : a,
                    i = e.alt,
                    o = Object(l.a)(t);
                return Object(s.jsx)(b, { alt: i, size: r, srcs: o, style: n })
            }
        },
        54: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return f })), n.d(t, "a", (function() { return h })), n.d(t, "h", (function() { return k })), n.d(t, "e", (function() { return T })), n.d(t, "d", (function() { return g })), n.d(t, "f", (function() { return v })), n.d(t, "g", (function() { return w })), n.d(t, "c", (function() { return O }));
            var a = n(6),
                r = n(234),
                i = n(4),
                o = n(0),
                s = n(62),
                c = n(20),
                u = n(68),
                d = n(55),
                l = n(211),
                p = n(37),
                b = n(64),
                y = n(187);

            function m(e, t) {
                var n = Object(c.a)().chainId,
                    r = Object(l.a)();
                return Object(o.useMemo)((function() { if (!n) return {}; var i = Object.keys(e[n]).reduce((function(t, a) { return t[a] = e[n][a].token, t }), {}); return t ? r.reduce((function(e, t) { return e[t.address] = t, e }), Object(a.a)({}, i)) : i }), [n, r, e, t])
            }

            function f() { return m(Object(u.d)(), !0) }

            function h() {
                var e = m(Object(u.e)(), !1),
                    t = Object.keys(f());
                return t ? Object.keys(e).reduce((function(n, a) { return t.includes(a) || (n[a] = e[a]), n }), {}) : e
            }

            function k() { return m(Object(u.h)(), !1) }

            function T(e) { var t = f(); return !(!t || !e) && !!t[e.address] }

            function g(e) {
                var t = Object(c.a)().chainId,
                    n = h();
                return Object(o.useMemo)((function() { if (t && "" !== e) return Object(y.a)(Object.values(n), e) }), [t, n, e])
            }

            function v(e) { var t = Object(l.a)(); return !!e && !!t.find((function(t) { return Object(i.o)(e, t) })) }
            var x = /^0x[a-fA-F0-9]{64}$/;

            function j(e, t, n) { return e && e.length > 0 ? e : t && x.test(t) && 0 === Object(s.arrayify)(t)[31] ? Object(r.b)(t) : n }

            function w(e) {
                var t = Object(c.a)().chainId,
                    n = f(),
                    a = Object(p.h)(e),
                    r = Object(b.k)(a || void 0, !1),
                    s = Object(b.b)(a || void 0, !1),
                    u = a ? n[a] : void 0,
                    l = Object(d.c)(u ? void 0 : r, "name", void 0, d.a),
                    y = Object(d.c)(u ? void 0 : s, "name", void 0, d.a),
                    m = Object(d.c)(u ? void 0 : r, "symbol", void 0, d.a),
                    h = Object(d.c)(u ? void 0 : s, "symbol", void 0, d.a),
                    k = Object(d.c)(u ? void 0 : r, "decimals", void 0, d.a);
                return Object(o.useMemo)((function() { if (u) return u; if (t && a) { if (k.loading || m.loading || l.loading) return null; var e, n, r, o; if (k.result) return new i.j(t, a, k.result[0], j(null === (e = m.result) || void 0 === e ? void 0 : e[0], null === (n = h.result) || void 0 === n ? void 0 : n[0], "UNKNOWN"), j(null === (r = l.result) || void 0 === r ? void 0 : r[0], null === (o = y.result) || void 0 === o ? void 0 : o[0], "Unknown Token")) } }), [a, t, k.loading, k.result, m.loading, m.result, h.result, u, l.loading, l.result, y.result])
            }

            function O(e) {
                var t = "BNB" === (null === e || void 0 === e ? void 0 : e.toUpperCase()),
                    n = w(t ? void 0 : e);
                return t ? i.d : n
            }
        },
        55: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return l })), n.d(t, "d", (function() { return f })), n.d(t, "b", (function() { return h })), n.d(t, "c", (function() { return k }));
            var a = n(0),
                r = n(28),
                i = n(20),
                o = n(122),
                s = n(79);

            function c(e) { return -1 !== ["string", "number"].indexOf(typeof e) }

            function u(e) { return void 0 === e || Array.isArray(e) && e.every((function(e) { return c(e) || Array.isArray(e) && e.every(c) })) }
            var d = { valid: !1, blockNumber: void 0, data: void 0 },
                l = { blocksPerFetch: 1 / 0 };

            function p(e, t) {
                var n = Object(i.a)().chainId,
                    o = Object(r.c)((function(e) { return e.multicall.callResults })),
                    c = Object(r.b)(),
                    u = Object(a.useMemo)((function() { var t, n, a; return JSON.stringify(null !== (t = null === e || void 0 === e || null === (n = e.filter((function(e) { return Boolean(e) }))) || void 0 === n || null === (a = n.map(s.f)) || void 0 === a ? void 0 : a.sort()) && void 0 !== t ? t : []) }), [e]);
                return Object(a.useEffect)((function() {
                    var e = JSON.parse(u);
                    if (n && 0 !== e.length) {
                        var a = e.map((function(e) { return Object(s.d)(e) }));
                        return c(Object(s.a)({ chainId: n, calls: a, options: t })),
                            function() { c(Object(s.e)({ chainId: n, calls: a, options: t })) }
                    }
                }), [n, c, t, u]), Object(a.useMemo)((function() { return e.map((function(e) { var t; if (!n || !e) return d; var a, r = null === (t = o[n]) || void 0 === t ? void 0 : t[Object(s.f)(e)]; return (null === r || void 0 === r ? void 0 : r.data) && "0x" !== (null === r || void 0 === r ? void 0 : r.data) && (a = r.data), { valid: !0, data: a, blockNumber: null === r || void 0 === r ? void 0 : r.blockNumber } })) }), [o, e, n])
            }
            var b = { valid: !1, result: void 0, loading: !1, syncing: !1, error: !1 },
                y = { valid: !0, result: void 0, loading: !0, syncing: !0, error: !1 };

            function m(e, t, n, a) {
                if (!e) return b;
                var r = e.valid,
                    i = e.data,
                    o = e.blockNumber;
                if (!r) return b;
                if (r && !o) return y;
                if (!t || !n || !a) return y;
                var s, c = i && i.length > 2,
                    u = (null !== o && void 0 !== o ? o : 0) < a;
                if (c && i) try { s = t.decodeFunctionResult(n, i) } catch (d) { return console.debug("Result data parsing failed", n, i), { valid: !0, loading: !1, error: !0, syncing: u, result: s } }
                return { valid: !0, loading: !1, syncing: u, result: s, error: !c }
            }

            function f(e, t, n, r) {
                var i = Object(a.useMemo)((function() { var n; return null === e || void 0 === e || null === (n = e.interface) || void 0 === n ? void 0 : n.getFunction(t) }), [e, t]),
                    s = p(Object(a.useMemo)((function() { return e && i && n && n.length > 0 ? n.map((function(t) { return { address: e.address, callData: e.interface.encodeFunctionData(i, t) } })) : [] }), [n, e, i]), r),
                    c = Object(o.a)().currentBlock;
                return Object(a.useMemo)((function() { return s.map((function(t) { return m(t, null === e || void 0 === e ? void 0 : e.interface, i, c) })) }), [i, e, s, c])
            }

            function h(e, t, n, r, i) {
                var s = Object(a.useMemo)((function() { return t.getFunction(n) }), [t, n]),
                    c = Object(a.useMemo)((function() { return s && u(r) ? t.encodeFunctionData(s, r) : void 0 }), [r, t, s]),
                    d = p(Object(a.useMemo)((function() { return s && e && e.length > 0 && c ? e.map((function(e) { return e && c ? { address: e, callData: c } : void 0 })) : [] }), [e, c, s]), i),
                    l = Object(o.a)().currentBlock;
                return Object(a.useMemo)((function() { return d.map((function(e) { return m(e, t, s, l) })) }), [s, d, t, l])
            }

            function k(e, t, n, r) {
                var i = Object(a.useMemo)((function() { var n; return null === e || void 0 === e || null === (n = e.interface) || void 0 === n ? void 0 : n.getFunction(t) }), [e, t]),
                    s = p(Object(a.useMemo)((function() { return e && i && u(n) ? [{ address: e.address, callData: e.interface.encodeFunctionData(i, n) }] : [] }), [e, i, n]), r)[0],
                    c = Object(o.a)().currentBlock;
                return Object(a.useMemo)((function() { return m(s, null === e || void 0 === e ? void 0 : e.interface, i, c) }), [s, e, i, c])
            }
        },
        56: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return c })), n.d(t, "d", (function() { return d })), n.d(t, "e", (function() { return l })), n.d(t, "c", (function() { return p })), n.d(t, "a", (function() { return b })), n.d(t, "g", (function() { return y })), n.d(t, "f", (function() { return m })), n.d(t, "h", (function() { return f }));
            var a, r = n(17),
                i = n(4),
                o = n(274),
                s = n(39);
            o.a.config({ EXPONENTIAL_AT: 1e3, DECIMAL_PLACES: 80 });
            var c = (a = {}, Object(r.a)(a, i.a.MAINNET, "https://bscscan.com"), Object(r.a)(a, i.a.TESTNET, "https://testnet.bscscan.com"), a),
                u = new o.a(40),
                d = new o.a(10512e3),
                l = u.times(d),
                p = "https://pancakeswap.finance",
                b = ("".concat(p, "/add"), c[i.a.MAINNET]),
                y = s.b.pow(18),
                m = 2e5,
                f = "https://ipfs.io/ipfs"
        },
        59: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() { return o })), n.d(t, "c", (function() { return s })), n.d(t, "a", (function() { return a })), n.d(t, "b", (function() { return c }));
            var a, r = n(4),
                i = n(62);

            function o(e) { return { chainId: e.chainId, address: e.address, decimals: e.decimals, symbol: e.symbol, name: e.name, projectLink: e.projectLink } }

            function s(e) { return new r.j(e.chainId, e.address, e.decimals, e.symbol, e.name, e.projectLink) }! function(e) { e.default = "5", e.fast = "6", e.instant = "7", e.testnet = "10" }(a || (a = {}));
            var c = { default: Object(i.parseUnits)(a.default, "gwei").toString(), fast: Object(i.parseUnits)(a.fast, "gwei").toString(), instant: Object(i.parseUnits)(a.instant, "gwei").toString(), testnet: Object(i.parseUnits)(a.testnet, "gwei").toString() }
        },
        64: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() { return m })), n.d(t, "a", (function() { return f })), n.d(t, "j", (function() { return h })), n.d(t, "g", (function() { return k })), n.d(t, "i", (function() { return T })), n.d(t, "d", (function() { return g })), n.d(t, "k", (function() { return x })), n.d(t, "l", (function() { return j })), n.d(t, "e", (function() { return w })), n.d(t, "f", (function() { return O })), n.d(t, "b", (function() { return B })), n.d(t, "h", (function() { return A }));
            var a = n(0),
                r = n(20),
                i = n(40),
                o = n(35),
                s = n(4),
                c = (n(251), n(422)),
                u = n(423),
                d = n(252),
                l = n(90),
                p = n(248),
                b = n(247),
                y = n(37),
                m = function() { var e = Object(r.a)().library; return Object(a.useMemo)((function() { return Object(i.g)(e.getSigner()) }), [e]) },
                f = function() { var e = Object(r.a)().library; return Object(a.useMemo)((function() { return Object(i.b)(e.getSigner()) }), [e]) },
                h = function() { var e = Object(r.a)().library; return Object(a.useMemo)((function() { return Object(i.v)(e.getSigner()) }), [e]) },
                k = function() { var e = Object(r.a)().library; return Object(a.useMemo)((function() { return Object(i.q)(e.getSigner()) }), [e]) },
                T = function() { var e = Object(r.a)().library; return Object(a.useMemo)((function() { return Object(i.t)(e.getSigner()) }), [e]) },
                g = function() { var e = Object(r.a)().library; return Object(a.useMemo)((function() { return Object(i.j)(e.getSigner()) }), [e]) };

            function v(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    i = Object(r.a)(),
                    o = i.library,
                    s = i.account;
                return Object(a.useMemo)((function() { if (!e || !t || !o) return null; try { return Object(y.f)(e, t, o, n && s ? s : void 0) } catch (a) { return console.error("Failed to get contract", a), null } }), [e, t, o, n, s])
            }

            function x(e, t) { return v(e, l, t) }

            function j(e) { var t = Object(r.a)().chainId; return v(t ? s.n[t].address : void 0, p, e) }

            function w(e) {
                var t, n = Object(r.a)().chainId;
                if (n) switch (n) {
                    case s.a.MAINNET:
                    case s.a.TESTNET:
                        t = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                }
                return v(t, u, e)
            }

            function O(e, t) { return v(e, c, t) }

            function B(e, t) { return v(e, d.a, t) }

            function A() { return v(Object(o.n)(), b, !1) }
        },
        67: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() { return a })), n.d(t, "b", (function() { return r })), n.d(t, "a", (function() { return i }));
            var a = [],
                r = ["https://tokens.pancakeswap.finance/pancakeswap-top-100.json", "https://tokens.pancakeswap.finance/pancakeswap-extended.json"].concat(a),
                i = []
        },
        68: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return h })), n.d(t, "c", (function() { return v })), n.d(t, "b", (function() { return w })), n.d(t, "d", (function() { return O })), n.d(t, "e", (function() { return B })), n.d(t, "f", (function() { return A })), n.d(t, "h", (function() { return C })), n.d(t, "g", (function() { return E }));
            var a, r = n(6),
                i = n(17),
                o = n(16),
                s = n(18),
                c = n(23),
                u = n(24),
                d = n(4),
                l = n(0),
                p = n(28),
                b = n(67),
                y = n(322),
                m = n(400);

            function f(e, t) {
                var n = b.b.includes(e) ? b.b.indexOf(e) : Number.MAX_SAFE_INTEGER,
                    a = b.b.includes(t) ? b.b.indexOf(t) : Number.MAX_SAFE_INTEGER;
                return n < a ? 1 : n > a ? -1 : 0
            }
            var h = function(e) {
                    Object(c.a)(n, e);
                    var t = Object(u.a)(n);

                    function n(e, a) { var r; return Object(o.a)(this, n), (r = t.call(this, e.chainId, e.address, e.decimals, e.symbol, e.name)).tokenInfo = void 0, r.tags = void 0, r.tokenInfo = e, r.tags = a, r }
                    return Object(s.a)(n, [{ key: "logoURI", get: function() { return this.tokenInfo.logoURI } }]), n
                }(d.j),
                k = (a = {}, Object(i.a)(a, d.a.MAINNET, {}), Object(i.a)(a, d.a.TESTNET, {}), a),
                T = "undefined" !== typeof WeakMap ? new WeakMap : null;

            function g(e) {
                var t = null === T || void 0 === T ? void 0 : T.get(e);
                if (t) return t;
                var n = e.tokens.reduce((function(t, n) {
                    var a, o, s, c = null !== (a = null === (o = n.tags) || void 0 === o || null === (s = o.map((function(t) { var n; if (null === (n = e.tags) || void 0 === n ? void 0 : n[t]) return Object(r.a)(Object(r.a)({}, e.tags[t]), {}, { id: t }) }))) || void 0 === s ? void 0 : s.filter((function(e) { return Boolean(e) }))) && void 0 !== a ? a : [],
                        u = new h(n, c);
                    if (void 0 !== t[u.chainId][u.address]) throw Error("Duplicate tokens.");
                    return Object(r.a)(Object(r.a)({}, t), {}, Object(i.a)({}, u.chainId, Object(r.a)(Object(r.a)({}, t[u.chainId]), {}, Object(i.a)({}, u.address, { token: u, list: e }))))
                }), Object(r.a)({}, k));
                return null === T || void 0 === T || T.set(e, n), n
            }

            function v() { return Object(p.c)((function(e) { return e.lists.byUrl })) }

            function x(e, t) { var n; return n = {}, Object(i.a)(n, d.a.MAINNET, Object(r.a)(Object(r.a)({}, e[d.a.MAINNET]), t[d.a.MAINNET])), Object(i.a)(n, d.a.TESTNET, Object(r.a)(Object(r.a)({}, e[d.a.TESTNET]), t[d.a.TESTNET])), n }

            function j(e) { var t = v(); return Object(l.useMemo)((function() { return e ? e.slice().sort(f).reduce((function(e, n) { var a, r = null === (a = t[n]) || void 0 === a ? void 0 : a.current; if (!r) return e; try { return x(e, Object.assign(g(r))) } catch (i) { return console.error("Could not show token list due to error", i), e } }), k) : k }), [t, e]) }

            function w() { var e; return null === (e = Object(p.c)((function(e) { return e.lists.activeListUrls }))) || void 0 === e ? void 0 : e.filter((function(e) { return !b.c.includes(e) })) }

            function O() { return x(j(w()), g(y)) }

            function B() {
                return j(function() {
                    var e = v(),
                        t = w();
                    return Object.keys(e).filter((function(e) { return !(null === t || void 0 === t ? void 0 : t.includes(e)) && !b.c.includes(e) }))
                }())
            }

            function A() { return g(y) }

            function C() { return x(g(m), j(b.c)) }

            function E(e) { var t = w(); return Boolean(null === t || void 0 === t ? void 0 : t.includes(e)) }
        },
        69: function(e, t, n) {
            "use strict";
            var a, r = n(6),
                i = n(57),
                o = n(13),
                s = (n(0), n(2)),
                c = n(7),
                u = n(1),
                d = ["text", "placement"],
                l = c.e.div(a || (a = Object(o.a)(["\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n"])));
            t.a = function(e) {
                var t = e.text,
                    n = e.placement,
                    a = void 0 === n ? "right-end" : n,
                    o = Object(i.a)(e, d),
                    c = Object(s.Db)(t, { placement: a, trigger: "hover" }),
                    p = c.targetRef,
                    b = c.tooltip,
                    y = c.tooltipVisible;
                return Object(u.jsxs)(s.j, Object(r.a)(Object(r.a)({}, o), {}, { children: [y && b, Object(u.jsx)(l, { ref: p, children: Object(u.jsx)(s.K, { color: "textSubtle", width: "16px" }) })] }))
            }
        },
        707: function(e, t) {},
        709: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                r = n.n(a),
                i = n(93),
                o = n.n(i),
                s = n(20),
                c = n(36),
                u = n(68),
                d = n(132),
                l = n(28),
                p = n(54),
                b = n(67),
                y = n(183);
            var m = n(250),
                f = n(73);

            function h() {
                var e = Object(s.a)().library,
                    t = Object(l.b)(),
                    n = Object(m.a)(),
                    r = Object(u.c)(),
                    i = Object(u.b)();
                Object(p.a)();
                var o = Object(y.a)();
                return function(e, t) {
                    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        r = Object(a.useRef)();
                    Object(a.useEffect)((function() { r.current = e }), [e]), Object(a.useEffect)((function() {
                        function e() {
                            var e = r.current;
                            e && e()
                        }
                        if (null !== t) { n && e(); var a = setInterval(e, t); return function() { return clearInterval(a) } }
                    }), [t, n])
                }(Object(a.useCallback)((function() { n && Object.keys(r).forEach((function(e) { return o(e).catch((function(e) { return console.debug("interval list fetching error", e) })) })) }), [o, n, r]), e ? 6e5 : null), Object(a.useEffect)((function() {
                    Object.keys(r).forEach((function(e) {
                        var t = r[e];
                        t.current || t.loadingRequestId || t.error || o(e).catch((function(e) { return console.debug("list added fetching error", e) }))
                    }))
                }), [t, o, e, r]), Object(a.useEffect)((function() {
                    Object.keys(b.c).forEach((function(e) {
                        var t = r[e];
                        t && (t.current || t.loadingRequestId || t.error) || o(e).catch((function(e) { return console.debug("list added fetching error", e) }))
                    }))
                }), [t, o, e, r]), Object(a.useEffect)((function() {
                    Object.keys(r).forEach((function(e) {
                        var n = r[e];
                        if (n.current && n.pendingUpdate) switch (Object(d.b)(n.current.version, n.pendingUpdate.version)) {
                            case d.a.NONE:
                                throw new Error("unexpected no version bump");
                            case d.a.PATCH:
                            case d.a.MINOR:
                            case d.a.MAJOR:
                                t(Object(f.a)(e))
                        }
                    }))
                }), [t, r, i]), null
            }
            var k = n(3),
                T = n.n(k),
                g = n(11),
                v = n(12),
                x = n(122),
                j = n(64),
                w = n(145),
                O = n(16),
                B = n(23),
                A = n(24),
                C = n(328);

            function E(e, t) { return n = e + Math.round(Math.random() * Math.max(0, t - e)), new Promise((function(e) { return setTimeout(e, n) })); var n }
            var P = function(e) {
                    Object(B.a)(n, e);
                    var t = Object(A.a)(n);

                    function n() { return Object(O.a)(this, n), t.call(this, "Cancelled") }
                    return n
                }(Object(C.a)(Error)),
                S = function(e) {
                    Object(B.a)(n, e);
                    var t = Object(A.a)(n);

                    function n() { return Object(O.a)(this, n), t.apply(this, arguments) }
                    return n
                }(Object(C.a)(Error));
            var I = n(79),
                F = n(33);

            function D() {
                return (D = Object(v.a)(T.a.mark((function e(t, n, a) {
                    var r, i, o, s;
                    return T.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return console.debug("Fetching chunk", t, n, a), e.prev = 1, e.next = 4, t.aggregate(n.map((function(e) { return [e.address, e.callData] })));
                            case 4:
                                o = e.sent, s = Object(g.a)(o, 2), r = s[0], i = s[1], e.next = 14;
                                break;
                            case 10:
                                throw e.prev = 10, e.t0 = e.catch(1), console.debug("Failed to fetch chunk inside retry", e.t0), e.t0;
                            case 14:
                                if (!(r.toNumber() < a)) { e.next = 17; break }
                                throw console.debug("Fetched results for old block number: ".concat(r.toString(), " vs. ").concat(a)), new S("Fetched for old block number");
                            case 17:
                                return e.abrupt("return", { results: i, blockNumber: r.toNumber() });
                            case 18:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                })))).apply(this, arguments)
            }

            function N() {
                var e = Object(l.b)(),
                    t = Object(l.c)((function(e) { return e.multicall })),
                    n = Object(w.a)(t.callListeners, 100),
                    r = Object(x.a)().currentBlock,
                    i = Object(s.a)().chainId,
                    o = Object(j.h)(),
                    c = Object(a.useRef)(),
                    u = Object(a.useMemo)((function() { return function(e, t) { if (!e || !t) return {}; var n = e[t]; return n ? Object.keys(n).reduce((function(e, t) { var a = n[t]; return e[t] = Object.keys(a).filter((function(e) { var t = parseInt(e); return !(t <= 0) && a[t] > 0 })).reduce((function(e, t) { return Math.min(e, parseInt(t)) }), 1 / 0), e }), {}) : {} }(n, i) }), [n, i]),
                    d = Object(a.useMemo)((function() {
                        return function(e, t, n, a) {
                            return n && a ? e[n] ? Object.keys(t).filter((function(r) {
                                var i = t[r],
                                    o = e[n][r];
                                if (!o) return !0;
                                var s = a - (i - 1);
                                return !(o.fetchingBlockNumber && o.fetchingBlockNumber >= s) && (!o.blockNumber || o.blockNumber < s)
                            })) : Object.keys(t) : []
                        }(t.callResults, u, i, r)
                    }), [i, t.callResults, u, r]),
                    p = Object(a.useMemo)((function() { return JSON.stringify(d.sort()) }), [d]);
                return Object(a.useEffect)((function() {
                    var t;
                    if (r && i && o) {
                        var n = JSON.parse(p);
                        if (0 !== n.length) {
                            var a, s, u = n.map((function(e) { return Object(I.d)(e) })),
                                d = function(e, t) {
                                    if (t < 1) throw new Error("maxChunkSize must be gte 1");
                                    if (e.length <= t) return [e];
                                    var n = Math.ceil(e.length / t),
                                        a = Math.ceil(e.length / n);
                                    return Object(F.a)(Array(n).keys()).map((function(t) { return e.slice(t * a, t * a + a) }))
                                }(u, 500);
                            if ((null === (t = c.current) || void 0 === t ? void 0 : t.blockNumber) !== r) null === (a = c.current) || void 0 === a || null === (s = a.cancellations) || void 0 === s || s.forEach((function(e) { return e() }));
                            e(Object(I.c)({ calls: u, chainId: i, fetchingBlockNumber: r })), c.current = {
                                blockNumber: r,
                                cancellations: d.map((function(t, a) {
                                    var s = function(e, t) {
                                            var n, a = t.n,
                                                r = t.minWait,
                                                i = t.maxWait,
                                                o = !1;
                                            return {
                                                promise: new Promise(function() {
                                                    var t = Object(v.a)(T.a.mark((function t(s, c) {
                                                        var u;
                                                        return T.a.wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    n = c;
                                                                case 1:
                                                                    return u = void 0, t.prev = 3, t.next = 6, e();
                                                                case 6:
                                                                    return u = t.sent, o || (s(u), o = !0), t.abrupt("break", 24);
                                                                case 11:
                                                                    if (t.prev = 11, t.t0 = t.catch(3), !o) { t.next = 15; break }
                                                                    return t.abrupt("break", 24);
                                                                case 15:
                                                                    if (!(a <= 0) && t.t0 instanceof S) { t.next = 19; break }
                                                                    return c(t.t0), o = !0, t.abrupt("break", 24);
                                                                case 19:
                                                                    a--;
                                                                case 20:
                                                                    return t.next = 22, E(r, i);
                                                                case 22:
                                                                    t.next = 1;
                                                                    break;
                                                                case 24:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), t, null, [
                                                            [3, 11]
                                                        ])
                                                    })));
                                                    return function(e, n) { return t.apply(this, arguments) }
                                                }()),
                                                cancel: function() { o || (o = !0, n(new P)) }
                                            }
                                        }((function() { return function(e, t, n) { return D.apply(this, arguments) }(o, t, r) }), { n: 1 / 0, minWait: 2500, maxWait: 3500 }),
                                        u = s.cancel;
                                    return s.promise.then((function(t) {
                                        var o = t.results,
                                            s = t.blockNumber;
                                        c.current = { cancellations: [], blockNumber: r };
                                        var u = d.slice(0, a).reduce((function(e, t) { return e + t.length }), 0),
                                            l = u + o.length;
                                        e(Object(I.g)({ chainId: i, results: n.slice(u, l).reduce((function(e, t, n) { var a; return e[t] = null !== (a = o[n]) && void 0 !== a ? a : null, e }), {}), blockNumber: s }))
                                    })).catch((function(n) { n instanceof P ? console.debug("Cancelled fetch for blockNumber", r) : (console.error("Failed to fetch multicall chunk", t, i, n), e(Object(I.b)({ calls: t, chainId: i, fetchingBlockNumber: r }))) })), u
                                }))
                            }
                        }
                    }
                }), [i, o, e, p, r]), null
            }
            var L = n(2),
                M = n(37),
                R = n(165),
                U = n(95),
                _ = n(1);

            function q() {
                var e = Object(s.a)(),
                    t = e.library,
                    n = e.chainId,
                    r = Object(x.a)().currentBlock,
                    i = Object(l.b)(),
                    o = Object(l.c)((function(e) { return e.transactions })),
                    c = Object(a.useMemo)((function() { var e; return n && null !== (e = o[n]) && void 0 !== e ? e : {} }), [n, o]),
                    u = Object(R.a)(),
                    d = u.toastError,
                    p = u.toastSuccess;
                return Object(a.useEffect)((function() {
                    n && t && r && Object.keys(c).filter((function(e) { return function(e, t) { if (t.receipt) return !1; if (!t.lastCheckedBlockNumber) return !0; var n = e - t.lastCheckedBlockNumber; if (n < 1) return !1; var a = ((new Date).getTime() - t.addedTime) / 1e3 / 60; return a > 60 ? n > 9 : !(a > 5) || n > 2 }(r, c[e]) })).forEach((function(e) {
                        t.getTransactionReceipt(e).then((function(t) {
                            var a, o;
                            t ? (i(Object(U.d)({ chainId: n, hash: e, receipt: { blockHash: t.blockHash, blockNumber: t.blockNumber, contractAddress: t.contractAddress, from: t.from, status: t.status, to: t.to, transactionHash: t.transactionHash, transactionIndex: t.transactionIndex } })), (1 === t.status ? p : d)("Transaction receipt", Object(_.jsxs)(L.H, { flexDirection: "column", children: [Object(_.jsx)(L.pb, { children: null !== (a = null === (o = c[e]) || void 0 === o ? void 0 : o.summary) && void 0 !== a ? a : "Hash: ".concat(e.slice(0, 8), "...").concat(e.slice(58, 65)) }), n && Object(_.jsx)(L.O, { external: !0, href: Object(M.e)(e, "transaction", n), children: "View on BscScan" })] }))) : i(Object(U.b)({ chainId: n, hash: e, blockNumber: r }))
                        })).catch((function(t) { console.error("failed to check transaction hash: ".concat(e), t) }))
                    }))
                }), [n, t, c, r, i, p, d]), null
            }
            var V, Y, H, W, z, K, G, X, J, $, Q, Z = n(70),
                ee = n(29),
                te = n.n(ee),
                ne = n(146),
                ae = function() {
                    var e = Object(v.a)(T.a.mark((function e() {
                        return T.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function(e) { return Object.defineProperty(window, "BinanceChain", { get: function() { return this.bsc }, set: function(t) { this.bsc = t, e() } }) })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() { return e.apply(this, arguments) }
                }(),
                re = function() {
                    var e = Object(ne.a)().login;
                    Object(a.useEffect)((function() {
                        var t = window.localStorage.getItem(L.yb);
                        if (t) {
                            var n = t === L.D.BSC,
                                a = Reflect.has(window, "BinanceChain");
                            if (n && !a) return void ae().then((function() { return e(t) }));
                            e(t)
                        }
                    }), [e])
                },
                ie = n(237),
                oe = n(166),
                se = n(6),
                ce = n(57),
                ue = (n(430), n(650), n(13)),
                de = n(7),
                le = de.e.div(V || (V = Object(ue.a)(["\n  .react-datepicker-wrapper,\n  .react-datepicker__input-container {\n    display: block;\n  }\n\n  .react-datepicker {\n    background: ", ";\n    border-color: ", ";\n    color: ", ";\n    font-family: 'Russo One', sans-serif;\n  }\n\n  .react-datepicker__header {\n    background: ", ";\n    border-color: ", ";\n  }\n\n  .react-datepicker__current-month,\n  .react-datepicker-time__header,\n  .react-datepicker-year-header,\n  .react-datepicker__day-name,\n  .react-datepicker__day,\n  .react-datepicker__time-name {\n    color: ", ";\n  }\n\n  .react-datepicker__day:hover,\n  .react-datepicker__month-text:hover,\n  .react-datepicker__quarter-text:hover,\n  .react-datepicker__year-text:hover {\n    background-color: ", ";\n  }\n\n  .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle::before,\n  .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle::after {\n    border-bottom-color: ", ";\n  }\n\n  .react-datepicker__day--selected,\n  .react-datepicker__day--in-selecting-range,\n  .react-datepicker__day--in-range,\n  .react-datepicker__month-text--selected,\n  .react-datepicker__month-text--in-selecting-range,\n  .react-datepicker__month-text--in-range,\n  .react-datepicker__quarter-text--selected,\n  .react-datepicker__quarter-text--in-selecting-range,\n  .react-datepicker__quarter-text--in-range,\n  .react-datepicker__year-text--selected,\n  .react-datepicker__year-text--in-selecting-range,\n  .react-datepicker__year-text--in-range {\n    background-color: ", ";\n  }\n\n  .react-datepicker__day--selected:hover,\n  .react-datepicker__day--in-selecting-range:hover,\n  .react-datepicker__day--in-range:hover,\n  .react-datepicker__month-text--selected:hover,\n  .react-datepicker__month-text--in-selecting-range:hover,\n  .react-datepicker__month-text--in-range:hover,\n  .react-datepicker__quarter-text--selected:hover,\n  .react-datepicker__quarter-text--in-selecting-range:hover,\n  .react-datepicker__quarter-text--in-range:hover,\n  .react-datepicker__year-text--selected:hover,\n  .react-datepicker__year-text--in-selecting-range:hover,\n  .react-datepicker__year-text--in-range:hover {\n    background-color: ", ";\n  }\n\n  .react-datepicker__day--keyboard-selected,\n  .react-datepicker__month-text--keyboard-selected,\n  .react-datepicker__quarter-text--keyboard-selected,\n  .react-datepicker__year-text--keyboard-selected {\n    background-color: ", ";\n    color: #ffffff;\n  }\n\n  .react-datepicker__day--keyboard-selected:hover,\n  .react-datepicker__month-text--keyboard-selected:hover,\n  .react-datepicker__quarter-text--keyboard-selected:hover,\n  .react-datepicker__year-text--keyboard-selected:hover {\n    background-color: ", ";\n    color: #ffffff;\n  }\n\n  .react-datepicker__time-container,\n  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {\n    width: 120px;\n  }\n\n  .react-datepicker__header--time {\n    padding: 8px;\n  }\n\n  .react-datepicker__time-container\n    .react-datepicker__time\n    .react-datepicker__time-box\n    ul.react-datepicker__time-list\n    li.react-datepicker__time-list-item {\n    height: auto;\n    padding: 8px;\n  }\n"])), (function(e) { return e.theme.card.background }), (function(e) { return e.theme.colors.cardBorder }), (function(e) { return e.theme.colors.text }), (function(e) { return e.theme.colors.input }), (function(e) { return e.theme.colors.cardBorder }), (function(e) { return e.theme.colors.text }), (function(e) { return e.theme.colors.cardBorder }), (function(e) { return e.theme.colors.cardBorder }), (function(e) { return e.theme.colors.primary }), (function(e) { return e.theme.colors.primaryBright }), (function(e) { return e.theme.colors.secondary }), (function(e) { return e.theme.colors.secondary })),
                pe = function() { return Object(_.jsx)(le, { id: "reactDatePicker" }) },
                be = n(21),
                ye = Object(de.c)(Y || (Y = Object(ue.a)(["\n  * {\n    font-family: 'Russo One', sans-serif;\n  }\n  body {\n    background-color: ", ";\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n"])), (function(e) { return e.theme.colors.background })),
                me = n(101),
                fe = n(140),
                he = function(e) { return [{ label: e("Home"), icon: "HomeIcon", href: "/swap" }, { label: e("Swap"), icon: "TradeIcon", href: "/swap" }, { label: e("More"), icon: "MoreIcon", items: [{ label: e("MasterMind Games"), href: "https://mastermindgames.io/2022/04/25/masterplan/" }, { label: e("PancakeSwap"), href: "https://pancakeswap.finance/swap?outputCurrency=0x6292F56ccE9FB34e21010a1A237a4D908a6474eA" }, { label: e("CoinMarketCap"), href: "https://coinmarketcap.com/" }, { label: e("WhitePaper"), href: "https://mastermindgames.io/wp-content/uploads/2022/04/wp-1650870116581.pdf" }] }] },
                ke = n(80),
                Te = n(171),
                ge = n(111),
                ve = n(62),
                xe = n(83),
                je = n(34),
                we = ["account"],
                Oe = Object(de.e)(L.H)(H || (H = Object(ue.a)(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 16px;\n  position: relative;\n"])), (function(e) { return e.theme.colors.dropdown })),
                Be = de.e.div(W || (W = Object(ue.a)(["\n  flex: 1;\n  position: relative;\n  padding-left: 16px;\n\n  & > input {\n    background: transparent;\n    border: 0;\n    color: ", ";\n    display: block;\n    font-weight: 600;\n    font-size: 16px;\n    padding: 0;\n    width: 100%;\n\n    &:focus {\n      outline: 0;\n    }\n  }\n\n  &:after {\n    background: linear-gradient(\n      to right,\n      ", "00,\n      ", "E6\n    );\n    content: '';\n    height: 100%;\n    pointer-events: none;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 40px;\n  }\n"])), (function(e) { return e.theme.colors.text }), (function(e) { return e.theme.colors.background }), (function(e) { return e.theme.colors.background })),
                Ae = de.e.div(z || (z = Object(ue.a)(["\n  display: ", ";\n  position: absolute;\n  padding: 8px;\n  top: -38px;\n  right: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n  width: 100px;\n"])), (function(e) { return e.isTooltipDisplayed ? "inline-block" : "none" }), (function(e) { return e.theme.colors.contrast }), (function(e) { return e.theme.colors.invertedContrast })),
                Ce = function(e) {
                    var t = e.account,
                        n = Object(ce.a)(e, we),
                        r = Object(a.useState)(!1),
                        i = Object(g.a)(r, 2),
                        o = i[0],
                        s = i[1],
                        c = Object(be.b)().t;

                    function u() { s(!0), setTimeout((function() { s(!1) }), 1e3) }
                    return Object(_.jsxs)(L.j, Object(se.a)(Object(se.a)({ position: "relative" }, n), {}, {
                        children: [Object(_.jsxs)(Oe, {
                            children: [Object(_.jsx)(Be, { title: t, children: Object(_.jsx)("input", { type: "text", readOnly: !0, value: t }) }), Object(_.jsx)(L.M, {
                                variant: "text",
                                onClick: function() {
                                    if (navigator.clipboard && navigator.permissions) navigator.clipboard.writeText(t).then((function() { return u() }));
                                    else if (document.queryCommandSupported("copy")) {
                                        var e = document.createElement("textarea");
                                        e.value = t, document.body.appendChild(e), e.select(), document.execCommand("copy"), document.body.removeChild(e), u()
                                    }
                                },
                                children: Object(_.jsx)(L.E, { color: "primary", width: "24px" })
                            })]
                        }), Object(_.jsx)(Ae, { isTooltipDisplayed: o, children: c("Copied") })]
                    }))
                },
                Ee = function(e) {
                    var t = e.hasLowBnbBalance,
                        n = e.onDismiss,
                        a = Object(be.b)().t,
                        r = Object(ke.c)().account,
                        i = Object(ge.c)(),
                        o = i.balance,
                        s = i.fetchStatus,
                        c = Object(ge.b)(je.a.cake.address),
                        u = c.balance,
                        d = c.fetchStatus,
                        l = Object(ne.a)().logout;
                    return Object(_.jsxs)(_.Fragment, { children: [Object(_.jsx)(L.pb, { color: "secondary", fontSize: "12px", textTransform: "uppercase", fontWeight: "bold", mb: "8px", children: a("Your Address") }), Object(_.jsx)(Ce, { account: r, mb: "24px" }), t && Object(_.jsx)(L.S, { variant: "warning", mb: "24px", children: Object(_.jsxs)(L.j, { children: [Object(_.jsx)(L.pb, { fontWeight: "bold", children: a("BNB Balance Low") }), Object(_.jsx)(L.pb, { as: "p", children: a("You need BNB for transaction fees.") })] }) }), Object(_.jsxs)(L.H, { alignItems: "center", justifyContent: "space-between", children: [Object(_.jsx)(L.pb, { color: "textSubtle", children: a("BNB Balance") }), s !== ge.a.SUCCESS ? Object(_.jsx)(L.lb, { height: "22px", width: "60px" }) : Object(_.jsx)(L.pb, { children: Object(xe.a)(o, 6) })] }), Object(_.jsxs)(L.H, { alignItems: "center", justifyContent: "space-between", mb: "24px", children: [Object(_.jsx)(L.pb, { color: "textSubtle", children: a("CAKE Balance") }), d !== ge.a.SUCCESS ? Object(_.jsx)(L.lb, { height: "22px", width: "60px" }) : Object(_.jsx)(L.pb, { children: Object(xe.f)(u, 18, 3) })] }), Object(_.jsx)(L.H, { alignItems: "center", justifyContent: "end", mb: "24px", children: Object(_.jsx)(L.P, { href: Object(M.e)(r, "address"), children: a("View on BscScan") }) }), Object(_.jsx)(L.m, { variant: "secondary", width: "100%", onClick: function() { n(), l() }, children: a("Disconnect Wallet") })] })
                },
                Pe = n(94),
                Se = n(117),
                Ie = Object(de.e)(L.H)(K || (K = Object(ue.a)(["\n  align-items: center;\n  flex: none;\n  width: 24px;\n"]))),
                Fe = de.e.div(G || (G = Object(ue.a)(["\n  flex: 1;\n  padding: 0 8px;\n"]))),
                De = Object(de.e)(L.O)(X || (X = Object(ue.a)(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  margin-bottom: 16px;\n  width: 100%;\n\n  &:hover {\n    text-decoration: none;\n  }\n"])), (function(e) { return e.theme.colors.text })),
                Ne = function(e) { var t, n; return e.receipt ? 1 === (null === (t = e.receipt) || void 0 === t ? void 0 : t.status) || "undefined" === typeof(null === (n = e.receipt) || void 0 === n ? void 0 : n.status) ? Object(_.jsx)(L.u, { color: "success", width: "24px" }) : Object(_.jsx)(L.i, { color: "failure", width: "24px" }) : Object(_.jsx)(L.jb, { spin: !0, width: "24px" }) },
                Le = function(e) {
                    var t, n = e.txn,
                        a = Object(s.a)().chainId;
                    return n ? Object(_.jsxs)(De, { href: Object(M.e)(n.hash, "transaction", a), external: !0, children: [Object(_.jsx)(Ie, { children: Ne(n) }), Object(_.jsx)(Fe, { children: null !== (t = n.summary) && void 0 !== t ? t : n.hash }), Object(_.jsx)(Ie, { children: Object(_.jsx)(L.eb, { width: "24px", color: "primary" }) })] }) : null
                },
                Me = function() {
                    var e = Object(s.a)().chainId,
                        t = Object(l.b)(),
                        n = Object(be.b)().t,
                        a = Object(Pe.b)(),
                        r = Object(Se.orderBy)(a, "addedTime", "desc");
                    return Object(_.jsxs)(L.j, { minHeight: "120px", children: [Object(_.jsxs)(L.H, { alignItems: "center", justifyContent: "space-between", mb: "24px", children: [Object(_.jsx)(L.pb, { color: "secondary", fontSize: "12px", textTransform: "uppercase", fontWeight: "bold", children: n("Recent Transactions") }), r.length > 0 && Object(_.jsx)(L.m, { scale: "sm", onClick: function() { e && t(Object(U.c)({ chainId: e })) }, variant: "text", px: "0", children: n("Clear all") })] }), r.length > 0 ? r.map((function(e) { return Object(_.jsx)(Le, { txn: e }, e.hash) })) : Object(_.jsx)(L.pb, { textAlign: "center", children: n("No recent transactions") })] })
                };
            ! function(e) { e[e.WALLET_INFO = 0] = "WALLET_INFO", e[e.TRANSACTIONS = 1] = "TRANSACTIONS" }(Q || (Q = {}));
            var Re, Ue, _e = Object(ve.parseUnits)("2", "gwei"),
                qe = Object(de.e)(L.Z)(J || (J = Object(ue.a)(["\n  background: ", ";\n"])), (function(e) { return e.theme.colors.gradients.bubblegum })),
                Ve = de.e.div($ || ($ = Object(ue.a)(["\n  background-color: ", ";\n  border-bottom: 1px solid ", ";\n  padding: 16px 24px;\n"])), (function(e) { return e.theme.colors.dropdown }), (function(e) { return e.theme.colors.cardBorder })),
                Ye = function(e) {
                    var t = e.initialView,
                        n = void 0 === t ? Q.WALLET_INFO : t,
                        r = e.onDismiss,
                        i = Object(a.useState)(n),
                        o = Object(g.a)(i, 2),
                        s = o[0],
                        c = o[1],
                        u = Object(be.b)().t,
                        d = Object(ge.c)(),
                        l = d.balance,
                        p = d.fetchStatus === ge.a.SUCCESS && l.lte(_e);
                    return Object(_.jsxs)(L.Y, { title: u("Welcome!"), minWidth: "320px", children: [Object(_.jsxs)(qe, { children: [Object(_.jsx)(L.bb, { children: Object(_.jsx)(L.J, { children: u("Your Wallet") }) }), Object(_.jsx)(L.M, { variant: "text", onClick: r, children: Object(_.jsx)(L.A, { width: "24px", color: "text" }) })] }), Object(_.jsx)(Ve, { children: Object(_.jsxs)(L.n, { scale: "sm", variant: "subtle", onItemClick: function(e) { c(e) }, activeIndex: s, fullWidth: !0, children: [Object(_.jsx)(L.o, { children: u("Wallet") }), Object(_.jsx)(L.o, { children: u("Transactions") })] }) }), Object(_.jsxs)(L.W, { p: "24px", maxWidth: "400px", width: "100%", children: [s === Q.WALLET_INFO && Object(_.jsx)(Ee, { hasLowBnbBalance: p, onDismiss: r }), s === Q.TRANSACTIONS && Object(_.jsx)(Me, {})] })] })
                },
                He = n(97),
                We = Object(He.a)(),
                ze = de.e.div(Re || (Re = Object(ue.a)(["\n  background-color: ", ";\n  border-radius: 50%;\n  height: 8px;\n  width: 8px;\n"])), (function(e) { return e.theme.colors.failure })),
                Ke = function(e) {
                    var t = e.isLoading,
                        n = e.hasProfile,
                        a = Object(be.b)().t,
                        r = function() { We.push("/swap") };
                    return t ? Object(_.jsx)(L.tb, { children: Object(_.jsx)(L.lb, { height: "24px", width: "35%" }) }) : n ? Object(_.jsx)(L.tb, { as: "button", onClick: r, children: a("Your Profile") }) : Object(_.jsx)(L.tb, { as: "button", onClick: r, children: Object(_.jsxs)(L.H, { alignItems: "center", justifyContent: "space-between", width: "100%", children: [a("Exchange MGT"), Object(_.jsx)(ze, {})] }) })
                },
                Ge = function(e) {
                    var t = e.hasLowBnbBalance,
                        n = e.onPresentWalletModal,
                        a = Object(be.b)().t;
                    return Object(_.jsx)(L.tb, { as: "button", onClick: n, children: Object(_.jsxs)(L.H, { alignItems: "center", justifyContent: "space-between", width: "100%", children: [a("Wallet"), t && Object(_.jsx)(L.wb, { color: "warning", width: "24px" })] }) })
                },
                Xe = function() {
                    var e = Object(be.b)().t,
                        t = Object(ke.c)().account,
                        n = Object(ne.a)().logout,
                        a = Object(ge.c)(),
                        r = a.balance,
                        i = a.fetchStatus,
                        o = Object(oe.b)(),
                        s = o.isInitialized,
                        c = o.isLoading,
                        u = o.profile,
                        d = Object(L.Cb)(Object(_.jsx)(Ye, { initialView: Q.WALLET_INFO })),
                        l = Object(g.a)(d, 1)[0],
                        p = Object(L.Cb)(Object(_.jsx)(Ye, { initialView: Q.TRANSACTIONS })),
                        b = Object(g.a)(p, 1)[0],
                        y = s && !!u,
                        m = u && u.nft ? "/images/nfts/".concat(u.nft.images.sm) : void 0,
                        f = i === ge.a.SUCCESS && r.lte(_e);
                    return t ? Object(_.jsxs)(L.rb, { account: t, avatarSrc: m, children: [Object(_.jsx)(Ge, { hasLowBnbBalance: f, onPresentWalletModal: l }), Object(_.jsx)(L.tb, { as: "button", onClick: b, children: e("Transactions") }), Object(_.jsx)(L.sb, {}), Object(_.jsx)(Ke, { isLoading: c, hasProfile: y }), Object(_.jsx)(L.sb, {}), Object(_.jsx)(L.tb, { as: "button", onClick: n, children: Object(_.jsxs)(L.H, { alignItems: "center", justifyContent: "space-between", width: "100%", children: [e("Disconnect"), Object(_.jsx)(L.Q, {})] }) })] }) : Object(_.jsx)(Te.a, { scale: "sm" })
                },
                Je = n(268),
                $e = function(e) {
                    var t, n = Object(fe.a)(),
                        a = n.isDark,
                        r = n.toggleTheme,
                        i = Object(ie.b)(),
                        o = Object(oe.b)().profile,
                        s = Object(be.b)(),
                        c = s.currentLanguage,
                        u = s.setLanguage,
                        d = s.t;
                    return Object(_.jsx)(L.R, Object(se.a)({ userMenu: Object(_.jsx)(Xe, {}), globalMenu: Object(_.jsx)(Je.a, {}), isDark: a, toggleTheme: r, currentLang: c.code, langs: me.b, setLang: u, cakePriceUsd: i.toNumber(), links: he(d), profile: { username: null === o || void 0 === o ? void 0 : o.username, image: (null === o || void 0 === o ? void 0 : o.nft) ? "/images/nfts/".concat(null === (t = o.nft) || void 0 === t ? void 0 : t.images.sm) : void 0, profileLink: "/profile", noProfileLink: "/profile", showPip: !(null === o || void 0 === o ? void 0 : o.username) } }, e))
                },
                Qe = n(18),
                Ze = function(e) {
                    Object(B.a)(n, e);
                    var t = Object(A.a)(n);

                    function n(e) { var a; return Object(O.a)(this, n), (a = t.call(this, e)).state = { hasError: !1 }, a }
                    return Object(Qe.a)(n, [{
                        key: "componentDidCatch",
                        value: function(e) {
                            var t, n = "ChunkLoadError" === e.name,
                                a = "CSS_CHUNK_LOAD_FAILED" === e.code,
                                r = n || a,
                                i = !!(null === (t = window.history.state) || void 0 === t ? void 0 : t.isRecoveringFromChunkError);
                            if (r && !i) { var o = Object(se.a)(Object(se.a)({}, window.history.state), {}, { isRecoveringFromChunkError: !0 }); return window.history.replaceState(o, ""), void window.location.reload() }
                            throw e
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state.hasError,
                                t = this.props.fallback;
                            return e ? t : Object(_.jsx)(a.Suspense, Object(se.a)({}, this.props))
                        }
                    }], [{ key: "getDerivedStateFromError", value: function() { return { hasError: !0 } } }]), n
                }(r.a.Component),
                et = n(184),
                tt = n(390),
                nt = function(e) {
                    var t = Object(a.useState)(!1),
                        n = Object(g.a)(t, 2),
                        r = n[0],
                        i = n[1],
                        o = Object(a.useCallback)((function() { return i(!0) }), [i]);
                    return Object(L.Bb)(o), r ? Object(_.jsx)("div", { onAnimationEnd: function() { return i(!1) }, children: Object(_.jsx)(L.G, Object(se.a)({}, e)) }) : null
                },
                at = r.a.memo(nt),
                rt = n(17),
                it = n(4),
                ot = n(163),
                st = n(25),
                ct = n(32),
                ut = n(53),
                dt = n(52),
                lt = de.e.div(Ue || (Ue = Object(ue.a)(["\n  padding: 8px 0;\n  width: 100%;\n  max-width: 400px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: ", ";\n  background-color: ", ";\n  text-align: center;\n"])), (function(e) { return e.theme.colors.text }), (function(e) { return e.theme.colors.invertedContrast })),
                pt = function(e) {
                    var t = e.currencies,
                        n = e.onDismiss,
                        a = Object(s.a)().chainId,
                        r = a && t ? t.map((function(e) { return Object(dt.b)(e, a) })) : [],
                        i = Object(p.h)();
                    return Object(_.jsx)(L.U, { title: "Unsupported Assets", maxWidth: "420px", onDismiss: n, children: Object(_.jsxs)(ct.a, { gap: "lg", children: [r.map((function(e) { var t; return e && i && Object.keys(i).includes(e.address) && Object(_.jsxs)(ct.a, { gap: "10px", children: [Object(_.jsxs)(st.a, { gap: "5px", align: "center", children: [Object(_.jsx)(ut.a, { currency: e, size: "24px" }), Object(_.jsx)(L.pb, { children: e.symbol })] }), a && Object(_.jsx)(L.O, { external: !0, small: !0, color: "primaryDark", href: Object(M.e)(e.address, "address", a), children: e.address })] }, null === (t = e.address) || void 0 === t ? void 0 : t.concat("not-supported")) })), Object(_.jsx)(ct.a, { gap: "lg", children: Object(_.jsx)(L.pb, { children: "Some assets are not available through this interface because they may not work well with our smart contract or we are unable to allow trading for legal reasons." }) })] }) })
                };

            function bt(e) {
                var t = e.currencies,
                    n = Object(L.Cb)(Object(_.jsx)(pt, { currencies: t })),
                    a = Object(g.a)(n, 1)[0];
                return Object(_.jsx)(lt, { children: Object(_.jsx)(L.m, { variant: "text", onClick: a, children: "Read more about unsupported assets" }) })
            }
            var yt, mt, ft, ht, kt = je.a.bondly,
                Tt = { safemoon: je.a.safemoon, bondly: kt },
                gt = n(162),
                vt = de.e.div(yt || (yt = Object(ue.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ", ";\n  z-index: 1;\n  width: 100%;\n"])), (function(e) { return e.theme.colors.backgroundAlt })),
                xt = de.e.div(mt || (mt = Object(ue.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ", ";\n  transition: border-color 300ms ", ",\n    color 500ms ", ";\n  background-color: ", ";\n"])), (function(e) {
                    var t = e.error,
                        n = e.theme;
                    return t ? n.colors.failure : n.colors.background
                }), (function(e) { return e.error ? "step-end" : "step-start" }), (function(e) { return e.error ? "step-end" : "step-start" }), (function(e) { return e.theme.colors.backgroundAlt })),
                jt = de.e.div(ft || (ft = Object(ue.a)(["\n  flex: 1;\n  padding: 1rem;\n"]))),
                wt = de.e.input(ht || (ht = Object(ue.a)(["\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: ", ";\n  transition: color 300ms ", ";\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ", ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"])), (function(e) { return e.theme.colors.backgroundAlt }), (function(e) { return e.error ? "step-end" : "step-start" }), (function(e) {
                    var t = e.error,
                        n = e.theme;
                    return t ? n.colors.failure : n.colors.primary
                }), (function(e) { return e.theme.colors.textDisabled }), (function(e) { return e.theme.colors.textDisabled }));

            function Ot(e) {
                var t = e.id,
                    n = e.value,
                    r = e.onChange,
                    i = Object(s.a)().chainId,
                    o = Object(be.b)().t,
                    c = Object(gt.a)(n),
                    u = c.address,
                    d = c.loading,
                    l = c.name,
                    p = Object(a.useCallback)((function(e) {
                        var t = e.target.value.replace(/\s+/g, "");
                        r(t)
                    }), [r]),
                    b = Boolean(n.length > 0 && !d && !u);
                return Object(_.jsx)(vt, { id: t, children: Object(_.jsx)(xt, { error: b, children: Object(_.jsx)(jt, { children: Object(_.jsxs)(ct.a, { gap: "md", children: [Object(_.jsxs)(st.b, { children: [Object(_.jsx)(L.pb, { children: o("Recipient") }), u && i && Object(_.jsxs)(L.O, { external: !0, small: !0, href: Object(M.e)(null !== l && void 0 !== l ? l : u, "address", i), children: ["(", o("View on BscScan"), ")"] })] }), Object(_.jsx)(wt, { className: "recipient-address-input", type: "text", autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", spellCheck: "false", placeholder: o("Wallet Address or ENS name"), error: b, pattern: "^(0x[a-fA-F0-9]{40})$", onChange: p, value: n })] }) }) }) })
            }
            var Bt, At, Ct, Et = n(100),
                Pt = n(257),
                St = de.e.div(Bt || (Bt = Object(ue.a)(["\n  width: 100%;\n"]))),
                It = Object(de.e)(ct.a)(At || (At = Object(ue.a)(["\n  padding: 24px;\n"]))),
                Ft = Object(de.e)(ct.b)(Ct || (Ct = Object(ue.a)(["\n  padding: 24px 0;\n"])));

            function Dt(e) {
                var t = e.pendingText,
                    n = Object(be.b)().t;
                return Object(_.jsxs)(St, { children: [Object(_.jsx)(Ft, { children: Object(_.jsx)(L.mb, {}) }), Object(_.jsxs)(ct.a, { gap: "12px", justify: "center", children: [Object(_.jsx)(L.pb, { fontSize: "20px", children: n("Waiting For Confirmation") }), Object(_.jsx)(ct.a, { gap: "12px", justify: "center", children: Object(_.jsx)(L.pb, { bold: !0, small: !0, textAlign: "center", children: t }) }), Object(_.jsx)(L.pb, { small: !0, color: "textSubtle", textAlign: "center", children: n("Confirm this transaction in your wallet") })] })] })
            }

            function Nt(e) {
                var t, n = e.onDismiss,
                    a = e.chainId,
                    r = e.hash,
                    i = e.currencyToAdd,
                    o = Object(s.a)().library,
                    c = Object(be.b)().t,
                    u = Object(dt.b)(i, a);
                return Object(_.jsx)(St, { children: Object(_.jsxs)(It, { children: [Object(_.jsx)(Ft, { children: Object(_.jsx)(L.f, { strokeWidth: .5, width: "90px", color: "primary" }) }), Object(_.jsxs)(ct.a, { gap: "12px", justify: "center", children: [Object(_.jsx)(L.pb, { fontSize: "20px", children: c("Transaction Submitted") }), a && r && Object(_.jsx)(L.O, { external: !0, small: !0, href: Object(M.e)(r, "transaction", a), children: c("View on BscScan") }), i && (null === o || void 0 === o || null === (t = o.provider) || void 0 === t ? void 0 : t.isMetaMask) && Object(_.jsx)(L.m, { variant: "tertiary", mt: "12px", width: "fit-content", onClick: function() { return Object(Pt.a)(u.address, u.symbol, u.decimals) }, children: Object(_.jsxs)(st.c, { children: [c("Add %asset% to Metamask", { asset: i.symbol }), Object(_.jsx)(L.T, { width: "16px", ml: "6px" })] }) }), Object(_.jsx)(L.m, { onClick: n, mt: "20px", children: c("Close") })] })] }) })
            }

            function Lt(e) {
                var t = e.bottomContent,
                    n = e.topContent;
                return Object(_.jsxs)(St, { children: [Object(_.jsx)(L.j, { children: n() }), Object(_.jsx)(L.j, { children: t() })] })
            }

            function Mt(e) {
                var t = e.message,
                    n = e.onDismiss,
                    a = Object(be.b)().t;
                return Object(_.jsxs)(St, { children: [Object(_.jsxs)(ct.a, { justify: "center", children: [Object(_.jsx)(L.F, { color: "failure", width: "64px" }), Object(_.jsx)(L.pb, { color: "failure", style: { textAlign: "center", width: "85%" }, children: t })] }), Object(_.jsx)(L.H, { justifyContent: "center", pt: "24px", children: Object(_.jsx)(L.m, { onClick: n, children: a("Dismiss") }) })] })
            }
            var Rt, Ut, _t, qt, Vt, Yt, Ht, Wt, zt, Kt = function(e) {
                    var t = e.title,
                        n = e.onDismiss,
                        r = e.customOnDismiss,
                        i = e.attemptingTxn,
                        o = e.hash,
                        c = e.pendingText,
                        u = e.content,
                        d = e.currencyToAdd,
                        l = Object(s.a)().chainId,
                        p = Object(a.useCallback)((function() { r && r(), n() }), [r, n]);
                    return l ? Object(_.jsx)(L.U, { title: t, headerBackground: "gradients.cardHeader", onDismiss: p, children: i ? Object(_.jsx)(Dt, { pendingText: c }) : o ? Object(_.jsx)(Nt, { chainId: l, hash: o, onDismiss: n, currencyToAdd: d }) : u() }) : null
                },
                Gt = n(27),
                Xt = n(78),
                Jt = n(69),
                $t = de.e.div(Rt || (Rt = Object(ue.a)(["\n  position: relative;\n  padding: 1rem;\n"]))),
                Qt = de.e.div(Ut || (Ut = Object(ue.a)(["\n  padding: 2px;\n\n  ", "\n"])), (function(e) { return e.clickable ? Object(de.d)(_t || (_t = Object(ue.a)(["\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        "]))) : null })),
                Zt = Object(de.e)(L.pb)(qt || (qt = Object(ue.a)(["\n  color: ", ";\n"])), (function(e) {
                    var t = e.theme,
                        n = e.severity;
                    return 3 === n || 4 === n ? t.colors.failure : 2 === n ? t.colors.warning : 1 === n ? t.colors.text : t.colors.success
                })),
                en = de.e.button(Vt || (Vt = Object(ue.a)(["\n  height: 22px;\n  width: 22px;\n  background-color: ", ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ", ";\n  }\n  :focus {\n    background-color: ", ";\n    outline: none;\n  }\n"])), (function(e) { return e.theme.colors.background }), (function(e) { return e.theme.colors.text }), (function(e) { return e.theme.colors.dropdown }), (function(e) { return e.theme.colors.dropdown })),
                tn = Object(de.e)(L.pb).attrs({ ellipsis: !0 })(Yt || (Yt = Object(ue.a)(["\n  width: 220px;\n"]))),
                nn = de.e.div(Ht || (Ht = Object(ue.a)(["\n  background-color: ", ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ", ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n"])), (function(e) { var t = e.theme; return "".concat(t.colors.failure, "33") }), (function(e) { return e.theme.colors.failure })),
                an = de.e.div(Wt || (Wt = Object(ue.a)(["\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n"])), (function(e) { var t = e.theme; return "".concat(t.colors.failure, "33") }));

            function rn(e) { var t = e.error; return Object(_.jsxs)(nn, { children: [Object(_.jsx)(an, { children: Object(_.jsx)(L.F, { width: "24px" }) }), Object(_.jsx)("p", { children: t })] }) }
            var on, sn = Object(de.e)(ct.a)(zt || (zt = Object(ue.a)(["\n  background-color: ", ";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n"])), (function(e) { var t = e.theme; return "".concat(t.colors.warning, "33") }));

            function cn(e) { var t = e.priceImpact; return Object(_.jsx)(Zt, { fontSize: "14px", severity: Object(Xt.d)(t), children: t ? t.lessThan(c.p) ? "<0.01%" : "".concat(t.toFixed(2), "%") : "-" }) }
            var un = Object(de.e)(ct.a)(on || (on = Object(ue.a)(["\n  margin-top: 24px;\n  padding: 16px;\n  border-radius: ", ";\n  border: 1px solid ", ";\n  background-color: ", ";\n"])), (function(e) { return e.theme.radii.default }), (function(e) { return e.theme.colors.cardBorder }), (function(e) { return e.theme.colors.background }));

            function dn(e) {
                var t, n, r, i, o = e.trade,
                    s = e.onConfirm,
                    c = e.allowedSlippage,
                    u = e.swapErrorMessage,
                    d = e.disabledConfirm,
                    l = Object(be.b)().t,
                    p = Object(a.useState)(!1),
                    b = Object(g.a)(p, 2),
                    y = b[0],
                    m = b[1],
                    f = Object(a.useMemo)((function() { return Object(Xt.a)(o, c) }), [c, o]),
                    h = Object(a.useMemo)((function() { return Object(Xt.b)(o) }), [o]),
                    k = h.priceImpactWithoutFee,
                    T = h.realizedLPFee,
                    v = Object(Xt.d)(k);
                return Object(_.jsxs)(_.Fragment, { children: [Object(_.jsxs)(un, { children: [Object(_.jsxs)(st.b, { align: "center", children: [Object(_.jsx)(L.pb, { fontSize: "14px", children: l("Price") }), Object(_.jsxs)(L.pb, { fontSize: "14px", style: { justifyContent: "center", alignItems: "center", display: "flex", textAlign: "right", paddingLeft: "10px" }, children: [Object(Xt.c)(o, y), Object(_.jsx)(en, { onClick: function() { return m(!y) }, children: Object(_.jsx)(L.g, { width: "14px" }) })] })] }), Object(_.jsxs)(st.b, { children: [Object(_.jsxs)(st.c, { children: [Object(_.jsx)(L.pb, { fontSize: "14px", children: o.tradeType === it.m.EXACT_INPUT ? l("Minimum received") : l("Maximum sold") }), Object(_.jsx)(Jt.a, { text: l("Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."), ml: "4px" })] }), Object(_.jsxs)(st.c, { children: [Object(_.jsx)(L.pb, { fontSize: "14px", children: o.tradeType === it.m.EXACT_INPUT ? null !== (t = null === (n = f[Gt.a.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(4)) && void 0 !== t ? t : "-" : null !== (r = null === (i = f[Gt.a.INPUT]) || void 0 === i ? void 0 : i.toSignificant(4)) && void 0 !== r ? r : "-" }), Object(_.jsx)(L.pb, { fontSize: "14px", marginLeft: "4px", children: o.tradeType === it.m.EXACT_INPUT ? o.outputAmount.currency.symbol : o.inputAmount.currency.symbol })] })] }), Object(_.jsxs)(st.b, { children: [Object(_.jsxs)(st.c, { children: [Object(_.jsx)(L.pb, { fontSize: "14px", children: l("Price Impact") }), Object(_.jsx)(Jt.a, { text: l("The difference between the market price and your price due to trade size."), ml: "4px" })] }), Object(_.jsx)(cn, { priceImpact: k })] }), Object(_.jsxs)(st.b, { children: [Object(_.jsxs)(st.c, { children: [Object(_.jsx)(L.pb, { fontSize: "14px", children: l("Liquidity Provider Fee") }), Object(_.jsx)(Jt.a, { text: Object(_.jsxs)(_.Fragment, { children: [Object(_.jsx)(L.pb, { mb: "12px", children: l("For each trade a %amount% fee is paid", { amount: "0.25%" }) }), Object(_.jsxs)(L.pb, { children: ["- ", l("%amount% to LP token holders", { amount: "0.17%" })] }), Object(_.jsxs)(L.pb, { children: ["- ", l("%amount% to the Treasury", { amount: "0.03%" })] }), Object(_.jsxs)(L.pb, { children: ["- ", l("%amount% towards CAKE buyback and burn", { amount: "0.05%" })] })] }), ml: "4px" })] }), Object(_.jsx)(L.pb, { fontSize: "14px", children: T ? "".concat(null === T || void 0 === T ? void 0 : T.toSignificant(6), " ").concat(o.inputAmount.currency.symbol) : "-" })] })] }), Object(_.jsxs)(st.a, { children: [Object(_.jsx)(L.m, { variant: v > 2 ? "danger" : "primary", onClick: s, disabled: d, mt: "12px", id: "confirm-swap-or-send", width: "100%", children: l(v > 2 ? "Swap Anyway" : "Confirm Swap") }), u ? Object(_.jsx)(rn, { error: u }) : null] })] })
            }
            var ln = n(142);

            function pn(e) {
                var t, n, r = e.trade,
                    i = e.allowedSlippage,
                    o = e.recipient,
                    s = e.showAcceptChanges,
                    c = e.onAcceptChanges,
                    u = Object(be.b)().t,
                    d = Object(a.useMemo)((function() { return Object(Xt.a)(r, i) }), [r, i]),
                    l = Object(a.useMemo)((function() { return Object(Xt.b)(r) }), [r]).priceImpactWithoutFee,
                    p = Object(Xt.d)(l),
                    b = r.tradeType === it.m.EXACT_INPUT ? null === (t = d[Gt.a.OUTPUT]) || void 0 === t ? void 0 : t.toSignificant(6) : null === (n = d[Gt.a.INPUT]) || void 0 === n ? void 0 : n.toSignificant(6),
                    y = r.tradeType === it.m.EXACT_INPUT ? r.outputAmount.currency.symbol : r.inputAmount.currency.symbol,
                    m = (r.tradeType === it.m.EXACT_INPUT ? u("Output is estimated. You will receive at least %amount% %symbol% or the transaction will revert.", { amount: b, symbol: y }) : u("Input is estimated. You will sell at most %amount% %symbol% or the transaction will revert.", { amount: b, symbol: y })).split("".concat(b, " ").concat(y)),
                    f = Object(g.a)(m, 2),
                    h = f[0],
                    k = f[1],
                    T = o ? Object(ln.a)(o) : "",
                    v = u("Output will be sent to %recipient%", { recipient: T }).split(T),
                    x = Object(g.a)(v, 2),
                    j = x[0],
                    w = x[1];
                return Object(_.jsxs)(ct.a, { gap: "md", children: [Object(_.jsxs)(st.b, { align: "flex-end", children: [Object(_.jsxs)(st.c, { gap: "0px", children: [Object(_.jsx)(ut.a, { currency: r.inputAmount.currency, size: "24px", style: { marginRight: "12px" } }), Object(_.jsx)(tn, { fontSize: "24px", color: s && r.tradeType === it.m.EXACT_OUTPUT ? "primary" : "text", children: r.inputAmount.toSignificant(6) })] }), Object(_.jsx)(st.c, { gap: "0px", children: Object(_.jsx)(L.pb, { fontSize: "24px", ml: "10px", children: r.inputAmount.currency.symbol }) })] }), Object(_.jsx)(st.c, { children: Object(_.jsx)(L.d, { width: "16px", ml: "4px" }) }), Object(_.jsxs)(st.b, { align: "flex-end", children: [Object(_.jsxs)(st.c, { gap: "0px", children: [Object(_.jsx)(ut.a, { currency: r.outputAmount.currency, size: "24px", style: { marginRight: "12px" } }), Object(_.jsx)(tn, { fontSize: "24px", color: p > 2 ? "failure" : s && r.tradeType === it.m.EXACT_INPUT ? "primary" : "text", children: r.outputAmount.toSignificant(6) })] }), Object(_.jsx)(st.c, { gap: "0px", children: Object(_.jsx)(L.pb, { fontSize: "24px", ml: "10px", children: r.outputAmount.currency.symbol }) })] }), s ? Object(_.jsx)(sn, { justify: "flex-start", gap: "0px", children: Object(_.jsxs)(st.b, { children: [Object(_.jsxs)(st.c, { children: [Object(_.jsx)(L.F, { mr: "8px" }), Object(_.jsxs)(L.pb, { bold: !0, children: [" ", u("Price Updated")] })] }), Object(_.jsx)(L.m, { onClick: c, children: u("Accept") })] }) }) : null, Object(_.jsx)(ct.a, { justify: "flex-start", gap: "sm", style: { padding: "24px 0 0 0px" }, children: Object(_.jsxs)(L.pb, { small: !0, color: "textSubtle", textAlign: "left", style: { width: "100%" }, children: [h, Object(_.jsxs)("b", { children: [b, " ", y] }), k] }) }), null !== o ? Object(_.jsx)(ct.a, { justify: "flex-start", gap: "sm", style: { padding: "12px 0 0 0px" }, children: Object(_.jsxs)(L.pb, { color: "textSubtle", children: [j, Object(_.jsx)("b", { title: o, children: T }), w] }) }) : null] })
            }
            var bn, yn, mn, fn, hn, kn, Tn = function(e) {
                    var t, n, r, i, o, s, c, u, d, l, p = e.trade,
                        b = e.originalTrade,
                        y = e.onAcceptChanges,
                        m = e.allowedSlippage,
                        f = e.onConfirm,
                        h = e.onDismiss,
                        k = e.customOnDismiss,
                        T = e.recipient,
                        g = e.swapErrorMessage,
                        v = e.attemptingTxn,
                        x = e.txHash,
                        j = Object(a.useMemo)((function() { return Boolean(p && b && (t = b, (e = p).tradeType !== t.tradeType || !Object(it.o)(e.inputAmount.currency, t.inputAmount.currency) || !e.inputAmount.equalTo(t.inputAmount) || !Object(it.o)(e.outputAmount.currency, t.outputAmount.currency) || !e.outputAmount.equalTo(t.outputAmount))); var e, t }), [b, p]),
                        w = Object(be.b)().t,
                        O = Object(a.useCallback)((function() { return p ? Object(_.jsx)(pn, { trade: p, allowedSlippage: m, recipient: T, showAcceptChanges: j, onAcceptChanges: y }) : null }), [m, y, T, j, p]),
                        B = Object(a.useCallback)((function() { return p ? Object(_.jsx)(dn, { onConfirm: f, trade: p, disabledConfirm: j, swapErrorMessage: g, allowedSlippage: m }) : null }), [m, f, j, g, p]),
                        A = w("Swapping %amountA% %symbolA% for %amountB% %symbolB%", { amountA: null !== (t = null === p || void 0 === p || null === (n = p.inputAmount) || void 0 === n ? void 0 : n.toSignificant(6)) && void 0 !== t ? t : "", symbolA: null !== (r = null === p || void 0 === p || null === (i = p.inputAmount) || void 0 === i || null === (o = i.currency) || void 0 === o ? void 0 : o.symbol) && void 0 !== r ? r : "", amountB: null !== (s = null === p || void 0 === p || null === (c = p.outputAmount) || void 0 === c ? void 0 : c.toSignificant(6)) && void 0 !== s ? s : "", symbolB: null !== (u = null === p || void 0 === p || null === (d = p.outputAmount) || void 0 === d || null === (l = d.currency) || void 0 === l ? void 0 : l.symbol) && void 0 !== u ? u : "" }),
                        C = Object(a.useCallback)((function() { return g ? Object(_.jsx)(Mt, { onDismiss: h, message: g }) : Object(_.jsx)(Lt, { topContent: O, bottomContent: B }) }), [h, B, O, g]);
                    return Object(_.jsx)(Kt, { title: w("Confirm Swap"), onDismiss: h, customOnDismiss: k, attemptingTxn: v, hash: x, content: C, pendingText: A, currencyToAdd: null === p || void 0 === p ? void 0 : p.outputAmount.currency })
                },
                gn = n(88),
                vn = n(392),
                xn = ["value", "onUserInput", "placeholder"],
                jn = de.e.input(bn || (bn = Object(ue.a)(["\n  color: ", ";\n  width: 0;\n  position: relative;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: transparent;\n  font-size: 16px;\n  text-align: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"])), (function(e) {
                    var t = e.error,
                        n = e.theme;
                    return t ? n.colors.failure : n.colors.text
                }), (function(e) { var t = e.align; return t && t }), (function(e) { return e.theme.colors.textSubtle })),
                wn = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
                On = r.a.memo((function(e) {
                    var t = e.value,
                        n = e.onUserInput,
                        a = e.placeholder,
                        r = Object(ce.a)(e, xn),
                        i = Object(be.b)().t;
                    return Object(_.jsx)(jn, Object(se.a)(Object(se.a)({}, r), {}, {
                        value: t,
                        onChange: function(e) {
                            var t;
                            ("" === (t = e.target.value.replace(/,/g, ".")) || wn.test(Object(M.d)(t))) && n(t)
                        },
                        inputMode: "decimal",
                        title: i("Token Amount"),
                        autoComplete: "off",
                        autoCorrect: "off",
                        type: "text",
                        pattern: "^[0-9]*[.,]?[0-9]*$",
                        placeholder: a || "0.0",
                        minLength: 1,
                        maxLength: 79,
                        spellCheck: "false"
                    }))
                })),
                Bn = de.e.div(yn || (yn = Object(ue.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: ", ";\n"])), (function(e) { return e.selected ? "0.75rem 0.5rem 0.75rem 1rem" : "0.75rem 0.75rem 0.75rem 1rem" })),
                An = Object(de.e)(L.m).attrs({ variant: "text", scale: "sm" })(mn || (mn = Object(ue.a)(["\n  padding: 0 0.5rem;\n"]))),
                Cn = de.e.div(fn || (fn = Object(ue.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  color: ", ";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n"])), (function(e) { return e.theme.colors.text })),
                En = de.e.div(hn || (hn = Object(ue.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: ", ";\n  background-color: ", ";\n  z-index: 1;\n"])), (function(e) { return e.hideInput ? "8px" : "20px" }), (function(e) { return e.theme.colors.background })),
                Pn = de.e.div(kn || (kn = Object(ue.a)(["\n  border-radius: 16px;\n  background-color: ", ";\n  box-shadow: ", ";\n"])), (function(e) { return e.theme.colors.input }), (function(e) { return e.theme.shadows.inset }));

            function Sn(e) {
                var t, n = e.value,
                    a = e.onUserInput,
                    r = e.onMax,
                    i = e.showMaxButton,
                    o = e.label,
                    c = e.onCurrencySelect,
                    u = e.currency,
                    d = e.disableCurrencySelect,
                    l = void 0 !== d && d,
                    p = e.hideBalance,
                    b = void 0 !== p && p,
                    y = e.pair,
                    m = void 0 === y ? null : y,
                    f = e.hideInput,
                    h = void 0 !== f && f,
                    k = e.otherCurrency,
                    T = e.id,
                    v = e.showCommonBases,
                    x = Object(s.a)().account,
                    j = Object(gn.b)(null !== x && void 0 !== x ? x : void 0, null !== u && void 0 !== u ? u : void 0),
                    w = Object(be.b)().t,
                    O = o || w("Input"),
                    B = Object(L.Cb)(Object(_.jsx)(vn.a, { onCurrencySelect: c, selectedCurrency: u, otherSelectedCurrency: k, showCommonBases: v })),
                    A = Object(g.a)(B, 1)[0];
                return Object(_.jsx)(En, { id: T, children: Object(_.jsxs)(Pn, { hideInput: h, children: [!h && Object(_.jsx)(Cn, { children: Object(_.jsxs)(st.b, { children: [Object(_.jsx)(L.pb, { fontSize: "14px", children: O }), x && Object(_.jsx)(L.pb, { onClick: r, fontSize: "14px", style: { display: "inline", cursor: "pointer" }, children: !b && u ? w("Balance: %balance%", { balance: null !== (t = null === j || void 0 === j ? void 0 : j.toSignificant(6)) && void 0 !== t ? t : w("Loading") }) : " -" })] }) }), Object(_.jsxs)(Bn, { style: h ? { padding: "0", borderRadius: "8px" } : {}, selected: l, children: [!h && Object(_.jsxs)(_.Fragment, { children: [Object(_.jsx)(On, { className: "token-amount-input", value: n, onUserInput: function(e) { a(e) } }), x && u && i && "To" !== o && Object(_.jsx)(L.m, { onClick: r, scale: "sm", variant: "text", children: "MAX" })] }), Object(_.jsx)(An, { selected: !!u, className: "open-currency-select-button", onClick: function() { l || A() }, children: Object(_.jsxs)(L.H, { alignItems: "center", justifyContent: "space-between", children: [m ? Object(_.jsx)(ut.b, { currency0: m.token0, currency1: m.token1, size: 16, margin: !0 }) : u ? Object(_.jsx)(ut.a, { currency: u, size: "24px", style: { marginRight: "8px" } }) : null, m ? Object(_.jsxs)(L.pb, { id: "pair", children: [null === m || void 0 === m ? void 0 : m.token0.symbol, ":", null === m || void 0 === m ? void 0 : m.token1.symbol] }) : Object(_.jsx)(L.pb, { id: "pair", children: (u && u.symbol && u.symbol.length > 20 ? "".concat(u.symbol.slice(0, 4), "...").concat(u.symbol.slice(u.symbol.length - 5, u.symbol.length)) : null === u || void 0 === u ? void 0 : u.symbol) || w("Select a currency") }), !l && Object(_.jsx)(L.w, {})] }) })] })] }) })
            }

            function In(e) { return null !== e && void 0 !== e }
            var Fn = function(e) {
                    return function(e, t) {
                        var n = Object(a.useState)(t && t(e) ? e : void 0),
                            r = Object(g.a)(n, 2),
                            i = r[0],
                            o = r[1];
                        return Object(a.useEffect)((function() { o((function(n) { return !t || t(e) ? e : n })) }), [t, e]), i
                    }(e, In)
                },
                Dn = n(45),
                Nn = Object(a.memo)((function(e) {
                    var t = e.trade;
                    return Object(_.jsx)(L.H, {
                        flexWrap: "wrap",
                        width: "100%",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        children: t.route.path.map((function(e, t, n) {
                            var r = t === n.length - 1,
                                i = Object(dt.a)(e);
                            return Object(_.jsxs)(a.Fragment, { children: [Object(_.jsx)(L.H, { alignItems: "end", children: Object(_.jsx)(L.pb, { fontSize: "14px", ml: "0.125rem", mr: "0.125rem", children: i.symbol }) }), !r && Object(_.jsx)(L.y, { width: "12px" })] }, t)
                        }))
                    })
                }));

            function Ln(e) {
                var t, n, a, r, i = e.trade,
                    o = e.allowedSlippage,
                    s = Object(be.b)().t,
                    c = Object(Xt.b)(i),
                    u = c.priceImpactWithoutFee,
                    d = c.realizedLPFee,
                    l = i.tradeType === it.m.EXACT_INPUT,
                    p = Object(Xt.a)(i, o);
                return Object(_.jsxs)(ct.a, { style: { padding: "0 16px" }, children: [Object(_.jsxs)(st.b, { children: [Object(_.jsxs)(st.c, { children: [Object(_.jsx)(L.pb, { fontSize: "14px", color: "textSubtle", children: s(l ? "Minimum received" : "Maximum sold") }), Object(_.jsx)(Jt.a, { text: s("Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."), ml: "4px" })] }), Object(_.jsx)(st.c, { children: Object(_.jsx)(L.pb, { fontSize: "14px", children: l ? null !== (t = "".concat(null === (n = p[Gt.a.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(4), " ").concat(i.outputAmount.currency.symbol)) && void 0 !== t ? t : "-" : null !== (a = "".concat(null === (r = p[Gt.a.INPUT]) || void 0 === r ? void 0 : r.toSignificant(4), " ").concat(i.inputAmount.currency.symbol)) && void 0 !== a ? a : "-" }) })] }), Object(_.jsxs)(st.b, { children: [Object(_.jsxs)(st.c, { children: [Object(_.jsx)(L.pb, { fontSize: "14px", color: "textSubtle", children: s("Price Impact") }), Object(_.jsx)(Jt.a, { text: s("The difference between the market price and estimated price due to trade size."), ml: "4px" })] }), Object(_.jsx)(cn, { priceImpact: u })] }), Object(_.jsxs)(st.b, { children: [Object(_.jsxs)(st.c, { children: [Object(_.jsx)(L.pb, { fontSize: "14px", color: "textSubtle", children: s("Liquidity Provider Fee") }), Object(_.jsx)(Jt.a, { text: Object(_.jsxs)(_.Fragment, { children: [Object(_.jsx)(L.pb, { mb: "12px", children: s("For each trade a %amount% fee is paid", { amount: "0.25%" }) }), Object(_.jsxs)(L.pb, { children: ["- ", s("%amount% to LP token holders", { amount: "0.17%" })] }), Object(_.jsxs)(L.pb, { children: ["- ", s("%amount% to the Treasury", { amount: "0.03%" })] }), Object(_.jsxs)(L.pb, { children: ["- ", s("%amount% towards MGT buyback and burn", { amount: "0.05%" })] })] }), ml: "4px" })] }), Object(_.jsx)(L.pb, { fontSize: "14px", children: d ? "".concat(d.toSignificant(4), " ").concat(i.inputAmount.currency.symbol) : "-" })] })] })
            }

            function Mn(e) {
                var t = e.trade,
                    n = Object(be.b)().t,
                    a = Object(Dn.l)(),
                    r = Object(g.a)(a, 1)[0],
                    i = Boolean(t && t.route.path.length > 2);
                return Object(_.jsx)(ct.a, { gap: "0px", children: t && Object(_.jsxs)(_.Fragment, { children: [Object(_.jsx)(Ln, { trade: t, allowedSlippage: r }), i && Object(_.jsx)(_.Fragment, { children: Object(_.jsxs)(st.b, { style: { padding: "0 16px" }, children: [Object(_.jsxs)("span", { style: { display: "flex", alignItems: "center" }, children: [Object(_.jsx)(L.pb, { fontSize: "14px", color: "textSubtle", children: n("Route") }), Object(_.jsx)(Jt.a, { text: n("Routing through these tokens resulted in the best price for your trade."), ml: "4px" })] }), Object(_.jsx)(Nn, { trade: t })] }) })] }) })
            }
            var Rn, Un = ["trade"],
                _n = de.e.div(Rn || (Rn = Object(ue.a)(["\n  margin-top: ", ";\n  padding-top: 16px;\n  padding-bottom: 16px;\n  width: 100%;\n  max-width: 400px;\n  border-radius: 20px;\n  background-color: ", ";\n\n  transform: ", ";\n  transition: transform 300ms ease-in-out;\n"])), (function(e) { return e.show ? "16px" : 0 }), (function(e) { return e.theme.colors.invertedContrast }), (function(e) { return e.show ? "translateY(0%)" : "translateY(-100%)" }));

            function qn(e) {
                var t, n = e.trade,
                    a = Object(ce.a)(e, Un),
                    r = Fn(n);
                return Object(_.jsx)(_n, { show: Boolean(n), children: Object(_.jsx)(Mn, Object(se.a)(Object(se.a)({}, a), {}, { trade: null !== (t = null !== n && void 0 !== n ? n : r) && void 0 !== t ? t : void 0 })) })
            }

            function Vn(e) {
                var t, n, a, r, i, o = e.price,
                    s = e.showInverted,
                    c = e.setShowInverted,
                    u = s ? null === o || void 0 === o ? void 0 : o.toSignificant(6) : null === o || void 0 === o || null === (t = o.invert()) || void 0 === t ? void 0 : t.toSignificant(6),
                    d = Boolean((null === o || void 0 === o ? void 0 : o.baseCurrency) && (null === o || void 0 === o ? void 0 : o.quoteCurrency)),
                    l = s ? "".concat(null === o || void 0 === o || null === (n = o.quoteCurrency) || void 0 === n ? void 0 : n.symbol, " per ").concat(null === o || void 0 === o || null === (a = o.baseCurrency) || void 0 === a ? void 0 : a.symbol) : "".concat(null === o || void 0 === o || null === (r = o.baseCurrency) || void 0 === r ? void 0 : r.symbol, " per ").concat(null === o || void 0 === o || null === (i = o.quoteCurrency) || void 0 === i ? void 0 : i.symbol);
                return Object(_.jsx)(L.pb, { style: { justifyContent: "center", alignItems: "center", display: "flex" }, children: d ? Object(_.jsxs)(_.Fragment, { children: [null !== u && void 0 !== u ? u : "-", " ", l, Object(_.jsx)(en, { onClick: function() { return c(!s) }, children: Object(_.jsx)(L.g, { width: "14px" }) })] }) : "-" })
            }
            var Yn, Hn, Wn, zn, Kn = n(267),
                Gn = function(e) {
                    var t = e.tokens,
                        n = e.onDismiss,
                        a = e.onCancel,
                        r = Object(be.b)().t;
                    return Object(_.jsx)(L.U, { title: r("Import Token"), onDismiss: function() { n && n(), a() }, style: { maxWidth: "420px" }, children: Object(_.jsx)(Kn.a, { tokens: t, handleCurrencySelect: n }) })
                },
                Xn = ["steps", "disabled"],
                Jn = Object(de.e)(st.b)(Yn || (Yn = Object(ue.a)(["\n  width: 50%;\n"]))),
                $n = de.e.div(Hn || (Hn = Object(ue.a)(["\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ", ";\n  border-radius: 50%;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n"])), (function(e) {
                    var t = e.theme,
                        n = e.confirmed;
                    return e.disabled ? t.colors.backgroundDisabled : n ? t.colors.success : t.colors.primary
                })),
                Qn = de.e.div(Wn || (Wn = Object(ue.a)(["\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n"]))),
                Zn = de.e.div(zn || (zn = Object(ue.a)(["\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(\n    90deg,\n    ", "\n      0%,\n    ", "\n      80%\n  );\n  opacity: 0.6;\n"])), (function(e) {
                    var t = e.theme,
                        n = e.prevConfirmed;
                    return e.disabled ? t.colors.backgroundDisabled : n ? t.colors.success : t.colors.primary
                }), (function(e) {
                    var t = e.theme,
                        n = e.prevConfirmed;
                    return e.disabled ? t.colors.backgroundDisabled : n ? t.colors.primary : t.colors.backgroundDisabled
                }));

            function ea(e) {
                var t = e.steps,
                    n = e.disabled,
                    a = void 0 !== n && n,
                    r = Object(ce.a)(e, Xn);
                return Object(_.jsx)(ct.a, Object(se.a)(Object(se.a)({ justify: "center" }, r), {}, { children: Object(_.jsxs)(Jn, { children: [t.map((function(e, n) { return Object(_.jsxs)(Qn, { children: [Object(_.jsx)($n, { confirmed: e, disabled: a || !t[n - 1] && 0 !== n, children: e ? "\u2713" : n + 1 }), Object(_.jsx)(Zn, { prevConfirmed: e, disabled: a })] }, n) })), Object(_.jsx)($n, { disabled: a || !t[t.length - 1], children: t.length + 1 })] }) }))
            }
            var ta = n(182),
                na = n(127),
                aa = n(55);
            var ra, ia = function(e, t, n) {
                    var r = Object(j.k)(null === e || void 0 === e ? void 0 : e.address, !1),
                        i = Object(a.useMemo)((function() { return [t, n] }), [t, n]),
                        o = Object(aa.c)(r, "allowance", i).result;
                    return Object(a.useMemo)((function() { return e && o ? new it.k(e, o.toString()) : void 0 }), [e, o])
                },
                oa = n(219);

            function sa(e, t) {
                var n = Object(s.a)().account,
                    r = Object(oa.a)().callWithGasPrice,
                    i = e instanceof it.k ? e.token : void 0,
                    o = ia(i, null !== n && void 0 !== n ? n : void 0, t),
                    c = Object(Pe.c)(null === i || void 0 === i ? void 0 : i.address, t),
                    u = Object(a.useMemo)((function() { return e && t ? e.currency === it.d ? ra.APPROVED : o ? o.lessThan(e) ? c ? ra.PENDING : ra.NOT_APPROVED : ra.APPROVED : ra.UNKNOWN : ra.UNKNOWN }), [e, o, c, t]),
                    d = Object(j.k)(null === i || void 0 === i ? void 0 : i.address),
                    l = Object(Pe.d)(),
                    p = Object(a.useCallback)(Object(v.a)(T.a.mark((function n() {
                        var a, o;
                        return T.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (u === ra.NOT_APPROVED) { n.next = 3; break }
                                    return console.error("approve was called unnecessarily"), n.abrupt("return");
                                case 3:
                                    if (i) { n.next = 6; break }
                                    return console.error("no token"), n.abrupt("return");
                                case 6:
                                    if (d) { n.next = 9; break }
                                    return console.error("tokenContract is null"), n.abrupt("return");
                                case 9:
                                    if (e) { n.next = 12; break }
                                    return console.error("missing amount to approve"), n.abrupt("return");
                                case 12:
                                    if (t) { n.next = 15; break }
                                    return console.error("no spender"), n.abrupt("return");
                                case 15:
                                    return a = !1, n.next = 18, d.estimateGas.approve(t, na.b).catch((function() { return a = !0, d.estimateGas.approve(t, e.raw.toString()) }));
                                case 18:
                                    return o = n.sent, n.abrupt("return", r(d, "approve", [t, a ? e.raw.toString() : na.b], { gasLimit: Object(M.b)(o) }).then((function(n) { l(n, { summary: "Approve ".concat(e.currency.symbol), approval: { tokenAddress: i.address, spender: t } }) })).catch((function(e) { throw console.error("Failed to approve token", e), e })));
                                case 20:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    }))), [u, i, d, e, t, l, r]);
                return [u, p]
            }! function(e) { e[e.UNKNOWN = 0] = "UNKNOWN", e[e.NOT_APPROVED = 1] = "NOT_APPROVED", e[e.PENDING = 2] = "PENDING", e[e.APPROVED = 3] = "APPROVED" }(ra || (ra = {}));
            var ca, ua = n(130);

            function da() {
                var e = Object(l.c)((function(e) { return e.user.userDeadline })),
                    t = function() { var e, t, n = Object(j.h)(); return null === (e = Object(aa.c)(n, "getCurrentBlockTimestamp")) || void 0 === e || null === (t = e.result) || void 0 === t ? void 0 : t[0] }();
                return Object(a.useMemo)((function() { if (t && e) return t.add(e) }), [t, e])
            }

            function la(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.n,
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = Object(s.a)(),
                    i = r.account,
                    o = r.chainId,
                    u = r.library,
                    d = Object(gt.a)(n),
                    l = d.address,
                    p = null === n ? i : l,
                    b = da();
                return Object(a.useMemo)((function() { if (!e || !p || !u || !i || !o || !b) return []; var n = Object(M.g)(o, u, i); if (!n) return []; var a = []; return a.push(it.i.swapCallParameters(e, { feeOnTransfer: !1, allowedSlippage: new it.g(it.e.BigInt(t), c.i), recipient: p, deadline: b.toNumber() })), e.tradeType === it.m.EXACT_INPUT && a.push(it.i.swapCallParameters(e, { feeOnTransfer: !0, allowedSlippage: new it.g(it.e.BigInt(t), c.i), recipient: p, deadline: b.toNumber() })), a.map((function(e) { return { parameters: e, contract: n } })) }), [i, t, o, b, u, p, e])
            }! function(e) { e[e.INVALID = 0] = "INVALID", e[e.LOADING = 1] = "LOADING", e[e.VALID = 2] = "VALID" }(ca || (ca = {}));
            var pa, ba = n(106);
            ! function(e) { e[e.NOT_APPLICABLE = 0] = "NOT_APPLICABLE", e[e.WRAP = 1] = "WRAP", e[e.UNWRAP = 2] = "UNWRAP" }(pa || (pa = {}));
            var ya = { wrapType: pa.NOT_APPLICABLE };

            function ma(e) { if (e) return e.currency === it.d ? it.e.greaterThan(e.raw, c.o) ? it.c.ether(it.e.subtract(e.raw, c.o)) : it.c.ether(it.e.BigInt(0)) : e }
            var fa, ha, ka, Ta = n(181),
                ga = n(240),
                va = function() { var e = Object(be.b)().t; return Object(_.jsxs)(_.Fragment, { children: [Object(_.jsxs)(L.pb, { children: [e("To trade SAFEMOON, you must:"), " "] }), Object(_.jsxs)(L.pb, { children: ["\u2022 ", e("Click on the settings icon")] }), Object(_.jsxs)(L.pb, { mb: "24px", children: ["\u2022 ", e("Set your slippage tolerance to 12%+")] }), Object(_.jsx)(L.pb, { children: e("This is because SafeMoon taxes a 10% fee on each transaction:") }), Object(_.jsxs)(L.pb, { children: ["\u2022 ", e("5% fee = redistributed to all existing holders")] }), Object(_.jsxs)(L.pb, { children: ["\u2022 ", e("5% fee = used to add liquidity")] })] }) },
                xa = function() { var e = Object(be.b)().t; return Object(_.jsx)(L.pb, { children: e("Warning: BONDLY has been compromised. Please remove liqudity until further notice.") }) },
                ja = function(e) {
                    var t = e.handleContinueClick,
                        n = Object(be.b)().t,
                        r = Object(a.useState)(!1),
                        i = Object(g.a)(r, 2),
                        o = i[0],
                        s = i[1];
                    return Object(_.jsx)(_.Fragment, { children: Object(_.jsxs)(L.H, { justifyContent: "space-between", children: [Object(_.jsxs)(L.H, { alignItems: "center", children: [Object(_.jsx)(L.t, { name: "confirmed", type: "checkbox", checked: o, onChange: function() { return s(!o) }, scale: "sm" }), Object(_.jsx)(L.pb, { ml: "10px", style: { userSelect: "none" }, children: n("I understand") })] }), Object(_.jsx)(L.m, { disabled: !o, onClick: t, children: n("Continue") })] }) })
                },
                wa = Object(de.e)(L.Y)(fa || (fa = Object(ue.a)(["\n  max-width: 440px;\n"]))),
                Oa = Object(de.e)(L.S)(ha || (ha = Object(ue.a)(["\n  align-items: flex-start;\n  justify-content: flex-start;\n"]))),
                Ba = function(e) {
                    var t, n = e.swapCurrency,
                        r = e.onDismiss,
                        i = Object(be.b)().t,
                        o = Object(fe.a)().theme;
                    Object(a.useEffect)((function() {
                        var e = function(e) { return e.stopPropagation(), e.preventDefault(), !1 };
                        return document.querySelectorAll('[role="presentation"]').forEach((function(t) { t.addEventListener("click", e, !0) })),
                            function() { document.querySelectorAll('[role="presentation"]').forEach((function(t) { t.removeEventListener("click", e, !0) })) }
                    }), []);
                    var s = (t = {}, Object(rt.a)(t, Tt.safemoon.address, { symbol: Tt.safemoon.symbol, component: Object(_.jsx)(va, {}) }), Object(rt.a)(t, Tt.bondly.address, { symbol: Tt.bondly.symbol, component: Object(_.jsx)(xa, {}) }), t)[n.address];
                    return Object(_.jsxs)(wa, { minWidth: "280px", children: [Object(_.jsx)(L.Z, { background: o.colors.gradients.cardHeader, children: Object(_.jsx)(L.J, { p: "12px 24px", children: i("Notice for trading %symbol%", { symbol: s.symbol }) }) }), Object(_.jsxs)(L.W, { p: "24px", children: [Object(_.jsx)(Oa, { variant: "warning", mb: "24px", children: Object(_.jsx)(L.j, { children: s.component }) }), Object(_.jsx)(ja, { handleContinueClick: r })] })] })
                },
                Aa = Object(de.e)(L.pb)(ka || (ka = Object(ue.a)(["\n  font-size: 12px;\n  font-weight: bold;\n  color: ", ";\n"])), (function(e) { return e.theme.colors.secondary }));

            function Ca(e) {
                var t, n, r, i, o, u, d, l, b, y, m, f = e.history,
                    h = Object(ba.b)(),
                    k = Object(be.b)().t,
                    x = [Object(p.c)(null === h || void 0 === h ? void 0 : h.inputCurrencyId), Object(p.c)(null === h || void 0 === h ? void 0 : h.outputCurrencyId)],
                    w = x[0],
                    O = x[1],
                    B = Object(a.useMemo)((function() { var e, t; return null !== (e = null === (t = [w, O]) || void 0 === t ? void 0 : t.filter((function(e) { return e instanceof it.j }))) && void 0 !== e ? e : [] }), [w, O]),
                    A = Object(p.b)(),
                    C = B && B.filter((function(e) { return !(e.address in A) })),
                    E = Object(s.a)().account,
                    P = Object(Dn.c)(),
                    S = Object(g.a)(P, 1)[0],
                    I = Object(Dn.l)(),
                    D = Object(g.a)(I, 1)[0],
                    N = Object(ba.e)(),
                    R = N.independentField,
                    U = N.typedValue,
                    q = N.recipient,
                    V = Object(ba.c)(),
                    Y = V.v2Trade,
                    H = V.currencyBalances,
                    W = V.parsedAmount,
                    z = V.currencies,
                    K = V.inputError,
                    G = function(e, t, n) {
                        var r = Object(s.a)(),
                            i = r.chainId,
                            o = r.account,
                            c = Object(oa.a)().callWithGasPrice,
                            u = Object(j.l)(),
                            d = Object(gn.b)(null !== o && void 0 !== o ? o : void 0, e),
                            l = Object(a.useMemo)((function() { return Object(ba.a)(n, e) }), [e, n]),
                            p = Object(Pe.d)();
                        return Object(a.useMemo)((function() {
                            if (!u || !i || !e || !t) return ya;
                            var n = l && d && !d.lessThan(l);
                            return e === it.d && Object(it.o)(it.n[i], t) ? {
                                wrapType: pa.WRAP,
                                execute: n && l ? Object(v.a)(T.a.mark((function e() {
                                    var t;
                                    return T.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, c(u, "deposit", void 0, { value: "0x".concat(l.raw.toString(16)) });
                                            case 3:
                                                t = e.sent, p(t, { summary: "Wrap ".concat(l.toSignificant(6), " BNB to WBNB") }), e.next = 10;
                                                break;
                                            case 7:
                                                e.prev = 7, e.t0 = e.catch(0), console.error("Could not deposit", e.t0);
                                            case 10:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 7]
                                    ])
                                }))) : void 0,
                                inputError: n ? void 0 : "Insufficient BNB balance"
                            } : Object(it.o)(it.n[i], e) && t === it.d ? {
                                wrapType: pa.UNWRAP,
                                execute: n && l ? Object(v.a)(T.a.mark((function e() {
                                    var t;
                                    return T.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, c(u, "withdraw", ["0x".concat(l.raw.toString(16))]);
                                            case 3:
                                                t = e.sent, p(t, { summary: "Unwrap ".concat(l.toSignificant(6), " WBNB to BNB") }), e.next = 10;
                                                break;
                                            case 7:
                                                e.prev = 7, e.t0 = e.catch(0), console.error("Could not withdraw", e.t0);
                                            case 10:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 7]
                                    ])
                                }))) : void 0,
                                inputError: n ? void 0 : "Insufficient WBNB balance"
                            } : ya
                        }), [u, i, e, t, l, d, p, c])
                    }(z[Gt.a.INPUT], z[Gt.a.OUTPUT], U),
                    X = G.wrapType,
                    J = G.execute,
                    $ = G.inputError,
                    Q = X !== pa.NOT_APPLICABLE,
                    Z = Q ? void 0 : Y,
                    ee = Q ? (t = {}, Object(rt.a)(t, Gt.a.INPUT, W), Object(rt.a)(t, Gt.a.OUTPUT, W), t) : (n = {}, Object(rt.a)(n, Gt.a.INPUT, R === Gt.a.INPUT ? W : null === Z || void 0 === Z ? void 0 : Z.inputAmount), Object(rt.a)(n, Gt.a.OUTPUT, R === Gt.a.OUTPUT ? W : null === Z || void 0 === Z ? void 0 : Z.outputAmount), n),
                    te = Object(ba.d)(),
                    ne = te.onSwitchTokens,
                    ae = te.onCurrencySelection,
                    re = te.onUserInput,
                    ie = te.onChangeRecipient,
                    oe = !K,
                    ce = R === Gt.a.INPUT ? Gt.a.OUTPUT : Gt.a.INPUT,
                    ue = Object(a.useCallback)((function(e) { re(Gt.a.INPUT, e) }), [re]),
                    de = Object(a.useCallback)((function(e) { re(Gt.a.OUTPUT, e) }), [re]),
                    le = Object(a.useState)({ tradeToConfirm: void 0, attemptingTxn: !1, swapErrorMessage: void 0, txHash: void 0 }),
                    pe = Object(g.a)(le, 2),
                    ye = pe[0],
                    me = ye.tradeToConfirm,
                    fe = ye.swapErrorMessage,
                    he = ye.attemptingTxn,
                    ke = ye.txHash,
                    ge = pe[1],
                    ve = (d = {}, Object(rt.a)(d, R, U), Object(rt.a)(d, ce, Q ? null !== (r = null === (i = ee[R]) || void 0 === i ? void 0 : i.toExact()) && void 0 !== r ? r : "" : null !== (o = null === (u = ee[ce]) || void 0 === u ? void 0 : u.toSignificant(6)) && void 0 !== o ? o : ""), d),
                    xe = null === Z || void 0 === Z ? void 0 : Z.route,
                    je = Boolean(z[Gt.a.INPUT] && z[Gt.a.OUTPUT] && (null === (l = ee[R]) || void 0 === l ? void 0 : l.greaterThan(it.e.BigInt(0)))),
                    we = !xe,
                    Oe = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; return sa(Object(a.useMemo)((function() { return e ? Object(Xt.a)(e, t)[Gt.a.INPUT] : void 0 }), [e, t]), c.t) }(Z, D),
                    Be = Object(g.a)(Oe, 2),
                    Ae = Be[0],
                    Ce = Be[1],
                    Ee = Object(a.useState)(!1),
                    Se = Object(g.a)(Ee, 2),
                    Ie = Se[0],
                    Fe = Se[1];
                Object(a.useEffect)((function() { Ae === ra.PENDING && Fe(!0) }), [Ae, Ie]);
                var De = ma(H[Gt.a.INPUT]),
                    Ne = Boolean(De && (null === (b = ee[Gt.a.INPUT]) || void 0 === b ? void 0 : b.equalTo(De))),
                    Le = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.n,
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            r = Object(s.a)(),
                            i = r.account,
                            o = r.chainId,
                            u = r.library,
                            d = Object(Dn.d)(),
                            l = la(e, t, n),
                            p = Object(Pe.d)(),
                            b = Object(gt.a)(n).address,
                            y = null === n ? i : b;
                        return Object(a.useMemo)((function() {
                            return e && u && i && o ? y ? {
                                state: ca.VALID,
                                callback: function() {
                                    var t = Object(v.a)(T.a.mark((function t() {
                                        var a, r, o, s, c, u, b, m, f, h;
                                        return T.a.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2, Promise.all(l.map((function(e) {
                                                        var t, n = e.parameters,
                                                            a = n.methodName,
                                                            r = n.args,
                                                            i = n.value,
                                                            o = e.contract,
                                                            s = !i || Object(ua.a)(i) ? {} : { value: i };
                                                        return (t = o.estimateGas)[a].apply(t, Object(F.a)(r).concat([s])).then((function(t) { return { call: e, gasEstimate: t } })).catch((function(t) {
                                                            var n;
                                                            return console.error("Gas estimate failed, trying eth_call to extract error", e), (n = o.callStatic)[a].apply(n, Object(F.a)(r).concat([s])).then((function(n) { return console.error("Unexpected successful call after failed estimate gas", e, t, n), { call: e, error: new Error("Unexpected issue with estimating the gas. Please try again.") } })).catch((function(t) {
                                                                var n;
                                                                console.error("Call threw error", e, t);
                                                                var a = t.reason || (null === (n = t.data) || void 0 === n ? void 0 : n.message) || t.message,
                                                                    r = "The transaction cannot succeed due to error: ".concat(null !== a && void 0 !== a ? a : "Unknown error, check the logs", ".");
                                                                return { call: e, error: new Error(r) }
                                                            }))
                                                        }))
                                                    })));
                                                case 2:
                                                    if (a = t.sent, r = a.find((function(e, t, n) { return "gasEstimate" in e && (t === n.length - 1 || "gasEstimate" in n[t + 1]) }))) { t.next = 9; break }
                                                    if (!((o = a.filter((function(e) { return "error" in e }))).length > 0)) { t.next = 8; break }
                                                    throw o[o.length - 1].error;
                                                case 8:
                                                    throw new Error("Unexpected error. Please contact support: none of the calls threw an error");
                                                case 9:
                                                    return s = r.call, c = s.contract, u = s.parameters, b = u.methodName, m = u.args, f = u.value, h = r.gasEstimate, t.abrupt("return", c[b].apply(c, Object(F.a)(m).concat([Object(se.a)({ gasLimit: Object(M.b)(h), gasPrice: d }, f && !Object(ua.a)(f) ? { value: f, from: i } : { from: i })])).then((function(t) {
                                                        var a = e.inputAmount.currency.symbol,
                                                            r = e.outputAmount.currency.symbol,
                                                            o = e.inputAmount.toSignificant(3),
                                                            s = e.outputAmount.toSignificant(3),
                                                            c = "Swap ".concat(o, " ").concat(a, " for ").concat(s, " ").concat(r),
                                                            u = y === i ? c : "".concat(c, " to ").concat(n && Object(M.h)(n) ? Object(ln.a)(n) : n);
                                                        return p(t, { summary: u }), t.hash
                                                    })).catch((function(e) { throw 4001 === (null === e || void 0 === e ? void 0 : e.code) ? new Error("Transaction rejected.") : (console.error("Swap failed", e, b, m, f), new Error("Swap failed: ".concat(e.message))) })));
                                                case 11:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })));
                                    return function() { return t.apply(this, arguments) }
                                }(),
                                error: null
                            } : null !== n ? { state: ca.INVALID, callback: null, error: "Invalid recipient" } : { state: ca.LOADING, callback: null, error: null } : { state: ca.INVALID, callback: null, error: "Missing dependencies" }
                        }), [e, u, i, o, y, n, l, p, d])
                    }(Z, D, q),
                    Me = Le.callback,
                    Re = Le.error,
                    Ue = Object(Xt.b)(Z).priceImpactWithoutFee,
                    _e = Object(Dn.k)(),
                    qe = Object(g.a)(_e, 1)[0],
                    Ve = Object(a.useCallback)((function() { Ue && ! function(e, t) { if (!e.lessThan(c.s)) { var n = "confirm"; return window.prompt(t('This swap has a price impact of at least %amount%%. Please type the word "%word%" to continue with this swap.', { amount: c.s.toFixed(0), word: n })) === n } return !!e.lessThan(c.b) || window.confirm(t("This swap has a price impact of at least %amount%%. Please confirm that you would like to continue with this swap.", { amount: c.b.toFixed(0) })) }(Ue, k) || Me && (ge({ attemptingTxn: !0, tradeToConfirm: me, swapErrorMessage: void 0, txHash: void 0 }), Me().then((function(e) { ge({ attemptingTxn: !1, tradeToConfirm: me, swapErrorMessage: void 0, txHash: e }) })).catch((function(e) { ge({ attemptingTxn: !1, tradeToConfirm: me, swapErrorMessage: e.message, txHash: void 0 }) }))) }), [Ue, Me, me, k]),
                    Ye = Object(a.useState)(!1),
                    He = Object(g.a)(Ye, 2),
                    We = He[0],
                    ze = He[1],
                    Ke = Object(Xt.d)(Ue),
                    Ge = !K && (Ae === ra.NOT_APPROVED || Ae === ra.PENDING || Ie && Ae === ra.APPROVED) && !(Ke > 3 && !S),
                    Xe = Object(a.useCallback)((function() { ge({ tradeToConfirm: me, attemptingTxn: he, swapErrorMessage: fe, txHash: ke }), ke && re(Gt.a.INPUT, "") }), [he, re, fe, me, ke]),
                    Je = Object(a.useCallback)((function() { ge({ tradeToConfirm: Z, swapErrorMessage: fe, txHash: ke, attemptingTxn: he }) }), [he, fe, Z, ke]),
                    $e = Object(a.useState)(null),
                    Qe = Object(g.a)($e, 2),
                    Ze = Qe[0],
                    et = Qe[1],
                    tt = Object(L.Cb)(Object(_.jsx)(Ba, { swapCurrency: Ze })),
                    nt = Object(g.a)(tt, 1)[0],
                    at = function(e) { var t = Object.entries(Tt).find((function(t) { var n = t[1]; return e.address === n.address })); return Boolean(t) };
                Object(a.useEffect)((function() { Ze && nt() }), [Ze]);
                var ut = Object(a.useCallback)((function(e) {
                        Fe(!1), ae(Gt.a.INPUT, e);
                        var t = at(e);
                        et(t ? e : null)
                    }), [ae]),
                    dt = Object(a.useCallback)((function() { De && re(Gt.a.INPUT, De.toExact()) }), [De, re]),
                    lt = Object(a.useCallback)((function(e) {
                        ae(Gt.a.OUTPUT, e);
                        var t = at(e);
                        et(t ? e : null)
                    }), [ae]),
                    pt = Object(ot.a)(null === z || void 0 === z ? void 0 : z.INPUT, null === z || void 0 === z ? void 0 : z.OUTPUT),
                    yt = Object(L.Cb)(Object(_.jsx)(Gn, { tokens: C, onCancel: function() { return f.push("/swap/") } })),
                    mt = Object(g.a)(yt, 1)[0];
                Object(a.useEffect)((function() { C.length > 0 && mt() }), [C.length]);
                var ft = Object(L.Cb)(Object(_.jsx)(Tn, { trade: Z, originalTrade: me, onAcceptChanges: Je, attemptingTxn: he, txHash: ke, recipient: q, allowedSlippage: D, onConfirm: Ve, swapErrorMessage: fe, customOnDismiss: Xe }), !0, !0, "confirmSwapModal"),
                    ht = Object(g.a)(ft, 1)[0];
                return Object(_.jsxs)(ga.a, { children: [Object(_.jsxs)(ta.a, { children: [Object(_.jsx)(ta.b, { title: k("Exchange"), subtitle: k("Trade tokens in an instant") }), Object(_.jsxs)($t, { id: "swap-page", children: [Object(_.jsxs)(ct.a, { gap: "md", children: [Object(_.jsx)(Sn, { label: R === Gt.a.OUTPUT && !Q && Z ? k("From (estimated)") : k("From"), value: ve[Gt.a.INPUT], showMaxButton: !Ne, currency: z[Gt.a.INPUT], onUserInput: ue, onMax: dt, onCurrencySelect: ut, otherCurrency: z[Gt.a.OUTPUT], id: "swap-currency-input" }), Object(_.jsx)(ct.a, { justify: "space-between", children: Object(_.jsxs)(st.a, { justify: S ? "space-between" : "center", style: { padding: "0 1rem" }, children: [Object(_.jsx)(Qt, { clickable: !0, children: Object(_.jsx)(L.d, { width: "16px", onClick: function() { Fe(!1), ne() }, color: z[Gt.a.INPUT] && z[Gt.a.OUTPUT] ? "primary" : "text" }) }), null === q && !Q && S ? Object(_.jsx)(L.m, { variant: "text", id: "add-recipient-button", onClick: function() { return ie("") }, children: k("+ Add a send (optional)") }) : null] }) }), Object(_.jsx)(Sn, { value: ve[Gt.a.OUTPUT], onUserInput: de, label: R === Gt.a.INPUT && !Q && Z ? k("To (estimated)") : k("To"), showMaxButton: !1, currency: z[Gt.a.OUTPUT], onCurrencySelect: lt, otherCurrency: z[Gt.a.INPUT], id: "swap-currency-output" }), S && null !== q && !Q ? Object(_.jsxs)(_.Fragment, { children: [Object(_.jsxs)(st.a, { justify: "space-between", style: { padding: "0 1rem" }, children: [Object(_.jsx)(Qt, { clickable: !1, children: Object(_.jsx)(L.d, { width: "16px" }) }), Object(_.jsx)(L.m, { variant: "text", id: "remove-recipient-button", onClick: function() { return ie(null) }, children: k("- Remove send") })] }), Object(_.jsx)(Ot, { id: "recipient", value: q, onChange: ie })] }) : null, Q ? null : Object(_.jsxs)(ct.a, { gap: "8px", style: { padding: "0 16px" }, children: [Boolean(Z) && Object(_.jsxs)(st.b, { align: "center", children: [Object(_.jsx)(Aa, { children: k("Price") }), Object(_.jsx)(Vn, { price: null === Z || void 0 === Z ? void 0 : Z.executionPrice, showInverted: We, setShowInverted: ze })] }), D !== c.n && Object(_.jsxs)(st.b, { align: "center", children: [Object(_.jsx)(Aa, { children: k("Slippage Tolerance") }), Object(_.jsxs)(L.pb, { bold: !0, color: "primary", children: [D / 100, "%"] })] })] })] }), Object(_.jsxs)(L.j, { mt: "1rem", children: [pt ? Object(_.jsx)(L.m, { width: "100%", disabled: !0, mb: "4px", children: k("Unsupported Asset") }) : E ? Q ? Object(_.jsx)(L.m, { width: "100%", disabled: Boolean($), onClick: J, children: null !== $ && void 0 !== $ ? $ : X === pa.WRAP ? "Wrap" : X === pa.UNWRAP ? "Unwrap" : null }) : we && je ? Object(_.jsxs)(Et.a, { style: { textAlign: "center" }, children: [Object(_.jsx)(L.pb, { color: "textSubtle", mb: "4px", children: k("Insufficient liquidity for this trade.") }), qe && Object(_.jsx)(L.pb, { color: "textSubtle", mb: "4px", children: k("Try enabling multi-hop trades.") })] }) : Ge ? Object(_.jsxs)(st.b, { children: [Object(_.jsx)(L.m, { variant: Ae === ra.APPROVED ? "success" : "primary", onClick: Ce, disabled: Ae !== ra.NOT_APPROVED || Ie, width: "48%", children: Ae === ra.PENDING ? Object(_.jsxs)(st.a, { gap: "6px", justify: "center", children: [k("Enabling"), " ", Object(_.jsx)(Ta.a, { stroke: "white" })] }) : Ie && Ae === ra.APPROVED ? k("Enabled") : k("Enable %asset%", { asset: null !== (y = null === (m = z[Gt.a.INPUT]) || void 0 === m ? void 0 : m.symbol) && void 0 !== y ? y : "" }) }), Object(_.jsx)(L.m, { variant: oe && Ke > 2 ? "danger" : "primary", onClick: function() { S ? Ve() : (ge({ tradeToConfirm: Z, attemptingTxn: !1, swapErrorMessage: void 0, txHash: void 0 }), ht()) }, width: "48%", id: "swap-button", disabled: !oe || Ae !== ra.APPROVED || Ke > 3 && !S, children: k(Ke > 3 && !S ? "Price Impact High" : Ke > 2 ? "Swap Anyway" : "Swap") })] }) : Object(_.jsx)(L.m, { variant: oe && Ke > 2 && !Re ? "danger" : "primary", onClick: function() { S ? Ve() : (ge({ tradeToConfirm: Z, attemptingTxn: !1, swapErrorMessage: void 0, txHash: void 0 }), ht()) }, id: "swap-button", width: "100%", disabled: !oe || Ke > 3 && !S || !!Re, children: K || (Ke > 3 && !S ? "Price Impact Too High" : k(Ke > 2 ? "Swap Anyway" : "Swap")) }) : Object(_.jsx)(Te.a, { width: "100%" }), Ge && Object(_.jsx)(ct.c, { style: { marginTop: "1rem" }, children: Object(_.jsx)(ea, { steps: [Ae === ra.APPROVED] }) }), S && fe ? Object(_.jsx)(rn, { error: fe }) : null] })] })] }), pt ? Object(_.jsx)(bt, { currencies: [z.INPUT, z.OUTPUT] }) : Object(_.jsx)(qn, { trade: Z })] })
            }
            var Ea = n(50),
                Pa = n(391),
                Sa = n(92),
                Ia = n(22),
                Fa = n(214),
                Da = it.e.BigInt(0);

            function Na() { return Object(l.c)((function(e) { return e.mint })) }
            var La = n(202);
            var Ma = function(e) {
                    var t, n, a, r, i, o, s, c, u = e.noLiquidity,
                        d = e.price,
                        l = e.currencies,
                        p = e.parsedAmounts,
                        b = e.poolTokenPercentage,
                        y = e.onAdd,
                        m = Object(be.b)().t;
                    return Object(_.jsxs)(_.Fragment, { children: [Object(_.jsxs)(st.b, { children: [Object(_.jsx)(L.pb, { children: m("%asset% Deposited", { asset: null === (t = l[Ia.a.CURRENCY_A]) || void 0 === t ? void 0 : t.symbol }) }), Object(_.jsxs)(st.c, { children: [Object(_.jsx)(ut.a, { currency: l[Ia.a.CURRENCY_A], style: { marginRight: "8px" } }), Object(_.jsx)(L.pb, { children: null === (n = p[Ia.a.CURRENCY_A]) || void 0 === n ? void 0 : n.toSignificant(6) })] })] }), Object(_.jsxs)(st.b, { children: [Object(_.jsx)(L.pb, { children: m("%asset% Deposited", { asset: null === (a = l[Ia.a.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol }) }), Object(_.jsxs)(st.c, { children: [Object(_.jsx)(ut.a, { currency: l[Ia.a.CURRENCY_B], style: { marginRight: "8px" } }), Object(_.jsx)(L.pb, { children: null === (r = p[Ia.a.CURRENCY_B]) || void 0 === r ? void 0 : r.toSignificant(6) })] })] }), Object(_.jsxs)(st.b, { children: [Object(_.jsx)(L.pb, { children: m("Rates") }), Object(_.jsx)(L.pb, { children: "1 ".concat(null === (i = l[Ia.a.CURRENCY_A]) || void 0 === i ? void 0 : i.symbol, " = ").concat(null === d || void 0 === d ? void 0 : d.toSignificant(4), " ").concat(null === (o = l[Ia.a.CURRENCY_B]) || void 0 === o ? void 0 : o.symbol) })] }), Object(_.jsx)(st.b, { style: { justifyContent: "flex-end" }, children: Object(_.jsx)(L.pb, { children: "1 ".concat(null === (s = l[Ia.a.CURRENCY_B]) || void 0 === s ? void 0 : s.symbol, " = ").concat(null === d || void 0 === d ? void 0 : d.invert().toSignificant(4), " ").concat(null === (c = l[Ia.a.CURRENCY_A]) || void 0 === c ? void 0 : c.symbol) }) }), Object(_.jsxs)(st.b, { children: [Object(_.jsxs)(L.pb, { children: [m("Share of Pool"), ":"] }), Object(_.jsxs)(L.pb, { children: [u ? "100" : null === b || void 0 === b ? void 0 : b.toSignificant(4), "%"] })] }), Object(_.jsx)(L.m, { onClick: y, mt: "20px", children: m(u ? "Create Pool & Supply" : "Confirm Supply") })] })
                },
                Ra = n(152);
            var Ua = function(e) {
                var t, n, a, r, i, o, s, u, d, l, p, b, y = e.currencies,
                    m = e.noLiquidity,
                    f = e.poolTokenPercentage,
                    h = e.price,
                    k = Object(be.b)().t;
                return Object(_.jsx)(ct.a, { gap: "md", children: Object(_.jsxs)(st.a, { justify: "space-around", gap: "4px", children: [Object(_.jsxs)(ct.a, { justify: "center", children: [Object(_.jsx)(L.pb, { children: null !== (t = null === h || void 0 === h ? void 0 : h.toSignificant(6)) && void 0 !== t ? t : "-" }), Object(_.jsx)(L.pb, { fontSize: "14px", pt: 1, children: k("%assetA% per %assetB%", { assetA: null !== (n = null === (a = y[Ia.a.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol) && void 0 !== n ? n : "", assetB: null !== (r = null === (i = y[Ia.a.CURRENCY_A]) || void 0 === i ? void 0 : i.symbol) && void 0 !== r ? r : "" }) })] }), Object(_.jsxs)(ct.a, { justify: "center", children: [Object(_.jsx)(L.pb, { children: null !== (o = null === h || void 0 === h || null === (s = h.invert()) || void 0 === s ? void 0 : s.toSignificant(6)) && void 0 !== o ? o : "-" }), Object(_.jsx)(L.pb, { fontSize: "14px", pt: 1, children: k("%assetA% per %assetB%", { assetA: null !== (u = null === (d = y[Ia.a.CURRENCY_A]) || void 0 === d ? void 0 : d.symbol) && void 0 !== u ? u : "", assetB: null !== (l = null === (p = y[Ia.a.CURRENCY_B]) || void 0 === p ? void 0 : p.symbol) && void 0 !== l ? l : "" }) })] }), Object(_.jsxs)(ct.a, { justify: "center", children: [Object(_.jsxs)(L.pb, { children: [m && h ? "100" : null !== (b = (null === f || void 0 === f ? void 0 : f.lessThan(c.p)) ? "<0.01" : null === f || void 0 === f ? void 0 : f.toFixed(2)) && void 0 !== b ? b : "0", "%"] }), Object(_.jsx)(L.pb, { fontSize: "14px", pt: 1, children: k("Share of Pool") })] })] }) })
            };

            function _a(e) {
                var t, n, r, i, o, u, d, b, y, m, f, h, k, x, j, w = e.match.params,
                    O = w.currencyIdA,
                    B = w.currencyIdB,
                    A = e.history,
                    C = Object(s.a)(),
                    E = C.account,
                    P = C.chainId,
                    S = C.library,
                    I = Object(l.b)(),
                    D = Object(be.b)().t,
                    N = Object(Dn.d)(),
                    R = Object(p.c)(O),
                    U = Object(p.c)(B);
                Object(a.useEffect)((function() { O || B || I(Object(Ia.b)()) }), [I, O, B]);
                var q = Boolean(P && (R && Object(it.o)(R, it.n[P]) || U && Object(it.o)(U, it.n[P]))),
                    V = Object(Dn.f)(),
                    Y = Na(),
                    H = Y.independentField,
                    W = Y.typedValue,
                    z = Y.otherTypedValue,
                    K = function(e, t) {
                        var n, r, i, o, c, u, d = Object(s.a)(),
                            l = d.account,
                            p = d.chainId,
                            b = Na(),
                            y = b.independentField,
                            m = b.typedValue,
                            f = b.otherTypedValue,
                            h = y === Ia.a.CURRENCY_A ? Ia.a.CURRENCY_B : Ia.a.CURRENCY_A,
                            k = Object(a.useMemo)((function() { var n; return n = {}, Object(rt.a)(n, Ia.a.CURRENCY_A, null !== e && void 0 !== e ? e : void 0), Object(rt.a)(n, Ia.a.CURRENCY_B, null !== t && void 0 !== t ? t : void 0), n }), [e, t]),
                            T = Object(Sa.b)(k[Ia.a.CURRENCY_A], k[Ia.a.CURRENCY_B]),
                            v = Object(g.a)(T, 2),
                            x = v[0],
                            j = v[1],
                            w = Object(Fa.a)(null === j || void 0 === j ? void 0 : j.liquidityToken),
                            O = x === Sa.a.NOT_EXISTS || Boolean(w && it.e.equal(w.raw, Da)),
                            B = Object(gn.c)(null !== l && void 0 !== l ? l : void 0, [k[Ia.a.CURRENCY_A], k[Ia.a.CURRENCY_B]]),
                            A = (n = {}, Object(rt.a)(n, Ia.a.CURRENCY_A, B[0]), Object(rt.a)(n, Ia.a.CURRENCY_B, B[1]), n),
                            C = Object(ba.a)(m, k[y]),
                            E = Object(a.useMemo)((function() {
                                if (O) return f && k[h] ? Object(ba.a)(f, k[h]) : void 0;
                                if (C) {
                                    var n = Object(dt.c)(C, p),
                                        a = [Object(dt.b)(e, p), Object(dt.b)(t, p)],
                                        r = a[0],
                                        i = a[1];
                                    if (r && i && n && j) {
                                        var o = h === Ia.a.CURRENCY_B ? t : e,
                                            s = h === Ia.a.CURRENCY_B ? j.priceOf(r).quote(n) : j.priceOf(i).quote(n);
                                        return o === it.d ? it.c.ether(s.raw) : s
                                    }
                                }
                            }), [O, f, k, h, C, e, p, t, j]),
                            P = Object(a.useMemo)((function() { var e; return e = {}, Object(rt.a)(e, Ia.a.CURRENCY_A, y === Ia.a.CURRENCY_A ? C : E), Object(rt.a)(e, Ia.a.CURRENCY_B, y === Ia.a.CURRENCY_A ? E : C), e }), [E, C, y]),
                            S = Object(a.useMemo)((function() {
                                if (O) {
                                    var t = P[Ia.a.CURRENCY_A],
                                        n = P[Ia.a.CURRENCY_B];
                                    return t && n ? new it.h(t.currency, n.currency, t.raw, n.raw) : void 0
                                }
                                var a = Object(dt.b)(e, p);
                                return j && a ? j.priceOf(a) : void 0
                            }), [p, e, O, j, P]),
                            I = Object(a.useMemo)((function() {
                                var e = P[Ia.a.CURRENCY_A],
                                    t = P[Ia.a.CURRENCY_B],
                                    n = [Object(dt.c)(e, p), Object(dt.c)(t, p)],
                                    a = n[0],
                                    r = n[1];
                                if (j && w && a && r) return j.getLiquidityMinted(w, a, r)
                            }), [P, p, j, w]),
                            F = Object(a.useMemo)((function() { if (I && w) return new it.g(I.raw, w.add(I).raw) }), [I, w]);
                        l || (o = "Connect Wallet"), x === Sa.a.INVALID && (o = null !== (c = o) && void 0 !== c ? c : "Invalid pair"), P[Ia.a.CURRENCY_A] && P[Ia.a.CURRENCY_B] || (o = null !== (u = o) && void 0 !== u ? u : "Enter an amount");
                        var D, N, L = P[Ia.a.CURRENCY_A],
                            M = P[Ia.a.CURRENCY_B];
                        return L && (null === A || void 0 === A || null === (r = A[Ia.a.CURRENCY_A]) || void 0 === r ? void 0 : r.lessThan(L)) && (o = "Insufficient ".concat(null === (D = k[Ia.a.CURRENCY_A]) || void 0 === D ? void 0 : D.symbol, " balance")), M && (null === A || void 0 === A || null === (i = A[Ia.a.CURRENCY_B]) || void 0 === i ? void 0 : i.lessThan(M)) && (o = "Insufficient ".concat(null === (N = k[Ia.a.CURRENCY_B]) || void 0 === N ? void 0 : N.symbol, " balance")), { dependentField: h, currencies: k, pair: j, pairState: x, currencyBalances: A, parsedAmounts: P, price: S, noLiquidity: O, liquidityMinted: I, poolTokenPercentage: F, error: o }
                    }(null !== R && void 0 !== R ? R : void 0, null !== U && void 0 !== U ? U : void 0),
                    G = K.dependentField,
                    X = K.currencies,
                    J = K.pair,
                    $ = K.pairState,
                    Q = K.currencyBalances,
                    Z = K.parsedAmounts,
                    ee = K.price,
                    te = K.noLiquidity,
                    ne = K.liquidityMinted,
                    ae = K.poolTokenPercentage,
                    re = K.error,
                    ie = function(e) { var t = Object(l.b)(); return { onFieldAInput: Object(a.useCallback)((function(n) { t(Object(Ia.c)({ field: Ia.a.CURRENCY_A, typedValue: n, noLiquidity: !0 === e })) }), [t, e]), onFieldBInput: Object(a.useCallback)((function(n) { t(Object(Ia.c)({ field: Ia.a.CURRENCY_B, typedValue: n, noLiquidity: !0 === e })) }), [t, e]) } }(te),
                    oe = ie.onFieldAInput,
                    ce = ie.onFieldBInput,
                    ue = !re,
                    de = Object(a.useState)(!1),
                    le = Object(g.a)(de, 2),
                    pe = le[0],
                    ye = le[1],
                    me = da(),
                    fe = Object(Dn.l)(),
                    he = Object(g.a)(fe, 1)[0],
                    ke = Object(a.useState)(""),
                    ge = Object(g.a)(ke, 2),
                    ve = ge[0],
                    xe = ge[1],
                    je = (r = {}, Object(rt.a)(r, H, W), Object(rt.a)(r, G, te ? z : null !== (t = null === (n = Z[G]) || void 0 === n ? void 0 : n.toSignificant(6)) && void 0 !== t ? t : ""), r),
                    we = [Ia.a.CURRENCY_A, Ia.a.CURRENCY_B].reduce((function(e, t) { return Object(se.a)(Object(se.a)({}, e), {}, Object(rt.a)({}, t, ma(Q[t]))) }), {}),
                    Oe = [Ia.a.CURRENCY_A, Ia.a.CURRENCY_B].reduce((function(e, t) { var n, a; return Object(se.a)(Object(se.a)({}, e), {}, Object(rt.a)({}, t, null === (n = we[t]) || void 0 === n ? void 0 : n.equalTo(null !== (a = Z[t]) && void 0 !== a ? a : "0"))) }), {}),
                    Be = sa(Z[Ia.a.CURRENCY_A], c.t),
                    Ae = Object(g.a)(Be, 2),
                    Ce = Ae[0],
                    Ee = Ae[1],
                    Se = sa(Z[Ia.a.CURRENCY_B], c.t),
                    Ie = Object(g.a)(Se, 2),
                    Fe = Ie[0],
                    De = Ie[1],
                    Ne = Object(Pe.d)();

                function Le() { return Me.apply(this, arguments) }

                function Me() {
                    return (Me = Object(v.a)(T.a.mark((function e() {
                        var t, n, a, r, i, o, s, c, u, d, l, p, b, y, m, f;
                        return T.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (P && S && E) { e.next = 2; break }
                                    return e.abrupt("return");
                                case 2:
                                    if (n = Object(M.g)(P, S, E), a = Z[Ia.a.CURRENCY_A], r = Z[Ia.a.CURRENCY_B], a && r && R && U && me) { e.next = 6; break }
                                    return e.abrupt("return");
                                case 6:
                                    return t = {}, Object(rt.a)(t, Ia.a.CURRENCY_A, Object(M.c)(a, te ? 0 : he)[0]), Object(rt.a)(t, Ia.a.CURRENCY_B, Object(M.c)(r, te ? 0 : he)[0]), i = t, R === it.d || U === it.d ? (p = U === it.d, o = n.estimateGas.addLiquidityETH, s = n.addLiquidityETH, c = [null !== (d = null === (l = Object(dt.b)(p ? R : U, P)) || void 0 === l ? void 0 : l.address) && void 0 !== d ? d : "", (p ? a : r).raw.toString(), i[p ? Ia.a.CURRENCY_A : Ia.a.CURRENCY_B].toString(), i[p ? Ia.a.CURRENCY_B : Ia.a.CURRENCY_A].toString(), E, me.toHexString()], u = Ea.a.from((p ? r : a).raw.toString())) : (o = n.estimateGas.addLiquidity, s = n.addLiquidity, c = [null !== (b = null === (y = Object(dt.b)(R, P)) || void 0 === y ? void 0 : y.address) && void 0 !== b ? b : "", null !== (m = null === (f = Object(dt.b)(U, P)) || void 0 === f ? void 0 : f.address) && void 0 !== m ? m : "", a.raw.toString(), r.raw.toString(), i[Ia.a.CURRENCY_A].toString(), i[Ia.a.CURRENCY_B].toString(), E, me.toHexString()], u = null), ye(!0), e.next = 11, o.apply(void 0, Object(F.a)(c).concat([u ? { value: u } : {}])).then((function(e) {
                                        return s.apply(void 0, Object(F.a)(c).concat([Object(se.a)(Object(se.a)({}, u ? { value: u } : {}), {}, { gasLimit: Object(M.b)(e), gasPrice: N })])).then((function(e) {
                                            var t, n, a, r;
                                            ye(!1), Ne(e, { summary: "Add ".concat(null === (t = Z[Ia.a.CURRENCY_A]) || void 0 === t ? void 0 : t.toSignificant(3), " ").concat(null === (n = X[Ia.a.CURRENCY_A]) || void 0 === n ? void 0 : n.symbol, " and ").concat(null === (a = Z[Ia.a.CURRENCY_B]) || void 0 === a ? void 0 : a.toSignificant(3), " ").concat(null === (r = X[Ia.a.CURRENCY_B]) || void 0 === r ? void 0 : r.symbol) }), xe(e.hash)
                                        }))
                                    })).catch((function(e) { ye(!1), 4001 !== (null === e || void 0 === e ? void 0 : e.code) && console.error(e) }));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                var Re = function() { var e, t, n, a; return te ? Object(_.jsxs)(L.H, { alignItems: "center", children: [Object(_.jsx)(L.pb, { fontSize: "48px", marginRight: "10px", children: "".concat(null === (e = X[Ia.a.CURRENCY_A]) || void 0 === e ? void 0 : e.symbol, "/").concat(null === (t = X[Ia.a.CURRENCY_B]) || void 0 === t ? void 0 : t.symbol) }), Object(_.jsx)(ut.b, { currency0: X[Ia.a.CURRENCY_A], currency1: X[Ia.a.CURRENCY_B], size: 30 })] }) : Object(_.jsxs)(ct.a, { children: [Object(_.jsxs)(L.H, { alignItems: "center", children: [Object(_.jsx)(L.pb, { fontSize: "48px", marginRight: "10px", children: null === ne || void 0 === ne ? void 0 : ne.toSignificant(6) }), Object(_.jsx)(ut.b, { currency0: X[Ia.a.CURRENCY_A], currency1: X[Ia.a.CURRENCY_B], size: 30 })] }), Object(_.jsx)(st.d, { children: Object(_.jsx)(L.pb, { fontSize: "24px", children: "".concat(null === (n = X[Ia.a.CURRENCY_A]) || void 0 === n ? void 0 : n.symbol, "/").concat(null === (a = X[Ia.a.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol, " Pool Tokens") }) }), Object(_.jsx)(L.pb, { small: !0, textAlign: "left", my: "24px", children: D("Output is estimated. If the price changes by more than %slippage%% your transaction will revert.", { slippage: he / 100 }) })] }) },
                    Ue = function() { return Object(_.jsx)(Ma, { price: ee, currencies: X, parsedAmounts: Z, noLiquidity: te, onAdd: Le, poolTokenPercentage: ae }) },
                    _e = D("Supplying %amountA% %symbolA% and %amountB% %symbolB%", { amountA: null !== (i = null === (o = Z[Ia.a.CURRENCY_A]) || void 0 === o ? void 0 : o.toSignificant(6)) && void 0 !== i ? i : "", symbolA: null !== (u = null === (d = X[Ia.a.CURRENCY_A]) || void 0 === d ? void 0 : d.symbol) && void 0 !== u ? u : "", amountB: null !== (b = null === (y = Z[Ia.a.CURRENCY_B]) || void 0 === y ? void 0 : y.toSignificant(6)) && void 0 !== b ? b : "", symbolB: null !== (m = null === (f = X[Ia.a.CURRENCY_B]) || void 0 === f ? void 0 : f.symbol) && void 0 !== m ? m : "" }),
                    qe = Object(a.useCallback)((function(e) {
                        var t = Object(Ra.a)(e);
                        t === B ? A.push("/add/".concat(B, "/").concat(O)) : B ? A.push("/add/".concat(t, "/").concat(B)) : A.push("/add/".concat(t))
                    }), [B, A, O]),
                    Ve = Object(a.useCallback)((function(e) {
                        var t = Object(Ra.a)(e);
                        O === t ? B ? A.push("/add/".concat(B, "/").concat(t)) : A.push("/add/".concat(t)) : A.push("/add/".concat(O || "BNB", "/").concat(t))
                    }), [O, A, B]),
                    Ye = Object(a.useCallback)((function() { ve && oe(""), xe("") }), [oe, ve]),
                    He = Object(ot.a)(null === X || void 0 === X ? void 0 : X.CURRENCY_A, null === X || void 0 === X ? void 0 : X.CURRENCY_B),
                    We = Object(L.Cb)(Object(_.jsx)(Kt, { title: D(te ? "You are creating a pool" : "You will receive"), customOnDismiss: Ye, attemptingTxn: pe, hash: ve, content: function() { return Object(_.jsx)(Lt, { topContent: Re, bottomContent: Ue }) }, pendingText: _e, currencyToAdd: null === J || void 0 === J ? void 0 : J.liquidityToken }), !0, !0, "addLiquidityModal"),
                    ze = Object(g.a)(We, 1)[0];
                return Object(_.jsxs)(ga.a, {
                    children: [Object(_.jsxs)(ta.a, {
                        children: [Object(_.jsx)(ta.b, { title: D("Add Liquidity"), subtitle: D("Add liquidity to receive LP tokens"), helper: D("Liquidity providers earn a 0.17% trading fee on all trades made for that token pair, proportional to their share of the liquidity pool."), backTo: "/pool" }), Object(_.jsx)(L.q, {
                            children: Object(_.jsxs)(ct.a, {
                                gap: "20px",
                                children: [te && Object(_.jsx)(ct.b, { children: Object(_.jsx)(L.S, { variant: "warning", children: Object(_.jsxs)("div", { children: [Object(_.jsx)(L.pb, { bold: !0, mb: "8px", children: D("You are the first liquidity provider.") }), Object(_.jsx)(L.pb, { mb: "8px", children: D("The ratio of tokens you add will set the price of this pool.") }), Object(_.jsx)(L.pb, { children: D("Once you are happy with the rate click supply to review.") })] }) }) }), Object(_.jsx)(Sn, {
                                    value: je[Ia.a.CURRENCY_A],
                                    onUserInput: oe,
                                    onMax: function() {
                                        var e, t;
                                        oe(null !== (e = null === (t = we[Ia.a.CURRENCY_A]) || void 0 === t ? void 0 : t.toExact()) && void 0 !== e ? e : "")
                                    },
                                    onCurrencySelect: qe,
                                    showMaxButton: !Oe[Ia.a.CURRENCY_A],
                                    currency: X[Ia.a.CURRENCY_A],
                                    id: "add-liquidity-input-tokena",
                                    showCommonBases: !0
                                }), Object(_.jsx)(ct.b, { children: Object(_.jsx)(L.a, { width: "16px" }) }), Object(_.jsx)(Sn, {
                                    value: je[Ia.a.CURRENCY_B],
                                    onUserInput: ce,
                                    onCurrencySelect: Ve,
                                    onMax: function() {
                                        var e, t;
                                        ce(null !== (e = null === (t = we[Ia.a.CURRENCY_B]) || void 0 === t ? void 0 : t.toExact()) && void 0 !== e ? e : "")
                                    },
                                    showMaxButton: !Oe[Ia.a.CURRENCY_B],
                                    currency: X[Ia.a.CURRENCY_B],
                                    id: "add-liquidity-input-tokenb",
                                    showCommonBases: !0
                                }), X[Ia.a.CURRENCY_A] && X[Ia.a.CURRENCY_B] && $ !== Sa.a.INVALID && Object(_.jsx)(_.Fragment, { children: Object(_.jsxs)(Et.b, { padding: "0px", borderRadius: "20px", children: [Object(_.jsx)(st.b, { padding: "1rem", children: Object(_.jsx)(L.pb, { fontSize: "14px", children: D(te ? "Initial prices and pool share" : "Prices and pool share") }) }), " ", Object(_.jsx)(Et.b, { padding: "1rem", borderRadius: "20px", children: Object(_.jsx)(Ua, { currencies: X, poolTokenPercentage: ae, noLiquidity: te, price: ee }) })] }) }), He ? Object(_.jsx)(L.m, { disabled: !0, mb: "4px", children: D("Unsupported Asset") }) : E ? Object(_.jsxs)(ct.a, { gap: "md", children: [(Ce === ra.NOT_APPROVED || Ce === ra.PENDING || Fe === ra.NOT_APPROVED || Fe === ra.PENDING) && ue && Object(_.jsxs)(st.b, { children: [Ce !== ra.APPROVED && Object(_.jsx)(L.m, { onClick: Ee, disabled: Ce === ra.PENDING, width: Fe !== ra.APPROVED ? "48%" : "100%", children: Ce === ra.PENDING ? Object(_.jsx)(La.a, { children: D("Enabling %asset%", { asset: null === (h = X[Ia.a.CURRENCY_A]) || void 0 === h ? void 0 : h.symbol }) }) : D("Enable %asset%", { asset: null === (k = X[Ia.a.CURRENCY_A]) || void 0 === k ? void 0 : k.symbol }) }), Fe !== ra.APPROVED && Object(_.jsx)(L.m, { onClick: De, disabled: Fe === ra.PENDING, width: Ce !== ra.APPROVED ? "48%" : "100%", children: Fe === ra.PENDING ? Object(_.jsx)(La.a, { children: D("Enabling %asset%", { asset: null === (x = X[Ia.a.CURRENCY_B]) || void 0 === x ? void 0 : x.symbol }) }) : D("Enable %asset%", { asset: null === (j = X[Ia.a.CURRENCY_B]) || void 0 === j ? void 0 : j.symbol }) })] }), Object(_.jsx)(L.m, { variant: !ue && Z[Ia.a.CURRENCY_A] && Z[Ia.a.CURRENCY_B] ? "danger" : "primary", onClick: function() { V ? Le() : ze() }, disabled: !ue || Ce !== ra.APPROVED || Fe !== ra.APPROVED, children: null !== re && void 0 !== re ? re : D("Supply") })] }) : Object(_.jsx)(Te.a, {})]
                            })
                        })]
                    }), He ? Object(_.jsx)(bt, { currencies: [X.CURRENCY_A, X.CURRENCY_B] }) : J && !te && $ !== Sa.a.INVALID ? Object(_.jsx)(ct.a, { style: { minWidth: "20rem", width: "100%", maxWidth: "400px", marginTop: "1rem" }, children: Object(_.jsx)(Pa.a, { showUnwrapped: q, pair: J }) }) : null]
                })
            }

            function qa() { return Object(_.jsx)(Z.a, { to: "/add/" }) }
            var Va = /^(0x[a-fA-F0-9]{40}|BNB)-(0x[a-fA-F0-9]{40}|BNB)$/;

            function Ya(e) { var t = e.match.params.currencyIdA.match(Va); return (null === t || void 0 === t ? void 0 : t.length) ? Object(_.jsx)(Z.a, { to: "/add/".concat(t[1], "/").concat(t[2]) }) : Object(_.jsx)(_a, Object(se.a)({}, e)) }

            function Ha(e) {
                var t = e.match.params,
                    n = t.currencyIdA,
                    a = t.currencyIdB;
                return n.toLowerCase() === a.toLowerCase() ? Object(_.jsx)(Z.a, { to: "/add/".concat(n) }) : Object(_.jsx)(_a, Object(se.a)({}, e))
            }
            var Wa = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;
            var za = function(e) {
                var t = e.match.params.tokens;
                if (!Wa.test(t)) return Object(_.jsx)(Z.a, { to: "/pool" });
                var n = t.split("-"),
                    a = Object(g.a)(n, 2),
                    r = a[0],
                    i = a[1];
                return Object(_.jsx)(Z.a, { to: "/remove/".concat(r, "/").concat(i) })
            };

            function Ka(e) { var t = e.location; return Object(_.jsx)(Z.a, { to: Object(se.a)(Object(se.a)({}, t), {}, { pathname: "/swap" }) }) }

            function Ga(e) {
                var t = e.location,
                    n = e.location.search,
                    a = e.match.params.outputCurrency;
                return Object(_.jsx)(Z.a, { to: Object(se.a)(Object(se.a)({}, t), {}, { pathname: "/swap", search: n && n.length > 1 ? "".concat(n, "&outputCurrency=").concat(a) : "?outputCurrency=".concat(a) }) })
            }
            var Xa = Object(a.lazy)((function() { return n.e(6).then(n.bind(null, 1049)) })),
                Ja = Object(a.lazy)((function() { return n.e(7).then(n.bind(null, 1047)) })),
                $a = Object(a.lazy)((function() { return n.e(4).then(n.bind(null, 1048)) })),
                Qa = Object(a.lazy)((function() { return n.e(8).then(n.bind(null, 1050)) }));
            te.a.config({ EXPONENTIAL_AT: 1e3, DECIMAL_PLACES: 80 });
            var Za = function() { return Object(x.b)(), re(), Object(oe.a)(), Object(ie.a)(), Object(_.jsxs)(Z.c, { history: We, children: [Object(_.jsx)(L.kb, {}), Object(_.jsx)(ye, {}), Object(_.jsx)($e, { children: Object(_.jsx)(Ze, { fallback: Object(_.jsx)(tt.a, {}), children: Object(_.jsxs)(Z.d, { children: [Object(_.jsx)(Z.b, { path: "/", exact: !0, children: Object(_.jsx)(Xa, {}) }), Object(_.jsx)(Z.b, { path: "/profile", children: Object(_.jsx)($a, {}) }), Object(_.jsx)(Z.b, { exact: !0, strict: !0, path: "/swap", component: Ca }), Object(_.jsx)(Z.b, { exact: !0, strict: !0, path: "/swap/:outputCurrency", component: Ga }), Object(_.jsx)(Z.b, { exact: !0, strict: !0, path: "/send", component: Ka }), Object(_.jsx)(Z.b, { exact: !0, strict: !0, path: "/find", component: Qa }), Object(_.jsx)(Z.b, { exact: !0, strict: !0, path: "/create", component: qa }), Object(_.jsx)(Z.b, { exact: !0, path: "/add/:currencyIdA", component: Ya }), Object(_.jsx)(Z.b, { exact: !0, path: "/add/:currencyIdA/:currencyIdB", component: Ha }), Object(_.jsx)(Z.b, { exact: !0, path: "/create/:currencyIdA", component: Ya }), Object(_.jsx)(Z.b, { exact: !0, path: "/create/:currencyIdA/:currencyIdB", component: Ha }), Object(_.jsx)(Z.b, { exact: !0, strict: !0, path: "/remove/:tokens", component: za }), Object(_.jsx)(Z.b, { component: Ja })] }) }) }), Object(_.jsx)(at, { iterations: 2 }), Object(_.jsx)(et.a, {}), Object(_.jsx)(pe, {})] }) },
                er = r.a.memo(Za),
                tr = n(265),
                nr = n(177),
                ar = n(258),
                rr = n(98),
                ir = function(e) {
                    var t = Object(Dn.i)(),
                        n = Object(g.a)(t, 1)[0];
                    return Object(_.jsx)(de.b, Object(se.a)({ theme: n ? L.zb : L.Ab }, e))
                },
                or = function(e) { var t = e.children; return Object(_.jsx)(ke.b, { getLibrary: nr.b, children: Object(_.jsx)(l.a, { store: rr.a, children: Object(_.jsx)(et.c, { children: Object(_.jsx)(tr.b, { children: Object(_.jsx)(ir, { children: Object(_.jsx)(be.a, { children: Object(_.jsx)(ar.b, { children: Object(_.jsx)(L.ab, { children: t }) }) }) }) }) }) }) }) };

            function sr() { return Object(_.jsxs)(_.Fragment, { children: [Object(_.jsx)(h, {}), Object(_.jsx)(q, {}), Object(_.jsx)(N, {})] }) }

            function cr(e) {
                var t = e.children,
                    n = Object(s.a)().account;
                return Object(a.useMemo)((function() { return Boolean(n && -1 !== c.j.indexOf(n)) }), [n]) ? Object(_.jsx)("div", { children: "Blocked address" }) : Object(_.jsx)(_.Fragment, { children: t })
            }
            o.a.render(Object(_.jsx)(r.a.StrictMode, { children: Object(_.jsx)(cr, { children: Object(_.jsxs)(or, { children: [Object(_.jsx)(sr, {}), Object(_.jsx)(er, {})] }) }) }), document.getElementById("root"))
        },
        73: function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() { return r })), n.d(t, "b", (function() { return i })), n.d(t, "f", (function() { return o })), n.d(t, "d", (function() { return s })), n.d(t, "c", (function() { return c })), n.d(t, "a", (function() { return u }));
            var a = n(15),
                r = { pending: Object(a.b)("lists/fetchTokenList/pending"), fulfilled: Object(a.b)("lists/fetchTokenList/fulfilled"), rejected: Object(a.b)("lists/fetchTokenList/rejected") },
                i = Object(a.b)("lists/addList"),
                o = Object(a.b)("lists/removeList"),
                s = Object(a.b)("lists/enableList"),
                c = Object(a.b)("lists/disableList"),
                u = Object(a.b)("lists/acceptListUpdate");
            Object(a.b)("lists/rejectVersionUpdate")
        },
        78: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return l })), n.d(t, "a", (function() { return p })), n.d(t, "d", (function() { return b })), n.d(t, "c", (function() { return y }));
            var a = n(17),
                r = n(4),
                i = n(36),
                o = n(27),
                s = n(37),
                c = new r.g(r.e.BigInt(25), r.e.BigInt(1e4)),
                u = new r.g(r.e.BigInt(1e4), r.e.BigInt(1e4)),
                d = u.subtract(c);

            function l(e) {
                var t = e ? u.subtract(e.route.pairs.reduce((function(e) { return e.multiply(d) }), u)) : void 0,
                    n = e && t ? e.priceImpact.subtract(t) : void 0;
                return { priceImpactWithoutFee: n ? new r.g(null === n || void 0 === n ? void 0 : n.numerator, null === n || void 0 === n ? void 0 : n.denominator) : void 0, realizedLPFee: t && e && (e.inputAmount instanceof r.k ? new r.k(e.inputAmount.token, t.multiply(e.inputAmount.raw).quotient) : r.c.ether(t.multiply(e.inputAmount.raw).quotient)) }
            }

            function p(e, t) { var n, r = Object(s.a)(t); return n = {}, Object(a.a)(n, o.a.INPUT, null === e || void 0 === e ? void 0 : e.maximumAmountIn(r)), Object(a.a)(n, o.a.OUTPUT, null === e || void 0 === e ? void 0 : e.minimumAmountOut(r)), n }

            function b(e) { return (null === e || void 0 === e ? void 0 : e.lessThan(i.k)) ? (null === e || void 0 === e ? void 0 : e.lessThan(i.b)) ? (null === e || void 0 === e ? void 0 : e.lessThan(i.d)) ? (null === e || void 0 === e ? void 0 : e.lessThan(i.c)) ? 0 : 1 : 2 : 3 : 4 }

            function y(e, t) { return e ? t ? "".concat(e.executionPrice.invert().toSignificant(6), " ").concat(e.inputAmount.currency.symbol, " / ").concat(e.outputAmount.currency.symbol) : "".concat(e.executionPrice.toSignificant(6), " ").concat(e.outputAmount.currency.symbol, " / ").concat(e.inputAmount.currency.symbol) : "" }
        },
        79: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() { return o })), n.d(t, "d", (function() { return s })), n.d(t, "a", (function() { return c })), n.d(t, "e", (function() { return u })), n.d(t, "c", (function() { return d })), n.d(t, "b", (function() { return l })), n.d(t, "g", (function() { return p }));
            var a = n(15),
                r = /^0x[a-fA-F0-9]{40}$/,
                i = /^0x[a-f0-9]*$/;

            function o(e) { if (!r.test(e.address)) throw new Error("Invalid address: ".concat(e.address)); if (!i.test(e.callData)) throw new Error("Invalid hex: ".concat(e.callData)); return "".concat(e.address, "-").concat(e.callData) }

            function s(e) { var t = e.split("-"); if (2 !== t.length) throw new Error("Invalid call key: ".concat(e)); return { address: t[0], callData: t[1] } }
            var c = Object(a.b)("multicall/addMulticallListeners"),
                u = Object(a.b)("multicall/removeMulticallListeners"),
                d = Object(a.b)("multicall/fetchingMulticallResults"),
                l = Object(a.b)("multicall/errorFetchingMulticallResults"),
                p = Object(a.b)("multicall/updateMulticallResults")
        },
        83: function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() { return u })), n.d(t, "c", (function() { return d })), n.d(t, "d", (function() { return l })), n.d(t, "f", (function() { return p })), n.d(t, "a", (function() { return b })), n.d(t, "b", (function() { return y }));
            n(11);
            var a = n(29),
                r = n.n(a),
                i = n(61),
                o = n(62),
                s = n(133),
                c = n(39),
                u = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18; return new r.a(e).times(c.b.pow(t)) },
                d = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18; return new r.a(e).dividedBy(c.b.pow(t)) },
                l = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18; return d(e, t).toNumber() },
                p = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return d(e, t).toFixed(n)
                },
                b = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 18,
                        a = e.mod(i.a.BigNumber.from(10).pow(n - t));
                    return Object(o.formatUnits)(e.sub(a), n)
                },
                y = function(e) { var t = Object(s.c)(); return new Intl.NumberFormat(t, { notation: "compact", compactDisplay: "long", maximumSignificantDigits: 2 }).format(e) }
        },
        84: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() { return a })), n.d(t, "c", (function() { return r })), n.d(t, "b", (function() { return i })), n.d(t, "f", (function() { return o })), n.d(t, "a", (function() { return c })), n.d(t, "e", (function() { return u }));
            var a = "https://api.thegraph.com/subgraphs/name/pancakeswap/profile",
                r = "https://api.thegraph.com/subgraphs/name/pancakeswap/prediction-v2",
                i = "https://api.thegraph.com/subgraphs/name/pancakeswap/lottery",
                o = "https://voting-api.pancakeswap.info/api",
                s = "https://hub.snapshot.org",
                c = "https://profile.pancakeswap.com",
                u = "".concat(s, "/graphql");
            "".concat(s, "/api/message")
        },
        86: function(e, t, n) {
            "use strict";
            var a = n(34),
                r = n(10),
                i = Object(a.c)(),
                o = [{ sousId: 0, stakingToken: i.cake, earningToken: i.cake, contractAddress: { 97: "0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a", 56: "0x73feaa1eE314F8c655E354234017bE2193C9E24E" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "10", sortOrder: 1, isFinished: !1 }, { sousId: 220, stakingToken: i.cake, earningToken: i.chess, contractAddress: { 97: "", 56: "0x4D1Ec426d0d7fb6bF344Dd372d0502EDD71c8d88" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.0861" }, { sousId: 219, stakingToken: i.cake, earningToken: i.tlos, contractAddress: { 97: "", 56: "0xCB41a72067c227D6Ed7bc7CFAcd13eCe47Dfe5E9" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.3616" }, { sousId: 218, stakingToken: i.cake, earningToken: i.stephero, contractAddress: { 97: "", 56: "0xcecba456fefe5b18d43df23419e7ab755b436655" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.1851" }, { sousId: 217, stakingToken: i.cake, earningToken: i.bp, contractAddress: { 97: "", 56: "0x8ed7acf12b08274d5cdaf03d43d0e54bcbdd487e" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.217" }, { sousId: 216, stakingToken: i.cake, earningToken: i.cvp, contractAddress: { 97: "", 56: "0xC4b15117BC0be030c20754FF36197641477af5d1" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.14" }, { sousId: 215, stakingToken: i.cake, earningToken: i.qbt, contractAddress: { 97: "", 56: "0xB72dEf58D0832f747d6B7197471Fe20AeA7EB463" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "1.412" }, { sousId: 214, stakingToken: i.cake, earningToken: i.naos, contractAddress: { 97: "", 56: "0xb38b78529bCc895dA16CE2978D6cD6C56e8CfFC3" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.1736" }, { sousId: 213, stakingToken: i.cake, earningToken: i.pha, contractAddress: { 97: "", 56: "0x2E101b5F7f910F2609e5AcE5f43bD274b1DE09AA" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.28" }, { sousId: 212, stakingToken: i.cake, earningToken: i.bel, contractAddress: { 97: "", 56: "0x52733Ad7b4D09BF613b0389045e33E2F287afa04" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.101" }, { sousId: 211, stakingToken: i.cake, earningToken: i.ramp, contractAddress: { 97: "", 56: "0x401b9b97bdbc3197c1adfab9652dc78040bd1e13" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.9837" }, { sousId: 210, stakingToken: i.cake, earningToken: i.pots, contractAddress: { 97: "", 56: "0xBeDb490970204cb3CC7B0fea94463BeD67d5364D" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.0868" }, { sousId: 209, stakingToken: i.cake, earningToken: i.tusd, contractAddress: { 97: "", 56: "0xb6e510ae2da1ab4e350f837c70823ab75091780e" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.5787" }, { sousId: 208, stakingToken: i.cake, earningToken: i.revv, contractAddress: { 97: "", 56: "0x8aa5b2c67852ed5334c8a7f0b5eb0ef975106793" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "1.331" }, { sousId: 207, stakingToken: i.cake, earningToken: i.btt, contractAddress: { 97: "", 56: "0x3b804460c3c62f0f565af593984159f13b1ac976" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "263" }, { sousId: 206, stakingToken: i.cake, earningToken: i.skill, contractAddress: { 97: "", 56: "0x455f4d4cc4d6ca15441a93c631e82aaf338ad843" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.00289" }, { sousId: 205, stakingToken: i.cake, earningToken: i.win, contractAddress: { 97: "", 56: "0xde4aef42bb27a2cb45c746acde4e4d8ab711d27c" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "1815.39" }, { sousId: 204, stakingToken: i.cake, earningToken: i.if, contractAddress: { 97: "", 56: "0x57d3524888ded4085d9124a422f13b27c8a43de7" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.02835" }, { sousId: 203, stakingToken: i.cake, earningToken: i.sps, contractAddress: { 97: "", 56: "0xb56299d8fbf46c509014b103a164ad1fc65ea222" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "12.86" }, { sousId: 202, stakingToken: i.cake, earningToken: i.c98, contractAddress: { 97: "", 56: "0x5e49531BA07bE577323e55666D46C6217164119E" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "1.7361" }, { sousId: 201, stakingToken: i.cake, earningToken: i.axs, contractAddress: { 97: "", 56: "0xBB472601B3CB32723d0755094BA80B73F67f2AF3" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.00744" }, { sousId: 200, stakingToken: i.axs, earningToken: i.cake, contractAddress: { 97: "", 56: "0x583A36816F3b8401C4fdf682203E0caDA6997740" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.00992" }, { sousId: 199, stakingToken: i.cake, earningToken: i.pmon, contractAddress: { 97: "", 56: "0x28050e8f024e05f9ddbef5f60dd49f536dba0cf0" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.02696" }, { sousId: 198, stakingToken: i.cake, earningToken: i.trx, contractAddress: { 97: "", 56: "0xb2b62f88ab82ed0bb4ab4da60d9dc9acf9e816e5" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "9.6643" }, { sousId: 197, stakingToken: i.cake, earningToken: i.chess, contractAddress: { 97: "", 56: "0xd1812e7e28c39e78727592de030fc0e7c366d61a" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.4286" }, { sousId: 196, stakingToken: i.cake, earningToken: i.titan, contractAddress: { 97: "", 56: "0x97058cf9b36c9ef1622485cef22e72d6fea32a36" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.08912" }, { sousId: 195, stakingToken: i.cake, earningToken: i.harmony, contractAddress: { 97: "", 56: "0xe595456846155e23b24cc9cbee910ee97027db6d" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "3.0092" }, { sousId: 194, stakingToken: i.cake, earningToken: i.mask, contractAddress: { 97: "", 56: "0xae611c6d4d3ca2cee44cd34eb7aac29d5a387fcf" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.06423" }, { sousId: 193, stakingToken: i.cake, earningToken: i.dvi, contractAddress: { 97: "", 56: "0x135827eaf9746573c0b013f18ee12f138b9b0384" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.7233" }, { sousId: 192, stakingToken: i.cake, earningToken: i.gum, contractAddress: { 97: "", 56: "0x09b8a5f51c9e245402057851ada274174fa00e2a" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.67129" }, { sousId: 191, stakingToken: i.cake, earningToken: i.adx, contractAddress: { 97: "", 56: "0x53a2d1db049b5271c6b6db020dba0e8a7c4eb90d" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.7523" }, { sousId: 190, stakingToken: i.cake, earningToken: i.suter, contractAddress: { 97: "", 56: "0x4da8da81647ee0aa7350e9959f3e4771eb753da0" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "69.9074" }, { sousId: 189, stakingToken: i.cake, earningToken: i.bscpad, contractAddress: { 97: "", 56: "0x0446b8f8474c590d2249a4acdd6eedbc2e004bca" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.3877" }, { sousId: 188, stakingToken: i.cake, earningToken: i.rabbit, contractAddress: { 97: "", 56: "0x391240A007Bfd8A59bA74978D691219a76c64c5C" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "3.993" }, { sousId: 187, stakingToken: i.cake, earningToken: i.waultx, contractAddress: { 97: "", 56: "0x017DEa5C58c2Bcf57FA73945073dF7AD4052a71C" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "7.9108" }, { sousId: 186, stakingToken: i.cake, earningToken: i.wex, contractAddress: { 97: "", 56: "0x6Bd94783caCef3fb7eAa9284f1631c464479829f" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "11.574" }, { sousId: 185, stakingToken: i.cake, earningToken: i.form, contractAddress: { 97: "", 56: "0x7c71723fB1F9Cfb250B702cfc4eBd5D9Ab2E83d9" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "1.4467" }, { sousId: 184, stakingToken: i.cake, earningToken: i.orbs, contractAddress: { 97: "", 56: "0x9C8813d7D0A61d30610a7A5FdEF9109e196a3D77" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "3.8946" }, { sousId: 183, stakingToken: i.cake, earningToken: i.$dg, contractAddress: { 97: "", 56: "0xa07a91da6d10173f33c294803684bceede325957" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.00135" }, { sousId: 182, stakingToken: i.cake, earningToken: i.woo, contractAddress: { 97: "", 56: "0x88c321d444c88acf3e747dc90f20421b97648903" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.3854" }, { sousId: 181, stakingToken: i.cake, earningToken: i.woo, contractAddress: { 97: "", 56: "0x3c7234c496d76133b48bd6a342e7aea4f8d87fc8" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.0003854" }, { sousId: 180, stakingToken: i.cake, earningToken: i.htb, contractAddress: { 97: "", 56: "0x64473c33c360f315cab38674f1633505d1d8dcb2" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "5.2083" }, { sousId: 179, stakingToken: i.cake, earningToken: i.jgn, contractAddress: { 97: "", 56: "0x5cc7a19a50be2a6b2540ebcd55bd728e732e59c3" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.1001" }, { sousId: 178, stakingToken: i.cake, earningToken: i.dft, contractAddress: { 97: "", 56: "0x2666e2494e742301ffc8026e476acc1710a775ed" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "1.7361" }, { sousId: 177, stakingToken: i.cake, earningToken: i.hai, contractAddress: { 97: "", 56: "0x6ac2213F09A404c86AFf506Aa51B6a5BF1F6e24E" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "1.3078" }, { sousId: 176, stakingToken: i.cake, earningToken: i.o3, contractAddress: { 97: "", 56: "0x35BD47263f7E57368Df76339903C53bAa99076e1" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.107638" }, { sousId: 175, stakingToken: i.cake, earningToken: i.ampl, contractAddress: { 97: "", 56: "0x62dEc3A560D2e8A84D30752bA454f97b26757877" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.398" }, { sousId: 174, stakingToken: i.cake, earningToken: i.oddz, contractAddress: { 97: "", 56: "0x44d1f81e80e43e935d66d65874354ef91e5e49f6" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.4843" }, { sousId: 173, stakingToken: i.cake, earningToken: i.bondly, contractAddress: { 97: "", 56: "0x4ea43fce546975aae120c9eeceb172500be4a02b" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.6741" }, { sousId: 172, stakingToken: i.cake, earningToken: i.marsh, contractAddress: { 97: "", 56: "0x567fd708e788e51b68666b9310ee9df163d60fae" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.1108" }, { sousId: 171, stakingToken: i.cake, earningToken: i.mbox, contractAddress: { 97: "", 56: "0x36f9452083fc9bc469a31e7966b873f402292433" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.4803" }, { sousId: 170, stakingToken: i.cake, earningToken: i.ata, contractAddress: { 97: "", 56: "0xc612680457751d0d01b5d901ad08132a3b001900" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "1.7361" }, { sousId: 169, stakingToken: i.cake, earningToken: i.mx, contractAddress: { 97: "", 56: "0x336bcd59f2b6eb7221a99f7a50fd03c6bf9a306b" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.27777" }, { sousId: 168, stakingToken: i.cake, earningToken: i.bcfx, contractAddress: { 97: "", 56: "0x2b3974dda76b2d408b7d680a27fbb0393e3cf0e1" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.6944" }, { sousId: 167, stakingToken: i.cake, earningToken: i.qkc, contractAddress: { 97: "", 56: "0xfa67f97eeee6de55d179ecabbfe701f27d9a1ed9" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "15.9143" }, { sousId: 166, stakingToken: i.cake, earningToken: i.ktn, contractAddress: { 97: "", 56: "0x48852322a185dc5fc733ff8c8d7c6dcbd2b3b2a2" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.01215" }, { sousId: 165, stakingToken: i.cake, earningToken: i.mtrg, contractAddress: { 97: "", 56: "0xf4d0f71698f58f221911515781b05e808a8635cb" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.05613" }, { sousId: 164, stakingToken: i.cake, earningToken: i.tusd, contractAddress: { 97: "", 56: "0x9dceb1d92f7e0361d0766f3d98482424df857654" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.5787" }, { sousId: 163, stakingToken: i.cake, earningToken: i.vrt, contractAddress: { 97: "", 56: "0xb77f1425ec3a7c78b1a1e892f72332c8b5e8ffcb" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "40.5092" }, { sousId: 162, stakingToken: i.cake, earningToken: i.kalm, contractAddress: { 97: "", 56: "0xb9ff4da0954b300542e722097671ead8cf337c17" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.0868" }, { sousId: 161, stakingToken: i.cake, earningToken: i.ez, contractAddress: { 97: "", 56: "0xb19395702460261e51edf7a7b130109c64f13af9" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.01736" }, { sousId: 160, stakingToken: i.cake, earningToken: i.kalm, contractAddress: { 97: "", 56: "0x6e113ecb9ff2d271140f124c2cc5b5e4b5700c9f" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, isFinished: !0, tokenPerBlock: "0.00868" }, { sousId: 159, stakingToken: i.cake, earningToken: i.popen, contractAddress: { 97: "", 56: "0x7baf1763ce5d0da8c9d85927f08a8be9c481ce50" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.19097" }, { sousId: 158, stakingToken: i.cake, earningToken: i.lien, contractAddress: { 97: "", 56: "0x2b8d6c9c62bfc1bed84724165d3000e61d332cab" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.023148" }, { sousId: 157, stakingToken: i.cake, earningToken: i.well, contractAddress: { 97: "", 56: "0x8a06ff2748edcba3fb4e44a6bfda4e46769e557b" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.2025", sortOrder: 999 }, { sousId: 156, stakingToken: i.cake, earningToken: i.deri, contractAddress: { 97: "", 56: "0x3eba95f5493349bbe0cad33eaae05dc6a7e26b90" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "1.6087", sortOrder: 999 }, { sousId: 155, stakingToken: i.cake, earningToken: i.chr, contractAddress: { 97: "", 56: "0x593edbd14a5b7eec828336accca9c16cc12f04be" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "1.655", sortOrder: 999 }, { sousId: 154, stakingToken: i.cake, earningToken: i.cyc, contractAddress: { 97: "", 56: "0xD714738837944C3c592477249E8edB724A76e068" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.00015914", sortOrder: 999 }, { sousId: 153, stakingToken: i.cake, earningToken: i.xend, contractAddress: { 97: "", 56: "0x8ea9f2482b2f7b12744a831f81f8d08714adc093" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.31828", sortOrder: 999, isFinished: !1 }, { sousId: 152, stakingToken: i.cake, earningToken: i.hget, contractAddress: { 97: "", 56: "0x8e8125f871eb5ba9d55361365f5391ab437f9acc" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.03553", sortOrder: 999, isFinished: !1 }, { sousId: 151, stakingToken: i.cake, earningToken: i.hotcross, contractAddress: { 97: "", 56: "0x0e09205e993f78cd5b3a5df355ae98ee7d0b5834" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "3.4722", isFinished: !1 }, { sousId: 150, stakingToken: i.cake, earningToken: i.rfox, contractAddress: { 97: "", 56: "0xf9f00d41b1f4b3c531ff750a9b986c1a530f33d9" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "1.7361", isFinished: !1 }, { sousId: 149, stakingToken: i.cake, earningToken: i.wmass, contractAddress: { 97: "", 56: "0x4Af531EcD50167a9402Ce921ee6436dd4cFC04FD" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.24942", isFinished: !1 }, { sousId: 148, stakingToken: i.cake, earningToken: i.ubxt, contractAddress: { 97: "", 56: "0x9b4bac2d8f69853aa29cb45478c77fc54532ac22" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "2.4074", isFinished: !1 }, { sousId: 147, stakingToken: i.cake, earningToken: i.btr, contractAddress: { 97: "", 56: "0x20ee70a07ae1b475cb150dec27930d97915726ea" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "2.8935", isFinished: !1 }, { sousId: 146, stakingToken: i.cake, earningToken: i.\u03c4doge, contractAddress: { 97: "", 56: "0x017556dffb8c6a52fd7f4788adf6fb339309c81b" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.868", isFinished: !1 }, { sousId: 145, stakingToken: i.cake, earningToken: i.pmon, contractAddress: { 97: "", 56: "0xdaa711ecf2ac0bff5c82fceeae96d0008791cc49" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.01261", isFinished: !1 }, { sousId: 144, stakingToken: i.cake, earningToken: i.one, contractAddress: { 97: "", 56: "0x74af842ecd0b6588add455a47aa21ed9ba794108" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "57.87", isFinished: !1 }, { sousId: 143, stakingToken: i.cake, earningToken: i.fine, contractAddress: { 97: "", 56: "0x42d41749d6e9a1c5b47e27f690d4531f181b2159" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.1342", isFinished: !1 }, { sousId: 142, stakingToken: i.doge, earningToken: i.cake, contractAddress: { 97: "", 56: "0xbebd44824631b55991fa5f2bf5c7a4ec96ff805b" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.01388", isFinished: !1 }, { sousId: 141, stakingToken: i.cake, earningToken: i.bmxx, contractAddress: { 97: "", 56: "0x55131f330c886e3f0cae389cedb23766ac9aa3ed" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.01331", isFinished: !1 }, { sousId: 140, stakingToken: i.cake, earningToken: i.oin, contractAddress: { 97: "", 56: "0x01453a74a94687fa3f99b80762435855a13664f4" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.3472", isFinished: !1 }, { sousId: 139, stakingToken: i.cake, earningToken: i.hyfi, contractAddress: { 97: "", 56: "0x0032ceb978fe5fc8a5d5d6f5adfc005e76397e29" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "2.8935", isFinished: !1 }, { sousId: 138, stakingToken: i.cake, earningToken: i.kun, contractAddress: { 97: "", 56: "0x439b46d467402cebc1a2fa05038b5b696b1f4417" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.23148", isFinished: !1 }, { sousId: 137, stakingToken: i.cake, earningToken: i.math, contractAddress: { 97: "", 56: "0x377ae5f933aa4cfa41fa03e2cae8a2befccf53b2" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.15798", isFinished: !1 }, { sousId: 136, stakingToken: i.cake, earningToken: i.ust, contractAddress: { 97: "", 56: "0xce3ebac3f549ebf1a174a6ac3b390c179422b5f6" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.17361", isFinished: !1 }, { sousId: 135, stakingToken: i.cake, earningToken: i.win, contractAddress: { 97: "", 56: "0xd26dec254c699935c286cd90e9841dcabf1af72d" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "462.96", isFinished: !1 }, { sousId: 134, stakingToken: i.cake, earningToken: i.trx, contractAddress: { 97: "", 56: "0x93e2867d9b74341c2d19101b7fbb81d6063cca4d" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "4.0509", isFinished: !1 }, { sousId: 133, stakingToken: i.cake, earningToken: i.btt, contractAddress: { 97: "", 56: "0x3b644e44033cff70bd6b771904225f3dd69dfb6d" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "79.86", isFinished: !1 }, { sousId: 132, stakingToken: i.cake, earningToken: i.lmt, contractAddress: { 97: "", 56: "0x0a687d7b951348d681f7ed5eea84c0ba7b9566dc" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.66145", isFinished: !1 }, { sousId: 131, stakingToken: i.cake, earningToken: i.pnt, contractAddress: { 97: "", 56: "0x417df1c0e6a498eb1f2247f99032a01d4fafe922" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.09548", isFinished: !1 }, { sousId: 130, stakingToken: i.cake, earningToken: i.xmark, contractAddress: { 97: "", 56: "0xdc8943d806f9dd64312d155284abf780455fd345" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.0298", isFinished: !1 }, { sousId: 129, stakingToken: i.cake, earningToken: i.ramp, contractAddress: { 97: "", 56: "0xa90a894e5bc20ab2be46c7e033a38f8b8eaa771a" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.4861", isFinished: !0 }, { sousId: 128, stakingToken: i.cake, earningToken: i.hakka, contractAddress: { 97: "", 56: "0x34ac807e34e534fe426da1e11f816422774aae1c" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "3.4722", isFinished: !1 }, { sousId: 127, stakingToken: i.cake, earningToken: i.pbtc, contractAddress: { 97: "", 56: "0x31fa2f516b77c4273168b284ac6d9def5aa6dafb" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.0000031", isFinished: !1 }, { sousId: 126, stakingToken: i.cake, earningToken: i.lien, contractAddress: { 97: "", 56: "0x7112f8988f075c7784666ab071927ae4109a8076" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.003472", isFinished: !1 }, { sousId: 125, stakingToken: i.cake, earningToken: i.bbadger, contractAddress: { 97: "", 56: "0x126dfbcef85c5bf335f8be99ca4006037f417892" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.00265278", isFinished: !1 }, { sousId: 124, stakingToken: i.cake, earningToken: i.bdigg, contractAddress: { 97: "", 56: "0x4f0ad2332b1f9983e8f63cbee617523bb7de5031" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.00000403", isFinished: !1 }, { sousId: 123, stakingToken: i.cake, earningToken: i.bondly, contractAddress: { 97: "", 56: "0x9483ca44324de06802576866b9d296f7614f45ac" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.4629", isFinished: !1 }, { sousId: 122, stakingToken: i.cake, earningToken: i.xed, contractAddress: { 97: "", 56: "0x72ceec6e2a142678e703ab0710de78bc819f4ce0" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.3472", isFinished: !1 }, { sousId: 121, stakingToken: i.cake, earningToken: i.cgg, contractAddress: { 97: "", 56: "0x1c6ed21d3313822ae73ed0d94811ffbbe543f341" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.10918", isFinished: !1 }, { sousId: 120, stakingToken: i.cake, earningToken: i.perl, contractAddress: { 97: "", 56: "0x1ac0d0333640f57327c83053c581340ebc829e30" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "1.1574", isFinished: !1 }, { sousId: 119, stakingToken: i.cake, earningToken: i.arpa, contractAddress: { 97: "", 56: "0xc707e5589aeb1dc117b0bb5a3622362f1812d4fc" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.949", isFinished: !1 }, { sousId: 118, stakingToken: i.cake, earningToken: i.oddz, contractAddress: { 97: "", 56: "0x22106cdcf9787969e1672d8e6a9c03a889cda9c5" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.11284", isFinished: !1 }, { sousId: 117, stakingToken: i.cake, earningToken: i.dexe, contractAddress: { 97: "", 56: "0x999b86e8bba3d4f05afb8155963999db70afa97f" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.009837", isFinished: !0 }, { sousId: 116, stakingToken: i.cake, earningToken: i.dfd, contractAddress: { 97: "", 56: "0xAF3EfE5fCEeBc603Eada6A2b0172be11f7405102" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.46296", isFinished: !1 }, { sousId: 115, stakingToken: i.cake, earningToken: i.alpaca, contractAddress: { 97: "", 56: "0xf73fdeb26a8c7a4abf3809d3db11a06ba5c13d0e" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.22743", isFinished: !1 }, { sousId: 114, stakingToken: i.cake, earningToken: i.\u03c4btc, contractAddress: { 97: "", 56: "0xaac7171afc93f4b75e1268d208040b152ac65e32" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.00000608", isFinished: !1 }, { sousId: 113, stakingToken: i.cake, earningToken: i.\u03c4btc, contractAddress: { 97: "", 56: "0x2c6017269b4324d016ca5d8e3267368652c18905" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.00000608", isFinished: !0 }, { sousId: 112, stakingToken: i.cake, earningToken: i.swingby, contractAddress: { 97: "", 56: "0x675434c68f2672c983e36cf10ed13a4014720b79" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.21527" }, { sousId: 111, stakingToken: i.cake, earningToken: i.xed, contractAddress: { 97: "", 56: "0x05d6c2d1d687eacfb5e6440d5a3511e91f2201a8" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.3472", isFinished: !0, enableEmergencyWithdraw: !0 }, { sousId: 110, stakingToken: i.cake, earningToken: i.hakka, contractAddress: { 97: "", 56: "0xd623a32da4a632ce01766c317d07cb2cad56949b" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "3.4722", isFinished: !0, enableEmergencyWithdraw: !0 }, { sousId: 109, stakingToken: i.cake, earningToken: i.cgg, contractAddress: { 97: "", 56: "0xdf75f38dbc98f9f26377414e567abcb8d57cca33" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.10918", isFinished: !0, enableEmergencyWithdraw: !0 }, { sousId: 108, stakingToken: i.cake, earningToken: i.mix, contractAddress: { 97: "", 56: "0xce64a930884b2c68cd93fc1c7c7cdc221d427692" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.3721" }, { sousId: 107, stakingToken: i.cake, earningToken: i.suter, contractAddress: { 97: "", 56: "0xc1E70edd0141c454b834Deac7ddDeA413424aEf9" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "15.3356" }, { sousId: 106, stakingToken: i.cake, earningToken: i.broobee, contractAddress: { 97: "", 56: "0x189d8228CdfDc404Bd9e5bD65ff958cb5fd8855c" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "14.4675" }, { sousId: 105, stakingToken: i.cake, earningToken: i.hzn, contractAddress: { 97: "", 56: "0x0196c582216e2463f052E2B07Ef8667Bec9Fb17a" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.6944" }, { sousId: 104, stakingToken: i.cake, earningToken: i.alpa, contractAddress: { 97: "", 56: "0x8f84106286c9c8A42bc3555C835E6e2090684ab7" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.23495" }, { sousId: 103, stakingToken: i.cake, earningToken: i.perl, contractAddress: { 97: "", 56: "0xa8d32b31ECB5142f067548Bf0424389eE98FaF26" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "1.1574", isFinished: !0, enableEmergencyWithdraw: !0 }, { sousId: 102, stakingToken: i.cake, earningToken: i.tlm, contractAddress: { 97: "", 56: "0xC59aa49aE508050c2dF653E77bE13822fFf02E9A" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "17.361" }, { sousId: 101, stakingToken: i.cake, earningToken: i.jgn, contractAddress: { 97: "", 56: "0x14AeA62384789EDA98f444cCb970F6730877d3F9" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.08796" }, { sousId: 100, stakingToken: i.cake, earningToken: i.eps, contractAddress: { 97: "", 56: "0xebb87dF24D65977cbe62538E4B3cFBD5d0308642" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.07716" }, { sousId: 99, stakingToken: i.cake, earningToken: i.arpa, contractAddress: { 97: "", 56: "0x40918EF8efFF4aA061656013a81E0e5A8A702eA7" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.949", isFinished: !0, enableEmergencyWithdraw: !0 }, { sousId: 98, stakingToken: i.cake, earningToken: i.itam, contractAddress: { 97: "", 56: "0x44eC1B26035865D9A7C130fD872670CD7Ebac2bC" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "3.096" }, { sousId: 97, stakingToken: i.cake, earningToken: i.bondly, contractAddress: { 97: "", 56: "0x1329ad151dE6C441184E32E108401126AE850937" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.4629", isFinished: !0, enableEmergencyWithdraw: !0 }, { sousId: 96, stakingToken: i.cake, earningToken: i.tko, contractAddress: { 97: "", 56: "0x9bbDc92474a7e7321B78dcDA5EF35f4981438760" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "1.1574" }, { sousId: 95, stakingToken: i.cake, earningToken: i.apys, contractAddress: { 97: "", 56: "0x46530d79b238f809e80313e73715b160c66677aF" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.09953" }, { sousId: 94, stakingToken: i.cake, earningToken: i.hoo, contractAddress: { 97: "", 56: "0x47fD853D5baD391899172892F91FAa6d0cd8A2Aa" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.489" }, { sousId: 93, stakingToken: i.cake, earningToken: i.oddz, contractAddress: { 97: "", 56: "0xe25aB6F05BBF6C1be953BF2d7df15B3e01b8e5a5" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.11284", isFinished: !0, enableEmergencyWithdraw: !0 }, { sousId: 92, stakingToken: i.cake, earningToken: i.easy, contractAddress: { 97: "", 56: "0xEB8Fd597921E3Dd37B0F103a2625F855e2C9b9B5" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.0072338" }, { sousId: 91, stakingToken: i.cake, earningToken: i.nrv, contractAddress: { 97: "", 56: "0xABFd8d1942628124aB971937154f826Bce86DcbC" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.15046" }, { sousId: 90, stakingToken: i.cake, earningToken: i.dego, contractAddress: { 97: "", 56: "0x526d3c204255f807C95a99b69596f2f9f72345e5" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.00405" }, { sousId: 89, stakingToken: i.cake, earningToken: i.gum, contractAddress: { 97: "", 56: "0xAa2082BeE04fc518300ec673F9497ffa6F669dB8" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.08912" }, { sousId: 88, stakingToken: i.cake, earningToken: i.pbtc, contractAddress: { 97: "", 56: "0x9096625Bc0d36F5EDa6d44e511641667d89C28f4" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.0000031", isFinished: !0, enableEmergencyWithdraw: !0 }, { sousId: 87, stakingToken: i.cake, earningToken: i.dft, contractAddress: { 97: "", 56: "0x78BD4dB48F8983c3C36C8EAFbEF38f6aC7B55285" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.6811" }, { sousId: 86, stakingToken: i.cake, earningToken: i.swth, contractAddress: { 97: "", 56: "0x35418e14F5aA615C4f020eFBa6e01C5DbF15AdD2" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "2.3148" }, { sousId: 85, stakingToken: i.cake, earningToken: i.lien, contractAddress: { 97: "", 56: "0x3c7cC49a35942fbD3C2ad428a6c22490cd709d03" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.003472", isFinished: !0, enableEmergencyWithdraw: !0 }, { sousId: 84, stakingToken: i.cake, earningToken: i.zil, contractAddress: { 97: "", 56: "0xF795739737ABcFE0273f4Dced076460fdD024Dd9" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "1.0995" }, { sousId: 83, stakingToken: i.cake, earningToken: i.pcws, contractAddress: { 97: "", 56: "0x06FF8960F7F4aE572A3f57FAe77B2882BE94Bf90" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.00434" }, { sousId: 82, stakingToken: i.cake, earningToken: i.bbadger, contractAddress: { 97: "", 56: "0xe4dD0C50fb314A8B2e84D211546F5B57eDd7c2b9" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.00265278", isFinished: !0, enableEmergencyWithdraw: !0 }, { sousId: 81, stakingToken: i.cake, earningToken: i.bdigg, contractAddress: { 97: "", 56: "0xb627A7e33Db571bE792B0b69c5C2f5a8160d5500" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.00000403", isFinished: !0, enableEmergencyWithdraw: !0 }, { sousId: 80, stakingToken: i.cake, earningToken: i.lto, contractAddress: { 97: "", 56: "0xadBfFA25594AF8Bc421ecaDF54D057236a99781e" }, poolCategory: r.b.CORE, harvest: !0, sortOrder: 999, tokenPerBlock: "0.2893" }, { sousId: 79, stakingToken: i.cake, earningToken: i.mir, contractAddress: { 97: "", 56: "0x3e31488f08EBcE6F2D8a2AA512aeFa49a3C7dFa7" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.01273", sortOrder: 999, isFinished: !1 }, { sousId: 78, stakingToken: i.cake, earningToken: i.mir, contractAddress: { 97: "", 56: "0x453a75908fb5a36d482d5f8fe88eca836f32ead5" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.01273", sortOrder: 999, isFinished: !0, enableEmergencyWithdraw: !0 }, { sousId: 77, stakingToken: i.cake, earningToken: i.trade, contractAddress: { 97: "", 56: "0x509C99D73FB54b2c20689708b3F824147292D38e" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.4484", sortOrder: 999, isFinished: !1 }, { sousId: 76, stakingToken: i.cake, earningToken: i.dusk, contractAddress: { 97: "", 56: "0xF1bd5673Ea4a1C415ec84fa3E402F2F7788E7717" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.4629", sortOrder: 999, isFinished: !1 }, { sousId: 75, stakingToken: i.cake, earningToken: i.bifi, contractAddress: { 97: "", 56: "0xB4C68A1C565298834360BbFF1652284275120D47" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.00007234", sortOrder: 999, isFinished: !1 }, { sousId: 74, stakingToken: i.cake, earningToken: i.txl, contractAddress: { 97: "", 56: "0x153e62257F1AAe05d5d253a670Ca7585c8D3F94F" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.434027", sortOrder: 999, isFinished: !1 }, { sousId: 73, stakingToken: i.cake, earningToken: i.cos, contractAddress: { 97: "", 56: "0xF682D186168b4114ffDbF1291F19429310727151" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "5.787", sortOrder: 999, isFinished: !1 }, { sousId: 72, stakingToken: i.cake, earningToken: i.bunny, contractAddress: { 97: "", 56: "0xaDdAE5f4dB84847ac9d947AED1304A8e7D19f7cA" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.00289", sortOrder: 999, isFinished: !1 }, { sousId: 71, stakingToken: i.cake, earningToken: i.alice, contractAddress: { 97: "", 56: "0x4C32048628D0d32d4D6c52662FB4A92747782B56" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.14467", sortOrder: 999, isFinished: !1 }, { sousId: 70, stakingToken: i.cake, earningToken: i.for, contractAddress: { 97: "", 56: "0x47642101e8D8578C42765d7AbcFd0bA31868c523" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "2.8935", sortOrder: 999, isFinished: !1 }, { sousId: 69, stakingToken: i.cake, earningToken: i.bux, contractAddress: { 97: "", 56: "0x07F8217c68ed9b838b0b8B58C19c79bACE746e9A" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.5787", sortOrder: 999, isFinished: !1 }, { sousId: 68, stakingToken: i.cake, earningToken: i.nuls, contractAddress: { 97: "", 56: "0x580DC9bB9260A922E3A4355b9119dB990F09410d" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.0868", sortOrder: 999, isFinished: !1 }, { sousId: 67, stakingToken: i.cake, earningToken: i.belt, contractAddress: { 97: "", 56: "0x6f0037d158eD1AeE395e1c12d21aE8583842F472" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.00868", sortOrder: 999, isFinished: !0 }, { sousId: 66, stakingToken: i.cake, earningToken: i.ramp, contractAddress: { 97: "", 56: "0x423382f989C6C289c8D441000e1045e231bd7d90" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.4861", sortOrder: 999, isFinished: !0, enableEmergencyWithdraw: !0 }, { sousId: 65, stakingToken: i.cake, earningToken: i.bfi, contractAddress: { 97: "", 56: "0x0A595623b58dFDe6eB468b613C11A7A8E84F09b9" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.0001157", sortOrder: 999, isFinished: !1 }, { sousId: 64, stakingToken: i.cake, earningToken: i.dexe, contractAddress: { 97: "", 56: "0x9E6dA246d369a41DC44673ce658966cAf487f7b2" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.009837", sortOrder: 999, isFinished: !0, enableEmergencyWithdraw: !0 }, { sousId: 63, stakingToken: i.cake, earningToken: i.bel, contractAddress: { 97: "", 56: "0x2C0f449387b15793B9da27c2d945dBed83ab1B07" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.0549", sortOrder: 999, isFinished: !1 }, { sousId: 62, stakingToken: i.tpt, earningToken: i.cake, contractAddress: { 97: "", 56: "0x0c3D6892aa3b23811Af3bd1bbeA8b0740E8e4528" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.0462", sortOrder: 999, isFinished: !0 }, { sousId: 61, stakingToken: i.cake, earningToken: i.tpt, contractAddress: { 97: "", 56: "0x75C91844c5383A68b7d3A427A44C32E3ba66Fe45" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "3.616", sortOrder: 999, isFinished: !0 }, { sousId: 60, stakingToken: i.cake, earningToken: i.watch, contractAddress: { 97: "", 56: "0xC58954199E268505fa3D3Cb0A00b7207af8C2D1d" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.3472", sortOrder: 999, isFinished: !0 }, { sousId: 59, stakingToken: i.cake, earningToken: i.xmark, contractAddress: { 97: "", 56: "0xA5137e08C48167E363Be8Ec42A68f4F54330964E" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.0413", sortOrder: 999, isFinished: !0 }, { sousId: 58, stakingToken: i.cake, earningToken: i.bmxx, contractAddress: { 97: "", 56: "0x6F31B87f51654424Ce57E9F8243E27ed13846CDB" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.00248", sortOrder: 999, isFinished: !0 }, { sousId: 57, stakingToken: i.cake, earningToken: i.iotx, contractAddress: { 97: "", 56: "0xCE54BA909d23B9d4BE0Ff0d84e5aE83F0ADD8D9a" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "6.365", sortOrder: 999, isFinished: !0 }, { sousId: 56, stakingToken: i.cake, earningToken: i.bor, contractAddress: { 97: "", 56: "0x3e677dC00668d69c2A7724b9AFA7363e8A56994e" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.000395", sortOrder: 999, isFinished: !0 }, { sousId: 55, stakingToken: i.cake, earningToken: i.bopen, contractAddress: { 97: "", 56: "0x5Ac8406498dC1921735d559CeC271bEd23B294A7" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.0723", sortOrder: 999, isFinished: !0 }, { sousId: 54, stakingToken: i.sushi, earningToken: i.cake, contractAddress: { 97: "", 56: "0xb69b6e390cba1F68442A886bC89E955048DAe7E3" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.0367", sortOrder: 999, isFinished: !0 }, { sousId: 53, stakingToken: i.cake, earningToken: i.dodo, contractAddress: { 97: "", 56: "0xae3001ddb18A6A57BEC2C19D71680437CA87bA1D" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.0578", sortOrder: 999, isFinished: !0 }, { sousId: 52, stakingToken: i.cake, earningToken: i.swingby, contractAddress: { 97: "", 56: "0x02aa767e855b8e80506fb47176202aA58A95315a" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.13", sortOrder: 999, isFinished: !0 }, { sousId: 51, stakingToken: i.cake, earningToken: i.bry, contractAddress: { 97: "", 56: "0x1c736F4FB20C7742Ee83a4099fE92abA61dFca41" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.1157", sortOrder: 999, isFinished: !0 }, { sousId: 50, stakingToken: i.cake, earningToken: i.zee, contractAddress: { 97: "", 56: "0x02861B607a5E87daf3FD6ec19DFB715F1b371379" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.1736", sortOrder: 999, isFinished: !0 }, { sousId: 49, stakingToken: i.cake, earningToken: i.swgb, contractAddress: { 97: "", 56: "0x73e4E8d010289267dEe3d1Fc48974B60363963CE" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.899", sortOrder: 999, isFinished: !0 }, { sousId: 48, stakingToken: i.comp, earningToken: i.cake, contractAddress: { 97: "", 56: "0xE0565fBb109A3f3f8097D8A9D931277bfd795072" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.055", sortOrder: 999, isFinished: !0 }, { sousId: 47, stakingToken: i.comp, earningToken: i.cake, contractAddress: { 97: "", 56: "0xc3693e3cbc3514d5d07EA5b27A721F184F617900" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.55", sortOrder: 999, isFinished: !0 }, { sousId: 46, stakingToken: i.cake, earningToken: i.sfp, contractAddress: { 97: "", 56: "0x2B02d43967765b18E31a9621da640588f3550EFD" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.6", sortOrder: 999, isFinished: !0 }, { sousId: 45, stakingToken: i.cake, earningToken: i.lina, contractAddress: { 97: "", 56: "0x212bb602418C399c29D52C55100fD6bBa12bea05" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.983", sortOrder: 999, isFinished: !0 }, { sousId: 44, stakingToken: i.cake, earningToken: i.lina, contractAddress: { 97: "", 56: "0x04aE8ca68A116278026fB721c06dCe709eD7013C" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.0983", sortOrder: 999, isFinished: !0 }, { sousId: 43, stakingToken: i.cake, earningToken: i.lit, contractAddress: { 97: "", 56: "0x1714bAAE9DD4738CDEA07756427FA8d4F08D9479" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.231", sortOrder: 999, isFinished: !0 }, { sousId: 42, stakingToken: i.cake, earningToken: i.hget, contractAddress: { 97: "", 56: "0xcCD0b93cC6ce3dC6dFaA9DB68f70e5C8455aC5bd" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.0138", sortOrder: 999, isFinished: !0 }, { sousId: 41, stakingToken: i.cake, earningToken: i.bdo, contractAddress: { 97: "", 56: "0x9cB24e9460351bC51d4066BC6AEd1F3809b02B78" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.075", sortOrder: 999, isFinished: !0 }, { sousId: 40, stakingToken: i.cake, earningToken: i.egld, contractAddress: { 97: "", 56: "0x2dcf4cDFf4Dd954683Fe0a6123077f8a025b66cF" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.001215", sortOrder: 999, isFinished: !0 }, { sousId: 39, stakingToken: i.cake, earningToken: i.ust, contractAddress: { 97: "", 56: "0x6EFa207ACdE6e1caB77c1322CbdE9628929ba88F" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.1157", sortOrder: 999, isFinished: !0 }, { sousId: 38, stakingToken: i.cake, earningToken: i.wsote, contractAddress: { 97: "", 56: "0xD0b738eC507571176D40f28bd56a0120E375f73a" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.23", sortOrder: 999, isFinished: !0 }, { sousId: 37, stakingToken: i.cake, earningToken: i.front, contractAddress: { 97: "", 56: "0xf7a31366732F08E8e6B88519dC3E827e04616Fc9" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.2546", sortOrder: 999, isFinished: !0 }, { sousId: 36, stakingToken: i.cake, earningToken: i.helmet, contractAddress: { 97: "", 56: "0x9F23658D5f4CEd69282395089B0f8E4dB85C6e79" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.81", sortOrder: 999, isFinished: !0 }, { sousId: 35, stakingToken: i.cake, earningToken: i.btcst, contractAddress: { 97: "", 56: "0xB6fd2724cc9c90DD31DA35DbDf0300009dceF97d" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.011574", sortOrder: 999, isFinished: !0 }, { sousId: 34, stakingToken: i.cake, earningToken: i.bscx, contractAddress: { 97: "", 56: "0x108BFE84Ca8BCe0741998cb0F60d313823cEC143" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.17361", sortOrder: 999, isFinished: !0 }, { sousId: 33, stakingToken: i.cake, earningToken: i.ten, contractAddress: { 97: "", 56: "0x4A26b082B432B060B1b00A84eE4E823F04a6f69a" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.05787", sortOrder: 999, isFinished: !0 }, { sousId: 32, stakingToken: i.cake, earningToken: i.balbt, contractAddress: { 97: "", 56: "0x3cc08B7C6A31739CfEd9d8d38b484FDb245C79c8" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.4166", sortOrder: 999, isFinished: !0 }, { sousId: 31, stakingToken: i.cake, earningToken: i.asr, contractAddress: { 97: "", 56: "0xd18E1AEb349ef0a6727eCe54597D98D263e05CAB" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.01", sortOrder: 999, isFinished: !0 }, { sousId: 30, stakingToken: i.cake, earningToken: i.atm, contractAddress: { 97: "", 56: "0x68C7d180bD8F7086D91E65A422c59514e4aFD638" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.01", sortOrder: 999, isFinished: !0 }, { sousId: 29, stakingToken: i.cake, earningToken: i.og, contractAddress: { 97: "", 56: "0xbE65d7e42E05aD2c4ad28769dc9c5b4b6EAff2C7" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.01", sortOrder: 999, isFinished: !0 }, { sousId: 28, stakingToken: i.cake, earningToken: i.reef, contractAddress: { 97: "", 56: "0x1500fa1afbfe4f4277ed0345cdf12b2c9ca7e139" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "115.74", sortOrder: 999, isFinished: !0 }, { sousId: 27, stakingToken: i.cake, earningToken: i.ditto, contractAddress: { 97: "", 56: "0x624ef5C2C6080Af188AF96ee5B3160Bb28bb3E02" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.01157", sortOrder: 999, isFinished: !1 }, { sousId: 26, stakingToken: i.twt, earningToken: i.cake, contractAddress: { 97: "", 56: "0x0554a5D083Abf2f056ae3F6029e1714B9A655174" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.248", sortOrder: 999, isFinished: !0 }, { sousId: 24, stakingToken: i.cake, earningToken: i.juv, contractAddress: { 97: "", 56: "0x543467B17cA5De50c8BF7285107A36785Ab57E56" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.02", sortOrder: 999, isFinished: !0 }, { sousId: 25, stakingToken: i.cake, earningToken: i.psg, contractAddress: { 97: "", 56: "0x65aFEAFaec49F23159e897EFBDCe19D94A86A1B6" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.02", sortOrder: 999, isFinished: !0 }, { sousId: 21, stakingToken: i.cake, earningToken: i.vai, contractAddress: { 97: "", 56: "0x1AD34D8d4D79ddE88c9B6b8490F8fC67831f2CAe" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.104", sortOrder: 999, isFinished: !0 }, { sousId: 20, stakingToken: i.bnb, earningToken: i.cake, contractAddress: { 97: "", 56: "0x555Ea72d7347E82C614C16f005fA91cAf06DCB5a" }, poolCategory: r.b.BINANCE, harvest: !0, tokenPerBlock: "0.5", sortOrder: 999, isFinished: !0 }, { sousId: 19, stakingToken: i.cake, earningToken: i.bnb, contractAddress: { 97: "", 56: "0x326D754c64329aD7cb35744770D56D0E1f3B3124" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.0041", sortOrder: 999, isFinished: !0 }, { sousId: 18, stakingToken: i.cake, earningToken: i.blink, contractAddress: { 97: "", 56: "0x42Afc29b2dEa792974d1e9420696870f1Ca6d18b" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "23.14", sortOrder: 999, isFinished: !0 }, { sousId: 17, stakingToken: i.cake, earningToken: i.blink, contractAddress: { 97: "", 56: "0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "23.14", sortOrder: 999, isFinished: !0, enableEmergencyWithdraw: !0 }, { sousId: 16, stakingToken: i.cake, earningToken: i.unfi, contractAddress: { 97: "", 56: "0xFb1088Dae0f03C5123587d2babb3F307831E6367" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.02893", sortOrder: 999, isFinished: !0 }, { sousId: 15, stakingToken: i.cake, earningToken: i.twt, contractAddress: { 97: "", 56: "0x9c4EBADa591FFeC4124A7785CAbCfb7068fED2fb" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "5", sortOrder: 999, isFinished: !0 }, { sousId: 14, stakingToken: i.cake, earningToken: i.hard, contractAddress: { 97: "", 56: "0x90F995b9d46b32c4a1908A8c6D0122e392B3Be97" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.346", sortOrder: 999, isFinished: !0 }, { sousId: 13, stakingToken: i.cake, earningToken: i.broobee, contractAddress: { 97: "", 56: "0xdc8c45b7F3747Ca9CaAEB3fa5e0b5FCE9430646b" }, poolCategory: r.b.COMMUNITY, harvest: !0, tokenPerBlock: "12.5", sortOrder: 999, isFinished: !0 }, { sousId: 12, stakingToken: i.cake, earningToken: i.stax, contractAddress: { 97: "0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a", 56: "0xFF02241a2A1d2a7088A344309400E9fE74772815" }, poolCategory: r.b.COMMUNITY, harvest: !0, tokenPerBlock: "0.2", sortOrder: 999, isFinished: !0 }, { sousId: 11, stakingToken: i.cake, earningToken: i.nar, contractAddress: { 97: "0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a", 56: "0xDc938BA1967b06d666dA79A7B1E31a8697D1565E" }, poolCategory: r.b.COMMUNITY, harvest: !0, tokenPerBlock: "1", sortOrder: 999, isFinished: !0 }, { sousId: 10, stakingToken: i.cake, earningToken: i.nya, contractAddress: { 97: "0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a", 56: "0x07a0A5B67136d40F4d7d95Bc8e0583bafD7A81b9" }, poolCategory: r.b.COMMUNITY, harvest: !0, sortOrder: 999, tokenPerBlock: "10", isFinished: !0 }, { sousId: 9, stakingToken: i.cake, earningToken: i.ctk, contractAddress: { 97: "0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A", 56: "0x21A9A53936E812Da06B7623802DEc9A1f94ED23a" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.5", sortOrder: 999, isFinished: !0 }, { sousId: 8, stakingToken: i.cake, earningToken: i.twt, contractAddress: { 97: "0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A", 56: "0xe7f9A439Aa7292719aC817798DDd1c4D35934aAF" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "20", sortOrder: 999, isFinished: !0 }, { sousId: 7, stakingToken: i.cake, earningToken: i.inj, contractAddress: { 97: "0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A", 56: "0xcec2671C81a0Ecf7F8Ee796EFa6DBDc5Cb062693" }, poolCategory: r.b.CORE, harvest: !0, tokenPerBlock: "0.25", sortOrder: 999, isFinished: !0 }];
            t.a = o
        },
        88: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() { return p })), n.d(t, "c", (function() { return b })), n.d(t, "b", (function() { return y })), n.d(t, "a", (function() { return m }));
            var a = n(4),
                r = n(0),
                i = n(80),
                o = n(252),
                s = n(54),
                c = n(64),
                u = n(37),
                d = n(55);

            function l(e, t) {
                return function(e, t) {
                    var n = Object(r.useMemo)((function() { var e; return null !== (e = null === t || void 0 === t ? void 0 : t.filter((function(e) { return !1 !== Object(u.h)(null === e || void 0 === e ? void 0 : e.address) }))) && void 0 !== e ? e : [] }), [t]),
                        i = Object(r.useMemo)((function() { return n.map((function(e) { return e.address })) }), [n]),
                        s = Object(d.b)(i, o.b, "balanceOf", [e]),
                        c = Object(r.useMemo)((function() { return s.some((function(e) { return e.loading })) }), [s]);
                    return [Object(r.useMemo)((function() {
                        return e && n.length > 0 ? n.reduce((function(e, t, n) {
                            var r, i, o = null === s || void 0 === s || null === (r = s[n]) || void 0 === r || null === (i = r.result) || void 0 === i ? void 0 : i[0],
                                c = o ? a.e.BigInt(o.toString()) : void 0;
                            return c && (e[t.address] = new a.k(t, c)), e
                        }), {}) : {}
                    }), [e, n, s]), c]
                }(e, t)[0]
            }

            function p(e, t) { var n = l(e, [t]); if (t) return n[t.address] }

            function b(e, t) {
                var n = Object(r.useMemo)((function() { var e; return null !== (e = null === t || void 0 === t ? void 0 : t.filter((function(e) { return e instanceof a.j }))) && void 0 !== e ? e : [] }), [t]),
                    i = l(e, n),
                    o = function(e) {
                        var t = Object(c.h)(),
                            n = Object(r.useMemo)((function() { return e ? e.map(u.h).filter((function(e) { return !1 !== e })).sort() : [] }), [e]),
                            i = Object(d.d)(t, "getEthBalance", n.map((function(e) { return [e] })));
                        return Object(r.useMemo)((function() { return n.reduce((function(e, t, n) { var r, o, s = null === i || void 0 === i || null === (r = i[n]) || void 0 === r || null === (o = r.result) || void 0 === o ? void 0 : o[0]; return s && (e[t] = a.c.ether(a.e.BigInt(s.toString()))), e }), {}) }), [n, i])
                    }(Object(r.useMemo)((function() { var e; return null !== (e = null === t || void 0 === t ? void 0 : t.some((function(e) { return e === a.d }))) && void 0 !== e && e }), [t]) ? [e] : []);
                return Object(r.useMemo)((function() { var n; return null !== (n = null === t || void 0 === t ? void 0 : t.map((function(t) { if (e && t) return t instanceof a.j ? i[t.address] : t === a.d ? o[e] : void 0 }))) && void 0 !== n ? n : [] }), [e, t, o, i])
            }

            function y(e, t) { return b(e, [t])[0] }

            function m() {
                var e = Object(i.c)().account,
                    t = Object(s.b)(),
                    n = l(null !== e && void 0 !== e ? e : void 0, Object(r.useMemo)((function() { return Object.values(null !== t && void 0 !== t ? t : {}) }), [t]));
                return null !== n && void 0 !== n ? n : {}
            }
        },
        90: function(e) { e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]') },
        92: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return a })), n.d(t, "c", (function() { return b })), n.d(t, "b", (function() { return y }));
            var a, r = n(11),
                i = n(4),
                o = n(0),
                s = n(251),
                c = n(141),
                u = n(20),
                d = n(55),
                l = n(52),
                p = new c.b(s.a);

            function b(e) {
                var t = Object(u.a)().chainId,
                    n = Object(o.useMemo)((function() {
                        return e.map((function(e) {
                            var n = Object(r.a)(e, 2),
                                a = n[0],
                                i = n[1];
                            return [Object(l.b)(a, t), Object(l.b)(i, t)]
                        }))
                    }), [t, e]),
                    s = Object(o.useMemo)((function() {
                        return n.map((function(e) {
                            var t = Object(r.a)(e, 2),
                                n = t[0],
                                a = t[1];
                            return n && a && !n.equals(a) ? i.f.getAddress(n, a) : void 0
                        }))
                    }), [n]),
                    c = Object(d.b)(s, p, "getReserves");
                return Object(o.useMemo)((function() {
                    return c.map((function(e, t) {
                        var o = e.result,
                            s = e.loading,
                            c = n[t][0],
                            u = n[t][1];
                        if (s) return [a.LOADING, null];
                        if (!c || !u || c.equals(u)) return [a.INVALID, null];
                        if (!o) return [a.NOT_EXISTS, null];
                        var d = o.reserve0,
                            l = o.reserve1,
                            p = c.sortsBefore(u) ? [c, u] : [u, c],
                            b = Object(r.a)(p, 2),
                            y = b[0],
                            m = b[1];
                        return [a.EXISTS, new i.f(new i.k(y, d.toString()), new i.k(m, l.toString()))]
                    }))
                }), [c, n])
            }

            function y(e, t) {
                return b([
                    [e, t]
                ])[0]
            }! function(e) { e[e.LOADING = 0] = "LOADING", e[e.NOT_EXISTS = 1] = "NOT_EXISTS", e[e.EXISTS = 2] = "EXISTS", e[e.INVALID = 3] = "INVALID" }(a || (a = {}))
        },
        94: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() { return s })), n.d(t, "b", (function() { return c })), n.d(t, "a", (function() { return u })), n.d(t, "c", (function() { return d }));
            var a = n(0),
                r = n(28),
                i = n(20),
                o = n(95);

            function s() {
                var e = Object(i.a)(),
                    t = e.chainId,
                    n = e.account,
                    s = Object(r.b)();
                return Object(a.useCallback)((function(e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = a.summary,
                        i = a.approval,
                        c = a.claim;
                    if (n && t) {
                        var u = e.hash;
                        if (!u) throw Error("No transaction hash found.");
                        s(Object(o.a)({ hash: u, from: n, chainId: t, approval: i, summary: r, claim: c }))
                    }
                }), [s, t, n])
            }

            function c() {
                var e, t = Object(i.a)().chainId,
                    n = Object(r.c)((function(e) { return e.transactions }));
                return t && null !== (e = n[t]) && void 0 !== e ? e : {}
            }

            function u(e) { return (new Date).getTime() - e.addedTime < 864e5 }

            function d(e, t) { var n = c(); return Object(a.useMemo)((function() { return "string" === typeof e && "string" === typeof t && Object.keys(n).some((function(a) { var r = n[a]; if (!r) return !1; if (r.receipt) return !1; var i = r.approval; return !!i && (i.spender === t && i.tokenAddress === e && u(r)) })) }), [n, t, e]) }
        },
        95: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return r })), n.d(t, "c", (function() { return i })), n.d(t, "d", (function() { return o })), n.d(t, "b", (function() { return s }));
            var a = n(15),
                r = Object(a.b)("transactions/addTransaction"),
                i = Object(a.b)("transactions/clearAllTransactions"),
                o = Object(a.b)("transactions/finalizeTransaction"),
                s = Object(a.b)("transactions/checkedTransaction")
        },
        98: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return Ln }));
            var a, r, i, o, s, c, u, d, l = n(33),
                p = n(15),
                b = n(323),
                y = n(28),
                m = n(134),
                f = n(17),
                h = n(3),
                k = n.n(h),
                T = n(6),
                g = n(12),
                v = n(29),
                x = n.n(v),
                j = n(86),
                w = n(39),
                O = (n(56), n(417), n(83)),
                B = (n(149), n(246), n(248), n(51)),
                A = n(35),
                C = n(40),
                E = (n(34), n(90), n(99)),
                P = (j.a.filter((function(e) { return "BNB" !== e.stakingToken.symbol })), j.a.filter((function(e) { return "BNB" === e.stakingToken.symbol })), j.a.filter((function(e) { return 0 !== e.sousId })), Object(C.q)(), n(11)),
                S = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 18,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3,
                        r = Object(O.d)(t, n),
                        i = new x.a(e.multipliedBy(r)),
                        o = Object(O.d)(i, n),
                        s = Object(O.e)(new x.a(o), n),
                        c = Object(O.f)(i, n, a);
                    return { cakeAsNumberBalance: o, cakeAsBigNumber: s, cakeAsDisplayBalance: c }
                },
                I = n(207),
                F = function() {
                    var e = Object(g.a)(k.a.mark((function e() {
                        var t, n, a, r, i, o, s, c, u, d, l, p, b, y;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, t = ["getPricePerFullShare", "totalShares", "calculateHarvestCakeRewards", "calculateTotalPendingCakeRewards"].map((function(e) { return { address: Object(A.g)(), name: e } })), e.next = 4, Object(B.b)(I, t);
                                case 4:
                                    return n = e.sent, a = Object(P.a)(n, 4), r = Object(P.a)(a[0], 1), i = r[0], o = Object(P.a)(a[1], 1), s = o[0], c = Object(P.a)(a[2], 1), u = c[0], d = Object(P.a)(a[3], 1), l = d[0], p = s ? new x.a(s.toString()) : w.c, b = i ? new x.a(i.toString()) : w.c, y = S(p, b), e.abrupt("return", { totalShares: p.toJSON(), pricePerFullShare: b.toJSON(), totalCakeInVault: y.cakeAsBigNumber.toJSON(), estimatedCakeBountyReward: new x.a(u.toString()).toJSON(), totalPendingCakeHarvest: new x.a(l.toString()).toJSON() });
                                case 20:
                                    return e.prev = 20, e.t0 = e.catch(0), e.abrupt("return", { totalShares: null, pricePerFullShare: null, totalCakeInVault: null, estimatedCakeBountyReward: null, totalPendingCakeHarvest: null });
                                case 23:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 20]
                        ])
                    })));
                    return function() { return e.apply(this, arguments) }
                }(),
                D = function() {
                    var e = Object(g.a)(k.a.mark((function e() {
                        var t, n, a, r, i, o, s, c, u, d, l;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, t = ["performanceFee", "callFee", "withdrawFee", "withdrawFeePeriod"].map((function(e) { return { address: Object(A.g)(), name: e } })), e.next = 4, Object(B.b)(I, t);
                                case 4:
                                    return n = e.sent, a = Object(P.a)(n, 4), r = Object(P.a)(a[0], 1), i = r[0], o = Object(P.a)(a[1], 1), s = o[0], c = Object(P.a)(a[2], 1), u = c[0], d = Object(P.a)(a[3], 1), l = d[0], e.abrupt("return", { performanceFee: i.toNumber(), callFee: s.toNumber(), withdrawalFee: u.toNumber(), withdrawalFeePeriod: l.toNumber() });
                                case 17:
                                    return e.prev = 17, e.t0 = e.catch(0), e.abrupt("return", { performanceFee: null, callFee: null, withdrawalFee: null, withdrawalFeePeriod: null });
                                case 20:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 17]
                        ])
                    })));
                    return function() { return e.apply(this, arguments) }
                }(),
                N = Object(C.h)(),
                L = function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, N.userInfo(t);
                                case 3:
                                    return n = e.sent, e.abrupt("return", { isLoading: !1, userShares: new x.a(n.shares.toString()).toJSON(), lastDepositedTime: n.lastDepositedTime.toString(), lastUserActionTime: n.lastUserActionTime.toString(), cakeAtLastUserAction: new x.a(n.cakeAtLastUserAction.toString()).toJSON() });
                                case 7:
                                    return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", { isLoading: !0, userShares: null, lastDepositedTime: null, lastUserActionTime: null, cakeAtLastUserAction: null });
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                M = (n(57), n(59)),
                R = { data: Object(l.a)(j.a), userDataLoaded: !1, cakeVault: { totalShares: null, pricePerFullShare: null, totalCakeInVault: null, estimatedCakeBountyReward: null, totalPendingCakeHarvest: null, fees: { performanceFee: null, callFee: null, withdrawalFee: null, withdrawalFeePeriod: null }, userData: { isLoading: !0, userShares: null, cakeAtLastUserAction: null, lastDepositedTime: null, lastUserActionTime: null } } },
                U = Object(p.c)("cakeVault/fetchPublicData", Object(g.a)(k.a.mark((function e() {
                    var t;
                    return k.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, F();
                            case 2:
                                return t = e.sent, e.abrupt("return", t);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))),
                _ = Object(p.c)("cakeVault/fetchFees", Object(g.a)(k.a.mark((function e() {
                    var t;
                    return k.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, D();
                            case 2:
                                return t = e.sent, e.abrupt("return", t);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))),
                q = Object(p.c)("cakeVault/fetchUser", function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n, a;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.account, e.next = 3, L(n);
                                case 3:
                                    return a = e.sent, e.abrupt("return", a);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                V = Object(p.e)({
                    name: "Pools",
                    initialState: R,
                    reducers: {
                        setPoolsPublicData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) { var t = n.find((function(t) { return t.sousId === e.sousId })); return Object(T.a)(Object(T.a)({}, e), t) }))
                        },
                        setPoolsUserData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) { var t = n.find((function(t) { return t.sousId === e.sousId })); return Object(T.a)(Object(T.a)({}, e), {}, { userData: t }) })), e.userDataLoaded = !0
                        },
                        updatePoolsUserData: function(e, t) {
                            var n = t.payload,
                                a = n.field,
                                r = n.value,
                                i = n.sousId,
                                o = e.data.findIndex((function(e) { return e.sousId === i }));
                            o >= 0 && (e.data[o] = Object(T.a)(Object(T.a)({}, e.data[o]), {}, { userData: Object(T.a)(Object(T.a)({}, e.data[o].userData), {}, Object(f.a)({}, a, r)) }))
                        }
                    },
                    extraReducers: function(e) {
                        e.addCase(U.fulfilled, (function(e, t) { e.cakeVault = Object(T.a)(Object(T.a)({}, e.cakeVault), t.payload) })), e.addCase(_.fulfilled, (function(e, t) {
                            var n = t.payload;
                            e.cakeVault = Object(T.a)(Object(T.a)({}, e.cakeVault), {}, { fees: n })
                        })), e.addCase(q.fulfilled, (function(e, t) {
                            var n = t.payload;
                            n.isLoading = !1, e.cakeVault = Object(T.a)(Object(T.a)({}, e.cakeVault), {}, { userData: n })
                        }))
                    }
                }),
                Y = V.actions,
                H = (Y.setPoolsPublicData, Y.setPoolsUserData, Y.updatePoolsUserData, V.reducer),
                W = n(61),
                z = n(62),
                K = n(418),
                G = n.n(K),
                X = n(114),
                J = n.n(X),
                $ = n(419),
                Q = n.n($);
            ! function(e) { e.BULL = "Bull", e.BEAR = "Bear", e.HOUSE = "House" }(a || (a = {})),
            function(e) { e.INITIAL = "initial", e.LIVE = "live", e.PAUSED = "paused", e.ERROR = "error" }(r || (r = {})),
            function(e) { e.ALL = "all", e.COLLECTED = "collected", e.UNCOLLECTED = "uncollected" }(i || (i = {})),
            function(e) { e[e.INITIAL = 0] = "INITIAL", e[e.LOADING = 1] = "LOADING", e[e.IDLE = 2] = "IDLE" }(o || (o = {})),
            function(e) { e.PROPOSAL = "proposal", e.VOTE = "vote" }(s || (s = {})),
            function(e) { e.ALL = "all", e.CORE = "core", e.COMMUNITY = "community" }(c || (c = {})),
            function(e) { e.ACTIVE = "active", e.PENDING = "pending", e.CLOSED = "closed" }(u || (u = {})),
            function(e) { e.INITIAL = "initial", e.IDLE = "idle", e.LOADING = "loading", e.ERROR = "error" }(d || (d = {}));
            var Z, ee, te, ne, ae = 1e3,
                re = n(13),
                ie = n(63),
                oe = n.n(ie),
                se = n(84),
                ce = n(164);
            ! function(e) { e.WIN = "win", e.LOSE = "lose", e.CANCELED = "canceled", e.LIVE = "live" }(ne || (ne = {}));
            var ue, de, le, pe, be, ye = function(e) { if (null === e) return null; var t = Number(e); return Number.isNaN(t) ? null : t },
                me = function(e) { var t = { id: e.id, hash: e.hash, block: ye(e.block), amount: e.amount ? parseFloat(e.amount) : 0, position: "Bull" === e.position ? a.BULL : a.BEAR, claimed: e.claimed, claimedAt: ye(e.claimedAt), claimedBlock: ye(e.claimedBlock), claimedHash: e.claimedHash, claimedBNB: e.claimedBNB ? parseFloat(e.claimedBNB) : 0, claimedNetBNB: e.claimedNetBNB ? parseFloat(e.claimedNetBNB) : 0, createdAt: ye(e.createdAt), updatedAt: ye(e.updatedAt) }; return e.user && (t.user = fe(e.user)), e.round && (t.round = he(e.round)), t },
                fe = function(e) {
                    var t = e.id,
                        n = e.createdAt,
                        a = e.updatedAt,
                        r = e.block,
                        i = e.totalBets,
                        o = e.totalBetsBull,
                        s = e.totalBetsBear,
                        c = e.totalBNB,
                        u = e.totalBNBBull,
                        d = e.totalBNBBear,
                        l = e.totalBetsClaimed,
                        p = e.totalBNBClaimed,
                        b = e.winRate,
                        y = e.averageBNB,
                        m = e.netBNB;
                    return { id: t, createdAt: ye(n), updatedAt: ye(a), block: ye(r), totalBets: ye(i), totalBetsBull: ye(o), totalBetsBear: ye(s), totalBNB: c ? parseFloat(c) : 0, totalBNBBull: u ? parseFloat(u) : 0, totalBNBBear: d ? parseFloat(d) : 0, totalBetsClaimed: ye(l), totalBNBClaimed: p ? parseFloat(p) : 0, winRate: b ? parseFloat(b) : 0, averageBNB: y ? parseFloat(y) : 0, netBNB: m ? parseFloat(m) : 0 }
                },
                he = function(e) {
                    var t, n = e.id,
                        r = e.epoch,
                        i = e.failed,
                        o = e.position,
                        s = e.startAt,
                        c = e.startBlock,
                        u = e.startHash,
                        d = e.lockAt,
                        l = e.lockBlock,
                        p = e.lockHash,
                        b = e.lockPrice,
                        y = e.lockRoundId,
                        m = e.closeAt,
                        f = e.closeBlock,
                        h = e.closeHash,
                        k = e.closePrice,
                        T = e.closeRoundId,
                        g = e.totalBets,
                        v = e.totalAmount,
                        x = e.bullBets,
                        j = e.bullAmount,
                        w = e.bearBets,
                        O = e.bearAmount,
                        B = e.bets,
                        A = void 0 === B ? [] : B;
                    return { id: n, failed: i, startHash: u, lockHash: p, lockRoundId: y, closeRoundId: T, closeHash: h, position: (t = o, "Bull" === t ? a.BULL : "Bear" === t ? a.BEAR : "House" === t ? a.HOUSE : null), epoch: ye(r), startAt: ye(s), startBlock: ye(c), lockAt: ye(d), lockBlock: ye(l), lockPrice: b ? parseFloat(b) : 0, closeAt: ye(m), closeBlock: ye(f), closePrice: k ? parseFloat(k) : 0, totalBets: ye(g), totalAmount: v ? parseFloat(v) : 0, bullBets: ye(x), bullAmount: j ? parseFloat(j) : 0, bearBets: ye(w), bearAmount: O ? parseFloat(O) : 0, bets: A.map(me) }
                },
                ke = function() {
                    var e = Object(g.a)(k.a.mark((function e() {
                        var t, n, a, r, i = arguments;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = i.length > 0 && void 0 !== i[0] ? i[0] : {}, n = i.length > 1 && void 0 !== i[1] ? i[1] : 1e3, a = i.length > 2 && void 0 !== i[2] ? i[2] : 0, e.next = 5, Object(ie.request)(se.c, Object(ie.gql)(Z || (Z = Object(re.a)(["\n      query getBetHistory($first: Int!, $skip: Int!, $where: Bet_filter) {\n        bets(first: $first, skip: $skip, where: $where, order: createdAt, orderDirection: desc) {\n          ", "\n          round {\n            ", "\n          }\n          user {\n            ", "\n          } \n        }\n      }\n    "])), "\n id\n hash  \n amount\n position\n claimed\n claimedAt\n claimedHash\n claimedBlock\n claimedBNB\n claimedNetBNB\n createdAt\n updatedAt\n", "\n  id\n  epoch\n  position\n  failed\n  startAt\n  startBlock\n  startHash\n  lockAt\n  lockBlock\n  lockHash\n  lockPrice\n  lockRoundId\n  closeAt\n  closeBlock\n  closeHash\n  closePrice\n  closeRoundId\n  totalBets\n  totalAmount\n  bullBets\n  bullAmount\n  bearBets\n  bearAmount\n", "\n  id\n  createdAt\n  updatedAt\n  block\n  totalBets\n  totalBetsBull\n  totalBetsBear\n  totalBNB\n  totalBNBBull\n  totalBNBBear\n  totalBetsClaimed\n  totalBNBClaimed\n  winRate\n  averageBNB\n  netBNB\n"), { first: n, skip: a, where: t });
                                case 5:
                                    return r = e.sent, e.abrupt("return", r.bets);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() { return e.apply(this, arguments) }
                }(),
                Te = function() {
                    var e = Object(g.a)(k.a.mark((function e(t, n) {
                        var a, r, i;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = Object(A.r)(), r = n.map((function(e) { return { address: a, name: "ledger", params: [e, t] } })), e.next = 4, Object(B.b)(ce, r);
                                case 4:
                                    return i = e.sent, e.abrupt("return", i);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                ge = { skip: 0, first: 20, orderBy: "createdAt", orderDir: "desc" },
                ve = function() {
                    var e = Object(g.a)(k.a.mark((function e() {
                        var t, n, a, r, i, o, s, c, u = arguments;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = u.length > 0 && void 0 !== u[0] ? u[0] : {}, n = Object(T.a)(Object(T.a)({}, ge), t), a = n.first, r = n.skip, i = n.where, o = n.orderBy, s = n.orderDir, e.next = 4, Object(ie.request)(se.c, Object(ie.gql)(ee || (ee = Object(re.a)(["\n      query getUsers($first: Int!, $skip: Int!, $where: User_filter, $orderBy: User_orderBy, $orderDir: OrderDirection) {\n        users(first: $first, skip: $skip, where: $where, orderBy: $orderBy, orderDirection: $orderDir) {\n          ", " \n        }\n      }\n    "])), "\n  id\n  createdAt\n  updatedAt\n  block\n  totalBets\n  totalBetsBull\n  totalBetsBear\n  totalBNB\n  totalBNBBull\n  totalBNBBear\n  totalBetsClaimed\n  totalBNBClaimed\n  winRate\n  averageBNB\n  netBNB\n"), { first: a, skip: r, where: i, orderBy: o, orderDir: s });
                                case 4:
                                    return c = e.sent, e.abrupt("return", c.users);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() { return e.apply(this, arguments) }
                }(),
                xe = function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(ie.request)(se.c, Object(ie.gql)(te || (te = Object(re.a)(["\n      query getUser($id: ID!) {\n        user(id: $id) {\n          ", "\n        }\n      }\n  "])), "\n  id\n  createdAt\n  updatedAt\n  block\n  totalBets\n  totalBetsBull\n  totalBetsBear\n  totalBNB\n  totalBNBBull\n  totalBNBBear\n  totalBetsClaimed\n  totalBNBClaimed\n  winRate\n  averageBNB\n  netBNB\n"), { id: t.toLowerCase() });
                                case 2:
                                    return n = e.sent, e.abrupt("return", n.user);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                je = function() {
                    var e = Object(g.a)(k.a.mark((function e(t, n) {
                        var a, r, i;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = Object(A.r)(), r = n.map((function(e) { return { address: a, name: "claimable", params: [e, t] } })), e.next = 4, Object(B.b)(ce, r);
                                case 4:
                                    return i = e.sent, e.abrupt("return", i.reduce((function(e, t, a) {
                                        var r = n[a],
                                            i = Object(P.a)(t, 1)[0];
                                        return Object(T.a)(Object(T.a)({}, e), {}, Object(f.a)({}, r, i))
                                    }), {}));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                we = function() {
                    var e = Object(g.a)(k.a.mark((function e() {
                        var t, n, a, i, o, s, c, u, d, l, p, b, y, m;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = Object(A.r)(), n = ["currentEpoch", "intervalSeconds", "minBetAmount", "paused", "bufferSeconds"].map((function(e) { return { address: t, name: e } })), e.next = 4, Object(B.b)(ce, n);
                                case 4:
                                    return a = e.sent, i = Object(P.a)(a, 5), o = Object(P.a)(i[0], 1), s = o[0], c = Object(P.a)(i[1], 1), u = c[0], d = Object(P.a)(i[2], 1), l = d[0], p = Object(P.a)(i[3], 1), b = p[0], y = Object(P.a)(i[4], 1), m = y[0], e.abrupt("return", { status: b ? r.PAUSED : r.LIVE, currentEpoch: s.toNumber(), intervalSeconds: u.toNumber(), minBetAmount: l.toString(), bufferSeconds: m.toNumber() });
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() { return e.apply(this, arguments) }
                }(),
                Oe = function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n, a, r;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(A.r)(), a = t.map((function(e) { return { address: n, name: "rounds", params: [e] } })), e.next = 4, Object(B.b)(ce, a);
                                case 4:
                                    return r = e.sent, e.abrupt("return", r);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                Be = function(e, t) { return { epoch: e, startTimestamp: t, lockTimestamp: null, closeTimestamp: null, lockPrice: null, closePrice: null, totalAmount: W.a.BigNumber.from(0).toJSON(), bullAmount: W.a.BigNumber.from(0).toJSON(), bearAmount: W.a.BigNumber.from(0).toJSON(), rewardBaseCalAmount: W.a.BigNumber.from(0).toJSON(), rewardAmount: W.a.BigNumber.from(0).toJSON(), oracleCalled: !1, lockOracleId: null, closeOracleId: null } },
                Ae = function(e) { return e.reduce((function(e, t) { return Object(T.a)(Object(T.a)({}, e), {}, Object(f.a)({}, t.epoch.toString(), t)) }), {}) },
                Ce = function(e) { return { position: 0 === e.position ? a.BULL : a.BEAR, amount: e.amount.toJSON(), claimed: e.claimed } },
                Ee = function(e, t, n) { return t.reduce((function(t, a, r) { if (!a) return t; if (a.amount.eq(0)) return t; var i = n[r].toString(); return Object(T.a)(Object(T.a)({}, t), {}, Object(f.a)({}, e, Object(T.a)(Object(T.a)({}, t[e]), {}, Object(f.a)({}, i, Ce(a))))) }), {}) },
                Pe = function(e) {
                    var t = e.epoch,
                        n = e.startTimestamp,
                        a = e.lockTimestamp,
                        r = e.closeTimestamp,
                        i = e.lockPrice,
                        o = e.closePrice,
                        s = e.totalAmount,
                        c = e.bullAmount,
                        u = e.bearAmount,
                        d = e.rewardBaseCalAmount,
                        l = e.rewardAmount,
                        p = e.oracleCalled,
                        b = e.lockOracleId,
                        y = e.closeOracleId;
                    return { oracleCalled: p, epoch: t.toNumber(), startTimestamp: n.eq(0) ? null : n.toNumber(), lockTimestamp: a.eq(0) ? null : a.toNumber(), closeTimestamp: r.eq(0) ? null : r.toNumber(), lockPrice: i.eq(0) ? null : i.toJSON(), closePrice: o.eq(0) ? null : o.toJSON(), totalAmount: s.toJSON(), bullAmount: c.toJSON(), bearAmount: u.toJSON(), rewardBaseCalAmount: d.toJSON(), rewardAmount: l.toJSON(), lockOracleId: b.toString(), closeOracleId: y.toString() }
                },
                Se = function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n, a;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, n = Object(C.u)(), e.next = 4, n.getUserRoundsLength(t);
                                case 4:
                                    return a = e.sent, e.abrupt("return", a);
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(0), e.abrupt("return", W.a.BigNumber.from(0));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                Ie = function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n, a, r, i, o, s, c, u = arguments;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = u.length > 1 && void 0 !== u[1] ? u[1] : 0, a = u.length > 2 && void 0 !== u[2] ? u[2] : ae, r = Object(C.u)(), e.prev = 3, e.next = 6, r.getUserRounds(t, n, a);
                                case 6:
                                    return i = e.sent, o = Object(P.a)(i, 2), s = o[0], c = o[1], e.abrupt("return", s.reduce((function(e, t, n) { return Object(T.a)(Object(T.a)({}, e), {}, Object(f.a)({}, t.toString(), Ce(c[n]))) }), {}));
                                case 13:
                                    return e.prev = 13, e.t0 = e.catch(3), e.abrupt("return", null);
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 13]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                Fe = { status: r.INITIAL, isLoading: !1, isHistoryPaneOpen: !1, isChartPaneOpen: !1, isFetchingHistory: !1, historyFilter: i.ALL, currentEpoch: 0, intervalSeconds: 300, minBetAmount: "10000000000000", bufferSeconds: 60, lastOraclePrice: w.c.toJSON(), rounds: {}, history: [], totalHistory: 0, currentHistoryPage: 1, hasHistoryLoaded: !1, ledgers: {}, claimableStatuses: {}, leaderboard: { loadingState: o.INITIAL, filters: { address: null, orderBy: "netBNB", timePeriod: "all" }, skip: 0, hasMoreResults: !0, addressResults: {}, results: [] } },
                De = Object(p.c)("predictions/intialize", Object(g.a)(k.a.mark((function e() {
                    var t, n, a, r, i, o, s, c, u = arguments;
                    return k.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = u.length > 0 && void 0 !== u[0] ? u[0] : null, e.next = 3, we();
                            case 3:
                                return n = e.sent, a = n.currentEpoch > 5 ? Q()(n.currentEpoch, n.currentEpoch - 5) : [n.currentEpoch], e.next = 7, Oe(a);
                            case 7:
                                if (r = e.sent, i = r.reduce((function(e, t) { var n = Pe(t); return Object(T.a)(Object(T.a)({}, e), {}, Object(f.a)({}, n.epoch.toString(), n)) }), {}), o = Object(T.a)(Object(T.a)({}, n), {}, { rounds: i, ledgers: {}, claimableStatuses: {} }), t) { e.next = 12; break }
                                return e.abrupt("return", o);
                            case 12:
                                return e.next = 14, Te(t, a);
                            case 14:
                                return s = e.sent, e.next = 17, je(t, a);
                            case 17:
                                return c = e.sent, e.abrupt("return", J()({}, o, { ledgers: Ee(t, s, a), claimableStatuses: c }));
                            case 19:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))),
                Ne = Object(p.c)("predictions/fetchRound", function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n, a;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(C.u)(), e.next = 3, n.rounds(t);
                                case 3:
                                    return a = e.sent, e.abrupt("return", Pe(a));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                Le = Object(p.c)("predictions/fetchRounds", function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Oe(t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n.reduce((function(e, t) { if (!t) return e; var n = Pe(t); return Object(T.a)(Object(T.a)({}, e), {}, Object(f.a)({}, n.epoch.toString(), n)) }), {}));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                Me = Object(p.c)("predictions/fetchMarketData", Object(g.a)(k.a.mark((function e() {
                    var t;
                    return k.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, we();
                            case 2:
                                return t = e.sent, e.abrupt("return", t);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))),
                Re = Object(p.c)("predictions/fetchLedgerData", function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n, a, r;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.account, a = t.epochs, e.next = 3, Te(n, a);
                                case 3:
                                    return r = e.sent, e.abrupt("return", Ee(n, r, a));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                Ue = Object(p.c)("predictions/fetchClaimableStatuses", function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n, a, r;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.account, a = t.epochs, e.next = 3, je(n, a);
                                case 3:
                                    return r = e.sent, e.abrupt("return", r);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                _e = Object(p.c)("predictions/fetchHistory", function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n, a, r, i;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.account, a = t.claimed, e.next = 3, ke({ user: n.toLowerCase(), claimed: a });
                                case 3:
                                    return r = e.sent, i = r.map(me), e.abrupt("return", { account: n, bets: i });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                qe = Object(p.c)("predictions/fetchNodeHistory", function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n, r, i, o, s, c, u, d, p, b, y, m, f;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.account, r = t.page, i = void 0 === r ? 1 : r, e.next = 3, Se(n);
                                case 3:
                                    if (o = e.sent, s = { bets: [], claimableStatuses: {}, totalHistory: o.toNumber() }, c = o.lte(ae) ? 1 : Math.ceil(o.toNumber() / ae), !o.eq(0)) { e.next = 8; break }
                                    return e.abrupt("return", s);
                                case 8:
                                    if (!(i > c)) { e.next = 10; break }
                                    return e.abrupt("return", s);
                                case 10:
                                    return u = o.sub(ae * i), d = c === i ? o.sub(ae * (i - 1)).toNumber() : ae, e.next = 14, Ie(n, u.lt(0) ? 0 : u.toNumber(), d);
                                case 14:
                                    if (p = e.sent) { e.next = 17; break }
                                    return e.abrupt("return", s);
                                case 17:
                                    return b = Object.keys(p).map((function(e) { return Number(e) })), e.next = 20, Oe(b);
                                case 20:
                                    return y = e.sent, e.next = 23, je(n, b);
                                case 23:
                                    return m = e.sent, f = y.reduce((function(e, t) {
                                        var n = Pe(t),
                                            r = p[n.epoch],
                                            i = W.a.BigNumber.from(r.amount),
                                            o = t.closePrice ? parseFloat(Object(z.formatUnits)(t.closePrice, 8)) : null,
                                            s = t.lockPrice ? parseFloat(Object(z.formatUnits)(t.lockPrice, 8)) : null;
                                        return [].concat(Object(l.a)(e), [{ id: null, hash: null, amount: parseFloat(Object(z.formatUnits)(i)), position: r.position, claimed: r.claimed, claimedAt: null, claimedHash: null, claimedBNB: 0, claimedNetBNB: 0, createdAt: null, updatedAt: null, block: 0, round: { id: null, epoch: t.epoch.toNumber(), failed: !1, startBlock: null, startAt: t.startTimestamp ? t.startTimestamp.toNumber() : null, startHash: null, lockAt: t.lockTimestamp ? t.lockTimestamp.toNumber() : null, lockBlock: null, lockPrice: s, lockHash: null, lockRoundId: t.lockOracleId ? t.lockOracleId.toString() : null, closeRoundId: t.closeOracleId ? t.closeOracleId.toString() : null, closeHash: null, closeAt: null, closePrice: o, closeBlock: null, totalBets: 0, totalAmount: parseFloat(Object(z.formatUnits)(t.totalAmount)), bullBets: 0, bullAmount: parseFloat(Object(z.formatUnits)(t.bullAmount)), bearBets: 0, bearAmount: parseFloat(Object(z.formatUnits)(t.bearAmount)), position: o ? t.closePrice.eq(t.lockPrice) ? a.HOUSE : t.closePrice.gt(t.lockPrice) ? a.BULL : a.BEAR : null } }])
                                    }), []), e.abrupt("return", { bets: f, claimableStatuses: m, page: i, totalHistory: o.toNumber() });
                                case 26:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                Ve = Object(p.c)("predictions/filterLeaderboard", function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n, a;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.filters, e.next = 3, ve({ skip: 0, orderBy: n.orderBy, where: Object(f.a)({ totalBets_gte: 10 }, "".concat(n.orderBy, "_gt"), 0) });
                                case 3:
                                    return a = e.sent, e.abrupt("return", { results: a.map(fe) });
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                Ye = Object(p.c)("predictions/fetchAddressResult", function() {
                    var e = Object(g.a)(k.a.mark((function e(t, n) {
                        var a, r;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = n.rejectWithValue, e.next = 3, xe(t);
                                case 3:
                                    if (r = e.sent) { e.next = 6; break }
                                    return e.abrupt("return", a(t));
                                case 6:
                                    return e.abrupt("return", { account: t, data: fe(r) });
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }()),
                He = Object(p.c)("predictions/filterNextPageLeaderboard", function() {
                    var e = Object(g.a)(k.a.mark((function e(t, n) {
                        var a, r, i;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = n.getState, r = a(), e.next = 4, ve({ skip: t, orderBy: r.predictions.leaderboard.filters.orderBy, where: Object(f.a)({ totalBets_gte: 10 }, "".concat(r.predictions.leaderboard.filters.orderBy, "_gt"), 0) });
                                case 4:
                                    return i = e.sent, e.abrupt("return", { results: i.map(fe), skip: t });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }()),
                We = Object(p.e)({
                    name: "predictions",
                    initialState: Fe,
                    reducers: { setLeaderboardFilter: function(e, t) { e.leaderboard.filters = Object(T.a)(Object(T.a)({}, e.leaderboard.filters), t.payload), e.leaderboard.skip = 0, e.leaderboard.hasMoreResults = !0 }, setPredictionStatus: function(e, t) { e.status = t.payload }, setHistoryPaneState: function(e, t) { e.isHistoryPaneOpen = t.payload, e.historyFilter = i.ALL }, setChartPaneState: function(e, t) { e.isChartPaneOpen = t.payload }, setHistoryFilter: function(e, t) { e.historyFilter = t.payload }, setCurrentEpoch: function(e, t) { e.currentEpoch = t.payload }, setLastOraclePrice: function(e, t) { e.lastOraclePrice = t.payload }, markAsCollected: function(e, t) { e.claimableStatuses = Object(T.a)(Object(T.a)({}, e.claimableStatuses), t.payload) } },
                    extraReducers: function(e) {
                        e.addCase(Ve.pending, (function(e) { e.leaderboard.loadingState === o.IDLE && (e.leaderboard.loadingState = o.LOADING) })), e.addCase(Ve.fulfilled, (function(e, t) {
                            var n = t.payload.results;
                            e.leaderboard.loadingState = o.IDLE, e.leaderboard.results = n, n.length < 20 && (e.leaderboard.hasMoreResults = !1), e.leaderboard.addressResults = Object(T.a)(Object(T.a)({}, e.leaderboard.addressResults), n.reduce((function(e, t) { return Object(T.a)(Object(T.a)({}, e), {}, Object(f.a)({}, t.id, t)) }), {}))
                        })), e.addCase(Ye.pending, (function(e) { e.leaderboard.loadingState = o.LOADING })), e.addCase(Ye.fulfilled, (function(e, t) {
                            var n = t.payload,
                                a = n.account,
                                r = n.data;
                            e.leaderboard.loadingState = o.IDLE, e.leaderboard.addressResults[a] = r
                        })), e.addCase(Ye.rejected, (function(e, t) { e.leaderboard.loadingState = o.IDLE, e.leaderboard.addressResults[t.payload] = null })), e.addCase(He.pending, (function(e) { e.leaderboard.loadingState = o.LOADING })), e.addCase(He.fulfilled, (function(e, t) {
                            var n = t.payload,
                                a = n.results,
                                r = n.skip;
                            e.leaderboard.loadingState = o.IDLE, e.leaderboard.results = [].concat(Object(l.a)(e.leaderboard.results), Object(l.a)(a)), e.leaderboard.skip = r, a.length < 20 && (e.leaderboard.hasMoreResults = !1)
                        })), e.addCase(Ue.fulfilled, (function(e, t) { e.claimableStatuses = J()({}, e.claimableStatuses, t.payload) })), e.addCase(Re.fulfilled, (function(e, t) { e.ledgers = J()({}, e.ledgers, t.payload) })), e.addCase(Me.fulfilled, (function(e, t) {
                            var n = t.payload,
                                a = n.status,
                                r = n.currentEpoch,
                                i = n.intervalSeconds,
                                o = n.minBetAmount;
                            if (e.currentEpoch !== r) {
                                var s = G()(Object.values(e.rounds), "epoch"),
                                    c = Be(s.epoch + 1, s.startTimestamp + i + 9);
                                e.rounds[c.epoch] = c
                            }
                            e.status = a, e.currentEpoch = r, e.intervalSeconds = i, e.minBetAmount = o
                        })), e.addCase(De.fulfilled, (function(e, t) { for (var n = t.payload, a = n.status, r = n.currentEpoch, i = n.intervalSeconds, o = n.bufferSeconds, s = n.rounds, c = n.claimableStatuses, u = n.ledgers, d = [], l = s[r], p = 1; p <= 2; p++) d.push(Be(r + p, l.startTimestamp + i * p)); return Object(T.a)(Object(T.a)({}, e), {}, { status: a, currentEpoch: r, intervalSeconds: i, bufferSeconds: o, claimableStatuses: c, ledgers: u, rounds: J()({}, s, Ae(d)) }) })), e.addCase(Ne.fulfilled, (function(e, t) { e.rounds = J()({}, e.rounds, Object(f.a)({}, t.payload.epoch.toString(), t.payload)) })), e.addCase(Le.fulfilled, (function(e, t) { e.rounds = J()({}, e.rounds, t.payload) })), e.addCase(_e.pending, (function(e) { e.isFetchingHistory = !0 })), e.addCase(_e.rejected, (function(e) { e.isFetchingHistory = !1 })), e.addCase(_e.fulfilled, (function(e, t) {
                            var n, a = t.payload,
                                r = a.account,
                                i = a.bets;
                            e.isFetchingHistory = !1, e.history[r] = J()([], null !== (n = e.history[r]) && void 0 !== n ? n : [], i)
                        })), e.addCase(qe.pending, (function(e) { e.isFetchingHistory = !0 })), e.addCase(qe.rejected, (function(e) { e.isFetchingHistory = !1 })), e.addCase(qe.fulfilled, (function(e, t) {
                            var n = t.payload,
                                a = n.bets,
                                r = n.claimableStatuses,
                                i = n.page,
                                o = n.totalHistory;
                            e.isFetchingHistory = !1, e.history = 1 === i ? a : [].concat(Object(l.a)(e.history), Object(l.a)(a)), e.claimableStatuses = Object(T.a)(Object(T.a)({}, e.claimableStatuses), r), e.hasHistoryLoaded = e.history.length === o || 0 === a.length, e.totalHistory = o, e.currentHistoryPage = i
                        }))
                    }
                }),
                ze = We.actions,
                Ke = (ze.setChartPaneState, ze.setCurrentEpoch, ze.setHistoryFilter, ze.setHistoryPaneState, ze.setPredictionStatus, ze.setLastOraclePrice, ze.markAsCollected, ze.setLeaderboardFilter, We.reducer),
                Ge = n(138),
                Xe = n(370),
                Je = n(336),
                $e = n(249),
                Qe = n(371),
                Ze = n(117),
                et = function() {
                    var e = Object(g.a)(k.a.mark((function e() {
                        var t, n, a, r, i = arguments;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = i.length > 0 && void 0 !== i[0] ? i[0] : 5, n = i.length > 1 && void 0 !== i[1] ? i[1] : 0, a = i.length > 2 && void 0 !== i[2] ? i[2] : u.ACTIVE, e.next = 5, oe()(se.e, Object(ie.gql)(ue || (ue = Object(re.a)(['\n      query getProposals($first: Int!, $skip: Int!, $state: String!) {\n        proposals(\n          first: $first\n          skip: $skip\n          orderBy: "end"\n          orderDirection: desc\n          where: { space_in: "cake.eth", state: $state }\n        ) {\n          id\n          title\n          body\n          choices\n          start\n          end\n          snapshot\n          state\n          author\n          space {\n            id\n            name\n          }\n        }\n      }\n    ']))), { first: t, skip: n, state: a });
                                case 5:
                                    return r = e.sent, e.abrupt("return", r.proposals);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() { return e.apply(this, arguments) }
                }(),
                tt = function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, oe()(se.e, Object(ie.gql)(de || (de = Object(re.a)(["\n      query getProposal($id: String) {\n        proposal(id: $id) {\n          id\n          title\n          body\n          choices\n          start\n          end\n          snapshot\n          state\n          author\n          space {\n            id\n            name\n          }\n        }\n      }\n    "]))), { id: t });
                                case 2:
                                    return n = e.sent, e.abrupt("return", n.proposal);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                nt = function() {
                    var e = Object(g.a)(k.a.mark((function e(t, n, a) {
                        var r;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, oe()(se.e, Object(ie.gql)(le || (le = Object(re.a)(["\n      query getVotes($first: Int, $skip: Int, $where: VoteWhere) {\n        votes(first: $first, skip: $skip, where: $where) {\n          id\n          voter\n          created\n          choice\n          space {\n            id\n            name\n          }\n          proposal {\n            choices\n          }\n          metadata\n        }\n      }\n    "]))), { first: t, skip: n, where: a });
                                case 2:
                                    return r = e.sent, e.abrupt("return", r.votes);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a) { return e.apply(this, arguments) }
                }(),
                at = function() {
                    var e = Object(g.a)(k.a.mark((function e(t, n) {
                        var a, r, i, o;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.t0 = n, e.t0) { e.next = 5; break }
                                    return e.next = 4, E.a.getBlockNumber();
                                case 4:
                                    e.t0 = e.sent;
                                case 5:
                                    return a = e.t0, r = t.map((function(e) { var t, n; return { address: e.voter, verificationHash: null === (t = e.metadata) || void 0 === t ? void 0 : t.verificationHash, total: null === (n = e.metadata) || void 0 === n ? void 0 : n.votingPower } })), e.next = 9, fetch("".concat(se.f, "/verify"), { method: "post", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ block: a, votes: r }) });
                                case 9:
                                    if ((i = e.sent).ok) { e.next = 12; break }
                                    throw new Error(i.statusText);
                                case 12:
                                    return e.next = 14, i.json();
                                case 14:
                                    return o = e.sent, e.abrupt("return", t.reduce((function(e, t) { var n; return Object(T.a)(Object(T.a)({}, e), {}, Object(f.a)({}, t.id, !0 === (null === (n = o.data[t.voter.toLowerCase()]) || void 0 === n ? void 0 : n.isValid))) }), {}));
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                rt = function() {
                    var e = Object(g.a)(k.a.mark((function e(t, n) {
                        var a, r = arguments;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = r.length > 2 && void 0 !== r[2] ? r[2] : 1e3, e.abrupt("return", new Promise((function(e, n) {
                                        var r = [],
                                            i = function() {
                                                var o = Object(g.a)(k.a.mark((function o(s) {
                                                    var c;
                                                    return k.a.wrap((function(o) {
                                                        for (;;) switch (o.prev = o.next) {
                                                            case 0:
                                                                return o.prev = 0, o.next = 3, nt(a, s, { proposal: t });
                                                            case 3:
                                                                0 === (c = o.sent).length ? e(r) : (r = [].concat(Object(l.a)(r), Object(l.a)(c)), i(s + a)), o.next = 10;
                                                                break;
                                                            case 7:
                                                                o.prev = 7, o.t0 = o.catch(0), n(o.t0);
                                                            case 10:
                                                            case "end":
                                                                return o.stop()
                                                        }
                                                    }), o, null, [
                                                        [0, 7]
                                                    ])
                                                })));
                                                return function(e) { return o.apply(this, arguments) }
                                            }();
                                        i(0)
                                    })));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                it = { proposalLoadingStatus: d.INITIAL, proposals: {}, voteLoadingStatus: d.INITIAL, votes: {} },
                ot = Object(p.c)("voting/fetchProposals", function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n, a, r, i, o, s;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.first, a = t.skip, r = void 0 === a ? 0 : a, i = t.state, o = void 0 === i ? u.ACTIVE : i, e.next = 3, et(n, r, o);
                                case 3:
                                    return s = e.sent, e.abrupt("return", s);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                st = Object(p.c)("voting/fetchProposal", function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, tt(t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                ct = Object(p.c)("voting/fetchVotes", function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n, a, r;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.proposalId, a = t.block, e.next = 3, rt(n, a);
                                case 3:
                                    return r = e.sent, e.abrupt("return", { votes: r, proposalId: n });
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                ut = Object(p.c)("voting/verifyVotes", function() {
                    var e = Object(g.a)(k.a.mark((function e(t, n) {
                        var a, r, i, o, s, c;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = t.proposalId, r = t.snapshot, i = n.getState, o = i(), s = o.voting.votes[a], e.next = 6, at(s, Number(r));
                                case 6:
                                    return c = e.sent, e.abrupt("return", { results: c, proposalId: a });
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }()),
                dt = Object(p.e)({
                    name: "voting",
                    initialState: it,
                    reducers: {},
                    extraReducers: function(e) {
                        e.addCase(ut.fulfilled, (function(e, t) {
                            var n = t.payload,
                                a = n.proposalId,
                                r = n.results;
                            e.votes[a] && (e.votes[a] = e.votes[a].map((function(e) { return Object(T.a)(Object(T.a)({}, e), {}, { _inValid: !1 === r[e.id] }) })))
                        })), e.addCase(ot.pending, (function(e) { e.proposalLoadingStatus = d.LOADING })), e.addCase(ot.fulfilled, (function(e, t) {
                            var n = t.payload.reduce((function(e, t) { return Object(T.a)(Object(T.a)({}, e), {}, Object(f.a)({}, t.id, t)) }), {});
                            e.proposals = Object(Ze.merge)({}, e.proposals, n), e.proposalLoadingStatus = d.IDLE
                        })), e.addCase(st.pending, (function(e) { e.proposalLoadingStatus = d.LOADING })), e.addCase(st.fulfilled, (function(e, t) { e.proposals[t.payload.id] = t.payload, e.proposalLoadingStatus = d.IDLE })), e.addCase(ct.pending, (function(e) { e.voteLoadingStatus = d.LOADING })), e.addCase(ct.fulfilled, (function(e, t) {
                            var n = t.payload,
                                a = n.votes,
                                r = n.proposalId;
                            e.votes = Object(T.a)(Object(T.a)({}, e.votes), {}, Object(f.a)({}, r, a)), e.voteLoadingStatus = d.IDLE
                        }))
                    }
                }).reducer,
                lt = n(10),
                pt = n(206),
                bt = (n(0), 2500),
                yt = Object(C.p)(),
                mt = function(e, t) {
                    var n = e.status,
                        a = e.startTime,
                        r = e.endTime,
                        i = e.priceTicketInCake,
                        o = e.discountDivisor,
                        s = e.treasuryFee,
                        c = e.firstTicketId,
                        u = e.lastTicketId,
                        d = e.amountCollectedInCake,
                        l = e.finalNumber,
                        p = e.cakePerBracket,
                        b = e.countWinnersPerBracket,
                        y = e.rewardsBreakdown,
                        m = Object.keys(lt.a)[n],
                        f = p.map((function(e) { return Object(w.d)(e) })),
                        h = b.map((function(e) { return Object(w.d)(e) })),
                        k = y.map((function(e) { return Object(w.d)(e) }));
                    return { isLoading: !1, lotteryId: t, status: lt.a[m], startTime: null === a || void 0 === a ? void 0 : a.toString(), endTime: null === r || void 0 === r ? void 0 : r.toString(), priceTicketInCake: Object(w.d)(i), discountDivisor: null === o || void 0 === o ? void 0 : o.toString(), treasuryFee: null === s || void 0 === s ? void 0 : s.toString(), firstTicketId: null === c || void 0 === c ? void 0 : c.toString(), lastTicketId: null === u || void 0 === u ? void 0 : u.toString(), amountCollectedInCake: Object(w.d)(d), finalNumber: l, cakePerBracket: f, countWinnersPerBracket: h, rewardsBreakdown: k }
                },
                ft = function(e) { return { isLoading: !0, lotteryId: e, status: lt.a.PENDING, startTime: "", endTime: "", priceTicketInCake: "", discountDivisor: "", treasuryFee: "", firstTicketId: "", lastTicketId: "", amountCollectedInCake: "", finalNumber: null, cakePerBracket: [], countWinnersPerBracket: [], rewardsBreakdown: [] } },
                ht = function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, yt.viewLottery(t);
                                case 3:
                                    return n = e.sent, e.abrupt("return", mt(n, t));
                                case 7:
                                    return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", ft(t));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                kt = function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n, a, r;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.map((function(e) { return { name: "viewLottery", address: Object(A.l)(), params: [e] } })), e.prev = 1, e.next = 4, Object(B.b)(pt, n, { requireSuccess: !1 });
                                case 4:
                                    return a = e.sent, r = a.map((function(e, n) { return mt(e[0], t[n]) })), e.abrupt("return", r);
                                case 9:
                                    return e.prev = 9, e.t0 = e.catch(1), console.error(e.t0), e.abrupt("return", n.map((function(e, n) { return ft(t[n]) })));
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 9]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                Tt = function() {
                    var e = Object(g.a)(k.a.mark((function e() {
                        var t, n, a, r, i, o, s;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, t = ["currentLotteryId", "maxNumberTicketsPerBuyOrClaim"].map((function(e) { return { address: Object(A.l)(), name: e } })), e.next = 4, Object(B.b)(pt, t);
                                case 4:
                                    return n = e.sent, a = Object(P.a)(n, 2), r = Object(P.a)(a[0], 1), i = r[0], o = Object(P.a)(a[1], 1), s = o[0], e.abrupt("return", { currentLotteryId: i ? i.toString() : null, maxNumberTicketsPerBuyOrClaim: s ? s.toString() : null });
                                case 13:
                                    return e.prev = 13, e.t0 = e.catch(0), e.abrupt("return", { currentLotteryId: null, maxNumberTicketsPerBuyOrClaim: null });
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 13]
                        ])
                    })));
                    return function() { return e.apply(this, arguments) }
                }(),
                gt = function(e) { for (var t = parseInt(e, 10), n = [], a = 0; a < 3; a++) n.push(t - a); return n.map((function(e) { return e.toString() })) },
                vt = function(e) { return e.filter((function(e) { return e.status })).length > 0 },
                xt = function(e, t) {
                    if (0 === t.length) return e.map((function(e) { return { endTime: e.endTime, finalNumber: e.finalNumber.toString(), startTime: e.startTime, status: e.status, id: e.lotteryId.toString(), ticketPrice: e.priceTicketInCake, totalTickets: "", totalUsers: "", winningTickets: "" } }));
                    var n = e.map((function(e) { var n = t.find((function(t) { return t.id === e.lotteryId })); return { endTime: e.endTime, finalNumber: e.finalNumber.toString(), startTime: e.startTime, status: e.status, id: e.lotteryId, ticketPrice: null === n || void 0 === n ? void 0 : n.ticketPrice, totalTickets: null === n || void 0 === n ? void 0 : n.totalTickets, totalUsers: null === n || void 0 === n ? void 0 : n.totalUsers, winningTickets: null === n || void 0 === n ? void 0 : n.winningTickets } })),
                        a = n.slice(-1),
                        r = Object(P.a)(a, 1)[0],
                        i = t.map((function(e) { return null === e || void 0 === e ? void 0 : e.id })).indexOf(null === r || void 0 === r ? void 0 : r.id),
                        o = t ? t.splice(i + 1) : [];
                    return [].concat(Object(l.a)(n), Object(l.a)(o))
                },
                jt = function() {
                    var e = Object(g.a)(k.a.mark((function e() {
                        var t, n, a, r, i = arguments;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = i.length > 0 && void 0 !== i[0] ? i[0] : 100, n = i.length > 1 && void 0 !== i[1] ? i[1] : 0, a = i.length > 2 && void 0 !== i[2] ? i[2] : {}, e.prev = 3, e.next = 6, Object(ie.request)(se.b, Object(ie.gql)(pe || (pe = Object(re.a)(["\n        query getLotteries($first: Int!, $skip: Int!, $where: Lottery_filter) {\n          lotteries(first: $first, skip: $skip, where: $where, orderDirection: desc, orderBy: block) {\n            id\n            totalUsers\n            totalTickets\n            winningTickets\n            status\n            finalNumber\n            startTime\n            endTime\n            ticketPrice\n          }\n        }\n      "]))), { skip: n, first: t, where: a });
                                case 6:
                                    return r = e.sent, e.abrupt("return", r.lotteries);
                                case 10:
                                    return e.prev = 10, e.t0 = e.catch(3), console.error(e.t0), e.abrupt("return", []);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 10]
                        ])
                    })));
                    return function() { return e.apply(this, arguments) }
                }(),
                wt = function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n, a, r, i;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = gt(t), e.next = 3, kt(n);
                                case 3:
                                    return a = e.sent, e.next = 6, jt();
                                case 6:
                                    return r = e.sent, i = xt(a, r), e.abrupt("return", i);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                Ot = Object(C.p)(),
                Bt = function(e) {
                    var t = Object(P.a)(e, 3),
                        n = t[0],
                        a = t[1],
                        r = t[2];
                    return (null === n || void 0 === n ? void 0 : n.length) > 0 ? n.map((function(e, t) { return { id: e.toString(), number: a[t].toString(), status: r[t] } })) : []
                },
                At = function() {
                    var e = Object(g.a)(k.a.mark((function e(t, n, a, r) {
                        var i;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Ot.viewUserInfoForLotteryId(t, n, a, r);
                                case 3:
                                    return i = e.sent, e.abrupt("return", Bt(i));
                                case 7:
                                    return e.prev = 7, e.t0 = e.catch(0), console.error("viewUserInfoForLotteryId", e.t0), e.abrupt("return", null);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function(t, n, a, r) { return e.apply(this, arguments) }
                }(),
                Ct = function() {
                    var e = Object(g.a)(k.a.mark((function e(t, n) {
                        var a, r, i, o;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    a = 0, r = bt, i = [];
                                case 3:
                                    if (r !== bt) { e.next = 12; break }
                                    return e.next = 6, At(t, n, a, bt);
                                case 6:
                                    o = e.sent, a += bt, r = o.length, i.push.apply(i, Object(l.a)(o)), e.next = 3;
                                    break;
                                case 12:
                                    return e.abrupt("return", i);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                Et = function() {
                    var e = Object(g.a)(k.a.mark((function e(t, n) {
                        var a, r, i, o;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    a = [], r = 0;
                                case 2:
                                    if (!(r < t.length)) { e.next = 11; break }
                                    return i = t[r], e.next = 6, Ct(n, i);
                                case 6:
                                    o = e.sent, a.push({ roundId: i, userTickets: o });
                                case 8:
                                    r += 1, e.next = 2;
                                    break;
                                case 11:
                                    return e.abrupt("return", a);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                Pt = function(e, t, n) {
                    if (0 === t.length) return n.map((function(t) { var n = e.find((function(e) { return e.roundId === t.lotteryId })); return { endTime: t.endTime, status: t.status, lotteryId: t.lotteryId.toString(), claimed: vt(n.userTickets), totalTickets: "".concat(n.userTickets.length.toString()), tickets: n.userTickets } }));
                    var a = e.map((function(e) {
                            var a = t.find((function(t) { return t.lotteryId === e.roundId })),
                                r = n.find((function(t) { return t.lotteryId === e.roundId }));
                            return { endTime: r.endTime, status: r.status, lotteryId: r.lotteryId.toString(), claimed: vt(e.userTickets), totalTickets: (null === a || void 0 === a ? void 0 : a.totalTickets) || e.userTickets.length.toString(), tickets: e.userTickets }
                        })),
                        r = a.slice(-1),
                        i = Object(P.a)(r, 1)[0],
                        o = t.map((function(e) { return null === e || void 0 === e ? void 0 : e.lotteryId })).indexOf(null === i || void 0 === i ? void 0 : i.lotteryId),
                        s = t ? t.splice(o + 1) : [];
                    return [].concat(Object(l.a)(a), Object(l.a)(s))
                },
                St = function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n, a, r, i, o, s, c, u = arguments;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = u.length > 1 && void 0 !== u[1] ? u[1] : 100, a = u.length > 2 && void 0 !== u[2] ? u[2] : 0, r = u.length > 3 && void 0 !== u[3] ? u[3] : {}, o = { account: t, totalCake: "", totalTickets: "", rounds: [] }, e.prev = 4, e.next = 7, Object(ie.request)(se.b, Object(ie.gql)(be || (be = Object(re.a)(["\n        query getUserLotteries($account: ID!, $first: Int!, $skip: Int!, $where: Round_filter) {\n          user(id: $account) {\n            id\n            totalTickets\n            totalCake\n            rounds(first: $first, skip: $skip, where: $where, orderDirection: desc, orderBy: block) {\n              id\n              lottery {\n                id\n                endTime\n                status\n              }\n              claimed\n              totalTickets\n            }\n          }\n        }\n      "]))), { account: t.toLowerCase(), first: n, skip: a, where: r });
                                case 7:
                                    s = e.sent, c = s.user, i = c ? { account: c.id, totalCake: c.totalCake, totalTickets: c.totalTickets, rounds: c.rounds.map((function(e) { var t, n, a; return { lotteryId: null === e || void 0 === e || null === (t = e.lottery) || void 0 === t ? void 0 : t.id, endTime: null === e || void 0 === e || null === (n = e.lottery) || void 0 === n ? void 0 : n.endTime, claimed: null === e || void 0 === e ? void 0 : e.claimed, totalTickets: null === e || void 0 === e ? void 0 : e.totalTickets, status: null === e || void 0 === e || null === (a = e.lottery) || void 0 === a ? void 0 : a.status.toLowerCase() } })) } : o, e.next = 16;
                                    break;
                                case 12:
                                    e.prev = 12, e.t0 = e.catch(4), console.error(e.t0), i = o;
                                case 16:
                                    return e.abrupt("return", i);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [4, 12]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                It = function() {
                    var e = Object(g.a)(k.a.mark((function e(t, n) {
                        var a, r, i, o, s, c, u, d;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = gt(n), e.next = 3, Et(a, t);
                                case 3:
                                    return r = e.sent, i = r.filter((function(e) { return e.userTickets.length > 0 })), o = i.map((function(e) { return e.roundId })), e.next = 8, kt(o);
                                case 8:
                                    return s = e.sent, e.next = 11, St(t);
                                case 11:
                                    return c = e.sent, u = Pt(i, c.rounds, s), d = Object(T.a)(Object(T.a)({}, c), {}, { rounds: u }), e.abrupt("return", d);
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                Ft = { currentLotteryId: null, isTransitioning: !1, maxNumberTicketsPerBuyOrClaim: null, currentRound: { isLoading: !0, lotteryId: null, status: lt.a.PENDING, startTime: "", endTime: "", priceTicketInCake: "", discountDivisor: "", treasuryFee: "", firstTicketId: "", lastTicketId: "", amountCollectedInCake: "", finalNumber: null, cakePerBracket: [], countWinnersPerBracket: [], rewardsBreakdown: [], userTickets: { isLoading: !0, tickets: [] } }, lotteriesData: null, userLotteryData: { account: "", totalCake: "", totalTickets: "", rounds: [] } },
                Dt = Object(p.c)("lottery/fetchCurrentLottery", function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n, a;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.currentLotteryId, e.next = 3, ht(n);
                                case 3:
                                    return a = e.sent, e.abrupt("return", a);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                Nt = Object(p.c)("lottery/fetchCurrentLotteryId", Object(g.a)(k.a.mark((function e() {
                    var t;
                    return k.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Tt();
                            case 2:
                                return t = e.sent, e.abrupt("return", t);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))),
                Lt = Object(p.c)("lottery/fetchUserTicketsAndLotteries", function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n, a, r, i, o, s;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = t.account, r = t.currentLotteryId, e.next = 3, It(a, r);
                                case 3:
                                    if (i = e.sent, o = null === (n = i.rounds) || void 0 === n ? void 0 : n.find((function(e) { return e.lotteryId === r })), (s = null === o || void 0 === o ? void 0 : o.tickets) && 0 !== s.length) { e.next = 8; break }
                                    return e.abrupt("return", { userTickets: null, userLotteries: i });
                                case 8:
                                    return e.abrupt("return", { userTickets: s, userLotteries: i });
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                Mt = Object(p.c)("lottery/fetchPublicLotteries", function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n, a;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.currentLotteryId, e.next = 3, wt(n);
                                case 3:
                                    return a = e.sent, e.abrupt("return", a);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                Rt = Object(p.c)("lottery/fetchUserLotteries", function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n, a, r;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.account, a = t.currentLotteryId, e.next = 3, It(n, a);
                                case 3:
                                    return r = e.sent, e.abrupt("return", r);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                Ut = Object(p.c)("lottery/fetchAdditionalUserLotteries", function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n, a, r;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.account, a = t.skip, e.next = 3, St(n, void 0, a);
                                case 3:
                                    return r = e.sent, e.abrupt("return", r);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                _t = Object(p.c)("lottery/setIsTransitioning", function() {
                    var e = Object(g.a)(k.a.mark((function e(t) {
                        var n;
                        return k.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.isTransitioning, e.abrupt("return", { isTransitioning: n });
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                qt = Object(p.e)({
                    name: "Lottery",
                    initialState: Ft,
                    reducers: { setLotteryPublicData: function(e, t) { t.payload } },
                    extraReducers: function(e) {
                        e.addCase(Dt.fulfilled, (function(e, t) { e.currentRound = Object(T.a)(Object(T.a)({}, e.currentRound), t.payload) })), e.addCase(Nt.fulfilled, (function(e, t) { e.currentLotteryId = t.payload.currentLotteryId, e.maxNumberTicketsPerBuyOrClaim = t.payload.maxNumberTicketsPerBuyOrClaim })), e.addCase(Lt.fulfilled, (function(e, t) { e.currentRound.userTickets.isLoading = !1, e.currentRound.userTickets.tickets = t.payload.userTickets, e.userLotteryData = t.payload.userLotteries })), e.addCase(Mt.fulfilled, (function(e, t) { e.lotteriesData = t.payload })), e.addCase(Rt.fulfilled, (function(e, t) { e.userLotteryData = t.payload })), e.addCase(Ut.fulfilled, (function(e, t) {
                            var n = [].concat(Object(l.a)(e.userLotteryData.rounds), Object(l.a)(t.payload.rounds));
                            e.userLotteryData.rounds = n
                        })), e.addCase(_t.fulfilled, (function(e, t) { e.isTransitioning = t.payload.isTransitioning }))
                    }
                }),
                Vt = (qt.actions.setLotteryPublicData, qt.reducer),
                Yt = Object(p.b)("info/protocol/updateProtocolData"),
                Ht = Object(p.b)("info/protocol/updateProtocolChartData"),
                Wt = Object(p.b)("info/protocol/updateProtocolTransactions"),
                zt = Object(p.b)("info/pools/updatePoolData"),
                Kt = Object(p.b)("info/pools/addPoolKeys"),
                Gt = Object(p.b)("info/pools/updatePoolChartData"),
                Xt = Object(p.b)("info/pools/updatePoolTransactions"),
                Jt = Object(p.b)("info/tokens/updateTokenData"),
                $t = Object(p.b)("info/tokens/addTokenKeys"),
                Qt = Object(p.b)("info/tokens/addTokenPoolAddresses"),
                Zt = Object(p.b)("info/tokens/updateTokenChartData"),
                en = Object(p.b)("info/tokens/updateTokenTransactions"),
                tn = Object(p.b)("info/tokens/updateTokenPriceData"),
                nn = { protocol: { overview: void 0, chartData: void 0, transactions: void 0 }, pools: { byAddress: {} }, tokens: { byAddress: {} } },
                an = Object(p.d)(nn, (function(e) {
                    return e.addCase(Yt, (function(e, t) {
                        var n = t.payload.protocolData;
                        e.protocol.overview = n
                    })).addCase(Ht, (function(e, t) {
                        var n = t.payload.chartData;
                        e.protocol.chartData = n
                    })).addCase(Wt, (function(e, t) {
                        var n = t.payload.transactions;
                        e.protocol.transactions = n
                    })).addCase(zt, (function(e, t) { t.payload.pools.forEach((function(t) { e.pools.byAddress[t.address] = Object(T.a)(Object(T.a)({}, e.pools.byAddress[t.address]), {}, { data: t }) })) })).addCase(Kt, (function(e, t) { t.payload.poolAddresses.forEach((function(t) { e.pools.byAddress[t] || (e.pools.byAddress[t] = { data: void 0, chartData: void 0, transactions: void 0 }) })) })).addCase(Gt, (function(e, t) {
                        var n = t.payload,
                            a = n.poolAddress,
                            r = n.chartData;
                        e.pools.byAddress[a] = Object(T.a)(Object(T.a)({}, e.pools.byAddress[a]), {}, { chartData: r })
                    })).addCase(Xt, (function(e, t) {
                        var n = t.payload,
                            a = n.poolAddress,
                            r = n.transactions;
                        e.pools.byAddress[a] = Object(T.a)(Object(T.a)({}, e.pools.byAddress[a]), {}, { transactions: r })
                    })).addCase(Jt, (function(e, t) { t.payload.tokens.forEach((function(t) { e.tokens.byAddress[t.address] = Object(T.a)(Object(T.a)({}, e.tokens.byAddress[t.address]), {}, { data: t }) })) })).addCase($t, (function(e, t) { t.payload.tokenAddresses.forEach((function(t) { e.tokens.byAddress[t] || (e.tokens.byAddress[t] = { poolAddresses: void 0, data: void 0, chartData: void 0, priceData: {}, transactions: void 0 }) })) })).addCase(Qt, (function(e, t) {
                        var n = t.payload,
                            a = n.tokenAddress,
                            r = n.poolAddresses;
                        e.tokens.byAddress[a] = Object(T.a)(Object(T.a)({}, e.tokens.byAddress[a]), {}, { poolAddresses: r })
                    })).addCase(Zt, (function(e, t) {
                        var n = t.payload,
                            a = n.tokenAddress,
                            r = n.chartData;
                        e.tokens.byAddress[a] = Object(T.a)(Object(T.a)({}, e.tokens.byAddress[a]), {}, { chartData: r })
                    })).addCase(en, (function(e, t) {
                        var n = t.payload,
                            a = n.tokenAddress,
                            r = n.transactions;
                        e.tokens.byAddress[a] = Object(T.a)(Object(T.a)({}, e.tokens.byAddress[a]), {}, { transactions: r })
                    })).addCase(tn, (function(e, t) {
                        var n, a = t.payload,
                            r = a.tokenAddress,
                            i = a.secondsInterval,
                            o = a.priceData,
                            s = a.oldestFetchedTimestamp;
                        e.tokens.byAddress[r] = Object(T.a)(Object(T.a)({}, e.tokens.byAddress[r]), {}, { priceData: Object(T.a)(Object(T.a)({}, e.tokens.byAddress[r].priceData), {}, (n = {}, Object(f.a)(n, i, o), Object(f.a)(n, "oldestFetchedTimestamp", s), n)) })
                    }))
                })),
                rn = Object(p.b)("global/updateVersion"),
                on = n(36),
                sn = n(41),
                cn = function() { return (new Date).getTime() };

            function un(e, t) { return "".concat(e, ";").concat(t) }
            var dn, ln, pn = { userExpertMode: !1, userSingleHopOnly: !1, userSlippageTolerance: on.n, userDeadline: on.m, tokens: {}, pairs: {}, timestamp: cn(), audioPlay: !0, isDark: !1, userFarmStakedOnly: sn.a.ON_FINISHED, userPoolStakedOnly: !1, userPoolsViewMode: sn.b.TABLE, userFarmsViewMode: sn.b.TABLE, userPredictionAcceptedRisk: !1, userPredictionChartDisclaimerShow: !0, userExpertModeAcknowledgementShow: !0, userUsernameVisibility: !1, gasPrice: M.b.default, watchlistTokens: [], watchlistPools: [] },
                bn = Object(p.d)(pn, (function(e) {
                    return e.addCase(rn, (function(e) { "number" !== typeof e.userSlippageTolerance && (e.userSlippageTolerance = on.n), "number" !== typeof e.userDeadline && (e.userDeadline = on.m), e.lastUpdateVersionTimestamp = cn() })).addCase(sn.n, (function(e, t) { e.userExpertMode = t.payload.userExpertMode, e.timestamp = cn() })).addCase(sn.w, (function(e, t) { e.userSlippageTolerance = t.payload.userSlippageTolerance, e.timestamp = cn() })).addCase(sn.m, (function(e, t) { e.userDeadline = t.payload.userDeadline, e.timestamp = cn() })).addCase(sn.v, (function(e, t) { e.userSingleHopOnly = t.payload.userSingleHopOnly })).addCase(sn.d, (function(e, t) {
                        var n = t.payload.serializedToken;
                        e.tokens || (e.tokens = {}), e.tokens[n.chainId] = e.tokens[n.chainId] || {}, e.tokens[n.chainId][n.address] = n, e.timestamp = cn()
                    })).addCase(sn.i, (function(e, t) {
                        var n = t.payload,
                            a = n.address,
                            r = n.chainId;
                        e.tokens || (e.tokens = {}), e.tokens[r] = e.tokens[r] || {}, delete e.tokens[r][a], e.timestamp = cn()
                    })).addCase(sn.c, (function(e, t) {
                        var n = t.payload.serializedPair;
                        if (n.token0.chainId === n.token1.chainId && n.token0.address !== n.token1.address) {
                            var a = n.token0.chainId;
                            e.pairs[a] = e.pairs[a] || {}, e.pairs[a][un(n.token0.address, n.token1.address)] = n
                        }
                        e.timestamp = cn()
                    })).addCase(sn.h, (function(e, t) {
                        var n = t.payload,
                            a = n.chainId,
                            r = n.tokenAAddress,
                            i = n.tokenBAddress;
                        e.pairs[a] && (delete e.pairs[a][un(r, i)], delete e.pairs[a][un(i, r)]), e.timestamp = cn()
                    })).addCase(sn.g, (function(e) { e.audioPlay = !1 })).addCase(sn.k, (function(e) { e.audioPlay = !0 })).addCase(sn.j, (function(e) { e.isDark = !e.isDark })).addCase(sn.p, (function(e, t) {
                        var n = t.payload.userFarmStakedOnly;
                        e.userFarmStakedOnly = n
                    })).addCase(sn.r, (function(e, t) {
                        var n = t.payload.userPoolStakedOnly;
                        e.userPoolStakedOnly = n
                    })).addCase(sn.s, (function(e, t) {
                        var n = t.payload.userPoolsViewMode;
                        e.userPoolsViewMode = n
                    })).addCase(sn.q, (function(e, t) {
                        var n = t.payload.userFarmsViewMode;
                        e.userFarmsViewMode = n
                    })).addCase(sn.t, (function(e, t) {
                        var n = t.payload.userAcceptedRisk;
                        e.userPredictionAcceptedRisk = n
                    })).addCase(sn.u, (function(e, t) {
                        var n = t.payload.userShowDisclaimer;
                        e.userPredictionChartDisclaimerShow = n
                    })).addCase(sn.o, (function(e, t) {
                        var n = t.payload.userExpertModeAcknowledgementShow;
                        e.userExpertModeAcknowledgementShow = n
                    })).addCase(sn.x, (function(e, t) {
                        var n = t.payload.userUsernameVisibility;
                        e.userUsernameVisibility = n
                    })).addCase(sn.l, (function(e, t) { e.gasPrice = t.payload.gasPrice })).addCase(sn.f, (function(e, t) {
                        var n, a = t.payload.address,
                            r = null !== (n = e.watchlistTokens) && void 0 !== n ? n : [];
                        if (r.includes(a)) {
                            var i = e.watchlistTokens.filter((function(e) { return e !== a }));
                            e.watchlistTokens = i
                        } else e.watchlistTokens = [].concat(Object(l.a)(r), [a])
                    })).addCase(sn.e, (function(e, t) {
                        var n, a = t.payload.address,
                            r = null !== (n = e.watchlistPools) && void 0 !== n ? n : [];
                        if (r.includes(a)) {
                            var i = e.watchlistPools.filter((function(e) { return e !== a }));
                            e.watchlistPools = i
                        } else e.watchlistPools = [].concat(Object(l.a)(r), [a])
                    }))
                })),
                yn = n(95),
                mn = function() { return (new Date).getTime() },
                fn = Object(p.d)({}, (function(e) {
                    return e.addCase(yn.a, (function(e, t) {
                        var n, a, r = t.payload,
                            i = r.chainId,
                            o = r.from,
                            s = r.hash,
                            c = r.approval,
                            u = r.summary,
                            d = r.claim;
                        if (null === (n = e[i]) || void 0 === n ? void 0 : n[s]) throw Error("Attempted to add existing transaction.");
                        var l = null !== (a = e[i]) && void 0 !== a ? a : {};
                        l[s] = { hash: s, approval: c, summary: u, claim: d, from: o, addedTime: mn() }, e[i] = l
                    })).addCase(yn.c, (function(e, t) {
                        var n = t.payload.chainId;
                        e[n] && (e[n] = {})
                    })).addCase(yn.b, (function(e, t) {
                        var n, a = t.payload,
                            r = a.chainId,
                            i = a.hash,
                            o = a.blockNumber,
                            s = null === (n = e[r]) || void 0 === n ? void 0 : n[i];
                        s && (s.lastCheckedBlockNumber ? s.lastCheckedBlockNumber = Math.max(o, s.lastCheckedBlockNumber) : s.lastCheckedBlockNumber = o)
                    })).addCase(yn.d, (function(e, t) {
                        var n, a = t.payload,
                            r = a.hash,
                            i = a.chainId,
                            o = a.receipt,
                            s = null === (n = e[i]) || void 0 === n ? void 0 : n[r];
                        s && (s.receipt = o, s.confirmedTime = mn())
                    }))
                })),
                hn = n(27),
                kn = (dn = { independentField: hn.a.INPUT, typedValue: "" }, Object(f.a)(dn, hn.a.INPUT, { currencyId: "" }), Object(f.a)(dn, hn.a.OUTPUT, { currencyId: "" }), Object(f.a)(dn, "recipient", null), dn),
                Tn = Object(p.d)(kn, (function(e) {
                    return e.addCase(hn.b, (function(e, t) {
                        var n, a = t.payload,
                            r = a.typedValue,
                            i = a.recipient,
                            o = a.field,
                            s = a.inputCurrencyId,
                            c = a.outputCurrencyId;
                        return n = {}, Object(f.a)(n, hn.a.INPUT, { currencyId: s }), Object(f.a)(n, hn.a.OUTPUT, { currencyId: c }), Object(f.a)(n, "independentField", o), Object(f.a)(n, "typedValue", r), Object(f.a)(n, "recipient", i), n
                    })).addCase(hn.c, (function(e, t) {
                        var n, a = t.payload,
                            r = a.currencyId,
                            i = a.field,
                            o = i === hn.a.INPUT ? hn.a.OUTPUT : hn.a.INPUT;
                        return r === e[o].currencyId ? Object(T.a)(Object(T.a)({}, e), {}, (n = { independentField: e.independentField === hn.a.INPUT ? hn.a.OUTPUT : hn.a.INPUT }, Object(f.a)(n, i, { currencyId: r }), Object(f.a)(n, o, { currencyId: e[i].currencyId }), n)) : Object(T.a)(Object(T.a)({}, e), {}, Object(f.a)({}, i, { currencyId: r }))
                    })).addCase(hn.e, (function(e) { var t; return Object(T.a)(Object(T.a)({}, e), {}, (t = { independentField: e.independentField === hn.a.INPUT ? hn.a.OUTPUT : hn.a.INPUT }, Object(f.a)(t, hn.a.INPUT, { currencyId: e[hn.a.OUTPUT].currencyId }), Object(f.a)(t, hn.a.OUTPUT, { currencyId: e[hn.a.INPUT].currencyId }), t)) })).addCase(hn.f, (function(e, t) {
                        var n = t.payload,
                            a = n.field,
                            r = n.typedValue;
                        return Object(T.a)(Object(T.a)({}, e), {}, { independentField: a, typedValue: r })
                    })).addCase(hn.d, (function(e, t) {
                        var n = t.payload.recipient;
                        e.recipient = n
                    }))
                })),
                gn = n(22),
                vn = { independentField: gn.a.CURRENCY_A, typedValue: "", otherTypedValue: "" },
                xn = Object(p.d)(vn, (function(e) {
                    return e.addCase(gn.b, (function() { return vn })).addCase(gn.c, (function(e, t) {
                        var n = t.payload,
                            a = n.field,
                            r = n.typedValue;
                        return n.noLiquidity ? a === e.independentField ? Object(T.a)(Object(T.a)({}, e), {}, { independentField: a, typedValue: r }) : Object(T.a)(Object(T.a)({}, e), {}, { independentField: a, typedValue: r, otherTypedValue: e.typedValue }) : Object(T.a)(Object(T.a)({}, e), {}, { independentField: a, typedValue: r, otherTypedValue: "" })
                    }))
                })),
                jn = n(132),
                wn = n(67),
                On = n(73),
                Bn = { error: null, current: null, loadingRequestId: null, pendingUpdate: null },
                An = { lastInitializedDefaultListOfLists: wn.b, byUrl: Object(T.a)({}, wn.b.concat.apply(wn.b, Object(l.a)(wn.c)).reduce((function(e, t) { return e[t] = Bn, e }), {})), activeListUrls: wn.a },
                Cn = Object(p.d)(An, (function(e) {
                    return e.addCase(On.e.pending, (function(e, t) {
                        var n = t.payload,
                            a = n.requestId,
                            r = n.url;
                        e.byUrl[r] = Object(T.a)(Object(T.a)({ current: null, pendingUpdate: null }, e.byUrl[r]), {}, { loadingRequestId: a, error: null })
                    })).addCase(On.e.fulfilled, (function(e, t) {
                        var n, a, r = t.payload,
                            i = r.requestId,
                            o = r.tokenList,
                            s = r.url,
                            c = null === (n = e.byUrl[s]) || void 0 === n ? void 0 : n.current,
                            u = null === (a = e.byUrl[s]) || void 0 === a ? void 0 : a.loadingRequestId;
                        if (c) {
                            if (Object(jn.b)(c.version, o.version) === jn.a.NONE) return;
                            null !== u && u !== i || (e.byUrl[s] = Object(T.a)(Object(T.a)({}, e.byUrl[s]), {}, { loadingRequestId: null, error: null, current: c, pendingUpdate: o }))
                        } else {
                            var d;
                            if (wn.a.includes(s)) null === (d = e.activeListUrls) || void 0 === d || d.push(s);
                            e.byUrl[s] = Object(T.a)(Object(T.a)({}, e.byUrl[s]), {}, { loadingRequestId: null, error: null, current: o, pendingUpdate: null })
                        }
                    })).addCase(On.e.rejected, (function(e, t) {
                        var n, a = t.payload,
                            r = a.url,
                            i = a.requestId,
                            o = a.errorMessage;
                        (null === (n = e.byUrl[r]) || void 0 === n ? void 0 : n.loadingRequestId) === i && (e.byUrl[r] = Object(T.a)(Object(T.a)({}, e.byUrl[r]), {}, { loadingRequestId: null, error: o, current: null, pendingUpdate: null }))
                    })).addCase(On.b, (function(e, t) {
                        var n = t.payload;
                        e.byUrl[n] || (e.byUrl[n] = Bn)
                    })).addCase(On.f, (function(e, t) {
                        var n = t.payload;
                        e.byUrl[n] && delete e.byUrl[n], e.activeListUrls && e.activeListUrls.includes(n) && (e.activeListUrls = e.activeListUrls.filter((function(e) { return e !== n })))
                    })).addCase(On.d, (function(e, t) {
                        var n = t.payload;
                        e.byUrl[n] || (e.byUrl[n] = Bn), e.activeListUrls && !e.activeListUrls.includes(n) && e.activeListUrls.push(n), e.activeListUrls || (e.activeListUrls = [n])
                    })).addCase(On.c, (function(e, t) {
                        var n = t.payload;
                        e.activeListUrls && e.activeListUrls.includes(n) && (e.activeListUrls = e.activeListUrls.filter((function(e) { return e !== n })))
                    })).addCase(On.a, (function(e, t) {
                        var n, a = t.payload;
                        if (!(null === (n = e.byUrl[a]) || void 0 === n ? void 0 : n.pendingUpdate)) throw new Error("accept list update called without pending update");
                        e.byUrl[a] = Object(T.a)(Object(T.a)({}, e.byUrl[a]), {}, { pendingUpdate: null, current: e.byUrl[a].pendingUpdate })
                    })).addCase(rn, (function(e) {
                        if (e.lastInitializedDefaultListOfLists) {
                            if (e.lastInitializedDefaultListOfLists) {
                                var t = e.lastInitializedDefaultListOfLists.reduce((function(e, t) { return e.add(t) }), new Set),
                                    n = wn.b.reduce((function(e, t) { return e.add(t) }), new Set);
                                wn.b.forEach((function(n) { t.has(n) || (e.byUrl[n] = Bn) })), e.lastInitializedDefaultListOfLists.forEach((function(t) { n.has(t) || delete e.byUrl[t] }))
                            }
                        } else e.byUrl = An.byUrl, e.activeListUrls = An.activeListUrls;
                        e.lastInitializedDefaultListOfLists = wn.b, e.activeListUrls || (e.activeListUrls = wn.a, wn.a.map((function(t) { return e.byUrl[t] || (e.byUrl[t] = Bn), !0 })))
                    }))
                }));
            ! function(e) { e.LIQUIDITY_PERCENT = "LIQUIDITY_PERCENT", e.LIQUIDITY = "LIQUIDITY", e.CURRENCY_A = "CURRENCY_A", e.CURRENCY_B = "CURRENCY_B" }(ln || (ln = {}));
            var En = Object(p.b)("burn/typeInputBurn"),
                Pn = { independentField: ln.LIQUIDITY_PERCENT, typedValue: "0" },
                Sn = Object(p.d)(Pn, (function(e) {
                    return e.addCase(En, (function(e, t) {
                        var n = t.payload,
                            a = n.field,
                            r = n.typedValue;
                        return Object(T.a)(Object(T.a)({}, e), {}, { independentField: a, typedValue: r })
                    }))
                })),
                In = n(79),
                Fn = Object(p.d)({ callResults: {} }, (function(e) {
                    return e.addCase(In.a, (function(e, t) {
                        var n, a = t.payload,
                            r = a.calls,
                            i = a.chainId,
                            o = a.options,
                            s = (o = void 0 === o ? {} : o).blocksPerFetch,
                            c = void 0 === s ? 1 : s,
                            u = e.callListeners ? e.callListeners : e.callListeners = {};
                        u[i] = null !== (n = u[i]) && void 0 !== n ? n : {}, r.forEach((function(e) {
                            var t, n, a = Object(In.f)(e);
                            u[i][a] = null !== (t = u[i][a]) && void 0 !== t ? t : {}, u[i][a][c] = (null !== (n = u[i][a][c]) && void 0 !== n ? n : 0) + 1
                        }))
                    })).addCase(In.e, (function(e, t) {
                        var n = t.payload,
                            a = n.chainId,
                            r = n.calls,
                            i = n.options,
                            o = (i = void 0 === i ? {} : i).blocksPerFetch,
                            s = void 0 === o ? 1 : o,
                            c = e.callListeners ? e.callListeners : e.callListeners = {};
                        c[a] && r.forEach((function(e) {
                            var t = Object(In.f)(e);
                            c[a][t] && c[a][t][s] && (1 === c[a][t][s] ? delete c[a][t][s] : c[a][t][s]--)
                        }))
                    })).addCase(In.c, (function(e, t) {
                        var n, a = t.payload,
                            r = a.chainId,
                            i = a.fetchingBlockNumber,
                            o = a.calls;
                        e.callResults[r] = null !== (n = e.callResults[r]) && void 0 !== n ? n : {}, o.forEach((function(t) {
                            var n = Object(In.f)(t),
                                a = e.callResults[r][n];
                            if (a) {
                                var o;
                                if ((null !== (o = a.fetchingBlockNumber) && void 0 !== o ? o : 0) >= i) return;
                                e.callResults[r][n].fetchingBlockNumber = i
                            } else e.callResults[r][n] = { fetchingBlockNumber: i }
                        }))
                    })).addCase(In.b, (function(e, t) {
                        var n, a = t.payload,
                            r = a.fetchingBlockNumber,
                            i = a.chainId,
                            o = a.calls;
                        e.callResults[i] = null !== (n = e.callResults[i]) && void 0 !== n ? n : {}, o.forEach((function(t) {
                            var n = Object(In.f)(t),
                                a = e.callResults[i][n];
                            a && a.fetchingBlockNumber === r && (delete a.fetchingBlockNumber, a.data = null, a.blockNumber = r)
                        }))
                    })).addCase(In.g, (function(e, t) {
                        var n, a = t.payload,
                            r = a.chainId,
                            i = a.results,
                            o = a.blockNumber;
                        e.callResults[r] = null !== (n = e.callResults[r]) && void 0 !== n ? n : {}, Object.keys(i).forEach((function(t) {
                            var n, a = e.callResults[r][t];
                            (null !== (n = null === a || void 0 === a ? void 0 : a.blockNumber) && void 0 !== n ? n : 0) > o || (e.callResults[r][t] = { data: i[t], blockNumber: o })
                        }))
                    }))
                })),
                Dn = ["user", "transactions", "lists", "profile", "collectibles"],
                Nn = Object(p.a)({ devTools: !1, reducer: { achievements: Je.b, block: $e.a, farms: m.a, pools: H, predictions: Ke, profile: Ge.b, teams: Xe.a, collectibles: Qe.a, voting: dt, lottery: Vt, info: an, user: bn, transactions: fn, swap: Tn, mint: xn, burn: Sn, multicall: Fn, lists: Cn }, middleware: [].concat(Object(l.a)(Object(p.f)({ thunk: !0 })), [Object(b.save)({ states: Dn })]), preloadedState: Object(b.load)({ states: Dn }) });
            Nn.dispatch(rn());
            var Ln = function() { return Object(y.b)() };
            t.a = Nn
        },
        99: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return o }));
            var a = n(61),
                r = n(173),
                i = Object(r.a)(),
                o = new a.a.providers.JsonRpcProvider(i)
        }
    },
    [
        [709, 1, 2]
    ]
]);
//# sourceMappingURL=main.c1650ee8.chunk.js.map
