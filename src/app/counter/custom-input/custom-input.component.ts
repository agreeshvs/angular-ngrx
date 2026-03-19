import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent {
  customValue: number = 10;

  constructor(private store: Store) { }
  onCustomValueBtnClicked(){
    this.store.dispatch(
      customIncrement({value: +this.customValue})
    );
  }
}
