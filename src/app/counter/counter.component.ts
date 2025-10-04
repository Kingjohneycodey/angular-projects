import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [ CommonModule ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  getCounterStatus(): string {
    if (this.count > 0) {
      return 'positive';
    } else if (this.count === 0) {
      return 'neutral';
    } else {
      return 'negative';
    }
  }
}
