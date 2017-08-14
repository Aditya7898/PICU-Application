import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Validators, FormArray, FormBuilder} from '@angular/forms';
import{ Router } from "@angular/router";
import {Location} from '@angular/common';
import { FormService } from 'app/providers/calculator.service';


@Component({
   selector :"resus",
   templateUrl:'./resus_drug.component.html',
   styleUrls:['./resus_drug.component.scss'],
})

export class Resus_DrugComponent implements OnInit{

 constructor(private router: Router,private _location: Location, private formService: FormService){}
      
    Rweight:number;
    data: any;
    ngOnInit(){  
        this.data = this.formService.getValue();
        console.log(this.formService.getValue());  
    }

     next(){
        this.router.navigate(['/intubation'])
      }
     
      back() {
        this._location.back();
    }
}