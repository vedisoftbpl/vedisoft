import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchwiseCollectionComponent } from './branchwise-collection.component';

describe('BranchwiseCollectionComponent', () => {
  let component: BranchwiseCollectionComponent;
  let fixture: ComponentFixture<BranchwiseCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchwiseCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchwiseCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
