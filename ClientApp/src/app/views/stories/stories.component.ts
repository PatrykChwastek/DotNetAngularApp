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
  allCategories: string[]=[];
  subscription:Subscription;
  searchForm:FormGroup;
  message:string="Loading...";

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
        if(this.stories.length <=0){
          this.message="Stories not found...";
        }else{
          this.message="Loading...";
        }
      })
    }else{
      this.pgService.getPage(1,this.url).subscribe(res=>{
        this.paginationData=res; this.stories = res.items;
        if(this.stories.length <=0){
          this.message="Stories not found...";
        }else{
          this.message="Loading...";
        }
      });
    }
  }
}
