import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresaleComponent } from './presale.component';

@NgModule({
  imports: [
    RouterModule.forChild(<Routes>[
      { path: '', component: PresaleComponent},
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class PresaleRoutingModule { }