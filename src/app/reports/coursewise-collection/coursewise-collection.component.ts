import { Component, OnInit, ViewChild } from '@angular/core';
import { Branch } from 'src/app/branches/branches.component';
import { RouterGuardService } from 'src/app/service/router-guard.service';
import { BranchesService } from 'src/app/service/data/branches.service';
import { CoursewiseCollectionService } from 'src/app/service/data/coursewise-collection.service';

export class CoursewiseCollection {
  constructor(public id: number, public student: String, public registrationNumber: String, public course: String,
  public batch: String, public amount: number, public mode: String, public receivedBy: string) {}
}

@Component({
  selector: 'app-coursewise-collection',
  templateUrl: './coursewise-collection.component.html',
  styleUrls: ['./coursewise-collection.component.css']
})
export class CoursewiseCollectionComponent implements OnInit {

  constructor(private routeGuardService: RouterGuardService, private branchService: BranchesService,
    private courseWiseCollectionService: CoursewiseCollectionService) { }

  branchId
  branches: Branch[]
  from: Date
  to: Date
  dates : Date[]
  courseWiseCollection
  allEnabled: boolean
  isEnabled: boolean


  ngOnInit() {
    this.from = new Date()
    this.to = new Date()
    this.getAllBranches()
  }

  getData() {
    this.dates = [this.from, this.to]
    console.log(this.dates)
    this.courseWiseCollectionService.getCourseWiseCollection(this.branchId, this.dates).subscribe(
      response => {
        this.courseWiseCollection = response
        console.log(response)
      }
    )
    this.isEnabled = true;
  }
  getAllBranches() {
    this.branchService.getAllBranches().subscribe(
      response => {
        this.branches = response
      }
    )
  }

  getTotal() {
    let sum = 0
    for(let i = 0; i < this.courseWiseCollection.length; i++) {
        sum += this.courseWiseCollection[i][2]
    }
    return sum;
  }

}
