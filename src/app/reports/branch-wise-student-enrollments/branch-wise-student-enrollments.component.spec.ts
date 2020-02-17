import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchWiseStudentEnrollmentsComponent } from './branch-wise-student-enrollments.component';

describe('BranchWiseStudentEnrollmentsComponent', () => {
  let component: BranchWiseStudentEnrollmentsComponent;
  let fixture: ComponentFixture<BranchWiseStudentEnrollmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchWiseStudentEnrollmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchWiseStudentEnrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
