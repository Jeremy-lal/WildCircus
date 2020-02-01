import { User } from './../../shared/models/user';
import { UserService } from './../../shared/services/user.service';
import { RepresentationService } from './../../shared/services/representation.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Representation } from '../../shared/models/representation';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  representation: Representation;
  currentUser: User;

  constructor(private representationService: RepresentationService, private userService: UserService,
              @Inject(MAT_DIALOG_DATA) public representationData: Representation, public dialogRef: MatDialogRef<ReservationComponent>) { }

  ngOnInit() {
    this.representation = this.representationData;
    this.currentUser = this.userService.currentUser;
  }


  reserver() {
    if (this.representation.nbreserved < this.representation.capacity) {
      this.representation.nbreserved++;
      this.representationService.updateRepresentation(this.representation).subscribe();

      this.userService.currentUser.representations.push(this.representation);
      this.userService.updateUserRepresentation(this.currentUser.id, this.representation.id).subscribe(() => {
      });

    } else {
      alert('Toutes les places sont déjà prise. Vous pouvez réserver un autre jour !');
    }
    this.dialogRef.close();
  }

}
