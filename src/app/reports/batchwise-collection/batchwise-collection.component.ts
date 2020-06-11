import { Component, OnInit } from '@angular/core';
import { BatchDataService } from 'src/app/service/data/batch-data.service';
import { RouterGuardService } from 'src/app/service/router-guard.service';
import { FeeDataService } from 'src/app/service/data/fee-data.service';
import { Batch } from 'src/app/batch/batch.component';
import { Fees } from 'src/app/fees/fees.component';
import { BatchwiseCollectionService } from 'src/app/service/data/batchwise-collection.service';

@Component({
  selector: 'app-batchwise-collection',
  templateUrl: './batchwise-collection.component.html',
  styleUrls: ['./batchwise-collection.component.css']
})
export class BatchwiseCollectionComponent implements OnInit {

  constructor(private batchServive: BatchDataService, private routeGuardService: RouterGuardService, private feeService: FeeDataService,
    private batchWiseCollectionService: BatchwiseCollectionService) { }
  batches : Batch[]
  batchId
  fee: Fees[]
  feeAmt
  batchWiseCollection
  isEnabled : boolean = false
  ngOnInit() {
    this.getAllBatches()
  }
  getData() {
    this.batchWiseCollectionService.getBatchWiseCollection(this.batchId).subscribe(
      response => {
        console.log(response[0])
        this.batchWiseCollection = response
      }
    )
    this.isEnabled = true
    this.getFeeByBatchId(this.batchId)
  }
  getAllBatches() {
    this.batchServive.getAllBatches().subscribe(
      response => {
        this.batches = response
      }
    )
  }
  getFeeByBatchId(batchId) {
    this.feeService.getFeeByBatchId(batchId).subscribe(
      response => {
        this.fee = response
        console.log(response)
        this.feeAmt = this.fee[0].famt
      }
    )
    
  }
  getPaidTotal() {
    let sum = 0
   for (let index = 0; index < this.batchWiseCollection.length; index++) {
     sum += this.batchWiseCollection[index][3]
   }
   return sum;
  }
  getDueTotal() {
    let sum = 0
    for (let index = 0; index < this.batchWiseCollection.length; index++) {
      sum += this.feeAmt - this.batchWiseCollection[index][3]
    }
    return sum;
  }

}
