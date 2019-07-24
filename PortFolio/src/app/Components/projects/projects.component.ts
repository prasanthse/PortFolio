import { Component, OnInit } from '@angular/core';
import { ProjectClass } from 'src/app/Classes/project-class';
import { CommonServiceService } from 'src/app/Services/common-service.service';
import { BackendService } from 'src/app/Services/backend.service';

declare var $:any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  p: number = 1;

  myProjects: ProjectClass[] = [];

  dp: string;
  title: string;
  brief: string;

  url: string = "Projects/getAll";

  constructor(private commonService: CommonServiceService, private backend: BackendService) { }

  ngOnInit() {
    this.getResponse();
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

  getResponse(){
    this.backend.getRequest(this.url).subscribe(data => {
      this.myProjects = data;
    });
  }

  parseId(projectInstance: any){
    this.commonService.setProjectDetailsForModal(projectInstance);
  }

}
