import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  public names: string [] = ['Spiderman', 'Hulk', 'Ironman', 'Batman'];
  public last?: string;

  //poner en mayus el heroe que metamos por parametro
  // mayusculas(value:string):string{
  //   return value.toUpperCase();
  // }

  //borramos el ultimo heroe
  borrarUltimoHeroe():void{
    this.last = this.names.pop();
  }

  //recuperamos el ultimo heroe
  recuperarUltimoHeroe():void{

    if(this.last)
    this.names.push(this.last);  

  }

}
