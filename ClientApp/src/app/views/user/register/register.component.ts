import { Component, OnInit} from '@angular/core';

import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  user:User=new User;

  constructor(private service : UserService,private _snackBar: MatSnackBar) { }

   ngOnInit() {

  }


  registerUser(registerForm:NgForm){
    
    this.service.postUser(registerForm.value).subscribe(
      res=>{registerForm.reset();
        this._snackBar.open("User Registered..." ,null,{
          duration: 3000,
          panelClass: ['green-sb']
        });
      },
      err=>{console.log(err);
        this._snackBar.open("Register Error..." ,null,{
          duration: 3000,
          panelClass: ['red-sb']
        });
      }
    )
  }

}
