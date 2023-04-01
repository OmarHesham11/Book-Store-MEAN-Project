import { Component } from '@angular/core';
import { Author } from './author';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {
  authors: Author[] = [];

  authorForm: FormGroup;
  content: any;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) { 
    this.authorForm = this.formBuilder.group({
       authorPhoto: [null, Validators.required],
      authorFirstName: [null, Validators.required],
     authorLastName: [null, Validators.required],
      DOB: [null, Validators.required]
    });
  }

  addAuthor() {
    const newAuthor: Author = {
      id: this.authors.length + 1,
      photo: this.authorForm.value.authorPhoto,
      firstname: this.authorForm.value.authorFirstName,
      lastname: this.authorForm.value.authorLastName,
      DOB: this.authorForm.value.DOB
    };
    this.authors.push(newAuthor);
    this.modalService.dismissAll();
    this.authorForm.reset();
  }
  edit(content: Author) {
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' });
    
  }

  deleteAuthor(author: Author) {
    const index = this.authors.indexOf(author);
    if (index !== -1) {
      this.authors.splice(index, 1);
    }
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
