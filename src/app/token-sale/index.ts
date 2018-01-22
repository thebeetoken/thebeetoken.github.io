import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TokenSaleComponent } from './token-sale.component';
import { TokenSaleRoutingModule } from './token-sale-routing';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    TokenSaleRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    TokenSaleComponent,
  ],
  providers: [],
})
export class TokenSaleModule { }