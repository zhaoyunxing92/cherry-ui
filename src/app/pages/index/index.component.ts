import {Component, OnInit} from '@angular/core';
import {LyTheme2} from '@alyle/ui';

const styles = {
  drawerContainer: {
    height: '270px',
    transform: 'translate3d(0,0,0)'
  },
  drawerContent: {
    padding: '1em'
  },
  icon: {
    margin: '0 8px'
  },
  grow: {
    flexGrow: 1
  }
};
const DEFAULT = '170px over@XSmall';
const MINI = '56px over@XSmall';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  readonly classes = this.theme.addStyleSheet(styles);
  mini = false;
  get width() {
    return this.mini ? MINI : DEFAULT;
  }

  constructor(private theme: LyTheme2) { }

  toggleMini() {
    this.mini = !this.mini;
  }

  ngOnInit(): void {
  }

}
