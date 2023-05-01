import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAcceptTourGuidesComponent } from './admin-accept-tour-guides.component';

describe('AdminAcceptTourGuidesComponent', () => {
  let component: AdminAcceptTourGuidesComponent;
  let fixture: ComponentFixture<AdminAcceptTourGuidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAcceptTourGuidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAcceptTourGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
