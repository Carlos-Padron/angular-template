import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './authentication/login-page/login-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    SidebarComponent,
    NavbarComponent,
    TemplateComponent,
  ],
  imports: [CommonModule],
  exports: [TemplateComponent],
})
export class CoreModule {}
