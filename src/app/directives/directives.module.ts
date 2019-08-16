import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { DirectivesSandboxComponent } from './directives-sandbox/directives-sandbox.component';



@NgModule({
  declarations: [DirectivesSandboxComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class DirectivesModule { }
