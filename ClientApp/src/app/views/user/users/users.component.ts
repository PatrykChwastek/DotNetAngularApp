import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { PaginationDetail } from 'src/app/shared/models/pagination-detail.model';
import { PaginationService } from 'src/app/shared/services/pagination.service';
import { FormGroup, Validators,FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {
 
  users : User[]=[];
  displayedColumns = ['userID','userName','email','Actions']
  paginationData:PaginationDetail= new PaginationDetail;
  editForm : FormGroup;
  subscription:Subscription;
  readonly url = "user?";

  constructor(
    private userService: UserService,
    private pgService: PaginationService,
    private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.subscription = this.pgService.invokePage.subscribe(data =>{
      this.users=data.items; this.paginationData= data;
    })

    this.editForm=new FormGroup({
      userID:new FormControl(),
      userName:new FormControl(),
      userPass:new FormControl(),
      email:new FormControl()
    });
  }

  deleteUser(userID:number){
    this.userService.deleteUser(userID)
    .subscribe(
      res=>{console.log('User Deleted');
        this._snackBar.open("User Deleted..." ,null,{
          duration: 3000,
          panelClass: ['green-sb']
        });
        this.pgService.getPage(this.pgService.pagData.page as number,this.url).subscribe(res=>{
          this.paginationData=res; this.users = res.items;
        })
    },
      err=>{console.log(err);});
  }

  editUser(userID:number){
    this.userService.getUserById(userID).toPromise().then((user:User)=>{      
      this.editForm.patchValue({
        userID:user.userID,
        userName:user.userName,
        userPass:user.userPass,
        email:user.email
      });
    })
  }

  submitUser(){
    this.userService.formData=this.editForm.value;
    
    this.userService.putUser(
      this.userService.formData.userID,
      this.userService.formData)
      .subscribe(res=>{
        this._snackBar.open("User Edited..." ,null,{
          duration: 3000,
          panelClass: ['green-sb']
        });
        this.editForm.reset();

        this.pgService.getPage(this.pgService.pagData.page as number,this.url)
          .subscribe(res=>{
            this.paginationData=res; this.users = res.items;
          })
    },
      err=>{console.log(err)
        this._snackBar.open("Edit Error..." ,null,{
          duration: 3000,
          panelClass: ['red-sb']
        });
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
