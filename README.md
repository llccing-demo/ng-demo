# ng-demo

## demos

### custom schematics

基于 schematics 实现自定义文件操作，类似 Vue/cli 的插件功能。

目录：hello

### ng-alain

结合 [ng-alain](https://ng-alain.com/docs/getting-started/zh) 来提效

目录：ng-alain-pra

### dynamic component 动态组件

目录：dynamic-component

参考：
- [https://angular.cn/guide/dynamic-component-loader](https://angular.cn/guide/dynamic-component-loader) 官方demo、
- [https://blog.csdn.net/qq_40896410/article/details/95059909](https://blog.csdn.net/qq_40896410/article/details/95059909) 多 tab 的例子



### custom formControl 自定义表单组件

自定义表单组件，对于在 form 中使用自定表单很实用，可以直接使用 formContorl 指令。

```html
<ngx-jquery-slider [formControl]="ctrl"></ngx-jquery-slider>
```

目录：custom-formControl

参考
- [https://segmentfault.com/a/1190000014129567](https://segmentfault.com/a/1190000014129567) 北航小哥翻译的内容，很棒
- [https://github.com/maxkoretskyi/custom-form-control-that-implements-control-value-accessor-and-wraps-jquery-slider](https://github.com/maxkoretskyi/custom-form-control-that-implements-control-value-accessor-and-wraps-jquery-slider) 源码部分

### zorroTable850

目录：zorroTable850

- 验证 ng-zorro-antd@8.5.0 版本，table fix column 问题。
- 发现 datepicker 组件， `[nzInputReadOnly]` 属性在 9.3.0 中才添加。为了解决 ipad 端点击时间控件后，弹出输入框的问题。


### zorroTable920

目录：zorroTable920

- 验证 ng-zorro-antd@8.5.0 版本，table fix column 问题。

