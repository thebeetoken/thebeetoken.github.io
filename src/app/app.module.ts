import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HeroComponent } from './hero/hero.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { TeamComponent } from './team/team.component';
import { AdvisorsComponent } from './advisors/advisors.component';
import { ValuepropsComponent } from './valueprops/valueprops.component';
import { MediaComponent } from './media/media.component';
import { EmailBarComponent } from './email-bar/email-bar.component';
// import { TelegramBarComponent } from './telegram-bar/telegram-bar.component';
import { RedirectComponent } from './redirect/redirect.component';
import { WhitepaperGuardService } from './whitepaper-guard.service';
import { KycService } from './kyc.service';
import { VerifyComponent } from './verify/verify.component';

const appRoutes: Routes = [
  {
    path: 'whitepaper', 
    component: RedirectComponent,
    canActivate: [WhitepaperGuardService]
  },
  // { 
  //   path: 'kyc',
  //   component: VerifyComponent,
  //   children: [
  //     // canActivate: [KycService] 
  //   ]
  // },
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
    TeamComponent,
    AdvisorsComponent,
    ValuepropsComponent,
    MediaComponent,
    EmailBarComponent,
    RedirectComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2PageScrollModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    WhitepaperGuardService,
    // KycService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
