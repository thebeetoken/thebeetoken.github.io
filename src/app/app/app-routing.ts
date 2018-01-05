import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(<Routes>[
      { path: '', pathMatch: 'full', loadChildren: '../presale#PresaleModule' },
      // { path: '', pathMatch: 'full', loadChildren: '../home#HomeModule' },
      { path: 'presale', pathMatch: 'full', loadChildren: '../presale#PresaleModule' },
      { path: 'whitepaper', loadChildren: '../redirect#RedirectModule' }
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }