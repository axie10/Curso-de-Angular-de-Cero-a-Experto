
//arrays
let array1 = [];

let array2 = ['pepe', 'raul', ['suki', 'pepi']];

//interface, es para crear un modelo
interface prototipo {
    nombre: string,
    poblacion: number,
    pueblos : string [],
    idioma? : string
}

//objeto de tipo la interface que hemos creado antes
let ciudad : prototipo = {
    nombre : "Caceres",
    poblacion : 1000,
    pueblos : ["trujillo", "malpartida", "Casar"],
}

console.table(ciudad);
console.table(array2);























// const habilidades: string[] = ['bash','counter','salud'];
    
// //con la interface lo que hacemos es crear un estrtutura con sus variables tipadas para poder crear objetos con dichas condiciones
// interface habilidades {
//     name: string;
//     hp:number;
//     skills: string [];
//     pueblo?: string;
// }

// const strider: habilidades = {
//     name: 'pepe',
//     hp: 1234,
//     skills: ['lucha', 'visionNocturna'],
// }

// let nombre = strider.name;
// strider.pueblo = "badajoz";

// console.log(nombre);
// console.table(strider);






export{};