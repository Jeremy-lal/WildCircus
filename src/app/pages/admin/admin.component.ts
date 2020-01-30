import { RepresentationService } from './../../shared/services/representation.service';
import { Representation } from './../../shared/models/representation';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RepresentationFormComponent } from 'src/app/components/representation-form/representation-form.component';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  representations: Representation[];

  constructor(private representationService: RepresentationService, public dialog: MatDialog, private userService: UserService) { }

  ngOnInit() {
    this.userService.isLogged();
    this.representationService.getAll().subscribe((representation) => {
      this.representations = representation;
    });

  }

  createRepresentation() {
    this.representationService.toUpdate = false;
    const dialogRef = this.dialog.open(RepresentationFormComponent, {
      width: '600px',
    });
  }

}
