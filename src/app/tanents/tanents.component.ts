import { Component, OnInit } from '@angular/core';
import { TanentsService } from '../services/tanents.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tanents',
  templateUrl: './tanents.component.html',
  styleUrls: ['./tanents.component.css']
})
export class TanentsComponent implements OnInit {
  public tanents:any[]=[];

  constructor(private _tanentsService:TanentsService, private _router:Router) { }

  ngOnInit() {
    this._tanentsService.findTanents().subscribe((res) => {
      console.log(res);
      this.tanents = res;
      // this._router.navigate(['/tanents/addnew']);
    });
  }

  addTanent(){
    // event.preventDefault();
    console.log("adding tanent");
    this._router.navigate(['/addnew']);
  }

}
