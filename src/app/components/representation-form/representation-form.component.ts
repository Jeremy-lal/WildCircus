import { Representation } from 'src/app/shared/models/representation';
import { RepresentationService } from './../../shared/services/representation.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-representation-form',
  templateUrl: './representation-form.component.html',
  styleUrls: ['./representation-form.component.scss']
})
export class RepresentationFormComponent implements OnInit {

  representationForm: FormGroup;

  constructor(private fb: FormBuilder, public representationService: RepresentationService,
              public dialogRef: MatDialogRef<RepresentationFormComponent>,
              @Inject(MAT_DIALOG_DATA) public representationToUpdate: Representation) {

    this.representationForm = this.fb.group({
      date: [''], hour: [''], adress: [''], city: [''], capacity: [''], price: [''], forMember: [parseInt('')]
    });

  }

  ngOnInit() {
    if (this.representationService.toUpdate === true) {
      this.representationForm.controls.date.setValue(this.representationToUpdate.date);
      this.representationForm.controls.hour.setValue(this.representationToUpdate.hour);
      this.representationForm.controls.adress.setValue(this.representationToUpdate.adress);
      this.representationForm.controls.city.setValue(this.representationToUpdate.city);
      this.representationForm.controls.capacity.setValue(this.representationToUpdate.capacity);
      this.representationForm.controls.price.setValue(this.representationToUpdate.price);
      this.representationForm.controls.forMember.setValue(this.representationToUpdate.forMember);
    }
  }

  sendRepresentation(): void {
    const representationToPost = this.representationForm.value;
    this.representationService.createRepresentation(representationToPost).subscribe((eventPosted) => {
      console.log(eventPosted);
    });
    this.dialogRef.close();
  }

  updateRepresentation(): void {
    const representationToUpdate: Representation = this.representationForm.value;
    representationToUpdate.id = this.representationToUpdate.id;

    this.representationService.updateRepresentation(representationToUpdate).subscribe((eventPosted) => {
      console.log(eventPosted);
    });
    this.dialogRef.close();
    this.representationService.toUpdate = false;
  }

}
