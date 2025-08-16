import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../types/character.type';

function loadFromLocalStorage(): Character[] {
  const characters = localStorage.getItem("characters");
  return characters ? JSON.parse(characters) : [];
}

@Injectable({ providedIn: 'root' })
export class DragonBallService {
  public characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem("characters", JSON.stringify(this.characters()));
  });

  addCharacter(character: Character) {
    this.characters.update(current => [...current, character]);
  }
}
