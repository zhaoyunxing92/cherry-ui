import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LyButtonModule} from '@alyle/ui/button';

/**
 * 共享模块,主要导入第三方ui库
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    LyButtonModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    LyButtonModule,
  ]
})
export class ShareModule {
}
