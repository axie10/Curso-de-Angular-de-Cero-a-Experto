//creamos una interface
export interface Products {
    descripcion : string,
    precio: number
}

//creamos dos objetos de tipo productos
// const telefono : Products =  {
//     descripcion: "nokia 67",
//     precio: 150.0
// }

// const tablet : Products =  {
//     descripcion: "ipad",
//     precio: 450.0
// }

// const {descripcion, precio} = telefono;
// const {descripcion, precio} = tablet;

//creamos otra interface
export interface CalcularOpcionesTaxa {
    tasa: number,
    productos : Products [],
}

// const opciones: CalcularOpcionesTaxa  = {
//     tasa: 0.15,
//     productos: [],
// }

//creamos dos variables que van a ser la tasa de descuento y un array con los dos objetos
// const productos = [telefono, tablet];
// const tasa = 0.15;

// importante cuando vayamos a pasarle más de tres parametros a una funcion
// es conveniente transformarla a un objeto
//creamos la funcion para calcular la taxa
export function taxCalculator(parametro: CalcularOpcionesTaxa) : [number, number] {

    const {productos , tasa} = parametro;

    let total = 0;
    
    productos.forEach( ({precio}) => {
        total += precio;
    });

    return [total , total * tasa];
}



// const [totalprecios, totaltax] = taxCalculator({ productos, tasa }); 

// console.log("Total", totalprecios );
// console.log("Tasa", totaltax);

export{};