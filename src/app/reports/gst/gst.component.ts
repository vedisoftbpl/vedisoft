import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-gst',
  templateUrl: './gst.component.html',
  styleUrls: ['./gst.component.css']
})
export class GstComponent implements OnInit {

  dtTrigger:Subject<any> = new Subject();
  @ViewChild(DataTableDirective,{static:false})
  dataTableElement:DataTableDirective
  dtOptions:DataTables.Settings = {}
  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu:[5,10,15,20],
    };
  }

}
