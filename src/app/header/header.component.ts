import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  register(event: Event){
    event.preventDefault();
    // console.log(event.target["value"]);
    this._router.navigate(['/'+event.target["value"]]);
  }

  login(event: Event){
    event.preventDefault();
    this._router.navigate(['/'+event.target["value"]]);
  }

  logOut(event: Event){
    event.preventDefault();
    this._router.navigate(['/'+event.target["value"]]);
  }

}
