import {Products, CalcularOpcionesTaxa, taxCalculator} from './07-desectruturacion -argumentos';

const carritodecompra : Products [] = [
    {
        descripcion: 'ipad',
        precio: 150
    },

    {
        descripcion: 'ipad',
        precio: 150
    }
]

const productos_tasa: CalcularOpcionesTaxa = {
    tasa: 0.15,
    productos: carritodecompra
}

const [totalprecio, totaltasa] = taxCalculator (productos_tasa);

console.log(totalprecio);
console.log(totaltasa);



