const h = "modulepreload",
  d = function (l, s) {
    return new URL(l, s).href;
  },
  u = {},
  v = function (s, i, c) {
    if (!i || i.length === 0) return s();
    const a = document.getElementsByTagName("link");
    return Promise.all(
      i.map((e) => {
        if (((e = d(e, c)), e in u)) return;
        u[e] = !0;
        const t = e.endsWith(".css"),
          f = t ? '[rel="stylesheet"]' : "";
        if (!!c)
          for (let r = a.length - 1; r >= 0; r--) {
            const o = a[r];
            if (o.href === e && (!t || o.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${e}"]${f}`)) return;
        const n = document.createElement("link");
        if (
          ((n.rel = t ? "stylesheet" : h),
          t || ((n.as = "script"), (n.crossOrigin = "")),
          (n.href = e),
          document.head.appendChild(n),
          t)
        )
          return new Promise((r, o) => {
            n.addEventListener("load", r),
              n.addEventListener("error", () =>
                o(new Error(`Unable to preload CSS for ${e}`))
              );
          });
      })
    )
      .then(() => s())
      .catch((e) => {
        const t = new Event("vite:preloadError", {
          cancelable: !0,
        });
        if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
          throw e;
      });
  };
export { v as _ };
