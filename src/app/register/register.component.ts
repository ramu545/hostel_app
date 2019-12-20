import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private authservice:AuthService,
    private _router:Router
  ) { }

  registerForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fname: ["", Validators.required],
      lname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmpassword: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit(): void{
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.authservice.registerUser(this.registerForm.value).subscribe((res)=>{
      if(res.status && res.token){
        sessionStorage.setItem('jwt-token', res.token);
        this._router.navigate(['/dashboard']);
      }
      else{
        this._router.navigate(['/register']);
      }
    });
  }

}
