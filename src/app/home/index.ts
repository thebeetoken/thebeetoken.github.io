import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SubscribeComponent } from '../subscribe/subscribe.component';
import { HeroComponent } from '../hero/hero.component';
import { EmailFormComponent } from '../email-form/email-form.component';
import { RoadmapComponent } from '../roadmap/roadmap.component';
import { TokenDistributionComponent } from '../token-distribution/token-distribution.component';
import { TeamComponent } from '../team/team.component';
import { AdvisorsComponent } from '../advisors/advisors.component';
import { ValuepropsComponent } from '../valueprops/valueprops.component';
import { PartnersComponent } from '../partners/partners.component';
import { MediaComponent } from '../media/media.component';
import { EmailBarComponent } from '../email-bar/email-bar.component';
// import { TelegramBarComponent } from '../telegram-bar/telegram-bar.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SubscribeComponent,
    HeroComponent,
    EmailFormComponent,
    RoadmapComponent,
    TokenDistributionComponent,
    TeamComponent,
    AdvisorsComponent,
    ValuepropsComponent,
    PartnersComponent,
    MediaComponent,
    EmailBarComponent
  ],
  providers: [],
})
export class HomeModule { }