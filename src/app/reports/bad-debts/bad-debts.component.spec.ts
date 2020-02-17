import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadDebtsComponent } from './bad-debts.component';

describe('BadDebtsComponent', () => {
  let component: BadDebtsComponent;
  let fixture: ComponentFixture<BadDebtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadDebtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadDebtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
