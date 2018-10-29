declare global  {
    interface Window {
        ethereum: any;
        web3: any;
        Portis: any;
    }
}
import { ProviderOptions } from './types';
export declare function initDappBrowserProvider(): any;
export declare function initPortisProvider(options: ProviderOptions): any;
