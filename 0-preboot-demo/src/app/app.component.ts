import {FORM_DIRECTIVES} from 'angular2/common';
import {Component, Directive, ElementRef, Renderer} from 'angular2/core';


@Directive({
  selector: '[autofocus]'
})
export class Autofocus {
  constructor(element: ElementRef, renderer: Renderer) {
    renderer.invokeElementMethod(element.nativeElement, 'focus', []);
  }
}


@Component({
  selector: 'app',
  directives: [
    ...FORM_DIRECTIVES,
    Autofocus
  ],
  template: `
  <div>
    <h1>Preboot</h1>

    <form (ngSubmit)="onSubmit()">
      <label>
        name:
        <input type="text" [(ngModel)]="data" autofocus>
      </label>
    </form>
    
    <pre>this.data = {{ data | json }}</pre>
    <pre>this.appState = {{ appState | json }}</pre>
  </div>
  `
})
export class App {
  data = 'ng-conf';
  appState = {
    data: ''
  };

  onSubmit() {
    this.appState.data = this.data;
    this.data = '';
  }

}
