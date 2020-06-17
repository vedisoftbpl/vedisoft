import { Component, OnInit } from '@angular/core';
import { Batch } from '../batch/batch.component';
import { BatchDataService } from '../service/data/batch-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InstallmentDataService } from '../service/data/installment-data.service';
import { Person } from '../person/person.component';
import { PersonService } from '../service/data/person.service';
import { Branch } from '../branches/branches.component';
import { PersonType } from '../person-type/person-type.component';

export class Installment{
  constructor(
    public id :number,
    public receiptNo:number,
    public instDate:Date,
    public regNo:number,
    public batch : Batch,
    public amt:number,
    public person:Person

  ){

  }
}

@Component({
  selector: 'app-installment',
  templateUrl: './installment.component.html',
  styleUrls: ['./installment.component.css']
})
export class InstallmentComponent implements OnInit {

  batch:Batch
  id:number
  installment:Installment
  batches:Batch[]
  persons:Person[]
  per:Person

  constructor(private route: ActivatedRoute, private router: Router,
    private batchService: BatchDataService, private installmentService:InstallmentDataService,private personData:PersonService) { }

  ngOnInit() {
    this.batch = new Batch(-1,"",0,new Date(),"","",0,0,new Date(),new Date(),"","",null,null,null)
    this.per = new Person(1, 1, "", "", "", "", 1, new Date(), "", new Date(), new Date(), new Date(), "", "", 1, new Date(), "", 
    "", "", "", "", "", "", "",new Branch(1, "", "", "", "", "", "", "", 0, "", "", new Date(),"",0,new Date(),"",0,0,new Date() ), [""], new PersonType(1, 1, new Date(),
    1, new Date, "", ""));
    this.id = this.route.snapshot.params['id']
     this.installment = new Installment(-1,0,new Date(),this.id,this.batch,0,this.per);
    this.getAllBatches();
    this.getAllPerson();
  }

  getAllBatches() {
    this.batchService.getAllBatches().subscribe(
      response => {
        this.batches = response
      }
    )
  }

  getAllPerson(){
    this.personData.getAllPersons().subscribe(
      response=>{
        this.persons = response
      }
    )
  }

  addInstallment(){
    this.installmentService.addInstallment(this.installment).subscribe(
      response =>{
        console.log(response)
        this.router.navigate(['student'])
      },
      error =>{
         console.log(error)
      }
    )

  }


}
