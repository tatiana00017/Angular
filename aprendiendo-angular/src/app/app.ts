import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { Cursos } from './cursos/cursos';
import { configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VideojuegoComponent, ZapatillasComponent, Cursos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public title = configuracion.titulo;
  
  
  
}
