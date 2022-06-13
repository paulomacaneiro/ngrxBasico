import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState,decrementaContadorAction, incrementaContadorAction } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrxBasico';

  constructor(private store:Store<{ app: IAppState}>) {

  }

  counter$ = this.store.select('app', 'counter');
  incrementaContador() {
    this.store.dispatch(incrementaContadorAction());
  }
  decrementaContador() {
    this.store.dispatch(decrementaContadorAction());
  }
}
