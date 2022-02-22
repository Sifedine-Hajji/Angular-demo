import { Component, OnInit } from '@angular/core';
import {Produit} from '../exercice2/exercice2-enfant/exercice2-enfant.component'

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.scss']
})
export class Exercice2Component implements OnInit {
  leNom : string = "Salade";
  lePrix : number = 1.50;
  leLien : string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK85dGZrekHjMcYQ7E0h4qq4vS4mRhp_oVkQ&usqp=CAU";


  listProducts : Produit[] = [
    {
      name : "Tomate",
      img : "https://emart.cd/no/wp-content/uploads/2018/05/tomates-emart.cd_.jpg",
      price : 2
    },
    {
      name : "Pomme de terre",
      img : "https://emart.cd/no/wp-content/uploads/2018/05/pommes-de-terre-emart.cd_-768x768.png",
      price : 4
    },
    {
      name : "Oignons",
      img : "https://www.drivezeclerc.re/23209-large_default/oignon-vrac-1kg.jpg",
      price : 4
    },
    {
      name : "Fraise",
      img : "https://cdn.metro-group.com/fr/fr_pim_710555001001_01.png?w=400&h=400&mode=pad",
      price : 6
    },
    {
      name : "Cerises",
      img : "https://media.auchan.fr/CLDRIVE98800190_230x230/B2CD/",
      price : 7.50
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ajouterProduit() {
    let produit = new Produit(this.leNom,this.leLien,this.lePrix);
    this.listProducts.push(produit);
  }

}
