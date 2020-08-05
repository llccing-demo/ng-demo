import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxJquerySliderComponent } from './ngx-jquery-slider/ngx-jquery-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxJquerySliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
