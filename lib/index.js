"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handlers_1 = require("./handlers");
function getProvider(options) {
    isValidOptions(options);
    return handlers_1.initDappBrowserProvider() || getPortisProvider(options);
}
exports.getProvider = getProvider;
function getDappBrowserProvider() {
    return handlers_1.initDappBrowserProvider();
}
exports.getDappBrowserProvider = getDappBrowserProvider;
function getPortisProvider(options) {
    isValidOptions(options);
    return handlers_1.initPortisProvider(options);
}
exports.getPortisProvider = getPortisProvider;
function isValidOptions(options) {
    if (!options) {
        throw '`options` object is required';
    }
    if (!options.portis) {
        throw '`portis` parameter is required';
    }
}
//# sourceMappingURL=index.js.map