import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

export class Fees {
  constructor(
    public batchId: number, public feeAmount: number, public dueDate: Date, public mode: String) {

  }
}

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit, OnDestroy {

  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, {static:false})
  dataTableElement:DataTableDirective;
  dtOptions:DataTables.Settings = {}

  feesList: Fees[]
  constructor(private router: Router) { }

  ngOnInit() {
this.dtOptions = {pagingType: 'full_numbers', lengthMenu:[5,10,15,20]}

    this.feesList = [new Fees(1, 90000.68, new Date(), "training")
      , new Fees(2, 50000, new Date(), "merit"),
    new Fees(3, 90000.68, new Date(), "training")]
  }

  public editFeesDetails(batchId) {
    this.router.navigate(['feesform', batchId, 1])
  }

  public addFeesDetails() {
    console.log("called")
    this.router.navigate(['feesform', -1, 1])
  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }

}
