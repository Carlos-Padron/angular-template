import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { TemplateComponent } from 'src/app/core/template/template.component';

const data = { menu: 'CATALOGOS' };
const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    data,
    children: [
      {
        path: '',
        component: IndexComponent,
        
      },
      {
        path: 'detalle',
        component: DetalleComponent,
      },
      // { path: '', redirectTo: '', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
