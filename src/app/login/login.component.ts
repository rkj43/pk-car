import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from'@angular/forms';
import { Router } from'@angular/router';
import { Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean;

  constructor(private fb: FormBuilder, private navigate: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
 
  getDetails() {
    console.log(this.loginForm.value);
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.navigate.navigateByUrl('home');
  }
}