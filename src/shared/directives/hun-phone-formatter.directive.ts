import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[HunPhoneFormatter]'
})
export class HunPhoneFormatterDirective {
  @HostBinding('value') value = '';

  constructor() {
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(newValue): void {
    this.value = '+36-';
    if (newValue.target.value === '+36-' && newValue.key === 'Backspace') {
      newValue.preventDefault();
    }
  }
}
