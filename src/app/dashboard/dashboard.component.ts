import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public flooredata=[];
  constructor(public _router: Router, public _flooredataSending : AuthService) { }

  ngOnInit() {
  }

  addingFlooreCount(flooresNumber){
    this.flooredata=[];
    for (let i = 0; i < flooresNumber; i++) {
      this.flooredata.push({ floorenumber:i+1,flooreIndex:i })
    }
    let floorevalidate = this.flooredata.length == 0 ? alert("Add Floore Number") : this.flooredata ;
        this._flooredataSending.postFlooreData(floorevalidate).subscribe(
           data => console.log(data)
        )
  }


}
