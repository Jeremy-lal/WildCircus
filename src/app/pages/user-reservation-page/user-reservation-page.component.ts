import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-reservation-page',
  templateUrl: './user-reservation-page.component.html',
  styleUrls: ['./user-reservation-page.component.scss']
})
export class UserReservationPageComponent implements OnInit {

  currentUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.isLogged();
    this.currentUser = this.userService.currentUser;
    console.log(this.currentUser);
  }

}
