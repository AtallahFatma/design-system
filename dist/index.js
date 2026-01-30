import ne, { forwardRef as w, isValidElement as ae, cloneElement as oe } from "react";
var _ = { exports: {} }, b = {};
var M;
function se() {
  if (M) return b;
  M = 1;
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.fragment");
  function a(n, o, i) {
    var f = null;
    if (i !== void 0 && (f = "" + i), o.key !== void 0 && (f = "" + o.key), "key" in o) {
      i = {};
      for (var m in o)
        m !== "key" && (i[m] = o[m]);
    } else i = o;
    return o = i.ref, {
      $$typeof: r,
      type: n,
      key: f,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return b.Fragment = s, b.jsx = a, b.jsxs = a, b;
}
var y = {};
var W;
function le() {
  return W || (W = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case B:
          return "Profiler";
        case J:
          return "StrictMode";
        case Z:
          return "Suspense";
        case Q:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case q:
            return "Portal";
          case X:
            return e.displayName || "Context";
          case G:
            return (e._context.displayName || "Context") + ".Consumer";
          case H:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case z:
            return t = e.displayName || null, t !== null ? t : r(e.type) || "Memo";
          case j:
            t = e._payload, e = e._init;
            try {
              return r(e(t));
            } catch {
            }
        }
      return null;
    }
    function s(e) {
      return "" + e;
    }
    function a(e) {
      try {
        s(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var l = t.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), s(e);
      }
    }
    function n(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === j)
        return "<...>";
      try {
        var t = r(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = h.A;
      return e === null ? null : e.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if ($.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, t) {
      function l() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: l,
        configurable: !0
      });
    }
    function R() {
      var e = r(this.type);
      return I[e] || (I[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function T(e, t, l, u, E, O) {
      var c = l.ref;
      return e = {
        $$typeof: C,
        type: e,
        key: t,
        props: l,
        _owner: u
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: R
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: E
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function g(e, t, l, u, E, O) {
      var c = t.children;
      if (c !== void 0)
        if (u)
          if (re(c)) {
            for (u = 0; u < c.length; u++)
              N(c[u]);
            Object.freeze && Object.freeze(c);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else N(c);
      if ($.call(t, "key")) {
        c = r(e);
        var p = Object.keys(t).filter(function(te) {
          return te !== "key";
        });
        u = 0 < p.length ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}", U[c + u] || (p = 0 < p.length ? "{" + p.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          c,
          p,
          c
        ), U[c + u] = !0);
      }
      if (c = null, l !== void 0 && (a(l), c = "" + l), f(t) && (a(t.key), c = "" + t.key), "key" in t) {
        l = {};
        for (var S in t)
          S !== "key" && (l[S] = t[S]);
      } else l = t;
      return c && m(
        l,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), T(
        e,
        c,
        l,
        o(),
        E,
        O
      );
    }
    function N(e) {
      P(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === j && (e._payload.status === "fulfilled" ? P(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function P(e) {
      return typeof e == "object" && e !== null && e.$$typeof === C;
    }
    var x = ne, C = /* @__PURE__ */ Symbol.for("react.transitional.element"), q = /* @__PURE__ */ Symbol.for("react.portal"), k = /* @__PURE__ */ Symbol.for("react.fragment"), J = /* @__PURE__ */ Symbol.for("react.strict_mode"), B = /* @__PURE__ */ Symbol.for("react.profiler"), G = /* @__PURE__ */ Symbol.for("react.consumer"), X = /* @__PURE__ */ Symbol.for("react.context"), H = /* @__PURE__ */ Symbol.for("react.forward_ref"), Z = /* @__PURE__ */ Symbol.for("react.suspense"), Q = /* @__PURE__ */ Symbol.for("react.suspense_list"), z = /* @__PURE__ */ Symbol.for("react.memo"), j = /* @__PURE__ */ Symbol.for("react.lazy"), K = /* @__PURE__ */ Symbol.for("react.activity"), ee = /* @__PURE__ */ Symbol.for("react.client.reference"), h = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, re = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var Y, I = {}, F = x.react_stack_bottom_frame.bind(
      x,
      i
    )(), D = A(n(i)), U = {};
    y.Fragment = k, y.jsx = function(e, t, l) {
      var u = 1e4 > h.recentlyCreatedOwnerStacks++;
      return g(
        e,
        t,
        l,
        !1,
        u ? Error("react-stack-top-frame") : F,
        u ? A(n(e)) : D
      );
    }, y.jsxs = function(e, t, l) {
      var u = 1e4 > h.recentlyCreatedOwnerStacks++;
      return g(
        e,
        t,
        l,
        !0,
        u ? Error("react-stack-top-frame") : F,
        u ? A(n(e)) : D
      );
    };
  })()), y;
}
var L;
function ue() {
  return L || (L = 1, process.env.NODE_ENV === "production" ? _.exports = se() : _.exports = le()), _.exports;
}
var d = ue();
function V(r) {
  var s, a, n = "";
  if (typeof r == "string" || typeof r == "number") n += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var o = r.length;
    for (s = 0; s < o; s++) r[s] && (a = V(r[s])) && (n && (n += " "), n += a);
  } else for (a in r) r[a] && (n && (n += " "), n += a);
  return n;
}
function v() {
  for (var r, s, a = 0, n = "", o = arguments.length; a < o; a++) (r = arguments[a]) && (s = V(r)) && (n && (n += " "), n += s);
  return n;
}
function me({
  variant: r = "primary",
  size: s = "md",
  isLoading: a,
  disabled: n = !1,
  className: o,
  onClick: i,
  children: f,
  ...m
}) {
  const R = n || a, T = (g) => {
    !R && i && i(g);
  };
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      onClick: T,
      className: v(
        "inline-flex items-center justify-center font-medium rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2",
        {
          "bg-primary text-textPrimary hover:opacity-90": r === "primary",
          "bg-secondary text-textSecondary": r === "secondary",
          "bg-danger text-textPrimary": r === "danger",
          "px-3 py-1.5 text-sm": s === "sm",
          "px-4 py-2": s === "md",
          "px-6 py-3 text-lg": s === "lg",
          "opacity-50 pointer-events-none": a
        },
        o
      ),
      ...m,
      children: a ? "Loading..." : f
    }
  );
}
const ce = w(
  ({ size: r = "md", error: s, className: a, ...n }, o) => /* @__PURE__ */ d.jsx(
    "input",
    {
      ref: o,
      className: v(
        "rounded-md border transition focus:outline-none focus:ring-2",
        {
          "px-2 py-1 text-sm": r === "sm",
          "px-3 py-2": r === "md",
          "px-4 py-3 text-lg": r === "lg",
          "border-danger focus:ring-danger": s,
          "border-gray-300 focus:ring-primary": !s,
          "bg-gray-100 cursor-not-allowed opacity-60": n.disabled
        },
        a
      ),
      ...n
    }
  )
);
ce.displayName = "Input";
const ie = w(
  ({ size: r = "md", error: s, className: a, ...n }, o) => /* @__PURE__ */ d.jsx(
    "textarea",
    {
      ref: o,
      className: v(
        "rounded-md border transition focus:outline-none focus:ring-2 resize-y",
        {
          "px-2 py-1 text-sm": r === "sm",
          "px-3 py-2": r === "md",
          "px-4 py-3 text-lg": r === "lg",
          "border-danger focus:ring-danger": s,
          "border-gray-300 focus:ring-primary": !s,
          "bg-gray-100 cursor-not-allowed opacity-60": n.disabled
        },
        a
      ),
      ...n
    }
  )
);
ie.displayName = "Textarea";
const fe = w(
  ({ size: r = "md", error: s, className: a, options: n, ...o }, i) => /* @__PURE__ */ d.jsx(
    "select",
    {
      ref: i,
      className: v(
        "rounded-md border transition focus:outline-none focus:ring-2 bg-white",
        {
          "px-2 py-1 text-sm": r === "sm",
          "px-3 py-2": r === "md",
          "px-4 py-3 text-lg": r === "lg",
          "border-danger focus:ring-danger": s,
          "border-gray-300 focus:ring-primary": !s,
          "bg-gray-100 cursor-not-allowed opacity-60": o.disabled
        },
        a
      ),
      ...o,
      children: n.map((f) => /* @__PURE__ */ d.jsx("option", { value: f.value, children: f.label }, f.value))
    }
  )
);
fe.displayName = "Select";
function pe({
  label: r,
  helperText: s,
  error: a,
  children: n
}) {
  const o = crypto.randomUUID(), i = a ? `${o}-error` : s ? `${o}-help` : void 0, f = ae(n) ? oe(n, {
    id: o,
    error: !!a,
    "aria-invalid": !!a,
    "aria-describedby": i
  }) : n;
  return /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col gap-1 items-start", children: [
    r && /* @__PURE__ */ d.jsx("label", { htmlFor: o, className: "text-sm font-medium", children: r }),
    f,
    s && !a && /* @__PURE__ */ d.jsx("p", { id: `${o}-help`, className: "text-sm text-gray-500", children: s }),
    a && /* @__PURE__ */ d.jsx("p", { id: `${o}-error`, className: "text-sm text-danger", children: a })
  ] });
}
export {
  me as Button,
  pe as FormField,
  ce as Input,
  fe as Select,
  ie as Textarea
};
