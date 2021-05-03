import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[HunPhoneFormatter]'
})
export class HunPhoneFormatterDirective {
  @HostBinding('value') value = '';

  constructor() {
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event): void {
    this.value = '+36-';
    if (event.key === 'Backspace' && event.target.value.length <= 4) {
      event.preventDefault();
    }
    const phoneNumber = event.target.value;
    if (phoneNumber.length === 12) {
      this.value += `${phoneNumber.slice(4, 6)}-${phoneNumber.slice(6, 9)}-${phoneNumber.slice(9, 13)}`;
    }
  }
}

