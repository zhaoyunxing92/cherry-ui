import {Component} from '@angular/core';
import {ThemeVariables, lyl, StyleRenderer, WithStyles} from '@alyle/ui';

const styles = (theme: ThemeVariables) => ({
  $global: lyl`{
    body {
      background-color: ${theme.background.default}
      color: ${theme.text.default}
      font-family: ${theme.typography.fontFamily}
      margin: 0
      direction: ${theme.direction}
    }
  }`,
  root: lyl`{
    display: block
  }`
});

/**
 * 项目入口
 */
@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>`,
  providers: [StyleRenderer],
})
export class AppComponent implements WithStyles {
  readonly classes = this.sRenderer.renderSheet(styles, true);

  constructor(readonly sRenderer: StyleRenderer) {
  }
}
