import {
  s as u,
  r as f,
  a as m,
  u as v,
  d as c,
  c as _,
  i as w,
  v as p,
  w as h,
  x as b,
} from "../chunks/scheduler.20a43439.js";
import { S as y, i as g, a as S, t as $ } from "../chunks/index.4aa507e7.js";
import "../chunks/paths.8e0103b2.js";
var k = "@vercel/analytics",
  j = "1.2.2",
  q = () => {
    window.va ||
      (window.va = function (...a) {
        (window.vaq = window.vaq || []).push(a);
      });
  };
function d() {
  return typeof window < "u";
}
function l() {
  try {
    const e = "production";
  } catch {}
  return "production";
}
function P(e = "auto") {
  if (e === "auto") {
    window.vam = l();
    return;
  }
  window.vam = e;
}
function R() {
  return (d() ? window.vam : l()) || "production";
}
function i() {
  return R() === "development";
}
var T = "https://va.vercel-scripts.com/v1/script.debug.js",
  A = "/_vercel/insights/script.js";
function C(
  e = {
    debug: !0,
  }
) {
  var a;
  if (!d()) return;
  P(e.mode),
    q(),
    e.beforeSend &&
      ((a = window.va) == null || a.call(window, "beforeSend", e.beforeSend));
  const s = e.scriptSrc || (i() ? T : A);
  if (document.head.querySelector(`script[src*="${s}"]`)) return;
  const o = document.createElement("script");
  (o.src = s),
    (o.defer = !0),
    (o.dataset.sdkn = k + (e.framework ? `/${e.framework}` : "")),
    (o.dataset.sdkv = j),
    e.disableAutoTrack && (o.dataset.disableAutoTrack = "1"),
    e.endpoint && (o.dataset.endpoint = e.endpoint),
    e.dsn && (o.dataset.dsn = e.dsn),
    (o.onerror = () => {
      const n = i()
        ? "Please check if any ad blockers are enabled and try again."
        : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
      console.log(
        `[Vercel Web Analytics] Failed to load script from ${s}. ${n}`
      );
    }),
    i() && e.debug === !1 && (o.dataset.debug = "false"),
    document.head.appendChild(o);
}
C({
  mode: "production",
});
const B = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
    },
    Symbol.toStringTag,
    {
      value: "Module",
    }
  )
);
function E(e) {
  let a, s;
  const o = e[1].default,
    n = f(o, e, e[0], null);
  return {
    c() {
      (a = m()), n && n.c(), this.h();
    },
    l(t) {
      v("svelte-11psxtv", document.head).forEach(c),
        (a = _(t)),
        n && n.l(t),
        this.h();
    },
    h() {
      document.title = "r";
    },
    m(t, r) {
      w(t, a, r), n && n.m(t, r), (s = !0);
    },
    p(t, [r]) {
      n &&
        n.p &&
        (!s || r & 1) &&
        p(n, o, t, t[0], s ? b(o, t[0], r, null) : h(t[0]), null);
    },
    i(t) {
      s || (S(n, t), (s = !0));
    },
    o(t) {
      $(n, t), (s = !1);
    },
    d(t) {
      t && c(a), n && n.d(t);
    },
  };
}
function M(e, a, s) {
  let { $$slots: o = {}, $$scope: n } = a;
  return (
    (e.$$set = (t) => {
      "$$scope" in t && s(0, (n = t.$$scope));
    }),
    [n, o]
  );
}
class I extends y {
  constructor(a) {
    super(), g(this, a, M, E, u, {});
  }
}
export { I as component, B as universal };
