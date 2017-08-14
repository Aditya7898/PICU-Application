import { Component, OnInit } from '@angular/core';
import{ Router } from "@angular/router";
import {Location} from '@angular/common';

@Component({
   selector :"fluid",
   templateUrl:'./fluid.component.html',
   styleUrls:['./fluid.component.scss']
})

export class FluidComponent implements OnInit{

    name = "Tushar Balar";
    weight= "60";
    Rweight="60";
    Pname="Aditya";
    DOB="07/08/1998"
    HN="12345";
    age="19";
    constructor(private _location: Location, private router:Router){}
    ngOnInit(){

    }

    back() {
        this._location.back();
    }
    next(){
        this.router.navigate(['/arrythmias']);
    }
}