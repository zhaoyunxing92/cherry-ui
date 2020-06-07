import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerModule} from '@angular/platform-browser';
import {ServicesModule} from '../services/services.module';
import {PagesModule} from '../pages/pages.module';
import {ShareModule} from '../share/share.module';
import {AppRoutingModule} from '../router/app-routing.module';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {LY_THEME, LY_THEME_NAME, LyHammerGestureConfig, LyTheme2, StyleRenderer} from '@alyle/ui';
import {MinimaDark, MinimaLight} from '@alyle/ui/themes/minima';

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
    HammerModule,
    ServicesModule,
    PagesModule,
    ShareModule,
    AppRoutingModule
  ],
  providers: [
    [LyTheme2],
    [StyleRenderer],
    {provide: LY_THEME_NAME, useValue: 'minima-light'},
    {provide: LY_THEME, useClass: MinimaLight, multi: true}, // name: `minima-light`
    {provide: LY_THEME, useClass: MinimaDark, multi: true}, // name: `minima-dark`
    {provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig}
  ],
  exports: [AppRoutingModule]
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('core module has been loaded');
    }
  }
}
