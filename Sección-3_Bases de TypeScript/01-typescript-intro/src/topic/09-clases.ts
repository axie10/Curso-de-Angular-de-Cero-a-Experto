export class Persona {


    constructor(
        public nombre: string,
        public lastname: string,
        private direccion?: string,
    ){}

    cambiardirecion(direccion:string){
        this.direccion = direccion;
    }
}

/*HERENCIA: estamos extendiendo de la clase Persona y estamos creando la clase Hero
Cuando tenemos un nivel de herencia no esta mal extender clase
pero cuando ya vamos a extender a más niveles es más recomendable hacer la composicion*/
// export class Hero extends Persona{

//     constructor(
//         public alterEgo: string,
//         public edad : number,
//         public nombrereal: string,
//     ){
//         super(nombrereal)
//     }
// }

/*COMPOSICION: consiste en crear una propiedad, en esta clase, poniendole el  tipo de la clase
que queremos heredar. Despues la inicialiamos en el constructor instanciandola*/

export class Hero {


    constructor(
        public alterEgo: string,
        public edad : number,
        public nombrereal: string,
        public persona: Persona,
    ){}
}

const persona2 = new Persona("pepe", "garcia");

const persona1 = new Hero("Ironman", 34, "tony", persona2 );
console.log(persona1);



