import {NgFor} from 'angular2/common';
import {Component} from 'angular2/core';
import {Autofocus} from './autofocus';

@Component({
  selector: 'app',
  directives: [NgFor, Autofocus],
  template: `
    <input class="myInput" type="text" (keyup)="showKey($event)" autofocus>
    <div class="keyContainer">
      <div class="keyDisplay" *ngFor="#key of keys">Key pressed: {{key}}</div>
    </div>
  `
})
export class App {
  keys: string[] = [];

  showKey(event) {
    this.keys.push(String.fromCharCode(event.keyCode));
  }
}
