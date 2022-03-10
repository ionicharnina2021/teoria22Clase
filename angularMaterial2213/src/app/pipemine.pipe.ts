import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipemine'
})
export class PipeminePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return <number>value+1;
  }

}
