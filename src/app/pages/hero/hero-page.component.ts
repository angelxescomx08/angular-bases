import { CommonModule } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  selector: 'hero-page',
  templateUrl: './hero-page.component.html',
  imports: [CommonModule]
})
export class HeroPageComponent {
  public name = signal("Ironman");
  public age = signal(45);
  public heroDescription = computed(() => `${ this.name() } - ${ this.age() }`);

  changeHero(){
    this.name.set("Spiderman");
    this.age.set(22);
  }

  resetForm(){
    this.name.set("Ironman");
    this.age.set(45);
  }

  changeAge(){
    this.age.set(60);
  }
}