import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerPayRollRevenuePercTableComponent } from './lower-pay-roll-revenue-perc-table.component';

describe('LowerPayRollRevenuePercTableComponent', () => {
  let component: LowerPayRollRevenuePercTableComponent;
  let fixture: ComponentFixture<LowerPayRollRevenuePercTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LowerPayRollRevenuePercTableComponent]
    });
    fixture = TestBed.createComponent(LowerPayRollRevenuePercTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
