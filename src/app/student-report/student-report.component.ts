import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

class Student {
  public constructor(
    public regId:number, public installmentDates: Date[], public name:String, 
    public course:String[], public batchCode:number[], public laddress:String,
    public paddress:String,  public mno: String, public branch: String,
    public branchId: number, public installment: number[]
  ) {}
}

class StudentDetails {
  public constructor(
    public installmentDates: Date[],public course:String, public batchCode:number, 
    public installment: number[]
  ) {}
}

@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.component.html',
  styleUrls: ['./student-report.component.css']
})

export class StudentReportComponent implements OnInit, OnDestroy {

  student: Student;
  sname: String;
  mobile: String;
  address: String;
  isEnabled: boolean;
  flag: boolean;
  course:String;
  batchCode: number;
  studentDetails: StudentDetails[];
  index: number;

  dtTrigger:Subject<any> = new Subject();
  @ViewChild(DataTableDirective,{static:false})
  dataTableElement:DataTableDirective
  dtOptions:DataTables.Settings = {}

  constructor() { }

  ngOnInit() {
    this.isEnabled = false;
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [5, 10, 15, 20],
    };
    this.index = 0;
  }

  backendRequest() {
    this.student = 
      new Student(1, [new Date(), new Date()], "Aashray", ["Java", "Python"], [202, 203], "Mp Nagar, Bhopal",
      "subhash chowk, katni", "7389330515", "MP Nagar", 1003, [2500, 2500]);
    
      this.studentDetails = [
      new StudentDetails([new Date, new Date], this.student.course[0], this.student.batchCode[0], 
        [2500, 2500]), 
      new StudentDetails([new Date, new Date], this.student.course[1], this.student.batchCode[1], 
          [2600, 2400])
    ]

    this.address = this.student.laddress;
  }

  buttonCall() {
    if (this.sname != null && this.mobile != null) {
      this.isEnabled = true;
      console.log(this.sname);
      console.log(this.mobile);
      this.backendRequest();
      this.flag = true;
    } else {
      console.log("no input");
      this.isEnabled = false;
    }
    
  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }

}