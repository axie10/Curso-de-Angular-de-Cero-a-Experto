//NO DEBEMOS USAR EL ANY CASI NUNCA SOLO EN OCASIONES MUY ESPECIALES
export function pepeluis (sukk:any):any {
    return sukk;
}

pepeluis(12);
pepeluis("mimm");
pepeluis([1,2,3,4]);

const array: [] = pepeluis([1,2,3,4]);
const soyunstring: string = pepeluis("[1,2,3,4]");

console.log(soyunstring.split(" "));
console.log(array.splice(2));
console.table(array.length);

/*AHORA VAMOS A USAR EL TIPO GENERICO PARA TENER QUE EVITAR USAR EL ANY,
ES LA MANERA QUE TENEMOS DE TIPAR UNA VARIABLE CUANDO NO SABEMOS QUE TIPO
DE DATO VA A SER*/
export function pepeluis2<T> (sukk:T):T {
    return sukk;
}

pepeluis(12);
pepeluis("mimm");
pepeluis([1,2,3,4]);

const array1= pepeluis2<number[]>([1,2,3,4]);
const soyunstring2 = pepeluis2<string>("[1,2,3,4]");

console.log(soyunstring2.split(" "));
console.log(array1.join("-"));
console.table(array1.length);

