import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedirectComponent } from './redirect.component';
import { RedirectRoutingModule } from './redirect-routing';
import { WhitepaperGuardService } from './whitepaper-guard.service';

@NgModule({
  imports: [
    CommonModule,
    RedirectRoutingModule
  ],
  declarations: [
    RedirectComponent,
  ],
  providers: [
    WhitepaperGuardService
  ],
})
export class RedirectModule { }