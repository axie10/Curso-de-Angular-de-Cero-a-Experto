import { Personajes } from './../interfaces/personaje.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';


@Injectable({
    providedIn: 'root'
})

export class DbzService {

    public Listadopersonajes: Personajes [] = [
        {
            id: uuid(),
            nombre:"Goku",
            poder:1000,
        }
        ,
        {
            id: uuid(),
            nombre:"Vegetta",
            poder:500,
        },
        {
            id: uuid(),
            nombre:"Krilling",
            poder:300,
        },
    ];

    //esta es la funcuion  que se ejecuta cuando se produce el evento del @Output
    //del formulario.ts para añadir un personaje
    nuevopersonaje(personaje: Personajes):void{

        const nuevopersonaje: Personajes = {
            id: uuid(),
            //esto se utiliaza para no tener que desestructurar un objeto
            //le estas diceindo que te coja todas las propiedades y te las 
            //esparza aqui
            ...personaje
        }

        this.Listadopersonajes.push(nuevopersonaje);
    }

    // esta es la funcuion  que se ejecuta cuando se produce el evento del @Output
    // del listado.ts para borrar un personaje
    // borraUltimoPersonaje(){
    //     this.Listadopersonajes.pop();
    // }

    borrarPersonajePorID(value:string):void{

        for(let i = 0; i < this.Listadopersonajes.length; i++){
            if(this.Listadopersonajes[i].id === value){
                this.Listadopersonajes.splice(i, 1);
            }
        }
    }
    
}