import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';

export class CollegeList {
  constructor(public id: number, public city: string, public group: string, public collegeName: string, public prefix: string, 
    public Student: any) {}
 }

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit, OnDestroy {

  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, {static: false})
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  colleges: CollegeList[] = [
    new CollegeList(1, "Bhopal", "LNCT", "LNCTS", "LN", ["Aman", "Bharat", "Aashray"]),
    new CollegeList(2, "Bhopal", "Oriental", "OIST", "OI", ["Kapil", "Somil"]),
    new CollegeList(3, "Bhopal", "Sagar", "SIRT", "SI", ["Abhishek"]),
  ]

  constructor(public router: Router) { }

  

  ngOnInit() {
    this.dtTrigger.next();
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [ 5, 10, 15, 20 ],
    };
  }

  showStudents() {
  }

  addCollege() {
      this.router.navigate(['/addCollege']);
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

}
