import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { CoverTypes, CoverTypesValues } from '../../../types/cover-types.enum';
import { SortFields, SortTypes } from '../../../types/sort-types.enum';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books: Array<{[key: string]: any}>;
  booksCopy: Array<{[key: string]: any}>;
  dataSource = new MatTableDataSource();
  displayedColumns: Array<string> = ['number', 'image', 'content', 'createdAt', 'type'];
  isLoading: boolean;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.isLoading = true;
    this.dataService.getAllBooks().subscribe(res => {
      this.isLoading = false;
      this.books = res || [];
      this.updateBooksCopy();
    });
  }

  updateBooksCopy(): void {
    if (this.books.length) {
      this.booksCopy = JSON.parse(JSON.stringify(this.books));
      this.dataSource.data = this.booksCopy;
    }
  }

  sortData(event: any) {
    switch(event.active) {
      case SortFields.NUMBER: {
        this.sortById(event.direction);
      }
        break;
      case SortFields.TYPE: {
        this.sortByType(event.direction);
      }
        break;
      default: {
        return;
      }
    }
  }

  sortById(direction: string): void {
    if (direction === SortTypes.ASC) {
      this.dataSource.data = this.booksCopy.sort((a, b) => {
        return +(a.id < b.id);
      });
    } else {
      this.dataSource.data = this.booksCopy.sort((a, b) => {
        return +(a.id > b.id);
      });
    }
  }

  sortByType(direction: string): void {
    if (direction === SortTypes.ASC) {
      this.dataSource.data = this.booksCopy.sort((a, b) => {
        return +(a.attributes.display_properties.type < b.attributes.display_properties.type);
      });
    } else {
      this.dataSource.data = this.booksCopy.sort((a, b) => {
        return +(a.attributes.display_properties.type > b.attributes.display_properties.type);
      });
    }
  }

  changeFilter(event: any): void {
    this.updateBooksCopy();
    switch(event.value) {
      case CoverTypes.HARD: {
        this.booksCopy = this.booksCopy.filter(book => book.attributes.display_properties.type === CoverTypesValues.HARD_COVER);
      }
        break;
      case CoverTypes.SOFT: {
        this.booksCopy = this.booksCopy.filter(book => book.attributes.display_properties.type === CoverTypesValues.SOFT_COVER);
      }
        break;
      default: {
        this.updateBooksCopy();
      }
    }
    this.dataSource.data = this.booksCopy;
  }

}
