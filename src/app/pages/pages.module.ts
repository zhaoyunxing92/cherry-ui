import {NgModule} from '@angular/core';
import {ShareModule} from '../share/share.module';
import {LoginComponent} from './login/login.component';
import {NotFountComponent} from './not-fount/not-fount.component';

/**
 * 主要管理页面的模块
 */
@NgModule({
  declarations: [LoginComponent, NotFountComponent],
  imports: [ShareModule],
})
export class PagesModule {
}
