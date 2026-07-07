import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Stepper {

   private currentStep = new BehaviorSubject<number>(1);

  currentStep$ = this.currentStep.asObservable();

  setStep(step: number) {
    this.currentStep.next(step);
  }

  getStep() {
    return this.currentStep.value;
  }
}
