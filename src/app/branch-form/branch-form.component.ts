import { Component, OnInit } from '@angular/core';
import { Branch, BranchesComponent, BranchList } from '../branches/branches.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css']
})
export class BranchFormComponent implements OnInit {

  branch:Branch
  branchL = new BranchList()
  branches: Branch[]
  id:number
  isEnabled:number
  x:Boolean = true

  disable:boolean = true
  constructor(private router:ActivatedRoute,
    private route:Router) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id']
    this.isEnabled = this.router.snapshot.params['isEnabled']
    if(this.isEnabled==0){
      this.disable = true
    }
    console.log(this.disable)
    if(this.id===-1){
      this.branch = new Branch(-1,"","","","","","","",[""],0,"",new Date(),"")
    }
    else{
      console.log('else working')
      this.branches = this.branchL.branches
      for(var b of this.branches){
        // console.log(b)
        if(b.id==this.id){
          console.log(b)
          this.branch = b
          break
        }
      }
      
    }
  }

}
