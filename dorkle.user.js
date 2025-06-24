// ==UserScript==
// @name        Sporcle Redesign
// @description Remake the sporcle search function into a responsive SPA using Preact
// @namespace   ViolentMonkey Scripts
// @match       https://www.sporcle.com/search/*
// @version     1.0.0
// @author      -
// @grant       none
// ==/UserScript==
var n, l$2, u$2, i$1, r$1, o$1, e$1, f$2, c$2, s$2, a$2, h$2, p$2 = {}, v$2 = [], y$2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, w$2 = Array.isArray;
function d$2(n2, l2) {
  for (var u2 in l2) n2[u2] = l2[u2];
  return n2;
}
function g$1(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _(l2, u2, t2) {
  var i2, r2, o2, e2 = {};
  for (o2 in u2) "key" == o2 ? i2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : e2[o2] = u2[o2];
  if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps) for (o2 in l2.defaultProps) void 0 === e2[o2] && (e2[o2] = l2.defaultProps[o2]);
  return m$2(l2, e2, i2, r2, null);
}
function m$2(n2, t2, i2, r2, o2) {
  var e2 = { type: n2, props: t2, key: i2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o2 ? ++u$2 : o2, __i: -1, __u: 0 };
  return null == o2 && null != l$2.vnode && l$2.vnode(e2), e2;
}
function k$2(n2) {
  return n2.children;
}
function x$1(n2, l2) {
  this.props = n2, this.context = l2;
}
function S(n2, l2) {
  if (null == l2) return n2.__ ? S(n2.__, n2.__i + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) return u2.__e;
  return "function" == typeof n2.type ? S(n2) : null;
}
function C$1(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
      n2.__e = n2.__c.base = u2.__e;
      break;
    }
    return C$1(n2);
  }
}
function M$1(n2) {
  (!n2.__d && (n2.__d = true) && i$1.push(n2) && !$$1.__r++ || r$1 != l$2.debounceRendering) && ((r$1 = l$2.debounceRendering) || o$1)($$1);
}
function $$1() {
  for (var n2, u2, t2, r2, o2, f2, c2, s2 = 1; i$1.length; ) i$1.length > s2 && i$1.sort(e$1), n2 = i$1.shift(), s2 = i$1.length, n2.__d && (t2 = void 0, o2 = (r2 = (u2 = n2).__v).__e, f2 = [], c2 = [], u2.__P && ((t2 = d$2({}, r2)).__v = r2.__v + 1, l$2.vnode && l$2.vnode(t2), O(u2.__P, t2, r2, u2.__n, u2.__P.namespaceURI, 32 & r2.__u ? [o2] : null, f2, null == o2 ? S(r2) : o2, !!(32 & r2.__u), c2), t2.__v = r2.__v, t2.__.__k[t2.__i] = t2, z$1(f2, t2, c2), t2.__e != o2 && C$1(t2)));
  $$1.__r = 0;
}
function I$1(n2, l2, u2, t2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, y2, w2, d2, g2, _2 = t2 && t2.__k || v$2, m2 = l2.length;
  for (f2 = P(u2, l2, _2, f2, m2), a2 = 0; a2 < m2; a2++) null != (y2 = u2.__k[a2]) && (h2 = -1 == y2.__i ? p$2 : _2[y2.__i] || p$2, y2.__i = a2, g2 = O(n2, y2, h2, i2, r2, o2, e2, f2, c2, s2), w2 = y2.__e, y2.ref && h2.ref != y2.ref && (h2.ref && q(h2.ref, null, y2), s2.push(y2.ref, y2.__c || w2, y2)), null == d2 && null != w2 && (d2 = w2), 4 & y2.__u || h2.__k === y2.__k ? f2 = A(y2, f2, n2) : "function" == typeof y2.type && void 0 !== g2 ? f2 = g2 : w2 && (f2 = w2.nextSibling), y2.__u &= -7);
  return u2.__e = d2, f2;
}
function P(n2, l2, u2, t2, i2) {
  var r2, o2, e2, f2, c2, s2 = u2.length, a2 = s2, h2 = 0;
  for (n2.__k = new Array(i2), r2 = 0; r2 < i2; r2++) null != (o2 = l2[r2]) && "boolean" != typeof o2 && "function" != typeof o2 ? (f2 = r2 + h2, (o2 = n2.__k[r2] = "string" == typeof o2 || "number" == typeof o2 || "bigint" == typeof o2 || o2.constructor == String ? m$2(null, o2, null, null, null) : w$2(o2) ? m$2(k$2, { children: o2 }, null, null, null) : null == o2.constructor && o2.__b > 0 ? m$2(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : o2).__ = n2, o2.__b = n2.__b + 1, e2 = null, -1 != (c2 = o2.__i = L(o2, u2, f2, a2)) && (a2--, (e2 = u2[c2]) && (e2.__u |= 2)), null == e2 || null == e2.__v ? (-1 == c2 && (i2 > s2 ? h2-- : i2 < s2 && h2++), "function" != typeof o2.type && (o2.__u |= 4)) : c2 != f2 && (c2 == f2 - 1 ? h2-- : c2 == f2 + 1 ? h2++ : (c2 > f2 ? h2-- : h2++, o2.__u |= 4))) : n2.__k[r2] = null;
  if (a2) for (r2 = 0; r2 < s2; r2++) null != (e2 = u2[r2]) && 0 == (2 & e2.__u) && (e2.__e == t2 && (t2 = S(e2)), B$1(e2, e2));
  return t2;
}
function A(n2, l2, u2) {
  var t2, i2;
  if ("function" == typeof n2.type) {
    for (t2 = n2.__k, i2 = 0; t2 && i2 < t2.length; i2++) t2[i2] && (t2[i2].__ = n2, l2 = A(t2[i2], l2, u2));
    return l2;
  }
  n2.__e != l2 && (l2 && n2.type && !u2.contains(l2) && (l2 = S(n2)), u2.insertBefore(n2.__e, l2 || null), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (null != l2 && 8 == l2.nodeType);
  return l2;
}
function H(n2, l2) {
  return l2 = l2 || [], null == n2 || "boolean" == typeof n2 || (w$2(n2) ? n2.some(function(n3) {
    H(n3, l2);
  }) : l2.push(n2)), l2;
}
function L(n2, l2, u2, t2) {
  var i2, r2, o2 = n2.key, e2 = n2.type, f2 = l2[u2];
  if (null === f2 && null == n2.key || f2 && o2 == f2.key && e2 == f2.type && 0 == (2 & f2.__u)) return u2;
  if (t2 > (null != f2 && 0 == (2 & f2.__u) ? 1 : 0)) for (i2 = u2 - 1, r2 = u2 + 1; i2 >= 0 || r2 < l2.length; ) {
    if (i2 >= 0) {
      if ((f2 = l2[i2]) && 0 == (2 & f2.__u) && o2 == f2.key && e2 == f2.type) return i2;
      i2--;
    }
    if (r2 < l2.length) {
      if ((f2 = l2[r2]) && 0 == (2 & f2.__u) && o2 == f2.key && e2 == f2.type) return r2;
      r2++;
    }
  }
  return -1;
}
function T(n2, l2, u2) {
  "-" == l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || y$2.test(l2) ? u2 : u2 + "px";
}
function j$1(n2, l2, u2, t2, i2) {
  var r2, o2;
  n: if ("style" == l2) if ("string" == typeof u2) n2.style.cssText = u2;
  else {
    if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u2 && l2 in u2 || T(n2.style, l2, "");
    if (u2) for (l2 in u2) t2 && u2[l2] == t2[l2] || T(n2.style, l2, u2[l2]);
  }
  else if ("o" == l2[0] && "n" == l2[1]) r2 = l2 != (l2 = l2.replace(f$2, "$1")), o2 = l2.toLowerCase(), l2 = o2 in n2 || "onFocusOut" == l2 || "onFocusIn" == l2 ? o2.slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = c$2, n2.addEventListener(l2, r2 ? a$2 : s$2, r2)) : n2.removeEventListener(l2, r2 ? a$2 : s$2, r2);
  else {
    if ("http://www.w3.org/2000/svg" == i2) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
      n2[l2] = null == u2 ? "" : u2;
      break n;
    } catch (n3) {
    }
    "function" == typeof u2 || (null == u2 || false === u2 && "-" != l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u2 ? "" : u2));
  }
}
function F(n2) {
  return function(u2) {
    if (this.l) {
      var t2 = this.l[u2.type + n2];
      if (null == u2.t) u2.t = c$2++;
      else if (u2.t < t2.u) return;
      return t2(l$2.event ? l$2.event(u2) : u2);
    }
  };
}
function O(n2, u2, t2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, p2, v2, y2, _2, m2, b2, S2, C2, M2, $2, P2, A2, H2, L2, T2, j2 = u2.type;
  if (null != u2.constructor) return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), o2 = [f2 = u2.__e = t2.__e]), (a2 = l$2.__b) && a2(u2);
  n: if ("function" == typeof j2) try {
    if (b2 = u2.props, S2 = "prototype" in j2 && j2.prototype.render, C2 = (a2 = j2.contextType) && i2[a2.__c], M2 = a2 ? C2 ? C2.props.value : a2.__ : i2, t2.__c ? m2 = (h2 = u2.__c = t2.__c).__ = h2.__E : (S2 ? u2.__c = h2 = new j2(b2, M2) : (u2.__c = h2 = new x$1(b2, M2), h2.constructor = j2, h2.render = D$2), C2 && C2.sub(h2), h2.props = b2, h2.state || (h2.state = {}), h2.context = M2, h2.__n = i2, p2 = h2.__d = true, h2.__h = [], h2._sb = []), S2 && null == h2.__s && (h2.__s = h2.state), S2 && null != j2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = d$2({}, h2.__s)), d$2(h2.__s, j2.getDerivedStateFromProps(b2, h2.__s))), v2 = h2.props, y2 = h2.state, h2.__v = u2, p2) S2 && null == j2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), S2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
    else {
      if (S2 && null == j2.getDerivedStateFromProps && b2 !== v2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(b2, M2), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(b2, h2.__s, M2) || u2.__v == t2.__v) {
        for (u2.__v != t2.__v && (h2.props = b2, h2.state = h2.__s, h2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.some(function(n3) {
          n3 && (n3.__ = u2);
        }), $2 = 0; $2 < h2._sb.length; $2++) h2.__h.push(h2._sb[$2]);
        h2._sb = [], h2.__h.length && e2.push(h2);
        break n;
      }
      null != h2.componentWillUpdate && h2.componentWillUpdate(b2, h2.__s, M2), S2 && null != h2.componentDidUpdate && h2.__h.push(function() {
        h2.componentDidUpdate(v2, y2, _2);
      });
    }
    if (h2.context = M2, h2.props = b2, h2.__P = n2, h2.__e = false, P2 = l$2.__r, A2 = 0, S2) {
      for (h2.state = h2.__s, h2.__d = false, P2 && P2(u2), a2 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++) h2.__h.push(h2._sb[H2]);
      h2._sb = [];
    } else do {
      h2.__d = false, P2 && P2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
    } while (h2.__d && ++A2 < 25);
    h2.state = h2.__s, null != h2.getChildContext && (i2 = d$2(d$2({}, i2), h2.getChildContext())), S2 && !p2 && null != h2.getSnapshotBeforeUpdate && (_2 = h2.getSnapshotBeforeUpdate(v2, y2)), L2 = a2, null != a2 && a2.type === k$2 && null == a2.key && (L2 = N(a2.props.children)), f2 = I$1(n2, w$2(L2) ? L2 : [L2], u2, t2, i2, r2, o2, e2, f2, c2, s2), h2.base = u2.__e, u2.__u &= -161, h2.__h.length && e2.push(h2), m2 && (h2.__E = h2.__ = null);
  } catch (n3) {
    if (u2.__v = null, c2 || null != o2) if (n3.then) {
      for (u2.__u |= c2 ? 160 : 128; f2 && 8 == f2.nodeType && f2.nextSibling; ) f2 = f2.nextSibling;
      o2[o2.indexOf(f2)] = null, u2.__e = f2;
    } else for (T2 = o2.length; T2--; ) g$1(o2[T2]);
    else u2.__e = t2.__e, u2.__k = t2.__k;
    l$2.__e(n3, u2, t2);
  }
  else null == o2 && u2.__v == t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : f2 = u2.__e = V(t2.__e, u2, t2, i2, r2, o2, e2, c2, s2);
  return (a2 = l$2.diffed) && a2(u2), 128 & u2.__u ? void 0 : f2;
}
function z$1(n2, u2, t2) {
  for (var i2 = 0; i2 < t2.length; i2++) q(t2[i2], t2[++i2], t2[++i2]);
  l$2.__c && l$2.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$2.__e(n3, u3.__v);
    }
  });
}
function N(n2) {
  return "object" != typeof n2 || null == n2 || n2.__b && n2.__b > 0 ? n2 : w$2(n2) ? n2.map(N) : d$2({}, n2);
}
function V(u2, t2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, v2, y2, d2, _2, m2, b2 = i2.props, k2 = t2.props, x2 = t2.type;
  if ("svg" == x2 ? o2 = "http://www.w3.org/2000/svg" : "math" == x2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != e2) {
    for (a2 = 0; a2 < e2.length; a2++) if ((d2 = e2[a2]) && "setAttribute" in d2 == !!x2 && (x2 ? d2.localName == x2 : 3 == d2.nodeType)) {
      u2 = d2, e2[a2] = null;
      break;
    }
  }
  if (null == u2) {
    if (null == x2) return document.createTextNode(k2);
    u2 = document.createElementNS(o2, x2, k2.is && k2), c2 && (l$2.__m && l$2.__m(t2, e2), c2 = false), e2 = null;
  }
  if (null == x2) b2 === k2 || c2 && u2.data == k2 || (u2.data = k2);
  else {
    if (e2 = e2 && n.call(u2.childNodes), b2 = i2.props || p$2, !c2 && null != e2) for (b2 = {}, a2 = 0; a2 < u2.attributes.length; a2++) b2[(d2 = u2.attributes[a2]).name] = d2.value;
    for (a2 in b2) if (d2 = b2[a2], "children" == a2) ;
    else if ("dangerouslySetInnerHTML" == a2) v2 = d2;
    else if (!(a2 in k2)) {
      if ("value" == a2 && "defaultValue" in k2 || "checked" == a2 && "defaultChecked" in k2) continue;
      j$1(u2, a2, null, d2, o2);
    }
    for (a2 in k2) d2 = k2[a2], "children" == a2 ? y2 = d2 : "dangerouslySetInnerHTML" == a2 ? h2 = d2 : "value" == a2 ? _2 = d2 : "checked" == a2 ? m2 = d2 : c2 && "function" != typeof d2 || b2[a2] === d2 || j$1(u2, a2, d2, b2[a2], o2);
    if (h2) c2 || v2 && (h2.__html == v2.__html || h2.__html == u2.innerHTML) || (u2.innerHTML = h2.__html), t2.__k = [];
    else if (v2 && (u2.innerHTML = ""), I$1("template" == t2.type ? u2.content : u2, w$2(y2) ? y2 : [y2], t2, i2, r2, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o2, e2, f2, e2 ? e2[0] : i2.__k && S(i2, 0), c2, s2), null != e2) for (a2 = e2.length; a2--; ) g$1(e2[a2]);
    c2 || (a2 = "value", "progress" == x2 && null == _2 ? u2.removeAttribute("value") : null != _2 && (_2 !== u2[a2] || "progress" == x2 && !_2 || "option" == x2 && _2 != b2[a2]) && j$1(u2, a2, _2, b2[a2], o2), a2 = "checked", null != m2 && m2 != u2[a2] && j$1(u2, a2, m2, b2[a2], o2));
  }
  return u2;
}
function q(n2, u2, t2) {
  try {
    if ("function" == typeof n2) {
      var i2 = "function" == typeof n2.__u;
      i2 && n2.__u(), i2 && null == u2 || (n2.__u = n2(u2));
    } else n2.current = u2;
  } catch (n3) {
    l$2.__e(n3, t2);
  }
}
function B$1(n2, u2, t2) {
  var i2, r2;
  if (l$2.unmount && l$2.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current != n2.__e || q(i2, null, u2)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount) try {
      i2.componentWillUnmount();
    } catch (n3) {
      l$2.__e(n3, u2);
    }
    i2.base = i2.__P = null;
  }
  if (i2 = n2.__k) for (r2 = 0; r2 < i2.length; r2++) i2[r2] && B$1(i2[r2], u2, t2 || "function" != typeof n2.type);
  t2 || g$1(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function D$2(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function E(u2, t2, i2) {
  var r2, o2, e2, f2;
  t2 == document && (t2 = document.documentElement), l$2.__ && l$2.__(u2, t2), o2 = (r2 = false) ? null : t2.__k, e2 = [], f2 = [], O(t2, u2 = t2.__k = _(k$2, null, [u2]), o2 || p$2, p$2, t2.namespaceURI, o2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, e2, o2 ? o2.__e : t2.firstChild, r2, f2), z$1(e2, u2, f2);
}
function J(l2, u2, t2) {
  var i2, r2, o2, e2, f2 = d$2({}, l2.props);
  for (o2 in l2.type && l2.type.defaultProps && (e2 = l2.type.defaultProps), u2) "key" == o2 ? i2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : f2[o2] = void 0 === u2[o2] && null != e2 ? e2[o2] : u2[o2];
  return arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), m$2(l2.type, f2, i2 || l2.key, r2 || l2.ref, null);
}
function K(n2) {
  function l2(n3) {
    var u2, t2;
    return this.getChildContext || (u2 = /* @__PURE__ */ new Set(), (t2 = {})[l2.__c] = this, this.getChildContext = function() {
      return t2;
    }, this.componentWillUnmount = function() {
      u2 = null;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value != n4.value && u2.forEach(function(n5) {
        n5.__e = true, M$1(n5);
      });
    }, this.sub = function(n4) {
      u2.add(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u2 && u2.delete(n4), l3 && l3.call(n4);
      };
    }), n3.children;
  }
  return l2.__c = "__cC" + h$2++, l2.__ = n2, l2.Provider = l2.__l = (l2.Consumer = function(n3, l3) {
    return n3.children(l3);
  }).contextType = l2, l2;
}
n = v$2.slice, l$2 = { __e: function(n2, l2, u2, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, u$2 = 0, x$1.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s != this.state ? this.__s : this.__s = d$2({}, this.state), "function" == typeof n2 && (n2 = n2(d$2({}, u2), this.props)), n2 && d$2(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), M$1(this));
}, x$1.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), M$1(this));
}, x$1.prototype.render = k$2, i$1 = [], o$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e$1 = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, $$1.__r = 0, f$2 = /(PointerCapture)$|Capture$/i, c$2 = 0, s$2 = F(false), a$2 = F(true), h$2 = 0;
var f$1 = 0;
function u$1(e2, t2, n2, o2, i2, u2) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f$1, __i: -1, __u: 0, __source: i2, __self: u2 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l$2.vnode && l$2.vnode(l2), l2;
}
var t, r, u, i, o = 0, f = [], c$1 = l$2, e = c$1.__b, a$1 = c$1.__r, v$1 = c$1.diffed, l$1 = c$1.__c, m$1 = c$1.unmount, s$1 = c$1.__;
function p$1(n2, t2) {
  c$1.__h && c$1.__h(r, n2, o || t2), o = 0;
  var u2 = r.__H || (r.__H = { __: [], __h: [] });
  return n2 >= u2.__.length && u2.__.push({}), u2.__[n2];
}
function d$1(n2) {
  return o = 1, h$1(D$1, n2);
}
function h$1(n2, u2, i2) {
  var o2 = p$1(t++, 2);
  if (o2.t = n2, !o2.__c && (o2.__ = [D$1(void 0, u2), function(n3) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
    t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r, !r.__f)) {
    var f2 = function(n3, t2, r2) {
      if (!o2.__c.__H) return true;
      var u3 = o2.__c.__H.__.filter(function(n4) {
        return !!n4.__c;
      });
      if (u3.every(function(n4) {
        return !n4.__N;
      })) return !c2 || c2.call(this, n3, t2, r2);
      var i3 = o2.__c.props !== n3;
      return u3.forEach(function(n4) {
        if (n4.__N) {
          var t3 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i3 = true);
        }
      }), c2 && c2.call(this, n3, t2, r2) || i3;
    };
    r.__f = true;
    var c2 = r.shouldComponentUpdate, e2 = r.componentWillUpdate;
    r.componentWillUpdate = function(n3, t2, r2) {
      if (this.__e) {
        var u3 = c2;
        c2 = void 0, f2(n3, t2, r2), c2 = u3;
      }
      e2 && e2.call(this, n3, t2, r2);
    }, r.shouldComponentUpdate = f2;
  }
  return o2.__N || o2.__;
}
function y$1(n2, u2) {
  var i2 = p$1(t++, 3);
  !c$1.__s && C(i2.__H, u2) && (i2.__ = n2, i2.u = u2, r.__H.__h.push(i2));
}
function x(n2) {
  var u2 = r.context[n2.__c], i2 = p$1(t++, 9);
  return i2.c = n2, u2 ? (null == i2.__ && (i2.__ = true, u2.sub(r)), u2.props.value) : n2.__;
}
function j() {
  for (var n2; n2 = f.shift(); ) if (n2.__P && n2.__H) try {
    n2.__H.__h.forEach(z), n2.__H.__h.forEach(B), n2.__H.__h = [];
  } catch (t2) {
    n2.__H.__h = [], c$1.__e(t2, n2.__v);
  }
}
c$1.__b = function(n2) {
  r = null, e && e(n2);
}, c$1.__ = function(n2, t2) {
  n2 && t2.__k && t2.__k.__m && (n2.__m = t2.__k.__m), s$1 && s$1(n2, t2);
}, c$1.__r = function(n2) {
  a$1 && a$1(n2), t = 0;
  var i2 = (r = n2.__c).__H;
  i2 && (u === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = void 0;
  })) : (i2.__h.forEach(z), i2.__h.forEach(B), i2.__h = [], t = 0)), u = r;
}, c$1.diffed = function(n2) {
  v$1 && v$1(n2);
  var t2 = n2.__c;
  t2 && t2.__H && (t2.__H.__h.length && (1 !== f.push(t2) && i === c$1.requestAnimationFrame || ((i = c$1.requestAnimationFrame) || w$1)(j)), t2.__H.__.forEach(function(n3) {
    n3.u && (n3.__H = n3.u), n3.u = void 0;
  })), u = r = null;
}, c$1.__c = function(n2, t2) {
  t2.some(function(n3) {
    try {
      n3.__h.forEach(z), n3.__h = n3.__h.filter(function(n4) {
        return !n4.__ || B(n4);
      });
    } catch (r2) {
      t2.some(function(n4) {
        n4.__h && (n4.__h = []);
      }), t2 = [], c$1.__e(r2, n3.__v);
    }
  }), l$1 && l$1(n2, t2);
}, c$1.unmount = function(n2) {
  m$1 && m$1(n2);
  var t2, r2 = n2.__c;
  r2 && r2.__H && (r2.__H.__.forEach(function(n3) {
    try {
      z(n3);
    } catch (n4) {
      t2 = n4;
    }
  }), r2.__H = void 0, t2 && c$1.__e(t2, r2.__v));
};
var k$1 = "function" == typeof requestAnimationFrame;
function w$1(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), k$1 && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 35);
  k$1 && (t2 = requestAnimationFrame(r2));
}
function z(n2) {
  var t2 = r, u2 = n2.__c;
  "function" == typeof u2 && (n2.__c = void 0, u2()), r = t2;
}
function B(n2) {
  var t2 = r;
  n2.__c = n2.__(), r = t2;
}
function C(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
}
function D$1(n2, t2) {
  return "function" == typeof t2 ? t2(n2) : t2;
}
var a = {};
function c(n2, t2) {
  for (var r2 in t2) n2[r2] = t2[r2];
  return n2;
}
function s(n2, t2, r2) {
  var i2, o2 = /(?:\?([^#]*))?(#.*)?$/, e2 = n2.match(o2), u2 = {};
  if (e2 && e2[1]) for (var f2 = e2[1].split("&"), c2 = 0; c2 < f2.length; c2++) {
    var s2 = f2[c2].split("=");
    u2[decodeURIComponent(s2[0])] = decodeURIComponent(s2.slice(1).join("="));
  }
  n2 = d(n2.replace(o2, "")), t2 = d(t2 || "");
  for (var h2 = Math.max(n2.length, t2.length), v2 = 0; v2 < h2; v2++) if (t2[v2] && ":" === t2[v2].charAt(0)) {
    var l2 = t2[v2].replace(/(^:|[+*?]+$)/g, ""), p2 = (t2[v2].match(/[+*?]+$/) || a)[0] || "", m2 = ~p2.indexOf("+"), y2 = ~p2.indexOf("*"), U2 = n2[v2] || "";
    if (!U2 && !y2 && (p2.indexOf("?") < 0 || m2)) {
      i2 = false;
      break;
    }
    if (u2[l2] = decodeURIComponent(U2), m2 || y2) {
      u2[l2] = n2.slice(v2).map(decodeURIComponent).join("/");
      break;
    }
  } else if (t2[v2] !== n2[v2]) {
    i2 = false;
    break;
  }
  return (true === r2.default || false !== i2) && u2;
}
function h(n2, t2) {
  return n2.rank < t2.rank ? 1 : n2.rank > t2.rank ? -1 : n2.index - t2.index;
}
function v(n2, t2) {
  return n2.index = t2, n2.rank = function(n3) {
    return n3.props.default ? 0 : d(n3.props.path).map(l).join("");
  }(n2), n2.props;
}
function d(n2) {
  return n2.replace(/(^\/+|\/+$)/g, "").split("/");
}
function l(n2) {
  return ":" == n2.charAt(0) ? 1 + "*+?".indexOf(n2.charAt(n2.length - 1)) || 4 : 5;
}
var p = {}, m = [], y = [], U = null, g = { url: R() }, k = K(g);
function R() {
  var n2;
  return "" + ((n2 = U && U.location ? U.location : U && U.getCurrentLocation ? U.getCurrentLocation() : "undefined" != typeof location ? location : p).pathname || "") + (n2.search || "");
}
function $(n2, t2) {
  return void 0 === t2 && (t2 = false), "string" != typeof n2 && n2.url && (t2 = n2.replace, n2 = n2.url), function(n3) {
    for (var t3 = m.length; t3--; ) if (m[t3].canRoute(n3)) return true;
    return false;
  }(n2) && function(n3, t3) {
    void 0 === t3 && (t3 = "push"), U && U[t3] ? U[t3](n3) : "undefined" != typeof history && history[t3 + "State"] && history[t3 + "State"](null, null, n3);
  }(n2, t2 ? "replace" : "push"), I(n2);
}
function I(n2) {
  for (var t2 = false, r2 = 0; r2 < m.length; r2++) m[r2].routeTo(n2) && (t2 = true);
  return t2;
}
function M(n2) {
  if (n2 && n2.getAttribute) {
    var t2 = n2.getAttribute("href"), r2 = n2.getAttribute("target");
    if (t2 && t2.match(/^\//g) && (!r2 || r2.match(/^_?self$/i))) return $(t2);
  }
}
function b(n2) {
  return n2.stopImmediatePropagation && n2.stopImmediatePropagation(), n2.stopPropagation && n2.stopPropagation(), n2.preventDefault(), false;
}
function W(n2) {
  if (!(n2.ctrlKey || n2.metaKey || n2.altKey || n2.shiftKey || n2.button)) {
    var t2 = n2.target;
    do {
      if ("a" === t2.localName && t2.getAttribute("href")) {
        if (t2.hasAttribute("data-native") || t2.hasAttribute("native")) return;
        if (M(t2)) return b(n2);
      }
    } while (t2 = t2.parentNode);
  }
}
var w = false;
function D(n2) {
  n2.history && (U = n2.history), this.state = { url: n2.url || R() };
}
c(D.prototype = new x$1(), { shouldComponentUpdate: function(n2) {
  return true !== n2.static || n2.url !== this.props.url || n2.onChange !== this.props.onChange;
}, canRoute: function(n2) {
  var t2 = H(this.props.children);
  return void 0 !== this.g(t2, n2);
}, routeTo: function(n2) {
  this.setState({ url: n2 });
  var t2 = this.canRoute(n2);
  return this.p || this.forceUpdate(), t2;
}, componentWillMount: function() {
  this.p = true;
}, componentDidMount: function() {
  var n2 = this;
  w || (w = true, U || addEventListener("popstate", function() {
    I(R());
  }), addEventListener("click", W)), m.push(this), U && (this.u = U.listen(function(t2) {
    var r2 = t2.location || t2;
    n2.routeTo("" + (r2.pathname || "") + (r2.search || ""));
  })), this.p = false;
}, componentWillUnmount: function() {
  "function" == typeof this.u && this.u(), m.splice(m.indexOf(this), 1);
}, componentWillUpdate: function() {
  this.p = true;
}, componentDidUpdate: function() {
  this.p = false;
}, g: function(n2, t2) {
  n2 = n2.filter(v).sort(h);
  for (var r2 = 0; r2 < n2.length; r2++) {
    var i2 = n2[r2], o2 = s(t2, i2.props.path, i2.props);
    if (o2) return [i2, o2];
  }
}, render: function(n2, t2) {
  var e2, u2, f2 = n2.onChange, a2 = t2.url, s2 = this.c, h2 = this.g(H(n2.children), a2);
  if (h2 && (u2 = J(h2[0], c(c({ url: a2, matches: e2 = h2[1] }, e2), { key: void 0, ref: void 0 }))), a2 !== (s2 && s2.url)) {
    c(g, s2 = this.c = { url: a2, previous: s2 && s2.url, current: u2, path: u2 ? u2.props.path : null, matches: e2 }), s2.router = this, s2.active = u2 ? [u2] : [];
    for (var v2 = y.length; v2--; ) y[v2]({});
    "function" == typeof f2 && f2(s2);
  }
  return _(k.Provider, { value: s2 }, u2);
} });
function SiteHeader() {
  return /* @__PURE__ */ u$1("header", { className: "SiteHeader", children: [
    /* @__PURE__ */ u$1("div", { className: "top-bar" }),
    /* @__PURE__ */ u$1("div", { className: "context-bar" })
  ] });
}
function App() {
  return /* @__PURE__ */ u$1(k$2, { children: [
    /* @__PURE__ */ u$1(SiteHeader, {}),
    /* @__PURE__ */ u$1(D, { children: [
      /* @__PURE__ */ u$1(HomePage, {}),
      /* @__PURE__ */ u$1(Search, {})
    ] })
  ] });
}
function HomePage() {
  return /* @__PURE__ */ u$1("ul", { children: /* @__PURE__ */ u$1("li", {}) });
}
const defaults = [
  { name: "Quizzes", href: "/search/quizzes/?s=" },
  { name: "Badges", href: "/search/badges/?s=" },
  { name: "Playlists", href: "/search/playlists/?s=" }
];
const SearchContext = K(
  void 0
);
function SearchProvider({ children }) {
  const [selected, setSelected] = d$1(defaults[0]);
  return /* @__PURE__ */ u$1(SearchContext.Provider, { value: { selected, setSelected, tabs: defaults }, children });
}
function useSearch() {
  const context = x(SearchContext);
  if (!context) throw new Error("useSearch must be used within a SearchProvider");
  return context;
}
function CategoryBadge({ category }) {
  const colours = {
    Entertainment: "bg-blue-600",
    Gaming: "bg-purple-500",
    Geography: "bg-green-700",
    History: "bg-yellow-900",
    Holiday: "bg-red-600",
    "Just For Fun": "bg-yellow-400 text-black",
    Language: "bg-teal-600",
    Literature: "bg-gray-700",
    Miscellaneous: "bg-slate-600",
    Movies: "bg-red-400",
    Music: "bg-emerald-600",
    Religion: "bg-indigo-900",
    Science: "bg-blue-500",
    Sports: "bg-orange-600",
    Television: "bg-fuchsia-600"
  };
  const colour = colours[category] || "bg-gray-400 text-white";
  return /* @__PURE__ */ u$1("span", { className: `ml-2 px-2 py-1 text-xs rounded-full ${colour}`, children: category });
}
function QuizCard({ quiz }) {
  return /* @__PURE__ */ u$1("div", { className: "quiz-card flex flex-col gap-1", children: [
    /* @__PURE__ */ u$1("div", { className: "top flex gap-1", children: [
      /* @__PURE__ */ u$1("a", { className: "title", href: quiz.href, children: quiz.title }),
      /* @__PURE__ */ u$1("div", { className: "meta flex gap-1", children: [
        /* @__PURE__ */ u$1("div", { className: "author", children: [
          "by",
          /* @__PURE__ */ u$1("a", { href: quiz.author.href, className: "underline", children: quiz.author.name })
        ] }),
        /* @__PURE__ */ u$1(CategoryBadge, { category: quiz.category })
      ] })
    ] }),
    /* @__PURE__ */ u$1("p", { className: "desc", children: quiz.desc })
  ] });
}
function QuizList() {
  const [quizzes, setQuizzes] = d$1([]);
  const [loading, setLoading] = d$1(true);
  y$1(() => {
    async function fetchQuizzes() {
      setLoading(true);
      try {
        const res = await fetch("/search/quizzes/?s=");
        const html = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const raws = [...doc.querySelectorAll("#searchResults li")];
        const data = raws.map((raw) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          const author = raw.querySelector(".gameCreator a:nth-child(1)");
          return {
            title: ((_b = (_a = raw.querySelector(".gameName")) == null ? void 0 : _a.textContent) == null ? void 0 : _b.trim()) || "Untitled",
            desc: ((_d = (_c = raw.querySelector(".gameDesc")) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || "No description",
            href: ((_e = raw.querySelector(".gameName")) == null ? void 0 : _e.getAttribute("href")) || "#",
            category: ((_g = (_f = raw.querySelector(".gameCreator a:nth-child(2)")) == null ? void 0 : _f.textContent) == null ? void 0 : _g.trim()) || "Misc",
            author: {
              name: ((_h = author == null ? void 0 : author.textContent) == null ? void 0 : _h.trim()) || "Unknown",
              href: (author == null ? void 0 : author.getAttribute("href")) || "#"
            }
          };
        });
        setQuizzes(data);
      } catch (err) {
        console.error("Failed to fetch quizzes");
      } finally {
        setLoading(false);
      }
    }
    fetchQuizzes();
  }, []);
  if (loading) return /* @__PURE__ */ u$1("div", { children: "Loading quizzes..." });
  return /* @__PURE__ */ u$1("ul", { class: "quiz-list", children: quizzes.map((quiz) => /* @__PURE__ */ u$1("li", { children: /* @__PURE__ */ u$1(QuizCard, { quiz }) })) });
}
function TabsButton({ tab, selected, onSelect }) {
  return /* @__PURE__ */ u$1(
    "button",
    {
      className: `tabs-button ${selected ? "selected" : ""}`,
      onClick: onSelect,
      children: tab.name
    }
  );
}
function SearchTabsMenu() {
  const { selected, setSelected, tabs } = useSearch();
  return /* @__PURE__ */ u$1("div", { className: "tabs-menu", children: /* @__PURE__ */ u$1("ul", { className: "tabs-menu-list", children: tabs.map((tab) => /* @__PURE__ */ u$1("li", { className: "tabs-menu-list-item", children: /* @__PURE__ */ u$1(
    TabsButton,
    {
      tab,
      selected: selected.href === tab.href,
      onSelect: () => setSelected(tab)
    }
  ) }, tab.href)) }) });
}
function SearchTabs() {
  const { selected } = useSearch();
  return /* @__PURE__ */ u$1(k$2, { children: [
    /* @__PURE__ */ u$1(SearchTabsMenu, {}),
    selected.name === "Quizzes" && /* @__PURE__ */ u$1(QuizList, {})
  ] });
}
function Search() {
  return /* @__PURE__ */ u$1(SearchProvider, { children: /* @__PURE__ */ u$1(SearchTabs, {}) });
}
function mount() {
  let container = document.getElementById("home");
  if (!container) {
    container = document.createElement("main");
    container.id = "search";
    document.body.prepend(container);
  }
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "https://cdn.tailwindcss.com";
  document.head.appendChild(style);
  E(/* @__PURE__ */ u$1(App, {}), container);
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}
