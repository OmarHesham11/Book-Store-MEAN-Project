import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from './admin';
// import { CategoriesComponent } from './categories/categories.component';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class Authadminservice {

  admin:Admin= {
    adminUserName:"admin" ,
    password: "admin"
  };
  categories: Category[] =[];
   
  newCategory: string = ''; 

  constructor(private _router:Router) { }

  loginAdmin(adminLoginForm:Admin) {
    if (adminLoginForm.adminUserName === this.admin.adminUserName && adminLoginForm.password === this.admin.password)  {
      this._router.navigate(['admin/categories'])
    }
    else {
      alert("Wrong password or Admin name")
    }
  } 


    addCategory(newCategory: string)
  {  
     if(newCategory.trim()!=''){
      this.categories.push({ id: this.categories.length +1 , category: newCategory});}
      else{
        alert('please enter category')
      }  
  }

  deleteCategory(id: number): void {
    const index = this.categories.findIndex(el=> el.id === id)
    this.categories.splice(this.categories.findIndex(el => el.id == id), 1)
    // console.log(this.categories);
  }

  editCategory(id: number, newCategory: string): void {
    const index = this.categories.findIndex(el => el.id === id);
    if (index !== -1) {
      this.categories[index].category = newCategory;
    }
  }

  getAllCategory(): Category[] {
    return this.categories;
  }
  
}
