import { Component, OnInit } from '@angular/core';
import { ProfileInfoClass } from 'src/app/Classes/profile-info-class';
import { BackendService } from 'src/app/Services/backend.service';

declare var $: any;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  dp: string;
  workingExperience: any;
  language: any;
  technicalSkill: any;
  specialAchievement: any;
  extraActivity: any;
  courses: any;
  interest: any;

  url: string;
  
  profileInfo = new ProfileInfoClass();

  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.getResponse();
    this.sideNav();
  }

  sideNav(){
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
  }

  getResponse(){
    this.backend.withOutBodyRequest(this.url).subscribe(data => {
      this.profileInfo = data;
      this.setVariables();
    });
  }

  setVariables(){
    this.dp = this.profileInfo.dp;
    this.extraActivity = this.profileInfo.extraActivity;
    this.interest = this.profileInfo.interest;
    this.language = this.profileInfo.language;
    this.specialAchievement = this.profileInfo.specialAchievement;
    this.technicalSkill = this.profileInfo.technicalSkill;
    this.workingExperience = this.profileInfo.workingExperience;
    this.courses = this.profileInfo.courses;
  }

}
