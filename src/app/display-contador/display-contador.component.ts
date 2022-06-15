import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/app.state';

@Component({
  selector: 'app-display-contador',
  templateUrl: './display-contador.component.html',
  styleUrls: ['./display-contador.component.css']
})
export class DisplayContadorComponent implements OnInit {

  constructor(private store:Store<{ app: IAppState}>) { }
  counter = 0;
  counter$ = this.store.select('app', 'counter');

  ngOnInit(): void {
  }


}
