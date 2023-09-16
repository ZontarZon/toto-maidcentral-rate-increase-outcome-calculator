import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-download-pdf-button',
  templateUrl: './download-pdf-button.component.html',
  styleUrls: ['./download-pdf-button.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule, MatIconModule],
})

/**
 * @source: https://stackoverflow.com/a/59316433/9457623
 */
export class DownloadPdfButtonComponent {
  exportAsPDF() {
    let data = document.getElementById('outcomes_container');
    if (data) {
      html2canvas(data).then((canvas) => {
        const contentDataURL = canvas.toDataURL('image/png');
        let pdf = new jsPDF('p', 'cm', 'a4'); //Generates PDF in portrait mode
        pdf.addImage(contentDataURL, 'PNG', 2, 0, 12, 30.0);
        pdf.save('Profit_outcome.pdf');
      });
    }
  }
}
