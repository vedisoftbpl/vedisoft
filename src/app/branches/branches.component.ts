import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { BranchesService } from '../service/data/branches.service';
import { RouterGuardService } from '../service/router-guard.service';

export class Branch {
  constructor
    (public branchId: number,
      public branchName: string,
      public branchPrefix: string,
      public plotNo: string,
      public locality: string,
      public street: string,
      public city: string,
       public state: string,
       public branchManagerId: number,
       public branchContactNo: string,
       public multipleCourses: string,
      public estbDate: Date,
      public lat: string,
      // public longi:string,
      public createdBy:number,
      public creationDate:Date,
      public extra1:string,
      public extra2:number,
      public lastUpdatedBy:number,
      public lastUpdationDate:Date
      ) { }
}
// export class BranchList{
//   branches: Branch[] 
//   constructor(){
//     this.branches = [
//       new Branch(1, "M.P. NAGAR", "mpn", "3rd Floor, 275", "above Andhra Bank, Near Time Coaching", "Zone-II, Maharana Pratap Nagar", "Bhopal", " Madhya Pradesh",["Rohit Ahuja"],1234556778,"JAVA,C++,C",new Date(),"23.2524° N, 77.4646° E"),
//       new Branch(2, "Indrapuri", "ind", "219-B", " near Gaurav Dairy, Indrapuri C sector", "Sector C, Indrapuri", "Bhopal", "Madhya Pradesh",["Rohit Ahuja"],1234556778,"JAVA,C++,C",new Date(),"23.2524° N, 77.4646° E")
//     ]
//   }
//}
@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit,OnDestroy {
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  constructor( public router:Router, private branchService: BranchesService, private routeGuard: RouterGuardService) { }

  // branches: Branch[] = [
  //   new Branch(1, "M.P. NAGAR", "mpn", "3rd Floor, 275", "above Andhra Bank, Near Time Coaching", "Zone-II, Maharana Pratap Nagar", "Bhopal", " Madhya Pradesh",["Rohit Ahuja"],1234556778,"JAVA,C++,C",new Date(),"23.2524° N, 77.4646° E"),
  //   new Branch(2, "Indrapuri", "ind", "219-B", " near Gaurav Dairy, Indrapuri C sector", "Sector C, Indrapuri", "Bhopal", "Madhya Pradesh",["Rohit Ahuja"],1234556778,"JAVA,C++,C",new Date(),"23.2524° N, 77.4646° E")
  // ]
    // branchL = new BranchList()
    // branches:Branch[] = this.branchL.branches

    branches: Branch[];
    branch: Branch = new Branch(1, "", "", "", "", "", "", "", 0, "", "", new Date(),"",0,new Date(),"",0,0,new Date() )

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [2, 5, 10, 15, 20],
    };
    this.refreshBranches();
    
  }

  refreshBranches(){
    this.branchService.getAllBranches().subscribe(
      response =>{
        this.branches = response,
        this.dtTrigger.next();
      },
      error =>{
        console.log(error)
      }
    )

  }

 

  addBranch() {
      this.router.navigate(['branchForm', -1]);
      console.log("ADD PRESSED")
  }

  getBranchById(branch) {
    
        this.branch = branch;
      
    
  }

  editBranch(id) {
      this.router.navigate(['branchForm', id]);
  }


  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }


}
