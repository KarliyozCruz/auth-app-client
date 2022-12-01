import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthServiceService) { }

  login(): void {
    console.log(this.miFormulario.value);

    const {email, password} = this.miFormulario.value;

    this.authService.login(email, password)
    .subscribe( rsp => {
      console.log(rsp);
    });
    // this.router.navigate(['/dashboard']);
  }

}