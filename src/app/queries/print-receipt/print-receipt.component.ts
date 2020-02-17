import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { isEmpty } from 'rxjs/operators';

export class StudentFeeReceiptDetails{
  constructor(
    public id:number, public course:String[],public batch:String, public fees:number ,public installments:number[]
  ){}
}

@Component({
  selector: 'app-print-receipt',
  templateUrl: './print-receipt.component.html',
  styleUrls: ['./print-receipt.component.css']
})
export class PrintReceiptComponent implements OnInit,OnDestroy {

  dtTrigger:Subject<any> = new Subject();
  @ViewChild(DataTableDirective,{static:false})
  dataTableElement:DataTableDirective
  dtOptions:DataTables.Settings = {}
  private studentDetails : StudentFeeReceiptDetails[] ;
  student: StudentFeeReceiptDetails;
  isEnabled:boolean =false

  studentName:string

  constructor() { }

  ngOnInit() {
    this.studentDetails = [new StudentFeeReceiptDetails(1,["Core java"],"Morning",5000.00,[2000,3000]),
    new StudentFeeReceiptDetails(2,["Adv JAVA"],"Evening",6000.00,[2000,4000])      
  ];
  }

  public showStudentList(name){
    this.studentName = name;
    this.isEnabled = true
    if(name == null){
      this.isEnabled = false
    }
    else{
      this.dataTableActive()
    }
  }

  public dataTableActive(){
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu:[5,10,15,20],
      language:{
        search:"Search Student Name"
      }
    };
  }

  public printReceipt(id){
    console.log("Receipt is printing")
  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }

}
