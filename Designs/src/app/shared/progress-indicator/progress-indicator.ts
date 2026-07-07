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
    'Warehouse Identification &...',
    'Warehouse Ownership',
    'Warehouse Dimensions',
    'Warehouse Manager Inform...',
    'Bank Guarantee Information',
    'Additional Information',
    'Summary'
  ];

    constructor(private stepper: Stepper ){

    this.stepper.currentStep$.subscribe(step=>{
      this.currentStep = step;
    });

  }

   ngOnInit(): void {
    this.stepper.currentStep$.subscribe(step => {
      this.currentStep = step;
    });
  }

  isCompleted(stepIndex: number): boolean {
    return stepIndex + 1 < this.currentStep;
  }

  isCurrent(stepIndex: number): boolean {
    return stepIndex + 1 === this.currentStep;
  }

  isFuture(stepIndex: number): boolean {
    return stepIndex + 1 > this.currentStep;
  }

  isLastStep(stepIndex: number): boolean {
    return stepIndex === this.steps.length - 1;
  }




  
}
