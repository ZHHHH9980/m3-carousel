import { a as z } from "./index.4aa507e7.js";
import { E as B } from "./scheduler.20a43439.js";
function F(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function G(n, w) {
  n.d(1), w.delete(n.key);
}
function H(n, w, x, A, E, p, d, j, y, k, u, q) {
  let i = n.length,
    f = p.length,
    c = i;
  const o = {};
  for (; c--; ) o[n[c].key] = c;
  const h = [],
    a = new Map(),
    m = new Map(),
    M = [];
  for (c = f; c--; ) {
    const e = q(E, p, c),
      s = x(e);
    let t = d.get(s);
    t ? A && M.push(() => t.p(e, w)) : ((t = k(s, e)), t.c()),
      a.set(s, (h[c] = t)),
      s in o && m.set(s, Math.abs(c - o[s]));
  }
  const v = new Set(),
    S = new Set();
  function g(e) {
    z(e, 1), e.m(j, u), d.set(e.key, e), (u = e.first), f--;
  }
  for (; i && f; ) {
    const e = h[f - 1],
      s = n[i - 1],
      t = e.key,
      l = s.key;
    e === s
      ? ((u = e.first), i--, f--)
      : a.has(l)
      ? !d.has(t) || v.has(t)
        ? g(e)
        : S.has(l)
        ? i--
        : m.get(t) > m.get(l)
        ? (S.add(t), g(e))
        : (v.add(l), i--)
      : (y(s, d), i--);
  }
  for (; i--; ) {
    const e = n[i];
    a.has(e.key) || y(e, d);
  }
  for (; f; ) g(h[f - 1]);
  return B(M), h;
}
export { G as d, F as e, H as u };
