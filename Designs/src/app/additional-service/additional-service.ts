import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stepper } from '../services/stepper';
import { Router } from '@angular/router';


@Component({
  selector: 'app-additional-service',
  standalone: false,
  templateUrl: './additional-service.html',
  styleUrl: './additional-service.css',
})
export class AdditionalService {
  additionalService:FormGroup;

  constructor(private fb:FormBuilder,
    private stepper:Stepper,
  private router:Router){
    this.additionalService=this.fb.group({

        financiallySound: ['', Validators.required],
      

      financialCrimes: ['', Validators.required],
     

      administrativeSystem: ['', Validators.required],
      

      safetyMeasures: ['', Validators.required],
    

    })

  }

  ngOnInit(){
    this.stepper.setStep(7);
  }
    get f() {
    return this.additionalService.controls;
  }

  next() {

    if (this.additionalService.invalid) {
      this.additionalService.markAllAsTouched();
      return;
    }

    console.log(this.additionalService.value);

    this.additionalService.reset();
     this.router.navigate(['/third-layout/summary']);

  }

}
