import { Component, EventEmitter, Output } from '@angular/core';
import { Personajes } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.components.html'
})

export class MainPageComponent {

    constructor (private dbzService: DbzService  ){ 
    }

    get personajes() : Personajes [] {
        //repasar
        return [...this.dbzService.Listadopersonajes];
    }

    borrarPersonajePorID(id: string):void{
        this.dbzService.borrarPersonajePorID(id);
    }

    nuevopersonaje(personaje: Personajes):void{
        this.dbzService.nuevopersonaje(personaje);
    }


}