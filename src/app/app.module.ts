import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';

import {HAMMER_GESTURE_CONFIG, HammerModule} from '@angular/platform-browser';
import {LyTheme2, StyleRenderer, LY_THEME, LY_THEME_NAME, LyHammerGestureConfig} from '@alyle/ui';

import {MinimaLight, MinimaDark} from '@alyle/ui/themes/minima';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LyButtonModule} from '@alyle/ui/button';
import {LyToolbarModule} from '@alyle/ui/toolbar';
import {LyImageCropperModule} from '@alyle/ui/image-cropper';

// @ts-ignore
@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserAnimationsModule,
    LyButtonModule,
    LyToolbarModule,
    LyImageCropperModule,
    HammerModule
  ],
  bootstrap: [AppComponent],
  providers: [
    [LyTheme2],
    [StyleRenderer],
    // Theme that will be applied to this module
    {provide: LY_THEME_NAME, useValue: 'minima-light'},
    {provide: LY_THEME, useClass: MinimaLight, multi: true}, // name: `minima-light`
    {provide: LY_THEME, useClass: MinimaDark, multi: true}, // name: `minima-dark`
    // Gestures
    {provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig}
  ]
})
export class AppModule {
}
