/**
 * @author zhaoyunxing92
 * @email 2385585770@qq.com
 * @date: 2020-06-06 17:55
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from '../pages/login/login.component';
import {NotFountComponent} from '../pages/not-fount/not-fount.component';

/**
 * 路由文件
 */
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: NotFountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
