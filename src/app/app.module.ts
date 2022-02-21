import { ExerciceRoutingModule } from './exercice/exercice-routing.module';
import { DemoRoutingModule } from './demo/demo-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from './shared/shared.module';
import { ToMinutesPipe } from './pipes/secToMin/to-minutes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoRoutingModule,
    ExerciceRoutingModule,
    SharedModule,
  ],
  exports : [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
