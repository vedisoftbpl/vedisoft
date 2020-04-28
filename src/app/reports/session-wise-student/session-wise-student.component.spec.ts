import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionWiseStudentComponent } from './session-wise-student.component';

describe('SessionWiseStudentComponent', () => {
  let component: SessionWiseStudentComponent;
  let fixture: ComponentFixture<SessionWiseStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionWiseStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionWiseStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
