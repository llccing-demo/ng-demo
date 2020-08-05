import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

// 为了使用 jQuery 从而声明
declare var $: any;

const SLIDER_VALUE_ACCESSOR: any = {
  // 注意，这里是 provide，不是 provider！！
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgxJquerySliderComponent),
  multi: true,
};

@Component({
  selector: 'ngx-jquery-slider',
  providers: [SLIDER_VALUE_ACCESSOR],
  template: ` <div #location></div> `,
  styles: ['div {width: 200px}'],
})
export class NgxJquerySliderComponent implements ControlValueAccessor {
  @ViewChild('location') location: ElementRef;
  widget;
  onChange;
  value;

  constructor() {}

  writeValue(value) {
    console.log('writeValue_1', value);
    this.value = value;
    if (this.widget && value) {
      this.widget.slider('value', value);
    }
  }
  registerOnChange(fn) {
    console.log('registerOnChange_2', fn);
    this.onChange = fn;
  }
  registerOnTouched() {
    console.log('registerOnTouched_3');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit_4');
    this.widget = $(this.location.nativeElement).slider({
      value: this.value,
      stop: (event, ui) => {
        this.onChange(ui.value);
        console.log('stop 事件回调', ui.value);
      },
    });
  }
}
