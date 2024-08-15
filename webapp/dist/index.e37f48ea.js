// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hycaY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _examsViewJs = require("./views/examsView.js");
var _examsViewJsDefault = parcelHelpers.interopDefault(_examsViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _tokenSearchViewJs = require("./views/tokenSearchView.js");
var _tokenSearchViewJsDefault = parcelHelpers.interopDefault(_tokenSearchViewJs);
var _detailedExamsViewJs = require("./views/detailedExamsView.js");
var _detailedExamsViewJsDefault = parcelHelpers.interopDefault(_detailedExamsViewJs);
var _navbarViewJs = require("./views/navbarView.js");
var _navbarViewJsDefault = parcelHelpers.interopDefault(_navbarViewJs);
var _insertExamsViewJs = require("./views/insertExamsView.js");
var _insertExamsViewJsDefault = parcelHelpers.interopDefault(_insertExamsViewJs);
var _insertSuccessViewJs = require("./views/insertSuccessView.js");
var _insertSuccessViewJsDefault = parcelHelpers.interopDefault(_insertSuccessViewJs);
const controlExams = async function() {
    try {
        (0, _examsViewJsDefault.default).renderSpinner();
        await _modelJs.loadExams();
        (0, _examsViewJsDefault.default).renderList(_modelJs.getExamsPage());
        (0, _paginationViewJsDefault.default).render(_modelJs.state);
    } catch (error) {
        (0, _examsViewJsDefault.default).clear();
        (0, _examsViewJsDefault.default).renderError(error, (0, _examsViewJsDefault.default).errorMsg);
    }
};
const controlTokenSearch = async function() {
    try {
        const token = (0, _tokenSearchViewJsDefault.default).getToken();
        if (!token) return;
        await _modelJs.loadDetailedExams(token);
        if (_modelJs.state.tokenSearch.detailedExam.error) (0, _tokenSearchViewJsDefault.default).renderNotFound();
        (0, _detailedExamsViewJsDefault.default).renderExam(_modelJs.state.tokenSearch.detailedExam);
        (0, _tokenSearchViewJsDefault.default).clearInput((0, _detailedExamsViewJsDefault.default).section, (0, _examsViewJsDefault.default).section);
        (0, _tokenSearchViewJsDefault.default).clearNotFound();
        (0, _detailedExamsViewJsDefault.default).show();
        (0, _examsViewJsDefault.default).hide();
        (0, _insertExamsViewJsDefault.default).hide();
        (0, _insertSuccessViewJsDefault.default).hide();
    } catch (error) {
        console.log(error);
    }
};
const controlInsertExams = async function(data) {
    try {
        await _modelJs.postExams(data);
        (0, _insertExamsViewJsDefault.default).hide();
        (0, _insertSuccessViewJsDefault.default).show();
    } catch (error) {
        (0, _insertExamsViewJsDefault.default).renderError(error, (0, _insertExamsViewJsDefault.default).errorMsg);
    }
};
const controlNavbarExams = function() {
    (0, _examsViewJsDefault.default).show();
    (0, _detailedExamsViewJsDefault.default).hide();
    (0, _insertExamsViewJsDefault.default).hide();
    (0, _insertSuccessViewJsDefault.default).hide();
};
const controlNavbarInsertExams = function() {
    (0, _insertExamsViewJsDefault.default).show();
    (0, _examsViewJsDefault.default).hide();
    (0, _detailedExamsViewJsDefault.default).hide();
    (0, _insertSuccessViewJsDefault.default).hide();
};
const controlPagination = function(gotoPage) {
    (0, _examsViewJsDefault.default).renderList(_modelJs.getExamsPage(gotoPage));
    (0, _paginationViewJsDefault.default).render(_modelJs.state);
};
const init = function() {
    controlPagination();
    (0, _navbarViewJsDefault.default).createRedirectButton();
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPagination);
    (0, _tokenSearchViewJsDefault.default).addHandlerSearch(controlTokenSearch);
    (0, _navbarViewJsDefault.default).addHandlerExamsClick(controlNavbarExams);
    (0, _navbarViewJsDefault.default).addHandlerInsertExamsClick(controlNavbarInsertExams);
    (0, _insertExamsViewJsDefault.default).addHandlerUpload(controlInsertExams);
    controlExams();
};
init();

},{"./model.js":"Y4A21","./views/examsView.js":"esRgU","./views/paginationView.js":"6z7bi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/tokenSearchView.js":"fIqow","./views/detailedExamsView.js":"jKlmF","./views/navbarView.js":"xAXOZ","./views/insertExamsView.js":"5n0Tn","./views/insertSuccessView.js":"5B7KN"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadExams", ()=>loadExams);
parcelHelpers.export(exports, "getExamsPage", ()=>getExamsPage);
parcelHelpers.export(exports, "loadDetailedExams", ()=>loadDetailedExams);
parcelHelpers.export(exports, "postExams", ()=>postExams);
var _config = require("./config");
var _helper = require("./helper");
const state = {
    exams: [],
    pagination: {
        resultsPerPage: (0, _config.RESULTS_PER_PAGE),
        page: 1
    },
    tokenSearch: {
        detailedExam: {},
        token: ""
    }
};
const loadExams = async function() {
    try {
        const data = await (0, _helper.getJSON)((0, _config.API_URL));
        data.reverse().forEach((exam)=>{
            state.exams.push(exam);
        });
    } catch (error) {
        throw error;
    }
};
const getExamsPage = function(page = state.pagination.page) {
    state.pagination.page = page;
    const start = (page - 1) * state.pagination.resultsPerPage;
    const end = page * state.pagination.resultsPerPage;
    return state.exams.slice(start, end);
};
const loadDetailedExams = async function(token) {
    try {
        const data = await (0, _helper.getJSON)(`${(0, _config.API_URL)}?token=${token}`);
        state.tokenSearch.token = token;
        state.tokenSearch.detailedExam = data;
    } catch (error) {
        throw error;
    }
};
const postExams = async function(data) {
    try {
        const response = await fetch((0, _config.API_URL), {
            method: "POST",
            body: data
        });
        data = await response.json();
        if (!response.ok) throw new Error(data.error);
    } catch (error) {
        throw error;
    }
};

},{"./config":"k5Hzs","./helper":"lVRAz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "WEBAPP_URL", ()=>WEBAPP_URL);
parcelHelpers.export(exports, "RESULTS_PER_PAGE", ()=>RESULTS_PER_PAGE);
const API_URL = "http://localhost:3000/exams";
const WEBAPP_URL = "http://localhost:1234";
const RESULTS_PER_PAGE = 15;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lVRAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
const getJSON = async function(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) throw new Error(`${data.message} (${response.status})`);
        return data;
    } catch (error) {
        throw error;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"esRgU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class ExamsView extends (0, _viewJsDefault.default) {
    section = document.querySelector("#exams-section");
    _parentElement = document.querySelector("#exams");
    errorMsg = "N\xe3o foi poss\xedvel carregar os exames";
    renderList(data) {
        this._data = data;
        this.clear();
        this._data.forEach((exam)=>{
            this._parentElement.insertAdjacentHTML("beforeEnd", this._generateMarkup(exam));
        });
    }
    _generateMarkup(exam) {
        return `
      <tr>
        <th scope="row">${exam.exam_token}</th>
        <td>${exam.patient_name}</td>
        <td>${exam.medic_name}</td>
        <td>${exam.exam_type}</td>
      </tr>
    `;
    }
}
exports.default = new ExamsView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cUXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    section;
    _parentElement;
    _alertElement = document.querySelector("#alert");
    _data;
    clear() {
        this._parentElement.innerHTML = "";
    }
    hide() {
        if (this.section.classList.contains("hidden")) return;
        this.section.classList.add("hidden");
    }
    show() {
        this.clearError();
        if (this.section.classList.contains("hidden")) return this.section.classList.remove("hidden");
    }
    render(data) {
        this._data = data;
        this.clear();
        this.clearError();
        this._parentElement.insertAdjacentHTML("beforeEnd", this._generateMarkup());
    }
    renderSpinner() {
        const markup = `
      <div class="loading"></div>
    `;
        this._parentElement.innerHTML = "";
        this._parentElement.insertAdjacentHTML("afterBegin", markup);
    }
    renderError(error, msg) {
        const markup = `<span>${msg} => (${error})</span>`;
        this.clearError();
        this._alertElement.classList.remove("hidden");
        this._alertElement.insertAdjacentHTML("afterBegin", markup);
    }
    clearError() {
        this._alertElement.classList.add("hidden");
        this._alertElement.innerHTML = "";
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class PaginationView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector("#pagination");
    addHandlerClick(handler) {
        this._parentElement.addEventListener("click", function(event) {
            const button = event.target.closest(".btn");
            if (!button) return;
            const gotoPage = +button.dataset.goto;
            handler(gotoPage);
        });
    }
    _generateMarkup() {
        const numPages = Math.ceil(this._data.exams.length / this._data.pagination.resultsPerPage);
        if (this._data.pagination.page === 1 && numPages > 1) return `
      <button data-goto=${this._data.pagination.page - 1} class="btn btn-outline-dark me-3" disabled>Anterior</button>
      <strong class="fs-5 me-3">${this._data.pagination.page}</strong>
      <span class="text-muted me-3">${this._data.pagination.page + 1}</span>
      <button data-goto=${this._data.pagination.page + 1} class="btn btn-outline-dark">Pr\xf3ximo</button>
      `;
        if (this._data.pagination.page === numPages && numPages > 1) return `
      <button data-goto=${this._data.pagination.page - 1} class="btn btn-outline-dark me-3">Anterior</button>
      <span class="text-muted me-3">${this._data.pagination.page - 1}</span>
      <strong class="fs-5 me-3">${this._data.pagination.page}</strong>
      <button data-goto=${this._data.pagination.page + 1} class="btn btn-outline-dark" disabled>Pr\xf3ximo</button>
      `;
        if (this._data.pagination.page < numPages) return `
      <button data-goto=${this._data.pagination.page - 1} class="btn btn-outline-dark me-3">Anterior</button>
      <span class="text-muted me-3">${this._data.pagination.page - 1}</span>
      <strong class="fs-5 me-3">${this._data.pagination.page}</strong>
      <span class="text-muted me-3">${this._data.pagination.page + 1}</span>
      <button data-goto=${this._data.pagination.page + 1} class="btn btn-outline-dark">Pr\xf3ximo</button>
      `;
        return `<strong class="fs-5">${this._data.pagination.page}</strong>`;
    }
}
exports.default = new PaginationView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fIqow":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class ExamsView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector("#token-search");
    _queryInput = document.querySelector("#search-input");
    _notFound = document.querySelector("#not-found");
    getToken() {
        return this._queryInput.value;
    }
    clearInput() {
        this._queryInput.value = "";
    }
    renderNotFound() {
        this._notFound.innerHTML = "N\xe3o foi poss\xedvel encontrar um exame com este token";
    }
    clearNotFound() {
        this._notFound.innerHTML = "";
    }
    addHandlerSearch(handler) {
        this._parentElement.addEventListener("submit", function(event) {
            event.preventDefault();
            handler();
        });
    }
}
exports.default = new ExamsView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jKlmF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class PaginationView extends (0, _viewJsDefault.default) {
    section = document.querySelector("#detailed-exams-section");
    _parentElement = document.querySelector("#detailed-exams");
    _examResults = document.querySelector("#exam-results");
    _data;
    renderExam(data) {
        this._data = data;
        this.clear();
        this._parentElement.insertAdjacentHTML("beforeEnd", this._generateInfoMarkup(this._data));
        this._data.exams.forEach((result)=>{
            this._examResults.insertAdjacentHTML("beforeEnd", this._generateResultsMarkup(result));
        });
    }
    _generateInfoMarkup(data) {
        return `
      <h3 class="text-center mt-2">Resultado dos exames - #${data.exam_token}</h3>
      <hr>
      <h5 class="text-center">Data: ${data.exam_date.split(" ")[0]}</h5>
      <div class="d-flex px-3 py-2">
        <div class="container col-5 align-self-start border rounded-4 p-3">
          <p><strong>Nome:</strong> ${data.patient_name}</p>
          <p><strong>CPF:</strong> ${data.cpf}</p>
          <p><strong>Data de Nascimento:</strong> ${data.patient_birthdate.split(" ")[0]}</p>
          <p><strong>E-mail:</strong> ${data.patient_mail}</p>
        </div>
        <div class="container col-5 border rounded-4 p-3">
          <p><strong>M\xe9dico:</strong> ${data.medic.medic_name}</p>
          <p><strong>CRM:</strong> ${data.medic.medic_crm}/${data.medic.medic_crm_state}</p>
        </div>
      </div>
      <hr>
      
    `;
    }
    _generateResultsMarkup(result) {
        return `
      <div class="text-center col-3 border rounded-4 p-3 me-4 mb-3">
        <strong>${result.exam_type}</strong>
        <hr>
        <p>Intervalo do resultado: ${result.exam_type_range}</p>
        <p>Resultado: <strong>${result.exam_result}</strong></p>
      </div>
    `;
    }
}
exports.default = new PaginationView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"xAXOZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _configJs = require("../config.js");
class NavbarView extends (0, _viewJsDefault.default) {
    _examsButton = document.querySelector("#nav-exams-button");
    _insertExamsButton = document.querySelector("#nav-insert-exams-button");
    _mainPageRedirectButton = document.querySelector("#main-page");
    addHandlerExamsClick(handler) {
        this._examsButton.addEventListener("click", function() {
            handler();
        });
    }
    addHandlerInsertExamsClick(handler) {
        this._insertExamsButton.addEventListener("click", function() {
            handler();
        });
    }
    createRedirectButton() {
        this._mainPageRedirectButton.href = (0, _configJs.WEBAPP_URL);
    }
}
exports.default = new NavbarView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../config.js":"k5Hzs"}],"5n0Tn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class InsertExamsView extends (0, _viewJsDefault.default) {
    section = document.querySelector("#insert-exams-section");
    _parentElement = document.querySelector("#insert-exams");
    errorMsg = "Houve uma falha ao enviar o arquivo.";
    addHandlerUpload(handler) {
        this._parentElement.addEventListener("submit", function(event) {
            event.preventDefault();
            const data = new FormData(this);
            handler(data);
        });
    }
}
exports.default = new InsertExamsView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5B7KN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class InsertSuccess extends (0, _viewJsDefault.default) {
    section = document.querySelector("#insert-success-section");
}
exports.default = new InsertSuccess();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hycaY","aenu9"], "aenu9", "parcelRequire49ed")

//# sourceMappingURL=index.e37f48ea.js.map
