import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

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

  constructor() { }

  coursewiseCollections : CoursewiseCollection[] = [
    new CoursewiseCollection(1, "Aman", "202002020", "JAVA", "1Z089", 5000, "Online", "Rohit Sir"),
    new CoursewiseCollection(2, "Aashray", "201902019", "C/C++", "1P089", 3000, "Cash", "Rohit Sir")
  ]

  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  isEnabled: boolean = false;
  course;

  ngOnInit() {
  }

  search() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [5, 10, 15, 20],
      search: {search: this.course},
    };
    this.isEnabled = true;
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

}
