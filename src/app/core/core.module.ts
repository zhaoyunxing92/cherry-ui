import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {ServicesModule} from '../services/services.module';
import {PagesModule} from '../pages/pages.module';
import {ShareModule} from '../share/share.module';
import {AppRoutingModule} from '../router/app-routing.module';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

/**
 * 核心管理模块
 */
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
    PagesModule,
    ShareModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    ShareModule,
    PagesModule,
    AppRoutingModule,
  ]
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('core module has been loaded');
    }
  }
}
