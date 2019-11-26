import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";
import {BookReadComponent} from "./book-read/book-read.component";


const routes: Routes = [
  {
    path: 'list-book',
    component: BookListComponent
  },
  {
    path: 'list-book/:id',
    component: BookListComponent
  },
  {
    path: 'list-read-book',
    component: BookReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
