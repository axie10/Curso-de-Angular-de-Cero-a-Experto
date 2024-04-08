import { NgModule } from "@angular/core";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { ListComponent } from "./components/list/list.component";
import { CommonModule } from "@angular/common";



@NgModule({
    declarations: [
        HeroeComponent,
        ListComponent,
        
    ],
    exports: [
        HeroeComponent,
        ListComponent,
        
    ],
    imports:  [
        /*Cuando vayamos a importar modulos dentro de una encapsulacion
        que hemos creado nostros se ponen en esta seccion de imports.
        Como estamos usando directivas necesitamos incluir el CommonModule 
        para que este modulo heroes.module.ts encapsulado pueda utilizarlas
        si no no nos va a dejar usarlo. En el caso del counter no es necesario
        porque no estamos usando ninguna directiva en el su template*/
        CommonModule
    ]
})
export class HeroesModule{

}

