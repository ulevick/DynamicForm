import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-application-submit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './application-submit.component.html',
  styleUrls: ['./application-submit.component.css']
})
export class ApplicationSubmitComponent implements OnInit {
  submitForm: FormGroup;
  showMotivationField: boolean = false;
  formData: any;

  constructor(private fb: FormBuilder, private router: Router) {
    this.submitForm = this.fb.group({
      motivationLetter: ['', Validators.minLength(140)]
    });
  }

  ngOnInit(): void {
    this.formData = history.state.formData;
    if (this.formData && !this.formData.lookingForJob) {
      this.showMotivationField = true;
      this.submitForm.get('motivationLetter')?.setValidators([Validators.required, Validators.minLength(140)]);
    }
  }

  onSubmit(): void {
    if (this.showMotivationField && !this.submitForm.valid) {
      return;
    }
    const finalData = { ...this.formData, motivationLetter: this.submitForm.get('motivationLetter')?.value };
    console.log('Form Submitted', finalData);
    alert(`Form Submitted: ${JSON.stringify(finalData, null, 2)}`);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
