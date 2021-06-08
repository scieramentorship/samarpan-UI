import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { PatientaddComponent } from './patientadd/patientadd.component';


@NgModule({
  declarations: [PatientComponent,  PatientlistComponent, PatientaddComponent],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
