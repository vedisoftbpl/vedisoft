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
      new Course(1, "JAVA","jav","merit","3Months"),
      new Course(2, "C++","cpp","training","3Months")
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
      lengthMenu: [5, 10, 15, 20],
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
  deleteCourseDetails(id){
    let count:number=0;
    for(var c of this.courses){
      if(c.id==id){
        this.courses.splice(count,1)
        break
      }
      else{
        count++
      }

    }


  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }


}


