import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Empleado } from '../models/empleado';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {

  empleados: Empleado[] = [];
  idDelete: number;

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router
  ) { }

  ngAfterViewInit() {
    this.getEmpleados();
  }

  getEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe(response => {
      this.empleados = response;
    });
  }

  deleteEmpleado(): void {
    this.empleadoService.deleteEmpleado(this.idDelete).subscribe(response => {
      window.location.reload();
    });
  }

  updateEmpleado(id: number): void {
    this.router.navigate(['/', 'empleado-add', id]);
  }
}
