import 'angular2-universal/polyfills';

import {
  bootstrap,
  enableProdMode,
  BROWSER_ROUTER_PROVIDERS,
  BROWSER_HTTP_PROVIDERS
} from 'angular2-universal';

import {App} from './app/app.component';

enableProdMode();

function main() {
  return bootstrap(App, [
    ...BROWSER_ROUTER_PROVIDERS,
    ...BROWSER_HTTP_PROVIDERS
  ])
  .then(setClientRenderedEl);
}

setTimeout(() => main(), 2000);











function setClientRenderedEl(componentRef) {
  document.querySelector('.server').innerHTML = '';
  document.querySelector('.client').innerHTML = 'Client Rendered';
  document.querySelector('.replayBtn').setAttribute('style', 'background-color:#36434b;');

  return componentRef;
}
