import { Products, taxCalculator, CalcularOpcionesTaxa } from './07-desectruturacion -argumentos.ts';

const carritodecompra : Products [] = [
    {
        descripcion : 'nokia',
        precio: 120
    },

    {
        descripcion : 'ipad',
        precio: 320
    },
];

//PROBANDO YO COSAS
// let sum = 1;
// carritodecompra.forEach(carrito =>{

//     //estamos desestructurando
//     const {descripcion, precio} = carrito;

//     console.log("El producto",sum ,"es",descripcion,"y su precio es",precio)
//     ++sum;
// })
//-------

const pepe: CalcularOpcionesTaxa = {
    tasa: 0.15,
    productos: carritodecompra,
}

const {tasa:tasa1, productos:productos1} = pepe;

// const tasa = 0.15;
// const productos = carritodecompra;

const [totalproductos, totaltaxa] = taxCalculator(pepe);

console.log("El total es " , totalproductos);
console.log("La taxa es ", totaltaxa);

console.log(tasa1);
console.log(productos1);
