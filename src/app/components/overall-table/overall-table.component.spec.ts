import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallTableComponent } from './overall-table.component';

describe('OverallTableComponent', () => {
  let component: OverallTableComponent;
  let fixture: ComponentFixture<OverallTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverallTableComponent]
    });
    fixture = TestBed.createComponent(OverallTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
