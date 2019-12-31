import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CanopyModule } from 'canopy';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CanopyModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
