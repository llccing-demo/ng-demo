import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs'
import { filter, map, delay, throttleTime, debounceTime, take, takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-control-stream',
  templateUrl: './control-stream.component.html',
  styleUrls: ['./control-stream.component.css']
})
export class ControlStreamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // 输入hello world
    var input$ = fromEvent(document.querySelector('input'), 'input');

    // 过滤掉字符长度 < 2 的字符
    input$.pipe(
      filter(event => (event.target as HTMLInputElement).value.length > 2),
      map((event) => (event.target as HTMLInputElement).value),
    ).subscribe(value => console.log(value))

    // 延迟事件
    input$.pipe(
      delay(200),
      map(event => (event.target as HTMLInputElement).value)
    ).subscribe(value => console.log('delay', value))

    // 每 200ms 只能通过一个事件
    input$.pipe(
      throttleTime(2000),
      map(event => (event.target as HTMLInputElement).value)
    ).subscribe(value => console.log('throttleTime', value))

    // 停止输入 200ms 后方能通过最新的事件
    input$.pipe(
      debounceTime(200),
      map(event => (event.target as HTMLInputElement).value))
      .subscribe(value => console.log('debounceTime', value))

    // 在 3 次事件后停止事件流
    input$.pipe(
      take(3),
      map(event => (event.target as HTMLInputElement).value)
    ).subscribe(value => console.log('take', value))

    // 直到其他 observable 触发事件才停止事件流
    var stopStream$ = fromEvent(document.querySelector('button'), 'click');
    input$.pipe(
      takeUntil(stopStream$),
      map(event => (event.target as HTMLInputElement).value)
    ).subscribe(value => console.log('takeUntil', value))

  }

  ngAfterViewInit() {

    // input$.pipe(
    //   filter(event => event.target.value.length > 2),
    //   map(event => event.target.value))
    //   .subscribe(value => console.log(value))
    // 上面的写法报错了，因为 ts 的类型约束。转为 HTMLInputElement 即可识别
    // 解决方式如下：
    // https://stackoverflow.com/questions/44321326/property-value-does-not-exist-on-type-eventtarget-in-typescript

  }
}
