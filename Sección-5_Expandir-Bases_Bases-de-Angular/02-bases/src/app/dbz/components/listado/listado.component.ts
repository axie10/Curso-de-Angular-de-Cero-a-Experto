import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personajes } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoBbzComponent  {

  @Input()
  public listadopersonajes: Personajes [] = [];

  @Output()
  public indice: EventEmitter<string> = new EventEmitter();

  
  borraUltimoPersonaje(){
    this.listadopersonajes.pop();
  }
  
  guardariIndice(value?:string):void{
    this.indice.emit(value);
    // console.log(value)
  }


}
