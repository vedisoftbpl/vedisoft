import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

export class FacultywiseCollection {
  constructor(public id: number, public student: String, public faculty: String, public registrationNumber: String, public course: String,
  public batch: String, public amount: number, public mode: String, public receivedBy: string) {}
}

@Component({
  selector: 'app-facultywise-collection',
  templateUrl: './facultywise-collection.component.html',
  styleUrls: ['./facultywise-collection.component.css']
})
export class FacultywiseCollectionComponent implements OnInit, OnDestroy {

  constructor() { }

  facultywiseCollections : FacultywiseCollection[] = [
    new FacultywiseCollection(1, "Aman", "Rohit Sir", "080809898", "JAVA", "1Z089", 5000, "Online", "Rohit Sir"),
    new FacultywiseCollection(2, "Aashray", "Pankaj Sir", "080809810", "Python", "1P089", 3000, "Cash", "Rohit Sir")
  ]

  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  isEnabled: boolean = false;
  faculty;

  ngOnInit() {
  }

  search() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [5, 10, 15, 20],
      search: {search: this.faculty},
      columnDefs:[
        {
          targets: 8,
          searchable: false
        }
      ]
    };
    this.isEnabled = true;
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

}
