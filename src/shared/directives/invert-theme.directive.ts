import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
import invert, {RGB, RgbArray, HexColor, BlackWhite} from 'invert-color';

@Directive({
  selector: '[appInvertTheme]'
})
export class InvertThemeDirective implements AfterViewInit {

  @Input() tcolor: string;
  @Input() tbackground: string;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.tbackground = this.tbackground || 'white';
    this.tcolor = this.tcolor || 'white';
    this.el.nativeElement.style.backgroundColor = invert(this.tbackground);
    this.el.nativeElement.style.color = invert(this.tcolor);
  }
}
