import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  invalidPassword: boolean;

  constructor( private formBuilder: FormBuilder,) { }
  registerForm: FormGroup;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        firstName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(16)]],
        lastName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(16)]],
        email: ['', [Validators.required,Validators.email]],
        contactNumber: ['', [Validators.required, Validators.pattern('[7-9]\\d{9}')]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
    });
}

checkPassword(){
  if(this.registerForm.get('password').value !== null){
    this.invalidPassword = this.registerForm.get('password').value === this.registerForm.get('confirmPassword').value ;
  }
}

register(){
  console.log(this.registerForm.value);
}
}
