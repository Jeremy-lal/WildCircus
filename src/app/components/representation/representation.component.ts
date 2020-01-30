import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { ReservationComponent } from './../reservation/reservation.component';
import { Representation } from './../../shared/models/representation';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-representation',
  templateUrl: './representation.component.html',
  styleUrls: ['./representation.component.scss']
})
export class RepresentationComponent implements OnInit {

  @Input() representation: Representation;

  constructor(public dialog: MatDialog, private userService: UserService, private router: Router)  { }

  ngOnInit() {
  }

  reserver(representation) {
    if (this.userService.currentUser !== undefined) {
      const dialogRef = this.dialog.open( ReservationComponent, {
        width: '550px',
        data: representation
      });
    } else {
      this.router.navigateByUrl('signin');
    }

  }

}
