import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { D3LineComponent } from './d3-line/d3-line.component';



@NgModule({
  declarations: [D3LineComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class D3VizModule { }
