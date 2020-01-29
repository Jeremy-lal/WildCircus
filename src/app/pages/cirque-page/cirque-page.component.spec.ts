import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirquePageComponent } from './cirque-page.component';

describe('CirquePageComponent', () => {
  let component: CirquePageComponent;
  let fixture: ComponentFixture<CirquePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirquePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirquePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
