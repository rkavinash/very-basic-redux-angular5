import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './store';
import { INCREMENT, DECREMENT, MULTIPLY10 } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @select()
  counter;

  @select()
  multiple;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  increment() {
    this.ngRedux.dispatch({type: INCREMENT});
  }

  decrement() {
    this.ngRedux.dispatch({type: DECREMENT});
  }

  multiply10() {
    this.ngRedux.dispatch({type: MULTIPLY10});
  }
}
