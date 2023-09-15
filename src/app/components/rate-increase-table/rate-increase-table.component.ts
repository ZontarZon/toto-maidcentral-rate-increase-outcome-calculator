import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface RateIncreaseRow {
  current: string | null;
  hourly: string | null;
  name: string;
  feeSplit: string | null;
}

@Component({
  selector: 'app-rate-increase-table',
  templateUrl: './rate-increase-table.component.html',
  styleUrls: ['./rate-increase-table.component.scss'],
  standalone: true,
  imports: [MatTableModule],
})
export class RateIncreaseTableComponent implements OnChanges {
  @Input() jobsPerMonth!: number | null;
  @Input() revenuePercent!: number | null;
  @Input() billRatePerJob!: number | null;
  @Input() recurringHomesLostPerMonth!: number | null;
  @Input() netProfit!: number | null;
  @Input() rateIncrease!: number | null;
  @Input() expectedJobLoss!: number | null;

  displayedColumns: string[] = ['name', 'current', 'hourly', 'feeSplit'];
  dataSource = this.buildData();

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = this.buildData();
  }

  buildData() {
    const DATA: RateIncreaseRow[] = [
      {
        name: 'Bill/Job',
        current: ' $ 175.00 ',
        hourly: ' $ 192.50 ',
        feeSplit: ' $ 192.50 ',
      },
      {
        name: 'Jobs/Month',
        current: '500',
        hourly: '475',
        feeSplit: '475',
      },
      {
        name: 'Revenue',
        current: ' $ 87,500 ',
        hourly: ' $ 91,438 ',
        feeSplit: ' $ 91,438 ',
      },
      {
        name: 'COGS (Payroll/Revenue)',
        current: ' $ 35,000 (40%)',
        hourly: ' $ 33,250 (36.36%)',
        feeSplit: ' $ 36,575 (40%)',
      },
      {
        name: 'Gross Profit',
        current: ' $ 52,500 (60%)',
        hourly: ' $ 58,188 (63.64%)',
        feeSplit: ' $ 54,863 (60%)',
      },
      {
        name: 'Extra Gross Profit - Rate Increase',
        current: '',
        hourly: ' $ 5,688 ',
        feeSplit: ' $ 2,363 ',
      },
      {
        name: 'Net Profit',
        current: ' $ 8,750 ',
        hourly: ' $ 14,438 ',
        feeSplit: ' $ 11,113 ',
      },
      {
        name: 'Net Profit % Increase',
        current: '',
        hourly: '65%',
        feeSplit: '27%',
      },
    ];
    return DATA;
  }
}
