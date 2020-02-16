import { Component, OnInit } from '@angular/core';
import { CollegeList } from 'src/app/college/college.component';

@Component({
  selector: 'app-add-college',
  templateUrl: './add-college.component.html',
  styleUrls: ['./add-college.component.css']
})
export class AddCollegeComponent implements OnInit {

  college: CollegeList;

  constructor() { }

  ngOnInit() {
    this.college = new CollegeList(1, "", "", "", "", [""]);
  }

}
