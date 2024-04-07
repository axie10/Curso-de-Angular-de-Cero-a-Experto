import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})

export class HeroeComponent {

  public nombre: string = 'Iron man';
  public edad: number = 45;
  /*las VARIABLES de CONTROL estas es como yo habia hecho para oculatar
  los botones cuando son pulsados*/
  public control: boolean = true;
  public control2: boolean = true;
  public control3: boolean = false;

  /*METODOS GETTER AND SETTER, son metodos que angular los trata como propiedades
  es decir cuando los llamamos en nuestro template nos referimos a ellos como si 
  fuesen propiedades con la doble llave {{}} y en la clase los podemos
  llamar como si fuesen propiedades con el this -> this.capitalizar*/
  /*IMPORTANTE: existe in pipe que nos evita tener este codigo lo veremos 
  mas adelante*/
  capitalizar() : string {
    return this.nombre.toUpperCase();
  }

  getHeroDescripcion():string{
    //esto es lo que no entiendo bien
    return `${this.nombre} - ${this.edad}`
  }

  cambiarNombre(value:string):void{
    this.nombre = value;
    this.control = false;
    this.control3 = true;
    document.querySelector('#ee')!.innerHTML = 'Hola desde dentro del codigo';
    //esto me ha liado un poco
    // document.querySelectorAll('dd')!.forEach( pepe => {
    //   pepe.innerHTML = "Cambiamos todo desde dentro con el queryselectorAll";
    // })
  }

  cambiarEdad(value:number):void{
    this.edad = value;
    this.control2 = false;
    this.control3 = true;
  }

  restablecerValores():void{
    this.nombre = 'Iron Man';
    this.edad = 45;
    this.control = true;
    this.control2 = true;
    this.control3 = false;
    document.querySelector('#ee')!.innerHTML = 'Heroes';
    
  }

}
