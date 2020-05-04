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
  "", "", "", "", "", "", "", new Branch(1, "", "", "", "", "", "", "", [""], "", "", new Date(), ""), [""], new PersonType(1, 1, new Date(),
  1, new Date, "", ""));
  //  = [
  //   new Person(1, 54, "C112", "20200908", "Bhopal", "01012358996", 123, new Date(), "Faculty", new Date(), new Date(), new Date(), 
  //   "abc@gmail.com", "key", 123, new Date(), "Sonagiri", "0103AC", "Lokesh", "1010", "45", "MP", "Dalal Street", "lokesh", "Indrapuri", 
  //   [100, 210],  new PersonType(1, 20200908, new Date(), 20200908, new Date(), "Front Office Incharge", "ADMIN")),
    
  //   new Person(2, 78, "C113", "20201228", "Bhopal", "01012358996", 456, new Date(), "Manager", new Date(), new Date(), new Date(), 
  //   "123c@gmail.com", "key", 789, new Date(), "Indrapuri", "0102BH", "Mukesh", "1010", "46", "MP", "Dalal Street", "mukesh", "Indrapuri", 
  //   [100, 210], new PersonType(2, 20201010, new Date(), 20201228, new Date(), "Manager", "ADMIN")),
    
  //   new Person(3, 53, "C114", "20201119", "Bhopal", "01012358996", 799, new Date(), "Incharge", new Date(), new Date(), new Date(), 
  //   "788@gmail.com", "key", 456, new Date(), "MP Nagar", "01015Av", "rakesh", "1010", "47", "MP", "Dalal Street", "rakesh", "Indrapuri", 
  //   [100, 210],new PersonType(3, 20201228, new Date(), 20201119, new Date(), "Faculty", "ADMIN")),
  // ]

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
