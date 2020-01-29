import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepreAdminComponent } from './repre-admin.component';

describe('RepreAdminComponent', () => {
  let component: RepreAdminComponent;
  let fixture: ComponentFixture<RepreAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepreAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepreAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
