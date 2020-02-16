import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionwiseCollectionComponent } from './sessionwise-collection.component';

describe('SessionwiseCollectionComponent', () => {
  let component: SessionwiseCollectionComponent;
  let fixture: ComponentFixture<SessionwiseCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionwiseCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionwiseCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
