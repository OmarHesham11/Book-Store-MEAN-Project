import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from './admin';
import { Category } from './categories/category';

@Injectable({
  providedIn: 'root'
})
export class Authadminservice {

  admin:Admin= {
    adminUserName:"admin" ,
    password: "admin"
  };


  constructor(private _router:Router) { }

  loginAdmin(adminLoginForm:Admin) {
    if (adminLoginForm.adminUserName === this.admin.adminUserName && adminLoginForm.password === this.admin.password)  {
      this._router.navigate(['admin/categories'])
    }
    else {
      alert("Wrong password or Admin name")
    }
  } 
 

}
