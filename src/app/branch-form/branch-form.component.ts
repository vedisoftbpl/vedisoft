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

  branch: Branch;
  id:number
  constructor(private router:ActivatedRoute,
    private route:Router, private branchService: BranchesService) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id']
    this.branch = new Branch(1, "", "", "", "", "", "", "", 0, "", "", new Date(),"",0,new Date(),"",0,0,new Date() )
    if(this.id != -1){ 
      console.log('else working')
      this.branchService.getBranchById(this.id).subscribe(
        data => this.branch = data
      )
      
    }
  }

  addBranch() {
    console.log(this.branch)
    if(this.branch.branchId == -1) {
    this.branchService.addBranch(this.branch).subscribe(
      data => {
        console.log(data);
        this.route.navigate(['/branches']);
      }
    )
   }
   else{
     this.branchService.updateBranch(this.branch, this.id).subscribe(
       data => {
         this.route.navigate(['/branches'])
       }
     )
   }
  }
  getBranchById(id) {
    this.branchService.getBranchById(id);
  }
  
}
