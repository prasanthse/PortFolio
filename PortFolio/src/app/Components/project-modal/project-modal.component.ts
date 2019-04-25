import { Component, OnInit } from '@angular/core';
import { ProjectClass } from 'src/app/Classes/project-class';
import { CommonServiceService } from 'src/app/Services/common-service.service';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnInit {

  projectInfo = new ProjectClass();

  constructor(private commonService: CommonServiceService) { }

  ngOnInit() {
    this.commonService.currentProjectDetail.subscribe(data => {
      this.projectInfo = data;
    });
  }

}
