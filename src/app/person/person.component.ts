import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { PersonType } from '../person-type/person-type.component';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { PersonService } from '../service/data/person.service';
import { Branch } from '../branches/branches.component';

export class Person{
  constructor(public personId: number, 
    public active: number, 
    public address: string, 
    public cardNo: string, 
    public city: string, 
    public contactNo: string, 
    public createdBy: number, 
    public createdDate: Date, 
    public designation: string, 
    public dob: Date,
    public doj: Date, 
    public dol: Date, 
    public email: string, 
    public key1: string, 
    public lastUpdatedBy: number,
    public lastUpdatedDate: Date, 
    public locality: string, 
    public password: string, 
    public personName: string, 
    public personTypeId: string,
    public plotNo: string, 
    public state: string, 
    public street: string, 
    public username: string, 
    public branch: Branch,
    public installments: any[],
    public personType: PersonType){}
}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private personService : PersonService) { }


  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, {static: false})
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  persons: Person[]
  person: Person = new Person(1, 1, "", "", "", "", 1, new Date(), "", new Date(), new Date(), new Date(), "", "", 1, new Date(), "", 
  "", "", "", "", "", "", "",new Branch(1, "", "", "", "", "", "", "", 0, "", "", new Date(),"",0,new Date(),"",0,0,new Date() ), [""], new PersonType(1, 1, new Date(),
  1, new Date, "", ""));
  
  ngOnInit() {
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [ 5, 10, 15, 20 ]
    };
    this.refreshPersons();
  }

  refreshPersons() {
    this.personService.getAllPersons().subscribe(
      response => {
        this.persons = response,
        this.dtTrigger.next();
      },
      error => {
        console.error();
      }
      
    )
  }

  addPerson() {
    this.router.navigate(['/personForm', -1]);
}

  updatePerson(id) {
    this.router.navigate(['personForm', id]);
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

  viewPerson(person) {
    this.person = person
  }

}
