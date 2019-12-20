import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loginUserName;

  constructor(public authserve:AuthService) { }

  ngOnInit() {
    
  }

}
