import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateIncreaseTableComponent } from './rate-increase-table.component';

describe('RateIncreaseTableComponent', () => {
  let component: RateIncreaseTableComponent;
  let fixture: ComponentFixture<RateIncreaseTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RateIncreaseTableComponent]
    });
    fixture = TestBed.createComponent(RateIncreaseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
