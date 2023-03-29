import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-rol',
  templateUrl: './nuevo-rol.component.html',
  styleUrls: ['./nuevo-rol.component.css'],
})
export class NuevoRolComponent implements OnInit {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: [, Validators.required],
    });
  }

  cargarRol() {
    Swal.fire({
      title: 'Está seguro que quiere guardar este rol?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, guardar rol',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Guardado!', 'Rol cargado con éxito.', 'success');
      }
    });
  }

  get controlNombre(): FormControl {
    return this.formulario.controls['nombre'] as FormControl;
  }
}
