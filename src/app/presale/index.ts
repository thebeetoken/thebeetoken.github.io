import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresaleComponent } from './presale.component';
import { PresaleRoutingModule } from './presale-routing';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    PresaleRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    PresaleComponent,
  ],
  providers: [],
})
export class PresaleModule { }