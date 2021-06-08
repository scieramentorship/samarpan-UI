import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { DoctorlistComponent } from './doctorlist/doctorlist.component';
import { DoctoraddComponent } from './doctoradd/doctoradd.component';


@NgModule({
  declarations: [DoctorComponent, DoctorlistComponent, DoctoraddComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
