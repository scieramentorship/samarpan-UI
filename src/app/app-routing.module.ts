import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DoctoraddComponent } from './doctor/doctoradd/doctoradd.component';
import { DoctorlistComponent } from './doctor/doctorlist/doctorlist.component';
import { PatientlistComponent } from './patient/patientlist/patientlist.component';
import { PatientaddComponent } from './patient/patientadd/patientadd.component';
import { CampaddComponent } from './camp/campadd/campadd.component';
import { CamplistComponent } from './camp/camplist/camplist.component';


const routes: Routes = [ 
  { path:'dashboard', component:DashboardComponent},
  { path:'login', component:LoginComponent},
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'doctor/add', component: DoctoraddComponent },
  { path: 'doctor/list', component: DoctorlistComponent},
  { path: 'patient/list', component: PatientlistComponent},
  { path: 'patient/add', component: PatientaddComponent},
  { path: 'camp/list', component: CamplistComponent},
  { path: 'camp/add', component: CampaddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
