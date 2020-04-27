import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Batch, BatchComponent } from '../batch/batch.component';
import { Session } from '../session/session.component';

@Component({
  selector: 'app-batch-form',
  templateUrl: './batch-form.component.html',
  styleUrls: ['./batch-form.component.css']
})
export class BatchFormComponent implements OnInit {
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    }

  }

