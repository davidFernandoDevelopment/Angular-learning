import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ListadoComponent } from './components/listado/listado.component';

@NgModule({
  declarations: [
    HeroComponent,
    ListadoComponent
  ],
  exports: [
    ListadoComponent
  ],
  imports: [
    CommonModule // Para usar las directivas estructurales.
  ]
})
export class HerosModule {

}
