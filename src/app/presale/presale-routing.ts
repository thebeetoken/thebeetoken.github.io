import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresaleComponent } from './presale.component';
import { ICOComponent } from './ico/ico.component';

@NgModule({
  imports: [
    RouterModule.forChild(<Routes>[
      { path: '',  pathMatch: 'full', component: ICOComponent},
      // { path: '',  pathMatch: 'full', component: PresaleComponent},
      { path: 'ico',  component: ICOComponent },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class PresaleRoutingModule { }