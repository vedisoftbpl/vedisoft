import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

export class BadDebt {
  constructor(public id: number, public student: String, public session: String, public registrationNumber: String, public course: String,
    public batch: String, public totalFee: number, public paidFee: number) { }
  badDebt: number = this.totalFee - this.paidFee;
  

}

@Component({
  selector: 'app-bad-debts',
  templateUrl: './bad-debts.component.html',
  styleUrls: ['./bad-debts.component.css']
})
export class BadDebtsComponent implements OnInit, OnDestroy {

  constructor() { }

  badDebts: BadDebt[] = [
    new BadDebt(1, "Aman", "2019", "202002020", "JAVA", "1Z089", 5000, 2000),
    new BadDebt(2, "Aashray", "2020", "201902019", "Python", "1P089", 3000, 1000),
    new BadDebt(3, "Bharat", "2020", "201902019", "Python", "1P089", 3000, 1000)
  ]

  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  isEnabled: boolean = false;
  session;
  badDebtTotal = 0;
   





  ngOnInit() {
    
  }

  search() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [5, 10, 15, 20],
      search: { search: this.session },
      columnDefs: [
        {
          targets: 3,
          searchable: false
        }
      ],

    };
    this.isEnabled = true;
    for (var bD in this.badDebts) {
      if(this.badDebts[bD].session == this.session){
        this.badDebtTotal += this.badDebts[bD].badDebt;
      }
    }

  }



  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }


}
