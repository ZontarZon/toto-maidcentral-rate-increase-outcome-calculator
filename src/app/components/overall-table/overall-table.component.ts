import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface ProfitRow {
  hourly: string | null;
  name: string;
  feeSplit: string | null;
}

@Component({
  selector: 'app-overall-table',
  templateUrl: './overall-table.component.html',
  styleUrls: ['./overall-table.component.scss'],
  standalone: true,
  imports: [MatTableModule],
})
export class OverallTableComponent implements OnChanges {
  @Input() jobsPerMonth!: string | null; //C4
  @Input() revenuePercent!: string | null; //C5
  @Input() billRatePerJob!: string | null; //C6
  @Input() recurringHomesLostPerMonth!: string | null; //C7
  @Input() netProfit!: string | null; // C8
  @Input() rateIncrease!: string | null; //C10
  @Input() expectedJobLoss!: string | null; //C11
  @Input()
  displayedColumns: string[] = ['name', 'hourly', 'feeSplit'];
  dataSource = this.buildData();

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = this.buildData();
  }

  buildData() {
    const DATA: ProfitRow[] = [
      {
        name: 'TOTAL REVENUE/MONTH',
        hourly: ' $ 106,944 ',
        feeSplit: ' $ 106,944 ',
      },
      {
        name: 'NET PROFIT TOTAL/MONTH',
        hourly: ' 26,250 (25%)',
        feeSplit: ' 22,556 (22%)',
      },
      {
        name: 'NET PROFIT % INCREASE - TOTAL',
        hourly: '200.00%',
        feeSplit: '157.78%',
      },
    ];
    return DATA;
  }
}
