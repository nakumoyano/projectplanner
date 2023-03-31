import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';

@Component({
  selector: 'app-vista-proyectos',
  templateUrl: './vista-proyectos.component.html',
  styleUrls: ['./vista-proyectos.component.css'],
})
export class VistaProyectosComponent implements OnInit {
  searchTerm: string;
  radioButtonSeleccionado = 'Todos';
  listProyectos: Proyecto[] = [
    {
      id: 1,
      tituloProyecto: 'ProjectPlanner',
      areaProyecto: 'Developer',
      seniorityAsignado: 'Junior',
      fechaCreacion: '17/02/22',
      tipoProyecto: 'Mobile',
      estado: 'En Curso',
    },
    {
      id: 2,
      tituloProyecto: 'UnPocodeTodo',
      areaProyecto: 'Developer',
      seniorityAsignado: 'Senior',
      fechaCreacion: '17/02/22',
      tipoProyecto: 'Aplicacion Web',
      estado: 'En Curso',
    },
    {
      id: 3,
      tituloProyecto: 'Pomodoro',
      areaProyecto: 'Diseñador',
      seniorityAsignado: 'Semi Senior',
      fechaCreacion: '17/02/22',
      tipoProyecto: 'Aplicacion Web',
      estado: 'Finalizado',
    },
    {
      id: 4,
      tituloProyecto: 'QuiñoneroEHijos',
      areaProyecto: 'Developer',
      seniorityAsignado: 'Junior',
      fechaCreacion: '17/02/22',
      tipoProyecto: 'Mobile',
      estado: 'Cancelado',
    },
    {
      id: 5,
      tituloProyecto: 'Motorrs',
      areaProyecto: 'Developer',
      seniorityAsignado: 'Junior',
      fechaCreacion: '17/02/22',
      tipoProyecto: 'Mobile',
      estado: 'Retrasado',
    },
    {
      id: 6,
      tituloProyecto: 'Futbol Libre',
      areaProyecto: 'Developer',
      seniorityAsignado: 'Junior',
      fechaCreacion: '17/02/22',
      tipoProyecto: 'Otro',
      estado: 'En Curso',
    },
    {
      id: 7,
      tituloProyecto: 'TodoList',
      areaProyecto: 'QA',
      seniorityAsignado: 'Senior',
      fechaCreacion: '19/03/22',
      tipoProyecto: 'Aplicacion de Escritorio',
      estado: 'En Curso',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  getTotalProyectos(): number {
    return this.listProyectos.length;
  }

  getTotalWeb(): number {
    return this.listProyectos.filter(
      (list) => list.tipoProyecto === 'Aplicacion Web'
    ).length;
  }

  getTotalEscritorio(): number {
    return this.listProyectos.filter(
      (list) => list.tipoProyecto === 'Aplicacion de Escritorio'
    ).length;
  }

  getTotalMobile(): number {
    return this.listProyectos.filter((list) => list.tipoProyecto === 'Mobile')
      .length;
  }

  getTotalOtro(): number {
    return this.listProyectos.filter((list) => list.tipoProyecto === 'Otro')
      .length;
  }
}
