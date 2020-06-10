import {NgModule} from '@angular/core';
import {ShareModule} from '../share/share.module';
import {NotFountComponent} from './not-fount/not-fount.component';
import {LoginComponent} from './login/login.component';
import {IndexComponent} from './index/index.component';
import {LyToolbarModule} from '@alyle/ui/toolbar';
import {LyDrawerModule} from '@alyle/ui/drawer';
import {LyTypographyModule} from '@alyle/ui/typography';
import {LyBadgeModule} from "@alyle/ui/badge";
import {LyListModule} from "@alyle/ui/list";

/**
 * 主要管理页面的模块
 */
@NgModule({
  declarations: [LoginComponent, NotFountComponent, IndexComponent],
  imports: [ShareModule, LyToolbarModule, LyDrawerModule, LyTypographyModule, LyBadgeModule, LyListModule],
})
export class PagesModule {
}
