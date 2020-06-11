import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchwiseCollectionComponent } from './batchwise-collection.component';

describe('BatchwiseCollectionComponent', () => {
  let component: BatchwiseCollectionComponent;
  let fixture: ComponentFixture<BatchwiseCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchwiseCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchwiseCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
