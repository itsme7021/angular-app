import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = "";

  constructor(private http: HttpClient) {}

  login() {
    this.http.post('/api/login', { username: this.username, password: this.password }).subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error);
    });
  }
}