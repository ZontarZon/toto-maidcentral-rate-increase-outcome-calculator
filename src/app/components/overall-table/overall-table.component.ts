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

/**
 * OverallTableComponent displays the three metrics in bold at the bottom of
 * the excel spreadsheet.
 */
export class OverallTableComponent implements OnChanges {
  @Input()
  displayedColumns: string[] = ['name', 'hourly', 'feeSplit'];
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
