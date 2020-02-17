import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { CourseDataService } from '../service/data/course-data.service';

export class Course{
  constructor
    (public id: number,
      public certificateTitle:string,
      public duration:number,
      public courseName: string,
      public coursePrefix:string
      ) { }
}
export class CourseList{
  courses: Course[] 
  constructor(){
    this.courses = [
      new Course(1, "JAVA",3,"merit","3Months"),
      new Course(2, "C++",2,"training","3Months")
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

  constructor( public router:Router, public courseData:CourseDataService) { }

    // courseL = new CourseList()

    courses:Course[]
    username = ' '

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [5, 10, 15, 20],
    };
    

    this.username = sessionStorage.getItem('authenticatedUser')
    this.refreshCourses();
    this.dtTrigger.next()
    // this.dtTrigger.subscribe();
  }

  refreshCourses(){
    this.courseData.getAllCourses().subscribe(
      response => {
        this.courses = response
        console.log(response)
        console.log('now courses')
        console.log(this.courses)
      }
    )


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


