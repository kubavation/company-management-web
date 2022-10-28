import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {AuthenticationService} from "../service/authentication.service";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthenticationRequest} from "../model/authentication-request";
import {SnackbarService} from "../../shared/snackbar/snackbar.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {

  @Output() afterLogin = new EventEmitter<void>();

  constructor(private authService: AuthenticationService,
              private fb: FormBuilder,
              private snackbarService: SnackbarService) { }

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });


  login(): void {
    const authRequest: AuthenticationRequest = {...this.form.value};
    this.authService.authenticate(authRequest)
      .subscribe(res => {
        console.log(res)
        this.afterLogin.next();
      },
        error => this.snackbarService.error('Incorrect username or password.'))
  }

}
