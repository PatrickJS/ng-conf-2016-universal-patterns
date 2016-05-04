import 'angular2-universal/polyfills';

import {
  bootstrap,
  enableProdMode
} from 'angular2-universal';

import {App} from './app/app.component';

enableProdMode();

function main() {
  // preboot: true in server.ts
  bootstrap(App)
    .then(setClientRenderedEl);

}

// setTimeout(main, 4000);





















(<any>window).runBootstrap = function () {
  bootstrap(App)
    .then(setClientRenderedEl)
    .then(compRef => {
      (<any>window).runBootstrap = () => {};
      return compRef;
    });
};

function setClientRenderedEl(componentRef) {
  document.querySelector('.server').innerHTML = '';
  document.querySelector('.client').innerHTML = 'Client Rendered';
  document.querySelector('.replayBtn').setAttribute('style', 'background-color:#36434b;');

  var bootstrapBtn = document.querySelector('.bootstrapBtn');
  bootstrapBtn.innerHTML = 'Bootstrapped';
  bootstrapBtn.setAttribute('style', 'color:rgba(26,138,182,1);background-color:#fff');
  return componentRef;
}

var origReplayEvents = (<any>window).replayEvents;

(<any>window).replayEvents = function () {
  origReplayEvents();
  var replayBtn = document.querySelector('.replayBtn');
  replayBtn.innerHTML = 'Replayed';
  replayBtn.setAttribute('style', 'color:rgba(26,138,182,1);background-color:#fff');
};
