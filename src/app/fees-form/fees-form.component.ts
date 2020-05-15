import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fees } from '../fees/fees.component';
import { FeeDataService } from '../service/data/fee-data.service';
import { Branch } from '../branches/branches.component';
import { Batch } from '../batch/batch.component';
import { Course } from '../course/course.component';
import { Session } from '../session/session.component';
import { BranchesService } from '../service/data/branches.service';
import { BatchDataService } from '../service/data/batch-data.service';


@Component({
  selector: 'app-fees-form',
  templateUrl: './fees-form.component.html',
  styleUrls: ['./fees-form.component.css']
})
export class FeesFormComponent implements OnInit {


  private id: number
  private branch: Branch
  private batch: Batch
  private fee:Fees
  private course: Course
  private session: Session
  branches: Branch[];
  batches: Batch[];

  constructor(private route: ActivatedRoute, private feeData: FeeDataService, private router: Router, private branchService: BranchesService,
    private batchService: BatchDataService) { }

  ngOnInit() {
    this.branch = new Branch(1, "", "", "", "", "", "", "", 0, "", "", new Date(),"",0,new Date(),"",0,0,new Date() )
    this.course = new Course(-1,"",0,"","")
    this.session = new Session(-1,"",new Date(),new Date(),0,new Date(),0,new Date()) 
    this.batch = new Batch(-1,"",0,new Date(),"","",0,0,new Date(),new Date(),"","",null,null,null)
    this.fee = new Fees(-1, 1, new Date(), new Date(), "", 1, 5000, 2, new Date(), "", this.branch, this.batch)
    this.id = this.route.snapshot.params['id']
    if(this.id != -1) {
      this.feeData.getFeeById(this.id).subscribe(
        response => {
          console.log(response)
          this.fee = response
        }
      )
    }
    this.getAllBatches();
    this.getAllBranches();
  }

  addFee() {
    if(this.fee.id == -1){
      this.feeData.addFee(this.fee).subscribe(
        response =>{
          console.log(response)
          this.router.navigate(['fees'])
        },
        error =>{
           console.log(error)
        }
      )
     }

     else{
       this.feeData.saveFee(this.fee, this.id).subscribe(
         response => {
           console.log(response)
           this.router.navigate(['fees'])
         }
       )
     }

  }
  getAllBranches() {
    this.branchService.getAllBranches().subscribe(
      response => {
        this.branches = response
      }
    )
  }

  getAllBatches() {
    this.batchService.getAllBatches().subscribe(
      response => {
        this.batches = response
      }
    )
  }

}
