import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HeroComponent } from './hero/hero.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { TokenDistributionComponent } from './token-distribution/token-distribution.component';
import { TeamComponent } from './team/team.component';
import { AdvisorsComponent } from './advisors/advisors.component';
import { ValuepropsComponent } from './valueprops/valueprops.component';
import { PartnersComponent } from './partners/partners.component';
import { MediaComponent } from './media/media.component';
import { EmailBarComponent } from './email-bar/email-bar.component';
// import { TelegramBarComponent } from './telegram-bar/telegram-bar.component';
import { RedirectComponent } from './redirect/redirect.component';
import { WhitepaperGuardService } from './whitepaper-guard.service';
import { KycService } from './kyc.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SoldOutComponent } from './sold-out/sold-out.component';

const appRoutes: Routes = [
  { path: 'whitepaper', component: RedirectComponent, canActivate: [WhitepaperGuardService] }
];


@NgModule({
  declarations: [
    AppComponent,
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
    EmailBarComponent,
    RedirectComponent,
    SignUpComponent,
    SoldOutComponent
  ],
  imports: [
    BrowserModule,
    Ng2PageScrollModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    WhitepaperGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
