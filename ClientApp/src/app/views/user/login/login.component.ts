import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as myGlobals from 'globals'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private http:HttpClient,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {

    this.loginForm=new FormGroup({
      userName:new FormControl(),
      password:new FormControl(),
    });
  }

  loginUser(){
    let loginData = JSON.stringify(this.loginForm.value);
    this.http.post(myGlobals.rootURL+"auth/login", loginData, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      let token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this._snackBar.open("Login Successful..." ,null,{
        duration: 3000,
        panelClass: ['green-sb']
      });

      this.router.navigate(["/"]);
    }, err => {
      console.log(err);
      this._snackBar.open("Unauthorized..." ,null,{
        duration: 3000,
        panelClass: ['red-sb']
      });
    });
  }
}
