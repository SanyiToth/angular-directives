import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HighlightDirective} from './directives/highlight.directive';
import { HiddendirectiveDirective } from './directives/hiddendirective.directive';


@NgModule({
  declarations: [
    HighlightDirective,
    HiddendirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    HiddendirectiveDirective
  ]
})
export class SharedModule {
}
