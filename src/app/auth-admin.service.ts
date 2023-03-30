import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from './admin';

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
      // const index = this.admin.adminname === admin.adminname
      this._router.navigate(['admin/categories'])
    }
    else {
      alert("Wrong password or Admin name")
    }
  } 
}
