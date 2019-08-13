import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule,
         MatToolbarModule,
         MatCardModule } from '@angular/material';

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



const appRoutes: Routes = [
  { path: '', component: BaseComponent },
  { path: 'applicants', component: ApplicantsComponent },
  { path: 'risk', component: RiskDashboardComponent }
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
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes),
    MatListModule,
    MatDividerModule,
    MatExpansionModule,
    MatTabsModule,
    MatTableModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
