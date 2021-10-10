import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../interfaces/Characters';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  characters: ICharacter[] = [
    { name: 'Goku', power: 15000 },
    { name: 'Vegeta', power: 12000 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addCharacter(character: ICharacter) {
    this.characters.push(character);
  }
}
