import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-certi-request',
  templateUrl: './certi-request.component.html',
  styleUrls: ['./certi-request.component.css']
})


export class CertiRequestComponent implements OnInit, OnDestroy {

  constructor() { }

  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, {static: false})
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};


  

  ngOnInit() {
    this.dtTrigger.next();
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [ 5, 10, 15, 20 ],
      columnDefs: [


        { targets: 2, type: 'date' }
    
      ]
      
    };
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

}
