import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampRoutingModule } from './camp-routing.module';
import { CampComponent } from './camp.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { CamplistComponent } from './camplist/camplist.component';
import { CampaddComponent } from './campadd/campadd.component';


@NgModule({
  declarations: [CampComponent, ListComponent, AddComponent, CamplistComponent, CampaddComponent],
  imports: [
    CommonModule,
    CampRoutingModule
  ]
})
export class CampModule { }
