import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStrong]'
})
export class StrongDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'black';
    el.nativeElement.style.fontWeight = 'bold';
  }

}
