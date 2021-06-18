import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appName]'
})
export class NameDirective {
key;
  constructor(private elementRef:ElementRef) { }
  @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    this.key = event.keyCode;
    console.log(event.returnValue);
    if (this.key <= 64 || (this.key >=91 && this.key <=96) || this.key >= 123) {
      event.preventDefault();
    }
  }

}
