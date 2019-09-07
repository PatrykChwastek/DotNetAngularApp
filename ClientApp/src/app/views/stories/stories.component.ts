import { Component, OnInit } from '@angular/core';
import { PaginationDetail } from 'src/app/shared/models/pagination-detail.model';
import { PaginationService } from 'src/app/shared/services/pagination.service';
import { Story } from 'src/app/shared/models/story.model';
import { Subscription } from 'rxjs';
import { StoryCategory } from 'src/app/shared/models/story-category.model';
import { FormGroup, FormControl } from '@angular/forms';
import { StoryService } from 'src/app/shared/services/story.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  paginationData: PaginationDetail= new PaginationDetail;
  url:string = "story/all?";
  stories:Story[]=[];
  allStories:any[]=[]
  allCategories: string[]=[];
  subscription:Subscription;
  searchForm:FormGroup;

  constructor( 
    private pgService: PaginationService,
    private storyService: StoryService,
    private userService: UserService) { }

  ngOnInit() {
    this.loadStories();

    this.storyService.getAllStoryCategories().subscribe((res: StoryCategory[])=>{
      res.forEach(element => {
      this.allCategories.push(element.categoryName);
      });
    })

    this.searchForm=new FormGroup({
      storyTitle:new FormControl(),
      storyCategory:new FormControl(),
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  search(){
    if (!this.searchForm.value.storyCategory &&
      !this.searchForm.value.storyTitle) 
    {
      this.url="story/all?";
      this.loadStories();
    }

    if (this.searchForm.value.storyCategory &&
        !this.searchForm.value.storyTitle) 
    {    
    this.url="story/category?cat="+this.searchForm.value.storyCategory+"&";
    this.loadStories();
    }

    if (!this.searchForm.value.storyCategory &&
        this.searchForm.value.storyTitle) 
    {
    this.url="story/title?title="+this.searchForm.value.storyTitle+"&";
    this.loadStories();
    }

    if (this.searchForm.value.storyCategory&&
        this.searchForm.value.storyTitle) 
    {
    this.url="story/category&title?cat="+
      this.searchForm.value.storyCategory+"&"+
      "title="+this.searchForm.value.storyTitle+"&";
      this.loadStories();
    }
  }

  loadStories(){
    if (this.paginationData.page===undefined) {   
      this.subscription= this.pgService.invokePage.subscribe((data:any) =>{
        this.stories=data.items; this.paginationData= data;        
        this.allStories=[];    
          for (let index = 0; index < this.stories.length; index++) {
            this.userService.getUserById(this.stories[index].userID).subscribe((user:any)=>{
              this.allStories.push(
                {
                  storyID:this.stories[index].storyID,
                  author:user.userName,
                  storyTitle:this.stories[index].storyTitle,
                  storyContent:this.stories[index].storyContent, 
                  categories:this.stories[index].categories, 
                })         
            })
          }
      })
    } else {
      this.pgService.getPage(1,this.url).subscribe(res=>{
        this.paginationData=res; this.stories = res.items;
        this.allStories=[];          
        for (let index = 0; index < this.stories.length; index++) {
          this.userService.getUserById(this.stories[index].userID).subscribe((user:any)=>{
            this.allStories.push(
              {
                storyID:this.stories[index].storyID,
                author:user.userName,
                storyTitle:this.stories[index].storyTitle,
                storyContent:this.stories[index].storyContent, 
                categories:this.stories[index].categories, 
              })         
          })
        }
      })
    }
  }
}
