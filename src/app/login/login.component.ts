import { Component } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user = new User();
  err: number = 0;
  
  constructor(private authService: AuthService, private router: Router) {}

  onLoggedin() {
    this.authService.login(this.user).subscribe({
      next: (data) => {
        let jwToken = data.headers.get('Authorization'); // Get JWT from header
        console.log('JWT Token:', jwToken);  // Log token to check
        
        // Check if the token exists and starts with "Bearer"
        if (jwToken && jwToken.startsWith('Bearer ')) {
          this.authService.saveToken(jwToken);  // Save token to local storage
          this.router.navigate(['/']);
        } else {
          console.error('Token not found or invalid format');  // Log error
          this.err = 1;
        }
      },
      error: (err: any) => {
        this.err = 1;
      },
    });
  }
}
