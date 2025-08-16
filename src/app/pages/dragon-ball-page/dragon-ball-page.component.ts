import { Component, signal } from '@angular/core';

type Character = {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragon-ball-page',
  imports: [],
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

  convertToNumber(value: string){
    return Number(value);
  }

  addCharacter(){
    if(!this.name() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    this.characters.update(current => [...current, newCharacter]);
    this.name.set("");
    this.power.set(0);
  }
}
