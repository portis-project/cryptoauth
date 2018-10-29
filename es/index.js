import { initDappBrowserProvider, initPortisProvider } from './initializers';
export function getProvider(options) {
    isValidOptions(options);
    return initDappBrowserProvider() || getPortisProvider(options);
}
export function getDappBrowserProvider() {
    return initDappBrowserProvider();
}
export function getPortisProvider(options) {
    isValidOptions(options);
    return initPortisProvider(options);
}
function isValidOptions(options) {
    if (!options) {
        throw '[cryptoauth] `options` object is required';
    }
    if (!options.portis) {
        throw '[cryptoauth] `portis` parameter is required';
    }
}
//# sourceMappingURL=index.js.map