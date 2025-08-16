import { Component, signal } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter-page.component.html'
})
export class CounterPageComponent {
  public counter: number = 10;
  public counterSignal = signal(10);

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update(current => current + value);
  }

  resetCounter() {
    this.counter = 10;
    this.counterSignal.set(10);
  }
}