import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { D3VizComponent } from './d3-viz.component';


@NgModule({
  declarations: [
    D3VizComponent
   ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class D3VizModule { }
