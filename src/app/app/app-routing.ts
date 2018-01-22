import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(<Routes>[
      { path: '', pathMatch: 'full', loadChildren: '../token-sale#TokenSaleModule' },
      { path: 'presale', loadChildren: '../presale#PresaleModule' },
      { path: 'home', loadChildren: '../home#HomeModule' },
      { path: 'whitepaper', loadChildren: '../redirect#RedirectModule' }
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }