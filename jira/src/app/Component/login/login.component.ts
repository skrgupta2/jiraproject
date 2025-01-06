import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginforms: FormGroup | any;

  constructor(private fb: FormBuilder) {
    this.loginforms = this.fb.group({
      password:'',
      username:''
    });
  }
  Onsubmit(){
    console.log(this.loginforms.value.pass);
    
  }
}
