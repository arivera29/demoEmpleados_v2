import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from "rxjs";

import { Empleado } from "../models/empleado";

@Injectable({
  providedIn: "root"
})
export class EmpleadoService {
  private readonly controller = "/api/Empleados";

  constructor(private httpClient: HttpClient) { }

  getEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(this.controller);
  }

  getEmpleadoById(id: number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(this.controller+"/"+id);
  }

  saveEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.httpClient.post<Empleado>(this.controller, empleado);
  }

  updateEmpleado(id: number, empleado: Empleado): Observable<Empleado> {
    return this.httpClient.put<Empleado>(this.controller+"/"+id, empleado);
  }

  deleteEmpleado(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.controller+"/"+id)
  }
}
