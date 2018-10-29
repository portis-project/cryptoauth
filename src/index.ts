import { ProviderOptions } from './types';
import { initDappBrowserProvider, initPortisProvider } from './initializers';

export function getProvider(options: ProviderOptions) {
    isValidOptions(options);
    return initDappBrowserProvider() || getPortisProvider(options);
}

export function getDappBrowserProvider() {
    return initDappBrowserProvider();
}

export function getPortisProvider(options: ProviderOptions) {
    isValidOptions(options);
    return initPortisProvider(options);
}

function isValidOptions(options: ProviderOptions) {
    if (!options) {
        throw '[cryptoauth] `options` object is required';
    }

    if (!options.portis) {
        throw '[cryptoauth] `portis` parameter is required';
    }
}
