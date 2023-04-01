import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Authadminservice } from '../auth-admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    constructor(private _authAdmin:Authadminservice){}

    adminloginForm = new FormGroup({
    adminUserName: new FormControl(null, [Validators.required, Validators.pattern('[a-z]{1,5}$')]),
    password: new FormControl(null, [Validators.required, Validators.pattern('[a-z]{1,5}$')])
    })


    submitRegisterForm(adminloginForm:FormGroup) {
      this._authAdmin.loginAdmin(adminloginForm.value)
      // console.log(adminloginForm.value);
    }

}
