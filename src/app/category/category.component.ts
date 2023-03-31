import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Authadminservice } from '../auth-admin.service';
import { Category } from '../category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  @Input() category: Category = {
    id: 0,
    category: "",
  };

  categories: Category[] = [];

  newCategory: string = '';

  constructor(private _Auth: Authadminservice, private _router: Router) {

  }


  deleteCategory() {
    this._Auth.deleteCategory(this.category.id)
    document.querySelector(".modal-backdrop")?.remove()
  }

  editCategory(id: number): void {
    const newCategory = prompt('Enter the new name for the category');
    if (newCategory) {
      this._Auth.editCategory(id, newCategory);
    }
  }
}

