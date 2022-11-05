import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre : string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  @ViewChild('miFormulario') miFormulario!: NgForm;

  persona: Persona={
    nombre: 'Eder',
    favoritos:[
      {id:1, nombre: 'Fifa'},
      {id:2, nombre: 'F1'}
    ]
  }

  guardar(){
    console.log("formularioPosteado")
  }

  nombreValido(): boolean{
    //console.log(this.miFormulario?.controls.nombre?.invalid);

    return this.miFormulario?.controls.nombre?.invalid && 
           this.miFormulario?.controls.nombre?.touched
  }

  eliminar(index: number){
      this.persona.favoritos.splice(index,1);
  }

  agregar(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    };

    this.persona.favoritos.push( {...nuevoFavorito} );
    this.nuevoJuego = '';

  }


}
