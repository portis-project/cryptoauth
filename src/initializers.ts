declare global {
    interface Window { ethereum: any; web3: any, Portis: any }
}

import { ProviderOptions } from './types';
let Portis;

try {
    Portis = require('portis');
} catch (err) {
    Portis = window.Portis;
}

export function initDappBrowserProvider() {
    let provider;

    // Modern dapp browsers
    if (window.ethereum) {
        provider = window.ethereum;
    }
    // Legacy dapp browsers
    else if (window.web3) {
        provider = Object.assign(window.web3.currentProvider, {
            enable: () => new Promise((resolve, reject) =>
                window.web3.currentProvider.eth.getAccounts((err, resp) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(resp.result);
                    }
                })
            )
        });
    }

    return provider;
}

export function initPortisProvider(options: ProviderOptions) {
    let provider;

    if (Portis) {
        provider = new Portis.PortisProvider(options.portis);
    } else {
        throw '[cryptoauth] You have to import Portis. More info here: https://github.com/portis-project/portis-sdk';
    }

    return provider;
}
