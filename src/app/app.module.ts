import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';
import { CalculatorComponent } from "app/components/calculator/calculator.component";
import { Resus_DrugComponent } from "app/components/resus_drug/resus_drug.component";
import { IntubationComponent } from "app/components/intubation/intubation.component";
import { InfusionComponent } from "app/components/infusion/infusion.component";
import { FluidComponent } from "app/components/fluids/fluids.component";
import { FormService } from "app/providers/calculator.service";
import { ArrythmiasComponent } from "app/components/Arrythmias/arrythmias.component";


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    Resus_DrugComponent,
    IntubationComponent,
    InfusionComponent,
    FluidComponent,
    ArrythmiasComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ElectronService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
