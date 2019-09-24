import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private _url="http://localhost:4080/api/"
  constructor(private http:HttpClient,private _router:Router) { }

  signUp(data){
   return this.http.post<any>(this._url+"register",data)
  }
login(data){
  return this.http.post<any>(this._url+"login",data)
}

logedIn(){
  return !!localStorage.getItem('token');
}

logedOutUser(){
  this.removeStorage();
  this._router.navigate(['/home']);
  return localStorage.removeItem('token');
  }
removeStorage(){
 localStorage.removeItem('token');
 sessionStorage.removeItem('id');
 sessionStorage.removeItem('user')
} 
getRole(){
  return localStorage.getItem('role');
}

getToken(){
  return localStorage.getItem('token');
}

}
