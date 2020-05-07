import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Batch, BatchComponent } from '../batch/batch.component';
import { Session } from '../session/session.component';
import { BatchDataService } from '../service/data/batch-data.service';
import { Branch } from '../branches/branches.component';
import { Course } from '../course/course.component';
import { CourseDataService } from '../service/data/course-data.service';
import { SessionDataService } from '../service/data/session-data.service';
import { BranchesService } from '../service/data/branches.service';

@Component({
  selector: 'app-batch-form',
  templateUrl: './batch-form.component.html',
  styleUrls: ['./batch-form.component.css']
})
export class BatchFormComponent implements OnInit {
  
  batch:Batch
  batches:Batch[]
  
  branch:Branch
  
  course:Course
  session:Session
  
  id:number
  isEnabled:number
  constructor(private router: ActivatedRoute, private route:Router , private batchData:BatchDataService , private branchData:BranchesService, private sessionData:SessionDataService,private courseData:CourseDataService) { }
  
  ngOnInit() {
    this.id = this.router.snapshot.params['id']
    this.isEnabled = this.router.snapshot.params['isEnabled']
    this.branch = new Branch(1, "", "", "", "", "", "", "", 0, "", "", new Date(),"",0,new Date(),"",0,0,new Date() )
    this.course = new Course(-1,"",0,"","")
    this.session = new Session(-1,"",new Date(),new Date(),0,new Date(),0,new Date()) 
    this.batch = new Batch(-1,"",0,new Date(),"","",0,0,new Date(),new Date(),"","",this.branch,this.course,this.session)
    
    if(this.id!=-1){
      this.batchData.getBatchById(this.id).subscribe(
        data=>{
          this.batch = data
        }
      )
    }
    }
    
    

    submitForm(){
      console.log(this.batch)
      if(this.batch.batchId == -1){
       this.batchData.addBatch(this.batch).subscribe(
         response =>{
           console.log(response)
           this.route.navigate(['batch'])
         },
         error =>{
            console.log(error)
         }
       )
      }
 
      else{
        this.batchData.updateBatch(this.batch, this.id).subscribe(
          response => {
            console.log(response)
            this.route.navigate(['batch'])
          }
        )
      }

  }
}
