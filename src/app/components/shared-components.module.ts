// Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

// Components
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    NavigationComponent
  ],
  providers: [],
  entryComponents: []
})

export class SharedComponentsModule {
}
