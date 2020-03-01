import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CamelCase'
})
export class CamelCase implements PipeTransform {

  transform(value: string){

    if(value.includes(" "))
    {
      let spaceIndex = value.indexOf(" ");
      console.log(value.charAt(spaceIndex+1));
      return `${value.charAt(0).toUpperCase()}${value.slice(1,spaceIndex)}${value.charAt(spaceIndex+1).toUpperCase()}${value.slice(spaceIndex+2)}`
    }
  
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
  }

}
