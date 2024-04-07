//DECORADORES es una funcion

function classDecorador(
    constructor: any
){
    return class extends constructor{
        nueva = "nuevo";
        hello = "seoo";
    }

}

@classDecorador
export class Superclase {

    public ejemplo : string = "holaa";


    print() {
        console.log("hola programadores");
    }

    print2() {
        console.log(this.ejemplo);
    }
}

const per1 = new Superclase();

per1.print();
per1.print2();
console.log(Superclase);
console.log(per1);

