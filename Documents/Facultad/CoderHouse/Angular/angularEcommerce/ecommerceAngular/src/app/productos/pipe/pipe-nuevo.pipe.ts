import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeNuevo'
})
export class PipeNuevoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
