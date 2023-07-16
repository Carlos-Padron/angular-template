import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [],
})
export class IndexComponent {
  visible = false;

  constructor() {}

  o() {
    this.visible = true;
  }

  show(event: boolean) {
    console.log(event);
  }
}
