import { Component } from '@angular/core';


interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-virtualScroller';

  items: Item[] = [];

  constructor() {
    // Generate a large list of items
    for (let i = 0; i < 10000; i++) {
      this.items.push({ id: i, name: `Item ${i}` });
    }
  }
}
