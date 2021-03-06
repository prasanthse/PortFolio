import { Component, OnDestroy, ViewChild } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import { OrdersChartComponent } from './charts/orders-chart.component';
import { ProfitChartComponent } from './charts/profit-chart.component';
import { OrdersChart } from '../../../@core/data/orders-chart';
import { ProfitChart } from '../../../@core/data/profit-chart';
import { OrderProfitChartSummary, OrdersProfitChartData } from '../../../@core/data/orders-profit-chart';

import { ECommerceOrderCount } from '../../../Classes/e-commerce-order-count';
import { ECommerceOrders } from '../../../Classes/e-commerce-orders';
import { BackEndService } from '../../../Service/back-end.service';

@Component({
  selector: 'ngx-ecommerce-charts',
  styleUrls: ['./charts-panel.component.scss'],
  templateUrl: './charts-panel.component.html',
})
export class ECommerceChartsPanelComponent implements OnDestroy {

  urlCount = "";
  urlDetail = "";
  urlDelete = "";
  errorMessage: string;

  hasOrders: true;
  

  private alive = true;

  orderDetails: ECommerceOrders[] = [];
  chartPanelSummary = new ECommerceOrderCount();

  //chartPanelSummary: OrderProfitChartSummary[];
  period: string = 'week';
  ordersChartData: OrdersChart;
  profitChartData: ProfitChart;

  @ViewChild('ordersChart', { static: true }) ordersChart: OrdersChartComponent;
  @ViewChild('profitChart', { static: true }) profitChart: ProfitChartComponent;

  constructor(private ordersProfitChartService: OrdersProfitChartData, private backend: BackEndService) {
    //  this.ordersProfitChartService.getOrderProfitChartSummary()
    //    .pipe(takeWhile(() => this.alive))
    //    .subscribe((summary) => {
    //      this.chartPanelSummary = summary;
    //    });

    this.backend.getRequest(this.urlCount).subscribe(message => {
      this.chartPanelSummary = message;
    }, error => this.errorMessage = error);

    this.backend.getRequest(this.urlDetail).subscribe(message => {
      this.orderDetails = message;
    }, error => this.errorMessage = error);

  }

  setPeriodAndGetChartData(value: string): void {
    if (this.period !== value) {
      this.period = value;
    }
  }

  changeTab(selectedTab) {
    if (selectedTab.tabTitle === 'Profit') {
      this.profitChart.resizeChart();
    } else {
      this.ordersChart.resizeChart();
    }
  }

  ngOnDestroy() {
    this.alive = false;
  }

  deleteOrderDetail(id: string){
    if(confirm("Are you sure to delete ?")) {
      this.backend.getRequest(this.urlDelete).subscribe(message => {
        this.orderDetails = message;
        console.log("Successfully deleted Order Detail of id " + id);
      }, error => this.errorMessage = error);
    }
  }

}
