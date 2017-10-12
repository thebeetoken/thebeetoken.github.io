import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

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
    MediaComponent
  ],
  imports: [
    BrowserModule,
    Ng2PageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
