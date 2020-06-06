import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

/**
 * 共享模块
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
  ]
})
export class ShareModule {
}
