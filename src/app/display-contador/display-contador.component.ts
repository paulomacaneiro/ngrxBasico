import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-contador',
  templateUrl: './display-contador.component.html',
  styleUrls: ['./display-contador.component.css']
})
export class DisplayContadorComponent implements OnInit {

  constructor() { }
  counter = 0;
  ngOnInit(): void {
  }

}
