// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/responsiveslides.min.js":[function(require,module,exports) {
/*! http://responsiveslides.com v1.55 by @viljamis */
(function (c, K, C) {
  c.fn.responsiveSlides = function (m) {
    var a = c.extend({
      auto: !0,
      speed: 500,
      timeout: 4E3,
      pager: !1,
      nav: !1,
      random: !1,
      pause: !1,
      pauseControls: !0,
      prevText: "Previous",
      nextText: "Next",
      maxwidth: "",
      navContainer: "",
      manualControls: "",
      namespace: "rslides",
      before: c.noop,
      after: c.noop
    }, m);
    return this.each(function () {
      C++;

      var f = c(this),
          u,
          t,
          v,
          n,
          q,
          r,
          p = 0,
          e = f.children(),
          D = e.length,
          h = parseFloat(a.speed),
          E = parseFloat(a.timeout),
          w = parseFloat(a.maxwidth),
          g = a.namespace,
          d = g + C,
          F = g + "_nav " + d + "_nav",
          x = g + "_here",
          k = d + "_on",
          y = d + "_s",
          l = c("<ul class='" + g + "_tabs " + d + "_tabs' />"),
          z = {
        "float": "left",
        position: "relative",
        opacity: 1,
        zIndex: 2
      },
          A = {
        "float": "none",
        position: "absolute",
        opacity: 0,
        zIndex: 1
      },
          G = function () {
        var b = (document.body || document.documentElement).style,
            a = "transition";
        if ("string" === typeof b[a]) return !0;
        u = ["Moz", "Webkit", "Khtml", "O", "ms"];
        var a = a.charAt(0).toUpperCase() + a.substr(1),
            c;

        for (c = 0; c < u.length; c++) {
          if ("string" === typeof b[u[c] + a]) return !0;
        }

        return !1;
      }(),
          B = function B(b) {
        a.before(b);
        G ? (e.removeClass(k).css(A).eq(b).addClass(k).css(z), p = b, setTimeout(function () {
          a.after(b);
        }, h)) : e.stop().fadeOut(h, function () {
          c(this).removeClass(k).css(A).css("opacity", 1);
        }).eq(b).fadeIn(h, function () {
          c(this).addClass(k).css(z);
          a.after(b);
          p = b;
        });
      };

      a.random && (e.sort(function () {
        return Math.round(Math.random()) - .5;
      }), f.empty().append(e));
      e.each(function (a) {
        this.id = y + a;
      });
      f.addClass(g + " " + d);
      m && m.maxwidth && f.css("max-width", w);
      e.hide().css(A).eq(0).addClass(k).css(z).show();
      G && e.show().css({
        "-webkit-transition": "opacity " + h + "ms ease-in-out",
        "-moz-transition": "opacity " + h + "ms ease-in-out",
        "-o-transition": "opacity " + h + "ms ease-in-out",
        transition: "opacity " + h + "ms ease-in-out"
      });

      if (1 < e.length) {
        if (E < h + 100) return;

        if (a.pager && !a.manualControls) {
          var H = [];
          e.each(function (a) {
            a += 1;
            H += "<li><a href='#' class='" + y + a + "'>" + a + "</a></li>";
          });
          l.append(H);
          m.navContainer ? c(a.navContainer).append(l) : f.after(l);
        }

        a.manualControls && (l = c(a.manualControls), l.addClass(g + "_tabs " + d + "_tabs"));
        (a.pager || a.manualControls) && l.find("li").each(function (a) {
          c(this).addClass(y + (a + 1));
        });
        if (a.pager || a.manualControls) r = l.find("a"), t = function t(a) {
          r.closest("li").removeClass(x).eq(a).addClass(x);
        };
        a.auto && (v = function v() {
          q = setInterval(function () {
            e.stop(!0, !0);
            var b = p + 1 < D ? p + 1 : 0;
            (a.pager || a.manualControls) && t(b);
            B(b);
          }, E);
        }, v());

        n = function n() {
          a.auto && (clearInterval(q), v());
        };

        a.pause && f.hover(function () {
          clearInterval(q);
        }, function () {
          n();
        });
        if (a.pager || a.manualControls) r.bind("click", function (b) {
          b.preventDefault();
          a.pauseControls || n();
          b = r.index(this);
          p === b || c("." + k).queue("fx").length || (t(b), B(b));
        }).eq(0).closest("li").addClass(x), a.pauseControls && r.hover(function () {
          clearInterval(q);
        }, function () {
          n();
        });

        if (a.nav) {
          g = "<a href='#' class='" + F + " prev'>" + a.prevText + "</a><a href='#' class='" + F + " next'>" + a.nextText + "</a>";
          m.navContainer ? c(a.navContainer).append(g) : f.after(g);
          var d = c("." + d + "_nav"),
              I = d.filter(".prev");
          d.bind("click", function (b) {
            b.preventDefault();
            b = c("." + k);

            if (!b.queue("fx").length) {
              var d = e.index(b);
              b = d - 1;
              d = d + 1 < D ? p + 1 : 0;
              B(c(this)[0] === I[0] ? b : d);
              (a.pager || a.manualControls) && t(c(this)[0] === I[0] ? b : d);
              a.pauseControls || n();
            }
          });
          a.pauseControls && d.hover(function () {
            clearInterval(q);
          }, function () {
            n();
          });
        }
      }

      if ("undefined" === typeof document.body.style.maxWidth && m.maxwidth) {
        var J = function J() {
          f.css("width", "100%");
          f.width() > w && f.css("width", w);
        };

        J();
        c(K).bind("resize", function () {
          J();
        });
      }
    });
  };
})(jQuery, this, 0);
},{}],"../../../../Users/Roberto.Andres.Sanch/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53523" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../Users/Roberto.Andres.Sanch/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/responsiveslides.min.js"], null)
//# sourceMappingURL=/responsiveslides.min.06f81558.js.map