import { Component, OnInit } from '@angular/core';
import { ApiSearchService } from '../api-search.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  searchHistory: any[]
  constructor(private apiSearchService: ApiSearchService) {
    this.searchHistory = this.apiSearchService.searchHistory;
   }

  ngOnInit() {
  }

}
