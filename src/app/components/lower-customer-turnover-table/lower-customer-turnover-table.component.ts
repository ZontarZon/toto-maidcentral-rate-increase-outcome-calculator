import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface CustomerTurnoverRow {
  current: string | null;
  hourly: string | null;
  name: string;
  feeSplit: string | null;
}

@Component({
  selector: 'app-lower-customer-turnover-table',
  templateUrl: './lower-customer-turnover-table.component.html',
  styleUrls: ['./lower-customer-turnover-table.component.scss'],
  standalone: true,
  imports: [MatTableModule],
})

/**
 * LowerCustomerTurnoverTableComponent contains the metrics for LOWER
 * CUSTOMER TURNOVER in the spreadsheet.
 */
export class LowerCustomerTurnoverTableComponent implements OnChanges {
  displayedColumns: string[] = ['name', 'current', 'hourly', 'feeSplit'];
  dataSource = this.buildData();

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = this.buildData();
  }

  /**
   * This data will be rebuilt with value changes. When the data is fetched
   * from the API, it's passed here and will build when ng detects a state
   * change. Right now, it contains dummy data.
   * @returns {Object Array} containing the new data for the table.
   */
  buildData() {
    const DATA: CustomerTurnoverRow[] = [
      {
        name: 'Improve Recurring Homes Lost/Month',
        current: '10%',
        hourly: '',
        feeSplit: '',
      },
      {
        name: 'Number of Recurring Homes Lost/Month',
        current: '25',
        hourly: '  22.50 ',
        feeSplit: '  22.50 ',
      },
      {
        name: 'Recurring Homes Lost/Month',
        current: '5%',
        hourly: '4.50%',
        feeSplit: '4.50%',
      },
      {
        name: 'Flat Line Recurring Jobs',
        current: '500',
        hourly: '  556 ',
        feeSplit: '  556 ',
      },
      {
        name: 'Extra Recurring Jobs/Month',
        current: '',
        hourly: '81',
        feeSplit: '81',
      },
      {
        name: 'Extra Revenue',
        current: '',
        hourly: ' $ 15,507 ',
        feeSplit: ' $ 15,507 ',
      },
      {
        name: 'Extra Gross Profit',
        current: '',
        hourly: ' $ 10,150 ',
        feeSplit: ' $ 9,614 ',
      },
    ];
    return DATA;
  }
}
