import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appHiddendirective]'
})
export class HiddendirectiveDirective implements AfterViewInit {

  @Input() appHiddendirective: boolean;

  constructor(private elRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    if (this.appHiddendirective) {
      this.elRef.nativeElement.style.display = 'none';
    }
  }

}
