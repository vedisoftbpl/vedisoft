import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { RouterGuardService } from 'src/app/service/router-guard.service';
import { FacultywiseCollectionService } from 'src/app/service/data/facultywise-collection.service';



@Component({
  selector: 'app-facultywise-collection',
  templateUrl: './facultywise-collection.component.html',
  styleUrls: ['./facultywise-collection.component.css']
})
export class FacultywiseCollectionComponent implements OnInit {

  constructor(private routeGuardService: RouterGuardService,
    private facultyWiseCollectionService: FacultywiseCollectionService) { }

  
  from: Date
  to: Date
  dates : Date[]
  facultyWiseCollection
  isEnabled: boolean = false

  ngOnInit() {
    this.from = new Date()
    this.to = new Date()
  }

  getData() {
    this.dates = [this.from, this.to]
    console.log(this.dates)
    this.facultyWiseCollectionService.getFacultyWiseCollection(this.dates).subscribe(
      response => {
        this.facultyWiseCollection = response
        console.log(response)
      }
    )
    this.isEnabled = true
  }

  getTotal() {
    let sum = 0
    for(let i = 0; i < this.facultyWiseCollection.length; i++) {
        sum += this.facultyWiseCollection[i][1]
    }
    return sum;
  }

}
