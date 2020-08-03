import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdDirective } from './directives/ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroJobAddComponent } from './hero-job-add.component';
import { HeroProfileComponent } from './hero-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAddComponent,
    HeroProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    HeroJobAddComponent,
    HeroProfileComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
