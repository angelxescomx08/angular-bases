import { Injectable, signal } from '@angular/core';
import { Character } from '../types/character.type';

@Injectable({ providedIn: 'root' })
export class DragonBallService {
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
}
