import {Directive, ElementRef, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[CapitalizedInput]'
})
export class CapitalizedInputDirective {
  @HostBinding('value') value = '';

  constructor() {
  }

  @HostListener('keyup', ['$event.target.value'])
  onKeyup(value): void {
    console.log('Host Element Keyup', value);
    this.value = value.charAt(0).toUpperCase() + value.slice(1);
    
  }
}
