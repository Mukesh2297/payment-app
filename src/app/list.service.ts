import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  TableArray=[
    {name:"mukesh",creditnum:2345,phno:9677078400,price:20},
    {name:"sandy",creditnum:6789,phno:9952050467,price:10}
  ];

  tempArr=[];

  EditIndex:number;
  SearchValue:number|string="None";
  texboxValue:number|string;


  constructor() { }

  AddUser(uname,ccno,phno,price)
  {

    if(uname!="" && ccno != "" && phno != "" && price != "")
    {
      let userDetails={name:"",creditnum:0,phno:0,price:0}
      userDetails.name=uname;
      userDetails.creditnum=parseInt(ccno);
      userDetails.phno=parseInt(phno);
      userDetails.price=parseInt(price);
      this.TableArray.push(userDetails);

      console.log(userDetails);
      
    }
    
    else
    {
      alert("please provide required details");
    }
  }

  Edit(ind ?:number)
  {

    this.EditIndex=ind;
    console.log(this.EditIndex);

      if(this.tempArr.length== 0){
      this.tempArr.push(this.TableArray[ind]);
      
      }
  }

  Delete(ind)
  {
    this.SearchValue="None";
    this.texboxValue=null;
    this.TableArray.splice(ind,1);
  }

  Update(name,phno,ccno,price)
  {

    let updateObj = {name:"",creditnum:0,phno:0,price:0};
    console.log(this.EditIndex);
    updateObj.name=name;
    updateObj.phno=phno;
    updateObj.creditnum=ccno;
    updateObj.price=price;

    this.TableArray.splice(this.EditIndex,1,updateObj);
    console.log(this.TableArray);

    this.tempArr.length=0;

    console.log(this.tempArr);

  }

  
}
