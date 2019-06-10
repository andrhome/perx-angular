// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentsModule } from '../../components/shared-components.module';

// Components
import { BooksFilterComponent } from './books-list/books-filter/books-filter.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BasicLayoutComponent } from './basic-layout.component';

@NgModule({
  declarations: [
    BasicLayoutComponent,
    BooksListComponent,
    BooksFilterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    SharedComponentsModule
  ],
  exports: [
  ]
})
export class BasicLayoutModule {
}
