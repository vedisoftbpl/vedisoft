import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { CourseDataService } from '../service/data/course-data.service';

export class Course{
  constructor
    (public id: number,
      public certiTitle:string,
      public duration:number,
      public name: string,
      public prefix:string
      ) { }
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
    this.courseData.deleteCourse(id).subscribe(
      response =>{
        this.refreshCourses()
      },
      error =>{
        console.log(error)
      }
    )


  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }


}


