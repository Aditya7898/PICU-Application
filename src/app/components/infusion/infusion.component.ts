import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Validators, FormArray, FormBuilder} from '@angular/forms';
import{ Router } from "@angular/router";
import {Location} from '@angular/common';
import { FormService } from 'app/providers/calculator.service';
@Component({
   selector :"infusion",
   templateUrl:'./infusion.component.html',
   styleUrls:['./infusion.component.scss']
})

export class InfusionComponent implements OnInit{
    constructor(private _location: Location, private router: Router, private formService: FormService){}
   
    data: any;
    ngOnInit(){  
        this.data = this.formService.getValue();
        console.log(this.formService.getValue());  
    }

    back() {
        this._location.back();
    }
    
    next(){
        this.router.navigate(['/fluid'])
    }
}