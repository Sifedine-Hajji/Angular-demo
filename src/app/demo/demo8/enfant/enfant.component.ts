import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent implements OnInit {

  @Input() nom : string = "";
  @Input() age : string = "";
  @Input() list : string[] = [];

  @Output() monEvent : EventEmitter<string>;
  
  constructor() {
    this.monEvent = new EventEmitter<string>();
   }

  ngOnInit(): void {
  }

  saluer() {
    this.monEvent.emit('Bonjour Père')
  }
}
