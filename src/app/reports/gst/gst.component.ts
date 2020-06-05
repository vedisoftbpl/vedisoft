import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject, from } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { GstService } from 'src/app/service/data/gst.service';
import { RouterGuardService } from 'src/app/service/router-guard.service';



@Component({
  selector: 'app-gst',
  templateUrl: './gst.component.html',
  styleUrls: ['./gst.component.css']
})
export class GstComponent implements OnInit,OnDestroy {

  dtTrigger:Subject<any> = new Subject();
  @ViewChild(DataTableDirective,{static:false})
  dataTableElement:DataTableDirective
  dtOptions:DataTables.Settings = {}

  
  isEnabled:boolean = true
  fromDate:Date
  toDate:Date
  tgst: Number;
  sgst: any = null;
  cgst: any = null;
  
  dates: Date[]
  

  constructor(private gstService: GstService, private routeGuard: RouterGuardService) { }

  ngOnInit() {
    this.fromDate =  new Date()
    this.toDate =  new Date()
  }


  // public activeDataTable(date1,date2){
  //   console.log(date1 + date2)
  //   this.isEnabled = true
  //   if(date1 == null && date2 == null){
  //     this.isEnabled = false
  //   }
  //   else{
  //     this.dtOptions = {
  //       pagingType: 'full_numbers',
  //       search: { search: this.fromDate + "-" + this.toDate},
  //       lengthMenu:[5,10,15,20],
  //     };
  //   }
    
  // }

  getGST() {
    console.log(this.fromDate, this.toDate)
     this.dates = [this.fromDate, this.toDate]
    this.gstService.getGST(this.dates).subscribe(
      response => {
        // this.cgst = response;
        // this.sgst = response;
        // this.tgst = 2 * Number.parseFloat(response.toString())
        // console.log(response)
        this.sgst = Number.parseFloat(response[1].toString());
        this.cgst = Number.parseFloat(response[0].toString());
        this.tgst = this.sgst + this.cgst;
      }
    )
    
  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe()
  }

}
