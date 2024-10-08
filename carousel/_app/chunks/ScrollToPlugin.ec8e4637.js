import { g as W, c as D } from "./_commonjsHelpers.725317a4.js";
var b = {
  exports: {},
};
(function (V, F) {
  (function (P, e) {
    e(F);
  })(D, function (P) {
    /*!
     * ScrollToPlugin 3.12.2
     * https://greensock.com
     *
     * @license Copyright 2008-2023, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var e,
      X,
      f,
      c,
      p,
      Y,
      A,
      k,
      K = function () {
        return typeof window < "u";
      },
      L = function () {
        return e || (K() && (e = window.gsap) && e.registerPlugin && e);
      },
      O = function (i) {
        return typeof i == "string";
      },
      C = function (i) {
        return typeof i == "function";
      },
      x = function (i, o) {
        var s = o === "x" ? "Width" : "Height",
          r = "scroll" + s,
          l = "client" + s;
        return i === f || i === c || i === p
          ? Math.max(c[r], p[r]) - (f["inner" + s] || c[l] || p[l])
          : i[r] - i["offset" + s];
      },
      _ = function (i, o) {
        var s = "scroll" + (o === "x" ? "Left" : "Top");
        return (
          i === f &&
            (i.pageXOffset != null
              ? (s = "page" + o.toUpperCase() + "Offset")
              : (i = c[s] != null ? c : p)),
          function () {
            return i[s];
          }
        );
      },
      R = function (i, o, s, r) {
        if ((C(i) && (i = i(o, s, r)), typeof i != "object"))
          return O(i) && i !== "max" && i.charAt(1) !== "="
            ? {
                x: i,
                y: i,
              }
            : {
                y: i,
              };
        if (i.nodeType)
          return {
            y: i,
            x: i,
          };
        var l = {},
          n;
        for (n in i)
          l[n] = n !== "onAutoKill" && C(i[n]) ? i[n](o, s, r) : i[n];
        return l;
      },
      d = function (i, o) {
        if (((i = Y(i)[0]), !i || !i.getBoundingClientRect))
          return (
            console.warn("scrollTo target doesn't exist. Using 0") || {
              x: 0,
              y: 0,
            }
          );
        var s = i.getBoundingClientRect(),
          r = !o || o === f || o === p,
          l = r
            ? {
                top:
                  c.clientTop -
                  (f.pageYOffset || c.scrollTop || p.scrollTop || 0),
                left:
                  c.clientLeft -
                  (f.pageXOffset || c.scrollLeft || p.scrollLeft || 0),
              }
            : o.getBoundingClientRect(),
          n = {
            x: s.left - l.left,
            y: s.top - l.top,
          };
        return !r && o && ((n.x += _(o, "x")()), (n.y += _(o, "y")())), n;
      },
      E = function (i, o, s, r, l) {
        return !isNaN(i) && typeof i != "object"
          ? parseFloat(i) - l
          : O(i) && i.charAt(1) === "="
          ? parseFloat(i.substr(2)) * (i.charAt(0) === "-" ? -1 : 1) + r - l
          : i === "max"
          ? x(o, s) - l
          : Math.min(x(o, s), d(i, o)[s] - l);
      },
      G = function () {
        (e = L()),
          K() &&
            e &&
            typeof document < "u" &&
            document.body &&
            ((f = window),
            (p = document.body),
            (c = document.documentElement),
            (Y = e.utils.toArray),
            e.config({
              autoKillThreshold: 7,
            }),
            (A = e.config()),
            (X = 1));
      },
      g = {
        version: "3.12.2",
        name: "scrollTo",
        rawVars: 1,
        register: function (i) {
          (e = i), G();
        },
        init: function (i, o, s, r, l) {
          X || G();
          var n = this,
            T = e.getProperty(i, "scrollSnapType");
          (n.isWin = i === f),
            (n.target = i),
            (n.tween = s),
            (o = R(o, r, i, l)),
            (n.vars = o),
            (n.autoKill = !!o.autoKill),
            (n.getX = _(i, "x")),
            (n.getY = _(i, "y")),
            (n.x = n.xPrev = n.getX()),
            (n.y = n.yPrev = n.getY()),
            k || (k = e.core.globals().ScrollTrigger),
            e.getProperty(i, "scrollBehavior") === "smooth" &&
              e.set(i, {
                scrollBehavior: "auto",
              }),
            T &&
              T !== "none" &&
              ((n.snap = 1),
              (n.snapInline = i.style.scrollSnapType),
              (i.style.scrollSnapType = "none")),
            o.x != null
              ? (n.add(n, "x", n.x, E(o.x, i, "x", n.x, o.offsetX || 0), r, l),
                n._props.push("scrollTo_x"))
              : (n.skipX = 1),
            o.y != null
              ? (n.add(n, "y", n.y, E(o.y, i, "y", n.y, o.offsetY || 0), r, l),
                n._props.push("scrollTo_y"))
              : (n.skipY = 1);
        },
        render: function (i, o) {
          for (
            var s = o._pt,
              r = o.target,
              l = o.tween,
              n = o.autoKill,
              T = o.xPrev,
              j = o.yPrev,
              w = o.isWin,
              I = o.snap,
              B = o.snapInline,
              y,
              u,
              m,
              S,
              h;
            s;

          )
            s.r(i, s.d), (s = s._next);
          (y = w || !o.skipX ? o.getX() : T),
            (u = w || !o.skipY ? o.getY() : j),
            (m = u - j),
            (S = y - T),
            (h = A.autoKillThreshold),
            o.x < 0 && (o.x = 0),
            o.y < 0 && (o.y = 0),
            n &&
              (!o.skipX && (S > h || S < -h) && y < x(r, "x") && (o.skipX = 1),
              !o.skipY && (m > h || m < -h) && u < x(r, "y") && (o.skipY = 1),
              o.skipX &&
                o.skipY &&
                (l.kill(),
                o.vars.onAutoKill &&
                  o.vars.onAutoKill.apply(l, o.vars.onAutoKillParams || []))),
            w
              ? f.scrollTo(o.skipX ? y : o.x, o.skipY ? u : o.y)
              : (o.skipY || (r.scrollTop = o.y),
                o.skipX || (r.scrollLeft = o.x)),
            I &&
              (i === 1 || i === 0) &&
              ((u = r.scrollTop),
              (y = r.scrollLeft),
              B
                ? (r.style.scrollSnapType = B)
                : r.style.removeProperty("scroll-snap-type"),
              (r.scrollTop = u + 1),
              (r.scrollLeft = y + 1),
              (r.scrollTop = u),
              (r.scrollLeft = y)),
            (o.xPrev = o.x),
            (o.yPrev = o.y),
            k && k.update();
        },
        kill: function (i) {
          var o = i === "scrollTo";
          (o || i === "scrollTo_x") && (this.skipX = 1),
            (o || i === "scrollTo_y") && (this.skipY = 1);
        },
      };
    (g.max = x),
      (g.getOffset = d),
      (g.buildGetter = _),
      L() && e.registerPlugin(g),
      (P.ScrollToPlugin = g),
      (P.default = g),
      Object.defineProperty(P, "__esModule", {
        value: !0,
      });
  });
})(b, b.exports);
var M = b.exports;
const U = W(M);
export { U as S };
