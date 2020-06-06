import {NgModule} from '@angular/core';
import {ShareModule} from '../share/share.module';
import {LoginComponent} from './login/login.component';

/**
 * 主要管理页面的模块
 */
@NgModule({
  declarations: [LoginComponent],
  imports: [
    ShareModule
  ],
  exports: [
    LoginComponent
  ]
})
export class PagesModule {
}
