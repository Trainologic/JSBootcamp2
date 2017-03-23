import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUpperCase'
})
export class MyNewPipePipe implements PipeTransform {

  transform(value: any, prefix?: any, postfix?: any): any {
    value = value.map((item) => {
      return prefix + item.toUpperCase() + postfix;
    });
    return value;
  }

}
