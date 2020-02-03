import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';

export class Course{
  constructor
    (public id: number,
      public courseName: string,
      public coursePrefix:string,
      public certificateTitle:string,
      public duration:string,
      ) { }
}
export class CourseList{
  courses: Course[] 
  constructor(){
    this.courses = [
      new Course(1, "JAVA","jav","Java","3Months"),
      new Course(2, "C++","cpp","C++","3Months")
    ]
  }
}
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit ,OnDestroy {
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  constructor( public router:Router) { }

    courseL = new CourseList()
    courses:Course[] = this.courseL.courses

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [1,5, 10, 15, 20],
    };
  }

  addCourse(){
    this.router.navigate(['courseform',-1,1])
    // alert('add clicked')

  }

  editCourseDetails(id){
    this.router.navigate(['courseform',id,1])


  }
  viewCourseDetails(id){
    this.router.navigate(['courseform',id,1])


  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }


}


