import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styles: [],
})
export class CollapseComponent {
  @Input() title = 'Click me to show/hide content';
  @Input() bgColor = 'bg-red-200';
  @Input() textColor = 'text-red-500';
}
