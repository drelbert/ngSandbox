import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvcAndDiSandboxComponent } from './svc-and-di-sandbox/svc-and-di-sandbox.component';
import { StateService } from './state.service';



@NgModule({
  declarations: [
    SvcAndDiSandboxComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    StateService
  ]
})
export class ServicesAndDiModule { }
