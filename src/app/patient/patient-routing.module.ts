import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { PatientaddComponent } from './patientadd/patientadd.component';


const routes: Routes = [
  { path: 'patient/list', component: PatientlistComponent},
  { path: 'patient/add', component: PatientaddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }


