import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Empleado } from '../models/empleado';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-empleado-add',
  templateUrl: './empleado-add.component.html',
  styleUrls: ['./empleado-add.component.css']
})
export class EmpleadoAddComponent implements OnInit {

  empleado: Empleado;
  formGroup: FormGroup;
  success: boolean = false;
  id: number;
  isFound: boolean;

  constructor(
    private empleadoService: EmpleadoService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.verifyDataRecieved();
  }

  initForm(): void {
    this.formGroup = new FormGroup({
      Nombre: new FormControl(''),
      Apellido: new FormControl(''),
      FechaNacimiento: new FormControl(''),
      Foto: new FormControl(),
      EstadoCivil: new FormControl(''),
      Hermanos: new FormControl(''),
      fileSource: new FormControl('')
    });
  }

  saveEmpleado(): void {
    let data = this.formGroup.value
    data.Foto = "";
    data.Hermanos = this.formGroup.value.Hermanos === "1" ? true : false;

    if (this.isFound) {
      this.updateEmpleado();
      return
    }

    this.empleadoService.saveEmpleado(this.formGroup.value).subscribe(response => {
      this.success = true;
      this.empleado = response;
      this.formGroup.reset();
    });
  }

  updateEmpleado(): void {
    let data = this.formGroup.value
    data.Foto = "";
    data.Id = this.id;
    data.Hermanos = this.formGroup.value.Hermanos === "1" ? true : false;

    this.empleadoService.updateEmpleado(this.id, this.formGroup.value).subscribe(response => {
      this.empleado = response;
      this.formGroup.reset();
    });
  }

  verifyDataRecieved(): void {
    if(!this.id) return;
    this.empleadoService.getEmpleadoById(this.id).subscribe(response => {
      this.isFound = true;
      if(response) {
        this.empleado = response;
        this.formGroup.patchValue({
          Nombre: response.nombre,
          Apellido: response.apellido,
          FechaNacimiento: response.fechaNacimiento,
          EstadoCivil: response.estadoCivil,
          Hermanos: response.hermanos ? 0 : 1
        });
      }
    });
  }
}
