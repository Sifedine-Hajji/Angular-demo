import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';
import { Exercice1Component } from './exercice1/exercice1.component';
import { Exercice2Component } from './exercice2/exercice2.component';
import { Exercice2EnfantComponent } from './exercice2/exercice2-enfant/exercice2-enfant.component';


@NgModule({
  declarations: [
    ExerciceComponent,
    Exercice1Component,
    Exercice2Component,
    Exercice2EnfantComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ExerciceModule { }
