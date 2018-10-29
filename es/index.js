import { initDappBrowserProvider, initPortisProvider } from './handlers';
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
        throw '`options` object is required';
    }
    if (!options.portis) {
        throw '`portis` parameter is required';
    }
}
//# sourceMappingURL=index.js.map