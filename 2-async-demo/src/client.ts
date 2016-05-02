import 'angular2-universal/polyfills';

import {
  bootstrap,
  enableProdMode,
  BROWSER_ROUTER_PROVIDERS,
  BROWSER_HTTP_PROVIDERS
} from 'angular2-universal';

import {App} from './app/app.component';

enableProdMode();


setTimeout(() => {

  bootstrap(App, [
    ...BROWSER_ROUTER_PROVIDERS,
    ...BROWSER_HTTP_PROVIDERS
  ])
  .then(setClientRenderedEl);

}, 2000);

function setClientRenderedEl() {
  document.querySelector('#serverDiv').innerHTML = 'ClientRendered';
}
