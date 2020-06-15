import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Branch } from 'src/app/branches/branches.component';
import { RouterGuardService } from 'src/app/service/router-guard.service';
import { BranchesService } from 'src/app/service/data/branches.service';
import { BranchwiseCollectionService } from 'src/app/service/data/branchwise-collection.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-branchwise-collection',
  templateUrl: './branchwise-collection.component.html',
  styleUrls: ['./branchwise-collection.component.css']
})
export class BranchwiseCollectionComponent implements OnInit {

  constructor(private routeGuardService: RouterGuardService, private branchService: BranchesService,
    private branchWiseCollectionService: BranchwiseCollectionService) { }

  branchId
  branches: Branch[]
  from: Date
  to: Date
  dates : Date[]
  branchWiseCollection
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
    this.branchWiseCollectionService.getBranchWiseCollection(this.dates).subscribe(
      response => {
        this.branchWiseCollection = response
        console.log(response)
      }
    )
    if(this.branchId == 0) {
      this.allEnabled = true
    }
    else{
      this.allEnabled = false
    }
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
    for(let i = 0; i < this.branchWiseCollection.length; i++) {
      if(this.branchId == this.branchWiseCollection[i][0] || this.allEnabled)
        sum += this.branchWiseCollection[i][2]
    }
    return sum;
  }



  


}
