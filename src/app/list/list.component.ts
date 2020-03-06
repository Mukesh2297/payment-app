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
  textboxValue;
  ResultArr=[];
  price;
  creditLength;
  phnoLength;

  constructor(public List:ListService) {

    this.tableArr=this.List.TableArray;
    this.tempArr = this.List.tempArr;  
    this.SearchValue=this.List.SearchValue;
    this.textboxValue=this.List.texboxValue;
    
   }

  ngOnInit(): void {
  }

  AddUser(uname,ccno,phno,price)
  {

    if(this.creditLength.toString().length==16 && this.phnoLength.toString().length==10)
    {this.List.AddUser(uname,ccno,phno,price)}

    else
    {

      if(this.creditLength.toString().length < 16 || this.creditLength.toString().length > 16 )
      {
        alert("Please enter valid credit card number");
      }

      else if(this.phnoLength.toString().length < 10 || this.creditLength.toString().length > 10 )
      {
        alert("Please enter valid phone number");
      }


    }
    

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

}
  
  
 
