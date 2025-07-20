import {r as d, a as H, R} from "./vendor-b1791c80.js";
import {i as B, g as F, l as N} from "./firebase-2b487b29.js";
(function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        i(s);
    new MutationObserver(s => {
        for (const n of s)
            if (n.type === "childList")
                for (const m of n.addedNodes)
                    m.tagName === "LINK" && m.rel === "modulepreload" && i(m)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(s) {
        const n = {};
        return s.integrity && (n.integrity = s.integrity),
        s.referrerPolicy && (n.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? n.credentials = "include" : s.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin",
        n
    }
    function i(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const n = t(s);
        fetch(s.href, n)
    }
}
)();
var I = {
    exports: {}
}
  , y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var L = d
  , G = Symbol.for("react.element")
  , U = Symbol.for("react.fragment")
  , _ = Object.prototype.hasOwnProperty
  , O = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , W = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function M(a, r, t) {
    var i, s = {}, n = null, m = null;
    t !== void 0 && (n = "" + t),
    r.key !== void 0 && (n = "" + r.key),
    r.ref !== void 0 && (m = r.ref);
    for (i in r)
        _.call(r, i) && !W.hasOwnProperty(i) && (s[i] = r[i]);
    if (a && a.defaultProps)
        for (i in r = a.defaultProps,
        r)
            s[i] === void 0 && (s[i] = r[i]);
    return {
        $$typeof: G,
        type: a,
        key: n,
        ref: m,
        props: s,
        _owner: O.current
    }
}
y.Fragment = U;
y.jsx = M;
y.jsxs = M;
I.exports = y;
var e = I.exports
  , w = {}
  , S = H;
w.createRoot = S.createRoot,
w.hydrateRoot = S.hydrateRoot;
const P = d.createContext()
  , q = () => {
    const a = d.useContext(P);
    if (!a)
        throw new Error("useTheme must be used within a ThemeProvider");
    return a
}
  , V = ({children: a}) => {
    const [r,t] = d.useState( () => {
        if (typeof window < "u") {
            const s = localStorage.getItem("theme");
            return s ? s === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches
        }
        return !0
    }
    );
    d.useEffect( () => {
        localStorage.setItem("theme", r ? "dark" : "light"),
        r ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
    }
    , [r]);
    const i = () => {
        t(!r)
    }
    ;
    return e.jsx(P.Provider, {
        value: {
            isDark: r,
            toggleTheme: i
        },
        children: a
    })
}
  , $ = {
    apiKey: "AIzaSyDiYIG9Y5BSa-OHdhtiZtyiVFxAsaaFeFc",
    authDomain: "raiyans-portfolio.firebaseapp.com",
    projectId: "raiyans-portfolio",
    storageBucket: "raiyans-portfolio.firebasestorage.app",
    messagingSenderId: "1070723878619",
    appId: "1:1070723878619:web:df64104e79bdd9fb6d06fe",
    measurementId: "G-QH1PRL0FP4"
}
  , Y = B($);
let b;
typeof window < "u" && (b = F(Y));
const X = () => (d.useEffect( () => {
    b && N(b, "page_view", {
        page_title: document.title,
        page_location: window.location.href
    })
}
, []),
{
    trackEvent: (r, t={}) => {
        b && N(b, r, t)
    }
})
  , J = () => {
    const a = document.createElement("link");
    if (a.rel = "preload",
    a.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
    a.as = "style",
    document.head.appendChild(a),
    window.location.pathname === "/" || window.location.hash === "#hero") {
        const r = new Image;
        r.src = "/Photos/Raiyan.jpg"
    }
}
;
var Q = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const Z = a => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , K = (a, r) => {
    const t = d.forwardRef( ({color: i="currentColor", size: s=24, strokeWidth: n=2, absoluteStrokeWidth: m, children: l, ...x}, c) => d.createElement("svg", {
        ref: c,
        ...Q,
        width: s,
        height: s,
        stroke: i,
        strokeWidth: m ? Number(n) * 24 / Number(s) : n,
        className: `lucide lucide-${Z(a)}`,
        ...x
    }, [...r.map( ([h,g]) => d.createElement(h, g)), ...(Array.isArray(l) ? l : [l]) || []]));
    return t.displayName = `${a}`,
    t
}
;
var o = K;
const ee = o("AlertCircle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]])
  , te = o("Award", [["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}], ["path", {
    d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",
    key: "em7aur"
}]])
  , ae = o("BookOpen", [["path", {
    d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",
    key: "vv98re"
}], ["path", {
    d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
    key: "1cyq3y"
}]])
  , re = o("Bot", [["rect", {
    width: "18",
    height: "10",
    x: "3",
    y: "11",
    rx: "2",
    key: "1ofdy3"
}], ["circle", {
    cx: "12",
    cy: "5",
    r: "2",
    key: "f1ur92"
}], ["path", {
    d: "M12 7v4",
    key: "xawao1"
}], ["line", {
    x1: "8",
    x2: "8",
    y1: "16",
    y2: "16",
    key: "h6x27f"
}], ["line", {
    x1: "16",
    x2: "16",
    y1: "16",
    y2: "16",
    key: "5lty7f"
}]])
  , se = o("Calendar", [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    ry: "2",
    key: "eu3xkr"
}], ["line", {
    x1: "16",
    x2: "16",
    y1: "2",
    y2: "6",
    key: "m3sa8f"
}], ["line", {
    x1: "8",
    x2: "8",
    y1: "2",
    y2: "6",
    key: "18kwsl"
}], ["line", {
    x1: "3",
    x2: "21",
    y1: "10",
    y2: "10",
    key: "xt86sb"
}]])
  , ie = o("CheckCircle", [["path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
    key: "g774vq"
}], ["polyline", {
    points: "22 4 12 14.01 9 11.01",
    key: "6xbx8j"
}]])
  , ne = o("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]])
  , le = o("Cloud", [["path", {
    d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
    key: "p7xjir"
}]])
  , oe = o("Code", [["polyline", {
    points: "16 18 22 12 16 6",
    key: "z7tu5w"
}], ["polyline", {
    points: "8 6 2 12 8 18",
    key: "1eg1df"
}]])
  , de = o("Database", [["ellipse", {
    cx: "12",
    cy: "5",
    rx: "9",
    ry: "3",
    key: "msslwz"
}], ["path", {
    d: "M3 5V19A9 3 0 0 0 21 19V5",
    key: "1wlel7"
}], ["path", {
    d: "M3 12A9 3 0 0 0 21 12",
    key: "mv7ke4"
}]])
  , p = o("ExternalLink", [["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}], ["polyline", {
    points: "15 3 21 3 21 9",
    key: "mznyad"
}], ["line", {
    x1: "10",
    x2: "21",
    y1: "14",
    y2: "3",
    key: "18c3s4"
}]])
  , j = o("Figma", [["path", {
    d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",
    key: "1340ok"
}], ["path", {
    d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",
    key: "1hz3m3"
}], ["path", {
    d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",
    key: "1oz8n2"
}], ["path", {
    d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",
    key: "1ff65i"
}], ["path", {
    d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",
    key: "pdip6e"
}]])
  , k = o("Github", [["path", {
    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    key: "tonef"
}], ["path", {
    d: "M9 18c-4.51 2-5-2-7-2",
    key: "9comsn"
}]])
  , ce = o("Globe", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "2",
    x2: "22",
    y1: "12",
    y2: "12",
    key: "1dnqot"
}], ["path", {
    d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
    key: "nb9nel"
}]])
  , E = o("Linkedin", [["path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    key: "c2jq9f"
}], ["rect", {
    width: "4",
    height: "12",
    x: "2",
    y: "9",
    key: "mk3on5"
}], ["circle", {
    cx: "4",
    cy: "4",
    r: "2",
    key: "bt5ra8"
}]])
  , z = o("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]])
  , me = o("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]])
  , C = o("Moon", [["path", {
    d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
    key: "a7tn18"
}]])
  , he = o("Newspaper", [["path", {
    d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",
    key: "7pis2x"
}], ["path", {
    d: "M18 14h-8",
    key: "sponae"
}], ["path", {
    d: "M15 18h-5",
    key: "95g1m2"
}], ["path", {
    d: "M10 6h8v4h-8V6Z",
    key: "smlsk5"
}]])
  , ge = o("Send", [["path", {
    d: "m22 2-7 20-4-9-9-4Z",
    key: "1q3vgg"
}], ["path", {
    d: "M22 2 11 13",
    key: "nzbqef"
}]])
  , A = o("Sun", [["circle", {
    cx: "12",
    cy: "12",
    r: "4",
    key: "4exip2"
}], ["path", {
    d: "M12 2v2",
    key: "tus03m"
}], ["path", {
    d: "M12 20v2",
    key: "1lh1kg"
}], ["path", {
    d: "m4.93 4.93 1.41 1.41",
    key: "149t6j"
}], ["path", {
    d: "m17.66 17.66 1.41 1.41",
    key: "ptbguv"
}], ["path", {
    d: "M2 12h2",
    key: "1t8f8n"
}], ["path", {
    d: "M20 12h2",
    key: "1q8mjw"
}], ["path", {
    d: "m6.34 17.66-1.41 1.41",
    key: "1m8zz5"
}], ["path", {
    d: "m19.07 4.93-1.41 1.41",
    key: "1shlcs"
}]])
  , T = o("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]])
  , xe = o("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , pe = () => {
    const [a,r] = d.useState(!1)
      , [t,i] = d.useState(!1)
      , {isDark: s, toggleTheme: n} = q();
    d.useEffect( () => {
        const l = () => {
            i(window.scrollY > 50)
        }
        ;
        return window.addEventListener("scroll", l),
        () => window.removeEventListener("scroll", l)
    }
    , []);
    const m = [{
        name: "About",
        href: "#about"
    }, {
        name: "Skills",
        href: "#skills"
    }, {
        name: "Recognition",
        href: "#recognition"
    }, {
        name: "Projects",
        href: "#projects"
    }, {
        name: "Writing",
        href: "#writing"
    }, {
        name: "Contact",
        href: "#contact"
    }];
    return e.jsx("header", {
        className: `fixed top-0 w-full z-50 transition-all duration-300 ${t ? "bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-gray-200 dark:border-dark-border" : "bg-transparent"}`,
        children: e.jsxs("nav", {
            className: "container-max section-padding py-4 lg:py-6",
            children: [e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [e.jsx("div", {
                    className: "flex-shrink-0",
                    children: e.jsx("h1", {
                        className: "text-lg lg:text-xl font-light gradient-text tracking-wide",
                        children: "Raiyan Bin Sarwar"
                    })
                }), e.jsxs("div", {
                    className: "hidden md:flex items-center space-x-8",
                    children: [e.jsx("div", {
                        className: "flex items-baseline space-x-6 lg:space-x-8",
                        children: m.map(l => e.jsxs("a", {
                            href: l.href,
                            className: "theme-text-muted hover:text-primary-400 px-2 py-1 text-sm font-light transition-all duration-300 relative group",
                            children: [l.name, e.jsx("span", {
                                className: "absolute bottom-0 left-0 w-0 h-px bg-primary-400 transition-all duration-300 group-hover:w-full"
                            })]
                        }, l.name))
                    }), e.jsx("button", {
                        onClick: n,
                        className: "p-2 rounded-lg border minimal-border hover:scale-110 transition-all duration-300",
                        "aria-label": "Toggle theme",
                        children: s ? e.jsx(A, {
                            className: "w-4 h-4 text-yellow-400"
                        }) : e.jsx(C, {
                            className: "w-4 h-4 text-blue-600"
                        })
                    })]
                }), e.jsxs("div", {
                    className: "md:hidden flex items-center space-x-2",
                    children: [e.jsx("button", {
                        onClick: n,
                        className: "p-2 rounded-lg border minimal-border transition-all duration-300",
                        "aria-label": "Toggle theme",
                        children: s ? e.jsx(A, {
                            className: "w-4 h-4 text-yellow-400"
                        }) : e.jsx(C, {
                            className: "w-4 h-4 text-blue-600"
                        })
                    }), e.jsx("button", {
                        onClick: () => r(!a),
                        className: "theme-text-muted hover:text-primary-400 p-2 transition-colors duration-300",
                        children: a ? e.jsx(xe, {
                            size: 20
                        }) : e.jsx(me, {
                            size: 20
                        })
                    })]
                })]
            }), a && e.jsx("div", {
                className: "md:hidden mt-6 pb-4",
                children: e.jsx("div", {
                    className: "px-4 pt-4 pb-6 space-y-3 card backdrop-blur-md",
                    children: m.map(l => e.jsx("a", {
                        href: l.href,
                        className: "theme-text-muted hover:text-primary-400 block px-2 py-2 text-base font-light transition-colors duration-300",
                        onClick: () => r(!1),
                        children: l.name
                    }, l.name))
                })
            })]
        })
    })
}
  , ue = ({texts: a, typingSpeed: r=100, deletingSpeed: t=50, delayBetweenTexts: i=2e3, className: s=""}) => {
    const [n,m] = d.useState(0)
      , [l,x] = d.useState("")
      , [c,h] = d.useState(!1)
      , [g,u] = d.useState(!0);
    return d.useEffect( () => {
        const f = a[n]
          , v = setTimeout( () => {
            !c && l === f ? setTimeout( () => h(!0), i) : c && l === "" ? (h(!1),
            m(D => (D + 1) % a.length)) : x(c ? f.substring(0, l.length - 1) : f.substring(0, l.length + 1))
        }
        , c ? t : r);
        return () => clearTimeout(v)
    }
    , [l, n, c, a, r, t, i]),
    d.useEffect( () => {
        const f = setInterval( () => {
            u(v => !v)
        }
        , 530);
        return () => clearInterval(f)
    }
    , []),
    e.jsxs("span", {
        className: s,
        children: [l, e.jsx("span", {
            className: `${g ? "opacity-100" : "opacity-0"} transition-opacity duration-100`,
            children: "|"
        })]
    })
}
  , fe = () => {
    const a = ["Hello there, I am Raiyan Bin Sarwar", "Aspiring Software Developer", "Microsoft Student Ambassador"];
    return e.jsxs("section", {
        id: "hero",
        className: "min-h-screen flex items-center justify-center theme-bg pt-16 sm:pt-20 relative overflow-hidden",
        role: "banner",
        children: [e.jsxs("div", {
            className: "absolute inset-0 opacity-20",
            children: [e.jsx("div", {
                className: "absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl floating-animation"
            }), e.jsx("div", {
                className: "absolute bottom-20 right-10 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl",
                style: {
                    animationDelay: "2s"
                }
            }), e.jsx("div", {
                className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-400/5 via-transparent to-blue-400/5 rounded-full blur-3xl"
            })]
        }), e.jsxs("div", {
            className: "container-max section-padding relative z-10",
            children: [e.jsx("h1", {
                className: "sr-only",
                children: "Raiyan Bin Sarwar - Microsoft Student Ambassador, GitHub Campus Expert, and AI Developer from Bangladesh"
            }), e.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center",
                children: [e.jsxs("div", {
                    className: "animate-fade-in space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1",
                    children: [e.jsxs("div", {
                        className: "space-y-4 lg:space-y-6",
                        children: [e.jsx("div", {
                            className: "min-h-[4rem] sm:min-h-[5rem] lg:min-h-[6rem] flex items-center justify-center lg:justify-start",
                            children: e.jsx(ue, {
                                texts: a,
                                className: "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extralight theme-text tracking-tight leading-tight",
                                typingSpeed: 80,
                                deletingSpeed: 40,
                                delayBetweenTexts: 2500
                            })
                        }), e.jsx("h2", {
                            className: "text-sm sm:text-base md:text-lg theme-text-muted font-light max-w-lg mx-auto lg:mx-0 leading-relaxed",
                            children: "Building innovative solutions and empowering communities through technology"
                        })]
                    }), e.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-3 lg:gap-4 items-center justify-center lg:justify-start",
                        children: [e.jsxs("a", {
                            href: "#projects",
                            className: "inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 font-medium text-sm w-full sm:w-auto justify-center group",
                            children: [e.jsx("span", {
                                children: "View Work"
                            }), e.jsx("div", {
                                className: "w-1 h-1 bg-current rounded-full ml-2 group-hover:w-2 transition-all duration-300"
                            })]
                        }), e.jsxs("a", {
                            href: "#contact",
                            className: "inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 theme-text rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 font-medium text-sm w-full sm:w-auto justify-center group",
                            children: [e.jsx("span", {
                                children: "Get In Touch"
                            }), e.jsx("div", {
                                className: "ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                children: "→"
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "flex space-x-6 lg:space-x-8 pt-4 justify-center lg:justify-start",
                        children: [e.jsxs("a", {
                            href: "https://github.com/wizziez",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center theme-text-muted hover:text-primary-400 transition-all duration-300 text-sm font-light relative group",
                            children: [e.jsx(k, {
                                className: "w-4 h-4 mr-2"
                            }), "GitHub", e.jsx("div", {
                                className: "absolute -bottom-1 left-0 w-0 h-px bg-primary-400 group-hover:w-full transition-all duration-300"
                            })]
                        }), e.jsxs("a", {
                            href: "https://www.linkedin.com/in/raiyanbsarwar/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center theme-text-muted hover:text-primary-400 transition-all duration-300 text-sm font-light relative group",
                            children: [e.jsx(E, {
                                className: "w-4 h-4 mr-2"
                            }), "LinkedIn", e.jsx("div", {
                                className: "absolute -bottom-1 left-0 w-0 h-px bg-primary-400 group-hover:w-full transition-all duration-300"
                            })]
                        }), e.jsxs("a", {
                            href: "mailto:raiyanbsarwar@gmail.com",
                            className: "flex items-center theme-text-muted hover:text-primary-400 transition-all duration-300 text-sm font-light relative group",
                            children: [e.jsx(z, {
                                className: "w-4 h-4 mr-2"
                            }), "Email", e.jsx("div", {
                                className: "absolute -bottom-1 left-0 w-0 h-px bg-primary-400 group-hover:w-full transition-all duration-300"
                            })]
                        })]
                    })]
                }), e.jsx("div", {
                    className: "flex justify-center animate-slide-up order-1 lg:order-2",
                    children: e.jsxs("div", {
                        className: "relative group",
                        children: [e.jsx("div", {
                            className: "absolute -inset-6 bg-gradient-to-r from-primary-400/30 via-blue-500/30 to-purple-500/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 floating-animation"
                        }), e.jsxs("div", {
                            className: "relative",
                            children: [e.jsx("div", {
                                className: "w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden card-elevated backdrop-blur-sm group-hover:scale-105 transition-all duration-500",
                                children: e.jsx("img", {
                                    src: "/Photos/Raiyan.jpg",
                                    alt: "Raiyan Bin Sarwar",
                                    className: "w-full h-full object-cover transition-all duration-700"
                                })
                            }), e.jsx("div", {
                                className: "absolute -top-3 -right-3 w-6 h-6 bg-primary-400 rounded-full opacity-80 animate-ping"
                            }), e.jsx("div", {
                                className: "absolute -bottom-3 -left-3 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse"
                            }), e.jsx("div", {
                                className: "absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/10 via-transparent to-blue-500/10 blur-xl animate-pulse"
                            })]
                        })]
                    })
                })]
            }), e.jsx("div", {
                className: "flex justify-center pt-12",
                children: e.jsx("a", {
                    href: "#about",
                    className: "flex flex-col items-center theme-text-muted hover:text-primary-400 transition-colors duration-300 group bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full p-3 animate-bounce",
                    "aria-label": "Scroll down to about section",
                    children: e.jsx(ne, {
                        className: "w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                    })
                })
            })]
        })]
    })
}
  , be = () => {
    const a = [{
        icon: e.jsx(oe, {
            className: "w-5 h-5"
        }),
        title: "Programming",
        skills: ["Python", "C", "C++", "Java", "Shell Script"],
        color: "text-blue-400"
    }, {
        icon: e.jsx(le, {
            className: "w-5 h-5"
        }),
        title: "Cloud and AI",
        skills: ["Azure AI Foundry", "Azure Cloud", "Azure AI Studio"],
        color: "text-green-400"
    }, {
        icon: e.jsx(de, {
            className: "w-5 h-5"
        }),
        title: "Development",
        skills: ["Frontend Dev", "API Integration", "UI/UX Design", "MySQL", "MongoDB"],
        color: "text-purple-400"
    }, {
        icon: e.jsx(T, {
            className: "w-5 h-5"
        }),
        title: "Community Tech Leadership",
        skills: ["Microsoft Student Ambassador", "Tech-based varsity clubs leadership", "GitHub Campus Expert (2nd undergraduate from Bangladesh)"],
        color: "text-orange-400"
    }];
    return e.jsx("section", {
        id: "skills",
        className: "py-16 sm:py-20 lg:py-24 theme-bg",
        children: e.jsxs("div", {
            className: "container-max section-padding",
            children: [e.jsxs("div", {
                className: "text-center mb-12 sm:mb-16 lg:mb-20",
                children: [e.jsx("h2", {
                    className: "text-2xl sm:text-3xl md:text-4xl font-extralight theme-text mb-4 tracking-wide",
                    children: "Skills & Expertise"
                }), e.jsx("p", {
                    className: "text-base sm:text-lg theme-text-muted max-w-2xl mx-auto font-light",
                    children: "Combining technical excellence with community leadership"
                })]
            }), e.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6",
                children: a.map( (r, t) => e.jsxs("div", {
                    className: "card-elevated p-6 lg:p-8 group hover:scale-[1.02] transition-all duration-500 glow-effect",
                    children: [e.jsx("div", {
                        className: `inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-dark-border/30 dark:to-dark-border/20 ${r.color} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`,
                        children: r.icon
                    }), e.jsx("h3", {
                        className: "text-base lg:text-lg font-light theme-text mb-4 lg:mb-6 tracking-wide group-hover:text-primary-400 transition-colors duration-300",
                        children: r.title
                    }), e.jsx("div", {
                        className: "space-y-3",
                        children: r.skills.map( (i, s) => e.jsxs("div", {
                            className: "flex items-center group/item",
                            children: [e.jsx("div", {
                                className: "w-1 h-1 bg-primary-400/40 rounded-full mr-3 group-hover/item:w-1.5 group-hover/item:bg-primary-400/60 transition-all duration-300"
                            }), e.jsx("span", {
                                className: "theme-text-secondary text-sm font-light",
                                children: i
                            })]
                        }, s))
                    })]
                }, t))
            }), e.jsx("div", {
                className: "mt-12 lg:mt-16 text-center",
                children: e.jsx("div", {
                    className: "inline-block",
                    children: e.jsxs("div", {
                        className: "card-elevated p-6 lg:p-8 group hover:scale-[1.02] transition-all duration-500 glow-effect relative overflow-hidden",
                        children: [e.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-primary-400/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        }), e.jsxs("div", {
                            className: "relative z-10",
                            children: [e.jsxs("div", {
                                className: "flex items-center justify-center mb-4",
                                children: [e.jsx("div", {
                                    className: "w-8 h-8 bg-gradient-to-r from-[#00BCF2] to-[#0078D4] rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-500",
                                    children: e.jsx("svg", {
                                        className: "w-5 h-5 text-white",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: e.jsx("path", {
                                            d: "M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"
                                        })
                                    })
                                }), e.jsx("h4", {
                                    className: "font-light theme-text text-base tracking-wide group-hover:text-primary-400 transition-colors duration-300",
                                    children: "Microsoft Student Ambassador"
                                })]
                            }), e.jsxs("a", {
                                href: "https://mvp.microsoft.com/en-US/studentambassadors/profile/4f82414f-c61b-4ceb-b346-375ff7622eaa",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center text-primary-400 hover:text-primary-300 transition-all duration-300 text-sm font-light group-hover:tracking-wide",
                                children: [e.jsx("span", {
                                    children: "View Profile"
                                }), e.jsx("div", {
                                    className: "ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300",
                                    children: "→"
                                })]
                            })]
                        })]
                    })
                })
            })]
        })
    })
}
  , ye = () => {
    const a = [{
        title: "SereneQuran AI App Featured",
        description: "Featured by The Daily Star for building AI-based Quran and Hadith suggestion app that suggests based on user moods",
        link: "https://tbsgraduates.net/career/interviews/serenequran-ai-powered-spiritual-guidance-at-your-fingertips/",
        source: "The Daily Star & TBS Graduates",
        type: "Product Feature",
        image: "/Photos/SereneQuran_Featured.png"
    }, {
        title: "Rectify Learn Startup Recognition",
        description: "Featured by The Daily Star for Rectify Learn joining four global startup hubs",
        link: "https://www.thedailystar.net/tech-startup/news/student-led-edtech-joins-four-global-startup-hubs-3906436",
        source: "The Daily Star",
        type: "Startup Feature",
        image: "/Photos/RectifyLearn_Featured.png"
    }, {
        title: "GitHub Education Feature",
        description: "Featured by GitHub Education for Rectify Learn achievements",
        link: "https://x.com/GitHubEducation/status/1928495539697455340",
        source: "GitHub Education",
        type: "Social Recognition",
        image: "/Photos/GitHub_Featured.png"
    }, {
        title: "Microsoft Recognition",
        description: "Featured by Microsoft for Rectify Learn innovation",
        link: "https://x.com/MSFTImagine/status/1930289691808485824",
        source: "Microsoft",
        type: "Corporate Feature",
        image: "/Photos/MSFT_Featured.png"
    }, {
        title: "Featured by Microsoft Imagine Cup for GitHub Student Developer Pack Insights",
        description: "Recognized by Microsoft Imagine Cup for valuable insights and contributions to the GitHub Student Developer Pack community",
        link: "https://x.com/MSFTImagine/status/1834275784753836240",
        source: "Microsoft Imagine Cup",
        type: "Recognition Feature",
        image: "/Photos/Imagine_Cup_Featured.png"
    }]
      , r = [{
        title: "Asifuzzaman's Path from BUP to Microsoft",
        description: "Alumni Interview Series - Where ambition meets opportunity",
        link: "https://www.thedailystar.net/campus/interviews/news/where-ambition-meets-opportunity-asifuzzamans-path-bup-microsoft-3930841",
        publication: "The Daily Star"
    }, {
        title: "Inside the Journey of a Bangladeshi Academic",
        description: "PhD pursuit at Texas A&M University",
        link: "https://www.thedailystar.net/campus/interviews/news/inside-the-journey-bangladeshi-academic-chasing-phd-texas-am-3935831",
        publication: "The Daily Star"
    }];
    return e.jsx("section", {
        id: "recognition",
        className: "py-16 sm:py-20 lg:py-24 theme-bg border-t border-gray-200 dark:border-dark-border/30",
        children: e.jsxs("div", {
            className: "container-max section-padding",
            children: [e.jsxs("div", {
                className: "text-center mb-12 sm:mb-16 lg:mb-20",
                children: [e.jsx("h2", {
                    className: "text-2xl sm:text-3xl md:text-4xl font-extralight theme-text mb-4 tracking-wide",
                    children: "Press & Recognition"
                }), e.jsx("p", {
                    className: "text-base sm:text-lg theme-text-muted max-w-2xl mx-auto font-light",
                    children: "Featured across national media and recognized by leading tech organizations"
                })]
            }), e.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-12 lg:mb-20",
                children: a.map( (t, i) => e.jsxs("div", {
                    className: "card p-6 lg:p-8 group",
                    children: [t.image && e.jsx("div", {
                        className: "w-full h-32 sm:h-40 rounded-lg overflow-hidden mb-4 bg-gray-100 dark:bg-gray-800",
                        children: e.jsx("img", {
                            src: t.image,
                            alt: t.title,
                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        })
                    }), e.jsxs("div", {
                        className: "flex items-start justify-between mb-4",
                        children: [e.jsx("div", {
                            className: "w-8 h-8 text-primary-400 rounded-lg flex items-center justify-center",
                            children: e.jsx(te, {
                                className: "w-4 h-4"
                            })
                        }), e.jsx("span", {
                            className: "text-xs font-light theme-text-muted bg-gray-100 dark:bg-dark-border/30 px-2 py-1 rounded",
                            children: t.type
                        })]
                    }), e.jsx("h3", {
                        className: "text-base lg:text-lg font-light theme-text mb-3 tracking-wide",
                        children: t.title
                    }), e.jsx("p", {
                        className: "theme-text-secondary mb-4 leading-relaxed text-sm font-light",
                        children: t.description
                    }), e.jsxs("div", {
                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                        children: [e.jsx("span", {
                            className: "text-xs theme-text-muted",
                            children: t.source
                        }), e.jsxs("a", {
                            href: t.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-primary-400 hover:text-primary-300 group-hover:translate-x-1 transition-all duration-300 flex items-center text-xs font-light",
                            children: ["Read ", e.jsx(p, {
                                className: "w-3 h-3 ml-1"
                            })]
                        })]
                    })]
                }, i))
            }), e.jsxs("div", {
                className: "card p-6 lg:p-8",
                children: [e.jsxs("div", {
                    className: "flex items-center mb-6 lg:mb-8",
                    children: [e.jsx(he, {
                        className: "w-5 h-5 text-primary-400 mr-3"
                    }), e.jsx("h3", {
                        className: "text-lg lg:text-xl font-light theme-text tracking-wide",
                        children: "Featured Articles"
                    })]
                }), e.jsx("p", {
                    className: "theme-text-muted mb-6 lg:mb-8 text-sm font-light",
                    children: "Alumni Interview Series for The Daily Star Campus"
                }), e.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6",
                    children: r.map( (t, i) => e.jsxs("div", {
                        className: "border border-gray-200 dark:border-dark-border/30 rounded-lg p-4 lg:p-6 hover:border-primary-500/30 transition-all duration-300 group",
                        children: [e.jsx("h4", {
                            className: "text-base font-light theme-text mb-2 tracking-wide",
                            children: t.title
                        }), e.jsx("p", {
                            className: "theme-text-secondary mb-4 text-sm font-light",
                            children: t.description
                        }), e.jsxs("div", {
                            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                            children: [e.jsx("span", {
                                className: "text-xs theme-text-muted",
                                children: t.publication
                            }), e.jsxs("a", {
                                href: t.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-primary-400 hover:text-primary-300 transition-colors duration-300 flex items-center text-xs font-light group-hover:translate-x-1 transition-all",
                                children: ["Read ", e.jsx(p, {
                                    className: "w-3 h-3 ml-1"
                                })]
                            })]
                        })]
                    }, i))
                })]
            })]
        })
    })
}
  , ve = () => {
    const a = [{
        title: "Trainee Developer",
        company: "Brain Station 23",
        period: "July 2025 - Present",
        highlights: ["Currently training in modern development practices and technologies", "Working on real-world projects to enhance technical skills", "Collaborating with senior developers on innovative solutions"]
    }, {
        title: "Chief Operating Officer",
        company: "Rectify Learn",
        period: "May 2025 - Present",
        highlights: ["Leading operations for an AI-powered EdTech startup, recognized by Microsoft for Startups, GitHub for Startups, and Notion for Startups", "Successfully managed platform operations and user growth, achieving 100+ active users", "Led frontend development and integrated backend APIs, resulting in a 10% improvement in user responsiveness"]
    }]
      , r = [{
        title: "Delegate – Harvard College Project for Asian and International Relations (HPAIR ACONF)",
        company: "Harvard University",
        period: "May 2025",
        highlights: ["Selected as one of 300 global delegates from a highly competitive pool of applicants to attend the HPAIR Asia Conference (ACONF), hosted by Harvard University", "This prestigious event brings together student leaders, young professionals, and policymakers to engage in high-impact dialogue on pressing global issues", "Participated in multidisciplinary panels, workshops, and networking sessions alongside changemakers from over 100 countries"]
    }, {
        title: "HPAIR Harvard Conference Delegate",
        company: "Harvard University",
        period: "May 2025",
        highlights: ["Selected from 50,000+ applicants across 70+ countries", "One of 500 delegates for prestigious conference", "Engaged with global leaders on pressing issues"]
    }, {
        title: "Young Leader Fellowship",
        company: "Your Big Year®",
        period: "Feb 2025 - May 2025",
        highlights: ["Selected as one of 50 fellows for Global Citizenship Fellowship", "Engaged in paid project with Microsoft on AI-driven solutions", "Developed leadership and project management skills"]
    }, {
        title: "Campus Ambassador",
        company: "bdapps",
        period: "Dec 2023 - May 2025",
        highlights: ["Organized inaugural event at BUP with 150+ participants", "Facilitated technical session for 100+ attendees", "Recognized as top 50 developer in Bangladesh"]
    }, {
        title: "Joint Secretary",
        company: "BUP Computer Programming Club",
        period: "May 2024 - Apr 2025",
        highlights: ["Wrote the overview for the BUP Computer Programming Club section on BUP's website and assisted in creating captions for various events", "Successfully coordinated and hosted the ICPC Preliminary Mock event", "Oversaw the inaugural gaming tournament, which was held over the course of a week, with the finals at BUP premises, attracting 350+ responses and 60-80 participants"]
    }, {
        title: "Assistant Joint Secretary",
        company: "BUP Robotics Club",
        period: "Oct 2022 - Present",
        highlights: ["Managed the operational aspects of bdapps' first event and assisted them in setting up their platform at BUP with the support of the BUP Robotics Club", "Actively monitored the recruitment procedure of the new members of 2023 batch"]
    }, {
        title: "Assistant Joint Secretary",
        company: "BUP InfoTech Club",
        period: "Sep 2022 - Present",
        highlights: ["Created content for various events", "Designed visually appealing graphics for event promotions"]
    }, {
        title: "Assistant Web Master",
        company: "IEEE BUP Student Branch",
        period: "Sep 2022 - Sep 2024",
        highlights: ["Served as one of the core photographers in the Mega IT Event named 'ICICT4SD 2023'", "Crafted eye-catching designs for various occasions and promotional campaigns", "Created the promotional video for IEEE Branch Fest 2023", "Created the rulebook for the 'Digital Art Segment' of IEEE Branchfest 2023"]
    }, {
        title: "Founding Sub Executive",
        company: "BUP Band Society - BUPBS",
        period: "Jul 2023 - Nov 2024",
        highlights: ["Prepared the sponsorship proposal letter for the inaugural recruitment event titled 'RockEnroll 2024'", "Created visually appealing designs for the national event 'BUP Band Fest 2024'; wrote several captions", "Created visually appealing designs for the event named 'Echoes'; and assisted in fundraising for the project Proshanti"]
    }];
    return e.jsx("section", {
        id: "about",
        className: "py-16 sm:py-20 lg:py-24 theme-bg border-t border-gray-200 dark:border-dark-border/30",
        role: "main",
        "aria-labelledby": "about-heading",
        children: e.jsxs("div", {
            className: "container-max section-padding",
            children: [e.jsxs("div", {
                className: "text-center mb-12 sm:mb-16 lg:mb-20",
                children: [e.jsx("h2", {
                    id: "about-heading",
                    className: "text-2xl sm:text-3xl md:text-4xl font-extralight theme-text mb-4 tracking-wide",
                    children: "About Me"
                }), e.jsx("p", {
                    className: "text-base sm:text-lg theme-text-muted max-w-2xl mx-auto font-light",
                    children: "Fueled by high energy levels and boundless enthusiasm"
                })]
            }), e.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start",
                children: [e.jsxs("div", {
                    className: "space-y-6 lg:space-y-8",
                    children: [e.jsxs("div", {
                        className: "prose prose-lg theme-text-secondary space-y-4 lg:space-y-6",
                        children: [e.jsx("p", {
                            className: "text-sm lg:text-base font-light leading-relaxed",
                            children: "Currently in my third year of Computer Science and Engineering at Bangladesh University of Professionals, I have consistently demonstrated leadership capabilities and a solution-oriented approach to addressing complex challenges, applying strategic thinking to foster impactful results."
                        }), e.jsxs("div", {
                            children: [e.jsx("h3", {
                                className: "text-base lg:text-lg font-light theme-text mb-3 tracking-wide",
                                children: "Media & Technology Advocacy"
                            }), e.jsx("p", {
                                className: "text-sm lg:text-base font-light leading-relaxed theme-text-secondary",
                                children: "Contributing writer for The Daily Star's Campus section and Postman Student Expert advocating for efficient API integration. Played a key role in launching bdapps, Bangladesh's national app store, facilitating campus introduction and participant onboarding."
                            })]
                        }), e.jsxs("div", {
                            children: [e.jsx("h3", {
                                className: "text-base lg:text-lg font-light theme-text mb-3 tracking-wide",
                                children: "Technical Writing & Community"
                            }), e.jsx("p", {
                                className: "text-sm lg:text-base font-light leading-relaxed theme-text-secondary",
                                children: "Active contributor to Microsoft Tech Community Hub, focusing on low-code/no-code solutions and developer tools. Collaborating with MVPs and Microsoft professionals while managing MLSA Bangladesh's social media presence to foster community engagement."
                            })]
                        }), e.jsxs("div", {
                            children: [e.jsx("h3", {
                                className: "text-base lg:text-lg font-light theme-text mb-3 tracking-wide",
                                children: "GitHub Campus Expert"
                            }), e.jsx("p", {
                                className: "text-sm lg:text-base font-light leading-relaxed theme-text-secondary",
                                children: "Distinguished as the second undergraduate GitHub Campus Expert from Bangladesh and first from BUP. Leveraging this platform to promote best practices in software development and foster collaborative learning environments."
                            })]
                        })]
                    }), e.jsx("div", {
                        className: "card p-4 lg:p-6",
                        children: e.jsx("p", {
                            className: "theme-text-secondary italic text-sm lg:text-base font-light leading-relaxed",
                            children: '"Looking to the future, I aspire to make meaningful contributions to the technology sector, utilizing my skills to drive societal progress."'
                        })
                    })]
                }), e.jsxs("div", {
                    className: "space-y-4",
                    children: [e.jsx("h3", {
                        className: "text-lg lg:text-xl font-light theme-text mb-6 tracking-wide",
                        children: "Experience"
                    }), a.map( (t, i) => e.jsxs("div", {
                        className: "card p-4 lg:p-6 hover:scale-[1.01] transition-all duration-300 group",
                        children: [e.jsxs("div", {
                            className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3",
                            children: [e.jsxs("div", {
                                children: [e.jsx("h4", {
                                    className: "text-sm lg:text-base font-medium theme-text group-hover:text-primary-400 transition-colors duration-300",
                                    children: t.title
                                }), e.jsx("p", {
                                    className: "text-xs lg:text-sm theme-text-muted font-light",
                                    children: t.company
                                })]
                            }), e.jsx("span", {
                                className: "text-xs theme-text-muted font-light mt-1 sm:mt-0",
                                children: t.period
                            })]
                        }), e.jsx("ul", {
                            className: "space-y-1",
                            children: t.highlights.map( (s, n) => e.jsxs("li", {
                                className: "text-xs lg:text-sm theme-text-secondary font-light leading-relaxed flex items-start",
                                children: [e.jsx("span", {
                                    className: "text-primary-400 mr-2 mt-1 flex-shrink-0",
                                    children: "•"
                                }), s]
                            }, n))
                        })]
                    }, i))]
                })]
            }), e.jsxs("div", {
                className: "mt-16 lg:mt-20",
                children: [e.jsxs("div", {
                    className: "text-center mb-12 lg:mb-16",
                    children: [e.jsx("h3", {
                        className: "text-xl lg:text-2xl font-light theme-text mb-4 tracking-wide",
                        children: "Extra Curricular Activities"
                    }), e.jsx("p", {
                        className: "text-sm lg:text-base theme-text-muted max-w-2xl mx-auto font-light",
                        children: "Leadership roles and contributions across various university clubs and organizations"
                    })]
                }), e.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8",
                    children: r.map( (t, i) => e.jsx("div", {
                        className: "card p-6 lg:p-8 hover:scale-[1.02] transition-all duration-300 group h-full",
                        children: e.jsxs("div", {
                            className: "flex flex-col h-full",
                            children: [e.jsxs("div", {
                                className: "mb-4",
                                children: [e.jsx("h4", {
                                    className: "text-base lg:text-lg font-medium theme-text group-hover:text-primary-400 transition-colors duration-300 mb-2",
                                    children: t.title
                                }), e.jsx("p", {
                                    className: "text-sm lg:text-base theme-text-muted font-light mb-3",
                                    children: t.company
                                }), e.jsx("span", {
                                    className: "text-xs theme-text-muted font-light bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full inline-block",
                                    children: t.period
                                })]
                            }), e.jsx("ul", {
                                className: "space-y-3 flex-1",
                                children: t.highlights.map( (s, n) => e.jsxs("li", {
                                    className: "text-sm lg:text-base theme-text-secondary font-light leading-relaxed flex items-start",
                                    children: [e.jsx("span", {
                                        className: "text-primary-400 mr-3 mt-1 flex-shrink-0",
                                        children: "•"
                                    }), s]
                                }, n))
                            })]
                        })
                    }, i))
                })]
            })]
        })
    })
}
  , je = () => {
    const a = [{
        title: "MLSA Bangladesh Website",
        description: "Official website for the Microsoft Learn Student Ambassadors Bangladesh community. Centralizes information, events, and opportunities for aspiring student ambassadors across Bangladesh.",
        icon: e.jsx(T, {
            className: "w-5 h-5"
        }),
        link: "https://mlsabangladesh.netlify.app/",
        tags: ["Community", "Web Development", "Microsoft"],
        color: "text-blue-400"
    }, {
        title: "SereneQuran",
        description: "Built and deployed a real-time mood-based Quran and Hadith verse generator using WebSocket API. Featured in 3+ national media outlets and accessed by 1,700+ users globally within the first month.",
        icon: e.jsx(ce, {
            className: "w-5 h-5"
        }),
        link: "https://serenequran.netlify.app",
        tags: ["AI", "WebSocket", "Real-time", "Featured"],
        color: "text-green-400"
    }, {
        title: "Rectify Learn – AI EdTech Platform",
        description: "Building an AI-powered educational technology platform. Featured by GitHub Education and Microsoft for innovation in the EdTech space with global startup hub participation.",
        icon: e.jsx(re, {
            className: "w-5 h-5"
        }),
        link: "https://rectifylearn.tech/",
        tags: ["AI", "EdTech", "Startup", "Featured"],
        color: "text-purple-400"
    }]
      , r = [{
        title: "AI Analytics Platform UI/UX",
        description: "A comprehensive UI/UX design for an AI-powered growth and analytics platform. Features include landing page design, user dashboard, and interactive data visualization components.",
        date: "December 2024",
        link: "https://drive.google.com/drive/folders/1XHjrEbKRidDR4ot8ijEuGfoI71ike0SV",
        tags: ["UI/UX", "Analytics", "Dashboard"],
        icon: e.jsx(j, {
            className: "w-5 h-5"
        }),
        color: "text-purple-500"
    }, {
        title: "Quizzly Platform Design",
        description: "Designed a modern, responsive interface for an AI-powered quiz generation platform. The design focuses on seamless PDF and text input integration, with an emphasis on user experience and clean aesthetics.",
        date: "September 2024",
        link: "https://drive.google.com/drive/u/2/folders/1LZGRjbtVDOtWw1vAbJEuTyWhBYpTaITV",
        tags: ["UI/UX", "AI", "Education"],
        icon: e.jsx(j, {
            className: "w-5 h-5"
        }),
        color: "text-purple-500"
    }, {
        title: "HealthBot Chat Interface",
        description: "Created an intuitive chat interface for a healthcare chatbot application. The design prioritizes accessibility and user-friendly interactions while maintaining a professional medical aesthetic.",
        date: "September 2024",
        link: "https://drive.google.com/drive/folders/1qeASWfx4WZcjxTY0B1gORqD8MYBLHR9d",
        tags: ["UI/UX", "Healthcare", "Chat"],
        icon: e.jsx(j, {
            className: "w-5 h-5"
        }),
        color: "text-purple-500"
    }];
    return e.jsx("section", {
        id: "projects",
        className: "py-16 sm:py-20 lg:py-24 theme-bg border-t border-gray-200 dark:border-dark-border/30",
        role: "main",
        "aria-labelledby": "projects-heading",
        children: e.jsxs("div", {
            className: "container-max section-padding",
            children: [e.jsxs("div", {
                className: "text-center mb-12 sm:mb-16 lg:mb-20",
                children: [e.jsx("h2", {
                    id: "projects-heading",
                    className: "text-2xl sm:text-3xl md:text-4xl font-extralight theme-text mb-4 tracking-wide",
                    children: "Featured Projects"
                }), e.jsx("p", {
                    className: "text-base sm:text-lg theme-text-muted max-w-2xl mx-auto font-light",
                    children: "Building innovative solutions that make a real-world impact"
                })]
            }), e.jsx("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: a.map( (t, i) => e.jsxs("div", {
                    className: "card-elevated p-6 lg:p-8 group hover:scale-[1.02] transition-all duration-500 glow-effect relative overflow-hidden",
                    children: [e.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-primary-400/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    }), e.jsxs("div", {
                        className: "relative z-10",
                        children: [e.jsx("div", {
                            className: `inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-dark-border/30 dark:to-dark-border/20 ${t.color} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`,
                            children: t.icon
                        }), e.jsx("h3", {
                            className: "text-base lg:text-lg font-light theme-text mb-4 tracking-wide group-hover:text-primary-400 transition-colors duration-300",
                            children: t.title
                        }), e.jsx("p", {
                            className: "theme-text-secondary mb-6 leading-relaxed text-sm font-light",
                            children: t.description
                        }), e.jsx("div", {
                            className: "flex flex-wrap gap-2 mb-6",
                            children: t.tags.map( (s, n) => e.jsx("span", {
                                className: "px-3 py-1 bg-gray-100/80 dark:bg-dark-border/30 theme-text-muted text-xs rounded-full font-light backdrop-blur-sm group-hover:bg-primary-400/10 group-hover:text-primary-400 transition-all duration-300",
                                children: s
                            }, n))
                        }), t.link !== "#" && e.jsxs("a", {
                            href: t.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-flex items-center text-primary-400 hover:text-primary-300 font-light group-hover:translate-x-1 transition-all duration-300 text-sm group/link",
                            children: [e.jsx("span", {
                                className: "group-hover/link:translate-x-1 transition-transform duration-300",
                                children: "Live Demo"
                            }), e.jsx(p, {
                                className: "w-3 h-3 ml-2 group-hover/link:rotate-12 transition-transform duration-300"
                            })]
                        })]
                    })]
                }, i))
            }), e.jsxs("div", {
                className: "mt-16 lg:mt-20",
                children: [e.jsxs("div", {
                    className: "text-center mb-8 lg:mb-12",
                    children: [e.jsx("h3", {
                        className: "text-xl sm:text-2xl md:text-3xl font-extralight theme-text mb-4 tracking-wide",
                        children: "UI/UX Design Projects"
                    }), e.jsx("p", {
                        className: "text-sm sm:text-base theme-text-muted max-w-xl mx-auto font-light",
                        children: "Crafting intuitive and aesthetically pleasing user experiences"
                    })]
                }), e.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: r.map( (t, i) => e.jsxs("div", {
                        className: "card-elevated p-6 group hover:scale-[1.02] transition-all duration-500 glow-effect relative overflow-hidden",
                        children: [e.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-purple-400/5 via-transparent to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        }), e.jsxs("div", {
                            className: "relative z-10",
                            children: [e.jsx("div", {
                                className: `inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/20 ${t.color} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`,
                                children: t.icon
                            }), e.jsxs("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [e.jsx("h4", {
                                    className: "text-base font-light theme-text tracking-wide group-hover:text-purple-400 transition-colors duration-300",
                                    children: t.title
                                }), e.jsx("span", {
                                    className: "text-xs theme-text-muted font-light",
                                    children: t.date
                                })]
                            }), e.jsx("p", {
                                className: "theme-text-secondary mb-4 leading-relaxed text-sm font-light",
                                children: t.description
                            }), e.jsx("div", {
                                className: "flex flex-wrap gap-2 mb-4",
                                children: t.tags.map( (s, n) => e.jsx("span", {
                                    className: "px-2 py-1 bg-purple-100/80 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs rounded-full font-light backdrop-blur-sm group-hover:bg-purple-400/10 transition-all duration-300",
                                    children: s
                                }, n))
                            }), e.jsxs("a", {
                                href: t.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center text-purple-500 hover:text-purple-400 font-light group-hover:translate-x-1 transition-all duration-300 text-sm group/link",
                                children: [e.jsx("span", {
                                    className: "group-hover/link:translate-x-1 transition-transform duration-300",
                                    children: "View Design"
                                }), e.jsx(p, {
                                    className: "w-3 h-3 ml-2 group-hover/link:rotate-12 transition-transform duration-300"
                                })]
                            })]
                        })]
                    }, i))
                })]
            }), e.jsx("div", {
                className: "text-center mt-12 lg:mt-16",
                children: e.jsxs("div", {
                    className: "card-elevated p-8 lg:p-10 glow-effect relative overflow-hidden group",
                    children: [e.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-primary-400/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    }), e.jsxs("div", {
                        className: "relative z-10",
                        children: [e.jsx("div", {
                            className: "w-16 h-16 bg-gradient-to-br from-primary-400/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg",
                            children: e.jsx(k, {
                                className: "w-8 h-8 text-primary-400"
                            })
                        }), e.jsx("h3", {
                            className: "text-lg lg:text-xl font-light theme-text mb-4 tracking-wide group-hover:text-primary-400 transition-colors duration-300",
                            children: "Want to see more?"
                        }), e.jsx("p", {
                            className: "theme-text-muted mb-8 text-sm font-light leading-relaxed max-w-md mx-auto",
                            children: "Check out my GitHub for more projects, contributions, and open-source work"
                        }), e.jsxs("a", {
                            href: "https://github.com/wizziez",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 font-medium text-sm group",
                            children: [e.jsx("span", {
                                className: "group-hover:translate-x-1 transition-transform duration-300",
                                children: "View GitHub Profile"
                            }), e.jsx(p, {
                                className: "ml-2 w-4 h-4 group-hover:rotate-12 transition-transform duration-300"
                            })]
                        })]
                    })]
                })
            })]
        })
    })
}
  , we = () => {
    const a = [{
        title: "Build Your Personalized AI Copilot",
        date: "October 2024",
        description: "A comprehensive guide on creating your own custom Copilot using Microsoft's Copilot Studio. Step-by-step instructions for building an intelligent AI assistant.",
        link: "https://techcommunity.microsoft.com/blog/educatordeveloperblog/unlock-the-power-of-microsoft-copilot-studio-build-your-personalized-ai-copilot/4264589",
        tags: ["AI", "Microsoft Copilot", "Tutorial"]
    }, {
        title: "Exploring GitHub Codespaces",
        date: "September 2024",
        description: "Deep dive into GitHub Codespaces and its powerful features for student developers. Learn how to leverage cloud-based development environments.",
        link: "https://techcommunity.microsoft.com/blog/educatordeveloperblog/exploring-the-power-of-codespaces-for-student-developers/4244670",
        tags: ["GitHub", "Cloud Development", "Students"]
    }, {
        title: "Host Your Portfolio with GitHub Pages",
        date: "September 2024",
        description: "A beginner-friendly guide to creating and hosting your personal portfolio using GitHub Pages. Step-by-step instructions for building your online presence.",
        link: "https://techcommunity.microsoft.com/blog/educatordeveloperblog/how-to-host-your-personal-portfolio-using-github-pages/4246304",
        tags: ["GitHub Pages", "Portfolio", "Web Development"]
    }, {
        title: "GitHub Student Developer Pack Guide",
        date: "September 2024",
        description: "Comprehensive overview of the GitHub Student Developer Pack and its valuable tools for tech students. Learn how to access and maximize these resources.",
        link: "https://techcommunity.microsoft.com/blog/educatordeveloperblog/github-student-developer-pack-developer-tools-for-tech-students/4219390",
        tags: ["GitHub", "Student Resources", "Developer Tools"]
    }];
    return e.jsx("section", {
        id: "writing",
        className: "py-16 sm:py-20 lg:py-24 theme-bg border-t border-gray-200 dark:border-dark-border/30",
        children: e.jsxs("div", {
            className: "container-max section-padding",
            children: [e.jsxs("div", {
                className: "text-center mb-12 sm:mb-16 lg:mb-20",
                children: [e.jsx("h2", {
                    className: "text-2xl sm:text-3xl md:text-4xl font-extralight theme-text mb-4 tracking-wide",
                    children: "Technical Writing"
                }), e.jsx("p", {
                    className: "text-base sm:text-lg theme-text-muted max-w-2xl mx-auto font-light",
                    children: "Sharing knowledge and insights with the developer community"
                })]
            }), e.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6",
                children: a.map( (r, t) => e.jsxs("div", {
                    className: "card p-6 lg:p-8 group hover:scale-[1.02] transition-all duration-300",
                    children: [e.jsxs("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [e.jsx("div", {
                            className: "w-8 h-8 text-primary-400 rounded-lg flex items-center justify-center",
                            children: e.jsx(ae, {
                                className: "w-4 h-4"
                            })
                        }), e.jsxs("div", {
                            className: "flex items-center text-xs theme-text-muted font-light",
                            children: [e.jsx(se, {
                                className: "w-3 h-3 mr-1"
                            }), r.date]
                        })]
                    }), e.jsx("h3", {
                        className: "text-base lg:text-lg font-light theme-text mb-3 tracking-wide",
                        children: r.title
                    }), e.jsx("p", {
                        className: "theme-text-secondary mb-4 leading-relaxed text-sm font-light",
                        children: r.description
                    }), e.jsx("div", {
                        className: "flex flex-wrap gap-2 mb-6",
                        children: r.tags.map( (i, s) => e.jsx("span", {
                            className: "px-2 py-1 bg-gray-100 dark:bg-dark-border/30 theme-text-muted text-xs rounded font-light",
                            children: i
                        }, s))
                    }), e.jsxs("a", {
                        href: r.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center text-primary-400 hover:text-primary-300 font-light group-hover:translate-x-1 transition-all duration-300 text-sm",
                        children: ["Read Article ", e.jsx(p, {
                            className: "w-3 h-3 ml-2"
                        })]
                    })]
                }, t))
            }), e.jsx("div", {
                className: "mt-12 lg:mt-16 text-center",
                children: e.jsxs("div", {
                    className: "card p-6 lg:p-8",
                    children: [e.jsx("h3", {
                        className: "text-lg lg:text-xl font-light theme-text mb-4 tracking-wide",
                        children: "Published on Microsoft Tech Community"
                    }), e.jsx("p", {
                        className: "theme-text-muted max-w-2xl mx-auto text-sm font-light",
                        children: "Contributing to the global developer community through educational content focused on modern development tools and best practices."
                    })]
                })
            })]
        })
    })
}
  , ke = () => {
    const [a,r] = d.useState({
        name: "",
        email: "",
        message: ""
    })
      , [t,i] = d.useState(!1)
      , [s,n] = d.useState(null)
      , m = c => {
        r({
            ...a,
            [c.target.name]: c.target.value
        })
    }
      , l = async c => {
        c.preventDefault(),
        i(!0),
        n(null);
        try {
            const h = new FormData;
            h.append("name", a.name),
            h.append("email", a.email),
            h.append("message", a.message);
            const g = await fetch("https://formspree.io/f/mqalezvp", {
                method: "POST",
                body: h,
                headers: {
                    Accept: "application/json"
                }
            });
            if (g.ok)
                n("success"),
                r({
                    name: "",
                    email: "",
                    message: ""
                });
            else {
                const u = await g.text();
                throw console.error("Formspree error:", g.status, u),
                new Error(`Failed to send message: ${g.status}`)
            }
        } catch (h) {
            console.error("Error sending email:", h),
            n("error");
            const g = encodeURIComponent(`Portfolio Contact from ${a.name}`)
              , u = encodeURIComponent(`Name: ${a.name}
Email: ${a.email}

Message:
${a.message}`);
            console.log("Fallback mailto:", `mailto:raiyanbsarwar@gmail.com?subject=${g}&body=${u}`)
        } finally {
            i(!1),
            setTimeout( () => n(null), 5e3)
        }
    }
      , x = [{
        icon: e.jsx(z, {
            className: "w-5 h-5"
        }),
        label: "Email",
        value: "raiyanbsarwar@gmail.com",
        link: "mailto:raiyanbsarwar@gmail.com"
    }, {
        icon: e.jsx(E, {
            className: "w-5 h-5"
        }),
        label: "LinkedIn",
        value: "linkedin.com/in/raiyanbsarwar",
        link: "https://www.linkedin.com/in/raiyanbsarwar/"
    }, {
        icon: e.jsx(k, {
            className: "w-5 h-5"
        }),
        label: "GitHub",
        value: "github.com/wizziez",
        link: "https://github.com/wizziez"
    }];
    return e.jsx("section", {
        id: "contact",
        className: "py-16 sm:py-20 lg:py-24 theme-bg border-t border-gray-200 dark:border-dark-border/30",
        children: e.jsxs("div", {
            className: "container-max section-padding",
            children: [e.jsxs("div", {
                className: "text-center mb-12 sm:mb-16 lg:mb-20",
                children: [e.jsx("h2", {
                    className: "text-2xl sm:text-3xl md:text-4xl font-extralight theme-text mb-4 tracking-wide",
                    children: "Let's Get Connected"
                }), e.jsx("p", {
                    className: "text-base sm:text-lg theme-text-muted max-w-2xl mx-auto font-light",
                    children: "Ready to collaborate or discuss opportunities? I'd love to hear from you."
                })]
            }), e.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12",
                children: [e.jsxs("div", {
                    className: "card p-6 lg:p-8",
                    children: [e.jsx("h3", {
                        className: "text-lg lg:text-xl font-light theme-text mb-6 lg:mb-8 tracking-wide",
                        children: "Send me a message"
                    }), s === "success" && e.jsxs("div", {
                        className: "mb-6 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-lg flex items-center shadow-sm",
                        children: [e.jsx(ie, {
                            className: "w-5 h-5 text-green-700 dark:text-green-400 mr-3"
                        }), e.jsx("span", {
                            className: "text-green-800 dark:text-green-200 text-sm font-medium",
                            children: "Message sent successfully! I'll get back to you soon."
                        })]
                    }), s === "error" && e.jsxs("div", {
                        className: "mb-6 p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-lg flex items-center shadow-sm",
                        children: [e.jsx(ee, {
                            className: "w-5 h-5 text-red-700 dark:text-red-400 mr-3"
                        }), e.jsx("span", {
                            className: "text-red-800 dark:text-red-200 text-sm font-medium",
                            children: "Failed to send message. Please try again or contact me directly."
                        })]
                    }), e.jsxs("form", {
                        onSubmit: l,
                        className: "space-y-4 lg:space-y-6",
                        children: [e.jsxs("div", {
                            children: [e.jsx("label", {
                                htmlFor: "name",
                                className: "block text-sm font-light theme-text-muted mb-2",
                                children: "Name"
                            }), e.jsx("input", {
                                type: "text",
                                id: "name",
                                name: "name",
                                required: !0,
                                value: a.name,
                                onChange: m,
                                className: "w-full px-4 py-3 bg-white dark:bg-transparent border-2 border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300 theme-text placeholder-gray-500 dark:placeholder-dark-text-muted",
                                placeholder: "Your name"
                            })]
                        }), e.jsxs("div", {
                            children: [e.jsx("label", {
                                htmlFor: "email",
                                className: "block text-sm font-light theme-text-muted mb-2",
                                children: "Email"
                            }), e.jsx("input", {
                                type: "email",
                                id: "email",
                                name: "email",
                                required: !0,
                                value: a.email,
                                onChange: m,
                                className: "w-full px-4 py-3 bg-white dark:bg-transparent border-2 border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300 theme-text placeholder-gray-500 dark:placeholder-dark-text-muted",
                                placeholder: "your.email@example.com"
                            })]
                        }), e.jsxs("div", {
                            children: [e.jsx("label", {
                                htmlFor: "message",
                                className: "block text-sm font-light theme-text-muted mb-2",
                                children: "Message"
                            }), e.jsx("textarea", {
                                id: "message",
                                name: "message",
                                required: !0,
                                rows: 4,
                                value: a.message,
                                onChange: m,
                                className: "w-full px-4 py-3 bg-white dark:bg-transparent border-2 border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300 theme-text placeholder-gray-500 dark:placeholder-dark-text-muted resize-none",
                                placeholder: "Tell me about your project or idea..."
                            })]
                        }), e.jsxs("button", {
                            type: "submit",
                            disabled: t,
                            className: `w-full px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 flex items-center justify-center group ${t ? "bg-gray-400 cursor-not-allowed" : "bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"}`,
                            children: [e.jsx("span", {
                                className: "font-medium",
                                children: t ? "Sending Message..." : "Send Message"
                            }), !t && e.jsx(ge, {
                                className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                            }), t && e.jsx("div", {
                                className: "w-4 h-4 ml-2 border-2 border-white border-t-transparent rounded-full animate-spin"
                            })]
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "space-y-6",
                    children: [e.jsxs("div", {
                        className: "card p-6 lg:p-8",
                        children: [e.jsx("h3", {
                            className: "text-lg lg:text-xl font-light theme-text mb-6 lg:mb-8 tracking-wide",
                            children: "Contact Information"
                        }), e.jsx("div", {
                            className: "space-y-4 lg:space-y-6",
                            children: x.map( (c, h) => e.jsxs("div", {
                                className: "flex items-center group",
                                children: [e.jsx("div", {
                                    className: "w-10 h-10 text-primary-400 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300",
                                    children: c.icon
                                }), e.jsxs("div", {
                                    children: [e.jsx("p", {
                                        className: "text-xs font-light theme-text-muted mb-1",
                                        children: c.label
                                    }), e.jsx("a", {
                                        href: c.link,
                                        target: c.link.startsWith("http") ? "_blank" : "_self",
                                        rel: c.link.startsWith("http") ? "noopener noreferrer" : "",
                                        className: "text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm font-light break-all",
                                        children: c.value
                                    })]
                                })]
                            }, h))
                        })]
                    }), e.jsxs("div", {
                        className: "card p-6 lg:p-8",
                        children: [e.jsx("h3", {
                            className: "text-base lg:text-lg font-light theme-text mb-4 lg:mb-6 tracking-wide",
                            children: "Available for"
                        }), e.jsxs("ul", {
                            className: "space-y-3 theme-text-secondary",
                            children: [e.jsxs("li", {
                                className: "flex items-center group",
                                children: [e.jsx("div", {
                                    className: "w-1 h-1 bg-primary-400/60 rounded-full mr-3 group-hover:w-2 transition-all duration-300"
                                }), e.jsx("span", {
                                    className: "text-sm font-light",
                                    children: "Collaboration on AI/ML projects"
                                })]
                            }), e.jsxs("li", {
                                className: "flex items-center group",
                                children: [e.jsx("div", {
                                    className: "w-1 h-1 bg-primary-400/60 rounded-full mr-3 group-hover:w-2 transition-all duration-300"
                                }), e.jsx("span", {
                                    className: "text-sm font-light",
                                    children: "Technical writing opportunities"
                                })]
                            }), e.jsxs("li", {
                                className: "flex items-center group",
                                children: [e.jsx("div", {
                                    className: "w-1 h-1 bg-primary-400/60 rounded-full mr-3 group-hover:w-2 transition-all duration-300"
                                }), e.jsx("span", {
                                    className: "text-sm font-light",
                                    children: "Speaking at tech events"
                                })]
                            }), e.jsxs("li", {
                                className: "flex items-center group",
                                children: [e.jsx("div", {
                                    className: "w-1 h-1 bg-primary-400/60 rounded-full mr-3 group-hover:w-2 transition-all duration-300"
                                }), e.jsx("span", {
                                    className: "text-sm font-light",
                                    children: "Mentoring and community building"
                                })]
                            }), e.jsxs("li", {
                                className: "flex items-center group",
                                children: [e.jsx("div", {
                                    className: "w-1 h-1 bg-primary-400/60 rounded-full mr-3 group-hover:w-2 transition-all duration-300"
                                }), e.jsx("span", {
                                    className: "text-sm font-light",
                                    children: "Open source contributions"
                                })]
                            })]
                        })]
                    })]
                })]
            })]
        })
    })
}
  , Ne = () => (new Date().getFullYear(),
e.jsx("footer", {
    className: "theme-bg border-t border-gray-200 dark:border-dark-border/30 py-12 lg:py-16",
    children: e.jsxs("div", {
        className: "container-max section-padding",
        children: [e.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12",
            children: [e.jsxs("div", {
                children: [e.jsx("h3", {
                    className: "text-base lg:text-lg font-light gradient-text mb-4 tracking-wide",
                    children: "Raiyan Bin Sarwar"
                }), e.jsx("p", {
                    className: "theme-text-muted mb-6 text-sm font-light leading-relaxed",
                    children: "AI & Cloud Innovation Enthusiast building the future of technology"
                }), e.jsxs("div", {
                    className: "flex space-x-4 lg:space-x-6",
                    children: [e.jsx("a", {
                        href: "https://github.com/wizziez",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "theme-text-muted hover:text-primary-400 transition-colors duration-300 text-sm font-light",
                        children: "GitHub"
                    }), e.jsx("a", {
                        href: "https://www.linkedin.com/in/raiyanbsarwar/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "theme-text-muted hover:text-primary-400 transition-colors duration-300 text-sm font-light",
                        children: "LinkedIn"
                    }), e.jsx("a", {
                        href: "mailto:raiyanbsarwar@gmail.com",
                        className: "theme-text-muted hover:text-primary-400 transition-colors duration-300 text-sm font-light",
                        children: "Email"
                    })]
                })]
            }), e.jsxs("div", {
                children: [e.jsx("h4", {
                    className: "text-sm lg:text-base font-light theme-text mb-4 lg:mb-6 tracking-wide",
                    children: "Quick Links"
                }), e.jsxs("ul", {
                    className: "space-y-2 lg:space-y-3",
                    children: [e.jsx("li", {
                        children: e.jsx("a", {
                            href: "#about",
                            className: "theme-text-muted hover:text-primary-400 transition-colors duration-300 text-sm font-light",
                            children: "About"
                        })
                    }), e.jsx("li", {
                        children: e.jsx("a", {
                            href: "#projects",
                            className: "theme-text-muted hover:text-primary-400 transition-colors duration-300 text-sm font-light",
                            children: "Projects"
                        })
                    }), e.jsx("li", {
                        children: e.jsx("a", {
                            href: "#writing",
                            className: "theme-text-muted hover:text-primary-400 transition-colors duration-300 text-sm font-light",
                            children: "Technical Writing"
                        })
                    }), e.jsx("li", {
                        children: e.jsx("a", {
                            href: "#contact",
                            className: "theme-text-muted hover:text-primary-400 transition-colors duration-300 text-sm font-light",
                            children: "Contact"
                        })
                    })]
                })]
            }), e.jsxs("div", {
                children: [e.jsx("h4", {
                    className: "text-sm lg:text-base font-light theme-text mb-4 lg:mb-6 tracking-wide",
                    children: "Recognition"
                }), e.jsxs("ul", {
                    className: "space-y-2 lg:space-y-3 theme-text-muted",
                    children: [e.jsx("li", {
                        className: "text-sm font-light",
                        children: "Microsoft Student Ambassador"
                    }), e.jsx("li", {
                        className: "text-sm font-light",
                        children: "GitHub Campus Expert"
                    }), e.jsx("li", {
                        className: "text-sm font-light",
                        children: "Featured in The Daily Star"
                    }), e.jsx("li", {
                        className: "text-sm font-light",
                        children: "Postman Student Expert"
                    })]
                })]
            })]
        }), e.jsx("div", {
            className: "border-t border-gray-200 dark:border-dark-border/30 mt-12 pt-8 text-center",
            children: e.jsx("p", {
                className: "theme-text-muted flex items-center justify-center text-sm font-light",
                children: "All rights Reserved by Raiyan Bin Sarwar © 2025"
            })
        })]
    })
}));
function Se() {
    const {trackEvent: a} = X();
    return d.useEffect( () => {
        J(),
        document.body.classList.add("loaded"),
        a("app_loaded", {
            timestamp: new Date().toISOString()
        })
    }
    , [a]),
    e.jsx(V, {
        children: e.jsxs("div", {
            className: "min-h-screen theme-bg theme-text",
            children: [e.jsx(pe, {}), e.jsxs("main", {
                children: [e.jsx(fe, {}), e.jsx(be, {}), e.jsx(ye, {}), e.jsx(ve, {}), e.jsx(je, {}), e.jsx(we, {}), e.jsx(ke, {})]
            }), e.jsx(Ne, {})]
        })
    })
}
w.createRoot(document.getElementById("root")).render(e.jsx(R.StrictMode, {
    children: e.jsx(Se, {})
}));
//# sourceMappingURL=index-531ab8e1.js.map
