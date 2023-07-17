import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent {

  @Input() color = 'bg-base-100'
  @Input() shadow = 'shadow-md'
  @Input() width = 'w-auto'
  @Input() height = 'h-auto'

}
