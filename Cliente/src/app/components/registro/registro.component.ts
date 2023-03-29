import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  formulario: FormGroup;

  visible = true;
  changetype: boolean = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombreUsuario: [, Validators.required],
      email: [, Validators.required],
      password: [, Validators.required],
      checkbox: [, Validators.required],
    });
  }

  mostrarPassword() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  get controlNombreUsuario(): FormControl {
    return this.formulario.controls['nombreUsuario'] as FormControl;
  }

  get controlEmail(): FormControl {
    return this.formulario.controls['email'] as FormControl;
  }

  get controlPassword(): FormControl {
    return this.formulario.controls['password'] as FormControl;
  }

  get controlCheckbox(): FormControl {
    return this.formulario.controls['checkbox'] as FormControl;
  }
}
