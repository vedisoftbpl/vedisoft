import { Component, OnInit } from '@angular/core';
import { RouterGuardService } from 'src/app/service/router-guard.service';
import { GstService } from 'src/app/service/data/gst.service';
import 'chartjs-plugin-labels';

@Component({
  selector: 'app-gst-chart',
  templateUrl: './gst-chart.component.html',
  styleUrls: ['./gst-chart.component.css']
})
export class GstChartComponent implements OnInit {

  constructor(private routeGuard: RouterGuardService, private gstService: GstService) { }

  ngOnInit() {
  }

  isEnabled: boolean = false
  fromDate: Date = new Date()
  toDate: Date = new Date()
  gst: any
  dates: Date[]

  
 

  public chartType: string = 'pie';

  public chartDatasets: Array<any> = [
    { data: [300, 50, 100, 40, 120], label: 'GST' }
  ];

  public chartLabels: Array<any> = ['CGST', 'SGST']

  public chartColors: Array<any>

  public chartOptions: any = {
    responsive: true,
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  getGST() {
    this.dates = [this.fromDate, this.toDate]
    this.gstService.getGST(this.dates).subscribe(
      response => {
        this.gst = response
        this.chartDatasets = [
          { data: [response[0], response[1]], label: 'GST' }
        ];
        this.chartLabels = ['CGST', 'SGST']
      }
    )
    this.isEnabled = true
  }
}
