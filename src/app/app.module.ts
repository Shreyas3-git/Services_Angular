import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routingComponent} from './app-routing.module';

import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/Material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
