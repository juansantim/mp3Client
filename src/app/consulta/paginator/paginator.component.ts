import { Component, OnInit, Input } from '@angular/core';
import { PaginationResult } from 'src/app/model/PaginationResult';
import { Mp3ServiceService } from 'src/app/Services/mp3-service.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input()
  pagination: PaginationResult

  pages: number[] = []
  currentPage = 0;
  pageSize = 0;

  constructor(private service:Mp3ServiceService) { 
    this.pagination = new PaginationResult();
  }


  
  ngOnInit(): void {
    this.service.fitroAplicadoSubject.subscribe(data => {

      this.pages = [];

      this.pageSize = data.pageSize;
      for (let index = 0; index <= data.totalPages; index++) {
        this.pages.push(index + 1)
      }

      this.currentPage = data.currentPage;

      console.log('Filtro aplicaod desde pagination', this.pages);
    })
  }

  ChangePage(page){
    this.service.ChangePageSubject.next(page);
  }

  PageSizeChanged(){
    this.service.ChangePageSizeSubject.next(this.pageSize);
  }

  

}
