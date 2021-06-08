import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { DoctoraddComponent } from './doctoradd/doctoradd.component';
import { DoctorlistComponent } from './doctorlist/doctorlist.component';



const routes: Routes = [
  {
    path: 'doctor', component: DoctorComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: DoctorlistComponent},
      { path: 'add', component: DoctoraddComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
