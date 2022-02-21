import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isVisible = false;

  liens : Link[] = [
    {
      title : 'Demo',
      url : '/demo',
      children : [
        {title:'D1 - One Way Binding', url:'demo/demo1'},
        {title:'D2 - Two Way Binding', url:'demo/demo2'},
        {title:'D3 - Event Binding', url:'demo/demo3'},
        {title:'D4 - Attribute Binding', url:'demo/demo4'},
        {title:'D5 - Pipes', url:'demo/demo5'},
        {title:'D6 - Directives', url:'demo/demo6'},
        {title:'D7 - Structurals Directives', url:'demo/demo7'},
        {title:'D8 - Input & Output', url:'demo/demo8'},
      ],
    },
    {
      title : 'exercice',
      url : '/exercice',
      children : [
      {title:'E1 - Chronomètre', url: 'exercice/exercice1'}
    ]
    }
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

  afficherEnfant(i : number) {
    this.liens[i].isVisible = !this.liens[i].isVisible;
  }
}
export class Link {
  public title : string = "";
  public url? : string;
  public children? : Link[];
  public isVisible? : boolean;
}
