import { Component } from '@angular/core';
import { ICharacter } from '../../interfaces/Characters';
import { DragonBallService } from '../../services/dragon-ball.service';

@Component({
  selector: 'app-form-character',
  templateUrl: './form-character.component.html',
  styleUrls: ['./form-character.component.css']
})
export class FormCharacterComponent {

  character: ICharacter = {
    name: '',
    power: 0
  };

  constructor(
    private _dragonBallService: DragonBallService
  ) { }

  sendCharacter(): void {
    if (this.character.name.trim().length) {
      this._dragonBallService.addCharacter(this.character);
      this.character = {
        name: '',
        power: 0
      };
    }
  }
}
