"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initializers_1 = require("./initializers");
function getProvider(options) {
    isValidOptions(options);
    return initializers_1.initDappBrowserProvider() || getPortisProvider(options);
}
exports.getProvider = getProvider;
function getDappBrowserProvider() {
    return initializers_1.initDappBrowserProvider();
}
exports.getDappBrowserProvider = getDappBrowserProvider;
function getPortisProvider(options) {
    isValidOptions(options);
    return initializers_1.initPortisProvider(options);
}
exports.getPortisProvider = getPortisProvider;
function isValidOptions(options) {
    if (!options) {
        throw '[cryptoauth] `options` object is required';
    }
    if (!options.portis) {
        throw '[cryptoauth] `portis` parameter is required';
    }
}
//# sourceMappingURL=index.js.map