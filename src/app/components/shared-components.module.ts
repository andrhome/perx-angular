// Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

// Components
import { NavigationComponent } from './navigation/navigation.component';

// Directives
import { StrongDirective } from '../directives/strong/strong.directive';
import { UppercaseDirective } from '../directives/uppercase/uppercase.directive';
import { WarningDirective } from '../directives/warning/warning.directive';

@NgModule({
  declarations: [
    NavigationComponent,
    StrongDirective,
    UppercaseDirective,
    WarningDirective
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    NavigationComponent,
    StrongDirective,
    UppercaseDirective,
    WarningDirective
  ],
  providers: [],
  entryComponents: []
})

export class SharedComponentsModule {
}
