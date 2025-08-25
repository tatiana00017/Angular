import { Component } from "@angular/core";
import { configuracion } from "../models/configuracion";

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent {
    public titulo: string = "Componente de videojuegos";
    public listado: string = "Listado de los juegos mas populares";
    ngOnInit() {
        console.log("OnInit ejecutado")
    }
    ngDoCheck() {
        console.log("doccheck ejecutado")
    }
    cambiarTitulo(){
        this.titulo = configuracion.titulo;
    }
}