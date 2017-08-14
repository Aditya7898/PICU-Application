import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import{ Router } from "@angular/router";
import { FormService } from 'app/providers/calculator.service';
@Component({
   selector :"arrythmias",
   templateUrl:'./arrythmias.component.html',
   styleUrls:['./arrythmias.component.scss']
})

export class ArrythmiasComponent implements OnInit{
    constructor(private _location: Location, private router: Router, private formService: FormService){}
   
    data: any;
    ngOnInit(){  
        this.data = this.formService.getValue();
        console.log(this.formService.getValue());  
    }

    back() {
        this._location.back();
    }
}