import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstChartComponent } from './gst-chart.component';

describe('GstChartComponent', () => {
  let component: GstChartComponent;
  let fixture: ComponentFixture<GstChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
