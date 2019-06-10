import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-books-filter',
  templateUrl: './books-filter.component.html',
  styleUrls: ['./books-filter.component.scss']
})
export class BooksFilterComponent {
  @Output('getFilterValue') getFilter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  changeFilter(event: any): void {
    this.getFilter.emit(event);
  }
}
