import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';

export class Branch {
  constructor
    (public id: number,
      public branchName: string,
      public branchPrefix: string,
      public plotNumber: string,
      public Locality: string,
      public street: string,
      public city: string,
       public state: string,
       public branchManager: any[],
       public contactNumber: number,
       public courses: string,
      public estbDate: Date,
      public latLong: string
      ) { }
}
export class BranchList{
  branches: Branch[] 
  constructor(){
    this.branches = [
      new Branch(1, "M.P. NAGAR", "mpn", "3rd Floor, 275", "above Andhra Bank, Near Time Coaching", "Zone-II, Maharana Pratap Nagar", "Bhopal", " Madhya Pradesh",["Rohit Ahuja"],1234556778,"JAVA,C++,C",new Date(),"23.2524° N, 77.4646° E"),
      new Branch(2, "Indrapuri", "ind", "219-B", " near Gaurav Dairy, Indrapuri C sector", "Sector C, Indrapuri", "Bhopal", "Madhya Pradesh",["Rohit Ahuja"],1234556778,"JAVA,C++,C",new Date(),"23.2524° N, 77.4646° E")
    ]
  }
}
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

  constructor( public router:Router) { }

  // branches: Branch[] = [
  //   new Branch(1, "M.P. NAGAR", "mpn", "3rd Floor, 275", "above Andhra Bank, Near Time Coaching", "Zone-II, Maharana Pratap Nagar", "Bhopal", " Madhya Pradesh",["Rohit Ahuja"],1234556778,"JAVA,C++,C",new Date(),"23.2524° N, 77.4646° E"),
  //   new Branch(2, "Indrapuri", "ind", "219-B", " near Gaurav Dairy, Indrapuri C sector", "Sector C, Indrapuri", "Bhopal", "Madhya Pradesh",["Rohit Ahuja"],1234556778,"JAVA,C++,C",new Date(),"23.2524° N, 77.4646° E")
  // ]
    branchL = new BranchList()
    branches:Branch[] = this.branchL.branches

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [1,5, 10, 15, 20],
    };
  }

  addBranch(){
    this.router.navigate(['branchform',-1,1])
    // alert('add clicked')

  }

  editBranchDetails(id){
    this.router.navigate(['branchform',id,1])


  }

  viewBranchDetails(id){
    this.router.navigate(['branchform',id,0])
  }

  getList(){
    return this.branches;
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }


}
