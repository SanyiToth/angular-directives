import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {

  @Input() appHighlight: string;

  constructor(private el: ElementRef) {
    /*  el.nativeElement.style.backgroundColor = 'red';*/
  }

  ngAfterViewInit(): void {
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }


}
