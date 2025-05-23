import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ViewPetsPageComponent } from './pages/view-pets-page/view-pets-page.component';
import { PetDetailPageComponent } from './pages/pet-detail-page/pet-detail-page.component';
import { InfoCitaPageComponent } from './pages/info-cita-page/info-cita-page.component';
import { EditPetPageComponent } from './pages/edit-pet-page/edit-pet-page.component';
import { AddHistorialPageComponent } from './pages/add-historial-page/add-historial-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirecciona raíz a /login
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'all', component: ViewPetsPageComponent },
  { path: 'mascota', component: PetDetailPageComponent },
  { path: 'cita', component: InfoCitaPageComponent},
  { path: 'editarMascota', component: EditPetPageComponent},
  { path: 'item', component: AddHistorialPageComponent},
  { path: '**', redirectTo: 'login' } // Página no encontrada → login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
