import { Component, OnInit } from '@angular/core';
import { Branch, BranchesComponent } from '../branches/branches.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchesService } from '../service/data/branches.service';

@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css']
})
export class BranchFormComponent implements OnInit {

  // branch = new Branch(-1,"","","","","","","",[""],0,"",new Date(),"")
  // branchL = new BranchList()
  branch: Branch;
  id:number
  isEnabled:number
  x:Boolean = true

  disable:boolean = true
  constructor(private router:ActivatedRoute,
    private route:Router, private branchService: BranchesService) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id']
    this.isEnabled = this.router.snapshot.params['isEnabled']
    if(this.isEnabled==0){
      this.disable = true
    }
    console.log(this.disable)
    if(this.id != -1){ 
      console.log('else working')
      this.branchService.getBranchById(this.id).subscribe(
        data => this.branch = data
      ) 
    }

  }

  addBranch() {
    this.branchService.addBranch(this.branch);
  }
  getBranchById(id) {
    this.branchService.getBranchById(id);
  }
  updateBranch() {
    this.branchService.updateBranch(this.branch, this.id);
  }

}
