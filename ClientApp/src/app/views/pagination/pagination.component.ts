import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaginationDetail } from 'src/app/shared/models/pagination-detail.model';
import { PaginationService } from 'src/app/shared/services/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() pager : PaginationDetail;
  @Input() getUrl : string;

  constructor(
    private paginService: PaginationService) { }

  ngOnInit() {
   this.setPage(1); 
  } 

  setPage(page:number){
    this.paginService.getPage(page,this.getUrl)
     .subscribe((res : PaginationDetail)=> {
      this.pager = res; 
      this.paginService.pagData=res;
      this.paginService.invokePage.emit(this.pager)
    });
  }

  counter(i: number) {    
    return new Array(i);
}
}
