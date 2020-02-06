import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fees } from '../fees/fees.component';

@Component({
  selector: 'app-fees-form',
  templateUrl: './fees-form.component.html',
  styleUrls: ['./fees-form.component.css']
})
export class FeesFormComponent implements OnInit {


  private batchId: number
  private isEnabled: number
  private feesList: Fees[]
  private fees:Fees

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.fees = new Fees(-1,0.0,new Date(),"")
    this.batchId = this.route.snapshot.params['id']
    this.isEnabled = this.route.snapshot.params['isEnabled']
    console.log(this.batchId + this.isEnabled)
    this.feesList = [new Fees(1, 90000.68, new Date(), "training")
      , new Fees(2, 50000, new Date(), "merit"),
    new Fees(3, 90000.68, new Date(), "training")]
    if(this.batchId != -1 && this.isEnabled == 1){
      for(let fee of this.feesList){
        if(fee.batchId == this.batchId){
          console.log("Entered in if")
          this.fees = fee
        }
      }
      console.log(this.fees)
    }
  }

}
