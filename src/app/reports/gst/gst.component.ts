import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

export class GstDetailList{
  constructor(public id:number,public fromDate:Date, public amount:number,public sgst:number,public cgst:number){

  }
}

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

  gstDetailList:GstDetailList[]
  isEnabled:boolean = true
  fromDate:Date
  toDate:Date

  constructor() { }

  ngOnInit() {
    this.gstDetailList = [new GstDetailList(1,new Date(),120000,3,3),new GstDetailList(2,new Date(),1000000,3,3),new GstDetailList(3,new Date(),220000,3,3)]
    this.fromDate =  new Date()
    this.toDate =  new Date()
  }


  public activeDataTable(date1,date2){
    console.log(date1 + date2)
    this.isEnabled = true
    if(date1 == null && date2 == null){
      this.isEnabled = false
    }
    else{
      this.dtOptions = {
        pagingType: 'full_numbers',
        lengthMenu:[5,10,15,20],
      };
    }
    
  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe()
  }

}
