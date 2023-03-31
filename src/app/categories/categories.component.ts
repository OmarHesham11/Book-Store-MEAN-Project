import {Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Authadminservice } from '../auth-admin.service';
import { Category } from '../category';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl:'./categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  // category:any ;
  categories: Category[] = [];
  newCategory: string = '';

  constructor(private _Auth:Authadminservice){
    this.categories = this._Auth.categories;
  }

  addCategory() {

    this._Auth.addCategory(this.newCategory)
    this.newCategory = '';
  }


}
