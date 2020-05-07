import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CollegeDataService } from '../service/data/college-data.service';
import { BranchesService } from '../service/data/branches.service';
import { College } from '../college/college.component';
import { Branch } from '../branches/branches.component';
import { Student } from '../student/student.component';
import { StudentDataService } from '../service/data/student-data.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  selecteddFile:File;
  collegesList:College[]
  branchList:Branch[]
  student:Student
  id:number
  branch:Branch
  college:College

  constructor(private router:ActivatedRoute,
    private route:Router, private collegeData : CollegeDataService , private branchData : BranchesService, private studentData:StudentDataService ) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id']
    this.getAllColleges()
    this.getAllBranches()
    this.branch = new Branch(1, "", "", "", "", "", "", "", 0, "", "", new Date(),"",0,new Date(),"",0,0,new Date())
    this.college = new College(-1,"","","","")
    this.student = new Student(-1,"","",0,"","",0,new Date(),new Date(),new Date(),"",0,"","","","",0,new Date(),0,"","","","","","","",new Date(),"","",this.branch,this.college)
    if(this.id!=-1){}

  }

  selectFile(event){
    this.selecteddFile = event.target.files.item(0)
    console.log(this.selecteddFile)
  }

  getAllColleges(){
    this.collegeData.getAllColleges().subscribe(
      data=>{
        console.log(data)
        this.collegesList = data
      },
      error=>{
        console.log(error)
      }
    )

  }

  getAllBranches(){
    this.branchData.getAllBranches().subscribe(
      data=>{
        this.branchList = data
      },
      error=>{
        console.log(error)
      }
    )

  }

  addStudent(){
    const uploadData=new FormData();
    uploadData.append('student',JSON.stringify(this.student))   
    uploadData.append('myFile',this.selecteddFile)
    if(this.id == -1){
      this.studentData.addNewStudent(uploadData).subscribe(
        data=>{
          console.log(data);
          this.route.navigate(['student'])
        },
        error=>{
          console.log(error)
        }
        
      )
    }
  }

}
