import { Component, OnInit } from '@angular/core';
import { ApplicationDataService } from '../services/application-data';
import { Stepper } from '../services/stepper';
import { SaveDraftPopupService } from '../services/save-draft-popup';

@Component({
  selector: 'app-summary',
  standalone: false,
  templateUrl: './summary.html',
  styleUrl: './summary.css',
})
export class Summary implements OnInit {

  data: any;

  constructor(private applicationDataService: ApplicationDataService,private stepper:Stepper,
    private popupService: SaveDraftPopupService 
  ) {}

  ngOnInit() {
    this.data = this.applicationDataService.getData();

    console.log(this.data);
    this.stepper.setStep(8)
    
  }

  saveDraft(): void {
  this.popupService.open();
}
}