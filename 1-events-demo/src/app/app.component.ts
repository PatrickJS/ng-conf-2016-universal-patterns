import {NgFor} from 'angular2/common';
import {Component} from 'angular2/core';
import {Autofocus} from './autofocus';

const IGNORE_KEY_CODE = [16, 17, 91];

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
    let keyCode = event.keyCode;

    if (IGNORE_KEY_CODE.indexOf(keyCode) < 0) {
      this.keys.push(String.fromCharCode(keyCode));
    }
  }
}
