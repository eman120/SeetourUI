import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formlogin:FormGroup;
  loginStatus = 'Pending';

  constructor(private fb:FormBuilder,
    private authService: AuthService,
    private router: Router) {

      this.formlogin = this.fb.group({
          username: ['',Validators.required],
          password: ['',Validators.required]
      });
  }

  public get usernameValid() : boolean {
    return this.formlogin.controls["username"].valid;
  }

  public get passwordValid() : boolean {
    return this.formlogin.controls["password"].valid;
  }

  login() {
    const val = this.formlogin.value;

    if (this.formlogin.valid) {

      this.loginStatus = 'Posted'

      this.authService.login(val.username, val.password)
        .subscribe({
          next: () => {
            this.router.navigateByUrl('/');
          },
          error: () => {
            this.loginStatus = 'Failed';
          }
        });
    }
  }
}
