import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnDestroy {

  constructor() { }

  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  isEnabled: boolean = false;
  studentName="";

  ngOnInit() {
  }

  searchStudent() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [5, 10, 15, 20],
    };
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }


}
