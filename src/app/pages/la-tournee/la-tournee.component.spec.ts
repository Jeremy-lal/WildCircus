import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaTourneeComponent } from './la-tournee.component';

describe('LaTourneeComponent', () => {
  let component: LaTourneeComponent;
  let fixture: ComponentFixture<LaTourneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaTourneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaTourneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
