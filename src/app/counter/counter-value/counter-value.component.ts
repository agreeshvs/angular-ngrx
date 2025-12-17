import { Component, inject, Input } from '@angular/core';
import { CounterService } from 'src/app/Service/counter.service';

@Component({
  selector: 'app-counter-value',
  templateUrl: './counter-value.component.html',
  styleUrls: ['./counter-value.component.css'],
})
export class CounterValueComponent {
  @Input() count: number = 0;
}
