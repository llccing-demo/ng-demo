import { Component } from '@angular/core';
import { range } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rxjs';

  ngOnInit() {
    this.firstRxFn();
  }

  firstRxFn() {
    range(1, 200)
      .pipe(
        map((i) => i),
        filter((i) => i > 180),
        take(3)
      )
      .subscribe(console.log);
  }
}
