import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { StudentFeeReceiptDetails } from 'src/app/queries/print-receipt/print-receipt.component';
export class DayBookDetail {
  constructor(public id: number, public student: String, public regId, public courseName: String, public batchCode: String, public amount: number, public mode: String, public receivedBy: String) {
    //receivedBy==personId==personname
  }
}

@Component({
  selector: 'app-daybook',
  templateUrl: './daybook.component.html',
  styleUrls: ['./daybook.component.css']
})
export class DaybookComponent implements OnInit {

  currentDate: Date
  isEnabled: boolean = true;
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, { static: false })
  dataTableElement: DataTableDirective
  dtOptions: DataTables.Settings = {}

  daybookDetailList: DayBookDetail[]
  daybook: DayBookDetail

  constructor() { }
  studentDetails: StudentFeeReceiptDetails;

  ngOnInit() {
    this.currentDate = new Date();
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   lengthMenu:[5,10,15,20]
    // };
    this.createData();
  }

  createData() {
    this.daybookDetailList = [new DayBookDetail(1, "Aashray Jain", 12345, "Java", "evening", 3000, "cash", "Rohit sir"),
    new DayBookDetail(1, "Aman BAlani", 12349, "Pyhotn", "morning", 5000, "netBanking", "Rohit sir")]
  }

  showDayBook(date:Date) {
    console.log("Data Table is called" + date);
    if (date) {
      this.isEnabled = true
      this.createData();
      this.dtOptions = {
        pagingType: 'full_numbers',
        lengthMenu: [5, 10, 15, 20]
      };
    }

  }

}
