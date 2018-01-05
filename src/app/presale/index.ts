import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { PresaleComponent } from './presale.component';
import { PresaleRoutingModule } from './presale-routing';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ICOComponent } from './ico/ico.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PresaleRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    PresaleComponent,
    ICOComponent
  ],
  providers: [],
})
export class PresaleModule { }