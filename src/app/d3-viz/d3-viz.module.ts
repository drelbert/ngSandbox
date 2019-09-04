import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material/material.module';
import { D3VizComponent } from './d3-viz.component';
import { StateLicActivityComponent } from './state-lic-activity/state-lic-activity.component';
import { D3PracticeComponent } from './d3-practice/d3-practice.component';


@NgModule({
  declarations: [
    D3VizComponent,
    StateLicActivityComponent,
    D3PracticeComponent
   ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class D3VizModule { }
