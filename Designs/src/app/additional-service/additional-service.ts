import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stepper } from '../services/stepper';
import { ApplicationDataService } from '../services/application-data';
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
  private applicationDataService:ApplicationDataService,
private router:Router){
    this.additionalService=this.fb.group({

        financiallySound: ['', Validators.required],
      

      financialCrimes: ['', Validators.required],
     

      administrativeSystem: ['', Validators.required],
      

      safetyMeasures: ['', Validators.required],
    

    })

  }
ngOnInit() {
  this.stepper.setStep(7);

  const savedData = this.applicationDataService.getData().additionalInfo;

  if (savedData) {
    this.additionalService.patchValue(savedData);
  }
}
    get f() {
    return this.additionalService.controls;
  }

  next() {

  if (this.additionalService.invalid) {
    this.additionalService.markAllAsTouched();
    return;
  }

  this.applicationDataService.setData(
    'additionalInfo',
    this.additionalService.value
  );

  this.router.navigate(['/third-layout/summary']);
}

}
