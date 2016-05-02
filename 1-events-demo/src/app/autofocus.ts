import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
  selector: '[autofocus]'
})
export class Autofocus {
  constructor(element: ElementRef, renderer: Renderer) {
    renderer.invokeElementMethod(element.nativeElement, 'focus', []);
  }
}
