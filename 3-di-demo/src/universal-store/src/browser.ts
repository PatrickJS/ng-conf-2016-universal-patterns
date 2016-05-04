import {BrowserBackend} from './backend/browser-backend';
import {Store, StoreBackend} from './store';

import {provide} from 'angular2/core';
// Store -> StoreBackend == BrowserBackend
export const BROWSER_STORE_PROVIDERS = [
  BrowserBackend,
  provide(StoreBackend, {useClass: BrowserBackend}),
  Store
];
