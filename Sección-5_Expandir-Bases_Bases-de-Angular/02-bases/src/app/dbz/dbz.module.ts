import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.components';
import { ListadoBbzComponent } from './components/listado/listado.component';
import { FormularioComponent } from './components/formulario/formulario.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListadoBbzComponent,
    FormularioComponent
  ],
  exports: [
    CommonModule,
    MainPageComponent,
  ],

  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { 
  

}

