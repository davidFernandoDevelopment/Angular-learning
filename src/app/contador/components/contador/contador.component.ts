import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
})
export class ContadorComponent {
  title: string = "Contador";
  value: number = 0;
  base: number = 7;

  add() {
    this.value += this.base;
  }
  remove() {
    this.value -= this.base;
  }
}
