import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RxCreateComponent } from './rx-create/rx-create.component';
import { ControlStreamComponent } from './control-stream/control-stream.component';
import { NewValueComponent } from './new-value/new-value.component';
import { AppStateComponent } from './app-state/app-state.component';

@NgModule({
  declarations: [
    AppComponent,
    RxCreateComponent,
    ControlStreamComponent,
    NewValueComponent,
    AppStateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
