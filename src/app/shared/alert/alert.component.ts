import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styles: [
  ]
})
export class AlertComponent {

  @Input() bgColor = 'alert-info'
  @Input() icon = 'uil-info-circle'
  @Input() iconColor = 'text-white'
  @Input() textColor = 'text-white'

}
