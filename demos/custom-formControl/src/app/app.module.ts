import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 使用 formControl 之类的指令，这个一定不要忘记 import
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NgxJquerySliderComponent } from './ngx-jquery-slider/ngx-jquery-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxJquerySliderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
