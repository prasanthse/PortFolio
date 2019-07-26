import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-chart-panel-summary',
  styleUrls: ['./chart-panel-summary.component.scss'],
  template: `
    <div class="summary-container">
      <div *ngFor="let item of summary">
        <div>Game Development</div>
        <div class="h6">8</div>
      </div>
    </div>
  `,
})
export class ChartPanelSummaryComponent {
  @Input() summary: {title: string; value: number}[];  
}

