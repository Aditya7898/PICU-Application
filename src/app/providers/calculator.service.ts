import { Injectable } from '@angular/core';
@Injectable()
export class FormService{
    data:any;
    
   storeData(data){
     this.data=data;
     this.data.Rweight = Math.round(data.weight);
     console.log(data);
     console.log(this.data.Rweight);
     
   }
   getValue(){
       return (this.data);
   }
   
}