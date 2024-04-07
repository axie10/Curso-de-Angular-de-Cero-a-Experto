import './style.css';
import { setupCounter } from './counter.ts';
// import "./topic/01-basic-types.ts";
// import "./topic/02-object-interdace.ts";
// import "./topic/03-topics-functions.ts";
// import "./topic/04-homework-types.ts";
// import "./topic/05-basic-destructuring.ts";
// import "./topic/06-arrays-desestructuracion.ts";
//import "./topic/07-desectruturacion -argumentos.ts";
//import "./topic/08-import-export.ts";
//import "./topic/08-import-export-repaso.ts";
// import "./topic/09-clases.ts";
//import "./topic/10-generics.ts";
//import "./topic/11-decoradores.ts";
import "./topic/12-optional-chaining.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello</h1>
  </div>
`;

console.log("Hello");
//alert("Hola programadores");


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


