import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import cssVars from 'css-vars-ponyfill';

import { CanopyModule } from 'canopy';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabStoryContentComponent } from './tab-story-content.component';

@NgModule({
  declarations: [AppComponent, TabStoryContentComponent],
  imports: [AppRoutingModule, ReactiveFormsModule, BrowserModule, CanopyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    cssVars({ watch: true });
  }
}
