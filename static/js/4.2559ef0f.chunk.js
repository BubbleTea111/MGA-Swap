(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [4], { 1048: function(e, t, n) { "use strict";
            n.r(t); var r, c, i, a, s, o, l = n(0),
                b = n(70),
                u = n(80),
                j = n(220),
                d = n(390),
                p = n(166),
                O = n(28),
                x = n(98),
                m = n(336),
                f = n(13),
                h = n(7),
                v = n(2),
                g = n(21),
                C = n(3),
                y = n.n(C),
                w = n(12),
                k = n(11),
                S = n(6),
                A = n(40),
                E = n(126),
                I = Object(E.parseUnits)("1"),
                T = Object(E.parseUnits)("0.5"),
                P = ["sleepy", "dollop", "twinkle", "churro", "sunny"],
                D = n(1),
                N = I.add(T),
                R = N.mul(5),
                H = { isInitialized: !1, currentStep: 0, teamId: null, selectedNft: { nftAddress: null, tokenId: null }, userName: "", minimumCakeRequired: N, allowance: R },
                F = function(e, t) { switch (t.type) {
                        case "initialize":
                            return Object(S.a)(Object(S.a)({}, e), {}, { isInitialized: !0, currentStep: t.step });
                        case "next_step":
                            return Object(S.a)(Object(S.a)({}, e), {}, { currentStep: e.currentStep + 1 });
                        case "set_team":
                            return Object(S.a)(Object(S.a)({}, e), {}, { teamId: t.teamId });
                        case "set_selected_nft":
                            return Object(S.a)(Object(S.a)({}, e), {}, { selectedNft: { tokenId: t.tokenId, nftAddress: t.nftAddress } });
                        case "set_username":
                            return Object(S.a)(Object(S.a)({}, e), {}, { userName: t.userName });
                        default:
                            return e } },
                z = Object(l.createContext)(null),
                J = function(e) { var t = e.children,
                        n = Object(l.useReducer)(F, H),
                        r = Object(k.a)(n, 2),
                        c = r[0],
                        i = r[1],
                        a = Object(u.c)().account;
                    Object(l.useEffect)((function() { var e = !0; return a && function() { var t = Object(w.a)(y.a.mark((function t() { var n, r; return y.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return n = Object(A.b)(), t.next = 3, n.canMint(a);
                                            case 3:
                                                r = t.sent, i({ type: "initialize", step: r ? 0 : 1 }), e && i({ type: "initialize", step: r ? 0 : 1 });
                                            case 6:
                                            case "end":
                                                return t.stop() } }), t) }))); return function() { return t.apply(this, arguments) } }()(),
                            function() { e = !1 } }), [a, i]); var s = Object(l.useMemo)((function() { return { nextStep: function() { return i({ type: "next_step" }) }, setTeamId: function(e) { return i({ type: "set_team", teamId: e }) }, setSelectedNft: function(e, t) { return i({ type: "set_selected_nft", tokenId: e, nftAddress: t }) }, setUserName: function(e) { return i({ type: "set_username", userName: e }) } } }), [i]); return Object(D.jsx)(z.Provider, { value: Object(S.a)(Object(S.a)({}, c), {}, { actions: s }), children: t }) },
                _ = h.e.div(r || (r = Object(f.a)(["\n  border-bottom: 2px solid ", ";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])), (function(e) { return e.theme.colors.textSubtle })),
                L = ["Get Starter Collectible", "Set Profile Picture", "Join Team", "Set Name"],
                M = function() { var e = Object(g.b)().t,
                        t = Object(l.useContext)(z).currentStep; return Object(D.jsxs)(_, { children: [Object(D.jsx)(v.J, { as: "h1", scale: "xxl", color: "secondary", mb: "8px", id: "profile-setup-title", children: e("Profile Setup") }), Object(D.jsx)(v.J, { as: "h2", scale: "lg", mb: "8px", children: e("Show off your stats and collectibles with your unique profile") }), Object(D.jsx)(v.pb, { color: "textSubtle", mb: "24px", children: e("Total cost: 1.5 CAKE") }), Object(D.jsx)(v.k, { children: L.map((function(n, r) { return Object(D.jsx)(v.pb, { color: r <= t ? "text" : "textDisabled", children: e(n) }, n) })) })] }) },
                W = n(171),
                q = function() { var e = Object(g.b)().t; return Object(D.jsxs)("div", { children: [Object(D.jsx)(v.J, { scale: "xl", mb: "8px", children: e("Oops!") }), Object(D.jsx)(v.pb, { as: "p", mb: "16px", children: e("Please connect your wallet to continue") }), Object(D.jsx)(W.a, {})] }) },
                U = n(117),
                Q = n(165),
                V = { approvalState: "idle", confirmState: "idle" },
                Y = function(e, t) { switch (t.type) {
                        case "requires_approval":
                            return Object(S.a)(Object(S.a)({}, e), {}, { approvalState: "success" });
                        case "approve_sending":
                            return Object(S.a)(Object(S.a)({}, e), {}, { approvalState: "loading" });
                        case "approve_receipt":
                            return Object(S.a)(Object(S.a)({}, e), {}, { approvalState: "success" });
                        case "approve_error":
                            return Object(S.a)(Object(S.a)({}, e), {}, { approvalState: "fail" });
                        case "confirm_sending":
                            return Object(S.a)(Object(S.a)({}, e), {}, { confirmState: "loading" });
                        case "confirm_receipt":
                            return Object(S.a)(Object(S.a)({}, e), {}, { confirmState: "success" });
                        case "confirm_error":
                            return Object(S.a)(Object(S.a)({}, e), {}, { confirmState: "fail" });
                        default:
                            return e } },
                G = function(e) { var t = e.onApprove,
                        n = e.onConfirm,
                        r = e.onRequiresApproval,
                        c = e.onSuccess,
                        i = void 0 === c ? U.noop : c,
                        a = e.onApproveSuccess,
                        s = void 0 === a ? U.noop : a,
                        o = Object(g.b)().t,
                        b = Object(u.c)().account,
                        j = Object(l.useReducer)(Y, V),
                        d = Object(k.a)(j, 2),
                        p = d[0],
                        O = d[1],
                        x = Object(l.useRef)(r),
                        m = Object(Q.a)().toastError; return Object(l.useEffect)((function() { b && x.current && x.current().then((function(e) { e && O({ type: "requires_approval" }) })) }), [b, x, O]), { isApproving: "loading" === p.approvalState, isApproved: "success" === p.approvalState, isConfirming: "loading" === p.confirmState, isConfirmed: "success" === p.confirmState, handleApprove: function() { var e = Object(w.a)(y.a.mark((function e() { var n, r; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, t();
                                        case 3:
                                            return n = e.sent, O({ type: "approve_sending" }), e.next = 7, n.wait();
                                        case 7:
                                            (r = e.sent).status && (O({ type: "approve_receipt" }), s({ state: p, receipt: r })), e.next = 15; break;
                                        case 11:
                                            e.prev = 11, e.t0 = e.catch(0), O({ type: "approve_error" }), m(o("Error"), o("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
                                        case 15:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [0, 11]
                                ]) }))); return function() { return e.apply(this, arguments) } }(), handleConfirm: function() { var e = Object(w.a)(y.a.mark((function e() { var t, r; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return O({ type: "confirm_sending" }), e.prev = 1, e.next = 4, n();
                                        case 4:
                                            return t = e.sent, e.next = 7, t.wait();
                                        case 7:
                                            (r = e.sent).status && (O({ type: "confirm_receipt" }), i({ state: p, receipt: r })), e.next = 15; break;
                                        case 11:
                                            e.prev = 11, e.t0 = e.catch(1), O({ type: "confirm_error" }), m(o("Error"), o("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
                                        case 15:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [1, 11]
                                ]) }))); return function() { return e.apply(this, arguments) } }() } },
                K = n(64),
                B = n(111),
                X = n(337),
                Z = n(219);! function(e) { e.ROW = "row", e.SEQUENTIAL = "sequential" }(o || (o = {})); var $, ee, te, ne, re, ce, ie = h.e.div(c || (c = Object(f.a)(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n\n  ", " {\n    grid-template-columns: 1fr 24px 1fr;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                ae = Object(h.e)(v.m)(i || (i = Object(f.a)(["\n  width: 100%;\n\n  ", " {\n    min-width: 160px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                se = { width: "24px", color: "textDisabled" },
                oe = Object(h.e)(v.y).attrs(se)(a || (a = Object(f.a)(["\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                le = Object(h.e)(v.w).attrs(se)(s || (s = Object(f.a)(["\n  display: block;\n\n  ", " {\n    display: none;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                be = Object(D.jsx)(v.g, { spin: !0, color: "currentColor" }),
                ue = function(e) { var t = e.isApproveDisabled,
                        n = e.isApproving,
                        r = e.isConfirming,
                        c = e.isConfirmDisabled,
                        i = e.onApprove,
                        a = e.onConfirm,
                        s = e.buttonArrangement,
                        l = void 0 === s ? o.ROW : s,
                        b = e.confirmLabel,
                        u = e.confirmId,
                        j = Object(g.b)().t,
                        d = null !== b && void 0 !== b ? b : j("Confirm"); return l === o.ROW ? Object(D.jsxs)(ie, { children: [Object(D.jsx)(v.j, { children: Object(D.jsx)(ae, { disabled: t, onClick: i, endIcon: n ? be : void 0, isLoading: n, children: j(n ? "Enabling" : "Enable") }) }), Object(D.jsxs)(v.H, { justifyContent: "center", children: [Object(D.jsx)(oe, {}), Object(D.jsx)(le, {})] }), Object(D.jsx)(v.j, { children: Object(D.jsx)(ae, { id: u, onClick: a, disabled: c, isLoading: r, endIcon: r ? be : void 0, children: r ? j("Confirming") : d }) })] }) : Object(D.jsx)(D.Fragment, { children: t ? Object(D.jsx)(v.j, { children: Object(D.jsx)(ae, { id: u, onClick: a, disabled: c, isLoading: r, endIcon: r ? be : void 0, children: r ? j("Confirming") : d }) }) : Object(D.jsx)(v.j, { children: Object(D.jsx)(ae, { onClick: i, endIcon: n ? be : void 0, isLoading: n, children: j(n ? "Enabling" : "Enable") }) }) }) },
                je = n(57),
                de = ["name", "value", "isChecked", "image", "onChange", "disabled", "children"],
                pe = h.e.label($ || ($ = Object(f.a)(["\n  cursor: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  opacity: ", ";\n"])), (function(e) { return e.isDisabled ? "not-allowed" : "pointer" }), (function(e) { return e.isDisabled ? "0.6" : "1" })),
                Oe = h.e.div(ee || (ee = Object(f.a)(["\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  height: 80px;\n  padding: 8px 16px;\n"]))),
                xe = h.e.div(te || (te = Object(f.a)(["\n  margin-left: 16px;\n"]))),
                me = h.e.div(ne || (ne = Object(f.a)(["\n  align-self: stretch;\n  background-image: url('", "');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 80px;\n"])), (function(e) { return e.src })),
                fe = function(e) { var t = e.name,
                        n = e.value,
                        r = e.isChecked,
                        c = void 0 !== r && r,
                        i = e.image,
                        a = e.onChange,
                        s = e.disabled,
                        o = e.children,
                        l = Object(je.a)(e, de); return Object(D.jsx)(v.p, Object(S.a)(Object(S.a)({ isSuccess: c, isDisabled: s, mb: "16px" }, l), {}, { children: Object(D.jsxs)(pe, { isDisabled: s, children: [Object(D.jsxs)(Oe, { children: [Object(D.jsx)(v.ib, { name: t, checked: c, value: n, onChange: function(e) { return a(e.target.value) }, disabled: s, style: { flex: "none" } }), Object(D.jsx)(xe, { children: o })] }), Object(D.jsx)(me, { src: i })] }) })) },
                he = function(e) { return Object(D.jsx)(v.m, Object(S.a)({ endIcon: Object(D.jsx)(v.e, { color: "currentColor" }) }, e)) },
                ve = function() { return Object(l.useContext)(z) },
                ge = X.a.pancake.filter((function(e) { return P.includes(e.identifier) })),
                Ce = function() { var e = Object(l.useState)(null),
                        t = Object(k.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = ve(),
                        i = c.actions,
                        a = c.minimumCakeRequired,
                        s = c.allowance,
                        o = Object(u.c)().account,
                        b = Object(K.c)(),
                        j = Object(K.a)(),
                        d = Object(g.b)().t,
                        p = Object(B.d)(),
                        O = p.balance,
                        x = p.fetchStatus === B.a.SUCCESS && O.gte(I),
                        m = Object(Z.a)().callWithGasPrice,
                        f = G({ onRequiresApproval: function() { var e = Object(w.a)(y.a.mark((function e() { var t; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, b.allowance(o, j.address);
                                            case 3:
                                                return t = e.sent, e.abrupt("return", t.gte(a));
                                            case 7:
                                                return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", !1);
                                            case 10:
                                            case "end":
                                                return e.stop() } }), e, null, [
                                        [0, 7]
                                    ]) }))); return function() { return e.apply(this, arguments) } }(), onApprove: function() { return m(b, "approve", [j.address, s.toString()]) }, onConfirm: function() { return m(j, "mintNFT", [n]) }, onSuccess: function() { return i.nextStep() } }),
                        h = f.isApproving,
                        C = f.isApproved,
                        S = f.isConfirmed,
                        A = f.isConfirming,
                        T = f.handleApprove,
                        P = f.handleConfirm; return Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(v.pb, { fontSize: "20px", color: "textSubtle", bold: !0, children: d("Step %num%", { num: 1 }) }), Object(D.jsx)(v.J, { as: "h3", scale: "xl", mb: "24px", children: d("Get Starter Collectible") }), Object(D.jsx)(v.pb, { as: "p", children: d("Every profile starts by making a \u201cstarter\u201d collectible (NFT).") }), Object(D.jsx)(v.pb, { as: "p", children: d("This starter will also become your first profile picture.") }), Object(D.jsx)(v.pb, { as: "p", mb: "24px", children: d("You can change your profile pic later if you get another approved Pancake Collectible.") }), Object(D.jsx)(v.p, { mb: "24px", children: Object(D.jsxs)(v.q, { children: [Object(D.jsx)(v.J, { as: "h4", scale: "lg", mb: "8px", children: d("Choose your Starter!") }), Object(D.jsx)(v.pb, { as: "p", color: "textSubtle", children: d("Choose wisely: you can only ever make one starter collectible!") }), Object(D.jsx)(v.pb, { as: "p", mb: "24px", color: "textSubtle", children: d("Cost: %num% CAKE", { num: Object(E.formatUnits)(I) }) }), ge.map((function(e) { return Object(D.jsx)(fe, { name: "mintStarter", value: e.id, image: "/images/nfts/".concat(e.images.md), isChecked: n === e.id, onChange: function(e) { return r(Number(e)) }, disabled: h || A || S || !x, children: Object(D.jsx)(v.pb, { bold: !0, children: e.name }) }, e.identifier) })), !x && Object(D.jsx)(v.pb, { color: "failure", mb: "16px", children: d("A minimum of %num% CAKE is required", { num: Object(E.formatUnits)(I) }) }), Object(D.jsx)(ue, { isApproveDisabled: null === n || S || A || C, isApproving: h, isConfirmDisabled: !C || S || !x, isConfirming: A, onApprove: T, onConfirm: P })] }) }), Object(D.jsx)(he, { onClick: i.nextStep, disabled: !S, children: d("Next Step") })] }) },
                ye = n(85),
                we = n(197),
                ke = n(35),
                Se = n(371),
                Ae = function() { var e = Object(u.c)().account,
                        t = Object(x.b)(),
                        n = Object(O.c)((function(e) { return e.collectibles })),
                        r = n.isInitialized,
                        c = n.isLoading,
                        i = n.data,
                        a = Object.keys(i); return Object(l.useEffect)((function() {!r && e && t(Object(Se.b)(e)) }), [r, e, t]), { isInitialized: r, isLoading: c, tokenIds: i, nftsInWallet: X.a.pancake.filter((function(e) { return a.includes(e.identifier) })) } },
                Ee = Object(h.e)(ye.a)(re || (re = Object(f.a)(["\n  color: ", ";\n"])), (function(e) { return e.theme.colors.primary })),
                Ie = h.e.div(ce || (ce = Object(f.a)(["\n  margin-bottom: 24px;\n"]))),
                Te = function() { var e = Object(u.c)().library,
                        t = Object(l.useState)(!1),
                        n = Object(k.a)(t, 2),
                        r = n[0],
                        c = n[1],
                        i = Object(l.useState)(!1),
                        a = Object(k.a)(i, 2),
                        s = a[0],
                        o = a[1],
                        b = Object(l.useContext)(z),
                        j = b.selectedNft,
                        d = b.actions,
                        p = Object(g.b)().t,
                        O = Ae(),
                        x = O.isLoading,
                        m = O.nftsInWallet,
                        f = O.tokenIds,
                        h = Object(Q.a)().toastError,
                        C = Object(Z.a)().callWithGasPrice,
                        S = function() { var t = Object(w.a)(y.a.mark((function t() { var n, r; return y.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return n = Object(A.l)(j.nftAddress, e.getSigner()), t.next = 3, C(n, "approve", [Object(ke.o)(), j.tokenId]);
                                        case 3:
                                            return r = t.sent, o(!0), t.next = 7, r.wait();
                                        case 7:
                                            t.sent.status ? (o(!1), c(!0)) : (h(p("Error"), p("Please try again. Confirm the transaction and make sure you are paying enough gas!")), o(!1));
                                        case 9:
                                        case "end":
                                            return t.stop() } }), t) }))); return function() { return t.apply(this, arguments) } }(); return x || 0 !== m.length ? Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(v.pb, { fontSize: "20px", color: "textSubtle", bold: !0, children: p("Step %num%", { num: 2 }) }), Object(D.jsx)(v.J, { as: "h3", scale: "xl", mb: "24px", children: p("Set Profile Picture") }), Object(D.jsx)(v.p, { mb: "24px", children: Object(D.jsxs)(v.q, { children: [Object(D.jsx)(v.J, { as: "h4", scale: "lg", mb: "8px", children: p("Choose collectible") }), Object(D.jsx)(v.pb, { as: "p", color: "textSubtle", children: p("Choose a profile picture from the eligible collectibles (NFT) in your wallet, shown below.") }), Object(D.jsxs)(v.pb, { as: "p", color: "textSubtle", mb: "24px", children: [p("Only approved Pancake Collectibles can be used."), Object(D.jsx)(Ee, { to: "/collectibles", style: { marginLeft: "4px" }, children: p("See the list >") })] }), Object(D.jsx)(Ie, { children: x ? Object(D.jsx)(v.lb, { height: "80px", mb: "16px" }) : m.map((function(e) { var t = Object(k.a)(f[e.identifier], 1)[0],
                                            n = Object(we.a)(); return Object(D.jsx)(fe, { name: "profilePicture", value: t, image: "/images/nfts/".concat(e.images.md), isChecked: t === j.tokenId, onChange: function(e) { return d.setSelectedNft(parseInt(e, 10), n) }, children: Object(D.jsx)(v.pb, { bold: !0, children: e.name }) }, e.identifier) })) }), Object(D.jsx)(v.J, { as: "h4", scale: "lg", mb: "8px", children: p("Allow collectible to be locked") }), Object(D.jsx)(v.pb, { as: "p", color: "textSubtle", mb: "16px", children: p("The collectible you've chosen will be locked in a smart contract while it\u2019s being used as your profile picture. Don't worry - you'll be able to get it back at any time.") }), Object(D.jsx)(v.m, { isLoading: s, disabled: r || s || null === j.tokenId, onClick: S, endIcon: s ? Object(D.jsx)(v.g, { spin: !0, color: "currentColor" }) : void 0, id: "approveStarterCollectible", children: p("Enable") })] }) }), Object(D.jsx)(he, { onClick: d.nextStep, disabled: null === j.tokenId || !r || s, children: p("Next Step") })] }) : Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(v.J, { scale: "xl", mb: "24px", children: p("Oops!") }), Object(D.jsx)(v.pb, { bold: !0, fontSize: "20px", mb: "24px", children: p("We couldn\u2019t find any Pancake Collectibles in your wallet.") }), Object(D.jsx)(v.pb, { as: "p", children: p("You need a Pancake Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\u2019ll need to get it back or acquire a new one somehow. You can\u2019t make a new starter with this wallet address.") })] }) },
                Pe = n(855),
                De = n.n(Pe),
                Ne = n(370),
                Re = function() { var e = ve(),
                        t = e.teamId,
                        n = e.actions,
                        r = Object(g.b)().t,
                        c = function() { var e = Object(O.c)((function(e) { return e.teams })),
                                t = e.isInitialized,
                                n = e.isLoading,
                                r = e.data,
                                c = Object(x.b)(); return Object(l.useEffect)((function() { c(Object(Ne.c)()) }), [c]), { teams: r, isInitialized: t, isLoading: n } }().teams,
                        i = function(e) { return n.setTeamId(parseInt(e, 10)) },
                        a = Object(l.useMemo)((function() { return De()(Object.values(c)) }), [c]); return Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(v.pb, { fontSize: "20px", color: "textSubtle", bold: !0, children: r("Step %num%", { num: 3 }) }), Object(D.jsx)(v.J, { as: "h3", scale: "xl", mb: "24px", children: r("Join a Team") }), Object(D.jsx)(v.pb, { as: "p", mb: "24px", children: r("It won\u2019t be possible to undo the choice you make for the foreseeable future!") }), Object(D.jsx)(v.p, { mb: "24px", children: Object(D.jsxs)(v.q, { children: [Object(D.jsx)(v.J, { as: "h4", scale: "lg", mb: "8px", children: r("Join a Team") }), Object(D.jsx)(v.pb, { as: "p", color: "textSubtle", mb: "24px", children: r("There\u2019s currently no big difference between teams, and no benefit of joining one team over another for now. So pick whichever one you like!") }), a && a.map((function(e) { return Object(D.jsxs)(fe, { name: "teams-selection", value: e.id, isChecked: t === e.id, image: "/images/teams/".concat(e.images.md), onChange: i, disabled: !e.isJoinable, children: [Object(D.jsx)(v.pb, { bold: !0, children: e.name }), Object(D.jsxs)(v.H, { children: [Object(D.jsx)(v.C, { mr: "8px" }), Object(D.jsx)(v.pb, { children: e.users.toLocaleString() })] })] }, e.name) }))] }) }), Object(D.jsx)(he, { onClick: n.nextStep, disabled: null === t, children: r("Next Step") })] }) },
                He = n(19),
                Fe = n(14);

            function ze(e, t) { Object(Fe.a)(2, arguments); var n = Object(He.default)(e),
                    r = Object(He.default)(t),
                    c = n.getTime() - r.getTime(); return c < 0 ? -1 : c > 0 ? 1 : c } var Je = n(439),
                _e = n(440),
                Le = n(441);

            function Me(e) { Object(Fe.a)(1, arguments); var t = Object(He.default)(e); return Object(_e.default)(t).getTime() === Object(Le.default)(t).getTime() }

            function We(e, t) { Object(Fe.a)(2, arguments); var n, r = Object(He.default)(e),
                    c = Object(He.default)(t),
                    i = ze(r, c),
                    a = Math.abs(Object(Je.default)(r, c)); if (a < 1) n = 0;
                else { 1 === r.getMonth() && r.getDate() > 27 && r.setDate(30), r.setMonth(r.getMonth() - i * a); var s = ze(r, c) === -i;
                    Me(Object(He.default)(e)) && 1 === a && 1 === ze(e, c) && (s = !1), n = i * (a - Number(s)) } return 0 === n ? 0 : n }

            function qe(e, t) { Object(Fe.a)(2, arguments); var n = Object(He.default)(e),
                    r = Object(He.default)(t); return n.getTime() - r.getTime() }

            function Ue(e, t) { Object(Fe.a)(2, arguments); var n = qe(e, t) / 1e3; return n > 0 ? Math.floor(n) : Math.ceil(n) } var Qe = n(239),
                Ve = n(387);

            function Ye(e) { return Object(Ve.a)({}, e) } var Ge = n(119),
                Ke = 1440,
                Be = 43200;

            function Xe(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Object(Fe.a)(2, arguments); var r = n.locale || Qe.a; if (!r.formatDistance) throw new RangeError("locale must contain formatDistance property"); var c = ze(e, t); if (isNaN(c)) throw new RangeError("Invalid time value"); var i, a, s = Ye(n);
                s.addSuffix = Boolean(n.addSuffix), s.comparison = c, c > 0 ? (i = Object(He.default)(t), a = Object(He.default)(e)) : (i = Object(He.default)(e), a = Object(He.default)(t)); var o, l = Ue(a, i),
                    b = (Object(Ge.a)(a) - Object(Ge.a)(i)) / 1e3,
                    u = Math.round((l - b) / 60); if (u < 2) return n.includeSeconds ? l < 5 ? r.formatDistance("lessThanXSeconds", 5, s) : l < 10 ? r.formatDistance("lessThanXSeconds", 10, s) : l < 20 ? r.formatDistance("lessThanXSeconds", 20, s) : l < 40 ? r.formatDistance("halfAMinute", null, s) : l < 60 ? r.formatDistance("lessThanXMinutes", 1, s) : r.formatDistance("xMinutes", 1, s) : 0 === u ? r.formatDistance("lessThanXMinutes", 1, s) : r.formatDistance("xMinutes", u, s); if (u < 45) return r.formatDistance("xMinutes", u, s); if (u < 90) return r.formatDistance("aboutXHours", 1, s); if (u < Ke) { var j = Math.round(u / 60); return r.formatDistance("aboutXHours", j, s) } if (u < 2520) return r.formatDistance("xDays", 1, s); if (u < Be) { var d = Math.round(u / Ke); return r.formatDistance("xDays", d, s) } if (u < 86400) return o = Math.round(u / Be), r.formatDistance("aboutXMonths", o, s); if ((o = We(a, i)) < 12) { var p = Math.round(u / Be); return r.formatDistance("xMonths", p, s) } var O = o % 12,
                    x = Math.floor(o / 12); return O < 3 ? r.formatDistance("aboutXYears", x, s) : O < 9 ? r.formatDistance("overXYears", x, s) : r.formatDistance("almostXYears", x + 1, s) } var Ze, $e, et, tt, nt = n(689),
                rt = n(84),
                ct = n(177),
                it = n(20),
                at = n(306),
                st = n.n(at),
                ot = n(138),
                lt = n(156),
                bt = function(e) { var t = e.account,
                        n = e.teamId,
                        r = e.selectedNft,
                        c = e.minimumCakeRequired,
                        i = e.allowance,
                        a = e.onDismiss,
                        s = Object(g.b)().t,
                        o = Object(K.j)(),
                        l = Object(x.b)(),
                        b = Object(Q.a)().toastSuccess,
                        u = Object(K.c)(),
                        j = Object(Z.a)().callWithGasPrice,
                        d = G({ onRequiresApproval: function() { var e = Object(w.a)(y.a.mark((function e() { var n; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, u.allowance(t, o.address);
                                            case 3:
                                                return n = e.sent, e.abrupt("return", n.gte(c));
                                            case 7:
                                                return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", !1);
                                            case 10:
                                            case "end":
                                                return e.stop() } }), e, null, [
                                        [0, 7]
                                    ]) }))); return function() { return e.apply(this, arguments) } }(), onApprove: function() { return j(u, "approve", [o.address, i.toJSON()]) }, onConfirm: function() { return j(o, "createProfile", [n, r.nftAddress, r.tokenId]) }, onSuccess: function() { var e = Object(w.a)(y.a.mark((function e(n) { var r; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = n.receipt, e.next = 3, l(Object(ot.c)(t));
                                            case 3:
                                                a(), b(s("Profile created!"), Object(D.jsx)(lt.b, { txHash: r.transactionHash }));
                                            case 5:
                                            case "end":
                                                return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }() }),
                        p = d.isApproving,
                        O = d.isApproved,
                        m = d.isConfirmed,
                        f = d.isConfirming,
                        h = d.handleApprove,
                        C = d.handleConfirm; return Object(D.jsxs)(v.U, { title: s("Complete Profile"), onDismiss: a, children: [Object(D.jsx)(v.pb, { color: "textSubtle", mb: "8px", children: s("Submitting NFT to contract and confirming User Name and Team.") }), Object(D.jsxs)(v.H, { justifyContent: "space-between", mb: "16px", children: [Object(D.jsx)(v.pb, { children: s("Cost") }), Object(D.jsx)(v.pb, { children: s("%num% CAKE", { num: Object(E.formatUnits)(T) }) })] }), Object(D.jsx)(ue, { isApproveDisabled: m || f || O, isApproving: p, isConfirmDisabled: !O || m, isConfirming: f, onApprove: h, onConfirm: C })] }) };! function(e) { e.IDLE = "idle", e.CREATED = "created", e.NEW = "new" }(tt || (tt = {})); var ut, jt, dt = h.e.div(Ze || (Ze = Object(f.a)(["\n  position: relative;\n  max-width: 240px;\n"]))),
                pt = Object(h.e)(v.N)($e || ($e = Object(f.a)(["\n  padding-right: 40px;\n"]))),
                Ot = Object(h.e)(v.H)(et || (et = Object(f.a)(["\n  align-items: center;\n  height: 24px;\n  justify-content: center;\n  margin-top: -12px;\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  width: 24px;\n"]))),
                xt = function() { var e = Object(l.useState)(!1),
                        t = Object(k.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = ve(),
                        i = c.teamId,
                        a = c.selectedNft,
                        s = c.userName,
                        o = c.actions,
                        b = c.minimumCakeRequired,
                        j = c.allowance,
                        d = Object(g.b)().t,
                        p = Object(u.c)().account,
                        O = Object(Q.a)().toastError,
                        x = Object(it.a)().library,
                        m = Object(l.useState)(tt.IDLE),
                        f = Object(k.a)(m, 2),
                        h = f[0],
                        C = f[1],
                        S = Object(l.useState)(!1),
                        A = Object(k.a)(S, 2),
                        I = A[0],
                        P = A[1],
                        N = Object(l.useState)(!1),
                        R = Object(k.a)(N, 2),
                        H = R[0],
                        F = R[1],
                        z = Object(l.useState)(""),
                        J = Object(k.a)(z, 2),
                        _ = J[0],
                        L = J[1],
                        M = Object(B.d)(),
                        W = M.balance,
                        q = M.fetchStatus === B.a.SUCCESS && W.gte(T),
                        U = Object(v.Cb)(Object(D.jsx)(bt, { userName: s, selectedNft: a, account: p, teamId: i, minimumCakeRequired: b, allowance: j }), !1),
                        V = Object(k.a)(U, 1)[0],
                        Y = h === tt.CREATED,
                        G = st()(function() { var e = Object(w.a)(y.a.mark((function e(t) { var n, r, c; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, F(!0), e.next = 4, fetch("".concat(rt.a, "/api/users/valid/").concat(t));
                                        case 4:
                                            if (!(n = e.sent).ok) { e.next = 10; break }
                                            P(!0), L(""), e.next = 15; break;
                                        case 10:
                                            return e.next = 12, n.json();
                                        case 12:
                                            c = e.sent, P(!1), L(null === c || void 0 === c || null === (r = c.error) || void 0 === r ? void 0 : r.message);
                                        case 15:
                                            return e.prev = 15, F(!1), e.finish(15);
                                        case 18:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [0, , 15, 18]
                                ]) }))); return function(t) { return e.apply(this, arguments) } }(), 200),
                        K = function() { var e = Object(w.a)(y.a.mark((function e() { var t, n, r, c; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, F(!0), e.next = 4, Object(ct.c)(x, p, s);
                                        case 4:
                                            return t = e.sent, e.next = 7, fetch("".concat(rt.a, "/api/users/register"), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ address: p, username: s, signature: t }) });
                                        case 7:
                                            if (!(n = e.sent).ok) { e.next = 12; break }
                                            C(tt.CREATED), e.next = 16; break;
                                        case 12:
                                            return e.next = 14, n.json();
                                        case 14:
                                            c = e.sent, O(d("Error"), null === c || void 0 === c || null === (r = c.error) || void 0 === r ? void 0 : r.message);
                                        case 16:
                                            e.next = 21; break;
                                        case 18:
                                            e.prev = 18, e.t0 = e.catch(0), O((null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message) ? e.t0.message : JSON.stringify(e.t0));
                                        case 21:
                                            return e.prev = 21, F(!1), e.finish(21);
                                        case 24:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [0, 18, 21, 24]
                                ]) }))); return function() { return e.apply(this, arguments) } }(); return Object(l.useEffect)((function() { p && function() { var e = Object(w.a)(y.a.mark((function e() { var t, n, r; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, fetch("".concat(rt.a, "/api/users/").concat(p));
                                        case 3:
                                            return t = e.sent, e.next = 6, t.json();
                                        case 6:
                                            n = e.sent, t.ok ? (r = Xe(Object(nt.default)(n.created_at), new Date), L(d("Created %dateCreated% ago", { dateCreated: r })), o.setUserName(n.username), C(tt.CREATED), P(!0)) : C(tt.NEW), e.next = 13; break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(0), O(d("Error"), d("Unable to verify username"));
                                        case 13:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [0, 10]
                                ]) }))); return function() { return e.apply(this, arguments) } }()() }), [p, C, P, L, o, O, d]), Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(v.pb, { fontSize: "20px", color: "textSubtle", bold: !0, children: d("Step %num%", { num: 4 }) }), Object(D.jsx)(v.J, { as: "h3", scale: "xl", mb: "24px", children: d("Set Your Name") }), Object(D.jsx)(v.pb, { as: "p", mb: "24px", children: d("This name will be shown in team leaderboards and search results as long as your profile is active.") }), Object(D.jsx)(v.p, { mb: "24px", children: Object(D.jsxs)(v.q, { children: [Object(D.jsx)(v.J, { as: "h4", scale: "lg", mb: "8px", children: d("Set Your Name") }), Object(D.jsx)(v.pb, { as: "p", color: "textSubtle", mb: "24px", children: d("Your name must be at least 3 and at most 15 standard letters and numbers long. You can\u2019t change this once you click Confirm.") }), h === tt.IDLE ? Object(D.jsx)(v.lb, { height: "40px", width: "240px" }) : Object(D.jsxs)(dt, { children: [Object(D.jsx)(pt, { onChange: function(e) { var t = e.target.value;
                                            o.setUserName(t), G(t) }, isWarning: s && !I, isSuccess: s && I, minLength: 3, maxLength: 15, disabled: Y, placeholder: d("Enter your name..."), value: s }), Object(D.jsxs)(Ot, { children: [H && Object(D.jsx)(v.g, { spin: !0 }), !H && I && s && Object(D.jsx)(v.v, { color: "success" }), !H && !I && s && Object(D.jsx)(v.wb, { color: "failure" })] })] }), Object(D.jsx)(v.pb, { color: "textSubtle", fontSize: "14px", py: "4px", mb: "16px", style: { minHeight: "30px" }, children: _ }), Object(D.jsx)(v.pb, { as: "p", color: "failure", mb: "8px", children: d("Only reuse a name from other social media if you're OK with people viewing your wallet. You can't change your name once you click Confirm.") }), Object(D.jsx)("label", { htmlFor: "checkbox", style: { display: "block", cursor: "pointer", marginBottom: "24px" }, children: Object(D.jsxs)(v.H, { alignItems: "center", children: [Object(D.jsx)("div", { style: { flex: "none" }, children: Object(D.jsx)(v.t, { id: "checkbox", scale: "sm", checked: n, onChange: function() { return r(!n) } }) }), Object(D.jsx)(v.pb, { ml: "8px", children: d("I understand that people can view my wallet if they know my username") })] }) }), Object(D.jsx)(v.m, { onClick: K, disabled: !I || Y || H || !n, children: d("Confirm") })] }) }), Object(D.jsx)(v.m, { onClick: V, disabled: !I || !Y, id: "completeProfileCreation", children: d("Complete Profile") }), !q && Object(D.jsx)(v.pb, { color: "failure", mt: "16px", children: d("A minimum of %num% CAKE is required", { num: Object(E.formatUnits)(T) }) })] }) },
                mt = function() { var e = Object(g.b)().t,
                        t = Object(l.useContext)(z),
                        n = t.isInitialized,
                        r = t.currentStep; return Object(u.c)().account ? n ? 0 === r ? Object(D.jsx)(Ce, {}) : 1 === r ? Object(D.jsx)(Te, {}) : 2 === r ? Object(D.jsx)(Re, {}) : 3 === r ? Object(D.jsx)(xt, {}) : null : Object(D.jsx)("div", { children: e("Loading...") }) : Object(D.jsx)(q, {}) },
                ft = function() { return Object(D.jsx)(J, { children: Object(D.jsxs)(j.b, { children: [Object(D.jsx)(M, {}), Object(D.jsx)(mt, {})] }) }) },
                ht = function() { var e = Object(l.useState)(!1),
                        t = Object(k.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = Object(l.useState)(1),
                        i = Object(k.a)(c, 2),
                        a = i[0],
                        s = i[1],
                        o = Object(u.c)().account,
                        b = Object(l.useCallback)((function() { s((function(e) { return e + 1 })) }), [s]); return Object(l.useEffect)((function() { o && function() { var e = Object(w.a)(y.a.mark((function e() { var t, n; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = Object(A.j)(), e.prev = 1, e.next = 4, t.canClaim(o);
                                        case 4:
                                            n = e.sent, r(n), e.next = 11; break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(1), console.error(e.t0);
                                        case 11:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [1, 8]
                                ]) }))); return function() { return e.apply(this, arguments) } }()() }), [o, a, r]), { canClaim: n, checkClaimStatus: b } },
                vt = function(e) { var t = e.onSuccess,
                        n = e.onDismiss,
                        r = Object(l.useState)(!1),
                        c = Object(k.a)(r, 2),
                        i = c[0],
                        a = c[1],
                        s = Object(g.b)().t,
                        o = ht().canClaim,
                        b = Object(K.d)(),
                        u = Object(Q.a)(),
                        j = u.toastSuccess,
                        d = u.toastError,
                        p = Object(Z.a)().callWithGasPrice,
                        O = function() { var e = Object(w.a)(y.a.mark((function e() { var r, c; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, p(b, "getCakeBack");
                                        case 2:
                                            return r = e.sent, a(!0), e.next = 6, r.wait();
                                        case 6:
                                            (c = e.sent).status ? (j(s("Success!"), Object(D.jsx)(lt.b, { txHash: c.transactionHash })), t(), n()) : (a(!1), d(s("Error"), s("Please try again. Confirm the transaction and make sure you are paying enough gas!")));
                                        case 8:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return Object(D.jsx)(v.U, { title: s("Claim your Gift!"), onDismiss: n, children: Object(D.jsxs)("div", { style: { maxWidth: "640px" }, children: [Object(D.jsx)(v.pb, { as: "p", children: s("Thank you for being a day-one user of Pancake Profiles!") }), Object(D.jsx)(v.pb, { as: "p", mb: "8px", children: s("If you haven't already noticed, we made a mistake and the starter bunny you chose got mixed up and changed into another bunny. Oops!") }), Object(D.jsx)(v.pb, { as: "p", children: s("To make it up to you, we\u2019ll refund you the full 4 CAKE it cost to make your bunny.") }), Object(D.jsx)(v.pb, { as: "p", mb: "8px", children: s("We\u2019re also preparing an all-new collectible for you to claim (for free!) in the near future.") }), Object(D.jsx)(v.pb, { as: "p", mb: "24px", children: s("Once you claim the refund, you can make another account with another wallet, mint a new bunny, and send it to your main account via the NFT page.") }), Object(D.jsx)(v.m, { endIcon: i ? Object(D.jsx)(v.g, { spin: !0, color: "currentColor" }) : null, isLoading: i, onClick: O, disabled: !o, children: s("Claim Your CAKE") })] }) }) },
                gt = h.e.div(ut || (ut = Object(f.a)(["\n  border-bottom: 2px solid ", ";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])), (function(e) { return e.theme.colors.textSubtle })),
                Ct = n(17);! function(e) { e.START = "start", e.CHANGE = "change", e.REMOVE = "remove", e.APPROVE = "approve" }(jt || (jt = {})); var yt, wt, kt, St, At, Et, It, Tt, Pt, Dt, Nt, Rt, Ht, Ft, zt, Jt, _t = function(e, t) { switch (t.type) {
                        case "set_view":
                            return Object(S.a)(Object(S.a)({}, e), {}, { currentView: t.view, previousView: e.currentView });
                        case "go_previous":
                            return Object(S.a)(Object(S.a)({}, e), {}, { currentView: e.previousView, previousView: e.currentView });
                        default:
                            return e } },
                Lt = function() { var e = Object(l.useReducer)(_t, { currentView: jt.START, previousView: null }),
                        t = Object(k.a)(e, 2),
                        n = t[0],
                        r = t[1]; return Object(S.a)(Object(S.a)({}, n), {}, { goToStart: function() { return r({ type: "set_view", view: jt.START }) }, goToChange: function() { return r({ type: "set_view", view: jt.CHANGE }) }, goToRemove: function() { return r({ type: "set_view", view: jt.REMOVE }) }, goToApprove: function() { return r({ type: "set_view", view: jt.APPROVE }) }, goPrevious: function() { return r({ type: "go_previous" }) } }) },
                Mt = n(83),
                Wt = n(61),
                qt = n(51),
                Ut = n(236),
                Qt = function() { var e = Object(g.b)().t,
                        t = Object(l.useState)({ numberCakeToReactivate: Wt.a.BigNumber.from(0), numberCakeToRegister: Wt.a.BigNumber.from(0), numberCakeToUpdate: Wt.a.BigNumber.from(0) }),
                        n = Object(k.a)(t, 2),
                        r = n[0],
                        c = n[1],
                        i = Object(Q.a)().toastError; return Object(l.useEffect)((function() {
                        (function() { var t = Object(w.a)(y.a.mark((function t() { var n, r, a, s, o, l, b, u, j; return y.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, n = ["numberCakeToReactivate", "numberCakeToRegister", "numberCakeToUpdate"].map((function(e) { return { address: Object(ke.o)(), name: e } })), t.next = 4, Object(qt.b)(Ut, n);
                                        case 4:
                                            r = t.sent, a = Object(k.a)(r, 3), s = Object(k.a)(a[0], 1), o = s[0], l = Object(k.a)(a[1], 1), b = l[0], u = Object(k.a)(a[2], 1), j = u[0], c({ numberCakeToReactivate: o, numberCakeToRegister: b, numberCakeToUpdate: j }), t.next = 18; break;
                                        case 15:
                                            t.prev = 15, t.t0 = t.catch(0), i(e("Error"), e("Could not retrieve CAKE costs for profile"));
                                        case 18:
                                        case "end":
                                            return t.stop() } }), t, null, [
                                    [0, 15]
                                ]) }))); return function() { return t.apply(this, arguments) } })()() }), [c, i, e]), r },
                Vt = n(748),
                Yt = Object(h.e)(v.m).attrs({ variant: "secondary" })(yt || (yt = Object(f.a)(["\n  border-color: ", ";\n  color: ", ";\n  margin-bottom: 24px;\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    border-color: ", ";\n    opacity: 0.8;\n  }\n"])), (function(e) { return e.theme.colors.failure }), (function(e) { return e.theme.colors.failure }), (function(e) { return e.theme.colors.failure })),
                Gt = h.e.div(wt || (wt = Object(f.a)(["\n  height: 64px;\n  width: 64px;\n\n  ", " {\n    height: 128px;\n    width: 128px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Kt = function(e) { var t = e.goToApprove,
                        n = e.goToChange,
                        r = e.goToRemove,
                        c = e.onDismiss,
                        i = Object(l.useState)(null),
                        a = Object(k.a)(i, 2),
                        s = a[0],
                        o = a[1],
                        b = Object(p.b)().profile,
                        j = Qt(),
                        d = j.numberCakeToUpdate,
                        O = j.numberCakeToReactivate,
                        x = b.isActive ? d : O,
                        m = Object(B.d)(),
                        f = m.balance,
                        h = m.fetchStatus === B.a.SUCCESS && f.gte(x),
                        C = Object(g.b)().t,
                        S = Object(u.c)().account,
                        A = Object(K.c)(),
                        E = b.isActive ? d : O; return Object(l.useEffect)((function() { S && function() { var e = Object(w.a)(y.a.mark((function e() { var t; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, A.allowance(S, Object(ke.o)());
                                        case 2:
                                            t = e.sent, o(t.lt(E));
                                        case 4:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }()() }), [S, E, o, A]), b ? Object(D.jsxs)(v.H, { alignItems: "center", justifyContent: "center", flexDirection: "column", children: [Object(D.jsx)(Gt, { children: Object(D.jsx)(Vt.a, { profile: b }) }), Object(D.jsx)(v.H, { alignItems: "center", style: { height: "48px" }, justifyContent: "center", children: Object(D.jsx)(v.pb, { as: "p", color: "failure", children: !h && C("%minimum% CAKE required to change profile pic", { minimum: Object(Mt.a)(x) }) }) }), b.isActive ? Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(v.m, { width: "100%", mb: "8px", onClick: !0 === s ? t : n, disabled: !h || null === s, children: C("Change Profile Pic") }), Object(D.jsx)(Yt, { width: "100%", onClick: r, children: C("Remove Profile Pic") })] }) : Object(D.jsx)(v.m, { width: "100%", mb: "8px", onClick: !0 === s ? t : n, disabled: !h || null === s, children: C("Reactivate Profile") }), Object(D.jsx)(v.m, { variant: "text", width: "100%", onClick: c, children: C("Close Window") })] }) : null },
                Bt = function(e) { var t = e.onDismiss,
                        n = Object(l.useState)(!1),
                        r = Object(k.a)(n, 2),
                        c = r[0],
                        i = r[1],
                        a = Object(l.useState)(!1),
                        s = Object(k.a)(a, 2),
                        o = s[0],
                        b = s[1],
                        j = Object(p.b)().profile,
                        d = Qt().numberCakeToReactivate,
                        O = Object(g.b)().t,
                        m = Object(K.j)(),
                        f = Object(Z.a)().callWithGasPrice,
                        h = Object(u.c)().account,
                        C = Object(Q.a)(),
                        S = C.toastSuccess,
                        A = C.toastError,
                        E = Object(x.b)(),
                        I = function() { var e = Object(w.a)(y.a.mark((function e() { var n, r; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, f(m, "pauseProfile");
                                        case 2:
                                            return n = e.sent, b(!0), e.next = 6, n.wait();
                                        case 6:
                                            if (!(r = e.sent).status) { e.next = 14; break } return e.next = 10, E(Object(ot.c)(h));
                                        case 10:
                                            S(O("Profile Paused!"), Object(D.jsx)(lt.b, { txHash: r.transactionHash })), t(), e.next = 16; break;
                                        case 14:
                                            A(O("Error"), O("Please try again. Confirm the transaction and make sure you are paying enough gas!")), b(!1);
                                        case 16:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return j ? Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(v.pb, { as: "p", color: "failure", mb: "24px", children: O("This will suspend your profile and send your Collectible back to your wallet") }), Object(D.jsx)(v.pb, { as: "p", color: "textSubtle", mb: "24px", children: O("While your profile is suspended, you won't be able to earn points, but your achievements and points will stay associated with your profile") }), Object(D.jsx)(v.pb, { as: "p", color: "textSubtle", mb: "24px", children: O("Cost to reactivate in the future: %cost% CAKE", { cost: Object(Mt.a)(d) }) }), Object(D.jsx)("label", { htmlFor: "acknowledgement", style: { cursor: "pointer", display: "block", marginBottom: "24px" }, children: Object(D.jsxs)(v.H, { alignItems: "center", children: [Object(D.jsx)(v.t, { id: "acknowledgement", checked: c, onChange: function() { return i(!c) }, scale: "sm" }), Object(D.jsx)(v.pb, { ml: "8px", children: O("I understand") })] }) }), Object(D.jsx)(v.m, { width: "100%", isLoading: o, endIcon: o ? Object(D.jsx)(v.g, { spin: !0, color: "currentColor" }) : null, disabled: !c || o, onClick: I, mb: "8px", children: O("Confirm") }), Object(D.jsx)(v.m, { variant: "text", width: "100%", onClick: t, children: O("Close Window") })] }) : null },
                Xt = function(e) { var t = e.onDismiss,
                        n = Object(l.useState)({ tokenId: null, nftAddress: null }),
                        r = Object(k.a)(n, 2),
                        c = r[0],
                        i = r[1],
                        a = Object(g.b)().t,
                        s = Ae(),
                        o = s.isLoading,
                        b = s.tokenIds,
                        j = s.nftsInWallet,
                        d = Object(x.b)(),
                        O = Object(p.b)().profile,
                        m = Object(K.j)(),
                        f = Object(u.c)(),
                        h = f.account,
                        C = f.library,
                        S = Object(Q.a)().toastSuccess,
                        E = Object(Z.a)().callWithGasPrice,
                        I = G({ onApprove: function() { var e = Object(A.l)(c.nftAddress, C.getSigner()); return E(e, "approve", [Object(ke.o)(), c.tokenId]) }, onConfirm: function() { return O.isActive ? E(m, "updateProfile", [c.nftAddress, c.tokenId]) : E(m, "reactivateProfile", [c.nftAddress, c.tokenId]) }, onSuccess: function() { var e = Object(w.a)(y.a.mark((function e(n) { var r; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = n.receipt, e.next = 3, d(Object(ot.c)(h));
                                            case 3:
                                                S(a("Profile Updated!"), Object(D.jsx)(lt.b, { txHash: r.transactionHash })), t();
                                            case 5:
                                            case "end":
                                                return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }() }),
                        T = I.isApproving,
                        P = I.isApproved,
                        N = I.isConfirmed,
                        R = I.isConfirming,
                        H = I.handleApprove,
                        F = I.handleConfirm; return Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(v.pb, { as: "p", color: "textSubtle", mb: "24px", children: a("Choose a new Collectible to use as your profile pic.") }), o ? Object(D.jsx)(v.lb, { height: "80px", mb: "16px" }) : j.map((function(e) { var t = Object(k.a)(b[e.identifier], 1)[0]; return Object(D.jsx)(fe, { name: "profilePicture", value: t, image: "/images/nfts/".concat(e.images.md), isChecked: t === c.tokenId, onChange: function(e) { i({ tokenId: Number(e), nftAddress: Object(we.a)() }) }, disabled: T || R || N, children: Object(D.jsx)(v.pb, { bold: !0, children: e.name }) }, e.identifier) })), !o && 0 === j.length && Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(v.pb, { as: "p", color: "textSubtle", mb: "16px", children: a("Sorry! You don\u2019t have any eligible Collectibles in your wallet to use!") }), Object(D.jsx)(v.pb, { as: "p", color: "textSubtle", mb: "24px", children: a("Make sure you have a Pancake Collectible in your wallet and try again!") })] }), Object(D.jsx)(ue, { isApproveDisabled: N || R || P || null === c.tokenId, isApproving: T, isConfirmDisabled: !P || N || null === c.tokenId, isConfirming: R, onApprove: H, onConfirm: F }), Object(D.jsx)(v.m, { variant: "text", width: "100%", onClick: t, disabled: T || R, children: a("Close Window") })] }) },
                Zt = function(e) { var t = e.goToChange,
                        n = e.onDismiss,
                        r = Object(l.useState)(!1),
                        c = Object(k.a)(r, 2),
                        i = c[0],
                        a = c[1],
                        s = Object(p.b)().profile,
                        o = Object(g.b)().t,
                        b = Qt(),
                        u = b.numberCakeToUpdate,
                        j = b.numberCakeToReactivate,
                        d = Object(K.c)(),
                        O = Object(Q.a)().toastError,
                        x = s.isActive ? u : j,
                        m = function() { var e = Object(w.a)(y.a.mark((function e() { var n; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, d.approve(Object(ke.o)(), x.mul(2).toString());
                                        case 2:
                                            return n = e.sent, a(!0), e.next = 6, n.wait();
                                        case 6:
                                            e.sent.status ? t() : (O(o("Error"), o("Please try again. Confirm the transaction and make sure you are paying enough gas!")), a(!1));
                                        case 8:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return s ? Object(D.jsxs)(v.H, { flexDirection: "column", children: [Object(D.jsxs)(v.H, { alignItems: "center", justifyContent: "space-between", mb: "24px", children: [Object(D.jsx)(v.pb, { children: s.isActive ? o("Cost to update:") : o("Cost to reactivate:") }), Object(D.jsxs)(v.pb, { children: [Object(Mt.a)(x), " CAKE"] })] }), Object(D.jsx)(v.m, { disabled: i, isLoading: i, endIcon: i ? Object(D.jsx)(v.g, { spin: !0, color: "currentColor" }) : null, width: "100%", mb: "8px", onClick: m, children: o("Enable") }), Object(D.jsx)(v.m, { variant: "text", width: "100%", onClick: n, disabled: i, children: o("Close Window") })] }) : null },
                $t = (kt = {}, Object(Ct.a)(kt, jt.START, "Edit Profile"), Object(Ct.a)(kt, jt.CHANGE, "Change Profile Pic"), Object(Ct.a)(kt, jt.REMOVE, "Remove Profile Pic"), Object(Ct.a)(kt, jt.APPROVE, "Enable CAKE"), kt),
                en = function(e) { var t = e.onDismiss,
                        n = Lt(),
                        r = n.currentView,
                        c = n.goToChange,
                        i = n.goToRemove,
                        a = n.goToApprove,
                        s = n.goPrevious,
                        o = Object(g.b)().t,
                        l = $t[r],
                        b = r === jt.START,
                        u = b ? null : function() { return s() }; return Object(D.jsx)(v.U, { title: o(l), onBack: u, onDismiss: t, hideCloseButton: !b, children: Object(D.jsxs)("div", { style: { maxWidth: "400px" }, children: [r === jt.START && Object(D.jsx)(Kt, { goToApprove: a, goToChange: c, goToRemove: i, onDismiss: t }), r === jt.REMOVE && Object(D.jsx)(Bt, { onDismiss: t }), r === jt.CHANGE && Object(D.jsx)(Xt, { onDismiss: t }), r === jt.APPROVE && Object(D.jsx)(Zt, { goToChange: c, onDismiss: t })] }) }) },
                tn = function() { var e = Object(g.b)().t,
                        t = ht(),
                        n = t.canClaim,
                        r = t.checkClaimStatus,
                        c = Object(v.Cb)(Object(D.jsx)(vt, { onSuccess: r })),
                        i = Object(k.a)(c, 1)[0],
                        a = Object(v.Cb)(Object(D.jsx)(en, {}), !1),
                        s = Object(k.a)(a, 1)[0],
                        o = Object(p.b)().hasProfile; return Object(D.jsx)(gt, { children: Object(D.jsxs)(v.H, { flexDirection: ["column", null, "row"], alignItems: ["start", null, "center"], justifyContent: "space-between", children: [Object(D.jsxs)("div", { children: [Object(D.jsx)(v.J, { as: "h1", scale: "xxl", mb: "8px", color: "secondary", children: e("Your Profile") }), Object(D.jsx)(v.J, { as: "h2", scale: "lg", mb: "16px", children: e("Check your stats and collect achievements") }), o && Object(D.jsx)(v.m, { onClick: s, children: e("Edit Profile") })] }), n && Object(D.jsx)(v.m, { variant: "tertiary", onClick: i, startIcon: Object(D.jsx)(v.gb, {}), children: e("You\u2019ve got a gift to claim!") })] }) }) },
                nn = ["badge"],
                rn = Object(h.e)(v.l)(St || (St = Object(f.a)(["\n  height: 48px;\n  width: 48px;\n\n  ", " {\n    height: 64px;\n    width: 64px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                cn = h.e.img(At || (At = Object(f.a)(["\n  height: 48px;\n  width: 48px;\n\n  ", " {\n    height: 64px;\n    width: 64px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                an = function(e) { var t = e.badge,
                        n = Object(je.a)(e, nn); return t ? Object(D.jsx)(cn, Object(S.a)({ src: "/images/achievements/".concat(t), alt: "achievement badge" }, n)) : Object(D.jsx)(rn, {}) },
                sn = ["title"],
                on = function(e) { var t = e.title,
                        n = Object(je.a)(e, sn),
                        r = Object(g.b)().t; if ("string" === typeof t) return Object(D.jsx)(v.pb, Object(S.a)(Object(S.a)({ bold: !0 }, n), {}, { children: t })); var c = t.key,
                        i = t.data,
                        a = void 0 === i ? {} : i; return Object(D.jsx)(v.pb, Object(S.a)(Object(S.a)({ bold: !0 }, n), {}, { children: r(c, a) })) },
                ln = ["description"],
                bn = Object(h.e)(v.pb).attrs({ as: "p", fontSize: "14px" })(Et || (Et = Object(f.a)(["\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                un = function(e) { var t = e.description,
                        n = Object(je.a)(e, ln),
                        r = Object(g.b)().t; if (!t) return null; if ("string" === typeof t) return Object(D.jsx)(v.pb, Object(S.a)(Object(S.a)({ as: "p", color: "textSubtle", fontSize: "14px" }, n), {}, { children: t })); var c = t.key,
                        i = t.data,
                        a = void 0 === i ? {} : i; return Object(D.jsx)(bn, Object(S.a)(Object(S.a)({ color: "textSubtle" }, n), {}, { children: r(c, a) })) },
                jn = Object(h.e)(v.H)(It || (It = Object(f.a)(["\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 8px;\n  padding-right: 8px;\n"]))),
                dn = function(e) { var t = e.achievement; return Object(D.jsxs)(v.H, { children: [Object(D.jsx)(an, { badge: t.badge }), Object(D.jsxs)(jn, { children: [Object(D.jsx)(on, { title: t.title }), Object(D.jsx)(un, { description: t.description })] }), Object(D.jsxs)(v.H, { alignItems: "center", children: [Object(D.jsx)(v.hb, { width: "18px", color: "textSubtle", mr: "4px" }), Object(D.jsx)(v.pb, { color: "textSubtle", children: t.points.toLocaleString() })] })] }) },
                pn = h.e.div(Tt || (Tt = Object(f.a)(["\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: 1fr;\n\n  ", " {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                On = function() { var e = Object(g.b)().t,
                        t = Object(O.c)((function(e) { return e.achievements.data })); return Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(pn, { children: t.map((function(e) { return Object(D.jsx)(dn, { achievement: e }, e.id) })) }), 0 === t.length && Object(D.jsx)(v.H, { alignItems: "center", justifyContent: "center", style: { height: "64px" }, children: Object(D.jsx)(v.J, { as: "h5", scale: "md", color: "textDisabled", children: e("No achievements yet!") }) })] }) },
                xn = n(312),
                mn = h.e.div(Pt || (Pt = Object(f.a)(["\n  flex: none;\n  width: 100%;\n\n  ", " {\n    max-width: 160px;\n\n    & > button {\n      width: 100%;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                fn = ["points"],
                hn = function(e) { var t = e.points,
                        n = Object(je.a)(e, fn),
                        r = Object(g.b)().t,
                        c = t.toLocaleString(); return Object(D.jsxs)(v.H, Object(S.a)(Object(S.a)({ alignItems: "center" }, n), {}, { children: [Object(D.jsx)(v.hb, { mr: "4px", color: "textSubtle" }), Object(D.jsx)(v.pb, { color: "textSubtle", children: r("%num% points", { num: c }) })] })) },
                vn = Object(h.e)(v.H)(Dt || (Dt = Object(f.a)(["\n  border-bottom: 1px solid ", ";\n  padding-bottom: 16px;\n  padding-top: 16px;\n"])), (function(e) { return e.theme.colors.cardBorder })),
                gn = h.e.div(Nt || (Nt = Object(f.a)(["\n  flex: 1;\n"]))),
                Cn = Object(h.e)(v.H)(Rt || (Rt = Object(f.a)(["\n  flex-direction: column;\n  flex: 1;\n  margin-left: 8px;\n\n  ", " {\n    align-items: center;\n    flex-direction: row;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                yn = function(e) { var t = e.achievement,
                        n = e.onCollectSuccess,
                        r = Object(l.useState)(!1),
                        c = Object(k.a)(r, 2),
                        i = c[0],
                        a = c[1],
                        s = Object(g.b)().t,
                        o = Object(K.i)(),
                        b = Object(Q.a)(),
                        u = b.toastError,
                        j = b.toastSuccess,
                        d = Object(Z.a)().callWithGasPrice,
                        p = function() { var e = Object(w.a)(y.a.mark((function e() { var r, c; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, d(o, "getPoints", [t.address]);
                                        case 2:
                                            return r = e.sent, a(!0), e.next = 6, r.wait();
                                        case 6:
                                            (c = e.sent).status ? (a(!1), n(t), j(s("Points Collected!"), Object(D.jsx)(lt.b, { txHash: c.transactionHash }))) : (u(s("Error"), s("Please try again. Confirm the transaction and make sure you are paying enough gas!")), a(!1));
                                        case 8:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return Object(D.jsxs)(vn, { children: [Object(D.jsx)(an, { badge: t.badge }), Object(D.jsxs)(Cn, { children: [Object(D.jsxs)(gn, { children: [Object(D.jsx)(on, { title: t.title }), Object(D.jsx)(un, { description: t.description })] }), Object(D.jsx)(hn, { points: t.points, px: [0, null, null, "32px"], mb: ["16px", null, null, 0] }), Object(D.jsx)(mn, { children: Object(D.jsx)(v.m, { onClick: p, isLoading: i, endIcon: i ? Object(D.jsx)(v.g, { spin: !0, color: "currentColor" }) : null, disabled: i, variant: "secondary", children: s("Collect") }) })] })] }) },
                wn = function() { var e = Object(l.useState)([]),
                        t = Object(k.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = Object(g.b)().t,
                        i = Object(x.b)(),
                        a = Object(p.b)().profile,
                        s = Object(u.c)().account;
                    Object(l.useEffect)((function() { s && function() { var e = Object(w.a)(y.a.mark((function e() { var t; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(xn.c)(s);
                                        case 2:
                                            t = e.sent, r(t);
                                        case 4:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }()() }), [s, i, r]); var o = function(e) { i(Object(m.a)(e)), i(Object(ot.a)(e.points)), r((function(t) { return t.filter((function(t) { return t.id !== e.id })) })) }; if (!(null === a || void 0 === a ? void 0 : a.isActive)) return null; if (0 === n.length) return null; var b = Object(U.sumBy)(n, "points"); return Object(D.jsxs)(v.p, { isActive: !0, mb: "32px", children: [Object(D.jsx)(v.r, { children: Object(D.jsx)(v.H, { flexDirection: ["column", null, "row"], justifyContent: ["start", null, "space-between"], children: Object(D.jsxs)(v.H, { alignItems: "center", mb: ["16px", null, 0], children: [Object(D.jsx)(v.hb, { width: "32px", mr: "8px" }), Object(D.jsx)(v.J, { scale: "lg", children: c("%num% Points to Collect", { num: b }) })] }) }) }), Object(D.jsx)(v.q, { children: n.map((function(e) { return Object(D.jsx)(yn, { achievement: e, onCollectSuccess: o }, e.address) })) })] }) },
                kn = function(e) { var t = e.children,
                        n = Object(g.b)().t; return Object(D.jsxs)(v.H, { flexDirection: "column", alignItems: "center", justifyContent: "center", p: "24px", children: [Object(D.jsx)(v.l, { width: "72px", height: "72px" }), Object(D.jsx)(v.J, { as: "h5", scale: "md", color: "textDisabled", children: t || n("Coming Soon!") })] }) },
                Sn = function(e) { var t = e.activeIndex,
                        n = void 0 === t ? 0 : t,
                        r = Object(g.b)().t; return Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(v.H, { mb: "24px", children: Object(D.jsx)(ye.a, { to: "/teams", children: Object(D.jsxs)(v.H, { alignItems: "center", children: [Object(D.jsx)(v.x, { color: "primary" }), Object(D.jsx)(v.pb, { color: "primary", children: r("Teams Overview") })] }) }) }), Object(D.jsx)(v.H, { mb: "24px", justifyContent: "center", children: Object(D.jsxs)(v.n, { activeIndex: n, variant: "subtle", scale: "sm", children: [Object(D.jsx)(v.o, { as: ye.a, to: "/profile/tasks", children: r("Task Center") }), Object(D.jsx)(v.o, { as: ye.a, to: "/profile", children: r("Public Profile") })] }) })] }) },
                An = function() { var e = Object(g.b)().t; return Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(Sn, {}), Object(D.jsx)(wn, {}), Object(D.jsxs)(v.p, { mb: "32px", children: [Object(D.jsx)(v.r, { children: Object(D.jsx)(v.H, { alignItems: "center", justifyContent: "space-between", children: Object(D.jsxs)("div", { children: [Object(D.jsx)(v.J, { scale: "lg", mb: "8px", children: e("Achievements") }), Object(D.jsx)(v.pb, { as: "p", children: e("Earn more points for completing larger quests!") })] }) }) }), Object(D.jsx)(v.q, { children: Object(D.jsx)(On, {}) })] }), Object(D.jsxs)(v.p, { mb: "32px", children: [Object(D.jsx)(v.r, { children: Object(D.jsx)(v.H, { alignItems: "center", justifyContent: "space-between", children: Object(D.jsxs)("div", { children: [Object(D.jsx)(v.J, { scale: "lg", mb: "8px", children: e("Task Center") }), Object(D.jsx)(v.pb, { as: "p", children: e("Earn points by completing regular tasks!") }), Object(D.jsx)(v.pb, { as: "p", children: e("Collecting points for these tasks makes them available again.") })] }) }) }), Object(D.jsx)(v.q, { children: Object(D.jsx)(kn, {}) })] })] }) },
                En = n(45),
                In = n(37),
                Tn = Object(h.e)(v.r)(Ht || (Ht = Object(f.a)(["\n  background: ", ";\n  position: relative;\n"])), (function(e) { return function(e) { return e.isDark ? "linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)" : "linear-gradient(139.73deg, #ed9797 0%, #EFF4F5 46.87%, #F3EFFF 100%)" }(e.theme) })),
                Pn = h.e.img(Ft || (Ft = Object(f.a)(["\n  border-radius: 4px;\n  margin-bottom: 8px;\n"]))),
                Dn = function(e) { var t = e.nft; return Object(D.jsxs)("div", { children: [Object(D.jsx)(Pn, { src: "/images/nfts/".concat(t.images.lg) }), Object(D.jsx)(v.pb, { bold: !0, mb: "8px", children: t.name }), Object(D.jsx)(v.pb, { as: "p", fontSize: "12px", color: "textSubtle", children: t.description })] }) },
                Nn = h.e.div(zt || (zt = Object(f.a)(["\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: repeat(2, 1fr);\n  padding: 16px 0;\n\n  ", " {\n    grid-gap: 24px;\n    grid-template-columns: repeat(3, 1fr);\n    padding: 24px 0;\n  }\n\n  ", " {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  ", " {\n    grid-template-columns: repeat(5, 1fr);\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.md }), (function(e) { return e.theme.mediaQueries.lg })),
                Rn = function() { var e = Object(g.b)().t,
                        t = Ae().nftsInWallet; return Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(v.J, { as: "h4", scale: "md", mb: "8px", children: e("Pancake Collectibles") }), Object(D.jsx)(v.pb, { as: "p", children: e("Pancake Collectibles are special ERC-721 NFTs that can be used on the PancakeSwap platform.") }), Object(D.jsx)(v.pb, { as: "p", children: e("NFTs in this user\u2019s wallet that aren\u2019t approved Pancake Collectibles won\u2019t be shown here.") }), t.length > 0 && Object(D.jsx)(Nn, { children: t.map((function(e) { return Object(D.jsx)(Dn, { nft: e }, e.identifier) })) }), 0 === t.length && Object(D.jsx)(v.H, { justifyContent: "center", p: "32px", children: Object(D.jsx)(v.pb, { fontSize: "20px", bold: !0, color: "textDisabled", children: e("No NFTs Found") }) }), Object(D.jsxs)(v.H, { alignItems: "center", justifyContent: "flex-end", children: [Object(D.jsx)(ye.a, { to: "/collectibles", children: e("See all approved Pancake Collectibles") }), Object(D.jsx)(v.y, {})] })] }) },
                Hn = Object(h.e)(v.pb)(Jt || (Jt = Object(f.a)(["\n  border: 2px solid ", ";\n  border-radius: 16px;\n"])), (function(e) { return e.theme.colors.tertiary }));
            Hn.defaultProps = { p: "24px" }; var Fn, zn, Jn, _n, Ln, Mn, Wn, qn, Un, Qn = Hn,
                Vn = ["icon", "title", "subtitle", "isDisabled"],
                Yn = function(e) { var t = e.icon,
                        n = e.title,
                        r = e.subtitle,
                        c = e.isDisabled,
                        i = void 0 !== c && c,
                        a = Object(je.a)(e, Vn); return Object(D.jsx)(Qn, Object(S.a)(Object(S.a)({}, a), {}, { children: Object(D.jsxs)(v.H, { alignItems: "start", children: [Object(D.jsx)(t, { width: "44px", mr: "24px", color: i ? "textDisabled" : "currentColor" }), Object(D.jsxs)("div", { children: [Object(D.jsx)(v.J, { as: "h3", scale: "xl", color: i ? "textDisabled" : "text", children: n }), Object(D.jsx)(v.pb, { textTransform: "uppercase", color: i ? "textDisabled" : "textSubtle", fontSize: "12px", bold: !0, children: r })] })] }) })) },
                Gn = h.e.div(Fn || (Fn = Object(f.a)(["\n  background: rgba(0, 0, 0, 0.6) url('/images/camera.svg') no-repeat center center;\n  background-size: 24px;\n  border-radius: 50%;\n  left: 0;\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  transition: opacity 300ms;\n  width: 100%;\n  z-index: 3;\n\n  ", " {\n    background-size: 48px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Kn = h.e.div(zn || (zn = Object(f.a)(["\n  position: relative;\n\n  &:hover {\n    cursor: pointer;\n\n    ", " {\n      opacity: 1;\n    }\n  }\n"])), Gn),
                Bn = h.e.div(Jn || (Jn = Object(f.a)(["\n  height: 64px;\n  width: 64px;\n\n  ", " {\n    height: 128px;\n    width: 128px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Xn = function(e) { var t = e.profile,
                        n = Object(v.Cb)(Object(D.jsx)(en, {}), !1),
                        r = Object(k.a)(n, 1)[0]; return Object(D.jsxs)(Kn, { onClick: r, children: [Object(D.jsx)(Bn, { children: Object(D.jsx)(Vt.a, { profile: t }) }), Object(D.jsx)(Gn, {})] }) },
                Zn = h.e.div(_n || (_n = Object(f.a)(["\n  flex: 1;\n  padding: 16px 0;\n\n  ", " {\n    padding: 0 16px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                $n = Object(h.e)(v.J)(Ln || (Ln = Object(f.a)(["\n  font-size: 16px;\n  line-height: 24px;\n  margin-bottom: 8px;\n\n  ", " {\n    font-size: 40px;\n    line-height: 44px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                er = h.e.div(Mn || (Mn = Object(f.a)(["\n  position: absolute;\n  right: 24px;\n  top: 24px;\n"]))),
                tr = Object(h.e)(v.pb)(Wn || (Wn = Object(f.a)(["\n  font-size: 12px;\n\n  ", " {\n    font-size: 16px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                nr = Object(h.e)(v.O)(qn || (qn = Object(f.a)(["\n  display: inline-block;\n  font-weight: 400;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 80px;\n  white-space: nowrap;\n\n  ", " {\n    font-size: 16px;\n    width: auto;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                rr = h.e.div(Un || (Un = Object(f.a)(["\n  margin-bottom: 40px;\n"]))),
                cr = function() { var e = Object(u.c)().account,
                        t = Object(p.b)().profile,
                        n = Object(En.n)(),
                        r = Object(k.a)(n, 2),
                        c = r[0],
                        i = r[1],
                        a = Object(g.b)().t; if (!e) return Object(D.jsx)(q, {}); var s = t.username,
                        o = t.team,
                        l = t.isActive,
                        b = t.points,
                        j = c ? v.ub : v.vb; return Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(Sn, { activeIndex: 1 }), Object(D.jsx)("div", { children: Object(D.jsxs)(v.p, { children: [Object(D.jsxs)(Tn, { children: [Object(D.jsxs)(v.H, { alignItems: ["start", null, "center"], flexDirection: ["column", null, "row"], children: [Object(D.jsx)(Xn, { profile: t }), Object(D.jsxs)(Zn, { children: [Object(D.jsxs)(v.H, { alignItems: "center", children: [Object(D.jsxs)($n, { children: ["@", c ? s : s.replace(/./g, "*")] }), Object(D.jsx)(j, { ml: "4px", onClick: function() { i(!c) }, cursor: "pointer" })] }), Object(D.jsx)(v.H, { alignItems: "center", children: Object(D.jsxs)(nr, { href: Object(In.e)(e, "address"), color: "text", external: !0, children: [e, Object(D.jsx)(v.eb, { ml: "4px" })] }) }), Object(D.jsx)(tr, { bold: !0, children: o.name })] })] }), Object(D.jsx)(er, { children: l ? Object(D.jsx)(v.ob, { startIcon: Object(D.jsx)(v.u, { width: "18px" }), outline: !0, children: a("Active") }) : Object(D.jsx)(v.ob, { variant: "failure", startIcon: Object(D.jsx)(v.i, { width: "18px" }), outline: !0, children: a("Paused") }) })] }), Object(D.jsxs)(v.q, { children: [Object(D.jsx)(Yn, { icon: v.hb, title: b, subtitle: a("Points"), mb: "24px" }), Object(D.jsxs)(rr, { children: [Object(D.jsx)(v.J, { as: "h4", scale: "md", mb: "16px", children: a("Achievements") }), Object(D.jsx)(On, {})] }), Object(D.jsx)(Rn, {})] })] }) })] }) };
            t.default = function() { var e = Object(p.b)(),
                    t = e.isInitialized,
                    n = e.isLoading,
                    r = e.hasProfile,
                    c = Object(u.c)().account; return function() { var e = Object(u.c)().account,
                        t = Object(x.b)();
                    Object(l.useEffect)((function() { e && t(Object(m.c)(e)) }), [e, t]) }(), !t || n ? Object(D.jsx)(d.a, {}) : c && !r ? Object(D.jsx)(j.b, { children: Object(D.jsx)(ft, {}) }) : Object(D.jsxs)(j.b, { children: [Object(D.jsx)(tn, {}), Object(D.jsx)(b.b, { exact: !0, path: "/profile", children: Object(D.jsx)(cr, {}) }), Object(D.jsx)(b.b, { path: "/profile/tasks", children: Object(D.jsx)(An, {}) })] }) } }, 748: function(e, t, n) { "use strict"; var r, c, i, a = n(13),
                s = (n(0), n(2)),
                o = n(7),
                l = n(1),
                b = o.e.img(r || (r = Object(a.a)(["\n  border: 1px solid ", ";\n  border-radius: 50%;\n  bottom: 0px;\n  position: absolute;\n  right: 0px;\n  min-width: 20px;\n  min-height: 20px;\n  width: 37.5%;\n  height: 37.5%;\n  z-index: 5;\n\n  ", " {\n    border-width: 2px;\n  }\n"])), (function(e) { return e.theme.card.background }), (function(e) { return e.theme.mediaQueries.sm })),
                u = o.e.div(c || (c = Object(a.a)(["\n  background: url('", "');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])), (function(e) { return e.bg })),
                j = Object(o.e)(s.cb)(i || (i = Object(a.a)(["\n  width: 100%;\n  height: 100%;\n"])));
            t.a = function(e) { var t, n, r = e.profile; return Object(l.jsxs)(u, { bg: "/images/nfts/".concat(null === (t = r.nft) || void 0 === t || null === (n = t.images) || void 0 === n ? void 0 : n.md), children: [!r.isActive && Object(l.jsx)(j, {}), Object(l.jsx)(b, { src: "/images/teams/".concat(r.team.images.alt), alt: r.team.name })] }) } }, 786: function(e, t, n) { var r = n(435);
            e.exports = function(e, t) { var n = -1,
                    c = e.length,
                    i = c - 1; for (t = void 0 === t ? c : t; ++n < t;) { var a = r(n, i),
                        s = e[a];
                    e[a] = e[n], e[n] = s } return e.length = t, e } }, 855: function(e, t, n) { var r = n(856),
                c = n(857),
                i = n(103);
            e.exports = function(e) { return (i(e) ? r : c)(e) } }, 856: function(e, t, n) { var r = n(437),
                c = n(786);
            e.exports = function(e) { return c(r(e)) } }, 857: function(e, t, n) { var r = n(786),
                c = n(436);
            e.exports = function(e) { return r(c(e)) } } }
]);
//# sourceMappingURL=4.2559ef0f.chunk.js.map