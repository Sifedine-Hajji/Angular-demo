import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component implements OnInit {
  constructor() { }

  leSalut : string = 'En attente dun bonjour de lenfant';

  listeHobbies : string[] = ["Zumba", "Dessin", "Code"];

  ngOnInit(): void {
  }

  afficherSalut(txt : string) {
    this.leSalut = txt;
  }

}
