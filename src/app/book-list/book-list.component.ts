import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {BookService} from "../book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
bookList: Book[]=[];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.showListBook();
  }

  showListBook() {
    this.bookService.getList().subscribe(next => {
      this.bookList = next;
    });
  }
  addBook(formBook) {
    this.bookService.add(formBook.value).subscribe(() => {
      console.log('Thêm thành công!');
    }, error1 => {
      console.log('Thêm thất bại! ' + error1);
    });
    this.ngOnInit();
  }
  readBook(id: number) {
    this.bookList[id].read = true;
    this.bookService.edit(id + '', this.bookList[id]).subscribe(() => {
      console.log('Sửa thành công');
    }, error1 => {
      console.log('Lỗi ' + error1);
    });
  }
}
