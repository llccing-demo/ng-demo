# ng-demo

## demos

### dynamic component 动态组件

参考：
- [https://angular.cn/guide/dynamic-component-loader](https://angular.cn/guide/dynamic-component-loader) 官方demo、
- [https://blog.csdn.net/qq_40896410/article/details/95059909](https://blog.csdn.net/qq_40896410/article/details/95059909) 多 tab 的例子


### custom formControl 自定义表单组件

自定义表单组件，对于在 form 中使用自定表单很实用，可以直接使用 formContorl 指令。

```html
<ngx-jquery-slider [formControl]="ctrl"></ngx-jquery-slider>
```

参考
- [https://segmentfault.com/a/1190000014129567](https://segmentfault.com/a/1190000014129567) 北航小哥翻译的内容，很棒
- [https://github.com/maxkoretskyi/custom-form-control-that-implements-control-value-accessor-and-wraps-jquery-slider](https://github.com/maxkoretskyi/custom-form-control-that-implements-control-value-accessor-and-wraps-jquery-slider) 源码部分

### zorroTable850

- 验证 ng-zorro-antd@8.5.0 版本，table fix column 问题。
- 发现 datepicker 组件， `[nzInputReadOnly]` 属性在 9.3.0 中才添加。为了解决 ipad 端点击时间控件后，弹出输入框的问题。


### zorroTable920

- 验证 ng-zorro-antd@8.5.0 版本，table fix column 问题。

