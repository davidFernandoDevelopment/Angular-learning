import { Component, EventEmitter, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/Characters';

@Component({
  selector: 'app-form-character',
  templateUrl: './form-character.component.html',
  styleUrls: ['./form-character.component.css']
})
export class FormCharacterComponent {

  @Output('onSend') send: EventEmitter<ICharacter> = new EventEmitter<ICharacter>();
  character: ICharacter = {
    name: '',
    power: 0
  };

  constructor() { }

  sendCharacter(): void {
    if (this.character.name.trim().length) {
      this.send.emit(this.character);
      this.character = {
        name: '',
        power: 0
      };
    }
  }
}
