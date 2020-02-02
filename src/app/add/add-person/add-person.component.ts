import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/person/person.component';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  person: Person;
  constructor() { }

  ngOnInit() {
    this.person = new Person(null, null, "", "", "", "", null, new Date(), "", new Date(), new Date(), new Date(), "", "", null, 
    new Date(), "", "", "", "", "", "", "", "", "", [], null);
  }

}
