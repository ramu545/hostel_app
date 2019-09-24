import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerdata = {};
  constructor(private authservice:AuthService, private _router:Router) { }

  ngOnInit() {
  }

  userregistration():void{
    this.authservice.registerUser(this.registerdata).subscribe((res)=>{
      if(res.status && res.token){
        localStorage.setItem('jwt-token', res.token);
        sessionStorage.setItem('jwt-token', res.token);
        this._router.navigate(['/dashboard']);
      }
      else{
        this._router.navigate(['/register']);
      }
    },(error)=>{
      console.log(error.message);
    });
  }

}
