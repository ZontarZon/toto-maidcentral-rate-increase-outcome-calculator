import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadPdfButtonComponent } from './download-pdf-button.component';

describe('DownloadPdfButtonComponent', () => {
  let component: DownloadPdfButtonComponent;
  let fixture: ComponentFixture<DownloadPdfButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadPdfButtonComponent]
    });
    fixture = TestBed.createComponent(DownloadPdfButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
