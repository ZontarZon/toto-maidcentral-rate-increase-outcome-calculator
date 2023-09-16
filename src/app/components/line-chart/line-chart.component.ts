import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  ngOnInit(): void {
    var lineChart = new Chart('chart', {
      type: 'line',
      data: {
        labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
        datasets: [
          {
            label: 'Change over time in years',
            data: [5, 13, 1, 8, 12],

            borderColor: ['black'],
            borderWidth: 2,
            hoverBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 10,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        hover: {
          mode: 'nearest',
          intersect: false,
        },
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false,
          },
          legend: {
            labels: {
              usePointStyle: true,
              boxWidth: 16,
            },
          },
        },
      },
    });
  }
}
