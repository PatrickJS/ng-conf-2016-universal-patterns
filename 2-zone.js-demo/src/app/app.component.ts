import {Component, Directive, ElementRef, Renderer} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';


@Directive({
  selector: '[x-large]'
})
export class XLarge {
  constructor(element: ElementRef, renderer: Renderer) {
    // we must interact with the dom through Renderer for webworker/server to see the changes
    renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
  }
}


@Directive({
  selector: '[autofocus]'
})
export class Autofocus {
  constructor(element: ElementRef, renderer: Renderer) {
    renderer.invokeElementMethod(element.nativeElement, 'focus', []);
  }
}


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
    XLarge,
    Autofocus
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
    <div>
      <span x-large>Hello, {{ name }}!</span>
    </div>

    name: <input type="text" [value]="name" (input)="name = $event.target.value" autofocus>
    <pre>{{ data | json }}</pre>

    <main>
      <router-outlet></router-outlet>
    </main>

    <h1>{{ serverMessage }}</h1>

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
  name: string = 'Angular 2';
  data = {};
  serverMessage = '';
  constructor(public http: Http) {

  }
  ngOnInit() {

    setTimeout(() => {
      this.serverMessage =
        'Rendered on the Server';
    }, 10);

    this.http.get('/data.json')
      .subscribe(res => {
        this.data = res.json();
      });

  }

}
