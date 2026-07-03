import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.warehouseOwnershipForm = this.fb.group({
      leasedWarehouse: ['yes', Validators.required],
      ownerType: ['', Validators.required],
      idType: ['', Validators.required],
      idNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      nationality: ['', [Validators.required, Validators.pattern(/^[A-Za-z ]+$/)]],
      ownerName: ['', [Validators.required, Validators.pattern(/^[A-Za-z ]+$/)]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
      email: ['', [Validators.required, Validators.email]],
      leaseDate: ['', Validators.required],
      expiryDate: ['', Validators.required],
      validFrom: ['', Validators.required],
      agreementFile: [null, Validators.required]
    });
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

  onSubmit(): void {
    if (this.warehouseOwnershipForm.invalid) {
      this.warehouseOwnershipForm.markAllAsTouched();
      return;
    }

    this.router.navigate(['/third-layout/bank-info']);
  }
}