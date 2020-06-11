import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

import {lyl, StyleRenderer, ThemeVariables, WithStyles} from '@alyle/ui';

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
export class AppComponent implements OnInit, WithStyles {
  readonly classes = this.sRenderer.renderSheet(styles, true);

  constructor(readonly sRenderer: StyleRenderer, private router: Router, private title: Title) {
  }

  private titleName = '';

  ngOnInit(): void {
    this.router.events.pipe().subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getTitle(this.router.routerState, this.router.routerState.root);
        this.title.setTitle(this.titleName);
      }
    });
  }

  /**
   * 获取路由上的data
   * param: state
   * param: parent
   */
  getTitle(state, parent): void {
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      this.titleName = parent.snapshot.data.title;
    }
    if (state && parent) {
      this.getTitle(state, state.firstChild(parent));
    }
  }
}
