import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(<Routes>[
      { path: '', pathMatch: 'full', loadChildren: '../home#HomeModule' }
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }