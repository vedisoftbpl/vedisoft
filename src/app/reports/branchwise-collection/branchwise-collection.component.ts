import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

export class BranchwiseCollection {
  constructor(public id: number, public student: String, public branch: String, public registrationNumber: String, public course: String,
  public batch: String, public amount: number, public mode: String, public receivedBy: string) {}
}

@Component({
  selector: 'app-branchwise-collection',
  templateUrl: './branchwise-collection.component.html',
  styleUrls: ['./branchwise-collection.component.css']
})
export class BranchwiseCollectionComponent implements OnInit, OnDestroy {

  constructor() { }

  branchName: String;

  // branchwiseCollections : BranchwiseCollection[] = [
  //   new BranchwiseCollection(1, "Aman", "MP Nagar", "080809898", "JAVA", "1Z089", 5000, "Online", "Rohit Sir"),
  //   new BranchwiseCollection(2, "Aashray", "Indrapuri", "080809810", "Python", "1P089", 3000, "Cash", "Rohit Sir")
  // ]

  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  isEnabled: boolean = false;
  

  ngOnInit() {
  }


  // search() {
  //   this.dtOptions = {
  //     pagingType: 'full_numbers',
  //     lengthMenu: [5, 10, 15, 20],
  //     search: {search: this.branch}
  //   };
  //   this.isEnabled = true;
  // }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }


}
