import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeWiseStudentsComponent } from './college-wise-students.component';

describe('CollegeWiseStudentsComponent', () => {
  let component: CollegeWiseStudentsComponent;
  let fixture: ComponentFixture<CollegeWiseStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeWiseStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeWiseStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
