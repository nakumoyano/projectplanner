import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { CasosDeUsoComponent } from './pages/casos-de-uso/casos-de-uso.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { DonacionesComponent } from './pages/donaciones/donaciones.component';
import { LoginComponent } from './components/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { RegistroComponent } from './components/registro/registro.component';
import { AyudaComponent } from './complements/ayuda/ayuda.component';
import { ContactoComponent } from './complements/contacto/contacto.component';
import { InicioPanelComponent } from './panel/inicio-panel/inicio-panel.component';
import { RelojComponent } from './components/reloj/reloj.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NuevoProyectoComponent } from './panel/proyectos-panel/nuevo-proyecto/nuevo-proyecto.component';
import { DetalleProyectoComponent } from './panel/proyectos-panel/detalle-proyecto/detalle-proyecto.component';
import { EditarProyectoComponent } from './panel/proyectos-panel/editar-proyecto/editar-proyecto.component';
import { VistaProyectosComponent } from './panel/proyectos-panel/vista-proyectos/vista-proyectos.component';
import { NuevoEmpleadoComponent } from './panel/empleados/nuevo-empleado/nuevo-empleado.component';
import { EditarEmpleadoComponent } from './panel/empleados/editar-empleado/editar-empleado.component';
import { VistaEmpleadoComponent } from './panel/empleados/vista-empleado/vista-empleado.component';
import { DetalleEmpleadoComponent } from './panel/empleados/detalle-empleado/detalle-empleado.component';
import { NuevoRolComponent } from './panel/areaTrabajo/nuevo-rol/nuevo-rol.component';
import { NuevoSeniorityComponent } from './panel/areaTrabajo/nuevo-seniority/nuevo-seniority.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    ProyectosComponent,
    CasosDeUsoComponent,
    AcercaDeComponent,
    DonacionesComponent,
    LoginComponent,
    RegistroComponent,
    AyudaComponent,
    ContactoComponent,
    InicioPanelComponent,
    RelojComponent,
    SidebarComponent,
    NuevoProyectoComponent,
    DetalleProyectoComponent,
    EditarProyectoComponent,
    VistaProyectosComponent,
    NuevoEmpleadoComponent,
    EditarEmpleadoComponent,
    VistaEmpleadoComponent,
    DetalleEmpleadoComponent,
    NuevoRolComponent,
    NuevoSeniorityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
