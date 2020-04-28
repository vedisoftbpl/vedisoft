import { Component, OnInit } from '@angular/core';
import { Person } from '../person/person.component';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {


  person: Person
  
  constructor() { }

  ngOnInit() {
    this.person = new Person(1, 1, "", "", "", "", 0, new Date(), "", new Date(), new Date(), new Date(), "", "", 0, new Date(), "", "",
    "", "", "", "", "", "", "", [""], "");
  }

}
