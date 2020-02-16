import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultywiseCollectionComponent } from './facultywise-collection.component';

describe('FacultywiseCollectionComponent', () => {
  let component: FacultywiseCollectionComponent;
  let fixture: ComponentFixture<FacultywiseCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultywiseCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultywiseCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
