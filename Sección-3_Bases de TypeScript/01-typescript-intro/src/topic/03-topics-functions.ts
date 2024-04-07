//PRIMERA PARTE

//declaracion de funciones con parametros
function numeros (a: number , b : number){

    return a + b;
}
const resultado: number = numeros (5,5);
// console.log({resultado});


//funciones con flechas
const flecha = (a:number , b:number) : string => {
    //esta sintaxis sirve para hacer templates literales que son DEPENDENCIAS
    //esto se utiliza para poder introducirle numeros como parametyros y que pueda dar un string
    return `${a + b}`;
}

const flecha2 = (a:number , b:number) : number => {
    //esta sintaxis sirve para hacer templates literales que son DEPENDENCIAS
    return a + b;
}
const p = flecha (7,9);
const i = flecha2 (3,5);

//funcion para ponerle parametros que no sean obligatorios
function multiply ( primerNumero:number, segundoNumero?:number, base:number = 2): number{
    return primerNumero * base;
}
const resultadomultiply =  multiply(5);
// console.log({p,i, resultadomultiply});


//SEGUNDA PARTE DE LAS FUNCIONES
//definimos una interface
interface personaje {
    name: string,
    hp: number,
    showhp: () => void
}
//definimos el objeto de tipo personaje,no hace falta ponerle que es de tipo personaje, pero si es obligatorio que tenga name, hp y hpshow es decir los parametros de la interface
const raul: personaje = {
    name: 'pepe',
    hp: 100,
    showhp () {
        console.log(`la vida de ${this.name} es ${this.hp}`);
    }
}
raul.showhp();

//creamos la funcion para aumentarle la vida, poniendole que el primer parametro es de tipo personaje que corresponde a la interface que hemos creado antes y el segundo va a ser la cantidad de vida qwue queremos aumentarle
const vidaPersonaje = (carac: personaje, masvida:number) => {
    carac.hp += masvida;
}

//le estamos aumentado la vida al personaje de raul
vidaPersonaje(raul, 50);
vidaPersonaje(raul, 50);
//estamos llamando a una funcion dentro del objeto de raul que nos muestra la vida que tiene despues de aumentarsela
raul.showhp();




















export{};