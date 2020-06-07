import {NgModule} from '@angular/core';
import {HammerModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// alyle-ui
import {LyButtonModule} from '@alyle/ui/button';
import {LyFieldModule} from '@alyle/ui/field';
import {LyRadioModule} from '@alyle/ui/radio';
import {LyIconModule} from '@alyle/ui/icon';
import {LyCheckboxModule} from '@alyle/ui/checkbox';
import {LyGridModule} from '@alyle/ui/grid';
import {LyCardModule} from '@alyle/ui/card';

/**
 * 共享模块,主要导入第三方ui库
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LyButtonModule,
    LyFieldModule,
    LyRadioModule,
    LyIconModule,
    LyCheckboxModule,
    LyGridModule,
    LyCardModule,
    HammerModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LyButtonModule,
    LyFieldModule,
    LyRadioModule,
    LyIconModule,
    LyCheckboxModule,
    LyGridModule,
    LyCardModule,
    HammerModule,
  ]
})
export class ShareModule {
}
