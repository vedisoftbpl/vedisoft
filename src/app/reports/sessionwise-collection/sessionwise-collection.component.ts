import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

export class SessionwiseCollection {
  constructor(public id: number, public student: String, public session: String, public registrationNumber: String, public course: String,
  public batch: String, public amount: number, public mode: String, public receivedBy: string) {}
}

@Component({
  selector: 'app-sessionwise-collection',
  templateUrl: './sessionwise-collection.component.html',
  styleUrls: ['./sessionwise-collection.component.css']
})
export class SessionwiseCollectionComponent implements OnInit, OnDestroy {

  constructor() { }

  sessionwiseCollections : SessionwiseCollection[] = [
    new SessionwiseCollection(1, "Aman", "2019", "202002020", "JAVA", "1Z089", 5000, "Online", "Rohit Sir"),
    new SessionwiseCollection(2, "Aashray", "2020", "201902019", "Python", "1P089", 3000, "Cash", "Rohit Sir")
  ]

  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  isEnabled: boolean = false;
  session;

  ngOnInit() {
  }

  search() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [5, 10, 15, 20],
      search: {search: this.session},
      columnDefs:[
        {
          targets: 3,
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
