import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { BodyComponent } from './components/body/body.component';
import { FormInputFieldComponent } from './components/form-input-field/form-input-field.component';
import { FormSubmitButtonComponent } from './components/form-submit-button/form-submit-button.component';
import { FormComponent } from './components/form/form.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { LowerCustomerTurnoverTableComponent } from './components/lower-customer-turnover-table/lower-customer-turnover-table.component';
import { LowerPayRollRevenuePercTableComponent } from './components/lower-pay-roll-revenue-perc-table/lower-pay-roll-revenue-perc-table.component';
import { OverallTableComponent } from './components/overall-table/overall-table.component';
import { RateIncreaseTableComponent } from './components/rate-increase-table/rate-increase-table.component';
import { ToggleFormOpenButtonComponent } from './components/toggle-form-open-button/toggle-form-open-button.component';

import { FormsModule } from '@angular/forms';
import { DownloadPdfButtonComponent } from './components/download-pdf-button/download-pdf-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    BodyComponent,
    FormComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormInputFieldComponent,
    FormSubmitButtonComponent,
    RateIncreaseTableComponent,
    OverallTableComponent,
    LowerPayRollRevenuePercTableComponent,
    LowerCustomerTurnoverTableComponent,
    ToggleFormOpenButtonComponent,
    FormsModule,
    DownloadPdfButtonComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
