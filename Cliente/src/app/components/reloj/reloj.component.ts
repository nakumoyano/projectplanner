import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css'],
})
export class RelojComponent implements OnInit {
  horas: number;
  minutos: number;
  segundos: number;
  am_pm: string;

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      const fecha = new Date();
      this.horas = fecha.getHours();
      this.minutos = fecha.getMinutes();
      this.am_pm = this.horas >= 12 ? 'PM' : 'AM';
    }, 1000);
  }
}
