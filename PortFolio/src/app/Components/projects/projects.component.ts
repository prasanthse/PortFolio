import { Component, OnInit } from '@angular/core';

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
  }

  navigateToTop(){
    let x = document.querySelector("#projects");
    if (x){
        x.scrollIntoView();
    }
  }

}
