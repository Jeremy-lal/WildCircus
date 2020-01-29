import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReservationPageComponent } from './user-reservation-page.component';

describe('UserReservationPageComponent', () => {
  let component: UserReservationPageComponent;
  let fixture: ComponentFixture<UserReservationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReservationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReservationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
