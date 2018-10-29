var Portis;
try {
    Portis = require('portis');
}
catch (err) {
    Portis = window.Portis;
}
export function initDappBrowserProvider() {
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
export function initPortisProvider(options) {
    var provider;
    if (Portis) {
        provider = new Portis.PortisProvider(options.portis);
    }
    else {
        throw 'You have to import Portis. More info here: https://github.com/portis-project/portis-sdk';
    }
    return provider;
}
//# sourceMappingURL=handlers.js.map