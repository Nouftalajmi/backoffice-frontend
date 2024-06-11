import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: String = '';
  password: String = '';
  response: any;

  constructor(private router: Router, private http: HttpClient) {}

  goDash() {
    const loginData = {
      username: this.username,
      password: this.password,
    };
    this.http
      .post('http://localhost:8000/auth/login', loginData)
      .subscribe((response: any) => {
        console.log(response);
        this.response = response;
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
      });
  }
}
