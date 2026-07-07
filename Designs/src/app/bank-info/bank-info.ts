import { Component } from '@angular/core';
import { Stepper } from '../services/stepper';

@Component({
  selector: 'app-bank-info',
  standalone: false,
  templateUrl: './bank-info.html',
  styleUrl: './bank-info.css',
})
export class BankInfo {
  constructor(private stepper:Stepper){

  }
  ngOnInit(){
    this.stepper.setStep(6);
  }
}
