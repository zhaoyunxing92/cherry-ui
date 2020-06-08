/**
 * @author zhaoyunxing92
 * @email 2385585770@qq.com
 * @date: 2020-06-06 17:55
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from '../pages/login/login.component';
import {NotFountComponent} from '../pages/not-fount/not-fount.component';
import {IndexComponent} from '../pages/index/index.component';

/**
 * 路由文件
 */
const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: {title: '首页'}
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {title: '登陆'}
  },
  {
    path: '**',
    component: NotFountComponent,
    data: {title: '404'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
