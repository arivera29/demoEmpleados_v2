import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoAddComponent } from './empleado-add/empleado-add.component';


const routes: Routes = [
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'empleado-add', component: EmpleadoAddComponent },
  { path: 'empleado-add/:id', component: EmpleadoAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
