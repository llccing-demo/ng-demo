import { Component, OnInit } from '@angular/core';
import { of, from, fromEvent, Subject, Observable, observable } from 'rxjs';

@Component({
  selector: 'app-rx-create',
  templateUrl: './rx-create.component.html',
  styleUrls: ['./rx-create.component.css'],
})
export class RxCreateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    of('Tom', 'bar').subscribe(console.log);

    from([12, 14, 16]).subscribe(console.log);

    // fromPromise 已经被 from 替换了？
    from(this.mockFetchData()).subscribe(console.log);

    this.createObservables();
  }

  // 创建 observables
  createObservables() {
    // 在外部产生事件
    const myObservable = new Subject();
    myObservable.subscribe((value) => console.log('在外部产生事件', value));
    myObservable.next('pppp');

    // 内部产生事件
    const innerObservable = new Observable((observer) => {
      observer.next('www');
      setTimeout(() => observer.next('666'), 1000);
    });
    innerObservable.subscribe((value) => console.log('内部产生事件', value));
  }

  ngAfterViewInit(): void {
    const btnClickEvent$ = fromEvent(document.querySelector('button'), 'click');
    btnClickEvent$.subscribe(console.log);
  }

  mockFetchData() {
    return new Promise((resolve) => {
      const data = { data: [1, 2, 3], code: 200 };
      setTimeout(() => {
        resolve(data);
      }, 800);
    });
  }
}
