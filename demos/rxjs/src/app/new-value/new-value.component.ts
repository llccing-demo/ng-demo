import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs'
import { map, pluck, pairwise, distinct, distinctUntilChanged } from 'rxjs/operators'
@Component({
  selector: 'app-new-value',
  templateUrl: './new-value.component.html',
  styleUrls: ['./new-value.component.css']
})
export class NewValueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var input$ = fromEvent(document.querySelector('input'), 'input');

    // input$.pipe(map(event => (event.target as HTMLInputElement).value))
    //   .subscribe(value => console.log(value))

    // // 通过提取属性，传递一个新的值
    // input$.pipe(pluck('target', 'value'))
    //   .subscribe(console.log)

    // // 传递之前的两个值（最新的，倒数第一和第二）
    // input$.pipe(pluck('target', 'value'), pairwise()).subscribe(console.log)

    // // 只会通过唯一的值，单个值，单词不算
    // input$.pipe(pluck('data') ,distinct()).subscribe(console.log)

    // 不会传递重复的值，仅仅和最近的上次对比
    input$.pipe(pluck('data'), distinctUntilChanged()).subscribe(console.log)
  }

}
