import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/person/person.component';
import { Branch } from 'src/app/branches/branches.component';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  person: Person;
  branch:Branch
  constructor() { }

  ngOnInit() {
    this.branch = new Branch(1, "", "", "", "", "", "", "", ["Rohit Ahuja"], "", "", new Date(), "");
    this.person = new Person(null, null, "", "", "", "", null, new Date(), "", new Date(), new Date(), new Date(), "", "", null, 
    new Date(), "", "", "", "", "", "", "", "",this.branch, [], null);
  }

}
