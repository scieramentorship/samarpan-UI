import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampComponent } from './camp.component';
import { CampaddComponent } from './campadd/campadd.component';
import { CamplistComponent } from './camplist/camplist.component';

const routes: Routes = [
  {
    path: 'camp', component: CampComponent,
    children: [
      { path: 'list', component: CamplistComponent},
      { path: 'add', component: CampaddComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampRoutingModule { }
