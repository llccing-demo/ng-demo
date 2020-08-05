import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

// 为了使用 jQuery 从而声明
declare var $: any;

@Component({
  selector: 'ngx-jquery-slider',
  template: ` <div #location></div> `,
  styles: ['div {width: 200px}'],
})
export class NgxJquerySliderComponent implements OnInit {
  @ViewChild('location') location: ElementRef;
  @Input() value;
  @Output() private valueChange = new EventEmitter();
  widget;
  constructor() {}

  ngOnInit(): void {
    // 这里要注意，ngOnInit 时 DOM 还没准备好，所以不能取得 DOM
    // this.widget = $(this.location.nativeElement).slider();
  }

  ngAfterViewInit() {
    this.widget = $(this.location.nativeElement).slider({
      stop: (event, ui) => {
        console.log('stop 事件回调', ui.value);
        this.valueChange.emit(ui.value);
      },
    });
    this.widget.slider('value', this.value);
  }

  // 注意，这里是 ngOnChanges 不是 ngOnChange，差个 s 浪费好多时间……
  // 这个方法，实际用不到，因为已经通过 emit 一个事件来修改传入的 value 的来源了
  //   ngOnChanges() {
  //     if (this.widget && this.widget.slider('value') !== this.value) {
  //       console.log('ngOnChange 监测属性变化的钩子', this.widget.slider('value'));
  //       this.widget.slider('value', this.value);
  //     }
  //   }
}
