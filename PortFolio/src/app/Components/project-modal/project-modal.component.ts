import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnInit {

  public projectInfo = new Array(5);//temperory

  constructor() { }

  ngOnInit() {
    
  }

}
