import { Component, OnInit } from '@angular/core';
import { Person } from '../person/person.component';
import { PersonService } from '../service/data/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from '../branches/branches.component';
import { PersonType } from '../person-type/person-type.component';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {


  person: Person
  id: number
  branch: Branch
  personType: PersonType
  
  
  constructor(private router:ActivatedRoute,
    private route:Router, private personService: PersonService) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id']
    this.branch = new Branch(1, "", "", "", "", "", "", "", 0, "", "", new Date(),"",0,new Date(),"",0,0,new Date() )
    this.personType = new PersonType(1, 1, new Date(), 1, new Date(), "", "")
    this.person = new Person(this.id, 1, "", "", "", "", 0, new Date(), "", new Date(), new Date(), new Date(), "", "", 0, new Date(), "", "",
    "", "", "", "", "", "", this.branch, [""], this.personType);
    if(this.id != -1) {
      this.personService.getPersonById(this.id).subscribe(
        data => {
          this.person = data
        }
      )

    }
    
  }

  addPerson() {
    
    if(this.person.personId == -1) {
    this.personService.addPerson(this.person).subscribe(
      data => {
        console.log(data);
        this.route.navigate(['/person']);
      }
    )
    }
    else {
      
      this.personService.updatePerson(this.person, this.id).subscribe(
        data => {
          console.log(data)
          this.route.navigate(["person"])
        }
      )
    }
  }

}