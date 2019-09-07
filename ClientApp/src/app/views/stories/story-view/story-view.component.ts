import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Story } from 'src/app/shared/models/story.model';
import { UserService } from 'src/app/shared/services/user.service';
import { StoryService } from 'src/app/shared/services/story.service';


@Component({
  selector: 'app-story-view',
  templateUrl: './story-view.component.html',
  styleUrls: ['./story-view.component.css']
})
export class StoryViewComponent implements OnInit {

  story:Story=new Story;
  author:string="";

  constructor(
    private route:ActivatedRoute,
    private userService: UserService, 
    private storyService:StoryService) { }

  ngOnInit() {
    this.storyService.getStoryByID(this.route.snapshot.params['id']).subscribe((story:Story)=>{
      this.story=story;
      this.userService.getUserById(story.userID).subscribe((res:any)=>{
        this.author=res.userName;
      })
    });
  }
}
