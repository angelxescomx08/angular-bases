import { Component, input } from '@angular/core';
import { Character } from '../../../types/character.type';

@Component({
  selector: 'character-list',
  imports: [],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  public characters = input.required<Character[]>();
  public listName = input.required<string>();
}
