import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobApplicationFormComponent } from './job-application-form/job-application-form.component';
import { ApplicationSubmitComponent } from './application-submit/application-submit.component';

export const routes: Routes = [
  { path: '', component: JobApplicationFormComponent },
  { path: 'application-submit', component: ApplicationSubmitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
