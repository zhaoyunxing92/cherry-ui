import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  constructor() {
  }

  /** 登陆表单验证 */
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });

  /** 是否显示密码 */
  hidePassword = true;

  /** 登陆 */
  onLogin() {
    console.log(this.loginForm.valid);
    console.warn(this.loginForm.value);
  }
}
