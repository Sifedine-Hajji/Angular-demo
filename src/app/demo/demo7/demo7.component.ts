import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit {

  isVisible = false;
  teamNba :string [] = [];
  maVariable : string = "";

  constructor() { }

  ngOnInit(): void {
    this.teamNba = ["Los Angeles Clippers","Los Angeles Lakers","Chicago bulls","Golden State Wariors","Cleveland Cavaliers","Miami Heat","Brooklyn Nets", "Milwaukee Bucks","Toronto Raptors","Philadelphia 76ers","Phoenix Suns"];
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }
}
