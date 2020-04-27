import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course} from '../course/course.component';
import { CourseDataService } from '../service/data/course-data.service';


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit  {

  course:Course
  courses:Course[]
  id:number
  isEnabled:number
  x:Boolean = true

  disable:boolean = true
  constructor(private router:ActivatedRoute,
    private route:Router , private courseData:CourseDataService) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id']
    this.isEnabled = this.router.snapshot.params['isEnabled']
    this.course = new Course(-1,"",1,"","") 
    if(this.id!=-1){
      this.courseData.getCourseById(this.id).subscribe(
        data => {
          this.course = data
        }
      )
      
      
    }
   }

   submitForm(){
     if(this.id!=-1){
      this.courseData.saveCourse(this.course,this.course.id).subscribe(
        response =>{
          this.route.navigate(['course'])
        },
        error =>{
          // console.log(error)
        }
      )
     }

     else{
       this.courseData.addCourse(this.course).subscribe(
        response =>{
          this.route.navigate(['course'])
        },
        error =>{
          console.log(error)
        }
       )
     }
     
   }
}

