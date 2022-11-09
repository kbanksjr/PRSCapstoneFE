import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rejection'
})
export class RejectionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
