import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personajes } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-add-personaje',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {


  //esta variable que emitiomos es la que llamamos en el selector de este componenete
  //como si fuese un evento
  @Output()
  public nuevoPersonaje: EventEmitter<Personajes> = new EventEmitter();



  public personaje: Personajes = {
    nombre: "pepe",
    poder: 0
  }

  emitirPersonaje():void{
    //EL 'DEBUGGER' LO PODEMOS UTILIZAR PARA PARAR LA EJECUACION DE NUESTRA
    //EN EL PUNTO QUE NOSOTROS QUERAMOS, DE ESTA MANERA PODER VER DE FORMA MAS EXAHUSTIVA
    //ALGUN ERRROR QUE NO SOMOS CAPACES DE ENCONTRAR EN NUESTRA APP
    //debugger;
    console.table(this.personaje);

    if(this.personaje.nombre.length === 0) return;
    this.nuevoPersonaje.emit(this.personaje);

    this.personaje =  {nombre: '', poder: 0}

    
  }
  
}
