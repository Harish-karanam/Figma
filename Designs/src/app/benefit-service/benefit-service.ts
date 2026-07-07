import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stepper } from '../services/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-benefit-service',
  standalone: false,
  templateUrl: './benefit-service.html',
  styleUrl: './benefit-service.css',
})
export class BenefitService {
   warehouseForm: FormGroup;

  cities = [
    'Riyadh',
    'Jeddah',
    'Dammam',
    'Makkah',
    'Madinah'
  ];

  constructor(private fb: FormBuilder,
    private stepper:Stepper, private router:Router
  ) {

    this.warehouseForm = this.fb.group({

      warehouseName: ['', [
        Validators.required,
        Validators.minLength(4)
     // Validators.pattern('^[a-zA-Z]+$'),
    ],],

      buildingNumber: ['', [
        Validators.required,
         Validators.minLength(4)
        // Validators.pattern('^[0-9]+$')
      ]],

       streetName: ['', [
    Validators.required,
    Validators.minLength(4)
   // Validators.pattern('^[a-zA-Z0-9 ]+$')
  ]],

  region: ['', [
    Validators.required,
     Validators.minLength(4)
  //  Validators.pattern('^[a-zA-Z ]+$')
  ]],

  city: ['', Validators.required],

  postalCode: ['', [
    Validators.required,
    Validators.pattern('^[0-9]{6}$')
  ]],

  additionalNo: ['', [
    Validators.required,
  //  Validators.pattern('^[0-9]+$')
  ]],

  quarter: ['', [
    Validators.required,
    Validators.pattern('^[a-zA-Z0-9 ]+$')
  ]],

  latitude: ['', [
    Validators.required,
   Validators.pattern('^-?[0-9]{1,3}(\\.[0-9]+)?$')
  ]],

  longitude: ['', [
    Validators.required,
    Validators.pattern('^-?[0-9]{1,3}(\\.[0-9]+)?$')
  ]]

    });
  }
  ngOnInit(){

this.stepper.setStep(2);

}
  

// numbers 

  numbersOnly(event:KeyboardEvent):void{
     const charCode = event.which ? event.which : event.keyCode;

       if (charCode < 48 || charCode > 57) {
    event.preventDefault();
  }

  }

//letters 

lettersOnly(event: KeyboardEvent): void {

  const charCode = event.which ? event.which : event.keyCode;

  
  if (
    !(charCode >= 65 && charCode <= 90) &&
    !(charCode >= 97 && charCode <= 122)
  ) {
    event.preventDefault();
  }

}

  get f() {
    return this.warehouseForm.controls;
  }

  saveDraft() {

    console.log(this.warehouseForm.value);

  }

  next() {

    if (this.warehouseForm.invalid) {

      this.warehouseForm.markAllAsTouched();

      return;
    }

    console.log(this.warehouseForm.value);

    this.warehouseForm.reset();
    this.router.navigate(['/third-layout/form'])
    

  }

}


