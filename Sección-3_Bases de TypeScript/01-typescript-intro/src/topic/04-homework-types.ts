//AQUI SE CREA UN OBJETO DENTRO DE UN OBJETO
//PARA ELLO CREAMOS DOS INTERFACES
//creamos estas dos interfaces para despues poder crear objetos con esta estructura
interface SuperHero {
    name: string,
    age: number,
    //aqui le hemos creado una propiedad a esta interface de tipo addres que es otra interface
    address: Direccion,
    showAddress : () => string
}

//creamos otra interface para meterla dentro de la anterior
interface Direccion {
    street: string,
    country: string,
    city: string
}


const superHeroe:SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ' tiene ' + this.age + " años "+ this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log({address});




export {};