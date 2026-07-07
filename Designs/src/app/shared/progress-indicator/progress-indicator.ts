import { Component } from '@angular/core';
import { Stepper } from '../../services/stepper';

@Component({
  selector: 'app-progress-indicator',
  standalone: false,
  templateUrl: './progress-indicator.html',
  styleUrl: './progress-indicator.css',
})
export class ProgressIndicator {

  currentStep=1;
    steps = [
    'Warehouse Information',
    'Warehouse Identification',
    'Warehouse Ownership',
    'Warehouse Dimensions',
    'Warehouse Manager Information',
    'Bank Guarantee Information',
    'Additional Information',
    'Summary'
  ];

    constructor(private stepper: Stepper ){

    this.stepper.currentStep$.subscribe(step=>{
      this.currentStep = step;
    });

  }
}
