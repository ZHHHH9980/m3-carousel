import {
  s as Ji,
  f as wr,
  a as Oi,
  g as xr,
  h as gn,
  c as Ai,
  B as Qi,
  d as yr,
  j as Ht,
  i as Ii,
  y as Sr,
  C as ji,
  z as Xn,
  D as eo,
  o as to,
  G as ro,
  p as no,
} from "../chunks/scheduler.20a43439.js";
import { e as Mi } from "../chunks/each.edee1b7d.js";
import { S as io, i as oo } from "../chunks/index.4aa507e7.js";
import { g as br } from "../chunks/index.4db78ffb.js";
import { S as so } from "../chunks/ScrollToPlugin.ec8e4637.js";
import { c as lo } from "../chunks/_commonjsHelpers.725317a4.js";
var Nn = {
  exports: {},
};
(function (it, V) {
  (function (z, ve) {
    ve(V);
  })(lo, function (z) {
    function ve(o, e) {
      for (var n = 0; n < e.length; n++) {
        var t = e[n];
        (t.enumerable = t.enumerable || !1),
          (t.configurable = !0),
          "value" in t && (t.writable = !0),
          Object.defineProperty(o, t.key, t);
      }
    }
    function Te(o, e, n) {
      return e && ve(o.prototype, e), n && ve(o, n), o;
    }
    /*!
     * Observer 3.12.2
     * https://greensock.com
     *
     * @license Copyright 2008-2023, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var M,
      Ge,
      Z,
      ot,
      ce,
      X,
      Q,
      De,
      L,
      It,
      Ze,
      ft,
      Bn,
      Hn = function () {
        return (
          M ||
          (typeof window < "u" && (M = window.gsap) && M.registerPlugin && M)
        );
      },
      Wn = 1,
      lr = [],
      T = [],
      bt = [],
      Cr = Date.now,
      hn = function (e, n) {
        return n;
      },
      Fi = function () {
        var e = L.core,
          n = e.bridge || {},
          t = e._scrollers,
          r = e._proxies;
        t.push.apply(t, T),
          r.push.apply(r, bt),
          (T = t),
          (bt = r),
          (hn = function (a, l) {
            return n[a](l);
          });
      },
      Ft = function (e, n) {
        return ~bt.indexOf(e) && bt[bt.indexOf(e) + 1][n];
      },
      Tr = function (e) {
        return !!~It.indexOf(e);
      },
      Re = function (e, n, t, r, i) {
        return e.addEventListener(n, t, {
          passive: !r,
          capture: !!i,
        });
      },
      Oe = function (e, n, t, r) {
        return e.removeEventListener(n, t, !!r);
      },
      Br = "scrollLeft",
      Hr = "scrollTop",
      _n = function () {
        return (Ze && Ze.isPressed) || T.cache++;
      },
      Wr = function (e, n) {
        var t = function r(i) {
          if (i || i === 0) {
            Wn && (Z.history.scrollRestoration = "manual");
            var a = Ze && Ze.isPressed;
            (i = r.v = Math.round(i) || (Ze && Ze.iOS ? 1 : 0)),
              e(i),
              (r.cacheID = T.cache),
              a && hn("ss", i);
          } else
            (n || T.cache !== r.cacheID || hn("ref")) &&
              ((r.cacheID = T.cache), (r.v = e()));
          return r.v + r.offset;
        };
        return (t.offset = 0), e && t;
      },
      Ae = {
        s: Br,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: Wr(function (o) {
          return arguments.length
            ? Z.scrollTo(o, ue.sc())
            : Z.pageXOffset || ot[Br] || ce[Br] || X[Br] || 0;
        }),
      },
      ue = {
        s: Hr,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: Ae,
        sc: Wr(function (o) {
          return arguments.length
            ? Z.scrollTo(Ae.sc(), o)
            : Z.pageYOffset || ot[Hr] || ce[Hr] || X[Hr] || 0;
        }),
      },
      Ve = function (e, n) {
        return (
          ((n && n._ctx && n._ctx.selector) || M.utils.toArray)(e)[0] ||
          (typeof e == "string" && M.config().nullTargetWarn !== !1
            ? console.warn("Element not found:", e)
            : null)
        );
      },
      Yt = function (e, n) {
        var t = n.s,
          r = n.sc;
        Tr(e) && (e = ot.scrollingElement || ce);
        var i = T.indexOf(e),
          a = r === ue.sc ? 1 : 2;
        !~i && (i = T.push(e) - 1), T[i + a] || Re(e, "scroll", _n);
        var l = T[i + a],
          f =
            l ||
            (T[i + a] =
              Wr(Ft(e, t), !0) ||
              (Tr(e)
                ? r
                : Wr(function (b) {
                    return arguments.length ? (e[t] = b) : e[t];
                  })));
        return (
          (f.target = e),
          l || (f.smooth = M.getProperty(e, "scrollBehavior") === "smooth"),
          f
        );
      },
      mn = function (e, n, t) {
        var r = e,
          i = e,
          a = Cr(),
          l = a,
          f = n || 50,
          b = Math.max(500, f * 3),
          A = function (_, j) {
            var W = Cr();
            j || W - a > f
              ? ((i = r), (r = _), (l = a), (a = W))
              : t
              ? (r += _)
              : (r = i + ((_ - i) / (W - l)) * (a - l));
          },
          I = function () {
            (i = r = t ? 0 : r), (l = a = 0);
          },
          g = function (_) {
            var j = l,
              W = i,
              fe = Cr();
            return (
              (_ || _ === 0) && _ !== r && A(_),
              a === l || fe - l > b
                ? 0
                : ((r + (t ? W : -W)) / ((t ? fe : a) - j)) * 1e3
            );
          };
        return {
          update: A,
          reset: I,
          getVelocity: g,
        };
      },
      kr = function (e, n) {
        return (
          n && !e._gsapAllow && e.preventDefault(),
          e.changedTouches ? e.changedTouches[0] : e
        );
      },
      Gn = function (e) {
        var n = Math.max.apply(Math, e),
          t = Math.min.apply(Math, e);
        return Math.abs(n) >= Math.abs(t) ? n : t;
      },
      Vn = function () {
        (L = M.core.globals().ScrollTrigger), L && L.core && Fi();
      },
      qn = function (e) {
        return (
          (M = e || Hn()),
          M &&
            typeof document < "u" &&
            document.body &&
            ((Z = window),
            (ot = document),
            (ce = ot.documentElement),
            (X = ot.body),
            (It = [Z, ot, ce, X]),
            M.utils.clamp,
            (Bn = M.core.context || function () {}),
            (De = "onpointerenter" in X ? "pointer" : "mouse"),
            (Q = re.isTouch =
              Z.matchMedia &&
              Z.matchMedia("(hover: none), (pointer: coarse)").matches
                ? 1
                : "ontouchstart" in Z ||
                  navigator.maxTouchPoints > 0 ||
                  navigator.msMaxTouchPoints > 0
                ? 2
                : 0),
            (ft = re.eventTypes =
              (
                "ontouchstart" in ce
                  ? "touchstart,touchmove,touchcancel,touchend"
                  : "onpointerdown" in ce
                  ? "pointerdown,pointermove,pointercancel,pointerup"
                  : "mousedown,mousemove,mouseup,mouseup"
              ).split(",")),
            setTimeout(function () {
              return (Wn = 0);
            }, 500),
            Vn(),
            (Ge = 1)),
          Ge
        );
      };
    (Ae.op = ue), (T.cache = 0);
    var re = (function () {
      function o(n) {
        this.init(n);
      }
      var e = o.prototype;
      return (
        (e.init = function (t) {
          Ge || qn(M) || console.warn("Please gsap.registerPlugin(Observer)"),
            L || Vn();
          var r = t.tolerance,
            i = t.dragMinimum,
            a = t.type,
            l = t.target,
            f = t.lineHeight,
            b = t.debounce,
            A = t.preventDefault,
            I = t.onStop,
            g = t.onStopDelay,
            u = t.ignore,
            _ = t.wheelSpeed,
            j = t.event,
            W = t.onDragStart,
            fe = t.onDragEnd,
            $ = t.onDrag,
            we = t.onPress,
            S = t.onRelease,
            ct = t.onRight,
            G = t.onLeft,
            w = t.onUp,
            Le = t.onDown,
            qe = t.onChangeX,
            h = t.onChangeY,
            xe = t.onChange,
            x = t.onToggleX,
            Mt = t.onToggleY,
            pe = t.onHover,
            Xe = t.onHoverEnd,
            Ne = t.onMove,
            N = t.ignoreCheck,
            ie = t.isNormalizer,
            oe = t.onGestureStart,
            s = t.onGestureEnd,
            de = t.onWheel,
            Jt = t.onEnable,
            Lt = t.onDisable,
            ut = t.onClick,
            Dt = t.scrollSpeed,
            Be = t.capture,
            se = t.allowClicks,
            He = t.lockAxis,
            Ee = t.onLockAxis;
          (this.target = l = Ve(l) || ce),
            (this.vars = t),
            u && (u = M.utils.toArray(u)),
            (r = r || 1e-9),
            (i = i || 0),
            (_ = _ || 1),
            (Dt = Dt || 1),
            (a = a || "wheel,touch,pointer"),
            (b = b !== !1),
            f || (f = parseFloat(Z.getComputedStyle(X).lineHeight) || 22);
          var Xt,
            $e,
            xt,
            F,
            le,
            Ue,
            et,
            c = this,
            tt = 0,
            Rt = 0,
            Qt = Yt(l, Ae),
            ae = Yt(l, ue),
            jt = Qt(),
            er = ae(),
            zr =
              ~a.indexOf("touch") &&
              !~a.indexOf("pointer") &&
              ft[0] === "pointerdown",
            ye = Tr(l),
            ee = l.ownerDocument || ot,
            dt = [0, 0, 0],
            gt = [0, 0, 0],
            tr = 0,
            Ot = function () {
              return (tr = Cr());
            },
            yt = function (m, Y) {
              return (
                ((c.event = m) && u && ~u.indexOf(m.target)) ||
                (Y && zr && m.pointerType !== "touch") ||
                (N && N(m, Y))
              );
            },
            Ke = function () {
              c._vx.reset(), c._vy.reset(), $e.pause(), I && I(c);
            },
            rr = function () {
              var m = (c.deltaX = Gn(dt)),
                Y = (c.deltaY = Gn(gt)),
                J = Math.abs(m) >= r,
                d = Math.abs(Y) >= r;
              xe && (J || d) && xe(c, m, Y, dt, gt),
                J &&
                  (ct && c.deltaX > 0 && ct(c),
                  G && c.deltaX < 0 && G(c),
                  qe && qe(c),
                  x && c.deltaX < 0 != tt < 0 && x(c),
                  (tt = c.deltaX),
                  (dt[0] = dt[1] = dt[2] = 0)),
                d &&
                  (Le && c.deltaY > 0 && Le(c),
                  w && c.deltaY < 0 && w(c),
                  h && h(c),
                  Mt && c.deltaY < 0 != Rt < 0 && Mt(c),
                  (Rt = c.deltaY),
                  (gt[0] = gt[1] = gt[2] = 0)),
                (F || xt) && (Ne && Ne(c), xt && ($(c), (xt = !1)), (F = !1)),
                Ue && !(Ue = !1) && Ee && Ee(c),
                le && (de(c), (le = !1)),
                (Xt = 0);
            },
            _r = function (m, Y, J) {
              (dt[J] += m),
                (gt[J] += Y),
                c._vx.update(m),
                c._vy.update(Y),
                b ? Xt || (Xt = requestAnimationFrame(rr)) : rr();
            },
            mr = function (m, Y) {
              He &&
                !et &&
                ((c.axis = et = Math.abs(m) > Math.abs(Y) ? "x" : "y"),
                (Ue = !0)),
                et !== "y" && ((dt[2] += m), c._vx.update(m, !0)),
                et !== "x" && ((gt[2] += Y), c._vy.update(Y, !0)),
                b ? Xt || (Xt = requestAnimationFrame(rr)) : rr();
            },
            nr = function (m) {
              if (!yt(m, 1)) {
                m = kr(m, A);
                var Y = m.clientX,
                  J = m.clientY,
                  d = Y - c.x,
                  D = J - c.y,
                  v = c.isDragging;
                (c.x = Y),
                  (c.y = J),
                  (v ||
                    Math.abs(c.startX - Y) >= i ||
                    Math.abs(c.startY - J) >= i) &&
                    ($ && (xt = !0),
                    v || (c.isDragging = !0),
                    mr(d, D),
                    v || (W && W(c)));
              }
            },
            Nt = (c.onPress = function (y) {
              yt(y, 1) ||
                (y && y.button) ||
                ((c.axis = et = null),
                $e.pause(),
                (c.isPressed = !0),
                (y = kr(y)),
                (tt = Rt = 0),
                (c.startX = c.x = y.clientX),
                (c.startY = c.y = y.clientY),
                c._vx.reset(),
                c._vy.reset(),
                Re(ie ? l : ee, ft[1], nr, A, !0),
                (c.deltaX = c.deltaY = 0),
                we && we(c));
            }),
            Bt = (c.onRelease = function (y) {
              if (!yt(y, 1)) {
                Oe(ie ? l : ee, ft[1], nr, !0);
                var m = !isNaN(c.y - c.startY),
                  Y =
                    c.isDragging &&
                    (Math.abs(c.x - c.startX) > 3 ||
                      Math.abs(c.y - c.startY) > 3),
                  J = kr(y);
                !Y &&
                  m &&
                  (c._vx.reset(),
                  c._vy.reset(),
                  A &&
                    se &&
                    M.delayedCall(0.08, function () {
                      if (Cr() - tr > 300 && !y.defaultPrevented) {
                        if (y.target.click) y.target.click();
                        else if (ee.createEvent) {
                          var d = ee.createEvent("MouseEvents");
                          d.initMouseEvent(
                            "click",
                            !0,
                            !0,
                            Z,
                            1,
                            J.screenX,
                            J.screenY,
                            J.clientX,
                            J.clientY,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null
                          ),
                            y.target.dispatchEvent(d);
                        }
                      }
                    })),
                  (c.isDragging = c.isGesturing = c.isPressed = !1),
                  I && !ie && $e.restart(!0),
                  fe && Y && fe(c),
                  S && S(c, Y);
              }
            }),
            R = function (m) {
              return (
                m.touches &&
                m.touches.length > 1 &&
                (c.isGesturing = !0) &&
                oe(m, c.isDragging)
              );
            },
            ir = function () {
              return (c.isGesturing = !1) || s(c);
            },
            ht = function (m) {
              if (!yt(m)) {
                var Y = Qt(),
                  J = ae();
                _r((Y - jt) * Dt, (J - er) * Dt, 1),
                  (jt = Y),
                  (er = J),
                  I && $e.restart(!0);
              }
            },
            _t = function (m) {
              if (!yt(m)) {
                (m = kr(m, A)), de && (le = !0);
                var Y =
                  (m.deltaMode === 1
                    ? f
                    : m.deltaMode === 2
                    ? Z.innerHeight
                    : 1) * _;
                _r(m.deltaX * Y, m.deltaY * Y, 0), I && !ie && $e.restart(!0);
              }
            },
            mt = function (m) {
              if (!yt(m)) {
                var Y = m.clientX,
                  J = m.clientY,
                  d = Y - c.x,
                  D = J - c.y;
                (c.x = Y), (c.y = J), (F = !0), (d || D) && mr(d, D);
              }
            },
            or = function (m) {
              (c.event = m), pe(c);
            },
            vr = function (m) {
              (c.event = m), Xe(c);
            },
            At = function (m) {
              return yt(m) || (kr(m, A) && ut(c));
            };
          ($e = c._dc = M.delayedCall(g || 0.25, Ke).pause()),
            (c.deltaX = c.deltaY = 0),
            (c._vx = mn(0, 50, !0)),
            (c._vy = mn(0, 50, !0)),
            (c.scrollX = Qt),
            (c.scrollY = ae),
            (c.isDragging = c.isGesturing = c.isPressed = !1),
            Bn(this),
            (c.enable = function (y) {
              return (
                c.isEnabled ||
                  (Re(ye ? ee : l, "scroll", _n),
                  a.indexOf("scroll") >= 0 &&
                    Re(ye ? ee : l, "scroll", ht, A, Be),
                  a.indexOf("wheel") >= 0 && Re(l, "wheel", _t, A, Be),
                  ((a.indexOf("touch") >= 0 && Q) ||
                    a.indexOf("pointer") >= 0) &&
                    (Re(l, ft[0], Nt, A, Be),
                    Re(ee, ft[2], Bt),
                    Re(ee, ft[3], Bt),
                    se && Re(l, "click", Ot, !1, !0),
                    ut && Re(l, "click", At),
                    oe && Re(ee, "gesturestart", R),
                    s && Re(ee, "gestureend", ir),
                    pe && Re(l, De + "enter", or),
                    Xe && Re(l, De + "leave", vr),
                    Ne && Re(l, De + "move", mt)),
                  (c.isEnabled = !0),
                  y && y.type && Nt(y),
                  Jt && Jt(c)),
                c
              );
            }),
            (c.disable = function () {
              c.isEnabled &&
                (lr.filter(function (y) {
                  return y !== c && Tr(y.target);
                }).length || Oe(ye ? ee : l, "scroll", _n),
                c.isPressed &&
                  (c._vx.reset(),
                  c._vy.reset(),
                  Oe(ie ? l : ee, ft[1], nr, !0)),
                Oe(ye ? ee : l, "scroll", ht, Be),
                Oe(l, "wheel", _t, Be),
                Oe(l, ft[0], Nt, Be),
                Oe(ee, ft[2], Bt),
                Oe(ee, ft[3], Bt),
                Oe(l, "click", Ot, !0),
                Oe(l, "click", At),
                Oe(ee, "gesturestart", R),
                Oe(ee, "gestureend", ir),
                Oe(l, De + "enter", or),
                Oe(l, De + "leave", vr),
                Oe(l, De + "move", mt),
                (c.isEnabled = c.isPressed = c.isDragging = !1),
                Lt && Lt(c));
            }),
            (c.kill = c.revert =
              function () {
                c.disable();
                var y = lr.indexOf(c);
                y >= 0 && lr.splice(y, 1), Ze === c && (Ze = 0);
              }),
            lr.push(c),
            ie && Tr(l) && (Ze = c),
            c.enable(j);
        }),
        Te(o, [
          {
            key: "velocityX",
            get: function () {
              return this._vx.getVelocity();
            },
          },
          {
            key: "velocityY",
            get: function () {
              return this._vy.getVelocity();
            },
          },
        ]),
        o
      );
    })();
    (re.version = "3.12.2"),
      (re.create = function (o) {
        return new re(o);
      }),
      (re.register = qn),
      (re.getAll = function () {
        return lr.slice();
      }),
      (re.getById = function (o) {
        return lr.filter(function (e) {
          return e.vars.id === o;
        })[0];
      }),
      Hn() && M.registerPlugin(re);
    /*!
     * ScrollTrigger 3.12.2
     * https://greensock.com
     *
     * @license Copyright 2008-2023, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var p,
      ar,
      P,
      q,
      pt,
      H,
      $n,
      Gr,
      Vr,
      cr,
      qr,
      $r,
      ke,
      Ur,
      vn,
      Ie,
      Un,
      Kn,
      ur,
      Zn,
      bn,
      Jn,
      Je,
      Qn,
      jn,
      ei,
      zt,
      wn,
      xn,
      fr,
      yn,
      Sn,
      Kr = 1,
      Fe = Date.now,
      Cn = Fe(),
      st = 0,
      Er = 0,
      ti = function (e, n, t) {
        var r = Qe(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
        return (t["_" + n + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
      },
      ri = function (e, n) {
        return n && (!Qe(e) || e.substr(0, 6) !== "clamp(")
          ? "clamp(" + e + ")"
          : e;
      },
      Yi = function o() {
        return Er && requestAnimationFrame(o);
      },
      ni = function () {
        return (Ur = 1);
      },
      ii = function () {
        return (Ur = 0);
      },
      wt = function (e) {
        return e;
      },
      Pr = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0;
      },
      oi = function () {
        return typeof window < "u";
      },
      si = function () {
        return p || (oi() && (p = window.gsap) && p.registerPlugin && p);
      },
      Wt = function (e) {
        return !!~$n.indexOf(e);
      },
      li = function (e) {
        return (
          (e === "Height" ? yn : P["inner" + e]) ||
          pt["client" + e] ||
          H["client" + e]
        );
      },
      ai = function (e) {
        return (
          Ft(e, "getBoundingClientRect") ||
          (Wt(e)
            ? function () {
                return (cn.width = P.innerWidth), (cn.height = yn), cn;
              }
            : function () {
                return Et(e);
              })
        );
      },
      zi = function (e, n, t) {
        var r = t.d,
          i = t.d2,
          a = t.a;
        return (a = Ft(e, "getBoundingClientRect"))
          ? function () {
              return a()[r];
            }
          : function () {
              return (n ? li(i) : e["client" + i]) || 0;
            };
      },
      Li = function (e, n) {
        return !n || ~bt.indexOf(e)
          ? ai(e)
          : function () {
              return cn;
            };
      },
      kt = function (e, n) {
        var t = n.s,
          r = n.d2,
          i = n.d,
          a = n.a;
        return Math.max(
          0,
          (t = "scroll" + r) && (a = Ft(e, t))
            ? a() - ai(e)()[i]
            : Wt(e)
            ? (pt[t] || H[t]) - li(r)
            : e[t] - e["offset" + r]
        );
      },
      Zr = function (e, n) {
        for (var t = 0; t < ur.length; t += 3)
          (!n || ~n.indexOf(ur[t + 1])) && e(ur[t], ur[t + 1], ur[t + 2]);
      },
      Qe = function (e) {
        return typeof e == "string";
      },
      Ye = function (e) {
        return typeof e == "function";
      },
      Jr = function (e) {
        return typeof e == "number";
      },
      Gt = function (e) {
        return typeof e == "object";
      },
      Mr = function (e, n, t) {
        return e && e.progress(n ? 0 : 1) && t && e.pause();
      },
      Tn = function (e, n) {
        if (e.enabled) {
          var t = n(e);
          t && t.totalTime && (e.callbackAnimation = t);
        }
      },
      pr = Math.abs,
      ci = "left",
      ui = "top",
      kn = "right",
      En = "bottom",
      Vt = "width",
      qt = "height",
      Dr = "Right",
      Rr = "Left",
      Or = "Top",
      Ar = "Bottom",
      ne = "padding",
      lt = "margin",
      dr = "Width",
      Pn = "Height",
      be = "px",
      at = function (e) {
        return P.getComputedStyle(e);
      },
      Xi = function (e) {
        var n = at(e).position;
        e.style.position = n === "absolute" || n === "fixed" ? n : "relative";
      },
      fi = function (e, n) {
        for (var t in n) t in e || (e[t] = n[t]);
        return e;
      },
      Et = function (e, n) {
        var t =
            n &&
            at(e)[vn] !== "matrix(1, 0, 0, 1, 0, 0)" &&
            p
              .to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0,
              })
              .progress(1),
          r = e.getBoundingClientRect();
        return t && t.progress(0).kill(), r;
      },
      Mn = function (e, n) {
        var t = n.d2;
        return e["offset" + t] || e["client" + t] || 0;
      },
      pi = function (e) {
        var n = [],
          t = e.labels,
          r = e.duration(),
          i;
        for (i in t) n.push(t[i] / r);
        return n;
      },
      Ni = function (e) {
        return function (n) {
          return p.utils.snap(pi(e), n);
        };
      },
      Dn = function (e) {
        var n = p.utils.snap(e),
          t =
            Array.isArray(e) &&
            e.slice(0).sort(function (r, i) {
              return r - i;
            });
        return t
          ? function (r, i, a) {
              a === void 0 && (a = 0.001);
              var l;
              if (!i) return n(r);
              if (i > 0) {
                for (r -= a, l = 0; l < t.length; l++)
                  if (t[l] >= r) return t[l];
                return t[l - 1];
              } else
                for (l = t.length, r += a; l--; ) if (t[l] <= r) return t[l];
              return t[0];
            }
          : function (r, i, a) {
              a === void 0 && (a = 0.001);
              var l = n(r);
              return !i || Math.abs(l - r) < a || l - r < 0 == i < 0
                ? l
                : n(i < 0 ? r - e : r + e);
            };
      },
      Bi = function (e) {
        return function (n, t) {
          return Dn(pi(e))(n, t.direction);
        };
      },
      Qr = function (e, n, t, r) {
        return t.split(",").forEach(function (i) {
          return e(n, i, r);
        });
      },
      he = function (e, n, t, r, i) {
        return e.addEventListener(n, t, {
          passive: !r,
          capture: !!i,
        });
      },
      _e = function (e, n, t, r) {
        return e.removeEventListener(n, t, !!r);
      },
      jr = function (e, n, t) {
        (t = t && t.wheelHandler),
          t && (e(n, "wheel", t), e(n, "touchmove", t));
      },
      di = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal",
      },
      en = {
        toggleActions: "play",
        anticipatePin: 0,
      },
      tn = {
        top: 0,
        left: 0,
        center: 0.5,
        bottom: 1,
        right: 1,
      },
      rn = function (e, n) {
        if (Qe(e)) {
          var t = e.indexOf("="),
            r = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
          ~t &&
            (e.indexOf("%") > t && (r *= n / 100), (e = e.substr(0, t - 1))),
            (e =
              r +
              (e in tn
                ? tn[e] * n
                : ~e.indexOf("%")
                ? (parseFloat(e) * n) / 100
                : parseFloat(e) || 0));
        }
        return e;
      },
      nn = function (e, n, t, r, i, a, l, f) {
        var b = i.startColor,
          A = i.endColor,
          I = i.fontSize,
          g = i.indent,
          u = i.fontWeight,
          _ = q.createElement("div"),
          j = Wt(t) || Ft(t, "pinType") === "fixed",
          W = e.indexOf("scroller") !== -1,
          fe = j ? H : t,
          $ = e.indexOf("start") !== -1,
          we = $ ? b : A,
          S =
            "border-color:" +
            we +
            ";font-size:" +
            I +
            ";color:" +
            we +
            ";font-weight:" +
            u +
            ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return (
          (S += "position:" + ((W || f) && j ? "fixed;" : "absolute;")),
          (W || f || !j) &&
            (S += (r === ue ? kn : En) + ":" + (a + parseFloat(g)) + "px;"),
          l &&
            (S +=
              "box-sizing:border-box;text-align:left;width:" +
              l.offsetWidth +
              "px;"),
          (_._isStart = $),
          _.setAttribute(
            "class",
            "gsap-marker-" + e + (n ? " marker-" + n : "")
          ),
          (_.style.cssText = S),
          (_.innerText = n || n === 0 ? e + "-" + n : e),
          fe.children[0]
            ? fe.insertBefore(_, fe.children[0])
            : fe.appendChild(_),
          (_._offset = _["offset" + r.op.d2]),
          on(_, 0, r, $),
          _
        );
      },
      on = function (e, n, t, r) {
        var i = {
            display: "block",
          },
          a = t[r ? "os2" : "p2"],
          l = t[r ? "p2" : "os2"];
        (e._isFlipped = r),
          (i[t.a + "Percent"] = r ? -100 : 0),
          (i[t.a] = r ? "1px" : 0),
          (i["border" + a + dr] = 1),
          (i["border" + l + dr] = 0),
          (i[t.p] = n + "px"),
          p.set(e, i);
      },
      C = [],
      Rn = {},
      Ir,
      gi = function () {
        return Fe() - st > 34 && (Ir || (Ir = requestAnimationFrame(Pt)));
      },
      gr = function () {
        (!Je || !Je.isPressed || Je.startX > H.clientWidth) &&
          (T.cache++,
          Je ? Ir || (Ir = requestAnimationFrame(Pt)) : Pt(),
          st || Ut("scrollStart"),
          (st = Fe()));
      },
      On = function () {
        (ei = P.innerWidth), (jn = P.innerHeight);
      },
      Fr = function () {
        T.cache++,
          !ke &&
            !Jn &&
            !q.fullscreenElement &&
            !q.webkitFullscreenElement &&
            (!Qn ||
              ei !== P.innerWidth ||
              Math.abs(P.innerHeight - jn) > P.innerHeight * 0.25) &&
            Gr.restart(!0);
      },
      $t = {},
      Hi = [],
      hi = function o() {
        return _e(k, "scrollEnd", o) || Zt(!0);
      },
      Ut = function (e) {
        return (
          ($t[e] &&
            $t[e].map(function (n) {
              return n();
            })) ||
          Hi
        );
      },
      je = [],
      _i = function (e) {
        for (var n = 0; n < je.length; n += 5)
          (!e || (je[n + 4] && je[n + 4].query === e)) &&
            ((je[n].style.cssText = je[n + 1]),
            je[n].getBBox && je[n].setAttribute("transform", je[n + 2] || ""),
            (je[n + 3].uncache = 1));
      },
      An = function (e, n) {
        var t;
        for (Ie = 0; Ie < C.length; Ie++)
          (t = C[Ie]),
            t && (!n || t._ctx === n) && (e ? t.kill(1) : t.revert(!0, !0));
        n && _i(n), n || Ut("revert");
      },
      mi = function (e, n) {
        T.cache++,
          (n || !ze) &&
            T.forEach(function (t) {
              return Ye(t) && t.cacheID++ && (t.rec = 0);
            }),
          Qe(e) && (P.history.scrollRestoration = xn = e);
      },
      ze,
      Kt = 0,
      vi,
      Wi = function () {
        if (vi !== Kt) {
          var e = (vi = Kt);
          requestAnimationFrame(function () {
            return e === Kt && Zt(!0);
          });
        }
      },
      bi = function () {
        H.appendChild(fr),
          (yn = fr.offsetHeight || P.innerHeight),
          H.removeChild(fr);
      },
      Zt = function (e, n) {
        if (st && !e) {
          he(k, "scrollEnd", hi);
          return;
        }
        bi(),
          (ze = k.isRefreshing = !0),
          T.forEach(function (r) {
            return Ye(r) && ++r.cacheID && (r.rec = r());
          });
        var t = Ut("refreshInit");
        Zn && k.sort(),
          n || An(),
          T.forEach(function (r) {
            Ye(r) &&
              (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
          }),
          C.slice(0).forEach(function (r) {
            return r.refresh();
          }),
          C.forEach(function (r, i) {
            if (r._subPinOffset && r.pin) {
              var a = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
                l = r.pin[a];
              r.revert(!0, 1), r.adjustPinSpacing(r.pin[a] - l), r.refresh();
            }
          }),
          C.forEach(function (r) {
            var i = kt(r.scroller, r._dir);
            (r.vars.end === "max" || (r._endClamp && r.end > i)) &&
              r.setPositions(r.start, Math.max(r.start + 1, i), !0);
          }),
          t.forEach(function (r) {
            return r && r.render && r.render(-1);
          }),
          T.forEach(function (r) {
            Ye(r) &&
              (r.smooth &&
                requestAnimationFrame(function () {
                  return (r.target.style.scrollBehavior = "smooth");
                }),
              r.rec && r(r.rec));
          }),
          mi(xn, 1),
          Gr.pause(),
          Kt++,
          (ze = 2),
          Pt(2),
          C.forEach(function (r) {
            return Ye(r.vars.onRefresh) && r.vars.onRefresh(r);
          }),
          (ze = k.isRefreshing = !1),
          Ut("refresh");
      },
      In = 0,
      sn = 1,
      Yr,
      Pt = function (e) {
        if (!ze || e === 2) {
          (k.isUpdating = !0), Yr && Yr.update(0);
          var n = C.length,
            t = Fe(),
            r = t - Cn >= 50,
            i = n && C[0].scroll();
          if (
            ((sn = In > i ? -1 : 1),
            ze || (In = i),
            r &&
              (st && !Ur && t - st > 200 && ((st = 0), Ut("scrollEnd")),
              (qr = Cn),
              (Cn = t)),
            sn < 0)
          ) {
            for (Ie = n; Ie-- > 0; ) C[Ie] && C[Ie].update(0, r);
            sn = 1;
          } else for (Ie = 0; Ie < n; Ie++) C[Ie] && C[Ie].update(0, r);
          k.isUpdating = !1;
        }
        Ir = 0;
      },
      Fn = [
        ci,
        ui,
        En,
        kn,
        lt + Ar,
        lt + Dr,
        lt + Or,
        lt + Rr,
        "display",
        "flexShrink",
        "float",
        "zIndex",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRowStart",
        "gridRowEnd",
        "gridArea",
        "justifySelf",
        "alignSelf",
        "placeSelf",
        "order",
      ],
      ln = Fn.concat([
        Vt,
        qt,
        "boxSizing",
        "max" + dr,
        "max" + Pn,
        "position",
        lt,
        ne,
        ne + Or,
        ne + Dr,
        ne + Ar,
        ne + Rr,
      ]),
      Gi = function (e, n, t) {
        hr(t);
        var r = e._gsap;
        if (r.spacerIsNative) hr(r.spacerState);
        else if (e._gsap.swappedIn) {
          var i = n.parentNode;
          i && (i.insertBefore(e, n), i.removeChild(n));
        }
        e._gsap.swappedIn = !1;
      },
      Yn = function (e, n, t, r) {
        if (!e._gsap.swappedIn) {
          for (var i = Fn.length, a = n.style, l = e.style, f; i--; )
            (f = Fn[i]), (a[f] = t[f]);
          (a.position = t.position === "absolute" ? "absolute" : "relative"),
            t.display === "inline" && (a.display = "inline-block"),
            (l[En] = l[kn] = "auto"),
            (a.flexBasis = t.flexBasis || "auto"),
            (a.overflow = "visible"),
            (a.boxSizing = "border-box"),
            (a[Vt] = Mn(e, Ae) + be),
            (a[qt] = Mn(e, ue) + be),
            (a[ne] = l[lt] = l[ui] = l[ci] = "0"),
            hr(r),
            (l[Vt] = l["max" + dr] = t[Vt]),
            (l[qt] = l["max" + Pn] = t[qt]),
            (l[ne] = t[ne]),
            e.parentNode !== n &&
              (e.parentNode.insertBefore(n, e), n.appendChild(e)),
            (e._gsap.swappedIn = !0);
        }
      },
      Vi = /([A-Z])/g,
      hr = function (e) {
        if (e) {
          var n = e.t.style,
            t = e.length,
            r = 0,
            i,
            a;
          for ((e.t._gsap || p.core.getCache(e.t)).uncache = 1; r < t; r += 2)
            (a = e[r + 1]),
              (i = e[r]),
              a
                ? (n[i] = a)
                : n[i] && n.removeProperty(i.replace(Vi, "-$1").toLowerCase());
        }
      },
      an = function (e) {
        for (var n = ln.length, t = e.style, r = [], i = 0; i < n; i++)
          r.push(ln[i], t[ln[i]]);
        return (r.t = e), r;
      },
      qi = function (e, n, t) {
        for (var r = [], i = e.length, a = t ? 8 : 0, l; a < i; a += 2)
          (l = e[a]), r.push(l, l in n ? n[l] : e[a + 1]);
        return (r.t = e.t), r;
      },
      cn = {
        left: 0,
        top: 0,
      },
      wi = function (e, n, t, r, i, a, l, f, b, A, I, g, u, _) {
        Ye(e) && (e = e(f)),
          Qe(e) &&
            e.substr(0, 3) === "max" &&
            (e = g + (e.charAt(4) === "=" ? rn("0" + e.substr(3), t) : 0));
        var j = u ? u.time() : 0,
          W,
          fe,
          $;
        if ((u && u.seek(0), isNaN(e) || (e = +e), Jr(e)))
          u &&
            (e = p.utils.mapRange(
              u.scrollTrigger.start,
              u.scrollTrigger.end,
              0,
              g,
              e
            )),
            l && on(l, t, r, !0);
        else {
          Ye(n) && (n = n(f));
          var we = (e || "0").split(" "),
            S,
            ct,
            G,
            w;
          ($ = Ve(n, f) || H),
            (S = Et($) || {}),
            (!S || (!S.left && !S.top)) &&
              at($).display === "none" &&
              ((w = $.style.display),
              ($.style.display = "block"),
              (S = Et($)),
              w ? ($.style.display = w) : $.style.removeProperty("display")),
            (ct = rn(we[0], S[r.d])),
            (G = rn(we[1] || "0", t)),
            (e = S[r.p] - b[r.p] - A + ct + i - G),
            l && on(l, G, r, t - G < 20 || (l._isStart && G > 20)),
            (t -= t - G);
        }
        if ((_ && ((f[_] = e || -0.001), e < 0 && (e = 0)), a)) {
          var Le = e + t,
            qe = a._isStart;
          (W = "scroll" + r.d2),
            on(
              a,
              Le,
              r,
              (qe && Le > 20) ||
                (!qe && (I ? Math.max(H[W], pt[W]) : a.parentNode[W]) <= Le + 1)
            ),
            I &&
              ((b = Et(l)),
              I && (a.style[r.op.p] = b[r.op.p] - r.op.m - a._offset + be));
        }
        return (
          u &&
            $ &&
            ((W = Et($)),
            u.seek(g),
            (fe = Et($)),
            (u._caScrollDist = W[r.p] - fe[r.p]),
            (e = (e / u._caScrollDist) * g)),
          u && u.seek(j),
          u ? e : Math.round(e)
        );
      },
      $i = /(webkit|moz|length|cssText|inset)/i,
      xi = function (e, n, t, r) {
        if (e.parentNode !== n) {
          var i = e.style,
            a,
            l;
          if (n === H) {
            (e._stOrig = i.cssText), (l = at(e));
            for (a in l)
              !+a &&
                !$i.test(a) &&
                l[a] &&
                typeof i[a] == "string" &&
                a !== "0" &&
                (i[a] = l[a]);
            (i.top = t), (i.left = r);
          } else i.cssText = e._stOrig;
          (p.core.getCache(e).uncache = 1), n.appendChild(e);
        }
      },
      yi = function (e, n, t) {
        var r = n,
          i = r;
        return function (a) {
          var l = Math.round(e());
          return (
            l !== r &&
              l !== i &&
              Math.abs(l - r) > 3 &&
              Math.abs(l - i) > 3 &&
              ((a = l), t && t()),
            (i = r),
            (r = a),
            a
          );
        };
      },
      un = function (e, n, t) {
        var r = {};
        (r[n.p] = "+=" + t), p.set(e, r);
      },
      Si = function (e, n) {
        var t = Yt(e, n),
          r = "_scroll" + n.p2,
          i = function a(l, f, b, A, I) {
            var g = a.tween,
              u = f.onComplete,
              _ = {};
            b = b || t();
            var j = yi(t, b, function () {
              g.kill(), (a.tween = 0);
            });
            return (
              (I = (A && I) || 0),
              (A = A || l - b),
              g && g.kill(),
              (f[r] = l),
              (f.modifiers = _),
              (_[r] = function () {
                return j(b + A * g.ratio + I * g.ratio * g.ratio);
              }),
              (f.onUpdate = function () {
                T.cache++, Pt();
              }),
              (f.onComplete = function () {
                (a.tween = 0), u && u.call(g);
              }),
              (g = a.tween = p.to(e, f)),
              g
            );
          };
        return (
          (e[r] = t),
          (t.wheelHandler = function () {
            return i.tween && i.tween.kill() && (i.tween = 0);
          }),
          he(e, "wheel", t.wheelHandler),
          k.isTouch && he(e, "touchmove", t.wheelHandler),
          i
        );
      },
      k = (function () {
        function o(n, t) {
          ar ||
            o.register(p) ||
            console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            wn(this),
            this.init(n, t);
        }
        var e = o.prototype;
        return (
          (e.init = function (t, r) {
            if (
              ((this.progress = this.start = 0),
              this.vars && this.kill(!0, !0),
              !Er)
            ) {
              this.update = this.refresh = this.kill = wt;
              return;
            }
            t = fi(
              Qe(t) || Jr(t) || t.nodeType
                ? {
                    trigger: t,
                  }
                : t,
              en
            );
            var i = t,
              a = i.onUpdate,
              l = i.toggleClass,
              f = i.id,
              b = i.onToggle,
              A = i.onRefresh,
              I = i.scrub,
              g = i.trigger,
              u = i.pin,
              _ = i.pinSpacing,
              j = i.invalidateOnRefresh,
              W = i.anticipatePin,
              fe = i.onScrubComplete,
              $ = i.onSnapComplete,
              we = i.once,
              S = i.snap,
              ct = i.pinReparent,
              G = i.pinSpacer,
              w = i.containerAnimation,
              Le = i.fastScrollEnd,
              qe = i.preventOverlaps,
              h =
                t.horizontal || (t.containerAnimation && t.horizontal !== !1)
                  ? Ae
                  : ue,
              xe = !I && I !== 0,
              x = Ve(t.scroller || P),
              Mt = p.core.getCache(x),
              pe = Wt(x),
              Xe =
                ("pinType" in t
                  ? t.pinType
                  : Ft(x, "pinType") || (pe && "fixed")) === "fixed",
              Ne = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
              N = xe && t.toggleActions.split(" "),
              ie = "markers" in t ? t.markers : en.markers,
              oe = pe ? 0 : parseFloat(at(x)["border" + h.p2 + dr]) || 0,
              s = this,
              de =
                t.onRefreshInit &&
                function () {
                  return t.onRefreshInit(s);
                },
              Jt = zi(x, pe, h),
              Lt = Li(x, pe),
              ut = 0,
              Dt = 0,
              Be = 0,
              se = Yt(x, h),
              He,
              Ee,
              Xt,
              $e,
              xt,
              F,
              le,
              Ue,
              et,
              c,
              tt,
              Rt,
              Qt,
              ae,
              jt,
              er,
              zr,
              ye,
              ee,
              dt,
              gt,
              tr,
              Ot,
              yt,
              Ke,
              rr,
              _r,
              mr,
              nr,
              Nt,
              Bt,
              R,
              ir,
              ht,
              _t,
              mt,
              or,
              vr,
              At;
            if (
              ((s._startClamp = s._endClamp = !1),
              (s._dir = h),
              (W *= 45),
              (s.scroller = x),
              (s.scroll = w ? w.time.bind(w) : se),
              ($e = se()),
              (s.vars = t),
              (r = r || t.animation),
              "refreshPriority" in t &&
                ((Zn = 1), t.refreshPriority === -9999 && (Yr = s)),
              (Mt.tweenScroll = Mt.tweenScroll || {
                top: Si(x, ue),
                left: Si(x, Ae),
              }),
              (s.tweenTo = He = Mt.tweenScroll[h.p]),
              (s.scrubDuration = function (d) {
                (ir = Jr(d) && d),
                  ir
                    ? R
                      ? R.duration(d)
                      : (R = p.to(r, {
                          ease: "expo",
                          totalProgress: "+=0",
                          duration: ir,
                          paused: !0,
                          onComplete: function () {
                            return fe && fe(s);
                          },
                        }))
                    : (R && R.progress(1).kill(), (R = 0));
              }),
              r &&
                ((r.vars.lazy = !1),
                (r._initted && !s.isReverted) ||
                  (r.vars.immediateRender !== !1 &&
                    t.immediateRender !== !1 &&
                    r.duration() &&
                    r.render(0, !0, !0)),
                (s.animation = r.pause()),
                (r.scrollTrigger = s),
                s.scrubDuration(I),
                (Nt = 0),
                f || (f = r.vars.id)),
              S &&
                ((!Gt(S) || S.push) &&
                  (S = {
                    snapTo: S,
                  }),
                "scrollBehavior" in H.style &&
                  p.set(pe ? [H, pt] : x, {
                    scrollBehavior: "auto",
                  }),
                T.forEach(function (d) {
                  return (
                    Ye(d) &&
                    d.target === (pe ? q.scrollingElement || pt : x) &&
                    (d.smooth = !1)
                  );
                }),
                (Xt = Ye(S.snapTo)
                  ? S.snapTo
                  : S.snapTo === "labels"
                  ? Ni(r)
                  : S.snapTo === "labelsDirectional"
                  ? Bi(r)
                  : S.directional !== !1
                  ? function (d, D) {
                      return Dn(S.snapTo)(d, Fe() - Dt < 500 ? 0 : D.direction);
                    }
                  : p.utils.snap(S.snapTo)),
                (ht = S.duration || {
                  min: 0.1,
                  max: 2,
                }),
                (ht = Gt(ht) ? cr(ht.min, ht.max) : cr(ht, ht)),
                (_t = p
                  .delayedCall(S.delay || ir / 2 || 0.1, function () {
                    var d = se(),
                      D = Fe() - Dt < 500,
                      v = He.tween;
                    if (
                      (D || Math.abs(s.getVelocity()) < 10) &&
                      !v &&
                      !Ur &&
                      ut !== d
                    ) {
                      var E = (d - F) / ae,
                        me = r && !xe ? r.totalProgress() : E,
                        O = D ? 0 : ((me - Bt) / (Fe() - qr)) * 1e3 || 0,
                        te = p.utils.clamp(-E, 1 - E, (pr(O / 2) * O) / 0.185),
                        We = E + (S.inertia === !1 ? 0 : te),
                        Se = cr(0, 1, Xt(We, s)),
                        U = Math.round(F + Se * ae),
                        B = S,
                        vt = B.onStart,
                        K = B.onInterrupt,
                        rt = B.onComplete;
                      if (d <= le && d >= F && U !== d) {
                        if (v && !v._initted && v.data <= pr(U - d)) return;
                        S.inertia === !1 && (te = Se - E),
                          He(
                            U,
                            {
                              duration: ht(
                                pr(
                                  (Math.max(pr(We - me), pr(Se - me)) * 0.185) /
                                    O /
                                    0.05 || 0
                                )
                              ),
                              ease: S.ease || "power3",
                              data: pr(U - d),
                              onInterrupt: function () {
                                return _t.restart(!0) && K && K(s);
                              },
                              onComplete: function () {
                                s.update(),
                                  (ut = se()),
                                  (Nt = Bt =
                                    r && !xe ? r.totalProgress() : s.progress),
                                  $ && $(s),
                                  rt && rt(s);
                              },
                            },
                            d,
                            te * ae,
                            U - d - te * ae
                          ),
                          vt && vt(s, He.tween);
                      }
                    } else s.isActive && ut !== d && _t.restart(!0);
                  })
                  .pause())),
              f && (Rn[f] = s),
              (g = s.trigger = Ve(g || (u !== !0 && u))),
              (At = g && g._gsap && g._gsap.stRevert),
              At && (At = At(s)),
              (u = u === !0 ? g : Ve(u)),
              Qe(l) &&
                (l = {
                  targets: g,
                  className: l,
                }),
              u &&
                (_ === !1 ||
                  _ === lt ||
                  (_ =
                    !_ &&
                    u.parentNode &&
                    u.parentNode.style &&
                    at(u.parentNode).display === "flex"
                      ? !1
                      : ne),
                (s.pin = u),
                (Ee = p.core.getCache(u)),
                Ee.spacer
                  ? (jt = Ee.pinState)
                  : (G &&
                      ((G = Ve(G)),
                      G && !G.nodeType && (G = G.current || G.nativeElement),
                      (Ee.spacerIsNative = !!G),
                      G && (Ee.spacerState = an(G))),
                    (Ee.spacer = ye = G || q.createElement("div")),
                    ye.classList.add("pin-spacer"),
                    f && ye.classList.add("pin-spacer-" + f),
                    (Ee.pinState = jt = an(u))),
                t.force3D !== !1 &&
                  p.set(u, {
                    force3D: !0,
                  }),
                (s.spacer = ye = Ee.spacer),
                (nr = at(u)),
                (yt = nr[_ + h.os2]),
                (dt = p.getProperty(u)),
                (gt = p.quickSetter(u, h.a, be)),
                Yn(u, ye, nr),
                (zr = an(u))),
              ie)
            ) {
              (Rt = Gt(ie) ? fi(ie, di) : di),
                (c = nn("scroller-start", f, x, h, Rt, 0)),
                (tt = nn("scroller-end", f, x, h, Rt, 0, c)),
                (ee = c["offset" + h.op.d2]);
              var y = Ve(Ft(x, "content") || x);
              (Ue = this.markerStart = nn("start", f, y, h, Rt, ee, 0, w)),
                (et = this.markerEnd = nn("end", f, y, h, Rt, ee, 0, w)),
                w && (vr = p.quickSetter([Ue, et], h.a, be)),
                !Xe &&
                  !(bt.length && Ft(x, "fixedMarkers") === !0) &&
                  (Xi(pe ? H : x),
                  p.set([c, tt], {
                    force3D: !0,
                  }),
                  (rr = p.quickSetter(c, h.a, be)),
                  (mr = p.quickSetter(tt, h.a, be)));
            }
            if (w) {
              var m = w.vars.onUpdate,
                Y = w.vars.onUpdateParams;
              w.eventCallback("onUpdate", function () {
                s.update(0, 0, 1), m && m.apply(w, Y || []);
              });
            }
            if (
              ((s.previous = function () {
                return C[C.indexOf(s) - 1];
              }),
              (s.next = function () {
                return C[C.indexOf(s) + 1];
              }),
              (s.revert = function (d, D) {
                if (!D) return s.kill(!0);
                var v = d !== !1 || !s.enabled,
                  E = ke;
                v !== s.isReverted &&
                  (v &&
                    ((mt = Math.max(se(), s.scroll.rec || 0)),
                    (Be = s.progress),
                    (or = r && r.progress())),
                  Ue &&
                    [Ue, et, c, tt].forEach(function (me) {
                      return (me.style.display = v ? "none" : "block");
                    }),
                  v && ((ke = s), s.update(v)),
                  u &&
                    (!ct || !s.isActive) &&
                    (v ? Gi(u, ye, jt) : Yn(u, ye, at(u), Ke)),
                  v || s.update(v),
                  (ke = E),
                  (s.isReverted = v));
              }),
              (s.refresh = function (d, D, v, E) {
                if (!((ke || !s.enabled) && !D)) {
                  if (u && d && st) {
                    he(o, "scrollEnd", hi);
                    return;
                  }
                  !ze && de && de(s),
                    (ke = s),
                    He.tween && !v && (He.tween.kill(), (He.tween = 0)),
                    R && R.pause(),
                    j &&
                      r &&
                      r
                        .revert({
                          kill: !1,
                        })
                        .invalidate(),
                    s.isReverted || s.revert(!0, !0),
                    (s._subPinOffset = !1);
                  var me = Jt(),
                    O = Lt(),
                    te = w ? w.duration() : kt(x, h),
                    We = ae <= 0.01,
                    Se = 0,
                    U = E || 0,
                    B = Gt(v) ? v.end : t.end,
                    vt = t.endTrigger || g,
                    K = Gt(v)
                      ? v.start
                      : t.start ||
                        (t.start === 0 || !g ? 0 : u ? "0 0" : "0 100%"),
                    rt = (s.pinnedContainer =
                      t.pinnedContainer && Ve(t.pinnedContainer, s)),
                    St = (g && Math.max(0, C.indexOf(s))) || 0,
                    nt = St,
                    Ce,
                    Pe,
                    sr,
                    pn,
                    Me,
                    ge,
                    Ct,
                    Ln,
                    Pi,
                    Lr,
                    Tt,
                    Xr,
                    dn;
                  for (
                    ie &&
                    Gt(v) &&
                    ((Xr = p.getProperty(c, h.p)),
                    (dn = p.getProperty(tt, h.p)));
                    nt--;

                  )
                    (ge = C[nt]),
                      ge.end || ge.refresh(0, 1) || (ke = s),
                      (Ct = ge.pin),
                      Ct &&
                        (Ct === g || Ct === u || Ct === rt) &&
                        !ge.isReverted &&
                        (Lr || (Lr = []), Lr.unshift(ge), ge.revert(!0, !0)),
                      ge !== C[nt] && (St--, nt--);
                  for (
                    Ye(K) && (K = K(s)),
                      K = ti(K, "start", s),
                      F =
                        wi(
                          K,
                          g,
                          me,
                          h,
                          se(),
                          Ue,
                          c,
                          s,
                          O,
                          oe,
                          Xe,
                          te,
                          w,
                          s._startClamp && "_startClamp"
                        ) || (u ? -0.001 : 0),
                      Ye(B) && (B = B(s)),
                      Qe(B) &&
                        !B.indexOf("+=") &&
                        (~B.indexOf(" ")
                          ? (B = (Qe(K) ? K.split(" ")[0] : "") + B)
                          : ((Se = rn(B.substr(2), me)),
                            (B = Qe(K)
                              ? K
                              : (w
                                  ? p.utils.mapRange(
                                      0,
                                      w.duration(),
                                      w.scrollTrigger.start,
                                      w.scrollTrigger.end,
                                      F
                                    )
                                  : F) + Se),
                            (vt = g))),
                      B = ti(B, "end", s),
                      le =
                        Math.max(
                          F,
                          wi(
                            B || (vt ? "100% 0" : te),
                            vt,
                            me,
                            h,
                            se() + Se,
                            et,
                            tt,
                            s,
                            O,
                            oe,
                            Xe,
                            te,
                            w,
                            s._endClamp && "_endClamp"
                          )
                        ) || -0.001,
                      Se = 0,
                      nt = St;
                    nt--;

                  )
                    (ge = C[nt]),
                      (Ct = ge.pin),
                      Ct &&
                        ge.start - ge._pinPush <= F &&
                        !w &&
                        ge.end > 0 &&
                        ((Ce =
                          ge.end -
                          (s._startClamp ? Math.max(0, ge.start) : ge.start)),
                        ((Ct === g && ge.start - ge._pinPush < F) ||
                          Ct === rt) &&
                          isNaN(K) &&
                          (Se += Ce * (1 - ge.progress)),
                        Ct === u && (U += Ce));
                  if (
                    ((F += Se),
                    (le += Se),
                    s._startClamp && (s._startClamp += Se),
                    s._endClamp &&
                      !ze &&
                      ((s._endClamp = le || -0.001),
                      (le = Math.min(le, kt(x, h)))),
                    (ae = le - F || ((F -= 0.01) && 0.001)),
                    We &&
                      (Be = p.utils.clamp(0, 1, p.utils.normalize(F, le, mt))),
                    (s._pinPush = U),
                    Ue &&
                      Se &&
                      ((Ce = {}),
                      (Ce[h.a] = "+=" + Se),
                      rt && (Ce[h.p] = "-=" + se()),
                      p.set([Ue, et], Ce)),
                    u)
                  )
                    (Ce = at(u)),
                      (pn = h === ue),
                      (sr = se()),
                      (tr = parseFloat(dt(h.a)) + U),
                      !te &&
                        le > 1 &&
                        ((Tt = (pe ? q.scrollingElement || pt : x).style),
                        (Tt = {
                          style: Tt,
                          value: Tt["overflow" + h.a.toUpperCase()],
                        }),
                        pe &&
                          at(H)["overflow" + h.a.toUpperCase()] !== "scroll" &&
                          (Tt.style["overflow" + h.a.toUpperCase()] =
                            "scroll")),
                      Yn(u, ye, Ce),
                      (zr = an(u)),
                      (Pe = Et(u, !0)),
                      (Ln = Xe && Yt(x, pn ? Ae : ue)()),
                      _ &&
                        ((Ke = [_ + h.os2, ae + U + be]),
                        (Ke.t = ye),
                        (nt = _ === ne ? Mn(u, h) + ae + U : 0),
                        nt && Ke.push(h.d, nt + be),
                        hr(Ke),
                        rt &&
                          C.forEach(function (Nr) {
                            Nr.pin === rt &&
                              Nr.vars.pinSpacing !== !1 &&
                              (Nr._subPinOffset = !0);
                          }),
                        Xe && se(mt)),
                      Xe &&
                        ((Me = {
                          top: Pe.top + (pn ? sr - F : Ln) + be,
                          left: Pe.left + (pn ? Ln : sr - F) + be,
                          boxSizing: "border-box",
                          position: "fixed",
                        }),
                        (Me[Vt] = Me["max" + dr] = Math.ceil(Pe.width) + be),
                        (Me[qt] = Me["max" + Pn] = Math.ceil(Pe.height) + be),
                        (Me[lt] =
                          Me[lt + Or] =
                          Me[lt + Dr] =
                          Me[lt + Ar] =
                          Me[lt + Rr] =
                            "0"),
                        (Me[ne] = Ce[ne]),
                        (Me[ne + Or] = Ce[ne + Or]),
                        (Me[ne + Dr] = Ce[ne + Dr]),
                        (Me[ne + Ar] = Ce[ne + Ar]),
                        (Me[ne + Rr] = Ce[ne + Rr]),
                        (er = qi(jt, Me, ct)),
                        ze && se(0)),
                      r
                        ? ((Pi = r._initted),
                          bn(1),
                          r.render(r.duration(), !0, !0),
                          (Ot = dt(h.a) - tr + ae + U),
                          (_r = Math.abs(ae - Ot) > 1),
                          Xe && _r && er.splice(er.length - 2, 2),
                          r.render(0, !0, !0),
                          Pi || r.invalidate(!0),
                          r.parent || r.totalTime(r.totalTime()),
                          bn(0))
                        : (Ot = ae),
                      Tt &&
                        (Tt.value
                          ? (Tt.style["overflow" + h.a.toUpperCase()] =
                              Tt.value)
                          : Tt.style.removeProperty("overflow-" + h.a));
                  else if (g && se() && !w)
                    for (Pe = g.parentNode; Pe && Pe !== H; )
                      Pe._pinOffset &&
                        ((F -= Pe._pinOffset), (le -= Pe._pinOffset)),
                        (Pe = Pe.parentNode);
                  Lr &&
                    Lr.forEach(function (Nr) {
                      return Nr.revert(!1, !0);
                    }),
                    (s.start = F),
                    (s.end = le),
                    ($e = xt = ze ? mt : se()),
                    !w && !ze && ($e < mt && se(mt), (s.scroll.rec = 0)),
                    s.revert(!1, !0),
                    (Dt = Fe()),
                    _t && ((ut = -1), _t.restart(!0)),
                    (ke = 0),
                    r &&
                      xe &&
                      (r._initted || or) &&
                      r.progress() !== or &&
                      r.progress(or || 0, !0).render(r.time(), !0, !0),
                    (We || Be !== s.progress || w) &&
                      (r &&
                        !xe &&
                        r.totalProgress(
                          w && F < -0.001 && !Be
                            ? p.utils.normalize(F, le, 0)
                            : Be,
                          !0
                        ),
                      (s.progress = We || ($e - F) / ae === Be ? 0 : Be)),
                    u && _ && (ye._pinOffset = Math.round(s.progress * Ot)),
                    R && R.invalidate(),
                    isNaN(Xr) ||
                      ((Xr -= p.getProperty(c, h.p)),
                      (dn -= p.getProperty(tt, h.p)),
                      un(c, h, Xr),
                      un(Ue, h, Xr - (E || 0)),
                      un(tt, h, dn),
                      un(et, h, dn - (E || 0))),
                    We && !ze && s.update(),
                    A && !ze && !Qt && ((Qt = !0), A(s), (Qt = !1));
                }
              }),
              (s.getVelocity = function () {
                return ((se() - xt) / (Fe() - qr)) * 1e3 || 0;
              }),
              (s.endAnimation = function () {
                Mr(s.callbackAnimation),
                  r &&
                    (R
                      ? R.progress(1)
                      : r.paused()
                      ? xe || Mr(r, s.direction < 0, 1)
                      : Mr(r, r.reversed()));
              }),
              (s.labelToScroll = function (d) {
                return (
                  (r &&
                    r.labels &&
                    (F || s.refresh() || F) +
                      (r.labels[d] / r.duration()) * ae) ||
                  0
                );
              }),
              (s.getTrailing = function (d) {
                var D = C.indexOf(s),
                  v =
                    s.direction > 0 ? C.slice(0, D).reverse() : C.slice(D + 1);
                return (
                  Qe(d)
                    ? v.filter(function (E) {
                        return E.vars.preventOverlaps === d;
                      })
                    : v
                ).filter(function (E) {
                  return s.direction > 0 ? E.end <= F : E.start >= le;
                });
              }),
              (s.update = function (d, D, v) {
                if (!(w && !v && !d)) {
                  var E = ze === !0 ? mt : s.scroll(),
                    me = d ? 0 : (E - F) / ae,
                    O = me < 0 ? 0 : me > 1 ? 1 : me || 0,
                    te = s.progress,
                    We,
                    Se,
                    U,
                    B,
                    vt,
                    K,
                    rt,
                    St;
                  if (
                    (D &&
                      ((xt = $e),
                      ($e = w ? se() : E),
                      S &&
                        ((Bt = Nt), (Nt = r && !xe ? r.totalProgress() : O))),
                    W &&
                      !O &&
                      u &&
                      !ke &&
                      !Kr &&
                      st &&
                      F < E + ((E - xt) / (Fe() - qr)) * W &&
                      (O = 1e-4),
                    O !== te && s.enabled)
                  ) {
                    if (
                      ((We = s.isActive = !!O && O < 1),
                      (Se = !!te && te < 1),
                      (K = We !== Se),
                      (vt = K || !!O != !!te),
                      (s.direction = O > te ? 1 : -1),
                      (s.progress = O),
                      vt &&
                        !ke &&
                        ((U = O && !te ? 0 : O === 1 ? 1 : te === 1 ? 2 : 3),
                        xe &&
                          ((B =
                            (!K && N[U + 1] !== "none" && N[U + 1]) || N[U]),
                          (St =
                            r &&
                            (B === "complete" || B === "reset" || B in r)))),
                      qe &&
                        (K || St) &&
                        (St || I || !r) &&
                        (Ye(qe)
                          ? qe(s)
                          : s.getTrailing(qe).forEach(function (sr) {
                              return sr.endAnimation();
                            })),
                      xe ||
                        (R && !ke && !Kr
                          ? (R._dp._time - R._start !== R._time &&
                              R.render(R._dp._time - R._start),
                            R.resetTo
                              ? R.resetTo(
                                  "totalProgress",
                                  O,
                                  r._tTime / r._tDur
                                )
                              : ((R.vars.totalProgress = O),
                                R.invalidate().restart()))
                          : r && r.totalProgress(O, !!(ke && (Dt || d)))),
                      u)
                    ) {
                      if ((d && _ && (ye.style[_ + h.os2] = yt), !Xe))
                        gt(Pr(tr + Ot * O));
                      else if (vt) {
                        if (
                          ((rt =
                            !d && O > te && le + 1 > E && E + 1 >= kt(x, h)),
                          ct)
                        )
                          if (!d && (We || rt)) {
                            var nt = Et(u, !0),
                              Ce = E - F;
                            xi(
                              u,
                              H,
                              nt.top + (h === ue ? Ce : 0) + be,
                              nt.left + (h === ue ? 0 : Ce) + be
                            );
                          } else xi(u, ye);
                        hr(We || rt ? er : zr),
                          (_r && O < 1 && We) ||
                            gt(tr + (O === 1 && !rt ? Ot : 0));
                      }
                    }
                    S && !He.tween && !ke && !Kr && _t.restart(!0),
                      l &&
                        (K || (we && O && (O < 1 || !Sn))) &&
                        Vr(l.targets).forEach(function (sr) {
                          return sr.classList[We || we ? "add" : "remove"](
                            l.className
                          );
                        }),
                      a && !xe && !d && a(s),
                      vt && !ke
                        ? (xe &&
                            (St &&
                              (B === "complete"
                                ? r.pause().totalProgress(1)
                                : B === "reset"
                                ? r.restart(!0).pause()
                                : B === "restart"
                                ? r.restart(!0)
                                : r[B]()),
                            a && a(s)),
                          (K || !Sn) &&
                            (b && K && Tn(s, b),
                            Ne[U] && Tn(s, Ne[U]),
                            we && (O === 1 ? s.kill(!1, 1) : (Ne[U] = 0)),
                            K ||
                              ((U = O === 1 ? 1 : 3), Ne[U] && Tn(s, Ne[U]))),
                          Le &&
                            !We &&
                            Math.abs(s.getVelocity()) > (Jr(Le) ? Le : 2500) &&
                            (Mr(s.callbackAnimation),
                            R
                              ? R.progress(1)
                              : Mr(r, B === "reverse" ? 1 : !O, 1)))
                        : xe && a && !ke && a(s);
                  }
                  if (mr) {
                    var Pe = w
                      ? (E / w.duration()) * (w._caScrollDist || 0)
                      : E;
                    rr(Pe + (c._isFlipped ? 1 : 0)), mr(Pe);
                  }
                  vr && vr((-E / w.duration()) * (w._caScrollDist || 0));
                }
              }),
              (s.enable = function (d, D) {
                s.enabled ||
                  ((s.enabled = !0),
                  he(x, "resize", Fr),
                  pe || he(x, "scroll", gr),
                  de && he(o, "refreshInit", de),
                  d !== !1 && ((s.progress = Be = 0), ($e = xt = ut = se())),
                  D !== !1 && s.refresh());
              }),
              (s.getTween = function (d) {
                return d && He ? He.tween : R;
              }),
              (s.setPositions = function (d, D, v, E) {
                if (w) {
                  var me = w.scrollTrigger,
                    O = w.duration(),
                    te = me.end - me.start;
                  (d = me.start + (te * d) / O), (D = me.start + (te * D) / O);
                }
                s.refresh(
                  !1,
                  !1,
                  {
                    start: ri(d, v && !!s._startClamp),
                    end: ri(D, v && !!s._endClamp),
                  },
                  E
                ),
                  s.update();
              }),
              (s.adjustPinSpacing = function (d) {
                if (Ke && d) {
                  var D = Ke.indexOf(h.d) + 1;
                  (Ke[D] = parseFloat(Ke[D]) + d + be),
                    (Ke[1] = parseFloat(Ke[1]) + d + be),
                    hr(Ke);
                }
              }),
              (s.disable = function (d, D) {
                if (
                  s.enabled &&
                  (d !== !1 && s.revert(!0, !0),
                  (s.enabled = s.isActive = !1),
                  D || (R && R.pause()),
                  (mt = 0),
                  Ee && (Ee.uncache = 1),
                  de && _e(o, "refreshInit", de),
                  _t &&
                    (_t.pause(), He.tween && He.tween.kill() && (He.tween = 0)),
                  !pe)
                ) {
                  for (var v = C.length; v--; )
                    if (C[v].scroller === x && C[v] !== s) return;
                  _e(x, "resize", Fr), pe || _e(x, "scroll", gr);
                }
              }),
              (s.kill = function (d, D) {
                s.disable(d, D), R && !D && R.kill(), f && delete Rn[f];
                var v = C.indexOf(s);
                v >= 0 && C.splice(v, 1),
                  v === Ie && sn > 0 && Ie--,
                  (v = 0),
                  C.forEach(function (E) {
                    return E.scroller === s.scroller && (v = 1);
                  }),
                  v || ze || (s.scroll.rec = 0),
                  r &&
                    ((r.scrollTrigger = null),
                    d &&
                      r.revert({
                        kill: !1,
                      }),
                    D || r.kill()),
                  Ue &&
                    [Ue, et, c, tt].forEach(function (E) {
                      return E.parentNode && E.parentNode.removeChild(E);
                    }),
                  Yr === s && (Yr = 0),
                  u &&
                    (Ee && (Ee.uncache = 1),
                    (v = 0),
                    C.forEach(function (E) {
                      return E.pin === u && v++;
                    }),
                    v || (Ee.spacer = 0)),
                  t.onKill && t.onKill(s);
              }),
              C.push(s),
              s.enable(!1, !1),
              At && At(s),
              r && r.add && !ae)
            ) {
              var J = s.update;
              (s.update = function () {
                (s.update = J), F || le || s.refresh();
              }),
                p.delayedCall(0.01, s.update),
                (ae = 0.01),
                (F = le = 0);
            } else s.refresh();
            u && Wi();
          }),
          (o.register = function (t) {
            return (
              ar ||
                ((p = t || si()),
                oi() && window.document && o.enable(),
                (ar = Er)),
              ar
            );
          }),
          (o.defaults = function (t) {
            if (t) for (var r in t) en[r] = t[r];
            return en;
          }),
          (o.disable = function (t, r) {
            (Er = 0),
              C.forEach(function (a) {
                return a[r ? "kill" : "disable"](t);
              }),
              _e(P, "wheel", gr),
              _e(q, "scroll", gr),
              clearInterval($r),
              _e(q, "touchcancel", wt),
              _e(H, "touchstart", wt),
              Qr(_e, q, "pointerdown,touchstart,mousedown", ni),
              Qr(_e, q, "pointerup,touchend,mouseup", ii),
              Gr.kill(),
              Zr(_e);
            for (var i = 0; i < T.length; i += 3)
              jr(_e, T[i], T[i + 1]), jr(_e, T[i], T[i + 2]);
          }),
          (o.enable = function () {
            if (
              ((P = window),
              (q = document),
              (pt = q.documentElement),
              (H = q.body),
              p &&
                ((Vr = p.utils.toArray),
                (cr = p.utils.clamp),
                (wn = p.core.context || wt),
                (bn = p.core.suppressOverwrites || wt),
                (xn = P.history.scrollRestoration || "auto"),
                (In = P.pageYOffset),
                p.core.globals("ScrollTrigger", o),
                H))
            ) {
              (Er = 1),
                (fr = document.createElement("div")),
                (fr.style.height = "100vh"),
                (fr.style.position = "absolute"),
                bi(),
                Yi(),
                re.register(p),
                (o.isTouch = re.isTouch),
                (zt =
                  re.isTouch &&
                  /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                he(P, "wheel", gr),
                ($n = [P, q, pt, H]),
                p.matchMedia
                  ? ((o.matchMedia = function (f) {
                      var b = p.matchMedia(),
                        A;
                      for (A in f) b.add(A, f[A]);
                      return b;
                    }),
                    p.addEventListener("matchMediaInit", function () {
                      return An();
                    }),
                    p.addEventListener("matchMediaRevert", function () {
                      return _i();
                    }),
                    p.addEventListener("matchMedia", function () {
                      Zt(0, 1), Ut("matchMedia");
                    }),
                    p.matchMedia("(orientation: portrait)", function () {
                      return On(), On;
                    }))
                  : console.warn("Requires GSAP 3.11.0 or later"),
                On(),
                he(q, "scroll", gr);
              var t = H.style,
                r = t.borderTopStyle,
                i = p.core.Animation.prototype,
                a,
                l;
              for (
                i.revert ||
                  Object.defineProperty(i, "revert", {
                    value: function () {
                      return this.time(-0.01, !0);
                    },
                  }),
                  t.borderTopStyle = "solid",
                  a = Et(H),
                  ue.m = Math.round(a.top + ue.sc()) || 0,
                  Ae.m = Math.round(a.left + Ae.sc()) || 0,
                  r
                    ? (t.borderTopStyle = r)
                    : t.removeProperty("border-top-style"),
                  $r = setInterval(gi, 250),
                  p.delayedCall(0.5, function () {
                    return (Kr = 0);
                  }),
                  he(q, "touchcancel", wt),
                  he(H, "touchstart", wt),
                  Qr(he, q, "pointerdown,touchstart,mousedown", ni),
                  Qr(he, q, "pointerup,touchend,mouseup", ii),
                  vn = p.utils.checkPrefix("transform"),
                  ln.push(vn),
                  ar = Fe(),
                  Gr = p.delayedCall(0.2, Zt).pause(),
                  ur = [
                    q,
                    "visibilitychange",
                    function () {
                      var f = P.innerWidth,
                        b = P.innerHeight;
                      q.hidden
                        ? ((Un = f), (Kn = b))
                        : (Un !== f || Kn !== b) && Fr();
                    },
                    q,
                    "DOMContentLoaded",
                    Zt,
                    P,
                    "load",
                    Zt,
                    P,
                    "resize",
                    Fr,
                  ],
                  Zr(he),
                  C.forEach(function (f) {
                    return f.enable(0, 1);
                  }),
                  l = 0;
                l < T.length;
                l += 3
              )
                jr(_e, T[l], T[l + 1]), jr(_e, T[l], T[l + 2]);
            }
          }),
          (o.config = function (t) {
            "limitCallbacks" in t && (Sn = !!t.limitCallbacks);
            var r = t.syncInterval;
            (r && clearInterval($r)) || (($r = r) && setInterval(gi, r)),
              "ignoreMobileResize" in t &&
                (Qn = o.isTouch === 1 && t.ignoreMobileResize),
              "autoRefreshEvents" in t &&
                (Zr(_e) || Zr(he, t.autoRefreshEvents || "none"),
                (Jn = (t.autoRefreshEvents + "").indexOf("resize") === -1));
          }),
          (o.scrollerProxy = function (t, r) {
            var i = Ve(t),
              a = T.indexOf(i),
              l = Wt(i);
            ~a && T.splice(a, l ? 6 : 2),
              r && (l ? bt.unshift(P, r, H, r, pt, r) : bt.unshift(i, r));
          }),
          (o.clearMatchMedia = function (t) {
            C.forEach(function (r) {
              return r._ctx && r._ctx.query === t && r._ctx.kill(!0, !0);
            });
          }),
          (o.isInViewport = function (t, r, i) {
            var a = (Qe(t) ? Ve(t) : t).getBoundingClientRect(),
              l = a[i ? Vt : qt] * r || 0;
            return i
              ? a.right - l > 0 && a.left + l < P.innerWidth
              : a.bottom - l > 0 && a.top + l < P.innerHeight;
          }),
          (o.positionInViewport = function (t, r, i) {
            Qe(t) && (t = Ve(t));
            var a = t.getBoundingClientRect(),
              l = a[i ? Vt : qt],
              f =
                r == null
                  ? l / 2
                  : r in tn
                  ? tn[r] * l
                  : ~r.indexOf("%")
                  ? (parseFloat(r) * l) / 100
                  : parseFloat(r) || 0;
            return i
              ? (a.left + f) / P.innerWidth
              : (a.top + f) / P.innerHeight;
          }),
          (o.killAll = function (t) {
            if (
              (C.slice(0).forEach(function (i) {
                return i.vars.id !== "ScrollSmoother" && i.kill();
              }),
              t !== !0)
            ) {
              var r = $t.killAll || [];
              ($t = {}),
                r.forEach(function (i) {
                  return i();
                });
            }
          }),
          o
        );
      })();
    (k.version = "3.12.2"),
      (k.saveStyles = function (o) {
        return o
          ? Vr(o).forEach(function (e) {
              if (e && e.style) {
                var n = je.indexOf(e);
                n >= 0 && je.splice(n, 5),
                  je.push(
                    e,
                    e.style.cssText,
                    e.getBBox && e.getAttribute("transform"),
                    p.core.getCache(e),
                    wn()
                  );
              }
            })
          : je;
      }),
      (k.revert = function (o, e) {
        return An(!o, e);
      }),
      (k.create = function (o, e) {
        return new k(o, e);
      }),
      (k.refresh = function (o) {
        return o ? Fr() : (ar || k.register()) && Zt(!0);
      }),
      (k.update = function (o) {
        return ++T.cache && Pt(o === !0 ? 2 : 0);
      }),
      (k.clearScrollMemory = mi),
      (k.maxScroll = function (o, e) {
        return kt(o, e ? Ae : ue);
      }),
      (k.getScrollFunc = function (o, e) {
        return Yt(Ve(o), e ? Ae : ue);
      }),
      (k.getById = function (o) {
        return Rn[o];
      }),
      (k.getAll = function () {
        return C.filter(function (o) {
          return o.vars.id !== "ScrollSmoother";
        });
      }),
      (k.isScrolling = function () {
        return !!st;
      }),
      (k.snapDirectional = Dn),
      (k.addEventListener = function (o, e) {
        var n = $t[o] || ($t[o] = []);
        ~n.indexOf(e) || n.push(e);
      }),
      (k.removeEventListener = function (o, e) {
        var n = $t[o],
          t = n && n.indexOf(e);
        t >= 0 && n.splice(t, 1);
      }),
      (k.batch = function (o, e) {
        var n = [],
          t = {},
          r = e.interval || 0.016,
          i = e.batchMax || 1e9,
          a = function (b, A) {
            var I = [],
              g = [],
              u = p
                .delayedCall(r, function () {
                  A(I, g), (I = []), (g = []);
                })
                .pause();
            return function (_) {
              I.length || u.restart(!0),
                I.push(_.trigger),
                g.push(_),
                i <= I.length && u.progress(1);
            };
          },
          l;
        for (l in e)
          t[l] =
            l.substr(0, 2) === "on" && Ye(e[l]) && l !== "onRefreshInit"
              ? a(l, e[l])
              : e[l];
        return (
          Ye(i) &&
            ((i = i()),
            he(k, "refresh", function () {
              return (i = e.batchMax());
            })),
          Vr(o).forEach(function (f) {
            var b = {};
            for (l in t) b[l] = t[l];
            (b.trigger = f), n.push(k.create(b));
          }),
          n
        );
      });
    var Ci = function (e, n, t, r) {
        return (
          n > r ? e(r) : n < 0 && e(0),
          t > r ? (r - n) / (t - n) : t < 0 ? n / (n - t) : 1
        );
      },
      zn = function o(e, n) {
        n === !0
          ? e.style.removeProperty("touch-action")
          : (e.style.touchAction =
              n === !0
                ? "auto"
                : n
                ? "pan-" + n + (re.isTouch ? " pinch-zoom" : "")
                : "none"),
          e === pt && o(H, n);
      },
      fn = {
        auto: 1,
        scroll: 1,
      },
      Ui = function (e) {
        var n = e.event,
          t = e.target,
          r = e.axis,
          i = (n.changedTouches ? n.changedTouches[0] : n).target,
          a = i._gsap || p.core.getCache(i),
          l = Fe(),
          f;
        if (!a._isScrollT || l - a._isScrollT > 2e3) {
          for (
            ;
            i &&
            i !== H &&
            ((i.scrollHeight <= i.clientHeight &&
              i.scrollWidth <= i.clientWidth) ||
              !(fn[(f = at(i)).overflowY] || fn[f.overflowX]));

          )
            i = i.parentNode;
          (a._isScroll =
            i &&
            i !== t &&
            !Wt(i) &&
            (fn[(f = at(i)).overflowY] || fn[f.overflowX])),
            (a._isScrollT = l);
        }
        (a._isScroll || r === "x") &&
          (n.stopPropagation(), (n._gsapAllow = !0));
      },
      Ti = function (e, n, t, r) {
        return re.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: n,
          onWheel: (r = r && Ui),
          onPress: r,
          onDrag: r,
          onScroll: r,
          onEnable: function () {
            return t && he(q, re.eventTypes[0], Ei, !1, !0);
          },
          onDisable: function () {
            return _e(q, re.eventTypes[0], Ei, !0);
          },
        });
      },
      Ki = /(input|label|select|textarea)/i,
      ki,
      Ei = function (e) {
        var n = Ki.test(e.target.tagName);
        (n || ki) && ((e._gsapAllow = !0), (ki = n));
      },
      Zi = function (e) {
        Gt(e) || (e = {}),
          (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
          e.type || (e.type = "wheel,touch"),
          (e.debounce = !!e.debounce),
          (e.id = e.id || "normalizer");
        var n = e,
          t = n.normalizeScrollX,
          r = n.momentum,
          i = n.allowNestedScroll,
          a = n.onRelease,
          l,
          f,
          b = Ve(e.target) || pt,
          A = p.core.globals().ScrollSmoother,
          I = A && A.get(),
          g =
            zt &&
            ((e.content && Ve(e.content)) ||
              (I && e.content !== !1 && !I.smooth() && I.content())),
          u = Yt(b, ue),
          _ = Yt(b, Ae),
          j = 1,
          W =
            (re.isTouch && P.visualViewport
              ? P.visualViewport.scale * P.visualViewport.width
              : P.outerWidth) / P.innerWidth,
          fe = 0,
          $ = Ye(r)
            ? function () {
                return r(l);
              }
            : function () {
                return r || 2.8;
              },
          we,
          S,
          ct = Ti(b, e.type, !0, i),
          G = function () {
            return (S = !1);
          },
          w = wt,
          Le = wt,
          qe = function () {
            (f = kt(b, ue)),
              (Le = cr(zt ? 1 : 0, f)),
              t && (w = cr(0, kt(b, Ae))),
              (we = Kt);
          },
          h = function () {
            (g._gsap.y = Pr(parseFloat(g._gsap.y) + u.offset) + "px"),
              (g.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                parseFloat(g._gsap.y) +
                ", 0, 1)"),
              (u.offset = u.cacheID = 0);
          },
          xe = function () {
            if (S) {
              requestAnimationFrame(G);
              var ie = Pr(l.deltaY / 2),
                oe = Le(u.v - ie);
              if (g && oe !== u.v + u.offset) {
                u.offset = oe - u.v;
                var s = Pr((parseFloat(g && g._gsap.y) || 0) - u.offset);
                (g.style.transform =
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                  s +
                  ", 0, 1)"),
                  (g._gsap.y = s + "px"),
                  (u.cacheID = T.cache),
                  Pt();
              }
              return !0;
            }
            u.offset && h(), (S = !0);
          },
          x,
          Mt,
          pe,
          Xe,
          Ne = function () {
            qe(),
              x.isActive() &&
                x.vars.scrollY > f &&
                (u() > f ? x.progress(1) && u(f) : x.resetTo("scrollY", f));
          };
        return (
          g &&
            p.set(g, {
              y: "+=0",
            }),
          (e.ignoreCheck = function (N) {
            return (
              (zt && N.type === "touchmove" && xe()) ||
              (j > 1.05 && N.type !== "touchstart") ||
              l.isGesturing ||
              (N.touches && N.touches.length > 1)
            );
          }),
          (e.onPress = function () {
            S = !1;
            var N = j;
            (j = Pr(((P.visualViewport && P.visualViewport.scale) || 1) / W)),
              x.pause(),
              N !== j && zn(b, j > 1.01 ? !0 : t ? !1 : "x"),
              (Mt = _()),
              (pe = u()),
              qe(),
              (we = Kt);
          }),
          (e.onRelease = e.onGestureStart =
            function (N, ie) {
              if ((u.offset && h(), !ie)) Xe.restart(!0);
              else {
                T.cache++;
                var oe = $(),
                  s,
                  de;
                t &&
                  ((s = _()),
                  (de = s + (oe * 0.05 * -N.velocityX) / 0.227),
                  (oe *= Ci(_, s, de, kt(b, Ae))),
                  (x.vars.scrollX = w(de))),
                  (s = u()),
                  (de = s + (oe * 0.05 * -N.velocityY) / 0.227),
                  (oe *= Ci(u, s, de, kt(b, ue))),
                  (x.vars.scrollY = Le(de)),
                  x.invalidate().duration(oe).play(0.01),
                  ((zt && x.vars.scrollY >= f) || s >= f - 1) &&
                    p.to(
                      {},
                      {
                        onUpdate: Ne,
                        duration: oe,
                      }
                    );
              }
              a && a(N);
            }),
          (e.onWheel = function () {
            x._ts && x.pause(), Fe() - fe > 1e3 && ((we = 0), (fe = Fe()));
          }),
          (e.onChange = function (N, ie, oe, s, de) {
            if (
              (Kt !== we && qe(),
              ie &&
                t &&
                _(w(s[2] === ie ? Mt + (N.startX - N.x) : _() + ie - s[1])),
              oe)
            ) {
              u.offset && h();
              var Jt = de[2] === oe,
                Lt = Jt ? pe + N.startY - N.y : u() + oe - de[1],
                ut = Le(Lt);
              Jt && Lt !== ut && (pe += ut - Lt), u(ut);
            }
            (oe || ie) && Pt();
          }),
          (e.onEnable = function () {
            zn(b, t ? !1 : "x"),
              k.addEventListener("refresh", Ne),
              he(P, "resize", Ne),
              u.smooth &&
                ((u.target.style.scrollBehavior = "auto"),
                (u.smooth = _.smooth = !1)),
              ct.enable();
          }),
          (e.onDisable = function () {
            zn(b, !0),
              _e(P, "resize", Ne),
              k.removeEventListener("refresh", Ne),
              ct.kill();
          }),
          (e.lockAxis = e.lockAxis !== !1),
          (l = new re(e)),
          (l.iOS = zt),
          zt && !u() && u(1),
          zt && p.ticker.add(wt),
          (Xe = l._dc),
          (x = p.to(l, {
            ease: "power4",
            paused: !0,
            scrollX: t ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: yi(u, u(), function () {
                return x.pause();
              }),
            },
            onUpdate: Pt,
            onComplete: Xe.vars.onComplete,
          })),
          l
        );
      };
    (k.sort = function (o) {
      return C.sort(
        o ||
          function (e, n) {
            return (
              (e.vars.refreshPriority || 0) * -1e6 +
              e.start -
              (n.start + (n.vars.refreshPriority || 0) * -1e6)
            );
          }
      );
    }),
      (k.observe = function (o) {
        return new re(o);
      }),
      (k.normalizeScroll = function (o) {
        if (typeof o > "u") return Je;
        if (o === !0 && Je) return Je.enable();
        if (o === !1) return Je && Je.kill();
        var e = o instanceof re ? o : Zi(o);
        return (
          Je && Je.target === e.target && Je.kill(), Wt(e.target) && (Je = e), e
        );
      }),
      (k.core = {
        _getVelocityProp: mn,
        _inputObserver: Ti,
        _scrollers: T,
        _proxies: bt,
        bridge: {
          ss: function () {
            st || Ut("scrollStart"), (st = Fe());
          },
          ref: function () {
            return ke;
          },
        },
      }),
      si() && p.registerPlugin(k),
      (z.ScrollTrigger = k),
      (z.default = k),
      typeof window > "u" || window !== z
        ? Object.defineProperty(z, "__esModule", {
            value: !0,
          })
        : delete window.default;
  });
})(Nn, Nn.exports);

var ao = Nn.exports;

function Di(it, V, z) {
  const ve = it.slice();
  return (ve[4] = V[z]), ve;
}

function Ri(it) {
  let V, z, ve, Te;
  return {
    c() {
      (V = wr("div")), (z = wr("img")), (Te = Oi()), this.h();
    },
    l(M) {
      V = xr(M, "DIV", {
        class: !0,
      });
      var Ge = gn(V);
      (z = xr(Ge, "IMG", {
        src: !0,
        alt: !0,
        class: !0,
      })),
        (Te = Ai(Ge)),
        Ge.forEach(yr),
        this.h();
    },
    h() {
      ro(z.src, (ve = it[4])) || Ht(z, "src", ve),
        Ht(z, "alt", "part of a carousel"),
        Ht(z, "class", "svelte-1q9c0da"),
        Ht(V, "class", "image-container svelte-1q9c0da");
    },
    m(M, Ge) {
      Ii(M, V, Ge), Sr(V, z), Sr(V, Te);
    },
    p: Xn,
    d(M) {
      M && yr(V);
    },
  };
}
function co(it) {
  let V,
    z,
    ve,
    Te,
    M,
    Ge = "arrow_back",
    Z,
    ot,
    ce = Mi(it[1]),
    X = [];
  for (let Q = 0; Q < ce.length; Q += 1) X[Q] = Ri(Di(it, ce, Q));
  return {
    c() {
      (V = wr("main")), (z = wr("div"));
      for (let Q = 0; Q < X.length; Q += 1) X[Q].c();
      (ve = Oi()),
        (Te = wr("button")),
        (M = wr("div")),
        (M.textContent = Ge),
        this.h();
    },
    l(Q) {
      V = xr(Q, "MAIN", {
        class: !0,
      });
      var De = gn(V);
      z = xr(De, "DIV", {
        class: !0,
      });
      var L = gn(z);
      for (let Ze = 0; Ze < X.length; Ze += 1) X[Ze].l(L);
      (ve = Ai(L)),
        (Te = xr(L, "BUTTON", {
          class: !0,
        }));
      var It = gn(Te);
      (M = xr(It, "DIV", {
        class: !0,
        "data-svelte-h": !0,
      })),
        Qi(M) !== "svelte-1okmf88" && (M.textContent = Ge),
        It.forEach(yr),
        L.forEach(yr),
        De.forEach(yr),
        this.h();
    },
    h() {
      Ht(M, "class", "material-symbols-outlined svelte-1q9c0da"),
        Ht(Te, "class", "last-filler-item svelte-1q9c0da"),
        Ht(z, "class", "carousel svelte-1q9c0da"),
        Ht(
          V,
          "class",
          "bingus flex items-center justify-center w-full h-full dark:bg-black svelte-1q9c0da"
        );
    },
    m(Q, De) {
      Ii(Q, V, De), Sr(V, z);
      for (let L = 0; L < X.length; L += 1) X[L] && X[L].m(z, null);
      Sr(z, ve),
        Sr(z, Te),
        Sr(Te, M),
        it[3](z),
        Z || ((ot = ji(M, "click", it[2])), (Z = !0));
    },
    p(Q, [De]) {
      if (De & 2) {
        ce = Mi(Q[1]);
        let L;
        for (L = 0; L < ce.length; L += 1) {
          const It = Di(Q, ce, L);
          X[L] ? X[L].p(It, De) : ((X[L] = Ri(It)), X[L].c(), X[L].m(z, ve));
        }
        for (; L < X.length; L += 1) X[L].d(1);
        X.length = ce.length;
      }
    },
    i: Xn,
    o: Xn,
    d(Q) {
      Q && yr(V), eo(X, Q), it[3](null), (Z = !1), ot();
    },
  };
}

function uo(it, V, z) {
  const ve = [
    "https://fluid-material.vercel.app/images/1.webp",
    "https://fluid-material.vercel.app/images/2.webp",
    "https://fluid-material.vercel.app/images/3.webp",
    "https://fluid-material.vercel.app/images/4.webp",
    "https://fluid-material.vercel.app/images/5.webp",
    "https://fluid-material.vercel.app/images/6.webp",
    "https://fluid-material.vercel.app/images/7.webp",
    "https://fluid-material.vercel.app/images/8.webp",
    "https://fluid-material.vercel.app/images/9.webp",
    "https://fluid-material.vercel.app/images/10.webp",
    "https://fluid-material.vercel.app/images/1.webp",
    "https://fluid-material.vercel.app/images/2.webp",
    "https://fluid-material.vercel.app/images/3.webp",
  ];

  let Te;

  to(() => {
    br.registerPlugin(ao.ScrollTrigger);
    br.registerPlugin(so);

    const Z = br.utils.toArray(".carousel .image-container");

    Z.forEach((ce, X) => {
      br.fromTo(
        ce,
        {
          width: 100,
        },
        {
          width: 415,
          ease: "sine.inOut",
          scrollTrigger: {
            horizontal: !0,
            scroller: ".carousel",
            trigger: ce,
            start: X * (ce.offsetWidth + 10) - 700,
            end: X == 0 ? "+=0px" : "+=700px",
            scrub: !0,
            snap: {
              snapTo: "labelsDirectional",
              duration: {
                min: 0.25,
                max: 0.5,
              },
              ease: "cubic.inOut",
            },
          },
        }
      );
    });
  });

  function M() {
    // br.to(".carousel", {
    //   scrollTo: {
    //     x: 0,
    //     y: 0,
    //   },
    //   ease: "cubic.inOut",
    //   duration: 1.5,
    // });
  }

  function Ge(Z) {
    // no[Z ? "unshift" : "push"](() => {
    //   (Te = Z), z(0, Te);
    // });
  }

  return [Te, ve, M, Ge];
}

class vo extends io {
  constructor(V) {
    super(), oo(this, V, uo, co, Ji, {});
  }
}
export { vo as component };
