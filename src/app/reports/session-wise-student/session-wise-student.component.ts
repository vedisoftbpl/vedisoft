import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Session } from 'src/app/session/session.component';
import { Course } from 'src/app/course/course.component';
import { Branch } from 'src/app/branches/branches.component';

export class SessionWiseStudent {
  public constructor(
    public session: Session, public branchName: String, course: Course
  ) {

  }
}

@Component({
  selector: 'app-session-wise-student',
  templateUrl: './session-wise-student.component.html',
  styleUrls: ['./session-wise-student.component.css']
})
export class SessionWiseStudentComponent implements OnInit {


  sessionList: Session[];
  branches: Branch[];
  courseName: String;

  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit() {
    this.sessionList = [new Session(1, "abc", new Date(), new Date(), 1, new Date(), 54, new Date()), new Session(1, "abc", new Date(), new Date(), 1, new Date(), 54, new Date()),
    new Session(1, "abc", new Date(), new Date(), 1, new Date(), 54, new Date())]
    this.branches = [
        // new Branch(1, "M.P. NAGAR", "mpn", "3rd Floor, 275", "above Andhra Bank, Near Time Coaching", "Zone-II, Maharana Pratap Nagar", "Bhopal", " Madhya Pradesh",["Rohit Ahuja"],"1234556778","JAVA,C++,C",new Date(),"23.2524° N, 77.4646° E"),
        // new Branch(2, "Indrapuri", "ind", "219-B", " near Gaurav Dairy, Indrapuri C sector", "Sector C, Indrapuri", "Bhopal", "Madhya Pradesh",["Rohit Ahuja"],"1234556778","JAVA,C++,C",new Date(),"23.2524° N, 77.4646° E")
      ]
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [5, 10, 15, 20],
    };
  }

  getStudentByCourseName() {
    
  }

}
