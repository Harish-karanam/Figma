import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Stepper } from '../services/stepper';
import { ApplicationDataService } from '../services/application-data';
import { SaveDraftPopupService } from '../services/save-draft-popup';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './form.html',
  styleUrls: ['./form.css']
})
export class Form implements OnInit {
  warehouseOwnershipForm!: FormGroup;
  showFullForm = false;
  selectedOption = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private stepper: Stepper,
    private applicationDataService: ApplicationDataService,
    private popupService: SaveDraftPopupService 
  ) {
    this.warehouseOwnershipForm = this.fb.group({
      leasedWarehouse: ['yes', Validators.required],
      ownerType: ['', Validators.required],
      idType: ['', Validators.required],
      idNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      nationality: ['', [Validators.required, Validators.pattern(/^[A-Za-z ]+$/)]],
      ownerName: ['', [Validators.required, Validators.pattern(/^[A-Za-z ]+$/),
        Validators.minLength(4)
      ]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
      email: ['', [Validators.required, Validators.email]],
      leaseDate: ['', Validators.required],
      expiryDate: ['', Validators.required],
      validFrom: ['', Validators.required],
      agreementFile: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.stepper.setStep(3);
    
    const savedData = this.applicationDataService.getData().ownershipInfo;

    if (savedData) {
      this.warehouseOwnershipForm.patchValue(savedData);
    }

    this.warehouseOwnershipForm.get('leasedWarehouse')?.valueChanges.subscribe(val => {
      this.selectedOption = val;
      this.showFullForm = val === 'yes';
    });

    // set initial value
    this.selectedOption = this.warehouseOwnershipForm.get('leasedWarehouse')?.value;
    this.showFullForm = this.selectedOption === 'yes';
  }

  handleNext(): void {
    if (this.selectedOption === 'no') {
      this.router.navigate(['/third-layout/ware-house-dimensions']);
    } else {
      this.showFullForm = true;
    }
  }

  backToSimpleForm(): void {
    this.showFullForm = false;
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.warehouseOwnershipForm.patchValue({
        agreementFile: input.files[0]
      });

      this.warehouseOwnershipForm.get('agreementFile')?.markAsTouched();
      this.warehouseOwnershipForm.get('agreementFile')?.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.warehouseOwnershipForm.invalid) {
      this.warehouseOwnershipForm.markAllAsTouched();
      return;
    }
     this.applicationDataService.setData(
      'ownershipInfo',
      this.warehouseOwnershipForm.value
    );

    this.router.navigate(['/third-layout/ware-house-dimensions']);
  }

   saveDraft(): void {
  this.popupService.open();
}
}