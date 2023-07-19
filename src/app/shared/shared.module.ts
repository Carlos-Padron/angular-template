import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AlertComponent } from './alert/alert.component';
import { LoadingModalComponent } from './loading-modal/loading-modal.component';
import { ModalComponent } from './modal/modal.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { FormCardComponent } from './form-card/form-card.component';

@NgModule({
  declarations: [
    CardComponent,
    AlertComponent,
    LoadingModalComponent,
    ModalComponent,
    CollapseComponent,
    ConfirmationModalComponent,
    TabsComponent,
    FormCardComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardComponent,
    AlertComponent,
    LoadingModalComponent,
    ModalComponent,
    CollapseComponent,
    ConfirmationModalComponent,
    TabsComponent,
    FormCardComponent,
  ],
})
export class SharedModule {}
