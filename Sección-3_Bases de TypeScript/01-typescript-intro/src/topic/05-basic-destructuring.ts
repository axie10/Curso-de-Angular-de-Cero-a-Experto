//AQUI VAMOS A VER LA DESESTRUCTURACION
//La desestructuracion se puede aplicara los objetos, modulos, argumentos de las funciones
//consiste en que opodamos tomar de un objeto ciertas piezas que queremos, por ejemplo sacar la cancion para poder mostrarla por pantalla

//primera interface
interface AudioJugador {
    volumenCancion: number,
    duracionCancion: number,
    cancion: string,
    detalles: Detalles
}

interface RopaJugador {
    tipo: string,
    resistencia: number,
    nivel: number,
    habilidades: Habilidades
}

//segunda interface
interface Habilidades{
    velocidad: boolean,
    invisibilidad: boolean
}

interface Detalles {
    autor:string,
    año: number
}

//el objeto que hemos creado
//OBJETO AUDIO
const audioJugador: AudioJugador = {
    volumenCancion: 90,
    duracionCancion: 30,
    cancion: "meme",
    detalles: {
        autor: "cript",
        año: 1500
    }
}

//OBJETO ABRIGO
const abrigoAssasin : RopaJugador = {
    tipo: "abrigo",
    resistencia: 70,
    nivel: 3,
    habilidades: {
        velocidad: false,
        invisibilidad: true
    }
}

const { 
    tipo: t, 
    resistencia: r, 
    nivel: n, 
    habilidades ,
} = abrigoAssasin;
const {velocidad, invisibilidad} = habilidades;

console.log(abrigoAssasin.tipo);
console.log(abrigoAssasin.resistencia);
console.log(abrigoAssasin.nivel);
console.log(abrigoAssasin.habilidades);

console.log(t);
console.log(r);
console.log(n);
console.log(velocidad);
console.log(invisibilidad);

























//AQUI VAMOS A DESESTRUCTURAR EL OBJETO
//Si tenemos una variable con el mismo nombre que una de las propiedades lo que hacemos es que a la propiedad del opbjeto le podemos asignar otro nombre de variable con ":nuevonombre" => { cancion : otracancion}

const { 
    cancion : otracancion, 
    duracionCancion: duracion ,
    detalles
} = audioJugador;

//AQUI DESESTRUCTURAMOS EL OBJETO DENTRO DE UN OBJETO, PRIMERO DESESTRUCTURAMSO UN OBJETO Y DESPUES LO LLAMAMOS
const { autor : autor23 } = detalles;

console.log("Cancion: " , otracancion);
console.log("Duracion: " , duracion);
console.log('Autor: ' , autor23);

console.table({audioJugador})








export{};