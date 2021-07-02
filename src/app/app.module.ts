import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './pages/home/home.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MatirialModule } from './matirial.module';
import { PersonajesComponent } from './shared/components/paginas/personajes/personajes.component';
import { ProfesoresComponent } from './shared/components/paginas/profesores/profesores.component';
import { EstudiantesComponent } from './shared/components/paginas/estudiantes/estudiantes.component';
import { CommonModule } from '@angular/common';
import { NuevoEstudianteComponent } from './shared/components/paginas/nuevoEstudiante/nuevoEstudiante.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfesoresComponent,
    PersonajesComponent,
    EstudiantesComponent, 
    NuevoEstudianteComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    MatirialModule,  
    BrowserAnimationsModule,NoopAnimationsModule
      

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
