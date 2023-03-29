import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-seniority',
  templateUrl: './nuevo-seniority.component.html',
  styleUrls: ['./nuevo-seniority.component.css'],
})
export class NuevoSeniorityComponent implements OnInit {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: [, Validators.required],
    });
  }

  cargarSeniority() {
    Swal.fire({
      title: 'Está seguro que quiere guardar este seniority?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, guardar seniority',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Guardado!', 'Seniority cargado con éxito.', 'success');
      }
    });
  }

  get controlNombre(): FormControl {
    return this.formulario.controls['nombre'] as FormControl;
  }
}
