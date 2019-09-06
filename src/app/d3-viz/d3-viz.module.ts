import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material/material.module';
import { D3VizComponent } from './d3-viz.component';
import { StateLicActivityComponent } from './state-lic-activity/state-lic-activity.component';
import { StateMortgageActivityComponent } from './state-mortgage-activity/state-mortgage-activity.component';


@NgModule({
  declarations: [
    D3VizComponent,
    StateLicActivityComponent,
    StateMortgageActivityComponent
   ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class D3VizModule { }
