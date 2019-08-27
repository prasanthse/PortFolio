import { Component } from '@angular/core';
import { NewsService } from '../news.service';

import { BackEndService } from '../../../Service/back-end.service';

@Component({
  selector: 'ngx-infinite-list',
  templateUrl: 'infinite-list.component.html',
  styleUrls: ['infinite-list.component.scss'],
})
export class InfiniteListComponent {

  urlDeleteAllMessage = "/Contacts/deleteAll";
  errorMessage = "";

  firstCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  secondCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  pageSize = 10;

  constructor(private newsService: NewsService, private backend: BackEndService) {}

  loadNext(cardData) {
    if (cardData.loading) { return; }

    cardData.loading = true;
    cardData.placeholders = new Array(this.pageSize);
    this.newsService.load(cardData.pageToLoadNext, this.pageSize)
      .subscribe(nextNews => {
        cardData.placeholders = [];
        cardData.news.push(...nextNews);
        cardData.loading = false;
        cardData.pageToLoadNext++;
      });
  }

  DeleteAll(){
    if(confirm("Are you sure you want to delete all the messages?")) {
      this.backend.getRequest(this.urlDeleteAllMessage).subscribe(message => {
        if(message){
          console.log(message);
        }
      }, error => this.errorMessage = error); 
    }
  }

}
