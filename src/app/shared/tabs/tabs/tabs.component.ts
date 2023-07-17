import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styles: [],
})
export class TabsComponent {
  @Input() activeTabIndex = 0;
  @Input() tabsHeader: { icon?: string; name: string }[] = [
    {
      icon: 'uil uil-apps',
      name: 'Tab 1',
    },
    {
      icon: 'uil uil-user-circle',
      name: 'Tab 2',
    },
    {
      icon: 'uil uil-setting',
      name: 'Tab 3',
    },
    {
      name: 'Tab 4',
    },
  ];
}
