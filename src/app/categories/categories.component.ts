import { Component } from '@angular/core';
import { Authadminservice } from '../auth-admin.service';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from './category';
@Component({
  selector: 'app-categories',
  templateUrl:'./categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categories: Category[] = [

  ];

  categoryForm: FormGroup ;
  content: any;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) { 
    this.categoryForm = this.formBuilder.group({
      categoryName: [null, Validators.required],
   
    });
  }

  addCategory() {
    const newCategory: Category = {
      id: this.categories.length + 1,
      name: this.categoryForm.value.categoryName
    };
    this.categories.push(newCategory);
    this.modalService.dismissAll();
    this.categoryForm.reset();
  }
  
  edit(content: Category) {
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' });
    
  }

  deleteCategory(category: Category) {
    const index = this.categories.indexOf(category);
    if (index !== -1) {
      this.categories.splice(index, 1);
    }
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

}











