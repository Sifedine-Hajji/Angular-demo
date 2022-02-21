import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';
import { Exercice1Component } from './exercice1/exercice1.component';


@NgModule({
  declarations: [
    ExerciceComponent,
    Exercice1Component
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule
  ]
})
export class ExerciceModule { }
