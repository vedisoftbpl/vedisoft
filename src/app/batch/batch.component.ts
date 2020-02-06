import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Session, SessionComponent } from '../session/session.component';
export class Batch {
  constructor(
    public batchId:number,
    public faculty:string[],
    public course:string[],
    public timings:string,
    public startDate:Date,
    public days:string,
    public endDate:Date,
    public session:Session,
    public status:string,
    public branch:string
  ){}
}

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit,OnDestroy {

  dtTrigger:Subject<any> = new Subject()
  @ViewChild(DataTableDirective, {static : false})
  dataTableElement:DataTableDirective;
  dtOptions:DataTables.Settings = {}
  session:SessionComponent



  constructor(private router :Router) { 
    
  }
  batchList: Batch[]
  // batchList:Batch[] = [new Batch(1,["Ram"],["JAVA"],"06:00 pm-08:00 pm",new Date(),"MWF",new Date(),new Session(1,"ABC",new Date(),new Date()),"active","MP Nagar"),
  // new Batch(2,["Rohit Ahuja"],["Spring"],"09:00 am-11:00 am",new Date(),"TTS",new Date(),new Session(2,"xyz",new Date(),new Date()),"active","Indrapuri")]
  
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [5,10,15,20]
    };
    this.createBatch()
  }

  createBatch(){
    this.batchList = [new Batch(1,["Ram"],["JAVA"],"06:00 pm-08:00 pm",new Date(),"MWF",new Date(),new Session(1,"ABC",new Date(),new Date()),"active","MP Nagar"),
  new Batch(2,["Rohit Ahuja"],["Spring"],"09:00 am-11:00 am",new Date(),"TTS",new Date(),new Session(2,"xyz",new Date(),new Date()),"active","Indrapuri")]
  }

  editBatchDetails(id){
    this.router.navigate(['batchform',id,1]);
  }


  addBatch(){
    this.router.navigate(['batchform',-1,1])
  }

  // getBatchList(){
  //   console.log(this.batchList)
  //   return this.batchList;
  // }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }

  public getBatchById(id) {
    for(let a of this.batchList) {
       if(a.batchId == id){
         console.log("called")
         return a;
       } 
    }
  }
}
