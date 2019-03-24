import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  jquery_code(){
  
    $(document).ready(function(){
      $('.parallax').parallax();
    });
          
  }

  constructor() { }

  ngOnInit() {
    this.jquery_code();
  }

}
