import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Stepper } from '../services/stepper';
import { Router } from '@angular/router';
import { SaveDraftPopupService } from '../services/save-draft-popup';

@Component({
  selector: 'app-warehouse-information',
  standalone: false,
  templateUrl: './warehouse-information.html',
  styleUrl: './warehouse-information.css',
})
export class WarehouseInformation {

   constructor(private fb: FormBuilder,
     private stepper:Stepper, private router:Router,
    private popupService: SaveDraftPopupService ){

     }
      ngOnInit(){
    this.stepper.setStep(1);
  }
  next(){
    this.router.navigate(['/third-layout/benefit-service'])
  }
   saveDraft(): void {
  this.popupService.open();
}

  
}
