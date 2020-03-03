import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tableArr=[];
  tempArr = [];
  EditStatus:boolean = false;
  EditIsDisabled:boolean;
  SearchValue;
  texboxValue;
  ResultArr=[];
  price;

  constructor(public List:ListService) {

    this.tableArr=this.List.TableArray;
    this.tempArr = this.List.tempArr;  
    this.SearchValue=this.List.SearchValue;
    this.texboxValue=this.List.texboxValue;
    
   }

  ngOnInit(): void {
  }

  AddUser(uname,ccno,phno,price)
  {
    this.List.AddUser(uname,ccno,phno,price);

  }

  Edit(indexVal)
  {
    this.EditIsDisabled=true;
    this.List.Edit(indexVal)

  }

  Delete(ind)
  {
    this.List.Delete(ind);
    this.SearchValue = this.List.SearchValue;
  
  }

  Update(name,phno,ccno,price)
  {
    this.EditIsDisabled=false;
   this.List.Update(name,phno,ccno,price);
  }

  Search(event)
  {
   
    if(this.SearchValue=="Name" && event.target.value!= " ")
    {
    this.ResultArr=this.tableArr.filter(Obj=>
      {
        return Obj.name.toLowerCase().includes(event.target.value);
      })
      //console.log(this.ResultArr);
    }
    
    
    else if(this.SearchValue=="Phone No" && event.target.value!=NaN)
    {
    
    this.ResultArr=this.tableArr.filter(Obj=>
      {
        const phnoString = String(Obj.phno);
        return phnoString.includes(event.target.value);
      })
      //console.log(this.ResultArr);

    }

    else if(this.SearchValue=="Price")
    {
    
    this.ResultArr=this.tableArr.filter(Obj=>
      {
        const PriceString = String(Obj.price);
        return PriceString.includes(event.target.value);
      })
      //console.log(this.ResultArr);

    }



    
  }

}
  
  
 
