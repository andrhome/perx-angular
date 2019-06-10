import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatSortModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatRadioModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSortModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatRadioModule
  ],
  exports: [
    CdkTableModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSortModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatRadioModule
  ],
  declarations: []
})
export class MaterialModule {
}
