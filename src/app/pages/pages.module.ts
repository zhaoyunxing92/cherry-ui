import {NgModule} from '@angular/core';
import {ShareModule} from '../share/share.module';
import {LoginComponent} from './login/login.component';
import {NotFountComponent} from './not-fount/not-fount.component';
import {LyButtonModule} from '@alyle/ui/button';
import {HammerModule} from '@angular/platform-browser';

/**
 * 主要管理页面的模块
 */
@NgModule({
  declarations: [LoginComponent, NotFountComponent],
  imports: [
    LyButtonModule,
    ShareModule,
    HammerModule
  ],
  exports: []
})
export class PagesModule {
}
