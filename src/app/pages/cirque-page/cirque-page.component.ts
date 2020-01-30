import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-cirque-page',
  templateUrl: './cirque-page.component.html',
  styleUrls: ['./cirque-page.component.scss']
})
export class CirquePageComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.isLogged();
  }

}
