import { NgModule } from '@angular/core';
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

const MaterialComponents = [
  MatListModule,
  MatDividerModule,
  MatExpansionModule,
  MatTabsModule,
  MatTableModule,
  MatGridListModule,
  MatMenuModule,
  MatIconModule,
  LayoutModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
