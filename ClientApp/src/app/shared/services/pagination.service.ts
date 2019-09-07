import { Injectable, EventEmitter, Output } from '@angular/core';
import { PaginationDetail } from '../models/pagination-detail.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as myGlobals from 'globals'; 

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  @Output() invokePage = new EventEmitter<PaginationDetail>();

  readonly pageSize=6;
  pagData: PaginationDetail=new PaginationDetail;
  
  constructor(private http:HttpClient) { }

  getPage(page:number,getUrl:string):Observable<any>{
    return this.http.get(myGlobals.rootURL+getUrl+"page="+page+"&size="+this.pageSize )
  }

}
