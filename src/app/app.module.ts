import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { BodyComponent } from './components/body/body.component';
import { FormInputFieldComponent } from './components/form-input-field/form-input-field.component';
import { FormSubmitButtonComponent } from './components/form-submit-button/form-submit-button.component';
import { FormComponent } from './components/form/form.component';
import { OverallTableComponent } from './components/overall-table/overall-table.component';
import { RateIncreaseTableComponent } from './components/rate-increase-table/rate-increase-table.component';
import { LowerPayRollRevenuePercTableComponent } from './components/lower-pay-roll-revenue-perc-table/lower-pay-roll-revenue-perc-table.component';
import { LowerCustomerTurnoverTableComponent } from './components/lower-customer-turnover-table/lower-customer-turnover-table.component';

@NgModule({
  declarations: [AppComponent, BannerComponent, BodyComponent, FormComponent, LowerPayRollRevenuePercTableComponent, LowerCustomerTurnoverTableComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormInputFieldComponent,
    FormSubmitButtonComponent,
    RateIncreaseTableComponent,
    OverallTableComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
