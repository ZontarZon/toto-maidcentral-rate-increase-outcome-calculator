import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})

/**
 * FormComponent contains and handles all the input fields. Later,
 * these values can be used in combination with an api call and
 * Observer to fetch data to populate the tables.
 */
export class FormComponent {
  @Input() jobsPerMonth!: number | null;
  @Input() revenuePercent!: number | null;
  @Input() billRatePerJob!: number | null;
  @Input() recurringHomesLostPerMonth!: number | null;
  @Input() netProfit!: number | null;
  @Input() rateIncrease!: number | null;
  @Input() expectedJobLoss!: number | null;
  @Input() lowerPayrollPerc!: number | null;
  @Input() improveHomesLostPerc!: number | null;
  @Input() formOpen: boolean = true;

  toggleFormOpen() {
    this.formOpen = !this.formOpen;
  }

  updateJobsPerMonth(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue) {
      this.jobsPerMonth = parseInt(filterValue);
    } else {
      this.jobsPerMonth = null;
    }
  }

  updateRevenuePercent(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue) {
      this.revenuePercent = parseInt(filterValue);
    } else {
      this.revenuePercent = null;
    }
  }

  updateBillRatePerJob(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue) {
      this.billRatePerJob = parseInt(filterValue);
    } else {
      this.billRatePerJob = null;
    }
  }

  updateRecurringHomesLostPerMonth(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue) {
      this.recurringHomesLostPerMonth = parseInt(filterValue);
    } else {
      this.recurringHomesLostPerMonth = null;
    }
  }

  updateNetProfit(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue) {
      this.netProfit = parseInt(filterValue);
    } else {
      this.netProfit = null;
    }
  }

  updateRateIncrease(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue) {
      this.rateIncrease = parseInt(filterValue);
    } else {
      this.rateIncrease = null;
    }
  }

  updateExpectedJobLoss(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue) {
      this.expectedJobLoss = parseInt(filterValue);
    } else {
      this.expectedJobLoss = null;
    }
  }

  updateLowerPayrollPerc(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue) {
      this.lowerPayrollPerc = parseInt(filterValue);
    } else {
      this.lowerPayrollPerc = null;
    }
  }

  updateImproveHomesLostPerc(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue) {
      this.improveHomesLostPerc = parseInt(filterValue);
    } else {
      this.improveHomesLostPerc = null;
    }
  }
}
