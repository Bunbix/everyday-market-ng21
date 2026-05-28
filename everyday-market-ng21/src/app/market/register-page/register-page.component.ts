import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  provinces = [
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick',
    'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island',
    'Quebec', 'Saskatchewan', 'Northwest Territories', 'Nunavut', 'Yukon'
  ];
  countries = ['United States', 'Canada'];

  registrationForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/), Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    dob: ['', [Validators.required]],
    streetAddress: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9\s]+$/)]],
    province: ['', Validators.required],
    country: ['', Validators.required],
    terms: [false, Validators.requiredTrue]
  }, { validators: this.canadaValidator });

  canadaValidator(group: AbstractControl): ValidationErrors | null {
    const country = group.get('country')?.value;
    return country === 'Canada' ? null : { mustBeCanada: true };
  }

  isInvalid(fieldName: string): boolean {
    const field = this.registrationForm.get(fieldName);
    return field ? (field.invalid && (field.touched || field.dirty)) : false;
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form submitted:', this.registrationForm.value);
      this.router.navigate(['/products']);
    }
  }
}