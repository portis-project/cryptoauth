# cryptoauth
Universal JavaScript web3 provider selection module for DApps

## The challenge
Right now, every DApp is re-implementing the flow which determines which web3 provider its users will use. This introduces several issues:
1. Time wasted "re-writing the wheel"
1. Inconsistent UX across DApps for a flow that every DApp must support
1. Best practices are not used everywhere
1. web3 providers might change their behaviour (e.g. [EIP-1102](https://eips.ethereum.org/EIPS/eip-1102)), meaning best case - each DApp has to re-implement that flow, worst case - bugs everywhere.


## The solution
Allow the community to maintain a single library, in order to save DApp developers everywhere the time and the headaches, as well as provide consistent UX, reducing friction for users.

To make sure DApp developers can completely avoid dealing with implementing that logic, even from a UI standpoint, cryptoauth would provide a default HTML view (implemented in several platforms - vanilla, angular, react, etc.), but would make sure to decouple it completely from the JavaScript logic, so DApps can easily implement their own views but still make use of the core cryptoauth library.


## Installation

To begin using cryptoauth in your DApp, the cryptoauth code should be loaded into your DApp's code. There are several ways to carry this out:

### npm

The recommended method of loading cryptoauth is by installing the `cryptoauth` npm package:

```js
$ npm install cryptoauth
```

### CDN
You can also include the bundled cryptoauth.js file hosted on jsdelivr's CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/cryptoauth/dist/bundle.min.js"></script>
```

<hr>

## Import

cryptoauth should be imported into the same part of the code where you initialize `web3`.

### CommonJS
To use cryptoauth with CommonJS imports:

```js
var cryptoauth = require('cryptoauth');
```

### Typescript / ES2015 (ES6)
To use cryptoauth with Typescript / ES2015 imports:

```js
import * as cryptoauth from 'cryptoauth';
```

### CDN
To use cryptoauth from CDN:

```js
var cryptoauth = window.cryptoauth;
```

<hr>

## Usage
There are three ways to use cryptoauth.

Please note that the Portis SDK is not included in cryptoauth's dependencies. You will need to [import it yourself](https://github.com/portis-project/portis-sdk#import).

### Default
#### Use DApp browser if available, otherwise fallback to Portis.

```js
var ethProvider = Cryptoauth.getProvider({ portis: portisConf });

if (!ethProvider) {
    throw 'no available provider';
}

var web3 = new Web3(ethProvider);
```

### DApp browser only
#### Use DApp browser if available, no fallback.

```js
var ethProvider = Cryptoauth.getDappBrowserProvider();

if (!ethProvider) {
    throw 'no available provider';
}

var web3 = new Web3(ethProvider);
```

### Portis only
#### Use Portis is available, no fallback.

```js
var ethProvider = Cryptoauth.getPortisProvider({ portis: portisConf });

if (!ethProvider) {
    throw 'no available provider';
}

var web3 = new Web3(ethProvider);
```

## Roadmap
- [x] Basic wrapper for different providers
- [x] EIP-1102 Support
- [ ] Get avaialable providers by browser compatability
- [ ] UI in vanilla JavaScript
- [ ] React adapter
- [ ] Angular adapter
- [ ] Vue.js adapter