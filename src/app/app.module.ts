import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRouting } from './app-routing';
import { AppComponent } from './app.component';
import { JobApplicationFormComponent } from './job-application-form/job-application-form.component';
import { ApplicationSubmitComponent } from './application-submit/application-submit.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    AppRouting,
    AppComponent,
    JobApplicationFormComponent,
    ApplicationSubmitComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
