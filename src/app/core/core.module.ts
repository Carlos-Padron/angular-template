import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './authentication/login-page/login-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TemplateComponent } from './template/template.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginPageComponent,
    SidebarComponent,
    NavbarComponent,
    TemplateComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [TemplateComponent],
})
export class CoreModule {}
