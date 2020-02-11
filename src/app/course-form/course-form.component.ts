import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, CourseList } from '../course/course.component';


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit  {

  course= new Course(-1,"",1,"","")
  // courseL = new CourseList()
  courses: Course[]
  id:number
  isEnabled:number
  x:Boolean = true

  disable:boolean = true
  constructor(private router:ActivatedRoute,
    private route:Router) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id']
    this.isEnabled = this.router.snapshot.params['isEnabled']
    if(this.isEnabled==0){
      console.log('if working')
      this.disable = true
    }
    console.log(this.disable)
    if(this.id!=-1){
      console.log('else working')
      // this.courses = this.courseL.courses
      for(var c of this.courses){
        // console.log(b)
        if(c.id==this.id){
          console.log(c)
          this.course = c
          break
        }
      }
      
    }
  }

}

