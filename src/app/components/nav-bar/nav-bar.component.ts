import { User } from './../../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  currentUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
  }

}
