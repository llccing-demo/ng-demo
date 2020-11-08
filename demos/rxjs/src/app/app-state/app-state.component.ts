import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { scan, map } from 'rxjs/operators';

@Component({
  selector: 'app-app-state',
  templateUrl: './app-state.component.html',
  styleUrls: ['./app-state.component.css']
})
export class AppStateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const btn = document.querySelector('button');
    // fromEvent(btn, 'click').pipe(
    //   // 对流进行 scan(reduce) 操作，以获取 count 的值
    //   scan(count => count + 1, 0))
    //   .subscribe(value => document.querySelector('#count').innerHTML = `${value}`)


    const increase$ = fromEvent(btn, 'click');
    increase$.pipe(map(() => state => Object.assign({}, state, { count: state.count + 1 })))

    // 此表达式不可调用。类型 "Event" 没有调用签名。
    // const state = increase$.pipe(scan((state, changeFn) => changeFn(state), { count: 0 }))
  }

}
