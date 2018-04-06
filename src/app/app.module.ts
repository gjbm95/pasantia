import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home/home.component';
import { ConfirmarComponent } from './confirmar/confirmar.component';

import { ContactModel } from '././../models/ContactModel';
import { ApipruebaService } from './apiprueba.service';

const appRoutes: Routes = [
  { path: 'index', component: HomeComponent },
  { path: 'login', component: IniciarSesionComponent },
  { path: 'signup',component: RegistroComponent },
  { path: 'confirm',component: ConfirmarComponent },
  { path: 'profile', component: PerfilComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    RegistroComponent,
    PerfilComponent,
    HomeComponent,
    ConfirmarComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    )
  ],
  providers: [ ApipruebaService ],
  bootstrap: [AppComponent]
})



export class AppModule { }
