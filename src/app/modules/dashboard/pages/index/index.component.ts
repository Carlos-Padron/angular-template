import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [],
})
export class IndexComponent {
  @ViewChild('chart') chart: ChartComponent;
  lineChartOptions: Partial<ChartOptions> | any = {
    series: [
      {
        name: 'info',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    chart: {
      height: 350,
      type: 'area',
    },
    title: {
      text: 'Ng ApexChart example',
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
      ],
    },
  };

  pieChartOptions: Partial<ChartOptions> | any = {
    series: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    chart: {
      height: 362,
      type: 'pie',
    },
    title: {
      text: 'Ng ApexChart example',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  };

  visible = false;

  constructor() {}

  o() {
    this.visible = true;
  }

  show(event: boolean) {
    console.log(event);
  }
}
