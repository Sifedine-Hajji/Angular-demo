import { Exercice2Component } from './exercice2/exercice2.component';
import { Exercice1Component } from './exercice1/exercice1.component';
import { ExerciceComponent } from './exercice.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path : 'exercice', component : ExerciceComponent, children : [
      {path : 'exercice1', component : Exercice1Component},
      {path : 'exercice2', component : Exercice2Component},
    
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
