import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logindata = {};
  constructor(private authservice: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  public userlogin(): void {
    this.authservice.loginUser(this.logindata).subscribe((res) => {
      if (res.status && res.token) {
        localStorage.setItem('jwt-token', res.token);
        sessionStorage.setItem('jwt-token', res.token);
        // this._router.navigate(['/dashboard']);
        this._router.navigate(['/tanents']);
      }
      else {
        this._router.navigate(['/login']);
      }
    }, (error) => {
      console.log(error.message);
    });
  }

}
