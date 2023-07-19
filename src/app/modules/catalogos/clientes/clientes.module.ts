import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [IndexComponent, DetalleComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    CoreModule,
    SharedModule,
    SharedModule,
    NgApexchartsModule,
  ],
})
export class ClientesModule {}
