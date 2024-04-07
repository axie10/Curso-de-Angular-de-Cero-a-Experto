import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent {

  public version: number = 10;

  //ASI LO HE HECHO YO
  aumentarcont(value:string):void {
    this.version = value == '+' ? this.version += 1 : this.version -= 1;
  }
  //de esta manera que es como yo lpo he hecho se puede reutilizar
  restablecer (value:number){
    this.version = value;
  }

  //ASI LO HA HECHO EL PROFESOR
  aumentarcont1 (value:number){
    this.version += value
  }
  restablecer1 (){
    this.version = 10;
  }


}
