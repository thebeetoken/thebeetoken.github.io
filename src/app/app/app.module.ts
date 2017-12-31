import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';

// import { HeaderComponent } from '../header/header.component';
// import { FooterComponent } from '../footer/footer.component';
// import { SubscribeComponent } from '../subscribe/subscribe.component';
// import { HeroComponent } from '../hero/hero.component';
// import { EmailFormComponent } from '../email-form/email-form.component';
// import { RoadmapComponent } from '../roadmap/roadmap.component';
// import { TokenDistributionComponent } from '../token-distribution/token-distribution.component';
// import { TeamComponent } from '../team/team.component';
// import { AdvisorsComponent } from '../advisors/advisors.component';
// import { ValuepropsComponent } from '../valueprops/valueprops.component';
// import { PartnersComponent } from '../partners/partners.component';
// import { MediaComponent } from '../media/media.component';
// import { EmailBarComponent } from '../email-bar/email-bar.component';
// import { TelegramBarComponent } from './telegram-bar/telegram-bar.component';
import { RedirectComponent } from '../redirect/redirect.component';
import { WhitepaperGuardService } from '../whitepaper-guard.service';

// const appRoutes: Routes = [
//   { path: 'whitepaper', component: RedirectComponent, canActivate: [WhitepaperGuardService] }
// ];

// HeaderComponent,
// FooterComponent,
// SubscribeComponent,
// HeroComponent,
// EmailFormComponent,
// RoadmapComponent,
// TokenDistributionComponent,
// TeamComponent,
// AdvisorsComponent,
// ValuepropsComponent,
// PartnersComponent,
// MediaComponent,
// EmailBarComponent,


@NgModule({
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule
  ],
  declarations: [
    AppComponent,
    RedirectComponent
  ],
  providers: [
    WhitepaperGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
