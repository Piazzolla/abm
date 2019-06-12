import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbmAvisoModule } from './abm-aviso/abm-aviso.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AbmAvisoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
