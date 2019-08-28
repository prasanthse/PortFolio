import { Component } from '@angular/core';
import { NewsService } from '../news.service';

import { BackEndService } from '../../../Service/back-end.service';
import { Messages } from '../../../Classes/messages';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'ngx-infinite-list',
  templateUrl: 'infinite-list.component.html',
  styleUrls: ['infinite-list.component.scss'],
})
export class InfiniteListComponent {

  urlMessages = "http://localhost:8080/Contacts/getAll";
  urlDeleteMessage = "";
  urlDeleteAllMessage = "http://localhost:8080/Contacts/deleteAll";
  errorMessage = "";

  messages: any;
  noMessage: boolean;

  ngOnInit() {
    this.backend.getRequest(this.urlMessages)
    .subscribe(data => {
      this.CheckingAvailability(data.length);
      this.messages = data;
    }, error => this.errorMessage = error);
  }

  constructor(private newsService: NewsService, private backend: BackEndService) {}

  DeleteAll(){
    if(confirm("Are you sure you want to delete all the messages?")) {
      this.backend.deleteRequest(this.urlDeleteAllMessage).subscribe(message => {
        if(message){
          console.log(message);
          if(message){
            this.visualUpdateAll();
          }else{
            alert("Messages are Unable to Delete!");
          }
        }
      }, error => this.errorMessage = error); 
    }
  }

  DeleteMessage(id){

    this.urlDeleteMessage = "http://localhost:8080/Contacts/deleteId/" + id;

    this.backend.deleteRequest(this.urlDeleteMessage).subscribe(message => {
      if(message){
        console.log(message);
        if(message){
          this.visualUpdate(id);
        }else{
          alert("Message is Unable to Delete!");
        }
      }
    }, error => this.errorMessage = error); 
  }

  visualUpdate(id){
    this.messages = this.messages.filter((elem) => {
      return elem.id !== id;
    });
  }

  visualUpdateAll(){
    this.messages = this.messages.filter((elem) => {
      return elem.id == null;
    });
  }

  CheckingAvailability(arrayLength){
    if(arrayLength == 0){
      this.noMessage = true;
    }else{
      this.noMessage = false;
    }
  }
}
