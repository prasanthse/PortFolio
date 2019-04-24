import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  p: number = 1;

  public myProjects = new Array(10);//temperory

  constructor() { }

  ngOnInit() {
    this.modalTrigger();
  }

  navigateToTop(){
    let x = document.querySelector("#projects");
    if (x){
        x.scrollIntoView();
    }
  }

  modalTrigger(){
    $(document).ready(function(){
      $('.modal').modal();
    });
  }

}
