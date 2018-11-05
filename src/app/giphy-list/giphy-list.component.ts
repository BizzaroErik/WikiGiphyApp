import { Component, Input,  OnInit } from '@angular/core';
import { ApiSearchService } from '../api-search.service';

@Component({
  selector: 'app-giphy-list',
  templateUrl: './giphy-list.component.html',
  styleUrls: ['./giphy-list.component.css']
})
export class GiphyListComponent implements OnInit {
  @Input() giphySearch:string;
  imageToShow:any;
  showImage:boolean;
  constructor(private apiService: ApiSearchService) { 
    this.imageToShow = "";
    this.showImage = false;
    //console.log(this.giphySearch);
    //this.search(this.giphySearch);
    
  }
  search(gSearch: string){
    this.apiService.searchGiphy(gSearch).subscribe((results:any) => {
      let holder = results['data'];

      var firstImage = holder[0].images.downsized;
      
      this.imageToShow = firstImage.url
      this.showImage = true;
    });
    return false;
  }


  ngOnInit() {
    this.search(this.giphySearch);
  }

}
