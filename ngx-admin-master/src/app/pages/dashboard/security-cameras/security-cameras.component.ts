import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbComponentSize, NbMediaBreakpointsService, NbThemeService } from '@nebular/theme';

import { Camera, SecurityCamerasData } from '../../../@core/data/security-cameras';

import { DashboardProjectDps } from '../../../Classes/dashboard-project-dps';
import { BackEndService } from '../../../Service/back-end.service';

@Component({
  selector: 'ngx-security-cameras',
  styleUrls: ['./security-cameras.component.scss'],
  templateUrl: './security-cameras.component.html',
})
export class SecurityCamerasComponent implements OnInit, OnDestroy {

  urlProjDp = "";
  errorMessage: string;

  projDp: DashboardProjectDps[] = [];

  private destroy$ = new Subject<void>();

  cameras: Camera[];
  selectedCamera: Camera;
  isSingleView = false;
  actionSize: NbComponentSize = 'medium';

  constructor(
    private themeService: NbThemeService,
    private breakpointService: NbMediaBreakpointsService,
    private backend: BackEndService,
    private securityCamerasService: SecurityCamerasData,
  ) {}

  ngOnInit() {
    //  this.securityCamerasService.getCamerasData()
    //    .pipe(takeUntil(this.destroy$))
    //    .subscribe((cameras: Camera[]) => {
    //      this.cameras = cameras;
    //      this.selectedCamera = this.cameras[0];
    //    });

    this.backend.getRequest(this.urlProjDp).subscribe(message => {
      this.projDp = message;
    }, error => this.errorMessage = error);

    const breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(map(([, breakpoint]) => breakpoint.width))
      .subscribe((width: number) => {
        this.actionSize = width > breakpoints.md ? 'medium' : 'small';
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  selectCamera(camera: any) {
    this.selectedCamera = camera;
    this.isSingleView = true;
  }
}
