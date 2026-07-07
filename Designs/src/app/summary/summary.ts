import { Component } from '@angular/core';
import { Stepper } from '../services/stepper';

@Component({
  selector: 'app-summary',
  standalone: false,
  templateUrl: './summary.html',
  styleUrl: './summary.css',
})
export class Summary {

  constructor( private stepper:Stepper){

  }
  ngOnInit(){
    this.stepper.setStep(8);
  }

}
