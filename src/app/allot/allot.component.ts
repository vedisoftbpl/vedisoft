import { Component, OnInit } from '@angular/core';
import { Batch } from '../batch/batch.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BatchDataService } from '../service/data/batch-data.service';
import { AllotBatchService } from '../service/data/allot-batch.service';

export class StudentBatch {
  constructor(
    public sbId:number,
    public certificate:string,
    public createdBy:number,
    public createdDate:Date,
    public flag:string,
    public joined:string,
    public lastUpdatedBy:number,
    public lastUpdatedDate:Date,
    public studentId:number,
    public batch:Batch
  ){

  }
}

@Component({
  selector: 'app-allot',
  templateUrl: './allot.component.html',
  styleUrls: ['./allot.component.css']
})


export class AllotComponent implements OnInit {

  
  private studentBatch:StudentBatch
  private id: number
  private batch: Batch
  batches: Batch[];

  constructor(private route: ActivatedRoute, private router: Router,
    private batchService: BatchDataService,private allot:AllotBatchService) { }

  ngOnInit() {
    this.batch = new Batch(-1,"",0,new Date(),"","",0,0,new Date(),new Date(),"","",null,null,null)
    this.id = this.route.snapshot.params['id']
    this.studentBatch = new StudentBatch(-1,"",0,new Date(),"","",0,new Date(),this.id,this.batch)
    this.getAllBatches();
  }

  allotBatch() {
    console.log(this.studentBatch);
    this.allot.addAllocation(this.studentBatch).subscribe(
      response =>{
        console.log(response)
        this.router.navigate(['student'])
      },
      error =>{
         console.log(error)
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
