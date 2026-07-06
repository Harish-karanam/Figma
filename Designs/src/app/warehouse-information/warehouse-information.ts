import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Stepper } from '../services/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warehouse-information',
  standalone: false,
  templateUrl: './warehouse-information.html',
  styleUrl: './warehouse-information.css',
})
export class WarehouseInformation {

   constructor(private fb: FormBuilder,
     private stepper:Stepper, private router:Router){

     }
      ngOnInit(){
    this.stepper.setStep(1);
  }
  next(){
    this.router.navigate(['/third-layout/benefit-service'])
  }

  
}
