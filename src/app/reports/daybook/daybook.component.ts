import { Component, OnInit, ViewChild } from '@angular/core';
import { DaybookService } from 'src/app/service/data/daybook.service';
import { BranchesService } from 'src/app/service/data/branches.service';
import { Branch } from 'src/app/branches/branches.component';
import { BatchDataService } from 'src/app/service/data/batch-data.service';
import { Batch } from 'src/app/batch/batch.component';
import { PersonService } from 'src/app/service/data/person.service';
import { Person } from 'src/app/person/person.component';



@Component({
  selector: 'app-daybook',
  templateUrl: './daybook.component.html',
  styleUrls: ['./daybook.component.css']
})
export class DaybookComponent implements OnInit {

  currentDate: Date
  isEnabled: boolean = false;
  dates: Date[]
  daybook = null
  branches: Branch[]
  batch: Batch
  batches: Batch[]
  branch: Branch
  total: number = 0;
  persons: Person[]

  constructor(private dayBookService: DaybookService, private branchService: BranchesService, private batchService: BatchDataService,
    private personService: PersonService) { }

  ngOnInit() {
    this.currentDate = new Date()
    this.branch = new Branch(-1, "", "", "", "", "", "", "", 0, "", "", new Date(),"",0,new Date(),"",0,0,new Date() )
    this.getAllBranches();
    this.getAllBatches();
    this.getAllPersons()
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
 

 getDayBook() {
   this.dates = [this.currentDate]
    this.dayBookService.getDayBook(this.dates, this.branch.branchId).subscribe(
     response => {
        this.daybook = response
      }
    )
    
    
    this.isEnabled = true
    
      
 }

 getBatchNameById(id) {
  for (let index = 0; index < this.batches.length; index++) {
    if(this.batches[index].batchId == id)
      return this.batches[index].code
  }
  
 }

 getTotal() {
   let sum = 0
  for (let index = 0; index < this.daybook.length; index++) {
    sum += this.daybook[index][6]
  }
  return sum;
 }
 getAllPersons() {
   this.personService.getAllPersons().subscribe(
     response => {
        this.persons = response
     }
   )
 }
 getPersonById(id) {
  for (let index = 0; index < this.persons.length; index++) {
    if(this.persons[index].personId == id)
      return this.persons[index].personName
  }
 }
 }
