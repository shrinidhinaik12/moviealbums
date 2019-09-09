import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerEmailFilter'
})
export class PipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let dt = (val.address.toUpperCase().includes(args)) || 
      (val.branch.toLowerCase().includes(args))||
      (val.ifsc.toLowerCase().includes(args))||
      
      (val.city.toLowerCase().includes(args));
      return dt;
    })
  }
}
