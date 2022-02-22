import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice2-enfant',
  templateUrl: './exercice2-enfant.component.html',
  styleUrls: ['./exercice2-enfant.component.scss']
})
export class Exercice2EnfantComponent implements OnInit {

  @Input() products : Produit[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  supprimerProduit(i : number) {
    this.products.splice(i, 1);
  }

}

export class Produit {
  constructor(
    public name : string = "",
    public img : string = "",
    public price : number
  ) {
    
  }
  
}
