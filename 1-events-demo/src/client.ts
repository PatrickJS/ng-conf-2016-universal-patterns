import 'angular2-universal/polyfills';

import {bootstrap, enableProdMode} from 'angular2-universal';

import {App} from './app/app.component';

enableProdMode();

(<any>window).runBootstrap = function () {
  bootstrap(App)
    .then(setClientRenderedEl);
};

function setClientRenderedEl() {
  document.querySelector('h1 > b').innerHTML = 'Client Rendered';
}
