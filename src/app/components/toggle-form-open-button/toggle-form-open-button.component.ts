import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-toggle-form-open-button',
  templateUrl: './toggle-form-open-button.component.html',
  styleUrls: ['./toggle-form-open-button.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule, MatIconModule],
})
export class ToggleFormOpenButtonComponent {
  @Input() buttonCaption!: string;
}
