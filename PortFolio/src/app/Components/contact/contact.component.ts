import { Component, OnInit } from '@angular/core';
import { ContactClass } from 'src/app/Classes/contact-class';
import { BackendService } from 'src/app/Services/backend.service';

declare var $, M: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactInstance = new ContactClass();

  form: any;
  url: string;
  responseState: boolean;

  constructor(private backend: BackendService) { }

  ngOnInit() {  
  }

  tooltipped(){
    $(document).ready(function(){
      $('.tooltipped').tooltip();
    });      
  }

  sendMessage(form: any){

    this.form = form;

    this.backend.withBodyRequest(this.url, this.contactInstance).subscribe(data => {
      this.responseState = data;
      this.giveFeedback();
    });
    
  }

  timeOut(){
    setTimeout(()=>{
      this.form.reset();
    }, 1500);
  }

  toast(message: string){
    M.toast({html: message, classes: 'rounded'});
  }

  giveFeedback(){
    if(this.responseState){
      this.toast("Your message send successfully");
      this.timeOut();
    }else{
      this.toast("Your message sending is failed");
    }
  }

}
