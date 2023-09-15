import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerCustomerTurnoverTableComponent } from './lower-customer-turnover-table.component';

describe('LowerCustomerTurnoverTableComponent', () => {
  let component: LowerCustomerTurnoverTableComponent;
  let fixture: ComponentFixture<LowerCustomerTurnoverTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LowerCustomerTurnoverTableComponent]
    });
    fixture = TestBed.createComponent(LowerCustomerTurnoverTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
