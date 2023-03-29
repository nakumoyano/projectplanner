import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;

  visible = true;
  changetype: boolean = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: [, Validators.required],
      password: [, Validators.required],
    });
  }

  mostrarPassword() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  get controlEmail(): FormControl {
    return this.formulario.controls['email'] as FormControl;
  }

  get controlPassword(): FormControl {
    return this.formulario.controls['password'] as FormControl;
  }
}
