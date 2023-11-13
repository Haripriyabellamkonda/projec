// src/app/login/login.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  check() {
    if (this.username === '') {
      alert('Please enter username');
    }
    if (this.password === '') {
      alert('Please enter password');
    }
  }
}
