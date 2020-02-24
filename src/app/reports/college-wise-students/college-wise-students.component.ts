import { Component, OnInit, ViewChild } from '@angular/core';
import { Session } from 'src/app/session/session.component';
import { College } from 'src/app/college/college.component';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

export class CollegeWiseStudentList{
  constructor(public regId:number, public regDate:Date, public studentName:String,public course:String[],public sem:String){

  }
}

@Component({
  selector: 'app-college-wise-students',
  templateUrl: './college-wise-students.component.html',
  styleUrls: ['./college-wise-students.component.css']
})
export class CollegeWiseStudentsComponent implements OnInit {


  session:Session[]
  college:College[]
  studentList:CollegeWiseStudentList[]
  isEnabled:boolean = true

  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  
  constructor() { }

  ngOnInit() {
    // this.session = [new Session(1,"abc",new Date(),new Date()),new Session(2,"xyz",new Date(),new Date()),
    // new Session(3,"aash",new Date(),new Date())]
    this.college = [new College(1, "Bhopal", "LNCT", "LNCTS", "LN", ["Aman", "Bharat", "Aashray"]),
    new College(2, "Bhopal", "Oriental", "OIST", "OI", ["Kapil", "Somil"]),
    new College(3, "Bhopal", "Sagar", "SIRT", "SI", ["Abhishek"]),]
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [5, 10, 15, 20],
    };
    

  }

}
