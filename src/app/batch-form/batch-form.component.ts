import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Batch, BatchComponent } from '../batch/batch.component';
import { Session } from '../session/session.component';

@Component({
  selector: 'app-batch-form',
  templateUrl: './batch-form.component.html',
  styleUrls: ['./batch-form.component.css']
})
export class BatchFormComponent implements OnInit {

  // batchId:number
  // faculty:string[]
  // course:string[]
  // timings:string
  // startDate:Date
  // days:string
  // endDate:Date
  // session:Session
  // status:string
  // branch:string

  a : BatchComponent;
  batch:Batch
  id:number
  isEnabled:number
  batches:Batch[]
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.batches = [new Batch(1,["Ram"],["JAVA"],"06:00 pm-08:00 pm",new Date(),"MWF",new Date(),new Session(1,"ABC",new Date(),new Date()),"active","MP Nagar"),
    new Batch(2,["Rohit Ahuja"],["Spring"],"09:00 am-11:00 am",new Date(),"TTS",new Date(),new Session(2,"xyz",new Date(),new Date()),"active","Indrapuri")]
    this.batch = new Batch(-1,[""],[""],"",new Date(),"",new Date(),new Session(1,"",new Date(),new Date()),"","");
    this.isEnabled = this.route.snapshot.params['isEnabled'];
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    console.log(this.isEnabled)
    if(this.isEnabled==1 && this.id!=-1){
      console.log("inside")
      for(let a of this.batches){
        if(a.batchId == this.id){
          this.batch = a 
          console.log(a)
          break
        }
      }
       // this.batch = this.a.getBatchById(this.id)
      // console.log( this.a.getBatchById(this.id))
      // this.batch = this.a.getBatchById(this.id);
      
      // this.batch = new Batch(this.batchId,this.faculty,this.course,this.timings,this.startDate,this.days,this.endDate,
      //   this.session,this.status,this.branch);
       //console.log(this.batches);
       console.log(this.batch);
    }
  }

  }

