import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MainPageComponent } from './main-page/main-page.component';
import { CharactersComponent } from './components/characters/characters.component';
import { FormCharacterComponent } from './components/form-character/form-character.component';
import { DragonBallService } from './services/dragon-ball.service';



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
  ],
  providers: [
    DragonBallService
  ]
})
export class DragonBallModule { }
