import { UserService } from './../../shared/services/user.service';
import { RepresentationService } from './../../shared/services/representation.service';
import { Representation } from './../../shared/models/representation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-la-tournee',
  templateUrl: './la-tournee.component.html',
  styleUrls: ['./la-tournee.component.scss']
})
export class LaTourneeComponent implements OnInit {

  representations: Representation[];

  constructor(private representationService: RepresentationService, private userService: UserService) { }

  ngOnInit() {
    this.userService.isLogged();
    if (this.userService.currentUser !== undefined) {
      this.representationService.getAll().subscribe((representations) => {
        this.representations = representations;
      });
    } else {
      this.representationService.getRepresentationForVisitor().subscribe((representations) => {
        this.representations = representations;
      });
    }

  }

}

