import { DemoModule } from './demo/demo.module';
import { DemoComponent } from './demo/demo.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { ExerciceModule } from './exercice/exercice.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'demo', loadChildren : () => import('./demo/demo.module').then(m => m.DemoModule)
  },
  {
    path : 'exercice', loadChildren : () => import('./exercice/exercice.module').then(m => m.ExerciceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
