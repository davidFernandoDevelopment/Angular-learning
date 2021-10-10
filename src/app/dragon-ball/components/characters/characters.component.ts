import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from '../../interfaces/Characters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  @Input() characters!: ICharacter[];

  constructor() { }

  ngOnInit(): void {
  }

}
