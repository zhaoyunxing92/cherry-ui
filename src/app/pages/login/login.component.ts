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

  profileForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(16)
    ]),
    bio: new FormControl('', [
      Validators.required,
      Validators.maxLength(256)
    ]),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required, Validators.email
    ]),
    option: new FormControl('', Validators.required)
  });
  hide = true;
  appearance = new FormControl();
  isReadonly = new FormControl();
  isDisabled = new FormControl();
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
