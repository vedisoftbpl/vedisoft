import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { PersonTypeService } from '../service/data/person-type.service';

export class PersonType{
  constructor(public pid: number, public createdBy: number, public createdDate: Date, 
    public lastUpdatedBy: number, public lastUpdatedDate: Date, public personType: string,
    public personTypeId: string){}
}

@Component({
  selector: 'app-person-type',
  templateUrl: './person-type.component.html',
  styleUrls: ['./person-type.component.css']
})
export class PersonTypeComponent implements OnInit, OnDestroy {

  

  

  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, {static: false})
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  personTypes: PersonType[]
  //  = [
  //   new PersonType(1, 20200908, new Date(), 20200908, new Date(), "Front Office Incharge", "ADMIN"),
  //   new PersonType(2, 20201010, new Date(), 20201228, new Date(), "Manager", "ADMIN"),
  //   new PersonType(3, 20201228, new Date(), 20201119, new Date(), "Faculty", "ADMIN"),
  // ]
  
  constructor(private personTypeService : PersonTypeService) {}


  ngOnInit() {
    this.dtTrigger.next();
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [ 5, 10, 15, 20 ],
      columnDefs: [
        { targets: [2, 4], type: 'date' }
      ]
    };
    this.refreshPersonTypes();
  }

  refreshPersonTypes() {
    this.personTypeService.getAllPersonTypes().subscribe(
      response => {
        this.personTypes = response,
        this.dtTrigger.next()
      },
      error => {
        console.log(error)
      }
    )
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }


  
  


}
