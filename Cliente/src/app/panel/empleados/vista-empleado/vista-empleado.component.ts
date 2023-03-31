import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleados/empleado';

@Component({
  selector: 'app-vista-empleado',
  templateUrl: './vista-empleado.component.html',
  styleUrls: ['./vista-empleado.component.css'],
})
export class VistaEmpleadoComponent implements OnInit {
  radioButtonSeleccionado = 'Todos';
  listEmpleados: Empleado[] = [
    {
      identificador: 1,
      nombre: 'Juan',
      apellido: 'Perez',
      sexo: 'Masculino',
      salario: 25000,
      areaTrabajo: 'Developer',
      seniority: 'Junior',
      email: 'juanperez@gmail.com',
      telefono: 2165421,
    },
    {
      identificador: 2,
      nombre: 'Marcos',
      apellido: 'Gonzalez',
      sexo: 'Masculino',
      salario: 65000,
      areaTrabajo: 'QA',
      seniority: 'Junior',
      email: 'juanperez@gmail.com',
      telefono: 2165421,
    },
    {
      identificador: 3,
      nombre: 'Marta',
      apellido: 'Garcia',
      sexo: 'Femenino',
      salario: 75000,
      areaTrabajo: 'QA',
      seniority: 'Junior',
      email: 'juanperez@gmail.com',
      telefono: 2165421,
    },
    {
      identificador: 4,
      nombre: 'Ignacio',
      apellido: 'Cortes',
      sexo: 'Masculino',
      salario: 55000,
      areaTrabajo: 'Diseñador',
      seniority: 'Junior',
      email: 'juanperez@gmail.com',
      telefono: 2165421,
    },
    {
      identificador: 5,
      nombre: 'Maria',
      apellido: 'Navarro',
      sexo: 'Femenino',
      salario: 50000,
      areaTrabajo: 'QA',
      seniority: 'Senior',
      email: 'juanperez@gmail.com',
      telefono: 2165421,
    },
    {
      identificador: 6,
      nombre: 'Joaquin',
      apellido: 'Marquez',
      sexo: 'Masculino',
      salario: 50000,
      areaTrabajo: 'Developer',
      seniority: 'Junior',
      email: 'juanperez@gmail.com',
      telefono: 2165421,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  getTotalEmpleados(): number {
    return this.listEmpleados.length;
  }

  getTotalDeveloper(): number {
    return this.listEmpleados.filter((list) => list.areaTrabajo === 'Developer')
      .length;
  }

  getTotalQA(): number {
    return this.listEmpleados.filter((list) => list.areaTrabajo === 'QA')
      .length;
  }
  getTotalDiseniador(): number {
    return this.listEmpleados.filter((list) => list.areaTrabajo === 'Diseñador')
      .length;
  }
}
