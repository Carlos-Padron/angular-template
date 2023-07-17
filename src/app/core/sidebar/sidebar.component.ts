import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// <!-- https://angular-material.fusetheme.com/ui/material-components -->

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
export class SidebarComponent implements OnInit {
  activeSubmenu = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data
      .subscribe((submenu) => {
        this.activeSubmenu = submenu['menu'];
      })
      .unsubscribe();
  }
}
