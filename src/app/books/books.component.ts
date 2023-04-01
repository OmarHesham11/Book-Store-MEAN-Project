import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  books: Book[] = [];

  bookForm: FormGroup;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) { 
    this.bookForm = this.formBuilder.group({
      bookPhoto: [null, Validators.required],
      bookName: [null, Validators.required],
      bookCategory: [null, Validators.required],
      bookAuthorId: [null, Validators.required]
    });
  }

  addBook() {
    const newBook: Book = {
      id: this.books.length + 1,
      photo: this.bookForm.value.bookPhoto,
      name: this.bookForm.value.bookName,
      category: this.bookForm.value.bookCategory,
      authorId: this.bookForm.value.bookAuthorId
    };
    this.books.push(newBook);
    this.modalService.dismissAll();
    this.bookForm.reset();
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

}
