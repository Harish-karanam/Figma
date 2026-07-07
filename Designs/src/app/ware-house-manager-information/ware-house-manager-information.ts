import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stepper } from '../services/stepper';
import { Router } from '@angular/router';
import { ApplicationDataService } from '../services/application-data';
@Component({
  selector: 'app-ware-house-manager-information',
  standalone: false,
  templateUrl: './ware-house-manager-information.html',
  styleUrl: './ware-house-manager-information.css',
})
export class WareHouseManagerInformation {

  warehousemanagerinformation:FormGroup;

  IT=[
    'ABC123',
    'DEF456',
    'GHI789',
    'JKL000'
  ];

  NO=[
    'Indian',
    'Arab',
    'American',
    'German'
  ]

  TE=[
    'Mr.',
    'Mrs',
  ]

  constructor(private fb: FormBuilder,
     private stepper:Stepper,
     private router:Router,
     private applicationDataService:ApplicationDataService
  ){
    this.warehousemanagerinformation=this.fb.group({

      idTypes:['',Validators.required],
      idNumber:['',Validators.required],
      nationalityOwner:['',Validators.required],
      dateOfHiring:['',Validators.required],
      title:['',Validators.required],
      firstName:['',Validators.required],
      surName:['',Validators.required],
      middleName:['',Validators.required],
      fatherName:['',Validators.required],
      grandFatherName:['',Validators.required],
      mobileNo:['',Validators.required],
      email:['',Validators.required],
      


    })

  }

  ngOnInit() {
  this.stepper.setStep(5);

  const savedData = this.applicationDataService.getData().managerInfo;

  if (savedData) {
    this.warehousemanagerinformation.patchValue(savedData);
  }
}
  //numbers
  numbersOnly(event: KeyboardEvent): void {
  const input = event.target as HTMLInputElement;
  const char = event.key;

  // Allow digits
  if (/[0-9]/.test(char)) {
    return;
  }

  // Allow only one decimal point
  if (char === '.' && !input.value.includes('.')) {
    return;
  }

  // Allow control keys
  if (['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(char)) {
    return;
  }

  event.preventDefault();
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

   get f(){
      return this.warehousemanagerinformation.controls;
    }

    saveDraft(){
      console.log(this.warehousemanagerinformation.value);
      
    }

  next() {
  if (this.warehousemanagerinformation.invalid) {
    this.warehousemanagerinformation.markAllAsTouched();
    return;
  }

  this.applicationDataService.setData(
    'managerInfo',
    this.warehousemanagerinformation.value
  );

  this.router.navigate(['/third-layout/bank-info']);
}
}
