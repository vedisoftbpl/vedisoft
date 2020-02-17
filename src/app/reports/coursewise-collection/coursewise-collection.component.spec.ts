import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursewiseCollectionComponent } from './coursewise-collection.component';

describe('CoursewiseCollectionComponent', () => {
  let component: CoursewiseCollectionComponent;
  let fixture: ComponentFixture<CoursewiseCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursewiseCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursewiseCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
