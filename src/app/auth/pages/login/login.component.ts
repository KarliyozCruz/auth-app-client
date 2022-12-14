import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../../services/auth-service.service';
import Swal from 'sweetalert2';

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
    const {email, password} = this.miFormulario.value;

    this.authService.login(email, password)
    .subscribe( rsp => {
      console.log(rsp);
      if(rsp === true) {
        this.router.navigate(['/dashboard']);
      }else{
        Swal.fire('Error', (rsp as AuthResponse).msg , 'error');
      }
    });
  }

}
