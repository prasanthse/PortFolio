import { Component, OnInit } from '@angular/core';
import { ContactClass } from 'src/app/Classes/contact-class'

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactInstance = new ContactClass();

  constructor() { }

  ngOnInit() {
    this.tooltipped();
  }

  tooltipped(){
    $(document).ready(function(){
      $('.tooltipped').tooltip();
    });      
  }

  toast(){
    $(document).ready(function(){
      $("#send").click(function(){
        $('.toast').toast('show');
      });
    });
  }

  sendMessage(form: any){
    console.log(this.contactInstance.name);
    console.log(this.contactInstance.phoneNumber);
    console.log(this.contactInstance.email);
    console.log(this.contactInstance.message);

    form.reset();

    this.toast();
  }

}
