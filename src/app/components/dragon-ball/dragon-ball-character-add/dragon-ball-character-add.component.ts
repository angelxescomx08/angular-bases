import { Component, output, signal } from '@angular/core';
import { Character } from '../../../types/character.type';

@Component({
  selector: 'dragon-ball-character-add',
  imports: [],
  templateUrl: './dragon-ball-character-add.component.html',
  styleUrl: './dragon-ball-character-add.component.css'
})
export class DragonBallCharacterAddComponent {
  public name = signal("");
  public power = signal(0);

  newCharacter = output<Character>();

  addCharacter() {
    if (!this.name() || this.power() <= 0) return;

    const newCharacter: Character = {
      // id: this.characters().length + 1,
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power()
    }

    // this.characters.update(current => [...current, newCharacter]);
    this.newCharacter.emit(newCharacter);
    this.name.set("");
    this.power.set(0);
  }

  convertToNumber(value: string) {
    return Number(value);
  }
}
