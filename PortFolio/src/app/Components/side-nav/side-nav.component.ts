import { Component, OnInit } from '@angular/core';
import { ProfileDp } from 'src/app/Classes/profile-dp';
import { ProfileNoInterest } from 'src/app/Classes/profile-no-interest';
import { ProfileInterest } from 'src/app/Classes/profile-interest';
import { BackendService } from 'src/app/Services/backend.service';

declare var $: any;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  profile: ProfileDp[] = [];
  workingExperience: ProfileNoInterest[] = [];
  language: ProfileNoInterest[] = [];
  technicalSkill: ProfileNoInterest[] = [];
  specialAchievement: ProfileNoInterest[] = [];
  extraActivity: ProfileNoInterest[] = [];
  courses: ProfileNoInterest[] = [];
  interest: ProfileInterest[] = [];

  urlDp: string =  "ProfileHeader/getDp";
  urlWorking: string = "ProfileBody/getTypeInfo/working";
  urlLanguage: string = "ProfileBody/getTypeInfo/language";
  urlTechnical: string = "ProfileBody/getTypeInfo/technical";
  urlSpecial: string = "ProfileBody/getTypeInfo/special";
  urlExtra: string = "ProfileBody/getTypeInfo/extra";
  urlCertificate: string = "ProfileBody/getTypeInfo/certificate";
  urlInterest: string = "ProfileBody/getTypeInfo/interest";

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
    
    this.backend.getRequest(this.urlDp).subscribe(data => {
      this.profile = data;
    });

    this.backend.getRequest(this.urlWorking).subscribe(data => {
      this.workingExperience = data;
    });

    this.backend.getRequest(this.urlLanguage).subscribe(data => {
      this.language = data;
    });

    this.backend.getRequest(this.urlTechnical).subscribe(data => {
      this.technicalSkill = data;
    });

    this.backend.getRequest(this.urlSpecial).subscribe(data => {
      this.specialAchievement = data;
    });

    this.backend.getRequest(this.urlExtra).subscribe(data => {
      this.extraActivity = data;
    });

    this.backend.getRequest(this.urlCertificate).subscribe(data => {
      this.courses = data;
    });

    this.backend.getRequest(this.urlInterest).subscribe(data => {
      this.interest = data;
    });

  }
}
