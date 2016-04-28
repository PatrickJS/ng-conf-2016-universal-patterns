import 'angular2-universal/polyfills';

import {bootstrap, enableProdMode} from 'angular2-universal';

import {App} from './app/app.component';

enableProdMode();



setTimeout(() => {

  bootstrap(App)
    .then(setClientRenderedEl);


}, 2000);


function setClientRenderedEl() {
  document.querySelector('#serverDiv').innerHTML = 'ClientRendered';
}
