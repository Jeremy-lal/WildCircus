import { Representation } from './../../shared/models/representation';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-representation',
  templateUrl: './representation.component.html',
  styleUrls: ['./representation.component.scss']
})
export class RepresentationComponent implements OnInit {

  @Input() representation: Representation;

  constructor() { }

  ngOnInit() {
  }

}
