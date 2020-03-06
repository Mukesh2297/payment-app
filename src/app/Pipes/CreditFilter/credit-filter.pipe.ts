import { Pipe, PipeTransform } from '@angular/core';
import { ListService } from 'src/app/list.service';

@Pipe({
  name: 'creditFilter'
})
export class CreditFilterPipe implements PipeTransform {

  ccTransformed:string;

  Hide;

  transform(value:number) {
   
    this.ccTransformed = value.toString();

    let slicedVal = this.ccTransformed.slice(0,12);

    let toShowVal = this.ccTransformed.slice(12,16);
   
    let replaceVal = slicedVal.replace(/./g,"*");
    return `${replaceVal}${toShowVal}`;
   
  }

}
