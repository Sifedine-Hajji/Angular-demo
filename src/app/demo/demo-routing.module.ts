import { Demo7Component } from './demo7/demo7.component';
import { Demo6Component } from './demo6/demo6.component';
import { Demo5Component } from './demo5/demo5.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo1Component } from './demo1/demo1.component';
import { DemoComponent } from './demo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'demo', component : DemoComponent, children : [
      {path : 'demo1', component : Demo1Component},
      {path : 'demo2', component : Demo2Component},
      {path : 'demo3', component : Demo3Component},
      {path : 'demo4', component : Demo4Component},
      {path : 'demo5', component : Demo5Component},
      {path : 'demo6', component : Demo6Component},
      {path : 'demo7', component : Demo7Component},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }