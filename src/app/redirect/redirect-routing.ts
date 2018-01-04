import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedirectComponent } from './redirect.component';
import { WhitepaperGuardService } from './whitepaper-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild(<Routes>[
      { path: '', component: RedirectComponent, canActivate: [WhitepaperGuardService]},
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class RedirectRoutingModule { }