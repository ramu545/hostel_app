import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TanentsService {

  private baseUrl = 'http://localhost:3030';
  private tanentsurl = this.baseUrl+'/tanents';

  // private dummyUrl = 'http://dummy.restapiexample.com/api/v1/employees';
  constructor(private _http:HttpClient, private _router:Router) { }

  public findTanents():Observable<any>{
    return this._http.get<any>(this.tanentsurl);
    // return this._http.get<any>(this.dummyUrl);
  }

}
