import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  showErrorMsg = false;
  authDetails = {
    username: 'jack',
    password: 'jack123'
  }
  constructor(private router: Router, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    const auth = this.localStorageService.get('auth')
    if (auth && auth['authenticated']) {
      this.router.navigateByUrl('/feedback-list');
    }
  }

  authenticate(ngFrom) {

    if (this.username === this.authDetails.username && this.password === this.authDetails.password) {
      this.showErrorMsg = false;
      this.localStorageService.set('auth', { username: this.authDetails.username, authenticated: true });
      this.router.navigateByUrl('/feedback-list');
    } else {
      this.password = "";
      this.username = "";
      this.showErrorMsg = true;
      console.log("error");
    }

  }

}
