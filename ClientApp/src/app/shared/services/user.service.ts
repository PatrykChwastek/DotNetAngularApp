import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import * as myGlobals from 'globals'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {
formData = new User();

  constructor( private http:HttpClient) { }

  postUser(formData:User){
   return this.http.post(myGlobals.rootURL+'user',formData);
  }

  putUser(userID:number,formData:User ){
    return this.http.put(myGlobals.rootURL+'user/'+userID,formData)
  }

  deleteUser(userID:number){
    return this.http.delete(myGlobals.rootURL+'user/'+userID)
  }

  getUserById(userID:number){
    return this.http.get(myGlobals.rootURL+'user/'+userID)
  }

  getPageOfUsers(page:Number,size:Number){
    return this.http.get(myGlobals.rootURL+'user?page='+page+'&size='+size);
  }
}
