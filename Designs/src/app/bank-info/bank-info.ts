import { Component } from '@angular/core';
import { Stepper } from '../services/stepper';
import { SaveDraftPopupService } from '../services/save-draft-popup';


@Component({
  selector: 'app-bank-info',
  standalone: false,
  templateUrl: './bank-info.html',
  styleUrl: './bank-info.css',
})
export class BankInfo {
  constructor(private stepper:Stepper,
    private popupService: SaveDraftPopupService 
  ){

  }
  ngOnInit(){
    this.stepper.setStep(6);
  }
   saveDraft(): void {
  this.popupService.open();
}
}
