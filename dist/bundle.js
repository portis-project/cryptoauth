(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define('cryptoauth', ['exports'], factory) :
	(factory((global.cryptoauth = {})));
}(this, (function (exports) { 'use strict';

var Portis;
try {
    Portis = require('portis');
}
catch (err) {
    Portis = window.Portis;
}
function initDappBrowserProvider() {
    var provider;
    // Modern dapp browsers
    if (window.ethereum) {
        provider = window.ethereum;
    }
    else if (window.web3) {
        provider = Object.assign(window.web3.currentProvider, {
            enable: function () { return new Promise(function (resolve, reject) {
                return window.web3.currentProvider.eth.getAccounts(function (err, resp) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(resp.result);
                    }
                });
            }); }
        });
    }
    return provider;
}
function initPortisProvider(options) {
    var provider;
    if (Portis) {
        provider = new Portis.PortisProvider(options.portis);
    }
    else {
        throw 'You have to import Portis. More info here: https://github.com/portis-project/portis-sdk';
    }
    return provider;
}

function getProvider(options) {
    isValidOptions(options);
    return initDappBrowserProvider() || getPortisProvider(options);
}
function getDappBrowserProvider() {
    return initDappBrowserProvider();
}
function getPortisProvider(options) {
    isValidOptions(options);
    return initPortisProvider(options);
}
function isValidOptions(options) {
    if (!options) {
        throw '`options` object is required';
    }
    if (!options.portis) {
        throw '`portis` parameter is required';
    }
}

exports.getProvider = getProvider;
exports.getDappBrowserProvider = getDappBrowserProvider;
exports.getPortisProvider = getPortisProvider;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bundle.js.map
