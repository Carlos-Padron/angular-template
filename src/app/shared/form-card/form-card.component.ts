import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styles: [],
})
export class FormCardComponent {
  @Input() color = 'bg-base-100';
  @Input() shadow = 'shadow-md';
  @Input() width = 'w-auto';
  @Input() height = 'h-auto';
  @Input() title = 'card title';
}
