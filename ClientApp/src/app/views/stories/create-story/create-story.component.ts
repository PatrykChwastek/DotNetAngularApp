import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StoryCategory } from 'src/app/shared/models/story-category.model';
import { Story } from 'src/app/shared/models/story.model';
import { StoryService } from 'src/app/shared/services/story.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent implements OnInit {
  storyForm : FormGroup;
  jwtHelper = new JwtHelperService();
  categories:string[]=[]
  allCategories:string[]=[]
  story:Story;

  constructor(
    private storyService: StoryService,
    private userService:UserService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.storyForm=new FormGroup({
      storyID:new FormControl(),
      storyTitle:new FormControl(),
      storyContent:new FormControl(),
    });

    this.storyService.getAllStoryCategories().subscribe((res: StoryCategory[])=>{
      res.forEach(element => {
      this.allCategories.push(element.categoryName);
      });
    })
  }

  postStory(){
    var token = localStorage.getItem("jwt");
    this.story= this.storyForm.value;
    this.story.categories=this.categories;
    this.story.storyID=0;

    this.userService.getUserById(this.jwtHelper.decodeToken(token).userID).subscribe((res:User)=>
    {
    this.story.user = res.userName;

    this.storyService.postStory(this.story)
      .toPromise().then(res=>{
        this.storyForm.reset();
        this.categories=[]; 
        this._snackBar.open("Story Created..." ,null,{
          duration: 3000,
          panelClass: ['green-sb']
        });
      },err=>{console.log(err);
        this._snackBar.open("Error" ,null,{
          duration: 3000,
          panelClass: ['red-sb']
        });
      })
    });
  }

  addCategory(cat:string){
    this.categories.push(cat);
  }

  isSelected(cat:string):boolean{
    return this.categories.indexOf(cat) > -1;
  }

  removeCategory(category:string){
    this.categories.splice( this.categories.indexOf(category),1)
  }
}
