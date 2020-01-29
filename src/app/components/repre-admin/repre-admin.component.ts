import { RepresentationFormComponent } from './../representation-form/representation-form.component';
import { RepresentationService } from './../../shared/services/representation.service';
import { Component, OnInit, Input } from '@angular/core';
import { Representation } from 'src/app/shared/models/representation';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-repre-admin',
  templateUrl: './repre-admin.component.html',
  styleUrls: ['./repre-admin.component.scss']
})
export class RepreAdminComponent implements OnInit {

  @Input() representation: Representation;

  constructor(private representationService: RepresentationService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  deleteRepresentation(id: number) {
    this.representationService.deleteRepresentation(id).subscribe();
  }

  updateRepresentation(user) {
    this.representationService.toUpdate = true;
    const dialogRef = this.dialog.open(RepresentationFormComponent, {
      width: '550px',
      data: user
    });

  }
}
