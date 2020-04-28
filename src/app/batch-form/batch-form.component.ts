import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Batch, BatchComponent } from '../batch/batch.component';
import { Session } from '../session/session.component';
import { BatchDataService } from '../service/data/batch-data.service';

@Component({
  selector: 'app-batch-form',
  templateUrl: './batch-form.component.html',
  styleUrls: ['./batch-form.component.css']
})
export class BatchFormComponent implements OnInit {
  
  batch:Batch
  batches:Batch[]
  id:number
  isEnabled:number
  constructor(private router: ActivatedRoute, private route:Router , private batchData:BatchDataService) { }
  
  ngOnInit() {
    this.id = this.router.snapshot.params['id']
    this.isEnabled = this.router.snapshot.params['isEnabled']
    this.batch  = new Batch(-1,-1," ",-1,new Date()," ","",-1,0,new Date(),new Date()," "," "," ",0,"")
    if(this.id!=-1){
      this.batchData.getBatchById(this.id).subscribe(
        data=>{
          this.batch = data
        }
      )
    }
    }

    submitForm(){
      console.log("submitting")
      // if(this.id!=-1){
      //  this.batchData.updateBatch(this.batch,this.batch.batchId).subscribe(
      //    response =>{
      //      this.route.navigate(['batch'])
      //    },
      //    error =>{
      //      // console.log(error)
      //    }
      //  )
      // }
 
      // else{
        this.batchData.addBatch(this.batch).subscribe(
         response =>{
           this.route.navigate(['batch'])
         },
         error =>{
           console.log(error)
         }
        )
      //}
      
    }

  }

