! function(e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.i = function(e) {
        return e
    }, t.d = function(e, t, n) {
        Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 45)
}([function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
        return t.querySelector(e)
    };
    n.show = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return e.style.display = t
    }, n.hide = function(e) {
        return e.style.display = "none"
    }, n.each = function(e, t, n) {
        var i = e.querySelectorAll(t);
        [].forEach.call(i, n)
    }, n.getLines = function(e, t, i) {
        var o = e.innerHTML,
            r = "__chunk__";
        e.innerHTML = t.split(" ").map(function(e) {
            return '<span class="' + r + '">' + e + "</span>"
        }).join(" ");
        var s = [],
            a = void 0,
            u = -1;
        n.each(e, "." + r, function(e) {
            var t = e.offsetTop;
            t !== u ? (u = t, a = [e.innerHTML], s.push(a)) : a.push(e.innerHTML)
        }), e.innerHTML = o, i(s.map(function(e) {
            return e.join(" ")
        }))
    }, t.default = n
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.name = "Casey Trahan", t.author = "Casey Trahan", t.domain = "https://casethebase.github.io/", t.version = "2.0.0", t.assetPath = "/assets/", t.analyticsId = "UA-108271494-1", t.previewSize = [2880, 1800], t.introduction = "I'm Casey Trahan, Full Stack Web Developer with a passion for making websites and applications both functional and engaging. Strong creative and analytical skills. Team player with an eye for detail. Skilled and experienced with HTML, CSS, JavaScript, MySQL, MongoDB, Express, React, Node, Illustrator, Photoshop and Git. Formerly BigCommerce / Currently LogicMonitor, INC", t.greetings = ["Konnichiwa", "Namaste", "Hello", "Salutations", "Hola", "Hey", "Greetings", "Hi"],    t.social = [{
        name: "LinkedIn",
        user: "caseytrahan",
        link: "https://www.linkedin.com/in/caseytrahan/"
    }, {
        name: "Github",
        user: "casethebase",
        link: "https://github.com/casethebase"
    }, {
        name: "Stack Overflow",
        user: "Casey Trahan",
        link: "https://stackoverflow.com/users/9542296/casey-trahan"
    }]
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(30);
    Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
            return i(o).default
        }
    })
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        r = n(5),
        s = i(r),
        a = n(6),
        u = i(a),
        l = n(9),
        c = i(l),
        h = [],
        f = function(e, t) {
            var n = u.default[e.path];
            n && (document.title = n.title), t()
        },
        d = function(e, t) {
            ga("set", "page", e.path), ga("send", "pageview"), t()
        },
        p = function(e) {
            s.default.home()
        },
        v = function(e, t) {
            for (var n = e.path.replace(/^\/|\/$/g, ""), i = 0, o = h.length; i < o; i++)
                if (h[i].id === n) return s.default.project(h[i]);
            t()
        },
        g = function(e) {
            console.log(" - 404")
        },
        m = function() {
            var e = void 0,
                t = void 0,
                n = void 0;
            for (var i in u.default) t = u.default[i], t.project ? (e = i.replace(/^\/|\/$/g, ""), h.push(o({
                id: e,
                path: i
            }, t)), n = v) : n = p, (0, c.default)(i, f, d, n);
            (0, c.default)("*", f, d, g)
        },
        y = {
            projects: h,
            init: function() {
                m(), (0, c.default)({
                    popstate: !0,
                    click: !0
                })
            },
            go: function(e) {
                c.default.show(e)
            }
        };
    t.default = y
}, function(e, t) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        r = Math.PI,
        s = Math.acos,
        a = Math.pow,
        u = Math.cos,
        l = Math.sin,
        c = requestAnimationFrame,
        h = (cancelAnimationFrame, function(e) {
            return "[object Function]" == Object.prototype.toString.call(e)
        }),
        f = function(e, t) {
            if (h(t)) e.push(t);
            else if (e.length)
                for (var n = 0, i = e.length; n < i; n++) e[n].call(null, t)
        },
        d = function(e) {
            return e.in = e, e.out = function(t) {
                return 1 - e(1 - t)
            }, e.inOut = function(t) {
                return t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
            }, e
        },
        p = function(e, t) {
            var n = {};
            for (var i in t) n[i] = e[i];
            return n
        },
        v = function() {
            return performance.now()
        },
        g = function() {
            function e(t, n, o) {
                i(this, e), this.startTime = v(), this.duration = n, this.options = o, this.target = t, this.easing = M.Linear, this.onStart = [], this.onStep = [], this.onDone = [], this.progress = 0, this.paused = !1, this.alive = !0, this.delay = 0
            }
            return o(e, [{
                key: "wait",
                value: function(e) {
                    return this.delay = e, this
                }
            }, {
                key: "ease",
                value: function(e) {
                    return this.easing = e, this
                }
            }, {
                key: "kill",
                value: function() {
                    return this.alive = !1, this
                }
            }, {
                key: "start",
                value: function(e) {
                    return f(this.onStart, e), this
                }
            }, {
                key: "pause",
                value: function() {
                    this.paused || (this.pauseTime = v(), this.paused = !0)
                }
            }, {
                key: "play",
                value: function() {
                    this.paused && (this.startTime += v() - this.pauseTime, this.paused = !1)
                }
            }, {
                key: "step",
                value: function(e) {
                    return f(this.onStep, e), this
                }
            }, {
                key: "done",
                value: function(e) {
                    return f(this.onDone, e), this
                }
            }]), e
        }(),
        m = !1,
        y = [],
        w = void 0,
        b = function e() {
            if (m) {
                for (var t = void 0, n = void 0, i = void 0, o = void 0, r = void 0, s = y.length - 1; s >= 0; s--) {
                    if (t = y[s], t.alive) {
                        if (n = .001 * (v() - t.startTime), n > t.delay && !t.paused) {
                            0 === t.progress && (t.initial = p(t.target, t.options), f(t.onStart, t)), t.progress = (n - t.delay) / t.duration, t.progress = Math.max(0, Math.min(t.progress, 1));
                            for (i in t.options) o = t.initial[i], r = t.options[i], t.target[i] = o + (r - o) * t.easing(t.progress);
                            f(t.onStep, t)
                        }
                        t.progress >= 1 && (t.alive = !1, f(t.onDone, t))
                    }
                    t.alive || y.splice(s, 1)
                }
                y.length ? w = c(e) : m = !1
            }
        },
        x = function() {
            m || (w = c(b), m = !0)
        },
        k = function(e) {
            return y.push(e), x(), e
        },
        M = {
            Linear: d(function(e) {
                return e
            }),
            Elastic: d(function(e) {
                return a(2, 10 * --e) * u(20 * e * r * 1 / 3)
            }),
            Bounce: d(function(e) {
                for (var t, i = 0, o = 1; 1; i += o, o /= 2)
                    if (e >= (7 - 4 * i) / 11) {
                        t = -a((11 - 6 * i - 11 * e) / 4, 2) + o * o;
                        break
                    }
                return n
            }),
            Back: d(function(e) {
                return a(e, 2) * ((1.618 + 1) * e - 1.618)
            }),
            Sine: d(function(e) {
                return 1 - l((1 - e) * r / 2)
            }),
            Circ: d(function(e) {
                return 1 - l(s(e))
            }),
            Expo: d(function(e) {
                return a(2, 10 * (e - 1))
            }),
            Quad: d(function(e) {
                return a(e, 2)
            }),
            Cubic: d(function(e) {
                return a(e, 3)
            }),
            Quart: d(function(e) {
                return a(e, 4)
            }),
            Quint: d(function(e) {
                return a(e, 5)
            }),
            to: function(e, t, n) {
                return k(new g(e, t, n))
            }
        };
    t.default = M
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(15),
        r = i(o),
        s = !0,
        a = !0,
        u = void 0,
        l = {
            init: function() {
                u = new r.default
            },
            home: function() {
                if (u.project.hide(!a), s) {
                    s = !1;
                    var e = a ? .5 : -.8;
                    u.greeting.init(e), u.about.init(e + .8), u.header.init(e + 1.3), u.footer.init(e + .8), u.menu.init(e + 1.5)
                }
                a = !1
            },
            project: function(e) {
                u.project.show(e, !a), a = !1
            }
        };
    t.default = l
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(1),
        o = function(e, t, n, i, o) {
            var r = e.toLowerCase().replace(/\s/g, "-"),
                a = "/" + r + "/",
                u = "/" + r + "/preview.jpg";
            s[a] = {
                title: e,
                image: u,
                description: t,
                content: n,
                instruction: i,
                project: !0
            }
        },
        r = function(e, t) {
            s[e] = {
                redirect: !0,
                destination: t
            }
        },
        s = {
            "/": {
                title: i.name,
                image: "casethebase.jpg",
                description: i.introduction
            }
        };
o("Crystalize Game", "There will be four crystals displayed as buttons on the page. The player will be shown a random number at the start of the game. When the player clicks on a crystal, it will add a specific amount of points to the player's total score. Your game will hide this amount until the player clicks a crystal. When they do click one, update the player's score counter. The player wins if their total score matches the random number from the beginning of the game. The player loses if their score goes above the random number. The game restarts whenever the player wins or loses. When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero. The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.", "https://casethebase.github.io/Crystallize-Game/"), o("Psycic Game", "Guess what letter the computer is thinking of! Wins: (# of times the user has guessed the letter correctly) Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses) Guesses Left: (# of guesses left. This will update) Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.) When the player wins, increase the Wins counter and start the game over again (without refreshing the page). When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).", "https://casethebase.github.io/Psychic-Game/", "Press Any Key"), o("Vaporwave GifTastic", '"w e l c o m e   t o    t h e    a f t e r l i f e"... No but really this is a small web app that just grabs gifs from giphy using an Ajax call. Was my first forray into API calls. Click a button at the top to get some gifs or make your own button!', "https://casethebase.github.io/GifTastic/",), o("Train Scheduler", "In this assignment, I created a train schedule application that incorporates Firebase to host arrival and departure data. The app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.", "https://casethebase.github.io/Train-Scheduler/",), o("Trivia Game", "If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input. The scenario is similar for wrong answers and time-outs. If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question. If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question. On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).", "https://casethebase.github.io/Trivia-Game/",), o("Everlist", "A fully functioning, polished Web App built by myself, Zenna J Duke, Sarah Martinez, and Sai Kratu. This app aims to create a recipe / grocery list building experience where you can track every ingredient, nutrient, and vitamin in your recipe. Some Features are still being added. More to come later!", "https://casethebase.github.io/everlist/",), o("Hang", "This full stack social media application was built with real life, face-to-face friendships in mind. It assists those friends make time in thier schedules, and encourages a more intimate and personal form of interaction over time spent in front of one screen or another.", "https://calm-wave-14176.herokuapp.com/"), o("Hang 2.0", "This is my final project, a complete rebuild of Hang from scratch, using the MERN stack. These are: React, Express, MongoDB, and Node.js. It was linted using Babel, and packaged / deployed with Webpack.", "https://aqueous-beach-17383.herokuapp.com/"), r("/https://aqueous-beach-17383.herokuapp.com/"),

 
  // add to list with:          o("[project name]", [description]", "[URL]"), 
  // then:                      r("/{new page}/[create a name for the new page path]/", "/[direct path]/"), 
  
t.default = s
  
  // Top left logo
  
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.symbols = '\n  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n    <symbol id="logo" viewBox="0 0 14.14213562373095 14.14213562373095">\n      <title>Casey Trahan</title> \n      <desc>Caseys logo</desc>\n      <g transform=" translate(7.071067811865475,0) rotate(45)">\n        <path class="s" stroke-linecap="square" stroke-width="2.1" fill="none" stroke="#fff" d="M8.95,1.05 L1.05,1.05 L1.05,5 L8.95,5 L8.95,8.95"></path>\n        <g transform="translate(1.05,8.95)">\n          <rect class="w1" stroke="none" fill="#fff" x="-1.05" y="-1.05" width="2.1" height="2.1"></rect>\n        </g>\n        <g transform="translate(4.95,8.95)">\n          <rect class="w2" stroke="none" fill="#fff" x="-1.05" y="-1.05" width="2.1" height="2.1"></rect>\n        </g>\n      </g>\n    </symbol>\n    <symbol id="icon-menu" viewBox="0 0 100 100" preserveAspectRatio="none">\n      <rect x="0" y="5" width="100" height="10"/>\n      <rect x="0" y="45" width="100" height="10"/>\n      <rect x="0" y="85" width="100" height="10"/>\n    </symbol>\n    <symbol id="icon-left" viewBox="0 0 10 10" preserveAspectRatio="none">\n      <path fill="none" stroke-width="1" d="M9,1 L1,5 L9,9"/>\n    </symbol>\n    <symbol id="icon-right" viewBox="0 0 10 10" preserveAspectRatio="none">\n      <path fill="none" stroke-width="1" d="M1,1 L9,5 L1,9"/>\n    </symbol>\n    <symbol id="icon-up" viewBox="0 0 10 10" preserveAspectRatio="none">\n      <path fill="none" stroke-width="1" d="M1,9 L5,1 L9,9"/>\n    </symbol>\n    <symbol id="icon-down" viewBox="0 0 10 10" preserveAspectRatio="none">\n      <path fill="none" stroke-width="1" d="M1,1 L5,9 L9,1"/>\n    </symbol>\n    <symbol id="icon-x" viewBox="0 0 10 10" preserveAspectRatio="none">\n      <path fill="none" stroke-width="1" d="M1,1 L9,9 M9,1 L1,9"/>\n    </symbol>\n  </svg>\n'
}, function(e, t) {
    "use strict";
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == Object.prototype.toString.call(e)
    }
}, function(e, t, n) {
    "use strict";
    (function(t) {
        function i(e, t) {
            if ("function" == typeof e) return i("*", e);
            if ("function" == typeof t)
                for (var n = new a(e), o = 1; o < arguments.length; ++o) i.callbacks.push(n.middleware(arguments[o]));
            else "string" == typeof e ? i["string" == typeof t ? "redirect" : "show"](e, t) : i.start(e)
        }

        function o(e) {
            if (!e.handled) {
                var t;
                t = w ? y + v.hash.replace("#!", "") : v.pathname + v.search, t !== e.canonicalPath && (i.stop(), e.handled = !1, v.href = e.canonicalPath)
            }
        }

        function r(e) {
            return "string" != typeof e ? e : m ? decodeURIComponent(e.replace(/\+/g, " ")) : e
        }

        function s(e, t) {
            "/" === e[0] && 0 !== e.indexOf(y) && (e = y + (w ? "#!" : "") + e);
            var n = e.indexOf("?");
            if (this.canonicalPath = e, this.path = e.replace(y, "") || "/", w && (this.path = this.path.replace("#!", "") || "/"), this.title = document.title, this.state = t || {}, this.state.path = e, this.querystring = ~n ? r(e.slice(n + 1)) : "", this.pathname = r(~n ? e.slice(0, n) : e), this.params = {}, this.hash = "", !w) {
                if (!~this.path.indexOf("#")) return;
                var i = this.path.split("#");
                this.path = i[0], this.hash = r(i[1]) || "", this.querystring = this.querystring.split("#")[0]
            }
        }

        function a(e, t) {
            t = t || {}, this.path = "*" === e ? "(.*)" : e, this.method = "GET", this.regexp = h(this.path, this.keys = [], t)
        }

        function u(e) {
            if (1 === l(e) && !(e.metaKey || e.ctrlKey || e.shiftKey || e.defaultPrevented)) {
                for (var n = e.path ? e.path[0] : e.target; n && "A" !== n.nodeName;) n = n.parentNode;
                if (n && "A" === n.nodeName && !n.hasAttribute("download") && "external" !== n.getAttribute("rel")) {
                    var o = n.getAttribute("href");
                    if ((w || n.pathname !== v.pathname || !n.hash && "#" !== o) && !(o && o.indexOf("mailto:") > -1) && !n.target && c(n.href)) {
                        var r = n.pathname + n.search + (n.hash || "");
                        "undefined" != typeof t && r.match(/^\/[a-zA-Z]:\//) && (r = r.replace(/^\/[a-zA-Z]:\//, "/"));
                        var s = r;
                        0 === r.indexOf(y) && (r = r.substr(y.length)), w && (r = r.replace("#!", "")), y && s === r || (e.preventDefault(), i.show(s))
                    }
                }
            }
        }

        function l(e) {
            return e = e || window.event, null === e.which ? e.button : e.which
        }

        function c(e) {
            var t = v.protocol + "//" + v.hostname;
            return v.port && (t += ":" + v.port), e && 0 === e.indexOf(t)
        }
        var h = n(10);
        e.exports = i;
        var f, d, p = "undefined" != typeof document && document.ontouchstart ? "touchstart" : "click",
            v = "undefined" != typeof window && (window.history.location || window.location),
            g = !0,
            m = !0,
            y = "",
            w = !1;
        i.callbacks = [], i.exits = [], i.current = "", i.len = 0, i.base = function(e) {
            return 0 === arguments.length ? y : void(y = e)
        }, i.start = function(e) {
            if (e = e || {}, !f && (f = !0, !1 === e.dispatch && (g = !1), !1 === e.decodeURLComponents && (m = !1), !1 !== e.popstate && window.addEventListener("popstate", b, !1), !1 !== e.click && document.addEventListener(p, u, !1), !0 === e.hashbang && (w = !0), g)) {
                var t = w && ~v.hash.indexOf("#!") ? v.hash.substr(2) + v.search : v.pathname + v.search + v.hash;
                i.replace(t, null, !0, g)
            }
        }, i.stop = function() {
            f && (i.current = "", i.len = 0, f = !1, document.removeEventListener(p, u, !1), window.removeEventListener("popstate", b, !1))
        }, i.show = function(e, t, n, o) {
            var r = new s(e, t);
            return i.current = r.path, !1 !== n && i.dispatch(r), !1 !== r.handled && !1 !== o && r.pushState(), r
        }, i.back = function(e, t) {
            i.len > 0 ? (history.back(), i.len--) : e ? setTimeout(function() {
                i.show(e, t)
            }) : setTimeout(function() {
                i.show(y, t)
            })
        }, i.redirect = function(e, t) {
            "string" == typeof e && "string" == typeof t && i(e, function(e) {
                setTimeout(function() {
                    i.replace(t)
                }, 0)
            }), "string" == typeof e && "undefined" == typeof t && setTimeout(function() {
                i.replace(e)
            }, 0)
        }, i.replace = function(e, t, n, o) {
            var r = new s(e, t);
            return i.current = r.path, r.init = n, r.save(), !1 !== o && i.dispatch(r), r
        }, i.dispatch = function(e) {
            function t() {
                var e = i.exits[a++];
                return e ? void e(r, t) : n()
            }

            function n() {
                var t = i.callbacks[s++];
                return e.path !== i.current ? void(e.handled = !1) : t ? void t(e, n) : o(e)
            }
            var r = d,
                s = 0,
                a = 0;
            d = e, r ? t() : n()
        }, i.exit = function(e, t) {
            if ("function" == typeof e) return i.exit("*", e);
            for (var n = new a(e), o = 1; o < arguments.length; ++o) i.exits.push(n.middleware(arguments[o]))
        }, i.Context = s, s.prototype.pushState = function() {
            i.len++, history.pushState(this.state, this.title, w && "/" !== this.path ? "#!" + this.path : this.canonicalPath)
        }, s.prototype.save = function() {
            history.replaceState(this.state, this.title, w && "/" !== this.path ? "#!" + this.path : this.canonicalPath)
        }, i.Route = a, a.prototype.middleware = function(e) {
            var t = this;
            return function(n, i) {
                return t.match(n.path, n.params) ? e(n, i) : void i()
            }
        }, a.prototype.match = function(e, t) {
            var n = this.keys,
                i = e.indexOf("?"),
                o = ~i ? e.slice(0, i) : e,
                s = this.regexp.exec(decodeURIComponent(o));
            if (!s) return !1;
            for (var a = 1, u = s.length; a < u; ++a) {
                var l = n[a - 1],
                    c = r(s[a]);
                void 0 === c && hasOwnProperty.call(t, l.name) || (t[l.name] = c)
            }
            return !0
        };
        var b = function() {
            var e = !1;
            if ("undefined" != typeof window) return "complete" === document.readyState ? e = !0 : window.addEventListener("load", function() {
                    setTimeout(function() {
                        e = !0
                    }, 0)
                }),
                function(t) {
                    if (e)
                        if (t.state) {
                            var n = t.state.path;
                            i.replace(n, t.state)
                        } else i.show(v.pathname + v.hash, void 0, void 0, !1)
                }
        }();
        i.sameOrigin = c
    }).call(t, n(11))
}, function(e, t, n) {
    "use strict";

    function i(e) {
        for (var t, n = [], i = 0, o = 0, r = ""; null != (t = m.exec(e));) {
            var s = t[0],
                u = t[1],
                l = t.index;
            if (r += e.slice(o, l), o = l + s.length, u) r += u[1];
            else {
                r && (n.push(r), r = "");
                var c = t[2],
                    h = t[3],
                    f = t[4],
                    d = t[5],
                    p = t[6],
                    v = t[7],
                    g = "+" === p || "*" === p,
                    y = "?" === p || "*" === p,
                    w = c || "/",
                    b = f || d || (v ? ".*" : "[^" + w + "]+?");
                n.push({
                    name: h || i++,
                    prefix: c || "",
                    delimiter: w,
                    optional: y,
                    repeat: g,
                    pattern: a(b)
                })
            }
        }
        return o < e.length && (r += e.substr(o)), r && n.push(r), n
    }

    function o(e) {
        return r(i(e))
    }

    function r(e) {
        for (var t = new Array(e.length), n = 0; n < e.length; n++) "object" === v(e[n]) && (t[n] = new RegExp("^" + e[n].pattern + "$"));
        return function(n) {
            for (var i = "", o = n || {}, r = 0; r < e.length; r++) {
                var s = e[r];
                if ("string" != typeof s) {
                    var a, u = o[s.name];
                    if (null == u) {
                        if (s.optional) continue;
                        throw new TypeError('Expected "' + s.name + '" to be defined')
                    }
                    if (g(u)) {
                        if (!s.repeat) throw new TypeError('Expected "' + s.name + '" to not repeat, but received "' + u + '"');
                        if (0 === u.length) {
                            if (s.optional) continue;
                            throw new TypeError('Expected "' + s.name + '" to not be empty')
                        }
                        for (var l = 0; l < u.length; l++) {
                            if (a = encodeURIComponent(u[l]), !t[r].test(a)) throw new TypeError('Expected all "' + s.name + '" to match "' + s.pattern + '", but received "' + a + '"');
                            i += (0 === l ? s.prefix : s.delimiter) + a
                        }
                    } else {
                        if (a = encodeURIComponent(u), !t[r].test(a)) throw new TypeError('Expected "' + s.name + '" to match "' + s.pattern + '", but received "' + a + '"');
                        i += s.prefix + a
                    }
                } else i += s
            }
            return i
        }
    }

    function s(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/])/g, "\\$1")
    }

    function a(e) {
        return e.replace(/([=!:$\/()])/g, "\\$1")
    }

    function u(e, t) {
        return e.keys = t, e
    }

    function l(e) {
        return e.sensitive ? "" : "i"
    }

    function c(e, t) {
        var n = e.source.match(/\((?!\?)/g);
        if (n)
            for (var i = 0; i < n.length; i++) t.push({
                name: i,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                pattern: null
            });
        return u(e, t)
    }

    function h(e, t, n) {
        for (var i = [], o = 0; o < e.length; o++) i.push(p(e[o], t, n).source);
        var r = new RegExp("(?:" + i.join("|") + ")", l(n));
        return u(r, t)
    }

    function f(e, t, n) {
        for (var o = i(e), r = d(o, n), s = 0; s < o.length; s++) "string" != typeof o[s] && t.push(o[s]);
        return u(r, t)
    }

    function d(e, t) {
        t = t || {};
        for (var n = t.strict, i = t.end !== !1, o = "", r = e[e.length - 1], a = "string" == typeof r && /\/$/.test(r), u = 0; u < e.length; u++) {
            var c = e[u];
            if ("string" == typeof c) o += s(c);
            else {
                var h = s(c.prefix),
                    f = c.pattern;
                c.repeat && (f += "(?:" + h + f + ")*"), f = c.optional ? h ? "(?:" + h + "(" + f + "))?" : "(" + f + ")?" : h + "(" + f + ")", o += f
            }
        }
        return n || (o = (a ? o.slice(0, -2) : o) + "(?:\\/(?=$))?"), o += i ? "$" : n && a ? "" : "(?=\\/|$)", new RegExp("^" + o, l(t))
    }

    function p(e, t, n) {
        return t = t || [], g(t) ? n || (n = {}) : (n = t, t = []), e instanceof RegExp ? c(e, t, n) : g(e) ? h(e, t, n) : f(e, t, n)
    }
    var v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        g = n(8);
    e.exports = p, e.exports.parse = i, e.exports.compile = o, e.exports.tokensToFunction = r, e.exports.tokensToRegExp = d;
    var m = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"), "g")
}, function(e, t) {
    "use strict";

    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }

    function o(e) {
        if (c === setTimeout) return setTimeout(e, 0);
        if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
        try {
            return c(e, 0)
        } catch (t) {
            try {
                return c.call(null, e, 0)
            } catch (t) {
                return c.call(this, e, 0)
            }
        }
    }

    function r(e) {
        if (h === clearTimeout) return clearTimeout(e);
        if ((h === i || !h) && clearTimeout) return h = clearTimeout, clearTimeout(e);
        try {
            return h(e)
        } catch (t) {
            try {
                return h.call(null, e)
            } catch (t) {
                return h.call(this, e)
            }
        }
    }

    function s() {
        v && d && (v = !1, d.length ? p = d.concat(p) : g = -1, p.length && a())
    }

    function a() {
        if (!v) {
            var e = o(s);
            v = !0;
            for (var t = p.length; t;) {
                for (d = p, p = []; ++g < t;) d && d[g].run();
                g = -1, t = p.length
            }
            d = null, v = !1, r(e)
        }
    }

    function u(e, t) {
        this.fun = e, this.array = t
    }

    function l() {}
    var c, h, f = e.exports = {};
    ! function() {
        try {
            c = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            c = n
        }
        try {
            h = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
            h = i
        }
    }();
    var d, p = [],
        v = !1,
        g = -1;
    f.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        p.push(new u(e, t)), 1 !== p.length || v || o(a)
    }, u.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = l, f.addListener = l, f.once = l, f.off = l, f.removeListener = l, f.removeAllListeners = l, f.emit = l, f.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, f.cwd = function() {
        return "/"
    }, f.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, f.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        s = n(1),
        a = n(2),
        u = i(a),
        l = n(0),
        c = i(l);
    n(35);
    var h = "Info",
        f = '\n  <h3 class="section-title">&nbsp;</h3>\n  <div class="content">&nbsp;</div>\n',
        d = function() {
            function e(t) {
                o(this, e), this.el = t, this.el.classList.add("about-component"), this.el.innerHTML = f, this.$title = (0, c.default)(".section-title", this.el), this.$content = (0, c.default)(".content", this.el)
            }
            return r(e, [{
                key: "init",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.$title.innerHTML = "", this.$content.innerHTML = "", this.showTitle(e), this.showContent(e)
                }
            }, {
                key: "showTitle",
                value: function(e) {
                    var t = new u.default(this.$title);
                    t.type(h, {
                        duration: .3,
                        cursor: "_",
                        delay: e
                    })
                }
            }, {
                key: "showContent",
                value: function(e) {
                    var t = this;
                    c.default.getLines(this.$content, s.introduction, function(n) {
                        var i = n.length,
                            o = 0;
                        n.forEach(function(r, a) {
                            var l = (a === n.length - 1, document.createElement("span"));
                            t.$content.appendChild(l), l.innerHTML = "&nbsp;";
                            var c = .0215 * r.length,
                                h = new u.default(l);
                            h.decode(r, {
                                onComplete: function() {
                                    --i <= 0 && (t.$content.innerHTML = s.introduction)
                                },
                                duration: c,
                                useInput: !1,
                                showPower: .8,
                                mashPower: 2,
                                donePower: 6,
                                delay: Math.max(0, e - .2) + .172 * o
                            }), o += c
                        })
                    })
                }
            }]), e
        }();
    t.default = d
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(12);
    Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
            return i(o).default
        }
    })
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(7),
        s = n(19),
        a = i(s),
        u = n(27),
        l = i(u),
        c = n(21),
        h = i(c),
        f = n(17),
        d = i(f),
        p = n(13),
        v = i(p),
        g = n(25),
        m = i(g),
        y = n(0),
        w = i(y);
    n(36);
    var b = "\n  " + r.symbols + '\n  <header id="header"></header>\n  <div class="container">\n    <div class="wrapper">\n      <section id="greeting"></section>\n      <section id="about"></section>\n      <section id="menu"></section>\n    </div>\n  </div>\n  <footer id="footer"></footer>\n  <div id="project"></div>\n',
        x = function e() {
            o(this, e), this.el = (0, w.default)("#application"), this.el.classList.add("application-component"), this.el.innerHTML = b, this.greeting = new a.default((0, w.default)("#greeting")), this.project = new l.default((0, w.default)("#project")), this.header = new h.default((0, w.default)("#header")), this.footer = new d.default((0, w.default)("#footer")), this.about = new v.default((0, w.default)("#about")), this.menu = new m.default((0, w.default)("#menu"))
        };
    t.default = x
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(14);
    Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
            return i(o).default
        }
    })
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        s = n(1),
        a = n(2),
        u = i(a),
        l = n(0),
        c = i(l);
    n(37);
    var h = '\n  <aside class="status"></aside>\n  <div class="social"></div>\n',
        f = function() {
            function e(t) {
                o(this, e), this.el = t, this.el.innerHTML = h, this.el.classList.add("footer-component"), this.$status = (0, c.default)(".status", this.el), this.$social = (0, c.default)(".social", this.el)
            }
            return r(e, [{
                key: "init",
                value: function(e) {
                    this.showStatus(e), this.showSocial(e + .75)
                }
            }, {
                key: "showStatus",
                value: function(e) {
                    var t = new u.default(this.$status),
                        n = "Email: casey@trahanhome.net";
                    t.decode(n, {
                        duration: .08 * n.length,
                        delay: e
                    })
                }
            }, {
                key: "showSocial",
                value: function(e) {
                    var t = s.social.reduce(function(e, t) {
                            var n = t.link,
                                i = t.name;
                            return e + ('<a class="link" href="' + n + '" target="_blank">' + i + "</a>")
                        }, ""),
                        n = new u.default(this.$social);
                    n.decode(t, {
                        duration: 2,
                        delay: e
                    })
                }
            }]), e
        }();
    t.default = f
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(16);
    Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
            return i(o).default
        }
    })
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        s = n(1),
        a = n(2),
        u = i(a),
        l = n(0),
        c = i(l);
    n(38);
    var h = '\n  <span class="message"></span>\n  <span class="cursor"></span>\n',
        f = function() {
            function e(t) {
                o(this, e), this.el = t, this.el.innerHTML = h, this.el.classList.add("greeting-component"), this.$message = (0, c.default)(".message", this.el), this.$cursor = (0, c.default)(".cursor", this.el)
            }
            return r(e, [{
                key: "init",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = s.greetings[Math.floor(Math.random() * s.greetings.length)],
                        i = .15 * n.length,
                        o = new u.default(this.$message);
                    o.type(n, {
                        duration: i,
                        cursor: "",
                        delay: t,
                        onComplete: function() {
                            return setTimeout(function() {
                                e.el.classList.add("done");
                            }, 500)
                        }
                    })
                }
            }]), e
        }();
    t.default = f
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(18);
    Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
            return i(o).default
        }
    })
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        s = n(1),
        a = n(2),
        u = i(a),
        l = n(0),
        c = i(l);
    n(39);
    var h = '\n  <svg xmlns="http://www.w3.org/2000/svg" class="logo" viewBox="0 0 14.14213562373095 14.14213562373095">\n    <title>Casey Trahan</title> \n    <desc>Caseys Logo</desc>\n    <g transform=" translate(7.071067811865475,0) rotate(45)">\n     \n      <g transform="translate(1.05,8.95)">\n        <rect class="w1" stroke="none" x="-1.05" y="-1.05" width="2.1" height="2.1"></rect>\n      </g>\n      <g transform="translate(4.95,8.95)">\n        <rect class="w2" stroke="none" x="-1.05" y="-1.05" width="2.1" height="2.1"></rect>\n      </g>\n    </g>\n  </svg>\n  <aside class="about"></aside>\n',
        f = function() {
            function e(t) {
                o(this, e), this.el = t, this.el.innerHTML = h, this.el.classList.add("header-component"), this.$logo = (0, c.default)(".logo", this.el), this.$about = (0, c.default)(".about", this.el)
            }
            return r(e, [{
                key: "init",
                value: function(e) {
                    var t = this,
                        n = new u.default(this.$about);
                    setTimeout(function() {
                        return t.$logo.classList.add("show")
                    }, 1e3 * e), n.type("v" + "2.1", {
                        duration: .6,
                        cursor: "_",
                        delay: e
                    })
                }
            }]), e
        }();
    t.default = f
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(20);
    Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
            return i(o).default
        }
    })
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        s = n(32),
        a = n(4),
        u = i(a),
        l = n(0),
        c = i(l);
    n(40);
    var h = '<span class="block solid"></span>',
        f = '<span class="block empty"></span>',
        d = '\n  <div class="instruction"></div>\n  <div class="progress">\n    <span class="before"></span>\n    <span class="marker">' + h + '</span>\n    <span class="after"></span>\n  </div>\n',
        p = function() {
            function e(t) {
                o(this, e), this.el = t, this.el.classList.add("loader-component"), this.el.innerHTML = d, this.$instruction = (0, c.default)(".instruction", this.el), this.$progress = (0, c.default)(".progress", this.el), this.$before = (0, c.default)(".before", this.el), this.$marker = (0, c.default)(".marker", this.el), this.$after = (0, c.default)(".after", this.el), this._progress = 0
            }
            return r(e, [{
                key: "load",
                value: function(e, t, n, i) {
                    var o = this;
                    this.progress = 0;
                    var r = .9 - .3 * Math.random(),
                        s = .005,
                        a = .1,
                        l = .1,
                        c = !1;
                    this.$instruction.style.display = t ? "block" : "none", this.$instruction.innerHTML = t || "", n.addEventListener("load", function() {
                        return c = !0
                    }), setTimeout(function() {
                        n.src = e
                    }, t ? 50 * t.length : 0);
                    var h = function e() {
                        if (c) {
                            var t = .5 + .5 * Math.random();
                            u.default.to(o, t, {
                                progress: 1
                            }).ease(u.default.Sine.inOut).done(function() {
                                return setTimeout(i, 200)
                            })
                        } else requestAnimationFrame(e), l < r && (l += Math.random() * s, o.progress += (l - o.progress) * a)
                    };
                    h()
                }
            }, {
                key: "progress",
                get: function() {
                    return this._progress
                },
                set: function(e) {
                    this._progress = (0, s.clamp)(e, 0, 1), this.$marker.classList.toggle("pulse", e < .95);
                    var t = Math.min(60, window.innerWidth / 8.2),
                        n = Math.floor(e * t),
                        i = Math.max(0, n - 1),
                        o = t - i - 1;
                    this.$before.innerHTML = h.repeat(i), this.$after.innerHTML = f.repeat(o)
                }
            }]), e
        }();
    t.default = p
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(22);
    Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
            return i(o).default
        }
    })
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        s = n(33),
        a = n(6),
        u = i(a),
        l = n(3),
        c = i(l),
        h = n(2),
        f = i(h),
        d = n(0),
        p = i(d);
    n(41);
    var v = "Projects",
        g = '\n  <h3 class="section-title"></h3>\n  <ul class="projects"><ul>\n',
        m = function() {
            function e(t) {
                o(this, e), this.el = t, this.el.classList.add("menu-component"), this.el.innerHTML = g, this.$title = (0, p.default)(".section-title", this.el), this.$projects = (0, p.default)(".projects", this.el)
            }
            return r(e, [{
                key: "init",
                value: function(e) {
                    this.$title.innerHTML = "", this.$projects.innerHTML = "", this.showTitle(e), this.showContent(e)
                }
            }, {
                key: "showTitle",
                value: function(e) {
                    var t = new f.default(this.$title);
                    t.type(v, {
                        duration: .3,
                        cursor: "_",
                        delay: e
                    })
                }
            }, {
                key: "showContent",
                value: function(e) {
                    var t = this;
                    this.typers = [];
                    var n = 0,
                        i = 0,
                        o = function(o) {
                            if (u.default[o].project) {
                                var r = u.default[o].title,
                                    a = (0, s.leadingZeros)(n, 3),
                                    l = '<span class="index">' + a + "</span>" + ('<span class="title">' + r + "</span>"),
                                    h = document.createElement("a");
                                h.innerHTML = "&nbsp;", h.classList.add("link");
                                var d = new f.default(h),
                                    p = .045 * r.length;
                                d.decode(l, {
                                    duration: p,
                                    useInput: !1,
                                    delay: e + .15 * i
                                }), h.addEventListener("click", function() {
                                    return c.default.go(o)
                                }), t.$projects.appendChild(h), t.typers.push(d), i += p, n++
                            }
                        };
                    for (var r in u.default) o(r)
                }
            }]), e
        }();
    t.default = m
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(24);
    Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
            return i(o).default
        }
    })
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        s = (n(1), n(29)),
        a = i(s),
        u = (n(34), n(3)),
        l = i(u),
        c = n(23),
        h = i(c),
        f = n(2),
        d = i(f),
        p = n(0),
        v = i(p);
    n(42);
    var g = .5,
        m = '\n  <div class="viewport"></div>\n  <div class="close"></div>\n  <footer class="footer">\n    <div class="info">\n      <h2 class="title">&nbsp;</h2>\n      <h3 class="description">&nbsp;</h3>\n    </div>\n    <div class="menu">\n      <button class="button prev">\n        <svg class="icon">\n          <use xlink:href="#icon-left"/>\n        </svg>\n      </button>\n      <button class="button home">Home</button>\n      <button class="button next">\n        <svg class="icon">\n          <use xlink:href="#icon-right"/>\n        </svg>\n      </button>\n    </div>\n    <div class="toggle">\n      <svg class="icon">\n        <use xlink:href="#icon-menu"/>\n      </svg>\n    </div>\n  </footer>\n  <div class="transition"></div>\n  <div class="loader"></div>\n',
        y = function() {
            function e(t) {
                o(this, e), this.el = t, this.el.classList.add("project-component"), this.el.innerHTML = m, this.isTouch = "ontouchstart" in document.documentElement, this.transitioning = !1, this.transition = new a.default((0, v.default)(".transition", this.el)), this.loader = new h.default((0, v.default)(".loader", this.el)), this.$description = (0, v.default)(".description", this.el), this.$viewport = (0, v.default)(".viewport", this.el), this.$footer = (0, v.default)(".footer", this.el), this.$toggle = (0, v.default)(".toggle", this.el), this.$title = (0, v.default)(".title", this.el), this.$close = (0, v.default)(".close", this.el), this.$home = (0, v.default)(".home", this.el), this.$prev = (0, v.default)(".prev", this.el), this.$next = (0, v.default)(".next", this.el), this.title = new d.default(this.$title), this.description = new d.default(this.$description), this.isTouch ? this.$toggle.addEventListener("click", this.onClickToggle.bind(this)) : (this.$footer.addEventListener("mouseover", this.onClickToggle.bind(this)), this.$footer.addEventListener("mouseleave", this.onClickClose.bind(this)), this.$footer.addEventListener("mouseout", this.onClickClose.bind(this))), this.$close.addEventListener("click", this.onClickClose.bind(this)), this.$home.addEventListener("click", this.onClickHome.bind(this)), this.$prev.addEventListener("click", this.onClickPrev.bind(this)), this.$next.addEventListener("click", this.onClickNext.bind(this)), this.hideFooter(), v.default.hide(this.el), v.default.hide(this.transition.el)
            }
            return r(e, [{
                key: "show",
                value: function(e) {
                    var t = this,
                        n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this.project && (n = !1, this.hide(!1)), this.project = e;
                    var i = l.default.projects.indexOf(e);
                    this.$prev.disabled = 0 === i, this.$next.disabled = i === l.default.projects.length - 1, this.clearTimeout(), v.default.show(this.el), v.default.show(this.transition.el), v.default.hide(this.loader.el), v.default.hide(this.$viewport), this.transition.mode = a.default.OBSCURE, this.transition.flipX = !0, this.transition.flipY = !1, this.transitioning = !0, this.transition.run(n ? g : 0, function() {
                        var n = e.title,
                            i = e.description,
                            o = e.instruction,
                            r = e.content;
                        v.default.show(t.loader.el), v.default.show(t.$viewport), t.frame = document.createElement("iframe"), t.frame.className = "frame", t.$viewport.appendChild(t.frame), t.loader.load(r, o, t.frame, function() {
                            v.default.hide(t.loader.el), t.showFooter(), t.title.decode(n, {
                                duration: .075 * n.length,
                                delay: .05
                            }), t.$description.innerHTML = i, t.transition.mode = a.default.REVEAL, t.transition.flipX = !1, t.transition.run(g, function() {
                                v.default.hide(t.transition.el), t.transitioning = !1
                            })
                        })
                    })
                }
            }, {
                key: "hide",
                value: function() {
                    var e = this,
                        t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.project = null, this.clearTimeout(), this.transitioning && (t = !1), v.default.hide(this.loader.el), t ? (v.default.show(this.transition.el), this.transition.mode = a.default.OBSCURE, this.transition.flipX = !1, this.transition.flipY = !0, this.transitioning = !0, this.transition.run(g), this.schedule(function() {
                        v.default.hide(e.$viewport), e.hideFooter(), e.$viewport.innerHTML = "", e.transition.mode = a.default.REVEAL, e.transition.run(g, function() {
                            e.transition.flipX = !0, e.transitioning = !1, v.default.hide(e.el)
                        })
                    }, 1e3 * g * .5)) : (this.$viewport.innerHTML = "", this.hideFooter(), v.default.hide(this.el))
                }
            }, {
                key: "showFooter",
                value: function() {
                    this.$footer.classList.toggle("show", !0)
                }
            }, {
                key: "hideFooter",
                value: function() {
                    this.$footer.classList.toggle("show", !1), this.$footer.classList.toggle("open", !1)
                }
            }, {
                key: "schedule",
                value: function(e, t) {
                    this.clearTimeout(), this.timeout = setTimeout(e, t)
                }
            }, {
                key: "clearTimeout",
                value: function(e) {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t.toString = function() {
                        return e.toString()
                    }, t
                }(function() {
                    clearTimeout(this.timeout), this.timeout = null
                })
            }, {
                key: "onClickHome",
                value: function() {
                    l.default.go("/")
                }
            }, {
                key: "onClickToggle",
                value: function() {
                    this.$footer.classList.toggle("open", !0), this.isTouch && this.$close.classList.toggle("enabled", !0)
                }
            }, {
                key: "onClickClose",
                value: function() {
                    this.$close.classList.toggle("enabled", !1), this.$footer.classList.toggle("open", !1)
                }
            }, {
                key: "onClickPrev",
                value: function() {
                    var e = l.default.projects.indexOf(this.project),
                        t = l.default.projects[e - 1];
                    t && l.default.go(t.path)
                }
            }, {
                key: "onClickNext",
                value: function() {
                    var e = l.default.projects.indexOf(this.project),
                        t = l.default.projects[e + 1];
                    t && l.default.go(t.path)
                }
            }]), e
        }();
    t.default = y
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(26);
    Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
            return i(o).default
        }
    })
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        s = n(4),
        a = i(s),
        u = n(0),
        l = i(u);
    n(43);
    var c = '\n  <canvas class="canvas"></canvas>\n',
        h = function() {
            function e(t) {
                o(this, e), this.el = t, this.el.classList.add("transition-component"), this.el.innerHTML = c, this.canvas = (0, l.default)(".canvas", this.el), this.context = this.canvas.getContext("2d"), this.running = !1, this.color = "#16191b", this.mode = e.OBSCURE, this.flipX = !1, this.flipY = !1, this._progress = 0
            }
            return r(e, [{
                key: "run",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2,
                        n = arguments[1];
                    this.stop(), this.resize(), this.progress = 0, this.running = !0, this.tween = a.default.to(this, t, {
                        progress: 1
                    }), this.tween.ease(a.default.Quint.out), this.tween.done(function() {
                        e.running = !1, n && n()
                    })
                }
            }, {
                key: "stop",
                value: function() {
                    this.tween && (this.running = !1, this.tween.kill())
                }
            }, {
                key: "render",
                value: function() {
                    var t = .5,
                        n = .85,
                        i = 3,
                        o = .95,
                        r = Math.pow(this.progress, n),
                        s = Math.pow(this.progress, n + o),
                        a = Math.pow(this.progress, n + i),
                        u = Math.pow(this.progress, n + i + o),
                        l = this.height - r * this.height,
                        c = this.height - s * this.height,
                        h = this.height - a * this.height,
                        f = this.height - u * this.height,
                        d = this.flipX ? this.width : 0,
                        p = this.flipX ? 0 : this.width;
                    switch (this.flipY && (this.context.save(), this.context.translate(0, this.height), this.context.scale(1, -1)), this.clear(), this.context.fillStyle = this.color, this.mode) {
                        case e.OBSCURE:
                            this.context.globalAlpha = t, this.context.beginPath(), this.context.moveTo(d, l), this.context.lineTo(p, c), this.context.lineTo(p, f), this.context.lineTo(d, h), this.context.fill(), this.context.globalAlpha = 1, this.context.beginPath(), this.context.moveTo(d, h), this.context.lineTo(p, f), this.context.lineTo(p, this.height), this.context.lineTo(d, this.height), this.context.fill();
                            break;
                        case e.REVEAL:
                            this.context.globalAlpha = 1, this.context.beginPath(), this.context.moveTo(d, 0), this.context.lineTo(p, 0), this.context.lineTo(p, c), this.context.lineTo(d, l), this.context.fill(), this.context.globalAlpha = t, this.context.beginPath(), this.context.moveTo(d, l), this.context.lineTo(p, c), this.context.lineTo(p, f), this.context.lineTo(d, h), this.context.fill()
                    }
                    this.flipY && this.context.restore()
                }
            }, {
                key: "clear",
                value: function() {
                    this.context.clearRect(0, 0, this.width, this.height)
                }
            }, {
                key: "resize",
                value: function() {
                    this.scale = window.devicePixelRatio || 1, this.width = this.canvas.clientWidth, this.height = this.canvas.clientHeight, this.canvas.width = this.width * this.scale, this.canvas.height = this.height * this.scale, this.context.scale(this.scale, this.scale)
                }
            }, {
                key: "progress",
                get: function() {
                    return this._progress
                },
                set: function(e) {
                    this._progress = e, this.render()
                }
            }]), e
        }();
    h.OBSCURE = "obscure", h.REVEAL = "reveal", t.default = h
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(28);
    Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
            return i(o).default
        }
    })
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        s = n(31),
        a = n(4),
        u = i(a);
    n(44);
    var l = /<[^>]+>/,
        c = /&[^;\s]+;/,
        h = new RegExp("(" + l.source + "|" + c.source + ")"),
        f = "&nbsp;",
        d = function(e) {
            for (var t = new RegExp("^" + h.source), n = []; e.length;) {
                var i = e.match(t),
                    o = (i || e)[0];
                e = e.substr(o.length), n.push(o)
            }
            var r = n.map(function(e) {
                    return l.test(e) ? e : " " === e ? f : ""
                }),
                s = n.reduce(function(e, t, n) {
                    return l.test(t) || e.push({
                        index: n,
                        char: t
                    }), e
                }, []),
                a = s.map(function(e) {
                    return e.char
                });
            return {
                items: n,
                start: r,
                queue: s,
                text: a
            }
        },
        p = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "temp";
            return '<span class="' + t + '">' + e + "</span>"
        },
        v = function(e) {
            return e[Math.floor(Math.random() * e.length)]
        },
        g = function() {
            function e(t) {
                o(this, e), this.el = t || document.createElement("span"), this.el.classList.add("typer-component")
            }
            return r(e, [{
                key: "type",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = n.onComplete,
                        o = void 0 === i ? null : i,
                        r = n.duration,
                        s = void 0 === r ? 2 : r,
                        a = n.cursor,
                        l = void 0 === a ? "_" : a,
                        c = n.delay,
                        h = void 0 === c ? 0 : c,
                        p = n.ease,
                        v = void 0 === p ? u.default.Linear.out : p,
                        g = d(e),
                        m = (g.items, g.start),
                        y = g.queue;
                    g.text, this.stop(), this.progress = 0, this.tween = u.default.to(this, s, {
                        progress: 1
                    }).wait(h).ease(v).done(o).step(function() {
                        var e = Math.min(1, 1.01 * t.progress),
                            n = m.concat().map(function(e) {
                                return e === f ? " " : e
                            }),
                            i = Math.floor(e * y.length),
                            o = void 0,
                            r = void 0;
                        for (r = 0; r < i; r++) o = y[r], n[o.index] = o.char;
                        o && " " === o.char && (n[o.index] = f), i < y.length && n.push(l), t.el.innerHTML = n.join("")
                    })
                }
            }, {
                key: "decode",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = n.onComplete,
                        o = void 0 === i ? null : i,
                        r = n.scramble,
                        a = void 0 === r ? "__-—/\\|<>" : r,
                        l = n.useInput,
                        c = void 0 === l || l,
                        h = n.duration,
                        f = void 0 === h ? 2 : h,
                        g = n.mutation,
                        m = void 0 === g ? .15 : g,
                        y = n.showPower,
                        w = void 0 === y ? .5 : y,
                        b = n.mashPower,
                        x = void 0 === b ? 2 : b,
                        k = n.donePower,
                        M = void 0 === k ? 15 : k,
                        _ = n.cursor,
                        T = void 0 === _ ? "-" : _,
                        L = n.delay,
                        P = void 0 === L ? 0 : L,
                        j = n.ease,
                        C = void 0 === j ? u.default.Quint.inOut : j,
                        O = d(e),
                        $ = (O.items, O.start),
                        E = O.queue;
                    O.text, a = (c ? a + E.map(function(e) {
                        return e.char.toLowerCase()
                    }).reduce(function(e, t) {
                        return e.indexOf(t) === -1 ? e + t : e
                    }, "") : a).split("").map(function(e) {
                        return p(e)
                    }), T = p(T), (0, s.shuffle)(E), this.stop(), this.progress = 0, this.tween = u.default.to(this, f, {
                        progress: 1
                    }).wait(P).ease(C).done(o).step(function() {
                        for (var e, n, i = Math.min(1, 1.01 * t.progress), o = ~~(Math.pow(i, w) * E.length), r = ~~(Math.pow(i, x) * E.length), s = ~~(Math.pow(i, M) * E.length), u = $.concat(), l = 0; l < o; l++) e = E[l], l <= s ? n = e.char : l <= r ? ((!e.temp || Math.random() < m) && (e.temp = v(a)), n = e.temp) : n = T, u[e.index] = n;
                        t.el.innerHTML = u.join("")
                    })
                }
            }, {
                key: "stop",
                value: function() {
                    this.tween && this.tween.kill()
                }
            }]), e
        }();
    t.default = g
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.shuffle = function(e) {
        for (var t = void 0, n = e.length - 1; n > 0; n--) {
            t = Math.floor(Math.random() * (n + 1));
            var i = [e[n], e[t]];
            e[t] = i[0], e[n] = i[1]
        }
        return e
    }
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.clamp = function(e, t, n) {
        return Math.min(n, Math.max(t, e))
    }
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.leadingZeros = function(e, t) {
        var n = e.toString();
        return "0".repeat(t - n.length) + n
    }
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.join = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return t.join("/").replace(/([^\:])\/{2,}/g, "$1/")
    }
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var o = n(5),
        r = i(o),
        s = n(3),
        a = i(s),
        u = function() {
            r.default.init(), a.default.init()
        };
    "complete" === document.readyState ? u() : window.addEventListener("load", u)
}]);