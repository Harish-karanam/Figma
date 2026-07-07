import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stepper } from '../services/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ware-house-dimensions',
  standalone: false,
  templateUrl: './ware-house-dimensions.html',
  styleUrl: './ware-house-dimensions.css',
})
export class WareHouseDimensions {
  warehouseDimension:FormGroup;

  constructor(private fb:FormBuilder,
    private stepper:Stepper, private router:Router
  ){
    this.warehouseDimension=this.fb.group({

      Length:['',[
          Validators.required,
          // Validators.pattern('^[1-9][0-9]*$')
          Validators.pattern(/^(?!0+(\.0+)?$)[0-9]+(\.[0-9]+)?$/)
      ]],

      Width:['',[
        Validators.required,
       Validators.pattern(/^(?!0+(\.0+)?$)[0-9]+(\.[0-9]+)?$/)
      ]],

      Height:['',[
        Validators.required,
        Validators.pattern(/^(?!0+(\.0+)?$)[0-9]+(\.[0-9]+)?$/)
      ]],

      CubicMeters:['',[
        Validators.required,
        Validators.pattern(/^(?!0+(\.0+)?$)[0-9]+(\.[0-9]+)?$/)
      ]],

      SquareMeters:['',[
        Validators.required,
       Validators.pattern(/^(?!0+(\.0+)?$)[0-9]+(\.[0-9]+)?$/)
      ]]
      
    });

    
  }

  ngOnInit(){
    this.stepper.setStep(4);
  }

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

    get f(){
      return this.warehouseDimension.controls;
    }

    saveDraft(){
      console.log(this.warehouseDimension.value);
      
    }

    next(){
      if(this.warehouseDimension.invalid){
        this.warehouseDimension.markAllAsTouched();
        return;

      }
      console.log(this.warehouseDimension.value);
      this.warehouseDimension.reset();
      this.router.navigate(['/third-layout/ware-house-manager-information'])
      
    }
}
