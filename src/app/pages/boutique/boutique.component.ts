import { UserService } from 'src/app/shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.scss']
})
export class BoutiqueComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.isLogged();
  }

}
