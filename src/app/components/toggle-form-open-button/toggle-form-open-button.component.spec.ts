import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleFormOpenButtonComponent } from './toggle-form-open-button.component';

describe('ToggleFormOpenButtonComponent', () => {
  let component: ToggleFormOpenButtonComponent;
  let fixture: ComponentFixture<ToggleFormOpenButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleFormOpenButtonComponent]
    });
    fixture = TestBed.createComponent(ToggleFormOpenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
