import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';


import {Store} from '../universal-store/src/store';


@Component({
  selector: 'home',
  template: `
  Home
  `
})
export class Home {
}

@Component({
  selector: 'about',
  template: `
  About
  `
})
export class About {
}


@Component({
  selector: 'app',
  directives: [
    ...ROUTER_DIRECTIVES,
    ...FORM_DIRECTIVES
  ],
  styles: [`
    .router-link-active {
      background-color: lightgray;
    }
  `],
  template: `
  <div>
    <nav>
      <a [routerLink]=" ['./Home'] ">Home</a>
      <a [routerLink]=" ['./About'] ">About</a>
    </nav>

    <form (ngSubmit)="onSubmit()">
      <label>
        name:
        <input type="text" [(ngModel)]="data" autofocus>
      </label>
    </form>


    <main>
      <router-outlet></router-outlet>
    </main>

    <pre>this.data = {{ data | json }}</pre>
    <pre>this.store.get('data') = {{ store.get('data') | json }}</pre>

  </div>
  `
})
@RouteConfig([
  { path: '/', component: Home, name: 'Home', useAsDefault: true },
  { path: '/home', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/**', redirectTo: ['Home'] }
])
export class App {
  data = 'ng-conf';
  // doesn't work on server
  // store = {
  //   get: (prop) => {
  //     return localStorage.getItem(prop);
  //   },
  //   set(prop, value) {
  //     return localStorage.setItem(prop, value);
  //   }
  // };
  constructor(
    public store: Store
  ) {

  }

  onSubmit() {
    this.store.set('data', this.data);
    this.data = '';
  }


}












@Component({
  selector: 'app',
  template: 'Loading...'
})
export class Noop {}
