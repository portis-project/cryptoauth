# cryptoauth
Universal web-based login module for dApps

## The problem:
Right now, every DApp is re-implementing the login flow for users. 
This is a problem for several reasons:
1. Time wasted "re-writing the wheel"
1. Inconsistent UX across DApps for a flow that every DApp must support
1. Best practices are not used everywhere
1. web3 providers might change their behaviour (e.g [EIP-1102](https://eips.ethereum.org/EIPS/eip-1102), meaning best case - each DApp has to re-implement, worst case - bugs everywhere.


## The solution
Let the community maintain a single solution to save DApp developers everywhere the time and the headaches, as well as provide consistent UX, reducing friction for users.

To make sure DApp developers can truly refrain from dealing with implementing user login, cryptoauth would provide a default HTML view (implemented in several platforms - vanilla, angular, react, etc.), but would make sure to decouple it completely from the JavaScript logic, so DApps can easily implement their own views but still make use of cryptoauth.
