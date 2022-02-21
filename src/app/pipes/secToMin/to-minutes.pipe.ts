import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'toMinutes'
})
export class ToMinutesPipe implements PipeTransform {

  transform(value: number): string {
    let hours = this.digit(Math.floor(value / 3600), 2); // get hours
    let minutes = this.digit(Math.floor((value % 3600) / 60), 2); // get minutes
    let seconds = this.digit(Math.floor((value % 3600) % 60), 2); // get seconds
    let millisec = this.digit(Math.floor(value / 60) %100, 2); //get milliseconds
    return `${hours} : ${minutes} : ${seconds}.${millisec}`
  }

  digit(num: number, size: number): string {
    let numstr: string = num.toString();
    while (numstr.length < size) {
      numstr = "0" + num
    };
    return numstr;

  }
}
