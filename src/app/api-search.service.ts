import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {giphyBit} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiSearchService {
  searchHistory: any[];
  baseGiphyURL: string = 'https://api.giphy.com/v1/gifs/search?api_key=';
  middleGiphyURL: string = '&q='
  endGiphyURL: string = '&limit=2&offset=0&rating=G&lang=en';
  baseWikiURL: string = 'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=';
  constructor(private http: HttpClient) {
    this.searchHistory = [];
   }

   searchWiki(search: string){
     this.addToHistory(search);
     return this.http.get(this.baseWikiURL+ search);

   }
   searchGiphy(search:string){
     return this.http.get(this.baseGiphyURL+giphyBit.config.giphyKey+this.middleGiphyURL+search+this.endGiphyURL);
   }
   searchImage(search:string){
     return this.http.get(search);
   }

   addToHistory(queryString: string){
     var date = new Date();
     var day = date.getDate();
     //month was off by one
     var month = date.getMonth() + 1;
     var hour = date.getHours();
     var min = date.getMinutes();
     var sec = date.getSeconds();

     var timeString = month + "/" + day + " " + hour +":" + min + ":" + sec;
     var queryWithTime = {search:queryString, time:timeString};
    this.searchHistory.push(queryWithTime);
   }


}
