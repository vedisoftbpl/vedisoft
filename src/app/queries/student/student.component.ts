import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { Branch } from 'src/app/branches/branches.component';
import { College } from 'src/app/college/college.component';

export class Student {
  constructor(public registrationId: number, public branch: string, public campus: string, public cardNo: number,
    public company: string, public course: string, public createdBy: number, public creationDate: Date, public dob: Date, 
    public doj: Date, public email: string, public enquiry_id: number, public extra3: string, public fatherName: string, 
    public flag: string, public laddress: string, public lastUpdadtedBy: number, public lastUpdationDate: Date, public name: string, 
    public package1: string, public paddress:string, public parentOccupation: string, public password: string, public pno: string,
    public regId: string, public registrationDate: Date, public sem: String, public whatsappNo: string, public branchBean: Branch,
    public collegeList: College) { }
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnDestroy {

  constructor() { }

  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  isEnabled: boolean = false;
  studentName = "";

  students: Student[] = [
    new Student(1, "Mp nagar", "yes", 825, "Infosys", "Java", 1, new Date(), new Date(), new Date(), "abc@gmail.com", 1, "", "Neelesh",
    "", "MPNAGRA", 1, new Date(), "Aditya Kumar", "", "Bhopal", "Businessman", "123456", "1", "879346", new Date(), "4", "78654887685", 
    new Branch(1, "MONAGRA", "MP", "54545", "MPNAGAR", "STREET", "BHOPAL", "MP", ["ABC"], 7384542, "JAVA", new Date(), "6455455"), 
    new College(1, "BHOPAL", "LNCT", "LMCTS", "LN", ["Aman", "Bharat", "Aashray"])),

    new Student(2, "Indrapuri", "yes", 825, "Cognizant", "C++", 1, new Date(), new Date(), new Date(), "abc@gmail.com", 1, "", "Neelesh",
    "", "MPNAGRA", 1, new Date(), "Divyanand Pandey", "", "Bhopal", "Businessman", "123456", "1", "879346", new Date(), "4", "78654887685", 
    new Branch(1, "MONAGRA", "MP", "54545", "MPNAGAR", "STREET", "BHOPAL", "MP", ["ABC"], 7384542, "JAVA", new Date(), "6455455"), 
    new College(1, "BHOPAL", "LNCT", "LMCTS", "LN", ["Aman", "Bharat", "Aashray"]))
  ]

  ngOnInit() {
  }

  searchStudent() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [5, 10, 15, 20],
      search: {search: this.studentName}
    };
    this.isEnabled = true;
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }


}
