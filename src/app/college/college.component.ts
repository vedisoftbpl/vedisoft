import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { CollegeDataService } from '../service/data/college-data.service';

export class College {
  constructor(public id: number, 
    public city: string, 
    public group: string, 
    public name: string, 
    public prefix: string
    ) {}
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

  constructor(public router: Router , private collegeData:CollegeDataService) { }

  colleges:College[]

  ngOnInit() {
    this.dtTrigger.next();
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [ 5, 10, 15, 20 ],
    };

    this.refreshColleges();
    this.dtTrigger.next()
  }

  refreshColleges(){
    this.collegeData.getAllColleges().subscribe(
      response =>{
        this.colleges = response
        this.dtTrigger.next()
      },
      error =>{
        console.log(error)
      }
    )

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
