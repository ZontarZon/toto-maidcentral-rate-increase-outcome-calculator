import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

/**
 * @title Inputs with prefixes and suffixes
 */
@Component({
  selector: 'app-form-input-field',
  templateUrl: './form-input-field.component.html',
  styleUrls: ['./form-input-field.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
})
export class FormInputFieldComponent {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() icon!: string;
  @Input() prefix!: string;
  @Input() formValue!: string;
  @Input() size!: string;

  constructor() {}

  ngOnInit() {}
}
