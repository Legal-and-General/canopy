import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { CanopyModule } from 'canopy';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [ReactiveFormsModule, BrowserModule, CanopyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
