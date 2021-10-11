import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/Characters';

@Injectable()
export class DragonBallService {

  private _characters: ICharacter[] = [
    { name: 'Goku', power: 15000 },
    { name: 'Vegeta', power: 12000 },
  ];

  get characters(): ICharacter[] {
    return [...this._characters];
  }

  constructor() { }

  addCharacter(character: ICharacter) {
    this._characters.push(character);
  }
}
