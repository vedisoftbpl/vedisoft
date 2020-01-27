import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertiRequestComponent } from './certi-request.component';

describe('CertiRequestComponent', () => {
  let component: CertiRequestComponent;
  let fixture: ComponentFixture<CertiRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertiRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertiRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
