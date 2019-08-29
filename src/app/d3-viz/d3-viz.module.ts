import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { D3VizComponent } from './d3-viz.component';
import { StateLicActivityComponent } from './state-lic-activity/state-lic-activity.component';
import { SalaryToCardComponent } from './salary-to-card/salary-to-card.component';
import { StateMtgActivityComponent } from './state-mtg-activity/state-mtg-activity.component';


@NgModule({
  declarations: [
    D3VizComponent,
    StateLicActivityComponent,
    SalaryToCardComponent,
    StateMtgActivityComponent
   ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class D3VizModule { }
