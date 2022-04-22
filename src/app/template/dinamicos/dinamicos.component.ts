import { Component } from '@angular/core';

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
  styles: [
  ]
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: 'Jan',
    favoritos: [
      { id: 1, nombre: 'Zelda' },
      { id: 2, nombre: 'Need4Speed' }
    ]
  }

  eliminar( index:number ) {
    this.persona.favoritos.splice( index, 1 );
  }

  guardar() {
    console.log('Formulario posteado');
  }

}
