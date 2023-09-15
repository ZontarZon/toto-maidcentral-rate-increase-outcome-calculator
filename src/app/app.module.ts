import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { BodyComponent } from './components/body/body.component';
import { FormInputFieldComponent } from './components/form-input-field/form-input-field.component';
import { FormSubmitButtonComponent } from './components/form-submit-button/form-submit-button.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [AppComponent, BannerComponent, BodyComponent, FormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormInputFieldComponent,
    FormSubmitButtonComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
