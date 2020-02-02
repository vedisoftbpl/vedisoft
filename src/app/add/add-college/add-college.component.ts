import { Component, OnInit } from '@angular/core';
import { College } from 'src/app/college/college.component';

@Component({
  selector: 'app-add-college',
  templateUrl: './add-college.component.html',
  styleUrls: ['./add-college.component.css']
})
export class AddCollegeComponent implements OnInit {

  college: College;

  constructor() { }

  ngOnInit() {
    this.college = new College(null, "", "", "", "", [""]);
  }

}
