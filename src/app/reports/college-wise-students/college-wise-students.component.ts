import { Component, OnInit, ViewChild } from '@angular/core';
import { Session } from 'src/app/session/session.component';
import { Branch } from 'src/app/branches/branches.component';
import { SessionDataService } from 'src/app/service/data/session-data.service';
import { BranchesService } from 'src/app/service/data/branches.service';
import { StudentDataService } from 'src/app/service/data/student-data.service';



@Component({
  selector: 'app-college-wise-students',
  templateUrl: './college-wise-students.component.html',
  styleUrls: ['./college-wise-students.component.css']
})
export class CollegeWiseStudentsComponent implements OnInit {


  sessions: Session[]
  branches: Branch[]
  isEnabled: boolean = false
  branch: Branch
  session: Session
  dates: Date[];
  studentList: any
  branchId
  sessionId

  // dtTrigger: Subject<any> = new Subject();
  // @ViewChild(DataTableDirective, { static: false })
  // datatableElement: DataTableDirective;
  // dtOptions: DataTables.Settings = {};

  constructor(private sessionService: SessionDataService, private branchService: BranchesService, private studentService: StudentDataService) { }

  ngOnInit() {
    // this.session = [new Session(1, "abc", new Date(), new Date(), 1, new Date(), 54, new Date()), new Session(1, "abc", new Date(), new Date(), 1, new Date(), 54, new Date()),
    // new Session(1, "abc", new Date(), new Date(), 1, new Date(), 54, new Date())]
    // this.college = [new CollegeList(1, "Bhopal", "LNCT", "LNCTS", "LN", ["Aman", "Bharat", "Aashray"]),
    // new CollegeList(2, "Bhopal", "Oriental", "OIST", "OI", ["Kapil", "Somil"]),
    // new CollegeList(3, "Bhopal", "Sagar", "SIRT", "SI", ["Abhishek"]),]
    // this.session = [new Session(1,"abc",new Date(),new Date()),new Session(2,"xyz",new Date(),new Date()),
    // new Session(3,"aash",new Date(),new Date())]
    // this.college = [new College(1, "Bhopal", "LNCT", "LNCTS", "LN"),
    // new College(2, "Bhopal", "Oriental", "OIST", "OI"),
    // new College(3, "Bhopal", "Sagar", "SIRT", "SI"),]
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   lengthMenu: [5, 10, 15, 20],
    // };
    this.getAllBranches()
    this.branch = new Branch(-1, "", "", "", "", "", "", "", 0, "", "", new Date(),"",0,new Date(),"",0,0,new Date() )
    this.getAllSessions()
   
  }
  getData() {
    console.log(this.session)
    this.dates = [this.session.startDate, this.session.endDate]
    this.studentService.getStudentsByCollege(this.branch.branchId, this.dates).subscribe(
      response => {
        this.studentList = response
      }
    )
    this.isEnabled = true
  }

  getAllBranches() {
    this.branchService.getAllBranches().subscribe(
      response => {
        this.branches = response
      }
    )
  }

  getAllSessions() {
    this.sessionService.getAllSessions().subscribe(
      response => {
        this.sessions = response
      }
    )
  }


}
