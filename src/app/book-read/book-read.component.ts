import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {BookService} from "../book.service";


@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.scss']
})
export class BookReadComponent implements OnInit {
  book: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.showListBook();
  }
  showListBook() {
    this.bookService.getList().subscribe(next => {
      this.book = next;
    });
  }

  reReadBook(id: number) {
    this.book[id].read = false;
    this.bookService.edit(id + '', this.book[id]).subscribe(() => {
      console.log('Sửa thành công');
    }, error1 => {
      console.log('Lỗi ' + error1);
    });
  }
}
