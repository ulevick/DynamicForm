import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-job-application-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  templateUrl: './job-application-form.component.html',
  styleUrls: ['./job-application-form.component.css']
})
export class JobApplicationFormComponent {
  jobForm: FormGroup;
  showAdditionalField: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.jobForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      lookingForJob: [true],
      specialistLevel: ['', Validators.required],
      juniorAnswer: [''],
      midDescription: ['']
    });

    this.jobForm.get('specialistLevel')?.valueChanges.subscribe(value => {
      this.handleSpecialistLevelChange(value);
    });
  }

  handleSpecialistLevelChange(value: string | null): void {
    if (value === 'junior') {
      this.showAdditionalField = true;
      this.jobForm.get('juniorAnswer')?.setValidators([Validators.required, Validators.pattern('4')]);
      this.jobForm.get('midDescription')?.clearValidators();
    } else if (value === 'mid') {
      this.showAdditionalField = true;
      this.jobForm.get('juniorAnswer')?.clearValidators();
      this.jobForm.get('midDescription')?.setValidators([Validators.required, Validators.pattern(/^[^aA]*$/)]);
    } else {
      this.showAdditionalField = false;
      this.jobForm.get('juniorAnswer')?.clearValidators();
      this.jobForm.get('midDescription')?.clearValidators();
    }
    this.jobForm.get('juniorAnswer')?.updateValueAndValidity();
    this.jobForm.get('midDescription')?.updateValueAndValidity();
  }

  onSubmit(): void {
    if (this.jobForm.valid) {
      if (this.jobForm.get('specialistLevel')?.value === 'senior') {
        this.router.navigate(['/application-submit'], { state: { formData: this.jobForm.value } });
      } else {
        console.log('Form Submitted', this.jobForm.value);
      }
    }
  }
}
