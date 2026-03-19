import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-value',
  templateUrl: './counter-value.component.html',
  styleUrls: ['./counter-value.component.css'],
})
export class CounterValueComponent implements OnInit {
  counter: number = 0;
  counterSubscription: Subscription | null = null;

  constructor(private store: Store<{counter: CounterState}>) {

  }

  ngOnInit() {
    this.counterSubscription = this.store.select("counter").subscribe((data: any) => {
      this.counter = data.counter;
    });
  }

  ngOnDestroy() {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
