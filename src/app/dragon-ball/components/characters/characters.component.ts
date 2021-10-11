import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from '../../interfaces/Characters';
import { DragonBallService } from '../../services/dragon-ball.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(
    private _dragonBallService: DragonBallService
  ) { }

  get characters(): ICharacter[] {
    return this._dragonBallService.characters;
  }

  ngOnInit(): void {
  }

}
