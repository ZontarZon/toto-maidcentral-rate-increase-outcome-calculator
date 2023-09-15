import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface LowerPayrollRevPercRow {
  current: string | null;
  hourly: string | null;
  name: string;
  feeSplit: string | null;
}
@Component({
  selector: 'app-lower-pay-roll-revenue-perc-table',
  templateUrl: './lower-pay-roll-revenue-perc-table.component.html',
  styleUrls: ['./lower-pay-roll-revenue-perc-table.component.scss'],
  standalone: true,
  imports: [MatTableModule],
})
export class LowerPayRollRevenuePercTableComponent implements OnChanges {
  displayedColumns: string[] = ['name', 'current', 'hourly', 'feeSplit'];
  dataSource = this.buildData();

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = this.buildData();
  }

  buildData() {
    const DATA: LowerPayrollRevPercRow[] = [
      {
        name: 'Lower Payroll/Revenue Percent',
        current: '5%',
        hourly: '',
        feeSplit: '',
      },
      {
        name: 'Payroll to Revenue',
        current: '40%',
        hourly: ' $ 31,588 (34.55%)',
        feeSplit: ' $ 34,746 (38%)',
      },
      {
        name: 'Extra Gross Profit - Lower Payroll/Revenue',
        current: '',
        hourly: ' $ 1,663 ',
        feeSplit: '$  1,829 ',
      },
      {
        name: 'Extra Gross Profit - Subtotal',
        current: '',
        hourly: '  7,350 ',
        feeSplit: '  4,191 ',
      },
      {
        name: 'Net Profit - Subtotal',
        current: '',
        hourly: '  16,100 ',
        feeSplit: '  12,941 ',
      },
      {
        name: 'Net Profit % Increase - Subtotal',
        current: '',
        hourly: '84%',
        feeSplit: '48%',
      },
    ];
    return DATA;
  }
}
