interface Pasajeros {
    nombre: string,
    hijos?: string [],
}

const pasajero1 : Pasajeros = {
    nombre: "pepe",
    hijos: ['naty', 'fer']
}

const pasajero2 : Pasajeros = {
    nombre: "pepe",
}



const cuantosNiños = (persona : Pasajeros) : number => {

    const numerodehjos = persona.hijos?.length || 0;

    console.log(persona.nombre, "tiene", numerodehjos, "hijos");


    return numerodehjos;

}

cuantosNiños(pasajero1);
cuantosNiños(pasajero2);