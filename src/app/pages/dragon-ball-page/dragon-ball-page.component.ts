import { Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragon-ball/character-list/character-list.component';
import { Character } from '../../types/character.type';
import { DragonBallCharacterAddComponent } from '../../components/dragon-ball/dragon-ball-character-add/dragon-ball-character-add.component';

@Component({
  selector: 'app-dragon-ball-page',
  imports: [CharacterListComponent, DragonBallCharacterAddComponent],
  templateUrl: './dragon-ball-page.component.html',
  styleUrl: './dragon-ball-page.component.css'
})
export class DragonBallPageComponent {

  public name = signal("");
  public power = signal(0);

  public characters = signal<Character[]>([
    { id: 1, name: "Goku", power: 100 },
    { id: 2, name: "Vegeta", power: 90 },
    { id: 3, name: "Krilin", power: 80 },
    { id: 4, name: "Piccolo", power: 70 },
    { id: 5, name: "Gohan", power: 60 },
  ]);

  addCharacter(character: Character) {
    this.characters.update(current => [...current, character]);
  }

  convertToNumber(value: string) {
    return Number(value);
  }

}
