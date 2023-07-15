import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      li a:hover {
        background-color: #0f2a42;
        color: white;
      }

      li a.active {
        background-color: #0f2a42;
        color: white;
      }

      summary:hover {
        background-color: #0f2a42;
        color: white;
      }
      
      summary:hover a {
        background-color: #0f2a42;
        color: white;
      }
    `,
  ],
})
export class SidebarComponent {}
