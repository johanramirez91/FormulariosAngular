import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
})
export class DinamicosComponent {
  @ViewChild('miFormulario') formulario!: NgForm;
  nuevoFavorito:string = ''

  persona: Persona = {
    nombre: 'Johan',
    favoritos: [
      { id: 1, nombre: 'Rick and Morty' },
      { id: 2, nombre: 'The big bang theory' },
    ],
  };

  guardar() {

  }

  agregarJuego(){
    const nuevo: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoFavorito
    }

    this.persona.favoritos.push({...nuevo})
    this.nuevoFavorito = ''
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  validarInput(): boolean {
    return (
      this.formulario?.controls['nombre']?.invalid &&
      this.formulario?.controls['nombre']?.touched
    );
  }
}
