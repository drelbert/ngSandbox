import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { D3VizModule } from './d3-viz/d3-viz.module';
import { MaterialModule } from './material/material.module';
import { DirectivesModule } from './directives/directives.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardNgComponent } from './dashboard-ng/dashboard-ng.component';
import { HeaderComponent } from './header/header.component';
import { ApplicantListComponent } from './applicants/applicant-list/applicant-list.component';
import { ApplicantComponent } from './applicants/applicant-list/applicant/applicant.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { ApplicantDetailComponent } from './applicants/applicant-detail/applicant-detail.component';
import { BaseComponent } from './base/base.component';
import { RiskDashboardComponent } from './risk/risk-dashboard.component';
import { RiskFactorsComponent } from './risk/risk-factors/risk-factors.component';
import { CanvasComponent } from './canvas/canvas.component';
import { DirectivesSandboxComponent } from './directives/directives-sandbox/directives-sandbox.component';
import { D3VizComponent } from './d3-viz/d3-viz.component';
import { BarService } from './d3-viz/shared/bar.service';



const appRoutes: Routes = [
  { path: '', component: BaseComponent },
  { path: 'applicants', component: ApplicantsComponent },
  { path: 'directives', component: DirectivesSandboxComponent },
  { path: 'd3-viz', component: D3VizComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardNgComponent,
    HeaderComponent,
    ApplicantListComponent,
    ApplicantComponent,
    ApplicantsComponent,
    ApplicantDetailComponent,
    BaseComponent,
    RiskDashboardComponent,
    RiskFactorsComponent,
    CanvasComponent

  ],
  imports: [
    MaterialModule,
    DirectivesModule,
    D3VizModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatFormFieldModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    CommonModule
  ],
  providers: [BarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
