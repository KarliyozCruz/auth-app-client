import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent {

  get usuario() {
    return this.authService.usuario;
  }

  constructor(private router: Router,
              private authService: AuthServiceService) { }

  logout(): void {
    this.router.navigate(['/auth/login']);
  }

}
