import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationDataService } from '../services/application-data';

function idNumberValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (!value) return null;

  if (!/^[0-9]+$/.test(value)) {
    return { onlyNumbers: true };
  }

  if (value.length !== 10) {
    return { exactLength: true };
  }

  return null;
}

function mobileNumberValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (!value) return null;

  if (!/^[0-9]+$/.test(value)) {
    return { onlyNumbers: true };
  }

  if (value.length !== 9) {
    return { exactLength: true };
  }

  return null;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrls: ['./form.css']
})
export class Form implements OnInit {

  warehouseOwnershipForm!: FormGroup;
  showFullForm = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private applicationDataService: ApplicationDataService
  ) {}

  ngOnInit(): void {
    this.warehouseOwnershipForm = this.fb.group({
      leasedWarehouse: ['yes', Validators.required],
      ownerType: ['', Validators.required],
      idType: ['', Validators.required],

      idNumber: ['', [
        Validators.required,
        idNumberValidator
      ]],

      nationality: ['', [
        Validators.required,
        Validators.pattern(/^[A-Za-z ]+$/)
      ]],

      ownerName: ['', [
        Validators.required,
        Validators.pattern(/^[A-Za-z ]+$/),
        Validators.maxLength(30)
      ]],

      mobileNumber: ['', [
        Validators.required,
        mobileNumberValidator
      ]],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      leaseDate: ['', Validators.required],
      expiryDate: ['', Validators.required],
      validFrom: ['', Validators.required],
      agreementFile: [null, Validators.required]
    });

    const savedData = this.applicationDataService.getData().ownershipInfo;

    if (savedData) {
      this.warehouseOwnershipForm.patchValue(savedData);
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.warehouseOwnershipForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  showDetailsForm(): void {
    this.showFullForm = true;
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

  goToBenefitService(): void {
    this.router.navigate(['/third-layout/benefit-service']);
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
}