import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Story } from '../models/story.model';
import * as myGlobals from 'globals'; 

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  constructor(private http:HttpClient) { }

  postStory(story:Story){
    return this.http.post(myGlobals.rootURL+"story/post",story)
  }

  getStoryByID(ID:number){
    return this.http.get(myGlobals.rootURL+"story/get/"+ID)
  }

  getAllStoryCategories(){
    return this.http.get(myGlobals.rootURL+"storycategory")
  }

  getStoryCategoryByID(ID:number){
    return this.http.get(myGlobals.rootURL+"storycategory/"+ID)
  }
}
