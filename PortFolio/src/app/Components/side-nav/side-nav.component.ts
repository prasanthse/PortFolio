import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  public workingExperience = new Array(3);
  public language = new Array(3);
  public technicalSkill = new Array(5);
  public specialAchievement = new Array(4);
  public extraActivity = new Array(1);
  public courses = new Array(3);
  public interest = new Array(3);

  constructor() { }

  ngOnInit() {
    this.sideNav();
  }

  sideNav(){
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
  }

}
