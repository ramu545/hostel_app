import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private _router: Router
  ) {}

  loginForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.authservice.loginUser(this.loginForm.value).subscribe(res => {
      if (res.status && res.token) {
        localStorage.setItem("jwt-token", res.token);
        // this._router.navigate(['/dashboard']);
        this._router.navigate(["/tanents"]);
      } else {
        this._router.navigate(["/login"]);
      }
    });
  }
}
