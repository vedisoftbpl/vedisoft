import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { Branch } from 'src/app/branches/branches.component';
import { College } from 'src/app/college/college.component';
import { Router } from '@angular/router';
import { StudentDataService } from '../service/data/student-data.service';

export class Student {
  constructor(public registrationId: number, 
    public branch: string, //
    public campus: string, 
    public cardNo: number,//
    public company: string, 
    public course: string, 
    public createdBy: number, 
    public creationDate: Date, 
    public dob: Date, //
    public doj: Date, //
    public email: string, //
    public enquiryId: number, 
    public extra3: string, 
    public fatherName: string, //
    public flag: string, 
    public laddress: string, //
    public lastUpdatedBy: number, 
    public lastUpdationDate: Date, 
    public mno:number,//
    public name: string, //
    public package1: string,// 
    public paddress:string, //
    public parentOccupation: string,// 
    public password: string, //
    public pno: string,//
    public regId: string, 
    public registrationDate: Date, 
    public sem: String, //
    public whatsappNo: string, //
    public branchBean: Branch,//
    public collegeList: College//
    ) { }
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnDestroy {

  constructor(public router:Router , private studentData : StudentDataService) { }

  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  isEnabled: boolean = false;
  studentName = "";

  students: Student[]

  ngOnInit() {
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [5, 10, 15, 20],
      search: {search: this.studentName}
    };
    this.isEnabled = true;
    this.refreshStudent()
    this.dtTrigger
  }

  refreshStudent(){
    this.studentData.getAllStudents().subscribe(
      data=>{
        console.log(data)
        this.students = data
        this.dtTrigger.next()
      },
      error =>{
        console.log(error)
      }
    )
  }

  allocateBatch(id){
    this.router.navigate(['allot',id]);
  }

  searchStudent() {
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

  addStudent(){
    this.router.navigate(['studentform',-1,1])
  }

}
