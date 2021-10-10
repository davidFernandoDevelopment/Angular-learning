import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heros: string[] = [
    'hulk',
    'thor',
    'spiderman',
    'wolverine'
  ];
  heroRemove!: string;

  constructor() { }

  ngOnInit(): void {
  }
  deleteHero(): void {
    this.heroRemove = this.heros.shift()!;
  }
}
