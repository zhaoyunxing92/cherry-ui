import {NgModule} from '@angular/core';
import {ShareModule} from '../share/share.module';
import {NotFountComponent} from './not-fount/not-fount.component';
import {LoginComponent} from './login/login.component';
import {IndexComponent} from './index/index.component';

/**
 * 主要管理页面的模块
 */
@NgModule({
  declarations: [LoginComponent, NotFountComponent, IndexComponent],
  imports: [ShareModule],
})
export class PagesModule {
}
