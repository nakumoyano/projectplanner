import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  activeLink: number;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  isOpen: boolean = false;
  isOpenEmployees: boolean = false;
  isOpenWorkArea: boolean = false;
  isOpenTask: boolean = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  toggleDropdownEmployees() {
    this.isOpenEmployees = !this.isOpenEmployees;
  }
  toggleDropdownWorkArea() {
    this.isOpenWorkArea = !this.isOpenWorkArea;
  }
  toggleDropdownTasks() {
    this.isOpenTask = !this.isOpenTask;
  }

  selectOption(option: string) {
    this.isOpen = false;
    this.isOpenWorkArea = false;
    this.isOpenTask = false;
  }

  selectOptionEmployees(option: string) {
    this.isOpenEmployees = false;
  }

  seletectOptionWorkArea(option: string) {
    this.isOpenWorkArea = false;
  }
  seletectOptionTask(option: string) {
    this.isOpenTask = false;
  }

  //funcion para cambiar el color al tener link activo
  setActiveLink(index: number) {
    this.activeLink = index;
  }

  //Funcion para cerrar sesión
  cerrarSesion() {
    Swal.fire({
      title: 'Está seguro que quiere cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, esto seguro',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/login']);
      }
    });
  }
}
