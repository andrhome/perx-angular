import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSortModule,
    MatTableModule
  ],
  exports: [
    CdkTableModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSortModule,
    MatTableModule
  ],
  declarations: []
})
export class MaterialModule {
}
