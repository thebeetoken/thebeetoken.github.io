import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { PresaleComponent } from './presale.component';
import { PresaleRoutingModule } from './presale-routing';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

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
    ConfirmationComponent,
    RegistrationComponent
  ],
  providers: [],
})
export class PresaleModule { }