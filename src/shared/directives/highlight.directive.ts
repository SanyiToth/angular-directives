import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[HighLight]'
})
export class HighlightDirective implements AfterViewInit {

  @Input() highLight: string;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.el.nativeElement.style.backgroundColor = this.highLight;
  }


}
