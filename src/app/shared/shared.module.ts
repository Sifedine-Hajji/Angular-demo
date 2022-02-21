import { ToFarenheitPipe } from './../pipes/to-farenheit.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToMinutesPipe } from '../pipes/secToMin/to-minutes.pipe';



@NgModule({
  declarations: [
    ToFarenheitPipe,
    ToMinutesPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToFarenheitPipe,
    ToMinutesPipe,
  ]
})
export class SharedModule { }
