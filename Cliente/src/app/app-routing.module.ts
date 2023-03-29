import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaComponent } from './complements/ayuda/ayuda.component';
import { ContactoComponent } from './complements/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CasosDeUsoComponent } from './pages/casos-de-uso/casos-de-uso.component';
import { DonacionesComponent } from './pages/donaciones/donaciones.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { NuevoRolComponent } from './panel/areaTrabajo/nuevo-rol/nuevo-rol.component';
import { NuevoSeniorityComponent } from './panel/areaTrabajo/nuevo-seniority/nuevo-seniority.component';
import { DetalleEmpleadoComponent } from './panel/empleados/detalle-empleado/detalle-empleado.component';
import { EditarEmpleadoComponent } from './panel/empleados/editar-empleado/editar-empleado.component';
import { NuevoEmpleadoComponent } from './panel/empleados/nuevo-empleado/nuevo-empleado.component';
import { VistaEmpleadoComponent } from './panel/empleados/vista-empleado/vista-empleado.component';
import { InicioPanelComponent } from './panel/inicio-panel/inicio-panel.component';
import { DetalleProyectoComponent } from './panel/proyectos-panel/detalle-proyecto/detalle-proyecto.component';
import { EditarProyectoComponent } from './panel/proyectos-panel/editar-proyecto/editar-proyecto.component';
import { NuevoProyectoComponent } from './panel/proyectos-panel/nuevo-proyecto/nuevo-proyecto.component';
import { VistaProyectosComponent } from './panel/proyectos-panel/vista-proyectos/vista-proyectos.component';

const routes: Routes = [
  //pagina de presentacion
  { path: '', component: InicioComponent },
  { path: 'gestion-proyectos', component: ProyectosComponent },
  { path: 'casos-de-uso', component: CasosDeUsoComponent },
  { path: 'donaciones', component: DonacionesComponent },
  //login y registro
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  //inicio
  { path: 'dashboard', component: InicioPanelComponent },
  // proyectos
  { path: 'proyectos', component: VistaProyectosComponent },
  { path: 'nuevo-proyecto', component: NuevoProyectoComponent },
  { path: 'editar-proyecto', component: EditarProyectoComponent },
  { path: 'detalle-proyecto', component: DetalleProyectoComponent },
  //empleados
  { path: 'empleados', component: VistaEmpleadoComponent },
  { path: 'nuevo-empleado', component: NuevoEmpleadoComponent },
  { path: 'editar-empleado', component: EditarEmpleadoComponent },
  { path: 'detalle-empleado/:id', component: DetalleEmpleadoComponent },
  //area de trabajo
  { path: 'nuevo-rol', component: NuevoRolComponent },
  { path: 'nuevo-seniority', component: NuevoSeniorityComponent },
  //complements
  { path: 'contacto', component: ContactoComponent },
  { path: 'ayuda', component: AyudaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
