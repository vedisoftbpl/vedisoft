import { Component, OnInit } from '@angular/core';
import { College } from 'src/app/college/college.component';
import { CollegeDataService } from 'src/app/service/data/college-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-college',
  templateUrl: './add-college.component.html',
  styleUrls: ['./add-college.component.css']
})
export class AddCollegeComponent implements OnInit {

  college: College;

  constructor(private collegeData:CollegeDataService , private route:Router) { }

  ngOnInit() {
    this.college = new College(-1, "", "", "", "");
  }

  submitForm(){
      this.college.prefix = this.college.name
      this.collegeData.addNewCollege(this.college).subscribe(
       response =>{
         this.route.navigate(['college'])
       },
       error =>{
         console.log(error)
       }
      )
      console.log(this.college)
  
    
  }

}
