import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MainPageComponent } from './main-page/main-page.component';
import { CharactersComponent } from './components/characters/characters.component';
import { FormCharacterComponent } from './components/form-character/form-character.component';



@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    FormCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DragonBallModule { }
