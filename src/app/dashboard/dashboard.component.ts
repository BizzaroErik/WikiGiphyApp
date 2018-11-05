import { Component, OnInit } from '@angular/core';
import { ApiSearchService } from '../api-search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  wikiList:any[];

  constructor(private apiService: ApiSearchService){
    this.wikiList = [];
  }

  searchWiki(search:HTMLInputElement){
    this.apiService.searchWiki(search.value).subscribe((results:any) => {
     
      let holder = results['query'];

      let s = holder['search'];
      console.log(s);
      s.map( element => {
        this.wikiList.push(element.title);
        console.log(element.title);
      });
      //this.wikiList=s;
    });
  }

  ngOnInit() {
  }

}
