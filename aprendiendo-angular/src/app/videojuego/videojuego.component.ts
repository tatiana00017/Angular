import { Component } from "@angular/core";

@Component({
    selector: 'videojuego',
    standalone: true,
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent{
    public titulo: string;
    public listado: string;
    constructor(){
        this.titulo = "Componente de videojuegos";
        this.listado = "Listado de los juegos mas populares";
    }
}