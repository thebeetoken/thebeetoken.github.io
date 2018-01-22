import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TokenSaleComponent } from './token-sale.component';

@NgModule({
  imports: [
    RouterModule.forChild(<Routes>[
      { path: '', component: TokenSaleComponent},
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class TokenSaleRoutingModule { }