import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html'
})
export class HeroComponent {
  @Input()
  name: string = 'Hulk';

  @Input()
  age: number = 26;

  getInfo(): string {
    return `${this.name} - ${this.age}`;
  }

  get nameCapitalize(): string {
    return this.name.toUpperCase();
  }

  changeName(): void {
    this.name = 'Thor';
  }
  changeAge() {
    this.age = 27;
  }
}
