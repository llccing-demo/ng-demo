import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

import { AppComponent } from './app.component';
import {
  NgZorroAntdModule,
  NZ_I18N,
  en_US,
  NzIconModule,
  zh_CN,
  NzMessageModule,
} from 'ng-zorro-antd';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgZorroAntdModule, BrowserAnimationsModule],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],
})
export class AppModule {}
