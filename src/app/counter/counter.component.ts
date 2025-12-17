import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count = 0;
  onIncrement() {
    this.count++;
  }
  onDecrement() {
    this.count--;
  }

  onReset(){
    this.count = 0;
  }
}
