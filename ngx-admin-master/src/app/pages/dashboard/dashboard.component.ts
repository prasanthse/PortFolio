import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';

import { DashboardProjectCount } from '../../Classes/dashboard-project-count';
import { BackEndService } from '../../Service/back-end.service';
import { ViewerResponse } from '../../Classes/viewer-response';

// interface CardSettings {
//   title: string;
//   iconClass: string;
//   type: string;
// }

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

  urlProjCount = "";
  urlViewerResponse = "";
  errorMessage: string;

  viewerResponse = new ViewerResponse();

  private alive = true;

  solarValue: number;
  
  statusCards = new DashboardProjectCount();

  constructor(private solarService: SolarData, private backend: BackEndService) {
  
    this.backend.getRequest(this.urlViewerResponse).subscribe(message => {
      this.viewerResponse = message;
    }, error => this.errorMessage = error);

    this.backend.getRequest(this.urlProjCount).subscribe(message => {
      this.statusCards = message;
    }, error => this.errorMessage = error);

    this.solarService.getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.solarValue = data;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
