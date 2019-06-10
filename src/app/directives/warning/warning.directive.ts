import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appWarning]'
})
export class WarningDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.warning('red', 'pointer');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.warning(null, null);
  }

  constructor(private el: ElementRef) {
  }

  private warning(color: string, cursore: string) {
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.cursor = cursore;
  }

}
