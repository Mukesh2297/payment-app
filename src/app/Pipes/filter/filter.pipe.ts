import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterPipe implements PipeTransform {

  ResultArr;

  transform(filterArray:any[], searchVal,textboxValue){
    if(searchVal=="Name" && textboxValue != null)
    {
    this.ResultArr=filterArray.filter((ListItem:any)=>
      {
        return ListItem.name.toLowerCase().includes(textboxValue);
    
      })

      return this.ResultArr;
    }

    else if(searchVal=="Phone No" && textboxValue != null)
    {
    
    this.ResultArr=filterArray.filter((ListItem:any)=>
      {
        const phnoString = String(ListItem.phno);
        return phnoString.includes(textboxValue);
      })
      return this.ResultArr;  

    }

    else if(searchVal=="Price" && textboxValue != null)
    {
    
    this.ResultArr=filterArray.filter((ListItem:any)=>
      {
        const priceString = String(ListItem.price);
        return priceString.includes(textboxValue);
      })
      return this.ResultArr;  

    }

    else if(searchVal=="CreditCard No" && textboxValue != null)
    {
    
    this.ResultArr=filterArray.filter((ListItem:any)=>
      {
        const creditString = String(ListItem.creditnum);
        return creditString.includes(textboxValue);
      })
      return this.ResultArr;  

    }

    else{return filterArray}
  }

}
